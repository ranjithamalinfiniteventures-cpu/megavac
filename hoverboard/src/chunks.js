// Streams terrain, road, scenery and trackside props in chunks along the track.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { ROAD_HALF, roadX, roadY, terrainRel, terrainH, terrainColor, terrainSplat, lateralSamples, fbm, openness } from './world.js';
import { PREMIUM, HQ, terrainMaterial, patchRoad, patchFoliage, patchLit, rockMaterial, roundNormals } from './premium.js';
import { THEME } from './theme.js';

export const CHUNK_LEN = 160;
const DEBUG_ORBIT = new URLSearchParams(location.search).has('orbit');
const ROWS = 32;
const LAT = lateralSamples(20, 700);
const MAX_TREES = 360, MAX_ROCKS = 60, MAX_POLES = 24, MAX_TUFTS = 500, MAX_POSTS = 2 * (ROWS / 2 + 1);

function rng(seed) {
  let t = seed >>> 0;
  return () => { t += 0x6D2B79F5; let r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; };
}
const col = hex => new THREE.Color(hex);

// ---------- textures ----------
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
  return t;
}
export function makeTextures() {
  const road = canvasTex(512, 1024, (g, W, H) => {
    g.fillStyle = THEME.road; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 26000; i++) { const v = Math.random(); g.fillStyle = `rgba(${v > 0.5 ? '255,240,230' : '0,0,10'},${0.05 + Math.random() * 0.06})`; g.fillRect(Math.random() * W, Math.random() * H, 2, 2); }
    // worn hover lanes
    for (const x of [0.3, 0.7]) { const gr = g.createLinearGradient(W * (x - 0.1), 0, W * (x + 0.1), 0); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(0.5, 'rgba(0,0,0,0.18)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(W * (x - 0.1), 0, W * 0.2, H); }
    g.fillStyle = THEME.roadLine; g.fillRect(W * 0.055, 0, W * 0.018, H); g.fillRect(W * 0.927, 0, W * 0.018, H);
    g.fillStyle = THEME.roadDash; for (let y = 0; y < H; y += H / 2) g.fillRect(W * 0.492, y, W * 0.016, H / 4);
    g.fillStyle = '#15161d'; g.fillRect(0, 0, W * 0.03, H); g.fillRect(W * 0.97, 0, W * 0.03, H);
  });
  road.colorSpace = THREE.SRGBColorSpace;
  const glow = canvasTex(64, 8, (g, W, H) => {
    g.fillStyle = '#000'; g.fillRect(0, 0, W, H);
    g.fillStyle = '#fff'; g.fillRect(0, 0, 2, H); g.fillRect(W - 2, 0, 2, H);
  });
  glow.colorSpace = THREE.SRGBColorSpace;
  const rough = canvasTex(256, 512, (g, W, H) => {
    g.fillStyle = '#b4b4b4'; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 9000; i++) { const v = 150 + Math.random() * 100 | 0; g.fillStyle = `rgba(${v},${v},${v},0.35)`; g.fillRect(Math.random() * W, Math.random() * H, 3, 3); }
    g.fillStyle = '#909090'; for (const x of [0.3, 0.7]) g.fillRect(W * (x - 0.05), 0, W * 0.1, H);   // polished lanes
  });
  return { road, glow, rough };
}

