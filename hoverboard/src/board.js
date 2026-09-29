// Procedural hoverboard + rider.
import * as THREE from 'three';

export function makeBoard() {
  const root = new THREE.Group();       // positioned on the track
  const tilt = new THREE.Group();       // lean / pitch / drift yaw
  root.add(tilt);

  // deck: rounded capsule outline, extruded and bevelled
  const L = 1.9, W = 0.34;
  const sh = new THREE.Shape();
  sh.moveTo(-L / 2 + W, -W);
  sh.lineTo(L / 2 - W, -W);
  sh.absarc(L / 2 - W, 0, W, -Math.PI / 2, Math.PI / 2, false);
  sh.lineTo(-L / 2 + W, W);
  sh.absarc(-L / 2 + W, 0, W, Math.PI / 2, Math.PI * 1.5, false);
  const deckGeo = new THREE.ExtrudeGeometry(sh, { depth: 0.07, bevelEnabled: true, bevelThickness: 0.035, bevelSize: 0.04, bevelSegments: 4, curveSegments: 20 });
  deckGeo.rotateX(-Math.PI / 2); deckGeo.rotateY(Math.PI / 2); // length along z
  deckGeo.translate(0, 0, 0);
  const shell = new THREE.MeshPhysicalMaterial({ color: 0xf2f2f5, metalness: 0.2, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.08 });
  const deck = new THREE.Mesh(deckGeo, shell); deck.castShadow = true; tilt.add(deck);

  // grip tape on top
  const gripGeo = new THREE.ShapeGeometry(sh, 20); gripGeo.rotateX(-Math.PI / 2); gripGeo.rotateY(Math.PI / 2);
  gripGeo.scale(0.9, 1, 0.9);
  const grip = new THREE.Mesh(gripGeo, new THREE.MeshStandardMaterial({ color: 0x151517, roughness: 1 }));
  grip.position.y = 0.109; tilt.add(grip);

  // accent stripe + underglow emitters
  const accent = new THREE.MeshStandardMaterial({ color: 0xff6a3d, roughness: 0.5 });
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.02, L * 0.78), accent);
  stripe.position.set(0, 0.112, 0); tilt.add(stripe);
  const sideL = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.03, L * 0.7), accent);
  sideL.position.set(-W - 0.035, 0.03, 0); tilt.add(sideL);
  const sideR = sideL.clone(); sideR.position.x = W + 0.035; tilt.add(sideR);

  // two thruster pods underneath
  const podMat = new THREE.MeshStandardMaterial({ color: 0x2a2d33, metalness: 0.9, roughness: 0.3 });
  const ringMat = new THREE.MeshStandardMaterial({ color: 0x3a3d48, metalness: 0.8, roughness: 0.35 });
  const pods = [];
  for (const z of [-0.55, 0.55]) {
    const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.1, 24), podMat);
    pod.position.set(0, -0.06, z); tilt.add(pod);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.03, 8, 32), ringMat);
    ring.rotation.x = Math.PI / 2; ring.position.set(0, -0.115, z); tilt.add(ring);
    pods.push(ring);
  }
  // soft glow card under the board (additive)
  const glowTex = radialTex();
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 3.0), new THREE.MeshBasicMaterial({ map: glowTex, color: 0x19e6ff, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = -0.55; glow.visible = false; root.add(glow);
  // contact shadow: a soft dark card on the road that tightens as the board gets closer
  const contact = new THREE.Mesh(new THREE.PlaneGeometry(1.25, 2.5).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({
    map: contactTex(), color: 0x000000, transparent: true, opacity: 0.6, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  }));
  contact.renderOrder = 1; root.add(contact);
  const setContact = (h) => {
    contact.position.y = -h + 0.03;
    const k = Math.min(1, Math.max(0, h / 5));
    contact.material.opacity = 0.62 * (1 - k) * (1 - k);
    contact.scale.setScalar(1 + k * 0.8);
  };

  // ---------- rider ----------
  const rider = new THREE.Group(); tilt.add(rider);
  const suit = new THREE.MeshStandardMaterial({ color: 0xff5a1f, roughness: 0.55 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1b1d22, roughness: 0.7 });
  const white = new THREE.MeshStandardMaterial({ color: 0xe9e9ee, roughness: 0.45 });
  const visor = new THREE.MeshPhysicalMaterial({ color: 0x111111, metalness: 1, roughness: 0.05, clearcoat: 1, });
  const limb = (r, len, mat) => { const g = new THREE.CapsuleGeometry(r, len, 6, 12); const m = new THREE.Mesh(g, mat); m.castShadow = true; return m; };
  const joint = (parent, x, y, z) => { const j = new THREE.Group(); j.position.set(x, y, z); parent.add(j); return j; };

  // stance: sideways on the board, facing +x (rider's chest looks to the side), front foot forward (-z)
  const hips = joint(rider, 0, 0.95, 0);
  const pelvis = limb(0.16, 0.12, dark); pelvis.rotation.z = Math.PI / 2; hips.add(pelvis);
  const legs = [];
  for (const [side, z] of [[1, -0.26], [-1, 0.26]]) {
    const hip = joint(hips, 0, 0, z * 0.5);
    const thigh = limb(0.095, 0.38, dark); thigh.position.y = -0.25; hip.add(thigh);
    const knee = joint(hip, 0, -0.48, 0);
    const shin = limb(0.085, 0.36, dark); shin.position.y = -0.22; knee.add(shin);
    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.3), white); shoe.position.set(0.02, -0.46, 0); shoe.castShadow = true; knee.add(shoe);
    legs.push({ hip, knee, side, z });
  }
  const spine = joint(hips, 0, 0.08, 0);
  const torso = limb(0.2, 0.34, suit); torso.position.y = 0.3; spine.add(torso);
  const pack = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.34, 0.3), dark); pack.position.set(-0.2, 0.34, 0); pack.castShadow = true; spine.add(pack);
  const neck = joint(spine, 0.02, 0.66, 0);
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.17, 24, 18), white); helmet.position.y = 0.1; helmet.castShadow = true; neck.add(helmet);
  const vis = new THREE.Mesh(new THREE.SphereGeometry(0.155, 24, 12, -0.9, 1.8, 1.0, 1.0), visor);
  vis.position.set(0.03, 0.1, 0); vis.rotation.y = 0; neck.add(vis);
  const arms = [];
  for (const side of [-1, 1]) {
    const sh2 = joint(spine, 0, 0.5, side * 0.24);
    const up = limb(0.07, 0.26, suit); up.position.y = -0.18; sh2.add(up);
    const el = joint(sh2, 0, -0.36, 0);
    const fo = limb(0.06, 0.24, suit); fo.position.y = -0.16; el.add(fo);
    const glove = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 10), dark); glove.position.y = -0.34; el.add(glove);
    arms.push({ sh: sh2, el, side });
  }
  rider.rotation.y = 0;
  rider.position.y = 0.1;

  const state = { crouch: 0.5, lean: 0, drift: 0, t: 0 };
  function pose(dt, crouch, lean, drift, speedN) {
    state.t += dt;
    state.crouch += (crouch - state.crouch) * Math.min(1, dt * 6);
    const c = state.crouch;
    // knees bend, hips drop
    hips.position.y = 0.95 - c * 0.32;
    for (const l of legs) {
      l.hip.rotation.x = l.side * 0.18;
      l.hip.rotation.z = c * 0.9;
      l.knee.rotation.z = -c * 1.6;
    }
    spine.rotation.z = -0.15 - c * 0.45 + drift * 0.3;       // bend forward toward the chest side
    spine.rotation.x = lean * 0.35;
    neck.rotation.z = 0.1 + c * 0.35;
    neck.rotation.y = -drift * 0.4;
    // arms out for balance, wave with lean and drift
    for (const a of arms) {
      a.sh.rotation.x = a.side * (0.9 + drift * 0.5 + Math.sin(state.t * 3 + a.side) * 0.05 * speedN) + lean * 0.4;
      a.sh.rotation.z = 0.3 + c * 0.3;
      a.el.rotation.z = -0.5 - drift * 0.4;
    }
    // drift: one hand drops to the road
    if (drift > 0.1) arms[drift > 0 ? 0 : 1].sh.rotation.z = 0.3 + c * 0.3 + drift * 0.9;
  }

  return { root, tilt, rider, pods, glow, pose, accent, ringMat, contact, setContact };
}

export function radialTex(inner = 'rgba(255,255,255,1)') {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, inner); gr.addColorStop(0.35, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

let _contactTex = null;
function contactTex() {
  if (_contactTex) return _contactTex;
  const c = document.createElement('canvas'); c.width = 64; c.height = 128;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 31);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.4, 'rgba(255,255,255,0.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.scale(1, 2); g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  _contactTex = new THREE.CanvasTexture(c);
  return _contactTex;
}
