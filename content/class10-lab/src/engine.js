'use strict';
/* ============================================================
   Class 10 Science Virtual Lab — drawing engine
   Logical canvas: 1000 x 560. Every scene is a pure function of
   (time t, normalised control u, raw control v, stage) so that the
   timeline can be scrubbed, replayed and recorded deterministically.
   ============================================================ */
const W = 1000, H = 560, BENCH = 470, TAU = Math.PI * 2;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const lerp = (a, b, t) => a + (b - a) * t;
const inv = (a, b, x) => clamp((x - a) / (b - a), 0, 1);       // inverse-lerp, clamped
const sm = t => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
const easeOut = t => 1 - Math.pow(1 - clamp(t, 0, 1), 3);
const easeIO = t => { t = clamp(t, 0, 1); return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
const seg = (u, a, b) => sm(inv(a, b, u));                       // smooth ramp of u between a and b
const hash = n => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
const rad = d => d * Math.PI / 180;
const fix = (x, d = 1) => (Math.round(x * 10 ** d) / 10 ** d).toFixed(d);
const rgb = (a, al = 1) => `rgba(${a[0] | 0},${a[1] | 0},${a[2] | 0},${al})`;
const mix = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
const shade = (a, k) => k >= 0 ? mix(a, [255, 255, 255], k) : mix(a, [0, 0, 0], -k);

/* ---------- label system: tags are collected, de-overlapped, then drawn on top ---------- */
let TAGS = [];
function tag(text, px, py, o = {}) { TAGS.push({ text, px, py, x: o.x ?? px + (o.dx ?? 40), y: o.y ?? py + (o.dy ?? -40), col: o.col || '#0f4c75', dot: o.dot !== false, line: o.line !== false, size: o.size || 12.5, anchor: o.anchor || 'c', fixed: !!o.fixed }); }
function flushTags(c) {
  c.save(); c.font = '600 12.5px system-ui,Segoe UI,Arial'; c.textBaseline = 'middle';
  for (const t of TAGS) { c.font = `600 ${t.size}px system-ui,Segoe UI,Arial`; t.w = c.measureText(t.text).width + 18; t.h = t.size + 11; }
  for (let it = 0; it < 40; it++) for (let i = 0; i < TAGS.length; i++) for (let j = i + 1; j < TAGS.length; j++) {
    const a = TAGS[i], b = TAGS[j];
    const ax = a.anchor === 'l' ? a.x + a.w / 2 : a.anchor === 'r' ? a.x - a.w / 2 : a.x, bx = b.anchor === 'l' ? b.x + b.w / 2 : b.anchor === 'r' ? b.x - b.w / 2 : b.x;
    const ox = (a.w + b.w) / 2 + 4 - Math.abs(ax - bx), oy = (a.h + b.h) / 2 + 3 - Math.abs(a.y - b.y);
    if (ox > 0 && oy > 0) { const d = oy / 2 + .5; if (!a.fixed && !b.fixed) { if (a.y <= b.y) { a.y -= d; b.y += d; } else { a.y += d; b.y -= d; } } else if (a.fixed) b.y += (b.y >= a.y ? 1 : -1) * oy; else a.y += (a.y >= b.y ? 1 : -1) * oy; }
  }
  const lum = col => { const m = /^#?([0-9a-f]{6})$/i.exec(col); if (!m) return 0; const n = parseInt(m[1], 16); return (.299 * (n >> 16) + .587 * ((n >> 8) & 255) + .114 * (n & 255)) / 255; };
  for (const t of TAGS) if (lum(t.col) > .6) t.col = '#1e293b';
  for (const t of TAGS) {
    let cx = t.anchor === 'l' ? t.x + t.w / 2 : t.anchor === 'r' ? t.x - t.w / 2 : t.x;
    cx = clamp(cx, t.w / 2 + 6, W - t.w / 2 - 6); const cy = clamp(t.y, t.h / 2 + 6, H - t.h / 2 - 6);
    if (t.line) {
      const ex = clamp(t.px, cx - t.w / 2, cx + t.w / 2), ey = clamp(t.py, cy - t.h / 2, cy + t.h / 2);
      c.strokeStyle = t.col; c.globalAlpha = .55; c.lineWidth = 1.3; c.beginPath(); c.moveTo(ex, ey); c.lineTo(t.px, t.py); c.stroke(); c.globalAlpha = 1;
      if (t.dot) { c.fillStyle = t.col; c.beginPath(); c.arc(t.px, t.py, 3.2, 0, TAU); c.fill(); c.strokeStyle = '#fff'; c.lineWidth = 1.2; c.stroke(); }
    }
    c.shadowColor = 'rgba(15,27,45,.18)'; c.shadowBlur = 8; c.shadowOffsetY = 2;
    rr(c, cx - t.w / 2, cy - t.h / 2, t.w, t.h, t.h / 2); c.fillStyle = 'rgba(255,255,255,.96)'; c.fill();
    c.shadowColor = 'transparent'; c.lineWidth = 1.2; c.strokeStyle = t.col; c.globalAlpha = .65; c.stroke(); c.globalAlpha = 1;
    c.fillStyle = t.col; c.textAlign = 'center'; c.font = `600 ${t.size}px system-ui,Segoe UI,Arial`; c.fillText(t.text, cx, cy + .5);
  }
  c.restore(); TAGS = [];
}

/* ---------- primitives ---------- */
function rr(c, x, y, w, h, r) { r = Math.min(r, w / 2, h / 2); c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
function circle(c, x, y, r, fill, stroke, lw = 1) { c.beginPath(); c.arc(x, y, r, 0, TAU); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); } }
function line(c, x1, y1, x2, y2, col, lw = 1.5, dash) { c.save(); c.strokeStyle = col; c.lineWidth = lw; if (dash) c.setLineDash(dash); c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke(); c.restore(); }
function text(c, s, x, y, o = {}) { c.save(); c.font = `${o.w || 600} ${o.size || 14}px ${o.font || 'system-ui,Segoe UI,Arial'}`; c.fillStyle = o.col || '#1f2a44'; c.textAlign = o.align || 'center'; c.textBaseline = o.base || 'middle'; if (o.alpha != null) c.globalAlpha = o.alpha; c.fillText(s, x, y); c.restore(); }
function arrow(c, x1, y1, x2, y2, col = '#111', lw = 2, head = 9, dash) {
  const a = Math.atan2(y2 - y1, x2 - x1); c.save(); c.strokeStyle = col; c.fillStyle = col; c.lineWidth = lw; if (dash) c.setLineDash(dash);
  c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2 - Math.cos(a) * head * .6, y2 - Math.sin(a) * head * .6); c.stroke(); c.setLineDash([]);
  c.beginPath(); c.moveTo(x2, y2); c.lineTo(x2 - head * Math.cos(a - .38), y2 - head * Math.sin(a - .38)); c.lineTo(x2 - head * Math.cos(a + .38), y2 - head * Math.sin(a + .38)); c.closePath(); c.fill(); c.restore();
}
function glow(c, x, y, r, col, a = .5) { const g = c.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, rgb(col, a)); g.addColorStop(1, rgb(col, 0)); c.fillStyle = g; c.fillRect(x - r, y - r, r * 2, r * 2); }
function ell(c, x, y, rx, ry, fill, stroke, lw = 1, rot = 0) { c.beginPath(); c.ellipse(x, y, Math.max(.01, rx), Math.max(.01, ry), rot, 0, TAU); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); } }
function shadowE(c, x, y, w, a = .22) { const g = c.createRadialGradient(x, y, 0, x, y, w / 2); g.addColorStop(0, `rgba(30,45,70,${a})`); g.addColorStop(1, 'rgba(30,45,70,0)'); c.save(); c.translate(x, y); c.scale(1, .18); c.translate(-x, -y); c.fillStyle = g; c.beginPath(); c.arc(x, y, w / 2, 0, TAU); c.fill(); c.restore(); }
function poly(c, pts, close = true) { c.beginPath(); pts.forEach((p, i) => i ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])); if (close) c.closePath(); }

