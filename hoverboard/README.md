# HOVERLINE

Endless downhill hoverboard racer for CrazyGames, built with Three.js.

## Play locally
```sh
npm install && npm run build
python3 -m http.server 8080   # then open http://localhost:8080/
```

## Controls
| | Desktop | Mobile |
|---|---|---|
| Carve (fills Flow) | A/D, arrow keys, or mouse | hold left or right half |
| Slide (charges Flow fast) | hold Space / Shift / click | hold both halves |
| Boost | release the slide | lift a finger |

Fly through boost gates (dead centre gives a **Perfect Line** with slow-mo). Thread the
gaps in the barrier lines, dodge boulders, grab energy shards. Near misses feed Flow.

## Tech
- Three.js r186 WebGL, ACES tone mapping, image-based lighting from a Poly Haven HDRI,
  soft shadows, MSAA, bloom, speed blur, chromatic split, vignette and grain.
- Endless procedural mountain: streamed terrain chunks, built a few milliseconds per
  frame so they never hitch, plus instanced pines, rocks, and guard posts.
- Rider: a rigged human (Mixamo skeleton) playing a mocap idle clip, with IK layered on
  top for foot planting, crouch, carve lean, balance arms and the hand-drag slide.
- Adaptive resolution keeps the frame rate near 60 fps on weaker devices.
- CrazyGames SDK v3 hooks: loading, gameplay start/stop, rewarded revive.

Debug URL flags: `?autoplay`, `?god`, `?orbit=<angle>` (camera orbits the rider), `?sky=venice|quarry|blouberg|spruit`, `?low`.

## Asset credits
- HDRIs: `spruit_sunrise`, `venice_sunset`, `quarry_01`, `blouberg_sunrise_2` from
  [Poly Haven](https://polyhaven.com) (CC0), taken from the three.js examples.
- `grasslight-big.jpg`: opengameart.org (CC-BY 3.0), via the three.js examples.
- `rider.glb`: the three.js example "Soldier" character (Mixamo rig and animations).
  **Before commercial release, swap it for a character you own or license**, for example
  your own Mixamo download (Mixamo's terms allow use in games).
- Everything else (road, rocks, trees, board, sound) is generated in code.
