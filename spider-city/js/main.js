// Game orchestration: renderer, post-processing, input, camera, modes and HUD.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { World, AIR, ISLAND, HALF, rng } from './world.js';
import { Hero } from './hero.js';
import { Traffic, Plane, Peds, headMat, tailMat } from './vehicles.js';
import { FX, Sound } from './fx.js';

const $ = id => document.getElementById(id);
const canvas = $('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
let pixelRatio = Math.min(devicePixelRatio, 1.5);
renderer.setPixelRatio(pixelRatio);
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 6000);
const rt = new THREE.WebGLRenderTarget(innerWidth * pixelRatio, innerHeight * pixelRatio, { type: THREE.HalfFloatType, samples: 4 });
const composer = new EffectComposer(renderer, rt);
composer.setPixelRatio(pixelRatio);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.55, 0.4, 1.4);
composer.addPass(bloom);
composer.addPass(new OutputPass());

const sound = new Sound();
const world = new World(scene, renderer);
const fx = new FX(scene);
const hero = new Hero(scene, world, fx, sound);
hero.pos.set(11, 0.25, 30); hero.lastSafe.copy(hero.pos);
const rand = rng(77);
const traffic = new Traffic(scene, world, rand);
const plane = new Plane(scene, world);
const peds = new Peds(scene, world, rand, 70);
const headlight = new THREE.SpotLight(0xfff0d0, 0, 90, 0.55, 0.6, 1);
scene.add(headlight, headlight.target);

let mode = 'foot', car = null, playing = false, started = false, tokens = 0, quality = 'high';
const damp = (k, dt) => 1 - Math.exp(-k * dt);
const wrapA = a => Math.atan2(Math.sin(a), Math.cos(a));
const v1 = new THREE.Vector3(), v2 = new THREE.Vector3();

// ---------- input ----------
const keys = {}, pressed = new Set();
let mdx = 0, mdy = 0, lmb = false, rmb = false, lmbHit = false, rmbHit = false, dragging = false;
const gameKeys = ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'];
addEventListener('keydown', e => {
  if (gameKeys.includes(e.code)) e.preventDefault();
  if (!keys[e.code]) pressed.add(e.code);
  keys[e.code] = true;
});
addEventListener('keyup', e => { keys[e.code] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; lmb = rmb = false; });
canvas.addEventListener('mousedown', e => {
  if (!playing) return;
  if (e.button === 0) { lmb = true; lmbHit = true; }
  if (e.button === 2) { rmb = true; rmbHit = true; }
  if (!document.pointerLockElement) dragging = true;
});
addEventListener('mouseup', e => { if (e.button === 0) lmb = false; if (e.button === 2) rmb = false; dragging = false; });
addEventListener('mousemove', e => { if (document.pointerLockElement === canvas || dragging) { mdx += e.movementX; mdy += e.movementY; } });
addEventListener('contextmenu', e => e.preventDefault());
let hadLock = false;
document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement) hadLock = true;
  else if (playing && hadLock) pause();
});
addEventListener('keydown', e => { if (e.code === 'Escape' && playing && !document.pointerLockElement) pause(); });

function start() {
  sound.init();
  $('overlay').classList.add('hidden');
  $('hud').classList.remove('hidden');
  playing = true;
  if (!started) { started = true; cam.yaw = 0; cam.pitch = 0.22; toast('Find the 30 golden tokens across the city'); }
  try { // pointer lock is optional: without it, drag with the mouse to look around
    const p = canvas.requestPointerLock?.();
    if (p && p.catch) p.catch(() => {});
  } catch (e) { /* not allowed in this frame */ }
  canvas.focus?.();
}
function pause() {
  playing = false;
  $('overlay').classList.remove('hidden');
  $('play').textContent = 'RESUME';
}
$('play').addEventListener('click', start);

// ---------- camera ----------
const cam = { yaw: 0, pitch: 0.25, dist: 6, target: new THREE.Vector3(11, 1.7, 30), lastMouse: -10, shake: 0, fov: 70, t: 0 };

