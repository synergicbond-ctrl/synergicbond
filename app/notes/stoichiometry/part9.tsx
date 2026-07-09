// app/notes/stoichiometry/part9.tsx
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

export default function StoichiometryPart9() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 bg-white p-8 text-slate-900">
      {/* Page 73 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 73</h2>
        <div className="rounded-lg border bg-slate-50 p-4">
          <h3 className="text-xl font-bold">
            Continuation — Volatile Chloride Method
          </h3>
          <FormulaLine
            tex={String.raw`\text{Atomic weight of metal}=E\times v`}
          />
        </div>

        <ExampleCard
          question={
            <>
              The vapour density of a metal chloride is 81.4. If the equivalent
              weight of the metal is 18.7, calculate its atomic weight.
            </>
          }
          given={
            <>
              Vapour density = 81.4; equivalent weight of metal = 18.7.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`v=\frac{2\times \text{V.D.}}{E+35.5}`}
              />
              <FormulaLine
                tex={String.raw`\text{Atomic weight}=E\times v`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`v=\frac{2\times81.4}{18.7+35.5}\approx3`}
              />
              <FormulaLine
                tex={String.raw`A=18.7\times3=56.1`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`56.1`} />}
        />

        <ExampleCard
          question={
            <>
              The specific heat capacity of an element is{' '}
              <InlineMath math={String.raw`0.085\ \text{cal K}^{-1}\text{mol}^{-1}`} />.
              The vapour density of its volatile chloride is 181.5. If the oxide
              of the element contains 24.24% oxygen by weight, determine the
              exact atomic weight of the element and molecular formula of the
              volatile chloride.
            </>
          }
          given={
            <>
              Specific heat = 0.085; vapour density of volatile chloride =
              181.5; oxide contains oxygen = 24.24%, element = 75.76%.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`E_{\text{element}}=\frac{\% \text{element}}{\% \text{oxygen}}\times8`}
              />
              <FormulaLine
                tex={String.raw`A_{\text{approx}}=\frac{6.4}{S}`}
              />
              <FormulaLine
                tex={String.raw`v\approx\frac{A_{\text{approx}}}{E}`}
              />
              <FormulaLine
                tex={String.raw`A_{\text{exact}}=E\times v`}
              />
            </>
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`E=\frac{75.76}{24.24}\times8=25.00`}
              />
              <FormulaLine
                tex={String.raw`A_{\text{approx}}=\frac{6.4}{0.085}=75.29`}
              />
              <FormulaLine
                tex={String.raw`v\approx\frac{75.29}{25.00}\approx3`}
              />
              <FormulaLine
                tex={String.raw`A_{\text{exact}}=25.00\times3=75.00`}
              />
            </>
          }
          answer={
            <>
              Exact atomic weight = <InlineMath math={String.raw`75.00`} />.
              Volatile chloride formula continues on Page 74.
            </>
          }
        />
      </section>

      {/* Page 74 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 74</h2>
        <h3 className="text-xl font-bold">
          Continuation — Molecular Formula of Volatile Chloride
        </h3>
        <div className="rounded-lg border bg-slate-50 p-4">
          <p>
            Let the molecular formula of volatile chloride be{' '}
            <InlineMath math={String.raw`(MCl_3)_x`} />.
          </p>
          <FormulaLine
            tex={String.raw`\text{M.W.}=x(A+3\times35.5)`}
          />
          <FormulaLine
            tex={String.raw`2\times181.5=x(75+3\times35.5)`}
          />
          <FormulaLine tex={String.raw`x=2`} />
          <FormulaLine
            tex={String.raw`\therefore\ \text{M.F. of chloride}=M_2Cl_6`}
          />
        </div>
        <div className="rounded-md bg-blue-50 p-3 font-bold text-blue-900">
          Final Answer: Volatile chloride ={' '}
          <InlineMath math={String.raw`M_2Cl_6`} />.
        </div>

        <h3 className="text-xl font-bold text-red-600">
          Volatile Nitride Method
        </h3>
        <p>
          Derive the expression of valency of an element in terms of its
          equivalent weight and vapour density of volatile nitride.
        </p>
        <div className="rounded-lg border bg-slate-50 p-4">
          <p>
            Let the formula of volatile nitride be{' '}
            <InlineMath math={String.raw`M_3N_v`} />.
          </p>
          <FormulaLine
            tex={String.raw`\text{Mol. wt.}=3A+14v`}
          />
          <FormulaLine
            tex={String.raw`2\times \text{V.D.}=3(Ev)+14v`}
          />
          <FormulaLine
            tex={String.raw`v=\frac{2\times \text{V.D.}}{3E+14}`}
          />
        </div>
      </section>

      {/* Page 75 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 75</h2>
        <h3 className="text-xl font-bold text-red-600">
          Law of Isomorphism
        </h3>
        <p>
          Isomorphous compounds have similar chemical formula as well as
          crystalline structure.
        </p>
        <DiagramBlock title="Examples of isomorphous compounds">
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <InlineMath math={String.raw`Cu_2S`} /> and{' '}
              <InlineMath math={String.raw`Ag_2S`} />
            </li>
            <li>
              <InlineMath math={String.raw`NaCl`} /> and{' '}
              <InlineMath math={String.raw`KCl`} />: FCC structure
            </li>
            <li>
              <InlineMath math={String.raw`MgSO_4\cdot7H_2O`} /> and{' '}
              <InlineMath math={String.raw`FeSO_4\cdot7H_2O`} />
            </li>
          </ul>
        </DiagramBlock>
        <p>
          Elements differing must have the same valency in isomorphous
          compounds.
        </p>
        <p>
          According to the law of isomorphism, the ratio of the atomic masses of
          the elements differing is equal to their mass ratio involved in
          combination with the same mass of other elements.
        </p>
        <FormulaLine
          tex={String.raw`\frac{\text{Atomic mass of }X}{\text{Atomic mass of }Y}=\left(\frac{m_X}{m_Y}\right)_{\text{combined with same mass of other elements}}`}
        />
      </section>

      {/* Page 76 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 76</h2>
        <ExampleCard
          title="Solved Example — Isomorphism of Cu₂S and Ag₂S"
          question={
            <>
              <InlineMath math={String.raw`Cu_2S`} /> and{' '}
              <InlineMath math={String.raw`Ag_2S`} /> are isomorphous compounds.
              They contain 20% and 10% sulphur by mass respectively. If the
              atomic mass of Ag is 108, calculate the atomic mass of Cu.
            </>
          }
          given={
            <>
              In <InlineMath math={String.raw`Cu_2S`} />, sulphur = 20%, copper
              = 80%. In <InlineMath math={String.raw`Ag_2S`} />, sulphur = 10%,
              silver = 90%. Atomic mass of Ag = 108.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`\frac{A_{Cu}}{A_{Ag}}=\left(\frac{m_{Cu}}{m_{Ag}}\right)_{\text{combined with same mass of S}}`}
            />
          }
          calculation={
            <>
              <FormulaLine
                tex={String.raw`\frac{A_{Cu}}{108}=\frac{80/20}{90/10}`}
              />
              <FormulaLine
                tex={String.raw`A_{Cu}=48`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`48`} />}
        />

        <ExampleCard
          question={
            <>
              The equivalent weight of an element is 13.16. The element forms an
              acidic oxide which reacts with KOH to form a salt isomorphous with{' '}
              <InlineMath math={String.raw`K_2SO_4`} />. Determine the atomic
              weight of the element.
            </>
          }
          given={
            <>
              Equivalent weight = 13.16. Salt is isomorphous with{' '}
              <InlineMath math={String.raw`K_2SO_4`} />.
            </>
          }
          formula={
            <>
              <FormulaLine
                tex={String.raw`\text{Atomic weight}=\text{Equivalent weight}\times\text{valency}`}
              />
            </>
          }
          calculation={
            <>
              <p>
                Since the salt is isomorphous with{' '}
                <InlineMath math={String.raw`K_2SO_4`} />, the anion has the
                same valency as sulphate, i.e. 2. For an acidic oxide forming
                such a salt, the element has valency 6.
              </p>
              <FormulaLine
                tex={String.raw`A=13.16\times6=78.96`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`78.96`} />}
        />
      </section>

      {/* Page 77 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 77</h2>
        <ExampleCard
          question={
            <>
              A metal M forms a ternary compound with K and O, isomorphous with{' '}
              <InlineMath math={String.raw`K_2SO_4`} />. If the compound
              contains 26.8% metal by weight, calculate the atomic weight of the
              metal.
            </>
          }
          given={
            <>
              Compound is isomorphous with{' '}
              <InlineMath math={String.raw`K_2SO_4`} />. Formula taken as{' '}
              <InlineMath math={String.raw`K_2MO_4`} />. Metal percentage =
              26.8%.
            </>
          }
          formula={
            <FormulaLine
              tex={String.raw`K_2MO_4=2\times39+A+4\times16=142+A`}
            />
          }
          calculation={
            <FormulaLine
              tex={String.raw`\frac{26.8}{100}(142+A)=A\Rightarrow A\approx52`}
            />
          }
          answer={<InlineMath math={String.raw`52`} />}
        />

        <h3 className="text-xl font-bold text-red-600">
          Experimental Determination of Molecular Mass
        </h3>
        <h4 className="text-lg font-semibold">1. For Gases</h4>
        <p>
          Under low pressure and high temperature conditions, ideal gas equation
          may be used.
        </p>
        <FormulaLine
          tex={String.raw`PV=\frac{w}{M}RT`}
        />
        <h4 className="text-lg font-semibold">
          Graham's Law of Diffusion / Effusion
        </h4>
        <FormulaLine
          tex={String.raw`\frac{r_1}{r_2}=\sqrt{\frac{M_2}{M_1}}`}
        />
        <p>
          This gives more accurate result when the difference in rate of
          diffusion or effusion is very slow.
        </p>
      </section>

      {/* Page 78 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 78</h2>
        <h3 className="text-xl font-bold text-red-600">
          2. For Volatile Solids / Liquids — Victor Meyer Method
        </h3>
        <p>
          In Victor Meyer's method, vapour density is measured with respect to
          air.
        </p>
        <DiagramBlock title="Victor Meyer method apparatus">
          <p>
            A known mass of volatile solid or liquid is vaporised quickly. The
            vapour displaces air present in the tube.
          </p>
          <p>
            The volume of air displaced remains equal to the volume of vapour
            formed at constant pressure and temperature.
          </p>
          <p>
            The diagram shows Victor Meyer tube, hot vapours, copper jacket,
            glass wool, liquid, displaced air, and Hoffmann bottle.
          </p>
        </DiagramBlock>
        <FormulaLine
          tex={String.raw`\text{V.D.}_{\text{solid/liquid}}=\frac{(m_{s/l}/V)}{(m_{\text{air}}/V)}=\frac{d_{s/l}}{d_{\text{air}}}=\frac{M_{s/l}}{M_{\text{air}}}`}
        />
        <FormulaLine
          tex={String.raw`PV_{\text{air displaced}}=\frac{w}{M_{\text{volatile matter}}}RT`}
        />
      </section>

      {/* Page 79 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 79</h2>
        <ExampleCard
          title="Solved Example — Victor Meyer Method"
          question={
            <>
              In Victor Meyer method, 0.4 gm of a volatile solid displaces 200
              ml air measured at 570 torr and 27°C. Calculate the molar mass of
              the solid.
            </>
          }
          given={
            <>
              Mass of volatile solid = 0.4 gm; displaced air volume = 200 ml =
              0.200 L; pressure = 570 torr ={' '}
              <InlineMath math={String.raw`\frac{570}{760}`} /> atm;
              temperature = 300 K.
            </>
          }
          formula={<FormulaLine tex={String.raw`PV=\frac{w}{M}RT`} />}
          calculation={
            <>
              <FormulaLine
                tex={String.raw`\frac{570}{760}\times\frac{200}{1000}=\frac{0.4}{M}\times0.082\times300`}
              />
              <FormulaLine
                tex={String.raw`M=65.6\ \text{gm/mol}`}
              />
            </>
          }
          answer={<InlineMath math={String.raw`65.6\ \text{gm/mol}`} />}
        />

        <h3 className="text-xl font-bold text-red-600">
          3. For Non-Volatile Solids / Liquids
        </h3>
        <h4 className="text-lg font-semibold">
          i. Colligative Properties
        </h4>
        <p>
          This is studied in Class XII chapter: Solutions.
        </p>
        <h4 className="text-lg font-semibold">
          ii. Silver Salt Method — For Organic Acids
        </h4>
        <DiagramBlock title="Silver salt method">
          <p>
            Organic acid <InlineMath math={String.raw`H_nA`} /> is converted
            into its silver salt <InlineMath math={String.raw`Ag_nA`} />. The
            silver salt is ignited in air to leave silver residue.
          </p>
          <FormulaLine
            tex={String.raw`H_nA\rightarrow Ag_nA\xrightarrow{\text{ignited in air}}nAg`}
          />
          <p>
            Basicity of acid = <InlineMath math={String.raw`n`} />.
          </p>
        </DiagramBlock>
      </section>

      {/* Page 80 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 80</h2>
        <h3 className="text-xl font-bold">
          Silver Salt Method Formula
        </h3>
        <div className="rounded-lg border bg-slate-50 p-4">
          <FormulaLine
            tex={String.raw`Ag_nA\rightarrow nAg`}
          />
          <FormulaLine
            tex={String.raw`\text{Mass of silver salt}=n\times108+M_A`}
          />
          <FormulaLine
            tex={String.raw`\text{Mass of silver residue}=108n`}
          />
          <FormulaLine
            tex={String.raw`w_1\ \text{gm silver salt}\rightarrow w_2\ \text{gm silver residue}`}
          />
          <FormulaLine
            tex={String.raw`\frac{108n}{108n+M_A}\times w_1=w_2`}
          />
          <FormulaLine
            tex={String.raw`M_A=108n\cdot\frac{w_1}{w_2}-108n`}
          />
        </div>
        <p>
          Now molecular mass of acid <InlineMath math={String.raw`H_nA`} /> is:
        </p>
        <FormulaLine
          tex={String.raw`M_{H_nA}=n+M_A`}
        />
        <FormulaLine
          tex={String.raw`M_{H_nA}=n\left[108\times\frac{w_{\text{silver salt}}}{w_{\text{silver}}}-107\right]`}
        />

        <h4 className="text-lg font-semibold">
          iii. Chloroplatinate Method — For Organic Bases
        </h4>
        <DiagramBlock title="Chloroplatinate method">
          <p>
            Organic base B is treated with{' '}
            <InlineMath math={String.raw`H_2PtCl_6`} /> to form
            chloroplatinate salt.
          </p>
          <FormulaLine
            tex={String.raw`B+HCl\rightarrow BHCl`}
          />
          <FormulaLine
            tex={String.raw`2B+H_2PtCl_6\rightarrow B_2(H_2PtCl_6)`}
          />
          <p>
            On ignition in air, chloroplatinate salt leaves Pt residue.
          </p>
        </DiagramBlock>
      </section>

      {/* Page 81 */}
      <section className="space-y-5">
        <h2 className="border-b pb-2 text-2xl font-bold">Page 81</h2>
        <h3 className="text-xl font-bold">
          Chloroplatinate Method Formula
        </h3>
        <div className="rounded-lg border bg-slate-50 p-4">
          <FormulaLine
            tex={String.raw`B_2(H_2PtCl_6)_n\rightarrow nPt`}
          />
          <FormulaLine
            tex={String.raw`\text{Mass of chloroplatinate salt}=2M_B+410n`}
          />
          <FormulaLine
            tex={String.raw`\text{Mass of Pt residue}=195n`}
          />
          <FormulaLine
            tex={String.raw`w_1\ \text{gm chloroplatinate salt}\rightarrow w_2\ \text{gm Pt residue}`}
          />
          <FormulaLine
            tex={String.raw`\frac{195n}{2M_B+410n}\times w_1=w_2`}
          />
          <FormulaLine
            tex={String.raw`M_B=\frac{n}{2}\left[195\times\frac{w_1}{w_2}-410\right]`}
          />
        </div>
        <FormulaLine
          tex={String.raw`M_B=\frac{n}{2}\left[195\times\frac{w_{\text{chloroplatinate salt}}}{w_{\text{Pt residue}}}-410\right]`}
        />

        <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-green-900">
          <h3 className="text-xl font-bold">End of Chapter</h3>
          <p>
            Stoichiometry completed in 9 TSX parts: Pages 1–81.
          </p>
        </div>
      </section>
    </main>
  );
}
