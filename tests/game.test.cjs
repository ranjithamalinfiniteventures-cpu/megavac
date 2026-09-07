// Runs the real game simulation with drawing/audio stubbed; no browser dependency.
const vm=require('node:vm');
const fs=require('node:fs');
const assert=require('node:assert/strict');
const code=fs.readFileSync(require('node:path').join(__dirname,'../prototype/feel.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
const listeners={}, storage={};
const drawing=new Proxy({createRadialGradient:()=>({addColorStop(){}}),createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:50}),getImageData:()=>({data:new Uint8ClampedArray(4)}),createImageData:()=>({data:new Uint8ClampedArray(4)})},{get:(o,k)=>o[k]??(()=>{})});
function element(){const e={hidden:false,style:{},children:[],width:620,height:300,classList:{add(){},remove(){},toggle(){}},getContext:()=>drawing,getBoundingClientRect:()=>({width:1100,height:700,left:0,top:0}),appendChild(c){this.children.push(c)},addEventListener(){},querySelector:()=>element(),setPointerCapture(){}};Object.defineProperty(e,'innerHTML',{set(v){this.html=v;this.children=[]},get(){return this.html||''}});return e;}
const els={};
const sandbox={console,Math,Date,Float32Array,Int32Array,Uint8Array,Uint8ClampedArray,JSON,Promise,URLSearchParams,location:{search:''},performance:{now:()=>0},devicePixelRatio:1,requestAnimationFrame(){},setTimeout(){},clearTimeout(){},navigator:{},matchMedia:()=>({matches:false}),addEventListener:(k,f)=>{(listeners[k]??=[]).push(f)},localStorage:{getItem:k=>storage[k]||null,setItem:(k,v)=>storage[k]=v,removeItem:k=>delete storage[k]},document:{hidden:false,head:element(),createElement:element,getElementById:k=>els[k]??=element(),querySelector:()=>element(),addEventListener:(k,f)=>{(listeners[k]??=[]).push(f)}}};
sandbox.window=sandbox;vm.createContext(sandbox);vm.runInContext(code,sandbox);
const run=s=>vm.runInContext(s,sandbox);
run('initAudio=()=>{};window.completeForTest=()=>{alive.fill(0);n=0;freeT=0;liveN=0;liveMass=0;boss.i=-1;jam.i=-1;dirt.fill(0);dirtLeft=0;finishRoom();};');
function test(name,f){f();console.log('PASS '+name);}
if(!process.argv.includes('--quick'))test('25 jobs generate and clear using actual suction at base stats',()=>{
 for(let j=0;j<25;j++){
  run(`journey.job=${j};startJourney();`);
  const frames=run(`(()=>{let frames=0;while(phase==='play'&&frames<60*300){let target=boss.i,dist=Infinity;if(target<0)for(let i=0;i<n;i++){if(alive[i]&&i!==jam.i){const d=(bx[i]-mx)**2+(by[i]-my)**2;if(d<dist){dist=d;target=i;}}}if(target>=0){px=bx[target];py=by[target];pointerSeen=true;}else if(jam.i<0&&dirtLeft>0){const k=dirt.indexOf(1);px=(k%grime.width)*GS;py=Math.floor(k/grime.width)*GS;pointerSeen=true;}step(1/60);frames++;}return frames;})()`);
  console.log('Job '+(j+1)+': '+Math.round(frames/60)+' simulated seconds');
  assert.equal(run('phase'),'result',`job ${j+1} stalled after ${frames/60}s`);
  assert.ok(run('roomBonus')>0);
 }
});
test('challenge awards an upgrade choice after every room',()=>{
 run("startRun('challenge');completeForTest();step(2);bB.onclick();outAdvance(5);completeForTest();step(2);");
 assert.equal(run('view'),'cards');assert.equal(run('cardsShown'),true);
});
test('battery freezes on results and upgrade selection',()=>{
 const b=run('battery');run('step(10)');assert.equal(run('battery'),b);
});
test('daily retry button respects remaining attempts',()=>{
 run("startRun('daily');showOver('daily');");assert.equal(els.bB.hidden,false);
 run("daily.tries[dayKey(0)]=3;showOver('daily');");assert.equal(els.bB.hidden,true);
});
test('resizing preserves remaining objects and elapsed time',()=>{
 run('journey.job=0;startJourney();step(1);');const state=run('JSON.stringify([n,roomT,roomTotal,runScrap])');
 listeners.resize[0]();assert.equal(run('JSON.stringify([n,roomT,roomTotal,runScrap])'),state);
});
test('journey stars and coins survive save/load',()=>{
 run('completeForTest();saveGame();');const state=run('JSON.stringify([scrap,journey])');run('scrap=0;loadGame();');assert.equal(run('JSON.stringify([scrap,journey])'),state);
});
test('relaxed Orbit advances into another loop',()=>{
 run("startRun('relax');applyTier(4);completeForTest();step(4);outAdvance(5);");assert.equal(run('tier'),0);assert.equal(run('phase'),'play');
});
test('backgrounding pauses active play',()=>{
 run("startRun('challenge');document.hidden=true;");listeners.visibilitychange[0]();assert.equal(run('paused'),true);
});
test('finishing a room twice cannot mint duplicate rewards',()=>{
 run('journey.job=0;startJourney();completeForTest();');const coins=run('scrap');run('completeForTest();');assert.equal(run('scrap'),coins);
});
test('next unfinished job survives reopening the game',()=>{
 run('journey.job=3;startJourney();completeForTest();saveGame();journey.job=0;loadGame();startJourney(true);');assert.equal(run('journey.job'),4);
});
test('ads pause, mute, ignore duplicate callbacks, and restore state on error',()=>{
 run(`CG.ready=true;CG.sdk={ad:{requestAd(type,callbacks){window.adCallbacks=callbacks;}},game:{}};master={gain:{value:1}};muted=false;paused=false;`);
 run('window.rewardCount=0;CG.rewarded(ok=>{if(ok)window.rewardCount++;});');
 assert.equal(run('paused'),true);assert.equal(run('CG.adBusy'),true);
 run('adCallbacks.adStarted();');assert.equal(run('master.gain.value'),0);
 run('adCallbacks.adFinished();adCallbacks.adFinished();');assert.equal(run('rewardCount'),1);assert.equal(run('paused'),false);assert.equal(run('master.gain.value'),1);
 run('muted=true;CG.rewarded(()=>{});adCallbacks.adError();');assert.equal(run('CG.adBusy'),false);assert.equal(run('master.gain.value'),0);
});

