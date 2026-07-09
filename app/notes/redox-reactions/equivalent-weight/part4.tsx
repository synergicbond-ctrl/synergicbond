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

export default function EquivalentConceptPart4() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
          Disproportionation Reactions & Special Redox Linkages
        </h1>
      </header>
      <div className="mx-auto max-w-5xl space-y-8">
        

        <PageCard title="Equivalent Weight of Hydrated Salts">
          <WorkingLine>
            E<sub>Ca₃(PO₄)₂</sub> = E<sub>Ca²⁺</sub> + E<sub>PO₄³⁻</sub>
            <br />= 20 + 31.67
            <br />= <b>51.67</b>
          </WorkingLine>

          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="font-bold text-blue-800">
              For Na₂CO₃ · 10H₂O
            </h3>

            <FormulaBox>
              E<sub>Na₂CO₃ · 10H₂O</sub> = 286 / (2 × 1) = <b>143</b>
            </FormulaBox>

            <WorkingLine>
              286 = 2 × 23 + 1 × 60 + 10 × 18
            </WorkingLine>

            <FormulaBox>
              E<sub>Na₂CO₃ · 10H₂O</sub> = E<sub>Na⁺</sub> + E<sub>CO₃²⁻</sub> + water equivalent
            </FormulaBox>

            <WorkingLine>
              = contribution of water in equivalent weight
            </WorkingLine>

            <WorkingLine>
              = 23 / 1 + 60 / 2 + (10 × 18) / (2 × 1)
            </WorkingLine>

            <WorkingLine>
              = 23 + 30 + 90 = <b>143</b>
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <h3 className="font-bold text-pink-800">
              For FeSO₄ · 7H₂O
            </h3>

            <FormulaBox>
              E<sub>FeSO₄ · 7H₂O</sub> = E<sub>Fe²⁺</sub> + E<sub>SO₄²⁻</sub> + water equivalent
            </FormulaBox>

            <WorkingLine>
              = 28 + 48 + (7 × 18) / (1 × 2)
            </WorkingLine>

            <WorkingLine>
              = 28 + 48 + 63 = <b>139</b>
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
            <h3 className="font-bold text-purple-800">
              For Al₂(SO₄)₃ · 12H₂O
            </h3>

            <FormulaBox>
              E<sub>Al₂(SO₄)₃ · 12H₂O</sub> = E<sub>Al³⁺</sub> + E<sub>SO₄²⁻</sub> + water equivalent
            </FormulaBox>

            <WorkingLine>
              = 9 + 48 + (12 × 18) / (2 × 3)
            </WorkingLine>

            <WorkingLine>
              = 9 + 48 + 36 = <b>93</b>
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="font-bold text-amber-800">
              For FeCl₃ · 6H₂O
            </h3>

            <FormulaBox>
              E<sub>FeCl₃ · 6H₂O</sub> = E<sub>Fe³⁺</sub> + E<sub>Cl⁻</sub> + water equivalent
            </FormulaBox>

            <WorkingLine>
              = 56 / 3 + 35.5 / 1 + (6 × 18) / 3
            </WorkingLine>

            <WorkingLine>
              = 18.67 + 35.5 + 36
            </WorkingLine>

            <WorkingLine>
              = <b>90.17</b>
            </WorkingLine>
          </div>
        </PageCard>

        <PageCard title="Complex Salt and Equivalent Weight of O.A. / R.A.">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-bold text-slate-900">
              Complex salt example:
            </h3>

            <FormulaBox>
              E<sub>K₄[Fe(CN)₆]</sub> = M / 4
            </FormulaBox>

            <WorkingLine>
              K₄[Fe(CN)₆] contains:
              <br />
              4K⁺ and [Fe(CN)₆]⁴⁻
            </WorkingLine>

            <FormulaBox>
              E<sub>K₄[Fe(CN)₆]</sub> = M / 1
            </FormulaBox>

            <WorkingLine>
              K₄[Fe(CN)₆] → NaK₃[Fe(CN)₆]
            </WorkingLine>
          </div>

          <div className="border-t border-pink-300 pt-5">
            <h3 className="text-lg font-bold text-red-600 underline">
              Eq. wt. of O.A. and R.A.:
            </h3>

            <p>
              It represents the number of grams of the O.A. or R.A. involved in
              the gain or loss of 1 mole of electron, respectively.
            </p>

            <PinkBox>
              I₂ + 6H₂O → 2IO₃⁻ + 12H⁺ + 10e⁻
            </PinkBox>

            <div className="grid gap-4 md:grid-cols-2">
              <WorkingLine>
                I₂:
                <br />
                M gm gives 10 mole e⁻
                <br />
                Therefore, M / 10 gm gives 1 mole e⁻
              </WorkingLine>

              <WorkingLine>
                2IO₃⁻:
                <br />
                2M gm corresponds to 10 mole e⁻
                <br />
                Therefore, 2M / 10 = M / 5
              </WorkingLine>
            </div>

            <FormulaBox>
              E<sub>O.A. / R.A.</sub> = Mol. wt. / no. of e⁻ gained or lost
            </FormulaBox>

            <FormulaBox>
              E<sub>O.A. / R.A.</sub> = Mol. wt. / change in O.N.
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="n-Factor in Redox Changes">
          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="font-bold text-blue-800">
              FeO → Fe₂O₃
            </h3>

            <WorkingLine>
              Fe in FeO: +2
              <br />
              Fe in Fe₂O₃: +3
            </WorkingLine>

            <WorkingLine>
              E₁ = M₁ / 1
            </WorkingLine>

            <WorkingLine>
              E₂ = M₂ / 2
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-red-200 bg-red-50 p-4">
            <h3 className="font-bold text-red-800">
              Fe₃O₄ → Fe₂O₃
            </h3>

            <WorkingLine>
              Fe in Fe₃O₄: +8 / 3
              <br />
              Fe in Fe₂O₃: +3
            </WorkingLine>

            <WorkingLine>
              Change in O.N. = 3 - 8 / 3 = 1 / 3
            </WorkingLine>

            <WorkingLine>
              For Fe₃O₄:
              <br />
              n<sub>f</sub> = (1 / 3) × 3 = <b>1</b>
              <br />
              E₁ = M₁ / 1
            </WorkingLine>

            <WorkingLine>
              For Fe₂O₃:
              <br />
              n<sub>f</sub> = (1 / 3) × 2 = <b>2 / 3</b>
              <br />
              E₂ = M₂ / (2 / 3)
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-green-200 bg-green-50 p-4">
            <h3 className="font-bold text-green-800">
              Fe₂O₃ → Fe₀.₉₅O
            </h3>

            <WorkingLine>
              Fe in Fe₂O₃: +3
              <br />
              Fe in Fe₀.₉₅O: +2 / 0.95
            </WorkingLine>

            <WorkingLine>
              Change in O.N. = 3 - 2 / 0.95 = 0.85 / 0.95
            </WorkingLine>

            <WorkingLine>
              For Fe₂O₃:
              <br />
              n<sub>f</sub> = 2 × 0.85 / 0.95 = <b>1.70 / 0.95</b>
            </WorkingLine>

            <WorkingLine>
              For Fe₀.₉₅O:
              <br />
              n<sub>f</sub> = 0.95 × 0.85 / 0.95 = <b>0.85</b>
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-orange-200 bg-orange-50 p-4">
            <h3 className="font-bold text-orange-800">
              MnO₂ → Mn₃O₄
            </h3>

            <WorkingLine>
              Mn in MnO₂: +4
              <br />
              Mn in Mn₃O₄: +8 / 3
            </WorkingLine>

            <WorkingLine>
              Change in O.N. = 4 - 8 / 3 = 4 / 3
            </WorkingLine>

            <WorkingLine>
              For MnO₂:
              <br />
              n<sub>f</sub> = 1 × 4 / 3 = <b>4 / 3</b>
            </WorkingLine>

            <WorkingLine>
              For Mn₃O₄:
              <br />
              n<sub>f</sub> = 3 × 4 / 3 = <b>4</b>
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <h3 className="font-bold text-pink-800">
              C₃H₈ → CO₂
            </h3>

            <WorkingLine>
              C in C₃H₈: -8 / 3
              <br />
              C in CO₂: +4
            </WorkingLine>

            <WorkingLine>
              Change in O.N. = 4 - (-8 / 3) = 20 / 3
            </WorkingLine>

            <WorkingLine>
              For C₃H₈:
              <br />
              n<sub>f</sub> = 3 × 20 / 3 = <b>20</b>
            </WorkingLine>

            <WorkingLine>
              For CO₂:
              <br />
              n<sub>f</sub> = <b>20 / 3</b>
            </WorkingLine>
          </div>
        </PageCard>

        <PageCard title="Redox Equivalent Weight — More Cases">
          <div className="space-y-4 rounded-2xl border border-orange-200 bg-orange-50 p-4">
            <h3 className="font-bold text-orange-800">
              S₂O₃²⁻ → S₄O₆²⁻
            </h3>

            <WorkingLine>
              S in S₂O₃²⁻: +2
              <br />
              S in S₄O₆²⁻: +2.5
            </WorkingLine>

            <WorkingLine>
              Change in O.N. = 0.5
            </WorkingLine>

            <WorkingLine>
              For S₂O₃²⁻:
              <br />
              n<sub>f</sub> = 2 × 0.5 = <b>1</b>
            </WorkingLine>

            <WorkingLine>
              For S₄O₆²⁻:
              <br />
              n<sub>f</sub> = 4 × 0.5 = <b>2</b>
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="font-bold text-blue-800">
              KMnO₄ as O.A.
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
              <WorkingLine>
                In acidic medium:
                <br />
                MnO₄⁻ → Mn²⁺
                <br />
                E<sub>KMnO₄</sub> = <b>M / 5</b>
              </WorkingLine>

              <WorkingLine>
                In neutral or basic medium:
                <br />
                MnO₄⁻ → MnO₂
                <br />
                E<sub>KMnO₄</sub> = <b>M / 3</b>
              </WorkingLine>

              <WorkingLine>
                In strong base:
                <br />
                MnO₄⁻ → MnO₄²⁻
                <br />
                E<sub>KMnO₄</sub> = <b>M / 1</b>
              </WorkingLine>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
            <h3 className="font-bold text-purple-800">
              K₂Cr₂O₇ as O.A.
            </h3>

            <WorkingLine>
              Cr in K₂Cr₂O₇: +6
              <br />
              Cr⁶⁺ → Cr³⁺
            </WorkingLine>

            <FormulaBox>
              E<sub>K₂Cr₂O₇</sub> = M / (2 × 3) = M / 6
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-bold text-slate-900">
              H₂O₂
            </h3>

            <WorkingLine>
              H₂O₂ as O.A.:
              <br />
              O in H₂O₂: -1 → O in H₂O: -2
            </WorkingLine>

            <FormulaBox>
              E<sub>H₂O₂</sub> as O.A. = M / 2
            </FormulaBox>

            <WorkingLine>
              H₂O₂ as R.A.:
              <br />
              O in H₂O₂: -1 → O₂: 0
            </WorkingLine>

            <FormulaBox>
              E<sub>H₂O₂</sub> as R.A. = M / 2
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="font-bold text-amber-800">
              O₃ as O.A.
            </h3>

            <FormulaBox>
              E<sub>O₃</sub> as O.A. = M / 2
            </FormulaBox>

            <FormulaBox>
              O₃ + 2H⁺ + 2e⁻ → O₂ + H₂O
            </FormulaBox>
          </div>
        </PageCard>
      </div>
    </main>
  );
}
