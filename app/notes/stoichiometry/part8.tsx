// app/notes/stoichiometry/part8.tsx
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

export default function StoichiometryPart8() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 bg-white p-8 text-slate-900">
      {/* Page 64 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 64</h2>
        <h3 className="text-xl font-bold text-red-600">
          Empirical Formula and Molecular Formula
        </h3>
        <ul className="ml-6 list-disc space-y-3">
          <li>
            Two different compounds may have the same molecular formula and/or
            empirical formula.
          </li>
          <li>
            Ionic compounds are represented by the simplest ratio of ions
            present in them. Hence, their formula is mainly empirical formula.
          </li>
        </ul>
        <FormulaLine
          tex={String.raw`\text{Molecular formula}=(\text{Empirical formula})_n`}
        />
        <FormulaLine
          tex={String.raw`n=\frac{\text{molecular formula mass}}{\text{empirical formula mass}}`}
        />
        <ExampleCard
          question={
            <>
              The empirical formula of a compound is{' '}
              <InlineMath math={String.raw`CH_3O`} />. If the molecular mass of
              the compound is experimentally measured as{' '}
              <InlineMath math={String.raw`61.8\pm0.5`} />, determine its
              molecular formula.
            </>
          }
          given={
            <>
              Empirical formula = <InlineMath math={String.raw`CH_3O`} />;
              empirical formula mass ={' '}
              <InlineMath math={String.raw`12+3+16=31`} />; molecular mass ≈
              61.8.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`n=\frac{\text{MFM}}{\text{EFM}}`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`n=\frac{61.8\pm0.5}{31}\approx2`}
              />
              <FormulaLine
                tex={String.raw`\text{M.F.}=(CH_3O)_2=C_2H_6O_2`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`C_2H_6O_2`} />}
        />

        <ExampleCard
          question={
            <>
              The empirical formula of a compound is{' '}
              <InlineMath math={String.raw`CH_2O`} />. If 0.0833 mole of this
              compound contains 1 gm hydrogen, calculate the molecular formula
              of the compound.
            </>
          }
          given={
            <>
              Empirical formula = <InlineMath math={String.raw`CH_2O`} />;
              empirical formula mass = 30. Given 0.0833 mole compound contains 1
              gm hydrogen.
            </>
          }
          formula={
            <>
              <FormulaLine tex={String.raw`\text{M.F.}=(CH_2O)_n`} />
              <FormulaLine
                tex={String.raw`\text{moles}=\frac{w}{M}`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`M_{(CH_2O)_n}=30n`}
              />
              <FormulaLine
                tex={String.raw`\text{mass of H in 1 mole compound}=2n\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`0.0833\ \text{mole compound contains }2n\times0.0833=1\ \text{gm H}`}
              />
              <FormulaLine tex={String.raw`n=6`} />
              <FormulaLine
                tex={String.raw`\text{M.F.}=(CH_2O)_6=C_6H_{12}O_6`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`C_6H_{12}O_6`} />}
        />
      </section>

      {/* Page 65 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 65</h2>
        <h3 className="text-xl font-bold">
          Alternative Method for Molecular Formula
        </h3>
        <div className="rounded-lg border bg-slate-50 p-4">
          <FormulaLine
            tex={String.raw`\text{M.F.}=(CH_2O)_n`}
          />
          <FormulaLine
            tex={String.raw`1\ \text{mole compound contains }2n\ \text{gm hydrogen}`}
          />
          <FormulaLine
            tex={String.raw`0.0833\ \text{mole compound contains }2n\times0.0833=1`}
          />
          <FormulaLine tex={String.raw`n=6`} />
        </div>

        <ExampleCard
          question={
            <>
              A drug mesifurane owes its activity to tetrahydrocannabinol, which
              contains 70% as many carbon atoms as hydrogen atoms and 15 times
              as many hydrogen atoms as oxygen atoms. If each gm of
              tetrahydrocannabinol contains 0.00318 moles, determine its
              molecular formula.
            </>
          }
          given={
            <>
              Carbon atoms = 70% of hydrogen atoms. Hydrogen atoms = 15 × oxygen
              atoms. 1 gm compound contains 0.00318 mole compound.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`\text{Molecular mass}=\frac{w}{n}`}
              />
              <FormulaLine
                tex={String.raw`\text{M.F.}=C_{0.70(15x)}H_{15x}O_x`}
              />
            </>
          }
          calculation={
            <>
              <p>
                Let oxygen atoms = <InlineMath math={String.raw`x`} />.
              </p>
              <FormulaLine
                tex={String.raw`H=15x,\qquad C=70\%\times15x=10.5x`}
              />
              <FormulaLine
                tex={String.raw`\text{M.F.}=C_{10.5x}H_{15x}O_x`}
              />
              <FormulaLine
                tex={String.raw`M=12(10.5x)+1(15x)+16x=157x`}
              />
              <FormulaLine
                tex={String.raw`0.00318=\frac{1}{157x}`}
              />
              <FormulaLine
                tex={String.raw`x=\frac{1}{157\times0.00318}\approx2`}
              />
              <FormulaLine
                tex={String.raw`\text{M.F.}=C_{21}H_{30}O_2`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`C_{21}H_{30}O_2`} />}
        />
      </section>

      {/* Page 66 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 66</h2>
        <h3 className="text-xl font-bold text-red-600">
          Determination of Empirical Formula and Molecular Formula from
          Percentage Composition
        </h3>
        <ExampleCard
          question={
            <>
              A hydrocarbon has molecular mass 30 and contains 80% carbon by
              weight. Determine its empirical formula and molecular formula.
            </>
          }
          given={
            <>
              Hydrocarbon molecular mass = 30. Percentage composition: C = 80%,
              H = 20%.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`\text{number of gram atoms}=\frac{\%\text{ composition}}{\text{atomic mass}}`}
              />
              <FormulaLine
                tex={String.raw`n=\frac{\text{molecular formula mass}}{\text{empirical formula mass}}`}
              />
            </>
          }
          calculation={
            <>
              <p>Take 100 gm hydrocarbon.</p>
              <FormulaLine
                tex={String.raw`m_C=80\ \text{gm},\quad n_C=\frac{80}{12}=6.67`}
              />
              <FormulaLine
                tex={String.raw`m_H=20\ \text{gm},\quad n_H=\frac{20}{1}=20`}
              />
              <p>Divide by the smallest value, 6.67:</p>
              <FormulaLine
                tex={String.raw`C:H=\frac{6.67}{6.67}:\frac{20}{6.67}=1:3`}
              />
              <FormulaLine tex={String.raw`\text{E.F.}=CH_3`} />
              <FormulaLine tex={String.raw`\text{EFM}=15`} />
              <FormulaLine tex={String.raw`n=\frac{30}{15}=2`} />
              <FormulaLine
                tex={String.raw`\text{M.F.}=(CH_3)_2=C_2H_6`}
              />
            </>
          }
          answer={
            <>
              Empirical formula = <InlineMath math={String.raw`CH_3`} /> and
              molecular formula = <InlineMath math={String.raw`C_2H_6`} />.
            </>
          }
        />
      </section>

      {/* Page 67 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 67</h2>
        <DiagramBlock title="Alternative calculation for the hydrocarbon example">
          <p>For 1 mole hydrocarbon, molecular mass = 30 gm.</p>
          <FormulaLine
            tex={String.raw`C=30\times\frac{80}{100}=24\ \text{gm}=\frac{24}{12}=2\ \text{gram atoms}`}
          />
          <FormulaLine
            tex={String.raw`H=30-24=6\ \text{gm}=\frac{6}{1}=6\ \text{gram atoms}`}
          />
          <FormulaLine
            tex={String.raw`\text{M.F.}=C_2H_6,\qquad \text{E.F.}=CH_3`}
          />
        </DiagramBlock>

        <ExampleCard
          question={
            <>
              An organic compound of molecular mass 60 contains 40% carbon and
              6.67% hydrogen by mass. Determine the empirical formula and
              molecular formula of the compound.
            </>
          }
          given={
            <>
              Molecular mass = 60. Carbon = 40%; hydrogen = 6.67%; oxygen =
              remaining percentage.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`\text{number of gram atoms}=\frac{\text{mass of element}}{\text{atomic mass}}`}
            />
          }
          calculation={
            <>
              <p>Take 1 mole compound, so mass of compound = 60 gm.</p>
              <FormulaLine
                tex={String.raw`m_C=60\times\frac{40}{100}=24\ \text{gm}\Rightarrow n_C=\frac{24}{12}=2`}
              />
              <FormulaLine
                tex={String.raw`m_H=60\times\frac{6.67}{100}\approx4\ \text{gm}\Rightarrow n_H=4`}
              />
              <FormulaLine
                tex={String.raw`m_O=60-(24+4)=32\ \text{gm}\Rightarrow n_O=\frac{32}{16}=2`}
              />
              <FormulaLine
                tex={String.raw`\text{M.F.}=C_2H_4O_2`}
              />
              <FormulaLine
                tex={String.raw`\text{E.F.}=CH_2O`}
              />
            </>
          }
          answer={
            <>
              Molecular formula = <InlineMath math={String.raw`C_2H_4O_2`} />;
              empirical formula = <InlineMath math={String.raw`CH_2O`} />.
            </>
          }
        />
      </section>

      {/* Page 68 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 68</h2>
        <h3 className="text-xl font-bold text-red-600">
          Experimental Determination of Atomic Mass
        </h3>
        <h4 className="text-lg font-semibold">1. Isotopic Method</h4>
        <DiagramBlock title="Average atomic mass of chlorine">
          <p>
            Chlorine contains approximately 75%{' '}
            <InlineMath math={String.raw`^{35}Cl`} /> and 25%{' '}
            <InlineMath math={String.raw`^{37}Cl`} />.
          </p>
          <FormulaLine
            tex={String.raw`\text{Average atomic mass of Cl}=\frac{35\times75+37\times25}{100}=35.5`}
          />
        </DiagramBlock>
        <h4 className="text-lg font-semibold">2. Cannizzaro&apos;s Method</h4>
        <p>
          The atomic mass of an element may be determined using the percentage
          composition and molecular masses of its compounds.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-300 text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="border border-slate-300 p-2 text-left">
                  Compound containing S
                </th>
                <th className="border border-slate-300 p-2 text-left">% of S</th>
                <th className="border border-slate-300 p-2 text-left">
                  Molecular mass
                </th>
                <th className="border border-slate-300 p-2 text-left">
                  Contribution of S in molecular mass
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-2">A</td>
                <td className="border border-slate-300 p-2">16%</td>
                <td className="border border-slate-300 p-2">200</td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`200\times\frac{16}{100}=32`} />
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">B</td>
                <td className="border border-slate-300 p-2">Given</td>
                <td className="border border-slate-300 p-2">Given</td>
                <td className="border border-slate-300 p-2">32</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">C</td>
                <td className="border border-slate-300 p-2">Given</td>
                <td className="border border-slate-300 p-2">Given</td>
                <td className="border border-slate-300 p-2">96</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">D</td>
                <td className="border border-slate-300 p-2">Given</td>
                <td className="border border-slate-300 p-2">Given</td>
                <td className="border border-slate-300 p-2">128</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="rounded-md bg-blue-50 p-3 font-semibold text-blue-900">
          The HCF of the contributions of sulphur is taken as the atomic mass of
          sulphur.
        </p>
      </section>

      {/* Page 69 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 69</h2>
        <h3 className="text-xl font-bold text-red-600">
          3. Dulong and Petit&apos;s Law
        </h3>
        <p>
          For solid elements at high temperature, the product of atomic weight
          and specific heat capacity is nearly{' '}
          <InlineMath math={String.raw`6.4\ \text{cal K}^{-1}\text{mol}^{-1}`} />.
        </p>
        <FormulaLine
          tex={String.raw`\text{Atomic weight}\times\text{specific heat capacity}\approx6.4`}
        />
        <ul className="ml-6 list-disc space-y-3 text-sm">
          <li>It gives better results for heavier elements.</li>
          <li>
            Specific heat capacity of a substance is the amount of heat required
            to raise the temperature of unit mass of the substance by{' '}
            <InlineMath math={String.raw`1^\circ C`} />.
          </li>
        </ul>
        <FormulaLine tex={String.raw`q=mS\Delta T`} />
        <FormulaLine
          tex={String.raw`S=\frac{q}{m\Delta T}`}
        />
        <p>
          Dulong and Petit&apos;s law gives approximate atomic mass. Exact atomic mass
          may be determined experimentally by determining the equivalent weight
          of the element.
        </p>
      </section>

      {/* Page 70 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 70</h2>
        <h3 className="text-xl font-bold">
          Relation of Atomic Weight, Specific Heat, Equivalent Weight and Valency
        </h3>
        <FormulaLine
          tex={String.raw`\text{Atomic weight (approx.)}=\frac{6.4}{\text{specific heat}}`}
        />
        <h4 className="text-lg font-semibold">
          Experimental Determination of Equivalent Weight
        </h4>
        <FormulaLine tex={String.raw`Na+HCl\rightarrow NaCl+H_2`} />
        <p>
          Equivalent weight of an element may be defined as the number of grams
          of the element which combines with or displaces 1 gm hydrogen, 8 gm
          oxygen, or 35.5 gm chlorine.
        </p>
        <p>Let an element M form an oxide:</p>
        <FormulaLine tex={String.raw`M_2O_v`} />
        <FormulaLine
          tex={String.raw`\text{molecular mass}=2A+16v`}
        />
        <p>
          Here <InlineMath math={String.raw`A`} /> is atomic weight of element M
          and <InlineMath math={String.raw`v`} /> is its valency.
        </p>
        <FormulaLine
          tex={String.raw`16v\ \text{gm oxygen combines with }2A\ \text{gm M}`}
        />
        <FormulaLine
          tex={String.raw`8\ \text{gm oxygen combines with }\frac{A}{v}\ \text{gm M}`}
        />
        <FormulaLine
          tex={String.raw`E=\frac{A}{v}`}
        />
        <FormulaLine
          tex={String.raw`\text{Equivalent weight of element}=\frac{\text{atomic weight}}{\text{valency}}`}
        />
      </section>

      {/* Page 71 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 71</h2>
        <FormulaLine
          tex={String.raw`\text{Valency}\approx\frac{\text{atomic weight (approx.)}}{\text{equivalent weight}}`}
        />
        <p>
          Make the valency an integer. It gives the correct valency of the
          element.
        </p>
        <FormulaLine
          tex={String.raw`\text{Atomic weight (exact)}=\text{equivalent weight}\times\text{valency}`}
        />
        <ExampleCard
          question={
            <>
              The specific heat capacity of a metal is{' '}
              <InlineMath math={String.raw`0.24\ \text{cal K}^{-1}\text{mol}^{-1}`} />.
              If the metal oxide contains 47% metal by weight, calculate the
              exact atomic weight of the metal.
            </>
          }
          given={
            <>
              Specific heat = 0.24. Metal oxide contains 47% metal and 53%
              oxygen.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`A_{\text{approx}}=\frac{6.4}{S}`}
              />
              <FormulaLine
                tex={String.raw`E_{\text{metal}}=\frac{\text{mass of metal}}{\text{mass of oxygen}}\times8`}
              />
              <FormulaLine
                tex={String.raw`\text{Valency}\approx\frac{A_{\text{approx}}}{E}`}
              />
              <FormulaLine
                tex={String.raw`A_{\text{exact}}=E\times\text{valency}`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`A_{\text{approx}}=\frac{6.4}{0.24}=26.67`}
              />
              <FormulaLine
                tex={String.raw`E_{\text{metal}}=\frac{47}{53}\times8=7.09`}
              />
              <FormulaLine
                tex={String.raw`\text{Valency}\approx\frac{26.67}{7.09}=3.78\approx4`}
              />
              <FormulaLine
                tex={String.raw`A_{\text{exact}}=7.09\times4=28.36`}
              />
            </>
          }
          answer={
            <>
              Exact atomic weight of the metal ={' '}
              <InlineMath math={String.raw`28.36`} />.
            </>
          }
        />
      </section>

      {/* Page 72 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 72</h2>
        <ExampleCard
          question={
            <>
              The specific heat capacity of a metal is{' '}
              <InlineMath math={String.raw`0.26`} />. If the vapour density of
              its volatile chloride is 47.5, calculate the exact atomic weight of
              the metal.
            </>
          }
          given={
            <>
              Specific heat = 0.26. Vapour density of volatile chloride = 47.5.
              Therefore molecular mass of chloride ={' '}
              <InlineMath math={String.raw`2\times47.5=95`} />.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`A_{\text{approx}}=\frac{6.4}{S}`}
              />
              <FormulaLine
                tex={String.raw`MCl_v:\quad 2(\text{V.D.})=A+35.5v`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`A_{\text{approx}}=\frac{6.4}{0.26}=24.615`}
              />
              <FormulaLine
                tex={String.raw`95=24.615+35.5v`}
              />
              <FormulaLine
                tex={String.raw`v=\frac{95-24.615}{35.5}\approx2`}
              />
              <FormulaLine
                tex={String.raw`95=A+2\times35.5`}
              />
              <FormulaLine tex={String.raw`A=24`} />
            </>
          }
          answer={
            <>
              Exact atomic weight of the metal ={' '}
              <InlineMath math={String.raw`24`} />.
            </>
          }
        />

        <h3 className="text-xl font-bold text-red-600">
          4. Vapour Density of Volatile Chloride Method
        </h3>
        <p>
          Let the molecular formula of a volatile chloride of an element be{' '}
          <InlineMath math={String.raw`MCl_v`} />.
        </p>
        <FormulaLine
          tex={String.raw`\text{Molecular mass}=A+35.5v`}
        />
        <FormulaLine
          tex={String.raw`2\times\text{V.D.}=E\times v+35.5v`}
        />
        <FormulaLine
          tex={String.raw`\text{Valency }v=\frac{2\times\text{V.D.}}{E+35.5}`}
        />
        <p className="rounded-md bg-amber-50 p-3 text-amber-900">
          This derivation continues in Part 9.
        </p>
      </section>
    </main>
  );
}
