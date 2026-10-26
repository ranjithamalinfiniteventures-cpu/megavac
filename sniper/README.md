# Black Summit

A story-driven sniper game in a single HTML file, built with Three.js (r170, loaded from jsDelivr).
There are no image or audio assets: the terrain, sky, vegetation, characters, textures and sound are all generated in code.

## Play

**Easiest:** download `black-summit.html` and double-click it. It's one self-contained file with Three.js bundled in, so it works offline with nothing else needed.

Or run the development version (`index.html`, which loads Three.js from a CDN):

Open `index.html` in a desktop browser, or serve the folder:

```sh
python3 -m http.server 8790 --directory sniper
```

Then open http://localhost:8790/.

## Story — Operation Halcyon

Arms broker **Viktor Kael, "The Vulture"**, has stolen the HALCYON EMP warhead and is hiding in the
Kessler Observatory on top of Black Summit. You are **WRAITH**, a lone sniper on Hollow Ridge.

| # | Mission | Time | Objective |
|---|---------|------|-----------|
| 01 | First Light | Dawn | Silence the three-man forward outpost before the tower radios the summit |
| 02 | The Courier | Midday | Kill the engineer carrying the arming key as he walks from the cable car to the bunker |
| 03 | The Vulture's Nest | Sunset | 1 km shot, 400 m uphill, at Kael on the observatory deck before he reaches his helicopter |
| 04 | Stormbreak | Night blizzard | Stop the real Kael escaping with the warhead: shoot him, or the helicopter's fuel tank |

## Controls

| Input | Action |
|-------|--------|
| Mouse | Aim |
| RMB / E | Scope in / out |
| Wheel | Magnification 3×–24× |
| LMB | Fire (the bolt cycles automatically) |
| Shift | Hold breath to steady the reticle |
| ↑ / ↓ | Zero ±50 m |
| R | Reload |
| N | Thermal vision |
| Space | Skip the bullet cam |
| Esc | Pause and settings |

## Phones and tablets

Touch devices get on-screen controls automatically. Drag anywhere to aim. The buttons are FIRE, SCOPE, HOLD BREATH, zoom ＋/－, zero ▲/▼, RELOAD, THERMAL and pause. Play in landscape. Tapping DEPLOY goes fullscreen, and graphics default to Performance mode.

## Under the hood

- **Ballistics:** each round is simulated with gravity, quadratic drag and wind drift. The mil-dot reticle is first focal plane, so 1 mil is 1 m at 1 km at every zoom. After a miss, your spotter calls the correction in mils.
- **Graphics:**
  - Atmospheric scattering sky and an animated cloud dome.
  - Height-based fog, mist banks and image-based lighting from the sky.
  - Shadows that follow the aim point, so they stay sharp at 1 km through the scope.
  - Over 10k instanced trees swaying in the wind, procedural terrain shading, and a reflective lake.
  - Post-processing: bloom, god rays, lens flares, chromatic aberration, film grain and colour grading.
  - Night storms with snow and lightning, a thermal scope, and a slow-motion bullet cam.
- **Quality:** set Performance mode under Settings on slower GPUs.
- **URL shortcuts:**
  - `?mission=3` opens the briefing for mission 3.
  - `?mission=3&play` starts mission 3 directly.
