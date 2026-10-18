// Cars (player-driven and AI traffic), the airplane and street pedestrians.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { N, roadAt, HALF, ROAD, LANE, AIR, P, BLOCK } from './world.js';

const glassMat = new THREE.MeshStandardMaterial({ color: 0x15202b, roughness: 0.05, metalness: 0.9, flatShading: true });
const darkMat = new THREE.MeshStandardMaterial({ color: 0x1c1d20, roughness: 0.7, flatShading: true });
const tireMat = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.9, flatShading: true });
const rimMat = new THREE.MeshStandardMaterial({ color: 0xc8ccd2, roughness: 0.3, metalness: 0.8, flatShading: true });
export const headMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
export const tailMat = new THREE.MeshBasicMaterial({ color: 0xff2a2a });
const brakeMat = new THREE.MeshBasicMaterial({ color: 0xff3030 });
const v1 = new THREE.Vector3(), v2 = new THREE.Vector3(), nTmp = new THREE.Vector3();
const damp = (k, dt) => 1 - Math.exp(-k * dt);
const wrapA = a => Math.atan2(Math.sin(a), Math.cos(a));

function box(w, h, d, x = 0, y = 0, z = 0, taperTop = 1, taperZ = 1) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (taperTop !== 1 || taperZ !== 1) {
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) if (p.getY(i) > 0) { p.setX(i, p.getX(i) * taperTop); p.setZ(i, p.getZ(i) * taperZ); }
    g.computeVertexNormals();
  }
  return g.translate(x, y, z);
}

const CAR_TYPES = {
  sedan: { w: 1.9, l: 4.3, h: 0.62, ch: 0.56, cl: 2.2, cz: -0.15, top: 26, acc: 15 },
  sports: { w: 2.0, l: 4.4, h: 0.5, ch: 0.42, cl: 1.8, cz: -0.35, top: 52, acc: 26 },
  van: { w: 2.05, l: 4.9, h: 1.0, ch: 0.8, cl: 3.3, cz: -0.5, top: 30, acc: 12 },
  taxi: { w: 1.9, l: 4.4, h: 0.62, ch: 0.56, cl: 2.2, cz: -0.15, top: 34, acc: 17 },
  muscle: { w: 2.0, l: 4.7, h: 0.6, ch: 0.48, cl: 2.0, cz: -0.4, top: 46, acc: 22 },
};

function carMesh(type, color) {
  const T = CAR_TYPES[type];
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const paint = new THREE.MeshStandardMaterial({ color, roughness: 0.28, metalness: 0.45, flatShading: true });
  const base = 0.38;
  const paintG = [box(T.w, T.h, T.l, 0, base + T.h / 2, 0, 0.97, 0.98)];
  paintG.push(box(T.w * 0.8, 0.08, T.cl * 0.62, 0, base + T.h + T.ch + 0.04, T.cz));
  if (type === 'sports' || type === 'muscle') paintG.push(box(T.w * 0.9, 0.08, 0.35, 0, base + T.h + 0.32, -T.l / 2 + 0.25));
  const glassG = [box(T.w * 0.9, T.ch, T.cl, 0, base + T.h + T.ch / 2, T.cz, 0.86, 0.68)];
  const darkG = [box(T.w * 1.02, 0.2, 0.18, 0, base + 0.12, T.l / 2), box(T.w * 1.02, 0.2, 0.18, 0, base + 0.12, -T.l / 2),
    box(T.w * 0.5, 0.12, 0.05, 0, base + T.h * 0.4, T.l / 2 + 0.02)];
  const headG = [box(0.42, 0.14, 0.06, T.w / 2 - 0.36, base + T.h * 0.62, T.l / 2 + 0.01), box(0.42, 0.14, 0.06, -T.w / 2 + 0.36, base + T.h * 0.62, T.l / 2 + 0.01)];
  const tailG = [box(0.44, 0.14, 0.06, T.w / 2 - 0.34, base + T.h * 0.66, -T.l / 2 - 0.01), box(0.44, 0.14, 0.06, -T.w / 2 + 0.34, base + T.h * 0.66, -T.l / 2 - 0.01)];
  const mk = (geos, mat, cast = true) => { const m = new THREE.Mesh(mergeGeometries(geos), mat); m.castShadow = cast; body.add(m); return m; };
  mk(paintG, paint); mk(glassG, glassMat); mk(darkG, darkMat, false); mk(headG, headMat, false);
  const tail = mk(tailG, tailMat, false);
  if (type === 'taxi') { const s = new THREE.Mesh(box(0.7, 0.22, 0.3), new THREE.MeshBasicMaterial({ color: 0xfff3a0 })); s.position.set(0, base + T.h + T.ch + 0.19, T.cz); body.add(s); }
  const wheelG = mergeGeometries([new THREE.CylinderGeometry(0.4, 0.4, 0.3, 10).rotateZ(Math.PI / 2)]);
  const rimG = new THREE.CylinderGeometry(0.22, 0.22, 0.32, 6).rotateZ(Math.PI / 2);
  const wheels = [], steer = [];
  for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
    const pivot = new THREE.Group(); pivot.position.set(sx * (T.w / 2 - 0.12), 0.4, sz * (T.l / 2 - 0.85)); g.add(pivot);
    const w = new THREE.Mesh(wheelG, tireMat); w.add(new THREE.Mesh(rimG, rimMat)); pivot.add(w);
    wheels.push(w); if (sz > 0) steer.push(pivot);
  }
  return { group: g, body, wheels, steer, tail, T };
}

