
import type { ReactNode } from "react";
import { BlockMath, InlineMath } from "@/components/math/react-katex";
import {
  ChapterShell,
  ChapterLessonPager,
  ChapterPartStrip,
  type ChapterTab,
  type LessonRef,
} from "@/components/notes/canonical";
import { ATOMIC_CONCEPT_GROUPS } from "./groups";

export type AtomicPartMeta = {
  part: number;
  title: string;
  pages: string;
  href: string;
};

export const atomicPartMeta: AtomicPartMeta[] = [
  { part: 1, title: "Dalton Theory and Cathode Rays", pages: "1-3", href: "/learn/atomic-structure/part01" },
  { part: 2, title: "Determination of e/m and Electron Charge", pages: "4-6", href: "/learn/atomic-structure/part02" },
  { part: 3, title: "Discovery of Proton", pages: "7-9", href: "/learn/atomic-structure/part03" },
  { part: 4, title: "Neutron and Rutherford Scattering", pages: "10-12", href: "/learn/atomic-structure/part04" },
  { part: 5, title: "Rutherford Model Calculations", pages: "13-16", href: "/learn/atomic-structure/part05" },
  { part: 6, title: "Rutherford Scattering Cross Section", pages: "17-19", href: "/learn/atomic-structure/part06" },
  { part: 7, title: "Rutherford Drawbacks and EM Waves", pages: "20-22", href: "/learn/atomic-structure/part07" },
  { part: 8, title: "Wave Terms and Black Body Radiation", pages: "23-25", href: "/learn/atomic-structure/part08" },
  { part: 9, title: "Radiation Laws and Planck Formula", pages: "26-28", href: "/learn/atomic-structure/part09" },
  { part: 10, title: "Rayleigh-Jeans and Planck Quantum Theory", pages: "29-32", href: "/learn/atomic-structure/part10" },
  { part: 11, title: "Photoelectric Effect and Einstein Equation", pages: "33-35", href: "/learn/atomic-structure/part11" },
  { part: 12, title: "Photoelectric Current and Stopping Potential", pages: "36-38", href: "/learn/atomic-structure/part12" },
  { part: 13, title: "Stopping Potential Graphs and Photon Flux", pages: "39-41", href: "/learn/atomic-structure/part13" },
  { part: 14, title: "Work Function Data and Bohr Model Postulates", pages: "42-44", href: "/learn/atomic-structure/part14" },
  { part: 15, title: "Bohr Quantisation, Orbit Radius, Speed and Time Period", pages: "45-48", href: "/learn/atomic-structure/part15" },
  { part: 16, title: "Energy of the Electron and Level Differences", pages: "49-51", href: "/learn/atomic-structure/part16" },
  { part: 17, title: "Ionisation Energy, Binding Energy and Rydberg's Equation", pages: "52-54", href: "/learn/atomic-structure/part17" },
  { part: 18, title: "Ritz Principle, Reduced Mass and Spectrum", pages: "55-57", href: "/learn/atomic-structure/part18" },
  { part: 19, title: "Hydrogen Spectrum and Spectral Series", pages: "58-60", href: "/learn/atomic-structure/part19" },
  { part: 20, title: "Visible Lines, Line Counting and Bohr Model Limits", pages: "61-64", href: "/learn/atomic-structure/part20" },
  { part: 21, title: "Bohr Magneton and Photon Flux Problems", pages: "65-67", href: "/learn/atomic-structure/part21" },
  { part: 22, title: "Wave Packet Energy and Uncertainty Problems", pages: "68-70", href: "/learn/atomic-structure/part22" },
  { part: 23, title: "Uncertainty Principle Worked Problems", pages: "71-73", href: "/learn/atomic-structure/part23" },
  { part: 24, title: "Sommerfeld Extension and Spin Doublets", pages: "74-76", href: "/learn/atomic-structure/part24" },
  { part: 25, title: "Dual Nature and de Broglie Equation", pages: "77-80", href: "/learn/atomic-structure/part25" },
  { part: 26, title: "Standing Electron Waves and Uncertainty Principle", pages: "81-83", href: "/learn/atomic-structure/part26" },
  { part: 27, title: "Uncertainty Variants and Quantum Numbers", pages: "84-86", href: "/learn/atomic-structure/part27" },
  { part: 28, title: "Azimuthal Quantum Number, Orbitals and Shapes", pages: "87-89", href: "/learn/atomic-structure/part28" },
  { part: 29, title: "Magnetic and Spin Quantum Numbers, (n+l) Rule", pages: "90-92", href: "/learn/atomic-structure/part29" },
  { part: 30, title: "Aufbau Principle and Electronic Configuration", pages: "93-96", href: "/learn/atomic-structure/part30" },
  { part: 31, title: "Transition Metals and the Full Configuration Table", pages: "97-99", href: "/learn/atomic-structure/part31" },
  { part: 32, title: "Pauli Exclusion, Possible Quantum Sets and Magnetism", pages: "100-102", href: "/learn/atomic-structure/part32" },
  { part: 33, title: "Magnetic Moment Calculations", pages: "103-105", href: "/learn/atomic-structure/part33" },
  { part: 34, title: "Moseley's Law and Group Velocity", pages: "106-108", href: "/learn/atomic-structure/part34" },
  { part: 35, title: "Schrödinger Wave Equation — Wave Function and Wave Equation", pages: "109-112", href: "/learn/atomic-structure/part35" },
  { part: 36, title: "Schrödinger Wave Equation — Time Dependence and Hamiltonian", pages: "113-115", href: "/learn/atomic-structure/part36" },
  { part: 37, title: "Deriving the Wave Equation from a Sine Wave and Eigenvalues", pages: "116-118", href: "/learn/atomic-structure/part37" },
  { part: 38, title: "Acceptable Wave Functions, Probability Density and Normalisation", pages: "119-121", href: "/learn/atomic-structure/part38" },
  { part: 39, title: "Matter Wave as a Wave of Probability and Schrödinger in Polar Coordinates", pages: "122-124", href: "/learn/atomic-structure/part39" },
  { part: 40, title: "Radial Probability Distribution, Normalisation and Angular Functions", pages: "125-128", href: "/learn/atomic-structure/part40" },
  { part: 41, title: "d-Orbital Angular Functions, Nodal Surfaces and Radial Functions", pages: "129-131", href: "/learn/atomic-structure/part41" },
  { part: 42, title: "Radial Function Curves, Radial Nodes and Radial Distribution Function", pages: "132-134", href: "/learn/atomic-structure/part42" },
  { part: 43, title: "Most Probable Radius, Radial Solutions and Radial Node Counting", pages: "135-137", href: "/learn/atomic-structure/part43" },
  { part: 44, title: "Real Hydrogen Wave Functions and Electron-Density Graphs", pages: "138-140", href: "/learn/atomic-structure/part44" },
  { part: 45, title: "Radial Function Chart, Average Distance and the dz² Designation", pages: "141-144", href: "/learn/atomic-structure/part45" },
  { part: 46, title: "dz² as a Sum of Cloverleaves, and Orbital Shapes with Node Counts", pages: "145-147", href: "/learn/atomic-structure/part46" },
  { part: 47, title: "np Density Pictures, the Five d-Orbitals and Gerade/Ungerade", pages: "148-150", href: "/learn/atomic-structure/part47" },
  { part: 48, title: "Nodes, Orbital Symmetry and Penetration", pages: "151-153", href: "/learn/atomic-structure/part48" },
  { part: 49, title: "3d vs 4d/5d, 4f vs 5f, and Orbital Shape Galleries", pages: "154-156", href: "/learn/atomic-structure/part49" },
  { part: 50, title: "7d Gallery and the 4f, 5f, 6f Orbital Sets", pages: "157-160", href: "/learn/atomic-structure/part50" },
  { part: 51, title: "7f Orbitals and the Nine 5g and 6g Orbitals", pages: "161-163", href: "/learn/atomic-structure/part51" },
  { part: 52, title: "The Nine 7g Orbitals and the Eleven 6h and 7h Orbitals", pages: "164-166", href: "/learn/atomic-structure/part52" },
  { part: 53, title: "7i Orbitals and Hybridisation Bond-Angle Proofs (sp, sp²)", pages: "167-169", href: "/learn/atomic-structure/part53" },
  { part: 54, title: "Olympiad Problems — de Broglie Wavelengths (2.1–2.7)", pages: "170-172", href: "/learn/atomic-structure/part54" },
  { part: 55, title: "Olympiad Problems — Uncertainty and Relativistic Wavelength (2.7–2.14)", pages: "173-175", href: "/learn/atomic-structure/part55" },
];

