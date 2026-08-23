// Renders content.js's FULL data (same source used for the 32-page docx) into HTML cards,
// guaranteeing complete textual parity instead of a condensed re-summary.
const fs = require("fs");

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ---- run helpers: t/b/it/bc return lightweight run descriptors ----
function t(text) { return { text }; }
function b(text) { return { text, bold: true }; }
function it(text) { return { text, italics: true }; }
function bc(text, color) { return { text, bold: true, danger: true }; }

function runHtml(run) {
  if (run == null) return "";
  if (typeof run === "string") return esc(run);
  let s = esc(run.text || "");
  if (run.bold) s = `<strong>${s}</strong>`;
  if (run.italics) s = `<em>${s}</em>`;
  if (run.danger) s = `<span class="danger-text">${s}</span>`;
  return s;
}
function runsHtml(runs) {
  if (typeof runs === "string") return esc(runs);
  return runs.map(runHtml).join("");
}

// ---- paragraph/text-level builders (return HTML strings) ----
function p(runsOrText) { return `<p>${runsHtml(runsOrText)}</p>`; }
function eq(text) {
  const parts = text.split(/\s{2,}/).filter(Boolean);
  return `<div class="eqline">${parts.map(esc).join("<br>")}</div>`;
}
function h1(text) { return { __h1: text }; }
function h2(text) { return `<h3>${esc(text)}</h3>`; }
function h3(text) { return `<h4>${esc(text)}</h4>`; }
function spacer() { return ""; }

function bulletsList(items) {
  return items.map((item) => `<li>${runsHtml(item)}</li>`);
}

function groupLis(arr) {
  // wrap consecutive <li> strings in <ul>/<ol>, pass everything else through
  const out = [];
  let buf = [];
  let bufTag = "ul";
  const flush = () => { if (buf.length) { out.push(`<${bufTag}>${buf.join("")}</${bufTag}>`); buf = []; } };
  arr.forEach((item) => {
    const isOl = typeof item === "string" && item.startsWith('<li data-ol="1">');
    const isLi = typeof item === "string" && item.startsWith("<li>");
    if (isOl || isLi) {
      const tag = isOl ? "ol" : "ul";
      if (buf.length && tag !== bufTag) flush();
      bufTag = tag;
      buf.push(item);
    } else { flush(); out.push(item); }
  });
  flush();
  return out;
}

function calloutBox(label, cls, bodyArr) {
  const inner = groupLis(bodyArr).join("");
  return `<div class="alert-box ${cls}"><span class="badge ${cls}">${esc(label)}</span>${inner}</div>`;
}
function jeeTrap(items) { return calloutBox("JEE TRAP", "trap", bulletsList(items)); }
function motBox(title, paras) { return calloutBox("MOT / BONDING — " + title, "struct", paras); }
function ncertBox(title, paras) { return calloutBox("NCERT FOCUS — " + title, "ncert", paras); }

function dataTable(headers, rows) {
  let html = '<div class="table-wrap"><table><tr>' + headers.map((h) => `<th>${esc(h)}</th>`).join("") + "</tr>";
  rows.forEach((r) => { html += "<tr>" + r.map((c) => `<td>${esc(String(c))}</td>`).join("") + "</tr>"; });
  html += "</table></div>";
  return html;
}

// ---- docx-API stand-ins used directly (title page section) ----
class TextRun { constructor(opts) { this.opts = opts; } }
class Paragraph {
  constructor(opts) { this.opts = opts; }
}
class PageBreak {}
const HeadingLevel = { HEADING_1: "h1", HEADING_2: "h2", HEADING_3: "h3" };
const AlignmentType = { LEFT: "left", CENTER: "center", RIGHT: "right" };
const WidthType = {}; const ShadingType = {}; const BorderStyle = {}; const LevelFormat = {};
const VerticalAlign = {}; const PageNumber = { CURRENT: "current" };
class Header { constructor(o) { this.o = o; } }
class Footer { constructor(o) { this.o = o; } }

function renderRawParagraph(par) {
  if (!(par instanceof Paragraph)) return "";
  const kids = par.opts.children || [];
  if (kids.some((k) => k instanceof PageBreak)) return "";
  const text = kids.map((k) => {
    if (k instanceof TextRun) {
      let s = esc(k.opts.text || "");
      if (k.opts.bold) s = `<strong>${s}</strong>`;
      if (k.opts.italics) s = `<em>${s}</em>`;
      return s;
    }
    if (k && typeof k === "object" && "text" in k) return runHtml(k);
    return "";
  }).join("");
  if (!text.trim()) return "";
  if (par.opts.numbering) return `<li data-ol="1">${text}</li>`;
  const align = par.opts.alignment;
  const cls = align === "center" ? ' class="center-text"' : "";
  return `<p${cls}>${text}</p>`;
}

// ---- children collector matching build_aem_notes.js's add()/children contract ----
const children = [];
function add(...items) {
  items.forEach((i) => {
    if (Array.isArray(i)) children.push(...i);
    else if (i instanceof Paragraph) children.push(renderRawParagraph(i));
    else children.push(i);
  });
}

const numbering = {}; // unused stand-in
const FONT = "", HFONT = "", NAVY = "", TEAL = "", GOLD = "", RED = "", LIGHTGREY = "", TRAPBG = "", MOTBG = "", NCERTBG = "", BORDERGREY = "";

module.exports = {
  Document: class {}, Packer: {}, Paragraph, TextRun, HeadingLevel, Table: class {}, TableRow: class {}, TableCell: class {},
  WidthType, ShadingType, BorderStyle, AlignmentType, LevelFormat, PageBreak, Header, Footer, PageNumber, VerticalAlign,
  h1, h2, h3, p, eq, bulletsList, b, it, t, bc, calloutBox, jeeTrap, motBox, ncertBox, spacer, dataTable, add, children, numbering,
  FONT, HFONT, NAVY, TEAL, GOLD, RED, LIGHTGREY, TRAPBG, MOTBG, NCERTBG, BORDERGREY,
};

// ---- once content.js runs (it requires this module as build_aem_notes.js), split into cards ----
if (require.main === module) {
  require("./content_for_html.js");

  // split flat children[] into groups at each __h1 marker
  const groups = [];
  let cur = null;
  children.forEach((item) => {
    if (item && typeof item === "object" && item.__h1) {
      if (cur) groups.push(cur);
      cur = { title: item.__h1, body: [] };
    } else if (item !== "" && item != null) {
      if (!cur) cur = { title: null, body: [] };
      cur.body.push(item);
    }
  });
  if (cur) groups.push(cur);

  const themes = ["trends", "hydrides", "halides", "oxides", "compounds"];
  const cardsHtml = groups.map((g, i) => {
    const bodyHtml = groupLis(g.body).join("\n");
    const theme = g.title ? themes[i % themes.length] : "trends";
    const heading = g.title ? `<h2>${esc(g.title)}</h2>` : `<h2>About These Notes</h2>`;
    return `<div class="card fulltext ${theme} wide">\n${heading}\n${bodyHtml}\n</div>`;
  });

  fs.writeFileSync(__dirname + "/full_notes_cards.html", cardsHtml.join("\n\n"));
  console.log("Rendered", groups.length, "sections ->", __dirname + "/full_notes_cards.html");
}
