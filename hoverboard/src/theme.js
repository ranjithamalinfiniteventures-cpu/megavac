// Golden-hour mountain pass. One palette drives sky, fog, terrain, props and rider
// so the whole frame reads as one place. Albedos stay below white; the sun does the
// highlights and the low violet fill keeps shaded faces coloured instead of grey.
export const THEME = {
  skyTop: '#27347a', skyMid: '#7d6fb8', skyHorizon: '#ffb98c', skyBottom: '#f7cfae',
  sun: '#ffd8a8', sunDir: [-0.32, 0.16, -0.93],
  fog: '#e8b397', fogNear: 120, fogFar: 1500,
  hemiSky: '#a9b6ff', hemiGround: '#4a3044', hemi: 0.75, sunIntensity: 3.1, exposure: 0.92,

  meadow: '#5f7f34', meadowDry: '#a1924a', dirt: '#7b5a44',
  rock: '#77697a', rockDark: '#4b4257', snow: '#f0e9f0', snowShade: '#b9b0d6',
  pine: '#1f4a3c', pineLight: '#3f7a4a', trunk: '#4a3328',

  peakRock: '#6b5c78', peakRockDark: '#3e3550', peakSnow: '#fbeee8', peakSnowShade: '#b8a9d4',
  cloud: '#f3c3a6',

  road: '#2c2e3b', roadLine: '#f4efe6', roadDash: '#ffc247', edgeGlow: '#2ef2ff',
  flags: ['#ff5a3c', '#ffd23f', '#2ef2ff', '#ffffff', '#7a5cff'],
  barrier: '#f2ede4', barrierStripe: '#ff5a3c',

  suit: '#ff6a3d', suitDark: '#1d2440', skin: '#e8b08c', helmet: '#f4f4f6', glove: '#23263a', boot: '#f4f4f6',
};
