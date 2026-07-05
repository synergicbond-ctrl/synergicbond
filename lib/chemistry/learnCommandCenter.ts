import { formulaCards, getFormulaType } from "@/lib/chemistry/formulas";
import { mechanismExamComparisons } from "@/lib/chemistry/mechanisms";
import { highYieldReactions } from "@/lib/chemistry/reactions";
import { IMPORTANT_ORDERS } from "@/lib/importantOrders";
import { COMPOUND_COLOURS, familyOf } from "@/lib/saltColourCompounds";
import type { HighYieldReaction } from "@/lib/chemistry/reactions";

export type LearnModule =
  | "mechanism"
  | "name-reaction"
  | "reagent"
  | "order"
  | "colour"
  | "formula";

export type LearnCommandCenterRecord = {
  id: string;
  module: LearnModule;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  href: string;
  source: string;
};

export type LearnContentAudit = {
  counts: Record<LearnModule, number>;
  targetCounts: Record<LearnModule, number>;
  blockers: string[];
};

export type LearnCrossLinkAudit = {
  mechanismReactionLinks: number;
  reagentReactionLinks: number;
  formulaChapterLinks: number;
  orderChapterLinks: number;
};

type ReagentSummary = {
  id: string;
  name: string;
  use: string;
  selectivity: string;
  conditions: string;
  reactionClass: string;
  commonTrap: string;
  example: string;
  linkedReactionIds: string[];
  source: string;
};

