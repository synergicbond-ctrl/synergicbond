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

export default function TitrationPart2() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
          Permanganometry & Dichrometry Titrations
        </h1>
      </header>
      <div className="mx-auto max-w-5xl space-y-8">
        

        <PageCard title="Primary Standard Solution">
          <h3 className="text-2xl font-black text-red-500 underline">
            Primary standard solution:
          </h3>

          <p>
            Sol<sup>n</sup> of which conc. is known more accurately.
          </p>

          <p className="font-semibold text-blue-800">
            For primary standard solution:
          </p>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h4 className="font-bold text-slate-900">
              (i) NaOH as solute
            </h4>

            <CrossedOut>
              NaOH
              <br />
              4 gm
              <br />
              4 / 40 mole
            </CrossedOut>

            <FormulaBox>
              NaOH + CO<sub>2</sub> → NaHCO<sub>3</sub>
            </FormulaBox>

            <FormulaBox>
              NaHCO<sub>3</sub> + CO<sub>2</sub> → Na<sub>2</sub>CO
              <sub>3</sub>
            </FormulaBox>

            <RuleBox>
              Solute should not be reactive towards air and solvent.
            </RuleBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h4 className="font-bold text-blue-900">
              (ii) Na<sub>2</sub>CO<sub>3</sub> as solute
            </h4>

            <WorkingLine>
              Na<sub>2</sub>CO<sub>3</sub> ✓
              <br />
              10 gm
              <br />
              10 / 106 mole
            </WorkingLine>

            <FormulaBox>
              Na<sub>2</sub>CO<sub>3</sub> + air moisture → Na<sub>2</sub>CO
              <sub>3</sub> · 10H<sub>2</sub>O
            </FormulaBox>

            <WorkingLine>
              Na<sub>2</sub>CO<sub>3</sub> · 10H<sub>2</sub>O ✓
              <br />
              10 / 286 mole
            </WorkingLine>

            <RuleBox>
              Solute should not be hygroscopic.
            </RuleBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
            <h4 className="font-bold text-purple-900">
              (iii) Solute of higher molar mass is preferred.
            </h4>

            <div className="grid gap-4 md:grid-cols-2">
              <WorkingLine>
                Low molar mass example:
                <br />
                4.0 / 40
                <br />
                4.1 / 40
              </WorkingLine>

              <WorkingLine>
                Higher molar mass example:
                <br />
                4.0 / 400
                <br />
                4.1 / 400
                <br />
                Higher molar mass → error min.
              </WorkingLine>
            </div>
          </div>

          <RuleBox>
            (iv) Temp. should be kept constant.
          </RuleBox>
        </PageCard>

        <PageCard title="Examples of Primary Standards, End Point, Equivalent Point and Indicator">
          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <h3 className="text-xl font-black text-pink-700 underline">
              Acid:
            </h3>

            <WorkingLine>
              H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> · 2H<sub>2</sub>O,
              oxalic acid
            </WorkingLine>

            <DiagramBox title="Terephthalic acid">
              <div className="mx-auto w-fit rounded-xl border border-slate-300 bg-white p-4 font-mono text-lg">
                &nbsp;&nbsp;&nbsp;COOH
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;|
                <br />
                ⌬
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;|
                <br />
                &nbsp;&nbsp;&nbsp;COOH
              </div>
              <p className="mt-2 font-semibold">Terephthalic acid, etc.</p>
            </DiagramBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="text-xl font-black text-blue-700 underline">
              Base:
            </h3>

            <WorkingLine>
              Na<sub>2</sub>CO<sub>3</sub> · 10H<sub>2</sub>O, Na<sub>2</sub>B
              <sub>4</sub>O<sub>7</sub> · 10H<sub>2</sub>O, etc.
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-orange-200 bg-orange-50 p-4">
            <h3 className="text-xl font-black text-orange-700 underline">
              Oxidising agent:
            </h3>

            <FormulaBox>
              K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>
            </FormulaBox>

            <FormulaBox>
              KMnO<sub>4</sub> + H<sub>2</sub>O{" "}
              <span className="mx-2 text-sm font-bold text-slate-600">slow</span>
              → MnO<sub>2</sub> + O<sub>2</sub>
            </FormulaBox>

            <WorkingLine>
              However, freshly prepared KMnO<sub>4</sub> sol<sup>n</sup> may be
              used.
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-green-200 bg-green-50 p-4">
            <h3 className="text-xl font-black text-green-700 underline">
              Reducing agent:
            </h3>

            <WorkingLine>
              H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> · 2H<sub>2</sub>O, Na
              <sub>2</sub>S<sub>2</sub>O<sub>3</sub> · 5H<sub>2</sub>O, etc.
            </WorkingLine>

            <WorkingLine>
              Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> · 5H<sub>2</sub>O =
              Hypo
            </WorkingLine>
          </div>

          <div className="border-t border-pink-300 pt-5">
            <h3 className="text-xl font-black text-red-600 underline">
              End point:
            </h3>

            <p>
              It is the stage of titration where sudden change in colour of sol
              <sup>n</sup> is observed and the experiment of titration is
              stopped.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-black text-red-600 underline">
              Equivalent point:
            </h3>

            <p>
              It is the stage of titration where complete rxn occur between the
              sol<sup>n</sup>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-black text-red-600 underline">
              Indicator:
            </h3>

            <p>
              It is the substance added in very small amount in the sol
              <sup>n</sup> in beaker or conical flask, which result sudden change
              in colour of solution.
            </p>
          </div>
        </PageCard>

        <PageCard title="Perfect Indicator and Types of Titration">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <p>
              A perfect indicator makes end point and equivalent point identical.
              Sudden change in colour of sol<sup>n</sup> occur exactly at that
              drop, at which complete rxn occur.
            </p>
          </div>

          <h3 className="text-2xl font-black text-red-500 underline">
            Types of titration:
          </h3>

          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <h4 className="text-lg font-black text-pink-700">
              1. Acid - Base Titration
            </h4>

            <div className="grid gap-4 md:grid-cols-2">
              <WorkingLine>
                (i) Acidimetry:
                <br />
                standard sol<sup>n</sup> is acid
                <br />
                <Tag>conc. of base</Tag>
              </WorkingLine>

              <WorkingLine>
                (ii) Alkalimetry:
                <br />
                standard sol<sup>n</sup> is base
                <br />
                <Tag>conc. of acid</Tag>
              </WorkingLine>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
            <h4 className="text-lg font-black text-purple-700">
              2. Redox titration
            </h4>

            <div className="grid gap-3 md:grid-cols-2">
              <WorkingLine>
                Permanganatometry
                <br />
                KMnO<sub>4</sub> sol<sup>n</sup> is standard.
              </WorkingLine>

              <WorkingLine>
                Dichromatometry
                <br />
                K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> sol<sup>n</sup> is
                standard.
              </WorkingLine>

              <WorkingLine>
                Iodimetry
                <br />
                I<sub>2</sub> sol<sup>n</sup> is standard.
              </WorkingLine>

              <WorkingLine>
                Iodometry
                <br />
                I<sup>-</sup> sol<sup>n</sup> is standard.
              </WorkingLine>

              <WorkingLine>etc.</WorkingLine>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <h4 className="text-lg font-black text-amber-800">
              3. Precipitation Titration:
            </h4>

            <FormulaBox>
              AgNO<sub>3</sub>(aq) + NaCl(aq) → AgCl↓ + NaNO<sub>3</sub>(aq)
            </FormulaBox>

            <div className="grid gap-4 md:grid-cols-3">
              <WorkingLine>
                AgNO<sub>3</sub>(aq)
                <br />
                standard / reagent side shown in source
              </WorkingLine>

              <WorkingLine>
                NaCl(aq)
                <br />
                conc. is marked below this solution in the source diagram.
              </WorkingLine>

              <WorkingLine>
                AgCl↓
                <br />
                white precipitate formed.
                <br />
                “wt / mass” marking is shown near precipitate in source.
              </WorkingLine>
            </div>
          </div>
        </PageCard>
      </div>
    </main>
  );
}
