// Biomolecules — carbohydrates, proteins, enzymes, vitamins and nucleic
// acids. Draws on carbonyl chemistry (aldose/ketose reactivity, Tollens'/
// Fehling's tests) and amine/carboxylic acid chemistry (the amino acid
// zwitterion, the peptide bond as an amide) rather than re-deriving them.

export type BioBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "paragraph";

export type BioBlock = {
  kind: BioBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
};

const sections = [
  "Carbohydrates: Classification and Structure",
  "Carbohydrates: Mutarotation and Chemical Reactions",
  "Amino Acids and the Zwitterion",
  "Proteins: The Peptide Bond and Levels of Structure",
  "Enzymes",
  "Vitamins",
  "Nucleic Acids: DNA and RNA",
  "JEE Advanced Question Bank",
];

export const bioChapterMap: string[] = [...sections];

function major(n: number): BioBlock {
  return { kind: "major", text: `Section ${n} - ${sections[n - 1]}` };
}
function sub(text: string): BioBlock {
  return { kind: "subheading", text };
}
function p(text: string): BioBlock {
  return { kind: "paragraph", text };
}
function callout(label: string, text: string): BioBlock {
  return { kind: "callout", text: `${label}: ${text}` };
}
function bullets(items: string[]): BioBlock {
  return { kind: "bullets", items };
}
function table(headers: string[], rows: string[][]): BioBlock {
  return { kind: "table", headers, rows };
}
function formula(text: string, formulaLabel?: string): BioBlock {
  return { kind: "formula", text, formulaLabel };
}

