// Set-piece meshes: rock tunnels, steel arch bridges and kicker ramps.
// Built for segments near the rider and released once passed.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { ROAD_HALF, roadX, roadY, SEG, segmentFeature, RAMP_LEN, RAMP_H } from './world.js';
import { THEME } from './theme.js';
import { PREMIUM, rockMaterial, patchLit } from './premium.js';

const P = (u, s, h = 0, out = new THREE.Vector3()) => out.set(roadX(s) + u, roadY(s) + h, -s);
const yaw = s => -Math.atan((roadX(s + 1) - roadX(s - 1)) / 2);

function stripeTex() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#f2c230'; g.fillRect(0, 0, 256, 64);
  g.fillStyle = '#1d1d22';
  for (let x = -64; x < 256; x += 48) { g.beginPath(); g.moveTo(x, 64); g.lineTo(x + 24, 64); g.lineTo(x + 88, 0); g.lineTo(x + 64, 0); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
function chevronTex() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#6d6259'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 4000; i++) { const v = 70 + Math.random() * 90 | 0; g.fillStyle = `rgba(${v},${v - 6},${v - 12},0.4)`; g.fillRect(Math.random() * 256, Math.random() * 256, 3, 3); }
  g.strokeStyle = '#f4efe6'; g.lineWidth = 18; g.lineJoin = 'miter';
  for (const y of [70, 170]) { g.beginPath(); g.moveTo(40, y + 50); g.lineTo(128, y - 20); g.lineTo(216, y + 50); g.stroke(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

// Portal facade: a thick concrete wall with the tunnel's arch cut out, a cornice on top
// and a darker recessed band framing the opening.
function portalGeometry(R) {
  const W = R + 5.5, top = R * 0.78 + 4.2, yb = -2, y0 = -0.4, parts = [];
  const sh = new THREE.Shape();
  sh.moveTo(-W, yb); sh.lineTo(-R, yb); sh.lineTo(-R, y0);
  for (let i = 1; i <= 24; i++) { const t = Math.PI - i / 24 * Math.PI; sh.lineTo(Math.cos(t) * R, y0 + Math.sin(t) * R * 0.78); }
  sh.lineTo(R, yb); sh.lineTo(W, yb); sh.lineTo(W * 0.92, top); sh.lineTo(-W * 0.92, top); sh.closePath();
  const face = new THREE.ExtrudeGeometry(sh, { depth: 1.6, bevelEnabled: true, bevelThickness: 0.12, bevelSize: 0.12, bevelSegments: 2, curveSegments: 4 });
  face.translate(0, 0, -0.8); parts.push(face);
  const cornice = new THREE.BoxGeometry(W * 1.95, 0.55, 2.3); cornice.translate(0, top + 0.2, 0); parts.push(cornice);
  // pilasters either side of the opening
  for (const sd of [-1, 1]) { const pl = new THREE.BoxGeometry(1.1, top - yb, 2.1); pl.translate(sd * (R + 1.3), (top + yb) / 2, 0); parts.push(pl); }
  return mergeGeometries(parts.map(p => p.index ? p.toNonIndexed() : p).map(p => { p.deleteAttribute('uv'); return p; }));
}

export class Features {
  constructor(scene, P = null) {
    this.scene = scene;
    this.live = new Map();
    this.premium = PREMIUM && !!P;
    this.mats = {
      rock: new THREE.MeshStandardMaterial({ color: THEME.rockDark, roughness: 0.95, flatShading: true, side: THREE.DoubleSide }),
      concrete: new THREE.MeshStandardMaterial({ color: '#b9b2a8', roughness: 0.85 }),
      steel: new THREE.MeshStandardMaterial({ color: THEME.bridge || '#b8452f', metalness: 0.55, roughness: 0.45 }),
      lamp: new THREE.MeshStandardMaterial({ color: '#ffd79a', emissive: '#ffb45a', emissiveIntensity: 1.4 }),
      ramp: new THREE.MeshStandardMaterial({ map: chevronTex(), roughness: 0.8 }),
      stripe: new THREE.MeshStandardMaterial({ map: stripeTex(), roughness: 0.6 }),
    };
    if (this.premium) {
      this.mats.rock = rockMaterial(P, { color: THEME.rock, roughness: 0.95, side: THREE.DoubleSide }, 2, 0.09, 'tunnel');
      this.mats.concrete = rockMaterial(P, { color: '#c9c0b4', roughness: 0.85 }, 3, 0.45, 'concrete');
      for (const k of ['steel', 'ramp', 'stripe']) patchLit(this.mats[k], 'feat-' + k);
    }
  }

  update(s) {
    const k0 = Math.floor((s - 60) / SEG), k1 = Math.floor((s + 1100) / SEG);
    for (const [k, g] of this.live) if (k < k0 || k > k1) { this.scene.remove(g); g.traverse(o => o.geometry?.dispose()); this.live.delete(k); }
    for (let k = k0; k <= k1; k++) {
      if (this.live.has(k)) continue;
      const f = segmentFeature(k);
      const g = new THREE.Group();
      if (f?.type === 'tunnel') this.tunnel(g, f);
      if (f?.type === 'bridge') this.bridge(g, f);
      if (f?.type === 'jump') this.ramp(g, f);
      this.scene.add(g); this.live.set(k, g);
      return; // one per frame
    }
  }
  clear() { for (const g of this.live.values()) { this.scene.remove(g); g.traverse(o => o.geometry?.dispose()); } this.live.clear(); }

  tunnel(g, f) {
    const R = ROAD_HALF + 2.2, cols = 18, a = f.s0 - 6, b = f.s1 + 6, step = 4;
    const rows = Math.ceil((b - a) / step) + 1;
    const pos = [], idx = [], v = new THREE.Vector3();
    for (let j = 0; j < rows; j++) {
      const s = a + j * step;
      for (let i = 0; i <= cols; i++) {
        const t = i / cols * Math.PI;
        // lumpy bored-rock profile
        const r = R + Math.sin(i * 2.3 + j * 0.7) * 0.5 + Math.sin(j * 1.9 + i) * 0.35;
        P(-Math.cos(t) * r, s, Math.sin(t) * r * 0.78 - 0.4, v);
        pos.push(v.x, v.y, v.z);
      }
    }
    for (let j = 0; j < rows - 1; j++) for (let i = 0; i < cols; i++) {
      const p0 = j * (cols + 1) + i, p1 = p0 + 1, p2 = p0 + cols + 1, p3 = p2 + 1;
      idx.push(p0, p2, p1, p1, p2, p3);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.computeVertexNormals();
    const shell = new THREE.Mesh(geo, this.mats.rock); shell.castShadow = true; shell.receiveShadow = true;
    g.add(shell);
    // concrete portals
    for (const s of [a, b]) {
      if (this.premium) {
        const portal = new THREE.Mesh(portalGeometry(R + 0.35), this.mats.concrete);
        portal.position.copy(P(0, s, 0)); portal.rotation.y = yaw(s);
        portal.castShadow = portal.receiveShadow = true; g.add(portal);
        continue;
      }
      const portal = new THREE.Mesh(new THREE.TorusGeometry(R + 0.2, 0.9, 6, 24, Math.PI), this.mats.concrete);
      portal.scale.y = 0.78; portal.position.copy(P(0, s, -0.4)); portal.rotation.y = yaw(s);
      portal.castShadow = true; g.add(portal);
    }
    // warm sodium lamps along both walls
    const lamps = new THREE.InstancedMesh(new THREE.BoxGeometry(0.25, 0.25, 1.4), this.mats.lamp, 2 * Math.ceil((b - a) / 18));
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(); let n = 0;
    for (let s = a + 9; s < b; s += 18) for (const sd of [-1, 1]) {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw(s));
      m.compose(P(sd * (R - 1.2), s, 6.2), q, new THREE.Vector3(1, 1, 1)); lamps.setMatrixAt(n++, m);
    }
    lamps.count = n; g.add(lamps);
  }

  bridge(g, f) {
    const a = f.s0 - 30, b = f.s1 + 30, W = ROAD_HALF + 1.4;
    // deck girders
    const parts = [];
    const o = new THREE.Object3D();
    for (let s = a; s < b; s += 6) {
      const box = new THREE.BoxGeometry(W * 2, 1.6, 6.3);
      // align each deck section with the road's heading and grade
      o.position.copy(P(0, s + 3, -0.84)); o.lookAt(P(0, s + 4, -0.84).addScaledVector(o.position, -1).multiplyScalar(-1).add(o.position));
      o.updateMatrix(); box.applyMatrix4(o.matrix);
      parts.push(box);
    }
    const deck = new THREE.Mesh(mergeGeometries(parts), this.mats.concrete); deck.castShadow = deck.receiveShadow = true; g.add(deck);
    // twin steel arches with hangers
    const H = 16;
    for (const sd of [-1, 1]) {
      const pts = [];
      for (let i = 0; i <= 24; i++) {
        const t = i / 24, s = f.s0 + (f.s1 - f.s0) * t;
        pts.push(P(sd * W, s, Math.sin(t * Math.PI) * H));
      }
      const arch = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, 0.45, 8), this.mats.steel);
      arch.castShadow = true; g.add(arch);
      const hangers = [];
      for (let s = f.s0 + 8; s < f.s1 - 4; s += 8) {
        const t = (s - f.s0) / (f.s1 - f.s0), h = Math.sin(t * Math.PI) * H;
        const cyl = new THREE.CylinderGeometry(0.06, 0.06, h, 5); const c = P(sd * W, s, h / 2); cyl.translate(c.x, c.y, c.z);
        hangers.push(cyl);
      }
      if (hangers.length) g.add(new THREE.Mesh(mergeGeometries(hangers), this.mats.steel));
      // abutment piers dropping into the gorge
      for (const s of [f.s0, f.s1]) {
        const pier = new THREE.Mesh(new THREE.BoxGeometry(3, 240, 5), this.mats.concrete);
        pier.position.copy(P(sd * (W - 1), s, -121)); pier.rotation.y = yaw(s); pier.castShadow = true; g.add(pier);
      }
    }
    // cross bracing over the deck at the crown
    for (let s = f.s0 + (f.s1 - f.s0) * 0.3; s <= f.s0 + (f.s1 - f.s0) * 0.71; s += (f.s1 - f.s0) * 0.2) {
      const t = (s - f.s0) / (f.s1 - f.s0), h = Math.sin(t * Math.PI) * H;
      const beam = new THREE.Mesh(new THREE.BoxGeometry(W * 2, 0.4, 0.4), this.mats.steel);
      beam.position.copy(P(0, s, h)); beam.rotation.y = yaw(s); g.add(beam);
    }
  }

  ramp(g, f) {
    const W = ROAD_HALF - 0.2, rows = 14, pos = [], uv = [], idx = [];
    const s0 = f.lip - RAMP_LEN, v = new THREE.Vector3();
    for (let j = 0; j <= rows; j++) {
      const t = j / rows, s = s0 + t * RAMP_LEN, h = RAMP_H * t * t + 0.03;
      for (const u of [-W, W]) { P(u, s, h, v); pos.push(v.x, v.y, v.z); uv.push(u < 0 ? 0 : 3, t * 2); }
    }
    // lip face down to the road
    for (const u of [-W, W]) { P(u, f.lip, 0, v); pos.push(v.x, v.y, v.z); uv.push(u < 0 ? 0 : 3, 0); }
    for (let j = 0; j < rows; j++) { const a = j * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    const top = rows * 2, bot = top + 2;
    idx.push(top, bot, top + 1, top + 1, bot, bot + 1);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx); geo.computeVertexNormals();
    const mat = this.mats.ramp.clone(); mat.side = THREE.DoubleSide;
    const ramp = new THREE.Mesh(geo, mat); ramp.castShadow = ramp.receiveShadow = true; g.add(ramp);
    // hazard-striped lip edge
    const edge = new THREE.Mesh(new THREE.BoxGeometry(W * 2, 0.35, 0.3), this.mats.stripe);
    edge.position.copy(P(0, f.lip, RAMP_H - 0.1)); edge.rotation.y = yaw(f.lip); g.add(edge);
    // side walls so it reads as a solid kicker
    for (const sd of [-1, 1]) {
      const sp = [];
      for (let j = 0; j <= rows; j++) {
        const t = j / rows, s = s0 + t * RAMP_LEN;
        P(sd * W, s, RAMP_H * t * t, v); sp.push(v.x, v.y, v.z); P(sd * W, s, 0, v); sp.push(v.x, v.y, v.z);
      }
      const si = [];
      for (let j = 0; j < rows; j++) { const a = j * 2; si.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
      const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3)); sg.setIndex(si); sg.computeVertexNormals();
      g.add(new THREE.Mesh(sg, this.mats.concrete));
    }
  }
}
