'use strict';
/* ===== Chapter 10.9 Light: reflection & refraction (ray optics computed from the real formulas) ===== */
const AX = 300, FPX = 110; // axis y, pixels per focal length
const objArrow = (c, x, h, col = '#dc2626', glowOn = true) => { if (glowOn) glow(c, x, AX - h, 34, [255, 190, 80], .4); arrow(c, x, AX, x, AX - h, col, 5, 14); circle(c, x, AX, 4, col); };
function imgArrow(c, x, hh, real, col = '#2563eb') { c.save(); if (!real) c.setLineDash([6, 5]); c.globalAlpha = real ? 1 : .85; arrow(c, x, AX, x, AX - hh, col, 4.5, 13, real ? null : [6, 5]); c.restore(); }
function axisLine(c, x0, x1) { line(c, x0, AX, x1, AX, '#64748b', 1.6, [10, 6]); }
function pt(c, x, y, lab, col = '#0f172a', dy = 18) { circle(c, x, y, 4, col); text(c, lab, x, y + dy, { size: 14, w: 800, col }); }
function rayDiagram(c, s, o) { // o.type: 'cm' concave mirror | 'xm' convex mirror | 'lens'
  const { t } = s; const f = o.f, F = Math.abs(f) * FPX, P = o.P, u = o.uf * Math.abs(f), uPx = u * FPX, h = 52; const isM = o.type !== 'lens';
  const xo = P - uPx, near = Math.abs(u - Math.abs(f)) < .035 && o.type !== 'xm' ? true : false; let v = near ? Infinity : u * f / (u - f); const m = near ? 0 : -v / u; const xi = isM ? P - v * FPX : P + v * FPX, real = v > 0; const hi = m * h;
  // optical element
  if (o.type === 'lens') { const lg = c.createLinearGradient(P - 18, 0, P + 18, 0); lg.addColorStop(0, 'rgba(160,210,240,.85)'); lg.addColorStop(.5, 'rgba(235,248,255,.95)'); lg.addColorStop(1, 'rgba(140,195,225,.85)'); c.beginPath(); c.moveTo(P, AX - 150); c.quadraticCurveTo(P + 40, AX, P, AX + 150); c.quadraticCurveTo(P - 40, AX, P, AX - 150); c.fillStyle = lg; c.fill(); c.strokeStyle = 'rgba(70,130,170,.9)'; c.lineWidth = 3; c.stroke(); arrow(c, P, AX - 150, P, AX - 150, '#334'); }
  else { const R = 2 * F * (o.type === 'cm' ? 1 : 1), cxm = o.type === 'cm' ? P - R : P + R; c.beginPath(); for (let y = -150; y <= 150; y += 5) { const x = o.type === 'cm' ? cxm + Math.sqrt(R * R - y * y) : cxm - Math.sqrt(R * R - y * y); y === -150 ? c.moveTo(x, AX + y) : c.lineTo(x, AX + y); } c.strokeStyle = '#94a3b8'; c.lineWidth = 7; c.stroke(); c.strokeStyle = 'rgba(255,255,255,.9)'; c.lineWidth = 2.5; c.stroke(); const sx = o.type === 'cm' ? 1 : -1; for (let y = -150; y <= 150; y += 14) { const x = o.type === 'cm' ? cxm + Math.sqrt(R * R - y * y) : cxm - Math.sqrt(R * R - y * y); c.strokeStyle = '#94a3b8'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(x + 4 * sx, AX + y); c.lineTo(x + 14 * sx, AX + y + 9); c.stroke(); } }
  axisLine(c, 20, W - 20);
  // points
  const Fx = isM ? P - f * FPX : P - f * FPX, F2x = isM ? null : P + f * FPX; const Cx = isM ? P - 2 * f * FPX : null;
  if (isM) { pt(c, P, AX, 'P', '#0f172a'); pt(c, Fx, AX, 'F', '#16a34a'); pt(c, Cx, AX, 'C', '#7c3aed'); } else { pt(c, P, AX, 'O', '#0f172a'); pt(c, P - F, AX, 'F₁', '#16a34a'); pt(c, P + F, AX, 'F₂', '#16a34a'); pt(c, P - 2 * F, AX, '2F₁', '#7c3aed'); pt(c, P + 2 * F, AX, '2F₂', '#7c3aed'); }
  objArrow(c, xo, h);
  const tipY = AX - h; const I = near ? null : [xi, AX - hi];
  const rays = [{ yh: tipY, col: '#ef4444' }]; if (Math.abs(Fx - xo) > 1) rays.push({ yh: tipY + (AX - tipY) * (P - xo) / (Fx - xo), col: '#16a34a' }); rays.push({ yh: AX, col: '#2563eb' });
  rays.forEach(({ yh, col }, i) => { if (Math.abs(yh - AX) > 160) return; // incident
    flowLine(c, [[xo, tipY], [P, yh]], t, col, 2.4, { every: 120, speed: 30 }); let dx, dy; if (near || (i === 0 && false)) { dx = isM ? -1 : 1; dy = 0; } else { const px = I[0], py = I[1]; dx = real ? px - P : P - px; dy = real ? py - yh : yh - py; if (!isM && !real) { dx = P - px; dy = yh - py; } if (isM && !real) { dx = P - px; dy = yh - py; } if (isM && real) { dx = px - P; dy = py - yh; } if (!isM && real) { dx = px - P; dy = py - yh; } }
    const L = Math.hypot(dx, dy) || 1, ext = 900, ex = P + dx / L * ext, ey = yh + dy / L * ext; // clip to canvas
    let tmax = 1e9; if (dx > 0) tmax = Math.min(tmax, (W - 10 - P) / dx * L); else if (dx < 0) tmax = Math.min(tmax, (10 - P) / dx * L); const seglen = Math.min(ext, tmax); flowLine(c, [[P, yh], [P + dx / L * seglen, yh + dy / L * seglen]], t, col, 2.4, { every: 140, speed: 30 });
    if (!near && !real) { c.save(); c.setLineDash([5, 5]); c.strokeStyle = col; c.globalAlpha = .6; c.lineWidth = 1.6; c.beginPath(); c.moveTo(P, yh); c.lineTo(xi, I[1]); c.stroke(); c.restore(); } });
  if (!near) { imgArrow(c, xi, hi, real); if (xi > 10 && xi < W - 10) glow(c, xi, AX - hi, 26, [90, 140, 255], .35); }
  const vmin = near ? 0 : v; return { v, m, real, near, u, xi };
}
const MIRROR_NATURE = (v, m, near, u, f) => near ? ['at infinity', 'highly magnified', 'real & inverted'] : [v > 0 ? 'in front of mirror' : 'behind mirror', Math.abs(m) > 1.02 ? 'magnified' : Math.abs(m) < .98 ? 'diminished' : 'same size', v > 0 ? 'real & inverted' : 'virtual & erect'];
const optInfo = (type) => s => { const f = type === 'xm' ? -1 : 1, u = s.v, v = Math.abs(u - 1) < .035 && type !== 'xm' ? Infinity : u * f / (u - f), m = -v / u; const near = !isFinite(v); const nat = near ? ['at infinity', 'highly magnified', 'real & inverted'] : [v > 0 ? (type === 'lens' ? 'other side of lens' : 'in front of mirror') : (type === 'lens' ? 'same side as object' : 'behind mirror'), Math.abs(m) > 1.02 ? 'magnified' : Math.abs(m) < .98 ? 'diminished' : 'same size', v > 0 ? 'real & inverted' : 'virtual & erect'];
  return { obs: `Object at ${fix(u, 1)}f → image ${nat[0]}, ${nat[1]}, ${nat[2]}.`, read: [['Object u', fix(u, 2) + ' f', ''], ['Image v', near ? '∞' : fix(Math.abs(v), 2) + ' f', ''], ['Magnification m', near ? '—' : fix(m, 2), ''], ['Image', near ? 'at ∞' : nat[2], '']] }; };
