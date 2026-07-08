import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from '@/components/math/react-katex';

interface ExampleProps {
  title?: string;
  question: React.ReactNode;
  given: React.ReactNode;
  formula: React.ReactNode;
  calculation: React.ReactNode;
  answer: React.ReactNode;
}

interface DiagramProps {
  title: string;
  children: React.ReactNode;
}

const FormulaLine = ({ tex }: { tex: string }) => (
  <div className="my-2 rounded-md bg-white p-3 text-center">
    <BlockMath math={tex} />
  </div>
);

const DiagramBlock = ({ title, children }: DiagramProps) => (
  <div className="my-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4">
    <h4 className="mb-2 font-semibold text-slate-800">{title}</h4>
    <div className="space-y-1 text-sm text-slate-700">{children}</div>
  </div>
);

const ExampleCard = ({
  title = 'Solved Example',
  question,
  given,
  formula,
  calculation,
  answer,
}: ExampleProps) => (
  <div className="my-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
    <h4 className="mb-3 text-lg font-bold text-blue-900">{title}</h4>

    <div className="space-y-3 text-sm leading-7">
      <div>
        <strong>Question:</strong> {question}
      </div>

      <div>
        <strong>Given:</strong> {given}
      </div>

      <div>
        <strong>Formula Used:</strong>
        <div className="mt-2">{formula}</div>
      </div>

      <div>
        <strong>Calculation:</strong>
        <div className="mt-2 rounded-lg border bg-slate-50 p-3">{calculation}</div>
      </div>

      <div className="rounded-md bg-blue-50 p-3 font-bold text-blue-900">
        Final Answer: {answer}
      </div>
    </div>
  </div>
);

