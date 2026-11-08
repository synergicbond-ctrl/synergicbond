'use strict';
/* ===== Chapter 10.3 Metals & Non-metals, 10.4 Carbon & its Compounds ===== */
const METALS = [['Na', [200, 205, 215], 'sodium'], ['Mg', [205, 210, 218], 'magnesium'], ['Al', [190, 198, 208], 'aluminium'], ['Zn', [165, 175, 190], 'zinc'], ['Fe', [120, 126, 138], 'iron'], ['Cu', [196, 112, 62], 'copper']];
const metalGrad = (c, x0, x1, col) => { const g = c.createLinearGradient(x0, 0, x1, 0); g.addColorStop(0, rgb(shade(col, -.25))); g.addColorStop(.3, rgb(shade(col, .55))); g.addColorStop(.6, rgb(col)); g.addColorStop(1, rgb(shade(col, -.3))); return g; };
function soapMol(c, x, y, ang, k = 1, col = '#f97316') { c.save(); c.translate(x, y); c.rotate(ang); c.strokeStyle = col; c.lineWidth = 2.2 * k; c.lineCap = 'round'; c.beginPath(); c.moveTo(0, 0); for (let i = 1; i <= 5; i++) c.lineTo(i * 5 * k, (i % 2 ? -2.2 : 2.2) * k); c.stroke(); circle(c, 0, 0, 5.5 * k, '#38bdf8', '#0369a1', 1); c.restore(); }

SCENES_REG.metalprops = {
  stages: ['Lustre & malleability', 'Electrical conduction', 'Sonority'], dur: 10,
  control: st => st === 1 ? { label: 'Sample (1 Cu · 2 Fe · 3 Zn · 4 Sulphur · 5 Graphite)', min: 1, max: 5, step: 1, value: 1, unit: '', fmt: v => ['Copper', 'Iron', 'Zinc', 'Sulphur', 'Graphite'][v - 1] } : { label: 'Test progress', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    labBG(c); const { t, u, v, stage } = s;
    if (stage === 0) { // hammer on metal vs sulphur lump
      c.fillStyle = '#475569'; rr(c, 140, BENCH - 30, 320, 30, 6); c.fill(); c.fillStyle = '#334155'; rr(c, 540, BENCH - 30, 320, 30, 6); c.fill();
      const hit = Math.max(0, Math.sin(u * TAU * 3 - .5)) ** 2, flat = seg(u, .1, .9);
      // copper sheet that flattens, wider
      const w = 70 + flat * 130, hgt = 70 - flat * 52, g = metalGrad(c, 300 - w / 2, 300 + w / 2, [196, 112, 62]); c.fillStyle = g; rr(c, 300 - w / 2, BENCH - 30 - hgt, w, hgt, 5); c.fill(); c.fillStyle = 'rgba(255,255,255,.4)'; c.fillRect(300 - w / 2 + 6, BENCH - 30 - hgt + 4, w * .35, 4);
      // sulphur lump shatters
      const sh = seg(u, .25, .5); if (sh < .02) { c.fillStyle = '#e6d33c'; rr(c, 700 - 45, BENCH - 30 - 64, 90, 64, 10); c.fill(); } else for (let i = 0; i < 12; i++) { const a = hash(i) * TAU, d = sh * (30 + hash(i * 3) * 120); c.save(); c.translate(700 + Math.cos(a) * d, BENCH - 40 + Math.abs(Math.sin(a)) * -d * .3 + sh * 20); c.rotate(i); c.fillStyle = '#e6d33c'; c.fillRect(-7, -5, 14 - sh * 4, 10 - sh * 3); c.restore(); }
      const hx1 = u < .1 ? 0 : 1, ang = -.9 + hit * 1.2; [[300, BENCH - 30 - hgt], [700, BENCH - 30 - 64]].forEach(([x, y], i) => { const a = i ? (u > .3 && u < .5 ? -.9 + Math.max(0, Math.sin(u * 60)) * 1.1 : -.9) : ang; c.save(); c.translate(x + 90, y - 80); c.rotate(a); c.strokeStyle = '#a16207'; c.lineWidth = 10; c.lineCap = 'round'; c.beginPath(); c.moveTo(0, 0); c.lineTo(-95, 95); c.stroke(); c.fillStyle = '#475569'; rr(c, -22, -16, 44, 28, 6); c.fill(); c.restore(); });
      tag('Copper: shiny, malleable → beaten into a thin sheet', 300, BENCH - 70, { x: 275, y: 130, col: '#9a3412' }); tag(u > .3 ? 'Sulphur: brittle, shatters' : 'Sulphur: dull, brittle non-metal', 700, BENCH - 70, { x: 745, y: 130, col: '#a16207' });
      text(c, 'Metals are lustrous and malleable; non-metals are dull and brittle', 500, 36, { size: 17, w: 700, col: '#334155' });
    } else if (stage === 1) { const names = ['Cu', 'Fe', 'Zn', 'S', 'C'], cond = v <= 3 || v === 5, I = cond ? (v === 1 ? 1 : v === 2 ? .8 : v === 3 ? .75 : .45) : 0;
      const loop = [[200, 330], [200, 150], [800, 150], [800, 330], [660, 330]]; const loop2 = [[340, 330], [200, 330]];
      wireFlow(c, [[660, 330], [800, 330], [800, 150], [200, 150], [200, 330], [340, 330]], t, I * 2.2, { col: '#f59e0b', w: 6 }); battery(c, 500, 150, 150, 46, 3);
      bulb(c, 500, 238, I * (.4 + .6 * 1), 24); c.fillStyle = '#e2e8f0'; c.fillRect(0, 0, 0, 0); line(c, 500, 262, 500, 330, '#3b4a63', 5); text(c, 'Bulb', 560, 238, { size: 13, col: '#475569', align: 'left' });
      // sample between clips
      c.fillStyle = '#94a3b8'; rr(c, 325, 316, 30, 28, 4); c.fill(); rr(c, 645, 316, 30, 28, 4); c.fill(); const col = [[196, 112, 62], [120, 126, 138], [165, 175, 190], [230, 211, 60], [50, 50, 56]][v - 1]; c.fillStyle = metalGrad(c, 345, 655, col); rr(c, 345, 319, 310, 22, 4); c.fill();
      if (I > 0) for (let i = 0; i < 9; i++) { const q = (t * .6 * I + i / 9) % 1; circle(c, 350 + q * 300, 330 + Math.sin(i + t * 4) * 3, 3, '#fcd34d'); }
      tag(['Copper strip', 'Iron strip', 'Zinc strip', 'Sulphur rod', 'Graphite rod'][v - 1], 500, 340, { x: 500, y: 420, col: '#475569' }); tag(cond ? 'Bulb glows: conductor' : 'Bulb stays off: insulator', 500, 260, { x: 790, y: 245, col: cond ? '#15803d' : '#b91c1c' });
      text(c, 'Metals conduct (free electrons). Graphite is a non-metal that also conducts.', 500, 36, { size: 16, w: 700, col: '#334155' });
    } else { const strike = u > .06 ? Math.max(0, Math.sin(u * 50)) : 0; const ph = (u * 25) % 1;
      c.fillStyle = '#334155'; rr(c, 150, 120, 12, 280, 4); c.fill(); rr(c, 150, 120, 300, 12, 4); c.fill();
      c.fillStyle = '#94a3b8'; c.fillRect(300, 132, 3, 40); c.fillStyle = metalGrad(c, 290, 330, [196, 112, 62]); rr(c, 275, 170, 54, 190 + 0, 5); c.fill(); c.fillStyle = '#334155'; rr(c, 560, 170, 8, 0, 0);
      c.save(); c.translate(260 + 300 * (1 - strike) * 0, 0); c.restore();
      c.save(); c.translate(230, 300); c.rotate(-.5 + strike * .7); c.strokeStyle = '#a16207'; c.lineWidth = 8; c.lineCap = 'round'; c.beginPath(); c.moveTo(0, 0); c.lineTo(-70, 70); c.stroke(); circle(c, 0, 0, 12, '#475569'); c.restore();
      for (let k = 0; k < 4; k++) { const q = ((t * .9 + k / 4) % 1) * Math.min(1, u * 5); ell(c, 302, 265, 20 + q * 220, 12 + q * 150, null, `rgba(37,99,235,${(1 - q) * .5})`, 3); }
      // non-metal (sulphur / wood) block silent
      c.fillStyle = '#e6d33c'; rr(c, 700, 250, 90, 110, 8); c.fill(); c.save(); c.translate(660, 310); c.rotate(-.5 + (u > .06 ? Math.max(0, Math.sin(u * 50)) : 0) * .7); c.strokeStyle = '#a16207'; c.lineWidth = 8; c.lineCap = 'round'; c.beginPath(); c.moveTo(0, 0); c.lineTo(-70, 70); c.stroke(); circle(c, 0, 0, 12, '#475569'); c.restore();
      tag('Metal strip: rings with a clear sound (sonorous)', 302, 265, { x: 330, y: 95, col: '#1d4ed8' }); tag('Non-metal: dull thud', 745, 300, { x: 790, y: 195, col: '#64748b' });
      text(c, 'Metals produce a ringing sound when struck — they are sonorous', 500, 36, { size: 17, w: 700, col: '#334155' });
    } },
  info(s) { const { u, v, stage } = s; if (stage === 0) return { obs: 'Copper spreads into a sheet under the hammer (malleable); sulphur crumbles (brittle).', read: [['Cu thickness', fix(10 - seg(u, .1, .9) * 7.4, 1), 'mm'], ['Sulphur', u > .3 ? 'shattered' : 'intact', ''], ['Property', 'malleability', '']] };
    if (stage === 1) { const cond = v <= 3 || v === 5; return { obs: cond ? 'Free electrons carry current, so the bulb glows.' : 'Sulphur has no free electrons; the circuit is open and the bulb stays dark.', read: [['Sample', ['Cu', 'Fe', 'Zn', 'S', 'C'][v - 1], ''], ['Bulb', cond ? 'glows' : 'off', ''], ['Conductor?', cond ? 'yes' : 'no', '']] }; }
    return { obs: 'Struck metals vibrate and ring; waves spread out. The non-metal only thuds.', read: [['Strikes', Math.round(u * 8), ''], ['Metal', u > .06 ? 'rings' : '—', ''], ['Non-metal', 'dull', '']] }; },
  micro(c, s) { const { t, v, stage } = s, B = micro(c, W - 346, 16, 330, 230, 'METALLIC BONDING'); c.save(); rr(c, B.x, B.y, B.w, B.h, 14); c.clip();
    for (let r = 0; r < 3; r++) for (let k = 0; k < 6; k++) ion(c, B.x + 45 + k * 48, B.y + 60 + r * 48, 15, [244, 114, 182], '+', t, r * 6 + k, 1);
    for (let i = 0; i < 18; i++) { const sp = (stage === 1 ? .6 : .3); const x = B.x + 20 + ((i * 53 + t * 40 * sp * (1 + hash(i))) % 290), y = B.y + 40 + ((i * 37) % 150) + Math.sin(t * 2 + i) * 8; circle(c, x, y, 3.8, '#fde047'); }
    text(c, 'Cations in a sea of free electrons → conduct, malleable', B.x + B.w / 2, B.y + B.h - 12, { size: 10.5, col: '#cbd5e1' }); c.restore(); }
};

