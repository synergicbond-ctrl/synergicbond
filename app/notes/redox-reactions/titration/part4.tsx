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

export default function TitrationPart4() {
  return (
    <div className="space-y-6 sm:space-y-8">
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
  );
}
