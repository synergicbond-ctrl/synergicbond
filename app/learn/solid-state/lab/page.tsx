import Link from "next/link";
import type { ReactNode } from "react";
import { AppShell } from "@/components/AppShell";
import { CellCounter, DensityLab, RadiusRatioLab } from "./_cells";
import { CloseStack } from "./_layers";
import { BandLab, DefectLab, MagnetLab } from "./_props";

export const metadata = {
  title: "Solid State Interactive Lab | JEE Advanced | Synergic Bond",
  description:
    "Guided, hands-on Solid State: count atoms in unit cells, build close-packed layers, derive radius-ratio limits, watch defects form, and see how temperature changes conduction and magnetism.",
};

type Section = { id: string; n: number; short: string; title: string; lead: string; node: ReactNode; traps: string[]; worked?: { q: string; a: ReactNode } };

const SECTIONS: Section[] = [
  {
    id: "unit-cells",
    short: "Unit cells",
    n: 1,
    title: "Count the atoms in a unit cell",
    lead: "An atom at a corner is shared by 8 cells, on a face by 2, on an edge by 4, and inside by none. Step through each site type and watch Z build up.",
    node: <CellCounter />,
    traps: [
      "Z for the cell, not the number of atoms you can see: FCC shows 14 atoms but Z = 4.",
      "In BCC the atoms touch along the body diagonal, not along the edge.",
      "Packing efficiency order: SC (52.4%) < BCC (68.0%) < FCC = HCP (74.05%).",
    ],
  },
  {
    id: "density",
    short: "Density",
    n: 2,
    title: "From edge length to density",
    lead: "Density links the microscopic cell to a measurable property. Try the presets, then change a or Z and watch ρ respond.",
    node: <DensityLab />,
    traps: ["Use 1 pm = 10⁻¹⁰ cm (or 1 Å = 10⁻⁸ cm) before cubing a.", "For ionic solids Z counts formula units and M is the formula mass: NaCl has Z = 4 and M = 58.5."],
    worked: {
      q: "Copper crystallises in FCC with edge length 361 pm. Find its density (M = 63.5 g/mol) and its atomic radius.",
      a: (
        <>
          Z = 4. ρ = 4 × 63.5 / [(361×10⁻¹⁰ cm)³ × 6.022×10²³] = <b>8.97 g cm⁻³</b>. FCC contact: √2·a = 4r, so r = 361 × √2 / 4 = <b>127.6 pm</b>.
        </>
      ),
    },
  },
  {
    id: "close-packing",
    short: "Close packing",
    n: 3,
    title: "Build close-packed crystals layer by layer",
    lead: "Place layer A, drop layer B into half of its hollows, then choose where the third layer goes. That one choice separates HCP from FCC.",
    node: <CloseStack />,
    traps: [
      "Both HCP and CCP have coordination number 12 and 74% packing; only the stacking differs.",
      "Per atom: 1 octahedral void and 2 tetrahedral voids. For N atoms: N and 2N.",
      "ABC stacking is the FCC lattice viewed along its body diagonal ({111} planes).",
    ],
    worked: {
      q: "Atoms of element X form a ccp lattice; atoms of Y occupy ⅔ of the octahedral voids and all tetrahedral voids are empty. What is the formula?",
      a: (
        <>
          For N atoms of X there are N octahedral voids, so Y = ⅔N. X : Y = 1 : ⅔ = 3 : 2. Formula = <b>X₃Y₂</b>.
        </>
      ),
    },
  },
  {
    id: "radius-ratio",
    short: "Radius ratio",
    n: 4,
    title: "Radius ratio decides the coordination number",
    lead: "Slide r₊/r₋ and watch the anions around the cation. When they would overlap, the geometry is impossible; the textbook limits are where anions just touch.",
    node: <RadiusRatioLab />,
    traps: [
      "A cation can touch all neighbours only if r₊/r₋ is at or above the lower limit for that polyhedron.",
      "Learn the limits as 0.155, 0.225, 0.414, 0.732 for CN 3, 4, 6, 8.",
      "Radius ratio is a guide: NaCl (0.52, CN 6) fits; CsCl (0.93, CN 8) fits; exceptions exist.",
    ],
    worked: {
      q: "In an ionic solid with FCC anions, a cation fits exactly in an octahedral void. Find r₊/r₋.",
      a: (
        <>
          Along the cell edge the anion–cation–anion line has length a = 2r₋ + 2r₊; along the face diagonal the anions touch: √2·a = 4r₋. So a = 2√2·r₋, giving 2r₊ = (2√2 − 2)r₋, so r₊/r₋ = √2 − 1 = <b>0.414</b>.
        </>
      ),
    },
  },
  {
    id: "defects",
    short: "Defects",
    n: 5,
    title: "Point defects in ionic crystals",
    lead: "Switch between defect types. Watch which ions move, where the vacancies are, and what happens to density and stoichiometry.",
    node: <DefectLab />,
    traps: [
      "Schottky lowers density; Frenkel leaves it unchanged.",
      "Both are stoichiometric. F-centres and impurity defects are not.",
      "AgBr is the standard example of a crystal that shows both Schottky and Frenkel defects.",
    ],
  },
  {
    id: "bands",
    short: "Bands",
    n: 6,
    title: "Bands, gaps and temperature",
    lead: "Choose a material and drag the temperature. Electrons cross the gap in semiconductors; in a metal they just scatter more.",
    node: <BandLab />,
    traps: ["Conductor: σ decreases with T. Semiconductor: σ increases with T.", "Insulators have gaps of roughly 5 eV or more; typical semiconductors about 0.5–3 eV."],
  },
  {
    id: "magnetism",
    short: "Magnetism",
    n: 7,
    title: "Magnetic ordering",
    lead: "Select a type, then raise the temperature past the Curie or Néel temperature to see ordered solids turn paramagnetic.",
    node: <MagnetLab />,
    traps: [
      "Ferro-, antiferro- and ferrimagnetic solids all become paramagnetic above their transition temperature.",
      "Ferrimagnetic: unequal opposing moments, so a net moment remains (Fe₃O₄).",
      "Paramagnetism needs unpaired electrons: count them with the electronic configuration.",
    ],
    worked: {
      q: "Which of Cu²⁺, Zn²⁺, Ti⁴⁺ and Fe³⁺ are paramagnetic?",
      a: (
        <>
          Cu²⁺ (3d⁹, 1 unpaired) and Fe³⁺ (3d⁵, 5 unpaired) are paramagnetic. Zn²⁺ (3d¹⁰) and Ti⁴⁺ (3d⁰ with an argon core) have no unpaired electrons, so they are <b>diamagnetic</b>.
        </>
      ),
    },
  },
];

