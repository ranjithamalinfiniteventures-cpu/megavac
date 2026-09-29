// Rider outfit for the Quaternius base bodies (CC0): a downhill race suit baked into the
// body texture, plus rigid gear on the bones (full-face downhill helmet with goggles,
// back protector, knee and elbow pads). Colours come from the rider's palette.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

let renderer = null;
export function setOutfitRenderer(r) { renderer = r; }

const GROUPS = {
  head: /^(Head|neck_01)$/,
  hand: /^(hand_|index_|middle_|pinky_|ring_|thumb_)/,
  foot: /^(foot_|ball_)/,
};

// Per-vertex bake inputs: bind-pose position (height 0..1 at the soles..crown, lateral and
// front offsets in metres), bind normal, and how much the head / hands / feet drive the vertex.
function bakeAttributes(mesh, bounds) {
  const g = mesh.geometry, p = g.attributes.position, n = g.attributes.normal;
  const si = g.attributes.skinIndex, sw = g.attributes.skinWeight, bones = mesh.skeleton.bones;
  const bind = new Float32Array(p.count * 3), nrm = new Float32Array(p.count * 3), reg = new Float32Array(p.count * 3);
  const v = new THREE.Vector3(), m3 = new THREE.Matrix3().getNormalMatrix(mesh.matrixWorld);
  const H = bounds.max.y - bounds.min.y;
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i).applyMatrix4(mesh.matrixWorld);
    bind[i * 3] = v.x - bounds.cx; bind[i * 3 + 1] = (v.y - bounds.min.y) / H; bind[i * 3 + 2] = v.z - bounds.cz;
    v.fromBufferAttribute(n, i).applyMatrix3(m3).normalize();
    nrm[i * 3] = v.x; nrm[i * 3 + 1] = v.y; nrm[i * 3 + 2] = v.z;
    for (let k = 0; k < 4; k++) {
      const w = sw.getComponent(i, k), name = bones[si.getComponent(i, k)]?.name || '';
      if (GROUPS.head.test(name)) reg[i * 3] += w;
      else if (GROUPS.hand.test(name)) reg[i * 3 + 1] += w;
      else if (GROUPS.foot.test(name)) reg[i * 3 + 2] += w;
    }
  }
  g.setAttribute('aBind', new THREE.BufferAttribute(bind, 3));
  g.setAttribute('aBindN', new THREE.BufferAttribute(nrm, 3));
  g.setAttribute('aReg', new THREE.BufferAttribute(reg, 3));
}

// The suit design is a function of bind-pose position/normal, rendered into UV space.
const BAKE_VS = `
attribute vec3 aBind, aBindN, aReg; varying vec3 vB, vN, vR; varying vec2 vUv;
void main(){ vB = aBind; vN = aBindN; vR = aReg; vUv = uv; gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0); }`;
const BAKE_FS = `
uniform sampler2D skin; uniform vec3 cBase, cAccent, cTrim, cGlove, cBoot; uniform float female;
varying vec3 vB, vN, vR; varying vec2 vUv;
float band(float x, float a, float b, float s){ return smoothstep(a - s, a + s, x) * (1.0 - smoothstep(b - s, b + s, x)); }
void main(){
  vec3 skinC = texture2D(skin, vUv).rgb;
  float y = vB.y, ax = abs(vB.x), front = vB.z, side = abs(vN.x);
  // base suit with a darker lower half, like one-piece race leathers
  vec3 c = mix(cBase * 0.78, cBase, smoothstep(0.42, 0.5, y));
  // shoulder yoke and chest panel in the accent colour, a V down the chest
  float yoke = smoothstep(0.7, 0.72, y - max(0.0, 0.1 - ax) * 0.9 * step(0.0, front));
  c = mix(c, cAccent, yoke * (1.0 - smoothstep(0.18, 0.22, ax * step(y, 0.83))));
  // racing stripes down the outside of legs and torso, and along the top of the arms
  float legStripe = step(y, 0.62) * smoothstep(0.62, 0.8, side) * step(0.06, ax);
  float armStripe = step(0.22, ax) * smoothstep(0.55, 0.8, vN.y) * step(0.62, y);
  c = mix(c, cAccent, max(legStripe, armStripe));
  // thin light piping at the panel edges
  float pipe = band(y - max(0.0, 0.1 - ax) * 0.9 * step(0.0, front), 0.695, 0.705, 0.004) + band(side, 0.6, 0.63, 0.01) * step(y, 0.62) * step(0.06, ax);
  c = mix(c, cTrim, clamp(pipe, 0.0, 1.0) * 0.9);
  // waist belt
  c = mix(c, cBase * 0.45, band(y, 0.525, 0.55, 0.003));
  // boots: toe cap and sole
  float boot = clamp(vR.z * 1.6, 0.0, 1.0) + step(y, 0.075);
  vec3 bootC = mix(cBoot, cBase * 0.5, step(y, 0.018) + band(y, 0.06, 0.068, 0.002));
  c = mix(c, bootC, clamp(boot, 0.0, 1.0));
  // gloves, darker palms
  vec3 gl = mix(cGlove, cGlove * 0.6, smoothstep(0.2, 0.6, -vN.y));
  c = mix(c, gl, smoothstep(0.3, 0.6, vR.y));
  // face and neck keep the painted skin; a high collar closes the suit
  float head = smoothstep(0.45, 0.75, vR.x) * step(0.835 - female * 0.005, y);
  c = mix(c, skinC, head);
  gl_FragColor = vec4(c, 1.0);
}`;

