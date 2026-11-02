import { createRequire } from "node:module";
const { chromium } = createRequire(process.cwd() + "/package.json")("playwright");
const FILE = "file://" + process.cwd() + "/content/solid-state-html/solid-state-textbook.html";
const OUT = "docs/solid-state-textbook/screenshots";
const b = await chromium.launch({ args: ["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
for (const [name, w, h] of [["desktop", 1280, 900], ["phone", 390, 844]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto(FILE, { waitUntil: "load" }); await p.waitForTimeout(1500);
  const total = await p.evaluate(() => document.documentElement.scrollHeight);
  const marks = { start: 0, "part12-section": null, "master-3-2": null, middle: total * 0.5, "defects-section": null, end: total - h };
  const at = async (sel) => p.evaluate((s) => { const e = Array.from(document.querySelectorAll("h2")).find((x) => x.textContent.trim().startsWith(s)); return e ? e.getBoundingClientRect().top + scrollY - 20 : 0; }, sel);
  marks["part12-section"] = await at("Part 12");
  marks["master-3-2"] = await at("3.2 Contact");
  marks["defects-section"] = await at("8.2 Stoichiometric");
  for (const [k, y] of Object.entries(marks)) {
    await p.evaluate((yy) => window.scrollTo(0, yy), y); await p.waitForTimeout(1800);
    await p.screenshot({ path: `${OUT}/${name}-${k}.png` });
  }
  console.log(name, "page height", total);
  await p.close();
}
await b.close();
