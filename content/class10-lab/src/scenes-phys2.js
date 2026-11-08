'use strict';
/* ===== Chapter 10.10 Electricity & 10.11 Magnetic effects of current ===== */
const MATS = [['Copper', 1.7e-8, [196, 112, 62]], ['Aluminium', 2.8e-8, [190, 198, 208]], ['Iron', 1.0e-7, [120, 126, 138]], ['Nichrome', 1.1e-6, [150, 150, 160]]];
const Area = d => Math.PI * (d / 2) ** 2;
const fmtR = r => r < 10 ? fix(r, 2) : r < 100 ? fix(r, 1) : fix(r, 0);

/* A wire sample drawn as a conductor box with lattice ions and drifting electrons (collisions ∝ resistivity) */
function wireSample(c, x, y, w, h, col, rho, I, t, seed = 0) {
  c.save(); const g = c.createLinearGradient(0, y - h / 2, 0, y + h / 2); g.addColorStop(0, rgb(shade(col, .45))); g.addColorStop(.5, rgb(col)); g.addColorStop(1, rgb(shade(col, -.3))); rr(c, x - w / 2, y - h / 2, w, h, Math.min(10, h / 2)); c.fillStyle = g; c.fill(); c.strokeStyle = 'rgba(0,0,0,.35)'; c.lineWidth = 2; c.stroke(); c.clip();
  const sp = 18, nr = Math.max(1, Math.floor((h - 8) / sp)), nc = Math.floor(w / sp); const dens = clamp(Math.log10(rho / 1e-8 + 1) / 2.1, .15, 1);
  for (let r = 0; r < nr; r++) for (let q = 0; q < nc; q++) { const px = x - w / 2 + sp / 2 + q * sp, py = y - (nr - 1) * sp / 2 + r * sp; const jig = 1 + dens * 3; circle(c, px + Math.sin(t * 5 + q + r * 3) * jig, py + Math.cos(t * 4.4 + q * 2 + r) * jig, 3.8 + dens * 1.6, 'rgba(255,255,255,.55)', 'rgba(60,60,80,.45)', 1); }
  const ne = Math.max(4, Math.floor(nr * nc * .09)); for (let i = 0; i < ne; i++) { const lane = (hash(i + seed) * (h - 16)) - (h - 16) / 2; const sp_ = .3 + I * .02; const pos = ((t * sp_ * 90 * (1 + hash(i * 3)) + hash(i * 7 + seed) * w) % w); const jit = Math.sin(t * 20 * (1 + dens * 2) + i * 5) * (3 + dens * 9); circle(c, x - w / 2 + pos, y + lane + jit, 3, '#38bdf8', '#075985', 1); }
  c.restore();
}
function simpleBattery(c, x, y, V) { battery(c, x, y, 150, 46, V); }

function wireScene(mode) {
  return {
    stages: mode === 'mat' ? MATS.map(m => m[0]) : ['Vary the length', 'Vary the thickness'], dur: 10,
    control: st => mode === 'mat' ? { label: 'Supply voltage', min: 0, max: 6, step: .1, value: 3, unit: 'V', fmt: v => fix(v, 1) + ' V' } : st === 0 ? { label: 'Wire length L', min: 20, max: 150, step: 1, value: 60, unit: 'cm', fmt: v => Math.round(v) + ' cm' } : { label: 'Wire diameter d', min: .2, max: 1.0, step: .02, value: .5, unit: 'mm', fmt: v => fix(v, 2) + ' mm' },
    draw(c, s) {
      labBG(c, { noBench: true }); const { t, v, stage } = s; const st = this.vals(s); const { R, I, V, mat, L, d } = st; const brightness = clamp(I / (mode === 'mat' ? 7 : 1.2), 0, 1);
      const loop = [[110, 450], [110, 200], [890, 200], [890, 450], [110, 450]]; wireFlow(c, loop, t, I > 0 ? clamp(I, .1, 3) * .9 : 0, { col: '#f59e0b', w: 6, close: false, spacing: 30 });
      // sample
      const sw = mode === 'mat' ? 330 : stage === 0 ? 70 + L / 150 * 460 : 380, sh = mode === 'mat' ? 54 : stage === 0 ? 40 : 14 + d / 1.0 * 66;
      rr(c, 500 - sw / 2 - 10, 200 - sh / 2 - 8, sw + 20, sh + 16, 12); c.fillStyle = '#eef2f7'; c.fill(); wireSample(c, 500, 200, sw, sh, mat[2], mat[1], I, t, 3);
      tag(`${mat[0]} wire ${mode === 'mat' ? '(L = 10 m, d = 0.5 mm)' : stage === 0 ? `L = ${Math.round(L)} cm` : `d = ${fix(d, 2)} mm`}`, 500, 200 - sh / 2 - 8, { x: 500, y: 110, col: '#334155' });
      simpleBattery(c, 500, 450, V); gauge(c, 890, 325, 46, I, 0, mode === 'mat' ? 8 : 1.4, 'A', 'ammeter', { d: mode === 'mat' ? 0 : 1 }); gauge(c, 170, 325, 46, V, 0, 6, 'V', 'voltmeter', {});
      c.fillStyle = 'rgba(15,23,42,.88)'; rr(c, 300, 285, 400, 90, 12); c.fill(); text(c, `R = ρL / A = ${fmtR(R)} Ω`, 500, 312, { size: 20, w: 800, col: '#fde68a', font: 'ui-monospace,monospace' }); text(c, `I = V / R = ${fix(I, I < 1 ? 3 : 2)} A`, 500, 344, { size: 17, w: 700, col: '#7dd3fc', font: 'ui-monospace,monospace' });
      text(c, mode === 'mat' ? 'Same length and thickness: current depends on resistivity ρ of the material' : stage === 0 ? 'R ∝ L : doubling the length doubles the resistance' : 'R ∝ 1/A ∝ 1/d² : a thicker wire has less resistance', 500, 36, { size: 16, w: 700, col: '#334155' });
    },
    vals(s) { const mat = mode === 'mat' ? MATS[s.stage] : MATS[3]; const L = mode === 'mat' ? 10 : s.stage === 0 ? s.v / 100 : 1, d = mode === 'mat' ? .5 : s.stage === 0 ? .5 : s.v; const R = mat[1] * (mode === 'mat' ? 10 : L) / Area(d * 1e-3); const V = mode === 'mat' ? s.v : 3; return { R, I: V / R, V, mat, L: mode === 'mat' ? 10 : s.stage === 0 ? s.v : 100, d }; },
    info(s) { const { R, I, V, mat } = this.vals(s); return { obs: mode === 'mat' ? `${mat[0]} has resistivity ρ = ${mat[1].toExponential(1)} Ω·m: ${mat[1] < 5e-8 ? 'a very good conductor, large current.' : mat[1] < 5e-7 ? 'moderate resistance.' : 'a high-resistance alloy, small current (used in heating elements).'}` : 'Electrons collide with the lattice; more collisions over a longer or narrower path means more resistance and less current.', read: [['Resistance R', fmtR(R), 'Ω'], ['Voltage V', fix(V, 1), 'V'], ['Current I', fix(I, I < 1 ? 3 : 2), 'A'], ['ρ', mat[1].toExponential(1), 'Ω·m']] }; }
  };
}
SCENES_REG.materialsresistance = wireScene('mat');
SCENES_REG.wireresistance = wireScene('dim');

