// Renders a still image of each Crystal Lab view (used as the poster, the print image and the no-WebGL fallback).
// usage: node posters.mjs <hashes.json> <cache.json>   (only renders hashes missing from the cache)
import { createRequire } from "node:module";
import fs from "node:fs";
const { chromium } = createRequire(process.cwd() + "/package.json")("playwright");
const [hashesFile, cacheFile] = process.argv.slice(2);
const hashes = JSON.parse(fs.readFileSync(hashesFile, "utf8"));
const cache = fs.existsSync(cacheFile) ? JSON.parse(fs.readFileSync(cacheFile, "utf8")) : {};
const todo = hashes.filter((h) => !cache[h]);
if (todo.length) {
  const b = await chromium.launch({ args: ["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  for (const h of todo) {
    const p = await b.newPage({ viewport: { width: 760, height: 600 } });
    await p.goto("file://" + process.cwd() + "/content/solid-state-html/crystal-lab.html#" + h + "/embed", { waitUntil: "load" });
    const mode = h.split("/")[1];
    await p.waitForTimeout(mode === "grow" ? 7000 : mode === "layers" ? 5000 : mode === "pack" ? 4500 : 3200);
    const buf = await p.screenshot({ type: "jpeg", quality: 62 });
    cache[h] = "data:image/jpeg;base64," + buf.toString("base64");
    await p.close();
    fs.writeFileSync(cacheFile, JSON.stringify(cache));
    console.log("poster", h, Math.round(buf.length / 1024) + " KB");
  }
  await b.close();
}
console.log("posters ready:", hashes.length);