/* ---------- backgrounds ---------- */
function labBG(c, o = {}) {
  const by = o.bench ?? BENCH;
  const g = c.createLinearGradient(0, 0, 0, by); g.addColorStop(0, o.top || '#f5f8fc'); g.addColorStop(1, o.bot || '#dfe8f2'); c.fillStyle = g; c.fillRect(0, 0, W, by);
  c.strokeStyle = 'rgba(70,110,150,.07)'; c.lineWidth = 1; c.beginPath();
  for (let x = 0; x <= W; x += 50) { c.moveTo(x + .5, 0); c.lineTo(x + .5, by); } for (let y = 0; y < by; y += 50) { c.moveTo(0, y + .5); c.lineTo(W, y + .5); } c.stroke();
  const lg = c.createRadialGradient(W * .8, -40, 10, W * .8, -40, 520); lg.addColorStop(0, 'rgba(255,255,240,.55)'); lg.addColorStop(1, 'rgba(255,255,240,0)'); c.fillStyle = lg; c.fillRect(0, 0, W, by);
  if (o.noBench) return;
  const b = c.createLinearGradient(0, by, 0, H); b.addColorStop(0, '#f0f3f7'); b.addColorStop(.05, '#c9d3df'); b.addColorStop(.4, '#aebccd'); b.addColorStop(1, '#8c9db3'); c.fillStyle = b; c.fillRect(0, by, W, H - by);
  c.fillStyle = 'rgba(255,255,255,.75)'; c.fillRect(0, by, W, 2.5); c.fillStyle = 'rgba(40,60,90,.18)'; c.fillRect(0, by + 2.5, W, 4);
}
function darkBG(c, o = {}) { const g = c.createRadialGradient(W / 2, H / 2, 40, W / 2, H / 2, 640); g.addColorStop(0, o.a || '#16243d'); g.addColorStop(1, o.b || '#080f1d'); c.fillStyle = g; c.fillRect(0, 0, W, H); c.strokeStyle = 'rgba(120,170,230,.06)'; c.lineWidth = 1; c.beginPath(); for (let x = 0; x <= W; x += 40) { c.moveTo(x + .5, 0); c.lineTo(x + .5, H); } for (let y = 0; y <= H; y += 40) { c.moveTo(0, y + .5); c.lineTo(W, y + .5); } c.stroke(); }
function skyBG(c, o = {}) { const g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, o.top || '#8ed0f7'); g.addColorStop(.7, o.mid || '#dff3fd'); g.addColorStop(1, o.bot || '#cfe9bd'); c.fillStyle = g; c.fillRect(0, 0, W, H); }

