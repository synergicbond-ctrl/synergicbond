"use client";
import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

type PageCardProps = {
  page?: string;
  title: string;
  children: React.ReactNode;
};

function PageCard({ title, children }: PageCardProps) {
  return (
    <section className="my-6 rounded-3xl border border-slate-700/60 bg-[#111827] p-6 sm:p-8 shadow-xl">
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
        <h3 className="text-xl font-bold text-cyan-300">{title}</h3>
      </div>
      <div className="space-y-4 text-[15px] leading-relaxed text-slate-200">{children}</div>
    </section>
  );
}

function FormulaBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border border-cyan-400/30 bg-slate-950 px-5 py-4 text-center font-semibold text-cyan-300 shadow-lg">
      {children}
    </div>
  );
}

function WorkingLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 font-medium text-slate-200 shadow-sm">
      {children}
    </div>
  );
}

function DiagramBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border border-dashed border-blue-400/40 bg-slate-950 p-5 text-center shadow-md">
      <div className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-400">
        {title}
      </div>
      <div className="text-slate-200">{children}</div>
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-5 shadow-md text-sm text-slate-200 space-y-2">
      {children}
    </div>
  );
}

function RuleBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border border-rose-400/30 bg-rose-950/20 px-5 py-4 font-semibold text-rose-300 shadow-md">
      {children}
    </div>
  );
}

function LabelPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
      {children}
    </span>
  );
}

function ReactionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-indigo-500/30 bg-indigo-950/30 p-4 font-mono text-sm text-indigo-200 overflow-x-auto shadow-sm">
      {children}
    </div>
  );
}

function QuestionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border border-purple-500/30 bg-purple-950/20 p-5 text-sm text-purple-200 shadow-md space-y-2">
      {children}
    </div>
  );
}

function MiniStructure({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-slate-700 bg-slate-900 p-4 text-center">
      <div className="text-xs font-bold uppercase text-slate-400 mb-2">{title}</div>
      <div className="text-sm font-mono text-slate-200">{children}</div>
    </div>
  );
}

function ReactionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-4 text-sm text-slate-200">
      {children}
    </div>
  );
}

function YellowNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-yellow-500/30 bg-yellow-950/20 p-4 text-sm text-yellow-300">
      {children}
    </div>
  );
}

function RedNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-red-500/30 bg-red-950/20 p-4 text-sm text-red-300">
      {children}
    </div>
  );
}

function PinkBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-pink-500/30 bg-pink-950/20 p-4 text-sm text-pink-200">
      {children}
    </div>
  );
}

function PinkQuestion({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-pink-500/40 bg-pink-950/30 p-4 font-semibold text-pink-300">
      {children}
    </div>
  );
}

function SourceNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 text-xs italic text-slate-400">
      {children}
    </div>
  );
}

function CrossedOut({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 rounded-lg bg-red-950/40 p-3 text-red-400 line-through text-sm">
      {children}
    </div>
  );
}

function CrossedRelation({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 rounded-lg bg-red-950/40 p-3 text-red-400 line-through font-mono text-xs">
      {children}
    </div>
  );
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-sm text-amber-300">
      {children}
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-rose-500/40 bg-rose-950/30 p-4 text-sm font-bold text-rose-300">
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded bg-slate-800 px-2 py-0.5 text-xs font-semibold text-slate-300 mr-2">
      {children}
    </span>
  );
}

function StatusBadge({ status }: { status?: string }) {
  return (
    <span className="rounded-full bg-cyan-500/20 px-2 py-1 text-xs font-bold text-cyan-300">
      {status || "VERIFIED"}
    </span>
  );
}

function ChecklistItem({ children, checked, done }: { children: React.ReactNode; checked?: boolean; done?: boolean }) {
  return (
    <div className="flex items-center gap-2 py-1 text-sm text-slate-300">
      <span className="text-emerald-400 font-bold">{(checked || done) ? "✓" : "○"}</span>
      <span>{children}</span>
    </div>
  );
}

