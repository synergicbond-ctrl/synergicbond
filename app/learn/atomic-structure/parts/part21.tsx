
import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { ConceptCard, ImportantNote, LearningObjectives, SummaryStrip } from "../_components/AtomicLearning";
import { PhotonFluxGeometryVisual } from "../_components/AtomicVisuals";

export default function Part21() {
  return (
    <AtomicPartShell part={21} title="Bohr Magneton and Photon Flux Problems" pages="65-67">
      <LearningObjectives items={["connect orbital angular momentum to magnetic moment", "turn light power and geometry into a photon rate", "distinguish phase velocity from group velocity"]} />
      <SourcePage page={65}>
        <NoteBlock title="Quantized magnetic moment (conclusion)">
          <p>From the definition of the angular momentum</p>
          <FormulaLine math="\vec{L}=\vec{r}\times\vec{p}=mvr\hat{n}," />
          <p>where <MathText math="\vec{p}=m\vec{v}" />, we find that</p>
          <FormulaLine math="\vec{\mu}=\frac{1}{2}evr\hat{n}=\frac{e}{2m}\vec{L}." />
          <p>Since</p>
          <FormulaLine math="L=n\hbar," />
          <p>we find that</p>
          <FormulaLine math="\vec{\mu}=n\frac{e\hbar}{2m}\hat{n}=n\,m_B\hat{n}," />
          <p>
            where <MathText math="m_B=e\hbar/2m=9.27\times10^{-24}\ [\text{A}\cdot\text{m}^2]" /> is the Bohr magneton.
          </p>
        </NoteBlock>
        <ConceptCard title="Geometry before arithmetic">
          <p>The photon-rate calculation has two separate ideas: isotropic spreading sets the intensity at the eye, then the pupil&apos;s area selects a small part of that flux.</p>
          <DiagramBox title="Isotropic photon flux and pupil aperture"><PhotonFluxGeometryVisual /><p className="mt-3 text-sm text-slate-300">The diagram explains why the inverse-square factor belongs to intensity, while the pupil enters only through <MathText math="A=\pi r_{\rm pupil}^{2}" />.</p></DiagramBox>
        </ConceptCard>
        <NoteBlock title="Problem — photons striking the eye">
          <p>
            Consider an experiment. A student is at a distance of 10 m from a light source whose power is{" "}
            <MathText math="P=40\ \text{W}" />.
          </p>
          <p>
            (a) How many photons strike the student&apos;s eye if the wavelength of light is 589 nm (yellow light) and the
            radius of the pupil (a variable aperture through which light enters the eye) is 2 mm.
          </p>
          <p>(b) At what distance from the source, only one photon would strike the student&apos;s eye.</p>
          <p className="font-black text-white">Solution (a)</p>
          <p>The intensity of light at a distance of 10 m from the source is</p>
          <FormulaLine math="I=\frac{P}{4\pi r^{2}}=\frac{40}{4\pi(10)^{2}}=0.032\ \left[\frac{\text{W}}{\text{m}^2}\right]." />
          <p>Energy of a single photon of wavelength <MathText math="\lambda=589\ \text{nm}" /> is</p>
          <FormulaLine math="E=h\nu=\frac{hc}{\lambda}=\frac{6.63\times10^{-34}\times3\times10^{8}}{589\times10^{-9}}=0.034\times10^{-17}\ [\text{J}]." />
          <p>The rate at which energy is absorbed by the eye is given by</p>
          <FormulaLine math="R=IA=0.032\times\pi\times(2\times10^{-3})^{2}=402.1\times10^{-9}\ \left[\frac{\text{J}}{\text{s}}\right]," />
          <p>where A is the area of the pupil.</p>
        </NoteBlock>
        <ImportantNote title="Interpret the one-photon condition">Part (b) means an average arrival rate of one photon per second through the pupil. Photon detection is intrinsically discrete, so individual one-second intervals need not each contain exactly one photon.</ImportantNote>
      </SourcePage>

      <SourcePage page={66}>
        <NoteBlock title="Solution (a) — photons per second">
          <p>Hence, we find that the number of photons striking the eye per second is given by</p>
          <FormulaLine math="n=\frac{R}{E}=\frac{402.1\times10^{-9}}{0.034\times10^{-17}}=11{,}826.5\times10^{8}\approx12\times10^{11}\ \left[\frac{\text{photons}}{\text{s}}\right].\qquad(5.21)" />
        </NoteBlock>
        <NoteBlock title="Solution (b) — one photon per second">
          <p>
            We have to find the distance at which the rate of absorption of light per second is equal to the energy of a single
            photon, i.e.,
          </p>
          <FormulaLine math="R=IA=E." />
          <p>Since <MathText math="I=P/(4\pi r^{2})" />, we have</p>
          <FormulaLine math="\frac{PA}{4\pi r^{2}}=E," />
          <p>from which we find</p>
          <FormulaLine math="r^{2}=\frac{PA}{4\pi E}." />
          <p>Hence</p>
          <FormulaLine math="r=\sqrt{\frac{PA}{4\pi E}}=\sqrt{\frac{40\times\pi\times(2\times10^{-3})^{2}}{4\pi\times0.034\times10^{-17}}}" />
          <FormulaLine math="=\sqrt{118\times10^{12}}\approx11\times10^{6}\ [\text{m}]=11\times10^{3}\ [\text{km}]." />
        </NoteBlock>
        <NoteBlock title="Problem — phase velocity (non-relativistic case)">
          <p>
            We have calculated the phase velocity u using the relativistic formula for energy. Calculate the phase velocity for
            the non-relativistic case. Does the relativistic result for u tends to the corresponding non-relativistic result as
            the velocity of the particle becomes small compared to the speed of light?
          </p>
        </NoteBlock>
        <ConceptCard title="Why the two phase-velocity formulae do not match">
          <p>The relativistic expression uses total energy, including rest energy; the non-relativistic expression uses kinetic energy only. Their different zero points are the reason the phase velocities do not approach one another as <MathText math="v\ll c" />.</p>
        </ConceptCard>
      </SourcePage>

      <SourcePage page={67}>
        <NoteBlock title="Solution — phase and group velocity">
          <p>In the non-relativistic case, the energy of the particle is given by</p>
          <FormulaLine math="E=\frac{p^{2}}{2m}," />
          <p>where p is the momentum of the particle.</p>
          <p>
            Since <MathText math="p=\hbar k" /> and <MathText math="E=\hbar\omega" />, we have
          </p>
          <FormulaLine math="E=\frac{p^{2}}{2m}=\frac{\hbar^{2}}{2m}k^{2}=\hbar\omega." />
          <p>Thus, in the non-relativistic case</p>
          <FormulaLine math="\omega=\frac{\hbar}{2m}k^{2}." />
          <p>
            With this relation between <MathText math="\omega" /> and k, we find that the phase velocity is
          </p>
          <FormulaLine math="u=\frac{\omega}{k}=\frac{\hbar}{2m}k," />
          <p>and the group velocity is</p>
          <FormulaLine math="v_g=\frac{d\omega}{dk}=\frac{\hbar}{m}k=\frac{p}{m}=v." />
          <p>Therefore,</p>
          <FormulaLine math="u=\frac{1}{2}v_g=\frac{1}{2}v." />
          <p>In the relativistic case</p>
          <FormulaLine math="u=\frac{c^{2}}{v_g}=\frac{c^{2}}{v}." />
          <p>
            Thus, the relativistic case does not tend to the non-relativistic case when <MathText math="v\ll c" />. Normally, a
            relativistic result in physics tends to the corresponding non-relativistic result as the velocity involved becomes
            small compared to the speed of light. This is clearly not the case for the above two expressions for phase velocity.
            The reason is that the expression for the relativistic energy
          </p>
          <FormulaLine math="E^{2}=p^{2}c^{2}+(m_0c^{2})^{2}" />
          <p>
            includes the rest-mass term, <MathText math="m_0c^{2}" />, whereas the expression for the non-relativistic energy{" "}
            <MathText math="E=p^{2}/2m" /> does not include the rest-mass term.
          </p>
        </NoteBlock>
      </SourcePage>

      <SummaryStrip items={["Orbital magnetic moment is proportional to angular momentum: μ = (e/2m)L.", "At fixed aperture, photon rate falls as 1/r².", "For a non-relativistic matter wave, vₚ = v_g/2 while v_g = v."]} />

      <AuditComment pages="65-67" unclear={0} />
    </AtomicPartShell>
  );
}