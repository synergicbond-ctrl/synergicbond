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

export default function ConcentrationTermsPart3() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 bg-white p-8 text-slate-900">
      {/* Page 9 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 9</h2>

        <h3 className="text-xl font-bold text-red-600">gm/litre</h3>

        <p>
          gm/litre represents the number of gm of solute present per litre of
          solution.
        </p>

        <FormulaLine
          tex={String.raw`\text{Strength in gm/litre}=\frac{\text{mass of solute in gm}}{\text{volume of solution in litre}}`}
        />

        <ExampleCard
          question={
            <>
              0.8 mole NaOH is dissolved to get 250 ml solution. Calculate its
              concentration in gm/litre.
            </>
          }
          given={
            <>
              Moles of NaOH = 0.8 mole; molar mass of NaOH = 40 gm/mol; volume
              of solution = 250 ml = 0.25 L.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`\text{gm/litre}=\frac{n\times M_\text{molar}}{V(\text{L})}`}
            />
          }
          calculation={
            <>
              <FormulaLine tex={String.raw`\text{mass of NaOH}=0.8\times 40=32\ \text{gm}`} />
              <FormulaLine tex={String.raw`\text{gm/litre}=\frac{32}{0.25}=128\ \text{gm/litre}`} />
            </>
          }
          answer={<InlineMath math={String.raw`128\ \text{gm/litre}`} />}
        />

        <h3 className="text-xl font-bold">
          Relationship between gm/litre and Molarity (M)
        </h3>

        <FormulaLine
          tex={String.raw`\text{Strength in gm/litre} = \text{Molarity } (M) \times M_{\text{solute}}`}
        />

        <div className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-50 p-5 text-slate-800">
          <p className="font-bold text-emerald-900">💡 Key Takeaway for JEE / NEET:</p>
          <p className="mt-1 text-sm leading-relaxed">
            Whenever strength is given in <strong>gm/L</strong>, simply divide by the solute&apos;s molar mass (<InlineMath math={String.raw`M_{\text{solute}}`} />) to get <strong>Molarity (M)</strong> directly without converting volumes twice.
          </p>
        </div>

        <p className="text-xs italic text-slate-400">TG ~ @bohring_bot</p>
      </section>
    </main>
  );
}
