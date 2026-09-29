// Premium graphics layer (Sunset Pass first): CC0 Poly Haven textures and HDRI,
// texture-splatted terrain with parallax occlusion, triplanar rock, soft-shaded
// foliage with wind and backlight, drifting cloud shadows and a key light that
// falls off away from the rider. Everything patches stock MeshStandardMaterial
// through onBeforeCompile, so shadows, fog and PBR lighting keep working.
import * as THREE from 'three';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import { THEME } from './theme.js';

const qs = new URLSearchParams(location.search);
export const PREMIUM = !!THEME.premium && !qs.has('classic');
export const HQ = !(/Mobi|Android/i.test(navigator.userAgent) || qs.has('low'));

// Uniforms shared by every patched material; main.js writes them once per frame.
export const U = {
  uTime: { value: 0 },
  uFocus: { value: new THREE.Vector3() },
  uSunW: { value: new THREE.Vector3(...THEME.sunDir).normalize() },
  uSunCol: { value: new THREE.Color(THEME.sun) },
};

// ---------- asset loading ----------
// fetch + createImageBitmap so the artifact fetch shim can serve everything.
async function bitmap(url) {
  const r = await fetch(url); if (!r.ok) throw new Error(url);
  return createImageBitmap(await r.blob(), { colorSpaceConversion: 'none', premultiplyAlpha: 'none' });
}
function pixels(img) {
  const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
  const g = c.getContext('2d', { willReadFrequently: true }); g.drawImage(img, 0, 0);
  return g.getImageData(0, 0, img.width, img.height).data;
}
// Vertical strip of square layers -> texture array.
function arrayTex(img, srgb) {
  const n = img.height / img.width, data = pixels(img);
  const t = new THREE.DataArrayTexture(new Uint8Array(data.buffer), img.width, img.width, n);
  t.format = THREE.RGBAFormat; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter;
  t.generateMipmaps = true; t.anisotropy = 8;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  // mean linear colour per layer, so detail can modulate the palette without recolouring it
  const means = [];
  for (let l = 0; l < n; l++) {
    let r = 0, g = 0, b = 0, k = 0;
    const off = l * img.width * img.width * 4;
    for (let i = 0; i < img.width * img.width; i += 7) {
      const j = off + i * 4, lin = v => Math.pow(v / 255, 2.2);
      r += lin(data[j]); g += lin(data[j + 1]); b += lin(data[j + 2]); k++;
    }
    means.push(new THREE.Vector3(r / k, g / k, b / k));
  }
  return { tex: t, means };
}
function tex2d(img, srgb, repeat = 1) {
  const t = new THREE.Texture(img); t.needsUpdate = true;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; t.repeat.set(repeat, repeat);
  t.flipY = false;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export async function loadPremium(renderer) {
  if (!PREMIUM) return null;
  const base = 'assets/tex/';
  const [alb, nor, hgt, aD, aN, aR, hdr] = await Promise.all([
    bitmap(base + 'ground_albedo.jpg'), bitmap(base + 'ground_normal.jpg'), bitmap(base + 'ground_height.png'),
    bitmap(base + 'asphalt_diff.jpg'), bitmap(base + 'asphalt_nor.jpg'), bitmap(base + 'asphalt_rough.jpg'),
    new HDRLoader().setDataType(THREE.FloatType).loadAsync(base + (THEME.premiumHdri || 'sunset_sky.hdr')),
  ]);
  const A = arrayTex(alb, true), N = arrayTex(nor, false);
  const H = tex2d(hgt, false);
  const asphalt = { diff: tex2d(aD, true), nor: tex2d(aN, false), rough: tex2d(aR, false) };
  const env = hdriEnvironment(renderer, hdr);
  return { albedo: A.tex, means: A.means, normal: N.tex, height: H, asphalt, env };
}

// Rotate the HDRI so its sun sits where our sun is, then prefilter it for IBL.
function hdriEnvironment(renderer, hdr) {
  const { data, width: w, height: h } = hdr.image;
  let best = -1, bx = 0, by = 0;
  for (let y = 0; y < h * 0.55; y++) for (let x = 0; x < w; x++) {
    const i = (y * w + x) * 4, l = data[i] * 0.3 + data[i + 1] * 0.6 + data[i + 2] * 0.1;
    if (l > best) { best = l; bx = x; by = y; }
  }
  const phi = bx / w * Math.PI * 2, theta = by / h * Math.PI;
  const azHdr = Math.atan2(Math.sin(phi) * Math.sin(theta), -Math.cos(phi) * Math.sin(theta));
  const sd = U.uSunW.value, azSun = Math.atan2(sd.z, sd.x);
  // the directional light is the sun; clip the photographed sun so it can't smear hot
  // highlights across every glossy surface through the prefiltered reflections
  for (let i = 0; i < data.length; i += 4) {
    const l = data[i] * 0.3 + data[i + 1] * 0.6 + data[i + 2] * 0.1;
    if (l > 2.5) { const k = 2.5 / l; data[i] *= k; data[i + 1] *= k; data[i + 2] *= k; }
  }
  hdr.mapping = THREE.UVMapping; hdr.flipY = true; hdr.needsUpdate = true;
  const scene = new THREE.Scene();
  const mat = new THREE.MeshBasicMaterial({ map: hdr, side: THREE.BackSide, toneMapped: false });
  // pull the photo toward the track palette so reflections and ambient match the sky dome
  mat.color.set(THEME.premiumEnvTint || '#ffffff');
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(10, 64, 32), mat);
  sphere.rotation.y = azHdr - azSun;
  scene.add(sphere);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const rt = pmrem.fromScene(scene, 0.0);
  pmrem.dispose();
  return { texture: rt.texture, scene };
}

