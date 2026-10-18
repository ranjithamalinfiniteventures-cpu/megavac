# MEGAVAC

A procedural vacuum game: clean a kitchen, garage, street, skyline, and orbit.
Single HTML file, no build step, no image assets. Existing `megavac.v1` saves are preserved.

## Play locally

```sh
python3 -m http.server 8787 --directory prototype
```

Open http://localhost:8787/feel.html. Move the mouse, drag on touchscreens,
or use WASD / arrow keys. Escape / P pauses; M toggles sound.

## Modes

- **Cleaning journey** — 25 named jobs across five environments. Five mess patterns:
  clusters, spirals, lanes, scattered debris, and rings. No battery limit. Each job
  pays a completion bonus and records stars. Returning continues at the next job
  after the last completed job; unfinished rooms restart. After job 25, replay the journey.
- Each location ramps. The five jobs run in a fixed order rather than one keyed to
  the job number: the opener is the spiral, which is the tightest layout and starts
  under the nozzle, and clusters — the layout that throws mess into the corners —
  is held back for the fifth job, which also carries the boss. Object count rises
  across the five jobs of a location, from 0.75x to 1.15x of the location's base.
- The menu's destination map makes the route explicit: Kitchen jobs 1–5, Garage
  jobs 6–10, Street jobs 11–15, Skyline jobs 16–20, and Orbit jobs 21–25. A
  location unlocks after its previous five jobs are completed; unlocked locations
  can be replayed from the map.
- **Battery challenge** — escalating battery drain, an upgrade choice after every
  room, permanent shop upgrades, and one Second Wind per run.
- **Mess of the Day** — date-seeded mess, three attempts, best time and streak.
  This is a personal challenge, not a competitive leaderboard: viewport and gear
  affect results.
- Both of those are locked until the first job is cleared, so a new save meets the
  journey before it meets a drain bar and a death screen.
- The legacy Relaxed mode remains supported internally and loops after Orbit.

Rooms finish only after every object (including heavy items, coins, and bosses) is
removed and the floor is swept. Hold the nozzle over heavy items to break them
down with any vacuum; Crush upgrades make them faster to handle. A small final
floor-edge cleanup avoids hunting isolated pixels.

Because those are two conditions that finish at different times, the HUD shows
them apart: a DEBRIS row and a FLOOR row, each with its own bar, a tick when it
is done, and a pulse on whichever one is still open once the other closes.
Whatever is left is also marked in the room — rings on the last objects, rings
on the floor patches that still hold dirt. A sentence naming the open half
appears at the bottom for the first two rooms it happens in and then retires;
the markers stay for good. The counts are saved, so a returning player does not
get the lecture again.

The first run of a new save also gets a ghost cursor that walks from the nozzle
to a nearby object, on a loop, until the player has moved about 190 pixels of
their own. The nozzle follows the pointer with nothing to click, which a still
screen cannot say.

The **Shop** is for buying the eight vacuums. The **Garage** is for the seven
permanent upgrade lines. Battery and
Efficiency apply only to the battery challenge. The same vacuum renderer powers
collection previews and the playable machine.

Add `?dev=1` for tuning, R to refill, and D for debug drawing. Refill shortcuts
are disabled in normal play. Progress is saved locally on room completion,
purchases, page hiding, and exit. Clearing browser data removes progress.

## Verify

```sh
node tests/game.test.cjs
```

The simulation test plays all 25 jobs using actual suction at base stats, then
checks progression, save/load, resize, battery choice screens, daily retries,
and mocked ad lifecycle callbacks. It stubs rendering and audio; browser/device
QA is still necessary. The suite takes a few minutes.

## Package

```sh
python3 tools/package_game.py
```

Creates `release/megavac-crazygames.zip` with `index.html`, `music.m4a`, and `music.mp3`
at its root. It excludes backups, development previews, and tests. See `RELEASE_NOTES.md`
for scope, verification, and remaining launch work.

---

# SPIDER CITY

A separate low-poly open-world web-slinger game in `spider-city/`: swing between
skyscrapers, crawl up walls, jack cars from traffic and fly a plane from the airfield.
Three.js (loaded from unpkg via an import map), no build step, no image assets —
every model, texture and sound is generated in code.

```sh
python3 -m http.server 8788 --directory spider-city
```

Open http://localhost:8788/ and click **PLAY** (keyboard and mouse; the mouse is
captured for camera look, Esc releases it and pauses).

On phones and tablets touch controls appear automatically: drag on the left half for
a floating joystick (push it all the way to sprint), drag on the right half to look,
and use the context buttons (JUMP/WEB — hold in the air to swing, ZIP, GUN/FIRE,
DRIVE/FLY/EXIT, GAS/BRAKE/DRIFT in cars, THR +/− and FIRE in the plane, CALL for a ride). Phones start on the lighter graphics setting and
landscape works best.

- **On foot** — WASD, Shift sprint, Space jump. Run into any building to climb it;
  climbing over the top vaults you onto the roof.
- **Web** — in the air hold Space or the left mouse button to swing, release to fling
  (fast releases flip). E / right mouse zips to whatever the crosshair points at.
- **Cars** — F next to any car (parked or in traffic) to take it. W/S gas and brake,
  A/D steer, Space handbrake drift. Traffic follows lanes and turns at junctions;
  pedestrians walk the sidewalks and dive out of the way.
- **Plane** — at the airfield east of the city. Shift / X throttle (W also throttles
  up on the runway), S pulls up, W dives, A/D roll, Q/E rudder. F bails out mid-air.
  Crash it and it respawns on the runway.
- **Call a ride** — 1 delivers a car next to you, 2 drops the plane in mid-air with you
  in it, 3 delivers a tank (touch: the CALL button at the top).
- **Tank** — W/S drive, A/D turn the hull, the turret follows the camera, click or Space
  fires explosive shells. It flattens cars in its way.
- **Weapons** — Q switches the hero to a blaster (click to fire at the crosshair; Space
  still swings). The plane fires homing rockets (click / Space). Cars can be shot up
  and explode.
- **Gangs** — armed gang members (red dots on the minimap) guard street corners and
  rooftops and shoot back. Health regenerates when you stay out of fire; at zero you
  respawn on the nearest street.
- **Missions** — glowing beams around the city (coloured dots on the minimap) start
  side missions for cash: ring races (blue), gang hits (red) and smash sprees (orange).
  Cash also comes from tokens, gang takedowns and wrecked cars.
- **Slow motion** — B (touch: SLOW) slows the world to a third for 6 seconds.
- **Goal** — collect the 40 golden tokens on rooftops (beams of light mark them).
- T skips time of day (night brings lit windows, street lamps and headlights),
  G toggles graphics quality (it also drops automatically on slow machines), M mutes,
  R returns you to the nearest street.

Rendering: instanced buildings with a procedural window shader (glass reflects a
sky-generated environment map, windows light up at night), soft shadows following the
player, ACES tone mapping, MSAA and bloom. The hero is a primitive-built rig animated
procedurally (run, sprint, swing, wall crawl, flips, superhero landing).

Code: `js/world.js` (city generation, collision, sky, day/night), `js/hero.js`
(rig, animation, traversal physics), `js/vehicles.js` (cars, traffic AI, plane,
pedestrians), `js/combat.js` (weapons, explosions, gangs), `js/missions.js` (side missions), `js/touch.js` (touch controls),
`js/fx.js` (particles, WebAudio), `js/main.js` (loop, camera, input, HUD).

Smoke test (headless Chromium via Playwright, needs network for three.js):

```sh
node tests/spider-city.smoke.mjs
```
