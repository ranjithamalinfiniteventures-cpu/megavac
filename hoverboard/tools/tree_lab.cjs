// Tree lab: repeatable renders of the game's real tree geometry + materials + lighting.
//   NODE_PATH=$(npm root -g) node tools/tree_lab.cjs <outDir> [track=sunset]
// (serve hoverboard/ on :8123 first: python3 -m http.server 8123)
// Writes: hero_A.png hero_B.png (one tree close, against sky), back_A.png (backlit), grove.png (mixed
// trees at mid distance on the roadside), far.png (far LOD at ~90 m), game.png (normal gameplay frame),
// stats.json (triangles per LOD, geometry counts, frame triangles).
const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const out = process.argv[2], track = process.argv[3] || 'sunset';
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.setDefaultTimeout(600000);
  p.on('pageerror', e => console.log('PAGEERROR', e.message));
  await p.goto(`http://localhost:8123/?autoplay&god&still&noao#${track}`);
  await p.waitForFunction(() => window.__G && window.__G.mode !== 'loading');
  await p.evaluate(() => __step(150));
  const stats = await p.evaluate(() => {
    const c = __chunks, t = g => (g.index ? g.index.count : g.attributes.position.count) / 3;
    return { A_near: t(c.treeGeo), B_near: t(c.treeGeoB), A_far: t(c.treeGeoFar), B_far: t(c.treeGeoBFar), treeMix: c.treeMix };
  });
  // game frame first, before the lab adds anything
  const frame = await p.evaluate(() => { __render(); return __render(); });
  await p.screenshot({ path: `${out}/game.png` });
  stats.frame = frame;
  // place lab trees relative to the rider: `kind` 0=A near, 1=B near, 2=A far, 3=B far
  const setup = (spec) => p.evaluate((spec) => {
    const T = __THREE, W = __world, c = __chunks, G = __G;
    if (window.__lab) { for (const m of window.__lab) { __scene.remove(m); } }
    window.__lab = [];
    const geos = [c.treeGeo, c.treeGeoB, c.treeGeoFar, c.treeGeoBFar];
    const ground = (u, s) => W.roadY(s) + W.terrainRel(u, s);
    // a flat, road-height podium so every lab shot is comparable (grass coloured)
    const s0 = G.s + 30, base = ground(30, s0);
    const pod = new T.Mesh(new T.CylinderGeometry(24, 24, 0.4, 48), new T.MeshStandardMaterial({ color: '#6f8a3c', roughness: 1 }));
    pod.position.set(W.roadX(s0) + 30, base - 0.2, -s0); pod.receiveShadow = true; __scene.add(pod); window.__lab.push(pod);
    const cx = W.roadX(s0) + 30, cz = -s0, m = new T.Matrix4(), q = new T.Quaternion(), sc = new T.Vector3(), pos = new T.Vector3();
    for (const t of spec.trees) {
      const im = new T.InstancedMesh(geos[t.kind], (t.kind === 1 || t.kind === 3) && c.treeMatB ? c.treeMatB : c.treeMat, 1); im.castShadow = true; im.receiveShadow = true; im.frustumCulled = false;
      q.setFromAxisAngle(new T.Vector3(0, 1, 0), t.rot || 0);
      m.compose(pos.set(cx + t.x, base, cz + t.z), q, sc.set(t.s || 1, t.s || 1, t.s || 1)); im.setMatrixAt(0, m);
      im.instanceColor = new T.InstancedBufferAttribute(new Float32Array([t.tone || 1, t.tone || 1, t.tone || 1]), 3);
      __scene.add(im); window.__lab.push(im);
    }
    // hide the normal chunk trees near the podium so the lab reads clean
    for (const ch of c.chunks) {   // lab shots: no terrain / road / props, just sky, peaks and the podium
      ch.trees.visible = ch.treesB.visible = !spec.clean;
      for (const k of ['terrain', 'road', 'rocks', 'poles', 'bunting', 'tufts', 'rail', 'railPosts']) ch[k].visible = !spec.clean;
    }
    document.getElementById('hud').style.display = spec.clean ? 'none' : '';
    G.camPos.set(0, 0, 0);
    __cam.position.set(cx + spec.cam[0], base + spec.cam[1], cz + spec.cam[2]); __cam.fov = spec.fov || 40; __cam.updateProjectionMatrix();
    __cam.lookAt(cx + spec.look[0], base + spec.look[1], cz + spec.look[2]); __cam.updateMatrixWorld();
    const T2 = __render(); return T2;
  }, spec);
  const shots = {
    hero_A: { trees: [{ kind: 0, x: 0, z: 0 }], cam: [8, 2.0, 12], look: [0, 4.6, 0], fov: 42, clean: true },
    hero_B: { trees: [{ kind: 1, x: 0, z: 0 }], cam: [9, 3.0, 15], look: [0, 5.2, 0], fov: 42, clean: true },
    back_A: { trees: [{ kind: 0, x: 0, z: 0 }], cam: [-4, 1.8, -12], look: [0, 4.2, 0], fov: 40, clean: true },
    grove: { trees: [
      { kind: 0, x: -6, z: -4, rot: 0.4, s: 1.1 }, { kind: 0, x: 3, z: -8, rot: 2.0, s: 0.9 }, { kind: 1, x: -1, z: 1, rot: 1.0, s: 1.0 },
      { kind: 0, x: 7, z: 2, rot: 3.1, s: 1.2 }, { kind: 1, x: -8, z: 5, rot: 5.0, s: 0.95 }, { kind: 0, x: 2, z: 7, rot: 4.2, s: 1.0 },
      { kind: 0, x: -3, z: -12, rot: 1.7, s: 1.3 }, { kind: 1, x: 9, z: -6, rot: 2.6, s: 1.1 }], cam: [0, 2.0, 30], look: [0, 4.5, 0], fov: 48, clean: true },
    far: { trees: [{ kind: 2, x: -4, z: 0 }, { kind: 3, x: 4, z: 2 }, { kind: 2, x: 0, z: -5, s: 1.2 }], cam: [0, 3.0, 90], look: [0, 4.0, 0], fov: 30, clean: true },
  };
  for (const [name, spec] of Object.entries(shots)) {
    const r = await setup(spec);
    await p.screenshot({ path: `${out}/${name}.png` });
    if (name === 'grove') stats.grove_frame = r;
  }
  fs.writeFileSync(`${out}/stats.json`, JSON.stringify(stats, null, 1));
  console.log(JSON.stringify(stats));
  await b.close();
})();