// ---------- shared GLSL ----------
const NOISE = /* glsl */`
float pHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float pNoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f);
  return mix(mix(pHash(i), pHash(i+vec2(1,0)), f.x), mix(pHash(i+vec2(0,1)), pHash(i+vec2(1,1)), f.x), f.y); }
// soft drifting cloud shadows plus a key light that eases off away from the rider
float premiumKey(vec3 wp){
  vec2 p = wp.xz * 0.0065 + vec2(uTime * 0.012, uTime * 0.004);
  float n = pNoise(p) * 0.55 + pNoise(p * 2.3 + 7.1) * 0.3 + pNoise(p * 5.2 + 3.7) * 0.15;
  float cloud = mix(1.0, 0.42, smoothstep(0.5, 0.7, n));
  float fall = mix(1.0, 0.72, smoothstep(35.0, 520.0, distance(wp, uFocus)));
  return cloud * fall;
}
`;
const HEAD = /* glsl */`
uniform float uTime; uniform vec3 uFocus, uSunW, uSunCol;
varying vec3 vWP; varying vec3 vWN;
`;
// world position/normal varyings (works with and without instancing)
const VERT_WORLD = /* glsl */`
#include <worldpos_vertex>
{
  vec4 wp4 = vec4(transformed, 1.0); vec3 wn = objectNormal;
  #ifdef USE_INSTANCING
    wp4 = instanceMatrix * wp4; wn = mat3(instanceMatrix) * wn;
  #endif
  wp4 = modelMatrix * wp4; vWP = wp4.xyz; vWN = normalize(mat3(modelMatrix) * wn);
}
`;
const LIGHT_MOD = /* glsl */`
#include <lights_fragment_end>
{ float k = premiumKey(vWP); reflectedLight.directDiffuse *= k; reflectedLight.directSpecular *= k; }
`;

function addUniforms(shader, extra = {}) { Object.assign(shader.uniforms, U, extra); }