/* ---- series & parallel ---- */
const RS = [2, 4, 6];
function seriesScene(kind) {
  return {
    dur: 9, control: { label: 'Supply voltage', min: 1.5, max: 12, step: .5, value: 6, unit: 'V', fmt: v => fix(v, 1) + ' V' },
    draw(c, s) {
      labBG(c, { noBench: true }); const { t, v } = s; const Rt = 12, I = v / Rt; const top = kind === 'v' ? 270 : 230, bot = 460; const loop = [[100, bot], [100, top], [900, top], [900, bot], [100, bot]]; wireFlow(c, loop, t, clamp(I, .1, 2) * .8, { col: '#f59e0b', w: 6, spacing: 30 });
      const xs = kind === 'v' ? [240, 480, 720] : [210, 440, 670]; RS.forEach((R, i) => { resBox(c, xs[i], top, 120, 40, `R${i + 1} = ${R} Ω`, clamp(I * R / 12, 0, 1)); if (kind === 'i') gauge(c, xs[i] + 112, top, 36, I, 0, 2, 'A', `A${i + 1}`, { ticks: 4, d: 1 }); });
      if (kind === 'v') RS.forEach((R, i) => { const vv = I * R, x = xs[i]; gauge(c, x, 130, 42, vv, 0, 12, 'V', `V${i + 1}`, { ticks: 6 }); line(c, x - 60, top, x - 60, 200, '#7c3aed', 2, [4, 4]); line(c, x + 60, top, x + 60, 200, '#7c3aed', 2, [4, 4]); line(c, x - 60, 200, x - 30, 160, '#7c3aed', 2, [4, 4]); line(c, x + 60, 200, x + 30, 160, '#7c3aed', 2, [4, 4]); });
      simpleBattery(c, 500, bot, v); if (kind === 'i') { gauge(c, 840, 345, 40, I, 0, 2, 'A', 'A (main)', { ticks: 4, d: 1 }); }
      c.fillStyle = 'rgba(15,23,42,.88)'; rr(c, 300, kind === 'v' ? 330 : 320, 400, 90, 12); c.fill(); text(c, `R_total = 2 + 4 + 6 = 12 Ω`, 500, (kind === 'v' ? 330 : 320) + 28, { size: 17, w: 800, col: '#fde68a', font: 'ui-monospace,monospace' }); text(c, kind === 'v' ? `${fix(I * 2, 2)} + ${fix(I * 4, 2)} + ${fix(I * 6, 2)} = ${fix(v, 2)} V` : `I = V/R = ${fix(I, 3)} A  (same everywhere)`, 500, (kind === 'v' ? 330 : 320) + 62, { size: 16, w: 700, col: '#7dd3fc', font: 'ui-monospace,monospace' });
      text(c, kind === 'v' ? 'In series the supply voltage divides: V = V₁ + V₂ + V₃, V ∝ R' : 'In series the same current flows through every resistor', 500, 36, { size: 17, w: 700, col: '#334155' });
    },
    info(s) { const I = s.v / 12; return kind === 'v' ? { obs: 'The largest resistor takes the largest share of the voltage; the three voltmeter readings add up to the battery voltage.', read: [['V₁ (2 Ω)', fix(I * 2, 2), 'V'], ['V₂ (4 Ω)', fix(I * 4, 2), 'V'], ['V₃ (6 Ω)', fix(I * 6, 2), 'V'], ['V₁+V₂+V₃', fix(s.v, 2), 'V']] } : { obs: 'All three ammeters show exactly the same current — charge cannot pile up anywhere in a series circuit.', read: [['I at A₁', fix(I, 3), 'A'], ['I at A₂', fix(I, 3), 'A'], ['I at A₃', fix(I, 3), 'A'], ['R_total', '12', 'Ω']] }; }
  };
}
SCENES_REG.seriescurrent = seriesScene('i');
SCENES_REG.seriesvoltage = seriesScene('v');

