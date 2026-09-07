const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CHROME = '/Applications/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';
const FFMPEG = '/Users/ranjithamal/.local/bin/ffmpeg';
const ROOT = path.resolve(__dirname, '..');
const RELEASE = path.join(ROOT, 'release');
const MUSIC = path.join(ROOT, 'prototype', 'music.mp3');

async function recordPureGameplay({ width, height, totalFrames, fps, outDir }) {
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width, height, devicePixelRatio: 1 });
  await page.goto('http://localhost:8787/feel.html');
  await page.waitForSelector('#cv');

  console.log(`Recording ${totalFrames} frames of pure gameplay (${width}x${height}) at ${fps} fps...`);

  // Initialize pure gameplay state without any overlays
  await page.evaluate(() => {
    controlsSeen = true;
    tut = 0;
    if (typeof coach !== 'undefined') coach.on = false;
    journey.job = 0;
    startJourney();
    hideOver();
    pointerSeen = true;
    px = W * 0.5;
    py = H * 0.5;
    mx = px;
    my = py;
  });

  const batchSize = 45; // 45 frames per batch (~1.5s)
  let savedCount = 0;

  for (let b = 0; b < totalFrames; b += batchSize) {
    const count = Math.min(batchSize, totalFrames - b);

    const frameDataList = await page.evaluate((frameCount, startFrame) => {
      const list = [];
      for (let f = 0; f < frameCount; f++) {
        const currentFrame = startFrame + f;

        // Switch to Kitchen location at halfway mark (frame 225 ~ 7.5s)
        if (currentFrame === 225) {
          journey.job = 5; // Kitchen 1
          startJourney();
          hideOver();
          pointerSeen = true;
          px = W * 0.5;
          py = H * 0.5;
          mx = px;
          my = py;
        }

        // Fire Turbo boost at frame 130 (~4.3s) and frame 330 (~11s)
        if (currentFrame === 130 || currentFrame === 330) {
          if (typeof fireSurge === 'function') {
            surge.t = 0;
            surge.cd = 0;
            fireSurge();
          }
        }

        // Realistic, human-like smooth vacuum steering towards debris clusters
        let target = -1, minDist = Infinity;
        for (let i = 0; i < n; i++) {
          if (alive[i] && i !== jam.i) {
            const d = (bx[i] - mx) ** 2 + (by[i] - my) ** 2;
            if (d < minDist) {
              minDist = d;
              target = i;
            }
          }
        }

        if (target >= 0) {
          const dx = bx[target] - px;
          const dy = by[target] - py;
          const dist = Math.hypot(dx, dy);
          const steerSpeed = Math.min(dist, 26);
          if (dist > 0.5) {
            px += (dx / dist) * steerSpeed;
            py += (dy / dist) * steerSpeed;
          }
        } else if (jam.i < 0 && dirtLeft > 0) {
          const k = dirt.indexOf(1);
          if (k >= 0) {
            const tx = (k % grime.width) * GS;
            const ty = Math.floor(k / grime.width) * GS;
            const dx = tx - px;
            const dy = ty - py;
            const dist = Math.hypot(dx, dy);
            const steerSpeed = Math.min(dist, 22);
            if (dist > 0.5) {
              px += (dx / dist) * steerSpeed;
              py += (dy / dist) * steerSpeed;
            }
          }
        }

        // Step physics forward by 1/30 second (two 1/60 ticks)
        step(1 / 60);
        step(1 / 60);
        render();

        list.push(cv.toDataURL('image/jpeg', 0.88));
      }
      return list;
    }, count, savedCount);

    // Save batch to disk
    for (let i = 0; i < frameDataList.length; i++) {
      savedCount++;
      const numStr = String(savedCount).padStart(4, '0');
      const base64 = frameDataList[i].replace(/^data:image\/jpeg;base64,/, '');
      fs.writeFileSync(path.join(outDir, `frame_${numStr}.jpg`), Buffer.from(base64, 'base64'));
    }
    process.stdout.write(`\rCaptured ${savedCount}/${totalFrames} frames (${Math.round((savedCount / totalFrames) * 100)}%)`);
  }

  console.log('\nClosing browser...');
  await browser.close();
}

async function main() {
  const TOTAL_FRAMES = 450; // 15 seconds at 30 fps
  const FPS = 30;

  // 1. Landscape 16:9 (1920x1080)
  const landFramesDir = path.join(RELEASE, 'frames_landscape');
  await recordPureGameplay({
    width: 1920,
    height: 1080,
    totalFrames: TOTAL_FRAMES,
    fps: FPS,
    outDir: landFramesDir
  });

  const outLand = path.join(RELEASE, 'megavac_preview_landscape_16x9.mp4');
  console.log('Encoding Landscape 16:9 video...');
  execSync(`"${FFMPEG}" -y \
    -framerate 30 -i "${landFramesDir}/frame_%04d.jpg" \
    -i "${MUSIC}" \
    -filter_complex "[1:a]afade=t=in:st=0:d=0.3,afade=t=out:st=14.2:d=0.8[a]" \
    -map 0:v -map "[a]" \
    -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p \
    -c:a aac -b:a 192k \
    -t 15.0 \
    "${outLand}"`,
    { stdio: 'inherit' }
  );

  // 2. Portrait 9:16 (1080x1920)
  const portFramesDir = path.join(RELEASE, 'frames_portrait');
  await recordPureGameplay({
    width: 1080,
    height: 1920,
    totalFrames: TOTAL_FRAMES,
    fps: FPS,
    outDir: portFramesDir
  });

  const outPort = path.join(RELEASE, 'megavac_preview_portrait_9x16.mp4');
  console.log('Encoding Portrait 9:16 video...');
  execSync(`"${FFMPEG}" -y \
    -framerate 30 -i "${portFramesDir}/frame_%04d.jpg" \
    -i "${MUSIC}" \
    -filter_complex "[1:a]afade=t=in:st=0:d=0.3,afade=t=out:st=14.2:d=0.8[a]" \
    -map 0:v -map "[a]" \
    -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p \
    -c:a aac -b:a 192k \
    -t 15.0 \
    "${outPort}"`,
    { stdio: 'inherit' }
  );

  // 3. Portrait 2:3 (800x1200)
  const outPort2x3 = path.join(RELEASE, 'megavac_preview_portrait_2x3.mp4');
  console.log('Encoding Portrait 2:3 video...');
  execSync(`"${FFMPEG}" -y -i "${outPort}" -vf "crop=1080:1620,scale=800:1200" -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -c:a copy "${outPort2x3}"`, { stdio: 'inherit' });

  // Cleanup frame temp dirs
  try { fs.rmSync(landFramesDir, { recursive: true, force: true }); } catch (e) {}
  try { fs.rmSync(portFramesDir, { recursive: true, force: true }); } catch (e) {}

  console.log('\n✅ Pure gameplay preview videos rendered successfully with ZERO lag and NO thumbnails:');
  console.log(`Landscape 16:9 (1920x1080): ${outLand}`);
  console.log(`Portrait 9:16 (1080x1920): ${outPort}`);
  console.log(`Portrait 2:3 (800x1200): ${outPort2x3}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
