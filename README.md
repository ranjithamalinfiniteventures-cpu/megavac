# MEGAVAC

A suction game that starts on a kitchen counter and ends in orbit. Same physics
the whole way — only the objects get absurd.

Single file, no build step, no image assets: every object is drawn in code.

## Run it

```bash
cd prototype && python3 -m http.server 8787
```

Then open http://localhost:8787/feel.html

Add `?dev=1` to the URL for the live tuning panel (sliders for reach, power,
mouth size and mess density, plus a progress reset).

## Modes

- **Challenge** — battery drains, run ends at zero. Pick an upgrade card after
  every room clear. Second Wind revives you once per run.
- **Mess of the Day** — a room seeded from today's UTC date, identical on every
  retry. Three attempts, best time kept, streak tracked.
- **Relaxed** — no battery, star grading only.

## Layout

- `prototype/feel.html` — the whole game
- `tools/` — asset tooling (empty; assets are procedural for now)