test('room completion removes remaining clutter and leaves a clean reveal',()=>{
 run("journey.job=0;startJourney();completeForTest();");assert.equal(run('alive.some(v=>v!==0)'),false);assert.equal(run('liveN'),0);
});

test('the screenshot case cannot report 100 percent or complete with boss and heavy debris',()=>{
 run("journey.job=4;startJourney();for(let i=0;i<n;i++)if(alive[i]&&i!==boss.i&&bi[i]>0)kill(i);step(1/60);");
 run('finishRoom();');assert.ok(run('liveN')>0);assert.ok(run('cleanFraction()')<1);assert.equal(run('roomOver'),false);
});
test('starter vacuum can break down an oversized object without upgrades',()=>{
 run("journey.job=0;startJourney();n=0;freeT=0;alive.fill(0);boss.i=-1;window.heavy=spawn(W/2,H/2,45,9);mx=px=W/2;my=py=H/2;pointerSeen=true;for(let t=0;t<100;t++)step(1/60);");
 assert.ok(run('br[window.heavy]')<45||!run('alive[window.heavy]'));
});
test('empty debris field still requires cleaning the floor',()=>{
 run("journey.job=0;startJourney();alive.fill(0);n=0;freeT=0;boss.i=-1;jam.i=-1;step(4);");
 assert.equal(run('roomOver'),false);assert.ok(run('dirtLeft')>0);assert.ok(run('cleanFraction()')<1);
 run("for(let y=0;y<H+50;y+=50)for(let x=0;x<W+50;x+=50)clean(x,y,90);step(1/60);");
 assert.equal(run('roomOver'),true);assert.equal(run('dirtLeft'),0);assert.equal(run('cleanFraction()'),1);
});
test('resizing retains floor coverage rather than refilling dirt',()=>{
 run('journey.job=0;startJourney();clean(W/2,H/2,200);');const before=run('dirtLeft/dirt.length');
 els.stage.getBoundingClientRect=()=>({width:390,height:844,left:0,top:0});
 listeners.resize[0]();
 assert.ok(Math.abs(run('dirtLeft/dirt.length')-before)<.015);
 assert.ok(run('dirtLeft')>0);
 els.stage.getBoundingClientRect=()=>({width:1100,height:700,left:0,top:0});listeners.resize[0]();
});