function atomicLessonRef(index: number): LessonRef | undefined {
  const entry = atomicPartMeta[index];
  if (!entry) return undefined;
  return {
    href: entry.href,
    number: `Part ${String(entry.part).padStart(2, "0")}`,
    title: entry.title,
    meta: `Source pages ${entry.pages}`,
  };
}

export function atomicTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 55 parts", href: "/learn/atomic-structure", active: currentPart === undefined },
    ...ATOMIC_CONCEPT_GROUPS.map((group, index) => ({
      label: group.label,
      href: `/learn/atomic-structure#group-${index + 1}`,
      active: currentPart !== undefined && currentPart >= group.from && currentPart <= group.to,
    })),
  ];
}

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
  const currentIndex = atomicPartMeta.findIndex((entry) => entry.part === part);

  return (
    <ChapterShell
      kicker="JEE Physical Chemistry"
      subtitle="Atomic Structure"
      tabs={atomicTabs(part)}
    >
      <ChapterPartStrip
        hubHref="/learn/atomic-structure"
        hubLabel="Atomic Structure — all parts"
        positionLabel={`Part ${String(part).padStart(2, "0")} of ${atomicPartMeta.length}`}
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
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#5fd4ea]">
            Atomic Structure · Part {String(part).padStart(2, "0")}
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl" style={{ fontFamily: "Georgia, 'Iowan Old Style', 'Times New Roman', serif" }}>{title}</h1>
          <p className="mt-2 text-sm" style={{ color: "#91a9bc" }}>
            Study sequence {part} of 55 · source pages {pages} · approximately 8–12 minutes
          </p>
        </header>
        <div className="mt-8 space-y-8">{children}</div>
        <ChapterLessonPager
          prev={atomicLessonRef(currentIndex - 1)}
          next={atomicLessonRef(currentIndex + 1)}
          hubHref="/learn/atomic-structure"
          hubLabel="All lessons"
        />
      </article>
    </ChapterShell>
  );
}

