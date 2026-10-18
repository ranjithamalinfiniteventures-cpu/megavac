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
  await test('climbs a wall', () => {
    const h = __game.hero; h.pos.set(80, 0.25, 30); h.vel.set(0, 0, 0); h.state = 'ground';
    __game.cam.yaw = -Math.PI / 2; __game.keys.KeyW = true; S(150); __game.keys.KeyW = false;
    return h.state === 'wall' && h.pos.y > 2 || `state ${h.state} y ${h.pos.y}`;
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
  await page.evaluate(() => __game.render());
  assert.deepEqual(errors, []);
  console.log('PASS no page errors');
} finally {
  await browser.close();
  server.close();
}
