// Races: level list, AI rivals, shared jump physics, start/finish gantries.
import * as THREE from 'three';
import { ROAD_HALF, roadX, roadY, roadDX, roadDY, rampH, segmentFeature, SEG, RAMP_LEN, RAMP_H } from './world.js';
import { makeBoard } from './board.js';
import { makeRider } from './rider.js';

export const LEVELS = [
  { id: 'sunset-1', track: 'sunset', name: 'First Light', length: 2600, skill: 0.35, diff: 0.1 },
  { id: 'sunset-2', track: 'sunset', name: 'Ridge Run', length: 3400, skill: 0.55, diff: 0.3 },
  { id: 'sunset-3', track: 'sunset', name: 'Cloudline Cup', length: 4200, skill: 0.7, diff: 0.45 },
  { id: 'alpine-1', track: 'alpine', name: 'Powder Dash', length: 3000, skill: 0.55, diff: 0.35 },
  { id: 'alpine-2', track: 'alpine', name: 'Glacier Gate', length: 3800, skill: 0.7, diff: 0.5 },
  { id: 'alpine-3', track: 'alpine', name: 'Avalanche Cup', length: 4600, skill: 0.82, diff: 0.65 },
  { id: 'canyon-1', track: 'canyon', name: 'Dust Devil', length: 3200, skill: 0.7, diff: 0.55 },
  { id: 'canyon-2', track: 'canyon', name: 'Mesa Sprint', length: 4000, skill: 0.82, diff: 0.7 },
  { id: 'canyon-3', track: 'canyon', name: 'Red Rock Grand Prix', length: 5000, skill: 0.92, diff: 0.85 },
  { id: 'coast-1', track: 'coast', name: 'Seabreeze Sprint', length: 3400, skill: 0.8, diff: 0.6 },
  { id: 'coast-2', track: 'coast', name: 'Lighthouse Run', length: 4300, skill: 0.88, diff: 0.75 },
  { id: 'coast-3', track: 'coast', name: 'Coastline Grand Prix', length: 5400, skill: 0.95, diff: 0.9 },
];

const RIVALS = [
  { name: 'Kai', suit: '#e8423a', suitDark: '#2a2230', helmet: '#ffd23f', glove: '#2a2230', boot: '#ffffff' },
  { name: 'Mira', suit: '#7a5cff', suitDark: '#1f1d33', helmet: '#ffffff', glove: '#1f1d33', boot: '#7a5cff' },
  { name: 'Juno', suit: '#2fc46b', suitDark: '#1b2a24', helmet: '#f4f4f6', glove: '#1b2a24', boot: '#2fc46b' },
  { name: 'Rafe', suit: '#ffd23f', suitDark: '#2a2433', helmet: '#2a2433', glove: '#2a2433', boot: '#ffd23f' },
  { name: 'Sora', suit: '#f25fa0', suitDark: '#28203a', helmet: '#ffffff', glove: '#28203a', boot: '#ffffff' },
];

export const GRAVITY = 24;
// Ramps launch anything that crosses the lip; obstacles only hit riders near the ground.
export function stepAir(r, dt, prevS) {
  const ground = rampH(r.s);
  if (r.air) {
    r.vy -= GRAVITY * dt; r.y += r.vy * dt;
    if (r.y <= ground) { r.y = ground; r.air = false; r.landed = r.vy; r.vy = 0; }
  } else {
    const f = segmentFeature(Math.floor(r.s / SEG));
    if (f?.type === 'jump' && prevS < f.lip && r.s >= f.lip) {
      r.air = true; r.vy = r.v * (2 * RAMP_H / RAMP_LEN) * 0.55 + 2; r.y = RAMP_H; r.airT = 0;
    } else r.y = ground;
  }
  if (r.air) r.airT = (r.airT || 0) + dt;
}

function nameTag(text, color) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(15,17,26,0.72)'; g.beginPath(); g.roundRect(8, 10, 240, 44, 22); g.fill();
  g.fillStyle = color; g.beginPath(); g.arc(34, 32, 9, 0, 7); g.fill();
  g.fillStyle = '#fff'; g.font = 'italic 900 30px "Barlow Condensed", system-ui, sans-serif'; g.textBaseline = 'middle'; g.fillText(text, 54, 33);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  // constant on-screen size, so names stay readable at any distance
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthWrite: false, transparent: true, sizeAttenuation: false }));
  sp.scale.set(0.22, 0.055, 1); sp.position.y = 2.4;
  return sp;
}