SCENES_REG.parallelcircuit = {
  dur: 9, control: { label: 'Supply voltage', min: 1.5, max: 12, step: .5, value: 6, unit: 'V', fmt: v => fix(v, 1) + ' V' },
  draw(c, s) {
    labBG(c, { noBench: true }); const { t, v } = s; const R = [6, 12, 4], I = R.map(r => v / r), It = I[0] + I[1] + I[2]; const top = 200, bot = 460, bx = [330, 550, 770]; const base = '#3b4a63';
    const segs = [[[[110, bot], [110, top], [bx[0], top]], It], [[[bx[0], top], [bx[1], top]], I[1] + I[2]], [[[bx[1], top], [bx[2], top]], I[2]], [[[bx[2], bot], [bx[1], bot]], I[2]], [[[bx[1], bot], [bx[0], bot]], I[1] + I[2]], [[[bx[0], bot], [110, bot]], It]];
    segs.forEach(([p]) => { poly(c, p, false); c.strokeStyle = base; c.lineWidth = 6; c.lineCap = 'round'; c.lineJoin = 'round'; c.stroke(); poly(c, p, false); c.strokeStyle = '#cbd5e1'; c.lineWidth = 3; c.stroke(); }); bx.forEach((x, i) => { const p = [[x, top], [x, bot]]; poly(c, p, false); c.strokeStyle = base; c.lineWidth = 6; c.stroke(); poly(c, p, false); c.strokeStyle = '#cbd5e1'; c.lineWidth = 3; c.stroke(); });
    segs.forEach(([p, cur]) => wireFlow(c, p, t, cur / 6 * 1.3, { noWire: true, col: '#f59e0b', spacing: 30 })); bx.forEach((x, i) => wireFlow(c, [[x, top], [x, bot]], t, I[i] / 6 * 1.3, { noWire: true, col: '#f59e0b', spacing: 30 }));
    bx.forEach((x, i) => { resBox(c, x, 330, 108, 36, `R${i + 1} = ${R[i]} Ω`, clamp(I[i] / 3, 0, 1), true); gauge(c, x, 256, 30, I[i], 0, 4, 'A', `A${i + 1}`, { ticks: 4, d: 0 }); });
    simpleBattery(c, 110, 330, v); c.save(); c.translate(110, 330); c.restore(); gauge(c, 220, 120, 40, It, 0, 8, 'A', 'A (total)', { ticks: 4, d: 0 });
    c.fillStyle = 'rgba(15,23,42,.88)'; rr(c, 330, 90, 460, 62, 12); c.fill(); text(c, `1/R = 1/6 + 1/12 + 1/4 = 1/2  →  R = 2 Ω`, 560, 112, { size: 15, w: 800, col: '#fde68a', font: 'ui-monospace,monospace' }); text(c, `I = ${fix(I[0], 2)} + ${fix(I[1], 2)} + ${fix(I[2], 2)} = ${fix(It, 2)} A`, 560, 138, { size: 15, w: 700, col: '#7dd3fc', font: 'ui-monospace,monospace' });
    text(c, 'Parallel: same voltage across every branch; currents add up', 500, 36, { size: 17, w: 700, col: '#334155' }); text(c, `V = ${fix(v, 1)} V across each`, 560, 510, { size: 14, w: 800, col: '#7c3aed' });
  },
  info(s) { const R = [6, 12, 4], I = R.map(r => s.v / r), It = I[0] + I[1] + I[2]; return { obs: 'Each branch has the full supply voltage; the smallest resistor carries the biggest current, and the branch currents add up to the total.', read: [['I₁ (6 Ω)', fix(I[0], 2), 'A'], ['I₂ (12 Ω)', fix(I[1], 2), 'A'], ['I₃ (4 Ω)', fix(I[2], 2), 'A'], ['I total', fix(It, 2), 'A']] }; }
};

/* ---- magnetism ---- */
const dipole = (cx, cy, L) => (x, y) => { const f = (px, py, q) => { const dx = x - px, dy = y - py, r2 = dx * dx + dy * dy + 500; const r = Math.sqrt(r2); return [q * dx / (r2 * r), q * dy / (r2 * r)]; }; const a = f(cx - L, cy, 1), b = f(cx + L, cy, -1); return [a[0] + b[0], a[1] + b[1]]; };
function barMagnet(c, cx, cy, w = 240, h = 54) { const g1 = c.createLinearGradient(0, cy - h / 2, 0, cy + h / 2); const half = w / 2; [[cx - half, '#ef4444', 'N'], [cx, '#3b82f6', 'S']].forEach(([x0, col, lab]) => { const g = c.createLinearGradient(0, cy - h / 2, 0, cy + h / 2); g.addColorStop(0, rgb(shade(col === '#ef4444' ? [239, 68, 68] : [59, 130, 246], .35))); g.addColorStop(1, rgb(shade(col === '#ef4444' ? [239, 68, 68] : [59, 130, 246], -.2))); c.fillStyle = g; c.fillRect(x0, cy - h / 2, half, h); text(c, lab, x0 + half / 2, cy, { size: 26, w: 900, col: '#fff' }); }); c.strokeStyle = 'rgba(0,0,0,.4)'; c.lineWidth = 2; c.strokeRect(cx - half, cy - h / 2, w, h); }
function compass(c, x, y, ang, r = 20) { c.save(); circle(c, x, y, r + 3, '#e2e8f0', '#475569', 2); circle(c, x, y, r, '#fff', '#94a3b8', 1); c.translate(x, y); c.rotate(ang); c.fillStyle = '#dc2626'; poly(c, [[r - 2, 0], [0, -5], [0, 5]]); c.fill(); c.fillStyle = '#e5e7eb'; poly(c, [[-r + 2, 0], [0, -5], [0, 5]]); c.fill(); c.strokeStyle = '#64748b'; c.lineWidth = 1; c.stroke(); circle(c, 0, 0, 2.5, '#111'); c.restore(); }

