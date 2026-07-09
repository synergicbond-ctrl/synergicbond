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

export default function EquivalentConceptPart5() {
  return (
    <div className="space-y-6 sm:space-y-8">
<PageCard title="Redox Equivalent Weight — Oxalate, Thiosulphate, Ethane, FeC₂O₄ and FeS₂">
          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <h3 className="font-bold text-rose-200">
              H₂C₂O₄ as R.A.
            </h3>

            <WorkingLine>
              Carbon in H₂C₂O₄: +3 → carbon in CO₂: +4
            </WorkingLine>

            <FormulaBox>
              E<sub>H₂C₂O₄</sub> as R.A. = M / (2 × 1) = M / 2
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <h3 className="font-bold text-blue-800">
              S₂O₃²⁻ in reaction with Cl₂
            </h3>

            <WorkingLine>
              S in S₂O₃²⁻: +2 → S in SO₄²⁻: +6
            </WorkingLine>

            <FormulaBox>
              S₂O₃²⁻ → SO₄²⁻
            </FormulaBox>

            <FormulaBox>
              E<sub>S₂O₃²⁻</sub> = M / (2 × 4) = M / 8
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <h3 className="font-bold text-amber-200">
              C₂H₆ in combustion reaction
            </h3>

            <WorkingLine>
              Carbon in C₂H₆: -3 → carbon in CO₂: +4
            </WorkingLine>

            <FormulaBox>
              E<sub>C₂H₆</sub> = M / 14
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-emerald-400/20 bg-[rgba(52,211,153,0.06)] p-4">
            <h3 className="font-bold text-emerald-200">
              FeC₂O₄
            </h3>

            <YellowNote>
              FeC₂O₄ → Fe³⁺ + CO₂ &nbsp; — only oxidation
            </YellowNote>

            <WorkingLine>
              FeC₂O₄ → Fe³⁺ + 2CO₂ + 3e⁻
            </WorkingLine>

            <WorkingLine>
              Total n-factor = 1 × 1 + 1 × 2 = 3
            </WorkingLine>

            <FormulaBox>
              E<sub>FeC₂O₄</sub> = M / (1 × 1 + 1 × 2) = M / 3
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 text-violet-200 p-4">
            <h3 className="font-bold text-purple-800">
              FeS₂
            </h3>

            <FormulaBox>
              E<sub>FeS₂</sub> = M / (1 × 1 + 5 × 2) = M / 11
            </FormulaBox>

            <YellowNote>
              FeS₂ → Fe₂O₃ + SO₂ &nbsp; — only oxidation
            </YellowNote>

            <WorkingLine>
              2FeS₂ + 11H₂O → Fe₂O₃ + 4SO₂ + 22H⁺ + 22e⁻
            </WorkingLine>

            <WorkingLine>
              For one FeS₂, n-factor = 11.
            </WorkingLine>
          </div>
        </PageCard>

        <PageCard title="Redox Equivalent Weight — Co(MnO₄)₃, CrBr₃ and Cl₂ Disproportionation">
          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <h3 className="font-bold text-blue-800">
              Co(MnO₄)₃
            </h3>

            <YellowNote>
              Co(MnO₄)₃ → Co²⁺ + Mn²⁺ &nbsp; — only reduction
            </YellowNote>

            <WorkingLine>
              Co: +3 → +2, change = 1
            </WorkingLine>

            <WorkingLine>
              Mn: +7 → +2, change = 5 for each Mn
            </WorkingLine>

            <FormulaBox>
              E<sub>Co(MnO₄)₃</sub> = M / (1 × 1 + 5 × 3) = M / 16
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <h3 className="font-bold text-amber-200">
              CrBr₃
            </h3>

            <YellowNote>
              CrBr₃ → CrO₄²⁻ + BrO₄⁻ &nbsp; — only oxidation
            </YellowNote>

            <WorkingLine>
              Cr: +3 → +6, change = 3
            </WorkingLine>

            <WorkingLine>
              Br: -1 → +7, change = 8 for each Br
            </WorkingLine>

            <FormulaBox>
              E<sub>CrBr₃</sub> = M / (3 × 1 + 8 × 3) = M / 27
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-rose-400/20 bg-[rgba(251,113,133,0.06)] text-rose-200 p-4">
            <h3 className="font-bold text-rose-200">
              Cl₂ — Disproportionation
            </h3>

            <WorkingLine>
              Cl₂⁰ → Cl⁻ + ClO₃⁻
            </WorkingLine>

            <WorkingLine>
              For reduction:
              <br />
              n₁ = 2
            </WorkingLine>

            <WorkingLine>
              For oxidation:
              <br />
              n₂ = 10
            </WorkingLine>

            <FormulaBox>
              n-factor of substance disproportionating = n₁n₂ / (n₁ + n₂)
            </FormulaBox>

            <FormulaBox>
              n<sub>Cl₂</sub> = 2 × 10 / (2 + 10) = 20 / 12 = 5 / 3
            </FormulaBox>

            <FormulaBox>
              E<sub>Cl₂</sub> = M / (5 / 3)
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="General Formula for Disproportionation and Examples">
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
            <h3 className="font-bold text-slate-900">
              General disproportionation case
            </h3>

            <WorkingLine>
              Oxidation:
              <br />
              M → M<sup>x+</sup> + xe⁻ &nbsp; ] × y
            </WorkingLine>

            <WorkingLine>
              Reduction:
              <br />
              M + ye⁻ → M<sup>y-</sup> &nbsp; ] × x
            </WorkingLine>

            <FormulaBox>
              (x + y)M → yM<sup>x+</sup> + xM<sup>y-</sup>
            </FormulaBox>

            <FormulaBox>
              n<sub>f</sub> = xy / (x + y)
            </FormulaBox>

            <WorkingLine>
              For product yM<sup>x+</sup>:
              <br />
              n<sub>f</sub> = xy / y = x
            </WorkingLine>

            <WorkingLine>
              For product xM<sup>y-</sup>:
              <br />
              n<sub>f</sub> = xy / x = y
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <h3 className="font-bold text-blue-800">
              Cl₂ disproportionation in water
            </h3>

            <WorkingLine>
              Oxidation:
              <br />
              Cl₂ + 6H₂O → 2ClO₃⁻ + 12H⁺ + 10e⁻
            </WorkingLine>

            <WorkingLine>
              Reduction:
              <br />
              Cl₂ + 2e⁻ → 2Cl⁻ &nbsp; ] × 5
            </WorkingLine>

            <FormulaBox>
              6Cl₂ + 6H₂O → 10Cl⁻ + 2ClO₃⁻ + 12H⁺
            </FormulaBox>

            <FormulaBox>
              n<sub>f</sub> = 10 / 6 = 5 / 3
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <h3 className="font-bold text-rose-200">
              P₄ disproportionation
            </h3>

            <WorkingLine>
              P₄⁰ → PH₃ + H₂PO₂⁻
            </WorkingLine>

            <WorkingLine>
              P in PH₃ = -3
              <br />
              P in H₂PO₂⁻ = +1
            </WorkingLine>

            <WorkingLine>
              n₁ = 12
              <br />
              n₂ = 4
            </WorkingLine>

            <FormulaBox>
              n<sub>f</sub> of P₄ = 12 × 4 / (12 + 4) = 3
            </FormulaBox>

            <FormulaBox>
              E<sub>P₄</sub> = M / 3
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="H₂O₂, I₂, NH₃ and HNO₃ Redox n-Factor Cases">
          <div className="space-y-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 text-violet-200 p-4">
            <h3 className="font-bold text-purple-800">
              H₂O₂ disproportionation
            </h3>

            <WorkingLine>
              H₂O₂: oxygen -1 → H₂O: oxygen -2 and O₂: oxygen 0
            </WorkingLine>

            <WorkingLine>
              n₁ = 2
              <br />
              n₂ = 2
            </WorkingLine>

            <FormulaBox>
              n<sub>f</sub> of H₂O₂ = 2 × 2 / (2 + 2) = 1
            </FormulaBox>

            <FormulaBox>
              E<sub>H₂O₂</sub> = M / 1
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <h3 className="font-bold text-amber-200">
              IO₄⁻ + I⁻ → I₂
            </h3>

            <WorkingLine>
              I in IO₄⁻: +7
              <br />
              I in I⁻: -1
              <br />
              I in I₂: 0
            </WorkingLine>

            <WorkingLine>
              For IO₄⁻, n<sub>f</sub> = 7
              <br />
              For I⁻, n<sub>f</sub> = 1
            </WorkingLine>

            <WorkingLine>
              n₁ = 14
              <br />
              n₂ = 2
            </WorkingLine>

            <FormulaBox>
              n<sub>f</sub> of I₂ = 14 × 2 / (14 + 2) = 7 / 4
            </FormulaBox>

            <FormulaBox>
              E<sub>I₂</sub> = M / (7 / 4)
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-rose-400/20 bg-[rgba(251,113,133,0.06)] text-rose-200 p-4">
            <h3 className="font-bold text-rose-200">
              NH₃
            </h3>

            <WorkingLine>
              2NH₃ → N₂ + 3H₂ + 6e⁻
            </WorkingLine>

            <WorkingLine>
              n<sub>f</sub> = 6 / 2 = 3
            </WorkingLine>

            <FormulaBox>
              E<sub>NH₃</sub> = M / 3
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-emerald-400/20 bg-[rgba(52,211,153,0.06)] p-4">
            <h3 className="font-bold text-emerald-200">
              Zn + HNO₃ reaction
            </h3>

            <FormulaBox>
              Zn + HNO₃ → Zn(NO₃)₂ + NO + H₂O
            </FormulaBox>

            <WorkingLine>
              N in HNO₃: +5 → N in NO: +2
            </WorkingLine>

            <WorkingLine>
              n-factor for HNO₃ acting as oxidising agent = 3
            </WorkingLine>

            <RedNote>
              The nitrate part entering Zn(NO₃)₂ is not counted as the reduced
              part. The redox change is N(+5) → N(+2) in NO.
            </RedNote>
          </div>
        </PageCard>
      </div>
  );
}
