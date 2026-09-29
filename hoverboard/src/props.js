// Authored reward and gate props: amber crystal shards and striped boost gates.
// Geometry, textures and materials are built once and shared by every instance.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { PREMIUM, patchLit } from './premium.js';

let K = null;
function canvasTex(w, h, draw, repeat) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...repeat); }
  return t;
}
function kit(accent) {
  if (K) return K;
  // shard: a tall faceted amber crystal with a gold band around its waist
  const top = new THREE.ConeGeometry(0.2, 0.22, 8, 1).translate(0, 0.11, 0);
  const bot = new THREE.ConeGeometry(0.2, 0.34, 8, 1).rotateX(Math.PI).translate(0, -0.17, 0);
  // crystal + gold band in one geometry (vertex colours) so each shard is a single draw call
  const tint = (g, hex) => { g = g.index ? g.toNonIndexed() : g; const c = new THREE.Color(hex), a = new Float32Array(g.attributes.position.count * 3); for (let i = 0; i < a.length; i += 3) { a[i] = c.r; a[i + 1] = c.g; a[i + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.deleteAttribute('uv'); return g; };
  const gem = mergeGeometries([top.toNonIndexed(), bot.toNonIndexed()]); gem.computeVertexNormals();
  const crystal = mergeGeometries([tint(gem, '#ffc02e'), tint(new THREE.TorusGeometry(0.215, 0.02, 6, 28).rotateX(Math.PI / 2), '#fff3cf')]);
  const blob = canvasTex(64, 64, (g) => {
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 31);
    gr.addColorStop(0, 'rgba(0,0,0,0.55)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  });
  // gate ring: alternating accent / white blocks like a race checkpoint
  const stripes = canvasTex(256, 16, (g, w, h) => {
    for (let i = 0; i < 16; i++) { g.fillStyle = i % 2 ? '#f6f3ec' : accent; g.fillRect(i * w / 16, 0, w / 16, h); }
  }, [3, 1]);
  const chevron = canvasTex(128, 256, (g, w, h) => {
    g.clearRect(0, 0, w, h); g.lineWidth = 18; g.lineJoin = 'miter'; g.strokeStyle = 'rgba(255,255,255,0.9)';
    for (const y of [60, 130, 200]) { g.beginPath(); g.moveTo(16, y + 34); g.lineTo(64, y - 10); g.lineTo(112, y + 34); g.stroke(); }
  });
  const mats = {
    crystal: new THREE.MeshPhysicalMaterial({ vertexColors: true, color: '#ffffff', roughness: 0.1, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.05,
      emissive: '#7a4a00', emissiveIntensity: 0.3, flatShading: true, envMapIntensity: 1.3 }),
    gold: new THREE.MeshStandardMaterial({ color: '#e9b24a', metalness: 1, roughness: 0.3 }),
    blob: new THREE.MeshBasicMaterial({ map: blob, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
    ring: new THREE.MeshStandardMaterial({ map: stripes, roughness: 0.45, metalness: 0.1 }),
    frame: new THREE.MeshStandardMaterial({ color: '#2b2f38', metalness: 0.85, roughness: 0.35 }),
    post: new THREE.MeshStandardMaterial({ color: '#e9e5dc', roughness: 0.6 }),
    chevron: new THREE.MeshBasicMaterial({ map: chevron, color: accent, transparent: true, opacity: 0.85, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
  };
  if (PREMIUM) for (const k of ['crystal', 'gold', 'ring', 'frame', 'post']) patchLit(mats[k], 'prop-' + k);
  // gate stands: a post each side with a weighted foot, plus the collar holding the ring
  const R = 2.3, parts = [];
  for (const sd of [-1, 1]) {
    parts.push(new THREE.CylinderGeometry(0.09, 0.11, 2.3, 10).translate(sd * R, 1.15, 0));
    parts.push(new THREE.CylinderGeometry(0.34, 0.4, 0.16, 16).translate(sd * R, 0.08, 0));
    parts.push(new THREE.SphereGeometry(0.17, 14, 10).translate(sd * R, 2.3, 0));
  }
  K = {
    mats, crystal, blobGeo: new THREE.PlaneGeometry(0.9, 0.9).rotateX(-Math.PI / 2),
    ringGeo: new THREE.TorusGeometry(2.1, 0.12, 12, 64), frameGeo: new THREE.TorusGeometry(2.32, 0.1, 10, 64),
    postGeo: mergeGeometries(parts), chevronGeo: new THREE.PlaneGeometry(2.4, 4.8).rotateX(-Math.PI / 2),
  };
  return K;
}

// Shard floating `lift` metres above the road; the group spins, the shadow stays grounded.
export function makeShard(lift = 1, accent = '#ff7a2f') {
  const k = kit(accent), g = new THREE.Group();
  const c = new THREE.Mesh(k.crystal, k.mats.crystal);
  const shadow = new THREE.Mesh(k.blobGeo, k.mats.blob); shadow.position.y = -lift + 0.04;
  g.add(c, shadow); g.userData.shadow = shadow;
  return g;
}

// Boost gate: stands + dark frame + striped ring (spins) + chevrons on the road through it.
export function makeGate(accent = '#ff7a2f') {
  const k = kit(accent), g = new THREE.Group();
  const posts = new THREE.Mesh(k.postGeo, k.mats.post); posts.castShadow = true;
  const frame = new THREE.Mesh(k.frameGeo, k.mats.frame); frame.position.y = 2.3; frame.castShadow = true;
  const ring = new THREE.Mesh(k.ringGeo, k.mats.ring); ring.position.y = 2.3;
  const chev = new THREE.Mesh(k.chevronGeo, k.mats.chevron); chev.position.set(0, 0.05, 1.2);
  g.add(posts, frame, ring, chev);
  return { group: g, ring };
}
