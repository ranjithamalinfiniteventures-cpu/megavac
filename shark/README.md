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
| **EAT** button, E or right click | Eat: lunge at the nearest prey, swallowing small prey in reach or biting big prey once. Eating only happens when you press it, and the button glows when prey is in reach. |
| **JUMP** button or Space | Big leap out of the water, about 27 units high (flop forward on land) |
| **BOOST** button, hold left click or Shift | Boost |
| W A S D / arrow keys | Steer with the keyboard |
| P / Esc | Pause |
| M | Toggle sound |
| N | Toggle music |
| Touch | Drag to steer, and use the EAT, JUMP and BOOST buttons |

## How it plays

- **Eat anything.** Every creature is food at any level. Small prey goes down in one
  bite and is sucked into your jaws when you press EAT. Big prey takes a few bites,
  and fewer as you grow. Hammerheads and orcas fight back until you outgrow them.
- **Easy steering.** Steering has a soft response curve, the shark levels out on its
  own, and aim assist drifts it toward the nearest prey ahead.
- **Blue whales** are eaten chunk by chunk: 14 bites at level 1, fewer as you grow.
- **Hunger** drains all the time, and faster while boosting. When it is empty you
  start losing health. Eating restores both.
- **Leap.** Press JUMP near the surface to launch out of the water and snatch seagulls.
- **Beach raids.** Charge through the shallows to slide up onto the sand and grab
  beachgoers. On land the shark slides and flops back to the sea by itself, so it
  never gets stranded, but it slowly dries out while it is there.
- **Combos.** Eating quickly in a row raises a score multiplier, up to x5.
- **Sound and music.** Layered sound effects (crunching bites, splashes, screams,
  whale song) are muffled underwater. An original tropical soundtrack builds with your
  combo and boosting, and turns tense when a predator is chasing you.
- The radar (top right) turns with your heading. Green is one bite, orange
  takes a few bites, red is a predator and yellow is a whale. The best score is
  saved in `localStorage`.
