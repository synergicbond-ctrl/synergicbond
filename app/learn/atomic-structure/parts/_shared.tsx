
import Link from "next/link";
import type { ReactNode } from "react";
import { BlockMath, InlineMath } from "@/components/math/react-katex";
import {
  CanonicalNotesStyles,
  ChapterLessonPager,
  ChapterContentsRail,
  TopicHeader,
  type ChapterTab,
  type LessonRef,
} from "@/components/notes/canonical";
import { ATOMIC_CONCEPT_GROUPS, atomicGroupForPart } from "./groups";

export type AtomicPartMeta = {
  part: number;
  title: string;
  pages: string;
  href: string;
  /** Original study-sequence sections merged into this lesson (in order). */
  sections: number[];
};

// 25 lessons — the original 55 sections merged 2–3 at a time along the real
// concept-group boundaries. Every original section renders inside its lesson
// with its own title and source pages; nothing is dropped or reordered.
export const atomicPartMeta: AtomicPartMeta[] = [
  { part: 1, title: "Dalton's Theory, Cathode Rays and the Electron", pages: "1-6", href: "/learn/atomic-structure/part01", sections: [1, 2] },
  { part: 2, title: "Discovery of Proton, Neutron and Rutherford Scattering", pages: "7-12", href: "/learn/atomic-structure/part02", sections: [3, 4] },
  { part: 3, title: "Rutherford Model Calculations and Scattering Cross Section", pages: "13-19", href: "/learn/atomic-structure/part03", sections: [5, 6] },
  { part: 4, title: "Rutherford Drawbacks, EM Waves and Black-Body Radiation", pages: "20-25", href: "/learn/atomic-structure/part04", sections: [7, 8] },
  { part: 5, title: "Radiation Laws, Planck Formula and Quantum Theory", pages: "26-32", href: "/learn/atomic-structure/part05", sections: [9, 10] },
  { part: 6, title: "Photoelectric Effect — Einstein Equation, Photocurrent and Stopping Potential", pages: "33-41", href: "/learn/atomic-structure/part06", sections: [11, 12, 13] },
  { part: 7, title: "Work Function Data, Bohr Postulates and Orbit Properties", pages: "42-48", href: "/learn/atomic-structure/part07", sections: [14, 15] },
  { part: 8, title: "Electron Energy, Ionisation, Rydberg's Equation and Ritz Principle", pages: "49-57", href: "/learn/atomic-structure/part08", sections: [16, 17, 18] },
  { part: 9, title: "Hydrogen Spectrum, Line Counting, Bohr Magneton and Photon Flux", pages: "58-67", href: "/learn/atomic-structure/part09", sections: [19, 20, 21] },
  { part: 10, title: "Wave Packets and Uncertainty Worked Problems", pages: "68-73", href: "/learn/atomic-structure/part10", sections: [22, 23] },
  { part: 11, title: "Sommerfeld Extension, Spin Doublets and the de Broglie Equation", pages: "74-80", href: "/learn/atomic-structure/part11", sections: [24, 25] },
  { part: 12, title: "Standing Electron Waves, Uncertainty Variants and Quantum Numbers", pages: "81-86", href: "/learn/atomic-structure/part12", sections: [26, 27] },
  { part: 13, title: "Azimuthal, Magnetic and Spin Quantum Numbers and the (n+l) Rule", pages: "87-92", href: "/learn/atomic-structure/part13", sections: [28, 29] },
  { part: 14, title: "Aufbau Principle and the Full Electronic Configuration Table", pages: "93-99", href: "/learn/atomic-structure/part14", sections: [30, 31] },
  { part: 15, title: "Pauli Exclusion, Quantum Sets, Magnetism and Magnetic Moments", pages: "100-105", href: "/learn/atomic-structure/part15", sections: [32, 33] },
  { part: 16, title: "Moseley's Law, Group Velocity and the Wave Function", pages: "106-112", href: "/learn/atomic-structure/part16", sections: [34, 35] },
  { part: 17, title: "Schrödinger Equation — Time Dependence, Hamiltonian and Eigenvalues", pages: "113-118", href: "/learn/atomic-structure/part17", sections: [36, 37] },
  { part: 18, title: "Acceptable Wave Functions, Probability Density and Polar Coordinates", pages: "119-124", href: "/learn/atomic-structure/part18", sections: [38, 39] },
  { part: 19, title: "Radial Probability, Angular Functions and Nodal Surfaces", pages: "125-131", href: "/learn/atomic-structure/part19", sections: [40, 41] },
  { part: 20, title: "Radial Function Curves, Radial Nodes and Most Probable Radius", pages: "132-137", href: "/learn/atomic-structure/part20", sections: [42, 43] },
  { part: 21, title: "Real Hydrogen Wave Functions, Electron Density and the dz² Designation", pages: "138-144", href: "/learn/atomic-structure/part21", sections: [44, 45] },
  { part: 22, title: "Orbital Shapes with Node Counts, the Five d-Orbitals and Gerade/Ungerade", pages: "145-150", href: "/learn/atomic-structure/part22", sections: [46, 47] },
  { part: 23, title: "Penetration, Orbital Symmetry and the f-Orbital Galleries", pages: "151-160", href: "/learn/atomic-structure/part23", sections: [48, 49, 50] },
  { part: 24, title: "g, h and i Orbital Galleries and Hybridisation Bond-Angle Proofs", pages: "161-169", href: "/learn/atomic-structure/part24", sections: [51, 52, 53] },
  { part: 25, title: "Olympiad Problems — de Broglie, Uncertainty and Relativistic Wavelength", pages: "170-175", href: "/learn/atomic-structure/part25", sections: [54, 55] },
];

