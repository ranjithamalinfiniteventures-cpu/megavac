# SKYHAVEN — merge-to-build village

A cozy merge game set on a floating island at golden hour. You summon building
materials, merge matching pairs into better ones, and grow from a bundle of twigs
to a Sky Castle. Every new building you discover also appears on the distant sky
islands, so your village visibly grows behind the board.

Single HTML file, no build step, no image assets: every sprite, the sky, the
island and the sounds are generated in code.

## How it differs from the usual "planks on a grass field" merge game

| Typical reference                | Skyhaven                                                     |
| -------------------------------- | ------------------------------------------------------------ |
| Square grid on a flat field      | **Hex** tiles on a floating island with a waterfall          |
| Daytime, flat green background   | **Sunset sky**: stars, sun glow, drifting clouds, birds      |
| Same material all the way up     | Story chain: twigs → workbench → tent → hut → … → castle → airship → citadel     |
| Single "upgrade" button          | Upgrade **sheet** with five upgrades that change how you play |
| Progress bar only                | **Village panorama**: discoveries appear on distant islands  |
| Instant spawn                    | Items **drop from the sky** with squash and stretch          |
| —                                | Lit windows, chimney smoke and windmill sails that turn      |

## Core loop

1. **Summon**: uses one charge, drops a starter item (sometimes one tier higher) on a free tile.
   Charges refill over time.
2. **Merge**: drag an item onto one of the same tier to make the next tier.
   Dropping onto a different item swaps them. Dropping onto an empty tile moves it.
3. **Earn**: every item makes coins. Each tier earns about 2.25x the one below it,
   so merging always increases income.
4. **Spend**: buy upgrades or **Expand** the island one hex at a time
   (7 tiles → 37 tiles, three rings).
5. **Discover**: the first time you make a tier, you get a blueprint card, a coin
   reward and a permanent +5% village income bonus, and the building appears in
   the sky panorama.

## The build chain (18 tiers)

| # | Item        | Income/s |
|---|-------------|---------:|
| 1 | Twig Bundle | 1        |
| 2 | Log         | 2        |
| 3 | Plank Stack | 5        |
| 4 | Workbench   | 11       |
| 5 | Canvas Tent | 26       |
| 6 | Round Hut   | 58       |
| 7 | Cottage     | 130      |
| 8 | Townhouse   | 292      |
| 9 | Windmill    | 657      |
| 10| Manor       | 1.5K     |
| 11| Clocktower  | 3.3K     |
| 12| Sky Castle  | 7.5K     |
| 13| Lighthouse  | 17K      |
| 14| Airship     | 38K      |
| 15| Observatory | 85K      |
| 16| Royal Palace| 192K     |
| 17| Crystal Spire | 431K   |
| 18| Celestial Citadel | 970K |

The village rank follows your best tier: Clearing → Campsite → Hamlet → Village → Town → Borough → Sky City → Cloud Port → Royal Isles → Celestial Realm.

Summons get better as you progress: once you discover the Townhouse (tier 8) they bring Logs, and once you discover the Lighthouse (tier 13) they bring Plank Stacks. This keeps the longer chain from turning into a grind.

Live touches on the new tiers: the lighthouse beam sweeps, and the crystal spire and the citadel glow.

## Upgrades

- **Golden Touch**: +20% income per level
- **Bigger Cart**: +1 summon charge capacity
- **Quick Hands**: charges refill 12% faster
- **Lucky Crates**: +6% chance a summon arrives one tier higher
- **Helper Sprite**: summons for you automatically, faster with each level

## Quality of life

- **Recycle bin** appears while dragging, and sells the item for a few coins.
- **Idle hint**: after a few seconds without input, a mergeable pair pulses.
- **Blueprint book**: all 18 tiers, with undiscovered ones shown as silhouettes.
- **Offline earnings**: 50% of income for up to 4 hours away.
- Autosaves to `localStorage` (`skyhaven.v1`). Sound toggle. Haptics on merge.

## Play locally

```sh
python3 -m http.server 8787 --directory skyhaven
```

Open http://localhost:8787/.

## Next steps (ideas)

- Seasonal island skins (snow, cherry blossom)
- Quests ("Build 3 Cottages"), daily chest
- Special items: a rainbow wildcard that merges with anything, a bomb that clears a tile
- Village screen where discovered buildings can be placed freely