/* ---------- vessels: polygon interiors, shared liquid/glass pipeline ---------- */
function arcPts(cx, cy, r, a0, a1, n = 10) { const p = []; for (let i = 0; i <= n; i++) { const a = lerp(a0, a1, i / n); p.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); } return p; }
function makeVessel(pts, top, bot) {
  const V = { pts, top, bot, h: bot - top };
  V.span = y => { const xs = []; for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; if ((a[1] <= y && b[1] > y) || (b[1] <= y && a[1] > y)) xs.push(a[0] + (y - a[1]) / (b[1] - a[1]) * (b[0] - a[0])); } if (!xs.length) return [pts[0][0], pts[0][0]]; return [Math.min(...xs), Math.max(...xs)]; };
  V.yAt = l => bot - clamp(l, 0, 1) * V.h; return V;
}
function beaker(x, y, w, h) { const r = 12, l = x - w / 2 + 5, rt = x + w / 2 - 5, t = y - h, b = y - 5; return makeVessel([[l, t], [l, b - r], ...arcPts(l + r, b - r, r, Math.PI, Math.PI / 2, 6), ...arcPts(rt - r, b - r, r, Math.PI / 2, 0, 6), [rt, t]], t, b); }
function flask(x, y, w, h, nw) { nw = nw || w * .3; const l = x - w / 2 + 5, rt = x + w / 2 - 5, t = y - h, b = y - 5, sh = y - h * .6, r = 14; return makeVessel([[x - nw / 2 + 3, t], [x - nw / 2 + 3, sh - 10], [l + 4, b - r - 6], ...arcPts(l + r, b - r, r, Math.PI * 1.08, Math.PI / 2, 6), ...arcPts(rt - r, b - r, r, Math.PI / 2, -Math.PI * .08, 6), [x + nw / 2 - 3, sh - 10], [x + nw / 2 - 3, t]], t, b); }
function tube(x, y, w, h) { const r = w / 2 - 3, l = x - w / 2 + 3, rt = x + w / 2 - 3, t = y - h, b = y - 3; return makeVessel([[l, t], [l, b - r], ...arcPts(x, b - r, r, Math.PI, 0, 14).reverse().reverse(), [rt, t]].map(p => p), t, b); }
function jar(x, y, w, h) { const l = x - w / 2 + 4, rt = x + w / 2 - 4, t = y - h, b = y - 4; return makeVessel([[l, t], [l, b - 6], [l + 6, b], [rt - 6, b], [rt, b - 6], [rt, t]], t, b); }
function dish(x, y, w, h) { const l = x - w / 2, rt = x + w / 2; return makeVessel([[l, y - h], [l + 8, y - 3], [rt - 8, y - 3], [rt, y - h]], y - h, y - 3); }

/* draw vessel; o: level(0..1) color([r,g,b]) alpha t wave inside(c,info) marks front(c,info) lip */
function drawVessel(c, V, o = {}) {
  const lvl = clamp(o.level ?? 0, 0, 1), ly = V.yAt(lvl), t = o.t || 0, wave = o.wave ?? 2.2, col = o.color || [150, 205, 235], al = o.alpha ?? .55;
  c.save(); poly(c, V.pts); c.fillStyle = 'rgba(205,228,242,.20)'; c.fill();
  c.save(); poly(c, V.pts); c.clip();
  if (o.back) o.back(c, { ly, V });
  if (lvl > 0.001) {
    const [x0] = V.span(ly + 1), [, x1] = V.span(ly + 1); const L = Math.min(x0, V.span(V.bot - 2)[0]) - 8, R = Math.max(x1, V.span(V.bot - 2)[1]) + 8;
    const g = c.createLinearGradient(0, ly, 0, V.bot); g.addColorStop(0, rgb(shade(col, .15), al * .85)); g.addColorStop(1, rgb(shade(col, -.18), Math.min(1, al + .22)));
    c.fillStyle = g; c.beginPath(); c.moveTo(L, V.bot + 4); c.lineTo(L, ly);
    for (let xx = L; xx <= R; xx += 6) c.lineTo(xx, ly + Math.sin(xx * .045 + t * 2.2) * wave + Math.sin(xx * .11 - t * 3.1) * wave * .4);
    c.lineTo(R, V.bot + 4); c.closePath(); c.fill();
    c.strokeStyle = 'rgba(255,255,255,.7)'; c.lineWidth = 1.6; c.beginPath(); for (let xx = L; xx <= R; xx += 6) { const yy = ly + Math.sin(xx * .045 + t * 2.2) * wave + Math.sin(xx * .11 - t * 3.1) * wave * .4; xx === L ? c.moveTo(xx, yy) : c.lineTo(xx, yy); } c.stroke();
    const sg = c.createLinearGradient(0, ly, 0, ly + 26); sg.addColorStop(0, 'rgba(255,255,255,.28)'); sg.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = sg; c.fillRect(L, ly, R - L, 26);
    const hg = c.createLinearGradient(L, 0, R, 0); hg.addColorStop(0, 'rgba(0,0,0,.10)'); hg.addColorStop(.25, 'rgba(0,0,0,0)'); hg.addColorStop(.8, 'rgba(0,0,0,0)'); hg.addColorStop(1, 'rgba(0,0,0,.14)'); c.fillStyle = hg; c.fillRect(L, ly, R - L, V.bot - ly + 4);
  }
  if (o.inside) o.inside(c, { ly, V, x0: V.span(Math.max(ly, V.top + 2))[0], x1: V.span(Math.max(ly, V.top + 2))[1] });
  c.restore();
  // glass walls
  c.lineJoin = 'round'; poly(c, V.pts, false); c.strokeStyle = 'rgba(95,140,170,.5)'; c.lineWidth = 4.2; c.stroke();
  poly(c, V.pts, false); c.strokeStyle = 'rgba(255,255,255,.55)'; c.lineWidth = 1.4; c.stroke();
  const [lx0, lx1] = V.span(V.top + V.h * .5);
  const hl = c.createLinearGradient(0, V.top, 0, V.bot); hl.addColorStop(0, 'rgba(255,255,255,0)'); hl.addColorStop(.2, 'rgba(255,255,255,.55)'); hl.addColorStop(.8, 'rgba(255,255,255,.35)'); hl.addColorStop(1, 'rgba(255,255,255,0)');
  c.strokeStyle = hl; c.lineWidth = 3; c.lineCap = 'round'; c.beginPath(); c.moveTo(lx0 + 9, V.top + V.h * .12); c.lineTo(lx0 + 9, V.bot - V.h * .18); c.stroke();
  c.strokeStyle = 'rgba(255,255,255,.22)'; c.lineWidth = 2; c.beginPath(); c.moveTo(lx1 - 8, V.top + V.h * .2); c.lineTo(lx1 - 8, V.bot - V.h * .3); c.stroke();
  if (o.lip !== false) { const [a0, a1] = V.span(V.top + 1); c.strokeStyle = 'rgba(95,140,170,.6)'; c.lineWidth = 3; c.beginPath(); c.moveTo(a0 - 5, V.top); c.lineTo(a0 + 3, V.top); c.moveTo(a1 - 3, V.top); c.lineTo(a1 + 5, V.top); c.stroke(); }
  if (o.marks) { c.font = '600 10px system-ui'; c.textAlign = 'left'; c.textBaseline = 'middle'; o.marks.forEach(([f, lab]) => { const yy = V.yAt(f), [, xr] = V.span(yy); c.strokeStyle = 'rgba(40,70,110,.55)'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(xr - 13, yy); c.lineTo(xr - 2, yy); c.stroke(); if (lab) { c.fillStyle = 'rgba(40,70,110,.7)'; c.textAlign = 'right'; c.fillText(lab, xr - 16, yy); } }); }
  if (o.front) o.front(c, { ly, V });
  c.restore();
  return { ly };
}
/* convenience: liquid colour presets */
const LIQ = { water: [170, 215, 240], blue: [60, 140, 230], cuso4: [40, 130, 225], cyan: [40, 190, 220], yellow: [245, 215, 70], green: [90, 190, 110], pink: [245, 130, 170], red: [225, 70, 70], purple: [135, 70, 190], orange: [245, 150, 50], clear: [200, 225, 240], brown: [150, 95, 55], milk: [240, 238, 232], lime: [235, 245, 250], teal: [40, 170, 160] };