export class Car {
  constructor(scene, world, type, color, x, z, yaw) {
    this.world = world; this.type = type;
    this.m = carMesh(type, color); scene.add(this.m.group);
    this.T = this.m.T;
    this.pos = new THREE.Vector3(x, world.col.groundAt(x, z, 1), z);
    this.yaw = yaw; this.vx = 0; this.vz = 0; this.vy = 0; this.steer = 0; this.spin = 0;
    this.ai = null; this.driven = false; this.idle = 0;
    this.tilt = new THREE.Vector2(); this.braking = false; this.radius = this.T.l / 2;
    this.sync(0);
  }
  get fx() { return Math.sin(this.yaw); }
  get fz() { return Math.cos(this.yaw); }
  get speed() { return this.vx * this.fx + this.vz * this.fz; }
  get moving() { return Math.abs(this.vx) + Math.abs(this.vz) > 0.05 || this.vy !== 0; }

  // Arcade handling: forward speed is driven, sideways speed bleeds off by grip (less on handbrake = drift).
  drive(dt, inp) {
    const T = this.T, fx = this.fx, fz = this.fz, rx = -fz, rz = fx;
    let vf = this.vx * fx + this.vz * fz, vr = this.vx * rx + this.vz * rz;
    const thr = inp.raw.f;
    this.braking = false;
    if (thr > 0) vf += (vf < T.top ? T.acc * (1 - Math.max(0, vf) / (T.top * 1.15)) + 4 : 0) * dt;
    else if (thr < 0) { if (vf > 0.5) { vf -= 38 * dt; this.braking = true; } else vf = Math.max(-12, vf - 10 * dt); }
    vf -= vf * 0.12 * dt + Math.sign(vf) * Math.min(Math.abs(vf), 1.5 * dt);
    if (inp.handbrake) { vf -= Math.sign(vf) * Math.min(Math.abs(vf), 12 * dt); this.braking = true; }
    const grip = inp.handbrake ? 1.6 : 9;
    vr -= vr * Math.min(1, grip * dt);
    this.steer += (-inp.raw.r - this.steer) * damp(8, dt);
    const sf = Math.min(1, Math.abs(vf) / 6) * Math.sign(vf);
    const yawRate = this.steer * 2.3 * sf / (1 + Math.abs(vf) / 32) * (inp.handbrake ? 1.5 : 1);
    this.yaw += yawRate * dt;
    const nfx = Math.sin(this.yaw), nfz = Math.cos(this.yaw);
    this.vx = nfx * vf + -nfz * vr; this.vz = nfz * vf + nfx * vr;
    this.drift = Math.abs(vr);
    this.tilt.x += ((thr > 0 ? -0.025 : this.braking ? 0.05 : 0) - this.tilt.x) * damp(6, dt);
    this.tilt.y += (-yawRate * vf * 0.004 - this.tilt.y) * damp(6, dt);
    return this.integrate(dt);
  }

  coast(dt) {
    const sp = Math.hypot(this.vx, this.vz);
    if (sp > 0) { const k = Math.max(0, sp - 9 * dt) / sp; this.vx *= k; this.vz *= k; }
    this.yaw += this.spin * dt; this.spin *= Math.max(0, 1 - 2 * dt);
    this.tilt.multiplyScalar(1 - Math.min(1, 4 * dt)); this.braking = false;
    return this.integrate(dt);
  }

