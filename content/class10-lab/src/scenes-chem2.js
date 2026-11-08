'use strict';
/* ===== Chapter 10.2 — Acids, Bases & Salts ===== */
const IND = {
  litmus: ph => ph < 4.5 ? [225, 50, 60] : ph < 8.3 ? mix([225, 50, 60], [110, 80, 200], inv(4.5, 8.3, ph)) : mix([110, 80, 200], [40, 80, 220], inv(8.3, 10, ph)),
  phenolphthalein: ph => ph < 8.2 ? [232, 244, 250] : ph < 10 ? mix([232, 244, 250], [235, 60, 150], inv(8.2, 10, ph)) : mix([235, 60, 150], [190, 20, 120], inv(10, 13, ph)),
  methyl: ph => ph < 3.1 ? [230, 40, 50] : ph < 4.4 ? mix([230, 40, 50], [250, 170, 40], inv(3.1, 4.4, ph)) : mix([250, 170, 40], [250, 225, 50], inv(4.4, 6, ph)),
  turmeric: ph => ph < 8.2 ? [245, 200, 30] : mix([245, 200, 30], [190, 50, 25], inv(8.2, 10, ph)),
  universal: ph => { const st = [[0, [225, 20, 30]], [2, [240, 60, 40]], [3, [250, 120, 40]], [4, [252, 170, 40]], [5, [250, 215, 50]], [6, [200, 220, 60]], [7, [90, 185, 80]], [8, [40, 170, 150]], [9, [40, 130, 200]], [10, [60, 90, 200]], [11, [100, 70, 190]], [12, [130, 50, 170]], [14, [100, 30, 130]]]; for (let i = 1; i < st.length; i++) if (ph <= st[i][0]) return mix(st[i - 1][1], st[i][1], inv(st[i - 1][0], st[i][0], ph)); return st[st.length - 1][1]; }
};
const pHname = ph => ph < 6.5 ? 'acidic' : ph > 7.5 ? 'basic (alkaline)' : 'neutral';

SCENES_REG.indicators = {
  stages: ['Litmus', 'Phenolphthalein', 'Methyl orange', 'Turmeric'], dur: 10,
  control: { label: 'Solution pH', min: 1, max: 14, step: .1, value: 7, unit: 'pH', fmt: v => 'pH ' + fix(v, 1) },
  draw(c, s) {
    labBG(c); const { t, v, stage } = s; const fn = [IND.litmus, IND.phenolphthalein, IND.methyl, IND.turmeric][stage];
    // continuous colour bar
    const bx = 70, bw = 860, by = 92, bh = 38; c.save(); rr(c, bx, by, bw, bh, 10); c.clip(); for (let i = 0; i <= bw; i += 3) { c.fillStyle = rgb(fn(1 + i / bw * 13)); c.fillRect(bx + i, by, 4, bh); } c.restore(); rr(c, bx, by, bw, bh, 10); c.strokeStyle = 'rgba(40,60,90,.5)'; c.lineWidth = 2; c.stroke();
    for (let p = 1; p <= 14; p++) { const x = bx + (p - 1) / 13 * bw; line(c, x, by + bh, x, by + bh + 7, '#475569', 1.4); text(c, p, x, by + bh + 18, { size: 11, col: '#475569' }); }
    const mx = bx + (v - 1) / 13 * bw; c.fillStyle = '#0f172a'; poly(c, [[mx, by + bh + 2], [mx - 8, by + bh + 16], [mx + 8, by + bh + 16]]); c.fill(); text(c, 'pH ' + fix(v, 1), mx, by - 14, { size: 14, w: 800, col: '#0f172a' });
    text(c, 'ACIDIC', bx + 70, by - 14, { size: 12, w: 800, col: '#dc2626' }); text(c, 'NEUTRAL', bx + 6 / 13 * bw, by - 40, { size: 11, w: 800, col: '#16a34a' }); text(c, 'BASIC', bx + bw - 60, by - 14, { size: 12, w: 800, col: '#2563eb' });
    // rack of 14 tubes
    const R = 14, sp = 63, x0 = 500 - (R - 1) / 2 * sp; c.fillStyle = '#b08a5a'; rr(c, x0 - 40, BENCH - 52, sp * (R - 1) + 80, 12, 4); c.fill();
    for (let i = 0; i < R; i++) { const ph = i + 1, x = x0 + i * sp, sel = Math.abs(ph - v) < .5, lift = sel ? -14 : 0; const T = tube(x, BENCH - 8 + lift, 40, 190); drawVessel(c, T, { level: .62, color: fn(ph), alpha: .85, t, wave: 1, lip: false });
      text(c, ph, x, BENCH + 14, { size: 12, w: sel ? 900 : 600, col: sel ? '#0f172a' : '#64748b' }); if (sel) { c.strokeStyle = 'rgba(15,23,42,.55)'; c.lineWidth = 2; rr(c, x - 28, T.top - 6, 56, 218, 10); c.stroke(); } }
    const near = Math.round(v); drip(c, x0 + (near - 1) * sp, 205, 300, t, fn(near < 7 ? 3 : 12), { rate: 1.1 });
    // litmus strips
    if (stage === 0) { const stripY = 188; [['Blue litmus', [60, 90, 220], v < 5], ['Red litmus', [225, 50, 60], v > 8.3]].forEach(([n, col, ch], i) => { const x = 130 + i * 90, cc = n === 'Blue litmus' ? mix([60, 90, 220], [225, 50, 60], inv(8.3, 4.5, v)) : mix([225, 50, 60], [60, 90, 220], inv(6.5, 9, v)); c.fillStyle = rgb(cc); rr(c, x - 7, stripY, 14, 56, 2); c.fill(); text(c, n, x, stripY + 70, { size: 10.5, col: '#334155' }); }); }
  },
  info(s) { const { v, stage } = s; const fn = [IND.litmus, IND.phenolphthalein, IND.methyl, IND.turmeric][stage]; const col = fn(v); const nm = ['', 'phenolphthalein', 'methyl orange', 'turmeric'][stage] || 'litmus';
    const colour = stage === 0 ? (v < 5 ? 'red' : v < 8 ? 'purple' : 'blue') : stage === 1 ? (v < 8.2 ? 'colourless' : v < 10 ? 'pink' : 'deep pink') : stage === 2 ? (v < 3.1 ? 'red' : v < 4.4 ? 'orange' : 'yellow') : (v < 8.2 ? 'yellow' : 'reddish-brown');
    return { obs: `At pH ${fix(v, 1)} the solution is ${pHname(v)}; the indicator shows ${colour}.`, read: [['pH', fix(v, 1), ''], ['[H⁺]', (10 ** -v).toExponential(1), 'mol/L'], ['Nature', pHname(v).split(' ')[0], ''], ['Colour', colour, '']] }; }
};

