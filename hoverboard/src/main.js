import * as THREE from 'three';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { ROAD_HALF, roadX, roadY, roadDX, roadDY, fbm } from './world.js';
import { ChunkManager, makeTextures } from './chunks.js';
import { makeBoard, radialTex } from './board.js';
import { Sfx } from './audio.js';
import { makeRider } from './rider.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const qs = new URLSearchParams(location.search);
const DEBUG_CAM = qs.has('orbit') ? parseFloat(qs.get('orbit')) : 0;
const SKIES = {
  venice: { file: 'venice_sunset_1k.hdr', rot: 0.0, sun: [-0.55, 0.22, -0.8], sunColor: 0xffc58a, fog: 0xc9a88a, exposure: 0.85 },
  quarry: { file: 'quarry_01_1k.hdr', rot: 0.0, sun: [0.4, 0.55, -0.6], sunColor: 0xfff0dd, fog: 0xb9c3cc, exposure: 0.9 },
  blouberg: { file: 'blouberg_sunrise_2_1k.hdr', rot: 0.0, sun: [0.3, 0.2, -0.9], sunColor: 0xffd2a0, fog: 0xc6b8a8, exposure: 0.85 },
  spruit: { file: 'spruit_sunrise_1k.hdr', rot: 0.0, sun: [0.2, 0.18, -0.95], sunColor: 0xffc890, fog: 0xbfb2a4, exposure: 0.8 },
};
const SKY = SKIES[qs.get('sky')] || SKIES.spruit;

// ---------------- renderer ----------------
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
const LOWQ = /Mobi|Android/i.test(navigator.userAgent) || qs.has('low');
renderer.setPixelRatio(Math.min(devicePixelRatio, LOWQ ? 1.25 : 1.75));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = SKY.exposure;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(SKY.fog, 0.0019);
const camera = new THREE.PerspectiveCamera(64, 1, 0.1, 3000);

const hemi = new THREE.HemisphereLight(0xbfd6ff, 0x3a3020, 0.35); scene.add(hemi);
const sun = new THREE.DirectionalLight(SKY.sunColor, 3.2);
const SUN_DIR = new THREE.Vector3(...SKY.sun).normalize();
sun.castShadow = true;
sun.shadow.mapSize.set(LOWQ ? 1024 : 2048, LOWQ ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -45, right: 45, top: 45, bottom: -45, near: 1, far: 400 });
sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04;
scene.add(sun, sun.target);

// horizon haze: blends the far terrain into the sky and hides the photo's ground
const haze = new THREE.Mesh(new THREE.SphereGeometry(2400, 48, 24), new THREE.ShaderMaterial({
  uniforms: { col: { value: new THREE.Color(SKY.fog) } },
  vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
  fragmentShader: `uniform vec3 col; varying vec3 vDir; void main(){ float a = 1. - smoothstep(-0.02, 0.22, vDir.y); gl_FragColor = vec4(col, a); }`,
  side: THREE.BackSide, transparent: true, depthWrite: false, fog: false,
}));
haze.renderOrder = -1; haze.frustumCulled = false; scene.add(haze);

// ---------------- post ----------------
const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: LOWQ ? 0 : 4 });
const composer = new EffectComposer(renderer, rt);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.55, 0.6, 0.92);
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
      col *= 1.0 - smoothstep(0.45, 0.95, d) * 0.55;       // vignette
      col = mix(col, vec3(1.0, 0.25, 0.15), uHit * 0.35 * smoothstep(0.2, 0.8, d));
      col += (hash(vUv * 900. + uTime) - 0.5) * 0.018;     // film grain
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
let chunks, board, rider = null;
const particles = [];

class Particles {
  constructor(max, tex, blending = THREE.AdditiveBlending) {
    this.max = max; this.n = 0;
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 3); this.col = new Float32Array(max * 3); this.size = new Float32Array(max); this.alpha = new Float32Array(max);
    this.vel = new Float32Array(max * 3); this.life = new Float32Array(max); this.maxLife = new Float32Array(max); this.baseSize = new Float32Array(max);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: tex }, scale: { value: 400 }, opacity: { value: 1 } },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC;
        uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=size*scale/-mv.z; gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `uniform sampler2D map; uniform float opacity; varying float vA; varying vec3 vC; void main(){ vec4 t=texture2D(map, gl_PointCoord); gl_FragColor=vec4(vC*t.rgb, t.a*vA*opacity); }`,
      transparent: true, depthWrite: false, blending,
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

