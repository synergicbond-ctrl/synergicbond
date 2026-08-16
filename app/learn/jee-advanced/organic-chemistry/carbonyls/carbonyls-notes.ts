// Aldehydes, Ketones and Carboxylic Acids. The carbonyl is the electrophile
// GOC introduced abstractly (Section 1, Section 8's electromeric shift) —
// this chapter is where that abstraction becomes real, memorisable reaction
// chemistry, extended into carboxylic acid acidity and its own reactions.

export type CarbonylBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "paragraph";

export type CarbonylBlock = {
  kind: CarbonylBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
};

const sections = [
  "Why Carbonyls Undergo Nucleophilic Addition",
  "Preparation of Aldehydes and Ketones",
  "Reactivity Order: Electronic and Steric Factors",
  "The Standard Nucleophilic Addition Reactions",
  "Aldol Condensation",
  "Cannizzaro Reaction",
  "Haloform Reaction",
  "Carboxylic Acids: Acidity and Substituent Effects",
  "Preparation and Reactions of Carboxylic Acids",
  "Distinguishing Tests",
  "JEE Advanced Question Bank",
];

export const carbonylChapterMap: string[] = [...sections];

function major(n: number): CarbonylBlock {
  return { kind: "major", text: `Section ${n} - ${sections[n - 1]}` };
}
function sub(text: string): CarbonylBlock {
  return { kind: "subheading", text };
}
function p(text: string): CarbonylBlock {
  return { kind: "paragraph", text };
}
function callout(label: string, text: string): CarbonylBlock {
  return { kind: "callout", text: `${label}: ${text}` };
}
function bullets(items: string[]): CarbonylBlock {
  return { kind: "bullets", items };
}
function numbered(items: string[]): CarbonylBlock {
  return { kind: "numbered", items };
}
function table(headers: string[], rows: string[][]): CarbonylBlock {
  return { kind: "table", headers, rows };
}
function formula(text: string, formulaLabel?: string): CarbonylBlock {
  return { kind: "formula", text, formulaLabel };
}

