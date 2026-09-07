const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const FFMPEG = '/Users/ranjithamal/.local/bin/ffmpeg';
const CHROME = '/Applications/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';
const ROOT = path.resolve(__dirname, '..');
const RELEASE = path.join(ROOT, 'release');
const MUSIC = path.join(ROOT, 'prototype', 'music.mp3');

async function recordGameplay({ width, height, durationSeconds, jobIndex, useTurbo }) {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--autoplay-policy=no-user-gesture-required',
      `--window-size=${width},${height}`
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width, height, devicePixelRatio: 1 });
  await page.goto('http://localhost:8787/feel.html');
  await page.waitForSelector('#cv');

  console.log(`Recording gameplay ${width}x${height} for ${durationSeconds}s (Job ${jobIndex + 1})...`);

  const base64Video = await page.evaluate(async (jobIdx, durSec, triggerTurbo) => {
    const cv = document.getElementById('cv');
    const stream = cv.captureStream(30);
    const rec = new MediaRecorder(stream, {
      mimeType: 'video/webm;codecs=vp8',
      videoBitsPerSecond: 6000000
    });
    const chunks = [];
    rec.ondataavailable = e => { if (e.data && e.data.size > 0) chunks.push(e.data); };
    rec.start();

    // Start specified job
    journey.job = jobIdx;
    startJourney();
    hideOver();
    pointerSeen = true;

    const startTime = performance.now();
    let turboFired = false;

    // AI bot steering loop
    await new Promise(resolve => {
      const interval = setInterval(() => {
        const elapsed = (performance.now() - startTime) / 1000;

        if (triggerTurbo && elapsed > 2.5 && !turboFired) {
          turboFired = true;
          if (typeof fireSurge === 'function') fireSurge();
        }

        // Steer towards nearest debris
        let target = -1, minDist = Infinity;
        for (let i = 0; i < n; i++) {
          if (alive[i] && i !== jam.i) {
            const d = (bx[i] - mx) ** 2 + (by[i] - my) ** 2;
            if (d < minDist) { minDist = d; target = i; }
          }
        }
        if (target >= 0) {
          px = bx[target];
          py = by[target];
        } else if (jam.i < 0 && dirtLeft > 0) {
          const k = dirt.indexOf(1);
          if (k >= 0) {
            px = (k % grime.width) * GS;
            py = Math.floor(k / grime.width) * GS;
          }
        }

        if (elapsed >= durSec) {
          clearInterval(interval);
          rec.stop();
        }
      }, 1000 / 60);

      rec.onstop = resolve;
    });

    const blob = new Blob(chunks, { type: 'video/webm' });
    const reader = new FileReader();
    return new Promise(resolve => {
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(blob);
    });
  }, jobIndex, durationSeconds, useTurbo);

  await browser.close();
  return Buffer.from(base64Video, 'base64');
}

async function main() {
  fs.mkdirSync(RELEASE, { recursive: true });

  // 1. Record Landscape gameplay clip (10 seconds, Job 0 with Turbo)
  const landWebm = path.join(RELEASE, 'temp_land.webm');
  const landBuf = await recordGameplay({
    width: 1920,
    height: 1080,
    durationSeconds: 10,
    jobIndex: 0,
    useTurbo: true
  });
  fs.writeFileSync(landWebm, landBuf);
  console.log(`Saved ${landWebm} (${(landBuf.length / 1024 / 1024).toFixed(2)} MB)`);

  // 2. Record Portrait gameplay clip (10 seconds, Job 0 with Turbo, 1080x1920)
  const portWebm = path.join(RELEASE, 'temp_port.webm');
  const portBuf = await recordGameplay({
    width: 1080,
    height: 1920,
    durationSeconds: 10,
    jobIndex: 0,
    useTurbo: true
  });
  fs.writeFileSync(portWebm, portBuf);
  console.log(`Saved ${portWebm} (${(portBuf.length / 1024 / 1024).toFixed(2)} MB)`);

  const coverLand = path.join(RELEASE, 'cover_landscape_1920x1080.jpg');
  const coverPort = path.join(RELEASE, 'cover_portrait_800x1200.jpg');

  // 3. Assemble Landscape Video (1920x1080, 14.5 seconds)
  const outLand = path.join(RELEASE, 'megavac_preview_landscape_16x9.mp4');
  console.log('Encoding Landscape Preview Video...');
  execSync(`"${FFMPEG}" -y \
    -loop 1 -t 2 -i "${coverLand}" \
    -i "${landWebm}" \
    -loop 1 -t 2.5 -i "${coverLand}" \
    -i "${MUSIC}" \
    -filter_complex "\
      [0:v]scale=1920:1080,fps=30[intro]; \
      [1:v]scale=1920:1080,fps=30[game]; \
      [2:v]scale=1920:1080,fps=30[outro]; \
      [intro][game][outro]concat=n=3:v=1:a=0[vraw]; \
      [vraw]fade=t=in:st=0:d=0.5,fade=t=out:st=13.8:d=0.7[v]; \
      [3:a]afade=t=in:st=0:d=0.5,afade=t=out:st=13.5:d=1.0[a] \
    " \
    -map "[v]" -map "[a]" -c:v libx264 -pix_fmt yuv420p -t 14.5 -b:v 4500k "${outLand}"`,
    { stdio: 'inherit' }
  );

  // 4. Assemble Portrait Video (1080x1920, 14.5 seconds)
  const outPort = path.join(RELEASE, 'megavac_preview_portrait_9x16.mp4');
  console.log('Encoding Portrait Preview Video...');
  execSync(`"${FFMPEG}" -y \
    -loop 1 -t 2 -i "${coverPort}" \
    -i "${portWebm}" \
    -loop 1 -t 2.5 -i "${coverPort}" \
    -i "${MUSIC}" \
    -filter_complex "\
      [0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30[intro]; \
      [1:v]scale=1080:1920,fps=30[game]; \
      [2:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30[outro]; \
      [intro][game][outro]concat=n=3:v=1:a=0[vraw]; \
      [vraw]fade=t=in:st=0:d=0.5,fade=t=out:st=13.8:d=0.7[v]; \
      [3:a]afade=t=in:st=0:d=0.5,afade=t=out:st=13.5:d=1.0[a] \
    " \
    -map "[v]" -map "[a]" -c:v libx264 -pix_fmt yuv420p -t 14.5 -b:v 4500k "${outPort}"`,
    { stdio: 'inherit' }
  );

  // Clean temp files
  try { fs.unlinkSync(landWebm); } catch (e) {}
  try { fs.unlinkSync(portWebm); } catch (e) {}

  console.log(`\n🎉 Preview videos successfully generated:`);
  console.log(`Landscape 16:9: ${outLand}`);
  console.log(`Portrait 9:16: ${outPort}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