const OPT_CTRL = { label: 'Object distance (in units of f)', min: .5, max: 4, step: .05, value: 3, unit: 'f', fmt: v => fix(v, 2) + ' f' };

SCENES_REG.concavemirror = { dur: 12, control: OPT_CTRL, draw(c, s) { labBG(c, { noBench: true }); text(c, 'Concave mirror — 1/f = 1/v + 1/u   ·   m = −v/u', 500, 36, { size: 17, w: 700, col: '#334155' }); rayDiagram(c, s, { type: 'cm', f: 1, P: 780, uf: s.v }); }, info: optInfo('cm') };
SCENES_REG.convexmirror = { dur: 12, control: Object.assign({}, OPT_CTRL, { min: .5, max: 5, value: 3 }), draw(c, s) { labBG(c, { noBench: true }); text(c, 'Convex mirror — always a virtual, erect, diminished image', 500, 36, { size: 17, w: 700, col: '#334155' }); rayDiagram(c, s, { type: 'xm', f: -1, P: 640, uf: s.v }); }, info: optInfo('xm') };
SCENES_REG.convexlens = { dur: 12, control: OPT_CTRL, draw(c, s) { labBG(c, { noBench: true }); text(c, 'Convex lens — 1/f = 1/v − 1/u   ·   m = v/u', 500, 36, { size: 17, w: 700, col: '#334155' }); rayDiagram(c, s, { type: 'lens', f: 1, P: 470, uf: s.v }); }, info: optInfo('lens') };