SCENES_REG.acidbase = {
  stages: ['Acid + metal', 'Acid + carbonate', 'Acid + base'], dur: 11,
  control: { label: 'Reaction progress', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    labBG(c); const { t, u, stage } = s;
    if (stage === 0) { // Zn + HCl -> soap bubbles -> candle
      const V = flask(260, BENCH, 170, 190, 50); shadowE(c, 260, BENCH, 190); cork(c, 260, V.top - 8, 36, 16);
      glassTube(c, [[260, V.top - 4], [260, 150], [650, 150], [650, 330]], { w: 8 });
      drawVessel(c, V, { level: .42, color: [215, 235, 245], alpha: .4, t, inside(c) { for (let i = 0; i < 5; i++) { c.fillStyle = '#8c97a6'; circle(c, 215 + i * 18 + hash(i) * 6, V.bot - 10 - (i % 2) * 8, 8, '#8c97a6', '#5b6575', 1); } bubbleStream(c, 255, V.bot - 14, V.yAt(.42), t, { n: 22, rate: u, spread: 28, speed: 90, r: 3.5 }); } });
      const W2 = beaker(650, BENCH, 190, 150); shadowE(c, 650, BENCH, 210); drawVessel(c, W2, { level: .55, color: [200, 235, 240], alpha: .5, t });
      // soap bubbles forming and rising
      const nb = Math.round(u * 8); for (let i = 0; i < nb; i++) { const ph = ((t * .22 + i / 8) % 1), bx = 650 + Math.sin(ph * 7 + i * 2) * 36 + (i - 4) * 4, by = W2.yAt(.55) - ph * 120, r = 14 + hash(i) * 10; const g = c.createRadialGradient(bx - r * .3, by - r * .3, 1, bx, by, r); g.addColorStop(0, 'rgba(255,255,255,.7)'); g.addColorStop(.8, 'rgba(180,220,255,.15)'); g.addColorStop(1, 'rgba(200,170,255,.5)'); circle(c, bx, by, r, g, 'rgba(160,190,255,.8)', 1.3); }
      if (u > .62) { const f = seg(u, .62, .8); c.save(); c.translate(lerp(840, 700, f), lerp(120, 205, f)); c.rotate(-.35); c.fillStyle = '#fef3c7'; rr(c, -7, 0, 14, 90, 3); c.fill(); flame(c, 0, 0, t, { s: .5, h: 44, yellow: true }); c.restore(); if (u > .78 && u < .93) { glow(c, 680, 250, 90, [255, 190, 90], .9); text(c, 'pop!', 780, 280, { size: 22, w: 900, col: '#c2410c' }); } }
      tag('Zn + dil. HCl', 230, V.yAt(.2), { x: 120, y: 370, col: '#475569' }); tag('Delivery tube', 450, 150, { x: 450, y: 105, col: '#475569' }); tag('Soap solution', 600, W2.yAt(.3), { x: 840, y: 415, col: '#0f4c75' }); if (u > .5) tag('H₂-filled soap bubbles', 668, W2.yAt(.55) - 70, { x: 840, y: 300, col: '#0369a1' });
      text(c, 'Zn + 2HCl → ZnCl₂ + H₂↑   (acid + metal → salt + hydrogen)', 500, 36, { size: 17, w: 700, col: '#334155' });
    } else if (stage === 1) { // Na2CO3 + HCl -> limewater
      const V = flask(260, BENCH, 170, 190, 50); shadowE(c, 260, BENCH, 190); cork(c, 260, V.top - 8, 36, 16); const T = tube(670, BENCH, 74, 230); shadowE(c, 670, BENCH, 130);
      glassTube(c, [[260, V.top - 4], [260, 140], [670, 140], [670, T.yAt(.2) - 6]], { w: 8 });
      drawVessel(c, V, { level: .4, color: [225, 240, 248], alpha: .38, t, inside(c) { powder(c, 260, V.bot - 4, 90, 14, [240, 240, 240], 5); bubbleStream(c, 260, V.bot - 14, V.yAt(.4), t, { n: 22, rate: Math.min(1, u * 1.4) * (1 - seg(u, .9, 1) * .8), spread: 40, speed: 80, r: 3.5 }); } });
      const milk = seg(u, .12, .85); drawVessel(c, T, { level: .6, color: mix([215, 235, 245], [240, 240, 238], milk), alpha: .35 + .55 * milk, t, inside(c) { if (u > .08 && u < .98) bubbleStream(c, 670, T.yAt(.2), T.yAt(.6), t, { n: 14, rate: Math.min(1, u * 1.5), spread: 6, speed: 60, r: 3 }); } });
      tag('Na₂CO₃ + dil. HCl', 225, V.yAt(.25), { x: 110, y: 380, col: '#475569' }); tag(milk > .3 ? 'Limewater turned milky' : 'Limewater (clear)', 670, T.yAt(.5), { x: 840, y: 300, col: milk > .3 ? '#334155' : '#0f4c75' }); tag('CO₂ gas', 450, 140, { x: 450, y: 95, col: '#0369a1' });
      text(c, 'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑ ;  CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O', 500, 36, { size: 16, w: 700, col: '#334155' });
    } else { // titration NaOH + HCl with phenolphthalein
      const V = flask(500, BENCH, 230, 210, 56); shadowE(c, 500, BENCH, 260); const vol = u * 25, eq = 12.5, over = vol > eq; const pink = clamp(1 - seg(vol, eq - 1.2, eq), 0, 1);
      // burette
      const bx = 500, bt = 70, bb = 255; c.fillStyle = '#586478'; rr(c, bx - 80, 60, 160, 8, 3); c.fill(); c.fillStyle = '#7a879b'; c.fillRect(bx + 80, 60, 10, 420);
      const bg = c.createLinearGradient(bx - 14, 0, bx + 14, 0); bg.addColorStop(0, 'rgba(210,230,242,.9)'); bg.addColorStop(.4, 'rgba(255,255,255,.95)'); bg.addColorStop(1, 'rgba(170,200,220,.9)'); c.fillStyle = bg; rr(c, bx - 14, bt, 28, bb - bt, 4); c.fill(); c.strokeStyle = 'rgba(80,120,150,.7)'; c.lineWidth = 2; c.stroke();
      const lvl = lerp(bt + 20, bb - 20, vol / 25 * .9); c.fillStyle = 'rgba(180,215,240,.75)'; c.fillRect(bx - 12, lvl, 24, bb - 14 - lvl); for (let i = 0; i <= 10; i++) { const yy = bt + 18 + i * 17.5; c.strokeStyle = '#334155'; c.lineWidth = i % 5 ? 1 : 1.6; c.beginPath(); c.moveTo(bx + 14, yy); c.lineTo(bx + (i % 5 ? 20 : 26), yy); c.stroke(); if (i % 5 === 0) text(c, i * 5 > 25 ? '' : i * 5 / 1, bx + 38, yy, { size: 9.5, col: '#475569' }); }
      c.fillStyle = '#9ca3af'; rr(c, bx - 4, bb, 8, 22, 2); c.fill(); c.fillStyle = '#334155'; rr(c, bx - 14, bb + 4, 28, 8, 2); c.fill(); poly(c, [[bx - 3, bb + 22], [bx + 3, bb + 22], [bx + .6, bb + 46], [bx - .6, bb + 46]]); c.fillStyle = '#cbd5e1'; c.fill();
      if (u > 0 && u < .998) drip(c, bx, bb + 46, V.yAt(.4) - 4, t, [200, 225, 245], { rate: 3 });
      const col = IND.phenolphthalein(over ? 5 : 9.8); const cc = mix([232, 244, 250], [235, 60, 150], pink);
      drawVessel(c, V, { level: .4 + u * .1, color: cc, alpha: .35 + pink * .55, t, wave: 2.4, marks: [[.3, '50'], [.55, '100']] });
      tag('Conical flask: NaOH + phenolphthalein', 440, V.yAt(.25), { x: 215, y: 345, col: '#475569' }); tag('Burette: HCl', 520, 150, { x: 760, y: 135, col: '#0f4c75' }); tag(pink > .5 ? 'Pink: solution still basic' : 'Colourless: neutralised / acidic', 560, V.yAt(.35), { x: 800, y: 330, col: pink > .5 ? '#be185d' : '#334155' });
      text(c, 'HCl + NaOH → NaCl + H₂O   (acid + base → salt + water, exothermic)', 500, 36, { size: 17, w: 700, col: '#334155' });
    }
  },
  info(s) { const { u, stage } = s; if (stage === 0) return { obs: 'Zinc fizzes in HCl; hydrogen bubbles rise through soap solution and a flame near the bubbles gives a pop.', read: [['H₂ evolved', fix(u * 48, 0), 'mL'], ['Soap bubbles', Math.round(u * 8), ''], ['Splint', u > .78 ? 'pop' : '—', '']] };
    if (stage === 1) return { obs: 'Vigorous fizzing from the carbonate; CO₂ passed into limewater turns it milky white (CaCO₃).', read: [['CO₂ evolved', fix(u * 80, 0), 'mL'], ['Limewater', u < .12 ? 'clear' : u < .85 ? 'cloudy' : 'milky', ''], ['CaCO₃', fix(seg(u, .1, .85) * 0.36, 2), 'g']] };
    const vol = u * 25; return { obs: vol < 11 ? 'The pink colour fades as HCl neutralises NaOH drop by drop.' : vol < 13.5 ? 'End point: one drop turns the solution from pink to colourless — neutral (pH ≈ 7).' : 'Excess acid: solution stays colourless and is now acidic.', read: [['HCl added', fix(vol, 1), 'mL'], ['End point', '12.5', 'mL'], ['pH', fix(vol < 12.4 ? 13 - vol * .35 : vol < 12.6 ? 7 : 7 - (vol - 12.6) * .4, 1), ''], ['Colour', vol < 12.4 ? 'pink' : 'colourless', '']] }; }
};

