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

export default function EquivalentConceptPart2() {
  return (
    <div className="space-y-6 sm:space-y-8">
<PageCard title="Equivalent Weight from Gaseous Oxide and Hydrogen Gas">
          <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <h3 className="font-bold text-pink-700">
              Q. A solid element combines with excess of oxygen to form a gaseous oxide
              {" "}(V.D. = 50), without any change in volume of system at constant P and T.
              Calculate the equivalent weight of solid element.
            </h3>

            <div className="mt-4 space-y-3">
              <WorkingLine>
                At constant P and T:
                <br />
                PV = nRT
              </WorkingLine>

              <WorkingLine>
                Since volume of system does not change,
                <br />
                number of moles of gaseous reactant = number of moles of gaseous product.
              </WorkingLine>

              <FormulaBox>
                Element(s) + n O<sub>2</sub>(g) → n oxide(g)
              </FormulaBox>

              <WorkingLine>
                V.D. of oxide = 50
                <br />
                Molecular weight of oxide = 2 × V.D. = 2 × 50 = 100
              </WorkingLine>

              <WorkingLine>
                Mass of n oxide = n × 100 gm
              </WorkingLine>

              <WorkingLine>
                Mass of n O<sub>2</sub> = n × 32 gm
              </WorkingLine>

              <WorkingLine>
                Mass of element = 100n - 32n = <b>68n gm</b>
              </WorkingLine>

              <WorkingLine>
                Therefore, 32n gm oxygen combines with 68n gm element.
              </WorkingLine>

              <WorkingLine>
                Therefore, 8 gm oxygen combines with{" "}
                <b>(68n / 32n) × 8</b> gm element.
              </WorkingLine>

              <FormulaBox>
                E<sub>element</sub> = 68n / 32n × 8 = <b>17</b>
              </FormulaBox>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
            <h3 className="font-bold text-slate-900">
              Q. 0.36 gm of a metal is reacted with excess of dil. acid by which
              336 mL H<sub>2</sub> gas is produced at 0°C and 1 atm. What is the
              equivalent weight of metal?
            </h3>

            <div className="mt-4 space-y-3">
              <WorkingLine>
                m<sub>H₂ produced</sub> = 336 / 22400 × 2 = <b>0.03 gm</b>
              </WorkingLine>

              <WorkingLine>
                0.03 gm H<sub>2</sub> corresponds to 1 gm equivalent hydrogen basis.
              </WorkingLine>

              <FormulaBox>
                E<sub>metal</sub> = 0.36 / 0.03 × 1 = <b>12</b>
              </FormulaBox>
            </div>
          </div>
        </PageCard>

        <PageCard title="Equivalent Weight of Ions">
          <h3 className="text-lg font-bold text-red-600 underline">
            Eq. wt. of ions:
          </h3>

          <div className="rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <WorkingLine>
              SO<sub>4</sub><sup>2-</sup>
              <br />
              2 mole unit charge → 96 gm SO<sub>4</sub><sup>2-</sup>
            </WorkingLine>

            <FormulaBox>
              Therefore, 1 mole unit charge → 96 / 2 gm
            </FormulaBox>
          </div>

          <p>
            It represents the number of grams of ion per mole of unit charge.
          </p>

          <FormulaBox>
            E<sub>ion</sub> = ionic wt. / magnitude of rel. charge on ion
          </FormulaBox>

          <div className="grid gap-3 md:grid-cols-2">
            <WorkingLine>
              E<sub>Na<sup>+</sup></sub> = 23 / 1 = <b>23</b>
            </WorkingLine>

            <WorkingLine>
              E<sub>Ca<sup>2+</sup></sub> = 40 / 2 = <b>20</b>
            </WorkingLine>

            <WorkingLine>
              E<sub>Al<sup>3+</sup></sub> = 27 / 3 = <b>9</b>
            </WorkingLine>

            <WorkingLine>
              E<sub>Fe<sup>2+</sup></sub> = 56 / 2 = <b>28</b>
            </WorkingLine>
          </div>

          <FormulaBox>
            E<sub>metal</sub> = E<sub>metal ion</sub>
          </FormulaBox>

          <div className="grid gap-3 md:grid-cols-2">
            <WorkingLine>
              E<sub>OH<sup>-</sup></sub> = 17 / 1 = <b>17</b>
            </WorkingLine>

            <WorkingLine>
              E<sub>CO<sub>3</sub><sup>2-</sup></sub> = 60 / 2 = <b>30</b>
            </WorkingLine>

            <WorkingLine>
              E<sub>SO<sub>4</sub><sup>2-</sup></sub> = 96 / 2 = <b>48</b>
            </WorkingLine>

            <WorkingLine>
              E<sub>NO<sub>3</sub><sup>-</sup></sub> = 62 / 1 = <b>62</b>
            </WorkingLine>

            <WorkingLine>
              E<sub>PO<sub>4</sub><sup>3-</sup></sub> = 95 / 3 ={" "}
              <b>31.67</b>
            </WorkingLine>
          </div>
        </PageCard>

        <PageCard title="Equivalent Weight of Acid">
          <h3 className="text-lg font-bold text-red-600 underline">
            Eq. wt. of acid:
          </h3>

          <div className="rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <FormulaBox>
              H<sub>2</sub>SO<sub>4</sub> → 2H<sup>+</sup> + SO<sub>4</sub>
              <sup>2-</sup>
            </FormulaBox>

            <WorkingLine>
              98 gm H<sub>2</sub>SO<sub>4</sub> → 2 mole H<sup>+</sup>
            </WorkingLine>

            <WorkingLine>
              Therefore, 98 / 2 gm H<sub>2</sub>SO<sub>4</sub> → 1 mole H
              <sup>+</sup>
            </WorkingLine>
          </div>

          <p>
            It represents the number of grams of the acid which furnish 1 mole of
            H<sup>+</sup> ion in water.
          </p>

          <FormulaBox>
            E<sub>acid</sub> = Mol. wt. / Basicity
          </FormulaBox>

          <p>
            <Highlight>Basicity</Highlight> of an acid represents number of H
            <sup>+</sup> ions furnished by each mole of acid, in water.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            <WorkingLine>
              E<sub>HCl</sub> = 36.5 / 1 = <b>36.5</b>
              <br />= 1 + E<sub>Cl<sup>-</sup></sub>
              <br />
              E<sub>H<sup>+</sup></sub> = 1
            </WorkingLine>

            <WorkingLine>
              E<sub>H₂SO₄</sub> = 98 / 2 = <b>49</b>
              <br />= 1 + E<sub>SO₄<sup>2-</sup></sub>
            </WorkingLine>

            <WorkingLine>
              E<sub>H₃PO₄</sub> = 98 / 3 = <b>32.67</b>
              <br />= 1 + E<sub>PO₄<sup>3-</sup></sub>
            </WorkingLine>

            <WorkingLine>
              E<sub>H₃PO₃</sub> = 82 / 2 = <b>41</b>
              <br />= 1 + E<sub>HPO₃<sup>2-</sup></sub>
            </WorkingLine>

            <WorkingLine>
              E<sub>H₃PO₂</sub> = 66 / 1 = <b>66</b>
              <br />= 1 + E<sub>H₂PO₂<sup>-</sup></sub>
            </WorkingLine>
          </div>
        </PageCard>

        <PageCard title="Basicity Structures and Acid Anhydride Examples">
          <WorkingLine>
            E<sub>H₃BO₃</sub> = 62 / 1 = <b>62</b>
            <br />
            B = 11
          </WorkingLine>

          <div className="grid gap-4 md:grid-cols-3">
            <MiniStructure title="H₃PO₄">
              H—O
              <br />
              &nbsp;&nbsp;\<br />
              H—O—P=O
              <br />
              &nbsp;&nbsp;/<br />
              H—O
            </MiniStructure>

            <MiniStructure title="H₃PO₃">
              H—P=O
              <br />
              &nbsp;/ \ <br />
              H—O&nbsp;&nbsp;O—H
            </MiniStructure>

            <MiniStructure title="H₃PO₂">
              H—P=O
              <br />
              &nbsp;/ \ <br />
              H&nbsp;&nbsp;&nbsp;O—H
            </MiniStructure>
          </div>

          <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <h3 className="font-bold text-pink-700">
              H<sub>3</sub>BO<sub>3</sub> → Lewis acid
            </h3>

            <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1.3fr]">
              <MiniStructure title="B(OH)₃">
                &nbsp;&nbsp;O—H
                <br />
                &nbsp;&nbsp;|<br />
                H—O—B—O—H
                <br />
                &nbsp;&nbsp;6e<sup>-</sup>
              </MiniStructure>

              <div className="space-y-3">
                <WorkingLine>
                  None of H-atom is replaceable.
                </WorkingLine>

                <FormulaBox>
                  B(OH)<sub>3</sub> + H<sub>2</sub>O → B(OH)<sub>4</sub>
                  <sup>-</sup> + H<sup>+</sup>
                </FormulaBox>

                <FormulaBox>
                  n-factor = 1
                </FormulaBox>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 text-amber-200 p-4">
            <h3 className="font-bold text-amber-800">
              Acidic oxide / acid anhydride example:
            </h3>

            <WorkingLine>
              E<sub>CO₂</sub> = 44 / 2 = <b>22</b>
            </WorkingLine>

            <FormulaBox>
              CO<sub>2</sub> + H<sub>2</sub>O → H<sub>2</sub>CO<sub>3</sub> → 2H
              <sup>+</sup> + CO<sub>3</sub><sup>2-</sup>
            </FormulaBox>
          </div>
        </PageCard>
      </div>
  );
}