export function dressBody(mesh, K, skinTex, female) {
  const box = new THREE.Box3().setFromObject(mesh);
  const bounds = { min: box.min, max: box.max, cx: (box.min.x + box.max.x) / 2, cz: (box.min.z + box.max.z) / 2 };
  bakeAttributes(mesh, bounds);
  const size = 1024;
  const rt = new THREE.WebGLRenderTarget(size, size, { colorSpace: THREE.SRGBColorSpace });
  rt.texture.colorSpace = THREE.SRGBColorSpace;
  const col = h => new THREE.Color(h);
  const mat = new THREE.ShaderMaterial({
    uniforms: { skin: { value: skinTex }, cBase: { value: col(K.suitDark) }, cAccent: { value: col(K.suit) }, cTrim: { value: col('#f4f1ea') },
      cGlove: { value: col(K.glove) }, cBoot: { value: col(K.boot) }, female: { value: female ? 1 : 0 } },
    vertexShader: BAKE_VS, fragmentShader: BAKE_FS, side: THREE.DoubleSide, depthTest: false, depthWrite: false,
  });
  const scene = new THREE.Scene(), cam = new THREE.Camera();
  const m = new THREE.Mesh(mesh.geometry, mat); m.frustumCulled = false; scene.add(m);
  const prev = renderer.getRenderTarget(), prevClear = renderer.getClearColor(new THREE.Color()), prevA = renderer.getClearAlpha();
  renderer.setRenderTarget(rt); renderer.setClearColor(col(K.suitDark).multiplyScalar(0.85), 1); renderer.clear();
  renderer.render(scene, cam);
  renderer.setRenderTarget(prev); renderer.setClearColor(prevClear, prevA);
  mat.dispose();
  const old = mesh.material;
  mesh.material = new THREE.MeshStandardMaterial({ map: rt.texture, normalMap: old.normalMap || null, normalScale: new THREE.Vector2(0.55, 0.55), roughness: 0.55, metalness: 0.02, envMapIntensity: 0.9 });
  return rt;
}

