// app/notes/stoichiometry/part6.tsx
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

export default function StoichiometryPart6() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 bg-white p-8 text-slate-900">
      {/* Page 46 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 46</h2>
        <ExampleCard
          title="Competitive Reaction Example — Case 3"
          question={
            <>
              3 mole carbon and 2 mole <InlineMath math={String.raw`O_2`} /> are
              taken and allowed to react completely. Determine the final
              composition of the system.
            </>
          }
          given={
            <>
              Carbon = 3 mol; oxygen = 2 mol{' '}
              <InlineMath math={String.raw`O_2`} />.
            </>
          }
          formula={
            <>
              <FormulaLine tex={String.raw`C+\frac{1}{2}O_2\rightarrow CO`} />
              <FormulaLine tex={String.raw`C+O_2\rightarrow CO_2`} />
            </>
          }
          calculation={
            <>
              <p>
                For 3 mol C, complete CO formation requires 1.5 mol{' '}
                <InlineMath math={String.raw`O_2`} />, and complete{' '}
                <InlineMath math={String.raw`CO_2`} /> formation requires 3 mol{' '}
                <InlineMath math={String.raw`O_2`} />.
              </p>
              <p>
                Since <InlineMath math={String.raw`1.5<2<3`} />, both CO and{' '}
                <InlineMath math={String.raw`CO_2`} /> will be formed.
              </p>
              <p>
                Let CO formed = <InlineMath math={String.raw`x`} /> mol.
                Then <InlineMath math={String.raw`CO_2`} /> formed ={' '}
                <InlineMath math={String.raw`3-x`} /> mol.
              </p>
              <FormulaLine
                tex={String.raw`\frac{x}{2}+(3-x)=2`}
              />
              <FormulaLine tex={String.raw`x=2`} />
              <FormulaLine
                tex={String.raw`CO=2\ \text{mol},\qquad CO_2=3-x=1\ \text{mol}`}
              />
            </>
          }
          answer={
            <>
              Final composition: CO = <InlineMath math={String.raw`2`} /> mol,
              <InlineMath math={String.raw`CO_2`} /> ={' '}
              <InlineMath math={String.raw`1`} /> mol, C = 0 mol,{' '}
              <InlineMath math={String.raw`O_2`} /> = 0 mol.
            </>
          }
        />
        <DiagramBlock title="Sequential interpretation of the same case">
          <p>
            First, oxygen is assumed to form CO:
          </p>
          <FormulaLine tex={String.raw`C+\frac{1}{2}O_2\rightarrow CO`} />
          <p>
            3 mol C uses 1.5 mol <InlineMath math={String.raw`O_2`} /> and forms
            3 mol CO. Oxygen left = 0.5 mol.
          </p>
          <p>
            Then CO is further oxidised:
          </p>
          <FormulaLine tex={String.raw`CO+\frac{1}{2}O_2\rightarrow CO_2`} />
          <p>
            0.5 mol <InlineMath math={String.raw`O_2`} /> converts 1 mol CO to
            1 mol <InlineMath math={String.raw`CO_2`} />.
          </p>
          <p>
            Final: 2 mol CO and 1 mol <InlineMath math={String.raw`CO_2`} />.
          </p>
        </DiagramBlock>
      </section>

      {/* Page 47 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 47</h2>
        <h3 className="text-xl font-bold text-red-600">
          Sequential or Successive Reactions
        </h3>
        <p>
          In sequential reactions, the product of one reaction becomes the
          reactant of the next reaction.
        </p>
        <DiagramBlock title="Examples of successive reactions">
          <FormulaLine tex={String.raw`KClO_3\rightarrow KCl+O_2`} />
          <FormulaLine tex={String.raw`C_2H_6+O_2\rightarrow CO_2+H_2O`} />
          <p>
            Here, <InlineMath math={String.raw`O_2`} /> produced from{' '}
            <InlineMath math={String.raw`KClO_3`} /> decomposition is consumed
            in combustion of <InlineMath math={String.raw`C_2H_6`} />.
          </p>
        </DiagramBlock>
        <h3 className="text-xl font-bold">
          Method I: Perform calculations for each reaction independently.
        </h3>
      </section>

      {/* Page 48 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 48</h2>
        <ExampleCard
          title="Successive Reaction — KClO₃ and Ethane"
          question={
            <>
              How many gm <InlineMath math={String.raw`KClO_3`} /> should be
              decomposed to produce sufficient oxygen required for complete
              combustion of 6 gm <InlineMath math={String.raw`C_2H_6`} />?
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`C_2H_6`} /> = 6 gm. Molar
              mass of <InlineMath math={String.raw`C_2H_6`} /> = 30 gm/mol.
              Molar mass of <InlineMath math={String.raw`KClO_3`} /> = 122.5
              gm/mol.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`C_2H_6+\frac{7}{2}O_2\rightarrow2CO_2+3H_2O`}
              />
              <FormulaLine
                tex={String.raw`2KClO_3\rightarrow2KCl+3O_2`}
              />
            </>
          }
          calculation={
            <>
              <p>Oxygen required for 6 gm ethane:</p>
              <FormulaLine
                tex={String.raw`30\ \text{gm }C_2H_6\equiv\frac{7}{2}\times32\ \text{gm }O_2`}
              />
              <FormulaLine
                tex={String.raw`6\ \text{gm }C_2H_6\equiv\frac{7\times16}{30}\times6=\frac{7\times16}{5}\ \text{gm }O_2`}
              />
              <p>Now relate oxygen to <InlineMath math={String.raw`KClO_3`} />:</p>
              <FormulaLine
                tex={String.raw`2\times122.5\ \text{gm }KClO_3\equiv3\times32\ \text{gm }O_2`}
              />
              <FormulaLine
                tex={String.raw`m_{KClO_3}=\frac{2\times122.5}{3\times32}\times\frac{7\times16}{5}=\frac{122.5\times7}{15}=57.17\ \text{gm}`}
              />
            </>
          }
          answer={
            <>
              <InlineMath math={String.raw`57.17\ \text{gm }KClO_3`} />.
            </>
          }
        />
        <DiagramBlock title="Method II: Add reactions after multiplying suitably">
          <FormulaLine tex={String.raw`2KClO_3\rightarrow2KCl+3O_2\quad \times 7`} />
          <FormulaLine
            tex={String.raw`C_2H_6+\frac{7}{2}O_2\rightarrow2CO_2+3H_2O\quad \times 6`}
          />
          <FormulaLine
            tex={String.raw`14KClO_3+6C_2H_6\rightarrow14KCl+12CO_2+18H_2O`}
          />
          <FormulaLine
            tex={String.raw`14\times122.5\ \text{gm }KClO_3\equiv6\times30\ \text{gm }C_2H_6`}
          />
          <FormulaLine
            tex={String.raw`m_{KClO_3}=\frac{14\times122.5}{6\times30}\times6=\frac{7\times122.5}{15}=57.17\ \text{gm}`}
          />
        </DiagramBlock>
      </section>

      {/* Page 49 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 49</h2>
        <p>
          Add or subtract reactions suitably by multiplying with suitable
          numbers so that the common substance through which the reactions are
          linked gets cancelled out.
        </p>
        <p>
          The final reaction obtained may be hypothetical, but it correctly
          relates the moles of components.
        </p>
        <h3 className="text-xl font-bold">
          Method III: Relate components directly using the balanced net reaction.
        </h3>
        <DiagramBlock title="Net reaction from KClO₃ and C₂H₆">
          <FormulaLine tex={String.raw`2KClO_3\rightarrow2KCl+3O_2`} />
          <FormulaLine
            tex={String.raw`C_2H_6+\frac{7}{2}O_2\rightarrow2CO_2+3H_2O`}
          />
          <FormulaLine
            tex={String.raw`1\ \text{mol }C_2H_6\equiv\frac{7}{2}\ \text{mol }O_2\equiv\frac{7}{3}\ \text{mol }KClO_3`}
          />
          <FormulaLine
            tex={String.raw`30\ \text{gm }C_2H_6\equiv\frac{7}{3}\times122.5\ \text{gm }KClO_3`}
          />
          <FormulaLine
            tex={String.raw`6\ \text{gm }C_2H_6\equiv\frac{7}{3}\times\frac{122.5}{30}\times6=\frac{7\times122.5}{15}\ \text{gm }KClO_3`}
          />
        </DiagramBlock>
      </section>

      {/* Page 50 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 50</h2>
        <ExampleCard
          question={
            <>
              How many gm Al should be dissolved in excess dilute{' '}
              <InlineMath math={String.raw`H_2SO_4`} /> solution to produce
              sufficient <InlineMath math={String.raw`H_2`} /> gas needed for
              complete reaction with all <InlineMath math={String.raw`O_2`} />{' '}
              gas produced by complete decomposition of 170 gm{' '}
              <InlineMath math={String.raw`H_2O_2`} />?
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`H_2O_2`} /> = 170 gm. Molar
              mass of <InlineMath math={String.raw`H_2O_2`} /> = 34 gm/mol.
              Atomic mass of Al = 27.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`2Al+3H_2SO_4\rightarrow Al_2(SO_4)_3+3H_2`}
              />
              <FormulaLine tex={String.raw`2H_2+O_2\rightarrow2H_2O`} />
              <FormulaLine tex={String.raw`2H_2O_2\rightarrow2H_2O+O_2`} />
            </>
          }
          calculation={
            <>
              <p>
                From the chain of reactions:
              </p>
              <FormulaLine
                tex={String.raw`2\ \text{mol }H_2O_2\equiv1\ \text{mol }O_2\equiv2\ \text{mol }H_2\equiv\frac{4}{3}\ \text{mol Al}`}
              />
              <FormulaLine
                tex={String.raw`2\times34\ \text{gm }H_2O_2\equiv\frac{4}{3}\times27\ \text{gm Al}=36\ \text{gm Al}`}
              />
              <FormulaLine
                tex={String.raw`170\ \text{gm }H_2O_2\equiv\frac{36}{68}\times170=90\ \text{gm Al}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`90\ \text{gm Al}`} />}
        />

        <ExampleCard
          question={
            <>
              How many gm iron pyrite, <InlineMath math={String.raw`FeS_2`} />,
              should be roasted to produce sufficient{' '}
              <InlineMath math={String.raw`SO_2`} /> needed for complete
              decolourisation of 7.9 gm <InlineMath math={String.raw`KMnO_4`} />{' '}
              in acidic condition? Given{' '}
              <InlineMath math={String.raw`K=39,\ Mn=55,\ Fe=56`} />.
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`KMnO_4`} /> = 7.9 gm. Molar
              masses: <InlineMath math={String.raw`KMnO_4=158`} />,{' '}
              <InlineMath math={String.raw`FeS_2=120`} />.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`2FeS_2+\frac{11}{2}O_2\rightarrow Fe_2O_3+4SO_2`}
              />
              <FormulaLine
                tex={String.raw`2KMnO_4+5SO_2+2H_2O\rightarrow K_2SO_4+2MnSO_4+2H_2SO_4`}
              />
            </>
          }
          calculation={
            <>
              <p>
                From the second reaction:
              </p>
              <FormulaLine
                tex={String.raw`2\ \text{mol }KMnO_4\equiv5\ \text{mol }SO_2`}
              />
              <p>
                From pyrite roasting:
              </p>
              <FormulaLine
                tex={String.raw`2\ \text{mol }FeS_2\equiv4\ \text{mol }SO_2`}
              />
              <p className="font-semibold text-amber-700">
                Calculation continues on Page 51.
              </p>
            </>
          }
          answer="Continues on Page 51"
        />
      </section>

      {/* Page 51 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 51</h2>
        <h3 className="text-xl font-bold">
          Continuation of Iron Pyrite Example
        </h3>
        <div className="rounded-lg border bg-slate-50 p-4">
          <FormulaLine
            tex={String.raw`2\ \text{mol }KMnO_4\equiv5\ \text{mol }SO_2\equiv\frac{5}{2}\ \text{mol }FeS_2`}
          />
          <FormulaLine
            tex={String.raw`2\times158\ \text{gm }KMnO_4\equiv\frac{5}{2}\times120\ \text{gm }FeS_2`}
          />
          <FormulaLine
            tex={String.raw`m_{FeS_2}=\frac{5\times120}{2\times158}\times7.9=7.5\ \text{gm}`}
          />
        </div>
        <div className="rounded-md bg-blue-50 p-3 font-bold text-blue-900">
          Final Answer:{' '}
          <InlineMath math={String.raw`7.5\ \text{gm }FeS_2`} />.
        </div>

        <ExampleCard
          question={
            <>
              25 gm pyrolusite ore is dissolved in excess HCl solution. The
              liberated <InlineMath math={String.raw`Cl_2`} /> gas is passed
              through excess <InlineMath math={String.raw`KI`} /> solution. The
              liberated <InlineMath math={String.raw`I_2`} /> exactly requires
              3.16 gm <InlineMath math={String.raw`Na_2S_2O_3`} /> for reaction.
              Calculate the percentage of pure{' '}
              <InlineMath math={String.raw`MnO_2`} /> in the pyrolusite ore.
              Given <InlineMath math={String.raw`Mn=55`} />.
            </>
          }
          given={
            <>
              Ore = 25 gm. <InlineMath math={String.raw`Na_2S_2O_3`} /> used =
              3.16 gm. Molar masses:{' '}
              <InlineMath math={String.raw`Na_2S_2O_3=158`} />,{' '}
              <InlineMath math={String.raw`MnO_2=87`} />.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`MnO_2+4HCl\rightarrow MnCl_2+Cl_2+2H_2O`}
              />
              <FormulaLine tex={String.raw`Cl_2+2KI\rightarrow2KCl+I_2`} />
              <FormulaLine
                tex={String.raw`I_2+2Na_2S_2O_3\rightarrow Na_2S_4O_6+2NaI`}
              />
            </>
          }
          calculation={
            <>
              <p className="font-semibold text-amber-700">
                Calculation continues on Page 52.
              </p>
            </>
          }
          answer="Continues on Page 52"
        />
      </section>

      {/* Page 52 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 52</h2>
        <h3 className="text-xl font-bold">
          Continuation of Pyrolusite Assay
        </h3>
        <div className="rounded-lg border bg-slate-50 p-4">
          <FormulaLine
            tex={String.raw`2\ \text{mol }Na_2S_2O_3\equiv1\ \text{mol }I_2\equiv1\ \text{mol }Cl_2\equiv1\ \text{mol }MnO_2`}
          />
          <FormulaLine
            tex={String.raw`2\times158\ \text{gm }Na_2S_2O_3\equiv87\ \text{gm }MnO_2`}
          />
          <FormulaLine
            tex={String.raw`m_{MnO_2}=\frac{87}{2\times158}\times3.16=0.87\ \text{gm}`}
          />
          <FormulaLine
            tex={String.raw`\%\text{ pure }MnO_2=\frac{0.87}{25}\times100=3.48\%`}
          />
        </div>
        <div className="rounded-md bg-blue-50 p-3 font-bold text-blue-900">
          Final Answer: pure <InlineMath math={String.raw`MnO_2`} /> ={' '}
          <InlineMath math={String.raw`3.48\%`} />.
        </div>

        <ExampleCard
          question={
            <>
              How many gm <InlineMath math={String.raw`CaC_2`} /> is needed to
              produce 84 gm polyethene,{' '}
              <InlineMath math={String.raw`(C_2H_4)_n`} />?
            </>
          }
          given={
            <>
              Mass of polyethene = 84 gm. Molar mass of one{' '}
              <InlineMath math={String.raw`C_2H_4`} /> unit = 28 gm/mol. Molar
              mass of <InlineMath math={String.raw`CaC_2`} /> = 64 gm/mol.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`CaC_2+2H_2O\rightarrow Ca(OH)_2+C_2H_2`}
              />
              <FormulaLine tex={String.raw`C_2H_2+H_2\rightarrow C_2H_4`} />
              <FormulaLine tex={String.raw`nC_2H_4\rightarrow (C_2H_4)_n`} />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`1\ \text{mol }(C_2H_4)_n\equiv n\ \text{mol }C_2H_4\equiv n\ \text{mol }C_2H_2\equiv n\ \text{mol }CaC_2`}
              />
              <FormulaLine
                tex={String.raw`28n\ \text{gm polyethene}\equiv64n\ \text{gm }CaC_2`}
              />
              <FormulaLine
                tex={String.raw`84\ \text{gm polyethene}\equiv\frac{64n}{28n}\times84=192\ \text{gm }CaC_2`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`192\ \text{gm }CaC_2`} />}
        />
      </section>

      {/* Page 53 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 53</h2>
        <ExampleCard
          title="Successive Reactions with Percentage Yield"
          question={
            <>
              Given the reactions:
              <br />
              <InlineMath math={String.raw`2A+B\xrightarrow{80\%}3C`} />
              <br />
              <InlineMath math={String.raw`4C+2D\xrightarrow{50\%}5E+F`} />
              <br />
              If 10 moles of A are taken with excess B and D, calculate the
              moles of E formed.
            </>
          }
          given={
            <>
              A = 10 mol; B and D are in excess. First reaction yield = 80%;
              second reaction yield = 50%.
            </>
          }
          formula={
            <>
              <FormulaLine tex={String.raw`2A+B\xrightarrow{80\%}3C`} />
              <FormulaLine tex={String.raw`4C+2D\xrightarrow{50\%}5E+F`} />
            </>
          }
          calculation={
            <>
              <p>Step I: Formation of C from A.</p>
              <FormulaLine
                tex={String.raw`2\ \text{mol }A\rightarrow3\ \text{mol }C`}
              />
              <FormulaLine
                tex={String.raw`10\ \text{mol }A\rightarrow15\ \text{mol }C\ \text{theoretically}`}
              />
              <FormulaLine
                tex={String.raw`C\ \text{actually formed}=15\times\frac{80}{100}=12\ \text{mol}`}
              />
              <p>Step II: Formation of E from C.</p>
              <FormulaLine
                tex={String.raw`4\ \text{mol }C\rightarrow5\ \text{mol }E`}
              />
              <FormulaLine
                tex={String.raw`12\ \text{mol }C\rightarrow15\ \text{mol }E\ \text{theoretically}`}
              />
              <FormulaLine
                tex={String.raw`E\ \text{actually formed}=15\times\frac{50}{100}=7.5\ \text{mol}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`7.5\ \text{mol }E`} />}
        />
        <DiagramBlock title="Combined reaction method">
          <FormulaLine
            tex={String.raw`\left(2A+B\rightarrow3C\right)\times4`}
          />
          <FormulaLine
            tex={String.raw`\left(4C+2D\rightarrow5E+F\right)\times3`}
          />
          <FormulaLine
            tex={String.raw`8A+4B+6D\rightarrow15E+3F`}
          />
          <FormulaLine
            tex={String.raw`\text{overall yield}=80\%\times50\%=40\%`}
          />
          <FormulaLine
            tex={String.raw`E=\frac{15}{8}\times10\times\frac{40}{100}=7.5\ \text{mol}`}
          />
        </DiagramBlock>
      </section>

      {/* Page 54 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 54</h2>
        <ExampleCard
          question={
            <>
              What volume of <InlineMath math={String.raw`C_2H_6`} /> gas at
              27°C and 4 atm should be monochlorinated followed by Wurtz
              reaction to produce 2.9 gm n-butane? Yield of monochlorination is
              60% and yield of Wurtz reaction is 80%.
            </>
          }
          given={
            <>
              Product = 2.9 gm n-butane. Molar mass of n-butane{' '}
              <InlineMath math={String.raw`(C_4H_{10})`} /> = 58 gm/mol.
              Temperature = 300 K. Pressure = 4 atm. Yield of chlorination =
              60%; yield of Wurtz reaction = 80%.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`CH_3CH_3+Cl_2\xrightarrow{60\%}CH_3CH_2Cl+HCl`}
              />
              <FormulaLine
                tex={String.raw`2CH_3CH_2Cl+2Na\xrightarrow{80\%}CH_3CH_2CH_2CH_3+2NaCl`}
              />
              <FormulaLine tex={String.raw`V=\frac{nRT}{P}`} />
            </>
          }
          calculation={
            <>
              <p>
                Let initial moles of ethane ={' '}
                <InlineMath math={String.raw`a`} />.
              </p>
              <FormulaLine
                tex={String.raw`n_{C_2H_5Cl}=0.6a`}
              />
              <FormulaLine
                tex={String.raw`n_{C_4H_{10}}=\frac{0.6a}{2}\times0.8=0.24a`}
              />
              <FormulaLine
                tex={String.raw`n_{C_4H_{10}}=\frac{2.9}{58}=0.05\ \text{mol}`}
              />
              <FormulaLine
                tex={String.raw`0.24a=0.05\Rightarrow a=\frac{1}{4.8}\ \text{mol}`}
              />
              <FormulaLine
                tex={String.raw`V_{C_2H_6}=\frac{aRT}{P}=\frac{\frac{1}{4.8}\times0.082\times300}{4}=1.28\ \text{L}`}
              />
            </>
          }
          answer={
            <>
              Required volume of <InlineMath math={String.raw`C_2H_6`} /> ={' '}
              <InlineMath math={String.raw`1.28\ \text{L}`} />.
            </>
          }
        />
        <DiagramBlock title="Direct combined yield method">
          <FormulaLine
            tex={String.raw`2CH_3CH_3\xrightarrow{60\%\times80\%=48\%}CH_3CH_2CH_2CH_3`}
          />
          <FormulaLine
            tex={String.raw`a\ \text{mol }C_2H_6\rightarrow0.5a\times0.48=0.24a\ \text{mol butane}`}
          />
          <FormulaLine
            tex={String.raw`0.24a=\frac{2.9}{58}\Rightarrow a=\frac{1}{4.8}\ \text{mol}`}
          />
        </DiagramBlock>
      </section>
    </main>
  );
}