  integrate(dt) {
    const col = this.world.col, p = this.pos;
    p.x += this.vx * dt; p.z += this.vz * dt;
    let impact = 0;
    for (const off of [1.3, -1.3]) {
      v1.set(p.x + this.fx * off, 0, p.z + this.fz * off);
      const bx = v1.x, bz = v1.z;
      if (col.pushCircle(v1, 1.05, p.y, 1.6, 0.6, nTmp)) {
        p.x += v1.x - bx; p.z += v1.z - bz;
        const vn = this.vx * nTmp.x + this.vz * nTmp.z;
        if (vn < 0) { this.vx -= 1.35 * vn * nTmp.x; this.vz -= 1.35 * vn * nTmp.z; impact = Math.max(impact, -vn); }
      }
    }
    const g = col.groundAt(p.x, p.z, p.y);
    if (p.y > g + 0.05 || this.vy > 0) { this.vy -= 30 * dt; p.y += this.vy * dt; if (p.y <= g) { p.y = g; this.vy = 0; } }
    else { p.y += (g - p.y) * Math.min(1, dt * 20); this.vy = 0; }
    return impact;
  }

  sync(dt) {
    const g = this.m.group;
    g.position.copy(this.pos); g.rotation.y = this.yaw;
    this.m.body.rotation.x = this.tilt.x; this.m.body.rotation.z = this.tilt.y;
    const roll = this.speed * dt / 0.4;
    for (const w of this.m.wheels) w.rotation.x += roll;
    for (const s of this.m.steer) s.rotation.y = this.steer * 0.5;
    this.m.tail.material = this.braking ? brakeMat : tailMat;
  }
}

// ---------------- traffic ----------------
const nodePos = (k, l) => new THREE.Vector3(roadAt(k), 0, roadAt(l));
function neighbors(k, l) {
  const o = [];
  if (k > 0) o.push([k - 1, l]); if (k < N) o.push([k + 1, l]);
  if (l > 0) o.push([k, l - 1]); if (l < N) o.push([k, l + 1]);
  return o;
}
const RT = ROAD / 2 + 2;

export class Traffic {
  constructor(scene, world, rand) {
    this.scene = scene; this.world = world; this.R = rand;
    this.cars = [];
    const types = ['sedan', 'sedan', 'sedan', 'taxi', 'taxi', 'van', 'sports', 'muscle'];
    const colors = [0xc0392b, 0x2e86de, 0xf1c40f, 0xecf0f1, 0x2c3e50, 0x27ae60, 0x8e44ad, 0xe67e22, 0x95a5a6, 0x16a085, 0xd35400, 0x34495e];
    const used = new Set();
    for (let i = 0; i < 44; i++) {
      let k, l, nb, key;
      do { k = Math.floor(rand() * (N + 1)); l = Math.floor(rand() * (N + 1)); nb = neighbors(k, l); nb = nb[Math.floor(rand() * nb.length)]; key = k + ',' + l + '>' + nb; } while (used.has(key));
      used.add(key);
      const type = types[Math.floor(rand() * types.length)];
      const car = new Car(scene, world, type, type === 'taxi' ? 0xf5c518 : colors[Math.floor(rand() * colors.length)], 0, 0, 0);
      this._startAI(car, [k, l], nb, rand());
      this.cars.push(car);
    }
    // parked at the kerb near the start
    for (const [t, c, x, z, yaw] of [['sports', 0xe63946, 6.6, 14, Math.PI], ['muscle', 0x1d3557, 6.6, 46, Math.PI], ['sedan', 0xffffff, -6.6, 22, 0], ['sports', 0xffb703, -6.6, 60, 0]]) {
      const car = new Car(scene, world, t, c, x, z, yaw);
      car.parked = true;
      this.cars.push(car);
    }
  }

