// Alcohols, Phenols and Ethers. Alcohols connect directly to Haloalkanes
// (SN1/SN2 substrates and products), phenol's acidity was already derived
// from resonance in GOC Section 6 — this chapter applies it to real
// electrophilic substitution chemistry rather than re-deriving it.

export type AlcBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "paragraph";

export type AlcBlock = {
  kind: AlcBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
};

const sections = [
  "Preparation of Alcohols",
  "Alcohols as Substrates: Substitution and Dehydration",
  "Distinguishing Alcohols: Lucas Test and Oxidation",
  "Phenols: Preparation and the Structural Basis of Acidity",
  "Electrophilic Substitution on Phenol",
  "Kolbe and Reimer-Tiemann Reactions",
  "Ethers: Williamson Synthesis",
  "Cleavage of Ethers",
  "JEE Advanced Question Bank",
];

export const alcChapterMap: string[] = [...sections];

function major(n: number): AlcBlock {
  return { kind: "major", text: `Section ${n} - ${sections[n - 1]}` };
}
function sub(text: string): AlcBlock {
  return { kind: "subheading", text };
}
function p(text: string): AlcBlock {
  return { kind: "paragraph", text };
}
function callout(label: string, text: string): AlcBlock {
  return { kind: "callout", text: `${label}: ${text}` };
}
function table(headers: string[], rows: string[][]): AlcBlock {
  return { kind: "table", headers, rows };
}
function formula(text: string, formulaLabel?: string): AlcBlock {
  return { kind: "formula", text, formulaLabel };
}

