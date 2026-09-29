// Synthesised sound: no audio files to load.
export class Sfx {
  constructor() { this.ctx = null; this.on = true; this.muted = false; }
  unlock() {
    if (this.ctx) { this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const c = this.ctx = new AC();
    this.master = c.createGain(); this.master.gain.value = 0.6; this.master.connect(c.destination);
    // hover hum: two detuned saws through a lowpass
    this.hum = c.createGain(); this.hum.gain.value = 0;
    this.lp = c.createBiquadFilter(); this.lp.type = 'lowpass'; this.lp.frequency.value = 600; this.lp.Q.value = 6;
    this.o1 = c.createOscillator(); this.o1.type = 'sawtooth'; this.o1.frequency.value = 70;
    this.o2 = c.createOscillator(); this.o2.type = 'sawtooth'; this.o2.frequency.value = 70.7;
    this.o1.connect(this.lp); this.o2.connect(this.lp); this.lp.connect(this.hum); this.hum.connect(this.master);
    this.o1.start(); this.o2.start();
    // wind: filtered noise
    const buf = c.createBuffer(1, c.sampleRate * 2, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.noiseBuf = buf;
    this.wind = c.createBufferSource(); this.wind.buffer = buf; this.wind.loop = true;
    this.wf = c.createBiquadFilter(); this.wf.type = 'bandpass'; this.wf.frequency.value = 800; this.wf.Q.value = 0.6;
    this.wg = c.createGain(); this.wg.gain.value = 0;
    this.wind.connect(this.wf); this.wf.connect(this.wg); this.wg.connect(this.master); this.wind.start();
    // drift hiss
    this.dr = c.createBufferSource(); this.dr.buffer = buf; this.dr.loop = true;
    this.df = c.createBiquadFilter(); this.df.type = 'highpass'; this.df.frequency.value = 2500;
    this.dg = c.createGain(); this.dg.gain.value = 0;
    this.dr.connect(this.df); this.df.connect(this.dg); this.dg.connect(this.master); this.dr.start();
  }
  start() { this.active = true; }
  stop() { this.active = false; }
  toggle() { this.on = !this.on; this._apply(); }
  mute(m) { this.muted = m; this._apply(); }
  _apply() { if (this.master) this.master.gain.value = this.on && !this.muted ? 0.6 : 0; }
  update(v, boost) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, a = this.active ? 1 : 0.3;
    this.o1.frequency.setTargetAtTime(55 + v * 1.4 + boost * 40, t, 0.1);
    this.o2.frequency.setTargetAtTime(55.8 + v * 1.42 + boost * 40, t, 0.1);
    this.lp.frequency.setTargetAtTime(300 + v * 14 + boost * 900, t, 0.1);
    this.hum.gain.setTargetAtTime(0.09 * a, t, 0.2);
    this.wf.frequency.setTargetAtTime(400 + v * 18, t, 0.2);
    this.wg.gain.setTargetAtTime(Math.min(0.5, v / 160) * a, t, 0.2);
  }
  setDrift(on) { if (this.ctx) this.dg.gain.setTargetAtTime(on ? 0.12 : 0, this.ctx.currentTime, 0.05); }
  _tone(freq, dur, type = 'sine', vol = 0.2, slide = 0) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t); if (slide) o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur);
  }
  _noise(dur, freq, vol) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime, s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = this.noiseBuf; f.type = 'lowpass'; f.frequency.value = freq;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.master); s.start(t); s.stop(t + dur);
  }
  orb() { this._tone(1320 + Math.random() * 200, 0.12, 'triangle', 0.12); this._tone(1980, 0.18, 'sine', 0.06); }
  ring(perfect) { this._tone(520, 0.4, 'sawtooth', 0.08, 2.2); if (perfect) this._tone(1040, 0.5, 'triangle', 0.12, 1.5); }
  boost(f) { this._noise(0.8, 3000, 0.25 + f * 0.2); this._tone(90, 0.7, 'sawtooth', 0.15, 3); }
  near() { this._noise(0.25, 5000, 0.2); }
  scrape() { if (!this._sc || this.ctx.currentTime - this._sc > 0.15) { this._sc = this.ctx?.currentTime; this._noise(0.15, 6000, 0.12); } }
  crash() { this._noise(1.2, 900, 0.8); this._tone(120, 0.8, 'square', 0.2, 0.3); }
}
