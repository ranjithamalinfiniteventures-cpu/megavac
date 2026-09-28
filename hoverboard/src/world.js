// Track and terrain math. Everything is a pure function of (u, s):
// s = distance down the mountain, u = lateral offset from the road centre.
import * as THREE from 'three';

// ---------- noise ----------
const P = new Uint8Array(512);
{
  let seed = 1337;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const p = [...Array(256).keys()];
  for (let i = 255; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  for (let i = 0; i < 512; i++) P[i] = p[i & 255];
}
const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
function grad(h, x, y) { const u = h & 1 ? x : -x, v = h & 2 ? y : -y; return (h & 4) ? u + v : (u + v) * 0.7; }
export function noise2(x, y) {
  const X = Math.floor(x) & 255, Y = Math.floor(y) & 255;
  x -= Math.floor(x); y -= Math.floor(y);
  const u = fade(x), v = fade(y);
  const a = P[X] + Y, b = P[X + 1] + Y;
  const l1 = grad(P[a], x, y) + u * (grad(P[b], x - 1, y) - grad(P[a], x, y));
  const l2 = grad(P[a + 1], x, y - 1) + u * (grad(P[b + 1], x - 1, y - 1) - grad(P[a + 1], x, y - 1));
  return l1 + v * (l2 - l1);
}
export function fbm(x, y, oct = 5) {
  let f = 0, a = 0.5, n = 0;
  for (let i = 0; i < oct; i++) { f += a * noise2(x, y); n += a; x *= 2.03; y *= 2.03; a *= 0.5; }
  return f / n;
}
export function ridged(x, y, oct = 5) {
  let f = 0, a = 0.5, n = 0;
  for (let i = 0; i < oct; i++) { f += a * (1 - Math.abs(noise2(x, y) * 1.6)); n += a; x *= 2.1; y *= 2.1; a *= 0.5; }
  return f / n;
}
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// ---------- road centreline ----------
export const ROAD_HALF = 9;
export function roadX(s) {
  return 70 * Math.sin(s / 330) + 38 * Math.sin(s / 141 + 1.3) + 11 * Math.sin(s / 63 + 0.4);
}
export function roadY(s) {
  return -0.14 * s + 10 * Math.sin(s / 190) + 4 * Math.sin(s / 77 + 2);
}
export function roadDX(s) { return (roadX(s + 0.5) - roadX(s - 0.5)); }
export function roadDY(s) { return (roadY(s + 0.5) - roadY(s - 0.5)); }

// ---------- terrain ----------
// How open each side is: 0 = mountain wall, 1 = cliff dropping to the cloud sea.
export function openness(side, s) {
  const v = Math.sin(s / 620 + side * 1.9) * 1.6 + Math.sin(s / 233 + side) * 0.35;
  return smooth(-0.2, 0.6, v);
}
export function terrainRel(u, s) {
  const a = Math.abs(u);
  const side = u > 0 ? 1 : -1;
  if (a < ROAD_HALF + 1.5) return -0.35;
  const shoulder = smooth(ROAD_HALF + 1, ROAD_HALF + 5, a);
  const detail = fbm(u * 0.045, s * 0.045, 3) * 3.5 * shoulder;
  // mountain wall
  const wallN = fbm(s * 0.0035 + side * 17.3, a * 0.006, 4) * 0.5 + 0.5;
  const wall = smooth(14, 90, a) * (14 + 90 * wallN * wallN)
    + smooth(30, 140, a) * ridged(s * 0.006 + side * 5, a * 0.01, 4) * 80
    + smooth(120, 520, a) * (140 + 160 * (fbm(s * 0.0012 + side * 3, a * 0.002, 3) * 0.5 + 0.5));
  // cliff edge: a grassy lip, then a broken rock face down into the clouds
  const lip = smooth(ROAD_HALF + 2, 22, a) * (1.5 + fbm(s * 0.02, a * 0.05, 2) * 2);
  const fall = Math.pow(smooth(22, 190, a), 0.7) * (330 + 60 * fbm(s * 0.004 + side * 9, a * 0.01, 3));
  const crags = smooth(24, 80, a) * ridged(s * 0.01 + side * 3, a * 0.03, 3) * 26;
  const cliff = lip - fall + crags;
  const o = openness(side, s);
  return -0.35 + shoulder * (0.8 + detail) + wall * (1 - o) + cliff * o;
}
export function terrainH(u, s) { return roadY(s) + terrainRel(u, s); }

// World position of a lateral/along-track coordinate.
export function worldPos(u, s, h, out = new THREE.Vector3()) {
  return out.set(roadX(s) + u, h, -s);
}

// Lateral sample positions: dense near the road, sparse far away.
export function lateralSamples(outer, maxU) {
  const inner = [];
  for (let u = -16; u <= 16.001; u += 1.6) inner.push(u);
  const side = [];
  for (let j = 1; j <= outer; j++) side.push(16 + (maxU - 16) * Math.pow(j / outer, 2));
  return [...side.map(v => -v).reverse(), ...inner, ...side];
}

// ---------- colours ----------
import { THEME } from './theme.js';
const C = {
  grass: new THREE.Color(THEME.meadow), grassDry: new THREE.Color(THEME.meadowDry), dirt: new THREE.Color(THEME.dirt),
  rock: new THREE.Color(THEME.rock), rockDark: new THREE.Color(THEME.rockDark), snow: new THREE.Color(THEME.snow), snowShade: new THREE.Color(THEME.snowShade),
};
const tmpC = new THREE.Color();
export function terrainColor(u, s, rel, slope, out) {
  const a = Math.abs(u);
  const n = fbm(u * 0.015 + 40, s * 0.015, 3);
  out.copy(C.grass).lerp(C.grassDry, smooth(-0.25, 0.35, n));
  out.lerp(C.dirt, 1 - smooth(ROAD_HALF + 1, ROAD_HALF + 5, a));
  tmpC.copy(C.rock).lerp(C.rockDark, smooth(-0.2, 0.3, fbm(u * 0.03, s * 0.03, 2)) * 0.8 + smooth(-40, -200, rel) * 0.5);
  out.lerp(tmpC, smooth(0.42, 0.62, slope));
  const snowLine = 140 + 40 * fbm(s * 0.003, u * 0.003, 2);
  const snow = smooth(snowLine, snowLine + 25, rel);
  tmpC.copy(C.snow).lerp(C.snowShade, smooth(0.5, 0.8, slope));
  out.lerp(tmpC, snow);
  return out;
}
