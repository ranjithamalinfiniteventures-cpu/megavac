# MEGAVAC — playable build, 7 September 2026

## What changed

- Replaced the dark menu with a workshop, an explicit next job, and a five-stage route.
- Added a 25-job saved cleaning journey with five arrangements in each of the five
  existing environments. These are layout variations, not 25 separately illustrated rooms.
- Added job completion bonuses, persistent stars, next-job checkpoints, and a final
  clean reveal. Existing purchased equipment and currency remain compatible.
- Added surface divisions and a shared vacuum renderer, with glass chambers,
  motor housings, turbine fans, crusher teeth, and equipment-specific details.
- Retained battery challenges and daily play as secondary modes. Challenge-only
  upgrades are labeled and placed after cleaning upgrades.

## Bugs addressed

- Window resizing and late-room taps used to regenerate a room.
- Large movable objects and bonus coins received force but skipped movement integration.
- Battery drained during result screens and upgrade choices.
- Upgrade choices were not reset for subsequent rooms.
- Relaxed mode stalled at Orbit instead of looping.
- Daily retry visibility was reversed; attempts are now also checked at entry.
- Result opacity could become negative.
- A loaded mute preference was not reflected in the sound button.
- Completed jobs did not provide a persistent next-job checkpoint.
- Duplicate completion calls could award rewards again.
- Ad callbacks did not pause interaction or mute audio; requests and callbacks now
  have duplicate guards, and errors restore the prior state.

## Evidence and limits

The real simulation cleared all 25 jobs with the starter machine and no bought
upgrades in an automated run. Target selection is automated and does not model
human movement, attention, or enjoyment. Regression checks cover room transitions,
choices, battery pause, daily attempts, resizing, saves, and mocked ads.

The workshop, collection, and gameplay were inspected in the in-app browser at
normal desktop dimensions and a 390 × 844 phone viewport. No game runtime errors
were observed during that browser check. Phone-size layout testing does not replace
an actual Android/iOS touch, audio, and performance test.

No human retention study has been run. An hour or two of satisfying play and
next-day return are targets, not established outcomes. Do not advertise them as facts.
The next content investment should be environments with different cleaning actions
and obstacles, guided by where real players leave. Increasing job count by itself
will not establish retention.

## Submission boundary

`release/megavac-crazygames.zip` is a local upload package, not a published or
platform-approved release. It has a root `index.html` and excludes development files.

CrazyGames Basic Launch disables monetization. Full implementation requires
additional gameplay and ad review, including landing directly in gameplay; this
build still opens in the workshop. Ads were tested using callback mocks, not a live
publisher submission. Test the SDK and disabled/unfilled ads in the CrazyGames
preview before uploading for review. Poki SDK integration is not included.

Official references checked on 7 September 2026:

- [Launch requirements](https://docs.crazygames.com/requirements/intro/)
- [Gameplay start/stop](https://docs.crazygames.com/sdk/game/)
- [Advertisement requirements](https://docs.crazygames.com/requirements/ads/)

## Next release decision

Observe first-time players without explaining the interface. Record their first
room time, first upgrade, where they stop, whether they choose another room, and
whether they return the next day. Inspect especially the five-job environment
change and whether the vacuum purchases feel meaningfully different. Set retention
criteria from that pilot before claiming the one-hour goal is met.

## Complete-cleaning correction

The initial progress bar excluded heavy objects, bonus coins, bosses, and grime.
That could display 100% during an unfinished room. Completion now requires every
object to be removed plus floor coverage. Any vacuum can break heavy objects down
by holding the nozzle close; Crush upgrades improve handling. Coins no longer flee.
The floor mask used to erase dirt also measures coverage; only the final 0.3% of
floor pixels are polished automatically, after all objects are collected. Permanent
background speckles and idle suction dust no longer make a completed floor look dirty.

Regression cases include the supplied job-5 screenshot state, cleaning a heavy
object with the starter vacuum, and preventing an empty-but-dirty room from ending.
The all-job simulation now collects every object and sweeps the floor.
