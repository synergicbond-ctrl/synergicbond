import type { MechanismGeometry } from "./schema";

export type MechanismExamName = "NEET" | "JEE Main" | "JEE Advanced";

export type MechanismExamTrap = {
  id: string;
  text: string;
  explanation: string;
  correction: string;
  examRelevance: MechanismExamName[];
  linkedStepId?: string;
  linkedFrameId?: string;
  linkedArrowId?: string;
  linkedMarkerId?: string;
  linkedOrbitalOverlapId?: string;
};

export type MechanismExamComparison = {
  reactionClass: MechanismGeometry["reactionClass"];
  substratePreference: string;
  nucleophileBaseStrength: string;
  solvent: string;
  rateLaw: string;
  stereochemistry: string;
  rearrangementPossibility: string;
  majorProductLogic: string;
  neetJeeImportance: string;
  chooseWhen: string[];
  traps: MechanismExamTrap[];
};

export type MechanismDecisionInput = {
  substrate: "methyl" | "primary" | "secondary" | "tertiary" | "allylic-benzylic";
  reagent: "weak-nucleophile" | "strong-nucleophile" | "strong-base" | "bulky-base";
  solvent: "polar-protic" | "polar-aprotic" | "alcoholic" | "unspecified";
  heat: boolean;
};

export type MechanismDecisionResult = {
  recommended: MechanismGeometry["reactionClass"];
  confidence: "high" | "medium";
  reason: string;
  warnings: string[];
};

