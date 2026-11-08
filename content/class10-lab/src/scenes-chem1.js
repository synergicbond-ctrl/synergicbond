'use strict';
/* ===== Chapter 10.1 — Chemical Reactions & Equations ===== */

/* shared: jiggling ion particle for particle-view insets */
function ion(c, x, y, r, col, label, t, i, amp = 5) {
  const px = x + Math.sin(t * 1.7 + i * 2.3) * amp + Math.sin(t * 3.1 + i) * amp * .4, py = y + Math.cos(t * 1.3 + i * 1.7) * amp + Math.cos(t * 2.7 + i * 3) * amp * .4;
  const g = c.createRadialGradient(px - r * .35, py - r * .35, 1, px, py, r); g.addColorStop(0, rgb(shade(col, .55))); g.addColorStop(1, rgb(shade(col, -.2))); circle(c, px, py, r, g);
  if (label) text(c, label, px, py, { size: Math.max(8, r * .85), w: 800, col: '#fff' }); return [px, py];
}

SCENES_REG.reactions = {
  stages: ['Precipitate · Pb(NO₃)₂ + KI', 'Gas · Zn + H₂SO₄', 'Heat · CaO + H₂O'], dur: 10,
  control: st => ({ label: ['Potassium iodide added', 'Zinc granules added', 'Water added to quicklime'][st], min: 0, max: 100, step: 1, value: 0, unit: '%' }),
  draw(c, s) {
    labBG(c); const { t, u, stage } = s;
    if (stage === 0) {
      const V = beaker(500, BENCH, 250, 250), mL = u * 40, pb = Math.max(0, 2 - .05 * mL), ppt = mL * .02305; const cloud = Math.pow(u, .6);
      shadowE(c, 500, BENCH, 280);
      const dy = 70 + 28 * Math.sin(t * 2) * 0; dropper(c, 500, 140, { color: [255, 255, 255], squeeze: u > 0 && u < 1 ? .5 + .5 * Math.sin(t * 8) : 0 });
      if (u > 0 && u < .999) { const f = drip(c, 500, 142, V.yAt(.68) - 4, t, [250, 250, 250]); }
      drawVessel(c, V, { level: .68, color: mix([205, 228, 242], [244, 214, 70], cloud), alpha: .35 + .45 * cloud, t, marks: [[.2, '50'], [.45, '100'], [.7, '150']],
        inside(c, { ly }) {
          // falling golden precipitate plumes
          const n = Math.round(u * 70); for (let i = 0; i < n; i++) { const sd = hash(i * 13.7), ph = (t * (22 + sd * 30) + sd * 400) % 200, y = ly + 6 + ph, x = 500 + (hash(i * 3.3) - .5) * (40 + ph * 1.1) * (.5 + u); if (y > V.bot - 10) continue; const a = 1 - ph / 220; circle(c, x, y, 2 + sd * 2.5, `rgba(244,196,40,${.75 * a})`); circle(c, x - .7, y - .7, .9, 'rgba(255,255,255,.7)'); }
          // sediment
          const sh = 4 + u * 38, bg = c.createLinearGradient(0, V.bot - sh, 0, V.bot); bg.addColorStop(0, 'rgba(250,205,50,.95)'); bg.addColorStop(1, 'rgba(206,150,20,1)'); c.fillStyle = bg; c.beginPath(); c.moveTo(V.span(V.bot - 4)[0] - 10, V.bot); for (let x = V.span(V.bot - 4)[0] - 10; x <= V.span(V.bot - 4)[1] + 10; x += 8) c.lineTo(x, V.bot - sh + Math.sin(x * .12) * 2.5 + (Math.abs(x - 500) > 90 ? 5 : 0)); c.lineTo(V.span(V.bot - 4)[1] + 10, V.bot); c.fill();
          for (let i = 0; i < u * 90; i++) { c.fillStyle = `rgba(255,${230 + hash(i) * 20},120,.9)`; c.fillRect(V.span(V.bot - 3)[0] + 6 + hash(i * 2) * 210, V.bot - hash(i * 5) * sh, 1.8, 1.8); }
        } });
      if (u > .02) tag('PbI₂ ↓ yellow precipitate', 500, V.bot - 14, { x: 790, y: 410, col: '#a16207' });
      tag('Pb(NO₃)₂(aq) — colourless', 395, V.yAt(.5), { x: 190, y: 300, col: '#475569' }); tag('KI(aq) from dropper', 498, 100, { x: 700, y: 108, col: '#0f4c75' });
      text(c, 'Lead(II) iodide is insoluble: Pb²⁺ + 2 I⁻ → PbI₂↓', 500, 36, { size: 17, w: 700, col: '#334155' });
    } else if (stage === 1) {
      const V = tube(500, BENCH + 4, 74, 270), gran = Math.round(u * 8);
      // test-tube stand
      c.fillStyle = '#b08a5a'; rr(c, 380, BENCH - 8, 240, 14, 4); c.fill(); c.fillStyle = '#8a6a40'; c.fillRect(380, BENCH + 6, 240, 4);
      shadowE(c, 500, BENCH + 8, 120);
      const rate = Math.pow(u, .85) * 1.0, vol = u * 60;
      drawVessel(c, V, { level: .62, color: [225, 240, 248], alpha: .38, t, marks: [[.2, ''], [.4, ''], [.6, '']],
        inside(c, { ly }) {
          for (let i = 0; i < gran; i++) { const gx = 480 + (i % 4) * 14 + (hash(i) - .5) * 6, gy = V.bot - 8 - Math.floor(i / 4) * 11; c.fillStyle = '#8c97a6'; c.beginPath(); c.moveTo(gx - 6, gy + 5); c.lineTo(gx - 4, gy - 4); c.lineTo(gx + 3, gy - 6); c.lineTo(gx + 7, gy + 2); c.lineTo(gx + 3, gy + 6); c.closePath(); c.fill(); c.strokeStyle = '#5b6575'; c.lineWidth = 1; c.stroke(); c.fillStyle = 'rgba(255,255,255,.45)'; c.fillRect(gx - 3, gy - 4, 4, 2); }
          if (u > 0) bubbleStream(c, 497, V.bot - 14, ly - 4, t, { n: 24, rate: rate, spread: 15, speed: 80 + 90 * u, r: 3.6 });
        } });
      // gas collecting above the mouth, then lit splint
      if (u > .05) { c.save(); c.globalAlpha = Math.min(.5, u * .6); const gg = c.createRadialGradient(500, V.top - 8, 0, 500, V.top - 8, 70); gg.addColorStop(0, 'rgba(180,220,255,.7)'); gg.addColorStop(1, 'rgba(180,220,255,0)'); c.fillStyle = gg; c.fillRect(420, V.top - 80, 160, 140); c.restore(); }
      if (u > .55) { const f = seg(u, .55, .75), sx = lerp(640, 512, easeOut(f)), sy = lerp(V.top - 70, V.top - 18, easeOut(f)); c.save(); c.translate(sx, sy); c.rotate(-.55); c.fillStyle = '#c99a5b'; rr(c, -4, 0, 8, 130, 3); c.fill(); flame(c, 0, 0, t, { s: .42, h: 54, yellow: true }); c.restore();
        if (u > .78) { const pf = seg(u, .78, .86); glow(c, 505, V.top - 10, 90 * (1 - Math.abs(pf - .5) * 1.3) + 10, [255, 200, 90], .85 * (pf < 1 ? 1 : 0)); if (pf > 0 && pf < 1) text(c, 'POP!', 560, V.top - 55, { size: 26, w: 900, col: '#c2410c' }); } }
      tag('Zinc granules', 495, V.bot - 14, { x: 300, y: 430, col: '#475569' }); tag('dil. H₂SO₄', 470, V.yAt(.4), { x: 300, y: 300, col: '#0f4c75' }); tag('H₂ bubbles', 500, V.yAt(.45) - 30, { x: 720, y: 330, col: '#0369a1' });
      if (u > .6) tag('Burning splint → "pop" = hydrogen', 520, V.top - 20, { x: 760, y: 150, col: '#c2410c' });
      text(c, 'Zn + H₂SO₄ → ZnSO₄ + H₂↑ — effervescence shows gas evolution', 500, 36, { size: 17, w: 700, col: '#334155' });
    } else {
      const V = beaker(500, BENCH, 250, 190), prog = u, temp = 25 + 58 * Math.sin(prog * Math.PI / 2) * (prog > 0 ? 1 : 0) - (prog > .92 ? (prog - .92) * 120 : 0);
      shadowE(c, 500, BENCH, 280);
      if (u > 0 && u < .98) { const f = drip(c, 380, 150, V.yAt(.4), t, [190, 225, 250], { rate: 2 }); }
      // tilted wash bottle / water stream
      c.save(); c.translate(300, 120); c.rotate(.5); const bg = c.createLinearGradient(0, 0, 70, 0); bg.addColorStop(0, '#dff1ff'); bg.addColorStop(1, '#8ec6ea'); c.fillStyle = bg; rr(c, -35, -10, 70, 110, 14); c.fill(); c.strokeStyle = '#5b8db3'; c.lineWidth = 2; c.stroke(); c.fillStyle = '#5b8db3'; c.fillRect(-5, -26, 10, 20); text(c, 'H₂O', 0, 50, { size: 15, w: 800, col: '#1e5b86' }); c.restore();
      drawVessel(c, V, { level: .15 + prog * .32, color: mix([210, 225, 240], [245, 245, 238], Math.min(1, prog * 1.6)), alpha: .3 + prog * .55, t, wave: 2 + prog * 3,
        inside(c) { const w = 150; c.fillStyle = '#e9e6dc'; for (let i = 0; i < 7; i++) { const lx = 440 + (i % 4) * 28 + (hash(i) - .5) * 8, ly2 = V.bot - 14 - Math.floor(i / 4) * 24 * (1 - prog * .6); c.save(); c.translate(lx, ly2); c.rotate(hash(i + 4) - .5); c.fillStyle = `rgb(${232 - prog * 8},${229 - prog * 8},${216})`; rr(c, -15, -11, 30, 22, 5); c.fill(); c.strokeStyle = 'rgba(120,115,100,.45)'; c.stroke(); c.restore(); }
          if (prog > .05 && prog < .98) bubbleStream(c, 500, V.bot - 20, V.yAt(.15 + prog * .32), t, { n: 14, rate: prog, spread: 55, speed: 40, r: 2.8 }); } });
      if (prog > .05) steam(c, 500, V.top - 6, t, { n: 7, h: 130, a: .35 * Math.min(1, prog * 2) });
      thermometer(c, 650, BENCH, 270, temp, 0, 100); circle(c, 650, BENCH - 7, 0);
      tag(fix(temp, 0) + ' °C', 650, BENCH - 30 - clamp(temp / 100, 0, 1) * 232, { x: 760, y: 200, col: temp > 60 ? '#b91c1c' : '#0f4c75' });
      tag('CaO lumps (quicklime)', 440, V.bot - 14, { x: 250, y: 440, col: '#475569' }); if (prog > .3) tag('Ca(OH)₂ — slaked lime, milky', 500, V.yAt(.3), { x: 255, y: 330, col: '#475569' });
      text(c, 'CaO + H₂O → Ca(OH)₂ + heat — the beaker feels hot: exothermic', 500, 36, { size: 17, w: 700, col: '#334155' });
    }
  },
  info(s) {
    const { u, stage } = s;
    if (stage === 0) { const mL = u * 40; return { obs: u < .02 ? 'The Pb(NO₃)₂ solution is clear and colourless. Press Run to add KI dropwise.' : u < .98 ? 'Each KI drop produces a yellow cloud that sinks and settles — the precipitate is PbI₂.' : 'All Pb²⁺ has been used up: the solution is cloudy with a thick yellow sediment of PbI₂.', read: [['KI added', fix(mL, 1), 'mL'], ['PbI₂ formed', fix(mL * 23.05, 0), 'mg'], ['Pb²⁺ left', fix(Math.max(0, 2 - .05 * mL), 2), 'mmol'], ['Colour', u < .03 ? 'clear' : 'yellow', '']] }; }
    if (stage === 1) return { obs: u < .03 ? 'Zinc and dilute sulphuric acid in a test tube. Add granules and watch closely.' : u < .55 ? 'Colourless bubbles stream off the zinc surface — a gas is being released (effervescence).' : 'A burning splint at the mouth gives a "pop" — the gas is hydrogen.', read: [['Zn granules', Math.round(u * 8), ''], ['H₂ volume', fix(u * 60, 0), 'mL'], ['Rate', fix(u * 100, 0), '%'], ['Splint test', u > .78 ? 'pop' : '—', '']] };
    const T = 25 + 58 * Math.sin(u * Math.PI / 2) - (u > .92 ? (u - .92) * 120 : 0); return { obs: u < .03 ? 'Dry quicklime (CaO) lumps at room temperature.' : u < .9 ? 'Water hisses and steams; the lumps crumble, the mixture turns milky and the thermometer climbs.' : 'Reaction complete: slaked lime formed and the mixture begins to cool.', read: [['Temperature', fix(u > 0 ? T : 25, 1), '°C'], ['ΔT', fix(u > 0 ? T - 25 : 0, 1), '°C'], ['Ca(OH)₂ formed', fix(u * 100, 0), '%'], ['Type', 'exothermic', '']] };
  },
  micro(c, s) {
    const { t, u, stage } = s; const B = micro(c, W - 346, 16, 330, 230, stage === 0 ? 'IONS IN SOLUTION  (≈ 10⁸ × zoom)' : stage === 1 ? 'ZINC SURFACE' : 'SLAKING'); c.save(); rr(c, B.x, B.y, B.w, B.h, 14); c.clip();
    if (stage === 0) {
      const n = 7, bound = Math.round(u * n);
      for (let i = 0; i < n; i++) { const hx = B.x + 50 + (i % 4) * 75 + hash(i) * 20, hy = B.y + 70 + Math.floor(i / 4) * 80 + hash(i * 2) * 25;
        if (i < bound) { // PbI2 unit: Pb in middle, two I
          const cxp = B.x + 60 + (i % 4) * 72, cyp = B.y + 168 - Math.floor(i / 4) * 20 + (i % 2) * 6; ion(c, cxp, cyp, 14, [100, 110, 125], 'Pb', t, i, 1.2); ion(c, cxp - 20, cyp + 8, 11, [240, 190, 30], 'I', t, i + 5, 1.2); ion(c, cxp + 20, cyp + 8, 11, [240, 190, 30], 'I', t, i + 9, 1.2); }
        else { ion(c, hx, hy, 14, [100, 110, 125], 'Pb²⁺', t, i, 8); ion(c, hx + 28, hy + 22, 11, [240, 190, 30], 'I⁻', t, i + 4, 9); ion(c, hx - 28, hy + 24, 11, [240, 190, 30], 'I⁻', t, i + 7, 9); }
        ion(c, B.x + 25 + (i * 53) % 290, B.y + 60 + (i * 37) % 80, 9, [150, 90, 200], 'K⁺', t, i + 20, 10); ion(c, B.x + 40 + (i * 71) % 270, B.y + 100 + (i * 29) % 90, 9, [60, 130, 220], 'NO₃⁻', t, i + 30, 10); }
      text(c, 'Pb²⁺ + 2I⁻ → PbI₂ (solid lattice); K⁺, NO₃⁻ stay dissolved', B.x + B.w / 2, B.y + B.h - 12, { size: 10.5, col: '#cbd5e1' });
    } else if (stage === 1) {
      for (let i = 0; i < 6; i++) ion(c, B.x + 40 + i * 52, B.y + 190, 17, [140, 150, 165], 'Zn', t, i, 1.5);
      for (let i = 0; i < 9; i++) { const f = (t * .35 + i * .13) % 1; ion(c, B.x + 25 + (i % 5) * 62 + hash(i) * 20, B.y + 40 + f * 130 * (1 - u * .1), 8, [230, 90, 90], 'H⁺', t, i, 6); }
      for (let i = 0; i < Math.round(u * 5); i++) { const f = (t * .5 + i * .2) % 1; ion(c, B.x + 70 + i * 55, B.y + 150 - f * 120, 12, [96, 165, 250], 'H₂', t, i + 3, 4); }
      text(c, 'Zn → Zn²⁺ + 2e⁻ ;  2H⁺ + 2e⁻ → H₂↑', B.x + B.w / 2, B.y + B.h - 12, { size: 10.5, col: '#cbd5e1' });
    } else {
      for (let i = 0; i < 14; i++) { const k = i % 7, row = Math.floor(i / 7), cvt = u > hash(i + 3); const x = B.x + 30 + k * 42, y = B.y + 70 + row * 55; ion(c, x, y, 14, [250, 250, 240], cvt ? 'Ca' : 'Ca', t, i, 1.4); ion(c, x + 20, y + 4, 10, [239, 83, 80], cvt ? 'OH' : 'O', t, i + 2, 1.4); if (cvt) ion(c, x - 20, y + 4, 10, [239, 83, 80], 'OH', t, i + 5, 1.4); }
      for (let i = 0; i < 10; i++) { const f = (t * .6 + i * .1) % 1; c.fillStyle = `rgba(255,170,60,${(1 - f) * u})`; c.beginPath(); c.arc(B.x + 25 + hash(i) * 280, B.y + B.h - 25 - f * 140, 3 + 3 * f, 0, TAU); c.fill(); }
      text(c, 'Bond formation releases energy → temperature rises', B.x + B.w / 2, B.y + B.h - 12, { size: 10.5, col: '#cbd5e1' });
    }
    c.restore();
  }
};