SCENES_REG.phscale = {
  dur: 10, control: { label: 'Sample pH', min: 0, max: 14, step: .1, value: 7, unit: 'pH', fmt: v => 'pH ' + fix(v, 1) },
  draw(c, s) {
    labBG(c); const { t, v } = s; const T = tube(230, BENCH, 90, 300); shadowE(c, 230, BENCH, 160); const col = IND.universal(v);
    dropper(c, 230, 120, { color: col, squeeze: 0 }); drip(c, 230, 124, T.yAt(.6) - 4, t, col, { rate: .9 });
    drawVessel(c, T, { level: .62, color: col, alpha: .9, t, wave: 1.6 });
    // colour chart
    const bx = 400, by = 125, bw = 540, bh = 54; c.save(); rr(c, bx, by, bw, bh, 12); c.clip(); for (let i = 0; i <= bw; i += 3) { c.fillStyle = rgb(IND.universal(i / bw * 14)); c.fillRect(bx + i, by, 4, bh); } c.restore(); rr(c, bx, by, bw, bh, 12); c.strokeStyle = 'rgba(40,60,90,.5)'; c.lineWidth = 2; c.stroke();
    for (let p = 0; p <= 14; p += 1) { const x = bx + p / 14 * bw; line(c, x, by + bh, x, by + bh + 6, '#475569', 1.2); text(c, p, x, by + bh + 17, { size: 11, col: '#475569' }); }
    const mx = bx + v / 14 * bw; c.fillStyle = '#0f172a'; poly(c, [[mx, by + bh + 2], [mx - 7, by + bh + 14], [mx + 7, by + bh + 14]]); c.fill(); c.strokeStyle = '#fff'; c.lineWidth = 3; c.beginPath(); c.moveTo(mx, by - 6); c.lineTo(mx, by + bh); c.stroke();
    // common substances
    const items = [[0, 'HCl'], [2, 'Lemon'], [3, 'Vinegar'], [4.5, 'Tomato'], [6.5, 'Milk'], [7, 'Water'], [7.4, 'Blood'], [8.3, 'Baking soda'], [10.5, 'Mg(OH)₂'], [11.5, 'Ammonia'], [14, 'NaOH']];
    items.forEach(([p, n], i) => { const x = bx + p / 14 * bw, hi = Math.abs(p - v) < .6; tag(n, x, by + bh + 6, { x: bx + p / 14 * bw, y: by + bh + 40 + (i % 2) * 28, col: hi ? '#0f172a' : '#64748b', size: 11, dot: false }); });
    // H+ / OH- particle pools
    const px = 430, py = 290, pw = 520, ph_ = 150; rr(c, px, py, pw, ph_, 14); c.fillStyle = 'rgba(255,255,255,.65)'; c.fill(); c.strokeStyle = 'rgba(60,90,130,.35)'; c.stroke(); text(c, 'Ions in 1 litre (relative amounts, log scale)', px + pw / 2, py + 16, { size: 12, w: 700, col: '#475569' });
    const nH = Math.round(clamp(14 - v, 0, 14) * 2.2), nOH = Math.round(clamp(v, 0, 14) * 2.2); for (let i = 0; i < nH; i++) { const x = px + 14 + (i * 41.3) % (pw / 2 - 28) + Math.sin(t * 1.4 + i) * 4, y = py + 36 + ((i * 29.7) % (ph_ - 56)) + Math.cos(t * 1.2 + i) * 4; circle(c, x, y, 7, '#ef4444', '#991b1b', 1); text(c, '+', x, y, { size: 10, col: '#fff', w: 900 }); }
    for (let i = 0; i < nOH; i++) { const x = px + pw / 2 + 14 + (i * 37.1) % (pw / 2 - 28) + Math.sin(t * 1.3 + i) * 4, y = py + 36 + ((i * 31.3) % (ph_ - 56)) + Math.cos(t * 1.1 + i) * 4; circle(c, x, y, 7, '#3b82f6', '#1e3a8a', 1); text(c, '−', x, y, { size: 10, col: '#fff', w: 900 }); }
    line(c, px + pw / 2, py + 28, px + pw / 2, py + ph_ - 8, 'rgba(60,90,130,.35)', 1.2, [4, 4]); text(c, 'H₃O⁺', px + pw / 4, py + ph_ - 8, { size: 12, w: 800, col: '#b91c1c' }); text(c, 'OH⁻', px + pw * .75, py + ph_ - 8, { size: 12, w: 800, col: '#1d4ed8' });
    text(c, 'pH = −log₁₀ [H₃O⁺]', 690, 450, { size: 16, w: 800, col: '#334155' }); tag('Universal indicator colour', 230, T.yAt(.4), { x: 70, y: 300, col: '#475569', anchor: 'l' });
  },
  info(s) { const v = s.v; return { obs: `pH ${fix(v, 1)} → universal indicator is ${v < 3 ? 'red / orange: strongly acidic' : v < 6.5 ? 'orange-yellow: weakly acidic' : v < 7.5 ? 'green: neutral' : v < 11 ? 'blue: weakly basic' : 'violet: strongly basic'}. Each pH step changes [H⁺] ten-fold.`, read: [['pH', fix(v, 1), ''], ['[H₃O⁺]', (10 ** -v).toExponential(1), 'M'], ['[OH⁻]', (10 ** (v - 14)).toExponential(1), 'M'], ['Nature', pHname(v).split(' ')[0], '']] }; }
};

