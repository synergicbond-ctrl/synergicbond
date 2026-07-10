"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part16() {
  return (
    <AtomicPartShell part={16} title="Energy of the Electron and Level Differences" pages="49-51">
      <SourcePage page={49}>
        <NoteBlock title="Problem — angular momentum in the 5th orbit">
          <p>Calculate the angular momentum of e&#8315; the 5th orbit of H-atom.</p>
          <FormulaLine math="mvr=n\frac{h}{2\pi}=\frac{5h}{2\pi}" />
        </NoteBlock>
        <NoteBlock title="MCQ — angular momentum versus radius">
          <p>For hydrogen atom the angular momentum of e&#8315; is directly proportional to</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>(a) <MathText math="r" /></li>
            <li>(b) <MathText math="\tfrac{1}{r}" /></li>
            <li>(c) <MathText math="\sqrt{r}" /> ✓</li>
            <li>(d) <MathText math="\tfrac{1}{\sqrt{r}}" /></li>
          </ul>
          <FormulaLine math="mvr=\frac{nh}{2\pi}" />
          <FormulaLine math="r\propto n^{2}\qquad n\propto\sqrt{r}" />
          <p>angular momentum <MathText math="\propto\sqrt{r}" /></p>
        </NoteBlock>
        <NoteBlock title="Calculation of energy of e⁻">
          <DiagramBox title="Orbit for the energy calculation">
            <p>
              Circular orbit around the nucleus <MathText math="\oplus" /> with radius <MathText math="r" /> to the electron.
            </p>
          </DiagramBox>
          <p>Total energy = P.E + K.E.</p>
          <FormulaLine math="P.E.=\int F\cdot dr=\int\frac{KZe^{2}}{r^{2}}\,dr=-\frac{KZe^{2}}{r}" />
          <FormulaLine math="K.E.=\frac{1}{2}mv^{2}" />
          <FormulaLine math="\frac{mv^{2}}{r}=\frac{KZe^{2}}{r^{2}}" />
          <FormulaLine math="K.E.=\frac{1}{2}mv^{2}=\frac{1}{2}\,\frac{KZe^{2}}{r}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={50}>
        <NoteBlock title="Total energy of the electron">
          <FormulaLine math="T.E.=-\frac{KZe^{2}}{r}+\frac{1}{2}\,\frac{KZe^{2}}{r}" />
          <FormulaLine math="\boxed{T.E.=-\frac{1}{2}\,\frac{KZe^{2}}{r}}" />
          <FormulaLine math="\boxed{TE=-KE=\frac{PE}{2}}" />
          <FormulaLine math="E_n=-\frac{1}{2}KZe^{2}\cdot\frac{4\pi^{2}mKZe^{2}}{n^{2}h^{2}}=\frac{-2\pi^{2}mK^{2}Z^{2}e^{4}}{n^{2}h^{2}}\qquad E\propto\frac{Z^{2}}{n^{2}}" />
          <FormulaLine math="\boxed{E_n=-13.6\,\frac{Z^{2}}{n^{2}}\ \text{eV/atom}=-2.18\times10^{-18}\times\frac{Z^{2}}{n^{2}}\ \text{J/atom}=-1312\,\frac{Z^{2}}{n^{2}}\ \text{kJ/mol}=-316\,\frac{Z^{2}}{n^{2}}\ \text{kcal/mol}}" />
        </NoteBlock>
        <NoteBlock title="For hydrogen">
          <FormulaLine math="E_1=-13.6\ \text{eV}" />
          <FormulaLine math="E_2=-13.6\times\frac{1}{4}=-3.4" />
          <FormulaLine math="E_3=-13.6\times\frac{1}{9}=-1.51\ \text{eV}" />
          <FormulaLine math="E_4=-13.6\times\frac{1}{16}=-0.85\ \text{eV}" />
          <FormulaLine math="E_2-E_1=10.2\ \text{eV}\qquad E_4-E_3=0.66\ \text{eV}" />
          <FormulaLine math="E_3-E_2=1.89\ \text{eV}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={51}>
        <NoteBlock title="Energy table (to fill)">
          <DataTable
            headers={["", "H", <MathText key="he" math="He^{+}" />, <MathText key="li" math="Li^{2+}" />, <MathText key="be" math="Be^{3+}" />]}
            rows={[
              [<MathText key="n1" math="n=1" />, "", "", "", ""],
              [<MathText key="n2" math="n=2" />, "", "", "", ""],
              [<MathText key="n3" math="n=3" />, "", "", "", ""],
              [<MathText key="n4" math="n=4" />, "", "", "", ""],
            ]}
          />
          <p>The blank grid is left in the source for filling energies of H, He⁺, Li²⁺ and Be³⁺ at n = 1 to 4.</p>
        </NoteBlock>
        <NoteBlock title="Energy difference between two levels">
          <FormulaLine math="n_1:\quad E_1=-13.6\,\frac{Z^{2}}{n_1^{2}}\ \text{eV}" />
          <FormulaLine math="n_2:\quad E_2=-13.6\,\frac{Z^{2}}{n_2^{2}}\ \text{eV}" />
          <FormulaLine math="\boxed{|\Delta E|=E_2-E_1=13.6\,Z^{2}\left(\frac{1}{n_1^{2}}-\frac{1}{n_2^{2}}\right)\ \text{eV}}" />
        </NoteBlock>
        <NoteBlock title="Problem — absorption in Li²⁺ from n = 1 to n = 3">
          <p>
            Calculate amount energy absorbed in transition of e&#8315; from n = 1 to n = 3 in <MathText math="Li^{2+}" /> ion
          </p>
          <FormulaLine math="\Delta E=13.6\times9\left(\frac{1}{1^{2}}-\frac{1}{3^{2}}\right)=13.6\times9\times\frac{8}{9}=13.6\times8\ \text{eV}" />
        </NoteBlock>
        <NoteBlock title="Excitation energy">
          <ul className="list-disc space-y-2 pl-5">
            <li>n = 1 — Ground state</li>
            <li>n = 2 — First excited state</li>
            <li>n = 3 — Second excited state</li>
          </ul>
          <p>Calculate energy of e&#8315; in H atom in 3rd excited state</p>
          <FormulaLine math="E_n=-13.6\times\frac{1^{2}}{16}\ \text{eV}" />
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="49-51" unclear={0} />
    </AtomicPartShell>
  );
}