export const mechanismExamComparisons: MechanismExamComparison[] = [
  {
    reactionClass: "SN1",
    substratePreference: "Tertiary > secondary; allylic and benzylic substrates are favoured when the carbocation is resonance-stabilised.",
    nucleophileBaseStrength: "Weak or neutral nucleophiles can work because ionisation forms the electrophile first.",
    solvent: "Polar protic solvent favours ionisation and stabilises ions.",
    rateLaw: "rate = k[substrate]",
    stereochemistry: "Planar carbocation can be attacked from either face; racemization tendency at a stereogenic centre.",
    rearrangementPossibility: "Possible, because a discrete carbocation intermediate is formed.",
    majorProductLogic: "Substitution product after nucleophile capture; elimination may compete under heat or weakly nucleophilic/basic conditions.",
    neetJeeImportance: "High-yield for carbocation stability, racemization, rearrangement, first-order kinetics, and solvolysis questions.",
    chooseWhen: [
      "Substrate can form a stable carbocation.",
      "Nucleophile is weak or solvent is polar protic.",
      "Question mentions racemization, rearrangement, solvolysis, or first-order kinetics.",
    ],
    traps: [
      {
        id: "sn1-trap-primary",
        text: "Choosing SN1 for ordinary methyl or primary halides.",
        explanation: "Methyl and simple primary carbocations are too unstable for the usual SN1 pathway.",
        correction: "Use SN2 for methyl/primary substrates with strong unhindered nucleophile unless resonance stabilisation is stated.",
        examRelevance: ["NEET", "JEE Main"],
      },
      {
        id: "sn1-trap-racemization",
        text: "Explaining racemization as backside attack.",
        explanation: "SN1 racemization comes from a planar carbocation, not a single backside displacement.",
        correction: "Connect racemization to attack from either face of the planar carbocation.",
        examRelevance: ["NEET", "JEE Main", "JEE Advanced"],
        linkedFrameId: "sn1-carbocation",
        linkedMarkerId: "sn1-racemization",
      },
      {
        id: "sn1-trap-rds",
        text: "Making nucleophile attack the rate-determining step.",
        explanation: "The slow event is leaving-group ionisation and carbocation formation.",
        correction: "Rate depends on substrate concentration only: rate = k[substrate].",
        examRelevance: ["NEET", "JEE Main"],
        linkedStepId: "sn1-ionization",
        linkedArrowId: "sn1-arrow-ionization",
      },
      {
        id: "sn1-trap-rearrangement",
        text: "Ignoring hydride or methyl shift possibilities.",
        explanation: "A discrete carbocation may rearrange if a more stable carbocation can form.",
        correction: "Check for rearrangement before predicting the final substitution product.",
        examRelevance: ["JEE Main", "JEE Advanced"],
        linkedFrameId: "sn1-carbocation",
      },
      {
        id: "sn1-trap-strong-base",
        text: "Forcing SN1 when strong base and heat are present.",
        explanation: "Strong base or heat can make elimination compete strongly, especially for tertiary substrates.",
        correction: "Evaluate E2 competition when the reagent is strongly basic or the question specifies heat.",
        examRelevance: ["JEE Main", "JEE Advanced"],
      },
      {
        id: "sn1-trap-solvent",
        text: "Treating polar aprotic solvent as the standard SN1 booster.",
        explanation: "SN1 benefits from ion stabilisation; polar protic solvents are the classic exam condition.",
        correction: "Associate polar protic solvent with SN1 and polar aprotic solvent with SN2 in standard questions.",
        examRelevance: ["NEET", "JEE Main"],
      },
      {
        id: "sn1-trap-leaving-group",
        text: "Ignoring leaving-group ability.",
        explanation: "SN1 requires ionisation; a poor leaving group blocks the key first step.",
        correction: "Check leaving group quality before assigning SN1.",
        examRelevance: ["NEET", "JEE Main"],
        linkedStepId: "sn1-ionization",
      },
      {
        id: "sn1-trap-retention",
        text: "Claiming only retention or only inversion for SN1 at a chiral centre.",
        explanation: "A planar carbocation allows attack from both faces; ion-pair effects can bias products, but the basic exam pattern is racemization tendency.",
        correction: "Answer racemization tendency unless the problem gives special ion-pair constraints.",
        examRelevance: ["NEET", "JEE Advanced"],
        linkedMarkerId: "sn1-racemization",
      },
    ],
  },
  {
    reactionClass: "SN2",
    substratePreference: "Methyl > primary > secondary; tertiary is strongly disfavoured by steric hindrance.",
    nucleophileBaseStrength: "Strong, unhindered nucleophile favours substitution by backside attack.",
    solvent: "Polar aprotic solvent commonly increases nucleophile strength and SN2 rate.",
    rateLaw: "rate = k[substrate][nucleophile]",
    stereochemistry: "Backside attack gives inversion at a stereogenic reacting carbon.",
    rearrangementPossibility: "No rearrangement, because there is no discrete carbocation intermediate.",
    majorProductLogic: "Direct substitution: nucleophile replaces leaving group in one concerted step.",
    neetJeeImportance: "High-yield for substrate order, inversion, one-step kinetics, solvent effects, and nucleophile strength.",
    chooseWhen: [
      "Substrate is methyl or primary.",
      "Nucleophile is strong and not bulky.",
      "Question mentions inversion, backside attack, or second-order kinetics.",
    ],
    traps: [
      {
        id: "sn2-trap-tertiary",
        text: "Choosing SN2 for tertiary halides.",
        explanation: "Backside attack is blocked by steric crowding around a tertiary carbon.",
        correction: "For tertiary substrates, check SN1 with weak nucleophile or E2 with strong base.",
        examRelevance: ["NEET", "JEE Main"],
      },
      {
        id: "sn2-trap-racemization",
        text: "Predicting racemization for a clean SN2 reaction.",
        explanation: "SN2 has a single backside displacement pathway, not a planar carbocation.",
        correction: "Predict inversion at a chiral reacting carbon.",
        examRelevance: ["NEET", "JEE Main", "JEE Advanced"],
        linkedFrameId: "sn2-reactant",
        linkedMarkerId: "sn2-inversion-marker",
      },
      {
        id: "sn2-trap-intermediate",
        text: "Drawing a carbocation intermediate in SN2.",
        explanation: "SN2 is concerted and has one transition state, not a discrete carbocation.",
        correction: "Show simultaneous nucleophile attack and leaving-group departure.",
        examRelevance: ["NEET", "JEE Main"],
        linkedStepId: "sn2-concerted-step",
        linkedFrameId: "sn2-transition",
      },
      {
        id: "sn2-trap-bulky-base",
        text: "Treating bulky strong base as a clean SN2 reagent.",
        explanation: "Bulky bases struggle to approach the alpha carbon and often favour elimination.",
        correction: "Consider E2 when base is bulky, especially with secondary substrates.",
        examRelevance: ["JEE Main", "JEE Advanced"],
      },
      {
        id: "sn2-trap-solvent",
        text: "Using polar protic solvent as the best SN2 condition.",
        explanation: "Polar protic solvents solvate and weaken many anionic nucleophiles.",
        correction: "Prefer polar aprotic solvent for standard SN2 acceleration.",
        examRelevance: ["NEET", "JEE Main"],
      },
      {
        id: "sn2-trap-rate",
        text: "Writing SN2 rate as dependent only on substrate.",
        explanation: "SN2 rate depends on both substrate and nucleophile in the rate-determining collision.",
        correction: "Use rate = k[substrate][nucleophile].",
        examRelevance: ["NEET", "JEE Main"],
        linkedStepId: "sn2-concerted-step",
      },
      {
        id: "sn2-trap-rearrangement",
        text: "Predicting rearrangement during SN2.",
        explanation: "No carbocation intermediate forms, so rearrangement is not part of the SN2 pathway.",
        correction: "Predict direct substitution unless the mechanism changes away from SN2.",
        examRelevance: ["JEE Main", "JEE Advanced"],
        linkedFrameId: "sn2-transition",
      },
      {
        id: "sn2-trap-leaving-group",
        text: "Ignoring leaving group quality in SN2.",
        explanation: "A good leaving group is still required during the concerted displacement.",
        correction: "Check both nucleophile strength and leaving-group ability.",
        examRelevance: ["NEET", "JEE Main"],
        linkedArrowId: "sn2-arrow-leaving",
      },
    ],
  },
  {
    reactionClass: "E2",
    substratePreference: "Secondary and tertiary halides are common; primary substrates can undergo E2 with bulky strong base.",
    nucleophileBaseStrength: "Strong base is required; bulky bases increase elimination tendency.",
    solvent: "Often alcoholic/basic conditions; solvent depends on the base system.",
    rateLaw: "rate = k[substrate][base]",
    stereochemistry: "Beta C-H and C-LG should be anti-periplanar for the standard E2 pathway.",
    rearrangementPossibility: "No carbocation rearrangement, because elimination is concerted.",
    majorProductLogic: "Usually Zaitsev alkene with small base; bulky base can favour Hofmann alkene.",
    neetJeeImportance: "High-yield for strong-base conditions, anti-periplanar geometry, Zaitsev/Hofmann products, and substitution-elimination competition.",
    chooseWhen: [
      "Strong base is present.",
      "Substrate is secondary/tertiary or base is bulky.",
      "Question mentions anti-periplanar geometry, dehydrohalogenation, heat, or alkene product.",
    ],
    traps: [
      {
        id: "e2-trap-carbocation",
        text: "Drawing a carbocation intermediate for E2.",
        explanation: "E2 is concerted; proton abstraction, pi-bond formation, and leaving-group departure happen in one step.",
        correction: "Use one transition state instead of a carbocation intermediate.",
        examRelevance: ["NEET", "JEE Main"],
        linkedFrameId: "e2-transition",
      },
      {
        id: "e2-trap-antiperiplanar",
        text: "Ignoring anti-periplanar beta C-H and leaving-group alignment.",
        explanation: "The standard E2 exam model needs sigma C-H overlap with the leaving-group antibonding orbital.",
        correction: "Choose the beta hydrogen anti-periplanar to the leaving group when stereochemistry is specified.",
        examRelevance: ["NEET", "JEE Main", "JEE Advanced"],
        linkedFrameId: "e2-reactant",
        linkedMarkerId: "e2-anti",
        linkedOrbitalOverlapId: "e2-sigma-overlap",
      },
      {
        id: "e2-trap-base",
        text: "Treating the strong base as only a nucleophile.",
        explanation: "E2 requires the reagent to remove a beta hydrogen.",
        correction: "Identify beta-H abstraction as the base role.",
        examRelevance: ["NEET", "JEE Main"],
        linkedStepId: "e2-concerted-elimination",
        linkedArrowId: "e2-arrow-base",
      },
      {
        id: "e2-trap-product",
        text: "Always predicting Zaitsev product with bulky base.",
        explanation: "Bulky base can prefer the less substituted Hofmann alkene.",
        correction: "Use Zaitsev for small base and check Hofmann tendency for bulky base.",
        examRelevance: ["JEE Main", "JEE Advanced"],
      },
      {
        id: "e2-trap-rate",
        text: "Writing E2 rate as dependent only on substrate.",
        explanation: "E2 is bimolecular; both substrate and base participate in the rate-determining transition state.",
        correction: "Use rate = k[substrate][base].",
        examRelevance: ["NEET", "JEE Main"],
        linkedFrameId: "e2-transition",
      },
      {
        id: "e2-trap-weak-base",
        text: "Choosing E2 with only a weak neutral nucleophile under mild conditions.",
        explanation: "E2 needs a base strong enough to remove a beta hydrogen.",
        correction: "With tertiary substrate plus weak nucleophile in polar protic solvent, check SN1/E1 context instead.",
        examRelevance: ["JEE Main", "JEE Advanced"],
      },
      {
        id: "e2-trap-no-beta-h",
        text: "Predicting E2 without checking for a beta hydrogen.",
        explanation: "Elimination cannot form the alkene unless a removable beta hydrogen exists.",
        correction: "Confirm beta hydrogen availability before assigning E2.",
        examRelevance: ["NEET", "JEE Main"],
      },
      {
        id: "e2-trap-rearrangement",
        text: "Predicting rearrangement during E2.",
        explanation: "E2 has no discrete carbocation intermediate, so carbocation rearrangement is not part of the pathway.",
        correction: "Predict concerted elimination product directly from the anti beta-H and leaving group.",
        examRelevance: ["JEE Main", "JEE Advanced"],
        linkedStepId: "e2-concerted-elimination",
      },
    ],
  },
];

