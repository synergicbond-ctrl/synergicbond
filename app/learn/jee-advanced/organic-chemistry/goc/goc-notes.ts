// General Organic Chemistry (GOC) — the foundational unit every other organic
// chapter (hydrocarbons, haloalkanes, alcohols, carbonyls, amines) is written
// on top of: bond fission, reactive intermediates, electronic effects,
// aromaticity, and acid-base strength in organic systems.
// Directly authored, block-model content matching the pattern used across
// bond-parameters, intermolecular-forces and the University Chemistry unit.

export type GocBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "paragraph";

export type GocBlock = {
  kind: GocBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
};

const sections = [
  "Classifying Organic Reactions and Reagents",
  "Fission of Covalent Bonds: Homolysis and Heterolysis",
  "Carbocations: Structure, Stability and Rearrangements",
  "Carbanions, Free Radicals, Carbenes and Nitrenes",
  "Inductive Effect",
  "Resonance (Mesomeric Effect)",
  "Hyperconjugation",
  "Electromeric Effect",
  "Aromaticity: Huckel's Rule",
  "Acidity and Basicity in Organic Systems",
  "JEE Advanced Question Bank",
];

export const gocChapterMap: string[] = [...sections];

function major(n: number): GocBlock {
  return { kind: "major", text: `Section ${n} - ${sections[n - 1]}` };
}
function sub(text: string): GocBlock {
  return { kind: "subheading", text };
}
function p(text: string): GocBlock {
  return { kind: "paragraph", text };
}
function callout(label: string, text: string): GocBlock {
  return { kind: "callout", text: `${label}: ${text}` };
}
function bullets(items: string[]): GocBlock {
  return { kind: "bullets", items };
}
function numbered(items: string[]): GocBlock {
  return { kind: "numbered", items };
}
function table(headers: string[], rows: string[][]): GocBlock {
  return { kind: "table", headers, rows };
}
function formula(text: string, formulaLabel?: string): GocBlock {
  return { kind: "formula", text, formulaLabel };
}

