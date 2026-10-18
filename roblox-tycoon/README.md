# Dropper Tycoon (Roblox)

A classic Roblox dropper tycoon. Each player gets a factory plot. Droppers make
ore that rides a conveyor through upgraders and into a furnace. You collect the
cash on the green pad and spend it on buttons that unlock bigger droppers,
upgraders and boosts. Once you own everything, rebirth to reset with
permanent bonus income.

The whole map (road, plots, belts, droppers, buttons, signs) is built from
code, so the game runs in an **empty Baseplate place** with no models to import.

## Gameplay

- **8 plots.** A joining player gets a free plot and spawns on it. The plot
  resets when they leave.
- **14 purchases** that unlock as a tree: 7 droppers, 3 upgraders (x1.5, x2,
  x3), walls, Overclock (+33% drop speed), Furnace Mk II (x1.5 sell value)
  and Rebirth.
- **Rebirth** costs $500K × (rebirths + 1) and adds +50% to all income each
  time. A first run takes about 11 minutes, and later runs are faster.
- **Saving:** cash, the uncollected bank, rebirths and purchases are saved to
  a DataStore on leave, every 60 seconds and on server shutdown. If a load
  fails, that session is never saved, so an outage can't wipe progress.
- **HUD** shows formatted cash (1.23K, 4.5M …), rebirth bonus and purchase
  messages. Drops are simulated on the server, so clients can't fling or
  duplicate them.

## Setup

### Option A: Rojo (recommended)

1. Install [Rojo](https://rojo.space) and its Roblox Studio plugin.
2. In this folder run `rojo serve`.
3. In Studio, open a new **Baseplate** place, open the Rojo plugin and click
   **Connect**.
4. Press **Play**.

To build a place file instead, run `rojo build -o DropperTycoon.rbxlx` and open it in Studio.

### Option B: copy and paste

Create these in Studio's Explorer (names must match exactly), then paste in
each file's contents:

| Studio object | Type | File |
| --- | --- | --- |
| ReplicatedStorage › `Shared` | Folder | — |
| ReplicatedStorage › Shared › `Config` | ModuleScript | `src/shared/Config.luau` |
| ReplicatedStorage › Shared › `Format` | ModuleScript | `src/shared/Format.luau` |
| ServerScriptService › `Tycoon` | Script | `src/server/init.server.luau` |
| ServerScriptService › Tycoon › `Data` | ModuleScript | `src/server/Data.luau` |
| ServerScriptService › Tycoon › `PlotBuilder` | ModuleScript | `src/server/PlotBuilder.luau` |
| ServerScriptService › Tycoon › `Tycoon` | ModuleScript | `src/server/Tycoon.luau` |
| StarterPlayer › StarterPlayerScripts › `TycoonClient` | LocalScript | `src/client/init.client.luau` |

### Before publishing

- **Game Settings › Places › Max Players:** set it to 8 or lower, or raise
  `Config.PlotCount`.
- **Game Settings › Security › Enable Studio Access to API Services:** turn
  it on if you want saving to work while testing in Studio. Saving needs the
  place to be published.

## Customizing

All the numbers live in `src/shared/Config.luau`: costs, drop values,
intervals, colours, belt speed and rebirth bonus. To add an item, add an
entry to `Config.Items`. Its button appears once everything in its
`requires` list is owned. Droppers use lanes 1–7 and upgraders lanes 1–3,
and the button grid holds 15 items. The config checks itself at startup and
errors with a clear message for duplicate ids, unknown requirements or lane
clashes.

## Development

- Format: `stylua src` (config in `stylua.toml`)
- Lint: `selene src` (config in `selene.toml`, Roblox standard library)
