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

export default function EquivalentConceptPart3() {
  return (
    <div className="space-y-6 sm:space-y-8">
<PageCard title="Equivalent Weight of Acidic Oxides and Base">
          <div className="space-y-4">
            <ReactionCard>
              E<sub>SO₃</sub> = 80 / 2 = <b>40</b>
            </ReactionCard>

            <FormulaBox>
              SO₃ + H₂O → H₂SO₄ → 2H⁺ + SO₄²⁻
            </FormulaBox>

            <ReactionCard>
              E<sub>N₂O₅</sub> = 108 / 2 = <b>54</b>
            </ReactionCard>

            <FormulaBox>
              N₂O₅ + H₂O → 2HNO₃ → 2H⁺ + 2NO₃⁻
            </FormulaBox>

            <ReactionCard>
              E<sub>P₄O₁₀</sub> = 284 / 12
            </ReactionCard>

            <FormulaBox>
              P₄O₁₀ + 6H₂O → 4H₃PO₄ → 12H⁺ + 4PO₄³⁻
            </FormulaBox>
          </div>

          <div className="mt-6 border-t border-amber-300 pt-5">
            <h3 className="text-lg font-bold text-red-600 underline">
              Eq. wt. of base:
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <WorkingLine>
                NaOH → Na⁺ + OH⁻
                <br />
                40 gm → 1 mole OH⁻
              </WorkingLine>

              <WorkingLine>
                NH₃ + H₂O → NH₄⁺ + OH⁻
                <br />
                NH₃ accepts H⁺ and furnishes OH⁻ in water.
              </WorkingLine>
            </div>

            <p>
              It represents the number of grams of the base which furnish 1 mole
              of OH⁻ ion in water or combines with 1 mole of H⁺ ion.
            </p>
          </div>
        </PageCard>

        <PageCard title="Equivalent Weight of Base — Formula and Examples">
          <FormulaBox>
            E<sub>base</sub> = Mol. wt. / Acidity
          </FormulaBox>

          <p>
            <b>Acidity</b> of a base represents moles of OH⁻ ions furnished by
            each mole of base in water or mole of H⁺ ions combined with each mole
            of base.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            <WorkingLine>
              E<sub>NaOH</sub> = 40 / 1 = <b>40</b>
              <br />= E<sub>Na⁺</sub> + 17
              <br />
              E<sub>OH⁻</sub> = 17
            </WorkingLine>

            <WorkingLine>
              E<sub>Ca(OH)₂</sub> = 74 / 2 = <b>37</b>
              <br />= E<sub>Ca²⁺</sub> + 17
            </WorkingLine>

            <WorkingLine>
              E<sub>Al(OH)₃</sub> = 78 / 3 = <b>26</b>
              <br />= E<sub>Al³⁺</sub> + 17
            </WorkingLine>

            <WorkingLine>
              E<sub>Na₂O</sub> = 62 / 2 = <b>31</b>
              <br />= E<sub>Na⁺</sub> + 8
            </WorkingLine>

            <WorkingLine>
              E<sub>Al₂O₃</sub> = 102 / 6 = <b>17</b>
              <br />= E<sub>Al³⁺</sub> + 8
            </WorkingLine>
          </div>

          <div className="space-y-3 rounded-lg border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <FormulaBox>
              Na₂O + H₂O → 2NaOH → 2Na⁺ + 2OH⁻
            </FormulaBox>

            <FormulaBox>
              Na₂O + 2HCl → 2NaCl + H₂O
            </FormulaBox>

            <WorkingLine>
              E<sub>O²⁻</sub> = 16 / 2 = <b>8</b>
            </WorkingLine>

            <FormulaBox>
              Al₂O₃ + 3H₂O → 2Al(OH)₃ → 2Al³⁺ + 6OH⁻
            </FormulaBox>

            <FormulaBox>
              Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="Special Cases of Bases and Acids">
          <div className="grid gap-3 md:grid-cols-2">
            <WorkingLine>
              E<sub>NH₃</sub> = 17 / 1 = <b>17</b>
            </WorkingLine>

            <WorkingLine>
              Structure of NH₃:
              <br />
              H—N—H
              <br />
              &nbsp;&nbsp;|
              <br />
              &nbsp;&nbsp;H
              <br />
              Lone pair on N is shown.
            </WorkingLine>

            <WorkingLine>
              E<sub>N₂H₄</sub> = 32 / 2 = <b>16</b>
            </WorkingLine>

            <WorkingLine>
              Structure of N₂H₄:
              <br />
              H—N—N—H
              <br />
              &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|
              <br />
              &nbsp;&nbsp;H&nbsp;&nbsp;H
              <br />
              Lone pair on each N is shown.
            </WorkingLine>

            <WorkingLine>
              E<sub>N₂H₄</sub> = 32 / 1 = <b>32</b>
            </WorkingLine>

            <WorkingLine>
              N₂H₄ → N₂H₅⁺
            </WorkingLine>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/30 p-4">
            <WorkingLine>
              E<sub>Al(OH)₃</sub> = 78 / 2
            </WorkingLine>

            <FormulaBox>
              Al(OH)₃ → Al(OH)²⁺
            </FormulaBox>
          </div>

          <div className="border-t border-pink-300 pt-5">
            <div className="grid gap-3 md:grid-cols-2">
              <WorkingLine>
                E<sub>H₂SO₄</sub> = 98 / 1
              </WorkingLine>

              <FormulaBox>
                H₂SO₄ → HSO₄⁻
              </FormulaBox>

              <WorkingLine>
                E<sub>H₃PO₄</sub> = 98 / 2
              </WorkingLine>

              <FormulaBox>
                H₃PO₄ → HPO₄²⁻
              </FormulaBox>
            </div>
          </div>
        </PageCard>

        <PageCard title="Equivalent Weight of Salt">
          <h3 className="text-lg font-bold text-red-600 underline">
            Eq. wt. of salt:
          </h3>

          <div className="rounded-lg border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <WorkingLine>
              CaCl₂
              <br />
              111 gm
              <br />
              2 mole e⁻ transfer
            </WorkingLine>

            <WorkingLine>
              Therefore, 111 / 2 gm corresponds to 1 mole e⁻ transfer.
            </WorkingLine>

            <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3 text-center font-bold">
              Ca₃(PO₄)₂ → 6e⁻
            </div>
          </div>

          <p>
            It represents the number of grams of the salt formed by the transfer
            of 1 mole of electrons, considering ionic nature of salt.
          </p>

          <FormulaBox>
            E<sub>salt</sub> = Mol. wt. / no. of e⁻ transferred in salt
            formation
          </FormulaBox>

          <FormulaBox>
            E<sub>salt</sub> = Mol. wt. / no. of metal atoms × its valency
          </FormulaBox>

          <div className="grid gap-3 md:grid-cols-2">
            <WorkingLine>
              E<sub>NaCl</sub> = 58.5 / 1 × 1 = <b>58.5</b>
              <br />= E<sub>Na⁺</sub> + E<sub>Cl⁻</sub>
            </WorkingLine>

            <WorkingLine>
              E<sub>Na₂CO₃</sub> = 106 / 2 × 1 = <b>53</b>
              <br />= E<sub>Na⁺</sub> + E<sub>CO₃²⁻</sub>
            </WorkingLine>

            <WorkingLine>
              E<sub>Al₂(SO₄)₃</sub> = 342 / 2 × 3 = <b>57</b>
              <br />
              342 = 2 × 27 + 3 × 96
            </WorkingLine>

            <WorkingLine>
              E<sub>Al₂(SO₄)₃</sub> = 27 / 3 + 96 / 2
              <br />= E<sub>Al³⁺</sub> + E<sub>SO₄²⁻</sub>
            </WorkingLine>
          </div>
        </PageCard>
      </div>
  );
}