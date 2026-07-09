"use client";
import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

type PageCardProps = {
  page?: string;
  title: string;
  children: React.ReactNode;
};

function PageCard({ title, children }: PageCardProps) {
  return (
    <section className="my-6 rounded-3xl border border-slate-700/60 bg-[#111827] p-6 sm:p-8 shadow-xl">
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
        <h3 className="text-xl font-bold text-cyan-300">{title}</h3>
      </div>
      <div className="space-y-4 text-[15px] leading-relaxed text-slate-200">{children}</div>
    </section>
  );
}

function FormulaBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border border-cyan-400/30 bg-slate-950 px-5 py-4 text-center font-semibold text-cyan-300 shadow-lg">
      {children}
    </div>
  );
}

function WorkingLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 font-medium text-slate-200 shadow-sm">
      {children}
    </div>
  );
}

function DiagramBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border border-dashed border-blue-400/40 bg-slate-950 p-5 text-center shadow-md">
      <div className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-400">
        {title}
      </div>
      <div className="text-slate-200">{children}</div>
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-5 shadow-md text-sm text-slate-200 space-y-2">
      {children}
    </div>
  );
}

function RuleBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border border-rose-400/30 bg-rose-950/20 px-5 py-4 font-semibold text-rose-300 shadow-md">
      {children}
    </div>
  );
}

function LabelPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
      {children}
    </span>
  );
}

function ReactionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-indigo-500/30 bg-indigo-950/30 p-4 font-mono text-sm text-indigo-200 overflow-x-auto shadow-sm">
      {children}
    </div>
  );
}

function QuestionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border border-purple-500/30 bg-purple-950/20 p-5 text-sm text-purple-200 shadow-md space-y-2">
      {children}
    </div>
  );
}

function MiniStructure({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-slate-700 bg-slate-900 p-4 text-center">
      <div className="text-xs font-bold uppercase text-slate-400 mb-2">{title}</div>
      <div className="text-sm font-mono text-slate-200">{children}</div>
    </div>
  );
}

function ReactionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-4 text-sm text-slate-200">
      {children}
    </div>
  );
}

function YellowNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-yellow-500/30 bg-yellow-950/20 p-4 text-sm text-yellow-300">
      {children}
    </div>
  );
}

function RedNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-red-500/30 bg-red-950/20 p-4 text-sm text-red-300">
      {children}
    </div>
  );
}

function PinkBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-pink-500/30 bg-pink-950/20 p-4 text-sm text-pink-200">
      {children}
    </div>
  );
}

function PinkQuestion({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-pink-500/40 bg-pink-950/30 p-4 font-semibold text-pink-300">
      {children}
    </div>
  );
}

function SourceNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 text-xs italic text-slate-400">
      {children}
    </div>
  );
}

function CrossedOut({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 rounded-lg bg-red-950/40 p-3 text-red-400 line-through text-sm">
      {children}
    </div>
  );
}

function CrossedRelation({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 rounded-lg bg-red-950/40 p-3 text-red-400 line-through font-mono text-xs">
      {children}
    </div>
  );
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-sm text-amber-300">
      {children}
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-rose-500/40 bg-rose-950/30 p-4 text-sm font-bold text-rose-300">
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded bg-slate-800 px-2 py-0.5 text-xs font-semibold text-slate-300 mr-2">
      {children}
    </span>
  );
}

function StatusBadge({ status }: { status?: string }) {
  return (
    <span className="rounded-full bg-cyan-500/20 px-2 py-1 text-xs font-bold text-cyan-300">
      {status || "VERIFIED"}
    </span>
  );
}

function ChecklistItem({ children, checked, done }: { children: React.ReactNode; checked?: boolean; done?: boolean }) {
  return (
    <div className="flex items-center gap-2 py-1 text-sm text-slate-300">
      <span className="text-emerald-400 font-bold">{(checked || done) ? "✓" : "○"}</span>
      <span>{children}</span>
    </div>
  );
}

