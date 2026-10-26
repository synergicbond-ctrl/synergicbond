import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "content", "organic-modules");

export type ModuleSection = { order: number; heading_id: string; title: string | null; dir: string; pass: boolean; svg: number; blocks: number };
export type ChapterManifest = { file: string; sections_total: number; sections_passed: number; svg_in_file: number; partition_reproduces_file_bytes: boolean; sections: ModuleSection[] };
export type MasterRow = { file: string; section_dir: string; title: string; chapter: string; basis: string };

export function listChapterStems(): string[] {
  return fs.readdirSync(ROOT, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name).sort();
}
export function readChapter(stem: string): ChapterManifest | null {
  const p = path.join(ROOT, stem, "chapter_manifest.json");
  return fs.existsSync(p) ? (JSON.parse(fs.readFileSync(p, "utf8")) as ChapterManifest) : null;
}
export function readFragment(stem: string, dir: string): string | null {
  if (!/^[A-Za-z0-9_.-]+$/.test(stem) || !/^\d{3}$/.test(dir)) return null; // no path traversal
  const p = path.join(ROOT, stem, dir, "fragment.html");
  return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null;
}
/** Chapter styles live in the file's preamble: keep only its <style> blocks. */
export function readStyles(stem: string): string {
  if (!/^[A-Za-z0-9_.-]+$/.test(stem)) return "";
  const p = path.join(ROOT, stem, "preamble.html");
  if (!fs.existsSync(p)) return "";
  const s = fs.readFileSync(p, "utf8");
  return (s.match(/<style[^>]*>[\s\S]*?<\/style>/g) ?? []).join("\n");
}
export function readMaster(): MasterRow[] {
  return JSON.parse(fs.readFileSync(path.join(ROOT, "MASTER_MANIFEST.json"), "utf8")) as MasterRow[];
}

export type AnimEntry = { stem: string; title: string; widgets: Record<string, string>[] };
export function readAnimations(): AnimEntry[] {
  const p = path.join(ROOT, "animations.json");
  return fs.existsSync(p) ? (JSON.parse(fs.readFileSync(p, "utf8")) as AnimEntry[]) : [];
}
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
/** Widgets declared for this section, as sb-anim placeholders (data-driven, not hand-placed). */
export function animationHtml(stem: string, sectionTitle: string | null): string {
  if (!sectionTitle) return "";
  return readAnimations()
    .filter(a => a.stem === stem && new RegExp(a.title).test(sectionTitle))
    .flatMap(a => a.widgets)
    .map(w => `<div class="sb-anim" ${Object.entries(w).map(([k, v]) => `data-${k}="${esc(String(v))}"`).join(" ")}></div>`)
    .join("\n");
}

/**
 * The drawings in a chapter use generated class names (.s0, .s1 ...) whose meaning differs from file to file.
 * Keep only those SVG class rules from the chapter's own styles and prefix them with a per-chapter scope class,
 * so sections from different chapters can sit in one page without clashing.
 */
export function scopedSvgStyles(stem: string, scope: string): string {
  if (!/^[A-Za-z0-9_.-]+$/.test(stem) || !/^[A-Za-z0-9_-]+$/.test(scope)) return "";
  const css = readStyles(stem).replace(/<\/?style[^>]*>/g, "\n");
  const out: string[] = [];
  for (const m of css.matchAll(/([^{}@]+)\{([^{}]*)\}/g)) {
    const sel = m[1].trim();
    if (!/\.s\d+\b/.test(sel) || !/svg|\.s\d+/.test(sel)) continue;
    out.push(sel.split(",").map(x => `.${scope} ${x.trim()}`).join(",") + `{${m[2].trim()}}`);
  }
  return out.join("\n");
}
