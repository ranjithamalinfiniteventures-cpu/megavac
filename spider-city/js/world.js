// City generation, collision, sky and day/night lighting.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const N = 10, BLOCK = 60, ROAD = 16, P = BLOCK + ROAD, HALF = N * P / 2;
export const LANE = 4;
export const roadAt = k => -HALF + k * P;
export const AIR = { x0: HALF + 90, x1: HALF + 690, z: 0, w: 44 };
export const ISLAND = { x0: -HALF - 70, x1: AIR.x1 + 70, z0: -HALF - 70, z1: HALF + 70 };
export const onIsland = (x, z) => x > ISLAND.x0 && x < ISLAND.x1 && z > ISLAND.z0 && z < ISLAND.z1;

export function rng(seed) {
  return () => {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Axis-aligned boxes in a uniform grid. Everything solid in the city is one of these.
export class Collision {
  constructor(cell = 25) {
    this.cell = cell; this.boxes = []; this.grid = new Map(); this.stamp = 0; this.out = [];
    this.lastBox = null;
  }
  _k(ix, iz) { return (ix + 512) * 1024 + (iz + 512); }
  add(minX, minY, minZ, maxX, maxY, maxZ, tag = 'bld') {
    const b = { minX, minY, minZ, maxX, maxY, maxZ, tag, s: 0, mn: [minX, minY, minZ], mx: [maxX, maxY, maxZ] };
    this.boxes.push(b);
    const c = this.cell;
    for (let ix = Math.floor(minX / c); ix <= Math.floor(maxX / c); ix++)
      for (let iz = Math.floor(minZ / c); iz <= Math.floor(maxZ / c); iz++) {
        const k = this._k(ix, iz);
        let a = this.grid.get(k);
        if (!a) this.grid.set(k, a = []);
        a.push(b);
      }
    return b;
  }
  // Returns a shared array: do not call query again while iterating it.
  query(minX, minZ, maxX, maxZ) {
    const out = this.out; out.length = 0;
    const s = ++this.stamp, c = this.cell;
    for (let ix = Math.floor(minX / c); ix <= Math.floor(maxX / c); ix++)
      for (let iz = Math.floor(minZ / c); iz <= Math.floor(maxZ / c); iz++) {
        const a = this.grid.get(this._k(ix, iz));
        if (!a) continue;
        for (const b of a) {
          if (b.s === s) continue;
          b.s = s;
          if (b.maxX >= minX && b.minX <= maxX && b.maxZ >= minZ && b.minZ <= maxZ) out.push(b);
        }
      }
    return out;
  }
  // Highest walkable surface under (x,z) that is no more than `tol` above y.
  groundAt(x, z, y, tol = 0.6) {
    let h = onIsland(x, z) ? 0 : -8;
    for (const b of this.query(x, z, x, z))
      if (x >= b.minX && x <= b.maxX && z >= b.minZ && z <= b.maxZ && b.maxY <= y + tol && b.maxY > h) h = b.maxY;
    return h;
  }
  // Push a vertical cylinder (feet at y, height h) out of every box taller than y+step.
  pushCircle(p, r, y, h, step, outN) {
    let hit = false;
    const list = this.query(p.x - r, p.z - r, p.x + r, p.z + r);
    for (const b of list) {
      if (b.maxY <= y + step || b.minY >= y + h) continue;
      const cx = Math.max(b.minX, Math.min(p.x, b.maxX)), cz = Math.max(b.minZ, Math.min(p.z, b.maxZ));
      let dx = p.x - cx, dz = p.z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 >= r * r) continue;
      if (d2 > 1e-10) {
        const d = Math.sqrt(d2); dx /= d; dz /= d;
        p.x = cx + dx * r; p.z = cz + dz * r;
      } else {
        const pen = [p.x - b.minX, b.maxX - p.x, p.z - b.minZ, b.maxZ - p.z];
        let m = 0; for (let i = 1; i < 4; i++) if (pen[i] < pen[m]) m = i;
        dx = m === 0 ? -1 : m === 1 ? 1 : 0; dz = m === 2 ? -1 : m === 3 ? 1 : 0;
        if (m === 0) p.x = b.minX - r; else if (m === 1) p.x = b.maxX + r;
        else if (m === 2) p.z = b.minZ - r; else p.z = b.maxZ + r;
      }
      outN.set(dx, 0, dz); this.lastBox = b; hit = true;
    }
    return hit;
  }
  pointInside(x, y, z) {
    for (const b of this.query(x, z, x, z))
      if (x > b.minX && x < b.maxX && z > b.minZ && z < b.maxZ && y > b.minY && y < b.maxY) return b;
    return null;
  }
  raycast(o, d, maxD, ground = true) {
    let best = maxD, ax = -1, sg = 0, box = null;
    const O = [o.x, o.y, o.z], D = [d.x, d.y, d.z];
    for (const b of this.boxes) {
      let t0 = 0, t1 = best, a0 = -1, s0 = 0, ok = true;
      for (let a = 0; a < 3; a++) {
        if (Math.abs(D[a]) < 1e-9) {
          if (O[a] < b.mn[a] || O[a] > b.mx[a]) { ok = false; break; }
          continue;
        }
        let ta = (b.mn[a] - O[a]) / D[a], tb = (b.mx[a] - O[a]) / D[a], s = -1;
        if (ta > tb) { const t = ta; ta = tb; tb = t; s = 1; }
        if (ta > t0) { t0 = ta; a0 = a; s0 = s; }
        if (tb < t1) t1 = tb;
        if (t0 > t1) { ok = false; break; }
      }
      if (!ok || a0 < 0) continue;
      best = t0; ax = a0; sg = s0; box = b;
    }
    if (ground && d.y < -1e-6) {
      const t = -o.y / d.y;
      if (t > 0 && t < best && onIsland(o.x + d.x * t, o.z + d.z * t)) { best = t; ax = 1; sg = 1; box = null; }
    }
    if (ax < 0) return null;
    return {
      dist: best,
      point: new THREE.Vector3(o.x + d.x * best, o.y + d.y * best, o.z + d.z * best),
      normal: new THREE.Vector3(ax === 0 ? sg : 0, ax === 1 ? sg : 0, ax === 2 ? sg : 0),
      box,
    };
  }
}

function noiseTexture(size, base, spread, repeat) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d'); const img = g.createImageData(size, size);
  for (let i = 0; i < size * size; i++) {
    const v = base + (Math.random() - 0.5) * spread;
    img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat, repeat);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

function glowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,220,160,1)'); gr.addColorStop(0.4, 'rgba(255,190,110,0.45)'); gr.addColorStop(1, 'rgba(255,170,90,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export class World {
  constructor(scene, renderer) {
    this.scene = scene; this.renderer = renderer;
    this.col = new Collision();
    this.rand = rng(20261018);
    this.time = 0.36; this.night = 0; this.autoTime = true;
    this.uniforms = { uNight: { value: 0 }, uTime: { value: 0 } };
    this.buildings = []; this.tops = []; this.parks = []; this.tokens = [];
    this.marks = []; this.blinkers = [];
    this.unitBox = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this._lights(); this._sky(); this._ground(); this._city(); this._airfield();
    this._buildMarks(); this._clouds(); this._tokens();
    this._envT = -1;
    this.setTime(this.time);
  }

  // ---------- helpers ----------
  _inst(list, mat, geo = this.unitBox, cast = true, recv = true) {
    const m = new THREE.InstancedMesh(geo, mat, Math.max(1, list.length));
    const o = new THREE.Object3D(), c = new THREE.Color();
    list.forEach((b, i) => {
      o.position.set(b.x, b.y || 0, b.z); o.rotation.set(0, b.ry || 0, 0);
      o.scale.set(b.w, b.h, b.d); o.updateMatrix();
      m.setMatrixAt(i, o.matrix); m.setColorAt(i, c.set(b.c ?? 0xffffff));
    });
    m.count = list.length;
    m.castShadow = cast; m.receiveShadow = recv; m.frustumCulled = false;
    this.scene.add(m);
    return m;
  }

  _buildingMaterial() {
    const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.82, metalness: 0.05 });
    const U = this.uniforms;
    m.onBeforeCompile = s => {
      s.uniforms.uNight = U.uNight;
      s.vertexShader = s.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nvarying vec3 vWNrm;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          vec4 bwp = vec4(transformed, 1.0); vec3 bwn = objectNormal;
          #ifdef USE_INSTANCING
            bwp = instanceMatrix * bwp; bwn = mat3(instanceMatrix) * bwn;
          #endif
          bwp = modelMatrix * bwp; vWPos = bwp.xyz; vWNrm = normalize(mat3(modelMatrix) * bwn);`);
      s.fragmentShader = s.fragmentShader
        .replace('#include <common>', `#include <common>
          varying vec3 vWPos; varying vec3 vWNrm; uniform float uNight;
          float bh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`)
        .replace('#include <color_fragment>', `#include <color_fragment>
          vec3 bn = normalize(vWNrm);
          float wall = 1.0 - step(0.5, abs(bn.y));
          bool xFace = abs(bn.x) > 0.5;
          float fu = xFace ? vWPos.z : vWPos.x;
          float fk = xFace ? vWPos.x : vWPos.z;
          vec2 cell = vec2(fu / 3.0, vWPos.y / 3.5);
          vec2 cf = fract(cell); vec2 ci = floor(cell);
          float upper = step(1.0, ci.y);
          float win = step(0.17, cf.x) * step(cf.x, 0.83) * step(0.24, cf.y) * step(cf.y, 0.86) * wall * upper;
          float shop = step(0.06, cf.x) * step(cf.x, 0.94) * step(0.08, cf.y) * step(cf.y, 0.72) * wall * (1.0 - upper);
          float seed = bh(ci + vec2(floor(fk * 0.37), bn.x * 7.0 + bn.z * 13.0));
          vec3 glass = mix(vec3(0.07, 0.10, 0.15), vec3(0.30, 0.40, 0.52), seed * 0.6);
          diffuseColor.rgb *= mix(0.55, 1.0, smoothstep(0.0, 9.0, vWPos.y));
          diffuseColor.rgb *= mix(1.0, 0.6, step(0.5, bn.y));
          diffuseColor.rgb = mix(diffuseColor.rgb, glass, win);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.06, 0.07), shop);
          float lit = step(0.56, seed) * win;
          vec3 winEm = (lit * mix(vec3(1.0, 0.72, 0.42), vec3(0.65, 0.85, 1.0), step(0.85, seed)) * (0.9 + fract(seed * 37.0) * 0.9)
                       + shop * vec3(1.0, 0.8, 0.5) * 1.1) * uNight;`)
        .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
          roughnessFactor = mix(roughnessFactor, 0.06, clamp(win + shop, 0.0, 1.0));`)
        .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>
          metalnessFactor = mix(metalnessFactor, 0.75, win);`)
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
          totalEmissiveRadiance += winEm;`);
    };
    return m;
  }

  // ---------- lights / sky ----------
  _lights() {
    this.hemi = new THREE.HemisphereLight(0xbfd8ff, 0x4a3f35, 0.8);
    this.scene.add(this.hemi);
    const sun = this.sun = new THREE.DirectionalLight(0xffffff, 3);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera; sc.left = -140; sc.right = 140; sc.top = 140; sc.bottom = -140; sc.near = 1; sc.far = 900;
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.6;
    this.scene.add(sun); this.scene.add(sun.target);
    this.sunDir = new THREE.Vector3();
  }

  _sky() {
    const skyMat = this.skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: {
        top: { value: new THREE.Color() }, horizon: { value: new THREE.Color() }, bottom: { value: new THREE.Color(0x1d2a33) },
        sunDir: { value: new THREE.Vector3(0, 1, 0) }, sunColor: { value: new THREE.Color(1, 0.9, 0.7) }, night: { value: 0 },
      },
      vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,
      fragmentShader: `uniform vec3 top, horizon, bottom, sunDir, sunColor; uniform float night; varying vec3 vDir;
        void main(){
          vec3 d = normalize(vDir); float h = d.y;
          vec3 col = mix(horizon, top, pow(clamp(h, 0.0, 1.0), 0.55));
          col = mix(col, bottom, clamp(-h * 5.0, 0.0, 1.0));
          float sd = max(dot(d, sunDir), 0.0);
          col += sunColor * (pow(sd, 900.0) * 10.0 + pow(sd, 18.0) * 0.45 + pow(sd, 3.0) * 0.12) * (1.0 - night * 0.9);
          float md = max(dot(d, -sunDir), 0.0);
          col += vec3(0.85, 0.9, 1.0) * (pow(md, 3000.0) * 3.0 + pow(md, 60.0) * 0.04) * night;
          vec3 sp = floor(d * 700.0);
          float s = fract(sin(dot(sp, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
          col += step(0.9993, s) * night * smoothstep(0.02, 0.25, h) * (0.35 + fract(s * 91.0) * 0.9);
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(3000, 32, 16), skyMat);
    this.sky.frustumCulled = false; this.sky.renderOrder = -1;
    this.scene.add(this.sky);
    this.envScene = new THREE.Scene();
    this.envSky = new THREE.Mesh(this.sky.geometry, skyMat);
    this.envScene.add(this.envSky);
    this.scene.fog = new THREE.FogExp2(0xaaccee, 0.0016);
  }

  setTime(t) {
    this.time = ((t % 1) + 1) % 1;
    const ang = (this.time - 0.25) * Math.PI * 2;
    const sd = this.sunDir.set(Math.cos(ang), Math.sin(ang), 0.4).normalize();
    const e = sd.y;
    const day = smooth(-0.1, 0.3, e);
    const night = this.night = 1 - smooth(-0.22, 0.04, e);
    const gold = Math.exp(-Math.pow((e - 0.04) / 0.16, 2));
    const C = (r, g, b) => new THREE.Color(r, g, b);
    const top = C(0.008, 0.012, 0.035).lerp(C(0.13, 0.36, 0.82), day).lerp(C(0.28, 0.24, 0.48), gold * 0.55);
    const hor = C(0.03, 0.045, 0.09).lerp(C(0.62, 0.78, 0.95), day).lerp(C(1.0, 0.52, 0.28), gold * 0.75);
    const u = this.skyMat.uniforms;
    u.top.value.copy(top); u.horizon.value.copy(hor); u.sunDir.value.copy(sd); u.night.value = night;
    u.sunColor.value.copy(C(1, 0.92, 0.75).lerp(C(1, 0.45, 0.15), gold));
    u.bottom.value.copy(hor).multiplyScalar(0.35);
    this.scene.fog.color.copy(hor).lerp(top, 0.15);
    this.fogBase = 0.0011 + night * 0.0005 + gold * 0.0003;
    this.scene.fog.density = this.fogBase;
    // sun by day, moon by night
    if (e > -0.05) {
      this.sun.color.copy(C(1, 0.95, 0.85).lerp(C(1, 0.55, 0.25), gold));
      this.sun.intensity = 3.2 * smooth(-0.05, 0.12, e);
      this.lightDir = sd.clone();
    } else {
      this.sun.color.set(0x8fa8ff);
      this.sun.intensity = 0.45 * smooth(-0.05, -0.25, e);
      this.lightDir = sd.clone().negate();
    }
    this.hemi.color.copy(top).lerp(C(1, 1, 1), 0.35);
    this.hemi.groundColor.set(0x4a3f35).multiplyScalar(0.4 + day * 0.6);
    this.hemi.intensity = 0.35 + day * 0.65;
    this.uniforms.uNight.value = night;
    if (this.lampMat) this.lampMat.emissiveIntensity = night * 4;
    if (this.glowMat) this.glowMat.opacity = night * 0.3;
    if (this.neonMat) this.neonMat.color.setScalar(0.7 + night * 2.6);
    if (this.edgeMat) this.edgeMat.color.setScalar(0.4 + night * 3);
    this.renderer.toneMappingExposure = 1.0 + night * 0.1;
    if (Math.abs(this.time - this._envT) > 0.012) this._updateEnv();
  }

  _updateEnv() {
    this._envT = this.time;
    const rt = this.pmrem.fromScene(this.envScene, 0, 1, 5000);
    if (this.envRT) this.envRT.dispose();
    this.envRT = rt; this.scene.environment = rt.texture;
  }

  // ---------- ground / water ----------
  _ground() {
    const s = this.scene;
    const asph = new THREE.Mesh(new THREE.PlaneGeometry(2 * HALF + ROAD, 2 * HALF + ROAD).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0x45474d, roughness: 0.92, map: noiseTexture(128, 150, 70, 120) }));
    asph.receiveShadow = true; s.add(asph);
    const w = ISLAND.x1 - ISLAND.x0, d = ISLAND.z1 - ISLAND.z0, cx = (ISLAND.x0 + ISLAND.x1) / 2, cz = (ISLAND.z0 + ISLAND.z1) / 2;
    const grass = new THREE.Mesh(new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0x6f9e48, roughness: 1, map: noiseTexture(128, 160, 90, 160) }));
    grass.position.set(cx, -0.06, cz); grass.receiveShadow = true; s.add(grass);
    const sand = new THREE.Mesh(new THREE.PlaneGeometry(w + 50, d + 50).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0xdcc890, roughness: 1, map: noiseTexture(128, 170, 60, 160) }));
    sand.position.set(cx, -0.4, cz); sand.receiveShadow = true; s.add(sand);
    // low-poly animated sea
    const wg = new THREE.PlaneGeometry(9000, 9000, 180, 180).rotateX(-Math.PI / 2);
    const wm = new THREE.MeshStandardMaterial({ color: 0x1b6f8f, roughness: 0.12, metalness: 0.15, flatShading: true });
    const U = this.uniforms;
    wm.onBeforeCompile = sh => {
      sh.uniforms.uTime = U.uTime;
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          vec2 wp = (modelMatrix * vec4(transformed, 1.0)).xz;
          transformed.y += sin(wp.x * 0.045 + uTime * 1.1) * 0.7 + cos(wp.y * 0.06 + uTime * 0.8) * 0.6 + sin((wp.x + wp.y) * 0.11 + uTime * 1.7) * 0.25;`);
    };
    const water = this.water = new THREE.Mesh(wg, wm);
    water.position.set(cx, -1.6, cz); water.receiveShadow = true; s.add(water);
  }

  // ---------- city ----------
  _city() {
    const R = this.rand, col = this.col;
    const B = [], T = [], S = [], trees = [], neon = [], lampPos = [], tanks = [], ponds = [];
    const palette = [0xd9cbb3, 0xc4a484, 0xa8b4c0, 0x8c9aa8, 0xe6e0d4, 0xb86f52, 0x9b6a4e, 0x7d8c96, 0xcfd8dc, 0x5e6b78, 0xe8d5b5, 0x6f7f8f, 0xc9b79c, 0x94a3a8];
    const neonCols = [0xff2a6d, 0x05d9e8, 0xffd319, 0x7cff4f, 0xb967ff];
    const parks = new Set(['4,5', '5,5', '1,2', '8,1', '2,8', '7,7', '0,6', '9,4']);
    const darker = c => new THREE.Color(c).multiplyScalar(0.62).getHex();

    const addTier = (x, z, w, d, y, h, c) => {
      B.push({ x, z, w, d, y, h, c });
      T.push({ x, z, w: w + 0.7, d: d + 0.7, y: y + h, h: 0.8, c: darker(c) });
      col.add(x - w / 2, 0, z - d / 2, x + w / 2, y + h + 0.8, z + d / 2);
      return y + h + 0.8;
    };
    const roofProps = (x, z, w, d, top, h) => {
      const n = 1 + Math.floor(R() * 3);
      for (let k = 0; k < n; k++) {
        const pw = 2 + R() * 3, pd = 2 + R() * 3, ph = 1.2 + R() * 1.6;
        const px = x + (R() - 0.5) * Math.max(0, w - pw - 2), pz = z + (R() - 0.5) * Math.max(0, d - pd - 2);
        T.push({ x: px, z: pz, w: pw, d: pd, y: top, h: ph, c: 0x9a9da0 });
        col.add(px - pw / 2, top, pz - pd / 2, px + pw / 2, top + ph, pz + pd / 2, 'prop');
      }
      if (h > 18 && h < 70 && R() < 0.35 && w > 12) {
        const px = x + w * 0.25, pz = z - d * 0.25;
        tanks.push({ x: px, z: pz, y: top });
        col.add(px - 2, top, pz - 2, px + 2, top + 8.5, pz + 2, 'prop');
      }
      if (R() < 0.16 && h < 90) {
        const nw = Math.min(w * 0.8, 16), alongX = R() < 0.5;
        const nx = alongX ? x : x + w / 2 - 1.5, nz = alongX ? z + d / 2 - 1.5 : z;
        neon.push({ x: nx, z: nz, y: top + 1, w: alongX ? nw : 0.5, h: 3.5, d: alongX ? 0.5 : nw, c: neonCols[Math.floor(R() * neonCols.length)] });
        T.push({ x: nx, z: nz, w: alongX ? nw : 0.3, d: alongX ? 0.3 : nw, y: top, h: 1, c: 0x333333 });
      }
      if (h > 100) {
        const ax = x + w * 0.3, az = z + d * 0.3;
        T.push({ x: ax, z: az, w: 0.6, d: 0.6, y: top, h: 22, c: 0x777777 });
        col.add(ax - 0.3, top, az - 0.3, ax + 0.3, top + 22, az + 0.3, 'prop');
        this.blinkers.push(new THREE.Vector3(ax, top + 22.5, az));
      }
    };

    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const x0 = roadAt(i) + ROAD / 2, x1 = roadAt(i + 1) - ROAD / 2, z0 = roadAt(j) + ROAD / 2, z1 = roadAt(j + 1) - ROAD / 2;
      const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
      S.push({ x: cx, z: cz, w: BLOCK, d: BLOCK, h: 0.25, c: 0xa2a29c });
      col.add(x0, 0, z0, x1, 0.25, z1, 'walk');
      // street lamps mid-block on each side, arm pointing at the road
      lampPos.push([cx, z0 + 0.8, 0, -1], [cx, z1 - 0.8, 0, 1], [x0 + 0.8, cz, -1, 0], [x1 - 0.8, cz, 1, 0]);
      const dist = Math.min(1, Math.hypot(cx, cz) / HALF);
      if (parks.has(i + ',' + j)) {
        S.push({ x: cx, z: cz, w: BLOCK - 7, d: BLOCK - 7, h: 0.32, c: 0x5f9a3e });
        this.parks.push({ x0: x0 + 3.5, z0: z0 + 3.5, x1: x1 - 3.5, z1: z1 - 3.5 });
        ponds.push({ x: cx + (R() - 0.5) * 16, z: cz + (R() - 0.5) * 16, r: 7 + R() * 5 });
        for (let k = 0; k < 22; k++) {
          const tx = x0 + 6 + R() * (BLOCK - 12), tz = z0 + 6 + R() * (BLOCK - 12);
          const p = ponds[ponds.length - 1];
          if (Math.hypot(tx - p.x, tz - p.z) < p.r + 2) continue;
          trees.push({ x: tx, z: tz, y: 0.32, s: 0.8 + R() * 0.7 });
        }
        continue;
      }
      // sidewalk trees
      for (let k = 0; k < 4; k++) if (R() < 0.5) {
        const t = -20 + k * 13;
        trees.push({ x: cx + t, z: z0 + 1.6, y: 0.25, s: 0.55 + R() * 0.3 });
      }
      const inset = 4.5, ix0 = x0 + inset, ix1 = x1 - inset, iz0 = z0 + inset, iz1 = z1 - inset;
      const lots = [];
      const r = R();
      if (dist < 0.4 && r < 0.6) lots.push([ix0, iz0, ix1, iz1]);
      else if (r < 0.5) {
        const mid = R() < 0.5;
        const sp = 0.35 + R() * 0.3;
        if (mid) { const xm = ix0 + (ix1 - ix0) * sp; lots.push([ix0, iz0, xm - 1.5, iz1], [xm + 1.5, iz0, ix1, iz1]); }
        else { const zm = iz0 + (iz1 - iz0) * sp; lots.push([ix0, iz0, ix1, zm - 1.5], [ix0, zm + 1.5, ix1, iz1]); }
      } else {
        const xm = (ix0 + ix1) / 2, zm = (iz0 + iz1) / 2;
        lots.push([ix0, iz0, xm - 1.5, zm - 1.5], [xm + 1.5, iz0, ix1, zm - 1.5], [ix0, zm + 1.5, xm - 1.5, iz1], [xm + 1.5, zm + 1.5, ix1, iz1]);
      }
      for (const [a0, b0, a1, b1] of lots) {
        const sx0 = a0 + R() * 1.5, sx1 = a1 - R() * 1.5, sz0 = b0 + R() * 1.5, sz1 = b1 - R() * 1.5;
        const w = sx1 - sx0, d = sz1 - sz0, x = (sx0 + sx1) / 2, z = (sz0 + sz1) / 2;
        const maxH = 22 + 165 * Math.pow(1 - dist, 1.7);
        let h = Math.max(10.5, maxH * (0.4 + R() * 0.7));
        h = Math.round(h / 3.5) * 3.5;
        const c = palette[Math.floor(R() * palette.length)];
        let top = addTier(x, z, w, d, 0, h, c);
        let tw = w, td = d, th = h;
        if (h > 45 && R() < 0.6) {
          tw = w * (0.55 + R() * 0.25); td = d * (0.55 + R() * 0.25); th = h * (0.18 + R() * 0.25);
          th = Math.round(th / 3.5) * 3.5 + 3.5;
          top = addTier(x, z, tw, td, top, th, c);
          if (h > 110 && R() < 0.6) {
            const w3 = tw * 0.6, d3 = td * 0.6;
            top = addTier(x, z, w3, d3, top, 10.5, c); tw = w3; td = d3; th = h + th + 10.5;
          }
        }
        roofProps(x, z, tw, td, top, h);
        this.tops.push({ x, z, y: top, w: tw, d: td });
        this.buildings.push({ x0: sx0, z0: sz0, x1: sx1, z1: sz1, h: top });
      }
    }
    // shoreline parkland trees
    for (let k = 0; k < 160; k++) {
      const side = Math.floor(R() * 4);
      const t = (R() - 0.5) * 2 * (HALF + 40);
      const o = HALF + 18 + R() * 40;
      const [x, z] = side === 0 ? [t, -o] : side === 1 ? [t, o] : side === 2 ? [-o, t] : [o, t];
      if (side === 3 && Math.abs(z) < 30) continue;
      if (x > HALF + 8 && Math.abs(z) < 120) continue;
      trees.push({ x, z, y: 0, s: 0.7 + R() * 0.8 });
    }

    this.bMesh = this._inst(B, this._buildingMaterial());
    this.tMesh = this._inst(T, new THREE.MeshStandardMaterial({ roughness: 0.85 }));
    this.sMesh = this._inst(S, new THREE.MeshStandardMaterial({ roughness: 0.95, map: noiseTexture(64, 190, 50, 1) }), this.unitBox, false, true);

    // trees: trunk + faceted crown
    const trunkG = new THREE.CylinderGeometry(0.18, 0.28, 2.6, 5).translate(0, 1.3, 0);
    const crownG = mergeGeometries([
      new THREE.IcosahedronGeometry(1.9, 0).translate(0, 3.9, 0),
      new THREE.IcosahedronGeometry(1.3, 0).translate(0.7, 5.0, 0.3),
      new THREE.IcosahedronGeometry(1.2, 0).translate(-0.8, 4.6, -0.4),
    ]);
    const trunk = new THREE.InstancedMesh(trunkG, new THREE.MeshStandardMaterial({ color: 0x6b4a32, flatShading: true }), trees.length);
    const crown = new THREE.InstancedMesh(crownG, new THREE.MeshStandardMaterial({ flatShading: true, roughness: 0.9 }), trees.length);
    const o = new THREE.Object3D(), c = new THREE.Color();
    const greens = [0x4f8a32, 0x3f7a2e, 0x6b9e38, 0x5a8f2a, 0x7fae46, 0x3a6b2a];
    trees.forEach((t, i) => {
      o.position.set(t.x, t.y, t.z); o.rotation.set(0, R() * 6.28, 0); o.scale.setScalar(t.s * 1.3); o.updateMatrix();
      trunk.setMatrixAt(i, o.matrix); crown.setMatrixAt(i, o.matrix);
      crown.setColorAt(i, c.set(greens[Math.floor(R() * greens.length)]));
    });
    for (const m of [trunk, crown]) { m.castShadow = true; m.receiveShadow = true; m.frustumCulled = false; this.scene.add(m); }

    // ponds
    const pondMat = new THREE.MeshStandardMaterial({ color: 0x2c7fa0, roughness: 0.05, metalness: 0.3 });
    for (const p of ponds) {
      const m = new THREE.Mesh(new THREE.CircleGeometry(p.r, 9).rotateX(-Math.PI / 2), pondMat);
      m.position.set(p.x, 0.34, p.z); m.receiveShadow = true; this.scene.add(m);
    }

    // water tanks on roofs
    if (tanks.length) {
      const tg = mergeGeometries([
        new THREE.CylinderGeometry(2, 2, 4, 8).translate(0, 4.5, 0),
        new THREE.ConeGeometry(2.3, 1.6, 8).translate(0, 7.3, 0),
        new THREE.BoxGeometry(0.25, 2.5, 0.25).translate(1.3, 1.25, 1.3), new THREE.BoxGeometry(0.25, 2.5, 0.25).translate(-1.3, 1.25, 1.3),
        new THREE.BoxGeometry(0.25, 2.5, 0.25).translate(1.3, 1.25, -1.3), new THREE.BoxGeometry(0.25, 2.5, 0.25).translate(-1.3, 1.25, -1.3),
      ].map(g => g.toNonIndexed()));
      const tm = new THREE.InstancedMesh(tg, new THREE.MeshStandardMaterial({ color: 0x8a5a3a, flatShading: true, roughness: 0.9 }), tanks.length);
      tanks.forEach((t, i) => { o.position.set(t.x, t.y, t.z); o.rotation.set(0, 0, 0); o.scale.setScalar(1); o.updateMatrix(); tm.setMatrixAt(i, o.matrix); });
      tm.castShadow = true; tm.frustumCulled = false; this.scene.add(tm);
    }

    // neon billboards
    this.neonMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this._inst(neon, this.neonMat, this.unitBox, false, false);

    // blinking aviation lights
    this.blinkMat = new THREE.MeshBasicMaterial({ color: 0xff2020 });
    this.blinkMesh = this._inst(this.blinkers.map(p => ({ x: p.x, y: p.y, z: p.z, w: 0.7, h: 0.7, d: 0.7, c: 0xffffff })), this.blinkMat, this.unitBox, false, false);

    // street lamps
    const poles = [], arms = [], heads = [], glows = [];
    for (const [x, z, dx, dz] of lampPos) {
      poles.push({ x, z, y: 0.25, w: 0.22, h: 7, d: 0.22, c: 0x3a3d42 });
      arms.push({ x: x + dx * 0.9, z: z + dz * 0.9, y: 7.0, w: dx ? 1.9 : 0.14, h: 0.14, d: dz ? 1.9 : 0.14, c: 0x3a3d42 });
      heads.push({ x: x + dx * 1.8, z: z + dz * 1.8, y: 6.75, w: dx ? 0.9 : 0.5, h: 0.25, d: dz ? 0.9 : 0.5 });
      glows.push({ x: x + dx * 3.0, z: z + dz * 3.0, y: 0.06, w: 12, h: 1, d: 12 });
    }
    this._inst(poles, new THREE.MeshStandardMaterial({ roughness: 0.6, metalness: 0.5 }), this.unitBox, true, false);
    this._inst(arms, new THREE.MeshStandardMaterial({ roughness: 0.6, metalness: 0.5 }), this.unitBox, false, false);
    this.lampMat = new THREE.MeshStandardMaterial({ color: 0x333333, emissive: 0xffd59a, emissiveIntensity: 0 });
    this._inst(heads, this.lampMat, this.unitBox, false, false);
    this.glowMat = new THREE.MeshBasicMaterial({ map: glowTexture(), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 });
    this._inst(glows, this.glowMat, new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), false, false);

    // road markings: dashes down each road, zebra crossings at every intersection
    const M = this.marks;
    for (let k = 0; k <= N; k++) for (let l = 0; l < N; l++) {
      const a = roadAt(l) + ROAD / 2 + 3, b = roadAt(l + 1) - ROAD / 2 - 3;
      for (let t = a; t < b; t += 6) {
        M.push({ x: roadAt(k), z: t + 1.5, w: 0.25, d: 3, y: 0.03 });
        M.push({ x: t + 1.5, z: roadAt(k), w: 3, d: 0.25, y: 0.03 });
      }
    }
    for (let k = 0; k <= N; k++) for (let l = 0; l <= N; l++) {
      const X = roadAt(k), Z = roadAt(l);
      for (let s = 0; s < 11; s++) {
        const o2 = -6.5 + s * 1.3;
        if (l > 0) M.push({ x: X + o2, z: Z - ROAD / 2 - 1.8, w: 0.7, d: 2.8, y: 0.03 });
        if (l < N) M.push({ x: X + o2, z: Z + ROAD / 2 + 1.8, w: 0.7, d: 2.8, y: 0.03 });
        if (k > 0) M.push({ x: X - ROAD / 2 - 1.8, z: Z + o2, w: 2.8, d: 0.7, y: 0.03 });
        if (k < N) M.push({ x: X + ROAD / 2 + 1.8, z: Z + o2, w: 2.8, d: 0.7, y: 0.03 });
      }
    }
  }

  _airfield() {
    const s = this.scene, col = this.col, M = this.marks;
    const len = AIR.x1 - AIR.x0, cx = (AIR.x0 + AIR.x1) / 2;
    const tarmac = new THREE.MeshStandardMaterial({ color: 0x3a3c40, roughness: 0.9, map: noiseTexture(128, 150, 60, 60) });
    const rw = new THREE.Mesh(new THREE.PlaneGeometry(len, AIR.w).rotateX(-Math.PI / 2), tarmac);
    rw.position.set(cx, 0.015, 0); rw.receiveShadow = true; s.add(rw);
    const access = new THREE.Mesh(new THREE.PlaneGeometry(AIR.x0 - HALF, ROAD).rotateX(-Math.PI / 2), tarmac);
    access.position.set((HALF + AIR.x0) / 2, 0.012, 0); access.receiveShadow = true; s.add(access);
    const apron = new THREE.Mesh(new THREE.PlaneGeometry(220, 70).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x5c5e63, roughness: 0.9, map: noiseTexture(128, 160, 50, 30) }));
    apron.position.set(AIR.x0 + 140, 0.018, -62); apron.receiveShadow = true; s.add(apron);
    for (let x = AIR.x0 + 40; x < AIR.x1 - 40; x += 24) M.push({ x, z: 0, w: 12, d: 0.6, y: 0.04 });
    for (const ex of [AIR.x0 + 8, AIR.x1 - 8]) for (let k = 0; k < 8; k++) M.push({ x: ex, z: -17 + k * 4.9, w: 12, d: 1.6, y: 0.04 });
    for (const z of [-AIR.w / 2 + 1, AIR.w / 2 - 1]) M.push({ x: cx, z, w: len - 4, d: 0.4, y: 0.04 });
    // edge lights
    const lights = [];
    for (let x = AIR.x0 + 4; x < AIR.x1; x += 25) for (const z of [-AIR.w / 2 - 1, AIR.w / 2 + 1]) lights.push({ x, z, y: 0, w: 0.4, h: 0.5, d: 0.4, c: (x - AIR.x0) % 50 < 25 ? 0x9fd0ff : 0xffffff });
    this.edgeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this._inst(lights, this.edgeMat, this.unitBox, false, false);
    // hangars with arched roofs
    const hMat = new THREE.MeshStandardMaterial({ color: 0xb8bcc2, roughness: 0.5, metalness: 0.4, flatShading: true });
    const roofG = new THREE.CylinderGeometry(15, 15, 30, 12, 1, false, Math.PI / 2, Math.PI).rotateX(Math.PI / 2);
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x2a2d33, roughness: 0.8 });
    for (const hx of [AIR.x0 + 70, AIR.x0 + 115]) {
      const base = new THREE.Mesh(this.unitBox, hMat); base.scale.set(30, 7, 30); base.position.set(hx, 0, -78);
      const roof = new THREE.Mesh(roofG, hMat); roof.scale.set(1, 0.55, 1); roof.position.set(hx, 7, -78);
      const door = new THREE.Mesh(new THREE.PlaneGeometry(24, 9), doorMat); door.position.set(hx, 4.5, -62.95);
      for (const m of [base, roof]) { m.castShadow = true; m.receiveShadow = true; s.add(m); }
      s.add(door);
      col.add(hx - 15, 0, -93, hx + 15, 15.2, -63);
      this.buildings.push({ x0: hx - 15, z0: -93, x1: hx + 15, z1: -63, h: 15 });
    }
    // control tower
    const tx = AIR.x0 + 170, tz = -60;
    const tw = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 3, 26, 8).translate(0, 13, 0), new THREE.MeshStandardMaterial({ color: 0xe0ddd5, flatShading: true }));
    const cab = new THREE.Mesh(new THREE.CylinderGeometry(5, 4.2, 4.5, 8).translate(0, 28.2, 0), new THREE.MeshStandardMaterial({ color: 0x223344, roughness: 0.05, metalness: 0.9, flatShading: true }));
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(5.4, 5.4, 1, 8).translate(0, 31, 0), new THREE.MeshStandardMaterial({ color: 0xc94a3a, flatShading: true }));
    for (const m of [tw, cab, cap]) { m.position.set(tx, 0, tz); m.castShadow = true; s.add(m); }
    col.add(tx - 5, 0, tz - 5, tx + 5, 31.5, tz + 5);
    this.buildings.push({ x0: tx - 5, z0: tz - 5, x1: tx + 5, z1: tz + 5, h: 31 });
    this.tops.push({ x: tx, z: tz, y: 31.5, w: 8, d: 8 });
    this.blinkers.push(new THREE.Vector3(tx, 32, tz));
  }

  _buildMarks() {
    const m = this._inst(this.marks.map(k => ({ ...k, h: 1, c: 0xf2f2ea })),
      new THREE.MeshStandardMaterial({ roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -2 }),
      new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), false, true);
    m.castShadow = false;
  }

  _clouds() {
    const R = this.rand;
    const parts = [];
    for (let k = 0; k < 7; k++) parts.push(new THREE.IcosahedronGeometry(10 + R() * 9, 0).translate((k - 3) * 11 + R() * 6, R() * 6, (R() - 0.5) * 14));
    const g = mergeGeometries(parts); g.scale(1, 0.55, 1);
    this.clouds = new THREE.InstancedMesh(g, new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 1, emissive: 0x334455, emissiveIntensity: 0.3 }), 26);
    this.cloudData = [];
    for (let i = 0; i < 26; i++) this.cloudData.push({ x: (R() - 0.5) * 2600 + 200, z: (R() - 0.5) * 2200, y: 260 + R() * 140, s: 0.8 + R() * 1.4, r: R() * 6 });
    this.clouds.frustumCulled = false; this.clouds.castShadow = false;
    this.scene.add(this.clouds);
  }

  _tokens() {
    const R = this.rand;
    const g = new THREE.OctahedronGeometry(0.9, 0);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffc23d, emissive: 0xff8a00, emissiveIntensity: 0.9, metalness: 0.7, roughness: 0.25, flatShading: true });
    const beamMat = new THREE.MeshBasicMaterial({ color: 0xffb030, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false });
    const beamG = new THREE.CylinderGeometry(0.35, 0.35, 40, 6, 1, true).translate(0, 20, 0);
    const pool = this.tops.slice().sort(() => R() - 0.5);
    for (let i = 0; i < 30 && i < pool.length; i++) {
      const t = pool[i];
      const m = new THREE.Mesh(g, mat); m.position.set(t.x, t.y + 1.8, t.z); m.castShadow = true;
      const beam = new THREE.Mesh(beamG, beamMat); beam.position.copy(m.position);
      this.scene.add(m); this.scene.add(beam);
      this.tokens.push({ mesh: m, beam, pos: m.position.clone(), taken: false });
    }
  }

  nearestRoad(x, z) {
    const k = Math.max(0, Math.min(N, Math.round((x + HALF) / P))), l = Math.max(0, Math.min(N, Math.round((z + HALF) / P)));
    const rx = roadAt(k), rz = roadAt(l);
    const cx = Math.max(-HALF, Math.min(HALF, x)), cz = Math.max(-HALF, Math.min(HALF, z));
    return Math.abs(x - rx) < Math.abs(z - rz) ? new THREE.Vector3(rx, 0, cz) : new THREE.Vector3(cx, 0, rz);
  }

  update(dt, camPos, focus) {
    if (this.autoTime) this.setTime(this.time + dt / 600);
    this.uniforms.uTime.value += dt;
    this.sky.position.copy(camPos);
    // thinner haze when high above the city so the view from the plane stays clear
    this.scene.fog.density = this.fogBase / (1 + Math.max(0, camPos.y - 60) / 120);
    const ld = this.lightDir;
    const sx = Math.round(focus.x / 2) * 2, sz = Math.round(focus.z / 2) * 2;
    this.sun.target.position.set(sx, 0, sz);
    this.sun.position.set(sx + ld.x * 400, ld.y * 400, sz + ld.z * 400);
    const o = new THREE.Object3D();
    this.cloudData.forEach((c, i) => {
      c.x += dt * 4; if (c.x > 1600) c.x -= 2800;
      o.position.set(c.x, c.y, c.z); o.rotation.y = c.r; o.scale.setScalar(c.s); o.updateMatrix();
      this.clouds.setMatrixAt(i, o.matrix);
    });
    this.clouds.instanceMatrix.needsUpdate = true;
    const t = this.uniforms.uTime.value;
    this.blinkMat.color.setScalar((Math.sin(t * 3) > 0.6 ? 4 : 0.15) * (0.3 + this.night));
    for (const k of this.tokens) if (!k.taken) {
      k.mesh.rotation.y += dt * 2;
      k.mesh.position.y = k.pos.y + Math.sin(t * 2 + k.pos.x) * 0.3;
    }
  }
}
