"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part32() {
  return (
    <AtomicPartShell part={32} title="Pauli Exclusion, Possible Quantum Sets and Magnetism" pages="100-102">
      <SourcePage page={100}>
        <NoteBlock title="Pauli's Exclusion Principle">
          <p>
            &quot;No two e&#8315; of an atom can have all four quantum numbers equal. If n, l, m are same the s will be
            different.
          </p>
          <FormulaLine math="He=1s^{2}\ \boxed{\uparrow\downarrow}\qquad\text{box notation: }\tfrac{1s}{n\,l}" />
          <DataTable
            headers={["", "First e⁻", "Second e⁻"]}
            rows={[
              ["n", "1", "1"],
              ["l", "0", "0"],
              ["m", "0", "0"],
              ["s", "+½", "−½"],
            ]}
          />
        </NoteBlock>
        <NoteBlock title="Which of the following set of quantum numbers is possible?">
          <p>l is always less than n; n can never be zero; value of m = −l to +l; s = +½, −½</p>
          <DataTable
            headers={["#", "n", "l", "m", "s", "verdict"]}
            rows={[
              ["1", "1", "1", "−1", "+½", "✗"],
              ["2", "1", "0", "0", "+½", "✓"],
              ["3", "2", "0", "0", "−½", "✓"],
              ["4", "4", "2", "−1", "−½", "✓"],
            ]}
          />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={101}>
        <NoteBlock title="Quantum sets (continued)">
          <DataTable
            headers={["#", "n", "l", "m", "s", "verdict"]}
            rows={[
              ["5", "7", "2", "−3", "+½", "✗"],
              ["6", "6", "1", "0", "−½", "✓"],
              ["7", "4", "0", "0", "+½", "✓"],
              ["8", "3", "3", "+3", "+½", "✗"],
              ["9", "0", "1", "−1", "−½", "✗"],
            ]}
          />
        </NoteBlock>
        <NoteBlock title="Counting electrons by quantum conditions">
          <FormulaLine math="n=4:\ 32e^{-}\qquad 4s+4p+4d+4f=2+6+10+14=32" />
          <FormulaLine math="n=4,\ l=2:\ 10e^{-}\ (4d)" />
          <DiagramBox title="4d boxes">
            <p>Five boxes each holding ↑↓.</p>
          </DiagramBox>
          <FormulaLine math="n=4,\ l=2,\ m=-2\ \to\ \text{two }e^{-}" />
          <DiagramBox title="m labels">
            <p>Boxes labelled −2, −1, 0, +1, +2; the −2 box holds the highlighted pair.</p>
          </DiagramBox>
          <FormulaLine math="n=4,\ l=2,\ m=-2,\ s=-\tfrac{1}{2}:\ \text{one }e^{-}" />
          <FormulaLine math="\text{3rd shell: }3s+3p+3d=2+6+10=18e^{-}" />
          <FormulaLine math="\text{4th shell: }4s+4p+4d+4f=2+6+10+14=32e^{-}" />
        </NoteBlock>
        <NoteBlock title="Which of following orbitals are not possible?">
          <p>2d, 4g, 1p, 5f, 6d — with l values 2, 4, 1, 3, 2:</p>
          <FormulaLine math="2d\ ✗\qquad 4g\ ✗\qquad 1p\ ✗\qquad 5f\ ✓\qquad 6d\ ✓" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={102}>
        <NoteBlock title="Paramagnetic and diamagnetic substances">
          <p>
            Paramagnetic Substance — have unpaired e&#8315;. e.g. Na, Al, Fe, Cu, Fe&#178;&#8314;, Fe&#179;&#8314;,
            Cu&#178;&#8314; etc.
          </p>
          <p>
            Diamagnetic Substance — no unpaired e&#8315;. e.g. Mg, Cu&#8314;, Zn&#178;&#8314;, Na&#8314;, N&#179;&#8315; etc.
          </p>
        </NoteBlock>
        <NoteBlock title="Find n (n = no. of unpaired e⁻)">
          <FormulaLine math="Fe^{2+}=[Ar]\,3d^{6}\quad(\uparrow\downarrow\,\uparrow\,\uparrow\,\uparrow\,\uparrow)" />
          <FormulaLine math="Cr^{+}=[Ar]\,3d^{5}\quad(\uparrow\,\uparrow\,\uparrow\,\uparrow\,\uparrow)" />
          <FormulaLine math="Mn^{2+}=[Ar]\,3d^{5}\quad(\uparrow\,\uparrow\,\uparrow\,\uparrow\,\uparrow)" />
          <FormulaLine math="Co^{3+}=[Ar]\,3d^{6}\quad(\uparrow\downarrow\,\uparrow\,\uparrow\,\uparrow\,\uparrow)" />
          <FormulaLine math="Fe^{3+}=[Ar]\,3d^{5}\quad(\uparrow\,\uparrow\,\uparrow\,\uparrow\,\uparrow)" />
        </NoteBlock>
        <NoteBlock title="Magnetic Moment (μ)">
          <p>
            It is a measure of the object&apos;s tendency to align with magnetic field. It is defined as magnetic strength and
            orientation of a magnet or other object that produces magnetic field.
          </p>
          <DiagramBox title="Spin and orbital moments">
            <p>
              A sphere with arrows labelled <MathText math="\mu_{spin}" /> and <MathText math="\mu\text{-orbital}" />.
            </p>
          </DiagramBox>
          <FormulaLine math="\boxed{\mu=\sqrt{n(n+2)}\ \text{BM}}" />
          <p>BM = Bohr Magneton</p>
          <FormulaLine math="BM=\frac{e\hbar}{2m_e}=9.27\times10^{-24}\ \text{A m}^2" />
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="100-102" unclear={0} />
    </AtomicPartShell>
  );
}
