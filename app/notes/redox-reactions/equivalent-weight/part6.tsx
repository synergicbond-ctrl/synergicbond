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

export default function EquivalentConceptPart6() {
  return (
    <div className="space-y-6 sm:space-y-8">
<PageCard title="n-Factor of Components in Redox Reaction">
          <p>
            In any redox reaction, <b>n-factor</b> of any component is given in
            terms of e<sup>-</sup> involved per particle in the reaction. They
            are never considered as acid, base or salt for n-factor.
          </p>

          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <h3 className="font-bold text-blue-800">
              Example: Zn + HNO<sub>3</sub>
            </h3>

            <ReactionBox>
              3Zn<sup>0</sup> + 8HNO<sub>3</sub> → 3Zn(NO<sub>3</sub>)
              <sub>2</sub> + 2NO + 4H<sub>2</sub>O
            </ReactionBox>

            <WorkingLine>
              Oxidation states shown:
              <br />
              Zn: 0 → +2
              <br />
              N in HNO<sub>3</sub>: +5 → N in NO: +2
              <br />
              Total electron involved = <b>6e⁻</b>
            </WorkingLine>

            <div className="grid gap-3 md:grid-cols-2">
              <WorkingLine>
                For Zn:
                <br />
                n<sub>f</sub> = <b>2</b>
              </WorkingLine>

              <WorkingLine>
                For HNO<sub>3</sub>:
                <br />
                n<sub>f</sub> = 6 / 8 = <b>3 / 4</b>
              </WorkingLine>

              <WorkingLine>
                For Zn(NO<sub>3</sub>)<sub>2</sub>:
                <br />
                n<sub>f</sub> = <b>2</b>
              </WorkingLine>

              <WorkingLine>
                For NO:
                <br />
                n<sub>f</sub> = <b>3</b>
              </WorkingLine>

              <WorkingLine>
                For H<sub>2</sub>O:
                <br />
                n<sub>f</sub> = 6 / 4 = <b>3 / 2</b>
              </WorkingLine>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <h3 className="font-bold text-orange-800">
              Example: Cl<sub>2</sub> + NaOH
            </h3>

            <ReactionBox>
              3Cl<sub>2</sub><sup>0</sup> + 6NaOH → NaClO<sub>3</sub> + 5NaCl
              + 3H<sub>2</sub>O
            </ReactionBox>

            <WorkingLine>
              Cl in NaClO<sub>3</sub> = +5
              <br />
              Cl in NaCl = -1
              <br />
              Electron involved = <b>5e⁻</b>
            </WorkingLine>

            <FormulaBox>
              n<sub>f</sub> for Cl<sub>2</sub> = 5 / 6
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 text-violet-200 p-4">
            <h3 className="font-bold text-purple-800">
              Example: MnO<sub>2</sub> + HCl
            </h3>

            <ReactionBox>
              MnO<sub>2</sub> + 4HCl → MnCl<sub>2</sub> + Cl<sub>2</sub> +
              2H<sub>2</sub>O
            </ReactionBox>

            <WorkingLine>
              Mn: +4 → +2
              <br />
              Cl: -1 → 0
              <br />
              Electron involved = <b>2e⁻</b>
            </WorkingLine>

            <FormulaBox>
              n<sub>f</sub> for HCl = 2 / 4 = <b>1 / 2</b>
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <h3 className="font-bold text-pink-800">
              Example: KMnO<sub>4</sub>, H<sub>2</sub>SO<sub>4</sub>, HCl
            </h3>

            <ReactionBox>
              2KMnO<sub>4</sub> + 3H<sub>2</sub>SO<sub>4</sub> + 10HCl →
              K<sub>2</sub>SO<sub>4</sub> + 2MnSO<sub>4</sub> + 8H<sub>2</sub>O
              + 5Cl<sub>2</sub>
            </ReactionBox>

            <WorkingLine>
              Mn in KMnO<sub>4</sub>: +7 → Mn in MnSO<sub>4</sub>: +2
              <br />
              Cl in HCl: -1 → Cl<sub>2</sub>: 0
              <br />
              Total electron involved = <b>10e⁻</b>
            </WorkingLine>

            <WorkingLine>
              For H<sub>2</sub>SO<sub>4</sub>, n<sub>f</sub> is not taken as 2.
              It is taken from total electron involved per particle in the
              reaction.
            </WorkingLine>

            <FormulaBox>
              n<sub>f</sub> for H<sub>2</sub>SO<sub>4</sub> = 10 / 3
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
            <h3 className="font-bold text-slate-900">
              Example: Pb + PbO<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub>
            </h3>

            <ReactionBox>
              Pb<sup>0</sup> + PbO<sub>2</sub> + 2H<sub>2</sub>SO<sub>4</sub> →
              2PbSO<sub>4</sub> + 2H<sub>2</sub>O
            </ReactionBox>

            <WorkingLine>
              Pb in PbO<sub>2</sub>: +4 → Pb in PbSO<sub>4</sub>: +2
              <br />
              Electron involved = <b>2e⁻</b>
            </WorkingLine>

            <FormulaBox>
              n<sub>f</sub> = 2 / 2 = <b>1</b>
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="Equivalent Volume of a Gas">
          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <ReactionBox>
              H<sub>3</sub>PO<sub>4</sub> + 3NaOH → Na<sub>3</sub>PO<sub>4</sub>{" "}
              + 3H<sub>2</sub>O
            </ReactionBox>

            <WorkingLine>
              3H<sup>+</sup> involved
            </WorkingLine>

            <FormulaBox>
              n<sub>f</sub> = 3 / 3 = <b>1</b>
            </FormulaBox>
          </div>

          <h3 className="text-lg font-bold text-red-600 underline">
            Equivalent volume of a gas:
          </h3>

          <p>
            It is the volume of gas corresponding to <b>1 g-equivalent weight</b>,
            in the given condition.
          </p>

          <div className="space-y-3 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <WorkingLine>
              M gm of gas occupy V<sub>m</sub> volume
            </WorkingLine>

            <WorkingLine>
              E gm of gas occupy (V<sub>m</sub> / M) × E volume
            </WorkingLine>

            <FormulaBox>
              E = M / n-factor
            </FormulaBox>

            <FormulaBox>
              Equivalent volume = V<sub>m</sub> / n-factor
            </FormulaBox>
          </div>

          <h3 className="text-lg font-bold text-pink-600 underline">
            Eq. volume of some gases at STP:
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            <WorkingLine>
              1. (E.V.)<sub>CH₄</sub> in combustion:
              <br />
              C in CH<sub>4</sub>: -4 → C in CO<sub>2</sub>: +4
              <br />
              n-factor = 8
              <br />
              <b>(E.V.) = 22.7 L / 8</b>
            </WorkingLine>

            <WorkingLine>
              2. (E.V.)<sub>SO₂</sub> as R.A.:
              <br />
              S in SO<sub>2</sub>: +4 → S in SO<sub>3</sub>: +6
              <br />
              n-factor = 2
              <br />
              <b>(E.V.) = 22.7 L / 2</b>
            </WorkingLine>
          </div>
        </PageCard>

        <PageCard title="Principle of Equivalence">
          <FormulaBox>
            n<sub>eq</sub> = W / E = n × n-factor = V(ml) × N / 1000
          </FormulaBox>

          <h3 className="text-lg font-bold text-pink-600 underline">
            Principle of equivalence
          </h3>

          <p>
            Number of g-equivalents of all the reactants reacted must be same
            and the same number of g-equivalents of each product will form.
          </p>

          <p>
            Number of equivalents remain same because in any reaction, the number
            of electron, proton or other unit charge involved remain same for all
            components.
          </p>

          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <PinkQuestion>
              Q. How many gm NaOH is needed for complete neutralization of 19.6
              gm H<sub>2</sub>SO<sub>4</sub>?
            </PinkQuestion>

            <FormulaBox>
              n<sub>eq</sub> NaOH = n<sub>eq</sub> H<sub>2</sub>SO<sub>4</sub>
            </FormulaBox>

            <WorkingLine>
              (W / 40) × 1 = (19.6 / 98) × 2
            </WorkingLine>

            <FormulaBox>
              W = <b>16 gm</b>
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 text-violet-200 p-4">
            <PinkQuestion>
              Q. How many gm H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> · 2H
              <sub>2</sub>O(s) is needed for complete reduction of 7.9 gm KMnO
              <sub>4</sub> in presence of H<sub>2</sub>SO<sub>4</sub>?{" "}
              <span className="font-bold">(M = 158)</span>
            </PinkQuestion>

            <WorkingLine>
              C in H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> · 2H<sub>2</sub>O:
              +3 → C in CO<sub>2</sub>: +4
            </WorkingLine>

            <FormulaBox>
              n<sub>eq</sub> H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> · 2H
              <sub>2</sub>O = n<sub>eq</sub> KMnO<sub>4</sub>
            </FormulaBox>

            <WorkingLine>
              (W / 126) × 2 = (7.9 / 158) × 5
            </WorkingLine>

            <FormulaBox>
              W = <b>15.75 gm</b>
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="Numericals Based on Principle of Equivalence">
          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <PinkQuestion>
              Q. How many gm Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> is needed
              for complete reduction of 0.02 mole I<sub>2</sub>?
            </PinkQuestion>

            <FormulaBox>
              n<sub>eq</sub> Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> =
              n<sub>eq</sub> I<sub>2</sub>
            </FormulaBox>

            <WorkingLine>
              (W / 158) × 1 = 0.02 × 2
            </WorkingLine>

            <FormulaBox>
              W = <b>6.32 gm</b>
            </FormulaBox>

            <ReactionBox>
              Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> + I<sub>2</sub> →
              Na<sub>2</sub>S<sub>4</sub>O<sub>6</sub> + NaI
            </ReactionBox>

            <WorkingLine>
              S in Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>: +2 → S in Na
              <sub>2</sub>S<sub>4</sub>O<sub>6</sub>: +2.5
              <br />
              I<sub>2</sub>: 0 → I<sup>-</sup>: -1
            </WorkingLine>

            <FormulaBox>
              n<sub>f</sub> = 0.5 × 2 = <b>1</b>
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <PinkQuestion>
              Q. What volume of O<sub>2</sub> gas is needed at 0°C, 1 atm for
              complete combustion of 4 gm CH<sub>4</sub>?
            </PinkQuestion>

            <FormulaBox>
              n<sub>eq</sub> CH<sub>4</sub> = n<sub>eq</sub> O<sub>2</sub>
            </FormulaBox>

            <WorkingLine>
              C in CH<sub>4</sub>: -4 → C in CO<sub>2</sub>: +4
            </WorkingLine>

            <WorkingLine>
              (4 / 16) × 8 = (V / 22.4 L) × 4
            </WorkingLine>

            <FormulaBox>
              V = <b>11.2 L</b>
            </FormulaBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <PinkQuestion>
              Q. How many gm KClO<sub>3</sub> should be decomposed completely to
              give 2.27 L O<sub>2</sub> gas at STP?
            </PinkQuestion>

            <FormulaBox>
              n<sub>eq</sub> KClO<sub>3</sub> = n<sub>eq</sub> O<sub>2</sub>
            </FormulaBox>

            <WorkingLine>
              (W / 122.5) × 6 = (2.27 / 22.7) × 4
            </WorkingLine>

            <FormulaBox>
              W = <b>8.167 gm</b>
            </FormulaBox>

            <ReactionBox>
              2KClO<sub>3</sub> → 2KCl + 3O<sub>2</sub>
            </ReactionBox>

            <WorkingLine>
              Total electron involved = <b>12e⁻</b>
            </WorkingLine>

            <div className="grid gap-3 md:grid-cols-2">
              <WorkingLine>
                For KClO<sub>3</sub>:
                <br />
                n<sub>f</sub> = 12 / 2 = <b>6</b>
              </WorkingLine>

              <WorkingLine>
                For O<sub>2</sub>:
                <br />
                n<sub>f</sub> = 12 / 3 = <b>4</b>
              </WorkingLine>
            </div>
          </div>
        </PageCard>
      </div>
  );
}
