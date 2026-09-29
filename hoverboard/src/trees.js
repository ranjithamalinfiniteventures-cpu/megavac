// Tree geometry for every track. Each kind is one merged BufferGeometry with vertex colours
// (no textures), instanced thousands of times by chunks.js. `treeKinds()` returns
//   [kindA, kindB, mixOfB, kindA_far, kindB_far]
// kindA/kindB are the near LODs (used within ~110 m of the rider), *_far are the cheap LODs.
// Materials (chunks.js) add wind, backlit leaves and cloud shadows; geometry only needs
// good forms, vertex colours (AO from trunk to tips), and rounded normals for foliage.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { fbm } from './world.js';
import { PREMIUM, roundNormals } from './premium.js';
import { THEME } from './theme.js';

const col = hex => new THREE.Color(hex);
function paint(g, c) {
  const geo = g.index ? g.toNonIndexed() : g;
  const n = geo.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3));
  return geo;
}
// Pine / spruce: stacked star-shaped branch skirts with drooping tips, darker toward
// the trunk and lighter on sunlit tips; optional snow load on upward faces.
function pineGeometry(opt = {}) {
  const { tiers = 7, height = 9, width = 2.6, snow = false, seed = 1 } = opt;
  const parts = [paint(new THREE.CylinderGeometry(0.14, 0.3, height * 0.35, 6).translate(0, height * 0.17, 0), col(THEME.trunk))];
  const dark = col(THEME.pine), light = col(THEME.pineLight), snowC = col('#f2f6fb'), c = new THREE.Color();
  const rnd = (k) => { const x = Math.sin(k * 91.7 + seed * 13.1) * 43758.5; return x - Math.floor(x); };
  for (let i = 0; i < tiers; i++) {
    const t = i / (tiers - 1);
    const r = width * (1 - t * 0.85) * (0.9 + rnd(i) * 0.2);
    const y0 = height * (0.2 + t * 0.66), apex = y0 + height * 0.2 * (1 - t * 0.4);
    const N = 9 + (i % 2), pos = [], cols = [];
    const tipY = [], tip = [], notch = [];
    for (let k = 0; k < N; k++) {
      const a = (k + rnd(i * 10 + k) * 0.4) / N * Math.PI * 2 + i * 0.7;
      const rr = r * (0.85 + rnd(i * 20 + k) * 0.3);
      tip.push([Math.cos(a) * rr, y0 - rr * 0.35, Math.sin(a) * rr]);       // droop
      const a2 = a + Math.PI / N;
      notch.push([Math.cos(a2) * rr * 0.55, y0 + rr * 0.05, Math.sin(a2) * rr * 0.55]);
    }
    const tri = (A, B, C, tone) => {
      pos.push(...A, ...B, ...C);
      // snow sits on faces that point up
      const ux = B[0] - A[0], uy = B[1] - A[1], uz = B[2] - A[2], vx = C[0] - A[0], vy = C[1] - A[1], vz = C[2] - A[2];
      const ny = Math.abs(uz * vx - ux * vz) / (Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx) || 1);
      c.copy(dark).lerp(light, tone);
      if (snow && ny > 0.55 && rnd(pos.length) > 0.25) c.lerp(snowC, 0.85);
      for (let q = 0; q < 3; q++) cols.push(c.r, c.g, c.b);
    };
    const A = [0, apex, 0], U = [0, y0 - r * 0.25, 0];
    for (let k = 0; k < N; k++) {
      const T = tip[k], Nn = notch[k], T2 = tip[(k + 1) % N];
      const tone = 0.15 + t * 0.35 + rnd(i * 30 + k) * 0.25;
      tri(A, Nn, T, tone + 0.15); tri(A, T2, Nn, tone + 0.05);
      tri(U, T, Nn, tone * 0.35); tri(U, Nn, T2, tone * 0.3);           // dark underside
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
    g.computeVertexNormals();
    if (PREMIUM) roundNormals(g, new THREE.Vector3(0, y0 - r * 0.2, 0), new THREE.Vector3(0, height * 0.55, 0), 0.3);
    parts.push(g);
  }
  return mergeGeometries(parts);
}
// Leaf clump: a noise-displaced icosphere so the silhouette reads as foliage, not a gem.
function lumpy(r, seed, detail = 1) {
  const g = new THREE.IcosahedronGeometry(r, detail);
  if (!PREMIUM) return g;
  const p = g.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const k = 1 + fbm(v.x * 1.7 / r + seed * 3.1, v.y * 1.7 / r + v.z * 1.3 / r, 2) * 0.35;
    p.setXYZ(i, v.x * k, v.y * k, v.z * k);
  }
  return g;
}
// Aspen / birch: slender pale trunk with dark scars, crown of faceted leaf clumps.
function aspenGeometry(lod = 0) {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.1, 0.2, 7, 6, 6).translate(0, 3.5, 0).toNonIndexed();
  const tp = trunk.attributes.position, tc = new Float32Array(tp.count * 3), bark = col('#e6e0d6'), scar = col('#3a3330'), c = new THREE.Color();
  for (let v = 0; v < tp.count; v += 3) {
    c.copy(Math.sin(tp.getY(v) * 7.3 + v) > 0.75 ? scar : bark);
    for (let k = 0; k < 3; k++) { tc[(v + k) * 3] = c.r; tc[(v + k) * 3 + 1] = c.g; tc[(v + k) * 3 + 2] = c.b; }
  }
  trunk.setAttribute('color', new THREE.BufferAttribute(tc, 3)); parts.push(trunk);
  const leafA = col(THEME.aspen || '#e0a83a'), leafB = col(THEME.aspenDark || '#b8752a');
  const clumps = [[0, 7.4, 0, 1.3], [0.8, 6.6, 0.4, 1.0], [-0.7, 6.4, -0.4, 1.05], [0.3, 5.6, -0.8, 0.9], [-0.4, 8.3, 0.3, 0.9], [0.6, 5.7, 0.8, 0.85], [-0.8, 5.5, 0.5, 0.8], [0.1, 9.0, -0.2, 0.7]];
  const extra = PREMIUM ? [[0.9, 7.6, -0.5, 0.8], [-0.9, 7.3, 0.7, 0.75], [0.5, 8.6, 0.6, 0.7], [-0.2, 4.9, 0.1, 0.7]] : [];
  [...clumps, ...extra].forEach(([x, y, z, r], i) => {
    const b = lumpy(r, i, lod ? 0 : 1).scale(1, 1.2, 1).translate(x, y, z).toNonIndexed();
    if (PREMIUM) roundNormals(b, new THREE.Vector3(x, y, z), new THREE.Vector3(0, 7.2, 0), 0.4);
    const bp = b.attributes.position, bc = new Float32Array(bp.count * 3);
    for (let v = 0; v < bp.count; v += 3) {
      const up = (bp.getY(v) + bp.getY(v + 1) + bp.getY(v + 2)) / 3 - y;
      for (let k = 0; k < 3; k++) {
        // premium: per-vertex tone (smooth), darker toward the crown's core
        const t = PREMIUM ? 0.35 + (bp.getY(v + k) - y) / r * 0.45 + Math.hypot(bp.getX(v + k), bp.getZ(v + k)) * 0.12 : 0.45 + up / r * 0.5 + Math.sin(v * 1.7 + i) * 0.1;
        c.copy(leafB).lerp(leafA, t);
        bc[(v + k) * 3] = c.r; bc[(v + k) * 3 + 1] = c.g; bc[(v + k) * 3 + 2] = c.b;
      }
    }
    b.setAttribute('color', new THREE.BufferAttribute(bc, 3)); parts.push(b);
  });
  return mergeGeometries(parts);
}
// Juniper: short twisted trunk under wide, flattened, dark clumps.
function juniperGeometry() {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.15, 0.35, 1.8, 5).translate(0, 0.9, 0); trunk.rotateZ(0.2);
  parts.push(paint(trunk, col(THEME.trunk)));
  const dark = col(THEME.pine), light = col(THEME.pineLight), c = new THREE.Color();
  [[0, 2.2, 0, 1.6], [1.1, 1.8, 0.3, 1.1], [-1.0, 1.9, -0.4, 1.2], [0.2, 2.9, -0.2, 1.0], [-0.3, 1.6, 1.0, 0.9]].forEach(([x, y, z, r], i) => {
    const b = (PREMIUM ? lumpy(r, i + 20, 1) : new THREE.IcosahedronGeometry(r, 0)).scale(1.2, 0.7, 1.2).translate(x, y, z).toNonIndexed();
    if (PREMIUM) roundNormals(b, new THREE.Vector3(x, y, z), new THREE.Vector3(0, 2.2, 0), 0.4);
    const bp = b.attributes.position, bc = new Float32Array(bp.count * 3);
    for (let v = 0; v < bp.count; v += 3) {
      const up = (bp.getY(v) + bp.getY(v + 1) + bp.getY(v + 2)) / 3 - y;
      for (let k = 0; k < 3; k++) {
        const t = PREMIUM ? 0.25 + (bp.getY(v + k) - y) / r * 0.55 + Math.hypot(bp.getX(v + k), bp.getZ(v + k)) * 0.08 : 0.3 + up / r * 0.6 + Math.sin(v + i) * 0.1;
        c.copy(dark).lerp(light, t);
        bc[(v + k) * 3] = c.r; bc[(v + k) * 3 + 1] = c.g; bc[(v + k) * 3 + 2] = c.b;
      }
    }
    b.setAttribute('color', new THREE.BufferAttribute(bc, 3)); parts.push(b);
  });
  return mergeGeometries(parts);
}
// Premium pine: each tier is a ring of ridged fronds (centre -> raised mid-rib -> drooping tip)
// with vertex-colour occlusion from the trunk out to sunlit tips, so it reads as a soft volume.
function pinePremium(opt = {}) {
  const { tiers = 10, height = 10, width = 2.8, snow = false, seed = 1, lite = false } = opt;
  const parts = [paint(new THREE.CylinderGeometry(0.12, 0.32, height * 0.4, lite ? 5 : 7).translate(0, height * 0.2, 0), col(THEME.trunk))];
  const dark = col(THEME.pine).multiplyScalar(0.55), mid = col(THEME.pine), light = col(THEME.pineLight), snowC = col('#f2f6fb'), c = new THREE.Color();
  const rnd = (k) => { const x = Math.sin(k * 91.7 + seed * 13.1) * 43758.5; return x - Math.floor(x); };
  const tone = (t, out) => (t < 0.5 ? out.copy(dark).lerp(mid, t * 2) : out.copy(mid).lerp(light, (t - 0.5) * 2));
  for (let i = 0; i < tiers; i++) {
    const t = i / (tiers - 1);
    const r = width * Math.pow(1 - t * 0.9, 0.9) * (0.9 + rnd(i) * 0.2);
    const y0 = height * (0.16 + t * 0.72), apex = y0 + height * 0.16 * (1 - t * 0.5);
    const N = lite ? 7 : 10 + (i % 2), pos = [], cols = [], tones = [];
    const pts = [];
    for (let k = 0; k < N; k++) {
      const a = (k + rnd(i * 10 + k) * 0.35) / N * Math.PI * 2 + i * 0.9;
      const rr = r * (0.8 + rnd(i * 20 + k) * 0.4), droop = 0.3 + rnd(i * 40 + k) * 0.15;
      const a2 = a + Math.PI / N;
      pts.push({
        T: [Math.cos(a) * rr, y0 - rr * droop, Math.sin(a) * rr],
        M: [Math.cos(a) * rr * 0.55, y0 + rr * 0.06, Math.sin(a) * rr * 0.55],
        Nn: [Math.cos(a2) * rr * 0.42, y0 - rr * 0.05, Math.sin(a2) * rr * 0.42],
        tip: 0.7 + rnd(i * 50 + k) * 0.22 + t * 0.12,
      });
    }
    const A = [0, apex, 0], Ub = [0, y0 - r * 0.3, 0];
    const tri = (P, Q, R, tp, tq, tr) => { pos.push(...P, ...Q, ...R); tones.push(tp, tq, tr); };
    for (let k = 0; k < N; k++) {
      const { T, M, tip } = pts[k], Np = pts[(k + N - 1) % N].Nn, Nx = pts[k].Nn;
      tri(A, Np, M, 0.12, 0.3, 0.55); tri(Np, T, M, 0.3, tip, 0.55);
      tri(A, M, Nx, 0.12, 0.55, 0.3); tri(M, T, Nx, 0.55, tip, 0.3);
      if (!lite) { tri(Ub, T, Np, 0.0, tip * 0.45, 0.1); tri(Ub, Nx, T, 0.0, 0.1, tip * 0.45); }    // shaded underside
    }
    for (let v = 0; v < tones.length; v++) {
      tone(Math.min(1, tones[v]), c);
      if (snow && tones[v] > 0.4 && rnd(v + i * 7) > 0.3) c.lerp(snowC, 0.8);
      cols.push(c.r, c.g, c.b);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
    roundNormals(g, new THREE.Vector3(0, y0 - r * 0.25, 0), new THREE.Vector3(0, height * 0.5, 0), 0.35);
    parts.push(g);
  }
  return mergeGeometries(parts);
}
export function treeKinds() {
  if (THEME.id === 'coast') {
    const j = juniperGeometry();   // wind-sculpted coastal pines among the stone pines
    return PREMIUM ? [pinePremium({ seed: 7, tiers: 8, height: 9, width: 3.1 }), j, 0.45, pinePremium({ seed: 7, tiers: 5, width: 3.2, lite: true }), j] : [pineGeometry({ seed: 7 }), j, 0.45];
  }
  if (THEME.id === 'canyon' && PREMIUM) { const j = juniperGeometry(); return [j, pinePremium({ tiers: 6, height: 6, width: 2.3, seed: 3 }), 0.2, j, pinePremium({ tiers: 4, height: 6, width: 2.4, seed: 3, lite: true })]; }
  if (THEME.id === 'alpine' && PREMIUM) return [pinePremium({ snow: true, seed: 1 }), pinePremium({ snow: true, tiers: 12, height: 12.5, width: 2.5, seed: 5 }), 0.35, pinePremium({ snow: true, seed: 1, lite: true, tiers: 5 }), pinePremium({ snow: true, seed: 5, lite: true, tiers: 6, height: 12.5, width: 2.6 })];
  if (THEME.id === 'canyon') return [juniperGeometry(), pineGeometry({ tiers: 5, height: 6, width: 2.2, seed: 3 }), 0.2];
  if (THEME.id === 'alpine') return [pineGeometry({ snow: true, seed: 1 }), pineGeometry({ snow: true, tiers: 9, height: 12, width: 2.4, seed: 5 }), 0.35];
  if (PREMIUM) return [pinePremium({ seed: 1 }), aspenGeometry(), 0.3, pinePremium({ seed: 1, tiers: 5, width: 3.0, lite: true }), aspenGeometry(1)];
  return [pineGeometry({ seed: 1 }), aspenGeometry(), 0.3];
}
