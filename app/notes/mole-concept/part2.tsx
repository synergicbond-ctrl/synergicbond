"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

/* Reusable UI Components */
const ConceptCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-6 rounded-2xl border border-amber-400/30 bg-slate-900/90 p-6 shadow-xl">
    <h3 className="border-b border-slate-800 pb-3 text-lg font-bold text-amber-300">{title}</h3>
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
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-300">
      {number}
    </span>
    <div>
      <h4 className="text-xs font-bold text-white mb-1">{title}</h4>
      <div className="text-xs text-slate-300 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function MoleConceptPart2() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-amber-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Avogadro Constant and Counting Particles</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Atomic Mass, Mass Defect &amp; Einstein Energy Relation
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Exploring atomic architecture at the nuclear boundary. Master the definitions of atomic number and mass number, understand why actual isotopic masses are always smaller than the arithmetic sum of isolated nucleons, and apply Einstein&apos;s mass-energy equivalence to quantify nuclear mass defect and binding energy.
          </p>
        </header>

        {/* Section 1: Atomic Architecture & Subatomic Masses */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-amber-300 border-l-4 border-amber-400 pl-3">
            Atomic Number vs. Mass Number
          </h2>

          <ConceptCard title="Nuclear Composition and Electron Shells">
            <p>
              An atom consists of a dense, positively charged nucleus containing protons and neutrons, surrounded by an electron cloud. We define two primary integer parameters:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-xs text-slate-300 pt-1">
              <li>
                <strong className="text-white">Atomic Number (<InlineMath math="Z" />):</strong> The total number of protons inside the nucleus. In a neutral atom, <InlineMath math="Z" /> also equals the total number of surrounding electrons.
              </li>
              <li>
                <strong className="text-white">Mass Number (<InlineMath math="A" />):</strong> The total count of nucleons (protons + neutrons) inside the nucleus: <InlineMath math="A = Z + N" />.
              </li>
            </ul>
          </ConceptCard>

          <FormulaBox
            title="Individual Subatomic Rest Masses"
            formula={String.raw`m_p \approx 1.007276\text{ u}, \quad m_n \approx 1.008665\text{ u}, \quad m_e \approx 0.0005486\text{ u}`}
            description="Notice that neutrons are slightly heavier than protons, while electron mass is roughly 1/1836 of a proton's mass."
          />
        </section>

        {/* Section 2: Nuclear Mass Defect (Delta m) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-amber-300 border-l-4 border-amber-400 pl-3">
            Nuclear Mass Defect (<InlineMath math="\Delta m" />)
          </h2>

          <ConceptCard title="The Missing Mass Phenomenon">
            <p>
              When isolated protons, neutrons, and electrons condense to form a stable atom, experimental mass spectrometry reveals a surprising reality: <strong className="text-amber-300">the actual measured rest mass of any stable isotope (<InlineMath math="M_{\text{actual}}" />) is always strictly less than the sum of the rest masses of its constituent subatomic particles</strong>.
            </p>
            <p>
              This difference between the theoretical sum of constituent masses and the actual observed isotopic mass is known as the <strong className="text-cyan-300">mass defect (<InlineMath math="\Delta m" />)</strong>.
            </p>
          </ConceptCard>

          <FormulaBox
            title="Mass Defect Equation"
            formula={String.raw`\Delta m = (Z \cdot m_p + N \cdot m_n + Z \cdot m_e) - M_{\text{actual}}`}
            description="Where Z is atomic number, N is neutron count (A - Z), and M_actual is the experimentally measured isotopic rest mass."
          />
        </section>

        {/* Section 3: Einstein Mass-Energy Equivalence */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-amber-300 border-l-4 border-amber-400 pl-3">
            Einstein Mass-Energy Equivalence
          </h2>

          <ConceptCard title="Where Does the Lost Mass Go?">
            <p>
              According to Albert Einstein&apos;s special theory of relativity, mass and energy are mutually convertible manifestations of the same physical entity. When nucleons fuse together to form a stable nucleus, an enormous amount of energy (<strong className="text-emerald-300">Nuclear Binding Energy</strong>) is released into the surroundings.
            </p>
            <p>
              The mass lost during this nuclear condensation (<InlineMath math="\Delta m" />) directly accounts for the released binding energy through Einstein&apos;s famous relation:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Einstein Mass-Energy Relation"
            formula={String.raw`E_{\text{binding}} = \Delta m \cdot c^2`}
            description="In nuclear physics, 1 atomic mass unit (1 u) of mass defect corresponds exactly to 931.5 MeV of binding energy."
          />

          <WorkedExample
            title="Calculating Nuclear Mass Defect of Helium-4"
            problem={
              <span>
                Consider a stable Helium-4 isotope (<InlineMath math="^4_2\text{He}" />), which consists of exactly <InlineMath math="2" /> protons, <InlineMath math="2" /> neutrons, and <InlineMath math="2" /> electrons. Given the theoretical constituent sum of <InlineMath math="4.03188\text{ u}" /> and the actual measured atomic mass of <InlineMath math="4.00260\text{ u}" />, determine the exact mass defect and explain its thermodynamic significance.
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Calculate Theoretical Sum of Subatomic Masses">
                  <BlockMath math={String.raw`m_{\text{theoretical}} = 2m_p + 2m_n + 2m_e = 4.03188\text{ u}`} />
                </StepBox>
                <StepBox number={2} title="Record Experimental Isotopic Mass">
                  <BlockMath math={String.raw`M_{\text{actual}} = 4.00260\text{ u}`} />
                </StepBox>
                <StepBox number={3} title="Compute Mass Defect (Delta m)">
                  <BlockMath math={String.raw`\Delta m = m_{\text{theoretical}} - M_{\text{actual}} = 4.03188 - 4.00260 = 0.02928\text{ u}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="\Delta m = 0.02928\text{ u} \ (\text{Equivalent to } \approx 27.27\text{ MeV of binding energy})" />}
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Avogadro Constant and Counting Particles</p>
        </footer>
      </article>
    </main>
  );
}
