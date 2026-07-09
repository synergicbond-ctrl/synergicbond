"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

/* Reusable UI Components */
const ConceptCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-6 rounded-2xl border border-cyan-400/30 bg-slate-900/90 p-6 shadow-xl">
    <h3 className="border-b border-slate-800 pb-3 text-lg font-bold text-cyan-300">{title}</h3>
    <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">{children}</div>
  </div>
);

const FormulaBox = ({ title, formula, description }: { title: string; formula: string; description?: string }) => (
  <div className="my-6 rounded-2xl border border-amber-400/30 bg-slate-950 p-6 shadow-lg text-center space-y-3">
    <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-300">
      {title}
    </span>
    <div className="overflow-x-auto py-2">
      <BlockMath math={formula} />
    </div>
    {description && <p className="text-xs text-slate-400 font-sans">{description}</p>}
  </div>
);

const WorkedExample = ({
  title,
  problem,
  steps,
  result,
}: {
  title: string;
  problem: React.ReactNode;
  steps: React.ReactNode;
  result: React.ReactNode;
}) => (
  <div className="my-8 rounded-3xl border border-rose-400/30 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8 space-y-5">
    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
      <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rose-300">
        Worked Example
      </span>
      <span className="text-xs font-bold text-slate-400">{title}</span>
    </div>
    <div className="text-sm font-medium leading-relaxed text-slate-100">{problem}</div>
    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 space-y-3 font-mono text-xs text-slate-300">
      {steps}
    </div>
    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-xs font-bold text-emerald-300">
      Result: {result}
    </div>
  </div>
);

