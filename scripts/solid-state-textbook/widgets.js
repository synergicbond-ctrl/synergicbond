/* Solid State textbook runtime.
 * 1. Crystal Lab instances: the real Three.js lab, embedded once per placement, loaded lazily, with controls wrapped around it.
 * 2. Small non-3D models: defects, packing bars, radius ratio, density.
 * 3. Full-text search.
 * Nothing here edits the lab. Pause, Speed and Step work by giving the lab a controllable clock (performance.now),
 * installed by a short script that runs before the lab's own code.
 */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Crystal Lab instances ---------------- */
  var labText = null;
  var MAX_LIVE = 3;
  var live = [];
  var CLOCK = "<script>(function(){var real=performance.now.bind(performance),v=0,last=real(),speed=1,paused=false;" +
    "function tick(){var r=real();if(!paused)v+=(r-last)*speed;last=r;return v}" +
    "Object.defineProperty(performance,'now',{configurable:true,value:tick});" +
    "var n=0,raf=window.requestAnimationFrame.bind(window);window.requestAnimationFrame=function(cb){return raf(function(t){n++;cb(t)})};" +
    "window.__labClock={set:function(p,s){tick();paused=p;speed=s},now:tick,frames:function(){return n}};})();<\/script>";

  function getLab() {
    if (labText === null) {
      var b64 = document.getElementById("tb-lab-src").textContent.trim();
      var bytes = Uint8Array.from(atob(b64), function (c) { return c.charCodeAt(0); });
      labText = new TextDecoder().decode(bytes);
    }
    return labText;
  }

  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }

  function initLab(fig) {
    var hash = fig.dataset.hash, title = fig.dataset.title || "Crystal Lab";
    var stage = fig.querySelector(".tb-stage"), poster = fig.querySelector(".tb-poster"), loadBtn = fig.querySelector(".tb-load");
    var bar = fig.querySelector(".tb-bar");
    var st = { frame: null, userPaused: false, sysPaused: false, speed: 1, t0: 0, lastSeen: 0, visible: false };
    var msg = el("p", "tb-msg"); msg.hidden = true; stage.appendChild(msg);

    function clock() { try { return st.frame && st.frame.contentWindow && st.frame.contentWindow.__labClock; } catch (e) { return null; } }
    // The lab's camera spin is per-frame, not clock-driven, so pausing also switches the lab's own rotation off
    // (and back on afterwards, but only if it was on before). Manual dragging still works while paused.
    function spin(pause) {
      try {
        var a = st.frame.contentDocument.getElementById("auto");
        if (!a) return;
        var on = a.textContent.indexOf("Pause") === 0;
        if (pause && on) { a.click(); st.rotWas = true; }
        else if (!pause && st.rotWas && !on) { a.click(); st.rotWas = false; }
      } catch (e) {}
    }
    function apply() { var c = clock(); if (!c) return; var p = st.userPaused || st.sysPaused; c.set(p, st.speed); spin(p); }

    // ----- toolbar -----
    var bPlay = el("button", "tb-btn", "Pause"); bPlay.type = "button"; bPlay.setAttribute("aria-label", "Pause or play the demonstration");
    var bBack = el("button", "tb-btn", "◀ Step"); bBack.type = "button"; bBack.setAttribute("aria-label", "Step the demonstration back");
    var bFwd = el("button", "tb-btn", "Step ▶"); bFwd.type = "button"; bFwd.setAttribute("aria-label", "Step the demonstration forward");
    var bRep = el("button", "tb-btn", "Replay"); bRep.type = "button"; bRep.setAttribute("aria-label", "Replay from the start");
    var bRes = el("button", "tb-btn", "Reset"); bRes.type = "button"; bRes.setAttribute("aria-label", "Reset the model to its starting state");
    var sel = el("select", "tb-btn"); sel.setAttribute("aria-label", "Animation speed");
    [["0.25", "0.25×"], ["0.5", "0.5×"], ["1", "1×"], ["2", "2×"]].forEach(function (o) { var op = el("option", "", o[1]); op.value = o[0]; if (o[0] === "1") op.selected = true; sel.appendChild(op); });
    var bFull = el("button", "tb-btn", "Fullscreen"); bFull.type = "button"; bFull.setAttribute("aria-label", "Show full screen");
    bar.append(bPlay, bBack, bFwd, bRep, bRes, sel, bFull);
    bar.hidden = true;

    function ppLabel() { bPlay.textContent = st.userPaused ? "Play" : "Pause"; bPlay.setAttribute("aria-pressed", String(st.userPaused)); }
    function replayClick() { try { var b = st.frame.contentDocument.getElementById("replay"); if (b) b.click(); } catch (e) {} }

    bPlay.onclick = function () { st.userPaused = !st.userPaused; ppLabel(); apply(); };
    sel.onchange = function () { st.speed = parseFloat(sel.value); apply(); };
    bRep.onclick = function () { var c = clock(); if (!c) return; replayClick(); st.t0 = c.now(); st.userPaused = false; ppLabel(); apply(); };
    // A step moves the demonstration on by exactly `ms` of animation time, rendered in at least ms/50 frames (the lab limits each frame to 0.05 s).
    // The frame rate is measured first and the clock is run at the speed that makes those frames take `ms` of animation time, so a step
    // looks the same on a slow device (a few frames per second) and on a fast one.
    function runFor(ms, then) {
      var c = clock(); if (!c) return;
      var need = Math.max(3, Math.ceil(ms / 50)), f0 = c.frames(), r0 = performance.now();
      setTimeout(function () {
        var c2 = clock(); if (!c2) return;
        var fps = Math.max(1, (c2.frames() - f0) / ((performance.now() - r0) / 1000));
        var speed = Math.min(4, Math.max(0.05, (ms / 1000) / (need / fps)));
        var v0 = c2.now(), g0 = c2.frames(), t0 = Date.now();
        c2.set(false, speed);
        var iv = setInterval(function () {
          var cc = clock();
          if (!cc) { clearInterval(iv); return; }
          if ((cc.now() - v0 >= ms && cc.frames() - g0 >= need) || Date.now() - t0 > 30000) { clearInterval(iv); cc.__stepMs = cc.now() - v0; if (then) then(); apply(); }
        }, 30);
      }, 400);
    }
    bFwd.onclick = function () { var c = clock(); if (!c) return; st.userPaused = true; ppLabel(); spin(true); apply(); runFor(350); };
    bBack.onclick = function () {
      var c = clock(); if (!c) return;
      var target = Math.max(0, c.now() - st.t0 - 350);
      st.userPaused = true; ppLabel(); spin(true);
      replayClick(); st.t0 = c.now();
      if (target <= 0) { apply(); return; }
      apply(); runFor(target);
    };
    bRes.onclick = function () { release(); st.userPaused = false; st.speed = 1; sel.value = "1"; ppLabel(); activate(); };
    bFull.onclick = function () {
      var f = fig.requestFullscreen || fig.webkitRequestFullscreen;
      if (f) { try { var r = f.call(fig); if (r && r.catch) r.catch(function () {}); } catch (e) {} }
    };

    // ----- lifecycle -----
    function activate() {
      if (st.frame) return;
      var f = document.createElement("iframe");
      f.className = "tb-frame"; f.title = title; f.setAttribute("allowfullscreen", "");
      var html = getLab().replace("<head>", function () { return "<head>" + CLOCK + "<script>try{location.hash='" + hash + "/embed'}catch(e){}<\/script>"; });
      f.addEventListener("load", function () {
        var c = clock(); st.t0 = c ? c.now() : 0; apply();
        setTimeout(function () {
          var ok = false; try { ok = !!f.contentDocument.querySelector("canvas"); } catch (e) {}
          if (!ok) { fail(); } else { poster.hidden = true; loadBtn.hidden = true; bar.hidden = false; msg.hidden = true; }
        }, 1200);
      });
      f.srcdoc = html;
      st.frame = f; stage.appendChild(f);
      st.lastSeen = Date.now(); live.push(api);
      var extra = live.filter(function (a) { return a !== api && !a.visible(); }).sort(function (a, b) { return a.lastSeen() - b.lastSeen(); });
      while (live.length > MAX_LIVE && extra.length) extra.shift().release();
    }
    function release() {
      if (st.frame) { st.frame.remove(); st.frame = null; }
      var i = live.indexOf(api); if (i >= 0) live.splice(i, 1);
      poster.hidden = false; loadBtn.hidden = false; loadBtn.textContent = "▶ Resume the interactive 3D model"; bar.hidden = true;
    }
    function fail() {
      if (st.frame) { st.frame.remove(); st.frame = null; }
      var i = live.indexOf(api); if (i >= 0) live.splice(i, 1);
      poster.hidden = false; loadBtn.hidden = true; bar.hidden = true;
      msg.textContent = "The interactive 3D model could not start on this device (WebGL may be unavailable). The still image shows the same view.";
      msg.hidden = false;
    }
    var api = { release: release, visible: function () { return st.visible; }, lastSeen: function () { return st.lastSeen; } };
    loadBtn.onclick = function () { activate(); };
    ppLabel();

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          st.visible = e.isIntersecting;
          if (e.isIntersecting) { st.lastSeen = Date.now(); st.sysPaused = false; if (!st.frame && !st.failed) activate(); apply(); }
          else { st.sysPaused = true; apply(); }
        });
      }, { rootMargin: "300px 0px", threshold: 0.01 }).observe(fig);
    }
    fig.__lab = { st: st, activate: activate, release: release, clock: clock };
  }

  document.querySelectorAll("figure.tb-lab").forEach(initLab);
  document.querySelectorAll("a[data-tb-full]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      var f = document.getElementById(a.getAttribute("data-tb-full")); if (!f) return;
      var req = f.requestFullscreen || f.webkitRequestFullscreen;
      if (req) { e.preventDefault(); try { var r = req.call(f); if (r && r.catch) r.catch(function () {}); } catch (x) {} }
    });
  });

  /* ---------------- small non-3D models ---------------- */
  function defectsModel(fig, host) {
    var cv = el("canvas"); cv.width = 520; cv.height = 520; var ctx = cv.getContext("2d");
    var N = 8, mode = fig.dataset["default"] || "vacancy";
    var modes = [["vacancy", "Vacancy"], ["interstitial", "Interstitial"], ["substitution", "Substitution"], ["schottky", "Schottky pair"], ["frenkel", "Frenkel pair"]];
    var row = el("div", "tb-row"), btns = {};
    modes.forEach(function (m) {
      var b = el("button", "tb-btn", m[1]); b.type = "button"; b.setAttribute("aria-pressed", String(m[0] === mode));
      b.onclick = function () { mode = m[0]; Object.keys(btns).forEach(function (k) { btns[k].setAttribute("aria-pressed", "false"); }); b.setAttribute("aria-pressed", "true"); info(); };
      btns[m[0]] = b; row.appendChild(b);
    });
    var out = el("div", "tb-out"); out.setAttribute("aria-live", "polite");
    host.append(row, cv, out);
    var texts = {
      vacancy: "Vacancy: one lattice site is empty. The density falls slightly.",
      interstitial: "Interstitial: an extra atom sits in a hole between lattice sites. The density rises.",
      substitution: "Substitution: a foreign atom replaces a host atom. A charge difference must be compensated.",
      schottky: "Schottky pair: equal numbers of cation and anion vacancies. The density falls and the crystal stays neutral.",
      frenkel: "Frenkel pair: an ion moves from its site into a nearby hole. The density is almost unchanged."
    };
    function info() { out.textContent = texts[mode]; } info();
    var sites = { vacancy: [[3, 3]], substitution: [[4, 4]], schottky: [[2, 5], [5, 2]], frenkel: [[5, 3]] };
    function draw(now) {
      var W = cv.width, pad = 40, step = (W - 2 * pad) / (N - 1); ctx.clearRect(0, 0, W, W);
      var pulse = 0.5 + 0.5 * Math.sin(now / 400), D = sites[mode] || [];
      function hit(i, j) { return D.some(function (d) { return d[0] === i && d[1] === j; }); }
      for (var i = 0; i < N; i++) for (var j = 0; j < N; j++) {
        var x = pad + i * step, y = pad + j * step, sub = mode === "substitution" && hit(i, j);
        var vac = (mode === "vacancy" || mode === "schottky" || mode === "frenkel") && hit(i, j);
        if (vac) { ctx.strokeStyle = "rgba(255,125,155,.9)"; ctx.setLineDash([4, 4]); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, step * 0.28, 0, 6.2832); ctx.stroke(); ctx.setLineDash([]); continue; }
        var g = ctx.createRadialGradient(x - 3, y - 3, 2, x, y, step * 0.28);
        g.addColorStop(0, "#fff"); g.addColorStop(.35, sub ? "#ff7d9b" : "#6ab4ff"); g.addColorStop(1, "rgba(0,0,0,.5)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, step * 0.28, 0, 6.2832); ctx.fill();
      }
      var extra = mode === "interstitial" ? [[3.5, 3.5]] : mode === "frenkel" ? [[5.5, 3.5]] : [];
      extra.forEach(function (p) {
        var x = pad + p[0] * step, y = pad + p[1] * step, r = step * 0.18 * (1 + (reduce ? 0 : 0.1 * pulse));
        var g = ctx.createRadialGradient(x - 2, y - 2, 1, x, y, r);
        g.addColorStop(0, "#fff"); g.addColorStop(.4, "#f0a44a"); g.addColorStop(1, "rgba(0,0,0,.5)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  function packingModel(fig, host) {
    var rows = [["Simple cubic", 52.36, "a = 2r, one atom per cell"], ["Body-centred cubic", 68.02, "√3 a = 4r, two atoms per cell"], ["Face-centred cubic / hcp", 74.05, "√2 a = 4r, four atoms per cell"]];
    rows.forEach(function (r) {
      var b = el("div", "tb-bar-row");
      b.innerHTML = '<div class="tb-bar-lab"><span>' + r[0] + '</span><span>' + r[1].toFixed(2) + '%</span></div><div class="tb-track"><div class="tb-fill" data-w="' + r[1] + '"></div></div><div class="tb-small">' + r[2] + '</div>';
      host.appendChild(b);
    });
    var set = function (f) { f.style.width = f.dataset.w + "%"; };
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { set(e.target); io.unobserve(e.target); } }); }, { threshold: .3 });
      host.querySelectorAll(".tb-fill").forEach(function (f) { io.observe(f); });
    } else host.querySelectorAll(".tb-fill").forEach(set);
  }

  function radiusModel(fig, host) {
    var R = [[0.155, 0.225, 3, "triangular"], [0.225, 0.414, 4, "tetrahedral"], [0.414, 0.732, 6, "octahedral"], [0.732, 1.0, 8, "cubic"]];
    var cols = ["#8a8577", "#6ab4ff", "#5fd38d", "#ff7d9b"];
    var lab = el("label", "", "Radius ratio r₊ ⁄ r₋"); var rng = el("input"); rng.type = "range"; rng.min = "0.15"; rng.max = "1"; rng.step = "0.01"; rng.value = "0.5"; rng.setAttribute("aria-label", "Radius ratio");
    lab.appendChild(rng);
    var bar = el("div", "tb-ruler"), out = el("div", "tb-out"); out.setAttribute("aria-live", "polite");
    host.append(lab, bar, out);
    var pos = function (x) { return ((x - 0.15) / 0.85) * 100; };
    R.forEach(function (r, i) { var d = el("div", "tb-seg", "CN " + r[2]); d.style.cssText = "left:" + pos(r[0]) + "%;width:" + (pos(r[1]) - pos(r[0])) + "%;background:" + cols[i]; bar.appendChild(d); });
    var mark = el("div", "tb-mark"); bar.appendChild(mark);
    var ticks = el("div", "tb-ticks"); [0.225, 0.414, 0.732].forEach(function (x) { var t = el("span", "", String(x)); t.style.left = pos(x) + "%"; ticks.appendChild(t); }); bar.appendChild(ticks);
    function upd() {
      var v = parseFloat(rng.value); mark.style.left = pos(v) + "%";
      var cur = R.filter(function (r) { return v >= r[0] && v < r[1]; })[0] || R[3];
      out.innerHTML = "r₊ ⁄ r₋ = " + v.toFixed(2) + " → <b>" + cur[3] + "</b> hole, coordination number <b>" + cur[2] + "</b>";
    }
    rng.oninput = upd; upd();
  }

  function densityModel(fig, host) {
    function mk(label, val) { var l = el("label", "", label), i = el("input"); i.type = "number"; i.value = val; i.step = "any"; l.appendChild(i); return [l, i]; }
    var a = mk("Molar mass M (g mol⁻¹)", "55.85"), b = mk("Edge length a (pm)", "287"), c = mk("Atoms per cell Z", "2");
    var out = el("div", "tb-out"); out.setAttribute("aria-live", "polite");
    host.append(a[0], b[0], c[0], out);
    function upd() {
      var m = parseFloat(a[1].value), e = parseFloat(b[1].value), z = parseFloat(c[1].value);
      if (!(m > 0 && e > 0 && z > 0)) { out.textContent = "Enter positive values."; return; }
      var d = (z * m) / (6.022e23 * Math.pow(e * 1e-10, 3));  // 1 pm = 1e-10 cm
      out.innerHTML = "d = Z·M ÷ (N<sub>A</sub>·a³) = (" + z + " × " + m + ") ÷ (6.022×10²³ × (" + e + "×10⁻¹⁰ cm)³) = <b>" + d.toFixed(3) + " g cm⁻³</b>";
    }
    [a[1], b[1], c[1]].forEach(function (i) { i.addEventListener("input", upd); }); upd();
  }

  var MODELS = { defects: defectsModel, packing: packingModel, radius: radiusModel, density: densityModel };
  document.querySelectorAll("figure.tb-w[data-widget]").forEach(function (fig) {
    var f = MODELS[fig.dataset.widget], host = fig.querySelector(".tb-host");
    if (f && host) f(fig, host);
  });

  /* ---------------- full-text search ---------------- */
  var box = document.getElementById("tb-q"), res = document.getElementById("tb-res");
  if (box && res) {
    var items = [], ctxHead = "";
    document.querySelectorAll("h2, h3, h4, p, li, td, figcaption").forEach(function (n) {
      if (n.closest(".tb-search")) return;
      var t = (n.textContent || "").replace(/\s+/g, " ").trim();
      if (!t) return;
      if (/^H[234]$/.test(n.tagName)) { ctxHead = t; if (!n.id) n.id = "tb-h-" + items.length; }
      items.push({ node: n, text: t, low: t.toLowerCase(), head: ctxHead });
    });
    var timer = null;
    box.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        var q = box.value.trim().toLowerCase(); res.innerHTML = "";
        if (q.length < 3) return;
        var hits = items.filter(function (it) { return it.low.indexOf(q) >= 0; });
        var shown = hits.slice(0, 40);
        var sum = el("div", "tb-sum", hits.length + (hits.length === 1 ? " match" : " matches") + (hits.length > shown.length ? " (first 40 shown)" : ""));
        res.appendChild(sum);
        shown.forEach(function (it) {
          var a = el("a"); a.href = "#";
          var i = it.low.indexOf(q), s = Math.max(0, i - 40), e = Math.min(it.text.length, i + q.length + 70);
          var small = el("small", "", it.head.slice(0, 70));
          a.appendChild(small); a.appendChild(document.createElement("br"));
          a.appendChild(document.createTextNode((s ? "…" : "") + it.text.slice(s, e) + (e < it.text.length ? "…" : "")));
          a.onclick = function (ev) { ev.preventDefault(); it.node.scrollIntoView({ block: "center" }); it.node.classList.add("tb-hit"); setTimeout(function () { it.node.classList.remove("tb-hit"); }, 2500); };
          res.appendChild(a);
        });
        if (!hits.length) res.appendChild(el("div", "tb-sum", "No match. Try another word."));
      }, 160);
    });
  }
})();