SCENES_REG.spoon = {
  stages: ['Concave side (inside of spoon)', 'Convex side (outside)'], dur: 10,
  control: { label: 'Object distance from spoon', min: 1, max: 10, step: .1, value: 7, unit: 'cm', fmt: v => fix(v, 1) + ' cm' },
  draw(c, s) { labBG(c, { noBench: true }); const cc = s.stage === 0; text(c, cc ? 'Inside of a spoon behaves as a concave mirror (f ≈ 5 cm here)' : 'Outside of a spoon behaves as a convex mirror', 500, 36, { size: 16, w: 700, col: '#334155' }); rayDiagram(c, { t: s.t }, { type: cc ? 'cm' : 'xm', f: cc ? 1 : -1, P: cc ? 800 : 700, uf: s.v / 5 }); },
  info(s) { const cc = s.stage === 0, f = cc ? 5 : -5, u = s.v, v = Math.abs(u - 5) < .15 && cc ? Infinity : u * f / (u - f), m = -v / u; const nat = !isFinite(v) ? 'at infinity' : v > 0 ? 'real, inverted' : 'virtual, erect'; return { obs: cc ? (u < 5 ? 'Close to the bowl you see a bigger, upright (virtual) face.' : 'Farther than the focus your face appears upside-down (real image).') : 'On the bulging side you always see a small, upright face (virtual, diminished).', read: [['Object distance', fix(u, 1), 'cm'], ['Image distance', !isFinite(v) ? '∞' : fix(Math.abs(v), 1), 'cm'], ['Magnification', !isFinite(v) ? '—' : fix(m, 2), ''], ['Image', nat, '']] }; }
};