SCENES_REG.reactiontypes = {
  stages: ['Displacement', 'Double displacement', 'Combination', 'Decomposition'], dur: 9,
  control: st => ({ label: 'Reaction progress', min: 0, max: 100, step: 1, value: 0, unit: '%' }),
  draw(c, s) {
    labBG(c); const { t, u, stage } = s; shadowE(c, 500, BENCH, 300);
    if (stage === 0) { // Fe nail in CuSO4
      const V = beaker(500, BENCH, 250, 250); const col = mix(LIQ.cuso4, [150, 220, 190], u * .85);
      drawVessel(c, V, { level: .7, color: col, alpha: .75, t, marks: [[.25, '50'], [.5, '100'], [.7, '150']], inside(c) {
        const nx = 500, top = 190; c.save(); const ng = c.createLinearGradient(nx - 6, 0, nx + 6, 0); ng.addColorStop(0, '#6b7280'); ng.addColorStop(.5, '#cfd4dc'); ng.addColorStop(1, '#6b7280'); c.fillStyle = ng; rr(c, nx - 5, top, 10, 205, 4); c.fill();
        const ch = 205 * u * .85, cg = c.createLinearGradient(nx - 8, 0, nx + 8, 0); cg.addColorStop(0, '#8a3b17'); cg.addColorStop(.5, '#e08a4f'); cg.addColorStop(1, '#8a3b17'); c.fillStyle = cg; c.beginPath(); for (let y = 0; y <= ch; y += 5) { const w = 7 + Math.sin(y * .7 + 3) * 1.8 * u + u * 2.5; y ? c.lineTo(nx + w, top + 205 - y) : c.moveTo(nx + w, top + 205); } for (let y = ch; y >= 0; y -= 5) c.lineTo(nx - 7 - Math.sin(y * .5) * 1.8 * u - u * 2.5, top + 205 - y); c.closePath(); c.fill(); c.restore();
        for (let i = 0; i < 26 * u; i++) { const sd = hash(i * 3), y = (V.bot - 14) - ((t * 12 + sd * 90) % 90) * 0, x = 500 + (hash(i) - .5) * 90; c.fillStyle = `rgba(190,100,50,${.55})`; c.fillRect(x, V.bot - 6 - hash(i * 9) * 20 * u, 2.4, 2.4); } } });
      tag('Iron nail → coated with brown Cu', 500, 330, { x: 770, y: 250, col: '#9a3412' }); tag(u < .5 ? 'CuSO₄ — blue' : 'FeSO₄ — pale green', 420, 330, { x: 230, y: 300, col: u < .5 ? '#1d4ed8' : '#15803d' });
      text(c, 'Fe + CuSO₄ → FeSO₄ + Cu — a more reactive metal displaces a less reactive one', 500, 36, { size: 16, w: 700, col: '#334155' });
    } else if (stage === 1) { // BaCl2 + Na2SO4
      const A = tube(360, BENCH, 70, 250), B = tube(640, BENCH, 70, 250), Cc = tube(500, BENCH, 80, 250);
      const pour = seg(u, .05, .45);
      drawVessel(c, A, { level: .55 * (1 - pour * .9), color: LIQ.clear, alpha: .3, t }); drawVessel(c, B, { level: .55 * (1 - pour * .9), color: LIQ.clear, alpha: .3, t });
      drawVessel(c, Cc, { level: .06 + pour * .5, color: mix(LIQ.clear, LIQ.milk, seg(u, .3, .8)), alpha: .35 + .5 * seg(u, .3, .8), t, inside(c) { const n = u * 70; for (let i = 0; i < n; i++) { const sd = hash(i * 7); const y = Cc.bot - 6 - ((t * 20 + sd * 190) % 150) * (1 - u * .5); c.fillStyle = `rgba(250,250,250,${.9 * (1 - seg(u, .85, 1) * .3)})`; c.fillRect(Cc.span(Cc.bot - 20)[0] + 4 + hash(i) * 62, Math.max(y, Cc.bot - 130 * (.2 + .8 * pour)), 2.2, 2.2); } c.fillStyle = 'rgba(255,255,255,.92)'; c.fillRect(Cc.span(Cc.bot - 6)[0], Cc.bot - 4 - u * 30, 76, u * 30 + 4); } });
      tag('BaCl₂(aq)', 360, 300, { x: 215, y: 250, col: '#475569' }); tag('Na₂SO₄(aq)', 640, 300, { x: 790, y: 250, col: '#475569' }); if (u > .3) tag('BaSO₄ ↓ white precipitate', 500, Cc.bot - 14, { x: 500, y: 130, col: '#334155' });
      if (u > .02 && u < .5) { c.save(); c.translate(lerp(360, 470, pour), 120 + 20 * Math.sin(pour * 3)); c.rotate(.25 + pour * .5); c.restore(); }
      text(c, 'BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl — ions exchange partners', 500, 36, { size: 16, w: 700, col: '#334155' });
    } else if (stage === 2) { // Mg burning
      const f = seg(u, .15, .9); c.save(); c.translate(500, 300);
      // tongs + ribbon
      c.strokeStyle = '#64748b'; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.moveTo(-210, -120); c.lineTo(-24, -6); c.moveTo(-210, -80); c.lineTo(-24, 0); c.stroke();
      const rl = 120 * (1 - f * .7); c.strokeStyle = '#cbd5e1'; c.lineWidth = 7; c.beginPath(); c.moveTo(-24, -3); c.lineTo(-24 + rl, -3); c.stroke();
      if (f > 0 && f < 1) { const bx = -24 + rl; glow(c, bx, -10, 160, [255, 255, 255], .95); glow(c, bx, -10, 70, [255, 255, 255], 1); for (let i = 0; i < 30; i++) { const a = hash(i + Math.floor(t * 20)) * TAU, r = 20 + hash(i * 2 + Math.floor(t * 20)) * 70; c.strokeStyle = `rgba(255,255,255,${.5 * hash(i)})`; c.lineWidth = 1; c.beginPath(); c.moveTo(bx, -10); c.lineTo(bx + Math.cos(a) * r, -10 + Math.sin(a) * r); c.stroke(); } }
      // white MgO ash
      for (let i = 0; i < f * 60; i++) { c.fillStyle = `rgba(214,218,224,.95)`; c.fillRect(-60 + hash(i) * 200, 95 + hash(i * 2) * 8 - hash(i * 5) * f * 10, 3, 3); }
      c.restore(); c.fillStyle = '#e5e7eb'; rr(c, 320, 395, 360, 14, 6); c.fill(); text(c, 'watch glass / ash', 500, 425, { size: 11, col: '#64748b' });
      if (f > .1 && f < .98) tag('Dazzling white flame — never look directly!', 540, 285, { x: 720, y: 180, col: '#b91c1c' }); if (f > .6) tag('White ash: magnesium oxide, MgO', 500, 396, { x: 780, y: 380, col: '#475569' });
      text(c, '2Mg + O₂ → 2MgO — two substances combine into one product', 500, 36, { size: 16, w: 700, col: '#334155' });
    } else { // ferrous sulphate heating / CaCO3
      const V = tube(430, BENCH - 90, 62, 190), f = seg(u, .1, .95);
      c.save(); c.translate(430, BENCH - 90); c.rotate(-.5); c.translate(-430, -(BENCH - 90));
      drawVessel(c, V, { level: .22, color: [150, 200, 130], alpha: 0, t, inside(c) { powder(c, 430, V.bot, 54, 26, mix([150, 200, 130], [150, 60, 40], f), 3); } });
      c.restore(); burner(c, 360, BENCH, t, true, { s: .9, h: 70 });
      for (let i = 0; i < 6; i++) { const q = (t * .4 + i / 6) % 1; c.fillStyle = `rgba(120,70,40,${(1 - q) * f * .6})`; c.beginPath(); c.arc(480 + q * 170, 250 - q * 90 + Math.sin(q * 8 + i) * 10, 5 + q * 14, 0, TAU); c.fill(); }
      tag('FeSO₄ crystals: green → brown Fe₂O₃', 400, 360, { x: 700, y: 400, col: '#92400e' }); tag('Brown fumes SO₂ + SO₃', 560, 215, { x: 760, y: 180, col: '#b45309' });
      text(c, '2FeSO₄ →(heat) Fe₂O₃ + SO₂ + SO₃ — one reactant splits into several products', 500, 36, { size: 16, w: 700, col: '#334155' });
    }
  },
  info(s) {
    const { u, stage } = s; const o = [
      ['Fe + CuSO₄ → FeSO₄ + Cu', 'Blue colour fades to pale green while a reddish-brown coat grows on the iron nail.', [['Cu deposited', fix(u * 100, 0), '%'], ['Blue Cu²⁺ left', fix((1 - u) * 100, 0), '%'], ['Solution', u < .5 ? 'blue' : 'green', '']]],
      ['BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl', 'The two clear solutions are mixed: an instant white, milky precipitate of barium sulphate appears.', [['Mixed', fix(seg(u, .05, .45) * 100, 0), '%'], ['BaSO₄', fix(u * 2.33, 2), 'g'], ['Colour', 'white ppt', '']]],
      ['2Mg + O₂ → 2MgO', 'Magnesium ribbon ignites with a dazzling white flame, leaving a white powder (MgO).', [['Mg left', fix((1 - seg(u, .15, .9)) * 100, 0), '%'], ['MgO formed', fix(seg(u, .15, .9) * 100, 0), '%'], ['Energy', 'light + heat', '']]],
      ['2FeSO₄ → Fe₂O₃ + SO₂ + SO₃', 'On strong heating green crystals turn brown and pungent fumes of SO₂/SO₃ are released.', [['Decomposed', fix(seg(u, .1, .95) * 100, 0), '%'], ['Colour', u < .3 ? 'green' : 'brown', ''], ['Gases', 'SO₂ + SO₃', '']]]][stage];
    return { obs: o[1], read: o[2] };
  }
};

