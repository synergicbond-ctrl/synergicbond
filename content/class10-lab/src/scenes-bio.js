'use strict';
/* ===== Chapters 10.5–10.8 Biology ===== */
const GREEN = [76, 175, 80];
function plantPot(c, x, y, w = 110) { const g = c.createLinearGradient(x - w / 2, 0, x + w / 2, 0); g.addColorStop(0, '#9a4a28'); g.addColorStop(.4, '#d1693a'); g.addColorStop(1, '#8c3f20'); poly(c, [[x - w / 2, y - 70], [x + w / 2, y - 70], [x + w / 2 - 14, y], [x - w / 2 + 14, y]]); c.fillStyle = g; c.fill(); c.fillStyle = '#b4572f'; rr(c, x - w / 2 - 6, y - 82, w + 12, 16, 4); c.fill(); c.fillStyle = '#5b3a24'; c.fillRect(x - w / 2 + 2, y - 70, w - 4, 6); }
function sun(c, x, y, r, t, a = 1) { glow(c, x, y, r * 3, [255, 220, 90], .45 * a); for (let i = 0; i < 16; i++) { const an = i / 16 * TAU + t * .15; c.strokeStyle = `rgba(250,190,40,${.7 * a})`; c.lineWidth = 3; c.beginPath(); c.moveTo(x + Math.cos(an) * r * 1.25, y + Math.sin(an) * r * 1.25); c.lineTo(x + Math.cos(an) * r * 1.65, y + Math.sin(an) * r * 1.65); c.stroke(); } circle(c, x, y, r, '#fde047', '#f59e0b', 2); }
function petri(c, x, y, r) { const g = c.createRadialGradient(x - r * .3, y - r * .3, 4, x, y, r); g.addColorStop(0, 'rgba(255,255,255,.85)'); g.addColorStop(1, 'rgba(205,225,240,.55)'); circle(c, x, y, r, g, 'rgba(95,140,170,.7)', 3); circle(c, x, y, r - 8, null, 'rgba(255,255,255,.7)', 1.5); }

SCENES_REG.stomata = {
  dur: 9, control: { label: 'Guard-cell turgor', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    const { t, u } = s; darkBG(c, { a: '#1c2a3d', b: '#0a121f' }); const cx0 = 500, cy0 = 290, R = 252; c.save(); circle(c, cx0, cy0, R + 14, '#111827', '#475569', 4); c.beginPath(); c.arc(cx0, cy0, R, 0, TAU); c.clip();
    c.fillStyle = '#d9f0c5'; c.fillRect(0, 0, W, H); // epidermal cells (voronoi-like with offsets)
    const cells = []; for (let r = 0; r < 7; r++) for (let q = 0; q < 8; q++) cells.push([cx0 - 340 + q * 100 + (r % 2) * 50 + (hash(r * 9 + q) - .5) * 14, cy0 - 300 + r * 86 + (hash(q * 7 + r) - .5) * 12]);
    cells.forEach(([x, y], i) => { c.beginPath(); for (let k = 0; k < 6; k++) { const a = k / 6 * TAU + .5, rr_ = 48 + hash(i + k) * 6; k ? c.lineTo(x + Math.cos(a) * rr_, y + Math.sin(a) * rr_ * .9) : c.moveTo(x + Math.cos(a) * rr_, y + Math.sin(a) * rr_ * .9); } c.closePath(); c.fillStyle = `rgba(${190 + hash(i) * 20},${230 + hash(i * 2) * 10},${185 + hash(i * 3) * 20},.55)`; c.fill(); c.strokeStyle = 'rgba(70,120,70,.55)'; c.lineWidth = 2; c.stroke(); ell(c, x + 8, y - 6, 9, 7, 'rgba(120,150,110,.35)'); });
    // stomata
    const pts = [[430, 250], [585, 330], [470, 395], [610, 215], [360, 345]];
    pts.forEach(([x, y], i) => { const open = u * (.85 + hash(i) * .15), gap = 3 + open * 30, len = 74; c.save(); c.translate(x, y); c.rotate(-.4 + i * .5);
      for (const sd of [-1, 1]) { c.beginPath(); for (let k = 0; k <= 24; k++) { const a = k / 24 * Math.PI, X = Math.cos(a) * len / 2, Y = sd * (gap / 2 + Math.sin(a) * (14 + open * 6)); k ? c.lineTo(X, Y) : c.moveTo(X, Y); } for (let k = 24; k >= 0; k--) { const a = k / 24 * Math.PI, X = Math.cos(a) * (len / 2 - 4), Y = sd * (gap / 2 + Math.sin(a) * (3 + open * 2)); c.lineTo(X, Y); } c.closePath(); const g = c.createLinearGradient(0, -20, 0, 20); g.addColorStop(0, '#5fb35a'); g.addColorStop(1, '#2f7d32'); c.fillStyle = g; c.fill(); c.strokeStyle = '#1f5a23'; c.lineWidth = 2; c.stroke(); for (let k = 0; k < 5; k++) circle(c, -20 + k * 10, sd * (gap / 2 + 12 + open * 3), 2.6, '#a7f3d0'); }
      c.fillStyle = `rgba(20,45,30,${.85 - open * .25})`; ell(c, 0, 0, len / 2 - 6, Math.max(.5, gap / 2), c.fillStyle); c.restore(); });
    c.restore(); c.strokeStyle = 'rgba(255,255,255,.12)'; c.lineWidth = 8; c.beginPath(); c.arc(cx0, cy0, R - 4, -.9, -.2); c.stroke();
    text(c, 'Microscope field ×400 — lower epidermis', 500, 540, { size: 13, col: '#94a3b8' });
    tag('Guard cells', 430, 232, { x: 800, y: 160, col: '#bbf7d0' }); tag('Stoma (pore): ' + fix(3 + u * 30, 0) + ' units', 585, 330, { x: 810, y: 330, col: '#fef08a' }); tag('Epidermal cell', 380, 190, { x: 180, y: 140, col: '#d1fae5' });
    text(c, u > .5 ? 'Guard cells TURGID → stomata OPEN: gas exchange & transpiration' : 'Guard cells FLACCID → stomata CLOSED', 500, 36, { size: 17, w: 700, col: '#e2e8f0' });
  },
  info(s) { const u = s.u; return { obs: u > .5 ? 'Water enters guard cells (K⁺ pumped in); the thin inner walls bulge less than the thick outer walls so the pore opens.' : 'In low turgor the guard cells are limp and the pore closes — little water is lost.', read: [['Turgor', fix(u * 100, 0), '%'], ['Pore width', fix(3 + u * 30, 0), 'units'], ['Stomata', u > .5 ? 'open' : 'closed', ''], ['Water loss', fix(u * 100, 0), '% of max']] }; },
  micro(c, s) { const { t, u } = s, B = micro(c, W - 346, 16, 330, 230, 'WHY GUARD CELLS SWELL'); c.save(); rr(c, B.x, B.y, B.w, B.h, 14); c.clip(); for (let i = 0; i < 14; i++) { const q = (t * .35 * (.4 + u) + i / 14) % 1; ion(c, B.x + 40 + q * 250, B.y + 60 + (i % 5) * 22, 8, [96, 165, 250], '', t, i, 3); } for (let i = 0; i < 6; i++) ion(c, B.x + 60 + i * 44, B.y + 180 - u * 30, 8, [244, 114, 182], 'K⁺', t, i, 2);
    text(c, 'K⁺ in → water follows by osmosis → turgid cell', B.x + B.w / 2, B.y + B.h - 12, { size: 10.5, col: '#cbd5e1' }); c.restore(); }
};