SCENES_REG.metalreact = {
  stages: ['With dilute acid', 'With cold water', 'With air (burning)'], dur: 12,
  control: { label: 'Metal (1 Na · 2 Mg · 3 Al · 4 Zn · 5 Fe · 6 Cu)', min: 1, max: 6, step: 1, value: 2, unit: '', fmt: v => METALS[v - 1][2][0].toUpperCase() + METALS[v - 1][2].slice(1) + ' (' + METALS[v - 1][0] + ')' },
  draw(c, s) {
    labBG(c); const { t, v, stage } = s; const [sym, col, nm] = METALS[v - 1]; shadowE(c, 500, BENCH, 280);
    const acidRate = [1.2, 1, .6, .42, .14, 0][v - 1], waterRate = [1, .05, 0, 0, 0, 0][v - 1], airB = [.8, 1, .15, .35, .45, .1][v - 1];
    if (stage < 2) { const V = stage === 0 ? tube(500, BENCH, 90, 270) : beaker(500, BENCH, 260, 190); const rate = stage === 0 ? acidRate : waterRate;
      drawVessel(c, V, { level: stage === 0 ? .6 : .6, color: stage === 0 ? [225, 240, 248] : [180, 215, 240], alpha: .4, t, inside(c) {
        if (stage === 0) { c.fillStyle = metalGrad(c, 470, 530, col); rr(c, 486, V.bot - 46, 28, 30, 4); c.fill(); if (rate > 0) bubbleStream(c, 500, V.bot - 26, V.yAt(.6), t, { n: 26, rate: Math.min(1, rate), spread: 22, speed: 40 + rate * 80, r: 3.2 }); }
        else if (v === 1) { const mx = 500 + Math.sin(t * 2.2) * 80, my = V.yAt(.6) + 3; c.fillStyle = '#d7dce4'; circle(c, mx, my - 5, 12, '#d7dce4', '#8b95a5', 1.5); for (let i = 0; i < 12; i++) circle(c, mx - 10 + hash(i + Math.floor(t * 8)) * 20, my - 2 - hash(i * 2) * 12, 2.2, '#fff'); }
        else { c.fillStyle = metalGrad(c, 470, 530, col); rr(c, 484, V.bot - 28, 32, 16, 4); c.fill(); if (v === 2) bubbleStream(c, 500, V.bot - 20, V.yAt(.6), t, { n: 3, rate: .3, spread: 8, speed: 20, r: 1.8 }); } } });
      if (stage === 1 && v === 1) { glow(c, 500 + Math.sin(t * 2.2) * 80, V.yAt(.6) - 14, 60, [255, 200, 90], .7); smoke(c, 500 + Math.sin(t * 2.2) * 80, V.yAt(.6) - 20, t, { col: [235, 235, 235], n: 5, h: 70, a: .4 }); }
      tag(`${nm} (${sym})`, 500, V.bot - 20, { x: 250, y: 410, col: '#475569' }); tag(stage === 0 ? 'dil. HCl' : 'cold water', 480, V.yAt(.45), { x: 250, y: 300, col: '#0f4c75' }); if (rate > .02) tag(stage === 0 ? 'H₂ bubbles ↑' : (v === 1 ? 'Skates, hisses & burns: H₂ ignites' : 'Slow, tiny bubbles'), 520, V.yAt(.55), { x: 780, y: 280, col: '#0369a1' }); else tag('No visible reaction', 520, V.yAt(.55), { x: 780, y: 280, col: '#64748b' });
      text(c, stage === 0 ? `${nm} + dilute acid → salt + H₂ (rate depends on reactivity)` : `Reaction with cold water: only the most reactive metals respond`, 500, 36, { size: 17, w: 700, col: '#334155' });
    } else { // burning in air
      const by = 340; c.save(); c.strokeStyle = '#64748b'; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.moveTo(250, 190); c.lineTo(420, by - 6); c.moveTo(250, 230); c.lineTo(420, by + 4); c.stroke(); c.restore();
      c.fillStyle = metalGrad(c, 400, 480, col); rr(c, 410, by - 8, 80, 14, 5); c.fill(); burner(c, 480, BENCH, t, true, { s: .8, h: 60 });
      const b = airB; if (b > .3) { glow(c, 490, by - 4, 70 + 110 * b, v === 1 ? [255, 215, 50] : [255, 255, 255], .8 * b); for (let i = 0; i < 22 * b; i++) { const a = hash(i + Math.floor(t * 18)) * TAU, r = 25 + hash(i * 2 + Math.floor(t * 18)) * 70 * b; c.strokeStyle = `rgba(${v === 1 ? '255,215,60' : '255,255,255'},${.5 * hash(i)})`; c.lineWidth = 1; c.beginPath(); c.moveTo(490, by - 4); c.lineTo(490 + Math.cos(a) * r, by - 4 + Math.sin(a) * r); c.stroke(); } }
      c.fillStyle = '#e5e7eb'; rr(c, 560, BENCH - 20, 220, 14, 5); c.fill(); for (let i = 0; i < 30 * b; i++) { c.fillStyle = v === 6 ? '#111' : '#d1d5db'; c.fillRect(580 + hash(i) * 180, BENCH - 22 - hash(i * 2) * 8, 3, 3); }
      tag(['Sodium burns with golden-yellow flame', 'Mg: dazzling white flame → MgO', 'Al: coated by Al₂O₃, burns only as powder', 'Zn: burns weakly with a bluish-white glow', 'Fe: red-hot, sparks as iron filings/wool', 'Cu: does not burn; black CuO coating'][v - 1], 490, by - 10, { x: 700, y: 180, col: '#334155' });
      text(c, 'Metals + oxygen → metal oxides (basic oxides)', 500, 36, { size: 17, w: 700, col: '#334155' });
    }
  },
  info(s) { const { v, stage } = s; const nm = METALS[v - 1][2]; const a = [1.2, 1, .6, .42, .14, 0][v - 1], w = [1, .05, 0, 0, 0, 0][v - 1];
    return { obs: stage === 0 ? (a > .02 ? `${nm} fizzes in dilute acid releasing hydrogen at a rate matching its reactivity.` : 'Copper lies below hydrogen in the reactivity series: no bubbles.') : stage === 1 ? (w > .5 ? 'Sodium reacts violently with cold water, melting into a ball that skates and burns.' : w > 0 ? 'Magnesium shows only a few tiny bubbles in cold water; it needs hot water or steam.' : 'No reaction with cold water.') : 'Burning shows how readily each metal combines with oxygen.', read: [['Metal', METALS[v - 1][0], ''], ['Reactivity rank', ['1 (highest)', '2', '3', '4', '5', '6 (lowest)'][v - 1], ''], ['Reacts with acid', a > .02 ? 'yes' : 'no', ''], ['Reacts with cold H₂O', w > .5 ? 'violently' : w > 0 ? 'barely' : 'no', '']] }; }
};

