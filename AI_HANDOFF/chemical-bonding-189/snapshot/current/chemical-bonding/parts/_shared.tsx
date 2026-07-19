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
  { part: 20, title: "Fajans’ Rule, Polarisation & Covalent Character", tag: "Topics 158–162", range: "158–162", href: "/learn/chemical-bonding/part20" },
  { part: 21, title: "Intermolecular Forces & Clathrates", tag: "Topics 163–170", range: "163–170", href: "/learn/chemical-bonding/part21" },
  { part: 22, title: "Carbon Allotropes & Thermodynamics of Ionic Solids", tag: "Topics 171–178", range: "171–178", href: "/learn/chemical-bonding/part22" },
  { part: 23, title: "Silicates, Aluminosilicates & Zeolites", tag: "Topics 179–189", range: "179–189", href: "/learn/chemical-bonding/part23" },
  { part: 24, title: "JEE Advanced Integrated Question Bank", tag: "Practice", href: "/learn/chemical-bonding/part24" },
];

export interface ChemBondGroup { label: string; from: number; to: number; }
export const CHEM_BOND_GROUPS: ChemBondGroup[] = [
  { label: "Foundations & Ionic Bonding", from: 1, to: 4 },
  { label: "Orbitals, VBT & Hybridisation", from: 5, to: 8 },
  { label: "VSEPR & Molecular Structures", from: 9, to: 11 },
  { label: "Bond Parameters & Special Bonding", from: 12, to: 15 },
  { label: "Hydrogen Bonding & MOT", from: 16, to: 19 },
  { label: "Polarisation, IMF, Solids & Silicates", from: 20, to: 23 },
  { label: "Integrated JEE Advanced Practice", from: 24, to: 24 },
];

function chemBondLessonRef(index: number): LessonRef | undefined {
  const entry = chemBondPartMeta[index];
  if (!entry) return undefined;
  return { href: entry.href, number: `Part ${String(entry.part).padStart(2, "0")}`, title: entry.title, meta: entry.tag };
}

export function chemBondTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: `All ${chemBondPartMeta.length} parts`, href: "/learn/chemical-bonding", active: currentPart === undefined },
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
    <ChapterShell kicker="JEE Advanced Chemistry" subtitle="Chemical Bonding & Molecular Structure" tabs={chemBondTabs(part)}>
      <ChapterPartStrip hubHref="/learn/chemical-bonding" hubLabel="Chemical Bonding — all parts" positionLabel={`Part ${String(part).padStart(2, "0")} of ${chemBondPartMeta.length}`} />
      <article className="mx-auto max-w-6xl text-white">
        <header style={{ background: "#122232", border: "1px solid #24405c", borderLeft: "4px solid #5fd4ea", borderRadius: 13, padding: "18px 20px" }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#5fd4ea]">Chemical Bonding · Part {String(part).padStart(2, "0")}</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl" style={{ fontFamily: "Georgia, 'Iowan Old Style', 'Times New Roman', serif" }}>{title}</h1>
          <p className="mt-2 text-sm" style={{ color: "#91a9bc" }}>Authoritative 189-topic JEE Advanced sequence · part {part} of {chemBondPartMeta.length}</p>
        </header>
        <div className="mt-8 space-y-8">{children}</div>
        <ChapterLessonPager prev={chemBondLessonRef(currentIndex - 1)} next={chemBondLessonRef(currentIndex + 1)} hubHref="/learn/chemical-bonding" hubLabel="All lessons" />
      </article>
    </ChapterShell>
  );
}

export function NoteBlock({ title, children }: { title?: string; children: ReactNode }) {
  return <div className="rounded-2xl border border-white/[0.09] bg-white/[0.045] p-5 shadow-lg shadow-black/10 sm:p-6">{title ? <h2 className="mb-3 text-lg font-black text-cyan-200">{title}</h2> : null}<div className="space-y-3 text-sm leading-relaxed text-white/78 sm:text-base">{children}</div></div>;
}

export function TopicBlock({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <section id={`topic-${number}`} className="scroll-mt-24 rounded-2xl border border-white/[0.09] bg-white/[0.045] p-5 shadow-lg shadow-black/10 sm:p-6">
      <div className="mb-3 flex items-start gap-3">
        <span className="flex h-8 min-w-8 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/[0.08] px-2 text-xs font-black text-cyan-200">{number}</span>
        <h2 className="text-lg font-black leading-snug text-cyan-100 sm:text-xl">{title}</h2>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-white/78 sm:text-base">{children}</div>
    </section>
  );
}

