export type RevisionType = "5min" | "examDay" | "weakTopic" | "formula" | "reaction";

export interface RevisionSession {
  id: string;
  title: string;
  description: string;
  targetItems: string[];
  estimatedTimeMinutes: number;
}

export function generateRevisionSession(type: RevisionType, payload?: string): RevisionSession {
  switch (type) {
    case "5min":
      return {
        id: "rev-5min",
        title: "5-Minute High-Yield Blitz",
        description: "A rapid-fire review of critical physical anomalies, organic name reactions, and inorganic exceptions.",
        targetItems: ["Anomalous density of water", "Wurtz reaction limitations", "MOT bond order shortcuts"],
        estimatedTimeMinutes: 5
      };
    case "examDay":
      return {
        id: "rev-examday",
        title: "One-Day-Before-Exam Refresher",
        description: "Comprehensive formula review and reaction pathways consolidation for complete exam confidence.",
        targetItems: ["Ideal Gas Law traps", "SN1 vs SN2 stereochemistry", "CFT splitting energy"],
        estimatedTimeMinutes: 45
      };
    case "weakTopic":
      return {
        id: "rev-weaktopic",
        title: `Targeted Weak Topic Review: ${payload || "Selected Concept"}`,
        description: "Focused practice and principle breakdown to convert weak areas into strengths.",
        targetItems: [payload || "Review Item"],
        estimatedTimeMinutes: 15
      };
    case "formula":
      return {
        id: "rev-formula",
        title: "Formula & Constants Recall Session",
        description: "Drill on exact expressions, variables, units, and common numeric traps.",
        targetItems: ["PV = nRT", "E_n = -13.6 (Z²/n²)", "μ = sqrt(n(n+2))"],
        estimatedTimeMinutes: 10
      };
    case "reaction":
      return {
        id: "rev-reaction",
        title: "Name Reactions & Mechanisms Drill",
        description: "Review organic transformation conditions, intermediates, and inorganic exceptions.",
        targetItems: ["Wurtz Reaction", "Reimer-Tiemann Reaction", "Gabriel Phthalimide Synthesis"],
        estimatedTimeMinutes: 10
      };
    default:
      return {
        id: "rev-default",
        title: "Custom Revision Session",
        description: "Personalized review plan.",
        targetItems: [],
        estimatedTimeMinutes: 10
      };
  }
}
