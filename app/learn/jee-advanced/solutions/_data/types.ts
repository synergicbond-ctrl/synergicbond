export type VisualKey =
  | "solution-particles"
  | "henry"
  | "raoult"
  | "deviations"
  | "phase-envelope"
  | "txy"
  | "distillation"
  | "azeotrope"
  | "vapour-lowering"
  | "ostwald-walker"
  | "boiling-elevation"
  | "freezing-depression"
  | "osmosis"
  | "vant-hoff";

export type NoteBlock =
  | {
      kind: "theory" | "reference" | "checkpoint" | "trap";
      title: string;
      paragraphs: string[];
      bullets?: string[];
      equations?: string[];
      sourcePages?: string;
      sourceLabel?: string;
      visual?: VisualKey;
    }
  | {
      kind: "derivation";
      title: string;
      introduction?: string;
      steps: string[];
      result: string;
      assumptions?: string[];
      sourcePages?: string;
      visual?: VisualKey;
    }
  | {
      kind: "example";
      number: string;
      title: string;
      question: string;
      given?: string[];
      steps: string[];
      answer: string;
      sourcePages?: string;
      transformation?: string;
      visual?: VisualKey;
    }
  | {
      kind: "table";
      title: string;
      headers: string[];
      rows: string[][];
      note?: string;
      sourcePages?: string;
    };

export type SolutionPart = {
  number: number;
  slug: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  sourcePages: string;
  objectives: string[];
  blocks: NoteBlock[];
};
