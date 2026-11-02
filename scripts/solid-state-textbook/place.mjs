// Places the animation figures into the chapter's real DOM, AFTER the theory under each heading and BEFORE any worked example,
// then numbers them in reading order. usage: node place.mjs <in.html> <plan.json> <out.html> <report.json>
import { createRequire } from "node:module";
import fs from "node:fs";
const { chromium } = createRequire(process.cwd() + "/package.json")("playwright");
const [inFile, planFile, outFile, reportFile] = process.argv.slice(2);
const full = JSON.parse(fs.readFileSync(planFile, "utf8")); const plan = full.plan, replaces = full.replace || [];
const b = await chromium.launch({ args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setContent(fs.readFileSync(inFile, "utf8"), { waitUntil: "domcontentloaded", timeout: 180000 });
const result = await p.evaluate(({ plan, replaces }) => {
  const norm = (t) => t.replace(/\s+/g, " ").trim();
  const heads = [...document.querySelectorAll("h2,h3,h4")];
  const isExample = (el) => el.getAttribute("data-block") === "example" || /^\s*\d*\s*Worked example/i.test((el.textContent || "").slice(0, 60));
  const placed = [];
  for (const item of plan) {
    const hs = heads.filter((h) => norm(h.textContent) === item.heading);
    if (hs.length !== 1) { placed.push({ heading: item.heading, error: "heading matches: " + hs.length }); continue; }
    const h = hs[0], par = h.parentElement, next = h.nextElementSibling;
    const frag = document.createElement("div"); frag.innerHTML = item.figs.join("\n");
    let container, ref = null, where;
    const wrapsTable = next && next.tagName === "DIV" && (next.matches(".overflow-x-auto") || next.querySelector(":scope > table"));   // a table's scroll box is not a place for an animation
    if (next && next.tagName === "DIV" && !wrapsTable) {          // Master: the content div follows the heading
      container = next; ref = [...next.children].find(isExample) || null; where = "master-content";
    } else if (par && par.tagName === "SECTION" && par.firstElementChild === h) {   // 23 parts: heading and its blocks share one section
      container = par; ref = [...par.children].slice(1).find(isExample) || null; where = "part-section";
    } else { container = par; ref = h.nextSibling; where = "fallback-after-heading"; }
    const blocks = container.children.length - (where === "part-section" ? 1 : 0);
    for (const n of [...frag.children]) container.insertBefore(n, ref);
    placed.push({ heading: item.heading, where, beforeExample: !!ref && where !== "fallback-after-heading", theoryBlocksAbove: blocks });
  }
  // replace the original relative-path iframe with the figure, and point its 'full size' link at the figure
  const linkFix = [];
  for (const r of replaces) {
    const fr = [...document.querySelectorAll("iframe")].find((x) => x.getAttribute("src") === r.src);
    if (!fr) { placed.push({ heading: r.heading, error: "original iframe not found" }); continue; }
    const frag = document.createElement("div"); frag.innerHTML = r.fig;
    fr.replaceWith(...frag.children);
    placed.push({ heading: r.heading, where: "replaces-original-iframe", beforeExample: false, theoryBlocksAbove: 0 });
    const a = [...document.querySelectorAll("a")].find((x) => x.getAttribute("href") === r.src.replace(/\/embed$/, ""));
    if (a) linkFix.push([a, Number(frag.querySelector("figure") ? 0 : 0)]);
  }
  const order = [...document.querySelectorAll("figure.tb-lab, figure.tb-w")].map((f, i) => {
    f.id = "anim-" + (i + 1); const t = f.querySelector(".tb-tag"); if (t) t.textContent = t.textContent.replace(/^Animation \S+/, "Animation " + (i + 1));
    return { id: f.id, ph: Number(f.dataset.ph) };
  });
  for (const [a] of linkFix) { const f = a.closest("section, div")?.querySelector("figure.tb-lab[data-hash='fcc/layers/scp']") || document.querySelector("figure.tb-lab[data-hash='fcc/layers/scp']"); if (f) { a.setAttribute("href", "#" + f.id); a.setAttribute("data-tb-full", f.id); } }
  return { placed, order };
}, { plan, replaces });
fs.writeFileSync(outFile, "<!doctype html>\n" + (await p.evaluate(() => document.documentElement.outerHTML)));
fs.writeFileSync(reportFile, JSON.stringify(result, null, 1));
const bad = result.placed.filter((x) => x.error || x.where === "fallback-after-heading");
console.log("placed", result.order.length, "figures | problems:", bad.length, JSON.stringify(bad));
await b.close();
