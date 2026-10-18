import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

const $ = id => document.getElementById(id);
const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;

// ---------- Save state ----------
const S = { coins: 0, stock: 0, best: 0, launches: 0, up: { saw: 0, cargo: 0, speed: 0, engine: 0 } };
try { Object.assign(S, JSON.parse(localStorage.getItem('timberRocket') || '{}')); } catch (e) {}
const save = () => { try { localStorage.setItem('timberRocket', JSON.stringify(S)); } catch (e) {} };
const UP = {
  saw:    { base: 40,  name: 'Saw Blade' },
  cargo:  { base: 50,  name: 'Cargo Bed' },
  speed:  { base: 45,  name: 'Motor' },
  engine: { base: 80,  name: 'Rocket Engine' }
};
const upCost = k => Math.round(UP[k].base * Math.pow(1.6, S.up[k]));
const capacity = () => 8 + S.up.cargo * 4;
const cutTime = () => 0.9 / (1 + S.up.saw * 0.35);
const maxSpeed = () => 14 + S.up.speed * 3;

// ---------- Renderer ----------
{ const c = document.createElement('canvas'); if (!(c.getContext('webgl2') || c.getContext('webgl'))) { window.__fail('WebGL is not available on this device/browser. Enable hardware acceleration or try Chrome.'); throw new Error('no webgl'); } }
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
document.body.prepend(renderer.domElement);

const scene = new THREE.Scene();
const SKY_DAY = new THREE.Color(0x8fc6ff), SKY_SPACE = new THREE.Color(0x02030a);
scene.background = SKY_DAY.clone();
scene.fog = new THREE.FogExp2(0xcfe0ee, 0.004);
const FOG_D = 0.004;
// gradient sky dome with sun glow; `space` fades it to black
const skyU = { top: { value: new THREE.Color(0x2a66c8) }, hor: { value: new THREE.Color(0xe9dcc8) }, sunDir: { value: new THREE.Vector3(0.55, 0.32, 0.4).normalize() }, space: { value: 0 } };
const sky = new THREE.Mesh(new THREE.SphereGeometry(30000, 48, 24), new THREE.ShaderMaterial({
  side: THREE.BackSide, depthWrite: false, fog: false, uniforms: skyU,
  vertexShader: `varying vec3 vD;void main(){vD=normalize(position);vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p.xyww;}`,
  fragmentShader: `uniform vec3 top,hor,sunDir;uniform float space;varying vec3 vD;
    void main(){float h=clamp(vD.y,0.,1.);vec3 c=mix(hor,top,pow(h,.45));c=mix(c,hor*.9,smoothstep(.0,-.2,vD.y));
    float s=max(dot(vD,sunDir),0.);c+=vec3(1.,.8,.5)*pow(s,8.)*.45+vec3(1.,.95,.8)*pow(s,900.)*8.;
    vec3 sp=vec3(.005,.008,.02)+vec3(1.,.95,.85)*pow(s,1500.)*10.;c=mix(c,sp,space);gl_FragColor=vec4(c,1.);}`
}));
sky.frustumCulled = false; sky.renderOrder = -1; scene.add(sky);
scene.background = null;
const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.5, 40000);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.45, 0.55, 0.9);
composer.addPass(bloom);
composer.addPass(new OutputPass());
// final grade: warm lift, saturation, subtle film grain
const grade = new ShaderPass({ uniforms: { tDiffuse: { value: null }, t: { value: 0 } },
  vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader: `uniform sampler2D tDiffuse;uniform float t;varying vec2 vUv;
    void main(){vec4 c=texture2D(tDiffuse,vUv);float l=dot(c.rgb,vec3(.299,.587,.114));c.rgb=mix(vec3(l),c.rgb,1.15);
    c.rgb=c.rgb*vec3(1.03,1.,.96)+vec3(.012,.008,.0);float n=fract(sin(dot(vUv*vec2(t*.37+1.,t*.71+1.),vec2(12.9898,78.233)))*43758.5453);
    c.rgb+=(n-.5)*.025;gl_FragColor=c;}` });
composer.addPass(grade);

// ---------- Lights ----------
const hemi = new THREE.HemisphereLight(0xbfdcff, 0x4a5a2a, 0.75);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffe2b8, 3.2);
const SUN_OFF = new THREE.Vector3(70, 42, 50);
sun.position.copy(SUN_OFF);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048); sun.shadow.normalBias = 0.04;
const sc = sun.shadow.camera; sc.left = -70; sc.right = 70; sc.top = 70; sc.bottom = -70; sc.far = 300;
sun.shadow.bias = -0.0004;
scene.add(sun, sun.target);

// ---------- Terrain ----------
const WORLD = 180;
const heightAt = (x, z) => {
  const d = Math.hypot(x - PAD.x, z - PAD.z);
  let h = Math.sin(x * 0.045) * 1.6 + Math.cos(z * 0.05) * 1.4 + Math.sin((x + z) * 0.11) * 0.5;
  return h * clamp((d - 18) / 20, 0, 1);
};
const PAD = { x: 0, z: -60 };
const DEPOT = { x: 16, z: -46 };
{
  const g = new THREE.PlaneGeometry(WORLD * 2.4, WORLD * 2.4, 160, 160);
  g.rotateX(-Math.PI / 2);
  const p = g.attributes.position, cols = [];
  const c1 = new THREE.Color(0x4f8a35), c2 = new THREE.Color(0x7aa846), c3 = new THREE.Color(0x9b8a5a);
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i), h = heightAt(x, z);
    p.setY(i, h);
    const n = Math.sin(x * 0.3) * Math.cos(z * 0.27) * 0.25 + Math.sin(x * 0.07 + z * 0.05) * 0.3 + Math.random() * 0.12;
    const c = c1.clone().lerp(c2, clamp(0.5 + h * 0.2 + n, 0, 1));
    if (n > 0.38) c.lerp(new THREE.Color(0xa7b04a), 0.5);
    const pd = Math.hypot(x - PAD.x, z - PAD.z);
    if (pd < 22) c.lerp(c3, 0.6 * clamp((26 - pd) / 6, 0, 1) + 0.0);
    // dirt track from spawn to depot
    const tx = x - lerp(0, DEPOT.x, clamp((10 - z) / 56, 0, 1));
    if (z < 14 && z > DEPOT.z && Math.abs(tx) < 2.6) c.lerp(c3, 0.55 * (1 - Math.abs(tx) / 2.6));
    cols.push(c.r, c.g, c.b);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  g.computeVertexNormals();
  const ground = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
  ground.receiveShadow = true;
  scene.add(ground);
  // distant mountains ring
  const mg = new THREE.ConeGeometry(1, 1, 6);
  const mm = new THREE.MeshStandardMaterial({ color: 0x6f8aa8, roughness: 1, flatShading: true });
  const snowM = new THREE.MeshStandardMaterial({ color: 0xf4f8ff, roughness: 0.8, flatShading: true });
  for (let i = 0; i < 40; i++) {
    const a = i / 40 * Math.PI * 2 + rand(-.05, .05), r = rand(270, 320);
    const m = new THREE.Mesh(mg, mm); const s = rand(40, 90);
    m.scale.set(s, s * rand(0.6, 1.1), s); m.position.set(Math.cos(a) * r, s * 0.4, Math.sin(a) * r); m.rotation.y = rand(0, 6);
    scene.add(m);
    const cap = new THREE.Mesh(mg, snowM); cap.scale.set(s * 0.345, m.scale.y * 0.33, s * 0.345); cap.position.set(m.position.x, m.position.y + m.scale.y * 0.34, m.position.z); cap.rotation.y = m.rotation.y; scene.add(cap);
  }
}

// grass tufts (instanced)
{
  const g = new THREE.ConeGeometry(0.12, 0.6, 3); g.translate(0, 0.3, 0);
  const m = new THREE.MeshStandardMaterial({ color: 0x6fae3e, roughness: 1 });
  const N = 5000, inst = new THREE.InstancedMesh(g, m, N), d = new THREE.Object3D();
  for (let i = 0; i < N; i++) {
    const x = rand(-WORLD, WORLD), z = rand(-WORLD, WORLD);
    if (Math.hypot(x - PAD.x, z - PAD.z) < 24) { d.scale.setScalar(0); } else d.scale.setScalar(rand(0.6, 1.4));
    d.position.set(x, heightAt(x, z), z); d.rotation.set(rand(-.2, .2), rand(0, 6), rand(-.2, .2)); d.updateMatrix();
    inst.setMatrixAt(i, d.matrix);
    inst.setColorAt(i, new THREE.Color().setHSL(rand(0.24, 0.3), 0.55, rand(0.3, 0.45)));
  }
  scene.add(inst);
}

