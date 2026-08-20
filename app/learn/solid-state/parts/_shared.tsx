import Link from "next/link";
import type { ReactNode } from "react";
import {
  CanonicalNotesStyles,
  ChapterIdentityHeader,
  ChapterLessonPager,
  ChapterContentsRail,
  TopicHeader,
  type ChapterRailGroup,
  type ChapterRailLesson,
  type LessonRef,
} from "@/components/notes/canonical";
import { SOLID_STATE_PARTS } from "../parts";

export type SolidStateBlock =
  | { type: "p"; text: string }
  | { type: "formula"; latex: string; display: string }
  | { type: "bullets"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "ascii"; title?: string; text: string }
  | { type: "callout"; label: string; text: string; tone?: "info" | "trap" | "result" };

export type SolidStateSection = {
  title: string;
  blocks: SolidStateBlock[];
};

export type SolidStateExample = {
  title: string;
  question: string;
  steps: string[];
  answer: string;
};

export type SolidStatePartData = {
  part: number;
  slug: string;
  title: string;
  sourcePages: string;
  intro: string;
  sections: SolidStateSection[];
  traps: string[];
  examples: SolidStateExample[];
};

const SOLID_STATE_GROUPS: ChapterRailGroup[] = [
  { label: "Foundations & crystal classification", from: 1, to: 4, accent: "var(--chem-bond)" },
  { label: "Lattice, unit cells & crystal systems", from: 5, to: 10, accent: "var(--chem-orbital)" },
  { label: "Symmetry, Z, radius & density", from: 11, to: 16, accent: "var(--chem-rule)" },
  { label: "Packing & void geometry", from: 17, to: 18, accent: "var(--chem-bond)" },
  { label: "Radius ratio & important structures", from: 19, to: 20, accent: "var(--chem-energy)" },
  { label: "Defects & electrical properties", from: 21, to: 22, accent: "var(--chem-trap)" },
  { label: "Magnetic properties", from: 23, to: 23, accent: "var(--chem-energy)" },
];

const RAIL_LESSONS: ChapterRailLesson[] = SOLID_STATE_PARTS.map((p) => ({
  part: p.part,
  title: p.title,
  href: `/learn/solid-state/${p.slug}`,
}));

function lessonRef(partNumber: number): LessonRef | undefined {
  const entry = SOLID_STATE_PARTS.find((p) => p.part === partNumber);
  if (!entry) return undefined;
  return { href: `/learn/solid-state/${entry.slug}`, number: `Part ${String(entry.part).padStart(2, "0")}`, title: entry.title };
}

function groupForPart(part: number): ChapterRailGroup {
  return SOLID_STATE_GROUPS.find((g) => part >= g.from && part <= g.to) ?? SOLID_STATE_GROUPS[0];
}

