'use strict';
/* ============================================================
   UI shell: navigation, controls, live readings, learning tabs
   ============================================================ */
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const store = (() => { try { const k = '__c10lab'; localStorage.setItem(k, '1'); localStorage.removeItem(k); return localStorage; } catch (e) { const m = {}; return { getItem: k => (k in m ? m[k] : null), setItem: (k, v) => { m[k] = String(v); }, removeItem: k => { delete m[k]; } }; } })();
const jget = (k, d) => { try { const v = store.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
const jset = (k, v) => { try { store.setItem(k, JSON.stringify(v)); } catch (e) { } };

const SCENES = (typeof SCENES_REG !== 'undefined') ? SCENES_REG : {};
const ACTS = ACTIVITIES.map((a, i) => Object.assign({ idx: i }, a, EXTRA[a.id] || {}));
const CHAPS = []; ACTS.forEach(a => { let ch = CHAPS.find(x => x.id === a.chapter); if (!ch) { ch = { id: a.chapter, name: a.chapterTitle, subject: a.subject, acts: [] }; CHAPS.push(ch); } ch.acts.push(a); });
const SUBJ_COL = { Chemistry: '#0891b2', Biology: '#059669', Physics: '#7c3aed' };

const S = { act: null, scene: null, t: 0, u: 0, v: 0, stage: 0, dt: 0, playing: true, auto: false, speed: 1, micro: false, tab: 0, filter: 'All', q: '', ctrl: null, done: jget('c10.done', {}), rec: jget('c10.rec', {}), notes: jget('c10.notes', {}), quiz: {} };

/* ---------- canvas ---------- */
const canvas = $('sim'), cx = canvas.getContext('2d');
let scaleF = 1, offX = 0, offY = 0;
function sizeCanvas() {
  const r = canvas.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = Math.max(2, Math.round(r.width * dpr)); canvas.height = Math.max(2, Math.round(r.height * dpr));
  scaleF = Math.min(canvas.width / W, canvas.height / H); offX = (canvas.width - W * scaleF) / 2; offY = (canvas.height - H * scaleF) / 2;
}
new ResizeObserver(sizeCanvas).observe($('canvasWrap')); sizeCanvas();

/* ---------- control config ---------- */
function ctrlFor(a, stage) {
  const base = Object.assign({}, a.control), sc = SCENES[a.scene] || {};
  const o = typeof sc.control === 'function' ? sc.control(stage) : sc.control; if (o) Object.assign(base, o);
  if (base.value == null) base.value = base.min; base.step = base.step || 1; return base;
}
function fmtCtrl(v, c) { const f = c.fmt ? c.fmt(v) : (Math.abs(c.step) < 1 ? fix(v, String(c.step).split('.')[1]?.length || 1) : String(Math.round(v))); return f + (c.unit && c.unit !== 'mode' && c.unit !== 'type' && c.unit !== 'wire' && c.unit !== 'metal' && c.unit !== 'sample' && c.unit !== 'station' && c.unit !== 'test' && c.unit !== 'rate' && c.unit !== 'v' && !c.fmt ? ' ' + c.unit : ''); }

/* ---------- load an activity ---------- */
function load(id, push = true) {
  const a = ACTS.find(x => x.id === id) || ACTS[0]; S.act = a; S.scene = SCENES[a.scene] || null;
  S.stage = 0; S.t = 0; S.auto = false; S.micro = false; S.tab = 0; S.quiz = {};
  document.body.dataset.subject = a.subject;
  setCtrl(true); renderHead(); renderStageTabs(); renderTabs(); renderNav(); renderEq(); lastReadKey = '';
  if (push) { try { history.replaceState(null, '', '#' + a.id); } catch (e) { } }
  store.setItem('c10.last', a.id); $('main').scrollTop = 0; window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  $('app').classList.remove('nav-open');
}
function setCtrl(reset) {
  S.vf = undefined; const c = S.ctrl = ctrlFor(S.act, S.stage), el = $('ctrl');
  el.min = c.min; el.max = c.max; el.step = c.step; if (reset) S.v = c.value; S.v = clamp(S.v, c.min, c.max); el.value = S.v;
  $('ctrlLabel').textContent = c.label; $('ctrlMin').textContent = fmtCtrl(c.min, c); $('ctrlMax').textContent = fmtCtrl(c.max, c);
  syncCtrl();
}
function syncCtrl() { const c = S.ctrl; S.u = (S.v - c.min) / (c.max - c.min || 1); $('ctrl').value = S.v; $('ctrlVal').textContent = fmtCtrl(S.v, c); $('runBtn').textContent = S.auto ? '… Running' : (S.u >= .999 ? '↻ Replay' : '▶ Run experiment'); }

function renderHead() {
  const a = S.act; $('crumb').innerHTML = `Class 10 · Science · <b>${esc(a.subject)}</b> · ${esc(a.chapter)} ${esc(a.chapterTitle)}`;
  $('eyebrow').textContent = `Experiment ${a.id}`; $('title').textContent = a.title; $('aim').textContent = a.aim || a.concept;
  $('subjectTag').textContent = a.subject; $('microBtn').style.display = S.scene && S.scene.micro ? '' : 'none'; $('microBtn').classList.remove('on');
  syncDone(); document.title = `${a.title} · Class 10 Science Lab`;
}
function syncDone() { const b = $('doneBtn'), d = !!S.done[S.act.id]; b.classList.toggle('is', d); b.textContent = d ? '✓ Completed' : 'Mark completed'; const n = Object.keys(S.done).filter(k => S.done[k]).length; $('progFill').style.width = (n / ACTS.length * 100) + '%'; $('progText').textContent = `${n} / ${ACTS.length} completed`; }
function renderStageTabs() {
  const st = (S.scene && S.scene.stages) || [], el = $('stageTabs'); el.innerHTML = '';
  st.forEach((n, i) => { const b = document.createElement('button'); b.textContent = n; b.className = i === S.stage ? 'on' : ''; b.setAttribute('role', 'tab'); b.onclick = () => { S.stage = i; S.auto = false; S.t = 0; setCtrl(true); renderStageTabs(); renderEq(); }; el.appendChild(b); });
  el.style.display = st.length > 1 ? '' : 'none';
}
function renderEq() {
  const a = S.act, parts = String(a.equation || '').split(/\s*;\s*/).filter(Boolean), st = (S.scene && S.scene.stages) || [];
  const list = (st.length > 1 && parts.length === st.length) ? [parts[S.stage]] : parts; $('eqBox').innerHTML = list.map(p => `<div>${esc(p)}</div>`).join('');
}

/* ---------- navigation ---------- */
function renderNav() {
  const nav = $('nav'), q = S.q.trim().toLowerCase(); nav.innerHTML = '';
  CHAPS.forEach(ch => {
    if (S.filter !== 'All' && ch.subject !== S.filter) return;
    const items = ch.acts.filter(a => !q || (a.title + ' ' + a.chapterTitle + ' ' + a.subject + ' ' + a.id).toLowerCase().includes(q)); if (!items.length) return;
    const open = q || ch.acts.includes(S.act); const d = document.createElement('div'); d.className = 'ch' + (open ? ' open' : '');
    const nd = ch.acts.filter(a => S.done[a.id]).length;
    d.innerHTML = `<button><span><i class="dot" style="background:${SUBJ_COL[ch.subject]}"></i>${esc(ch.id)} ${esc(ch.name)}</span><em>${nd}/${ch.acts.length}</em></button><ul>${items.map(a => `<li><button data-id="${a.id}" class="${a === S.act ? 'on' : ''}"><span class="id">${esc(a.id)}</span><span>${esc(a.title)}</span>${S.done[a.id] ? '<span class="tick">✓</span>' : ''}</button></li>`).join('')}</ul>`;
    d.firstChild.onclick = () => d.classList.toggle('open'); d.querySelectorAll('li button').forEach(b => b.onclick = () => load(b.dataset.id)); nav.appendChild(d);
  });
  if (!nav.children.length) nav.innerHTML = '<p class="empty" style="color:#7f90ab;padding:8px">No experiments match.</p>';
  const on = nav.querySelector('button.on'); if (on && !q) on.scrollIntoView({ block: 'nearest' });
}
$('chips').innerHTML = ['All', 'Chemistry', 'Biology', 'Physics'].map(s => `<button data-s="${s}" class="${s === 'All' ? 'on' : ''}">${s}</button>`).join('');
$('chips').onclick = e => { const b = e.target.closest('button'); if (!b) return; S.filter = b.dataset.s; [...$('chips').children].forEach(x => x.classList.toggle('on', x === b)); renderNav(); };
$('search').oninput = e => { S.q = e.target.value; renderNav(); };
const go = d => { const i = (S.act.idx + d + ACTS.length) % ACTS.length; load(ACTS[i].id); };
$('prevBtn').onclick = () => go(-1); $('nextBtn').onclick = () => go(1);
$('menuBtn').onclick = () => $('app').classList.toggle('nav-open'); $('scrim').onclick = () => $('app').classList.remove('nav-open');
$('doneBtn').onclick = () => { S.done[S.act.id] = !S.done[S.act.id]; jset('c10.done', S.done); syncDone(); renderNav(); };
$('themeBtn').onclick = () => { const cur = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'); const n = cur === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = n; store.setItem('c10.theme', n); };
{ const th = store.getItem('c10.theme'); if (th) document.documentElement.dataset.theme = th; }

/* ---------- transport ---------- */
$('ctrl').oninput = e => { S.v = parseFloat(e.target.value); S.vf = undefined; S.auto = false; syncCtrl(); };
$('runBtn').onclick = () => { if (S.u >= .999) { S.v = S.ctrl.min; } S.vf = S.v; S.auto = true; S.playing = true; $('pauseBtn').textContent = '❚❚ Pause'; syncCtrl(); };
$('pauseBtn').onclick = () => { S.playing = !S.playing; $('pauseBtn').textContent = S.playing ? '❚❚ Pause' : '▶ Resume'; };
$('resetBtn').onclick = () => { S.auto = false; S.t = 0; setCtrl(true); };
$('speed').onchange = e => { S.speed = parseFloat(e.target.value); };
$('microBtn').onclick = () => { S.micro = !S.micro; $('microBtn').classList.toggle('on', S.micro); };
$('snapBtn').onclick = () => { canvas.toBlob(b => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = `experiment-${S.act.id}.png`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); }); };
$('fsBtn').onclick = () => { const el = document.querySelector('.stage-card'); if (document.fullscreenElement) document.exitFullscreen(); else if (el.requestFullscreen) el.requestFullscreen(); };
document.addEventListener('keydown', e => {
  const tg = e.target.tagName; if (/INPUT|TEXTAREA|SELECT/.test(tg) && e.target.type !== 'range') return; if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.key === 'ArrowRight') go(1); else if (e.key === 'ArrowLeft') go(-1); else if (e.key === ' ' && tg !== 'BUTTON') { e.preventDefault(); $('pauseBtn').click(); } else if (e.key === 'r' || e.key === 'R') $('recBtn').click();
});