// rocks, flowers, bushes
{
  const d = new THREE.Object3D();
  const rockG = new THREE.DodecahedronGeometry(1, 0), rockM = new THREE.MeshStandardMaterial({ color: 0x8b8f94, roughness: 0.9, flatShading: true });
  const rocks = new THREE.InstancedMesh(rockG, rockM, 140);
  for (let i = 0; i < 140; i++) {
    let x = rand(-WORLD, WORLD), z = rand(-WORLD, WORLD); if (Math.hypot(x - PAD.x, z - PAD.z) < 28) x += 60;
    const s = rand(0.3, 1.3); d.position.set(x, heightAt(x, z) + s * 0.2, z); d.scale.set(s * rand(0.8, 1.6), s * rand(0.5, 0.9), s); d.rotation.set(rand(0, 3), rand(0, 3), rand(0, 3)); d.updateMatrix();
    rocks.setMatrixAt(i, d.matrix); rocks.setColorAt(i, new THREE.Color().setHSL(0.1, 0.05, rand(0.4, 0.6)));
  }
  rocks.castShadow = rocks.receiveShadow = true; scene.add(rocks);
  const fG = new THREE.IcosahedronGeometry(0.13, 0), fM = new THREE.MeshStandardMaterial({ roughness: 0.6, emissive: 0x111111 });
  const fl = new THREE.InstancedMesh(fG, fM, 1800), pal = [0xffffff, 0xffd84a, 0xff6f91, 0xb48cff, 0xff9a3c];
  for (let i = 0; i < 1800; i++) {
    const cx = rand(-WORLD, WORLD), cz = rand(-WORLD, WORLD), x = cx + rand(-3, 3), z = cz + rand(-3, 3);
    d.position.set(x, heightAt(x, z) + 0.35, z); d.scale.setScalar(Math.hypot(x - PAD.x, z - PAD.z) < 26 ? 0 : rand(0.7, 1.3)); d.rotation.set(0, 0, 0); d.updateMatrix();
    fl.setMatrixAt(i, d.matrix); fl.setColorAt(i, new THREE.Color(pal[(Math.abs(Math.sin(cx * 12.9 + cz)) * 5) | 0]));
  }
  scene.add(fl);
  const bG = new THREE.IcosahedronGeometry(1, 1), bM = new THREE.MeshStandardMaterial({ color: 0x3f7a2e, roughness: 0.85, flatShading: true });
  const bush = new THREE.InstancedMesh(bG, bM, 260);
  for (let i = 0; i < 260; i++) {
    const x = rand(-WORLD, WORLD), z = rand(-WORLD, WORLD), s = rand(0.5, 1.2);
    d.position.set(x, heightAt(x, z) + s * 0.3, z); d.scale.set(s * 1.3, s * 0.8, s * 1.1); d.updateMatrix();
    if (Math.hypot(x - PAD.x, z - PAD.z) < 26) { d.scale.setScalar(0); d.updateMatrix(); }
    bush.setMatrixAt(i, d.matrix); bush.setColorAt(i, new THREE.Color().setHSL(rand(0.24, 0.32), 0.5, rand(0.25, 0.4)));
  }
  bush.castShadow = true; scene.add(bush);
  // pond
  const pond = new THREE.Mesh(new THREE.CircleGeometry(14, 48), new THREE.MeshPhysicalMaterial({ color: 0x2a6f8f, roughness: 0.05, metalness: 0.1, clearcoat: 1, transparent: true, opacity: 0.88 }));
  pond.rotation.x = -Math.PI / 2; pond.position.set(-55, heightAt(-55, 40) + 0.25, 40); scene.add(pond); window.__pond = pond;
}
// floating pollen / fireflies
const pollen = (() => {
  const N = 500, g = new THREE.BufferGeometry(), p = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { p[i * 3] = rand(-60, 60); p[i * 3 + 1] = rand(0.5, 12); p[i * 3 + 2] = rand(-60, 60); }
  g.setAttribute('position', new THREE.BufferAttribute(p, 3));
  const m = new THREE.PointsMaterial({ color: 0xfff1b0, size: 0.12, transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending });
  const pts = new THREE.Points(g, m); scene.add(pts); return pts;
})();

// ---------- Trees ----------
const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6b4527, roughness: 0.9 });
const leafMats = [0x2f6b2a, 0x3c7d2f, 0x285e2c, 0x4a8a33, 0x5b8f2e, 0x6e9a35].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8, flatShading: true }));
const logMat = new THREE.MeshStandardMaterial({ color: 0x8a5a33, roughness: 0.85 });
const logEndMat = new THREE.MeshStandardMaterial({ color: 0xe0b77a, roughness: 0.8 });
const trunkGeo = new THREE.CylinderGeometry(0.28, 0.42, 3, 8); trunkGeo.translate(0, 1.5, 0);
const pineGeo = new THREE.ConeGeometry(1.8, 3.2, 8);
const roundGeo = new THREE.IcosahedronGeometry(1.7, 1);
const trees = [];
function makeTree(x, z) {
  const t = new THREE.Group();
  const pivot = new THREE.Group(); t.add(pivot);
  const tr = new THREE.Mesh(trunkGeo, trunkMat); tr.castShadow = true; pivot.add(tr);
  const lm = leafMats[(Math.random() * leafMats.length) | 0];
  if (Math.random() < 0.65) {
    for (let i = 0; i < 3; i++) {
      const c = new THREE.Mesh(pineGeo, lm); c.position.y = 3 + i * 1.5; c.scale.setScalar(1 - i * 0.25);
      c.castShadow = true; pivot.add(c);
    }
  } else {
    const c = new THREE.Mesh(roundGeo, lm); c.position.y = 4.2; c.scale.set(1, 1.15, 1); c.castShadow = true; pivot.add(c);
    const c2 = new THREE.Mesh(roundGeo, lm); c2.position.set(0.8, 3.6, 0.3); c2.scale.setScalar(0.7); c2.castShadow = true; pivot.add(c2);
  }
  const s = rand(0.85, 1.3); t.scale.setScalar(s);
  t.position.set(x, heightAt(x, z) - 0.05, z); t.rotation.y = rand(0, 6.28);
  scene.add(t);
  const tree = { g: t, pivot, x, z, ph: rand(0, 6.28), state: 'alive', cut: 0, fall: 0, fallDir: 0, regrow: 0, logs: 2 + Math.round(s * 1.5), s };
  trees.push(tree); return tree;
}
for (let i = 0; i < 340; i++) {
  let x, z, tries = 0;
  do { x = rand(-WORLD * 0.9, WORLD * 0.9); z = rand(-WORLD * 0.9, WORLD * 0.9); tries++; }
  while ((Math.hypot(x - PAD.x, z - PAD.z) < 30 || Math.hypot(x, z - 10) < 10 || trees.some(t => Math.hypot(t.x - x, t.z - z) < 4.5)) && tries < 40);
  makeTree(x, z);
}

