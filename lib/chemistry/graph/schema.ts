import type { NCERTEntityType } from "@/lib/chemistry/ncert";

export type GraphEntityType = NCERTEntityType | "derived-reagent" | "derived-exception" | "derived-order";

export type KnowledgeGraphEdge =
  | "reaction-reagent"
  | "reaction-exception"
  | "reaction-order"
  | "exception-pyq"
  | "order-pyq";

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
  };
};