SCENES_REG.oersted = {
  dur: 10, control: { label: 'Current in the wire', min: -5, max: 5, step: .1, value: 0, unit: 'A', fmt: v => (v > 0 ? '+' : '') + fix(v, 1) + ' A' },
  draw(c, s) {
    labBG(c, { noBench: true, top: '#f3f6fb', bot: '#e3eaf4' }); const { t, v } = s; const cx0 = 500, cy0 = 300; rr(c, 190, 80, 620, 440, 18); c.fillStyle = 'rgba(214,190,150,.55)'; c.fill(); c.strokeStyle = '#a98a5a'; c.lineWidth = 3; c.stroke();
    const I = v, k = 55;
    for (const R of [60, 100, 140, 180, 215]) { if (Math.abs(I) > .05) { const pts = []; for (let i = 0; i <= 80; i++) { const a = i / 80 * TAU * (I > 0 ? -1 : 1); pts.push([cx0 + Math.cos(a) * R, cy0 + Math.sin(a) * R]); } flowLine(c, pts, t * (I > 0 ? 1 : 1), '#6366f1', 1.5, { alpha: clamp(Math.abs(I) / 5 * 1.3, .15, .85) * (1 - R / 330), every: 160 }); } else circle(c, cx0, cy0, R, null, 'rgba(99,102,241,.1)', 1); }
    // iron filings
    for (let i = 0; i < 360; i++) { const R = 30 + hash(i * 2) * 195, a = hash(i * 5 + 1) * TAU, x = cx0 + Math.cos(a) * R, y = cy0 + Math.sin(a) * R; const al = clamp(Math.abs(I) * 70 / R, 0, 1) * .8; const ang = Math.abs(I) > .05 ? a + Math.PI / 2 : hash(i * 3) * TAU; c.save(); c.translate(x, y); c.rotate(lerp(hash(i * 3) * TAU, ang, clamp(Math.abs(I) / 1.5, 0, 1))); c.strokeStyle = `rgba(30,30,40,${.25 + al * .5})`; c.lineWidth = 1.8; c.beginPath(); c.moveTo(-5, 0); c.lineTo(5, 0); c.stroke(); c.restore(); }
    // compass ring
    for (let i = 0; i < 8; i++) { const a = i / 8 * TAU, px = cx0 + Math.cos(a) * 118, py = cy0 + Math.sin(a) * 118; const dx = px - cx0, dy = py - cy0, r = Math.hypot(dx, dy); const bw = I * k / r * 3.2; const Bx = bw * dy / r, By = -bw * dx / r; const ang = Math.atan2(By - 1, Bx); compass(c, px, py, ang, 19); }
    // wire
    circle(c, cx0, cy0, 22, '#b45309', '#78350f', 3); circle(c, cx0, cy0, 15, '#f59e0b'); if (Math.abs(I) > .05) { if (I > 0) circle(c, cx0, cy0, 5, '#111'); else { c.strokeStyle = '#111'; c.lineWidth = 3; c.beginPath(); c.moveTo(cx0 - 6, cy0 - 6); c.lineTo(cx0 + 6, cy0 + 6); c.moveTo(cx0 + 6, cy0 - 6); c.lineTo(cx0 - 6, cy0 + 6); c.stroke(); } }
    tag(Math.abs(I) < .05 ? 'No current: all needles point north' : I > 0 ? 'Current out of page (⊙): needles circulate anticlockwise' : 'Current into page (⊗): needles circulate clockwise', cx0, cy0, { x: 500, y: 62, col: '#334155', line: false });
    text(c, 'N', 500, 98, { size: 14, w: 900, col: '#b91c1c' }); text(c, 'Top view: straight wire through cardboard with compass needles around it', 500, 36 - 12, { size: 15, w: 700, col: '#334155' });
    // right-hand rule card
    c.save(); c.fillStyle = 'rgba(255,255,255,.9)'; rr(c, 30, 330, 150, 150, 14); c.fill(); c.strokeStyle = '#c7d2fe'; c.stroke(); text(c, 'Right-hand thumb rule', 105, 352, { size: 11, w: 800, col: '#4338ca' }); arrow(c, 105, 460, 105, 385, '#dc2626', 5, 12); text(c, 'I', 124, 395, { size: 14, w: 900, col: '#dc2626' }); for (let i = 0; i < 3; i++) { c.strokeStyle = '#6366f1'; c.lineWidth = 3; c.beginPath(); c.ellipse(105, 420 + i * 12, 38, 9, 0, .2, Math.PI * 1.6); c.stroke(); } text(c, 'thumb ∥ I', 105, 474, { size: 10, col: '#475569' }); text(c, 'curled fingers = B', 105, 487, { size: 10, col: '#475569' }); c.restore();
  },
  info(s) { const I = s.v; const B = Math.abs(I) * 2e-7 / .05 * 1e6; return { obs: Math.abs(I) < .05 ? 'With no current the needles ignore the wire and align with Earth\'s field.' : 'A current deflects the needles into circles around the wire. Reversing the current reverses the deflection; a bigger current gives a stronger field.', read: [['Current', fix(I, 1), 'A'], ['Field at 5 cm', fix(B, 1), 'µT'], ['Direction', Math.abs(I) < .05 ? '—' : I > 0 ? 'anticlockwise' : 'clockwise', ''], ['Field ∝', 'I / r', '']] }; }
};

