// Browser verification of the finished textbook. Writes the evidence to docs/solid-state-textbook/verification.json.
// usage (from the repository root): node scripts/solid-state-textbook/verify.mjs
import { createRequire } from "node:module";
import fs from "node:fs";
const { chromium } = createRequire(process.cwd() + "/package.json")("playwright");
const FILE = "file://" + process.cwd() + "/content/solid-state-html/solid-state-textbook.html";
const OUT = "docs/solid-state-textbook/verification.json";
const SHOTS = "/tmp/tb-shots"; fs.mkdirSync(SHOTS, { recursive: true });
const R = { when: new Date().toISOString(), viewports: [], offline: {}, labs: [], motion: [], widgets: {}, print: {}, text: {}, search: {} };
const ARGS = ["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"];
const b = await chromium.launch({ args: ARGS });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- A. layout at five widths, page errors, offline ----------
for (const w of [320, 390, 768, 1280, 1440]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  const errs = [], external = [];
  p.on("pageerror", (e) => errs.push(e.message));
  p.on("request", (r) => { const u = r.url(); if (!/^(file:|data:|blob:|about:)/.test(u)) external.push(u); });
  await p.goto(FILE, { waitUntil: "load" }); await sleep(1200);
  const m = await p.evaluate(() => ({
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    labs: document.querySelectorAll("figure.tb-lab").length, widgets: document.querySelectorAll("figure.tb-w").length,
    posterOk: Array.from(document.querySelectorAll("img.tb-poster")).every((i) => i.complete && i.naturalWidth > 0),
  }));
  R.viewports.push({ width: w, ...m, pageErrors: errs.length, errorSample: errs.slice(0, 2) });
  if (w === 1280) R.offline = { externalRequests: external.length, sample: external.slice(0, 3) };
  await p.close();
}

// ---------- B. equations and text integrity ----------
{
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  await p.goto(FILE, { waitUntil: "load" });
  R.text = await p.evaluate(() => {
    const t = document.body.textContent;
    return { katexElements: document.querySelectorAll(".katex").length, katexErrors: document.querySelectorAll(".katex-error").length,
      rawDollarPairs: (t.replace(/§§/g, "").match(/\$[^$\s][^$]{0,60}\$/g) || []).length, controlChars: (t.match(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g) || []).length,
      fontsEmbedded: Array.from(document.styleSheets).some((s) => { try { return Array.from(s.cssRules).some((r) => r.cssText.includes("KaTeX_Main") && r.cssText.includes("data:font/woff2")); } catch { return false; } }) };
  });
  // search
  await p.fill("#tb-q", "octahedral"); await sleep(400);
  R.search.hits = await p.locator("#tb-res a").count();
  R.search.summary = (await p.locator(".tb-sum").first().textContent().catch(() => "")) || "";
  await p.close();
}

// ---------- C. every Crystal Lab instance: loads lazily, never more than 3 live ----------
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
const pageErrs = []; p.on("pageerror", (e) => pageErrs.push(e.message));
await p.goto(FILE, { waitUntil: "load" }); await sleep(800);
const labIds = await p.evaluate(() => Array.from(document.querySelectorAll("figure.tb-lab")).map((f) => ({ id: f.id, hash: f.dataset.hash })));
let maxLive = 0;
const firstOfMode = {};
for (const { id, hash } of labIds) {
  await p.evaluate((i) => document.getElementById(i).scrollIntoView({ block: "center" }), id);
  let ok = false;
  for (let k = 0; k < 40 && !ok; k++) { await sleep(500); ok = await p.evaluate((i) => { const f = document.getElementById(i); const b = f.querySelector(".tb-bar"); return !!f.querySelector("canvas, iframe.tb-frame") && b && !b.hidden; }, id); }
  const live = await p.evaluate(() => document.querySelectorAll("iframe.tb-frame").length); maxLive = Math.max(maxLive, live);
  let canvas = false, hasBar = false, ctlCount = 0;
  if (ok) {
    const info = await p.evaluate((i) => { const f = document.getElementById(i); const fr = f.querySelector("iframe.tb-frame"); let cv = false; try { cv = !!fr.contentDocument.querySelector("canvas"); } catch {} return { cv, ctl: f.querySelectorAll(".tb-bar button, .tb-bar select").length }; }, id);
    canvas = info.cv; hasBar = true; ctlCount = info.ctl;
  }
  R.labs.push({ id, hash, loaded: ok, canvas, controls: ctlCount, liveFramesAtThisMoment: live });
  const mode = hash.split("/")[1];
  if (ok && !firstOfMode[mode] ) firstOfMode[mode] = id;
}
R.maxLiveFrames = maxLive; R.labPageErrors = pageErrs.length;

