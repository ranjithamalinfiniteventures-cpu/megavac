// Rigged human rider: a mocap idle clip for natural micro-motion (breathing, weight
// shifts), with IK layered on top to plant the feet on the deck, crouch, lean into
// carves and reach down during slides.
import * as THREE from 'three';
import { THEME } from './theme.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { dressBody, attachGear } from './outfit.js';

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

// Quaternius Universal Base Characters use UE-style bone names; the IK below speaks Mixamo.
const UE = {
  Hips: 'pelvis', Spine: 'spine_01', Spine1: 'spine_02', Spine2: 'spine_03', Neck: 'neck_01', Head: 'Head',
  LeftUpLeg: 'thigh_l', LeftLeg: 'calf_l', LeftFoot: 'foot_l', LeftToeBase: 'ball_l',
  RightUpLeg: 'thigh_r', RightLeg: 'calf_r', RightFoot: 'foot_r', RightToeBase: 'ball_r',
  LeftArm: 'upperarm_l', LeftForeArm: 'lowerarm_l', LeftHand: 'hand_l', RightArm: 'upperarm_r', RightForeArm: 'lowerarm_r', RightHand: 'hand_r',
};

// body: { gltf (body_male/female.glb), female, skin (optional light-skin texture) }, anims: gltf with the idle clips
export function makeRider(body, deckTopY, colors = THEME, anims = null) {
  const model = cloneSkinned(body.gltf.scene);
  const B = n => model.getObjectByName(UE[n]);
  const bones = {};
  for (const n of Object.keys(UE)) bones[n] = B(n);

  // normalise height to ~1.78 m (female a touch shorter)
  model.updateMatrixWorld(true);
  let box = new THREE.Box3().setFromObject(model);
  const k = (body.female ? 1.7 : 1.8) / (box.max.y - box.min.y);
  model.scale.multiplyScalar(k);
  model.updateMatrixWorld(true);
  box = new THREE.Box3().setFromObject(model);
  // dress: bake the race suit into the body texture, then bolt the gear onto the bones
  model.traverse(o => {
    if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false; }
    if (o.isSkinnedMesh && o.material.name === 'body') {
      o.geometry = o.geometry.clone();
      const skin = body.skin || o.material.map;
      dressBody(o, colors, skin, body.female);
    }
    if (o.isSkinnedMesh && o.material.name === 'brows') o.material.alphaTest = 0.4;
  });
  attachGear(model, bones, colors, box);
  // head orientation in the canonical frame (model facing +z, upright), for the look-at below
  const headRest = bones.Head.getWorldQuaternion(new THREE.Quaternion());
  const _m = new THREE.Matrix4(), _qa = new THREE.Quaternion(), _qb = new THREE.Quaternion(), _x = new THREE.Vector3(), _f = new THREE.Vector3(), _u = new THREE.Vector3();
  const holder = new THREE.Group(); // lives in the board's tilt space
  holder.add(model);
  model.rotation.y = Math.PI / 2;  // stand sideways: model faces +z, so this turns the chest to +x with the left foot toward the nose (-z)

  const mixer = new THREE.AnimationMixer(model);
  const clips = anims?.animations || [];
  const idle = clips.find(a => a.name === 'Idle_Loop') || clips[0];
  if (idle) { const act = mixer.clipAction(idle); act.play(); act.time = Math.random() * idle.duration; }

  // measure bone lengths once, in world units
  const wp = (bn, v = new THREE.Vector3()) => bn.getWorldPosition(v);
  const len = (a, b) => wp(bones[a]).distanceTo(wp(bones[b]));
  const L = {
    thigh: len('LeftUpLeg', 'LeftLeg'), shin: len('LeftLeg', 'LeftFoot'),
    upper: len('LeftArm', 'LeftForeArm'), fore: len('LeftForeArm', 'LeftHand'),
    ankle: wp(bones.LeftFoot).y - box.min.y,
  };
  const hipsRestY = wp(bones.Hips).y - box.min.y; // standing hip height above the soles

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
    // eyes on the road: whatever the spine does, the face turns down the hill (slightly toward the chest side)
    _f.copy(P.nose).multiplyScalar(0.9).addScaledVector(P.fwdChar, 0.3 + dr * 0.3).addScaledVector(P.up, -0.18 - st.tuck * 0.08).normalize();
    _x.crossVectors(P.up, _f).normalize(); _u.crossVectors(_f, _x);
    _m.makeBasis(_x, _u, _f); _qa.setFromRotationMatrix(_m).multiply(headRest);
    bones.Head.parent.getWorldQuaternion(_qb).invert();
    bones.Head.quaternion.slerp(_qb.multiply(_qa), 0.85); bones.Head.updateMatrixWorld(true);

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
