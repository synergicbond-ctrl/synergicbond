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

export default function EquivalentConceptPart4() {
  return (
    <div className="space-y-6 sm:space-y-8">
<PageCard title="Equivalent Weight of Hydrated Salts">
          <WorkingLine>
            E<sub>Ca₃(PO₄)₂</sub> = E<sub>Ca²⁺</sub> + E<sub>PO₄³⁻</sub>
            <br />= 20 + 31.67
            <br />= <b>51.67</b>
          </WorkingLine>

          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <h3 className="font-bold text-blue-800">
              For Na₂CO₃ · 10H₂O
            </h3>

            <FormulaBox>
              E<sub>Na₂CO₃ · 10H₂O</sub> = 286 / (2 × 1) = <b>143</b>
            </FormulaBox>

            <WorkingLine>
              286 = 2 × 23 + 1 × 60 + 10 × 18
            </WorkingLine>

            <FormulaBox>
              E<sub>Na₂CO₃ · 10H₂O</sub> = E<sub>Na⁺</sub> + E<sub>CO₃²⁻</sub> + water equivalent
            </FormulaBox>

            <WorkingLine>
              = contribution of water in equivalent weight
            </WorkingLine>

            <WorkingLine>
              = 23 / 1 + 60 / 2 + (10 × 18) / (2 × 1)
            </WorkingLine>

            <WorkingLine>
              = 23 + 30 + 90 = <b>143</b>
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <h3 className="font-bold text-rose-200">
              For FeSO₄ · 7H₂O
            </h3>

            <FormulaBox>
              E<sub>FeSO₄ · 7H₂O</sub> = E<sub>Fe²⁺</sub> + E<sub>SO₄²⁻</sub> + water equivalent
            </FormulaBox>

            <WorkingLine>
              = 28 + 48 + (7 × 18) / (1 × 2)
            </WorkingLine>

            <WorkingLine>
              = 28 + 48 + 63 = <b>139</b>
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 text-violet-200 p-4">
            <h3 className="font-bold text-purple-800">
              For Al₂(SO₄)₃ · 12H₂O
            </h3>

            <FormulaBox>
              E<sub>Al₂(SO₄)₃ · 12H₂O</sub> = E<sub>Al³⁺</sub> + E<sub>SO₄²⁻</sub> + water equivalent
            </FormulaBox>

            <WorkingLine>
              = 9 + 48 + (12 × 18) / (2 × 3)
            </WorkingLine>

            <WorkingLine>
              = 9 + 48 + 36 = <b>93</b>
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <h3 className="font-bold text-amber-800">
              For FeCl₃ · 6H₂O
            </h3>

            <FormulaBox>
              E<sub>FeCl₃ · 6H₂O</sub> = E<sub>Fe³⁺</sub> + E<sub>Cl⁻</sub> + water equivalent
            </FormulaBox>

            <WorkingLine>
              = 56 / 3 + 35.5 / 1 + (6 × 18) / 3
            </WorkingLine>

            <WorkingLine>
              = 18.67 + 35.5 + 36
            </WorkingLine>

            <WorkingLine>
              = <b>90.17</b>
            </WorkingLine>
          </div>
        </PageCard>

        <PageCard title="Complex Salt and Equivalent Weight of O.A. / R.A.">
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
            <h3 className="font-bold text-slate-900">
              Complex salt example:
            </h3>

            <FormulaBox>
              E<sub>K₄[Fe(CN)₆]</sub> = M / 4
            </FormulaBox>

            <WorkingLine>
              K₄[Fe(CN)₆] contains:
              <br />
              4K⁺ and [Fe(CN)₆]⁴⁻
            </WorkingLine>

            <FormulaBox>
              E<sub>K₄[Fe(CN)₆]</sub> = M / 1
            </FormulaBox>

            <WorkingLine>
              K₄[Fe(CN)₆] → NaK₃[Fe(CN)₆]
            </WorkingLine>
          </div>

          <div className="border-t border-rose-300/30 pt-5">
            <h3 className="text-lg font-bold text-rose-200 underline">
              Eq. wt. of O.A. and R.A.:
            </h3>

            <p>
              It represents the number of grams of the O.A. or R.A. involved in
              the gain or loss of 1 mole of electron, respectively.
            </p>

            <PinkBox>
              I₂ + 6H₂O → 2IO₃⁻ + 12H⁺ + 10e⁻
            </PinkBox>

            <div className="grid gap-4 md:grid-cols-2">
              <WorkingLine>
                I₂:
                <br />
                M gm gives 10 mole e⁻
                <br />
                Therefore, M / 10 gm gives 1 mole e⁻
              </WorkingLine>

              <WorkingLine>
                2IO₃⁻:
                <br />
                2M gm corresponds to 10 mole e⁻
                <br />
                Therefore, 2M / 10 = M / 5
              </WorkingLine>
            </div>

            <FormulaBox>
              E<sub>O.A. / R.A.</sub> = Mol. wt. / no. of e⁻ gained or lost
            </FormulaBox>

            <FormulaBox>
              E<sub>O.A. / R.A.</sub> = Mol. wt. / change in O.N.
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="n-Factor in Redox Changes">
          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <h3 className="font-bold text-blue-800">
              FeO → Fe₂O₃
            </h3>

            <WorkingLine>
              Fe in FeO: +2
              <br />
              Fe in Fe₂O₃: +3
            </WorkingLine>

            <WorkingLine>
              E₁ = M₁ / 1
            </WorkingLine>

            <WorkingLine>
              E₂ = M₂ / 2
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-rose-400/20 bg-[rgba(251,113,133,0.06)] text-rose-200 p-4">
            <h3 className="font-bold text-rose-200">
              Fe₃O₄ → Fe₂O₃
            </h3>

            <WorkingLine>
              Fe in Fe₃O₄: +8 / 3
              <br />
              Fe in Fe₂O₃: +3
            </WorkingLine>

            <WorkingLine>
              Change in O.N. = 3 - 8 / 3 = 1 / 3
            </WorkingLine>

            <WorkingLine>
              For Fe₃O₄:
              <br />
              n<sub>f</sub> = (1 / 3) × 3 = <b>1</b>
              <br />
              E₁ = M₁ / 1
            </WorkingLine>

            <WorkingLine>
              For Fe₂O₃:
              <br />
              n<sub>f</sub> = (1 / 3) × 2 = <b>2 / 3</b>
              <br />
              E₂ = M₂ / (2 / 3)
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-emerald-400/20 bg-[rgba(52,211,153,0.06)] p-4">
            <h3 className="font-bold text-emerald-200">
              Fe₂O₃ → Fe₀.₉₅O
            </h3>

            <WorkingLine>
              Fe in Fe₂O₃: +3
              <br />
              Fe in Fe₀.₉₅O: +2 / 0.95
            </WorkingLine>

            <WorkingLine>
              Change in O.N. = 3 - 2 / 0.95 = 0.85 / 0.95
            </WorkingLine>

            <WorkingLine>
              For Fe₂O₃:
              <br />
              n<sub>f</sub> = 2 × 0.85 / 0.95 = <b>1.70 / 0.95</b>
            </WorkingLine>

            <WorkingLine>
              For Fe₀.₉₅O:
              <br />
              n<sub>f</sub> = 0.95 × 0.85 / 0.95 = <b>0.85</b>
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <h3 className="font-bold text-amber-200">
              MnO₂ → Mn₃O₄
            </h3>

            <WorkingLine>
              Mn in MnO₂: +4
              <br />
              Mn in Mn₃O₄: +8 / 3
            </WorkingLine>

            <WorkingLine>
              Change in O.N. = 4 - 8 / 3 = 4 / 3
            </WorkingLine>

            <WorkingLine>
              For MnO₂:
              <br />
              n<sub>f</sub> = 1 × 4 / 3 = <b>4 / 3</b>
            </WorkingLine>

            <WorkingLine>
              For Mn₃O₄:
              <br />
              n<sub>f</sub> = 3 × 4 / 3 = <b>4</b>
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <h3 className="font-bold text-rose-200">
              C₃H₈ → CO₂
            </h3>

            <WorkingLine>
              C in C₃H₈: -8 / 3
              <br />
              C in CO₂: +4
            </WorkingLine>

            <WorkingLine>
              Change in O.N. = 4 - (-8 / 3) = 20 / 3
            </WorkingLine>

            <WorkingLine>
              For C₃H₈:
              <br />
              n<sub>f</sub> = 3 × 20 / 3 = <b>20</b>
            </WorkingLine>

            <WorkingLine>
              For CO₂:
              <br />
              n<sub>f</sub> = <b>20 / 3</b>
            </WorkingLine>
          </div>
        </PageCard>

        <PageCard title="Redox Equivalent Weight — More Cases">
          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <h3 className="font-bold text-amber-200">
              S₂O₃²⁻ → S₄O₆²⁻
            </h3>

            <WorkingLine>
              S in S₂O₃²⁻: +2
              <br />
              S in S₄O₆²⁻: +2.5
            </WorkingLine>

            <WorkingLine>
              Change in O.N. = 0.5
            </WorkingLine>

            <WorkingLine>
              For S₂O₃²⁻:
              <br />
              n<sub>f</sub> = 2 × 0.5 = <b>1</b>
            </WorkingLine>

            <WorkingLine>
              For S₄O₆²⁻:
              <br />
              n<sub>f</sub> = 4 × 0.5 = <b>2</b>
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <h3 className="font-bold text-blue-800">
              KMnO₄ as O.A.
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
              <WorkingLine>
                In acidic medium:
                <br />
                MnO₄⁻ → Mn²⁺
                <br />
                E<sub>KMnO₄</sub> = <b>M / 5</b>
              </WorkingLine>

              <WorkingLine>
                In neutral or basic medium:
                <br />
                MnO₄⁻ → MnO₂
                <br />
                E<sub>KMnO₄</sub> = <b>M / 3</b>
              </WorkingLine>

              <WorkingLine>
                In strong base:
                <br />
                MnO₄⁻ → MnO₄²⁻
                <br />
                E<sub>KMnO₄</sub> = <b>M / 1</b>
              </WorkingLine>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 text-violet-200 p-4">
            <h3 className="font-bold text-purple-800">
              K₂Cr₂O₇ as O.A.
            </h3>

            <WorkingLine>
              Cr in K₂Cr₂O₇: +6
              <br />
              Cr⁶⁺ → Cr³⁺
            </WorkingLine>

            <FormulaBox>
              E<sub>K₂Cr₂O₇</sub> = M / (2 × 3) = M / 6
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
            <h3 className="font-bold text-slate-900">
              H₂O₂
            </h3>

            <WorkingLine>
              H₂O₂ as O.A.:
              <br />
              O in H₂O₂: -1 → O in H₂O: -2
            </WorkingLine>

            <FormulaBox>
              E<sub>H₂O₂</sub> as O.A. = M / 2
            </FormulaBox>

            <WorkingLine>
              H₂O₂ as R.A.:
              <br />
              O in H₂O₂: -1 → O₂: 0
            </WorkingLine>

            <FormulaBox>
              E<sub>H₂O₂</sub> as R.A. = M / 2
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <h3 className="font-bold text-amber-800">
              O₃ as O.A.
            </h3>

            <FormulaBox>
              E<sub>O₃</sub> as O.A. = M / 2
            </FormulaBox>

            <FormulaBox>
              O₃ + 2H⁺ + 2e⁻ → O₂ + H₂O
            </FormulaBox>
          </div>
        </PageCard>
      </div>
  );
}