// Adds cloud shadows / key falloff (and optional extras) to any stock lit material.
export function patchLit(mat, key, opts = {}) {
  if (!PREMIUM) return mat;
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (shader, r) => {
    prev?.call(mat, shader, r);
    addUniforms(shader, opts.uniforms);
    shader.vertexShader = HEAD + (opts.vertHead || '') + '\n' + shader.vertexShader
      .replace('#include <worldpos_vertex>', VERT_WORLD)
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n' + (opts.vert || ''));
    let fs = HEAD + NOISE + (opts.fragHead || '') + '\n' + shader.fragmentShader.replace('#include <lights_fragment_end>', LIGHT_MOD + (opts.afterLights || ''));
    if (opts.color) fs = fs.replace('#include <color_fragment>', '#include <color_fragment>\n' + opts.color);
    if (opts.normal) fs = fs.replace('#include <normal_fragment_maps>', opts.normal);
    if (opts.rough) fs = fs.replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\n' + opts.rough);
    shader.fragmentShader = fs;
  };
  mat.customProgramCacheKey = () => 'premium-' + key;
  return mat;
}

// ---------- triplanar helpers ----------
const TRI = /* glsl */`
uniform sampler2DArray tAlb, tNor; uniform sampler2D tHgt; uniform vec3 uMean[4];
vec3 triW(vec3 n){ vec3 w = pow(abs(n), vec3(4.0)); return w / (w.x + w.y + w.z); }
vec3 triAlb(float l, vec3 p, vec3 w, float s){
  return texture(tAlb, vec3(p.zy * s, l)).rgb * w.x + texture(tAlb, vec3(p.xz * s, l)).rgb * w.y + texture(tAlb, vec3(p.xy * s, l)).rgb * w.z;
}
// whiteout-blended triplanar normal (Golus), world space
vec3 triNor(float l, vec3 p, vec3 n, vec3 w, float s, float k){
  vec3 tx = texture(tNor, vec3(p.zy * s, l)).xyz * 2. - 1.;
  vec3 ty = texture(tNor, vec3(p.xz * s, l)).xyz * 2. - 1.;
  vec3 tz = texture(tNor, vec3(p.xy * s, l)).xyz * 2. - 1.;
  tx.xy *= k; ty.xy *= k; tz.xy *= k;
  vec3 sg = sign(n); tx.x *= sg.x; ty.x *= sg.y; tz.x *= -sg.z;
  tx = vec3(tx.xy + n.zy, abs(tx.z) * n.x);
  ty = vec3(ty.xy + n.xz, abs(ty.z) * n.y);
  tz = vec3(tz.xy + n.xy, abs(tz.z) * n.z);
  return normalize(tx.zyx * w.x + ty.xzy * w.y + tz.xyz * w.z);
}
vec3 detailTint(vec3 tex, vec3 mean, float amt, float hue){
  vec3 d = clamp(tex / max(mean, vec3(0.002)), 0.15, 2.4);
  float l = dot(d, vec3(0.2126, 0.7152, 0.0722));
  return mix(vec3(1.0), mix(vec3(l), d, hue), amt);
}
`;

function texUniforms(P) {
  return { tAlb: { value: P.albedo }, tNor: { value: P.normal }, tHgt: { value: P.height }, uMean: { value: P.means } };
}

// Rocks, tunnel walls and boulders: one triplanar layer of the ground array.
export function rockMaterial(P, base, layer = 3, scale = 0.35, key = 'rock') {
  const mat = new THREE.MeshStandardMaterial({ ...base, flatShading: false });
  if (!PREMIUM || !P) { mat.flatShading = base.flatShading ?? true; return mat; }
  return patchLit(mat, key + layer, {
    uniforms: texUniforms(P),
    fragHead: TRI + `#define RL ${layer.toFixed(1)}\n#define RS ${scale.toFixed(3)}\n`,
    color: `{ vec3 w = triW(vWN); vec3 t = triAlb(RL, vWP, w, RS);
      diffuseColor.rgb *= detailTint(t, uMean[int(RL)], 0.9, 0.35); }`,
    normal: `{ vec3 w = triW(vWN); vec3 nw = triNor(RL, vWP, normalize(vWN) * faceDirection, w, RS, 1.2);
      normal = normalize((viewMatrix * vec4(nw, 0.0)).xyz); }`,
  });
}

