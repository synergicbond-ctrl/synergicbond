import Link from "next/link";
import type { ReactNode } from "react";
import { BlockMath, InlineMath } from "@/components/math/react-katex";
import { AppShell } from "@/components/AppShell";
import { type LessonRef } from "@/components/notes/canonical";

export type ChemBondPartMeta = {
  part: number;
  title: string;
  tag: string;
  href: string;
  range?: string;
};

export const chemBondPartMeta: ChemBondPartMeta[] = [
  { part: 1, title: "Bond Formation, Octet & Historical Foundations", tag: "Topics 1–7", range: "1–7", href: "/learn/chemical-bonding/part01" },
  { part: 2, title: "Maximum Covalency, Bond Models & Energy Curves", tag: "Topics 8–13", range: "8–13", href: "/learn/chemical-bonding/part02" },
  { part: 3, title: "Ionic Bonding, Lattice Energy & Isomorphism", tag: "Topics 14–21", range: "14–21", href: "/learn/chemical-bonding/part03" },
  { part: 4, title: "Lewis Structures, Covalency & Central-Atom Rules", tag: "Topics 22–27", range: "22–27", href: "/learn/chemical-bonding/part04" },
  { part: 5, title: "Atomic Orbitals, Nodes, Symmetry & Wave Functions", tag: "Topics 28–33", range: "28–33", href: "/learn/chemical-bonding/part05" },
  { part: 6, title: "Covalent Bond Types, VBT & Orbital Overlap", tag: "Topics 34–40", range: "34–40", href: "/learn/chemical-bonding/part06" },
  { part: 7, title: "Overlap Modes, σ/π/δ Bonds & Bond Strength", tag: "Topics 41–48", range: "41–48", href: "/learn/chemical-bonding/part07" },
  { part: 8, title: "Hybridisation: sp to sp³d³ & Isoelectronic Shapes", tag: "Topics 49–57", range: "49–57", href: "/learn/chemical-bonding/part08" },
  { part: 9, title: "VSEPR Foundations & Core Geometries", tag: "Topics 58–66", range: "58–66", href: "/learn/chemical-bonding/part09" },
  { part: 10, title: "Advanced VSEPR, Lone Pairs & Geometry Deviations", tag: "Topics 67–77", range: "67–77", href: "/learn/chemical-bonding/part10" },
  { part: 11, title: "State-Dependent Structures & Important Inorganic Molecules", tag: "Topics 78–88", range: "78–88", href: "/learn/chemical-bonding/part11" },
  { part: 12, title: "Bond Angles, Bent/Drago Rules & Back Bonding", tag: "Topics 89–97", range: "89–97", href: "/learn/chemical-bonding/part12" },
  { part: 13, title: "Multicentre, Banana & Electron-Deficient Bonding", tag: "Topics 98–104", range: "98–104", href: "/learn/chemical-bonding/part13" },
  { part: 14, title: "Dipole Moment, Formal Charge & Best Lewis Structures", tag: "Topics 105–113", range: "105–113", href: "/learn/chemical-bonding/part14" },
  { part: 15, title: "Resonance, Bond Parameters & Periodic Effects", tag: "Topics 114–120", range: "114–120", href: "/learn/chemical-bonding/part15" },
  { part: 16, title: "Hydrogen Bonding: Structure, Strength & Applications", tag: "Topics 121–130", range: "121–130", href: "/learn/chemical-bonding/part16" },
  { part: 17, title: "MOT Foundations: LCAO, BMO/ABMO & Overlap", tag: "Topics 131–140", range: "131–140", href: "/learn/chemical-bonding/part17" },
  { part: 18, title: "MOT Diagrams, Bond Order, Magnetism & s–p Mixing", tag: "Topics 141–150", range: "141–150", href: "/learn/chemical-bonding/part18" },
  { part: 19, title: "HOMO/LUMO, Heteronuclear MOT & Pseudohalides", tag: "Topics 151–157", range: "151–157", href: "/learn/chemical-bonding/part19" },
  { part: 20, title: "Fajans' Rule, Polarisation & Covalent Character", tag: "Topics 158–162", range: "158–162", href: "/learn/chemical-bonding/part20" },
  { part: 21, title: "Intermolecular Forces & Clathrates", tag: "Topics 163–170", range: "163–170", href: "/learn/chemical-bonding/part21" },
  { part: 22, title: "Carbon Allotropes & Thermodynamics of Ionic Solids", tag: "Topics 171–178", range: "171–178", href: "/learn/chemical-bonding/part22" },
  { part: 23, title: "Silicates, Aluminosilicates & Zeolites", tag: "Topics 179–189", range: "179–189", href: "/learn/chemical-bonding/part23" },
  { part: 24, title: "JEE Advanced Integrated Question Bank", tag: "Practice", href: "/learn/chemical-bonding/part24" },
];

export interface ChemBondGroup { label: string; from: number; to: number; accent: string; }
export const CHEM_BOND_GROUPS: ChemBondGroup[] = [
  { label: "Foundations & Ionic Bonding", from: 1, to: 4, accent: "var(--chem-bond)" },
  { label: "Orbitals, VBT & Hybridisation", from: 5, to: 8, accent: "var(--chem-orbital)" },
  { label: "VSEPR & Molecular Structures", from: 9, to: 11, accent: "var(--chem-bond)" },
  { label: "Bond Parameters & Special Bonding", from: 12, to: 15, accent: "var(--chem-rule)" },
  { label: "Hydrogen Bonding & MOT", from: 16, to: 19, accent: "var(--chem-orbital)" },
  { label: "Polarisation, IMF, Solids & Silicates", from: 20, to: 23, accent: "var(--chem-energy)" },
  { label: "Integrated JEE Advanced Practice", from: 24, to: 24, accent: "var(--chem-energy)" },
];

