const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME = '/Applications/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';
const ROOT = path.resolve(__dirname, '..');
const RELEASE = path.join(ROOT, 'release');

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, devicePixelRatio: 1 });
  await page.goto('http://localhost:8787/feel.html');
  await page.waitForSelector('#cv');

  // --- Screenshot 1: Workshop Action Gameplay (Job 0) ---
  console.log('Capturing Screenshot 1: Workshop Action...');
  await page.evaluate(() => {
    controlsSeen = true;
    tut = 0;
    if (typeof coach !== 'undefined') coach.on = false;
    journey.job = 0;
    startJourney();
    hideOver();
    pointerSeen = true;
    px = W * 0.55;
    py = H * 0.55;
    mx = px;
    my = py;
    // Step forward 90 frames of active suction
    for (let f = 0; f < 90; f++) {
      let target = -1, minDist = Infinity;
      for (let i = 0; i < n; i++) {
        if (alive[i] && i !== jam.i) {
          const d = (bx[i] - mx) ** 2 + (by[i] - my) ** 2;
          if (d < minDist) { minDist = d; target = i; }
        }
      }
      if (target >= 0) {
        px += (bx[target] - px) * 0.25;
        py += (by[target] - py) * 0.25;
      }
      step(1/60); step(1/60);
    }
    render();
  });
  await page.screenshot({ path: path.join(RELEASE, 'screenshot_1_action_workshop.jpg'), quality: 95 });

  // --- Screenshot 2: Kitchen Turbo Boost Mode (Job 5) ---
  console.log('Capturing Screenshot 2: Kitchen Turbo Boost...');
  await page.evaluate(() => {
    journey.job = 5;
    startJourney();
    hideOver();
    pointerSeen = true;
    px = W * 0.48;
    py = H * 0.52;
    mx = px;
    my = py;
    // Step forward and activate Turbo
    for (let f = 0; f < 60; f++) {
      let target = -1, minDist = Infinity;
      for (let i = 0; i < n; i++) {
        if (alive[i] && i !== jam.i) {
          const d = (bx[i] - mx) ** 2 + (by[i] - my) ** 2;
          if (d < minDist) { minDist = d; target = i; }
        }
      }
      if (target >= 0) {
        px += (bx[target] - px) * 0.2;
        py += (by[target] - py) * 0.2;
      }
      if (f === 45) fireSurge();
      step(1/60); step(1/60);
    }
    render();
  });
  await page.screenshot({ path: path.join(RELEASE, 'screenshot_2_turbo_kitchen.jpg'), quality: 95 });

  // --- Screenshot 3: Space Orbit Station (Job 20) ---
  console.log('Capturing Screenshot 3: Space Orbit Station...');
  await page.evaluate(() => {
    journey.job = 20;
    startJourney();
    hideOver();
    pointerSeen = true;
    px = W * 0.5;
    py = H * 0.5;
    mx = px;
    my = py;
    for (let f = 0; f < 80; f++) {
      let target = -1, minDist = Infinity;
      for (let i = 0; i < n; i++) {
        if (alive[i] && i !== jam.i) {
          const d = (bx[i] - mx) ** 2 + (by[i] - my) ** 2;
          if (d < minDist) { minDist = d; target = i; }
        }
      }
      if (target >= 0) {
        px += (bx[target] - px) * 0.22;
        py += (by[target] - py) * 0.22;
      }
      step(1/60); step(1/60);
    }
    render();
  });
  await page.screenshot({ path: path.join(RELEASE, 'screenshot_3_space_orbit.jpg'), quality: 95 });

  // --- Screenshot 4: Garage / Upgrades Screen ---
  console.log('Capturing Screenshot 4: Garage & Rig Upgrades...');
  await page.evaluate(() => {
    showOver('upg');
  });
  await page.screenshot({ path: path.join(RELEASE, 'screenshot_4_garage_upgrades.jpg'), quality: 95 });

  await browser.close();
  console.log('\nAll 4 gameplay screenshots captured in Full HD (1920x1080)!');
}

captureScreenshots().catch(console.error);