SCENES_REG.displacement = {
  stages: ['Magnesium', 'Aluminium', 'Zinc', 'Copper (control)'], dur: 10,
  control: { label: 'Time in CuSO₄(aq)', min: 0, max: 30, step: .5, value: 0, unit: 'min', fmt: v => fix(v, 1) + ' min' },
  draw(c, s) {
    labBG(c); const { t, u, stage } = s; const rate = [1, .75, .5, 0][stage], delay = stage === 1 ? .2 : 0, p = rate * seg(u, delay, 1); const V = beaker(500, BENCH, 270, 250); shadowE(c, 500, BENCH, 300);
    const col = mix(LIQ.cuso4, [215, 235, 240], p * .95), mcol = [METALS[1][1], METALS[2][1], METALS[3][1], [196, 112, 62]][stage];
    drawVessel(c, V, { level: .72, color: col, alpha: .78, t, marks: [[.3, '50'], [.55, '100']], inside(c) { const x = 500, top = 175, h = 230; c.fillStyle = metalGrad(c, x - 11, x + 11, mcol); rr(c, x - 11, top, 22, h, 3); c.fill(); if (p > 0) { const cg = c.createLinearGradient(x - 15, 0, x + 15, 0); cg.addColorStop(0, '#7a3414'); cg.addColorStop(.5, '#d98550'); cg.addColorStop(1, '#7a3414'); c.fillStyle = cg; c.beginPath(); for (let y = 0; y <= h * (.2 + .8 * p) * 1; y += 4) { const w = 11 + 3 + Math.sin(y * .9) * 2.6 * p; y ? c.lineTo(x + w, top + y) : c.moveTo(x + w, top + y); } for (let y = h * (.2 + .8 * p); y >= 0; y -= 4) c.lineTo(x - 14 - Math.sin(y * .7) * 2.6 * p, top + y); c.closePath(); c.fill(); for (let i = 0; i < p * 60; i++) { c.fillStyle = 'rgba(190,100,50,.8)'; c.fillRect(x - 60 + hash(i) * 120, V.bot - 4 - hash(i * 3) * 18 * p, 2.4, 2.4); } if (p > .05 && stage < 3) bubbleStream(c, x, V.bot - 20, V.yAt(.72), t, { n: 6, rate: p * .6, spread: 12, speed: 30, r: 2 }); } } });
    tag(['Mg ribbon', 'Al strip', 'Zn strip', 'Cu strip'][stage], 500, 195, { x: 240, y: 190, col: '#475569' }); tag(p < .3 ? 'CuSO₄: deep blue' : p < .8 ? 'Fading blue' : 'Almost colourless', 420, V.yAt(.4), { x: 240, y: 300, col: '#1d4ed8' }); if (p > .05) tag('Reddish-brown Cu deposited', 515, 330, { x: 770, y: 260, col: '#9a3412' }); else if (stage === 3) tag('No change: Cu cannot displace Cu', 515, 330, { x: 770, y: 260, col: '#64748b' });
    text(c, 'More reactive metal + salt of less reactive metal → displacement', 500, 36, { size: 17, w: 700, col: '#334155' });
  },
  info(s) { const { u, stage } = s; const rate = [1, .75, .5, 0][stage], p = rate * seg(u, stage === 1 ? .2 : 0, 1); return { obs: stage === 3 ? 'Copper placed in copper sulphate: nothing happens.' : `Blue Cu²⁺ ions are replaced in the solution by ${['Mg²⁺', 'Al³⁺', 'Zn²⁺'][stage]} ions; copper metal plates out on the strip.`, read: [['Cu deposited', fix(p * 100, 0), '%'], ['Blue colour left', fix((1 - p * .95) * 100, 0), '%'], ['Reaction speed', ['fast', 'moderate', 'slower', 'none'][stage], ''], ['Reactivity vs Cu', stage < 3 ? 'higher' : 'same', '']] }; },
  micro(c, s) { const { t, u, stage } = s, B = micro(c, W - 346, 16, 330, 230, 'ATOM EXCHANGE AT SURFACE'); c.save(); rr(c, B.x, B.y, B.w, B.h, 14); c.clip(); const p = [1, .75, .5, 0][stage] * seg(u, 0, 1);
    for (let i = 0; i < 6; i++) { const sw = hash(i + 1) < p; ion(c, B.x + 40 + i * 50, B.y + 185, 16, sw ? [196, 112, 62] : [150, 160, 175], sw ? 'Cu' : (['Mg', 'Al', 'Zn', 'Cu'][stage]), t, i, 1); ion(c, B.x + 40 + i * 50 + (sw ? 0 : 0), B.y + 70 + (sw ? 90 * Math.min(1, p) : 0) * 0 + Math.sin(t + i) * 6 + (sw ? 0 : 0), 13, sw ? [150, 160, 175] : [60, 130, 220], sw ? ['Mg²⁺', 'Al³⁺', 'Zn²⁺', ''][stage] : 'Cu²⁺', t, i + 4, 8); }
    text(c, 'M → Mⁿ⁺ + ne⁻  (metal dissolves);  Cu²⁺ + 2e⁻ → Cu (deposits)', B.x + B.w / 2, B.y + B.h - 12, { size: 10.5, col: '#cbd5e1' }); c.restore(); }
};