SCENES_REG.electrolysis = {
  dur: 12, control: { label: 'Current intensity', min: 0, max: 10, step: .5, value: 0, unit: 'A', fmt: v => fix(v, 1) + ' A' },
  draw(c, s) {
    labBG(c); const { t, v } = s; const I = v, V = beaker(500, BENCH, 380, 300);
    // accumulated gas volume depends on charge passed; model it as persistent with time while current flows
    const key = 'elec'; const rate = I * .0026; damped[key + 'q'] = (damped[key + 'q'] || 0); if (s.dt > 0) damped[key + 'q'] = Math.min(1, damped[key + 'q'] + rate * s.dt * 6); if (s.t < .05) damped[key + 'q'] = 0; const gas = damped[key + 'q'];
    const h2 = gas * 150, o2 = h2 / 2; shadowE(c, 500, BENCH, 420);
    drawVessel(c, V, { level: .78, color: [200, 230, 245], alpha: .45, t, marks: [[.25, '100'], [.5, '200'], [.75, '300']], inside(c, { ly }) {
      // electrodes
      [[410, '#1f2937'], [590, '#1f2937']].forEach(([x]) => { c.fillStyle = '#374151'; rr(c, x - 6, 190, 12, V.bot - 190 - 10, 3); c.fill(); c.fillStyle = 'rgba(255,255,255,.18)'; c.fillRect(x - 4, 190, 3, V.bot - 200); });
      if (I > 0) { bubbleStream(c, 410, V.bot - 14, 300, t, { n: 16, rate: I / 10, spread: 7, speed: 70 + I * 12, r: 3 }); bubbleStream(c, 590, V.bot - 14, 300, t, { n: 9, rate: I / 10, spread: 7, speed: 60 + I * 10, r: 3.4, seed: 5 }); } } });
    // inverted graduated tubes (gas collection)
    const tubes = [[410, h2, '#1d4ed8', 'H₂'], [590, o2, '#b91c1c', 'O₂']];
    tubes.forEach(([x, gh, col, nm], i) => { const top = 145, w = 50; c.save(); c.beginPath(); c.rect(x - w / 2, top, w, 235); c.clip(); c.fillStyle = 'rgba(205,230,245,.45)'; c.fillRect(x - w / 2, top, w, 235); const wy = top + gh; c.fillStyle = 'rgba(190,225,245,.7)'; c.fillRect(x - w / 2, wy, w, 235 - gh); const gg = c.createLinearGradient(0, top, 0, wy); gg.addColorStop(0, i ? 'rgba(255,200,200,.5)' : 'rgba(180,200,255,.5)'); gg.addColorStop(1, 'rgba(255,255,255,.1)'); c.fillStyle = gg; c.fillRect(x - w / 2, top, w, gh); c.restore();
      c.strokeStyle = 'rgba(95,140,170,.7)'; c.lineWidth = 4; c.beginPath(); c.moveTo(x - w / 2, top + 4); c.lineTo(x - w / 2, 380); c.moveTo(x + w / 2, top + 4); c.lineTo(x + w / 2, 380); c.stroke(); c.beginPath(); c.arc(x, top + 4, w / 2, Math.PI, 0); c.stroke();
      for (let m = 1; m < 8; m++) { const my = top + m * 28; c.strokeStyle = 'rgba(40,70,110,.6)'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(x + w / 2 - 12, my); c.lineTo(x + w / 2, my); c.stroke(); }
      if (gh > 4) text(c, nm, x, top + gh / 2 + 6, { size: 20, w: 900, col }); });
    // power supply
    const px = 500, py = 90; c.fillStyle = '#2b3b55'; rr(c, px - 80, py - 28, 160, 56, 10); c.fill(); text(c, fix(I, 1) + ' A', px - 28, py, { size: 22, w: 800, col: '#7dd3fc', font: 'ui-monospace,monospace' }); text(c, 'DC', px + 42, py, { size: 14, col: '#94a3b8' });
    wireFlow(c, [[px - 80, py], [410, py], [410, 190]], t, I > 0 ? I * .3 : 0, { col: '#ef4444', w: 4, spacing: 28 }); wireFlow(c, [[px + 80, py], [590, py], [590, 190]], t, I > 0 ? -I * .3 : 0, { col: '#ef4444', w: 4, spacing: 28 });
    text(c, '−', 410 - 26, 120, { size: 28, w: 900, col: '#1d4ed8' }); text(c, '+', 590 + 26, 120, { size: 28, w: 900, col: '#dc2626' });
    tag('Cathode (−)', 410, 220, { x: 205, y: 215, col: '#1d4ed8' }); tag('Anode (+)', 590, 220, { x: 795, y: 215, col: '#dc2626' }); tag('Water + few drops of dil. H₂SO₄', 500, V.yAt(.2), { x: 500, y: 438, col: '#475569', line: false });
    if (gas > .1) tag('Volume ratio  H₂ : O₂ = 2 : 1', 500, 260, { x: 500, y: 200, col: '#334155', line: false });
  },
  info(s) { const g = damped['elecq'] || 0, h = g * 14; return { obs: s.v <= 0 ? 'Switch is off. Increase the current to start splitting water.' : 'Bubbles stream faster at the cathode (−) than at the anode (+): hydrogen collects at twice the volume of oxygen.', read: [['Current', fix(s.v, 1), 'A'], ['H₂ (cathode)', fix(h, 1), 'mL'], ['O₂ (anode)', fix(h / 2, 1), 'mL'], ['Ratio H₂ : O₂', h > .3 ? '2 : 1' : '—', '']] }; },
  micro(c, s) {
    const { t, v } = s, B = micro(c, W - 346, 16, 330, 230, 'WATER MOLECULES SPLITTING'); c.save(); rr(c, B.x, B.y, B.w, B.h, 14); c.clip(); const g = Math.min(1, (damped.elecq || 0) * 4);
    for (let i = 0; i < 8; i++) { const x = B.x + 50 + (i % 4) * 78 + Math.sin(t + i) * 8, y = B.y + 75 + Math.floor(i / 4) * 82 + Math.cos(t * 1.2 + i) * 7; const split = v > 0 && hash(i + 2) < g + .1; const d = split ? 14 + 10 * Math.sin(t * 3 + i) : 0; const [ox, oy] = ion(c, x, y, 15, [239, 83, 80], 'O', t, 0, 0); ion(c, x - 18 - d, y + 12 + d * .4, 9, [147, 197, 253], 'H', t, i, 0); ion(c, x + 18 + d, y + 12 + d * .4, 9, [147, 197, 253], 'H', t, i + 1, 0); }
    text(c, '2H₂O → 2H₂ + O₂ : electrical energy breaks O–H bonds', B.x + B.w / 2, B.y + B.h - 12, { size: 10.5, col: '#cbd5e1' }); c.restore();
  }
};

