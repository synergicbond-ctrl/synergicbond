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

export default function TitrationPart3() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
          Iodimetry vs Iodometry Principles & Calculations
        </h1>
      </header>
      <div className="mx-auto max-w-5xl space-y-8">
        

        <PageCard title="More Types of Titration and Back Titration">
          <div className="space-y-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
            <h3 className="text-xl font-black text-purple-800">
              Continued types of titration:
            </h3>

            <div className="grid gap-3 md:grid-cols-3">
              <WorkingLine>
                4. Radio-titration:
                <br />
                Radioactivity
              </WorkingLine>

              <WorkingLine>
                5. Conductometric titration:
                <br />
                Conductance measurement
              </WorkingLine>

              <WorkingLine>
                6. Potentiometric titration:
                <br />
                Cell potential measurement
                <br />
                etc.
                <br />
                Electrochemistry
              </WorkingLine>
            </div>
          </div>

          <div className="border-t border-pink-300 pt-5">
            <h3 className="text-2xl font-black text-pink-700 underline">
              Back Titration:
            </h3>

            <p>
              Sometimes complete rxn does not occur even after using the sol
              <sup>n</sup> from burette completely.
            </p>

            <p>
              In this case, the mixture is filled in the burette and standard sol
              <sup>n</sup> in conical flask to continue the titration.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <QuestionBox>
              Q. What volume of 0.4 N KMnO<sub>4</sub> sol<sup>n</sup> is needed
              for titration with 20 ml of 0.25 N HCl sol<sup>n</sup> in presence
              of H<sub>2</sub>SO<sub>4</sub>?
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> KMnO<sub>4</sub> = n<sub>eq</sub> HCl
            </FormulaBox>

            <WorkingLine>
              V × 0.4 / 1000 = 20 × 0.25 / 1000
            </WorkingLine>

            <FormulaBox>
              V = 12.5 ml
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="Molarity Questions — NaOH, K₂Cr₂O₇, SO₂/HClO₃">
          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <QuestionBox>
              Q. 30 ml NaOH sol<sup>n</sup> is needed for complete
              neutralisation of 20 ml 0.2 M H<sub>3</sub>PO<sub>4</sub> sol
              <sup>n</sup>. Cal. the molarity of NaOH sol<sup>n</sup>.
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> NaOH = n<sub>eq</sub> H<sub>3</sub>PO
              <sub>4</sub>
            </FormulaBox>

            <WorkingLine>
              (30 × M / 1000) × 1 = (20 × 0.2 / 1000) × 3
            </WorkingLine>

            <FormulaBox>
              M<sub>NaOH</sub> = 0.4 M
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <QuestionBox>
              Q. 25 ml K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> sol
              <sup>n</sup> is needed for complete oxidation of 50 ml of 0.1 M KI
              sol<sup>n</sup> in acidic medium. Cal. the molarity of K
              <sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> sol<sup>n</sup>.
            </QuestionBox>

            <WorkingLine>
              Cr in K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>:
              <br />
              +6 → +3
              <br />
              n-factor = 6
            </WorkingLine>

            <WorkingLine>
              I<sup>-</sup> → I<sub>2</sub>
              <br />
              n-factor = 1 per iodide ion
            </WorkingLine>

            <FormulaBox>
              n<sub>eq</sub> K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> = n
              <sub>eq</sub> KI
            </FormulaBox>

            <WorkingLine>
              (25 × M / 1000) × 6 = (50 × 0.1 / 1000) × 1
            </WorkingLine>

            <FormulaBox>
              M<sub>K₂Cr₂O₇</sub> = 1 / 30 M
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-orange-200 bg-orange-50 p-4">
            <QuestionBox>
              Q. What volume of SO<sub>2</sub> gas is needed at 0°C and 1 atm
              for complete reduction of 40 ml of decimolar HClO<sub>3</sub> sol
              <sup>n</sup> into HCl?
            </QuestionBox>

            <NoteBox>
              This question starts on page 8 and its calculation continues on
              page 9.
            </NoteBox>
          </div>
        </PageCard>

        <PageCard title="SO₂/HClO₃ Solution, I₂–Hypo Problem and Next Question Start">
          <div className="space-y-4 rounded-2xl border border-orange-200 bg-orange-50 p-4">
            <h3 className="text-lg font-black text-orange-800">
              Continuation of SO<sub>2</sub> / HClO<sub>3</sub> question
            </h3>

            <FormulaBox>
              n<sub>eq</sub> SO<sub>2</sub> = n<sub>eq</sub> HClO
              <sub>3</sub>
            </FormulaBox>

            <WorkingLine>
              SO<sub>2</sub>: S is +4 → SO<sub>4</sub>
              <sup>2-</sup>: S is +6
              <br />
              n-factor of SO<sub>2</sub> = 2
            </WorkingLine>

            <WorkingLine>
              HClO<sub>3</sub>: Cl is +5 → HCl: Cl is -1
              <br />
              n-factor of HClO<sub>3</sub> = 6
            </WorkingLine>

            <WorkingLine>
              (V L / 22.4 L) × 2 = ((40 × 1 / 10) / 1000) × 6
            </WorkingLine>

            <FormulaBox>
              V = 0.2688 L = 268.8 ml
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <QuestionBox>
              Q. 5 gm of x% pure I<sub>2</sub> sol<sup>n</sup> exactly requires
              x ml of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> sol
              <sup>n</sup> for C.R. Cal. the conc. of Na<sub>2</sub>S
              <sub>2</sub>O<sub>3</sub> sol<sup>n</sup> in gm/litre.{" "}
              <b>(I = 127)</b>
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> I<sub>2</sub> = n<sub>eq</sub> Na<sub>2</sub>S
              <sub>2</sub>O<sub>3</sub>
            </FormulaBox>

            <WorkingLine>
              ((5 × x / 100) / 254) × 2 = ((x × M) / 1000) × 1
            </WorkingLine>

            <ReactionBox>
              I<sub>2</sub><sup>0</sup> + S<sub>2</sub>O<sub>3</sub>
              <sup>2-</sup> → I<sup>-</sup> + S<sub>4</sub>O<sub>6</sub>
              <sup>2-</sup>
            </ReactionBox>

            <FormulaBox>
              M<sub>Na₂S₂O₃</sub> = 100 / 254 M
            </FormulaBox>

            <FormulaBox>
              conc. = (100 / 254) × 158 g/L = 62.20 g/L
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
            <QuestionBox>
              Q. 40 ml 0.2 M KMnO<sub>4</sub> sol<sup>n</sup> is needed for
              complete rxn with certain mass of H<sub>2</sub>C<sub>2</sub>O
              <sub>4</sub> · 2KHC<sub>2</sub>O<sub>4</sub> · 3H<sub>2</sub>O.
              Cal. the volume of 0.4 M NaOH sol<sup>n</sup> needed for complete
              rxn with the same mass of H<sub>2</sub>C<sub>2</sub>O
              <sub>4</sub> · 2KHC<sub>2</sub>O<sub>4</sub> · 3H<sub>2</sub>O.
            </QuestionBox>

            <NoteBox>
              This question begins at the bottom of page 9 and its detailed
              working continues on page 10.
            </NoteBox>
          </div>
        </PageCard>
      </div>
    </main>
  );
}
