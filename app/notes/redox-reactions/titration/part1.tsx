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

export default function TitrationPart1() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
          Volumetric Titration Fundamentals & Primary Standards
        </h1>
      </header>
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="rounded-[2rem] bg-gradient-to-br from-red-50 via-white to-lime-50 p-8 text-center shadow-sm">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
            Chemistry Notes
          </p>
          <h1 className="text-5xl font-black text-red-500 md:text-7xl">
            Titration
          </h1>
          <p className="mt-4 text-lg font-semibold text-slate-600">
            Volumetric Analysis
          </p>
        </header>

        <PageCard title="Cover Page">
          <div className="rounded-[2rem] border-4 border-lime-300 bg-white p-8 text-center">
            <div className="mx-auto max-w-3xl rounded-3xl border-[10px] border-lime-300 bg-white px-6 py-10">
              <h2 className="text-6xl font-black italic text-red-500 md:text-8xl">
                Titration
              </h2>
              <div className="mx-auto mt-4 h-1 w-4/5 rounded-full bg-blue-600" />
              <div className="mx-auto mt-1 h-1 w-4/5 rounded-full bg-fuchsia-500" />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="h-20 rounded-full bg-red-300" />
              <div className="h-20 rounded-full bg-lime-300" />
              <div className="h-20 rounded-full bg-teal-300" />
              <div className="h-20 rounded-full bg-slate-500" />
            </div>
          </div>
        </PageCard>

        <PageCard title="Titration — Volumetric Analysis">
          <div className="text-center">
            <h2 className="text-3xl font-black text-red-500">Titration</h2>
            <p className="mt-2 text-2xl font-black text-red-500">
              (Volumetric Analysis)
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="mb-2 text-lg font-bold text-blue-800 underline">
              Titration:
            </h3>
            <p>
              It is the method of determination of conc. of a sol<sup>n</sup>{" "}
              with the help of another sol<sup>n</sup> of known conc.
            </p>
          </div>

          <WorkingLine>
            Sol<sup>n</sup> of known conc. is called <b>standard solution</b>.
          </WorkingLine>

          <div className="grid gap-4 md:grid-cols-2">
            <DiagramBox title="Unknown solution">
              <div className="rounded-2xl border border-slate-300 bg-white p-4">
                <p className="font-bold">Acid sol<sup>n</sup></p>
                <p className="mt-2 text-lg font-black">C = ?</p>
              </div>
            </DiagramBox>

            <DiagramBox title="Standard solution">
              <div className="rounded-2xl border border-slate-300 bg-white p-4">
                <p className="font-bold">Basic sol<sup>n</sup></p>
                <p className="mt-2">
                  <LabelPill>standard sol<sup>n</sup></LabelPill>
                </p>
              </div>
            </DiagramBox>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <WorkingLine>
              Reaction condition:
              <br />
              1. very fast rxn
            </WorkingLine>

            <WorkingLine>
              Reaction condition:
              <br />
              2. almost complete rxn
            </WorkingLine>
          </div>

          <p>
            Standard sol<sup>n</sup> is so selected that it gives instantaneous
            rxn with the sol<sup>n</sup> of unknown conc. and the rxn must tend
            towards completion.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <DiagramBox title="Beaker">
              <div className="mx-auto h-40 w-32 rounded-b-3xl border-4 border-blue-500 border-t-0 bg-white p-3">
                <div className="mt-20 h-12 rounded-lg bg-blue-100">
                  <div className="pt-2 text-xs text-blue-700">solution</div>
                </div>
              </div>
              <p className="mt-3 font-semibold">Beaker</p>
            </DiagramBox>

            <DiagramBox title="Conical flask">
              <div className="mx-auto flex h-40 w-48 flex-col items-center justify-end">
                <div className="h-8 w-8 border-4 border-blue-500 border-b-0" />
                <div className="h-28 w-44 rounded-b-[4rem] border-4 border-blue-500 bg-white p-4">
                  <div className="mt-10 h-10 rounded-lg bg-blue-100" />
                </div>
              </div>
              <p className="mt-3 font-semibold">Conical flask</p>
              <p className="mt-2 text-sm font-medium">
                Known volume of sol<sup>n</sup> of unknown conc.
              </p>
            </DiagramBox>
          </div>
        </PageCard>

        <PageCard title="Pipette, Burette, Indicator and Titre Value">
          <div className="grid gap-4 md:grid-cols-2">
            <DiagramBox title="Pipette">
              <div className="mx-auto flex h-72 w-20 flex-col items-center">
                <div className="h-20 w-4 rounded-full border-4 border-blue-500 bg-white" />
                <div className="flex h-24 w-14 items-center justify-center rounded-full border-4 border-blue-500 bg-white text-sm font-bold text-blue-700">
                  25 ml
                </div>
                <div className="h-24 w-4 rounded-full border-4 border-blue-500 bg-white" />
              </div>
              <p className="mt-3 text-xl font-bold text-blue-800">Pipette</p>
            </DiagramBox>

            <DiagramBox title="Burette setup">
              <div className="mx-auto grid max-w-md gap-4 md:grid-cols-[80px_1fr]">
                <div className="relative mx-auto h-72 w-12 rounded-full border-4 border-blue-500 bg-white">
                  <div className="absolute left-full top-4 ml-3 whitespace-nowrap rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                    75.0 ml
                  </div>
                  <div className="absolute left-full top-28 ml-3 whitespace-nowrap rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                    40.0 ml
                  </div>
                  <div className="absolute left-0 top-28 h-1 w-full bg-orange-500" />
                  <div className="absolute bottom-0 left-1/2 h-10 w-2 -translate-x-1/2 bg-blue-500" />
                </div>

                <div className="flex flex-col justify-center text-left">
                  <p>
                    <b>Burette</b>
                  </p>
                  <p>
                    Standard sol<sup>n</sup>
                  </p>
                  <p>
                    <LabelPill>NaOH</LabelPill>
                  </p>
                  <p>
                    C<sub>2</sub> = known
                  </p>
                  <p className="mt-3 font-bold text-orange-700">
                    V<sub>2</sub> = 75 - 40 = 35 ml
                  </p>
                  <p className="text-sm text-orange-700">
                    exp. measurement in laboratory
                  </p>
                </div>
              </div>
            </DiagramBox>
          </div>

          <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <h3 className="mb-3 text-lg font-bold text-pink-700">
              Conical flask contents
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <WorkingLine>
                Indicator:
                <br />
                small amount
              </WorkingLine>

              <WorkingLine>
                1. V<sub>1</sub> = 25 ml (say)
                <br />
                C<sub>1</sub> = ?
                <br />
                HCl
              </WorkingLine>
            </div>
          </div>

          <FormulaBox>
            n<sub>eq</sub> HCl = n<sub>eq</sub> NaOH
          </FormulaBox>

          <FormulaBox>
            V<sub>1</sub> × N<sub>1</sub> / 1000 = V<sub>2</sub> × N
            <sub>2</sub> / 1000
          </FormulaBox>

          <FormulaBox>
            V<sub>1</sub>N<sub>1</sub> = V<sub>2</sub>N<sub>2</sub>
          </FormulaBox>

          <div className="grid gap-3 md:grid-cols-2">
            <WorkingLine>
              V<sub>1</sub>N<sub>1</sub> → calculate
            </WorkingLine>

            <WorkingLine>
              V<sub>2</sub>N<sub>2</sub> → exp. measure
            </WorkingLine>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p>
              After a lot of data collection for V<sub>2</sub> doing exp.
              several times, the <b>three same consecutive values</b> of V
              <sub>2</sub> is taken as titre value.
            </p>

            <p className="mt-3 font-bold text-red-600">
              V<sub>2</sub> is never taken as average of exp. values.
            </p>
          </div>
        </PageCard>
      </div>
    </main>
  );
}
