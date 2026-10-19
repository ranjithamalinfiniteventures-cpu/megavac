// Police: crimes raise a wanted level, cruisers hunt the player through the street
// grid, switch to direct pursuit up close, ram and shoot; officers bail out on foot.
import * as THREE from 'three';
import { Car, nodePos, neighbors } from './vehicles.js';
import { N, HALF, P } from './world.js';

const v1 = new THREE.Vector3(), v2 = new THREE.Vector3(), nTmp = new THREE.Vector3();
const wrapA = a => Math.atan2(Math.sin(a), Math.cos(a));
const clamp1 = x => Math.max(-1, Math.min(1, x));
function boxG(w, h, d, x = 0, y = 0, z = 0) { return new THREE.BoxGeometry(w, h, d).translate(x, y, z); }

export class Police {
  constructor({ scene, world, traffic, combat, fx, sound }, rand) {
    Object.assign(this, { scene, world, traffic, combat, fx, sound, R: rand });
    this.wanted = 0; this.calm = 0; this.spawnCD = 0; this.cars = []; this.target = new THREE.Vector3();
    this.onLost = null;
    this._officers();
    combat.extra = {
      ray: (o, d, maxD) => this._ray(o, d, maxD),
      hit: (cop, dmg, dir) => this._hurt(cop, dmg, dir, 5),
      blast: (pos, r) => { for (const c of this.cops) if (c.active && c.down <= 0 && c.pos.distanceTo(pos) < r) this._hurt(c, 99, v1.subVectors(c.pos, pos).setY(0).normalize(), 12); },
    };
  }

  get stars() { return Math.min(5, Math.ceil(this.wanted - 0.001)); }
  crime(amount) { this.wanted = Math.min(5, this.wanted + amount); this.calm = 0; }
  clear() { this.wanted = 0; }

  // ---------- cruisers ----------
  _nodeNear(p) {
    const cl = v => Math.max(0, Math.min(N, v));
    return [cl(Math.round((p.x + HALF) / P)), cl(Math.round((p.z + HALF) / P))];
  }
  _spawnCar(player) {
    let a = null;
    for (let i = 0; i < 25 && !a; i++) {
      const k = Math.floor(this.R() * (N + 1)), l = Math.floor(this.R() * (N + 1)), d = nodePos(k, l).distanceTo(player);
      if (d > 140 && d < 280) a = [k, l];
    }
    if (!a) return;
    const nb = neighbors(...a);
    let car = this.cars.find(c => !c.active);
    if (!car) {
      car = new Car(this.scene, this.world, 'police', 0x15181f, 0, 0, 0);
      car.police = {}; this.cars.push(car);
    }
    car.repair(); car.active = true; car.driven = false; car.m.group.visible = true;
    car.tilt.set(0, 0); car.spin = 0; car.vy = 0;
    this.traffic._startAI(car, a, nb[Math.floor(this.R() * nb.length)], 0);
    this._chase(car);
    Object.assign(car.police, { mode: 'road', stuck: 0, rev: 0, cd: 1.5 + this.R(), out: false, deadT: 0 });
    if (!this.traffic.cars.includes(car)) this.traffic.cars.push(car);
  }
  _chase(car) { car.ai.max = 27; car.ai.cur = 16; car.ai.chase = () => this.target; }
  _retire(car) {
    car.active = false; car.ai = null; car.driven = false; car.m.group.visible = false;
    car.pos.set(0, -50, 0); car.vx = car.vz = 0;
    const i = this.traffic.cars.indexOf(car); if (i >= 0) this.traffic.cars.splice(i, 1);
  }