SCENES_REG.solubility = {
  stages: ['NaCl in water', 'NaCl in kerosene'], dur: 10,
  control: { label: 'Stirring time', min: 0, max: 60, step: 1, value: 0, unit: 's', fmt: v => Math.round(v) + ' s' },
  draw(c, s) {
    labBG(c); const { t, u, stage } = s; const V = beaker(500, BENCH, 260, 240); shadowE(c, 500, BENCH, 290); const dis = stage === 0 ? seg(u, .05, .85) : 0;
    drawVessel(c, V, { level: .66, color: stage === 0 ? [185, 220, 242] : [244, 226, 150], alpha: stage === 0 ? .5 : .55, t, marks: [[.3, '50'], [.6, '100']], inside(c) {
      const nC = Math.round(14 * (1 - dis)); for (let i = 0; i < nC; i++) { const x = 440 + (i % 5) * 18 + hash(i) * 6, y = V.bot - 10 - Math.floor(i / 5) * 12; c.fillStyle = '#f8fafc'; c.strokeStyle = 'rgba(100,116,139,.6)'; c.lineWidth = .8; c.fillRect(x - 5, y - 5, 10, 10); c.strokeRect(x - 5, y - 5, 10, 10); }
      if (stage === 0) for (let i = 0; i < dis * 30; i++) { const x = 395 + hash(i) * 210 + Math.sin(t * 1.5 + i) * 6, y = V.yAt(.6) + 20 + hash(i * 3) * 150 + Math.cos(t + i) * 5; circle(c, x, y, 3, `rgba(255,255,255,${.4 + .5 * dis})`); }
      // stirring rod
      const rx = 500 + Math.sin(t * 6) * 40 * (u > 0 && u < 1 ? 1 : 0); c.strokeStyle = 'rgba(80,120,150,.9)'; c.lineWidth = 6; c.lineCap = 'round'; c.beginPath(); c.moveTo(rx + 40, 140); c.lineTo(rx, V.bot - 30); c.stroke(); } });
    tag(stage === 0 ? (dis > .6 ? 'Clear solution: NaCl dissolved' : 'NaCl crystals dissolving') : 'Crystals stay undissolved', 500, V.bot - 20, { x: 790, y: 380, col: '#334155' }); tag(stage === 0 ? 'Water (polar solvent)' : 'Kerosene (non-polar solvent)', 380, V.yAt(.4), { x: 215, y: 280, col: '#0f4c75' });
    text(c, 'Ionic compounds dissolve in polar water but not in non-polar kerosene', 500, 36, { size: 16, w: 700, col: '#334155' });
  },
  info(s) { const d = s.stage === 0 ? seg(s.u, .05, .85) : 0; return { obs: s.stage === 0 ? 'Water molecules pull Na⁺ and Cl⁻ out of the crystal — salt dissolves completely on stirring.' : 'Kerosene cannot attract Na⁺ and Cl⁻; the crystals sink and stay solid even after stirring.', read: [['Dissolved', fix(d * 100, 0), '%'], ['Solvent', s.stage === 0 ? 'water' : 'kerosene', ''], ['Solution', d > .8 ? 'clear' : 'crystals visible', '']] }; },
  micro(c, s) { const { t, u, stage } = s, B = micro(c, W - 346, 16, 330, 230, stage === 0 ? 'ION–DIPOLE ATTRACTION' : 'NO ATTRACTION'); c.save(); rr(c, B.x, B.y, B.w, B.h, 14); c.clip(); const d = stage === 0 ? seg(u, .05, .85) : 0;
    for (let r = 0; r < 3; r++) for (let k = 0; k < 4; k++) { const x0 = B.x + 60 + k * 36, y0 = B.y + 70 + r * 36, out = hash(r * 4 + k) < d, off = out ? (40 + d * 90) * (hash(k + r) + .3) : 0; ion(c, x0 + off * (k % 2 ? 1 : .4), y0 - off * .3, 11, (r + k) % 2 ? [74, 222, 128] : [244, 114, 182], (r + k) % 2 ? 'Cl⁻' : 'Na⁺', t, r * 4 + k, out ? 5 : 1); if (out && stage === 0) for (let w = 0; w < 3; w++) ion(c, x0 + off * (k % 2 ? 1 : .4) + Math.cos(w * 2.1) * 20, y0 - off * .3 + Math.sin(w * 2.1) * 20, 5.5, [96, 165, 250], '', t, w + r + k, 2); }
    for (let i = 0; i < 6; i++) { const x = B.x + 220 + (i % 3) * 36, y = B.y + 70 + Math.floor(i / 3) * 70; if (stage === 1) { c.strokeStyle = '#fbbf24'; c.lineWidth = 3; c.beginPath(); c.moveTo(x - 12, y); c.lineTo(x + 12, y); c.stroke(); } }
    c.restore(); }
};

