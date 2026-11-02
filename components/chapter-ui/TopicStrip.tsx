"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import styles from "./reader.module.css";
import { useCurrentTopic } from "./currentTopic";
import { useOutline } from "./outline";
import { useProgress } from "./progress";
import type { StripSegment } from "./types";

/** The whole chapter as one line: a block per topic, coloured by unit. */
export function TopicStripBar({ chapterId, segments, label = "Chapter map" }: { chapterId: string; segments: StripSegment[]; label?: string }) {
  const progress = useProgress(chapterId);
  const now = useCurrentTopic();
  const done = new Set(progress.done);
  const saved = new Set(progress.saved);
  return (
    <nav className={styles.strip} aria-label={label}>
      {segments.map((s) => (
        <Link
          key={s.topic}
          href={s.href}
          className={styles.seg}
          style={{ "--h": s.hue } as CSSProperties}
          data-done={done.has(s.topic) ? "1" : undefined}
          data-now={now === s.topic ? "1" : undefined}
          data-saved={saved.has(s.topic) ? "1" : undefined}
          title={`Topic ${s.topic}: ${s.title}`}
          aria-label={`Topic ${s.topic}: ${s.title}${done.has(s.topic) ? " (done)" : ""}`}
          aria-current={now === s.topic ? "location" : undefined}
        />
      ))}
    </nav>
  );
}

/** Sticky version shown above the reading area, with a "where you are" line. */
export function StickyStrip({
  chapterId,
  segments,
  where,
}: {
  chapterId: string;
  segments: StripSegment[];
  where: string;
}) {
  const progress = useProgress(chapterId);
  const now = useCurrentTopic();
  const pct = Math.round((progress.done.length / Math.max(1, segments.length)) * 100);
  return (
    <div className={styles.stripWrap}>
      <div className={styles.stripHead}>
        <span>
          <b>You are here:</b> {where}
          {now ? ` · topic ${now} of ${segments.length}` : ""}
        </span>
        <span>
          {progress.done.length} of {segments.length} done · {pct}%
        </span>
      </div>
      <TopicStripBar chapterId={chapterId} segments={segments} />
    </div>
  );
}

const PAGE_HUES = ["#f2b53a", "#3cc8e8", "#4cc38a", "#ff7a59", "#b99aff", "#ff7ab6", "#cbd5e1"];

/**
 * The same sticky chapter strip for chapters that have no numbered-topic data: one block per
 * section heading found on the page, so every chapter has the "where am I" line.
 */
export function PageStrip({ where }: { where: string }) {
  const { items, current } = useOutline();
  const sections = items.filter((it) => it.level === 2);
  if (sections.length < 3) return null;
  // the heading in view may be an h3; light up the h2 it sits under
  const idx = items.findIndex((it) => it.id === current);
  let now = -1;
  if (idx >= 0) {
    const owner = items.slice(0, idx + 1).reverse().find((it) => it.level === 2);
    now = owner ? sections.indexOf(owner) : -1;
  }
  return (
    <div className={styles.stripWrap}>
      <div className={styles.stripHead}>
        <span>
          <b>You are here:</b> {where}
          {now >= 0 ? ` · section ${now + 1} of ${sections.length}` : ""}
        </span>
        <span>{sections.length} sections</span>
      </div>
      <nav className={styles.strip} aria-label="Page map">
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={styles.seg}
            style={{ "--h": PAGE_HUES[i % PAGE_HUES.length] } as CSSProperties}
            data-now={now === i ? "1" : undefined}
            title={s.text}
            aria-label={`Section ${i + 1}: ${s.text}`}
            aria-current={now === i ? "location" : undefined}
          />
        ))}
      </nav>
    </div>
  );
}
