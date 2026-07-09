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

export default function EquivalentConceptPart2() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
          n-Factor Calculations for Elements and Compounds
        </h1>
      </header>
      <div className="mx-auto max-w-5xl space-y-8">
        

        <PageCard title="Equivalent Weight from Gaseous Oxide and Hydrogen Gas">
          <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4">
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

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
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

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
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

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
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

          <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4">
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

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
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
    </main>
  );
}
