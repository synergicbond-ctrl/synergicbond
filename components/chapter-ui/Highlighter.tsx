"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./reader.module.css";
import { PENS, addHighlight, removeHighlight, useHighlights, type PenColor } from "./highlights";

const norm = (s: string) => s.replace(/\s+/g, " ").trim();
const contentRoot = () => document.querySelector<HTMLElement>("[data-reader-content]");

/** The element a highlight is anchored to: a numbered topic section, or the whole reading column. */
function sectionFor(anchor: string): HTMLElement | null {
  const root = contentRoot();
  if (!root) return null;
  if (!anchor) return root;
  const n = Number(anchor.slice(1));
  return root.querySelectorAll<HTMLElement>("[data-topic]")[n] ?? null;
}

/** Convert a Range boundary into a (text node, offset) pair, whatever kind of node it points at. */
function textPoint(node: Node, offset: number, atEnd: boolean): { node: Text; offset: number } | null {
  if (node.nodeType === Node.TEXT_NODE) return { node: node as Text, offset };
  const child = node.childNodes[offset] ?? node.childNodes[offset - 1] ?? node;
  const w = document.createTreeWalker(child, NodeFilter.SHOW_TEXT);
  if (atEnd && node.childNodes[offset] === undefined) {
    let last: Text | null = null;
    for (let n = w.nextNode(); n; n = w.nextNode()) last = n as Text;
    return last ? { node: last, offset: last.length } : null;
  }
  const first = w.nextNode() as Text | null;
  return first ? { node: first, offset: 0 } : null;
}

/** Character offsets of a range inside a section's text. Counts every text node, visible or not. */
function offsetsIn(section: HTMLElement, r: Range): { start: number; end: number } | null {
  const a = textPoint(r.startContainer, r.startOffset, false);
  const b = textPoint(r.endContainer, r.endOffset, true);
  if (!a || !b) return null;
  const w = document.createTreeWalker(section, NodeFilter.SHOW_TEXT);
  let pos = 0;
  let start = -1;
  let end = -1;
  for (let n = w.nextNode(); n; n = w.nextNode()) {
    if (n === a.node) start = pos + a.offset;
    if (n === b.node) {
      end = pos + b.offset;
      break;
    }
    pos += (n.nodeValue ?? "").length;
  }
  return start >= 0 && end > start ? { start, end } : null;
}

function rangeFrom(section: HTMLElement, start: number, end: number): Range | null {
  const w = document.createTreeWalker(section, NodeFilter.SHOW_TEXT);
  const r = document.createRange();
  let pos = 0;
  let gotStart = false;
  for (let n = w.nextNode(); n; n = w.nextNode()) {
    const len = (n.nodeValue ?? "").length;
    if (!gotStart && start < pos + len) {
      r.setStart(n, start - pos);
      gotStart = true;
    }
    if (gotStart && end <= pos + len) {
      r.setEnd(n, end - pos);
      return r;
    }
    pos += len;
  }
  return null;
}

type HighlightRegistry = Map<string, unknown>;
type HighlightCtor = new (...ranges: Range[]) => unknown;

const HL_CSS = `
::highlight(sb-hl-y){background-color:rgba(242,213,74,.38);color:inherit}
::highlight(sb-hl-g){background-color:rgba(76,195,138,.38);color:inherit}
::highlight(sb-hl-p){background-color:rgba(255,122,182,.4);color:inherit}
::highlight(sb-hl-b){background-color:rgba(90,169,255,.38);color:inherit}`;

interface Pending {
  anchor: string;
  hash: string;
  start: number;
  end: number;
  text: string;
}

/**
 * Select text, pick a pen. Highlights are saved on the device and painted with the CSS Custom
 * Highlight API, so the lesson's DOM is never modified. Browsers without that API still keep the
 * saved list in the panel.
 */
