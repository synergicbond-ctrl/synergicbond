"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part20() {
  return (
    <AtomicPartShell part={20} title="Visible Lines, Line Counting and Bohr Model Limits" pages="61-64">
      <SourcePage page={61}>
        <NoteBlock title="Four lines of visible region">
          <FormulaLine math="n=2\ \leftarrow\ n=3\quad656\ \text{nm}\quad\text{Red}" />
          <FormulaLine math="n=2\ \leftarrow\ n=4\quad486\ \text{nm}\quad\text{blue-Green}" />
          <FormulaLine math="n=2\ \leftarrow\ n=5\quad434\ \text{nm}\quad\text{Blue}" />
          <FormulaLine math="n=2\ \leftarrow\ n=6\quad410\ \text{nm}\quad\text{Violet}" />
          <p>A solid highlight band follows in the source with no legible text. [UNCLEAR]</p>
        </NoteBlock>
        <NoteBlock title="e.g. — atoms in the 5th energy state">
          <p>Single hydrogen atom in 5th energy state</p>
          <DiagramBox title="One atom, stepwise fall">
            <p>Levels 5→1 with single cascade arrows.</p>
          </DiagramBox>
          <FormulaLine math="\text{Total lines}=4\qquad 5\to4,\ 4\to3,\ 3\to2,\ 2\to1" />
          <p>two hydrogen atom in 5th energy state</p>
          <DiagramBox title="Two atoms">
            <p>Levels 5→1 with two cascades marked.</p>
          </DiagramBox>
          <FormulaLine math="\text{Total lines}=6\qquad 5\to4,\ 4\to3,\ 3\to2,\ 2\to1,\ 5\to3,\ 3\to1" />
          <p>three hydrogen atom in 5th energy state</p>
          <DiagramBox title="Three atoms">
            <p>Levels 5→1 with three cascades marked.</p>
          </DiagramBox>
          <FormulaLine math="\text{Total lines}=7" />
          <FormulaLine math="\text{four H atoms in 5th energy level}\quad\text{Total lines}=8" />
          <FormulaLine math="\text{five H atoms in 5th energy level}\quad\text{Total lines}=9" />
          <FormulaLine math="\text{Six or more H atoms in 5th energy level}\quad\text{Total lines}=10" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={62}>
        <NoteBlock title="Printed example — 7 → 1 in multi steps">
          <p>
            In a hydrogen spectrum if electron moves from 7 to 1 orbit by transition in multi steps then find out the total
            number of lines in the spectrum.
          </p>
          <FormulaLine math="\text{Lyman}=(n_2-1)=7-1=6" />
          <FormulaLine math="\text{Balmer}=(n_2-2)=7-2=5" />
          <FormulaLine math="\text{Paschen}=(n_2-3)=7-3=4" />
          <FormulaLine math="\text{Bracket}=(n_2-4)=7-4=3" />
          <FormulaLine math="\text{Pfund}=(n_2-5)=7-5=2" />
          <FormulaLine math="\text{Humphrey}=(n_2-6)=7-6=1" />
          <FormulaLine math="\text{Total}=21" />
        </NoteBlock>
        <NoteBlock title="Question — He⁺ absorbs x Å and emits 15 wavelengths">
          <p>
            Q. A sample of He&#8314; ion in ground state absorbs EMR of x Å. Subsequently the sample emit radiations of 15
            different wavelength. What is value of x?
          </p>
          <FormulaLine math="\frac{n(n-1)}{2}=15,\qquad n=6" />
          <FormulaLine math="\frac{1}{\lambda}=R\cdot2^{2}\cdot\left(\frac{1}{1^{2}}-\frac{1}{6^{2}}\right)" />
          <FormulaLine math="\frac{1}{\lambda}=\frac{35}{9}R" />
          <FormulaLine math="\lambda=x=\frac{9}{35}\times912=234.5\ \text{\AA}" />
        </NoteBlock>
        <NoteBlock title="Limitations of Bohr Model">
          <ol className="list-decimal space-y-3 pl-5">
            <li>It is applicable only to unielectron species.</li>
            <li>Atom is spherical (3D) but the path of e&#8315; is circular (2D)</li>
            <li>It does not explain the different thickness of spectral line.</li>
            <li>
              It does not explain the splitting of spectral lines in electric field (Stark effect) and magnetic effect
              (Zeeman&apos;s effect)
            </li>
          </ol>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={63}>
        <NoteBlock title="Limitations (continued)">
          <ol className="list-decimal space-y-3 pl-5" start={5}>
            <li>Heisenberg&apos;s uncertainity principle</li>
            <li>
              de Broglie suggested that e&#8315; like light have dual character (wave and particle), but Bohr treated the
              e&#8315; like particle.
            </li>
          </ol>
        </NoteBlock>
        <NoteBlock title="Printed problem — quantized Bohr radii">
          <p>
            Show that in the Bohr atom model, the electron&apos;s orbits in a hydrogen-like atom are quantized with the radius{" "}
            <MathText math="r=n^{2}a_0/Z" />, where <MathText math="a_0=4\pi\varepsilon_0\hbar^{2}/me^{2}" /> is the Bohr
            radius, <MathText math="n=1,2,\ldots" />, and Z is atomic number. <MathText math="Z=1" /> refers to a hydrogen
            atom, <MathText math="Z=2" /> to a helium (He&#8314;) ion, and so on.
          </p>
          <p className="font-black text-white">Solution</p>
          <p>
            From the classical equation of motion for the electron in a hydrogen-like atom (Coulomb force = centripetal force)
          </p>
          <FormulaLine math="\frac{Ze^{2}}{4\pi\varepsilon_0 r^{2}}=m\frac{v^{2}}{r}," />
          <p>we find the velocity of the electron</p>
          <FormulaLine math="v=\sqrt{\frac{Ze^{2}}{4\pi\varepsilon_0 mr}}." />
          <p>Bohr postulated that the angular momentum of the electron is quantized with</p>
          <FormulaLine math="L=n\hbar,\qquad n=1,2,3,\ldots\qquad\left(\hbar=\frac{h}{2\pi}\right)." />
          <p>Since</p>
          <FormulaLine math="L=mvr=\sqrt{\frac{Zme^{2}r}{4\pi\varepsilon_0}}," />
          <p>we obtain</p>
          <FormulaLine math="\frac{Zme^{2}r}{4\pi\varepsilon_0}=n^{2}\hbar^{2}," />
          <p>from which we find</p>
          <FormulaLine math="r=n^{2}\frac{a_0}{Z},\qquad\text{where}\qquad a_0=\frac{4\pi\varepsilon_0\hbar^{2}}{me^{2}}." />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={64}>
        <NoteBlock title="Printed problem — quantized magnetic dipole moment">
          <p>
            The magnetic dipole moment <MathText math="\vec{\mu}" /> of a current loop is defined by{" "}
            <MathText math="\vec{\mu}=I\vec{S}" />, where I is the current and <MathText math="\vec{S}=S\hat{n}" /> is the area
            of the loop, with <MathText math="\hat{n}" />, the unit vector, normal to the plane of the loop. A current loop may
            be represented by a charge e rotating at constant speed in a circular orbit. Use the classical model of the orbital
            motion of the electron and Bohr&apos;s quantization postulate to show that the magnetic dipole moment of the loop is
            quantized such that
          </p>
          <FormulaLine math="\mu=n\,m_B,\qquad n=1,2,3,\ldots," />
          <p>
            where <MathText math="m_B=e\hbar/2m" /> is the Bohr magneton, and m is the mass of the electron.
          </p>
          <p className="font-black text-white">Solution</p>
          <p>
            Denote the radius of the electron&apos;s orbit by r and the linear velocity of the electron by{" "}
            <MathText math="v=\omega r" />, where <MathText math="\omega" /> is the angular velocity. Then the period of
            revolution is
          </p>
          <FormulaLine math="T=\frac{2\pi}{\omega}=\frac{2\pi r}{v}." />
          <p>Hence, the current induced by the revolting electron is</p>
          <FormulaLine math="I=\frac{e}{T}=\frac{ev}{2\pi r}." />
          <p>
            We know from electromagnetism that current produces a magnetic field and a current loop closing some area creates a
            magnetic moment. The magnetic moment is equal to the product of the area of the plane loop and the magnitude of the
            circulating current:
          </p>
          <FormulaLine math="\vec{\mu}=I\vec{S}=IS\hat{n}," />
          <p>
            where <MathText math="S=\pi r^{2}" /> is the area closed by the loop (the orbit of the revolting electron),{" "}
            <MathText math="\hat{n}" /> is the unit vector perpendicular to the plane of the loop and oriented along the
            direction set by the right-hand rule.
          </p>
          <p>Thus</p>
          <FormulaLine math="\vec{\mu}=\frac{ev}{2\pi r}\,\pi r^{2}\hat{n}=\frac{1}{2}evr\hat{n}." />
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="61-64" unclear={1} note="page 61 has a highlight band with no legible text" />
    </AtomicPartShell>
  );
}
