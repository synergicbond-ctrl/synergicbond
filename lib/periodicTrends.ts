// Periodic-property trend data + teaching metadata.
// Atomic radius (r) and electronegativity (en) are reused from DETAIL;
// first ionisation enthalpy (IE1) and electron gain enthalpy (EGE) are added
// here. Values are standard NCERT / JEE-reference data.

import { DETAIL } from "@/lib/periodicTable";

export type TrendId = "r" | "ie" | "ege" | "en";

// First ionisation enthalpy ΔᵢH₁ (kJ/mol).
export const IE1: Record<string, number> = {
  H: 1312, He: 2372,
  Li: 520, Be: 899, B: 801, C: 1086, N: 1402, O: 1314, F: 1681, Ne: 2081,
  Na: 496, Mg: 738, Al: 577, Si: 786, P: 1012, S: 1000, Cl: 1251, Ar: 1521,
  K: 419, Ca: 590, Sc: 633, Ti: 659, V: 651, Cr: 653, Mn: 717, Fe: 762,
  Co: 760, Ni: 737, Cu: 745, Zn: 906, Ga: 579, Ge: 762, As: 947, Se: 941,
  Br: 1140, Kr: 1351,
  Rb: 403, Sr: 549, Y: 600, Zr: 640, Nb: 652, Mo: 684, Ag: 731, Cd: 868,
  In: 558, Sn: 709, Sb: 834, Te: 869, I: 1008, Xe: 1170,
  Cs: 376, Ba: 503, La: 538, W: 770, Pt: 870, Au: 890, Hg: 1007,
  Tl: 589, Pb: 716, Bi: 703, Rn: 1037,
};

// Electron gain enthalpy ΔₑgH (kJ/mol). Negative = energy released (favourable);
// positive = endothermic (e.g. group 2 and noble gases).
export const EGE: Record<string, number> = {
  H: -73, He: 48,
  Li: -60, Be: 66, B: -27, C: -122, N: 7, O: -141, F: -328, Ne: 116,
  Na: -53, Mg: 67, Al: -43, Si: -134, P: -72, S: -200, Cl: -349, Ar: 96,
  K: -48, Ca: 43, Ga: -41, Ge: -119, As: -79, Se: -195, Br: -325, Kr: 96,
  Rb: -47, Sr: 5, In: -39, Sn: -107, Sb: -101, Te: -190, I: -295, Xe: 77,
  Cs: -46, Ba: 14,
};

function num(s?: string): number | null {
  if (!s || s === "—") return null;
  const v = parseFloat(s.replace(/−/g, "-").replace(/[^0-9.\-]/g, ""));
  return Number.isFinite(v) ? v : null;
}

/** Numeric value of a trend property for an element symbol (null if unknown). */
export function trendValue(sym: string, id: TrendId): number | null {
  if (id === "ie") return IE1[sym] ?? null;
  if (id === "ege") return EGE[sym] ?? null;
  const d = DETAIL[sym];
  if (!d) return null;
  if (id === "r") return num(d.r);
  if (id === "en") return num(d.en);
  return null;
}

export interface TrendMeta {
  id: TrendId;
  label: string;
  short: string;
  unit: string;
  emoji: string;
  definition: string;
  acrossPeriod: string;
  downGroup: string;
  reason: string;
  /** When true, a more-negative raw value should read as "high" on the heatmap. */
  invert: boolean;
  lowLabel: string;
  highLabel: string;
  exceptions: { title: string; detail: string }[];
  notable: string[];
}

