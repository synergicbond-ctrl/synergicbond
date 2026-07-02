import type { NCERTReference } from "@/lib/chemistry/reactions";

export type NCERTEntityType = "reaction" | "reagent" | "exception" | "order" | "pyq";

export type NCERTEntityLink = {
  entityType: NCERTEntityType;
  entityId: string;
  label: string;
  ncertReference: NCERTReference;
  source: string;
};

export type NCERTSearchEntry = NCERTEntityLink & {
  text: string;
};

export type NCERTCoverageAudit = {
  linkedEntities: number;
  duplicateReferences: number;
  coveragePercent: number;
  missingChapters: string[];
  countsByType: Record<NCERTEntityType, number>;
};
