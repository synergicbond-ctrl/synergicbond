import { ChemBondPartShell, ImportantNote, LearningObjectives, NoteBlock, PracticeQuestion, SummaryStrip, TrapCallout } from "./_shared";

export default function Part01() {
  return (
    <ChemBondPartShell part={1} title="Why Atoms Bond — Kössel–Lewis & the Octet Rule">
      <LearningObjectives items={[
        "Explain why the potential-energy curve of two approaching atoms has a minimum at the bond length.",
        "State the Kössel–Lewis picture of ionic and covalent bond formation.",
        "Write Lewis symbols and apply the octet rule.",
        "Classify a molecule as incomplete-octet, expanded-octet or odd-electron, with the correct exception in each case.",
      ]} />

      <NoteBlock title="The energetics of bond formation">
        <p>As two atoms approach, attractive forces (nucleus–electron) and repulsive forces (nucleus–nucleus, electron–electron) both grow, but at different rates. Potential energy falls as attraction dominates at longer range, reaches a minimum at the equilibrium bond length r₀, then rises steeply as the repulsive wall takes over at very short range.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>The depth of the minimum below the zero-energy (fully separated atoms) reference is the bond dissociation energy.</li>
          <li>A bond exists only if this minimum is a genuine energy well — this is why He₂ (bond order 0 by MOT, Part 10) does not exist as a stable molecule.</li>
        </ul>
      </NoteBlock>

      <NoteBlock title="Kössel–Lewis: two routes to a noble-gas configuration">
        <p>Atoms combine to attain the stable outer-shell configuration of the nearest noble gas — either by complete electron transfer (ionic bond) or by sharing electron pairs (covalent bond). A Lewis symbol shows an element&apos;s valence electrons as dots around its symbol.</p>
        <p>Kössel&apos;s framing: electronegative halogens sit just before a noble gas and electropositive alkali/alkaline-earth metals sit just after one, so electron transfer between them yields ions with noble-gas configurations, held together by electrostatic (Coulombic) attraction — the basis of Part 3&apos;s ionic bonding.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Octet rule: atoms tend to reach eight electrons in the valence shell after bonding (hydrogen and helium reach a duplet, two electrons).</li>
          <li>Ionic valence = electrons gained or lost; covalence = number of shared electron pairs.</li>
        </ul>
      </NoteBlock>

      <NoteBlock title="The three formal exceptions to the octet rule">
        <p>The octet rule is a bookkeeping heuristic, not a law — three classes of well-known molecules break it, and examiners test the classification directly.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong className="text-white">Incomplete octet</strong> — BeH₂ (4 e⁻ on Be), BCl₃/BF₃ (6 e⁻ on B), LiCl. Too few valence electrons on the central atom; these act as Lewis acids (BF₃ accepts a lone pair from NH₃, and — Part 2 — from a fluoride ion&apos;s π donation too).</li>
          <li><strong className="text-white">Expanded octet</strong> — PF₅ (10 e⁻), SF₆ (12 e⁻), H₂SO₄, IF₇. Central atoms from period 3 onward can accommodate more than eight electrons (classically via d-orbital participation; Part 8 flags the modern 3-centre-4-electron alternative).</li>
          <li><strong className="text-white">Odd-electron molecules</strong> — NO has 5 (N) + 6 (O) = <strong className="text-cyan-200">11 valence electrons</strong>; NO₂ has 17. An odd total electron count makes complete pairing on every atom impossible.</li>
        </ul>
        <p className="text-white/60">Noble gases themselves form real compounds too (XeF₂, XeF₄, KrF₂) — a &quot;complete octet&quot; does not guarantee inertness.</p>
      </NoteBlock>

      <TrapCallout
        trap={<>&quot;NO has 15 valence electrons.&quot;</>}
        reality={<>NO has <strong>11 valence electrons</strong> (N: 2s²2p³ = 5, O: 2s²2p⁴ = 6). 15 is the molecule&apos;s <em>total</em> electron count (including both 1s² cores) — a different, unrelated number. Only valence electrons are filled into the MO diagram in Part 10, and 11 electrons there leaves exactly one electron in π*, giving bond order 2.5 and paramagnetism.</>}
      />

      <ImportantNote title="Mnemonic">
        &quot;Be–B break it, P–S–I expand it, N–O odd it&quot; — Incomplete: Be, B · Expanded: P, S, I/halogens · Odd-electron: NO, NO₂.
      </ImportantNote>

      <PracticeQuestion
        prompt="Classify BCl₃, SF₆ and NO as incomplete-octet, expanded-octet or odd-electron, and give each central atom's electron count around it."
        answer="BCl₃: incomplete octet, 6 e⁻ on B. SF₆: expanded octet, 12 e⁻ on S. NO: odd-electron, 11 valence electrons total (not on one atom in the simple sense — the odd electron makes any single Lewis structure fail to satisfy both atoms)."
      />

      <SummaryStrip items={[
        "PE curve minimum at r₀ = the bond; depth = bond dissociation energy.",
        "Ionic = electron transfer, covalent = electron sharing — both chase a noble-gas configuration.",
        "Octet exceptions: Be/B (incomplete) · P/S/halogens (expanded) · NO with 11 valence e⁻, NO₂ with 17 (odd-electron).",
      ]} />
    </ChemBondPartShell>
  );
}