SCENES_REG.magnetfilings = {
  stages: ['Iron filings', 'Field lines'], dur: 9,
  control: { label: 'Tapping the card', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    labBG(c, { noBench: true, top: '#f7f8fb', bot: '#e9edf5' }); const { t, u, stage } = s; const cx0 = 500, cy0 = 300, L = 105, B = dipole(cx0, cy0, L); rr(c, 90, 90, 820, 420, 14); c.fillStyle = 'rgba(255,255,255,.85)'; c.fill(); c.strokeStyle = '#cbd5e1'; c.lineWidth = 2; c.stroke();
    if (stage === 0) { for (let gx = 110; gx < 890; gx += 16) for (let gy = 105; gy < 500; gy += 16) { const x = gx + (hash(gx * 3 + gy) - .5) * 8, y = gy + (hash(gx + gy * 7) - .5) * 8; if (Math.abs(x - cx0) < 125 && Math.abs(y - cy0) < 29) continue; const [bx, by] = B(x, y), m = Math.hypot(bx, by), str = clamp(Math.sqrt(m) * 70, 0, 1); const fa = Math.atan2(by, bx); const al = clamp((u * 1.6 - (1 - str) * .6), 0, 1); const ang = lerp(hash(gx * 11 + gy * 5) * TAU, fa, al); c.save(); c.translate(x + Math.sin(t * 30 + gx) * (1 - al) * 1.2 * (u > 0 && u < 1 ? 1 : 0), y); c.rotate(ang); c.strokeStyle = `rgba(35,38,52,${.25 + .6 * Math.max(al * str, .08 + .3 * al)})`; c.lineWidth = 1.7; c.beginPath(); c.moveTo(-5.5, 0); c.lineTo(5.5, 0); c.stroke(); c.restore(); } barMagnet(c, cx0, cy0, 210, 54); tag('Iron filings crowd near the poles (strongest field)', cx0 - 105, cy0 - 40, { x: 300, y: 130, col: '#334155' }); tag('Fewer filings far away: field is weaker', 800, 460, { x: 770, y: 470, col: '#334155', line: false });
    } else { barMagnet(c, cx0, cy0, 210, 54); const stopS = (x, y) => Math.hypot(x - (cx0 + L), y - cy0) < 12; for (let k = 0; k < 11; k++) { const a = Math.PI * (.62 + k * .076); const st = [cx0 - L + Math.cos(a) * 16, cy0 + Math.sin(a) * 16]; flowLine(c, traceLine(B, st[0], st[1], 900, 3.4, 1, stopS), t, '#4f46e5', 2, { every: 150 }); } flowLine(c, [[cx0 - L, cy0], [110, cy0]], t, '#4f46e5', 0, { every: 150, alpha: 0 }); tag('Field lines leave the N pole and enter the S pole', cx0 - 105, cy0 - 30, { x: 300, y: 120, col: '#334155' }); tag('Closer lines = stronger field', cx0 - L - 20, cy0 + 20, { x: 200, y: 450, col: '#334155' }); tag('Lines never cross', 640, 190, { x: 740, y: 140, col: '#334155' }); }
    text(c, stage === 0 ? 'Sprinkle iron filings on a card over a bar magnet and tap it gently' : 'Magnetic field lines of a bar magnet (outside: N → S, inside: S → N)', 500, 36, { size: 16, w: 700, col: '#334155' });
  },
  info(s) { return s.stage === 0 ? { obs: s.u < .1 ? 'Filings are scattered at random on the card.' : 'Tapping lets each filing act as a tiny compass needle and rotate along the local field — a pattern of curved lines appears between the poles.', read: [['Taps', Math.round(s.u * 30), ''], ['Alignment', fix(clamp(s.u * 1.6, 0, 1) * 100, 0), '%'], ['Strongest at', 'the poles', '']] } : { obs: 'Field lines are closed curves, never intersect, crowd together where the field is strong (poles).', read: [['Lines drawn', 12, ''], ['Direction outside', 'N → S', ''], ['Direction inside', 'S → N', '']] }; }
};

SCENES_REG.compasstrace = {
  dur: 12, control: { label: 'Compass position along the line', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    labBG(c, { noBench: true, top: '#f9fafc', bot: '#e9edf5' }); const { t, u } = s; const cx0 = 500, cy0 = 270, L = 105, B = dipole(cx0, cy0, L); rr(c, 100, 60, 800, 440, 16); c.fillStyle = '#fff'; c.fill(); c.strokeStyle = '#cbd5e1'; c.lineWidth = 3; c.stroke();
    const line_ = traceLine(B, cx0 - L - 6, cy0 - 38, 600, 3, 1).filter((p, i) => i % 1 === 0); const len = pathLen(line_), d = u * len; barMagnet(c, cx0, cy0, 210, 54);
    // pencil dots every 5%
    const n = Math.floor(u * 20); for (let i = 0; i <= n; i++) { const [x, y] = pathAt(line_, i / 20 * len); circle(c, x, y, 3.2, '#1e293b'); }
    // connected curve up to current
    c.save(); c.strokeStyle = 'rgba(30,41,59,.5)'; c.lineWidth = 1.6; c.beginPath(); let started = false; const stepN = 60; for (let i = 0; i <= stepN * u; i++) { const [x, y] = pathAt(line_, i / stepN * len); started ? c.lineTo(x, y) : c.moveTo(x, y); started = true; } c.stroke(); c.restore();
    const [px, py, a] = pathAt(line_, d); const [nx, ny] = pathAt(line_, Math.min(len - 1, d + 3)); compass(c, px, py, Math.atan2(ny - py, nx - px), 22); tag('Compass needle is always tangent to the field line', px, py, { x: 760, y: 130, col: '#334155' }); tag('Mark both ends of the needle with a pencil, then move it', 300, 440, { x: 300, y: 465, col: '#475569', line: false });
    text(c, 'Tracing a magnetic field line with a compass needle', 500, 36, { size: 17, w: 700, col: '#334155' });
  },
  info(s) { return { obs: 'The compass is moved so that one end sits on the previous dot; the dots join to make one smooth, closed field line from N to S.', read: [['Dots marked', Math.floor(s.u * 20) + 1, ''], ['Line traced', fix(s.u * 100, 0), '%'], ['Needle', 'tangent to B', ''], ['Direction', 'N → S (outside)', '']] }; }
};