export class Rival {
  constructor(scene, gltf, idx, skill) {
    const def = RIVALS[idx % RIVALS.length];
    this.name = def.name; this.color = def.suit;
    this.skill = Math.min(0.98, skill + (idx - 2) * 0.04 + (Math.random() - 0.5) * 0.06);
    this.board = makeBoard();
    this.board.rider.visible = false;
    this.rider = gltf ? makeRider(gltf, 0.11, def) : null;
    if (this.rider) this.board.tilt.add(this.rider.object); else this.board.rider.visible = true;
    this.tag = nameTag(def.name, def.suit); this.board.root.add(this.tag);
    scene.add(this.board.root);
    this.reset(0, 0);
  }
  reset(s, u) {
    this.s = s; this.u = u; this.vu = 0; this.v = 0; this.y = 0; this.vy = 0; this.air = false;
    this.targetU = u; this.crashT = 0; this.boost = 0; this.boostCd = 3 + Math.random() * 4; this.finish = 0;
    this.drift = 0; this.t = Math.random() * 10; this.mistake = 0;
    this.board.tilt.rotation.set(0, 0, 0);
  }
  dispose(scene) { scene.remove(this.board.root); }

  think(objects, baseV) {
    // pick a lane from what's coming in the next ~50 m
    let target = this.targetU;
    const look = 25 + this.v * 0.6;
    for (const o of objects) {
      const ds = o.s - this.s;
      if (ds < 2 || ds > look) continue;
      if (o.type === 'barrier') { target = o.gapC + this.mistake; break; }
      if (o.type === 'rock' && Math.abs(target - o.u) < o.rad + 1.7) {
        const dir = target === o.u ? (o.u > 0 ? -1 : 1) : Math.sign(target - o.u);
        target = o.u + dir * (o.rad + 2.0) + this.mistake;
        break;
      }
      if (o.type === 'ring' && this.skill > 0.5 && ds < look * 0.8) { target = o.u; }
    }
    this.targetU = Math.max(-ROAD_HALF + 1.2, Math.min(ROAD_HALF - 1.2, target));
  }

  update(dt, objects, baseV, player, time) {
    this.t += dt;
    const prevS = this.s;
    if (this.crashT > 0) {
      this.crashT -= dt;
      this.v += (14 - this.v) * dt * 2;
      this.board.tilt.rotation.z = Math.sin(this.crashT * 9) * 0.6;
      if (this.crashT <= 0) this.board.tilt.rotation.z = 0;
    } else {
      // occasional lapses: weaker rivals misjudge lines more often
      if (Math.random() < dt * (1 - this.skill) * 0.25) this.mistake = (Math.random() - 0.5) * 5 * (1 - this.skill);
      if (Math.random() < dt * 0.5) this.mistake *= 0.3;
      this.think(objects, baseV);
      const latMax = 10 + this.v * 0.1;
      const want = Math.max(-latMax, Math.min(latMax, (this.targetU - this.u) * (2 + this.skill * 1.5)));
      this.vu += (want - this.vu) * Math.min(1, dt * (3 + this.skill * 3));
      // pace: skill sets cruising speed; timed flow boosts like the player's
      const cruise = baseV * (0.9 + this.skill * 0.16);
      this.boostCd -= dt;
      if (this.boostCd <= 0) { this.boost = 1; this.v += 10 + this.skill * 12; this.boostCd = 7 - this.skill * 3 + Math.random() * 5; }
      // light catch-up so the pack stays close without scripting a winner
      const gap = player.s - this.s;
      const band = gap > 60 ? 1.05 : gap < -120 ? 0.97 : 1;
      this.v += (cruise * band - this.v) * dt * (this.v > cruise ? 0.35 : 0.5);
      this.drift = this.vu * 0.02;
    }
    this.boost = Math.max(0, this.boost - dt * 0.7);
    this.s += this.v * dt; this.u += this.vu * dt;
    this.u = Math.max(-ROAD_HALF + 0.7, Math.min(ROAD_HALF - 0.7, this.u));
    stepAir(this, dt, prevS);

    // hazards
    if (this.crashT <= 0 && this.y < 1.0) {
      for (const o of objects) {
        const ds = o.s - this.s;
        if (o.type === 'barrier' && ds < 0.4 && ds > -0.8 && Math.abs(this.u - o.gapC) > o.gapW / 2 - 0.35) { this.crashT = 1.4; this.v *= 0.35; break; }
        if (o.type === 'rock' && Math.abs(ds) < o.rad * 0.7 && Math.abs(this.u - o.u) < o.rad * 0.8 + 0.3) { this.crashT = 1.4; this.v *= 0.35; break; }
      }
    }
  }