// ---------- Harvester (forestry harvester: articulated 8-wheeler with crane + felling head) ----------
const harv = new THREE.Group();
const paint = new THREE.MeshStandardMaterial({ color: 0xf2a516, roughness: 0.35, metalness: 0.3 });
const paint2 = new THREE.MeshStandardMaterial({ color: 0x2f4d2a, roughness: 0.45, metalness: 0.3 });
const dark = new THREE.MeshStandardMaterial({ color: 0x23262b, roughness: 0.6, metalness: 0.4 });
const rubber = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.95, flatShading: true });
const glass = new THREE.MeshPhysicalMaterial({ color: 0x223844, roughness: 0.05, metalness: 0.2, transmission: 0, transparent: true, opacity: 0.55, clearcoat: 1 });
const steel = new THREE.MeshStandardMaterial({ color: 0xd5dbe2, roughness: 0.25, metalness: 1 });
const lamp = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2c0, emissiveIntensity: 4 });
const addBox = (w, h, d, mat, x, y, z, parent = harv) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m; };
const addCyl = (rt, rb, h, mat, x, y, z, parent = harv, seg = 12) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat); m.position.set(x, y, z); m.castShadow = true; parent.add(m); return m; };
// chunky lugged tyres
const tyreGeo = (() => {
  const sh = new THREE.Shape(), lugs = 16, R = 0.66, r = 0.58;
  for (let i = 0; i < lugs * 4; i++) { const a = i / (lugs * 4) * Math.PI * 2, rr = (i % 4 < 2) ? R : r; i ? sh.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : sh.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); }
  const hole = new THREE.Path(); hole.absarc(0, 0, 0.34, 0, Math.PI * 2, true); sh.holes.push(hole);
  const g = new THREE.ExtrudeGeometry(sh, { depth: 0.55, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 1 }); g.center(); g.rotateY(Math.PI / 2); return g;
})();
const wheels = [];
for (const z of [2.75, 1.6, -1.55, -2.7]) for (const x of [1.3, -1.3]) {
  const w = new THREE.Mesh(tyreGeo, rubber); w.position.set(x, 0.66, z); w.castShadow = true; harv.add(w); wheels.push(w);
  const rim = addCyl(0.36, 0.36, 0.5, paint, 0, 0, 0, w, 14); rim.rotation.z = Math.PI / 2;
  const nut = addCyl(0.12, 0.12, 0.56, dark, 0, 0, 0, w, 8); nut.rotation.z = Math.PI / 2;
}
// bogie beams
for (const x of [1.3, -1.3]) { addBox(0.2, 0.3, 1.6, dark, x * 0.84, 0.66, 2.18); addBox(0.2, 0.3, 1.6, dark, x * 0.84, 0.66, -2.12); }
// front frame + cab
addBox(1.7, 0.6, 3.4, paint, 0, 1.15, 1.95);
addBox(1.72, 0.12, 3.42, dark, 0, 0.88, 1.95);
addCyl(0.38, 0.38, 0.7, dark, 0, 1.1, 0.15, harv, 16); // articulation joint
const cab = new THREE.Group(); cab.position.set(0, 1.45, 1.15); harv.add(cab);
addBox(1.75, 0.35, 1.7, paint, 0, 0.17, 0, cab);
addBox(1.6, 1.25, 1.55, glass, 0, 0.98, 0, cab);
for (const [x, z] of [[0.8, 0.78], [-0.8, 0.78], [0.8, -0.78], [-0.8, -0.78]]) addBox(0.09, 1.3, 0.09, dark, x, 0.98, z, cab);
addBox(1.6, 0.06, 0.06, dark, 0, 0.62, 0.79, cab);
addBox(1.95, 0.16, 1.95, paint, 0, 1.68, 0, cab);
addBox(1.2, 0.12, 0.25, dark, 0, 1.82, 0.7, cab);
for (const x of [-0.45, -0.15, 0.15, 0.45]) addBox(0.2, 0.12, 0.06, lamp, x, 1.82, 0.84, cab);
const seat = addBox(0.5, 0.5, 0.5, dark, 0, 0.6, -0.2, cab);
// rear frame: engine hood, grille, exhaust, log bunk
addBox(1.9, 0.7, 3.6, paint, 0, 1.2, -2.15);
addBox(1.92, 0.12, 3.62, dark, 0, 0.9, -2.15);
const hood = addBox(1.75, 0.85, 1.3, paint, 0, 1.95, -0.85);
addBox(1.6, 0.08, 1.15, paint2, 0, 2.42, -0.85);
for (let k = 0; k < 5; k++) addBox(0.04, 0.5, 1.0, dark, 0.89, 1.95, -0.85 - 0 + (k - 2) * 0.0).position.z = -0.85 + (k - 2) * 0.22;
const stack = addCyl(0.09, 0.11, 1.2, steel, 0.6, 2.8, -0.55, harv, 10);
addCyl(0.13, 0.13, 0.1, dark, 0.6, 3.4, -0.55, harv, 10);
for (const z of [-1.75, -3.65]) { addBox(1.9, 0.14, 0.18, dark, 0, 1.62, z); for (const x of [0.9, -0.9]) addBox(0.12, 1.5, 0.12, steel, x, 2.3, z); }
addBox(1.9, 0.9, 0.08, dark, 0, 2.0, -1.55); // headboard
for (let k = 0; k < 6; k++) addBox(1.6, 0.05, 0.03, steel, 0, 1.65 + k * 0.13, -1.5);
addBox(1.2, 0.18, 0.06, lamp, 0, 1.25, -3.97).material = new THREE.MeshStandardMaterial({ color: 0xff3030, emissive: 0xff1010, emissiveIntensity: 2 });
const beaconM = new THREE.MeshStandardMaterial({ color: 0xff8a00, emissive: 0xff7a00, emissiveIntensity: 3 });
const beacons = [-0.7, 0.7].map(x => addCyl(0.1, 0.12, 0.18, beaconM, x, 1.85, -0.75, cab, 10));
const headL = new THREE.PointLight(0xfff0c8, 4, 12, 2); headL.position.set(0, 1.6, 5.5); harv.add(headL);
// crane: turret -> boom1 -> boom2 -> felling head (hangs vertical)
const CR = { root: new THREE.Vector3(0, 1.85, 3.05), L1: 2.7, L2: 2.9 };
const turret = new THREE.Group(); turret.position.copy(CR.root); harv.add(turret);
addCyl(0.45, 0.55, 0.4, dark, 0, -0.2, 0, turret, 18);
addCyl(0.3, 0.3, 0.5, paint, 0, 0.1, 0, turret, 14);
const boom1 = new THREE.Group(); boom1.position.y = 0.3; turret.add(boom1);
addBox(0.3, 0.36, CR.L1, paint, 0, 0, CR.L1 / 2, boom1);
const hyd1 = addCyl(0.07, 0.07, CR.L1 * 0.7, steel, 0, -0.28, CR.L1 * 0.4, boom1, 8); hyd1.rotation.x = Math.PI / 2;
addCyl(0.1, 0.1, CR.L1 * 0.35, dark, 0, -0.28, CR.L1 * 0.15, boom1, 8).rotation.x = Math.PI / 2;
const boom2 = new THREE.Group(); boom2.position.z = CR.L1; boom1.add(boom2);
addCyl(0.2, 0.2, 0.42, dark, 0, 0, 0, boom2, 12).rotation.z = Math.PI / 2;
addBox(0.24, 0.28, CR.L2, paint, 0, 0, CR.L2 / 2, boom2);
addBox(0.16, 0.2, CR.L2 * 0.6, paint2, 0, 0, CR.L2 * 0.75, boom2);
addCyl(0.06, 0.06, CR.L2 * 0.6, steel, 0, 0.22, CR.L2 * 0.4, boom2, 8).rotation.x = Math.PI / 2;
const head = new THREE.Group(); head.position.z = CR.L2; boom2.add(head);
const headYaw = new THREE.Group(); head.add(headYaw);
addCyl(0.12, 0.12, 0.35, dark, 0, -0.18, 0, headYaw, 10);
addBox(0.6, 0.95, 0.42, paint, 0, -0.85, 0, headYaw);
addBox(0.62, 0.1, 0.44, dark, 0, -0.4, 0, headYaw);
const rollers = [];
for (const x of [-0.32, 0.32]) { const r = addCyl(0.16, 0.16, 0.5, dark, x, -0.85, 0.3, headYaw, 7); rollers.push(r); }
const grabs = [];
for (const sgn of [-1, 1]) { const g = new THREE.Group(); g.position.set(sgn * 0.3, -0.55, 0.2); headYaw.add(g); addBox(0.08, 0.14, 0.6, dark, sgn * 0.12, 0, 0.3, g); addBox(0.08, 0.14, 0.32, dark, -sgn * 0.02, 0, 0.62, g).rotation.y = -sgn * 0.9; grabs.push(g); }
const barG = new THREE.Group(); barG.position.set(-0.22, -1.32, 0); headYaw.add(barG);
addBox(0.12, 0.06, 1.15, steel, 0, 0, 0.55, barG);
addBox(0.14, 0.03, 1.2, new THREE.MeshStandardMaterial({ color: 0x555a60, metalness: 1, roughness: 0.3 }), 0, 0.04, 0.55, barG);
addCyl(0.13, 0.13, 0.1, paint, 0, 0, 0, barG, 12);
const craneCur = new THREE.Vector3(0, 0.4, 2.0), craneRest = new THREE.Vector3(0, 1.0, 3.4);
function solveCrane(tgt) {
  turret.rotation.y = Math.atan2(tgt.x, tgt.z);
  const d = Math.max(0.2, Math.hypot(tgt.x, tgt.z)), h = tgt.y - 0.3, L1 = CR.L1, L2 = CR.L2;
  const r = clamp(Math.hypot(d, h), 0.8, L1 + L2 - 0.02);
  const a1 = Math.atan2(h, d) + Math.acos(clamp((L1 * L1 + r * r - L2 * L2) / (2 * L1 * r), -1, 1));
  const el = Math.PI - Math.acos(clamp((L1 * L1 + L2 * L2 - r * r) / (2 * L1 * L2), -1, 1));
  boom1.rotation.x = -a1; boom2.rotation.x = el; head.rotation.x = -(boom1.rotation.x + boom2.rotation.x);
}
solveCrane(craneCur);
const cargoLogs = new THREE.Group(); harv.add(cargoLogs);
scene.add(harv);
const car = { x: 0, z: 10, yaw: Math.PI, v: 0, cargo: 0 };
harv.position.set(car.x, heightAt(car.x, car.z), car.z); harv.rotation.y = car.yaw;
const logGeo = new THREE.CylinderGeometry(0.22, 0.22, 2.0, 10); logGeo.rotateZ(Math.PI / 2);
function makeLog() {
  const m = new THREE.Mesh(logGeo, [logMat, logEndMat, logEndMat]); m.castShadow = true; return m;
}
function refreshCargoVisual() {
  while (cargoLogs.children.length > car.cargo) cargoLogs.remove(cargoLogs.children[cargoLogs.children.length - 1]);
  while (cargoLogs.children.length < car.cargo) {
    const i = cargoLogs.children.length, l = makeLog();
    const row = i % 4, layer = (i / 4) | 0;
    l.rotation.y = Math.PI / 2; l.position.set(-0.66 + row * 0.44 + (layer % 2) * 0.1, 1.82 + layer * 0.4, -2.7);
    cargoLogs.add(l);
  }
}

