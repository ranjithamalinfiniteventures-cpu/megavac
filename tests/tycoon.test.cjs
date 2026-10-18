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
    assert.ok(await page.evaluate(() => tycoon.purchase('rebirth')));
    const s = await get(() => ({r: tycoon.state.rebirths, owned: tycoon.state.owned.size, cash: tycoon.state.cash, drops: tycoon.drops.length}));
    assert.deepEqual(s, {r: 1, owned: 0, cash: 0, drops: 0});
    assert.equal(await get(() => tycoon.incomePerSecond()), 0);
    assert.deepEqual(await get(() => [...tycoon.buttons.keys()]), ['dropper1']);
  });

  test('time away is credited to the bank', async () => {
    await page.evaluate(() => {
      tycoon.skipSaveOnUnload();
      localStorage.setItem('megatycoon.v1', JSON.stringify({cash: 0, bank: 0, rebirths: 0, owned: ['dropper1'], savedAt: Date.now() - 600e3}));
    });
    await page.reload();
    await page.waitForFunction(() => window.tycoon);
    const bank = await get(() => tycoon.state.bank);
    assert.ok(Math.abs(bank - 2 / 1.5 * 600) < 5, `bank ${bank}`);
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
