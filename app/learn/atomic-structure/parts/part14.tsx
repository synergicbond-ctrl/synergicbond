import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { BohrOrbitsVisual } from "../_components/AtomicVisuals";
import { DefinitionCard, FigureCaption, ImportantNote, LearningObjectives, PracticeQuestion, SummaryStrip, WorkedExample } from "../_components/AtomicLearning";

export default function Part14() {
  return (
    <AtomicPartShell part={14} title="Work Function Data and Bohr Model Postulates" pages="42-44">
      <LearningObjectives items={["Use work-function data.", "Calculate visible photon energies.", "Apply stopping-potential relations.", "State Bohr stationary-orbit ideas."]} />
      <DefinitionCard term="Work function, φ₀"><p>The minimum energy needed to remove an electron from a metal surface. Photoemission requires <MathText math="h\nu\geq\phi_0" />; equality defines threshold frequency.</p></DefinitionCard>
      <SourcePage page={42}>
        <NoteBlock title="Work functions of photosensitive metals">
          <DataTable
            headers={["Metal", <MathText key="wf1" math="\phi_0\ \text{(eV)}" />, "Metal", <MathText key="wf2" math="\phi_0\ \text{(eV)}" />]}
            rows={[
              ["Cs", "2.14", "Al", "4.28"],
              ["K", "2.30", "Hg", "4.49"],
              ["Na", "2.75", "Cu", "4.65"],
              ["Ca", "3.20", "Ag", "4.70"],
              ["Mo", "4.17", "Ni", "5.15"],
              ["Pb", "4.25", "Pt", "5.65"],
            ]}
          />
        </NoteBlock>
        <WorkedExample title="Photon energies across the visible region">
          <p>
            The wavelength of light in the visible region is about 390 nm for violet colour, about 550 nm (average wavelength)
            for yellow-green colour and about 760 nm for red colour.
          </p>
          <p>
            (a) What are the energies of photons in (eV) at the (i) violet end, (ii) average wavelength, yellow-green colour,
            and (iii) red end of the visible spectrum? (Take <MathText math="h=6.63\times10^{-34}\ \text{J s}" /> and{" "}
            <MathText math="1\ \text{eV}=1.6\times10^{-19}\ \text{J}" />.)
          </p>
          <p>
            (b) From which of the photosensitive materials with work functions listed in the table and using the results of
            (i), (ii) and (iii) of (a), can you build a photoelectric device that operates with visible light?
          </p>
          <p className="font-black text-white">Solution</p>
          <p>(a) Energy of the incident photon, <MathText math="E=h\nu=hc/\lambda" /></p>
          <FormulaLine math="E=(6.63\times10^{-34}\ \text{J s})(3\times10^{8}\ \text{m/s})/\lambda=\frac{1.989\times10^{-25}\ \text{J m}}{\lambda}" />
          <p>(i) For violet light, <MathText math="\lambda_1=390\ \text{nm}" /> (lower wavelength end)</p>
          <FormulaLine math="E_1=\frac{1.989\times10^{-25}\ \text{J m}}{390\times10^{-9}\ \text{m}}=5.10\times10^{-19}\ \text{J}=\frac{5.10\times10^{-19}\ \text{J}}{1.6\times10^{-19}\ \text{J/eV}}=3.19\ \text{eV}" />
          <p>(ii) For yellow-green light, <MathText math="\lambda_2=550\ \text{nm}" /> (average wavelength)</p>
          <FormulaLine math="E_2=\frac{1.989\times10^{-25}\ \text{J m}}{550\times10^{-9}\ \text{m}}=3.62\times10^{-19}\ \text{J}=2.26\ \text{eV}" />
          <p>(iii) For red light, <MathText math="\lambda_3=760\ \text{nm}" /> (higher wavelength end)</p>
          <FormulaLine math="E_3=\frac{1.989\times10^{-25}\ \text{J m}}{760\times10^{-9}\ \text{m}}=2.62\times10^{-19}\ \text{J}=1.64\ \text{eV}" />
          <p>
            (b) For a photoelectric device to operate, we require incident light energy <MathText math="E" /> to be equal to or
            greater than the work function <MathText math="\phi_0" /> of the material. Thus, the photoelectric device will
            operate with violet light (with <MathText math="E=3.19\ \text{eV}" />) photosensitive material Na (with{" "}
            <MathText math="\phi_0=2.75\ \text{eV}" />), K (with <MathText math="\phi_0=2.30\ \text{eV}" />) and Cs (with{" "}
            <MathText math="\phi_0=2.14\ \text{eV}" />). It will also operate with yellow-green light (with{" "}
            <MathText math="E=2.26\ \text{eV}" />) for Cs (with <MathText math="\phi_0=2.14\ \text{eV}" />) only. However, it
            will not operate with red light (with <MathText math="E=1.64\ \text{eV}" />) for any of these photosensitive
            materials.
          </p>
        </WorkedExample>
      </SourcePage>

      <ImportantNote title="Model scope">Bohr orbits are a successful hydrogen-like model; later quantum mechanics replaces definite electron paths with orbitals.</ImportantNote>
      <SourcePage page={43}>
        <NoteBlock title="Problem — classical electron radius">
          <p>
            Suppose that the electron is a spherical shell of radius <MathText math="r_e" /> and all the electron&apos;s charge
            is evenly distributed on the shell. Using the formula for the energy of a charged shell, calculate the classical
            electron radius. Compare the size of the electron with the size of an atomic nucleus.
          </p>
          <p className="font-black text-white">Solution</p>
          <p>We know from classical electromagnetism that the energy of a charged shell is</p>
          <FormulaLine math="E=\frac{e^{2}}{4\pi\varepsilon_0 r_e}\qquad(5.1)" />
          <p>
            (This is the conventional expression used to define the classical electron radius; the exact electrostatic
            self-energy of a charged shell carries an additional factor of <MathText math="\tfrac{1}{2}" />, which the
            convention omits.)
          </p>
          <p>Since <MathText math="E=mc^{2}" />, we find</p>
          <FormulaLine math="r_e=\frac{e^{2}}{4\pi\varepsilon_0 mc^{2}}=2.82\times10^{-15}\ \text{m}\qquad(5.2)" />
          <p>
            This conventional classical radius is of nuclear length scale. It is not a measured electron size or a physical lower
            bound: modern scattering finds no resolved electron size at much smaller scales.
          </p>
          <p>
            However, according to experiments, the electron is smaller, and yet its mass is not larger. Thus, classical
            electromagnetism must be revised for elementary particles.
          </p>
        </NoteBlock>
        <NoteBlock title="Example 11.2 — caesium threshold and stopping potential">
          <p>
            The work function of caesium is 2.14 eV. Find (a) the threshold frequency for caesium, and (b) the wavelength of
            the incident light if the photocurrent is brought to zero by a stopping potential of 0.60 V.
          </p>
          <p className="font-black text-white">Solution</p>
          <p>
            (a) For the cut-off or threshold frequency, the energy <MathText math="h\nu_0" /> of the incident radiation must be
            equal to work function <MathText math="\phi_0" />, so that
          </p>
          <FormulaLine math="\nu_0=\frac{\phi_0}{h}=\frac{2.14\ \text{eV}}{6.63\times10^{-34}\ \text{J s}}=\frac{2.14\times1.6\times10^{-19}\ \text{J}}{6.63\times10^{-34}\ \text{J s}}=5.16\times10^{14}\ \text{Hz}" />
          <p>Thus, for frequencies less than this threshold frequency, no photoelectrons are ejected.</p>
          <p>
            (b) Photocurrent reduces to zero, when maximum kinetic energy of the emitted photoelectrons equals the potential
            energy <MathText math="eV_0" /> by the retarding potential <MathText math="V_0" />. Einstein&apos;s Photoelectric
            equation is
          </p>
          <FormulaLine math="eV_0=h\nu-\phi_0=\frac{hc}{\lambda}-\phi_0" />
          <FormulaLine math="\text{or,}\quad \lambda=hc/(eV_0+\phi_0)=\frac{(6.63\times10^{-34}\ \text{J s})\times(3\times10^{8}\ \text{m/s})}{(0.60\ \text{eV}+2.14\ \text{eV})}" />
          <FormulaLine math="=\frac{19.89\times10^{-26}\ \text{J m}}{(2.74\ \text{eV})}" />
          <FormulaLine math="\lambda=\frac{19.89\times10^{-26}\ \text{J m}}{2.74\times1.6\times10^{-19}\ \text{J}}=454\ \text{nm}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={44}>
        <NoteBlock title="Bohr's Atomic Model">
          <p>
            Bohr proposed that a microscopic particle like the electron will not radiate energy continuously. It emits energy
            discontinuously (Planck theory). On losing energy the electron jumps closer to the nucleus. By doing so it must
            reach a certain minimum energy after which it cannot lose energy, and the e&#8315; will never drop into the
            nucleus.
          </p>
          <p>According to Bohr&apos;s model</p>
          <ol className="list-decimal space-y-3 pl-5">
            <li>Electrons revolve around the nucleus in definite circular paths called orbits or shells.</li>
          </ol>
          <DiagramBox title="Stationary state">
            <BohrOrbitsVisual />
            <FigureCaption>
              Concentric circular orbits around the nucleus (+); orbits numbered 1, 2, 3, 4, … and lettered K, L, M, N, O …
              outward. This is a conceptual stationary-state visual: orbit spacing is not to scale, while energy increases outward.
            </FigureCaption>
          </DiagramBox>
          <ol className="list-decimal space-y-3 pl-5" start={2}>
            <li>
              The energy of the e&#8315; remains constant in an orbit, and hence the orbits are also called energy levels.
              The energy of the e&#8315; increases on increasing distance from the nucleus.
            </li>
          </ol>
          <FormulaLine math="E_1<E_2<E_3\cdots" />
          <p>while</p>
          <FormulaLine math="E_2-E_1>E_3-E_2>E_4-E_3>\cdots" />
        </NoteBlock>
      </SourcePage>

      <PracticeQuestion prompt="Which listed metal works with yellow-green light in the solved example?" answer="Caesium only." /><SummaryStrip items={["Visible photon energy decreases from violet to red.", "Caesium threshold frequency is 5.16 × 10¹⁴ Hz.", "Bohr stationary orbits have fixed energy."]} /><AuditComment pages="42-44" unclear={0} />
    </AtomicPartShell>
  );
}
