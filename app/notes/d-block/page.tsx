import Link from "next/link";
import { DBlockVisualLibrary } from "./DBlockVisualLibrary";

export const metadata = {
  title: "D-Block Elements — JEE Advanced Theory",
  description:
    "A ten-part, visual-first D-block theory course covering configurations, trends, redox chemistry, chromium, manganese and important compounds.",
};

const parts = [
  [1, "Definition, classification and electronic configuration", "Position of the d-block, transition-element test, 3d/4d/5d configurations, anomalies and ion formation."],
  [2, "Atomic size, ionic size, lanthanoid contraction and density", "Cross-series size trends, 4d–5d similarity, Zr–Hf comparison, atomic volume and density."],
  [3, "Metallic bonding, atomisation, melting point and reactivity", "Metal–metal bonding, physical-property trends, exceptions, ionisation and complete reactivity logic."],
  [4, "Variable oxidation states and redox stability", "Oxidation-state patterns, stability, electrode potentials, disproportionation and comproportionation."],
  [5, "Complex formation and catalytic behaviour", "Metal–ligand bonding, coordination tendencies, homogeneous and heterogeneous catalysis."],
  [6, "Colour and magnetic properties", "d–d transitions, charge transfer, ligand effects, spin-only moments and magnetic ordering."],
  [7, "Alloys, interstitial compounds and non-stoichiometry", "Metal lattices, interstitial phases, defect chemistry, alloys and abundance patterns."],
  [8, "Chromium, chromate and dichromate chemistry", "Chromite processing, chromate–dichromate equilibrium, structures and oxidising reactions."],
  [9, "Manganese, manganate and permanganate chemistry", "Preparation routes, medium-dependent reduction, reaction maps and titration theory."],
  [10, "Compounds of silver, zinc, copper and iron", "Preparations, properties, colour changes, precipitates, qualitative tests and reaction networks."],
] as const;

export default function DBlockHubPage() {
  return (
    <main className="min-h-screen bg-[#050b14] text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#07111f,#0b1a2c_55%,#10142a)] px-6 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-14">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">JEE Advanced • Inorganic Chemistry</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">D-Block Elements</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Ten substantial theory parts built around electronic structure, periodic trends, redox stability, visual reaction maps and the detailed chemistry of chromium, manganese, silver, zinc, copper and iron.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-slate-200">
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2">10 theory parts</span>
            <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2">KaTeX chemistry</span>
            <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2">Original scientific visuals</span>
          </div>
        </header>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          {parts.map(([number, title, description]) => (
            <Link
              key={number}
              href={`/notes/d-block/part${number}`}
              className="group rounded-[1.75rem] border border-white/10 bg-[#081321] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-[#0a1929]"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-300 text-base font-black text-slate-950">{number}</span>
                <div>
                  <h2 className="text-xl font-black leading-7 text-white group-hover:text-cyan-100">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
                  <p className="mt-5 text-sm font-black text-cyan-300">Open Part {number} →</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
        <DBlockVisualLibrary />
      </div>
    </main>
  );
}
