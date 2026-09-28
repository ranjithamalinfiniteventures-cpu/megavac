// Streams terrain, road, scenery and obstacles in chunks along the track.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {
  ROAD_HALF, roadX, roadY, terrainRel, terrainH, terrainColor, lateralSamples, fbm,
} from './world.js';

export const CHUNK_LEN = 160;
const ROWS = 40;            // samples along s per chunk
const LAT = lateralSamples(22, 650);
const MAX_TREES = 320, MAX_ROCKS = 70, MAX_POSTS = 20;

function rng(seed) {
  let t = seed >>> 0;
  return () => { t += 0x6D2B79F5; let r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; };
}

// ---------- procedural textures ----------
function canvasTex(size, draw, repeat = true) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}
function speckle(g, n, a, b, alpha) {
  for (let i = 0; i < n; i++) {
    const v = a + Math.random() * (b - a);
    g.fillStyle = `rgba(${v},${v},${v},${alpha})`;
    const r = Math.random() * 2 + 0.5;
    g.fillRect(Math.random() * g.canvas.width, Math.random() * g.canvas.height, r, r);
  }
}
export function makeTextures(grassImg) {
  const road = canvasTex(1024, (g, S) => {
    g.fillStyle = '#26272b'; g.fillRect(0, 0, S, S);
    speckle(g, 60000, 20, 90, 0.35);
    speckle(g, 6000, 120, 200, 0.25);
    // tyre-polish band in the middle
    const gr = g.createLinearGradient(0, 0, S, 0);
    gr.addColorStop(0.0, 'rgba(0,0,0,0.25)'); gr.addColorStop(0.3, 'rgba(0,0,0,0)');
    gr.addColorStop(0.7, 'rgba(0,0,0,0)'); gr.addColorStop(1.0, 'rgba(0,0,0,0.25)');
    g.fillStyle = gr; g.fillRect(0, 0, S, S);
    // edge lines
    g.fillStyle = '#d9d6cc'; g.fillRect(S * 0.035, 0, S * 0.012, S); g.fillRect(S * 0.953, 0, S * 0.012, S);
    // dashed centre
    g.fillStyle = '#e8b93a';
    for (let y = 0; y < S; y += S / 4) g.fillRect(S * 0.494, y, S * 0.012, S / 8);
    // cracks
    g.strokeStyle = 'rgba(10,10,12,0.5)'; g.lineWidth = 1.2;
    for (let i = 0; i < 40; i++) {
      let x = Math.random() * S, y = Math.random() * S; g.beginPath(); g.moveTo(x, y);
      for (let k = 0; k < 6; k++) { x += (Math.random() - 0.5) * 30; y += Math.random() * 25; g.lineTo(x, y); }
      g.stroke();
    }
  });
  const roadRough = canvasTex(512, (g, S) => {
    g.fillStyle = '#d8d8d8'; g.fillRect(0, 0, S, S); speckle(g, 30000, 120, 255, 0.5);
    g.fillStyle = '#a0a0a0'; g.fillRect(S * 0.035, 0, S * 0.012, S); g.fillRect(S * 0.953, 0, S * 0.012, S);
  });
  const detail = canvasTex(512, (g, S) => {
    g.fillStyle = '#808080'; g.fillRect(0, 0, S, S);
    speckle(g, 50000, 60, 200, 0.35);
  });
  let grass = null;
  if (grassImg) {
    grass = new THREE.Texture(grassImg); grass.needsUpdate = true;
    grass.wrapS = grass.wrapT = THREE.RepeatWrapping; grass.anisotropy = 8;
    grass.colorSpace = THREE.SRGBColorSpace;
  }
  road.colorSpace = THREE.SRGBColorSpace;
  return { road, roadRough, detail, grass };
}

