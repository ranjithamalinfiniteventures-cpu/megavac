// Drives the real tycoon page in headless Chromium. The page is loaded with
// ?test, which stops its own animation loop so each test steps time itself.
// Needs network access for three.js from unpkg.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {chromium} = require('playwright');

const ROOT = path.join(__dirname, '..', 'tycoon');
const shotDir = process.env.SHOT_DIR;

function serve() {
  const server = http.createServer((req, res) => {
    const file = path.join(ROOT, decodeURIComponent(new URL(req.url, 'http://x').pathname.replace(/\/$/, '/index.html')));
    if (!file.startsWith(ROOT) || !fs.existsSync(file)) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, {'content-type': 'text/html'});
    fs.createReadStream(file).pipe(res);
  });
  return new Promise(resolve => server.listen(0, () => resolve(server)));
}

(async () => {
  const server = await serve();
  const url = `http://localhost:${server.address().port}/?test`;
  const browser = await chromium.launch({args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader']});
  const page = await browser.newPage({viewport: {width: 1280, height: 720}});
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });

  await page.goto(url);
  await page.waitForFunction(() => window.tycoon, null, {timeout: 30000});
  await page.evaluate(() => { tycoon.skipSaveOnUnload(); localStorage.clear(); });
  await page.reload();
  await page.waitForFunction(() => window.tycoon);

  // Advance the game by `seconds` in 60 fps steps.
  const run = seconds => page.evaluate(s => { for (let i = 0; i < s * 60; i++) tycoon.update(1 / 60); tycoon.render(); }, seconds);
  const stand = (x, z) => page.evaluate(([x, z]) => tycoon.teleport(x, z), [x, z]);
  const get = expr => page.evaluate(expr);
  const tests = [];
  const test = (name, f) => tests.push([name, f]);

  test('formats money', async () => {
    const out = await get(() => [0, 999, 1000, 1234, 999999, 5.6e6, 2.5e9].map(tycoon.short));
    assert.deepEqual(out, ['0', '999', '1K', '1.23K', '1M', '5.6M', '2.5B']);
  });

  test('a new save shows only the free dropper button', async () => {
    assert.deepEqual(await get(() => [...tycoon.buttons.keys()]), ['dropper1']);
    assert.equal(await get(() => tycoon.state.cash), 0);
  });

  test('a first-time player gets the tutorial with arrows', async () => {
    const g = await get(() => ({card: !document.getElementById('guide').hidden, text: document.getElementById('guideText').textContent, step: tycoon.state.tutorial}));
    assert.ok(g.card, 'no tutorial card');
    assert.equal(g.step, 0);
    assert.match(g.text, /first dropper/);
    await run(0.1);
    assert.ok(await get(() => tycoon.guideArrow.visible && tycoon.footArrow.visible), 'guide arrows not shown');
  });

  test('stepping on the free button buys the dropper', async () => {
    const p = await get(() => tycoon.buttonPos(0));
    await stand(p.x, p.z);
    await run(0.1);
    assert.ok(await get(() => tycoon.state.owned.has('dropper1')));
    assert.deepEqual((await get(() => [...tycoon.buttons.keys()])).sort(), ['dropper2', 'walls']);
  });

  test('drops ride the belt into the furnace and fill the bank', async () => {
    await stand(0, 40);
    await run(3);
    assert.ok(await get(() => tycoon.drops.length) > 0, 'no drops on the belt');
    await run(10);
    const bank = await get(() => tycoon.state.bank);
    // a drop takes ~6s to cross the belt, so the first four have sold by now
    assert.ok(bank >= 8, `bank only ${bank} after 13s`);
  });

  test('a button you cannot afford does not buy', async () => {
    const p = await get(() => tycoon.buttonPos(1));
    await stand(p.x, p.z);
    await run(0.2);
    assert.ok(!(await get(() => tycoon.state.owned.has('dropper2'))));
  });

  test('the green pad moves the bank into cash', async () => {
    const before = await get(() => tycoon.state.bank);
    await page.evaluate(() => tycoon.teleport(tycoon.PAD.x, tycoon.PAD.z));
    await run(0.1);
    assert.ok(await get(() => tycoon.state.bank) < 1);
    assert.ok(await get(() => tycoon.state.cash) >= Math.floor(before));
  });

  test('the tutorial follows along: dropper, furnace, collect, then the next button', async () => {
    assert.equal(await get(() => tycoon.state.tutorial), 3);
    assert.match(await get(() => document.getElementById('guideText').textContent), /Copper Dropper/);
  });

  test('measured earnings match the HUD income rate', async () => {
    await stand(0, 40);
    await run(10); // let the belt fill so transit time does not skew the rate
    const start = await get(() => tycoon.state.bank);
    await run(60);
    const earned = (await get(() => tycoon.state.bank)) - start;
    const rate = await get(() => tycoon.incomePerSecond());
    assert.ok(Math.abs(earned - rate * 60) <= rate * 60 * 0.1, `earned ${earned}, expected ~${rate * 60}`);
  });

  test('the belt blocks walking and carries a player standing on it', async () => {
    await stand(-10, -15);
    await page.keyboard.down('w');
    await run(2);
    await page.keyboard.up('w');
    const z = await get(() => tycoon.player.z);
    assert.ok(z > -21.6 && z < -19, `player went through the belt rail, z=${z}`);
    await page.evaluate(() => { tycoon.teleport(-30, -25); tycoon.player.y = 3.5; });
    await run(1);
    const p = await get(() => ({x: tycoon.player.x, y: tycoon.player.y}));
    assert.equal(p.y, 3);
    assert.ok(p.x > -22 && p.x < -18, `belt did not carry the player, x=${p.x}`);
  });

  test('upgrades multiply drop value and progress saves across reloads', async () => {
    await page.evaluate(() => { tycoon.state.cash = 1e6; });
    for (const id of ['dropper2', 'upgrader1']) assert.ok(await page.evaluate(id => tycoon.purchase(id), id));
    const rate = await get(() => tycoon.incomePerSecond());
    assert.ok(Math.abs(rate - (2 + 4) / 1.5 * 1.5) < 1e-9, `rate ${rate}`);
    await page.evaluate(() => tycoon.save());
    await page.reload();
    await page.waitForFunction(() => window.tycoon);
    const owned = await get(() => [...tycoon.state.owned].sort());
    assert.deepEqual(owned, ['dropper1', 'dropper2', 'upgrader1']);
    assert.ok(await get(() => tycoon.state.cash) > 9e5);
  });

  test('rebirth needs everything, then resets with a bonus', async () => {
    await page.evaluate(() => { tycoon.state.cash = 1e7; });
    for (let guard = 0; guard < 20; guard++) {
      const next = await get(() => [...tycoon.buttons.keys()].find(id => id !== 'rebirth'));
      if (!next) break;
      assert.ok(await page.evaluate(id => tycoon.purchase(id), next));
    }
    assert.equal(await get(() => tycoon.state.owned.size), 13);
    await run(4);
    if (shotDir) await page.screenshot({path: path.join(shotDir, 'tycoon_full.png')});
    // The first time it is ready, a card explains rebirth, and stepping on the
    // button asks before resetting anything.
    await run(4); // let the tutorial's closing message finish first
    assert.equal(await get(() => tycoon.currentGuide().id), 'rebirth');
    const rp = await get(() => tycoon.buttonPos(tycoon.ITEMS.find(i => i.id === 'rebirth').slot));
    await stand(rp.x, rp.z);
    await run(0.1);
    assert.ok(await get(() => !document.getElementById('rebirthPanel').hidden), 'no rebirth confirmation');
    assert.equal(await get(() => tycoon.state.rebirths), 0);
    if (shotDir) await page.screenshot({path: path.join(shotDir, 'tycoon_rebirth.png')});
    await page.click('#rbNo');
    await stand(0, 40);
    assert.ok(await page.evaluate(() => tycoon.purchase('rebirth')));
    const s = await get(() => ({r: tycoon.state.rebirths, owned: tycoon.state.owned.size, cash: tycoon.state.cash, drops: tycoon.drops.length}));
    assert.deepEqual(s, {r: 1, owned: 0, cash: 0, drops: 0});
    assert.equal(await get(() => tycoon.incomePerSecond()), 0);
    // Rebirth 1 opens the Crystal Lab, whose first button needs nothing.
    assert.deepEqual(await get(() => [...tycoon.buttons.keys()]), ['dropper1', 'c_dropper1']);
    assert.equal(await get(() => tycoon.skillPoints()), 1);
    await run(0.6);
    const ach = await get(() => [...tycoon.state.achievements]);
    for (const id of ['upgrade', 'overclock', 'ground', 'rebirth1']) assert.ok(ach.includes(id), `missing achievement ${id}`);
    assert.equal(await get(() => document.getElementById('achCount').textContent), `${ach.length}/13`);
  });

  test('the corner pad carries the player up to the new floor and back', async () => {
    const tp = await get(() => tycoon.teleporters.find(t => t.floor === 0 && t.to === 1));
    assert.ok(tp, 'no teleporter up from the ground floor');
    await stand(tp.x, tp.z);
    await run(0.2);
    assert.equal(await get(() => tycoon.currentFloor()), 1);
    assert.equal(await get(() => tycoon.player.y), 30);
    await run(0.5); // standing still on the arrival pad must not bounce back down
    assert.equal(await get(() => tycoon.currentFloor()), 1);
    assert.equal(await get(() => tycoon.currentGuide().id), 'arrive1');
    if (shotDir) await page.screenshot({path: path.join(shotDir, 'tycoon_floor2.png')});
    await page.evaluate(([x, z]) => tycoon.teleport(x - 8, z - 8, 1), [tp.x, tp.z]);
    await run(0.2);
    await page.evaluate(([x, z]) => tycoon.teleport(x, z, 1), [tp.x, tp.z]);
    await run(0.2);
    assert.equal(await get(() => tycoon.currentFloor()), 0);
  });

  test('crystal lab droppers earn on their own floor', async () => {
    await page.evaluate(() => { tycoon.state.cash = 1e6; });
    const p = await get(() => tycoon.buttonPos(tycoon.ITEMS.find(i => i.id === 'c_dropper1').slot));
    await page.evaluate(([x, z]) => tycoon.teleport(x, z, 1), [p.x, p.z]);
    await run(0.1);
    assert.ok(await get(() => tycoon.state.owned.has('c_dropper1')), 'stepping on the floor 2 button did not buy');
    const before = await get(() => tycoon.state.bank);
    await run(12);
    const gained = (await get(() => tycoon.state.bank)) - before;
    assert.ok(gained >= 150 * 1.5 * 3, `floor 2 earned only ${gained}`); // value 150, x1.5 rebirth bonus
  });

  test('skills cost a point each and change the game', async () => {
    assert.ok(await page.evaluate(() => tycoon.buySkill('bargain')));
    assert.equal(await get(() => tycoon.skillPoints()), 0);
    assert.ok(!(await page.evaluate(() => tycoon.buySkill('speed'))), 'bought a skill with no points');
    const cost = await get(() => tycoon.buttons.get('dropper2')?.cost ?? tycoon.buttons.get('c_dropper2')?.cost);
    assert.ok(cost === 36 || cost === 45000, `bargain did not discount, cost ${cost}`);
    await page.evaluate(() => { tycoon.state.rebirths += 2; tycoon.buySkill('jump'); tycoon.buySkill('lucky'); });
    // Double jump: a second press in mid-air goes higher than one jump can.
    await stand(-30, 30);
    await page.keyboard.press('Space');
    await run(0.25);
    await page.keyboard.press('Space');
    await run(0.25);
    const y = await get(() => tycoon.player.y);
    assert.ok(y > 7, `double jump only reached ${y}`);
    await run(2);
    const rate = await get(() => tycoon.incomePerSecond());
    await page.evaluate(() => { tycoon.state.skills.lucky = 0; });
    const plain = await get(() => tycoon.incomePerSecond());
    assert.ok(Math.abs(rate / plain - 1.36) < 1e-9, `lucky gems should add 36% expected value, got ${rate / plain}`);
  });

  test('skills and floors survive a reload', async () => {
    await page.evaluate(() => { tycoon.state.skills.lucky = 1; tycoon.save(); });
    await page.reload();
    await page.waitForFunction(() => window.tycoon);
    const s = await get(() => ({r: tycoon.state.rebirths, skills: tycoon.state.skills, floors: tycoon.teleporters.length}));
    assert.deepEqual(s, {r: 3, skills: {bargain: 1, jump: 1, lucky: 1}, floors: 4});
  });

  test('time away is credited to the bank', async () => {
    await page.evaluate(() => {
      tycoon.skipSaveOnUnload();
      localStorage.setItem('megatycoon.v1', JSON.stringify({cash: 0, bank: 0, rebirths: 0, owned: ['dropper1'], skills: {}, savedAt: Date.now() - 600e3}));
    });
    await page.reload();
    await page.waitForFunction(() => window.tycoon);
    const bank = await get(() => tycoon.state.bank);
    assert.ok(Math.abs(bank - 2 / 1.5 * 600) < 5, `bank ${bank}`);
    // A save from before the tutorial existed, with progress, skips it.
    assert.ok(await get(() => document.getElementById('guide').hidden), 'returning player was shown the tutorial');
  });

  test('on a phone the joystick walks, JUMP jumps and the HUD does not overlap', async () => {
    const {devices} = require('playwright');
    const ctx = await browser.newContext({...devices['iPhone 13']});
    const phone = await ctx.newPage();
    phone.on('pageerror', e => errors.push(e.message));
    await phone.goto(url.replace('?test', ''));
    await phone.waitForFunction(() => window.tycoon);
    await phone.waitForTimeout(500);
    const cdp = await ctx.newCDPSession(phone);
    const touch = (type, touchPoints) => cdp.send('Input.dispatchTouchEvent', {type, touchPoints});
    const start = await phone.evaluate(() => ({x: tycoon.player.x, z: tycoon.player.z}));
    // The thumb lands where the help bar sits, which must not swallow it.
    await touch('touchStart', [{x: 90, y: 600, id: 1}]);
    for (let i = 1; i <= 5; i++) { await touch('touchMove', [{x: 90, y: 600 - i * 10, id: 1}]); await phone.waitForTimeout(30); }
    await phone.waitForTimeout(800);
    const end = await phone.evaluate(() => ({x: tycoon.player.x, z: tycoon.player.z}));
    await touch('touchEnd', []);
    assert.ok(Math.hypot(end.x - start.x, end.z - start.z) > 5, 'the joystick did not move the player');
    await phone.tap('#jump');
    let top = 0;
    for (let i = 0; i < 20; i++) { await phone.waitForTimeout(25); top = Math.max(top, await phone.evaluate(() => tycoon.player.y)); }
    assert.ok(top > 2, `JUMP reached only ${top}`);
    for (const size of [{width: 390, height: 664}, {width: 844, height: 390}]) {
      await phone.setViewportSize(size);
      await phone.waitForTimeout(200);
      const rects = await phone.evaluate(() => ['money', 'next', 'guide', 'controls', 'help', 'jump'].map(id => {
        const r = document.getElementById(id).getBoundingClientRect();
        return {id, l: r.left, t: r.top, r: r.right, b: r.bottom};
      }));
      for (const a of rects) for (const b of rects) {
        if (a.id >= b.id) continue;
        const overlap = a.l < b.r && b.l < a.r && a.t < b.b && b.t < a.b;
        assert.ok(!overlap, `${a.id} overlaps ${b.id} at ${size.width}x${size.height}`);
      }
      assert.equal(await phone.evaluate(() => document.documentElement.scrollWidth), size.width);
    }
    await ctx.close();
  });

  let failed = 0;
  for (const [name, f] of tests) {
    try { await f(); console.log('PASS ' + name); }
    catch (e) { failed++; console.log('FAIL ' + name + '\n  ' + e.message); }
  }
  if (errors.length) { failed++; console.log('FAIL page errors:\n  ' + errors.join('\n  ')); }

  if (shotDir) {
    await page.evaluate(() => tycoon.skipSaveOnUnload() || localStorage.setItem('megatycoon.v1', JSON.stringify({cash: 50, bank: 0, rebirths: 0, owned: ['dropper1'], savedAt: Date.now()})));
    await page.reload();
    await page.waitForFunction(() => window.tycoon);
    await run(6);
    await page.screenshot({path: path.join(shotDir, 'tycoon_start.png')});
    await page.setViewportSize({width: 390, height: 844});
    await run(0.1);
    await page.screenshot({path: path.join(shotDir, 'tycoon_mobile.png')});
  }
  await browser.close();
  server.close();
  process.exit(failed ? 1 : 0);
})();
