/* Synergic Bond — chapter animations (no external libraries). Widgets are declared in HTML:
   <div class="sb-anim" data-type="inductive|sir|resonance|steps|energy" ...></div>  */
(function () {
  var TEXT = '#111', MUTED = '#555', ACC = '#1d4ed8', LINE = '#e5e7eb', BG = '#f7f9ff';
  function box(el, title) {
    el.style.cssText = 'max-width:760px;margin:22px auto;padding:16px;border:1px solid ' + LINE + ';border-radius:12px;background:' + BG + ';font-family:system-ui,sans-serif;color:' + TEXT;
    var h = document.createElement('h3'); h.textContent = title; h.style.cssText = 'margin:0 0 6px;color:' + ACC + ';font-size:17px';
    el.appendChild(h);
  }
  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function btn(label) {
    var b = document.createElement('button'); b.textContent = label;
    b.style.cssText = 'padding:6px 14px;border-radius:8px;border:1px solid ' + ACC + ';background:' + ACC + ';color:#fff;cursor:pointer;font-size:14px';
    return b;
  }
  function a11y(b, name) { b.setAttribute('aria-label', name); b.tabIndex = 0; return b; }
  function canvas(w, h) {
    var c = document.createElement('canvas'); c.width = w; c.height = h;
    c.style.cssText = 'display:block;margin:8px auto;background:#fff;border-radius:8px;max-width:100%';
    return c;
  }
  function note(t) { var p = document.createElement('p'); p.textContent = t; p.style.cssText = 'margin:8px 0 0;color:' + MUTED + ';font-size:14px'; return p; }

  /* 1. Inductive effect: a substituent pulls (-I) or pushes (+I) electron density along a chain. Dots drift and fade with distance. */
  function inductive(el) {
    var sign = el.dataset.sign || '-I', label = el.dataset.label || '';
    var atoms = (el.dataset.chain || 'X,C1,C2,C3,C4').split(',');
    box(el, 'Inductive effect ' + sign + (label ? ' — ' + label : ''));
    var c = canvas(640, 150), x = c.getContext('2d'), play = btn(REDUCED ? 'Play' : 'Pause'), reset = btn('Reset'), t = 0, running = !REDUCED;
    el.appendChild(c); el.appendChild(play); el.appendChild(reset); el.appendChild(note('Arrows show the direction of the electron shift. The shift weakens with each bond, so the effect is strongest at the first carbon.'));
    var n = atoms.length, xs = []; for (var i = 0; i < n; i++) xs.push(70 + i * (500 / (n - 1)));
    var dir = sign.indexOf('-') === 0 ? 1 : -1; /* -I pulls density toward the substituent (left), +I pushes away */
    function draw() {
      x.clearRect(0, 0, c.width, c.height);
      for (var i = 0; i < n - 1; i++) { x.beginPath(); x.moveTo(xs[i], 80); x.lineTo(xs[i + 1], 80); x.lineWidth = 3; x.strokeStyle = '#111'; x.stroke(); }
      for (var i = 0; i < n; i++) {
        x.beginPath(); x.arc(xs[i], 80, 18, 0, Math.PI * 2); x.fillStyle = i === 0 ? '#fde68a' : '#fff'; x.fill(); x.strokeStyle = '#111'; x.lineWidth = 2; x.stroke();
        x.fillStyle = '#111'; x.font = '13px system-ui'; x.textAlign = 'center'; x.fillText(atoms[i], xs[i], 85);
      }
      /* drifting electron dots, density decreases along the chain */
      for (var k = 0; k < 6; k++) {
        var p = ((t * 0.0006 + k / 6) % 1);
        var pos = dir > 0 ? (1 - p) : p; /* travel direction */
        var idx = pos * (n - 1), i0 = Math.floor(idx), f = idx - i0;
        if (i0 >= n - 1) continue;
        var px = xs[i0] + f * (xs[i0 + 1] - xs[i0]), py = 80 - 26 * Math.sin(Math.PI * p);
        var alpha = 1 - Math.abs(pos * (n - 1) - (dir > 0 ? 0 : n - 1)) / (n - 1) * 0.7;
        x.beginPath(); x.arc(px, py, 4.5, 0, Math.PI * 2); x.fillStyle = 'rgba(29,78,216,' + Math.max(0.2, alpha).toFixed(2) + ')'; x.fill();
      }
      x.fillStyle = '#555'; x.font = '12px system-ui'; x.textAlign = 'left';
      x.fillText(sign === '-I' ? 'e⁻ density pulled toward the substituent' : 'e⁻ density pushed away from the substituent', 20, 130);
    }
    function loop() { if (running) t += 16; draw(); requestAnimationFrame(loop); }
    play.onclick = function () { running = !running; play.textContent = running ? 'Pause' : 'Play'; };
    play.setAttribute('aria-label', 'Play or pause the electron-displacement animation');
    reset.onclick = function () { t = 0; running = false; play.textContent = 'Play'; draw(); };
    reset.setAttribute('aria-label', 'Reset the electron-displacement animation');
    c.setAttribute('role', 'img'); c.setAttribute('aria-label', sign + ' inductive effect: electron density shift along ' + atoms.join(' – '));
    loop();
  }

  /* 2. Steric inhibition of resonance: twist angle θ between the group and the ring; overlap ∝ cos²θ */
  function sir(el) {
    var title = el.dataset.title || 'Steric inhibition of resonance';
    box(el, title);
    var c = canvas(640, 220), x = c.getContext('2d'), s = document.createElement('input');
    s.type = 'range'; s.min = 0; s.max = 90; s.value = 0; s.style.cssText = 'width:300px;display:block;margin:6px auto';
    var out = document.createElement('div'); out.style.cssText = 'text-align:center;font-weight:600;margin-top:6px';
    var play = btn('Play'), running = false, t = 0, ang = 0;
    el.appendChild(c); el.appendChild(s); el.appendChild(out); el.appendChild(play);
    el.appendChild(note('Overlap between the substituent p-orbital and the ring π system goes as cos²θ. At θ = 90° the conjugation is lost, so resonance and its stabilisation disappear.'));
    function draw(a) {
      x.clearRect(0, 0, c.width, c.height);
      var cx = 230, cy = 120, rad = (a * Math.PI) / 180;
      /* ring as a flat ellipse (plane of the ring) */
      x.beginPath(); x.ellipse(cx, cy, 90, 40, 0, 0, Math.PI * 2); x.strokeStyle = '#111'; x.lineWidth = 3; x.stroke();
      /* substituent plane rotated by θ: drawn as a second ellipse seen edge-on as θ grows */
      var sc = Math.abs(Math.cos(rad));
      x.beginPath(); x.ellipse(cx + 150, cy, 16 + 60 * sc, 40, 0, 0, Math.PI * 2); x.strokeStyle = ACC; x.lineWidth = 3; x.stroke();
      x.beginPath(); x.moveTo(cx + 90, cy); x.lineTo(cx + 134, cy); x.strokeStyle = '#111'; x.lineWidth = 2; x.stroke();
      var ov = Math.pow(Math.cos(rad), 2);
      /* overlap bar */
      x.fillStyle = '#e5e7eb'; x.fillRect(420, 70, 170, 22); x.fillStyle = '#16a34a'; x.fillRect(420, 70, 170 * ov, 22);
      x.fillStyle = '#111'; x.font = '13px system-ui'; x.textAlign = 'left';
      x.fillText('Overlap cos²θ = ' + (ov * 100).toFixed(0) + '%', 420, 60);
      out.textContent = 'θ = ' + a.toFixed(0) + '°   ·   resonance overlap ' + (ov * 100).toFixed(0) + '%';
    }
    s.oninput = function () { ang = parseFloat(s.value); running = false; play.textContent = 'Play'; draw(ang); };
    play.onclick = function () { running = !running; play.textContent = running ? 'Pause' : 'Play'; };
    (function loop() { if (running) { ang = (ang + 0.35) % 91; s.value = Math.round(ang); } draw(ang); requestAnimationFrame(loop); })();
  }

  /* 3. Resonance: contributors cycle with a curved arrow showing electron movement */
  function resonance(el) {
    var items = (el.dataset.items || '').split('|').filter(Boolean);
    box(el, el.dataset.title || 'Resonance contributors');
    var c = canvas(640, 180), x = c.getContext('2d'), play = btn('Pause'), idx = 0, tick = 0, running = true;
    el.appendChild(c); el.appendChild(play); el.appendChild(note(el.dataset.note || 'Contributors differ only in electron placement; the true structure is a hybrid of all of them.'));
    function draw() {
      x.clearRect(0, 0, c.width, c.height);
      var p = tick / 90; /* 0..1 within one step */
      x.fillStyle = '#111'; x.font = '20px Georgia,serif'; x.textAlign = 'center';
      x.fillText(items[idx] || '', 320, 90);
      x.font = '13px system-ui'; x.fillStyle = '#555';
      x.fillText('Contributor ' + (idx + 1) + ' of ' + items.length, 320, 150);
      /* curved arrow sweeps between the labels */
      x.beginPath(); x.moveTo(230, 60); x.quadraticCurveTo(320, 20 - 20 * Math.sin(Math.PI * p), 230 + 180 * p, 60);
      x.strokeStyle = ACC; x.lineWidth = 2.5; x.stroke();
    }
    function loop() { if (running) { tick++; if (tick > 90) { tick = 0; idx = (idx + 1) % Math.max(1, items.length); } } draw(); requestAnimationFrame(loop); }
    play.onclick = function () { running = !running; play.textContent = running ? 'Pause' : 'Play'; };
    loop();
  }

  /* 4. Step-through mechanism player */
  function steps(el) {
    var list = (el.dataset.steps || '').split(';;').filter(Boolean), i = 0;
    box(el, el.dataset.title || 'Mechanism');
    var line = document.createElement('div'); line.style.cssText = 'min-height:64px;font-size:16px;padding:10px;background:#fff;border-radius:8px;border:1px solid ' + LINE;
    var row = document.createElement('div'); row.style.cssText = 'display:flex;gap:8px;justify-content:center;margin-top:10px';
    var prev = btn('Back'), next = btn('Next'), auto = btn('Play');
    row.appendChild(prev); row.appendChild(auto); row.appendChild(next);
    el.appendChild(line); el.appendChild(row);
    var prog = document.createElement('div'); prog.style.cssText = 'text-align:center;color:' + MUTED + ';font-size:13px;margin-top:6px'; el.appendChild(prog);
    var timer = null;
    function show() { line.textContent = list[i] || ''; prog.textContent = 'Step ' + (i + 1) + ' of ' + list.length; }
    prev.onclick = function () { i = Math.max(0, i - 1); show(); };
    next.onclick = function () { i = Math.min(list.length - 1, i + 1); show(); };
    auto.onclick = function () {
      if (timer) { clearInterval(timer); timer = null; auto.textContent = 'Play'; return; }
      auto.textContent = 'Pause'; timer = setInterval(function () { if (i >= list.length - 1) { clearInterval(timer); timer = null; auto.textContent = 'Play'; return; } i++; show(); }, 2200);
    };
    show();
  }

  /* 5. Energy profile: curve drawn progressively; points "x:y,x:y" */
  function energy(el) {
    var pts = (el.dataset.points || '0:0,50:100,100:0').split(',').map(function (p) { var a = p.split(':'); return [+a[0], +a[1]]; });
    box(el, el.dataset.title || 'Energy profile');
    var c = canvas(640, 240), x = c.getContext('2d'), play = btn('Replay'), prog = 0;
    el.appendChild(c); el.appendChild(play); el.appendChild(note(el.dataset.note || 'Higher peaks mean slower steps; the highest peak is the rate-determining step.'));
    function draw() {
      x.clearRect(0, 0, c.width, c.height);
      x.strokeStyle = LINE; x.lineWidth = 1; x.beginPath(); x.moveTo(60, 200); x.lineTo(610, 200); x.moveTo(60, 200); x.lineTo(60, 20); x.stroke();
      x.fillStyle = '#555'; x.font = '12px system-ui'; x.textAlign = 'left'; x.fillText('Energy', 10, 18); x.fillText('Reaction coordinate', 500, 230);
      var maxX = pts[pts.length - 1][0] || 1, maxY = Math.max.apply(null, pts.map(function (p) { return p[1]; })) || 1;
      function X(v) { return 60 + (v / maxX) * 540; } function Y(v) { return 200 - (v / maxY) * 170; }
      x.beginPath(); x.strokeStyle = ACC; x.lineWidth = 3;
      for (var i = 0; i < pts.length - 1; i++) {
        var a = pts[i], b = pts[i + 1], segEnd = (i + 1) / (pts.length - 1);
        if (prog < i / (pts.length - 1)) break;
        var t = Math.min(1, (prog - i / (pts.length - 1)) * (pts.length - 1));
        x.moveTo(X(a[0]), Y(a[1])); x.lineTo(X(a[0] + (b[0] - a[0]) * t), Y(a[1] + (b[1] - a[1]) * t));
      }
      x.stroke();
      pts.forEach(function (p) { x.beginPath(); x.arc(X(p[0]), Y(p[1]), 4, 0, Math.PI * 2); x.fillStyle = ACC; x.fill(); });
    }
    function run() { prog = 0; (function f() { prog = Math.min(1, prog + 0.02); draw(); if (prog < 1) requestAnimationFrame(f); })(); }
    play.onclick = run; run();
  }

  var map = { inductive: inductive, sir: sir, resonance: resonance, steps: steps, energy: energy };
  document.querySelectorAll('.sb-anim').forEach(function (el) { var f = map[el.dataset.type]; if (f) f(el); });
})();
