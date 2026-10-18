# Smash Fiesta

A single-file Three.js + cannon.js cannon-puzzle game in the style of hyper-casual "knock everything off the island" mobile hits.

Open `index.html` in a browser (needs internet for the CDN scripts). On desktop, point at a toy and click. On touch screens, drag anywhere to move the aim ring (it follows your finger without sitting under it) and let go to fire.

- 100 levels: 8 hand-made, then seeded procedural levels that grow in size and add TNT
- 10 balls per level; stars drop as you use more shots than the level's par
- Four sky worlds that rotate every 10 levels: Peach Dawn, Blue Skies, Candy Sunset, Starry Night
- Progress and stars are saved in the browser

Size: `index.html` is about 70 KB (about 20 KB gzipped). It loads three.js r128 (~600 KB, ~150 KB gzipped) and cannon.js 0.6.2 (~130 KB, ~37 KB gzipped) from cdnjs.

## Offline build

`smash-fiesta-offline.html` (~880 KB) is the same game with three.js, cannon.js and both fonts embedded. It makes no network requests, so it plays with no internet at all.
