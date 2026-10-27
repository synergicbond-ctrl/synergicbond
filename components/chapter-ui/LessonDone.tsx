"use client";

import { usePathname } from "next/navigation";
import styles from "./reader.module.css";
import { togglePageDone, useProgress } from "./progress";

/** "Mark this lesson as done" at the end of any lesson page. Stored on this device. */
export function LessonDone({ chapterId }: { chapterId: string }) {
  const path = usePathname();
  const progress = useProgress(chapterId);
  const done = progress.pages.includes(path);
  return (
    <div className={styles.lessonDone}>
      <button type="button" className={styles.btn} aria-pressed={done} onClick={() => togglePageDone(chapterId, path)}>
        {done ? "✓ Lesson marked as done" : "Mark this lesson as done"}
      </button>
    </div>
  );
}
