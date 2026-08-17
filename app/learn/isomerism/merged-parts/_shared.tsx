import Link from "next/link";
import type { ReactNode } from "react";
import {
  CanonicalNotesStyles,
  ChapterIdentityHeader,
  ChapterContentsRail,
  type ChapterRailGroup,
  type ChapterRailLesson,
} from "@/components/notes/canonical";

const ISOMERISM_LESSONS: ChapterRailLesson[] = [
  { part: 1, title: "Foundations: classification, chain & position isomerism", href: "/learn/isomerism/[part]" },
  { part: 2, title: "Tautomerism: types, conditions and mechanisms", href: "/learn/isomerism/[part]" },
  { part: 3, title: "C₅H₁₀ and C₆H₁₂ structural-isomer enumeration", href: "/learn/isomerism/[part]" },
  { part: 5, title: "Constitutional isomers of alkanes", href: "/learn/isomerism/[part]" },
  { part: 6, title: "Tautomerism fundamentals & prototropy", href: "/learn/isomerism/[part]" },
  { part: 7, title: "Tautomer stability & enol-content comparisons", href: "/learn/isomerism/[part]" },
  { part: 8, title: "Enolisation and 1,3-dicarbonyl chemistry", href: "/learn/isomerism/[part]" },
  { part: 9, title: "Special enol stability and intramolecular H-bonding", href: "/learn/isomerism/[part]" },
  { part: 10, title: "Geometrical isomerism: fundamentals & basic counting", href: "/learn/isomerism/[part]" },
  { part: 11, title: "Oximes, C=N and N=N geometrical isomerism", href: "/learn/isomerism/[part]" },
  { part: 12, title: "Cyclic geometrical isomerism & cycloalkenes", href: "/learn/isomerism/[part]" },
  { part: 13, title: "Cumulenes, spiranes and rigid-axis geometrical isomerism", href: "/learn/isomerism/[part]" },
  { part: 14, title: "Geometrical-isomerism exercise bank I", href: "/learn/isomerism/[part]" },
  { part: 15, title: "Geometrical-isomerism exercise bank II", href: "/learn/isomerism/[part]" },
  { part: 16, title: "GI exercise finale, properties, dipole & stability", href: "/learn/isomerism/[part]" },
  { part: 17, title: "cis/trans, E/Z nomenclature & cyclic CIP", href: "/learn/isomerism/[part]" },
  { part: 18, title: "Advanced E/Z assignments & geometrical-isomer counting", href: "/learn/isomerism/[part]" },
  { part: 19, title: "Symmetry-reduced GI counting & truxilic acid", href: "/learn/isomerism/[part]" },
  { part: 20, title: "Conformational isomerism, projections & Newman analysis", href: "/learn/isomerism/[part]" },
  { part: 21, title: "Ethane, propane, n-butane & rotational barriers", href: "/learn/isomerism/[part]" },
  { part: 22, title: "Substituted bond rotation, dihaloethanes & torsional energy", href: "/learn/isomerism/[part]" },
  { part: 23, title: "Conformer nomenclature, strain & gauche effects", href: "/learn/isomerism/[part]" },
  { part: 24, title: "Lone pairs, hydrazine, H2O2 & conformer problems", href: "/learn/isomerism/[part]" },
  { part: 25, title: "Cyclic conformations & classical strain theories", href: "/learn/isomerism/[part]" },
  { part: 26, title: "Cyclopropane, cyclobutane & cyclopentane", href: "/learn/isomerism/[part]" },
  { part: 27, title: "Cyclohexane chair, boat, ring flip & energy profile", href: "/learn/isomerism/[part]" },
  { part: 28, title: "A-values, substituted cyclohexanes & nitrogen inversion", href: "/learn/isomerism/[part]" },
  { part: 29, title: "Heterocycles & anomeric-effect fundamentals", href: "/learn/isomerism/[part]" },
  { part: 30, title: "Reverse, double, rabbit-ear & hockey-stick effects", href: "/learn/isomerism/[part]" },
  { part: 31, title: "Transannular, decalin & orbital anomeric effects", href: "/learn/isomerism/[part]" },
  { part: 32, title: "Polycyclic rings, steroid junctions & larger cycloalkanes", href: "/learn/isomerism/[part]" },
  { part: 33, title: "Optical activity, chirality & elements of symmetry", href: "/learn/isomerism/[part]" },
  { part: 34, title: "Enantiomers, diastereomers, meso compounds & racemates", href: "/learn/isomerism/[part]" },
  { part: 35, title: "R/S nomenclature & CIP priorities", href: "/learn/isomerism/[part]" },
  { part: 36, title: "Stereoisomer counting & visual counting tables", href: "/learn/isomerism/[part]" },
  { part: 37, title: "Fischer, wedge-dash, Newman & sawhorse conversions", href: "/learn/isomerism/[part]" },
  { part: 38, title: "Chirality without chiral carbon + exercise bank I", href: "/learn/isomerism/[part]" },
  { part: 39, title: "Optical chirality exercise bank II", href: "/learn/isomerism/[part]" },
  { part: 40, title: "Optical chirality exercise bank III & final answer key", href: "/learn/isomerism/[part]" },
];

