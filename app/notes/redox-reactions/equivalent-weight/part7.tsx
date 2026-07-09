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

export default function EquivalentConceptPart7() {
  return (
    <div className="space-y-6 sm:space-y-8">
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

          <div className="mt-6 border-t border-rose-300/30 pt-5">
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
          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
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

          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <h3 className="font-bold text-rose-200">
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
          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
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

          <div className="mt-6 space-y-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 text-violet-200 p-4">
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
  );
}
