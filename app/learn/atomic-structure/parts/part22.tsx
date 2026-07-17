import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { ImportantNote, LearningObjectives, SummaryStrip } from "../_components/AtomicLearning";
import { UncertaintyTradeoffVisual } from "../_components/AtomicVisuals";

export default function Part22() {
  return (
    <AtomicPartShell part={22} title="Wave Packet Energy and Uncertainty Problems" pages="68-70">
      <LearningObjectives items={["derive E = ħω from wave-packet group velocity", "track the convention used in an energy–time uncertainty estimate", "estimate natural spectral widths from state lifetimes"]} />
      <SourcePage page={68}>
        <NoteBlock title="Problem — total energy of a particle is E = ħω">
          <p>
            We know that the group velocity <MathText math="v_g" /> of the wave packet of a particle of mass m is equal to the
            velocity v of the particle. Show that the total energy of the particle is <MathText math="E=\hbar\omega" />, the
            same which holds for photons.
          </p>
          <p className="font-black text-white">Solution</p>
          <p>From the definition of momentum</p>
          <FormulaLine math="\vec{p}=m\vec{v}," />
          <p>
            and the fact that the velocity of the particle <MathText math="\vec{v}=\vec{v}_g" /> and{" "}
            <MathText math="\vec{p}=\hbar\vec{k}" />, we have
          </p>
          <FormulaLine math="m\vec{v}_g=\hbar\vec{k}." />
          <p>Using the definition of the group velocity, which in three dimensions can be written as</p>
          <FormulaLine math="\vec{v}_g=\nabla_k\omega," />
          <p>where</p>
          <FormulaLine math="\nabla_k\omega=\frac{\partial\omega}{\partial k_x}\vec{i}+\frac{\partial\omega}{\partial k_y}\vec{j}+\frac{\partial\omega}{\partial k_z}\vec{k}" />
          <p>
            is the gradient over the components of <MathText math="\vec{k}\ (k_x,\ k_y,\ k_z)" />, we have
          </p>
          <FormulaLine math="m\nabla_k\omega=\hbar\vec{k}." />
          <p>Integrating this equation over k, we obtain</p>
          <FormulaLine math="m\omega=\frac{\hbar}{2}\left(k_x^{2}+k_y^{2}+k_z^{2}\right)+C," />
          <p>where C is a constant.</p>
          <p>Hence, multiplying both sides by <MathText math="\hbar" /> and dividing by m, we obtain</p>
          <FormulaLine math="\hbar\omega=\frac{\hbar^{2}}{2m}k^{2}+A," />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={69}>
        <NoteBlock title="Conclusion — ħω = E">
          <p>where <MathText math="A=\hbar C/m" /> is a constant.</p>
          <p>
            Since <MathText math="\hbar^{2}k^{2}=p^{2}" />, we see that the right-hand side of the above equation is the total
            energy E of the particle. Thus,
          </p>
          <FormulaLine math="\hbar\omega=E," />
          <p>which is the same that holds for photons.</p>
        </NoteBlock>
        <DiagramBox title="Wave-packet width and spectral spread"><UncertaintyTradeoffVisual /><p className="mt-3 text-sm text-slate-300">A packet confined in position requires a wider range of <MathText math="k" /> values. Since <MathText math="p=\hbar k" /> and <MathText math="E=\hbar\omega" />, that spread becomes a momentum or energy spread.</p></DiagramBox>
        <ImportantNote title="Convention used in this derivation">This worked derivation explicitly starts from <MathText math="\Delta x\,\Delta k=2\pi" />, so it obtains <MathText math="\Delta E\,\Delta t=h" />. In the standard-deviation convention, the familiar lower bound is <MathText math="\Delta E\,\Delta t\ge\hbar/2" />; the numerical factor depends on how widths are defined.</ImportantNote>
        <NoteBlock title="Problem — energy–time uncertainty relation">
          <p>
            The time required for a wave packet to move the distance equal to the width of the wave packet is{" "}
            <MathText math="\Delta t=\Delta x/v_g" />, where <MathText math="\Delta x" /> is the width of the wave packet. Show
            that the time <MathText math="\Delta t" /> and the uncertainty in the energy of the particle satisfy the uncertainty
            relation
          </p>
          <FormulaLine math="\Delta E\,\Delta t=h," />
          <p>where <MathText math="\Delta E=\hbar\Delta\omega" />.</p>
          <p className="font-black text-white">Solution</p>
          <p>Since</p>
          <FormulaLine math="\Delta x=v_g\Delta t=\frac{\Delta\omega}{\Delta k}\Delta t," />
          <p>we find that the uncertainty relation</p>
          <FormulaLine math="\Delta x\,\Delta k=2\pi," />
          <p>can be written as</p>
          <FormulaLine math="\Delta x\,\Delta k=\frac{\Delta\omega}{\Delta k}\Delta t\Delta k=\Delta\omega\Delta t=2\pi." />
          <p>Multiplying both sides of the above equation by <MathText math="\hbar" />, we obtain</p>
          <FormulaLine math="\hbar\Delta\omega\Delta t=2\pi\hbar=h." />
          <p>
            Since <MathText math="\Delta E=\hbar\Delta\omega" />, we finally obtain the energy and time uncertainty relation
          </p>
          <FormulaLine math="\Delta E\,\Delta t=h." />
          <p>
            In the above relation, <MathText math="\Delta E" /> is the uncertainty in our knowledge of the energy E of a system
            and <MathText math="\Delta t" /> is the time interval characteristic of the rate of changes in the system&apos;s
            energy.
          </p>
          <p>Problem credit: Zbigniew Ficek.</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={70}>
        <NoteBlock title="Problem — width of a spectral line">
          <p>
            The average lifetime of an excited atomic state is <MathText math="10^{-9}" /> s. If the spectral line associated
            with the decay of this state is 6000 Å, estimate the width of the line.
          </p>
          <p className="font-black text-white">Solution</p>
          <FormulaLine math="\Delta t=10^{-9}\ \text{s},\qquad\lambda=6000\times10^{-10}\ \text{m}=6\times10^{-7}\ \text{m}" />
          <FormulaLine math="E=\frac{hc}{\lambda}\quad\text{or}\quad\Delta E=\frac{hc}{\lambda^{2}}\,\Delta\lambda" />
          <FormulaLine math="\Delta E\cdot\Delta t=\frac{hc}{\lambda^{2}}\,\Delta\lambda\cdot\Delta t\approx\frac{\hbar}{2}=\frac{h}{4\pi}" />
          <FormulaLine math="\Delta\lambda=\frac{\lambda^{2}}{4\pi c\Delta t}=\frac{36\times10^{-14}\ \text{m}^2}{4\pi\,(3\times10^{8}\ \text{m/s})\times(10^{-9}\ \text{s})}=9.5\times10^{-14}\ \text{m}" />
        </NoteBlock>
        <NoteBlock title="Problem — n = 2 state of hydrogen">
          <p>
            An electron in the n = 2 state of hydrogen remains there on the average of about <MathText math="10^{-8}" /> s,
            before making a transition to n = 1 state.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>(i) Estimate the uncertainty in the energy of the n = 2 state.</li>
            <li>(ii) What fraction of the transition energy is this?</li>
            <li>(iii) What is the wavelength and width of this line in the spectrum of hydrogen atom?</li>
          </ul>
          <p className="font-black text-white">Solution. From Eq. (2.4),</p>
          <FormulaLine math="\text{(i)}\ \Delta E\ge\frac{h}{4\pi\Delta t}=\frac{6.626\times10^{-34}\ \text{J s}}{4\pi\times10^{-8}\ \text{s}}=0.527\times10^{-26}\ \text{J}=3.29\times10^{-8}\ \text{eV}" />
          <p>(ii) Energy of n = 2 → n = 1 transition</p>
          <FormulaLine math="=-13.6\ \text{eV}\left(\frac{1}{2^{2}}-\frac{1}{1^{2}}\right)=10.2\ \text{eV}" />
          <FormulaLine math="\text{Fraction }\frac{\Delta E}{E}=\frac{3.29\times10^{-8}\ \text{eV}}{10.2\ \text{eV}}=3.23\times10^{-9}" />
          <FormulaLine math="\text{(iii)}\ \lambda=\frac{hc}{E}=\frac{(6.626\times10^{-34}\ \text{J s})\times(3\times10^{8}\ \text{m/s})}{(10.2\times1.6\times10^{-19}\ \text{J})}=1.218\times10^{-7}\ \text{m}=122\ \text{nm}" />
          <FormulaLine math="\frac{\Delta E}{E}=\frac{\Delta\lambda}{\lambda}\quad\text{or}\quad\Delta\lambda=\frac{\Delta E}{E}\times\lambda" />
          <FormulaLine math="\Delta\lambda=(3.23\times10^{-9})(1.218\times10^{-7}\ \text{m})=3.93\times10^{-16}\ \text{m}=3.93\times10^{-7}\ \text{nm}" />
        </NoteBlock>
        <NoteBlock title="Problem — lifetime of a subatomic particle">
          <p>
            A subatomic particle produced in a nuclear collision is found to have a mass such that{" "}
            <MathText math="Mc^{2}=1228\ \text{MeV}" />, with an uncertainty of ± 56 MeV. Estimate the lifetime of this state.
            Assuming that, when the particle is produced in the collision, it travels with a speed of{" "}
            <MathText math="10^{8}" /> m/s, how far can it travel before it disintegrates?
          </p>
          <p className="font-black text-white">Solution</p>
          <FormulaLine math="\text{Uncertainty in energy }\Delta E=(56\times10^{6}\ \text{eV})(1.6\times10^{-19}\ \text{J/eV})" />
          <FormulaLine math="\Delta t=\frac{\hbar}{2}\frac{1}{\Delta E}=\frac{(1.05\times10^{-34}\ \text{J s})}{2}\,\frac{1}{(56\times1.6\times10^{-13}\ \text{J})}=5.86\times10^{-24}\ \text{s}" />
        </NoteBlock>
      </SourcePage>

      <SummaryStrip items={["The integration constant in ħω is the rest-energy contribution.", "Lifetime limits spectral sharpness: shorter Δt means larger ΔE.", "Use ΔE/E = Δλ/λ only for a small wavelength width."]} />

      <AuditComment pages="68-70" unclear={0} />
    </AtomicPartShell>
  );
}