SCENES_REG.planemirror = {
  dur: 9, control: { label: 'Object distance from mirror', min: 1, max: 8, step: .1, value: 4, unit: 'cm', fmt: v => fix(v, 1) + ' cm' },
  draw(c, s) {
    labBG(c, { noBench: true }); const { t, v } = s; const MX = 500, k = 50, xo = MX - v * k, xi = MX + v * k; text(c, 'Plane mirror: image distance = object distance, same size, virtual, laterally inverted', 500, 36, { size: 16, w: 700, col: '#334155' });
    // mirror
    c.fillStyle = 'rgba(190,225,245,.6)'; c.fillRect(MX - 6, 80, 12, 420); c.fillStyle = '#94a3b8'; c.fillRect(MX, 80, 12, 420); c.strokeStyle = '#64748b'; for (let y = 90; y < 500; y += 14) { c.beginPath(); c.moveTo(MX + 12, y); c.lineTo(MX + 24, y + 10); c.stroke(); }
    line(c, 20, AX, MX, AX, '#64748b', 1.5, [8, 6]); line(c, MX, AX, W - 20, AX, '#94a3b8', 1.5, [3, 6]); const h = 80;
    objArrow(c, xo, h); imgArrow(c, xi, h, false, '#2563eb'); text(c, 'Object', xo, AX + 28, { size: 13, w: 800, col: '#b91c1c' }); text(c, 'Image (virtual)', xi, AX + 28, { size: 13, w: 800, col: '#1d4ed8' });
    const eye = [150, 430]; circle(c, eye[0], eye[1], 12, '#fde68a', '#92400e', 2); circle(c, eye[0] + 3, eye[1], 4, '#111'); text(c, 'Eye', eye[0], eye[1] + 26, { size: 12, col: '#475569' });
    // ray from tip to mirror to eye (law of reflection)
    const tip = [xo, AX - h], hy = lerp(tip[1], (eye[1] * 1 + 0), 0); const imgTip = [xi, AX - h]; const ey = eye[1]; const hitY = tip[1] + (ey - tip[1]) * (MX - tip[0]) / (MX + (MX - xo) * 0 - 0 + (MX - eye[0]) + (MX - tip[0]) - (MX - tip[0])); // approximate via image method below
    // image method: eye ray toward virtual tip crosses mirror at y where line eye -> imgTip meets x=MX
    const hy2 = eye[1] + (imgTip[1] - eye[1]) * (MX - eye[0]) / (imgTip[0] - eye[0]); flowLine(c, [tip, [MX, hy2]], t, '#ef4444', 2.4, { every: 100 }); flowLine(c, [[MX, hy2], eye], t, '#ef4444', 2.4, { every: 100 }); line(c, MX, hy2, imgTip[0], imgTip[1], '#ef4444', 1.6, [5, 5]);
    // normal & angles
    line(c, MX - 70, hy2, MX + 40, hy2, '#334155', 1.2, [4, 4]); const ai = Math.atan2(tip[1] - hy2, MX - tip[0]); c.strokeStyle = '#7c3aed'; c.lineWidth = 2; c.beginPath(); c.arc(MX, hy2, 40, Math.PI + 0.0, Math.PI + Math.abs(ai) * (ai > 0 ? -1 : 1), ai > 0); c.stroke(); text(c, 'i = r', MX - 62, hy2 - 16, { size: 13, w: 800, col: '#7c3aed' });
    // dimensions
    line(c, xo, 470, MX, 470, '#16a34a', 2); line(c, MX, 470, xi, 470, '#2563eb', 2); text(c, fix(v, 1) + ' cm', (xo + MX) / 2, 490, { size: 14, w: 800, col: '#15803d' }); text(c, fix(v, 1) + ' cm', (xi + MX) / 2, 490, { size: 14, w: 800, col: '#1d4ed8' });
  },
  info(s) { return { obs: 'The image is as far behind the mirror as the object is in front, equal in size, upright and laterally inverted (left ↔ right).', read: [['Object distance', fix(s.v, 1), 'cm'], ['Image distance', fix(s.v, 1), 'cm'], ['Magnification', '+1.0', ''], ['Image', 'virtual', '']] }; }
};

