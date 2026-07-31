export type Tone = "concept" | "formula" | "warning" | "reference" | "exam" | "correction";

export type TextBlock = { type: "paragraph"; text: string };
export type FormulaBlock = { type: "formula"; tex: string; caption?: string };
export type BulletsBlock = { type: "bullets"; items: string[] };
export type TableBlock = { type: "table"; headers: string[]; rows: string[][]; caption?: string };
export type CalloutBlock = { type: "callout"; tone: Tone; title: string; text: string };
export type VisualBlock = { type: "visual"; id: VisualId; title: string; caption: string };
export type DerivationBlock = {
  type: "derivation";
  title: string;
  intro?: string;
  steps: Array<{ label: string; text?: string; tex?: string }>;
  result?: string;
};
export type ExampleBlock = {
  type: "example";
  number: number;
  title: string;
  question: string;
  steps: string[];
  answer: string;
  sourcePages: string;
};
export type EquationSetBlock = { type: "equationSet"; title: string; equations: Array<{ tex: string; note: string }> };

export type Block =
  | TextBlock
  | FormulaBlock
  | BulletsBlock
  | TableBlock
  | CalloutBlock
  | VisualBlock
  | DerivationBlock
  | ExampleBlock
  | EquationSetBlock;

export type SectionData = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  blocks: Block[];
};

export type PartData = {
  number: number;
  title: string;
  subtitle: string;
  sourcePages: string;
  kind: "theory" | "problems" | "advanced";
  sections: SectionData[];
};

export type VisualId =
  | "particle-pressure"
  | "barometer"
  | "manometer"
  | "mercury-plug"
  | "graph-grammar"
  | "boyle-family"
  | "charles-zero"
  | "gas-law-transformations"
  | "pvt-surface"
  | "dalton-mixture"
  | "amagat-volume"
  | "connected-vessels"
  | "effusion-apparatus"
  | "sequential-effusion"
  | "evaporation-equilibrium"
  | "humidity-dewpoint"
  | "container-types"
  | "wet-gas"
  | "clausius-plot"
  | "kinetic-cube"
  | "degrees-freedom"
  | "speed-comparison"
  | "velocity-space"
  | "maxwell-temperature"
  | "maxwell-mass"
  | "energy-distribution"
  | "collision-cylinder"
  | "collision-mixture"
  | "mean-free-path"
  | "wall-flux"
  | "effusion-decay"
  | "knudsen-cell"
  | "z-curves"
  | "lennard-jones"
  | "vdw-corrections"
  | "vdw-pressure-regions"
  | "virial-boyle"
  | "newton-raphson"
  | "andrews-isotherms"
  | "coexistence-lever"
  | "vdw-loop"
  | "critical-inflection"
  | "phase-dome"
  | "reduced-states"
  | "joule-thomson"
  | "barometric-law"
  | "linde-cycle"
  | "balloon-payload"
  | "linear-pv-temperature"
  | "rotating-gas";
