// app/notes/stoichiometry/part7.tsx
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

export default function StoichiometryPart7() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 bg-white p-8 text-slate-900">
      {/* Page 55 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 55</h2>
        <h3 className="text-xl font-bold text-red-600">
          Percentage Composition of a Compound
        </h3>
        <p>
          The percentage composition of any compound represents the masses of
          different elements present in each 100 gm of the compound.
        </p>
        <DiagramBlock title="Example: Glucose">
          <FormulaLine tex={String.raw`C_6H_{12}O_6`} />
          <FormulaLine
            tex={String.raw`M=6\times12+12\times1+6\times16=180`}
          />
          <FormulaLine
            tex={String.raw`\%C=\frac{6\times12}{180}\times100=40\%`}
          />
          <FormulaLine
            tex={String.raw`\%H=\frac{12\times1}{180}\times100=6.67\%`}
          />
          <FormulaLine
            tex={String.raw`\%O=\frac{6\times16}{180}\times100=53.33\%`}
          />
        </DiagramBlock>
        <div className="rounded-lg border bg-slate-50 p-4">
          <h4 className="mb-2 font-bold">General Formula</h4>
          <FormulaLine
            tex={String.raw`\%\text{ of an element}=\frac{Z\cdot A}{M}\times100`}
          />
          <p>
            <InlineMath math={String.raw`Z`} /> = number of atoms of that
            element in each molecule.
          </p>
          <p>
            <InlineMath math={String.raw`A`} /> = atomic mass of that element.
          </p>
          <p>
            <InlineMath math={String.raw`M`} /> = molecular mass of compound.
          </p>
        </div>
      </section>

      {/* Page 56 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 56</h2>
        <ExampleCard
          question={
            <>
              A compound contains 15.5% phosphorus by weight. If each molecule
              contains 4 phosphorus atoms, calculate the molecular mass of the
              compound. Given <InlineMath math={String.raw`P=31`} />.
            </>
          }
          given={
            <>
              Percentage of phosphorus = 15.5%; number of P atoms per molecule =
              4; atomic mass of P = 31.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`\%\text{P}=\frac{Z_P\cdot A_P}{M}\times100`}
            />
          }
          calculation={
            <FormulaLine
              tex={String.raw`15.5=\frac{4\times31}{M}\times100\Rightarrow M=800`}
            />
          }
          answer={<InlineMath math={String.raw`800`} />}
        />
      </section>

      {/* Page 57 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 57</h2>
        <ExampleCard
          question={
            <>
              A compound contains 16% sulphur and 24% oxygen by mass. What
              should be the minimum molecular mass of the compound?
            </>
          }
          given={
            <>
              Percentage of sulphur = 16%; percentage of oxygen = 24%. Atomic
              masses: S = 32, O = 16.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`\%S=\frac{Z_S\times32}{M}\times100`}
              />
              <FormulaLine
                tex={String.raw`\%O=\frac{Z_O\times16}{M}\times100`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`16=\frac{Z_S\times32}{M}\times100\Rightarrow M=200Z_S`}
              />
              <p>
                Hence possible values from sulphur are{' '}
                <InlineMath math={String.raw`200,400,600,800,\ldots`} />.
              </p>
              <FormulaLine
                tex={String.raw`24=\frac{Z_O\times16}{M}\times100\Rightarrow M=\frac{200}{3}Z_O`}
              />
              <p>
                Hence possible values from oxygen are{' '}
                <InlineMath math={String.raw`\frac{200}{3},\frac{400}{3},200,\frac{800}{3},\ldots`} />.
              </p>
              <p>
                Common possible molecular masses are{' '}
                <InlineMath math={String.raw`200,400,600,800,\ldots`} />.
              </p>
            </>
          }
          answer={<InlineMath math={String.raw`M_{\min}=200`} />}
        />

        <ExampleCard
          question={
            <>
              When 6.0 gm of a hydrocarbon is burnt completely in excess{' '}
              <InlineMath math={String.raw`O_2`} /> gas, 17.6 gm{' '}
              <InlineMath math={String.raw`CO_2`} /> is formed. Calculate the
              mass percent of hydrogen in the hydrocarbon.
            </>
          }
          given={
            <>
              Hydrocarbon mass = 6.0 gm; mass of{' '}
              <InlineMath math={String.raw`CO_2`} /> formed = 17.6 gm. Atomic
              masses: C = 12, H = 1, O = 16.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`\text{mass of C in hydrocarbon}=\frac{12}{44}\times m_{CO_2}`}
              />
              <FormulaLine
                tex={String.raw`\%H=100-\%C`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`m_C=\frac{12}{44}\times17.6=4.8\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`\%C=\frac{4.8}{6.0}\times100=80\%`}
              />
              <FormulaLine
                tex={String.raw`\%H=100-80=20\%`}
              />
            </>
          }
          answer={
            <>
              <InlineMath math={String.raw`\%C=80\%`} />,{' '}
              <InlineMath math={String.raw`\%H=20\%`} />.
            </>
          }
        />
      </section>

      {/* Page 58 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 58</h2>
        <h3 className="text-xl font-bold text-red-600">
          Detection and Estimation of Elements in Organic Compounds
        </h3>
        <h4 className="text-lg font-semibold">1. Carbon and Hydrogen</h4>
        <DiagramBlock title="Combustion estimation of C and H">
          <p>
            Organic compound is burnt with dry powdered{' '}
            <InlineMath math={String.raw`CuO`} /> in excess oxygen.
          </p>
          <p>
            The produced <InlineMath math={String.raw`H_2O`} /> is absorbed in
            anhydrous <InlineMath math={String.raw`CaCl_2`} /> and the produced{' '}
            <InlineMath math={String.raw`CO_2`} /> is absorbed in lime water or
            alkali solution.
          </p>
          <p>
            Increase in mass of the water-absorbing tube gives mass of{' '}
            <InlineMath math={String.raw`H_2O`} /> formed.
          </p>
          <p>
            Increase in mass of the <InlineMath math={String.raw`CO_2`} />{' '}
            absorbing unit gives mass of{' '}
            <InlineMath math={String.raw`CO_2`} /> formed.
          </p>
        </DiagramBlock>
        <div className="rounded-lg border bg-slate-50 p-4">
          <h4 className="mb-2 font-bold">Hydrogen from water formed</h4>
          <FormulaLine
            tex={String.raw`H_2O=2\times1+1\times16=18`}
          />
          <FormulaLine
            tex={String.raw`m_H=\frac{2}{18}\times m_{H_2O}`}
          />
          <FormulaLine
            tex={String.raw`\%H=\frac{(2/18)\times m_{H_2O}}{m_{\text{O.C. taken}}}\times100`}
          />
        </div>
        <div className="rounded-lg border bg-slate-50 p-4">
          <h4 className="mb-2 font-bold">Carbon from carbon dioxide formed</h4>
          <FormulaLine
            tex={String.raw`CO_2=12+2\times16=44`}
          />
          <FormulaLine
            tex={String.raw`m_C=\frac{12}{44}\times m_{CO_2}`}
          />
          <FormulaLine
            tex={String.raw`\%C=\frac{(12/44)\times m_{CO_2}}{m_{\text{O.C. taken}}}\times100`}
          />
        </div>
      </section>

      {/* Page 59 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 59</h2>
        <h4 className="text-lg font-semibold">2. Sulphur</h4>
        <DiagramBlock title="Sulphur estimation">
          <p>
            Organic compound is heated with sodium. Sulphur is converted into{' '}
            <InlineMath math={String.raw`Na_2S`} />.
          </p>
          <p>
            With lead acetate, sulphide gives black precipitate of{' '}
            <InlineMath math={String.raw`PbS`} />.
          </p>
          <FormulaLine tex={String.raw`Na_2S+Pb(CH_3COO)_2\rightarrow PbS\downarrow`} />
          <p>
            Alternatively, sulphur may be oxidised to sulphate using concentrated{' '}
            <InlineMath math={String.raw`HNO_3`} /> and then precipitated as{' '}
            <InlineMath math={String.raw`BaSO_4`} /> using{' '}
            <InlineMath math={String.raw`BaCl_2`} />.
          </p>
        </DiagramBlock>
        <h3 className="text-xl font-bold">
          Estimation of Sulphur and Nitrogen
        </h3>
        <div className="rounded-lg border bg-slate-50 p-4">
          <h4 className="mb-2 font-bold">Sulphur from PbS</h4>
          <FormulaLine
            tex={String.raw`PbS=208+32=240`}
          />
          <FormulaLine
            tex={String.raw`m_S=\frac{32}{240}\times m_{PbS}`}
          />
          <FormulaLine
            tex={String.raw`\%S=\frac{(32/240)\times m_{PbS}}{m_{\text{O.C. taken}}}\times100`}
          />
          <h4 className="mb-2 mt-4 font-bold">Sulphur from BaSO₄</h4>
          <FormulaLine
            tex={String.raw`BaSO_4=137+32+4\times16=233`}
          />
          <FormulaLine
            tex={String.raw`m_S=\frac{32}{233}\times m_{BaSO_4}`}
          />
          <FormulaLine
            tex={String.raw`\%S=\frac{(32/233)\times m_{BaSO_4}}{m_{\text{O.C. taken}}}\times100`}
          />
        </div>
        <h4 className="text-lg font-semibold">3. Nitrogen</h4>
        <h5 className="font-semibold">a. Dumas Method</h5>
        <DiagramBlock title="Dumas method">
          <p>
            Organic compound is burnt in excess oxygen or with anhydrous CuO.
            Products may include{' '}
            <InlineMath math={String.raw`CO_2`} />,{' '}
            <InlineMath math={String.raw`H_2O`} />,{' '}
            <InlineMath math={String.raw`SO_2`} />,{' '}
            <InlineMath math={String.raw`P_4O_{10}`} />,{' '}
            <InlineMath math={String.raw`Cl_2O_7`} />, metal oxide, and{' '}
            <InlineMath math={String.raw`N_2(g)`} />.
          </p>
          <p>
            If <InlineMath math={String.raw`N_2(g)`} /> is collected over water,
            the measured pressure must be corrected:
          </p>
          <FormulaLine
            tex={String.raw`P_{N_2}=P_{\text{total}}-\text{vapour pressure of water}`}
          />
        </DiagramBlock>
      </section>

      {/* Page 60 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 60</h2>
        <h5 className="font-semibold">b. Kjeldahl&apos;s Method</h5>
        <DiagramBlock title="Kjeldahl method">
          <FormulaLine
            tex={String.raw`\text{O.C.}\xrightarrow[\Delta]{\text{conc. }H_2SO_4}(NH_4)_2SO_4\xrightarrow[\text{boil}]{\text{conc. NaOH}}NH_3(g)`}
          />
          <p>
            The liberated <InlineMath math={String.raw`NH_3`} /> is absorbed in
            standard acid and the excess acid is back-titrated.
          </p>
        </DiagramBlock>
        <h4 className="text-lg font-semibold">4. Cl, Br, I</h4>
        <DiagramBlock title="Halogen estimation">
          <p>
            Organic compound is fused with sodium, then treated with{' '}
            <InlineMath math={String.raw`AgNO_3`} /> solution.
          </p>
          <p>
            Precipitate colour helps identify halogen:
          </p>
          <ul className="ml-6 list-disc">
            <li>Curdy white precipitate → Cl</li>
            <li>Yellowish precipitate → Br</li>
            <li>Deep yellow precipitate → I</li>
          </ul>
        </DiagramBlock>
        <h4 className="text-lg font-semibold">5. Oxygen</h4>
        <p>
          Oxygen is not estimated directly. If the sum of percentages of all
          other elements is less than 100, the remaining percentage is considered
          due to oxygen.
        </p>
      </section>

      {/* Page 61 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 61</h2>
        <ExampleCard
          title="Solved Example — Dumas Method"
          question={
            <>
              When 75 gm of an organic compound is burnt in excess oxygen, 16.4
              L <InlineMath math={String.raw`N_2`} /> gas is collected over
              water at 785 torr and 27°C. Calculate the percentage of nitrogen
              in the compound. Aqueous tension at 27°C = 25 mm Hg.
            </>
          }
          given={
            <>
              Organic compound = 75 gm. Measured gas volume = 16.4 L. Total
              pressure = 785 torr. Aqueous tension = 25 torr. Therefore{' '}
              <InlineMath math={String.raw`P_{N_2}=760`} /> torr = 1 atm.
              Temperature = 300 K.
            </>
          }
          formula={
            <>
              <FormulaLine tex={String.raw`P_{N_2}=P_{\text{total}}-P_{H_2O}`} />
              <FormulaLine tex={String.raw`PV=nRT`} />
              <FormulaLine
                tex={String.raw`\%N=\frac{m_N}{m_{\text{compound}}}\times100`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`P_{N_2}=785-25=760\ \text{torr}=1\ \text{atm}`}
              />
              <FormulaLine
                tex={String.raw`1\times16.4=\frac{w_{N_2}}{28}\times0.082\times300`}
              />
              <FormulaLine
                tex={String.raw`w_{N_2}=\frac{56}{3}\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`\%N=\frac{56/3}{75}\times100=24.89\%`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`24.89\%`} />}
        />
      </section>

      {/* Page 62 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 62</h2>
        <ExampleCard
          title="Solved Example — Kjeldahl's Method"
          question={
            <>
              In a Kjeldahl&apos;s experiment, 10 gm of an organic compound produces
              some <InlineMath math={String.raw`NH_3`} /> gas which is completely
              absorbed in a solution containing 49 gm{' '}
              <InlineMath math={String.raw`H_2SO_4`} />. The resulting solution
              requires 30 gm NaOH for complete neutralisation. Calculate the
              mass percent of nitrogen in the compound.
            </>
          }
          given={
            <>
              Organic compound = 10 gm. Acid taken = 49 gm{' '}
              <InlineMath math={String.raw`H_2SO_4`} />. NaOH used for leftover
              acid = 30 gm.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`2NH_3+H_2SO_4\rightarrow(NH_4)_2SO_4`}
              />
              <FormulaLine
                tex={String.raw`2NaOH+H_2SO_4\rightarrow Na_2SO_4+2H_2O`}
              />
            </>
          }
          calculation={
            <>
              <p>Acid consumed by ammonia:</p>
              <FormulaLine
                tex={String.raw`m_{H_2SO_4\ \text{consumed by }NH_3}=49-\left(\frac{98}{2\times40}\times30\right)=49-\frac{147}{4}=\frac{49}{4}\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`2NH_3+H_2SO_4\rightarrow(NH_4)_2SO_4`}
              />
              <FormulaLine
                tex={String.raw`\frac{49}{4}\ \text{gm }H_2SO_4\equiv\frac{1}{4}\times14=3.5\ \text{gm N}`}
              />
              <FormulaLine
                tex={String.raw`\%N=\frac{3.5}{10}\times100=35\%`}
              />
            </>
          }
          answer={<><InlineMath math={String.raw`35\%`} /> nitrogen</>}
        />
        <DiagramBlock title="Equivalent method for Kjeldahl problem">
          <FormulaLine
            tex={String.raw`n_{H^+}=n_{OH^-}+n_{NH_3}`}
          />
          <FormulaLine
            tex={String.raw`\frac{49}{98}\times2=\frac{30}{40}\times1+x\times1`}
          />
          <FormulaLine tex={String.raw`x=\frac{1}{4}`} />
          <FormulaLine
            tex={String.raw`\%N=\frac{(1/4)\times14}{10}\times100=35\%`}
          />
        </DiagramBlock>
      </section>

      {/* Page 63 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 63</h2>
        <h3 className="text-xl font-bold text-red-600">
          Empirical and Molecular Formula
        </h3>
        <p>
          Molecular formula of a compound represents the exact number of atoms of
          different elements present in each molecule of that compound, while the
          empirical formula represents the simplest atomic ratio of the elements
          in the compound.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-300 text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="border border-slate-300 p-2 text-left">
                  Compound
                </th>
                <th className="border border-slate-300 p-2 text-left">
                  Molecular Formula
                </th>
                <th className="border border-slate-300 p-2 text-left">
                  Empirical Formula
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-2">Ethene</td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`C_2H_4`} />
                </td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`CH_2`} />
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  Ethanol or ethyl alcohol
                </td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`C_2H_6O`} />
                </td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`C_2H_6O`} />
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Glucose</td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`C_6H_{12}O_6`} />
                </td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`CH_2O`} />
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  Acetic acid or ethanoic acid
                </td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`C_2H_4O_2`} />
                </td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`CH_2O`} />
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  Methyl formate or methyl methanoate
                </td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`C_2H_4O_2`} />
                </td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`CH_2O`} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <DiagramBlock title="Structural formula distinction">
          <p>
            Although acetic acid and methyl formate have the same molecular
            formula <InlineMath math={String.raw`C_2H_4O_2`} />, they have
            different structural formulae.
          </p>
          <FormulaLine tex={String.raw`CH_3COOH`} />
          <FormulaLine tex={String.raw`HCOOCH_3`} />
        </DiagramBlock>
      </section>
    </main>
  );
}