// ---------- shared scenery geometry ----------
function pineGeometry() {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.12, 0.3, 3.2, 7); trunk.translate(0, 1.6, 0);
  parts.push(colorize(trunk, 0x3b2a1d));
  const N = 7;
  for (let l = 0; l < N; l++) {
    const t = l / (N - 1);
    const r = 2.9 * (1 - t * 0.82), h = 2.4 - t * 0.9, y = 2.2 + t * 7.0;
    const c = new THREE.ConeGeometry(r, h, 11, 2, true); c.translate(0, y, 0);
    const pos = c.attributes.position, col = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i), pz = pos.getZ(i), py = pos.getY(i);
      const rr = Math.hypot(px, pz) / r;
      const ang = Math.atan2(pz, px);
      const jag = 1 + 0.22 * Math.sin(ang * 5 + l * 1.7) + 0.1 * Math.sin(ang * 13 + l);
      pos.setX(i, px * jag); pos.setZ(i, pz * jag);
      pos.setY(i, py - rr * rr * 0.45);               // branches droop at the tips
      // darker inside and underneath, lighter at the tips and the top
      const k = 0.45 + 0.55 * rr * (0.6 + 0.4 * t);
      col[i * 3] = 0.045 * k; col[i * 3 + 1] = 0.11 * k; col[i * 3 + 2] = 0.06 * k;
    }
    c.setAttribute('color', new THREE.BufferAttribute(col, 3));
    c.computeVertexNormals();
    parts.push(c);
  }
  return mergeGeometries(parts.map(p => p.index ? p.toNonIndexed() : p));
}
function colorize(g, hex) {
  const c = new THREE.Color(hex), n = g.attributes.position.count, arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}
