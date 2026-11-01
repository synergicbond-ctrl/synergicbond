import { build } from "esbuild";
import fs from "node:fs";
const r = await build({ entryPoints: ["src/lab.js"], bundle: true, minify: true, format: "iife", target: "es2020", write: false, legalComments: "none" });
const js = r.outputFiles[0].text.replace(/<\/script/gi, "<\\/script");
const html = fs.readFileSync("src/template.html", "utf8").replace("/*BUNDLE*/", () => js);
fs.writeFileSync(process.argv[2], html);
console.log("bundle", (js.length / 1024).toFixed(0), "KB → ", process.argv[2]);
