// Hydrocarbons — Alkanes, Alkenes, Alkynes and Aromatic hydrocarbons.
// Builds directly on General Organic Chemistry (bond fission, reactive
// intermediates, inductive/resonance/hyperconjugation/electromeric effects,
// Huckel's rule) rather than re-deriving those ideas. ~80% of this chapter
// is reactions, mechanisms and exam problems by design, per the reaction-
// heavy standard for organic chemistry chapters on this platform.

export type HydrocarbonBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "paragraph";

export type HydrocarbonBlock = {
  kind: HydrocarbonBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
};

const sections = [
  "Alkanes: Preparation",
  "Alkanes: Free-Radical Halogenation",
  "Alkanes: Combustion, Pyrolysis and Conformations",
  "Alkenes: Preparation and the Two Elimination Mechanisms",
  "Alkenes: Electrophilic Addition and Markovnikov's Rule",
  "Alkenes: Oxidative Cleavage and Identification",
  "Alkynes: Preparation and Acidity",
  "Alkynes: Addition Reactions",
  "Aromatic Hydrocarbons: Electrophilic Aromatic Substitution Mechanism",
  "Aromatic Hydrocarbons: The Five Named EAS Reactions",
  "Directing Effects Applied: Multi-Substituent Problems",
  "JEE Advanced Question Bank",
];

export const hydrocarbonChapterMap: string[] = [...sections];

function major(n: number): HydrocarbonBlock {
  return { kind: "major", text: `Section ${n} - ${sections[n - 1]}` };
}
function sub(text: string): HydrocarbonBlock {
  return { kind: "subheading", text };
}
function p(text: string): HydrocarbonBlock {
  return { kind: "paragraph", text };
}
function callout(label: string, text: string): HydrocarbonBlock {
  return { kind: "callout", text: `${label}: ${text}` };
}
function bullets(items: string[]): HydrocarbonBlock {
  return { kind: "bullets", items };
}
function numbered(items: string[]): HydrocarbonBlock {
  return { kind: "numbered", items };
}
function table(headers: string[], rows: string[][]): HydrocarbonBlock {
  return { kind: "table", headers, rows };
}
function formula(text: string, formulaLabel?: string): HydrocarbonBlock {
  return { kind: "formula", text, formulaLabel };
}