/* ---------- particles & effects ---------- */
function bubbleStream(c, x, yB, yT, t, o = {}) {
  const n = o.n ?? 10, sp = o.speed ?? 55, spread = o.spread ?? 10, r0 = o.r ?? 3.4, seed = o.seed ?? 0, rate = o.rate ?? 1; const span = Math.max(8, yB - yT);
  c.save(); for (let i = 0; i < n * rate; i++) { const ph = (t * sp * (.8 + hash(i + seed) * .5) + hash(i * 3.1 + seed) * span * 3) % span; const f = ph / span; const yy = yB - ph, xx = x + Math.sin(t * 3 + i * 1.7 + seed) * spread * (.3 + f) + (hash(i + seed * 2) - .5) * spread; const rr_ = r0 * (.55 + hash(i * 7 + seed) * .8) * (.8 + f * .5);
    c.globalAlpha = (o.alpha ?? 1) * (1 - Math.max(0, f - .9) * 10); circle(c, xx, yy, rr_, 'rgba(255,255,255,.28)', 'rgba(255,255,255,.9)', 1.1); circle(c, xx - rr_ * .3, yy - rr_ * .3, rr_ * .28, 'rgba(255,255,255,.95)'); }
  c.restore();
}
function steam(c, x, y, t, o = {}) { const n = o.n ?? 6, hgt = o.h ?? 90, a = o.a ?? .35; c.save(); for (let i = 0; i < n; i++) { const ph = ((t * (o.speed ?? .35) + i / n) % 1), yy = y - ph * hgt, xx = x + Math.sin(ph * 6 + i * 2 + t) * 12 * (.4 + ph) + (hash(i) - .5) * 14, r = 8 + ph * 20; const g = c.createRadialGradient(xx, yy, 0, xx, yy, r); g.addColorStop(0, `rgba(235,240,246,${a * (1 - ph)})`); g.addColorStop(1, 'rgba(235,240,246,0)'); c.fillStyle = g; c.fillRect(xx - r, yy - r, r * 2, r * 2); } c.restore(); }
function smoke(c, x, y, t, o = {}) { const col = o.col || [120, 120, 120]; const n = o.n ?? 8; c.save(); for (let i = 0; i < n; i++) { const ph = ((t * (o.speed ?? .3) + i / n) % 1), yy = y - ph * (o.h ?? 110), xx = x + Math.sin(ph * 5 + i * 3) * 14 * ph + (o.drift || 0) * ph, r = 8 + ph * 22; const g = c.createRadialGradient(xx, yy, 0, xx, yy, r); g.addColorStop(0, rgb(col, (o.a ?? .4) * (1 - ph))); g.addColorStop(1, rgb(col, 0)); c.fillStyle = g; c.fillRect(xx - r, yy - r, r * 2, r * 2); } c.restore(); }
function flame(c, x, y, t, o = {}) {
  const s = o.s ?? 1, h = (o.h ?? 90) * s; c.save(); c.translate(x, y); glow(c, 0, -h * .45, h * 1.1, [255, 160, 60], .28);
  const fl = Math.sin(t * 26) * 3 * s + Math.sin(t * 17 + 1) * 2 * s;
  const layer = (hh, ww, a, b, al) => { const g = c.createLinearGradient(0, 0, 0, -hh); g.addColorStop(0, a); g.addColorStop(1, b); c.fillStyle = g; c.globalAlpha = al; c.beginPath(); c.moveTo(-ww, 0); c.bezierCurveTo(-ww * 1.2, -hh * .45, -ww * .3 + fl * .4, -hh * .75, fl, -hh); c.bezierCurveTo(ww * .3 + fl * .4, -hh * .75, ww * 1.2, -hh * .45, ww, 0); c.closePath(); c.fill(); };
  if (o.yellow) { layer(h * 1.15, 17 * s, 'rgba(255,200,60,.95)', 'rgba(255,120,20,.0)', .95); layer(h * .7, 10 * s, 'rgba(255,240,170,.95)', 'rgba(255,200,80,0)', .9); }
  else { layer(h, 14 * s, 'rgba(60,110,255,.95)', 'rgba(150,200,255,0)', .85); layer(h * .62, 9 * s, 'rgba(120,180,255,.95)', 'rgba(200,230,255,0)', .9); layer(h * .3, 5 * s, 'rgba(235,245,255,.95)', 'rgba(255,255,255,0)', .95); layer(h * 1.05, 17 * s, 'rgba(255,170,60,.5)', 'rgba(255,100,20,0)', .55); }
  c.restore();
}
function burner(c, x, y, t, lit = true, o = {}) {
  shadowE(c, x, y, 70);
  const g = c.createLinearGradient(x - 9, 0, x + 9, 0); g.addColorStop(0, '#8d9bb0'); g.addColorStop(.35, '#e6edf6'); g.addColorStop(1, '#6e7d93');
  c.fillStyle = g; rr(c, x - 7, y - 78, 14, 70, 3); c.fill(); c.strokeStyle = '#59677c'; c.lineWidth = 1; c.stroke();
  c.fillStyle = '#4a5568'; rr(c, x - 7, y - 54, 14, 10, 2); c.fill();
  const bg = c.createLinearGradient(0, y - 14, 0, y); bg.addColorStop(0, '#a6b3c6'); bg.addColorStop(1, '#5c6a80'); c.fillStyle = bg; c.beginPath(); c.ellipse(x, y - 5, 33, 9, 0, 0, TAU); c.fill(); c.strokeStyle = '#46546a'; c.stroke();
  c.fillStyle = '#2a3548'; c.beginPath(); c.ellipse(x, y - 11, 18, 5, 0, 0, TAU); c.fill();
  if (lit) flame(c, x, y - 78, t, { s: o.s ?? 1, h: o.h ?? 82, yellow: o.yellow });
}
function stand(c, x, y, h, o = {}) {
  const g = c.createLinearGradient(x - 6, 0, x + 6, 0); g.addColorStop(0, '#79869b'); g.addColorStop(.4, '#dbe3ee'); g.addColorStop(1, '#6b7a90');
  c.fillStyle = '#586478'; rr(c, x - 45, y - 9, 90, 11, 4); c.fill(); c.fillStyle = g; c.fillRect(x - 5, y - h, 10, h);
}
function clampArm(c, x1, y, x2, o = {}) { const g = c.createLinearGradient(0, y - 4, 0, y + 4); g.addColorStop(0, '#dbe3ee'); g.addColorStop(1, '#7a879b'); c.fillStyle = g; rr(c, Math.min(x1, x2), y - 4, Math.abs(x2 - x1), 8, 3); c.fill(); c.fillStyle = '#5b687d'; c.beginPath(); c.arc(x1, y, 7, 0, TAU); c.fill(); c.beginPath(); c.arc(x2, y, 6, 0, TAU); c.fill(); }
function dropper(c, x, y, o = {}) { // y = tip; squeeze 0..1
  const col = o.color || LIQ.water, sq = o.squeeze || 0; c.save();
  const bg = c.createRadialGradient(x - 4, y - 66, 2, x, y - 60, 20); bg.addColorStop(0, '#ff8a80'); bg.addColorStop(1, '#b71c1c'); c.fillStyle = bg; c.beginPath(); c.ellipse(x, y - 62, 11 - sq * 2, 18 - sq * 4, 0, 0, TAU); c.fill();
  c.fillStyle = '#e6edf5'; rr(c, x - 7, y - 46, 14, 5, 2); c.fill();
  const gg = c.createLinearGradient(x - 6, 0, x + 6, 0); gg.addColorStop(0, 'rgba(210,230,242,.9)'); gg.addColorStop(.4, 'rgba(255,255,255,.95)'); gg.addColorStop(1, 'rgba(170,200,220,.9)'); c.fillStyle = gg; poly(c, [[x - 5.5, y - 41], [x + 5.5, y - 41], [x + 1.6, y], [x - 1.6, y]]); c.fill(); c.strokeStyle = 'rgba(80,120,150,.6)'; c.lineWidth = 1; c.stroke();
  c.fillStyle = rgb(col, .85); poly(c, [[x - 4.2, y - 28], [x + 4.2, y - 28], [x + 1.3, y - 1], [x - 1.3, y - 1]]); c.fill(); c.restore();
}
function drip(c, x, y0, y1, t, col, o = {}) { const rate = o.rate ?? 1.4, f = (t * rate) % 1; const yy = lerp(y0, y1, f * f), r = f < .35 ? 2 + f * 7 : 4.6; c.save(); c.fillStyle = rgb(col, .92); c.beginPath(); c.moveTo(x, yy - r * 2); c.bezierCurveTo(x + r * 1.2, yy - r * .5, x + r, yy + r, x, yy + r); c.bezierCurveTo(x - r, yy + r, x - r * 1.2, yy - r * .5, x, yy - r * 2); c.fill(); c.fillStyle = 'rgba(255,255,255,.6)'; c.beginPath(); c.arc(x - r * .35, yy, r * .25, 0, TAU); c.fill(); c.restore(); return f; }
function thermometer(c, x, y, h, temp, mn = 0, mx = 110, o = {}) {
  const f = clamp((temp - mn) / (mx - mn), 0, 1); c.save(); const g = c.createLinearGradient(x - 6, 0, x + 6, 0); g.addColorStop(0, 'rgba(200,220,235,.9)'); g.addColorStop(.4, 'rgba(255,255,255,.98)'); g.addColorStop(1, 'rgba(170,195,215,.9)');
  rr(c, x - 6, y - h, 12, h - 10, 6); c.fillStyle = g; c.fill(); c.strokeStyle = 'rgba(80,120,150,.7)'; c.lineWidth = 1.3; c.stroke();
  circle(c, x, y - 7, 11, g, 'rgba(80,120,150,.7)', 1.3);
  const mc = o.col || '#e11d2e'; circle(c, x, y - 7, 8, mc); c.fillStyle = mc; c.fillRect(x - 2.2, y - 10 - f * (h - 36), 4.4, f * (h - 36) + 6);
  c.strokeStyle = 'rgba(30,50,80,.65)'; c.lineWidth = 1; c.font = '600 8.5px system-ui'; c.fillStyle = 'rgba(30,50,80,.8)'; c.textAlign = 'left';
  for (let i = 0; i <= 10; i++) { const yy = y - 22 - (i / 10) * (h - 40); c.beginPath(); c.moveTo(x + 6, yy); c.lineTo(x + (i % 5 === 0 ? 14 : 10), yy); c.stroke(); if (i % 5 === 0) c.fillText(Math.round(mn + (mx - mn) * i / 10), x + 16, yy + 3); }
  c.restore();
}
function glassTube(c, pts, o = {}) { // bent delivery tube along polyline
  c.save(); c.lineJoin = 'round'; c.lineCap = 'round'; const w = o.w || 8; poly(c, pts, false); c.strokeStyle = 'rgba(95,140,170,.55)'; c.lineWidth = w + 3; c.stroke(); poly(c, pts, false); c.strokeStyle = o.fill || 'rgba(225,240,250,.8)'; c.lineWidth = w; c.stroke(); poly(c, pts, false); c.strokeStyle = 'rgba(255,255,255,.85)'; c.lineWidth = 1.6; c.stroke(); c.restore();
}
function cork(c, x, y, w, h = 14) { const g = c.createLinearGradient(x - w / 2, 0, x + w / 2, 0); g.addColorStop(0, '#9a6b3d'); g.addColorStop(.4, '#d9a86a'); g.addColorStop(1, '#8a5b30'); poly(c, [[x - w / 2, y], [x + w / 2, y], [x + w / 2 - 3, y + h], [x - w / 2 + 3, y + h]]); c.fillStyle = g; c.fill(); c.strokeStyle = '#6e4723'; c.lineWidth = 1; c.stroke(); }
function powder(c, x, y, w, h, col, seed = 0, o = {}) { // heap of crystals/powder
  c.save(); const g = c.createLinearGradient(0, y - h, 0, y); g.addColorStop(0, rgb(shade(col, .2))); g.addColorStop(1, rgb(shade(col, -.15))); c.fillStyle = g; c.beginPath(); c.moveTo(x - w / 2, y); c.quadraticCurveTo(x - w * .25, y - h * 1.15, x, y - h); c.quadraticCurveTo(x + w * .25, y - h * 1.1, x + w / 2, y); c.closePath(); c.fill();
  const n = o.n ?? 30; for (let i = 0; i < n; i++) { const px = x + (hash(i + seed) - .5) * w * .85, py = y - hash(i * 2 + seed) * h * .8 * (1 - Math.abs(px - x) / (w / 2) * .7); const s_ = 1.3 + hash(i * 5 + seed) * 2.2; c.fillStyle = rgb(shade(col, (hash(i * 3 + seed) - .5) * .5), .9); c.fillRect(px, py, s_, s_); }
  c.restore();
}
function gauge(c, x, y, r, val, mn, mx, label, unit, o = {}) {
  c.save(); const g = c.createRadialGradient(x - r * .3, y - r * .3, 4, x, y, r); g.addColorStop(0, '#fffdf4'); g.addColorStop(1, '#e8e2cc'); circle(c, x, y, r + 7, '#2b3445'); circle(c, x, y, r + 3, '#9aa6b8'); circle(c, x, y, r, g);
  const a0 = Math.PI * .8, a1 = Math.PI * 2.2; c.strokeStyle = '#243044'; c.fillStyle = '#243044'; c.font = `700 ${Math.max(9, r * .17)}px system-ui`; c.textAlign = 'center'; c.textBaseline = 'middle';
  const nt = o.ticks ?? 10; for (let i = 0; i <= nt; i++) { const a = lerp(a0, a1, i / nt), maj = i % 2 === 0; c.lineWidth = maj ? 1.8 : 1; c.beginPath(); c.moveTo(x + Math.cos(a) * (r - 4), y + Math.sin(a) * (r - 4)); c.lineTo(x + Math.cos(a) * (r - (maj ? 13 : 9)), y + Math.sin(a) * (r - (maj ? 13 : 9))); c.stroke(); if (maj) c.fillText(fix(mn + (mx - mn) * i / nt, o.d ?? 0), x + Math.cos(a) * (r - 24), y + Math.sin(a) * (r - 24)); }
  text(c, label, x, y - r * .36, { size: Math.max(10, r * .17), w: 800, col: o.col || '#b91c1c' }); text(c, unit, x, y + r * .42, { size: Math.max(9, r * .15), col: '#64748b' });
  const f = clamp((val - mn) / (mx - mn), 0, 1), a = lerp(a0, a1, f); c.strokeStyle = '#c62828'; c.lineWidth = 2.4; c.lineCap = 'round'; c.beginPath(); c.moveTo(x - Math.cos(a) * 9, y - Math.sin(a) * 9); c.lineTo(x + Math.cos(a) * (r - 8), y + Math.sin(a) * (r - 8)); c.stroke(); circle(c, x, y, 5, '#334155'); c.restore();
}
function micro(c, x, y, w, h, title) { // dark framed inset helper, returns {x,y,w,h}
  c.save(); c.shadowColor = 'rgba(0,0,0,.35)'; c.shadowBlur = 18; rr(c, x, y, w, h, 14); c.fillStyle = '#0b1424'; c.fill(); c.shadowColor = 'transparent'; c.strokeStyle = '#38bdf8'; c.lineWidth = 2; c.stroke(); c.save(); rr(c, x, y, w, h, 14); c.clip();
  const g = c.createRadialGradient(x + w / 2, y + h / 2, 10, x + w / 2, y + h / 2, w * .7); g.addColorStop(0, '#16294a'); g.addColorStop(1, '#070d1a'); c.fillStyle = g; c.fillRect(x, y, w, h); c.restore();
  text(c, title, x + 12, y + 14, { size: 11, w: 800, col: '#7dd3fc', align: 'left' }); c.restore(); return { x, y, w, h };
}
/* path helpers for current / flow along polylines */
function pathLen(pts, close) { let L = 0; const n = pts.length; for (let i = 0; i < n - (close ? 0 : 1); i++) { const a = pts[i], b = pts[(i + 1) % n]; L += Math.hypot(b[0] - a[0], b[1] - a[1]); } return L; }
function pathAt(pts, d, close) { const n = pts.length; const L = pathLen(pts, close); d = ((d % L) + L) % L; for (let i = 0; i < n - (close ? 0 : 1); i++) { const a = pts[i], b = pts[(i + 1) % n], l = Math.hypot(b[0] - a[0], b[1] - a[1]); if (d <= l) { const f = l ? d / l : 0; return [lerp(a[0], b[0], f), lerp(a[1], b[1], f), Math.atan2(b[1] - a[1], b[0] - a[0])]; } d -= l; } return [pts[0][0], pts[0][1], 0]; }
function wireFlow(c, pts, t, rate, o = {}) { // draw wire + moving carriers
  c.save(); c.lineJoin = 'round'; c.lineCap = 'round'; if (!o.noWire) { poly(c, pts, !!o.close); c.strokeStyle = o.wire || '#3b4a63'; c.lineWidth = o.w || 6; c.stroke(); poly(c, pts, !!o.close); c.strokeStyle = o.core || '#cbd5e1'; c.lineWidth = (o.w || 6) - 3; c.stroke(); }
  const L = pathLen(pts, !!o.close), sp = o.spacing || 26, n = Math.floor(L / sp), off = (t * rate * 40) % sp; const col = o.col || '#2563eb';
  if (Math.abs(rate) > .001) for (let i = 0; i < n; i++) { const d = i * sp + off; const [px, py] = pathAt(pts, rate > 0 ? d : L - d, !!o.close); if (o.skip && o.skip(px, py)) continue; circle(c, px, py, o.r || 3.6, col); circle(c, px - 1, py - 1, 1.2, 'rgba(255,255,255,.8)'); }
  c.restore();
}
function resistor(c, x, y, w, o = {}) { // horizontal zig-zag resistor body
  const pts = [[x, y]]; const n = 6; for (let i = 0; i < n; i++) pts.push([x + w * (i + .5) / n, y + (i % 2 ? 11 : -11)]); pts.push([x + w, y]); c.save(); c.lineJoin = 'round'; poly(c, pts, false); c.strokeStyle = o.col || '#1e293b'; c.lineWidth = 3; c.stroke(); c.restore(); }
