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

// ---------- set pieces ----------
// The course is cut into 420 m segments; each gets one deterministic set piece.
export const SEG = 420;
const hash = k => { const x = Math.sin(k * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
export function segmentFeature(k) {
  if (k < 1) return null;
  // a designed rhythm (air, cover, exposure) rotated per track so each course reads differently
  const PATTERN = ['jump', 'tunnel', 'bridge', 'jump', 'bridge', 'none', 'tunnel', 'jump'];
  const off = { sunset: 0, alpine: 3, canyon: 5 }[THEME.id] || 0;
  const type = PATTERN[(k - 1 + off) % PATTERN.length], b = k * SEG + (hash(k) - 0.5) * 60;
  if (type === 'tunnel') return { type, s0: b + 90, s1: b + 250 + hash(k + 7) * 60 };
  if (type === 'bridge') return { type, s0: b + 110, s1: b + 230 + hash(k + 3) * 40 };
  if (type === 'jump') return { type, s0: b + 190, s1: b + 206, lip: b + 204 };
  return null;
}
function zoneWeight(type, s, fade) {
  const f = segmentFeature(Math.floor(s / SEG));
  if (!f || f.type !== type) return 0;
  return smooth(f.s0 - fade, f.s0 + 4, s) * (1 - smooth(f.s1 - 4, f.s1 + fade, s));
}
export const tunnelW = s => zoneWeight('tunnel', s, 30);
export const bridgeW = s => zoneWeight('bridge', s, 35);
// kicker ramp height above the road (quadratic transition, 2.4 m lip)
export const RAMP_LEN = 14, RAMP_H = 2.4;
export function rampH(s) {
  const f = segmentFeature(Math.floor(s / SEG));
  if (!f || f.type !== 'jump') return 0;
  const t = (s - (f.lip - RAMP_LEN)) / RAMP_LEN;
  return t > 0 && t <= 1 ? RAMP_H * t * t : 0;
}

// ---------- terrain ----------
// How open each side is: 0 = mountain wall, 1 = cliff dropping to the cloud sea.
export function openness(side, s) {
  const v = Math.sin(s / 620 + side * 1.9) * 1.6 + Math.sin(s / 233 + side) * 0.35;
  let o = smooth(-0.2, 0.6, v);
  o += (0 - o) * tunnelW(s);
  o += (1 - o) * bridgeW(s);
  return o;
}
export function terrainRel(u, s) {
  const a = Math.abs(u);
  const side = u > 0 ? 1 : -1;
  if (a < ROAD_HALF + 1.5) { const bw0 = bridgeW(s); return bw0 > 0 ? -0.35 - bw0 * 240 : -0.35; }
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
  let rel = -0.35 + shoulder * (0.8 + detail) + wall * (1 - o) + cliff * o;
  // tunnel: the mountain closes in right at the road edge
  const tw = tunnelW(s);
  if (tw > 0) rel += tw * smooth(ROAD_HALF + 1.5, 16, a) * (26 + 20 * fbm(s * 0.03, a * 0.05, 2));
  // bridge: the ground falls away straight from the deck into a chasm
  const bw = bridgeW(s);
  if (bw > 0) {
    // a wide gorge: void under the deck, rock walls rising from ~70 m out
    const chasm = -240 + smooth(55, 150, a) * (240 + wall * 0.6) + smooth(50, 110, a) * ridged(s * 0.01 + side * 3, a * 0.03, 3) * 50;
    rel += (chasm - rel) * bw;
  }
  return rel;
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
  if (THEME.strata) {
    // sandstone bands: colour follows absolute height so layers line up across the canyon
    const band = Math.sin((roadY(s) + rel) * 0.22 + fbm(u * 0.01, s * 0.01, 2) * 2.5);
    tmpC.copy(C.rock).lerp(C.rockDark, smooth(-0.2, 0.9, band));
    tmpC.lerp(C.snow, smooth(0.75, 0.95, -band) * 0.6);
    out.lerp(tmpC, smooth(0.25, 0.5, slope) * 0.95);
  }
  const snowLine = THEME.snowLine + 40 * fbm(s * 0.003, u * 0.003, 2);
  const snow = smooth(snowLine, snowLine + 25, rel);
  tmpC.copy(C.snow).lerp(C.snowShade, smooth(0.5, 0.8, slope));
  out.lerp(tmpC, snow * (1 - smooth(0.55, 0.85, slope)));
  return out;
}

// Splat weights (grass, dirt, cliff rock, pale rock/snow) following the same rules as the colours.
export function terrainSplat(u, s, rel, slope, out) {
  const a = Math.abs(u);
  let g = 1, d = 0, r = 0, w = 0;
  const lerp = (k, i) => { g *= 1 - k; d *= 1 - k; r *= 1 - k; w *= 1 - k; if (i === 1) d += k; else if (i === 2) r += k; else w += k; };
  lerp(1 - smooth(ROAD_HALF + 1, ROAD_HALF + 5, a), 1);
  lerp(smooth(0.42, 0.62, slope), 2);
  if (THEME.strata) lerp(smooth(0.25, 0.5, slope) * 0.95, 2);
  const snowLine = THEME.snowLine + 40 * fbm(s * 0.003, u * 0.003, 2);
  lerp(smooth(snowLine, snowLine + 25, rel) * (1 - smooth(0.55, 0.85, slope)), 3);
  out[0] = g; out[1] = d; out[2] = r; out[3] = w;
  return out;
}
