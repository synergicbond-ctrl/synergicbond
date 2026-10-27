"use client";

import { useEffect } from "react";
import { setCurrentTopic } from "./currentTopic";
import { resetOutline, setCurrentHeading, setOutline, type OutlineItem } from "./outline";
import { setLast } from "./progress";

const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "section";

/**
 * Reads the page it sits on (renders nothing):
 *  - collects h2/h3 headings into the outline, giving id-less headings an id so they can be linked to
 *  - tracks the heading and the numbered topic nearest the top of the viewport
 *  - notes whether the page has typed content blocks
 * Everything is discovered from the DOM, so it works for every chapter unchanged.
 */
export function ReaderObserver({ chapterId, initialTopic }: { chapterId: string; initialTopic: number | null }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-reader-content]");
    if (!root) return;
    setCurrentTopic(initialTopic);

    const used = new Set<string>(Array.from(document.querySelectorAll("[id]")).map((e) => e.id));
    const headings = Array.from(root.querySelectorAll<HTMLElement>("h2, h3")).filter(
      (h) => !h.closest("[data-reader-skip]") && (h.textContent ?? "").trim().length > 0,
    );
    const items: OutlineItem[] = headings.map((h) => {
      if (!h.id) {
        let id = slug(h.textContent ?? "");
        let n = 2;
        while (used.has(id)) id = `${slug(h.textContent ?? "")}-${n++}`;
        used.add(id);
        h.id = id;
        h.style.scrollMarginTop = "5.5rem";
      }
      return { id: h.id, text: (h.textContent ?? "").replace(/\s+/g, " ").trim(), level: h.tagName === "H3" ? 3 : 2 };
    });
    // Skim/Exam only make sense where the explanatory text itself is typed (a "concept" block)
    setOutline(items, !!root.querySelector('[data-block="concept"]'));

    if (typeof IntersectionObserver === "undefined") return;
    const topics = Array.from(root.querySelectorAll<HTMLElement>("[data-topic]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          if (el.dataset.topic) {
            const n = Number(el.dataset.topic);
            if (Number.isInteger(n)) {
              setCurrentTopic(n);
              setLast(chapterId, n);
            }
          } else {
            setCurrentHeading(el.id);
          }
        }
      },
      { rootMargin: "-18% 0px -72% 0px", threshold: 0 },
    );
    headings.forEach((h) => io.observe(h));
    topics.forEach((t) => io.observe(t));
    return () => {
      io.disconnect();
      setCurrentTopic(null);
      resetOutline();
    };
  }, [chapterId, initialTopic]);
  return null;
}

/** Kept for existing imports. */
export const ScrollSpy = ReaderObserver;
