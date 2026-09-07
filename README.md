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
- **Battery challenge** — escalating battery drain, an upgrade choice after every
  room, permanent shop upgrades, and one Second Wind per run.
- **Mess of the Day** — date-seeded mess, three attempts, best time and streak.
  This is a personal challenge, not a competitive leaderboard: viewport and gear
  affect results.
- The legacy Relaxed mode remains supported internally and loops after Orbit.

Rooms finish only after every object (including heavy items, coins, and bosses) is
removed and the floor is swept. Hold the nozzle over heavy items to break them
down with any vacuum; Crush upgrades make them faster to handle. The meter
includes floor dirt and cannot display 100% before completion. A small final
floor-edge cleanup avoids hunting isolated pixels.

The shop contains eight vacuums and seven permanent upgrade lines. Battery and
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

Creates `release/megavac-crazygames.zip` with `index.html` at its root. It excludes
backups, development screenshots, and tests. See `RELEASE_NOTES.md` for scope,
verification, and remaining launch work.
