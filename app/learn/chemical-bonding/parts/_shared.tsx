import Link from "next/link";
import type { ReactNode } from "react";
import { BlockMath, InlineMath } from "@/components/math/react-katex";
import {
  ChapterShell,
  ChapterLessonPager,
  ChapterPartStrip,
  type ChapterTab,
  type LessonRef,
} from "@/components/notes/canonical";

export type ChemBondPartMeta = {
  part: number;
  title: string;
  tag: string;
  href: string;
};

export const chemBondPartMeta: ChemBondPartMeta[] = [
  { part: 1, title: "Why Atoms Bond — Kössel–Lewis & the Octet Rule", tag: "Lewis theory", href: "/learn/chemical-bonding/part01" },
  { part: 2, title: "Coordinate Bonds, Resonance & Formal Charge", tag: "Lewis structures", href: "/learn/chemical-bonding/part02" },
  { part: 3, title: "Ionic Bonding & the Born–Haber Cycle", tag: "Ionic bonding", href: "/learn/chemical-bonding/part03" },
  { part: 4, title: "Polarisation & Fajans' Rules", tag: "Ionic character", href: "/learn/chemical-bonding/part04" },
  { part: 5, title: "Dipole Moment & Molecular Polarity", tag: "Bond parameters", href: "/learn/chemical-bonding/part05" },
  { part: 6, title: "Resonance in Odd-Electron Species", tag: "Resonance", href: "/learn/chemical-bonding/part06" },
  { part: 7, title: "Valence Bond Theory — Orbital Overlap", tag: "VBT", href: "/learn/chemical-bonding/part07" },
  { part: 8, title: "Hybridisation", tag: "VBT", href: "/learn/chemical-bonding/part08" },
  { part: 9, title: "VSEPR Theory — Shapes of Molecules", tag: "Geometry", href: "/learn/chemical-bonding/part09" },
  { part: 10, title: "Molecular Orbital Theory", tag: "MOT", href: "/learn/chemical-bonding/part10" },
  { part: 11, title: "Hydrogen Bonding & Intermolecular Forces", tag: "IMF", href: "/learn/chemical-bonding/part11" },
  { part: 12, title: "Metallic Bonding", tag: "Metallic", href: "/learn/chemical-bonding/part12" },
  { part: 13, title: "Practice — Chemical Bonding Question Bank", tag: "Questions", href: "/learn/chemical-bonding/part13" },
];

/** Real topic groups of the 13-part Chemical Bonding sequence. */
export interface ChemBondGroup {
  label: string;
  from: number;
  to: number;
}

export const CHEM_BOND_GROUPS: ChemBondGroup[] = [
  { label: "Lewis Theory & Ionic Bonding", from: 1, to: 4 },
  { label: "Bond Parameters & Resonance", from: 5, to: 6 },
  { label: "VBT, Hybridisation & VSEPR", from: 7, to: 9 },
  { label: "MOT, IMF & Metallic Bonding", from: 10, to: 12 },
  { label: "Practice Question Bank", from: 13, to: 13 },
];

function chemBondLessonRef(index: number): LessonRef | undefined {
  const entry = chemBondPartMeta[index];
  if (!entry) return undefined;
  return {
    href: entry.href,
    number: `Part ${String(entry.part).padStart(2, "0")}`,
    title: entry.title,
    meta: entry.tag,
  };
}

export function chemBondTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 13 parts", href: "/learn/chemical-bonding", active: currentPart === undefined },
    ...CHEM_BOND_GROUPS.map((group, index) => ({
      label: group.label,
      href: `/learn/chemical-bonding#bond-group-${index + 1}`,
      active: currentPart !== undefined && currentPart >= group.from && currentPart <= group.to,
    })),
  ];
}

