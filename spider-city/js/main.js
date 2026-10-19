// Game orchestration: renderer, post-processing, input, camera, modes and HUD.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { World, AIR, ISLAND, HALF, P, LANE, onIsland, rng } from './world.js';
import { Hero } from './hero.js';
import { Traffic, Plane, Peds, Tank, Car, headMat, tailMat } from './vehicles.js';
import { Combat } from './combat.js';
import { Missions } from './missions.js';
import { Police } from './police.js';
import { FX, Sound } from './fx.js';
import { setupTouch } from './touch.js';

const $ = id => document.getElementById(id);
const canvas = $('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
let pixelRatio = 1;
renderer.setPixelRatio(pixelRatio);
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 6000);
const rt = new THREE.WebGLRenderTarget(innerWidth * pixelRatio, innerHeight * pixelRatio, { type: THREE.HalfFloatType, samples: 0 });
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
const peds = new Peds(scene, world, rand, 170);
const tank = new Tank(scene, world);
const combat = new Combat({ scene, world, fx, sound, traffic, peds }, rng(99));
const missions = new Missions({ scene, world, combat, fx, sound, toast }, rng(5));
const police = new Police({ scene, world, traffic, combat, fx, sound }, rng(31));
police.onLost = () => toast('You lost the cops');
const headlight = new THREE.SpotLight(0xfff0d0, 0, 90, 0.55, 0.6, 1);
scene.add(headlight, headlight.target);

let mode = 'foot', car = null, playing = false, started = false, tokens = 0, quality = 'high';
let stepT = 0, hp = 100, hurtT = 10, deadT = 0, slowT = 0, slowCD = 0, nadeCD = 0, lastStars = 0, gunCD = 0, rocketCD = 0, rocketSide = 1, calledCar = null;
const focusPos = () => mode === 'car' ? car.pos : mode === 'plane' ? plane.pos : mode === 'tank' ? tank.pos : hero.pos;
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
addEventListener('contextmenu', e => e.preventDefault());

function start() {
  sound.init();
  $('overlay').classList.add('hidden');
  $('hud').classList.remove('hidden');
  playing = true;
  if (!started) { started = true; cam.yaw = 0; cam.pitch = 0.22; toast('Find the 30 golden tokens across the city'); }
  // go fullscreen where the browser allows it
  try { document.documentElement.requestFullscreen?.()?.catch(() => {}); } catch (e) { /* refused */ }
}
function pause() {
  playing = false;
  $('overlay').classList.remove('hidden');
  $('play').textContent = 'RESUME';
}
$('play').addEventListener('click', start);
$('music').addEventListener('click', () => {
  sound.init();
  const on = sound.toggleMusic();
  $('music').textContent = on ? '🎵 Music: ON' : '🔇 Music: OFF';
  $('music').setAttribute('aria-pressed', String(on));
});

