// lib/masterSyllabus/exceptions.ts
export interface ChemistryException {
  id: string;
  topic: string;
  observation: string;
  reason: string;
}

export const exceptionsList: ChemistryException[] = [
  {
    id: "ex-f2-bond-energy",
    topic: "F2 Bond Dissociation Energy",
    observation: "Fluorine (F2) has a lower bond dissociation energy than Chlorine (Cl2) and Bromine (Br2).",
    reason: "Due to the small size of the fluorine atom, the lone pairs on the highly electronegative fluorine atoms experience significant inter-electronic repulsion, weakening the F-F covalent bond."
  },
  {
    id: "ex-inert-pair",
    topic: "Inert Pair Effect",
    observation: "Heavier p-block elements (like Tl, Pb, Bi) show lower oxidation states equal to (group number - 10) rather than group valency.",
    reason: "The s-electrons (ns2) are held tightly by the nucleus due to poor shielding by intervening d and f orbitals, making them reluctant to participate in bond formation."
  },
  {
    id: "ex-ice-density",
    topic: "Anomalous Density of Water",
    observation: "Ice is less dense than liquid water and floats on it.",
    reason: "In ice, water molecules are held together by extensive intermolecular hydrogen bonding in a highly open cage-like three-dimensional structure, leaving large empty spaces."
  },
  {
    id: "ex-be-bonding",
    topic: "Beryllium Shows Diagonal Relationship with Aluminium",
    observation: "Beryllium resembles aluminium more than magnesium in many covalent and amphoteric compounds.",
    reason: "Be2+ and Al3+ have comparable charge density and strong polarising power, so their compounds show similar covalent character."
  },
  {
    id: "ex-li-anomaly",
    topic: "Lithium Differs from Other Alkali Metals",
    observation: "Lithium forms normal oxide Li2O, nitride Li3N, and less soluble carbonate compared with heavier alkali metals.",
    reason: "The very small Li+ ion has high polarising power and high hydration enthalpy, producing anomalous behaviour."
  },
  {
    id: "ex-li-reduction-potential",
    topic: "Lithium Has Most Negative Reduction Potential",
    observation: "Lithium is the strongest reducing agent in aqueous solution among alkali metals.",
    reason: "Its very high hydration enthalpy overcomes the high ionisation enthalpy and makes Li+ formation in water highly favourable."
  },
  {
    id: "ex-beryllium-amphoteric",
    topic: "Beryllium Oxide and Hydroxide Are Amphoteric",
    observation: "BeO and Be(OH)2 react with both acids and bases.",
    reason: "Small Be2+ has high charge density and gives compounds with significant covalent and amphoteric character."
  },
  {
    id: "ex-boron-nonmetal",
    topic: "Boron Is a Non-metal in Group 13",
    observation: "Boron is non-metallic while the remaining group 13 elements are metallic.",
    reason: "Boron has very small size, high ionisation enthalpy, and strong covalent bonding tendency."
  },
  {
    id: "ex-bf3-lewis-acidity",
    topic: "BF3 Is Weaker Lewis Acid than BCl3",
    observation: "Lewis acidity order among boron trihalides is BF3 < BCl3 < BBr3.",
    reason: "Back donation from filled p orbital of fluorine to vacant p orbital of boron is strongest in BF3, reducing electron deficiency at boron."
  },
  {
    id: "ex-carbon-catenation",
    topic: "Carbon Shows Maximum Catenation",
    observation: "Carbon forms longer and stronger chains than silicon, germanium, tin, or lead.",
    reason: "The C-C bond is strong because carbon has small atomic size and effective orbital overlap."
  },
  {
    id: "ex-co2-gas-sio2-solid",
    topic: "CO2 Is Gas but SiO2 Is Solid",
    observation: "Carbon dioxide is molecular and gaseous, while silicon dioxide is a giant covalent solid.",
    reason: "Carbon forms stable pi bonds with oxygen, whereas silicon prefers extended Si-O-Si sigma-bonded networks."
  },
  {
    id: "ex-nitrogen-inertness",
    topic: "Nitrogen Is Relatively Inert",
    observation: "N2 is much less reactive than heavier group 15 elemental forms.",
    reason: "The N triple bond N bond has very high bond dissociation enthalpy."
  },
  {
    id: "ex-nitrogen-catenation",
    topic: "Nitrogen Shows Poor Catenation",
    observation: "Nitrogen does not show catenation comparable to carbon.",
    reason: "N-N single bonds are weak because lone pair-lone pair repulsion is strong on small nitrogen atoms."
  },
  {
    id: "ex-nh3-basicity",
    topic: "Ammonia Is More Basic than Phosphine",
    observation: "NH3 is more basic than PH3 in aqueous medium.",
    reason: "Nitrogen is smaller and more electronegative, and its lone pair is more available for protonation in water."
  },
  {
    id: "ex-oxygen-electron-gain",
    topic: "Oxygen Has Less Negative Electron Gain Enthalpy than Sulfur",
    observation: "Sulfur has more negative electron gain enthalpy than oxygen.",
    reason: "The added electron in oxygen enters a compact 2p orbital with higher inter-electronic repulsion."
  },
  {
    id: "ex-oxygen-diatomic",
    topic: "Oxygen Is Diatomic but Sulfur Is Polyatomic",
    observation: "Oxygen exists mainly as O2, while sulfur exists as S8 under ordinary conditions.",
    reason: "Oxygen forms effective p-p pi bonds; sulfur forms stronger S-S single-bonded rings."
  },
  {
    id: "ex-fluorine-oxidation-state",
    topic: "Fluorine Shows Only -1 Oxidation State",
    observation: "Fluorine does not show positive oxidation states.",
    reason: "It is the most electronegative element and has no vacant d orbitals in its valence shell."
  },
  {
    id: "ex-hf-boiling-point",
    topic: "HF Has Abnormally High Boiling Point",
    observation: "HF boils much higher than HCl, HBr, and HI.",
    reason: "Strong intermolecular hydrogen bonding associates HF molecules."
  },
  {
    id: "ex-hf-weak-acid",
    topic: "HF Is Weak Compared with Other Hydrogen Halides",
    observation: "Acid strength order is HF < HCl < HBr < HI.",
    reason: "The H-F bond is very strong, so ionisation of HF in water is less favourable."
  },
  {
    id: "ex-cl-electron-gain",
    topic: "Chlorine Has More Negative Electron Gain Enthalpy than Fluorine",
    observation: "Electron gain enthalpy of chlorine is more negative than fluorine.",
    reason: "The incoming electron in fluorine enters a very small 2p orbital with stronger electron-electron repulsion."
  },
  {
    id: "ex-noble-gas-compounds",
    topic: "Xenon Forms Compounds More Readily than Lighter Noble Gases",
    observation: "Xe forms fluorides and oxides, while He, Ne, and Ar are far less reactive.",
    reason: "Xenon has lower ionisation enthalpy and larger, more polarisable electron cloud."
  },
  {
    id: "ex-cr-cu-configuration",
    topic: "Chromium and Copper Electronic Configurations",
    observation: "Cr is [Ar] 3d5 4s1 and Cu is [Ar] 3d10 4s1 instead of expected 3d4 4s2 and 3d9 4s2.",
    reason: "Half-filled and fully-filled d subshells gain extra exchange energy and symmetry stability."
  },
  {
    id: "ex-zinc-colourless",
    topic: "Zinc Salts Are Colourless",
    observation: "Zn2+ compounds are usually colourless and diamagnetic.",
    reason: "Zn2+ has a completely filled 3d10 configuration, so d-d transitions are not possible."
  },
  {
    id: "ex-copper-positive-srp",
    topic: "Copper Has Positive Standard Reduction Potential",
    observation: "Cu2+/Cu has positive E0 while many first-row transition metals have negative values.",
    reason: "High atomisation and ionisation requirements are not fully compensated by hydration enthalpy for copper."
  },
  {
    id: "ex-manganese-stability",
    topic: "Mn2+ Is Especially Stable",
    observation: "Mn2+ is more stable than Mn3+ in many aqueous situations.",
    reason: "Mn2+ has a half-filled 3d5 configuration with high exchange stabilisation."
  },
  {
    id: "ex-lanthanide-contraction",
    topic: "Lanthanide Contraction",
    observation: "Atomic and ionic radii decrease only gradually from La to Lu.",
    reason: "4f electrons shield nuclear charge poorly, so effective nuclear charge increases across the series."
  },
  {
    id: "ex-zr-hf-similarity",
    topic: "Zirconium and Hafnium Similarity",
    observation: "Zr and Hf have very similar radii and chemical behaviour.",
    reason: "Lanthanide contraction offsets the expected size increase from 4d to 5d elements."
  },
  {
    id: "ex-phenol-acidity",
    topic: "Phenol Is More Acidic than Alcohol",
    observation: "Phenol is more acidic than ethanol.",
    reason: "Phenoxide ion is resonance stabilised, while ethoxide ion has no comparable delocalisation."
  },
  {
    id: "ex-phenol-bromination",
    topic: "Phenol Gives 2,4,6-Tribromophenol with Bromine Water",
    observation: "Phenol reacts with bromine water without Lewis acid to give a white precipitate of 2,4,6-tribromophenol.",
    reason: "The -OH group strongly activates the ring and directs electrophilic substitution to ortho and para positions."
  },
  {
    id: "ex-aniline-bromination",
    topic: "Aniline Gives 2,4,6-Tribromoaniline with Bromine Water",
    observation: "Aniline gives a white precipitate of 2,4,6-tribromoaniline with bromine water.",
    reason: "The -NH2 group strongly activates the benzene ring at ortho and para positions."
  },
  {
    id: "ex-aniline-basicity",
    topic: "Aniline Is Less Basic than Aliphatic Amines",
    observation: "Aniline is less basic than methylamine and other simple aliphatic amines.",
    reason: "The nitrogen lone pair is delocalised into the benzene ring and is less available for protonation."
  },
  {
    id: "ex-amide-basicity",
    topic: "Amides Are Much Less Basic than Amines",
    observation: "Amides are far less basic than amines.",
    reason: "The nitrogen lone pair is delocalised into the carbonyl group by resonance."
  },
  {
    id: "ex-formic-acid-tollens",
    topic: "Formic Acid Reduces Tollens' Reagent",
    observation: "Formic acid gives Tollens' test although it is a carboxylic acid.",
    reason: "It contains an aldehydic hydrogen equivalent and is readily oxidised to carbon dioxide."
  },
  {
    id: "ex-benzaldehyde-fehling",
    topic: "Benzaldehyde Does Not Reduce Fehling's Solution",
    observation: "Benzaldehyde gives Tollens' test but generally does not reduce Fehling's solution.",
    reason: "Aromatic aldehydes are not readily oxidised by Fehling's alkaline copper complex."
  },
  {
    id: "ex-alpha-h-aldol",
    topic: "Aldehydes without Alpha Hydrogen Do Not Give Aldol",
    observation: "Formaldehyde and benzaldehyde do not undergo self aldol condensation.",
    reason: "They cannot form the required enolate because they lack alpha hydrogen."
  },
  {
    id: "ex-cannizzaro",
    topic: "Cannizzaro Reaction Requires No Alpha Hydrogen",
    observation: "Aldehydes without alpha hydrogen undergo Cannizzaro reaction in concentrated base.",
    reason: "They cannot form enolate, so hydride transfer between aldehyde molecules becomes the main pathway."
  },
  {
    id: "ex-tert-halide-sn1",
    topic: "Tertiary Halides Prefer SN1",
    observation: "Tertiary alkyl halides undergo SN1 more readily than SN2.",
    reason: "Tertiary carbocations are relatively stable and steric hindrance blocks backside attack."
  },
  {
    id: "ex-primary-halide-sn2",
    topic: "Primary Halides Prefer SN2",
    observation: "Primary alkyl halides usually undergo SN2 substitution with strong nucleophiles.",
    reason: "Backside attack is sterically accessible and primary carbocations are unstable."
  },
  {
    id: "ex-aryl-halide-sn",
    topic: "Aryl Halides Resist Normal Nucleophilic Substitution",
    observation: "Chlorobenzene is much less reactive than alkyl chlorides toward SN1 or SN2.",
    reason: "The C-Cl bond has partial double-bond character by resonance, and backside attack at sp2 carbon is difficult."
  },
  {
    id: "ex-vinyl-halide-sn",
    topic: "Vinyl Halides Resist SN1 and SN2",
    observation: "Vinyl chloride is resistant to ordinary nucleophilic substitution.",
    reason: "The C-X bond is attached to sp2 carbon and has higher bond strength; vinyl carbocations are highly unstable."
  },
  {
    id: "ex-grignard-moisture",
    topic: "Grignard Reagents Require Dry Ether",
    observation: "Grignard reagents are destroyed by water, alcohols, and other acidic protons.",
    reason: "The carbon-magnesium bond is strongly polar and behaves as a carbanion source, so protonation gives hydrocarbon."
  },
  {
    id: "ex-peroxide-effect",
    topic: "Peroxide Effect Is Seen Only with HBr",
    observation: "Anti-Markovnikov addition in peroxide conditions is reliable for HBr but not HCl or HI.",
    reason: "Only the HBr radical chain has favourable propagation enthalpy for both radical steps."
  },
  {
    id: "ex-markovnikov-rearrangement",
    topic: "Carbocation Rearrangement in Alkene Addition",
    observation: "Acid-catalysed addition to alkenes can give rearranged products.",
    reason: "The reaction passes through carbocation intermediates that can rearrange by hydride or alkyl shift."
  },
  {
    id: "ex-terminal-alkyne-acidity",
    topic: "Terminal Alkynes Are More Acidic than Alkenes",
    observation: "Terminal alkynes react with sodamide or ammoniacal silver salts, unlike alkenes.",
    reason: "The conjugate base has negative charge on sp-hybridised carbon with high s-character."
  },
  {
    id: "ex-toluene-side-chain-oxidation",
    topic: "Alkylbenzene Side Chain Oxidises to Benzoic Acid",
    observation: "Toluene and many alkylbenzenes give benzoic acid with hot alkaline KMnO4.",
    reason: "Benzylic C-H bonds are oxidised completely while the aromatic ring remains intact under these conditions."
  },
  {
    id: "ex-ester-lah-vs-nabh4",
    topic: "Esters Reduce with LiAlH4 but Not Normally with NaBH4",
    observation: "LiAlH4 reduces esters to alcohols, while NaBH4 usually reduces aldehydes and ketones only.",
    reason: "LiAlH4 is a much stronger hydride donor than NaBH4."
  },
  {
    id: "ex-acid-chloride-reactivity",
    topic: "Acid Chlorides Are More Reactive than Amides",
    observation: "Acid chlorides undergo nucleophilic acyl substitution much faster than amides.",
    reason: "Chloride is a better leaving group and donates less by resonance than -NH2."
  },
  {
    id: "ex-iodoform-specificity",
    topic: "Iodoform Test Requires Methyl Carbonyl Unit",
    observation: "Methyl ketones and ethanol/acetaldehyde type compounds give yellow iodoform precipitate.",
    reason: "The reaction needs a CH3CO- group or a group oxidisable to CH3CO- under iodine/base conditions."
  }
];
