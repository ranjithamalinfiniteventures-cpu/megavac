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
import { OPAQUE_UV } from './foliage.js';
let TUBE_UV = [0, 0];

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
  { const uv = new Float32Array(pos.length / 3 * 2); for (let i = 0; i < uv.length; i += 2) { uv[i] = TUBE_UV[0]; uv[i + 1] = TUBE_UV[1]; } g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); }
  g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  return g;
}
const hash = (k, seed) => { const x = Math.sin(k * 91.7 + seed * 13.1) * 43758.5; return x - Math.floor(x); };
// Redbud-style blossom tree: tapered warm-brown trunk splitting into a visible 3-level branch framework,
// with hundreds of small pink petal-cluster stars along the outer twigs (airy umbrella crown, sky and twigs show through).
function blossomTree(lod = 0) {
  const far = lod > 0, parts = [];
  TUBE_UV = OPAQUE_UV;
  let rc = 0; const R = () => hash(rc++, 7);
  const norm = v => { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; };
  const add = (a, b, k = 1) => [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k];
  const turn = (d, th, dy) => norm([d[0] * Math.cos(th) - d[2] * Math.sin(th), d[1] * 0.75 + dy, d[0] * Math.sin(th) + d[2] * Math.cos(th)]);
  const wood = col('#5a3d2b'), woodL = col('#8a6544'), woodT = col('#8f6d48');
  const splitY = 3.3, nr = far ? 3 : 6, tp = [], trad = [];
  const tx = t => 0.22 * Math.sin(t * 2.6), tz = t => 0.15 * Math.cos(t * 2.1 + 1);
  for (let i = 0; i <= nr; i++) { const t = i / nr; tp.push([tx(t), -0.15 + t * (splitY + 0.15), tz(t)]); trad.push(0.36 * (1 - 0.5 * t) * (1 + 0.6 * Math.max(0, 1 - t / 0.18))); }
  const RD = far ? 5 : 7;
  parts.push(tube(tp, trad, RD, (i, k, out) => { out.copy(wood).lerp(woodL, 0.25 + 0.35 * Math.max(0, Math.cos(k / RD * 6.283 + 0.5)) + i / nr * 0.2 + (hash(i * 5 + k, 3) - 0.5) * 0.1); }));
  const S = tp[tp.length - 1], ends3 = [], ends2 = [], ends1 = [], limbEnds = [], wc = col('#5a4030');
  const nLimb = far ? 4 : 6;
  for (let i = 0; i < nLimb; i++) {
    const a = i * 6.283 / nLimb + (R() - 0.5) * 0.7, phi = 0.65 + (R() - 0.5) * 0.25, len = 3.2 + R() * 0.6;
    const d0 = [Math.cos(a) * Math.cos(phi), Math.sin(phi), Math.sin(a) * Math.cos(phi)];
    const p1 = add(S, d0, len * 0.5), d1 = norm([d0[0] * 1.2, d0[1] * 0.9 + 0.12, d0[2] * 1.2]), p2 = add(p1, d1, len * 0.5);
    parts.push(tube([S, p1, p2], [0.17, 0.13, 0.1], far ? 3 : 5, (ii, k, o) => o.copy(wood).lerp(woodL, 0.3 + ii * 0.2 + (k % 2) * 0.05)));
    limbEnds.push(p1, p2);
    for (let c = 0; c < 2; c++) {
      const sg = c ? 1 : -1, nd = turn(d1, sg * (0.6 + R() * 0.4), 0.35 + R() * 0.25), len1 = 1.8 + R() * 0.6;
      const q1 = add(p2, nd, len1 * 0.5), q2 = add(q1, norm(add(nd, [0, 0.35, 0])), len1 * 0.5);
      parts.push(tube(far ? [p2, q2] : [p2, q1, q2], far ? [0.085, 0.04] : [0.1, 0.075, 0.055], far ? 3 : 4, (ii, k, o) => o.copy(woodL).lerp(woodT, ii * 0.3)));
      ends1.push(q2);
      const nt = 2 + (R() > 0.5 ? 1 : 0), dq = norm(add(q2, q1, -1));
      for (let d = 0; d < nt; d++) {
        const dd = turn(dq, (d - (nt - 1) / 2) * (0.7 + R() * 0.3), 0.3 + R() * 0.3), l2 = 1.0 + R() * 0.5, e = add(q2, dd, l2);
        if (!far) parts.push(tube([q2, e], [0.055, 0.02], 3, (ii, k, o) => o.copy(woodT)));
        ends2.push(e);
        if (!far) for (let m = 0; m < 2; m++) { const d3 = turn(norm(add(e, q2, -1)), (m ? 1 : -1) * (0.5 + R() * 0.4), 0.3 + R() * 0.3), e3 = add(e, d3, 0.8 + R() * 0.4); parts.push(tube([e, e3], [0.02, 0.008], 3, (ii, k, o) => o.copy(woodT))); ends3.push(e3); }
      }
    }
  }
  // canopy centre
  const cc = [0, 0, 0]; ends2.forEach(e => { cc[0] += e[0]; cc[1] += e[1]; cc[2] += e[2]; }); cc[0] /= ends2.length; cc[1] /= ends2.length; cc[2] /= ends2.length;
  let top = -1e9, bot = 1e9; ends2.forEach(e => { top = Math.max(top, e[1]); bot = Math.min(bot, e[1]); });
  const pA = col('#f8c8da'), pB = col('#f2a9c6'), pL = col('#ffdbe8'), pD = col('#e78fb4'), pDD = col('#d97aa3'), c = new THREE.Color();
  const pos = [], nor = [], cols = [], uvs = [], h = k => hash(k, 9);
  let ci = 0;
  const UP = [0, 1, 0];
  const card = (P, sz, inner, flip) => {
    const k = ci++, hh = Math.max(0, Math.min(1, (P[1] - bot) / (top - bot + 1e-3)));
    const out = norm([P[0] - cc[0], (P[1] - cc[1]) * 0.6, P[2] - cc[2]]);
    const d = norm([out[0] * 0.4 + (h(k) - 0.5) * 2, out[1] * 0.4 + 0.2 + (h(k + 1) - 0.5) * 1.4, out[2] * 0.4 + (h(k + 2) - 0.5) * 2]);
    let u = norm([UP[1] * d[2] - UP[2] * d[1], UP[2] * d[0] - UP[0] * d[2], UP[0] * d[1] - UP[1] * d[0]]);
    let v = [d[1] * u[2] - d[2] * u[1], d[2] * u[0] - d[0] * u[2], d[0] * u[1] - d[1] * u[0]];
    const ro = (h(k + 3) - 0.5) * 1.0 + (flip ? 1.57 : 0), cr = Math.cos(ro), sr = Math.sin(ro);
    const u2 = [u[0] * cr + v[0] * sr, u[1] * cr + v[1] * sr, u[2] * cr + v[2] * sr], v2 = [v[0] * cr - u[0] * sr, v[1] * cr - u[1] * sr, v[2] * cr - u[2] * sr];
    let t = 0.4 + hh * 0.5 + (h(k + 4) - 0.5) * 0.3 - (inner ? 0.35 : 0);
    t = Math.max(0, Math.min(1, t));
    if (t < 0.3) c.copy(inner ? pDD : pD).lerp(pB, t / 0.3); else if (t < 0.65) c.copy(pB).lerp(pA, (t - 0.3) / 0.35); else c.copy(pA).lerp(pL, (t - 0.65) / 0.35);
    c.g *= 1 + (h(k + 5) - 0.5) * 0.04; c.b *= 1 + (h(k + 6) - 0.5) * 0.04;
    const n = norm([out[0] * 0.5, out[1] * 0.5 + 0.5, out[2] * 0.5]), hs = sz / 2;
    const C = (a, b) => [P[0] + u2[0] * a * hs + v2[0] * b * hs, P[1] + u2[1] * a * hs + v2[1] * b * hs, P[2] + u2[2] * a * hs + v2[2] * b * hs];
    const Q = [[C(-1, -1), 0, 0], [C(1, -1), 1, 0], [C(1, 1), 1, 1], [C(-1, -1), 0, 0], [C(1, 1), 1, 1], [C(-1, 1), 0, 1]];
    Q.forEach(([p, uu, vv]) => { pos.push(...p); nor.push(...n); cols.push(c.r, c.g, c.b); uvs.push(uu, vv); });
  };
  const sc = far ? 1.6 : 1;
  const around = (E, cnt, spread, inner) => { for (let q = 0; q < cnt; q++) { const k = ci * 5 + 11, o = norm([h(k) - 0.5, (h(k + 1) - 0.3) * 0.8, h(k + 2) - 0.5]), r = spread * (0.2 + h(k + 3) * 0.8), P = [E[0] + o[0] * r, E[1] + o[1] * r + 0.1, E[2] + o[2] * r], z = (0.7 + h(k + 4) * 0.6) * sc; card(P, z, inner, false); if (!far && h(k + 7) > 0.5) card(P, z * 0.85, inner, true); } };
  if (far) { ends2.forEach((e, i) => { if (i % 2 === 0) around(e, 3, 0.7); }); ends1.forEach(e => around(e, 2, 0.6)); limbEnds.forEach((e, i) => { if (i % 2) around(e, 1, 0.6, true); }); }
  else {
    ends3.forEach(e => around(e, 3, 0.5)); ends2.forEach(e => around(e, 2, 0.6)); ends1.forEach(e => around(e, 3, 0.8));
    let rxm = 0, tp2 = -1e9; ends2.concat(ends3).forEach(e => { rxm = Math.max(rxm, Math.hypot(e[0] - cc[0], e[2] - cc[2])); tp2 = Math.max(tp2, e[1]); });
    const ryy = Math.max(2.2, Math.min(rxm / 1.4, tp2 - cc[1] + 0.6));
    for (let i = 0; i < 190; i++) {   // dome shell over the twig ends, densest at the rim
      const az = i * 2.39996 + h(i + 700) * 0.5, el = Math.acos(1 - h(i + 710) * 1.0 * (i % 5 === 0 ? 1 : 0.9)) , inner = i % 6 === 0, rf = inner ? 0.45 + h(i + 720) * 0.25 : 0.82 + h(i + 720) * 0.22;
      const sx = Math.sin(el) * Math.cos(az), sz = Math.sin(el) * Math.sin(az), sy = Math.cos(el);
      card([cc[0] + sx * rxm * rf, cc[1] + sy * ryy * rf + 0.2, cc[2] + sz * rxm * rf], 0.75 + h(i + 730) * 0.55, inner, h(i + 740) > 0.65);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2)); g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  parts.push(g);
  TUBE_UV = [0, 0];
  return mergeGeometries(parts);
}
// Juniper: short twisted trunk under wide, flattened, dark clumps.
function juniperGeometry(lite = false) {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.15, 0.35, 1.8, 5).translate(0, 0.9, 0); trunk.rotateZ(0.2);
  parts.push(paint(trunk, col(THEME.trunk).lerp(col('#9a7654'), 0.45)));
  const dark = col(THEME.pine), light = col(THEME.pineLight), c = new THREE.Color();
  [[0, 2.2, 0, 1.6], [1.1, 1.8, 0.3, 1.1], [-1.0, 1.9, -0.4, 1.2], [0.2, 2.9, -0.2, 1.0], [-0.3, 1.6, 1.0, 0.9]].forEach(([x, y, z, r], i) => {
    const b = (PREMIUM ? lumpy(r, i + 20, lite && i > 2 ? 0 : 1) : new THREE.IcosahedronGeometry(r, 0)).scale(1.2, 0.7, 1.2).translate(x, y, z).toNonIndexed();
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
  let mid = col(THEME.pine).lerp(col(THEME.pineLight), 0.5);
  if (snow) mid = col('#3f6f57');
  const under = snow ? col('#9db0c8').lerp(mid, 0.3) : col('#6f7038').lerp(mid, 0.4), light = col(THEME.pineLight).lerp(col('#9aab48'), 0.2), tipC = col('#a9b350'), snowC = col('#f4f7fb'), c = new THREE.Color();
  const tone = (t, out) => (t < 0.5 ? out.copy(under).lerp(mid, t / 0.5) : t < 0.8 ? out.copy(mid).lerp(light, (t - 0.5) / 0.3) : out.copy(light).lerp(tipC, Math.min(1, (t - 0.8) / 0.2)));
  const lean = [(rnd(900) - 0.5) * 1.8, (rnd(901) - 0.5) * 1.8], bendA = rnd(902) * 6.28;
  const cx = t => lean[0] * t * t + 0.18 * Math.sin(t * 3 + bendA), cz = t => lean[1] * t * t + 0.18 * Math.cos(t * 2.6 + bendA);
  const barkLo = snow ? col('#6a4a34') : col('#4b3424'), barkHi = snow ? col('#9a7650') : col('#86633f');
  const parts = [];
  const fr = lite ? [0, 0.08, 0.5, 0.86] : [0, 0.05, 0.15, 0.4, 0.7, 0.86], path = [], rad = [];
  fr.forEach(t => { path.push([cx(t * 0.93), -0.2 + t * height * 0.98, cz(t * 0.93)]); rad.push((0.3 * Math.pow(1 - t, 0.8) + 0.04) * (1 + 0.95 * Math.max(0, 1 - t / 0.22))); });
  parts.push(tube(path, rad, lite ? 4 : 8, (i, k, out) => { out.copy(barkLo).lerp(barkHi, Math.min(1, fr[i] * 1.2) * 0.6 + (hash(k, seed + 40) - 0.5) * 0.5 + 0.16 * Math.sin(i * 2.3 + seed) + 0.22 * Math.max(0, Math.cos(k / (lite ? 4 : 8) * 6.283 + 0.6)) + (hash(i * 7 + k, seed + 41) - 0.5) * 0.12); }));
  let W = Math.max(5, Math.round(tiers * 0.64) + (rnd(500) > 0.5 ? 1 : 0));
  if (snow) W = Math.min(W, 7);
  if (lite) W = Math.max(4, Math.min(4, W));
  const N = lite ? (snow ? 3 : 4) : snow ? 6 : 8, M = N * 2;
  const rings = lite ? [[0.42, 0.62], [1.0, 0.0], [0.9, -0.32], [0.3, -0.3]] : [[0.42, 0.62], [0.8, 0.28], [1.0, 0.0], [0.9, -0.34], [0.55, -0.42]];
  const rt = lite ? [0.42, 0.7, 0.36, 0.2] : [0.42, 0.55, 0.72, 0.38, 0.24];
  const sp = []; let sum = 0;
  for (let i = 0; i < W; i++) { let sv = 0.8 + rnd(i * 3 + 1) * 0.5; if (rnd(i * 7 + 2) > 0.88) sv *= 1.4; sp.push(sv); sum += sv; }
  let cum = 0;
  for (let i = 0; i < W; i++) {
    cum += sp[i]; const t = Math.min(0.999, (cum - sp[i] / 2) / sum);
    const y = -0.2 + height * (0.36 + 0.58 * t), hh = height * 0.7 / W * 0.95;
    const R = width * 1.15 * Math.pow(1 - t, 0.8) * (0.8 + rnd(i * 11) * 0.4) + 0.45, ox = cx(t * 0.93) + (rnd(i * 13) - 0.5) * 0.4, oz = cz(t * 0.93) + (rnd(i * 17) - 0.5) * 0.4;
    const rot = rnd(i * 5 + 3) * 6.28, gap = rnd(i * 23) > 0.6 ? Math.floor(rnd(i * 29) * N) * 2 : -1;
    const top = t > 0.9;
    const V = [];
    for (let r = 0; r < rings.length; r++) {
      const row = [];
      for (let j = 0; j < M; j++) {
        const peak = j % 2 === 0, th = (j + (rnd(i * 31 + j) - 0.5) * (snow ? 0.08 : 0.18)) / M * 6.283 + rot;
        let rr = R * (peak ? 0.92 + rnd(i * 37 + j) * 0.2 : 0.62 + rnd(i * 41 + j) * 0.12) * (1 + 0.16 * Math.sin(th + i * 1.7 + seed));
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
      if (snow && tops[v] && tones[v] > 0.2 && rnd(v * 0.31 + i) > 0.03) c.lerp(snowC, 0.95);
      else if (snow) c.lerp(col('#a9b7c8'), 0.3);
      cols.push(c.r, c.g, c.b);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
    roundNormals(g, new THREE.Vector3(ox, y - hh * 0.4, oz), new THREE.Vector3(ox, y - height * (snow ? 1.2 : 0.4), oz), snow ? 0.97 : 0.75);
    parts.push(g);
  }
  return mergeGeometries(parts);
}
export function treeKinds() {
  if (THEME.id === 'coast') {
    const j = juniperGeometry();   // wind-sculpted coastal pines among the stone pines
    return PREMIUM ? [pinePremium({ seed: 7, tiers: 8, height: 9, width: 3.1 }), j, 0.45, pinePremium({ seed: 7, tiers: 8, height: 9, width: 3.1, lite: true }), juniperGeometry(true)] : [pineGeometry({ seed: 7 }), j, 0.45];
  }
  if (THEME.id === 'canyon' && PREMIUM) { const j = juniperGeometry(); return [j, pinePremium({ tiers: 6, height: 6, width: 2.3, seed: 3 }), 0.2, juniperGeometry(true), pinePremium({ tiers: 6, height: 6, width: 2.3, seed: 3, lite: true })]; }
  if (THEME.id === 'alpine' && PREMIUM) return [pinePremium({ snow: true, seed: 1 }), pinePremium({ snow: true, tiers: 12, height: 12.5, width: 2.5, seed: 5 }), 0.35, pinePremium({ snow: true, seed: 1, lite: true }), pinePremium({ snow: true, tiers: 12, height: 12.5, width: 2.5, seed: 5, lite: true })];
  if (THEME.id === 'canyon') return [juniperGeometry(), pineGeometry({ tiers: 5, height: 6, width: 2.2, seed: 3 }), 0.2];
  if (THEME.id === 'alpine') return [pineGeometry({ snow: true, seed: 1 }), pineGeometry({ snow: true, tiers: 9, height: 12, width: 2.4, seed: 5 }), 0.35];
  if (PREMIUM) return [pinePremium({ seed: 1 }), blossomTree(0), 0.3, pinePremium({ seed: 1, lite: true }), blossomTree(1)];
  return [pineGeometry({ seed: 1 }), blossomTree(0), 0.3];
}
