// Low-poly particle bursts and procedural WebAudio sound.
import * as THREE from 'three';

export class FX {
  constructor(scene, max = 500) {
    const geo = new THREE.IcosahedronGeometry(1, 0);
    this.sys = [
      this._make(scene, geo, new THREE.MeshStandardMaterial({ flatShading: true, roughness: 1 }), max, true),
      this._make(scene, geo, new THREE.MeshBasicMaterial(), max, false),
    ];
    this.o = new THREE.Object3D(); this.c = new THREE.Color();
  }
  _make(scene, geo, mat, max, cast) {
    const m = new THREE.InstancedMesh(geo, mat, max);
    m.frustumCulled = false; m.castShadow = cast; m.count = 0;
    for (let i = 0; i < max; i++) m.setColorAt(i, new THREE.Color(1, 1, 1));
    scene.add(m);
    return { mesh: m, list: [], max };
  }
  spawn(glow, pos, vel, life, size, color, grav = 0, drag = 1, grow = 0) {
    const s = this.sys[glow ? 1 : 0];
    if (s.list.length >= s.max) s.list.shift();
    s.list.push({ p: pos.clone(), v: vel.clone(), life, max: life, size, color: new THREE.Color(color), grav, drag, grow, r: Math.random() * 6 });
  }
  burst(type, pos, n = 12) {
    const V = (x, y, z) => new THREE.Vector3(x, y, z), rnd = (a) => (Math.random() - 0.5) * 2 * a;
    if (type === 'dust') for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.28, s = 3 + Math.random() * 6;
      this.spawn(false, V(pos.x, pos.y + 0.2, pos.z), V(Math.cos(a) * s, 1 + Math.random() * 2.5, Math.sin(a) * s), 0.7 + Math.random() * 0.5, 0.25 + Math.random() * 0.25, 0xc9bfae, -1, 3, 1.2);
    }
    else if (type === 'spark') for (let i = 0; i < n; i++)
      this.spawn(true, pos, V(rnd(9), 2 + Math.random() * 7, rnd(9)), 0.35 + Math.random() * 0.4, 0.07 + Math.random() * 0.07, new THREE.Color(4, 2.4, 0.8), 22, 0.5);
    else if (type === 'explosion') {
      for (let i = 0; i < 46; i++) this.spawn(true, pos, V(rnd(14), Math.random() * 16, rnd(14)), 0.6 + Math.random() * 0.7, 0.6 + Math.random() * 1.0, new THREE.Color(5, 1.6 + Math.random() * 1.5, 0.3), -2, 2.5, 1.5);
      for (let i = 0; i < 30; i++) this.spawn(false, V(pos.x + rnd(2), pos.y + 1, pos.z + rnd(2)), V(rnd(4), 4 + Math.random() * 6, rnd(4)), 2 + Math.random() * 2, 0.9 + Math.random(), 0x2b2b2e, -1.5, 1.2, 2.5);
      for (let i = 0; i < 24; i++) this.spawn(false, pos, V(rnd(16), 6 + Math.random() * 14, rnd(16)), 2.5, 0.25 + Math.random() * 0.3, 0x5a5d63, 25, 0.3);
    }
    else if (type === 'splash') for (let i = 0; i < 30; i++)
      this.spawn(false, V(pos.x, -0.6, pos.z), V(rnd(4), 5 + Math.random() * 7, rnd(4)), 1, 0.2 + Math.random() * 0.2, 0xdff4ff, 25, 0.5);
    else if (type === 'pickup') for (let i = 0; i < 30; i++)
      this.spawn(true, pos, V(rnd(7), rnd(7), rnd(7)), 0.6 + Math.random() * 0.4, 0.15, new THREE.Color(4, 2.6, 0.6), 0, 3);
    else if (type === 'trail') {
      this.spawn(false, pos, V(rnd(0.3), rnd(0.3), rnd(0.3)), 0.5, 0.16, 0xbdbdbd, -0.3, 2, 1.6);
      this.spawn(true, pos, V(0, 0, 0), 0.06, 0.18, new THREE.Color(5, 2, 0.5));
    }
    else if (type === 'smoke') this.spawn(false, pos, V(rnd(0.6), 1.5 + Math.random(), rnd(0.6)), 1.2, 0.25, 0xd0d0d0, -0.5, 1.5, 2.2);
  }
  update(dt) {
    for (const s of this.sys) {
      let n = 0;
      s.list = s.list.filter(q => (q.life -= dt) > 0);
      for (const q of s.list) {
        q.v.y -= q.grav * dt; q.v.multiplyScalar(Math.max(0, 1 - q.drag * dt));
        q.p.addScaledVector(q.v, dt);
        if (q.p.y < 0.05 && q.grav > 0) { q.p.y = 0.05; q.v.y *= -0.3; q.v.x *= 0.7; q.v.z *= 0.7; }
        const k = q.life / q.max;
        const sc = q.size * (1 + q.grow * (1 - k)) * Math.min(1, k * 3);
        this.o.position.copy(q.p); this.o.rotation.set(q.r, q.r * 1.3 + q.life, 0); this.o.scale.setScalar(sc);
        this.o.updateMatrix();
        s.mesh.setMatrixAt(n, this.o.matrix); s.mesh.setColorAt(n, q.color); n++;
      }
      s.mesh.count = n;
      s.mesh.instanceMatrix.needsUpdate = true;
      if (s.mesh.instanceColor) s.mesh.instanceColor.needsUpdate = true;
    }
  }
}

