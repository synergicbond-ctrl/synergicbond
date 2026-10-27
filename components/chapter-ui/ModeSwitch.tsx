"use client";

import type { CSSProperties } from "react";
import styles from "./reader.module.css";
import { useOutline } from "./outline";
import { settingsStore, useSettings, type StudyMode } from "./settings";

const MODES: { value: StudyMode; glyph: string; name: string; note: string; hue: string }[] = [
  { value: "skim", glyph: "◉", name: "Skim", note: "Only what to remember", hue: "var(--c-visual)" },
  { value: "read", glyph: "◆", name: "Read", note: "Full explanation", hue: "var(--c-concept)" },
  { value: "exam", glyph: "★", name: "Exam", note: "Formulas, traps, examples", hue: "var(--c-jee)" },
];

/**
 * Skim / Read / Exam. The same content is rendered once; CSS shows or hides typed block kinds from
 * the data-mode attribute, so nothing is duplicated or removed from the page. The switch only
 * appears on pages that actually use typed blocks.
 */
export function ModeSwitch() {
  const s = useSettings();
  const { hasBlocks } = useOutline();
  if (!hasBlocks) return null;
  return (
    <>
      <div className={styles.modes} role="group" aria-label="Study mode">
        {MODES.map((m) => (
          <button
            key={m.value}
            type="button"
            className={styles.mode}
            style={{ "--m": m.hue } as CSSProperties}
            aria-pressed={s.mode === m.value}
            onClick={() => settingsStore.set({ mode: m.value })}
          >
            <b>
              <span aria-hidden="true">{m.glyph}</span>
              {m.name}
            </b>
            <small>{m.note}</small>
          </button>
        ))}
      </div>
      <p className={styles.modeNote} data-for="skim">
        Skim mode: the opening idea, formulas and JEE notes only. Switch to Read for the full explanation.
      </p>
      <p className={styles.modeNote} data-for="exam">
        Exam mode: formulas, traps, JEE notes and worked examples. Explanations are hidden; switch to Read to see them.
      </p>
    </>
  );
}