SCENES_REG.glassslab = {
  dur: 10, control: { label: 'Angle of incidence (i)', min: 5, max: 65, step: 1, value: 40, unit: '°' },
  draw(c, s) {
    labBG(c, { noBench: true, top: '#f4f8fd', bot: '#e8eff8' }); const { t, v } = s; const n = 1.5, i = rad(v), r = Math.asin(Math.sin(i) / n), cx0 = 500, top = 190, bot = 400, hw = 250, th = bot - top; text(c, 'Refraction through a rectangular glass slab (n = 1.5):  n₁ sin i = n₂ sin r', 500, 36, { size: 16, w: 700, col: '#334155' });
    const g = c.createLinearGradient(cx0 - hw, 0, cx0 + hw, 0); g.addColorStop(0, 'rgba(170,215,240,.75)'); g.addColorStop(.5, 'rgba(215,240,252,.7)'); g.addColorStop(1, 'rgba(160,205,232,.75)'); rr(c, cx0 - hw, top, 2 * hw, th, 4); c.fillStyle = g; c.fill(); c.strokeStyle = 'rgba(70,130,170,.85)'; c.lineWidth = 3; c.stroke(); text(c, 'GLASS (denser)', cx0 + hw - 70, bot - 18, { size: 12, w: 700, col: '#3b82a0' }); text(c, 'AIR', cx0 - hw - 40, top - 16, { size: 12, w: 700, col: '#64748b' });
    const hx = cx0 - 40, L1 = 190; const p0 = [hx - Math.sin(i) * L1, top - Math.cos(i) * L1], p1 = [hx, top]; const dx = Math.tan(r) * th, p2 = [hx + dx, bot]; const p3 = [p2[0] + Math.sin(i) * L1, bot + Math.cos(i) * L1]; const lat = Math.sin(i - r) * th / Math.cos(r);
    line(c, hx, top - 130, hx, top + 60, '#334155', 1.4, [5, 5]); line(c, p2[0], bot - 60, p2[0], bot + 130, '#334155', 1.4, [5, 5]);
    flowLine(c, [p0, p1], t, '#ef4444', 3, { every: 90 }); flowLine(c, [p1, p2], t, '#ef4444', 3, { every: 90 }); flowLine(c, [p2, p3], t, '#ef4444', 3, { every: 90 });
    // extension of incident ray (dotted) and lateral shift
    const ext = [hx + Math.sin(i) * (th / Math.cos(i) + 0), top + Math.cos(i) * (th / Math.cos(i))]; line(c, p1[0], p1[1], p1[0] + Math.sin(i) * th / Math.cos(i), bot, '#ef4444', 1.4, [3, 5]); line(c, p1[0] + Math.tan(i) * th, bot, p2[0], bot, '#16a34a', 2.4); text(c, 'lateral shift d = ' + fix(lat / 38, 2) + ' cm', (p1[0] + Math.tan(i) * th + p2[0]) / 2 + 20, bot + 22, { size: 13, w: 800, col: '#15803d' });
    const arc = (x, y, a0, a1, col, lab, lx, ly, rr_) => { c.strokeStyle = col; c.lineWidth = 2.4; c.beginPath(); c.arc(x, y, rr_, a0, a1); c.stroke(); text(c, lab, lx, ly, { size: 14, w: 900, col }); };
    arc(hx, top, -Math.PI / 2 - i, -Math.PI / 2, '#7c3aed', 'i = ' + Math.round(v) + '°', hx - 36, top - 62, 52); arc(hx, top, Math.PI / 2 - r, Math.PI / 2, '#0ea5e9', 'r = ' + fix(r * 180 / Math.PI, 1) + '°', hx + 36, top + 66, 44); arc(p2[0], bot, Math.PI / 2 - 0, Math.PI / 2 + 0.0001, '#000', '', 0, 0, 0); arc(p2[0], bot, -Math.PI / 2 + 0.0, -Math.PI / 2 + r * 0 + .00001, '#000', '', 0, 0, 0); arc(p2[0], bot, Math.PI / 2 - i, Math.PI / 2, '#7c3aed', 'e = ' + Math.round(v) + '°', p2[0] + 40, bot + 58, 46);
    tag('Incident ray', p0[0] + 30, p0[1] + 30, { x: p0[0] - 100, y: p0[1] + 40, col: '#b91c1c' }); tag('Refracted ray (bends towards normal)', (p1[0] + p2[0]) / 2, (top + bot) / 2, { x: 780, y: 290, col: '#b91c1c' }); tag('Emergent ray ∥ incident ray', (p2[0] + p3[0]) / 2, (bot + p3[1]) / 2, { x: 780, y: 480, col: '#b91c1c' }); tag('Normal', hx, top - 110, { x: hx - 80, y: top - 130, col: '#334155' });
  },
  info(s) { const i = rad(s.v), r = Math.asin(Math.sin(i) / 1.5); return { obs: 'The ray bends towards the normal on entering glass and away from it on leaving; the emergent ray is parallel to the incident ray but shifted sideways.', read: [['Incidence i', fix(s.v, 0), '°'], ['Refraction r', fix(r * 180 / Math.PI, 1), '°'], ['Emergence e', fix(s.v, 0), '°'], ['Lateral shift', fix(Math.sin(i - r) * 5.5 / Math.cos(r), 2), 'cm (t = 5.5 cm)']] }; }
};

