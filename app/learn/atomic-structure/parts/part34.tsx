"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { DerivationPanel, ImportantNote, LearningObjectives, SummaryStrip, WorkedExample } from "../_components/AtomicLearning";
import { MoseleySeriesVisual, WavePacketVisual } from "../_components/AtomicVisuals";

export default function Part34() {
  return (
    <AtomicPartShell part={34} title="Moseley's Law and Group Velocity" pages="106-108">
      <LearningObjectives items={["use Moseley&apos;s relation for Kα X-rays", "solve wavelength-ratio questions from atomic number", "separate phase velocity from group velocity for matter waves"]} />
      <SourcePage page={106}>
        <NoteBlock title="Moseley Experiment">
          <p>
            Moseley&apos;s Law — It states that the frequency of the spectral line in the characteristic X-ray spectrum is
            directly proportional to the square of the atomic number of the element considered.
          </p>
          <FormulaLine math="\nu\propto Z^{2}" />
          <FormulaLine math="\text{or}\quad\boxed{\sqrt{\nu}=a(Z-b)}" />
          <p>where a and b are constants depending upon the particular spectral line.</p>
          <DiagramBox title="X-ray series diagram">
            <MoseleySeriesVisual />
            <p>The Kα arrow is the <MathText math="n=2\to1" /> transition used in the frequency derivation below.</p>
            <p>
              Levels n = 1 to 4 with downward arrows: to n = 1 the lines <MathText math="K_\gamma,\ K_\beta,\ K_\alpha" />; to
              n = 2 the lines <MathText math="L_\beta,\ L_\alpha" />; to n = 3 the line <MathText math="M_\alpha" />.
            </p>
          </DiagramBox>
          <p><MathText math="K_\alpha" />:</p>
          <FormulaLine math="E=h\nu=E_i-E_f=\frac{me^{4}(Z-1)^{2}}{8h^{2}\varepsilon_0^{2}}\left(\frac{1}{1^{2}}-\frac{1}{2^{2}}\right)" />
          <FormulaLine math="\nu=\frac{me^{4}}{8h^{3}\varepsilon_0^{2}}\left(\frac{3}{4}\right)(Z-1)^{2}" />
          <FormulaLine math="\nu=2.48\times10^{15}\,(Z-1)^{2}\ \text{Hz}" />
          <FormulaLine math="\boxed{\nu=a\,(Z-1)^{2}\ \text{Hz}}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={107}>
        <WorkedExample title="Kα ratio for Fe and Sc">
          <p>
            The ratio of wavelengths of <MathText math="K_\alpha" />-characteristic X-rays produced when iron (Z = 26) and
            scandium (Z = 21) are used as anticathode, is
          </p>
          <FormulaLine math="\frac{1}{\lambda}\propto(Z-1)^{2}" />
          <FormulaLine math="\frac{\lambda_{Fe}}{\lambda_{Sc}}=\frac{(21-1)^{2}}{(26-1)^{2}}=\frac{16}{25}" />
        </WorkedExample>
        <WorkedExample title="Kα line for Z = 57 and Z = 29">
          <p>
            The wavelength of the <MathText math="K_\alpha" /> line for an element of atomic number 57 is{" "}
            <MathText math="\lambda" />. What is the wavelength of <MathText math="k_\alpha" /> line for the element of atomic
            number 29?
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>(a) <MathText math="\lambda" /></li>
            <li>(b) <MathText math="2\lambda" /></li>
            <li>(c) <MathText math="4\lambda" /></li>
            <li>(d) <MathText math="\lambda/4" /></li>
          </ul>
          <FormulaLine math="\frac{\lambda_2}{\lambda_1}=\left(\frac{57-1}{29-1}\right)^{2}" />
          <FormulaLine math="\lambda_2=4\lambda_1" />
        </WorkedExample>
      </SourcePage>

      <SourcePage page={108}>
        <DerivationPanel title="Group Velocity and Phase Velocity">
          <p>If we consider matter wave as a single wave</p>
          <FormulaLine math="\lambda=\frac{h}{mv}\qquad\frac{1}{\lambda v}=\frac{m}{h}\qquad\lambda v=\frac{h}{m}" />
          <FormulaLine math="V_p=\frac{\omega}{K}\qquad\omega=2\pi\nu\qquad K=\frac{2\pi}{\lambda}" />
          <FormulaLine math="V_p=\nu\lambda\qquad V_p=\frac{h\nu}{h/\lambda}=\frac{E}{p}=\frac{mc^{2}}{mv}" />
          <FormulaLine math="\text{Phase velocity }v_p=\nu\lambda=\frac{c^{2}}{v}\qquad c>v\ \Rightarrow\ v_p>v" />
          <p>single wave assumption proved wrong.</p>
          <p>If we consider matter wave as a wave packet or group of waves —</p>
          <FormulaLine math="v_g=\frac{d\omega}{dK}=\frac{dE}{dp}=\frac{d}{dp}\left(\frac{p^{2}}{2m}\right)" />
          <FormulaLine math="v_g=\frac{p}{m}" />
          <FormulaLine math="\boxed{v_g=v}" />
          <DiagramBox title="Wave packet">
            <WavePacketVisual />
            <p>A localised packet makes the group-velocity treatment meaningful.</p>
            <p>A Gaussian wave packet showing real and imaginary oscillations under an absolute-value envelope.</p>
          </DiagramBox>
          <p>hence, matter wave is wave packet not single wave.</p>
        </DerivationPanel>
      </SourcePage>

      <ImportantNote title="Model assumption">The phase-velocity chain uses the single-wave assumption and demonstrates why it does not represent a localised matter particle; the packet calculation gives <MathText math="v_g=v" />.</ImportantNote>
      <SummaryStrip items={["For Kα, ν ∝ (Z−1)² under the stated screening form.", "The Fe/Sc wavelength ratio is 16/25; Z = 29 gives 4λ relative to Z = 57.", "Phase velocity c²/v exceeds c for v<c, while group velocity equals particle velocity."]} />

      <AuditComment pages="106-108" unclear={0} />
    </AtomicPartShell>
  );
}