export default function Page() {
  return (
    <AppShell
      discipline="JEE Advanced · Physical Chemistry"
      chapterTitle="Solid State: Interactive Lab"
      chapterSlug="solid-state"
      description="Seven guided simulations: build it, change it, see what happens. Each one ends with the exam traps and a worked problem."
      free={true}
    >
      <div className="mx-auto max-w-6xl space-y-14">
        <nav aria-label="Lab sections" className="flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent)]"
            >
              {s.n}. {s.short}
            </a>
          ))}
          <Link href="/learn/solid-state/master" className="ml-auto rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--text-muted)] hover:border-[var(--accent)]">
            Read the full notes →
          </Link>
        </nav>

        {SECTIONS.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <h2 className="text-2xl font-black text-[var(--foreground)]">
              <span className="mr-2 text-[var(--accent)]">{s.n}</span>
              {s.title}
            </h2>
            <p className="mt-2 max-w-3xl text-[var(--text-muted)]">{s.lead}</p>
            <div className="mt-5">{s.node}</div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-rose-300/35 bg-rose-300/[0.055] p-4">
                <div className="text-xs font-bold uppercase tracking-wide text-rose-200">JEE traps</div>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--foreground)]">
                  {s.traps.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              {s.worked && (
                <div className="rounded-lg border border-amber-300/35 bg-amber-300/[0.055] p-4">
                  <div className="text-xs font-bold uppercase tracking-wide text-amber-200">Worked problem</div>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[var(--foreground)]">{s.worked.q}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">{s.worked.a}</p>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}