/* ---------- live readings ---------- */
let lastReadKey = '', lastReadT = 0, lastInfo = { obs: '', read: [] };
function updateInfo(force) {
  const sc = S.scene; const info = sc && sc.info ? sc.info(sceneState()) : { obs: S.act.observation, read: [] }; lastInfo = info;
  const now = performance.now(); if (!force && now - lastReadT < 90) return; lastReadT = now;
  const key = info.read.map(r => r[0]).join('|');
  if (key !== lastReadKey) { lastReadKey = key; $('reads').innerHTML = info.read.map((r, i) => `<div class="read"><small>${esc(r[0])}</small><b id="rd${i}"></b></div>`).join('') || '<div class="empty">Move the control to see readings.</div>'; }
  info.read.forEach((r, i) => { const e = $('rd' + i); if (e) { const h = `${esc(r[1])}${r[2] ? `<i>${esc(r[2])}</i>` : ''}`; if (e.dataset.h !== h) { e.dataset.h = h; e.innerHTML = h; } } });
  if ($('liveObs').textContent !== info.obs) $('liveObs').textContent = info.obs;
}
function sceneState() { S.u = (S.v - S.ctrl.min) / (S.ctrl.max - S.ctrl.min || 1); return { t: S.t, u: S.u, v: S.v, stage: S.stage, dt: S.dt, min: S.ctrl.min, max: S.ctrl.max, W, H }; }
$('recBtn').onclick = () => {
  const r = S.rec[S.act.id] = S.rec[S.act.id] || { head: [], rows: [] }; r.head = [S.ctrl.label, ...lastInfo.read.map(x => x[0] + (x[2] ? ` (${x[2]})` : ''))];
  const sn = (S.scene && S.scene.stages && S.scene.stages.length > 1) ? S.scene.stages[S.stage] : null; r.stage = sn;
  r.rows.push([(sn ? sn + ' · ' : '') + fmtCtrl(S.v, S.ctrl), ...lastInfo.read.map(x => x[1])]); if (r.rows.length > 60) r.rows.shift(); jset('c10.rec', S.rec);
  const b = $('recBtn'); b.textContent = '✓ Recorded'; setTimeout(() => { b.textContent = '＋ Record'; }, 900); if (S.tab === 2) renderTabs(true);
};