SCENES_REG.photoleaf = {
  stages: ['Light on the plant', 'Iodine test on the leaf'], dur: 10,
  control: st => st === 0 ? { label: 'Hours in sunlight', min: 0, max: 6, step: .1, value: 0, unit: 'h', fmt: v => fix(v, 1) + ' h' } : { label: 'Iodine test progress', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    const { t, u, stage } = s; if (stage === 0) { skyBG(c); sun(c, 160, 100, 36, t); const lit = u;
      // window-shaped sun beams
      for (let i = 0; i < 6; i++) { c.strokeStyle = `rgba(255,230,120,${.18 + .1 * Math.sin(t * 2 + i)})`; c.lineWidth = 14; c.beginPath(); c.moveTo(190 + i * 30, 125 + i * 14); c.lineTo(520 + i * 40, 330 + i * 10); c.stroke(); }
      c.fillStyle = '#6aa84f'; c.fillRect(0, 470, W, 90); plantPot(c, 560, 540, 130); c.strokeStyle = '#3f8f3f'; c.lineWidth = 9; c.lineCap = 'round'; c.beginPath(); c.moveTo(560, 458); c.quadraticCurveTo(555, 360, 570, 260); c.stroke();
      leafShape(c, 560, 400, 120, 36, -.35, 'rgb(70,170,75)', '#2f7d32'); leafShape(c, 565, 330, 130, 38, -2.7, 'rgb(76,175,80)', '#2f7d32'); const lx = 568, ly = 262; leafShape(c, lx, ly, 190, 52, -.15, 'rgb(76,185,85)', '#2f7d32');
      // black paper stencil clips
      c.fillStyle = '#111827'; c.save(); c.translate(lx + 90, ly - 7); c.rotate(-.15); rr(c, -26, -42, 52, 84, 4); c.fill(); c.restore(); tag('Black paper stencil (no light)', lx + 90, ly - 20, { x: 790, y: 130, col: '#111827' }); tag('Leaf exposed to light', lx + 28, ly - 5, { x: 320, y: 215, col: '#166534' }); tag('Potted plant (destarched 48 h in dark)', 560, 470, { x: 790, y: 440, col: '#7c2d12' });
      if (lit > .1) for (let i = 0; i < 9; i++) { const q = (t * .3 + i / 9) % 1; text(c, i % 2 ? 'O₂' : 'CO₂', 640 - q * 140 * (i % 2 ? -1 : 1) + (i % 2 ? 0 : 0), 230 - q * 40 * (i % 2 ? 1 : -1) + 20, { size: 12, col: i % 2 ? '#0369a1' : '#475569', alpha: (1 - q) * Math.min(1, lit * 2) }); }
      text(c, '6CO₂ + 6H₂O →(light, chlorophyll) C₆H₁₂O₆ + 6O₂', 500, 36, { size: 17, w: 700, col: '#1e3a5f' });
    } else { labBG(c); const B = beaker(300, BENCH, 230, 140), A = beaker(300, BENCH, 0, 0); shadowE(c, 300, BENCH, 250);
      // leaf in petri dish
      petri(c, 640, 330, 190); const t_ = seg(u, .05, .8); const lx = 560, ly = 330; c.save(); c.translate(lx, ly); const ldec = seg(u, 0, .25); const lc = mix([76, 175, 80], [245, 245, 235], ldec); // decolourised
      c.beginPath(); c.moveTo(0, 0); c.bezierCurveTo(50, -55, 140, -52, 190, 0); c.bezierCurveTo(140, 52, 50, 55, 0, 0); c.fillStyle = rgb(lc); c.fill(); c.strokeStyle = '#a3a3a3'; c.lineWidth = 1.5; c.stroke(); c.clip();
      const stain = seg(u, .25, .9); c.fillStyle = `rgba(30,20,90,${.9 * stain})`; c.beginPath(); c.rect(0, -60, 125, 120); c.fill(); c.fillStyle = `rgba(200,140,40,${.45 * stain})`; c.fillRect(125, -60, 90, 120); for (let i = 0; i < 40 * stain; i++) c.fillStyle = 'rgba(15,10,60,.35)', c.fillRect(hash(i) * 120, -40 + hash(i * 3) * 80, 3, 3); c.restore();
      dropper(c, 770, 270, { color: [210, 140, 40] }); if (u > .25 && u < .85) drip(c, 770, 272, 340, t, [210, 140, 40], { rate: 1.6 });
      tag(stain > .5 ? 'Blue-black: STARCH present (was in light)' : 'Decolourised leaf', 620, 320, { x: 810, y: 440, col: '#312e81' }); if (stain > .4) tag('Yellow-brown: no starch (was covered)', 700, 345, { x: 810, y: 150, col: '#a16207' }); tag('Petri dish', 520, 260, { x: 330, y: 190, col: '#475569' });
      text(c, 'Iodine solution turns blue-black with starch → proves photosynthesis occurred', 500, 36, { size: 16, w: 700, col: '#334155' }); }
  },
  info(s) { const { u, stage } = s; return stage === 0 ? { obs: u < .5 ? 'The destarched plant begins photosynthesising in the uncovered part of the leaf.' : 'After several hours in sunlight starch accumulates only where light fell.', read: [['Sunlight', fix(u * 6, 1), 'h'], ['Starch (exposed)', fix(seg(u, .1, .9) * 100, 0), '%'], ['Starch (covered)', '0', '%'], ['O₂ released', fix(u * 100, 0), 'a.u.']] } : { obs: 'After boiling in alcohol (chlorophyll removed), iodine stains the exposed region blue-black but not the covered strip.', read: [['Chlorophyll left', fix((1 - seg(u, 0, .25)) * 100, 0), '%'], ['Iodine stain', fix(seg(u, .25, .9) * 100, 0), '%'], ['Result', u > .6 ? 'light is needed' : 'testing…', '']] }; }
};

SCENES_REG.photoco2 = {
  dur: 10, control: { label: 'Days in sunlight', min: 0, max: 48, step: 1, value: 0, unit: 'h', fmt: v => Math.round(v) + ' h' },
  draw(c, s) {
    const { t, u } = s; labBG(c); sun(c, 880, 80, 28, t); const bells = [[300, 'KOH (absorbs CO₂)', 0], [700, 'Water (CO₂ present)', 1]];
    bells.forEach(([x, nm, has]) => { shadowE(c, x, BENCH, 260); c.fillStyle = '#cbd5e1'; rr(c, x - 150, BENCH - 8, 300, 12, 4); c.fill(); plantPot(c, x, BENCH - 8, 90); c.strokeStyle = '#3f8f3f'; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.moveTo(x, BENCH - 90); c.quadraticCurveTo(x - 4, BENCH - 170, x + 4, BENCH - 240); c.stroke(); const wob = has ? 0 : -u * .0; leafShape(c, x, BENCH - 140, 85, 24, -.3, 'rgb(70,170,75)', '#2f7d32'); leafShape(c, x + 2, BENCH - 175, 90, 26, -2.8, 'rgb(76,175,80)', '#2f7d32'); leafShape(c, x + 4, BENCH - 225, 80, 24, -.4, 'rgb(80,185,85)', '#2f7d32');
      c.save(); c.beginPath(); c.moveTo(x - 135, BENCH - 8); c.lineTo(x - 135, BENCH - 270); c.quadraticCurveTo(x, BENCH - 360, x + 135, BENCH - 270); c.lineTo(x + 135, BENCH - 8); c.strokeStyle = 'rgba(95,140,170,.7)'; c.lineWidth = 4; c.stroke(); c.fillStyle = 'rgba(200,225,240,.18)'; c.fill(); c.strokeStyle = 'rgba(255,255,255,.55)'; c.lineWidth = 3; c.beginPath(); c.moveTo(x - 118, BENCH - 250); c.lineTo(x - 118, BENCH - 60); c.stroke(); c.restore();
      const wc = tube(x + 105, BENCH - 8, 40, 36); c.fillStyle = has ? 'rgba(170,215,240,.7)' : 'rgba(250,250,250,.85)'; rr(c, x + 82, BENCH - 40, 46, 28, 4); c.fill(); c.strokeStyle = '#5b8db3'; c.stroke(); text(c, has ? 'H₂O' : 'KOH', x + 105, BENCH - 26, { size: 11, w: 800, col: '#334155' });
      if (has) for (let i = 0; i < 8; i++) { const q = (t * .25 + i / 8) % 1; text(c, 'CO₂', x - 100 + i * 28, BENCH - 60 - q * 150, { size: 10.5, col: '#64748b', alpha: .7 * (1 - Math.abs(q - .5) * 1.5) }); }
      const starch = has ? seg(u, .1, .9) : 0; circle(c, x, 120, 34, '#fffbe6', 'rgba(100,116,139,.6)', 2); circle(c, x, 120, 24, null, null); c.save(); c.beginPath(); c.arc(x, 120, 30, 0, TAU); c.clip(); c.fillStyle = rgb(mix([245, 235, 200], [28, 24, 100], starch)); c.fillRect(x - 40, 90, 80, 60); c.restore(); text(c, has ? 'Iodine test: blue-black (starch)' : 'Iodine test: brown (no starch)', x, 85 - 24, { size: 12, w: 700, col: has ? '#312e81' : '#a16207' });
      tag(nm, x + 105, BENCH - 26, { x: x + 105, y: BENCH + 40 - 0, col: '#334155', line: false, dot: false }); });
    text(c, 'No CO₂ → no photosynthesis → no starch. CO₂ is a raw material.', 500, 36, { size: 17, w: 700, col: '#334155' });
  },
  info(s) { const st = seg(s.u, .1, .9); return { obs: 'The plant under the KOH-bell jar has no CO₂ and makes no starch; the one with water (CO₂ present) turns blue-black with iodine.', read: [['Exposure', Math.round(s.v), 'h'], ['Starch, water jar', fix(st * 100, 0), '%'], ['Starch, KOH jar', '0', '%'], ['Conclusion', s.u > .7 ? 'CO₂ needed' : 'testing…', '']] }; }
};

SCENES_REG.breath = {
  dur: 10, control: { label: 'Breaths bubbled in', min: 0, max: 20, step: 1, value: 0, unit: 'breaths' },
  draw(c, s) {
    labBG(c); const { t, v, u } = s; const mx = seg(v, 1, 14), ax = seg(v, 8, 20) * .18; const A = tube(330, BENCH, 90, 270), B = tube(680, BENCH, 90, 270); shadowE(c, 330, BENCH, 150); shadowE(c, 680, BENCH, 150);
    [[A, 330, mx, 'Exhaled air'], [B, 680, ax, 'Atmospheric air (pump)']].forEach(([T, x, m, nm]) => { drawVessel(c, T, { level: .55, color: mix([220, 238, 246], [242, 242, 238], m), alpha: .35 + .55 * m, t, inside(c) { if (v > 0 && v < 20) bubbleStream(c, x, T.yAt(.2), T.yAt(.55), t, { n: 12, rate: .6 + Math.sin(t * 3) * .3, spread: 8, speed: 50, r: 3 }); } }); glassTube(c, [[x + 14, T.top - 20], [x + 14, 150], [x + 14, 150], [x + 14, T.yAt(.2)]], { w: 7 }); tag(m > .4 ? 'Milky: much CaCO₃' : m > .08 ? 'Slightly cloudy' : 'Limewater clear', x, T.yAt(.4), { x: x + (x < 500 ? -160 : 160), y: 300, col: '#334155' }); text(c, nm, x, BENCH + 26, { size: 13, w: 700, col: '#334155' }); });
    // mouth with straw
    c.save(); c.translate(330, 100); ell(c, 0, 0, 36, 22, '#f5c6a0', '#c08a60', 2); ell(c, 0, 4, 14, 7, '#7f1d1d'); c.restore(); text(c, 'blow', 330, 62, { size: 12, col: '#475569' });
    c.save(); c.translate(680, 100); rr(c, -34, -18, 68, 44, 6); c.fillStyle = '#64748b'; c.fill(); text(c, 'air pump', 0, 4, { size: 11, col: '#fff', w: 700 }); c.restore();
    text(c, 'CO₂ + Ca(OH)₂ → CaCO₃↓ (milky) + H₂O — exhaled air has far more CO₂ (≈ 4 %) than air (0.04 %)', 500, 36, { size: 15, w: 700, col: '#334155' });
  },
  info(s) { const v = s.v; return { obs: 'Limewater in the tube receiving exhaled air turns milky much sooner — respiration adds CO₂ to the breath.', read: [['Breaths', Math.round(v), ''], ['Exhaled-air tube', v < 1 ? 'clear' : v < 6 ? 'cloudy' : 'milky', ''], ['Atmospheric tube', v < 14 ? 'clear' : 'slightly cloudy', ''], ['CO₂ in breath', '≈ 4', '%']] }; }
};