// Texture-splatted terrain. Vertex colours carry the palette; the `splat` attribute holds
// grass / dirt / cliff / pale-rock weights. Height-aware blending breaks up the transitions,
// cliffs are triplanar, and the near ground gets parallax occlusion mapping.
export function terrainMaterial(P) {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 });
  return patchLit(mat, 'terrain' + (HQ ? 'hq' : ''), {
    uniforms: texUniforms(P),
    vertHead: 'attribute vec4 splat; varying vec4 vSplat;\n',
    vert: 'vSplat = splat;',
    fragHead: TRI + 'varying vec4 vSplat;\n' + (HQ ? '#define POM 1\n' : '') + `
      const float GS = 0.30;   // grass / dirt tiling (1 repeat per ~3.3 m)
      const float RS = 0.07;   // cliff strata tiling
      vec4 gW; vec2 gUV; vec3 gTri;
      vec2 pom(vec2 uv, vec3 V, float fade){
        #ifdef POM
          if (fade <= 0.001) return uv;
          const int N = 14; float depth = 0.045 * fade;
          vec2 dUV = -V.xz / max(V.y, 0.25) * depth / float(N);
          float layer = 0.0, dl = 1.0 / float(N);
          vec2 cuv = uv; vec4 hh = texture(tHgt, cuv * 0.999);
          float h = 1.0 - (hh.r * gW.x + hh.g * gW.y) / max(gW.x + gW.y, 0.001);
          for (int i = 0; i < N; i++) {
            if (layer >= h) break;
            cuv += dUV; layer += dl;
            hh = texture(tHgt, cuv); h = 1.0 - (hh.r * gW.x + hh.g * gW.y) / max(gW.x + gW.y, 0.001);
          }
          // one refinement step between the last two samples
          vec2 puv = cuv - dUV; vec4 ph4 = texture(tHgt, puv);
          float ph = 1.0 - (ph4.r * gW.x + ph4.g * gW.y) / max(gW.x + gW.y, 0.001);
          float a = h - layer, b = ph - (layer - dl);
          float t = a / (a - b + 1e-4);
          return mix(cuv, puv, clamp(t, 0.0, 1.0));
        #else
          return uv;
        #endif
      }`,
    color: `{
      vec3 n = normalize(vWN); gTri = triW(n);
      float dist = distance(vWP, cameraPosition);
      vec3 V = normalize(cameraPosition - vWP);
      // height-aware weights
      vec4 h4 = texture(tHgt, vWP.xz * GS);
      vec4 w = max(vSplat, 0.0);
      vec4 hw = w + (h4 - 0.5) * 0.6 * step(0.001, w);
      float mx = max(max(hw.x, hw.y), max(hw.z, hw.w));
      w = max(hw - (mx - 0.25), 0.0); w /= max(dot(w, vec4(1.0)), 1e-4);
      gW = w;
      gUV = pom(vWP.xz * GS, V, (w.x + w.y) * (1.0 - smoothstep(10.0, 42.0, dist)));
      float far = 1.0 - smoothstep(120.0, 700.0, dist);
      vec3 tint = vec3(0.0);
      if (w.x > 0.001) tint += w.x * detailTint(texture(tAlb, vec3(gUV, 0.0)).rgb, uMean[0], 0.85 * far + 0.15, 0.45);
      if (w.y > 0.001) tint += w.y * detailTint(texture(tAlb, vec3(gUV, 1.0)).rgb, uMean[1], 0.95 * far + 0.15, 0.5);
      if (w.z > 0.001) tint += w.z * detailTint(triAlb(2.0, vWP, gTri, RS), uMean[2], 0.9 * far + 0.2, 0.6);
      if (w.w > 0.001) tint += w.w * detailTint(triAlb(3.0, vWP, gTri, 0.12), uMean[3], 0.6 * far + 0.1, 0.2);
      diffuseColor.rgb *= tint;
    }`,
    normal: `{
      vec3 n = normalize(vWN), nw = vec3(0.0);
      if (gW.x + gW.y > 0.001) {
        vec3 t = (texture(tNor, vec3(gUV, 0.0)).xyz * gW.x + texture(tNor, vec3(gUV, 1.0)).xyz * gW.y) / (gW.x + gW.y) * 2. - 1.;
        nw += (gW.x + gW.y) * normalize(vec3(t.x * 1.4 + n.x, abs(t.z) * n.y, t.y * 1.4 + n.z));
      }
      if (gW.z > 0.001) nw += gW.z * triNor(2.0, vWP, n, gTri, RS, 1.5);
      if (gW.w > 0.001) nw += gW.w * triNor(3.0, vWP, n, gTri, 0.12, 0.8);
      nw = normalize(mix(n, normalize(nw + 1e-5), 1.0 - smoothstep(150.0, 600.0, distance(vWP, cameraPosition))));
      normal = normalize((viewMatrix * vec4(nw, 0.0)).xyz);
    }`,
  });
}

