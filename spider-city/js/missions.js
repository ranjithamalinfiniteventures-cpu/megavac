// Side missions with cash rewards: ring races, gang hits and smash sprees.
// Glowing beams around the city start them; walk or drive into one.
import * as THREE from 'three';
import { N, roadAt, ROAD, HALF, P } from './world.js';

const TYPES = {
  race: { color: 0x2ee6ff, name: 'RING RACE', blurb: 'Fly through every ring before time runs out' },
  gang: { color: 0xff3048, name: 'GANG HIT', blurb: 'Take down the whole gang crew' },
  smash: { color: 0xffb020, name: 'SMASH SPREE', blurb: 'Destroy 5 cars in 60 seconds' },
};
const fmt = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

export class Missions {
  constructor({ scene, world, combat, fx, sound, toast }, rand) {
    Object.assign(this, { scene, world, combat, fx, sound, toast, R: rand });
    this.cash = 0; this.done = 0; this.current = null; this.markers = [];
    this.beamG = new THREE.CylinderGeometry(2.2, 2.2, 70, 12, 1, true).translate(0, 35, 0);
    this.iconG = new THREE.OctahedronGeometry(1.2, 0);
    this.ringG = new THREE.TorusGeometry(6, 0.45, 6, 28);
    this.ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.25, 1.4, 1.9) });
    this.nextMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.3, 1.2, 1.6), transparent: true, opacity: 0.35 });
    this.rings = [];
    for (let i = 0; i < 3; i++) this._newMarker(['race', 'gang', 'smash'][i]);
  }

  _streetSpot() {
    const i = 1 + Math.floor(this.R() * (N - 1)), j = 1 + Math.floor(this.R() * (N - 1));
    return new THREE.Vector3(roadAt(i) + ROAD / 2 + 3, 0.25, roadAt(j) + ROAD / 2 + 3 + this.R() * 30);
  }
  _newMarker(type) {
    const c = TYPES[type].color;
    const beam = new THREE.Mesh(this.beamG, new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    const icon = new THREE.Mesh(this.iconG, new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(3) }));
    const pos = this._streetSpot();
    beam.position.copy(pos); icon.position.copy(pos).setY(pos.y + 3);
    this.scene.add(beam, icon);
    this.markers.push({ type, pos, beam, icon });
  }

  start(m) {
    this.scene.remove(m.beam, m.icon);
    this.markers.splice(this.markers.indexOf(m), 1);
    const t = TYPES[m.type];
    this.toast(`${t.name}: ${t.blurb}`);
    this.sound.pickup();
    if (m.type === 'race') this._startRace(m.pos);
    else if (m.type === 'gang') this._startGang(m.pos);
    else this.current = { type: 'smash', time: 60, count: 0, need: 5 };
    this.current.marker = m.type;
  }

  _startRace(from) {
    // hop from intersection to intersection, alternating street-level and sky-high rings
    const cl = v => Math.max(0, Math.min(N, v));
    let k = cl(Math.round((from.x + HALF) / P)), l = cl(Math.round((from.z + HALF) / P));
    let pk = -1, pl = -1;
    const pts = [];
    for (let n = 0; n < 7; n++) {
      for (let hop = 0; hop < 2; hop++) {
        const opts = [[k + 1, l], [k - 1, l], [k, l + 1], [k, l - 1]].filter(([a, b]) => a >= 0 && b >= 0 && a <= N && b <= N && (a !== pk || b !== pl));
        const [a, b] = opts[Math.floor(this.R() * opts.length)];
        pk = k; pl = l; k = a; l = b;
      }
      const y = n % 2 ? 22 + this.R() * 35 : 7;
      pts.push(new THREE.Vector3(roadAt(k), y, roadAt(l)));
    }
    let dist = from.distanceTo(pts[0]);
    for (let i = 1; i < pts.length; i++) dist += pts[i - 1].distanceTo(pts[i]);
    this.current = { type: 'race', pts, idx: 0, time: dist / 17 + 15 };
    this._showRings();
  }
  _showRings() {
    for (const r of this.rings) this.scene.remove(r);
    this.rings = [];
    const c = this.current;
    for (let i = c.idx; i < Math.min(c.idx + 2, c.pts.length); i++) {
      const m = new THREE.Mesh(this.ringG, i === c.idx ? this.ringMat : this.nextMat);
      m.position.copy(c.pts[i]);
      const nxt = c.pts[i + 1] || c.pts[i - 1];
      if (nxt) m.lookAt(nxt.x, c.pts[i].y, nxt.z);
      this.scene.add(m); this.rings.push(m);
    }
  }

  _startGang(near) {
    let best = 0, bd = Infinity;
    this.combat.spots.forEach((s, i) => { const d = Math.hypot(s.x - near.x, s.z - near.z); if (d > 60 && d < bd) { bd = d; best = i; } });
    for (const g of this.combat.goons) if (g.spot === best) { g.pos.copy(g.home); g.hp = 3; g.down = 0; g.spin = 0; g.vel.set(0, 0, 0); }
    const s = this.combat.spots[best];
    this.current = { type: 'gang', spot: best, time: 150, target: new THREE.Vector3(s.x, s.y, s.z) };
  }

  carDestroyed() { if (this.current?.type === 'smash') { this.current.count++; this.sound.pickup(); } }

  _finish(ok, reward = 0) {
    const t = TYPES[this.current.type];
    if (ok) { this.cash += reward; this.done++; this.toast(`${t.name} COMPLETE  +$${reward}`); this.sound.jingle(); }
    else { this.toast(`${t.name} FAILED`); this.sound.hurt(); }
    for (const r of this.rings) this.scene.remove(r);
    this.rings = [];
    const type = this.current.marker;
    this.current = null;
    this._newMarker(type);
  }

  update(dt, focus, mode) {
    const t = performance.now() / 1000;
    for (const m of this.markers) {
      m.icon.rotation.y += dt * 2; m.icon.position.y = m.pos.y + 3 + Math.sin(t * 2) * 0.4;
      if (!this.current && mode !== 'plane' && Math.hypot(focus.x - m.pos.x, focus.z - m.pos.z) < (mode === 'foot' ? 3.5 : 6) && Math.abs(focus.y - m.pos.y) < 6) { this.start(m); break; }
    }
    for (const r of this.rings) r.rotation.z += dt * 0.6;
    const c = this.current;
    if (!c) return;
    c.time -= dt;
    if (c.type === 'race') {
      if (focus.distanceTo(c.pts[c.idx]) < (mode === 'plane' ? 11 : 7.5)) {
        this.fx.burst('pickup', c.pts[c.idx]); this.sound.pickup();
        c.idx++;
        if (c.idx >= c.pts.length) return this._finish(true, 300 + Math.round(Math.max(0, c.time)) * 20);
        this._showRings();
      }
    } else if (c.type === 'gang') {
      if (this.combat.goons.every(g => g.spot !== c.spot || g.down > 0)) return this._finish(true, 450);
    } else if (c.count >= c.need) return this._finish(true, 350 + Math.round(Math.max(0, c.time)) * 5);
    if (c.time <= 0) this._finish(false);
  }

  // text for the HUD banner
  get status() {
    const c = this.current;
    if (!c) return '';
    if (c.type === 'race') return `RING RACE · ${c.idx}/${c.pts.length} · ${fmt(Math.max(0, c.time))}`;
    if (c.type === 'gang') return `GANG HIT · ${this.combat.goons.filter(g => g.spot === c.spot && g.down <= 0).length} left · ${fmt(Math.max(0, c.time))}`;
    return `SMASH SPREE · ${c.count}/${c.need} cars · ${fmt(Math.max(0, c.time))}`;
  }
  // points for the minimap: markers, plus the current objective
  get mapPoints() {
    const out = this.markers.map(m => ({ x: m.pos.x, z: m.pos.z, color: '#' + new THREE.Color(TYPES[m.type].color).getHexString(), big: false }));
    const c = this.current;
    if (c?.type === 'race') out.push({ x: c.pts[c.idx].x, z: c.pts[c.idx].z, color: '#2ee6ff', big: true });
    if (c?.type === 'gang') out.push({ x: c.target.x, z: c.target.z, color: '#ff3048', big: true });
    return out;
  }
}
