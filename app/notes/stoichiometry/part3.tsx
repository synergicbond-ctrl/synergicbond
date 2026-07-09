// app/notes/stoichiometry/part3.tsx
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

export default function StoichiometryPart3() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 bg-white p-8 text-slate-900">
      {/* Page 18 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 18</h2>
        <h3 className="text-xl font-bold">Detection of Limiting Reagent</h3>
        <div className="rounded-lg border bg-slate-50 p-4">
          <h4 className="mb-2 font-semibold">1. Unitary Method</h4>
          <FormulaLine
            tex={String.raw`N_2+3H_2\rightarrow2NH_3`}
          />
          <p>
            1 mole <InlineMath math={String.raw`N_2`} /> needs 3 mole{' '}
            <InlineMath math={String.raw`H_2`} />.
          </p>
          <FormulaLine
            tex={String.raw`28\ \text{gm }N_2\text{ needs }6\ \text{gm }H_2`}
          />
          <FormulaLine
            tex={String.raw`7\ \text{gm }N_2\text{ needs }\frac{6}{28}\times7=1.5\ \text{gm }H_2`}
          />
          <p>
            Since 1.5 gm <InlineMath math={String.raw`H_2`} /> is needed and 6
            gm is available, <InlineMath math={String.raw`H_2`} /> is excess and{' '}
            <InlineMath math={String.raw`N_2`} /> is limiting.
          </p>
        </div>
        <div className="rounded-lg border bg-slate-50 p-4">
          <h4 className="mb-2 font-semibold">2. Factor Labelling Method</h4>
          <FormulaLine
            tex={String.raw`\frac{n_{N_2}}{1}=\frac{7/28}{1}=\frac{1}{4}`}
          />
          <FormulaLine
            tex={String.raw`\frac{n_{H_2}}{3}=\frac{6/2}{3}=1`}
          />
          <p>
            For limiting reagent, the ratio of moles to stoichiometric
            coefficient should be minimum.
          </p>
          <p>
            Therefore, <InlineMath math={String.raw`N_2`} /> is the limiting
            reagent.
          </p>
        </div>

        <ExampleCard
          question={
            <>
              17 gm iron is allowed to react with 35 gm CO to form iron
              carbonyl, <InlineMath math={String.raw`Fe(CO)_5`} />. Identify
              the limiting reagent. Given <InlineMath math={String.raw`Fe=56`} />.
            </>
          }
          given={
            <>
              Mass of Fe = 17 gm. Mass of CO = 35 gm. Molar mass of CO = 28
              gm/mol.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`Fe+5CO\rightarrow Fe(CO)_5`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`\frac{n_{Fe}}{1}=\frac{17/56}{1}=0.3036`}
              />
              <FormulaLine
                tex={String.raw`\frac{n_{CO}}{5}=\frac{35/28}{5}=0.25`}
              />
              <p>
                The smaller value corresponds to CO.
              </p>
            </>
          }
          answer={
            <>
              <InlineMath math={String.raw`CO`} /> is the limiting reagent.
            </>
          }
        />
      </section>

      {/* Page 19 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 19</h2>
        <ExampleCard
          title="Solved Example — Iron Carbonyl Continuation"
          question={
            <>
              14 gm Fe is allowed to react with 35 gm CO to form iron carbonyl,{' '}
              <InlineMath math={String.raw`Fe(CO)_5`} />. Identify the limiting
              reagent and calculate mass of product formed.
            </>
          }
          given={
            <>
              Mass of Fe = 14 gm; mass of CO = 35 gm. Molar mass of Fe = 56
              gm/mol; molar mass of CO = 28 gm/mol; molar mass of{' '}
              <InlineMath math={String.raw`Fe(CO)_5`} /> = 196 gm/mol.
            </>
          }
          formula={
            <FormulaLine tex={String.raw`Fe+5CO\rightarrow Fe(CO)_5`} />
          }
          calculation={
            <>
              <p>For Fe:</p>
              <FormulaLine
                tex={String.raw`56\ \text{gm Fe}\rightarrow196\ \text{gm }Fe(CO)_5`}
              />
              <FormulaLine
                tex={String.raw`14\ \text{gm Fe}\rightarrow\frac{196}{56}\times14=49\ \text{gm }Fe(CO)_5`}
              />
              <p>For CO:</p>
              <FormulaLine
                tex={String.raw`5\times28\ \text{gm CO}\rightarrow196\ \text{gm }Fe(CO)_5`}
              />
              <FormulaLine
                tex={String.raw`35\ \text{gm CO}\rightarrow\frac{196}{5\times28}\times35=49\ \text{gm }Fe(CO)_5`}
              />
              <p>
                Both reactants give the same product amount, so the reactants
                are in stoichiometric ratio.
              </p>
            </>
          }
          answer={
            <>
              No limiting reagent; mass of{' '}
              <InlineMath math={String.raw`Fe(CO)_5`} /> formed ={' '}
              <InlineMath math={String.raw`49\ \text{gm}`} />.
            </>
          }
        />

        <ExampleCard
          question={
            <>
              28 gm CaO and 56.8 gm{' '}
              <InlineMath math={String.raw`P_4O_{10}`} /> are allowed to react
              to form <InlineMath math={String.raw`Ca_3(PO_4)_2`} />. Identify
              the limiting reagent and calculate the mass of{' '}
              <InlineMath math={String.raw`Ca_3(PO_4)_2`} /> produced. Given{' '}
              <InlineMath math={String.raw`Ca=40,\ P=31`} />.
            </>
          }
          given={
            <>
              Mass of CaO = 28 gm; mass of{' '}
              <InlineMath math={String.raw`P_4O_{10}`} /> = 56.8 gm. Molar mass
              of CaO = 56 gm/mol; molar mass of{' '}
              <InlineMath math={String.raw`P_4O_{10}`} /> = 284 gm/mol; molar
              mass of <InlineMath math={String.raw`Ca_3(PO_4)_2`} /> = 310
              gm/mol.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`6CaO+P_4O_{10}\rightarrow2Ca_3(PO_4)_2`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`\frac{n_{CaO}}{6}=\frac{28/56}{6}=\frac{1}{12}`}
              />
              <FormulaLine
                tex={String.raw`\frac{n_{P_4O_{10}}}{1}=\frac{56.8/284}{1}=\frac{1}{5}`}
              />
              <p>
                Smaller ratio is for CaO, therefore CaO is the limiting reagent.
              </p>
              <FormulaLine
                tex={String.raw`m_{P_4O_{10}\ \text{used}}=\frac{284}{6\times56}\times28=23.67\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`m_{Ca_3(PO_4)_2}=28+23.67=51.67\ \text{gm}`}
              />
            </>
          }
          answer={
            <>
              Limiting reagent = CaO;{' '}
              <InlineMath math={String.raw`51.67\ \text{gm }Ca_3(PO_4)_2`} />{' '}
              is formed.
            </>
          }
        />
      </section>

      {/* Page 20 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 20</h2>
        <div className="rounded-lg border bg-slate-50 p-4">
          <h3 className="mb-2 text-lg font-bold">
            Continuation — Excess <InlineMath math={String.raw`P_4O_{10}`} />
          </h3>
          <FormulaLine
            tex={String.raw`\frac{n_{CaO}}{6}=\frac{28/56}{6}=\frac{1}{12}`}
          />
          <FormulaLine
            tex={String.raw`\frac{n_{P_4O_{10}}}{1}=\frac{56.8/284}{1}=\frac{1}{5}`}
          />
          <FormulaLine
            tex={String.raw`\text{excess }P_4O_{10}=\left(\frac{1}{5}-\frac{1}{12}\right)\times1\ \text{mol}`}
          />
        </div>

        <ExampleCard
          question={
            <>
              11.2 L <InlineMath math={String.raw`H_2S`} /> gas at 0°C and 1
              atm is allowed to react with 11.2 L{' '}
              <InlineMath math={String.raw`SO_2`} /> gas at 0°C and 1 atm.
              Calculate the maximum mass of sulphur formed.
            </>
          }
          given={
            <>
              <InlineMath math={String.raw`H_2S`} /> = 11.2 L at STP;{' '}
              <InlineMath math={String.raw`SO_2`} /> = 11.2 L at STP. At STP, 1
              mole gas = 22.4 L. Molar mass of S = 32 gm/mol.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`2H_2S+SO_2\rightarrow3S+2H_2O`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`2\ \text{mol }H_2S=2\times22.4\ \text{L}`}
              />
              <FormulaLine
                tex={String.raw`1\ \text{mol }SO_2=22.4\ \text{L}`}
              />
              <p>
                For 11.2 L <InlineMath math={String.raw`H_2S`} />, required{' '}
                <InlineMath math={String.raw`SO_2`} /> = 5.6 L. Since 11.2 L{' '}
                <InlineMath math={String.raw`SO_2`} /> is available,{' '}
                <InlineMath math={String.raw`SO_2`} /> is excess and{' '}
                <InlineMath math={String.raw`H_2S`} /> is limiting.
              </p>
              <FormulaLine
                tex={String.raw`m_S=\frac{3\times32}{2\times22.4}\times11.2=24\ \text{gm}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`24\ \text{gm sulphur}`} />}
        />

        <ExampleCard
          question={
            <>
              9.0 gm Al, 24 gm sulphur and 16 gm oxygen are allowed to react.
              Calculate the maximum mass of{' '}
              <InlineMath math={String.raw`Al_2(SO_4)_3`} /> which may form.
              Given <InlineMath math={String.raw`Al=27`} />.
            </>
          }
          given={
            <>
              Al = 9.0 gm; S = 24 gm; <InlineMath math={String.raw`O_2`} /> =
              16 gm. Molar mass of{' '}
              <InlineMath math={String.raw`Al_2(SO_4)_3`} /> = 342 gm/mol.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`2Al+3S+6O_2\rightarrow Al_2(SO_4)_3`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`\frac{n_{Al}}{2}=\frac{9/27}{2}=\frac{1}{6}`}
              />
              <FormulaLine
                tex={String.raw`\frac{n_S}{3}=\frac{24/32}{3}=\frac{1}{4}`}
              />
              <FormulaLine
                tex={String.raw`\frac{n_{O_2}}{6}=\frac{16/32}{6}=\frac{1}{12}`}
              />
              <p>
                Smallest value is for <InlineMath math={String.raw`O_2`} />;
                hence <InlineMath math={String.raw`O_2`} /> is the limiting
                reagent.
              </p>
              <FormulaLine
                tex={String.raw`m_{Al_2(SO_4)_3}=\frac{342}{6\times32}\times16=28.5\ \text{gm}`}
              />
            </>
          }
          answer={
            <>
              <InlineMath math={String.raw`28.5\ \text{gm }Al_2(SO_4)_3`} />.
            </>
          }
        />
      </section>

      {/* Page 21 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 21</h2>
        <ExampleCard
          question={
            <>
              10 gm of a mixture of <InlineMath math={String.raw`CH_4`} /> and{' '}
              <InlineMath math={String.raw`O_2`} /> gas is taken and fired.
              Calculate the maximum mass of{' '}
              <InlineMath math={String.raw`CO_2`} /> produced.
            </>
          }
          given={
            <>
              Total mass of mixture = 10 gm. Mixture contains{' '}
              <InlineMath math={String.raw`CH_4`} /> and{' '}
              <InlineMath math={String.raw`O_2`} />.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`CH_4+2O_2\rightarrow CO_2+2H_2O`}
            />
          }
          calculation={
            <>
              <p>
                Let mass of <InlineMath math={String.raw`CH_4`} /> ={' '}
                <InlineMath math={String.raw`x`} /> gm, so mass of{' '}
                <InlineMath math={String.raw`O_2`} /> ={' '}
                <InlineMath math={String.raw`10-x`} /> gm.
              </p>
              <p>
                For maximum <InlineMath math={String.raw`CO_2`} /> formation,
                reactants must be in stoichiometric ratio.
              </p>
              <FormulaLine
                tex={String.raw`16\ \text{gm }CH_4\text{ needs }64\ \text{gm }O_2`}
              />
              <FormulaLine
                tex={String.raw`x\ \text{gm }CH_4\text{ needs }4x\ \text{gm }O_2`}
              />
              <FormulaLine
                tex={String.raw`4x=10-x\Rightarrow x=2\ \text{gm}`}
              />
              <p>
                Now use complete stoichiometric mixture:
              </p>
              <FormulaLine
                tex={String.raw`CH_4+2O_2\rightarrow CO_2+2H_2O`}
              />
              <FormulaLine
                tex={String.raw`16+64=80\ \text{gm reactants}\rightarrow44\ \text{gm }CO_2`}
              />
              <FormulaLine
                tex={String.raw`10\ \text{gm reactants}\rightarrow\frac{44}{80}\times10=5.5\ \text{gm }CO_2`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`5.5\ \text{gm }CO_2`} />}
        />
        <div className="rounded-md bg-amber-50 p-4 text-amber-900">
          For maximum amount of product formation, reactants must be in
          stoichiometric ratio.
        </div>
      </section>

      {/* Page 22 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 22</h2>
        <ExampleCard
          question={
            <>
              How many gm magnesium should be burnt in 1.4 gm nitrogen such that
              the mole ratio of magnesium and nitrogen remains constant
              throughout the reaction?
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`N_2`} /> = 1.4 gm. Molar mass
              of <InlineMath math={String.raw`N_2`} /> = 28 gm/mol. Molar mass
              of Mg = 24 gm/mol.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`3Mg+N_2\rightarrow Mg_3N_2`}
            />
          }
          calculation={
            <>
              <p>
                If reactants are taken in stoichiometric ratio throughout the
                reaction, their mole ratio remains unchanged.
              </p>
              <FormulaLine
                tex={String.raw`1\ \text{mol }N_2=28\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`3\ \text{mol Mg}=3\times24\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`m_{Mg}=\frac{3\times24}{28}\times1.4=3.6\ \text{gm}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`3.6\ \text{gm Mg}`} />}
        />
      </section>

      {/* Page 23 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 23</h2>
        <h3 className="text-xl font-bold text-red-600">
          Percentage Yield Calculation
        </h3>
        <p>
          Percentage yield of any product represents the amount of product
          actually formed relative to its theoretical stoichiometric amount.
        </p>
        <FormulaLine
          tex={String.raw`\% \text{ yield}=\frac{\text{actual yield}}{\text{theoretical yield}}\times100`}
        />
        <ExampleCard
          question={
            <>
              1 gm <InlineMath math={String.raw`CaCO_3`} /> is decomposed and
              only 0.33 gm <InlineMath math={String.raw`CO_2`} /> is obtained.
              Calculate the percentage yield of{' '}
              <InlineMath math={String.raw`CO_2`} />.
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`CaCO_3`} /> = 1 gm. Actual
              mass of <InlineMath math={String.raw`CO_2`} /> = 0.33 gm. Molar
              mass of <InlineMath math={String.raw`CaCO_3`} /> = 100 gm/mol;
              molar mass of <InlineMath math={String.raw`CO_2`} /> = 44 gm/mol.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`CaCO_3\xrightarrow{\Delta}CaO+CO_2`}
              />
              <FormulaLine
                tex={String.raw`\% \text{yield}=\frac{\text{actual amount}}{\text{theoretical amount}}\times100`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`100\ \text{gm }CaCO_3\rightarrow44\ \text{gm }CO_2`}
              />
              <FormulaLine
                tex={String.raw`1\ \text{gm }CaCO_3\rightarrow\frac{44}{100}\times1=0.44\ \text{gm }CO_2`}
              />
              <FormulaLine
                tex={String.raw`\% \text{yield of }CO_2=\frac{0.33}{0.44}\times100=75\%`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`75\%`} />}
        />
        <div className="rounded-md bg-slate-50 p-4">
          <p>
            None of the reactions occur 100% in reality. Hence actual yield of
            any product is always less than 100%.
          </p>
          <p>
            Sometimes occurrence of other parallel reactions also decreases the
            yield of any product.
          </p>
        </div>
      </section>

      {/* Page 24 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 24</h2>
        <p className="rounded-md bg-amber-50 p-4 font-semibold text-amber-900">
          Percentage yield of any product is always equal to the percentage
          extent of reaction.
        </p>
        <ExampleCard
          question={
            <>
              16 gm MgO is allowed to react with excess HCl. If only 19.0 gm{' '}
              <InlineMath math={String.raw`MgCl_2`} /> is formed, calculate the
              percentage yield of <InlineMath math={String.raw`MgCl_2`} />.
            </>
          }
          given={
            <>
              Mass of MgO = 16 gm. Actual mass of{' '}
              <InlineMath math={String.raw`MgCl_2`} /> = 19.0 gm. Molar mass of
              MgO = 40 gm/mol; molar mass of{' '}
              <InlineMath math={String.raw`MgCl_2`} /> = 95 gm/mol.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`MgO+2HCl\rightarrow MgCl_2+H_2O`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`40\ \text{gm MgO}\rightarrow95\ \text{gm }MgCl_2`}
              />
              <FormulaLine
                tex={String.raw`16\ \text{gm MgO}\rightarrow\frac{95}{40}\times16=38\ \text{gm }MgCl_2\ (\text{theoretical})`}
              />
              <FormulaLine
                tex={String.raw`\% \text{yield}=\frac{19}{38}\times100=50\%`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`50\%`} />}
        />

        <ExampleCard
          question={
            <>
              15 gm <InlineMath math={String.raw`CH_3COOH`} /> and 46 gm{' '}
              <InlineMath math={String.raw`C_2H_5OH`} /> are allowed to react.
              If only 17.6 gm <InlineMath math={String.raw`CH_3COOC_2H_5`} /> is
              formed, calculate its percentage yield.
            </>
          }
          given={
            <>
              Mass of <InlineMath math={String.raw`CH_3COOH`} /> = 15 gm; mass
              of <InlineMath math={String.raw`C_2H_5OH`} /> = 46 gm; actual
              ester formed = 17.6 gm. Molar masses: acetic acid = 60 gm/mol,
              ethanol = 46 gm/mol, ethyl acetate = 88 gm/mol.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`CH_3COOH+C_2H_5OH\rightarrow CH_3COOC_2H_5+H_2O`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`\frac{n_{CH_3COOH}}{1}=\frac{15}{60}=0.25`}
              />
              <FormulaLine
                tex={String.raw`\frac{n_{C_2H_5OH}}{1}=\frac{46}{46}=1`}
              />
              <p>
                <InlineMath math={String.raw`CH_3COOH`} /> is limiting reagent.
              </p>
              <FormulaLine
                tex={String.raw`60\ \text{gm }CH_3COOH\rightarrow88\ \text{gm ester}`}
              />
              <FormulaLine
                tex={String.raw`15\ \text{gm }CH_3COOH\rightarrow\frac{88}{60}\times15=22\ \text{gm ester}`}
              />
              <p className="font-semibold text-amber-700">
                Final percentage yield continues on Page 25.
              </p>
            </>
          }
          answer="Continues on Page 25"
        />
      </section>

      {/* Page 25 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 25</h2>
        <h3 className="text-xl font-bold">
          Continuation of Ester Yield Example
        </h3>
        <div className="rounded-lg border bg-slate-50 p-4">
          <FormulaLine
            tex={String.raw`\% \text{yield}=\frac{17.6}{22}\times100=80\%`}
          />
        </div>
        <div className="rounded-md bg-blue-50 p-3 font-bold text-blue-900">
          Final Answer: <InlineMath math={String.raw`80\%`} />.
        </div>

        <ExampleCard
          question={
            <>
              17.0 gm <InlineMath math={String.raw`NaNO_3`} /> is heated up to
              200°C, by which the mass of solid decreases by 0.24 gm. Calculate
              the percentage of <InlineMath math={String.raw`NaNO_3`} />{' '}
              decomposed.
            </>
          }
          given={
            <>
              Initial mass of <InlineMath math={String.raw`NaNO_3`} /> = 17.0
              gm. Loss in mass = 0.24 gm due to{' '}
              <InlineMath math={String.raw`O_2`} /> gas. Molar mass of{' '}
              <InlineMath math={String.raw`NaNO_3`} /> = 85 gm/mol.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`NaNO_3(s)\rightarrow NaNO_2(s)+\frac{1}{2}O_2(g)`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`1\ \text{mol }NaNO_3=85\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`\frac{1}{2}\ \text{mol }O_2=16\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`m_{NaNO_3\ \text{decomposed}}=\frac{85}{16}\times0.24=1.275\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`\% \text{decomposition}=\frac{1.275}{17.0}\times100=7.5\%`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`7.5\%`} />}
        />

        <ExampleCard
          question={
            <>
              On rusting, iron is quantitatively converted into{' '}
              <InlineMath math={String.raw`Fe_2O_3`} />. If a sample of pure
              iron gains 10% in weight on partial rusting, calculate the
              fraction of iron rusted.
            </>
          }
          given={
            <>
              Take 1 gm pure Fe initially. Final mass after rusting = 1.10 gm.
              Molar masses: Fe = 56, <InlineMath math={String.raw`Fe_2O_3`} /> =
              160.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`2Fe+\frac{3}{2}O_2\rightarrow Fe_2O_3`}
            />
          }
          calculation={
            <>
              <p>
                Let <InlineMath math={String.raw`x`} /> gm Fe be rusted from 1
                gm Fe.
              </p>
              <FormulaLine
                tex={String.raw`112\ \text{gm Fe}\rightarrow160\ \text{gm }Fe_2O_3`}
              />
              <FormulaLine
                tex={String.raw`x\ \text{gm Fe}\rightarrow\frac{160}{112}x\ \text{gm }Fe_2O_3`}
              />
              <FormulaLine
                tex={String.raw`m_{\text{final}}=\frac{160}{112}x+(1-x)`}
              />
              <p className="font-semibold text-amber-700">
                Calculation continues on Page 26.
              </p>
            </>
          }
          answer="Continues on Page 26"
        />
      </section>

      {/* Page 26 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 26</h2>
        <h3 className="text-xl font-bold">
          Continuation of Rusting Example
        </h3>
        <div className="rounded-lg border bg-slate-50 p-4">
          <FormulaLine
            tex={String.raw`1.10=\frac{160}{112}x+(1-x)`}
          />
          <FormulaLine
            tex={String.raw`x=\frac{7}{30}`}
          />
          <p>Alternative oxygen-gain method:</p>
          <FormulaLine
            tex={String.raw`m_{O_2\ \text{combined}}=1\times\frac{10}{100}=0.10\ \text{gm}`}
          />
          <FormulaLine
            tex={String.raw`0.10=\frac{48}{112}x`}
          />
          <FormulaLine
            tex={String.raw`x=\frac{7}{30}`}
          />
        </div>
        <div className="rounded-md bg-blue-50 p-3 font-bold text-blue-900">
          Final Answer: Fraction of iron rusted ={' '}
          <InlineMath math={String.raw`\frac{7}{30}`} />.
        </div>

        <h3 className="text-xl font-bold text-red-600">
          Degree of Dissociation from Vapour Density
        </h3>
        <ExampleCard
          question={
            <>
              The vapour density of a sample of{' '}
              <InlineMath math={String.raw`N_2O_4`} /> gas is found to be 40.
              Calculate its degree of dissociation into{' '}
              <InlineMath math={String.raw`NO_2`} />.
            </>
          }
          given={
            <>
              Vapour density = 40, so observed molar mass{' '}
              <InlineMath math={String.raw`M=2\times40=80`} />. Original molar
              mass of <InlineMath math={String.raw`N_2O_4`} /> = 92.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`\alpha=\frac{\text{moles dissociated}}{\text{moles taken}}=\frac{x}{a}`}
              />
              <FormulaLine
                tex={String.raw`N_2O_4\rightarrow2NO_2`}
              />
            </>
          }
          calculation={
            <>
              <p>Let initial moles of <InlineMath math={String.raw`N_2O_4`} /> = <InlineMath math={String.raw`a`} />.</p>
              <FormulaLine
                tex={String.raw`\text{final moles}=a-x+2x=a+x`}
              />
              <p>
                Since mass is constant:
              </p>
              <FormulaLine
                tex={String.raw`a\times92=(a+x)\times80`}
              />
              <FormulaLine
                tex={String.raw`a\times92=a(1+\alpha)\times80`}
              />
              <FormulaLine
                tex={String.raw`1+\alpha=\frac{92}{80}`}
              />
              <FormulaLine
                tex={String.raw`\alpha=\frac{12}{80}=0.15`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`\alpha=0.15`} />}
        />
      </section>

      {/* Page 27 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 27</h2>
        <h3 className="text-xl font-bold">
          General Formula for Degree of Dissociation
        </h3>
        <p>
          Let one reactant particle form <InlineMath math={String.raw`n`} />{' '}
          product particles.
        </p>
        <div className="rounded-lg border bg-slate-50 p-4">
          <table className="w-full border-collapse border border-slate-300 text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="border border-slate-300 p-2 text-left"></th>
                <th className="border border-slate-300 p-2 text-left">
                  Reactant particle A
                </th>
                <th className="border border-slate-300 p-2 text-left">
                  Product particles
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-2">Initial moles</td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`a`} />
                </td>
                <td className="border border-slate-300 p-2">0</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">Final moles</td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`a-x`} />
                </td>
                <td className="border border-slate-300 p-2">
                  <InlineMath math={String.raw`nx`} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <FormulaLine
          tex={String.raw`w=n\times M=\text{constant}`}
        />
        <FormulaLine
          tex={String.raw`aM_0=[(a-x)+nx]M`}
        />
        <FormulaLine
          tex={String.raw`\alpha=\frac{x}{a}=\frac{M_0-M}{(n-1)M}`}
        />
        <div className="rounded-lg border bg-slate-50 p-4">
          <p>
            Here, <InlineMath math={String.raw`M_0`} /> = molar mass of original
            substance.
          </p>
          <p>
            <InlineMath math={String.raw`M`} /> = average molar mass of final
            sample.
          </p>
          <p>
            <InlineMath math={String.raw`n`} /> = number of product particles
            per particle of reactant.
          </p>
        </div>

        <h3 className="text-xl font-bold">Examples of n</h3>
        <ul className="ml-6 list-disc space-y-3 text-sm">
          <li>
            <InlineMath math={String.raw`PCl_5\rightarrow PCl_3+Cl_2`} />:{' '}
            <InlineMath math={String.raw`n=2`} />
          </li>
          <li>
            <InlineMath math={String.raw`2NH_3\rightarrow N_2+3H_2`} />:{' '}
            <InlineMath math={String.raw`n=\frac{4}{2}=2`} />
          </li>
          <li>
            <InlineMath math={String.raw`2NO_2\rightarrow N_2O_4`} />:{' '}
            <InlineMath math={String.raw`n=\frac{1}{2}`} />
          </li>
        </ul>
      </section>
    </main>
  );
}