export function getMechanismExamComparison(reactionClass: MechanismGeometry["reactionClass"]) {
  return mechanismExamComparisons.find((item) => item.reactionClass === reactionClass) ?? null;
}

export function decideMechanism(input: MechanismDecisionInput): MechanismDecisionResult {
  const warnings: string[] = [];

  if (input.reagent === "bulky-base") {
    if (input.substrate === "methyl") warnings.push("Methyl substrates cannot eliminate by E2 because there is no beta carbon.");
    return {
      recommended: "E2",
      confidence: input.substrate === "methyl" ? "medium" : "high",
      reason: "Bulky strong base favours beta-hydrogen removal over backside substitution.",
      warnings,
    };
  }

  if (input.substrate === "tertiary" && (input.reagent === "strong-base" || input.heat)) {
    return {
      recommended: "E2",
      confidence: "high",
      reason: "Tertiary substrate plus strong base or heat strongly favours elimination.",
      warnings,
    };
  }

  if (input.substrate === "tertiary" && input.reagent === "weak-nucleophile" && input.solvent === "polar-protic") {
    return {
      recommended: "SN1",
      confidence: "high",
      reason: "Tertiary carbocation formation is favoured in polar protic solvent with weak nucleophile.",
      warnings,
    };
  }

  if ((input.substrate === "methyl" || input.substrate === "primary") && input.reagent === "strong-nucleophile" && input.solvent === "polar-aprotic" && !input.heat) {
    return {
      recommended: "SN2",
      confidence: "high",
      reason: "Methyl/primary substrate with strong nucleophile in polar aprotic solvent matches the SN2 exam pattern.",
      warnings,
    };
  }

  if (input.substrate === "secondary" && (input.reagent === "strong-base" || input.heat || input.solvent === "alcoholic")) {
    return {
      recommended: "E2",
      confidence: "medium",
      reason: "Secondary substrate with strong base, heat, or alcoholic conditions commonly shifts toward E2.",
      warnings: [...warnings, "Secondary substrates can be borderline; compare nucleophile strength, base strength, and solvent."],
    };
  }

  if (input.substrate === "secondary" && input.reagent === "strong-nucleophile" && input.solvent === "polar-aprotic" && !input.heat) {
    return {
      recommended: "SN2",
      confidence: "medium",
      reason: "Secondary substrate can undergo SN2 with a strong unhindered nucleophile in polar aprotic solvent.",
      warnings: [...warnings, "Steric hindrance makes secondary SN2 less clean than methyl/primary SN2."],
    };
  }

  if (input.substrate === "allylic-benzylic" && input.reagent === "weak-nucleophile" && input.solvent === "polar-protic") {
    return {
      recommended: "SN1",
      confidence: "medium",
      reason: "Resonance-stabilised allylic/benzylic carbocation formation supports SN1 under solvolysis conditions.",
      warnings,
    };
  }

  if (input.substrate === "primary" || input.substrate === "methyl") {
    return {
      recommended: "SN2",
      confidence: "medium",
      reason: "Low steric hindrance keeps SN2 as the safest default unless bulky base or heat is specified.",
      warnings,
    };
  }

  return {
    recommended: input.reagent === "weak-nucleophile" ? "SN1" : "E2",
    confidence: "medium",
    reason: "The inputs are borderline; this deterministic guide applies the dominant NEET/JEE heuristic rather than AI inference.",
    warnings: [...warnings, "Check the exact substrate, leaving group, and reagent identity before final exam selection."],
  };
}

export function getMechanismExamAudit() {
  return mechanismExamComparisons.map((item) => ({
    reactionClass: item.reactionClass,
    comparisonFields: 8,
    trapCount: item.traps.length,
    linkedTrapCount: item.traps.filter((trap) =>
      trap.linkedStepId || trap.linkedFrameId || trap.linkedArrowId || trap.linkedMarkerId || trap.linkedOrbitalOverlapId
    ).length,
    decisionRuleCount: item.chooseWhen.length,
  }));
}
