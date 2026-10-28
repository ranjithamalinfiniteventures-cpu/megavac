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

The whole game is one file, `index.html` (about 4 MB). It embeds three.js r159 (MIT License)
and two music tracks, so it needs no other files and works offline.

## Credits

Music: "The Builder" and "Carefree" by Kevin MacLeod (incompetech.com), licensed under
Creative Commons: By Attribution 4.0 (https://creativecommons.org/licenses/by/4.0/).
The tracks are re-encoded as 64 kbps mono MP3 and loudness-normalized. Everything
else, including all sound effects, is generated in code.

## Play

Open `shark/index.html` in a browser. You can also copy that one file anywhere and
open it there.

## Controls

| Input | Action |
| --- | --- |
| Joystick | Touch anywhere on the screen and the joystick appears under your finger; drag to steer (left/right turns, up/down dives and climbs). It returns to the bottom-left corner when you let go, where it also works with a mouse. |
| Mouse position | Steer (left/right turns, up/down pitches) |
| **EAT** button, E or right click | Eat: lunge at the nearest prey, swallowing small prey in reach or biting big prey once. Eating only happens when you press it, and the button glows when prey is in reach. |
| **JUMP** button or Space | Big leap out of the water, about 27 units high (flop forward on land) |
| **BOOST** button, hold left click or Shift | Boost |
| W A S D / arrow keys | Steer with the keyboard |
| P / Esc | Pause |
| M | Toggle sound |
| N | Toggle music |
| Touch | Drag anywhere to steer with the floating joystick; a second finger boosts; use the EAT, JUMP and BOOST buttons |

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
- **Music.** "The Builder" plays on the menu and "Carefree" during play, then they
  alternate, crossfading between tracks. The music is muffled underwater and dips
  under a heartbeat when a predator is chasing you.
- **Sound effects and ambience.** Crunchy bites with a gulp and bubbles, tearing bites on
  big prey, splashes with droplets, leaps, and screams. Bell chimes rise with your combo,
  and level-ups play a harp glissando. Above water you hear rolling surf that grows near
  the beach, waves crashing at the shore, a breeze and seagulls. Underwater there's a
  deep rumble, bubbles and distant whale song.
- **Toggles.** Use the pause, music and sound buttons under the health bars, the
  toggles on the menu and pause screen, or the M and N keys.
- The radar (top right) turns with your heading. Green is one bite, orange
  takes a few bites, red is a predator and yellow is a whale. The best score is
  saved in `localStorage`.
