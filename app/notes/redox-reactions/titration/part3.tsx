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

export default function TitrationPart3() {
  return (
    <div className="space-y-6 sm:space-y-8">
<PageCard title="More Types of Titration and Back Titration">
          <div className="space-y-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 text-violet-200 p-4">
            <h3 className="text-xl font-black text-purple-800">
              Continued types of titration:
            </h3>

            <div className="grid gap-3 md:grid-cols-3">
              <WorkingLine>
                4. Radio-titration:
                <br />
                Radioactivity
              </WorkingLine>

              <WorkingLine>
                5. Conductometric titration:
                <br />
                Conductance measurement
              </WorkingLine>

              <WorkingLine>
                6. Potentiometric titration:
                <br />
                Cell potential measurement
                <br />
                etc.
                <br />
                Electrochemistry
              </WorkingLine>
            </div>
          </div>

          <div className="border-t border-pink-300 pt-5">
            <h3 className="text-2xl font-black text-pink-700 underline">
              Back Titration:
            </h3>

            <p>
              Sometimes complete rxn does not occur even after using the sol
              <sup>n</sup> from burette completely.
            </p>

            <p>
              In this case, the mixture is filled in the burette and standard sol
              <sup>n</sup> in conical flask to continue the titration.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <QuestionBox>
              Q. What volume of 0.4 N KMnO<sub>4</sub> sol<sup>n</sup> is needed
              for titration with 20 ml of 0.25 N HCl sol<sup>n</sup> in presence
              of H<sub>2</sub>SO<sub>4</sub>?
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> KMnO<sub>4</sub> = n<sub>eq</sub> HCl
            </FormulaBox>

            <WorkingLine>
              V × 0.4 / 1000 = 20 × 0.25 / 1000
            </WorkingLine>

            <FormulaBox>
              V = 12.5 ml
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="Molarity Questions — NaOH, K₂Cr₂O₇, SO₂/HClO₃">
          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <QuestionBox>
              Q. 30 ml NaOH sol<sup>n</sup> is needed for complete
              neutralisation of 20 ml 0.2 M H<sub>3</sub>PO<sub>4</sub> sol
              <sup>n</sup>. Cal. the molarity of NaOH sol<sup>n</sup>.
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> NaOH = n<sub>eq</sub> H<sub>3</sub>PO
              <sub>4</sub>
            </FormulaBox>

            <WorkingLine>
              (30 × M / 1000) × 1 = (20 × 0.2 / 1000) × 3
            </WorkingLine>

            <FormulaBox>
              M<sub>NaOH</sub> = 0.4 M
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <QuestionBox>
              Q. 25 ml K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> sol
              <sup>n</sup> is needed for complete oxidation of 50 ml of 0.1 M KI
              sol<sup>n</sup> in acidic medium. Cal. the molarity of K
              <sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> sol<sup>n</sup>.
            </QuestionBox>

            <WorkingLine>
              Cr in K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>:
              <br />
              +6 → +3
              <br />
              n-factor = 6
            </WorkingLine>

            <WorkingLine>
              I<sup>-</sup> → I<sub>2</sub>
              <br />
              n-factor = 1 per iodide ion
            </WorkingLine>

            <FormulaBox>
              n<sub>eq</sub> K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> = n
              <sub>eq</sub> KI
            </FormulaBox>

            <WorkingLine>
              (25 × M / 1000) × 6 = (50 × 0.1 / 1000) × 1
            </WorkingLine>

            <FormulaBox>
              M<sub>K₂Cr₂O₇</sub> = 1 / 30 M
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <QuestionBox>
              Q. What volume of SO<sub>2</sub> gas is needed at 0°C and 1 atm
              for complete reduction of 40 ml of decimolar HClO<sub>3</sub> sol
              <sup>n</sup> into HCl?
            </QuestionBox>

            <NoteBox>
              This question starts on page 8 and its calculation continues on
              page 9.
            </NoteBox>
          </div>
        </PageCard>

        <PageCard title="SO₂/HClO₃ Solution, I₂–Hypo Problem and Next Question Start">
          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <h3 className="text-lg font-black text-orange-800">
              Continuation of SO<sub>2</sub> / HClO<sub>3</sub> question
            </h3>

            <FormulaBox>
              n<sub>eq</sub> SO<sub>2</sub> = n<sub>eq</sub> HClO
              <sub>3</sub>
            </FormulaBox>

            <WorkingLine>
              SO<sub>2</sub>: S is +4 → SO<sub>4</sub>
              <sup>2-</sup>: S is +6
              <br />
              n-factor of SO<sub>2</sub> = 2
            </WorkingLine>

            <WorkingLine>
              HClO<sub>3</sub>: Cl is +5 → HCl: Cl is -1
              <br />
              n-factor of HClO<sub>3</sub> = 6
            </WorkingLine>

            <WorkingLine>
              (V L / 22.4 L) × 2 = ((40 × 1 / 10) / 1000) × 6
            </WorkingLine>

            <FormulaBox>
              V = 0.2688 L = 268.8 ml
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <QuestionBox>
              Q. 5 gm of x% pure I<sub>2</sub> sol<sup>n</sup> exactly requires
              x ml of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> sol
              <sup>n</sup> for C.R. Cal. the conc. of Na<sub>2</sub>S
              <sub>2</sub>O<sub>3</sub> sol<sup>n</sup> in gm/litre.{" "}
              <b>(I = 127)</b>
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> I<sub>2</sub> = n<sub>eq</sub> Na<sub>2</sub>S
              <sub>2</sub>O<sub>3</sub>
            </FormulaBox>

            <WorkingLine>
              ((5 × x / 100) / 254) × 2 = ((x × M) / 1000) × 1
            </WorkingLine>

            <ReactionBox>
              I<sub>2</sub><sup>0</sup> + S<sub>2</sub>O<sub>3</sub>
              <sup>2-</sup> → I<sup>-</sup> + S<sub>4</sub>O<sub>6</sub>
              <sup>2-</sup>
            </ReactionBox>

            <FormulaBox>
              M<sub>Na₂S₂O₃</sub> = 100 / 254 M
            </FormulaBox>

            <FormulaBox>
              conc. = (100 / 254) × 158 g/L = 62.20 g/L
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 text-violet-200 p-4">
            <QuestionBox>
              Q. 40 ml 0.2 M KMnO<sub>4</sub> sol<sup>n</sup> is needed for
              complete rxn with certain mass of H<sub>2</sub>C<sub>2</sub>O
              <sub>4</sub> · 2KHC<sub>2</sub>O<sub>4</sub> · 3H<sub>2</sub>O.
              Cal. the volume of 0.4 M NaOH sol<sup>n</sup> needed for complete
              rxn with the same mass of H<sub>2</sub>C<sub>2</sub>O
              <sub>4</sub> · 2KHC<sub>2</sub>O<sub>4</sub> · 3H<sub>2</sub>O.
            </QuestionBox>

            
          </div>
        </PageCard>
      </div>
  );
}
