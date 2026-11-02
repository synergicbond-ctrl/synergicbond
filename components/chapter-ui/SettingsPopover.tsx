"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./reader.module.css";
import { ComfortPanel } from "./ComfortPanel";
import { HighlightsPanel } from "./Highlighter";
import { ModeSwitch } from "./ModeSwitch";

/** "Aa" button in the top bar: reading settings from any page, including chapter hubs. */
export function SettingsPopover({ chapterId }: { chapterId: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.popWrap} ref={ref}>
      <button type="button" className={styles.btn} aria-expanded={open} aria-haspopup="dialog" onClick={() => setOpen((o) => !o)}>
        Aa Reading settings
      </button>
      {open ? (
        <div className={styles.popover} role="dialog" aria-label="Reading settings">
          <ModeSwitch />
          <ComfortPanel />
          <HighlightsPanel chapterId={chapterId} />
        </div>
      ) : null}
    </div>
  );
}
