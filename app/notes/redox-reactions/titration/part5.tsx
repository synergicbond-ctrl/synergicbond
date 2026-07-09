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

export default function TitrationPart5() {
  return (
    <div className="space-y-6 sm:space-y-8">
<PageCard title="HCl, KMnO₄ and Oxidising Agent Problem">
          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <QuestionBox>
              Q. 40 ml of <b>M-HCl</b> sol<sup>n</sup> is mixed with 10 ml of
              0.1 M-KMnO<sub>4</sub> sol<sup>n</sup> in presence of H
              <sub>2</sub>SO<sub>4</sub>. If the excess HCl requires 15 ml of
              0.2 N-sol<sup>n</sup> of an oxidising agent, which oxidises HCl
              into HClO<sub>3</sub>, cal. the molarity of HCl sol<sup>n</sup>.
            </QuestionBox>

            <NoteBox>
              Source note: the concentration before HCl is dark-covered in the
              image, but the solution treats HCl molarity as unknown M and
              finally calculates M<sub>HCl</sub>.
            </NoteBox>

            <FormulaBox>
              n<sub>eq</sub> HCl = n<sub>eq</sub> KMnO<sub>4</sub> + n
              <sub>eq</sub> O.A.
            </FormulaBox>

            <WorkingLine>
              or, (40 × M / 1000) × ?? = — — + — —
            </WorkingLine>

            <NoteBox>
              The source highlights “??” at this stage because HCl is behaving
              differently in two reactions. The next lines split HCl into two
              parts.
            </NoteBox>

            <div className="grid gap-4 md:grid-cols-2">
              <ReactionBox>
                HCl{" "}
                <span className="mx-2 font-bold text-blue-700">
                  KMnO<sub>4</sub>
                </span>
                → Cl<sub>2</sub>
                <br />
                n<sub>f</sub> = 1
              </ReactionBox>

              <ReactionBox>
                HCl{" "}
                <span className="mx-2 font-bold text-blue-700">O.A.</span>
                → HClO<sub>3</sub>
                <br />
                n<sub>f</sub> = 6
              </ReactionBox>
            </div>

            <FormulaBox>
              n<sub>eq</sub> HCl = n<sub>eq</sub> KMnO<sub>4</sub>
            </FormulaBox>

            <WorkingLine>
              x × 1 = (10 × 0.1 / 1000) × 5
            </WorkingLine>

            <FormulaBox>
              x = 5 / 1000
            </FormulaBox>

            <FormulaBox>
              n<sub>eq</sub> HCl = n<sub>eq</sub> O.A.
            </FormulaBox>

            <WorkingLine>
              y × 6 = (15 × 0.2 / 1000)
            </WorkingLine>

            <FormulaBox>
              y = 0.5 / 1000
            </FormulaBox>

            <FormulaBox>
              Now, n<sub>HCl</sub> = 40 × M / 1000 = x + y
            </FormulaBox>

            <FormulaBox>
              M<sub>HCl</sub> = 5.5 / 40
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="KMnO₄ + KI + K₂Cr₂O₇ Mixed Redox Titration">
          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <QuestionBox>
              Q. 40 ml of M/20-KMnO<sub>4</sub> sol<sup>n</sup> is mixed with
              50 ml of KI sol<sup>n</sup> in presence of H<sub>2</sub>SO
              <sub>4</sub> and the mixture is diluted to 300 ml. 25 ml of the
              diluted mixture exactly requires 5 ml of M/50-K<sub>2</sub>Cr
              <sub>2</sub>O<sub>7</sub> sol<sup>n</sup> for titration. Cal. the
              molarity of KI sol<sup>n</sup> used.
            </QuestionBox>

            <div className="grid gap-4 md:grid-cols-3">
              <WorkingLine>
                KMnO<sub>4</sub>
                <br />
                O.A.
                <br />
                n<sub>f</sub> = 5
              </WorkingLine>

              <WorkingLine>
                KI
                <br />
                R.A.
                <br />
                I<sup>-</sup> → I<sub>2</sub>
                <br />
                n<sub>f</sub> = 1
              </WorkingLine>

              <WorkingLine>
                K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>
                <br />
                O.A.
                <br />
                n<sub>f</sub> = 6
              </WorkingLine>
            </div>

            <FormulaBox>
              n<sub>eq</sub> KI = n<sub>eq</sub> KMnO<sub>4</sub> + n
              <sub>eq</sub> total K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>{" "}
              needed
            </FormulaBox>

            <WorkingLine>
              (50 × M / 1000) × 1 = (40 × 1/20 / 1000) × 5 + [((5 / 25) × 300 ×
              1/50) / 1000] × 6
            </WorkingLine>

            <FormulaBox>
              M<sub>KI</sub> = 17.2 / 50 M
            </FormulaBox>
          </div>

          <div className="mt-6 space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <QuestionBox>
              Q. V ml of 1.5 M-K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> sol
              <sup>n</sup> is reacted with excess of KI sol<sup>n</sup> in
              acidic medium. If the I<sub>2</sub> liberated exactly require 25
              ml of seminormal Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> sol
              <sup>n</sup> for titration, cal the value of V.
            </QuestionBox>

            <ReactionBox>
              K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>{" "}
              <span className="mx-2 text-blue-700">excess KI</span>→ I
              <sub>2</sub>{" "}
              <span className="mx-2 text-blue-700">
                Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>
              </span>
              → NaI
            </ReactionBox>

            <FormulaBox>
              n<sub>eq</sub> K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> = n
              <sub>eq</sub> I<sub>2</sub> = n<sub>eq</sub> Na<sub>2</sub>S
              <sub>2</sub>O<sub>3</sub>
            </FormulaBox>

            <WorkingLine>
              (V × 1.5 / 1000) × 6 = (25 × 1/2 / 1000) × 1
            </WorkingLine>

            <NoteBox>
              The final value of V is continued at the top of page 15.
            </NoteBox>
          </div>
        </PageCard>

        <PageCard title="K₂Cr₂O₇/KI/I₂ Continuation and KIO₃–KI–Hypo Problem">
          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <h3 className="font-bold text-rose-200">
              Continuation of V ml K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>{" "}
              question
            </h3>

            <FormulaBox>
              n<sub>eq</sub> K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> = n
              <sub>eq</sub> I<sub>2</sub> = n<sub>eq</sub> Na<sub>2</sub>S
              <sub>2</sub>O<sub>3</sub>
            </FormulaBox>

            <WorkingLine>
              (V × 1.5 / 1000) × 6 = (25 × 1/2 / 1000) × 1
            </WorkingLine>

            <FormulaBox>
              V = 25 / 18
            </FormulaBox>
          </div>

          <div className="mt-6 space-y-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 text-violet-200 p-4">
            <QuestionBox>
              Q. 12 ml of 0.15 M-KIO<sub>3</sub> sol<sup>n</sup> is mixed with
              30 ml of KI sol<sup>n</sup> in presence of HCl. If the liberated I
              <sub>2</sub> exactly requires 40 ml of Na<sub>2</sub>S<sub>2</sub>
              O<sub>3</sub> sol<sup>n</sup> containing 3.16 gm solute per litre,
              cal the molarity of KI sol<sup>n</sup>.
            </QuestionBox>

            <div className="grid gap-4 md:grid-cols-3">
              <WorkingLine>
                KIO<sub>3</sub>
                <br />
                with KI
                <br />
                n<sub>f</sub> = 5 / 3
              </WorkingLine>

              <WorkingLine>
                KI → I<sub>2</sub>
                <br />
                n<sub>f</sub> = 1
              </WorkingLine>

              <WorkingLine>
                I<sub>2</sub> with Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>
                <br />
                n<sub>f</sub> = 2
              </WorkingLine>
            </div>

            <CrossedRelation>
              n<sub>eq</sub> KIO<sub>3</sub> = n<sub>eq</sub> KI = n
              <sub>eq</sub> I<sub>2</sub> = n<sub>eq</sub> Na<sub>2</sub>S
              <sub>2</sub>O<sub>3</sub>
            </CrossedRelation>

            <FormulaBox>
              n<sub>eq</sub> I<sub>2</sub> = n<sub>eq</sub> Na<sub>2</sub>S
              <sub>2</sub>O<sub>3</sub>
            </FormulaBox>

            <WorkingLine>
              n × 2 = (40 × 3.16 / 158 / 1000) × 1
            </WorkingLine>

            <FormulaBox>
              n = 4 × 10<sup>-4</sup>
            </FormulaBox>

            <ReactionBox>
              IO<sub>3</sub><sup>-</sup> + 5I<sup>-</sup> + 6H<sup>+</sup> → 3I
              <sub>2</sub> + 3H<sub>2</sub>O
            </ReactionBox>

            <WorkingLine>
              Moles of KIO<sub>3</sub> taken = 12 × 0.15 / 1000 = 1.8 × 10
              <sup>-3</sup>
              <br />
              Source marks this as <b>excess</b>.
            </WorkingLine>

            <WorkingLine>
              I<sub>2</sub> formed = 4 × 10<sup>-4</sup> mole.
            </WorkingLine>

            <WorkingLine>
              From IO<sub>3</sub><sup>-</sup> + 5I<sup>-</sup> → 3I
              <sub>2</sub>, moles of KI needed:
              <br />
              = (5 / 3) × 4 × 10<sup>-4</sup> mole
            </WorkingLine>

            <WorkingLine>
              30 ml of KI contains (5 / 3) × 4 × 10<sup>-4</sup> mole KI.
            </WorkingLine>

            <FormulaBox>
              M<sub>KI</sub> = 1 / 45
            </FormulaBox>
          </div>
        </PageCard>
      </div>
  );
}
