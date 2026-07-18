import { OrbitalOverlapVisual } from "../_components/ChemicalBondingVisuals";
import { ChemBondPartShell, DiagramBox, LearningObjectives, NoteBlock, PracticeQuestion, SummaryStrip, TrapCallout } from "./_shared";

export default function Part07() {
  return (
    <ChemBondPartShell part={7} title="Valence Bond Theory — Orbital Overlap">
      <LearningObjectives items={[
        "Distinguish σ (head-on) and π (sideways) overlap and their consequences for rotation.",
        "Rank overlap strength for s–s, s–p and p–p combinations.",
        "Explain why the π contribution of a double bond is weaker than its σ contribution.",
      ]} />

      <NoteBlock title="σ and π bonds">
        <ul className="list-disc space-y-1 pl-5">
          <li><strong className="text-white">σ bond</strong>: head-on (axial) overlap — s–s, s–p, or end-on p–p. Electron density is concentrated along the internuclear axis, and free rotation about a σ bond is possible.</li>
          <li><strong className="text-white">π bond</strong>: sideways overlap of parallel p orbitals; the electron cloud sits above and below the internuclear axis with a node ON the axis. Rotation about a π bond is restricted — this restriction is the basis of cis–trans isomerism.</li>
          <li>σ is stronger than π between the same pair of atoms (greater overlap extent). A double bond = 1σ + 1π; a triple bond = 1σ + 2π.</li>
          <li>Overlap strength for orbitals of the same principal quantum number: axial p–p &gt; s–p &gt; s–s.</li>
        </ul>
        <DiagramBox title="σ head-on vs π sideways overlap"><OrbitalOverlapVisual /></DiagramBox>
      </NoteBlock>

      <TrapCallout
        trap={<>&quot;π bonds must be stronger, because double bonds are stronger than single bonds.&quot;</>}
        reality={<>The double bond is stronger as a <strong>package</strong> (σ + π together); the individual π contribution is weaker than the σ contribution, because sideways overlap is less effective than head-on overlap. This is exactly why the π bond breaks first in addition reactions, leaving the σ bond intact.</>}
      />

      <PracticeQuestion
        prompt="Ethene (H₂C=CH₂) cannot freely rotate about its C=C bond, but ethane (H₃C–CH₃) can rotate freely about its C–C bond. Why?"
        answer="Ethane's C–C is a pure σ bond (axial overlap), which is cylindrically symmetric about the bond axis and allows free rotation. Ethene's C=C is σ + π; the π component's sideways lobes above/below the axis must stay aligned for continued overlap, so rotation is restricted — twisting the molecule breaks the π bond."
      />

      <SummaryStrip items={[
        "σ = head-on, rotatable; π = sideways, rotation locked; double bond = σ + π, triple = σ + 2π.",
        "Overlap strength (same n): axial p–p > s–p > s–s.",
        "The π contribution is the weaker part of a double bond — it's the one that breaks in addition reactions.",
      ]} />
    </ChemBondPartShell>
  );
}
