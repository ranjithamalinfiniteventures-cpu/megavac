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
  `race.js` (12 levels, 5 AI rivals, jump physics, gantries), `rider.js` (IK rider on Quaternius CC0 bodies,
  `assets/rider/body_male|female.glb` + `anims.glb`, built by `tools/build_rider_assets.py` from the itch.io packs;
  UE bone names mapped in `UE`), `outfit.js` (race suit baked into the body texture in UV space from bind-pose
  position, helmet/back protector/knee pads on bones, per-rider colours), `board.js`, `audio.js`, `main.js`.
  Soldier model removed (licence problem solved). Rivals: Kai m/dark, Mira f/light, Juno f/dark, Rafe m/light, Sora f/light.
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
- itch.io downloads work: POST <game>/download_url, GET that page, then POST <game>/file/<upload_id>?source=game_download&after_download_lightbox=1&as_props=1
  with only csrf_token (from the page) and the same cookie jar. Do NOT send `key` (that gives "invalid key").

Screenshots: `node shot.cjs` style harness uses `?still` (no RAF loop) + `window.__render()` which returns renderer
counts; headless swiftshader takes 1-3 s per frame. `screenshots/sunset_before_after.jpg` has the comparison.
Artifact: `python3 tools/build_artifact.py` stages `.artifact/` (page + files, .glb/.hdr as base64 .txt), then publish
`.artifact/index.html` with those files to the artifact URL above.

## Sep 29 later: animation, 4th track, UI, 5 gauntlet rounds
- Rider (`rider.js` update fx arg `{air, vy, airT, tuck, preload, crash}`): toeside/heelside carve with inside hand
  touching the road, speed tuck (hands behind back), ramp preload crouch, lip pop, air tuck + indy grab, landing
  absorb spring, wipeout flail. Board speed wobble. Rivals use the same layers. Pose test: `pose.cjs` style captures.
- New track **Coastal Cliffs** (`coast`, levels coast-1..3): `sea` ocean shader in atmosphere.js, `seaSide` keeps
  that side open (also opens bridge gorges on that side), `roadWind` 0.3 straighter road, sea-side peaks become islands.
- All 4 tracks now `premium: true` (HDRIs: sunset/alpine/canyon/coast `_sky.hdr` from Poly Haven).
- UI rebuilt in index.html: glass side sheet menu (bottom sheet on phones) with generated track art
  (`assets/ui/track_*.jpg`, made with OpenRouter `google/gemini-3.1-flash-image`, about $0.07 each), race rows with
  rival-skill pips and medals, HUD position badge / progress bar / score box / SVG speed+flow gauge, results and
  game-over cards. Fonts Barlow + Barlow Condensed (OFL) self-hosted in `assets/fonts/`.
  Picking a race on another track reloads with `sessionStorage['hoverline.go']` and starts it.
- Props (`props.js`): golden shard (1 draw call), striped checkpoint gates with stands and road chevrons.
- Perf: race draw calls 230-281 (was 335-393): merged board meshes, far rivals/rewards/roadside props hidden.
- Gauntlet = 5 rounds of capture -> harsh scorecard -> fix -> commit (see commits "gauntlet round N").
- Still weak: triangles ~1.6M on forest tracks, pops text style.

## Sep 29 latest: tree loop, blossom tree, camera
- Trees live in `src/trees.js` (pines `pinePremium`, sunset kind B = `blossomTree`, coast/canyon juniper) and `src/foliage.js`
  (procedural fuzzy blossom-card texture + `blossomMaterial`, used for sunset kind B; trunk/branches use uv `OPAQUE_UV`).
  Owner's reference: a redbud blossom tree (slender trunk, visible branch fan, airy pink umbrella of hundreds of soft clusters).
  Geometry-only puffs never looked soft (3 rounds stuck at ~1.8/3); textured alpha cards fixed it. Critic best = 2.11/3, every
  category >= 2, budgets ok ("owner would say: yes, a redbud tree"; crown a bit flat on top, pines still faceted).
- Loop tooling: `tools/tree_lab.cjs <outDir> <track>` renders hero/back/grove/far/game shots + stats (needs server on :8123).
  Maker/critic = two subagents (maker edits trees.js, critic re-renders and scores 9 categories). Lab hero shots are backlit.
- Camera raised on request (main.js: back 4.3, height 2.75, look 14 m ahead at +0.9 m): sunset frame tris now ~1.86M looking
  down the hill (was ~1.6M); thin distant forests further if frame time is a problem.
- Still weak: pines faceted/regular, alpine trees a bit dull grey in play, crown top slightly flat.

## Asset sources / credentials
- No Tripo key (skip AI 3D generation). Use CC0 libraries: Poly Haven (HDRIs, PBR textures),
  Quaternius, Kenney, ambientCG; plus designed procedural models.
- Image generation: **OpenRouter** API key stored as an environment API credential (Bearer, allowed site
  `openrouter.ai`). Use OpenRouter's image-capable models (for example the OpenAI GPT image model); pick the most
  cost-efficient one that looks good. Use it for concept art, textures, sky/menu/logo art.
- Reachable now: Poly Haven API + dl.polyhaven.org, ambientCG, kenney.nl, quaternius.com, itch.io pages, github via git clone.
  Blocked: codeload.github.com, poly.pizza. Python urllib gets 403 from Poly Haven (use curl).
