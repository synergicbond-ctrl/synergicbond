import type { NCERTEntityLink, NCERTEntityType } from "@/lib/chemistry/ncert";
import type { HighYieldReaction, NCERTReference } from "@/lib/chemistry/reactions";
import type { FormulaCard } from "@/lib/chemistry/formulas";
import type { PYQQuestion } from "@/lib/pyqDatabase";

export type GraphEntityType =
  | NCERTEntityType
  | "formula"
  | "ncert-reference"
  | "derived-reagent"
  | "derived-exception"
  | "derived-order";

export type KnowledgeGraphEdge =
  | "reaction-reagent"
  | "reaction-exception"
  | "reaction-order"
  | "exception-pyq"
  | "order-pyq"
  | "formula-pyq"
  | "formula-ncert";

export type KnowledgeGraphLink = {
  edge: KnowledgeGraphEdge;
  fromType: GraphEntityType;
  fromId: string;
  toType: GraphEntityType;
  toId: string;
  evidence: string;
  source: string;
};

export type DerivedOrderEntity = {
  orderId: string;
  pyqId: string;
  label: string;
  source: string;
};

export type GraphNode = {
  type: GraphEntityType;
  id: string;
  label: string;
  source: string;
  searchText: string;
  degree: number;
  ncertReference?: NCERTReference;
};

export type GraphValidationAudit = {
  nodeCount: number;
  edgeCount: number;
  brokenLinks: string[];
  duplicateEdges: string[];
  orphanNodes: string[];
};

export type ReactionGraph = {
  reaction: HighYieldReaction | null;
  links: KnowledgeGraphLink[];
  reagents: GraphNode[];
  exceptions: GraphNode[];
  orders: GraphNode[];
  pyqs: (PYQQuestion & { chapterId: string })[];
  ncertLinks: NCERTEntityLink[];
};

export type PYQGraph = {
  pyq: (PYQQuestion & { chapterId: string }) | null;
  links: KnowledgeGraphLink[];
  reactions: HighYieldReaction[];
  formulas: FormulaCard[];
  exceptions: GraphNode[];
  orders: GraphNode[];
  ncertLinks: NCERTEntityLink[];
};

export type FormulaGraph = {
  formula: FormulaCard | null;
  links: KnowledgeGraphLink[];
  pyqs: (PYQQuestion & { chapterId: string })[];
  ncertNode: GraphNode | null;
};

export type NCERTGraph = {
  reference: NCERTReference;
  ncertLinks: NCERTEntityLink[];
  graphLinks: KnowledgeGraphLink[];
  nodes: GraphNode[];
};

export type KnowledgeGraphSearchResult = {
  id: string;
  type: GraphEntityType;
  label: string;
  source: string;
  summary: string;
  score: number;
};

export type GraphCompletionAudit = {
  edgeCounts: Record<KnowledgeGraphEdge, number>;
  coverage: Record<KnowledgeGraphEdge, number>;
  orphanRecords: string[];
  entityCounts: {
    reactions: number;
    reagents: number;
    exceptions: number;
    orders: number;
    pyqs: number;
    formulas: number;
  };
};
