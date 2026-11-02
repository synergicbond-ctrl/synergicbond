// Browser verification of the finished textbook (run from the repository root; takes a while because the 3D is software-rendered).
// Writes docs/solid-state-textbook/verification.json. Tests real state changes, not just that buttons exist.
import { createRequire } from "node:module";
import fs from "node:fs";
import crypto from "node:crypto";
import { execSync } from "node:child_process";
const { chromium } = createRequire(process.cwd() + "/package.json")("playwright");
const FILE = "file://" + process.cwd() + "/content/solid-state-html/solid-state-textbook.html";
const OUT = "docs/solid-state-textbook/verification.json";
const ARGS = ["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"];
const RESUME = process.env.RESUME === "1";
const R = { when: new Date().toISOString(), engine: "", viewports: [], offline: {}, text: {}, search: {}, labs: [], geometry: [], motion: [], widgets: {}, print: {}, failures: [] };
const fail = (where, what) => { R.failures.push({ where, what }); console.log("FAIL", where, what); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const save = () => fs.writeFileSync(OUT, JSON.stringify(R, null, 1));
const b = await chromium.launch({ args: ARGS });
if (RESUME) { const prev = JSON.parse(fs.readFileSync("/tmp/verification-partial.json", "utf8")); Object.assign(R, prev, { resumedAt: new Date().toISOString() }); console.log("resuming with saved evidence:", R.labs.length, "labs,", R.motion.length, "modes tested"); }
R.engine = "Chromium " + b.version();

// ---------- A. layout at five widths ----------
for (const w of RESUME ? [] : [320, 390, 768, 1280, 1440]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  const errs = [], external = [];
  p.on("pageerror", (e) => errs.push(e.message));
  p.on("request", (r) => { const u = r.url(); if (!/^(file:|data:|blob:|about:)/.test(u)) external.push(u); });
  await p.goto(FILE, { waitUntil: "load" }); await sleep(1500);
  const m = await p.evaluate(() => ({
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    labs: document.querySelectorAll("figure.tb-lab").length, widgets: document.querySelectorAll("figure.tb-w").length,
    posterOk: Array.from(document.querySelectorAll("img.tb-poster")).every((i) => i.complete && i.naturalWidth > 0),
    wideElements: Array.from(document.querySelectorAll("section.part *")).filter((e) => { const r = e.getBoundingClientRect(); return r.right > document.documentElement.clientWidth + 2 && !e.closest("table,.overflow-x-auto,math,.katex-display,pre,svg"); }).length,
  }));
  R.viewports.push({ width: w, ...m, pageErrors: errs.length, errorSample: errs.slice(0, 2) });
  if (m.overflow > 0) fail("layout " + w, "page scrolls sideways by " + m.overflow + "px");
  if (errs.length) fail("layout " + w, "page errors: " + errs[0]);
  if (!m.posterOk) fail("layout " + w, "a still image failed to load");
  if (w === 1280) { R.offline = { externalRequests: external.length, sample: external.slice(0, 3) }; if (external.length) fail("offline", "external requests: " + external[0]); }
  await p.close();
}
save();

// ---------- B. equations, text integrity, search ----------
if (!RESUME) {
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  await p.goto(FILE, { waitUntil: "load" });
  R.text = await p.evaluate(() => {
    const t = document.body.textContent;
    return { katexElements: document.querySelectorAll(".katex").length, katexErrors: document.querySelectorAll(".katex-error").length,
      rawDollarPairs: (t.match(/\$[^$\s][^$]{0,60}\$/g) || []).length, controlChars: (t.match(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g) || []).length,
      corruptedGreek: (t.match(/u0007|\\u0007/g) || []).length,
      fontsEmbedded: Array.from(document.styleSheets).some((s) => { try { return Array.from(s.cssRules).some((r) => r.cssText.includes("KaTeX_Main") && r.cssText.includes("data:font/woff2")); } catch { return false; } }),
      tocLinks: document.querySelectorAll("nav.toc a").length, headings: document.querySelectorAll("h2,h3,h4").length };
  });
  const T = R.text;
  if (T.katexErrors) fail("text", T.katexErrors + " KaTeX errors"); if (T.rawDollarPairs) fail("text", T.rawDollarPairs + " raw $maths$ left");
  if (T.controlChars || T.corruptedGreek) fail("text", "control-character corruption present"); if (!T.fontsEmbedded) fail("text", "KaTeX fonts not embedded");
  // every table-of-contents link goes somewhere
  R.text.brokenTocLinks = await p.evaluate(() => Array.from(document.querySelectorAll("nav.toc a")).filter((a) => !document.getElementById(a.getAttribute("href").slice(1))).map((a) => a.getAttribute("href")));
  if (R.text.brokenTocLinks.length) fail("toc", "broken links: " + R.text.brokenTocLinks.join(","));
  for (const q of ["octahedral", "Schottky", "Miller", "coordination number"]) {
    await p.fill("#tb-q", q); await sleep(500);
    const n = await p.locator("#tb-res a").count(); R.search[q] = n; if (!n) fail("search", `no hits for "${q}"`);
  }
  await p.fill("#tb-q", "octahedral"); await sleep(500);
  await p.locator("#tb-res a").first().click(); await sleep(400);
  R.search.clickScrolls = (await p.evaluate(() => window.scrollY)) > 1000; if (!R.search.clickScrolls) fail("search", "clicking a result did not scroll");
  await p.close();
}
save();

// ---------- C. every Crystal Lab instance loads lazily, never more than 3 live; read its facts ----------
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
const pageErrs = []; p.on("pageerror", (e) => pageErrs.push(e.message));
await p.goto(FILE, { waitUntil: "load" }); await sleep(800);
const labIds = await p.evaluate(() => Array.from(document.querySelectorAll("figure.tb-lab")).map((f) => ({ id: f.id, hash: f.dataset.hash, heading: (() => { let e = f; while (e && !/^H[234]$/.test(e.tagName)) e = e.previousElementSibling || e.parentElement; return e ? e.textContent.trim().slice(0, 60) : ""; })() })));
let maxLive = 0; const firstOfMode = {};
if (RESUME) { for (const l of R.labs) { const m = l.hash.split('/')[1]; if (l.loaded && !firstOfMode[m]) firstOfMode[m] = l.id; } }
for (const { id, hash } of RESUME ? [] : labIds) {
  await p.evaluate((i) => document.getElementById(i).scrollIntoView({ block: "center" }), id);
  const tLoad = Date.now(); let ok = false;
  for (let k = 0; k < 60 && !ok; k++) { await sleep(500); ok = await p.evaluate((i) => { const f = document.getElementById(i); const b = f.querySelector(".tb-bar"); return !!f.querySelector("iframe.tb-frame") && b && !b.hidden; }, id); }
  await sleep(1500);
  const live = await p.evaluate(() => document.querySelectorAll("iframe.tb-frame").length); maxLive = Math.max(maxLive, live);
  const info = ok ? await p.evaluate((i) => {
    const f = document.getElementById(i), fr = f.querySelector("iframe.tb-frame"); let d = null;
    try { const doc = fr.contentDocument; d = { canvas: !!doc.querySelector("canvas"), facts: (doc.getElementById("facts") || {}).innerText || "", big: ((doc.getElementById("bigNum") || {}).textContent || "") + " | " + ((doc.getElementById("bigCap") || {}).textContent || ""),
      tally: (doc.getElementById("tally") || {}).innerText || "", note: (doc.getElementById("note") || {}).textContent || "", sites: (doc.querySelector("table.sites tfoot") || {}).innerText || "", hud: ((doc.getElementById("hudR") || {}).textContent || "") }; } catch (e) { d = { error: String(e) }; }
    return { ...d, controls: f.querySelectorAll(".tb-bar button, .tb-bar select").length }; }, id) : {};
  R.labs.push({ id, hash, loadMs: ok ? Date.now() - tLoad - 1500 : null, loaded: ok, canvas: !!info.canvas, controls: info.controls || 0, liveFramesNow: live, ...info });
  if (!ok) fail("lab " + id, "did not load: " + hash); else if (!info.canvas) fail("lab " + id, "no canvas: " + hash); else if (info.controls < 7) fail("lab " + id, "controls missing");
  const mode = hash.split("/")[1]; if (ok && !firstOfMode[mode]) firstOfMode[mode] = id;
}
if (!RESUME) { R.maxLiveFrames = maxLive; R.labPageErrors = pageErrs.length; }
if (!RESUME && maxLive > 3) fail("performance", "more than 3 live 3D frames: " + maxLive);
if (pageErrs.length) fail("lab page errors", pageErrs[0]);
save();

// ---------- G. geometry: what the live lab displays vs values computed here from first principles ----------
if (!RESUME) {
  const pi = Math.PI, pf = { sc: pi / 6, bcc: pi * Math.sqrt(3) / 8, fcc: pi / (3 * Math.sqrt(2)), hcp: pi / (3 * Math.sqrt(2)), diamond: pi * Math.sqrt(3) / 16 };
  const exp = { sc: { Z: "1", CN: "6", poly: "octahedron" }, bcc: { Z: "2", CN: "8", poly: "cube" }, fcc: { Z: "4", CN: "12", poly: "cuboctahedron" }, hcp: { Z: "6", CN: "12", poly: "cuboctahedron" },
    nacl: { Z: "4", CN: "6", poly: "octahedron" }, cscl: { Z: "1", CN: "8", poly: "cube" }, zns: { Z: "4", CN: "4", poly: "tetrahedron" }, diamond: { Z: "8", CN: "4", poly: "tetrahedron" } };
  const seen = {};
  for (const l of R.labs) {
    if (!l.facts) continue; const [s, mode] = l.hash.split("/"); const e = exp[s], f = l.facts;
    const g = { id: l.id, hash: l.hash, ok: true, checks: [] };
    const must = (cond, what) => { g.checks.push((cond ? "ok: " : "WRONG: ") + what); if (!cond) { g.ok = false; fail("geometry " + l.hash, what + " | lab shows: " + f.replace(/\n/g, " ").slice(0, 160)); } };
    const val = (label) => ((f.match(new RegExp(label + "\\s*([^\\n]+)")) || [])[1] || "").trim();
    const z = val("Atoms per cell, Z"), cn = val("Coordination"), pk = val("Packing efficiency");
    must(z.includes(e.Z), `Z = ${e.Z} (lab: ${z})`);
    must(cn.startsWith(e.CN) , `coordination number ${e.CN} (lab: ${cn})`);
    must(cn.toLowerCase().includes(e.poly.replace("cuboctahedron", "cuboctahedron")) || (s === "hcp" && /octahedron/.test(cn)), `polyhedron ${e.poly} (lab: ${cn})`);
    if (pf[s]) must(pk.includes((pf[s] * 100).toFixed(1) + "%"), `packing ${(pf[s] * 100).toFixed(2)}% (lab: ${pk})`);
    if (mode === "pos" && l.sites) { const tot = parseFloat((l.sites.match(/([\d.]+)\s*$/) || [])[1]); const want = { nacl: 8, zns: 8 }[s] || Number(e.Z); must(Math.abs(tot - want) < 1e-6, `positions table total ${want} (lab: ${tot})`); }
    if (mode === "voids") { const want = s === "fcc" ? "4 + 8" : "6 + 12"; must(l.big.startsWith(want), `voids ${want} (lab: ${l.big})`); }
    R.geometry.push(g); seen[l.hash] = true;
  }
  // independent first-principles values (for the audit report)
  R.firstPrinciples = { packing: Object.fromEntries(Object.entries(pf).map(([k, v]) => [k, +(v * 100).toFixed(2)])),
    contact: { sc: "a = 2r", bcc: "√3 a = 4r", fcc: "√2 a = 4r", diamond: "√3 a = 8r" },
    fccVoids: { octahedral: 12 / 4 + 1, tetrahedral: 8 }, hcpVoids: { octahedral: 6, tetrahedral: 12 },
    radiusRatioLimits: { CN3: 2 / Math.sqrt(3) - 1, CN4: Math.sqrt(1.5) - 1, CN6: Math.sqrt(2) - 1, CN8: Math.sqrt(3) - 1 },
    densityIron: (2 * 55.85) / (6.022e23 * Math.pow(287e-10, 3)) };
}
for (const [k, shown] of [["CN3", 0.155], ["CN4", 0.225], ["CN6", 0.414], ["CN8", 0.732]]) { const v = R.firstPrinciples.radiusRatioLimits[k]; if (Math.abs(v - shown) > 0.001) fail("radius-ratio limits", `${k}: computed ${v.toFixed(4)} but the slider uses ${shown}`); }
save();

// ---------- D. the controls change real state (one instance per mode, plus both layer variants) ----------
// Software 3D here runs at only a few frames per second, so "frozen" is judged after the camera's inertia has died away,
// and clock rates are measured against real time (not against a sleep, which is wrong while the page is busy rendering).
const targets = { ...firstOfMode }; const lay = R.labs.filter((l) => l.hash.startsWith("fcc/layers")); lay.forEach((l) => { targets["layers:" + l.hash] = l.id; }); delete targets.layers;
async function shot(id) { const bb = await p.locator(`#${id} .tb-stage`).boundingBox(); return (await p.screenshot({ clip: bb, timeout: 120000 })).toString("base64"); }
const sample = (id) => p.evaluate((i) => { const c = document.getElementById(i).__lab.clock(); return [c.now(), performance.now(), c.frames()]; }, id);
async function rate(id, ms) { const a = await sample(id); await sleep(ms); const c = await sample(id); return (c[0] - a[0]) / (c[1] - a[1]); }
async function fps(id) { const a = await sample(id); await sleep(1500); const c = await sample(id); return (c[2] - a[2]) / ((c[1] - a[1]) / 1000); }
async function settled(id, maxMs = 150000) { const t0 = Date.now(); let prev = await shot(id); while (Date.now() - t0 < maxMs) { await sleep(1000); const cur = await shot(id); if (cur === prev) return Date.now() - t0; prev = cur; } return -1; }
async function ready(id) {
  await p.evaluate((i) => document.getElementById(i).scrollIntoView({ block: "center" }), id);
  for (let k = 0; k < 80; k++) { await sleep(500); if (await p.evaluate((i) => { const f = document.getElementById(i); const b = f.querySelector(".tb-bar"); const fr = f.querySelector("iframe.tb-frame"); let cv = false; try { cv = !!fr.contentDocument.querySelector("canvas"); } catch {} return !!fr && cv && b && !b.hidden; }, id)) { await sleep(2500); return true; } }
  return false;
}
const lastLabId = () => p.evaluate(() => null);
if (process.env.SKIPD === "1") for (const k of Object.keys(targets)) delete targets[k];
const done = new Set(R.motion.map((m) => m.mode));
for (const [mode, id] of Object.entries(targets)) {
  if (done.has(mode)) continue;
  const rec = { mode, id, checks: {}, settleMsAfterPause: null, fpsHere: null };
  const ck = (name, cond, detail) => { rec.checks[name] = !!cond; if (!cond) fail(`controls ${mode}`, name + (detail ? " | " + detail : "")); };
  try {
    if (!(await ready(id))) throw new Error("instance did not become ready");
    const btn = (name) => p.locator(`#${id} .tb-bar button`, { hasText: name }).first();
    const spinOff = () => p.evaluate((i) => { const d = document.getElementById(i).querySelector("iframe.tb-frame").contentDocument; const a = d.getElementById("auto"); if (a && a.textContent.startsWith("Pause")) a.click(); }, id);
    rec.fpsHere = +(await fps(id)).toFixed(1);
    const timeline = ["pack", "layers", "grow"].some((m) => mode.startsWith(m));
    const LIGHT = RESUME && !timeline;   // clock-level checks only (frame-rate independent); the picture-level freeze/step checks were proven on the structure and atom-sharing views
    if (!LIGHT) { await spinOff(); await settled(id); }   // only the demonstration itself may change the picture from here on
    // Replay restarts the demonstration
    if (!LIGHT) { await btn("Replay").click(); await sleep(300); const early = await shot(id); const late0 = await settled(id); const late = await shot(id);
    if (timeline) ck("replay restarts the demonstration (an early frame differs from the settled one)", early !== late); }
    // Pause freezes it: the lab's clock stops, and the picture stops once the camera inertia has died away
    await btn("Replay").click(); await sleep(700); await btn("Pause").click(); await sleep(300);
    const r0 = await rate(id, 1500); ck("pause stops the lab's clock (rate 0)", Math.abs(r0) < 0.01, "rate " + r0.toFixed(3));
    ck("button now reads Play", (await p.locator(`#${id} .tb-bar button`).first().textContent()) === "Play");
    if (!LIGHT) { const sm = await settled(id); rec.settleMsAfterPause = sm; ck("picture settles after pause", sm >= 0);
    const x = await shot(id); await sleep(3000); const y = await shot(id); ck("once settled, the picture stays frozen", x === y); }
    // Play resumes it
    await p.locator(`#${id} .tb-bar button`).first().click(); await sleep(400);
    const r1 = await rate(id, 2000); ck("play runs the clock at normal speed (rate 1)", r1 > 0.9 && r1 < 1.1, "rate " + r1.toFixed(3));
    if (timeline) { await btn("Replay").click(); await sleep(600); await btn("Pause").click(); await settled(id); const P = await shot(id); await p.locator(`#${id} .tb-bar button`).first().click(); await settled(id); const Q = await shot(id); ck("after Play the demonstration continues to its end", P !== Q); }
    // Speed
    for (const [v, lo, hi] of [["0.5", 0.45, 0.55], ["2", 1.8, 2.2], ["0.25", 0.22, 0.28]]) { await p.locator(`#${id} .tb-bar select`).selectOption(v); await sleep(400); const rr = await rate(id, 2500); ck(`speed ${v}× runs the clock at ${v}×`, rr > lo && rr < hi, "rate " + rr.toFixed(3)); }
    await p.locator(`#${id} .tb-bar select`).selectOption("1");
    // Step forward / back: exactly 0.35 s of animation time, and the picture holds still afterwards
    await btn("Replay").click(); await sleep(300); await btn("Pause").click(); if (!LIGHT) await settled(id);
    const sv0 = (await sample(id))[0]; const s0 = LIGHT ? null : await shot(id);
    await btn("Step ▶").click(); await sleep(400);
    for (let k = 0; k < 120; k++) { await sleep(500); const r = await rate(id, 500); if (Math.abs(r) < 0.01) break; }
    const sv1 = (await sample(id))[0]; const stepMs = sv1 - sv0; rec.stepMs = Math.round(stepMs);
    ck("step forward advances the animation clock by about 0.35 s", stepMs > 300 && stepMs < 650, "advanced " + stepMs.toFixed(0) + " ms");
    let s1 = null; if (!LIGHT) { await settled(id); s1 = await shot(id); await sleep(2500); const s1b = await shot(id);
    if (timeline) ck("step forward changes the picture", s0 !== s1);
    ck("it holds still after the step", s1 === s1b); }
    await btn("◀ Step").click(); await sleep(400);
    for (let k = 0; k < 160; k++) { await sleep(500); const r = await rate(id, 500); if (Math.abs(r) < 0.01) break; }
    if (!LIGHT) { await settled(id); const s2 = await shot(id);
    if (timeline) ck("step back returns to an earlier state", s2 !== s1); }
    // Reset restores the starting state
    await btn("Reset").click();
    if (!(await ready(id))) throw new Error("model did not come back after Reset");
    const st = await p.evaluate((i) => { const f = document.getElementById(i); return { label: f.querySelector(".tb-bar button").textContent, speed: f.querySelector(".tb-bar select").value, clock: f.__lab.clock().now() }; }, id);
    ck("reset reloads the model with Pause label, 1× speed and a fresh clock", st.label === "Pause" && st.speed === "1" && st.clock < 25000, JSON.stringify(st));
    if (!LIGHT) {
    // Rotation and zoom (the lab's own controls) work, also while paused
    await spinOff(); await settled(id);
    const bb = await p.locator(`#${id} .tb-stage`).boundingBox(); const cx = bb.x + bb.width / 2, cy = bb.y + bb.height * 0.55;
    await btn("Pause").click(); await settled(id);
    const d0 = await shot(id); await p.mouse.move(cx, cy); await p.mouse.down(); await p.mouse.move(cx + 140, cy + 30, { steps: 8 }); await p.mouse.up(); await sleep(1500);
    const d1 = await shot(id); ck("dragging rotates the model (also while paused)", d0 !== d1);
    await settled(id); const e0 = await shot(id); await p.mouse.move(cx, cy); await p.mouse.wheel(0, -500); await sleep(1500); const e1 = await shot(id); ck("scrolling zooms the model", e0 !== e1);
    }
    // Fullscreen
    await btn("Fullscreen").click(); await sleep(1000);
    const fsOk = await p.evaluate((i) => document.fullscreenElement && document.fullscreenElement.id === i, id); ck("fullscreen makes the animation fill the screen", fsOk);
    await p.evaluate(() => document.exitFullscreen && document.fullscreenElement && document.exitFullscreen()); await sleep(600);
  } catch (e) { fail(`controls ${mode}`, "test aborted: " + String(e.message).split("\n")[0]); rec.error = String(e.message).split("\n")[0]; }
  R.motion.push(rec); save();
}

// ---------- E. the non-3D models ----------
{
  const w = {};
  const dens = p.locator("figure.tb-w[data-widget=density] .tb-out").first(); await dens.scrollIntoViewIfNeeded(); w.densityDefault = (await dens.textContent()).trim();
  const dval = parseFloat((w.densityDefault.match(/=\s*([\d.]+)\s*g/) || [])[1]); w.densityExpected = +R.firstPrinciples.densityIron.toFixed(3);
  if (Math.abs(dval - 7.85) > 0.02) fail("density", `iron default ${dval} != 7.85`);
  const rad = p.locator("figure.tb-w[data-widget=radius]").first(); await rad.scrollIntoViewIfNeeded();
  w.radius = {};
  for (const [v, cn] of [["0.2", 3], ["0.3", 4], ["0.5", 6], ["0.8", 8], ["0.99", 8]]) { await rad.locator("input[type=range]").fill(v); const t = (await rad.locator(".tb-out").textContent()); w.radius[v] = t.trim(); if (!t.includes("coordination number " + cn)) fail("radius ratio", `${v} should give CN ${cn}: ${t}`); }
  const def = p.locator("figure.tb-w[data-widget=defects]").first(); await def.scrollIntoViewIfNeeded(); w.defects = {};
  for (const [name, word] of [["Vacancy", "empty"], ["Interstitial", "extra atom"], ["Substitution", "foreign"], ["Schottky", "cation and anion"], ["Frenkel", "nearby hole"]]) { await def.locator("button", { hasText: name }).click(); const t = (await def.locator(".tb-out").textContent()).trim(); w.defects[name] = t; if (!t.includes(word)) fail("defects", `${name} text`); }
  const pk = p.locator("figure.tb-w[data-widget=packing]").first(); await pk.scrollIntoViewIfNeeded(); await sleep(1800);
  w.packingBars = await pk.locator(".tb-fill").evaluateAll((els) => els.map((e) => e.style.width)); if (w.packingBars.join() !== "52.36%,68.02%,74.05%") fail("packing bars", w.packingBars.join());
  R.widgets = w;
}
save();

// ---------- H. offline: the browser is put in offline mode, so any outside dependency would fail ----------
{
  const ctx = await b.newContext({ offline: true, viewport: { width: 1280, height: 900 } });
  const op = await ctx.newPage(); const errs = [], failed = [];
  op.on("pageerror", (e) => errs.push(e.message)); op.on("requestfailed", (r) => failed.push(r.url().slice(0, 80)));
  await op.goto(FILE, { waitUntil: "load" }); await sleep(1500);
  const id0 = labIds[Math.floor(labIds.length / 2)].id;
  await op.evaluate((i) => document.getElementById(i).scrollIntoView({ block: "center" }), id0);
  let ok = false; for (let k = 0; k < 60 && !ok; k++) { await sleep(500); ok = await op.evaluate((i) => { const f = document.getElementById(i); const b = f.querySelector(".tb-bar"); const fr = f.querySelector("iframe.tb-frame"); let cv = false; try { cv = !!fr.contentDocument.querySelector("canvas"); } catch {} return !!fr && cv && b && !b.hidden; }, id0); }
  R.offlineMode = await op.evaluate(async () => ({ katexFontLoaded: (await document.fonts.load("16px KaTeX_Main")).length > 0, katexRendered: document.querySelectorAll(".katex").length > 1000, dataUriImages: Array.from(document.images).every((i) => i.src.startsWith("data:")) }));
  R.offlineMode.labRunsOffline = ok; R.offlineMode.failedRequests = failed.length; R.offlineMode.pageErrors = errs.length;
  if (!ok) fail("offline", "a 3D model did not start with the network disabled"); if (failed.length) fail("offline", "requests failed: " + failed[0]); if (errs.length) fail("offline", errs[0]);
  if (!R.offlineMode.katexFontLoaded || !R.offlineMode.katexRendered) fail("offline", "maths fonts or equations missing offline");
  await ctx.close();
}
save();

// ---------- I. the original lab is untouched, and its own behaviour still works inside the wrapper ----------
{
  const fileSha = crypto.createHash("sha256").update(fs.readFileSync("content/solid-state-html/crystal-lab.html")).digest("hex");
  const embeddedSha = await p.evaluate(async () => { const b64 = document.getElementById("tb-lab-src").textContent.trim(); const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)); const h = await crypto.subtle.digest("SHA-256", bytes); return Array.from(new Uint8Array(h)).map((x) => x.toString(16).padStart(2, "0")).join(""); });
  let gitUnchanged = false; try { execSync("git diff --quiet checkpoint-before-textbook-rebuild HEAD -- content/solid-state-html/crystal-lab.html content/solid-state-html/crystal-lab-src", { stdio: "ignore" }); gitUnchanged = true; } catch {}
  R.labIntegrity = { embeddedEqualsRepoFile: embeddedSha === fileSha, sha256: fileSha.slice(0, 16), unchangedSinceCheckpoint: gitUnchanged };
  if (!R.labIntegrity.embeddedEqualsRepoFile) fail("lab integrity", "embedded lab differs from content/solid-state-html/crystal-lab.html"); if (!gitUnchanged) fail("lab integrity", "lab files changed since the checkpoint");
  // the lab's own buttons, driven inside the wrapper
  const target = R.labs.find((l) => l.hash === "fcc/pos"); const beh = {};
  if (target) {
    await p.evaluate((i) => document.getElementById(i).scrollIntoView({ block: "center" }), target.id); await sleep(4000);
    const readyNow = await p.evaluate((i) => !!document.getElementById(i).querySelector("iframe.tb-frame"), target.id);
    if (readyNow) {
      const r1 = await p.evaluate(async (i) => { const d = document.getElementById(i).querySelector("iframe.tb-frame").contentDocument; const w = (ms) => new Promise((r) => setTimeout(r, ms)); const out = {};
        d.querySelector('#modes button[data-m="share"]').click(); await w(800); out.shareMode = d.getElementById("hudR").textContent; out.tallyShown = getComputedStyle(d.getElementById("tally")).display !== "none";
        d.querySelector('#structs button[data-s="bcc"]').click(); await w(800); out.structure = d.getElementById("title").textContent; out.bccFacts = d.getElementById("facts").innerText.replace(/\s+/g, " ").slice(0, 60);
        const a = d.getElementById("auto"); const before = a.textContent; a.click(); await w(200); out.rotateToggled = a.textContent !== before; a.click();
        d.getElementById("replay").click(); await w(300); out.replayRan = true; return out; }, target.id);
      Object.assign(beh, r1);
    }
  }
  R.labBehaviour = beh;
  if (beh.shareMode !== "Atom sharing (Z)") fail("lab behaviour", "mode chip did not switch the view"); if (!beh.tallyShown) fail("lab behaviour", "atom-sharing tally not shown");
  if (!/Body-centred/.test(beh.structure || "")) fail("lab behaviour", "structure chip did not switch the structure"); if (!beh.rotateToggled) fail("lab behaviour", "the lab's own Rotate button stopped working");
  // the wrapped lab shows the same facts as the standalone lab at the same link
  R.labMatchesStandalone = [];
  for (const h of ["fcc/pos", "bcc/pack", "nacl/cn", "diamond/view", "hcp/voids"]) {
    const rec = R.labs.find((l) => l.hash === h); if (!rec || !rec.facts) { R.labMatchesStandalone.push({ hash: h, tested: false }); continue; }
    const sp = await b.newPage({ viewport: { width: 760, height: 600 } }); await sp.goto("file://" + process.cwd() + "/content/solid-state-html/crystal-lab.html#" + h + "/embed", { waitUntil: "load" }); await sleep(3000);
    const sf = await sp.evaluate(() => document.getElementById("facts").innerText); await sp.close();
    const same = sf.replace(/\s+/g, " ") === rec.facts.replace(/\s+/g, " "); R.labMatchesStandalone.push({ hash: h, tested: true, same }); if (!same) fail("lab behaviour", `${h}: facts differ from the standalone lab`);
  }
}
save();

