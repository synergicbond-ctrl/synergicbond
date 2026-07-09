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

export default function EquivalentConceptPart8() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
          Advanced Problem Solving & Final Review
        </h1>
      </header>
      <div className="mx-auto max-w-5xl space-y-8">
        

        <PageCard title="Equivalent Concept — Final Practice Questions">
          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <QuestionBox>
              Q. A metal oxide contains 40% oxygen, by weight. Calculate the
              equivalent weight of metal.
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> metal = n<sub>eq</sub> oxygen
            </FormulaBox>

            <WorkingLine>
              60 / E<sub>M</sub> = 40 / 8
            </WorkingLine>

            <FormulaBox>
              E<sub>M</sub> = 12
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <QuestionBox>
              Q. 4.2 gm of a metal carbonate gives 2.0 gm metal oxide on
              complete decomposition. Calculate the equivalent weight of metal.
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> metal carbonate = n<sub>eq</sub> metal oxide
            </FormulaBox>

            <WorkingLine>
              Equivalent weight of metal carbonate = E<sub>M</sub> + 30
            </WorkingLine>

            <WorkingLine>
              Equivalent weight of metal oxide = E<sub>M</sub> + 8
            </WorkingLine>

            <WorkingLine>
              4.2 / (E<sub>M</sub> + 30) = 2.0 / (E<sub>M</sub> + 8)
            </WorkingLine>

            <FormulaBox>
              E<sub>M</sub> = 12
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
            <QuestionBox>
              Q. When 2.70 gm MCl₂ · 6H₂O(s) is reacted with excess of H₂SO₄,
              1.80 gm MSO₄(s) is formed. Calculate equivalent weight of metal,
              M.
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> MCl₂ · 6H₂O = n<sub>eq</sub> MSO₄
            </FormulaBox>

            <WorkingLine>
              Equivalent weight of MCl₂ · 6H₂O = E<sub>M</sub> + 35.5 +{" "}
              (6 × 18) / (1 × 2)
            </WorkingLine>

            <WorkingLine>
              Equivalent weight of MSO₄ = E<sub>M</sub> + 48
            </WorkingLine>

            <WorkingLine>
              2.70 / {"{"}E<sub>M</sub> + 35.5 + (6 × 18) / (1 × 2){"}"} =
              1.80 / (E<sub>M</sub> + 48)
            </WorkingLine>

            <WorkingLine>
              2.70 / (E<sub>M</sub> + 89.5) = 1.80 / (E<sub>M</sub> + 48)
            </WorkingLine>

            <FormulaBox>
              E<sub>M</sub> = 35
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="Multi-Product Redox Equivalence Correction">
          <div className="space-y-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <ReactionBox>
              3MnO₄⁻ + 5FeC₂O₄ + 24H⁺ → 3Mn²⁺ + 5Fe³⁺ + 10CO₂ + 12H₂O
            </ReactionBox>

            <WorkingLine>
              MnO₄⁻: Mn is +7 and changes to Mn²⁺.
              <br />
              n-factor of MnO₄⁻ = 5.
            </WorkingLine>

            <WorkingLine>
              FeC₂O₄ contains Fe²⁺ and oxalate carbon.
              <br />
              Fe²⁺ → Fe³⁺ gives 1 electron.
              <br />
              C in C₂O₄²⁻: +3 → C in CO₂: +4 gives 2 electrons for two carbon atoms.
            </WorkingLine>

            <FormulaBox>
              FeC₂O₄ → Fe³⁺ + 2CO₂ + 3e⁻
            </FormulaBox>

            <FormulaBox>
              n-factor of FeC₂O₄ = 3
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="font-bold text-blue-800">
              If 10 moles MnO₄⁻ are taken:
            </h3>

            <CrossedOut>
              n<sub>eq</sub> MnO₄⁻ = n<sub>eq</sub> CO₂
              <br />
              10 × 5 = n<sub>CO₂</sub> × 1
              <br />
              n<sub>CO₂</sub> = 50
            </CrossedOut>

            <WorkingLine>
              Correct route shown:
              <br />
              n<sub>eq</sub> MnO₄⁻ = n<sub>eq</sub> FeC₂O₄
            </WorkingLine>

            <WorkingLine>
              10 × 5 = n × 3
            </WorkingLine>

            <FormulaBox>
              n<sub>FeC₂O₄</sub> = 50 / 3
            </FormulaBox>

            <WorkingLine>
              From one FeC₂O₄, 2CO₂ are formed.
            </WorkingLine>

            <FormulaBox>
              n<sub>CO₂</sub> = (50 / 3) × 2 = 100 / 3
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-orange-200 bg-orange-50 p-4">
            <h3 className="font-bold text-orange-800">
              Equivalent split method shown in source:
            </h3>

            <FormulaBox>
              n<sub>eq</sub> MnO₄⁻ = n<sub>eq</sub> Fe³⁺ + n<sub>eq</sub> CO₂
            </FormulaBox>

            <WorkingLine>
              10 × 5 = x × 1 + (2x) × 1
            </WorkingLine>

            <FormulaBox>
              x = 50 / 3
            </FormulaBox>

            <WorkingLine>
              Therefore, FeC₂O₄ moles = 50 / 3 and CO₂ moles = 2x = 100 / 3.
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-bold text-slate-900">
              Bottom rough-note relation shown:
            </h3>

            <WorkingLine>
              H₂SO₄
              <br />
              10 L H₂
              <br />
              4 L O₂
              <br />
              H₂S₂O₈
            </WorkingLine>

            <CrossedOut>
              n<sub>eq</sub> H₂ = n<sub>eq</sub> O₂ = n<sub>eq</sub> H₂S₂O₈
            </CrossedOut>

            <FormulaBox>
              n<sub>eq</sub> H₂ = n<sub>eq</sub> O₂ + n<sub>eq</sub> H₂S₂O₈
            </FormulaBox>

            <SourceNote>
              The bottom part of page 29 is written as a rough correction note.
              The visible final circled relation is preserved above.
            </SourceNote>
          </div>
        </PageCard>
      </div>
    </main>
  );
}
