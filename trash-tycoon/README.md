# Trash Tycoon 3D

A 3D trash-collection tycoon game. You drive a garbage truck around a park and pick up
trash. Machines turn the trash into goods. You carry the goods to a port and sell them.
The money pays for new machines and upgrades. Then you do it all again, bigger.

It's a single HTML file. three.js r169 is bundled next to it, so the game needs no build
step and no internet.

## Play locally

ES modules don't load from `file://`, so serve the folder:

```sh
python3 -m http.server 8790 --directory trash-tycoon
```

Then open http://localhost:8790/.

## The loop

1. **Collect.** Drive the truck over trash in the park. Its capacity is shown top-left.
2. **Recycle.** Drive into a machine's yellow **TRASH IN** zone. The trash pours into the hopper.
3. **Produce.** The machine turns trash into goods. They stack on its **PICK UP** tray.
4. **Carry.** Press **E** (or tap **GET OUT**) to leave the truck. Walk to the tray to grab goods.
5. **Sell.** Drop the goods on the port's **SELL** dock. A cargo lorry drives in, loads
   them and leaves. Your money appears on the **CASH** pad.
6. **Grow.** Stand on a pad to pay into it. Pads buy new machines and upgrades.

| Machine        | Price  | Trash per item | Sells for |
|----------------|--------|----------------|-----------|
| Brick Press    | free   | 1              | $3        |
| Bottle Factory | $150   | 1              | $7        |
| Furniture Shop | $700   | 2              | $18       |
| Gadget Lab     | $2,500 | 3              | $45       |

Each machine has a **Faster Machine** pad with 5 levels. The upgrade yard behind the
factory sells:

- **Bigger Truck:** more trash per trip
- **Truck Engine:** faster driving
- **Strong Arms:** carry more goods
- **Fast Shoes:** faster walking
- **Hire Worker:** up to 3 workers who carry goods from the machines to the port for you
- **Expand Park:** 2 levels, each adding more ground and more trash

A guided first loop (yellow arrow plus hint text) teaches the controls. Upgrade pads
appear once you've made your first sale. Progress saves to `localStorage`.

## Controls

| Action           | Keyboard          | Touch / mouse                |
|------------------|-------------------|------------------------------|
| Move / steer     | WASD or arrows    | Drag anywhere (joystick)     |
| Get in / get out | E, Space or Enter | GET OUT / DRIVE button       |
| Horn             | H                 |                              |
| Sound on/off     | M                 | ♫ button                     |
| Zoom             | Mouse wheel       |                              |

## Test

```sh
NODE_PATH=$(npm root -g) node tests/trash-tycoon.smoke.cjs
```

The test opens the game in headless Chromium and plays one full loop: fill the truck,
unload into the Brick Press, collect the bricks, sell them, and collect the cash. Then it
builds a machine, buys an upgrade, hires a worker, and checks that the save survives a
reload. It fails on any page error. Set `SHOT_DIR=/some/dir` to save screenshots.
