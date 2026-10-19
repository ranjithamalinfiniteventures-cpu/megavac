// Touch controls: a floating joystick on the left, drag-to-look on the right, and a
// cluster of big round action buttons around a main button (bottom right), with
// utility buttons stacked above the joystick (bottom left). Buttons press the same
// virtual keys as the keyboard.
// The game is built for phones only: touch controls are always on.
export const isTouch = true;

// id -> [virtual key, colour]
const BUTTONS = {
  tSwing: ['Swing', '#e8243c'], tJump: ['Space', '#2f5bd8'], tZip: ['KeyE', '#3fa7e8'],
  tGun: ['KeyQ', '#7b3fe0'], tFire: ['Fire', '#f06a1a'], tNade: ['KeyG', '#3f8f3a'],
  tGas: ['KeyW', '#27b34a'], tBrake: ['KeyS', '#d8243c'], tDrift: ['Space', '#7b3fe0'], tNitro: ['Nitro', '#f0a01a'],
  tThrUp: ['ShiftLeft', '#27b34a'], tThrDn: ['KeyX', '#d8a020'], tRudL: ['KeyQ', '#3fa7e8'], tRudR: ['KeyE', '#3fa7e8'],
  tAct: ['KeyF', '#3949c8'],
};
// per mode: [button, slot, icon, label]; buttons with no label are hidden
const LAYOUT = {
  foot: (act, gun) => [
    ['tSwing', 'main', '🕸️', 'SWING'], ['tJump', 'a', '⬆️', 'JUMP'], ['tZip', 'b', '🎯', 'WEB'],
    ['tGun', 'c', gun ? '🕸️' : '🔫', gun ? 'WEBS' : 'GUN'], ['tFire', 'd', '💥', gun ? 'FIRE' : ''], ['tNade', 'e', '💣', 'BOMB'],
    ['tAct', 'l3', act[0], act[1]],
  ],
  car: act => [['tGas', 'main', '🏁', 'GAS'], ['tBrake', 'a', '🛑', 'BRAKE'], ['tDrift', 'b', '💨', 'DRIFT'], ['tNitro', 'c', '🔥', 'NITRO'], ['tAct', 'l3', act[0], act[1]]],
  plane: act => [['tFire', 'main', '🚀', 'ROCKET'], ['tThrUp', 'a', '⏫', 'THR +'], ['tThrDn', 'b', '⏬', 'THR −'], ['tRudL', 'd', '↪️', 'LEFT'], ['tRudR', 'c', '↩️', 'RIGHT'], ['tAct', 'l3', act[0], act[1]]],
  tank: act => [['tFire', 'main', '💥', 'FIRE'], ['tGas', 'a', '⬆️', 'GAS'], ['tBrake', 'b', '⬇️', 'BACK'], ['tAct', 'l3', act[0], act[1]]],
};
const ACT = { DRIVE: '🚗', FLY: '✈️', TANK: '🪖', EXIT: '🚪' };

