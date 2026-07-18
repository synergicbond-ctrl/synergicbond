import { VseprGallery } from "@/components/premiumNotes/visuals/chemicalBonding";
import { ChemBondPartShell, DiagramBox, ImportantNote, LearningObjectives, NoteBlock, PracticeQuestion, SummaryStrip, TrapCallout, WorkedExample } from "./_shared";

export default function Part09() {
  return (
    <ChemBondPartShell part={9} title="VSEPR Theory — Shapes of Molecules">
      <LearningObjectives items={[
        "Count electron pairs and derive parent geometry, then apply lone-pair distortions.",
        "Predict the shape and approximate bond angles of ClF₃, SF₄, XeF₂ and related hypervalent species.",
        "State why XeF₆ is treated as a qualified exception, not an ideal octahedron.",
        "Rank bond-angle compression across CH₄ → NH₃ → H₂O and explain electronegativity-driven angle shifts.",
      ]} />

      <NoteBlock title="The counting game">
        <p>Count the electron pairs (σ-bond pairs + lone pairs) around the central atom; they arrange to maximise mutual separation. Bond pairs define the observed SHAPE; lone pairs occupy geometric positions but are invisible in the shape&apos;s name.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>2 pairs → linear (BeCl₂) · 3 → trigonal planar (BF₃) · 4 → tetrahedral (CH₄) · 5 → trigonal bipyramidal (PCl₅) · 6 → octahedral (SF₆).</li>
          <li>In a trigonal bipyramid, lone pairs ALWAYS occupy equatorial positions (fewer close 90° neighbours).</li>
          <li>In an octahedron, two lone pairs sit trans (opposite each other) — this is why XeF₄ is square planar, not see-saw-like.</li>
        </ul>
        <DiagramBox title="The AXₙEₘ shape gallery"><VseprGallery /></DiagramBox>
      </NoteBlock>

      <NoteBlock title="Lone-pair distortions">
        <ul className="list-disc space-y-1 pl-5">
          <li>Repulsion order: lone pair–lone pair &gt; lone pair–bond pair &gt; bond pair–bond pair (a lone pair hugs its own nucleus and spreads wider).</li>
          <li>Bond-angle staircase: CH₄ 109.5° → NH₃ ~107° (one lone pair squeezes) → H₂O ~104.5° (two lone pairs squeeze harder).</li>
          <li>More electronegative surrounding atoms pull bond pairs away from the central atom, shrinking angles further: NH₃ (107°) &gt; NF₃ (~102°); PI₃ &gt; PBr₃ &gt; PCl₃ &gt; PF₃.</li>
        </ul>
      </NoteBlock>

      <WorkedExample title="Predict the shape and bond angles of ClF₃">
        <p>Cl has 7 valence electrons; three Cl–F bonds use 3, leaving 4 as two lone pairs. Total 5 electron pairs → trigonal bipyramidal parent. Both lone pairs go equatorial (each then faces only two 90° neighbours instead of three).</p>
        <p>Remaining positions: 2 axial F + 1 equatorial F → <strong className="text-emerald-300">T-shape</strong>. The axial F–Cl–F angle bends slightly toward the equatorial F: about <strong>87.5°</strong> instead of the ideal 90°, as both lone pairs push the axial bonds away.</p>
      </WorkedExample>

      <NoteBlock title="The rest of the hypervalent gallery">
        <ul className="list-disc space-y-1 pl-5">
          <li>SF₄ (AX₄E, 5 pairs): see-saw, lone pair equatorial; axial–equatorial angles compress toward ~173°/102°.</li>
          <li>XeF₂ (AX₂E₃, 5 pairs): all three lone pairs equatorial → the two F sit axial → perfectly linear, not bent like H₂O.</li>
          <li>SF₆ (AX₆, 6 pairs): regular octahedral, no lone pairs.</li>
          <li>IF₅ (AX₅E, 6 pairs): square pyramidal — the single lone pair (trans to the apical F) pushes the four basal F atoms away from itself, up toward the apical F, so apical–basal F–I–F angles compress to ≈81.9°, with I sitting slightly below the basal plane.</li>
          <li>IF₇ (AX₇, 7 pairs): pentagonal bipyramidal.</li>
          <li>I₃⁻, ICl₂⁻ (AX₂E₃, 5 pairs): linear, same reasoning as XeF₂.</li>
        </ul>
      </NoteBlock>

      <TrapCallout
        trap={<>&quot;SF₄ is tetrahedral — it has four bonds.&quot;</>}
        reality={<>SF₄ has five electron pairs (4 bond pairs + 1 lone pair): the parent geometry is trigonal bipyramidal, and the observed shape is see-saw with the lone pair equatorial — not tetrahedral.</>}
      />

      <ImportantNote title="XeF₆ — a qualified exception, not an ideal octahedron">
        XeF₆ has 7 electron pairs (6 bond pairs + 1 lone pair) and is treated as distorted/fluxional: the lone pair is stereochemically active but delocalised rather than occupying one fixed position, unlike the genuinely lone-pair-inactive octahedral complexes [SbCl₆]³⁻ or [TeCl₆]²⁻. Do not describe XeF₆ as a simple ideal octahedron.
      </ImportantNote>

      <PracticeQuestion
        prompt="Rationalise the bond-angle order Cl₂O (~111°) > H₂O (~104.5°) > OF₂ (~103°)."
        answer="In OF₂, fluorine pulls the bond pairs away from O, so they repel each other less at O and the angle closes below H₂O's. In Cl₂O, the bond pairs sit closer to O than in H₂O (Cl is less electronegative than O) and the bulky Cl atoms add steric crowding, opening the angle past the tetrahedral-squeeze value — two competing effects giving one clean ranking."
      />

      <SummaryStrip items={[
        "Count σ-pairs + lone pairs → parent geometry; lone pairs go equatorial (trigonal bipyramidal) or trans (octahedral).",
        "Repulsion lp–lp > lp–bp > bp–bp gives the 109.5° → 107° → 104.5° staircase.",
        "Shape names to memorise: see-saw (SF₄), T-shape (ClF₃), square pyramidal (IF₅), linear (XeF₂/I₃⁻); XeF₆ is a fluxional exception, not an ideal octahedron.",
      ]} />
    </ChemBondPartShell>
  );
}
