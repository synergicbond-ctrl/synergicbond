import type { NCERTReference } from "@/lib/chemistry/reactions";

export type NCERTHighlight = {
  id: string;
  label: string;
  point: string;
  examUse: string;
  ncertReference: NCERTReference;
};

export const ncertHighlights: NCERTHighlight[] = [
  {
    id: "ncert-hydrocarbons-markovnikov",
    label: "Markovnikov orientation",
    point: "Unsymmetrical alkene addition of HX proceeds through the more stable carbocation in normal ionic conditions.",
    examUse: "Use carbocation stability to predict major alkyl halide.",
    ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Addition reactions of alkenes" },
  },
  {
    id: "ncert-hydrocarbons-peroxide",
    label: "Peroxide effect limitation",
    point: "Anti-Markovnikov peroxide effect is characteristic of HBr addition and is not general for HCl or HI.",
    examUse: "Reject anti-Markovnikov products for HCl/HI peroxide traps.",
    ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Peroxide effect" },
  },
  {
    id: "ncert-hydrocarbons-ozonolysis",
    label: "Ozonolysis as structure tool",
    point: "Reductive ozonolysis cleaves C=C into carbonyl fragments without further oxidation of aldehydes.",
    examUse: "Reconstruct alkene skeleton from aldehyde/ketone products.",
    ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Ozonolysis" },
  },
  {
    id: "ncert-haloalkanes-sn1-sn2",
    label: "SN1 and SN2 substrate trend",
    point: "Tertiary halides favour SN1 in polar protic medium; primary halides favour SN2 with strong nucleophiles.",
    examUse: "Pick mechanism from substrate, solvent, and nucleophile.",
    ncertReference: { class: 12, chapter: "Haloalkanes and Haloarenes", topic: "Nucleophilic substitution" },
  },
  {
    id: "ncert-haloalkanes-elimination",
    label: "Alcoholic KOH elimination",
    point: "Alcoholic KOH favours beta-elimination from alkyl halides to form alkenes.",
    examUse: "Separate substitution with aqueous KOH from elimination with alcoholic KOH.",
    ncertReference: { class: 12, chapter: "Haloalkanes and Haloarenes", topic: "Elimination reactions" },
  },
  {
    id: "ncert-alcohols-phenol-acidity",
    label: "Phenol acidity",
    point: "Phenol is more acidic than alcohols because phenoxide ion is resonance stabilised.",
    examUse: "Compare acidity and reactions with sodium hydroxide.",
    ncertReference: { class: 12, chapter: "Alcohols, Phenols and Ethers", topic: "Phenols" },
  },
  {
    id: "ncert-alcohols-lucas",
    label: "Lucas test order",
    point: "Turbidity with Lucas reagent appears fastest for tertiary alcohols, then secondary, while primary is slow at room temperature.",
    examUse: "Identify alcohol class from turbidity timing.",
    ncertReference: { class: 12, chapter: "Alcohols, Phenols and Ethers", topic: "Alcohol reactions" },
  },
  {
    id: "ncert-carbonyl-tollens",
    label: "Tollens' reagent selectivity",
    point: "Aldehydes reduce Tollens' reagent to metallic silver; ketones generally do not.",
    examUse: "Distinguish aldehydes from ketones in test questions.",
    ncertReference: { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Tests for aldehydes" },
  },
  {
    id: "ncert-carbonyl-iodoform",
    label: "Iodoform requirement",
    point: "Iodoform test needs CH3CO- group or a group oxidisable to CH3CO- under iodine/base conditions.",
    examUse: "Identify methyl ketones and ethanol/acetaldehyde positives.",
    ncertReference: { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Iodoform reaction" },
  },
  {
    id: "ncert-carboxylic-acid-acidity",
    label: "Carboxylic acid acidity",
    point: "Carboxylic acids are more acidic than phenols because carboxylate ion has two equivalent resonance structures.",
    examUse: "Rank acidity among alcohol, phenol, and carboxylic acid.",
    ncertReference: { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Acidity of carboxylic acids" },
  },
  {
    id: "ncert-amines-basicity",
    label: "Aromatic amine basicity",
    point: "Aniline is less basic than aliphatic amines because the nitrogen lone pair is delocalised into the benzene ring.",
    examUse: "Avoid ranking aniline above alkyl amines in water.",
    ncertReference: { class: 12, chapter: "Amines", topic: "Basicity of amines" },
  },
  {
    id: "ncert-amines-diazotization",
    label: "Diazotisation temperature",
    point: "Aromatic diazonium salts are prepared from primary aromatic amines at 273-278 K.",
    examUse: "Use low temperature condition for diazonium salt formation.",
    ncertReference: { class: 12, chapter: "Amines", topic: "Diazonium salts" },
  },
  {
    id: "ncert-equilibrium-pure-solids",
    label: "Pure solids in equilibrium",
    point: "Pure solids and pure liquids are omitted from equilibrium constant expressions.",
    examUse: "Write Kc/Kp without solid or liquid terms.",
    ncertReference: { class: 11, chapter: "Equilibrium", topic: "Equilibrium constant" },
  },
  {
    id: "ncert-equilibrium-le-chatelier",
    label: "Le Chatelier principle",
    point: "A system at equilibrium shifts to oppose imposed changes in concentration, pressure, or temperature.",
    examUse: "Predict shift direction under changed conditions.",
    ncertReference: { class: 11, chapter: "Equilibrium", topic: "Le Chatelier principle" },
  },
  {
    id: "ncert-thermodynamics-gibbs",
    label: "Gibbs spontaneity",
    point: "At constant temperature and pressure, negative Delta G indicates spontaneous change.",
    examUse: "Connect Delta G, equilibrium, and spontaneity.",
    ncertReference: { class: 11, chapter: "Thermodynamics", topic: "Gibbs energy" },
  },
  {
    id: "ncert-electrochemistry-nernst",
    label: "Nernst equation at 298 K",
    point: "The 0.0591/n log Q form is the 298 K common-log version of the Nernst equation.",
    examUse: "Avoid using 0.0591 at temperatures other than 298 K unless specified.",
    ncertReference: { class: 12, chapter: "Electrochemistry", topic: "Nernst equation" },
  },
  {
    id: "ncert-solutions-vanthoff",
    label: "van't Hoff factor meaning",
    point: "i greater than 1 indicates dissociation and i less than 1 indicates association in colligative properties.",
    examUse: "Correct apparent molar mass and colligative-property calculations.",
    ncertReference: { class: 12, chapter: "Solutions", topic: "Abnormal molar masses" },
  },
  {
    id: "ncert-kinetics-order",
    label: "Order is experimental",
    point: "Reaction order is determined experimentally and need not match stoichiometric coefficients.",
    examUse: "Do not infer rate law directly from balanced equation unless elementary step is given.",
    ncertReference: { class: 12, chapter: "Chemical Kinetics", topic: "Rate law and order" },
  },
  {
    id: "ncert-atomic-bohr",
    label: "Bohr model scope",
    point: "Bohr formulas are valid for hydrogen and hydrogen-like one-electron species.",
    examUse: "Apply Z-scaling only to H, He+, Li2+, and similar one-electron ions.",
    ncertReference: { class: 11, chapter: "Structure of Atom", topic: "Bohr model" },
  },
  {
    id: "ncert-periodicity-electron-gain",
    label: "Fluorine electron gain exception",
    point: "Chlorine has more negative electron gain enthalpy than fluorine because fluorine's compact 2p orbital has high repulsion.",
    examUse: "Remember Cl > F in electron gain enthalpy despite F being more electronegative.",
    ncertReference: { class: 11, chapter: "Classification of Elements and Periodicity in Properties", topic: "Periodic trends" },
  },
];