export default function TitrationPart7() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
          Advanced Analytical Numericals & Complete Synthesis
        </h1>
      </header>
      <div className="mx-auto max-w-5xl space-y-8">
        

        <PageCard title="Ion-Exchange Method or Resin Method">
          <h3 className="text-2xl font-black text-pink-600 underline">
            Ion-exchange method or Resin method:
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            <DiagramBox title="Acidic resin — RH">
              <div className="mx-auto max-w-sm rounded-2xl border-4 border-blue-400 bg-white p-4">
                <p className="mb-2 font-bold text-amber-800">Hard water ↓</p>
                <div className="rounded-xl border border-dashed border-blue-300 p-4">
                  <p className="font-bold text-amber-800">Acidic resin</p>
                  <p className="text-xl font-black text-amber-900">RH</p>
                  <div className="mt-3 h-16 rounded-lg bg-amber-100" />
                </div>
                <p className="mt-3 font-bold text-pink-700">
                  Acidic water
                </p>
                <p className="text-pink-700">only cation present is H<sup>+</sup></p>
              </div>
            </DiagramBox>

            <DiagramBox title="Basic resin — ROH">
              <div className="mx-auto max-w-sm rounded-2xl border-4 border-blue-400 bg-white p-4">
                <div className="rounded-xl border border-dashed border-blue-300 p-4">
                  <p className="font-bold text-amber-800">Basic resin</p>
                  <p className="text-xl font-black text-amber-900">ROH</p>
                  <div className="mt-3 h-16 rounded-lg bg-amber-100" />
                </div>
                <p className="mt-3 font-bold text-blue-700">
                  neutral water
                </p>
                <p className="font-bold text-pink-700">Distilled water</p>
                <p className="text-pink-700">
                  no other cation &amp; anion than H<sup>+</sup> / OH<sup>-</sup>
                </p>
              </div>
            </DiagramBox>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ReactionBox>
              Ca<sup>2+</sup> + 2RH → R<sub>2</sub>Ca + 2H<sup>+</sup>
            </ReactionBox>

            <ReactionBox>
              Na<sup>+</sup> + RH → RNa + H<sup>+</sup>
            </ReactionBox>

            <ReactionBox>
              Cl<sup>-</sup> + ROH → RCl + OH<sup>-</sup>
            </ReactionBox>

            <ReactionBox>
              SO<sub>4</sub><sup>2-</sup> + 2ROH → R<sub>2</sub>SO<sub>4</sub> + 2OH<sup>-</sup>
            </ReactionBox>
          </div>

          <FormulaBox>
            H<sup>+</sup> + OH<sup>-</sup> → H<sub>2</sub>O
          </FormulaBox>

          <div className="border-t border-pink-300 pt-5">
            <h3 className="text-xl font-black text-red-600 underline">
              Unit to express hardness
            </h3>

            <p>
              It is expressed as <b>ppm of CaCO<sub>3</sub> equivalent</b> to
              hardness creating salts.
            </p>
          </div>
        </PageCard>

        <PageCard title="Temporary, Permanent and Total Hardness Calculation">
          <QuestionBox>
            Q. 50 L of a water sample contains 200 mg NaCl, 55 mg CaCl
            <sub>2</sub>, 183 mg Ca(HCO<sub>3</sub>)<sub>2</sub> and 148 mg
            Mg(NO<sub>3</sub>)<sub>2</sub>. Cal. temporary, permanent and total
            hardness of water sample.
          </QuestionBox>

          <NoteBox>
            NaCl is circled/cross-marked in the source because it does not
            contribute to hardness.
          </NoteBox>

          <div className="space-y-4 rounded-2xl border border-green-200 bg-green-50 p-4">
            <h3 className="font-black text-green-800 underline">
              T.H.:
            </h3>

            <FormulaBox>
              n<sub>eq</sub> Ca(HCO<sub>3</sub>)<sub>2</sub> = n<sub>eq</sub>{" "}
              CaCO<sub>3</sub>
            </FormulaBox>

            <WorkingLine>
              or, (183 × 10<sup>-3</sup>) / (20 + 61) = w / (20 + 30)
            </WorkingLine>

            <FormulaBox>
              w = 112.96 × 10<sup>-3</sup> gm
            </FormulaBox>

            <FormulaBox>
              T.H. = [112.96 × 10<sup>-3</sup> / (50 × 10<sup>3</sup>)] × 10
              <sup>6</sup> = 2.26 ppm CaCO<sub>3</sub>
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="font-black text-blue-800 underline">
              P.H.:
            </h3>

            <FormulaBox>
              n<sub>eq</sub> CaCl<sub>2</sub> + n<sub>eq</sub> Mg(NO
              <sub>3</sub>)<sub>2</sub> = n<sub>eq</sub> CaCO<sub>3</sub>
            </FormulaBox>

            <WorkingLine>
              (55 × 10<sup>-3</sup>) / (20 + 35.5) + (148 × 10
              <sup>-3</sup>) / (12 + 62) = w / (20 + 30)
            </WorkingLine>

            <FormulaBox>
              w = 149.55 × 10<sup>-3</sup> gm
            </FormulaBox>

            <FormulaBox>
              P.H. = [149.55 × 10<sup>-3</sup> / (50 × 10<sup>3</sup>)] × 10
              <sup>6</sup> = 2.99 ppm CaCO<sub>3</sub>
            </FormulaBox>
          </div>

          <FormulaBox>
            Total hardness = T.H. + P.H. = 5.25 ppm CaCO<sub>3</sub>
          </FormulaBox>
        </PageCard>

        <PageCard title="Hardness from pH after Acidic Resin and Lime Softening">
          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <QuestionBox>
              Q. 100 L water sample containing only Ca<sup>2+</sup> and Mg
              <sup>2+</sup> ions as cations is passed through acidic resin. If
              the pH of water sample finally obtained is 2.0, cal. the hardness
              of water.
            </QuestionBox>

            <FormulaBox>
              pH = -log<sub>10</sub>[H<sup>+</sup>]
            </FormulaBox>

            <WorkingLine>
              2.0 = -log[H<sup>+</sup>] ⇒ log[H<sup>+</sup>] = -2 = log 10
              <sup>-2</sup>
            </WorkingLine>

            <FormulaBox>
              [H<sup>+</sup>] = 10<sup>-2</sup> M
            </FormulaBox>

            <WorkingLine>
              moles of H<sup>+</sup> ions = 100 × 10<sup>-2</sup> = 1
            </WorkingLine>

            <ReactionBox>
              M<sup>2+</sup> + 2RH → R<sub>2</sub>M + 2H<sup>+</sup>
            </ReactionBox>

            <WorkingLine>
              1/2 mole hardness-causing M<sup>2+</sup> gives 1 mole H
              <sup>+</sup>.
            </WorkingLine>

            <FormulaBox>
              Hardness = [(1/2) × 100 / (100 × 10<sup>3</sup>)] × 10
              <sup>6</sup> = 500 ppm CaCO<sub>3</sub>
            </FormulaBox>
          </div>

          <div className="mt-6 space-y-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
            <QuestionBox>
              Q. 5 kg of a hard water sample contains 324 gm Ca(HCO
              <sub>3</sub>)<sub>2</sub> and 365 gm Mg(HCO<sub>3</sub>)
              <sub>2</sub>. Cal. the mass of Ca(OH)<sub>2</sub> (slaked lime)
              needed to soft this water sample.
            </QuestionBox>

            <ReactionBox>
              Ca(HCO<sub>3</sub>)<sub>2</sub> + Ca(OH)<sub>2</sub> → 2CaCO
              <sub>3</sub>↓ + 2H<sub>2</sub>O
            </ReactionBox>

            <WorkingLine>
              324 gm Ca(HCO<sub>3</sub>)<sub>2</sub> = 2 mole
              <br />
              Required Ca(OH)<sub>2</sub> = 2 mole
            </WorkingLine>

            <ReactionBox>
              Mg(HCO<sub>3</sub>)<sub>2</sub> + Ca(OH)<sub>2</sub> → Mg(OH)
              <sub>2</sub>↓ + CaCO<sub>3</sub>↓ + CO<sub>2</sub>↑ + H
              <sub>2</sub>O
            </ReactionBox>

            <WorkingLine>
              365 gm Mg(HCO<sub>3</sub>)<sub>2</sub> = 2.5 mole
              <br />
              Required Ca(OH)<sub>2</sub> = 2.5 mole
            </WorkingLine>

            <NoteBox>
              The final mass calculation continues at the top of page 22.
            </NoteBox>
          </div>
        </PageCard>

        <PageCard title="Final Lime Requirement and Blank Space">
          <FormulaBox>
            m<sub>Ca(OH)₂ needed</sub> = (2 + 2.5) × 74 = 333 gm
          </FormulaBox>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="text-xl font-black text-pink-600">— x — x —</p>
            <p className="mt-3 font-medium text-slate-600">
              
            </p>
          </div>
        </PageCard>
      </div>
    </main>
  );
}
