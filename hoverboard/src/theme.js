// Each track is one palette + a few world switches. One palette drives sky, fog,
// terrain, props and rider so the frame reads as one place. Albedos stay below white;
// the sun does the highlights and the tinted low fill keeps shaded faces coloured.
const SUNSET = {
  id: 'sunset', name: 'Sunset Pass', blurb: 'Golden hour above the clouds',
  skyTop: '#27347a', skyMid: '#7d6fb8', skyHorizon: '#ffb98c', skyBottom: '#f7cfae',
  sun: '#ffd8a8', sunDir: [-0.32, 0.16, -0.93],
  fog: '#e8b397', fogNear: 120, fogFar: 1500,
  hemiSky: '#a9b6ff', hemiGround: '#4a3044', hemi: 0.75, sunIntensity: 3.1, exposure: 0.92,
  meadow: '#5f7f34', meadowDry: '#a1924a', dirt: '#7b5a44',
  rock: '#7f6f73', rockDark: '#4f4453', snow: '#f0e9f0', snowShade: '#b9b0d6', snowLine: 140,
  pine: '#1f4a3c', pineLight: '#3f7a4a', trunk: '#4a3328', trees: 1, bridge: '#b8452f', aspen: '#f0b440', aspenDark: '#c2702a',
  peakRock: '#6b5c78', peakRockDark: '#3e3550', peakSnow: '#fbeee8', peakSnowShade: '#b8a9d4', peakSnowLine: 0.4,
  cloud: '#f3c3a6', skyCloud: '#ffd9c2',
  road: '#2c2e3b', roadLine: '#f4efe6', roadDash: '#ffc247',
  flags: ['#ff5a3c', '#ffd23f', '#3fa7ff', '#ffffff', '#7a5cff'],
  barrier: '#f2ede4', barrierStripe: '#ff5a3c',
  suit: '#ff6a3d', suitDark: '#1d2440', helmet: '#f4f4f6', glove: '#23263a', boot: '#f4f4f6',
  air: { color: '#fff1dc', count: 260, fall: 0.3, size: 0.06 },   // pollen drifting in the sun
  strata: false, grass: '#8a9a45',
  premium: true,   // textured ground, HDRI light, soft foliage, AO (see premium.js)
  premiumEnvTint: '#ffe0cc', premiumEnv: 0.8, premiumHemi: 0.35, premiumFill: 0.55,
};

const ALPINE = {
  ...SUNSET, premium: false,
  id: 'alpine', name: 'Alpine Morning', blurb: 'Fresh snow, bluebird sky',
  skyTop: '#1d5fb8', skyMid: '#5f9ae0', skyHorizon: '#d4e6f7', skyBottom: '#eef4fa',
  sun: '#fff4e2', sunDir: [0.45, 0.42, -0.78],
  fog: '#cddff0', fogNear: 160, fogFar: 1700,
  hemiSky: '#cfe4ff', hemiGround: '#2e3a4d', hemi: 0.7, sunIntensity: 2.9, exposure: 0.78,
  meadow: '#d9e4f0', meadowDry: '#c6d5e6', dirt: '#8e98a8',
  rock: '#4a5262', rockDark: '#2f3542', snow: '#e6eef8', snowShade: '#a9bdd6', snowLine: -500,
  pine: '#173b35', pineLight: '#2f5e4e', trunk: '#3b2a22', trees: 1.1,
  peakRock: '#3a414e', peakRockDark: '#21262f', peakSnow: '#e2ebf7', peakSnowShade: '#9fb3cc', peakSnowLine: 0.22,
  cloud: '#e2ecf6', skyCloud: '#ffffff',
  road: '#3a3f4b', roadLine: '#f4f6fa', roadDash: '#ffb400',
  flags: ['#1e6bff', '#ffffff', '#ff4b3a', '#2fc46b', '#ffd23f'],
  suit: '#1e6bff', suitDark: '#1b2433', helmet: '#ffffff', glove: '#1b2433', boot: '#ff4b3a',
  air: { color: '#ffffff', count: 700, fall: 2.2, size: 0.09 },   // snowfall
  grass: '#e8eef6',
};

