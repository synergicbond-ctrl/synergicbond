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

export default function TitrationPart7() {
  return (
    <div className="space-y-6 sm:space-y-8">
<PageCard title="Ion-Exchange Method or Resin Method">
          <h3 className="text-2xl font-black text-rose-200 underline">
            Ion-exchange method or Resin method:
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            <DiagramBox title="Acidic resin — RH">
              <div className="mx-auto max-w-sm rounded-2xl border-4 border-blue-400 bg-slate-950/40 p-4">
                <p className="mb-2 font-bold text-amber-800">Hard water ↓</p>
                <div className="rounded-xl border border-dashed border-blue-300 p-4">
                  <p className="font-bold text-amber-800">Acidic resin</p>
                  <p className="text-xl font-black text-amber-900">RH</p>
                  <div className="mt-3 h-16 rounded-lg bg-amber-100" />
                </div>
                <p className="mt-3 font-bold text-rose-200">
                  Acidic water
                </p>
                <p className="text-rose-200">only cation present is H<sup>+</sup></p>
              </div>
            </DiagramBox>

            <DiagramBox title="Basic resin — ROH">
              <div className="mx-auto max-w-sm rounded-2xl border-4 border-blue-400 bg-slate-950/40 p-4">
                <div className="rounded-xl border border-dashed border-blue-300 p-4">
                  <p className="font-bold text-amber-800">Basic resin</p>
                  <p className="text-xl font-black text-amber-900">ROH</p>
                  <div className="mt-3 h-16 rounded-lg bg-amber-100" />
                </div>
                <p className="mt-3 font-bold text-blue-700">
                  neutral water
                </p>
                <p className="font-bold text-rose-200">Distilled water</p>
                <p className="text-rose-200">
                  no other cation &amp; anion than H<sup>+</sup> / OH<sup>-</sup>
                </p>
              </div>
            </DiagramBox>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ReactionBox>
              Ca<sup>2+</sup> + 2RH → R<sub>2</sub>Ca + 2H<sup>+</sup>
            </ReactionBox>

            <ReactionBox>
              Na<sup>+</sup> + RH → RNa + H<sup>+</sup>
            </ReactionBox>

            <ReactionBox>
              Cl<sup>-</sup> + ROH → RCl + OH<sup>-</sup>
            </ReactionBox>

            <ReactionBox>
              SO<sub>4</sub><sup>2-</sup> + 2ROH → R<sub>2</sub>SO<sub>4</sub> + 2OH<sup>-</sup>
            </ReactionBox>
          </div>

          <FormulaBox>
            H<sup>+</sup> + OH<sup>-</sup> → H<sub>2</sub>O
          </FormulaBox>

          <div className="border-t border-rose-300/30 pt-5">
            <h3 className="text-xl font-black text-rose-200 underline">
              Unit to express hardness
            </h3>

            <p>
              It is expressed as <b>ppm of CaCO<sub>3</sub> equivalent</b> to
              hardness creating salts.
            </p>
          </div>
        </PageCard>

        <PageCard title="Temporary, Permanent and Total Hardness Calculation">
          <QuestionBox>
            Q. 50 L of a water sample contains 200 mg NaCl, 55 mg CaCl
            <sub>2</sub>, 183 mg Ca(HCO<sub>3</sub>)<sub>2</sub> and 148 mg
            Mg(NO<sub>3</sub>)<sub>2</sub>. Cal. temporary, permanent and total
            hardness of water sample.
          </QuestionBox>

          <NoteBox>
            NaCl is circled/cross-marked in the source because it does not
            contribute to hardness.
          </NoteBox>

          <div className="space-y-4 rounded-2xl border border-emerald-400/20 bg-[rgba(52,211,153,0.06)] p-4">
            <h3 className="font-black text-emerald-200 underline">
              T.H.:
            </h3>

            <FormulaBox>
              n<sub>eq</sub> Ca(HCO<sub>3</sub>)<sub>2</sub> = n<sub>eq</sub>{" "}
              CaCO<sub>3</sub>
            </FormulaBox>

            <WorkingLine>
              or, (183 × 10<sup>-3</sup>) / (20 + 61) = w / (20 + 30)
            </WorkingLine>

            <FormulaBox>
              w = 112.96 × 10<sup>-3</sup> gm
            </FormulaBox>

            <FormulaBox>
              T.H. = [112.96 × 10<sup>-3</sup> / (50 × 10<sup>3</sup>)] × 10
              <sup>6</sup> = 2.26 ppm CaCO<sub>3</sub>
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <h3 className="font-black text-blue-800 underline">
              P.H.:
            </h3>

            <FormulaBox>
              n<sub>eq</sub> CaCl<sub>2</sub> + n<sub>eq</sub> Mg(NO
              <sub>3</sub>)<sub>2</sub> = n<sub>eq</sub> CaCO<sub>3</sub>
            </FormulaBox>

            <WorkingLine>
              (55 × 10<sup>-3</sup>) / (20 + 35.5) + (148 × 10
              <sup>-3</sup>) / (12 + 62) = w / (20 + 30)
            </WorkingLine>

            <FormulaBox>
              w = 149.55 × 10<sup>-3</sup> gm
            </FormulaBox>

            <FormulaBox>
              P.H. = [149.55 × 10<sup>-3</sup> / (50 × 10<sup>3</sup>)] × 10
              <sup>6</sup> = 2.99 ppm CaCO<sub>3</sub>
            </FormulaBox>
          </div>

          <FormulaBox>
            Total hardness = T.H. + P.H. = 5.25 ppm CaCO<sub>3</sub>
          </FormulaBox>
        </PageCard>

        <PageCard title="Hardness from pH after Acidic Resin and Lime Softening">
          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <QuestionBox>
              Q. 100 L water sample containing only Ca<sup>2+</sup> and Mg
              <sup>2+</sup> ions as cations is passed through acidic resin. If
              the pH of water sample finally obtained is 2.0, cal. the hardness
              of water.
            </QuestionBox>

            <FormulaBox>
              pH = -log<sub>10</sub>[H<sup>+</sup>]
            </FormulaBox>

            <WorkingLine>
              2.0 = -log[H<sup>+</sup>] ⇒ log[H<sup>+</sup>] = -2 = log 10
              <sup>-2</sup>
            </WorkingLine>

            <FormulaBox>
              [H<sup>+</sup>] = 10<sup>-2</sup> M
            </FormulaBox>

            <WorkingLine>
              moles of H<sup>+</sup> ions = 100 × 10<sup>-2</sup> = 1
            </WorkingLine>

            <ReactionBox>
              M<sup>2+</sup> + 2RH → R<sub>2</sub>M + 2H<sup>+</sup>
            </ReactionBox>

            <WorkingLine>
              1/2 mole hardness-causing M<sup>2+</sup> gives 1 mole H
              <sup>+</sup>.
            </WorkingLine>

            <FormulaBox>
              Hardness = [(1/2) × 100 / (100 × 10<sup>3</sup>)] × 10
              <sup>6</sup> = 500 ppm CaCO<sub>3</sub>
            </FormulaBox>
          </div>

          <div className="mt-6 space-y-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 text-violet-200 p-4">
            <QuestionBox>
              Q. 5 kg of a hard water sample contains 324 gm Ca(HCO
              <sub>3</sub>)<sub>2</sub> and 365 gm Mg(HCO<sub>3</sub>)
              <sub>2</sub>. Cal. the mass of Ca(OH)<sub>2</sub> (slaked lime)
              needed to soft this water sample.
            </QuestionBox>

            <ReactionBox>
              Ca(HCO<sub>3</sub>)<sub>2</sub> + Ca(OH)<sub>2</sub> → 2CaCO
              <sub>3</sub>↓ + 2H<sub>2</sub>O
            </ReactionBox>

            <WorkingLine>
              324 gm Ca(HCO<sub>3</sub>)<sub>2</sub> = 2 mole
              <br />
              Required Ca(OH)<sub>2</sub> = 2 mole
            </WorkingLine>

            <ReactionBox>
              Mg(HCO<sub>3</sub>)<sub>2</sub> + Ca(OH)<sub>2</sub> → Mg(OH)
              <sub>2</sub>↓ + CaCO<sub>3</sub>↓ + CO<sub>2</sub>↑ + H
              <sub>2</sub>O
            </ReactionBox>

            <WorkingLine>
              365 gm Mg(HCO<sub>3</sub>)<sub>2</sub> = 2.5 mole
              <br />
              Required Ca(OH)<sub>2</sub> = 2.5 mole
            </WorkingLine>

            <NoteBox>
              The final mass calculation continues at the top of page 22.
            </NoteBox>
          </div>
        </PageCard>

        <PageCard title="Final Lime Requirement and Blank Space">
          <FormulaBox>
            m<sub>Ca(OH)₂ needed</sub> = (2 + 2.5) × 74 = 333 gm
          </FormulaBox>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-6 text-center">
            <p className="text-xl font-black text-rose-200">— x — x —</p>
            <p className="mt-3 font-medium text-slate-600">
              
            </p>
          </div>
        </PageCard>
      </div>
  );
}