const ISOMERISM_GROUPS: ChapterRailGroup[] = [
  { label: "Structural & Constitutional Isomerism", from: 1, to: 5, accent: "var(--chem-bond)" },
  { label: "Tautomerism", from: 6, to: 9, accent: "var(--chem-orbital)" },
  { label: "Geometrical Isomerism", from: 10, to: 19, accent: "var(--chem-rule)" },
  { label: "Conformational Isomerism", from: 20, to: 32, accent: "var(--chem-energy)" },
  { label: "Optical Isomerism & Stereochemistry", from: 33, to: 40, accent: "var(--chem-orbital)" },
];

function partHref(partNumber: number): string {
  return `/learn/isomerism/${partNumber}`;
}

const RAIL_LESSONS: ChapterRailLesson[] = ISOMERISM_LESSONS.map((l) => ({
  ...l,
  href: partHref(l.part),
}));

export function MergedPartShell({
  partNumber,
  title,
  children,
}: {
  partNumber: number;
  title: string;
  children: ReactNode;
}) {
  const group = ISOMERISM_GROUPS.find((g) => partNumber >= g.from && partNumber <= g.to) ?? ISOMERISM_GROUPS[0];

  return (
    <>
      <CanonicalNotesStyles />
      {/* compact lesson bar */}
      <div className="sbnLessonBar">
        <div className="sbnLessonBarInner">
          <Link href="/learn/isomerism" className="sbnLessonBarBack">← Isomerism</Link>
          <span className="sbnLessonBarPos">
            Part {String(partNumber).padStart(2, "0")} / 40
          </span>
        </div>
      </div>

      {/* sidebar reading layout */}
      <div className="sbnSidebarBody">
        <article className="sbnCanvas" style={{ maxWidth: "720px" }}>
          <ChapterIdentityHeader
            subject="Organic Chemistry · JEE Advanced"
            chapterName="Isomerism"
            descriptor="Structural, tautomeric, geometrical, conformational, and optical isomerism — the complete 40-part JEE Advanced sequence."
            topicCount={40}
            accentColor="var(--chem-rule)"
          />

          <header style={{ marginBottom: "2rem" }}>
            <p
              className="sb-tech-label"
              style={{ fontSize: "9.5px", fontWeight: 900, color: group.accent, marginBottom: "0.5rem" }}
            >
              {group.label}
            </p>
            <h1
              className="sb-editorial-title"
              style={{
                fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)",
                fontWeight: 600,
                color: "var(--foreground)",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              {title}
            </h1>
            <div
              style={{
                marginTop: "1rem",
                height: "1px",
                background: `linear-gradient(to right, ${group.accent}, transparent)`,
                opacity: 0.25,
              }}
            />
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {children}
          </div>
        </article>

        <ChapterContentsRail
          title="Chapter Contents"
          groups={ISOMERISM_GROUPS}
          lessons={RAIL_LESSONS}
          currentPart={partNumber}
        />
      </div>
    </>
  );
}

export function MergedSourceSection({
  sourcePart,
  children,
}: {
  sourcePart: number;
  children: ReactNode;
}) {
  return (
    <section
      data-source-part={sourcePart}
      style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}
    >
      <div className="[&_nav]:!hidden [&>main]:!min-h-0 [&>main]:!bg-transparent [&>main]:!px-0 [&>main]:!py-0 [&>main>article]:!max-w-none">
        {children}
      </div>
    </section>
  );
}
