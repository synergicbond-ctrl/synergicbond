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

export default function EquivalentConceptPart7() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
          Equivalent Mass in Double Salts & Parallel Titrations
        </h1>
      </header>
      <div className="mx-auto max-w-5xl space-y-8">
        

        <PageCard title="K₂Cr₂O₇ / KI / Na₂S₂O₃ — Iodometric Equivalent Problem">
          <QuestionBox>
            Q. 0.02 mole K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> is treated
            with excess of KI soln in acidic medium. How many gm Na
            <sub>2</sub>S<sub>2</sub>O<sub>3</sub> is needed to react completely
            with all the liberated I<sub>2</sub>?
          </QuestionBox>

          <ReactionBox>
            K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + KI excess → I
            <sub>2</sub> → Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> → I
            <sup>-</sup>
          </ReactionBox>

          <div className="grid gap-3 md:grid-cols-3">
            <WorkingLine>
              Cr in K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>:
              <br />
              +6 → +3
              <br />
              n<sub>f</sub> = <b>6</b>
            </WorkingLine>

            <WorkingLine>
              I<sup>-</sup> → I<sub>2</sub>
              <br />
              -1 → 0
              <br />
              n<sub>f</sub> = <b>2</b>
            </WorkingLine>

            <WorkingLine>
              I<sub>2</sub> → I<sup>-</sup>
              <br />0 → -1
              <br />
              n<sub>f</sub> = <b>2</b>
            </WorkingLine>
          </div>

          <FormulaBox>
            n<sub>eq</sub> K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> = n
            <sub>eq</sub> I<sub>2</sub> = n<sub>eq</sub> Na<sub>2</sub>S
            <sub>2</sub>O<sub>3</sub>
          </FormulaBox>

          <WorkingLine>
            0.02 × 6 = (W / 158) × 1
          </WorkingLine>

          <FormulaBox>W = 18.96 gm</FormulaBox>

          <div className="mt-6 border-t border-pink-300 pt-5">
            <QuestionBox>
              Q. 0.02 mole KIO<sub>3</sub> is reacted with excess of KI in
              acidic medium. How many gm Na<sub>2</sub>S<sub>2</sub>O
              <sub>3</sub> is needed to react completely with all the liberated I
              <sub>2</sub>?
            </QuestionBox>

            <ReactionBox>
              KIO<sub>3</sub> + KI excess → I<sub>2</sub> → Na<sub>2</sub>S
              <sub>2</sub>O<sub>3</sub> → I<sup>-</sup>
            </ReactionBox>

            <div className="grid gap-3 md:grid-cols-3">
              <WorkingLine>
                I in KIO<sub>3</sub>:
                <br />
                +5 → 0
                <br />
                n<sub>f</sub> = <b>5</b>
              </WorkingLine>

              <WorkingLine>
                I in KI:
                <br />
                -1 → 0
              </WorkingLine>

              <WorkingLine>
                I<sub>2</sub> → I<sup>-</sup>
                <br />
                n<sub>f</sub> = <b>2</b>
              </WorkingLine>
            </div>

            <CrossedOut>
              n<sub>eq</sub> KIO<sub>3</sub> = n<sub>eq</sub> I<sub>2</sub> =
              n<sub>eq</sub> Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>
              <br />
              or, 0.02 × 5 = (W / 158) × 1
              <br />
              W = 15.8 gm
            </CrossedOut>
          </div>
        </PageCard>

        <PageCard title="Correction Rule When Intermediate Has Different n-Factor">
          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <ReactionBox>A → B</ReactionBox>

            <WorkingLine>
              n-factor = x<sub>1</sub>
            </WorkingLine>

            <FormulaBox>
              n<sub>eq</sub>A = n<sub>eq</sub>B = n<sub>B</sub> × x
              <sub>1</sub>
            </FormulaBox>

            <ReactionBox>B → C</ReactionBox>

            <WorkingLine>
              n-factor = x<sub>2</sub>
            </WorkingLine>

            <FormulaBox>
              n<sub>eq</sub>B = n<sub>eq</sub>C = n<sub>B</sub> × x
              <sub>2</sub>
            </FormulaBox>

            <FormulaBox>
              n<sub>eq</sub>A = n<sub>eq</sub>B = n<sub>eq</sub>C
            </FormulaBox>

            <FormulaBox>
              n<sub>eq</sub>A / x<sub>1</sub> = n<sub>eq</sub>C / x
              <sub>2</sub>
            </FormulaBox>

            <WorkingLine>
              If x<sub>1</sub> = x<sub>2</sub>, then n<sub>eq</sub>A = n
              <sub>eq</sub>C.
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <h3 className="font-bold text-pink-800">
              Applying correction to KIO<sub>3</sub> / I<sub>2</sub> / Na
              <sub>2</sub>S<sub>2</sub>O<sub>3</sub>
            </h3>

            <FormulaBox>
              n<sub>eq</sub>KIO<sub>3</sub> / n<sub>f</sub> of I<sub>2</sub> in
              reaction with KIO<sub>3</sub> = n<sub>eq</sub>Na<sub>2</sub>S
              <sub>2</sub>O<sub>3</sub> / n<sub>f</sub> of I<sub>2</sub> in
              reaction with Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>
            </FormulaBox>

            <WorkingLine>
              or, (0.02 × 5) / (5 / 3) = ((W / 158) × 1) / 2
            </WorkingLine>

            <FormulaBox>W = 18.96 gm</FormulaBox>
          </div>
        </PageCard>

        <PageCard title="Reaction Verification and C₂H₆ / CO₂ / NaOH Problem">
          <div className="space-y-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="font-bold text-amber-900">
              Verification by balanced reactions:
            </h3>

            <ReactionBox>
              IO<sub>3</sub><sup>-</sup> + 5I<sup>-</sup> + 6H
              <sup>+</sup> → 3I<sub>2</sub> + 3H<sub>2</sub>O
            </ReactionBox>

            <WorkingLine>
              0.02 mole KIO<sub>3</sub> produces 0.06 mole I<sub>2</sub>.
            </WorkingLine>

            <ReactionBox>
              2S<sub>2</sub>O<sub>3</sub><sup>2-</sup> + I<sub>2</sub> → S
              <sub>4</sub>O<sub>6</sub><sup>2-</sup> + 2I<sup>-</sup>
            </ReactionBox>

            <WorkingLine>
              0.12 mole S<sub>2</sub>O<sub>3</sub><sup>2-</sup> reacts with
              0.06 mole I<sub>2</sub>.
            </WorkingLine>

            <WorkingLine>
              Mass of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> = 0.12 × 158
            </WorkingLine>

            <FormulaBox>Mass = 18.96 gm</FormulaBox>
          </div>

          <div className="mt-6 space-y-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
            <QuestionBox>
              Q. How many gm C<sub>2</sub>H<sub>6</sub> should be burnt
              completely to produce sufficient CO<sub>2</sub> needed for complete
              conversion of 12 gm NaOH into Na<sub>2</sub>CO<sub>3</sub>?
            </QuestionBox>

            <ReactionBox>
              C<sub>2</sub>H<sub>6</sub> + O<sub>2</sub> → CO<sub>2</sub> →
              NaOH → Na<sub>2</sub>CO<sub>3</sub>
            </ReactionBox>

            <div className="grid gap-3 md:grid-cols-2">
              <WorkingLine>
                C in C<sub>2</sub>H<sub>6</sub>:
                <br />
                -3 → +4
                <br />
                n<sub>f</sub> = <b>7</b> per carbon
              </WorkingLine>

              <WorkingLine>
                CO<sub>2</sub> + H<sub>2</sub>O → H<sub>2</sub>CO<sub>3</sub>{" "}
                → 2H<sup>+</sup> + CO<sub>3</sub><sup>2-</sup>
                <br />
                n<sub>f</sub> for CO<sub>2</sub> = <b>2</b>
              </WorkingLine>
            </div>

            <CrossedOut>
              n<sub>eq</sub>C<sub>2</sub>H<sub>6</sub> = n<sub>eq</sub>CO
              <sub>2</sub> = n<sub>eq</sub>NaOH
            </CrossedOut>

            <FormulaBox>
              n<sub>eq</sub>C<sub>2</sub>H<sub>6</sub> / (n<sub>f</sub> of CO
              <sub>2</sub>)<sub>1</sub> = n<sub>eq</sub>NaOH / (n<sub>f</sub>{" "}
              of CO<sub>2</sub>)<sub>2</sub>
            </FormulaBox>

            <WorkingLine>
              (1 / 7) × (W / 30 × 14) = (1 / 2) × (12 / 40 × 1)
            </WorkingLine>

            <FormulaBox>W = 2.25 gm</FormulaBox>
          </div>
        </PageCard>
      </div>
    </main>
  );
}
