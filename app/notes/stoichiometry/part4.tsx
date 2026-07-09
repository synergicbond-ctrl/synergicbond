// app/notes/stoichiometry/part4.tsx
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

export default function StoichiometryPart4() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 bg-white p-8 text-slate-900">
      {/* Page 28 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 28</h2>
        <ExampleCard
          title="Solved Example — SO₃ Dissociation"
          question={
            <>
              A sample of <InlineMath math={String.raw`SO_3`} /> gas is 50%
              dissociated into <InlineMath math={String.raw`SO_2`} /> and{' '}
              <InlineMath math={String.raw`O_2`} /> gases. Calculate the average
              molar mass of the sample.
            </>
          }
          given={
            <>
              Degree of dissociation{' '}
              <InlineMath math={String.raw`\alpha=50\%=0.5`} />. Original molar
              mass of <InlineMath math={String.raw`SO_3`} /> = 80 gm/mol.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`2SO_3\rightarrow2SO_2+O_2`}
              />
              <FormulaLine
                tex={String.raw`\alpha=\frac{M_0-M}{(n-1)M}`}
              />
            </>
          }
          calculation={
            <>
              <p>
                For <InlineMath math={String.raw`2SO_3\rightarrow2SO_2+O_2`} />,
                one mole of <InlineMath math={String.raw`SO_3`} /> effectively
                gives <InlineMath math={String.raw`\frac{3}{2}`} /> mole of
                product particles on full dissociation.
              </p>
              <FormulaLine tex={String.raw`n=\frac{3}{2}`} />
              <FormulaLine
                tex={String.raw`0.5=\frac{80-M}{\left(\frac{3}{2}-1\right)M}`}
              />
              <FormulaLine
                tex={String.raw`0.5=\frac{80-M}{0.5M}`}
              />
              <FormulaLine
                tex={String.raw`M=\frac{80}{1.25}=64\ \text{gm/mol}`}
              />
              <p>Alternative mole table:</p>
              <FormulaLine
                tex={String.raw`SO_3\rightarrow SO_2+\frac{1}{2}O_2`}
              />
              <FormulaLine
                tex={String.raw`\text{Initial moles}=1,\quad \text{final moles}=0.5+0.5+0.25=1.25`}
              />
              <FormulaLine
                tex={String.raw`w=nM=\text{constant}\Rightarrow 1\times80=1.25M_{\text{mix}}`}
              />
            </>
          }
          answer={
            <>
              Average molar mass of final sample ={' '}
              <InlineMath math={String.raw`64\ \text{gm/mol}`} />.
            </>
          }
        />
      </section>

      {/* Page 29 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 29</h2>
        <ExampleCard
          question={
            <>
              When acetylene <InlineMath math={String.raw`(C_2H_2)`} /> is
              passed through a red hot iron tube, benzene{' '}
              <InlineMath math={String.raw`(C_6H_6)`} /> vapours are formed. If
              the vapour density of the gaseous sample coming out from the tube
              is 25, calculate the degree of trimerisation of{' '}
              <InlineMath math={String.raw`C_2H_2`} />.
            </>
          }
          given={
            <>
              Vapour density of mixture = 25, so observed molar mass{' '}
              <InlineMath math={String.raw`M=2\times25=50`} />. Molar mass of{' '}
              <InlineMath math={String.raw`C_2H_2`} /> = 26 gm/mol.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`3C_2H_2\rightarrow C_6H_6`}
              />
              <FormulaLine
                tex={String.raw`\alpha=\frac{M_0-M}{(n-1)M}`}
              />
            </>
          }
          calculation={
            <>
              <p>
                During trimerisation, 3 molecules combine to form 1 molecule, so
                for one initial molecule: <InlineMath math={String.raw`n=\frac{1}{3}`} />.
              </p>
              <FormulaLine
                tex={String.raw`\alpha=\frac{26-50}{\left(\frac{1}{3}-1\right)\times50}`}
              />
              <FormulaLine
                tex={String.raw`\alpha=0.72`}
              />
            </>
          }
          answer={
            <>
              Degree of trimerisation ={' '}
              <InlineMath math={String.raw`0.72`} /> or{' '}
              <InlineMath math={String.raw`72\%`} />.
            </>
          }
        />

        <ExampleCard
          question={
            <>
              The density of a sample of <InlineMath math={String.raw`NH_3`} />{' '}
              gas is found to be 0.5 g/L at 0°C and 1 atm. Calculate its
              percentage dissociation into <InlineMath math={String.raw`N_2`} />{' '}
              and <InlineMath math={String.raw`H_2`} /> gases.
            </>
          }
          given={
            <>
              Density of final gaseous mixture = 0.5 g/L. At 0°C and 1 atm,
              molar volume = 22.4 L/mol. Molar mass of{' '}
              <InlineMath math={String.raw`NH_3`} /> = 17 gm/mol.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`2NH_3\rightarrow N_2+3H_2`}
              />
              <FormulaLine
                tex={String.raw`M_{\text{mix}}=d\times V_m`}
              />
              <FormulaLine
                tex={String.raw`\alpha=\frac{M_0-M}{(n-1)M}`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`M_{\text{mix}}=0.5\times22.4=11.2\ \text{gm/mol}`}
              />
              <p>
                For <InlineMath math={String.raw`2NH_3\rightarrow N_2+3H_2`} />,
                2 molecules give 4 molecules; therefore{' '}
                <InlineMath math={String.raw`n=\frac{4}{2}=2`} />.
              </p>
              <FormulaLine
                tex={String.raw`\alpha=\frac{17-11.2}{(2-1)\times11.2}`}
              />
              <FormulaLine
                tex={String.raw`\alpha=0.5178`}
              />
            </>
          }
          answer={
            <>
              Percentage dissociation ={' '}
              <InlineMath math={String.raw`51.78\%`} />.
            </>
          }
        />
      </section>

      {/* Page 30 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 30</h2>
        <ExampleCard
          question={
            <>
              The vapour density of a mixture of Ar and{' '}
              <InlineMath math={String.raw`N_2O_4`} /> gases is 40 when
              collected. The vapour density gradually decreases to 35 over a
              long time. It is due to dissociation of some{' '}
              <InlineMath math={String.raw`N_2O_4`} /> molecules into{' '}
              <InlineMath math={String.raw`NO_2`} />. Calculate the degree of
              dissociation of <InlineMath math={String.raw`N_2O_4`} />.{' '}
              <InlineMath math={String.raw`Ar=40`} />.
            </>
          }
          given={
            <>
              Initial vapour density = 40, so initial average molar mass = 80.
              Final vapour density = 35, so final average molar mass = 70.
              Molar mass of <InlineMath math={String.raw`N_2O_4`} /> = 92;
              molar mass of Ar = 40.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`N_2O_4\rightarrow2NO_2`}
              />
              <FormulaLine
                tex={String.raw`w=nM=\text{constant}`}
              />
            </>
          }
          calculation={
            <>
              <p>
                Let initial moles of <InlineMath math={String.raw`N_2O_4`} /> =
                1 and initial moles of Ar ={' '}
                <InlineMath math={String.raw`a`} />.
              </p>
              <FormulaLine
                tex={String.raw`\frac{92+40a}{1+a}=80`}
              />
              <FormulaLine
                tex={String.raw`92+40a=80+80a\Rightarrow a=\frac{12}{40}=0.3`}
              />
              <p>
                If degree of dissociation of{' '}
                <InlineMath math={String.raw`N_2O_4`} /> is{' '}
                <InlineMath math={String.raw`\alpha`} />, final total moles are:
              </p>
              <FormulaLine
                tex={String.raw`(1-\alpha)+2\alpha+a=1+\alpha+a`}
              />
              <FormulaLine
                tex={String.raw`92+40a=(1+\alpha+a)\times70`}
              />
              <FormulaLine
                tex={String.raw`92+40(0.3)=(1+\alpha+0.3)\times70`}
              />
              <FormulaLine
                tex={String.raw`104=(1.3+\alpha)\times70`}
              />
              <FormulaLine
                tex={String.raw`\alpha=\frac{13}{70}`}
              />
            </>
          }
          answer={
            <>
              Degree of dissociation of{' '}
              <InlineMath math={String.raw`N_2O_4`} /> ={' '}
              <InlineMath math={String.raw`\frac{13}{70}`} />.
            </>
          }
        />
      </section>

      {/* Page 31 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 31</h2>
        <h3 className="text-xl font-bold text-red-600">
          Calculation of Percentage Purity
        </h3>
        <ExampleCard
          question={
            <>
              1.25 gm marble sample gives 0.44 gm{' '}
              <InlineMath math={String.raw`CO_2`} /> on heating. Calculate
              percentage purity of marble, assuming the pure component is{' '}
              <InlineMath math={String.raw`CaCO_3`} />.
            </>
          }
          given={
            <>
              Mass of marble sample = 1.25 gm. Mass of{' '}
              <InlineMath math={String.raw`CO_2`} /> obtained = 0.44 gm. Molar
              masses: <InlineMath math={String.raw`CaCO_3=100`} />,{' '}
              <InlineMath math={String.raw`CO_2=44`} />.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`CaCO_3\rightarrow CaO+CO_2`}
              />
              <FormulaLine
                tex={String.raw`\% \text{ purity}=\frac{\text{mass of pure component}}{\text{mass of sample}}\times100`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`100\ \text{gm }CaCO_3\rightarrow44\ \text{gm }CO_2`}
              />
              <FormulaLine
                tex={String.raw`0.44\ \text{gm }CO_2\equiv1.00\ \text{gm }CaCO_3`}
              />
              <FormulaLine
                tex={String.raw`\% \text{ pure }CaCO_3=\frac{1.00}{1.25}\times100=80\%`}
              />
            </>
          }
          answer={
            <>
              Marble sample contains <InlineMath math={String.raw`80\%`} /> pure{' '}
              <InlineMath math={String.raw`CaCO_3`} />.
            </>
          }
        />
        <p className="rounded-md bg-amber-50 p-4 text-amber-900">
          If impurity is not specified, it is always considered unreactive. Only
          the pure component participates in the reaction.
        </p>

        <ExampleCard
          question={
            <>
              16 gm NaOH exactly requires 25 gm of a{' '}
              <InlineMath math={String.raw`H_2SO_4`} /> sample for complete
              neutralisation. Calculate the percentage purity of the acid sample.
            </>
          }
          given={
            <>
              Mass of NaOH = 16 gm. Mass of acid sample = 25 gm. Molar masses:
              NaOH = 40, <InlineMath math={String.raw`H_2SO_4=98`} />.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`2NaOH+H_2SO_4\rightarrow Na_2SO_4+2H_2O`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`2\times40\ \text{gm NaOH}\equiv98\ \text{gm }H_2SO_4`}
              />
              <FormulaLine
                tex={String.raw`16\ \text{gm NaOH}\equiv\frac{98}{2\times40}\times16=19.6\ \text{gm pure }H_2SO_4`}
              />
              <FormulaLine
                tex={String.raw`\% \text{ purity}=\frac{19.6}{25}\times100=78.4\%`}
              />
            </>
          }
          answer={
            <>
              Percentage purity of acid sample ={' '}
              <InlineMath math={String.raw`78.4\%`} />.
            </>
          }
        />
      </section>

      {/* Page 32 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 32</h2>
        <ExampleCard
          question={
            <>
              When 20 gm pyrolusite ore is dissolved in excess of HCl solution,
              164 ml <InlineMath math={String.raw`Cl_2`} /> gas measured at
              27°C and 570 torr is obtained. Calculate the percentage of pure{' '}
              <InlineMath math={String.raw`MnO_2`} /> in the pyrolusite ore.{' '}
              <InlineMath math={String.raw`Mn=55`} />.
            </>
          }
          given={
            <>
              Ore = 20 gm. <InlineMath math={String.raw`Cl_2`} /> volume = 164
              ml = 0.164 L. Pressure = 570 torr ={' '}
              <InlineMath math={String.raw`\frac{570}{760}`} /> atm.
              Temperature = 300 K. Molar mass of{' '}
              <InlineMath math={String.raw`MnO_2`} /> = 87 gm/mol.
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
                tex={String.raw`n_{Cl_2}=\frac{(164/1000)\times(570/760)}{0.082\times300}=5\times10^{-3}\ \text{mol}`}
              />
              <FormulaLine
                tex={String.raw`m_{MnO_2}=5\times10^{-3}\times87=0.435\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`\% \text{ pure }MnO_2=\frac{0.435}{20}\times100=2.175\%`}
              />
            </>
          }
          answer={
            <>
              Percentage of pure <InlineMath math={String.raw`MnO_2`} /> ={' '}
              <InlineMath math={String.raw`2.175\%`} />.
            </>
          }
        />

        <ExampleCard
          question={
            <>
              How many gm HCl is needed to react completely with 500 gm of 80%
              pure <InlineMath math={String.raw`Fe_2O_3`} /> sample?{' '}
              <InlineMath math={String.raw`Fe=56`} />.
            </>
          }
          given={
            <>
              Sample mass = 500 gm. Pure <InlineMath math={String.raw`Fe_2O_3`} />{' '}
              = 80% = 400 gm. Molar mass of{' '}
              <InlineMath math={String.raw`Fe_2O_3`} /> = 160 gm/mol. Molar mass
              of HCl = 36.5 gm/mol.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`Fe_2O_3+6HCl\rightarrow2FeCl_3+3H_2O`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`160\ \text{gm }Fe_2O_3\equiv6\times36.5\ \text{gm HCl}`}
              />
              <FormulaLine
                tex={String.raw`400\ \text{gm }Fe_2O_3\equiv\frac{6\times36.5}{160}\times400=547.5\ \text{gm HCl}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`547.5\ \text{gm HCl}`} />}
        />
      </section>

      {/* Page 33 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 33</h2>
        <ExampleCard
          question={
            <>
              How many gm of 80% pure <InlineMath math={String.raw`Na_2SO_4`} />{' '}
              may be obtained from 40 gm of 58.5% pure NaCl?
            </>
          }
          given={
            <>
              NaCl sample = 40 gm with 58.5% purity. Product sample is 80% pure{' '}
              <InlineMath math={String.raw`Na_2SO_4`} />. Molar masses: NaCl =
              58.5, <InlineMath math={String.raw`Na_2SO_4=142`} />.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`2NaCl\rightarrow Na_2SO_4`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`m_{\text{pure NaCl}}=40\times\frac{58.5}{100}=23.4\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`2\times58.5\ \text{gm NaCl}\rightarrow142\ \text{gm }Na_2SO_4`}
              />
              <FormulaLine
                tex={String.raw`m_{\text{pure }Na_2SO_4}=\frac{142}{2\times58.5}\times23.4=28.4\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`m_{\text{80\% pure sample}}=\frac{100}{80}\times28.4=35.5\ \text{gm}`}
              />
            </>
          }
          answer={
            <>
              <InlineMath math={String.raw`35.5\ \text{gm}`} /> of 80% pure{' '}
              <InlineMath math={String.raw`Na_2SO_4`} /> sample.
            </>
          }
        />
      </section>

      {/* Page 34 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 34</h2>
        <ExampleCard
          question={
            <>
              Crude <InlineMath math={String.raw`CaC_2`} /> may be produced in
              an electric furnace as:{' '}
              <InlineMath math={String.raw`CaO(s)+3C(s)\rightarrow CaC_2(s)+CO`} />.
              The residue contains 80% <InlineMath math={String.raw`CaC_2`} />{' '}
              and 20% unreacted <InlineMath math={String.raw`CaO`} /> by mass.
              How much <InlineMath math={String.raw`CaO`} /> should be added in
              the furnace charge containing excess graphite to produce 12.8 kg
              pure <InlineMath math={String.raw`CaC_2`} />?
            </>
          }
          given={
            <>
              Product residue: 80% pure <InlineMath math={String.raw`CaC_2`} />{' '}
              and 20% unreacted <InlineMath math={String.raw`CaO`} />. Required
              pure <InlineMath math={String.raw`CaC_2`} /> = 12.8 kg. Molar
              masses: <InlineMath math={String.raw`CaO=56`} />,{' '}
              <InlineMath math={String.raw`CaC_2=64`} />.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`CaO+3C\rightarrow CaC_2+CO`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`64\ \text{kg }CaC_2\equiv56\ \text{kg }CaO`}
              />
              <FormulaLine
                tex={String.raw`12.8\ \text{kg }CaC_2\equiv\frac{56}{64}\times12.8=11.2\ \text{kg CaO consumed}`}
              />
              <p>
                Since the final residue contains 80%{' '}
                <InlineMath math={String.raw`CaC_2`} />, 12.8 kg pure{' '}
                <InlineMath math={String.raw`CaC_2`} /> corresponds to:
              </p>
              <FormulaLine
                tex={String.raw`m_{\text{residue}}=\frac{12.8}{0.80}=16\ \text{kg}`}
              />
              <FormulaLine
                tex={String.raw`m_{\text{unreacted }CaO}=20\%\times16=3.2\ \text{kg}`}
              />
              <FormulaLine
                tex={String.raw`m_{\text{CaO added}}=11.2+3.2=14.4\ \text{kg}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`14.4\ \text{kg CaO}`} />}
        />
      </section>

      {/* Page 35 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 35</h2>
        <h3 className="text-xl font-bold text-red-600">
          Problems Based on Mixtures
        </h3>
        <DiagramBlock title="Mixture model: CaCO₃ + NaCl">
          <p>
            A 2 gm mixture containing 75%{' '}
            <InlineMath math={String.raw`CaCO_3`} /> and 25% NaCl gives 0.66 gm{' '}
            <InlineMath math={String.raw`CO_2`} /> on heating.
          </p>
          <FormulaLine
            tex={String.raw`CaCO_3\xrightarrow{\Delta}CaO+CO_2`}
          />
          <FormulaLine
            tex={String.raw`m_{CaCO_3}=2\times\frac{75}{100}=1.5\ \text{gm}`}
          />
          <FormulaLine
            tex={String.raw`m_{CO_2}=\frac{44}{100}\times1.5=0.66\ \text{gm}`}
          />
        </DiagramBlock>

        <ExampleCard
          question={
            <>
              A 2 gm mixture of <InlineMath math={String.raw`CaCO_3`} /> and{' '}
              <InlineMath math={String.raw`MgCO_3`} /> gives 0.924 gm{' '}
              <InlineMath math={String.raw`CO_2`} /> on heating. Find the masses
              of <InlineMath math={String.raw`CaCO_3`} /> and{' '}
              <InlineMath math={String.raw`MgCO_3`} />.
            </>
          }
          given={
            <>
              Total mixture mass = 2 gm. Mass of{' '}
              <InlineMath math={String.raw`CO_2`} /> = 0.924 gm. Molar masses:
              <InlineMath math={String.raw`CaCO_3=100`} />,{' '}
              <InlineMath math={String.raw`MgCO_3=84`} />,{' '}
              <InlineMath math={String.raw`CO_2=44`} />.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`CaCO_3\rightarrow CaO+CO_2`}
              />
              <FormulaLine
                tex={String.raw`MgCO_3\rightarrow MgO+CO_2`}
              />
            </>
          }
          calculation={
            <>
              <p>
                Let mass of <InlineMath math={String.raw`CaCO_3`} /> ={' '}
                <InlineMath math={String.raw`x`} /> gm, so mass of{' '}
                <InlineMath math={String.raw`MgCO_3`} /> ={' '}
                <InlineMath math={String.raw`(2-x)`} /> gm.
              </p>
              <FormulaLine
                tex={String.raw`\frac{44}{100}x+\frac{44}{84}(2-x)=0.924`}
              />
              <FormulaLine
                tex={String.raw`x=1.475\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`2-x=0.525\ \text{gm}`}
              />
            </>
          }
          answer={
            <>
              <InlineMath math={String.raw`CaCO_3=1.475\ \text{gm}`} />,{' '}
              <InlineMath math={String.raw`MgCO_3=0.525\ \text{gm}`} />.
            </>
          }
        />

        <ExampleCard
          question={
            <>
              10 gm of a mixture of NaOH and NaCl exactly requires 7.3 gm HCl
              for reaction. Calculate the percentage composition of the original
              mixture.
            </>
          }
          given={
            <>
              Mixture = 10 gm. HCl required = 7.3 gm. Molar masses: HCl = 36.5,
              NaOH = 40.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`HCl+NaOH\rightarrow NaCl+H_2O`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`36.5\ \text{gm HCl}\equiv40\ \text{gm NaOH}`}
              />
              <FormulaLine
                tex={String.raw`7.3\ \text{gm HCl}\equiv8\ \text{gm NaOH}`}
              />
              <FormulaLine
                tex={String.raw`\%NaOH=\frac{8}{10}\times100=80\%`}
              />
              <FormulaLine
                tex={String.raw`\%NaCl=20\%`}
              />
            </>
          }
          answer={
            <>
              Original mixture contains <InlineMath math={String.raw`80\%`} />{' '}
              NaOH and <InlineMath math={String.raw`20\%`} /> NaCl.
            </>
          }
        />
      </section>

      {/* Page 36 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 36</h2>
        <ExampleCard
          question={
            <>
              20 gm of a mixture of <InlineMath math={String.raw`NaHCO_3`} />{' '}
              and <InlineMath math={String.raw`Na_2CO_3`} /> is heated strongly,
              by which 4.4 gm <InlineMath math={String.raw`CO_2`} /> is
              obtained. Calculate the mass percent of{' '}
              <InlineMath math={String.raw`Na_2CO_3`} /> in the mixture.
            </>
          }
          given={
            <>
              Mixture mass = 20 gm. <InlineMath math={String.raw`CO_2`} />{' '}
              obtained = 4.4 gm. Molar masses:{' '}
              <InlineMath math={String.raw`NaHCO_3=84`} />,{' '}
              <InlineMath math={String.raw`Na_2CO_3=106`} />,{' '}
              <InlineMath math={String.raw`CO_2=44`} />.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`2NaHCO_3\xrightarrow{\Delta}Na_2CO_3+CO_2+H_2O`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`2\times84\ \text{gm }NaHCO_3\equiv44\ \text{gm }CO_2`}
              />
              <FormulaLine
                tex={String.raw`4.4\ \text{gm }CO_2\equiv16.8\ \text{gm }NaHCO_3`}
              />
              <FormulaLine
                tex={String.raw`m_{Na_2CO_3}=20-16.8=3.2\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`\%Na_2CO_3=\frac{3.2}{20}\times100=16\%`}
              />
            </>
          }
          answer={
            <>
              Mass percent of <InlineMath math={String.raw`Na_2CO_3`} /> ={' '}
              <InlineMath math={String.raw`16\%`} />.
            </>
          }
        />
      </section>
    </main>
  );
}
