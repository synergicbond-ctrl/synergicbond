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
  root.querySelectorAll(".katex-html").forEach((e) => e.remove());
  root.querySelectorAll(".katex").forEach((k) => { const a = k.querySelector('annotation[encoding="application/x-tex"]'); k.replaceWith(document.createTextNode("§§" + (a ? a.textContent : "") + "§§")); });
  return { text: root.textContent, latexAttrs };
});
fs.writeFileSync(out, JSON.stringify(res));
console.log("text chars", res.text.length, "data-latex attrs", res.latexAttrs.length);
await b.close();
