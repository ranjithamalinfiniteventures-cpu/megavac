# MEGAVAC — playable build, 7 September 2026

## What changed

- Replaced the dark menu with a workshop, an explicit next job, and a five-stage route.
- Added a 25-job saved cleaning journey with five arrangements in each of the five
  existing environments. These are layout variations, not 25 separately illustrated rooms.
- Added job completion bonuses, persistent stars, next-job checkpoints, and a final
  clean reveal. Existing purchased equipment and currency remain compatible.
- Added surface divisions and a shared vacuum renderer, with glass chambers,
  motor housings, turbine fans, crusher teeth, and equipment-specific details.
- Rebuilt the main menu around illustrated mode cards, a five-location destination
  map, and dedicated Shop/Garage actions. Shop now opens vacuum purchases; Garage
  now opens permanent upgrades.
- Gave each location a difficulty ramp. The five jobs now run in a designed order
  instead of one keyed to the job number: a location opens on the spiral, the
  tightest layout and the only one that starts under the nozzle, and closes on
  clusters, the widest. Object count rises across the five jobs, 0.75x to 1.15x.
- Added a third tutorial beat that explains breaking down heavy objects, shown the
  first time one is inside the nozzle's reach.
- Added Turbo: a 6 second boost to reach, suction and nozzle width on a 10 second
  cooldown, on a button, Space or Shift. It is deliberately free for now. Setting
  `BOOST.adGated` routes activation through a rewarded ad instead, which is the
  Full Launch shape; it stays off until monetization is actually available.
- Removed the last external asset. JetBrains Mono is now embedded as a base64
  woff2 (latin subset, variable 100-800, 40 KB) instead of loaded from Google
  Fonts, so a blocked or slow font request can no longer change the HUD metric
  mid-review. The CrazyGames SDK is the only remaining outbound request.
- Added the SDK loading events. `loadingStart` fires when the SDK script is
  injected and `loadingStop` once the menu is up; because the SDK script is async
  and usually lands after the game, each half is recorded and emitted once, in
  order, whenever the SDK appears.
- Rebuilt the job-done screen around the reward. The location illustration and
  the job name head the card, the star rating is a row of three medals instead
  of a line of text, the bonus, time and wallet are read as tiles with the
  bonus largest, and a five-segment bar shows how many jobs are left before the
  next location opens. The primary button names the job it starts. The old
  Upgrade button duplicated the vacuum row directly above it, so it is now
  Replay this job, which the verdict's time reference gives a use for.
- Added a verdict to the job-done card: a graded badge (Immaculate, Spotless,
  Sharp, Steady, Thorough, Patient) with the fact behind it — seconds under or
  off the location's three-star time, or, when the run beat the player's own
  previous time on that job, by how much. The game has no server and no other
  players' times, so nothing here is a percentile against other people; both
  benchmarks are real numbers the save already holds or the design defines.
  Per-job best times are now persisted (`journey.times`); older saves load with
  none and simply get the three-star comparison until they set one.
- Split the clean meter into DEBRIS and FLOOR. A room needs both — every object
  gone and the floor swept — and one averaged percentage hid which half was
  still open, so a player standing in a room that looked finished read the game
  as stuck. Each half now has its own bar and a tick when it closes, and the
  half that is still open pulses once the other one is done.
- Marked what is actually left. Remaining floor dirt is now ringed as patches,
  sized to how much dirt each holds, instead of a single ring on the first dirty
  pixel in scan order — which was almost never where the mess was. A sentence
  naming the open half runs at the bottom for the first two rooms it happens in
  and then retires; the rings are wordless and stay for good. The count is saved.
- Added a first-run ghost cursor. On a new save the opening job draws a pointer
  that walks from the nozzle to a nearby object on a loop, with the route dashed
  behind it and the target ringed, and stands down once the player has moved
  about 190 pixels of their own. Nothing on a still screen says that the nozzle
  simply follows the pointer with no button to press.
- Reworded the first two tutorial beats to name the control and both exit
  conditions, with short variants that fit a phone, and lifted the bottom
  banners clear of the Turbo button on narrow screens.
- Retained battery challenges and daily play as secondary modes. Challenge-only
  upgrades are labeled and placed after cleaning upgrades. Both are now locked
  until the first job is cleared.
- Integrated Kevin MacLeod's "Carefree" (CC-BY 4.0) background music, packaged with
  high-efficiency AAC (`music.m4a`) and universal MP3 fallback (`music.mp3`). BGM loops
  seamlessly, pauses on gameplay pause, background tabs, CrazyGames video ads, and game-over
  screens, and is attributed in the in-game Info panel.
