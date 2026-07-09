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

export default function TitrationPart4() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
          Back Titration & Aliquot Dilution Numericals
        </h1>
      </header>
      <div className="mx-auto max-w-5xl space-y-8">
        

        <PageCard title="Mixed Oxalate Compound — KMnO₄ and NaOH Titration">
          <div className="space-y-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
            <h3 className="font-bold text-purple-900">
              Continuation of previous question:
            </h3>

            <FormulaBox>
              H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> · 2KHC<sub>2</sub>O
              <sub>4</sub> · 3H<sub>2</sub>O
            </FormulaBox>

            <div className="grid gap-4 md:grid-cols-2">
              <WorkingLine>
                With KMnO<sub>4</sub>:
                <br />
                C<sub>2</sub>O<sub>4</sub><sup>2-</sup> → CO<sub>2</sub>
                <br />
                Carbon changes to +4.
                <br />
                n<sub>f</sub> = 6
              </WorkingLine>

              <WorkingLine>
                With NaOH:
                <br />
                acidic H neutralised
                <br />
                n<sub>f</sub> = 4
              </WorkingLine>
            </div>

            <CrossedRelation>
              n<sub>eq</sub> KMnO<sub>4</sub> = n<sub>eq</sub> compound = n
              <sub>eq</sub> NaOH
            </CrossedRelation>

            <FormulaBox>
              n<sub>eq</sub> KMnO<sub>4</sub> = n<sub>eq</sub> compound
            </FormulaBox>

            <WorkingLine>
              (40 × 0.2 / 1000) × 5 = n × 6
            </WorkingLine>

            <FormulaBox>
              n = 40 / 6000
            </FormulaBox>

            <FormulaBox>
              n<sub>eq</sub> NaOH = n<sub>eq</sub> compound
            </FormulaBox>

            <WorkingLine>
              (V × 0.4 / 1000) × 1 = (40 / 6000) × 4
            </WorkingLine>

            <FormulaBox>
              V<sub>NaOH</sub> = 200 / 3 ml
            </FormulaBox>
          </div>

          <div className="mt-6 space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <QuestionBox>
              Q. 40 ml of 1.5 M H<sub>2</sub>SO<sub>4</sub> sol<sup>n</sup> is
              diluted to 200 ml. 25 ml of diluted sol<sup>n</sup> exactly require
              15 ml of Na<sub>2</sub>CO<sub>3</sub> sol<sup>n</sup> for
              titration. Cal. the molarity of Na<sub>2</sub>CO<sub>3</sub> sol
              <sup>n</sup>.
            </QuestionBox>

            <div className="grid gap-4 md:grid-cols-3">
              <WorkingLine>
                40 ml
                <br />
                1.5 M H<sub>2</sub>SO<sub>4</sub>
              </WorkingLine>

              <WorkingLine>
                Diluted to:
                <br />
                200 ml
              </WorkingLine>

              <WorkingLine>
                25 ml diluted sol<sup>n</sup>
                <br />
                requires 15 ml Na<sub>2</sub>CO<sub>3</sub>
                <br />
                M = ?
              </WorkingLine>
            </div>

            <NoteBox>
              The solution of this dilution problem continues on page 11.
            </NoteBox>
          </div>
        </PageCard>

        <PageCard title="Dilution Problem and Original KMnO₄ Molarity Question">
          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="font-bold text-blue-900">
              Solution of H<sub>2</sub>SO<sub>4</sub> dilution problem
            </h3>

            <FormulaBox>
              Dilution: V<sub>1</sub>M<sub>1</sub> = V<sub>2</sub>M
              <sub>2</sub>
            </FormulaBox>

            <WorkingLine>
              40 × 1.5 = 200 × M<sub>2</sub>
            </WorkingLine>

            <FormulaBox>
              M<sub>2</sub> = 0.3 M
            </FormulaBox>

            <FormulaBox>
              n<sub>eq</sub> H<sub>2</sub>SO<sub>4</sub> = n<sub>eq</sub> Na
              <sub>2</sub>CO<sub>3</sub>
            </FormulaBox>

            <WorkingLine>
              (25 × 0.3 / 1000) × 2 = (15 × M / 1000) × 2
            </WorkingLine>

            <FormulaBox>
              M<sub>Na₂CO₃</sub> = 0.5 M
            </FormulaBox>

            <ReactionBox>
              H<sub>2</sub>SO<sub>4</sub> + Na<sub>2</sub>CO<sub>3</sub> → Na
              <sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>CO<sub>3</sub>
            </ReactionBox>

            <ReactionBox>
              H<sub>2</sub>CO<sub>3</sub> → H<sub>2</sub>O + CO<sub>2</sub>
            </ReactionBox>

            <div className="grid gap-3 md:grid-cols-2">
              <WorkingLine>
                H<sub>2</sub>SO<sub>4</sub>
                <br />
                n<sub>f</sub> = 2
              </WorkingLine>

              <WorkingLine>
                Na<sub>2</sub>CO<sub>3</sub>
                <br />
                n<sub>f</sub> = 2
              </WorkingLine>
            </div>

            <h4 className="font-bold text-slate-900">
              Alternate total-equivalent method shown:
            </h4>

            <FormulaBox>
              n<sub>eq</sub> H<sub>2</sub>SO<sub>4</sub> taken = n
              <sub>eq</sub> total Na<sub>2</sub>CO<sub>3</sub> needed
            </FormulaBox>

            <WorkingLine>
              (40 × 1.5 / 1000) × 2 = [((15 / 25) × 200 × M) / 1000] × 2
            </WorkingLine>

            <FormulaBox>
              M = 0.5
            </FormulaBox>
          </div>

          <div className="mt-6 space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <QuestionBox>
              Q. 20 ml of KMnO<sub>4</sub> sol<sup>n</sup> is diluted to 500 ml.
              30 ml of diluted sol<sup>n</sup> exactly requires 15 ml of M / 50 —
              H<sub>2</sub>O<sub>2</sub> sol<sup>n</sup> for titration in
              acidic medium. Cal. the molarity of original KMnO<sub>4</sub> sol
              <sup>n</sup>.
            </QuestionBox>

            <NoteBox>
              This question starts at the bottom of page 11 and the solution
              continues on page 12.
            </NoteBox>
          </div>
        </PageCard>

        <PageCard title="KMnO₄–H₂O₂ Dilution, Mixed Acid-Base and Metal Equivalent Weight">
          <div className="space-y-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
            <h3 className="font-bold text-purple-900">
              Solution of original KMnO<sub>4</sub> molarity question
            </h3>

            <FormulaBox>
              n<sub>eq</sub> KMnO<sub>4</sub> taken = n<sub>eq</sub> total H
              <sub>2</sub>O<sub>2</sub> needed
            </FormulaBox>

            <WorkingLine>
              H<sub>2</sub>O<sub>2</sub> → O<sub>2</sub>
            </WorkingLine>

            <WorkingLine>
              (20 × M / 1000) × 5 = [((15 / 30) × 500) × (1 / 50) / 1000] × 2
            </WorkingLine>

            <FormulaBox>
              M<sub>KMnO₄</sub> = 0.1 M
            </FormulaBox>
          </div>

          <div className="mt-6 space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <QuestionBox>
              Q. 20 ml of 0.8 M H<sub>2</sub>SO<sub>4</sub> sol<sup>n</sup> is
              mixed with 40 ml of 0.4 M NaOH sol<sup>n</sup>. What volume of 0.6
              M KOH sol<sup>n</sup> is needed for complete neutralisation of the
              resulting mixture?
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> H<sub>2</sub>SO<sub>4</sub> = n<sub>eq</sub> NaOH
              + n<sub>eq</sub> KOH
            </FormulaBox>

            <WorkingLine>
              (20 × 0.8 / 1000) × 2 = (40 × 0.4 / 1000) × 1 + (V × 0.6 / 1000)
              × 1
            </WorkingLine>

            <FormulaBox>
              V<sub>KOH</sub> = 26.67 ml
            </FormulaBox>
          </div>

          <div className="mt-6 space-y-4 rounded-2xl border border-red-200 bg-red-50 p-4">
            <QuestionBox>
              Q. 0.4 gm of a metal reacts completely with 50 ml of 0.5 M HCl sol
              <sup>n</sup>. If the excess acid requires 20 ml of 0.3 M NaOH sol
              <sup>n</sup> for C.N., cal the eq. wt. of metal.
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> HCl = n<sub>eq</sub> metal + n<sub>eq</sub> NaOH
            </FormulaBox>

            <WorkingLine>
              (50 × 0.5 / 1000) × 1 = 0.4 / E<sub>M</sub> + (20 × 0.3 / 1000)
            </WorkingLine>

            <WorkingLine>
              0.025 = 0.4 / E<sub>M</sub> + 0.006
            </WorkingLine>

            <WorkingLine>
              0.019 = 0.4 / E<sub>M</sub>
            </WorkingLine>

            <FormulaBox>
              E<sub>M</sub> = 400 / 19
            </FormulaBox>
          </div>
        </PageCard>
      </div>
    </main>
  );
}