SCENES_REG.copperredox = {
  stages: ['Oxidation · Cu + O₂', 'Reduction · CuO + H₂'], dur: 10,
  control: { label: 'Reaction progress', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    labBG(c); const { t, u, stage } = s; const col = stage === 0 ? mix([196, 112, 62], [38, 40, 45], seg(u, .1, .85)) : mix([34, 36, 40], [196, 112, 62], seg(u, .15, .85));
    shadowE(c, 500, BENCH, 280);
    // china dish
    const dx = 500, dy = 340; if (stage === 0) { c.save(); const dg = c.createLinearGradient(dx - 150, 0, dx + 150, 0); dg.addColorStop(0, '#d4dbe4'); dg.addColorStop(.4, '#fff'); dg.addColorStop(1, '#b6c1ce'); c.fillStyle = dg; c.beginPath(); c.moveTo(dx - 150, dy); c.quadraticCurveTo(dx - 120, dy + 70, dx, dy + 74); c.quadraticCurveTo(dx + 120, dy + 70, dx + 150, dy); c.closePath(); c.fill(); c.strokeStyle = '#8b9aae'; c.lineWidth = 2; c.stroke(); c.restore();
    c.fillStyle = rgb(col); c.beginPath(); c.moveTo(dx - 105, dy + 8); c.quadraticCurveTo(dx, dy - 24, dx + 105, dy + 8); c.quadraticCurveTo(dx, dy + 30, dx - 105, dy + 8); c.fill();
    for (let i = 0; i < 70; i++) { c.fillStyle = rgb(shade(col, (hash(i) - .5) * .35), .9); c.fillRect(dx - 95 + hash(i * 2) * 190, dy - 5 + hash(i * 3) * 18 - Math.abs(hash(i * 2) - .5) * 14, 2.4, 2.4); } }
    if (stage === 0) { // heating with burner under tripod
      burner(c, 500, BENCH, t, true, { s: 1, h: 90 }); c.strokeStyle = '#475569'; c.lineWidth = 6; c.beginPath(); c.moveTo(392, dy + 40); c.lineTo(360, BENCH); c.moveTo(608, dy + 40); c.lineTo(640, BENCH); c.stroke(); c.fillStyle = '#334155'; c.fillRect(388, dy + 38, 224, 6);
      for (let i = 0; i < 12; i++) { const q = (t * .35 + i / 12) % 1; c.fillStyle = `rgba(150,200,255,${.55 * (1 - q)})`; c.beginPath(); c.arc(dx - 120 + hash(i) * 240, dy - 20 - q * 80, 3, 0, TAU); c.fill(); } text(c, 'O₂ from air', 330, 240, { size: 12, col: '#0369a1' });
      tag(u < .5 ? 'Copper powder (reddish-brown)' : 'Copper(II) oxide — black', 500, dy, { x: 770, y: 250, col: '#7c2d12' }); tag('Heat strongly', 500, BENCH - 70, { x: 760, y: 420, col: '#b91c1c' });
      text(c, '2Cu + O₂ →(heat) 2CuO — copper is OXIDISED (gains oxygen)', 500, 36, { size: 17, w: 700, col: '#334155' });
    } else { // hydrogen stream over hot CuO
      const tb = [[250, 330], [500, 330], [500, 330]]; c.save(); c.lineCap = 'round'; c.strokeStyle = 'rgba(95,140,170,.6)'; c.lineWidth = 56; c.beginPath(); c.moveTo(250, 336); c.lineTo(740, 336); c.stroke(); c.strokeStyle = 'rgba(225,240,250,.85)'; c.lineWidth = 50; c.beginPath(); c.moveTo(250, 336); c.lineTo(740, 336); c.stroke(); c.restore();
      c.fillStyle = rgb(col); rr(c, 440, 316, 140, 26, 8); c.fill(); for (let i = 0; i < 40; i++) { c.fillStyle = rgb(shade(col, (hash(i) - .5) * .4)); c.fillRect(444 + hash(i * 2) * 130, 318 + hash(i * 3) * 22, 3, 3); }
      for (let i = 0; i < 11; i++) { const q = ((t * .5 + i / 11) % 1); const x = 255 + q * 330; circle(c, x, 336 + Math.sin(t * 4 + i) * 6, 4.4, '#bfdbfe', '#60a5fa', 1.2); text(c, 'H₂', x, 336 + Math.sin(t * 4 + i) * 6, { size: 6.5, col: '#1e3a8a', w: 800 }); }
      if (u > .08) for (let i = 0; i < 6; i++) { const q = (t * .3 + i / 6) % 1; c.fillStyle = `rgba(230,240,255,${(1 - q) * .8 * seg(u, .1, .5)})`; c.beginPath(); c.arc(590 + q * 140, 336 - q * 50, 4 + q * 9, 0, TAU); c.fill(); }
      burner(c, 510, BENCH, t, true, { s: .8, h: 66 }); text(c, 'H₂ in', 235, 336, { size: 12, col: '#0369a1', align: 'right' });
      tag(u < .5 ? 'Black CuO' : 'Reddish-brown Cu', 510, 330, { x: 520, y: 235, col: '#7c2d12' }); if (u > .15) tag('Steam: H₂O (condenses as droplets)', 660, 300, { x: 800, y: 220, col: '#0369a1' });
      text(c, 'CuO + H₂ →(heat) Cu + H₂O — CuO is REDUCED, H₂ is OXIDISED', 500, 36, { size: 17, w: 700, col: '#334155' });
    }
  },
  info(s) { const f = seg(s.u, .1, .85); return s.stage === 0 ? { obs: 'Heated in air, the reddish-brown copper powder becomes coated with a black layer of copper(II) oxide.', read: [['Cu converted', fix(f * 100, 0), '%'], ['Colour', f < .4 ? 'red-brown' : f < .9 ? 'mixed' : 'black', ''], ['Mass of solid', fix(8 + f * 2, 2), 'g'], ['Role of O₂', 'oxidant', '']] } : { obs: 'Hydrogen passed over hot black CuO turns it back to shiny reddish-brown copper; steam appears at the exit.', read: [['CuO reduced', fix(f * 100, 0), '%'], ['Colour', f < .4 ? 'black' : f < .9 ? 'mixed' : 'red-brown', ''], ['Mass of solid', fix(10 - f * 2, 2), 'g'], ['Role of H₂', 'reductant', '']] }; },
  micro(c, s) { const { t, u, stage } = s, B = micro(c, W - 346, 16, 330, 230, stage === 0 ? 'Cu LATTICE + O₂' : 'CuO + H₂'); c.save(); rr(c, B.x, B.y, B.w, B.h, 14); c.clip(); const f = seg(u, .1, .85);
    for (let i = 0; i < 12; i++) { const x = B.x + 40 + (i % 6) * 50, y = B.y + 80 + Math.floor(i / 6) * 60; const conv = hash(i + 1) < f; if (stage === 0) { ion(c, x, y, 17, [196, 112, 62], 'Cu', t, i, 1.2); if (conv) ion(c, x + 24, y + 10, 10, [239, 83, 80], 'O', t, i + 3, 1.5); } else { ion(c, x, y, 17, conv ? [196, 112, 62] : [60, 60, 70], 'Cu', t, i, 1.2); if (!conv) ion(c, x + 24, y + 10, 10, [239, 83, 80], 'O', t, i + 3, 1.5); } }
    text(c, stage === 0 ? 'Cu → Cu²⁺ + 2e⁻ (oxidation); O₂ + 4e⁻ → 2O²⁻' : 'Cu²⁺ + 2e⁻ → Cu (reduction); H₂ → 2H⁺ + 2e⁻', B.x + B.w / 2, B.y + B.h - 12, { size: 10.5, col: '#cbd5e1' }); c.restore(); }
};
