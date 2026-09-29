// Textured foliage cards: hundreds of tiny quads carrying a soft, feathery blossom-cluster
// texture with transparent edges (alpha test), the standard way games draw leaf and blossom
// crowns. The texture is painted at load, so there is nothing to download. The card colour
// comes from vertex colours (pink, per card) multiplying the texture's light/shade pattern.
// Non-card parts of the same mesh (trunk, branches) use uv = (0.5, 0.5), which is an opaque,
// neutral-white texel, so they keep their plain vertex colours.
import * as THREE from 'three';
import { patchFoliage } from './premium.js';

export const OPAQUE_UV = [0.5, 0.5];

function puffTexture() {
  const S = 128, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d');
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  // a cluster of overlapping soft blossoms: sunlit tops white, shaded undersides grey
  const n = 46;
  for (let i = 0; i < n; i++) {
    const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * S * 0.36;
    const x = S / 2 + Math.cos(a) * d, y = S / 2 + Math.sin(a) * d * 0.85, r = S * (0.075 + rnd() * 0.07);
    const lit = 0.72 + 0.28 * (1 - (y / S)) + (rnd() - 0.5) * 0.12;      // brighter toward the top of the card
    const v = Math.max(0.55, Math.min(1, lit)) * 255 | 0;
    const gr = g.createRadialGradient(x, y - r * 0.25, r * 0.1, x, y, r);
    gr.addColorStop(0, `rgba(255,255,255,1)`);
    gr.addColorStop(0.55, `rgba(${v},${v},${v},1)`);
    gr.addColorStop(1, `rgba(${v * 0.8 | 0},${v * 0.8 | 0},${v * 0.8 | 0},1)`);
    g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
  }
  // a solid neutral core so uv (0.5, 0.5) is opaque white, whatever the clusters did
  g.fillStyle = '#fff'; g.beginPath(); g.arc(S / 2, S / 2, 7, 0, 7); g.fill();
  // tiny dark gaps between blossoms give the cluster depth
  g.globalCompositeOperation = 'source-atop';
  for (let i = 0; i < 26; i++) { g.fillStyle = `rgba(120,110,120,${0.25 + rnd() * 0.25})`; g.beginPath(); g.arc(S / 2 + (rnd() - 0.5) * S * 0.6, S / 2 + (rnd() - 0.5) * S * 0.55, 1.2 + rnd() * 2, 0, 7); g.fill(); }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}

let tex = null;
// Material for kind B on tracks whose second species is a card-based tree.
export function blossomMaterial() {
  tex = tex || puffTexture();
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, map: tex, alphaTest: 0.45, roughness: 1, side: THREE.DoubleSide, envMapIntensity: 0.45 });
  return patchFoliage(m, 'blossom');
}