  _startAI(car, a, b, s = 0) {
    car.ai = { a, b, mode: 'straight', s, len: 1, cur: 9 + this.R() * 5, max: 11 + this.R() * 6, blocked: 0, ignore: 0 };
    this._setupStraight(car);
    this._placeAI(car);
  }
  _setupStraight(car) {
    const ai = car.ai, A = nodePos(...ai.a), B = nodePos(...ai.b);
    const d = v1.subVectors(B, A).normalize(), r = new THREE.Vector3(-d.z, 0, d.x);
    ai.p0 = A.clone().addScaledVector(d, RT).addScaledVector(r, LANE);
    ai.p2 = B.clone().addScaledVector(d, -RT).addScaledVector(r, LANE);
    ai.len = ai.p0.distanceTo(ai.p2); ai.mode = 'straight';
  }
  _setupTurn(car) {
    const ai = car.ai, A = nodePos(...ai.a), B = nodePos(...ai.b);
    const opts = neighbors(...ai.b).filter(n => n[0] !== ai.a[0] || n[1] !== ai.a[1]);
    const d1 = new THREE.Vector3().subVectors(B, A).normalize();
    let next = opts[Math.floor(this.R() * opts.length)];
    const straight = opts.find(n => { const d = nodePos(...n).sub(B).normalize(); return d.dot(d1) > 0.9; });
    if (straight && this.R() < 0.45) next = straight;
    const C = nodePos(...next);
    const d2 = new THREE.Vector3().subVectors(C, B).normalize();
    const r1 = new THREE.Vector3(-d1.z, 0, d1.x), r2 = new THREE.Vector3(-d2.z, 0, d2.x);
    ai.p0 = B.clone().addScaledVector(d1, -RT).addScaledVector(r1, LANE);
    ai.p2 = B.clone().addScaledVector(d2, RT).addScaledVector(r2, LANE);
    ai.p1 = d1.dot(d2) > 0.9 ? ai.p0.clone().lerp(ai.p2, 0.5) : B.clone().addScaledVector(r1, LANE).addScaledVector(r2, LANE);
    ai.len = (ai.p0.distanceTo(ai.p1) + ai.p1.distanceTo(ai.p2) + ai.p0.distanceTo(ai.p2)) / 2;
    ai.mode = 'turn'; ai.next = next;
  }
  _placeAI(car) {
    const ai = car.ai, t = ai.s;
    let tx, tz;
    if (ai.mode === 'straight') {
      car.pos.x = ai.p0.x + (ai.p2.x - ai.p0.x) * t; car.pos.z = ai.p0.z + (ai.p2.z - ai.p0.z) * t;
      tx = ai.p2.x - ai.p0.x; tz = ai.p2.z - ai.p0.z;
    } else {
      const u = 1 - t;
      car.pos.x = u * u * ai.p0.x + 2 * u * t * ai.p1.x + t * t * ai.p2.x;
      car.pos.z = u * u * ai.p0.z + 2 * u * t * ai.p1.z + t * t * ai.p2.z;
      tx = 2 * u * (ai.p1.x - ai.p0.x) + 2 * t * (ai.p2.x - ai.p1.x);
      tz = 2 * u * (ai.p1.z - ai.p0.z) + 2 * t * (ai.p2.z - ai.p1.z);
    }
    const ny = Math.atan2(tx, tz);
    car.steer = Math.max(-1, Math.min(1, wrapA(ny - car.yaw) * 8));
    car.yaw = ny;
    car.vx = Math.sin(ny) * ai.cur; car.vz = Math.cos(ny) * ai.cur;
    car.pos.y = 0;
  }

