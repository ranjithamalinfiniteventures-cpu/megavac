// Weapons and enemies: hitscan blaster, plane rockets, tank shells, explosions
// and the street gangs that guard corners and rooftops.
import * as THREE from 'three';
import { N, roadAt, ROAD } from './world.js';

const v1 = new THREE.Vector3(), v2 = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);

function boxG(w, h, d, x = 0, y = 0, z = 0) { return new THREE.BoxGeometry(w, h, d).translate(x, y, z); }

// distance along a unit ray to a vertical ellipsoid (radius r, half height hh) centred at c, or -1
function rayBlob(o, d, cx, cy, cz, r, hh, maxD) {
  const px = cx - o.x, py = cy - o.y, pz = cz - o.z;
  const t = px * d.x + py * d.y + pz * d.z;
  if (t < 0 || t > maxD) return -1;
  const qx = px - d.x * t, qy = (py - d.y * t) * (r / hh), qz = pz - d.z * t;
  return qx * qx + qy * qy + qz * qz < r * r ? t : -1;
}

export class Combat {
  constructor({ scene, world, fx, sound, traffic, peds }, rand) {
    Object.assign(this, { scene, world, fx, sound, traffic, peds, R: rand });
    this.kills = 0; this.projectiles = []; this.boomCD = 0;
    this.onCarDestroyed = null; this.onExplosion = null; this.onKill = null;
    // tracers
    this.tracerMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 3, 1.4), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    this.enemyTracerMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 0.6, 0.4), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    const tg = new THREE.CylinderGeometry(0.035, 0.035, 1, 4, 1, true).translate(0, 0.5, 0);
    this.tracers = [];
    for (let i = 0; i < 40; i++) {
      const m = new THREE.Mesh(tg, this.tracerMat); m.visible = false; m.frustumCulled = false;
      scene.add(m); this.tracers.push({ m, life: 0 });
    }
    // projectile meshes
    this.rocketG = new THREE.CylinderGeometry(0.12, 0.12, 1.2, 6).rotateX(Math.PI / 2);
    this.rocketMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, emissive: 0xff5a1a, emissiveIntensity: 0.4, flatShading: true });
    this.shellG = new THREE.SphereGeometry(0.22, 6, 4);
    this.shellMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 3, 1) });
    this._goons(rand);
  }

  // ---------- tracers / shots ----------
  tracer(from, to, enemy = false) {
    const t = this.tracers.find(k => k.life <= 0) || this.tracers[0];
    const d = v1.subVectors(to, from), len = d.length();
    if (len < 0.01) return;
    t.m.material = enemy ? this.enemyTracerMat : this.tracerMat;
    t.m.position.copy(from); t.m.quaternion.setFromUnitVectors(UP, d.divideScalar(len));
    t.m.scale.set(1, len, 1); t.m.visible = true; t.life = 0.07;
  }

  // nearest thing a ray hits: { kind: 'world'|'goon'|'car'|'ped', dist, point, obj }
  ray(o, d, maxD, ignoreCar = null) {
    const w = this.world.col.raycast(o, d, maxD, true);
    let best = w ? { kind: 'world', dist: w.dist, normal: w.normal } : { kind: 'none', dist: maxD };
    for (const g of this.goons) {
      if (g.down > 0) continue;
      const t = rayBlob(o, d, g.pos.x, g.pos.y + 1.0, g.pos.z, 0.5, 0.95, best.dist);
      if (t >= 0) best = { kind: 'goon', dist: t, obj: g };
    }
    for (const c of this.traffic.cars) {
      if (c === ignoreCar) continue;
      const t = rayBlob(o, d, c.pos.x, c.pos.y + 0.9, c.pos.z, 1.9, 1.0, best.dist);
      if (t >= 0) best = { kind: 'car', dist: t, obj: c };
    }
    const p = this.peds.ray(o, d, best.dist);
    if (p) best = { kind: 'ped', dist: p.dist, obj: p.obj };
    best.point = o.clone().addScaledVector(d, best.dist);
    return best;
  }

  // the player's blaster: aim along the camera ray, fire from the hand
  playerShot(hand, camPos, camDir, ignoreCar) {
    const hit = this.ray(camPos, camDir, 260, ignoreCar);
    this.tracer(hand, hit.point);
    this.sound.shot(0.5);
    if (hit.kind === 'goon') this.hurtGoon(hit.obj, 1, camDir);
    else if (hit.kind === 'car') { if (hit.obj.damage(9)) this._carBoom(hit.obj); else this.fx.burst('spark', hit.point, 5); }
    else if (hit.kind === 'ped') this.peds.knock(hit.obj, camDir.x * 6, 3, camDir.z * 6);
    else if (hit.kind === 'world') this.fx.burst('spark', hit.point, 4);
  }

  fireRocket(pos, dir, speed) {
    const m = new THREE.Mesh(this.rocketG, this.rocketMat); m.position.copy(pos);
    this.scene.add(m);
    // light homing: lock the closest target inside a narrow cone ahead
    let target = null, best = 0.985;
    const consider = (p, obj) => {
      v1.subVectors(p, pos); const d = v1.length();
      if (d > 350 || d < 5) return;
      const c = v1.divideScalar(d).dot(dir);
      if (c > best) { best = c; target = obj; }
    };
    for (const g of this.goons) if (g.down <= 0) consider(v2.set(g.pos.x, g.pos.y + 1, g.pos.z), g);
    for (const c of this.traffic.cars) if (!c.dead) consider(v2.set(c.pos.x, c.pos.y + 0.8, c.pos.z), c);
    this.projectiles.push({ kind: 'rocket', m, pos: pos.clone(), vel: dir.clone().multiplyScalar(speed), life: 4, target, radius: 9, power: 120 });
    this.sound.rocket();
  }

  fireShell(pos, dir) {
    const m = new THREE.Mesh(this.shellG, this.shellMat); m.position.copy(pos);
    this.scene.add(m);
    this.projectiles.push({ kind: 'shell', m, pos: pos.clone(), vel: dir.clone().multiplyScalar(120), life: 5, radius: 8, power: 150 });
    this.fx.burst('dust', pos, 10);
    this.sound.cannon();
  }

  explode(pos, radius, power) {
    this.fx.burst('explosion', pos);
    if (this.boomCD <= 0) { this.sound.explosion(); this.boomCD = 0.12; }
    this.onExplosion?.(pos, radius);
    for (const g of this.goons) {
      if (g.down > 0) continue;
      const d = g.pos.distanceTo(pos);
      if (d < radius) this.hurtGoon(g, 99, v1.subVectors(g.pos, pos).setY(0).normalize(), 14 * (1 - d / radius) + 6);
    }
    for (const p of this.peds.list) {
      if (p.down > 0) continue;
      const d = p.pos.distanceTo(pos);
      if (d < radius) { v1.subVectors(p.pos, pos).setY(0).normalize(); this.peds.knock(p, v1.x * 12, 9, v1.z * 12); }
    }
    for (const c of this.traffic.cars) {
      const d = c.pos.distanceTo(pos);
      if (d > radius) continue;
      v1.subVectors(c.pos, pos).setY(0).normalize();
      c.ai = null; c.vx += v1.x * 10 * (1 - d / radius); c.vz += v1.z * 10 * (1 - d / radius); c.vy = Math.max(c.vy, 5 * (1 - d / radius));
      if (c.damage(power * (1 - d / radius) + 25)) this._carBoom(c, true);
    }
  }

  _carBoom(car, quiet) {
    if (!quiet) { this.fx.burst('explosion', car.pos.clone().setY(car.pos.y + 1)); this.sound.explosion(); }
    else this.fx.burst('explosion', car.pos.clone().setY(car.pos.y + 1));
    this.onCarDestroyed?.(car);
  }

  // ---------- gangs ----------
  _goons(rand) {
    const spots = [];
    const tops = this.world.tops.filter(t => t.y > 12 && t.y < 70 && t.w > 10 && t.d > 10).sort(() => rand() - 0.5).slice(0, 13);
    for (const t of tops) spots.push({ x: t.x, z: t.z, y: t.y, roof: true });
    for (let k = 0; k < 13; k++) { // street corners
      const i = 1 + Math.floor(rand() * (N - 2)), j = 1 + Math.floor(rand() * (N - 2));
      spots.push({ x: roadAt(i) + ROAD / 2 + 2.5, z: roadAt(j) + ROAD / 2 + 2.5, y: 0.25, roof: false });
    }
    this.goons = []; this.spots = spots;
    spots.forEach((s, si) => { for (let k = 0; k < 3; k++) {
      const a = k / 3 * Math.PI * 2 + rand();
      const home = new THREE.Vector3(s.x + Math.cos(a) * 2.2, s.y, s.z + Math.sin(a) * 2.2);
      this.goons.push({ home, pos: home.clone(), vel: new THREE.Vector3(), yaw: rand() * 6.28, hp: 3, down: 0, spin: 0,
        alert: 0, cd: 1 + rand() * 2, los: false, losT: rand() * 0.5, phase: rand() * 6, spot: si });
    } });
    const n = this.goons.length;
    const mat = new THREE.MeshStandardMaterial({ roughness: 0.75, flatShading: true });
    const parts = {
      torso: boxG(0.46, 0.62, 0.26, 0, 0.31, 0), head: new THREE.IcosahedronGeometry(0.15, 1).translate(0, 0.17, 0),
      band: boxG(0.33, 0.07, 0.33, 0, 0.2, 0), leg: boxG(0.16, 0.84, 0.17, 0, -0.42, 0), arm: boxG(0.12, 0.62, 0.13, 0, -0.31, 0),
      gun: boxG(0.08, 0.34, 0.12, 0, -0.66, 0.06),
    };
    this.meshes = {};
    const cols = { torso: 0x24242a, head: 0xd9a074, band: 0xd7192e, legL: 0x3a3a50, legR: 0x3a3a50, armL: 0x24242a, armR: 0x24242a, gun: 0x0e0e0e };
    const c = new THREE.Color();
    for (const k of Object.keys(cols)) {
      const m = new THREE.InstancedMesh(parts[k.replace(/[LR]$/, '')], mat, n);
      m.castShadow = true; m.frustumCulled = false;
      const skins = [0xf1c27d, 0xc68642, 0x8d5524, 0xe0ac69];
      for (let i = 0; i < n; i++) m.setColorAt(i, c.set(k === 'head' ? skins[i % skins.length] : cols[k]));
      this.scene.add(m); this.meshes[k] = m;
    }
    this.root = new THREE.Object3D(); this.o = new THREE.Object3D(); this.m4 = new THREE.Matrix4();
  }

  get goonsLeft() { return this.goons.filter(g => g.down <= 0).length; }

  hurtGoon(g, dmg, dir, knock = 5) {
    g.hp -= dmg;
    this.fx.burst('spark', v1.set(g.pos.x, g.pos.y + 1.1, g.pos.z), 4);
    if (g.hp > 0) { g.alert = 6; return; }
    g.down = 45; g.vel.set(dir.x * knock, 4 + knock * 0.3, dir.z * knock); g.spin = 0;
    this.kills++; this.sound.thud(); this.onKill?.(g);
  }

  update(dt, player) {
    this.boomCD -= dt;
    for (const t of this.tracers) if (t.life > 0) { t.life -= dt; t.m.material.opacity = 1; if (t.life <= 0) t.m.visible = false; }
    // projectiles
    const col = this.world.col;
    this.projectiles = this.projectiles.filter(p => {
      p.life -= dt;
      if (p.kind === 'rocket') {
        if (p.target) {
          const tp = p.target.home ? v1.set(p.target.pos.x, p.target.pos.y + 1, p.target.pos.z) : v1.set(p.target.pos.x, p.target.pos.y + 0.8, p.target.pos.z);
          const sp = p.vel.length(), want = v2.subVectors(tp, p.pos).normalize().multiplyScalar(sp);
          p.vel.lerp(want, Math.min(1, 2.5 * dt)).setLength(sp);
        }
        this.fx.burst('trail', p.pos);
      } else p.vel.y -= 4 * dt;
      const step = p.vel.length() * dt, dir = v2.copy(p.vel).normalize();
      let hitAt = null;
      const w = col.raycast(p.pos, dir, step, true);
      if (w) hitAt = w.point;
      else {
        const e = this.ray(p.pos, dir, step + 1.5, player.car);
        if (e.kind === 'goon' || e.kind === 'car') hitAt = e.point;
      }
      if (hitAt || p.life <= 0 || p.pos.y < -2) {
        this.explode(hitAt || p.pos, p.radius, p.power);
        this.scene.remove(p.m);
        return false;
      }
      p.pos.addScaledVector(p.vel, dt);
      p.m.position.copy(p.pos); p.m.lookAt(v1.copy(p.pos).add(p.vel));
      return true;
    });
    // gang AI
    const target = player.pos;
    for (const g of this.goons) {
      if (g.down > 0) {
        g.down -= dt;
        if (g.vel.lengthSq() > 0.01 || g.pos.y > g.home.y + 0.05) {
          g.vel.y -= 25 * dt; g.pos.addScaledVector(g.vel, dt);
          const gr = col.groundAt(g.pos.x, g.pos.z, g.pos.y + 0.5);
          if (g.pos.y < gr) { g.pos.y = gr; g.vel.multiplyScalar(0.3); g.vel.y = 0; }
          g.spin = Math.min(1.5, g.spin + dt * 6);
        }
        if (g.down <= 0) {
          if (target && g.home.distanceTo(target) < 80) g.down = 5; // respawn out of sight
          else { g.pos.copy(g.home); g.hp = 3; g.spin = 0; g.vel.set(0, 0, 0); g.alert = 0; }
        }
        continue;
      }
      g.phase += dt;
      if (target && player.active) {
        const dx = target.x - g.pos.x, dy = target.y - (g.pos.y + 1.5), dz = target.z - g.pos.z;
        const d = Math.hypot(dx, dy, dz);
        g.losT -= dt;
        if (d < 60 && g.losT <= 0) {
          g.losT = 0.35 + Math.random() * 0.2;
          v1.set(g.pos.x, g.pos.y + 1.5, g.pos.z); v2.set(dx / d, dy / d, dz / d);
          const w = col.raycast(v1, v2, d - 1, false);
          g.los = !w;
          if (g.los) g.alert = 5;
        } else if (d >= 60) g.los = false;
        if (g.alert > 0) {
          g.alert -= dt;
          g.yaw += Math.atan2(Math.sin(Math.atan2(dx, dz) - g.yaw), Math.cos(Math.atan2(dx, dz) - g.yaw)) * Math.min(1, 8 * dt);
          g.cd -= dt;
          if (g.los && g.cd <= 0 && d < 60) {
            g.cd = 1.2 + Math.random() * 1.2;
            const gun = v1.set(g.pos.x + Math.sin(g.yaw) * 0.5 - Math.cos(g.yaw) * 0.27, g.pos.y + 1.4, g.pos.z + Math.cos(g.yaw) * 0.5 + Math.sin(g.yaw) * 0.27);
            const chance = Math.max(0.1, Math.min(0.45, 0.55 - d / 100)) * (player.speed > 14 ? 0.35 : 1);
            const hit = Math.random() < chance;
            const to = target.clone();
            if (!hit) to.add(new THREE.Vector3((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 4));
            this.tracer(gun.clone(), to, true);
            this.sound.shot(Math.max(0.08, 0.35 - d / 200));
            if (hit) player.onHit(3 + Math.random() * 3);
          }
        }
      }
    }
    this._render();
  }

  _render() {
    const r = this.root, M = this.meshes;
    this.goons.forEach((g, i) => {
      const aiming = g.alert > 0 && g.down <= 0;
      r.position.set(g.pos.x, g.pos.y + 0.9, g.pos.z);
      r.rotation.set(g.down > 0 ? -g.spin : 0, g.yaw, 0, 'YXZ');
      r.updateMatrix();
      const sway = Math.sin(g.phase * 1.5) * 0.05;
      const set = (name, x, y, z, rx, rz = 0) => {
        this.o.position.set(x, y, z); this.o.rotation.set(rx, 0, rz); this.o.updateMatrix();
        this.m4.multiplyMatrices(r.matrix, this.o.matrix); M[name].setMatrixAt(i, this.m4);
      };
      set('torso', 0, 0, 0, sway); set('head', 0, 0.64, 0, 0); set('band', 0, 0.64, 0, 0);
      set('legL', 0.11, 0, 0, 0); set('legR', -0.11, 0, 0, 0);
      set('armL', 0.29, 0.58, 0, aiming ? -1.3 : 0.1, aiming ? -0.5 : 0.1);
      set('armR', -0.29, 0.58, 0, aiming ? -1.55 : 0.15, 0);
      set('gun', -0.29, 0.58, 0, aiming ? -1.55 : 0.15, 0);
    });
    for (const k in M) M[k].instanceMatrix.needsUpdate = true;
  }
}
