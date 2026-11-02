"use client";

import styles from "./reader.module.css";
import { useOutline } from "./outline";

/** "On this page": the page's own headings, with the one in view highlighted. Works on every chapter. */
export function PageToc({ onNavigate, hue }: { onNavigate?: () => void; hue?: string }) {
  const { items, current } = useOutline();
  return (
    <div style={hue ? ({ "--h": hue } as React.CSSProperties) : undefined}>
      <p className={styles.panelTitle}>On this page</p>
      {items.length === 0 ? (
        <p className={styles.hint}>This page has no sub-headings.</p>
      ) : (
        <nav aria-label="On this page">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={styles.topicLink}
              style={{ paddingLeft: it.level === 3 ? "1.6rem" : undefined, fontSize: it.level === 3 ? "0.8em" : undefined }}
              aria-current={current === it.id ? "true" : undefined}
              onClick={onNavigate}
            >
              <span>{it.text}</span>
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
