# HOVERLINE

Endless downhill hoverboard racer for CrazyGames, built with Three.js.

## Play locally
```sh
npm install && npm run build
python3 -m http.server 8080   # then open http://localhost:8080/
```

## Modes
- **Race**: 9 races, 3 per track, against 5 AI rivals (Kai, Mira, Juno, Rafe, Sora). Each race has a
  countdown, a live position and time display, drafting, a finish line and a results table. Finish
  top 3 to unlock the next race. Rivals ride the same physics, picking gaps in barriers, steering
  around rocks and taking gates. Skill sets their pace, boost timing and how often they misjudge a line.
- **Free Ride**: the endless score run.

## Course set pieces
Every 420 m segment gets one set piece, in a rhythm that is rotated per track:
- **Tunnels** bored through the mountain, with concrete portals and warm lamps.
- **Arch bridges** over a gorge: steel twin arches, hangers, piers and guard rails.
- **Kicker ramps**: jump them to clear hazards and score air-time bonuses.

## Controls
| | Desktop | Mobile |
|---|---|---|
| Carve (fills Flow) | A/D, arrow keys, or mouse | hold left or right half |
| Slide (charges Flow fast) | hold Space / Shift / click | hold both halves |
| Boost | release the slide | lift a finger |

Fly through boost gates (dead centre gives a **Perfect Line** with slow-mo). Thread the
gaps in the barrier lines, dodge boulders, grab energy shards. Near misses feed Flow.

## Tech
- Art direction: golden-hour mountain pass, one palette in `src/theme.js` driving sky, fog,
  terrain, props and rider. A single warm sun against a low violet fill light gives the
  faceted terrain its form. The gradient sky dome also generates the reflections, so the
  glossy road picks up the sunset.
- Layered faceted peaks and a cloud sea (`src/atmosphere.js`); one side of the pass
  alternates between mountain wall and cliff edge.
- Three.js r186 WebGL, ACES tone mapping, shadows, MSAA, restrained bloom, boost-only speed blur.
- Premium graphics (Sunset Pass, `src/premium.js`): CC0 Poly Haven textures and HDRI lighting, texture-splatted
  terrain with parallax occlusion and triplanar cliffs, cracked asphalt, soft-shaded trees with wind and backlit
  leaves, drifting cloud shadows, screen-space ambient occlusion, contact shadows and lit particles. `?classic`
  shows the old look, `?noao` turns off ambient occlusion. See `screenshots/sunset_before_after.jpg`.
- Endless procedural mountain: streamed terrain chunks, built a few milliseconds per
  frame so they never hitch, plus instanced pines, rocks, and guard posts.
- Rider: a rigged human (Mixamo skeleton) playing a mocap idle clip, with IK layered on
  top for foot planting, crouch, carve lean, balance arms and the hand-drag slide.
- Adaptive resolution keeps the frame rate near 60 fps on weaker devices.
- CrazyGames SDK v3 hooks: loading, gameplay start/stop, rewarded revive.

Debug URL flags: `?autoplay`, `?god`, `?orbit=<angle>` (camera orbits the rider), `?low`, `?classic`, `?noao`,
`?still` (no render loop; call `window.__render()` for one frame plus renderer counts).

Asset credits: textures and HDRI from Poly Haven (CC0).

## Asset credits
- `rider.glb`: the three.js example "Soldier" character (Mixamo rig and animations).
  **Before commercial release, swap it for a character you own or license**, for example
  your own Mixamo download (Mixamo's terms allow use in games).
- Everything else (sky, mountains, clouds, terrain, road, trees, props, board, sound) is generated in code.