// ---------- scenery geometry ----------
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
function treeKinds() {
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
function rockGeometry(seed) {
  const g = new THREE.IcosahedronGeometry(1, PREMIUM ? 2 : 1);
  const pos = g.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    v.multiplyScalar(1 + fbm(v.x * 1.3 + seed, v.y * 1.3 + v.z * 0.7, 2) * 0.6 + (PREMIUM ? fbm(v.x * 4 + seed, v.y * 4 + v.z * 3, 2) * 0.12 : 0)); v.y *= 0.65;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}
// marker pole with a pennant
function poleGeometry() {
  const pole = paint(new THREE.CylinderGeometry(0.06, 0.07, 2.6, 6).translate(0, 1.3, 0), col('#f4efe6'));
  const band = paint(new THREE.CylinderGeometry(0.075, 0.075, 0.35, 6).translate(0, 2.2, 0), col(THEME.flags[0]));
  const shape = new THREE.Shape(); shape.moveTo(0, 0); shape.lineTo(0.8, -0.22); shape.lineTo(0, -0.45);
  const flag = paint(new THREE.ShapeGeometry(shape).translate(0.06, 2.6, 0), col('#ffffff'));
  return mergeGeometries([pole, band, flag]);
}
// arch of two poles with a line of bunting across the road
function buntingGeometry() {
  const parts = [];
  const H = 7.5, span = ROAD_HALF + 1.2;
  for (const x of [-span, span]) parts.push(paint(new THREE.CylinderGeometry(0.12, 0.16, H, 6).translate(x, H / 2, 0), col('#2b2d3a')));
  const n = 22;
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n, x = -span + t * span * 2, y = H - 0.3 - Math.sin(t * Math.PI) * 1.3;
    const s = new THREE.Shape(); s.moveTo(-0.32, 0); s.lineTo(0.32, 0); s.lineTo(0, -0.7);
    parts.push(paint(new THREE.ShapeGeometry(s).translate(x, y, 0), col(THEME.flags[i % THEME.flags.length])));
  }
  return mergeGeometries(parts);
}

function tuftGeometry() {
  const parts = [];
  for (let i = 0; i < 5; i++) {
    const a = i / 5 * Math.PI * 2;
    const blade = new THREE.ConeGeometry(0.06, 0.55 + (i % 3) * 0.18, 3, 1);
    blade.translate(0, 0.3, 0); blade.rotateZ(Math.cos(a) * 0.35); blade.rotateX(Math.sin(a) * 0.35);
    parts.push(paint(blade, col(THEME.grass).multiplyScalar(0.8 + (i % 2) * 0.3)));
  }
  return mergeGeometries(parts);
}

