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

export default function EquivalentConceptPart3() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
          Redox n-Factors Across Acidic, Basic, & Neutral Media
        </h1>
      </header>
      <div className="mx-auto max-w-5xl space-y-8">
        

        <PageCard title="Equivalent Weight of Acidic Oxides and Base">
          <div className="space-y-4">
            <ReactionCard>
              E<sub>SO₃</sub> = 80 / 2 = <b>40</b>
            </ReactionCard>

            <FormulaBox>
              SO₃ + H₂O → H₂SO₄ → 2H⁺ + SO₄²⁻
            </FormulaBox>

            <ReactionCard>
              E<sub>N₂O₅</sub> = 108 / 2 = <b>54</b>
            </ReactionCard>

            <FormulaBox>
              N₂O₅ + H₂O → 2HNO₃ → 2H⁺ + 2NO₃⁻
            </FormulaBox>

            <ReactionCard>
              E<sub>P₄O₁₀</sub> = 284 / 12
            </ReactionCard>

            <FormulaBox>
              P₄O₁₀ + 6H₂O → 4H₃PO₄ → 12H⁺ + 4PO₄³⁻
            </FormulaBox>
          </div>

          <div className="mt-6 border-t border-amber-300 pt-5">
            <h3 className="text-lg font-bold text-red-600 underline">
              Eq. wt. of base:
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <WorkingLine>
                NaOH → Na⁺ + OH⁻
                <br />
                40 gm → 1 mole OH⁻
              </WorkingLine>

              <WorkingLine>
                NH₃ + H₂O → NH₄⁺ + OH⁻
                <br />
                NH₃ accepts H⁺ and furnishes OH⁻ in water.
              </WorkingLine>
            </div>

            <p>
              It represents the number of grams of the base which furnish 1 mole
              of OH⁻ ion in water or combines with 1 mole of H⁺ ion.
            </p>
          </div>
        </PageCard>

        <PageCard title="Equivalent Weight of Base — Formula and Examples">
          <FormulaBox>
            E<sub>base</sub> = Mol. wt. / Acidity
          </FormulaBox>

          <p>
            <b>Acidity</b> of a base represents moles of OH⁻ ions furnished by
            each mole of base in water or mole of H⁺ ions combined with each mole
            of base.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            <WorkingLine>
              E<sub>NaOH</sub> = 40 / 1 = <b>40</b>
              <br />= E<sub>Na⁺</sub> + 17
              <br />
              E<sub>OH⁻</sub> = 17
            </WorkingLine>

            <WorkingLine>
              E<sub>Ca(OH)₂</sub> = 74 / 2 = <b>37</b>
              <br />= E<sub>Ca²⁺</sub> + 17
            </WorkingLine>

            <WorkingLine>
              E<sub>Al(OH)₃</sub> = 78 / 3 = <b>26</b>
              <br />= E<sub>Al³⁺</sub> + 17
            </WorkingLine>

            <WorkingLine>
              E<sub>Na₂O</sub> = 62 / 2 = <b>31</b>
              <br />= E<sub>Na⁺</sub> + 8
            </WorkingLine>

            <WorkingLine>
              E<sub>Al₂O₃</sub> = 102 / 6 = <b>17</b>
              <br />= E<sub>Al³⁺</sub> + 8
            </WorkingLine>
          </div>

          <div className="space-y-3 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <FormulaBox>
              Na₂O + H₂O → 2NaOH → 2Na⁺ + 2OH⁻
            </FormulaBox>

            <FormulaBox>
              Na₂O + 2HCl → 2NaCl + H₂O
            </FormulaBox>

            <WorkingLine>
              E<sub>O²⁻</sub> = 16 / 2 = <b>8</b>
            </WorkingLine>

            <FormulaBox>
              Al₂O₃ + 3H₂O → 2Al(OH)₃ → 2Al³⁺ + 6OH⁻
            </FormulaBox>

            <FormulaBox>
              Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="Special Cases of Bases and Acids">
          <div className="grid gap-3 md:grid-cols-2">
            <WorkingLine>
              E<sub>NH₃</sub> = 17 / 1 = <b>17</b>
            </WorkingLine>

            <WorkingLine>
              Structure of NH₃:
              <br />
              H—N—H
              <br />
              &nbsp;&nbsp;|
              <br />
              &nbsp;&nbsp;H
              <br />
              Lone pair on N is shown.
            </WorkingLine>

            <WorkingLine>
              E<sub>N₂H₄</sub> = 32 / 2 = <b>16</b>
            </WorkingLine>

            <WorkingLine>
              Structure of N₂H₄:
              <br />
              H—N—N—H
              <br />
              &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|
              <br />
              &nbsp;&nbsp;H&nbsp;&nbsp;H
              <br />
              Lone pair on each N is shown.
            </WorkingLine>

            <WorkingLine>
              E<sub>N₂H₄</sub> = 32 / 1 = <b>32</b>
            </WorkingLine>

            <WorkingLine>
              N₂H₄ → N₂H₅⁺
            </WorkingLine>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <WorkingLine>
              E<sub>Al(OH)₃</sub> = 78 / 2
            </WorkingLine>

            <FormulaBox>
              Al(OH)₃ → Al(OH)²⁺
            </FormulaBox>
          </div>

          <div className="border-t border-pink-300 pt-5">
            <div className="grid gap-3 md:grid-cols-2">
              <WorkingLine>
                E<sub>H₂SO₄</sub> = 98 / 1
              </WorkingLine>

              <FormulaBox>
                H₂SO₄ → HSO₄⁻
              </FormulaBox>

              <WorkingLine>
                E<sub>H₃PO₄</sub> = 98 / 2
              </WorkingLine>

              <FormulaBox>
                H₃PO₄ → HPO₄²⁻
              </FormulaBox>
            </div>
          </div>
        </PageCard>

        <PageCard title="Equivalent Weight of Salt">
          <h3 className="text-lg font-bold text-red-600 underline">
            Eq. wt. of salt:
          </h3>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <WorkingLine>
              CaCl₂
              <br />
              111 gm
              <br />
              2 mole e⁻ transfer
            </WorkingLine>

            <WorkingLine>
              Therefore, 111 / 2 gm corresponds to 1 mole e⁻ transfer.
            </WorkingLine>

            <div className="rounded-xl border border-slate-300 bg-white p-3 text-center font-bold">
              Ca₃(PO₄)₂ → 6e⁻
            </div>
          </div>

          <p>
            It represents the number of grams of the salt formed by the transfer
            of 1 mole of electrons, considering ionic nature of salt.
          </p>

          <FormulaBox>
            E<sub>salt</sub> = Mol. wt. / no. of e⁻ transferred in salt
            formation
          </FormulaBox>

          <FormulaBox>
            E<sub>salt</sub> = Mol. wt. / no. of metal atoms × its valency
          </FormulaBox>

          <div className="grid gap-3 md:grid-cols-2">
            <WorkingLine>
              E<sub>NaCl</sub> = 58.5 / 1 × 1 = <b>58.5</b>
              <br />= E<sub>Na⁺</sub> + E<sub>Cl⁻</sub>
            </WorkingLine>

            <WorkingLine>
              E<sub>Na₂CO₃</sub> = 106 / 2 × 1 = <b>53</b>
              <br />= E<sub>Na⁺</sub> + E<sub>CO₃²⁻</sub>
            </WorkingLine>

            <WorkingLine>
              E<sub>Al₂(SO₄)₃</sub> = 342 / 2 × 3 = <b>57</b>
              <br />
              342 = 2 × 27 + 3 × 96
            </WorkingLine>

            <WorkingLine>
              E<sub>Al₂(SO₄)₃</sub> = 27 / 3 + 96 / 2
              <br />= E<sub>Al³⁺</sub> + E<sub>SO₄²⁻</sub>
            </WorkingLine>
          </div>
        </PageCard>
      </div>
    </main>
  );
}
