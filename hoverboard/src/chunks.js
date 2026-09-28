// Streams terrain, road, scenery and trackside props in chunks along the track.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { ROAD_HALF, roadX, roadY, terrainRel, terrainH, terrainColor, lateralSamples, fbm } from './world.js';
import { THEME } from './theme.js';

export const CHUNK_LEN = 160;
const ROWS = 32;
const LAT = lateralSamples(20, 700);
const MAX_TREES = 360, MAX_ROCKS = 60, MAX_POLES = 24;

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
function pineGeometry() {
  const parts = [paint(new THREE.CylinderGeometry(0.16, 0.26, 2.4, 5).translate(0, 1.2, 0), col(THEME.trunk))];
  const dark = col(THEME.pine), light = col(THEME.pineLight), c = new THREE.Color();
  const tiers = 4;
  for (let i = 0; i < tiers; i++) {
    const t = i / (tiers - 1);
    const cone = new THREE.ConeGeometry(2.4 * (1 - t * 0.6), 3.2 - t * 0.9, 7, 1).translate(0, 2.6 + t * 3.1, 0).toNonIndexed();
    const pos = cone.attributes.position, a = new Float32Array(pos.count * 3);
    for (let v = 0; v < pos.count; v += 3) {
      // per-facet tone: upper tiers lighter, a little random variation per facet
      c.copy(dark).lerp(light, 0.1 + t * 0.4 + (Math.sin(v * 3.7 + i * 1.3) * 0.5 + 0.5) * 0.25);
      for (let k = 0; k < 3; k++) { a[(v + k) * 3] = c.r; a[(v + k) * 3 + 1] = c.g; a[(v + k) * 3 + 2] = c.b; }
    }
    cone.setAttribute('color', new THREE.BufferAttribute(a, 3));
    parts.push(cone);
  }
  return mergeGeometries(parts);
}
function rockGeometry(seed) {
  const g = new THREE.IcosahedronGeometry(1, 1);
  const pos = g.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    v.multiplyScalar(1 + fbm(v.x * 1.3 + seed, v.y * 1.3 + v.z * 0.7, 2) * 0.6); v.y *= 0.65;
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

export class ChunkManager {
  constructor(scene, tex) {
    this.scene = scene;
    this.chunks = [];
    this.terrainMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95, metalness: 0 });
    this.roadMat = new THREE.MeshStandardMaterial({
      map: tex.road, roughnessMap: tex.rough, roughness: 1, metalness: 0.1, envMapIntensity: 0.9,
    });
    this.treeGeo = pineGeometry();
    this.treeMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.9 });
    this.rockGeo = rockGeometry(3.1);
    this.rockMat = new THREE.MeshStandardMaterial({ color: THEME.rock, flatShading: true, roughness: 0.9 });
    this.poleGeo = poleGeometry();
    this.propMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, side: THREE.DoubleSide });
    this.buntingGeo = buntingGeometry();
    this.job = null;
  }

  _makeChunk() {
    const nx = LAT.length, ny = ROWS + 1;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nx * ny * 3), 3));
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(nx * ny * 3), 3));
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
    const rocks = inst(this.rockGeo, this.rockMat, MAX_ROCKS);
    const poles = inst(this.poleGeo, this.propMat, MAX_POLES);
    const bunting = new THREE.Mesh(this.buntingGeo, this.propMat); bunting.castShadow = true;
    const group = new THREE.Group();
    group.add(terrain, road, trees, rocks, poles, bunting);
    group.visible = false;
    this.scene.add(group);
    return { group, terrain, road, trees, rocks, poles, bunting, index: -1, s0: 0 };
  }

  *build(ch, index) {
    ch.s0 = index * CHUNK_LEN;
    const s0 = ch.s0, nx = LAT.length;
    const g = ch.terrain.geometry;
    const pos = g.attributes.position.array, cols = g.attributes.color.array;
    const c = new THREE.Color();
    for (let j = 0; j <= ROWS; j++) {
      const s = s0 + j * CHUNK_LEN / ROWS;
      const rx = roadX(s), ry = roadY(s);
      for (let i = 0; i < nx; i++) {
        const u = LAT[i], k = j * nx + i;
        const rel = terrainRel(u, s);
        pos[k * 3] = rx + u; pos[k * 3 + 1] = ry + rel; pos[k * 3 + 2] = -s;
        const e = Math.max(1, Math.abs(u) * 0.04);
        const slope = Math.min(1, Math.abs(terrainRel(u + e, s) - terrainRel(u - e, s)) / (2 * e) * 0.8);
        terrainColor(u, s, rel, slope, c);
        cols[k * 3] = c.r; cols[k * 3 + 1] = c.g; cols[k * 3 + 2] = c.b;
      }
      if (j % 4 === 3) yield;
    }
    g.attributes.position.needsUpdate = g.attributes.color.needsUpdate = true;
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
    let t = 0;
    for (let tries = 0; tries < 1600 && t < MAX_TREES; tries++) {
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
      m.compose(p.set(roadX(s) + u, roadY(s) + rel - 0.3, -s), q, sc.set(k, k * (0.85 + r() * 0.5), k));
      ch.trees.setMatrixAt(t, m);
      const tone = 0.85 + r() * 0.3;
      ch.trees.setColorAt(t, c.setRGB(tone, tone * (0.95 + r() * 0.1), tone));
      if (++t % 90 === 0) yield;
    }
    ch.trees.count = t; ch.trees.instanceMatrix.needsUpdate = true; ch.trees.instanceColor.needsUpdate = true;

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

  update(sPlayer, budgetMs = 2.5) {
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