function sunScene(kind) {
  return {
    dur: 11, control: { label: 'Paper distance from ' + (kind === 'm' ? 'mirror' : 'lens'), min: 4, max: 25, step: .1, value: 22, unit: 'cm', fmt: v => fix(v, 1) + ' cm' },
    draw(c, s) {
      labBG(c, { noBench: true, top: '#cfe9ff', bot: '#f4fbff' }); const { t, v } = s; sun(c, 90, 90, 30, t); text(c, kind === 'm' ? 'A concave mirror brings parallel sunlight to a sharp focus (f = 12 cm)' : 'A convex lens brings parallel sunlight to a sharp focus (f = 12 cm)', 540, 36, { size: 16, w: 700, col: '#1e3a5f' });
      const f = 12, k = 18, P = kind === 'm' ? 800 : 480, Rr = 2 * f * k, cxm = P - Rr; const paperX = kind === 'm' ? P - v * k : P + v * k; const rays = []; let minW = 0, maxY = -1e9, minY = 1e9;
      const ys = [-100, -75, -50, -25, 0, 25, 50, 75, 100]; ys.forEach(y => { let hx, hy = y, d; if (kind === 'm') { hx = cxm + Math.sqrt(Rr * Rr - y * y); const nx = (hx - cxm) / Rr, ny = y / Rr; const dd = 1 * nx; d = [1 - 2 * dd * nx, -2 * dd * ny]; /* reflect (1,0) about normal (nx,ny) */ } else { hx = P; const fx = P + f * k; d = [fx - P, -y]; const L = Math.hypot(d[0], d[1]); d = [d[0] / L, d[1] / L]; } rays.push({ hx, hy, d }); });
      // draw element
      if (kind === 'm') { c.beginPath(); for (let y = -115; y <= 115; y += 5) { const x = cxm + Math.sqrt(Rr * Rr - y * y); y === -115 ? c.moveTo(x, AX + y) : c.lineTo(x, AX + y); } c.strokeStyle = '#94a3b8'; c.lineWidth = 8; c.stroke(); c.strokeStyle = '#fff'; c.lineWidth = 3; c.stroke(); }
      else { const lg = c.createLinearGradient(P - 18, 0, P + 18, 0); lg.addColorStop(0, 'rgba(160,210,240,.85)'); lg.addColorStop(.5, 'rgba(235,248,255,.95)'); lg.addColorStop(1, 'rgba(140,195,225,.85)'); c.beginPath(); c.moveTo(P, AX - 120); c.quadraticCurveTo(P + 34, AX, P, AX + 120); c.quadraticCurveTo(P - 34, AX, P, AX - 120); c.fillStyle = lg; c.fill(); c.strokeStyle = 'rgba(70,130,170,.9)'; c.lineWidth = 3; c.stroke(); }
      line(c, 10, AX, W - 10, AX, '#94a3b8', 1.2, [8, 6]); let hits = [];
      rays.forEach(({ hx, hy, d }) => { const sx = kind === 'm' ? 20 : 20; const y0 = AX + hy; const dir = d; flowLine(c, [[130, y0], [hx, y0]], t, '#f59e0b', 2, { every: 150, speed: 24 }); const Lr = 700; flowLine(c, [[hx, y0], [hx + dir[0] * Lr, y0 + dir[1] * Lr]], t, '#f59e0b', 2, { every: 150, speed: 24 }); const tt = (paperX - hx) / dir[0]; hits.push(y0 + dir[1] * tt); });
      const spot = Math.max(...hits) - Math.min(...hits), cyp = (Math.max(...hits) + Math.min(...hits)) / 2; // paper
      c.save(); const burnK = clamp(1 - spot / 70, 0, 1); const bk = 'burn' + kind; if (s.t < .05) damped[bk] = 0; damped[bk] = clamp((damped[bk] || 0) + burnK * s.dt * .22, 0, 1) * (burnK > .2 ? 1 : .985); const burn = damped[bk];
      c.fillStyle = '#fff'; c.strokeStyle = '#94a3b8'; c.lineWidth = 2; rr(c, paperX - 6, AX - 70, 12, 140, 2); c.fill(); c.stroke(); const sg = c.createRadialGradient(paperX, cyp, 0, paperX, cyp, Math.max(8, spot * .6)); sg.addColorStop(0, `rgba(255,${240 - 120 * burnK},${120 - 120 * burnK},1)`); sg.addColorStop(1, 'rgba(255,200,80,0)'); c.fillStyle = sg; c.fillRect(paperX - 30, cyp - 40, 60, 80); if (burn > .15) { circle(c, paperX, cyp, 3 + burn * 8, '#111827'); c.restore(); smoke(c, paperX, cyp, t, { col: [90, 90, 90], n: 6, h: 100, a: .5 * burn }); c.save(); } c.restore();
      if (kind === 'm') pt(c, P - f * k, AX, 'F', '#16a34a'); else { pt(c, P + f * k, AX, 'F', '#16a34a'); }
      tag(spot < 14 ? 'Brightest tiny spot: paper at the focus!' : 'Large dim patch of light', paperX, cyp, { x: paperX, y: 110, col: spot < 14 ? '#b91c1c' : '#475569' }); tag('Sunlight (parallel rays)', 260, AX - 100, { x: 260, y: 150, col: '#a16207' });
      c.save(); c.fillStyle = 'rgba(15,23,42,.8)'; rr(c, 24, 460, 240, 70, 10); c.fill(); text(c, 'Spot width ' + fix(spot / k, 2) + ' cm', 144, 484, { size: 15, w: 700, col: '#fde68a' }); text(c, 'f = ' + f + ' cm · u = ∞ ⇒ v = f', 144, 510, { size: 13, col: '#cbd5e1' }); c.restore();
    },
    info(s) { const f = 12, spotCm = (() => { return Math.abs(s.v - f) * .32 + .04; })(); const n = Math.abs(s.v - f); return { obs: n < 1 ? 'At the focus the spot is smallest and hottest — the paper starts to smoke and burn.' : 'Away from the focus the light spreads over a bigger patch and is much weaker.', read: [['Paper at', fix(s.v, 1), 'cm'], ['Focal length', '12', 'cm'], ['Spot width', fix(spotCm, 2), 'cm'], ['Heating', n < 1 ? 'intense' : n < 4 ? 'moderate' : 'weak', '']] }; }
  };
}
SCENES_REG.mirrorsun = sunScene('m');
SCENES_REG.lenssun = sunScene('l');