SCENES_REG.powders = {
  stages: ['Bleaching powder + HCl', 'Baking soda heated', 'Washing soda + HCl'], dur: 10,
  control: { label: 'Test progress', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    labBG(c); const { t, u, stage } = s;
    if (stage === 0) { const V = tube(420, BENCH, 80, 270); shadowE(c, 420, BENCH, 150); drawVessel(c, V, { level: .3, color: [225, 240, 248], alpha: .35, t, inside(c) { powder(c, 420, V.bot - 4, 56, 18 * (1 - u * .5), [240, 240, 232], 2); if (u > 0) bubbleStream(c, 420, V.bot - 20, V.yAt(.3), t, { n: 14, rate: u, spread: 18, speed: 50, r: 2.6 }); } });
      if (u > .03) { c.save(); c.globalAlpha = Math.min(.55, u); const g = c.createLinearGradient(0, V.top, 0, V.yAt(.3)); g.addColorStop(0, 'rgba(190,225,70,.0)'); g.addColorStop(1, 'rgba(190,225,70,.65)'); c.fillStyle = g; c.fillRect(V.span(V.yAt(.5))[0] + 4, V.top + 20, 68, V.yAt(.3) - V.top - 20); c.restore(); for (let i = 0; i < 8; i++) { const q = (t * .25 + i / 8) % 1; c.fillStyle = `rgba(200,225,90,${(1 - q) * Math.min(.5, u)})`; c.beginPath(); c.arc(420 + Math.sin(q * 8 + i) * 18 * q, V.top - q * 90, 8 + q * 18, 0, TAU); c.fill(); } }
      // moist blue litmus held at mouth
      const lc = mix([60, 90, 220], [245, 245, 245], seg(u, .3, .9)); c.save(); c.translate(540, V.top - 6); c.rotate(.2); c.fillStyle = '#9ca3af'; rr(c, -3, -60, 6, 120, 2); c.fill(); c.fillStyle = rgb(lc); rr(c, -9, -44, 18, 54, 2); c.fill(); c.strokeStyle = 'rgba(0,0,0,.2)'; c.stroke(); c.restore();
      tag('CaOCl₂ + dil. HCl', 400, V.yAt(.15), { x: 235, y: 380, col: '#475569' }); tag('Cl₂ — greenish-yellow, pungent', 420, V.top + 50, { x: 215, y: 190, col: '#4d7c0f' }); tag(u > .5 ? 'Moist blue litmus → bleached white' : 'Moist blue litmus paper', 545, V.top - 20, { x: 770, y: 150, col: '#334155' });
      text(c, 'CaOCl₂ + 2HCl → CaCl₂ + H₂O + Cl₂↑  — chlorine bleaches by oxidation', 500, 36, { size: 16, w: 700, col: '#334155' });
    } else if (stage === 1) { const V = tube(330, BENCH - 100, 70, 200), T = tube(700, BENCH, 74, 220); c.save(); c.translate(330, BENCH - 100); c.rotate(-.6); c.translate(-330, -(BENCH - 100));
      drawVessel(c, V, { level: .18, color: [255, 255, 255], alpha: 0, t, inside(c) { powder(c, 330, V.bot - 3, 50, 14 * (1 - u * .3), [250, 250, 250], 9); for (let i = 0; i < 6; i++) { const q = (t * .5 + i / 6) % 1; circle(c, 316 + hash(i) * 28, V.top + 30 + q * 50, 2.4, 'rgba(120,180,255,.7)'); } } }); c.restore();
      glassTube(c, [[360, 245], [430, 205], [700, 205], [700, T.yAt(.2)]], { w: 8 }); burner(c, 262, BENCH, t, true, { s: .85, h: 66 }); shadowE(c, 700, BENCH, 130); const milk = seg(u, .1, .85);
      drawVessel(c, T, { level: .6, color: mix([215, 235, 245], [240, 240, 238], milk), alpha: .35 + .55 * milk, t, inside(c) { if (u > .06 && u < .98) bubbleStream(c, 700, T.yAt(.2), T.yAt(.6), t, { n: 12, rate: Math.min(1, u * 2), spread: 6, speed: 60, r: 3 }); } });
      circle(c, 400, 200, 3, 'rgba(120,180,255,.9)'); for (let i = 0; i < 5; i++) { const w = u * (i + 1) * .5; if (w > .3) circle(c, 270 + i * 12, 250 + i * 18, 2.2, 'rgba(120,180,255,.8)'); } tag('NaHCO₃ heated', 300, 283, { x: 160, y: 190, col: '#475569' }); tag('Water droplets on cooler wall', 280, 250, { x: 140, y: 330, col: '#0369a1' }); tag(milk > .3 ? 'Limewater: milky (CO₂)' : 'Limewater', 700, T.yAt(.5), { x: 860, y: 300, col: '#334155' });
      text(c, '2NaHCO₃ →(heat) Na₂CO₃ + H₂O + CO₂↑   (baking soda decomposes)', 500, 36, { size: 16, w: 700, col: '#334155' });
    } else { const V = tube(380, BENCH, 80, 270); shadowE(c, 380, BENCH, 150);
      drawVessel(c, V, { level: .4, color: [225, 240, 248], alpha: .35, t, inside(c) { for (let i = 0; i < 6; i++) { c.save(); c.translate(360 + (i % 3) * 22, V.bot - 14 - Math.floor(i / 3) * 20); c.rotate(hash(i) * 1); c.fillStyle = `rgba(245,248,252,${.85 - u * .3})`; rr(c, -9, -7, 18, 14, 2); c.fill(); c.strokeStyle = 'rgba(100,120,150,.5)'; c.stroke(); c.restore(); } bubbleStream(c, 380, V.bot - 18, V.yAt(.4), t, { n: 22, rate: u, spread: 24, speed: 80, r: 3.2 }); } });
      const col = IND.universal(lerp(11.2, 6.8, seg(u, .2, .9)));
      const U = tube(640, BENCH, 80, 200); shadowE(c, 640, BENCH, 140); drawVessel(c, U, { level: .55, color: col, alpha: .85, t });
      tag('Washing soda (Na₂CO₃·10H₂O) + HCl', 360, V.yAt(.15), { x: 200, y: 380, col: '#475569' }); tag(`Universal indicator: pH ${fix(lerp(11.2, 6.8, seg(u, .2, .9)), 1)}`, 640, U.yAt(.35), { x: 810, y: 330, col: '#334155' }); tag('CO₂ effervescence', 380, V.top + 20, { x: 210, y: 180, col: '#0369a1' });
      text(c, 'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑   (strongly basic salt; used to soften water)', 500, 36, { size: 16, w: 700, col: '#334155' });
    }
  },
  info(s) { const { u, stage } = s; return [{ obs: 'Dilute HCl on bleaching powder releases greenish-yellow chlorine; it bleaches moist litmus paper.', read: [['Cl₂ released', fix(u * 100, 0), '%'], ['Litmus', u > .5 ? 'bleached' : 'blue', ''], ['Smell', 'pungent', '']] }, { obs: 'Heating baking soda releases CO₂ (limewater turns milky) and water droplets collect in the cooler part of the tube.', read: [['Decomposed', fix(u * 100, 0), '%'], ['Limewater', u < .1 ? 'clear' : 'milky', ''], ['pH of residue', '≈ 11', '']] }, { obs: 'Washing soda fizzes with HCl; its own solution is strongly basic (pH ≈ 11) with universal indicator.', read: [['CO₂ evolved', fix(u * 100, 0), '%'], ['pH of mixture', fix(lerp(11.2, 6.8, seg(u, .2, .9)), 1), ''], ['Nature', 'basic salt', '']] }][stage]; }
};

