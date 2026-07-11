"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part17() {
  return (
    <AtomicPartShell part={17} title="Ionisation Energy, Binding Energy and Rydberg's Equation" pages="52-54">
      <SourcePage page={52}>
        <NoteBlock title="Ionisation energy">
          <p>
            It is defined as the amount of energy required to remove the outer-shell e&#8315; from an isolated{" "}
            <span className="rounded bg-rose-500/30 px-1 font-semibold">gaseous atom</span>.
          </p>
          <FormulaLine math="H\longrightarrow H^{+}+e^{-}\quad I.E." />
          <FormulaLine math="A\longrightarrow A^{+}+e^{-}\quad IE_1" />
          <FormulaLine math="A^{+}\longrightarrow A^{2+}+e^{-}\quad IE_2" />
          <FormulaLine math="A^{2+}\longrightarrow A^{3+}+e^{-}\quad IE_3" />
          <FormulaLine math="A^{3+}\longrightarrow A^{4+}+e^{-}\quad IE_4" />
          <FormulaLine math="IE_4>IE_3>IE_2>IE_1" />
          <p>We can calculate following IE from Bohr model</p>
          <DataTable
            headers={["H", "He", <MathText key="hep" math="He^{+}" />, <MathText key="lip" math="Li^{+}" />, <MathText key="li2" math="Li^{2+}" />, <MathText key="be3" math="Be^{3+}" />, <MathText key="b4" math="B^{4+}" />, <MathText key="c5" math="C^{5+}" />]}
            rows={[
              [
                <MathText key="ie1" math="IE_1" />,
                "✗",
                <MathText key="ie2" math="IE_2" />,
                "✗",
                <MathText key="ie3" math="IE_3" />,
                <MathText key="ie4" math="IE_4" />,
                <MathText key="ie5" math="IE_5" />,
                <MathText key="ie6" math="IE_6\ \cdots" />,
              ],
            ]}
          />
          <FormulaLine math="{}^{H}IE_1=13.6\times1^{2}" />
          <FormulaLine math="{}^{He}IE_2=13.6\times2^{2}" />
          <FormulaLine math="{}^{Li}IE_3=13.6\times3^{2}" />
          <FormulaLine math="{}^{Be}IE_4=13.6\times4^{2}" />
          <FormulaLine math="\boxed{I.E=13.6\ Z^{2}\ \text{eV}}" />
        </NoteBlock>
        <NoteBlock title="Binding energy of e⁻">
          <DiagramBox title="Electron removed to infinity">
            <p>
              The nucleus <MathText math="\oplus" /> with a circular orbit; an arrow carries the electron e away to{" "}
              <MathText math="\infty" />.
            </p>
          </DiagramBox>
          <FormulaLine math="\boxed{B.E.=13.6\ Z^{2}\ \text{eV}}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={53}>
        <NoteBlock title="Rydberg's Equation">
          <FormulaLine math="\Delta E=E_{n_2}-E_{n_1}" />
          <FormulaLine math="\frac{hc}{\lambda}=\frac{2\pi^{2}mK^{2}Z^{2}e^{4}}{h^{2}}\left(\frac{1}{n_1^{2}}-\frac{1}{n_2^{2}}\right)" />
          <FormulaLine math="\frac{1}{\lambda}=\frac{2\pi^{2}mK^{2}Z^{2}e^{4}}{ch^{3}}\left(\frac{1}{n_1^{2}}-\frac{1}{n_2^{2}}\right)" />
          <FormulaLine math="\boxed{\frac{1}{\lambda}=RZ^{2}\left(\frac{1}{n_1^{2}}-\frac{1}{n_2^{2}}\right)}" />
          <FormulaLine math="R=\text{Rydberg's constant}=\frac{2\pi^{2}mK^{2}e^{4}}{ch^{3}}=109678\ \text{cm}^{-1}=1.097\times10^{7}\ \text{m}^{-1}" />
          <FormulaLine math="\boxed{\frac{1}{R}=912\ \text{\AA}}" />
          <FormulaLine math="\boxed{\nu=\frac{c}{\lambda}=RcZ^{2}\left(\frac{1}{n_1^{2}}-\frac{1}{n_2^{2}}\right)}" />
        </NoteBlock>
        <NoteBlock title="Question — excite He⁺ from the 2nd to the 4th shell">
          <p>Q. Calculate frequency of EMR needed to excite e&#8315; of He&#8314; from 2nd to 4th shell.</p>
          <FormulaLine math="\nu=3\times10^{8}\times1.09\times10^{7}\times2^{2}\left(\frac{1}{2^{2}}-\frac{1}{4^{2}}\right)" />
        </NoteBlock>
        <NoteBlock title="Question — maximum energy released (set A)">
          <p>Q. In which of following transition in H-atom, the amount of energy released will be maximum?</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>A. (i) 2 → 1 ✓</li>
            <li>(ii) 5 → 4</li>
            <li>(iii) 4 → 3</li>
            <li>(iv) 8 → 7</li>
          </ul>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={54}>
        <NoteBlock title="Transition sets B and C">
          <ul className="list-disc space-y-2 pl-5">
            <li>B. (i) 3 → 2, (ii) 4 → 2, (iii) 5 → 2, (iv) 6 → 2 ✓</li>
            <li>C. (i) 2 → 1 ✓, (ii) ∞ → 2, (iii) ∞ → 5, (iv) 7 → 5</li>
          </ul>
          <DiagramBox title="Hydrogen level gaps">
            <p>
              Energy levels 1, 2 and <MathText math="\infty" /> drawn as horizontal lines: 3.4 eV separates level 2 from{" "}
              <MathText math="\infty" />, and 10.2 eV separates level 1 from level 2.
            </p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Shortest wavelength and longest wavelength">
          <FormulaLine math="E\propto\frac{1}{\lambda}" />
          <p>
            <MathText math="\lambda=\text{min}" />: <MathText math="E=\text{max}" />, <MathText math="n_2=\infty" />.{" "}
            <MathText math="\lambda=\text{max}" />: <MathText math="E=\text{min}" />, <MathText math="n_2=n_1+1" />.
          </p>
          <p>
            If e&#8315; in H atom is in ground state, calculate its shortest wavelength and longest wavelength
          </p>
          <FormulaLine math="\frac{1}{\lambda}=RZ^{2}\left(\frac{1}{n_1^{2}}-\frac{1}{n_2^{2}}\right)" />
          <p>
            <MathText math="\lambda_{max}" />:
          </p>
          <FormulaLine math="\frac{1}{\lambda}=R\left(\frac{1}{1^{2}}-\frac{1}{2^{2}}\right)" />
          <FormulaLine math="\lambda=\frac{4}{3R}=\frac{4}{3}\times912=1216\ \text{\AA}" />
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="52-54" unclear={0} />
    </AtomicPartShell>
  );
}