- Added independent **Music** (🎵) and **Sound** (🔊) toggles accessible anytime:
  floating at the top-right corner across all screens (Main Menu, Gameplay, Shop, Garage, Results),
  via an explicit toggle in the Pause Menu (`🎵 Music: Playing/Disabled`), and via keyboard
  shortcut <kbd>B</kbd> (music) and <kbd>M</kbd> (sound). Mute preferences persist in `localStorage`.

## Bugs addressed

- Window resizing and late-room taps used to regenerate a room.
- The journey's star chime played 1.9 seconds before the card that shows the
  stars, over the canvas reveal instead of the medals. The journey now plays it
  as the card opens, with each medal's pop timed to its own note; the other
  modes, whose stars are in the canvas reveal, still play it there.
- The overlay's stat strip kept the previous screen's numbers. Quitting a paused
  run left that run's room, clean percentage and takings under the main menu,
  and the strip's divider stayed visible on the Garage, Shop and How to play
  screens, which set it to hidden but were never given a rule that hides it.
- Large movable objects and bonus coins received force but skipped movement integration.
- Battery drained during result screens and upgrade choices.
- Upgrade choices were not reset for subsequent rooms.
- Relaxed mode stalled at Orbit instead of looping.
- Daily retry visibility was reversed; attempts are now also checked at entry.
- Result opacity could become negative.
- A loaded mute preference was not reflected in the sound button.
- Completed jobs did not provide a persistent next-job checkpoint.
- The journey tutorial told players to "clear the room to go deeper", which is
  battery-challenge wording; it now names the job.
- Duplicate completion calls could award rewards again.
- Ad callbacks did not pause interaction or mute audio; requests and callbacks now
  have duplicate guards, and errors restore the prior state.
- A held P or Escape strobed the pause menu, and a held M toggled the mute
  preference and wrote a save on every key repeat. Key repeats are now ignored.
- The battery result screen reported the room before the one the player died in,
  so a first-room death read "Room reached 0", and its "best" figure counted from
  a different basis. Both now name the room reached.
- Centred play chrome could run under the sound and pause buttons on narrow
  screens once the wallet grew long. Job names and wallets now shorten to fit.
- The "% clean" label overlapped its own progress bar by a few pixels.
- An advertisement that never reported back left the game paused with input
  disabled and no way out but a reload. Requests now give up after 60 seconds.

## Evidence and limits

The real simulation cleared all 25 jobs with the starter machine and no bought
upgrades in an automated run. Target selection is automated and does not model
human movement, attention, or enjoyment. Regression checks cover room transitions,
choices, battery pause, daily attempts, resizing, saves, and mocked ads.

The workshop, collection, and gameplay were inspected in the in-app browser at
normal desktop dimensions and a 390 × 844 phone viewport. No game runtime errors
were observed during that browser check. Phone-size layout testing does not replace
an actual Android/iOS touch, audio, and performance test.

The split meter, the floor-patch markers, the retiring sentence and the first-run
ghost cursor were each checked in the browser in both stuck states — objects gone
with dirt left, and floor swept with objects left — at desktop and phone widths.
The ghost cursor was confirmed to stand down after real pointer movement. It has
only been seen on a mouse: the touch glyph and its tap ripple are drawn from the
same code path but have not been on a phone.

No human retention study has been run. An hour or two of satisfying play and
next-day return are targets, not established outcomes. Do not advertise them as facts.
The next content investment should be environments with different cleaning actions
and obstacles, guided by where real players leave. Increasing job count by itself
will not establish retention.

## Submission boundary

`release/megavac-crazygames.zip` is a local upload package, not a published or
platform-approved release. It has a root `index.html` and excludes development files.

CrazyGames Basic Launch disables monetization: the requirements page states the
SDK is optional at that stage and that "CrazyGames monetization is disabled" with
"No external ads". The rewarded and midgame code in this build therefore earns
nothing until a Full Launch invite, and Turbo stays free until then. Full
implementation requires additional gameplay and ad review, including landing
directly in gameplay; this build still opens in the workshop. Ads were tested
using callback mocks, not a live publisher submission. Test the SDK and
disabled/unfilled ads in the CrazyGames preview before uploading for review.
Poki SDK integration is not included.

The loading events are documented as optional, and unsupported for Unity and
Godot. They are implemented here anyway because the portal measures the initial
download between them.

The requirements page does not state a clones or reskins policy. Any claim about
how originality is screened is second hand and is not sourced from these docs.

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