SCENES_REG.seedresp = {
  dur: 11, control: { label: 'Time', min: 0, max: 24, step: .5, value: 0, unit: 'h', fmt: v => fix(v, 1) + ' h' },
  draw(c, s) {
    labBG(c); const { t, u } = s; const F = flask(330, BENCH, 210, 250, 70); shadowE(c, 330, BENCH, 240); cork(c, 330, F.top - 8, 44, 16);
    const rise = u * 130; // manometer rise
    glassTube(c, [[330, F.top - 4], [330, 170], [640, 170], [640, 420]], { w: 8 }); const U = { x: 640 }; // U-tube on right
    c.save(); c.lineCap = 'round'; c.strokeStyle = 'rgba(95,140,170,.6)'; c.lineWidth = 32; c.beginPath(); c.moveTo(640, 170); c.lineTo(640, 440); c.lineTo(780, 440); c.lineTo(780, 170); c.stroke(); c.strokeStyle = 'rgba(235,245,252,.9)'; c.lineWidth = 26; c.stroke(); c.restore();
    const baseL = 330 + rise, baseR = 330 - rise; c.fillStyle = 'rgba(220,60,80,.85)'; c.fillRect(627, baseL, 26, 440 - baseL + 12); c.fillRect(767, baseR, 26, 440 - baseR + 12); c.fillRect(627, 430, 166, 22); text(c, '+' + fix(rise / 130 * 24, 0) + ' mm', 700, 330 - rise / 2, { size: 13, w: 800, col: '#9f1239' });
    c.strokeStyle = '#334155'; c.lineWidth = 1.5; for (let i = 0; i < 9; i++) { c.beginPath(); c.moveTo(793, 220 + i * 25); c.lineTo(803, 220 + i * 25); c.stroke(); }
    drawVessel(c, F, { level: .0, t, inside(c) { for (let i = 0; i < 16; i++) { const x = 280 + (i % 6) * 22 + hash(i) * 8, y = F.bot - 12 - Math.floor(i / 6) * 16; c.save(); c.translate(x, y); c.rotate(hash(i) * 2); ell(c, 0, 0, 9, 5.5, '#d6b370', '#8a6a2a', 1); if (u > .2) { c.strokeStyle = '#f5f5dc'; c.lineWidth = 2; c.beginPath(); c.moveTo(7, 0); c.lineTo(7 + 14 * u, 0); c.stroke(); } c.restore(); }
      c.fillStyle = 'rgba(250,250,250,.9)'; rr(c, 360, F.bot - 28, 30, 20, 3); c.fill(); text(c, 'KOH', 375, F.bot - 18, { size: 9, w: 800, col: '#475569' }); for (let i = 0; i < 6; i++) { const q = (t * .3 + i / 6) % 1; text(c, 'CO₂', 300 + i * 22, F.bot - 40 - q * 100, { size: 9, col: '#64748b', alpha: (1 - q) * .8 }); } } });
    tag('Germinating seeds (respiring)', 310, F.bot - 18, { x: 150, y: 400, col: '#92400e' }); tag('KOH absorbs the CO₂ released', 375, F.bot - 18, { x: 170, y: 250, col: '#475569' }); tag('Coloured water rises: O₂ used up', 640, 330 - rise / 2, { x: 880, y: 250, col: '#9f1239' });
    text(c, 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy  — volume falls as O₂ is consumed and CO₂ trapped', 500, 36, { size: 15, w: 700, col: '#334155' });
  },
  info(s) { const u = s.u; return { obs: 'As seeds respire they take in O₂; the CO₂ is absorbed by KOH, so the gas volume drops and coloured water rises in the tube.', read: [['Time', fix(s.v, 1), 'h'], ['O₂ consumed', fix(u * 24, 1), 'mL'], ['Water rise', fix(u * 24, 0), 'mm'], ['Heat', u > .3 ? 'warm' : 'cool', '']] }; }
};

SCENES_REG.fermentation = {
  dur: 12, control: { label: 'Water-bath temperature', min: 10, max: 50, step: 1, value: 37, unit: '°C' },
  draw(c, s) {
    labBG(c); const { t, v } = s; const enz = Math.exp(-Math.pow((v - 37) / 9, 2)) * (v > 45 ? Math.max(0, 1 - (v - 45) / 6) : 1); const rate = enz;
    const B = beaker(360, BENCH, 300, 150), F = flask(360, BENCH - 20, 170, 220, 56); shadowE(c, 360, BENCH, 340); drawVessel(c, B, { level: .6, color: LIQ.water, alpha: .35, t });
    drawVessel(c, F, { level: .45, color: [240, 220, 160], alpha: .8, t, inside(c) { if (rate > .02) bubbleStream(c, 360, F.bot - 12, F.yAt(.45), t, { n: 22, rate, spread: 28, speed: 20 + 90 * rate, r: 3.2 }); for (let i = 0; i < 22; i++) circle(c, 320 + hash(i) * 80 + Math.sin(t + i) * 3, F.yAt(.45) + 12 + hash(i * 3) * 80, 2.6, 'rgba(180,140,70,.8)'); } });
    cork(c, 360, F.top - 8, 36, 16); glassTube(c, [[360, F.top - 4], [360, 150], [700, 150], [700, 330]], { w: 8 }); const T = tube(700, BENCH, 80, 220); shadowE(c, 700, BENCH, 130); const milk = clamp(damped.ferm || 0, 0, 1); if (s.t < .05) damped.ferm = 0; else damped.ferm = clamp((damped.ferm || 0) + rate * s.dt * .05, 0, 1);
    drawVessel(c, T, { level: .6, color: mix([215, 235, 245], [240, 240, 238], milk), alpha: .35 + .55 * milk, t, inside(c) { if (rate > .02) bubbleStream(c, 700, T.yAt(.2), T.yAt(.6), t, { n: 14, rate, spread: 6, speed: 60, r: 3 }); } });
    thermometer(c, 560, BENCH, 230, v, 0, 60); tag('Yeast + sugar solution', 360, F.yAt(.2), { x: 160, y: 330, col: '#92400e' }); tag('Water bath ' + Math.round(v) + ' °C', 420, B.yAt(.3), { x: 250, y: 440, col: '#0f4c75' }); tag(milk > .3 ? 'Limewater milky: CO₂' : 'Limewater', 700, T.yAt(.5), { x: 860, y: 300, col: '#334155' });
    text(c, 'C₆H₁₂O₆ →(zymase, yeast) 2C₂H₅OH + 2CO₂ — anaerobic respiration; rate peaks near 37 °C', 500, 36, { size: 15, w: 700, col: '#334155' });
  },
  info(s) { const v = s.v, enz = Math.exp(-Math.pow((v - 37) / 9, 2)) * (v > 45 ? Math.max(0, 1 - (v - 45) / 6) : 1); return { obs: v < 20 ? 'Cold slows enzymes: few bubbles.' : v > 45 ? 'Zymase is denatured by heat: bubbling stops.' : 'Near body temperature yeast ferments fastest — vigorous CO₂ bubbles.', read: [['Temperature', Math.round(v), '°C'], ['CO₂ rate', fix(enz * 60, 0), 'bubbles/min'], ['Enzyme activity', fix(enz * 100, 0), '%'], ['Ethanol made', fix(enz * 8, 1), 'a.u.']] }; }
};

SCENES_REG.amylase = {
  dur: 11, control: { label: 'Digestion time', min: 0, max: 20, step: .5, value: 0, unit: 'min', fmt: v => fix(v, 1) + ' min' },
  draw(c, s) {
    labBG(c); const { t, v, u } = s; const digest = seg(v, 2, 14);
    [[260, 'Starch + saliva (37 °C)', 1], [520, 'Starch + boiled saliva', 0]].forEach(([x, nm, act]) => { const T = tube(x, BENCH - 20, 80, 230); shadowE(c, x, BENCH - 10, 120); const d = act ? digest : 0; drawVessel(c, T, { level: .5, color: mix([232, 232, 240], [225, 240, 248], d), alpha: .55 - .15 * d, t }); text(c, nm, x, BENCH + 12, { size: 12, w: 700, col: '#334155' }); });
    c.fillStyle = '#b7e0f0'; rr(c, 130, BENCH - 140, 520, 12, 4); c.fill(); text(c, '37 °C water bath', 390, BENCH - 150, { size: 11, col: '#0369a1' });
    // spotting tile
    const tx = 690, ty = 150; rr(c, tx, ty, 270, 250, 12); c.fillStyle = '#f8fafc'; c.fill(); c.strokeStyle = '#94a3b8'; c.lineWidth = 3; c.stroke(); text(c, 'Spotting tile + iodine', tx + 135, ty + 18, { size: 12, w: 700, col: '#475569' });
    for (let i = 0; i < 8; i++) { const wx = tx + 40 + (i % 4) * 63, wy = ty + 80 + Math.floor(i / 4) * 80, tm = i * 2.5; const reached = v >= tm, d = clamp((digest * 0) + seg(tm, 2, 14), 0, 1); circle(c, wx, wy, 24, '#e2e8f0', '#64748b', 2); if (reached) { circle(c, wx, wy, 19, rgb(mix([25, 18, 90], [215, 170, 60], d))); } text(c, tm + ' min', wx, wy + 38, { size: 10, col: '#64748b' }); }
    if (v % 2.5 < .4 && v > .1) drip(c, 500, 170, 230, t, [215, 170, 60]);
    tag(digest > .6 ? 'Iodine stays brown-yellow: starch gone (→ maltose)' : 'Blue-black = starch still present', 800, ty + 210, { x: 800, y: 450, col: '#4338ca', line: false }); tag('Boiled saliva: enzyme denatured, starch stays', 520, BENCH - 60, { x: 520, y: 100, col: '#b91c1c' });
    text(c, 'Starch →(salivary amylase, pH ≈ 7, 37 °C) maltose', 500, 36, { size: 17, w: 700, col: '#334155' });
  },
  info(s) { const d = seg(s.v, 2, 14); return { obs: d < .2 ? 'At first iodine gives deep blue-black: lots of starch.' : d < .9 ? 'Successive samples give paler colours as amylase breaks starch into maltose.' : 'Iodine remains brownish-yellow: all starch has been digested. The boiled-saliva tube is unchanged.', read: [['Time', fix(s.v, 1), 'min'], ['Starch left', fix((1 - d) * 100, 0), '%'], ['Maltose', fix(d * 100, 0), '%'], ['Control tube', 'unchanged', '']] }; }
};

SCENES_REG.imbibition = {
  dur: 10, control: { label: 'Soaking time', min: 0, max: 120, step: 1, value: 0, unit: 'min' },
  draw(c, s) {
    labBG(c); const { t, v, u } = s; const sw = 1 + .55 * (1 - Math.exp(-v / 45)); const B = beaker(500, BENCH, 300, 200); shadowE(c, 500, BENCH, 330);
    drawVessel(c, B, { level: .7, color: LIQ.water, alpha: .45, t, marks: [[.3, '50'], [.55, '100']], inside(c) { for (const [x, y, k] of [[450, B.bot - 28, 1], [550, B.bot - 28, 1]]) { c.save(); c.translate(x, y - 8 * (sw - 1)); c.scale(sw * 1.0, sw * .96); const g = c.createRadialGradient(-6, -8, 2, 0, 0, 24); g.addColorStop(0, `rgb(${120 - 30 * (sw - 1) / .55},${50 + 30 * (sw - 1) / .55},${70})`); g.addColorStop(1, `rgb(${70},${28 + 15 * (sw - 1) / .55},${50})`); c.fillStyle = g; c.beginPath(); c.ellipse(0, 0, 22, 16, .3, 0, TAU); c.fill(); const wr = (1 - (sw - 1) / .55) * 3; c.strokeStyle = `rgba(30,10,20,${.5 * (1 - (sw - 1) / .55)})`; c.lineWidth = 1; for (let i = -2; i <= 2; i++) { c.beginPath(); c.arc(i * 6, 0, 8 + wr, 1, 2.2); c.stroke(); } c.restore(); } if (v > 2) for (let i = 0; i < 10; i++) { const q = (t * .3 + i / 10) % 1; circle(c, 480 + hash(i) * 40 + Math.sin(q * 6) * 6, B.yAt(.55) + q * 70, 2, 'rgba(180,220,255,.8)'); } } });
    // balance readout
    const mass = 5 * sw; rr(c, 70, 130, 170, 90, 12); c.fillStyle = '#1e293b'; c.fill(); text(c, fix(mass, 2) + ' g', 155, 172, { size: 30, w: 800, col: '#7dd3fc', font: 'ui-monospace,monospace' }); text(c, 'mass of 10 raisins', 155, 205, { size: 11, col: '#94a3b8' });
    tag('Raisins swelling (endosmosis)', 500, B.bot - 30, { x: 780, y: 360, col: '#7c2d12' }); tag('Distilled water', 600, B.yAt(.35), { x: 800, y: 270, col: '#0f4c75' });
    text(c, '% water absorbed = (W₂ − W₁) / W₁ × 100', 500, 36, { size: 17, w: 700, col: '#334155' });
  },
  info(s) { const sw = 1 + .55 * (1 - Math.exp(-s.v / 45)); return { obs: 'Water moves into the raisins through their semi-permeable skin (osmosis/imbibition); they swell and become plump.', read: [['Time', Math.round(s.v), 'min'], ['Mass', fix(5 * sw, 2), 'g'], ['Water absorbed', fix((sw - 1) * 100, 0), '%'], ['Size', fix(sw * 100, 0), '%']] }; },
  micro(c, s) { const { t, v } = s, B = micro(c, W - 346, 16, 330, 230, 'OSMOSIS ACROSS RAISIN SKIN'); c.save(); rr(c, B.x, B.y, B.w, B.h, 14); c.clip(); c.fillStyle = 'rgba(120,60,80,.4)'; c.fillRect(B.x, B.y + 110, B.w, 120); c.strokeStyle = '#fbbf24'; c.lineWidth = 3; c.setLineDash([6, 4]); c.beginPath(); c.moveTo(B.x, B.y + 110); c.lineTo(B.x + B.w, B.y + 110); c.stroke(); c.setLineDash([]);
    for (let i = 0; i < 12; i++) { const q = (t * .3 + i / 12) % 1; ion(c, B.x + 25 + (i % 6) * 50, B.y + 40 + q * 120, 7, [96, 165, 250], '', t, i, 2); } for (let i = 0; i < 5; i++) ion(c, B.x + 40 + i * 62, B.y + 180, 10, [244, 114, 182], 'S', t, i, 2); text(c, 'Water: high → low water potential', B.x + B.w / 2, B.y + B.h - 12, { size: 10.5, col: '#cbd5e1' }); c.restore(); }
};

SCENES_REG.phototropism = {
  dur: 11, control: { label: 'Days', min: 0, max: 6, step: .1, value: 0, unit: 'days', fmt: v => fix(v, 1) + ' d' },
  draw(c, s) {
    const { t, v, u } = s; labBG(c, { top: '#1f2a44', bot: '#2b3a5c' }); c.fillStyle = '#334155'; rr(c, 120, 90, 760, 380, 12); c.fill(); c.fillStyle = '#0f172a'; rr(c, 134, 104, 732, 352, 8); c.fill();
    // slit window left with light
    c.fillStyle = '#fde68a'; c.fillRect(120, 200, 14, 110); for (let i = 0; i < 6; i++) { const y = 215 + i * 16; const g = c.createLinearGradient(134, 0, 520, 0); g.addColorStop(0, 'rgba(253,224,71,.7)'); g.addColorStop(1, 'rgba(253,224,71,0)'); c.strokeStyle = g; c.lineWidth = 6; c.beginPath(); c.moveTo(134, y); c.lineTo(540, y + 30); c.stroke(); }
    text(c, 'Light from one side', 230, 160, { size: 13, col: '#fde68a' }); c.fillStyle = '#6b4a2f'; rr(c, 150, 420, 700, 36, 6); c.fill();
    const bend = easeOut(u) * .95; [[420], [600], [740]].forEach(([x], i) => { const h = 110 + u * 90 + i * 8, bx = x; c.save(); c.translate(bx, 420); c.lineCap = 'round'; c.strokeStyle = '#86efac'; c.lineWidth = 11; c.beginPath(); c.moveTo(0, 0); const bendx = -(bend * (60 + i * 6)); c.quadraticCurveTo(0, -h * .55, bendx, -h); c.stroke(); c.strokeStyle = 'rgba(255,255,255,.3)'; c.lineWidth = 2.5; c.beginPath(); c.moveTo(-2, -4); c.quadraticCurveTo(-2, -h * .55, bendx - 2, -h + 4); c.stroke(); leafShape(c, bendx, -h, 28, 11, -2.2 + bend * .4, '#4ade80'); leafShape(c, bendx, -h, 28, 11, -.7 + bend * .4, '#4ade80');
      // auxin dots on dark side
      if (i === 0) for (let k = 0; k < 14; k++) { const yy = -10 - hash(k) * h * .8, xx = 7 + hash(k * 3) * 3 * (1 - bend * .3) + (-(bend) * 30 * (-yy / h) ** 2); circle(c, xx, yy, 2.4, '#f59e0b'); circle(c, -7 - hash(k) * 2, yy, 1.6, 'rgba(245,158,11,.35)'); } c.restore(); });
    tag('Auxin accumulates on the shaded side', 430, 340, { x: 700, y: 175, col: '#fbbf24' }); tag('Cells on the dark side elongate more → shoot bends TOWARDS light', 400, 230, { x: 640, y: 135, col: '#bbf7d0', line: false, dot: false });
    text(c, 'Phototropism: shoots show positive tropism towards unilateral light', 500, 36, { size: 17, w: 700, col: '#e2e8f0' });
  },
  info(s) { const b = easeOut(s.u); return { obs: 'With light from one side the shoots bend towards it; the hormone auxin collects on the shaded side, making cells there grow longer.', read: [['Day', fix(s.v, 1), ''], ['Bend angle', fix(b * 52, 0), '°'], ['Shoot height', fix(2 + s.u * 4, 1), 'cm'], ['Auxin (dark side)', fix(50 + b * 40, 0), '%']] }; }
};

SCENES_REG.geotropism = {
  dur: 11, control: { label: 'Days since horizontal', min: 0, max: 5, step: .1, value: 0, unit: 'days', fmt: v => fix(v, 1) + ' d' },
  draw(c, s) {
    const { t, v, u } = s; labBG(c); const b = easeOut(u); // horizontal pot with seedling
    c.fillStyle = '#e2e8f0'; rr(c, 180, 190, 640, 200, 14); c.fill(); c.strokeStyle = '#94a3b8'; c.lineWidth = 3; c.stroke(); c.fillStyle = '#a07050'; rr(c, 192, 202, 616, 176, 8); c.fill(); for (let i = 0; i < 120; i++) { c.fillStyle = `rgba(90,60,40,${.3 + hash(i) * .4})`; c.fillRect(196 + hash(i) * 608, 206 + hash(i * 3) * 168, 3, 3); }
    const seeds = [[320], [500], [680]]; seeds.forEach(([x], i) => { const y = 290; c.save(); c.translate(x, y); ell(c, 0, 0, 16, 11, '#d6b370', '#8a6a2a', 1.5);
      // root: bends downward (positive geotropism)
      c.strokeStyle = '#f5f0dc'; c.lineWidth = 6; c.lineCap = 'round'; c.beginPath(); c.moveTo(12, 0); const rl = 40 + u * 70; c.bezierCurveTo(12 + rl * (1 - b * .8) * .6, 0, 12 + rl * (1 - b) * .8, 10 * b, 12 + rl * (1 - b * .9) * .9, rl * b * .9); c.stroke();
      // shoot: bends upward (negative geotropism)
      c.strokeStyle = '#86efac'; c.lineWidth = 7; c.beginPath(); c.moveTo(-12, 0); const sl = 40 + u * 70; c.bezierCurveTo(-12 - sl * (1 - b * .8) * .6, 0, -12 - sl * (1 - b) * .8, -10 * b, -12 - sl * (1 - b * .9) * .9, -sl * b * .9); c.stroke(); c.restore(); });
    // gravity arrow
    arrow(c, 900, 150, 900, 260, '#6366f1', 5, 14); text(c, 'Gravity', 900, 290, { size: 14, w: 800, col: '#4338ca' });
    tag('Root bends DOWN (positive geotropism)', 640, 330, { x: 560, y: 460, col: '#92400e' }); tag('Shoot bends UP (negative geotropism)', 280, 235, { x: 270, y: 100, col: '#166534' });
    text(c, 'Roots grow towards gravity; shoots grow away from it', 500, 36, { size: 17, w: 700, col: '#334155' });
  },
  info(s) { const b = easeOut(s.u); return { obs: 'Placed horizontally, the root tip curves downward and the shoot curves upward — a response to gravity.', read: [['Day', fix(s.v, 1), ''], ['Root bend', fix(b * 85, 0), '° down'], ['Shoot bend', fix(b * 85, 0), '° up'], ['Stimulus', 'gravity', '']] }; }
};

SCENES_REG.fission = {
  stages: ['Amoeba — binary fission', 'Yeast — budding', 'Planaria — regeneration'], dur: 11,
  control: { label: 'Reproduction stage', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    const { t, u, stage } = s; c.save(); const g = c.createRadialGradient(500, 280, 40, 500, 280, 600); g.addColorStop(0, '#e6f4ea'); g.addColorStop(1, '#c4dfd1'); c.fillStyle = g; c.fillRect(0, 0, W, H);
    for (let i = 0; i < 40; i++) circle(c, hash(i) * W, hash(i * 3) * H, 2 + hash(i * 5) * 5, 'rgba(255,255,255,.35)'); c.restore();
    if (stage === 0) { const f = u, sep = seg(f, .6, 1), n2 = seg(f, .2, .55), elong = seg(f, .3, .7); const lx = 500 - sep * 130, rx = 500 + sep * 130;
      [[lx, -1], [rx, 1]].forEach(([x, sd], k) => { if (f < .7 && k === 1) return; const w = f < .7 ? 120 + elong * 90 : 95; c.save(); if (f < .7) { cellBlob(c, 500, 290, w, 82 - elong * 10, 'rgba(180,215,235,.85)', '#3b82a0', .06, t); } else cellBlob(c, x, 290, 95 + (1 - sep) * 25, 78, 'rgba(180,215,235,.85)', '#3b82a0', .06, t, k); c.restore(); });
      if (f < .7) { const nx = lerp(500, 500 + 0, 1); const sepn = n2 * 55; circle(c, 500 - sepn, 290, 26, 'rgba(70,90,170,.85)', '#1e3a8a', 2); if (n2 > .05) circle(c, 500 + sepn, 290, 26, 'rgba(70,90,170,.85)', '#1e3a8a', 2); if (elong > .5) { c.strokeStyle = '#3b82a0'; c.lineWidth = 3; c.beginPath(); c.moveTo(500, 220 + elong * 25); c.lineTo(500, 360 - elong * 25); c.stroke(); } } else { circle(c, lx, 290, 26, 'rgba(70,90,170,.85)', '#1e3a8a', 2); circle(c, rx, 290, 26, 'rgba(70,90,170,.85)', '#1e3a8a', 2); }
      // pseudopodia
      for (let k = 0; k < 6; k++) { const a = k / 6 * TAU + t * .4; c.strokeStyle = 'rgba(59,130,160,.6)'; c.lineWidth = 6; c.lineCap = 'round'; c.beginPath(); c.moveTo(500 + Math.cos(a) * 80, 290 + Math.sin(a) * 60); c.lineTo(500 + Math.cos(a) * (110 + Math.sin(t * 2 + k) * 10), 290 + Math.sin(a) * (84 + Math.sin(t * 2 + k) * 8)); c.stroke(); }
      tag('Nucleus divides first (karyokinesis)', 500, 290, { x: 230, y: 130, col: '#1e3a8a' }); tag(f > .5 ? 'Cytoplasm divides (cytokinesis)' : 'Parent amoeba', 500, 330, { x: 790, y: 440, col: '#0f766e' }); if (f > .9) tag('Two identical daughter amoebae', lx, 365, { x: 500, y: 480, col: '#166534', line: false });
      text(c, 'Binary fission: one parent → two genetically identical daughters', 500, 36, { size: 17, w: 700, col: '#1f3a33' });
    } else if (stage === 1) { const b = seg(u, .1, .8), det = seg(u, .85, 1); const px = 440, py = 300; cellBlob(c, px, py, 98, 85, 'rgba(250,235,170,.9)', '#a16207', .03, t); circle(c, px - 15, py - 10, 24, 'rgba(160,120,40,.55)', '#78350f', 2); const bx = px + 95 + det * 70, by = py - 62 - det * 25, br = 8 + b * 50; if (b > .02) { c.strokeStyle = '#a16207'; c.lineWidth = 3; if (!det) { c.fillStyle = 'rgba(250,235,170,.9)'; } cellBlob(c, bx - (1 - det) * 12 * b, by + (1 - det) * 12 * b, br, br * .95, 'rgba(250,235,170,.95)', '#a16207', .02, t, 3); if (b > .5) circle(c, bx + 4, by, br * .3, 'rgba(160,120,40,.55)', '#78350f', 1.5); }
      cellBlob(c, 660, 440, 28, 25, 'rgba(250,235,170,.85)', '#a16207', .03, t, 2); cellBlob(c, 730, 410, 20, 18, 'rgba(250,235,170,.85)', '#a16207', .03, t, 5); tag('Parent yeast cell', px, py + 40, { x: 220, y: 440, col: '#92400e' }); tag(det > .5 ? 'Bud has detached: new yeast cell' : 'Bud growing from a local outgrowth', bx, by, { x: 790, y: 160, col: '#166534' });
      text(c, 'Budding: a small outgrowth swells, receives a nucleus copy and separates', 500, 36, { size: 17, w: 700, col: '#1f3a33' });
    } else { const cut = seg(u, .05, .25), reg = seg(u, .3, 1); const pl = (x, y, len, ang, head, tail) => { c.save(); c.translate(x, y); c.rotate(ang); c.fillStyle = '#6b4f3a'; c.beginPath(); c.moveTo(-len / 2, 0); c.bezierCurveTo(-len / 4, -26, len / 4, -26, len / 2 - 6, -6 * 0); c.bezierCurveTo(len / 4, 26, -len / 4, 26, -len / 2, 0); c.fill(); c.restore(); };
      const L = 260; if (cut < .1) pl(500, 290, L, 0); else { const gap = cut * 70; const a = lerp(0, 0, 1); [[500 - L * .27 - gap, L * .46, -1], [500 + L * .27 + gap, L * .46, 1]].forEach(([x, w, sd], i) => { pl(x, 290, w + reg * (i ? 60 : 56), 0); c.save(); c.translate(x + (i ? 1 : -1) * 0, 290); if (i === 0) { circle(c, -(w + reg * 56) / 2 + 24, -8, 4, '#fff'); circle(c, -(w + reg * 56) / 2 + 24, 8, 4, '#fff'); circle(c, -(w + reg * 56) / 2 + 25, -8, 1.8, '#000'); circle(c, -(w + reg * 56) / 2 + 25, 8, 1.8, '#000'); } else { circle(c, (w + reg * 60) / 2 - 24, -8, 4, '#fff'); circle(c, (w + reg * 60) / 2 - 24, 8, 4, '#fff'); circle(c, (w + reg * 60) / 2 - 25, -8, 1.8, '#000'); circle(c, (w + reg * 60) / 2 - 25, 8, 1.8, '#000'); } c.restore(); }); c.strokeStyle = '#ef4444'; c.lineWidth = 3; c.setLineDash([5, 4]); if (cut < 1 && cut > .1) { c.beginPath(); c.moveTo(500, 240); c.lineTo(500, 340); c.stroke(); } c.setLineDash([]); }
      tag(cut < .1 ? 'Planaria flatworm' : reg < .9 ? 'Cells regrow the missing part' : 'Two complete worms (regeneration)', 500, 290, { x: 500, y: 450, col: '#334155', line: false }); text(c, 'Regeneration: specialised cells de-differentiate and rebuild lost parts', 500, 36, { size: 17, w: 700, col: '#1f3a33' }); }
  },
  info(s) { const { u, stage } = s; return [{ obs: u < .5 ? 'The amoeba\'s nucleus elongates and divides into two.' : 'The cytoplasm pinches in the middle — two identical daughter amoebae form.', read: [['Stage', u < .3 ? 'nuclear division' : u < .7 ? 'cytoplasmic division' : 'two cells', ''], ['Daughter cells', u > .65 ? 2 : 1, ''], ['Genetic make-up', 'identical (clone)', '']] }, { obs: 'A bud grows on the parent yeast cell, enlarges and finally breaks away.', read: [['Bud size', fix(seg(u, .1, .8) * 100, 0), '%'], ['Detached', u > .9 ? 'yes' : 'no', ''], ['Type', 'asexual', '']] }, { obs: 'A cut Planaria regenerates the missing half; each piece becomes a complete worm.', read: [['Regenerated', fix(seg(u, .3, 1) * 100, 0), '%'], ['Pieces', u > .1 ? 2 : 1, ''], ['Type', 'regeneration', '']] }][stage]; }
};

SCENES_REG.vegetative = {
  stages: ['Potato — tubers (eyes)', 'Bryophyllum — leaf buds', 'Rose — stem cutting'], dur: 11,
  control: { label: 'Days', min: 0, max: 14, step: .5, value: 0, unit: 'days', fmt: v => fix(v, 1) + ' d' },
  draw(c, s) {
    const { t, u, stage } = s; labBG(c, { top: '#eef7ee', bot: '#d5ead7' }); const grow = easeOut(u);
    if (stage === 0) { const px = 500; c.fillStyle = '#6b4a2f'; rr(c, 200, 400, 600, 100, 10); c.fill(); for (let i = 0; i < 100; i++) { c.fillStyle = `rgba(60,40,25,${.3 + hash(i) * .4})`; c.fillRect(205 + hash(i) * 590, 404 + hash(i * 3) * 92, 3, 3); }
      [[330], [650]].forEach(([x], k) => { c.save(); c.translate(x, 400); c.fillStyle = '#c9a05b'; c.beginPath(); c.ellipse(0, 28, 62, 40, .2 * (k ? -1 : 1), 0, TAU); c.fill(); c.strokeStyle = '#8a6a2a'; c.lineWidth = 2; c.stroke(); [[-30, 6], [18, 14], [30, 40]].forEach(([ex, ey]) => { circle(c, ex, ey, 4, '#7a5a20'); }); // sprouts from the eyes
        [[-30, 6], [18, 14]].forEach(([ex, ey], j) => { const h = grow * (110 + j * 25); c.strokeStyle = '#6dbf63'; c.lineWidth = 6; c.lineCap = 'round'; c.beginPath(); c.moveTo(ex, ey); c.quadraticCurveTo(ex + (j ? 12 : -12), ey - h * .5, ex + (j ? 18 : -18), ey - h); c.stroke(); if (grow > .35) { leafShape(c, ex + (j ? 18 : -18), ey - h, 34 * grow, 12 * grow, -2.2, '#4ade80'); leafShape(c, ex + (j ? 18 : -18), ey - h, 34 * grow, 12 * grow, -.9, '#4ade80'); } }); // roots
        for (let r = 0; r < 5; r++) { c.strokeStyle = '#f1e8d0'; c.lineWidth = 2.4; c.beginPath(); c.moveTo(-20 + r * 12, 60); c.quadraticCurveTo(-30 + r * 16, 80 + grow * 40, -40 + r * 22 + Math.sin(r) * 10, 70 + grow * 70); c.stroke(); } c.restore(); }); tag('Eyes (buds) sprout', 312, 405, { x: 160, y: 250, col: '#166534' }); tag('Potato tuber', 650, 440, { x: 800, y: 300, col: '#92400e' });
      text(c, 'Potato: each “eye” is a bud that grows into a new plant genetically identical to the parent', 500, 36, { size: 16, w: 700, col: '#1f3a33' });
    } else if (stage === 1) { c.save(); c.translate(500, 300); leafShape(c, -190, 20, 380, 130, 0, 'rgb(80,170,90)', '#2f7d32'); c.restore(); for (let i = 0; i < 6; i++) { const x = 340 + i * 60, y = 290 + Math.sin(i * 1.2) * 4 + (i % 2) * 6; const g = grow * (1 - Math.abs(i - 2.5) * .05); if (g > .03) { c.save(); c.translate(x, y + 14); c.strokeStyle = '#f1e8d0'; c.lineWidth = 2; for (let r = 0; r < 4; r++) { c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(-8 + r * 5, 22 * g, -14 + r * 9, 44 * g); c.stroke(); } leafShape(c, 0, 0, 34 * g, 13 * g, -1.9, '#4ade80'); leafShape(c, 0, 0, 34 * g, 13 * g, -1.25, '#4ade80'); c.restore(); } }
      tag('Plantlets arise at leaf notches', 400, 305, { x: 250, y: 150, col: '#166534' }); tag('Adventitious roots', 360, 345, { x: 760, y: 440, col: '#92400e' }); text(c, 'Bryophyllum: adventitious buds in leaf margins grow into complete plantlets', 500, 36, { size: 16, w: 700, col: '#1f3a33' });
    } else { const B = beaker(500, BENCH, 200, 200); shadowE(c, 500, BENCH, 230); drawVessel(c, B, { level: .6, color: LIQ.water, alpha: .4, t, inside(c) { c.strokeStyle = '#7a4a2a'; c.lineWidth = 10; c.lineCap = 'round'; c.beginPath(); c.moveTo(500, B.bot - 16); c.lineTo(500, B.top - 120); c.stroke(); for (let r = 0; r < 7; r++) { const a = -.9 + r * .3; c.strokeStyle = '#f1e8d0'; c.lineWidth = 2.4; c.beginPath(); c.moveTo(500, B.bot - 18); c.quadraticCurveTo(500 + Math.sin(a) * 40 * grow, B.bot - 18 + 20 * grow, 500 + Math.sin(a) * 70 * grow, B.bot - 18 + 38 * grow - Math.abs(a) * 10); c.stroke(); } } }); [[-1, 60], [1, 90]].forEach(([sd, h]) => leafShape(c, 500, B.top - h, 60 + grow * 20, 20, sd < 0 ? -2.6 : -.5, '#4ade80', '#2f7d32')); circle(c, 500, B.top - 130, 14, '#f43f5e', '#9f1239', 2);
      tag('Node with buds', 500, B.top - 70, { x: 760, y: 150, col: '#166534' }); tag(grow > .3 ? 'New roots growing' : 'Cutting in water', 500, B.bot - 20, { x: 790, y: 380, col: '#92400e' }); text(c, 'Cuttings with a node develop roots and grow into new plants (clones)', 500, 36, { size: 16, w: 700, col: '#1f3a33' }); }
  },
  info(s) { const g = easeOut(s.u); return { obs: 'New plants arise from vegetative parts — no seeds, no gametes, no fusion: the offspring are clones of the parent.', read: [['Day', fix(s.v, 1), ''], ['Sprout height', fix(g * 9, 1), 'cm'], ['Roots', g > .2 ? 'present' : 'none', ''], ['Reproduction', 'asexual', '']] }; }
};

SCENES_REG.flower = {
  stages: ['Parts of a flower', 'Pollination & fertilisation'], dur: 11,
  control: st => st === 0 ? { label: 'Whorl highlighted (0 all · 1 sepals · 2 petals · 3 stamen · 4 carpel)', min: 0, max: 4, step: 1, value: 0, unit: '', fmt: v => ['Whole flower', 'Calyx (sepals)', 'Corolla (petals)', 'Androecium (stamens)', 'Gynoecium (carpel)'][v] } : { label: 'Pollination progress', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    const { t, u, v, stage } = s; skyBG(c, { top: '#e9f6ff', mid: '#f6fbff', bot: '#dff0d0' }); const hi = stage === 0 ? v : 0; const dim = k => (hi === 0 || hi === k) ? 1 : .22;
    const fx = 500, fy = 290; c.strokeStyle = '#4caf50'; c.lineWidth = 12; c.beginPath(); c.moveTo(fx, fy + 100); c.lineTo(fx, 540); c.stroke(); // receptacle & stalk
    // sepals
    c.save(); c.globalAlpha = dim(1); [-1.2, -.5, .5, 1.2].forEach(a => { c.save(); c.translate(fx, fy + 90); c.rotate(a + Math.PI); c.fillStyle = '#4caf50'; c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(24, 36, 0, 70); c.quadraticCurveTo(-24, 36, 0, 0); c.fill(); c.restore(); }); c.restore();
    // petals
    c.save(); c.globalAlpha = dim(2); for (let i = 0; i < 6; i++) { const a = -Math.PI / 2 + (i - 2.5) * .55; c.save(); c.translate(fx, fy + 60); c.rotate(a); const g = c.createLinearGradient(0, 0, 0, -150); g.addColorStop(0, '#fb7185'); g.addColorStop(1, '#fda4af'); c.fillStyle = g; c.beginPath(); c.moveTo(0, 0); c.bezierCurveTo(-60, -50, -50, -150, 0, -160); c.bezierCurveTo(50, -150, 60, -50, 0, 0); c.fill(); c.strokeStyle = 'rgba(190,24,93,.4)'; c.lineWidth = 1.5; c.stroke(); c.restore(); } c.restore();
    // stamens
    c.save(); c.globalAlpha = dim(3); [-110, -66, 66, 110].forEach((dx, i) => { const sx = fx + dx * .45, ex = fx + dx, ey = fy - 100 - (i % 2) * 14; c.strokeStyle = '#d4a017'; c.lineWidth = 4; c.beginPath(); c.moveTo(sx, fy + 60); c.quadraticCurveTo(sx + dx * .1, fy - 20, ex, ey); c.stroke(); ell(c, ex, ey, 11, 18, '#facc15', '#a16207', 2, dx > 0 ? .3 : -.3); for (let k = 0; k < 5; k++) circle(c, ex + (hash(k + i) - .5) * 14, ey + (hash(k * 2 + i) - .5) * 24, 2, '#f59e0b'); }); c.restore();
    // carpel
    c.save(); c.globalAlpha = dim(4); c.fillStyle = '#86efac'; ell(c, fx, fy + 70, 30, 36, '#86efac', '#15803d', 2); c.strokeStyle = '#4ade80'; c.lineWidth = 8; c.beginPath(); c.moveTo(fx, fy + 40); c.lineTo(fx, fy - 70); c.stroke(); const stg = c.createRadialGradient(fx, fy - 82, 2, fx, fy - 82, 16); stg.addColorStop(0, '#fde047'); stg.addColorStop(1, '#22c55e'); circle(c, fx, fy - 80, 15, stg, '#15803d', 2); for (let i = 0; i < 3; i++) circle(c, fx + (i - 1) * 12, fy + 74, 7, '#4ade80', '#15803d', 1.5); c.restore();
    if (stage === 1) { const poll = seg(u, .05, .35), tubeG = seg(u, .35, .75), fert = seg(u, .75, 1); // bee & pollen
      const bx = lerp(150, 440, easeOut(poll)), by = lerp(110, 215, easeOut(poll)) + Math.sin(t * 8) * 4; if (poll < 1 || fert < .1) { c.save(); c.translate(bx, by); ell(c, 0, 0, 18, 12, '#facc15', '#78350f', 2); c.fillStyle = '#78350f'; c.fillRect(-5, -11, 5, 22); c.fillRect(5, -10, 4, 20); ell(c, -6, -14, 14, 6, 'rgba(255,255,255,.7)', null, 0, -.4 + Math.sin(t * 40) * .3); circle(c, 16, -2, 3, '#111'); c.restore(); }
      for (let i = 0; i < 8; i++) { const q = (poll * 1.2 + i * .05); const px = lerp(fx - 110, fx, clamp(q - i * .02, 0, 1)) + (hash(i) - .5) * 12, py = lerp(fy - 100, fy - 84, clamp(q, 0, 1)); if (poll > .02 && poll < 1.02) circle(c, px, py - 14 * Math.sin(clamp(q, 0, 1) * Math.PI), 2.4, '#fbbf24'); }
      if (tubeG > 0) { c.strokeStyle = '#facc15'; c.lineWidth = 3; c.beginPath(); c.moveTo(fx - 3, fy - 80); c.lineTo(fx - 3, lerp(fy - 80, fy + 66, tubeG)); c.stroke(); circle(c, fx - 3, lerp(fy - 80, fy + 66, tubeG), 4, '#f59e0b'); }
      if (fert > .1) { circle(c, fx, fy + 74, 12 + fert * 8, `rgba(250,204,21,${fert * .8})`); text(c, 'Zygote', fx + 80, fy + 76, { size: 12, w: 800, col: '#92400e' }); }
      tag(poll < 1 ? 'Pollen carried by insect (cross-pollination)' : 'Pollen grain lands on stigma', 440, 215, { x: 230, y: 150, col: '#a16207' }); if (tubeG > 0) tag('Pollen tube grows down the style', fx - 3, fy - 10, { x: 790, y: 190, col: '#a16207' }); if (fert > .1) tag('Male gamete fuses with egg in ovule', fx, fy + 74, { x: 790, y: 360, col: '#15803d' });
      text(c, 'Pollination → pollen tube → fertilisation → zygote → seed; ovary → fruit', 500, 36, { size: 16, w: 700, col: '#1f3a33' });
    } else { const labels = [['Petal', fx + 70, fy - 80, 790, 120, 2], ['Anther', fx + 110, fy - 100, 810, 190, 3], ['Filament', fx + 50, fy - 40, 830, 260, 3], ['Stigma', fx, fy - 80, 180, 130, 4], ['Style', fx, fy - 20, 170, 200, 4], ['Ovary', fx, fy + 74, 170, 330, 4], ['Ovule', fx + 12, fy + 74, 800, 340, 4], ['Sepal', fx - 30, fy + 130, 180, 440, 1], ['Thalamus', fx, fy + 102, 820, 440, 1]]; labels.forEach(([n, px, py, lx, ly, w]) => { if (hi === 0 || hi === w) tag(n, px, py, { x: lx, y: ly, col: hi === w ? '#be185d' : '#475569' }); }); text(c, ['Parts of a flower — choose a whorl', 'Calyx: protects the bud', 'Corolla: attracts pollinators', 'Androecium (male): anther makes pollen', 'Gynoecium (female): stigma, style, ovary'][hi], 500, 36, { size: 17, w: 700, col: '#1f3a33' }); }
  },
  info(s) { const { u, v, stage } = s; return stage === 0 ? { obs: ['All four whorls are shown: calyx, corolla, androecium and gynoecium.', 'Green sepals protect the developing bud.', 'Coloured petals attract insects.', 'Stamens: filament + anther produce pollen (male gametes).', 'Carpel: stigma receives pollen, style conducts, ovary holds ovules.'][v], read: [['Whorl', ['all', 'calyx', 'corolla', 'androecium', 'gynoecium'][v], ''], ['Sex role', ['—', 'protective', 'attractive', 'male', 'female'][v], ''], ['Floral organs', [4, 4, 6, 4, 1][v] , 'shown']] } : { obs: 'Pollen reaches the stigma, grows a tube to the ovule and the male gamete fuses with the egg.', read: [['Pollination', fix(seg(u, .05, .35) * 100, 0), '%'], ['Pollen tube', fix(seg(u, .35, .75) * 100, 0), '%'], ['Fertilised', u > .8 ? 'yes' : 'no', '']] }; }
};

SCENES_REG.homology = {
  stages: ['Homologous: forelimbs', 'Analogous: wings'], dur: 10,
  control: st => st === 0 ? { label: 'Bone highlighted (0 all · 1 humerus · 2 radius+ulna · 3 carpals · 4 digits)', min: 0, max: 4, step: 1, value: 0, unit: '', fmt: v => ['All bones', 'Humerus', 'Radius & ulna', 'Carpals & metacarpals', 'Phalanges (digits)'][v] } : { label: 'Compare', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    const { t, u, v, stage } = s; labBG(c, { noBench: true, top: '#f5f8fc', bot: '#e6edf5' }); const cols = ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
    const bone = (x1, y1, x2, y2, w, k) => { const a = Math.atan2(y2 - y1, x2 - x1), d = Math.hypot(x2 - x1, y2 - y1); const hl = stage === 0 && (v === 0 || v === k); c.save(); c.translate(x1, y1); c.rotate(a); c.globalAlpha = hl ? 1 : .25; c.fillStyle = hl ? cols[k - 1] : '#94a3b8'; c.strokeStyle = 'rgba(0,0,0,.35)'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(0, -w * .35); c.quadraticCurveTo(d * .5, -w * .2, d, -w * .5); c.arc(d, 0, w * .5, -Math.PI / 2, Math.PI / 2); c.quadraticCurveTo(d * .5, w * .2, 0, w * .35); c.arc(0, 0, w * .38, Math.PI / 2, -Math.PI / 2); c.fill(); c.stroke(); c.restore(); };
    if (stage === 0) { const limbs = [['Human arm', 140, [[0, 0, 0, 90], [-8, 92, -8, 170, 1], [8, 92, 12, 170], [0, 175, 0, 195, 3], [-10, 196, -22, 245], [-3, 196, -4, 252], [4, 196, 10, 250], [10, 194, 24, 240], [-16, 190, -40, 220]]], ['Cat foreleg', 360, [[0, 0, 0, 70], [-6, 72, -6, 150], [6, 72, 10, 150], [0, 155, 0, 178, 3], [-8, 180, -14, 235], [0, 180, 0, 240], [8, 180, 14, 235]]], ['Whale flipper', 620, [[0, 0, 0, 50], [-12, 54, -14, 118], [12, 54, 14, 118], [0, 122, 0, 135, 3], [-18, 140, -26, 220], [-6, 140, -8, 235], [6, 140, 8, 235], [18, 140, 26, 210]]], ['Bat wing', 860, [[0, 0, 0, 80], [-6, 82, -6, 172], [6, 82, 8, 172], [0, 176, 0, 190, 3], [-10, 194, -80, 220], [-3, 194, -50, 270], [4, 194, 10, 280], [12, 194, 70, 262]]]];
      limbs.forEach(([nm, x0, bones]) => { c.save(); c.translate(x0, 120); const sway = Math.sin(t * 1.2 + x0) * .03; c.rotate(sway); if (nm === 'Bat wing') { c.fillStyle = 'rgba(180,140,120,.35)'; poly(c, [[0, 120], [-80, 222], [-50, 272], [10, 282], [70, 264], [10, 120]]); c.fill(); } if (nm === 'Whale flipper') { c.fillStyle = 'rgba(100,130,160,.25)'; c.beginPath(); c.ellipse(0, 150, 46, 118, 0, 0, TAU); c.fill(); } bones.forEach(([a, b, d, e, k], i) => { const kk = k || (i === 0 ? 1 : i <= 2 ? 2 : i === 3 ? 3 : 4); bone(a, b, d, e, i === 0 ? 20 : i < 3 ? 14 : i === 3 ? 18 : 9, i === 0 ? 1 : (i === 1 || i === 2) ? 2 : i === 3 ? 3 : 4); }); c.restore(); text(c, nm, x0, 440, { size: 14, w: 800, col: '#334155' }); });
      tag('Same bones, same plan — different functions', 500, 330, { x: 500, y: 490, col: '#0f4c75', line: false, size: 14 }); text(c, 'Humerus → radius & ulna → carpals → metacarpals → phalanges', 500, 36, { size: 17, w: 700, col: '#1e3a5f' });
    } else { const items = [['Bird wing', 190], ['Bat wing', 500], ['Insect wing', 810]]; items.forEach(([nm, x]) => { c.save(); c.translate(x, 290); const fl = Math.sin(t * 5 + x) * (.12 + .1 * u); c.rotate(fl);
        if (nm === 'Bird wing') { for (let i = 0; i < 9; i++) { c.save(); c.rotate(-.9 + i * .16); c.fillStyle = `hsl(${210 - i * 4},30%,${50 + i * 3}%)`; c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(14, -90, 0, -170 + i * 4); c.quadraticCurveTo(-14, -90, 0, 0); c.fill(); c.restore(); } c.strokeStyle = '#e2e8f0'; c.lineWidth = 8; c.beginPath(); c.moveTo(0, 20); c.lineTo(-20, -60); c.stroke(); }
        else if (nm === 'Bat wing') { c.fillStyle = 'rgba(120,90,80,.7)'; poly(c, [[0, 20], [-120, -80], [-60, -120], [0, -140], [60, -120], [120, -80]]); c.fill(); c.strokeStyle = '#d6c7bd'; c.lineWidth = 6; [[-120, -80], [-60, -120], [0, -140], [60, -120], [120, -80]].forEach(([a, b]) => { c.beginPath(); c.moveTo(0, 20); c.lineTo(a, b); c.stroke(); }); }
        else { c.fillStyle = 'rgba(180,220,240,.55)'; c.strokeStyle = '#3b82a0'; c.lineWidth = 2; c.beginPath(); c.moveTo(0, 20); c.bezierCurveTo(-60, -40, -50, -140, 0, -150); c.bezierCurveTo(50, -140, 60, -40, 0, 20); c.fill(); c.stroke(); for (let i = -3; i <= 3; i++) { c.beginPath(); c.moveTo(0, 20); c.quadraticCurveTo(i * 14, -60, i * 10, -140); c.stroke(); } }
        c.restore(); text(c, nm, x, 440, { size: 14, w: 800, col: '#334155' }); text(c, ['bones + feathers', 'bones + skin membrane', 'chitin + veins (no bones)'][items.findIndex(i => i[0] === nm)], x, 462, { size: 12, col: '#64748b' }); });
      tag('Different structure and origin, same function: FLIGHT', 500, 300, { x: 500, y: 100, col: '#b45309', line: false, size: 14 }); text(c, 'Analogous organs: similar function, different embryonic origin — no common ancestor', 500, 36, { size: 16, w: 700, col: '#1e3a5f' }); } },
  info(s) { return s.stage === 0 ? { obs: 'The forelimbs of a human, cat, whale and bat are built from the same bones in the same order — evidence of a common ancestor (homologous organs).', read: [['Highlighted', ['all bones', 'humerus', 'radius+ulna', 'carpals', 'phalanges'][s.v], ''], ['Origin', 'same', ''], ['Function', 'different', ''], ['Type', 'homologous', '']] } : { obs: 'Bird, bat and insect wings all enable flight but have different structure and origin (analogous organs).', read: [['Origin', 'different', ''], ['Function', 'same (flight)', ''], ['Type', 'analogous', '']] }; }
};

SCENES_REG.inheritance = {
  stages: ['Mendel — monohybrid cross', 'Sex determination'], dur: 12,
  control: { label: 'F₂ plants counted', min: 0, max: 100, step: 1, value: 0, unit: 'plants', fmt: v => Math.round(v) + ' plants' },
  draw(c, s) {
    const { t, v, u, stage } = s; labBG(c, { noBench: true, top: '#f7fbf4', bot: '#e3f1dc' });
    if (stage === 0) { // parents -> F1 -> punnett
      const plant = (x, y, tall, col, sc = 1) => { c.save(); c.translate(x, y); c.scale(sc, sc); c.strokeStyle = '#4caf50'; c.lineWidth = 6; c.beginPath(); c.moveTo(0, 0); c.lineTo(0, -(tall ? 70 : 30)); c.stroke(); leafShape(c, 0, -(tall ? 40 : 16), 22, 8, -2.4, '#4ade80'); leafShape(c, 0, -(tall ? 55 : 22), 22, 8, -.7, '#4ade80'); circle(c, 0, -(tall ? 74 : 34), 7, col); c.restore(); };
      text(c, 'P', 60, 90, { size: 16, w: 900, col: '#475569' }); plant(170, 140, 1, '#a855f7', 1); text(c, 'TT × tt', 255, 105, { size: 15, w: 800, col: '#334155' }); plant(340, 140, 0, '#e5e7eb', 1); text(c, 'Tall', 170, 160, { size: 12, col: '#475569' }); text(c, 'Dwarf', 340, 160, { size: 12, col: '#475569' });
      text(c, 'F₁', 560, 90, { size: 16, w: 900, col: '#475569' }); [0, 1, 2].forEach(i => plant(640 + i * 60, 140, 1, '#a855f7', .85)); text(c, 'All Tt (tall)', 700, 160, { size: 12, col: '#475569' });
      // Punnett square
      const px = 90, py = 215, cs = 78; const G = [['T', 'T'], ['T', 't'], ['t', 'T'], ['t', 't']]; text(c, 'F₁ × F₁ : Tt × Tt', px + cs + 10, py - 8, { size: 13, w: 800, col: '#334155', align: 'center' });
      ['T', 't'].forEach((g, i) => { text(c, g, px + cs * (i + 1.5), py + 18, { size: 20, w: 900, col: '#7c3aed' }); text(c, g, px + cs * .5, py + 18 + cs * (i + 1), { size: 20, w: 900, col: '#db2777' }); });
      for (let r = 0; r < 2; r++) for (let q = 0; q < 2; q++) { const g = ['T', 't'][r] + ['T', 't'][q], geno = r === 0 && q === 0 ? 'TT' : r + q === 0 ? 'TT' : (r === 1 && q === 1) ? 'tt' : 'Tt'; rr(c, px + cs * (q + 1), py + 28 + cs * r, cs - 4, cs - 4, 8); c.fillStyle = geno === 'tt' ? '#fde68a' : '#d1fae5'; c.fill(); c.strokeStyle = '#64748b'; c.stroke(); text(c, geno, px + cs * (q + 1.5) - 2, py + 28 + cs * (r + .5) - 12, { size: 22, w: 900, col: '#1f2937' }); text(c, geno === 'tt' ? 'dwarf' : 'tall', px + cs * (q + 1.5) - 2, py + 28 + cs * (r + .5) + 14, { size: 12, col: '#475569' }); }
      // sampling bars
      const n = Math.round(v), seq = []; for (let i = 0; i < n; i++) { const h = hash(i * 7.3 + 1), h2 = hash(i * 3.1 + 5); seq.push((h < .5 ? 0 : 1) + (h2 < .5 ? 0 : 1)); } const tall = seq.filter(x => x < 2).length, dwarf = n - tall;
      const bx = 560, by = 420, bw = 330; text(c, 'F₂ generation sampled', bx + bw / 2, 265, { size: 14, w: 800, col: '#334155' }); rr(c, bx, 290, bw, 40, 8); c.fillStyle = '#e2e8f0'; c.fill(); if (n) { rr(c, bx, 290, bw * tall / n, 40, 8); c.fillStyle = '#34d399'; c.fill(); rr(c, bx + bw * tall / n, 290, bw * dwarf / n, 40, 8); c.fillStyle = '#fbbf24'; if (dwarf) c.fill(); } text(c, n ? `Tall ${tall}   ·   Dwarf ${dwarf}` : 'Press Run to sample F₂ plants', bx + bw / 2, 310, { size: 14, w: 800, col: '#1f2937' });
      text(c, n ? `Ratio ≈ ${fix(tall / Math.max(1, dwarf), 2)} : 1   (expected 3 : 1)` : 'Expected ratio 3 : 1 (phenotype), 1 : 2 : 1 (genotype)', bx + bw / 2, 350, { size: 15, w: 800, col: '#7c3aed' });
      for (let i = 0; i < Math.min(n, 60); i++) { const x = 90 + (i % 30) * 28, y = 440 + Math.floor(i / 30) * 40; plant(x + 220, y + 22, seq[i] < 2 ? 1 : 0, seq[i] < 2 ? '#a855f7' : '#e5e7eb', .38); }
      text(c, 'Law of segregation: alleles separate during gamete formation', 500, 36, { size: 17, w: 700, col: '#1f3a33' });
    } else { const n = Math.round(v); const fx = 260, mx = 740; // XX x XY
      const person = (x, y, col, nm, ch) => { circle(c, x, y - 28, 20, col); c.fillStyle = col; rr(c, x - 16, y - 6, 32, 56, 12); c.fill(); text(c, nm, x, y + 70, { size: 13, w: 800, col: '#334155' }); text(c, ch, x, y + 92, { size: 14, w: 900, col: '#7c3aed' }); };
      person(fx, 130, '#f472b6', 'Mother', 'XX'); person(mx, 130, '#60a5fa', 'Father', 'XY');
      [['X', fx - 40], ['X', fx + 40], ['X', mx - 40], ['Y', mx + 40]].forEach(([g, x], i) => { circle(c, x, 280, 16, g === 'Y' ? '#3b82f6' : '#ec4899'); text(c, g, x, 280, { size: 16, w: 900, col: '#fff' }); }); text(c, 'gametes (eggs)', fx, 312, { size: 12, col: '#64748b' }); text(c, 'gametes (sperm)', mx, 312, { size: 12, col: '#64748b' });
      const kids = [['XX', 'Girl', '#f472b6'], ['XY', 'Boy', '#60a5fa'], ['XX', 'Girl', '#f472b6'], ['XY', 'Boy', '#60a5fa']]; let g = 0, b = 0; for (let i = 0; i < n; i++) (hash(i * 5.7 + 2) < .5 ? g++ : b++);
      kids.forEach(([ch, nm, col], i) => { const x = 270 + i * 150, a = clamp(v / 100 * 4 - i * .6, 0, 1); c.globalAlpha = .25 + .75 * a; circle(c, x, 400, 16, col); c.fillStyle = col; rr(c, x - 12, 418, 24, 40, 9); c.fill(); text(c, ch, x, 480, { size: 13, w: 900, col: '#7c3aed' }); c.globalAlpha = 1; });
      text(c, n ? `Of ${n} children: ${g} girls, ${b} boys  → about 1 : 1` : 'Each birth: 50 % chance of a girl, 50 % boy', 500, 350, { size: 16, w: 800, col: '#334155' }); text(c, 'The sex of the child is decided by the father\'s gamete (X or Y)', 500, 36, { size: 17, w: 700, col: '#1f3a33' }); }
  },
  info(s) { const n = Math.round(s.v); let tall = 0; for (let i = 0; i < n; i++) { const h = hash(i * 7.3 + 1), h2 = hash(i * 3.1 + 5); if ((h < .5 ? 0 : 1) + (h2 < .5 ? 0 : 1) < 2) tall++; } return s.stage === 0 ? { obs: 'Selfing the F₁ Tt plants gives tall and dwarf plants in a 3 : 1 phenotypic ratio; the dwarf trait reappears.', read: [['Plants counted', n, ''], ['Tall', tall, ''], ['Dwarf', n - tall, ''], ['Genotypes', '1 TT : 2 Tt : 1 tt', '']] } : { obs: 'Eggs always carry X; sperm carry X or Y with equal probability, so boys and girls occur in roughly equal numbers.', read: [['Children sampled', n, ''], ['Ratio girl : boy', '≈ 1 : 1', ''], ['Decided by', 'father', '']] }; }
};