SCENES_REG.ionicconduct = {
  stages: ['NaCl solution', 'Solid NaCl', 'Distilled water', 'Sugar solution'], dur: 10,
  control: { label: 'Salt concentration', min: 0, max: 100, step: 1, value: 20, unit: '%' },
  draw(c, s) {
    labBG(c); const { t, u, stage } = s; const conc = stage === 0 ? u : stage === 1 ? 0 : stage === 2 ? 0 : 0, I = stage === 0 ? .12 + .88 * u : 0; const V = beaker(500, BENCH, 280, 190); shadowE(c, 500, BENCH, 300);
    drawVessel(c, V, { level: stage === 1 ? .0 : .62, color: stage === 3 ? [240, 238, 225] : [195, 225, 242], alpha: .5, t, inside(c) {
      if (stage === 1) for (let i = 0; i < 16; i++) { c.fillStyle = '#f1f5f9'; c.strokeStyle = 'rgba(100,116,139,.6)'; c.fillRect(440 + (i % 6) * 18, V.bot - 10 - Math.floor(i / 6) * 14, 14, 11); c.strokeRect(440 + (i % 6) * 18, V.bot - 10 - Math.floor(i / 6) * 14, 14, 11); }
      if (stage === 0) for (let i = 0; i < 6 + u * 30; i++) { const x = 400 + hash(i) * 200, y = V.yAt(.6) + 14 + hash(i * 3) * 100; circle(c, x + Math.sin(t * 2 + i) * 4, y, 3.4, i % 2 ? '#ec4899' : '#22c55e'); }
      c.fillStyle = '#374151'; rr(c, 410 - 6, 160, 12, V.bot - 170, 3); c.fill(); rr(c, 590 - 6, 160, 12, V.bot - 170, 3); c.fill(); } });
    const top = 110; wireFlow(c, [[410, 165], [410, top], [310, top], [310, 240]], t, I * 2, { col: '#f59e0b', w: 5 }); wireFlow(c, [[590, 165], [590, top], [690, top], [690, 240]], t, -I * 2, { col: '#f59e0b', w: 5 }); battery(c, 500, 80, 110, 38, 6); bulb(c, 310, 270, I, 22); c.fillStyle = '#e2e8f0'; line(c, 310, 300, 310, 300, '#000'); text(c, 'Bulb', 270, 270, { size: 12, col: '#475569' });
    text(c, 'Ammeter', 690, 258, { size: 11, col: '#475569' }); gauge(c, 690, 320, 42, I * 10, 0, 10, 'A', 'mA', {});
    tag(['NaCl(aq): ions free to move', 'Solid NaCl: ions locked in lattice', 'Pure water: almost no ions', 'Sugar solution: molecules, no ions'][stage], 500, V.yAt(.4), { x: 500, y: 450, col: '#334155', line: false }); tag(I > .05 ? 'Bulb glows' : 'Bulb off', 310, 250, { x: 205, y: 215, col: I > .05 ? '#15803d' : '#b91c1c' });
    text(c, 'Ionic compounds conduct only when molten or dissolved — ions must be mobile', 500, 36, { size: 16, w: 700, col: '#334155' });
  },
  info(s) { const I = s.stage === 0 ? .12 + .88 * s.u : 0; return { obs: s.stage === 0 ? 'Mobile Na⁺ and Cl⁻ carry the current; more salt → more ions → brighter bulb.' : ['', 'In solid NaCl the ions cannot move, so no current flows.', 'Pure water has too few ions to carry current.', 'Sugar dissolves as neutral molecules — no ions, no current.'][s.stage], read: [['Current', fix(I * 10, 1), 'mA'], ['Bulb', I > .05 ? 'glows' : 'off', ''], ['Mobile ions', s.stage === 0 ? Math.round(6 + s.u * 30) : 0, 'per view']] }; },
  micro(c, s) { const { t, u, stage } = s, B = micro(c, W - 346, 16, 330, 230, 'ION MOVEMENT'); c.save(); rr(c, B.x, B.y, B.w, B.h, 14); c.clip(); const n = stage === 0 ? 8 + Math.round(u * 12) : 0;
    for (let i = 0; i < n; i++) { const pos = i % 2 === 0; const vx = pos ? -1 : 1; const x = B.x + 20 + ((i * 47 + t * 38 * vx * (.5 + u) + 4000) % 290), y = B.y + 50 + ((i * 29) % 140); ion(c, x, y, 9, pos ? [244, 114, 182] : [74, 222, 128], pos ? '+' : '−', t, i, 3); }
    arrow(c, B.x + B.w - 60, B.y + 28, B.x + 36, B.y + 28, '#f472b6', 2); arrow(c, B.x + 36, B.y + B.h - 30, B.x + B.w - 60, B.y + B.h - 30, '#4ade80', 2); c.restore(); }
};

