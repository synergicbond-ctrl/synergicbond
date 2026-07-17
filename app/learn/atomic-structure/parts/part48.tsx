import { AtomicPartShell, FormulaLine, ImportantNote, LearningObjectives, MathText, NoteBlock, SourcePage, SummaryStrip } from "./_shared";
import { PenetrationComparisonVisual } from "../_components/AtomicVisuals";

export default function Part48() {
  return (
    <AtomicPartShell part={48} title="Nodes, Orbital Symmetry and Penetration" pages="151-153">
      <LearningObjectives
        items={[
          "Read a radial node directly from the zero of a radial expression.",
          "Explain why the combined p-orbital density has no preferred direction.",
          "Compare penetration within the n = 3 shell.",
        ]}
      />

      <SourcePage page={151}>
        <NoteBlock title="Node detective: a short practice lab">
          <p>A radial node is a spherical surface at which the radial part of an orbital is zero. Constants and exponential factors do not create a finite radial node, so focus on the polynomial factor.</p>
          <h3 className="pt-2 font-bold text-white">Checkpoint 1 — hydrogen 2s</h3>
          <p>For hydrogen, the 2s wave function contains the factor <MathText math="(2-r/a_0)" />. At what radius is its radial node found?</p>
          <FormulaLine math="2-\frac{r}{a_0}=0\quad\Longrightarrow\quad r=2a_0" />
          <p>The node lies two Bohr radii from the nucleus. This is consistent with the node-count rule: a 2s orbital has <MathText math="n-l-1=1" /> radial node.</p>

          <h3 className="pt-2 font-bold text-white">Checkpoint 2 — a hydrogen-like ion</h3>
          <p>Suppose a radial factor is <MathText math="(4-\rho)\rho e^{-\rho/2}" />, where <MathText math="\rho=Zr/a_0" />. The factor <MathText math="\rho" /> represents the origin; the nonzero radial node comes from <MathText math="4-\rho=0" />. For <MathText math="Z=5" />, find its position using <MathText math="a_0=0.529\,\text{Å}" />.</p>
          <FormulaLine math="\rho=4\quad\Longrightarrow\quad r=\frac{4a_0}{Z}=\frac{4(0.529)}{5}=0.423\,\text{Å}" />
          <ImportantNote title="A useful distinction"><p>Do not count <MathText math="r=0" /> as a radial node. The origin is a point, whereas a radial node is a finite-radius spherical surface where the radial function changes sign.</p></ImportantNote>
        </NoteBlock>

        <NoteBlock title="Identify an orbital from its angular and radial clues">
          <p>Consider a hydrogenic wave function proportional to</p>
          <FormulaLine math="\left(6-\frac{r}{a_0}\right)\left(\frac{r}{a_0}\right)e^{-r/(3a_0)}\sin\theta\sin\phi" />
          <p>The angular factor <MathText math="\sin\theta\sin\phi" /> signals a p-type angular shape, so <MathText math="l=1" />. The exponential scale gives <MathText math="n=3" />, and the factor <MathText math="6-r/a_0" /> gives one finite radial node. Together these clues identify a <MathText math="3p" /> orbital.</p>
          <FormulaLine math="\text{radial nodes}=n-l-1=3-1-1=1" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={152}>
        <NoteBlock title="Why a complete p set looks spherical">
          <p>An individual p orbital points along one axis, but the three-member p set has no net directional preference when all three angular probability contributions are included. This is a special case of Unsöld’s theorem: the sum over every <MathText math="m_l" /> value for a fixed <MathText math="l" /> is independent of direction.</p>
          <FormulaLine math="\sum_{m_l=-l}^{+l}|Y_l^{m_l}(\theta,\phi)|^2=\frac{2l+1}{4\pi}" />
          <p>For the real p orbitals, use the normalized angular functions below.</p>
          <FormulaLine math="p_x=\sqrt{\frac{3}{4\pi}}\sin\theta\cos\phi,\qquad p_y=\sqrt{\frac{3}{4\pi}}\sin\theta\sin\phi,\qquad p_z=\sqrt{\frac{3}{4\pi}}\cos\theta" />
          <p>Adding their squared amplitudes gives</p>
          <FormulaLine math="|p_x|^2+|p_y|^2+|p_z|^2=\frac{3}{4\pi}\left[\sin^2\theta(\cos^2\phi+\sin^2\phi)+\cos^2\theta\right]=\frac{3}{4\pi}" />
          <p>Because the result is a constant, it is the same in every direction: the combined angular probability distribution is spherical.</p>
          <ImportantNote title="Occupancy matters"><p>For an isolated electron in one p orbital, the density is directional. Spherical symmetry applies to a complete p subshell, or to the mathematical sum over the full p set.</p></ImportantNote>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={153}>
        <NoteBlock title="Penetration inside the n = 3 shell">
          <PenetrationComparisonVisual />
          <p>Penetration describes how much electron density reaches close to the nucleus. Within the same principal shell, an s orbital has the greatest inner density, followed by p and then d.</p>
          <FormulaLine math="\text{penetration:}\qquad 3s>3p>3d" />
          <p>A more penetrating electron experiences less shielding from inner electrons and, in multi-electron atoms, a larger effective nuclear attraction. That is why the corresponding energies within a shell are ordered oppositely:</p>
          <FormulaLine math="\text{energy in multi-electron atoms:}\qquad 3s<3p<3d" />
          <ImportantNote title="Keep the contexts separate"><p>Hydrogen-like ions have orbital energies determined only by <MathText math="n" />. The 3s–3p–3d energy splitting discussed here occurs in multi-electron atoms.</p></ImportantNote>
        </NoteBlock>
      </SourcePage>

      <SummaryStrip items={[
        "Set the nontrivial radial factor equal to zero to locate a radial node.",
        "The squared angular functions of px, py and pz add to a direction-independent constant.",
        "Within n = 3, penetration decreases from s to p to d; in multi-electron atoms, energy rises in that direction.",
      ]} />
    </AtomicPartShell>
  );
}