export const gocBlocks: GocBlock[] = [
  // ── Section 1 ─────────────────────────────────────────────────────────────
  major(1),
  p("Almost every organic transformation you will meet in the rest of the course belongs to one of four reaction types. Naming the type correctly before touching a mechanism arrow is the single fastest way to avoid predicting the wrong product."),
  table(
    ["Reaction type", "What happens to the substrate", "Example"],
    [
      ["Substitution (S)", "One atom/group is replaced by another; the carbon skeleton and degree of unsaturation are unchanged.", "CH3-Br + OH- -> CH3-OH + Br-"],
      ["Addition (A)", "Two groups add across a multiple bond; unsaturation decreases.", "CH2=CH2 + Br2 -> CH2Br-CH2Br"],
      ["Elimination (E)", "Two groups leave from adjacent (or the same) atoms, creating a multiple bond; unsaturation increases.", "CH3-CH2-Br + KOH(alc) -> CH2=CH2 + KBr + H2O"],
      ["Rearrangement", "Atoms migrate within the same molecule without changing molecular formula, usually to reach a more stable intermediate.", "1,2-hydride/alkyl shifts in carbocations (Section 3)"],
    ]
  ),
  sub("Nucleophiles and electrophiles"),
  p("A nucleophile ('nucleus-loving') is an electron-rich species that donates an electron pair to form a new bond: anions (OH-, CN-, RO-), neutral molecules with lone pairs (NH3, H2O), and pi bonds (alkenes attacking an electrophile) all act as nucleophiles. An electrophile ('electron-loving') is an electron-deficient species that accepts an electron pair: cations (H+, carbocations, NO2+), neutral electron-deficient atoms (BF3, AlCl3), and polarised multiple bonds (the carbon of C=O) all act as electrophiles."),
  callout("Warning / limitation", "Nucleophilicity and basicity are related but not identical. Basicity is a thermodynamic measure of affinity for a proton (an equilibrium property, measured by pKa). Nucleophilicity is a kinetic measure of the rate of attack on an electrophilic carbon, and it also depends on steric bulk and the solvent. This is why a bulky base like tert-butoxide is a strong base but a comparatively poor nucleophile, and why iodide is a weaker base than fluoride but a far stronger nucleophile in protic solvents."),

  // ── Section 2 ─────────────────────────────────────────────────────────────
  major(2),
  p("A covalent bond can break in exactly two ways, and which way it breaks determines what kind of reactive species forms."),
  table(
    ["Fission type", "How the bonding pair splits", "Species produced", "Favoured by"],
    [
      ["Homolysis (homolytic fission)", "One electron goes to each fragment", "Free radicals (each fragment carries an unpaired electron)", "Non-polar solvents, heat, light (hv), peroxides"],
      ["Heterolysis (heterolytic fission)", "Both electrons go to one fragment", "A cation (electron-poor fragment) and an anion (electron-rich fragment)", "Polar/protic solvents, presence of a strongly electronegative atom"],
    ]
  ),
  formula("A{:}B \\xrightarrow{h\\nu\\ \\text{or}\\ \\Delta} A^{\\bullet} + B^{\\bullet}", "homolysis"),
  formula("A{:}B \\longrightarrow A^{+} + B^{:-}", "heterolysis (B is the more electronegative/stabilising fragment)"),
  callout("Key idea", "Bond dissociation enthalpy (BDE) values quantify homolysis directly and are the reason methyl and primary C-H bonds are harder to break homolytically than tertiary C-H bonds — a tertiary radical is more stable, so less energy is needed to reach it. The same stability ordering (3° > 2° > 1° > methyl) reappears for carbocations in Section 3 and free radicals in Section 4, driven by the same underlying cause: hyperconjugation and inductive electron donation from adjacent alkyl groups."),

  // ── Section 3 ─────────────────────────────────────────────────────────────
  major(3),
  p("A carbocation is a carbon bearing only three bonds and a formal positive charge. The positively charged carbon is sp2 hybridised, planar, with the empty p orbital perpendicular to the plane of the three sigma bonds — this geometry is central to everything that follows, including why carbocations are attacked equally from either face and why adjacent C-H or C-C bonds can donate into the empty orbital."),
  sub("Stability order and why"),
  formula("3^{\\circ} > 2^{\\circ} > 1^{\\circ} > \\text{methyl}"),
  bullets([
    "+I (electron-donating inductive) effect of alkyl groups pushes electron density toward the electron-deficient carbon, partially neutralising the positive charge — more alkyl groups attached, more stabilisation.",
    "Hyperconjugation (Section 7) — sigma(C-H) or sigma(C-C) bonds on carbons adjacent to the cationic centre overlap with the empty p orbital, delocalising positive charge into the alkyl framework. More adjacent C-H bonds (more alpha-hydrogens) means more hyperconjugative structures possible, which is why a tertiary cation (9 alpha C-H) is more stabilised than a primary one (2 alpha C-H, ethyl cation).",
    "Resonance stabilisation is stronger than either effect where available: an allylic or benzylic cation is more stable than even a simple tertiary alkyl cation, because the positive charge is delocalised over multiple carbons through the pi system rather than merely 'shared' through sigma-bond hyperconjugation.",
  ]),
  table(
    ["Cation", "Relative stability", "Reason"],
    [
      ["Triphenylmethyl cation, Ph3C+", "Extremely stable (isolable as a salt)", "Positive charge delocalised into three benzene rings simultaneously"],
      ["Benzylic / allylic cations", "Very stable", "Resonance delocalisation over the pi system"],
      ["Tertiary alkyl (e.g. (CH3)3C+)", "Stable", "Strong +I and maximum hyperconjugation (9 alpha-H)"],
      ["Secondary alkyl", "Moderate", "Fewer alpha-H, less +I contribution"],
      ["Primary alkyl", "Poor, rarely forms", "Minimal hyperconjugation/+I; usually bypassed via rearrangement"],
      ["Vinyl / aryl cation (C+ on sp2 carbon of a double bond or ring)", "Extremely unstable, essentially never forms", "Empty orbital is in the sigma framework (sp2, in-plane), not stabilised by the pi system, and inductively destabilised by the sp2 carbon's higher electronegativity"],
      ["Cation alpha to an electronegative atom (e.g. next to C=O, or -CF3 substituted)", "Destabilised relative to the plain alkyl case", "-I effect of the electronegative group withdraws electron density, intensifying the charge deficiency"],
    ]
  ),
  sub("1,2-shifts: hydride and alkyl rearrangements"),
  p("A less stable carbocation will rearrange to a more stable one whenever a hydrogen or alkyl group on the adjacent carbon can migrate with its bonding electron pair, converting a secondary cation into a tertiary one (or a secondary into a more stable secondary, e.g. relieving ring strain)."),
  formula("\\overset{+}{\\text{C}}H\\!-\\!CH(CH_3)_2 \\ \\xrightarrow{\\text{1,2-hydride shift}}\\ CH_2\\!-\\!\\overset{+}{\\text{C}}(CH_3)_2"),
  callout("JEE trap", "A 1,2-shift happens only when it produces an equally stable or MORE stable cation — students frequently draw a rearrangement that would move a tertiary cation to a secondary one, which does not occur spontaneously. Always check the stability of the product cation against the starting cation before drawing a shift arrow."),

  // ── Section 4 ─────────────────────────────────────────────────────────────
  major(4),
  sub("Carbanions"),
  p("A carbanion carries a lone pair on a (usually) sp3 carbon and a formal negative charge, and is destabilised by exactly the opposite factors that stabilise a carbocation."),
  formula("1^{\\circ} > 2^{\\circ} > 3^{\\circ} \\quad \\text{(carbanion stability, opposite order to carbocations)}"),
  bullets([
    "Electron-withdrawing groups (-I, or resonance-withdrawing like -NO2, -CN, -C=O adjacent to the carbanion) stabilise a carbanion by dispersing the negative charge — exactly reversed from the carbocation case.",
    "Alkyl groups DEstabilise a carbanion (their +I effect intensifies electron density that is already excessive), which is why methyl and primary carbanions are more stable than tertiary ones.",
    "Carbanion stability correlates directly with the s-character of the hybrid orbital holding the lone pair: sp (50% s, as in acetylide, HC≡C:-) > sp2 (33% s, vinyl anion) > sp3 (25% s, alkyl anion) — higher s-character holds the lone pair closer to the nucleus, lowering its energy. This is why the terminal alkyne C-H (pKa about 25) is markedly more acidic than an alkane C-H (pKa about 50).",
  ]),
  sub("Free radicals"),
  p("A free radical has a single unpaired electron on a carbon that is usually best described as a shallow sp3 pyramid rapidly inverting (nearly planar, sp2-like, for stabilised radicals)."),
  formula("3^{\\circ} > 2^{\\circ} > 1^{\\circ} > \\text{methyl} \\quad \\text{(same order as carbocations, same cause: hyperconjugation + resonance)}"),
  p("Benzylic and allylic radicals are similarly stabilised by resonance delocalisation into the adjacent pi system, which is why allylic/benzylic C-H bonds are the preferred sites of radical halogenation (e.g. NBS/allylic bromination)."),
  sub("Carbenes"),
  p("A carbene, :CR2, is a neutral divalent carbon carrying two non-bonding electrons, and exists in two distinct electronic states that behave completely differently:"),
  table(
    ["Carbene type", "Electron arrangement", "Geometry", "Reactivity"],
    [
      ["Singlet carbene", "Both non-bonding electrons paired in one sp2 orbital; empty p orbital", "Bent, ~103 degrees", "Reacts in a single concerted step (e.g. adds to an alkene in one step, giving stereospecific syn addition)"],
      ["Triplet carbene", "Two non-bonding electrons unpaired, one each in two different orbitals (behaves like a diradical)", "More linear, ~130-150 degrees", "Reacts stepwise like a diradical (loses stereospecificity in additions)"],
    ]
  ),
  callout("Key idea", "Dichlorocarbene (:CCl2), generated from chloroform and a strong base, is a singlet carbene stabilised by lone-pair donation from the adjacent chlorine atoms into the empty p orbital — this is why it is generated and used deliberately in the Reimer-Tiemann reaction and in the synthesis of cyclopropane rings via addition to alkenes."),
  sub("Nitrenes"),
  p("A nitrene, :N-R, is the nitrogen analogue of a carbene — a monovalent nitrogen with a lone pair and two non-bonding electrons, generated for example by thermolysis or photolysis of an azide (R-N3 -> R-N: + N2). Nitrenes undergo the same broad reaction classes as carbenes (insertion into C-H bonds, addition to pi bonds) and are the reactive intermediate in the Curtius and Hofmann rearrangements, where the nitrene never truly exists as a free species — migration of the adjacent group happens concertedly as the leaving group departs, avoiding the free nitrene entirely."),

  // ── Section 5 ─────────────────────────────────────────────────────────────
  major(5),
  p("The inductive effect is the permanent, distance-decaying displacement of electron density along a chain of sigma bonds, caused by a difference in electronegativity between two bonded atoms. It operates through sigma bonds only, weakens sharply with distance (negligible beyond the third carbon), and never fully cancels — it is a permanent polarisation of the bonding electrons, not a resonance delocalisation."),
  table(
    ["Effect", "Groups", "Consequence"],
    [
      ["-I (electron withdrawing)", "-NO2 > -CN > -F > -Cl > -Br > -I > -OH > -OR > -COOH > -C6H5 > -H (reference)", "Withdraws electron density toward itself; increases acidity of a nearby -COOH or -OH, destabilises an adjacent carbocation, stabilises an adjacent carbanion"],
      ["+I (electron donating)", "-C(CH3)3 > -CH(CH3)2 > -CH2CH3 > -CH3 > -H (reference)", "Pushes electron density away from itself; stabilises an adjacent carbocation, destabilises an adjacent carbanion, decreases acidity of a nearby -COOH"],
    ]
  ),
  sub("Worked example: inductive effect on acid strength"),
  p("Chloroacetic acid (ClCH2COOH, pKa 2.86) is a markedly stronger acid than acetic acid (CH3COOH, pKa 4.76) because the electronegative chlorine withdraws electron density through the sigma-bond framework, stabilising the conjugate-base carboxylate anion by dispersing its negative charge. Moving the chlorine further away sharply weakens this effect: 3-chloropropanoic acid (Cl-CH2-CH2-COOH) is markedly less acidic than 2-chloropropanoic acid, and a chlorine four carbons away has almost no measurable effect at all — direct evidence that the inductive effect decays quickly with distance rather than acting equally regardless of position."),
  callout("Common trap", "Do not confuse the sign of the inductive effect with the sign of the electromeric/resonance effect for the same group. Halogens are -I (electron withdrawing through sigma bonds) but +M/+R (electron donating by resonance, via lone-pair donation into an adjacent pi system) — this dual character is exactly why halogens deactivate a benzene ring toward electrophilic substitution (net electron-withdrawing, -I dominates the overall electron density) while still being ortho/para-directors (the +R lone-pair donation, when it does act, is regiochemically directed to ortho/para positions). The two effects are evaluated separately and can point in opposite directions on the same substituent."),

  // ── Section 6 ─────────────────────────────────────────────────────────────
  major(6),
  p("Resonance (mesomerism) describes a real molecule, ion or radical whose true electronic structure is a hybrid of two or more Lewis structures (contributing structures) that differ only in the placement of pi electrons or lone pairs — the atomic positions (the sigma skeleton) never change between contributing structures, only where the pi/lone-pair electrons are drawn."),
  sub("Rules for valid contributing structures"),
  numbered([
    "Only pi electrons and lone pairs can move; sigma bonds and atomic positions are fixed in every contributing structure.",
    "All contributing structures must have the same number of paired and unpaired electrons (the same overall spin state).",
    "Contributing structures should have similar energy to contribute significantly; a structure with separated opposite charges, or a structure violating the octet rule, contributes less (is 'higher energy') than a neutral, octet-satisfied structure.",
    "The structure with more covalent bonds and less charge separation is generally the major contributor, and greater delocalisation (more atoms sharing the charge/electron density) increases overall stability of the real hybrid relative to any single contributing structure.",
  ]),
  sub("Worked example: the phenoxide ion"),
  p("The negative charge on phenoxide (C6H5-O-) is not localised on oxygen — resonance delocalises it onto the ortho and para ring carbons as well, through four contributing structures (one with charge on O, three with charge on ring carbon). This delocalisation is precisely why phenol (pKa about 10) is far more acidic than a simple alcohol like ethanol (pKa about 16): the conjugate base is resonance-stabilised in phenol but not in ethanol, where the alkoxide's negative charge has nowhere to delocalise."),
  callout("Key idea", "+M / +R substituents (electron-donating by resonance: -NH2, -OH, -OR, -NHCOR, alkyl via hyperconjugation, halogens weakly) push electron density into a ring or pi system and are ortho/para directors in electrophilic aromatic substitution. -M / -R substituents (electron-withdrawing by resonance: -NO2, -CN, -CHO, -COOH, -SO3H) pull electron density out of the ring and are meta directors. This single classification is the mechanistic reason behind every directing-effect rule memorised for aromatic substitution — it is resonance, not an arbitrary rule."),

  // ── Section 7 ─────────────────────────────────────────────────────────────
  major(7),
  p("Hyperconjugation (also called 'no-bond resonance' or Baker-Nathan effect) is the delocalisation of electron density from a sigma(C-H) or sigma(C-C) bond on a carbon adjacent to a p orbital, a positive charge, an unpaired electron, or a pi system, into that empty/partially-filled orbital or pi system."),
  formula("H_3C\\!-\\!\\overset{+}{\\text{C}}H_2 \\ \\longleftrightarrow\\ H_2C{=}CH_2\\cdots H^{+} \\quad \\text{(a 'no-bond' resonance structure)}"),
  p("The number of hyperconjugative structures possible equals the number of alpha-hydrogens (hydrogens on carbons directly attached to the electron-deficient/pi/radical centre) — more alpha-hydrogens means more stabilisation. This is the quantitative basis for ranking alkene and carbocation stability by substitution pattern."),
  table(
    ["Species", "Alpha-hydrogens", "Relative stability contribution"],
    [
      ["CH3-CH2+ (ethyl cation)", "3 (on the methyl)", "Modest hyperconjugative stabilisation"],
      ["(CH3)2CH+ (isopropyl cation)", "6", "Greater stabilisation"],
      ["(CH3)3C+ (tert-butyl cation)", "9", "Maximum hyperconjugative stabilisation among simple alkyl cations"],
    ]
  ),
  callout("JEE-to-university bridge", "Hyperconjugation also explains why more substituted alkenes are more stable (Zaitsev's rule products are the thermodynamically favoured elimination products): each additional alkyl group on the double-bond carbons supplies more alpha C-H bonds capable of sigma-to-pi* donation into the pi system, lowering the alkene's total energy. The same reasoning that ranks carbocation stability in Section 3 is what ranks alkene stability in the elimination reactions covered later in the Hydrocarbons unit."),

  // ── Section 8 ─────────────────────────────────────────────────────────────
  major(8),
  p("The electromeric effect is a temporary, complete shift of a pi-bonded electron pair to one atom of the bond, triggered only by the approach of an attacking reagent, and it exists only for the instant the reagent is attacking — unlike the permanent inductive effect and the resonance effect, which describe the ground-state (or continuously delocalised) structure of the molecule."),
  table(
    ["Type", "Direction of pi-electron shift", "Example"],
    [
      ["+E effect", "Toward the atom NOT bearing the attacking electrophile (electrons move away from the incoming reagent's attachment point)", "Electrophilic addition of H+ to propene: pi electrons shift toward the terminal carbon, placing the developing positive charge on the more substituted (secondary) carbon — this is the electronic basis of Markovnikov's rule"],
      ["-E effect", "Toward the atom bearing the attacking nucleophile", "Nucleophilic addition to a carbonyl: pi electrons of C=O shift fully onto oxygen as the nucleophile attacks carbon"],
    ]
  ),
  callout("Warning / limitation", "The electromeric effect is invoked only in the presence of an attacking reagent, at the specific instant of attack — it is not a static/ground-state property of the molecule the way inductive and resonance effects are, and it should not be used to explain a molecule's ground-state stability or its spectroscopic properties. It explains regiochemical outcomes of addition reactions (Markovnikov orientation, nucleophilic addition direction), not intrinsic stability."),

  // ── Section 9 ─────────────────────────────────────────────────────────────
  major(9),
  p("Aromaticity is a special, extra stabilisation (beyond what simple conjugation alone would predict) shown by certain fully-conjugated cyclic systems. Huckel's rule sets the precise electron-counting test."),
  sub("Huckel's rule: the four conditions"),
  numbered([
    "The system must be cyclic.",
    "Every atom in the ring must be sp2 hybridised (or sp, in rare cases) and have a p orbital available, so the pi system is fully conjugated all the way around the ring.",
    "The ring must be planar (or very close to planar), so the p orbitals can overlap continuously around the ring.",
    "The ring must contain (4n+2) pi electrons, for n = 0, 1, 2, 3, ... (2, 6, 10, 14, ... pi electrons).",
  ]),
  table(
    ["System", "Pi electrons", "4n+2 satisfied?", "Classification"],
    [
      ["Benzene", "6 (n=1)", "Yes", "Aromatic"],
      ["Cyclopentadienyl anion", "6 (n=1) — the lone pair on the sp3-turned-sp2 carbon joins the pi system", "Yes", "Aromatic"],
      ["Tropylium cation (C7H7+)", "6 (n=1)", "Yes", "Aromatic"],
      ["Cyclopropenyl cation", "2 (n=0)", "Yes", "Aromatic (smallest aromatic system)"],
      ["Cyclobutadiene", "4", "No (4n, not 4n+2)", "Antiaromatic — destabilised relative to an open-chain analogue, and adopts a rectangular (not square) geometry to minimise this destabilisation"],
      ["Cyclooctatetraene (planar, hypothetical)", "8", "No (4n)", "Would be antiaromatic if planar; the real molecule avoids this entirely by puckering into a non-planar 'tub' shape, breaking conjugation and behaving as a simple polyene instead"],
      ["Cycloheptatriene (has one sp3 CH2)", "6 in the ring pi system, but ring is not fully conjugated", "Condition 2 fails", "Non-aromatic (not antiaromatic — merely lacks full conjugation)"],
    ]
  ),
  callout("Key idea", "Antiaromatic is not simply 'less stable than aromatic' — it means destabilised relative to the equivalent open-chain (non-cyclic) conjugated system, because a 4n pi-electron count forces the highest occupied molecular orbital into a degenerate, singly-occupied (diradical-like) configuration. Non-aromatic systems (failing conditions 1-3, e.g. not cyclic, not fully conjugated, or not planar) show neither the extra stabilisation of aromaticity nor the extra destabilisation of antiaromaticity — they behave as ordinary alkenes/polyenes."),

  // ── Section 10 ─────────────────────────────────────────────────────────────
  major(10),
  p("Comparing the acidity or basicity of two organic species means comparing the stability of the conjugate base (for acidity) or the availability and stabilisation of the lone pair (for basicity) — every electronic effect from Sections 5-8 feeds directly into this comparison."),
  sub("Acidity trends"),
  bullets([
    "Across a row/among similar functional groups, more resonance delocalisation of the conjugate base's negative charge means a stronger acid: carboxylic acid (pKa ~4-5, conjugate base delocalised over two equivalent oxygens) is far more acidic than phenol (pKa ~10, delocalised into the ring but less effectively than the symmetric carboxylate) which is far more acidic than a simple alcohol (pKa ~16-18, no delocalisation at all).",
    "Electron-withdrawing substituents on the ring or chain increase acidity (stabilise the conjugate base via -I and/or -M); electron-donating substituents decrease it. p-nitrophenol (pKa ~7.2) is far more acidic than phenol (pKa ~10) because the para-nitro group both withdraws inductively and — critically — can directly delocalise the developing negative charge through resonance onto its own oxygens, a stabilisation only available from the ortho/para positions, not meta.",
    "Increasing s-character at the acidic C-H (Section 4) increases acidity: terminal alkyne C-H (sp, pKa ~25) > alkene C-H (sp2, pKa ~44) > alkane C-H (sp3, pKa ~50).",
  ]),
  sub("Basicity trends among amines (gas phase vs aqueous, a classic JEE trap)"),
  p("In the gas phase, basicity of amines follows the expected +I trend: tertiary > secondary > primary > ammonia, because each added alkyl group donates electron density and stabilises the resulting ammonium cation. In aqueous solution, this order is disrupted by two competing factors working in opposite directions: +I alkyl donation (favours more substitution) versus steric hindrance to solvation of the resulting cation, and the number of N-H bonds available for stabilising hydrogen bonding to water (favours less substitution)."),
  table(
    ["Amine (aqueous, typical order for simple alkyl amines)", "Relative base strength"],
    [
      ["Secondary (R2NH)", "Highest — best balance of +I donation and solvation"],
      ["Primary (RNH2)", "High — well solvated (two N-H bonds for H-bonding), weaker +I than secondary/tertiary"],
      ["Tertiary (R3N)", "Lower than expected from +I alone — poorly solvated due to steric hindrance around nitrogen"],
      ["Ammonia (NH3)", "Lowest among this set — no alkyl +I donation at all"],
    ]
  ),
  callout("Warning / limitation", "This aqueous ordering (2° > 1° > 3° > NH3) is the commonly quoted rule for simple small alkyl amines like methylamine/dimethylamine/trimethylamine, but it is an empirical balance of two competing effects, not a fixed law — the exact order can shift with bulkier alkyl groups (where steric hindrance to solvation dominates even more strongly) or in aprotic solvents (where solvation effects vanish and the gas-phase +I-only order, 3° > 2° > 1°, is restored). Always state which phase/solvent the comparison applies to before committing to an order."),
  p("Aromatic amines (anilines) are markedly weaker bases than any alkyl amine, because the nitrogen lone pair is delocalised into the aromatic ring by resonance, making it far less available to accept a proton — the same resonance that makes phenol acidic makes aniline a weak base. Electron-withdrawing ring substituents (e.g. p-nitroaniline) weaken this basicity further by pulling still more electron density out of the already-delocalised lone pair; electron-donating ring substituents (e.g. p-methylaniline) partially restore it."),

  // ── Section 11 ─────────────────────────────────────────────────────────────
  major(11),
  sub("Q1 (JEE Advanced pattern — rank order)"),
  p("Arrange the following carbocations in decreasing order of stability: (I) CH3-CH2+ (ethyl), (II) (C6H5)3C+ (triphenylmethyl), (III) CH2=CH-CH2+ (allyl), (IV) (CH3)3C+ (tert-butyl)."),
  callout("Answer", "II > III > IV > I. Triphenylmethyl delocalises the positive charge over three separate aromatic rings simultaneously (the most extensive delocalisation available here); allyl is resonance-stabilised over two carbons; tert-butyl has only hyperconjugative (sigma-bond) stabilisation with no resonance; ethyl has the least hyperconjugative stabilisation of the four (fewest alpha-hydrogens)."),
  sub("Q2 (JEE Advanced pattern — multiple correct)"),
  p("Which of the following statements about hyperconjugation are correct? (A) It requires a C-H or C-C sigma bond adjacent to a p orbital, positive charge, or pi system. (B) The number of possible hyperconjugative structures equals the number of alpha-hydrogens. (C) It operates through space, independent of bond connectivity, like the inductive effect. (D) It contributes to the greater stability of more substituted alkenes."),
  callout("Answer", "A, B and D are correct. C is false — hyperconjugation is a sigma(C-H)/sigma(C-C) to empty-orbital/pi-system OVERLAP, which requires the correct adjacent bond connectivity (it is a through-bond, orbital-overlap phenomenon), not a through-space effect like induction is sometimes loosely described."),
  sub("Q3 (JEE Advanced pattern — reasoning/assertion style)"),
  p("Explain why para-nitrophenol is a much stronger acid than meta-nitrophenol, even though both have exactly one nitro substituent on the ring."),
  callout("Answer", "Both isomers benefit from the -I (inductive, through-sigma-bond) withdrawal of the nitro group, which is roughly comparable at similar ring distances for ortho/meta/para. But only the ortho and para nitro groups can directly conjugate with the developing negative charge on the phenoxide oxygen through the pi system — draw the resonance structures of para-nitrophenoxide and the negative charge can be pushed all the way onto an oxygen of the nitro group itself, a resonance structure unavailable from the meta position (meta substituents cannot resonance-delocalise with the ring oxygen's charge; only their inductive effect operates). This additional resonance (-M) stabilisation is why para-nitrophenol (pKa ~7.2) is dramatically more acidic than meta-nitrophenol (pKa ~8.4), despite similar inductive contributions."),
  sub("Q4 (JEE Advanced pattern — numerical/counting)"),
  p("How many pi electrons are present in the aromatic pi system of the cyclopentadienyl anion, and why does Huckel's rule classify it as aromatic despite one ring carbon being formally sp3 in a naive drawing?"),
  callout("Answer", "6 pi electrons (n=1 in 4n+2). Every ring carbon is actually sp2 in the real anion, including the carbon that would look 'sp3' if you only considered the carbanion lone pair in isolation — that lone pair occupies a p orbital (not an sp3 hybrid) so it can conjugate with the rest of the ring, contributing 2 electrons to the cyclic pi system alongside the 4 pi electrons already present in the two original double bonds of cyclopentadiene, giving 6 total and satisfying planarity, full conjugation, and the 4n+2 count simultaneously."),
];