  update(dt, ctx) {
    const { playerCar, heroPos, fx, sound, peds } = ctx;
    for (const car of this.cars) {
      if (car.ai) {
        const ai = car.ai;
        // keep distance from whatever is in front
        let target = ai.max;
        const fxv = car.fx, fzv = car.fz;
        if (ai.ignore > 0) ai.ignore -= dt;
        else {
          const check = (px, pz, gap) => {
            const dx = px - car.pos.x, dz = pz - car.pos.z;
            const ahead = dx * fxv + dz * fzv, lat = Math.abs(dx * -fzv + dz * fxv);
            if (ahead > 0 && ahead < gap && lat < 2.6) target = Math.min(target, Math.max(0, (ahead - 6) * 1.2));
          };
          for (const o of this.cars) if (o !== car && Math.abs(o.pos.x - car.pos.x) < 16 && Math.abs(o.pos.z - car.pos.z) < 16) check(o.pos.x, o.pos.z, 14);
          if (heroPos) check(heroPos.x, heroPos.z, 11);
          if (target < 0.5) { ai.blocked += dt; if (ai.blocked > 3.5) { ai.ignore = 1.6; ai.blocked = 0; } }
          else ai.blocked = 0;
        }
        ai.cur += Math.max(-16 * dt, Math.min(6 * dt, target - ai.cur));
        car.braking = target < ai.cur - 1;
        ai.s += ai.cur * dt / ai.len;
        while (ai.s >= 1) {
          ai.s -= 1;
          if (ai.mode === 'straight') this._setupTurn(car);
          else { ai.a = ai.b; ai.b = ai.next; this._setupStraight(car); }
          ai.s *= 1; // carry remainder
        }
        this._placeAI(car);
      } else if (car !== playerCar && car.moving) {
        car.coast(dt);
        if (!car.moving) car.idle = 0;
      }
      car.sync(dt);
    }
    // collisions between the player's car (or any loose car) and the rest
    for (const a of this.cars) {
      if (a.ai || !a.moving) continue;
      for (const b of this.cars) {
        if (b === a) continue;
        const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z, d2 = dx * dx + dz * dz, rr = 3.6;
        if (d2 > rr * rr || d2 < 1e-6) continue;
        const d = Math.sqrt(d2), nx = dx / d, nz = dz / d;
        const rel = (a.vx - b.vx) * nx + (a.vz - b.vz) * nz;
        const push = (rr - d) / 2;
        a.pos.x -= nx * push; a.pos.z -= nz * push; b.pos.x += nx * push; b.pos.z += nz * push;
        if (rel <= 0) continue;
        if (b.ai) { b.ai = null; } // knocked out of traffic
        const j = rel * 0.85;
        a.vx -= nx * j * 0.6; a.vz -= nz * j * 0.6;
        b.vx += nx * j * 0.9; b.vz += nz * j * 0.9; b.spin += (Math.random() - 0.5) * rel * 0.25;
        if (rel > 5) { fx.burst('spark', v1.set((a.pos.x + b.pos.x) / 2, a.pos.y + 0.8, (a.pos.z + b.pos.z) / 2), Math.min(30, rel * 2)); sound.crash(Math.min(1, rel / 25)); ctx.onCrash?.(rel); }
      }
    }
    // loose cars far from the player drift back into traffic
    for (const car of this.cars) {
      if (car.ai || car === playerCar || car.parked) continue;
      car.idle += dt;
      if (car.idle > 30 && (!heroPos || car.pos.distanceTo(heroPos) > 120)) {
        const k = Math.floor(this.R() * (N + 1)), l = Math.floor(this.R() * (N + 1)), nb = neighbors(k, l);
        car.idle = 0; car.tilt.set(0, 0); car.spin = 0; car.vy = 0;
        this._startAI(car, [k, l], nb[Math.floor(this.R() * nb.length)], this.R());
      }
    }
  }

  nearest(p, maxD) {
    let best = null, bd = maxD;
    for (const c of this.cars) { const d = c.pos.distanceTo(p); if (d < bd) { bd = d; best = c; } }
    return best;
  }
}

