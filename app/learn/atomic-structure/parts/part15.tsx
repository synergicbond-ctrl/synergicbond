"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { CircularOrbitVisual } from "../_components/AtomicVisuals";
import { ConceptCard, DerivationPanel, LearningObjectives, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";

export default function Part15() {
  return (
    <AtomicPartShell part={15} title="Bohr Quantisation, Orbit Radius, Speed and Time Period" pages="45-48">
      <LearningObjectives items={["Use Bohr angular-momentum quantisation.", "Derive orbit-radius dependence.", "Calculate orbital speed.", "Relate revolution frequency and period to n and Z."]} />
      <SourcePage page={45}>
        <NoteBlock title="Bohr's postulates (continued)">
          <ol className="list-decimal space-y-3 pl-5" start={3}>
            <li>
              An electron may jump from any orbit to other orbit. Energy is released when it jumps from higher to lower orbit
              and energy is absorbed when it jumps from lower to higher orbit. In such transition only one photon will involve.
            </li>
          </ol>
          <FormulaLine math="\Delta E=h\nu" />
          <ol className="list-decimal space-y-3 pl-5" start={4}>
            <li>
              The angular momentum of e&#8315; revolving around the nucleus must be integral multiple of{" "}
              <MathText math="\tfrac{h}{2\pi}" /> where the integer represent orbit number.
            </li>
          </ol>
          <FormulaLine math="\text{Angular momentum } I\omega=mr^{2}\times\frac{v}{r}=mvr" />
          <FormulaLine math="\boxed{mvr=n\frac{h}{2\pi}}" />
          <FormulaLine math="n=1,2,3\cdots" />
        </NoteBlock>
        <NoteBlock title="Calculation of radius of orbit">
          <p>From Rutherford model</p>
          <FormulaLine math="\frac{mv^{2}}{r}=\frac{KZe^{2}}{r^{2}}" />
          <FormulaLine math="v^{2}=\frac{KZe^{2}}{mr}" />
          <DiagramBox title="Electron in a circular orbit">
            <CircularOrbitVisual />
            <p>
              A circular orbit around the nucleus <MathText math="\oplus" /> with radius <MathText math="r" /> drawn to the
              revolving electron marked <MathText math="m,\ e,\ v" />.
            </p>
          </DiagramBox>
          <p>Bohr Quantisation,</p>
          <FormulaLine math="mvr=\frac{nh}{2\pi}" />
        </NoteBlock>
      </SourcePage>

      <ConceptCard title="Hydrogen-like scaling map"><p>Keep the three derived relations together: <MathText math="r\propto n^2/Z" />, <MathText math="v\propto Z/n" />, and <MathText math="T\propto n^3/Z^2" />. They apply to one-electron species such as H, He<sup>+</sup>, and Li<sup>2+</sup>.</p></ConceptCard>
      <DerivationPanel title="Assumptions before substituting"><p>The relations below assume a non-relativistic electron, a circular Bohr orbit, a nucleus of charge <MathText math="+Ze" />, and a one-electron ion. Equate Coulomb attraction to <MathText math="mv^2/r" />, then combine it with <MathText math="mvr=nh/(2\pi)" />; every algebraic step remains below.</p></DerivationPanel>
      <SourcePage page={46}>
        <NoteBlock title="Radius of the nth orbit">
          <FormulaLine math="v^{2}=\frac{n^{2}h^{2}}{4\pi^{2}m^{2}r^{2}}" />
          <FormulaLine math="\frac{n^{2}h^{2}}{4\pi^{2}m^{2}r^{2}}=\frac{KZe^{2}}{mr}" />
          <FormulaLine math="\boxed{r=\frac{n^{2}h^{2}}{4\pi^{2}mKZe^{2}}}\qquad r\propto\frac{n^{2}}{Z}" />
          <FormulaLine math="\boxed{r_n=0.529\,\frac{n^{2}}{Z}\ \text{\AA}}" />
          <DataTable
            headers={["", "H", <MathText key="he" math="He^{+}" />, <MathText key="li" math="Li^{2+}" />, <MathText key="be" math="Be^{3+}" />]}
            rows={[
              [
                <MathText key="n1" math="n=1" />,
                <MathText key="n1h" math="0.529\times\tfrac{1^{2}}{1}" />,
                <MathText key="n1he" math="0.529\times\tfrac{1^{2}}{2}" />,
                "",
                "",
              ],
              [<MathText key="n2" math="n=2" />, <MathText key="n2h" math="0.529\times\tfrac{2^{2}}{1}" />, "", "", ""],
              [
                <MathText key="n3" math="n=3" />,
                <MathText key="n3h" math="0.529\times\tfrac{3^{2}}{1}" />,
                "",
                "",
                <MathText key="n3be" math="0.529\times\tfrac{3^{2}}{4}" />,
              ],
              [<MathText key="n4" math="n=4" />, <MathText key="n4h" math="0.529\times\tfrac{4^{2}}{1}" />, "", "", ""],
            ]}
          />
          <p>
            If <MathText math="\tfrac{n^{2}}{Z}" /> is same, radius will be same.
          </p>
        </NoteBlock>
        <NoteBlock title="Calculation of speed of electron">
          <FormulaLine math="mvr=\frac{nh}{2\pi}" />
          <FormulaLine math="v=\frac{nh}{2\pi mr}=\frac{nh}{2\pi m\cdot\dfrac{n^{2}h^{2}}{4\pi^{2}mKZe^{2}}}" />
          <p>
            Side note: <MathText math="K=\tfrac{1}{4\pi\varepsilon_0}=9\times10^{9}" /> (MKS) <MathText math="=1" /> (CGS).
          </p>
          <FormulaLine math="\boxed{v=\frac{2\pi Ze^{2}K}{nh}}\qquad v\propto\frac{Z}{n}" />
          <FormulaLine math="\boxed{v=2.188\times10^{6}\times\frac{Z}{n}\ \text{m/s}}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={47}>
        <NoteBlock title="Velocity comparisons and outward force">
          <p>
            If <MathText math="\tfrac{n}{Z}" /> or <MathText math="\tfrac{Z}{n}" /> is same, velocity will be same.
          </p>
          <p>
            ★ In the rotating frame of the electron, the outward (centrifugal) force magnitude — equal in magnitude to the
            centripetal requirement <MathText math="\tfrac{mv^{2}}{r}" /> —
          </p>
          <FormulaLine math="\frac{mv^{2}}{r}\propto\frac{Z^{2}}{n^{2}}\cdot\frac{Z}{n^{2}}\propto\frac{Z^{3}}{n^{4}}" />
        </NoteBlock>
        <NoteBlock title="Problem — speed in the 4th orbit of Li²⁺">
          <p>
            Problem: Find the speed of e&#8315; in 4th orbit <MathText math="Li^{2+}" />.
          </p>
          <FormulaLine math="v=2.188\times10^{6}\times\frac{3}{4}=1.64\times10^{6}\ \text{m/s}" />
        </NoteBlock>
        <NoteBlock title="Problem — speed from an orbit distance of 8.464 Å">
          <p>
            Problem: The distance of e&#8315; from nucleus of H atom is 8.464 Å. Calculate its speed.
          </p>
          <FormulaLine math="8.464=0.529\times\frac{n^{2}}{1}" />
          <FormulaLine math="n^{2}=16,\qquad n=4" />
          <FormulaLine math="v_4=2.188\times10^{6}\times\frac{1}{4}=0.547\times10^{6}\ \text{m/s}" />
        </NoteBlock>
        <NoteBlock title="Problem — electron revolving at 1 Å around the H-nucleus">
          <p>
            Problem: If an electron is revolving around H-nucleus at a distance of 1 Å, what should be speed?
          </p>
          <p>Method 1:</p>
          <FormulaLine math="1=0.529\times\frac{n^{2}}{1}" />
          <FormulaLine math="n=\frac{1}{\sqrt{0.529}}" />
          <FormulaLine math="V=2.188\times10^{6}\times\frac{1}{\ \dfrac{1}{\sqrt{0.529}}\ }=1.591\times10^{6}\ \text{m/s}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={48}>
        <NoteBlock title="Method 2 — force balance">
          <FormulaLine math="\frac{mv^{2}}{r}=K\frac{Ze^{2}}{r^{2}}" />
          <FormulaLine math="v=\sqrt{\frac{KZe^{2}}{mr}}=1.591\times10^{6}\ \text{m/s}" />
        </NoteBlock>
        <NoteBlock title="Frequency of revolution">
          <FormulaLine math="f=\frac{v}{2\pi r}=\frac{2\pi Ze^{2}K}{nh\times2\pi\times\dfrac{n^{2}h^{2}}{4\pi^{2}mKZe^{2}}}" />
          <FormulaLine math="=\frac{4\pi^{2}mK^{2}Z^{2}e^{4}}{n^{3}h^{3}}" />
          <FormulaLine math="f\propto\frac{Z^{2}}{n^{3}}\qquad\boxed{T=\frac{1}{f}}" />
        </NoteBlock>
        <NoteBlock title="Time period of revolution">
          <FormulaLine math="T=\frac{2\pi r}{v}=\frac{n^{3}h^{3}}{4\pi^{2}mK^{2}Z^{2}e^{4}}\qquad T\propto\frac{n^{3}}{Z^{2}}" />
          <FormulaLine math="\boxed{T=1.5\times10^{-16}\,\frac{n^{3}}{Z^{2}}\ \text{s}}" />
          <p>Calculate time period of revolution of e&#8315; in 3rd orbit of H-atom.</p>
          <FormulaLine math="T=1.5\times10^{-16}\times27=4.05\times10^{-15}\ \text{s}" />
          <p>
            Calculate the frequency of revolution in 4th orbit of <MathText math="Be^{3+}" />.
          </p>
          <FormulaLine math="f=\frac{1}{1.5\times10^{-16}}\cdot\frac{Z^{2}}{n^{3}}=\frac{1}{6}\times10^{16}=1.667\times10^{15}\ \text{s}^{-1}" />
        </NoteBlock>
      </SourcePage>

      <PracticeQuestion prompt={<>How does a hydrogen-like orbit radius depend on <MathText math="n" /> and <MathText math="Z" />?</>} answer={<MathText math="r_n=0.529n^2/Z\ \mathrm{\AA}" />} /><SummaryStrip items={["mvr = nh/2π.", "r ∝ n²/Z and v ∝ Z/n.", "T ∝ n³/Z²."]} /><AuditComment pages="45-48" unclear={0} />
    </AtomicPartShell>
  );
}