let _coilCache = null;
function coilField() { if (_coilCache) return _coilCache; const R = 90, cx = 500, cy = 290, N = 48; const B = (x, y) => { let bx = 0, by = 0; for (let i = 0; i < N; i++) { const th = i / N * TAU, a = -R * Math.sin(th), b = R * Math.cos(th); const rx = x - cx, ry = y - (cy + R * Math.cos(th)), rz = -R * Math.sin(th) * -1 * 0 - R * Math.sin(th); const r2 = rx * rx + ry * ry + rz * rz + 30, r3 = r2 * Math.sqrt(r2); bx += (a * rz - b * ry) / r3; by += (b * rx) / r3; } return [bx, by]; }; const lines = []; for (const off of [8, 25, 45, 62, 78, 105, 135, 170]) { const l = traceLine(B, cx, cy - off, 900, 4, 1); lines.push(l); const l2 = traceLine(B, cx, cy + off, 900, 4, 1); lines.push(l2); } lines.push([[cx - 330, cy], [cx + 330, cy]]); _coilCache = { lines, B }; return _coilCache; }
SCENES_REG.circularcoil = {
  dur: 10, control: { label: 'Current strength I', min: 1, max: 10, step: .1, value: 3, unit: 'A', fmt: v => fix(v, 1) + ' A' },
  draw(c, s) {
    labBG(c, { noBench: true, top: '#f5f6fb', bot: '#e5e9f4' }); const { t, v } = s; const { lines } = coilField(); const cx0 = 500, cy0 = 290, R = 90;
    lines.forEach((l, i) => { if (i === lines.length - 1) { flowLine(c, [[cx0 - 320, cy0], [cx0 + 320, cy0]], t, '#4f46e5', 2.4, { every: 120, alpha: .9 }); return; } flowLine(c, l, t, '#6366f1', 1.5 + v / 10, { every: 170, alpha: .35 + v / 10 * .5 }); });
    // coil: edge-on ring with wires
    c.save(); c.lineWidth = 12; c.strokeStyle = '#92400e'; c.beginPath(); c.ellipse(cx0, cy0, 22, R, 0, 0, TAU); c.stroke(); c.lineWidth = 7; c.strokeStyle = '#f59e0b'; c.beginPath(); c.ellipse(cx0, cy0, 22, R, 0, 0, TAU); c.stroke(); c.restore();
    for (let i = 0; i < 10; i++) { const a = ((t * .6 * (v / 5) + i / 10) % 1) * TAU; circle(c, cx0 + Math.cos(a) * 22, cy0 + Math.sin(a) * R, 3.4, '#fff', '#78350f', 1); }
    circle(c, cx0, cy0 - R, 11, '#fff', '#0f172a', 2); c.strokeStyle = '#0f172a'; c.lineWidth = 2.5; c.beginPath(); c.moveTo(cx0 - 6, cy0 - R - 6); c.lineTo(cx0 + 6, cy0 - R + 6); c.moveTo(cx0 + 6, cy0 - R - 6); c.lineTo(cx0 - 6, cy0 - R + 6); c.stroke(); circle(c, cx0, cy0 + R, 11, '#fff', '#0f172a', 2); circle(c, cx0, cy0 + R, 3.5, '#0f172a');
    tag('Current into page (⊗)', cx0, cy0 - R, { x: 250, y: 150, col: '#334155' }); tag('Current out of page (⊙)', cx0, cy0 + R, { x: 250, y: 440, col: '#334155' }); tag('Field is straight and strongest at the centre', cx0, cy0, { x: 780, y: 150, col: '#4338ca' }); tag('Concentric loops become larger circles far from the wire', 380, 130, { x: 330, y: 80, col: '#4338ca', line: false });
    c.save(); c.fillStyle = 'rgba(255,255,255,.92)'; rr(c, 30, 380, 170, 130, 12); c.fill(); c.strokeStyle = '#c7d2fe'; c.stroke(); text(c, 'Clock-face rule', 115, 400, { size: 11, w: 800, col: '#4338ca' }); text(c, 'anticlockwise = N pole', 115, 425, { size: 10.5, col: '#475569' }); text(c, 'clockwise = S pole', 115, 445, { size: 10.5, col: '#475569' }); circle(c, 115, 482, 14, null, '#dc2626', 3); c.restore();
    text(c, 'Magnetic field of a circular current loop:  B = μ₀ N I / 2R', 500, 36, { size: 16, w: 700, col: '#334155' });
  },
  info(s) { const B = 4 * Math.PI * 1e-7 * 10 * s.v / (2 * .05) * 1e3; return { obs: 'Near the wire the lines are circles; at the centre of the loop they are nearly straight and strongest. A larger current multiplies the field.', read: [['Current', fix(s.v, 1), 'A'], ['Turns N', '10', ''], ['Radius R', '5', 'cm'], ['B at centre', fix(B, 2), 'mT']] }; }
};