// ---------- Launch pad & depot ----------
const padG = new THREE.Group(); padG.position.set(PAD.x, 0, PAD.z); scene.add(padG);
const concrete = new THREE.MeshStandardMaterial({ color: 0x9aa0a6, roughness: 0.85 });
{
  const base = new THREE.Mesh(new THREE.CylinderGeometry(9, 10, 0.8, 40), concrete); base.position.y = 0.4; base.receiveShadow = true; padG.add(base);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(6.5, 0.12, 8, 60), new THREE.MeshStandardMaterial({ color: 0xffb547, emissive: 0xff8a00, emissiveIntensity: 1.5 }));
  ring.rotation.x = Math.PI / 2; ring.position.y = 0.82; padG.add(ring);
  // tower
  const tw = new THREE.Group(); tw.position.set(-5.5, 0.8, 0); padG.add(tw);
  const red = new THREE.MeshStandardMaterial({ color: 0xc8352b, roughness: 0.5, metalness: 0.4 });
  for (const [x, z] of [[-.8, -.8], [.8, -.8], [-.8, .8], [.8, .8]]) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.18, 26, 0.18), red); b.position.set(x, 13, z); b.castShadow = true; tw.add(b); }
  for (let y = 1; y < 26; y += 2) { const b = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.12, 0.12), red); b.position.set(0, y, 0.8); tw.add(b); const b2 = b.clone(); b2.position.z = -.8; tw.add(b2); }
  const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 8), new THREE.MeshStandardMaterial({ color: 0xff2020, emissive: 0xff2020, emissiveIntensity: 4 }));
  beacon.position.y = 26.4; tw.add(beacon); padG.userData.beacon = beacon;
}
const depotG = new THREE.Group(); depotG.position.set(DEPOT.x, heightAt(DEPOT.x, DEPOT.z), DEPOT.z); scene.add(depotG);
{
  const pl = new THREE.Mesh(new THREE.BoxGeometry(8, 0.3, 8), concrete); pl.position.y = 0.15; pl.receiveShadow = true; depotG.add(pl);
  const mark = new THREE.Mesh(new THREE.RingGeometry(3.2, 3.6, 40), new THREE.MeshBasicMaterial({ color: 0x7dff9a, transparent: true, opacity: .8 }));
  mark.rotation.x = -Math.PI / 2; mark.position.y = 0.32; depotG.add(mark); depotG.userData.mark = mark;
  const roof = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.3, 4), new THREE.MeshStandardMaterial({ color: 0x2f6f8f, metalness: .4, roughness: .4 }));
  roof.position.set(0, 5, -3); roof.castShadow = true; depotG.add(roof);
  for (const x of [-3.8, 3.8]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.3, 5, 0.3), dark); p.position.set(x, 2.5, -1.2); depotG.add(p); }
}
const depotArrow = (() => { const g = new THREE.Group(), m = new THREE.MeshStandardMaterial({ color: 0x7dff9a, emissive: 0x2fff6a, emissiveIntensity: 1.5 });
  const sh = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.3, 16), m); sh.rotation.x = Math.PI / 2; sh.position.z = 1.0; g.add(sh);
  const b = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.25, 1.2), m); g.add(b); g.visible = false; scene.add(g); return g; })();
{ const beam = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.4, 60, 32, 1, true), new THREE.MeshBasicMaterial({ color: 0x7dff9a, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
  beam.position.y = 30; depotG.add(beam); }
const pileG = new THREE.Group(); pileG.position.set(DEPOT.x + 7, depotG.position.y, DEPOT.z - 2); scene.add(pileG);
function refreshPile() {
  const n = Math.min(S.stock, 60);
  while (pileG.children.length > n) pileG.remove(pileG.children[pileG.children.length - 1]);
  while (pileG.children.length < n) {
    const i = pileG.children.length, l = makeLog();
    const layer = Math.floor(Math.sqrt(i * 0.5)), row = i % 6;
    l.rotation.y = Math.PI / 2; l.position.set(row * 0.46 - 1.2 + (layer % 2) * 0.23, 0.22 + Math.floor(i / 6) * 0.4, 0);
    pileG.add(l);
  }
}

// ---------- Rocket ----------
let rocket = null;
const rocketMats = {
  wood: logMat,
  band: new THREE.MeshStandardMaterial({ color: 0xe8ecf0, metalness: 0.9, roughness: 0.25 }),
  nose: new THREE.MeshStandardMaterial({ color: 0xd83a2e, metalness: 0.3, roughness: 0.35 }),
  fin: new THREE.MeshStandardMaterial({ color: 0xd83a2e, metalness: 0.3, roughness: 0.35 })
};
function buildRocket(logs) {
  const r = new THREE.Group();
  const segs = clamp(Math.round(2 + logs / 6), 3, 14);
  const rad = 1.1 + Math.min(logs, 120) * 0.004;
  const parts = [];
  const segGeo = new THREE.CylinderGeometry(rad, rad, 1.6, 20, 1);
  // wood plank texture via slats
  for (let i = 0; i < segs; i++) {
    const s = new THREE.Group(); s.position.y = 1.2 + i * 1.7;
    const body = new THREE.Mesh(segGeo, rocketMats.wood); body.castShadow = true; s.add(body);
    const band = new THREE.Mesh(new THREE.TorusGeometry(rad + 0.02, 0.07, 6, 30), rocketMats.band); band.rotation.x = Math.PI / 2; band.position.y = 0.82; s.add(band);
    for (let k = 0; k < 10; k++) { const sl = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.6, 0.05), trunkMat); const a = k / 10 * Math.PI * 2; sl.position.set(Math.cos(a) * rad, 0, Math.sin(a) * rad); s.add(sl); }
    r.add(s); parts.push(s);
  }
  const top = 1.2 + segs * 1.7 - 0.85;
  const nose = new THREE.Mesh(new THREE.ConeGeometry(rad, rad * 2.6, 24), rocketMats.nose); nose.position.y = top + rad * 1.3; nose.castShadow = true; r.add(nose); parts.push(nose);
  const window_ = new THREE.Mesh(new THREE.CircleGeometry(0.35, 20), glass); window_.position.set(0, top - 1.2, rad + 0.01); r.add(window_);
  for (let k = 0; k < 4; k++) {
    const fs = new THREE.Shape(); fs.moveTo(0, 0); fs.lineTo(1.4, -0.6); fs.lineTo(1.4, -1.6); fs.lineTo(0, 2.2); fs.lineTo(0, 0);
    const fg = new THREE.ExtrudeGeometry(fs, { depth: 0.12, bevelEnabled: false });
    const f = new THREE.Mesh(fg, rocketMats.fin); f.castShadow = true;
    const holder = new THREE.Group(); holder.rotation.y = k * Math.PI / 2; holder.add(f); f.position.set(rad - 0.1, 1.2, -0.06); r.add(holder); parts.unshift(holder);
  }
  const flame = new THREE.Mesh(new THREE.ConeGeometry(rad * 0.6, rad * 6, 20, 1, true), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: { t: { value: 0 } },
    vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `uniform float t;varying vec2 vUv;void main(){float y=vUv.y;float n=sin(y*30.-t*40.)*.5+.5;
      vec3 c=mix(vec3(1.,.35,.05),vec3(1.,.95,.75),pow(y,2.));float a=pow(y,1.5)*(.7+.3*n);gl_FragColor=vec4(c*a*1.6,a);}`
  }));
  flame.rotation.x = Math.PI; flame.position.y = -rad * 3 + 0.1; flame.visible = false; r.add(flame);
  const flameL = new THREE.PointLight(0xff8a30, 0, 60, 1.6); flameL.position.y = -2; r.add(flameL);
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(rad * 0.5, rad * 0.75, 0.9, 16, 1, true), dark); nozzle.position.y = 0.2; r.add(nozzle);
  r.userData = { parts, height: top + rad * 2.6, rad, flame, flameL };
  return r;
}

// ---------- Particles (fire / smoke / chips) ----------
const PMAX = 2500;
const pGeo = new THREE.BufferGeometry();
const pPos = new Float32Array(PMAX * 3), pCol = new Float32Array(PMAX * 3), pSize = new Float32Array(PMAX), pAlpha = new Float32Array(PMAX);
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
pGeo.setAttribute('size', new THREE.BufferAttribute(pSize, 1));
pGeo.setAttribute('alpha', new THREE.BufferAttribute(pAlpha, 1));
const pMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, blending: THREE.NormalBlending,
  uniforms: { scale: { value: innerHeight } },
  vertexShader: `attribute float size;attribute float alpha;attribute vec3 color;varying vec3 vC;varying float vA;uniform float scale;
    void main(){vC=color;vA=alpha;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=size*scale/(-mv.z);gl_Position=projectionMatrix*mv;}`,
  fragmentShader: `varying vec3 vC;varying float vA;void main(){vec2 c=gl_PointCoord-.5;float d=length(c);if(d>.5)discard;gl_FragColor=vec4(vC,vA*smoothstep(.5,.0,d));}`
});
const pts = new THREE.Points(pGeo, pMat); pts.frustumCulled = false; scene.add(pts);
const fGeo = pGeo.clone(); const fMat = pMat.clone(); fMat.blending = THREE.AdditiveBlending; fMat.uniforms = pMat.uniforms;
const fpts = new THREE.Points(fGeo, fMat); fpts.frustumCulled = false; fpts.renderOrder = 2; scene.add(fpts);
const parts = [], fire = [];
function emit(o) { const arr = o.add ? fire : parts; if (arr.length >= PMAX) arr.shift(); arr.push(Object.assign({ life: 1, max: 1, size: 1, grow: 0, drag: 0.98, g: 0, c0: [1, 1, 1], c1: [1, 1, 1], a: 1 }, o)); }
function updateParticles(dt) { stepPS(parts, pGeo, dt); stepPS(fire, fGeo, dt); }
function stepPS(parts, pGeo, dt) {
  const pPos = pGeo.attributes.position.array, pCol = pGeo.attributes.color.array, pSize = pGeo.attributes.size.array, pAlpha = pGeo.attributes.alpha.array;
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i]; p.life -= dt;
    if (p.life <= 0) { parts.splice(i, 1); continue; }
    p.vy -= p.g * dt; p.vx *= p.drag; p.vy *= p.drag; p.vz *= p.drag;
    p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt; p.size += p.grow * dt;
  }
  const n = parts.length;
  for (let i = 0; i < PMAX; i++) {
    if (i < n) {
      const p = parts[i], t = 1 - p.life / p.max;
      pPos[i * 3] = p.x; pPos[i * 3 + 1] = p.y; pPos[i * 3 + 2] = p.z;
      pCol[i * 3] = lerp(p.c0[0], p.c1[0], t); pCol[i * 3 + 1] = lerp(p.c0[1], p.c1[1], t); pCol[i * 3 + 2] = lerp(p.c0[2], p.c1[2], t);
      pSize[i] = p.size; pAlpha[i] = p.a * Math.min(1, p.life / p.max * 2.5);
    } else pAlpha[i] = 0;
  }
  pGeo.attributes.position.needsUpdate = pGeo.attributes.color.needsUpdate = pGeo.attributes.size.needsUpdate = pGeo.attributes.alpha.needsUpdate = true;
}

// ---------- Space environment ----------
const stars = (() => {
  const g = new THREE.BufferGeometry(), N = 4000, p = [];
  for (let i = 0; i < N; i++) { const v = new THREE.Vector3().randomDirection().multiplyScalar(15000); p.push(v.x, Math.abs(v.y) * 0.9 + v.y * 0.1, v.z); }
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  const m = new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
  return new THREE.Points(g, m);
})();
scene.add(stars);
const clouds = new THREE.Group(); scene.add(clouds);
{
  const cm = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, transparent: true, opacity: 0.9, fog: false });
  const cg = new THREE.IcosahedronGeometry(1, 1);
  for (let i = 0; i < 70; i++) {
    const c = new THREE.Group(); const y = rand(260, 700);
    c.position.set(rand(-500, 500), y, PAD.z + rand(-500, 500));
    for (let k = 0; k < 6; k++) { const b = new THREE.Mesh(cg, cm); b.position.set(rand(-25, 25), rand(-5, 5), rand(-12, 12)); b.scale.set(rand(14, 26), rand(8, 13), rand(10, 18)); c.add(b); }
    clouds.add(c);
  }
}
const planet = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 48), new THREE.MeshStandardMaterial({ color: 0x2c6fd0, roughness: 0.7, emissive: 0x0a2a60, emissiveIntensity: 0.5, fog: false }));
planet.visible = false; scene.add(planet);
const atmo = new THREE.Mesh(new THREE.SphereGeometry(1.03, 64, 48), new THREE.MeshBasicMaterial({ color: 0x6fc0ff, transparent: true, opacity: 0.25, side: THREE.BackSide, fog: false }));
planet.add(atmo);
const moon = new THREE.Mesh(new THREE.SphereGeometry(600, 32, 24), new THREE.MeshStandardMaterial({ color: 0xdedad0, roughness: 1, emissive: 0x333330, fog: false }));
moon.position.set(-6000, 12000, -14000); moon.visible = false; scene.add(moon);