  place(dt, rdt) {
    const s = this.s, root = this.board.root;
    root.visible = Math.abs(s - (this.playerS ?? s)) < 160;   // far rivals are specks; skip their draw calls
    const fwd = new THREE.Vector3(roadDX(s), roadDY(s), -1).normalize();
    root.position.set(roadX(s) + this.u, roadY(s) + 0.55 + this.y + Math.sin(this.t * 5.3) * 0.05, -s);
    root.lookAt(root.position.clone().sub(fwd));
    this.board.setContact(0.55 + this.y - rampH(s) + Math.sin(this.t * 5.3) * 0.05);
    const lean = -this.vu / 16;
    if (this.crashT <= 0) this.board.tilt.rotation.z += (lean * 0.55 - this.board.tilt.rotation.z) * Math.min(1, dt * 8);
    this.board.tilt.rotation.x = this.air ? Math.sin(this.t * 3) * 0.12 : 0;
    const crouch = Math.min(1, 0.35 + Math.min(1, this.v / 70) * 0.35);
    const fx = { air: this.air, vy: this.vy, airT: this.airT, tuck: Math.max(this.boost, Math.max(0, (this.v / 70 - 0.8) / 0.2) * Math.max(0, 1 - Math.abs(this.vu) / 8)), preload: this.air ? 0 : rampH(s) / RAMP_H };
    if (this.rider && this.near) this.rider.update(rdt, this.board.tilt, crouch, Math.max(-1, Math.min(1, -lean)), 0, Math.min(1, this.v / 70), fx);
  }
}

// Gantry across the road with a banner (START / FINISH).
export function makeGantry(label, checker) {
  const g = new THREE.Group();
  const W = ROAD_HALF + 1.6, H = 7.2;
  const pole = new THREE.MeshStandardMaterial({ color: '#2b2d3a', metalness: 0.6, roughness: 0.4 });
  for (const x of [-W, W]) { const m = new THREE.Mesh(new THREE.BoxGeometry(0.5, H, 0.5), pole); m.position.set(x, H / 2, 0); m.castShadow = true; g.add(m); }
  const c = document.createElement('canvas'); c.width = 1024; c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = '#15161d'; x.fillRect(0, 0, 1024, 128);
  if (checker) for (let i = 0; i < 64; i++) for (let j = 0; j < 2; j++) { if ((i + j) % 2) { x.fillStyle = '#f4f4f6'; x.fillRect(i * 16, j * 16, 16, 16); x.fillRect(i * 16, 96 + j * 16, 16, 16); } }
  x.fillStyle = '#ffb347'; x.fillRect(0, checker ? 32 : 0, 1024, 4); x.fillRect(0, checker ? 92 : 124, 1024, 4);
  x.fillStyle = '#fff'; x.font = 'italic 900 64px system-ui, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(label, 512, 66);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  const banner = new THREE.Mesh(new THREE.BoxGeometry(W * 2 + 0.5, 1.6, 0.3), [pole, pole, pole, pole, new THREE.MeshStandardMaterial({ map: t, roughness: 0.6 }), new THREE.MeshStandardMaterial({ map: t, roughness: 0.6 })]);
  banner.position.y = H - 0.8; banner.castShadow = true; g.add(banner);
  if (checker) {
    // painted line on the road
    const lc = document.createElement('canvas'); lc.width = 256; lc.height = 32; const lx = lc.getContext('2d');
    for (let i = 0; i < 16; i++) for (let j = 0; j < 2; j++) { lx.fillStyle = (i + j) % 2 ? '#f4f4f6' : '#15161d'; lx.fillRect(i * 16, j * 16, 16, 16); }
    const lt = new THREE.CanvasTexture(lc); lt.colorSpace = THREE.SRGBColorSpace;
    const line = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_HALF * 2, 1.2), new THREE.MeshStandardMaterial({ map: lt, roughness: 0.7 }));
    line.rotation.x = -Math.PI / 2; line.position.y = 0.05; g.add(line);
  }
  return g;
}
export function placeOnRoad(obj, s) {
  obj.position.set(roadX(s), roadY(s), -s);
  obj.rotation.y = -Math.atan((roadX(s + 1) - roadX(s - 1)) / 2);
}
export const ordinal = n => n + (['th', 'st', 'nd', 'rd'][(n % 100 - 20) % 10] || ['th', 'st', 'nd', 'rd'][n % 100] || 'th');
