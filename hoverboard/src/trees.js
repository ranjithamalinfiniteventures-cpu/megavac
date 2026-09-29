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

// Tapered tube along a polyline (smooth radial normals, per-quad colour), non-indexed.
function tube(path, radii, radial, colorFn) {
  const pos = [], nor = [], cols = [], ring = [], c = new THREE.Color();
  const T = new THREE.Vector3(), U = new THREE.Vector3(), W = new THREE.Vector3(), R = new THREE.Vector3();
  path.forEach((p, i) => {
    const a = path[Math.max(0, i - 1)], b = path[Math.min(path.length - 1, i + 1)];
    T.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]).normalize();
    R.set(Math.abs(T.y) > 0.9 ? 1 : 0, Math.abs(T.y) > 0.9 ? 0 : 1, 0);
    U.crossVectors(T, R).normalize(); W.crossVectors(T, U).normalize();
    const vs = [];
    for (let k = 0; k <= radial; k++) {
      const ph = (k % radial) / radial * Math.PI * 2, dx = U.x * Math.cos(ph) + W.x * Math.sin(ph), dy = U.y * Math.cos(ph) + W.y * Math.sin(ph), dz = U.z * Math.cos(ph) + W.z * Math.sin(ph);
      vs.push({ p: [p[0] + dx * radii[i], p[1] + dy * radii[i], p[2] + dz * radii[i]], n: [dx, dy, dz] });
    }
    ring.push(vs);
  });
  for (let i = 0; i < path.length - 1; i++) for (let k = 0; k < radial; k++) {
    const q = [ring[i][k], ring[i][k + 1], ring[i + 1][k + 1], ring[i][k], ring[i + 1][k + 1], ring[i + 1][k]];
    colorFn(i, k, c);
    q.forEach(v => { pos.push(...v.p); nor.push(...v.n); cols.push(c.r, c.g, c.b); });
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  return g;
}
const hash = (k, seed) => { const x = Math.sin(k * 91.7 + seed * 13.1) * 43758.5; return x - Math.floor(x); };
// Leaf lump: ragged icosphere (detail 0 = 20 tris, 1 = 80 tris), rounded normals, lit-top / shaded-underside colours.
function leafClump(x, y, z, r, seed, base, lit, detail = 0) {
  const g = new THREE.IcosahedronGeometry(1, detail);
  const p = g.attributes.position, v = new THREE.Vector3(), bias = new Map();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const key = v.x.toFixed(3) + v.y.toFixed(3) + v.z.toFixed(3);
    if (!bias.has(key)) bias.set(key, 0.88 + hash(seed * 7 + bias.size, 5) * 0.26);
    v.multiplyScalar(bias.get(key));
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.rotateX(hash(seed, 1) * 6); g.rotateY(hash(seed, 2) * 6); g.scale(r * 1.08, r * 0.86, r * 1.08).translate(x, y, z);
  roundNormals(g, new THREE.Vector3(x, y - r * 0.1, z), new THREE.Vector3(0, y + 2.5, 0), 0.3);
  const cs = new Float32Array(p.count * 3), c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    const k = Math.max(-1, Math.min(1, (p.getY(i) - y) / (r * 0.86)));
    const sh = 0.62 + 0.38 * (k * 0.5 + 0.5);
    const core = 0.84 + 0.16 * Math.min(1, Math.hypot(p.getX(i), p.getZ(i)) / 1.6);
    c.copy(base).lerp(lit, Math.max(0, k) * 0.45).multiplyScalar(sh * core * (0.95 + hash(Math.floor(i / 3) + seed * 17, 9) * 0.1));
    cs[i * 3] = c.r; cs[i * 3 + 1] = c.g; cs[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(cs, 3));
  return g;
}
// Aspen: slender curved pale trunk with eye scars, branches that fork in a Y, and at each fork tip a
// group of 3 overlapping soft leaf lumps (yellow -> orange -> warm red, lit tops, shaded undersides).
function aspenGeometry(lod = 0) {
  const parts = [], H = 8.6, far = lod > 0;
  const bark = col('#e8e1d3'), scar = col('#2f2a27'), greyB = col('#b9b1a4');
  const tx = t => 0.28 * Math.sin(t * 2.3), tz = t => 0.16 * Math.sin(t * 3.1 + 1);
  const nr = far ? 4 : 6, tpath = [], trad = [];
  for (let i = 0; i <= nr; i++) { const t = i / nr; tpath.push([tx(t), -0.1 + t * H, tz(t)]); trad.push(0.27 * Math.pow(1 - t, 0.85) + 0.045); }
  parts.push(tube(tpath, trad, far ? 5 : 6, (i, k, out) => {
    const h = hash(i * 13 + k * 5, 11), band = hash(i, 12) > 0.55;
    out.copy(bark);
    if (h > 0.72 || (band && h > 0.45 && i > 0)) out.copy(scar).lerp(bark, hash(i + k, 13) * 0.3);
    else out.multiplyScalar(0.86 + hash(i * 3 + k, 14) * 0.16);
  }));
  const groups = [], nb = far ? 3 : 5;
  for (let j = 0; j < nb; j++) {
    const ty = 0.38 + (j / (nb - 1)) * 0.36 + (hash(j, 21) - 0.5) * 0.05, a = j * 2.39996 + hash(j, 22) * 0.6;
    const sx = tx(ty), sy = -0.1 + ty * H, sz = tz(ty), out = 0.9 + hash(j, 23) * 0.6 + (1 - ty) * 0.7, lift = 0.4 + ty * 0.8;
    const dx = Math.cos(a), dz = Math.sin(a);
    const P0 = [sx, sy, sz], P1 = [sx + dx * out * 0.35, sy + lift * 0.25, sz + dz * out * 0.35], P2 = [sx + dx * out * 0.65, sy + lift * 0.6, sz + dz * out * 0.65];
    parts.push(tube([P0, P1, P2], [0.1 - ty * 0.04, 0.065, 0.045], far ? 3 : 4, (i, k, o) => o.copy(i ? greyB : bark).multiplyScalar(0.8 + hash(k + i, 25) * 0.2)));
    for (let f = 0; f < 2; f++) {
      const fa = a + (f ? 0.6 : -0.6) + (hash(j * 2 + f, 26) - 0.5) * 0.3, fl = 0.8 + hash(j * 2 + f, 27) * 0.5, fx = Math.cos(fa), fz = Math.sin(fa);
      const droop = (j === 0 && f === 0) ? -0.5 : 0;   // one branch hangs lower
      const E = [P2[0] + fx * fl, P2[1] + 0.55 * fl + droop, P2[2] + fz * fl];
      const Mm = [P2[0] + fx * fl * 0.5, P2[1] + 0.2 * fl + droop * 0.3, P2[2] + fz * fl * 0.5];
      parts.push(tube([P2, Mm, E], [0.045, 0.03, 0.012], 3, (i, k, o) => o.copy(greyB).multiplyScalar(0.85)));
      groups.push({ p: E, r: 0.85 + hash(j * 2 + f, 28) * 0.25 });
    }
  }
  groups.push({ p: [tx(1), H + 0.15, tz(1)], r: 0.95 });
  if (!far) groups.push({ p: [tx(0.55) + 0.45, 5.0, tz(0.55) + 0.3], r: 0.8 });
  const yellow = col('#f7d04a'), leafA = col(THEME.aspen || '#e0a83a'), leafB = col(THEME.aspenDark || '#b8752a'), red = col('#b8492b'), lit = col('#ffe58a'), base = new THREE.Color();
  groups.forEach((gr, gi) => {
    
    const s = gi * 5 + 1, hh = Math.max(0, Math.min(1, (gr.p[1] - 3.5) / 6));
    base.copy(leafB).lerp(leafA, Math.max(0, Math.min(1, 0.25 + hh * 0.6 + (hash(s, 34) - 0.5) * 0.5)));
    const q = hash(s, 35); if (q > 0.86) base.lerp(red, 0.6); else if (q < 0.3) base.lerp(yellow, 0.7);
    if (far) { parts.push(leafClump(gr.p[0], gr.p[1], gr.p[2], gr.r * 1.45, s, base, lit, 0)); return; }
    parts.push(leafClump(gr.p[0], gr.p[1], gr.p[2], gr.r, s, base, lit, 1));
    for (let m = 0; m < 2; m++) {
      const ang = hash(s + m, 31) * 6.283, off = gr.r * (0.55 + hash(s + m, 32) * 0.3), rr = gr.r * (0.6 + hash(s + m, 36) * 0.15);
      const b2 = base.clone().multiplyScalar(0.92 + hash(s + m, 37) * 0.16);
      parts.push(leafClump(gr.p[0] + Math.cos(ang) * off, gr.p[1] + (m ? -0.35 : 0.2) * gr.r, gr.p[2] + Math.sin(ang) * off, rr, s + m + 50, b2, lit, 0));
    }
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
// Premium pine: whorls of drooping boughs (2-strip fans with a mid-rib fold and tip droop), each with a
// dark needle-mass pad and a skirt cone so a tier reads as a solid soft layer; leaning, flared trunk.
function pinePremium(opt = {}) {
  const { tiers = 10, height = 10, width = 2.8, snow = false, seed = 1, lite = false } = opt;
  const rnd = (k) => hash(k, seed);
  const under = col(THEME.pine).lerp(col('#2f5a48'), 0.3).multiplyScalar(0.85), mid = col(THEME.pine).lerp(col(THEME.pineLight), 0.35), light = col(THEME.pineLight).lerp(col('#a8b04c'), 0.25), warm = col('#c0b95a'), snowC = col('#f2f6fb'), c = new THREE.Color();
  const tone = (t, out) => (t < 0.4 ? out.copy(under).lerp(mid, t / 0.4) : t < 0.8 ? out.copy(mid).lerp(light, (t - 0.4) / 0.4) : out.copy(light).lerp(warm, Math.min(1, (t - 0.8) / 0.25)));
  const lean = [(rnd(900) - 0.5) * 1.4, (rnd(901) - 0.5) * 1.4], bendA = rnd(902) * 6.28;
  const cx = t => lean[0] * t * t + 0.22 * Math.sin(t * 3 + bendA), cz = t => lean[1] * t * t + 0.22 * Math.cos(t * 2.6 + bendA);
  const barkLo = col('#3b332e'), barkHi = col('#5c4c42');
  const parts = [];
  const fr = lite ? [0, 0.08, 0.4, 0.95] : [0, 0.03, 0.08, 0.22, 0.45, 0.72, 0.96], path = [], rad = [];
  fr.forEach(t => { path.push([cx(t * 0.93), -0.2 + t * height * 0.98, cz(t * 0.93)]); rad.push(0.3 * Math.pow(1 - t, 0.95) + 0.03); });
  const RAD = lite ? 5 : 10;
  const trunk = tube(path, rad, RAD, (i, k, out) => { out.copy(barkLo).lerp(barkHi, Math.min(1, fr[i] * 1.3) + (hash(i * 7 + k, seed + 40) - 0.5) * 0.3); });
  { // root flare: lobes widen the base up to ~1.6x
    const p = trunk.attributes.position, lobes = 5, ph = rnd(903) * 6.28;
    for (let i = 0; i < p.count; i++) {
      const y = p.getY(i) + 0.2, f = Math.max(0, 1 - y / 1.1); if (!f) continue;
      const ax = cx(0), az = cz(0), dx = p.getX(i) - ax, dz = p.getZ(i) - az, ang = Math.atan2(dz, dx);
      const k = 1 + 0.6 * f * f * (0.4 + 0.6 * Math.max(0, Math.cos(lobes * ang + ph)));
      p.setX(i, ax + dx * k); p.setZ(i, az + dz * k);
    }
  }
  parts.push(trunk);
  if (!lite) for (let j = 0; j < 3; j++) {   // dead stubs inside the foliage
    const ty = 0.36 + j * 0.09, a = j * 2.4 + rnd(70 + j) * 1.0, y = -0.2 + ty * height * 0.98, len = 0.55;
    const x = cx(ty), z = cz(ty), dx = Math.cos(a), dz = Math.sin(a);
    parts.push(tube([[x, y, z], [x + dx * len, y - 0.1, z + dz * len]], [0.07, 0.015], 3, (i, k, out) => out.copy(barkLo)));
  }
  const W = Math.max(5, Math.round(tiers * 0.85) + (rnd(500) > 0.5 ? 1 : 0)), sp = [];
  let sum = 0;
  for (let i = 0; i < W; i++) { let s = 0.75 + rnd(i * 3 + 1) * 0.6; if (rnd(i * 7 + 2) > 0.85) s *= 1.6; sp.push(s); sum += s; }
  let cum = 0;
  for (let i = 0; i < W; i++) {
    cum += sp[i]; const t = Math.min(0.999, (cum - sp[i] / 2) / sum);
    const y = -0.2 + height * (0.3 + 0.66 * t);
    const nOuter = Math.max(5, Math.round(8 * Math.pow(1 - t, 0.6) + (rnd(i * 11) > 0.5 ? 1 : 0))), nInner = lite ? 0 : Math.max(3, nOuter - 2);
    const pos = [], tones = [];
    const tri = (P, Q, R, tp, tq, tr) => { pos.push(...P, ...Q, ...R); tones.push(tp, tq, tr); };
    const ph = rnd(i * 5 + 3) * 6.28, ph2 = rnd(i * 5 + 4) * 6.28, off = rnd(i * 17) * 6.28;
    const env = width * 1.1 * Math.pow(1 - t, 0.85) + 0.35, ox = cx(t * 0.93), oz = cz(t * 0.93);
    const bough = (a, Lr, lift, tb) => {
      const asym = 1 + 0.22 * Math.sin(a + ph) + 0.1 * Math.sin(2 * a + ph2);
      const L = env * asym * Lr, dx = Math.cos(a), dz = Math.sin(a), tx = -dz, tz = dx;
      const d0 = 0.2 * (1 - t) + 0.1 + lift, up = 0.15 + 0.5 * t;
      const yb = y + (rnd(i * 41 + a * 3) - 0.5) * 0.3;
      const S0 = [ox + dx * 0.12, yb, oz + dz * 0.12];
      const mr = L * 0.42, my = yb - d0 * mr * 0.5 + L * 0.07;
      const M = [ox + dx * mr, Math.max(1.6, my), oz + dz * mr];
      const qr = L * 0.76, qy = Math.max(1.5, yb - d0 * L * 0.55 + L * 0.02);
      const sway = (rnd(i * 43 + a * 5) - 0.5) * 0.25 * L;
      const Q = [ox + dx * qr + tx * sway * 0.5, qy, oz + dz * qr + tz * sway * 0.5];
      const TIP = [ox + dx * L + tx * sway, Math.max(1.4, yb - d0 * L * 0.9 + up * L * 0.3), oz + dz * L + tz * sway];
      const w1 = L * (0.27 + rnd(i * 47 + a * 7) * 0.08), w2 = w1 * 0.62, wl = L * 0.16;
      const L1 = [M[0] + tx * w1, M[1] - wl, M[2] + tz * w1], R1 = [M[0] - tx * w1, M[1] - wl, M[2] - tz * w1];
      const L2 = [Q[0] + tx * w2, Q[1] - wl * 0.7, Q[2] + tz * w2], R2 = [Q[0] - tx * w2, Q[1] - wl * 0.7, Q[2] - tz * w2];
      const jit = (rnd(i * 59 + a * 9) - 0.5) * 0.14, sh = 0.9 + 0.2 * t, tip = (0.8 + rnd(i * 53 + a) * 0.2) * sh + jit;
      const tS = tb + jit * 0.3, tM = 0.38 * sh + jit, tL = 0.52 * sh + jit, tQ = 0.66 * sh + jit;
      if (lite) { tri(S0, L1, TIP, tS, tL, tip); tri(S0, TIP, R1, tS, tip, tL); return; }
      tri(S0, L1, M, tS, tL, tM); tri(S0, M, R1, tS, tM, tL);
      tri(M, L1, L2, tM, tL, tQ); tri(M, L2, Q, tM, tQ, tQ); tri(M, Q, R2, tM, tQ, tQ); tri(M, R2, R1, tM, tQ, tL);
      tri(Q, L2, TIP, tQ, tQ, tip); tri(Q, TIP, R2, tQ, tip, tQ);
      // needle-mass pad below: dark thick underside
      const dn = (P, f) => [P[0], P[1] - L * f, P[2]];
      tri(dn(S0, 0.05), dn(L1, 0.09), dn(R1, 0.09), 0.2, 0.28, 0.28); tri(dn(L1, 0.09), dn(TIP, 0.06), dn(R1, 0.09), 0.28, 0.32, 0.28);
    };
    for (let k = 0; k < nOuter; k++) bough((k + (rnd(i * 13 + k) - 0.5) * 0.6) / nOuter * 6.283 + off, 0.75 + rnd(i * 19 + k) * 0.5, (rnd(i * 29 + k) - 0.5) * 0.3, 0.12);
    for (let k = 0; k < nInner; k++) bough((k + 0.5 + (rnd(i * 31 + k) - 0.5) * 0.5) / nInner * 6.283 + off + 0.4, 0.5 + rnd(i * 37 + k) * 0.25, -0.15, 0.2);
    // skirt cone: fills the tier centre so it reads as a soft layer
    const N = lite ? 5 : 8, rc = env * 0.45, A = [ox, y + env * 0.16, oz], Uc = [ox, y - env * 0.12, oz];
    for (let k = 0; k < N; k++) {
      const a1 = k / N * 6.283 + off, a2 = (k + 1) / N * 6.283 + off;
      const P = [ox + Math.cos(a1) * rc, y - env * 0.12, oz + Math.sin(a1) * rc], Qp = [ox + Math.cos(a2) * rc, y - env * 0.12, oz + Math.sin(a2) * rc];
      tri(A, P, Qp, 0.25, 0.3, 0.3); if (!lite) tri(Uc, Qp, P, 0.2, 0.25, 0.25);
    }
    const cols = [];
    for (let v = 0; v < tones.length; v++) {
      tone(Math.max(0, Math.min(1, tones[v] + t * 0.08)), c);
      if (snow && tones[v] > 0.4 && rnd(v * 0.37 + i) > 0.3) c.lerp(snowC, 0.8);
      cols.push(c.r, c.g, c.b);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
    roundNormals(g, new THREE.Vector3(ox, y - env * 0.35, oz), new THREE.Vector3(ox, y + height * 0.3, oz), 0.35);
    parts.push(g);
  }
  const top = height * 0.95;
  parts.push(tube([[cx(0.93), top - 0.2, cz(0.93)], [cx(0.95), top + height * 0.08, cz(0.95)], [cx(0.96), top + height * 0.16, cz(0.96)]], [0.05, 0.03, 0.004], 3, (i, k, o) => o.copy(mid)));
  return mergeGeometries(parts);
}
export function treeKinds() {
  if (THEME.id === 'coast') {
    const j = juniperGeometry();   // wind-sculpted coastal pines among the stone pines
    return PREMIUM ? [pinePremium({ seed: 7, tiers: 8, height: 9, width: 3.1 }), j, 0.45, pinePremium({ seed: 7, tiers: 8, height: 9, width: 3.1, lite: true }), j] : [pineGeometry({ seed: 7 }), j, 0.45];
  }
  if (THEME.id === 'canyon' && PREMIUM) { const j = juniperGeometry(); return [j, pinePremium({ tiers: 6, height: 6, width: 2.3, seed: 3 }), 0.2, j, pinePremium({ tiers: 6, height: 6, width: 2.3, seed: 3, lite: true })]; }
  if (THEME.id === 'alpine' && PREMIUM) return [pinePremium({ snow: true, seed: 1 }), pinePremium({ snow: true, tiers: 12, height: 12.5, width: 2.5, seed: 5 }), 0.35, pinePremium({ snow: true, seed: 1, lite: true }), pinePremium({ snow: true, tiers: 12, height: 12.5, width: 2.5, seed: 5, lite: true })];
  if (THEME.id === 'canyon') return [juniperGeometry(), pineGeometry({ tiers: 5, height: 6, width: 2.2, seed: 3 }), 0.2];
  if (THEME.id === 'alpine') return [pineGeometry({ snow: true, seed: 1 }), pineGeometry({ snow: true, tiers: 9, height: 12, width: 2.4, seed: 5 }), 0.35];
  if (PREMIUM) return [pinePremium({ seed: 1 }), aspenGeometry(), 0.3, pinePremium({ seed: 1, lite: true }), aspenGeometry(1)];
  return [pineGeometry({ seed: 1 }), aspenGeometry(), 0.3];
}