SCENES_REG.hydration = {
  stages: ['Heating hydrated CuSO₄', 'Adding water back'], dur: 10,
  control: { label: 'Progress', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    labBG(c); const { t, u, stage } = s; const V = tube(480, BENCH - 70, 84, 250); const loss = stage === 0 ? seg(u, .08, .85) : 1 - seg(u, .1, .75);
    c.save(); c.translate(480, BENCH - 70); c.rotate(-.18); c.translate(-480, -(BENCH - 70)); const cc = mix([30, 100, 200], [246, 246, 244], loss);
    drawVessel(c, V, { level: .13, color: [255, 255, 255], alpha: 0, t, inside(c) { for (let i = 0; i < 26; i++) { const x = 460 + hash(i) * 40, y = V.bot - 5 - hash(i * 3) * 16; c.save(); c.translate(x, y); c.rotate(hash(i * 2) * 3); c.fillStyle = rgb(shade(cc, (hash(i * 5) - .5) * .35)); c.beginPath(); c.moveTo(-5, 0); c.lineTo(0, -5.5); c.lineTo(5.5, -1); c.lineTo(3.5, 5); c.lineTo(-3, 4.5); c.closePath(); c.fill(); c.strokeStyle = 'rgba(255,255,255,.4)'; c.lineWidth = .8; c.stroke(); c.restore(); } },
      front(c) { if (stage === 0 && loss > .05) for (let i = 0; i < 14; i++) { const x = V.span(V.top + 70)[0] + 4 + hash(i) * 8, y = V.top + 20 + hash(i * 3) * 80; circle(c, x + (i % 2) * 66, y, 2.2 + hash(i) * 1.5, 'rgba(180,225,255,.9)', 'rgba(255,255,255,.9)', 1); } } }); c.restore();
    if (stage === 0) { burner(c, 400, BENCH, t, true, { s: .9, h: 70 }); if (loss > .05) steam(c, 585, 215, t, { n: 6, h: 90, a: .3 * loss }); tag(loss < .5 ? 'CuSO₄·5H₂O — blue crystals' : 'Anhydrous CuSO₄ — white', 470, BENCH - 82, { x: 750, y: 410, col: loss < .5 ? '#1d4ed8' : '#475569' }); if (loss > .15) tag('Water of crystallisation condenses', 535, 180, { x: 760, y: 215, col: '#0369a1' }); }
    else { if (u > .05 && u < .85) { drip(c, 475, 160, BENCH - 110, t, [190, 225, 250], { rate: 1.8 }); dropper(c, 475, 158, { color: [190, 225, 250], squeeze: .4 }); } else dropper(c, 475, 158, { color: [190, 225, 250] }); if (u > .2 && u < .8) steam(c, 520, BENCH - 110, t, { n: 4, h: 50, a: .25 }); tag(loss > .5 ? 'Blue colour restored' : 'White anhydrous CuSO₄', 475, BENCH - 90, { x: 760, y: 410, col: loss > .5 ? '#1d4ed8' : '#475569' }); tag('Few drops of water', 475, 158, { x: 700, y: 140, col: '#0f4c75' }); }
    text(c, stage === 0 ? 'CuSO₄·5H₂O →(heat) CuSO₄ + 5H₂O   — 5 water molecules per formula unit' : 'CuSO₄ + 5H₂O → CuSO₄·5H₂O  — hydration is exothermic; blue returns', 500, 36, { size: 16, w: 700, col: '#334155' });
  },
  info(s) { const { u, stage } = s; const l = stage === 0 ? seg(u, .08, .85) : 1 - seg(u, .1, .75); return { obs: stage === 0 ? 'On heating, blue crystals lose their water of crystallisation, turn white and water droplets collect on the cooler walls.' : 'A few drops of water restore the blue colour and the tube becomes warm — the change is reversible.', read: [['Water retained', fix((1 - l) * 5, 1), 'H₂O / unit'], ['Colour', l < .35 ? 'blue' : l < .75 ? 'pale' : 'white', ''], ['Mass of solid', fix(25 - l * 9, 1), 'g'], ['Formula', l < .5 ? 'CuSO₄·5H₂O' : 'CuSO₄', '']] }; },
  micro(c, s) { const { t, u, stage } = s, B = micro(c, W - 346, 16, 330, 230, 'CRYSTAL LATTICE'); c.save(); rr(c, B.x, B.y, B.w, B.h, 14); c.clip(); const l = stage === 0 ? seg(u, .08, .85) : 1 - seg(u, .1, .75);
    for (let i = 0; i < 6; i++) { const x = B.x + 50 + (i % 3) * 100, y = B.y + 80 + Math.floor(i / 3) * 90; ion(c, x, y, 18, [60, 130, 220], 'Cu²⁺', t, i, 1); for (let k = 0; k < 5; k++) { const a = k / 5 * TAU + .3; const stay = hash(i * 7 + k) > l; const d = stay ? 31 : 31 + (l * 70 + 20) * (.6 + hash(k + i)); ion(c, x + Math.cos(a) * d, y + Math.sin(a) * d, 7.5, [239, 83, 80], '', t, i * 5 + k, stay ? 1.2 : 5); } }
    text(c, 'Each Cu²⁺ is surrounded by 5 H₂O: heat drives them out', B.x + B.w / 2, B.y + B.h - 12, { size: 10.5, col: '#cbd5e1' }); c.restore(); }
};

