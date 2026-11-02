// Source-to-HTML preservation ledger (run from the repository root).
// Reads every string in the ORIGINAL data files (parts/part01-23.tsx and master/_content.ts) with the TypeScript parser and
// classifies each one against the finished textbook:
//   preserved                    found verbatim (maths compared through its LaTeX)
//   preserved-after-correction   the source text is corrupted (\u0007lpha, \u0007pprox for \alpha, \approx); the textbook has the correct form
//   metadata                     hub-card text (shortTitle, description) that is not chapter body
//   formatting                   styling class lists, not content
//   omission                     anything else (must be zero)
// usage: node scripts/solid-state-textbook/ledger.mjs <textbook.html> <out-dir> <extracted-text.json>
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(path.resolve("package.json"));
const ts = require("typescript");
const OUT = process.argv[3] || "docs/solid-state-textbook";
const ext = JSON.parse(fs.readFileSync(process.argv[4] || "/tmp/tb-text.json", "utf8"));

function norm(s) {
  return s.normalize("NFKC").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/[\u200b-\u200d\u2060\ufeff]/g, "").replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[–—−]/g, "-").replace(/\s+/g, "").toLowerCase();
}
const srcNorm = (t) => norm(t.replace(/\$([^$]+)\$/g, "§§$1§§"));
const fixEnc = (t) => t.replace(/\\u0007lpha/g, "\\alpha").replace(/\\u0007pprox/g, "\\approx");   // documented source corruption

// textbook text with locations: markers split the text into segments, each normalised and offset-tracked
const marks = []; let text = "";
for (const seg of ext.text.split(/(⟦[SH]:[^⟧]*⟧)/)) {
  const m = seg.match(/^⟦([SH]):([^⟧]*)⟧$/);
  if (m) marks.push({ at: text.length, kind: m[1], label: m[2] }); else text += norm(seg);
}
const latexAttrs = ext.latexAttrs.map(norm);
// each source must be found inside ITS OWN section of the textbook (part-NN for the parts, master for the Master notes)
const ranges = {};
marks.filter((k) => k.kind === "S").forEach((k, i, arr) => { ranges[k.label] = [k.at, i + 1 < arr.length ? arr[i + 1].at : text.length]; });
function whereIs(idx) {
  let sec = "", head = "";
  for (const k of marks) { if (k.at > idx) break; if (k.kind === "S") sec = k.label; else head = k.label; }
  return { section: sec, heading: head };
}

