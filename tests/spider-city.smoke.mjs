// Spider City smoke test: loads the game in headless Chromium and drives each mode
// through the simulation hook (SwiftShader renders far too slowly to play in real time).
// Usage: node tests/spider-city.smoke.mjs   (needs network access to unpkg.com for three.js)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '../spider-city');
const types = { '.html': 'text/html', '.js': 'text/javascript' };
const server = http.createServer((req, res) => {
  const f = path.join(root, decodeURIComponent(req.url.split('?')[0]).replace(/^\/$/, '/index.html'));
  if (!f.startsWith(root) || !fs.existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(0);
const port = server.address().port;

const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
try {
  await page.goto(`http://localhost:${port}/index.html`);
  await page.waitForFunction(() => window.__game, null, { timeout: 60000 });
  await page.evaluate(() => {
    __game.start(); __game.setLoop(false);
    window.S = n => { for (let i = 0; i < n; i++) __game.simStep(1 / 60); };
  });
  const test = async (name, fn) => { await page.evaluate(fn).then(r => assert.ok(r === true, r)); console.log('PASS ' + name); };

  await test('runs along the street', () => {
    const h = __game.hero; __game.cam.yaw = 0; __game.keys.KeyW = true; S(90); __game.keys.KeyW = false;
    return h.state === 'ground' && h.pos.z < 20 || `state ${h.state} z ${h.pos.z}`;
  });
  await test('web-swings and stays outside buildings', () => {
    const h = __game.hero; h.pos.set(0, 0, 0); h.vel.set(0, 0, 0); h.state = 'ground';
    __game.keys.KeyW = true; __game.press('Space'); S(12);
    __game.keys.Space = true; __game.press('Space'); S(1);
    const swung = h.state === 'swing'; S(60); __game.keys.Space = false; __game.keys.KeyW = false; S(30);
    return swung && !__game.world.col.pointInside(h.pos.x, h.pos.y + 0.9, h.pos.z) || `swung ${swung} state ${h.state}`;
  });
  await test('holding SWING chains webs from building to building', () => {
    const g = __game, h = g.hero; h.pos.set(0, 0, 0); h.vel.set(0, 0, 0); h.state = 'ground';
    g.cam.yaw = 0; g.keys.KeyW = true; g.keys.ShiftLeft = true; S(60);
    g.press('Swing'); g.keys.Swing = true;
    let webs = 0, last = null;
    for (let i = 0; i < 360; i++) { S(1); if (h.state === 'swing' && (!last || !last.equals(h.anchor))) { webs++; last = h.anchor.clone(); } }
    g.keys.Swing = false; g.keys.KeyW = false; g.keys.ShiftLeft = false; S(120);
    return webs >= 4 || `only ${webs} webs`;
  });
  await test('climbs a wall', () => {
    const h = __game.hero; h.pos.set(80, 0.25, 30); h.vel.set(0, 0, 0); h.state = 'ground';
    __game.cam.yaw = -Math.PI / 2; __game.keys.KeyW = true; S(150); __game.keys.KeyW = false;
    return h.state === 'wall' && h.pos.y > 2 || `state ${h.state} y ${h.pos.y}`;
  });
  await test('sprints up a wall and runs along one', () => {
    const g = __game, h = g.hero;
    h.pos.set(76, 0.25, 30); h.vel.set(0, 0, 0); h.state = 'ground';
    g.cam.yaw = -Math.PI / 2; g.keys.KeyW = true; g.keys.ShiftLeft = true; S(150);
    const upSpeed = h.state === 'wall' ? h.vel.y : 0, upY = h.pos.y;
    h.pos.set(86, 0.25, 20); h.vel.set(0, 0, 0); h.state = 'ground'; g.cam.yaw = Math.PI + 0.3; S(2);
    let ran = false, peak = 0;
    for (let i = 0; i < 160; i++) { S(1); if (h.state === 'wallrun') { ran = true; peak = Math.max(peak, h.pos.y); } }
    g.keys.KeyW = false; g.keys.ShiftLeft = false; S(90);
    return upSpeed > 15 && upY > 15 && ran && peak > 3 || `up ${upSpeed} y ${upY} ran ${ran} peak ${peak}`;
  });
  await test('jacks and drives a car', () => {
    const h = __game.hero; h.pos.set(9, 0.25, 14); h.state = 'ground'; S(2);
    __game.press('KeyF'); S(1); if (__game.mode !== 'car') return 'mode ' + __game.mode;
    __game.keys.KeyW = true; S(120); __game.keys.KeyW = false;
    const sp = Math.max(...__game.traffic.cars.filter(c => !c.ai).map(c => c.speed));
    __game.press('KeyF'); S(1);
    return sp > 15 && __game.mode === 'foot' || `speed ${sp} mode ${__game.mode}`;
  });
  await test('takes off in the plane and bails out', () => {
    const h = __game.hero, pl = __game.plane; h.pos.set(pl.pos.x - 3, 0, pl.pos.z + 2); h.state = 'ground'; S(2);
    __game.press('KeyF'); S(1); if (__game.mode !== 'plane') return 'mode ' + __game.mode;
    __game.keys.ShiftLeft = true; S(400); __game.keys.KeyS = true; S(90); __game.keys.KeyS = false; S(60); __game.keys.ShiftLeft = false;
    const alt = pl.pos.y; __game.press('KeyF'); S(1);
    return alt > 30 && __game.mode === 'foot' && h.state === 'air' || `alt ${alt} mode ${__game.mode} state ${h.state}`;
  });
  await test('calls a car and corners without spinning out', () => {
    __game.press('Digit1'); S(2); if (__game.mode !== 'car') return 'mode ' + __game.mode;
    const c = __game.traffic.cars.find(k => k.called);
    __game.keys.KeyW = true; S(200); __game.keys.KeyD = true;
    let drift = 0; for (let i = 0; i < 60; i++) { S(1); drift = Math.max(drift, c.drift); }
    __game.keys.KeyD = false; __game.keys.KeyW = false; __game.press('KeyF'); S(2);
    return drift < 5 || `drift ${drift}`;
  });
  await test('blaster takes down a gang member', () => {
    const g = __game, k = g.combat.goons.find(q => q.home.y < 1 && q.down <= 0), h = g.hero;
    h.pos.set(k.pos.x + 12, 0.25, k.pos.z); h.vel.set(0, 0, 0); h.state = 'ground';
    if (!h.gun) g.press('KeyQ'); S(2); g.cam.yaw = Math.PI / 2; g.cam.pitch = 0.05; S(20);
    g.setMouse(true, false); S(150); g.setMouse(false, false);
    return k.down > 0 || `goon hp ${k.hp}`;
  });
  await test('calls a tank and fires a shell', () => {
    __game.press('Digit3'); S(2); if (__game.mode !== 'tank') return 'mode ' + __game.mode;
    __game.keys.Space = true; S(2); __game.keys.Space = false;
    const n = __game.combat.projectiles.length; S(330); __game.press('KeyF'); S(2);
    return n === 1 && __game.combat.projectiles.length === 0 || `shells ${n}`;
  });
  await test('calls a plane mid-air and fires rockets', () => {
    __game.press('Digit2'); S(2); if (__game.mode !== 'plane') return 'mode ' + __game.mode;
    __game.keys.Space = true; S(40); __game.keys.Space = false;
    const n = __game.combat.projectiles.length; S(60);
    return n >= 2 && __game.plane.pos.y > 150 || `rockets ${n} alt ${__game.plane.pos.y}`;
  });
  await test('completes a ring race mission for cash', () => {
    const g = __game, m = g.missions, k = m.markers.find(x => x.type === 'race');
    if (g.mode !== 'foot') { g.press('KeyF'); S(2); }
    g.hero.pos.copy(k.pos); g.hero.state = 'ground'; S(3);
    if (m.current?.type !== 'race') return 'race did not start';
    const cash = m.cash, c = m.current;
    for (let i = 0; i < 7; i++) { g.hero.pos.copy(c.pts[c.idx]); g.hero.vel.set(0, 0, 0); g.hero.state = 'air'; S(2); }
    return !m.current && m.cash > cash || `cash ${cash} -> ${m.cash}`;
  });
  await test('slow motion slows the world', () => {
    const g = __game; g.press('KeyB'); const t0 = g.world.uniforms.uTime.value; S(60);
    const d = g.world.uniforms.uTime.value - t0;
    return d > 0.25 && d < 0.5 || `world time ${d}`;
  });
  await test('police chase a wanted player and can be taken down', () => {
    const g = __game;
    if (g.mode !== 'foot') { g.press('KeyF'); S(2); }
    g.hero.pos.set(11, 0.25, 30); g.hero.vel.set(0, 0, 0); g.hero.state = 'ground';
    g.police.crime(3); S(60 * 22);
    const near = g.police.cars.filter(c => c.active && !c.dead && c.pos.distanceTo(g.hero.pos) < 60);
    if (!near.length) return 'no cruiser closed in: ' + g.police.cars.map(c => c.pos.distanceTo(g.hero.pos).toFixed(0)).join(',');
    g.combat.explode(near[0].pos.clone(), 6, 400); S(2);
    return near[0].dead === 1 || 'cruiser survived';
  });
  await test('throws a grenade that explodes', () => {
    const g = __game; S(60);
    g.press('KeyG'); S(2);
    const n = g.combat.projectiles.filter(p => p.kind === 'grenade').length; S(160);
    return n === 1 && !g.combat.projectiles.some(p => p.kind === 'grenade') || `grenades ${n}`;
  });
  await page.evaluate(() => __game.render());
  assert.deepEqual(errors, []);
  console.log('PASS no page errors');
} finally {
  await browser.close();
  server.close();
}
