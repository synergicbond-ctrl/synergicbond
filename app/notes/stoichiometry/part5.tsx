// app/notes/stoichiometry/part5.tsx
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

export default function StoichiometryPart5() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 bg-white p-8 text-slate-900">
      {/* Page 37 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 37</h2>
        <ExampleCard
          question={
            <>
              When a mixture of NaCl and NaI is quantitatively converted into{' '}
              <InlineMath math={String.raw`Na_2SO_4`} />, the mass of product
              formed is found to be equal to the mass of original mixture.
              Calculate the percentage composition of original mixture.
            </>
          }
          given={
            <>
              Original mixture contains NaCl and NaI. Total mixture is taken as
              100 gm. Mass of <InlineMath math={String.raw`Na_2SO_4`} /> formed
              is also 100 gm.
            </>
          }
          formula={
            <>
              <FormulaLine tex={String.raw`2NaCl\rightarrow Na_2SO_4`} />
              <FormulaLine tex={String.raw`2NaI\rightarrow Na_2SO_4`} />
            </>
          }
          calculation={
            <>
              <p>
                Let mass of NaCl = <InlineMath math={String.raw`x`} /> gm and
                mass of NaI = <InlineMath math={String.raw`100-x`} /> gm.
              </p>
              <FormulaLine
                tex={String.raw`2NaCl=2\times58.5=117\ \text{gm}\rightarrow Na_2SO_4=142\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`x\ \text{gm NaCl}\rightarrow \frac{142}{117}x\ \text{gm }Na_2SO_4`}
              />
              <FormulaLine
                tex={String.raw`2NaI=2\times150=300\ \text{gm}\rightarrow Na_2SO_4=142\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`(100-x)\ \text{gm NaI}\rightarrow \frac{142}{300}(100-x)\ \text{gm }Na_2SO_4`}
              />
              <FormulaLine
                tex={String.raw`\frac{142}{117}x+\frac{142}{300}(100-x)=100`}
              />
              <FormulaLine
                tex={String.raw`x=71.14\ \text{gm}`}
              />
            </>
          }
          answer={
            <>
              Original mixture contains NaCl ={' '}
              <InlineMath math={String.raw`71.14\%`} /> and NaI ={' '}
              <InlineMath math={String.raw`28.86\%`} />.
            </>
          }
        />
        <DiagramBlock title="Equivalent reaction form">
          <FormulaLine
            tex={String.raw`xNaCl+yNaI+H_2SO_4\rightarrow \frac{x+y}{2}Na_2SO_4+xHCl+yHI`}
          />
          <FormulaLine
            tex={String.raw`58.5x+150y=\frac{x+y}{2}\times142`}
          />
        </DiagramBlock>
      </section>

      {/* Page 38 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 38</h2>
        <ExampleCard
          question={
            <>
              A mixture of FeO and{' '}
              <InlineMath math={String.raw`Fe_3O_4`} /> is ignited in air till
              constant weight. If the sample gains 5% in weight, calculate the
              percentage composition of original mixture. Given{' '}
              <InlineMath math={String.raw`Fe=56`} />.
            </>
          }
          given={
            <>
              Take original mixture = 100 gm. Final mass after ignition = 105
              gm. Product formed is <InlineMath math={String.raw`Fe_2O_3`} />.
            </>
          }
          formula={
            <>
              <FormulaLine tex={String.raw`2FeO\rightarrow Fe_2O_3`} />
              <FormulaLine tex={String.raw`2Fe_3O_4\rightarrow3Fe_2O_3`} />
            </>
          }
          calculation={
            <>
              <p>
                Let mass of FeO = <InlineMath math={String.raw`x`} /> gm and
                mass of <InlineMath math={String.raw`Fe_3O_4`} /> ={' '}
                <InlineMath math={String.raw`100-x`} /> gm.
              </p>
              <FormulaLine
                tex={String.raw`2FeO=2\times72=144\ \text{gm}\rightarrow Fe_2O_3=160\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`x\ \text{gm FeO}\rightarrow \frac{160}{144}x\ \text{gm }Fe_2O_3`}
              />
              <FormulaLine
                tex={String.raw`2Fe_3O_4=2\times232=464\ \text{gm}\rightarrow3Fe_2O_3=3\times160=480\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`(100-x)\ \text{gm }Fe_3O_4\rightarrow \frac{480}{464}(100-x)\ \text{gm }Fe_2O_3`}
              />
              <FormulaLine
                tex={String.raw`\frac{160}{144}x+\frac{480}{464}(100-x)=105`}
              />
              <FormulaLine
                tex={String.raw`x=20.25`}
              />
            </>
          }
          answer={
            <>
              FeO = <InlineMath math={String.raw`20.25\%`} /> and{' '}
              <InlineMath math={String.raw`Fe_3O_4`} /> ={' '}
              <InlineMath math={String.raw`79.75\%`} />.
            </>
          }
        />
      </section>

      {/* Page 39 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 39</h2>
        <ExampleCard
          title="Continuation of Methane–Ethane Combustion Example"
          question={
            <>
              When a mixture of <InlineMath math={String.raw`CH_4`} /> and{' '}
              <InlineMath math={String.raw`C_2H_6`} /> gases is burnt
              completely, 17.6 gm <InlineMath math={String.raw`CO_2`} /> and
              12.6 gm <InlineMath math={String.raw`H_2O`} /> are formed.
              Calculate the mass percentage of{' '}
              <InlineMath math={String.raw`CH_4`} /> in the original
              hydrocarbon mixture.
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`CO_2`} /> = 17.6 gm; mass of{' '}
              <InlineMath math={String.raw`H_2O`} /> = 12.6 gm.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`CH_4+2O_2\rightarrow CO_2+2H_2O`}
              />
              <FormulaLine
                tex={String.raw`C_2H_6+\frac{7}{2}O_2\rightarrow2CO_2+3H_2O`}
              />
            </>
          }
          calculation={
            <>
              <div className="rounded-lg border bg-slate-50 p-4">
                <p>
                  Let mass of <InlineMath math={String.raw`CH_4`} /> ={' '}
                  <InlineMath math={String.raw`x`} /> gm and mass of{' '}
                  <InlineMath math={String.raw`C_2H_6`} /> ={' '}
                  <InlineMath math={String.raw`y`} /> gm.
                </p>
                <FormulaLine
                  tex={String.raw`CO_2:\quad \frac{44}{16}x+\frac{88}{30}y=17.6\quad ...(1)`}
                />
                <FormulaLine
                  tex={String.raw`H_2O:\quad \frac{36}{16}x+\frac{54}{30}y=12.6\quad ...(2)`}
                />
                <FormulaLine tex={String.raw`x=3.2\ \text{gm},\quad y=3.0\ \text{gm}`} />
                <FormulaLine
                  tex={String.raw`\text{mass \% of }CH_4=\frac{x}{x+y}\times100=\frac{3.2}{3.2+3.0}\times100=51.61\%`}
                />
              </div>
            </>
          }
          answer={
            <>
              Mass percentage of <InlineMath math={String.raw`CH_4`} /> ={' '}
              <InlineMath math={String.raw`51.61\%`} />.
            </>
          }
        />
        <DiagramBlock title="Alternative mole method">
          <p>
            Let <InlineMath math={String.raw`CH_4=a`} /> mole and{' '}
            <InlineMath math={String.raw`C_2H_6=b`} /> mole.
          </p>
          <FormulaLine tex={String.raw`CO_2:\quad a+2b=\frac{17.6}{44}`} />
          <FormulaLine tex={String.raw`H_2O:\quad 2a+3b=\frac{12.6}{18}`} />
          <FormulaLine tex={String.raw`a=0.2,\quad b=0.1`} />
          <FormulaLine
            tex={String.raw`\text{mass \% of }CH_4=\frac{0.2\times16}{0.2\times16+0.1\times30}\times100=51.61\%`}
          />
        </DiagramBlock>
      </section>

      {/* Page 40 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 40</h2>
        <ExampleCard
          question={
            <>
              40 gm of a mixture contains{' '}
              <InlineMath math={String.raw`MgCl_2\cdot6H_2O`} />,{' '}
              <InlineMath math={String.raw`MgSO_4\cdot7H_2O`} />, and some inert
              impurities. In different experiments, the same mass of mixture
              produces 4.66 gm <InlineMath math={String.raw`BaSO_4`} /> and
              6.66 gm <InlineMath math={String.raw`Mg_2P_2O_7`} />. Calculate
              the mass percent of impurity in the original mixture. Given{' '}
              <InlineMath math={String.raw`Ba=137`} />.
            </>
          }
          given={
            <>
              Mixture mass = 40 gm. <InlineMath math={String.raw`BaSO_4`} /> =
              4.66 gm. <InlineMath math={String.raw`Mg_2P_2O_7`} /> = 6.66 gm.
              Molar masses: <InlineMath math={String.raw`BaSO_4=233`} />,{' '}
              <InlineMath math={String.raw`Mg_2P_2O_7=222`} />,{' '}
              <InlineMath math={String.raw`MgCl_2\cdot6H_2O=203`} />,{' '}
              <InlineMath math={String.raw`MgSO_4\cdot7H_2O=246`} />.
            </>
          }
          formula={
            <>
              <FormulaLine tex={String.raw`BaSO_4:\quad y=\frac{4.66}{233}`} />
              <FormulaLine
                tex={String.raw`Mg_2P_2O_7:\quad \frac{x}{2}+\frac{y}{2}=\frac{6.66}{222}`}
              />
            </>
          }
          calculation={
            <>
              <p>
                Let <InlineMath math={String.raw`x`} /> mole{' '}
                <InlineMath math={String.raw`MgCl_2\cdot6H_2O`} /> and{' '}
                <InlineMath math={String.raw`y`} /> mole{' '}
                <InlineMath math={String.raw`MgSO_4\cdot7H_2O`} /> be present.
              </p>
              <FormulaLine tex={String.raw`y=\frac{4.66}{233}=0.02`} />
              <FormulaLine
                tex={String.raw`\frac{x}{2}+\frac{y}{2}=\frac{6.66}{222}=0.03`}
              />
              <FormulaLine tex={String.raw`x+y=0.06\Rightarrow x=0.04`} />
              <FormulaLine
                tex={String.raw`m_{MgCl_2\cdot6H_2O}=0.04\times203=8.12\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`m_{MgSO_4\cdot7H_2O}=0.02\times246=4.92\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`m_{\text{total pure salts}}=8.12+4.92=13.04\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`m_{\text{impurity}}=40-13.04=26.96\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`\%\text{ impurity}=\frac{26.96}{40}\times100=67.4\%`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`67.4\%`} />}
        />
      </section>

      {/* Page 41 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 41</h2>
        <ExampleCard
          question={
            <>
              10 gm of a sample is either pure NaCl or pure KCl or pure{' '}
              <InlineMath math={String.raw`NH_4Cl`} /> or a mixture of any two
              or all three. Calculate the minimum volume of{' '}
              <InlineMath math={String.raw`AgNO_3`} /> solution containing 8.5%
              <InlineMath math={String.raw`AgNO_3`} /> by weight needed to
              precipitate all the chloride present in the sample in any possible
              case. Density of <InlineMath math={String.raw`AgNO_3`} /> solution
              is 1.2 gm/ml. Given{' '}
              <InlineMath math={String.raw`K=39,\ Ag=108`} />.
            </>
          }
          given={
            <>
              Sample mass = 10 gm. Possible chlorides: NaCl, KCl,{' '}
              <InlineMath math={String.raw`NH_4Cl`} />.{' '}
              <InlineMath math={String.raw`AgNO_3`} /> solution = 8.5% by
              weight; density = 1.2 gm/ml.
            </>
          }
          formula={
            <>
              <FormulaLine tex={String.raw`Cl^-+AgNO_3\rightarrow AgCl\downarrow+NO_3^-`} />
              <FormulaLine
                tex={String.raw`\text{minimum volume needed for every possible case must cover maximum possible moles of }Cl^-`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine tex={String.raw`n_{Cl^-\text{ from NaCl}}=\frac{10}{58.5}`} />
              <FormulaLine tex={String.raw`n_{Cl^-\text{ from KCl}}=\frac{10}{74.5}`} />
              <FormulaLine tex={String.raw`n_{Cl^-\text{ from }NH_4Cl}=\frac{10}{53.5}`} />
              <p>
                Maximum possible moles of chloride is from{' '}
                <InlineMath math={String.raw`NH_4Cl`} /> because it has the
                lowest molar mass.
              </p>
              <FormulaLine
                tex={String.raw`n_{AgNO_3,\min}=\frac{10}{53.5}`}
              />
              <p className="font-semibold text-amber-700">
                Final volume calculation continues on Page 42.
              </p>
            </>
          }
          answer="Continues on Page 42"
        />
      </section>

      {/* Page 42 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 42</h2>
        <h3 className="text-xl font-bold">
          Continuation of Minimum <InlineMath math={String.raw`AgNO_3`} /> Volume
        </h3>
        <div className="rounded-lg border bg-slate-50 p-4">
          <FormulaLine
            tex={String.raw`m_{AgNO_3,\min}=\frac{10}{53.5}\times170\ \text{gm}`}
          />
          <p>
            Since <InlineMath math={String.raw`AgNO_3`} /> solution contains
            8.5% by weight:
          </p>
          <FormulaLine
            tex={String.raw`V_{\min}\times1.20\times\frac{8.5}{100}=\frac{10\times170}{53.5}`}
          />
          <FormulaLine
            tex={String.raw`V_{\min}=311.53\ \text{ml}`}
          />
        </div>
        <div className="rounded-md bg-blue-50 p-3 font-bold text-blue-900">
          Final Answer:{' '}
          <InlineMath math={String.raw`311.53\ \text{ml}`} /> of{' '}
          <InlineMath math={String.raw`AgNO_3`} /> solution.
        </div>

        <h3 className="text-xl font-bold text-red-600">
          Parallel / Simultaneous / Competitive Reactions
        </h3>
        <p>
          In parallel reactions, the same set of reactants produces different
          products, which may be formed independently from different amounts of
          reactants.
        </p>
        <div className="rounded-lg border bg-slate-50 p-4">
          <FormulaLine tex={String.raw`CH_4+O_2\rightarrow CO_2+H_2O`} />
          <p>Single reaction gives two products of a single reaction.</p>
          <FormulaLine tex={String.raw`C+O_2\rightarrow CO_2`} />
          <FormulaLine tex={String.raw`C+\frac{1}{2}O_2\rightarrow CO`} />
          <p>
            These are parallel reactions because CO and{' '}
            <InlineMath math={String.raw`CO_2`} /> may be formed independently
            from different amounts of C and <InlineMath math={String.raw`O_2`} />.
          </p>
        </div>
      </section>

      {/* Page 43 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 43</h2>
        <h3 className="text-xl font-bold">
          Conditions for CO and CO₂ Formation from Carbon
        </h3>
        <p>
          In parallel reaction of carbon and oxygen, the same reactants can
          produce CO or <InlineMath math={String.raw`CO_2`} /> depending on
          oxygen availability.
        </p>
        <div className="rounded-lg border bg-slate-50 p-4">
          <p>Let 1 mole carbon be taken.</p>
          <p>
            Let <InlineMath math={String.raw`x`} /> mole carbon form CO:
          </p>
          <FormulaLine tex={String.raw`C+\frac{1}{2}O_2\rightarrow CO`} />
          <FormulaLine tex={String.raw`x\ \text{mol C needs }\frac{x}{2}\ \text{mol }O_2`} />
          <p>
            Let <InlineMath math={String.raw`1-x`} /> mole carbon form{' '}
            <InlineMath math={String.raw`CO_2`} />:
          </p>
          <FormulaLine tex={String.raw`C+O_2\rightarrow CO_2`} />
          <FormulaLine tex={String.raw`(1-x)\ \text{mol C needs }(1-x)\ \text{mol }O_2`} />
          <FormulaLine
            tex={String.raw`n_{O_2}=\frac{x}{2}+(1-x)=1-\frac{x}{2}`}
          />
        </div>
        <div className="rounded-lg border bg-slate-50 p-4">
          <p>
            <strong>Case I:</strong>{' '}
            <InlineMath math={String.raw`1-\frac{x}{2}\le\frac{1}{2}`} /> gives{' '}
            <InlineMath math={String.raw`x\ge1`} />.
          </p>
          <p>No <InlineMath math={String.raw`CO_2`} /> formation.</p>
          <p>
            <strong>Case II:</strong>{' '}
            <InlineMath math={String.raw`1-\frac{x}{2}\ge1`} /> gives{' '}
            <InlineMath math={String.raw`x\le0`} />.
          </p>
          <p>No CO formation.</p>
        </div>
        <div className="rounded-md bg-amber-50 p-4 text-amber-900">
          Formation of both CO and{' '}
          <InlineMath math={String.raw`CO_2`} /> will occur only when{' '}
          <InlineMath math={String.raw`\frac{1}{2}<n_{O_2}<1`} /> per mole of
          carbon.
        </div>
      </section>

      {/* Page 44 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 44</h2>
        <ExampleCard
          title="Competitive Reaction Example — Case 1"
          question={
            <>
              24 gm carbon and 96 gm oxygen are taken and allowed to react
              completely. Determine the final composition of the system.
            </>
          }
          given={
            <>
              Carbon = 24 gm = 2 mol. Oxygen = 96 gm{' '}
              <InlineMath math={String.raw`O_2`} /> = 3 mol.
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
                For 2 mol C, complete conversion to{' '}
                <InlineMath math={String.raw`CO_2`} /> needs 2 mol{' '}
                <InlineMath math={String.raw`O_2`} />. Since 3 mol{' '}
                <InlineMath math={String.raw`O_2`} /> is present, oxygen is in
                excess and no CO formation occurs.
              </p>
              <FormulaLine tex={String.raw`2C+2O_2\rightarrow2CO_2`} />
              <FormulaLine tex={String.raw`O_2\ \text{left}=3-2=1\ \text{mol}`} />
              <FormulaLine tex={String.raw`CO_2\ \text{formed}=2\ \text{mol}=88\ \text{gm}`} />
              <FormulaLine tex={String.raw`O_2\ \text{left}=1\ \text{mol}=32\ \text{gm}`} />
            </>
          }
          answer={
            <>
              Final system: C = 0 mol, <InlineMath math={String.raw`O_2`} /> =
              1 mol, <InlineMath math={String.raw`CO_2`} /> = 2 mol, CO = 0 mol.
            </>
          }
        />
        <DiagramBlock title="Case 2 setup">
          <p>
            For 4 mol C and 1.5 mol <InlineMath math={String.raw`O_2`} />, the
            oxygen available per mole of carbon is{' '}
            <InlineMath math={String.raw`\frac{1.5}{4}=0.375`} />, which is
            less than <InlineMath math={String.raw`\frac{1}{2}`} />.
          </p>
          <p>
            Therefore, oxygen is insufficient even for complete CO formation
            from all carbon. Only CO forms, and some carbon remains unreacted.
          </p>
        </DiagramBlock>
      </section>

      {/* Page 45 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 45</h2>
        <ExampleCard
          title="Competitive Reaction Example — Case 2"
          question={
            <>
              4 mole carbon and 1.5 mole{' '}
              <InlineMath math={String.raw`O_2`} /> are taken and allowed to
              react completely. Determine the final composition of the system.
            </>
          }
          given={
            <>
              Carbon = 4 mol; oxygen = 1.5 mol{' '}
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
                Because oxygen is less than{' '}
                <InlineMath math={String.raw`\frac{1}{2}`} /> mole per mole
                carbon, only CO formation is possible.
              </p>
              <FormulaLine
                tex={String.raw`C+\frac{1}{2}O_2\rightarrow CO`}
              />
              <FormulaLine
                tex={String.raw`1.5\ \text{mol }O_2\text{ reacts with }3\ \text{mol C}`}
              />
              <FormulaLine
                tex={String.raw`CO\ \text{formed}=3\ \text{mol}`}
              />
              <FormulaLine
                tex={String.raw`C\ \text{left}=4-3=1\ \text{mol}`}
              />
              <FormulaLine
                tex={String.raw`O_2\ \text{left}=0`}
              />
              <p className="font-semibold">
                Same result may also be reached through sequential reaction:
              </p>
              <FormulaLine
                tex={String.raw`C+O_2\rightarrow CO_2`}
              />
              <FormulaLine
                tex={String.raw`1.5\ \text{mol }O_2\rightarrow1.5\ \text{mol }CO_2`}
              />
              <FormulaLine
                tex={String.raw`C+CO_2\rightarrow2CO`}
              />
              <FormulaLine
                tex={String.raw`1.5\ \text{mol }CO_2+1.5\ \text{mol C}\rightarrow3\ \text{mol CO}`}
              />
              <FormulaLine
                tex={String.raw`C\ \text{left}=4-1.5-1.5=1\ \text{mol}`}
              />
            </>
          }
          answer={
            <>
              Final system: C = 1 mol, CO = 3 mol,{' '}
              <InlineMath math={String.raw`CO_2`} /> = 0 mol,{' '}
              <InlineMath math={String.raw`O_2`} /> = 0 mol.
            </>
          }
        />
      </section>
    </main>
  );
}
