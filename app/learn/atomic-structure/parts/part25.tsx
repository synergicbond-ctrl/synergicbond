import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { ImportantNote, LearningObjectives, SummaryStrip } from "../_components/AtomicLearning";
import { DeBroglieVoltageVisual } from "../_components/AtomicVisuals";

export default function Part25() {
  return (
    <AtomicPartShell part={25} title="Dual Nature and de Broglie Equation" pages="77-80">
      <LearningObjectives items={["derive and apply the de Broglie relation", "compare photon and massive-particle relationships without mixing them", "identify when an electron wavelength needs a relativistic correction"]} />
      <SourcePage page={77}>
        <NoteBlock title="Quantum-mechanical spin angular momentum">
          <p>
            Acc. to quantum mechanics it is <MathText math="\sqrt{s(s+1)}\,\frac{h}{2\pi}" />
          </p>
          <p>s is either spin quantum number or resultant of several spins</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={78}>
        <NoteBlock title="Dual Nature of Electron">
          <p>
            According to deBroglie — like light, material particle also have dual nature of wave as well as particle (wavicle).
          </p>
        </NoteBlock>
        <DiagramBox title="Electron wavelength set by accelerating voltage"><DeBroglieVoltageVisual /><p className="mt-3 text-sm text-slate-300">The curve is generated from the stated non-relativistic relation. It shows why higher accelerating voltage improves electron-beam resolution by reducing <MathText math="\lambda" />.</p></DiagramBox>
        <NoteBlock title="Derivation of de Broglie equation">
          <p>According to Planck&apos;s quantum theory,</p>
          <FormulaLine math="E=h\nu\qquad\cdots\text{(i)}" />
          <p>According to Einstein Equation</p>
          <FormulaLine math="E=mc^{2}\qquad\cdots\text{(ii)}" />
          <p>from eqⁿ (i) and (ii)</p>
          <FormulaLine math="h\nu=mc^{2}\qquad\nu=\frac{c}{\lambda}" />
          <FormulaLine math="\frac{hc}{\lambda}=mc^{2}" />
          <FormulaLine math="\boxed{\lambda=\frac{h}{mc}}" />
          <p>for material particle,</p>
          <FormulaLine math="\boxed{\lambda=\frac{h}{mv}}\qquad\boxed{\lambda=\frac{h}{p}}" />
          <FormulaLine math="KE=\frac{1}{2}mv^{2}=eV" />
          <FormulaLine math="2KE\cdot m=m^{2}v^{2}=2eVm\qquad p^{2}=2KE\cdot m\qquad KE=\frac{p^{2}}{2m}" />
          <FormulaLine math="mv=\sqrt{2KE\cdot m}=\sqrt{2eVm}" />
          <FormulaLine math="\boxed{\lambda=\frac{h}{\sqrt{2KE\cdot m}}=\frac{h}{\sqrt{2eVm}}}" />
          <p>for e&#8315;,</p>
          <FormulaLine math="\lambda=\sqrt{\frac{150}{V}}=\frac{12.24}{\sqrt{V}}\ \text{\AA}" />
        </NoteBlock>
        <ImportantNote title="Scope of the 12.24 rule">The convenient coefficient <MathText math="12.24/\sqrt V" /> gives <MathText math="\lambda" /> in Å for an electron accelerated through <MathText math="V" /> volts, using the non-relativistic kinetic-energy relation.</ImportantNote>
      </SourcePage>

      <SourcePage page={79}>
        <NoteBlock title="Photon versus subatomic particle">
          <DataTable
            headers={["", "Photon", "Subatomic particle"]}
            rows={[
              ["1.", <MathText key="p1" math="E=h\nu" />, <MathText key="s1" math="E=\tfrac{1}{2}mv^{2}" />],
              ["2.", <MathText key="p2" math="\lambda=\tfrac{c}{\nu}" />, <MathText key="s2" math="\lambda=\tfrac{h}{mv}" />],
            ]}
          />
          <p>we should never interchange any of the above</p>
        </NoteBlock>
        <NoteBlock title="de Broglie wavelength in presence of electric field">
          <p>In presence of electric field of force, if the PE is <MathText math="E_p" />, then we have —</p>
          <FormulaLine math="E=E_K+E_p" />
          <FormulaLine math="E_K=E-E_p" />
          <FormulaLine math="\lambda=\frac{h}{p}=\frac{h}{\sqrt{2KEm}}=\frac{h}{\sqrt{2m(E-E_p)}}" />
          <p>
            The concept of matter waves works well in the world of subatomic particle but when applied to the macroscopic world,
            it leads to unconvincing conclusions.
          </p>
        </NoteBlock>
        <NoteBlock title="Relativistic correction in the de Broglie electron wave">
          <p>
            When the PD is made significantly high (~ 50 kV) to have the electron beam of the wavelength of order of 0.05
            Å, the velocity of e&#8315; is very high. Under the circumstances, the approximation <MathText math="m\approx m_0" />{" "}
            is not valid.
          </p>
          <p>The relativistic formula for the KE is given by:</p>
          <FormulaLine math="KE=(m-m_0)c^{2}" />
          <FormulaLine math="eV=(m-m_0)c^{2}" />
        </NoteBlock>
        <ImportantNote title="Why the nuclear-speed result signals a failed approximation">The non-relativistic substitution predicts <MathText math="v\approx10^{12}\ \text{m s}^{-1}" />, greater than c, so it cannot be physically used. Its useful message is that localising a pre-existing electron to nuclear dimensions would require an enormous relativistic momentum and energy; it does not mean β-decay electrons were stored inside nuclei.</ImportantNote>
      </SourcePage>

      <SummaryStrip items={["For a massive particle, λ = h/p; λ = h/mv is non-relativistic shorthand.", "For electrons accelerated through V, λ = 12.24/√V Å is a useful low-voltage rule.", "At high voltage, use relativistic momentum rather than an effective-mass shortcut."]} />

      <SourcePage page={80}>
        <NoteBlock title="Relativistic wavelength">
          <FormulaLine math="m=m_0+\frac{eV}{c^{2}}" />
          <FormulaLine math="=m_0\left(1+\frac{eV}{m_0c^{2}}\right)" />
          <FormulaLine math="\sqrt{m}=\sqrt{m_0}\left(1+\frac{eV}{m_0c^{2}}\right)^{1/2}" />
          <FormulaLine math="\lambda=\frac{h}{\sqrt{2Vem_0}}\left(1+\frac{eV}{m_0c^{2}}\right)^{-1/2}" />
          <FormulaLine math="\boxed{\lambda=\frac{12.24}{\sqrt{V}}\left(1+\frac{eV}{m_0c^{2}}\right)^{-1/2}\ \text{\AA}}" />
          <p>
            Note on precision: the substitution <MathText math="\lambda=h/\sqrt{2eVm}" /> with the relativistic mass is an
            approximation. The exact relativistic momentum is{" "}
            <MathText math="p^{2}=2m_0eV\left(1+\tfrac{eV}{2m_0c^{2}}\right)" />, so the exact correction factor is
          </p>
          <FormulaLine math="\lambda=\frac{12.24}{\sqrt{V}}\left(1+\frac{eV}{2m_0c^{2}}\right)^{-1/2}\ \text{\AA}" />
          <p>
            with a factor <MathText math="\tfrac{1}{2}" /> inside the bracket; the boxed form above overstates the correction
            term by a factor of two, which matters only at very high accelerating potentials.
          </p>
        </NoteBlock>
        <NoteBlock title="Major difference between EMW and de-Broglie matter wave">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              The EMW radiated from its source ultimately dissipates away in space but the matter wave never gets separated in
              space. Thus, though the EMW can be absorbed or emitted, it does not occur so far the matter waves.
            </li>
            <li>
              The EMW consists of transverse vibrations produced from a combination of EF and MF perpendicular to each other,
              but it does not occur so far the matter waves.
            </li>
          </ol>
        </NoteBlock>
        <NoteBlock title="Electron can never exist in the nucleus (de Broglie)">
          <p>From the de Broglie equation prove that e&#8315; can never exist in the nucleus.</p>
          <FormulaLine math="2\pi r=n\lambda=10^{-15}\ \text{m}" />
          <FormulaLine math="\lambda=\frac{h}{mv}\ \Rightarrow\ v=\frac{h}{\lambda\cdot m}=\frac{6.626\times10^{-34}}{10^{-15}\times9.1\times10^{-31}}\approx10^{12}\ \text{m/s}\ =\ \text{not possible}" />
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="77-80" unclear={0} />
    </AtomicPartShell>
  );
}