// ---------- rigid gear ----------
const gearMats = new Map();
function mats(K) {
  const key = K.helmet + K.suit + K.suitDark;
  if (gearMats.has(key)) return gearMats.get(key);
  const m = {
    shell: new THREE.MeshPhysicalMaterial({ color: K.helmet, roughness: 0.28, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.08 }),
    accent: new THREE.MeshPhysicalMaterial({ color: K.suit, roughness: 0.35, clearcoat: 0.8, clearcoatRoughness: 0.1 }),
    dark: new THREE.MeshStandardMaterial({ color: '#1c1d24', roughness: 0.7 }),
    lens: new THREE.MeshPhysicalMaterial({ color: '#ffae3a', metalness: 0.6, roughness: 0.05, clearcoat: 1, envMapIntensity: 1.5, transparent: true, opacity: 0.55, side: THREE.DoubleSide }),
    pad: new THREE.MeshStandardMaterial({ color: K.suitDark, roughness: 0.45, metalness: 0.1 }),
  };
  gearMats.set(key, m);
  return m;
}
// Helmet in head space: origin at the centre of the skull, +z forward (face), +y up, metres.
// SphereGeometry angles: phi runs around Y with phi = PI/2 at +z; theta runs down from the crown.
function helmet(M, r) {
  const g = new THREE.Group(), P = Math.PI, open = P * 0.62;            // width of the face opening
  const sph = (rad, p0, pl, t0, tl, mat) => new THREE.Mesh(new THREE.SphereGeometry(rad, 40, 28, p0, pl, t0, tl), mat);
  // crown over the whole head, then the sides/back below the brow with the face left open
  const crown = sph(r, 0, P * 2, 0, P * 0.4, M.shell);
  const sides = sph(r, P / 2 + open / 2, P * 2 - open, P * 0.4, P * 0.42, M.shell);
  // chin bar closing the bottom of the opening
  const chin = sph(r * 1.02, P / 2 - open / 2 - 0.05, open + 0.1, P * 0.7, P * 0.12, M.shell);
  // tinted visor over the eyes: you still see the face behind it
  const visor = sph(r * 1.035, P / 2 - open / 2 - 0.08, open + 0.16, P * 0.38, P * 0.2, M.lens);
  // accent stripe front-to-back over the top, and a thin trim line round the brow
  const stripe = new THREE.Mesh(new THREE.TorusGeometry(r * 1.004, r * 0.09, 6, 48, P * 0.9), M.accent);
  stripe.rotation.set(0, -P / 2, 0); stripe.rotation.order = 'YXZ'; stripe.rotateZ(P * 0.05);
  const trim = new THREE.Mesh(new THREE.TorusGeometry(r * 1.01, r * 0.035, 6, 48), M.dark); trim.rotation.x = P / 2; trim.position.y = -r * 0.36;
  for (const m of [crown, sides, chin]) m.scale.set(1, 1.04, 1.12);
  visor.scale.set(1, 1.04, 1.12); stripe.scale.set(1.12, 1.04, 1);
  // bake each part's transform and merge by material: 4 draw calls for the whole helmet
  const merged = new Map();
  for (const m of [crown, sides, chin, visor, stripe, trim]) {
    m.updateMatrix(); const geo = m.geometry.clone().applyMatrix4(m.matrix);
    geo.deleteAttribute('uv');
    if (!merged.has(m.material)) merged.set(m.material, []);
    merged.get(m.material).push(geo.index ? geo.toNonIndexed() : geo);
  }
  for (const [mat, geos] of merged) { const mesh = new THREE.Mesh(mergeGeometries(geos), mat); mesh.castShadow = mat === M.shell; g.add(mesh); }
  return g;
}

// Attach gear to the skeleton. `rest` is the rig in bind pose: we place each piece in
// model space, then convert to the bone's local frame so it follows the animation.
export function attachGear(model, bones, K, bounds) {
  // call with the model scaled to real size, facing +z, before it is turned sideways on the board
  const M = mats(K), inv = new THREE.Matrix4();
  model.updateMatrixWorld(true);
  const place = (bone, obj, pos, fwd = new THREE.Vector3(0, 0, 1)) => {
    obj.position.copy(pos); obj.lookAt(pos.clone().add(fwd)); obj.updateMatrix();
    inv.copy(bone.matrixWorld).invert(); obj.applyMatrix4(inv); bone.add(obj);   // world -> bone space
  };
  const mp = b => b.getWorldPosition(new THREE.Vector3());
  // helmet sized from the crown height
  const head = mp(bones.Head), top = bounds.max.y, r = (top - head.y) * 0.54;
  place(bones.Head, helmet(M, r), new THREE.Vector3(head.x, top - r * 1.08, head.z + r * 0.32));
  // back protector over the upper back
  const s3 = mp(bones.Spine2), s1 = mp(bones.Spine);
  const back = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.14, 6, 12).scale(1.3, 1, 0.3), M.pad);
  const bp = s3.clone().lerp(s1, 0.4); bp.z -= 0.085;
  place(bones.Spine2, back, bp);
  // knee pads just below each knee, elbow pads on the forearms
  const padG = new THREE.CapsuleGeometry(0.045, 0.035, 4, 10).scale(1.05, 1.1, 0.5);
  for (const s of ['Left', 'Right']) {
    const k = mp(bones[s + 'Leg']), f = mp(bones[s + 'Foot']);
    const kp = k.clone().lerp(f, 0.04); kp.z += 0.055;
    const pad = new THREE.Mesh(padG, M.accent); place(bones[s + 'Leg'], pad, kp);
  }
}
