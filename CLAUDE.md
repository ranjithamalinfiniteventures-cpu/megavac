# Project memory for Claude sessions

## Who / what
The owner is building **HOVERLINE**, a Three.js downhill hoverboard **racing** game for **CrazyGames**,
in `hoverboard/`. The older MEGAVAC vacuum game lives in `prototype/` and `release/`; leave it alone.
Working branch: `claude/racing-game-research-v5hz87`; draft PR: megavac#1.
Research notes: `racing-research/RESEARCH.md`.

## Owner's preferences (important)
- Wants the **best-looking** game possible, realistic and premium. Has rejected the graphics several times.
- **No neon glows.** Warm solid colours only (removed cyan edges, underglow, emissive gates).
- **Not a dark theme** (the Halloween reference was for technique, not mood).
- Vehicle: **hoverboard** only (no cars or bikes). Rider must look like a **real human with real animation** and must not lag.
- Must be a **race** with opponents and levels, plus varied track design (tunnels, bridges, jumps).
- Visual reference: owner's own game `icebound-rivals` (Icebound Rivals / "Ice Rush"). It has a coherent stylized palette, one
  strong sun with a low fill, a gradient sky, faceted peaks, and dense trackside props.
- Communicate simply; the owner is not deeply technical. Show screenshots of results.

## Current state of HOVERLINE (hoverboard/)
- Build: `cd hoverboard && npm install && npm run build` (esbuild -> dist/game.js). Serve the folder statically.
- Modules: `theme.js` (3 tracks: sunset / alpine / canyon palettes), `world.js` (track math, terrain,
  set pieces: tunnel/bridge/jump pattern per 420 m segment), `chunks.js` (streamed terrain, trees, props,
  rails), `features.js` (tunnel/bridge/ramp meshes), `atmosphere.js` (gradient sky, peaks, clouds),
  `race.js` (9 levels, 5 AI rivals, jump physics, gantries), `rider.js` (rigged human `assets/rider.glb`
  = three.js "Soldier" Mixamo model, mocap idle + IK, recoloured per bone. **Must be replaced with an owned or licensed
  character before release**), `board.js`, `audio.js`, `main.js` (game loop, HUD, menus).
- Debug URL flags: `?autoplay`, `?race`, `?god`, `?orbit=<angle>`, `#<track>` or `#<level-id>`, `?low`.
  `window.__step(n)` advances the sim for screenshots (headless swiftshader runs at ~1 fps).
- Playable artifact: https://claude.ai/artifact/QX5T4vUDvhCEb4yPkUX3Jz. Republish by building a copy of
  index.html without doctype/head/body and the CrazyGames SDK tag, with a fetch shim that serves `.glb`
  as base64 `.txt` (artifacts don't serve .glb). See git history for how it was done.

## Premium graphics pass: Sunset Pass done (Sep 29), roll out next
Sources: threejs-game-skills `threejs-aaa-graphics-builder` (visual scorecard, recipes, shader cookbook; clone with
`git clone https://github.com/majidmanzarpour/threejs-game-skills`, codeload tarballs are blocked) and the Simon
(@iced_coffee_dev) Halloween breakdown. Rule: *authored forms first, then materials, then lighting, then effects*.
Premium = every scorecard category >= 2 and average >= 2.3.

What exists now (`src/premium.js`, `src/aopass.js`; switched on by `premium: true` in a theme, `?classic` turns it off):
- CC0 Poly Haven assets in `assets/tex/`: ground texture array strip (grass `rocky_terrain_02`, dirt `forest_ground_04`,
  cliff `cliff_side`, pale rock `rock_boulder_dry`; albedo + normal strips, heights packed in RGBA png), asphalt_02
  (diff/nor/rough), HDRI `belfast_sunset_puresky` (1k, rotated so its sun matches ours, sun clipped).
- Terrain: `splat` vertex attribute (weights from `terrainSplat` in world.js), height-aware blending, texture detail
  modulates the palette vertex colours (keeps the stylized palette), triplanar cliffs, parallax occlusion on grass/dirt
  near the camera (desktop only), analytic smooth normals.
- Every lit material can be patched with `patchLit` (drifting cloud shadows + key light falling off away from the rider).
  `rockMaterial` = triplanar rock (tunnel walls, boulders, concrete portal). `patchFoliage` = wind + backlit leaves.
- Trees: `pinePremium` (ridged fronds, vertex AO), aspens with rounded normals and per-vertex tone. LOD: near/far geometry,
  far forests thinned, only chunks near the rider cast shadows, chunks behind the camera hidden.
- Tunnel portals are extruded concrete facades (old torus removed). Contact shadows under all boards.
- Post: half-res SAO ambient occlusion with depth-aware blur (desktop only, `?noao`), bloom threshold 1.6 (no glow),
  particles are premultiplied with add/alpha mix; dust and thruster smoke are lit as spheres.
- Scorecard (my assessment): before avg 1.7 -> after about 2.15. Still below 2 on rewards/interactables (gates and
  shards untouched). Rider is still the placeholder Soldier model. Next: rewards, then rider, then Alpine + Canyon
  (add `premium: true` and tune `premiumEnvTint/premiumEnv/premiumHemi/premiumFill` per theme).
- Budget (desktop, swiftshader counts): calls 233-270 (was 304), triangles 1.5-1.7M (was 2.8M, still over the 750k guide),
  41 textures, about 72 programs. Mobile (`?low`): no AO/POM, trees thinned to 55%.
- Not done: Quaternius models (itch.io download API refuses from this sandbox with "invalid key"), outline highlight.

Screenshots: `node shot.cjs` style harness uses `?still` (no RAF loop) + `window.__render()` which returns renderer
counts; headless swiftshader takes 1-3 s per frame. `screenshots/sunset_before_after.jpg` has the comparison.
Artifact: `python3 tools/build_artifact.py` stages `.artifact/` (page + files, .glb/.hdr as base64 .txt), then publish
`.artifact/index.html` with those files to the artifact URL above.

## Asset sources / credentials
- No Tripo key (skip AI 3D generation). Use CC0 libraries: Poly Haven (HDRIs, PBR textures),
  Quaternius, Kenney, ambientCG; plus designed procedural models.
- Image generation: **OpenRouter** API key stored as an environment API credential (Bearer, allowed site
  `openrouter.ai`). Use OpenRouter's image-capable models (for example the OpenAI GPT image model); pick the most
  cost-efficient one that looks good. Use it for concept art, textures, sky/menu/logo art.
- Reachable now: Poly Haven API + dl.polyhaven.org, ambientCG, kenney.nl, quaternius.com, itch.io pages, github via git clone.
  Blocked: codeload.github.com, poly.pizza. Python urllib gets 403 from Poly Haven (use curl).
