// Gradient sky dome with sun disc, sky-derived reflections, fog, faceted peak
// ranges and a cloud sea. Everything far away is procedural and follows the rider.
import * as THREE from 'three';
import { THEME } from './theme.js';
import { fbm, noise2 } from './world.js';

const C = k => new THREE.Color(THEME[k]);
export const SUN_DIR = new THREE.Vector3(...THEME.sunDir).normalize();

export function makeSky(scene, renderer) {
  const uniforms = {
    top: { value: C('skyTop') }, mid: { value: C('skyMid') }, horizon: { value: C('skyHorizon') }, bottom: { value: C('skyBottom') },
    sunDir: { value: SUN_DIR }, sunColor: { value: C('sun') }, sunScale: { value: 1 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; }`,
    fragmentShader: `
      uniform vec3 top, mid, horizon, bottom, sunDir, sunColor; uniform float sunScale; varying vec3 vDir;
      void main(){
        float h = vDir.y;
        vec3 col = h > 0.0
          ? mix(mix(horizon, mid, smoothstep(0.0, 0.28, h)), top, smoothstep(0.22, 0.85, h))
          : mix(horizon, bottom, smoothstep(0.0, -0.25, h));
        float s = max(dot(vDir, sunDir), 0.0);
        col += sunColor * sunScale * (smoothstep(0.9993, 0.9996, s) * 3.0 + pow(s, 48.0) * 0.55 + pow(s, 6.0) * 0.22);
        // warm band hugging the horizon under the sun
        col += sunColor * 0.18 * pow(s, 3.0) * (1.0 - smoothstep(0.0, 0.25, abs(h)));
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`,
    side: THREE.BackSide, depthWrite: false, fog: false,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(4000, 48, 24), mat);
  sky.renderOrder = -2; sky.frustumCulled = false;
  scene.add(sky);
  scene.background = C('fog');
  scene.fog = new THREE.Fog(C('fog'), THEME.fogNear, THEME.fogFar);

  // reflections from the same sky (sun dimmed so it doesn't smear into glare)
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  const envMat = mat.clone(); envMat.uniforms.sunScale = { value: 0.25 };
  envScene.add(new THREE.Mesh(new THREE.SphereGeometry(10, 48, 24), envMat));
  scene.environment = pmrem.fromScene(envScene, 0.02).texture;
  pmrem.dispose();
  return sky;
}

// ---------- faceted peaks ----------
function addPeak(pos, col, px, py, pz, radius, height, detail, rnd) {
  const src = new THREE.IcosahedronGeometry(1, detail);
  const p = src.attributes.position, v = new THREE.Vector3();
  const seed = rnd() * 100, sharp = 1.1 + rnd() * 0.9, arms = 3 + Math.floor(rnd() * 4), phase = rnd() * 6.28;
  const depth = 0.12 + rnd() * 0.22, leanX = (rnd() - 0.5) * 0.5, leanZ = (rnd() - 0.5) * 0.5;
  const verts = [];
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const up = Math.max(-0.3, Math.min(1, v.y));
    const th = Math.atan2(v.z, v.x);
    const n = noise2(v.x * 2.1 + seed, v.z * 2.1 + v.y * 1.7);
    const arete = 1 - depth * (0.5 - 0.5 * Math.cos(arms * th + phase));
    const ridge = (0.8 + n * 0.5) * arete;
    const y = up >= 0 ? Math.pow(up, sharp) * height : up * 30;
    const spread = up >= 0 ? (1 - Math.pow(up, 1.6) * 0.93) * ridge : 1.05;
    const tip = up >= 0 ? Math.pow(up, 1.8) : 0;
    verts.push(px + (v.x * spread + leanX * tip) * radius, py + y, pz + (v.z * spread + leanZ * tip) * radius);
  }
  const snow = C('peakSnow'), snowS = C('peakSnowShade'), rock = C('peakRock'), rockD = C('peakRockDark'), c = new THREE.Color();
  for (let f = 0; f < verts.length; f += 9) {
    const cy = (verts[f + 1] + verts[f + 4] + verts[f + 7]) / 3, hN = (cy - py) / height;
    const ax = verts[f + 3] - verts[f], ay = verts[f + 4] - verts[f + 1], az = verts[f + 5] - verts[f + 2];
    const bx = verts[f + 6] - verts[f], by = verts[f + 7] - verts[f + 1], bz = verts[f + 8] - verts[f + 2];
    const nx = ay * bz - az * by, ny = az * bx - ax * bz, nz = ax * by - ay * bx;
    const steep = 1 - Math.abs(ny) / Math.hypot(nx, ny, nz);
    const line = 0.4 + steep * 0.4 + (rnd() - 0.5) * 0.12;
    c.copy(hN > line ? (steep > 0.55 ? snowS : snow) : (hN > line - 0.22 ? rock : rockD));
    for (let k = 0; k < 3; k++) col.push(c.r, c.g, c.b);
  }
  pos.push(...verts);
  src.dispose();
}

export function makeScenery(scene) {
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const group = new THREE.Group();
  const layers = [
    { count: 22, min: 700, max: 1300, h0: 220, h1: 480, detail: 2 },
    { count: 26, min: 1400, max: 2400, h0: 500, h1: 1000, detail: 1 },
  ];
  for (const L of layers) {
    const pos = [], col = [];
    for (let i = 0; i < L.count; i++) {
      // keep the view straight down the pass open-ish: fewer peaks dead ahead
      const a = rnd() * Math.PI * 2;
      const r = L.min + rnd() * (L.max - L.min);
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (z < 0 && Math.abs(x) < r * 0.2 && L.detail === 2) continue;
      const h = L.h0 + rnd() * (L.h1 - L.h0);
      addPeak(pos, col, x, -380, z, h * (0.75 + rnd() * 0.45), h + 380, L.detail, rnd);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
    m.frustumCulled = false;
    group.add(m);
  }
  // cloud sea filling the valleys
  const cloudMat = new THREE.ShaderMaterial({
    uniforms: { col: { value: C('cloud') }, fogCol: { value: C('fog') }, t: { value: 0 } },
    vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `uniform vec3 col, fogCol; uniform float t; varying vec3 vW;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
      void main(){ vec2 p = vW.xz * 0.004 + vec2(t*0.01, 0.);
        float c = n(p)*0.5 + n(p*2.3)*0.3 + n(p*5.1)*0.2;
        vec3 k = mix(col * 0.82, col * 1.08, c);
        float d = length(vW.xz - cameraPosition.xz);
        gl_FragColor = vec4(mix(k, fogCol, smoothstep(300., 2600., d)), 1.);
        #include <colorspace_fragment>
      }`,
    fog: false,
  });
  const cloud = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000, 1, 1).rotateX(-Math.PI / 2), cloudMat);
  cloud.position.y = -300; cloud.frustumCulled = false;
  group.add(cloud);
  scene.add(group);
  return { group, cloud, cloudMat };
}