function updateCamera(dt) {
  cam.t += dt;
  if (!started) { // attract mode: slow orbit over downtown
    const a = cam.t * 0.05;
    camera.position.set(Math.sin(a) * 260, 120, Math.cos(a) * 260);
    camera.lookAt(0, 40, 0);
    camera.fov = 60; camera.updateProjectionMatrix();
    return;
  }
  if (mdx || mdy) cam.lastMouse = cam.t;
  cam.yaw -= mdx * 0.0024; cam.pitch = Math.max(-0.6, Math.min(1.35, cam.pitch + mdy * 0.0024));
  let target = v1, dist, fov, follow = 14;
  if (mode === 'foot') {
    const sp = hero.speed;
    target.copy(hero.pos); target.y += hero.landT > 0 ? 1.1 : 1.6;
    dist = hero.state === 'swing' ? 7.5 + Math.min(4, sp * 0.06) : hero.state === 'wall' ? 6.5 : 5.2 + Math.min(4, sp * 0.08);
    fov = 68 + Math.min(24, Math.max(0, sp - 8) * 0.55);
    follow = hero.state === 'swing' || hero.state === 'zip' ? 10 : 16;
    cam.shake = Math.max(cam.shake, hero.shake); hero.shake = 0;
  } else if (mode === 'car') {
    const sp = Math.abs(car.speed);
    target.copy(car.pos); target.y += 1.7;
    dist = 8 + Math.min(4, sp * 0.08);
    fov = 68 + Math.min(18, sp * 0.4);
    if (cam.t - cam.lastMouse > 1.0 && sp > 1.5) {
      const want = (car.speed >= 0 ? car.yaw : car.yaw + Math.PI) + Math.PI;
      cam.yaw += wrapA(want - cam.yaw) * damp(3.5, dt);
      cam.pitch += (0.2 - cam.pitch) * damp(2, dt);
    }
    follow = 20;
  } else {
    const fwd = plane.forward;
    target.copy(plane.pos); target.y += 2.2;
    dist = 16 + Math.min(8, plane.speed * 0.08);
    fov = 68 + Math.min(16, plane.speed * 0.2);
    if (cam.t - cam.lastMouse > 1.0) {
      cam.yaw += wrapA(Math.atan2(fwd.x, fwd.z) + Math.PI - cam.yaw) * damp(3, dt);
      cam.pitch += (0.18 - fwd.y * 0.8 - cam.pitch) * damp(2.5, dt);
    }
    follow = 20;
  }
  cam.target.lerp(target, damp(follow, dt));
  const cp = Math.cos(cam.pitch);
  const dir = v2.set(Math.sin(cam.yaw) * cp, Math.sin(cam.pitch), Math.cos(cam.yaw) * cp);
  const hit = world.col.raycast(cam.target, dir, dist + 0.5, true);
  const d = hit ? Math.max(1.0, hit.dist - 0.4) : dist;
  cam.dist += (d - cam.dist) * (d < cam.dist ? 1 : damp(4, dt));
  camera.position.copy(cam.target).addScaledVector(dir, cam.dist);
  if (camera.position.y < 0.4 && mode !== 'plane') camera.position.y = 0.4;
  camera.lookAt(cam.target);
  if (cam.shake > 0.01) {
    camera.position.x += (Math.random() - 0.5) * cam.shake * 0.6;
    camera.position.y += (Math.random() - 0.5) * cam.shake * 0.6;
    cam.shake *= Math.max(0, 1 - 6 * dt);
  }
  cam.fov += (fov - cam.fov) * damp(4, dt);
  camera.fov = cam.fov; camera.updateProjectionMatrix();
}

