import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { ROAD_HALF, roadX, roadY, roadDX, roadDY, fbm, rampH, segmentFeature, SEG } from './world.js';
import { Features } from './features.js';
import { LEVELS, Rival, stepAir, makeGantry, placeOnRoad, ordinal } from './race.js';
import { ChunkManager, makeTextures } from './chunks.js';
import { makeBoard, radialTex } from './board.js';
import { Sfx } from './audio.js';
import { makeRider } from './rider.js';
import { THEME, TRACKS } from './theme.js';
import { makeSky, makeScenery, SUN_DIR } from './atmosphere.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { PREMIUM, HQ, U as PU, loadPremium, rockMaterial, patchLit } from './premium.js';
import { AOPass } from './aopass.js';

const qs = new URLSearchParams(location.search);
const DEBUG_CAM = qs.has('orbit') ? parseFloat(qs.get('orbit')) : 0;

// ---------------- renderer ----------------
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
const LOWQ = /Mobi|Android/i.test(navigator.userAgent) || qs.has('low');
renderer.setPixelRatio(Math.min(devicePixelRatio, LOWQ ? 1.25 : 1.75));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = THEME.exposure;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(64, 1, 0.1, 5000);

const hemi = new THREE.HemisphereLight(THEME.hemiSky, THEME.hemiGround, THEME.hemi); scene.add(hemi);
const sun = new THREE.DirectionalLight(THEME.sun, THEME.sunIntensity);
sun.castShadow = true;
sun.shadow.mapSize.set(LOWQ ? 1024 : 2048, LOWQ ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -60, right: 60, top: 60, bottom: -60, near: 1, far: 500 });
sun.shadow.radius = 3;
sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04;
scene.add(sun, sun.target);
// soft key from behind the camera so the backlit rider still shows colour
const fill = new THREE.DirectionalLight(THEME.skyHorizon, 0.9); scene.add(fill, fill.target);

