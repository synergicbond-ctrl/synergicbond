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

const FormulaLine = ({ tex }: { tex: string }) => (
  <div className="my-2 rounded-md bg-white p-3 text-center">
    <BlockMath math={tex} />
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

export default function ConcentrationTermsPart2() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 bg-white p-8 text-slate-900">
      {/* Page 5 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 5</h2>

        <h3 className="text-xl font-bold">
          Continuation of Percentage Method Example
        </h3>

        <ExampleCard
          title="Solved Example — Page 4 Continued"
          question={
            <>
              40 gm of solute is dissolved in 160 gm water to form a solution of
              density 1.25 gm/ml. Calculate concentration in{' '}
              <InlineMath math={String.raw`\% (w/v)`} />.
            </>
          }
          given={
            <>
              Mass of solute = 40 gm; mass of solution = 200 gm; density =
              1.25 gm/ml.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`V_{\text{solution}}=\frac{m}{d}`}
              />
              <FormulaLine
                tex={String.raw`\% (w/v)=\frac{\text{mass of solute}}{\text{volume of solution in ml}}\times 100`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`V_{\text{solution}}=\frac{200\ \text{gm}}{1.25\ \text{gm/ml}}=\frac{200}{1.25}\ \text{ml}=160\ \text{ml}`}
              />
              <FormulaLine
                tex={String.raw`\text{conc.}=\frac{40}{200/1.25}\times 100=25\% (w/v)`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`25\% (w/v)`} />}
        />

        <h3 className="text-xl font-bold">
          How many gm solute is present in the following?
        </h3>

        <ExampleCard
          question={
            <>
              400 gm 20% <InlineMath math={String.raw`(w/w)`} /> aqueous{' '}
              <InlineMath math={String.raw`KMnO_4`} /> solution.
            </>
          }
          given={
            <>
              Mass of solution = 400 gm; concentration ={' '}
              <InlineMath math={String.raw`20\% (w/w)`} />.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`m_{\text{solute}}=m_{\text{solution}}\times \frac{\%}{100}`}
            />
          }
          calculation={
            <FormulaLine
              tex={String.raw`m_{\text{solute}}=400\times \frac{20}{100}=80\ \text{gm}`}
            />
          }
          answer="80 gm"
        />

        <ExampleCard
          question={
            <>
              250 ml 12% <InlineMath math={String.raw`(w/v)`} /> aqueous NaOH
              solution.
            </>
          }
          given={
            <>
              Volume of solution = 250 ml; concentration ={' '}
              <InlineMath math={String.raw`12\% (w/v)`} />.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`m_{\text{solute}}=V_{\text{solution}}\times \frac{\%}{100}`}
            />
          }
          calculation={
            <FormulaLine
              tex={String.raw`m_{\text{solute}}=250\times \frac{12}{100}=30\ \text{gm}`}
            />
          }
          answer="30 gm"
        />

        <ExampleCard
          question={
            <>
              300 ml 10% <InlineMath math={String.raw`(w/w)`} /> aqueous HCl
              solution of density{' '}
              <InlineMath math={String.raw`\frac{4}{3}\ \text{gm/ml}`} />.
            </>
          }
          given={
            <>
              Volume = 300 ml; density ={' '}
              <InlineMath math={String.raw`\frac{4}{3}\ \text{gm/ml}`} />;
              concentration = <InlineMath math={String.raw`10\% (w/w)`} />.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`m_{\text{solution}}=V_{\text{solution}}\times d`}
              />
              <FormulaLine
                tex={String.raw`m_{\text{solute}}=m_{\text{solution}}\times \frac{\%}{100}`}
              />
            </>
          }
          calculation={
            <FormulaLine
              tex={String.raw`m_{\text{solute}}=\left(300\times \frac{4}{3}\right)\times \frac{10}{100}=40\ \text{gm}`}
            />
          }
          answer="40 gm"
        />

        <ExampleCard
          question={
            <>
              500 gm 40% <InlineMath math={String.raw`(w/v)`} /> aqueous{' '}
              <InlineMath math={String.raw`HNO_3`} /> solution of specific
              gravity 1.2.
            </>
          }
          given={
            <>
              Mass of solution = 500 gm; density = 1.2 gm/ml; concentration ={' '}
              <InlineMath math={String.raw`40\% (w/v)`} />.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`V_{\text{solution}}=\frac{m_{\text{solution}}}{d}`}
              />
              <FormulaLine
                tex={String.raw`m_{\text{solute}}=V_{\text{solution}}\times \frac{\%}{100}`}
              />
            </>
          }
          calculation={
            <FormulaLine
              tex={String.raw`m_{\text{solute}}=\left(\frac{500}{1.2}\right)\times \frac{40}{100}=166.67\ \text{gm}`}
            />
          }
          answer="166.67 gm"
        />

        <p className="text-xs italic text-slate-400">TG ~ @bohring_bot</p>
      </section>

      {/* Page 6 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 6</h2>

        <ExampleCard
          question={
            <>
              40 ml of 20% <InlineMath math={String.raw`(w/v)`} />{' '}
              <InlineMath math={String.raw`H_2SO_4`} /> solution is diluted to
              500 ml. Calculate the strength of diluted solution in{' '}
              <InlineMath math={String.raw`\% (w/v)`} />.
            </>
          }
          given={
            <>
              Initial volume = 40 ml; initial strength ={' '}
              <InlineMath math={String.raw`20\% (w/v)`} />; final volume =
              500 ml.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`\text{mass of solute before dilution}=\text{mass of solute after dilution}`}
            />
          }
          calculation={
            <FormulaLine
              tex={String.raw`40\times \frac{20}{100}=500\times \frac{x}{100}\Rightarrow x=1.6`}
            />
          }
          answer={<InlineMath math={String.raw`1.6\% (w/v)`} />}
        />

        <ExampleCard
          question={
            <>
              50 gm of 20% <InlineMath math={String.raw`(w/w)`} /> aqueous NaOH
              solution is added with 150 gm water. Calculate the concentration
              of diluted solution in <InlineMath math={String.raw`\% (w/w)`} />.
            </>
          }
          given={
            <>
              Initial mass = 50 gm; initial concentration ={' '}
              <InlineMath math={String.raw`20\%`} />; water added = 150 gm;
              final solution mass = 200 gm.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`\% (w/w)=\frac{m_{\text{solute}}}{m_{\text{solution}}}\times 100`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`m_{\text{solute}}=50\times \frac{20}{100}=10\ \text{gm}`}
              />
              <FormulaLine
                tex={String.raw`\% (w/w)=\frac{10}{50+150}\times 100=5\%`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`5\% (w/w)`} />}
        />

        <h3 className="text-xl font-bold">Mixing of Solutions</h3>

        <ExampleCard
          question={
            <>
              200 gm of 30% <InlineMath math={String.raw`(w/w)`} /> aqueous HCl
              solution is mixed with 300 gm of 20%{' '}
              <InlineMath math={String.raw`(w/w)`} /> aqueous HCl solution.
              Calculate concentration of resulting solution in{' '}
              <InlineMath math={String.raw`\% (w/w)`} />.
            </>
          }
          given={
            <>
              Solution 1: 200 gm, 30%; Solution 2: 300 gm, 20%; total solution
              mass = 500 gm.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`\% (w/w)_{\text{mix}}=\frac{m_1 \%_1 + m_2 \%_2}{m_1 + m_2}`}
            />
          }
          calculation={
            <FormulaLine
              tex={String.raw`\% (w/w)_{\text{mix}}=\frac{200\times 30 + 300\times 20}{200+300}=\frac{6000+6000}{500}=24\%`}
            />
          }
          answer={<InlineMath math={String.raw`24\% (w/w)`} />}
        />

        <p className="text-xs italic text-slate-400">TG ~ @bohring_bot</p>
      </section>

      {/* Page 7 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 7</h2>

        <ExampleCard
          question={
            <>
              300 ml 20% <InlineMath math={String.raw`(w/v)`} /> aqueous{' '}
              <InlineMath math={String.raw`HNO_3`} /> solution is mixed with
              200 ml 10% <InlineMath math={String.raw`(w/v)`} /> aqueous{' '}
              <InlineMath math={String.raw`HNO_3`} /> solution. Calculate
              concentration of resulting solution in{' '}
              <InlineMath math={String.raw`\% (w/v)`} />.
            </>
          }
          given={
            <>
              Solution 1: 300 ml, 20%; Solution 2: 200 ml, 10%; total volume =
              500 ml.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`\% (w/v)_{\text{mix}}=\frac{V_1 \%_1 + V_2 \%_2}{V_1 + V_2}`}
            />
          }
          calculation={
            <FormulaLine
              tex={String.raw`\% (w/v)_{\text{mix}}=\frac{300\times 20 + 200\times 10}{300+200}=\frac{6000+2000}{500}=16\%`}
            />
          }
          answer={<InlineMath math={String.raw`16\% (w/v)`} />}
        />

        <ExampleCard
          question={
            <>
              200 ml of 20% <InlineMath math={String.raw`(v/v)`} /> aqueous
              ethanol solution is mixed with 300 ml of 10%{' '}
              <InlineMath math={String.raw`(v/v)`} /> aqueous ethanol solution.
              Calculate concentration of resulting solution in{' '}
              <InlineMath math={String.raw`\% (v/v)`} />.
            </>
          }
          given={
            <>
              Solution 1: 200 ml, 20%; Solution 2: 300 ml, 10%; total volume =
              500 ml.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`\% (v/v)_{\text{mix}}=\frac{V_1 \%_1 + V_2 \%_2}{V_1 + V_2}`}
            />
          }
          calculation={
            <FormulaLine
              tex={String.raw`\% (v/v)_{\text{mix}}=\frac{200\times 20 + 300\times 10}{500}=14\%`}
            />
          }
          answer={<InlineMath math={String.raw`14\% (v/v)`} />}
        />

        <ExampleCard
          question={
            <>
              What mass of water should be added to 200 gm of 30%{' '}
              <InlineMath math={String.raw`(w/w)`} /> aqueous NaOH solution to
              make its concentration 20% <InlineMath math={String.raw`(w/w)`} />
              ?
            </>
          }
          given={
            <>
              Initial solution = 200 gm; initial concentration = 30%; final
              concentration = 20%; let mass of water added ={' '}
              <InlineMath math={String.raw`x`} /> gm.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`m_{\text{solute}}=\text{constant during dilution by water}`}
            />
          }
          calculation={
            <FormulaLine
              tex={String.raw`200\times \frac{30}{100}=(200+x)\times \frac{20}{100}\Rightarrow 6000=4000+20x\Rightarrow x=100\ \text{gm}`}
            />
          }
          answer="100 gm water"
        />

        <p className="text-xs italic text-slate-400">TG ~ @bohring_bot</p>
      </section>

      {/* Page 8 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 8</h2>

        <h3 className="text-xl font-bold text-red-600">PPM (Parts Per Million)</h3>

        <p>
          It represents the amount (gm or ml) of solute present in every{' '}
          <InlineMath math={String.raw`10^6`} /> amount (gm or ml) of solution.
        </p>

        <p>
          It is defined for <strong>very dilute solutions</strong> only.
        </p>

        <FormulaLine
          tex={String.raw`\text{PPM}(w/w)=\frac{\text{mass of solute}}{\text{mass of solution}}\times 10^6`}
        />

        <FormulaLine
          tex={String.raw`\text{PPM}(w/v)=\frac{\text{mass of solute}}{\text{volume of solution in ml}}\times 10^6`}
        />

        <FormulaLine
          tex={String.raw`\text{PPM}(v/v)=\frac{\text{ml of solute}}{\text{ml of solution}}\times 10^6`}
        />

        <ExampleCard
          question={
            <>
              20 mg <InlineMath math={String.raw`Ca^{2+}`} /> ion is present in
              2 kg water. Calculate the concentration of solution in PPM.
            </>
          }
          given={
            <>
              Solute mass = <InlineMath math={String.raw`20\ \text{mg}=20\times 10^{-3}\ \text{gm}`} />
              ; solution mass ≈ water mass = <InlineMath math={String.raw`2\ \text{kg}=2000\ \text{gm}`} />.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`\text{PPM}=\frac{m_{\text{solute}}}{m_{\text{solution}}}\times 10^6`}
            />
          }
          calculation={
            <FormulaLine
              tex={String.raw`\text{PPM}=\frac{20\times 10^{-3}}{2000}\times 10^6=10\ \text{ppm}`}
            />
          }
          answer={<InlineMath math={String.raw`10\ \text{ppm}`} />}
        />

        <p className="text-xs italic text-slate-400">TG ~ @bohring_bot</p>
      </section>
    </main>
  );
}