// ---------------- obstacles / pickups ----------------
const obstacleMats = {};
function obstacleAssets() {
  const concrete = canvasNoise('#b9b4aa', 256);
  obstacleMats.barrier = new THREE.MeshStandardMaterial({ color: 0xd8d2c6, roughness: 0.9, map: concrete });
  obstacleMats.stripe = new THREE.MeshStandardMaterial({ color: 0x220000, emissive: 0xff2a10, emissiveIntensity: 2.5 });
  obstacleMats.rock = new THREE.MeshStandardMaterial({ color: 0x6f665e, roughness: 0.95, map: canvasNoise('#8a8076', 256) });
  obstacleMats.ring = new THREE.MeshStandardMaterial({ color: 0x001018, emissive: 0x2ef2ff, emissiveIntensity: 5, metalness: 0.2, roughness: 0.3 });
  obstacleMats.ringFrame = new THREE.MeshStandardMaterial({ color: 0x2b2f36, metalness: 0.9, roughness: 0.35 });
  obstacleMats.orb = new THREE.MeshStandardMaterial({ color: 0x221400, emissive: 0xffb21e, emissiveIntensity: 4 });
  // jersey barrier profile
  const s = new THREE.Shape();
  s.moveTo(-0.33, 0); s.lineTo(0.33, 0); s.lineTo(0.3, 0.08); s.lineTo(0.14, 0.33); s.lineTo(0.1, 0.85); s.lineTo(-0.1, 0.85); s.lineTo(-0.14, 0.33); s.lineTo(-0.3, 0.08); s.closePath();
  const bg = new THREE.ExtrudeGeometry(s, { depth: 3.0, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2 });
  bg.translate(0, 0, -1.5); bg.rotateY(Math.PI / 2);
  obstacleMats.barrierGeo = bg;
  const rg = new THREE.IcosahedronGeometry(1, 3), v = new THREE.Vector3(), pa = rg.attributes.position;
  for (let i = 0; i < pa.count; i++) { v.fromBufferAttribute(pa, i); v.multiplyScalar(1 + fbm(v.x * 1.3 + 9, v.y * 1.3 + v.z, 4) * 0.5); pa.setXYZ(i, v.x, v.y * 0.8, v.z); }
  rg.computeVertexNormals(); obstacleMats.rockGeo = rg;
  obstacleMats.orbGeo = new THREE.OctahedronGeometry(0.32, 0);
}
function canvasNoise(base, size) {
  const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d');
  g.fillStyle = base; g.fillRect(0, 0, size, size);
  for (let i = 0; i < size * size / 3; i++) { const v = Math.random() * 90 | 0; g.fillStyle = `rgba(${v},${v},${v},0.18)`; g.fillRect(Math.random() * size, Math.random() * size, 2, 2); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; return t;
}

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
  revive: document.getElementById('revive'), newbest: document.getElementById('newbest'), loading: document.getElementById('loading'),
};
const store = {
  get(k, d) { try { const v = localStorage.getItem('hoverline.' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('hoverline.' + k, JSON.stringify(v)); } catch { } },
};
const G = {
  mode: 'loading', s: 0, u: 0, vu: 0, v: 0, flow: 0, mult: 1, score: 0, shards: 0, drift: 0, driftHeld: 0,
  boost: 0, time: 0, shake: 0, hit: 0, crashT: 0, revived: false, best: store.get('best', 0), bank: store.get('shards', 0),
  hover: 0, yaw: 0, camPos: new THREE.Vector3(), camLook: new THREE.Vector3(), slowmo: 1, lastSteer: 0, combo: 0,
};
const input = { left: 0, right: 0, drift: false, touches: new Map(), pointerX: null };
const sfx = new Sfx();
const SDK = { cg: null };

function pop(text, cls = '') {
  const el = document.createElement('div'); el.className = 'pop ' + cls; el.textContent = text;
  ui.pop.appendChild(el); setTimeout(() => el.remove(), 1100);
}

function startRun(revive = false) {
  if (!revive) {
    G.s = 0; G.u = 0; G.score = 0; G.shards = 0; G.flow = 0.2; G.mult = 1; G.revived = false; G.time = 0;
    clearObjects(); nextSpawn = 260; chunks.reset(); chunks.prime(0);
    G.v = 30;
  } else {
    G.revived = true; G.v = 30; clearObjects(G.s + 60); nextSpawn = Math.max(nextSpawn, G.s + 120);
    G.u = 0;
  }
  G.vu = 0; G.boost = 0; G.drift = 0; G.driftHeld = 0; G.hit = 0; G.crashT = 0; G.slowmo = 1; G.combo = 0;
  board.root.visible = true; board.tilt.rotation.set(0, 0, 0); board.tilt.position.set(0, 0, 0);
  G.mode = 'play';
  ui.menu.classList.add('hidden'); ui.over.classList.add('hidden'); ui.hud.classList.remove('hidden');
  sfx.start();
  try { SDK.cg?.game.gameplayStart(); } catch { }
}

function crash(reason) {
  if (G.mode !== 'play' || qs.has('god')) return;
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
  if (isBest) { G.best = final; store.set('best', final); }
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
const cyan = new THREE.Color(0.1, 0.9, 1), orange = new THREE.Color(1, 0.55, 0.15), gold = new THREE.Color(1, 0.75, 0.2);
let sparks, thrust, speedLines, dustP;

let realDt = 0.016;
function update(dt, rdt = dt) {
  realDt = rdt;
  G.time += dt;
  const playing = G.mode === 'play';
  const difficulty = Math.min(1, G.s / 6000);

  if (G.mode === 'menu') {
    // attract mode: autopilot cruises down the mountain behind the title
    G.v = 30; G.s += G.v * dt; G.u = Math.sin(G.time * 0.5) * 4; G.vu = Math.cos(G.time * 0.5) * 2;
  }
  if (playing) {
    const steer = (input.right - input.left) + (input.pointerX ?? 0);
    const st = Math.max(-1, Math.min(1, steer));
    const baseV = 34 + 42 * difficulty;
    const latMax = 11 + G.v * 0.12;
    const drifting = input.drift && G.v > 20;

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

    G.s += G.v * dt; G.u += G.vu * dt;
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

    // collisions
    for (const o of objects) {
      const ds = o.s - G.s;
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
    if (G.crashT > 1.6) gameOver();
  }
  if (G.mode === 'over') { G.v *= Math.pow(0.3, dt); G.s += G.v * dt; }

  G.slowmo += (1 - G.slowmo) * Math.min(1, dt * 1.6);
  G.hit = Math.max(0, G.hit - dt * 1.2);
  G.shake = Math.max(0, G.shake - dt * 2);

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
  const p = board.root.position.set(roadX(s) + G.u, roadY(s) + G.hover, -s);
  tmp.copy(p).sub(fwd); board.root.lookAt(tmp);
  if (G.mode !== 'crash') {
    const lean = -G.vu / 16;
    board.tilt.rotation.z += (lean * 0.55 - board.tilt.rotation.z) * Math.min(1, dt * 8);
    board.tilt.rotation.y += (G.drift * -0.9 - board.tilt.rotation.y) * Math.min(1, dt * 8);
    board.tilt.rotation.x = Math.sin(G.time * 3.1) * 0.02;
    const crouch = 0.35 + Math.min(1, G.v / 70) * 0.45 + (input.drift && G.mode === 'play' ? 0.25 : 0) + G.boost * 0.15;
    if (rider) rider.update(realDt, board.tilt, Math.min(1, crouch), -lean, Math.abs(G.drift), Math.min(1, G.v / 70));
    else board.pose(dt, crouch, -lean, G.drift, Math.min(1, G.v / 70));
  }
  // thrusters
  const glowAmt = 0.45 + G.boost * 0.5 + Math.sin(G.time * 30) * 0.05;
  board.glow.material.opacity = glowAmt;
  board.ringMat.emissiveIntensity = 5 + G.boost * 10;
  if (G.mode === 'play' || G.mode === 'menu') {
    for (const pod of board.pods) {
      pod.getWorldPosition(tmp);
      const n = 2 + Math.floor(G.boost * 4);
      for (let i = 0; i < n; i++) thrust.emit(tmp, tmp2.set((Math.random() - 0.5) * 1.2, -1.5 - Math.random(), (Math.random() - 0.5) * 1.2).addScaledVector(fwd, -G.v * 0.15), cyan, 0.16 + G.boost * 0.18, 0.18 + Math.random() * 0.12);
    }
    // road dust kicked up behind the board
    if (Math.random() < 0.6) {
      tmp.set(p.x + (Math.random() - 0.5) * 1.2, roadY(s) + 0.1, p.z + 1);
      dustP.emit(tmp, tmp2.set((Math.random() - 0.5) * 3, 0.6 + Math.random(), 4), new THREE.Color(0.75, 0.7, 0.62), 1.6, 0.8);
    }
  }
  thrust.update(dt, 0.92); sparks.update(dt, 0.96, 18); dustP.update(dt, 0.95, -0.5);

  // ---------- camera ----------
  const speedN = Math.min(1.4, G.v / 70);
  const back = 3.4 + speedN * 1.0, height = 1.55 + speedN * 0.15;
  const sAhead = s + 10;
  tmp.set(p.x, p.y, p.z).addScaledVector(fwd, -back); tmp.y = Math.max(tmp.y, roadY(s - back) + height) + 0.0;
  tmp.y = p.y + height;
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

  haze.position.copy(camera.position);
  // sun + shadow camera follow the player
  sun.target.position.copy(p);
  sun.position.copy(p).addScaledVector(SUN_DIR, 150);

  speedLines.update(dt, G.v, Math.max(0, speedN - 0.75) * 2 + G.boost);
  fxPass.uniforms.uSpeed.value = Math.max(0, speedN - 0.55) * 1.2 + G.boost * 0.8;
  fxPass.uniforms.uHit.value = G.hit;
  fxPass.uniforms.uTime.value = G.time;
  bloom.strength = 0.5 + G.boost * 0.35;
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
    if (G.mode === 'menu' || G.mode === 'over') { if (e.code === 'Space' && !e.repeat) startRun(); return; }
    input.drift = true;
  }
  if (e.code === 'KeyR' && G.mode === 'over') startRun();
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
document.getElementById('play').addEventListener('click', () => { sfx.unlock(); startRun(); });
document.getElementById('again').addEventListener('click', () => startRun());
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
  const loadImg = src => new Promise(res => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });
  const [hdr, grassImg, gltf] = await Promise.all([
    new HDRLoader().loadAsync('assets/' + SKY.file),
    loadImg('assets/grasslight-big.jpg'),
    new GLTFLoader().loadAsync('assets/rider.glb').catch(() => null),
  ]);
  hdr.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = hdr;
  scene.backgroundRotation.y = SKY.rot; scene.environmentRotation.y = SKY.rot;
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromEquirectangular(hdr).texture;
  scene.environmentIntensity = 0.6;
  scene.backgroundIntensity = 1.0;

  const tex = makeTextures(grassImg);
  chunks = new ChunkManager(scene, tex);
  obstacleAssets();
  board = makeBoard(); scene.add(board.root);
  board.root.traverse(o => { if (o.isMesh) o.castShadow = true; });
  if (gltf) { rider = makeRider(gltf, 0.11); board.rider.visible = false; board.tilt.add(rider.object); }
  thrust = new Particles(1200, radialTex());
  sparks = new Particles(800, radialTex());
  dustP = new Particles(300, radialTex('rgba(255,255,255,0.5)'), THREE.NormalBlending); dustP.mat.uniforms.opacity.value = 0.12;
  scene.add(camera); speedLines = new SpeedLines();
  chunks.prime(0);
  renderer.compile(scene, camera);
  G.mode = 'menu';
  ui.best.textContent = G.best.toLocaleString();
  ui.loading.classList.add('hidden'); ui.menu.classList.remove('hidden');
  try { SDK.cg?.game.loadingStop(); } catch { }
  if (qs.has('autoplay')) startRun();
  requestAnimationFrame(frame);
  window.__G = G; window.__input = input; window.__step = (n, dt = 1 / 60) => { for (let i = 0; i < n; i++) update(dt); }; window.__dbg = () => ({ cam: camera.position.toArray().map(v=>v|0), p: board.root.position.toArray().map(v=>v|0), ch: chunks.chunks.map(c=>c.index), fov: camera.fov|0 });
}
boot();