export default function StoichiometryPart1() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 bg-white p-8 text-slate-900">
      {/* Page 1 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 1</h2>

        <h1 className="text-3xl font-extrabold text-red-600">
          Stoichiometry & Stoichiometric Coefficients
        </h1>

        <p>
          <strong>Stoichiometry:</strong> Derived from Greek words{' '}
          <em>stoicheion</em> (element) and <em>metron</em> (measure). It deals
          with the quantitative calculations of masses, moles, and volumes of
          reactants and products involved in a balanced chemical reaction.
        </p>

        <div className="rounded-lg border bg-slate-50 p-4">
          <p className="font-semibold text-slate-800">
            Fundamental Rule of Stoichiometry
          </p>
          <p className="mt-1 text-sm">
            For a balanced general chemical reaction:
          </p>
          <FormulaLine tex={String.raw`aA + bB \longrightarrow cC + dD`} />
          <p className="text-sm">
            The stoichiometric coefficients (<InlineMath math={String.raw`a, b, c, d`} />) represent:
          </p>
          <ul className="ml-6 mt-2 list-disc space-y-1 text-sm">
            <li><strong>Mole ratio:</strong> <InlineMath math={String.raw`a`} /> moles of <InlineMath math={String.raw`A`} /> react with <InlineMath math={String.raw`b`} /> moles of <InlineMath math={String.raw`B`} /> to form <InlineMath math={String.raw`c`} /> moles of <InlineMath math={String.raw`C`} /> and <InlineMath math={String.raw`d`} /> moles of <InlineMath math={String.raw`D`} />.</li>
            <li><strong>Molecule ratio:</strong> <InlineMath math={String.raw`a`} /> molecules of <InlineMath math={String.raw`A`} /> react with <InlineMath math={String.raw`b`} /> molecules of <InlineMath math={String.raw`B`} />.</li>
            <li><strong>Volume ratio (for gaseous reactants/products at same P & T):</strong> <InlineMath math={String.raw`a`} /> L of <InlineMath math={String.raw`A(g)`} /> reacts with <InlineMath math={String.raw`b`} /> L of <InlineMath math={String.raw`B(g)`} />.</li>
          </ul>
        </div>

        <DiagramBlock title="Important Trap / Concept Reminder">
          <p className="font-semibold text-red-600">
            ⚠️ Stoichiometric coefficients NEVER represent the mass ratio!
          </p>
          <p>
            Always convert mass into moles first before applying stoichiometric relation:
          </p>
          <FormulaLine
            tex={String.raw`\frac{n_{\text{reacted}}(A)}{a} = \frac{n_{\text{reacted}}(B)}{b} = \frac{n_{\text{formed}}(C)}{c} = \frac{n_{\text{formed}}(D)}{d}`}
          />
        </DiagramBlock>

        <p className="text-xs italic text-slate-400">TG ~ @bohring_bot</p>
      </section>

      {/* Page 2 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 2</h2>

        <h3 className="text-xl font-bold text-red-600">
          Mass – Mass Calculations
        </h3>

        <p>
          When the mass of one reactant/product is given and the mass of another
          substance is required:
        </p>
        <ol className="ml-6 list-decimal space-y-1 text-sm">
          <li>Write down the correctly balanced chemical equation.</li>
          <li>Convert the given mass into number of moles (<InlineMath math={String.raw`n = m / M`} />).</li>
          <li>Use the stoichiometric mole-ratio equality to find moles of the target substance.</li>
          <li>Convert target moles back into mass (<InlineMath math={String.raw`m = n \times M`} />).</li>
        </ol>

        <ExampleCard
          title="Solved Example — Mass-Mass Relationship"
          question={
            <>
              Calculate the mass of <InlineMath math={String.raw`CO_2`} /> and{' '}
              <InlineMath math={String.raw`H_2O`} /> produced on complete combustion of{' '}
              <strong>16 gm</strong> of methane (<InlineMath math={String.raw`CH_4`} />).
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`CH_4 = 16\ \text{gm}`} />; Molar mass of{' '}
              <InlineMath math={String.raw`CH_4 = 16\ \text{gm/mol}`} />; Molar mass of{' '}
              <InlineMath math={String.raw`CO_2 = 44\ \text{gm/mol}`} />; Molar mass of{' '}
              <InlineMath math={String.raw`H_2O = 18\ \text{gm/mol}`} />.
            </>
          }
          formula={
            <>
              <FormulaLine tex={String.raw`CH_4(g) + 2O_2(g) \longrightarrow CO_2(g) + 2H_2O(l)`} />
              <FormulaLine tex={String.raw`\frac{n(CH_4)}{1} = \frac{n(CO_2)}{1} = \frac{n(H_2O)}{2}`} />
            </>
          }
          calculation={
            <>
              <FormulaLine tex={String.raw`n(CH_4) = \frac{16\ \text{gm}}{16\ \text{gm/mol}} = 1\ \text{mole}`} />
              <p>From stoichiometric ratio:</p>
              <FormulaLine tex={String.raw`n(CO_2) = n(CH_4) = 1\ \text{mole} \implies m(CO_2) = 1 \times 44 = 44\ \text{gm}`} />
              <FormulaLine tex={String.raw`n(H_2O) = 2 \times n(CH_4) = 2\ \text{moles} \implies m(H_2O) = 2 \times 18 = 36\ \text{gm}`} />
            </>
          }
          answer={
            <>
              Mass of <InlineMath math={String.raw`CO_2 = 44\ \text{gm}`} />; Mass of{' '}
              <InlineMath math={String.raw`H_2O = 36\ \text{gm}`} />
            </>
          }
        />

        <p className="text-xs italic text-slate-400">TG ~ @bohring_bot</p>
      </section>

      {/* Page 3 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 3</h2>

        <h3 className="text-xl font-bold text-red-600">
          Mass – Volume Calculations (at STP / NTP)
        </h3>

        <p>
          For reactions involving gases, 1 mole of any ideal gas occupies{' '}
          <strong>22.4 Litres (or 22,400 ml)</strong> at STP (<InlineMath math={String.raw`0^\circ\text{C}, 1\ \text{atm}`} />).
        </p>

        <FormulaLine tex={String.raw`n_{\text{gas}} = \frac{V_{\text{in L at STP}}}{22.4} = \frac{V_{\text{in ml at STP}}}{22400}`} />

        <ExampleCard
          title="Solved Example — Thermal Decomposition"
          question={
            <>
              Calculate the volume of <InlineMath math={String.raw`O_2`} /> gas evolved at STP upon
              complete thermal decomposition of <strong>24.5 gm</strong> of potassium chlorate (
              <InlineMath math={String.raw`KClO_3`} />).
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`KClO_3 = 24.5\ \text{gm}`} />; Molar mass of{' '}
              <InlineMath math={String.raw`KClO_3 = 122.5\ \text{gm/mol}`} />.
            </>
          }
          formula={
            <>
              <FormulaLine tex={String.raw`2KClO_3(s) \xrightarrow{\ \Delta\ } 2KCl(s) + 3O_2(g)`} />
              <FormulaLine tex={String.raw`\frac{n(KClO_3)}{2} = \frac{n(O_2)}{3}`} />
            </>
          }
          calculation={
            <>
              <FormulaLine tex={String.raw`n(KClO_3) = \frac{24.5}{122.5} = 0.2\ \text{mole}`} />
              <FormulaLine tex={String.raw`n(O_2) = \frac{3}{2} \times 0.2 = 0.3\ \text{mole}`} />
              <FormulaLine tex={String.raw`V(O_2)_{\text{STP}} = 0.3 \times 22.4\ \text{L} = 6.72\ \text{L}`} />
            </>
          }
          answer={<InlineMath math={String.raw`6.72\ \text{Litres at STP}`} />}
        />

        <p className="text-xs italic text-slate-400">TG ~ @bohring_bot</p>
      </section>

      {/* Page 4 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 4</h2>

        <h3 className="text-xl font-bold text-red-600">
          Volume – Volume Calculations (Gay-Lussac&apos;s Law)
        </h3>

        <p>
          When both reactants and products are gaseous and reaction occurs at constant temperature and pressure, the stoichiometric coefficients directly represent the volume ratio.
        </p>

        <ExampleCard
          title="Solved Example — Gay-Lussac's Law of Gaseous Volumes"
          question={
            <>
              How many ml of ammonia (<InlineMath math={String.raw`NH_3`} />) gas are formed when{' '}
              <strong>50 ml</strong> of <InlineMath math={String.raw`N_2`} /> completely reacts with excess{' '}
              <InlineMath math={String.raw`H_2`} /> gas under identical P and T conditions?
            </>
          }
          given={
            <>
              Volume of <InlineMath math={String.raw`N_2 = 50\ \text{ml}`} />; <InlineMath math={String.raw`H_2`} /> is in excess.
            </>
          }
          formula={
            <>
              <FormulaLine tex={String.raw`N_2(g) + 3H_2(g) \longrightarrow 2NH_3(g)`} />
              <FormulaLine tex={String.raw`\frac{V(N_2)}{1} = \frac{V(NH_3)}{2}`} />
            </>
          }
          calculation={
            <FormulaLine tex={String.raw`V(NH_3) = 2 \times V(N_2) = 2 \times 50\ \text{ml} = 100\ \text{ml}`} />
          }
          answer={<InlineMath math={String.raw`100\ \text{ml of } NH_3`} />}
        />

        <p className="text-xs italic text-slate-400">TG ~ @bohring_bot</p>
      </section>
    </main>
  );
}