export const bioBlocks: BioBlock[] = [
  // ── Section 1 ─────────────────────────────────────────────────────────────
  major(1),
  table(
    ["Class", "Definition", "Examples"],
    [
      ["Monosaccharide", "Cannot be hydrolysed further into simpler polyhydroxy aldehyde/ketone units", "Glucose (aldohexose), fructose (ketohexose), ribose (aldopentose)"],
      ["Oligosaccharide", "Hydrolyses into 2-10 monosaccharide units", "Sucrose, maltose, lactose (all disaccharides — hydrolyse into exactly 2 monosaccharide units)"],
      ["Polysaccharide", "Hydrolyses into many (often thousands of) monosaccharide units", "Starch, cellulose, glycogen"],
      ["Reducing sugar", "Has a free (or freeable, via ring-opening) anomeric -OH that can act as an aldehyde/hemiacetal, giving a positive Tollens'/Fehling's test (Carbonyls Section 10)", "Glucose, fructose, maltose, lactose"],
      ["Non-reducing sugar", "Both anomeric carbons are tied up in the glycosidic bond, with no free reducing group left", "Sucrose — the only common disaccharide that is non-reducing"],
    ]
  ),
  p("Glucose (an aldohexose, C6H12O6) exists predominantly in a cyclic hemiacetal form (a six-membered pyranose ring, formed by intramolecular nucleophilic addition of the C5-OH onto the C1 aldehyde carbon — exactly the hemiacetal-formation mechanism from Carbonyls Section 4, just intramolecular instead of intermolecular), not as an open-chain polyhydroxy aldehyde."),
  callout("Key idea", "Cyclisation of glucose creates a NEW stereocentre at C1 (the anomeric carbon) that did not exist as a stereocentre in the open-chain form, since C1 was a planar sp2 carbonyl carbon before ring closure — this generates two distinct cyclic diastereomers, alpha-D-glucose and beta-D-glucose (anomers), differing only in the spatial orientation of the new C1-OH relative to the ring. This is a direct, applied consequence of nucleophilic addition to a carbonyl (Carbonyls Section 1) creating a new tetrahedral stereocentre from a previously planar carbon."),
  sub("Fischer projection: open-chain configuration"),
  p("D-glucose is defined by the configuration at C5 (the stereocentre farthest from the carbonyl) matching D-glyceraldehyde — by convention, the -OH at that carbon points to the right in the standard Fischer projection. This D/L labelling describes the OPEN-CHAIN configuration at a single reference carbon and is entirely independent of the alpha/beta anomeric labelling, which instead describes the NEW stereocentre created specifically upon ring closure (Section 1's cyclisation) — the two labels answer genuinely different structural questions and should never be conflated."),

  // ── Section 2 ─────────────────────────────────────────────────────────────
  major(2),
  p("Mutarotation is the spontaneous, observable change in optical rotation when either pure alpha-D-glucose or pure beta-D-glucose is dissolved in water, as each interconverts through the open-chain form to reach the same final equilibrium mixture (approximately 36% alpha, 64% beta, plus a negligible trace of open-chain aldehyde form) — direct experimental proof that the cyclic hemiacetal form is in dynamic equilibrium with the open-chain aldehyde, exactly the reversibility already established for hemiacetal/acetal formation in Carbonyls Section 4."),
  table(
    ["Reaction", "Reagent/conditions", "Product / significance"],
    [
      ["Oxidation (mild)", "Br2 water (mild oxidant, oxidises only the aldehyde, not the alcohols)", "Gluconic acid — used specifically to distinguish glucose (which reacts) from fructose (a ketone, unreactive toward this mild oxidant, since ketones resist oxidation under conditions this gentle — Carbonyls Section 3)"],
      ["Oxidation (strong)", "Dilute HNO3", "Saccharic acid — both the terminal -CH2OH and the aldehyde are oxidised to -COOH"],
      ["Reduction", "H2/Ni, or NaBH4", "Sorbitol — the carbonyl is reduced to an alcohol, exactly as in Carbonyls Section 2's aldehyde-to-1-degree-alcohol reduction"],
      ["Osazone formation", "Excess phenylhydrazine (Carbonyls Section 4's hydrazone condensation, applied three times in a specific pattern)", "A characteristic, sharply crystalline osazone — glucose and fructose give the SAME osazone (since the reaction destroys the stereochemical distinction at C1/C2, the only carbons where they actually differ), a classic way this test is used to show that two sugars share the same configuration from C3 onward despite differing at C1-C2"],
      ["Fermentation", "Zymase enzyme (yeast)", "Ethanol + CO2 — an enzyme-catalysed reaction (Section 5), industrially important, distinct from the purely chemical reactions above"],
    ]
  ),
  callout("JEE-to-university bridge", "Every one of these carbohydrate reactions is a direct, applied instance of ordinary carbonyl chemistry (Carbonyls Sections 1-4) — the only genuinely new content in this section is recognising WHICH carbon is reactive (the aldehyde carbon in glucose, accessible via the ring-opening equilibrium established by mutarotation) and why fructose behaves differently (it is a ketone, resistant to the mild Br2-water oxidation that a genuine aldehyde undergoes readily)."),

  // ── Section 3 ─────────────────────────────────────────────────────────────
  major(3),
  p("An alpha-amino acid carries both a basic -NH2 group and an acidic -COOH group on the SAME carbon (the alpha carbon) — since both groups are present in the same molecule, an intramolecular proton transfer occurs spontaneously, giving a zwitterion (a species carrying both a positive and a negative charge, with zero NET charge) as the dominant form at physiological/neutral pH."),
  formula("H_2N{-}CHR{-}COOH \\ \\rightleftharpoons\\ {}^+H_3N{-}CHR{-}COO^-", "zwitterion equilibrium — the zwitterion form dominates near neutral pH"),
  callout("Key idea", "The zwitterion form directly explains several otherwise-puzzling physical properties of amino acids: high melting points (comparable to ionic salts, since the zwitterion behaves electrostatically like an internal salt rather than a simple small organic molecule), good water solubility, and a large dipole moment — properties that would be very unusual for a molecule this small if it existed as the simple neutral H2N-CHR-COOH structure implied by the written formula."),
  sub("Isoelectric point (pI)"),
  p("The isoelectric point is the specific pH at which an amino acid carries zero NET charge (existing predominantly as the neutral zwitterion, not as the cationic or anionic form) — at this pH, the amino acid does not migrate toward either electrode under an applied electric field (electrophoresis), which is the standard experimental method used to determine pI. Below pI, the amino acid is predominantly protonated/cationic (the carboxylate reprotonates to -COOH before the ammonium deprotonates); above pI, it is predominantly deprotonated/anionic."),
  callout("Warning / limitation", "For amino acids with an additional ionisable side chain (e.g. the extra -COOH of aspartic/glutamic acid, or the extra basic group of lysine/arginine/histidine), pI is NOT simply the average of the alpha-amino and alpha-carboxyl pKa values — it must be calculated from the pKa values of the two groups that are actually adjacent to the neutral (zero-net-charge) species specifically, which for an acidic side-chain amino acid is the average of the two -COOH-type pKa values, not the amino group's pKa at all."),

  // ── Section 4 ─────────────────────────────────────────────────────────────
  major(4),
  p("A peptide bond is simply an amide bond (Carbonyls Section 1's nucleophilic addition to a carbonyl, followed by loss of water — the same condensation mechanism already used for aldol condensation and imine formation) formed between the -COOH of one amino acid and the -NH2 of another."),
  formula("H_2N{-}CHR_1{-}COOH + H_2N{-}CHR_2{-}COOH \\longrightarrow H_2N{-}CHR_1{-}CO{-}NH{-}CHR_2{-}COOH + H_2O", "dipeptide formation"),
  callout("Key idea", "The peptide bond (C-N bond of the amide) has significant PARTIAL DOUBLE-BOND character, because the nitrogen lone pair delocalises by resonance into the adjacent carbonyl (GOC Section 6's resonance argument, applied to an amide instead of an aromatic ring or carboxylate) — this restricts free rotation around the C-N bond, forcing the peptide bond to be planar and locking it into a fixed (almost always trans/E) geometry. This structural rigidity is the direct starting point for protein secondary structure (below), since a chain of rigid, planar peptide units is what allows regular, repeating structural motifs to form at all."),
  sub("Levels of protein structure"),
  table(
    ["Level", "Description", "Stabilising interaction"],
    [
      ["Primary", "The linear sequence of amino acids joined by peptide bonds", "Covalent peptide bonds"],
      ["Secondary", "Local, regular folding patterns — the alpha-helix (a single coiled chain) and the beta-pleated sheet (extended, side-by-side strands)", "Hydrogen bonding between the backbone C=O of one peptide bond and the backbone N-H of another, repeating at a regular interval along the chain"],
      ["Tertiary", "The overall three-dimensional folded shape of a single polypeptide chain", "Multiple weaker interactions acting together: hydrogen bonds, ionic (salt-bridge) interactions between charged side chains, hydrophobic packing of non-polar side chains away from water, and covalent disulfide bridges (-S-S-) between cysteine residues"],
      ["Quaternary", "The specific spatial arrangement of two or more separate polypeptide subunits assembled into one functional protein complex", "Same non-covalent interaction types as tertiary structure, but operating BETWEEN separate chains rather than within a single one — only proteins built from multiple subunits (e.g. haemoglobin, four subunits) have a quaternary structure at all"],
    ]
  ),
  sub("Denaturation"),
  p("Denaturation is the loss of secondary, tertiary and quaternary structure (disruption of the non-covalent interactions and, under harsher conditions, disulfide bonds) WITHOUT breaking the primary sequence's peptide bonds themselves — caused by heat, extremes of pH, heavy metal ions, or organic solvents. A denatured protein loses its specific three-dimensional shape and, with it, essentially all biological function (most dramatically, enzymatic activity, Section 5), even though its covalent primary structure remains completely intact."),

  // ── Section 5 ─────────────────────────────────────────────────────────────
  major(5),
  p("Enzymes are protein catalysts (Section 4's tertiary structure creates a specific three-dimensional active site) that dramatically accelerate biological reactions by lowering the activation energy of a specific step, without being consumed themselves — the same fundamental definition of a catalyst used everywhere else in chemistry, just built from a folded protein rather than a simple inorganic surface or ion."),
  bullets([
    "Specificity: an enzyme's active site is shaped (and chemically decorated with specific side-chain functional groups) to bind only a particular substrate or class of substrates, often described by the 'lock and key' model (a rigid, pre-shaped fit) or the more accurate 'induced fit' model (the active site subtly reshapes around the substrate as it binds).",
    "Because enzyme activity depends entirely on the protein's precise folded shape (Section 4's tertiary structure), any denaturing condition (excess heat, extreme pH, heavy metal poisoning) that disrupts that folding destroys enzymatic activity — this is exactly why fever above a certain temperature, or extreme pH imbalance, is medically dangerous: the enzymes the body depends on for essentially every metabolic reaction begin to denature and lose function.",
    "Many enzymes require a non-protein cofactor (a metal ion) or coenzyme (an organic molecule, very often derived directly from a vitamin, Section 6) bound at or near the active site to achieve full catalytic activity — without it, the enzyme (now called an apoenzyme) is catalytically inactive.",
  ]),

  // ── Section 6 ─────────────────────────────────────────────────────────────
  major(6),
  p("Vitamins are organic compounds required in small quantities that the body cannot synthesise (or cannot synthesise in sufficient amount) and must obtain from the diet — classified by solubility, which directly determines how the body stores and can overdose on each vitamin."),
  table(
    ["Class", "Examples", "Storage / deficiency behaviour"],
    [
      ["Fat-soluble", "A, D, E, K", "Stored in the body's fat tissue, so deficiency develops slowly, but excess intake can accumulate to toxic (hypervitaminosis) levels over time"],
      ["Water-soluble", "B-complex (B1 thiamine, B2 riboflavin, B3 niacin, B6, B12, etc.), C (ascorbic acid)", "NOT significantly stored — excess is simply excreted in urine, so deficiency develops relatively quickly without regular dietary intake, but toxicity from excess intake is comparatively rare"],
    ]
  ),
  table(
    ["Vitamin", "Deficiency disease"],
    [
      ["A (retinol)", "Night blindness (xerophthalmia)"],
      ["B1 (thiamine)", "Beriberi"],
      ["B2 (riboflavin)", "Cheilosis (cracking at the corners of the mouth)"],
      ["C (ascorbic acid)", "Scurvy"],
      ["D (calciferol)", "Rickets (children) / osteomalacia (adults)"],
      ["K", "Increased blood clotting time (impaired coagulation)"],
    ]
  ),
  callout("JEE-to-university bridge", "Several B-complex vitamins function directly as coenzymes (Section 5) once metabolically converted into their active form — e.g. niacin (B3) is the precursor to NAD+/NADH, the central hydride-carrying coenzyme in cellular oxidation-reduction reactions, connecting this section directly back to the enzyme cofactor concept just introduced, rather than being an isolated list of names and diseases to memorise."),

  // ── Section 7 ─────────────────────────────────────────────────────────────
  major(7),
  p("A nucleic acid is a polymer of nucleotides, each nucleotide built from three components: a nitrogenous base, a pentose sugar, and a phosphate group."),
  table(
    ["Component", "DNA", "RNA"],
    [
      ["Sugar", "2-deoxyribose (lacks the 2'-OH present in ribose)", "Ribose"],
      ["Purine bases", "Adenine (A), Guanine (G)", "Adenine (A), Guanine (G) — same as DNA"],
      ["Pyrimidine bases", "Cytosine (C), Thymine (T)", "Cytosine (C), Uracil (U) — Uracil replaces Thymine"],
      ["Strand structure", "Double helix (two complementary antiparallel strands)", "Predominantly single-stranded (though it can fold back on itself into local double-helical regions)"],
    ]
  ),
  sub("Base pairing"),
  p("In the DNA double helix, A always pairs with T (via two hydrogen bonds), and G always pairs with C (via three hydrogen bonds) — this specific, complementary pairing (Chargaff's rule: %A = %T and %G = %C in any double-stranded DNA sample) is what allows one strand's sequence to be read off directly from the other, and is the direct structural basis for both DNA replication and the transcription of RNA from a DNA template."),
  callout("Key idea", "The G-C base pair (three hydrogen bonds) is measurably STRONGER than the A-T base pair (two hydrogen bonds) — a DNA sample with a higher G-C content requires more thermal energy to separate (denature) its two strands than an otherwise similar sample with higher A-T content, a direct, testable structural consequence of simply counting hydrogen bonds per base pair, exactly the same hydrogen-bonding reasoning used to explain protein secondary structure in Section 4."),
  p("RNA exists in three main functional types, each serving a distinct role in protein synthesis: messenger RNA (mRNA) carries the genetic code copied from DNA to the site of protein synthesis; ribosomal RNA (rRNA) forms the structural and catalytic core of the ribosome itself; and transfer RNA (tRNA) physically carries a specific amino acid and matches it to the correct codon on mRNA during translation — together, these three RNA types are what convert the base-sequence information stored in DNA into an actual protein's amino acid sequence (Section 4)."),

  // ── Section 8 ─────────────────────────────────────────────────────────────
  major(8),
  sub("Q1 (JEE Advanced pattern — reasoning/distinguishing test)"),
  p("Glucose and fructose both give a positive reaction with Tollens' reagent, yet only glucose reacts with bromine water. Explain both observations."),
  callout("Answer", "Fructose gives a positive Tollens' test even though it is formally a ketone (not an aldehyde) because Tollens' reagent is mildly basic, and under basic conditions fructose undergoes base-catalysed isomerisation (via an enediol intermediate) to a mixture that includes glucose and mannose — the aldehyde form generated THIS way is what actually reduces Tollens' reagent, an indirect route rather than fructose's own ketone reacting directly. Bromine water, however, is a MILD, essentially neutral oxidant with no such isomerising basic character (Section 2) — it oxidises glucose's genuine aldehyde directly and rapidly, but does not have the opportunity/mechanism to isomerise fructose first, so fructose does not react with Br2 water under the short reaction times normally used for this specific distinguishing test."),
  sub("Q2 (JEE Advanced pattern — structure/isoelectric point)"),
  p("Glycine (pKa of -COOH ~2.3, pKa of -NH3+ ~9.6) has an isoelectric point of about 6.0. Explain why pI is calculated as the average of these two pKa values specifically, and predict glycine's net charge at pH 2."),
  callout("Answer", "pI is the average of the two pKa values that flank the NEUTRAL zwitterion species on the titration curve — below pKa1 (~2.3), the molecule is predominantly the fully protonated cation (+H3N-CH2-COOH); between pKa1 and pKa2, it is predominantly the neutral zwitterion (+H3N-CH2-COO-); above pKa2 (~9.6), it is predominantly the fully deprotonated anion (H2N-CH2-COO-). The pH exactly midway between the two transitions is where the population is most purely the neutral zwitterion form, hence pI = (pKa1 + pKa2)/2 (Section 3). At pH 2 (below pKa1), glycine is predominantly protonated at both sites that can be, i.e. predominantly the CATIONIC form, +H3N-CH2-COOH, carrying a net POSITIVE charge."),
  sub("Q3 (JEE Advanced pattern — structure identification)"),
  p("A dipeptide gives a positive biuret test (indicating at least one peptide bond) and, on complete acid hydrolysis, yields only alanine. Draw both possible structures consistent with this data, and explain why they are NOT the same compound."),
  callout("Answer", "Two dipeptides are possible: Ala-Ala where the first alanine's -COOH bonds to the second alanine's -NH2 (Ala-Ala, one specific direction), and the same pairing formed in the reverse order relative to which nitrogen/carboxyl terminus is which residue's contribution — though since both residues are identical alanine here, these two 'directions' actually produce the SAME molecule for a homodipeptide specifically (this is the key structural point the question is testing: for a dipeptide of two DIFFERENT amino acids, e.g. Ala-Gly vs Gly-Ala, the two orders genuinely give two DIFFERENT, non-identical compounds, because the peptide bond direction — which residue contributes the -COOH and which contributes the -NH2 — is not symmetric once the two residues differ). With only alanine present, Ala-Ala is the unique possible structure."),
  sub("Q4 (JEE Advanced pattern — nucleic acid reasoning)"),
  p("A sample of double-stranded DNA is found to be 30% adenine by base composition. Determine the percentages of the other three bases, and explain the reasoning (Chargaff's rule)."),
  callout("Answer", "By Chargaff's rule (Section 7), %A = %T in double-stranded DNA, so %T = 30%. The remaining 40% is shared equally between G and C (since %G = %C by the same rule): %G = %C = 20% each. This follows directly and only from the strict A-T / G-C complementary base-pairing rule established by the double helix's hydrogen-bonding structure — every A on one strand requires exactly one T on the complementary strand, and every G requires exactly one C, so the total base composition of a double-stranded sample is constrained to satisfy both equalities simultaneously."),
];