// ---------------- airplane ----------------
function planeMesh() {
  const g = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({ color: 0xf2f2ee, roughness: 0.35, metalness: 0.3, flatShading: true });
  const red = new THREE.MeshStandardMaterial({ color: 0xd62839, roughness: 0.35, metalness: 0.3, flatShading: true });
  const add = (geo, mat, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; g.add(m); return m; };
  add(new THREE.CylinderGeometry(0.95, 0.55, 6, 8).rotateX(Math.PI / 2), white, 0, 1.6, 0.6);
  add(new THREE.CylinderGeometry(0.55, 0.18, 3.6, 8).rotateX(-Math.PI / 2), white, 0, 1.75, -4.1);
  add(new THREE.ConeGeometry(0.95, 1.2, 8).rotateX(Math.PI / 2), red, 0, 1.6, 4.2);
  add(new THREE.SphereGeometry(0.75, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2).scale(0.9, 0.8, 1.8), glassMat, 0, 2.3, 1.0);
  add(box(12.5, 0.16, 1.9, 0, 2.15, 0.9, 1, 0.85), white);
  add(box(1.2, 0.17, 1.6, 5.7, 2.16, 0.75), red); add(box(1.2, 0.17, 1.6, -5.7, 2.16, 0.75), red);
  add(box(4.6, 0.12, 1.1, 0, 1.85, -5.4), white);
  add(box(0.14, 1.9, 1.3, 0, 2.7, -5.4, 1, 0.6), red);
  add(box(0.2, 0.3, 6, 0.96, 1.6, 0.6), red); add(box(0.2, 0.3, 6, -0.96, 1.6, 0.6), red);
  for (const s of [-1, 1]) {
    add(box(0.1, 1.0, 0.1, s * 1.1, 0.9, 1.4), darkMat);
    add(new THREE.CylinderGeometry(0.32, 0.32, 0.22, 10).rotateZ(Math.PI / 2), tireMat, s * 1.1, 0.33, 1.4);
  }
  add(new THREE.CylinderGeometry(0.2, 0.2, 0.15, 8).rotateZ(Math.PI / 2), tireMat, 0, 0.6, -5.5);
  const prop = new THREE.Group(); prop.position.set(0, 1.6, 4.85); g.add(prop);
  const blade = new THREE.Mesh(box(0.2, 3.2, 0.06), darkMat); prop.add(blade);
  const blade2 = blade.clone(); blade2.rotation.z = Math.PI / 2; prop.add(blade2);
  prop.add(new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.5, 8).rotateX(Math.PI / 2), red));
  const disc = new THREE.Mesh(new THREE.CircleGeometry(1.6, 16), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false }));
  prop.add(disc);
  const navR = new THREE.Mesh(box(0.2, 0.2, 0.2), new THREE.MeshBasicMaterial({ color: 0xff2020 })); navR.position.set(6.35, 2.16, 0.7); g.add(navR);
  const navG = new THREE.Mesh(box(0.2, 0.2, 0.2), new THREE.MeshBasicMaterial({ color: 0x20ff40 })); navG.position.set(-6.35, 2.16, 0.7); g.add(navG);
  return { group: g, prop, disc };
}

export class Plane {
  constructor(scene, world) {
    this.world = world;
    this.m = planeMesh(); scene.add(this.m.group);
    this.q = new THREE.Quaternion(); this.vel = new THREE.Vector3(); this.pos = new THREE.Vector3();
    this.crashed = 0;
    this.reset();
  }
  reset() {
    this.pos.set(AIR.x0 + 30, 0, 0);
    this.q.setFromEuler(new THREE.Euler(0, Math.PI / 2, 0));
    this.vel.set(0, 0, 0); this.speed = 0; this.throttle = 0; this.onGround = true; this.crashed = 0;
    this.m.group.visible = true; this.sync(0);
  }
  get forward() { return v1.set(0, 0, 1).applyQuaternion(this.q).clone(); }

