import type { NCERTReference } from "@/lib/chemistry/reactions";

export type FormulaCard = {
  id: string;
  formula: string;
  name: string;
  chapter: string;
  topic: string;
  variables: string[];
  units: string;
  derivation: string;
  exceptions: string[];
  ncertReference: NCERTReference;
  relatedPYQ: string[];
};

export type FormulaSearchEntry = {
  id: string;
  name: string;
  chapter: string;
  topic: string;
  ncertReference: NCERTReference;
  relatedPYQ: string[];
  text: string;
};
