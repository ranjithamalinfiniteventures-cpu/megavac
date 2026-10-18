// The web-slinger: low-poly rig, procedural animation and traversal physics.
import * as THREE from 'three';

const UP = new THREE.Vector3(0, 1, 0);
const R = 0.42, H = 1.8, STEP = 0.6, G = 34;
const v1 = new THREE.Vector3(), v2 = new THREE.Vector3(), v3 = new THREE.Vector3(), nTmp = new THREE.Vector3();
const mTmp = new THREE.Matrix4(), qTmp = new THREE.Quaternion();
const damp = (k, dt) => 1 - Math.exp(-k * dt);

function webTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, '#d8162f'); grd.addColorStop(1, '#a80d22');
  g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
  g.strokeStyle = 'rgba(25,0,5,0.75)'; g.lineWidth = 2.2;
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * Math.PI * 2;
    g.beginPath(); g.moveTo(128, 128); g.lineTo(128 + Math.cos(a) * 200, 128 + Math.sin(a) * 200); g.stroke();
  }
  for (let r = 20; r < 200; r += 22) {
    g.beginPath();
    for (let i = 0; i <= 12; i++) {
      const a = i / 12 * Math.PI * 2, a0 = (i - 1) / 12 * Math.PI * 2;
      const x = 128 + Math.cos(a) * r, y = 128 + Math.sin(a) * r;
      if (i === 0) g.moveTo(x, y);
      else {
        const am = (a + a0) / 2, rm = r * 0.86;
        g.quadraticCurveTo(128 + Math.cos(am) * rm, 128 + Math.sin(am) * rm, x, y);
      }
    }
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

function basisQuat(up, fwdHint, out) {
  const y = v1.copy(up).normalize();
  const z = v2.copy(fwdHint).addScaledVector(y, -fwdHint.dot(y));
  if (z.lengthSq() < 1e-6) z.set(0, 0, 1).addScaledVector(y, -y.z);
  z.normalize();
  const x = v3.crossVectors(y, z);
  mTmp.makeBasis(x, y, z);
  return out.setFromRotationMatrix(mTmp);
}

export class Hero {
  constructor(scene, world, fx, sound) {
    this.scene = scene; this.world = world; this.fx = fx; this.sound = sound;
    this.pos = new THREE.Vector3(0, 0.25, 30);
    this.vel = new THREE.Vector3();
    this.lastSafe = this.pos.clone();
    this.state = 'ground';
    this.facing = Math.PI;
    this.anchor = new THREE.Vector3(); this.ropeLen = 0; this.webHand = 1; this.webT = 0;
    this.wallN = new THREE.Vector3();
    this.zipTarget = new THREE.Vector3(); this.zipN = new THREE.Vector3(); this.zipT = 0;
    this.landT = 0; this.flipT = -1; this.phase = 0; this.airJumps = 1; this.airT = 0;
    this.orient = new THREE.Quaternion();
    this.root = new THREE.Group(); scene.add(this.root);
    this.j = this._build();
    this.cur = {};
    for (const k in this.j) this.cur[k] = this.j[k].rotation.clone();
    const webMat = new THREE.MeshStandardMaterial({ color: 0xf4f6ff, emissive: 0x99aacc, emissiveIntensity: 0.4, roughness: 0.4 });
    this.web = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1, 5, 1, true).translate(0, 0.5, 0), webMat);
    this.web.visible = false; this.web.frustumCulled = false; scene.add(this.web);
    this.handPos = new THREE.Vector3();
    this.shake = 0;
  }

  _build() {
    const red = new THREE.MeshStandardMaterial({ map: webTexture(), roughness: 0.55, flatShading: true });
    const blue = new THREE.MeshStandardMaterial({ color: 0x1d3c9c, roughness: 0.5, flatShading: true });
    const black = new THREE.MeshStandardMaterial({ color: 0x0c0c10, roughness: 0.4, flatShading: true });
    const eye = new THREE.MeshStandardMaterial({ color: 0xf2f6ff, emissive: 0xaabbdd, emissiveIntensity: 0.35, roughness: 0.15 });
    const add = (parent, geo, mat, x = 0, y = 0, z = 0) => {
      const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; parent.add(m); return m;
    };
    const joint = (parent, x, y, z) => { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; };
    const limb = (r, len) => new THREE.CapsuleGeometry(r, len, 2, 7).translate(0, -(len / 2 + r * 0.6), 0);
    const taper = (w, h, d, kt, kb) => {
      const g = new THREE.BoxGeometry(w, h, d, 1, 1, 1); const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) { const k = p.getY(i) > 0 ? kt : kb; p.setX(i, p.getX(i) * k); p.setZ(i, p.getZ(i) * (k * 0.5 + 0.5)); }
      g.computeVertexNormals(); return g;
    };
    const j = {};
    j.body = joint(this.root, 0, 0.98, 0);
    add(j.body, taper(0.33, 0.17, 0.2, 1, 0.9), blue, 0, -0.02, 0);
    j.spine = joint(j.body, 0, 0.07, 0);
    add(j.spine, taper(0.3, 0.2, 0.19, 1.05, 0.95), red, 0, 0.09, 0);
    j.chest = joint(j.spine, 0, 0.2, 0);
    add(j.chest, taper(0.44, 0.32, 0.23, 1, 0.72), red, 0, 0.15, 0);
    // spider emblem
    const emb = new THREE.Group(); emb.position.set(0, 0.17, 0.112); j.chest.add(emb);
    add(emb, new THREE.SphereGeometry(0.03, 6, 4).scale(0.8, 1.4, 0.4), black);
    for (let s = -1; s <= 1; s += 2) for (let k = 0; k < 4; k++) {
      const leg = add(emb, new THREE.BoxGeometry(0.075, 0.009, 0.01), black, s * 0.04, 0.03 - k * 0.02, 0);
      leg.rotation.z = s * (0.6 - k * 0.4);
    }
    j.neck = joint(j.chest, 0, 0.32, 0);
    add(j.neck, new THREE.CylinderGeometry(0.05, 0.06, 0.08, 6), red, 0, 0.02, 0);
    const head = add(j.neck, new THREE.SphereGeometry(0.125, 9, 7).scale(1, 1.18, 1.05), red, 0, 0.13, 0);
    for (const s of [-1, 1]) {
      const rim = add(head, new THREE.SphereGeometry(0.05, 8, 6).scale(1, 0.72, 0.35), black, s * 0.048, 0.015, 0.1);
      rim.rotation.z = s * 0.55;
      const e = add(head, new THREE.SphereGeometry(0.042, 8, 6).scale(1, 0.66, 0.35), eye, s * 0.048, 0.015, 0.108);
      e.rotation.z = s * 0.55;
    }
    for (const [s, n] of [[1, 'L'], [-1, 'R']]) {
      add(j.chest, new THREE.SphereGeometry(0.075, 7, 5), red, s * 0.2, 0.26, 0);
      j['sh' + n] = joint(j.chest, s * 0.23, 0.26, 0);
      add(j['sh' + n], limb(0.058, 0.18), blue);
      j['el' + n] = joint(j['sh' + n], 0, -0.29, 0);
      add(j['el' + n], limb(0.05, 0.17), red);
      j['hd' + n] = joint(j['el' + n], 0, -0.27, 0);
      add(j['hd' + n], new THREE.BoxGeometry(0.08, 0.1, 0.065), red, 0, -0.04, 0);
      j['hp' + n] = joint(j.body, s * 0.095, -0.06, 0);
      add(j['hp' + n], limb(0.078, 0.27), blue);
      j['kn' + n] = joint(j['hp' + n], 0, -0.42, 0);
      add(j['kn' + n], limb(0.062, 0.17), blue);
      add(j['kn' + n], new THREE.CapsuleGeometry(0.066, 0.13, 2, 7).translate(0, -0.3, 0), red);
      j['an' + n] = joint(j['kn' + n], 0, -0.42, 0);
      add(j['an' + n], new THREE.BoxGeometry(0.1, 0.07, 0.22), red, 0, -0.035, 0.05);
    }
    return j;
  }

  get speed() { return this.vel.length(); }

  // ----- actions -----
  jumpOrWeb(inp) {
    if (this.state === 'ground') {
      if (this.landT > 0.15) return;
      this.vel.y = inp.sprint ? 15 : 12.5;
      this.state = 'air'; this.airT = 0; this.airJumps = 1;
      this.sound.jump();
    } else if (this.state === 'wall') {
      this.vel.copy(this.wallN).multiplyScalar(10).addScaledVector(UP, 13);
      this.state = 'air'; this.airT = 0; this.flipT = 0; this.airJumps = 1;
      this.facing = Math.atan2(this.wallN.x, this.wallN.z);
      this.sound.jump();
    } else if (this.state === 'air') {
      if (this.trySwing(inp)) return;
      if (this.airJumps > 0) {
        this.airJumps--; this.vel.y = Math.max(this.vel.y, 12); this.flipT = 0;
        this.sound.jump();
      }
    }
  }

  trySwing(inp) {
    const col = this.world.col;
    const o = v1.copy(this.pos); o.y += 1.4;
    const origin = o.clone();
    const base = new THREE.Vector3(this.vel.x, 0, this.vel.z);
    if (base.lengthSq() > 16) base.normalize().lerp(inp.camFlat, 0.5).normalize();
    else base.copy(inp.camFlat);
    let best = null, bestScore = 1e9;
    const d = new THREE.Vector3();
    for (const pd of [50, 62, 40, 72, 30, 80]) for (const yd of [0, 22, -22, 45, -45, 70, -70]) {
      const p = pd * Math.PI / 180, y = yd * Math.PI / 180;
      const cy = Math.cos(y), sy = Math.sin(y);
      d.set(base.x * cy + base.z * sy, 0, -base.x * sy + base.z * cy).multiplyScalar(Math.cos(p)); d.y = Math.sin(p);
      const hit = col.raycast(origin, d, 120, false);
      if (!hit || hit.point.y < this.pos.y + 6) continue;
      const score = Math.abs(hit.dist - 38) * 0.5 + Math.abs(yd) * 0.55 + Math.abs(pd - 55) * 0.3;
      if (score < bestScore) { bestScore = score; best = hit; }
    }
    if (!best) return false;
    this.anchor.copy(best.point);
    this.ropeLen = best.dist;
    // keep the bottom of the arc clear of the street: the rope reels in to this length
    const floor = col.groundAt(this.pos.x, this.pos.z, this.pos.y + 0.5);
    this.ropeTarget = Math.max(6, Math.min(best.dist * 0.9, this.anchor.y - floor - 3.2));
    if (this.state === 'ground') { this.pos.y += 0.3; this.vel.y = Math.max(this.vel.y, 7); }
    this.state = 'swing'; this.webT = 0; this.webHand *= -1; this.airJumps = 1; this.flipT = -1;
    this.sound.thwip();
    return true;
  }

  releaseSwing() {
    if (this.state !== 'swing') return;
    this.state = 'air'; this.airT = 0;
    const sp = this.vel.length();
    this.vel.multiplyScalar(1.08);
    if (this.vel.y > -6) this.vel.y += 7;
    if (sp > 22) this.flipT = 0;
  }

  tryZip(inp) {
    const hit = this.world.col.raycast(inp.camPos, inp.camDir, 160, true);
    if (!hit || hit.dist < 3) return false;
    this.zipN.copy(hit.normal);
    this.zipTarget.copy(hit.point).addScaledVector(hit.normal, hit.normal.y > 0.5 ? 0.05 : R + 0.05);
    if (hit.normal.y > 0.5) this.zipTarget.y = hit.point.y;
    this.anchor.copy(hit.point);
    this.state = 'zip'; this.zipT = 0; this.webT = 0; this.webHand *= -1; this.flipT = -1;
    this.sound.thwip();
    return true;
  }

  // ----- simulation -----
  update(dt, inp) {
    if (this.state === 'vehicle') return;
    if (inp.zipPressed && this.state !== 'zip') this.tryZip(inp);
    if (inp.swingPressed && this.state !== 'swing' && this.state !== 'zip') {
      if (!this.trySwing(inp) && inp.jumpPressed) this.jumpOrWeb(inp);
    } else if (inp.jumpPressed) this.jumpOrWeb(inp);
    if (this.state === 'swing' && !inp.swingHeld) this.releaseSwing();

    this.landT = Math.max(0, this.landT - dt);
    this.webT += dt;
    const steps = Math.min(10, Math.max(1, Math.ceil(this.vel.length() * dt / 0.3)));
    for (let i = 0; i < steps; i++) this._step(dt / steps, inp);
    if (this.flipT >= 0) { this.flipT += dt; if (this.flipT > 0.6) this.flipT = -1; }
    if (this.state === 'air') this.airT += dt;

    // fell in the sea: back to the last solid ground
    if (this.pos.y < -1.2) {
      this.fx.burst('splash', this.pos);
      this.sound.splash();
      this.pos.copy(this.lastSafe); this.vel.set(0, 0, 0); this.state = 'ground';
    }
    this._animate(dt, inp);
  }

  _land(g) {
    const impact = -this.vel.y;
    this.pos.y = g; this.vel.y = 0; this.state = 'ground'; this.airJumps = 1; this.flipT = -1;
    if (impact > 27) {
      this.landT = 0.55; this.vel.x *= 0.2; this.vel.z *= 0.2;
      this.fx.burst('dust', this.pos, 26); this.shake = Math.min(1, impact / 45); this.sound.land(1);
    } else if (impact > 10) { this.fx.burst('dust', this.pos, 8); this.sound.land(0.4); }
  }

  _walls(inp, onContact) {
    const col = this.world.col;
    if (!col.pushCircle(this.pos, R, this.pos.y, H, STEP, nTmp)) return;
    const vn = this.vel.x * nTmp.x + this.vel.z * nTmp.z;
    const box = col.lastBox;
    if (vn < 0) { this.vel.x -= vn * nTmp.x; this.vel.z -= vn * nTmp.z; }
    const tall = box && box.maxY - this.pos.y > 2.6;
    if (tall) onContact(nTmp, -vn);
  }

  _toWall(n) {
    this.state = 'wall'; this.wallN.copy(n); this.vel.set(0, 0, 0); this.flipT = -1;
    this.facing = Math.atan2(-n.x, -n.z);
  }

  _step(h, inp) {
    const col = this.world.col, p = this.pos, v = this.vel;
    switch (this.state) {
      case 'ground': {
        const lock = this.landT > 0.15;
        const maxS = lock ? 0 : inp.sprint ? 19 : 8.5;
        const tx = inp.move.x * maxS, tz = inp.move.z * maxS;
        let dx = tx - v.x, dz = tz - v.z;
        const dl = Math.hypot(dx, dz), a = (inp.move.lengthSq() > 0.01 ? 60 : 42) * h;
        if (dl > a) { dx *= a / dl; dz *= a / dl; }
        v.x += dx; v.z += dz; v.y = 0;
        p.x += v.x * h; p.z += v.z * h;
        this._walls(inp, (n) => { if (inp.move.dot(n) < -0.6 && !lock) this._toWall(n); });
        if (this.state !== 'ground') break;
        const g = col.groundAt(p.x, p.z, p.y);
        if (g < p.y - 0.7) { this.state = 'air'; this.airT = 0; this.airJumps = 1; }
        else { p.y = g; if (g > -0.5) this.lastSafe.copy(p); }
        break;
      }
      case 'air': {
        v.y = Math.max(v.y - G * h, -75);
        const hs = Math.hypot(v.x, v.z);
        v.x += inp.move.x * 16 * h; v.z += inp.move.z * 16 * h;
        const hs2 = Math.hypot(v.x, v.z), lim = Math.max(hs, 10);
        if (hs2 > lim) { v.x *= lim / hs2; v.z *= lim / hs2; }
        p.addScaledVector(v, h);
        this._walls(inp, (n, into) => { if (inp.move.dot(n) < -0.4 || into > 14) this._toWall(n); });
        if (this.state !== 'air') break;
        const g = col.groundAt(p.x, p.z, p.y);
        if (p.y <= g && v.y <= 0) this._land(g);
        break;
      }
      case 'swing': {
        v.y -= G * h;
        v.addScaledVector(inp.move, 18 * h);
        // steering assist: bleed off sideways drift relative to where the player is heading
        const hx = inp.move.lengthSq() > 0.01 ? inp.move.x : v.x, hz = inp.move.lengthSq() > 0.01 ? inp.move.z : v.z;
        const hl = Math.hypot(hx, hz);
        if (hl > 1e-3) {
          const dx = hx / hl, dz = hz / hl, lat = -v.x * dz + v.z * dx, k = Math.min(1, 1.8 * h);
          v.x -= -dz * lat * k; v.z -= dx * lat * k;
        }
        v.multiplyScalar(1 - 0.04 * h);
        p.addScaledVector(v, h);
        this.ropeTarget = Math.max(6, this.ropeTarget - 2.5 * h);
        if (this.ropeLen > this.ropeTarget) this.ropeLen = Math.max(this.ropeTarget, this.ropeLen - 26 * h);
        const d = v1.subVectors(p, this.anchor);
        const dist = d.length();
        if (dist > this.ropeLen) {
          d.divideScalar(dist);
          p.copy(this.anchor).addScaledVector(d, this.ropeLen);
          const vr = v.dot(d);
          if (vr > 0) v.addScaledVector(d, -vr);
        }
        if (p.y > this.anchor.y - 1.5) { this.releaseSwing(); break; }
        this._walls(inp, (n, into) => { if (into > 16 || (into > 4 && inp.move.dot(n) < -0.6)) this._toWall(n); });
        if (this.state !== 'swing') break;
        const g = col.groundAt(p.x, p.z, p.y);
        if (p.y <= g) { this._land(g); }
        break;
      }
      case 'wall': {
        const n = this.wallN;
        const rx = n.z, rz = -n.x; // climber's right while facing the wall
        const sp = inp.sprint ? 13 : 7.5;
        v.set(rx * inp.raw.r * sp, inp.raw.f * sp, rz * inp.raw.r * sp);
        p.addScaledVector(v, h);
        const back = v2.copy(n).negate();
        const chest = col.raycast(v3.set(p.x, p.y + 1.3, p.z), back, R + 1.2, false);
        if (!chest) {
          const feet = col.raycast(v3.set(p.x, p.y + 0.15, p.z), back, R + 1.2, false);
          this.state = 'air'; this.airT = 0;
          if (feet && inp.raw.f >= 0) { // pulled over the ledge
            v.copy(back).multiplyScalar(5); v.y = 9.5; this.flipT = 0;
          } else v.set(0, 0, 0);
          break;
        }
        if (Math.abs(chest.normal.y) < 0.5) n.copy(chest.normal);
        p.x = chest.point.x + n.x * 0.3; p.z = chest.point.z + n.z * 0.3;
        this.facing = Math.atan2(-n.x, -n.z);
        const g = col.groundAt(p.x + n.x * 0.3, p.z + n.z * 0.3, p.y);
        if (p.y <= g) { p.y = g; if (inp.raw.f < 0) { this.state = 'ground'; v.set(0, 0, 0); } }
        break;
      }
      case 'zip': {
        this.zipT += h;
        const d = v1.subVectors(this.zipTarget, p);
        const dist = d.length();
        const sp = Math.min(60, 20 + this.zipT * 140);
        if (dist < sp * h + 0.3 || this.zipT > 3.5) {
          p.copy(this.zipTarget);
          if (this.zipN.y > 0.5) { v.set(0, 0, 0); this.state = 'ground'; this.landT = 0.3; this.fx.burst('dust', p, 10); this.sound.land(0.6); }
          else if (Math.abs(this.zipN.y) < 0.5) this._toWall(this.zipN);
          else { this.state = 'air'; v.set(0, 0, 0); }
          break;
        }
        v.copy(d).multiplyScalar(sp / dist);
        p.addScaledVector(v, h);
        break;
      }
    }
  }

  // ----- animation -----
  _animate(dt, inp) {
    const j = this.j, s = this.state, t = performance.now() / 1000;
    const hs = Math.hypot(this.vel.x, this.vel.z);
    const P = {}; // joint -> [x,y,z]
    for (const k in j) P[k] = [0, 0, 0];
    let bodyY = 0.98, k = 16;
    const targetQ = qTmp;
    if (hs > 0.6 && (s === 'ground' || s === 'air')) this.facing = Math.atan2(this.vel.x, this.vel.z);

    if (s === 'ground') {
      if (this.landT > 0) {
        // superhero landing
        bodyY = 0.52;
        P.spine = [0.5, 0, 0]; P.chest = [0.25, 0, 0]; P.neck = [-0.6, 0, 0];
        P.hpL = [-1.5, 0, 0.15]; P.knL = [1.4, 0, 0]; P.anL = [0.1, 0, 0];
        P.hpR = [-0.2, 0, -0.25]; P.knR = [2.3, 0, 0]; P.anR = [-0.6, 0, 0];
        P.shR = [-0.9, 0, -0.25]; P.elR = [-0.2, 0, 0];
        P.shL = [0.4, 0, 1.0]; P.elL = [-0.4, 0, 0];
        k = 22;
      } else if (hs > 0.5) {
        const sprint = Math.min(1, Math.max(0, (hs - 8) / 10));
        this.phase += dt * (5 + hs * 0.75);
        const ph = this.phase, sn = Math.sin(ph), cs = Math.cos(ph);
        const a = Math.min(1, hs / 7) * (1 + sprint * 0.35);
        bodyY = 0.95 - sprint * 0.06 + Math.abs(cs) * 0.07 * a;
        P.body = [0.08 + sprint * 0.35, sn * 0.12, 0];
        P.spine = [0.06 + sprint * 0.12, -sn * 0.18, 0]; P.neck = [-0.1 - sprint * 0.4, sn * 0.1, 0];
        P.hpL = [-sn * 0.95 * a, 0, 0.03]; P.hpR = [sn * 0.95 * a, 0, -0.03];
        P.knL = [(0.25 + Math.max(0, cs) * 1.5) * a, 0, 0]; P.knR = [(0.25 + Math.max(0, -cs) * 1.5) * a, 0, 0];
        P.anL = [-0.25 * sn * a, 0, 0]; P.anR = [0.25 * sn * a, 0, 0];
        if (sprint > 0.5) { // ninja run: arms swept back
          P.shL = [0.9, 0, 0.35]; P.shR = [0.9, 0, -0.35]; P.elL = [-0.3, 0, 0]; P.elR = [-0.3, 0, 0];
        } else {
          P.shL = [sn * 0.85 * a, 0, 0.12]; P.shR = [-sn * 0.85 * a, 0, -0.12];
          P.elL = [-0.5 - Math.max(0, sn) * 0.7, 0, 0]; P.elR = [-0.5 - Math.max(0, -sn) * 0.7, 0, 0];
        }
        k = 24;
      } else {
        const b = Math.sin(t * 2.2);
        bodyY = 0.97 + b * 0.008;
        P.spine = [0.02 + b * 0.015, 0, 0]; P.neck = [-0.03, Math.sin(t * 0.5) * 0.25, 0];
        P.shL = [0.05, 0, 0.16]; P.shR = [0.05, 0, -0.16]; P.elL = [-0.25, 0, 0]; P.elR = [-0.25, 0, 0];
        P.hpL = [0, 0, 0.06]; P.hpR = [0, 0, -0.06]; P.knL = [0.06, 0, 0]; P.knR = [0.06, 0, 0];
      }
      targetQ.setFromEuler(new THREE.Euler(0, this.facing, 0, 'YXZ'));
    } else if (s === 'air') {
      const fall = Math.min(1, Math.max(0, -this.vel.y / 25));
      const tuck = this.flipT >= 0 ? 1 : Math.max(0, 1 - this.airT * 3);
      P.hpL = [-1.2 * tuck - 0.25 * (1 - tuck), 0, 0.1 + fall * 0.35]; P.hpR = [-0.6 * tuck + 0.3 * (1 - tuck), 0, -0.1 - fall * 0.35];
      P.knL = [1.9 * tuck + 0.6 * (1 - tuck), 0, 0]; P.knR = [1.5 * tuck + 0.9 * (1 - tuck), 0, 0];
      P.shL = [-0.4 * tuck, 0, 0.6 + fall * 0.9]; P.shR = [-0.4 * tuck, 0, -0.6 - fall * 0.9];
      P.elL = [-1.2 * tuck - 0.3, 0, 0]; P.elR = [-1.2 * tuck - 0.3, 0, 0];
      P.spine = [0.4 * tuck + fall * 0.2, 0, 0]; P.neck = [-0.3 * fall, 0, 0];
      const pitch = fall * 0.5;
      targetQ.setFromEuler(new THREE.Euler(pitch, this.facing, 0, 'YXZ'));
      k = 12;
    } else if (s === 'swing') {
      const up = v1.subVectors(this.anchor, this.pos).normalize();
      const fwd = v2.copy(this.vel);
      if (fwd.lengthSq() < 1) fwd.set(Math.sin(this.facing), 0, Math.cos(this.facing));
      basisQuat(up, fwd, targetQ);
      this.facing = Math.atan2(this.vel.x, this.vel.z);
      const swingPh = Math.max(-1, Math.min(1, this.vel.y / 20));
      const L = this.webHand > 0;
      P[L ? 'shL' : 'shR'] = [-0.2, 0, L ? 2.95 : -2.95]; P[L ? 'elL' : 'elR'] = [0, 0, 0];
      P[L ? 'shR' : 'shL'] = [0.5, 0, L ? -0.9 : 0.9]; P[L ? 'elR' : 'elL'] = [-0.9, 0, 0];
      P.hpL = [0.35 - swingPh * 0.6, 0, 0.05]; P.hpR = [0.2 - swingPh * 0.9, 0, -0.05];
      P.knL = [0.5 + Math.max(0, swingPh) * 0.8, 0, 0]; P.knR = [0.9 + Math.max(0, swingPh) * 0.6, 0, 0];
      P.spine = [-0.15 + swingPh * 0.25, 0, 0]; P.neck = [-0.2, 0, 0];
      k = 10;
    } else if (s === 'wall') {
      const climbing = Math.abs(inp.raw.f) + Math.abs(inp.raw.r) > 0.1;
      if (climbing) this.phase += dt * (inp.sprint ? 13 : 8);
      const sn = Math.sin(this.phase);
      bodyY = 0.9;
      P.body = [0.12, 0, 0];
      P.shL = [-2.5 + sn * 0.55, 0, 0.5]; P.shR = [-2.5 - sn * 0.55, 0, -0.5];
      P.elL = [-0.9 - Math.max(0, -sn) * 0.6, 0, 0]; P.elR = [-0.9 - Math.max(0, sn) * 0.6, 0, 0];
      P.hpL = [-1.2 - sn * 0.45, 0, 0.55]; P.hpR = [-1.2 + sn * 0.45, 0, -0.55];
      P.knL = [1.8, 0, 0]; P.knR = [1.8, 0, 0];
      P.neck = [-0.5, 0, 0];
      targetQ.setFromEuler(new THREE.Euler(0, this.facing, 0, 'YXZ'));
      k = 18;
    } else if (s === 'zip') {
      const dir = v1.subVectors(this.zipTarget, this.pos).normalize();
      basisQuat(dir, new THREE.Vector3(0, -1, 0).addScaledVector(dir, 0.01), targetQ);
      const L = this.webHand > 0;
      P[L ? 'shL' : 'shR'] = [0, 0, L ? 3.0 : -3.0];
      P[L ? 'shR' : 'shL'] = [0.6, 0, L ? -0.4 : 0.4]; P[L ? 'elR' : 'elL'] = [-0.4, 0, 0];
      P.hpL = [0.2, 0, 0.05]; P.hpR = [0.35, 0, -0.05]; P.knL = [0.4, 0, 0]; P.knR = [0.8, 0, 0];
      k = 14;
    }

    // smooth joint blending
    const f = damp(k, dt);
    for (const name in j) {
      const c = this.cur[name], tgt = P[name];
      c.x += (tgt[0] - c.x) * f; c.y += (tgt[1] - c.y) * f; c.z += (tgt[2] - c.z) * f;
      j[name].rotation.set(c.x, c.y, c.z);
    }
    if (this.flipT >= 0) j.body.rotation.x += Math.min(1, this.flipT / 0.55) * Math.PI * 2;
    j.body.position.y += (bodyY - j.body.position.y) * damp(18, dt);

    this.orient.slerp(targetQ, damp(s === 'swing' ? 8 : 14, dt));
    this.root.quaternion.copy(this.orient);
    this.root.position.copy(this.pos);

    // web line
    this.root.updateMatrixWorld(true);
    const showWeb = s === 'swing' || s === 'zip';
    this.web.visible = showWeb;
    if (showWeb) {
      j[this.webHand > 0 ? 'hdL' : 'hdR'].getWorldPosition(this.handPos);
      const d = v1.subVectors(this.anchor, this.handPos);
      const len = d.length();
      const grow = Math.min(1, this.webT / 0.07);
      this.web.position.copy(this.handPos);
      this.web.quaternion.setFromUnitVectors(UP, d.divideScalar(len));
      this.web.scale.set(1, len * grow, 1);
    }
  }

  setVisible(b) { this.root.visible = b; if (!b) this.web.visible = false; }
}
