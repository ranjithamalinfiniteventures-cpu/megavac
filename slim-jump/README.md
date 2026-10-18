# Slim Jump

A Three.js runner in a single HTML file. Healthy food, dumbbells, treadmills and green gates
make you lighter; junk food, red gates and couches make you heavier. At the end of the track
you bounce on a trampoline, and the lighter you are, the higher you fly. Land on or above the
level's goal ledge to unlock the next level.

## Play locally

```sh
python3 -m http.server 8787 --directory slim-jump
```

Open http://localhost:8787/. Drag (touch or mouse) or use ← → / A D to steer. Three.js loads
from jsDelivr as a classic script, so the first load needs a network connection. Level, best
jump and mute are saved in localStorage.

## Tuning

The numbers are near the top of the script: `jumpHeight()` maps weight (40–160 kg) to height
(~40 m down to ~1 m), `levelGoal()`, `levelLength()` and `startWeight()` set difficulty per
level, and `ITEMS` holds the kg value of each pickup.