function rockGeometry(seed) {
  const g = new THREE.IcosahedronGeometry(1, 2);
  const pos = g.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n = fbm(v.x * 1.4 + seed, v.y * 1.4 + v.z * 0.7, 3);
    v.multiplyScalar(1 + n * 0.55); v.y *= 0.7;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

export class ChunkManager {
  constructor(scene, tex) {
    this.scene = scene;
    this.chunks = [];
    this.terrainMat = new THREE.MeshStandardMaterial({
      vertexColors: true, roughness: 0.95, metalness: 0,
      map: tex.grass, bumpMap: tex.grass, bumpScale: 3, // multiplied with vertex colour, gives micro detail
    });
    this.terrainMat.onBeforeCompile = (sh) => {
      // desaturate the grass map so it only adds texture, not colour; add macro variation
      sh.fragmentShader = sh.fragmentShader.replace('#include <map_fragment>', `
        #ifdef USE_MAP
          vec4 texelColor = texture2D( map, vMapUv );
          float lum = dot(texelColor.rgb, vec3(0.299,0.587,0.114));
          vec4 texel2 = texture2D( map, vMapUv * 0.13 );
          float lum2 = dot(texel2.rgb, vec3(0.299,0.587,0.114));
          diffuseColor.rgb *= mix(vec3(lum * 2.6), texelColor.rgb * 2.2, 0.35) * (0.7 + lum2 * 1.3);
        #endif`);
    };
    this.roadMat = new THREE.MeshStandardMaterial({
      map: tex.road, roughnessMap: tex.roadRough, roughness: 0.85, metalness: 0.05,
    });
    this.treeGeo = pineGeometry();
    this.treeMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, side: THREE.DoubleSide });
    this.rockGeo = rockGeometry(3.1);
    this.rockMat = new THREE.MeshStandardMaterial({ color: 0x77706a, roughness: 0.92, map: tex.detail });
    // guard-rail posts with glowing reflectors
    const post = new THREE.BoxGeometry(0.22, 1.1, 0.22); post.translate(0, 0.55, 0);
    this.postGeo = post; this.postMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, roughness: 0.5 });
    const refl = new THREE.BoxGeometry(0.24, 0.18, 0.24); refl.translate(0, 0.95, 0);
    this.reflGeo = refl; this.reflMat = new THREE.MeshStandardMaterial({ color: 0x331100, emissive: 0xff7a1a, emissiveIntensity: 4 });
    this.nextIndex = 0;
  }

  _makeChunk() {
    const nx = LAT.length, ny = ROWS + 1;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nx * ny * 3), 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(nx * ny * 3), 3));
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(nx * ny * 3), 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(nx * ny * 2), 2));
    const idx = [];
    for (let j = 0; j < ROWS; j++) for (let i = 0; i < nx - 1; i++) {
      const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
      idx.push(a, b, c, b, d, c);
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

    const trees = new THREE.InstancedMesh(this.treeGeo, this.treeMat, MAX_TREES);
    trees.castShadow = true; trees.receiveShadow = true; trees.frustumCulled = false;
    trees.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_TREES * 3), 3);
    const rocks = new THREE.InstancedMesh(this.rockGeo, this.rockMat, MAX_ROCKS);
    rocks.castShadow = true; rocks.receiveShadow = true; rocks.frustumCulled = false;
    const posts = new THREE.InstancedMesh(this.postGeo, this.postMat, MAX_POSTS * 2);
    const refl = new THREE.InstancedMesh(this.reflGeo, this.reflMat, MAX_POSTS * 2);
    posts.frustumCulled = refl.frustumCulled = false; posts.castShadow = true;
    const group = new THREE.Group();
    group.add(terrain, road, trees, rocks, posts, refl);
    this.scene.add(group);
    return { group, terrain, road, trees, rocks, posts, refl, index: -1, s0: 0 };
  }

  *build(ch, index) {
    ch.s0 = index * CHUNK_LEN;
    const s0 = ch.s0, nx = LAT.length;
    const g = ch.terrain.geometry;
    const pos = g.attributes.position.array, nor = g.attributes.normal.array, col = g.attributes.color.array, uv = g.attributes.uv.array;
    const c = new THREE.Color(), tu = new THREE.Vector3(), ts = new THREE.Vector3(), n = new THREE.Vector3();
    const P = (u, s) => new THREE.Vector3(roadX(s) + u, terrainH(u, s), -s);
    for (let j = 0; j <= ROWS; j++) {
      const s = s0 + j * CHUNK_LEN / ROWS;
      for (let i = 0; i < nx; i++) {
        const u = LAT[i], k = j * nx + i;
        const rel = terrainRel(u, s);
        const x = roadX(s) + u, y = roadY(s) + rel, z = -s;
        pos[k * 3] = x; pos[k * 3 + 1] = y; pos[k * 3 + 2] = z;
        const e = Math.max(0.8, Math.abs(u) * 0.03);
        tu.subVectors(P(u + e, s), P(u - e, s)); ts.subVectors(P(u, s - e), P(u, s + e));
        n.crossVectors(ts, tu).normalize(); if (n.y < 0) n.negate();
        nor[k * 3] = n.x; nor[k * 3 + 1] = n.y; nor[k * 3 + 2] = n.z;
        terrainColor(u, s, rel, 1 - n.y, c);
        col[k * 3] = c.r; col[k * 3 + 1] = c.g; col[k * 3 + 2] = c.b;
        uv[k * 2] = x / 9; uv[k * 2 + 1] = z / 9;
      }
      if (j % 4 === 3) yield;
    }
    g.attributes.position.needsUpdate = g.attributes.normal.needsUpdate = g.attributes.color.needsUpdate = g.attributes.uv.needsUpdate = true;

    // road ribbon
    const rg = ch.road.geometry, rp = rg.attributes.position.array, rnrm = rg.attributes.normal.array, ruv = rg.attributes.uv.array;
    for (let j = 0; j <= ROWS; j++) {
      const s = s0 + j * CHUNK_LEN / ROWS, x = roadX(s), y = roadY(s) + 0.02;
      const dy = roadY(s + 1) - roadY(s - 1);
      n.set(0, 2, dy).normalize();
      for (let side = 0; side < 2; side++) {
        const k = j * 2 + side, u = side ? ROAD_HALF + 0.4 : -ROAD_HALF - 0.4;
        rp[k * 3] = x + u; rp[k * 3 + 1] = y; rp[k * 3 + 2] = -s;
        rnrm[k * 3] = n.x; rnrm[k * 3 + 1] = n.y; rnrm[k * 3 + 2] = n.z;
        ruv[k * 2] = side; ruv[k * 2 + 1] = s / 22;
      }
    }
    rg.attributes.position.needsUpdate = rg.attributes.normal.needsUpdate = rg.attributes.uv.needsUpdate = true;

    yield;
    // scenery
    const r = rng(index * 7919 + 13), m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), p = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    let t = 0;
    for (let tries = 0; tries < 1400 && t < MAX_TREES; tries++) {
      const s = s0 + r() * CHUNK_LEN;
      const side = r() < 0.5 ? -1 : 1;
      const u = side * (ROAD_HALF + 5 + Math.pow(r(), 1.6) * 260);
      const h = terrainH(u, s);
      const e = 1.5;
      const slope = Math.abs(terrainH(u + e, s) - terrainH(u - e, s)) / (2 * e);
      const rel = h - roadY(s);
      const dens = fbm(u * 0.012, s * 0.012, 2);
      if (slope > 0.85 || rel > 150 || dens < -0.15) continue;
      const k = 0.7 + r() * 0.9;
      q.setFromAxisAngle(up, r() * 6.28);
      m.compose(p.set(roadX(s) + u, h - 0.3, -s), q, sc.set(k, k * (0.85 + r() * 0.5), k));
      ch.trees.setMatrixAt(t, m);
      c.setRGB(0.8 + r() * 0.5, 0.85 + r() * 0.4, 0.8 + r() * 0.3);
      ch.trees.setColorAt(t, c);
      t++;
      if (t % 80 === 0) yield;
    }
    ch.trees.count = t; yield; ch.trees.instanceMatrix.needsUpdate = true; ch.trees.instanceColor.needsUpdate = true;

    let rk = 0;
    for (let tries = 0; tries < 300 && rk < MAX_ROCKS; tries++) {
      const s = s0 + r() * CHUNK_LEN;
      const side = r() < 0.5 ? -1 : 1;
      const k = 0.5 + Math.pow(r(), 3) * 6;
      const u = side * (ROAD_HALF + 2.5 + k * 1.3 + Math.pow(r(), 2) * 120);
      q.setFromEuler(new THREE.Euler(r() * 0.5, r() * 6.28, r() * 0.5));
      m.compose(p.set(roadX(s) + u, terrainH(u, s) + k * 0.1, -s), q, sc.set(k, k * (0.6 + r() * 0.6), k * (0.8 + r() * 0.5)));
      ch.rocks.setMatrixAt(rk++, m);
    }
    ch.rocks.count = rk; ch.rocks.instanceMatrix.needsUpdate = true;

    let pk = 0;
    for (let s = s0; s < s0 + CHUNK_LEN && pk < MAX_POSTS * 2; s += 16) {
      for (const side of [-1, 1]) {
        const u = side * (ROAD_HALF + 0.9);
        m.makeTranslation(roadX(s) + u, roadY(s), -s);
        ch.posts.setMatrixAt(pk, m); ch.refl.setMatrixAt(pk, m); pk++;
      }
    }
    ch.posts.count = ch.refl.count = pk;
    ch.posts.instanceMatrix.needsUpdate = ch.refl.instanceMatrix.needsUpdate = true;
  }

  update(sPlayer, budgetMs = 2.5) {
    const t0 = performance.now();
    while (performance.now() - t0 < budgetMs) {
      if (!this.job) {
        const first = Math.floor(sPlayer / CHUNK_LEN) - 1;
        const want = [];
        for (let i = first; i < first + 9; i++) want.push(i);
        for (const ch of this.chunks) if (ch.index !== -2 && !want.includes(ch.index)) { ch.index = -1; ch.group.visible = false; }
        const i = want.find(i => !this.chunks.some(c => c.index === i));
        if (i === undefined) return;
        let ch = this.chunks.find(c => c.index === -1);
        if (!ch) { ch = this._makeChunk(); this.chunks.push(ch); }
        ch.index = -2; ch.group.visible = false;       // building
        this.job = { ch, i, it: this.build(ch, i) };
      }
      const r = this.job.it.next();
      if (r.done) { this.job.ch.index = this.job.i; this.job.ch.group.visible = true; this.job = null; }
    }
  }
  prime(sPlayer) { this.update(sPlayer, 1e9); }
  reset() { this.job = null; for (const ch of this.chunks) { ch.index = -1; ch.group.visible = false; } }
}
