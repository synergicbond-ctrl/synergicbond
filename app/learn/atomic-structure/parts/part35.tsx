import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { ConceptCard, DerivationPanel, ImportantNote, LearningObjectives, SummaryStrip } from "../_components/AtomicLearning";
import { CandidateFunctionsVisual, MonochromaticWaveVisual, SineWaveVisual, WavePacketVisual } from "../_components/AtomicVisuals";

export default function Part35() {
  return (
    <AtomicPartShell part={35} title="Schrödinger Wave Equation — Wave Function and Wave Equation" pages="109-112">
      <LearningObjectives items={["interpret ψ, ψ² and ψψ* at the level introduced here", "connect wave vector and angular frequency with p and E", "follow the classical-wave and free-particle derivative steps"]} />
      <SourcePage page={109}>
        <NoteBlock title="Schrödinger Wave Equation">
          <p>
            Wave function (ψ) w.r.t. space has itself no significance while ψ&#178; (in general ψψ*) bears a meaningful
            significance.
          </p>
          <DiagramBox title="Candidate wave-function graphs">
            <CandidateFunctionsVisual />
            <p>
              Six sketched graphs of candidate functions against position, each with dotted vertical reference lines: a
              rising asymptotic curve, a bell-shaped curve, an S-shaped loop, a V-shaped cusp, a sigmoid curve, and an
              upward parabola.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={110}>
        <ConceptCard title="Why a wave packet needs a function">
          <p>A single sinusoid is extended over all space. The function <MathText math="\Psi(x,y,z,t)" /> is introduced here to represent the localised packet and its time evolution.</p>
          <figure className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-4"><WavePacketVisual /><figcaption className="mt-3 text-sm text-slate-300">This is a localisation sketch; it does not replace the stated properties of Ψ below.</figcaption></figure>
        </ConceptCard>
        <NoteBlock title="Schrödinger Wave Equation (boxed heading)">
          <DiagramBox title="Sine wave sketch">
            <SineWaveVisual />
            <p>A sine wave preceding the boxed heading.</p>
          </DiagramBox>
          <p>
            It is proved that wave of material particle is kind of wave packet. To represent wave packet we need a
            mathematical function (Ψ) which depends on position and time.
          </p>
          <FormulaLine math="\Psi(x,y,z,t)" />
          <p>Ψ is:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>⇒ Wave function ⇒ amplitude</li>
            <li>⇒ Ψ must show interference</li>
            <li>⇒ It represents a single particle</li>
            <li>⇒ Ψ should be max where probability is max.</li>
          </ul>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={111}>
        <NoteBlock title="Electromagnetic wave and wave vector">
          <p>
            For EMW, EF and MF change with time and position. If light is coming from x-direction. For monochromatic
            wave
          </p>
          <FormulaLine math="\vec{E}=\vec{E}_0\cos(Kx-\omega t)" />
          <p>(E denotes the electric field, EF)</p>
          <p>direction of propagation — x axis</p>
          <FormulaLine math="\text{wave length }\lambda=\frac{2\pi}{K}\qquad K=\frac{2\pi}{\lambda}\quad K=\text{Propagation constant}" />
          <FormulaLine math="\vec{K}=\frac{2\pi}{\lambda}\hat{e}" />
          <p>
            <MathText math="\hat{e}" /> — direction&apos;s unit vector; <MathText math="\vec{K}" /> — Propagation vector
            or wave vector.
          </p>
          <FormulaLine math="\nu=\frac{\omega}{2\pi},\qquad \omega=2\pi\nu" />
          <DiagramBox title="Monochromatic wave graphs">
            <MonochromaticWaveVisual />
            <p>
              Left: a red sinusoidal E-vs-time trace extending from −∞ to +∞ with period brackets marked along the time
              axis. Right: a blue sine curve labelled Wavelength (between crests), Amplitude (from axis to crest),
              Displacement (vertical double arrow), and Direction of travel (horizontal axis arrow).
            </p>
          </DiagramBox>
          <p>The above graph is only for monochromatic wave or sinusoidal wavelength. For all waves</p>
          <DiagramBox title="Wave packet">
            <WavePacketVisual />
            <p>
              A pink wave packet along x labelled &quot;Oscillation of the electromagnetic field&quot; with a green arrow
              v = c and the wavelength λ marked between adjacent oscillations.
            </p>
          </DiagramBox>
          <FormulaLine math="P=\frac{h}{\lambda}\times\frac{2\pi}{2\pi}=\frac{h}{2\pi}\,\frac{2\pi}{\lambda}=\hbar\,\frac{2\pi}{\lambda}=\hbar K" />
          <FormulaLine math="E=h\nu=\frac{h}{2\pi}\,2\pi\nu=\hbar\omega" />
          <FormulaLine math="\boxed{\frac{\omega}{K}=c}" />
          <p>For EM Radiation,</p>
          <FormulaLine math="\frac{\hbar\omega}{\hbar K}=c,\qquad \frac{E}{p}=c,\qquad E=pc" />
          <p>If wave in x-direction going with fixed speed,</p>
          <FormulaLine math="Y=A\,f(x-vt)" />
          <p>t = constant</p>
          <FormulaLine math="\frac{\partial Y}{\partial x}=A\,\frac{df}{d(x-vt)}\cdot\frac{d(x-vt)}{dx}=A\,f'" />
          <FormulaLine math="\frac{\partial^{2}Y}{\partial x^{2}}=A\,\frac{df'}{d(x-vt)}\cdot\frac{d(x-vt)}{dx}=A\,f''" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={112}>
        <DerivationPanel title="Deriving the classical wave equation">
          <FormulaLine math="Y=A\,f(x-vt)" />
          <p>x = constant</p>
          <FormulaLine math="\frac{\partial Y}{\partial t}=A\,f'\,\frac{d(x-vt)}{dt}=A\,f'(-v)" />
          <FormulaLine math="\frac{\partial^{2}Y}{\partial t^{2}}=A\,f''(-v)(-v)=A\,f''(v)^{2}" />
          <FormulaLine math="\boxed{\frac{\partial^{2}Y}{\partial x^{2}}=\frac{1}{v^{2}}\,\frac{\partial^{2}Y}{\partial t^{2}}}\quad\text{wave equation}" />
          <p>It is applicable to all types of waves, but it is calculated at constant v.</p>
          <p>What we should do if v is changing</p>
        </DerivationPanel>
        <DerivationPanel title="Free particle wave function">
          <p>For a free particle (no force of interaction)</p>
          <FormulaLine math="\psi=A\,e^{i(Kx-\omega t)}\qquad i=\text{imaginary number}" />
          <FormulaLine math="e^{ix}=\cos x+i\sin x" />
          <p>for General wave,</p>
          <FormulaLine math="Y=A\cos(Kx-\omega t)=\text{Real}\;e^{i(Kx-\omega t)}" />
          <p>we solve real part not imaginary part</p>
          <p>For free particle</p>
          <FormulaLine math="\psi=e^{i(Kx-\omega t)}" />
          <FormulaLine math="\psi=A\,e^{i\left(\frac{px}{\hbar}-\frac{Et}{\hbar}\right)}=A\,e^{\frac{i}{\hbar}(px-Et)}" />
          <p>
            Side notes: E ↔ ω, p ↔ K;{" "}
            <MathText math="E=KE=\tfrac{1}{2}mv^{2}=\tfrac{p^{2}}{2m}" />;{" "}
            <MathText math="E=\tfrac{p^{2}}{2m}\ \leftarrow\ \text{classical}" />;{" "}
            <MathText math="\boxed{E=\hbar\omega}\quad\boxed{p=\hbar K}" />
          </p>
          <p>at constant &apos;t&apos;</p>
          <FormulaLine math="\frac{\partial\psi}{\partial x}=A\,e^{\frac{i}{\hbar}(px-Et)}\left(\frac{i}{\hbar}p\right)=\frac{i}{\hbar}\,p\,\psi" />
          <FormulaLine math="p\,\psi=-i\hbar\,\frac{\partial\psi}{\partial x}\qquad p^{2}\psi=-\hbar^{2}\,\frac{\partial^{2}\psi}{\partial x^{2}}" />
          <FormulaLine math="\frac{\partial^{2}\psi}{\partial x^{2}}=A\left(\frac{i}{\hbar}p\right)\left(\frac{i}{\hbar}p\right)e^{\frac{i}{\hbar}(px-Et)}=-A\,\frac{p^{2}}{\hbar^{2}}\,e^{\frac{i}{\hbar}(px-Et)}" />
          <FormulaLine math="\frac{\partial^{2}\psi}{\partial x^{2}}=-\frac{p^{2}}{\hbar^{2}}\,\psi,\qquad p^{2}\psi=-\hbar^{2}\,\frac{\partial^{2}\psi}{\partial x^{2}}" />
        </DerivationPanel>
      </SourcePage>

      <ImportantNote title="Meaning and notation">The chapter&apos;s statement is preserved: ψ itself has no direct significance, while <MathText math="\psi\psi^*" /> is meaningful. The later probability interpretation is developed in subsequent parts.</ImportantNote>
      <SummaryStrip items={["For a monochromatic wave, K = 2π/λ and ω = 2πν.", "The quantum correspondences retained here are p = ħK and E = ħω.", "For a free particle, differentiating ψ produces the momentum-operator relation shown."]} />

      <AuditComment pages="109-112" unclear={0} />
    </AtomicPartShell>
  );
}