// ---------- modes ----------
function enterCar(c) {
  c.ai = null; c.parked = false; car = c; mode = 'car';
  hero.state = 'vehicle'; hero.vel.set(0, 0, 0); hero.setVisible(false);
  cam.lastMouse = -10; sound.door();
  toast(c.type === 'taxi' ? 'Taxi jacked!' : 'Car jacked: ' + c.type);
}
function enterPlane() {
  mode = 'plane'; hero.state = 'vehicle'; hero.setVisible(false); cam.lastMouse = -10; sound.door();
  toast('Throttle up with Shift (or hold W on the runway), pull up with S');
}
function exitVehicle() {
  if (mode === 'car') {
    const lx = Math.cos(car.yaw), lz = -Math.sin(car.yaw);
    hero.pos.set(car.pos.x + lx * 2.3, car.pos.y, car.pos.z + lz * 2.3);
    if (world.col.pointInside(hero.pos.x, hero.pos.y + 1, hero.pos.z)) hero.pos.set(car.pos.x - lx * 2.3, car.pos.y, car.pos.z - lz * 2.3);
    hero.vel.set(car.vx * 0.5, 0, car.vz * 0.5);
    hero.state = Math.abs(car.speed) > 6 ? 'air' : 'ground';
    if (hero.state === 'air') hero.vel.y = 6;
    hero.facing = car.yaw; car.idle = 0; car = null;
  } else if (mode === 'plane') {
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(plane.q);
    hero.pos.copy(plane.pos).addScaledVector(up, 3);
    hero.vel.copy(plane.vel).multiplyScalar(0.7); hero.vel.y += 5;
    hero.state = plane.onGround && plane.speed < 5 ? 'ground' : 'air';
    if (hero.state === 'ground') { hero.pos.copy(plane.pos).add(new THREE.Vector3(0, 0, -4)); hero.vel.set(0, 0, 0); }
    else { hero.flipT = 0; toast('Bailed out! Swing to safety'); }
    hero.airT = 0;
  }
  mode = 'foot'; hero.setVisible(true); sound.door();
}
function interact() {
  if (mode !== 'foot') return exitVehicle();
  if (hero.state === 'zip') return;
  if (plane.crashed <= 0 && hero.pos.distanceTo(plane.pos) < 9) return enterPlane();
  const c = traffic.nearest(hero.pos, 5);
  if (c) enterCar(c);
}
function crashPlane() {
  fx.burst('explosion', plane.pos.clone().add(new THREE.Vector3(0, 1.5, 0)));
  sound.explosion(); cam.shake = 1.4;
  plane.m.group.visible = false; plane.crashed = 5;
  if (mode === 'plane') {
    hero.pos.copy(plane.pos); hero.pos.y = Math.max(plane.pos.y, world.col.groundAt(plane.pos.x, plane.pos.z, plane.pos.y + 50, 0)) + 2;
    hero.vel.set(plane.vel.x * 0.2, 16, plane.vel.z * 0.2);
    hero.state = 'air'; hero.airT = 0; hero.flipT = 0;
    mode = 'foot'; hero.setVisible(true);
    toast('CRASH! The plane respawns at the airfield');
  }
  plane.vel.set(0, 0, 0); plane.speed = 0; plane.throttle = 0;
}

// ---------- HUD ----------
let toastT = 0;
function toast(msg) { const el = $('toast'); el.textContent = msg; el.classList.add('show'); toastT = 3.2; }

const MAP_S = 0.5;
const mapImg = document.createElement('canvas');
(function drawMap() {
  const W = (ISLAND.x1 - ISLAND.x0 + 100) * MAP_S, H = (ISLAND.z1 - ISLAND.z0 + 100) * MAP_S;
  mapImg.width = W; mapImg.height = H;
  const g = mapImg.getContext('2d');
  const X = x => (x - ISLAND.x0 + 50) * MAP_S, Z = z => (z - ISLAND.z0 + 50) * MAP_S;
  g.fillStyle = '#1b4f66'; g.fillRect(0, 0, W, H);
  g.fillStyle = '#d8c48a'; g.fillRect(X(ISLAND.x0) - 10, Z(ISLAND.z0) - 10, (ISLAND.x1 - ISLAND.x0) * MAP_S + 20, (ISLAND.z1 - ISLAND.z0) * MAP_S + 20);
  g.fillStyle = '#5d8a3e'; g.fillRect(X(ISLAND.x0), Z(ISLAND.z0), (ISLAND.x1 - ISLAND.x0) * MAP_S, (ISLAND.z1 - ISLAND.z0) * MAP_S);
  g.fillStyle = '#3a3c42'; g.fillRect(X(-HALF - 8), Z(-HALF - 8), (2 * HALF + 16) * MAP_S, (2 * HALF + 16) * MAP_S);
  g.fillRect(X(HALF), Z(-8), (AIR.x0 - HALF) * MAP_S, 16 * MAP_S);
  g.fillStyle = '#2c2d31'; g.fillRect(X(AIR.x0), Z(-AIR.w / 2), (AIR.x1 - AIR.x0) * MAP_S, AIR.w * MAP_S);
  g.fillStyle = '#4a4c52'; g.fillRect(X(AIR.x0 + 30), Z(-97), 220 * MAP_S, 70 * MAP_S);
  for (const p of world.parks) { g.fillStyle = '#4f9a3a'; g.fillRect(X(p.x0), Z(p.z0), (p.x1 - p.x0) * MAP_S, (p.z1 - p.z0) * MAP_S); }
  for (const b of world.buildings) {
    const l = Math.min(1, b.h / 160);
    g.fillStyle = `rgb(${150 + l * 80},${150 + l * 70},${165 + l * 60})`;
    g.fillRect(X(b.x0), Z(b.z0), (b.x1 - b.x0) * MAP_S, (b.z1 - b.z0) * MAP_S);
  }
})();