/** Old 55-section route slug (part26…part55) → the lesson that now carries it. */
export function lessonForOldSection(section: number): AtomicPartMeta | undefined {
  return atomicPartMeta.find((entry) => entry.sections.includes(section));
}

function atomicLessonRef(index: number): LessonRef | undefined {
  const entry = atomicPartMeta[index];
  if (!entry) return undefined;
  return {
    href: entry.href,
    number: `Lesson ${String(entry.part).padStart(2, "0")}`,
    title: entry.title,
    meta: `Source pages ${entry.pages}`,
  };
}

export function atomicTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 25 lessons", href: "/learn/atomic-structure", active: currentPart === undefined },
    ...ATOMIC_CONCEPT_GROUPS.map((group, index) => ({
      label: group.label,
      href: `/learn/atomic-structure#group-${index + 1}`,
      active: currentPart !== undefined && currentPart >= group.from && currentPart <= group.to,
    })),
  ];
}

/**
 * Inline section block. Open editorial surface — no container card.
 * Uses the section's concept group accent colour for the eyebrow and title.
 * The section ID enables same-page anchor linking from the chapter rail.
 */
export function AtomicPartShell({
  part,
  title,
  pages,
  children,
}: {
  part: number;
  title: string;
  pages: string;
  children: ReactNode;
}) {
  const group = atomicGroupForPart(part);
  return (
    <section
      id={`section-${part}`}
      style={{ scrollMarginTop: "72px", paddingTop: "0.25rem" }}
    >
      {/* Open editorial header: eyebrow → coloured serif title → thin rule */}
      <header style={{ marginBottom: "1.75rem" }}>
        <p
          className="sb-tech-label"
          style={{
            color: group.accent,
            fontSize: "10px",
            fontWeight: 900,
            letterSpacing: "0.22em",
            marginBottom: "0.45rem",
          }}
        >
          Section {String(part).padStart(2, "0")} · Source pages {pages}
        </p>
        <h2
          className="sb-editorial-title"
          style={{
            fontSize: "clamp(1.35rem, 2.6vw, 1.9rem)",
            fontWeight: 800,
            lineHeight: 1.18,
            color: group.accent,
            margin: 0,
          }}
        >
          {title}
        </h2>
        <div
          aria-hidden
          style={{
            height: 1,
            background: group.accent,
            opacity: 0.18,
            marginTop: "0.6rem",
          }}
        />
      </header>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {children}
      </div>
    </section>
  );
}

/** Full canonical page chrome for one of the 25 merged lessons.
 *  Layout: compact lesson bar → two-column (reading canvas + chapter rail).
 *  The chapter rail lists all 25 lessons grouped by concept section.
 *  The pill/tab wall is gone — navigation is quiet and always accessible. */