function strings(file) {
  const src = fs.readFileSync(file, "utf8");
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, file.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const out = [], kinds = {};
  const keyOf = (node) => { let n = node.parent; while (n) { if (ts.isPropertyAssignment(n) && n.name) return n.name.getText(sf).replace(/["']/g, ""); n = n.parent; } return ""; };
  (function visit(node) {
    const isPropName = node.parent && ts.isPropertyAssignment(node.parent) && node.parent.name === node;
    if (!isPropName && (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) && !ts.isImportDeclaration(node.parent) && !ts.isExportDeclaration(node.parent)) {
      const key = keyOf(node);
      if (key === "kind" || key === "type") kinds[node.text] = (kinds[node.text] || 0) + 1;
      if (node.text.trim()) out.push({ key, text: node.text, line: sf.getLineAndCharacterOfPosition(node.getStart()).line + 1 });
    } else if (ts.isJsxText(node) && node.text.replace(/\s+/g, " ").trim().length > 0) {
      // text written directly between JSX tags (parts 1 and 2 are written this way)
      out.push({ key: "jsx", text: node.text.replace(/\s+/g, " ").trim(), line: sf.getLineAndCharacterOfPosition(node.getStart()).line + 1 });
    } else if (ts.isTemplateExpression(node)) out.push({ key: keyOf(node), text: node.getText(sf).slice(1, -1), line: sf.getLineAndCharacterOfPosition(node.getStart()).line + 1 });
    ts.forEachChild(node, visit);
  })(sf);
  return { items: out, kinds };
}

const CODE_KEYS = new Set(["className", "slug", "id", "href", "type", "kind", "tone", "alt", "hash"]);
const CLASS_WORDS = new Set(["flex", "grid", "block", "hidden", "inline", "relative", "absolute", "underline", "italic", "uppercase", "truncate", "border", "rounded", "shadow", "transition", "container", "contents", "table"]);
// a styling class list: every word is a known Tailwind utility (with optional variant prefixes), nothing else
const UTIL = /^(?:[a-z0-9]+:)*!?-?(?:flex|grid|space|px|py|pt|pb|pl|pr|mx|my|mt|mb|ml|mr|p|m|gap|w|h|min|max|size|text|font|leading|tracking|bg|border|rounded|shadow|overflow|divide|ring|from|to|via|items|justify|content|self|col|row|order|opacity|transition|duration|ease|hover|focus|group|backdrop|blur|z|top|left|right|bottom|inset|object|aspect|list|whitespace|break|underline|decoration|align)(?:-[\w\/.\[\]%#,()-]+)?$/;
const isClass = (t) => t.trim().length > 0 && t.trim().split(/\s+/).every((w) => CLASS_WORDS.has(w) || UTIL.test(w));
const isToken = (t) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(t.trim());

const files = [];
for (let n = 1; n <= 23; n++) files.push([`part${String(n).padStart(2, "0")}`, `app/learn/solid-state/parts/part${String(n).padStart(2, "0")}.tsx`]);
files.push(["master", "app/learn/solid-state/master/_content.ts"]);

const perFile = {};
const rows = [["source", "line", "key", "status", "textbook_section", "textbook_heading", "source_text"]];
const report = []; const structural = { source: {}, textbook: ext.struct };
for (const [id, file] of files) {
  const { items, kinds } = strings(file);
  for (const [k, v] of Object.entries(kinds)) structural.source[`${id === "master" ? "master" : "parts"}:${k}`] = (structural.source[`${id === "master" ? "master" : "parts"}:${k}`] || 0) + v;
  perFile[id] = kinds;
  const c = { items: 0, preserved: 0, corrected: 0, metadata: 0, formatting: 0, omission: 0 }; const notes = [];
  for (const it of items) {
    if (CODE_KEYS.has(it.key) || (it.key === "" && isToken(it.text))) continue;
    c.items++;
    let status, where = { section: "", heading: "" };
    if (isClass(it.text)) { status = "formatting"; c.formatting++; }
    else {
      const n = srcNorm(it.text), nf = srcNorm(fixEnc(it.text)); let idx = -1;
      const sec = id === "master" ? "master" : "part-" + id.slice(4), [lo, hi] = ranges[sec] || [0, 0];
      const within = (i) => (i >= lo && i < hi ? i : -1);
      const find = (q) => it.key === "latex" ? within(text.indexOf("§§" + q + "§§", lo)) : within(text.indexOf(q, lo));
      idx = find(n);
      if (idx >= 0 || (it.key === "latex" && latexAttrs.some((a) => a.includes(n) || n.includes(a)))) { status = "preserved"; c.preserved++; where = idx >= 0 ? whereIs(idx) : { section: sec, heading: "(formula stored as data-latex with its display text)" }; }
      else if (fixEnc(it.text) !== it.text && (idx = find(nf)) >= 0) { status = "preserved-after-correction"; c.corrected++; where = whereIs(idx); notes.push({ line: it.line, key: it.key, before: it.text.slice(0, 120), after: fixEnc(it.text).slice(0, 120) }); }
      else if (it.key === "shortTitle" || it.key === "description") { status = "metadata"; c.metadata++; }
      else { status = "omission"; c.omission++; notes.push({ line: it.line, key: it.key, text: it.text.slice(0, 160), omission: true }); }
    }
    rows.push([id, it.line, it.key, status, where.section, where.heading.replace(/"/g, "'"), it.text.slice(0, 80).replace(/[\n\r"]/g, " ")]);
  }
  report.push({ id, file, ...c, notes });
}
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, "ledger.json"), JSON.stringify({ report, structural }, null, 1));
fs.writeFileSync(path.join(OUT, "ledger-items.csv"), rows.map((r) => r.map((x) => `"${String(x).replace(/"/g, '""')}"`).join(",")).join("\n"));

// structural comparison per section: the textbook must hold at least as many tables, diagrams and figures as the source has blocks
const srows = [["section", "source_tables", "html_tables", "source_diagrams(ascii/figure)", "html_figures_or_svg_or_pre", "source_examples", "html_worked_example_labels", "result"]];
let structFail = 0;
for (const [id] of files) {
  const k = perFile[id] || {}, sec = id === "master" ? "master" : "part-" + id.slice(4), h = ext.bySection[sec] || {};
  const tbl = k.table || 0, dia = (k.ascii || 0) + (k.figure || 0), ex = k.example || 0;
  const okT = (h.tables || 0) >= tbl, okD = Math.max(h.figures || 0, h.svgs || 0) + (h.pres || 0) >= dia;
  if (!okT || !okD) structFail++;
  srows.push([sec, tbl, h.tables || 0, dia, `${h.figures || 0}/${h.svgs || 0}/${h.pres || 0}`, ex, h.workedExamples || 0, okT && okD ? "ok" : "CHECK"]);
}
fs.writeFileSync(path.join(OUT, "ledger-structure.csv"), srows.map((r) => r.join(",")).join("\n"));
console.log("structural sections needing a look:", structFail);
srows.slice(1).filter((r) => r[7] !== "ok").forEach((r) => console.log("  CHECK", r.join(" | ")));
const T = report.reduce((a, r) => { for (const k of ["items", "preserved", "corrected", "metadata", "formatting", "omission"]) a[k] = (a[k] || 0) + r[k]; return a; }, {});
console.log(JSON.stringify(T));
report.filter((r) => r.omission || r.corrected || r.metadata || r.formatting).forEach((r) => console.log(r.id, `preserved ${r.preserved} corrected ${r.corrected} metadata ${r.metadata} formatting ${r.formatting} OMISSION ${r.omission}`));
console.log("structural:", JSON.stringify(structural));