export function setupTouch(root, { key, look, pause }) {
  const st = { f: 0, r: 0, sprint: false, run: false };
  const btn = id => `<button class="tbtn" id="${id}" hidden><i></i><b></b></button>`;
  root.innerHTML = `
    <div id="tStick"><div id="tKnob"></div></div>
    ${Object.keys(BUTTONS).map(btn).join('')}
    <button class="tbtn util slot-l1" id="tCall" style="--c:#27b34a"><i>📱</i><b>PHONE</b></button>
    <button class="tbtn util slot-l2" id="tRun" style="--c:#f0a01a"><i>⚡</i><b>RUN</b></button>
    <button class="tbtn util slot-l4" id="tSlow" style="--c:#3fa7e8"><i>⏳</i><b>SLOW</b></button>
    <button class="tbtn tiny" id="tTime" aria-label="Skip time">☾</button>
    <button class="tbtn tiny" id="tPause" aria-label="Pause">II</button>
    <div id="tCallMenu" hidden>
      <button class="tbtn pill" id="tCallCar" style="--c:#e8243c">🚗 CAR</button>
      <button class="tbtn pill" id="tCallPlane" style="--c:#2f5bd8">✈️ PLANE</button>
      <button class="tbtn pill" id="tCallTank" style="--c:#3f8f3a">🪖 TANK</button>
    </div>`;
  const $ = id => root.querySelector('#' + id);
  for (const [id, [, color]] of Object.entries(BUTTONS)) $(id).style.setProperty('--c', color);
  const stick = $('tStick'), knob = $('tKnob');
  const R = 56;
  let joy = null, lk = null;

  for (const [id, [code]] of Object.entries(BUTTONS)) {
    const b = $(id);
    const up = e => { e.preventDefault(); key(code, false); b.classList.remove('on'); };
    b.addEventListener('pointerdown', e => {
      e.preventDefault(); e.stopPropagation();
      key(code, true); b.classList.add('on');
      try { b.setPointerCapture(e.pointerId); } catch (err) { /* capture is only a convenience */ }
    });
    b.addEventListener('pointerup', up); b.addEventListener('pointercancel', up); b.addEventListener('lostpointercapture', up);
  }
  const tap = (id, fn) => $(id).addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); fn(); });
  const press = code => { key(code, true); key(code, false); };
  tap('tPause', pause);
  tap('tTime', () => press('KeyT'));
  tap('tSlow', () => press('KeyB'));
  tap('tRun', () => { st.run = !st.run; $('tRun').classList.toggle('lit', st.run); });
  const menu = $('tCallMenu');
  tap('tCall', () => { menu.hidden = !menu.hidden; });
  tap('tCallCar', () => { press('Digit1'); menu.hidden = true; });
  tap('tCallPlane', () => { press('Digit2'); menu.hidden = true; });
  tap('tCallTank', () => { press('Digit3'); menu.hidden = true; });

  const canvas = document.getElementById('game');
  canvas.addEventListener('pointerdown', e => {
    e.preventDefault();
    menu.hidden = true;
    if (e.clientX < innerWidth * 0.45 && !joy) {
      joy = { id: e.pointerId, x: e.clientX, y: e.clientY };
      stick.style.left = e.clientX + 'px'; stick.style.top = e.clientY + 'px';
      stick.classList.add('on');
    } else if (!lk) lk = { id: e.pointerId, x: e.clientX, y: e.clientY };
  });
  addEventListener('pointermove', e => {
    if (joy && e.pointerId === joy.id) {
      let dx = e.clientX - joy.x, dy = e.clientY - joy.y;
      const d = Math.hypot(dx, dy);
      if (d > R) { dx *= R / d; dy *= R / d; }
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
      const dead = d < 8 ? 0 : 1;
      st.r = dx / R * dead; st.f = -dy / R * dead;
      st.sprint = d > R * 0.95;
    } else if (lk && e.pointerId === lk.id) {
      look((e.clientX - lk.x) * 1.8, (e.clientY - lk.y) * 1.8);
      lk.x = e.clientX; lk.y = e.clientY;
    }
  }, { passive: true });
  const end = e => {
    if (joy && e.pointerId === joy.id) { joy = null; st.f = st.r = 0; st.sprint = false; knob.style.transform = ''; stick.classList.remove('on'); }
    if (lk && e.pointerId === lk.id) lk = null;
  };
  addEventListener('pointerup', end); addEventListener('pointercancel', end);

  let lastKey = '';
  // mode: 'foot' | 'car' | 'plane' | 'tank'; action: label for the F button or ''
  st.update = (mode, action, gun) => {
    const k = mode + '|' + action + '|' + gun;
    if (k === lastKey) return;
    lastKey = k;
    $('tRun').hidden = mode !== 'foot';
    const next = new Map(LAYOUT[mode]([ACT[action] || '', action], gun).filter(l => l[3]).map(l => [l[0], l]));
    for (const [id, [code]] of Object.entries(BUTTONS)) {
      const b = $(id), l = next.get(id), cls = l ? 'tbtn slot-' + l[1] : '';
      // a button that disappears or moves while held would never see its finger lift
      if (b.classList.contains('on') && (!l || !b.className.startsWith(cls))) { key(code, false); b.classList.remove('on'); }
      b.hidden = !l;
      if (l) { const on = b.classList.contains('on'); b.className = cls + (on ? ' on' : ''); b.firstChild.textContent = l[2]; b.lastChild.textContent = l[3]; }
    }
  };
  return st;
}
