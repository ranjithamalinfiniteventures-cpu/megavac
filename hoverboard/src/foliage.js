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
  let seed = 11;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  // A fuzzy cloud of hundreds of tiny petals: dense in the middle, thinning to a ragged feathery
  // edge. Petals are near-white with only a slight light/shade variation (top lighter), no dark
  // outlines, so the card reads as soft blossom, not bubbles. Colour comes from vertex colours.
  const dots = 330;
  for (let i = 0; i < dots; i++) {
    const a = rnd() * Math.PI * 2, u = rnd(), d = Math.pow(u, 0.62) * S * 0.44;   // more dots near the centre
    const x = S / 2 + Math.cos(a) * d, y = S / 2 + Math.sin(a) * d * 0.9;
    const r = 2.2 + rnd() * 3.4 * (1 - d / (S * 0.5)) + 0.8;
    const top = 1 - y / S, v = Math.max(0.74, Math.min(1, 0.8 + top * 0.24 + (rnd() - 0.5) * 0.1)) * 255 | 0;
    g.fillStyle = `rgb(${v},${v},${v})`; g.beginPath();
    // a slightly squashed, rotated petal blob rather than a perfect circle
    g.ellipse(x, y, r, r * (0.7 + rnd() * 0.3), rnd() * 3.14, 0, 7); g.fill();
  }
  // solid neutral core so uv (0.5, 0.5) is opaque white whatever the petals did
  g.fillStyle = '#fff'; g.beginPath(); g.arc(S / 2, S / 2, 8, 0, 7); g.fill();
  // whisper of shading toward the bottom of the card (lower petals sit in shade), no dark spots
  g.globalCompositeOperation = 'source-atop';
  const sh = g.createLinearGradient(0, S * 0.35, 0, S * 0.85); sh.addColorStop(0, 'rgba(150,140,160,0)'); sh.addColorStop(1, 'rgba(150,140,160,0.28)');
  g.fillStyle = sh; g.fillRect(0, 0, S, S);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}

let tex = null;
// Material for kind B on tracks whose second species is a card-based tree.
export function blossomMaterial() {
  tex = tex || puffTexture();
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, map: tex, alphaTest: 0.5, roughness: 1, side: THREE.DoubleSide, envMapIntensity: 0.45 });
  return patchFoliage(m, 'blossom');
}
