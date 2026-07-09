// app/notes/stoichiometry/part1.tsx
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
        <div className="rounded-xl border bg-slate-50 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-red-600">
            Stoichiometry
          </h1>
        </div>
      </section>

      {/* Page 2 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 2</h2>
        <h1 className="text-3xl font-extrabold text-red-600">
          Stoichiometry
        </h1>
        <p className="text-xl font-semibold">
          Calculations based on chemical equations
        </p>

        <DiagramBlock title="Introductory stoichiometry diagram">
          <p>
            The page shows the balanced reaction:
          </p>
          <FormulaLine
            tex={String.raw`CH_4+2O_2\rightarrow CO_2+2H_2O`}
          />
          <p>
            Reactants are shown on the left and products on the right.
          </p>
          <p>
            The amount given and amount required may be represented using mass{' '}
            <InlineMath math={String.raw`(m)`} />, volume{' '}
            <InlineMath math={String.raw`(V)`} />, or number of particles{' '}
            <InlineMath math={String.raw`(N_o)`} />.
          </p>
        </DiagramBlock>

        <p>
          Depending on the units used to represent amounts, problems may be
          based on:
        </p>

        <ol className="ml-6 list-decimal space-y-3 text-sm">
          <li>
            <strong>Weight-weight relationship:</strong> Gravimetric analysis.
          </li>
          <li>
            <strong>Weight-volume relationship:</strong>
            <ul className="ml-6 mt-2 list-disc space-y-1">
              <li>For gases: Gas analysis or eudiometry.</li>
              <li>For solutions: Volumetric analysis or titration.</li>
            </ul>
          </li>
          <li>
            <strong>Volume-volume relationship.</strong>
          </li>
        </ol>
      </section>

      {/* Page 3 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 3</h2>

        <h3 className="text-xl font-bold text-red-600">
          Methods to Solve Problems
        </h3>

        <p className="font-semibold">
          To relate amounts:
        </p>

        <h3 className="text-xl font-bold">
          1. Use of Mole Concept
        </h3>

        <h4 className="text-lg font-semibold">
          A. Unitary Method
        </h4>

        <ExampleCard
          title="Solved Example — KMnO₄ and SO₂ by Unitary Method"
          question={
            <>
              31.6 gm <InlineMath math={String.raw`KMnO_4`} /> reacts with{' '}
              <InlineMath math={String.raw`SO_2`} />. Calculate the mass of{' '}
              <InlineMath math={String.raw`SO_2`} /> required.
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`KMnO_4`} /> = 31.6 gm.
              Required mass of <InlineMath math={String.raw`SO_2`} /> = ?
            </>
          }
          formula={
            <>
              <p>
                Step I: Write a completely balanced chemical reaction involved.
              </p>
              <FormulaLine
                tex={String.raw`aKMnO_4+bSO_2+cH_2O\rightarrow dK_2SO_4+eMnSO_4+fH_2SO_4`}
              />
            </>
          }
          calculation={
            <>
              <p>Balancing by comparing atoms:</p>
              <FormulaLine tex={String.raw`K:\quad a=2d`} />
              <FormulaLine tex={String.raw`Mn:\quad a=e`} />
              <FormulaLine
                tex={String.raw`O:\quad 4a+2b+c=4d+4e+4f`}
              />
              <FormulaLine tex={String.raw`S:\quad b=d+e+f`} />
              <FormulaLine tex={String.raw`H:\quad 2c=2f\Rightarrow c=f`} />
              <p>Take <InlineMath math={String.raw`d=1`} />.</p>
              <FormulaLine tex={String.raw`a=e=2`} />
              <p>Using sulfur and hydrogen balance:</p>
              <FormulaLine tex={String.raw`b=3+c`} />
              <FormulaLine tex={String.raw`c=f=2`} />
              <FormulaLine tex={String.raw`b=5`} />
              <p className="font-semibold text-amber-700">
                Final balanced equation continues on Page 4.
              </p>
            </>
          }
          answer="Continues on Page 4"
        />
      </section>

      {/* Page 4 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 4</h2>

        <h3 className="text-xl font-bold">Step II</h3>

        <FormulaLine
          tex={String.raw`2KMnO_4+5SO_2+2H_2O\rightarrow K_2SO_4+2MnSO_4+2H_2SO_4`}
        />

        <p>
          The numbers used in balancing are called{' '}
          <strong>stoichiometric coefficients</strong> of the components, and
          they represent their relative number of moles.
        </p>

        <p>
          Relate the required amount using moles of components involved.
        </p>

        <div className="rounded-lg border bg-slate-50 p-4">
          <FormulaLine
            tex={String.raw`2KMnO_4+5SO_2+2H_2O\rightarrow\cdots`}
          />
          <FormulaLine
            tex={String.raw`2\ \text{mole }KMnO_4=2\times 158\ \text{gm}`}
          />
          <FormulaLine
            tex={String.raw`5\ \text{mole }SO_2=5\times 64\ \text{gm}`}
          />
          <FormulaLine
            tex={String.raw`31.6\ \text{gm }KMnO_4\rightarrow \frac{5\times64}{2\times158}\times31.6=32.0\ \text{gm }SO_2`}
          />
        </div>

        <div className="rounded-md bg-blue-50 p-3 font-bold text-blue-900">
          Final Answer:{' '}
          <InlineMath math={String.raw`32.0\ \text{gm }SO_2`} />
        </div>

        <h3 className="text-xl font-bold">
          B. Factor Labelling Method
        </h3>

        <FormulaLine
          tex={String.raw`n_{SO_2}=\frac{5}{2}\times n_{KMnO_4}`}
        />
        <FormulaLine
          tex={String.raw`\frac{n_{SO_2}}{5}=\frac{n_{KMnO_4}}{2}=\text{constant}`}
        />
      </section>

      {/* Page 5 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 5</h2>

        <p>
          For any balanced chemical reaction, the ratio of moles of a component
          involved in the reaction and its stoichiometric coefficient remains
          the same for all the components.
        </p>

        <FormulaLine
          tex={String.raw`\frac{n_{SO_2}}{5}=\frac{n_{KMnO_4}}{2}`}
        />
        <FormulaLine
          tex={String.raw`\frac{w_{SO_2}/64}{5}=\frac{31.6/158}{2}`}
        />
        <FormulaLine
          tex={String.raw`w_{SO_2}=32\ \text{gm}`}
        />

        <ExampleCard
          question={
            <>
              How many gm <InlineMath math={String.raw`O_2`} /> is needed for
              complete combustion of 6.0 gm{' '}
              <InlineMath math={String.raw`C_2H_6`} />?
            </>
          }
          given={
            <>
              Mass of ethane = 6.0 gm. Molar mass of{' '}
              <InlineMath math={String.raw`C_2H_6`} /> = 30 gm/mol. Molar mass
              of <InlineMath math={String.raw`O_2`} /> = 32 gm/mol.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`C_2H_6+\frac{7}{2}O_2\rightarrow2CO_2+3H_2O`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`1\ \text{mole }C_2H_6=30\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`\frac{7}{2}\ \text{mole }O_2=\frac{7}{2}\times32\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`6\ \text{gm }C_2H_6\rightarrow \frac{7\times16}{30}\times6=22.4\ \text{gm }O_2`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`22.4\ \text{gm }O_2`} />}
        />
      </section>

      {/* Page 6 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 6</h2>

        <ExampleCard
          question={
            <>
              How many gm <InlineMath math={String.raw`CaCO_3`} /> should be
              decomposed completely to produce 1.76 gm{' '}
              <InlineMath math={String.raw`CO_2`} />?
            </>
          }
          given={
            <>
              Required <InlineMath math={String.raw`CO_2`} /> = 1.76 gm.
              Molar mass of <InlineMath math={String.raw`CaCO_3`} /> = 100
              gm/mol; molar mass of <InlineMath math={String.raw`CO_2`} /> = 44
              gm/mol.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`CaCO_3\rightarrow CaO+CO_2`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`1\ \text{mole }CaCO_3=100\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`1\ \text{mole }CO_2=44\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`m_{CaCO_3}=\frac{100}{44}\times1.76=4\ \text{gm}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`4\ \text{gm }CaCO_3`} />}
        />

        <ExampleCard
          question={
            <>
              How many gm <InlineMath math={String.raw`CO_2`} /> may be
              obtained by complete decomposition of 16.8 gm{' '}
              <InlineMath math={String.raw`NaHCO_3`} />?
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`NaHCO_3`} /> = 16.8 gm.
              Molar mass of <InlineMath math={String.raw`NaHCO_3`} /> = 84
              gm/mol; molar mass of <InlineMath math={String.raw`CO_2`} /> = 44
              gm/mol.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`2NaHCO_3\rightarrow Na_2CO_3+CO_2+H_2O`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`2\ \text{mole }NaHCO_3=2\times84\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`1\ \text{mole }CO_2=44\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`m_{CO_2}=\frac{44}{2\times84}\times16.8=4.4\ \text{gm}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`4.4\ \text{gm }CO_2`} />}
        />
      </section>

      {/* Page 7 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 7</h2>

        <h3 className="text-xl font-bold text-red-600">
          Thermal Decomposition of Metal Carbonates
        </h3>

        <FormulaLine
          tex={String.raw`\text{Metal carbonate}\xrightarrow{\Delta}\text{Metal oxide}+CO_2`}
        />
        <FormulaLine
          tex={String.raw`MgCO_3\xrightarrow{\Delta}MgO+CO_2`}
        />
        <FormulaLine
          tex={String.raw`FeCO_3\xrightarrow{\Delta}FeO+CO_2`}
        />

        <h3 className="text-xl font-bold">Exceptions</h3>

        <div className="rounded-lg border bg-slate-50 p-4">
          <p className="font-semibold">
            1. Alkali metal carbonates, except{' '}
            <InlineMath math={String.raw`Li_2CO_3`} />, do not decompose.
            They just melt.
          </p>
          <FormulaLine
            tex={String.raw`Na_2CO_3(s)\xrightarrow{\Delta}Na_2CO_3(l)`}
          />
          <FormulaLine
            tex={String.raw`Li_2CO_3\xrightarrow{\Delta}Li_2O+CO_2`}
          />
        </div>

        <div className="rounded-lg border bg-slate-50 p-4">
          <p className="font-semibold">
            2. Oxides of Ag, Hg, Cu, etc. are thermally unstable.
          </p>
          <FormulaLine
            tex={String.raw`Ag_2CO_3\xrightarrow{\Delta}Ag_2O+CO_2`}
          />
          <FormulaLine
            tex={String.raw`Ag_2O\rightarrow2Ag+\frac{1}{2}O_2`}
          />
          <FormulaLine
            tex={String.raw`\text{Overall: }Ag_2CO_3\xrightarrow{\Delta}2Ag+\frac{1}{2}O_2+CO_2`}
          />
        </div>

        <h3 className="text-xl font-bold text-red-600">
          Thermal Decomposition of Metal Bicarbonates
        </h3>

        <FormulaLine
          tex={String.raw`\text{Metal bicarbonate}\xrightarrow{\Delta}\text{Metal carbonate}+CO_2+H_2O`}
        />
        <FormulaLine
          tex={String.raw`2AgHCO_3\xrightarrow{\Delta}Ag_2CO_3+CO_2+H_2O`}
        />

        <p className="font-semibold text-amber-700">
          Decomposition of silver bicarbonate continues on Page 8.
        </p>
      </section>

      {/* Page 8 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 8</h2>

        <h3 className="text-xl font-bold">
          Continuation of Bicarbonate Decomposition
        </h3>

        <FormulaLine
          tex={String.raw`\text{Overall: }2AgHCO_3\xrightarrow{\Delta}2Ag+\frac{1}{2}O_2+2CO_2+H_2O`}
        />
        <FormulaLine
          tex={String.raw`Ca(HCO_3)_2\xrightarrow{\Delta}CaCO_3+CO_2+H_2O`}
        />
        <FormulaLine
          tex={String.raw`CaCO_3\xrightarrow{\Delta}CaO+CO_2`}
        />
        <FormulaLine
          tex={String.raw`\text{Overall: }Ca(HCO_3)_2\xrightarrow{\Delta}CaO+2CO_2+H_2O`}
        />
        <FormulaLine
          tex={String.raw`2NaHCO_3\xrightarrow{\Delta}Na_2CO_3+CO_2+H_2O`}
        />

        <ExampleCard
          question={
            <>
              How many gm <InlineMath math={String.raw`H_2SO_4`} /> is needed
              for complete reaction with 10 gm{' '}
              <InlineMath math={String.raw`NaHCO_3`} />?
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`NaHCO_3`} /> = 10 gm. Molar
              mass of <InlineMath math={String.raw`NaHCO_3`} /> = 84 gm/mol;
              molar mass of <InlineMath math={String.raw`H_2SO_4`} /> = 98
              gm/mol.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`2NaHCO_3+H_2SO_4\rightarrow Na_2SO_4+2CO_2+2H_2O`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`2\ \text{mole }NaHCO_3=2\times84\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`1\ \text{mole }H_2SO_4=98\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`m_{H_2SO_4}=\frac{98}{2\times84}\times10=5.83\ \text{gm}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`5.83\ \text{gm }H_2SO_4`} />}
        />

        <ExampleCard
          question={
            <>
              How many litre of <InlineMath math={String.raw`O_2`} /> gas will
              be produced at STP by complete decomposition of 4.90 gm{' '}
              <InlineMath math={String.raw`KClO_3`} />? Given{' '}
              <InlineMath math={String.raw`K=39`} />,{' '}
              <InlineMath math={String.raw`Cl=35.5`} />.
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`KClO_3`} /> = 4.90 gm.
              Molar mass of <InlineMath math={String.raw`KClO_3`} /> = 122.5
              gm/mol. At STP, 1 mole gas = 22.7 L as used in the notes.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`2KClO_3\rightarrow2KCl+3O_2`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`2\ \text{mole }KClO_3=2\times122.5\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`3\ \text{mole }O_2=3\times22.7\ \text{L at STP}`}
              />
              <FormulaLine
                tex={String.raw`V_{O_2}=\frac{3\times22.7}{2\times122.5}\times4.9=1.362\ \text{L}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`1.362\ \text{L }O_2`} />}
        />
      </section>

      {/* Page 9 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 9</h2>

        <ExampleCard
          question={
            <>
              How many gm <InlineMath math={String.raw`MnO_2`} /> should be
              reacted with excess HCl solution to produce 24.6 L{' '}
              <InlineMath math={String.raw`Cl_2`} /> gas at 114 cm Hg and{' '}
              <InlineMath math={String.raw`27^\circ C`} />? Given{' '}
              <InlineMath math={String.raw`Mn=55`} />.
            </>
          }
          given={
            <>
              Volume of <InlineMath math={String.raw`Cl_2`} /> = 24.6 L;
              pressure = 114 cm Hg ={' '}
              <InlineMath math={String.raw`\frac{114}{76}`} /> atm; temperature
              = 300 K. Molar mass of <InlineMath math={String.raw`MnO_2`} /> =
              87 gm/mol.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`MnO_2+4HCl\rightarrow MnCl_2+Cl_2+2H_2O`}
              />
              <FormulaLine tex={String.raw`n=\frac{PV}{RT}`} />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`n_{Cl_2}=\frac{\left(\frac{114}{76}\right)\times24.6}{0.082\times300}=1.5\ \text{mol}`}
              />
              <p>
                From the reaction, 1 mole{' '}
                <InlineMath math={String.raw`MnO_2`} /> produces 1 mole{' '}
                <InlineMath math={String.raw`Cl_2`} />.
              </p>
              <FormulaLine
                tex={String.raw`m_{MnO_2}=87\times1.5=130.5\ \text{gm}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`130.5\ \text{gm }MnO_2`} />}
        />

        <ExampleCard
          question={
            <>
              A person produces 2.5 L gastric juice per day, which contains
              3.65 gm HCl per litre. Calculate the minimum number of antacid
              tablets, each containing 870 mg{' '}
              <InlineMath math={String.raw`Mg(OH)_2`} />, that should be taken
              to neutralise all HCl produced in one day.
            </>
          }
          given={
            <>
              Gastric juice = 2.5 L/day; HCl concentration = 3.65 gm/L. Each
              tablet contains 870 mg = 0.870 gm{' '}
              <InlineMath math={String.raw`Mg(OH)_2`} />.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`2HCl+Mg(OH)_2\rightarrow MgCl_2+2H_2O`}
              />
              <FormulaLine
                tex={String.raw`2\ \text{mol HCl}\equiv1\ \text{mol }Mg(OH)_2`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`m_{HCl}=2.5\times3.65=9.125\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`2\ \text{mol HCl}=2\times36.5=73\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`1\ \text{mol }Mg(OH)_2=58\ \text{gm}`}
              />
              <p className="font-semibold text-amber-700">
                Calculation continues on Page 10 / Part 2.
              </p>
            </>
          }
          answer="Continues on Page 10 / Part 2"
        />
      </section>
    </main>
  );
}
