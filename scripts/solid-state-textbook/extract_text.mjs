// Extracts the textbook's readable text with maths kept as markers (§§latex§§), plus every data-latex attribute.
import { createRequire } from "node:module";
import fs from "node:fs";
const { chromium } = createRequire(import.meta.url)("playwright");
const file = process.argv[2] || "content/solid-state-html/solid-state-textbook.html";
const out = process.argv[3] || "/tmp/solid-state-textbook-text.json";
const b = await chromium.launch({ args: ["--no-sandbox"] });
const p = await b.newPage();
await p.goto("file://" + process.cwd() + "/" + file, { waitUntil: "load" });
const res = await p.evaluate(() => {
  const root = document.body.cloneNode(true);
  root.querySelectorAll("script,style,iframe,.tb-w,.tb-search,nav.toc").forEach((e) => e.remove());
  const latexAttrs = Array.from(root.querySelectorAll("[data-latex]")).map((e) => e.getAttribute("data-latex"));
  // markers: ⟦S:section-id⟧ at each section start, ⟦H:heading⟧ before each heading, so the ledger can report where a string landed
  root.querySelectorAll("section.part[id]").forEach((e) => e.prepend(document.createTextNode("⟦S:" + e.id + "⟧")));
  root.querySelectorAll("h2,h3,h4").forEach((e) => e.prepend(document.createTextNode("⟦H:" + (e.textContent || "").replace(/\s+/g, " ").trim().slice(0, 90) + "⟧")));
  const struct = { tables: root.querySelectorAll("table").length, svgs: root.querySelectorAll("svg").length, katex: root.querySelectorAll(".katex").length,
    figures: root.querySelectorAll("figure").length, details: root.querySelectorAll("details").length };
  const bySection = {};
  root.querySelectorAll("section.part[id]").forEach((e) => { bySection[e.id] = { tables: e.querySelectorAll("table").length, svgs: e.querySelectorAll("svg").length, pres: e.querySelectorAll("pre").length,
    figures: e.querySelectorAll("figure").length, katex: e.querySelectorAll(".katex").length, workedExamples: (e.textContent.match(/Worked example/gi) || []).length }; });
  root.querySelectorAll(".katex-html").forEach((e) => e.remove());
  root.querySelectorAll(".katex").forEach((k) => { const a = k.querySelector('annotation[encoding="application/x-tex"]'); k.replaceWith(document.createTextNode("§§" + (a ? a.textContent : "") + "§§")); });
  return { text: root.textContent, latexAttrs, struct, bySection };
});
fs.writeFileSync(out, JSON.stringify(res));
console.log("text chars", res.text.length, "data-latex attrs", res.latexAttrs.length);
await b.close();
