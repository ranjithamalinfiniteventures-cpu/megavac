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
// Leaf lump: rounded ragged icosphere, smooth normals, strong warm gradient (lit yellow top, base middle, red-orange underside).
function leafClump(x, y, z, r, seed, base, lit, detail = 1) {
  const g = new THREE.IcosahedronGeometry(1, detail);
  const p = g.attributes.position, v = new THREE.Vector3(), bias = new Map();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const key = v.x.toFixed(3) + v.y.toFixed(3) + v.z.toFixed(3);
    if (!bias.has(key)) bias.set(key, 0.92 + hash(seed * 7 + bias.size, 5) * 0.18);
    v.multiplyScalar(bias.get(key));
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.rotateX(hash(seed, 1) * 6); g.rotateY(hash(seed, 2) * 6); g.scale(r * 1.1, r * 0.85, r * 1.1).translate(x, y, z);
  roundNormals(g, new THREE.Vector3(x, y - r * 0.1, z), new THREE.Vector3(0, y - 4, 0), 0.5);
  const cs = new Float32Array(p.count * 3), c = new THREE.Color(), deep = col('#a63d1e');
  for (let i = 0; i < p.count; i++) {
    const k = Math.max(-1, Math.min(1, (p.getY(i) - y) / (r * 0.85)));
    c.copy(base);
    if (k > 0) c.lerp(lit, k * 0.75); else c.lerp(deep, -k * 0.7);
    const core = 0.86 + 0.14 * Math.min(1, Math.hypot(p.getX(i), p.getZ(i)) / 1.6);
    c.multiplyScalar((0.8 + 0.2 * (k * 0.5 + 0.5)) * core);
    cs[i * 3] = c.r; cs[i * 3 + 1] = c.g; cs[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(cs, 3));
  return g;
}
// Aspen: slender curved pale trunk with small eye scars, forking branches that reach into rounded leaf clumps.
function aspenGeometry(lod = 0) {
  const parts = [], H = 8.6, far = lod > 0;
  const bark = col('#e8e1d3'), scar = col('#3a3330');
  const greyB = col('#b9b1a4');
  const tx = t => 0.28 * Math.sin(t * 2.3), tz = t => 0.16 * Math.sin(t * 3.1 + 1);
  const nr = far ? 4 : 6, tpath = [], trad = [];
  for (let i = 0; i <= nr; i++) { const t = i / nr; tpath.push([tx(t), -0.1 + t * H, tz(t)]); trad.push(0.27 * Math.pow(1 - t, 0.85) + 0.045); }
  parts.push(tube(tpath, trad, far ? 5 : 6, (i, k, out) => {
    out.copy(bark).multiplyScalar(0.9 + hash(i * 3 + k, 14) * 0.14);
    if (i > 0 && hash(i * 13 + k * 5, 11) > 0.9) out.lerp(scar, 0.7);
  }));
  const groups = [], nb = 4;
  for (let j = 0; j < nb; j++) {
    const ty = 0.4 + (j / (nb - 1)) * 0.34 + (hash(j, 21) - 0.5) * 0.05, a = j * 2.39996 + hash(j, 22) * 0.6;
    const sx = tx(ty), sy = -0.1 + ty * H, sz = tz(ty), out = 1.0 + hash(j, 23) * 0.6 + (1 - ty) * 0.7, lift = 0.4 + ty * 0.8;
    const dx = Math.cos(a), dz = Math.sin(a);
    const P0 = [sx, sy, sz], P1 = [sx + dx * out * 0.35, sy + lift * 0.25, sz + dz * out * 0.35], P2 = [sx + dx * out * 0.65, sy + lift * 0.6, sz + dz * out * 0.65];
    if (!far) parts.push(tube([P0, P1, P2], [0.1 - ty * 0.04, 0.065, 0.045], 4, (i, k, o) => o.copy(i ? greyB : bark).multiplyScalar(0.8 + hash(k + i, 25) * 0.2)));
    for (let f = 0; f < 2; f++) {
      const fa = a + (f ? 0.65 : -0.65) + (hash(j * 2 + f, 26) - 0.5) * 0.3, fl = 1.0 + hash(j * 2 + f, 27) * 0.5, fx = Math.cos(fa), fz = Math.sin(fa);
      const droop = (j === 0 && f === 0) ? -0.5 : 0;
      const E = [P2[0] + fx * fl, P2[1] + 0.55 * fl + droop, P2[2] + fz * fl];
      const Mm = [P2[0] + fx * fl * 0.5, P2[1] + 0.2 * fl + droop * 0.3, P2[2] + fz * fl * 0.5];
      if (!far) parts.push(tube([P2, Mm, E], [0.05, 0.032, 0.012], 3, (i, k, o) => o.copy(greyB).multiplyScalar(0.85)));
      groups.push({ p: E, r: 0.95 + hash(j * 2 + f, 28) * 0.25 });
    }
  }
  groups.push({ p: [tx(1), H + 0.2, tz(1)], r: 1.05 });
  groups.push({ p: [tx(0.55) + 0.45, 5.0, tz(0.55) + 0.3], r: 0.9 });
  const yellow = col('#f7d04a'), leafA = col(THEME.aspen || '#e0a83a'), leafB = col(THEME.aspenDark || '#b8752a'), red = col('#c04a2a'), lit = col('#ffdf70'), base = new THREE.Color();
  const pick = far ? [0, 3, 6, 8] : groups.map((_, i) => i);
  pick.forEach(gi => {
    const gr = groups[gi], s = gi * 5 + 1, hh = Math.max(0, Math.min(1, (gr.p[1] - 3.5) / 6));
    base.copy(leafB).lerp(leafA, Math.max(0, Math.min(1, 0.35 + hh * 0.5 + (hash(s, 34) - 0.5) * 0.4)));
    const q = hash(s, 35); if (q > 0.85) base.lerp(red, 0.5); else if (q < 0.28) base.lerp(yellow, 0.6);
    if (far) { parts.push(leafClump(gr.p[0], gr.p[1], gr.p[2], gr.r * 1.5, s, base, lit, 1)); return; }
    parts.push(leafClump(gr.p[0], gr.p[1], gr.p[2], gr.r, s, base, lit, 1));
    const ang = hash(s, 31) * 6.283, off = gr.r * 0.7, b2 = base.clone().multiplyScalar(0.93 + hash(s, 37) * 0.14);
    parts.push(leafClump(gr.p[0] + Math.cos(ang) * off, gr.p[1] - 0.3 * gr.r, gr.p[2] + Math.sin(ang) * off, gr.r * 0.72, s + 50, b2, lit, 1));
  });
  return mergeGeometries(parts);
}
// Juniper: short twisted trunk under wide, flattened, dark clumps.
function juniperGeometry() {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.15, 0.35, 1.8, 5).translate(0, 0.9, 0); trunk.rotateZ(0.2);
  parts.push(paint(trunk, col(THEME.trunk).lerp(col('#9a7654'), 0.45)));
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
// Premium pine: chunky lobed tiers with real thickness (top surface, drooping rim, dark warm underside),
// stacked with overlap around a leaning, flared trunk. Rounded normals per tier; no thin planes.
function pinePremium(opt = {}) {
  const { tiers = 10, height = 10, width = 2.8, snow = false, seed = 1, lite = false } = opt;
  const rnd = (k) => hash(k, seed);
  let mid = col(THEME.pine).lerp(col(THEME.pineLight), 0.3);
  if (snow) mid.lerp(col('#4f8f6c'), 0.35);
  const under = mid.clone().multiplyScalar(0.52), light = col(THEME.pineLight).lerp(col('#9aab48'), 0.2), tipC = col('#a9b350'), snowC = col('#e6eff9'), c = new THREE.Color();
  const tone = (t, out) => (t < 0.5 ? out.copy(under).lerp(mid, t / 0.5) : t < 0.8 ? out.copy(mid).lerp(light, (t - 0.5) / 0.3) : out.copy(light).lerp(tipC, Math.min(1, (t - 0.8) / 0.2)));
  const lean = [(rnd(900) - 0.5) * 1.3, (rnd(901) - 0.5) * 1.3], bendA = rnd(902) * 6.28;
  const cx = t => lean[0] * t * t + 0.18 * Math.sin(t * 3 + bendA), cz = t => lean[1] * t * t + 0.18 * Math.cos(t * 2.6 + bendA);
  const barkLo = col('#4b3424'), barkHi = col('#86633f');
  const parts = [];
  const fr = lite ? [0, 0.08, 0.5, 0.86] : [0, 0.05, 0.15, 0.4, 0.7, 0.86], path = [], rad = [];
  fr.forEach(t => { path.push([cx(t * 0.93), -0.2 + t * height * 0.98, cz(t * 0.93)]); rad.push((0.3 * Math.pow(1 - t, 0.8) + 0.04) * (1 + 0.45 * Math.max(0, 1 - t / 0.18))); });
  parts.push(tube(path, rad, lite ? 4 : 7, (i, k, out) => { out.copy(barkLo).lerp(barkHi, Math.min(1, fr[i] * 1.2) * 0.9 + (hash(i * 7 + k, seed + 40) - 0.5) * 0.2); }));
  let W = Math.max(5, Math.round(tiers * 0.64) + (rnd(500) > 0.5 ? 1 : 0));
  if (snow) W = Math.min(W, 7);
  if (lite) W = Math.max(4, Math.min(4, W));
  const N = lite ? (snow ? 3 : 4) : snow ? 6 : 7, M = N * 2;
  const rings = lite ? [[0.42, 0.62], [1.0, 0.0], [0.97, -0.32], [0.18, -0.3]] : [[0.42, 0.62], [0.8, 0.28], [1.0, 0.0], [0.97, -0.32], [0.6, -0.45], [0.18, -0.3]];
  const rt = lite ? [0.42, 0.7, 0.36, 0.15] : [0.42, 0.55, 0.72, 0.36, 0.22, 0.15];
  const sp = []; let sum = 0;
  for (let i = 0; i < W; i++) { let sv = 0.8 + rnd(i * 3 + 1) * 0.5; if (rnd(i * 7 + 2) > 0.88) sv *= 1.4; sp.push(sv); sum += sv; }
  let cum = 0;
  for (let i = 0; i < W; i++) {
    cum += sp[i]; const t = Math.min(0.999, (cum - sp[i] / 2) / sum);
    const y = -0.2 + height * (0.27 + 0.66 * t), hh = height * 0.7 / W * 0.95;
    const R = width * 1.15 * Math.pow(1 - t, 0.8) * (0.92 + rnd(i * 11) * 0.16) + 0.45, ox = cx(t * 0.93) + (rnd(i * 13) - 0.5) * 0.25, oz = cz(t * 0.93) + (rnd(i * 17) - 0.5) * 0.25;
    const rot = rnd(i * 5 + 3) * 6.28, gap = rnd(i * 23) > 0.6 ? Math.floor(rnd(i * 29) * N) * 2 : -1;
    const top = t > 0.9;
    const V = [];
    for (let r = 0; r < rings.length; r++) {
      const row = [];
      for (let j = 0; j < M; j++) {
        const peak = j % 2 === 0, th = (j + (rnd(i * 31 + j) - 0.5) * 0.35) / M * 6.283 + rot;
        let rr = R * (peak ? 0.92 + rnd(i * 37 + j) * 0.2 : 0.52 + rnd(i * 41 + j) * 0.12);
        if (j === gap) rr *= 0.58;
        const rho = rr * rings[r][0] * (top ? 0.8 : 1), droop = peak ? (0.35 + rnd(i * 47 + j) * 0.25) * (rings[r][0] > 0.9 ? 1 : rings[r][0] > 0.5 ? 0.4 : 0) : 0;
        const ty = y + hh * (rings[r][1] - droop) + (peak ? 0 : hh * 0.12 * (rings[r][0] > 0.7 ? 1 : 0));
        row.push({ p: [ox + Math.cos(th) * rho, ty, oz + Math.sin(th) * rho], tn: rt[r] + (peak && r < 3 ? 0.1 : -0.03) + (rnd(i * 43 + j) - 0.5) * 0.08 + t * 0.06 - (r > 2 ? 0.02 * (1 - t) : 0), top: !lite && r < 3 || lite && r < 2 });
      }
      V.push(row);
    }
    const pos = [], tones = [], tops = [];
    const tri = (A, B, C) => { [A, B, C].forEach(q => { pos.push(...q.p); tones.push(q.tn); tops.push(q.top ? 1 : 0); }); };
    const apexP = { p: [ox, y + hh * (top ? 1.05 : 1.35), oz], tn: 0.62 + t * 0.1, top: true };
    for (let j = 0; j < M; j++) { const j2 = (j + 1) % M; tri(apexP, V[0][j], V[0][j2]); }
    for (let r = 0; r < rings.length - 1; r++) for (let j = 0; j < M; j++) { const j2 = (j + 1) % M; tri(V[r][j], V[r + 1][j], V[r + 1][j2]); tri(V[r][j], V[r + 1][j2], V[r][j2]); }
    const cols = [];
    for (let v = 0; v < tones.length; v++) {
      tone(Math.max(0, Math.min(1, tones[v])), c);
      if (snow && tops[v] && tones[v] > 0.5 && rnd(v * 0.31 + i) > 0.25) c.lerp(snowC, 0.85);
      cols.push(c.r, c.g, c.b);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
    roundNormals(g, new THREE.Vector3(ox, y - hh * 0.4, oz), new THREE.Vector3(ox, y - height * 0.4, oz), 0.4);
    parts.push(g);
  }
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
