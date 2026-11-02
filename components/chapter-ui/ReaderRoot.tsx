"use client";

import { useEffect, type ReactNode } from "react";
import styles from "./reader.module.css";
import { ChapterContext } from "./chapterContext";
import { useOutline } from "./outline";
import { useSettings, type TextSize } from "./settings";

/** Root font size per setting. Scaling <html> makes every rem-based size on the page follow the control. */
const ROOT_PX: Record<TextSize, string> = { sm: "14.5px", md: "", lg: "18px", xl: "20.5px" };

/** Wrapper that applies the student's reading settings as data attributes (CSS does the rest). */
export function ReaderRoot({ children, chapterId = "" }: { children: ReactNode; chapterId?: string }) {
  const s = useSettings();
  const { hasBlocks } = useOutline();

  useEffect(() => {
    const el = document.documentElement;
    const before = el.style.fontSize;
    el.style.fontSize = ROOT_PX[s.size];
    return () => {
      el.style.fontSize = before;
    };
  }, [s.size]);

  return (
    <div
      className={styles.root}
      data-theme={s.theme}
      data-size={s.size}
      data-space={s.space}
      data-font={s.font}
      data-cvd={s.cvd ? "on" : "off"}
      data-mode={s.mode}
      data-modes={hasBlocks ? "1" : undefined}
    >
      <ChapterContext.Provider value={chapterId}>{children}</ChapterContext.Provider>
    </div>
  );
}
