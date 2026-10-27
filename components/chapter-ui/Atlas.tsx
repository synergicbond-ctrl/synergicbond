"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import styles from "./reader.module.css";
import { useProgress } from "./progress";
import { SearchButton } from "./SearchPalette";
import { TopicStripBar } from "./TopicStrip";
import type { ReaderChapter, ReaderPart, StripSegment } from "./types";

export interface AtlasGroup {
  label: string;
  hue: string;
  /** first and last part number in this unit */
  from: number;
  to: number;
  parts: ReaderPart[];
}

type Filter = "all" | "progress" | "saved";
const nn = (n: number) => String(n).padStart(2, "0");

/**
 * Front page for a long chapter: where am I, what is next, and the whole chapter at a glance
 * (one coloured block per topic, grouped into units).
 */
export function Atlas({
  chapter,
  title,
  eyebrow,
  intro,
  facts,
  groups,
  segments,
}: {
  chapter: ReaderChapter;
  title: string;
  eyebrow: string;
  intro: string;
  facts: { value: string; label: string }[];
  groups: AtlasGroup[];
  segments: StripSegment[];
}) {
  const progress = useProgress(chapter.id);
  const [filter, setFilter] = useState<Filter>("all");
  const done = new Set(progress.done);
  const saved = new Set(progress.saved);
  const bySeg = new Map(segments.map((s) => [s.topic, s]));

  const nextUndone = segments.find((s) => !done.has(s.topic)) ?? segments[0];
  const target = (progress.last && bySeg.get(progress.last)) || nextUndone;
  const hasStarted = progress.last !== null || progress.done.length > 0;
  const pct = Math.round((progress.done.length / Math.max(1, segments.length)) * 100);

  const partState = (p: ReaderPart) => {
    const d = p.topics.filter((t) => done.has(t.number)).length;
    const reading = progress.last !== null && p.topics.some((t) => t.number === progress.last);
    const s = p.topics.some((t) => saved.has(t.number));
    return { d, reading, s, complete: p.topics.length > 0 && d === p.topics.length };
  };
  const visible = (p: ReaderPart) => {
    const st = partState(p);
    if (filter === "progress") return st.reading || (st.d > 0 && !st.complete);
    if (filter === "saved") return st.s;
    return true;
  };

  const counts = {
    progress: groups.flatMap((g) => g.parts).filter((p) => { const st = partState(p); return st.reading || (st.d > 0 && !st.complete); }).length,
    saved: groups.flatMap((g) => g.parts).filter((p) => partState(p).s).length,
  };

  return (
    <>
      <div className={styles.atlas}>
        <div className={styles.atlasHero}>
          <div>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 className={styles.atlasTitle}>{title}</h2>
            <p style={{ maxWidth: "40rem", color: "var(--rd-ink2)", lineHeight: 1.65 }}>{intro}</p>
            <div className={styles.facts}>
              {facts.map((f) => (
                <div key={f.label}>
                  <b>{f.value}</b>
                  {f.label}
                </div>
              ))}
            </div>
          </div>
          {target ? (
            <div className={styles.resume} style={{ "--h": target.hue } as CSSProperties}>
              <small>
                {hasStarted ? "Continue" : "Start here"} · Part {nn(target.part)} · {pct}% done
              </small>
              <h2>
                {target.topic} · {target.title}
              </h2>
              <p style={{ fontSize: "0.82em", color: "var(--rd-ink3)", margin: 0 }}>
                {progress.done.length} of {segments.length} topics marked done on this device
              </p>
              <Link href={target.href}>
                <span>{hasStarted ? "Resume reading" : "Start reading"}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : null}
        </div>

        <div className={styles.toolRow}>
          <SearchButton className={styles.search} label={`Search ${segments.length} topics, formulas, JEE notes…`} />
          <button type="button" className={styles.chip} aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
            All parts
          </button>
          <button type="button" className={styles.chip} aria-pressed={filter === "progress"} onClick={() => setFilter("progress")}>
            In progress · {counts.progress}
          </button>
          <button type="button" className={styles.chip} aria-pressed={filter === "saved"} onClick={() => setFilter("saved")}>
            ★ Saved · {counts.saved}
          </button>
        </div>

        <div className={styles.atlasStrip}>
          <p className={styles.legend} style={{ margin: "0 0 0.6rem" }}>
            <span>
              <b style={{ color: "var(--rd-ink)" }}>The whole chapter in one line.</b> One block per topic, coloured by unit. Click any block to jump there.
            </span>
          </p>
          <TopicStripBar chapterId={chapter.id} segments={segments} />
          <div className={styles.unitBar} aria-hidden="true">
            {groups.map((g) => {
              const n = g.parts.reduce((a, p) => a + p.topics.length, 0);
              return n ? <i key={g.label} style={{ flex: n, "--h": g.hue } as CSSProperties} /> : null;
            })}
          </div>
          <p className={styles.legend}>
            <span>Filled block = done</span>
            <span>White outline = where you stopped</span>
            <span>Underlined block = saved</span>
            <span>Progress is stored on this device</span>
          </p>
        </div>

        {groups.map((g, gi) => {
          const shown = g.parts.filter(visible);
          if (!shown.length) return null;
          const total = g.parts.reduce((a, p) => a + p.topics.length, 0);
          const dn = g.parts.reduce((a, p) => a + partState(p).d, 0);
          return (
            <section key={g.label} className={styles.unit} style={{ "--h": g.hue } as CSSProperties} aria-label={g.label}>
              <div className={styles.unitHead}>
                <span className={styles.nu} aria-hidden="true">
                  {gi + 1}
                </span>
                <h3>{g.label}</h3>
                <small>
                  Parts {nn(g.from)}–{nn(g.to)}
                  {total ? ` · ${total} topics · ${dn}/${total} done` : ""}
                </small>
              </div>
              <div className={styles.cards}>
                {shown.map((p) => {
                  const st = partState(p);
                  const label = st.complete ? "✓ Done" : st.reading ? "● Reading" : st.d ? "Started" : "Not started";
                  return (
                    <Link key={p.part} href={p.href} className={styles.pc} data-now={st.reading ? "1" : undefined}>
                      <div className={styles.pcHead}>
                        <span className={styles.pcNo}>PART {nn(p.part)}</span>
                        <span className={styles.pcState} data-s={st.complete ? "done" : st.reading ? "now" : undefined}>
                          {p.topics.length ? label : "Practice"}
                        </span>
                      </div>
                      <h4>{p.title}</h4>
                      {p.topics.length ? (
                        <div className={styles.dots} aria-hidden="true">
                          {p.topics.map((t) => (
                            <i
                              key={t.number}
                              data-d={done.has(t.number) ? "1" : undefined}
                              data-n={progress.last === t.number ? "1" : undefined}
                              data-s={saved.has(t.number) ? "1" : undefined}
                            />
                          ))}
                        </div>
                      ) : null}
                      <div className={styles.pcFoot}>
                        {p.topics.length ? (
                          <>
                            <span>
                              <b>
                                {st.d}/{p.topics.length}
                              </b>{" "}
                              topics
                            </span>
                            <span>
                              topics {p.from}–{p.to}
                            </span>
                          </>
                        ) : (
                          <span>Integrated question bank</span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
        {filter !== "all" && groups.every((g) => !g.parts.some(visible)) ? (
          <p className={styles.empty} style={{ color: "var(--rd-ink3)" }}>
            {filter === "saved"
              ? "No saved topics yet. Open a topic and tap “☆ Save”."
              : "Nothing in progress yet. Start reading and your parts will appear here."}
          </p>
        ) : null}
      </div>
    </>
  );
}
