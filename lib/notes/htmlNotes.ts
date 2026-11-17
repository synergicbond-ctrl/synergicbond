import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { promisify } from "node:util";
import { brotliCompress, gzip, constants as zlibConstants } from "node:zlib";
import { getUserEntitlements } from "@/lib/access/entitlements";
import { signinRedirect } from "@/lib/access/contentAccess";
import { hasPremiumLearnAccess, type PremiumLearnChapter } from "@/lib/access/premiumLearnPolicy";

// Complete chapter notes that are published as one self-contained HTML file
// (text, figures, fonts and scripts inline). The files live in
// content/jee-advanced-notes and are listed in next.config.ts
// outputFileTracingIncludes so they ship with each route's function.
//
// Route handlers are not wrapped by layouts, so the premium rule is checked
// here: signed-out readers go to sign-in, readers without the programme go to
// pricing — the same outcome as requirePremiumLearnAccess in a chapter layout.
//
// The files are large (2.5–17 MB, mostly inline SVG) but compress ~10×, so
// each one is compressed once per server instance and kept in memory, and the
// browser may keep a private copy (revalidated by ETag) so reopening a chapter
// does not download it again. The access check still runs on every request.

export const HTML_NOTES_DIR = path.join(process.cwd(), "content", "jee-advanced-notes");

const NO_STORE = { "Cache-Control": "no-store" };

const brotli = promisify(brotliCompress);
const gzipAsync = promisify(gzip);

type Bytes = Uint8Array<ArrayBuffer>;
type PreparedFile = { raw: Bytes; br: Bytes; gz: Bytes; etag: string };
const prepared = new Map<string, Promise<PreparedFile>>();

// Printing is switched off for the notes: the files' own print buttons are
// hidden (kept in the DOM because the files' scripts look them up by id), the
// browser's print output is blank, and Ctrl/Cmd+P and window.print() do nothing.
const PRINT_BUTTONS = ['<span class="pill">A4 Print Styles · Offline</span>'];
const NO_PRINT = `<style id="sb-no-print">#print-notes,#printDoc{display:none!important}@media print{html,body{display:none!important}}</style><script id="sb-no-print-js">(function(){try{window.print=function(){};}catch(e){}document.addEventListener("keydown",function(e){if((e.ctrlKey||e.metaKey)&&(e.key==="p"||e.key==="P")){e.preventDefault();e.stopImmediatePropagation();}},true);})();</script>`;

export function withoutPrinting(html: string): string {
  let out = html;
  for (const button of PRINT_BUTTONS) out = out.split(button).join("");
  const head = out.search(/<head[^>]*>/i);
  if (head === -1) return NO_PRINT + out;
  const end = out.indexOf(">", head) + 1;
  return out.slice(0, end) + NO_PRINT + out.slice(end);
}

// Per-chapter clean-up: remove filler text (format notes, "offline" labels,
// feature counts) and the search boxes, and give the Kinetics top bar a clean
// title. Elements that the files' scripts look up are hidden, not deleted.
type Polish = { remove?: (string | RegExp)[]; replace?: [string, string][]; css?: string };
const POLISH: Record<string, Polish> = {
  "chemical-kinetics.html": {
    replace: [['<div class="brand">CHEMICAL KINETICS</div>', '<div class="brand">Chemical Kinetics</div>']],
    css:
      ".topbar .controls,.intro p{display:none!important}" +
      ".topbar{background:rgba(255,255,255,.9)!important;-webkit-backdrop-filter:saturate(1.4) blur(10px);backdrop-filter:saturate(1.4) blur(10px);border-bottom:1px solid #e7eaf3!important;box-shadow:0 1px 12px rgba(30,41,90,.06);padding:14px max(20px,calc((100vw - 1480px)/2))!important}" +
      ".topbar .brand{display:flex;align-items:center;gap:12px;font-size:1.06rem!important;font-weight:700!important;letter-spacing:.015em!important;color:#25226b!important}" +
      ".topbar .brand::before{content:'';width:6px;height:24px;border-radius:3px;background:linear-gradient(180deg,#4f46e5,#0d9488)}" +
      ".intro{padding-bottom:8px}",
  },
  "chemical-bonding.html": {
    remove: [
      "<small>SYNERGIC BOND · JEE ADVANCED · OFFLINE TEXTBOOK</small>",
      /<p>Comprehensive JEE Advanced learning edition:[^<]*<\/p>/,
      /<span class="pill">(?:29 chapters · continuous navigation|271 Subtopic Entries|540 Numbered Worked-Example Entries|18 Canvas Demonstrations \+ SVG Figures)<\/span>/g,
    ],
    css: "aside>#search,#chapterSearch,.sidebar-small{display:none!important}",
  },
  "solid-state-textbook.html": {
    replace: [["<h1>Solid State — Complete</h1>", "<h1>Solid State</h1>"]],
    remove: ['<p class="meta">JEE Advanced Physical Chemistry · Synergic Bond · everything in one file</p>'],
    css: ".tb-search{display:none!important}",
  },
};