  fly(dt, inp) {
    const q = this.q;
    const fwd = new THREE.Vector3(0, 0, 1).applyQuaternion(q);
    const left = new THREE.Vector3(1, 0, 0).applyQuaternion(q);
    this.throttle = Math.max(0, Math.min(1, this.throttle + ((inp.throttleUp ? 1 : 0) - (inp.throttleDown ? 1 : 0)) * 0.7 * dt));
    if (inp.raw.f > 0 && this.onGround && this.speed < 30) this.throttle = Math.min(1, this.throttle + 0.7 * dt);
    const thrust = this.throttle * 30, drag = this.speed * this.speed * 0.0042 + (this.onGround ? 1.2 : 0);
    this.speed = Math.max(0, this.speed + (thrust - drag - fwd.y * 9.8) * dt);
    const lift = Math.min(1, Math.max(0, (this.speed - 22) / 18));
    const auth = Math.min(1, this.speed / 30);
    const pitchIn = inp.raw.f * -1;        // W pushes the nose down, S pulls up
    if (this.onGround) {
      const heading = Math.atan2(fwd.x, fwd.z) - inp.raw.r * 0.8 * dt * Math.min(1, this.speed / 6);
      let pitch = Math.asin(Math.max(-1, Math.min(1, fwd.y)));
      pitch += (pitchIn > 0 && lift > 0.4 ? pitchIn * 0.6 * dt : -pitch * 3 * dt);
      q.setFromEuler(new THREE.Euler(-pitch, heading, 0, 'YXZ'));
    } else {
      const rot = new THREE.Quaternion();
      rot.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -pitchIn * 1.4 * auth * dt); q.multiply(rot);
      rot.setFromAxisAngle(new THREE.Vector3(0, 0, 1), inp.raw.r * 2.4 * auth * dt); q.multiply(rot);
      rot.setFromAxisAngle(new THREE.Vector3(0, 1, 0), (inp.yaw || 0) * -0.6 * auth * dt); q.multiply(rot);
      rot.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -left.y * 1.1 * lift * dt); q.premultiply(rot);
      q.normalize();
    }
    const nf = new THREE.Vector3(0, 0, 1).applyQuaternion(q);
    const target = nf.multiplyScalar(this.speed);
    const k = this.onGround ? 1 : Math.min(1, (0.5 + lift * 3) * dt);
    this.vel.x += (target.x - this.vel.x) * k; this.vel.z += (target.z - this.vel.z) * k;
    this.vel.y += (target.y * lift - this.vel.y * lift) * k;
    this.vel.y -= 9.8 * (1 - lift) * dt;
    this.pos.addScaledVector(this.vel, dt);
    // ground and buildings
    const col = this.world.col;
    const g = col.groundAt(this.pos.x, this.pos.z, this.pos.y + 0.5, 0.5);
    let crash = false;
    if (this.pos.y <= g) {
      const up = new THREE.Vector3(0, 1, 0).applyQuaternion(q);
      if (this.vel.y < -9 || up.y < 0.75 || g < -1) crash = true;
      this.pos.y = g; this.vel.y = Math.max(0, this.vel.y); this.onGround = true;
    } else if (this.pos.y > g + 0.3) this.onGround = false;
    const nose = this.pos.clone().addScaledVector(fwd, 4.8); nose.y += 1.6;
    const wl = this.pos.clone().addScaledVector(left, 6); wl.y += 2.1;
    const wr = this.pos.clone().addScaledVector(left, -6); wr.y += 2.1;
    for (const pt of [nose, wl, wr]) if (col.pointInside(pt.x, pt.y, pt.z)) crash = true;
    this.sync(dt);
    return crash;
  }

  idle(dt) {
    if (this.crashed > 0) { this.crashed -= dt; if (this.crashed <= 0) this.reset(); return; }
    if (this.speed > 0 || !this.onGround) this.fly(dt, { raw: { f: 0, r: 0 }, throttleDown: true });
  }

  sync(dt) {
    this.m.group.position.copy(this.pos); this.m.group.quaternion.copy(this.q);
    this.m.prop.rotation.z += (3 + this.throttle * 70) * dt;
    this.m.disc.material.opacity = Math.min(0.12, this.throttle * 0.15);
  }
}

