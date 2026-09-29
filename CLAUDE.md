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

## Agreed next step: premium graphics pass
The owner asked to adopt professional techniques before building more. Sources studied:
1. **threejs-game-skills** (github.com/majidmanzarpour/threejs-game-skills). Install/read
   `skills/threejs-aaa-graphics-builder` (visual scorecard, authoring recipes, technical art, shader
   cookbook) and `threejs-qa-release`. Rule: *authored forms first, then materials, then lighting, then effects*;
   score 10 categories 0-3 on active-play screenshots; premium means every category is at least 2 and the average is at least 2.3.
2. **Simon (@iced_coffee_dev) Halloween scene breakdown**, whose techniques to apply:
   - One strong directional light + a **Poly Haven HDRI** for image-based lighting; the key light falls off softly
     away from the hero; a soft moving cloud-shadow map on the ground.
   - **Quaternius** CC0 models (trees and props) with **rounded/softened normals** for soft foliage shading.
   - Ground = **texture splatting** (RGBA mask blending a texture array) + **parallax occlusion mapping**.
   - Particles lit with **sphere-derived normals**; a combined add/alpha blend for fire and smoke.
   - Post: **SSAO**, custom **contact shadows**, a controlled custom **bloom**, a depth-aware outline highlight.
   - His point: you need the right vocabulary to direct AI.
Plan: apply all of this to **Sunset Pass first** (one representative slice), score before/after with
screenshots, then roll out to Alpine and Canyon.

## Asset sources / credentials
- No Tripo key (skip AI 3D generation). Use CC0 libraries: Poly Haven (HDRIs, PBR textures),
  Quaternius, Kenney, ambientCG; plus designed procedural models.
- Image generation: **OpenRouter** API key stored as an environment API credential (Bearer, allowed site
  `openrouter.ai`). Use OpenRouter's image-capable models (for example the OpenAI GPT image model); pick the most
  cost-efficient one that looks good. Use it for concept art, textures, sky/menu/logo art.
- Earlier sessions had polyhaven/openai/x.com blocked by the network policy; the owner has since widened it.
  Check reachability first.