const StepBox = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <div className="flex gap-3 text-left">
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-300">
      {number}
    </span>
    <div>
      <h4 className="text-xs font-bold text-white mb-1">{title}</h4>
      <div className="text-xs text-slate-300 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function MoleConceptPart11() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Gas Density and Vapour Density</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Gas Density Relation (<InlineMath math="PM = dRT" />), Vapour Density &amp; Mass Spectrometry
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Linking macroscopic density measurements to molecular weight determinations. Derive the direct gas density equation, master the classical Vapour Density (<InlineMath math="VD = M / 2" />) equivalence, calculate diatomic gas volumes, and understand the physics of mass spectrometric isotope separation.
          </p>
        </header>

        {/* Section 1: Deriving the Gas Density Relation (PM = dRT) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Absolute Gas Density &amp; Molar Mass
          </h2>

          <ConceptCard title="From PV = nRT to PM = dRT">
            <p>
              Substituting <InlineMath math="n = w / M" /> into the ideal gas equation yields <InlineMath math="P \cdot V = (w / M) R \cdot T" />. Rearranging for the ratio of mass to volume (<InlineMath math="w / V" />), which defines absolute gas density (<InlineMath math="d" />), produces the fundamental density relation:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Ideal Gas Density Formula"
            formula={String.raw`P \cdot M = d \cdot R \cdot T \implies d = \frac{P \cdot M}{R \cdot T}`}
            description="At STP (0°C and 1 atm), the density of Nitrogen (N₂, M = 28) = 28 / 22.4 = 1.25 g L⁻¹."
          />

          <WorkedExample
            title="Determining Molar Mass from Experimental Gas Density"
            problem={
              <span>
                An unknown ideal gas exhibits an experimental density of <InlineMath math="d = 4.0\text{ g L}^{-1}" /> when measured inside a laboratory cell maintained at a pressure of <InlineMath math="P = 152\text{ cm Hg}" /> and a temperature of <InlineMath math="T = 27^\circ\text{C}" />. Calculate the exact molar mass (<InlineMath math="M" />) of the gas.
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Convert Pressure to Atmospheres and Temperature to Kelvin">
                  <BlockMath math={String.raw`P = \frac{152\text{ cm Hg}}{76\text{ cm Hg atm}^{-1}} = 2.0\text{ atm}, \quad T = 27 + 273 = 300\text{ K}`} />
                </StepBox>
                <StepBox number={2} title="Rearrange PM = dRT to Solve for Molar Mass M">
                  <BlockMath math={String.raw`M = \frac{d \cdot R \cdot T}{P} = \frac{4.0\text{ g L}^{-1} \times 0.0821\text{ L atm K}^{-1}\text{ mol}^{-1} \times 300\text{ K}}{2.0\text{ atm}}`} />
                </StepBox>
                <StepBox number={3} title="Compute Numerical Result">
                  <BlockMath math={String.raw`M = \frac{98.52}{2.0} = 49.26\text{ g mol}^{-1}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="M \approx 49.3\text{ g mol}^{-1}" />}
          />
        </section>

        {/* Section 2: Relative Density & Vapour Density (VD) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Relative Density &amp; Vapour Density (<InlineMath math="\text{VD}" />)
          </h2>

          <ConceptCard title="Comparing Densities Under Identical P and T">
            <p>
              When two distinct gases are compared at identical temperature and pressure, <InlineMath math="R, T," /> and <InlineMath math="P" /> cancel out entirely. Thus, the ratio of their absolute densities directly equals the ratio of their molecular masses: <InlineMath math="d_1 / d_2 = M_1 / M_2" />.
            </p>
            <p>
              In classical analytical chemistry, <strong className="text-amber-300">Vapour Density (<InlineMath math="\text{VD}" />)</strong> is specifically defined as the relative density of a gas compared against pure hydrogen gas (<InlineMath math="\text{H}_2, M = 2\text{ g mol}^{-1}" />) as the reference:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Vapour Density Equivalence"
            formula={String.raw`\text{VD} = \frac{d_{\text{gas}}}{d_{\text{H}_2}} = \frac{M_{\text{gas}}}{M_{\text{H}_2}} = \frac{M_{\text{gas}}}{2} \implies M_{\text{gas}} = 2 \times \text{VD}`}
            description="If a gas has 4.0 times the density of methane (M = 16), then its molecular mass M = 4 × 16 = 64 g/mol."
          />

          <WorkedExample
            title="Calculating STP Volume Occupied by 10.0 Moles of Chlorine Atoms"
            problem={
              <span>
                Determine the exact volume (<InlineMath math="V" />) in Liters occupied by a sample containing exactly <InlineMath math="10.0\text{ moles of chlorine atoms}" /> when measured at STP (<InlineMath math="0^\circ\text{C}" /> and <InlineMath math="1.0\text{ atm}" />).
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Recognize Diatomic Molecular Constitution of Chlorine Gas">
                  <BlockMath math={String.raw`2\text{ Cl atoms} \to 1\text{ Cl}_2\text{ molecule} \implies n_{\text{Cl}_2} = \frac{10.0}{2} = 5.0\text{ moles of Cl}_2\text{ gas}`} />
                </StepBox>
                <StepBox number={2} title="Multiply Molecular Moles by Standard Molar Volume (22.4 L)">
                  <BlockMath math={String.raw`V_{\text{STP}} = n_{\text{Cl}_2} \times 22.4\text{ L mol}^{-1} = 5.0 \times 22.4 = 112.0\text{ L}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="V = 112.0\text{ Liters at STP}" />}
          />
        </section>

        {/* Section 3: Mass Spectrometry Physics & Isotope Separation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Mass Spectrometry &amp; Isotopic Separation Physics
          </h2>

          <ConceptCard title="Why Elements Exhibit Fractional Atomic Masses">
            <p>
              Most naturally occurring elements do not consist of a single isotope; rather, they are mixtures of several stable isotopes possessing different mass numbers (<InlineMath math="A" />). To determine the exact mass and relative abundance of each isotope, chemists use an analytical instrument known as a <strong className="text-lime-300">Mass Spectrometer</strong>.
            </p>
            <p>
              When positive ionic fragments carrying charge <InlineMath math="q" /> and mass <InlineMath math="m" /> are accelerated through an electric potential <InlineMath math="V" /> and deflected by a magnetic field, their kinetic energy obeys <InlineMath math="\frac{1}{2} m v^2 = q V" />. Rearranging yields the fundamental separation equation:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Mass-to-Charge Separation Ratio"
            formula={String.raw`\frac{m}{q} = \frac{2 \cdot V}{v^2}`}
            description="Ions with higher m/q ratios deflect less curvature, separating into distinct isotopic peaks on the detector array."
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Gas Density and Vapour Density</p>
        </footer>
      </article>
    </main>
  );
}
