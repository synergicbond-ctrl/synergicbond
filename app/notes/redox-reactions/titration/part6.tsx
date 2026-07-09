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

export default function TitrationPart6() {
  return (
    <div className="space-y-6 sm:space-y-8">
<PageCard title="Fe₂O₃ Sample, Zn Dust and KMnO₄ Titration">
          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <QuestionBox>
              Q. 4.8 gm Fe<sub>2</sub>O<sub>3</sub> sample{" "}
              <b>(40% pure)</b> is dissolved in excess of dilute acid and then
              treated with Zn dust. All iron is converted to Fe<sup>2+</sup> and
              the sol<sup>n</sup> is diluted to 500 ml. What volume of M/20 —
              KMnO<sub>4</sub> sol<sup>n</sup> is needed to oxidise all Fe
              <sup>2+</sup> present in 20 ml of diluted sol<sup>n</sup>, in
              presence of H<sub>2</sub>SO<sub>4</sub>?
            </QuestionBox>

            <div className="grid gap-4 md:grid-cols-3">
              <WorkingLine>
                Fe<sub>2</sub>O<sub>3</sub>
                <br />
                acid
                <br />
                n<sub>f</sub> = 3
              </WorkingLine>

              <WorkingLine>
                Fe<sup>3+</sup>
                <br />
                Zn
                <br />
                n<sub>f</sub> = 1
              </WorkingLine>

              <WorkingLine>
                Fe<sup>2+</sup>
                <br />
                500 ml
                <br />
                20 ml = ? ml M/20 — KMnO<sub>4</sub>
              </WorkingLine>
            </div>

            <WorkingLine>
              Pure Fe<sub>2</sub>O<sub>3</sub> = 4.8 × 40 / 100 gm
            </WorkingLine>

            <WorkingLine>
              4.8 × 0.4 / 160 mole = x mole
            </WorkingLine>

            <WorkingLine>
              From Fe<sub>2</sub>O<sub>3</sub>, Fe<sup>2+</sup> formed = 2x mole.
            </WorkingLine>

            <WorkingLine>
              In 20 ml of 500 ml diluted solution:
              <br />
              Fe<sup>2+</sup> present = (2x / 500) × 20 mole
            </WorkingLine>

            <FormulaBox>
              n<sub>eq</sub> Fe<sup>2+</sup> = n<sub>eq</sub> MnO<sub>4</sub>
              <sup>-</sup>
            </FormulaBox>

            <WorkingLine>
              (40x / 500) × 1 = ((V × 1 / 20) / 1000) × 5
            </WorkingLine>

            <FormulaBox>
              V = 3.84 ml
            </FormulaBox>
          </div>
        </PageCard>

        <PageCard title="Hardness of Water — Definition and Soap Structure">
          <h3 className="text-2xl font-black text-rose-200 underline">
            Hardness of water
          </h3>

          <p>
            It is the property of water to prevent foam formation with{" "}
            <b>soaps</b> or <b>detergents</b>.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <FormulaBox>
              RCOO<sup>-</sup>Na<sup>+</sup>
            </FormulaBox>

            <FormulaBox>
              RCOO<sup>-</sup>K<sup>+</sup>
            </FormulaBox>
          </div>

          <WorkingLine>
            C<sub>17</sub>H<sub>35</sub>COO<sup>-</sup>Na<sup>+</sup>
            &nbsp; — sod. stearate
          </WorkingLine>

          <div className="grid gap-4 md:grid-cols-2">
            <DiagramBox title="Soap molecule">
              <div className="mx-auto flex max-w-md items-center justify-center gap-4">
                <div className="h-10 w-40 rounded-full border-2 border-slate-700 bg-slate-900/30">
                  <div className="mt-2 text-sm font-semibold">zig-zag hydrocarbon chain</div>
                </div>
                <div className="rounded-full border-2 border-blue-500/30 bg-slate-950/40 px-4 py-3 font-bold">
                  COO<sup>-</sup>
                </div>
                <div className="text-2xl font-black">—</div>
                <div className="rounded-full bg-blue-100 px-3 py-1 font-bold">-</div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <WorkingLine>Hydrophobic part</WorkingLine>
                <WorkingLine>Hydrophilic part</WorkingLine>
              </div>
            </DiagramBox>

            <DiagramBox title="Soap at water surface">
              <div className="mx-auto h-40 max-w-sm rounded-xl border-2 border-blue-500/30 bg-slate-950/40 p-3">
                <div className="h-16 border-b border-blue-400">
                  <div className="flex justify-around pt-3 text-rose-200">
                    <span>⊖</span>
                    <span>⊖</span>
                    <span>⊖</span>
                    <span>⊖</span>
                  </div>
                </div>
                <div className="pt-5 text-blue-600">water</div>
              </div>
              <p className="mt-3 text-sm font-semibold">
                Surface arrangement of soap ions at the water interface.
              </p>
            </DiagramBox>
          </div>

          <DiagramBox title="Micelle formation shown">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
              <div className="relative h-56 w-56 rounded-full border-2 border-rose-300/30 bg-[rgba(251,113,133,0.06)]">
                <div className="absolute left-1/2 top-1/2 rounded-full bg-[rgba(251,191,36,0.10)] px-3 py-2 font-bold text-rose-200">
                  oil
                </div>
                {Array.from({ length: 12 }).map((_, index) => (
                  <span
                    key={index}
                    className="absolute rounded-full bg-slate-800/80 px-2 py-1 text-rose-200 shadow-sm"
                    style={{
                      left: `${50 + 42 * Math.cos((index * Math.PI) / 6)}%`,
                      top: `${50 + 42 * Math.sin((index * Math.PI) / 6)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    ⊖
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="relative h-32 w-32 rounded-full border-2 border-rose-300/30 bg-[rgba(251,191,36,0.10)]">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-rose-200">
                    oil
                  </div>
                  <span className="absolute right-0 top-1/2 rounded-full bg-slate-800/80 px-2 py-1 text-rose-200">
                    ⊖
                  </span>
                  <span className="absolute left-3 top-5 rounded-full bg-slate-800/80 px-2 py-1 text-rose-200">
                    ⊖
                  </span>
                  <span className="absolute bottom-3 left-1/2 rounded-full bg-slate-800/80 px-2 py-1 text-rose-200">
                    ⊖
                  </span>
                </div>

                <div className="font-bold text-rose-200">⊖ --- H₂O --- ⊖</div>

                <div className="relative h-32 w-32 rounded-full border-2 border-rose-300/30 bg-[rgba(251,191,36,0.10)]">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-rose-200">
                    oil
                  </div>
                  <span className="absolute right-0 top-1/2 rounded-full bg-slate-800/80 px-2 py-1 text-rose-200">
                    ⊖
                  </span>
                  <span className="absolute left-3 top-5 rounded-full bg-slate-800/80 px-2 py-1 text-rose-200">
                    ⊖
                  </span>
                  <span className="absolute bottom-3 left-1/2 rounded-full bg-slate-800/80 px-2 py-1 text-rose-200">
                    ⊖
                  </span>
                </div>
              </div>
            </div>
          </DiagramBox>

          <NoteBox>
            Diagram showing hydrophobic tail, hydrophilic ionic head, soap
            ions at the water surface, and micelle-like oil droplets surrounded
            by negatively charged heads.
          </NoteBox>
        </PageCard>

        <PageCard title="Cause and Types of Hardness">
          <div className="space-y-4 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-rose-200 p-4">
            <p className="text-lg font-semibold text-rose-200">
              Hardness is due to presence of Ca<sup>2+</sup> and Mg
              <sup>2+</sup> ions in water.
            </p>

            <ReactionBox>
              2RCOONa + Ca<sup>2+</sup> → (RCOO)<sub>2</sub>Ca↓ + 2Na
              <sup>+</sup>
            </ReactionBox>

            <div className="grid gap-4 md:grid-cols-2">
              <WorkingLine>
                2RCOONa
                <br />
                water soluble
              </WorkingLine>

              <WorkingLine>
                (RCOO)<sub>2</sub>Ca↓
                <br />
                insoluble in water
              </WorkingLine>
            </div>
          </div>

          <h3 className="text-2xl font-black text-rose-200 underline">
            Types of Hardness:
          </h3>

          <div className="space-y-4 rounded-2xl border border-emerald-400/20 bg-[rgba(52,211,153,0.06)] p-4">
            <h4 className="text-xl font-black text-emerald-200 underline">
              1. Temporary or Bicarbonate hardness:
            </h4>

            <p>
              Such hardness may be removed first by boiling the water sample. It
              is due to presence of Ca and Mg bicarbonates in water.
            </p>

            <ReactionBox>
              Ca(HCO<sub>3</sub>)<sub>2</sub>(aq){" "}
              <span className="mx-2 text-blue-700">boil</span>→ CaCO<sub>3</sub>
              ↓ + CO<sub>2</sub>↑ + H<sub>2</sub>O
            </ReactionBox>

            <ReactionBox>
              Mg(HCO<sub>3</sub>)<sub>2</sub>(aq){" "}
              <span className="mx-2 text-blue-700">boil</span>→ Mg(OH)
              <sub>2</sub>↓ + 2CO<sub>2</sub>↑
            </ReactionBox>
          </div>

          <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-blue-200 p-4">
            <h4 className="text-xl font-black text-emerald-200 underline">
              2. Permanent Hardness:
            </h4>

            <p>
              Such hardness may be removed only by chemical treatment of water.
            </p>

            <NoteBox>
              The page ends with an arrow, indicating continuation of permanent
              hardness treatment methods on the next page.
            </NoteBox>
          </div>
        </PageCard>
      </div>
  );
}