function Block({ block }: { block: SolidStateBlock }) {
  if (block.type === "p") {
    return <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text-body)" }}>{block.text}</p>;
  }

  if (block.type === "formula") {
    return (
      <div
        data-latex={block.latex}
        style={{
          borderLeft: "3px solid var(--accent)",
          paddingLeft: "1rem",
          overflowX: "auto",
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: "0.95rem",
          color: "var(--foreground)",
        }}
      >
        {block.display}
      </div>
    );
  }

  if (block.type === "bullets") {
    return (
      <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem", margin: 0, padding: 0, listStyle: "none" }}>
        {block.items.map((item) => (
          <li key={item} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
            <span aria-hidden="true" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--chem-bond)", opacity: 0.7, flexShrink: 0, marginTop: "0.55rem" }} />
            <span style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--text-body)" }}>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "table") {
    return (
      <div style={{ overflowX: "auto", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
        <table style={{ minWidth: "38rem", width: "100%", textAlign: "left", fontSize: "0.875rem", borderCollapse: "collapse" }}>
          <thead style={{ background: "var(--surface-2)", color: "var(--foreground)" }}>
            <tr>{block.headers.map((h) => <th key={h} style={{ padding: "0.75rem 1rem", fontWeight: 600 }}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex} style={{ borderTop: "1px solid var(--border)" }}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ padding: "0.6rem 1rem", verticalAlign: "top", lineHeight: 1.6, color: "var(--text-body)", fontWeight: cellIndex === 0 ? 500 : 400 }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === "ascii") {
    return (
      <figure style={{ border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden", margin: 0 }}>
        {block.title ? (
          <div style={{ padding: "0.5rem 1rem", borderBottom: "1px solid var(--border)", fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            {block.title}
          </div>
        ) : null}
        <pre style={{ overflowX: "auto", whiteSpace: "pre", fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.8125rem", lineHeight: 1.6, color: "var(--foreground)", padding: "1rem" }}>{block.text}</pre>
      </figure>
    );
  }

  const tone = block.tone ?? "info";
  const borderColor = tone === "trap" ? "var(--chem-trap)" : tone === "result" ? "var(--chem-rule)" : "var(--chem-bond)";
  const labelColor = borderColor;
  return (
    <aside style={{ borderLeft: `3px solid ${borderColor}`, paddingLeft: "1rem" }}>
      <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "9px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: labelColor, marginBottom: "0.3rem" }}>
        {block.label}
      </p>
      <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--text-body)" }}>{block.text}</p>
    </aside>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <h2
        className="sb-ui-title"
        style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--foreground)", paddingBottom: "0.4rem", borderBottom: "1px solid var(--border)" }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {children}
      </div>
    </section>
  );
}

export function SolidStatePartPage({ data }: { data: SolidStatePartData }) {
  const group = groupForPart(data.part);

  return (
    <>
      <CanonicalNotesStyles />
      {/* compact lesson bar */}
      <div className="sbnLessonBar">
        <div className="sbnLessonBarInner">
          <Link href="/learn/solid-state" className="sbnLessonBarBack">← Solid State</Link>
          <span className="sbnLessonBarPos">
            Part {String(data.part).padStart(2, "0")} / {SOLID_STATE_PARTS.length}
          </span>
        </div>
      </div>

      {/* sidebar reading layout */}
      <div className="sbnSidebarBody">
        <article className="sbnCanvas" style={{ maxWidth: "720px" }}>
          <ChapterIdentityHeader
            subject="Physical Chemistry · JEE Advanced"
            chapterName="Solid State"
            descriptor="Crystal structure, lattice geometry, packing, defects and properties — the complete 23-part JEE Advanced sequence."
            topicCount={SOLID_STATE_PARTS.length}
            accentColor="var(--chem-bond)"
          />

          <TopicHeader
            as="h1"
            eyebrow={group.label}
            title={data.title}
            accentColor={group.accent}
          />

          {data.intro ? (
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              {data.intro}
            </p>
          ) : null}

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {data.sections.map((section) => (
              <Section key={section.title} title={section.title}>
                {section.blocks.map((block, index) => (
                  <Block key={`${section.title}-${index}`} block={block} />
                ))}
              </Section>
            ))}

            {data.traps.length > 0 ? (
              <Section title="JEE Advanced Traps & Edge Cases">
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem", margin: 0, padding: 0, listStyle: "none" }}>
                  {data.traps.map((trap) => (
                    <li key={trap} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                      <span aria-hidden="true" style={{ color: "var(--chem-trap)", flexShrink: 0, marginTop: "0.1rem", fontSize: "0.8rem" }}>⚠</span>
                      <span style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--text-body)" }}>{trap}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            ) : null}

            {data.examples.length > 0 ? (
              <Section title="Solved Examples">
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {data.examples.map((example, exIndex) => (
                    <article
                      key={example.title}
                      style={{
                        borderRadius: "var(--radius)",
                        border: "1px solid color-mix(in srgb, var(--chem-rule) 25%, transparent)",
                        borderLeftWidth: "3px",
                        borderLeftColor: "var(--chem-rule)",
                        padding: "1rem 1.1rem",
                      }}
                    >
                      <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "9px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--chem-rule)", marginBottom: "0.3rem" }}>
                        Worked example {exIndex + 1}
                      </p>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem" }}>{example.title}</h3>
                      <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--text-body)" }}>{example.question}</p>
                      <ol style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                        {example.steps.map((step) => (
                          <li key={step} style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-muted)" }}>{step}</li>
                        ))}
                      </ol>
                      <div style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border)", fontSize: "0.875rem", fontWeight: 600, color: "var(--chem-rule)" }}>
                        {example.answer}
                      </div>
                    </article>
                  ))}
                </div>
              </Section>
            ) : null}
          </div>

          <ChapterLessonPager
            prev={lessonRef(data.part - 1)}
            next={lessonRef(data.part + 1)}
            hubHref="/learn/solid-state"
            hubLabel="All lessons"
          />
        </article>

        <ChapterContentsRail
          title="Chapter Contents"
          groups={SOLID_STATE_GROUPS}
          lessons={RAIL_LESSONS}
          currentPart={data.part}
        />
      </div>
    </>
  );
}
