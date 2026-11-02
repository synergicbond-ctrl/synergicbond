// Clock-level control check for the remaining modes (frame-rate independent): Pause, Play, Speed, Step and Reset, measured on the lab's own clock.
import { createRequire } from "node:module";
import fs from "node:fs";
const { chromium } = createRequire(process.cwd() + "/package.json")("playwright");
const FILE = "file://" + process.cwd() + "/content/solid-state-html/solid-state-textbook.html";
const b = await chromium.launch({ args: ["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto(FILE, { waitUntil: "load" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const targets = await p.evaluate(() => { const seen = {}, out = []; document.querySelectorAll("figure.tb-lab").forEach((f) => { const h = f.dataset.hash, m = h.startsWith("fcc/layers") ? h : h.split("/")[1]; if (!seen[m]) { seen[m] = 1; out.push({ id: f.id, mode: m, hash: h }); } }); return out; });
const sample = (id) => p.evaluate((i) => { const c = document.getElementById(i).__lab.clock(); return [c.now(), performance.now()]; }, id);
const rate = async (id, ms) => { const a = await sample(id); await sleep(ms); const c = await sample(id); return (c[0] - a[0]) / (c[1] - a[1]); };
const results = [];
for (const t of targets) {
  const rec = { ...t, checks: {} }; const ck = (n, c, d) => { rec.checks[n] = { pass: !!c, detail: d }; };
  try {
    await p.evaluate((i) => document.getElementById(i).scrollIntoView({ block: "center" }), t.id);
    let ok = false; for (let k = 0; k < 90 && !ok; k++) { await sleep(500); ok = await p.evaluate((i) => { const f = document.getElementById(i); const b = f.querySelector(".tb-bar"); return !!f.querySelector("iframe.tb-frame") && b && !b.hidden && f.__lab.clock(); }, t.id); }
    if (!ok) throw new Error("not ready"); await sleep(2500);
    const btn = (n) => p.locator(`#${t.id} .tb-bar button`, { hasText: n }).first();
    await btn("Pause").click(); await sleep(600);
    ck("pause stops the clock", Math.abs(await rate(t.id, 1500)) < 0.01);
    const v0 = (await sample(t.id))[0]; await btn("Step ▶").click(); await sleep(500);
    let still = 0, lastv = null; for (let k = 0; k < 160 && still < 2; k++) { await sleep(500); const r = await rate(t.id, 500); still = Math.abs(r) < 0.01 ? still + 1 : 0; }
    const adv = (await sample(t.id))[0] - v0; ck("step advances about 0.35 s of animation time", adv > 300 && adv < 650, adv.toFixed(0) + " ms");
    await p.locator(`#${t.id} .tb-bar button`).first().click(); await sleep(500);
    ck("play runs the clock at 1x", (() => 0)() === 0 && (await rate(t.id, 2000)) > 0.9);
    for (const [v, lo, hi] of [["0.5", .45, .55], ["2", 1.8, 2.2]]) { await p.locator(`#${t.id} .tb-bar select`).selectOption(v); await sleep(400); const r = await rate(t.id, 2000); ck(`speed ${v}x`, r > lo && r < hi, r.toFixed(3)); }
    await p.locator(`#${t.id} .tb-bar select`).selectOption("1");
    await btn("Replay").click(); await sleep(500); ck("replay keeps the clock running", (await rate(t.id, 1500)) > 0.9);
    await btn("Reset").click(); let back = false; for (let k = 0; k < 90 && !back; k++) { await sleep(500); back = await p.evaluate((i) => { const f = document.getElementById(i); const b = f.querySelector(".tb-bar"); return !!f.querySelector("iframe.tb-frame") && b && !b.hidden && f.__lab.clock(); }, t.id); }
    ck("reset reloads the model with Pause label and 1x", back && (await p.evaluate((i) => { const f = document.getElementById(i); return f.querySelector(".tb-bar button").textContent === "Pause" && f.querySelector(".tb-bar select").value === "1"; }, t.id)));
  } catch (e) { rec.error = String(e.message).split("\n")[0]; }
  results.push(rec); const bad = Object.entries(rec.checks).filter(([, v]) => !v.pass).map(([k, v]) => k + " (" + v.detail + ")");
  console.log(t.mode.padEnd(16), rec.error ? "ERROR " + rec.error : bad.length ? "FAIL: " + bad.join("; ") : "all clock-level checks pass");
}
fs.writeFileSync("docs/solid-state-textbook/step-check.json", JSON.stringify(results, null, 1));
await b.close();
