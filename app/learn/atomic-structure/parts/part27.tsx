import { AtomicPartShell, AuditComment, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { DerivationPanel, DefinitionCard, LearningObjectives, SummaryStrip, WorkedExample } from "../_components/AtomicLearning";

export default function Part27() {
  return (
    <AtomicPartShell part={27} title="Uncertainty Variants and Quantum Numbers" pages="84-86">
      <LearningObjectives items={[
        "derive the energy–time (ΔE·Δt) and angular-momentum–angle (ΔL·Δθ) uncertainty variants",
        "prove Δx·Δλ ≥ λ²/4π from the de Broglie momentum–wavelength relationship",
        "solve numerical uncertainty problems and name what each of the four quantum numbers describes",
      ]} />

      <SourcePage page={84}>
        <NoteBlock title="The trade-off: larger Δx means smaller Δp">
          <p>If <MathText math="\Delta x" /> is greater, <MathText math="\Delta p" /> is smaller, and vice versa — the product <MathText math="\Delta x\cdot\Delta p \ge h/4\pi" /> is bounded below.</p>
        </NoteBlock>

        <DerivationPanel title="Energy–time uncertainty: ΔE·Δt ≥ h/4π">
          <p>Start from the kinetic–energy and momentum relation:</p>
          <FormulaLine math="E = \frac{p^2}{2m}\qquad p = \sqrt{2Em}" />
          <p>Newton&apos;s second law gives <MathText math="F = \Delta p/\Delta t" />, so <MathText math="F\cdot\Delta t = \Delta p" />. Then:</p>
          <FormulaLine math="\left(\frac{\Delta x}{\Delta t}\cdot F\cdot\Delta t\right)\Delta t \ge \frac{h}{4\pi}" />
          <FormulaLine math="\boxed{\Delta E\cdot\Delta t \ge \frac{h}{4\pi}}" />
          <p>By the same reasoning, for angular momentum <MathText math="L" /> and angular position <MathText math="\theta" />:</p>
          <FormulaLine math="\boxed{\Delta L\cdot\Delta\theta \ge \frac{h}{4\pi}}" />
        </DerivationPanel>

        <DerivationPanel title="Wavelength uncertainty: Δx·Δλ ≥ λ²/4π">
          <p>From the de Broglie relation <MathText math="p = h/\lambda" />, differentiate with respect to <MathText math="\lambda" />:</p>
          <FormulaLine math="\left|\frac{dp}{d\lambda}\right| = \frac{h}{\lambda^2}" />
          <p>A spread in wavelength therefore produces a spread in momentum:</p>
          <FormulaLine math="dp = \frac{h}{\lambda^2}\,d\lambda\qquad\Delta p = \frac{h}{\lambda^2}\,\Delta\lambda" />
          <p>Substitute into <MathText math="\Delta x\cdot\Delta p \ge h/4\pi" />:</p>
          <FormulaLine math="\Delta x\cdot\frac{h}{\lambda^2}\,\Delta\lambda \ge \frac{h}{4\pi}" />
          <FormulaLine math="\boxed{\Delta x\cdot\Delta\lambda \ge \frac{\lambda^2}{4\pi}}" />
        </DerivationPanel>
      </SourcePage>

      <SourcePage page={85}>
        <WorkedExample title="Equal position and momentum uncertainties — find Δv">
          <p>Q. If the uncertainty in position equals the uncertainty in momentum, find the uncertainty in velocity.</p>
          <FormulaLine math="\Delta x\cdot\Delta p \ge \frac{h}{4\pi}\qquad\Delta x = \Delta p" />
          <FormulaLine math="(\Delta p)^2 \ge \frac{h}{4\pi}" />
          <FormulaLine math="(m\,\Delta v)^2 \ge \frac{h}{4\pi}" />
          <FormulaLine math="\Delta v \ge \frac{1}{2m}\sqrt{\frac{h}{\pi}}" />
        </WorkedExample>

        <WorkedExample title="Electron at 600 m/s — minimum position uncertainty">
          <p>
            Q. An electron in an atom moves at 600 m/s with an accuracy of 0.005%. Find the minimum uncertainty
            in its position.
          </p>
          <FormulaLine math="\Delta x = \frac{h}{4\pi m\,\Delta v}" />
          <FormulaLine math="\Delta v = \frac{600\times0.005}{100} = 0.03\ \text{m/s}" />
          <FormulaLine math="\Delta x = \frac{6.626\times10^{-34}}{4\times3.14\times9.1\times10^{-31}\times0.03} = 1.92\times10^{-3}\ \text{m}" />
        </WorkedExample>
      </SourcePage>

      <SourcePage page={86}>
        <DefinitionCard term="Quantum Number">
          A set of four quantum numbers gives complete information about an electron in an atom — its energy,
          subshell, spatial orientation, and spin.
        </DefinitionCard>

        <NoteBlock title="1. Principal Quantum Number (n)">
          <ul className="space-y-2 text-sm text-white/80">
            <li>Gives the average distance of the electron from the nucleus</li>
            <li>Determines the energy of the electron</li>
            <li>Maximum electrons in shell n: <MathText math="2n^2" /></li>
          </ul>
          <FormulaLine math="n=1\ (\text{K}):\ 2\quad n=2\ (\text{L}):\ 8\quad n=3\ (\text{M}):\ 18\quad n=4\ (\text{N}):\ 32" />
          <ul className="mt-2 space-y-1 text-sm text-white/75">
            <li>Cannot be zero: <MathText math="n = 1,2,3,\ldots,\infty" /></li>
            <li>Angular momentum of the electron on orbit n = <MathText math="nh/2\pi" /></li>
          </ul>
        </NoteBlock>

        <NoteBlock title="2. Azimuthal (Angular / Secondary) Quantum Number (l)">
          <ul className="space-y-2 text-sm text-white/80">
            <li>Identifies the subshell within a given shell</li>
            <li>The value of <MathText math="l" /> gives the name of the subshell and the shape of the orbital</li>
            <li>Gives information about the orbital angular momentum of the electron</li>
          </ul>
        </NoteBlock>
      </SourcePage>

      <SummaryStrip items={[
        "Three uncertainty variants: Δx·Δp ≥ h/4π · ΔE·Δt ≥ h/4π · ΔL·Δθ ≥ h/4π.",
        "Δx·Δλ ≥ λ²/4π follows from dp = (h/λ²)dλ — a larger position spread means narrower wavelength spread.",
        "Four quantum numbers n, l, m, ms give complete information about each electron in an atom.",
      ]} />

      <AuditComment pages="84-86" unclear={0} />
    </AtomicPartShell>
  );
}