export function SourcePage({ page: _page, children }: { page: number; children: ReactNode }) {
  return (
    <section className="space-y-4 border-l-2 border-cyan-400/30 pl-4 sm:pl-6">
      {children}
    </section>
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
  return <aside aria-label="Learning objectives" className="rounded-2xl border border-violet-300/20 bg-violet-400/[0.06] p-5"><p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">In this part</p><ul className="mt-3 grid gap-2 text-sm leading-relaxed text-slate-200 sm:grid-cols-3">{items.map((item, index) => <li key={index} className="border-l-2 border-violet-300/60 pl-3">{item}</li>)}</ul></aside>;
}

export function ImportantNote({ title, children }: { title: string; children: ReactNode }) {
  return <aside className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4" aria-label={title}><h3 className="text-sm font-black text-amber-100">{title}</h3><div className="mt-2 text-sm leading-relaxed text-amber-50/85">{children}</div></aside>;
}

export function SummaryStrip({ items }: { items: ReactNode[] }) {
  return <section aria-label="Key takeaways" className="grid gap-px overflow-hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/20 sm:grid-cols-3">{items.map((item, index) => <p key={index} className="bg-[#0b1728] p-4 text-sm font-semibold leading-relaxed text-cyan-50">{item}</p>)}</section>;
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
    <figure className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-4">
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