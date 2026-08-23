// Shared visual language for every p-block diagram.
//
// One palette, one type scale, one stroke scale — so twenty diagrams read as
// one system rather than twenty one-off drawings. Values are chosen to sit on
// the chapter's dark card (#122232) while staying legible if a light theme is
// ever introduced, hence the explicit light/dark pairs where it matters.

export const VIZ = {
  // Structural ink
  bond: "#9fb6cc",
  bondStrong: "#eef3f8",
  atomText: "#eef3f8",
  frame: "#24405c",
  surface: "#0e1b28",

  // Semantic accents. Keep these few and reuse them.
  accent: "#5fd4ea", // primary / highlighted species
  accentSoft: "rgba(95, 212, 234, .14)",
  warn: "#f5b544", // traps, instability, hazard
  warnSoft: "rgba(245, 181, 68, .14)",
  good: "#5fe3a1", // stable / favoured
  goodSoft: "rgba(95, 227, 161, .14)",
  bad: "#ff7a7a", // does not exist / forbidden
  badSoft: "rgba(255, 122, 122, .14)",
  violet: "#b79cff", // lone pairs, orbitals
  violetSoft: "rgba(183, 156, 255, .16)",

  // Element colouring — used sparingly, only where element identity carries
  // meaning (structure galleries). Not a rainbow.
  element: {
    H: "#dfe8f2",
    B: "#ffb59b",
    C: "#8fa3b8",
    N: "#7ea8ff",
    O: "#ff8f8f",
    F: "#8fe3c0",
    Si: "#c8a98a",
    P: "#ffb066",
    S: "#f2dd6a",
    Cl: "#8fe08f",
    Br: "#d08a6a",
    I: "#c39be0",
    Xe: "#7fd6e8",
    default: "#9fb6cc",
  } as Record<string, string>,

  font: {
    atom: 15,
    sub: 10,
    label: 12,
    small: 10.5,
    title: 13,
  },

  stroke: {
    hair: 1,
    thin: 1.4,
    base: 1.9,
    thick: 2.6,
  },
} as const;

export function elementColour(symbol: string) {
  const key = symbol.replace(/[^A-Za-z]/g, "");
  return VIZ.element[key] ?? VIZ.element.default;
}

/** Split a formula like "NH4+" into runs so subscripts/superscripts render properly. */
export function formulaRuns(formula: string) {
  const runs: { text: string; kind: "base" | "sub" | "sup" }[] = [];
  const re = /([A-Za-z()·\[\]]+)|(\d+)|([+-]+|\d*[+-])/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(formula))) {
    if (m[1]) runs.push({ text: m[1], kind: "base" });
    else if (m[2]) runs.push({ text: m[2], kind: "sub" });
    else if (m[3]) runs.push({ text: m[3], kind: "sup" });
  }
  return runs.length ? runs : [{ text: formula, kind: "base" as const }];
}
