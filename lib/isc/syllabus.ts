// ─────────────────────────────────────────────────────────────────────────────
// ISC Chemistry (862) syllabus SSOT — transcribed from the OFFICIAL ISC
// Revised Syllabus 2026 Class XII document (uploaded PDF). Completely separate
// from CBSE (lib/cbse) — boards are never mixed; no CBSE name or chapter
// appears here. Class 11 units are honestly empty until the official ISC XI
// document is uploaded (units are never invented).
//
// Shape mirrors lib/cbse/syllabus.ts CbseChapter so the board dashboard pages
// consume either board through one resolver. masterId links to the shared
// chemistry content library where the ISC unit corresponds to the same
// chemistry (content reuse, never name reuse); pyqChapters stays EMPTY — no
// verified ISC PYQ bank exists, so objective pools honestly show zero.
// ─────────────────────────────────────────────────────────────────────────────

import type { ClassSlug } from "@/lib/boardDashboard";

export interface IscUnit {
  id: string;
  unit: number;
  title: string;
  class: 11 | 12;
  category: "physical" | "inorganic" | "organic";
  /** Shared chemistry-content chapter (dir masterSyllabus id) for deep study. */
  masterId?: string;
  /** No verified ISC PYQ bank yet — always empty, honestly. */
  pyqChapters: [];
  /** Key topics transcribed from the official 2026 document. */
  topics: string[];
}

