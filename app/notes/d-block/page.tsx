import Link from "next/link";
import DBlockVisualSystem from "./DBlockVisualSystem";

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
    <main className="dblock-page">
      <DBlockVisualSystem />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-2xl border border-[#17364a] bg-[#071321] px-5 py-7 shadow-[0_16px_42px_rgba(0,0,0,0.28)] sm:px-8 sm:py-9">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#4ee7ff]">JEE Advanced • Inorganic Chemistry</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-tight text-[#f5f7fb] sm:text-4xl lg:text-5xl">D-Block Elements</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#a8b3c1] sm:text-lg">
            Ten substantial theory parts built around electronic structure, periodic trends, redox stability, visual reaction maps and the detailed chemistry of chromium, manganese, silver, zinc, copper and iron.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-sm font-bold text-[#f5f7fb]">
            <span className="rounded-full border border-[#17364a] bg-[#02060b] px-3 py-1.5 text-[#4ee7ff]">10 theory parts</span>
            <span className="rounded-full border border-[#17364a] bg-[#02060b] px-3 py-1.5 text-[#b69aff]">KaTeX chemistry</span>
            <span className="rounded-full border border-[#17364a] bg-[#02060b] px-3 py-1.5 text-[#f2b84b]">Original scientific visuals</span>
          </div>
        </header>

        <section className="mt-5 grid gap-3 md:grid-cols-2">
          {parts.map(([number, title, description]) => (
            <Link
              key={number}
              href={`/notes/d-block/part${number}`}
              className="group rounded-xl border border-[#17364a] bg-[#071321] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:border-[#4ee7ff] hover:bg-[#071321]"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#4ee7ff] text-base font-black text-[#02060b]">{number}</span>
                <div>
                  <h2 className="text-lg font-black leading-6 text-[#f5f7fb] group-hover:text-[#4ee7ff]">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#a8b3c1]">{description}</p>
                  <p className="mt-3 text-sm font-black text-[#4ee7ff]">Open Part {number} →</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