// ---------- Audio ----------
const A = { ctx: null, muted: false };
function initAudio() {
  if (A.ctx) return;
  const ctx = A.ctx = new (window.AudioContext || window.webkitAudioContext)();
  A.master = ctx.createGain(); A.master.gain.value = 0.8;
  const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4;
  // reverb
  const conv = ctx.createConvolver(); const len = ctx.sampleRate * 2.4, ir = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3); }
  conv.buffer = ir; A.rev = ctx.createGain(); A.rev.gain.value = 0.35; A.rev.connect(conv); conv.connect(A.master);
  A.master.connect(comp); comp.connect(ctx.destination);
  const nb = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), nd = nb.getChannelData(0);
  let last = 0; for (let i = 0; i < nd.length; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; nd[i] = w; }
  A.noise = nb;
  const bb = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), bd = bb.getChannelData(0);
  last = 0; for (let i = 0; i < bd.length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; bd[i] = last * 3.5; }
  A.brown = bb;
  const loopNoise = (buf, f, type, q = 1) => { const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true; const fl = ctx.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q; const g = ctx.createGain(); g.gain.value = 0; s.connect(fl); fl.connect(g); g.connect(A.master); s.start(); return { s, fl, g }; };
  // engine
  A.eng = { o1: ctx.createOscillator(), o2: ctx.createOscillator(), fl: ctx.createBiquadFilter(), g: ctx.createGain() };
  A.eng.o1.type = 'sawtooth'; A.eng.o2.type = 'square'; A.eng.o1.frequency.value = 45; A.eng.o2.frequency.value = 22.6;
  A.eng.fl.type = 'lowpass'; A.eng.fl.frequency.value = 300; A.eng.g.gain.value = 0;
  const g2 = ctx.createGain(); g2.gain.value = 0.5;
  A.eng.o1.connect(A.eng.fl); A.eng.o2.connect(g2); g2.connect(A.eng.fl); A.eng.fl.connect(A.eng.g); A.eng.g.connect(A.master);
  A.eng.o1.start(); A.eng.o2.start();
  // saw
  A.saw = { o: ctx.createOscillator(), fl: ctx.createBiquadFilter(), g: ctx.createGain() };
  A.saw.o.type = 'sawtooth'; A.saw.o.frequency.value = 180; A.saw.fl.type = 'bandpass'; A.saw.fl.frequency.value = 1800; A.saw.fl.Q.value = 2; A.saw.g.gain.value = 0;
  A.saw.o.connect(A.saw.fl); A.saw.fl.connect(A.saw.g); A.saw.g.connect(A.master); A.saw.g.connect(A.rev); A.saw.o.start();
  A.sawN = loopNoise(A.noise, 4000, 'bandpass', 1.5);
  A.wind = loopNoise(A.noise, 500, 'lowpass'); A.wind.g.gain.value = 0.05;
  A.roar = loopNoise(A.brown, 600, 'lowpass'); A.crackle = loopNoise(A.noise, 2500, 'highpass');
  startMusic(); birds();
}
const now = () => A.ctx.currentTime;
function tone(f, d, type = 'sine', vol = 0.2, when = 0, toRev = true, slide = 0) {
  if (!A.ctx) return; const t = now() + when, o = A.ctx.createOscillator(), g = A.ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + d);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  o.connect(g); g.connect(A.master); if (toRev) g.connect(A.rev); o.start(t); o.stop(t + d + 0.05);
}
function noiseHit(d, f, vol = 0.4, type = 'lowpass', when = 0, buf) {
  if (!A.ctx) return; const t = now() + when, s = A.ctx.createBufferSource(), fl = A.ctx.createBiquadFilter(), g = A.ctx.createGain();
  s.buffer = buf || A.noise; fl.type = type; fl.frequency.value = f; g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  s.connect(fl); fl.connect(g); g.connect(A.master); g.connect(A.rev); s.start(t, Math.random()); s.stop(t + d + 0.05);
}
const sfx = {
  crack() { for (let i = 0; i < 5; i++) noiseHit(0.08, 3000 + i * 400, 0.35, 'highpass', i * 0.05 + Math.random() * 0.03); noiseHit(0.5, 400, 0.4, 'lowpass', 0.1); },
  thud() { tone(70, 0.6, 'sine', 0.6, 0, true, 35); noiseHit(0.5, 250, 0.7, 'lowpass', 0, A.brown); for (let i = 0; i < 6; i++) noiseHit(0.1, 2000, 0.06, 'bandpass', 0.05 + i * 0.04); },
  pick(i = 0) { tone(660 * Math.pow(1.06, i % 8), 0.18, 'triangle', 0.12); tone(1320 * Math.pow(1.06, i % 8), 0.1, 'sine', 0.05); },
  unload(i) { tone(220 + i * 18, 0.12, 'square', 0.05, 0, false); noiseHit(0.08, 900, 0.15, 'bandpass'); },
  buy() { [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.3, 'triangle', 0.13, i * 0.06)); },
  denied() { tone(180, 0.25, 'square', 0.1, 0, false, 120); },
  beep(hi) { tone(hi ? 1320 : 880, hi ? 0.8 : 0.25, 'sine', 0.25); tone(hi ? 660 : 440, hi ? 0.8 : 0.25, 'triangle', 0.1); },
  clank() { tone(140, 0.3, 'square', 0.08, 0, true, 90); noiseHit(0.15, 3500, 0.25, 'bandpass'); tone(2400, 0.4, 'sine', 0.04); },
  ignite() { noiseHit(2.5, 200, 1.0, 'lowpass', 0, A.brown); tone(50, 2, 'sine', 0.7, 0, true, 30); },
  milestone() { [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.7, 'sine', 0.1, i * 0.09)); },
  apex() { [392, 494, 587, 784, 988].forEach((f, i) => tone(f, 1.6, 'triangle', 0.1, i * 0.12)); }
};
// ambient generative music: soft pad + pluck arpeggio
function startMusic() {
  const ctx = A.ctx; A.music = ctx.createGain(); A.music.gain.value = 0.12; A.music.connect(A.master); A.music.connect(A.rev);
  const chords = [[220, 277.2, 329.6, 415.3], [185, 233.1, 277.2, 370], [146.8, 185, 220, 293.7], [164.8, 207.7, 246.9, 329.6]];
  let ci = 0, step = 0;
  const loop = () => {
    if (!A.ctx) return; const t = now(); const ch = chords[ci % 4];
    if (step % 16 === 0) ch.forEach(f => {
      const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), fl = ctx.createBiquadFilter();
      o.type = 'sawtooth'; o2.type = 'sawtooth'; o.frequency.value = f; o2.frequency.value = f * 1.004; fl.type = 'lowpass'; fl.frequency.value = 900;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.06, t + 1.2); g.gain.linearRampToValueAtTime(0, t + 4.2);
      o.connect(fl); o2.connect(fl); fl.connect(g); g.connect(A.music); o.start(t); o2.start(t); o.stop(t + 4.3); o2.stop(t + 4.3);
    });
    if ([0, 3, 6, 8, 11, 14].includes(step % 16)) {
      const f = ch[(step * 7) % 4] * 2, o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'triangle'; o.frequency.value = f; g.gain.setValueAtTime(0.18, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
      o.connect(g); g.connect(A.music); o.start(t); o.stop(t + 0.7);
    }
    step++; if (step % 16 === 0) ci++;
    setTimeout(loop, 260);
  };
  loop();
}
function birds() {
  const chirp = () => {
    if (A.ctx && game.phase === 'harvest') { const b = rand(2200, 3600); for (let i = 0; i < 3; i++) tone(b, 0.07, 'sine', 0.025, i * 0.1, true, b * 1.3); }
    setTimeout(chirp, rand(2500, 7000));
  };
  chirp();
}
function setLoop(node, v, t = 0.08) { if (A.ctx) node.gain.setTargetAtTime(A.muted ? 0 : v, now(), t); }

// ---------- Input ----------
const keys = {};
addEventListener('keydown', e => { keys[e.code] = true; if (e.code.startsWith('Arrow') || e.code === 'Space') e.preventDefault(); });
addEventListener('keyup', e => keys[e.code] = false);
// floating joystick: press/drag anywhere on the 3D view (mouse or touch)
const joy = { x: 0, y: 0, id: null, ox: 0, oy: 0 };
const cv = renderer.domElement; cv.style.touchAction = 'none'; cv.tabIndex = 0;
cv.addEventListener('pointerdown', e => {
  if (game.phase !== 'harvest' || joy.id !== null) return;
  joy.id = e.pointerId; joy.ox = e.clientX; joy.oy = e.clientY; cv.setPointerCapture(e.pointerId); cv.focus();
  const j = $('joy'); j.style.display = 'block'; j.style.left = (e.clientX - 65) + 'px'; j.style.top = (e.clientY - 65) + 'px'; moveJoy(e);
});
cv.addEventListener('pointermove', e => { if (e.pointerId === joy.id) moveJoy(e); });
const endJoy = e => { if (e.pointerId !== joy.id) return; joy.id = null; joy.x = joy.y = 0; $('knob').style.transform = ''; $('joy').style.display = 'none'; };
cv.addEventListener('pointerup', endJoy); cv.addEventListener('pointercancel', endJoy);
function moveJoy(e) {
  let dx = e.clientX - joy.ox, dy = e.clientY - joy.oy;
  const l = Math.hypot(dx, dy); if (l > 45) { dx *= 45 / l; dy *= 45 / l; }
  joy.x = dx / 45; joy.y = dy / 45; $('knob').style.transform = `translate(${dx}px,${dy}px)`;
}
let camZoom = 1;
addEventListener('wheel', e => { camZoom = clamp(camZoom + Math.sign(e.deltaY) * 0.1, 0.6, 1.6); }, { passive: true });

