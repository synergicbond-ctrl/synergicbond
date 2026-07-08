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

export default function ConcentrationTermsPart1() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 bg-white p-8 text-slate-900">
      {/* Page 1 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 1</h2>

        <h1 className="text-3xl font-extrabold text-red-600">
          Concentration Terms
        </h1>

        <p>
          <strong>Solution:</strong> It is the homogeneous mixture of two or
          more pure substances.
        </p>

        <div className="rounded-lg border bg-slate-50 p-4">
          <p>
            <strong>Solution</strong>
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Solute</strong> → which dissolves in solvent
            </li>
            <li>
              <strong>Solvent</strong> → which dissolves other substances in it
            </li>
          </ul>
        </div>

        <DiagramBlock title="Diagram: NaCl and water solution">
          <p>
            The page shows <strong>200 gm NaCl</strong> labelled as solute and{' '}
            <strong>100 gm H₂O</strong> labelled as solvent.
          </p>
          <p>
            NaCl is shown dissociating into <InlineMath math={String.raw`Na^+`} />{' '}
            and <InlineMath math={String.raw`Cl^-`} /> ions.
          </p>
          <p>
            A water molecule <InlineMath math={String.raw`H_2O`} /> is shown
            near the ions, indicating hydration/interaction with ions.
          </p>
          <p>
            A crossed diagram on the right shows <InlineMath math={String.raw`H_2O`} />{' '}
            in the centre with surrounding ionic labels.
          </p>
        </DiagramBlock>

        <DiagramBlock title="Diagram: ROH and water">
          <p>
            The note shows <strong>ROH + H₂O</strong> and states that they are
            soluble in each other.
          </p>
          <p>
            Two hydrogen-bonding style sketches are drawn using labels R, O, H,
            and dotted bonds.
          </p>
          <p>
            The diagrams indicate interaction between alcohol molecules and
            water molecules.
          </p>
        </DiagramBlock>

        <p>
          If both are soluble in each other, then the substance having greater
          amount by mole is solvent.
        </p>

        <p>
          A solution may have any physical state. Its final state is the state
          of solvent.
        </p>

        <p className="text-xs italic text-slate-400">TG ~ @bohring_bot</p>
      </section>

      {/* Page 2 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 2</h2>

        <h3 className="text-xl font-bold">Solvent, Solute and Examples</h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-300 text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="border border-slate-300 p-2 text-left">
                  Solvent
                </th>
                <th className="border border-slate-300 p-2 text-left">
                  Solute
                </th>
                <th className="border border-slate-300 p-2 text-left">
                  Examples
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-2">Solid</td>
                <td className="border border-slate-300 p-2">Solid</td>
                <td className="border border-slate-300 p-2">Alloys</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Solid</td>
                <td className="border border-slate-300 p-2">Liquid</td>
                <td className="border border-slate-300 p-2">Amalgams</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Solid</td>
                <td className="border border-slate-300 p-2">Gas</td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`H_2`} /> gas absorbed in Pd
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Liquid</td>
                <td className="border border-slate-300 p-2">Solid</td>
                <td className="border border-slate-300 p-2">Water + salt</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Liquid</td>
                <td className="border border-slate-300 p-2">Liquid</td>
                <td className="border border-slate-300 p-2">
                  Water + ethanol
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Liquid</td>
                <td className="border border-slate-300 p-2">Gas</td>
                <td className="border border-slate-300 p-2">Aerated drink</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Gas</td>
                <td className="border border-slate-300 p-2">Solid</td>
                <td className="border border-slate-300 p-2">
                  Any sublimable solid in a gas
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Gas</td>
                <td className="border border-slate-300 p-2">Liquid</td>
                <td className="border border-slate-300 p-2">
                  Any volatile liquid in a gas
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Gas</td>
                <td className="border border-slate-300 p-2">Gas</td>
                <td className="border border-slate-300 p-2">
                  Any gaseous mixture
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <DiagramBlock title="Diagram: sublimable/volatile substance in gas">
          <p>
            A rectangular vessel is drawn with vapour particles inside. A solid
            lump is drawn at the bottom.
          </p>
          <p>
            The label <strong>Camphor</strong> appears below the solid lump.
          </p>
          <p>
            The label <InlineMath math={String.raw`CCl_4(l)`} /> is written
            below the diagram.
          </p>
        </DiagramBlock>

        <p className="font-semibold text-red-600">
          We will mainly study aqueous binary solutions.
        </p>

        <p className="text-xs italic text-slate-400">TG ~ @bohring_bot</p>
      </section>

      {/* Page 3 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 3</h2>

        <h3 className="text-xl font-bold">
          Concentration or Strength of Solution
        </h3>

        <p>
          Normally, concentration of a solution represents the amount of solute
          in the given amount of solution.
        </p>

        <p>
          Depending on the units to express amount, there are large number of
          concentration terms. Some of them are:
        </p>

        <ol className="ml-6 list-decimal space-y-2">
          <li>Percentage method</li>
          <li>PPM</li>
          <li>gm/litre</li>
          <li>Molarity (M)</li>
          <li>Formality (F)</li>
          <li>Normality (N)</li>
          <li>Molality (m)</li>
          <li>Mole-fraction (X)</li>
          <li>
            Volume strength of <InlineMath math={String.raw`H_2O_2`} />
          </li>
          <li>Labelling of oleum</li>
        </ol>

        <p className="text-xs italic text-slate-400">TG ~ @bohring_bot</p>
      </section>

      {/* Page 4 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 4</h2>

        <h3 className="text-xl font-bold text-red-600">Percentage Method</h3>

        <p>
          Amount (gm or ml) of solute in every 100 amount (gm or ml) of
          solution.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-slate-50 p-4">
            <p className="font-semibold">
              <InlineMath math={String.raw`\% (w/w)`} /> method
            </p>
            <p>
              Percentage by weight / weight percent: gm of solute in every 100
              gm of solution.
            </p>
          </div>

          <div className="rounded-lg border bg-slate-50 p-4">
            <p className="font-semibold">
              <InlineMath math={String.raw`\% (w/v)`} /> method
            </p>
            <p>gm of solute in every 100 ml of solution.</p>
          </div>

          <div className="rounded-lg border bg-slate-50 p-4">
            <p className="font-semibold">
              <InlineMath math={String.raw`\% (v/w)`} /> method
            </p>
            <p>ml of solute in every 100 gm of solution.</p>
          </div>

          <div className="rounded-lg border bg-slate-50 p-4">
            <p className="font-semibold">
              <InlineMath math={String.raw`\% (v/v)`} /> method / % by volume
            </p>
            <p>ml of solute in every 100 ml of solution.</p>
          </div>
        </div>

        <ExampleCard
          title="Solved Example — Percentage Method"
          question={
            <>
              40 gm of a solute is dissolved in 160 gm water to form a solution
              of density 1.25 gm/ml. Calculate the concentration of solution in{' '}
              <InlineMath math={String.raw`\% (w/w)`} /> and{' '}
              <InlineMath math={String.raw`\% (w/v)`} />.
            </>
          }
          given={
            <>
              Mass of solute = 40 gm; mass of water = 160 gm; density of
              solution = 1.25 gm/ml.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`\% (w/w)=\frac{\text{mass of solute}}{\text{mass of solution}}\times 100`}
              />
              <FormulaLine
                tex={String.raw`\% (w/v)=\frac{\text{mass of solute}}{\text{volume of solution in ml}}\times 100`}
              />
            </>
          }
          calculation={
            <>
              <p>Mass of solution:</p>
              <FormulaLine tex={String.raw`40+160=200\ \text{gm}`} />

              <p>For weight by weight percentage:</p>
              <FormulaLine
                tex={String.raw`\% (w/w)=\frac{40}{200}\times 100=20\%`}
              />

              <p className="font-semibold text-amber-700">
                The <InlineMath math={String.raw`\% (w/v)`} /> calculation
                continues on Page 5 / Part 2.
              </p>
            </>
          }
          answer={
            <>
              <InlineMath math={String.raw`20\% (w/w)`} />;{' '}
              <InlineMath math={String.raw`\% (w/v)`} /> continues in Part 2.
            </>
          }
        />

        <p className="text-xs italic text-slate-400">TG ~ @bohring_bot</p>
      </section>
    </main>
  );
}
