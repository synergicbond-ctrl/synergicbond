"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { DerivationPanel, ImportantNote, LearningObjectives, SummaryStrip, WorkedExample } from "../_components/AtomicLearning";
import { StandingWaveOrbitVisual, StringStandingWaveVisual } from "../_components/AtomicVisuals";

export default function Part26() {
  return (
    <AtomicPartShell part={26} title="Standing Electron Waves and Uncertainty Principle" pages="81-83">
      <LearningObjectives items={[
        "derive the standing-wave condition 2πr = nλ and its angular-momentum consequence mvr = nh/2π",
        "compute λ on the nth Bohr orbit using the 3.32 n/Z Å formula",
        "state Heisenberg's uncertainty principle and explain the reciprocal Δx–Δp relationship",
      ]} />

      <SourcePage page={81}>
        <WorkedExample title="Frequency from kinetic energy of a subatomic particle">
          <p>Problem: KE of a subatomic particle is <MathText math="6.626\times10^{-19}" /> J. Calculate its frequency.</p>
          <p>For a massive particle, <MathText math="E = h\nu" /> (the photon relation) is not applicable. Use the matter-wave route:</p>
          <FormulaLine math="\lambda = \frac{h}{mv}\qquad\nu = \frac{v}{\lambda}" />
          <FormulaLine math="KE = \frac{1}{2}mv^{2} = \frac{1}{2}(mv)v = \frac{1}{2}\frac{h}{\lambda}v = \frac{1}{2}h\nu\qquad(E = h\nu\ \text{not applicable})" />
          <FormulaLine math="6.626\times10^{-19} = \frac{1}{2}\times6.626\times10^{-34}\times\nu" />
          <FormulaLine math="\nu = 2\times10^{15}\ \text{Hz}" />
        </WorkedExample>

        <ImportantNote title="Why KE = ½hν here but E = hν is forbidden">
          For a massive particle, <MathText math="E = h\nu" /> is a photon relation and must not be applied. The correct chain is <MathText math="KE = \tfrac{1}{2}mv^2 = \tfrac{1}{2}(mv)\cdot v = \tfrac{h}{2\lambda}\cdot v = \tfrac{1}{2}h\nu" />, which uses the de Broglie relations <MathText math="\lambda = h/mv" /> and <MathText math="\nu = v/\lambda" />.
        </ImportantNote>

        <NoteBlock title="Davisson–Germer experiment and dual behaviour">
          <p>
            Davisson and Germer experimentally proved the wave nature of electrons. They found that cathode rays
            produce a diffraction pattern from solids similar to that produced by X-rays.
          </p>
          <p>
            The dual behaviour means the exact behaviour of an electron is not known at any instant. Some properties
            are explained by wave nature, others by particle nature.
          </p>
        </NoteBlock>

        <DerivationPanel title="de Broglie standing-wave condition on a Bohr orbit">
          <p>de Broglie treated the electron wave as a <em>standing wave</em> around its circular orbit. For the wave to close continuously on itself, an integer number of wavelengths must fit around the circumference:</p>
          <FormulaLine math="2\pi r = n\lambda = n\frac{h}{mv}" />
          <p>Rearranging gives Bohr's angular-momentum quantisation — now derived from a wave argument, not assumed as a postulate:</p>
          <FormulaLine math="\boxed{mvr = n\frac{h}{2\pi}}" />
          <DiagramBox title="Standing wave on a Bohr orbit (n = 5 shown)">
            <StandingWaveOrbitVisual />
            <p className="mt-3 text-sm text-slate-300">
              Exactly five whole wavelengths fit around the orbit circumference. A non-integer number would produce
              destructive self-interference and is forbidden — this is why only discrete orbits exist.
            </p>
          </DiagramBox>
        </DerivationPanel>
      </SourcePage>

      <SourcePage page={82}>
        <NoteBlock title="Wavelength on the nth Bohr orbit">
          <p>Starting from the standing-wave condition <MathText math="n\lambda = 2\pi r" /> and substituting the Bohr radius <MathText math="r_n = 0.529\,n^2/Z" /> Å:</p>
          <FormulaLine math="\lambda = \frac{2\pi r}{n} = \frac{2\pi}{n}\cdot 0.529\,\frac{n^2}{Z}\ \text{\AA}" />
          <FormulaLine math="\boxed{\lambda = 3.32\,\frac{n}{Z}\ \text{\AA}}" />
          <p className="mt-2 text-sm text-white/75">Orbit resonance sketch meanings:</p>
          <ul className="mt-1 space-y-1 pl-4 text-sm text-white/75">
            <li>n = 1: one wavelength — <MathText math="\lambda_1 = 2\pi r_1" /></li>
            <li>n = 2: two wavelengths — <MathText math="2\lambda_2 = 2\pi r_2" /></li>
            <li>n = 3: three wavelengths — <MathText math="3\lambda_3 = 2\pi r_3" /></li>
          </ul>
        </NoteBlock>

        <NoteBlock title="Analogy — standing waves on a string of length L">
          <p>The same resonance condition applies to a stretched string fixed at both ends:</p>
          <FormulaLine math="\lambda = \frac{2L}{n}\qquad L = \frac{n\lambda}{2}" />
          <DiagramBox title="Modes of a vibrating string (n = 1 to 4)">
            <StringStandingWaveVisual />
            <p className="mt-3 text-sm text-slate-300">
              Mode n has n half-wavelengths between the fixed ends, with n − 1 interior nodes.
              The span <MathText math="L = n\lambda/2" /> is the string analogue of <MathText math="2\pi r = n\lambda" /> on the Bohr orbit.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={83}>
        <NoteBlock title="Heisenberg's Uncertainty Principle">
          <p>
            It is impossible to measure the exact position and momentum (speed) of any moving object simultaneously.
          </p>
          <FormulaLine math="\Delta x\cdot\Delta p \ge \frac{h}{4\pi}\quad\text{or}\quad\frac{\hbar}{2}\qquad\hbar = \frac{h}{2\pi}" />
          <FormulaLine math="\Delta x\cdot\Delta v \ge \frac{h}{4\pi m}" />
          <ul className="mt-2 space-y-1 pl-4 text-sm text-white/75">
            <li><MathText math="\Delta x" /> = uncertainty in position</li>
            <li><MathText math="\Delta p" /> = uncertainty in momentum</li>
            <li><MathText math="\Delta v" /> = uncertainty in velocity</li>
          </ul>
          <div className="mt-3 rounded-lg border border-violet-400/20 bg-violet-400/[0.06] px-4 py-3 text-sm">
            <p className="font-bold text-violet-200">Reciprocal extremes</p>
            <p className="mt-1 text-white/80">
              If <MathText math="\Delta x = 0" /> (exact position known), then <MathText math="\Delta v = \infty" /> (velocity totally unknown), and vice versa.
            </p>
          </div>
          <DiagramBox title="Photon-electron measurement disturbance">
            <p className="text-sm text-white/75">
              A long-wavelength (low-energy) light wave passes the electron with minimal disturbance but
              cannot locate it precisely (marked ✗). A high-energy γ-ray can locate the electron precisely
              but kicks it violently, making its momentum entirely uncertain — illustrating why
              position and momentum cannot both be sharp simultaneously.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SummaryStrip items={[
        "2πr = nλ gives mvr = nh/2π — Bohr quantisation follows from the standing-wave requirement, not as an assumption.",
        "On the nth orbit: λ = 3.32 n/Z Å, derived by substituting the Bohr radius r = 0.529 n²/Z Å.",
        "Heisenberg: Δx·Δp ≥ h/4π — exact position and exact momentum cannot coexist; ΔxΔv ≥ h/4πm.",
      ]} />

      <AuditComment pages="81-83" unclear={0} />
    </AtomicPartShell>
  );
}
