import Link from "next/link";
import type { ReactNode } from "react";
import { BlockMath, InlineMath } from "@/components/math/react-katex";
import { AppShell } from "@/components/AppShell";
import { Block, ExamplesBlock, TopicSection } from "@/components/chapter-ui/blocks";
import { type LessonRef } from "@/components/notes/canonical";
import { CHEM_BOND_CHAPTER, hueForTopic, readerData } from "./readerData";
import { chemBondGroupForPart, chemBondPartMeta } from "./meta";

// Part list and groups live in ./meta (moved unchanged); re-exported so existing imports keep working.
export { CHEM_BOND_GROUPS, chemBondGroupForPart, chemBondPartMeta } from "./meta";
export type { ChemBondGroup, ChemBondPartMeta } from "./meta";

function chemBondLessonRef(index: number): LessonRef | undefined {
  const entry = chemBondPartMeta[index];
  if (!entry) return undefined;
  return { href: entry.href, number: `Part ${String(entry.part).padStart(2, "0")}`, title: entry.title, meta: entry.tag };
}

/**
 * One part of the course, inside the shared AppShell. The reader data adds the chapter map,
 * the topic rail and chapter-wide search on top of the shell every chapter uses.
 */
export function ChemBondPartShell({ part, title, children }: { part: number; title: string; children: ReactNode }) {
  const currentIndex = chemBondPartMeta.findIndex((entry) => entry.part === part);
  const group = chemBondGroupForPart(part);
  const prevRef = chemBondLessonRef(currentIndex - 1);
  const nextRef = chemBondLessonRef(currentIndex + 1);

  return (
    <AppShell
      discipline="Physical Chemistry · JEE Advanced"
      chapterTitle="Chemical Bonding & Molecular Structure"
      chapterSlug="chemical-bonding"
      description="From Kossel–Lewis to MOT — the 189-topic authoritative sequence covering every bond type, geometry, and concept tested in JEE Advanced."
      free={false}
      lessonNumber={`Part ${String(part).padStart(2, "0")} of ${chemBondPartMeta.length} · ${group.label.split(",")[0]}`}
      lessonTitle={title}
      hubRef={{ href: "/learn/chemical-bonding", label: "All parts" }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
      reader={{ ...readerData, part }}
    >
      <div className="mx-auto max-w-3xl space-y-10">
        {children}
      </div>
    </AppShell>
  );
}

export function NoteBlock({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      {title ? (
        <h3
          className="sb-ui-title"
          style={{ fontSize: "1.05em", fontWeight: 600, color: "var(--foreground)", margin: 0 }}
        >
          {title}
        </h3>
      ) : null}
      <div style={{ lineHeight: 1.78, color: "var(--text-body)" }}>{children}</div>
    </div>
  );
}

export function TopicBlock({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <TopicSection chapterId={CHEM_BOND_CHAPTER.id} number={number} title={title} hue={hueForTopic(number)}>
      {children}
    </TopicSection>
  );
}

export function LearningObjectives({ items }: { items: ReactNode[] }) {
  return (
    <aside
      aria-label="Learning objectives"
      style={{ borderLeft: "3px solid var(--chem-orbital)", paddingLeft: "1rem", marginBottom: "0.5rem" }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: "0.7em",
          fontWeight: 900,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--chem-orbital)",
          marginBottom: "0.7rem",
        }}
      >
        In this part
      </p>
      <ul style={{ display: "grid", gap: "0.35rem", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: "flex", gap: "0.45rem", fontSize: "0.9em", lineHeight: 1.55, color: "var(--text-muted)" }}>
            <span aria-hidden="true" style={{ color: "var(--chem-orbital)", flexShrink: 0, marginTop: "0.15rem" }}>◆</span>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function TextbookExamples({ items }: { items: { title: string; body: string }[] }) {
  return <ExamplesBlock items={items} />;
}

export function WorkedExample({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Block kind="example" title="Worked example">
      <h3 style={{ fontSize: "1.05em", fontWeight: 600, margin: 0 }}>{title}</h3>
      {children}
    </Block>
  );
}

export function ImportantNote({ title = "Important note", children }: { title?: string; children: ReactNode }) {
  return (
    <Block kind="jee" title={title}>
      {children}
    </Block>
  );
}

export function ModernNote({ children }: { children: ReactNode }) {
  return <Block kind="modern">{children}</Block>;
}

export function TrapCallout({ trap, reality }: { trap: ReactNode; reality: ReactNode }) {
  return (
    <Block kind="trap" title="Common trap">
      <p>{trap}</p>
      <p>
        <strong>Reality: </strong>
        {reality}
      </p>
    </Block>
  );
}

export function PracticeQuestion({ prompt, answer }: { prompt: ReactNode; answer?: ReactNode }) {
  return (
    <section
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid color-mix(in srgb, var(--chem-orbital) 30%, transparent)",
        borderLeftWidth: "3px",
        borderLeftColor: "var(--chem-orbital)",
        padding: "1rem 1.1rem",
      }}
    >
      <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.7em", fontWeight: 900, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--chem-orbital)", marginBottom: "0.5rem" }}>
        Check your understanding
      </p>
      <div style={{ lineHeight: 1.65, color: "var(--foreground)" }}>{prompt}</div>
      {answer ? (
        <div style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border)", fontSize: "0.92em" }}>
          <span style={{ fontWeight: 700, color: "var(--chem-rule)" }}>Answer: </span>
          <span style={{ color: "var(--text-body)" }}>{answer}</span>
        </div>
      ) : null}
    </section>
  );
}

