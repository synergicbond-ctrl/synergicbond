import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { AlphaNucleusChargesVisual, FoilSlabVisual } from "../_components/AtomicVisuals";
import { LearningObjectives, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";

export default function Part06() {
  return (
    <AtomicPartShell part={6} title="Rutherford Scattering Cross Section" pages="17-19">
      <LearningObjectives items={["Derive the Rutherford angular count relation.", "Interpret impact parameter and scattering cross section.", "Solve closest-approach and α-particle energy problems.", "Use dimensional units consistently in nuclear-scale calculations."]} />
      <SourcePage page={17}>
        <NoteBlock title="Gold foil target and scattered fraction">
          <DiagramBox title="Gold foil slab">
            <FoilSlabVisual />
            <p>Gold foil drawn as a rectangular slab.</p>
            <p>Surface Area = A, thickness = t</p>
          </DiagramBox>
          <p>volume = At</p>
          <p>
            no. of atoms per unit volume <MathText math="n=\frac{N}{V}" />
          </p>
          <p>
            scattering cross section <MathText math="\sigma=\pi b^2" />
          </p>
          <p>b = impact parameter</p>
          <p>No. of particle scattered</p>
          <FormulaLine math="f=nt\sigma=\pi ntb^2" />
          <FormulaLine math="\cot\frac{\theta}{2}=\frac{(4\pi\epsilon_o)Eb}{ze^2}" />
          <FormulaLine math="b=\frac{ze^2\cot(\theta/2)}{(4\pi\epsilon_o)E}" />
          <FormulaLine math="f=\pi nt\frac{z^2e^4\cot^2(\theta/2)}{16\pi^2\epsilon_o^2E^2}" />
          <FormulaLine math="f=\frac{ntz^2e^4}{16\pi^2\epsilon_o^2E^2}\cot^2\frac{\theta}{2}" />
          <FormulaLine math="df=-\frac{ntz^2e^4}{16\pi^2\epsilon_o^2E^2}\cot\frac{\theta}{2}\csc^2\frac{\theta}{2}\,d\theta\qquad(1)" />
          <p>For a scattered-particle count, use the magnitude <MathText math="|df|" />.</p>
          <FormulaLine math="ds=(2\pi r\sin\theta)\,r\,d\theta=2\pi r^2\sin\theta\,d\theta" />
          <FormulaLine math="\sin\theta=2\sin\frac{\theta}{2}\cos\frac{\theta}{2}" />
          <FormulaLine math="ds=4\pi r^2\sin\frac{\theta}{2}\cos\frac{\theta}{2}\,d\theta" />
          <FormulaLine math="N_\theta=N_i\frac{df}{ds}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={18}>
        <NoteBlock title="Rutherford scattering formula">
          <FormulaLine math="N_\theta=N_i\frac{\frac{ntz^2e^4}{16\pi^2\epsilon_o^2E^2}\frac{\cos(\theta/2)\csc^2(\theta/2)}{\sin(\theta/2)}}{4\pi r^2\sin(\theta/2)\cos(\theta/2)}" />
          <FormulaLine math="=N_i\frac{ntz^2e^4}{64\pi^2\epsilon_o^2r^2E^2}\csc^4\frac{\theta}{2}" />
          <FormulaLine math="=N_i\frac{ntz^2e^4}{64\pi^2\epsilon_o^2r^2E^2}\frac{1}{\sin^4(\theta/2)}" />
          <FormulaLine math="N(\theta)=\frac{N_i nL z^2K^2e^4}{4r^2(KE)^2\sin^4(\theta/2)}" />
          <div className="space-y-1">
            <p>N<sub>i</sub> = number of incident alpha particles</p>
            <p>n = atom per unit volume in target</p>
            <p>t or L = thickness of target</p>
            <p>e = electron charge</p>
            <p>K = Coulomb&apos;s constant</p>
            <p>r = target to detector distance</p>
            <p>E or KE = Kinetic Energy</p>
            <p>θ = scattering angle</p>
          </div>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={19}>
        <NoteBlock title="Closest approach example">
          <p>
            When α-particle of K.E. 5.4 MeV is projected towards Mg nucleus, calculate the distance of closest approach.
          </p>
          <DiagramBox title="Mg nucleus and alpha particle">
            <AlphaNucleusChargesVisual />
            <p>Mg nucleus is shown with 12p and 12n.</p>
            <p>α = He<sup>2+</sup>, q<sub>1</sub> = 2e, q<sub>2</sub> = 12e.</p>
          </DiagramBox>
          <FormulaLine math="5.4\ \mathrm{MeV}=5.4\times10^6\ \mathrm{eV}" />
          <FormulaLine math="1\ \mathrm{eV}=1.6\times10^{-19}\ \mathrm{J}" />
          <FormulaLine math="r=\frac{9\times10^9\times2\times1.6\times10^{-19}\times12\times1.6\times10^{-19}}{5.4\times10^6\times1.6\times10^{-19}}" />
          <FormulaLine math="r=6.4\times10^{-15}\ \mathrm{m}" />
        </NoteBlock>
        <NoteBlock title="Density of atom">
          <FormulaLine math="\mathrm{Density}=\frac{\mathrm{mass}}{\mathrm{vol.}}=\frac{A}{\frac{4}{3}\pi r^3}" />
          <FormulaLine math="\simeq10^{17}\ \mathrm{kg/m^3}" />
        </NoteBlock>
        <NoteBlock title="Problem">
          <p>
            With what velocity should an α-particle travel towards the nucleus of a Cu atom so as to arrive at a distance{" "}
            <MathText math="10^{-12}\ \mathrm{m}" /> from the nucleus of the Cu atom?
          </p>
          <p>
            <MathText math="4.8\times\sqrt{29\times60}=200" />; <MathText math="N_A=6\times10^{23}" />
          </p>
          <FormulaLine math="\frac{1}{2}mv^2=K\frac{q_1q_2}{r}" />
          <FormulaLine math="\frac{1}{2}\times\frac{4\times10^{-3}}{6\times10^{23}}\times v^2=\frac{9\times10^9\times29\times2\times(1.6\times10^{-19})^2}{10^{-12}}" />
          <FormulaLine math="v=2\times10^6\ \mathrm{m/sec}" />
        </NoteBlock>
      </SourcePage>
      <PracticeQuestion prompt={<>For fixed projectile energy, why does the Rutherford count rise strongly at small <MathText math="\theta" />?</>} answer="The count contains 1/sin⁴(θ/2), which becomes very large as θ approaches zero." />
      <SummaryStrip items={["f = ntσ connects target thickness, number density and cross section.", "Rutherford count is proportional to 1/sin⁴(θ/2).", "The Mg example gives r = 6.4 × 10⁻¹⁵ m."]} />
      <AuditComment pages="17-19" unclear={0} />
    </AtomicPartShell>
  );
}