function drawMinimap() {
  const c = $('map'), g = c.getContext('2d'), S = c.width, h = S / 2;
  const focus = mode === 'car' ? car.pos : mode === 'plane' ? plane.pos : hero.pos;
  const X = x => (x - ISLAND.x0 + 50) * MAP_S, Z = z => (z - ISLAND.z0 + 50) * MAP_S;
  const zoom = mode === 'plane' ? 0.45 : 1;
  g.save();
  g.clearRect(0, 0, S, S);
  g.beginPath(); g.arc(h, h, h - 2, 0, Math.PI * 2); g.clip();
  g.fillStyle = '#1b4f66'; g.fillRect(0, 0, S, S);
  g.translate(h, h); g.scale(zoom, zoom); g.rotate(cam.yaw); g.translate(-X(focus.x), -Z(focus.z));
  g.drawImage(mapImg, 0, 0);
  for (const t of world.tokens) if (!t.taken) {
    g.fillStyle = '#ffc23d'; g.beginPath(); g.arc(X(t.pos.x), Z(t.pos.z), 3.2 / zoom, 0, 7); g.fill();
  }
  g.fillStyle = '#d0d4da';
  for (const k of traffic.cars) g.fillRect(X(k.pos.x) - 1.5, Z(k.pos.z) - 1.5, 3, 3);
  if (mode !== 'plane' && plane.crashed <= 0) { g.fillStyle = '#ffffff'; g.beginPath(); g.arc(X(plane.pos.x), Z(plane.pos.z), 4, 0, 7); g.fill(); }
  const face = mode === 'car' ? car.yaw : mode === 'plane' ? Math.atan2(plane.forward.x, plane.forward.z) : hero.facing;
  g.translate(X(focus.x), Z(focus.z)); g.rotate(Math.PI - face); g.scale(1 / zoom, 1 / zoom);
  g.fillStyle = '#ff3b4e'; g.strokeStyle = '#fff'; g.lineWidth = 1.5;
  g.beginPath(); g.moveTo(0, -8); g.lineTo(6, 6); g.lineTo(0, 3); g.lineTo(-6, 6); g.closePath(); g.fill(); g.stroke();
  g.restore();
  g.strokeStyle = 'rgba(255,255,255,0.85)'; g.lineWidth = 3; g.beginPath(); g.arc(h, h, h - 2, 0, Math.PI * 2); g.stroke();
  g.fillStyle = '#fff'; g.font = 'bold 12px system-ui'; g.textAlign = 'center';
  const nx = h + Math.sin(-cam.yaw + Math.PI) * (h - 12), ny = h + Math.cos(-cam.yaw + Math.PI) * (h - 12);
  g.fillText('N', nx, ny + 4);
}

let hudT = 0;
function updateHUD(dt) {
  if (toastT > 0) { toastT -= dt; if (toastT <= 0) $('toast').classList.remove('show'); }
  hudT -= dt;
  if (hudT > 0) return;
  hudT = 0.08;
  drawMinimap();
  let spd = 0, label = '', hint = '';
  if (mode === 'foot') {
    spd = hero.speed;
    label = { ground: hero.speed > 12 ? 'SPRINTING' : 'ON FOOT', air: 'AIRBORNE', swing: 'SWINGING', wall: 'WALL CRAWL', zip: 'WEB ZIP' }[hero.state] || '';
    if (plane.crashed <= 0 && hero.pos.distanceTo(plane.pos) < 9) hint = '<b>F</b> Fly the plane';
    else if (traffic.nearest(hero.pos, 5)) hint = '<b>F</b> Jack the car';
    else if (hero.state === 'wall') hint = '<b>W/S</b> climb · <b>A/D</b> strafe · <b>Space</b> leap off';
    else if (hero.state === 'air' || hero.state === 'swing') hint = 'Hold <b>Space</b> / <b>LMB</b> to web-swing · <b>E</b> / <b>RMB</b> web-zip to crosshair';
  } else if (mode === 'car') {
    spd = Math.abs(car.speed); label = 'DRIVING';
    hint = '<b>W/S</b> gas/brake · <b>A/D</b> steer · <b>Space</b> handbrake drift · <b>F</b> exit';
  } else {
    spd = plane.speed; label = plane.onGround ? 'TAXIING' : 'FLYING';
    hint = `<b>Shift/X</b> throttle ${Math.round(plane.throttle * 100)}% · <b>S</b> pull up · <b>W</b> dive · <b>A/D</b> roll · <b>Q/E</b> rudder · <b>F</b> bail`;
    label += ` · ALT ${Math.max(0, Math.round(plane.pos.y))} m`;
  }
  $('mode').textContent = label;
  $('speed').textContent = Math.round(spd * 3.6);
  $('hint').innerHTML = hint;
  $('tokens').textContent = `${tokens} / ${world.tokens.length}`;
  $('cross').style.display = mode === 'foot' ? 'block' : 'none';
  const hrs = (world.time * 24 + 24) % 24;
  $('clock').textContent = `${String(Math.floor(hrs)).padStart(2, '0')}:${String(Math.floor((hrs % 1) * 60)).padStart(2, '0')}`;
}

