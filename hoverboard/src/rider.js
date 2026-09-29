// Rigged human rider: a mocap idle clip for natural micro-motion (breathing, weight
// shifts), with IK layered on top to plant the feet on the deck, crouch, lean into
// carves and reach down during slides.
import * as THREE from 'three';
import { THEME } from './theme.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';

const _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const _q1 = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _q3 = new THREE.Quaternion();
const UP = new THREE.Vector3(0, 1, 0);
const NOFX = {};

// Rotate `bone` (minimal rotation) so the direction to `child` points at `target` (world space).
function aim(bone, child, target, weight = 1) {
  bone.updateWorldMatrix(true, false);
  child.updateWorldMatrix(false, false);
  const b = _v1.setFromMatrixPosition(bone.matrixWorld);
  const cur = _v2.setFromMatrixPosition(child.matrixWorld).sub(b).normalize();
  const want = _v3.copy(target).sub(b).normalize();
  _q1.setFromUnitVectors(cur, want);
  if (weight < 1) _q1.slerp(_q3.identity(), 1 - weight);
  bone.getWorldQuaternion(_q2).premultiply(_q1);
  bone.parent.getWorldQuaternion(_q3).invert();
  bone.quaternion.copy(_q3.multiply(_q2));
  bone.updateMatrixWorld(true);
}
function rotateWorld(bone, axis, angle) {
  _q1.setFromAxisAngle(axis, angle);
  bone.getWorldQuaternion(_q2).premultiply(_q1);
  bone.parent.getWorldQuaternion(_q3).invert();
  bone.quaternion.copy(_q3.multiply(_q2));
  bone.updateMatrixWorld(true);
}
// Two-bone IK: knee/elbow position from root, target, bone lengths and a pole direction.
function twoBone(root, target, a, b, pole, out) {
  const d = _v1.copy(target).sub(root);
  let len = d.length();
  len = Math.min(len, (a + b) * 0.999);
  d.normalize();
  const x = (a * a - b * b + len * len) / (2 * len);
  const h = Math.sqrt(Math.max(0, a * a - x * x));
  const p = _v2.copy(pole).addScaledVector(d, -pole.dot(d)).normalize();
  return out.copy(root).addScaledVector(d, x).addScaledVector(p, h);
}

// Repaint the rig in the game's palette: pick each vertex's colour from the bone that
// drives it most, and keep the original texture only as light/dark panel detail.
function restyle(mesh, K = THEME) {
  const bones = mesh.skeleton.bones;
  const pick = name => {
    if (/Visor/i.test(mesh.name)) return K.glove;
    if (/Head/.test(name)) return K.helmet;
    if (/Neck/.test(name)) return K.suitDark;
    if (/Hand|Thumb|Index|Middle|Ring|Pinky/.test(name)) return K.glove;
    if (/Foot|Toe/.test(name)) return K.boot;
    if (/UpLeg|Leg|Hips/.test(name)) return K.suitDark;
    return K.suit;
  };
  const g = mesh.geometry = mesh.geometry.clone(), si = g.attributes.skinIndex, sw = g.attributes.skinWeight;
  const cols = new Float32Array(si.count * 3), c = new THREE.Color();
  for (let i = 0; i < si.count; i++) {
    let best = 0, bw = -1;
    for (let k = 0; k < 4; k++) { const w = sw.getComponent(i, k); if (w > bw) { bw = w; best = si.getComponent(i, k); } }
    c.set(pick(bones[best]?.name || ''));
    cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  const old = mesh.material;
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, map: old.map || null, roughness: 0.5, metalness: 0.05, envMapIntensity: 0.8 });
  mat.onBeforeCompile = sh => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <map_fragment>', `
      #ifdef USE_MAP
        float lum = dot(texture2D(map, vMapUv).rgb, vec3(0.299, 0.587, 0.114));
        diffuseColor.rgb *= 0.72 + lum * 0.7;
      #endif`);
  };
  mesh.material = mat;
}

