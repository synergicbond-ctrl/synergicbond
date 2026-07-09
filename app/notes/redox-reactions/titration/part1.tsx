"use client";
import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";
import {
  PageCard,
  FormulaBox,
  WorkingLine,
  DiagramBox,
  Highlight,
  NoteBox,
  YellowNote,
  RedNote,
  WarningBox,
  PinkQuestion,
  QuestionBox,
  PinkBox,
  ReactionBox,
  ReactionCard,
  RuleBox,
  ChecklistItem,
  StatusBadge,
  Tag,
  LabelPill,
  CrossedOut,
  CrossedRelation,
  MiniStructure,
  SourceNote,
} from "@/components/notes/chemistry";

export default function TitrationPart1() {
  return (
    <div className="space-y-6 sm:space-y-8">
<PageCard title="Titration — Volumetric Analysis">
          <div className="rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
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
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="font-bold">Acid sol<sup>n</sup></p>
                <p className="mt-2 text-lg font-black">C = ?</p>
              </div>
            </DiagramBox>

            <DiagramBox title="Standard solution">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
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
              <div className="mx-auto h-40 w-32 rounded-b-3xl border-4 border-blue-500 border-t-0 bg-slate-950/40 p-3">
                <div className="mt-20 h-12 rounded-lg bg-blue-100">
                  <div className="pt-2 text-xs text-blue-700">solution</div>
                </div>
              </div>
              <p className="mt-3 font-semibold">Beaker</p>
            </DiagramBox>

            <DiagramBox title="Conical flask">
              <div className="mx-auto flex h-40 w-48 flex-col items-center justify-end">
                <div className="h-8 w-8 border-4 border-blue-500 border-b-0" />
                <div className="h-28 w-44 rounded-b-[4rem] border-4 border-blue-500 bg-slate-950/40 p-4">
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
                <div className="h-20 w-4 rounded-full border-4 border-blue-500/30 bg-slate-950/40" />
                <div className="flex h-24 w-14 items-center justify-center rounded-full border-4 border-blue-500/30 bg-slate-950/40 text-sm font-bold text-blue-700">
                  25 ml
                </div>
                <div className="h-24 w-4 rounded-full border-4 border-blue-500/30 bg-slate-950/40" />
              </div>
              <p className="mt-3 text-xl font-bold text-blue-800">Pipette</p>
            </DiagramBox>

            <DiagramBox title="Burette setup">
              <div className="mx-auto grid max-w-md gap-4 md:grid-cols-[80px_1fr]">
                <div className="relative mx-auto h-72 w-12 rounded-full border-4 border-blue-500/30 bg-slate-950/40">
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

          <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
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

          <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
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
  );
}