// ---------- main loop ----------
let fpsAcc = 0, fpsN = 0, fpsChecked = false;
function setQuality(q) {
  quality = q;
  pixelRatio = q === 'high' ? Math.min(devicePixelRatio, 1.5) : 1;
  renderer.setPixelRatio(pixelRatio); composer.setPixelRatio(pixelRatio);
  renderer.shadowMap.enabled = true;
  world.sun.shadow.mapSize.set(q === 'high' ? 2048 : 1024, q === 'high' ? 2048 : 1024);
  world.sun.shadow.map?.dispose(); world.sun.shadow.map = null;
  bloom.enabled = q === 'high' || world.night > 0.3;
  onResize();
  toast('Graphics: ' + q.toUpperCase());
}

function update(dt) {
  if (pressed.has('KeyM')) { sound.setMuted(!sound.muted); toast(sound.muted ? 'Sound off' : 'Sound on'); }
  if (pressed.has('KeyT')) { world.setTime(world.time + 0.0625); toast('Time skipped'); }
  if (pressed.has('KeyG')) setQuality(quality === 'high' ? 'low' : 'high');
  if (pressed.has('KeyF')) interact();
  if (pressed.has('KeyR') && mode === 'foot') { hero.pos.copy(world.nearestRoad(hero.pos.x, hero.pos.z)); hero.pos.y = 0.3; hero.vel.set(0, 0, 0); hero.state = 'air'; }

  const raw = { f: (keys.KeyW || keys.ArrowUp ? 1 : 0) - (keys.KeyS || keys.ArrowDown ? 1 : 0), r: (keys.KeyD || keys.ArrowRight ? 1 : 0) - (keys.KeyA || keys.ArrowLeft ? 1 : 0) };
  const camFlat = new THREE.Vector3(-Math.sin(cam.yaw), 0, -Math.cos(cam.yaw));
  const camRight = new THREE.Vector3(Math.cos(cam.yaw), 0, -Math.sin(cam.yaw));
  const move = new THREE.Vector3().addScaledVector(camFlat, raw.f).addScaledVector(camRight, raw.r);
  if (move.lengthSq() > 1) move.normalize();
  const inp = {
    raw, move, camFlat, camPos: camera.position.clone(), camDir: camera.getWorldDirection(new THREE.Vector3()),
    sprint: keys.ShiftLeft || keys.ShiftRight,
    jumpPressed: pressed.has('Space'), swingPressed: lmbHit, swingHeld: lmb || keys.Space,
    zipPressed: rmbHit || pressed.has('KeyE'),
    handbrake: keys.Space, throttleUp: keys.ShiftLeft || keys.ShiftRight, throttleDown: keys.KeyX || keys.KeyC,
    yaw: (keys.KeyE ? 1 : 0) - (keys.KeyQ ? 1 : 0),
  };

  if (mode === 'foot') hero.update(dt, inp);
  let speedForWind = hero.speed;
  if (mode === 'car') {
    const impact = car.drive(dt, inp);
    if (impact > 6) { fx.burst('spark', car.pos.clone().add(new THREE.Vector3(car.fx * 2, 0.7, car.fz * 2)), Math.min(30, impact * 2)); sound.crash(Math.min(1, impact / 25)); cam.shake = Math.min(1.2, impact / 20); }
    if (car.drift > 5 && Math.abs(car.speed) > 8 && Math.random() < 0.6) fx.burst('smoke', car.pos.clone().add(new THREE.Vector3(-car.fx * 1.8, 0.3, -car.fz * 1.8)));
    speedForWind = Math.abs(car.speed);
    sound.update(speedForWind * 0.5, 'car', Math.min(1, Math.abs(car.speed) / car.T.top));
    headlight.position.copy(car.pos).add(new THREE.Vector3(car.fx * 2.4, 1, car.fz * 2.4));
    headlight.target.position.copy(car.pos).add(new THREE.Vector3(car.fx * 30, -1, car.fz * 30));
    headlight.intensity = world.night * 900;
  } else headlight.intensity = 0;
  if (mode === 'plane') {
    if (plane.fly(dt, inp)) crashPlane();
    speedForWind = plane.speed;
    if (mode === 'plane') sound.update(plane.speed * 0.6, 'plane', plane.throttle);
  } else plane.idle(dt);
  if (mode === 'foot') sound.update(speedForWind, null, 0);
  if (plane.crashed <= 0 && mode !== 'plane' && !plane.onGround && plane.pos.y < world.col.groundAt(plane.pos.x, plane.pos.z, plane.pos.y + 1) + 0.2) crashPlane();

  const heroOnStreet = mode === 'foot' && hero.pos.y < 1 ? hero.pos : null;
  traffic.update(dt, { playerCar: car, heroPos: heroOnStreet, fx, sound, onCrash: rel => { if (mode === 'car') cam.shake = Math.min(1.2, rel / 18); } });
  const threats = [];
  for (const k of traffic.cars) if (!k.ai && k.moving) threats.push({ pos: k.pos, speed: Math.abs(k.speed), vx: k.vx, vz: k.vz });
  peds.update(dt, threats, fx, sound);

  // tokens
  const me = mode === 'car' ? car.pos : mode === 'plane' ? plane.pos : hero.pos;
  for (const t of world.tokens) if (!t.taken && me.distanceTo(t.mesh.position) < (mode === 'plane' ? 6 : 2.6)) {
    t.taken = true; t.mesh.visible = false; t.beam.visible = false; tokens++;
    fx.burst('pickup', t.mesh.position); sound.pickup();
    toast(tokens === world.tokens.length ? 'ALL TOKENS FOUND! You own this city.' : `Token ${tokens} / ${world.tokens.length}`);
  }

  headMat.color.setScalar(1 + world.night * 5);
  tailMat.color.setRGB(1 + world.night * 3, 0.15, 0.15);
  if (quality === 'low') bloom.enabled = world.night > 0.3;
  fx.update(dt);
}

