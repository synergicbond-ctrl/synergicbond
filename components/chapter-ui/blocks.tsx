import type { CSSProperties, ReactNode } from "react";
import styles from "./reader.module.css";
import { TopicTools } from "./TopicTools";

/**
 * Typed content blocks. Each kind has its own colour, label AND glyph, so the
 * meaning survives for colour-blind readers and in the high-contrast theme.
 */
export type BlockKind = "concept" | "formula" | "example" | "trap" | "jee" | "modern" | "visual";

export const BLOCK_META: Record<BlockKind, { label: string; glyph: string; cssVar: string }> = {
  concept: { label: "Concept", glyph: "◆", cssVar: "--c-concept" },
  formula: { label: "Formula", glyph: "∑", cssVar: "--c-formula" },
  example: { label: "Worked example", glyph: "▶", cssVar: "--c-example" },
  trap: { label: "Common trap", glyph: "⚠", cssVar: "--c-trap" },
  jee: { label: "JEE focus", glyph: "★", cssVar: "--c-jee" },
  modern: { label: "Exam model vs modern view", glyph: "✦", cssVar: "--c-modern" },
  visual: { label: "Diagram", glyph: "◉", cssVar: "--c-visual" },
};

export function Block({
  kind,
  title,
  as = "section",
  children,
}: {
  kind: BlockKind;
  title?: string;
  /** "figure" keeps a real <figure>/<figcaption> for diagrams */
  as?: "section" | "figure";
  children: ReactNode;
}) {
  const meta = BLOCK_META[kind];
  const label = title ?? meta.label;
  const glyph = (
    <span className={styles.glyph} aria-hidden="true">
      {meta.glyph}
    </span>
  );
  if (as === "figure") {
    return (
      <figure className={styles.block} data-block={kind} aria-label={label}>
        <figcaption className={styles.tag}>
          {glyph}
          {label}
        </figcaption>
        <div className={styles.body}>{children}</div>
      </figure>
    );
  }
  return (
    <section className={styles.block} data-block={kind} aria-label={label}>
      <p className={styles.tag}>
        {glyph}
        {label}
      </p>
      <div className={styles.body}>{children}</div>
    </section>
  );
}

/**
 * The explanatory text of a topic. `lead` (the first paragraph) is always shown;
 * `children` (further paragraphs and bullets) are hidden in Skim mode.
 */
export function ConceptBlock({ lead, children }: { lead: ReactNode; children?: ReactNode }) {
  return (
    <Block kind="concept">
      <div className={styles.prose}>{lead}</div>
      {children ? (
        <div className={`${styles.body} ${styles.prose}`} data-rest="">
          {children}
        </div>
      ) : null}
    </Block>
  );
}

export function ExamplesBlock({ items }: { items: { title: string; body: string }[] }) {
  return (
    <Block kind="example" title="Textbook examples">
      <div className={styles.exGrid}>
        {items.map((item) => (
          <article key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </Block>
  );
}

export function TopicSection({
  chapterId,
  number,
  title,
  hue,
  children,
}: {
  chapterId: string;
  number: number;
  title: string;
  hue: string;
  children: ReactNode;
}) {
  return (
    <section id={`topic-${number}`} data-topic={number} className={styles.topic} style={{ "--h": hue } as CSSProperties}>
      <div className={styles.topicHead}>
        <span className={styles.topicNo}>{String(number).padStart(2, "0")}</span>
        <h2 className={styles.topicTitle}>{title}</h2>
      </div>
      <TopicTools chapterId={chapterId} topic={number} />
      {children}
    </section>
  );
}