export function AtomicLessonShell({ lesson, children }: { lesson: number; children: ReactNode }) {
  const currentIndex = atomicPartMeta.findIndex((entry) => entry.part === lesson);
  const meta = atomicPartMeta[currentIndex];
  const group = atomicGroupForPart(lesson);

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)", color: "var(--foreground)" }}>
      <CanonicalNotesStyles />
      {/* ── Compact lesson identity bar ── */}
      <div className="sbnLessonBar">
        <div className="sbnLessonBarInner">
          <Link href="/learn/atomic-structure" className="sbnLessonBarBack">
            ← Atomic Structure
          </Link>
          <span className="sbnLessonBarPos">
            Lesson {String(lesson).padStart(2, "0")} / {atomicPartMeta.length}
          </span>
        </div>
      </div>

      {/* ── Two-column reading surface ── */}
      <div className="sbnSidebarBody">
        <article className="sbnCanvas">
          {/* Lesson hero — coloured by concept group, open, no card */}
          {meta && (
            <TopicHeader
              as="h1"
              eyebrow={`Atomic Structure · Lesson ${String(lesson).padStart(2, "0")}`}
              title={meta.title}
              descriptor={`Source pages ${meta.pages} · ${meta.sections.length} study ${meta.sections.length === 1 ? "section" : "sections"}`}
              accentColor={group.accent}
            />
          )}

          {/* Lesson content — sections rendered by the page */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem", marginTop: "2.5rem" }}>
            {children}
          </div>

          {/* Lesson prev/next pager */}
          <ChapterLessonPager
            prev={atomicLessonRef(currentIndex - 1)}
            next={atomicLessonRef(currentIndex + 1)}
            hubHref="/learn/atomic-structure"
            hubLabel="All lessons"
          />
        </article>

        {/* ── Chapter contents rail ── */}
        <ChapterContentsRail
          title="Atomic Structure"
          groups={ATOMIC_CONCEPT_GROUPS.map((g) => ({
            label: g.label,
            from: g.from,
            to: g.to,
            accent: g.accent,
          }))}
          lessons={atomicPartMeta.map((m) => ({
            part: m.part,
            title: m.title,
            href: m.href,
          }))}
          currentPart={lesson}
        />
      </div>
    </div>
  );
}

export function SourcePage({ page: _page, children }: { page: number; children: ReactNode }) {
  return (
    <section className="space-y-4 border-l-2 border-cyan-400/30 pl-4 sm:pl-6">
      {children}
    </section>
  );
}

/**
 * Open note block — no container card. Ordinary theory lives in open space.
 * title becomes a subsection heading. Cards are reserved for DiagramBox,
 * WorkedExample, ImportantNote, PracticeQuestion (structural content only).
 */
export function NoteBlock({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {title ? (
        <h3
          className="sb-ui-title"
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--foreground)",
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          {title}
        </h3>
      ) : null}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.65rem",
          fontSize: "0.9625rem",
          lineHeight: 1.72,
          color: "var(--text-body)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function LearningObjectives({ items }: { items: ReactNode[] }) {
  return (
    <aside
      aria-label="Learning objectives"
      style={{
        borderLeft: "3px solid var(--chem-orbital)",
        paddingLeft: "1rem",
        marginBottom: "0.25rem",
      }}
    >
      <p
        className="sb-tech-label"
        style={{
          fontSize: "9px",
          fontWeight: 900,
          letterSpacing: "0.2em",
          color: "var(--chem-orbital)",
          marginBottom: "0.6rem",
        }}
      >
        In this lesson
      </p>
      <ul style={{ display: "flex", flexDirection: "column", gap: "0.35rem", margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              fontSize: "0.875rem",
              lineHeight: 1.55,
              color: "var(--text-muted)",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <span style={{ color: "var(--chem-orbital)", flexShrink: 0, marginTop: "0.15rem" }}>◆</span>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function ImportantNote({ title, children }: { title: string; children: ReactNode }) {
  return <aside className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4" aria-label={title}><h3 className="text-sm font-black text-amber-100">{title}</h3><div className="mt-2 text-sm leading-relaxed text-amber-50/85">{children}</div></aside>;
}

export function SummaryStrip({ items }: { items: ReactNode[] }) {
  return <section aria-label="Key takeaways" className="grid gap-px overflow-hidden rounded-lg border border-[var(--chem-bond)]/20 bg-[var(--chem-bond)]/10 sm:grid-cols-3">{items.map((item, index) => <p key={index} className="bg-[var(--surface)] p-4 text-sm font-semibold leading-relaxed text-[var(--foreground)]">{item}</p>)}</section>;
}

export function FormulaLine({ math }: { math: string }) {
  return (
    <div className="overflow-x-auto text-cyan-100 [&_.katex-display]:my-1">
      <BlockMath math={math} />
    </div>
  );
}

export function MathText({ math }: { math: string }) {
  return <InlineMath math={math} />;
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-fuchsia-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function DataTable({
  headers,
  rows,
}: {
  headers: ReactNode[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/[0.08]">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-white/[0.06] text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-3 font-black">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.06] text-white/75">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DiagramBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <figure className="rounded-lg border border-cyan-400/20 bg-cyan-400/[0.04] p-4">
      <figcaption className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
        Diagram: {title}
      </figcaption>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 [&>p]:w-full [&>div]:w-full [&>figure]:w-full [&_svg]:h-auto [&>svg]:w-full [&>svg]:max-w-lg">{children}</div>
    </figure>
  );
}

export function AuditComment({
  pages,
  unclear,
  note,
}: {
  pages: string;
  unclear: number;
  note?: string;
}) {
  return (
    <span className="hidden">{`Coverage reviewed${note ? ` (${note})` : ""}; unresolved markers: ${unclear}; reference: ${pages}`}</span>
  );
}