export const hydrocarbonBlocks: HydrocarbonBlock[] = [
  // ── Section 1 ─────────────────────────────────────────────────────────────
  major(1),
  table(
    ["Method", "Reaction", "Key condition / limitation"],
    [
      ["Wurtz reaction", "2 R-X + 2Na --(dry ether)--> R-R + 2NaX", "Best for making SYMMETRICAL alkanes; a mixed Wurtz (two different R-X) gives a mixture of three products and is a poor synthetic choice for an unsymmetrical target"],
      ["Kolbe electrolysis", "2 RCOO- --(electrolysis)--> R-R + 2CO2 + H2 (at anode: 2RCOO- -> R-R + 2CO2 + 2e-)", "Symmetrical alkane from a carboxylate salt; proceeds via a free-radical R• intermediate at the anode"],
      ["Catalytic hydrogenation of alkenes/alkynes", "R-CH=CH-R' + H2 --(Ni/Pt/Pd)--> R-CH2-CH2-R'", "Syn addition of H2 across the pi bond, on the catalyst surface"],
      ["From alkyl halides (Grignard + protic source)", "R-MgX + H2O -> R-H + Mg(OH)X", "Also works with any active-hydrogen source (ROH, RCOOH, NH3) — this is simultaneously the standard method to DESTROY a Grignard reagent"],
    ]
  ),
  callout("Warning / limitation", "Wurtz reaction fails (or gives poor, mixed yields) for methyl halides reacting alone is fine, but is never used to make an alkane with an ODD number of carbons from a single alkyl halide reactant, nor to cleanly cross-couple two different halides — both are classic distractor options in JEE questions."),

  // ── Section 2 ─────────────────────────────────────────────────────────────
  major(2),
  p("Free-radical halogenation of an alkane is the defining reaction connecting Section 4 of GOC (free-radical stability, homolysis) to a real synthetic transformation, and it proceeds by a three-stage chain mechanism."),
  numbered([
    "Initiation: X2 --(hv or heat)--> 2X• — homolytic fission of the halogen-halogen bond, generating the chain-carrying radical.",
    "Propagation (repeats, carries the chain): X• + R-H -> R• + HX, then R• + X2 -> R-X + X• — the second step regenerates X•, which re-enters the first propagation step, making the cycle self-sustaining.",
    "Termination: any two radicals combine (X• + X•, R• + R•, or R• + X•), consuming radicals without generating a new one, which is why chain reactions eventually slow and stop.",
  ]),
  sub("Regioselectivity and reactivity-selectivity"),
  table(
    ["Halogen", "Relative reactivity toward C-H", "Selectivity (3° : 2° : 1° ratio, approximate)", "Consequence"],
    [
      ["Fluorine, F2", "Extremely reactive, highly exothermic", "Almost unselective (~1:1:1)", "Reaction is so exothermic it is difficult to control and tends toward explosive/non-selective substitution — F2 halogenation is rarely used synthetically"],
      ["Chlorine, Cl2", "Reactive", "Moderately selective (~5:3.5:1 at room temperature)", "Gives a mixture of monochlorinated products in a synthetically useful but imperfectly selective ratio"],
      ["Bromine, Br2", "Much less reactive than Cl2", "Highly selective (~1600:80:1, strongly favours tertiary)", "The transition state for H-abstraction by Br• is reached later along the reaction coordinate (Hammond postulate), so it more closely resembles the free-radical intermediate — this is why bromination is far more sensitive to radical stability than chlorination"],
    ]
  ),
  callout("Key idea", "Bromination's higher selectivity despite being the SLOWER reaction is a direct consequence of the reactivity-selectivity principle combined with the Hammond postulate: a slower, more endothermic hydrogen-abstraction step has a later, more product-like transition state, so the stability differences between 1°, 2° and 3° radicals (already established in GOC Section 4) are more fully expressed in the relative rates. This is a genuinely common JEE Advanced reasoning question, not just a fact to memorise."),

  // ── Section 3 ─────────────────────────────────────────────────────────────
  major(3),
  formula("C_nH_{2n+2} + \\left(\\dfrac{3n+1}{2}\\right)O_2 \\longrightarrow n\\,CO_2 + (n+1)H_2O \\qquad \\Delta H < 0", "complete combustion of an alkane"),
  p("Pyrolysis (cracking) breaks C-C and C-H bonds homolytically under heat alone (no oxygen), producing a mixture of smaller alkanes and alkenes — the industrial basis of converting heavier petroleum fractions into more useful lighter hydrocarbons and alkene feedstocks."),
  sub("Conformations of ethane and n-butane"),
  p("Rotation about a C-C single bond is not free of energy cost — different dihedral angles place substituent groups at different distances, and torsional/steric strain vary continuously as the bond rotates."),
  table(
    ["Conformation", "Ethane relative energy", "n-Butane relative energy (methyl vs methyl dihedral)"],
    [
      ["Eclipsed (dihedral 0 degrees, or gauche-eclipsed variants)", "Higher energy (torsional strain: eclipsing C-H bonds)", "Highest energy when the two methyls eclipse each other directly (0 degrees) — severe steric strain in addition to torsional strain"],
      ["Staggered, anti (dihedral 180 degrees)", "N/A (ethane's staggered form has no distinct anti/gauche split, by symmetry)", "Lowest energy — the two bulky methyl groups are as far apart as possible"],
      ["Staggered, gauche (dihedral 60 degrees)", "N/A", "Higher than anti but lower than any eclipsed form — the methyls are staggered (no torsional strain) but closer together than in anti (some steric/gauche strain)"],
    ]
  ),
  callout("Warning / limitation", "Conformations interconvert by bond rotation at room temperature far faster than they can be isolated as separate compounds — they are NOT isomers in the configurational sense (unlike the cis/trans or R/S isomers covered in the Isomerism chapter) and should never be described as 'different compounds.' The anti conformer of n-butane is simply the lowest-energy, most populated rotational arrangement at equilibrium, not a separately isolable substance."),

  // ── Section 4 ─────────────────────────────────────────────────────────────
  major(4),
  table(
    ["Method", "Reaction", "Mechanism / regiochemistry"],
    [
      ["Dehydrohalogenation of alkyl halides", "R-CH2-CHX-R' --(alc. KOH, heat)--> R-CH=CH-R' + KX + H2O", "E2 (concerted, anti-periplanar) for most substrates; follows Zaitsev's rule — the more substituted (more hyperconjugatively stabilised, GOC Section 7) alkene is the major product"],
      ["Dehydration of alcohols", "R-CH2-CH(OH)-R' --(conc. H2SO4 or H3PO4, heat)--> R-CH=CH-R' + H2O", "E1 for 2°/3° alcohols (via a carbocation — watch for 1,2-hydride/alkyl shifts, GOC Section 3); also Zaitsev-selective"],
      ["Partial (Lindlar) hydrogenation of alkynes", "R-C≡C-R' + H2 --(Lindlar's catalyst: Pd/CaCO3, poisoned with Pb(OAc)2/quinoline)--> cis-alkene", "Syn addition on the poisoned catalyst surface — stops cleanly at the alkene, gives the CIS isomer specifically"],
      ["Alkyne + Na/liq. NH3 (dissolving-metal reduction)", "R-C≡C-R' --(Na, liq. NH3)--> trans-alkene", "Proceeds via a vinyl radical intermediate that equilibrates to the more stable trans geometry before the second electron transfer — gives the TRANS isomer specifically, complementary to Lindlar"],
    ]
  ),
  sub("E1 vs E2: how to tell them apart"),
  table(
    ["Feature", "E1", "E2"],
    [
      ["Mechanism", "Two steps: rate-determining ionisation to a carbocation, then base removes a beta-H", "One concerted step: base removes beta-H as the leaving group departs simultaneously"],
      ["Substrate preference", "3° > 2° (needs a reasonably stable carbocation) — 1° essentially never undergoes E1", "Works for 1°, 2°, 3° — no carbocation required"],
      ["Base strength needed", "Weak base/nucleophile sufficient (often just the solvent)", "Strong, often bulky base required (e.g. alc. KOH, DBU, potassium tert-butoxide)"],
      ["Stereochemical requirement", "None strict — planar carbocation, attacked from either face", "Anti-periplanar arrangement of the leaving group and the beta-H is required in the transition state"],
      ["Rearrangement possible?", "Yes — carbocation intermediate can undergo 1,2-shifts", "No — no discrete carbocation forms"],
    ]
  ),
  callout("JEE trap", "A bulky base like potassium tert-butoxide is frequently used specifically to favour the LESS substituted (Hofmann) alkene over the Zaitsev product, because its steric bulk makes it slower to abstract a hydrogen from a crowded, more substituted position — always check whether a question specifies a bulky base before defaulting to Zaitsev's rule."),

  // ── Section 5 ─────────────────────────────────────────────────────────────
  major(5),
  p("Electrophilic addition to an alkene is the direct synthetic consequence of the pi bond acting as a nucleophile (GOC Section 1) toward an electrophile, and proceeds through a carbocation (or, for halogens, a bridged halonium ion) intermediate whose stability (GOC Section 3) controls the regiochemistry."),
  formula("R_2C{=}CH_2 + H{-}X \\longrightarrow R_2\\overset{+}{\\text{C}}{-}CH_3 \\xrightarrow{X^-} R_2CX{-}CH_3", "Markovnikov addition of HX"),
  callout("Key idea", "Markovnikov's rule ('the proton adds to the carbon already bearing more hydrogens') is not an independent empirical law — it is a direct consequence of carbocation stability from GOC Section 3. Protonation occurs at the terminal/less-substituted carbon specifically because that placement generates the MORE substituted (more stable) carbocation at the other carbon, which is then attacked by the nucleophile. Rephrase any Markovnikov question as 'which protonation site gives the more stable cation' and the regiochemistry follows automatically, including for cases where 1,2-shifts (GOC Section 3) change the 'expected' product."),
  sub("Anti-Markovnikov addition: the peroxide (Kharasch) effect"),
  p("HBr specifically (not HCl or HI) adds with reversed (anti-Markovnikov) regiochemistry in the presence of peroxides, because the mechanism switches entirely from ionic to free-radical:"),
  numbered([
    "Peroxide initiation: R-O-O-R --(heat/hv)--> 2 RO•, then RO• + HBr -> ROH + Br•",
    "Propagation: Br• adds to the LESS substituted carbon of the alkene (generating the more stable, more substituted free radical, exactly analogous to the carbocation-stability logic of GOC Section 3-4) — R2C=CH2 + Br• -> R2C•-CH2Br",
    "The resulting radical abstracts H from another HBr molecule, giving the anti-Markovnikov product and regenerating Br• to continue the chain.",
  ]),
  callout("Warning / limitation", "The peroxide effect is observed ONLY for HBr. HCl's H-Cl bond is too strong for the radical chain's H-abstraction step to be favourable, and HI's radical propagation step is thermodynamically unfavourable because iodine radical addition to the alkene is reversible/too slow — this HBr-only restriction is one of the most frequently tested facts in this entire topic."),
  sub("Hydration, hydroboration-oxidation and their opposite regiochemistry"),
  table(
    ["Method", "Regiochemistry", "Stereochemistry", "Mechanism basis"],
    [
      ["Acid-catalysed hydration (H3O+/H2O)", "Markovnikov (OH on more substituted carbon)", "No stereocontrol (planar carbocation intermediate)", "Carbocation mechanism, same logic as HX addition"],
      ["Hydroboration-oxidation (BH3·THF, then H2O2/NaOH)", "Anti-Markovnikov (OH on LESS substituted carbon)", "Syn addition, with retention of configuration at the carbon that bore boron", "Concerted, four-centre transition state — boron (small, adds to less hindered/less substituted carbon primarily for steric reasons) and hydrogen add to the same face simultaneously; no free carbocation forms, so no rearrangement occurs"],
    ]
  ),

  // ── Section 6 ─────────────────────────────────────────────────────────────
  major(6),
  table(
    ["Reagent", "Product from an alkene", "Diagnostic use"],
    [
      ["Cold, dilute, alkaline KMnO4 (Baeyer's reagent)", "A syn 1,2-diol (glycol); MnO4- is decolourised", "Standard test for unsaturation (a C=C or C≡C bond)"],
      ["Hot, concentrated, acidified KMnO4", "Oxidative cleavage: a disubstituted carbon (R2C=) gives a ketone; a monosubstituted carbon (RCH=) gives a carboxylic acid; a terminal =CH2 gives CO2", "Determines the substitution pattern of the original alkene from the cleavage products"],
      ["Ozonolysis: O3, then reductive workup (Zn/H2O or Me2S)", "Each alkene carbon becomes a carbonyl: R2C= gives a ketone, RCH= gives an aldehyde (reductive workup prevents further oxidation to a carboxylic acid)", "The cleanest structural-determination tool — the reductive workup is essential; oxidative workup (H2O2) instead converts any aldehyde product further to a carboxylic acid"],
    ]
  ),
  callout("JEE-to-university bridge", "Ozonolysis product analysis is a standard 'work backward from products to structure' problem type: given the carbonyl products, reconnect the two carbonyl carbons with a double bond to reconstruct the original alkene. This is one of the most reliable ways JEE Advanced tests whether a student actually understands oxidative cleavage rather than having memorised only the forward reaction."),

  // ── Section 7 ─────────────────────────────────────────────────────────────
  major(7),
  table(
    ["Method", "Reaction"],
    [
      ["From calcium carbide", "CaC2 + 2H2O -> Ca(OH)2 + HC≡CH (industrial route to acetylene)"],
      ["Double dehydrohalogenation of a vicinal or geminal dihalide", "R-CHX-CH2X (or R-CX2-CH3) --(excess alc. KOH, heat)--> R-C≡CH"],
      ["Alkylation of a terminal alkyne (chain extension)", "R-C≡C-H --(NaNH2)--> R-C≡C:- Na+ --(R'-X, SN2)--> R-C≡C-R'"],
    ]
  ),
  sub("Terminal alkyne acidity — the direct consequence of GOC Section 4"),
  p("A terminal alkyne C-H (pKa about 25) is markedly more acidic than an alkene C-H (pKa about 44) or alkane C-H (pKa about 50), because the acetylide anion's lone pair sits in an sp orbital (50% s-character) rather than sp2 (33%) or sp3 (25%) — higher s-character holds the lone pair closer to the more electronegative-behaving carbon nucleus, lowering the anion's energy (GOC Section 4). This acidity is exactly what makes the alkylation reaction above possible: NaNH2 (conjugate acid NH3, pKa about 38) is a strong enough base to deprotonate a terminal alkyne quantitatively, but not strong/reactive enough to interfere with the subsequent SN2 step."),
  callout("Warning / limitation", "Only a TERMINAL alkyne (R-C≡CH) has this acidic proton directly on the triple-bonded carbon. An internal alkyne (R-C≡C-R') has no such C-H and cannot be deprotonated this way — a frequent point of confusion when a question doesn't specify which type of alkyne is involved."),

  // ── Section 8 ─────────────────────────────────────────────────────────────
  major(8),
  p("Alkynes undergo the same broad classes of electrophilic and catalytic addition as alkenes, but since they contain two pi bonds, addition can proceed once (to an alkene) or twice (to an alkane/fully saturated product), and Markovnikov selectivity applies at each stage."),
  table(
    ["Reagent", "Product (1 equivalent)", "Product (excess reagent)", "Notes"],
    [
      ["H2 / Lindlar's catalyst", "cis-alkene (stops here — the entire point of using Lindlar's)", "N/A — Lindlar's is used precisely to prevent over-reduction", "Section 4 covers this as an alkyne-to-alkene method"],
      ["H2 / Pt or Pd (unpoisoned)", "Does not stop at the alkene", "Fully saturated alkane", "Standard full hydrogenation"],
      ["HX (1 or 2 equivalents)", "Markovnikov vinyl halide", "Markovnikov geminal dihalide (both X on the same carbon)", "Second addition follows Markovnikov relative to the vinyl halide intermediate, reinforcing the geminal (not vicinal) dihalide outcome"],
      ["H2O / Hg2+, H2SO4 (oxymercuration-type hydration)", "An enol, which immediately tautomerises to a ketone (Markovnikov placement of oxygen, so from a terminal alkyne the product is a methyl ketone)", "N/A — tautomerisation to the carbonyl is essentially instantaneous and irreversible under the reaction conditions", "This is the standard route from a terminal alkyne to a methyl ketone; from acetylene itself, this specific reaction gives acetaldehyde"],
    ]
  ),
  callout("Key idea", "Anti-Markovnikov hydration of a terminal alkyne is achieved instead by hydroboration-oxidation (BH3, then H2O2/NaOH), which places the oxygen on the terminal carbon, tautomerising to an ALDEHYDE rather than a methyl ketone — the direct alkyne analogue of the alkene anti-Markovnikov contrast in Section 5, and a common paired question."),

  // ── Section 9 ─────────────────────────────────────────────────────────────
  major(9),
  p("Benzene's aromatic stabilisation (Huckel's rule, GOC Section 9) makes it resistant to the addition reactions that dominate alkene/alkyne chemistry — addition would destroy the aromatic pi system. Instead, benzene reacts by substitution, replacing a ring hydrogen while preserving aromaticity."),
  numbered([
    "Generation of the electrophile (E+) — often requires a Lewis-acid catalyst to polarise or generate a reactive electrophile from an otherwise unreactive reagent.",
    "Electrophilic attack: the aromatic pi system attacks E+, forming a resonance-stabilised, non-aromatic carbocation intermediate called the arenium ion (or Wheland intermediate/sigma complex) — aromaticity is temporarily lost at this step, which is why it is the rate-determining, highest-energy step of the whole mechanism.",
    "Deprotonation: a base (often the conjugate base generated in step 1) removes the proton from the sp3 carbon of the arenium ion, restoring full conjugation and regenerating the aromatic ring — this step is fast and strongly favourable precisely because it restores aromatic stabilisation.",
  ]),
  formula("C_6H_6 + E^{+} \\longrightarrow [\\text{arenium ion, resonance-stabilised, non-aromatic}] \\xrightarrow{-H^{+}} C_6H_5{-}E"),
  callout("Key idea", "The arenium ion intermediate is stabilised by exactly the same resonance principle as any other carbocation (GOC Section 3, Section 6) — draw its three contributing structures (positive charge on the ortho and para positions relative to the new substituent, never meta) and you can directly derive WHY ortho/para vs meta directing effects exist, rather than merely quoting the rule from GOC Section 6."),

  // ── Section 10 ─────────────────────────────────────────────────────────────
  major(10),
  table(
    ["Reaction", "Electrophile generated", "Reagents / conditions", "Product"],
    [
      ["Nitration", "NO2+ (nitronium ion)", "conc. HNO3 + conc. H2SO4 (H2SO4 protonates HNO3, which then loses water to form NO2+)", "Nitrobenzene, C6H5-NO2"],
      ["Sulfonation", "SO3 (or its protonated form)", "fuming H2SO4 (oleum)", "Benzenesulfonic acid, C6H5-SO3H — notably REVERSIBLE (dilute aqueous acid + heat removes the -SO3H group), unlike the other four EAS reactions"],
      ["Halogenation", "X+ (as a Lewis-acid complex, not free X+)", "X2 + a Lewis acid catalyst (FeX3 or AlX3), which polarises X-X and generates an X+-like electrophile", "Halobenzene, C6H5-X (works cleanly for Cl2/Br2; F2 is too reactive/uncontrolled and I2 is too unreactive without additional oxidising conditions)"],
      ["Friedel-Crafts alkylation", "R+ (carbocation, from R-X + AlCl3) — subject to the SAME rearrangement risk as any carbocation", "R-X + anhydrous AlCl3 (or another Lewis acid)", "Alkylbenzene, C6H5-R — but see the limitations below"],
      ["Friedel-Crafts acylation", "R-C≡O+ (acylium ion) — resonance-stabilised, does NOT rearrange", "R-COCl (or an anhydride) + anhydrous AlCl3", "Aryl ketone, C6H5-CO-R"],
    ]
  ),
  sub("Friedel-Crafts limitations — a dense, high-yield JEE topic"),
  bullets([
    "Rearrangement: because the alkylation electrophile is a genuine carbocation, a 1,2-hydride or alkyl shift (GOC Section 3) can occur before ring attack — e.g. n-propyl chloride with AlCl3 gives predominantly ISOpropylbenzene (cumene), not n-propylbenzene, because the secondary cation is more stable than the primary one. Acylation has no such problem, since the acylium ion is resonance-stabilised and does not rearrange.",
    "Deactivated rings do not react: strongly deactivated substrates (a ring already bearing -NO2, -CN, -SO3H, or any other strong meta-director/deactivator) do not undergo Friedel-Crafts alkylation or acylation at all — the ring is too electron-poor to attack the electrophile.",
    "Aniline (and other -NH2/-NHR-substituted rings) fails too, but for a different reason: the Lewis-acidic AlCl3 catalyst complexes directly with the nitrogen lone pair, converting the ring substituent into a powerful electron-WITHDRAWING (-NR2-AlCl3 complex), deactivating group and shutting the reaction down — this is a distinct failure mode from simple ring deactivation and a frequent point of confusion.",
    "Polyalkylation: Friedel-Crafts alkylation activates the ring further (alkyl groups are +I/+R activators), so the product is MORE reactive than the starting material and tends to over-alkylate — a genuine synthetic limitation, whereas acylation deactivates the ring (the carbonyl is -M), self-limiting the reaction to mono-substitution.",
  ]),

  // ── Section 11 ─────────────────────────────────────────────────────────────
  major(11),
  p("When a ring already carries one substituent and a second electrophilic substitution is performed, both the STRENGTH (activating vs deactivating) and the DIRECTING preference (ortho/para vs meta) of the existing group must be applied together, exactly as classified in GOC Section 6."),
  table(
    ["Existing substituent class", "Effect on rate", "Directs new group to"],
    [
      ["Strong activators: -NH2, -OH, -OR, -NHCOR", "Strongly activating (rate increases sharply vs benzene)", "Ortho/para"],
      ["Weak activators: -CH3 and other alkyl groups (hyperconjugation/+I only, GOC Section 7)", "Mildly activating", "Ortho/para"],
      ["Halogens: -F, -Cl, -Br, -I", "Deactivating (net -I dominates, GOC Section 5 callout)", "Ortho/para (the lone-pair +R donation still directs regiochemistry even though -I dominates overall reactivity — this dual behaviour is the single most-tested anomaly in this topic)"],
      ["Strong deactivators: -NO2, -CN, -SO3H, -CHO, -COOH, -COR, -NR3+", "Strongly deactivating", "Meta"],
    ]
  ),
  sub("Worked example: two directors in conflict"),
  p("For p-nitrotoluene undergoing a third substitution: the methyl group (weak activator, ortho/para-directing) and the nitro group (strong deactivator, meta-directing) are already in a para relationship to each other. Since -NO2 is a far stronger director than -CH3 (dominance follows the strength ordering above, not merely 'majority vote'), the new electrophile enters predominantly at the position that is meta to -NO2 — which also happens to be ortho to -CH3 in this specific substitution pattern, so the two directing preferences reinforce rather than conflict here. When a strong deactivator and a weak activator genuinely disagree on the same open position, the strong group's directing preference wins."),
  callout("Common trap", "Steric hindrance modifies but does not override electronic directing preference: for an ortho/para director, if the ortho position is blocked by a bulky existing group or is between two substituents, the para product dominates even though ortho was 'electronically' equally available — always check for steric crowding before assuming a 50:50 ortho:para split."),

  // ── Section 12 ─────────────────────────────────────────────────────────────
  major(12),
  sub("Q1 (JEE Advanced pattern — mechanism reasoning)"),
  p("2-methylbut-2-ene reacts with HBr in the presence of peroxides. Predict the product and explain why the regiochemistry differs from HBr addition without peroxides."),
  callout("Answer", "Without peroxides: Markovnikov addition — H adds to the carbon with more H's, Br to the more substituted carbon, via the more stable tertiary carbocation (Section 5). With peroxides: the mechanism switches to a free-radical chain (Section 5); Br• adds first, to the carbon that generates the MORE STABLE radical — here, addition to the less substituted carbon (C1) generates a tertiary radical at C2, which is preferred, giving the anti-Markovnikov bromide overall. The key reasoning point: 'anti-Markovnikov' is really just Markovnikov selectivity re-applied to a radical intermediate instead of a cationic one — the more-substituted-intermediate preference doesn't change, only which atom (Br vs H) adds first does."),
  sub("Q2 (JEE Advanced pattern — multi-step identification)"),
  p("An alkene X undergoes ozonolysis (reductive workup) to give propanal (CH3CH2CHO) and propan-2-one (acetone, (CH3)2CO) as the only products. Identify X and state its degree of substitution at each alkene carbon."),
  callout("Answer", "X is 2-methylpent-2-ene, (CH3)2C=CH-CH2CH3. Reconnecting the two carbonyl carbons (Section 6): the carbon that became acetone was disubstituted (two methyls), the carbon that became propanal was monosubstituted (one H, one ethyl) — joining them with a double bond reconstructs (CH3)2C=CH-CH2CH3 exactly, a trisubstituted alkene."),
  sub("Q3 (JEE Advanced pattern — multiple correct, Friedel-Crafts)"),
  p("Which of the following substrates will NOT undergo a successful Friedel-Crafts alkylation with CH3Cl/AlCl3? (A) Toluene (B) Nitrobenzene (C) Aniline (D) Chlorobenzene."),
  callout("Answer", "B and C fail (A and D do react, though D reacts sluggishly since halogens are deactivating). Nitrobenzene fails because -NO2 is a strong deactivator — the ring is too electron-poor for the required electrophilic attack (Section 11). Aniline fails for the DIFFERENT reason given in Section 10: the Lewis-acidic AlCl3 complexes with the nitrogen lone pair itself, converting -NH2 into a strongly electron-withdrawing group and shutting down the reaction — not because -NH2 is inherently deactivating (it is normally a strong activator)."),
  sub("Q4 (JEE Advanced pattern — acidity ranking)"),
  p("Rank in decreasing order of acidity: (I) ethane, (II) ethene, (III) ethyne, (IV) ethanol."),
  callout("Answer", "IV > III > II > I. Ethanol (pKa ~16) is far more acidic than any hydrocarbon C-H because oxygen's electronegativity stabilises the alkoxide conjugate base directly (an inductive/electronegativity argument, not a hybridisation one). Among the hydrocarbons, acidity tracks the s-character of the carbanion's orbital exactly as established in Section 7/GOC Section 4: ethyne (sp, pKa ~25) > ethene (sp2, pKa ~44) > ethane (sp3, pKa ~50)."),
];