export const carbonylBlocks: CarbonylBlock[] = [
  // ── Section 1 ─────────────────────────────────────────────────────────────
  major(1),
  p("The carbonyl carbon is electrophilic because oxygen's higher electronegativity polarises the C=O pi bond, leaving carbon partially positive — exactly the -I/electronegativity argument from GOC Section 5, and the same electromeric shift described abstractly in GOC Section 8 (pi electrons of C=O shift fully onto oxygen as a nucleophile attacks carbon)."),
  formula("Nu^{-} + \\overset{\\delta+}{C}{=}\\overset{\\delta-}{O} \\longrightarrow Nu{-}\\overset{-}{\\underset{|}{C}}{-}O^{-} \\xrightarrow{H^+} Nu{-}\\underset{|}{C}{-}OH", "generic nucleophilic addition to a carbonyl"),
  callout("Key idea", "Every reaction in this chapter's first half (Sections 2-7) is the same nucleophilic addition, differing only in which nucleophile attacks and what happens to the initial tetrahedral alkoxide intermediate afterward (protonation to an alcohol, loss of water to reform a new pi bond, or an internal proton transfer). Recognising the shared first step is what makes memorising dozens of reagents unnecessary."),

  // ── Section 2 ─────────────────────────────────────────────────────────────
  major(2),
  table(
    ["Method", "Reaction", "Notes"],
    [
      ["Oxidation of alcohols", "1 degree alcohol + PCC -> aldehyde; 2 degree alcohol + PCC/KMnO4 -> ketone (Alcohols Section 3)", "Already covered in full — PCC is preferred when stopping cleanly at the aldehyde matters"],
      ["Ozonolysis of alkenes", "Reductive workup gives aldehydes/ketones directly from the alkene's substitution pattern (Hydrocarbons Section 6)", "The standard structure-determination link between alkenes and carbonyls"],
      ["Hydration of alkynes", "Markovnikov hydration (Hg2+/H2SO4) gives a methyl ketone from a terminal alkyne via keto-enol tautomerism; anti-Markovnikov hydroboration-oxidation gives an aldehyde instead (Hydrocarbons Section 8)", "Regiochemistry entirely set by which addition method is chosen"],
      ["Rosenmund reduction", "R-COCl + H2 --(Pd/BaSO4, poisoned catalyst)--> R-CHO", "A controlled partial reduction of an acid chloride that stops at the aldehyde — the poisoned catalyst prevents over-reduction to the alcohol, directly analogous in purpose to Lindlar's catalyst stopping alkyne reduction at the alkene (Hydrocarbons Section 4)"],
      ["Friedel-Crafts acylation", "Benzene + RCOCl/AlCl3 -> aryl ketone (Hydrocarbons Section 10)", "The standard route to an aryl ketone; does not suffer the rearrangement problem of Friedel-Crafts alkylation, since the acylium ion is resonance-stabilised"],
    ]
  ),

  // ── Section 3 ─────────────────────────────────────────────────────────────
  major(3),
  p("Nucleophilic addition rate depends on how accessible and how electrophilic the carbonyl carbon is — both factors point the same direction, so the reactivity order is consistent across almost every nucleophile in this chapter."),
  formula("HCHO > \\text{other aldehydes} > \\text{ketones} \\qquad \\text{(and within ketones: less hindered/less electron-rich} > \\text{more hindered/more electron-rich)}"),
  bullets([
    "Steric: two alkyl/aryl groups on a ketone crowd the carbonyl carbon far more than an aldehyde's single alkyl group plus small hydrogen, hindering nucleophilic approach — formaldehyde (two hydrogens, no steric bulk at all) is the most reactive carbonyl of all.",
    "Electronic: alkyl groups are +I/hyperconjugative electron donors (GOC Sections 5 and 7) that reduce the positive character on the carbonyl carbon, making it a weaker electrophile — more alkyl substitution means less reactivity, exactly the reasoning already used to explain why more-substituted alkenes are more stable (the effect is the same donation, just now working against reactivity instead of for stability).",
    "Aryl ketones/aldehydes are less reactive than their aliphatic counterparts because the ring can donate electron density into the carbonyl by resonance (conjugation with the ring pi system, GOC Section 6), partially neutralising the carbon's electrophilicity.",
  ]),
  callout("JEE trap", "Do not confuse THIS reactivity order (which controls the rate/position of nucleophilic ADDITION equilibrium) with the ACIDITY order of the resulting or related compounds — a common source of confusion is applying carbonyl-addition reactivity reasoning to rank carboxylic acid acidity (Section 8), where the relevant resonance/inductive arguments act on a completely different intermediate (the carboxylate anion, not a tetrahedral addition adduct)."),

  // ── Section 4 ─────────────────────────────────────────────────────────────
  major(4),
  table(
    ["Nucleophile", "Product", "Notes"],
    [
      ["HCN (as CN-, base-catalysed)", "Cyanohydrin, R2C(OH)CN", "Adds a carbon and a nitrile group in one step — a standard chain-extension method, later hydrolysable to a carboxylic acid or reducible to an amine"],
      ["NaHSO3 (saturated solution)", "Bisulfite addition compound, a crystalline solid", "Forms readily only with aldehydes, methyl ketones, and small/unhindered cyclic ketones (steric limitation, Section 3) — used practically to PURIFY these carbonyls, since the addition compound can be isolated, washed, and then hydrolysed back with dilute acid/base to regenerate the pure original carbonyl"],
      ["R'OH (excess, acid-catalysed)", "Acetal (from an aldehyde) or ketal (from a ketone), R2C(OR')2", "Proceeds through a hemiacetal intermediate; the whole process is reversible (aqueous acid hydrolyses the acetal straight back to the carbonyl) — acetals are the standard PROTECTING GROUP for a carbonyl during a synthesis step that would otherwise attack it"],
      ["NH2-NH2 (hydrazine), NH2-OH (hydroxylamine), NH2-NHC6H5 (phenylhydrazine)", "Hydrazone, oxime, phenylhydrazone respectively — each via addition then loss of water (condensation)", "These crystalline, sharp-melting-point derivatives were historically used to identify/characterise an unknown carbonyl compound"],
      ["R-MgX (Grignard)", "1 degree alcohol from formaldehyde, 2 degree from other aldehydes, 3 degree from ketones (Haloalkanes Section 6)", "Already covered in full — the clearest example of carbanion-like nucleophile addition to this electrophile"],
    ]
  ),
  callout("Key idea", "Acetal/ketal formation being reversible under aqueous acid but stable under basic or neutral conditions is exactly why it works as a protecting group: convert the carbonyl to its acetal before running a reaction with a strong nucleophile or base elsewhere in the molecule (protecting the carbonyl from unwanted addition at that same step), then hydrolyse the acetal back with dilute aqueous acid once that other transformation is complete."),

  // ── Section 5 ─────────────────────────────────────────────────────────────
  major(5),
  p("An aldehyde or ketone with at least one alpha-hydrogen can act as a nucleophile toward a SECOND carbonyl molecule, because the alpha-hydrogen is acidic enough (pKa about 20, far more acidic than an ordinary alkane C-H, GOC Section 4/Hydrocarbons Section 7) to be removed by a base, generating a resonance-stabilised enolate that then attacks the electrophilic carbonyl carbon of another molecule."),
  numbered([
    "Base (e.g. dilute NaOH) removes an alpha-hydrogen, generating an enolate — stabilised by resonance delocalisation of the negative charge onto oxygen, exactly the kind of resonance stabilisation GOC Section 6 predicts for a carbanion adjacent to a pi system.",
    "The enolate's nucleophilic alpha-carbon attacks the electrophilic carbonyl carbon of a second aldehyde/ketone molecule (Section 1's generic addition), giving an alkoxide.",
    "Protonation gives the aldol (a beta-hydroxy aldehyde/ketone) — this is the ADDITION product, and the reaction can be stopped here under mild conditions.",
    "On heating (or with stronger base/acid), the beta-hydroxy carbonyl undergoes E1cb-type dehydration (loss of water, favoured because the resulting product is conjugated — the new C=C is in direct conjugation with the remaining C=O, an especially stable arrangement), giving an alpha,beta-unsaturated carbonyl — the CONDENSATION product.",
  ]),
  formula("2\\,CH_3CHO \\xrightarrow{\\text{dil. NaOH}} CH_3{-}CH(OH){-}CH_2{-}CHO \\xrightarrow{\\Delta,\\ -H_2O} CH_3{-}CH{=}CH{-}CHO", "aldol addition, then condensation, of acetaldehyde"),
  callout("Warning / limitation", "A carbonyl compound with NO alpha-hydrogen (formaldehyde, benzaldehyde, and other purely aromatic aldehydes/ketones) cannot self-condense by the aldol pathway at all, since there is no acidic proton to remove — this is precisely the structural requirement that opens the door to the Cannizzaro reaction (Section 6) as the alternative pathway available specifically to these substrates under basic conditions."),

  // ── Section 6 ─────────────────────────────────────────────────────────────
  major(6),
  p("An aldehyde with NO alpha-hydrogen (so aldol condensation is unavailable, Section 5) undergoes a completely different base-mediated reaction instead: simultaneous oxidation of one molecule and reduction of another (a disproportionation), via direct hydride transfer."),
  numbered([
    "Concentrated hydroxide adds to the carbonyl carbon (ordinary nucleophilic addition, Section 1), forming a tetrahedral alkoxide intermediate carrying a hydrogen on the original carbonyl carbon.",
    "This alkoxide intermediate transfers its hydrogen (as a hydride, H:-) directly to the carbonyl carbon of a SECOND aldehyde molecule, in a single intermolecular hydride-transfer step.",
    "The result: one molecule is oxidised all the way to a carboxylate (losing its hydrogen as a hydride), and the other is reduced to the corresponding primary alcohol (gaining that hydride) — acidic workup gives the free carboxylic acid alongside the alcohol.",
  ]),
  formula("2\\,C_6H_5CHO \\xrightarrow{\\text{conc. NaOH}} C_6H_5COO^{-} + C_6H_5CH_2OH \\xrightarrow{H^+} C_6H_5COOH + C_6H_5CH_2OH", "Cannizzaro reaction of benzaldehyde"),
  sub("Crossed Cannizzaro"),
  p("When formaldehyde is deliberately added as one partner in a crossed Cannizzaro reaction, it is essentially always the one oxidised to formate/formic acid, and the other aldehyde is essentially always the one reduced to its alcohol — formaldehyde is the best hydride ACCEPTOR of the pair (it is the most electrophilic carbonyl of all, Section 3), so it reliably plays the oxidising role."),

  // ── Section 7 ─────────────────────────────────────────────────────────────
  major(7),
  p("Methyl ketones (and acetaldehyde, and any alcohol that oxidises to one of these under the reaction conditions) undergo exhaustive halogenation at the methyl group followed by cleavage, in the presence of a halogen and base — the haloform reaction."),
  numbered([
    "Base removes an alpha-hydrogen from the methyl group (Section 5's enolate chemistry), and the resulting enolate reacts with X2 to install one halogen.",
    "The newly installed halogen makes the REMAINING alpha-hydrogens on that same carbon MORE acidic (additional -I withdrawal, GOC Section 5), so halogenation at that position accelerates rather than stopping after one substitution — all three hydrogens are replaced in succession, giving a trihalomethyl ketone, R-CO-CX3.",
    "Hydroxide then attacks the carbonyl carbon of this trihalomethyl ketone (Section 1's nucleophilic addition), and the resulting alkoxide expels the highly stabilised CX3- carbanion (stabilised by three halogens' -I withdrawal) as the leaving group, giving a carboxylate plus haloform (CHX3, a precipitate when X = I, the basis of the iodoform test).",
  ]),
  formula("CH_3{-}CO{-}R + 3\\,I_2 + 4\\,NaOH \\longrightarrow CHI_3\\!\\downarrow + RCOONa + 3\\,NaI + 3\\,H_2O", "iodoform reaction"),
  callout("Key idea", "The haloform/iodoform reaction is specific to the CH3-CO- fragment — any methyl ketone (and acetaldehyde itself) gives a positive iodoform test, but so does any secondary alcohol that OXIDISES to a methyl ketone under the basic hypoiodite conditions (I2/NaOH also acts as a mild oxidant), which is why ethanol and any CH3-CH(OH)-R alcohol also gives a positive test even though neither is itself a methyl ketone — a frequently tested exception."),

  // ── Section 8 ─────────────────────────────────────────────────────────────
  major(8),
  p("A carboxylic acid (pKa about 4-5) is far more acidic than phenol (pKa about 10) or an alcohol (pKa about 16-18), because the carboxylate conjugate base is stabilised by resonance over TWO EQUIVALENT oxygens (both C-O bonds become identical, bond-length-averaged, in the real anion) — a stronger, more symmetric delocalisation than phenoxide's asymmetric delocalisation into the ring (GOC Section 6, Alcohols/Phenols Section 4)."),
  table(
    ["Substituent effect on RCOOH acidity", "Direction", "Example"],
    [
      ["Electron-withdrawing substituent near the -COOH (halogen, -NO2, another -COOH)", "Increases acidity (stabilises the carboxylate further, -I, GOC Section 5)", "Trichloroacetic acid (pKa ~0.7) >> chloroacetic acid (pKa ~2.9) >> acetic acid (pKa ~4.76) — each added chlorine compounds the inductive withdrawal"],
      ["Distance of the substituent from -COOH", "Effect weakens sharply with distance (inductive decay, GOC Section 5)", "2-chlorobutanoic acid is more acidic than 3-chlorobutanoic acid, which is more acidic than 4-chlorobutanoic acid"],
      ["Electron-donating alkyl substitution (longer/branched chain)", "Slightly decreases acidity (+I effect intensifies the negative charge, same reasoning as Alcohols Section 4's p-cresol case)", "Formic acid (pKa ~3.75, no alkyl group at all) > acetic acid (pKa ~4.76) > propanoic acid (pKa ~4.87), a small but real, consistent trend"],
      ["Aromatic ring with an EWG at ortho/para (benzoic acid family)", "Increases acidity via both -I and, for ortho/para EWGs, additional resonance withdrawal", "p-nitrobenzoic acid > benzoic acid > p-methylbenzoic acid — directly parallel to the phenol substituent-acidity table in Alcohols/Phenols Section 4"],
    ]
  ),
  callout("JEE-to-university bridge", "Carboxylic acid, phenol, and alcohol acidity all reduce to the SAME question asked three times across this organic sequence: how well can the conjugate base delocalise its negative charge, and is that delocalisation resonance-based (strong, GOC Section 6), inductive-only (weaker, distance-dependent, GOC Section 5), or absent entirely (a plain alkoxide). Recognise the shared logic rather than memorising three separate acidity tables."),

  // ── Section 9 ─────────────────────────────────────────────────────────────
  major(9),
  table(
    ["Method", "Reaction", "Notes"],
    [
      ["Oxidation of primary alcohols/aldehydes", "Hot acidified KMnO4 or K2Cr2O7 (Alcohols Section 3)", "Goes all the way to the acid, unlike PCC which stops at the aldehyde"],
      ["Hydrolysis of nitriles or amides", "R-CN + H2O/H+ (or H2O/OH-), heat -> RCOOH (via an amide intermediate under acid conditions)", "A standard chain-EXTENDING route, since the nitrile carbon becomes the new carboxyl carbon (compare with the Grignard + CO2 route, Haloalkanes Section 6, which is the corresponding organometallic chain-extension method)"],
      ["Carbonation of a Grignard reagent", "R-MgX + CO2, then H3O+ (Haloalkanes Section 6)", "Already covered in full"],
    ]
  ),
  sub("Hell-Volhard-Zelinsky (HVZ) reaction"),
  formula("R{-}CH_2{-}COOH \\xrightarrow[\\text{2. H}_2\\text{O}]{\\text{1. X}_2,\\ \\text{red P (catalytic)}} R{-}CHX{-}COOH", "alpha-halogenation of a carboxylic acid"),
  p("Red phosphorus converts a small amount of the acid to its acid halide (R-COX), which — unlike the parent carboxylic acid — CAN enolise at the alpha position and react with X2 exactly as a ketone does in the haloform mechanism (Section 7); the resulting alpha-halo acid halide then exchanges with more carboxylic acid, regenerating the catalytic acid halide and continuing the cycle. The net, overall result is clean, specific alpha-halogenation of the parent acid — a transformation the acid itself cannot undergo directly, since a plain carboxylic acid's alpha-hydrogens are far less acidic/enolisable than an acid halide's."),
  sub("Decarboxylation"),
  formula("RCOONa + NaOH \\xrightarrow{\\text{CaO, heat (soda-lime decarboxylation)}} R{-}H + Na_2CO_3"),
  p("Heating a sodium carboxylate with soda lime removes CO2, giving the corresponding alkane with one fewer carbon — a standard chain-SHORTENING method, useful specifically because it is one of the very few reliable ways to remove a carbon from a chain rather than add one."),

  // ── Section 10 ─────────────────────────────────────────────────────────────
  major(10),
  table(
    ["Test", "Reagent / observation", "What it distinguishes"],
    [
      ["Tollens' test", "Ag(NH3)2+ (Tollens' reagent); a positive result deposits a silver mirror on the test-tube wall", "Aldehydes (positive) vs ketones (negative) — the aldehyde is oxidised to a carboxylate while Ag+ is reduced to metallic Ag"],
      ["Fehling's test", "Cu2+ complexed with tartrate (Fehling's A+B); a positive result gives a brick-red Cu2O precipitate", "Aliphatic aldehydes (positive) vs ketones and aromatic aldehydes like benzaldehyde (both negative) — a stricter test than Tollens', since benzaldehyde gives a NEGATIVE Fehling's test despite being a genuine aldehyde, a frequently tested exception"],
      ["Iodoform test", "I2/NaOH; a positive result gives a yellow precipitate of CHI3 with a characteristic smell", "Methyl ketones and acetaldehyde (positive), and any alcohol that oxidises to one of these under the conditions (Section 7) — NOT a general aldehyde/ketone test"],
      ["2,4-DNP test (Brady's reagent)", "2,4-dinitrophenylhydrazine; a positive result gives a bright yellow/orange/red crystalline precipitate", "A general test for ANY carbonyl (aldehyde or ketone) — confirms the presence of C=O but does not by itself distinguish aldehyde from ketone; must be paired with Tollens'/Fehling's for that distinction"],
    ]
  ),
  callout("Common trap", "Benzaldehyde is a genuine aldehyde (positive Tollens' test) but gives a NEGATIVE Fehling's test — an exception worth memorising specifically, since 'all aldehydes are Fehling's-positive' is a common but incorrect overgeneralisation. Always test aromatic aldehydes against BOTH reagents in a distinguishing-tests question rather than assuming Tollens' and Fehling's are interchangeable."),

  // ── Section 11 ─────────────────────────────────────────────────────────────
  major(11),
  sub("Q1 (JEE Advanced pattern — mechanism identification)"),
  p("Explain why benzaldehyde, when treated with concentrated NaOH, gives benzyl alcohol and sodium benzoate as the only products, while acetaldehyde under the same conditions gives crotonaldehyde (an unsaturated aldehyde) instead."),
  callout("Answer", "Benzaldehyde has NO alpha-hydrogen (the carbon adjacent to the carbonyl is the aromatic ring carbon, which cannot be deprotonated the way an alkyl alpha-carbon can), so aldol condensation (Section 5) is structurally impossible — the molecule instead undergoes the Cannizzaro disproportionation (Section 6), giving one oxidised (benzoate) and one reduced (benzyl alcohol) product via direct hydride transfer. Acetaldehyde DOES have alpha-hydrogens (on the methyl group), so it undergoes aldol addition then dehydration instead, giving crotonaldehyde (CH3-CH=CH-CHO) as the condensation product — the Cannizzaro pathway is simply unavailable/uncompetitive whenever alpha-hydrogens make aldol condensation possible."),
  sub("Q2 (JEE Advanced pattern — acidity ranking)"),
  p("Rank in decreasing order of acidity: (I) acetic acid, (II) trichloroacetic acid, (III) benzoic acid, (IV) p-nitrobenzoic acid."),
  callout("Answer", "II > IV > III > I. Trichloroacetic acid's three chlorines provide the strongest cumulative -I withdrawal of any of these (Section 8 table), making it the strongest acid; p-nitrobenzoic acid benefits from both -I and para resonance withdrawal from -NO2, more acidic than plain benzoic acid; benzoic acid itself is somewhat more acidic than acetic acid because the ring's inductive withdrawal (and the sp2 character difference at the alpha carbon) slightly stabilises the carboxylate more than a simple alkyl group does."),
  sub("Q3 (JEE Advanced pattern — synthesis/distinguishing)"),
  p("Propan-2-ol and propan-1-ol are in separate unlabelled bottles. Which of these gives a positive iodoform test, and via what intermediate?"),
  callout("Answer", "Propan-2-ol, CH3-CH(OH)-CH3, gives a POSITIVE iodoform test: under the basic I2/NaOH conditions, it is first oxidised (the hypoiodite acts as a mild oxidant, Section 7 callout) to acetone, CH3-CO-CH3, a genuine methyl ketone, which then undergoes the standard haloform mechanism to give CHI3. Propan-1-ol gives a NEGATIVE test — its oxidation product, propanal (CH3CH2CHO), is not a methyl ketone (the carbonyl-adjacent methyl group required for the haloform mechanism, Section 7, is absent), so exhaustive alpha-halogenation and cleavage cannot occur the same way."),
  sub("Q4 (JEE Advanced pattern — multi-step synthesis)"),
  p("Starting from ethanoic acid (acetic acid), propose a synthesis of 2-bromopropanoic acid."),
  callout("Answer", "This requires first extending the chain by one carbon (acetic acid, CH3COOH, has no alpha-carbon bearing a hydrogen suitable for direct HVZ homologation to the target) — actually, propanoic acid (CH3CH2COOH) is the correct starting acid for HVZ alpha-bromination directly: red P/Br2 converts a small fraction to propanoyl bromide, which enolises and brominates at the alpha carbon (Section 9), regenerating propanoic acid catalytically while the brominated product accumulates as 2-bromopropanoic acid, CH3-CHBr-COOH, after aqueous workup. (If genuinely starting from acetic acid, first extend the chain via nitrile hydrolysis or a Grignard/CO2 route to reach propanoic acid, then apply HVZ as above.)"),
];