function onResize() {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
  bloom.setSize(innerWidth * pixelRatio, innerHeight * pixelRatio);
}
addEventListener('resize', onResize);

let last = performance.now(), loopOn = true;
function frame(now) {
  requestAnimationFrame(frame);
  if (!loopOn) { last = now; return; }
  const dt = Math.min(0.05, Math.max(0, (now - last) / 1000)); last = now;
  if (playing) update(dt);
  const focus = mode === 'car' ? car.pos : mode === 'plane' ? plane.pos : hero.pos;
  world.update(playing || !started ? dt : 0, camera.position, started ? focus : new THREE.Vector3());
  updateCamera(playing || !started ? dt : 0);
  if (playing) updateHUD(dt);
  composer.render();
  if (playing && !fpsChecked) { // drop to low quality automatically on slow machines
    fpsAcc += dt; fpsN++;
    if (fpsAcc > 4) { fpsChecked = true; if (fpsN / fpsAcc < 32) setQuality('low'); }
  }
  pressed.clear(); lmbHit = rmbHit = false; mdx = mdy = 0;
}
$('loading').style.display = 'none';
$('play').disabled = false;
requestAnimationFrame(frame);

function simStep(dt) { // test hook: advance the game without rendering
  update(dt); world.update(dt, camera.position, mode === 'car' ? car.pos : mode === 'plane' ? plane.pos : hero.pos); updateCamera(dt);
  pressed.clear(); lmbHit = rmbHit = false; mdx = mdy = 0;
}
window.__game = { simStep, setLoop: b => { loopOn = b; }, render: () => composer.render(), press: k => pressed.add(k), setMouse: (l, r) => { if (l && !lmb) lmbHit = true; if (r && !rmb) rmbHit = true; lmb = l; rmb = r; }, hero, traffic, plane, world, camera, cam, enterCar, enterPlane, exitVehicle, start, get mode() { return mode; }, keys, pressed };