function bulb(c, x, y, bright, r = 22) {
  c.save(); if (bright > .02) glow(c, x, y, r * (2 + bright * 2.4), [255, 214, 90], .55 * bright);
  const g = c.createRadialGradient(x - r * .3, y - r * .3, 2, x, y, r); g.addColorStop(0, `rgba(255,${240 - 20 * (1 - bright)},${200 + 30 * bright},${.5 + .5 * bright})`); g.addColorStop(1, `rgba(${230 + 25 * bright},${215 - 40 * (1 - bright)},${150 * bright + 150},${.35 + .5 * bright})`);
  circle(c, x, y, r, g, 'rgba(90,110,140,.8)', 2); c.fillStyle = '#586478'; rr(c, x - 10, y + r - 3, 20, 14, 3); c.fill(); c.fillStyle = '#8b97a9'; rr(c, x - 7, y + r + 8, 14, 7, 2); c.fill();
  c.strokeStyle = bright > .05 ? `rgba(255,${190 + 60 * bright},${60 + 120 * bright},1)` : '#8a8f98'; c.lineWidth = 1.8; c.beginPath(); c.moveTo(x - 5, y + r - 3); c.lineTo(x - 5, y + 3); c.quadraticCurveTo(x - 9, y - 7, x - 2, y - 5); c.quadraticCurveTo(x, y - 12, x + 3, y - 5); c.quadraticCurveTo(x + 9, y - 7, x + 5, y + 3); c.lineTo(x + 5, y + r - 3); c.stroke(); c.restore();
}
function battery(c, x, y, w, h, volts, o = {}) { // horizontal cell/battery with + on right
  c.save(); const g = c.createLinearGradient(0, y - h / 2, 0, y + h / 2); g.addColorStop(0, '#2b3b55'); g.addColorStop(.5, '#46597c'); g.addColorStop(1, '#222f46'); c.fillStyle = g; rr(c, x - w / 2, y - h / 2, w, h, 8); c.fill(); c.fillStyle = '#d4a017'; rr(c, x + w / 2 - 2, y - h * .22, 8, h * .44, 3); c.fill();
  c.fillStyle = '#f59e0b'; rr(c, x - w / 2 + 8, y - h / 2 + 7, w * .34, h - 14, 4); c.fill(); text(c, fix(volts, 1) + ' V', x + 6, y, { size: 15, w: 800, col: '#fff' }); text(c, '−', x - w / 2 + 3, y - h / 2 - 8, { size: 15, col: '#334155' }); text(c, '+', x + w / 2 + 3, y - h / 2 - 8, { size: 15, col: '#dc2626' }); c.restore();
}
/* magnetic field: trace a line through vector field Bf(x,y)->[bx,by] */
function traceLine(Bf, x, y, steps = 220, h = 4, dir = 1, stop) { const pts = [[x, y]]; for (let i = 0; i < steps; i++) { let [bx, by] = Bf(x, y); let m = Math.hypot(bx, by); if (m < 1e-9) break; bx /= m; by /= m; const [cx, cy] = Bf(x + bx * h * dir * .5, y + by * h * dir * .5); m = Math.hypot(cx, cy); if (m < 1e-9) break; x += cx / m * h * dir; y += cy / m * h * dir; if (x < -20 || x > W + 20 || y < -20 || y > H + 20) break; pts.push([x, y]); if (stop && stop(x, y)) break; if (i > 20 && Math.hypot(x - pts[0][0], y - pts[0][1]) < h * 1.2) { pts.push(pts[0]); break; } } return pts; }
function flowLine(c, pts, t, col, lw = 2, o = {}) { if (pts.length < 2) return; c.save(); c.lineJoin = 'round'; c.strokeStyle = col; c.lineWidth = lw; c.globalAlpha = o.alpha ?? 1; c.setLineDash([9, 7]); c.lineDashOffset = -(t * (o.speed ?? 26)); poly(c, pts, false); c.stroke(); c.setLineDash([]); const L = pathLen(pts); const k = Math.max(1, Math.floor(L / (o.every || 170))); for (let i = 0; i < k; i++) { const [px, py, a] = pathAt(pts, (i + .5) / k * L); c.save(); c.translate(px, py); c.rotate(a); c.fillStyle = col; c.beginPath(); c.moveTo(6, 0); c.lineTo(-4, -4.2); c.lineTo(-4, 4.2); c.closePath(); c.fill(); c.restore(); } c.restore(); }
/* biology helpers */
function leafShape(c, x, y, len, wid, rot, fill, stroke) { c.save(); c.translate(x, y); c.rotate(rot); c.beginPath(); c.moveTo(0, 0); c.bezierCurveTo(len * .25, -wid, len * .75, -wid * .9, len, 0); c.bezierCurveTo(len * .75, wid * .9, len * .25, wid, 0, 0); c.fillStyle = fill; c.fill(); if (stroke) { c.strokeStyle = stroke; c.lineWidth = 1.4; c.stroke(); } c.strokeStyle = 'rgba(255,255,255,.35)'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(2, 0); c.lineTo(len * .96, 0); c.stroke(); c.restore(); }
function cellBlob(c, x, y, rx, ry, fill, stroke, wob = 0, t = 0, seed = 0) { c.beginPath(); const n = 28; for (let i = 0; i <= n; i++) { const a = i / n * TAU, k = 1 + Math.sin(a * 3 + t * 2 + seed) * wob + Math.sin(a * 5 - t * 1.5 + seed) * wob * .6; const px = x + Math.cos(a) * rx * k, py = y + Math.sin(a) * ry * k; i ? c.lineTo(px, py) : c.moveTo(px, py); } c.closePath(); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke; c.lineWidth = 2; c.stroke(); } }
const damped = {}; function damp(key, target, dt, k = 6) { const v = damped[key] ?? target; damped[key] = v + (target - v) * (1 - Math.exp(-k * Math.max(dt, .001))); return damped[key]; }
const SCENES_REG = {};

