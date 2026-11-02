"use client";

import { BLOCK_META, type BlockKind } from "./blocks";
import { useOutline } from "./outline";
import styles from "./reader.module.css";

const ORDER: BlockKind[] = ["concept", "formula", "example", "trap", "jee", "modern", "visual"];
const LABEL: Record<BlockKind, string> = {
  concept: "Concept",
  formula: "Formula",
  example: "Worked example",
  trap: "Trap",
  jee: "JEE tip",
  modern: "Modern view",
  visual: "Diagram",
};

/** What kinds of block this lesson contains, read from the page itself; click one to jump to it. */
export function InThisTopic() {
  const { blocks } = useOutline();
  const counts = blocks as Partial<Record<BlockKind, number>>;

  const kinds = ORDER.filter((k) => counts[k]);
  if (kinds.length === 0) return null;

  const jump = (k: BlockKind) =>
    document.querySelector(`[data-reader-content] [data-block="${k}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div className={styles.box}>
      <p className={styles.panelTitle}>In this topic</p>
      <ul className={styles.legendList}>
        {kinds.map((k) => (
          <li key={k}>
            <button type="button" onClick={() => jump(k)} style={{ "--c": `var(${BLOCK_META[k].cssVar})` } as React.CSSProperties}>
              <span aria-hidden="true">{BLOCK_META[k].glyph}</span>
              {LABEL[k]}
              {(counts[k] ?? 0) > 1 ? <em>{counts[k]}</em> : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