export function LearningObjectives({ items }: { items: ReactNode[] }) {
  return <aside aria-label="Learning objectives" className="rounded-2xl border border-violet-300/20 bg-violet-400/[0.06] p-5"><p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">In this part</p><ul className="mt-3 grid gap-2 text-sm leading-relaxed text-slate-200 sm:grid-cols-2">{items.map((item, index) => <li key={index} className="border-l-2 border-violet-300/60 pl-3">{item}</li>)}</ul></aside>;
}

export function WorkedExample({ title, children }: { title: string; children: ReactNode }) {
  return <section className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.045] p-5"><p className="text-[11px] font-black uppercase tracking-[0.18em] text-amber-200">Worked example</p><h2 className="mt-1 text-lg font-black text-white">{title}</h2><div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-100 sm:text-base">{children}</div></section>;
}

export function ImportantNote({ title = "Important note", children }: { title?: string; children: ReactNode }) {
  return <aside className="rounded-xl border-l-4 border-amber-300 bg-amber-300/[0.08] px-4 py-3 text-sm leading-relaxed text-amber-50"><p className="font-bold text-amber-200">{title}</p><div className="mt-1">{children}</div></aside>;
}

export function ModernNote({ children }: { children: ReactNode }) {
  return <aside className="rounded-xl border border-violet-300/20 bg-violet-300/[0.06] px-4 py-3 text-sm leading-relaxed text-violet-50"><p className="font-bold text-violet-200">Exam model vs modern view</p><div className="mt-1">{children}</div></aside>;
}

export function TrapCallout({ trap, reality }: { trap: ReactNode; reality: ReactNode }) {
  return <div className="rounded-xl border border-rose-500/25 bg-rose-500/[0.07] p-4"><p className="text-xs font-black uppercase tracking-wider text-rose-300">Common trap</p><p className="mt-1 text-sm text-white/75">{trap}</p><p className="mt-2 text-xs font-black uppercase tracking-wider text-emerald-300">Reality</p><p className="mt-1 text-sm text-white/80">{reality}</p></div>;
}

export function PracticeQuestion({ prompt, answer }: { prompt: ReactNode; answer?: ReactNode }) {
  return <section className="rounded-2xl border border-violet-300/20 bg-violet-300/[0.06] p-5"><p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">Check your understanding</p><div className="mt-2 text-sm leading-relaxed text-white sm:text-base">{prompt}</div>{answer ? <div className="mt-3 border-t border-white/10 pt-3 text-sm text-violet-100"><span className="font-bold text-emerald-300">Answer: </span><span className="text-emerald-100">{answer}</span></div> : null}</section>;
}

export function SummaryStrip({ items }: { items: ReactNode[] }) {
  return <section aria-label="Key takeaways" className="grid gap-px overflow-hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/20 sm:grid-cols-3">{items.map((item, index) => <p key={index} className="bg-[#0b1728] p-4 text-sm font-semibold leading-relaxed text-cyan-50">{item}</p>)}</section>;
}

export function FormulaLine({ math }: { math: string }) {
  return <div className="overflow-x-auto text-cyan-100 [&_.katex-display]:my-1"><BlockMath math={math} /></div>;
}
export function MathText({ math }: { math: string }) { return <InlineMath math={math} />; }
export function BulletList({ items }: { items: ReactNode[] }) { return <ul className="space-y-2">{items.map((item, index) => <li key={index} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-fuchsia-400" /><span>{item}</span></li>)}</ul>; }
export function DataTable({ headers, rows }: { headers: ReactNode[]; rows: ReactNode[][] }) { return <div className="overflow-x-auto rounded-lg border border-white/[0.08]"><table className="min-w-full text-left text-sm"><thead className="bg-white/[0.06] text-white"><tr>{headers.map((header, index) => <th key={index} className="px-4 py-3 font-black">{header}</th>)}</tr></thead><tbody className="divide-y divide-white/[0.06] text-white/75">{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 align-top">{cell}</td>)}</tr>)}</tbody></table></div>; }
export function DiagramBox({ title, children }: { title: string; children: ReactNode }) { return <figure className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-4"><figcaption className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Diagram: {title}</figcaption><div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 [&>p]:w-full [&>div]:w-full [&>figure]:w-full [&_svg]:h-auto [&>svg]:w-full [&>svg]:max-w-3xl">{children}</div></figure>; }
export function PartNavigator({ previous, next }: { previous?: { href: string; label: string }; next?: { href: string; label: string } }) { return <nav aria-label="Continue through Chemical Bonding" className="flex items-stretch justify-between gap-3 border-t border-white/10 pt-6">{previous ? <Link href={previous.href} className="rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-slate-200">← {previous.label}</Link> : <span />}{next ? <Link href={next.href} className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-right text-sm font-semibold text-cyan-100">{next.label} →</Link> : null}</nav>; }
