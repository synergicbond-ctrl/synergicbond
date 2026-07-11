"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { SommerfeldOrbitsVisual } from "../_components/AtomicVisuals";

export default function Part24() {
  return (
    <AtomicPartShell part={24} title="Sommerfeld Extension and Spin Doublets" pages="74-76">
      <SourcePage page={74}>
        <NoteBlock title="Sommerfeld Extension of Bohr Model">
          <p>
            Electrons revolve around the nucleus on elliptical paths. A circular path is one of the cases, when the lengths of
            the major axis and minor axis become equal.
          </p>
          <DiagramBox title="Ellipse with axes">
            <p>An ellipse with its minor axis (vertical) and major axis (horizontal) labelled.</p>
          </DiagramBox>
          <p>Sommerfeld explained splitting of sharp spectral lines by assuming some orbits elliptical.</p>
          <p>for n = 1 it is circular</p>
          <p>for rest it is circular and elliptical both</p>
          <p>The shape of the ellipse is defined by ratio of the lengths of the major and minor axis.</p>
          <FormulaLine math="\frac{\text{major axis}}{\text{minor axis}}=\frac{n}{K}" />
          <p>K is called the azimuthal or subsidiary or secondary quantum number.</p>
          <DiagramBox title="n = 3 orbits">
            <SommerfeldOrbitsVisual />
            <p>Three nested paths about the nucleus dot — one circle and two ellipses of different widths, labelled n = 3.</p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={75}>
        <NoteBlock title="n/K values and the new quantum number l">
          <FormulaLine math="n=2\qquad\frac{n}{K}=\frac{2}{2}\ \text{(circle)}\quad\frac{2}{1}\ \text{(ellipse)}" />
          <FormulaLine math="n=3\qquad\frac{n}{K}=\frac{3}{3}\ \text{(circle)}\quad\frac{3}{2}\ \text{(ellipse)}\quad\frac{3}{1}\ \text{(narrower ellipse)}" />
          <p>
            The original quantum number K has now been replaced by a new quantum number &apos;l&apos;.
          </p>
          <FormulaLine math="l=K-1" />
          <FormulaLine math="l=0\ \text{to}\ (n-1)" />
          <FormulaLine math="n=1\quad l=0" />
          <FormulaLine math="n=2\quad l=0,1" />
          <FormulaLine math="n=3\quad l=0,1,2" />
          <FormulaLine math="n=4\quad l=0,1,2,3" />
          <p>The type of orbit in any orbit is known as a suborbit or subshell.</p>
          <p>The number of subshells in any orbit is equal to the orbit number.</p>
          <p>The energies of the subshells of any orbit will be nearly equal (only a slight difference).</p>
          <p>
            With the help of the Sommerfeld extension we may explain the difference in thickness and splitting of spectral
            lines.
          </p>
          <p>In the presence of an external field, the increase in energy of the orbits is different.</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={76}>
        <NoteBlock title="Splitting of lines and electron spin">
          <p>
            Thus <MathText math="\Delta E" /> is different <MathText math="\Rightarrow\ \lambda" /> is different{" "}
            <MathText math="\to\ \theta" /> is different (splitting of lines)
          </p>
          <DiagramBox title="Split levels">
            <p>
              Levels 1, 2 and 3 drawn as horizontal bands: level 1 a single line; levels 2 and 3 shown as closely spaced
              sub-levels (shaded bands between split lines), level 3 with a slanting sub-level inside.
            </p>
          </DiagramBox>
          <p>
            In addition, some spectral lines are split still further into two lines (doublets). This is explained by assuming
            that an e&#8315; spins on its axis in either a clockwise or anticlockwise direction. Energy is quantized and the
            value of the spin angular momentum was first considered to be <MathText math="m_s\cdot\frac{h}{2\pi}" /> where{" "}
            <MathText math="m_s" /> is the spin quantum number.
          </p>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="74-76" unclear={0} />
    </AtomicPartShell>
  );
}
