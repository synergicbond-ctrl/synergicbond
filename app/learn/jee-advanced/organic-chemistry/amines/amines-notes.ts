// Amines and diazonium chemistry. Basicity trends were already derived in
// GOC Section 10 (gas-phase +I order vs the aqueous solvation/steric
// balance) — this chapter applies that directly to real reactions rather
// than re-deriving it, and builds the diazonium salt as the single most
// versatile synthetic intermediate in the whole organic sequence.

export type AmineBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "paragraph";

export type AmineBlock = {
  kind: AmineBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
};

const sections = [
  "Preparation of Amines",
  "Amines as Nucleophiles: Alkylation and Acylation",
  "Distinguishing 1°, 2° and 3° Amines: The Hinsberg Test",
  "Ring Substitution on Aniline",
  "Diazonium Salt Formation",
  "Diazonium Salts: Substitution Reactions (Sandmeyer, Gattermann, and More)",
  "Diazonium Salts: Coupling Reactions",
  "JEE Advanced Question Bank",
];

export const amineChapterMap: string[] = [...sections];

function major(n: number): AmineBlock {
  return { kind: "major", text: `Section ${n} - ${sections[n - 1]}` };
}
function sub(text: string): AmineBlock {
  return { kind: "subheading", text };
}
function p(text: string): AmineBlock {
  return { kind: "paragraph", text };
}
function callout(label: string, text: string): AmineBlock {
  return { kind: "callout", text: `${label}: ${text}` };
}
function bullets(items: string[]): AmineBlock {
  return { kind: "bullets", items };
}
function table(headers: string[], rows: string[][]): AmineBlock {
  return { kind: "table", headers, rows };
}
function formula(text: string, formulaLabel?: string): AmineBlock {
  return { kind: "formula", text, formulaLabel };
}