export function Highlighter({ chapterId }: { chapterId: string }) {
  const items = useHighlights(chapterId);
  const path = usePathname();
  const [bar, setBar] = useState<{ x: number; y: number } | null>(null);
  const pending = useRef<Pending | null>(null);

  useEffect(() => {
    let raf = 0;
    const clear = () => {
      pending.current = null;
      setBar(null);
    };
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const sel = document.getSelection();
        const root = contentRoot();
        if (!sel || sel.isCollapsed || sel.rangeCount === 0 || !root) return clear();
        const r = sel.getRangeAt(0);
        const el = (n: Node) => (n.nodeType === Node.ELEMENT_NODE ? (n as Element) : n.parentElement);
        if (!root.contains(r.commonAncestorContainer)) return clear();
        const sa = el(r.startContainer)?.closest<HTMLElement>("[data-topic]") ?? null;
        const sb = el(r.endContainer)?.closest<HTMLElement>("[data-topic]") ?? null;
        if (sa !== sb) return clear();
        const text = norm(sel.toString());
        if (text.length < 2) return clear();
        const section = sa ?? root;
        const o = offsetsIn(section, r);
        if (!o) return clear();
        const ordinal = sa ? Array.from(root.querySelectorAll("[data-topic]")).indexOf(sa) : -1;
        pending.current = {
          anchor: sa && ordinal >= 0 ? `t${ordinal}` : "",
          hash: sa?.id ?? "",
          start: o.start,
          end: o.end,
          text: text.slice(0, 240),
        };
        const rect = r.getBoundingClientRect();
        setBar({ x: Math.min(Math.max(rect.left + rect.width / 2, 120), window.innerWidth - 120), y: Math.max(rect.top, 56) });
      });
    };
    document.addEventListener("selectionchange", update);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("selectionchange", update);
    };
  }, []);

  // paint this page's saved highlights
  useEffect(() => {
    const reg = (CSS as unknown as { highlights?: HighlightRegistry }).highlights;
    const HL = (window as unknown as { Highlight?: HighlightCtor }).Highlight;
    if (!reg || !HL) return;
    const byColor: Record<PenColor, Range[]> = { y: [], g: [], p: [], b: [] };
    for (const h of items) {
      if (h.page !== path) continue;
      const section = sectionFor(h.anchor);
      if (!section) continue;
      const r = rangeFrom(section, h.start, h.end);
      // only paint if the text still matches what was saved (content may have changed since)
      if (r && norm(r.toString()).startsWith(norm(h.text).slice(0, 40))) byColor[h.color].push(r);
    }
    (Object.keys(byColor) as PenColor[]).forEach((c) => reg.set(`sb-hl-${c}`, new HL(...byColor[c])));
    return () => {
      (Object.keys(byColor) as PenColor[]).forEach((c) => reg.delete(`sb-hl-${c}`));
    };
  }, [items, path]);

  const apply = (color: PenColor) => {
    const p = pending.current;
    if (!p) return;
    addHighlight(chapterId, { page: path, anchor: p.anchor, hash: p.hash, color, text: p.text, start: p.start, end: p.end });
    document.getSelection()?.removeAllRanges();
    pending.current = null;
    setBar(null);
  };

  return (
    <>
      <style>{HL_CSS}</style>
      {bar ? (
        <div
          className={styles.hlBar}
          style={{ left: bar.x, top: bar.y - 8 }}
          role="toolbar"
          aria-label="Highlight selected text"
          onMouseDown={(e) => e.preventDefault()}
        >
          {(Object.keys(PENS) as PenColor[]).map((c) => (
            <button
              key={c}
              type="button"
              className={styles.pen}
              style={{ "--p": PENS[c].hex } as CSSProperties}
              aria-label={`Highlight as ${PENS[c].label}`}
              title={PENS[c].label}
              onClick={() => apply(c)}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}

/** Pen legend + the student's saved highlights across the whole chapter. */
export function HighlightsPanel({ chapterId }: { chapterId: string }) {
  const items = useHighlights(chapterId);
  const recent = [...items].reverse().slice(0, 8);
  return (
    <div className={styles.box}>
      <p className={styles.panelTitle}>My highlights{items.length ? ` · ${items.length}` : ""}</p>
      <div className={styles.pens} role="list" aria-label="Pen meanings" style={{ flexWrap: "wrap" }}>
        {(Object.keys(PENS) as PenColor[]).map((c) => (
          <span key={c} role="listitem" className={styles.hint} style={{ display: "flex", gap: "0.35rem", alignItems: "center", margin: 0 }}>
            <i className={styles.pen} style={{ "--p": PENS[c].hex, width: "0.85rem", height: "0.85rem", display: "inline-block" } as CSSProperties} />
            {PENS[c].label}
          </span>
        ))}
      </div>
      {recent.length === 0 ? (
        <p className={styles.hint}>Select any text in a lesson, then pick a pen. Your highlights are saved on this device.</p>
      ) : (
        <div style={{ marginTop: "0.8rem" }}>
          {recent.map((h) => (
            <div key={h.id} className={styles.hlItem} style={{ "--p": PENS[h.color].hex } as CSSProperties}>
              <i />
              <div>
                <Link href={`${h.page}${h.hash ? `#${h.hash}` : ""}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {h.text.length > 90 ? `${h.text.slice(0, 90)}…` : h.text}
                </Link>
                <small>{PENS[h.color].label}</small>
              </div>
              <button type="button" aria-label="Remove highlight" onClick={() => removeHighlight(chapterId, h.id)}>
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
