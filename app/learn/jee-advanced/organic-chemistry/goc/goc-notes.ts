// General Organic Chemistry (GOC) — the foundational unit every other organic
// chapter builds on. Massively expanded with worked mechanisms, derivations,
// and a 25-question JEE Advanced/NEET question bank covering every topic.

import {
  ALLYL_RESONANCE,
  CARBOCATION_STRUCTURE,
  HUCKEL_BENZENE,
  HYPERCONJUGATION_OVERLAP,
} from "./goc-structures";

export type GocBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "figure"
  | "paragraph";

export type GocBlock = {
  kind: GocBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
  svg?: string;
  caption?: string;
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
function figure(svg: string, caption: string): GocBlock {
  return { kind: "figure", svg, caption };
}

export const gocBlocks: GocBlock[] = [

  // ── Section 1 ─────────────────────────────────────────────────────────────
  major(1),
  p("Almost every organic transformation you will meet belongs to one of four reaction types. Naming the type correctly before drawing a single mechanism arrow is the fastest way to avoid predicting the wrong product."),
  table(
    ["Reaction type", "What happens to the substrate", "Bond change", "Example"],
    [
      ["Substitution (S)", "One atom/group replaced by another; skeleton and unsaturation unchanged.", "One bond broken, one formed — net zero change in degree of unsaturation.", "CH3Br + OH- → CH3OH + Br-"],
      ["Addition (A)", "Two groups add across a multiple bond; unsaturation decreases.", "Pi bond broken, two sigma bonds formed.", "CH2=CH2 + Br2 → CH2Br-CH2Br"],
      ["Elimination (E)", "Two groups leave from adjacent atoms, creating a pi bond; unsaturation increases.", "Two sigma bonds broken, one pi bond formed.", "CH3CH2Br + KOH(alc) → CH2=CH2 + KBr + H2O"],
      ["Rearrangement", "Atoms migrate within the molecule without changing molecular formula.", "A sigma bond breaks and re-forms to a new atom.", "1,2-hydride or alkyl shift in SN1 intermediates (Section 3)"],
    ]
  ),
  sub("Nucleophiles and electrophiles — a precise definition"),
  p("A nucleophile ('nucleus-loving') donates an electron pair to form a new bond. The attack is always at an electron-deficient atom. Nucleophiles include anions (OH-, CN-, RO-, RS-, X-), neutral molecules with lone pairs (NH3, H2O, R2S), and pi bonds acting as electron donors (alkenes attacking Br2). An electrophile ('electron-loving') accepts an electron pair. Electrophiles include cations (H+, NO2+, carbocations), Lewis acids with empty orbitals (BF3, AlCl3, FeBr3), and polar multiple bonds whose carbon is electron-deficient (C=O, C-X where X is electronegative)."),
  sub("Nucleophilicity vs basicity — the critical distinction"),
  p("Both nucleophilicity and basicity involve donation of a lone pair. But basicity is a thermodynamic equilibrium property (measured by pKa of the conjugate acid), while nucleophilicity is a kinetic property (rate of attack on a carbon electrophile under specific conditions). They track together within a period but diverge badly across periods. In the same period: basicity and nucleophilicity parallel each other (F- is more basic and more nucleophilic than Cl- within the same period). Across periods: nucleophilicity is dominated by polarisability and desolvation energy — in protic solvents, I- is far more nucleophilic than F- despite being a weaker base, because F- is tightly solvated (its negative charge is concentrated on a small atom, so water molecules cling strongly), making it slow to attack carbon. I- is large, polarisable, easily strips off its solvation shell, and reaches the electrophile fast."),
  table(
    ["Species", "Relative basicity (pKa of conjugate acid)", "Relative nucleophilicity (protic solvent, SN2 on carbon)", "Reason for divergence"],
    [
      ["F-", "~3.2 (HF, weak acid, so F- is relatively basic)", "Poorest of the halides", "Tiny, hard, tightly solvated — cannot shed water molecules fast enough"],
      ["Cl-", "~-7 (HCl is strong acid, Cl- is weak base)", "Moderate", "Some balance of polarisability and size"],
      ["Br-", "~-9", "Good", "Larger, more polarisable, less tightly solvated"],
      ["I-", "~-10 (HI, strongest hydrohalic acid)", "Best of the halides", "Largest, most polarisable, easiest to desolvate — fastest to reach carbon"],
    ]
  ),
  callout("Warning / limitation", "Nucleophilicity and basicity are related but not identical. Basicity is a thermodynamic measure of affinity for a proton (equilibrium). Nucleophilicity is a kinetic measure of attack rate on carbon, dependent on polarisability, solvation, and steric bulk. Iodide is a weaker base than fluoride but a far stronger nucleophile in protic solvents — the single most commonly confused pair in JEE problem sets."),
  sub("Worked mechanism: SN2 backside attack (bimolecular substitution)"),
  p("Take the reaction of bromomethane with hydroxide ion. The nucleophile approaches from the back — exactly 180 degrees from the leaving group — while the leaving group departs from the front. The two events happen simultaneously (hence 'bimolecular' and 'concerted')."),
  formula("HO^{-} + CH_3Br \\xrightarrow{\\text{backside attack}} [HO{\\cdots}CH_3{\\cdots}Br]^{\\ddagger} \\longrightarrow HO{-}CH_3 + Br^{-}", "SN2 transition state"),
  p("At the transition state, the carbon is pentacoordinate (five partial bonds), trigonal bipyramidal, and the three H atoms have already begun to invert like an umbrella flipping in the wind — this Walden inversion is the stereochemical fingerprint of SN2. The rate law is: rate = k[substrate][nucleophile]. The rate is sensitive to steric bulk at the carbon being attacked: methyl > primary > secondary; tertiary compounds do not react by SN2 because a bulky nucleophile cannot reach the back face when three large groups are blocking it."),
  callout("Key idea", "Every SN2 reaction produces inversion of configuration at the attacked carbon. If you see a reaction where (R)-substrate gives (S)-product with no intermediate, the mechanism is SN2. If retention or racemisation is observed, something else is happening — SN1 (forms planar carbocation, attacked from both faces) or neighbouring-group participation."),

  // ── Section 2 ─────────────────────────────────────────────────────────────
  major(2),
  p("A covalent bond can break in exactly two ways, and which way it breaks determines what reactive species forms and therefore what chemistry follows."),
  table(
    ["Fission type", "How the bonding pair splits", "Species produced", "Favoured by"],
    [
      ["Homolysis (homolytic fission)", "One electron goes to each fragment (symmetrical)", "Free radicals — each fragment carries one unpaired electron", "Non-polar solvents, heat (Δ), UV light (hν), initiators such as ROOR (peroxides), AIBN"],
      ["Heterolysis (heterolytic fission)", "Both electrons go to one fragment (asymmetrical)", "A cation (electron-poor fragment) and anion (electron-rich fragment)", "Polar/protic solvents, ionising conditions, strongly electronegative leaving groups"],
    ]
  ),
  formula("A{:}B \\xrightarrow{h\\nu\\ \\text{or}\\ \\Delta} A^{\\bullet} + B^{\\bullet}", "homolysis — one electron each"),
  formula("A{:}B \\longrightarrow A^{+} + {^{:-}B}", "heterolysis — both electrons to B"),
  sub("Full worked mechanism: radical chain chlorination of methane"),
  p("Radical chlorination of methane illustrates all three stages of a chain mechanism. This is the prototype for all radical substitutions you will encounter (NBS bromination, autoxidation, polymerisation initiators)."),
  numbered([
    "Initiation — Cl2 absorbs a photon or sufficient thermal energy to break the Cl-Cl bond homolytically. Bond dissociation enthalpy (BDE) of Cl-Cl = 243 kJ/mol. One chlorine radical is produced per photon: Cl2 + hν → 2 Cl•. This step is slow (requires energy input) and produces the chain-carrying species.",
    "Propagation step 1 — Cl• abstracts a hydrogen from methane, breaking a C-H bond (BDE = 439 kJ/mol) homolytically and forming HCl (BDE = 432 kJ/mol). Net enthalpy of this step = 439 - 432 = +7 kJ/mol (slightly endothermic, but the chain continues): CH4 + Cl• → CH3• + HCl.",
    "Propagation step 2 — The methyl radical attacks Cl2, breaking the Cl-Cl bond (BDE = 243 kJ/mol) and forming CH3Cl (BDE of C-Cl = 351 kJ/mol). Net enthalpy of this step = 243 - 351 = -108 kJ/mol (strongly exothermic). Overall chain enthalpy per cycle = +7 + (-108) = -101 kJ/mol: CH3• + Cl2 → CH3Cl + Cl•. The Cl• regenerated re-enters propagation step 1, so a single initiation event can drive thousands of turnovers.",
    "Termination — Any two radical species combine to end the chain. Three possible termination steps: Cl• + Cl• → Cl2; CH3• + Cl• → CH3Cl; CH3• + CH3• → C2H6. These steps form no new radicals, so they end the chain. The first product (CH3Cl) is the target, but the third (ethane) is an unavoidable side product of radical halogenation — always detected in small amounts.",
  ]),
  callout("Key idea", "Bond dissociation enthalpy (BDE) values quantify homolysis directly and are the reason methyl and primary C-H bonds (higher BDE) are harder to break homolytically than tertiary C-H bonds — a tertiary radical is more stable, so less energy is needed to reach it. The same stability ordering (3° > 2° > 1° > methyl) reappears for carbocations and free radicals throughout Sections 3 and 4."),
  sub("Selectivity: why Br• is more selective than Cl•"),
  p("In radical halogenation of propane (CH3-CH2-CH3), both primary (6H) and secondary (2H) C-H bonds are available. Statistical expectation: the ratio of 1° to 2° attack is 6:2 = 3:1. Observed with Cl•: about 43% 1-chloropropane and 57% 2-chloropropane, giving a per-hydrogen selectivity ratio of about 3.9:1 (2° over 1°). Observed with Br•: about 3% 1-bromopropane and 97% 2-bromopropane, giving a per-hydrogen selectivity ratio of about 97:1. Why? Because the Br-abstraction step is more endothermic (BDE of H-Br = 366 kJ/mol vs H-Cl = 432 kJ/mol), so the transition state for Br• is later on the reaction coordinate — it resembles the product radical more closely (Hammond postulate), and therefore the more stable (secondary) radical has a much larger rate advantage. Cl•, whose abstraction step is nearly thermoneutral, has an early transition state resembling the reactant — all C-H bonds look nearly equivalent to it, so it is much less selective."),

  // ── Section 3 ─────────────────────────────────────────────────────────────
  major(3),
  p("A carbocation is a carbon bearing only three bonds and a formal positive charge. The positively charged carbon is sp2 hybridised, planar, with the empty p orbital perpendicular to the plane of the three sigma bonds — this geometry is central to everything that follows, including why carbocations are attacked equally from either face, and why adjacent C-H or C-C bonds can donate into the empty orbital."),
  figure(CARBOCATION_STRUCTURE, "tert-Butyl cation: the three methyl groups lie in one sp2 plane; the empty p orbital sits perpendicular to it, open to attack from either face."),
  sub("Stability order and its derivation from first principles"),
  formula("3^{\\circ} > 2^{\\circ} > 1^{\\circ} > \\text{methyl} \\quad \\text{(carbocation stability)}"),
  p("This ranking follows directly from two effects acting simultaneously in the same direction. First, the inductive +I effect: each alkyl group attached to the cationic carbon is more electron-rich than a hydrogen, and pushes electron density toward the electron-deficient carbon through sigma bonds, partially neutralising the positive charge. More alkyl groups = more +I donation = more stabilisation. Second, hyperconjugation (quantified precisely in Section 7): sigma(C-H) bonds on adjacent carbons (alpha carbons) can donate electron density into the empty p orbital by orbital overlap. The tertiary carbocation (e.g., tert-butyl) has nine alpha-hydrogens across three methyl groups, giving nine hyperconjugative structures. The secondary cation has at most six, the primary at most two or three, and the methyl cation zero (no adjacent C-H bonds at all, hence maximally unstable)."),
  bullets([
    "+I (electron-donating inductive) effect of alkyl groups pushes electron density toward the electron-deficient carbon — more alkyl groups attached means more stabilisation.",
    "Hyperconjugation — sigma(C-H) or sigma(C-C) bonds on adjacent carbons overlap with the empty p orbital, delocalising positive charge into the alkyl framework. More adjacent C-H bonds (more alpha-hydrogens) means more hyperconjugative structures and more stabilisation.",
    "Resonance stabilisation is stronger than either inductive or hyperconjugative effect where available: an allylic or benzylic cation delocalises the positive charge over multiple carbons through the pi system — more extensive delocalisation, deeper stabilisation.",
  ]),
  figure(ALLYL_RESONANCE, "The allyl cation's positive charge and pi bond swap ends between the two contributing structures; the real molecule is the resonance hybrid, with charge shared over both terminal carbons."),
  table(
    ["Cation type", "Relative stability", "Key reason"],
    [
      ["(C6H5)3C+ (triphenylmethyl)", "Extremely stable — isolable as a salt (e.g., Ph3C+ BF4-)", "Positive charge delocalised into three separate aromatic rings simultaneously — the most extensive possible delocalisation"],
      ["Benzylic / allylic", "Very stable", "Resonance delocalisation over the pi system; charge spread over 2 or more carbons"],
      ["(CH3)3C+ (tert-butyl)", "Stable — common SN1 intermediate", "9 alpha-H for hyperconjugation; strong +I from three methyl groups"],
      ["(CH3)2CH+ (isopropyl)", "Moderate", "6 alpha-H; moderate +I"],
      ["CH3CH2+ (ethyl, primary)", "Poor — rarely formed as a true free intermediate", "3 alpha-H only; weak +I from one methyl"],
      ["CH3+ (methyl)", "Extremely unstable — essentially never a free intermediate", "Zero alpha-H; zero +I donation"],
      ["CH2=CH+ (vinyl)", "More unstable than methyl cation", "Empty orbital is in the sigma plane (sp2 carbon), not stabilised by the adjacent pi system at all; higher effective electronegativity of sp2 carbon withdraws further"],
      ["Cation alpha to C=O or CF3", "Destabilised relative to simple alkyl", "Adjacent -I/−M group intensifies the positive charge deficiency"],
    ]
  ),
  sub("Full worked mechanism: SN1 with rearrangement — neopentyl system"),
  p("The classic demonstration that carbocation rearrangements are real: the solvolysis of neopentyl bromide, (CH3)3C-CH2-Br. The direct SN1 pathway would give a primary cation, (CH3)3C-CH2+, which is primary and therefore extremely unstable. Instead, a 1,2-methyl shift occurs essentially as the leaving group departs — before the primary cation truly forms as a discrete species — giving the tertiary tert-butyl cation directly."),
  numbered([
    "Ionisation (rate-determining step): (CH3)3C-CH2-Br → [(CH3)3C-CH2+ ··· Br-]‡. The Br leaves heterolytically. The incipient primary cation immediately undergoes a 1,2-methyl shift.",
    "1,2-methyl shift: one of the three methyl groups on the quaternary carbon migrates to the adjacent electron-deficient carbon, taking both electrons of its C-C bond: (CH3)3C-CH2+ → (CH3)2C+-CH2CH3. The carbon that bore the methyl is now tertiary and bears the positive charge — far more stable.",
    "Nucleophilic capture: water (or another nucleophile) attacks the tertiary cation from either face, giving (CH3)2C(OH)-CH2CH3 (2-methylbutan-2-ol) as the main product — NOT the 2,2-dimethylpropan-1-ol that would result from direct attack without rearrangement.",
    "Proton transfer: loss of a proton from the oxonium ion (after water attack) gives the neutral alcohol product.",
  ]),
  callout("JEE trap", "A 1,2-shift happens only when it produces an equal or MORE stable cation. Students frequently draw a rearrangement that would move a tertiary cation to a secondary one — that does not occur spontaneously. Always verify: is the product cation equal to or more stable than the starting cation? If not, no rearrangement. Also, draw the migration arrow going from the adjacent carbon's bond TO the cationic centre — the group migrates with its bonding pair to the electron-deficient atom."),
  sub("Pinacol rearrangement — a 1,2-alkyl shift in a diol"),
  p("Treatment of pinacol (2,3-dimethyl-2,3-butanediol, (CH3)2C(OH)-C(OH)(CH3)2) with dilute acid gives pinacolone (3,3-dimethylbutan-2-one, (CH3)3C-CO-CH3). Mechanism:"),
  numbered([
    "Protonation of one hydroxyl group: one -OH becomes -OH2+.",
    "Departure of water: the protonated OH leaves, generating a tertiary carbocation adjacent to the remaining -OH group: (CH3)2C+-C(OH)(CH3)2.",
    "1,2-methyl shift: one methyl from the carbon bearing -OH migrates to the adjacent cationic carbon, simultaneously giving the oxocarbenium ion (CH3)3C-C+(OH)CH3 = (CH3)3C-C(=OH+)CH3.",
    "Deprotonation: loss of the oxocarbenium proton gives pinacolone. The net result is skeletal rearrangement — a C-C migration driven by converting a poorly stabilised cation (or oxocarbenium) into a highly stabilised one (the resonance-stabilised carbonyl product)."],
  ),
  callout("Key idea", "Rearrangements occur to relieve strain or reach a more stable carbocation. In the pinacol case, the driving force is not just cation stability but the formation of a thermodynamically very stable carbonyl group (C=O resonance stabilisation). Whenever a carbocation is formed adjacent to an OH group, expect 1,2-shift — the resulting oxocarbenium ion leads directly to carbonyl products."),

  // ── Section 4 ─────────────────────────────────────────────────────────────
  major(4),
  sub("Carbanions — stability from first principles"),
  p("A carbanion carries a lone pair on carbon with a formal negative charge. Stability follows exactly the opposite trend to carbocations: anything that disperses the concentrated negative charge stabilises the carbanion."),
  formula("\\text{methyl} > 1^{\\circ} > 2^{\\circ} > 3^{\\circ} \\quad \\text{(carbanion stability — opposite order)}"),
  bullets([
    "Electron-withdrawing groups (-I effect: -NO2, -CN, -C=O, -COOH; or -M: -NO2, -CHO, -COR adjacent to the carbanion) stabilise a carbanion by dispersing the negative charge — the carbanion's lone pair is delocalized toward the withdrawing group. This is exactly the reverse of what stabilises a carbocation.",
    "Alkyl groups DESTABILISE a carbanion (their +I effect intensifies electron density that is already excessive) — which is why methyl and primary carbanions are more stable than tertiary ones, and why the most stabilised carbanions in practice (like the conjugate base of acetylacetone) have multiple electron-withdrawing groups flanking the carbanion carbon.",
    "s-character effect: carbanion stability correlates directly with the s-character of the hybrid orbital holding the lone pair. sp (50% s, acetylide HC≡C:- , pKa ~25) > sp2 (33% s, vinyl anion, pKa ~44) > sp3 (25% s, alkyl anion, pKa ~50). Higher s-character holds the lone pair closer to the nucleus (lower energy), increasing stability and making the C-H bond more acidic.",
    "Resonance stabilisation: where the lone pair can delocalize into an adjacent pi system (enolate: -CH-C=O ↔ C=C-O-), carbanion stability is dramatically increased. Malonyl dianion (from malonic ester) and acetylacetone enolate are the classic examples — the lone pair is delocalized over two C=O groups simultaneously.",
  ]),
  sub("Worked example: why terminal alkynes are more acidic than alkenes or alkanes"),
  p("Terminal alkyne C-H: the carbon is sp hybridised, meaning its bonding orbital is 50% s-character. The more s-character in an orbital, the closer its electron density is to the nucleus — a lone pair in an sp orbital is held very tightly to carbon. When the C-H bond breaks to give the acetylide anion (HC≡C:-), the lone pair sits in a low-energy sp orbital, making the carbanion stable and the equilibrium significantly favourable compared to an sp3 or sp2 carbanion. Numbers: terminal alkyne pKa ≈ 25; alkene (vinylic C-H) pKa ≈ 44; alkane pKa ≈ 50. The difference of about 25 pKa units between alkyne and alkane corresponds to a factor of 10^25 in equilibrium constant — an enormous difference driven entirely by orbital hybridisation."),
  callout("JEE trap", "A common question asks whether the triple bond or the pi bond makes an alkyne more acidic. The correct answer is neither directly — it is the sp hybridisation of the carbon bearing the C-H, which is a consequence of the triple bond structure. Do not say 'pi bonds pull electron density making C-H acidic' — the pi bond in an alkene doesn't make it noticeably more acidic than an alkane. It is s-character of the sigma orbital, not the pi system, that drives alkyne acidity."),
  sub("Free radicals"),
  p("A free radical has a single unpaired electron on a carbon, which is best described as a shallow sp3 pyramid that rapidly inverts (or, for stabilised allylic/benzylic radicals, approaches planar sp2 geometry)."),
  formula("3^{\\circ} > 2^{\\circ} > 1^{\\circ} > \\text{methyl} \\quad \\text{(free radical stability — same order as carbocations)}"),
  p("The reason is the same as for carbocations: hyperconjugation from adjacent C-H sigma bonds into the orbital carrying the unpaired electron, and the +I donation of alkyl groups. However, the effect is smaller in magnitude for radicals than for carbocations, because the radical carbon already has one electron in the p orbital — the interaction with adjacent C-H bonds is between a singly-occupied orbital and a filled sigma bond, which is less stabilising than the interaction between an empty orbital and a filled sigma bond (which dominates for carbocations). This smaller magnitude is why radical selectivity between different C-H bond types is much less pronounced than the selectivity of electrophilic/nucleophilic reactions."),
  sub("Full worked mechanism: NBS (N-bromosuccinimide) allylic bromination"),
  p("NBS selectively brominates the allylic position of an alkene by a radical chain mechanism. The key is that NBS maintains an extremely low concentration of Br2 in solution throughout the reaction — high enough to sustain the chain, but low enough that Br2 addition to the double bond (which requires higher [Br2]) is suppressed. Using cyclohexene as the substrate:"),
  numbered([
    "Initiation: trace Br2 (from NBS hydrolysis) undergoes homolysis (hν or ROOR), giving Br•.",
    "Propagation step 1: Br• abstracts the allylic C-H (BDE ~356 kJ/mol, the weakest C-H in cyclohexene) preferentially over vinylic (BDE ~456 kJ/mol) or sp3 non-allylic (BDE ~410 kJ/mol). This gives the cyclohexenyl radical — a delocalized allylic radical stabilised by resonance over both allylic positions: the radical is at C-3 and C-1 equally by resonance. HBr is the byproduct.",
    "Propagation step 2: the cyclohexenyl radical reacts with Br2 (at the low concentration maintained by NBS), abstracting one Br to give the allylic bromide product (3-bromocyclohexene) and regenerating Br•. The Br• re-enters step 1, sustaining the chain.",
    "Termination: two radical species combine. The succinimide radical (from NBS) can also combine with Br• to regenerate NBS, which is why NBS is such an efficient bromine source.",
  ]),
  callout("Key idea", "NBS works for allylic (and benzylic) bromination because: (a) allylic C-H bonds are the weakest available (the radical formed is resonance-stabilised), so Br• selectively abstracts them; (b) NBS keeps [Br2] too low for addition to the double bond. Replacement of NBS with Cl2 (gas) does not give analogous selective allylic chlorination because Cl• is so reactive and unselective that it attacks all C-H bonds at similar rates (Section 2 selectivity argument)."),
  sub("Carbenes"),
  p("A carbene, :CR2, is a neutral divalent carbon with two non-bonding electrons, existing in two distinct electronic states that behave completely differently in reactions:"),
  table(
    ["Carbene type", "Electron arrangement", "Geometry", "Reactivity and stereospecificity"],
    [
      ["Singlet carbene", "Both non-bonding electrons paired in one sp2 orbital; empty p orbital remains", "Bent, bond angle ~103°", "Concerted: adds to an alkene in one step, giving stereospecific SYN addition — the two new bonds form simultaneously from the same face. Reacts with insertion into C-H bonds in one step."],
      ["Triplet carbene", "Two non-bonding electrons unpaired, one each in two different orbitals (a diradical)", "More linear, bond angle ~130-150°", "Stepwise: adds to an alkene in two steps (one radical bond forms, then rotation, then second bond), losing stereospecificity — gives a mixture of syn and anti adducts (cis + trans cyclopropanes)."],
    ]
  ),
  callout("Key idea", "Dichlorocarbene (:CCl2), generated by treating chloroform with a strong base (CHCl3 + t-BuOK → :CCl2), is a singlet carbene stabilised by lone-pair donation from the two adjacent chlorine atoms into the empty p orbital (back-donation weakens but doesn't eliminate the electrophilic character). It adds to alkenes stereospecifically (syn) to give gem-dichlorocyclopropanes. This is the standard laboratory route to three-membered ring synthesis via carbene cycloaddition."),
  sub("Nitrenes"),
  p("A nitrene, :N-R, is the nitrogen analogue of a carbene — a monovalent nitrogen with an unshared lone pair and two non-bonding electrons, generated by thermolysis or photolysis of an organic azide (R-N3 → R-N: + N2). Nitrenes undergo insertion into C-H bonds and addition to pi bonds, analogous to carbenes. In the Curtius rearrangement (acyl azide → isocyanate) and the Hofmann rearrangement (N-bromamide + base → isocyanate), the nitrene never exists as a truly free species — migration of the adjacent group happens concertedly as the leaving group (N2 or Br-) departs, bypassing the free nitrene entirely. The concerted nature of these migrations is confirmed by the retention of configuration at the migrating carbon."),

  // ── Section 5 ─────────────────────────────────────────────────────────────
  major(5),
  p("The inductive effect is the permanent, distance-decaying displacement of electron density along sigma bonds, caused by electronegativity differences between bonded atoms. It operates exclusively through sigma bonds, weakens sharply with distance (negligible beyond C-3 or C-4), and is a permanent polarisation — it exists in the ground-state molecule and does not require any reagent to arrive."),
  table(
    ["Effect type", "Groups (decreasing strength)", "What it does"],
    [
      ["-I (electron withdrawing through sigma bonds)", "-NO2 > -CN > -F > -Cl > -Br > -I > -OH > -OR > -COOH > -C6H5 > -H (reference)", "Withdraws electron density toward itself; increases acidity of nearby -COOH or -OH; destabilises adjacent carbocations; stabilises adjacent carbanions/anions."],
      ["+I (electron donating through sigma bonds)", "-C(CH3)3 > -CH(CH3)2 > -CH2CH3 > -CH3 > -H (reference)", "Donates electron density away from itself; stabilises adjacent carbocations; destabilises adjacent carbanions; decreases acidity of nearby -COOH."],
    ]
  ),
  sub("Full derivation: inductive effect on acid strength with multiple substituents"),
  p("Acetic acid (CH3COOH): pKa = 4.76. Chloroacetic acid (ClCH2COOH): pKa = 2.86. Dichloroacetic acid (Cl2CHCOOH): pKa = 1.48. Trichloroacetic acid (Cl3CCOOH): pKa = 0.70. The pattern: each successive chlorine substituent on the alpha carbon reduces the pKa by about 1.4-1.5 units, which corresponds to a factor of 25-32 in Ka. The mechanism is additive withdrawal — each Cl independently withdraws electron density through the sigma framework, independently stabilising the carboxylate anion by dispersing its negative charge. The relationship is approximately additive for small numbers of substituents (Hammett-type treatment) but the marginal effect of each additional Cl decreases slightly (the system is not purely linear) because the withdrawal becomes self-limiting as electron density is increasingly removed."),
  p("Distance dependence — direct evidence: 2-chlorobutanoic acid (Cl on the alpha carbon to COOH): pKa ≈ 2.86. 3-chlorobutanoic acid (Cl two carbons from COOH): pKa ≈ 3.98. 4-chlorobutanoic acid (Cl three carbons from COOH): pKa ≈ 4.52. Each carbon inserted between Cl and COOH reduces the acidifying effect by a factor of roughly 2.8. By four carbons of separation, the effect is essentially undetectable. This exponential distance decay is a defining characteristic of the inductive effect and distinguishes it from resonance (which can 'jump' across the ring at ortho/para positions in one step)."),
  callout("Common trap", "Do not confuse the sign of the inductive effect with the sign of the resonance/mesomeric effect for the same group. Halogens are -I (electron withdrawing through sigma bonds) but +M (electron donating by resonance — the halogen lone pair donates into adjacent pi systems). This dual character explains why halogens deactivate a benzene ring overall (net electron-withdrawing: -I dominates for total ring electron density) while still directing electrophiles to ortho and para positions (+M donation is regiochemically directed). Evaluate the two effects separately; they can and do point in opposite directions on the same substituent."),
  sub("Worked example: which is more acidic — p-fluorophenol or p-chlorophenol?"),
  p("Both F and Cl are -I (withdrawing inductively), so both increase phenol's acidity beyond phenol itself. But F has a stronger -I effect than Cl (fluorine is more electronegative). For acidity, the -I effect of the halogen stabilises the phenoxide anion through sigma-bond withdrawal — on this basis alone, p-fluorophenol should be more acidic. However, F also has a stronger +M effect (it donates its lone pair into the ring by resonance more readily than Cl, because the 2p orbital of F matches the ring's p system better than Cl's 3p orbital). The +M of F partly counteracts its -I, so the net acidifying effect of F at the para position is partially offset. Experimentally: pKa of p-fluorophenol ≈ 9.89; pKa of p-chlorophenol ≈ 9.41. The chloro compound is more acidic at the para position, meaning the net effect of the +M counteraction is larger for fluorine (despite its stronger -I) — F's +M is so pronounced at para that it more than compensates for its stronger inductive advantage. This is one of the few cases where comparing two -I groups requires careful separation of their competing effects."),

  // ── Section 6 ─────────────────────────────────────────────────────────────
  major(6),
  p("Resonance (mesomerism) describes a real molecule, ion or radical whose true electronic structure is a hybrid of two or more Lewis structures differing only in the placement of pi electrons or lone pairs — the sigma skeleton (atomic positions) never changes between contributing structures."),
  sub("Rules for drawing valid contributing structures — applied"),
  numbered([
    "Only pi electrons and lone pairs can be moved. Sigma bonds and all atom positions are fixed. An arrow drawn from a sigma bond to create a new pi bond always requires simultaneous breaking of another sigma bond — this is an elimination, not a resonance step. Drawing arrows from sigma bonds in a resonance sequence is the single most common mechanism error.",
    "All contributing structures must have the same number of electrons and the same overall charge. Count electrons in every structure; if they differ, a sigma bond has been broken (not allowed in resonance).",
    "Structures with less charge separation and more covalent bonds are major contributors — they are lower energy and closer to the real molecule's structure. The 'more stable' contributing structure dominates the actual electron distribution.",
    "A contributing structure violating the octet on a second-row element (C, N, O, F) contributes negligibly. Expanding octets is valid for third-row and heavier elements (P, S) but not for C, N, O.",
    "Atoms that are part of the pi system being delocalised must be coplanar (or very close to it) for effective resonance — a twisted system cannot delocalize efficiently.",
  ]),
  sub("Full worked example: resonance in carboxylate vs. alkoxide — why carboxylic acids are stronger than alcohols"),
  p("Acetic acid (pKa 4.76) is about 10^11 times more acidic than ethanol (pKa 16). Both have an O-H bond, so why is the carboxylic acid so much more acidic? The answer is entirely in the stability of the conjugate base."),
  p("Ethoxide (CH3CH2O-): the negative charge is localised on a single oxygen atom. No resonance is possible — there is no adjacent pi system to delocalize into. The negative charge stays on one atom; the conjugate base is not specially stabilised."),
  p("Acetate (CH3COO-): the negative charge is delocalized over both oxygen atoms by resonance. Both C-O bonds become equivalent (1.5-bond order each, confirmed by X-ray crystallography — both C-O bond lengths in acetate are 1.26 Å, intermediate between a C-O single bond at 1.43 Å and a C=O double bond at 1.23 Å). Two contributing structures of equal energy contribute equally: CH3-C(=O)-O- ↔ CH3-C(-O-)-=O. The real acetate is neither — it is the hybrid, with charge distributed over two equivalent oxygens. This charge delocalization stabilises the anion by 21 kJ/mol relative to what it would be without resonance (the 'resonance stabilisation energy'), making the equilibrium for proton loss much more favourable."),
  callout("Key idea", "+M / +R substituents (electron-donating by resonance: -NH2, -OH, -OR, -NHCOR, halogens weakly) push electron density into a ring or pi system and are ortho/para directors in electrophilic aromatic substitution. -M / -R substituents (electron-withdrawing by resonance: -NO2, -CN, -CHO, -COOH, -SO3H) pull electron density out of the ring and are meta directors. This single classification explains every directing-effect rule in aromatic substitution — it is resonance-controlled regiochemistry, not an arbitrary rule."),
  sub("Worked example: why p-nitrophenol is more acidic than m-nitrophenol"),
  p("Both have one -NO2 group and both should be more acidic than phenol by the inductive effect (-I of NO2 operates roughly equally at both positions). The critical difference: the para-NO2 group can additionally delocalize the negative charge of the phenoxide anion directly through the pi system, all the way onto the oxygens of the nitro group. Draw the resonance structures of para-nitrophenoxide: the negative charge can move from the oxygen of the phenol → around the ring → onto the nitrogen → and then onto the oxygens of the NO2 group. This long-range resonance path is only possible from the ortho and para positions, not from meta. For meta-nitrophenoxide, only the inductive pathway operates. Experimentally: p-nitrophenol pKa ≈ 7.15; m-nitrophenol pKa ≈ 8.35; phenol pKa ≈ 9.99. The para compound is 15-fold more acidic than the meta compound (ΔpKa ≈ 1.2 units = factor of ~16 in Ka) — the resonance contribution from the para position, beyond the inductive effect they share, accounts for this difference."),
  sub("Extended resonance: enolate ions and their importance in synthesis"),
  p("The enolate of acetone provides a beautiful example of where resonance understanding predicts reactivity. Acetone (pKa ~20) loses a proton from the alpha carbon to give the enolate. Two contributing structures: C(-O-)=C (carbanion on carbon) ↔ C-O-=C (the negative charge on oxygen). The major contributor places negative charge on oxygen (oxygen is more electronegative and better accommodates negative charge). However, the carbon-contributor structure explains why enolates react at CARBON with electrophiles in synthesis — the C-nucleophilicity of enolates is a direct consequence of the carbon-bearing contributing structure existing in the hybrid, even though it is the minor contributor. This is a general principle: in an ambident nucleophile (one that can react at two sites), the site with the minor resonance contributor often dominates in kinetic reactions with hard electrophiles (O-alkylation vs C-alkylation selectivity in enolate chemistry is controlled exactly this way — a key topic in advanced JEE problems)."),

  // ── Section 7 ─────────────────────────────────────────────────────────────
  major(7),
  p("Hyperconjugation (also called 'no-bond resonance' or Baker-Nathan effect) is the delocalisation of electron density from a sigma(C-H) or sigma(C-C) bond adjacent to a p orbital, a positive charge, an unpaired electron, or a pi system, into that orbital or system. Unlike resonance (which involves pi electrons and lone pairs), hyperconjugation involves sigma electrons — making it the mechanism by which the sigma framework influences the pi system and vice versa."),
  figure(HYPERCONJUGATION_OVERLAP, "An adjacent sigma(C-H) bond overlaps with the empty p orbital, delocalising electron density into it — the structural picture behind 'no-bond resonance.'"),
  formula("H_3C\\!-\\!\\overset{+}{\\text{C}}H_2 \\ \\longleftrightarrow\\ H_2C{=}CH_2\\cdots H^{+} \\quad \\text{('no-bond' resonance structure)}", "hyperconjugation as resonance"),
  p("The number of hyperconjugative structures equals the number of alpha-hydrogens. More alpha-hydrogens means more structures, more delocalisation, more stabilisation. This is the quantitative basis for every stability ranking by substitution pattern."),
  table(
    ["Species", "Alpha-C-H bonds (alpha-hydrogens)", "Hyperconjugative structures", "Relative stabilisation"],
    [
      ["CH3+ (methyl cation)", "0", "0", "None — most unstable simple alkyl cation"],
      ["CH3CH2+ (ethyl cation, 1°)", "3 (on the adjacent CH3)", "3", "Minimal"],
      ["(CH3)2CH+ (isopropyl, 2°)", "6 (on two CH3 groups)", "6", "Moderate"],
      ["(CH3)3C+ (tert-butyl, 3°)", "9 (on three CH3 groups)", "9", "Maximum among simple alkyls"],
    ]
  ),
  sub("Derivation: why more substituted alkenes are more stable (Zaitsev's rule and hyperconjugation)"),
  p("Compare the stability of the four C4 alkenes in order of increasing substitution: 1-butene (CH2=CH-CH2-CH3, monosubstituted) < 2-butene (CH3-CH=CH-CH3, disubstituted, cis and trans) < 2-methylpropene (isobutylene, (CH3)2C=CH2, trisubstituted) — where trans-2-butene is more stable than cis-2-butene by about 4 kJ/mol due to less steric strain."),
  p("Each additional alkyl group on the double bond carbons supplies more alpha C-H bonds that can donate sigma electron density into the pi* antibonding orbital of the double bond (sigma-to-pi* hyperconjugation, stabilising the pi bond) or into the pi bond itself in a formal sense. More alkyl groups = more hyperconjugative donors = more stabilisation. Experimental heats of hydrogenation confirm this: 1-butene: -127 kJ/mol; cis-2-butene: -120 kJ/mol; trans-2-butene: -116 kJ/mol; 2-methylpropene: -119 kJ/mol. The least stable alkene liberates the most heat on hydrogenation (it is highest in energy relative to the product, butane). This directly confirms the stability order more substituted > less substituted."),
  callout("JEE-to-university bridge", "Hyperconjugation also explains Zaitsev's rule — why the more substituted alkene is the thermodynamic product of elimination reactions. The same reasoning that ranks carbocation stability in Section 3 is what ranks alkene stability: more alkyl groups on the double bond = more alpha-H available for sigma-to-pi* donation = lower alkene energy = Zaitsev product. Anti-Zaitsev (Hofmann) elimination happens when a bulky base sterically forces removal of the less hindered, more accessible hydrogen, giving the less substituted alkene kinetically."),
  sub("Bredt's rule — when hyperconjugation and geometry conflict"),
  p("Bridgehead carbocations in small bicyclic systems are extremely unstable because the bridgehead carbon cannot adopt the planar sp2 geometry required to have an empty p orbital perpendicular to the sigma framework — the rigid bicyclic skeleton forces it into a geometry where the empty orbital would be buried inside the ring, unable to overlap with adjacent C-H bonds. This is Bredt's rule: you cannot have a carbocation (or double bond) at a bridgehead in a small bicyclic system. Norbornyl cation (bicyclo[2.2.1]heptyl cation) is the famous exception where extensive non-classical delocalization through the adjacent C-C bond (sigma bridging) compensates for the geometric constraint."),

  // ── Section 8 ─────────────────────────────────────────────────────────────
  major(8),
  p("The electromeric effect is a temporary, complete shift of a pi-bonded electron pair to one atom of the bond, triggered ONLY by the approach of an attacking reagent, lasting only for the instant of attack. It exists only as a transient polarisation in the presence of a reagent — it is not a property of the isolated ground-state molecule. This distinguishes it sharply from inductive (permanent, ground-state) and resonance (also ground-state, continuously delocalised) effects."),
  table(
    ["Type", "Direction of pi-electron shift", "Example and explanation"],
    [
      ["+E effect", "Pi electrons shift TOWARD the atom NOT bearing the attacking electrophile (electrons move away from where the electrophile attaches)", "Electrophilic addition of H+ to propene: pi electrons shift toward the terminal (less substituted) carbon → the terminal carbon acquires electron density while the internal (more substituted) carbon acquires partial positive charge → electrophile (H+) attaches to the terminal carbon → more stable secondary carbocation on C-2. This is the electronic mechanism of Markovnikov's rule."],
      ["-E effect", "Pi electrons shift TOWARD the atom bearing the attacking nucleophile (electrons retreat from the electrophilic atom toward the nucleophilic attack site)", "Nucleophilic addition to a carbonyl: as Nu:- approaches the electrophilic carbon of C=O, the pi electrons of C=O shift completely onto oxygen → oxygen acquires the negative charge → Nu attacks carbon. The outcome: tetrahedral intermediate with O- and the new C-Nu bond."],
    ]
  ),
  sub("Full worked mechanism: Markovnikov addition of HBr to propene — electromeric effect in action"),
  p("Step 1 (electrophilic attack): H+ from HBr approaches the pi bond of propene (CH3-CH=CH2). As the proton approaches, the electromeric effect shifts the pi electrons toward C-1 (the terminal CH2), making C-2 (the internal CH) electron-deficient. The proton therefore attaches to C-1, and C-2 becomes the carbocation: CH3-CH+-CH3 (secondary, more stable). This is Markovnikov's rule — the electrophile adds to the carbon that can better sustain the positive charge (the more substituted carbon, which becomes the site of the positive charge after the less substituted carbon takes H+). Step 2 (nucleophilic capture): Br- (the nucleophile) attacks the secondary carbocation from either face (the sp2 cation is planar), giving CH3-CHBr-CH3 (2-bromopropane) as the Markovnikov product."),
  p("Anti-Markovnikov addition occurs under free-radical conditions (HBr + peroxide initiator, or photochemical initiation). In the radical mechanism, Br• (not H+) is the first species to react with the double bond. Br• adds to the less substituted carbon (C-1) to give the more stable secondary radical on C-2, then HBr donates H• to C-2 to give 1-bromopropane (anti-Markovnikov). The regiochemistry is opposite because the radical (not the cation) determines where the first species adds — and the more stable radical, just like the more stable cation, forms at the more substituted carbon, which happens to be C-2 when Br• adds to C-1."),
  callout("Warning / limitation", "The electromeric effect is invoked ONLY in the presence of an attacking reagent — it is not used to explain ground-state stability, spectroscopic properties, or anything else about the isolated molecule. Do not conflate it with resonance (which is permanent) or with the inductive effect (also permanent). The practical use of the electromeric effect: explaining why electrophilic additions follow Markovnikov's rule (H goes to the less substituted carbon, placing the positive charge on the more substituted carbon) and why nucleophilic additions to carbonyl give products with the nucleophile on carbon."),

  // ── Section 9 ─────────────────────────────────────────────────────────────
  major(9),
  p("Aromaticity is a special extra stabilisation shown by certain fully-conjugated cyclic systems. It is not merely 'having a ring with alternating double bonds' — many such systems are antiaromatic (destabilised) or simply non-aromatic. Huckel's rule gives the precise electron-counting criterion."),
  sub("Huckel's rule: four conditions, all required simultaneously"),
  numbered([
    "The system must be cyclic (closed ring).",
    "Every atom in the ring must be sp2 hybridised (or sp for acetylenic annulenes) with a p orbital available, so the pi system is fully conjugated all the way around the ring.",
    "The ring must be planar (or very close to planar) so p orbitals overlap continuously around the ring.",
    "The ring must contain (4n + 2) pi electrons for n = 0, 1, 2, 3,... giving 2, 6, 10, 14, ... pi electrons. Systems with 4n pi electrons (4, 8, 12,...) are antiaromatic if conditions 1-3 are met; systems failing conditions 1-3 are non-aromatic.",
  ]),
  figure(HUCKEL_BENZENE, "Benzene: cyclic, fully conjugated, planar, and 6 pi electrons (4n+2 with n=1) — all four Huckel conditions satisfied simultaneously."),
  sub("Pi-electron counting in common systems — including heteroaromatic rings"),
  p("The critical skill for JEE aromaticity questions is counting pi electrons correctly, especially for heteroatoms. Two cases arise: (1) the heteroatom uses its lone pair to form a double bond to an adjacent atom (like O in furan donating INTO the ring, or N in pyridine where the lone pair is in the plane — NOT conjugated), and (2) the heteroatom provides its lone pair directly to the pi system (like N in pyrrole, where the lone pair is in a p orbital conjugated with the ring)."),
  table(
    ["System", "Pi electron count", "How to count", "4n+2?", "Classification"],
    [
      ["Benzene (C6H6)", "6", "Three double bonds × 2 = 6 pi electrons", "Yes (n=1)", "Aromatic"],
      ["Naphthalene (C10H8)", "10", "Five double bonds × 2 = 10 pi electrons (all C sp2)", "Yes (n=2)", "Aromatic"],
      ["Pyridine (C5H5N)", "6", "N is sp2, lone pair is in the sp2 plane (NOT in pi system); three double bonds = 6 pi electrons", "Yes (n=1)", "Aromatic — N lone pair available for protonation (basicity) separately from the pi system"],
      ["Pyrrole (C4H4NH)", "6", "N lone pair occupies p orbital (is IN the pi system = 2e); two double bonds = 4e; total = 6 pi electrons", "Yes (n=1)", "Aromatic — N lone pair delocalised into ring, which is why pyrrole is a very weak base (lone pair not freely available)"],
      ["Furan (C4H4O)", "6", "O lone pair in p orbital = 2e; two double bonds = 4e; total = 6 pi electrons", "Yes (n=1)", "Aromatic — but less aromatic than benzene because O is very electronegative, so the lone pair donation into the ring is partial"],
      ["Thiophene (C4H4S)", "6", "S lone pair in p orbital = 2e; two double bonds = 4e; total = 6 pi electrons", "Yes (n=1)", "Aromatic — more aromatic than furan because S is larger/more polarisable, donates lone pair into ring more effectively"],
      ["Cyclopentadienyl anion (C5H5-)", "6", "Carbanion lone pair in p orbital = 2e; two double bonds = 4e; total = 6 pi electrons", "Yes (n=1)", "Aromatic"],
      ["Tropylium cation (C7H7+)", "6", "Three double bonds = 6 pi electrons; the positive charge removes an electron from sp3 carbon, making all 7 sp2", "Yes (n=1)", "Aromatic — exceptionally stable carbocation"],
      ["Cyclopropenyl cation (C3H3+)", "2", "One double bond = 2 pi electrons; the cationic carbon is sp2 with empty p, joins conjugation", "Yes (n=0)", "Aromatic — smallest aromatic system possible"],
      ["Cyclobutadiene (C4H4)", "4", "Two formal double bonds = 4 pi electrons", "No (4n, n=1)", "Antiaromatic — extremely reactive; adopts rectangular geometry to partially break conjugation and avoid maximum antiaromaticity"],
      ["Cyclooctatetraene (COT, C8H8)", "8", "Four double bonds = 8 pi electrons", "No (4n, n=2)", "Would be antiaromatic if planar — the real molecule avoids this by adopting a non-planar tub shape, breaking continuous conjugation, and behaving as a simple polyene"],
      ["Azulene (C10H8, a bicyclic non-benzenoid)", "10", "Fused 7-membered ring + 5-membered ring; 10 pi electrons total", "Yes (n=2)", "Aromatic — isomeric with naphthalene but has a permanent dipole (~1 D) due to charge drift from 5-ring to 7-ring"],
      ["[18]Annulene (C18H18)", "18", "9 formal double bonds = 18 pi electrons (molecule can achieve planarity)", "Yes (n=4)", "Aromatic — confirmed by NMR: inner protons are shielded, outer protons are deshielded, characteristic of ring current"],
    ]
  ),
  callout("Key idea", "Antiaromatic is NOT merely 'less stable than aromatic' — it means DESTABILISED relative to the equivalent open-chain (acyclic) conjugated system. Cyclobutadiene is more reactive than 1,3-butadiene — the ring system is a net liability. Non-aromatic systems (failing conditions 1-3) neither gain stabilisation nor suffer destabilisation — they behave as ordinary polyenes. The three categories give completely different qualitative reactivity patterns in JEE problems."),
  sub("NMR criterion for aromaticity — ring current"),
  p("Aromatic pi systems generate a ring current when placed in an external magnetic field — the circulating pi electrons create a secondary magnetic field that opposes the external field inside the ring (shielding interior protons) but reinforces it outside the ring (deshielding exterior protons). This gives a diagnostic NMR shift: aromatic ring protons appear at 7-9 ppm (far downfield from typical alkene protons at 5-6 ppm), shifted by up to 2-3 ppm compared to a non-aromatic alkene. Antiaromatic systems generate the opposite ring current (paratropic), so their exterior protons are shielded rather than deshielded — [16]annulene protons appear upfield of TMS, an unambiguous NMR fingerprint of antiaromaticity."),

  // ── Section 10 ─────────────────────────────────────────────────────────────
  major(10),
  p("Comparing acidity or basicity of organic species requires comparing the stability of the conjugate base (for acidity) or the availability and stabilisation of the lone pair (for basicity). Every electronic effect from Sections 5-8 feeds into this comparison. The order of analysis is always: identify the atom losing H+ (the acidic site), look at the conjugate base, ask what stabilises or destabilises that negative charge (or positive charge for basicity problems)."),
  sub("Master acidity sequence and its derivation"),
  p("Rank (decreasing acidity, increasing pKa): HCl (~-7) > carboxylic acids (~0-5) > phenols (~8-11) > water (~15.7) > primary alcohols (~16) > terminal alkynes (~25) > NH3 (~38) > alkene sp2 C-H (~44) > alkane sp3 C-H (~50). The reasoning for each step:"),
  numbered([
    "HCl is so acidic because Cl- is large, polarisable, and extensively solvated — the negative charge is stabilised very effectively in solution, and the H-Cl bond has low BDE.",
    "Carboxylic acids (pKa 0-5): carboxylate anion is resonance-stabilised over two equivalent oxygens. The two C-O bonds become equal (1.26 Å), charge is delocalised, and the system is symmetric — maximum resonance stabilisation for a two-atom delocalization.",
    "Phenols (pKa ~10): phenoxide is resonance-stabilised, but over a larger, less efficient system — charge must delocalise through six carbons to oxygen rather than the direct two-oxygen resonance of carboxylate. Less efficient delocalisation = less stabilisation = higher pKa.",
    "Water and simple alcohols (pKa 15-18): no resonance delocalisation of the alkoxide — charge stays on one oxygen atom. Only solvent interactions (hydrogen bonding to water) stabilise the anion. Tertiary alcohols are slightly less acidic than primary alcohols: the +I of alkyl groups destabilises the negative charge on oxygen.",
    "Terminal alkynes (pKa ~25): acetylide carbanion is sp hybridised — high s-character (50%) keeps the lone pair close to the nucleus, stabilising it. Much more acidic than alkane C-H despite being a C-H bond.",
    "Alkenes (pKa ~44) and alkanes (pKa ~50): carbanions with low s-character (sp2 33%, sp3 25%), no resonance, destabilised by carbon's low electronegativity. Essentially never deprotonated under normal laboratory conditions.",
  ]),
  sub("Basicity in organic systems — amines and the gas-phase vs aqueous dilemma"),
  p("For amines, basicity (proton affinity) means accepting H+ to form an ammonium cation: RNH2 + H+ → RNH3+. The stability of this cation determines the basicity. In the gas phase (no solvation): basicity follows the pure inductive series, 3° > 2° > 1° > NH3 > ArNH2, because more alkyl groups donate more electron density, stabilising the ammonium cation. In aqueous solution, two opposing factors compete: (a) +I from alkyl groups favours higher substitution, and (b) solvation of the ammonium cation by hydrogen bonding to water is maximised when there are more N-H bonds available (less substituted amine → more N-H available for H-bonding → better stabilisation of ammonium in water, which opposes the +I trend). The result in aqueous solution for simple alkyl amines:"),
  table(
    ["Amine", "Aqueous pKb (smaller = stronger base)", "Aqueous pKa of conjugate acid", "Relative base strength (aqueous)"],
    [
      ["Trimethylamine, (CH3)3N", "pKb ≈ 4.20", "pKa ≈ 9.80", "Weaker than expected from +I alone: steric crowding reduces solvation of N(CH3)3H+"],
      ["Dimethylamine, (CH3)2NH", "pKb ≈ 3.28", "pKa ≈ 10.72", "Strongest of the three methylamines in water — best balance of +I donation and solvation of the (CH3)2NH2+ cation"],
      ["Methylamine, CH3NH2", "pKb ≈ 3.36", "pKa ≈ 10.64", "Slightly weaker than dimethylamine — less +I, but well solvated"],
      ["Ammonia, NH3", "pKb ≈ 4.74", "pKa ≈ 9.26", "Weakest of this set — no +I donation at all"],
      ["Aniline, C6H5NH2", "pKb ≈ 9.4", "pKa ≈ 4.6", "Far weaker than any alkylamine — lone pair delocalised into aromatic ring by resonance, much less available to donate to H+"],
    ]
  ),
  callout("Warning / limitation", "The aqueous ordering 2° > 1° > 3° > NH3 is an empirical rule for simple small alkyl amines (methyl/ethyl-). It is NOT a fixed law — with bulkier groups or in aprotic solvents the order changes. In aprotic solvents (no H-bonding stabilisation of the cation), the gas-phase order (3° > 2° > 1° > NH3) is restored because solvation effects disappear. Always specify the solvent before committing to a basicity ranking for amines."),
  sub("Comparing basicity of aniline vs. cyclohexylamine: resonance vs inductive effects on nitrogen"),
  p("Cyclohexylamine (pKb ≈ 3.36, pKa of conjugate acid ≈ 10.64) is approximately 10^6 times more basic than aniline (pKb ≈ 9.4, pKa of conjugate acid ≈ 4.6) in water. The reason is resonance: in aniline, the nitrogen lone pair is extensively delocalized into the aromatic ring (N is +M to the ring, as confirmed by the fact that aniline undergoes electrophilic aromatic substitution about 10^6 times faster than benzene). This resonance delocalization makes the lone pair less available to donate to H+. In protonated aniline (anilinium ion, C6H5NH3+), the nitrogen lone pair is gone (it donated to H+), so the remaining three N-H bonds can no longer donate into the ring — there is no resonance stabilisation in the anilinium cation analogous to the free amine resonance. The net result: aniline's neutral form is greatly stabilised by resonance but its protonated form is not, tipping the equilibrium strongly toward the free amine (weak base). In cyclohexylamine, the nitrogen lone pair has no aromatic ring to delocalize into, so it is fully available to donate to H+ (strong base)."),
  p("Substituent effects on aniline basicity: electron-donating groups on the ring (e.g. -CH3 at para) increase aniline basicity by partially returning electron density to N via resonance; electron-withdrawing groups (e.g. -NO2 at para) decrease basicity still further — p-nitroaniline (pKa ≈ 1.0) is essentially non-basic under typical conditions, because the NO2 group withdraws so much electron density through resonance (-M from para) that the lone pair on N is barely available at all."),
  sub("Guanidine — the strongest organic base"),
  p("Guanidine, (H2N)2C=NH, is the most basic common organic compound (pKa of conjugate acid ≈ 13.6 in water — more basic than most amines). Why? The conjugate acid (guanidinium, [(H2N)3C]+) is symmetrical: the positive charge is delocalized over all three nitrogen atoms via resonance (three equivalent contributing structures, each with C=N to one nitrogen and C-N to the others). This exceptional stabilisation of the conjugate acid — positive charge delocalized over three equivalent nitrogen atoms — makes the equilibrium strongly favour proton uptake, hence extreme basicity. The same principle (resonance stabilisation of the conjugate acid drives basicity) applies to amidines (R-C(=NH)-NH2, pKa ~12), which are used as strong bases in organic synthesis."),

  // ── Section 11 ─────────────────────────────────────────────────────────────
  major(11),

  // Q1
  sub("Q1 — Carbocation stability ranking (JEE Advanced 2019 pattern)"),
  p("Arrange the following carbocations in DECREASING order of stability: (I) CH3CH2+ (ethyl, primary); (II) (C6H5)3C+ (triphenylmethyl); (III) CH2=CH-CH2+ (allyl); (IV) (CH3)3C+ (tert-butyl); (V) CH2=CH+ (vinyl)."),
  callout("Solution", "Order: II > III > IV > I > V. Triphenylmethyl: positive charge delocalized over three entire benzene rings simultaneously — most extensive possible delocalization, hence most stable (isolable as a salt). Allyl: resonance over two carbons via adjacent pi bond — more effective than hyperconjugation alone. tert-Butyl: nine alpha-C-H hyperconjugative donors, strong +I from three methyls — most stable simple alkyl cation. Ethyl: only three alpha-H (one methyl), minimum hyperconjugative stabilisation. Vinyl: empty orbital is IN the sigma plane (sp2 carbon), cannot overlap with the adjacent pi bond, actually destabilised by the higher electronegativity of the sp2 carbon — least stable of all five."),

  // Q2
  sub("Q2 — Carbanion stability (JEE Advanced pattern)"),
  p("Which of the following carbanions is the MOST stable? (A) (CH3)3C- (tert-butyl carbanion); (B) CF3- (trifluoromethyl carbanion); (C) C6H5CH2- (benzyl carbanion); (D) HC≡C- (acetylide)."),
  callout("Solution", "The correct answer depends on which stabilising factor dominates most. Ranking: B > D > C > A. CF3-: three strongly electron-withdrawing fluorines provide maximum inductive stabilisation (-I × 3) — each F withdraws electron density through sigma bonds, dispersing the concentrated negative charge. This outweighs even the s-character advantage of the acetylide. HC≡C-: sp hybridisation (50% s-character) provides strong inherent stabilisation; pKa of HC≡CH is ~25. Benzyl: resonance delocalization over the aromatic ring (5 contributing structures), but the aromatic ring is not a perfectly electron-withdrawing entity. tert-Butyl: three +I alkyl groups intensify the negative charge — most destabilised, pKa ~50."),

  // Q3
  sub("Q3 — Multiple correct: hyperconjugation (JEE Advanced multi-correct pattern)"),
  p("Which of the following statements about hyperconjugation are CORRECT? (A) It involves sigma C-H or sigma C-C bonds adjacent to a p orbital or pi system. (B) The number of possible hyperconjugative structures equals the number of alpha-hydrogens on the adjacent carbons. (C) Hyperconjugation operates through space, like a field effect. (D) Hyperconjugation accounts for the greater stability of more substituted alkenes. (E) The Baker-Nathan order (based on hyperconjugation) is opposite to the inductive effect order for alkyl groups."),
  callout("Solution", "A, B, D, and E are correct. A: correct definition — sigma-bond overlap with adjacent empty orbital or pi system. B: each alpha-H participates in one hyperconjugative structure. C: FALSE — hyperconjugation is a through-bond orbital overlap phenomenon, requiring specific adjacent bond connectivity, NOT a through-space field effect. D: correct — more alkyl groups on the double bond = more alpha-H = more sigma-to-pi* donation = lower energy alkene. E: correct — the Baker-Nathan order (based on hyperconjugation, which increases with more C-H bonds) is CH3 > C2H5 > (CH3)2CH > (CH3)3C, which is opposite to the inductive effect order where tert-butyl > isopropyl > ethyl > methyl."),

  // Q4
  sub("Q4 — Aromaticity classification (JEE Advanced pattern)"),
  p("Classify each of the following as aromatic, antiaromatic, or non-aromatic: (I) Cyclopentadienyl cation (C5H5+); (II) Cyclopentadienyl anion (C5H5-); (III) Cyclobutadiene (C4H4); (IV) Furan (C4H4O); (V) Cycloheptatriene (a molecule with one -CH2- group in the ring); (VI) Tropylium cation (C7H7+)."),
  callout("Solution", "(I) C5H5+ — ANTIAROMATIC. The cation removes two electrons, leaving 4 pi electrons (4n, n=1). All five carbons are sp2, ring is cyclic and planar — conditions 1-3 satisfied — but 4 pi electrons means antiaromatic. (II) C5H5- — AROMATIC. The anion adds two electrons: 4 from the two double bonds + 2 from the carbanion lone pair (which is in a p orbital) = 6 pi electrons (4n+2, n=1). (III) C4H4 — ANTIAROMATIC. Cyclic, planar, all sp2, but 4 pi electrons. The real molecule is rectangular (not square) to partially avoid the symmetric antiaromatic structure. (IV) Furan — AROMATIC. Oxygen lone pair in p orbital contributes 2e; two double bonds = 4e; total 6 pi electrons, n=1. (V) Cycloheptatriene — NON-AROMATIC. The -CH2- group breaks conjugation (sp3 carbon has no p orbital perpendicular to the ring plane), so condition 2 fails. Neither aromatic nor antiaromatic. (VI) C7H7+ (tropylium) — AROMATIC. Removing H+ from cycloheptatriene gives a planar cation with 6 pi electrons over 7 sp2 carbons, all conjugated."),

  // Q5
  sub("Q5 — Inductive effect: acid strength ranking (NEET + JEE pattern)"),
  p("Arrange the following in INCREASING order of acid strength (weakest first): (I) CH3COOH; (II) ClCH2COOH; (III) Cl2CHCOOH; (IV) FCH2COOH; (V) BrCH2COOH."),
  callout("Solution", "Increasing acid strength (weakest to strongest): I < V < II < IV < III. All are alpha-substituted acetic acids; the halogen's -I effect stabilises the carboxylate anion. More -I substituents = stronger acid. One halogen < one halogen of a different kind: F is more electronegative than Cl > Br, so FCH2COOH > ClCH2COOH > BrCH2COOH in acid strength. Two Cl atoms on the same carbon (Cl2CHCOOH, pKa ~1.48) give stronger acid than one F (FCH2COOH, pKa ~2.59) because the additive effect of two withdrawing groups exceeds the stronger single -I of F. Final order: CH3COOH (pKa 4.76) < BrCH2COOH (pKa 2.86) < ClCH2COOH (pKa 2.86) < FCH2COOH (pKa 2.59) < Cl2CHCOOH (pKa 1.48). Note: BrCH2COOH and ClCH2COOH have nearly identical pKa values despite different halogens because Br is larger (more polarisable, somewhat stronger +M compensation) but Cl is more electronegative — effects nearly cancel."),

  // Q6
  sub("Q6 — Reaction mechanism: SN1 vs SN2 prediction (JEE pattern)"),
  p("For each substrate below, predict whether SN1, SN2, or neither would dominate with aqueous sodium hydroxide as the nucleophile/base: (A) (CH3)3CBr in 80% ethanol/water; (B) CH3Br in DMSO; (C) (CH3)3CCH2Br (neopentyl bromide) in DMSO; (D) C6H5Br (bromobenzene); (E) CH2=CHBr (vinyl bromide)."),
  callout("Solution", "(A) SN1 dominates: tertiary substrate, polar protic solvent (aqueous ethanol) stabilises the ionised intermediate; backside attack on tertiary is impossible due to steric crowding. Expect racemisation/elimination competition. (B) SN2 dominates: methyl substrate is the least sterically hindered; DMSO is a polar aprotic solvent that does not solvate the nucleophile (OH-), so OH- is 'naked' and highly nucleophilic. Rate = k[CH3Br][OH-]. (C) NEITHER SN1 nor SN2 occurs efficiently: neopentyl is primary (poor SN1) but also severely sterically hindered at the alpha carbon (quaternary centre one carbon away blocks backside attack for SN2). Reaction would be very slow; any product likely involves rearrangement (1,2-methyl shift) during partial ionisation. (D) Neither SN1 nor SN2 under typical conditions: the leaving group (Br-) is on an sp2 carbon (aromatic ring), which cannot support SN1 (no stable aryl cation forms) and is sterically blocked from backside attack (the pi system blocks the back face) for SN2. Aromatic substitution requires an entirely different mechanism (SNAr, with EWG on the ring, or benzyne for very harsh conditions). (E) Neither: vinyl bromide (Br on sp2 carbon) is analogous to D — aryl/vinyl systems are inert to normal SN1/SN2."),

  // Q7
  sub("Q7 — Radical halogenation selectivity calculation (JEE Advanced integer/numerical type)"),
  p("In the radical chlorination of 2-methylpropane (isobutane, (CH3)3CH) with Cl2 at 25°C, the observed product ratio is: 2-chloro-2-methylpropane (from tertiary C-H, 1 available) to 2-chloro-2-methylpropane... [restate]: product from the tertiary H (neopentyl type is not applicable here) to product from the primary H. Given that there is 1 tertiary H and 9 primary Hs in isobutane, and the per-H selectivity of Cl• at 25°C is 5.0:1 (tertiary to primary), calculate the expected ratio of tertiary to primary chlorinated products."),
  callout("Solution", "Statistical correction: there is 1 tertiary H and 9 primary H atoms (three CH3 groups × 3H each = 9). Without selectivity, the ratio of tertiary product to primary product would be 1:9 (purely statistical). With per-H selectivity of 5:1 (tert over primary), apply selectivity as a multiplier: Tertiary product fraction = 1 × 5 = 5 units. Primary product fraction = 9 × 1 = 9 units. Ratio of tertiary to primary products = 5:9 ≈ 0.56:1. As a percentage: 5/(5+9) × 100 = 35.7% tertiary chloride; 9/(5+9) × 100 = 64.3% primary chloride. This contrasts with the statistical prediction (10% tertiary, 90% primary without selectivity), showing how even Cl•'s modest 5:1 per-H selectivity shifts the distribution substantially. For Br• (per-H selectivity ~97:1 at 25°C), the calculation gives: 1 × 97 = 97 units tertiary; 9 × 1 = 9 units primary; ratio ≈ 91.5% tertiary bromide, 8.5% primary bromide — essentially exclusive tertiary selectivity."),

  // Q8
  sub("Q8 — Resonance energy and contributing structures (JEE Advanced)"),
  p("Draw ALL distinct contributing resonance structures for the nitro group (-NO2) attached to a benzene ring (nitrobenzene) that show delocalisation of the ring's pi electrons with the nitro group. Then explain why the nitro group is a meta-director in electrophilic aromatic substitution (EAS) while an amino group (-NH2) is an ortho/para-director."),
  callout("Solution", "For nitrobenzene: the nitro group is -M (electron withdrawing by resonance). Contributing structures delocalising the pi electrons INTO the nitro group place negative charge on the nitrogen or nitro oxygens and POSITIVE charge on the ring carbons at ortho and para positions. The ring carbons at ortho and para positions are already electron-poor in the ground state due to nitro group resonance withdrawal. When an electrophile (E+) attacks, it must accept a proton from a carbon to form the arenium ion intermediate — it preferentially attacks positions that are most electron-rich. The ortho and para carbons are ALREADY electron-depleted by the nitro group's -M resonance, so E+ attack there would place two positive charges adjacent (the arenium intermediate has a positive charge that is further destabilised by the adjacent nitro group's -M withdrawal). Meta attack avoids the ortho/para electron-depleted carbons and gives a meta product. For aniline (-NH2): the nitrogen lone pair is +M (pushes electrons INTO the ring by resonance). Contributing structures donate electron density to ortho and para carbons, making them more electron-rich. E+ attack preferentially at ortho/para gives arenium intermediates where the positive charge is directly stabilised by lone-pair donation from N — the extra resonance structure with N+=... is available only at ortho and para, not meta. Hence NH2 is an ortho/para director."),

  // Q9
  sub("Q9 — Assertion-Reason: carbanion stability and orbital hybridisation (JEE Advanced A-R format)"),
  p("Assertion (A): Among alkyl carbanions, methyl carbanion (CH3-) is more stable than tertiary carbanion ((CH3)3C-). Reason (R): Alkyl groups destabilise carbanions through their +I (electron-donating inductive) effect, which intensifies the already-excessive electron density on the anionic carbon."),
  callout("Solution", "Both A and R are correct, and R is the correct explanation of A. Methyl carbanion (no attached alkyl groups): no +I destabilisation, lone pair on a primary carbon with no groups to push more electron density onto it. Tertiary carbanion ((CH3)3C-): three alkyl groups each exert +I effect, pushing electron density toward an already negative carbon, intensifying the charge concentration and raising the energy of the system. This is the direct opposite of the carbocation case (where +I stabilises by donating to an electron-poor carbon) — for carbanions, +I donation makes things worse. Answer: A is correct, R is correct, R explains A."),

  // Q10
  sub("Q10 — Assertion-Reason: electromeric vs resonance effect (JEE Advanced A-R format)"),
  p("Assertion (A): The electromeric effect is responsible for the fact that propene adds HBr to give 2-bromopropane (Markovnikov product) as the major product. Reason (R): The electromeric effect, being a permanent electronic polarisation of the pi bond, makes C-1 of propene permanently more negative and C-2 permanently more positive, directing the proton to C-1 even before the reagent arrives."),
  callout("Solution", "A is correct (electromeric effect does explain Markovnikov's orientation). R is INCORRECT — the electromeric effect is NOT a permanent polarisation. It is a temporary effect triggered only by the approach of the attacking reagent, existing only for the instant of attack. A permanent polarisation of the pi bond in propene would be described by the inductive effect or resonance — not electromeric. In the ground state, propene's pi bond is only slightly polarised (due to slight +I of the methyl group relative to H), but this is a small inductive effect, not the electromeric effect. The electromeric effect is the complete temporary shift that occurs as H+ approaches. Answer: A is correct, R is incorrect."),

  // Q11
  sub("Q11 — Basicity comparison among nitrogen compounds (JEE Advanced multi-correct)"),
  p("Which of the following correctly ranks the given species in DECREASING order of basicity in aqueous solution? Consider each species: (i) CH3NH2 (methylamine); (ii) (CH3)2NH (dimethylamine); (iii) (CH3)3N (trimethylamine); (iv) NH3 (ammonia); (v) C6H5NH2 (aniline); (vi) (H2N)2C=NH (guanidine). Options: (A) ii > i > iii > iv > vi > v; (B) vi > ii > i > iii > iv > v; (C) vi > ii > iii > i > iv > v; (D) ii > iii > i > iv > vi > v."),
  callout("Solution", "Correct answer: B. Guanidine is the strongest base (pKa of conjugate acid ~13.6) due to exceptional resonance stabilisation of guanidinium over three N atoms — this places vi at the top. Among alkyl amines in water: dimethylamine (2°) > methylamine (1°) > trimethylamine (3°) > ammonia — the classic aqueous order where 2° wins because it balances +I donation and solvation. Aniline is weakest (pKa of anilinium ~4.6) because the lone pair is delocalised into the ring. Order: vi > ii > i > iii > iv > v. Option B."),

  // Q12
  sub("Q12 — Hückel aromaticity: count pi electrons (JEE integer type)"),
  p("How many pi electrons are present in the aromatic pi system of (i) the tropylium cation (C7H7+) and (ii) the pyrrole molecule (C4H4NH)? For each, verify all four Hückel conditions."),
  callout("Solution", "(i) Tropylium (C7H7+): 7 carbons, each sp2 (the positive charge removes H from one carbon, converting it from sp3 to sp2). Three formal double bonds contribute 6 pi electrons; the p orbital on the formerly sp3 cationic carbon is empty but still part of the conjugated system — the actual electron count over the 7 carbons is 6 pi electrons (the empty orbital doesn't contribute electrons). 4n+2 with n=1: 6 = 4(1)+2. Cyclic: yes. Fully conjugated: yes (all 7 atoms sp2). Planar: yes. Aromatic. Pi electrons = 6. (ii) Pyrrole (C4H4NH): N is sp2, and its lone pair occupies a p orbital (not the sp2 plane) — it donates 2 electrons to the pi system. Two double bonds contribute 4 pi electrons. Total = 2 + 4 = 6 pi electrons. 4n+2 with n=1: aromatic. All four conditions satisfied: cyclic, all 5 atoms sp2 (N lone pair in p orbital = sp2), planar, 6 pi electrons. Answer: both have 6 pi electrons."),

  // Q13
  sub("Q13 — 1,2-shift: predict the rearrangement product (JEE Advanced)"),
  p("Predict the MAJOR product of the reaction of 3,3-dimethylbutan-2-ol with concentrated H2SO4 (acid-catalysed dehydration). Draw the intermediate carbocation, show the rearrangement, and identify the final alkene product."),
  callout("Solution", "Step 1: Protonation of -OH to give -OH2+, then loss of water. The initial carbocation forms at C-2: (CH3)3C-CH+-CH3 — this is a secondary carbocation. Step 2: The adjacent quaternary carbon C-3 (bearing three CH3 groups) can undergo a 1,2-methyl shift — one methyl migrates from C-3 to C-2, converting the secondary cation at C-2 into a tertiary cation at C-3: (CH3)2C+-CH2CH3 ... wait — let us be precise. Starting material: (CH3)3C-CHOH-CH3 = 3,3-dimethylbutan-2-ol. Numbering: C-1 = CH3, C-2 = CHOH (the -OH carbon), C-3 = C(CH3)3. Initial cation at C-2: (CH3)3C-C+(H)-CH3 — secondary. One of the three methyls on C-3 migrates to C-2 with its bonding pair: product cation is (CH3)2C+(C-3)-CH(CH3)-CH3(C-1...) — wait. After migration: C-3 loses one methyl, becomes (CH3)2C (a carbon with only two methyls), and C-2 gains one methyl, becoming CH(CH3)2 at C-2... Let me use explicit formula. Rearrangement: (CH3)3C-C+(H)(CH3) → (CH3)2C+-CH(CH3)(CH3) = 2,3-dimethylbutan-2-yl cation, a TERTIARY cation. Step 3: Deprotonation (Zaitsev's rule) from the more substituted adjacent carbon gives 2,3-dimethyl-2-butene, (CH3)2C=C(CH3)2 — a trisubstituted alkene — as the major product. Minor product (without rearrangement): 3,3-dimethyl-1-butene, but this pathway is disfavoured because it would require deprotonation from a secondary cation rather than the more stable tertiary rearranged cation."),

  // Q14
  sub("Q14 — Relative acidity: rank five compounds (JEE Advanced)"),
  p("Rank the following in DECREASING order of acidity (strongest acid first): (I) Phenol (C6H5OH); (II) p-Nitrophenol (O2N-C6H4-OH, para); (III) m-Nitrophenol; (IV) p-Methoxyphenol (CH3O-C6H4-OH, para); (V) Cyclohexanol."),
  callout("Solution", "Decreasing acidity: II > III > I > IV > V. p-Nitrophenol (pKa ≈ 7.15): both -I inductive withdrawal AND -M resonance withdrawal (para position allows conjugation of phenoxide anion's negative charge all the way onto NO2 oxygens). m-Nitrophenol (pKa ≈ 8.35): only -I inductive withdrawal from nitro group (meta position cannot conjugate directly with the phenoxide). Phenol (pKa ≈ 9.99): phenoxide resonance stabilised over the ring, but no additional EWG. p-Methoxyphenol (pKa ≈ 10.20): -OCH3 is +M at the para position (donates electron density into the ring and onto the phenoxide oxygen by resonance), destabilising the phenoxide anion — slightly less acidic than phenol. Cyclohexanol (pKa ≈ 16): alkoxide with no resonance delocalisation — least acidic."),

  // Q15
  sub("Q15 — Mechanism of electrophilic aromatic substitution: why is the intermediate a cation? (JEE/NEET conceptual)"),
  p("In the nitration of benzene with HNO3/H2SO4, the attacking electrophile is NO2+ (nitronium ion). Explain: (a) how NO2+ is generated; (b) the structure and relative stability of the arenium ion (Wheland) intermediate; (c) why the proton is lost in the last step rather than a hydride; (d) why benzene undergoes substitution rather than addition, even though addition is the typical response of alkenes to electrophiles."),
  callout("Solution", "(a) Generation of NO2+: Sulfuric acid (a stronger acid than HNO3) protonates the -OH of HNO3: H2SO4 + HNO3 → H2NO3+ + HSO4-, then H2NO3+ → NO2+ + H2O. The nitronium ion is a linear electrophile (O=N+=O) that attacks the ring. (b) Arenium ion (Wheland intermediate): after NO2+ attacks one ring carbon, that carbon becomes sp3 (tetrahedral), breaking the ring's aromaticity locally. The arenium ion has a positive charge delocalized over three ring carbons (ortho and para to the attacked carbon) through three contributing structures. It is NOT aromatic — it is a cyclohexadienyl cation — but it is stabilised by this delocalization. It is significantly higher in energy than benzene (loss of resonance stabilisation energy) and is the rate-determining species. (c) Loss of proton, not hydride: losing H+ (a proton) from the sp3 carbon restores aromaticity immediately — the driving force for regaining the 150 kJ/mol aromatic stabilisation energy. Losing H- (a hydride, as in an addition) would NOT restore aromaticity; instead, the product would be a non-aromatic cyclohexadiene derivative. Thermodynamically, restoration of aromaticity more than compensates for the energy of H+ formation. (d) Substitution vs addition: benzene's aromatic stabilisation (~150 kJ/mol) provides a massive thermodynamic driving force for restoring aromaticity via proton loss (substitution). In alkene addition, there is no aromatic stabilisation to recover, so both bonds of the double bond are broken and two new sigma bonds are formed (addition wins). In benzene, retaining aromaticity by giving up one H+ (substitution) is strongly preferred."),

  // Q16
  sub("Q16 — Singlet vs triplet carbene (JEE Advanced distinguishing question)"),
  p("Methylene (:CH2) adds to cis-2-butene (cis-CH3CH=CHCH3) to give two cyclopropane products: cis-1,2-dimethylcyclopropane (cis) and trans-1,2-dimethylcyclopropane (trans). (A) Which product would you expect from SINGLET methylene? (B) Which from TRIPLET methylene? (C) Explain why the two electronic states give different stereochemical outcomes. (D) What is the actual ground state of methylene, and does this match the experimental product distribution?"),
  callout("Solution", "(A) Singlet methylene (:CH2, both electrons paired) reacts in a single concerted step — both new C-C bonds form simultaneously from the same face of the alkene. Since cis-2-butene has both methyls on the same face, concerted syn addition gives cis-1,2-dimethylcyclopropane exclusively. (B) Triplet methylene (diradical state) reacts stepwise: one C-C bond forms first, then rotation around the remaining C-C single bond occurs before the second C-C bond forms. This rotation randomises the relative configuration of the methyls, giving a mixture of cis and trans-1,2-dimethylcyclopropane. (C) Stereospecificity depends on whether both bonds form simultaneously (concerted, retaining the geometry of the starting alkene — syn addition → cis product from cis-alkene) or in two separate steps (stepwise, rotation intervenes → loss of stereospecificity). (D) The ground state of CH2 is TRIPLET (by Hund's rule: two separate orbitals of equal energy each get one electron, unpaired). The experimentally observed product from unquenched photolysis of diazomethane (which generates triplet CH2 predominantly) is a mixture of cis and trans cyclopropanes — consistent with stepwise triplet mechanism. Singlet CH2 (excited state, generated by quenching triplet with inert gas or by using specific singlet carbene precursors) gives only cis product from cis-2-butene, confirming the stereochemical model."),

  // Q17
  sub("Q17 — Inductive effect and distance: quantitative reasoning (JEE numerical-type)"),
  p("The pKa values of four omega-chloro carboxylic acids are: 4-chlorobutanoic acid: pKa = 4.52; 3-chlorobutanoic acid (3-chloro): pKa = 3.98; 2-chlorobutanoic acid (2-chloro): pKa = 2.86; chloroacetic acid (monochloroacetic): pKa = 2.86. The pKa of butanoic acid is 4.82. (a) Calculate ΔpKa for each compared to butanoic acid. (b) By what factor does the Ka change for each? (c) Extrapolate: what pKa would you estimate for 5-chloropentanoic acid, assuming the attenuation factor per carbon is approximately constant?"),
  callout("Solution", "(a) ΔpKa = pKa(acid) - pKa(butanoic acid = 4.82): 2-chloro: 2.86 - 4.82 = -1.96 (more acidic by 1.96 units); 3-chloro: 3.98 - 4.82 = -0.84; 4-chloro: 4.52 - 4.82 = -0.30. (b) Factor change in Ka = 10^|ΔpKa|: 2-chloro: 10^1.96 ≈ 91-fold more acidic than butanoic acid; 3-chloro: 10^0.84 ≈ 7-fold; 4-chloro: 10^0.30 ≈ 2-fold. (c) Attenuation factor per carbon: from position 2→3: ΔpKa changes from -1.96 to -0.84; ratio = 0.84/1.96 ≈ 0.43. From 3→4: -0.84 to -0.30; ratio = 0.30/0.84 ≈ 0.36. Average attenuation factor ≈ 0.39 per carbon (each additional carbon between Cl and COOH reduces the inductive effect by a factor of ~2.5). Extrapolating to 5-chloro: ΔpKa ≈ -0.30 × 0.38 ≈ -0.11 unit below butanoic acid; predicted pKa ≈ 4.82 - 0.11 ≈ 4.71. At 6 carbons away, the effect would be within experimental error of zero — consistent with the rule of thumb that inductive effect becomes negligible beyond 3-4 carbons."),

  // Q18
  sub("Q18 — Bredt's rule and bridgehead carbocations (JEE Advanced structural reasoning)"),
  p("Explain why (a) 1-chloronorbornane (1-chlorobicyclo[2.2.1]heptane) does NOT undergo SN1 or SN2 under ordinary conditions, and (b) anti-Bredt bridgehead alkenes such as 1-norbornene are extremely reactive and unstable."),
  callout("Solution", "(a) Norbornane is bicyclo[2.2.1]heptane. C-1 is the bridgehead carbon — it is at the junction of the three bridges. SN1 would require ionisation to give the bridgehead carbocation at C-1. The bridgehead carbon is constrained by the bicyclic skeleton to remain approximately sp3 — it CANNOT flatten to the planar sp2 geometry required by a carbocation (which needs the empty p orbital perpendicular to the three sigma bonds in a plane). The bicyclic framework pulls the three bonds away from planarity, burying the would-be empty orbital inside the cage and preventing any overlap with adjacent C-H bonds. The bridgehead carbocation is therefore extraordinarily unstable — no hyperconjugative or resonance stabilisation is geometrically accessible. SN2 is also impossible: the backside face of the bridgehead C-1 is completely blocked by the bicyclic cage — no nucleophile can approach from 180° to the leaving group. Result: 1-chloronorbornane is essentially inert to both SN1 and SN2. (b) 1-Norbornene (a double bond at the bridgehead) would have the pi bond perpendicular to the molecular plane — but the bridgehead carbon cannot achieve sp2 geometry. The resulting strain from forcing an sp2 carbon into the rigid bridgehead geometry of norbornane is so great that 1-norbornene would immediately react with any available reagent (or dimerize) — it is too strained to be isolated."),

  // Q19
  sub("Q19 — Resonance structures of aniline and their effect (JEE multi-concept)"),
  p("Aniline (C6H5NH2) has five contributing resonance structures. (a) Draw the resonance structures explicitly as text descriptions. (b) Identify at which ring positions the negative charge appears in the resonance contributors. (c) Explain why aniline is a much weaker base than cyclohexylamine. (d) Predict whether p-nitroaniline or o-nitroaniline is a weaker base, and why."),
  callout("Solution", "(a) Five resonance structures: (1) neutral, lone pair on N, aromatic ring intact — the major structure; (2) positive charge on N, negative charge on ortho carbon (one ortho C); (3) positive charge on N, negative charge on the other ortho carbon; (4) positive charge on N, negative charge on the para carbon; (5) no significant structures with charge on meta carbons — meta positions do NOT receive charge from N by direct resonance. (b) Negative charge appears at ortho (×2) and para positions. This is why -NH2 is an ortho/para director and activator in EAS. (c) The N lone pair in aniline is delocalised into the aromatic ring (structures 2-4 above): the lone pair is spread over four atoms (N + 2 ortho + 1 para), making it far less available to donate to a proton. Cyclohexylamine has no aromatic ring — the lone pair on N is not delocalised anywhere, fully available for proton donation. pKa(cyclohexylamine conjugate acid) ≈ 10.6 vs pKa(anilinium) ≈ 4.6 — ~10^6 fold more basic. (d) p-Nitroaniline is a weaker base than o-nitroaniline (slightly). The para-NO2 group can conjugate DIRECTLY with the amino lone pair through the ring: in neutral p-nitroaniline, a strong resonance contributor shows N+=... double bond to ring, negative on NO2 oxygen — this depletes the lone pair on N more efficiently than an ortho-NO2 group (which must act mainly inductively on the lone pair due to steric restrictions on planar conjugation at ortho). Result: pKa(p-nitroaniline conjugate acid) ≈ 1.0; pKa(o-nitroaniline conjugate acid) ≈ 2.5. Para is weaker base."),

  // Q20
  sub("Q20 — Comprehension: NBS allylic bromination selectivity and structure (JEE Advanced passage-type)"),
  p("Read the following and answer (a)-(d): Bromination of 3-methylcyclohexene with NBS in CCl4 under UV light gives a mixture of two monobrominated products: 3-bromo-3-methylcyclohexene and 6-bromo-3-methylcyclohexene. Both products result from bromine reacting with the same allylic radical intermediate. (a) Draw the allylic radical intermediate and show its two resonance structures. (b) Why does bromine attack give TWO allylic bromide products from ONE radical? (c) Would you expect the two products in equal amounts? Justify. (d) In what way does the reaction with Br2 differ from the reaction with NBS?"),
  callout("Solution", "(a) 3-Methylcyclohex-2-enyl radical: after Br• abstracts H from C-3 (the tertiary allylic carbon), the radical is at C-3. By resonance, the radical delocalises: C-3 radical ↔ C-1 radical (through the pi bond C-1=C-2). The two resonance structures have the radical at C-3 (tertiary, adjacent to methyl) and at C-1 (secondary, no methyl). (b) Br2 (or Br•) can react at either end of the allylic system — at C-3 to give 3-bromo-3-methylcyclohexene (tertiary product), or at C-1 to give 6-bromo-3-methylcyclohexene (secondary, since in the ring, C-1 is equivalent to the 6-position). Both sites are accessible because the radical is delocalized. (c) NOT in equal amounts. The resonance contributor with radical at C-3 (tertiary position) contributes more to the real radical structure than the C-1 (secondary position) contributor, because tertiary radicals are more stable. Bromine attacks at C-3 to a greater extent, so the tertiary bromide (3-bromo-3-methylcyclohexene) predominates, though both products are formed. (d) Br2 (gas) at high concentration would add ACROSS the double bond (ionic addition) to give 1,2-dibromide — no allylic substitution would be observed. NBS keeps [Br2] very low, preventing ionic addition to the double bond while still maintaining a radical chain that attacks the allylic C-H selectively."),

  // Q21
  sub("Q21 — Azulene: structure and polarity (JEE Advanced non-standard aromatic)"),
  p("Azulene (C10H8) is an isomer of naphthalene but has a permanent dipole moment of about 1.0 D, while naphthalene has zero dipole moment. (a) Describe the ring system of azulene. (b) Calculate the pi electron count and verify aromaticity. (c) Explain the origin of the permanent dipole moment using resonance. (d) Predict whether azulene is more or less thermodynamically stable than naphthalene and why."),
  callout("Solution", "(a) Azulene consists of a fused bicyclic ring system: a five-membered ring (cyclopentadiene ring) and a seven-membered ring (cycloheptadiene ring) sharing one C-C bond — a non-benzenoid aromatic system. All 10 carbons are sp2. (b) Pi electron count: all 10 carbons sp2, 10 pi electrons total (from 5 formal double bonds + the bridging bond electron pair from the fused junction). 4n+2 with n=2 → 10 = 4(2)+2. Cyclic, planar, fully conjugated — all Hückel conditions satisfied. Aromatic. (c) The permanent dipole arises from charge drift toward the 5-membered ring. Resonance contributing structures for azulene include those that place negative charge on the 5-membered ring (which benefits from the extra electron density, making it resemble a cyclopentadienyl anion with 6 pi electrons) and positive charge on the 7-membered ring (which benefits from resembling a tropylium cation with 6 pi electrons). Both of these contributing structures represent aromatic subunits! The real molecule is a hybrid with partial negative charge on the 5-membered ring and partial positive charge on the 7-membered ring — hence a permanent dipole pointing from the 7-ring (delta+) toward the 5-ring (delta-). (d) Azulene is less stable than naphthalene by about 18 kJ/mol (measured by heats of combustion). Although both are 10 pi-electron aromatics, naphthalene's benzenoid structure provides a more effective cyclic conjugation, while azulene's non-uniform charge distribution and bond length alternation represent a less perfect delocalization. Azulene is still strongly aromatic — just less so than naphthalene."),

  // Q22
  sub("Q22 — NEET pattern: direct acid-base comparison"),
  p("Which of the following is the MOST acidic compound? (A) Ethanol (C2H5OH); (B) Phenol (C6H5OH); (C) p-Cresol (4-methylphenol, CH3-C6H4-OH); (D) p-Nitrophenol (O2N-C6H4-OH)."),
  callout("Solution", "Correct answer: D. The most acidic is p-nitrophenol. Ethanol (pKa ≈ 16): alkoxide has no resonance delocalization — least acidic. Phenol (pKa ≈ 10): phenoxide is resonance-stabilised (charge delocalized into ring) — much more acidic than ethanol. p-Cresol (pKa ≈ 10.17): the methyl group at para is slightly +I and +M (electron-donating), which destabilizes the phenoxide anion slightly compared to unsubstituted phenol — marginally LESS acidic than phenol. p-Nitrophenol (pKa ≈ 7.15): the nitro group is both -I (inductively withdrawing) and -M at para (the phenoxide's negative charge can delocalize all the way through the ring onto the NO2 oxygens) — most strongly acidic of the four. Order: A < C < B < D in acid strength."),

  // Q23
  sub("Q23 — Multiple correct: which species are aromatic? (JEE Advanced multi-correct)"),
  p("Select ALL aromatic species from the following: (A) Cyclopropenyl anion (C3H3-); (B) Cyclopropenyl cation (C3H3+); (C) 1,3,5,7-Cyclooctatetraene (COT, planar hypothetical); (D) Cyclopentadienyl cation (C5H5+); (E) Cyclopentadienyl anion (C5H5-); (F) Pyridinium cation (C5H5NH+); (G) Thiophene (C4H4S)."),
  callout("Solution", "Aromatic: B, E, F, G. (A) Cyclopropenyl anion (C3H3-): 4 pi electrons (one double bond = 2e + lone pair on the carbanion = 2e), 4n with n=1 — ANTIAROMATIC. (B) Cyclopropenyl cation (C3H3+): 2 pi electrons (one double bond = 2e; the cationic carbon's empty orbital doesn't add electrons). 4n+2 with n=0 — AROMATIC, smallest aromatic system. (C) Planar COT: 8 pi electrons, 4n with n=2 — ANTIAROMATIC if planar. Real COT avoids this by tub conformation. (D) C5H5+: 4 pi electrons (two double bonds = 4e; the cationic carbon contributes 0e). 4n with n=1 — ANTIAROMATIC. (E) C5H5-: 6 pi electrons (two double bonds = 4e + carbanion lone pair in p orbital = 2e). 4n+2 with n=1 — AROMATIC. (F) Pyridinium (C5H5NH+): same pi system as pyridine (N is sp2, lone pair donated to H+ is now protonated but N is still sp2 in the ring, contributing 0 electrons from its now-empty p orbital to... wait. In pyridinium, N is sp3-like? No — N in pyridinium still has its p orbital in the ring, contributing the p orbital to the conjugated system but NO lone pair electrons (lone pair is now the N-H bond). The 6 ring pi electrons from the 3 double bonds still exist: pyridinium has 6 pi electrons. Aromatic. (G) Thiophene: S lone pair in p orbital = 2e; two double bonds = 4e; total 6 pi electrons, n=1. AROMATIC."),

  // Q24
  sub("Q24 — Hammett equation concept: predicting substituent effects (JEE Advanced university bridge)"),
  p("The Hammett sigma constant (σ) quantifies the electronic effect of substituents on benzene ring reactions. For the ionisation of substituted benzoic acids: log(Ka/Ka°) = σρ, where Ka° is the Ka of benzoic acid and ρ is the reaction constant (ρ = +1.00 for benzoic acid ionisation by definition). Given σ values: p-NO2 = +0.78; p-CH3 = -0.17; p-OCH3 = -0.27; m-Cl = +0.37; p-OH = -0.37. Predict: (a) which substituent increases Ka the most; (b) which decreases Ka the most; (c) calculate the ratio Ka(p-nitrobenzoic acid)/Ka(benzoic acid)."),
  callout("Solution", "(a) The largest positive σ value increases Ka (electron-withdrawing substituents stabilise the carboxylate anion, increasing ionisation). Largest positive σ here: p-NO2 = +0.78. p-Nitrobenzoic acid is the most acidic of this set. (b) The largest negative σ decreases Ka (electron-donating substituents destabilise the carboxylate). Largest negative σ: p-OCH3 = -0.27 (p-OH = -0.37 is even larger in magnitude). p-Hydroxybenzoic acid is least acidic of this set (ignoring that p-OH itself is a phenol — considering only the carboxylic acid proton). (c) log(Ka/Ka°) = σρ = 0.78 × 1.00 = 0.78. Therefore Ka(p-NO2)/Ka° = 10^0.78 ≈ 6.0. p-Nitrobenzoic acid is about 6 times more acidic than benzoic acid. Experimental check: pKa(benzoic acid) = 4.20; pKa(p-nitrobenzoic acid) = 3.44; ΔpKa = -0.76 ≈ -0.78 (σ value) — excellent agreement, confirming the Hammett treatment."),

  // Q25
  sub("Q25 — Synthesis planning using GOC principles: multi-step reasoning (JEE Advanced)"),
  p("A student wants to selectively brominate 2-methylpropane (isobutane) at the TERTIARY position. Three proposed methods are: (A) Br2 gas + hν (free-radical bromination); (B) NBS in CCl4, hν; (C) Br2/FeBr3 (Lewis acid). Evaluate each method: state whether it would work, what product it would give, and the mechanism. Then explain why method A is highly selective for the tertiary position while method C gives no product at all."),
  callout("Solution", "(A) Br2 + hν — WORKS, and is highly selective for the tertiary position. Radical mechanism: Br2 undergoes homolysis to give 2 Br•. Br• abstracts H from isobutane; the tertiary C-H (pKa ~ 50 but BDE of the tertiary C-H ≈ 381 kJ/mol vs primary C-H ≈ 422 kJ/mol) is weaker, so Br• preferentially abstracts the tertiary H (endothermic step, later TS, resembles product radical more — Hammond postulate makes Br• very selective). Product: 2-bromo-2-methylpropane (tert-butyl bromide) in high selectivity (~97% tertiary for isobutane with Br• at 25°C). Chain: Br• + (CH3)3CH → (CH3)3C• + HBr; (CH3)3C• + Br2 → (CH3)3CBr + Br•. (B) NBS + CCl4 + hν — this would also work, by the same radical mechanism (NBS generates Br• and maintains low [Br2]). NBS is designed for allylic/benzylic positions, but the tertiary C-H in isobutane is also relatively weak and would be abstracted selectively. However, isobutane has no allylic/benzylic positions, so NBS would just give the same tert-butyl bromide as Br2/hν, just more slowly and expensively. NBS is not the optimal reagent here (direct Br2/hν is preferred for simple aliphatic tertiary bromination). (C) Br2/FeBr3 — does NOT work on an alkane. Br2/FeBr3 is an electrophilic aromatic substitution (EAS) reagent system — it generates Br+ (or an equivalent Lewis acid-activated Br2) that attacks aromatic rings. Alkanes (isobutane) are not aromatic and cannot undergo EAS — they have no pi electrons to initiate electrophilic attack. No reaction occurs."),

];
