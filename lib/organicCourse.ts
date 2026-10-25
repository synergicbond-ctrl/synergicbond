import { readMaster, type MasterRow } from "./organicModules";

/** The mandatory 23-chapter JEE Advanced Organic structure (names and order fixed). */
export const ORGANIC_CHAPTERS = [
  "IUPAC Nomenclature", "Structural Isomerism", "Stereoisomerism", "General Organic Chemistry (GOC)", "Reactive Intermediates",
  "Alkanes and Free-Radical Substitution", "Alkenes, Alkynes and Cycloalkanes", "Aromatic Compounds and Aromatic Substitution",
  "Nucleophilic Substitution", "Elimination Reactions", "Haloalkanes and Haloarenes", "Ethers and Epoxides", "Alcohols", "Phenols",
  "Oxidation Reactions", "Reduction Reactions", "Aldehydes and Ketones", "Carboxylic Acids and Derivatives",
  "Amines and Diazonium Salts", "Named Reactions and Reagents", "Biomolecules", "Polymers", "Practical Organic Chemistry",
] as const;

export const slugOf = (name: string) => name.toLowerCase().replace(/\(|\)/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export type CourseSection = MasterRow & { stem: string };
export type CourseChapter = { n: number; name: string; slug: string; sections: CourseSection[]; needsDecision: number };

export function buildCourse(): { chapters: CourseChapter[]; undecided: CourseSection[] } {
  const rows: CourseSection[] = readMaster().map(r => ({ ...r, stem: r.file.replace(/\.html$/, "") }));
  const chapters: CourseChapter[] = ORGANIC_CHAPTERS.map((name, i) => {
    const sections = rows.filter(r => r.chapter === name);
    return { n: i + 1, name, slug: slugOf(name), sections, needsDecision: sections.filter(s => s.basis.startsWith("NEEDS-DECISION")).length };
  });
  const undecided = rows.filter(r => !ORGANIC_CHAPTERS.includes(r.chapter as (typeof ORGANIC_CHAPTERS)[number]));
  return { chapters, undecided };
}