/* ---------- main loop ---------- */
let last = performance.now();
function frame(ts) {
  const dt = Math.min(.05, (ts - last) / 1000); last = ts; S.dt = S.playing ? dt * S.speed : 0;
  if (S.playing) { S.t += S.dt; if (S.auto) { const dur = (S.scene && S.scene.dur) || 9; S.vf = (S.vf ?? S.v) + (S.ctrl.max - S.ctrl.min) / dur * S.dt; if (S.vf >= S.ctrl.max) { S.vf = S.ctrl.max; S.auto = false; } const st = S.ctrl.step; S.v = clamp(Math.round(S.vf / st) * st, S.ctrl.min, S.ctrl.max); syncCtrl(); } }
  cx.setTransform(1, 0, 0, 1, 0, 0); cx.fillStyle = '#e9eff6'; cx.fillRect(0, 0, canvas.width, canvas.height);
  cx.setTransform(scaleF, 0, 0, scaleF, offX, offY); cx.save(); cx.beginPath(); cx.rect(0, 0, W, H); cx.clip();
  const sc = S.scene; const ss = sceneState();
  try {
    if (sc && sc.draw) { sc.draw(cx, ss); flushTags(cx); if (S.micro && sc.micro) sc.micro(cx, ss); }
    else { labBG(cx); text(cx, 'Scene not available', W / 2, H / 2, { size: 22 }); }
  } catch (err) { TAGS = []; console.error(S.act.id, err); text(cx, 'Animation error: ' + err.message, W / 2, 40, { col: '#b91c1c', size: 13 }); }
  cx.restore(); updateInfo(false); requestAnimationFrame(frame);
}