SCENES_REG.sulphurdioxide = {
  stages: ['Burning sulphur', 'SO₂ in water (acid)', 'SO₂ as reducing agent'], dur: 10,
  control: { label: 'Gas delivery', min: 0, max: 100, step: 1, value: 0, unit: '%' },
  draw(c, s) {
    labBG(c); const { t, u, stage } = s;
    if (stage === 0) { const J = jar(500, BENCH, 190, 300); shadowE(c, 500, BENCH, 230); drawVessel(c, J, { level: 0, t, back(c) { const g = c.createLinearGradient(0, J.top, 0, J.bot); g.addColorStop(0, 'rgba(235,235,225,0)'); g.addColorStop(1, `rgba(235,235,215,${.5 * u})`); c.fillStyle = g; c.fillRect(J.pts[0][0], J.top, 190, J.h); }, inside(c) { for (let i = 0; i < 12; i++) { const q = (t * .2 + i / 12) % 1; c.fillStyle = `rgba(240,240,225,${(1 - q) * .55 * Math.min(1, u * 2)})`; c.beginPath(); c.arc(480 + Math.sin(q * 6 + i) * 40, J.bot - 40 - q * 190, 10 + q * 22, 0, TAU); c.fill(); } } });
      // deflagrating spoon
      c.strokeStyle = '#64748b'; c.lineWidth = 5; c.beginPath(); c.moveTo(500, 90); c.lineTo(500, 345); c.stroke(); c.fillStyle = '#94a3b8'; c.beginPath(); c.ellipse(500, 360, 30, 12, 0, 0, TAU); c.fill(); c.fillStyle = '#facc15'; c.beginPath(); c.ellipse(500, 356, 24, 7, 0, 0, TAU); c.fill(); c.fillStyle = '#334155'; rr(c, 396, 78, 208, 14, 5); c.fill();
      if (u > .02) { const s_ = Math.min(1, u * 3); c.save(); c.translate(500, 354); const g = c.createLinearGradient(0, 0, 0, -50); g.addColorStop(0, `rgba(70,110,255,${.95 * s_})`); g.addColorStop(1, 'rgba(150,190,255,0)'); c.fillStyle = g; c.beginPath(); c.moveTo(-14, 0); c.bezierCurveTo(-18, -22, -4 + Math.sin(t * 20) * 3, -36, Math.sin(t * 17) * 3, -52 * s_); c.bezierCurveTo(6, -36, 18, -22, 14, 0); c.fill(); glow(c, 0, -20, 60, [90, 120, 255], .35 * s_); c.restore(); }
      tag('Burning sulphur: pale-blue flame', 505, 335, { x: 770, y: 300, col: '#1d4ed8' }); tag('SO₂: colourless, choking smell', 500, 215, { x: 230, y: 215, col: '#475569' }); tag('Deflagrating spoon', 500, 140, { x: 770, y: 110, col: '#475569' });
      text(c, 'S + O₂ → SO₂  — acidic oxide of a non-metal', 500, 36, { size: 17, w: 700, col: '#334155' });
    } else if (stage === 1) { const V = beaker(500, BENCH, 250, 200); shadowE(c, 500, BENCH, 280); const ph = lerp(7, 2, seg(u, .1, .9)); const col = IND.universal(ph);
      drawVessel(c, V, { level: .62, color: col, alpha: .85, t, inside(c) { if (u > .05) bubbleStream(c, 500, V.bot - 14, V.yAt(.62), t, { n: 18, rate: u, spread: 28, speed: 70, r: 3 }); } }); glassTube(c, [[740, 110], [500, 110], [500, V.bot - 20]], { w: 8 }); text(c, 'SO₂ in', 760, 110, { size: 13, col: '#475569', align: 'left' });
      const pw = 700, ptx = 220; tag(`Universal indicator: pH ${fix(ph, 1)}`, 380, V.yAt(.4), { x: 215, y: 280, col: '#334155' }); tag('H₂SO₃ (sulphurous acid) forms', 600, V.yAt(.5), { x: 800, y: 320, col: '#b45309' });
      text(c, 'SO₂ + H₂O ⇌ H₂SO₃  — the solution turns acidic', 500, 36, { size: 17, w: 700, col: '#334155' });
    } else { const V = tube(420, BENCH, 84, 270), V2 = tube(640, BENCH, 84, 270); shadowE(c, 420, BENCH, 150); shadowE(c, 640, BENCH, 150); const g = seg(u, .12, .85);
      drawVessel(c, V, { level: .55, color: mix([245, 140, 30], [60, 150, 90], g), alpha: .85, t, inside(c) { if (u > .05) bubbleStream(c, 420, V.bot - 14, V.yAt(.55), t, { n: 12, rate: u, spread: 22, speed: 60, r: 3 }); } });
      drawVessel(c, V2, { level: .55, color: mix([160, 60, 190], [235, 235, 240], g), alpha: .85, t, inside(c) { if (u > .05) bubbleStream(c, 640, V2.bot - 14, V2.yAt(.55), t, { n: 12, rate: u, spread: 22, speed: 60, r: 3, seed: 7 }); } });
      tag('Acidified K₂Cr₂O₇: orange → green', 420, V.yAt(.35), { x: 190, y: 300, col: '#15803d' }); tag('Acidified KMnO₄: purple → colourless', 640, V2.yAt(.35), { x: 830, y: 300, col: '#6d28d9' });
      text(c, 'SO₂ reduces Cr₂O₇²⁻ (orange → green) and MnO₄⁻ (purple → colourless)', 500, 36, { size: 16, w: 700, col: '#334155' });
    }
  },
  info(s) { const { u, stage } = s; return [{ obs: 'Sulphur burns with a pale-blue flame, giving colourless, choking SO₂ gas that fills the jar.', read: [['S burned', fix(u * 100, 0), '%'], ['SO₂ in jar', fix(u * 24, 1), 'mL'], ['Smell', 'choking', '']] }, { obs: 'SO₂ dissolves in water to form sulphurous acid — universal indicator shifts from green to red.', read: [['SO₂ dissolved', fix(u * 100, 0), '%'], ['pH', fix(lerp(7, 2, seg(u, .1, .9)), 1), ''], ['Acid formed', 'H₂SO₃', '']] }, { obs: 'SO₂ is a reducing agent: orange dichromate turns green and purple permanganate is decolourised.', read: [['Reduction', fix(seg(u, .12, .85) * 100, 0), '%'], ['K₂Cr₂O₇', seg(u, .12, .85) < .5 ? 'orange' : 'green', ''], ['KMnO₄', seg(u, .12, .85) < .5 ? 'purple' : 'colourless', '']] }][stage]; }
};
