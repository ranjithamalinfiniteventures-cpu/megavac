// Touch controls: a floating joystick on the left half, drag-to-look on the right,
// and context buttons that press the same virtual keys as the keyboard.
export const isTouch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;

const BUTTONS = [
  // id, key code, class (position)
  ['tJump', 'Space', 'big'],
  ['tZip', 'KeyE', 'mid a'],
  ['tAct', 'KeyF', 'mid b'],
  ['tThrUp', 'ShiftLeft', 'mid a'],
  ['tThrDn', 'KeyX', 'mid c'],
];

export function setupTouch(root, { key, look, pause }) {
  const st = { f: 0, r: 0, sprint: false };
  root.innerHTML = `
    <div id="tStick"><div id="tKnob"></div></div>
    ${BUTTONS.map(([id, , cls]) => `<button class="tbtn ${cls}" id="${id}"></button>`).join('')}
    <button class="tbtn tiny" id="tPause" aria-label="Pause">II</button>
    <button class="tbtn tiny" id="tTime" aria-label="Skip time">☾</button>`;
  const stick = root.querySelector('#tStick'), knob = root.querySelector('#tKnob');
  const R = 56;
  let joy = null, lk = null;

  for (const [id, code] of BUTTONS) {
    const b = root.querySelector('#' + id);
    const up = e => { e.preventDefault(); key(code, false); b.classList.remove('on'); };
    b.addEventListener('pointerdown', e => {
      e.preventDefault(); e.stopPropagation();
      key(code, true); b.classList.add('on');
      try { b.setPointerCapture(e.pointerId); } catch (err) { /* capture is only a convenience */ }
    });
    b.addEventListener('pointerup', up); b.addEventListener('pointercancel', up); b.addEventListener('lostpointercapture', up);
  }
  const tap = (id, fn) => root.querySelector('#' + id).addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); fn(); });
  tap('tPause', pause);
  tap('tTime', () => { key('KeyT', true); key('KeyT', false); });

  const canvas = document.getElementById('game');
  canvas.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse') return;
    e.preventDefault();
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

  const els = Object.fromEntries(BUTTONS.map(([id]) => [id, root.querySelector('#' + id)]));
  const show = (id, label) => { const b = els[id]; b.hidden = !label; if (label && b.textContent !== label) b.textContent = label; };
  // mode: 'foot' | 'car' | 'plane'; action: label for the F button or ''
  st.update = (mode, action) => {
    show('tJump', mode === 'foot' ? 'JUMP\nWEB' : mode === 'car' ? 'DRIFT' : '');
    show('tZip', mode === 'foot' ? 'ZIP' : '');
    show('tThrUp', mode === 'plane' ? 'THR +' : '');
    show('tThrDn', mode === 'plane' ? 'THR −' : '');
    show('tAct', action);
  };
  return st;
}
