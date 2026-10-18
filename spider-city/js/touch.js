// Touch controls: a floating joystick on the left half, drag-to-look on the right,
// and context buttons that press the same virtual keys as the keyboard.
export const isTouch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;

// id -> virtual key it holds down
const BUTTONS = {
  tJump: 'Space', tZip: 'KeyE', tAct: 'KeyF', tGun: 'KeyQ', tFire: 'Fire',
  tGas: 'KeyW', tBrake: 'KeyS', tThrUp: 'ShiftLeft', tThrDn: 'KeyX',
};
// per mode: [button, slot, label]; a label of '' hides the button
const LAYOUT = {
  foot: (a, gun) => [['tJump', 'big', 'JUMP\nWEB'], ['tZip', 'a', 'ZIP'], ['tAct', 'b', a], ['tGun', 'c', gun ? 'WEB' : 'GUN'], ['tFire', 'd', gun ? 'FIRE' : '']],
  car: a => [['tGas', 'big', 'GAS'], ['tBrake', 'a', 'BRAKE'], ['tJump', 'c', 'DRIFT'], ['tAct', 'b', a]],
  plane: a => [['tFire', 'big', 'FIRE'], ['tThrUp', 'a', 'THR +'], ['tThrDn', 'c', 'THR −'], ['tAct', 'b', a]],
  tank: a => [['tFire', 'big', 'FIRE'], ['tGas', 'a', 'GAS'], ['tBrake', 'c', 'BACK'], ['tAct', 'b', a]],
};

export function setupTouch(root, { key, look, pause }) {
  const st = { f: 0, r: 0, sprint: false };
  root.innerHTML = `
    <div id="tStick"><div id="tKnob"></div></div>
    ${Object.keys(BUTTONS).map(id => `<button class="tbtn" id="${id}" hidden></button>`).join('')}
    <button class="tbtn tiny" id="tTime" aria-label="Skip time">☾</button>
    <button class="tbtn tiny" id="tPause" aria-label="Pause">II</button>
    <button class="tbtn tiny wide" id="tCall">CALL</button>
    <button class="tbtn tiny" id="tSlow">SLOW</button>
    <div id="tCallMenu" hidden>
      <button class="tbtn pill" id="tCallCar">CAR</button>
      <button class="tbtn pill" id="tCallPlane">PLANE</button>
      <button class="tbtn pill" id="tCallTank">TANK</button>
    </div>`;
  const $ = id => root.querySelector('#' + id);
  const stick = $('tStick'), knob = $('tKnob');
  const R = 56;
  let joy = null, lk = null;

  for (const [id, code] of Object.entries(BUTTONS)) {
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
  const menu = $('tCallMenu');
  tap('tCall', () => { menu.hidden = !menu.hidden; });
  tap('tCallCar', () => { press('Digit1'); menu.hidden = true; });
  tap('tCallPlane', () => { press('Digit2'); menu.hidden = true; });
  tap('tCallTank', () => { press('Digit3'); menu.hidden = true; });

  const canvas = document.getElementById('game');
  canvas.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse') return;
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
    const next = new Map(LAYOUT[mode](action, gun).filter(l => l[2]).map(l => [l[0], l]));
    for (const [id, code] of Object.entries(BUTTONS)) {
      const b = $(id), l = next.get(id), slot = l ? 'tbtn slot-' + l[1] + (id === 'tAct' ? ' act' : '') : '';
      // a button that disappears or moves while held would never see its finger lift
      if (b.classList.contains('on') && (!l || !b.className.startsWith(slot))) { key(code, false); b.classList.remove('on'); }
      b.hidden = !l;
      if (l) { const on = b.classList.contains('on'); b.className = slot + (on ? ' on' : ''); b.textContent = l[2]; }
    }
  };
  return st;
}