export const amineBlocks: AmineBlock[] = [
  // ── Section 1 ─────────────────────────────────────────────────────────────
  major(1),
  p("Amine basicity and the aqueous-vs-gas-phase order (secondary > primary > tertiary > ammonia for simple alkyl amines in water, tertiary > secondary > primary in the gas phase) were established in full in GOC Section 10 — this chapter builds directly on that and does not re-derive it."),
  table(
    ["Method", "Reaction", "Notes"],
    [
      ["Reduction of a nitrile", "R-CN + H2 --(Ni/Pd, or LiAlH4)--> R-CH2-NH2", "Chain-extending — the nitrile carbon becomes a new -CH2-NH2 carbon, adding one carbon to the chain, directly parallel to nitrile hydrolysis giving a carboxylic acid (Carbonyls Section 9)"],
      ["Reduction of an amide", "R-CONH2 + LiAlH4 -> R-CH2-NH2", "Does NOT add a carbon (contrast with nitrile reduction above) — the amide's own carbon becomes the new CH2 carbon"],
      ["Reduction of a nitro compound", "Ar-NO2 + H2/Ni (or Fe/HCl, or Sn/HCl) -> Ar-NH2", "The standard route to aniline and substituted anilines from nitrobenzene, via nitration (Hydrocarbons Section 10) then reduction"],
      ["Gabriel phthalimide synthesis", "Phthalimide + KOH -> potassium phthalimide; + R-X (SN2) -> N-alkylphthalimide; then hydrolysis (or hydrazinolysis) releases R-NH2", "The standard method to make a PURE PRIMARY amine with no over-alkylation risk at all — the phthalimide nitrogen can only be alkylated once (it has no N-H left after the first substitution to react a second time), unlike direct ammonia alkylation below"],
      ["Direct alkylation of ammonia", "NH3 + R-X (SN2) -> RNH2 -> (further alkylation) -> R2NH -> R3N -> R4N+X-", "Genuinely unselective — each successive amine product is itself a nucleophile and can react again with more R-X, giving a statistical mixture of all four possible products; a poor synthetic route to a specific single amine, which is exactly why the Gabriel synthesis exists as the controlled alternative"],
      ["Hofmann bromamide degradation", "R-CONH2 + Br2/NaOH -> R-NH2 (loses one carbon)", "Chain-SHORTENING — covered in mechanistic detail below since it proceeds through the nitrene intermediate introduced in GOC Section 4"],
    ]
  ),
  sub("Hofmann bromamide degradation mechanism"),
  formula("R{-}CONH_2 \\xrightarrow{Br_2,\\ NaOH} R{-}CO{-}NHBr \\xrightarrow{-Br^-} R{-}CO{-}\\ddot{N}{:} \\xrightarrow{\\text{1,2-shift}} R{-}N{=}C{=}O \\xrightarrow{H_2O} R{-}NH_2 + CO_2"),
  callout("Key idea", "The migration of R from carbon to nitrogen happens CONCERTEDLY with loss of bromide — a free acyl nitrene never actually exists as an independent intermediate, exactly the caveat already flagged for nitrenes in GOC Section 4. This concerted migration is also why the reaction proceeds with FULL RETENTION of configuration at R when R is a stereocentre (a migrating group that never becomes a free, planar species cannot racemise), a frequently tested stereochemical point."),

  // ── Section 2 ─────────────────────────────────────────────────────────────
  major(2),
  p("An amine's nitrogen lone pair makes it both a nucleophile (toward electrophilic carbon centres) and a base (toward protons) — the same lone pair drives both behaviours, and most of this chapter's reactions are simply this nucleophilicity applied to different electrophiles already met earlier in the sequence."),
  table(
    ["Reaction", "Electrophile", "Product"],
    [
      ["Alkylation", "R'-X (SN2, Haloalkanes Section 1)", "A more substituted amine — over-alkylation is the same problem flagged in Section 1's direct-alkylation entry"],
      ["Acylation", "R'-COCl or (R'CO)2O (nucleophilic acyl substitution on the electrophilic carbonyl carbon, Carbonyls Section 1's addition logic followed by expulsion of Cl-/RCOO-)", "An amide, R'-CO-NH-R — this is also the standard way to PROTECT an amine's reactivity during a Friedel-Crafts step on an aniline derivative, since acylation converts the strongly activating -NH2 into a more modestly activating -NHCOR, avoiding the polyalkylation and AlCl3-complexation problems described for aniline in Hydrocarbons Section 10"],
      ["Reaction with a carbonyl (aldehyde/ketone)", "Nucleophilic addition then loss of water (Carbonyls Section 4's condensation logic)", "A primary amine gives an imine (Schiff base); a secondary amine gives an enamine instead, since it has no second N-H left to lose in a full condensation to C=N"],
      ["Carbylamine (isocyanide) test", "CHCl3 + alc. KOH (generates dichlorocarbene, GOC Section 4, exactly as in the Reimer-Tiemann reaction, Alcohols/Phenols Section 6)", "A foul-smelling isocyanide, R-NC — POSITIVE only for primary amines (1 degree N-H2 needed to form the isocyanide via the carbene insertion mechanism); secondary and tertiary amines give a NEGATIVE test, making this the standard distinguishing test for primary amines specifically"],
    ]
  ),

  // ── Section 3 ─────────────────────────────────────────────────────────────
  major(3),
  p("The Hinsberg test uses benzenesulfonyl chloride (C6H5SO2Cl) to distinguish all three amine classes at once, based on how many N-H bonds are available and the acidity of the resulting sulfonamide product."),
  table(
    ["Amine class", "Reaction with C6H5SO2Cl", "Behaviour toward excess aqueous KOH"],
    [
      ["Primary (1 degree)", "Forms a sulfonamide with ONE remaining N-H, R-NH-SO2C6H5", "The remaining N-H is acidic (the electron-withdrawing sulfonyl group stabilises the resulting anion, GOC Section 5's -I logic applied to a nitrogen acid instead of a carbon/oxygen one) — DISSOLVES in KOH as the soluble potassium salt"],
      ["Secondary (2 degree)", "Forms a sulfonamide with NO remaining N-H, R2N-SO2C6H5", "No acidic proton left to deprotonate — remains INSOLUBLE, precipitates out"],
      ["Tertiary (3 degree)", "Does not react at all (no N-H available to substitute in the first place)", "The amine itself may dissolve in the acidic reaction mixture as its ammonium salt, then separates back out as a free oily/liquid tertiary amine when the mixture is basified — distinguishable by physical separation rather than a solubility argument"],
    ]
  ),
  callout("Key idea", "The Hinsberg test's primary/secondary distinction is a direct, applied instance of the same 'does an acidic N-H/O-H/C-H exist, and can the resulting anion be stabilised' reasoning used throughout GOC — an electron-withdrawing sulfonyl group next to a lone remaining N-H makes exactly one class of sulfonamide acidic enough to deprotonate under basic conditions, and the other class simply has no such proton to work with."),

  // ── Section 4 ─────────────────────────────────────────────────────────────
  major(4),
  p("Aniline's -NH2 is a strong ortho/para-directing activator (Hydrocarbons Section 11) via the same resonance donation already established for phenol's -OH (Alcohols/Phenols Section 5) — the ring reacts readily and often over-substitutes unless the amine is first protected as its acetanilide (Section 2's acylation-as-protection)."),
  table(
    ["Reaction", "Direct on aniline", "On acetanilide (protected) instead"],
    [
      ["Bromination", "Gives 2,4,6-tribromoaniline directly, without a catalyst, exactly analogous to phenol's tribromination (Alcohols/Phenols Section 5) — the ring is that strongly activated", "Gives predominantly the mono-brominated para product, since -NHCOR is a milder activator than -NH2"],
      ["Nitration", "Gives a substantial amount of the meta isomer as a side product, because a fraction of -NH2 is protonated by the strongly acidic HNO3/H2SO4 medium into -NH3+, which is a DEACTIVATING, META-directing group (a positively charged nitrogen has no lone pair left to donate into the ring at all) — so the product is genuinely a mixture, not clean ortho/para", "Gives predominantly the para product cleanly, since the amide nitrogen's lone pair is less available for protonation under these conditions and remains a reliable ortho/para director throughout"],
    ]
  ),
  callout("JEE trap", "The appearance of meta-nitroaniline as a real side product of direct aniline nitration is a frequently tested exception to the simple 'amino group is always ortho/para-directing' rule — it exists specifically because the strongly acidic nitrating mixture protonates a meaningful fraction of the amine, temporarily converting the director from -NH2 (activating, o/p) to -NH3+ (deactivating, meta) for those protonated molecules. Acetylation avoids this entirely, which is precisely why it is the standard synthetic workaround."),

  // ── Section 5 ─────────────────────────────────────────────────────────────
  major(5),
  formula("Ar{-}NH_2 + NaNO_2 + 2\\,HCl \\xrightarrow{0{-}5^{\\circ}C} Ar{-}\\overset{+}{N}{\\equiv}N\\ Cl^- + NaCl + 2H_2O", "diazotisation"),
  p("Cold, dilute nitrous acid (generated in situ from NaNO2 + HCl) converts a primary aromatic amine into a diazonium salt. The low temperature (0-5 degrees Celsius) is essential — diazonium salts decompose readily above about 5-10 degrees Celsius, releasing N2 gas and generating an aryl cation (or proceeding through a related pathway) that reacts uncontrollably with whatever nucleophile is present, destroying the selectivity that makes diazonium chemistry useful in the first place."),
  callout("Warning / limitation", "Diazotisation works reliably only on PRIMARY AROMATIC amines. A primary aliphatic amine also diazotises, but the resulting aliphatic diazonium salt is far too unstable to isolate or use synthetically — it decomposes essentially immediately, even at 0 degrees Celsius, via loss of N2 to a highly reactive (and rearrangement-prone) carbocation, making aliphatic diazonium chemistry synthetically useless in practice. This instability is exactly why every named diazonium reaction in this chapter is written for an ARYL diazonium salt specifically."),

  // ── Section 6 ─────────────────────────────────────────────────────────────
  major(6),
  p("The diazonium group (-N2+) is an outstanding leaving group (loss of N2 gas is essentially irreversible and strongly thermodynamically favourable), which is exactly what makes the diazonium salt the single most versatile synthetic handle in organic chemistry — it converts an otherwise unreactive aryl position (haloarenes resist substitution, Haloalkanes Sections 7-8) into a site that accepts almost any nucleophile under mild, controlled conditions."),
  table(
    ["Reaction", "Reagents/conditions", "Product"],
    [
      ["Sandmeyer reaction", "CuCl or CuBr (or CuCN)", "Ar-Cl, Ar-Br, or Ar-CN respectively — the standard route to a haloarene or aryl nitrile at a position that could not be installed this cleanly by direct electrophilic substitution"],
      ["Gattermann reaction", "Cu powder + HCl/HBr (Cu metal in place of a cuprous salt)", "Ar-Cl or Ar-Br — a related, slightly lower-yielding alternative to Sandmeyer using the same copper-catalysed radical-like pathway"],
      ["Fluorination (Balz-Schiemann reaction)", "HBF4, then thermal decomposition of the isolated diazonium tetrafluoroborate salt", "Ar-F — since Sandmeyer-type conditions do not work for fluorine, this is the standard, essentially only reliable route to an aryl fluoride"],
      ["Iodination", "KI (no copper catalyst needed at all)", "Ar-I — iodide is nucleophilic enough to displace N2 directly without catalytic assistance, unlike chloride/bromide which require the Sandmeyer/Gattermann copper mechanism"],
      ["Hydrolysis", "H2O, warm (dilute H2SO4)", "Ar-OH — the standard alternative route to phenol described in Alcohols/Phenols Section 4"],
      ["Reduction (deamination)", "H3PO2 (hypophosphorous acid) or ethanol", "Ar-H — replaces the amino group with hydrogen entirely, used as a way to REMOVE a directing/activating -NH2 group after it has served its synthetic purpose (installed earlier via nitration + reduction specifically to control regiochemistry elsewhere on the ring, then deleted once no longer needed)"],
    ]
  ),
  callout("Key idea", "The Sandmeyer/Gattermann/Balz-Schiemann/iodination/hydrolysis/deamination reactions collectively make the amino group a TEMPORARY, removable directing group: install -NH2 via nitration + reduction specifically because -NH2 directs powerfully to ortho/para (Section 4), use that directing power to control where a DIFFERENT substituent goes, diazotise, then either convert the diazonium to the final desired substituent (halide, nitrile, -OH) or simply delete it via reductive deamination — a strategy with no equivalent anywhere else in this organic sequence, since no other functional group is both this strongly directing AND this cleanly removable afterward."),

  // ── Section 7 ─────────────────────────────────────────────────────────────
  major(7),
  p("A diazonium salt can also act as a weak ELECTROPHILE (rather than losing N2 to generate a nucleophile-accepting site) toward a strongly activated aromatic ring, giving an intensely coloured azo compound — the basis of azo dye chemistry."),
  formula("Ar{-}\\overset{+}{N}{\\equiv}N + Ar'{-}OH \\xrightarrow{\\text{cold, mildly alkaline}} Ar{-}N{=}N{-}Ar'{-}OH", "azo coupling with a phenol (couples para to -OH, or ortho if para is blocked)"),
  bullets([
    "Coupling partners must be STRONGLY activated rings — phenols (coupling occurs para to -OH, or ortho if the para position is blocked) and tertiary aromatic amines like N,N-dimethylaniline (coupling para to -NR2) are the standard partners; an unactivated or deactivated ring does not couple at all.",
    "The reaction is carried out at low temperature and mildly alkaline-to-neutral pH — too acidic and the phenol/amine coupling partner is insufficiently activated (or the amine is protonated to the non-nucleophilic/non-activating -NH3+ form, Section 4); too basic and the diazonium salt itself decomposes.",
    "The extended conjugation across the -N=N- azo linkage, connecting two aromatic rings into one larger conjugated system, is what gives azo compounds their characteristic intense colour — a direct, visible consequence of extended pi-electron delocalisation.",
  ]),
  callout("JEE-to-university bridge", "Azo coupling is best understood as ordinary electrophilic aromatic substitution (Hydrocarbons Section 9) with the diazonium ion itself playing the role of the electrophile (E+) attacking a strongly activated ring — the same arenium-ion mechanism and the same requirement for a genuinely activating substituent apply, just with an unusually large, nitrogen-containing electrophile instead of NO2+, SO3, or X+."),

  // ── Section 8 ─────────────────────────────────────────────────────────────
  major(8),
  sub("Q1 (JEE Advanced pattern — synthesis/protecting groups)"),
  p("Propose a synthesis of m-bromoaniline from benzene, explaining why direct bromination of aniline cannot give this product."),
  callout("Answer", "Direct bromination of aniline gives 2,4,6-tribromoaniline (Section 4) — -NH2 is too strongly activating and ortho/para-directing to ever place bromine at the meta position. Instead: (1) nitrate benzene (Hydrocarbons Section 10) to nitrobenzene; (2) brominate the nitrobenzene — -NO2 is a meta director (Hydrocarbons Section 11), giving m-bromonitrobenzene cleanly; (3) reduce the nitro group (Section 1, Fe/HCl or H2/Ni) to give m-bromoaniline. The overall strategy: install the meta-directing group FIRST, place the second substituent using its directing preference, then convert the directing group into the desired final -NH2 — exactly the amino-group-as-temporary-tool logic from Section 6, run in the opposite order (nitro installed and reduced LAST here, rather than installed-then-removed)."),
  sub("Q2 (JEE Advanced pattern — multiple correct, distinguishing tests)"),
  p("A compound X reacts with C6H5SO2Cl to give a product that is insoluble in excess KOH, and gives a NEGATIVE carbylamine test. What can be concluded about X?"),
  callout("Answer", "X is a SECONDARY amine. Insolubility in KOH after the Hinsberg reaction rules out a primary amine (Section 3 — primary gives a KOH-soluble sulfonamide) and is consistent with either secondary (insoluble sulfonamide) or the tertiary case (no reaction, separates as a free amine rather than truly being 'insoluble' in the same sense) — but the NEGATIVE carbylamine test rules out primary specifically (Section 2, carbylamine is positive ONLY for primary amines) while being consistent with secondary or tertiary amines (both give a negative carbylamine test). Combining both results: X reacted to form a genuine Hinsberg product that is insoluble (ruling out tertiary, which wouldn't react with the sulfonyl chloride at all) and gave a negative carbylamine test (ruling out primary) — together these are only consistent with a secondary amine."),
  sub("Q3 (JEE Advanced pattern — diazonium synthesis chain)"),
  p("Starting from aniline, propose a synthesis of fluorobenzene, and explain why this diazonium-based route is necessary rather than a more direct method."),
  callout("Answer", "Diazotise aniline (Section 5: NaNO2/HCl, 0-5 degrees Celsius) to benzenediazonium chloride, then treat with HBF4 to precipitate the diazonium tetrafluoroborate salt, and finally heat the isolated dry salt (Balz-Schiemann reaction, Section 6) to give fluorobenzene + BF3 + N2. This route is necessary because direct fluorination of benzene (Hydrocarbons Section 2/Section 10) is far too violent and unselective to use synthetically, and the Swarts reaction (Haloalkanes Section 5) only converts an existing alkyl/aryl chloride or bromide to a fluoride via a halogen-exchange mechanism that does not work cleanly on an aromatic ring — the Balz-Schiemann route via a diazonium salt is essentially the only reliable way to install fluorine directly onto a benzene ring."),
  sub("Q4 (JEE Advanced pattern — azo coupling regiochemistry)"),
  p("Benzenediazonium chloride is coupled with phenol under mildly alkaline conditions. Predict the position of coupling and explain the mechanistic reasoning."),
  callout("Answer", "Coupling occurs predominantly PARA to the -OH group (giving 4-(phenyldiazenyl)phenol / p-hydroxyazobenzene), because the electrophilic diazonium ion attacks the position where the phenoxide's resonance-donated electron density (GOC Section 6, Alcohols/Phenols Section 4) is highest and least sterically hindered — exactly the same ortho/para-directing preference already established for phenol in electrophilic aromatic substitution generally (Alcohols/Phenols Section 5), just with the diazonium ion itself as the electrophile (Section 7) rather than Br2, NO2+, or SO3. Mildly alkaline conditions ensure the phenol is substantially present as the more nucleophilic/more strongly activating phenoxide form."),
];
