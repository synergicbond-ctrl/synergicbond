// app/notes/stoichiometry/part2.tsx
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

export default function StoichiometryPart2() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 bg-white p-8 text-slate-900">
      {/* Page 10 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 10</h2>
        <h3 className="text-xl font-bold">
          Continuation of Antacid Tablet Example
        </h3>
        <div className="rounded-lg border bg-slate-50 p-4">
          <FormulaLine
            tex={String.raw`m_{Mg(OH)_2}=\frac{58}{2\times36.5}\times(2.5\times3.65)=\frac{29}{4}\ \text{gm}`}
          />
          <FormulaLine
            tex={String.raw`\text{No. of tablets}=\frac{29/4}{0.87}=\frac{25}{3}=8.33`}
          />
        </div>
        <div className="rounded-md bg-blue-50 p-3 font-bold text-blue-900">
          Final Answer: Minimum number of tablets ={' '}
          <InlineMath math={String.raw`9`} />.
        </div>

        <ExampleCard
          question={
            <>
              To prevent knocking in engine, 2 ml of tetraethyl lead (TEL) is
              added per litre of petrol. How many gm ethyl chloride,{' '}
              <InlineMath math={String.raw`C_2H_5Cl`} />, is needed to produce
              sufficient TEL needed to be mixed with 10 L petrol? Density of TEL
              = 6.48 gm/ml. <InlineMath math={String.raw`Pb=208`} />.
            </>
          }
          given={
            <>
              TEL required = 2 ml per litre petrol. Petrol = 10 L. Density of
              TEL = 6.48 gm/ml. Molar mass of TEL{' '}
              <InlineMath math={String.raw`(C_2H_5)_4Pb`} /> = 324 gm/mol.
              Molar mass of ethyl chloride{' '}
              <InlineMath math={String.raw`C_2H_5Cl`} /> = 64.5 gm/mol.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`4C_2H_5Cl+4NaPb\rightarrow (C_2H_5)_4Pb+4NaCl+3Pb`}
              />
              <FormulaLine
                tex={String.raw`4\ \text{mol }C_2H_5Cl\equiv1\ \text{mol TEL}`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`V_{\text{TEL}}=10\times2=20\ \text{ml}`}
              />
              <FormulaLine
                tex={String.raw`m_{\text{TEL}}=20\times6.48=129.6\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`4\ \text{mol }C_2H_5Cl=4\times64.5=258\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`1\ \text{mol TEL}=324\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`m_{C_2H_5Cl}=\frac{258}{324}\times129.6=103.2\ \text{gm}`}
              />
            </>
          }
          answer={
            <>
              <InlineMath math={String.raw`103.2\ \text{gm }C_2H_5Cl`} />
            </>
          }
        />
      </section>

      {/* Page 11 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 11</h2>
        <ExampleCard
          question={
            <>
              5.0 gm of dry green algae absorbs{' '}
              <InlineMath math={String.raw`4\times10^{-3}`} /> mole{' '}
              <InlineMath math={String.raw`CO_2`} /> per hour by
              photosynthesis. Assume photosynthesis occurs at constant rate and
              all carbon atoms absorbed are stored in algae as starch,{' '}
              <InlineMath math={String.raw`(C_6H_{10}O_5)_n`} />, where{' '}
              <InlineMath math={String.raw`n`} /> is a large integral value.
              Calculate the time in which mass of algae increases by 81%.
            </>
          }
          given={
            <>
              Initial algae mass = 5.0 gm. Increase = 81%. Rate of{' '}
              <InlineMath math={String.raw`CO_2`} /> absorption ={' '}
              <InlineMath math={String.raw`4\times10^{-3}`} /> mol/hr. Starch
              formula = <InlineMath math={String.raw`(C_6H_{10}O_5)_n`} />.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`6nCO_2+5nH_2O\rightarrow (C_6H_{10}O_5)_n+6nO_2`}
              />
              <FormulaLine
                tex={String.raw`6n\ \text{mol }CO_2\equiv1\ \text{mol starch}=162n\ \text{gm}`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`m_{\text{starch produced}}=5\times\frac{81}{100}=5\times0.81=4.05\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`n_{CO_2}=\frac{6n}{162n}\times4.05=0.15\ \text{mol}`}
              />
              <FormulaLine
                tex={String.raw`\text{Required time}=\frac{0.15}{4\times10^{-3}}=37.5\ \text{hr}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`37.5\ \text{hr}`} />}
        />
      </section>

      {/* Page 12 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 12</h2>
        <h3 className="text-xl font-bold text-red-600">
          C. POAC Method
        </h3>
        <p>
          POAC means <strong>Principle of Atomic Conservation</strong>.
        </p>
        <p>
          Moles of reaction components may be related directly from the
          conservation of atoms.
        </p>
        <DiagramBlock title="POAC idea from the algae example">
          <p>
            Moles of carbon atoms in{' '}
            <InlineMath math={String.raw`CO_2`} /> = moles of carbon atoms in{' '}
            <InlineMath math={String.raw`(C_6H_{10}O_5)_n`} />.
          </p>
          <FormulaLine
            tex={String.raw`1\times n_{CO_2}=6n\times n_{(C_6H_{10}O_5)_n}`}
          />
          <FormulaLine
            tex={String.raw`1\times n_{CO_2}=6n\times\frac{5\times0.81}{162n}`}
          />
          <FormulaLine
            tex={String.raw`n_{CO_2}=0.15`}
          />
        </DiagramBlock>
        <p>
          Factor-labelling form:
        </p>
        <FormulaLine
          tex={String.raw`\frac{n_{CO_2}}{6n}=\frac{n_{(C_6H_{10}O_5)_n}}{1}`}
        />
      </section>

      {/* Page 13 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 13</h2>
        <ExampleCard
          title="Solved Example — POAC for KClO₃"
          question={
            <>
              <InlineMath math={String.raw`KClO_3`} /> gives{' '}
              <InlineMath math={String.raw`O_2`} /> on decomposition. Calculate
              the volume of <InlineMath math={String.raw`O_2`} /> at STP from
              4.9 gm <InlineMath math={String.raw`KClO_3`} />.
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`KClO_3`} /> = 4.9 gm. Molar
              mass of <InlineMath math={String.raw`KClO_3`} /> = 122.5 gm/mol.
              1 mole gas at STP = 22.7 L as used in the notes.
            </>
          }
          formula={
            <>
              <p>
                Moles of O-atoms in{' '}
                <InlineMath math={String.raw`KClO_3`} /> = moles of O-atoms in{' '}
                <InlineMath math={String.raw`O_2`} />.
              </p>
              <FormulaLine
                tex={String.raw`3n_{KClO_3}=2n_{O_2}`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`3\times\frac{4.9}{122.5}=2\times\frac{V_{\text{STP}}}{22.7}`}
              />
              <FormulaLine
                tex={String.raw`V_{\text{STP}}=1.362\ \text{L}`}
              />
            </>
          }
          answer={
            <>
              <InlineMath math={String.raw`1.362\ \text{L }O_2`} /> at STP.
            </>
          }
        />

        <ExampleCard
          title="Solved Example — NaHCO₃ Decomposition by POAC"
          question={
            <>
              Calculate the mass of <InlineMath math={String.raw`CO_2`} />{' '}
              obtained by complete decomposition of 16.8 gm{' '}
              <InlineMath math={String.raw`NaHCO_3`} />.
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`NaHCO_3`} /> = 16.8 gm.
              Molar mass of <InlineMath math={String.raw`NaHCO_3`} /> = 84
              gm/mol. Molar mass of <InlineMath math={String.raw`CO_2`} /> = 44
              gm/mol.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`NaHCO_3\xrightarrow{\Delta}Na_2CO_3+CO_2+H_2O`}
              />
              <p className="text-amber-700">
                Direct carbon-atom conservation alone is not sufficient because
                carbon goes into both <InlineMath math={String.raw`Na_2CO_3`} />{' '}
                and <InlineMath math={String.raw`CO_2`} />. Use Na-atom
                conservation also.
              </p>
            </>
          }
          calculation={
            <>
              <p className="font-semibold text-amber-700">
                Calculation continues on Page 14.
              </p>
            </>
          }
          answer="Continues on Page 14"
        />
      </section>

      {/* Page 14 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 14</h2>
        <h3 className="text-xl font-bold">
          Continuation of <InlineMath math={String.raw`NaHCO_3`} /> POAC Example
        </h3>
        <div className="rounded-lg border bg-slate-50 p-4">
          <p>
            Using carbon atom conservation:
          </p>
          <FormulaLine
            tex={String.raw`1\times n_{NaHCO_3}=1\times n_{Na_2CO_3}+1\times n_{CO_2}\quad ...(1)`}
          />
          <p>
            Using sodium atom conservation:
          </p>
          <FormulaLine
            tex={String.raw`1\times n_{NaHCO_3}=2\times n_{Na_2CO_3}\quad ...(2)`}
          />
          <p>
            From equations (1) and (2):
          </p>
          <FormulaLine
            tex={String.raw`\frac{1}{2}n_{NaHCO_3}=n_{CO_2}`}
          />
          <FormulaLine
            tex={String.raw`\frac{1}{2}\times\frac{16.8}{84}=\frac{w_{CO_2}}{44}`}
          />
          <FormulaLine
            tex={String.raw`w_{CO_2}=4.4\ \text{gm}`}
          />
        </div>
        <div className="rounded-md bg-blue-50 p-3 font-bold text-blue-900">
          Final Answer:{' '}
          <InlineMath math={String.raw`4.4\ \text{gm }CO_2`} />.
        </div>
      </section>

      {/* Page 15 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 15</h2>
        <h3 className="text-xl font-bold text-red-600">
          Equivalent Concept
        </h3>
        <p>
          In a balanced chemical reaction, factor-labelling may be expressed
          through equivalents.
        </p>
        <div className="rounded-lg border bg-slate-50 p-4">
          <FormulaLine
            tex={String.raw`2KMnO_4+5SO_2+2H_2O\rightarrow K_2SO_4+2MnSO_4+2H_2SO_4`}
          />
          <p>
            Oxidation state changes:
          </p>
          <ul className="ml-6 list-disc space-y-1">
            <li>
              Mn: <InlineMath math={String.raw`+7\rightarrow+2`} />, change =
              5.
            </li>
            <li>
              S: <InlineMath math={String.raw`+4\rightarrow+6`} />, change =
              2.
            </li>
          </ul>
          <FormulaLine
            tex={String.raw`\frac{n_{KMnO_4}}{2}=\frac{n_{SO_2}}{5}`}
          />
          <FormulaLine
            tex={String.raw`5n_{KMnO_4}=2n_{SO_2}`}
          />
          <FormulaLine
            tex={String.raw`n_{eq}(KMnO_4)=n_{eq}(SO_2)`}
          />
        </div>
        <div className="rounded-lg border bg-slate-50 p-4">
          <FormulaLine
            tex={String.raw`3NaOH+H_3PO_4\rightarrow Na_3PO_4+3H_2O`}
          />
          <FormulaLine
            tex={String.raw`\frac{n_{NaOH}}{3}=\frac{n_{H_3PO_4}}{1}`}
          />
          <FormulaLine
            tex={String.raw`1\times n_{NaOH}=3\times n_{H_3PO_4}`}
          />
          <FormulaLine
            tex={String.raw`n_{eq}(NaOH)=n_{eq}(H_3PO_4)`}
          />
        </div>
      </section>

      {/* Page 16 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 16</h2>
        <p>
          The number of gram-equivalents of all the reactants reacted remains
          the same, and the same number of gram-equivalents of each product is
          formed.
        </p>
        <FormulaLine
          tex={String.raw`\text{No. of gram-equivalents}=n\text{ (moles)}\times n\text{-factor}`}
        />
        <p>
          The n-factor of any substance depends on its nature in that reaction.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-300 text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="border border-slate-300 p-2 text-left">
                  Substance
                </th>
                <th className="border border-slate-300 p-2 text-left">
                  n-factor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-2">Element</td>
                <td className="border border-slate-300 p-2">Valency</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Ion</td>
                <td className="border border-slate-300 p-2">
                  Magnitude of relative charge on ion
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Acid</td>
                <td className="border border-slate-300 p-2">Basicity</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Base</td>
                <td className="border border-slate-300 p-2">Acidity</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Salt</td>
                <td className="border border-slate-300 p-2">
                  Number of metal atoms × its valency
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  Oxidising / reducing agent
                </td>
                <td className="border border-slate-300 p-2">
                  Change in oxidation number
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Page 17 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 17</h2>
        <ExampleCard
          question={
            <>
              How many gm <InlineMath math={String.raw`H_2SO_4`} /> is needed
              for complete reaction with 16 gm NaOH?
            </>
          }
          given={
            <>
              Mass of NaOH = 16 gm. Molar mass of NaOH = 40 gm/mol. Molar mass
              of <InlineMath math={String.raw`H_2SO_4`} /> = 98 gm/mol. n-factor
              of NaOH = 1; n-factor of{' '}
              <InlineMath math={String.raw`H_2SO_4`} /> = 2.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`n_{eq}(NaOH)=n_{eq}(H_2SO_4)`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`\frac{16}{40}\times1=\frac{w}{98}\times2`}
              />
              <FormulaLine
                tex={String.raw`w_{H_2SO_4}=19.6\ \text{gm}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`19.6\ \text{gm }H_2SO_4`} />}
        />

        <h3 className="text-xl font-bold text-red-600">
          Limiting Reagent
        </h3>
        <FormulaLine
          tex={String.raw`N_2+3H_2\rightarrow2NH_3`}
        />
        <DiagramBlock title="Limiting reagent idea">
          <p>
            Given: <InlineMath math={String.raw`7\ \text{gm }N_2`} /> and{' '}
            <InlineMath math={String.raw`6\ \text{gm }H_2`} />.
          </p>
          <p>
            From the reaction, 28 gm <InlineMath math={String.raw`N_2`} /> needs
            6 gm <InlineMath math={String.raw`H_2`} />.
          </p>
          <p>
            Therefore, 7 gm <InlineMath math={String.raw`N_2`} /> needs only
            1.5 gm <InlineMath math={String.raw`H_2`} />, so{' '}
            <InlineMath math={String.raw`H_2`} /> is in excess.
          </p>
        </DiagramBlock>
        <p>
          The reactant which is completely consumed first is called the{' '}
          <strong>limiting reagent</strong>. The amount of product formed will
          be according to the limiting reagent.
        </p>
      </section>
    </main>
  );
}