export const alcBlocks: AlcBlock[] = [
  // ── Section 1 ─────────────────────────────────────────────────────────────
  major(1),
  table(
    ["Method", "Reaction", "Alcohol class produced"],
    [
      ["Hydration of alkenes (acid-catalysed, or oxymercuration)", "Markovnikov, via carbocation (Hydrocarbons Section 5)", "Depends on alkene substitution — usually 2 degree or 3 degree"],
      ["Hydroboration-oxidation", "Anti-Markovnikov, syn addition (Hydrocarbons Section 5)", "Places -OH on the LESS substituted carbon"],
      ["Grignard reagent + carbonyl", "Formaldehyde -> 1 degree; other aldehydes -> 2 degree; ketones -> 3 degree (Haloalkanes Section 6)", "Controlled directly by choice of carbonyl partner"],
      ["Reduction of a carbonyl (NaBH4, LiAlH4, or catalytic H2)", "Aldehyde -> 1 degree alcohol; ketone -> 2 degree alcohol", "LiAlH4 is the stronger reducing agent and also reduces carboxylic acids/esters to 1 degree alcohols, which NaBH4 does not"],
      ["Hydrolysis of alkyl halides", "R-X + aq. NaOH/KOH -> R-OH (SN1 or SN2, Haloalkanes Sections 1-3)", "Retains the substitution pattern of the starting halide"],
    ]
  ),

  // ── Section 2 ─────────────────────────────────────────────────────────────
  major(2),
  p("An alcohol's -OH is a poor leaving group on its own (hydroxide is a strong base, a bad leaving group), so most alcohol reactions require either protonating the oxygen first (acid conditions, converting -OH into the much-better leaving group -OH2+) or converting -OH into a genuinely good leaving group (a halide, tosylate, or mesylate) before substitution or elimination can proceed."),
  table(
    ["Reaction", "Reagents", "Product / mechanism note"],
    [
      ["Conversion to alkyl halide", "HX, or SOCl2, or PX3/PX5 (Haloalkanes Section 5)", "3 degree alcohols react fastest with HX alone (SN1, via a stable carbocation); 1 degree alcohols generally need SOCl2/PX3 or a Lucas-type activation to react at a useful rate"],
      ["Acid-catalysed dehydration", "conc. H2SO4 or H3PO4, heat (Hydrocarbons Section 4)", "E1 for 2 degree/3 degree alcohols via a carbocation — watch for 1,2-hydride/alkyl shifts (GOC Section 3); Zaitsev-selective"],
      ["Esterification (Fischer esterification)", "RCOOH, H2SO4 catalyst, reversible", "R-OH + R'COOH <=> R'COOR + H2O; driven forward by removing water (Le Chatelier) or using excess alcohol"],
      ["Conversion to tosylate", "TsCl (p-toluenesulfonyl chloride), pyridine", "R-OTs is an excellent SN2 leaving group WITHOUT disturbing stereochemistry at carbon (unlike direct HX conversion, which can proceed via inversion or racemisation depending on mechanism) — the standard way to perform a stereochemically controlled SN2 on an alcohol-derived substrate"],
    ]
  ),
  callout("Key idea", "Tosylation is the standard trick for studying SN2 stereochemistry starting from an alcohol: since O-Ts bond formation doesn't touch the stereocentre at carbon at all (the C-O bond to the original oxygen is retained, only the H is replaced by Ts on the SAME oxygen), a single-enantiomer alcohol gives a single-enantiomer tosylate with the original configuration intact, which can then undergo a clean, single-inversion SN2 with a chosen nucleophile — directly connecting back to the Walden-inversion stereochemistry established in Haloalkanes Section 1."),

  // ── Section 3 ─────────────────────────────────────────────────────────────
  major(3),
  sub("Lucas test"),
  p("The Lucas reagent (conc. HCl + anhydrous ZnCl2) distinguishes 1 degree, 2 degree and 3 degree alcohols by how fast each reacts to form an insoluble alkyl chloride (seen as cloudiness/a separate layer), because the reaction proceeds through the SN1 pathway and its rate tracks carbocation stability directly (GOC Section 3, Haloalkanes Section 2)."),
  table(
    ["Alcohol class", "Observation with Lucas reagent", "Reasoning"],
    [
      ["Tertiary", "Turbidity immediately, at room temperature", "Forms the most stable carbocation fastest"],
      ["Secondary", "Turbidity within about 5 minutes (often needs gentle warming)", "Intermediate cation stability"],
      ["Primary", "No visible reaction at room temperature; requires prolonged heating", "Primary cations essentially don't form (GOC Section 3) — primary alcohols react by an SN2-like pathway that is much slower under these specific conditions"],
    ]
  ),
  sub("Oxidation"),
  table(
    ["Oxidant", "1 degree alcohol gives", "2 degree alcohol gives", "3 degree alcohol"],
    [
      ["PCC (pyridinium chlorochromate), a mild anhydrous oxidant", "Aldehyde (stops here — no over-oxidation)", "Ketone", "No reaction (no alpha-hydrogen available on the carbinol carbon to remove)"],
      ["Hot acidified KMnO4 or K2Cr2O7 (strong oxidants)", "Carboxylic acid (goes all the way through the aldehyde)", "Ketone (stops here — a ketone has no further oxidation pathway available under these conditions)", "No reaction"],
    ]
  ),
  callout("Key idea", "A tertiary alcohol resists oxidation entirely under standard conditions for a purely structural reason: oxidation of an alcohol removes the C-H bond on the carbinol carbon together with the O-H bond, and a tertiary carbinol carbon has NO hydrogen directly attached to it to remove. This is a clean, mechanism-based distinguishing test between tertiary alcohols and the other two classes, independent of the Lucas test."),

  // ── Section 4 ─────────────────────────────────────────────────────────────
  major(4),
  table(
    ["Method", "Reaction"],
    [
      ["From haloarenes (Dow process)", "C6H5-Cl + NaOH --(high T, high P)--> C6H5-ONa --(H+)--> C6H5-OH — feasible only because these forcing conditions drive the otherwise extremely sluggish nucleophilic substitution on an unactivated haloarene (Haloalkanes Sections 7-8)"],
      ["From diazonium salts", "C6H5-N2+ + H2O --(warm)--> C6H5-OH + N2 + H+ — a reliable, mild route once a diazonium salt is available (developed fully in the Amines chapter)"],
      ["From cumene (industrial route — the cumene process)", "Benzene + propene (Friedel-Crafts alkylation, Hydrocarbons Section 10) -> cumene; cumene + O2 -> cumene hydroperoxide; acid-catalysed rearrangement gives phenol + acetone as a co-product — the dominant industrial method, valued because it produces two commercially useful products from one process"],
    ]
  ),
  sub("Why phenol is acidic: applying GOC Section 6 directly"),
  p("Phenol (pKa about 10) is markedly more acidic than any simple alcohol (pKa about 16-18) for exactly the reason already established in GOC Section 6: the phenoxide conjugate base delocalises its negative charge into the ring by resonance (onto the ortho and para carbons), lowering its energy relative to a localised alkoxide, which has no such delocalisation available."),
  table(
    ["Substituted phenol", "Effect on acidity relative to plain phenol", "Reasoning"],
    [
      ["p-Nitrophenol / o-nitrophenol", "Markedly MORE acidic (pKa ~7.2 for para)", "The -NO2 group is ortho/para to the -OH and can directly resonance-stabilise the phenoxide's negative charge onto its own oxygens — combined -I and -M withdrawal (GOC Sections 5-6)"],
      ["m-Nitrophenol", "More acidic than plain phenol, but LESS acidic than the ortho/para isomers", "Only the -I inductive effect operates from the meta position; the resonance/-M stabilisation pathway is unavailable (Hydrocarbons Section 11's ortho/para-only resonance restriction, applied here to acidity instead of EAS)"],
      ["p-Cresol (p-methylphenol)", "LESS acidic than plain phenol", "The methyl group is a weak electron DONOR (+I/hyperconjugation, GOC Section 7), intensifying the negative charge on the phenoxide rather than dispersing it"],
    ]
  ),
  callout("JEE-to-university bridge", "Ranking substituted phenols by acidity is one of the most reliable ways JEE Advanced tests whether GOC's electronic effects were actually understood rather than memorised as isolated facts — the correct approach is always to draw the phenoxide's resonance structures first and ask which substituent can (or cannot) directly stabilise the negative charge, exactly the reasoning already used for nitroaniline/nitrophenol comparisons."),

  // ── Section 5 ─────────────────────────────────────────────────────────────
  major(5),
  p("The -OH group is among the strongest ortho/para-directing activators in electrophilic aromatic substitution (Hydrocarbons Section 11) — its lone pair donates into the ring by resonance far more effectively than an alkyl group's hyperconjugation, making phenol react with electrophiles under much milder conditions than benzene itself requires."),
  table(
    ["Reaction", "Conditions compared to benzene", "Product"],
    [
      ["Bromination", "Phenol reacts with bromine water directly, WITHOUT a Lewis-acid catalyst (contrast with benzene, which needs Br2/FeBr3, Hydrocarbons Section 10)", "2,4,6-tribromophenol — substitution occurs at all three available ortho/para positions at once because the ring is so strongly activated"],
      ["Nitration", "Dilute HNO3, room temperature (far milder than benzene's fuming/concentrated acid requirement)", "A mixture of o- and p-nitrophenol"],
      ["Sulfonation", "Concentrated H2SO4; ortho product favoured at lower temperature (kinetic control), para product favoured at higher temperature (thermodynamic control, since it's the reversible sulfonation reaction from Hydrocarbons Section 10)", "A mixture of o- and p-hydroxybenzenesulfonic acid, ratio temperature-dependent"],
    ]
  ),
  callout("Warning / limitation", "Phenol is too reactive to be Friedel-Crafts alkylated or acylated cleanly with the standard AlCl3 catalyst — the Lewis-acidic catalyst tends to coordinate with the phenolic oxygen's lone pair instead of activating the alkyl/acyl halide (the same complexation failure mode described for aniline in Hydrocarbons Section 10), and the strongly activated ring is prone to polyalkylation even when the reaction does proceed. Fries rearrangement (of a phenyl ester back to a ring-acylated phenol under AlCl3) is the practical workaround used instead of direct Friedel-Crafts acylation."),

  // ── Section 6 ─────────────────────────────────────────────────────────────
  major(6),
  sub("Kolbe's reaction (Kolbe-Schmitt reaction)"),
  formula("C_6H_5{-}ONa + CO_2 \\xrightarrow{125^{\\circ}C,\\ 4{-}7\\ \\text{atm}} \\text{salicylate salt} \\xrightarrow{H^+} \\text{salicylic acid}"),
  p("Sodium phenoxide (a stronger nucleophile at the ring than neutral phenol, since the negative charge intensifies resonance donation into the ring) attacks the electrophilic carbon of CO2, and the reaction proceeds specifically at the ortho position, giving salicylic acid (2-hydroxybenzoic acid) after acidic workup — the industrial route to aspirin's precursor."),
  sub("Reimer-Tiemann reaction"),
  formula("C_6H_5{-}OH + CHCl_3 + NaOH \\xrightarrow{\\Delta} \\text{salicylaldehyde (major, after acidic workup)}"),
  p("The base generates dichlorocarbene (:CCl2, GOC Section 4) from chloroform; this singlet carbene attacks the electron-rich phenoxide ring (again ortho-directed) and, after hydrolysis of the resulting dichloromethyl intermediate, yields salicylaldehyde — a direct, practical application of the carbene chemistry introduced in GOC."),
  callout("Key idea", "Both Kolbe's and Reimer-Tiemann reactions give predominantly the ORTHO product on an unsubstituted phenol, not because para is electronically disfavoured (phenoxide activates both ortho and para essentially equally by resonance) but because both reactive species here (CO2's carbon, and dichlorocarbene) are drawn toward the negatively charged, more nucleophilic oxygen through a favourable intramolecular/chelation-like proximity effect at the ortho position — this is a mechanistic subtlety worth stating explicitly rather than treating 'ortho product' as an arbitrary rule to memorise."),

  // ── Section 7 ─────────────────────────────────────────────────────────────
  major(7),
  formula("R{-}O^- + R'{-}X \\xrightarrow{SN2} R{-}O{-}R' + X^-", "Williamson ether synthesis"),
  p("An alkoxide (or phenoxide) ion, generated by deprotonating an alcohol/phenol with a strong base (Na, NaH, or NaOH for the more acidic phenol), performs a standard SN2 attack on an alkyl halide, tosylate, or similar good-leaving-group substrate — the single most reliable, general method for making an unsymmetrical ether."),
  callout("Warning / limitation", "The alkyl halide partner must be a good SN2 substrate — methyl or primary (Haloalkanes Section 1). A tertiary (or even hindered secondary) halide as the ELECTROPHILE component fails badly: the strongly basic alkoxide instead promotes E2 elimination on the bulky substrate rather than substitution (Haloalkanes Section 4), so the correct disconnection for an unsymmetrical ether R-O-R' is always to use the BULKIER group as the alkoxide (nucleophile) and the LESS hindered group as the halide (electrophile), never the reverse. This disconnection choice is one of the most commonly tested applied-synthesis points in this whole chapter."),

  // ── Section 8 ─────────────────────────────────────────────────────────────
  major(8),
  p("Ethers are generally unreactive (the C-O bonds are strong and there's no good leaving group under neutral/basic conditions), but strong acids (particularly HI, and to a lesser extent HBr) cleave them by first protonating the ether oxygen, which converts it into a genuinely good leaving group, then allowing nucleophilic attack by the halide."),
  table(
    ["Ether type", "Mechanism", "Product pattern"],
    [
      ["Simple dialkyl ether with only 1 degree/2 degree alkyl groups", "SN2: I- attacks the LESS hindered carbon directly", "The less hindered C-O bond breaks; gives one alkyl iodide and one alcohol (which, with excess HI, further converts to a second alkyl iodide)"],
      ["Ether with a tertiary (or benzylic/allylic) alkyl group", "SN1: the ether oxygen leaves from the MORE substituted carbon, generating the more stable carbocation, which is then captured by iodide", "The more substituted C-O bond breaks preferentially — opposite regiochemistry from the simple SN2 case, following carbocation stability exactly as in every other SN1 context (GOC Section 3)"],
      ["Aryl alkyl ether (e.g. anisole, C6H5-O-CH3)", "The alkyl-oxygen bond breaks (never the aryl-oxygen bond)", "Gives phenol + an alkyl iodide — the aryl C-O bond resists cleavage for the same reason haloarenes resist substitution (GOC Section 3's aryl-cation instability, and the resonance-strengthened aryl C-O bond, directly analogous to Haloalkanes Section 7's aryl C-X argument)"],
    ]
  ),
  callout("Key idea", "Predicting which C-O bond of an unsymmetrical ether breaks under acidic cleavage is the same question asked throughout this entire organic sequence: which carbon can best stabilise a developing positive charge (favouring SN1-type cleavage at a substituted/benzylic/allylic carbon) versus which carbon is simply less hindered for direct backside attack (favouring SN2-type cleavage at a primary/methyl carbon) — with the added rule that an aryl-oxygen bond essentially never breaks at all."),

  // ── Section 9 ─────────────────────────────────────────────────────────────
  major(9),
  sub("Q1 (JEE Advanced pattern — mechanism/synthesis disconnection)"),
  p("Propose the correct Williamson synthesis of tert-butyl methyl ether, and explain why the reverse disconnection would fail."),
  callout("Answer", "Correct: sodium tert-butoxide, (CH3)3C-O-Na+, reacted with methyl iodide, CH3-I (SN2 at the unhindered methyl carbon, Section 7). The reverse — sodium methoxide, CH3-O-Na+, reacted with tert-butyl chloride, (CH3)3C-Cl — fails because the bulky alkoxide/strong base instead promotes E2 elimination on the hindered tertiary halide (Haloalkanes Section 4), giving isobutylene as the major product instead of the desired ether."),
  sub("Q2 (JEE Advanced pattern — ranking)"),
  p("Rank in decreasing order of acidity: (I) phenol, (II) p-nitrophenol, (III) p-cresol, (IV) m-nitrophenol."),
  callout("Answer", "II > IV > I > III. p-Nitrophenol benefits from both -I and ortho/para resonance withdrawal (strongest acid); m-nitrophenol benefits from -I only, no resonance pathway available, but is still more acidic than plain phenol; p-cresol's +I/hyperconjugative methyl group destabilises the phenoxide, making it the weakest acid of the four (Section 4 table)."),
  sub("Q3 (JEE Advanced pattern — distinguishing test)"),
  p("Three unlabelled bottles contain 2-methylpropan-2-ol, butan-2-ol, and butan-1-ol. Describe a single test that distinguishes all three, and state the expected observation for each."),
  callout("Answer", "The Lucas test (Section 3): 2-methylpropan-2-ol (tertiary) gives immediate turbidity at room temperature (fastest carbocation formation); butan-2-ol (secondary) gives turbidity only after several minutes, often needing gentle warming; butan-1-ol (primary) shows no visible reaction at room temperature and requires prolonged heating — the three rates map directly onto the carbocation-stability order established in GOC Section 3 and reused throughout this sequence."),
  sub("Q4 (JEE Advanced pattern — ether cleavage regiochemistry)"),
  p("Predict the products of treating 2-methoxy-2-methylpropane [(CH3)3C-O-CH3] with excess HI, and explain the regiochemistry."),
  callout("Answer", "tert-Butyl iodide, (CH3)3C-I, and methanol, CH3-OH (which itself would further react with excess HI to give methyl iodide and water). The tertiary carbon's C-O bond breaks preferentially via an SN1 mechanism, since protonation of the ether oxygen followed by loss of the neutral methanol leaving group generates the much more stable tertiary carbocation (Section 8) — cleavage at the unhindered methyl carbon would require a far less favourable primary-carbocation-like pathway, or a sterically blocked SN2 attack directly on the crowded tertiary carbon, so the reaction strongly prefers the tertiary-cation route instead."),
];