export const ISC_CLASS_12_UNITS: IscUnit[] = [
  { id: "solutions", unit: 1, title: "Solutions", class: 12, category: "physical", masterId: "solutions", pyqChapters: [], topics: ["Concentration: normality, molality, molarity, mole fraction, ppm", "Henry's law; Raoult's law (volatile & non-volatile); azeotropes", "Colligative properties (all four, with derivations for ΔTf/ΔTb)", "Abnormal molecular mass; van't Hoff factor & modified formulae; degree of dissociation/association"] },
  { id: "electrochemistry", unit: 2, title: "Electrochemistry", class: 12, category: "physical", masterId: "electrochemistry", pyqChapters: [], topics: ["Electrochemical cells; SHE; standard electrode potentials; cell notation", "Nernst equation; emf ↔ ΔG ↔ K; feasibility prediction", "Conductance: specific, molar, equivalent; cell constant; Kohlrausch", "Faraday's laws; F = Nₐe", "Batteries: Leclanche, mercury, lead storage, fuel cells; corrosion mechanism"] },
  { id: "chemical-kinetics", unit: 3, title: "Chemical Kinetics", class: 12, category: "physical", masterId: "chemical-kinetics", pyqChapters: [], topics: ["Average/instantaneous rate; factors incl. surface area & radiation", "Rate law; order vs molecularity; zero & first order integrations, half-life", "Reaction mechanism & rate-determining step", "Collision theory: threshold & activation energy, activated complex", "Arrhenius equation: graphs, Eₐ and A evaluation, numericals"] },
  { id: "d-f-block", unit: 4, title: "d and f Block Elements", class: 12, category: "inorganic", masterId: "d-and-f-block-elements", pyqChapters: [], topics: ["3d/4d/5d trends: metallic character, IE, radii, colour, complexes, alloys", "f-block: 4f & 5f; lanthanoid contraction & consequences; actinoid comparison", "KMnO₄: extraction from pyrolusite, structure, oxidising nature in acidic/basic/neutral media", "K₂Cr₂O₇: extraction from chromite, structure, titrations, chromate–dichromate interconversion"] },
  { id: "coordination-compounds", unit: 5, title: "Coordination Compounds", class: 12, category: "inorganic", masterId: "coordination-compounds", pyqChapters: [], topics: ["Ligands (mono→polydentate, chelating); coordination number & oxidation state; IUPAC nomenclature", "Isomerism: structural & stereo", "Werner's theory; VBT (inner/outer orbital); CFT splitting (Oh & Td), colour, magnetism", "Stability (K); importance in analysis, extraction, biology"] },
  { id: "haloalkanes-haloarenes", unit: 6, title: "Haloalkanes and Haloarenes", class: 12, category: "organic", masterId: "haloalkanes-haloarenes", pyqChapters: [], topics: ["Nomenclature; preparations incl. Finkelstein, Swarts, Hunsdiecker", "SN1/SN2 mechanisms; full reagent map (NaOH → LiAlH₄); Saytzeff elimination", "Wurtz & Grignard preparation; chloroform & iodoform; freon structures; DDT", "Haloarenes: Sandmeyer/Gattermann preparation; electrophilic & nucleophilic substitutions; Wurtz–Fittig, Fittig"] },
  { id: "alcohols-phenols-ethers", unit: 7, title: "Alcohols, Phenols and Ethers", class: 12, category: "organic", masterId: "alcohols-phenols-ethers", pyqChapters: [], topics: ["Alcohols: classification; preparations incl. hydroboration, Grignard; Bosch methanol & fermentation ethanol", "Properties: esterification mechanism, PX₃/PCl₅/SOCl₂, oxidation, dehydration mechanism, Lucas test", "Phenols: Dow's process, cumene, diazonium route; acidity; Kolbe, Reimer–Tiemann; FeCl₃ & azo tests", "Ethers incl. aryl ethers: Williamson synthesis, anisole reactions"] },
  { id: "aldehydes-ketones-acids", unit: 8, title: "Aldehydes, Ketones and Carboxylic Acids", class: 12, category: "organic", masterId: "aldehydes-ketones", pyqChapters: [], topics: ["Preparations: Rosenmund, dialkyl cadmium, Stephen, from esters/nitriles/calcium salts", "Nucleophilic addition mechanism; iodoform; Clemmensen, Wolff–Kishner, red P/HI", "Aldol & cross-aldol, Cannizzaro; benzaldehyde: chromyl chloride prep, benzoin condensation, Perkin reaction", "Acids: classification mono/di; preparations; acidity with substituent effects; HVZ; decarboxylation incl. Kolbe electrolysis"] },
  { id: "nitrogen-compounds", unit: 9, title: "Organic Compounds Containing Nitrogen", class: 12, category: "organic", masterId: "amines", pyqChapters: [], topics: ["Aliphatic amines: preparations incl. Hofmann degradation & Gabriel; basicity comparisons", "Aniline: from nitrobenzene; acetylation, benzoylation, diazotisation, electrophilic substitution; tests", "Cyanides & isocyanides: preparations", "Diazonium salts: Sandmeyer, Gattermann, Balz–Schiemann; coupling reactions"] },
  { id: "biomolecules", unit: 10, title: "Biomolecules", class: 12, category: "organic", masterId: "biomolecules", pyqChapters: [], topics: ["Carbohydrates: mono/oligo/poly; reducing vs non-reducing; glucose & fructose structures (open & cyclic) with reactions; bromine-water test", "Disaccharide structures (sucrose, maltose, lactose); starch, cellulose, glycogen", "Proteins: amino acids, zwitterion, isoelectric point; structure levels; denaturation; enzymes & hormones", "Vitamins A–K classification & deficiencies; nucleic acids: purine/pyrimidine, DNA double helix, DNA vs RNA"] },
];

/** ISC Class 11 — official Council document not uploaded; never invented. */
export const ISC_CLASS_11_UNITS: IscUnit[] = [];

export function getIscUnits(cls: ClassSlug | 11 | 12): IscUnit[] {
  const n = typeof cls === "number" ? cls : cls === "class-12" ? 12 : 11;
  return n === 12 ? ISC_CLASS_12_UNITS : ISC_CLASS_11_UNITS;
}

// ── Official ISC Class 12 practical scheme (Paper II, from the 2026 PDF) ─────
export const ISC_PRACTICAL_SCHEME = {
  marks: { practical: 15, project: 10, practicalFile: 5 },
  experiments: [
    "Titrations: KMnO₄ vs Mohr's salt / oxalic acid (molarity to 4 decimal places)",
    "Study of rate of reaction (thiosulphate–acid; Mg/acids)",
    "Identification of organic compounds & functional groups (glycerol, formaldehyde, acetone, benzoic acid, aniline)",
    "Characteristic tests of carbohydrates and proteins",
    "pH experiments with pH paper / universal indicator",
    "Electrochemistry: voltaic cell; potential vs concentration",
    "Qualitative analysis of a single salt (ISC group scheme, incl. Sr²⁺, C₂O₄²⁻, PO₄³⁻)",
  ],
};