// Asphalt detail over the painted road texture: normal + roughness maps and albedo modulation.
export function patchRoad(mat, P) {
  if (!PREMIUM || !P) return mat;
  const { diff, nor, rough } = P.asphalt;
  for (const t of [diff, nor, rough]) t.repeat.set(5, 5.5);
  mat.normalMap = nor; mat.normalScale.set(0.9, 0.9);
  mat.roughnessMap = rough; mat.roughness = 1.0; mat.metalness = 0.0; mat.envMapIntensity = 0.55;
  return patchLit(mat, 'road', {
    uniforms: { tAsph: { value: diff } },
    fragHead: 'uniform sampler2D tAsph;\n',
    color: `{ vec3 a = texture(tAsph, vNormalMapUv).rgb; float l = dot(a, vec3(0.2126, 0.7152, 0.0722));
      diffuseColor.rgb *= clamp(0.35 + l * 2.2, 0.55, 1.15); }`,
    rough: 'roughnessFactor = clamp(roughnessFactor * 0.95 + 0.25, 0.72, 1.0);',
    // the low sun sits dead ahead; keep a sheen on the asphalt without a white glare sheet
    afterLights: 'reflectedLight.directSpecular *= 0.18;',
  });
}

// Foliage: rounded normals are baked into the geometry; here we add wind sway and the
// warm light that comes through leaves when the low sun is behind them.
export function patchFoliage(mat, key) {
  mat.flatShading = false;
  return patchLit(mat, 'foliage-' + key, {
    vert: `{
      float ph = 0.0;
      #ifdef USE_INSTANCING
        ph = instanceMatrix[3].x * 0.13 + instanceMatrix[3].z * 0.11;
      #endif
      float hgt = max(position.y - 1.5, 0.0);
      float g = sin(uTime * 1.3 + ph) * 0.6 + sin(uTime * 2.9 + ph * 1.7) * 0.25;
      transformed.x += g * 0.018 * hgt; transformed.z += cos(uTime * 1.1 + ph) * 0.012 * hgt;
    }`,
    afterLights: `{
      vec3 V = normalize(cameraPosition - vWP);
      float back = pow(clamp(dot(-V, uSunW), 0.0, 1.0), 5.0);
      float wrap = clamp(dot(normalize(vWN), uSunW) * 0.5 + 0.5, 0.0, 1.0);
      reflectedLight.indirectDiffuse += diffuseColor.rgb * uSunCol * (back * 1.3 + wrap * 0.18) * premiumKey(vWP);
    }`,
  });
}

// Rounded foliage normals: point every vertex away from its clump centre, blended with the
// crown centre, so leaf masses shade as soft volumes instead of facets (Quaternius-style).
export function roundNormals(geo, centre, crown, crownMix = 0.35) {
  const p = geo.attributes.position, n = new Float32Array(p.count * 3), v = new THREE.Vector3(), a = new THREE.Vector3(), b = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    a.copy(v).sub(centre).normalize();
    b.copy(v).sub(crown).normalize();
    a.lerp(b, crownMix).normalize();
    n[i * 3] = a.x; n[i * 3 + 1] = a.y; n[i * 3 + 2] = a.z;
  }
  geo.setAttribute('normal', new THREE.BufferAttribute(n, 3));
  return geo;
}