export function SummaryStrip({ items }: { items: ReactNode[] }) {
  return (
    <section
      aria-label="Key takeaways"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1px",
        overflow: "hidden",
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
        background: "var(--border)",
      }}
    >
      {items.map((item, index) => (
        <div key={index} style={{ background: "var(--surface)", padding: "1rem 1.1rem" }}>
          <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.7em", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--chem-bond)", marginBottom: "0.4rem" }}>
            0{index + 1}
          </p>
          <p style={{ fontSize: "0.92em", lineHeight: 1.6, color: "var(--text-body)" }}>{item}</p>
        </div>
      ))}
    </section>
  );
}

export function FormulaLine({ math }: { math: string }) {
  return (
    <Block kind="formula">
      <div style={{ overflowX: "auto" }}>
        <BlockMath math={math} />
      </div>
    </Block>
  );
}

export function MathText({ math }: { math: string }) { return <InlineMath math={math} />; }

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", margin: 0, padding: 0, listStyle: "none" }}>
      {items.map((item, index) => (
        <li key={index} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start" }}>
          <span aria-hidden="true" style={{ width: "0.4em", height: "0.4em", borderRadius: "50%", background: "var(--c, var(--chem-bond))", flexShrink: 0, marginTop: "0.7em" }} />
          <span style={{ lineHeight: 1.72, color: "var(--text-body)" }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function DataTable({ headers, rows }: { headers: ReactNode[]; rows: ReactNode[][] }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
      <table style={{ minWidth: "38rem", width: "100%", textAlign: "left", fontSize: "0.92em", borderCollapse: "collapse" }}>
        <thead style={{ background: "var(--surface-2)", color: "var(--foreground)" }}>
          <tr>{headers.map((header, index) => <th key={index} scope="col" style={{ padding: "0.75rem 1rem", fontWeight: 600 }}>{header}</th>)}</tr>
        </thead>
        <tbody style={{ color: "var(--text-body)" }}>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ borderTop: "1px solid var(--border)" }}>
              {row.map((cell, cellIndex) => <td key={cellIndex} style={{ padding: "0.75rem 1rem", verticalAlign: "top", lineHeight: 1.6 }}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DiagramBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Block kind="visual" title={title}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "1rem", overflowX: "auto" }}>
        {children}
      </div>
    </Block>
  );
}

export function PartNavigator({ previous, next }: { previous?: { href: string; label: string }; next?: { href: string; label: string } }) {
  return (
    <nav aria-label="Continue through Chemical Bonding" style={{ display: "flex", alignItems: "stretch", justifyContent: "space-between", gap: "0.75rem", borderTop: "1px solid var(--border)", paddingTop: "1.5rem", marginTop: "1rem" }}>
      {previous ? (
        <Link href={previous.href} style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)", padding: "0.75rem 1rem", fontSize: "0.875rem", fontWeight: 600, color: "var(--text-muted)", textDecoration: "none" }}>
          ← {previous.label}
        </Link>
      ) : <span />}
      {next ? (
        <Link href={next.href} style={{ borderRadius: "var(--radius)", border: "1px solid color-mix(in srgb, var(--chem-bond) 30%, transparent)", padding: "0.75rem 1rem", textAlign: "right", fontSize: "0.875rem", fontWeight: 600, color: "var(--chem-bond)", textDecoration: "none" }}>
          {next.label} →
        </Link>
      ) : null}
    </nav>
  );
}