export function makeRider(gltf, deckTopY, colors = THEME) {
  const model = colors === THEME ? gltf.scene : cloneSkinned(gltf.scene);
  const B = n => model.getObjectByName('mixamorig' + n) || model.getObjectByName('mixamorig:' + n);
  const bones = {};
  for (const n of ['Hips', 'Spine', 'Spine1', 'Spine2', 'Neck', 'Head', 'HeadTop_End',
    'LeftUpLeg', 'LeftLeg', 'LeftFoot', 'LeftToeBase', 'RightUpLeg', 'RightLeg', 'RightFoot', 'RightToeBase',
    'LeftArm', 'LeftForeArm', 'LeftHand', 'RightArm', 'RightForeArm', 'RightHand']) bones[n] = B(n);

  model.traverse(o => {
    if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false; }
    if (o.isSkinnedMesh) restyle(o, colors);
  });
  // normalise height to ~1.78 m
  const box = new THREE.Box3().setFromObject(model);
  const k = 1.78 / (box.max.y - box.min.y);
  model.scale.multiplyScalar(k);
  model.updateMatrixWorld(true);

  const holder = new THREE.Group(); // lives in the board's tilt space
  holder.add(model);
  model.rotation.y = -Math.PI / 2;  // stand sideways: chest faces +x, nose of the board is -z

  const mixer = new THREE.AnimationMixer(model);
  const idle = gltf.animations.find(a => a.name === 'Idle') || gltf.animations[0];
  const act = mixer.clipAction(idle); act.play();

  // measure bone lengths once, in world units
  const wp = (bn, v = new THREE.Vector3()) => bn.getWorldPosition(v);
  const len = (a, b) => wp(bones[a]).distanceTo(wp(bones[b]));
  const L = {
    thigh: len('LeftUpLeg', 'LeftLeg'), shin: len('LeftLeg', 'LeftFoot'),
    upper: len('LeftArm', 'LeftForeArm'), fore: len('LeftForeArm', 'LeftHand'),
    ankle: wp(bones.LeftFoot).y - box.min.y * k,
  };
  const hipsRestY = wp(bones.Hips).y - box.min.y * k; // standing hip height above the soles

  // air / tuck / preload blends plus a spring for the jump pop and landing absorb
  const st = { crouch: 0.5, lean: 0, drift: 0, t: 0, sway: 0, air: 0, tuck: 0, preload: 0, comp: 0, compV: 0, wasAir: false, vy: 0, grab: 0 };
  const P = {
    hips: new THREE.Vector3(), footF: new THREE.Vector3(), footB: new THREE.Vector3(), knee: new THREE.Vector3(),
    elbow: new THREE.Vector3(), hand: new THREE.Vector3(), pole: new THREE.Vector3(), tmp: new THREE.Vector3(), up: new THREE.Vector3(),
    fwdChar: new THREE.Vector3(), nose: new THREE.Vector3(), right: new THREE.Vector3(),
  };

  // Board-space helper -> world
  let space = null;
  const W = (x, y, z, out) => space.localToWorld(out.set(x, y, z));

  // fx: { air, vy, airT, tuck (0..1 speed tuck), preload (0..1 crouch on the ramp) }
  function update(dt, tilt, crouch, lean, drift, speedN, fx = NOFX) {
    space = tilt;
    st.t += dt;
    const s = Math.min(1, dt * 7);
    st.crouch += (crouch - st.crouch) * s;
    st.lean += (lean - st.lean) * s;
    st.drift += (drift - st.drift) * s;
    st.tuck += ((fx.tuck || 0) - st.tuck) * Math.min(1, dt * 3);
    st.preload += ((fx.preload || 0) - st.preload) * Math.min(1, dt * 8);
    st.air += ((fx.air ? 1 : 0) - st.air) * Math.min(1, dt * 9);
    // jump timing: extend the legs at the lip, soak up the landing with the knees
    if (fx.air && !st.wasAir) st.compV = -5;
    if (!fx.air && st.wasAir) st.compV = Math.min(9, 2 + Math.abs(st.vy) * 0.45);
    if (fx.air) st.vy = fx.vy || 0;
    st.wasAir = !!fx.air;
    st.compV += (-st.comp * 70 - st.compV * 11) * dt;
    st.comp = Math.max(-0.6, Math.min(1, st.comp + st.compV * dt));
    st.grab += ((fx.air && (fx.airT || 0) > 0.3 ? 1 : 0) - st.grab) * Math.min(1, dt * 6);
    st.crash = (st.crash || 0) + ((fx.crash ? 1 : 0) - (st.crash || 0)) * Math.min(1, dt * 10);
    mixer.update(dt);
    holder.updateWorldMatrix(true, true);

    const L0 = Math.abs(st.lean), dr = st.drift;
    // one crouch value drives hips and knees: speed, tuck, ramp preload, carve depth, air tuck, landing
    const c = Math.max(0, Math.min(1.45, st.crash * 0.6 + st.crouch + st.tuck * 0.7 + st.preload * 0.55 + L0 * 0.35 + st.air * 0.6 + st.comp * 0.7));
    // directions in world space
    tilt.getWorldQuaternion(_q1);
    P.up.set(0, 1, 0).applyQuaternion(_q1);
    P.fwdChar.set(1, 0, 0).applyQuaternion(_q1);   // where the chest faces
    P.nose.set(0, 0, -1).applyQuaternion(_q1);     // direction of travel

    // ---- hips: drop into a crouch, shift weight toward the lean
    const hipH = hipsRestY * (1 - 0.3 * c) + Math.sin(st.t * 2.1) * 0.01;
    // toeside carve (lean > 0): hips drive over the toes; heelside: sit back over the heels
    W(-0.06 - c * 0.12 + st.lean * 0.34 - st.tuck * 0.1, deckTopY + hipH, 0.02 + dr * 0.1, P.hips);
    const hips = bones.Hips;
    hips.parent.updateWorldMatrix(true, false);
    hips.position.copy(hips.parent.worldToLocal(P.tmp.copy(P.hips)));
    hips.updateMatrixWorld(true);
    // turn the pelvis a touch toward the nose
    rotateWorld(hips, P.up, 0.25 + dr * 0.3);

    // ---- legs
    const stanceZ = 0.36;
    W(0.02, deckTopY + L.ankle, -stanceZ, P.footF);
    W(-0.02, deckTopY + L.ankle, stanceZ, P.footB);
    for (const [side, foot, poleZ] of [['Left', P.footF, -0.7], ['Right', P.footB, 0.5]]) {
      const up = bones[side + 'UpLeg'], lo = bones[side + 'Leg'], ft = bones[side + 'Foot'], toe = bones[side + 'ToeBase'];
      const root = wp(up, new THREE.Vector3());
      P.pole.copy(P.fwdChar).addScaledVector(P.nose, poleZ < 0 ? 0.3 : -0.3).normalize();
      twoBone(root, foot, L.thigh, L.shin, P.pole, P.knee);
      aim(up, lo, P.knee);
      aim(lo, ft, foot);
      // toes point across the deck, slightly toward the nose for the front foot
      P.tmp.copy(foot).addScaledVector(P.fwdChar, 0.16).addScaledVector(P.nose, poleZ < 0 ? 0.06 : -0.02).addScaledVector(P.up, -L.ankle * 0.9);
      if (toe) aim(ft, toe, P.tmp);
    }

    // ---- spine: bend forward over the knees, lean into the carve
    // (tuck folds the chest down over the knees; carves incline the torso into the turn)
    W(0.25 + c * 0.35 + dr * 0.25 + st.lean * 0.35 + st.tuck * 0.35, deckTopY + hipH + 0.55 - c * 0.12 - st.tuck * 0.3, 0.05 + dr * 0.1, P.tmp);
    P.tmp.addScaledVector(P.nose, st.lean * -0.05 - st.tuck * 0.08);
    aim(bones.Spine, bones.Spine1, P.tmp, 0.9);
    // fold the upper back too, so a tuck reads as a real compact ball
    if (st.tuck > 0.05) rotateWorld(bones.Spine1, P.nose, -st.tuck * 0.35);
    // shoulders open toward the nose so the rider looks down the hill
    rotateWorld(bones.Spine2, P.up, 0.35 + dr * 0.4);
    // head looks down the road
    rotateWorld(bones.Neck, P.up, 0.35);
    rotateWorld(bones.Head, P.up, 0.45 - dr * 0.2);

    // ---- arms: out for balance; in a slide the back hand reaches for the road
    const sway = Math.sin(st.t * 1.7) * 0.05 + Math.sin(st.t * 3.3) * 0.02 * speedN;
    for (const [side, dz, lift] of [['Left', -1, 0.1], ['Right', 1, -0.05]]) {
      const sh = bones[side + 'Arm'], el = bones[side + 'ForeArm'], hd = bones[side + 'Hand'];
      const root = wp(sh, new THREE.Vector3());
      const reach = side === 'Right' && dr > 0.2;
      if (reach) {
        W(0.55, deckTopY - 0.35, 0.3, P.hand);            // fingers dragging on the road
      } else {
        // arms spread along the board, a little in front of the chest, dipping with the lean
        P.hand.copy(root).addScaledVector(P.nose, dz * -(0.5 + c * 0.1))
          .addScaledVector(P.fwdChar, 0.02)
          .addScaledVector(P.up, -0.32 + lift + sway + st.lean * dz * 0.12 + st.air * 0.6)
          .addScaledVector(P.fwdChar, st.air * 0.15);
        // speed tuck: hands folded behind the lower back, like a downhill skater
        const tk = st.tuck * (1 - st.air);
        if (tk > 0.01) P.hand.lerp(W(-0.3 - c * 0.05, deckTopY + hipH + 0.12, dz * 0.07, P.tmp), tk);
        // deep carve: the inside hand reaches down and skims the road
        const plant = Math.max(0, Math.min(1, (L0 - 0.55) / 0.35)) * (1 - st.air);
        if (plant > 0.01 && ((st.lean > 0 && side === 'Left') || (st.lean < 0 && side === 'Right'))) {
          P.hand.lerp(st.lean > 0 ? W(0.62, deckTopY - 0.18, -0.1, P.tmp) : W(-0.58, deckTopY - 0.12, 0.25, P.tmp), plant);
        }
        // long air: the front hand grabs the toe edge between the feet
        if (side === 'Left' && st.grab > 0.01) P.hand.lerp(W(0.34, deckTopY + 0.06, -0.08, P.tmp), st.grab);
        // wipeout: arms thrown up and out, flailing
        if (st.crash > 0.01) P.hand.lerp(P.tmp.copy(root).addScaledVector(P.up, 0.45 + Math.sin(st.t * 17 + dz) * 0.15).addScaledVector(P.nose, dz * -0.35).addScaledVector(P.fwdChar, 0.15 + Math.cos(st.t * 13 + dz) * 0.15), st.crash);
      }
      P.pole.copy(P.up).multiplyScalar(-0.6).addScaledVector(P.fwdChar, -0.8).normalize();
      twoBone(root, P.hand, L.upper, L.fore, P.pole, P.elbow);
      aim(sh, el, P.elbow);
      aim(el, hd, P.hand);
    }
  }

  return { object: holder, update, mixer };
}
