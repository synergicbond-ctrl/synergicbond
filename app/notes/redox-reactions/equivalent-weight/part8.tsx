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

export default function EquivalentConceptPart8() {
  return (
    <div className="space-y-6 sm:space-y-8">
<PageCard title="Equivalent Concept — Final Practice Questions">
          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <QuestionBox>
              Q. A metal oxide contains 40% oxygen, by weight. Calculate the
              equivalent weight of metal.
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> metal = n<sub>eq</sub> oxygen
            </FormulaBox>

            <WorkingLine>
              60 / E<sub>M</sub> = 40 / 8
            </WorkingLine>

            <FormulaBox>
              E<sub>M</sub> = 12
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <QuestionBox>
              Q. 4.2 gm of a metal carbonate gives 2.0 gm metal oxide on
              complete decomposition. Calculate the equivalent weight of metal.
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> metal carbonate = n<sub>eq</sub> metal oxide
            </FormulaBox>

            <WorkingLine>
              Equivalent weight of metal carbonate = E<sub>M</sub> + 30
            </WorkingLine>

            <WorkingLine>
              Equivalent weight of metal oxide = E<sub>M</sub> + 8
            </WorkingLine>

            <WorkingLine>
              4.2 / (E<sub>M</sub> + 30) = 2.0 / (E<sub>M</sub> + 8)
            </WorkingLine>

            <FormulaBox>
              E<sub>M</sub> = 12
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 text-violet-200 p-4">
            <QuestionBox>
              Q. When 2.70 gm MCl₂ · 6H₂O(s) is reacted with excess of H₂SO₄,
              1.80 gm MSO₄(s) is formed. Calculate equivalent weight of metal,
              M.
            </QuestionBox>

            <FormulaBox>
              n<sub>eq</sub> MCl₂ · 6H₂O = n<sub>eq</sub> MSO₄
            </FormulaBox>

            <WorkingLine>
              Equivalent weight of MCl₂ · 6H₂O = E<sub>M</sub> + 35.5 +{" "}
              (6 × 18) / (1 × 2)
            </WorkingLine>

            <WorkingLine>
              Equivalent weight of MSO₄ = E<sub>M</sub> + 48
            </WorkingLine>

            <WorkingLine>
              2.70 / {"{"}E<sub>M</sub> + 35.5 + (6 × 18) / (1 × 2){"}"} =
              1.80 / (E<sub>M</sub> + 48)
            </WorkingLine>

            <WorkingLine>
              2.70 / (E<sub>M</sub> + 89.5) = 1.80 / (E<sub>M</sub> + 48)
            </WorkingLine>

            <FormulaBox>
              E<sub>M</sub> = 35
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="Multi-Product Redox Equivalence Correction">
          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <ReactionBox>
              3MnO₄⁻ + 5FeC₂O₄ + 24H⁺ → 3Mn²⁺ + 5Fe³⁺ + 10CO₂ + 12H₂O
            </ReactionBox>

            <WorkingLine>
              MnO₄⁻: Mn is +7 and changes to Mn²⁺.
              <br />
              n-factor of MnO₄⁻ = 5.
            </WorkingLine>

            <WorkingLine>
              FeC₂O₄ contains Fe²⁺ and oxalate carbon.
              <br />
              Fe²⁺ → Fe³⁺ gives 1 electron.
              <br />
              C in C₂O₄²⁻: +3 → C in CO₂: +4 gives 2 electrons for two carbon atoms.
            </WorkingLine>

            <FormulaBox>
              FeC₂O₄ → Fe³⁺ + 2CO₂ + 3e⁻
            </FormulaBox>

            <FormulaBox>
              n-factor of FeC₂O₄ = 3
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <h3 className="font-bold text-blue-800">
              If 10 moles MnO₄⁻ are taken:
            </h3>

            <CrossedOut>
              n<sub>eq</sub> MnO₄⁻ = n<sub>eq</sub> CO₂
              <br />
              10 × 5 = n<sub>CO₂</sub> × 1
              <br />
              n<sub>CO₂</sub> = 50
            </CrossedOut>

            <WorkingLine>
              Correct route shown:
              <br />
              n<sub>eq</sub> MnO₄⁻ = n<sub>eq</sub> FeC₂O₄
            </WorkingLine>

            <WorkingLine>
              10 × 5 = n × 3
            </WorkingLine>

            <FormulaBox>
              n<sub>FeC₂O₄</sub> = 50 / 3
            </FormulaBox>

            <WorkingLine>
              From one FeC₂O₄, 2CO₂ are formed.
            </WorkingLine>

            <FormulaBox>
              n<sub>CO₂</sub> = (50 / 3) × 2 = 100 / 3
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <h3 className="font-bold text-orange-800">
              Equivalent split method:
            </h3>

            <FormulaBox>
              n<sub>eq</sub> MnO₄⁻ = n<sub>eq</sub> Fe³⁺ + n<sub>eq</sub> CO₂
            </FormulaBox>

            <WorkingLine>
              10 × 5 = x × 1 + (2x) × 1
            </WorkingLine>

            <FormulaBox>
              x = 50 / 3
            </FormulaBox>

            <WorkingLine>
              Therefore, FeC₂O₄ moles = 50 / 3 and CO₂ moles = 2x = 100 / 3.
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
            <h3 className="font-bold text-slate-900">
              Bottom rough-note relation shown:
            </h3>

            <WorkingLine>
              H₂SO₄
              <br />
              10 L H₂
              <br />
              4 L O₂
              <br />
              H₂S₂O₈
            </WorkingLine>

            <CrossedOut>
              n<sub>eq</sub> H₂ = n<sub>eq</sub> O₂ = n<sub>eq</sub> H₂S₂O₈
            </CrossedOut>

            <FormulaBox>
              n<sub>eq</sub> H₂ = n<sub>eq</sub> O₂ + n<sub>eq</sub> H₂S₂O₈
            </FormulaBox>

            <SourceNote>
              The bottom part of page 29 is written as a rough correction note.
              The visible final circled relation is preserved above.
            </SourceNote>
          </div>
        </PageCard>
      </div>
  );
}