export function polishNotes(html: string, fileName: string): string {
  const polish = POLISH[fileName];
  let out = withoutPrinting(html);
  if (!polish) return out;
  for (const item of polish.remove ?? []) {
    out = typeof item === "string" ? out.split(item).join("") : out.replace(item, "");
  }
  for (const [from, to] of polish.replace ?? []) out = out.split(from).join(to);
  if (polish.css) {
    // Appended at the end of <head> so it wins over the file's own styles.
    const style = `<style id="sb-polish">${polish.css}</style>`;
    const close = out.search(/<\/head>/i);
    out = close === -1 ? style + out : out.slice(0, close) + style + out.slice(close);
  }
  return out;
}

async function prepare(absPath: string): Promise<PreparedFile> {
  const raw = Buffer.from(polishNotes(await readFile(absPath, "utf8"), path.basename(absPath)), "utf8");
  const [br, gz] = await Promise.all([
    brotli(raw, {
      params: {
        [zlibConstants.BROTLI_PARAM_QUALITY]: 6,
        [zlibConstants.BROTLI_PARAM_SIZE_HINT]: raw.length,
      },
    }),
    gzipAsync(raw, { level: 6 }),
  ]);
  const etag = `"${createHash("sha1").update(raw).digest("base64url").slice(0, 27)}"`;
  return { raw: new Uint8Array(raw), br: new Uint8Array(br), gz: new Uint8Array(gz), etag };
}

function getPrepared(absPath: string): Promise<PreparedFile> {
  let entry = prepared.get(absPath);
  if (!entry) {
    entry = prepare(absPath);
    entry.catch(() => prepared.delete(absPath));
    prepared.set(absPath, entry);
  }
  return entry;
}

/** Send a large HTML file compressed, with a private browser cache and ETag revalidation. */
export async function sendHtmlFile(request: Request, absPath: string): Promise<Response> {
  let file: PreparedFile;
  try {
    file = await getPrepared(absPath);
  } catch {
    return new Response("Not found", { status: 404, headers: NO_STORE });
  }
  const headers: Record<string, string> = {
    "Content-Type": "text/html; charset=utf-8",
    // Private: never stored by shared caches/CDN. The browser keeps it for an
    // hour, then revalidates with the ETag (a 304 costs no download).
    "Cache-Control": "private, max-age=3600, must-revalidate",
    ETag: file.etag,
    Vary: "Accept-Encoding, Cookie",
    "X-Content-Type-Options": "nosniff",
  };
  const ifNoneMatch = request.headers.get("if-none-match");
  if (ifNoneMatch && ifNoneMatch.split(",").some((tag) => tag.trim().replace(/^W\//, "") === file.etag)) {
    return new Response(null, { status: 304, headers });
  }
  const accept = request.headers.get("accept-encoding") ?? "";
  if (/\bbr\b/.test(accept)) {
    return new Response(file.br, { headers: { ...headers, "Content-Encoding": "br" } });
  }
  if (/\bgzip\b/.test(accept)) {
    return new Response(file.gz, { headers: { ...headers, "Content-Encoding": "gzip" } });
  }
  return new Response(file.raw, { headers });
}

export async function serveGatedHtmlNotes(
  request: Request,
  file: string,
  chapter: PremiumLearnChapter,
): Promise<Response> {
  const { pathname } = new URL(request.url);
  const { hasUser, keys } = await getUserEntitlements();
  if (!hasUser) {
    return Response.redirect(new URL(signinRedirect(pathname), request.url), 307);
  }
  if (!hasPremiumLearnAccess(keys, chapter)) {
    return Response.redirect(new URL(`/pricing?next=${encodeURIComponent(pathname)}`, request.url), 307);
  }
  return sendHtmlFile(request, path.join(HTML_NOTES_DIR, file));
}