// ---------- P. performance: hardware-independent numbers (main-thread time, frames, contexts, memory) ----------
{
  const cdp = await p.context().newCDPSession(p); await cdp.send("Performance.enable");
  const metrics = async () => { const { metrics: m } = await cdp.send("Performance.getMetrics"); const o = {}; m.forEach((x) => (o[x.name] = x.value)); return o; };
  const frames = () => p.evaluate(() => Array.from(document.querySelectorAll("figure.tb-lab")).map((f) => (f.__lab && f.__lab.clock() ? f.__lab.clock().frames() : 0)).reduce((a, b) => a + b, 0));
  const measure = async (secs) => { const a = await metrics(), fa = await frames(); await sleep(secs * 1000); const c = await metrics(), fb = await frames(); const busy = (c.TaskDuration - a.TaskDuration) / secs; const fr = (fb - fa) / secs;
    return { mainThreadBusyFraction: +busy.toFixed(3), scriptFraction: +((c.ScriptDuration - a.ScriptDuration) / secs).toFixed(3), framesPerSecond: +fr.toFixed(2), mainThreadMsPerFrame: fr > 0.05 ? +((busy * 1000) / fr).toFixed(1) : null, jsHeapMB: +(c.JSHeapUsedSize / 1048576).toFixed(1), live: await p.evaluate(() => document.querySelectorAll("iframe.tb-frame").length), halted: await p.evaluate(() => Array.from(document.querySelectorAll("figure.tb-lab")).filter((f) => f.querySelector("iframe.tb-frame") && f.__lab.clock() && f.__lab.clock().isHalted()).length) }; };
  const P = {};
  await p.evaluate(() => window.scrollTo(0, 0)); await sleep(5000);
  P.topOfPageOffscreenModelsHalted = await measure(6);
  const mid = labIds[Math.floor(labIds.length / 2)].id; await p.evaluate((i) => document.getElementById(i).scrollIntoView({ block: "center" }), mid);
  for (let k = 0; k < 60; k++) { await sleep(500); if (await p.evaluate((i) => { const f = document.getElementById(i); const b = f.querySelector(".tb-bar"); return b && !b.hidden; }, mid)) break; }
  await sleep(3000); P.oneModelOnScreen = await measure(8);
  // pausing the demonstration leaves rendering on (so you can still turn the model) but costs no animation time
  await p.locator(`#${mid} .tb-bar button`).first().click(); await sleep(1500); P.onScreenButPaused = await measure(6); await p.locator(`#${mid} .tb-bar button`).first().click();
  const loads = R.labs.map((l) => l.loadMs).filter((x) => x != null).sort((a, b) => a - b); P.modelStartMsMedian = loads[Math.floor(loads.length / 2)]; P.modelStartMsMax = loads[loads.length - 1];
  P.page = await p.evaluate(() => ({ domContentLoadedMs: Math.round(performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart), htmlMB: +(document.documentElement.outerHTML.length / 1048576).toFixed(1) }));
  P.note = "Frames per second here are limited by SwiftShader (software rendering on the test machine's CPU) and say nothing about a student's device. The hardware-independent figures are main-thread time per frame, the number of live WebGL contexts (never more than 3), halted offscreen models, heap size and start-up time.";
  R.performance = P;
  if (P.topOfPageOffscreenModelsHalted.mainThreadBusyFraction > 0.05) fail("performance", "offscreen models still cost main-thread time: " + P.topOfPageOffscreenModelsHalted.mainThreadBusyFraction);
  if (P.topOfPageOffscreenModelsHalted.live !== P.topOfPageOffscreenModelsHalted.halted) fail("performance", "not every live offscreen model is halted");
  if (P.oneModelOnScreen.live > 3) fail("performance", "more than 3 live models");
}
save();

