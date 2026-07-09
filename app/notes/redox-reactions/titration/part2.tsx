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

export default function TitrationPart2() {
  return (
    <div className="space-y-6 sm:space-y-8">
<PageCard title="Primary Standard Solution">
          <h3 className="text-2xl font-black text-red-500 underline">
            Primary standard solution:
          </h3>

          <p>
            Sol<sup>n</sup> of which conc. is known more accurately.
          </p>

          <p className="font-semibold text-blue-800">
            For primary standard solution:
          </p>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
            <h4 className="font-bold text-slate-900">
              (i) NaOH as solute
            </h4>

            <CrossedOut>
              NaOH
              <br />
              4 gm
              <br />
              4 / 40 mole
            </CrossedOut>

            <FormulaBox>
              NaOH + CO<sub>2</sub> → NaHCO<sub>3</sub>
            </FormulaBox>

            <FormulaBox>
              NaHCO<sub>3</sub> + CO<sub>2</sub> → Na<sub>2</sub>CO
              <sub>3</sub>
            </FormulaBox>

            <RuleBox>
              Solute should not be reactive towards air and solvent.
            </RuleBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h4 className="font-bold text-blue-900">
              (ii) Na<sub>2</sub>CO<sub>3</sub> as solute
            </h4>

            <WorkingLine>
              Na<sub>2</sub>CO<sub>3</sub> ✓
              <br />
              10 gm
              <br />
              10 / 106 mole
            </WorkingLine>

            <FormulaBox>
              Na<sub>2</sub>CO<sub>3</sub> + air moisture → Na<sub>2</sub>CO
              <sub>3</sub> · 10H<sub>2</sub>O
            </FormulaBox>

            <WorkingLine>
              Na<sub>2</sub>CO<sub>3</sub> · 10H<sub>2</sub>O ✓
              <br />
              10 / 286 mole
            </WorkingLine>

            <RuleBox>
              Solute should not be hygroscopic.
            </RuleBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
            <h4 className="font-bold text-purple-900">
              (iii) Solute of higher molar mass is preferred.
            </h4>

            <div className="grid gap-4 md:grid-cols-2">
              <WorkingLine>
                Low molar mass example:
                <br />
                4.0 / 40
                <br />
                4.1 / 40
              </WorkingLine>

              <WorkingLine>
                Higher molar mass example:
                <br />
                4.0 / 400
                <br />
                4.1 / 400
                <br />
                Higher molar mass → error min.
              </WorkingLine>
            </div>
          </div>

          <RuleBox>
            (iv) Temp. should be kept constant.
          </RuleBox>
        </PageCard>

        <PageCard title="Examples of Primary Standards, End Point, Equivalent Point and Indicator">
          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <h3 className="text-xl font-black text-pink-700 underline">
              Acid:
            </h3>

            <WorkingLine>
              H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> · 2H<sub>2</sub>O,
              oxalic acid
            </WorkingLine>

            <DiagramBox title="Terephthalic acid">
              <div className="mx-auto w-fit rounded-xl border border-slate-800 bg-slate-950/40 p-4 font-mono text-lg">
                &nbsp;&nbsp;&nbsp;COOH
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;|
                <br />
                ⌬
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;|
                <br />
                &nbsp;&nbsp;&nbsp;COOH
              </div>
              <p className="mt-2 font-semibold">Terephthalic acid, etc.</p>
            </DiagramBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="text-xl font-black text-blue-700 underline">
              Base:
            </h3>

            <WorkingLine>
              Na<sub>2</sub>CO<sub>3</sub> · 10H<sub>2</sub>O, Na<sub>2</sub>B
              <sub>4</sub>O<sub>7</sub> · 10H<sub>2</sub>O, etc.
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-orange-200 bg-orange-50 p-4">
            <h3 className="text-xl font-black text-orange-700 underline">
              Oxidising agent:
            </h3>

            <FormulaBox>
              K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>
            </FormulaBox>

            <FormulaBox>
              KMnO<sub>4</sub> + H<sub>2</sub>O{" "}
              <span className="mx-2 text-sm font-bold text-slate-600">slow</span>
              → MnO<sub>2</sub> + O<sub>2</sub>
            </FormulaBox>

            <WorkingLine>
              However, freshly prepared KMnO<sub>4</sub> sol<sup>n</sup> may be
              used.
            </WorkingLine>
          </div>

          <div className="space-y-4 rounded-2xl border border-green-200 bg-green-50 p-4">
            <h3 className="text-xl font-black text-green-700 underline">
              Reducing agent:
            </h3>

            <WorkingLine>
              H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> · 2H<sub>2</sub>O, Na
              <sub>2</sub>S<sub>2</sub>O<sub>3</sub> · 5H<sub>2</sub>O, etc.
            </WorkingLine>

            <WorkingLine>
              Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> · 5H<sub>2</sub>O =
              Hypo
            </WorkingLine>
          </div>

          <div className="border-t border-pink-300 pt-5">
            <h3 className="text-xl font-black text-red-600 underline">
              End point:
            </h3>

            <p>
              It is the stage of titration where sudden change in colour of sol
              <sup>n</sup> is observed and the experiment of titration is
              stopped.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-black text-red-600 underline">
              Equivalent point:
            </h3>

            <p>
              It is the stage of titration where complete rxn occur between the
              sol<sup>n</sup>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-black text-red-600 underline">
              Indicator:
            </h3>

            <p>
              It is the substance added in very small amount in the sol
              <sup>n</sup> in beaker or conical flask, which result sudden change
              in colour of solution.
            </p>
          </div>
        </PageCard>

        <PageCard title="Perfect Indicator and Types of Titration">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <p>
              A perfect indicator makes end point and equivalent point identical.
              Sudden change in colour of sol<sup>n</sup> occur exactly at that
              drop, at which complete rxn occur.
            </p>
          </div>

          <h3 className="text-2xl font-black text-red-500 underline">
            Types of titration:
          </h3>

          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <h4 className="text-lg font-black text-pink-700">
              1. Acid - Base Titration
            </h4>

            <div className="grid gap-4 md:grid-cols-2">
              <WorkingLine>
                (i) Acidimetry:
                <br />
                standard sol<sup>n</sup> is acid
                <br />
                <Tag>conc. of base</Tag>
              </WorkingLine>

              <WorkingLine>
                (ii) Alkalimetry:
                <br />
                standard sol<sup>n</sup> is base
                <br />
                <Tag>conc. of acid</Tag>
              </WorkingLine>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
            <h4 className="text-lg font-black text-purple-700">
              2. Redox titration
            </h4>

            <div className="grid gap-3 md:grid-cols-2">
              <WorkingLine>
                Permanganatometry
                <br />
                KMnO<sub>4</sub> sol<sup>n</sup> is standard.
              </WorkingLine>

              <WorkingLine>
                Dichromatometry
                <br />
                K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> sol<sup>n</sup> is
                standard.
              </WorkingLine>

              <WorkingLine>
                Iodimetry
                <br />
                I<sub>2</sub> sol<sup>n</sup> is standard.
              </WorkingLine>

              <WorkingLine>
                Iodometry
                <br />
                I<sup>-</sup> sol<sup>n</sup> is standard.
              </WorkingLine>

              <WorkingLine>etc.</WorkingLine>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <h4 className="text-lg font-black text-amber-800">
              3. Precipitation Titration:
            </h4>

            <FormulaBox>
              AgNO<sub>3</sub>(aq) + NaCl(aq) → AgCl↓ + NaNO<sub>3</sub>(aq)
            </FormulaBox>

            <div className="grid gap-4 md:grid-cols-3">
              <WorkingLine>
                AgNO<sub>3</sub>(aq)
                <br />
                standard / reagent side
              </WorkingLine>

              <WorkingLine>
                NaCl(aq)
                <br />
                conc. is marked below this solution in the diagram.
              </WorkingLine>

              <WorkingLine>
                AgCl↓
                <br />
                white precipitate formed.
                <br />
                “wt / mass” marking is shown near precipitate in source.
              </WorkingLine>
            </div>
          </div>
        </PageCard>
      </div>
  );
}
