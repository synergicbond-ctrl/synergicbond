"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import styles from "./reader.module.css";
import { useCurrentTopic } from "./currentTopic";
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
