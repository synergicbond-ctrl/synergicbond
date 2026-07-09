"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

/* Reusable UI Components */
const ConceptCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-6 rounded-2xl border border-lime-400/30 bg-slate-900/90 p-6 shadow-xl">
    <h3 className="border-b border-slate-800 pb-3 text-lg font-bold text-lime-300">{title}</h3>
    <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">{children}</div>
  </div>
);

const FormulaBox = ({ title, formula, description }: { title: string; formula: string; description?: string }) => (
  <div className="my-6 rounded-2xl border border-cyan-400/30 bg-slate-950 p-6 shadow-lg text-center space-y-3">
    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
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
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-500/20 text-xs font-bold text-lime-300">
      {number}
    </span>
    <div>
      <h4 className="text-xs font-bold text-white mb-1">{title}</h4>
      <div className="text-xs text-slate-300 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function MoleConceptPart10() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-lime-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Ideal Gas Applications</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Gas State Transformations, Combined Gas Law &amp; Unit Interconversions
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Mastering multi-state gas transformations. Execute rigorous metric interconversions between cubic meters, liters, and milliliters, convert Celsius and Fahrenheit temperatures to absolute Kelvin, and apply the Combined Gas Equation across complex pressure-volume-temperature transitions.
          </p>
        </header>

        {/* Section 1: Comprehensive Volume and Temperature Scales */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Metric Volume &amp; Absolute Temperature Interconversions
          </h2>

          <ConceptCard title="Exact SI and Metric Volume Equivalence">
            <p>
              In volumetric stoichiometry, volumes are reported across a wide spectrum of metric units. Mastery of exact interconversions ensures flawless application of <InlineMath math="R = 0.0821\text{ L atm K}^{-1}\text{ mol}^{-1}" />:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Volumetric Unit Equivalence Chain"
            formula={String.raw`1.0\text{ L} \equiv 1.0\text{ dm}^3 \equiv 1,000\text{ mL} \equiv 1,000\text{ cm}^3\text{ (or cc)} \equiv 10^{-3}\text{ m}^3`}
            description="Conversely: 1.0 m³ = 1,000 L = 10⁶ cm³. Temperature conversion: T (in Kelvin) = T (°C) + 273.15."
          />
        </section>

        {/* Section 2: The Combined Gas Equation across Transformations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            The Combined Gas Law for Fixed Molar Quantities
          </h2>

          <ConceptCard title="State-to-State Transformations (Fixed n)">
            <p>
              When a fixed quantity (<InlineMath math="n = \text{constant}" />) of ideal gas undergoes simultaneous changes in pressure, volume, and absolute temperature from Initial State 1 (<InlineMath math="P_1, V_1, T_1" />) to Final State 2 (<InlineMath math="P_2, V_2, T_2" />), the universal gas constant <InlineMath math="R" /> cancels out, yielding the <strong className="text-lime-300">Combined Gas Equation</strong>:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Combined Gas Equation"
            formula={String.raw`\frac{P_1 \cdot V_1}{T_1} = \frac{P_2 \cdot V_2}{T_2} = n \cdot R = \text{Constant}`}
            description="Always ensure T₁ and T₂ are expressed in absolute Kelvin before performing cross-multiplication!"
          />

          <WorkedExample
            title="Calculating Final Volume Under Extreme Compression & Heating"
            problem={
              <span>
                A sample of pure carbon dioxide gas (<InlineMath math="\text{CO}_2" />) initially occupies a volume of <InlineMath math="V_1 = 5.00\text{ L}" /> at <InlineMath math="P_1 = 1.0\text{ atm}" /> and <InlineMath math="T_1 = 27^\circ\text{C}" />. The gas is subjected to rapid compression and thermal heating until its pressure rises to <InlineMath math="P_2 = 4.0\text{ atm}" /> while its absolute temperature reaches <InlineMath math="T_2 = 327^\circ\text{C}" />. Determine the exact final volume (<InlineMath math="V_2" />) occupied by the gas.
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Convert Temperatures to Absolute Kelvin Scale">
                  <BlockMath math={String.raw`T_1 = 27 + 273 = 300\text{ K}, \quad T_2 = 327 + 273 = 600\text{ K}`} />
                </StepBox>
                <StepBox number={2} title="Set Up Combined Gas Law Formula">
                  <BlockMath math={String.raw`\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2} \implies \frac{1.0 \times 5.00}{300} = \frac{4.0 \times V_2}{600}`} />
                </StepBox>
                <StepBox number={3} title="Isolate and Solve for Final Volume V2">
                  <BlockMath math={String.raw`V_2 = \frac{1.0 \times 5.00 \times 600}{300 \times 4.0} = \frac{3000}{1200} = 2.50\text{ L}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="V_2 = 2.50\text{ Liters (or } 2,500\text{ mL)}" />}
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Ideal Gas Applications</p>
        </footer>
      </article>
    </main>
  );
}