export class Sound {
  constructor() { this.ctx = null; this.muted = false; this.musicOn = true; }
  // phones only let audio start inside a tap, so this is called from every touch
  init() {
    if (this.ctx) { if (this.ctx.state !== 'running') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const c = this.ctx = new AC();
    // a compressor keeps everything loud on small phone speakers without clipping
    this.comp = c.createDynamicsCompressor(); this.comp.threshold.value = -18; this.comp.ratio.value = 4;
    this.comp.connect(c.destination);
    this.master = c.createGain(); this.master.gain.value = 1; this.master.connect(this.comp);
    // iOS needs a sound played inside the gesture to unlock output
    const unlock = c.createBufferSource(); unlock.buffer = c.createBuffer(1, 1, 22050); unlock.connect(c.destination); unlock.start();
    document.addEventListener('visibilitychange', () => { if (document.hidden) c.suspend(); else c.resume(); });
    const len = c.sampleRate * 2, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.noise = buf;
    // continuous layers: wind and engine
    this.wind = this._loopNoise('bandpass', 600, 0);
    const eg = c.createGain(); eg.gain.value = 0;
    const ef = c.createBiquadFilter(); ef.type = 'lowpass'; ef.frequency.value = 700;
    const o1 = c.createOscillator(); o1.type = 'sawtooth';
    const o2 = c.createOscillator(); o2.type = 'square';
    o1.connect(ef); o2.connect(ef); ef.connect(eg); eg.connect(this.master);
    o1.start(); o2.start();
    this.engine = { g: eg, f: ef, o1, o2 };
    if (this.musicOn) this.startMusic();
  }

  // ---------- soundtrack: a four-bar loop (Am F C G) of drums, bass and arpeggio ----------
  startMusic() {
    if (!this.ctx || this.musicTimer) return;
    const c = this.ctx;
    this.mbus = c.createGain(); this.mbus.gain.value = 0.22; this.mbus.connect(this.master);
    const step = 60 / 104 / 4;
    let next = c.currentTime + 0.1, i = 0;
    this.musicTimer = setInterval(() => {
      while (next < c.currentTime + 0.3) { this._beat(i++, next); next += step; }
    }, 60);
  }
  stopMusic() {
    clearInterval(this.musicTimer); this.musicTimer = null;
    if (this.mbus) { const g = this.mbus; g.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1); setTimeout(() => g.disconnect(), 600); this.mbus = null; }
  }
  toggleMusic() { this.musicOn = !this.musicOn; if (this.musicOn) this.startMusic(); else this.stopMusic(); return this.musicOn; }
  _beat(i, t) {
    const c = this.ctx, bus = this.mbus, s = i % 16, bar = (i >> 4) % 4;
    const roots = [57, 53, 48, 55], minor = [true, false, false, false];
    const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
    const tone = (type, f, vol, dur, f1 = f, cutoff = 0) => {
      const o = c.createOscillator(), g = c.createGain(); o.type = type;
      o.frequency.setValueAtTime(f, t); if (f1 !== f) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
      if (cutoff) { const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = cutoff; o.connect(lp); lp.connect(g); } else o.connect(g);
      g.connect(bus); o.start(t); o.stop(t + dur + 0.05);
    };
    const hit = (type, freq, vol, dur) => {
      const n = c.createBufferSource(); n.buffer = this.noise;
      const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq;
      const g = c.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
      n.connect(f); f.connect(g); g.connect(bus); n.start(t, Math.random()); n.stop(t + dur + 0.05);
    };
    if (s % 4 === 0) tone('sine', 140, 0.9, 0.28, 42);                       // kick
    if (s === 4 || s === 12) hit('bandpass', 1900, 0.55, 0.16);             // snare
    if (s % 2 === 1) hit('highpass', 7500, 0.18, 0.05);                      // hi-hat
    const r = roots[bar];
    if ([0, 3, 6, 8, 11, 14].includes(s)) tone('sawtooth', mtof(r - 24 + (s === 14 ? 12 : 0)), 0.32, step16(0.9), undefined, 420);
    if (s % 2 === 0) {                                                      // arpeggio
      const chord = [0, minor[bar] ? 3 : 4, 7, 12];
      tone('triangle', mtof(r + 12 + chord[(s / 2) % 4]), 0.12, 0.22);
    }
    function step16(k) { return 60 / 104 / 4 * 4 * k; }
  }
  _loopNoise(type, freq, gain) {
    const c = this.ctx, s = c.createBufferSource(); s.buffer = this.noise; s.loop = true;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = 0.7;
    const g = c.createGain(); g.gain.value = gain;
    s.connect(f); f.connect(g); g.connect(this.master); s.start();
    return { f, g };
  }
  _burst(dur, type, f0, f1, vol, q = 1) {
    if (!this.ctx || this.muted) return;
    const c = this.ctx, t = c.currentTime, s = c.createBufferSource(); s.buffer = this.noise;
    const f = c.createBiquadFilter(); f.type = type; f.Q.value = q;
    f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = c.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.master); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }
  _tone(dur, type, f0, f1, vol) {
    if (!this.ctx || this.muted) return;
    const c = this.ctx, t = c.currentTime, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.05);
  }
  thwip() { this._burst(0.16, 'bandpass', 3800, 900, 0.5, 3); this._tone(0.08, 'triangle', 1400, 500, 0.06); }
  jump() { this._burst(0.12, 'lowpass', 900, 300, 0.15); }
  land(k) { this._burst(0.25 + k * 0.3, 'lowpass', 500, 60, 0.3 + k * 0.5); }
  crash(k) { this._burst(0.4 + k * 0.4, 'lowpass', 2500, 120, 0.4 + k * 0.5); this._tone(0.2, 'square', 180, 60, 0.1 * k); }
  thud() { this._burst(0.2, 'lowpass', 400, 80, 0.4); }
  splash() { this._burst(0.7, 'highpass', 2000, 600, 0.4); }
  explosion() { this._burst(1.8, 'lowpass', 1200, 40, 1.0); this._tone(1.2, 'sine', 90, 30, 0.6); }
  pickup() { this._tone(0.12, 'sine', 880, 1320, 0.2); setTimeout(() => this._tone(0.25, 'sine', 1320, 1760, 0.18), 90); }
  shot(v = 0.5) { this._burst(0.09, 'highpass', 2600, 900, v); this._tone(0.06, 'square', 300, 90, v * 0.25); }
  rocket() { this._burst(0.6, 'bandpass', 900, 2600, 0.35, 1.5); }
  cannon() { this._burst(0.9, 'lowpass', 900, 50, 0.9); this._tone(0.5, 'sine', 70, 30, 0.5); }
  hurt() { this._tone(0.15, 'sawtooth', 220, 110, 0.12); }
  click() { this._tone(0.05, 'square', 900, 600, 0.06); }
  step(k = 1) { this._burst(0.07, 'lowpass', 700, 200, 0.12 * k); }
  beep() { this._tone(0.06, 'square', 1500, 1500, 0.07); }
  jingle() { [0, 4, 7, 12].forEach((n, i) => setTimeout(() => this._tone(0.22, 'triangle', 523 * Math.pow(2, n / 12), 523 * Math.pow(2, n / 12), 0.22), i * 90)); }
  alarm() { [0, 1, 2].forEach(i => setTimeout(() => this._tone(0.14, 'square', i % 2 ? 660 : 880, i % 2 ? 660 : 880, 0.1), i * 150)); }
  wasted() { this._tone(1.4, 'sawtooth', 300, 60, 0.25); this._burst(1.2, 'lowpass', 600, 60, 0.4); }
  door() { this._burst(0.12, 'lowpass', 700, 150, 0.35); }
  // police siren: a two-tone wail whose volume follows the nearest cruiser
  siren(vol) {
    if (!this.ctx) return;
    if (!this.sir) {
      const o = this.ctx.createOscillator(), g = this.ctx.createGain(), f = this.ctx.createBiquadFilter();
      o.type = 'square'; f.type = 'lowpass'; f.frequency.value = 1800; g.gain.value = 0;
      o.connect(f); f.connect(g); g.connect(this.master); o.start();
      this.sir = { o, g };
    }
    const t = this.ctx.currentTime;
    this.sir.o.frequency.setTargetAtTime(Math.floor(t * 1.6) % 2 ? 950 : 700, t, 0.05);
    this.sir.g.gain.setTargetAtTime(this.muted ? 0 : vol, t, 0.2);
  }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.6; }
  // kind: null | 'car' | 'plane'; x: 0..1 load
  update(speed, kind, x) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.wind.g.gain.setTargetAtTime(Math.min(0.5, Math.max(0, (speed - 10) / 60)), t, 0.2);
    this.wind.f.frequency.setTargetAtTime(400 + speed * 18, t, 0.2);
    const e = this.engine;
    if (kind === 'car') {
      const rpm = 45 + x * 140;
      e.o1.frequency.setTargetAtTime(rpm, t, 0.08); e.o2.frequency.setTargetAtTime(rpm * 0.5, t, 0.08);
      e.f.frequency.setTargetAtTime(500 + x * 1400, t, 0.1); e.g.gain.setTargetAtTime(0.13, t, 0.1);
    } else if (kind === 'plane') {
      const rpm = 60 + x * 120;
      e.o1.frequency.setTargetAtTime(rpm, t, 0.2); e.o2.frequency.setTargetAtTime(rpm * 1.51, t, 0.2);
      e.f.frequency.setTargetAtTime(800 + x * 1800, t, 0.2); e.g.gain.setTargetAtTime(0.12, t, 0.2);
    } else e.g.gain.setTargetAtTime(0, t, 0.15);
  }
}