// ---------- Game state ----------
const game = { phase: 'menu', t: 0, shake: 0 };
const flyingLogs = [];
const camPos = new THREE.Vector3(0, 12, 30), camLook = new THREE.Vector3();
let hintTimer = 0;
function hint(txt, d = 2.5) { $('hint').textContent = txt; $('hint').style.opacity = 1; hintTimer = d; }
function updateHUD() {
  $('cargo').textContent = `${car.cargo}/${capacity()}`;
  $('cargoFill').style.width = (car.cargo / capacity() * 100) + '%';
  $('stock').textContent = S.stock; $('coins').textContent = S.coins;
  $('best').textContent = fmtAlt(S.best);
  document.querySelectorAll('[data-up]').forEach(b => { const k = b.dataset.up; b.querySelector('small').textContent = `Lv${S.up[k] + 1} · ${upCost(k)}c`; b.disabled = S.coins < upCost(k); });
  $('launchBtn').style.display = game.phase === 'harvest' && S.stock >= 10 ? 'block' : 'none';
  $('launchBtn').textContent = `BUILD & LAUNCH (${S.stock} logs)`;
}
function fmtAlt(m) { return m >= 1000 ? (m / 1000).toFixed(m >= 100000 ? 0 : 1) + ' km' : Math.round(m) + ' m'; }
document.querySelectorAll('[data-up]').forEach(b => b.addEventListener('click', () => {
  const k = b.dataset.up, c = upCost(k);
  if (S.coins < c) { sfx.denied(); return; }
  S.coins -= c; S.up[k]++; save(); sfx.buy(); hint(`${UP[k].name} upgraded to Lv${S.up[k] + 1}!`); updateHUD();
}));
$('muteBtn').addEventListener('click', () => { A.muted = !A.muted; $('muteBtn').textContent = 'Sound: ' + (A.muted ? 'Off' : 'On'); if (A.ctx) A.master.gain.setTargetAtTime(A.muted ? 0 : 0.8, now(), 0.05); });
$('startBtn').addEventListener('click', () => { initAudio(); A.ctx.resume(); $('start').style.display = 'none'; game.phase = 'harvest'; updateHUD(); hint('Drag anywhere or use WASD to drive. Pull up next to a tree and the crane cuts it.', 6); renderer.domElement.focus(); });
$('launchBtn').addEventListener('click', () => { if (game.phase === 'harvest' && S.stock >= 10) startBuild(); });
$('againBtn').addEventListener('click', backToForest);

// ---------- Harvest update ----------
let target = null;
const CAM_OFF = new THREE.Vector3(0, 30, 10); // top-down view, slightly tilted, fixed orientation
const CAM_UP = new THREE.Vector2(-CAM_OFF.x, -CAM_OFF.z).normalize();
function updateHarvest(dt) {
  // screen-relative input: up = away from camera (north), right = east
  let ix = 0, iy = 0;
  if (keys.KeyW || keys.ArrowUp) iy += 1; if (keys.KeyS || keys.ArrowDown) iy -= 1;
  if (keys.KeyD || keys.ArrowRight) ix += 1; if (keys.KeyA || keys.ArrowLeft) ix -= 1;
  if (joy.id !== null) { ix += joy.x; iy -= joy.y; }
  let mag = Math.min(1, Math.hypot(ix, iy));
  const ms = maxSpeed();
  let want = 0;
  if (mag > 0.12) {
    const wx = -CAM_UP.y * ix + CAM_UP.x * iy, wz = CAM_UP.x * ix + CAM_UP.y * iy; // screen -> world
    const ty = Math.atan2(wx, wz);
    const diff = Math.atan2(Math.sin(ty - car.yaw), Math.cos(ty - car.yaw));
    car.yaw += Math.sign(diff) * Math.min(Math.abs(diff), dt * 3.8);
    want = ms * mag * clamp(Math.cos(diff) * 0.8 + 0.3, 0, 1);
  }
  car.v = lerp(car.v, want, 1 - Math.pow(want > car.v ? 0.2 : 0.02, dt));
  let nx = car.x + Math.sin(car.yaw) * car.v * dt, nz = car.z + Math.cos(car.yaw) * car.v * dt;
  // soft collisions: trees push the machine aside so it slides instead of sticking
  const fx = Math.sin(car.yaw), fz = Math.cos(car.yaw);
  for (const t of trees) {
    if (t.state !== 'alive' && t.state !== 'growing') continue;
    if (Math.abs(t.x - nx) > 6 || Math.abs(t.z - nz) > 6) continue;
    for (const o of [-2.6, 0, 2.2]) {
      const px = nx + fx * o, pz = nz + fz * o, dx = px - t.x, dz = pz - t.z, d = Math.hypot(dx, dz), R = 1.55;
      if (d < R && d > 0.001) { nx += dx / d * (R - d); nz += dz / d * (R - d); car.v *= 0.97; }
    }
  }
  const padD = Math.hypot(nx - PAD.x, nz - PAD.z);
  if (padD < 12) { const a = Math.atan2(nz - PAD.z, nx - PAD.x); nx = PAD.x + Math.cos(a) * 12; nz = PAD.z + Math.sin(a) * 12; }
  car.x = clamp(nx, -WORLD, WORLD); car.z = clamp(nz, -WORLD, WORLD);

  // place harvester (before crane so world->local is current)
  const h = heightAt(car.x, car.z);
  harv.position.set(car.x, h, car.z); harv.rotation.y = car.yaw;
  const hf = heightAt(car.x + fx * 2.5, car.z + fz * 2.5), hb = heightAt(car.x - fx * 2.5, car.z - fz * 2.5);
  harv.rotation.x = -Math.atan2(hf - hb, 5);
  harv.updateMatrixWorld(true);

  // crane auto-targets the nearest reachable tree in front
  const full = car.cargo + flyingLogs.length >= capacity();
  if (target && (target.state !== 'alive' || full)) target = null;
  const toLocal = (x, y, z) => harv.worldToLocal(new THREE.Vector3(x, y, z)).sub(CR.root);
  if (target) { const l = toLocal(target.x, 0, target.z); if (Math.hypot(l.x, l.z) > 5.9) target = null; }
  if (!target && !full) {
    let best = 5.2;
    for (const t of trees) {
      if (t.state !== 'alive' || Math.abs(t.x - car.x) > 10 || Math.abs(t.z - car.z) > 10) continue;
      const l = toLocal(t.x, 0, t.z), d = Math.hypot(l.x, l.z);
      if (l.z > -0.5 && d < best && d > 1.0) { best = d; target = t; }
    }
  }
  if (full && hintTimer <= 0) hint('Cargo full! Follow the arrow to the green depot.', 2);
  let gripped = false;
  if (target) {
    const l = toLocal(target.x, heightAt(target.x, target.z) + 1.9, target.z);
    const hd = Math.hypot(l.x, l.z); l.x *= (hd - 0.5) / hd; l.z *= (hd - 0.5) / hd; // stop at the bark
    craneCur.lerp(l, 1 - Math.pow(0.002, dt));
    gripped = craneCur.distanceTo(l) < 0.35;
  } else craneCur.lerp(craneRest, 1 - Math.pow(0.05, dt));
  solveCrane(craneCur);
  headYaw.rotation.y = lerp(headYaw.rotation.y, 0, dt * 5);
  grabs.forEach((g, k) => g.rotation.y = lerp(g.rotation.y, gripped ? (k ? -0.55 : 0.55) : 0, dt * 8));
  let sawing = null;
  if (gripped) {
    sawing = target;
    sawing.cut = Math.max(sawing.cut, 1e-4) + dt / cutTime();
    barG.rotation.y = -Math.min(sawing.cut, 1) * 1.5;
    sawing.pivot.rotation.z = Math.sin(game.t * 60) * 0.015;
    const bp = new THREE.Vector3(0, 0, 0.5); barG.localToWorld(bp);
    for (let i = 0; i < 4; i++) emit({ x: bp.x, y: bp.y, z: bp.z, vx: rand(-4, 4), vy: rand(1, 5), vz: rand(-4, 4), g: 12, life: 0.6, max: 0.6, size: 0.16, c0: [0.95, 0.8, 0.5], c1: [0.7, 0.5, 0.3] });
    rollers.forEach(r => r.rotation.x += dt * 20);
    if (sawing.cut >= 1) {
      sawing.state = 'falling'; sawing.pivot.rotation.set(0, 0, 0);
      sawing.fallDir = Math.atan2(sawing.x - car.x, sawing.z - car.z) - sawing.g.rotation.y; sfx.crack(); target = null;
    }
  } else barG.rotation.y = lerp(barG.rotation.y, 0, dt * 6);
  // audio loops
  setLoop(A.eng.g, 0.05 + Math.abs(car.v) / ms * 0.08);
  if (A.ctx) { A.eng.o1.frequency.setTargetAtTime(42 + Math.abs(car.v) * 4, now(), 0.1); A.eng.o2.frequency.setTargetAtTime(21 + Math.abs(car.v) * 2, now(), 0.1); A.eng.fl.frequency.setTargetAtTime(250 + Math.abs(car.v) * 40, now(), 0.1); }
  setLoop(A.saw.g, sawing ? 0.09 : 0.025); setLoop(A.sawN.g, sawing ? 0.12 : 0);
  if (A.ctx) A.saw.o.frequency.setTargetAtTime(sawing ? 140 : 210, now(), 0.05);

  // depot unload
  const dd = Math.hypot(car.x - DEPOT.x, car.z - DEPOT.z);
  if (dd < 4 && car.cargo > 0) {
    game.unloadT = (game.unloadT || 0) + dt;
    if (game.unloadT > 0.09) {
      game.unloadT = 0; car.cargo--; S.stock++; sfx.unload(S.stock % 10); refreshCargoVisual(); refreshPile(); save(); updateHUD();
      if (car.cargo === 0) hint(S.stock >= 10 ? 'Stockpile ready! Hit BUILD & LAUNCH.' : `Need ${10 - S.stock} more logs for a rocket.`);
    }
  }
  depotG.userData.mark.material.opacity = 0.5 + Math.sin(game.t * 4) * 0.3;

  wheels.forEach(w => w.rotation.x += car.v * dt / 0.66);
  depotArrow.visible = full || car.cargo >= capacity(); if (depotArrow.visible) { depotArrow.position.set(car.x, h + 5.5 + Math.sin(game.t * 4) * 0.3, car.z); depotArrow.rotation.y = Math.atan2(DEPOT.x - car.x, DEPOT.z - car.z); }
  beacons.forEach((b, i) => b.rotation.y += dt * 8); beaconM.emissiveIntensity = 1.5 + Math.max(0, Math.sin(game.t * 8)) * 4;
  if (Math.abs(car.v) > 3 && Math.random() < 0.4) emit({ x: car.x - Math.sin(car.yaw) * 2, y: h + 0.3, z: car.z - Math.cos(car.yaw) * 2, vx: rand(-1, 1), vy: rand(0.5, 1.5), vz: rand(-1, 1), life: 1.2, max: 1.2, size: 0.6, grow: 1.2, c0: [0.6, 0.5, 0.38], c1: [0.7, 0.65, 0.55], a: 0.35 });
  // exhaust
  if (Math.random() < 0.3 + Math.abs(car.v) / ms * 0.5) emit({ x: car.x - fx * 0.55 + fz * 0.6, y: h + 3.5, z: car.z - fz * 0.55 - fx * 0.6, vx: 0, vy: 2, vz: 0, life: 1, max: 1, size: 0.3, grow: 0.8, c0: [0.3, 0.3, 0.3], c1: [0.6, 0.6, 0.6], a: 0.4 });

  // camera
  const lead = 2.5 * car.v / ms;
  const back = new THREE.Vector3(car.x + fx * lead, h, car.z + fz * lead).addScaledVector(CAM_OFF, camZoom);
  camPos.lerp(back, 1 - Math.pow(0.02, dt)); camLook.lerp(new THREE.Vector3(car.x + fx * lead, h + 1.6, car.z + fz * lead - 1), 1 - Math.pow(0.01, dt));
  camera.position.copy(camPos); camera.lookAt(camLook);
  sun.position.set(car.x + SUN_OFF.x, SUN_OFF.y, car.z + SUN_OFF.z); sun.target.position.set(car.x, 0, car.z);
}