export const TREND_META: TrendMeta[] = [
  {
    id: "r",
    label: "Atomic Radius",
    short: "Radius",
    unit: "pm",
    emoji: "⚪",
    definition:
      "Half the distance between the nuclei of two like atoms bonded together (covalent radius for most; van der Waals radius for noble gases).",
    acrossPeriod:
      "Decreases left → right across a period. Nuclear charge rises while electrons enter the same shell, so the effective nuclear charge pulls the cloud inward.",
    downGroup:
      "Increases top → bottom down a group. Each step adds a new principal shell, and increased shielding outweighs the higher nuclear charge.",
    reason:
      "Radius is the balance between attractive nuclear pull (Zₑff) and the number of shells / electron–electron shielding.",
    invert: false,
    lowLabel: "smaller",
    highLabel: "larger",
    exceptions: [
      {
        title: "Noble gases look 'large'",
        detail:
          "Their radii are van der Waals radii (no bonded neighbour), so they are not directly comparable to the covalent radii of other elements.",
      },
      {
        title: "d-block contraction",
        detail:
          "Across a transition series the radius changes only slightly — added d-electrons shield poorly, nearly cancelling the rise in nuclear charge.",
      },
      {
        title: "Lanthanide contraction",
        detail:
          "Poor shielding by 4f electrons makes 5d-series atoms (e.g. Hf, Ta) almost the same size as their 4d counterparts (Zr, Nb).",
      },
    ],
    notable: [
      "Cation < parent atom (lost a shell / higher Zₑff).",
      "Anion > parent atom (added electron, more repulsion).",
      "Cs is among the largest atoms; He the smallest.",
    ],
  },
  {
    id: "ie",
    label: "Ionisation Enthalpy",
    short: "Ionisation",
    unit: "kJ/mol",
    emoji: "⚡",
    definition:
      "ΔᵢH₁ — the minimum energy required to remove the most loosely bound electron from one mole of gaseous atoms (X(g) → X⁺(g) + e⁻).",
    acrossPeriod:
      "Increases left → right. Higher effective nuclear charge and smaller size hold the outer electron more tightly.",
    downGroup:
      "Decreases top → bottom. The outer electron sits in a higher shell, farther out and better shielded, so it leaves more easily.",
    reason:
      "Larger Zₑff and smaller radius → harder to remove an electron. Stable (half/fully-filled) sub-shells resist removal.",
    invert: false,
    lowLabel: "low IE",
    highLabel: "high IE",
    exceptions: [
      {
        title: "Be > B (and Mg > Al)",
        detail:
          "B's electron leaves a higher-energy 2p orbital, whereas Be removes from a stable filled 2s² — so B's IE dips below Be's.",
      },
      {
        title: "N > O (and P > S)",
        detail:
          "N has a stable half-filled 2p³. Removing an electron from O's 2p⁴ relieves electron–electron repulsion, so O's IE is lower than N's.",
      },
      {
        title: "Noble gases are peaks",
        detail:
          "Fully-filled, very stable configurations give the highest IE in each period (He highest of all).",
      },
    ],
    notable: [
      "Successive IEs always increase: IE₁ < IE₂ < IE₃ …",
      "A huge jump occurs once a noble-gas core is reached.",
      "Units: kJ/mol (or eV/atom: 1 eV ≈ 96.49 kJ/mol).",
    ],
  },
  {
    id: "ege",
    label: "Electron Gain Enthalpy",
    short: "Electron Gain",
    unit: "kJ/mol",
    emoji: "🧲",
    definition:
      "ΔₑgH — the enthalpy change when one mole of gaseous atoms gains an electron (X(g) + e⁻ → X⁻(g)). More negative = more energy released = greater tendency to accept an electron.",
    acrossPeriod:
      "Becomes more negative left → right (up to halogens). Smaller atoms with higher Zₑff attract the added electron more strongly.",
    downGroup:
      "Generally becomes less negative down a group — the added electron enters a larger, farther shell. (Notable size-driven exception at the top.)",
    reason:
      "Governed by Zₑff, atom size, and the stability of the resulting anion. Stable filled/half-filled shells make it endothermic (positive).",
    invert: true,
    lowLabel: "endothermic (+)",
    highLabel: "most exothermic (−)",
    exceptions: [
      {
        title: "Cl > F (most famous anomaly)",
        detail:
          "Cl (−349) releases MORE energy than F (−328). F's tiny 2p shell is so compact that adding an electron causes high electron–electron repulsion, reducing the energy released.",
      },
      {
        title: "S > O likewise",
        detail:
          "Same small-size repulsion effect: S (−200) is more negative than O (−141).",
      },
      {
        title: "Group 2 & 18 are positive",
        detail:
          "Stable ns² (Be, Mg) and fully-filled noble-gas shells resist gaining an electron — ΔₑgH is endothermic (positive).",
      },
    ],
    notable: [
      "Chlorine has the most negative electron gain enthalpy of all elements.",
      "Sign convention matters: negative = energy released.",
      "Don't confuse with electron affinity (opposite sign in older texts).",
    ],
  },
  {
    id: "en",
    label: "Electronegativity",
    short: "Electronegativity",
    unit: "",
    emoji: "🎯",
    definition:
      "The tendency of an atom in a bond to attract the shared pair of electrons toward itself (Pauling scale shown).",
    acrossPeriod:
      "Increases left → right. Higher Zₑff and smaller size pull bonding electrons more strongly.",
    downGroup:
      "Decreases top → bottom. Larger size and more shielding weaken the pull on shared electrons.",
    reason:
      "A bond-related property (not for isolated atoms). Tracks closely with high Zₑff and small atomic size.",
    invert: false,
    lowLabel: "least EN",
    highLabel: "most EN",
    exceptions: [
      {
        title: "Fluorine is the maximum",
        detail:
          "F (3.98 ≈ 4.0) is the most electronegative element; values fall away from the top-right corner.",
      },
      {
        title: "Noble gases — mostly undefined",
        detail:
          "Traditionally no electronegativity (they rarely bond); only heavier ones (Kr, Xe) get tentative values.",
      },
      {
        title: "Not a fixed atomic constant",
        detail:
          "EN depends on oxidation state and hybridisation (e.g. s-character: sp > sp² > sp³ carbon).",
      },
    ],
    notable: [
      "Order to remember: F > O > N ≈ Cl.",
      "ΔEN drives bond polarity / ionic character.",
      "Metals: low EN (electropositive); non-metals: high EN.",
    ],
  },
];
