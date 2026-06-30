import { IMPORTANT_ORDERS } from "@/lib/importantOrders";
import { exceptionsList } from "@/lib/masterSyllabus/exceptions";
import { pyqDatabase } from "@/lib/pyqDatabase";
import { highYieldReactions } from "@/lib/chemistry/reactions";
import type { NCERTReference } from "@/lib/chemistry/reactions";
import type { NCERTEntityLink } from "./schema";

function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const chapterNCERTMap: Record<string, NCERTReference> = {
  "atomic-structure": { class: 11, chapter: "Structure of Atom", topic: "Atomic structure and spectra" },
  "mole-concept": { class: 11, chapter: "Some Basic Concepts of Chemistry", topic: "Mole concept and stoichiometry" },
  "chemical-equilibrium": { class: 11, chapter: "Equilibrium", topic: "Chemical and ionic equilibrium" },
  thermodynamics: { class: 11, chapter: "Thermodynamics", topic: "Chemical thermodynamics" },
  electrochemistry: { class: 12, chapter: "Electrochemistry", topic: "Electrochemical cells and electrolysis" },
  "chemical-kinetics": { class: 12, chapter: "Chemical Kinetics", topic: "Rate laws and Arrhenius equation" },
  solutions: { class: 12, chapter: "Solutions", topic: "Colligative properties" },
  goc: { class: 11, chapter: "Organic Chemistry - Some Basic Principles and Techniques", topic: "Electronic effects and intermediates" },
  "haloalkanes-haloarenes": { class: 12, chapter: "Haloalkanes and Haloarenes", topic: "Nucleophilic substitution and elimination" },
  "aldehydes-ketones": { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Carbonyl reactions and tests" },
  "alcohols-phenols-ethers": { class: 12, chapter: "Alcohols, Phenols and Ethers", topic: "Alcohol and phenol reactions" },
  amines: { class: 12, chapter: "Amines", topic: "Basicity and reactions of amines" },
  "chemical-bonding": { class: 11, chapter: "Chemical Bonding and Molecular Structure", topic: "VSEPR, MOT, and bonding" },
  "coordination-compounds": { class: 12, chapter: "Coordination Compounds", topic: "Nomenclature and crystal field theory" },
};

const reagentReferences: { label: string; ncertReference: NCERTReference }[] = [
  { label: "PCC (Pyridinium chlorochromate)", ncertReference: { class: 12, chapter: "Alcohols, Phenols and Ethers", topic: "Oxidation of alcohols" } },
  { label: "PDC (Pyridinium dichromate)", ncertReference: { class: 12, chapter: "Alcohols, Phenols and Ethers", topic: "Oxidation of alcohols" } },
  { label: "Jones Reagent", ncertReference: { class: 12, chapter: "Alcohols, Phenols and Ethers", topic: "Oxidation of alcohols" } },
  { label: "KMnO4 (cold, dilute, alkaline)", ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Oxidation of alkenes" } },
  { label: "KMnO4 (hot, conc.)", ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Oxidative cleavage and side-chain oxidation" } },
  { label: "K2Cr2O7 / H2SO4", ncertReference: { class: 12, chapter: "Alcohols, Phenols and Ethers", topic: "Oxidation of alcohols" } },
  { label: "LiAlH4", ncertReference: { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Reduction reactions" } },
  { label: "NaBH4", ncertReference: { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Reduction of carbonyl compounds" } },
  { label: "DIBAL-H", ncertReference: { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Selective reductions" } },
  { label: "OsO4", ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Oxidation of alkenes" } },
  { label: "O3 then Zn/H2O", ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Ozonolysis" } },
  { label: "mCPBA", ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Oxidation of alkenes" } },
  { label: "Lindlar's Catalyst", ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Reduction of alkynes" } },
  { label: "Na / liq. NH3", ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Reduction of alkynes" } },
  { label: "NBS", ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Allylic and benzylic substitution" } },
  { label: "SOCl2", ncertReference: { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Acid chloride formation" } },
  { label: "PCl5 / PCl3", ncertReference: { class: 12, chapter: "Alcohols, Phenols and Ethers", topic: "Conversion of alcohols to haloalkanes" } },
  { label: "Grignard Reagent", ncertReference: { class: 12, chapter: "Haloalkanes and Haloarenes", topic: "Organometallic reactions" } },
  { label: "Gilman Reagent", ncertReference: { class: 12, chapter: "Haloalkanes and Haloarenes", topic: "Carbon-carbon bond formation" } },
  { label: "LDA", ncertReference: { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Enolate formation" } },
  { label: "NaNH2 (sodamide)", ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Acidity of terminal alkynes" } },
  { label: "Tollens' Reagent", ncertReference: { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Tests for aldehydes" } },
  { label: "Fehling's Solution", ncertReference: { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Tests for aldehydes" } },
  { label: "Baeyer's Reagent", ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Test for unsaturation" } },
  { label: "Zn-Hg / conc. HCl", ncertReference: { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Clemmensen reduction" } },
  { label: "NH2NH2 / KOH", ncertReference: { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Wolff-Kishner reduction" } },
  { label: "DDQ", ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Dehydrogenation and aromatization" } },
  { label: "Lawesson's Reagent", ncertReference: { class: 12, chapter: "Aldehydes, Ketones and Carboxylic Acids", topic: "Carbonyl group transformations" } },
  { label: "Wilkinson's Catalyst", ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Catalytic hydrogenation" } },
  { label: "Raney Nickel", ncertReference: { class: 11, chapter: "Hydrocarbons", topic: "Catalytic hydrogenation" } },
];

const exceptionReferences: Record<string, NCERTReference> = {
  "ex-f2-bond-energy": { class: 11, chapter: "Chemical Bonding and Molecular Structure", topic: "Bond parameters and bond enthalpy" },
  "ex-inert-pair": { class: 12, chapter: "The p-Block Elements", topic: "Inert pair effect" },
  "ex-ice-density": { class: 11, chapter: "Hydrogen", topic: "Structure of water and ice" },
};

function orderReference(sourcePdf: string, group: string, property: string): NCERTReference {
  if (sourcePdf === "imp orders.pdf") {
    return { class: 11, chapter: "Chemical Bonding and Molecular Structure", topic: `${group}: ${property}` };
  }

  if (/alkali|alkaline/i.test(group)) {
    return { class: 11, chapter: "The s-Block Elements", topic: `${group}: ${property}` };
  }

  if (/d-block|3d/i.test(group)) {
    return { class: 12, chapter: "The d- and f-Block Elements", topic: `${group}: ${property}` };
  }

  if (/hydrogen|water|hydride/i.test(group + " " + property)) {
    return { class: 11, chapter: "Hydrogen", topic: `${group}: ${property}` };
  }

  if (/bond|lattice|covalent|ionic|melting point|solubility/i.test(group + " " + property)) {
    return { class: 11, chapter: "Chemical Bonding and Molecular Structure", topic: `${group}: ${property}` };
  }

  return { class: 11, chapter: "Classification of Elements and Periodicity in Properties", topic: `${group}: ${property}` };
}

export const reactionNCERTLinks: NCERTEntityLink[] = highYieldReactions.map((reaction) => ({
  entityType: "reaction",
  entityId: reaction.id,
  label: reaction.name,
  ncertReference: reaction.ncertReference,
  source: "lib/chemistry/reactions/data.ts",
}));

export const reagentNCERTLinks: NCERTEntityLink[] = reagentReferences.map((reagent) => ({
  entityType: "reagent",
  entityId: slugify(reagent.label),
  label: reagent.label,
  ncertReference: reagent.ncertReference,
  source: "app/reagents/page.tsx",
}));

export const exceptionNCERTLinks: NCERTEntityLink[] = exceptionsList.map((exception) => ({
  entityType: "exception",
  entityId: exception.id,
  label: exception.topic,
  ncertReference: exceptionReferences[exception.id],
  source: "lib/masterSyllabus/exceptions.ts",
}));

export const orderNCERTLinks: NCERTEntityLink[] = IMPORTANT_ORDERS.map((order) => ({
  entityType: "order",
  entityId: order.id,
  label: `${order.property}: ${order.order}`,
  ncertReference: orderReference(order.sourcePdf, order.group, order.property),
  source: "lib/importantOrders.ts",
}));

export const pyqNCERTLinks: NCERTEntityLink[] = Object.entries(pyqDatabase).flatMap(([chapterId, questions]) =>
  questions.map((question) => ({
    entityType: "pyq" as const,
    entityId: question.id,
    label: question.topic,
    ncertReference: chapterNCERTMap[chapterId],
    source: "lib/pyqDatabase.ts",
  }))
);

export const ncertEntityLinks: NCERTEntityLink[] = [
  ...reactionNCERTLinks,
  ...reagentNCERTLinks,
  ...exceptionNCERTLinks,
  ...orderNCERTLinks,
  ...pyqNCERTLinks,
];