export function chemBondGroupForPart(part: number): ChemBondGroup {
  return CHEM_BOND_GROUPS.find((g) => part >= g.from && part <= g.to) ?? CHEM_BOND_GROUPS[0];
}

function chemBondLessonRef(index: number): LessonRef | undefined {
  const entry = chemBondPartMeta[index];
  if (!entry) return undefined;
  return { href: entry.href, number: `Part ${String(entry.part).padStart(2, "0")}`, title: entry.title, meta: entry.tag };
}

const RAIL_LESSONS = chemBondPartMeta.map((m) => ({ part: m.part, title: m.title, href: m.href }));

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
          style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--foreground)", margin: 0 }}
        >
          {title}
        </h3>
      ) : null}
      <div style={{ fontSize: "1rem", lineHeight: 1.78, color: "var(--text-body)" }}>{children}</div>
    </div>
  );
}

export function TopicBlock({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <section
      id={`topic-${number}`}
      style={{
        scrollMarginTop: "72px",
        paddingTop: "1.75rem",
        paddingBottom: "0.5rem",
        borderTop: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
        <span
          className="sb-tech-label"
          style={{ fontSize: "9.5px", fontWeight: 900, color: "var(--chem-bond)", opacity: 0.7, flexShrink: 0 }}
        >
          {String(number).padStart(2, "0")}
        </span>
        <h2
          className="sb-editorial-title"
          style={{
            fontSize: "clamp(1.2rem, 2.4vw, 1.65rem)",
            fontWeight: 650,
            color: "var(--foreground)",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "1rem", lineHeight: 1.75, color: "var(--text-body)" }}>
        {children}
      </div>
    </section>
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
          fontSize: "9px",
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
          <li key={index} style={{ display: "flex", gap: "0.45rem", fontSize: "0.875rem", lineHeight: 1.55, color: "var(--text-muted)" }}>
            <span aria-hidden="true" style={{ color: "var(--chem-orbital)", flexShrink: 0, marginTop: "0.15rem" }}>◆</span>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function TextbookExamples({ items }: { items: { title: string; body: string }[] }) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "9px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--chem-rule)", marginBottom: "0.25rem" }}>
        Textbook examples
      </p>
      <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
        {items.map((item) => (
          <article key={item.title} style={{ borderLeft: "2px solid var(--chem-rule)", paddingLeft: "0.75rem" }}>
            <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.25rem" }}>{item.title}</h3>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-body)" }}>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WorkedExample({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ borderLeft: "3px solid var(--chem-energy)", paddingLeft: "1rem" }}>
      <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "9px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--chem-energy)", marginBottom: "0.4rem" }}>
        Worked example
      </p>
      <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.6rem" }}>{title}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--text-body)" }}>{children}</div>
    </section>
  );
}

export function ImportantNote({ title = "Important note", children }: { title?: string; children: ReactNode }) {
  return (
    <aside style={{ borderLeft: "3px solid var(--chem-energy)", paddingLeft: "1rem" }}>
      <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "9px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--chem-energy)", marginBottom: "0.4rem" }}>
        {title}
      </p>
      <div style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--text-body)" }}>{children}</div>
    </aside>
  );
}

export function ModernNote({ children }: { children: ReactNode }) {
  return (
    <aside style={{ borderLeft: "3px solid var(--chem-orbital)", paddingLeft: "1rem" }}>
      <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "9px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--chem-orbital)", marginBottom: "0.4rem" }}>
        Exam model vs modern view
      </p>
      <div style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--text-body)" }}>{children}</div>
    </aside>
  );
}

export function TrapCallout({ trap, reality }: { trap: ReactNode; reality: ReactNode }) {
  return (
    <div style={{ borderLeft: "3px solid var(--chem-trap)", paddingLeft: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div>
        <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "9px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--chem-trap)", marginBottom: "0.25rem" }}>Common trap</p>
        <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-body)" }}>{trap}</p>
      </div>
      <div>
        <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "9px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--chem-rule)", marginBottom: "0.25rem" }}>Reality</p>
        <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-body)" }}>{reality}</p>
      </div>
    </div>
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
      <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "9px", fontWeight: 900, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--chem-orbital)", marginBottom: "0.5rem" }}>
        Check your understanding
      </p>
      <div style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--foreground)" }}>{prompt}</div>
      {answer ? (
        <div style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border)", fontSize: "0.875rem" }}>
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
          <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "9px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--chem-bond)", marginBottom: "0.4rem" }}>
            0{index + 1}
          </p>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-body)" }}>{item}</p>
        </div>
      ))}
    </section>
  );
}

export function FormulaLine({ math }: { math: string }) {
  return (
    <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: "1rem", overflowX: "auto" }}>
      <BlockMath math={math} />
    </div>
  );
}

export function MathText({ math }: { math: string }) { return <InlineMath math={math} />; }

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", margin: 0, padding: 0, listStyle: "none" }}>
      {items.map((item, index) => (
        <li key={index} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start" }}>
          <span aria-hidden="true" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--chem-bond)", opacity: 0.7, flexShrink: 0, marginTop: "0.55rem" }} />
          <span style={{ fontSize: "1rem", lineHeight: 1.72, color: "var(--text-body)" }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function DataTable({ headers, rows }: { headers: ReactNode[]; rows: ReactNode[][] }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
      <table style={{ minWidth: "38rem", width: "100%", textAlign: "left", fontSize: "0.875rem", borderCollapse: "collapse" }}>
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
    <figure style={{ border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden", margin: 0 }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "1.25rem" }}>
        {children}
      </div>
      <figcaption style={{ borderTop: "1px solid var(--border)", padding: "0.6rem 1rem", fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
        {title}
      </figcaption>
    </figure>
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