function galv(c, x, y, r, val, label = 'G') { c.save(); const g = c.createRadialGradient(x - r * .3, y - r * .3, 4, x, y, r); g.addColorStop(0, '#fffdf4'); g.addColorStop(1, '#e8e2cc'); circle(c, x, y, r + 7, '#2b3445'); circle(c, x, y, r + 3, '#9aa6b8'); circle(c, x, y, r, g); c.strokeStyle = '#243044'; c.lineWidth = 1.5; for (let i = -5; i <= 5; i++) { const a = -Math.PI / 2 + i * .26; c.beginPath(); c.moveTo(x + Math.cos(a) * (r - 4), y + Math.sin(a) * (r - 4)); c.lineTo(x + Math.cos(a) * (r - (i % 5 === 0 ? 14 : 9)), y + Math.sin(a) * (r - (i % 5 === 0 ? 14 : 9))); c.stroke(); } text(c, '0', x, y - r + 22, { size: 10, col: '#243044' }); text(c, label, x, y + r * .42, { size: r * .3, w: 900, col: '#b91c1c' }); text(c, '−', x - r * .72, y - r * .25, { size: 12, col: '#475569' }); text(c, '+', x + r * .72, y - r * .25, { size: 12, col: '#475569' }); const a = -Math.PI / 2 + clamp(val, -1, 1) * 1.3; c.strokeStyle = '#c62828'; c.lineWidth = 2.6; c.lineCap = 'round'; c.beginPath(); c.moveTo(x - Math.cos(a) * 8, y - Math.sin(a) * 8); c.lineTo(x + Math.cos(a) * (r - 8), y + Math.sin(a) * (r - 8)); c.stroke(); circle(c, x, y, 5, '#334155'); c.restore(); }
function resBox(c, x, y, w, h, label, heat = 0, vertical = false) { c.save(); c.translate(x, y); if (vertical) c.rotate(Math.PI / 2); const g = c.createLinearGradient(0, -h / 2, 0, h / 2); g.addColorStop(0, rgb(mix([248, 250, 252], [255, 190, 120], heat))); g.addColorStop(1, rgb(mix([210, 220, 232], [250, 130, 70], heat))); rr(c, -w / 2, -h / 2, w, h, 8); c.fillStyle = g; c.fill(); c.strokeStyle = '#475569'; c.lineWidth = 2; c.stroke(); c.strokeStyle = '#1e293b'; c.lineWidth = 2.4; c.lineJoin = 'round'; c.beginPath(); c.moveTo(-w / 2 + 8, 0); for (let i = 0; i < 7; i++) c.lineTo(-w / 2 + 8 + (w - 16) * (i + .5) / 7, i % 2 ? 9 : -9); c.lineTo(w / 2 - 8, 0); c.stroke(); c.restore(); text(c, label, x, y + (vertical ? 0 : -h / 2 - 12), { size: 13, w: 800, col: '#0f172a', align: vertical ? 'left' : 'center' }); }
