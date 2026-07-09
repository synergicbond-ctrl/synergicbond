"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

/* Clean UI Cards & Boxes for Student-Facing Course Lesson */
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

const CautionBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-6 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 text-sm leading-relaxed text-amber-200">
    <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-300 text-xs mb-2">
      <span>⚠️ Important Assumption / Caution:</span>
      <span>{title}</span>
    </div>
    <div>{children}</div>
  </div>
);

export default function EudiometryPart1() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Module 1 of 6
            </span>
            <span className="text-xs font-bold text-slate-400">Synergic Bond Course Lesson</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Gas Volume Foundations &amp; Eudiometry Principles
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Introduction to Eudiometry and quantitative gas phase analysis. Explore how Gay-Lussac&apos;s Law of Combining Volumes, Avogadro&apos;s Hypothesis, and Amagat&apos;s Law allow chemists to analyze reacting gaseous mixtures directly in volumetric units without converting to mass or moles.
          </p>
        </header>

        {/* Section 1: Introduction to Eudiometry */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Introduction to Eudiometry
          </h2>

          <ConceptCard title="What is Eudiometry?">
            <p>
              <strong className="text-white">Eudiometry</strong> is the experimental science of quantitative gas analysis. It involves measuring the exact volume changes that occur when reacting gaseous mixtures are sparked or exploded inside a calibrated, graduated glass apparatus known as a <strong className="text-cyan-300">Eudiometer Tube</strong> over a mercury reservoir.
            </p>
            <p>
              By observing the initial gas volume, the volume after combustion with excess oxygen, and the volume contractions caused by introducing selective chemical absorbents, chemists can accurately determine the molecular formulas of unknown hydrocarbons and the exact volumetric composition of complex fuel mixtures.
            </p>
          </ConceptCard>

          <ConceptCard title="The Universal Pressure-Temperature Condition Rule">
            <p>
              In all eudiometric measurements, <strong className="text-white">every gas volume must be recorded under identical conditions of temperature (<InlineMath math="T" />) and pressure (<InlineMath math="P" />)</strong>. Because all gases expand or contract identically when temperature or pressure changes, keeping these parameters strictly constant ensures that volumetric ratios accurately represent molecular stoichiometry.
            </p>
          </ConceptCard>
        </section>

        {/* Section 2: Gas Volume Laws Used in Eudiometry */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Gas Volume Laws Used in Eudiometry
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ConceptCard title="1. Gay-Lussac's Law of Combining Volumes">
              <p>
                When gases react chemically, they combine in simple, whole-number volumetric ratios, provided that all reactants and gaseous products are measured at identical temperature and pressure.
              </p>
              <div className="mt-3 rounded-xl bg-slate-950 p-3 border border-slate-800 text-center font-mono text-xs text-amber-300">
                <BlockMath math={String.raw`V_1 : V_2 : V_3 = n_1 : n_2 : n_3`} />
              </div>
            </ConceptCard>

            <ConceptCard title="2. Avogadro's Volume Relation">
              <p>
                Equal volumes of all ideal gases measured under identical conditions of temperature and pressure contain exactly equal numbers of molecules (and moles):
              </p>
              <div className="mt-3 rounded-xl bg-slate-950 p-3 border border-slate-800 text-center font-mono text-xs text-emerald-300">
                <BlockMath math={String.raw`V \propto n \implies V = \left(\frac{RT}{P}\right) n`} />
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Therefore, stoichiometric mole coefficients in balanced equations directly equal gas volume coefficients.
              </p>
            </ConceptCard>
          </div>

          <FormulaBox
            title="Amagat's Law of Additive Volumes for Non-Reacting Mixtures"
            formula={String.raw`V_{\text{mixture}} = V_1 + V_2 + V_3 + \dots + V_k`}
            description="The total volume of any non-reacting gaseous mixture equals the exact arithmetic sum of the partial volumes that each individual component gas would occupy if present alone at the system's temperature and pressure."
          />
        </section>

        {/* Section 3: Important Assumptions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Important Assumptions &amp; Phase Treatment
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <CautionBox title="Negligible Volume of Solids and Liquids">
              <p>
                In eudiometer calculations, the physical volume occupied by solid and liquid products (such as condensed water <InlineMath math="\text{H}_2\text{O (l)}" /> or precipitated salts) is orders of magnitude smaller than the volume occupied by gases.
              </p>
              <div className="mt-3 rounded-lg bg-slate-950 p-3 border border-slate-800 font-mono text-xs text-cyan-300">
                For 1 mole of <InlineMath math="\text{H}_2\text{O}" /> at STP:
                <br />
                <InlineMath math="V_{\text{gas}} \approx 22,400\text{ mL}" /> vs <InlineMath math="V_{\text{liquid}} \approx 18\text{ mL}" /> (<InlineMath math="< 0.1\%" />).
              </div>
              <p className="mt-2 text-xs text-slate-300 font-semibold">
                Rule: Unless the problem explicitly specifies a temperature above <InlineMath math="100^\circ\text{C}" /> where water remains steam (<InlineMath math="\text{H}_2\text{O (g)}" />), always treat water formed during room-temperature eudiometric explosions as a liquid occupying <InlineMath math="V = 0\text{ mL}" />.
              </p>
            </CautionBox>

            <CautionBox title="Treatment of Nitrogen as Inactive &amp; Air Composition">
              <p>
                Molecular nitrogen (<InlineMath math="\text{N}_2" />) possesses a very high triple-bond dissociation energy (<InlineMath math="\approx 948\text{ kJ/mol}" />) and remains completely inert during standard hydrocarbon combustion sparks inside glass eudiometer tubes (which would shatter at the extreme temperatures needed to oxidize <InlineMath math="\text{N}_2" />).
              </p>
              <div className="mt-3 space-y-1 text-xs text-slate-300">
                <div className="font-bold text-amber-300">Standard Air Composition by Volume:</div>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Oxygen (<InlineMath math="\text{O}_2" />): Exactly <InlineMath math="20\%" /> (or <InlineMath math="21\%" /> if specified).</li>
                  <li>Nitrogen (<InlineMath math="\text{N}_2" />): Approximately <InlineMath math="80\%" /> (or <InlineMath math="78\%" />).</li>
                  <li>Rule: In all air-combustion problems, <InlineMath math="\text{N}_2" /> acts purely as an inactive spectator gas that contributes to the initial and final volumes without undergoing any chemical change.</li>
                </ul>
              </div>
            </CautionBox>
          </div>
        </section>

        {/* Section 4: Worked Example on Stoichiometry */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Worked Application: Volumetric Stoichiometry
          </h2>

          <WorkedExample
            title="Oxygen Requirement for Acetylene Combustion"
            problem={
              <span>
                Calculate the exact volume of pure oxygen (<InlineMath math="\text{O}_2" />) required for the complete combustion of <InlineMath math="40\text{ mL}" /> of acetylene (<InlineMath math="\text{C}_2\text{H}_2" />) gas under identical conditions of temperature and pressure.
              </span>
            }
            steps={
              <div className="space-y-4">
                <StepBox number={1} title="Write the Balanced Gas Phase Combustion Equation">
                  <BlockMath math={String.raw`\text{C}_2\text{H}_2 (g) + \frac{5}{2} \text{O}_2 (g) \longrightarrow 2 \text{CO}_2 (g) + \text{H}_2\text{O} (l)`} />
                </StepBox>
                <StepBox number={2} title="Apply Avogadro's Volume Principle">
                  <p>
                    From reaction stoichiometry, <InlineMath math="1\text{ volume}" /> of <InlineMath math="\text{C}_2\text{H}_2" /> reacts completely with exactly <InlineMath math="\frac{5}{2}\text{ volumes}" /> of <InlineMath math="\text{O}_2" />.
                  </p>
                </StepBox>
                <StepBox number={3} title="Calculate Required Oxygen Volume">
                  <BlockMath math={String.raw`V_{\text{O}_2} = 40\text{ mL} \times \frac{5}{2} = 100\text{ mL}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="100\text{ mL of pure O}_2" />}
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Eudiometry Module • Module 1: Gas Volume Foundations &amp; Eudiometry Principles</p>
        </footer>
      </article>
    </main>
  );
}