export function ChemBondPartShell({ part, title, children }: { part: number; title: string; children: ReactNode }) {
  const currentIndex = chemBondPartMeta.findIndex((entry) => entry.part === part);

  return (
    <ChapterShell
      kicker="JEE Inorganic Chemistry"
      subtitle="Chemical Bonding & Molecular Structure"
      tabs={chemBondTabs(part)}
    >
      <ChapterPartStrip
        hubHref="/learn/chemical-bonding"
        hubLabel="Chemical Bonding — all parts"
        positionLabel={`Part ${String(part).padStart(2, "0")} of ${chemBondPartMeta.length}`}
      />
      <article className="mx-auto max-w-6xl text-white">
        <header
          style={{
            background: "#122232",
            border: "1px solid #24405c",
            borderLeft: "4px solid #5fd4ea",
            borderRadius: 13,
            padding: "18px 20px",
          }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#5fd4ea]">Chemical Bonding · Part {String(part).padStart(2, "0")}</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl" style={{ fontFamily: "Georgia, 'Iowan Old Style', 'Times New Roman', serif" }}>{title}</h1>
          <p className="mt-2 text-sm" style={{ color: "#91a9bc" }}>Study sequence {part} of 13 · approximately 10–15 minutes</p>
        </header>
        <div className="mt-8 space-y-8">{children}</div>
        <ChapterLessonPager
          prev={chemBondLessonRef(currentIndex - 1)}
          next={chemBondLessonRef(currentIndex + 1)}
          hubHref="/learn/chemical-bonding"
          hubLabel="All lessons"
        />
      </article>
    </ChapterShell>
  );
}

export function NoteBlock({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/[0.09] bg-white/[0.045] p-5 shadow-lg shadow-black/10 sm:p-6">
      {title ? <h2 className="mb-3 text-lg font-black text-cyan-200">{title}</h2> : null}
      <div className="space-y-3 text-sm leading-relaxed text-white/78 sm:text-base">{children}</div>
    </div>
  );
}

export function LearningObjectives({ items }: { items: ReactNode[] }) {
  return (
    <aside aria-label="Learning objectives" className="rounded-2xl border border-violet-300/20 bg-violet-400/[0.06] p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">In this part</p>
      <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-slate-200 sm:grid-cols-2">
        {items.map((item, index) => <li key={index} className="border-l-2 border-violet-300/60 pl-3">{item}</li>)}
      </ul>
    </aside>
  );
}

export function WorkedExample({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.045] p-5">
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-amber-200">Worked example</p>
      <h2 className="mt-1 text-lg font-black text-white">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-100 sm:text-base">{children}</div>
    </section>
  );
}

export function ImportantNote({ title = "Important note", children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="rounded-xl border-l-4 border-amber-300 bg-amber-300/[0.08] px-4 py-3 text-sm leading-relaxed text-amber-50">
      <p className="font-bold text-amber-200">{title}</p>
      <div className="mt-1">{children}</div>
    </aside>
  );
}

/** Corrected-vs-common-error callout — for the audited high-risk facts (NO valence e⁻, perchlorate solubility, NO₂ radical site, SCN⁻ charge, etc.). */
export function TrapCallout({ trap, reality }: { trap: ReactNode; reality: ReactNode }) {
  return (
    <div className="rounded-xl border border-rose-500/25 bg-rose-500/[0.07] p-4">
      <p className="text-xs font-black uppercase tracking-wider text-rose-300">Common trap</p>
      <p className="mt-1 text-sm text-white/75">{trap}</p>
      <p className="mt-2 text-xs font-black uppercase tracking-wider text-emerald-300">Reality</p>
      <p className="mt-1 text-sm text-white/80">{reality}</p>
    </div>
  );
}

export function PracticeQuestion({ prompt, answer }: { prompt: ReactNode; answer?: ReactNode }) {
  return (
    <section className="rounded-2xl border border-violet-300/20 bg-violet-300/[0.06] p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">Check your understanding</p>
      <div className="mt-2 text-sm leading-relaxed text-white sm:text-base">{prompt}</div>
      {answer ? <div className="mt-3 border-t border-white/10 pt-3 text-sm text-violet-100"><span className="font-bold text-emerald-300">Answer: </span><span className="text-emerald-100">{answer}</span></div> : null}
    </section>
  );
}

export function SummaryStrip({ items }: { items: ReactNode[] }) {
  return (
    <section aria-label="Key takeaways" className="grid gap-px overflow-hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/20 sm:grid-cols-3">
      {items.map((item, index) => <p key={index} className="bg-[#0b1728] p-4 text-sm font-semibold leading-relaxed text-cyan-50">{item}</p>)}
    </section>
  );
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

export function DataTable({ headers, rows }: { headers: ReactNode[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/[0.08]">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-white/[0.06] text-white">
          <tr>{headers.map((header, index) => <th key={index} className="px-4 py-3 font-black">{header}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-white/[0.06] text-white/75">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 align-top">{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DiagramBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <figure className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-4">
      <figcaption className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Diagram: {title}</figcaption>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 [&>p]:w-full [&>div]:w-full [&>figure]:w-full [&_svg]:h-auto [&>svg]:w-full [&>svg]:max-w-2xl">{children}</div>
    </figure>
  );
}

export function PartNavigator({ previous, next }: { previous?: { href: string; label: string }; next?: { href: string; label: string } }) {
  return (
    <nav aria-label="Continue through Chemical Bonding" className="flex items-stretch justify-between gap-3 border-t border-white/10 pt-6">
      {previous ? (
        <Link href={previous.href} className="rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">
          ← {previous.label}
        </Link>
      ) : <span />}
      {next ? (
        <Link href={next.href} className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-right text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">
          {next.label} →
        </Link>
      ) : null}
    </nav>
  );
}
