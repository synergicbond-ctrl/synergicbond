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

export default function EquivalentConceptPart1() {
  return (
    <div className="space-y-6 sm:space-y-8">
<PageCard title="Equivalent Concept — Basic Rule">
          <p>
            The number of <b>g-equivalents</b> of each reactant reacted must be
            same and the same number of <b>g-equivalents</b> of each product is
            formed.
          </p>

          <FormulaBox>
            No. of g-equivalents, n<sub>eq</sub> = W / E = weight in gm / gm
            equivalent weight
          </FormulaBox>

          <FormulaBox>
            Equivalent weight, E = molecular weight / n-factor
          </FormulaBox>

          <p>
            <b>n-factor</b> of any substance depends on its nature in that
            reaction.
          </p>

          <div className="border-t border-pink-300 pt-5">
            <h3 className="mb-3 text-lg font-bold text-red-600 underline">
              Eq. wt. of an element:
            </h3>

            <p>
              It represents the number of grams of the element which combines
              with or displaces <b>1 gm hydrogen</b> or <b>8 gm oxygen</b> or{" "}
              <b>35.5 gm chlorine</b>.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <WorkingLine>
                H atomic mass = 1
                <br />
                H<sup>+</sup> + e<sup>-</sup> → H
                <br />1 mole → 1 gm
              </WorkingLine>

              <WorkingLine>
                Cl atomic mass = 35.5
                <br />
                Cl<sup>-</sup> → Cl + e<sup>-</sup>
                <br />
                35.5 gm → 1 mole
              </WorkingLine>

              <WorkingLine>
                O atomic mass = 16
                <br />
                O<sup>2-</sup> → O + 2e<sup>-</sup>
                <br />
                16 gm → 2 mole
                <br />8 gm → 1 mole
              </WorkingLine>
            </div>
          </div>
        </PageCard>

        <PageCard title="Equivalent Weight of an Element from Oxide">
          <p>
            Let an element <b>M</b> forms an oxide:
          </p>

          <FormulaBox>
            M<sub>2</sub>O<sub>v</sub>
          </FormulaBox>

          <WorkingLine>
            Molecular mass of M<sub>2</sub>O<sub>v</sub> = 2 × A + v × 16
          </WorkingLine>

          <WorkingLine>
            Therefore, 16v gm oxygen combines with 2A gm M.
          </WorkingLine>

          <WorkingLine>
            Therefore, 8 gm oxygen combines with{" "}
            <b>(2A / 16v) × 8 = A / v gm</b> of M.
          </WorkingLine>

          <FormulaBox>
            E = A / v ⟹ Equivalent weight = Atomic weight / Valency
          </FormulaBox>

          <h3 className="text-lg font-bold text-pink-600">Examples:</h3>

          <div className="grid gap-3 md:grid-cols-2">
            <WorkingLine>
              Na<sub>2</sub>O ⇒ E<sub>Na</sub> = 23 / 1 = <b>23</b>
            </WorkingLine>

            <WorkingLine>
              NH<sub>3</sub> ⇒ E<sub>N</sub> = 14 / 3 = <b>4.67</b>
            </WorkingLine>

            <WorkingLine>
              PCl<sub>5</sub> ⇒ E<sub>P</sub> = 31 / 5 = <b>6.20</b>
            </WorkingLine>

            <WorkingLine>
              N<sub>2</sub>O<sub>5</sub> ⇒ E<sub>N</sub> = 14 / 5 ={" "}
              <b>2.80</b>
            </WorkingLine>

            <WorkingLine>
              Fe<sub>3</sub>O<sub>4</sub> ⇒ E<sub>Fe</sub> = 56 / (8 / 3) ={" "}
              <b>21</b>
            </WorkingLine>

            <WorkingLine>
              S<sub>2</sub>Cl<sub>2</sub> ⇒ E<sub>S</sub> = 32 / 1 ={" "}
              <b>32</b>
            </WorkingLine>
          </div>
        </PageCard>

        <PageCard title="Numerical Questions on Equivalent Weight">
          <div className="space-y-5">
            <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4">
              <h3 className="font-bold text-pink-700">
                Q. A metal oxide contains 40% oxygen by wt. Calculate the
                equivalent weight of metal.
              </h3>

              <div className="mt-3 space-y-2">
                <WorkingLine>
                  Metal oxide: oxygen = 40%, metal = 60%
                </WorkingLine>
                <WorkingLine>
                  40 gm oxygen combines with 60 gm metal.
                </WorkingLine>
                <WorkingLine>
                  Therefore, 8 gm oxygen combines with (60 / 40) × 8 ={" "}
                  <b>12 gm</b> metal.
                </WorkingLine>
                <FormulaBox>
                  E<sub>metal</sub> = 12
                </FormulaBox>
              </div>
            </div>

            <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4">
              <h3 className="font-bold text-pink-700">
                Q. The equivalent weight of a metal is 20. Calculate the mass
                percent of hydrogen in its hydride.
              </h3>

              <div className="mt-3 space-y-2">
                <WorkingLine>
                  20 gm metal + 1 gm hydrogen = 21 gm metal hydride
                </WorkingLine>
                <FormulaBox>
                  % of hydrogen = 1 / 21 × 100%
                </FormulaBox>
              </div>
            </div>

            <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4">
              <h3 className="font-bold text-pink-700">
                Q. 5.6 L Cl<sub>2</sub> gas at 0°C and 1 atm is treated with
                excess of a metal, by which 31.75 gm metal chloride is formed.
                What is the equivalent weight of metal?
              </h3>

              <div className="mt-3 space-y-2">
                <WorkingLine>
                  m<sub>chlorine</sub> = 5.6 / 22.4 × 71 ={" "}
                  <b>17.75 gm</b>
                </WorkingLine>

                <WorkingLine>
                  m<sub>metal combined</sub> = 31.75 - 17.75 = <b>14 gm</b>
                </WorkingLine>

                <WorkingLine>
                  E<sub>metal</sub> = 14 / 17.75 × 35.5
                </WorkingLine>

                <FormulaBox>
                  E<sub>metal</sub> = 28
                </FormulaBox>
              </div>
            </div>
          </div>
        </PageCard>
      </div>
  );
}