function updateTrees(dt) {
  for (const t of trees) {
    if (t.state === 'alive' && t.cut === 0) { const w = Math.sin(game.t * 1.3 + t.ph + t.x * 0.05) * 0.018; t.pivot.rotation.x = w; t.pivot.rotation.z = w * 0.6; }
    if (t.state === 'falling') {
      t.fall += dt * (0.4 + t.fall * 3);
      const ang = Math.min(t.fall, 1) * Math.PI / 2;
      t.pivot.rotation.set(Math.cos(t.fallDir) * ang, 0, -Math.sin(t.fallDir) * ang, 'YXZ');
      t.pivot.rotation.set(0, 0, 0); t.pivot.rotateOnAxis(new THREE.Vector3(Math.cos(t.fallDir), 0, -Math.sin(t.fallDir)), ang);
      if (t.fall >= 1) {
        t.state = 'down'; sfx.thud(); game.shake = 0.35;
        for (let i = 0; i < 25; i++) emit({ x: t.x + rand(-3, 3), y: heightAt(t.x, t.z) + 0.5, z: t.z + rand(-3, 3), vx: rand(-3, 3), vy: rand(1, 4), vz: rand(-3, 3), life: 1.5, max: 1.5, size: 1, grow: 2, c0: [0.55, 0.48, 0.35], c1: [0.7, 0.66, 0.58], a: 0.4 });
        for (let i = 0; i < 12; i++) emit({ x: t.x + rand(-3, 3), y: heightAt(t.x, t.z) + 2, z: t.z + rand(-3, 3), vx: rand(-2, 2), vy: rand(2, 5), vz: rand(-2, 2), g: 5, drag: 0.95, life: 2, max: 2, size: 0.3, c0: [0.25, 0.5, 0.2], c1: [0.3, 0.45, 0.15] });
        const n = Math.min(t.logs, capacity() - car.cargo - flyingLogs.length);
        for (let i = 0; i < Math.max(n, 1) && n > 0; i++) {
          const m = makeLog(); m.position.set(t.x + rand(-1, 1), heightAt(t.x, t.z) + 1, t.z + rand(-1, 1)); scene.add(m);
          flyingLogs.push({ m, t: -i * 0.18, from: m.position.clone(), spin: rand(4, 9) });
        }
        t.downT = 0;
      }
    } else if (t.state === 'down') {
      t.downT += dt;
      if (t.downT > 1.2) { const s = 1 - (t.downT - 1.2) / 0.6; t.g.scale.setScalar(Math.max(0.001, s) * t.s); if (s <= 0) { t.state = 'gone'; t.g.visible = false; t.regrow = 25 + rand(0, 15); } }
    } else if (t.state === 'gone') {
      t.regrow -= dt;
      if (t.regrow <= 0 && Math.hypot(t.x - car.x, t.z - car.z) > 8) { t.state = 'growing'; t.grow = 0; t.g.visible = true; t.pivot.rotation.set(0, 0, 0); t.cut = 0; t.fall = 0; }
    } else if (t.state === 'growing') {
      t.grow += dt / 2; const e = 1 - Math.pow(1 - Math.min(t.grow, 1), 3);
      t.g.scale.setScalar(Math.max(0.001, e * t.s)); if (t.grow >= 1) t.state = 'alive';
    }
  }
  for (let i = flyingLogs.length - 1; i >= 0; i--) {
    const f = flyingLogs[i]; f.t += dt * 1.6; if (f.t < 0) continue;
    const to = new THREE.Vector3(car.x, harv.position.y + 2.2, car.z), k = Math.min(f.t, 1);
    f.m.position.lerpVectors(f.from, to, k); f.m.position.y += Math.sin(k * Math.PI) * 5;
    f.m.rotation.x += dt * f.spin; f.m.rotation.y += dt * f.spin * 0.5;
    if (f.t >= 1) {
      scene.remove(f.m); flyingLogs.splice(i, 1);
      if (car.cargo < capacity()) { car.cargo++; sfx.pick(car.cargo); refreshCargoVisual(); updateHUD(); if (car.cargo >= capacity()) hint('Cargo full! Head to the depot by the launch pad.', 3); }
    }
  }
}