// touch controls press the same virtual keys as the keyboard
function vkey(code, down) { if (down && !keys[code]) pressed.add(code); keys[code] = down; }
const touch = setupTouch($('touch'), {
  key: vkey, look: (dx, dy) => { mdx += dx; mdy += dy; }, pause,
  onTap: () => { sound.init(); sound.click(); },
});
// phones only start audio from inside a touch: (re)unlock it on every touch
addEventListener('pointerdown', () => sound.init(), { capture: true });
document.body.classList.add('touch');

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
    if (hero.gun && (hero.state === 'ground' || hero.state === 'air')) {
      // over the right shoulder so the crosshair sits beside the hero, not on his head
      target.x += Math.cos(cam.yaw) * 0.6; target.z -= Math.sin(cam.yaw) * 0.6; target.y += 0.35;
      dist = 4.4;
    }
    fov = 68 + Math.min(24, Math.max(0, sp - 8) * 0.55);
    follow = hero.state === 'swing' || hero.state === 'zip' ? 10 : 16;
    cam.shake = Math.max(cam.shake, hero.shake); hero.shake = 0;
  } else if (mode === 'car') {
    const sp = Math.abs(car.speed);
    target.copy(car.pos); target.y += 1.7;
    dist = 8 + Math.min(4, sp * 0.08);
    fov = 68 + Math.min(18, sp * 0.4);
    if (cam.t - cam.lastMouse > 0.6 && sp > 1.5) {
      const want = (car.speed >= 0 ? car.yaw : car.yaw + Math.PI) + Math.PI;
      cam.yaw += wrapA(want - cam.yaw) * damp(5, dt);
      cam.pitch += (0.2 - cam.pitch) * damp(2, dt);
    }
    follow = 20;
  } else if (mode === 'tank') {
    target.copy(tank.pos); target.y += 3.2;
    dist = 11; fov = 70; follow = 20;
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
  if (!c.called && (c.ai || c.parked)) police.crime(0.6);
  c.ai = null; c.parked = false; car = c; mode = 'car';
  hero.state = 'vehicle'; hero.vel.set(0, 0, 0); hero.setVisible(false);
  cam.lastMouse = -10; sound.door();
  toast(c.type === 'taxi' ? 'Taxi jacked!' : 'Car jacked: ' + c.type);
}
function enterPlane() {
  mode = 'plane'; hero.state = 'vehicle'; hero.setVisible(false); cam.lastMouse = -10; sound.door();
  toast('Hold THR + to speed up, pull the stick down to climb');
}
function enterTank() {
  mode = 'tank'; hero.state = 'vehicle'; hero.setVisible(false); sound.door();
  cam.yaw = tank.yaw + Math.PI; cam.pitch = 0.18;
  toast('Tank: drag the screen to aim, tap FIRE');
}
function exitVehicle() {
  if (mode === 'tank') {
    const lx = Math.cos(tank.yaw), lz = -Math.sin(tank.yaw);
    hero.pos.set(tank.pos.x + lx * 3, tank.pos.y, tank.pos.z + lz * 3);
    if (world.col.pointInside(hero.pos.x, hero.pos.y + 1, hero.pos.z)) hero.pos.set(tank.pos.x - lx * 3, tank.pos.y, tank.pos.z - lz * 3);
    hero.vel.set(0, 0, 0); hero.state = 'air'; hero.facing = tank.yaw;
  } else if (mode === 'car') {
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
  if (tank.active && hero.pos.distanceTo(tank.pos) < 5.5) return enterTank();
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

// ---------- calling vehicles ----------
// A clear patch of ground where the player stands, else the nearest street lane.
function deliverySpot() {
  const p = focusPos(), heading = Math.atan2(-Math.sin(cam.yaw), -Math.cos(cam.yaw));
  const g = world.col.groundAt(p.x, p.z, p.y + 0.5);
  let clear = onIsland(p.x, p.z) && p.y - g < 1.5 && g < 1;
  for (let a = 0; a < 6.28 && clear; a += 0.785) if (world.col.pointInside(p.x + Math.cos(a) * 3.5, 1, p.z + Math.sin(a) * 3.5)) clear = false;
  if (clear) return { x: p.x, z: p.z, yaw: heading };
  const r = world.nearestRoad(p.x, p.z);
  const k = (r.x + HALF) / P, alongZ = Math.abs(k - Math.round(k)) < 1e-6;
  if (alongZ) { const yaw = Math.cos(heading) >= 0 ? 0 : Math.PI; return { x: r.x + (yaw === 0 ? -LANE : LANE), z: r.z, yaw }; }
  const yaw = Math.sin(heading) >= 0 ? Math.PI / 2 : -Math.PI / 2;
  return { x: r.x, z: r.z + (yaw > 0 ? LANE : -LANE), yaw };
}
function callVehicle(kind) {
  if (deadT > 0) return;
  const at = focusPos().clone();
  if (mode !== 'foot') { exitVehicle(); hero.pos.copy(at); }
  if (kind === 'plane') {
    const alt = Math.max(at.y + 40, 240), heading = Math.atan2(-Math.sin(cam.yaw), -Math.cos(cam.yaw));
    plane.crashed = 0; plane.m.group.visible = true;
    plane.pos.set(at.x, alt, at.z);
    plane.q.setFromEuler(new THREE.Euler(0, heading, 0));
    plane.speed = 55; plane.throttle = 0.85; plane.onGround = false;
    plane.vel.set(Math.sin(heading) * 55, 0, Math.cos(heading) * 55);
    enterPlane(); toast('Plane delivered! Tap ROCKET to fire');
    return;
  }
  const s = deliverySpot();
  if (kind === 'tank') { tank.place(s.x, s.z, s.yaw); enterTank(); return; }
  if (!calledCar) { calledCar = new Car(scene, world, 'sports', 0xff2244, s.x, s.z, s.yaw); calledCar.called = true; traffic.cars.push(calledCar); }
  const c = calledCar;
  c.repair(); c.pos.set(s.x, world.col.groundAt(s.x, s.z, 1), s.z); c.yaw = s.yaw;
  c.vx = c.vz = c.vy = 0; c.spin = 0; c.tilt.set(0, 0); c.ai = null; c.sync(0);
  enterCar(c); toast('Your car is here');
}

// ---------- health ----------
function damagePlayer(d) {
  if (deadT > 0) return;
  hp -= d; hurtT = 0; sound.hurt();
  $('hurt').style.opacity = Math.min(0.7, 0.25 + d / 40);
  if (hp <= 0) {
    hp = 0; deadT = 3; toast('WASTED'); police.clear(); sound.wasted();
    if (mode !== 'foot') exitVehicle();
    hero.vel.set(0, 6, 0); hero.state = 'air';
  }
}
combat.onCarDestroyed = c => {
  missions.cash += c.police ? 60 : 15; missions.carDestroyed();
  police.crime(c.police ? 1.5 : 0.8);
  cam.shake = Math.max(cam.shake, 0.8);
  if (c === car && mode === 'car') {
    exitVehicle(); hero.vel.y = 11; hero.state = 'air'; hero.flipT = 0;
    damagePlayer(30); if (deadT <= 0) toast('Your ride exploded!');
  }
};
combat.onPedHit = () => police.crime(0.35);
peds.onKnock = () => { if (mode === 'car' || mode === 'tank') police.crime(0.35); };
combat.onExplosion = pos => { cam.shake = Math.max(cam.shake, Math.max(0, 1.4 - camera.position.distanceTo(pos) / 70)); };
combat.onKill = () => { missions.cash += 25; if (combat.kills % 5 === 0 && !missions.current) toast(`${combat.kills} goons down`); };

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
  const focus = focusPos();
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
  g.fillStyle = '#ff2a3d';
  for (const k of combat.goons) if (k.down <= 0) { g.beginPath(); g.arc(X(k.pos.x), Z(k.pos.z), 2.6 / zoom, 0, 7); g.fill(); }
  for (const m of missions.mapPoints) {
    g.fillStyle = m.color; g.strokeStyle = '#fff'; g.lineWidth = 1.5 / zoom;
    g.beginPath(); g.arc(X(m.x), Z(m.z), (m.big ? 6 : 4.5) / zoom, 0, 7); g.fill(); g.stroke();
  }
  const blinkC = Math.floor(performance.now() / 250) % 2 ? '#3d6bff' : '#ff3048';
  for (const pp of police.mapPoints) {
    g.fillStyle = blinkC;
    if (pp.car) g.fillRect(X(pp.x) - 3.5 / zoom, Z(pp.z) - 3.5 / zoom, 7 / zoom, 7 / zoom);
    else { g.beginPath(); g.arc(X(pp.x), Z(pp.z), 2.4 / zoom, 0, 7); g.fill(); }
  }
  if (tank.active && mode !== 'tank') { g.fillStyle = '#9bd35a'; g.fillRect(X(tank.pos.x) - 4, Z(tank.pos.z) - 4, 8, 8); }
  if (mode !== 'plane' && plane.crashed <= 0) { g.fillStyle = '#ffffff'; g.beginPath(); g.arc(X(plane.pos.x), Z(plane.pos.z), 4, 0, 7); g.fill(); }
  const face = mode === 'car' ? car.yaw : mode === 'tank' ? tank.yaw : mode === 'plane' ? Math.atan2(plane.forward.x, plane.forward.z) : hero.facing;
  g.translate(X(focus.x), Z(focus.z)); g.rotate(Math.PI - face); g.scale(1 / zoom, 1 / zoom);
  g.fillStyle = '#ff3b4e'; g.strokeStyle = '#fff'; g.lineWidth = 1.5;
  g.beginPath(); g.moveTo(0, -8); g.lineTo(6, 6); g.lineTo(0, 3); g.lineTo(-6, 6); g.closePath(); g.fill(); g.stroke();
  g.restore();
  g.strokeStyle = 'rgba(255,255,255,0.85)'; g.lineWidth = 3; g.beginPath(); g.arc(h, h, h - 2, 0, Math.PI * 2); g.stroke();
  const obj = missions.mapPoints.find(m => m.big);
  if (obj) { // pin the objective to the rim when it is off the map
    const dx = (obj.x - focus.x) * MAP_S * zoom, dz = (obj.z - focus.z) * MAP_S * zoom;
    const sx = dx * Math.cos(cam.yaw) - dz * Math.sin(cam.yaw), sy = dx * Math.sin(cam.yaw) + dz * Math.cos(cam.yaw);
    const L = Math.hypot(sx, sy);
    if (L > h - 10) {
      const k = (h - 10) / L;
      g.fillStyle = obj.color; g.strokeStyle = '#fff'; g.lineWidth = 2;
      g.beginPath(); g.arc(h + sx * k, h + sy * k, 6, 0, 7); g.fill(); g.stroke();
    }
  }
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
  let spd = 0, label = '';
  if (mode === 'foot') {
    spd = hero.speed;
    label = { ground: hero.speed > 12 ? 'SPRINTING' : 'ON FOOT', air: 'AIRBORNE', swing: 'SWINGING', wall: hero.speed > 12 ? 'WALL RUN' : 'WALL CRAWL', wallrun: 'WALL RUN', zip: 'WEB ZIP' }[hero.state] || '';
  } else if (mode === 'car') {
    spd = Math.abs(car.speed); label = 'DRIVING';
  } else if (mode === 'tank') {
    spd = Math.abs(tank.speed); label = 'TANK';
  } else {
    spd = plane.speed; label = plane.onGround ? 'TAXIING' : 'FLYING';
    label += ` · ALT ${Math.max(0, Math.round(plane.pos.y))} m`;
  }
  $('mode').textContent = label;
  $('speed').textContent = Math.round(spd * 3.6);
  const action = mode !== 'foot' ? 'EXIT' : plane.crashed <= 0 && hero.pos.distanceTo(plane.pos) < 9 ? 'FLY'
    : tank.active && hero.pos.distanceTo(tank.pos) < 5.5 ? 'TANK' : traffic.nearest(hero.pos, 5) ? 'DRIVE' : '';
  touch.update(mode, action, hero.gun);
  if (mode === 'plane') $('mode').textContent += ` · THR ${Math.round(plane.throttle * 100)}%`;
  $('tokens').textContent = `${tokens} / ${world.tokens.length}`;
  $('cross').style.display = mode === 'foot' || mode === 'tank' ? 'block' : 'none';
  $('cross').classList.toggle('gun', (mode === 'foot' && hero.gun) || mode === 'tank');
  $('hpfill').style.width = hp + '%';
  $('hpfill').style.background = hp > 50 ? '#4cd964' : hp > 25 ? '#ffcc00' : '#ff3b30';
  $('kills').textContent = `☠ ${combat.kills}`;
  $('cash').textContent = `$${missions.cash.toLocaleString()}`;
  const stars = police.stars;
  $('stars').hidden = stars === 0;
  $('stars').textContent = '★'.repeat(stars) + '☆'.repeat(5 - stars);
  $('stars').classList.toggle('flash', police.calm < 10);
  const ms = missions.status; $('mission').textContent = ms; $('mission').hidden = !ms;
  document.body.classList.toggle('slowmo', slowT > 0);
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
  if (started) toast('Graphics: ' + q.toUpperCase());
}

function update(dt) {
  if (pressed.has('KeyM')) { sound.setMuted(!sound.muted); toast(sound.muted ? 'Sound off' : 'Sound on'); }
  if (pressed.has('KeyT')) { world.setTime(world.time + 0.0625); toast('Time skipped'); }
  if (pressed.has('KeyV')) setQuality(quality === 'high' ? 'low' : 'high');
  if (pressed.has('KeyF')) interact();
  if (pressed.has('KeyB')) {
    if (slowCD <= 0 && deadT <= 0) { slowT = 6; slowCD = 14; toast('SLOW MOTION'); }
    else if (slowT <= 0) toast(`Slow motion recharging: ${Math.ceil(slowCD)}s`);
  }
  if (pressed.has('KeyQ') && mode === 'foot') { hero.gun = !hero.gun; toast(hero.gun ? 'Blaster ready' : 'Web shooters'); }
  if (pressed.has('Digit1')) callVehicle('car');
  if (pressed.has('Digit2')) callVehicle('plane');
  if (pressed.has('Digit3')) callVehicle('tank');
  if (pressed.has('KeyR') && mode === 'foot') { hero.pos.copy(world.nearestRoad(hero.pos.x, hero.pos.z)); hero.pos.y = 0.3; hero.vel.set(0, 0, 0); hero.state = 'air'; }

  const clamp1 = x => Math.max(-1, Math.min(1, x));
  const raw = {
    // in a car or tank the stick only steers; GAS/BRAKE buttons drive
    f: clamp1((keys.KeyW || keys.ArrowUp ? 1 : 0) - (keys.KeyS || keys.ArrowDown ? 1 : 0) + (touch && mode !== 'car' && mode !== 'tank' ? touch.f : 0)),
    r: clamp1((keys.KeyD || keys.ArrowRight ? 1 : 0) - (keys.KeyA || keys.ArrowLeft ? 1 : 0) + (touch ? touch.r : 0)),
  };
  const camFlat = new THREE.Vector3(-Math.sin(cam.yaw), 0, -Math.cos(cam.yaw));
  const camRight = new THREE.Vector3(Math.cos(cam.yaw), 0, -Math.sin(cam.yaw));
  const move = new THREE.Vector3().addScaledVector(camFlat, raw.f).addScaledVector(camRight, raw.r);
  if (move.lengthSq() > 1) move.normalize();
  const inp = {
    raw, move, camFlat, camPos: camera.position.clone(), camDir: camera.getWorldDirection(new THREE.Vector3()),
    sprint: keys.ShiftLeft || keys.ShiftRight || (touch && (touch.sprint || touch.run)),
    jumpPressed: pressed.has('Space'),
    swingPressed: (hero.gun ? false : lmbHit) || pressed.has('Swing'),
    swingHeld: (hero.gun ? false : lmb) || keys.Space || keys.Swing,
    nitro: keys.ShiftLeft || keys.ShiftRight || keys.Nitro,
    zipPressed: rmbHit || pressed.has('KeyE'),
    handbrake: keys.Space, throttleUp: keys.ShiftLeft || keys.ShiftRight, throttleDown: keys.KeyX || keys.KeyC,
    yaw: (keys.KeyE ? 1 : 0) - (keys.KeyQ ? 1 : 0),
  };

  const fireHeld = lmb || keys.Fire;
  gunCD -= dt; rocketCD -= dt;
  if (deadT > 0) { // respawn after being taken down
    deadT -= dt;
    if (deadT <= 0) {
      hero.pos.copy(world.nearestRoad(hero.pos.x, hero.pos.z)); hero.pos.y = 0.3; hero.vel.set(0, 0, 0); hero.state = 'air';
      hp = 100; toast('Back on your feet');
    }
  } else if ((hurtT += dt) > 4) hp = Math.min(100, hp + 10 * dt);
  $('hurt').style.opacity = Math.max(0, parseFloat($('hurt').style.opacity || 0) - dt * 1.5);

  if (mode === 'foot') hero.update(dt, inp);
  const onWallRun = hero.state === 'wallrun' || (hero.state === 'wall' && hero.speed > 12);
  if (mode === 'foot' && (hero.state === 'ground' || onWallRun) && hero.speed > 1.5) { // footsteps
    if ((stepT -= dt * (hero.speed / 3.2 + 1.2)) <= 0) { stepT = 1; sound.step(Math.min(1.5, 0.6 + hero.speed / 20)); }
  }
  if (mode === 'foot' && hero.gun && deadT <= 0 && hero.state !== 'zip' && hero.state !== 'wall') {
    if (fireHeld) {
      hero.aimT = 0.6; hero.aimYaw = cam.yaw + Math.PI;
      hero.aimPitch = Math.max(-0.8, Math.min(0.9, Math.asin(inp.camDir.y)));
      if (gunCD <= 0) {
        gunCD = 0.14;
        const hand = hero.j.hdR.getWorldPosition(new THREE.Vector3());
        combat.playerShot(hand, inp.camPos, inp.camDir, null);
      }
    }
  }
  nadeCD -= dt;
  if (pressed.has('KeyG') && mode === 'foot' && deadT <= 0 && nadeCD <= 0 && hero.state !== 'zip') {
    nadeCD = 0.9;
    hero.aimT = 0.35; hero.aimYaw = cam.yaw + Math.PI; hero.aimPitch = Math.max(-0.5, Math.min(0.9, Math.asin(inp.camDir.y) + 0.3));
    const hand = hero.j.hdR.getWorldPosition(new THREE.Vector3());
    const vel = inp.camDir.clone().multiplyScalar(22).add(new THREE.Vector3(0, 6, 0)).addScaledVector(hero.vel, 0.5);
    combat.throwGrenade(hand, vel);
  }
  if (mode === 'tank') {
    const impact = tank.drive(dt, inp, cam.yaw + Math.PI, 0.12 - cam.pitch * 0.8);
    if (impact > 4) { cam.shake = 0.5; sound.crash(0.5); }
    if ((fireHeld || keys.Space) && tank.cooldown <= 0) {
      tank.cooldown = 1.0; tank.recoil = 1; cam.shake = Math.max(cam.shake, 0.5);
      const mp = new THREE.Vector3(), md = new THREE.Vector3(); tank.muzzle(mp, md);
      combat.fireShell(mp, md);
    }
    // crush anything in the way
    for (const c of traffic.cars) {
      if (Math.abs(tank.speed) < 2 || c.pos.distanceTo(tank.pos) > 4.2) continue;
      if ((c.crushCD || 0) > performance.now()) continue;
      c.crushCD = performance.now() + 600; c.ai = null;
      c.vx += tank.fx * tank.speed * 1.4; c.vz += tank.fz * tank.speed * 1.4; c.vy = 3;
      fx.burst('spark', c.pos.clone().setY(1), 15); sound.crash(0.7);
      if (c.damage(55)) combat._carBoom(c);
    }
    sound.update(Math.abs(tank.speed), 'car', 0.15 + Math.abs(tank.speed) / 30);
  }
  if (mode === 'plane' && (fireHeld || keys.Space) && rocketCD <= 0 && plane.crashed <= 0) {
    rocketCD = 0.3; rocketSide *= -1;
    const pos = new THREE.Vector3(rocketSide * 2.8, 1.7, 1.4).applyQuaternion(plane.q).add(plane.pos);
    combat.fireRocket(pos, plane.forward, plane.speed + 110);
  }
  let speedForWind = hero.speed;
  if (mode === 'car') {
    const impact = car.drive(dt, inp);
    if (impact > 6) { fx.burst('spark', car.pos.clone().add(new THREE.Vector3(car.fx * 2, 0.7, car.fz * 2)), Math.min(30, impact * 2)); sound.crash(Math.min(1, impact / 25)); cam.shake = Math.min(1.2, impact / 20); }
    if (car.boosting) for (const s of [-0.5, 0.5]) fx.spawn(true, car.pos.clone().add(new THREE.Vector3(-car.fx * 2.3 - car.fz * s, 0.5, -car.fz * 2.3 + car.fx * s)), new THREE.Vector3(-car.vx * 0.2, 0.5, -car.vz * 0.2), 0.15, 0.22, new THREE.Color(4, 1.6, 0.3));
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
  traffic.update(dt, { playerCar: car, heroPos: heroOnStreet, playerPos: focusPos(),
    onRam: (a, b, rel) => {
      if ((a === car && b.police) || (b === car && a.police)) police.crime(0.25);
      for (const c of [a, b]) if (c.damage(rel * 1.1)) combat._carBoom(c);
    }, fx, sound, onCrash: rel => { if (mode === 'car') cam.shake = Math.min(1.2, rel / 18); } });
  const threats = [];
  for (const k of traffic.cars) if (!k.ai && k.moving) threats.push({ pos: k.pos, speed: Math.abs(k.speed), vx: k.vx, vz: k.vz });
  if (tank.active && Math.abs(tank.speed) > 1) threats.push({ pos: tank.pos, speed: Math.abs(tank.speed) * 2, vx: tank.fx * tank.speed, vz: tank.fz * tank.speed });
  peds.update(dt, threats, fx, sound);
  // running over gang members
  for (const t of threats) if (t.speed > 6) for (const g of combat.goons) {
    if (g.down > 0 || Math.abs(g.pos.y - t.pos.y) > 2) continue;
    const dx = g.pos.x - t.pos.x, dz = g.pos.z - t.pos.z, d = Math.hypot(dx, dz);
    if (d < 2.6) combat.hurtGoon(g, 99, new THREE.Vector3(dx / (d || 1), 0, dz / (d || 1)), t.speed * 0.6);
  }
  const me0 = focusPos();
  const playerInfo = {
    pos: new THREE.Vector3(me0.x, me0.y + (mode === 'tank' ? 2 : 1.2), me0.z),
    active: deadT <= 0 && mode !== 'plane',
    speed: mode === 'car' ? Math.abs(car.speed) : mode === 'tank' ? Math.abs(tank.speed) : hero.speed,
    mode, car: mode === 'car' ? car : null,
    onHit: d => {
      if (mode === 'foot') damagePlayer(d);
      else if (mode === 'car') { if (car.damage(d * 1.2)) combat._carBoom(car); else fx.burst('spark', car.pos.clone().setY(1.2), 3); }
      else if (mode === 'tank') fx.burst('spark', tank.pos.clone().setY(2.2), 3);
    },
  };
  police.update(dt, playerInfo);
  if (police.stars > lastStars) { toast('★'.repeat(police.stars) + ' WANTED'); sound.alarm(); }
  lastStars = police.stars;
  combat.update(dt, playerInfo);

  missions.update(dt, focusPos(), mode);
  // tokens
  const me = focusPos();
  for (const t of world.tokens) if (!t.taken && me.distanceTo(t.mesh.position) < (mode === 'plane' ? 6 : 2.6)) {
    t.taken = true; t.mesh.visible = false; t.beam.visible = false; tokens++; missions.cash += 100;
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
  const realDt = Math.min(0.05, Math.max(0, (now - last) / 1000)); last = now;
  const dt = tickSlow(realDt);
  if (playing) update(dt);
  const focus = focusPos();
  world.update(playing || !started ? dt : 0, camera.position, started ? focus : new THREE.Vector3());
  updateCamera(playing || !started ? realDt : 0);
  if (playing) updateHUD(realDt);
  composer.render();
  if (playing && !fpsChecked) { // drop to low quality automatically on slow machines
    fpsAcc += dt; fpsN++;
    if (fpsAcc > 4) { fpsChecked = true; if (fpsN / fpsAcc < 32) setQuality('low'); }
  }
  pressed.clear(); lmbHit = rmbHit = false; mdx = mdy = 0;
}
$('loading').style.display = 'none';
setQuality('low');
$('play').disabled = false;
requestAnimationFrame(frame);

// slow motion: the world runs at a third of the speed while the camera and HUD stay real-time
function tickSlow(realDt) {
  if (!playing) return realDt;
  slowCD = Math.max(0, slowCD - realDt);
  if (slowT > 0) { slowT -= realDt; return realDt * 0.35; }
  return realDt;
}
function simStep(dt) { // test hook: advance the game without rendering
  dt = tickSlow(dt);
  update(dt); world.update(dt, camera.position, focusPos()); updateCamera(dt);
  pressed.clear(); lmbHit = rmbHit = false; mdx = mdy = 0;
}
window.__game = { simStep, setLoop: b => { loopOn = b; }, render: () => composer.render(), press: k => pressed.add(k), setMouse: (l, r) => { if (l && !lmb) lmbHit = true; if (r && !rmb) rmbHit = true; lmb = l; rmb = r; }, hero, traffic, plane, tank, combat, missions, police, get slowT() { return slowT; }, callVehicle, get hp() { return hp; }, world, camera, cam, enterCar, enterPlane, exitVehicle, start, get mode() { return mode; }, keys, pressed };
