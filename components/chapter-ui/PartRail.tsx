"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import styles from "./reader.module.css";
import { useCurrentTopic } from "./currentTopic";
import { useProgress } from "./progress";
import type { ReaderPart } from "./types";

/** Topics of the current part, with done ticks and the topic you are reading highlighted. */
export function PartRail({
  chapterId,
  part,
  nextPart,
  onNavigate,
}: {
  chapterId: string;
  part: ReaderPart;
  nextPart?: ReaderPart;
  onNavigate?: () => void;
}) {
  const progress = useProgress(chapterId);
  const now = useCurrentTopic();
  const done = new Set(progress.done);
  return (
    <div style={{ "--h": part.hue } as CSSProperties}>
      <p className={styles.panelTitle}>This part</p>
      <div className={styles.partCard}>
        <small>
          Part {String(part.part).padStart(2, "0")} · {part.groupLabel}
        </small>
        <b>{part.title}</b>
      </div>
      {part.topics.length ? (
        <nav aria-label="Topics in this part">
          {part.topics.map((t) => (
            <a
              key={t.number}
              href={`#topic-${t.number}`}
              className={styles.topicLink}
              data-done={done.has(t.number) ? "1" : undefined}
              aria-current={now === t.number ? "true" : undefined}
              onClick={onNavigate}
            >
              <span className={styles.n}>{t.number}</span>
              <span>{t.title}</span>
              <span className={styles.m} aria-hidden="true">
                {done.has(t.number) ? "✓" : now === t.number ? "●" : ""}
              </span>
            </a>
          ))}
        </nav>
      ) : (
        <p className={styles.hint}>This part is a practice set, so it has no numbered topics.</p>
      )}
      {nextPart ? (
        <Link href={nextPart.href} className={styles.nextPart} onClick={onNavigate}>
          Next part
          <b>
            {String(nextPart.part).padStart(2, "0")} · {nextPart.title}
          </b>
        </Link>
      ) : null}
    </div>
  );
}
