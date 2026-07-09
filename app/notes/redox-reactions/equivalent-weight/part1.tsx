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

export default function EquivalentConceptPart1() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
          Foundations of Equivalent Mass & Valence Factors
        </h1>
      </header>
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="rounded-[2rem] bg-gradient-to-br from-red-50 via-white to-lime-50 p-8 text-center shadow-sm">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
            Chemistry Notes
          </p>
          <h1 className="text-4xl font-black text-red-500 md:text-6xl">
            Equivalent Concept
          </h1>
          <div className="mx-auto mt-6 max-w-sm rounded-full border-2 border-blue-500 bg-lime-100 px-6 py-4 text-xl font-bold text-blue-700">
            W<sub>1</sub> / E<sub>1</sub> = W<sub>2</sub> / E<sub>2</sub>
          </div>
        </header>

        <PageCard title="Cover Page">
          <div className="rounded-3xl border-4 border-lime-300 bg-white p-8 text-center">
            <h2 className="text-5xl font-black text-red-500">Equivalent</h2>
            <h2 className="mt-3 text-5xl font-black text-red-500">Concept</h2>
            <div className="mx-auto mt-8 w-fit rounded-full border-2 border-blue-600 bg-lime-100 px-8 py-4 text-lg font-bold text-blue-700">
              W<sub>1</sub> / E<sub>1</sub> = W<sub>2</sub> / E<sub>2</sub>
            </div>
          </div>
        </PageCard>

        <PageCard title="Equivalent Concept — Basic Rule">
          <p>
            The number of <b>g-equivalents</b> of each reactant reacted must be
            same and the same number of <b>g-equivalents</b> of each product is
            formed.
          </p>

          <FormulaBox>
            No. of g-equivalents, n<sub>eq</sub> = W / E = weight in gm / gm
            equivalent weight
          </FormulaBox>

          <FormulaBox>
            Equivalent weight, E = molecular weight / n-factor
          </FormulaBox>

          <p>
            <b>n-factor</b> of any substance depends on its nature in that
            reaction.
          </p>

          <div className="border-t border-pink-300 pt-5">
            <h3 className="mb-3 text-lg font-bold text-red-600 underline">
              Eq. wt. of an element:
            </h3>

            <p>
              It represents the number of grams of the element which combines
              with or displaces <b>1 gm hydrogen</b> or <b>8 gm oxygen</b> or{" "}
              <b>35.5 gm chlorine</b>.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <WorkingLine>
                H atomic mass = 1
                <br />
                H<sup>+</sup> + e<sup>-</sup> → H
                <br />1 mole → 1 gm
              </WorkingLine>

              <WorkingLine>
                Cl atomic mass = 35.5
                <br />
                Cl<sup>-</sup> → Cl + e<sup>-</sup>
                <br />
                35.5 gm → 1 mole
              </WorkingLine>

              <WorkingLine>
                O atomic mass = 16
                <br />
                O<sup>2-</sup> → O + 2e<sup>-</sup>
                <br />
                16 gm → 2 mole
                <br />8 gm → 1 mole
              </WorkingLine>
            </div>
          </div>
        </PageCard>

        <PageCard title="Equivalent Weight of an Element from Oxide">
          <p>
            Let an element <b>M</b> forms an oxide:
          </p>

          <FormulaBox>
            M<sub>2</sub>O<sub>v</sub>
          </FormulaBox>

          <WorkingLine>
            Molecular mass of M<sub>2</sub>O<sub>v</sub> = 2 × A + v × 16
          </WorkingLine>

          <WorkingLine>
            Therefore, 16v gm oxygen combines with 2A gm M.
          </WorkingLine>

          <WorkingLine>
            Therefore, 8 gm oxygen combines with{" "}
            <b>(2A / 16v) × 8 = A / v gm</b> of M.
          </WorkingLine>

          <FormulaBox>
            E = A / v ⟹ Equivalent weight = Atomic weight / Valency
          </FormulaBox>

          <h3 className="text-lg font-bold text-pink-600">Examples:</h3>

          <div className="grid gap-3 md:grid-cols-2">
            <WorkingLine>
              Na<sub>2</sub>O ⇒ E<sub>Na</sub> = 23 / 1 = <b>23</b>
            </WorkingLine>

            <WorkingLine>
              NH<sub>3</sub> ⇒ E<sub>N</sub> = 14 / 3 = <b>4.67</b>
            </WorkingLine>

            <WorkingLine>
              PCl<sub>5</sub> ⇒ E<sub>P</sub> = 31 / 5 = <b>6.20</b>
            </WorkingLine>

            <WorkingLine>
              N<sub>2</sub>O<sub>5</sub> ⇒ E<sub>N</sub> = 14 / 5 ={" "}
              <b>2.80</b>
            </WorkingLine>

            <WorkingLine>
              Fe<sub>3</sub>O<sub>4</sub> ⇒ E<sub>Fe</sub> = 56 / (8 / 3) ={" "}
              <b>21</b>
            </WorkingLine>

            <WorkingLine>
              S<sub>2</sub>Cl<sub>2</sub> ⇒ E<sub>S</sub> = 32 / 1 ={" "}
              <b>32</b>
            </WorkingLine>
          </div>
        </PageCard>

        <PageCard title="Numerical Questions on Equivalent Weight">
          <div className="space-y-5">
            <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4">
              <h3 className="font-bold text-pink-700">
                Q. A metal oxide contains 40% oxygen by wt. Calculate the
                equivalent weight of metal.
              </h3>

              <div className="mt-3 space-y-2">
                <WorkingLine>
                  Metal oxide: oxygen = 40%, metal = 60%
                </WorkingLine>
                <WorkingLine>
                  40 gm oxygen combines with 60 gm metal.
                </WorkingLine>
                <WorkingLine>
                  Therefore, 8 gm oxygen combines with (60 / 40) × 8 ={" "}
                  <b>12 gm</b> metal.
                </WorkingLine>
                <FormulaBox>
                  E<sub>metal</sub> = 12
                </FormulaBox>
              </div>
            </div>

            <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4">
              <h3 className="font-bold text-pink-700">
                Q. The equivalent weight of a metal is 20. Calculate the mass
                percent of hydrogen in its hydride.
              </h3>

              <div className="mt-3 space-y-2">
                <WorkingLine>
                  20 gm metal + 1 gm hydrogen = 21 gm metal hydride
                </WorkingLine>
                <FormulaBox>
                  % of hydrogen = 1 / 21 × 100%
                </FormulaBox>
              </div>
            </div>

            <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4">
              <h3 className="font-bold text-pink-700">
                Q. 5.6 L Cl<sub>2</sub> gas at 0°C and 1 atm is treated with
                excess of a metal, by which 31.75 gm metal chloride is formed.
                What is the equivalent weight of metal?
              </h3>

              <div className="mt-3 space-y-2">
                <WorkingLine>
                  m<sub>chlorine</sub> = 5.6 / 22.4 × 71 ={" "}
                  <b>17.75 gm</b>
                </WorkingLine>

                <WorkingLine>
                  m<sub>metal combined</sub> = 31.75 - 17.75 = <b>14 gm</b>
                </WorkingLine>

                <WorkingLine>
                  E<sub>metal</sub> = 14 / 17.75 × 35.5
                </WorkingLine>

                <FormulaBox>
                  E<sub>metal</sub> = 28
                </FormulaBox>
              </div>
            </div>
          </div>
        </PageCard>
      </div>
    </main>
  );
}