  _canSee(from, to, maxD) {
    const d = from.distanceTo(to);
    if (d > maxD) return false;
    v2.subVectors(to, from).divideScalar(d);
    return !this.world.col.raycast(from, v2, d - 1, false);
  }
  _shoot(from, player, d) {
    const hit = Math.random() < Math.max(0.1, Math.min(0.45, 0.55 - d / 100)) * (player.speed > 14 ? 0.35 : 1);
    const to = player.pos.clone();
    if (!hit) to.add(new THREE.Vector3((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 4));
    this.combat.tracer(from.clone(), to, true);
    this.sound.shot(Math.max(0.08, 0.35 - d / 200));
    if (hit) player.onHit(3 + Math.random() * 3);
  }

  update(dt, player) {
    this.target.copy(player.pos);
    const stars = this.stars;
    const want = stars === 0 ? 0 : Math.min(6, stars + (stars >= 3 ? 1 : 0));
    const active = this.cars.filter(c => c.active && !c.dead);
    this.spawnCD -= dt;
    if (active.length < want && this.spawnCD <= 0) { this._spawnCar(player.pos); this.spawnCD = 3; }
    let seen = false, nearest = Infinity;
    const blink = Math.floor(performance.now() / 180) % 2;
    for (const car of this.cars.slice()) {
      if (!car.active) continue;
      if (car === player.car) { // the player stole a cruiser: it is theirs now
        this.cars.splice(this.cars.indexOf(car), 1); car.police = null; car.active = false; car.driven = false;
        this.crime(1); continue;
      }
      const pol = car.police, d = car.pos.distanceTo(player.pos);
      if (car.dead) {
        car.driven = false;
        if ((pol.deadT += dt) > 25 && d > 120) this._retire(car);
        continue;
      }
      car.m.siren.red.color.setScalar(blink ? 4 : 0.2).multiply(new THREE.Color(1, 0.1, 0.1));
      car.m.siren.blue.color.setScalar(blink ? 0.2 : 4).multiply(new THREE.Color(0.1, 0.3, 1));
      nearest = Math.min(nearest, d);
      if (stars === 0) { // give up and drive off
        if (car.ai) car.ai.chase = null;
        else { car.driven = false; }
        if (d > 160) this._retire(car);
        continue;
      }
      if (d < 75) seen = true;
      if (pol.mode === 'road') {
        if (!car.ai || d < 45) { pol.mode = 'pursuit'; car.ai = null; car.driven = true; }
      } else if (d > 120) {
        pol.mode = 'road'; car.driven = false;
        const a = this._nodeNear(car.pos), nb = neighbors(...a);
        this.traffic._startAI(car, a, nb[Math.floor(this.R() * nb.length)], 0); this._chase(car);
      } else this._pursue(car, dt, player, d);
      // officers fire from the window
      pol.cd -= dt;
      if (pol.cd <= 0 && player.active && d < 45) {
        pol.cd = 1.3 + Math.random();
        const from = v1.set(car.pos.x, car.pos.y + 1.5, car.pos.z);
        if (this._canSee(from, player.pos, 45)) this._shoot(from, player, d);
      }
      // bail out on foot when the player is on foot nearby
      if (pol.mode === 'pursuit' && !pol.out && player.mode === 'foot' && d < 18 && Math.abs(car.speed) < 3) {
        pol.out = true;
        for (const s of [1, -1]) this._spawnCop(car.pos.x + Math.cos(car.yaw) * 2.2 * s, car.pos.z - Math.sin(car.yaw) * 2.2 * s, car.pos.y);
      }
    }
    this._updateCops(dt, player, stars, s => { if (s) seen = true; });
    // shake them off: out of sight for 10 s and the stars start to drop
    if (stars > 0) {
      if (seen) this.calm = 0;
      else if ((this.calm += dt) > 10) {
        this.wanted = Math.max(0, this.wanted - dt / 7);
        if (this.wanted === 0) this.onLost?.();
      }
    }
    this.sound.siren?.(stars > 0 && nearest < 140 ? Math.max(0, 0.12 - nearest / 1400) : 0);
  }

  _pursue(car, dt, player, d) {
    const pol = car.police;
    const desired = Math.atan2(player.pos.x - car.pos.x, player.pos.z - car.pos.z);
    const diff = wrapA(desired - car.yaw);
    let f = 1, r = clamp1(-diff * 2.5);
    if (player.mode === 'foot' && d < 14) f = car.speed > 1 ? -1 : 0;
    if (Math.abs(car.speed) < 1.5 && f > 0) { if ((pol.stuck += dt) > 1.2) { pol.rev = 1.1; pol.stuck = 0; } } else pol.stuck = 0;
    if (pol.rev > 0) { pol.rev -= dt; f = -1; r = -r; }
    const impact = car.drive(dt, { raw: { f, r }, handbrake: false, nitro: d > 60 });
    if (impact > 8) this.fx.burst('spark', v1.set(car.pos.x, car.pos.y + 0.8, car.pos.z), 8);
  }

  // ---------- officers on foot ----------
  _officers() {
    const n = 16;
    this.cops = [];
    for (let i = 0; i < n; i++) this.cops.push({ active: false, pos: new THREE.Vector3(), vel: new THREE.Vector3(), yaw: 0, hp: 2, down: 0, spin: 0, cd: 1, phase: Math.random() * 6, losT: 0, los: false });
    const mat = new THREE.MeshStandardMaterial({ roughness: 0.7, flatShading: true });
    const parts = {
      torso: boxG(0.46, 0.62, 0.26, 0, 0.31, 0), head: new THREE.IcosahedronGeometry(0.15, 1).translate(0, 0.17, 0),
      cap: boxG(0.34, 0.1, 0.38, 0, 0.32, 0.03), leg: boxG(0.16, 0.84, 0.17, 0, -0.42, 0), arm: boxG(0.12, 0.62, 0.13, 0, -0.31, 0),
      gun: boxG(0.08, 0.3, 0.12, 0, -0.64, 0.06),
    };
    const cols = { torso: 0x1f3c88, head: 0xe0ac69, cap: 0x10204a, legL: 0x141a2e, legR: 0x141a2e, armL: 0x1f3c88, armR: 0x1f3c88, gun: 0x0e0e0e };
    this.copMeshes = {};
    const c = new THREE.Color();
    for (const k of Object.keys(cols)) {
      const m = new THREE.InstancedMesh(parts[k.replace(/[LR]$/, '')], mat, n);
      m.castShadow = true; m.frustumCulled = false;
      for (let i = 0; i < n; i++) m.setColorAt(i, c.set(cols[k]));
      this.scene.add(m); this.copMeshes[k] = m;
    }
    this.root = new THREE.Object3D(); this.o = new THREE.Object3D(); this.m4 = new THREE.Matrix4(); this.zero = new THREE.Matrix4().makeScale(0, 0, 0);
  }
  _spawnCop(x, z, y) {
    const c = this.cops.find(k => !k.active);
    if (!c) return;
    const g = this.world.col.groundAt(x, z, y + 1);
    Object.assign(c, { active: true, hp: 2, down: 0, spin: 0, cd: 1 + Math.random(), losT: 0 });
    c.pos.set(x, g, z); c.vel.set(0, 0, 0);
  }
  _hurt(c, dmg, dir, knock) {
    c.hp -= dmg;
    this.fx.burst('spark', v1.set(c.pos.x, c.pos.y + 1.1, c.pos.z), 4);
    if (c.hp > 0) return;
    c.down = 20; c.vel.set(dir.x * knock, 4 + knock * 0.3, dir.z * knock);
    this.sound.thud(); this.crime(1);
    this.combat.kills++; this.combat.onKill?.(c);
  }
  _ray(o, d, maxD) {
    let best = null, bd = maxD;
    for (const c of this.cops) {
      if (!c.active || c.down > 0) continue;
      const px = c.pos.x - o.x, py = c.pos.y + 1 - o.y, pz = c.pos.z - o.z;
      const t = px * d.x + py * d.y + pz * d.z;
      if (t < 0 || t > bd) continue;
      const qx = px - d.x * t, qy = (py - d.y * t) * 0.52, qz = pz - d.z * t;
      if (qx * qx + qy * qy + qz * qz < 0.25) { bd = t; best = c; }
    }
    return best ? { obj: best, dist: bd } : null;
  }
  _updateCops(dt, player, stars, markSeen) {
    const col = this.world.col;
    this.cops.forEach((c, i) => {
      if (!c.active) return;
      if (c.down > 0) {
        c.down -= dt;
        if (c.vel.lengthSq() > 0.01) {
          c.vel.y -= 25 * dt; c.pos.addScaledVector(c.vel, dt);
          const g = col.groundAt(c.pos.x, c.pos.z, c.pos.y + 0.5);
          if (c.pos.y < g) { c.pos.y = g; c.vel.multiplyScalar(0.3); c.vel.y = 0; }
          c.spin = Math.min(1.5, c.spin + dt * 6);
        }
        if (c.down <= 0) c.active = false;
        return;
      }
      const dx = player.pos.x - c.pos.x, dz = player.pos.z - c.pos.z, d = Math.hypot(dx, player.pos.y - c.pos.y - 1.5, dz);
      if (stars === 0 && d > 50) { c.active = false; return; }
      if (d < 75) markSeen(true);
      c.yaw += wrapA(Math.atan2(dx, dz) - c.yaw) * Math.min(1, 8 * dt);
      if (d > 10 && stars > 0) { // close in
        const sp = 5.5 * dt, hd = Math.hypot(dx, dz) || 1;
        c.pos.x += dx / hd * sp; c.pos.z += dz / hd * sp; c.phase += dt * 9;
        col.pushCircle(c.pos, 0.4, c.pos.y, 1.8, 0.6, nTmp);
        const g = col.groundAt(c.pos.x, c.pos.z, c.pos.y);
        c.pos.y = g > c.pos.y - 1.5 ? g : c.pos.y - 9.8 * dt;
      }
      c.losT -= dt;
      if (c.losT <= 0) { c.losT = 0.4; c.los = this._canSee(v1.set(c.pos.x, c.pos.y + 1.5, c.pos.z), player.pos, 50); }
      c.cd -= dt;
      if (c.los && c.cd <= 0 && player.active && stars > 0) {
        c.cd = 1.1 + Math.random() * 0.9;
        this._shoot(v1.set(c.pos.x, c.pos.y + 1.4, c.pos.z), player, d);
      }
    });
    // instance matrices
    const M = this.copMeshes, r = this.root;
    this.cops.forEach((c, i) => {
      if (!c.active) { for (const k in M) M[k].setMatrixAt(i, this.zero); return; }
      r.position.set(c.pos.x, c.pos.y + 0.9, c.pos.z); r.rotation.set(c.down > 0 ? -c.spin : 0, c.yaw, 0, 'YXZ'); r.updateMatrix();
      const sw = c.down > 0 ? 0 : Math.sin(c.phase) * 0.5;
      const set = (name, x, y, z, rx, rz = 0) => {
        this.o.position.set(x, y, z); this.o.rotation.set(rx, 0, rz); this.o.updateMatrix();
        this.m4.multiplyMatrices(r.matrix, this.o.matrix); M[name].setMatrixAt(i, this.m4);
      };
      set('torso', 0, 0, 0, 0); set('head', 0, 0.64, 0, 0); set('cap', 0, 0.64, 0, 0);
      set('legL', 0.11, 0, 0, sw); set('legR', -0.11, 0, 0, -sw);
      set('armL', 0.29, 0.58, 0, -1.3, -0.5); set('armR', -0.29, 0.58, 0, -1.55); set('gun', -0.29, 0.58, 0, -1.55);
    });
    for (const k in M) M[k].instanceMatrix.needsUpdate = true;
  }

  // minimap points
  get mapPoints() {
    const out = [];
    for (const c of this.cars) if (c.active && !c.dead) out.push({ x: c.pos.x, z: c.pos.z, car: true });
    for (const c of this.cops) if (c.active && c.down <= 0) out.push({ x: c.pos.x, z: c.pos.z, car: false });
    return out;
  }
}