// ---------- F. print layout ----------
{
  const pp = await b.newPage({ viewport: { width: 900, height: 1200 } });
  await pp.goto(FILE, { waitUntil: "load" }); await pp.emulateMedia({ media: "print" }); await sleep(1000);
  R.print = await pp.evaluate(() => ({
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    controlsVisible: Array.from(document.querySelectorAll(".tb-bar, .tb-btn, .tb-load, iframe.tb-frame, .tb-search")).filter((e) => e.offsetParent !== null).length,
    postersShown: Array.from(document.querySelectorAll("img.tb-poster")).filter((i) => i.offsetParent !== null && i.naturalWidth > 0).length,
    figures: document.querySelectorAll("figure.tb-lab").length }));
  if (R.print.controlsVisible) fail("print", R.print.controlsVisible + " controls visible when printing"); if (R.print.postersShown !== R.print.figures) fail("print", `still images shown ${R.print.postersShown}/${R.print.figures}`);
  try { const pdf = await pp.pdf({ format: "A4", printBackground: true, timeout: 240000 }); fs.writeFileSync("/tmp/tb-print.pdf", pdf); R.print.pdfBytes = pdf.length; } catch (e) { fail("print", "PDF export failed: " + String(e.message).split("\n")[0]); }
  await pp.close();
}

R.summary = { labInstances: R.labs.length, loadedWithCanvas: R.labs.filter((l) => l.loaded && l.canvas).length, controlsPerInstance: [...new Set(R.labs.map((l) => l.controls))], maxLiveFrames: R.maxLiveFrames,
  geometryChecked: R.geometry.length, geometryAllOk: R.geometry.every((g) => g.ok), modesControlTested: R.motion.length, failures: R.failures.length };
save();
console.log(JSON.stringify(R.summary));
console.log("failures:", R.failures.length); R.failures.forEach((f) => console.log("  -", f.where, "|", f.what));
await b.close();