SCENES_REG.motorforce = {
  dur: 10, control: { label: 'Current in the rod', min: -5, max: 5, step: .1, value: 0, unit: 'A', fmt: v => (v > 0 ? '+' : '') + fix(v, 1) + ' A' },
  draw(c, s) {
    labBG(c, { noBench: true, top: '#f6f7fb', bot: '#e6eaf4' }); const { t, v } = s; const I = v; const disp = damp('mf', -I * 22, s.dt, 8); const rx = 500 + disp;
    // magnet poles: N on top view? show field into page with dots region
    rr(c, 300, 140, 400, 300, 16); c.fillStyle = 'rgba(99,102,241,.07)'; c.fill(); c.strokeStyle = 'rgba(99,102,241,.4)'; c.setLineDash([8, 6]); c.stroke(); c.setLineDash([]);
    for (let x = 330; x <= 670; x += 50) for (let y = 170; y <= 410; y += 50) { circle(c, x, y, 9, null, 'rgba(79,70,229,.55)', 1.6); c.strokeStyle = 'rgba(79,70,229,.55)'; c.lineWidth = 1.6; c.beginPath(); c.moveTo(x - 4, y - 4); c.lineTo(x + 4, y + 4); c.moveTo(x + 4, y - 4); c.lineTo(x - 4, y + 4); c.stroke(); }
    // rails
    c.fillStyle = '#94a3b8'; rr(c, 130, 190, 700, 10, 4); c.fill(); rr(c, 130, 380, 700, 10, 4); c.fill();
    // rod
    const rg = c.createLinearGradient(rx - 8, 0, rx + 8, 0); rg.addColorStop(0, '#78350f'); rg.addColorStop(.5, '#f59e0b'); rg.addColorStop(1, '#78350f'); c.fillStyle = rg; rr(c, rx - 8, 180, 16, 220, 6); c.fill(); c.strokeStyle = '#451a03'; c.lineWidth = 2; c.stroke();
    // springs / supports
    c.strokeStyle = '#64748b'; c.lineWidth = 3; c.beginPath(); c.moveTo(150, 290); for (let i = 0; i < 14; i++) c.lineTo(160 + (rx - 20 - 160) * (i + .5) / 14, 290 + (i % 2 ? 14 : -14)); c.lineTo(rx - 8, 290); c.stroke(); c.fillStyle = '#334155'; c.fillRect(140, 250, 12, 80);
    // battery wires
    const cur = I; wireFlow(c, [[130, 195], [90, 195], [90, 385], [130, 385]], t, I * .5, { col: '#f59e0b', w: 4, spacing: 26 }); battery(c, 90, 290, 110, 38, Math.abs(I) * 2); c.save(); c.translate(90, 290); c.restore();
    // current direction arrows along rod
    if (Math.abs(I) > .05) { const dir = I > 0 ? -1 : 1; for (let i = 0; i < 3; i++) arrow(c, rx + 22, 240 + i * 55 - (dir < 0 ? 0 : 0), rx + 22, 240 + i * 55 + dir * 30, '#dc2626', 3, 9); arrow(c, rx, 290, rx + (I > 0 ? -1 : 1) * Math.min(130, Math.abs(I) * 26 + 20), 290, '#16a34a', 6, 16); text(c, 'F', rx + (I > 0 ? -1 : 1) * (Math.min(130, Math.abs(I) * 26 + 20) + 16), 275, { size: 18, w: 900, col: '#15803d' }); }
    tag('Field B into page (⊗)', 640, 170, { x: 790, y: 120, col: '#4338ca' }); tag(Math.abs(I) < .05 ? 'No current: no force' : I > 0 ? 'Current I upwards' : 'Current I downwards', rx, 220, { x: 790, y: 440, col: '#b91c1c' }); tag('F = B I L sin 90°', rx, 330, { x: 300, y: 470, col: '#15803d', line: false });
    c.save(); c.fillStyle = 'rgba(255,255,255,.92)'; rr(c, 24, 80, 170, 80, 12); c.fill(); c.strokeStyle = '#c7d2fe'; c.stroke(); text(c, "Fleming's left-hand rule", 109, 98, { size: 11, w: 800, col: '#4338ca' }); text(c, 'Forefinger → field  B', 109, 118, { size: 10.5, col: '#475569' }); text(c, 'Middle finger → current I', 109, 134, { size: 10.5, col: '#475569' }); text(c, 'Thumb → force F', 109, 150, { size: 10.5, col: '#475569' }); c.restore();
    text(c, 'A current-carrying conductor in a magnetic field feels a force', 500, 36, { size: 17, w: 700, col: '#334155' });
  },
  info(s) { const F = 0.4 * Math.abs(s.v) * 0.1; return { obs: Math.abs(s.v) < .05 ? 'No current — the rod stays at rest.' : `The rod is pushed ${s.v > 0 ? 'to the left' : 'to the right'}. Reversing the current (or the field) reverses the force; a bigger current gives a bigger force.`, read: [['Current', fix(s.v, 1), 'A'], ['Force F', fix(Math.abs(s.v) * .4 * .1, 3), 'N'], ['Direction', Math.abs(s.v) < .05 ? '—' : s.v > 0 ? 'left' : 'right', ''], ['B = 0.4 T, L = 0.1 m', 'F = BIL', '']] }; }
};

SCENES_REG.magnetinduction = {
  dur: 12, control: { label: 'Magnet speed (+ in, − out)', min: -5, max: 5, step: .1, value: 0, unit: 'cm/s', fmt: v => (v > 0 ? '+' : '') + fix(v, 1) },
  draw(c, s) {
    labBG(c, { noBench: true, top: '#f6f7fb', bot: '#e6eaf4' }); const { t, v, dt } = s; if (s.t < .05) damped.mph = 0; damped.mph = (damped.mph || 0) + v * dt * .9; const ph = damped.mph; const xm = 330 + 150 * Math.sin(ph), xd = 150 * Math.cos(ph) * v * .9; // px/s
    const cxC = 640, cyC = 290; const nose = xm + 100, flux = x => Math.exp(-Math.pow((x - cxC) / 120, 2)); const dFdx = -2 * (nose - cxC) / (120 * 120) * flux(nose); const emf = -dFdx * xd * 420; const galvT = damp('gv', clamp(emf / 4, -1, 1), dt, 10);
    // coil (solenoid side view)
    for (let i = 0; i < 9; i++) { const x = cxC - 80 + i * 20; c.strokeStyle = '#92400e'; c.lineWidth = 9; c.beginPath(); c.ellipse(x, cyC, 10, 62, 0, 0, TAU); c.stroke(); c.strokeStyle = '#f59e0b'; c.lineWidth = 5; c.beginPath(); c.ellipse(x, cyC, 10, 62, 0, 0, TAU); c.stroke(); }
    // field lines of magnet
    const B = dipole(xm, cyC, 70); for (const off of [20, 40, 65, 95]) for (const sd of [-1, 1]) flowLine(c, traceLine(B, xm - 74, cyC + sd * off * .35, 300, 4, 1), t, 'rgba(79,70,229,.8)', 1.3, { every: 200, alpha: .55 });
    barMagnet(c, xm - 0, cyC, 200, 52);
    // wires to galvanometer
    wireFlow(c, [[cxC + 90, cyC + 62], [cxC + 90, 460], [800, 460], [800, 390]], t, clamp(emf / 4, -1, 1) * 1.4, { col: '#f59e0b', w: 4, spacing: 26 }); wireFlow(c, [[cxC - 90, cyC + 62], [cxC - 90, 500], [880, 500], [880, 390]], t, clamp(emf / 4, -1, 1) * 1.4, { col: '#f59e0b', w: 4, spacing: 26 });
    galv(c, 840, 340, 56, galvT); text(c, 'Galvanometer', 840, 424, { size: 12, col: '#475569' }); text(c, Math.abs(galvT) < .04 ? 'no deflection' : galvT > 0 ? 'deflects right' : 'deflects left', 840, 440, { size: 12, w: 800, col: Math.abs(galvT) < .04 ? '#64748b' : '#b91c1c' });
    tag('Bar magnet', xm, cyC - 28, { x: 250, y: 130, col: '#334155' }); tag('Coil of many turns', cxC, cyC - 62, { x: 700, y: 120, col: '#92400e' }); tag(Math.abs(v) < .05 ? 'Magnet at rest → no EMF' : Math.abs(emf) < .15 ? 'Flux changing slowly' : 'Changing flux induces EMF', cxC, cyC, { x: 500, y: 470, col: '#334155', line: false });
    text(c, 'Faraday: induced EMF = −N dΦ/dt — a moving magnet induces a current (Lenz\'s law gives its direction)', 500, 36, { size: 15, w: 700, col: '#334155' });
    damped.emfNow = emf;
  },
  info(s) { const emf = damped.emfNow || 0; return { obs: Math.abs(s.v) < .05 ? 'Nothing happens when the magnet is stationary, even inside the coil.' : 'The galvanometer needle deflects only while the magnet moves. Faster motion → larger deflection; reversing the motion reverses the deflection.', read: [['Magnet speed', fix(Math.abs(s.v), 1), 'cm/s'], ['Induced EMF', fix(Math.abs(emf) * 1.2, 2), 'mV'], ['Deflection', Math.abs(emf) < .15 ? 'zero' : emf > 0 ? 'right' : 'left', ''], ['Needs', 'changing flux', '']] }; }
};