const CANYON = {
  ...SUNSET, premium: false,
  id: 'canyon', name: 'Red Rock Canyon', blurb: 'Sandstone walls, desert heat',
  skyTop: '#2f6fbf', skyMid: '#7fb0de', skyHorizon: '#f4d9b4', skyBottom: '#f0cfa2',
  sun: '#fff0d0', sunDir: [0.55, 0.5, -0.66],
  fog: '#e9c9a0', fogNear: 140, fogFar: 1600,
  hemiSky: '#bcd4f0', hemiGround: '#6a3a26', hemi: 0.7, sunIntensity: 3.0, exposure: 0.82,
  meadow: '#b9854f', meadowDry: '#cf9a5c', dirt: '#9c6a45',
  rock: '#b0573a', rockDark: '#7a3526', snow: '#e8c99a', snowShade: '#c9a47a', snowLine: 99999,
  pine: '#3f4a26', pineLight: '#6f7a3a', trunk: '#5a3b26', trees: 0.35, bridge: '#3d6b8a',
  peakRock: '#b8603f', peakRockDark: '#7c3a28', peakSnow: '#e6b98a', peakSnowShade: '#c28a60', peakSnowLine: 0.75,
  cloud: '#efd2aa', skyCloud: '#ffffff',
  road: '#34302e', roadLine: '#f4efe6', roadDash: '#ffd23f',
  flags: ['#ffd23f', '#2fb5a8', '#ff5a3c', '#ffffff', '#3d6bd8'],
  suit: '#2fb5a8', suitDark: '#2a2433', helmet: '#f6f0e6', glove: '#2a2433', boot: '#f6f0e6',
  air: { color: '#f0c690', count: 200, fall: -0.2, size: 0.07 },  // drifting dust
  strata: true, grass: '#a8943f',
};

const COAST = {
  ...SUNSET,
  id: 'coast', name: 'Coastal Cliffs', blurb: 'Sea cliffs and sparkling surf',
  skyTop: '#2a78c8', skyMid: '#6aaee6', skyHorizon: '#d8ecf4', skyBottom: '#c4e4ee',
  sun: '#fff5e4', sunDir: [0.4, 0.5, -0.77],
  fog: '#cfe5ee', fogNear: 170, fogFar: 1800,
  hemiSky: '#d4e9ff', hemiGround: '#3c4838', hemi: 0.7, sunIntensity: 3.0, exposure: 0.8,
  meadow: '#6c9a43', meadowDry: '#a8a257', dirt: '#a08563',
  rock: '#bdb5a6', rockDark: '#857d71', snow: '#eeeae2', snowShade: '#c9c2b6', snowLine: 99999,
  pine: '#24503a', pineLight: '#4f8d57', trunk: '#4d3a2c', trees: 0.75, bridge: '#e9e3d6',
  peakRock: '#8fa0a6', peakRockDark: '#5d6d75', peakSnow: '#dfe7e9', peakSnowShade: '#aebcc2', peakSnowLine: 0.92,
  cloud: '#2d8db5', skyCloud: '#ffffff', sea: true,
  road: '#33363f', roadLine: '#f6f4ee', roadDash: '#ffc23a',
  flags: ['#ff5a3c', '#ffffff', '#1f7fd6', '#ffd23f', '#2fb58f'],
  barrier: '#f4f1ea', barrierStripe: '#1f7fd6',
  suit: '#ffcf3a', suitDark: '#1c2a3a', helmet: '#ffffff', glove: '#1c2a3a', boot: '#ff5a3c',
  air: { color: '#ffffff', count: 140, fall: -0.15, size: 0.05 },   // sea spray drifting up the cliffs
  strata: false, grass: '#86a84e', openBias: 0.1, seaSide: -1, roadWind: 0.3,
  premium: true, premiumHdri: 'coast_sky.hdr', premiumEnvTint: '#ffffff', premiumEnv: 0.85, premiumHemi: 0.4, premiumFill: 0.45,
};

export const TRACKS = [SUNSET, ALPINE, CANYON, COAST];
let pick = 'sunset';
try { pick = (location.hash || '').replace('#', '').split('-')[0] || localStorage.getItem('hoverline.track') || 'sunset'; } catch { }
export const THEME = TRACKS.find(t => t.id === pick) || SUNSET;