SCENES_REG.rusting = {
  dur: 12, control: { label: 'Elapsed time', min: 0, max: 10, step: .1, value: 0, unit: 'days', fmt: v => fix(v, 1) + ' days' },
  draw(c, s) {
    labBG(c); const { t, u } = s; const setups = [['Air + water', 1, '#7c2d12'], ['Boiled water + oil (no air)', 0, ''], ['Anhydrous CaCl₂ (no water)', 0, ''], ['Salt water + air', 1.5, '#7c2d12']]; const sp = 215, x0 = 500 - 1.5 * sp;
    setups.forEach(([nm, rate, rc], i) => { const x = x0 + i * sp, T = tube(x, BENCH - 6, 78, 270); shadowE(c, x, BENCH, 110); const rust = clamp(u * rate * (rate > 1 ? 1.1 : 1), 0, 1);
      drawVessel(c, T, { level: i === 2 ? 0 : .66, color: i === 3 ? [215, 232, 235] : [190, 222, 242], alpha: .45, t, back(c) { if (i === 1) { c.fillStyle = 'rgba(240,210,80,.75)'; c.fillRect(x - 36, T.yAt(.66), 72, 12); } if (i === 2) { c.fillStyle = '#f1f5f9'; for (let k = 0; k < 9; k++) c.fillRect(x - 30 + (k % 3) * 20, T.bot - 14 - Math.floor(k / 3) * 10, 16, 8); } },
        inside(c) { const nx = x, ty = i === 2 ? T.top + 70 : T.top + 40; c.fillStyle = metalGrad(c, nx - 5, nx + 5, [140, 146, 156]); rr(c, nx - 4, ty, 8, 150, 3); c.fill(); c.fillStyle = metalGrad(c, nx - 9, nx + 9, [140, 146, 156]); rr(c, nx - 9, ty - 4, 18, 6, 2); c.fill();
          if (rust > .02) { for (let k = 0; k < 150 * rust; k++) { const yy = ty + hash(k) * 150, xx = nx + (hash(k * 3) - .5) * (7 + rust * 10); c.fillStyle = `rgba(${150 + hash(k) * 40},${60 + hash(k * 2) * 30},20,${.5 + .5 * rust})`; c.fillRect(xx, yy, 2.4 + rust * 2, 2.4); } if (i === 0 || i === 3) for (let k = 0; k < rust * 18; k++) c.fillStyle = 'rgba(160,70,20,.5'; if (rust > .2) { c.fillStyle = `rgba(170,80,25,${.25 * rust})`; c.fillRect(x - 30, T.yAt(.66) + 30, 60, 100); } } } });
      if (i === 1 || i === 2) { cork(c, x, T.top - 6, 40, 14); } tag(nm, x, T.top + 70, { x, y: 90 + (i % 2) * 34, col: '#334155', dot: false, line: false, size: 12 }); text(c, rust > .1 ? 'RUSTED' : 'no rust', x, BENCH + 28, { size: 13, w: 800, col: rust > .1 ? '#b45309' : '#16a34a' }); });
    text(c, 'Rusting needs BOTH oxygen (air) and water — salt speeds it up', 500, 36, { size: 17, w: 700, col: '#334155' });
  },
  info(s) { const d = s.v; return { obs: d < .3 ? 'Day 0: four fresh iron nails in different conditions.' : 'Only the nails that have both air and water rust; salt water rusts fastest. Nails without air or without moisture stay bright.', read: [['Day', fix(d, 1), ''], ['Tube A: air+water', fix(clamp(s.u, 0, 1) * 100, 0), '% rusted'], ['Tube B: no air', '0', '% rusted'], ['Tube C: no water', '0', '% rusted']] }; }
};

/* ---------- 10.4 ---------- */
SCENES_REG.ethanoic = {
  stages: ['Smell & litmus', 'With sodium hydrogencarbonate'], dur: 10,
  control: { label: 'Reagent added', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    labBG(c); const { t, u, stage } = s;
    if (stage === 0) { const V = tube(380, BENCH, 90, 250); shadowE(c, 380, BENCH, 150); drawVessel(c, V, { level: .5, color: [235, 245, 250], alpha: .3, t });
      for (let i = 0; i < 6; i++) { const q = (t * .3 + i / 6) % 1; c.fillStyle = `rgba(230,200,90,${(1 - q) * .35})`; c.beginPath(); c.arc(380 + Math.sin(q * 6 + i) * 24 * q, V.top - q * 90, 8 + q * 16, 0, TAU); c.fill(); }
      const f = seg(u, .1, .6); const blue = mix([60, 90, 220], [225, 50, 60], f); c.fillStyle = rgb(blue); rr(c, 600, 240, 22, 90, 3); c.fill(); text(c, 'Blue litmus', 611, 345, { size: 12, col: '#475569' }); const sx = lerp(740, 640, f), g = c.createLinearGradient(0, 0, 0, 20); circle(c, 611, 232, 0); drip(c, 611, 130, 236, t, [235, 245, 250], { rate: 1.2 });
      tag('CH₃COOH: sharp vinegar-like smell', 380, V.top + 20, { x: 200, y: 230, col: '#a16207' }); tag(f > .5 ? 'Litmus turns RED: acidic' : 'Blue litmus + drop of acid', 611, 280, { x: 800, y: 290, col: f > .5 ? '#b91c1c' : '#1d4ed8' });
      text(c, 'Ethanoic acid (acetic acid) is a weak organic acid, ≈ 5% in vinegar', 500, 36, { size: 17, w: 700, col: '#334155' });
    } else { const V = tube(400, BENCH, 90, 250), T = tube(700, BENCH, 74, 220); shadowE(c, 400, BENCH, 150); shadowE(c, 700, BENCH, 130); glassTube(c, [[400, V.top - 4], [400, 150], [700, 150], [700, T.yAt(.2)]], { w: 8 }); cork(c, 400, V.top - 8, 40, 16); const milk = seg(u, .1, .85);
      drawVessel(c, V, { level: .38, color: [235, 245, 250], alpha: .35, t, inside(c) { powder(c, 400, V.bot - 3, 56, 14 * (1 - u * .6), [250, 250, 250], 4); if (u > 0) bubbleStream(c, 400, V.bot - 14, V.yAt(.38), t, { n: 22, rate: u, spread: 20, speed: 85, r: 3.2 }); } });
      drawVessel(c, T, { level: .6, color: mix([215, 235, 245], [240, 240, 238], milk), alpha: .35 + .55 * milk, t, inside(c) { if (u > .08) bubbleStream(c, 700, T.yAt(.2), T.yAt(.6), t, { n: 12, rate: u, spread: 6, speed: 60, r: 3 }); } });
      tag('CH₃COOH + NaHCO₃', 380, V.yAt(.2), { x: 220, y: 380, col: '#475569' }); tag(milk > .3 ? 'Limewater milky: CO₂ released' : 'Limewater (clear)', 700, T.yAt(.5), { x: 850, y: 300, col: '#334155' });
      text(c, 'CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑', 500, 36, { size: 17, w: 700, col: '#334155' });
    } },
  info(s) { const { u, stage } = s; return stage === 0 ? { obs: 'Ethanoic acid has a sharp, vinegar-like smell and turns blue litmus red.', read: [['Litmus', u < .1 ? 'blue' : u < .6 ? 'purple' : 'red', ''], ['pH of 5 % solution', '≈ 2.9', ''], ['Smell', 'vinegar', '']] } : { obs: 'Brisk effervescence of CO₂; passing it into limewater turns it milky — acids liberate CO₂ from carbonates and hydrogencarbonates.', read: [['CO₂', fix(u * 100, 0), '%'], ['Limewater', u < .1 ? 'clear' : 'milky', ''], ['Salt formed', 'sodium ethanoate', '']] }; }
};