SCENES_REG.mutualinduction = {
  dur: 12, control: { label: 'Primary current change rate', min: -5, max: 5, step: .1, value: 0, unit: 'A/s', fmt: v => (v > 0 ? '+' : '') + fix(v, 1) },
  draw(c, s) {
    labBG(c, { noBench: true, top: '#f6f7fb', bot: '#e6eaf4' }); const { t, v, dt } = s; if (s.t < .05) damped.i1 = 2.5; let I1 = damped.i1 ?? 2.5; const nxt = clamp(I1 + v * dt * .8, 0, 5); const rate = dt > 0 ? (nxt - I1) / dt / .8 : 0; damped.i1 = nxt; I1 = nxt; const emf = -rate; const gT = damp('g2', clamp(emf / 5, -1, 1), dt, 10);
    // coils
    const coil = (x, col) => { for (let i = 0; i < 9; i++) { const xx = x - 80 + i * 20; c.strokeStyle = '#78350f'; c.lineWidth = 9; c.beginPath(); c.ellipse(xx, 270, 10, 62, 0, 0, TAU); c.stroke(); c.strokeStyle = col; c.lineWidth = 5; c.beginPath(); c.ellipse(xx, 270, 10, 62, 0, 0, TAU); c.stroke(); } };
    // field between coils (strength ~ I1)
    const B = dipole(300, 270, 85); for (const off of [20, 45, 70, 100]) for (const sd of [-1, 1]) flowLine(c, traceLine(B, 215, 270 + sd * off * .3, 260, 4, 1), t, 'rgba(79,70,229,.8)', 1.4, { every: 180, alpha: .15 + I1 / 5 * .5 });
    coil(300, '#ef4444'); coil(640, '#3b82f6'); text(c, 'Primary coil', 300, 360, { size: 14, w: 800, col: '#b91c1c' }); text(c, 'Secondary coil', 640, 360, { size: 14, w: 800, col: '#1d4ed8' });
    // primary circuit
    wireFlow(c, [[230, 330], [230, 440], [160, 440], [160, 200], [230, 200], [230, 210]], t, I1 / 5 * 1.2, { col: '#f59e0b', w: 4, spacing: 26 }); wireFlow(c, [[370, 330], [370, 440], [420, 440], [420, 200], [370, 200]], t, I1 / 5 * 1.2, { col: '#f59e0b', w: 4, spacing: 26 }); battery(c, 290, 440, 100, 34, 6); c.fillStyle = '#fff'; rr(c, 150, 280, 20, 36, 4); c.fill();
    // rheostat
    c.fillStyle = '#d1d5db'; rr(c, 120, 100, 200, 34, 8); c.fill(); c.strokeStyle = '#6b7280'; c.stroke(); for (let i = 0; i < 18; i++) { c.strokeStyle = '#9ca3af'; c.beginPath(); c.moveTo(128 + i * 10.5, 106); c.lineTo(128 + i * 10.5, 128); c.stroke(); } const sl = 128 + (1 - I1 / 5) * 180; c.fillStyle = '#ef4444'; rr(c, sl - 6, 90, 12, 18, 3); c.fill(); text(c, 'Rheostat', 220, 84, { size: 12, col: '#475569' });
    gauge(c, 480, 150, 42, I1, 0, 5, 'A', 'primary I₁', { ticks: 5, d: 0 });
    // secondary circuit
    wireFlow(c, [[570, 330], [570, 470], [840, 470], [840, 380]], t, clamp(emf / 5, -1, 1) * 1.4, { col: '#f59e0b', w: 4, spacing: 26 }); wireFlow(c, [[710, 330], [710, 420], [760, 420], [760, 340]], t, clamp(emf / 5, -1, 1) * 1.4, { col: '#f59e0b', w: 4, spacing: 26 }); galv(c, 800, 300, 52, gT); text(c, 'Galvanometer', 800, 372, { size: 12, col: '#475569' });
    tag(Math.abs(rate) < .05 ? 'Steady current → constant flux → no induced EMF' : rate > 0 ? 'Current increasing → flux increasing → EMF induced' : 'Current decreasing → flux decreasing → EMF induced (opposite)', 470, 270, { x: 500, y: 500, col: '#334155', line: false });
    text(c, 'Mutual induction: ε₂ = −M dI₁/dt — a changing current in one coil induces EMF in the neighbouring coil', 500, 36, { size: 15, w: 700, col: '#334155' });
    damped.rate = rate;
  },
  info(s) { const r = damped.rate || 0, I1 = damped.i1 ?? 2.5; return { obs: Math.abs(r) < .05 ? 'The primary current is steady, so the secondary galvanometer reads zero — only a CHANGING current induces an EMF.' : 'While the primary current changes, the secondary galvanometer deflects; the sign flips when the current starts to fall.', read: [['Primary I₁', fix(I1, 2), 'A'], ['dI₁/dt', fix(r, 2), 'A/s'], ['Induced EMF', fix(-r * 0.8, 2), 'mV'], ['Galvanometer', Math.abs(r) < .05 ? 'zero' : r > 0 ? 'left' : 'right', '']] }; }
};
