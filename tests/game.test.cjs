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
// The opening job of a location is the one a new player judges the game on, so
// the shape of a location is asserted rather than left to journey.job%5. Seeded
// so a regression in the ramp fails instead of flickering.
function jobShape(job){
 run(`rnd=mulberry32(90210+${job});journey.job=${job};startJourney();rnd=Math.random;`);
 return JSON.parse(run(`(()=>{
   const sx=W*.5, sy=H*.55, diag=Math.hypot(W,H);
   let spread=0, near=0;
   for(let i=0;i<n;i++){ if(!alive[i]) continue;
     const d=Math.hypot(bx[i]-sx,by[i]-sy);
     spread+=d/diag; if(d<P.reach) near++; }
   return JSON.stringify({total:roomTotal,spread:spread/roomTotal,
                          underNozzle:near/roomTotal,
                          pattern:PATTERNS[JOB_PATTERN[journey.job%5]]});
 })()`));
}
test('every location warms up before it peaks, and job 1 is the gentlest room',()=>{
 const shape=[];for(let j=0;j<25;j++)shape.push(jobShape(j));
 for(let loc=0;loc<5;loc++){
  const jobs=shape.slice(loc*5,loc*5+5), name='location '+(loc+1);
  for(let s=1;s<5;s++)
    assert.ok(jobs[s].total>jobs[s-1].total,
      `${name} job ${s+1} is not busier than job ${s} (${jobs[s-1].total} -> ${jobs[s].total})`);
  assert.notEqual(jobs[0].pattern,'islands',`${name} opens on the widest pattern`);
  for(let s=1;s<5;s++){
    assert.ok(jobs[0].spread<jobs[s].spread,
      `${name} job ${s+1} is tighter than its opener`);
    assert.ok(jobs[0].underNozzle>jobs[s].underNozzle,
      `${name} job ${s+1} starts with more mess under the nozzle than its opener`);
  }
 }
 for(let j=1;j<25;j++)
  assert.ok(shape[0].total<=shape[j].total,
    `job 1 carries more objects than job ${j+1} (${shape[0].total} vs ${shape[j].total})`);
 assert.ok(shape[0].total<shape[4].total);
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

const key=(k,repeat)=>listeners.keydown.forEach(f=>f({key:k,repeat,preventDefault(){}}));
test('held keys neither strobe the pause menu nor re-save the mute setting',()=>{
 run("startRun('journey');paused=false;muted=false;");
 key('p',false); assert.equal(run('paused'),true);
 for(let i=0;i<4;i++) key('p',true);
 assert.equal(run('paused'),true,'a held pause key toggled the menu back off');
 run('paused=false;');
 const ls=sandbox.localStorage, realSet=ls.setItem; let writes=0;
 ls.setItem=(k,v)=>{writes++;realSet(k,v);};
 key('m',false); for(let i=0;i<7;i++) key('m',true);
 ls.setItem=realSet;
 assert.equal(writes,1,'a held mute key saved once per repeat');
 assert.equal(run('muted'),true);
 run('muted=false;');
});
test('the battery screen names the room you died in, not the one before it',()=>{
 run("bestRoom=1;startRun('challenge');battery=0;step(1/60);");
 assert.equal(run('roomN'),1);
 assert.ok(run("oRecs.innerHTML.includes(rec('Room reached',1))"));
 assert.ok(run("!oRecs.innerHTML.includes(rec('Room reached',0))"));
});
// measureText is stubbed at a fixed width, so give it a length-proportional one
// and read back what hud() actually asked the canvas to draw.
function drawnChrome(width){
 const realMeasure=drawing.measureText, drawn=[];
 drawing.measureText=t=>({width:String(t).length*6});
 drawing.fillText=(t,x,y)=>{drawn.push({t:String(t),x,y});};
 run(`W=${width};H=600;mode='journey';phase='play';paused=false;roomOver=false;`
    +"document.getElementById('over').hidden=true;muted=false;hud();");
 drawing.measureText=realMeasure; delete drawing.fillText;
 return drawn;
}
test('centred play chrome keeps clear of the sound and pause buttons',()=>{
 run('journey.job=24;scrap=1234567;');
 const guard=run('HUD_GUARD');
 for(const d of drawnChrome(320).filter(d=>d.y<=38))
   assert.ok(d.x+d.t.length*3<=320-guard+1,'"'+d.t+'" ran under the corner buttons');
 const wide=drawnChrome(1100).map(d=>d.t);
 assert.ok(wide.some(t=>t==='JOB 25 / 25 · 1,234,567 coins'),'a wide screen shortened text that fits');
 assert.ok(wide.includes('The final frontier'),'a wide screen truncated the job name');
});
test('an ad that never calls back cannot lock the game',()=>{
 const realTimer=sandbox.setTimeout, realClear=sandbox.clearTimeout;
 const timers=[];
 sandbox.setTimeout=(f,ms)=>{timers.push({f,ms});return timers.length;};
 sandbox.clearTimeout=()=>{};
 run(`CG.ready=true;CG.sdk={ad:{requestAd(){}},game:{}};master={gain:{value:1}};muted=false;paused=false;`);
 run('window.rescued=null;CG.rewarded(ok=>{window.rescued=ok;});');
 assert.equal(run('CG.adBusy'),true);
 assert.equal(run('paused'),true);
 assert.equal(timers[timers.length-1].ms,60000);
 timers[timers.length-1].f();
 assert.equal(run('CG.adBusy'),false,'the watchdog left the game paused');
 assert.equal(run('paused'),false);
 assert.equal(run('rescued'),false);
 assert.equal(run("document.getElementById('over').inert"),false);
 sandbox.setTimeout=realTimer; sandbox.clearTimeout=realClear;
});
test('the portal is never told gameplay started twice in a row',()=>{
 const seen=[];
 run(`CG.ready=true;CG.playing=false;CG.sdk={game:{gameplayStart(){window.seen.push('start')},gameplayStop(){window.seen.push('stop')}},ad:{requestAd(){}}};window.seen=[];`);
 run('CG.start();CG.start();CG.stop();CG.stop();CG.start();');
 assert.deepEqual(run('seen.join(",")'),'start,stop,start');
 // Second Wind revives and the ad teardown both report a start.
 run(`window.seen=[];CG.playing=false;paused=false;phase='dead';master={gain:{value:1}};
      CG.sdk.ad={requestAd(t,cb){window.adCallbacks=cb;}};
      CG.rewarded(ok=>{ if(ok){ phase='play'; CG.start(); } });
      adCallbacks.adFinished();`);
 assert.deepEqual(run('seen.join(",")'),'start');
 void seen;
});

// hud() draws through the stubbed context, so read back what it asked for.
function drawnText(setup){
 const drawn=[];
 drawing.fillText=t=>{drawn.push(String(t));};
 run(setup+"document.getElementById('over').hidden=true;hud();");
 delete drawing.fillText;
 return drawn;
}
test('the journey tutorial talks about the job, not about going deeper',()=>{
 run("journey.job=0;startJourney();");
 const j=drawnText("mode='journey';phase='play';paused=false;roomOver=false;tut=2;");
 assert.ok(j.includes('clear the objects and the floor to finish the job'));
 assert.ok(!j.some(t=>t.includes('go deeper')),'journey mode offered to go deeper');
 const c=drawnText("mode='challenge';phase='play';paused=false;roomOver=false;tut=2;");
 assert.ok(c.includes('clear the objects and the floor to go deeper'));
});
test('the tutorial explains crushing the first time a heavy object is in reach',()=>{
 run("tutSeen=false;journey.job=0;startJourney();tut=3;");
 const quiet=drawnText("mx=px=0;my=py=0;phase='play';paused=false;roomOver=false;");
 assert.ok(!quiet.some(t=>t.includes('break it down')),'the crush hint fired with no heavy object near');
 run("n=0;freeT=0;alive.fill(0);boss.i=-1;jam.i=-1;spawn(W/2,H/2,45,9);mx=px=W/2;my=py=H/2;step(1/60);");
 assert.equal(run('tut'),4,'a heavy object inside reach did not trigger the crush hint');
 const shown=drawnText("phase='play';paused=false;roomOver=false;");
 assert.ok(shown.some(t=>t.includes('break it down')));
 run('step(8);');
 assert.equal(run('tut'),5);
 assert.equal(run('tutSeen'),true,'the tutorial never finished');
});
// A room needs the objects gone AND the floor swept. Everything below exists
// because the pair reads as a stuck room the first time one half finishes
// early and the meter keeps averaging them together.
test('the meter names both halves and marks whichever one is still open',()=>{
 run("journey.job=0;startJourney();");
 const swept="mode='journey';phase='play';paused=false;roomOver=false;tut=0;hintT=0;";
 const noDebris=drawnText(swept+"alive.fill(0);n=0;liveN=0;liveMass=0;boss.i=-1;jam.i=-1;"
   +"dirt.fill(1);dirtLeft=dirt.length;");
 assert.ok(noDebris.includes('DEBRIS')&&noDebris.includes('FLOOR'),
   'the meter did not name both halves of the room');
 assert.ok(noDebris.includes('0%'),'a completely dirty floor did not read as 0%');
 assert.ok(!noDebris.some(t=>String(t).includes('% clean')),
   'the old averaged meter is still drawn');
 run("journey.job=0;startJourney();");
 const noFloor=drawnText(swept+"dirt.fill(0);dirtLeft=0;step(1/60);");
 assert.ok(noFloor.some(t=>/^\d+ left$/.test(String(t))),
   'objects left over were not counted on the meter');
});
test('leftover floor dirt is marked as patches rather than one stray pixel',()=>{
 run("journey.job=0;startJourney();");
 const spots=JSON.parse(run("dirt.fill(0);dirtLeft=0;(()=>{const w=grime.width;"
  +"const blob=(x0,y0)=>{for(let y=y0;y<y0+20;y++)for(let x=x0;x<x0+20;x++){"
  +"dirt[y*w+x]=1;dirtLeft++;}};blob(4,4);blob(210,120);})();"
  +"spotT=-9;JSON.stringify(dirtSpots())"));
 assert.equal(spots.length,2,'two dirty corners did not produce two markers');
 const near=(s,x,y)=>Math.hypot(s.x-x*4,s.y-y*4)<28;
 assert.ok(spots.some(s=>near(s,14,14))&&spots.some(s=>near(s,220,130)),
   'the markers did not land on the dirt: '+JSON.stringify(spots));
});
test('the sentence explaining the two halves is spent after two rooms',()=>{
 run("tips.sweep=0;tips.debris=0;");
 const stall="alive.fill(0);n=0;liveN=0;liveMass=0;boss.i=-1;jam.i=-1;"
   +"dirt.fill(1);dirtLeft=dirt.length;roomOver=false;phase='play';paused=false;step(1/60);";
 for(let room=1;room<=3;room++){
  run("journey.job=0;startJourney();"+stall);
  assert.equal(run('tipMark.sweep')===1,room<3,
    'room '+room+' got the sentence wrong');
  const drawn=drawnText("mode='journey';phase='play';paused=false;roomOver=false;tut=0;hintT=0;");
  assert.equal(drawn.some(t=>String(t).includes('Floor still dirty')),room<3,
    'room '+room+' drew the sentence wrong');
 }
 assert.equal(run('tips.sweep'),2,'the sentence budget was not spent exactly twice');
 // The markers are wordless, so they keep going long after the sentence stops.
 run("journey.job=0;startJourney();"+stall+"spotT=-9;");
 assert.ok(JSON.parse(run('JSON.stringify(dirtSpots())')).length>0,
   'the floor markers retired along with the sentence');
});
test('the first run points at the mess and stands down once the player moves',()=>{
 run("tutSeen=false;tips.sweep=9;tips.debris=9;journey.job=0;startJourney();");
 assert.equal(run('coach.on'),true,'a first run did not arm the pointer coach');
 assert.ok(run('coachTarget()')>=0,'the coach had nothing to point at');
 run("runEaten=90;step(1/60);");
 assert.equal(run('coach.on'),true,
   'the coach gave up on suction the player never aimed');
 run("coach.moved=400;step(1/60);");
 assert.equal(run('coach.on'),false,'the coach stayed up after the player moved');
 run("tutSeen=true;journey.job=0;startJourney();");
 assert.equal(run('coach.on'),false,'the coach came back on a later run');
});
test('the battery and daily runs stay shut until the first job is cleared',()=>{
 run('journey.cleared=0;journey.job=0;journey.resume=0;daily.tries={};showOver("menu");');
 assert.equal(els.mmChallenge.disabled,true);
 assert.equal(els.mmDaily.disabled,true);
 assert.equal(els.mmChallengeSub.textContent,'Unlocks after your first job');
 assert.equal(els.mmDailySub.textContent,'Unlocks after your first job');
 run('journey.job=0;startJourney();completeForTest();showOver("menu");');
 assert.equal(run('journey.cleared'),1);
 assert.equal(els.mmChallenge.disabled,false);
 assert.equal(els.mmDaily.disabled,false);
 assert.ok(els.mmChallengeSub.textContent.startsWith('Beat the battery'));
});
test('the portal gets one well formed loading pair, however late the SDK lands',()=>{
 run(`window.seen=[];CG.ready=false;CG.loadOpen=false;CG.loadDone=false;
      CG.sentOpen=false;CG.sentDone=false;
      CG.sdk={game:{loadingStart(){window.seen.push('start')},
                    loadingStop(){window.seen.push('stop')}},ad:{requestAd(){}}};`);
 run('CG.loadingStart();CG.loadingStop();');
 assert.equal(run('seen.join(",")'),'','loading events were sent before the SDK existed');
 run('CG.ready=true;CG.emitLoad();');
 assert.equal(run('seen.join(",")'),'start,stop');
 run('CG.loadingStart();CG.loadingStop();CG.emitLoad();');
 assert.equal(run('seen.join(",")'),'start,stop','the loading pair was reported twice');
});
test('turbo widens the nozzle, then locks behind its cooldown',()=>{
 run("BOOST.adGated=false;journey.job=0;startJourney();");
 const base=run('JSON.stringify([P.reach,P.power,P.throat])');
 assert.equal(run('surgeState()'),'ready');
 run('fireSurge();');
 assert.equal(run('surgeState()'),'on');
 const on=JSON.parse(run('JSON.stringify([P.reach,P.power,P.throat])')), b=JSON.parse(base);
 assert.ok(on[0]>b[0],'reach did not grow');
 assert.ok(on[1]>b[1],'power did not grow');
 assert.ok(on[2]>b[2],'the nozzle did not widen');
 run(`for(let i=0;i<Math.ceil((BOOST.dur+.2)*60);i++)step(1/60);`);
 assert.equal(run('surgeState()'),'cool');
 assert.equal(run('JSON.stringify([P.reach,P.power,P.throat])'),base,'stats stayed boosted after turbo ended');
 run('fireSurge();');
 assert.equal(run('surgeState()'),'cool','turbo re-armed inside its own cooldown');
 run(`for(let i=0;i<Math.ceil((BOOST.cool+.2)*60);i++)step(1/60);`);
 assert.equal(run('surgeState()'),'ready');
});
test('a new room starts with turbo clear rather than mid-boost',()=>{
 run("BOOST.adGated=false;journey.job=0;startJourney();fireSurge();");
 assert.ok(run('surge.t')>0);
 run('journey.job=1;startJourney();');
 assert.equal(run('surge.t'),0);
 assert.equal(run('surge.cd'),0);
 assert.equal(run('surgeState()'),'ready');
});
test('ad gated turbo only pays out on a finished ad',()=>{
 run("journey.job=0;startJourney();BOOST.adGated=true;");
 run(`CG.ready=true;CG.sdk={ad:{requestAd(t,cb){window.adCallbacks=cb;}},game:{}};
      master={gain:{value:1}};muted=false;paused=false;`);
 run('fireSurge();');
 assert.equal(run('surge.t'),0,'turbo fired before the ad finished');
 assert.equal(run('CG.adBusy'),true);
 run('adCallbacks.adError();');
 assert.equal(run('surge.t'),0,'a failed ad still handed out turbo');
 run('fireSurge();adCallbacks.adFinished();');
 assert.ok(run('surge.t')>0,'a finished ad did not hand out turbo');
 run('BOOST.adGated=false;');
});
test('music can be disabled anytime and preference survives save/load',()=>{
 run('bgmMuted=false;startRun("journey");');
 assert.equal(run('bgmMuted'),false);
 key('b',false);
 assert.equal(run('bgmMuted'),true,'key b did not disable background music');
 run('saveGame();');
 const saved = JSON.parse(storage['megavac.v1']);
 assert.equal(saved.bgmMuted,true,'bgmMuted was not saved to storage');
 run('bgmMuted=false;loadGame();');
 assert.equal(run('bgmMuted'),true,'loadGame did not restore bgmMuted state');
 run('toggleMusic();');
 assert.equal(run('bgmMuted'),false,'toggleMusic did not re-enable music');
 run('bgmMuted=false;saveGame();');
});

test('the debris/floor meter reads at a glance, not as a sliver',()=>{
 assert.ok(run('OBJ_BARW')>=80,'the bar width regressed toward the old sliver size');
 assert.ok(run('OBJ_BARH')>=8,'the bar height regressed toward the old sliver size');
 assert.ok(run('OBJ_TXTX')>run('OBJ_BARX')+run('OBJ_BARW'),'the value text overlaps the bar');
});
test('a brand new save points at Cleaning Journey until it is opened',()=>{
 run('menuHintSeen=false;journey.cleared=0;showOver("menu");');
 assert.ok(run('mmPrompt.textContent').includes('Tap Cleaning Journey'),
   'the fresh-save prompt did not point at the journey card');
 run('mmJourney.onclick();'); // clearHint() then startJourney(true)
 assert.equal(run('menuHintSeen'),true,'clicking the card did not clear the hint');
 run('showOver("menu");');
 assert.equal(run('mmPrompt.textContent'),'Pick your pace. Make a little space.',
   'the pointing prompt kept showing after it was cleared');
});
test('the journey card stops pointing once a job has been cleared, even on a fresh flag',()=>{
 run('menuHintSeen=false;journey.cleared=1;showOver("menu");');
 assert.equal(run('mmPrompt.textContent'),'Pick your pace. Make a little space.',
   'a save with progress still got the first-open prompt');
 run('journey.cleared=0;');
});
test('the onboarding flags survive save and load',()=>{
 run('menuHintSeen=true;controlsSeen=true;saveGame();menuHintSeen=false;controlsSeen=false;loadGame();');
 assert.equal(run('menuHintSeen'),true);
 assert.equal(run('controlsSeen'),true);
 run('menuHintSeen=false;controlsSeen=false;saveGame();');
});
test('the key bindings are named once, right after the first job, and never again',()=>{
 run('controlsSeen=false;journey.job=0;startJourney();completeForTest();step(2);');
 assert.equal(run('view'),'jobdone');
 assert.equal(run('jdKeys.hidden'),false,'the controls callout did not show after the first job');
 assert.equal(run('controlsSeen'),true,'controlsSeen was not marked after showing the callout');
 run('journey.job=0;startJourney();completeForTest();step(2);');
 assert.equal(run('jdKeys.hidden'),true,'the controls callout reappeared on a replay of job 1');
});
test('the key bindings callout never fires for a job other than the first',()=>{
 run('controlsSeen=false;journey.job=1;startJourney();completeForTest();step(2);');
 assert.equal(run('jdKeys.hidden'),true,'the controls callout showed for a job other than job 1');
 assert.equal(run('controlsSeen'),false,'controlsSeen was marked by a non-first job');
 run('controlsSeen=false;');
});

// The sandbox has no real WebAudio, so stand up a minimal fake AC/master the
// way sClick() (and every other s*() sound) expects, and count oscillators.
function fakeAudio(){
 run(`window.__osc=0;
  AC={currentTime:0,
    createOscillator:()=>{window.__osc++;return {type:'',frequency:{value:0},
      connect(){},start(){},stop(){}};},
    createGain:()=>({gain:{setValueAtTime(){},exponentialRampToValueAtTime(){},value:1},connect(){}})};
  master={gain:{value:1},connect(){}};`);
}
test('the menu still confirms a tap when music is off, but stays silent when sound is off',()=>{
 fakeAudio(); run('muted=false;bgmMuted=true;showOver("menu");');
 run('document.getElementById("mmInfo").onclick();');
 assert.ok(run('window.__osc')>0,'the menu made no sound at all with only music turned off');
 fakeAudio(); run('muted=true;showOver("menu");document.getElementById("mmGarage").onclick();');
 assert.equal(run('window.__osc'),0,'the click sound played even though sound effects are muted');
 run('muted=false;bgmMuted=false;');
});
test('pressing or holding space always prevents browser page scrolling',()=>{
 let prevented=0;
 listeners.keydown.forEach(f=>f({key:' ',repeat:true,preventDefault(){prevented++;}}));
 assert.ok(prevented>0,'holding space did not prevent page scroll');
});
