import { MetallicBondingVisual } from "../_components/ChemicalBondingVisuals";
import { ChemBondPartShell, DiagramBox, LearningObjectives, NoteBlock, PracticeQuestion, SummaryStrip, TrapCallout } from "./_shared";

export default function Part12() {
  return (
    <ChemBondPartShell part={12} title="Metallic Bonding">
      <LearningObjectives items={[
        "Describe the electron-sea model of metallic bonding.",
        "Connect the model directly to conductivity, malleability, ductility and lustre.",
        "Place metallic bonding correctly on the ionic–covalent–metallic bonding continuum from Part 3.",
      ]} />

      <NoteBlock title="The electron-sea model">
        <p>In a metal, each atom contributes its loosely held valence electrons to a common, delocalised &quot;sea&quot; that is free to move throughout the entire lattice, while the remaining positively charged ion cores occupy fixed, ordered lattice positions. The metallic bond is the electrostatic attraction between these fixed positive cores and the mobile, shared electron sea — it is not localised between any particular pair of atoms, unlike a covalent bond.</p>
        <DiagramBox title="Electron-sea model of metallic bonding"><MetallicBondingVisual /></DiagramBox>
      </NoteBlock>

      <NoteBlock title="Why the model explains every classic metallic property">
        <ul className="list-disc space-y-1 pl-5">
          <li><strong className="text-white">Electrical conductivity</strong>: the delocalised electrons drift under an applied field, carrying current without any bond needing to break.</li>
          <li><strong className="text-white">Thermal conductivity</strong>: the same mobile electrons (plus lattice vibrations) transport kinetic energy rapidly through the solid.</li>
          <li><strong className="text-white">Malleability &amp; ductility</strong>: because the bonding is non-directional, layers of ion cores can slide past one another under stress without breaking any specific bond — the electron sea simply re-forms around the new positions. Ionic solids, by contrast, shatter under stress because sliding brings like-charged ions into contact and they repel.</li>
          <li><strong className="text-white">Metallic lustre</strong>: the mobile electrons readily absorb and re-emit a wide range of visible-light photons at the surface, giving the characteristic shine.</li>
        </ul>
      </NoteBlock>

      <TrapCallout
        trap={<>&quot;In the electron-sea model, the ion cores lose their charge once the electrons are shared out.&quot;</>}
        reality={<>The ion cores remain genuinely <strong>positively charged</strong> throughout — the metallic bond is precisely the attraction between these still-positive cores and the delocalised electron sea. If the cores were neutral, there would be no attractive force holding the lattice together at all.</>}
      />

      <NoteBlock title="Where metallic bonding sits on the bonding continuum">
        <p>Recall the Ketelaar triangle from Part 3: metallic bonding is a third corner alongside ionic and covalent bonding, not a variant of either. Low average electronegativity (loosely held valence electrons) combined with a small electronegativity difference between identical or similar atoms pushes bonding toward the metallic corner — this is why alloys and transition-metal lattices sit close to that corner, while a metal chloride like AlCl₃ sits well inside the covalent region instead.</p>
      </NoteBlock>

      <PracticeQuestion
        prompt="Why does an ionic crystal shatter under stress while a metal deforms (bends or is hammered into shape) instead?"
        answer="In an ionic lattice, bonding is directional charge-alternation (+ next to −); a shear stress that shifts one layer relative to another brings like-charged ions face to face, and strong repulsion cleaves the crystal. In a metal, bonding is non-directional attraction to a shared electron sea, so ion cores can slide into new positions and the sea simply redistributes around them — no repulsive mismatch forces a fracture."
      />

      <SummaryStrip items={[
        "Metallic bond = fixed positive ion cores + delocalised, mobile valence-electron sea; cores stay positive throughout.",
        "Non-directional bonding explains conductivity, malleability, ductility and lustre in one model.",
        "Metallic bonding is a distinct corner of the ionic–covalent–metallic continuum, not a special case of either.",
      ]} />
    </ChemBondPartShell>
  );
}
