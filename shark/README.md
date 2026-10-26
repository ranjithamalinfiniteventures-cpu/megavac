# Shark Frenzy

A 3D shark game built with HTML and three.js. You play as a shark off a sunny beach:
eat fish, swimmers, beachgoers, seagulls, octopus, turtles, seals, divers, dolphins
and finally hammerheads and orcas, and take bites out of blue whales.

Single HTML file, no build step, no image assets. Every model is built from
three.js primitives. `three.min.js` (r159) is vendored next to the page so it works
offline. If it is missing, the page loads the same version from jsDelivr.

## Play

```sh
python3 -m http.server 8790 --directory shark
```

Open http://localhost:8790/. Opening `shark/index.html` directly from disk works too.

## Controls

| Input | Action |
| --- | --- |
| Mouse position | Steer (left/right turns, up/down pitches) |
| Hold click, Space or Shift | Boost |
| W A S D / arrow keys | Steer with the keyboard |
| P / Esc | Pause |
| M | Toggle sound |
| Touch | Drag to steer, BOOST button or a second finger to boost |

## How it plays

- **Grow by eating.** Each creature shows the level you need before you can eat it.
  Smaller creatures flee from you. Bigger ones bounce you off, and hammerheads,
  orcas and jellyfish hurt you until you outgrow them.
- **Blue whales** can be bitten at any level. Each bite rips off a chunk, and
  a whale is devoured after 14 bites.
- **Hunger** drains all the time, and faster while boosting. When it is empty you
  start losing health. Eating restores both.
- **Leap.** Boost upward to launch out of the water and snatch seagulls.
- **Beach raids.** Charge through the shallows to slide up onto the sand and grab
  beachgoers. Hold boost to flop along. You dry out on land, so get back to the
  water quickly.
- **Combos.** Eating quickly in a row raises a score multiplier, up to x5.
- The radar (bottom right) turns with your heading. Green is edible, red is
  dangerous, yellow is a whale and grey is too big for now. The best score is
  saved in `localStorage`.
