// Browser smoke test for Trash Tycoon 3D: plays one full loop
// (trash -> machine -> goods -> port -> cash -> purchase) in headless Chromium.
// Run: node tests/trash-tycoon.smoke.cjs   (needs the `playwright` package)
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..', 'trash-tycoon');
const OUT = process.env.SHOT_DIR || null;
const TYPES = { '.html': 'text/html', '.js': 'text/javascript' };

function serve() {
  return new Promise(res => {
    const srv = http.createServer((req, rsp) => {
      const f = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/$/, '/index.html'));
      if (!f.startsWith(ROOT) || !fs.existsSync(f)) { rsp.writeHead(404); return rsp.end(); }
      rsp.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
      fs.createReadStream(f).pipe(rsp);
    }).listen(0, () => res(srv));
  });
}

function check(cond, msg) {
  if (!cond) throw new Error('FAIL: ' + msg);
  console.log('ok -', msg);
}

(async () => {
  const srv = await serve();
  const url = `http://localhost:${srv.address().port}/index.html?test=1`;
  const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  try {
    await page.goto(url);
    await page.waitForFunction(() => window.TT);
    if (OUT) await page.screenshot({ path: path.join(OUT, 'title.png') });
    await page.click('#play');
    const s = () => page.evaluate(() => ({
      load: TT.truck.load, inn: TT.machines[0].inn, out: TT.machines[0].out.n, carry: TT.carry.n,
      dock: TT.dock.n, pad: TT.cash.amount, cash: TT.S.cash, driving: TT.driving, buyer: TT.buyer.state, tut: TT.S.tut,
    }));

    // 1. Drive with input for a moment.
    await page.evaluate(() => { TT.forceInput = { x: -1, z: 0 }; TT.step(1 / 30, 45); TT.forceInput = null; });
    check(errors.length === 0, 'drives without errors');

    // 2. Collect trash by placing the truck on items.
    await page.evaluate(() => {
      for (let k = 0; k < 40 && TT.truck.load < TT.stat.truckCap(); k++) {
        const t = TT.trash[0]; TT.place(t.x - Math.sin(TT.truck.h) * 1.4, t.z - Math.cos(TT.truck.h) * 1.4); TT.step(1 / 30, 3);
      }
    });
    let st = await s();
    check(st.load === 12, `truck filled with trash (${st.load})`);
    if (OUT) await page.screenshot({ path: path.join(OUT, 'park.png') });

    // 3. Unload into the Paper Mill.
    await page.evaluate(() => { TT.place(3, TT.machines[0].z); TT.step(1 / 30, 60); });
    st = await s();
    check(st.load === 0 && st.inn + st.out === 12, `trash unloaded into machine (in ${st.inn}, out ${st.out})`);
    await page.evaluate(() => TT.step(1 / 30, 300));
    st = await s();
    check(st.out >= 8, `machine produced goods (${st.out})`);
    if (OUT) await page.screenshot({ path: path.join(OUT, 'factory.png') });

    // 4. Get out and pick goods up.
    await page.evaluate(() => { TT.action(); TT.step(1 / 30, 2); });
    check(!(await s()).driving, 'stepped out of truck');
    await page.evaluate(() => { TT.place(22.6, TT.machines[0].z); TT.step(1 / 30, 40); });
    st = await s();
    check(st.carry === 6, `picked up goods (${st.carry})`);

    // 5. Sell at the dock; buyer comes and pays.
    await page.evaluate(() => { TT.place(58, 0); TT.step(1 / 30, 30); });
    st = await s();
    check(st.carry === 0, 'dropped goods at the dock');
    if (OUT) await page.screenshot({ path: path.join(OUT, 'port.png') });
    await page.evaluate(() => { TT.place(50, 0); for (let k = 0; k < 900 && TT.cash.amount === 0; k++) TT.step(1 / 30, 1); });
    st = await s();
    check(st.pad === 18, `buyer paid for 6 paper packs ($${st.pad})`);

    // 6. Collect cash.
    await page.evaluate(() => { TT.place(58, 11); TT.step(1 / 30, 10); });
    st = await s();
    check(st.cash === 18 && st.pad === 0, `cash collected ($${st.cash})`);
    await page.evaluate(() => TT.step(1 / 30, 20));
    check((await s()).tut >= 6, 'tutorial reached the upgrade step');

    // 6b. The action button works far from the truck: it calls the truck over.
    const call = await page.evaluate(() => {
      const label = document.getElementById('actTxt').textContent;
      TT.action(); TT.step(1 / 30, 2);
      const d = Math.hypot(TT.truck.x - TT.player.x, TT.truck.z - TT.player.z);
      TT.action(); TT.step(1 / 30, 2);
      return { label, driving: TT.driving, d, visible: getComputedStyle(document.getElementById('act')).display };
    });
    check(call.label === 'CALL TRUCK' && call.visible === 'flex', 'button offers CALL TRUCK when far away');
    check(call.d < 4 && !call.driving, `truck came to the player (${call.d.toFixed(1)} away) and player got back out`);

    // 6c. The footpath to the SELL dock speeds up walking.
    const walk = await page.evaluate(() => {
      const run = z => { TT.place(32, z); TT.forceInput = { x: 1, z: 0 }; TT.step(1 / 30, 30); TT.forceInput = null; return TT.player.x - 32; };
      return { path: run(0), grass: run(8) };
    });
    check(walk.path > walk.grass * 1.3, `walking on the footpath is faster (${walk.path.toFixed(1)} vs ${walk.grass.toFixed(1)})`);

    // 7. Buy a machine and an upgrade.
    await page.evaluate(() => { TT.S.cash = 1000; TT.place(12, TT.machines[1].z); TT.step(1 / 30, 120); });
    check(await page.evaluate(() => TT.S.mach[1] === 0), 'built the Bottle Factory');
    await page.evaluate(() => { TT.place(22, -50); TT.step(1 / 30, 90); });
    check(await page.evaluate(() => TT.S.up.carry === 1), 'bought Strong Arms upgrade');
    await page.evaluate(() => { TT.S.cash += 400; TT.place(46, -50); TT.step(1 / 30, 120); TT.step(1 / 30, 200); });
    check(await page.evaluate(() => TT.helpers.length === 1), 'hired a worker');
    if (OUT) await page.screenshot({ path: path.join(OUT, 'upgrades.png') });

    // 8. Save round-trip.
    await page.evaluate(() => TT.writeSave());
    await page.reload();
    await page.waitForFunction(() => window.TT);
    check(await page.evaluate(() => TT.S.mach[1] === 0 && TT.S.up.carry === 1 && TT.helpers.length === 1), 'progress survives reload');

    // 9. HUD pieces never overlap, on a phone and on a desktop.
    for (const [w, h] of [[360, 780], [412, 915], [1280, 720]]) {
      await page.setViewportSize({ width: w, height: h });
      const hit = await page.evaluate(() => {
        const tip = document.getElementById('tip'), act = document.getElementById('act');
        tip.style.display = 'block'; tip.textContent = 'Tap DRIVE (or press E) to get back in the truck'; act.style.display = 'flex';
        const r = ['cash', 'load', 'mute', 'tip', 'act'].map(id => document.getElementById(id).getBoundingClientRect());
        const ov = (a, b) => a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;
        for (let i = 0; i < r.length; i++) for (let j = i + 1; j < r.length; j++) if (ov(r[i], r[j])) return true;
        return r.some(x => x.left < 0 || x.right > innerWidth);
      });
      check(!hit, `HUD fits without overlap at ${w}x${h}`);
    }

    check(errors.length === 0, 'no page errors' + (errors.length ? ': ' + errors.join(' | ') : ''));
    console.log('\nALL PASSED');
  } catch (e) {
    console.error(e.message);
    if (errors.length) console.error('page errors:', errors);
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
  }
})();