// ---------------- pedestrians (instanced) ----------------
export class Peds {
  constructor(scene, world, rand, count = 70) {
    this.world = world; this.R = rand; this.list = [];
    const mat = new THREE.MeshStandardMaterial({ roughness: 0.8, flatShading: true });
    const parts = {
      torso: box(0.42, 0.6, 0.24, 0, 0.3, 0, 0.95, 1), head: new THREE.IcosahedronGeometry(0.15, 1).translate(0, 0.17, 0),
      leg: box(0.15, 0.82, 0.16, 0, -0.41, 0), arm: box(0.11, 0.62, 0.12, 0, -0.31, 0),
    };
    this.meshes = {};
    for (const k of ['torso', 'head', 'legL', 'legR', 'armL', 'armR']) {
      const g = parts[k.replace(/[LR]$/, '')];
      const m = new THREE.InstancedMesh(g, mat, count); m.castShadow = true; m.frustumCulled = false;
      scene.add(m); this.meshes[k] = m;
    }
    const shirts = [0xe63946, 0x457b9d, 0xf4a261, 0x2a9d8f, 0xe9c46a, 0x264653, 0xffffff, 0x8338ec, 0x3a86ff, 0xfb5607];
    const pants = [0x22223b, 0x3d405b, 0x1d3557, 0x6b705c, 0x111111];
    const skins = [0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524, 0xffdbac];
    const c = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const bi = Math.floor(rand() * N), bj = Math.floor(rand() * N);
      const x0 = roadAt(bi) + ROAD / 2 + 1.8, x1 = roadAt(bi + 1) - ROAD / 2 - 1.8;
      const z0 = roadAt(bj) + ROAD / 2 + 1.8, z1 = roadAt(bj + 1) - ROAD / 2 - 1.8;
      const p = { x0, x1, z0, z1, t: rand() * 4, dir: rand() < 0.5 ? 1 : -1, speed: 1.2 + rand() * 0.6, phase: rand() * 6,
        pos: new THREE.Vector3(), vel: new THREE.Vector3(), yaw: 0, flee: 0, down: 0, spin: 0, y: 0.25 };
      this.list.push(p);
      this.meshes.torso.setColorAt(i, c.set(shirts[Math.floor(rand() * shirts.length)]));
      this.meshes.armL.setColorAt(i, c); this.meshes.armR.setColorAt(i, c);
      this.meshes.head.setColorAt(i, c.set(skins[Math.floor(rand() * skins.length)]));
      const pc = pants[Math.floor(rand() * pants.length)];
      this.meshes.legL.setColorAt(i, c.set(pc)); this.meshes.legR.setColorAt(i, c);
      this._place(p);
    }
    this.root = new THREE.Object3D(); this.o = new THREE.Object3D(); this.m4 = new THREE.Matrix4();
  }
  // walk the rectangle around a block: t in [0,4)
  _place(p) {
    const t = ((p.t % 4) + 4) % 4, side = Math.floor(t), f = t - side;
    const { x0, x1, z0, z1 } = p;
    const pts = [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
    const a = pts[side], b = pts[(side + 1) % 4];
    p.pos.set(a[0] + (b[0] - a[0]) * f, 0.25, a[1] + (b[1] - a[1]) * f);
    const dx = (b[0] - a[0]) * p.dir, dz = (b[1] - a[1]) * p.dir;
    p.yaw = Math.atan2(dx, dz);
  }
  update(dt, threats, fx, sound) {
    const per = (2 * (BLOCK - 3.6));
    this.list.forEach((p, i) => {
      if (p.down > 0) {
        p.down -= dt;
        if (p.vel.lengthSq() > 0.01 || p.pos.y > 0.3) {
          p.vel.y -= 25 * dt; p.pos.addScaledVector(p.vel, dt);
          const g = this.world.col.groundAt(p.pos.x, p.pos.z, p.pos.y + 0.5);
          if (p.pos.y < g) { p.pos.y = g; p.vel.multiplyScalar(0.4); p.vel.y = 0; }
          p.spin += dt * 8;
        }
        if (p.down <= 0) { p.t = Math.random() * 4; this._place(p); p.spin = 0; }
      } else {
        let fleeing = false;
        for (const t of threats) {
          const dx = p.pos.x - t.pos.x, dz = p.pos.z - t.pos.z, d2 = dx * dx + dz * dz;
          if (d2 < 2.4 * 2.4 && t.speed > 6) { // hit
            const d = Math.sqrt(d2) || 1;
            p.vel.set(dx / d * t.speed * 0.6 + t.vx * 0.4, 4 + t.speed * 0.25, dz / d * t.speed * 0.6 + t.vz * 0.4);
            p.down = 8; fx.burst('dust', p.pos, 6); sound.thud();
            break;
          }
          if (d2 < 14 * 14 && t.speed > 4) { fleeing = true; p.flee = 1.5; }
        }
        if (p.flee > 0) p.flee -= dt;
        const sp = p.speed * (p.flee > 0 ? 3.2 : 1) * (fleeing ? 1 : 1);
        p.t += p.dir * sp * dt / (per / 2);
        p.phase += dt * sp * 4.2;
        this._place(p);
      }
      // build instance matrices from a tiny hierarchy
      const sw = p.down > 0 ? 0 : Math.sin(p.phase) * 0.6 * (p.flee > 0 ? 1.4 : 1);
      const r = this.root;
      r.position.set(p.pos.x, p.pos.y + 0.9, p.pos.z);
      r.rotation.set(p.down > 0 ? -Math.min(1.5, p.spin) : 0, p.yaw, 0, 'YXZ');
      r.updateMatrix();
      const set = (name, x, y, z, rx) => {
        this.o.position.set(x, y, z); this.o.rotation.set(rx, 0, 0); this.o.updateMatrix();
        this.m4.multiplyMatrices(r.matrix, this.o.matrix); this.meshes[name].setMatrixAt(i, this.m4);
      };
      set('torso', 0, 0, 0, 0); set('head', 0, 0.62, 0, 0);
      set('legL', 0.1, 0, 0, sw); set('legR', -0.1, 0, 0, -sw);
      set('armL', 0.27, 0.56, 0, -sw * 0.8); set('armR', -0.27, 0.56, 0, sw * 0.8);
    });
    for (const k in this.meshes) this.meshes[k].instanceMatrix.needsUpdate = true;
  }
}