export default function TitrationPart6() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
          Precipitation & Complexometric Titrations
        </h1>
      </header>
      <div className="mx-auto max-w-5xl space-y-8">
        

        <PageCard title="Fe₂O₃ Sample, Zn Dust and KMnO₄ Titration">
          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
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
          <h3 className="text-2xl font-black text-red-500 underline">
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
                <div className="h-10 w-40 rounded-full border-2 border-slate-400 bg-white">
                  <div className="mt-2 text-sm font-semibold">zig-zag hydrocarbon chain</div>
                </div>
                <div className="rounded-full border-2 border-blue-400 bg-white px-4 py-3 font-bold">
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
              <div className="mx-auto h-40 max-w-sm rounded-xl border-2 border-blue-500 bg-white p-3">
                <div className="h-16 border-b border-blue-400">
                  <div className="flex justify-around pt-3 text-pink-600">
                    <span>⊖</span>
                    <span>⊖</span>
                    <span>⊖</span>
                    <span>⊖</span>
                  </div>
                </div>
                <div className="pt-5 text-blue-600">water</div>
              </div>
              <p className="mt-3 text-sm font-semibold">
                Surface arrangement of soap ions shown in the source diagram.
              </p>
            </DiagramBox>
          </div>

          <DiagramBox title="Micelle formation shown">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
              <div className="relative h-56 w-56 rounded-full border-2 border-pink-300 bg-pink-50">
                <div className="absolute left-1/2 top-1/2 rounded-full bg-yellow-100 px-3 py-2 font-bold text-pink-700">
                  oil
                </div>
                {Array.from({ length: 12 }).map((_, index) => (
                  <span
                    key={index}
                    className="absolute rounded-full bg-white px-2 py-1 text-pink-600 shadow-sm"
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
                <div className="relative h-32 w-32 rounded-full border-2 border-pink-300 bg-yellow-50">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-pink-700">
                    oil
                  </div>
                  <span className="absolute right-0 top-1/2 rounded-full bg-white px-2 py-1 text-pink-600">
                    ⊖
                  </span>
                  <span className="absolute left-3 top-5 rounded-full bg-white px-2 py-1 text-pink-600">
                    ⊖
                  </span>
                  <span className="absolute bottom-3 left-1/2 rounded-full bg-white px-2 py-1 text-pink-600">
                    ⊖
                  </span>
                </div>

                <div className="font-bold text-pink-700">⊖ --- H₂O --- ⊖</div>

                <div className="relative h-32 w-32 rounded-full border-2 border-pink-300 bg-yellow-50">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-pink-700">
                    oil
                  </div>
                  <span className="absolute right-0 top-1/2 rounded-full bg-white px-2 py-1 text-pink-600">
                    ⊖
                  </span>
                  <span className="absolute left-3 top-5 rounded-full bg-white px-2 py-1 text-pink-600">
                    ⊖
                  </span>
                  <span className="absolute bottom-3 left-1/2 rounded-full bg-white px-2 py-1 text-pink-600">
                    ⊖
                  </span>
                </div>
              </div>
            </div>
          </DiagramBox>

          <NoteBox>
            The source page shows hydrophobic tail, hydrophilic ionic head, soap
            ions at the water surface, and micelle-like oil droplets surrounded
            by negatively charged heads.
          </NoteBox>
        </PageCard>

        <PageCard title="Cause and Types of Hardness">
          <div className="space-y-4 rounded-2xl border border-pink-200 bg-pink-50 p-4">
            <p className="text-lg font-semibold text-pink-800">
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

          <h3 className="text-2xl font-black text-red-500 underline">
            Types of Hardness:
          </h3>

          <div className="space-y-4 rounded-2xl border border-green-200 bg-green-50 p-4">
            <h4 className="text-xl font-black text-green-800 underline">
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

          <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h4 className="text-xl font-black text-green-800 underline">
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
    </main>
  );
}
