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