/* ---------- learning tabs ---------- */
const TABS = ['Aim & theory', 'Procedure', 'Observations', 'Viva & practice', 'Real life', 'Notebook'];
function renderTabs(keep) {
  const tb = $('tabs'); tb.innerHTML = TABS.map((n, i) => `<button role="tab" class="${i === S.tab ? 'on' : ''}" data-i="${i}">${n}</button>`).join(''); tb.querySelectorAll('button').forEach(b => b.onclick = () => { S.tab = +b.dataset.i; renderTabs(); });
  const a = S.act, body = $('tabBody'); body.innerHTML = [tabTheory, tabProc, tabObs, tabViva, tabReal, tabNotes][S.tab](a); bindTab(a);
}
const list = (arr, ordered) => arr && arr.length ? `<${ordered ? 'ol' : 'ul'}>${arr.map(x => `<li>${x}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>` : '';
function tabTheory(a) {
  return `<div class="grid2"><div><h3>Aim</h3><p>${a.aim || esc(a.concept)}</p><h3>Core concept</h3><p>${esc(a.concept)}</p>${a.theory ? `<h3>Theory in depth</h3>${list(a.theory)}` : ''}${a.fact ? `<div class="callout"><b class="t">Did you know?</b>${a.fact}</div>` : ''}</div>
  <div><h3>Apparatus &amp; chemicals</h3><p>${esc(a.apparatus)}</p>${a.keyterms ? `<h3>Key terms</h3>${list(a.keyterms)}` : ''}${a.formulae ? `<h3>Formulae &amp; laws</h3>${list(a.formulae)}` : ''}<div class="callout warn"><b class="t">Safety</b>${esc(a.safety)}</div></div></div>`;
}
function tabProc(a) {
  const steps = a.procedure || a.steps || []; return `<h3>Step-by-step procedure</h3><ol class="steps">${steps.map(s => `<li>${s}</li>`).join('')}</ol>${a.precautions ? `<h3>Precautions</h3>${list(a.precautions)}` : ''}${a.mistakes ? `<div class="callout bad"><b class="t">Common mistakes</b>${list(a.mistakes)}</div>` : ''}`;
}
function tabObs(a) {
  const t = a.table, r = S.rec[a.id];
  const exp = t ? `<h3>Expected observation table</h3><div class="tbl-wrap"><table class="t"><thead><tr>${t.head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${t.rows.map(rw => `<tr>${rw.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : '';
  const mine = r && r.rows.length ? `<div class="tbl-wrap"><table class="t"><thead><tr><th>#</th>${r.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${r.rows.map((rw, i) => `<tr><td>${i + 1}</td>${rw.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="row"><button class="btn" id="csvBtn">Download CSV</button><button class="btn ghost" id="clrRec">Clear readings</button></div>` : `<p class="empty">No readings yet. Use the slider, then press <b>＋ Record</b> beside <i>Live readings</i> (or the R key) to log the instrument values here. Record 4–5 points to see the trend.</p>`;
  return `<div class="grid2"><div>${exp}<h3>Observation</h3><p>${esc(a.observation)}</p>${a.result ? `<div class="callout"><b class="t">Result / conclusion</b>${a.result}</div>` : ''}</div><div><h3>Your recorded readings</h3>${mine}</div></div>`;
}
function tabViva(a) {
  const qa = (arr, mk) => arr && arr.length ? arr.map(x => `<details class="qa"><summary><span>${x[0]}</span>${mk ? `<span class="m">${x[2] || ''}</span>` : ''}</summary><div>${x[1]}</div></details>`).join('') : '';
  return `<div class="grid2"><div>${practiceHTML(a)}</div><div>${a.viva ? `<h3>Viva voce <small style="color:var(--mute)">(tap to reveal)</small></h3>${qa(a.viva)}` : ''}${a.board ? `<h3>Board-style questions</h3>${qa(a.board, 1)}` : ''}</div></div>`;
}
function tabReal(a) {
  return `${a.apps ? `<h3>Where this matters in real life</h3><div class="tag-apps">${a.apps.map(x => `<div class="app-card"><b>${x[0]}</b>${x[1]}</div>`).join('')}</div>` : '<p class="empty">—</p>'}${a.link ? `<div class="callout"><b class="t">Exam link</b>${a.link}</div>` : ''}`;
}
function noteTemplate(a) { return `EXPERIMENT ${a.id}: ${a.title}\n\nAIM:\n${(a.aim || a.concept || '').replace(/<[^>]+>/g, '')}\n\nAPPARATUS:\n${a.apparatus}\n\nOBSERVATIONS:\n(write what you observed here)\n\nRESULT:\n\nPRECAUTIONS:\n${(a.precautions || []).map(x => '- ' + x.replace(/<[^>]+>/g, '')).join('\n')}\n`; }
function tabNotes(a) {
  const v = S.notes[a.id] ?? noteTemplate(a); return `<h3>Practical notebook <small id="saved" style="color:var(--ok);opacity:0;transition:.3s;font-size:12px;margin-left:8px">saved ✓</small></h3><textarea class="notes" id="notes" spellcheck="false">${esc(v)}</textarea><div class="row"><button class="btn primary" id="dlNotes">Download notebook (.txt)</button><button class="btn" id="printRec">Print practical record</button><button class="btn ghost" id="resetNotes">Reset template</button><span id="wc" style="font-size:12px;color:var(--mute)"></span></div>`;
}
function bindTab(a) {
  if (S.tab === 2) { const c = $('csvBtn'); if (c) c.onclick = () => { const r = S.rec[a.id]; const csv = [['#', ...r.head], ...r.rows.map((x, i) => [i + 1, ...x])].map(x => x.map(y => `"${String(y).replace(/"/g, '""')}"`).join(',')).join('\n'); dl(`experiment-${a.id}-readings.csv`, csv, 'text/csv'); }; const k = $('clrRec'); if (k) k.onclick = () => { delete S.rec[a.id]; jset('c10.rec', S.rec); renderTabs(); }; }
  if (S.tab === 3) bindPractice(a);
  if (S.tab === 5) {
    const n = $('notes'), wc = () => { const w = n.value.trim().split(/\s+/).filter(Boolean).length; $('wc').textContent = w + ' words'; }; wc(); let tm;
    n.oninput = () => { wc(); clearTimeout(tm); tm = setTimeout(() => { S.notes[a.id] = n.value; jset('c10.notes', S.notes); const s = $('saved'); if (s) { s.style.opacity = 1; setTimeout(() => s.style.opacity = 0, 900); } }, 400); };
    $('dlNotes').onclick = () => dl(`experiment-${a.id}-notebook.txt`, n.value, 'text/plain'); $('resetNotes').onclick = () => { delete S.notes[a.id]; jset('c10.notes', S.notes); renderTabs(); };
    $('printRec').onclick = () => printRecord(a, n.value);
  }
}
function dl(name, data, type) { const b = new Blob([data], { type }), u = URL.createObjectURL(b), l = document.createElement('a'); l.href = u; l.download = name; l.click(); setTimeout(() => URL.revokeObjectURL(u), 2000); }
function printRecord(a, notes) {
  let p = $('printArea'); if (!p) { p = document.createElement('div'); p.id = 'printArea'; p.className = 'print-only'; document.body.appendChild(p); }
  const r = S.rec[a.id], t = a.table;
  p.innerHTML = `<h1 style="font-size:22px">Practical record — Experiment ${esc(a.id)}</h1><h2 style="font-size:17px;margin:4px 0 12px">${esc(a.title)}</h2><h3>Aim</h3><p>${a.aim || esc(a.concept)}</p><h3>Apparatus</h3><p>${esc(a.apparatus)}</p><h3>Procedure</h3>${list(a.procedure || a.steps, 1)}${t ? `<h3>Observation table</h3><table class="t"><thead><tr>${t.head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${t.rows.map(rw => `<tr>${rw.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table>` : ''}${r && r.rows.length ? `<h3>My recorded readings</h3><table class="t"><thead><tr>${r.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${r.rows.map(rw => `<tr>${rw.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table>` : ''}<h3>Result</h3><p>${a.result || esc(a.observation)}</p><h3>Precautions</h3>${list(a.precautions || [esc(a.safety)])}<h3>Student notes</h3><pre style="white-space:pre-wrap;font:13px system-ui">${esc(notes)}</pre>`;
  window.print();
}

/* ---------- boot ---------- */
const startId = (location.hash || '').replace('#', '') || store.getItem('c10.last') || ACTS[0].id;
window.addEventListener('hashchange', () => { const id = location.hash.replace('#', ''); if (id && id !== S.act.id && ACTS.some(x => x.id === id)) load(id, false); });
load(ACTS.some(x => x.id === startId) ? startId : ACTS[0].id, false);
requestAnimationFrame(frame);
window.__lab = { S, ACTS, SCENES, load };