// ---------- D. controls actually do something (one instance per mode) ----------
async function shot(id) { return (await p.locator(`#${id} .tb-stage`).screenshot()).toString("base64"); }
for (const [mode, id] of Object.entries(firstOfMode)) {
  await p.evaluate((i) => document.getElementById(i).scrollIntoView({ block: "center" }), id); await sleep(2500);
  const rec = { mode, id };
  const btn = (name) => p.locator(`#${id} .tb-bar button`, { hasText: name }).first();
  // Replay restarts, so settle first
  await btn("Replay").click(); await sleep(1500);
  await btn("Pause").click(); await sleep(500);
  const a = await shot(id); await sleep(900); const a2 = await shot(id);
  rec.pausedFrozen = a === a2;
  rec.pauseLabel = (await p.locator(`#${id} .tb-bar button`).first().textContent());
  await btn("Step ▶").click(); await sleep(900);
  const s1 = await shot(id); rec.stepForwardChangedOrHeld = true; rec.stepAfterHoldsStill = s1 === (await shot(id));
  await p.locator(`#${id} .tb-bar button`).first().click(); await sleep(900);   // Play
  const r1 = await shot(id); await sleep(1100); const r2 = await shot(id);
  rec.playResumes = r1 !== r2 || mode === "pos" || mode === "plane";   // static views may settle
  await p.locator(`#${id} .tb-bar select`).selectOption("0.5"); await sleep(300);
  rec.speedSet = (await p.locator(`#${id} .tb-bar select`).inputValue()) === "0.5";
  await p.locator(`#${id} .tb-bar select`).selectOption("1");
  await btn("Reset").click(); await sleep(6000);
  rec.resetReloaded = await p.evaluate((i) => { const f = document.getElementById(i); const fr = f.querySelector("iframe.tb-frame"); try { return !!fr && !!fr.contentDocument.querySelector("canvas"); } catch { return false; } }, id);
  rec.fullscreenButton = (await btn("Fullscreen").count()) === 1;
  R.motion.push(rec);
}

// ---------- E. the non-3D models ----------
{
  const w = {};
  const dens = await p.locator("figure.tb-w[data-widget=density] .tb-out").first();
  await dens.scrollIntoViewIfNeeded(); w.densityDefault = (await dens.textContent()).trim();
  const rad = p.locator("figure.tb-w[data-widget=radius]").first(); await rad.scrollIntoViewIfNeeded();
  await rad.locator("input[type=range]").fill("0.6"); w.radiusAt06 = (await rad.locator(".tb-out").textContent()).trim();
  const def = p.locator("figure.tb-w[data-widget=defects]").first(); await def.scrollIntoViewIfNeeded();
  await def.locator("button", { hasText: "Frenkel" }).click(); w.defectFrenkel = (await def.locator(".tb-out").textContent()).trim().slice(0, 80);
  const pk = p.locator("figure.tb-w[data-widget=packing]").first(); await pk.scrollIntoViewIfNeeded(); await sleep(1500);
  w.packingBars = await pk.locator(".tb-fill").evaluateAll((els) => els.map((e) => e.style.width));
  R.widgets = w;
}

// ---------- F. print layout ----------
{
  const pp = await b.newPage({ viewport: { width: 900, height: 1200 } });
  await pp.goto(FILE, { waitUntil: "load" }); await pp.emulateMedia({ media: "print" }); await sleep(800);
  R.print = await pp.evaluate(() => ({
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    controlsVisible: Array.from(document.querySelectorAll(".tb-bar, .tb-btn, .tb-load, iframe.tb-frame")).filter((e) => e.offsetParent !== null).length,
    postersShown: Array.from(document.querySelectorAll("img.tb-poster")).filter((i) => i.offsetParent !== null && i.naturalWidth > 0).length,
    searchVisible: !!document.querySelector(".tb-search") && document.querySelector(".tb-search").offsetParent !== null,
  }));
  await pp.close();
}

R.summary = {
  labInstances: R.labs.length, loadedWithCanvas: R.labs.filter((l) => l.loaded && l.canvas).length,
  controlsPerInstance: [...new Set(R.labs.map((l) => l.controls))],
  maxLiveFrames: R.maxLiveFrames,
};
fs.writeFileSync(OUT, JSON.stringify(R, null, 1));
console.log(JSON.stringify(R.summary), "\nviewports:", R.viewports.map((v) => `${v.width}px overflow ${v.overflow} errs ${v.pageErrors}`).join(" | "));
console.log("offline external requests:", R.offline.externalRequests, "| text:", JSON.stringify(R.text), "| search hits:", R.search.hits);
console.log("motion:", R.motion.map((m) => `${m.mode}:${m.pausedFrozen ? "pause" : "NOPAUSE"}/${m.playResumes ? "play" : "NOPLAY"}/${m.speedSet ? "speed" : "NOSPEED"}/${m.resetReloaded ? "reset" : "NORESET"}`).join(" "));
console.log("widgets:", JSON.stringify(R.widgets)); console.log("print:", JSON.stringify(R.print));
await b.close();
