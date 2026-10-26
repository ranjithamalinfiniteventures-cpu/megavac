# Shark Frenzy

A 3D shark game built with HTML and three.js. You play as a shark off a sunny beach:
eat fish, swimmers, beachgoers, seagulls, octopus, turtles, seals, divers, dolphins
and finally hammerheads and orcas, and take bites out of blue whales.

Single HTML file, no build step, no image or model files. Everything is generated
in code: a physically based renderer with a Preetham sky, ACES tone mapping, sun
shadows and environment reflections; a Gerstner-wave water shader with fresnel
reflections, sun glint, turquoise shallows, shore foam and Snell's window from
below; animated caustics, light absorption with depth and sun shafts underwater;
kelp forests, coral, sand textures, palm trees and distant islands. Creatures are
smooth anatomical models that bend as they swim, and the great white has an
opening jaw with teeth.

The whole game is one file, `index.html`: three.js r159 (MIT License) is embedded
in it, so it needs no other files and works offline.

## Play

Open `shark/index.html` in a browser. You can also copy that one file anywhere and
open it there.

## Controls

| Input | Action |
| --- | --- |
| On-screen joystick (bottom left) | Steer: left/right turns, up/down dives and climbs |
| Mouse position | Steer (left/right turns, up/down pitches) |
| **EAT** button, E or right click | Lunge at the nearest prey ahead, with a longer reach |
| **JUMP** button or Space | Leap out of the water (flop forward on land) |
| **BOOST** button, hold left click or Shift | Boost |
| W A S D / arrow keys | Steer with the keyboard |
| P / Esc | Pause |
| M | Toggle sound |
| Touch | Drag to steer, and use the EAT, JUMP and BOOST buttons |

## How it plays

- **Eat by getting close.** Anything small enough near your jaws or body is sucked in and eaten automatically.
- **Grow by eating.** Each creature shows the level you need before you can eat it.
  Smaller creatures flee from you. Bigger ones bounce you off, and hammerheads,
  orcas and jellyfish hurt you until you outgrow them.
- **Blue whales** can be bitten at any level. Each bite rips off a chunk, and
  a whale is devoured after 14 bites.
- **Hunger** drains all the time, and faster while boosting. When it is empty you
  start losing health. Eating restores both.
- **Leap.** Press JUMP near the surface to launch out of the water and snatch seagulls.
- **Beach raids.** Charge through the shallows to slide up onto the sand and grab
  beachgoers. Press JUMP to flop along. You dry out on land, so get back to the
  water quickly.
- **Combos.** Eating quickly in a row raises a score multiplier, up to x5.
- The radar (bottom right) turns with your heading. Green is edible, red is
  dangerous, yellow is a whale and grey is too big for now. The best score is
  saved in `localStorage`.