function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function normalise(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function reactionHref(reaction: HighYieldReaction): string {
  return `/search?q=${encodeURIComponent(reaction.name)}`;
}

function reagentTrap(reaction: HighYieldReaction): string {
  return reaction.exceptions[0] ?? "Check substrate scope, solvent, and competing pathway before final product prediction.";
}

export const verifiedNameReactionRecords: LearnCommandCenterRecord[] = highYieldReactions
  .filter((reaction) => reaction.examRelevance.priority === "high")
  .slice(0, 50)
  .map((reaction) => ({
    id: `name-reaction-${reaction.id}`,
    module: "name-reaction",
    title: reaction.name,
    subtitle: `${reaction.reactionType} | ${reaction.category}`,
    summary: `${reaction.reagents.join(" + ")} -> ${reaction.products.join(" + ")}`,
    tags: [
      reaction.category,
      reaction.reactionType,
      ...reaction.examRelevance.exams,
      ...reaction.examRelevance.pyqTags,
    ],
    href: reactionHref(reaction),
    source: "lib/chemistry/reactions/data.ts",
  }));

const reactionDerivedReagentRecords: ReagentSummary[] = Array.from(
  highYieldReactions.reduce((map, reaction) => {
    for (const reagent of reaction.reagents) {
      const id = `reagent-${slugify(reagent)}`;
      const existing = map.get(id);
      if (existing) {
        existing.linkedReactionIds.push(reaction.id);
        continue;
      }

      map.set(id, {
        id,
        name: reagent,
        use: reaction.products.join(" + "),
        selectivity: reaction.mechanism[0] ?? reaction.reactionType,
        conditions: reaction.conditions.join("; "),
        reactionClass: reaction.reactionType,
        commonTrap: reagentTrap(reaction),
        example: reaction.name,
        linkedReactionIds: [reaction.id],
        source: "derived from lib/chemistry/reactions/data.ts",
      });
    }
    return map;
  }, new Map<string, ReagentSummary>()).values()
);

const supplementalVerifiedReagentRecords: ReagentSummary[] = [
  {
    id: "supplemental-reagent-nitrating-mixture",
    name: "Nitrating mixture (conc. HNO3 / conc. H2SO4)",
    use: "Generates nitronium ion for aromatic nitration",
    selectivity: "Electrophilic aromatic substitution on activated or benzene rings",
    conditions: "Warm mixed acid; avoid strongly deactivated rings unless harsher conditions are specified",
    reactionClass: "Substitution",
    commonTrap: "H2SO4 is the acid catalyst/dehydrating acid; NO2+ is the electrophile.",
    example: "Nitration of Benzene",
    linkedReactionIds: ["benzene-nitration"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-sulphonating-mixture",
    name: "Sulphonating mixture (SO3 / fuming H2SO4)",
    use: "Introduces -SO3H on benzene ring",
    selectivity: "Reversible electrophilic aromatic substitution",
    conditions: "Fuming sulfuric acid; heat as required",
    reactionClass: "Substitution",
    commonTrap: "Sulphonation is reversible; desulphonation occurs with steam/dilute acid.",
    example: "Benzene Sulfonation",
    linkedReactionIds: ["benzene-sulfonation"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-bromination-lewis-acid",
    name: "Br2 / FeBr3",
    use: "Brominates aromatic rings",
    selectivity: "Electrophilic aromatic substitution through bromonium electrophile activation",
    conditions: "Anhydrous Lewis acid conditions",
    reactionClass: "Substitution",
    commonTrap: "Plain Br2/CCl4 tests alkene unsaturation; Br2/FeBr3 is aromatic substitution.",
    example: "Benzene Halogenation",
    linkedReactionIds: ["benzene-halogenation"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-chlorination-lewis-acid",
    name: "Cl2 / FeCl3",
    use: "Chlorinates aromatic rings",
    selectivity: "Electrophilic aromatic substitution",
    conditions: "Anhydrous Lewis acid conditions",
    reactionClass: "Substitution",
    commonTrap: "Side-chain chlorination of alkylbenzene requires light/heat, not FeCl3.",
    example: "Benzene Halogenation",
    linkedReactionIds: ["benzene-halogenation"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-hv-free-radical",
    name: "Cl2 or Br2 / hv",
    use: "Free-radical halogenation at alkyl side chains or alkanes",
    selectivity: "Benzylic and allylic positions are favoured over ordinary C-H sites",
    conditions: "Light or high temperature radical conditions",
    reactionClass: "Substitution",
    commonTrap: "Do not use hv conditions for electrophilic ring halogenation.",
    example: "Side-chain Halogenation of Toluene",
    linkedReactionIds: ["toluene-side-chain-halogenation"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-benzylic-oxidation",
    name: "Hot alkaline KMnO4 then acid workup",
    use: "Oxidises benzylic side chain to carboxylic acid",
    selectivity: "Requires at least one benzylic hydrogen",
    conditions: "Hot alkaline permanganate followed by acidification",
    reactionClass: "Oxidation",
    commonTrap: "tert-Butylbenzene lacks benzylic hydrogen and resists side-chain oxidation.",
    example: "Side-chain Oxidation of Toluene",
    linkedReactionIds: ["toluene-side-chain-oxidation"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-br2-naoh",
    name: "Br2 / NaOH",
    use: "Hofmann bromamide degradation of amides to amines",
    selectivity: "Primary amide gives primary amine with one fewer carbon",
    conditions: "Alkaline bromine",
    reactionClass: "Preparation",
    commonTrap: "Carbonyl carbon is lost as carbonate; product has one less carbon.",
    example: "Hofmann Degradation",
    linkedReactionIds: [],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-hno2-primary-amine",
    name: "NaNO2 / HCl at 273-278 K",
    use: "Diazotises aromatic primary amines",
    selectivity: "Aryl primary amines form stable diazonium salts at low temperature",
    conditions: "Ice-cold nitrous acid generated in situ",
    reactionClass: "Preparation",
    commonTrap: "Aliphatic diazonium salts are unstable; aryl diazonium salts are useful intermediates.",
    example: "Diazotisation",
    linkedReactionIds: [],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-sandmeyer-chloride",
    name: "CuCl / HCl",
    use: "Converts aryl diazonium salt to aryl chloride",
    selectivity: "Sandmeyer chlorination",
    conditions: "Diazonium salt solution with cuprous chloride",
    reactionClass: "Substitution",
    commonTrap: "This replaces diazonium group on aryl ring, not ordinary alkyl chloride SN2.",
    example: "Sandmeyer Chlorination",
    linkedReactionIds: [],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-sandmeyer-bromide",
    name: "CuBr / HBr",
    use: "Converts aryl diazonium salt to aryl bromide",
    selectivity: "Sandmeyer bromination",
    conditions: "Diazonium salt solution with cuprous bromide",
    reactionClass: "Substitution",
    commonTrap: "Aryl halides from diazonium salts do not form by ordinary SN1/SN2.",
    example: "Sandmeyer Bromination",
    linkedReactionIds: [],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-sandmeyer-cyanide",
    name: "CuCN / KCN",
    use: "Converts aryl diazonium salt to aryl nitrile",
    selectivity: "Sandmeyer cyanation",
    conditions: "Cuprous cyanide conditions",
    reactionClass: "Substitution",
    commonTrap: "Product is aryl cyanide, not aryl isocyanide.",
    example: "Sandmeyer Cyanation",
    linkedReactionIds: [],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-balz-schiemann",
    name: "HBF4 then heat",
    use: "Converts aryl diazonium salt to aryl fluoride",
    selectivity: "Balz-Schiemann fluorination",
    conditions: "Diazonium fluoroborate isolation followed by heating",
    reactionClass: "Substitution",
    commonTrap: "Aryl fluoride is prepared through diazonium fluoroborate, not by F- SN2 on aryl chloride.",
    example: "Balz-Schiemann Reaction",
    linkedReactionIds: ["balz-schiemann-reaction"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-hypophosphorous-acid",
    name: "H3PO2",
    use: "Replaces aryl diazonium group by hydrogen",
    selectivity: "Reductive deamination of diazonium salts",
    conditions: "Diazonium salt treated with hypophosphorous acid",
    reactionClass: "Reduction",
    commonTrap: "Useful for removing -NH2 after it has directed electrophilic substitution.",
    example: "Diazonium Hypophosphorous Reduction",
    linkedReactionIds: ["diazonium-hypophosphorous-reduction"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-zinc-dust",
    name: "Zn dust",
    use: "Reduces phenol to benzene on heating",
    selectivity: "Deoxygenation of phenolic -OH under strong reducing conditions",
    conditions: "Distillation with zinc dust",
    reactionClass: "Reduction",
    commonTrap: "This is not the same as Zn/Hg-HCl Clemmensen carbonyl reduction.",
    example: "Phenol to Benzene",
    linkedReactionIds: [],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-lucas-reagent",
    name: "Lucas reagent (conc. HCl / anhydrous ZnCl2)",
    use: "Classifies alcohols by turbidity rate",
    selectivity: "3 degree alcohol reacts fastest, then 2 degree; 1 degree is slow at room temperature",
    conditions: "Room temperature Lucas test",
    reactionClass: "Test",
    commonTrap: "Turbidity order follows carbocation stability, not boiling point.",
    example: "Lucas Test",
    linkedReactionIds: ["alcohol-lucas-test"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-ceric-ammonium-nitrate",
    name: "Ceric ammonium nitrate",
    use: "Detects alcohols by red colour formation",
    selectivity: "Alcohol functional group test",
    conditions: "CAN reagent in acidic medium",
    reactionClass: "Test",
    commonTrap: "It is a qualitative test; do not confuse with chromic acid oxidation.",
    example: "Alcohol Functional Group Test",
    linkedReactionIds: [],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-neutral-ferric-chloride",
    name: "Neutral FeCl3",
    use: "Detects phenols by violet/blue/green colour complexes",
    selectivity: "Phenolic -OH test",
    conditions: "Neutral ferric chloride solution",
    reactionClass: "Test",
    commonTrap: "Carboxylic acids and alcohols do not give the characteristic phenol complex colour.",
    example: "Phenol Test",
    linkedReactionIds: [],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-2-4-dnp",
    name: "2,4-DNP (Brady reagent)",
    use: "Detects aldehydes and ketones as yellow/orange hydrazones",
    selectivity: "Carbonyl group test",
    conditions: "Acidic 2,4-dinitrophenylhydrazine reagent",
    reactionClass: "Test",
    commonTrap: "Carboxylic acids and esters do not give the usual 2,4-DNP carbonyl test.",
    example: "Carbonyl Hydrazone Formation",
    linkedReactionIds: [],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-schiff-reagent",
    name: "Schiff reagent",
    use: "Detects aldehydes by pink/magenta colour restoration",
    selectivity: "Aldehyde qualitative test",
    conditions: "Cold Schiff reagent",
    reactionClass: "Test",
    commonTrap: "Ketones generally do not restore Schiff reagent colour under the usual test conditions.",
    example: "Aldehyde Test",
    linkedReactionIds: [],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-sodium-bisulfite",
    name: "NaHSO3",
    use: "Forms crystalline bisulfite addition compounds with many aldehydes and methyl ketones",
    selectivity: "Carbonyl purification/test reagent",
    conditions: "Saturated sodium bisulfite solution",
    reactionClass: "Addition",
    commonTrap: "Sterically hindered ketones do not readily form bisulfite addition compounds.",
    example: "Carbonyl Bisulfite Addition",
    linkedReactionIds: [],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-hydroxylamine",
    name: "NH2OH",
    use: "Converts aldehydes and ketones to oximes",
    selectivity: "Nucleophilic addition-elimination at carbonyl carbon",
    conditions: "Hydroxylamine, mild acidic/basic workup",
    reactionClass: "Addition",
    commonTrap: "Oxime formation is a carbonyl derivative reaction, not oxidation.",
    example: "Ketone Oxime Formation",
    linkedReactionIds: ["ketone-oxime-formation"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-hcn-nacn-hcl",
    name: "HCN / NaCN-HCl",
    use: "Forms cyanohydrins from aldehydes and ketones",
    selectivity: "Cyanide addition to carbonyl followed by protonation",
    conditions: "HCN generated with cyanide salt and acid",
    reactionClass: "Addition",
    commonTrap: "Aldehydes are generally more reactive than ketones toward nucleophilic addition.",
    example: "Ketone HCN Addition",
    linkedReactionIds: ["ketone-hcn-addition"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-sodalime",
    name: "Soda lime (NaOH / CaO)",
    use: "Decarboxylates sodium carboxylates to alkanes",
    selectivity: "Alkane formed has one carbon fewer than the carboxylate",
    conditions: "Heat with soda lime",
    reactionClass: "Preparation",
    commonTrap: "The carboxyl carbon is lost as carbonate.",
    example: "Soda-lime Decarboxylation",
    linkedReactionIds: [],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-red-phosphorus-bromine",
    name: "Red P / Br2",
    use: "Alpha-brominates carboxylic acids with alpha hydrogen",
    selectivity: "Hell-Volhard-Zelinsky reaction",
    conditions: "Bromine with red phosphorus or PBr3",
    reactionClass: "Substitution",
    commonTrap: "Requires an alpha hydrogen on the carboxylic acid.",
    example: "Hell-Volhard-Zelinsky Reaction",
    linkedReactionIds: ["hell-volhard-zelinsky"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-benzoyl-chloride-naoh",
    name: "Benzoyl chloride / NaOH",
    use: "Benzoylates amines and phenols",
    selectivity: "Schotten-Baumann benzoylation",
    conditions: "Aqueous alkali absorbs HCl",
    reactionClass: "Preparation",
    commonTrap: "Aqueous NaOH is used to neutralise HCl formed during acylation.",
    example: "Schotten-Baumann Benzoylation",
    linkedReactionIds: ["benzoylation-schotten-baumann"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-acetic-anhydride",
    name: "Acetic anhydride",
    use: "Acetylates alcohols, phenols, and amines",
    selectivity: "Acylation reagent for derivatives and protection-style transformations",
    conditions: "Often used with base or acid catalyst depending on substrate",
    reactionClass: "Preparation",
    commonTrap: "Acetylation changes the functional derivative; it is not simple ester hydrolysis.",
    example: "Acetylation",
    linkedReactionIds: [],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-ammoniacal-silver-nitrate",
    name: "Ammoniacal AgNO3",
    use: "Detects terminal alkynes as silver acetylides",
    selectivity: "Terminal alkyne acidic hydrogen test",
    conditions: "Ammoniacal silver nitrate solution",
    reactionClass: "Test",
    commonTrap: "Internal alkynes do not give this terminal acetylide precipitate.",
    example: "Terminal Alkyne Silver Salt",
    linkedReactionIds: ["terminal-alkyne-silver-salt"],
    source: "NCERT/JEE standard reagent fact",
  },
  {
    id: "supplemental-reagent-ammoniacal-cuprous-chloride",
    name: "Ammoniacal Cu2Cl2",
    use: "Detects terminal alkynes as copper acetylides",
    selectivity: "Terminal alkyne acidic hydrogen test",
    conditions: "Ammoniacal cuprous chloride solution",
    reactionClass: "Test",
    commonTrap: "Only terminal alkynes form the acetylide precipitate.",
    example: "Terminal Alkyne Copper Salt",
    linkedReactionIds: ["terminal-alkyne-copper-salt"],
    source: "NCERT/JEE standard reagent fact",
  },
];

export const verifiedReagentRecords: ReagentSummary[] = [
  ...reactionDerivedReagentRecords,
  ...supplementalVerifiedReagentRecords,
];

const reagentRecords: LearnCommandCenterRecord[] = verifiedReagentRecords.map((reagent) => ({
  id: reagent.id,
  module: "reagent",
  title: reagent.name,
  subtitle: reagent.reactionClass,
  summary: `${reagent.use}. Conditions: ${reagent.conditions}`,
  tags: [reagent.reactionClass, reagent.example, reagent.selectivity, reagent.commonTrap],
  href: `/search?q=${encodeURIComponent(reagent.name)}`,
  source: reagent.source,
}));

const mechanismRecords: LearnCommandCenterRecord[] = mechanismExamComparisons.map((mechanism) => ({
  id: `mechanism-${mechanism.reactionClass.toLowerCase()}`,
  module: "mechanism",
  title: mechanism.reactionClass,
  subtitle: mechanism.rateLaw,
  summary: mechanism.neetJeeImportance,
  tags: [
    mechanism.substratePreference,
    mechanism.nucleophileBaseStrength,
    mechanism.solvent,
    mechanism.majorProductLogic,
  ],
  href: "/learn#mechanism-visualizer",
  source: "lib/chemistry/mechanisms/exam.ts",
}));

const formulaRecords: LearnCommandCenterRecord[] = formulaCards.map((formula) => ({
  id: `formula-${formula.id}`,
  module: "formula",
  title: formula.name,
  subtitle: `${formula.chapter} | ${getFormulaType(formula)}`,
  summary: `${formula.formula} | ${formula.units}`,
  tags: [formula.chapter, formula.topic, formula.units, ...formula.variables, ...formula.exceptions],
  href: `/formula-cards?id=${encodeURIComponent(formula.id)}`,
  source: "lib/chemistry/formulas/data.ts",
}));

const orderRecords: LearnCommandCenterRecord[] = IMPORTANT_ORDERS.map((order) => ({
  id: `order-${order.id}`,
  module: "order",
  title: order.property,
  subtitle: `${order.category} | ${order.group}`,
  summary: order.order,
  tags: [order.category, order.group, order.reference ?? "", order.note ?? "", order.sourcePdf],
  href: `/important-orders?q=${encodeURIComponent(order.property)}`,
  source: order.sourcePdf,
}));

const colourRecords: LearnCommandCenterRecord[] = COMPOUND_COLOURS.map((entry) => ({
  id: `colour-${slugify(entry.name)}`,
  module: "colour",
  title: entry.name,
  subtitle: familyOf(entry.color),
  summary: entry.color,
  tags: [entry.color, familyOf(entry.color), "qualitative analysis", "precipitate", "compound colour"],
  href: `/salt-colors?q=${encodeURIComponent(entry.name)}`,
  source: "lib/saltColourCompounds.ts",
}));

export const learnCommandCenterRecords: LearnCommandCenterRecord[] = [
  ...mechanismRecords,
  ...verifiedNameReactionRecords,
  ...reagentRecords,
  ...orderRecords,
  ...colourRecords,
  ...formulaRecords,
];

export function searchLearnCommandCenter(query: string, module: LearnModule | "all" = "all", limit = 48): LearnCommandCenterRecord[] {
  const q = normalise(query);

  return learnCommandCenterRecords
    .filter((record) => module === "all" || record.module === module)
    .filter((record) => {
      if (!q) return true;
      return normalise([record.title, record.subtitle, record.summary, ...record.tags].join(" ")).includes(q);
    })
    .slice(0, limit);
}

export function getMechanismReactionLinks() {
  return mechanismExamComparisons.flatMap((mechanism) => {
    const token = normalise(mechanism.reactionClass);
    return highYieldReactions
      .filter((reaction) => normalise([...reaction.mechanism, reaction.name, reaction.reactionType].join(" ")).includes(token))
      .map((reaction) => ({
        mechanism: mechanism.reactionClass,
        reactionId: reaction.id,
        evidence: reaction.mechanism.join(" "),
      }));
  });
}

export function getReagentReactionLinks() {
  return verifiedReagentRecords.flatMap((reagent) =>
    reagent.linkedReactionIds.map((reactionId) => ({
      reagentId: reagent.id,
      reactionId,
    }))
  );
}

export function getFormulaChapterLinks() {
  return formulaCards.map((formula) => ({
    formulaId: formula.id,
    chapter: formula.chapter,
    topic: formula.topic,
  }));
}

export function getOrderChapterLinks() {
  return IMPORTANT_ORDERS.map((order) => ({
    orderId: order.id,
    chapter: order.group,
    category: order.category,
  }));
}

export function getLearnCrossLinkAudit(): LearnCrossLinkAudit {
  return {
    mechanismReactionLinks: getMechanismReactionLinks().length,
    reagentReactionLinks: getReagentReactionLinks().length,
    formulaChapterLinks: getFormulaChapterLinks().length,
    orderChapterLinks: getOrderChapterLinks().length,
  };
}

export function getLearnContentAudit(): LearnContentAudit {
  const counts = {
    mechanism: mechanismRecords.length,
    "name-reaction": verifiedNameReactionRecords.length,
    reagent: verifiedReagentRecords.length,
    order: IMPORTANT_ORDERS.length,
    colour: COMPOUND_COLOURS.length,
    formula: formulaCards.length,
  };
  const targetCounts = {
    mechanism: 9,
    "name-reaction": 50,
    reagent: 150,
    order: 250,
    colour: 200,
    formula: 300,
  };

  return {
    counts,
    targetCounts,
    blockers: Object.entries(targetCounts)
      .filter(([key, target]) => counts[key as LearnModule] < target)
      .map(([key, target]) => `${key}: ${counts[key as LearnModule]}/${target} verified records available`),
  };
}