SCENES_REG.ester = {
  stages: ['Heat in water bath', 'Pour into water — smell'], dur: 11,
  control: { label: 'Reaction progress', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    labBG(c); const { t, u, stage } = s;
    if (stage === 0) { const B = beaker(500, BENCH, 300, 180), V = tube(500, BENCH + 4, 70, 250); shadowE(c, 500, BENCH, 320); drawVessel(c, B, { level: .55, color: LIQ.water, alpha: .45, t, wave: 1.5, marks: [[.4, '']] });
      c.save(); drawVessel(c, V, { level: .45, color: mix([235, 245, 250], [250, 240, 190], u), alpha: .4 + .3 * u, t, inside(c) { bubbleStream(c, 500, V.bot - 14, V.yAt(.45), t, { n: 8, rate: .5, spread: 15, speed: 30, r: 2 }); } }); c.restore();
      thermometer(c, 660, BENCH, 250, 25 + 55 * Math.min(1, u * 1.6), 0, 110); if (u > .1) steam(c, 570, B.top, t, { n: 5, h: 70, a: .25 }); tag('Ethanol + ethanoic acid + conc. H₂SO₄ (few drops)', 500, V.yAt(.25), { x: 230, y: 260, col: '#475569' }); tag('Hot water bath', 600, B.yAt(.3), { x: 790, y: 440, col: '#0f4c75' }); tag(fix(25 + 55 * Math.min(1, u * 1.6), 0) + ' °C', 660, BENCH - 30 - Math.min(1, u * 1.6) * 80, { x: 800, y: 250, col: '#b91c1c' });
      text(c, 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O  (conc. H₂SO₄ catalyst, dehydrating agent)', 500, 36, { size: 15, w: 700, col: '#334155' });
    } else { const V = beaker(500, BENCH, 280, 210); shadowE(c, 500, BENCH, 310); const f = seg(u, .1, .5); drawVessel(c, V, { level: .55, color: LIQ.water, alpha: .45, t, inside(c, { ly }) { c.fillStyle = `rgba(250,235,150,${.8 * f})`; c.fillRect(380, ly, 240, 10 * f); for (let i = 0; i < f * 20; i++) circle(c, 400 + hash(i) * 200, ly + 3 + hash(i * 2) * 8, 3 + hash(i) * 3, 'rgba(250,235,150,.8)'); } });
      if (u < .55) { c.save(); c.translate(380, 120); c.rotate(.55 + .3 * Math.sin(u * 4)); const tb = tube(0, 0, 60, 130); c.restore(); drip(c, 500, 150, V.yAt(.55), t, [250, 240, 190], { rate: 2 }); c.save(); c.translate(500, 90); c.fillStyle = 'rgba(210,228,240,.9)'; rr(c, -35, -30, 70, 60, 6); c.fill(); c.strokeStyle = '#5b8db3'; c.lineWidth = 2; c.stroke(); c.restore(); }
      for (let i = 0; i < 9 * f; i++) { const q = (t * .3 + i / 9) % 1; c.fillStyle = `rgba(255,200,230,${(1 - q) * .55})`; c.beginPath(); c.arc(500 + Math.sin(q * 7 + i) * 60 * q, V.top - q * 120, 6 + q * 18, 0, TAU); c.fillStyle = `rgba(255,200,230,${(1 - q) * .5})`; c.fill(); } if (f > .5) { text(c, '♥ sweet, fruity smell', 500, 100, { size: 16, w: 800, col: '#be185d' }); }
      tag('Ethyl ethanoate: floats on water', 500, V.yAt(.55) + 4, { x: 220, y: 200, col: '#a16207' }); tag('Water', 500, V.yAt(.25), { x: 800, y: 350, col: '#0f4c75' });
      text(c, 'The ester is insoluble in water and lighter, so it forms a fruity-smelling layer', 500, 36, { size: 16, w: 700, col: '#334155' });
    } },
  info(s) { const { u, stage } = s; return stage === 0 ? { obs: 'The mixture is warmed in a water bath for about 5–10 minutes; the ester forms slowly (reversible reaction).', read: [['Ester formed', fix(u * 62, 0), '%'], ['Bath temp', fix(25 + 55 * Math.min(1, u * 1.6), 0), '°C'], ['Equilibrium yield', '≈ 65', '%']] } : { obs: 'Poured into cold water, the ester separates as a fruity-smelling layer on top.', read: [['Ester layer', fix(seg(u, .1, .5) * 100, 0), '%'], ['Smell', u > .2 ? 'fruity' : '—', ''], ['Density', '0.90', 'g/mL']] }; }
};

SCENES_REG.ethanoloxidation = {
  dur: 10, control: { label: 'Alkaline KMnO₄ added', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    labBG(c); const { t, u } = s; const B = beaker(500, BENCH, 300, 170), V = tube(500, BENCH + 4, 84, 270); shadowE(c, 500, BENCH, 320);
    drawVessel(c, B, { level: .55, color: LIQ.water, alpha: .4, t, marks: [[.4, '']] }); const used = Math.min(u, .7) / .7, excess = seg(u, .72, .95); const col = excess > 0 ? mix([225, 205, 160], [135, 60, 170], excess) : mix([240, 235, 225], [225, 205, 160], used);
    drawVessel(c, V, { level: .38 + u * .12, color: col, alpha: .5 + .35 * excess, t, wave: 2, inside(c) { if (u > .05 && u < .72) for (let i = 0; i < 8; i++) { const x = 480 + hash(i) * 40, y = V.yAt(.5) + hash(i * 3) * 80; circle(c, x, y, 4 + hash(i) * 3, 'rgba(120,70,30,.6)'); } } });
    if (u > 0 && u < .995) { dropper(c, 500, 132, { color: [135, 60, 170], squeeze: .4 }); drip(c, 500, 134, V.yAt(.45), t, [135, 60, 170], { rate: 2.4 }); } else dropper(c, 500, 132, { color: [135, 60, 170] });
    burner(c, 500, BENCH + 4, t, true, { s: 0, h: 0 }); for (let i = 0; i < 5; i++) { const q = (t * .3 + i / 5) % 1; c.fillStyle = `rgba(255,255,255,${(1 - q) * .35})`; c.beginPath(); c.arc(500 + Math.sin(q * 6 + i) * 30, B.top - q * 40, 6 + q * 10, 0, TAU); c.fill(); }
    tag('Ethanol + alkaline KMnO₄', 500, V.yAt(.2), { x: 220, y: 330, col: '#475569' }); tag(excess > .3 ? 'Purple persists: oxidant in excess' : used > .1 ? 'Purple colour discharged' : 'Warm water bath', 520, V.yAt(.4), { x: 790, y: 330, col: '#6d28d9' }); if (u > .1 && u < .7) tag('Brown MnO₂ forms', 490, V.yAt(.2), { x: 790, y: 410, col: '#7c2d12' });
    text(c, 'CH₃CH₂OH + 2[O] → CH₃COOH + H₂O  (oxidation of alcohol to carboxylic acid)', 500, 36, { size: 16, w: 700, col: '#334155' });
  },
  info(s) { const u = s.u, used = Math.min(u, .7) / .7; return { obs: u < .7 ? 'Each drop of purple KMnO₄ is decolourised as it oxidises ethanol; brown MnO₂ appears.' : 'All the ethanol is oxidised; extra permanganate now stays purple.', read: [['KMnO₄ added', fix(u * 20, 1), 'mL'], ['Ethanol oxidised', fix(used * 100, 0), '%'], ['Ethanoic acid', fix(used * 0.57, 2), 'g'], ['Colour', u < .7 ? 'brown-yellow' : 'purple', '']] }; }
};

SCENES_REG.hardwater = {
  stages: ['Soap', 'Detergent'], dur: 10,
  control: { label: 'Shaking time', min: 0, max: 100, step: 1, value: 0, unit: 's', fmt: v => Math.round(v / 100 * 30) + ' s' },
  draw(c, s) {
    labBG(c); const { t, u, stage } = s; const shake = u > 0 && u < .99 ? Math.sin(t * 14) * 14 : 0;
    [[330, 'Soft (distilled) water', 0], [670, 'Hard water (Ca²⁺, Mg²⁺)', 1]].forEach(([x, nm, hard]) => { const T = tube(x + shake, BENCH - 8, 100, 280); shadowE(c, x, BENCH, 150); const lather = (hard ? (stage === 1 ? 1 : .0) : 1) * u, scum = hard && stage === 0 ? u : 0;
      drawVessel(c, T, { level: .45, color: scum > .3 ? mix([200, 225, 240], [235, 235, 225], scum) : [200, 225, 240], alpha: .4 + .3 * scum, t, inside(c) { for (let i = 0; i < lather * 70; i++) { const bx = T.span(T.yAt(.45))[0] + 6 + hash(i) * 86, by = T.yAt(.45) - 6 - hash(i * 3) * 60 * lather; circle(c, bx + shake, by, 4 + hash(i * 5) * 7, 'rgba(255,255,255,.7)', 'rgba(150,190,220,.8)', 1); } if (scum > .1) for (let i = 0; i < scum * 50; i++) { c.fillStyle = 'rgba(250,250,245,.95)'; c.fillRect(T.span(T.yAt(.2))[0] + 6 + hash(i) * 86 + shake, T.yAt(.45) + 8 + hash(i * 2) * 110, 3 + hash(i) * 3, 3); } } });
      text(c, nm, x, BENCH + 26, { size: 13, w: 700, col: '#334155' }); const out = hard ? (stage === 0 ? (u > .3 ? 'curdy white SCUM, no lather' : 'cleanser added') : (u > .3 ? 'rich lather, no scum' : 'cleanser added')) : (u > .3 ? 'rich lather' : 'cleanser added'); tag(out, x, T.yAt(.5), { x, y: 120, col: hard && stage === 0 ? '#b45309' : '#15803d', dot: false, line: false }); });
    text(c, stage === 0 ? 'Soap + Ca²⁺ → insoluble calcium stearate (scum)' : 'Detergent + Ca²⁺ → soluble salt: lather and clean cloth', 500, 36, { size: 17, w: 700, col: '#334155' });
  },
  info(s) { return { obs: s.stage === 0 ? 'Soap lathers well in soft water but forms a curdy white scum with Ca²⁺/Mg²⁺ ions in hard water.' : 'Detergent (sulphonate / sulphate salts) lathers in both soft and hard water because its Ca²⁺/Mg²⁺ salts are soluble.', read: [['Lather, soft water', fix(s.u * 100, 0), '%'], ['Lather, hard water', fix((s.stage === 1 ? s.u : 0) * 100, 0), '%'], ['Scum', s.stage === 0 && s.u > .3 ? 'yes' : 'no', '']] }; }
};

SCENES_REG.soapwater = {
  stages: ['Cleansing action', 'Micelle in hard water'], dur: 11,
  control: { label: 'Soap concentration', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    darkBG(c, { a: '#122c4a', b: '#0a1a30' }); const { t, u, stage } = s; text(c, stage === 0 ? 'Soap molecules surround greasy dirt and lift it off the cloth' : 'In hard water, Ca²⁺ binds soap anions into insoluble scum', 500, 36, { size: 17, w: 700, col: '#e2e8f0' });
    // cloth fibres
    c.strokeStyle = 'rgba(148,163,184,.5)'; c.lineWidth = 6; for (let i = 0; i < 12; i++) { c.beginPath(); c.moveTo(60 + i * 80, 470); c.lineTo(100 + i * 80, 500); c.stroke(); } c.fillStyle = 'rgba(100,116,139,.35)'; c.fillRect(0, 485, W, 80);
    const lift = seg(u, .35, .95), cx0 = 500, cy0 = lerp(430, 250, easeIO(lift)); const nS = Math.round(4 + u * 24);
    if (stage === 0) { cellBlob(c, cx0, cy0, 52, 44, 'rgba(250,204,21,.85)', '#a16207', .04, t); text(c, 'oil / grease', cx0, cy0, { size: 12, col: '#713f12', w: 800 });
      for (let i = 0; i < nS; i++) { const a = i / nS * TAU + t * .25 * lift, ph = 1 - (i < nS * u * 1.2 ? 1 : 0); const r = 58 + (1 - Math.min(1, u * 2)) * (60 + hash(i) * 120) * (hash(i * 3) > .5 ? 1 : -.4); const x = cx0 + Math.cos(a) * r, y = cy0 + Math.sin(a) * r; soapMol(c, x, y, a + Math.PI, 1.0); }
      for (let i = 0; i < 14; i++) circle(c, 80 + hash(i) * 840 + Math.sin(t + i) * 8, 130 + hash(i * 3) * 280 + Math.cos(t * .8 + i) * 8, 3, 'rgba(147,197,253,.5)');
      tag('Hydrophobic tails dissolve in oil', cx0 - 55, cy0 - 20, { x: 215, y: 140, col: '#fb923c' }); tag('Hydrophilic heads face water', cx0 + 62, cy0 - 38, { x: 790, y: 140, col: '#38bdf8' }); if (lift > .5) tag('Micelle carried away by rinsing water', cx0, cy0 + 56, { x: 500, y: 420, col: '#e2e8f0' });
    } else { for (let i = 0; i < 10; i++) { const x = 120 + (i % 5) * 160 + Math.sin(t + i) * 8, y = 180 + Math.floor(i / 5) * 110 + Math.cos(t * 1.1 + i) * 8; const bound = u > hash(i + 2); if (bound) { soapMol(c, x - 22, y, Math.PI, 1.1); ion(c, x, y, 12, [250, 204, 21], 'Ca²⁺', t, i, 1); soapMol(c, x + 22, y, 0, 1.1); if (u > .5) { c.fillStyle = 'rgba(248,250,252,.12)'; c.beginPath(); c.arc(x, y, 50, 0, TAU); c.fill(); } } else { soapMol(c, x, y, i, 1.1); ion(c, x + 38, y + 18, 11, [250, 204, 21], 'Ca²⁺', t, i, 4); } }
      tag(u > .5 ? 'Insoluble (C₁₇H₃₅COO)₂Ca — scum' : 'Ca²⁺ meets soap anions', 500, 300, { x: 500, y: 430, col: '#e2e8f0', line: false }); }
  },
  info(s) { const l = seg(s.u, .35, .95); return { obs: s.stage === 0 ? 'Soap molecules form a micelle around the oil droplet (tails in, heads out); rinsing water carries it away.' : 'Calcium and magnesium ions react with soap to give an insoluble scum, wasting soap.', read: [['Soap molecules', Math.round(4 + s.u * 24), 'in view'], ['Dirt lifted', fix(l * 100, 0), '%'], ['Micelle', l > .3 ? 'formed' : 'forming', '']] }; }
};
