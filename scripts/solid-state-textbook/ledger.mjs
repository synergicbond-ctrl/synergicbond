// Source-to-HTML preservation ledger.
// Reads every string in the ORIGINAL data files (parts/part01-23.tsx and master/_content.ts) with the TypeScript parser
// and checks that each one appears, after normalisation, in the textbook HTML. Independent of the HTML build pipeline.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(path.resolve("package.json"));
const ts = require("typescript");

const TEXTBOOK = process.argv[2] || "content/solid-state-html/solid-state-textbook.html";
const OUT_JSON = process.argv[3] || "docs/solid-state-textbook/ledger.json";

function norm(s) {
  return s.normalize("NFKC")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/[​-‍⁠﻿]/g, "")
    .replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[–—−]/g, "-")
    .replace(/\s+/g, "").toLowerCase();
}
const ext = JSON.parse(fs.readFileSync(process.argv[4] || "/tmp/solid-state-textbook-text.json", "utf8"));
const text = norm(ext.text);
const latexAttrs = ext.latexAttrs.map(norm);
function srcNorm(t) { return norm(t.replace(/\$([^$]+)\$/g, "§§$1§§")); }
function strings(file) {
  const src = fs.readFileSync(file, "utf8");
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, file.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const out = [];
  function keyOf(node) { // nearest property name
    let n = node.parent;
    while (n) { if (ts.isPropertyAssignment(n) && n.name) return n.name.getText(sf).replace(/["']/g, ""); n = n.parent; }
    return "";
  }
  function visit(node) {
    if ((ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) && !ts.isImportDeclaration(node.parent) && !ts.isExportDeclaration(node.parent)) {
      const v = node.text;
      if (v.trim().length >= 1) out.push({ key: keyOf(node), text: v, line: sf.getLineAndCharacterOfPosition(node.getStart()).line + 1 });
    } else if (ts.isTemplateExpression(node)) {
      out.push({ key: keyOf(node), text: node.getText(sf).slice(1, -1), line: sf.getLineAndCharacterOfPosition(node.getStart()).line + 1, template: true });
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
  return out;
}

// strings that are code, not content
const CODE_KEYS = new Set(["className","slug","id", "href", "type", "kind", "tone", "id", "className", "alt", "hash", "title_slug"]);
const files = [];
for (let n = 1; n <= 23; n++) files.push([`part${String(n).padStart(2, "0")}`, `app/learn/solid-state/parts/part${String(n).padStart(2, "0")}.tsx`]);
files.push(["master", "app/learn/solid-state/master/_content.ts"]);

const report = [];
for (const [id, file] of files) {
  const isClass = (t) => /\b(?:flex|grid|space-y|px-|py-|mt-|rounded|text-|bg-|border|md:|max-w|w-full|font-|leading|tracking|overflow|gap-)\S*/.test(t) && !/[.?!]\s/.test(t) && t.split(" ").every((w) => /^[\w:\/\[\]().%#,-]+$/.test(w));
  // content strings only: drop code keys (slug, href, className...) and styling class lists
  const isCodeToken = (t) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(t.trim());   // e.g. a url slug or id
  const items = strings(file).filter((i) => !CODE_KEYS.has(i.key) && !isClass(i.text) && !(i.key === "" && isCodeToken(i.text)));
  let found = 0; const missing = [];
  for (const it of items) {
    const n = srcNorm(it.text);
    if (n.length === 0) continue;
    if (it.key === "latex") { if (latexAttrs.some((a) => a.includes(n) || n.includes(a)) || text.includes("§§" + n + "§§")) found++; else missing.push(it); continue; }
    if (text.includes(n)) found++; else missing.push(it);
  }
  report.push({ id, file, items: items.length, found, missing: missing.map((m) => ({ key: m.key, line: m.line, text: m.text.slice(0, 160) })) });
}
fs.writeFileSync(OUT_JSON, JSON.stringify(report, null, 1));
const tot = report.reduce((a, r) => a + r.items, 0), fnd = report.reduce((a, r) => a + r.found, 0);
console.log(`items ${tot}, found ${fnd}, missing ${tot - fnd}`);
report.forEach((r) => console.log(r.id.padEnd(7), String(r.found).padStart(5), "/", String(r.items).padEnd(5), "missing", r.missing.length));