export class ChunkManager {
  constructor(scene, tex, P = null) {
    this.scene = scene;
    this.chunks = [];
    this.premium = PREMIUM && !!P;
    this.terrainMat = this.premium ? terrainMaterial(P) : new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95, metalness: 0 });
    this.roadMat = new THREE.MeshStandardMaterial({
      map: tex.road, roughnessMap: tex.rough, roughness: 1, metalness: 0.1, envMapIntensity: 0.9,
    });
    [this.treeGeo, this.treeGeoB, this.treeMix, this.treeGeoFar, this.treeGeoBFar] = treeKinds();
    this.treeMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.9, side: THREE.DoubleSide });
    this.rockGeo = rockGeometry(3.1);
    this.rockMat = rockMaterial(P, { color: THEME.rock, flatShading: true, roughness: 0.9 }, 3, 0.35);
    this.poleGeo = poleGeometry();
    this.propMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, side: THREE.DoubleSide });
    this.buntingGeo = buntingGeometry();
    this.tuftGeo = tuftGeometry();
    this.tuftMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, flatShading: true });
    this.railMat = new THREE.MeshStandardMaterial({ color: '#b9bfc8', metalness: 0.75, roughness: 0.38, side: THREE.DoubleSide });
    this.railPostGeo = new THREE.BoxGeometry(0.12, 0.9, 0.12).translate(0, 0.45, 0);
    if (this.premium) {
      patchRoad(this.roadMat, P);
      patchFoliage(this.treeMat, 'tree');
      this.treeMat.roughness = 1; this.treeMat.envMapIntensity = 0.45;
      patchLit(this.propMat, 'prop'); patchLit(this.tuftMat, 'tuft'); patchLit(this.railMat, 'rail');
      this.railMat.roughness = 0.55; this.railMat.metalness = 0.6; this.railMat.envMapIntensity = 0.6; this.railMat.color.set('#a9adb4');
      this.tuftMat.flatShading = false;
    }
    this.job = null;
  }

  _makeChunk() {
    const nx = LAT.length, ny = ROWS + 1;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nx * ny * 3), 3));
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(nx * ny * 3), 3));
    if (this.premium) {
      geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(nx * ny * 3), 3));
      geo.setAttribute('splat', new THREE.BufferAttribute(new Float32Array(nx * ny * 4), 4));
    }
    const idx = [];
    for (let j = 0; j < ROWS; j++) for (let i = 0; i < nx - 1; i++) {
      const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
      // alternate the diagonal so the facets don't read as a regular grid
      if ((i + j) & 1) idx.push(a, b, c, b, d, c); else idx.push(a, b, d, a, d, c);
    }
    geo.setIndex(idx);
    const terrain = new THREE.Mesh(geo, this.terrainMat);
    terrain.receiveShadow = true; terrain.frustumCulled = false;

    const rgeo = new THREE.BufferGeometry();
    const rn = 2 * (ROWS + 1);
    rgeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(rn * 3), 3));
    rgeo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(rn * 3), 3));
    rgeo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(rn * 2), 2));
    const ri = [];
    for (let j = 0; j < ROWS; j++) { const a = j * 2; ri.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    rgeo.setIndex(ri);
    const road = new THREE.Mesh(rgeo, this.roadMat);
    road.receiveShadow = true; road.frustumCulled = false;

    const inst = (g, m, n, shadow = true) => { const x = new THREE.InstancedMesh(g, m, n); x.castShadow = shadow; x.receiveShadow = true; x.frustumCulled = false; return x; };
    const trees = inst(this.treeGeo, this.treeMat, MAX_TREES);
    trees.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_TREES * 3), 3);
    const treesB = inst(this.treeGeoB, this.treeMat, MAX_TREES >> 1);
    treesB.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array((MAX_TREES >> 1) * 3), 3);
    const rocks = inst(this.rockGeo, this.rockMat, MAX_ROCKS);
    const poles = inst(this.poleGeo, this.propMat, MAX_POLES);
    const bunting = new THREE.Mesh(this.buntingGeo, this.propMat); bunting.castShadow = true;
    const tufts = inst(this.tuftGeo, this.tuftMat, MAX_TUFTS, false);
    // W-beam guard rail: a ribbon per side (top/bottom edge per row), shown only along cliff edges
    const railGeo = new THREE.BufferGeometry();
    const rv = 2 * 2 * (ROWS + 1);
    railGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(rv * 3), 3));
    const rIdx = [];
    for (let side = 0; side < 2; side++) for (let j = 0; j < ROWS; j++) {
      const a = side * 2 * (ROWS + 1) + j * 2;
      rIdx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    railGeo.setIndex(rIdx);
    const rail = new THREE.Mesh(railGeo, this.railMat); rail.castShadow = true; rail.frustumCulled = false;
    const railPosts = inst(this.railPostGeo, this.railMat, MAX_POSTS);
    const group = new THREE.Group();
    group.add(terrain, road, trees, treesB, rocks, poles, bunting, tufts, rail, railPosts);
    group.visible = false;
    this.scene.add(group);
    return { group, terrain, road, trees, treesB, rocks, poles, bunting, tufts, rail, railPosts, index: -1, s0: 0 };
  }

  *build(ch, index) {
    ch.s0 = index * CHUNK_LEN;
    const s0 = ch.s0, nx = LAT.length;
    const g = ch.terrain.geometry;
    const pos = g.attributes.position.array, cols = g.attributes.color.array;
    const c = new THREE.Color(), sp = [0, 0, 0, 0], nv = new THREE.Vector3();
    const nrm = this.premium ? g.attributes.normal.array : null, spl = this.premium ? g.attributes.splat.array : null;
    for (let j = 0; j <= ROWS; j++) {
      const s = s0 + j * CHUNK_LEN / ROWS;
      const rx = roadX(s), ry = roadY(s);
      const xs = (roadX(s + 1) - roadX(s - 1)) / 2;
      for (let i = 0; i < nx; i++) {
        const u = LAT[i], k = j * nx + i;
        const rel = terrainRel(u, s);
        pos[k * 3] = rx + u; pos[k * 3 + 1] = ry + rel; pos[k * 3 + 2] = -s;
        const e = Math.max(1, Math.abs(u) * 0.04);
        const hu = (terrainRel(u + e, s) - terrainRel(u - e, s)) / (2 * e);
        const slope = Math.min(1, Math.abs(hu) * 0.8);
        terrainColor(u, s, rel, slope, c);
        cols[k * 3] = c.r; cols[k * 3 + 1] = c.g; cols[k * 3 + 2] = c.b;
        if (nrm) {
          // analytic normal from the height field, so chunk seams stay smooth
          const es = Math.max(1, Math.abs(u) * 0.02);
          const hs = (roadY(s + es) + terrainRel(u, s + es) - roadY(s - es) - terrainRel(u, s - es)) / (2 * es);
          nv.set(-hu, 1, hs - hu * xs).normalize();
          nrm[k * 3] = nv.x; nrm[k * 3 + 1] = nv.y; nrm[k * 3 + 2] = nv.z;
          terrainSplat(u, s, rel, Math.min(1, Math.max(slope, 1 - nv.y) ), sp);
          spl[k * 4] = sp[0]; spl[k * 4 + 1] = sp[1]; spl[k * 4 + 2] = sp[2]; spl[k * 4 + 3] = sp[3];
        }
      }
      if (j % 4 === 3) yield;
    }
    g.attributes.position.needsUpdate = g.attributes.color.needsUpdate = true;
    if (nrm) g.attributes.normal.needsUpdate = g.attributes.splat.needsUpdate = true;
    yield;

    // road ribbon
    const rg = ch.road.geometry, rp = rg.attributes.position.array, rnrm = rg.attributes.normal.array, ruv = rg.attributes.uv.array;
    const n = new THREE.Vector3();
    for (let j = 0; j <= ROWS; j++) {
      const s = s0 + j * CHUNK_LEN / ROWS, x = roadX(s), y = roadY(s) + 0.02;
      n.set(0, 2, roadY(s + 1) - roadY(s - 1)).normalize();
      for (let side = 0; side < 2; side++) {
        const k = j * 2 + side, u = side ? ROAD_HALF + 0.4 : -ROAD_HALF - 0.4;
        rp[k * 3] = x + u; rp[k * 3 + 1] = y; rp[k * 3 + 2] = -s;
        rnrm[k * 3] = n.x; rnrm[k * 3 + 1] = n.y; rnrm[k * 3 + 2] = n.z;
        ruv[k * 2] = side; ruv[k * 2 + 1] = s / 18;
      }
    }
    rg.attributes.position.needsUpdate = rg.attributes.normal.needsUpdate = rg.attributes.uv.needsUpdate = true;
    yield;

    // scenery
    const r = rng(index * 7919 + 13), m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), p = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    let t = 0, tb = 0;
    for (let tries = 0; tries < 1600 * THEME.trees && t < MAX_TREES; tries++) {
      const s = s0 + r() * CHUNK_LEN;
      const side = r() < 0.5 ? -1 : 1;
      const u = side * (ROAD_HALF + 4 + Math.pow(r(), 1.5) * 240);
      const rel = terrainRel(u, s);
      const slope = Math.abs(terrainRel(u + 1.5, s) - terrainRel(u - 1.5, s)) / 3;
      const dens = fbm(u * 0.012, s * 0.012, 2);
      // forests cluster in groves; none on cliffs, bare rock or above the snow line
      if (slope > 0.75 || rel > 130 || rel < -120 || dens < -0.05) continue;
      const k = 0.8 + r() * 0.9;
      q.setFromAxisAngle(up, r() * 6.28);
      m.compose(p.set(roadX(s) + u, roadY(s) + rel - 0.3, -s), q, sc.set(k, k * (0.85 + r() * 0.4), k));
      const tone = 0.85 + r() * 0.3;
      c.setRGB(tone, tone * (0.95 + r() * 0.1), tone);
      // the secondary species grows in its own patches
      if (fbm(u * 0.02 + 50, s * 0.02, 2) > 0.5 - this.treeMix && tb < (MAX_TREES >> 1)) { ch.treesB.setMatrixAt(tb, m); ch.treesB.setColorAt(tb++, c); }
      else { ch.trees.setMatrixAt(t, m); ch.trees.setColorAt(t, c); if (++t % 90 === 0) yield; }
    }
    ch.trees.count = ch.nTrees = t; ch.trees.instanceMatrix.needsUpdate = true; ch.trees.instanceColor.needsUpdate = true;
    ch.treesB.count = ch.nTreesB = tb; ch.treesB.instanceMatrix.needsUpdate = true; ch.treesB.instanceColor.needsUpdate = true;

    let rk = 0;
    for (let tries = 0; tries < 240 && rk < MAX_ROCKS; tries++) {
      const s = s0 + r() * CHUNK_LEN;
      const side = r() < 0.5 ? -1 : 1;
      const k = 0.5 + Math.pow(r(), 3) * 5;
      const u = side * (ROAD_HALF + 2.5 + k * 1.3 + Math.pow(r(), 2) * 110);
      q.setFromEuler(new THREE.Euler(r() * 0.5, r() * 6.28, r() * 0.5));
      m.compose(p.set(roadX(s) + u, terrainH(u, s) + k * 0.1, -s), q, sc.set(k, k * (0.6 + r() * 0.6), k * (0.8 + r() * 0.5)));
      ch.rocks.setMatrixAt(rk++, m);
    }
    ch.rocks.count = rk; ch.rocks.instanceMatrix.needsUpdate = true;
    yield;

    let tk = 0;
    for (let tries = 0; tries < 900 && tk < MAX_TUFTS; tries++) {
      const s = s0 + r() * CHUNK_LEN;
      const side = r() < 0.5 ? -1 : 1;
      const u = side * (ROAD_HALF + 1.6 + Math.pow(r(), 1.7) * 30);
      const rel = terrainRel(u, s);
      if (Math.abs(terrainRel(u + 1, s) - terrainRel(u - 1, s)) > 1.2 || fbm(u * 0.08, s * 0.08, 2) < -0.1) continue;
      const k = 0.7 + r() * 0.9;
      q.setFromAxisAngle(up, r() * 6.28);
      m.compose(p.set(roadX(s) + u, roadY(s) + rel - 0.05, -s), q, sc.set(k, k, k));
      ch.tufts.setMatrixAt(tk++, m);
    }
    ch.tufts.count = tk; ch.tufts.instanceMatrix.needsUpdate = true;

    const ra = ch.rail.geometry.attributes.position.array;
    let rpk = 0;
    for (let side = 0; side < 2; side++) {
      const sg = side ? 1 : -1, u = sg * (ROAD_HALF + 0.95);
      for (let j = 0; j <= ROWS; j++) {
        const s = s0 + j * CHUNK_LEN / ROWS, x = roadX(s) + u, y = roadY(s);
        const on = openness(sg, s) > 0.45 ? 1 : 0;
        const k = side * 2 * (ROWS + 1) + j * 2;
        const top = on ? 0.82 : -2, bot = on ? 0.5 : -2.2;
        ra[k * 3] = x; ra[k * 3 + 1] = y + top; ra[k * 3 + 2] = -s;
        ra[k * 3 + 3] = x; ra[k * 3 + 4] = y + bot; ra[k * 3 + 5] = -s;
        if (on && j % 2 === 0 && rpk < MAX_POSTS) { m.makeTranslation(x + sg * 0.08, y, -s); ch.railPosts.setMatrixAt(rpk++, m); }
      }
    }
    ch.rail.geometry.attributes.position.needsUpdate = true;
    ch.rail.geometry.computeVertexNormals();
    ch.railPosts.count = rpk; ch.railPosts.instanceMatrix.needsUpdate = true;

    // marker poles alternate sides every 14 m
    let pk = 0;
    for (let s = s0; s < s0 + CHUNK_LEN && pk < MAX_POLES; s += 14) {
      const side = pk & 1 ? 1 : -1, u = side * (ROAD_HALF + 1.2);
      q.setFromAxisAngle(up, -Math.atan((roadX(s + 1) - roadX(s - 1)) / 2) + Math.PI / 2);
      m.compose(p.set(roadX(s) + u, roadY(s), -s), q, sc.set(1, 1, 1));
      ch.poles.setMatrixAt(pk++, m);
    }
    ch.poles.count = pk; ch.poles.instanceMatrix.needsUpdate = true;
    const sb = s0 + 80;
    ch.bunting.position.set(roadX(sb), roadY(sb), -sb);
    ch.bunting.rotation.y = -Math.atan((roadX(sb + 1) - roadX(sb - 1)) / 2);
    ch.bunting.visible = index % 2 === 0;
  }

  // Near chunks get detailed trees and cast shadows (the shadow camera only covers ~60 m);
  // far chunks swap to light geometry and skip the shadow pass entirely.
  lod(sPlayer) {
    for (const ch of this.chunks) {
      if (ch.index < 0) continue;
      const s0 = ch.index * CHUNK_LEN, s1 = s0 + CHUNK_LEN;
      const shadow = s1 > sPlayer - 70 && s0 < sPlayer + 90;
      ch.group.visible = s1 > sPlayer - 40 || DEBUG_ORBIT;   // the camera never looks back down the hill
      for (const m of [ch.trees, ch.treesB, ch.rocks, ch.poles, ch.bunting, ch.rail, ch.railPosts]) m.castShadow = shadow;
      // small roadside props vanish into the haze far ahead; skip their draw calls there
      const farProps = s0 > sPlayer + 480;
      for (const m of [ch.tufts, ch.poles, ch.railPosts, ch.rocks]) m.visible = !farProps;
      ch.bunting.visible = !farProps && ch.index % 2 === 0;
      if (this.treeGeoFar) {
        const near = s0 < sPlayer + 110;
        ch.trees.geometry = near ? this.treeGeo : this.treeGeoFar;
        ch.treesB.geometry = near ? this.treeGeoB : this.treeGeoBFar;
        // instances are placed in random order, so a prefix is an even thinning of the forest
        const keep = (s0 > sPlayer + 700 ? 0.45 : s0 > sPlayer + 420 ? 0.7 : 1) * (HQ ? 1 : 0.55);
        ch.trees.count = Math.ceil(ch.nTrees * keep); ch.treesB.count = Math.ceil(ch.nTreesB * keep);
      }
    }
  }
  update(sPlayer, budgetMs = 2.5) {
    this.lod(sPlayer);
    const t0 = performance.now();
    while (performance.now() - t0 < budgetMs) {
      if (!this.job) {
        const first = Math.floor(sPlayer / CHUNK_LEN) - 1;
        const want = [];
        for (let i = first; i < first + 10; i++) want.push(i);
        for (const ch of this.chunks) if (ch.index !== -2 && !want.includes(ch.index)) { ch.index = -1; ch.group.visible = false; }
        const i = want.find(i => !this.chunks.some(c => c.index === i));
        if (i === undefined) return;
        let ch = this.chunks.find(c => c.index === -1);
        if (!ch) { ch = this._makeChunk(); this.chunks.push(ch); }
        ch.index = -2;
        this.job = { ch, i, it: this.build(ch, i) };
      }
      const r = this.job.it.next();
      if (r.done) { this.job.ch.index = this.job.i; this.job.ch.group.visible = true; this.job = null; }
    }
  }
  prime(sPlayer) { this.update(sPlayer, 1e9); }
  reset() { this.job = null; for (const ch of this.chunks) { ch.index = -1; ch.group.visible = false; } }
}
