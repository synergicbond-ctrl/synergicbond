"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import styles from "./reader.module.css";
import type { ReaderPart } from "./types";

/**
 * The chapter map for chapters whose parts have no numbered topics: every unit with its parts,
 * the part you are reading marked, then the next part. Nothing is hidden or shortened.
 */
export function UnitRail({
  parts,
  part,
  nextPart,
  onNavigate,
}: {
  parts: ReaderPart[];
  part: ReaderPart;
  nextPart?: ReaderPart;
  onNavigate?: () => void;
}) {
  const units: { label: string; hue: string; parts: ReaderPart[] }[] = [];
  for (const p of parts) {
    const last = units[units.length - 1];
    if (last && last.label === p.groupLabel) last.parts.push(p);
    else units.push({ label: p.groupLabel, hue: p.hue, parts: [p] });
  }
  return (
    <div style={{ "--h": part.hue } as CSSProperties}>
      <p className={styles.panelTitle}>Chapter map</p>
      {units.map((unit) => (
        <section key={unit.label} style={{ "--h": unit.hue, marginTop: "0.6rem" } as CSSProperties}>
          <p className={styles.hint}>{unit.label}</p>
          <nav aria-label={unit.label}>
            {unit.parts.map((p) => (
              <Link
                key={p.part}
                href={p.href}
                className={styles.topicLink}
                aria-current={p.part === part.part ? "page" : undefined}
                onClick={onNavigate}
              >
                <span className={styles.n}>{String(p.part).padStart(2, "0")}</span>
                <span>{p.title}</span>
              </Link>
            ))}
          </nav>
        </section>
      ))}
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
