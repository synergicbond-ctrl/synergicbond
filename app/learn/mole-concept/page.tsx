"use client";

import { renderChemistry } from "@/lib/renderChemistry";
import {
  PremiumNotes, Glass, Hero, Section, FormulaCard, Step, CalloutList, JeeFocus, RevisionSheet, type NoteSection,
} from "@/components/notes/premium";

// /learn/mole-concept — premium visual chapter on the shared notes template.

const SECTIONS: NoteSection[] = [
  { id: "why", label: "Why it matters" },
  { id: "mole", label: "The Mole" },
  { id: "map", label: "Conversion Map" },
  { id: "formulas", label: "Formula Cards" },
  { id: "example", label: "Solved Example" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "ncert", label: "NCERT Highlights" },
  { id: "jee", label: "JEE Focus" },
  { id: "revision", label: "Revision Sheet" },
];

export default function MoleConceptNotes() {
  return (
    <PremiumNotes sections={SECTIONS}>
      <div id="why" className="scroll-mt-10">
        <Hero
          eyebrow="Physical Chemistry · Class 11"
          title="The Mole"
          accent="Concept"
          lead="Chemistry happens in numbers too big to count — a single drop of water holds more molecules than there are stars in the observable universe. The mole is the chemist's bridge from the invisible world of atoms to the grams you weigh on a balance. Master this, and every calculation in chemistry becomes arithmetic."
          stats={[
            { v: "6.022×10²³", k: "particles per mole" },
            { v: "Foundation", k: "of all stoichiometry", tone: "text-emerald-300" },
            { v: "High yield", k: "every year, every exam", tone: "text-amber-300" },
          ]}
        />
      </div>

      <Section id="mole" eyebrow="Core idea" title="What is a mole?">
        <p className="max-w-2xl leading-relaxed text-white/70">
          A <span className="font-bold text-white">mole</span> is simply a counting unit — like a dozen (12) or a gross
          (144), but far larger. One mole is <span className="font-bold text-cyan-300">6.022×10²³</span> particles
          (Avogadro&apos;s number, N<sub>A</sub>). We use it because atoms are so small that lab-sized amounts contain
          astronomically many of them.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { k: "1 mole of atoms", v: "6.022×10²³ atoms" },
            { k: "1 mole of a gas (STP)", v: "22.7 L volume" },
            { k: "1 mole of a substance", v: "mass = molar mass in g" },
          ].map((c) => (
            <Glass key={c.k} className="p-4">
              <div className="text-sm font-bold text-white">{c.k}</div>
              <div className="mt-1 text-sm text-cyan-200">{renderChemistry(c.v)}</div>
            </Glass>
          ))}
        </div>
      </Section>

      <Section id="map" eyebrow="Visual map" title="The Mole Conversion Wheel">
        <p className="mb-5 max-w-2xl text-white/65">Every mole problem is one of these four hops. The mole sits at the centre — you always convert to moles first, then out.</p>
        <Glass className="p-6">
          <svg viewBox="0 0 340 260" className="mx-auto h-auto w-full max-w-md">
            <g stroke="rgba(255,255,255,0.15)" strokeWidth="1.5">
              <line x1="170" y1="130" x2="170" y2="40" /><line x1="170" y1="130" x2="300" y2="130" />
              <line x1="170" y1="130" x2="170" y2="220" /><line x1="170" y1="130" x2="40" y2="130" />
            </g>
            <circle cx="170" cy="130" r="42" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.5)" strokeWidth="2" />
            <text x="170" y="126" textAnchor="middle" fill="#67e8f9" fontSize="15" fontWeight="800">MOLES</text>
            <text x="170" y="142" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9">n</text>
            {[
              { x: 170, y: 26, t: "Mass (g)", s: "÷ M" },
              { x: 300, y: 130, t: "Particles", s: "× Nₐ" },
              { x: 170, y: 234, t: "Gas Volume", s: "× 22.7 L" },
              { x: 40, y: 130, t: "Molarity", s: "× V(L)" },
            ].map((n) => (
              <g key={n.t}>
                <rect x={n.x - 44} y={n.y - 16} width="88" height="32" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
                <text x={n.x} y={n.y - 2} textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">{n.t}</text>
                <text x={n.x} y={n.y + 10} textAnchor="middle" fill="#fcd34d" fontSize="9">{n.s}</text>
              </g>
            ))}
          </svg>
        </Glass>
      </Section>

      <Section id="formulas" eyebrow="Toolbox" title="Formula Cards">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormulaCard name="Moles from mass" formula="n = m / M" vars={[{ sym: "n", mean: "moles (mol)" }, { sym: "m", mean: "given mass (g)" }, { sym: "M", mean: "molar mass (g/mol)" }]} />
          <FormulaCard name="Number of particles" formula="N = n × N_A" vars={[{ sym: "N", mean: "particles" }, { sym: "N_A", mean: "6.022×10²³ /mol" }]} />
          <FormulaCard name="Molarity" formula="M = n / V" vars={[{ sym: "M", mean: "molarity (mol/L)" }, { sym: "V", mean: "volume of solution (L)" }]} />
          <FormulaCard name="Gas at STP" formula="n = V / 22.7" vars={[{ sym: "V", mean: "volume at STP (L)" }, { sym: "22.7", mean: "molar volume (L/mol)" }]} />
        </div>
        <Glass className="mt-4 border-cyan-400/20 bg-cyan-500/[0.05] p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">Memory box</div>
          <p className="mt-1 text-sm text-white/75">Always land on <span className="font-bold text-cyan-200">moles</span> first. Mass → moles → anything. Never jump mass → particles directly.</p>
        </Glass>
      </Section>

      <Section id="example" eyebrow="Worked out" title="Solved Example">
        <Glass className="p-5">
          <p className="text-sm font-semibold text-white">{renderChemistry("How many oxygen atoms are present in 8.8 g of CO₂? (M = 44 g/mol)")}</p>
          <div className="mt-4 space-y-3">
            <Step n={1}>{renderChemistry("Moles of CO₂ = m/M = 8.8 / 44 = 0.2 mol")}</Step>
            <Step n={2}>{renderChemistry("Each CO₂ has 2 O atoms → moles of O atoms = 0.2 × 2 = 0.4 mol")}</Step>
            <Step n={3}>{renderChemistry("O atoms = 0.4 × 6.022×10²³ = 2.409×10²³")}</Step>
          </div>
          <div className="mt-4 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] px-4 py-3">
            <span className="text-xs font-bold uppercase text-emerald-300">Final answer</span>
            <div className="mt-0.5 font-black text-emerald-200">{renderChemistry("≈ 2.41×10²³ oxygen atoms")}</div>
          </div>
          <div className="mt-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.07] px-4 py-2.5">
            <span className="text-xs font-bold uppercase text-amber-300">JEE shortcut</span>
            <p className="mt-0.5 text-sm text-white/75">Atoms of an element = (given mass ÷ molar mass) × (atomicity) × Nₐ — chain it in one line.</p>
          </div>
        </Glass>
      </Section>

      <Section id="mistakes" eyebrow="Exam traps" title="Common Mistakes">
        <CalloutList variant="mistake" items={[
          "Confusing molecules with atoms — 1 mole of CO₂ is 1 mole of molecules but 3 moles of atoms.",
          "Using 22.4 L instead of the current STP molar volume 22.7 L (273.15 K, 1 bar).",
          "Forgetting to multiply by atomicity for diatomic gases (O₂, N₂, Cl₂).",
          "Mixing up molarity (per litre of solution) with molality (per kg of solvent).",
        ]} />
      </Section>

      <Section id="ncert" eyebrow="Straight from the book" title="NCERT Highlights">
        <CalloutList variant="ncert" items={[
          "Avogadro's number is the number of entities in one mole; it equals 6.022×10²³ (NCERT Class 11, Ch. 1).",
          "Molar mass in grams is numerically equal to atomic/molecular mass in u.",
          "Molarity changes with temperature (volume expands); molality does not.",
        ]} />
      </Section>

      <Section id="jee" eyebrow="Weightage" title="JEE Main Focus">
        <JeeFocus items={[
          { t: "% composition & empirical formula", tag: "Most repeated" },
          { t: "Limiting reagent problems", tag: "High weightage" },
          { t: "Concentration terms interconversion", tag: "Frequent" },
          { t: "Gas volumes & Avogadro's law", tag: "Recurring" },
        ]} />
      </Section>

      <Section id="revision" eyebrow="One screen" title="Revision Sheet">
        <RevisionSheet
          points={[
            "Nₐ = 6.022×10²³ per mole", "n = m / M", "N = n × Nₐ", "Molar volume (STP) = 22.7 L",
            "Molarity M = n / V(L)", "Molar mass (g) = molecular mass (u)", "Always convert to moles first", "Atoms = moles × atomicity × Nₐ",
          ]}
          ctas={[{ href: "/pyq", label: "Practise PYQs" }, { href: "/memory?deck=formula", label: "Recall these formulas" }]}
        />
      </Section>
    </PremiumNotes>
  );
}
