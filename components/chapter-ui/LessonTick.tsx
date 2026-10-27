"use client";

import styles from "./reader.module.css";
import { useChapterId } from "./chapterContext";
import { useProgress } from "./progress";

/** Small "✓ Done" marker on a lesson card when the student has marked that lesson done. */
export function LessonTick({ href }: { href: string }) {
  const chapterId = useChapterId();
  const progress = useProgress(chapterId);
  if (!chapterId || !progress.pages.includes(href)) return null;
  return (
    <span className={styles.tick} role="img" aria-label="Lesson completed">
      ✓ Done
    </span>
  );
}