// ---------- Build & launch ----------
const L = {};
function startBuild() {
  game.phase = 'build'; $('launchBtn').style.display = 'none'; $('right').style.display = 'none';
  setLoop(A.eng.g, 0); setLoop(A.saw.g, 0); setLoop(A.sawN.g, 0);
  L.logs = S.stock; S.stock = 0; save(); refreshPile(); updateHUD();
  rocket = buildRocket(L.logs); rocket.position.set(PAD.x, 0.8, PAD.z); scene.add(rocket);
  L.parts = rocket.userData.parts; L.parts.forEach(p => { p.userData.y0 = p.position.y; p.visible = false; });
  L.bi = 0; L.bt = 0; game.t0 = game.t;
  hint(`Building a ${L.logs}-log rocket...`, 3);
}
function updateBuild(dt) {
  L.bt += dt;
  const per = Math.max(0.12, 2.4 / L.parts.length);
  while (L.bi < L.parts.length && L.bt > L.bi * per) {
    const p = L.parts[L.bi]; p.visible = true; p.userData.drop = 0; L.bi++; sfx.clank();
    for (let i = 0; i < 10; i++) emit({ x: PAD.x + rand(-1, 1), y: 0.8 + p.userData.y0, z: PAD.z + rand(-1, 1), vx: rand(-4, 4), vy: rand(0, 2), vz: rand(-4, 4), g: 10, life: 0.4, max: 0.4, size: 0.12, c0: [1, 0.9, 0.5], c1: [1, 0.5, 0.1], add: true });
  }
  L.parts.forEach(p => { if (p.visible && p.userData.drop < 1) { p.userData.drop = Math.min(1, p.userData.drop + dt * 4); const e = 1 - Math.pow(1 - p.userData.drop, 3); p.position.y = p.userData.y0 + (1 - e) * 8; } });
  const H = rocket.userData.height;
  const a = game.t * 0.35;
  const target = new THREE.Vector3(PAD.x + Math.cos(a) * (H + 18), H * 0.6 + 4, PAD.z + Math.sin(a) * (H + 18));
  camera.position.lerp(target, 1 - Math.pow(0.05, dt)); camera.lookAt(PAD.x, H * 0.45, PAD.z);
  sun.position.set(PAD.x + SUN_OFF.x, SUN_OFF.y, PAD.z + SUN_OFF.z); sun.target.position.set(PAD.x, 0, PAD.z);
  if (L.bi >= L.parts.length && L.bt > L.parts.length * per + 1) startCountdown();
}
function startCountdown() {
  game.phase = 'count'; L.c = 3; L.ct = 0; $('count').style.display = 'block'; $('count').textContent = '3'; sfx.beep(false);
}
function updateCount(dt) {
  L.ct += dt;
  const H = rocket.userData.height;
  camera.position.lerp(new THREE.Vector3(PAD.x - H * 0.9 - 14, 3, PAD.z + H * 0.9 + 14), 1 - Math.pow(0.1, dt));
  camera.lookAt(PAD.x, H * 0.5, PAD.z);
  if (L.c <= 1) for (let i = 0; i < 4; i++) emit({ x: PAD.x + rand(-1, 1), y: 1, z: PAD.z + rand(-1, 1), vx: rand(-6, 6), vy: rand(0, 1), vz: rand(-6, 6), drag: 0.96, life: 2, max: 2, size: 1.5, grow: 3, c0: [0.85, 0.85, 0.85], c1: [0.6, 0.6, 0.6], a: 0.45 });
  if (L.ct >= 1) {
    L.ct = 0; L.c--;
    if (L.c > 0) { $('count').textContent = L.c; sfx.beep(false); }
    else { $('count').textContent = 'LIFTOFF!'; sfx.beep(true); sfx.ignite(); startLaunch(); setTimeout(() => $('count').style.display = 'none', 1200); }
  }
}
function startLaunch() {
  game.phase = 'launch';
  const eng = 1 + S.up.engine * 0.45;
  L.alt = 0; L.vel = 0; L.burn = 3 + L.logs * 0.22; L.burnLeft = L.burn;
  L.thrust = (22 + Math.sqrt(L.logs) * 3) * eng; L.apexDone = false; L.max = 0; L.ms = 0;
  // simulate the real ballistic flight up front, then replay it in a fixed ~10 s
  { let a = 0, v = 0, b = L.burn; const st = 0.05;
    while (b > 0) { b -= st; v += (L.thrust * (1 + (1 - b / L.burn) * 1.5) - 9.8) * st; a += v * st; }
    while (v > 0) { v -= 9.8 * st * (a > 100000 ? 0.25 : 1); a += v * st; }
    L.apex = a; }
  L.T = 10; L.ft = 0;
  L.marks = [[1000, 'ABOVE THE CLOUDS'], [10000, 'STRATOSPHERE'], [100000, 'KÁRMÁN LINE — SPACE!'], [400000, 'ORBITAL HEIGHT'], [1000000, 'DEEP SPACE'], [10000000, 'BEYOND THE MOON?']];
  $('alt').style.display = 'block'; $('altMsg').textContent = '';
  $('flash').style.transition = 'none'; $('flash').style.opacity = 0.6; requestAnimationFrame(() => { $('flash').style.transition = 'opacity 1s'; $('flash').style.opacity = 0; });
}
function updateLaunch(dt) {
  L.ft = Math.min(L.T, L.ft + dt);
  const u = L.ft / L.T, prev = L.alt;
  // slow lift-off, fast climb, gentle coast to apex
  L.alt = L.apex * (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);
  L.vel = L.ft >= L.T ? 0 : Math.min(400, (L.alt - prev) / Math.max(dt, 1e-3));
  L.max = Math.max(L.max, L.alt);
  const burning = u < 0.6;

  // visuals: rocket y follows altitude up to a cap, then environment scrolls instead
  const VIS = Math.min(L.alt, 1500);
  rocket.position.y = 0.8 + VIS;
  rocket.rotation.z = Math.sin(game.t * 13) * 0.004 * (burning ? 1 : 0);
  const space = clamp((L.alt - 3000) / 60000, 0, 1);
  skyU.space.value = space; scene.fog.density = FOG_D * (1 - clamp(L.alt / 400, 0, 0.97));
  scene.fog.color.set(0xcfe0ee).lerp(SKY_SPACE, space);
  stars.material.opacity = clamp((L.alt - 8000) / 40000, 0, 1);
  hemi.intensity = lerp(0.9, 0.25, space);
  clouds.position.y = -Math.max(0, L.alt - 1500) * 1;
  // planet appears below at high altitude
  if (L.alt > 30000) {
    planet.visible = true; const R = 6000, scaleAlt = Math.max(L.alt, 1) / 6371000 * R;
    planet.scale.setScalar(R); planet.position.set(PAD.x, rocket.position.y - scaleAlt - R - 50, PAD.z);
    planet.material.opacity = 1;
  }
  moon.visible = L.alt > 200000;
  const fl = rocket.userData.flame; fl.visible = burning; fl.material.uniforms.t.value = game.t; fl.scale.set(1 + Math.random() * 0.08, 1 + Math.random() * 0.25, 1 + Math.random() * 0.08);
  rocket.userData.flameL.intensity = burning ? 60 + Math.random() * 30 : 0;
  if (burning) {
    const by = rocket.position.y, rr = rocket.userData.rad;
    for (let i = 0; i < 14; i++) emit({ x: PAD.x + rand(-.3, .3) * rr, y: by - 0.2, z: PAD.z + rand(-.3, .3) * rr, vx: rand(-2, 2), vy: -rand(20, 40) - L.vel * 0.05, vz: rand(-2, 2), drag: 0.9, life: 0.5, max: 0.5, size: rr * 1.6, grow: -1, c0: [1, 0.85, 0.5], c1: [0.9, 0.2, 0.02], a: 0.5, add: true });
    if (L.alt < 3000) for (let i = 0; i < 6; i++) emit({ x: PAD.x + rand(-1, 1), y: by - 2, z: PAD.z + rand(-1, 1), vx: rand(-3, 3), vy: -rand(4, 10), vz: rand(-3, 3), drag: 0.97, life: 3, max: 3, size: 2.5, grow: 5, c0: [0.9, 0.85, 0.8], c1: [0.55, 0.55, 0.58], a: 0.5 });
    if (L.alt < 20) for (let i = 0; i < 10; i++) { const a = rand(0, 6.28); emit({ x: PAD.x, y: 1.2, z: PAD.z, vx: Math.cos(a) * rand(15, 30), vy: rand(0, 2), vz: Math.sin(a) * rand(15, 30), drag: 0.95, life: 2.5, max: 2.5, size: 2.5, grow: 5, c0: [0.95, 0.9, 0.85], c1: [0.6, 0.6, 0.6], a: 0.5 }); }
  }
  // audio
  const fade = burning ? clamp(1 - space * 0.85, 0.15, 1) : 0;
  setLoop(A.roar.g, 0.9 * fade, 0.2); setLoop(A.crackle.g, 0.12 * fade, 0.2);
  if (A.ctx) A.roar.fl.frequency.setTargetAtTime(400 + fade * 500, now(), 0.2);
  setLoop(A.wind.g, 0.05 * (1 - space));

  // camera
  const H = rocket.userData.height, ry = rocket.position.y;
  const t = clamp(L.alt / 300, 0, 1);
  const cp = new THREE.Vector3(PAD.x - lerp(H + 14, H * 1.2 + 20, t), lerp(3, ry - H * 0.6 - 6, t), PAD.z + lerp(H + 14, H * 1.2 + 20, t));
  camera.position.lerp(cp, 1 - Math.pow(0.02, dt));
  camera.lookAt(PAD.x, ry + H * 0.5, PAD.z);
  game.shake = burning ? clamp(0.4 - L.alt / 4000, 0.03, 0.4) : 0;
  sun.position.set(PAD.x + SUN_OFF.x, ry + SUN_OFF.y, PAD.z + SUN_OFF.z); sun.target.position.set(PAD.x, ry, PAD.z);

  $('altV').textContent = L.alt >= 1000 ? (L.alt / 1000).toFixed(L.alt >= 100000 ? 0 : 1) : Math.round(L.alt);
  $('altU').textContent = L.alt >= 1000 ? 'KILOMETERS' : 'METERS';
  while (L.ms < L.marks.length && L.alt >= L.marks[L.ms][0]) { $('altMsg').textContent = L.marks[L.ms][1]; sfx.milestone(); L.ms++; }
  if (L.ft >= L.T && !L.apexDone) {
    L.apexDone = true; sfx.apex(); $('altMsg').textContent = 'APEX!';
    setTimeout(showResult, 1800);
  }
}
function showResult() {
  const alt = L.max, rec = alt > S.best;
  const earned = Math.round(20 + Math.sqrt(alt) * 2);
  S.coins += earned; S.launches++; if (rec) S.best = alt; save();
  $('resTitle').textContent = rec ? 'NEW RECORD!' : 'APEX REACHED';
  $('resAlt').textContent = fmtAlt(alt);
  $('resInfo').innerHTML = `Rocket built from <b>${L.logs}</b> logs · Launch #${S.launches}<br>+<b>${earned}</b> coins earned. Upgrade your gear and build a bigger one!`;
  $('result').style.display = 'flex'; game.phase = 'result';
  if (rec) [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, 0.5, 'triangle', 0.12, 0.2 + i * 0.1));
  setLoop(A.roar.g, 0); setLoop(A.crackle.g, 0);
}
function backToForest() {
  $('result').style.display = 'none'; $('alt').style.display = 'none'; $('right').style.display = 'flex';
  scene.remove(rocket); rocket = null;
  skyU.space.value = 0; scene.fog.color.set(0xcfe0ee); scene.fog.density = FOG_D;
  stars.material.opacity = 0; planet.visible = false; moon.visible = false; clouds.position.y = 0; hemi.intensity = 0.9;
  setLoop(A.wind.g, 0.05);
  game.phase = 'harvest'; updateHUD(); hint('Collect more logs — bigger rocket, higher flight!', 4);
}

// ---------- Main loop ----------
const clock = new THREE.Clock();
refreshPile(); updateHUD();
camera.position.set(40, 30, 50); camera.lookAt(0, 0, 0);
function frame() {
  const dt = Math.min(clock.getDelta(), 0.05); game.t += dt;
  if (game.phase === 'menu') {
    const a = game.t * 0.08; camera.position.set(Math.cos(a) * 70, 28, Math.sin(a) * 70 - 20); camera.lookAt(PAD.x, 8, PAD.z * 0.5);
  } else if (game.phase === 'harvest') updateHarvest(dt);
  else if (game.phase === 'build') updateBuild(dt);
  else if (game.phase === 'count') updateCount(dt);
  else if (game.phase === 'launch' || game.phase === 'result') { if (rocket) updateLaunch(dt); }
  updateTrees(dt); updateParticles(dt);
  grade.uniforms.t.value = game.t % 100;
  { const p = pollen.geometry.attributes.position.array, c = camera.position;
    for (let i = 0; i < p.length; i += 3) { p[i] += Math.sin(game.t + i) * dt * 0.4; p[i + 1] += Math.cos(game.t * 0.7 + i) * dt * 0.2;
      if (p[i] - c.x > 60) p[i] -= 120; else if (p[i] - c.x < -60) p[i] += 120; if (p[i + 2] - c.z > 60) p[i + 2] -= 120; else if (p[i + 2] - c.z < -60) p[i + 2] += 120; }
    pollen.geometry.attributes.position.needsUpdate = true; pollen.visible = game.phase !== 'launch' || L.alt < 50; }
  padG.userData.beacon.material.emissiveIntensity = (Math.sin(game.t * 5) > 0) ? 5 : 0.3;
  if (game.shake > 0) { camera.position.x += rand(-1, 1) * game.shake; camera.position.y += rand(-1, 1) * game.shake; if (game.phase === 'harvest') game.shake = Math.max(0, game.shake - dt); }
  if (hintTimer > 0) { hintTimer -= dt; if (hintTimer <= 0) $('hint').style.opacity = 0; }
  composer.render();
  requestAnimationFrame(frame);
}
frame();
window.__ready = true; $('loader').style.opacity = 0; setTimeout(() => $('loader').remove(), 900);
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); pMat.uniforms.scale.value = innerHeight;
});
window.__game = { game, S, car, trees };
