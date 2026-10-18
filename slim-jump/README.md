# Slim Jump

A Three.js runner in a single HTML file. Healthy food, dumbbells, treadmills and green gates
make you lighter; junk food, red gates and couches make you heavier. At the end of the track
you bounce on a trampoline, and the lighter you are, the higher you fly. Land on or above the
level's goal ledge to unlock the next level.

## Play locally

```sh
python3 -m http.server 8787 --directory slim-jump
```

Open http://localhost:8787/. Drag (touch or mouse) or use ← → / A D to steer. `index.html`
loads Three.js from jsDelivr, so it needs a network connection. Level, best jump and mute are
saved in localStorage.

## Offline single file

`slim-jump.html` is the whole game in one file: Three.js r158 is inlined and the page uses only
system fonts, so it makes no network requests. Open it directly from disk (double-click) or host
it anywhere. Rebuild it after changing `index.html`:

```sh
python3 slim-jump/build_standalone.py            # downloads three.min.js r158
python3 slim-jump/build_standalone.py three.min.js   # or use a local copy
```

## Tuning

The numbers are near the top of the script: `jumpHeight()` maps weight (40–160 kg) to height
(~40 m down to ~1 m), `levelGoal()`, `levelLength()` and `startWeight()` set difficulty per
level, and `ITEMS` holds the kg value of each pickup.