// ---------------- post ----------------
const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: LOWQ ? 0 : 4 });
const USE_AO = PREMIUM && HQ && !qs.has('noao');
if (USE_AO) rt.depthTexture = new THREE.DepthTexture(1, 1);
const composer = new EffectComposer(renderer, rt);
composer.addPass(new RenderPass(scene, camera));
const aoPass = USE_AO ? new AOPass(camera) : null;
if (aoPass) composer.addPass(aoPass);
const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), PREMIUM ? 0.12 : 0.2, 0.4, PREMIUM ? 1.6 : 0.98);
composer.addPass(bloom);
composer.addPass(new OutputPass());
const fxPass = new ShaderPass({
  uniforms: { tDiffuse: { value: null }, uSpeed: { value: 0 }, uHit: { value: 0 }, uTime: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uSpeed, uHit, uTime; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5; float d = length(c);
      // radial speed blur + chromatic split toward the edges
      vec3 col = vec3(0.); float w = 0.;
      float amt = uSpeed * 0.035 * smoothstep(0.15, 0.7, d);
      for (int i = 0; i < 6; i++) {
        float k = float(i) / 5.0;
        vec2 uv = vUv - c * amt * k;
        col.r += texture2D(tDiffuse, uv - c * 0.004 * uSpeed).r;
        col.g += texture2D(tDiffuse, uv).g;
        col.b += texture2D(tDiffuse, uv + c * 0.004 * uSpeed).b;
        w += 1.;
      }
      col /= w;
      col *= 1.0 - smoothstep(0.5, 1.0, d) * 0.35;       // vignette
      col = mix(col, vec3(1.0, 0.25, 0.15), uHit * 0.35 * smoothstep(0.2, 0.8, d));
      
      gl_FragColor = vec4(col, 1.);
    }`,
});
composer.addPass(fxPass);

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false); composer.setSize(w, h);
  bloom.setSize(w / 2, h / 2);
  camera.aspect = w / h;
  camera.userData.baseFov = w / h < 1 ? 78 : 62;   // portrait phones need a wider view
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
const qp = qs.has('fixedq');

// ---------------- world ----------------
let chunks, board, rider = null, sky, scenery, features, gltfRider = null;
let rivals = [], gantries = [];
const particles = [];

// Particles are premultiplied: uAdd blends each system between alpha (smoke/dust, 0) and
// additive (sparks/fire, 1) in one pass. Lit systems shade each sprite as a little sphere.
const PART_SUN_V = new THREE.Vector3();
class Particles {
  constructor(max, tex, blending = THREE.AdditiveBlending, opts = {}) {
    this.max = max; this.n = 0;
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 3); this.col = new Float32Array(max * 3); this.size = new Float32Array(max); this.alpha = new Float32Array(max);
    this.vel = new Float32Array(max * 3); this.life = new Float32Array(max); this.maxLife = new Float32Array(max); this.baseSize = new Float32Array(max);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: tex }, scale: { value: 400 }, opacity: { value: 1 }, uAdd: { value: opts.add ?? (blending === THREE.AdditiveBlending ? 1 : 0) }, uLit: { value: opts.lit ? 1 : 0 },
        uSunV: { value: PART_SUN_V }, uSunCol: { value: new THREE.Color(THEME.sun).multiplyScalar(1.4) }, uAmb: { value: new THREE.Color(THEME.hemiSky).multiplyScalar(0.55) } },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC;
        uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=size*scale/-mv.z; gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `uniform sampler2D map; uniform float opacity, uAdd, uLit; uniform vec3 uSunV, uSunCol, uAmb; varying float vA; varying vec3 vC;
        void main(){
          vec4 t = texture2D(map, gl_PointCoord); vec3 c = vC * t.rgb;
          if (uLit > 0.5) {
            vec2 q = gl_PointCoord * 2. - 1.; q.y = -q.y;
            vec3 n = vec3(q, sqrt(max(0., 1. - dot(q, q))));
            float sun = max(dot(normalize(n), uSunV), 0.);
            float through = pow(max(-uSunV.z, 0.), 3.) * (1. - n.z) * 0.8;   // low sun behind the puff
            c = vC * (uAmb + uSunCol * (sun * 0.9 + through));
          }
          float a = t.a * vA * opacity;
          gl_FragColor = vec4(c * a, a * (1. - uAdd));
        }`,
      transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor, blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
    });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false;
    scene.add(this.points);
  }
  emit(p, v, color, size, life) {
    if (this.n >= this.max) return;
    const i = this.n++;
    this.pos.set([p.x, p.y, p.z], i * 3); this.vel.set([v.x, v.y, v.z], i * 3);
    this.col.set([color.r, color.g, color.b], i * 3);
    this.baseSize[i] = size; this.life[i] = this.maxLife[i] = life;
  }
  update(dt, drag = 0.9, grav = 0) {
    for (let i = 0; i < this.n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) { this._kill(i); i--; continue; }
      const k = i * 3, f = Math.pow(drag, dt * 60);
      this.vel[k] *= f; this.vel[k + 1] = this.vel[k + 1] * f - grav * dt; this.vel[k + 2] *= f;
      this.pos[k] += this.vel[k] * dt; this.pos[k + 1] += this.vel[k + 1] * dt; this.pos[k + 2] += this.vel[k + 2] * dt;
      const t = this.life[i] / this.maxLife[i];
      this.alpha[i] = t; this.size[i] = this.baseSize[i] * (0.4 + 0.6 * t);
    }
    for (let i = this.n; i < this.max; i++) this.alpha[i] = 0;
    const a = this.points.geometry.attributes;
    a.position.needsUpdate = a.color.needsUpdate = a.size.needsUpdate = a.alpha.needsUpdate = true;
    this.points.geometry.setDrawRange(0, this.n);
  }
  _kill(i) {
    const j = --this.n;
    if (i === j) return;
    for (const arr of [this.pos, this.vel, this.col]) for (let c = 0; c < 3; c++) arr[i * 3 + c] = arr[j * 3 + c];
    for (const arr of [this.life, this.maxLife, this.baseSize, this.alpha, this.size]) arr[i] = arr[j];
  }
  clear() { this.n = 0; }
}

// speed streaks drawn in camera space
class SpeedLines {
  constructor(n = 90) {
    this.n = n;
    const g = new THREE.BufferGeometry();
    this.p = new Float32Array(n * 6); this.seed = [];
    g.setAttribute('position', new THREE.BufferAttribute(this.p, 3));
    this.mat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
    this.lines = new THREE.LineSegments(g, this.mat); this.lines.frustumCulled = false;
    camera.add(this.lines);
    for (let i = 0; i < n; i++) this.seed.push(this._spawn({}, true));
  }
  _spawn(o, init) {
    const a = Math.random() * Math.PI * 2, r = 2.2 + Math.random() * 5;
    o.x = Math.cos(a) * r; o.y = Math.sin(a) * r * 0.65; o.z = init ? -Math.random() * 60 : -60;
    return o;
  }
  update(dt, speed, amt) {
    this.mat.opacity = amt * 0.35;
    for (let i = 0; i < this.n; i++) {
      const o = this.seed[i];
      o.z += speed * dt * 1.6;
      if (o.z > 0) this._spawn(o);
      const len = 1.5 + speed * 0.06;
      this.p.set([o.x, o.y, o.z, o.x, o.y, o.z - len], i * 6);
    }
    this.lines.geometry.attributes.position.needsUpdate = true;
  }
}

// snow / pollen / dust drifting through the air around the camera
class Air {
  constructor(cfg) {
    this.cfg = cfg; this.n = LOWQ ? cfg.count >> 1 : cfg.count;
    this.box = new THREE.Vector3(90, 40, 110);
    const g = new THREE.BufferGeometry();
    this.p = new Float32Array(this.n * 3); this.ph = new Float32Array(this.n);
    for (let i = 0; i < this.n; i++) { this.p[i * 3] = Math.random() * this.box.x; this.p[i * 3 + 1] = Math.random() * this.box.y; this.p[i * 3 + 2] = Math.random() * this.box.z; this.ph[i] = Math.random() * 6.28; }
    this.world = new Float32Array(this.n * 3);
    g.setAttribute('position', new THREE.BufferAttribute(this.world, 3));
    this.points = new THREE.Points(g, new THREE.PointsMaterial({ color: cfg.color, size: cfg.size * 3, map: radialTex(), transparent: true, depthWrite: false, opacity: 0.85, sizeAttenuation: true }));
    // specks inside a few metres of the lens read as smudges, so fade them out
    this.points.material.onBeforeCompile = sh => {
      sh.vertexShader = sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\n vNearFade = smoothstep(2.5, 7.0, -mvPosition.z);').replace('void main() {', 'varying float vNearFade;\nvoid main() {');
      sh.fragmentShader = sh.fragmentShader.replace('void main() {', 'varying float vNearFade;\nvoid main() {').replace('#include <premultiplied_alpha_fragment>', 'gl_FragColor.a *= vNearFade;\n#include <premultiplied_alpha_fragment>');
    };
    this.points.frustumCulled = false; scene.add(this.points);
    this.t = 0;
  }
  update(dt, cam, vel) {
    this.t += dt;
    const B = this.box, p = this.p, w = this.world;
    for (let i = 0; i < this.n; i++) {
      const k = i * 3;
      p[k] += (Math.sin(this.t * 0.7 + this.ph[i]) * 0.6 - vel.x) * dt;
      p[k + 1] += (-this.cfg.fall + Math.cos(this.t * 0.9 + this.ph[i]) * 0.3 - vel.y) * dt;
      p[k + 2] += -vel.z * dt;
      // wrap into a box centred on the camera
      w[k] = cam.x - B.x / 2 + (((p[k] - cam.x) % B.x) + B.x * 2) % B.x;
      w[k + 1] = cam.y - B.y / 2 + (((p[k + 1] - cam.y) % B.y) + B.y * 2) % B.y;
      w[k + 2] = cam.z - B.z / 2 + (((p[k + 2] - cam.z) % B.z) + B.z * 2) % B.z;
    }
    this.points.geometry.attributes.position.needsUpdate = true;
  }
}
let air;
const airVel = new THREE.Vector3();

// ---------------- obstacles / pickups ----------------
const obstacleMats = {};
function obstacleAssets() {
  const concrete = canvasNoise('#b9b4aa', 256);
  obstacleMats.barrier = new THREE.MeshStandardMaterial({ color: THEME.barrier, roughness: 0.8, map: concrete });
  obstacleMats.stripe = new THREE.MeshStandardMaterial({ color: THEME.barrierStripe, roughness: 0.6 });
  obstacleMats.rock = rockMaterial(PREMIUM_ASSETS, { color: THEME.rock, roughness: 0.9, flatShading: true }, 3, 0.4, 'boulder');
  obstacleMats.ring = new THREE.MeshStandardMaterial({ color: THEME.barrierStripe, roughness: 0.5 });
  obstacleMats.ringFrame = new THREE.MeshStandardMaterial({ color: 0x2b2f36, metalness: 0.9, roughness: 0.35 });
  obstacleMats.orb = new THREE.MeshStandardMaterial({ color: 0xffc247, metalness: 0.6, roughness: 0.25 });
  // jersey barrier profile
  const s = new THREE.Shape();
  s.moveTo(-0.33, 0); s.lineTo(0.33, 0); s.lineTo(0.3, 0.08); s.lineTo(0.14, 0.33); s.lineTo(0.1, 0.85); s.lineTo(-0.1, 0.85); s.lineTo(-0.14, 0.33); s.lineTo(-0.3, 0.08); s.closePath();
  const bg = new THREE.ExtrudeGeometry(s, { depth: 3.0, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2 });
  bg.translate(0, 0, -1.5); bg.rotateY(Math.PI / 2);
  obstacleMats.barrierGeo = bg;
  const rg = new THREE.IcosahedronGeometry(1, PREMIUM_ASSETS ? 3 : 1), v = new THREE.Vector3(), pa = rg.attributes.position;
  for (let i = 0; i < pa.count; i++) { v.fromBufferAttribute(pa, i); v.multiplyScalar(1 + fbm(v.x * 1.3 + 9, v.y * 1.3 + v.z, 4) * 0.5 + (PREMIUM_ASSETS ? fbm(v.x * 4 + 2, v.y * 4 + v.z * 3, 2) * 0.1 : 0)); pa.setXYZ(i, v.x, v.y * 0.8, v.z); }
  rg.computeVertexNormals(); obstacleMats.rockGeo = rg;
  obstacleMats.orbGeo = new THREE.OctahedronGeometry(0.24, 0);
  if (PREMIUM_ASSETS) for (const k of ['barrier', 'stripe', 'ring', 'ringFrame', 'orb']) patchLit(obstacleMats[k], 'ob-' + k);
}
function canvasNoise(base, size) {
  const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d');
  g.fillStyle = base; g.fillRect(0, 0, size, size);
  for (let i = 0; i < size * size / 3; i++) { const v = Math.random() * 90 | 0; g.fillStyle = `rgba(${v},${v},${v},0.18)`; g.fillRect(Math.random() * size, Math.random() * size, 2, 2); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; return t;
}

let PREMIUM_ASSETS = null;
const objects = [];
let nextSpawn = 0;
function placeAt(obj, u, s, yOff = 0) {
  obj.position.set(roadX(s) + u, roadY(s) + yOff, -s);
  obj.rotation.y = Math.atan(roadDX(s));
}
function spawnObstacles(untilS, difficulty) {
  while (nextSpawn < untilS) {
    const s = nextSpawn;
    const r = Math.random();
    const f = segmentFeature(Math.floor(s / SEG));
    if ((f?.type === 'jump' && s > f.s0 - 40 && s < f.lip + 50) || (G.race && s > G.race.length - 60)) { nextSpawn += 30; continue; }
    if (r < 0.36) {                             // barrier line with a gap
      const gapW = Math.max(3.2, 6.5 - difficulty * 2.5);
      const gapC = (Math.random() * 2 - 1) * (ROAD_HALF - gapW / 2 - 0.5);
      const grp = new THREE.Group();
      for (let u = -ROAD_HALF + 1.5; u <= ROAD_HALF - 1.4; u += 3.05) {
        if (Math.abs(u - gapC) < gapW / 2 + 1.5) continue;
        const m = new THREE.Mesh(obstacleMats.barrierGeo, obstacleMats.barrier); m.castShadow = m.receiveShadow = true;
        m.position.x = u; grp.add(m);
        const st = new THREE.Mesh(new THREE.BoxGeometry(2.9, 0.08, 0.02), obstacleMats.stripe); st.position.set(u, 0.62, 0.115); grp.add(st);
      }
      placeAt(grp, 0, s); scene.add(grp);
      objects.push({ type: 'barrier', s, gapC, gapW, mesh: grp, hit: false });
    } else if (r < 0.6) {                        // boulders
      const count = 1 + (Math.random() < difficulty ? 1 : 0);
      for (let i = 0; i < count; i++) {
        const rad = 1.3 + Math.random() * 1.2, u = (Math.random() * 2 - 1) * (ROAD_HALF - 2);
        const m = new THREE.Mesh(obstacleMats.rockGeo, obstacleMats.rock); m.castShadow = m.receiveShadow = true;
        m.scale.set(rad, rad, rad); placeAt(m, u, s + i * 9, rad * 0.45); m.rotation.set(Math.random(), Math.random() * 6, Math.random());
        scene.add(m); objects.push({ type: 'rock', s: s + i * 9, u, rad, mesh: m });
      }
    } else if (r < 0.8) {                        // boost gate
      const u = (Math.random() * 2 - 1) * (ROAD_HALF - 3);
      const g = new THREE.Group();
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.1, 12, 48), obstacleMats.ring);
      const frame = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.14, 8, 48), obstacleMats.ringFrame);
      ring.position.y = frame.position.y = 2.3; g.add(frame, ring);
      placeAt(g, u, s); scene.add(g);
      objects.push({ type: 'ring', s, u, mesh: g, done: false, ring });
    }
    // an arc of energy shards threading between hazards
    if (Math.random() < 0.7) {
      const u0 = (Math.random() * 2 - 1) * 5, amp = 2 + Math.random() * 3, ph = Math.random() * 6;
      for (let i = 0; i < 7; i++) {
        const ss = s + 22 + i * 5, u = u0 + Math.sin(ph + i * 0.6) * amp;
        const m = new THREE.Mesh(obstacleMats.orbGeo, obstacleMats.orb);
        placeAt(m, u, ss, 1.0); scene.add(m);
        objects.push({ type: 'orb', s: ss, u, mesh: m });
      }
    }
    nextSpawn += Math.max(34, 70 - difficulty * 34) + Math.random() * 30;
  }
}
function clearObjects(beforeS = Infinity) {
  for (let i = objects.length - 1; i >= 0; i--) {
    if (objects[i].s < beforeS) { scene.remove(objects[i].mesh); objects.splice(i, 1); }
  }
}

// ---------------- game state ----------------
const ui = {
  hud: document.getElementById('hud'), speed: document.getElementById('speed'), dist: document.getElementById('dist'),
  score: document.getElementById('score'), flow: document.getElementById('flowfill'), flowWrap: document.getElementById('flow'),
  mult: document.getElementById('mult'), pop: document.getElementById('pops'), menu: document.getElementById('menu'),
  over: document.getElementById('over'), best: document.getElementById('best'), final: document.getElementById('final'),
  finalBest: document.getElementById('finalbest'), shards: document.getElementById('shards'), finalShards: document.getElementById('finalshards'),
  revive: document.getElementById('revive'), results: document.getElementById('results'), resTitle: document.getElementById('restitle'), resPlace: document.getElementById('resplace'), resTable: document.getElementById('restable'), resNext: document.getElementById('resnext'), resNote: document.getElementById('resnote'), count: document.getElementById('count'), pos: document.getElementById('pos'), time: document.getElementById('rtime'), prog: document.getElementById('prog'), progFill: document.getElementById('progfill'), draft: document.getElementById('draft'), levels: document.getElementById('levels'), newbest: document.getElementById('newbest'), loading: document.getElementById('loading'),
};
const store = {
  get(k, d) { try { const v = localStorage.getItem('hoverline.' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('hoverline.' + k, JSON.stringify(v)); } catch { } },
};
const G = {
  mode: 'loading', s: 0, u: 0, vu: 0, v: 0, flow: 0, mult: 1, score: 0, shards: 0, drift: 0, driftHeld: 0,
  boost: 0, time: 0, shake: 0, hit: 0, crashT: 0, revived: false, best: store.get('best.' + THEME.id, 0), bank: store.get('shards', 0),
  hover: 0, yaw: 0, y: 0, vy: 0, air: false, airT: 0, race: null, raceT: 0, countT: 0, finishT: 0, invuln: 0, place: 1, camPos: new THREE.Vector3(), camLook: new THREE.Vector3(), slowmo: 1, lastSteer: 0, combo: 0,
};
const input = { left: 0, right: 0, drift: false, touches: new Map(), pointerX: null };
const sfx = new Sfx();
const SDK = { cg: null };

function pop(text, cls = '') {
  const el = document.createElement('div'); el.className = 'pop ' + cls; el.textContent = text;
  ui.pop.appendChild(el); setTimeout(() => el.remove(), 1100);
}

function startRun(revive = false, level = G.race) {
  if (!revive) {
    G.race = level;
    G.s = 0; G.u = 0; G.score = 0; G.shards = 0; G.flow = 0.2; G.mult = 1; G.revived = false; G.time = 0;
    clearObjects(); nextSpawn = 260; chunks.reset(); features.clear();
    for (const r of rivals) r.dispose(scene); rivals = [];
    for (const g of gantries) scene.remove(g); gantries = [];
    G.v = 30;
    if (level) {
      G.s = 20; G.v = 0; G.raceT = 0; G.countT = 3.2; G.finishT = 0;
      const grid = [[-6, 32], [0, 36], [6, 32], [-3, 26], [3, 26]];
      for (let i = 0; i < 5; i++) { const r = new Rival(scene, gltfRider, i, level.skill); r.reset(grid[i][1], grid[i][0]); rivals.push(r); }
      const st = makeGantry('START', false); placeOnRoad(st, 40); gantries.push(st);
      const fin = makeGantry('FINISH', true); placeOnRoad(fin, level.length); gantries.push(fin);
      for (const g of gantries) scene.add(g);
    }
    chunks.prime(G.s);
  } else {
    G.revived = true; G.v = 30; clearObjects(G.s + 60); nextSpawn = Math.max(nextSpawn, G.s + 120);
    G.u = 0;
  }
  G.vu = 0; G.boost = 0; G.drift = 0; G.driftHeld = 0; G.hit = 0; G.crashT = 0; G.slowmo = 1; G.combo = 0;
  G.y = 0; G.vy = 0; G.air = false; G.invuln = 0;
  board.root.visible = true; board.tilt.rotation.set(0, 0, 0); board.tilt.position.set(0, 0, 0);
  G.mode = G.race && !revive ? 'countdown' : 'play';
  ui.menu.classList.add('hidden'); ui.over.classList.add('hidden'); ui.results.classList.add('hidden'); ui.hud.classList.remove('hidden');
  ui.hud.classList.toggle('racing', !!G.race);
  sfx.start();
  try { SDK.cg?.game.gameplayStart(); } catch { }
}

function finishRace() {
  G.mode = 'finished'; G.finishT = G.raceT; G.resultsIn = 2.6;
  pop(ordinal(G.place) + ' PLACE', 'big');
}
function showResults() {
  G.mode = 'results';
  const rows = [{ name: 'You', color: THEME.suit, t: G.finishT, you: true }];
  for (const r of rivals) rows.push({ name: r.name, color: r.color, t: r.finish || (G.raceT + Math.max(0, G.race.length - r.s) / Math.max(10, r.v)) });
  rows.sort((a, b) => a.t - b.t);
  const place = rows.findIndex(r => r.you) + 1;
  const fmt = t => `${Math.floor(t / 60)}:${(t % 60).toFixed(2).padStart(5, '0')}`;
  ui.resTitle.textContent = place === 1 ? 'VICTORY' : place <= 3 ? 'PODIUM' : 'FINISHED';
  ui.resPlace.textContent = ordinal(place);
  ui.resTable.innerHTML = rows.map((r, i) => `<div class="rrow${r.you ? ' you' : ''}"><span class="rp">${i + 1}</span><span class="rc" style="background:${r.color}"></span><span class="rn">${r.name}</span><span class="rt">${fmt(r.t)}</span></div>`).join('');
  const idx = LEVELS.indexOf(G.race);
  const unlocked = store.get('unlocked', 1);
  if (place <= 3 && idx + 2 > unlocked) { store.set('unlocked', idx + 2); }
  const bestKey = 'place.' + G.race.id, prev = store.get(bestKey, 99);
  if (place < prev) store.set(bestKey, place);
  const next = LEVELS[idx + 1];
  ui.resNext.classList.toggle('hidden', !(place <= 3 && next));
  ui.resNote.textContent = place <= 3 ? (next ? `Unlocked: ${next.name}` : 'You won the final cup!') : 'Finish top 3 to unlock the next race';
  ui.results.classList.remove('hidden'); ui.hud.classList.add('hidden');
  sfx.stop();
  try { SDK.cg?.game.gameplayStop(); if (place === 1) SDK.cg?.game.happytime(); } catch { }
}

function crash(reason) {
  if (G.mode !== 'play' || qs.has('god')) return;
  if (G.invuln > 0) return;
  G.mode = 'crash'; G.crashT = 0; G.hit = 1; G.shake = 1.2;
  sfx.crash();
  const p = board.root.position;
  for (let i = 0; i < 80; i++) {
    sparks.emit(p, new THREE.Vector3((Math.random() - 0.5) * 18, Math.random() * 10, (Math.random() - 0.5) * 18 - G.v * 0.3), new THREE.Color(1, 0.55 + Math.random() * 0.3, 0.2), 0.25, 0.6 + Math.random() * 0.6);
    thrust.emit(p, new THREE.Vector3((Math.random() - 0.5) * 10, Math.random() * 6, (Math.random() - 0.5) * 10), new THREE.Color(0.1, 0.9, 1), 0.6, 0.8);
  }
  try { SDK.cg?.game.gameplayStop(); } catch { }
}

function gameOver() {
  G.mode = 'over';
  const final = Math.floor(G.score);
  const isBest = final > G.best;
  if (isBest) { G.best = final; store.set('best.' + THEME.id, final); }
  G.bank += G.shards; store.set('shards', G.bank);
  ui.final.textContent = final.toLocaleString();
  ui.finalBest.textContent = G.best.toLocaleString();
  ui.finalShards.textContent = '+' + G.shards;
  ui.newbest.classList.toggle('hidden', !isBest);
  ui.revive.classList.toggle('hidden', G.revived || !SDK.cg);
  ui.over.classList.remove('hidden'); ui.hud.classList.add('hidden');
  sfx.stop();
}

// ---------------- update ----------------
const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(), fwd = new THREE.Vector3(), right = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);
const cyan = new THREE.Color(0.35, 0.3, 0.28), orange = new THREE.Color(1, 0.55, 0.15), gold = new THREE.Color(1, 0.75, 0.2);
let sparks, thrust, speedLines, dustP;

let realDt = 0.016;
function update(dt, rdt = dt) {
  realDt = rdt;
  G.time += dt;
  const playing = G.mode === 'play' || G.mode === 'finished';
  const difficulty = G.race ? Math.min(1, G.race.diff + (G.s / G.race.length) * 0.25) : Math.min(1, G.s / 6000);
  if (G.mode === 'countdown') {
    const before = Math.ceil(G.countT);
    G.countT -= dt;
    const now = Math.ceil(G.countT);
    if (now !== before && now > 0) { ui.count.textContent = now; ui.count.className = 'show'; sfx.ring(false); }
    if (G.countT <= 0) { G.mode = 'play'; G.v = 26; ui.count.textContent = 'GO!'; ui.count.className = 'show go'; sfx.ring(true); setTimeout(() => { ui.count.className = ''; }, 700); for (const r of rivals) r.v = 22 + Math.random() * 4; }
  }
  if (G.race && (G.mode === 'play' || G.mode === 'finished' || G.mode === 'crash')) G.raceT += dt;
  G.invuln = Math.max(0, G.invuln - dt);

  if (G.mode === 'menu') {
    // attract mode: autopilot cruises down the mountain behind the title
    G.v = 30; G.s += G.v * dt; G.u = Math.sin(G.time * 0.5) * 4; G.vu = Math.cos(G.time * 0.5) * 2;
  }
  if (playing) {
    const steer = G.mode === 'finished' ? -G.u * 0.2 : (input.right - input.left) + (input.pointerX ?? 0);
    const st = Math.max(-1, Math.min(1, steer));
    const baseV = 34 + 42 * difficulty;
    const latMax = 11 + G.v * 0.12;
    const drifting = input.drift && G.v > 20 && G.mode === 'play';

    if (drifting) {
      G.driftHeld += dt;
      G.drift += ((st >= 0 ? 1 : -1) - G.drift) * Math.min(1, dt * 7);
      G.vu += (st * latMax * 0.55 - G.vu) * Math.min(1, dt * 1.8);         // slidey
      G.v -= G.v * 0.18 * dt;
      G.flow = Math.min(1, G.flow + dt * (0.22 + Math.abs(st) * 0.25) * (G.v / 40));
      if (Math.random() < 0.9) {
        const hand = board.root.position;
        tmp.set(hand.x, hand.y - 0.5, hand.z);
        sparks.emit(tmp, tmp2.set((Math.random() - 0.5) * 4 - G.drift * 3, Math.random() * 2.5, 6 + Math.random() * 6), orange, 0.14, 0.35);
      }
      sfx.setDrift(1);
    } else {
      if (G.driftHeld > 0.3 && G.flow > 0.12) {
        const burst = 12 + 34 * G.flow;
        G.v += burst; G.boost = 1; G.shake = 0.5;
        G.mult = Math.min(8, G.mult + (G.flow > 0.8 ? 2 : 1));
        pop(G.flow > 0.8 ? 'MAX FLOW BOOST!' : 'BOOST', G.flow > 0.8 ? 'big' : '');
        G.score += Math.floor(200 * G.flow) * G.mult;
        sfx.boost(G.flow);
        G.flow = 0;
      }
      G.driftHeld = 0;
      G.drift += (0 - G.drift) * Math.min(1, dt * 5);
      G.vu += (st * latMax - G.vu) * Math.min(1, dt * 6);
      // carving charges flow
      G.flow = Math.min(1, G.flow + Math.abs(G.vu) / latMax * dt * 0.06);
      sfx.setDrift(0);
    }
    G.v += (baseV - G.v) * dt * (G.v > baseV ? 0.35 : 0.5);
    G.boost = Math.max(0, G.boost - dt * 0.7);

    // drafting: tucked in behind a rival cuts drag
    let drafting = false;
    for (const r of rivals) { const ds = r.s - G.s; if (ds > 2 && ds < 16 && Math.abs(r.u - G.u) < 2.2) drafting = true; }
    if (drafting) { G.v += dt * 4; G.flow = Math.min(1, G.flow + dt * 0.08); }
    G.drafting = drafting;
    const prevS = G.s;
    G.s += G.v * dt; G.u += G.vu * dt;
    const wasAir = G.air;
    stepAir(G, dt, prevS);
    if (!wasAir && G.air) { pop('AIR', ''); sfx.boost(0.2); }
    if (wasAir && !G.air) {
      G.shake = Math.max(G.shake, 0.4);
      if (G.airT > 0.6) { const bonus = Math.round(G.airT * 300); G.score += bonus * G.mult; G.flow = Math.min(1, G.flow + 0.25); pop(G.airT > 1.1 ? 'BIG AIR +' + bonus : 'AIR +' + bonus, G.airT > 1.1 ? 'big' : 'near'); }
      for (let i = 0; i < 20; i++) dustP.emit(tmp.set(roadX(G.s) + G.u + (Math.random() - 0.5) * 2, roadY(G.s) + 0.2, -G.s), tmp2.set((Math.random() - 0.5) * 8, 1 + Math.random() * 2, (Math.random() - 0.5) * 8), new THREE.Color(THEME.skyHorizon), 2.2, 1.0);
    }
    if (G.race && G.mode === 'play' && G.s >= G.race.length) finishRace();
    const lim = ROAD_HALF - 0.7;
    if (Math.abs(G.u) > lim) {
      G.u = Math.sign(G.u) * lim;
      if (Math.abs(G.vu) > 3) { G.v *= 1 - dt * 1.5; G.shake = Math.max(G.shake, 0.25); sfx.scrape(); }
      tmp.copy(board.root.position); tmp.x += Math.sign(G.u) * 0.4;
      for (let i = 0; i < 3; i++) sparks.emit(tmp, tmp2.set(-Math.sign(G.u) * Math.random() * 3, Math.random() * 3, 8), orange, 0.12, 0.3);
      G.vu *= 0.5;
    }
    G.score += G.v * dt * 0.5 * G.mult;
    G.combo = Math.max(0, G.combo - dt);
    if (G.combo <= 0 && G.mult > 1) G.mult = Math.max(1, G.mult - dt * 0.25);

    // collisions (a jump carries you over barriers and rocks)
    for (const o of objects) {
      const ds = o.s - G.s;
      if ((G.y > 1.0 || G.invuln > 0 || G.mode === 'finished') && (o.type === 'barrier' || o.type === 'rock')) continue;
      if (o.type === 'barrier') {
        if (!o.hit && ds < 0.4 && ds > -0.8) {
          if (Math.abs(G.u - o.gapC) > o.gapW / 2 - 0.35) { crash('barrier'); break; }
          o.hit = true;
          const margin = o.gapW / 2 - Math.abs(G.u - o.gapC);
          if (margin < 1.0) nearMiss();
        }
      } else if (o.type === 'rock') {
        if (Math.abs(ds) < o.rad * 0.7) {
          const du = Math.abs(G.u - o.u);
          if (du < o.rad * 0.8 + 0.3) { crash('rock'); break; }
          if (!o.near && du < o.rad + 1.4) { o.near = true; nearMiss(); }
        }
      } else if (o.type === 'ring') {
        if (!o.done && ds < 0 && ds > -2) {
          o.done = true;
          const du = Math.abs(G.u - o.u);
          if (du < 2.0) {
            const perfect = du < 0.7;
            G.v += perfect ? 14 : 8; G.boost = 1; G.flow = Math.min(1, G.flow + (perfect ? 0.35 : 0.2));
            G.score += (perfect ? 500 : 200) * G.mult; G.combo = 3; G.mult = Math.min(8, G.mult + (perfect ? 1 : 0.5));
            pop(perfect ? 'PERFECT LINE' : 'BOOST GATE', perfect ? 'big' : '');
            sfx.ring(perfect);
            if (perfect) { G.slowmo = 0.35; }
          }
        }
      } else if (o.type === 'orb') {
        if (!o.taken && Math.abs(ds) < 1.3 && Math.abs(G.u - o.u) < 1.3) {
          o.taken = true; o.mesh.visible = false; G.shards++; G.score += 25 * G.mult; G.flow = Math.min(1, G.flow + 0.03);
          sfx.orb();
          for (let i = 0; i < 8; i++) sparks.emit(o.mesh.position, tmp2.set((Math.random() - 0.5) * 6, Math.random() * 5, (Math.random() - 0.5) * 6), gold, 0.18, 0.45);
        }
      }
    }
  }
  if (G.mode === 'crash') {
    G.crashT += dt;
    G.v *= Math.pow(0.2, dt); G.s += G.v * dt;
    board.tilt.rotation.x += dt * 8; board.tilt.rotation.z += dt * 5; board.tilt.position.y += dt * (3 - G.crashT * 9);
    if (G.crashT > 1.6) {
      if (G.race) {   // races keep going: back on the board with a short grace period
        G.mode = 'play'; G.v = 22; G.u *= 0.5; G.vu = 0; G.invuln = 1.6; G.y = 0; G.air = false;
        board.tilt.rotation.set(0, 0, 0); board.tilt.position.set(0, 0, 0);
        clearObjects(G.s + 25);
      } else gameOver();
    }
  }
  if (G.mode === 'over') { G.v *= Math.pow(0.3, dt); G.s += G.v * dt; }

  G.slowmo += (1 - G.slowmo) * Math.min(1, dt * 1.6);
  G.hit = Math.max(0, G.hit - dt * 1.2);
  G.shake = Math.max(0, G.shake - dt * 2);

  // rivals
  if (G.race) {
    const baseV = 34 + 42 * difficulty;
    const racing = G.mode !== 'countdown';
    let ahead = 0;
    for (const r of rivals) {
      if (racing) r.update(dt, objects, baseV, G, G.time);
      if (!r.finish && r.s >= G.race.length) r.finish = G.raceT;
      r.near = Math.abs(r.s - G.s) < 70;
      r.place(dt, realDt);
      r.tag.visible = r.s - G.s > 3 && r.s - G.s < 90;
      if ((r.finish && (!G.finishT || r.finish < G.finishT)) || (!r.finish && !G.finishT && r.s > G.s)) ahead++;
      // shoulder-to-shoulder contact nudges both riders apart
      const ds = r.s - G.s, du = r.u - G.u;
      if (G.mode === 'play' && Math.abs(ds) < 1.6 && Math.abs(du) < 1.1 && Math.abs(r.y - G.y) < 1) {
        const push = Math.sign(du || 1) * 5;
        r.vu += push; G.vu -= push; G.shake = Math.max(G.shake, 0.3); sfx.scrape();
      }
    }
    if (!G.finishT) G.place = ahead + 1;
    if (G.mode === 'finished') { G.resultsIn -= realDt; if (G.resultsIn <= 0) showResults(); }
  }
  features.update(G.s);

  // spawn / cull
  spawnObstacles(G.s + 900, difficulty);
  clearObjects(G.s - 30);
  chunks.update(G.s);
  for (const o of objects) {
    if (o.type === 'orb') o.mesh.rotation.y += dt * 3;
    if (o.type === 'ring') o.ring.rotation.z += dt * 1.5;
  }

  // ---------- board transform ----------
  const s = G.s;
  fwd.set(roadDX(s), roadDY(s), -1).normalize();
  right.crossVectors(fwd, UP).normalize();
  G.hover = 0.55 + Math.sin(G.time * 5.3) * 0.05 + Math.sin(G.time * 11.7) * 0.02;
  const p = board.root.position.set(roadX(s) + G.u, roadY(s) + G.hover + G.y, -s);
  tmp.copy(p).sub(fwd); board.root.lookAt(tmp);
  board.setContact(G.hover + G.y - rampH(s) + (board.tilt.position.y || 0));
  if (G.mode !== 'crash') {
    const lean = -G.vu / 16;
    board.tilt.rotation.z += (lean * 0.55 - board.tilt.rotation.z) * Math.min(1, dt * 8);
    board.tilt.rotation.y += (G.drift * -0.9 - board.tilt.rotation.y) * Math.min(1, dt * 8);
    board.tilt.rotation.x = G.air ? Math.min(0.35, G.vy * 0.03) : Math.sin(G.time * 3.1) * 0.02;
    const crouch = 0.35 + Math.min(1, G.v / 70) * 0.45 + (input.drift && G.mode === 'play' ? 0.25 : 0) + G.boost * 0.15;
    if (rider) rider.update(realDt, board.tilt, Math.min(1, crouch), -lean, Math.abs(G.drift), Math.min(1, G.v / 70));
    else board.pose(dt, crouch, -lean, G.drift, Math.min(1, G.v / 70));
  }
  // thrusters
  if (G.mode === 'play' || G.mode === 'menu') {
    for (const pod of board.pods) {
      pod.getWorldPosition(tmp);
      const n = 2 + Math.floor(G.boost * 4);
      for (let i = 0; i < n; i++) thrust.emit(tmp, tmp2.set((Math.random() - 0.5) * 1.2, -1.5 - Math.random(), (Math.random() - 0.5) * 1.2).addScaledVector(fwd, -G.v * 0.15), cyan, 0.16 + G.boost * 0.18, 0.18 + Math.random() * 0.12);
    }
    // road dust kicked up behind the board
    if (Math.random() < 0.6) {
      tmp.set(p.x + (Math.random() - 0.5) * 1.2, roadY(s) + 0.1, p.z + 1);
      dustP.emit(tmp, tmp2.set((Math.random() - 0.5) * 3, 0.6 + Math.random(), 4), new THREE.Color(THEME.skyHorizon), 1.6, 0.8);
    }
  }
  thrust.update(dt, 0.92); sparks.update(dt, 0.96, 18); dustP.update(dt, 0.95, -0.5);

  // ---------- camera ----------
  const speedN = Math.min(1.4, G.v / 70);
  const back = 3.4 + speedN * 1.0, height = 1.55 + speedN * 0.15;
  const sAhead = s + 10;
  tmp.set(p.x, p.y, p.z).addScaledVector(fwd, -back); tmp.y = Math.max(tmp.y, roadY(s - back) + height) + 0.0;
  tmp.y = p.y - G.y * 0.4 + height;
  tmp2.set(roadX(sAhead) + G.u * 0.75, roadY(sAhead) + 1.25, -sAhead);
  const k = Math.min(1, dt * 7);
  if (G.camPos.lengthSq() === 0) { G.camPos.copy(tmp); G.camLook.copy(tmp2); }
  G.camPos.lerp(tmp, k); G.camLook.lerp(tmp2, k);
  camera.position.copy(G.camPos);
  const sh = G.shake * G.shake * 0.35;
  camera.position.x += (Math.random() - 0.5) * sh; camera.position.y += (Math.random() - 0.5) * sh;
  if (DEBUG_CAM) { const a = DEBUG_CAM; camera.position.copy(p).add(tmp.set(Math.sin(a) * 3.2, 1.0, Math.cos(a) * 3.2)); G.camLook.copy(p).y += 0.9; }
  camera.lookAt(G.camLook);
  camera.rotateZ(-G.vu * 0.006 - G.drift * 0.04);
  const targetFov = camera.userData.baseFov + speedN * 16 + G.boost * 10;
  camera.fov += (targetFov - camera.fov) * Math.min(1, dt * 3); camera.updateProjectionMatrix();

  sky.position.copy(camera.position);
  scenery.group.position.set(camera.position.x, roadY(s), camera.position.z);
  scenery.cloudMat.uniforms.t.value = G.time;
  // sun + shadow camera follow the player
  sun.target.position.copy(p);
  fill.target.position.copy(p); fill.position.copy(camera.position).add(tmp.set(0, 3, 0));
  sun.position.copy(p).addScaledVector(SUN_DIR, 200);
  PU.uTime.value = G.time; PU.uFocus.value.copy(p);
  PART_SUN_V.copy(SUN_DIR).transformDirection(camera.matrixWorldInverse);

  if (air) { airVel.copy(fwd).multiplyScalar(-0.0); air.update(dt, camera.position, airVel); }
  speedLines.update(dt, G.v, Math.max(0, speedN - 0.75) * 2 + G.boost);
  fxPass.uniforms.uSpeed.value = Math.max(0, speedN - 0.9) * 0.8 + G.boost * 0.6;
  fxPass.uniforms.uHit.value = G.hit;
  fxPass.uniforms.uTime.value = G.time;
  bloom.strength = (PREMIUM ? 0.12 : 0.2) + G.boost * 0.1;
  sfx.update(G.v, G.boost);

  // ---------- HUD ----------
  if (playing) {
    ui.speed.textContent = Math.round(G.v * 3.6);
    ui.dist.textContent = Math.floor(G.s) + ' m';
    ui.score.textContent = Math.floor(G.score).toLocaleString();
    ui.flow.style.width = (G.flow * 100).toFixed(1) + '%';
    ui.flowWrap.classList.toggle('full', G.flow > 0.8);
    ui.mult.textContent = 'x' + Math.floor(G.mult);
    ui.mult.classList.toggle('hot', G.mult >= 3);
    ui.shards.textContent = G.shards;
    if (G.race) {
      ui.pos.innerHTML = `${ordinal(G.place).replace(/(\d+)/, '<b>$1</b>')}<small>/${rivals.length + 1}</small>`;
      ui.time.textContent = `${Math.floor(G.raceT / 60)}:${(G.raceT % 60).toFixed(1).padStart(4, '0')}`;
      const L = G.race.length;
      ui.progFill.style.width = Math.min(100, G.s / L * 100) + '%';
      ui.prog.querySelectorAll('.dot').forEach((d, i) => { const r = rivals[i]; if (r) { d.style.left = Math.min(100, r.s / L * 100) + '%'; d.style.background = r.color; } });
      ui.draft.classList.toggle('on', !!G.drafting);
    }
  }
}
function nearMiss() {
  G.flow = Math.min(1, G.flow + 0.15); G.score += 150 * G.mult; G.combo = 3; G.mult = Math.min(8, G.mult + 0.5);
  pop('CLOSE CALL', 'near'); sfx.near();
}

// ---------------- input ----------------
const keys = { ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right' };
addEventListener('keydown', e => {
  if (keys[e.code]) input[keys[e.code]] = 1;
  if (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'ArrowDown' || e.code === 'KeyS') {
    e.preventDefault();
    if (G.mode === 'menu' || G.mode === 'over' || G.mode === 'results') { if (e.code === 'Space' && !e.repeat) startRun(false, G.mode === 'menu' ? selectedLevel : G.race); return; }
    if (G.mode === 'countdown') return;
    input.drift = true;
  }
  if (e.code === 'KeyR' && (G.mode === 'over' || G.mode === 'results' || (G.race && G.mode === 'play'))) startRun(false, G.race);
  if (e.code === 'KeyM') sfx.toggle();
});
addEventListener('keyup', e => {
  if (keys[e.code]) input[keys[e.code]] = 0;
  if (['Space', 'ShiftLeft', 'ShiftRight', 'ArrowDown', 'KeyS'].includes(e.code)) input.drift = false;
});
// touch: hold left/right half to steer, hold both to slide
function touchState() {
  let l = 0, r = 0;
  for (const x of input.touches.values()) (x < innerWidth / 2 ? l++ : r++);
  input.left = l && !r ? 1 : 0; input.right = r && !l ? 1 : 0;
  input.drift = l > 0 && r > 0;
}
canvas.addEventListener('pointerdown', e => {
  sfx.unlock();
  if (G.mode !== 'play') return;
  if (e.pointerType === 'mouse') {
    if (e.button === 0 || e.button === 2) input.drift = true;
    return;
  }
  input.touches.set(e.pointerId, e.clientX); touchState();
});
canvas.addEventListener('pointermove', e => {
  if (e.pointerType === 'mouse' && G.mode === 'play' && document.pointerLockElement !== canvas) {
    // mouse position steers when the player is using the mouse
    if (input.mouseActive) input.pointerX = Math.max(-1, Math.min(1, (e.clientX / innerWidth - 0.5) * 2.6));
    input.mouseActive = true;
  }
  if (input.touches.has(e.pointerId)) { input.touches.set(e.pointerId, e.clientX); touchState(); }
});
const endTouch = e => {
  if (e.pointerType === 'mouse') { input.drift = false; return; }
  input.touches.delete(e.pointerId); touchState();
};
canvas.addEventListener('pointerup', endTouch); canvas.addEventListener('pointercancel', endTouch);
canvas.addEventListener('contextmenu', e => e.preventDefault());
addEventListener('keydown', () => { input.pointerX = null; input.mouseActive = false; }, true);
let selectedLevel = null;
document.getElementById('play').addEventListener('click', () => { sfx.unlock(); startRun(false, selectedLevel); });
document.getElementById('free').addEventListener('click', () => { sfx.unlock(); startRun(false, null); });
document.getElementById('again').addEventListener('click', () => startRun(false, null));
document.getElementById('resagain').addEventListener('click', () => startRun(false, G.race));
document.getElementById('resmenu').addEventListener('click', () => { ui.results.classList.add('hidden'); for (const r of rivals) r.dispose(scene); rivals = []; G.race = null; G.mode = 'menu'; buildLevels(); ui.menu.classList.remove('hidden'); });
document.getElementById('overmenu').addEventListener('click', () => { ui.over.classList.add('hidden'); G.mode = 'menu'; ui.menu.classList.remove('hidden'); });
document.getElementById('resnext').addEventListener('click', () => {
  const next = LEVELS[LEVELS.indexOf(G.race) + 1];
  if (!next) return;
  if (next.track !== THEME.id) { store.set('level', next.id); try { localStorage.setItem('hoverline.track', next.track); } catch { } location.hash = next.id; location.reload(); return; }
  selectedLevel = next; startRun(false, next);
});
function buildLevels() {
  const unlocked = store.get('unlocked', 1);
  const wantId = (location.hash || '').slice(1);
  if (!selectedLevel) selectedLevel = LEVELS.find(l => l.id === wantId) || LEVELS.find(l => l.id === store.get('level', '') && l.track === THEME.id) || LEVELS.filter((l, i) => l.track === THEME.id && i < unlocked).pop() || LEVELS.find(l => l.track === THEME.id);
  ui.levels.innerHTML = '';
  for (const t of TRACKS) {
    const col = document.createElement('div'); col.className = 'lcol';
    col.style.setProperty('--a', t.skyHorizon); col.style.setProperty('--b', t.skyTop);
    col.innerHTML = `<div class="lhead">${t.name}</div>`;
    for (const l of LEVELS.filter(l => l.track === t.id)) {
      const i = LEVELS.indexOf(l), locked = i >= unlocked, best = store.get('place.' + l.id, 0);
      const b = document.createElement('button');
      b.className = 'lvl' + (l === selectedLevel ? ' on' : '') + (locked ? ' locked' : '');
      b.disabled = locked;
      b.innerHTML = `<span class="ln">${i + 1}</span><b>${l.name}</b><span class="lm">${locked ? 'Locked · top 3 in race ' + i : (l.length / 1000).toFixed(1) + ' km' + (best ? ' · best ' + ordinal(best) : '')}</span>`;
      b.addEventListener('click', () => {
        if (l.track !== THEME.id) { store.set('level', l.id); try { localStorage.setItem('hoverline.track', l.track); } catch { } location.hash = l.id; location.reload(); return; }
        selectedLevel = l; store.set('level', l.id); buildLevels();
      });
      col.appendChild(b);
    }
    ui.levels.appendChild(col);
  }
  document.getElementById('play').textContent = selectedLevel ? `RACE · ${selectedLevel.name.toUpperCase()}` : 'RACE';
}
ui.revive.addEventListener('click', () => {
  if (!SDK.cg) return;
  SDK.cg.ad.requestAd('rewarded', {
    adStarted: () => sfx.mute(true),
    adFinished: () => { sfx.mute(false); startRun(true); },
    adError: () => { sfx.mute(false); ui.revive.classList.add('hidden'); },
  });
});
document.addEventListener('visibilitychange', () => { if (document.hidden) { lastT = 0; sfx.mute(true); } else sfx.mute(false); });

// ---------------- boot ----------------
let lastT = 0, avgDt = 1 / 60, qTimer = 0, pr = renderer.getPixelRatio();
const PR_MAX = renderer.getPixelRatio(), PR_MIN = 0.6;
function adaptQuality(dt) {
  avgDt += (dt - avgDt) * 0.05; qTimer += dt;
  if (qTimer < 1.5) return;
  let next = pr;
  if (avgDt > 1 / 50) next = Math.max(PR_MIN, pr * 0.85);
  else if (avgDt < 1 / 58 && pr < PR_MAX) next = Math.min(PR_MAX, pr * 1.08);
  if (Math.abs(next - pr) > 0.02) { pr = next; renderer.setPixelRatio(pr); resize(); qTimer = 0; }
  else qTimer = 1.0;
}
function frame(t) {
  requestAnimationFrame(frame);
  let dt = lastT ? Math.min(0.05, (t - lastT) / 1000) : 0.016; lastT = t;
  update(dt * G.slowmo, dt);
  composer.render();
  adaptQuality(dt);
}

async function boot() {
  try { if (window.CrazyGames?.SDK) { await window.CrazyGames.SDK.init(); SDK.cg = window.CrazyGames.SDK; SDK.cg.game.loadingStart(); } } catch { SDK.cg = null; }
  resize();
  const gltf = await new GLTFLoader().loadAsync('assets/rider.glb').catch(() => null);
  gltfRider = gltf;
  PREMIUM_ASSETS = PREMIUM ? await loadPremium(renderer).catch(e => { console.warn('premium assets failed', e); return null; }) : null;
  features = new Features(scene, PREMIUM_ASSETS);
  sky = makeSky(scene, renderer);
  scenery = makeScenery(scene);
  scene.environmentIntensity = 0.9;
  if (PREMIUM_ASSETS) {
    // image-based light from the Poly Haven HDRI; the hemisphere fill drops so IBL carries the ambient
    scene.environment = PREMIUM_ASSETS.env.texture;
    scene.environmentIntensity = THEME.premiumEnv ?? 0.75;
    hemi.intensity = THEME.premiumHemi ?? 0.35;
    fill.intensity = THEME.premiumFill ?? 0.55;
    if (qs.has('envbg')) scene.background = PREMIUM_ASSETS.env.texture, sky.visible = false;
  }

  const tex = makeTextures();
  chunks = new ChunkManager(scene, tex, PREMIUM_ASSETS);
  obstacleAssets();
  board = makeBoard(); scene.add(board.root);
  board.root.traverse(o => { if (o.isMesh) o.castShadow = true; });
  if (gltf) { rider = makeRider(gltf, 0.11); board.rider.visible = false; board.tilt.add(rider.object); }
  thrust = new Particles(1200, radialTex('rgba(255,255,255,0.5)'), THREE.NormalBlending, { add: 0, lit: PREMIUM }); thrust.mat.uniforms.opacity.value = 0.18;
  sparks = new Particles(800, radialTex(), THREE.AdditiveBlending, { add: PREMIUM ? 0.85 : 1 });
  dustP = new Particles(300, radialTex('rgba(255,255,255,0.5)'), THREE.NormalBlending, { lit: PREMIUM }); dustP.mat.uniforms.opacity.value = PREMIUM ? 0.2 : 0.12;
  scene.add(camera); speedLines = new SpeedLines();
  air = new Air(THEME.air);
  chunks.prime(0);
  renderer.compile(scene, camera);
  G.mode = 'menu';
  ui.best.textContent = G.best.toLocaleString();
  buildLevels();
  ui.loading.classList.add('hidden'); ui.menu.classList.remove('hidden');
  try { SDK.cg?.game.loadingStop(); } catch { }
  if (qs.has('autoplay')) startRun(false, qs.has('race') ? selectedLevel : null);
  if (!qs.has('still')) requestAnimationFrame(frame);
  window.__render = () => {
    renderer.info.autoReset = false; renderer.info.reset(); composer.render(); renderer.info.autoReset = true;
    const i = renderer.info; return { calls: i.render.calls, tris: i.render.triangles, geos: i.memory.geometries, tex: i.memory.textures, programs: i.programs.length, dpr: renderer.getPixelRatio() };
  };
  window.__G = G; window.__scene = scene; window.__cam = camera; window.__THREE = THREE; window.__input = input; window.__riv = () => rivals.map(r => [r.name, r.s | 0, r.v | 0, +r.u.toFixed(1), +r.crashT.toFixed(1), +r.skill.toFixed(2)]); window.__step = (n, dt = 1 / 60) => { for (let i = 0; i < n; i++) update(dt); }; window.__dbg = () => ({ cam: camera.position.toArray().map(v=>v|0), p: board.root.position.toArray().map(v=>v|0), ch: chunks.chunks.map(c=>c.index), fov: camera.fov|0 });
}
boot();
