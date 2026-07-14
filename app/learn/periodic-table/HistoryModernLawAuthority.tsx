"use client";

import { useEffect, useState, type ReactNode } from "react";

type Accent = "cyan" | "gold" | "violet" | "mint";
type MeyerKind = "alkali" | "alkalineEarth" | "transition" | "halogen" | "noble" | "other";
interface MeyerPoint {
  m: number;
  v: number;
  s: string;
  k: MeyerKind;
  dx: number;
  dy: number;
  a: string;
}

type ElementBlock = "s" | "p" | "d" | "f";
type ElementCategory =
  | "alkali"
  | "alkalineEarth"
  | "transition"
  | "postTransition"
  | "metalloid"
  | "reactiveNonmetal"
  | "halogen"
  | "noble"
  | "lanthanoid"
  | "actinoid"
  | "unknown";

interface ElementInfo {
  z: number;
  symbol: string;
  name: string;
  group: number | null;
  period: number;
  block: ElementBlock;
  category: ElementCategory;
  note?: string;
}

interface HistoricalRow {
  series: string;
  g0: string;
  g1: string;
  g2: string;
  g3: string;
  g4: string;
  g5: string;
  g6: string;
  g7: string;
  g8: string;
}

const palette = {
  navy: "#0B1C2C",
  cyan: "#5DD6F2",
  gold: "#F5C34D",
  violet: "#B99AFF",
  mint: "#7CE6BE",
};

const accentClasses: Record<Accent, { border: string; text: string; glow: string }> = {
  cyan: {
    border: "border-cyan-300/25",
    text: "text-cyan-200",
    glow: "shadow-[0_0_38px_rgba(93,214,242,0.08)]",
  },
  gold: {
    border: "border-amber-300/25",
    text: "text-amber-200",
    glow: "shadow-[0_0_38px_rgba(245,195,77,0.08)]",
  },
  violet: {
    border: "border-violet-300/25",
    text: "text-violet-200",
    glow: "shadow-[0_0_38px_rgba(185,154,255,0.08)]",
  },
  mint: {
    border: "border-emerald-300/25",
    text: "text-emerald-200",
    glow: "shadow-[0_0_38px_rgba(124,230,190,0.08)]",
  },
};

const meyerPointsUnsorted: MeyerPoint[] = [
  { m: 132.9, v: 70.9, s: "Cs", k: "alkali", dx: -10, dy: -14, a: "alkali-metal peak" },
  { m: 1.0, v: 14.0, s: "H", k: "other", dx: 0, dy: -12, a: "hydrogen boundary point" },
  { m: 7.0, v: 13.1, s: "Li", k: "alkali", dx: 0, dy: -14, a: "first alkali peak" },
  { m: 9.0, v: 4.9, s: "Be", k: "alkalineEarth", dx: 0, dy: 18, a: "descending branch" },
  { m: 12.0, v: 5.3, s: "C", k: "other", dx: 0, dy: 18, a: "compact non-metal" },
  { m: 19.0, v: 17.1, s: "F", k: "halogen", dx: 0, dy: -12, a: "halogen rise" },
  { m: 20.2, v: 16.8, s: "Ne", k: "noble", dx: 2, dy: 18, a: "noble-gas endpoint" },
  { m: 23.0, v: 23.7, s: "Na", k: "alkali", dx: 0, dy: -14, a: "alkali-metal peak" },
  { m: 24.3, v: 14.0, s: "Mg", k: "alkalineEarth", dx: 0, dy: 18, a: "descending branch" },
  { m: 27.0, v: 10.0, s: "Al", k: "other", dx: 0, dy: 18, a: "contracted region" },
  { m: 28.1, v: 12.1, s: "Si", k: "other", dx: 0, dy: -12, a: "metalloid region" },
  { m: 35.5, v: 22.7, s: "Cl", k: "halogen", dx: 0, dy: -14, a: "ascending branch" },
  { m: 39.9, v: 28.5, s: "Ar", k: "noble", dx: -2, dy: -14, a: "noble-gas endpoint" },
  { m: 39.1, v: 45.3, s: "K", k: "alkali", dx: 0, dy: -14, a: "strong alkali peak" },
  { m: 40.1, v: 25.9, s: "Ca", k: "alkalineEarth", dx: 0, dy: 18, a: "descending branch" },
  { m: 45.0, v: 15.0, s: "Sc", k: "transition", dx: 0, dy: -12, a: "transition descent" },
  { m: 47.9, v: 10.6, s: "Ti", k: "transition", dx: 0, dy: 18, a: "broad minimum" },
  { m: 52.0, v: 7.2, s: "Cr", k: "transition", dx: 0, dy: 18, a: "compact transition metal" },
  { m: 55.8, v: 7.1, s: "Fe", k: "transition", dx: 0, dy: -12, a: "broad minimum" },
  { m: 58.9, v: 6.7, s: "Co", k: "transition", dx: 0, dy: 18, a: "broad minimum" },
  { m: 58.7, v: 6.6, s: "Ni", k: "transition", dx: -5, dy: -12, a: "broad minimum" },
  { m: 63.5, v: 7.1, s: "Cu", k: "transition", dx: 0, dy: 18, a: "minimum begins to rise" },
  { m: 65.4, v: 9.2, s: "Zn", k: "transition", dx: 0, dy: -12, a: "filled d-shell region" },
  { m: 72.6, v: 13.6, s: "Ge", k: "other", dx: 0, dy: 18, a: "compact metalloid" },
  { m: 79.9, v: 23.5, s: "Br", k: "halogen", dx: 0, dy: -14, a: "ascending branch" },
  { m: 83.8, v: 27.9, s: "Kr", k: "noble", dx: 0, dy: 18, a: "noble-gas endpoint" },
  { m: 85.5, v: 55.9, s: "Rb", k: "alkali", dx: 0, dy: -14, a: "alkali-metal peak" },
  { m: 87.6, v: 33.7, s: "Sr", k: "alkalineEarth", dx: 0, dy: 18, a: "descending branch" },
  { m: 91.2, v: 14.0, s: "Zr", k: "transition", dx: 0, dy: -12, a: "transition-metal descent" },
  { m: 95.9, v: 9.4, s: "Mo", k: "transition", dx: 0, dy: 18, a: "broad minimum" },
  { m: 101.1, v: 8.3, s: "Ru", k: "transition", dx: 0, dy: -12, a: "broad minimum" },
  { m: 106.4, v: 8.9, s: "Pd", k: "transition", dx: 0, dy: 18, a: "minimum begins to rise" },
  { m: 127.0, v: 25.7, s: "I", k: "halogen", dx: 0, dy: -14, a: "ascending branch" },
  { m: 131.3, v: 37.3, s: "Xe", k: "noble", dx: -2, dy: 18, a: "noble-gas endpoint" },
];

const meyerPoints = [...meyerPointsUnsorted].sort((a, b) => a.m - b.m);

const historicalRows: HistoricalRow[] = [
  { series: "1", g0: "—", g1: "H", g2: "—", g3: "—", g4: "—", g5: "—", g6: "—", g7: "—", g8: "—" },
  { series: "2", g0: "—", g1: "Li", g2: "Be", g3: "B", g4: "C", g5: "N", g6: "O", g7: "F", g8: "—" },
  { series: "3", g0: "Ne", g1: "Na", g2: "Mg", g3: "Al", g4: "Si", g5: "P", g6: "S", g7: "Cl", g8: "—" },
  { series: "4", g0: "Ar", g1: "K", g2: "Ca", g3: "Sc", g4: "Ti", g5: "V", g6: "Cr", g7: "Mn", g8: "Fe · Co · Ni" },
  { series: "5", g0: "Kr", g1: "Cu", g2: "Zn", g3: "Ga", g4: "Ge", g5: "As", g6: "Se", g7: "Br", g8: "—" },
  { series: "6", g0: "—", g1: "Rb", g2: "Sr", g3: "Y", g4: "Zr", g5: "Nb", g6: "Mo", g7: "Tc", g8: "Ru · Rh · Pd" },
  { series: "7", g0: "Xe", g1: "Ag", g2: "Cd", g3: "In", g4: "Sn", g5: "Sb", g6: "Te", g7: "I", g8: "—" },
  { series: "8", g0: "—", g1: "Cs", g2: "Ba", g3: "La*", g4: "Hf", g5: "Ta", g6: "W", g7: "Re", g8: "Os · Ir · Pt" },
  { series: "9", g0: "Rn", g1: "Au", g2: "Hg", g3: "Tl", g4: "Pb", g5: "Bi", g6: "Po", g7: "At", g8: "—" },
  { series: "10", g0: "—", g1: "Fr", g2: "Ra", g3: "Ac*", g4: "Rf", g5: "Db", g6: "Sg", g7: "Bh", g8: "Hs · Mt · Ds" },
  { series: "11", g0: "—", g1: "—", g2: "—", g3: "Ce–Lu", g4: "—", g5: "—", g6: "—", g7: "—", g8: "inner series" },
  { series: "12", g0: "—", g1: "—", g2: "—", g3: "Th–Lr", g4: "—", g5: "—", g6: "—", g7: "—", g8: "inner series" },
];

const mainElements: ElementInfo[] = [
  { z: 1, symbol: "H", name: "Hydrogen", group: 1, period: 1, block: "s", category: "reactiveNonmetal", note: "1s¹; resembles Group 1 by electron count, yet can form both H⁺ and H⁻." },
  { z: 2, symbol: "He", name: "Helium", group: 18, period: 1, block: "s", category: "noble", note: "1s²; placed with Group 18 because its valence shell is complete and it is exceptionally inert." },
  { z: 3, symbol: "Li", name: "Lithium", group: 1, period: 2, block: "s", category: "alkali" },
  { z: 4, symbol: "Be", name: "Beryllium", group: 2, period: 2, block: "s", category: "alkalineEarth" },
  { z: 5, symbol: "B", name: "Boron", group: 13, period: 2, block: "p", category: "metalloid" },
  { z: 6, symbol: "C", name: "Carbon", group: 14, period: 2, block: "p", category: "reactiveNonmetal" },
  { z: 7, symbol: "N", name: "Nitrogen", group: 15, period: 2, block: "p", category: "reactiveNonmetal" },
  { z: 8, symbol: "O", name: "Oxygen", group: 16, period: 2, block: "p", category: "reactiveNonmetal" },
  { z: 9, symbol: "F", name: "Fluorine", group: 17, period: 2, block: "p", category: "halogen" },
  { z: 10, symbol: "Ne", name: "Neon", group: 18, period: 2, block: "p", category: "noble" },
  { z: 11, symbol: "Na", name: "Sodium", group: 1, period: 3, block: "s", category: "alkali" },
  { z: 12, symbol: "Mg", name: "Magnesium", group: 2, period: 3, block: "s", category: "alkalineEarth" },
  { z: 13, symbol: "Al", name: "Aluminium", group: 13, period: 3, block: "p", category: "postTransition" },
  { z: 14, symbol: "Si", name: "Silicon", group: 14, period: 3, block: "p", category: "metalloid" },
  { z: 15, symbol: "P", name: "Phosphorus", group: 15, period: 3, block: "p", category: "reactiveNonmetal" },
  { z: 16, symbol: "S", name: "Sulfur", group: 16, period: 3, block: "p", category: "reactiveNonmetal" },
  { z: 17, symbol: "Cl", name: "Chlorine", group: 17, period: 3, block: "p", category: "halogen" },
  { z: 18, symbol: "Ar", name: "Argon", group: 18, period: 3, block: "p", category: "noble" },
  { z: 19, symbol: "K", name: "Potassium", group: 1, period: 4, block: "s", category: "alkali" },
  { z: 20, symbol: "Ca", name: "Calcium", group: 2, period: 4, block: "s", category: "alkalineEarth" },
  { z: 21, symbol: "Sc", name: "Scandium", group: 3, period: 4, block: "d", category: "transition" },
  { z: 22, symbol: "Ti", name: "Titanium", group: 4, period: 4, block: "d", category: "transition" },
  { z: 23, symbol: "V", name: "Vanadium", group: 5, period: 4, block: "d", category: "transition" },
  { z: 24, symbol: "Cr", name: "Chromium", group: 6, period: 4, block: "d", category: "transition", note: "Ground state [Ar] 3d⁵4s¹: half-filled d stability modifies the simple filling forecast." },
  { z: 25, symbol: "Mn", name: "Manganese", group: 7, period: 4, block: "d", category: "transition" },
  { z: 26, symbol: "Fe", name: "Iron", group: 8, period: 4, block: "d", category: "transition" },
  { z: 27, symbol: "Co", name: "Cobalt", group: 9, period: 4, block: "d", category: "transition" },
  { z: 28, symbol: "Ni", name: "Nickel", group: 10, period: 4, block: "d", category: "transition" },
  { z: 29, symbol: "Cu", name: "Copper", group: 11, period: 4, block: "d", category: "transition", note: "Ground state [Ar] 3d¹⁰4s¹: a filled d subshell is especially stable." },
  { z: 30, symbol: "Zn", name: "Zinc", group: 12, period: 4, block: "d", category: "transition", note: "A d-block element, but not a transition element in its common atom and Zn²⁺ ion because the d subshell is complete." },
  { z: 31, symbol: "Ga", name: "Gallium", group: 13, period: 4, block: "p", category: "postTransition" },
  { z: 32, symbol: "Ge", name: "Germanium", group: 14, period: 4, block: "p", category: "metalloid" },
  { z: 33, symbol: "As", name: "Arsenic", group: 15, period: 4, block: "p", category: "metalloid" },
  { z: 34, symbol: "Se", name: "Selenium", group: 16, period: 4, block: "p", category: "reactiveNonmetal" },
  { z: 35, symbol: "Br", name: "Bromine", group: 17, period: 4, block: "p", category: "halogen" },
  { z: 36, symbol: "Kr", name: "Krypton", group: 18, period: 4, block: "p", category: "noble" },
  { z: 37, symbol: "Rb", name: "Rubidium", group: 1, period: 5, block: "s", category: "alkali" },
  { z: 38, symbol: "Sr", name: "Strontium", group: 2, period: 5, block: "s", category: "alkalineEarth" },
  { z: 39, symbol: "Y", name: "Yttrium", group: 3, period: 5, block: "d", category: "transition" },
  { z: 40, symbol: "Zr", name: "Zirconium", group: 4, period: 5, block: "d", category: "transition" },
  { z: 41, symbol: "Nb", name: "Niobium", group: 5, period: 5, block: "d", category: "transition" },
  { z: 42, symbol: "Mo", name: "Molybdenum", group: 6, period: 5, block: "d", category: "transition" },
  { z: 43, symbol: "Tc", name: "Technetium", group: 7, period: 5, block: "d", category: "transition" },
  { z: 44, symbol: "Ru", name: "Ruthenium", group: 8, period: 5, block: "d", category: "transition" },
  { z: 45, symbol: "Rh", name: "Rhodium", group: 9, period: 5, block: "d", category: "transition" },
  { z: 46, symbol: "Pd", name: "Palladium", group: 10, period: 5, block: "d", category: "transition", note: "Ground state [Kr] 4d¹⁰5s⁰, an important filling irregularity." },
  { z: 47, symbol: "Ag", name: "Silver", group: 11, period: 5, block: "d", category: "transition" },
  { z: 48, symbol: "Cd", name: "Cadmium", group: 12, period: 5, block: "d", category: "transition", note: "A d-block element whose common Cd²⁺ ion retains d¹⁰; therefore it is not classed as a transition element by the incomplete-d criterion." },
  { z: 49, symbol: "In", name: "Indium", group: 13, period: 5, block: "p", category: "postTransition" },
  { z: 50, symbol: "Sn", name: "Tin", group: 14, period: 5, block: "p", category: "postTransition" },
  { z: 51, symbol: "Sb", name: "Antimony", group: 15, period: 5, block: "p", category: "metalloid" },
  { z: 52, symbol: "Te", name: "Tellurium", group: 16, period: 5, block: "p", category: "metalloid" },
  { z: 53, symbol: "I", name: "Iodine", group: 17, period: 5, block: "p", category: "halogen" },
  { z: 54, symbol: "Xe", name: "Xenon", group: 18, period: 5, block: "p", category: "noble" },
  { z: 55, symbol: "Cs", name: "Caesium", group: 1, period: 6, block: "s", category: "alkali" },
  { z: 56, symbol: "Ba", name: "Barium", group: 2, period: 6, block: "s", category: "alkalineEarth" },
  { z: 57, symbol: "La", name: "Lanthanum", group: 3, period: 6, block: "f", category: "lanthanoid", note: "Often placed in Group 3 and used as the entry marker for the 4f series; block labels and Group 3 membership require careful distinction." },
  { z: 72, symbol: "Hf", name: "Hafnium", group: 4, period: 6, block: "d", category: "transition" },
  { z: 73, symbol: "Ta", name: "Tantalum", group: 5, period: 6, block: "d", category: "transition" },
  { z: 74, symbol: "W", name: "Tungsten", group: 6, period: 6, block: "d", category: "transition" },
  { z: 75, symbol: "Re", name: "Rhenium", group: 7, period: 6, block: "d", category: "transition" },
  { z: 76, symbol: "Os", name: "Osmium", group: 8, period: 6, block: "d", category: "transition" },
  { z: 77, symbol: "Ir", name: "Iridium", group: 9, period: 6, block: "d", category: "transition" },
  { z: 78, symbol: "Pt", name: "Platinum", group: 10, period: 6, block: "d", category: "transition" },
  { z: 79, symbol: "Au", name: "Gold", group: 11, period: 6, block: "d", category: "transition" },
  { z: 80, symbol: "Hg", name: "Mercury", group: 12, period: 6, block: "d", category: "transition", note: "A d-block element with a complete d¹⁰ arrangement in Hg and Hg²⁺; not a transition element by the incomplete-d criterion." },
  { z: 81, symbol: "Tl", name: "Thallium", group: 13, period: 6, block: "p", category: "postTransition" },
  { z: 82, symbol: "Pb", name: "Lead", group: 14, period: 6, block: "p", category: "postTransition" },
  { z: 83, symbol: "Bi", name: "Bismuth", group: 15, period: 6, block: "p", category: "postTransition" },
  { z: 84, symbol: "Po", name: "Polonium", group: 16, period: 6, block: "p", category: "postTransition" },
  { z: 85, symbol: "At", name: "Astatine", group: 17, period: 6, block: "p", category: "halogen" },
  { z: 86, symbol: "Rn", name: "Radon", group: 18, period: 6, block: "p", category: "noble" },
  { z: 87, symbol: "Fr", name: "Francium", group: 1, period: 7, block: "s", category: "alkali" },
  { z: 88, symbol: "Ra", name: "Radium", group: 2, period: 7, block: "s", category: "alkalineEarth" },
  { z: 89, symbol: "Ac", name: "Actinium", group: 3, period: 7, block: "f", category: "actinoid", note: "Commonly used as the entry marker for the 5f series and often placed in Group 3." },
  { z: 104, symbol: "Rf", name: "Rutherfordium", group: 4, period: 7, block: "d", category: "transition" },
  { z: 105, symbol: "Db", name: "Dubnium", group: 5, period: 7, block: "d", category: "transition" },
  { z: 106, symbol: "Sg", name: "Seaborgium", group: 6, period: 7, block: "d", category: "transition" },
  { z: 107, symbol: "Bh", name: "Bohrium", group: 7, period: 7, block: "d", category: "transition" },
  { z: 108, symbol: "Hs", name: "Hassium", group: 8, period: 7, block: "d", category: "transition" },
  { z: 109, symbol: "Mt", name: "Meitnerium", group: 9, period: 7, block: "d", category: "unknown" },
  { z: 110, symbol: "Ds", name: "Darmstadtium", group: 10, period: 7, block: "d", category: "unknown" },
  { z: 111, symbol: "Rg", name: "Roentgenium", group: 11, period: 7, block: "d", category: "unknown" },
  { z: 112, symbol: "Cn", name: "Copernicium", group: 12, period: 7, block: "d", category: "unknown" },
  { z: 113, symbol: "Nh", name: "Nihonium", group: 13, period: 7, block: "p", category: "unknown" },
  { z: 114, symbol: "Fl", name: "Flerovium", group: 14, period: 7, block: "p", category: "unknown" },
  { z: 115, symbol: "Mc", name: "Moscovium", group: 15, period: 7, block: "p", category: "unknown" },
  { z: 116, symbol: "Lv", name: "Livermorium", group: 16, period: 7, block: "p", category: "unknown" },
  { z: 117, symbol: "Ts", name: "Tennessine", group: 17, period: 7, block: "p", category: "halogen" },
  { z: 118, symbol: "Og", name: "Oganesson", group: 18, period: 7, block: "p", category: "noble" },
];

const fElements: ElementInfo[] = [
  { z: 58, symbol: "Ce", name: "Cerium", group: null, period: 6, block: "f", category: "lanthanoid" },
  { z: 59, symbol: "Pr", name: "Praseodymium", group: null, period: 6, block: "f", category: "lanthanoid" },
  { z: 60, symbol: "Nd", name: "Neodymium", group: null, period: 6, block: "f", category: "lanthanoid" },
  { z: 61, symbol: "Pm", name: "Promethium", group: null, period: 6, block: "f", category: "lanthanoid" },
  { z: 62, symbol: "Sm", name: "Samarium", group: null, period: 6, block: "f", category: "lanthanoid" },
  { z: 63, symbol: "Eu", name: "Europium", group: null, period: 6, block: "f", category: "lanthanoid" },
  { z: 64, symbol: "Gd", name: "Gadolinium", group: null, period: 6, block: "f", category: "lanthanoid" },
  { z: 65, symbol: "Tb", name: "Terbium", group: null, period: 6, block: "f", category: "lanthanoid" },
  { z: 66, symbol: "Dy", name: "Dysprosium", group: null, period: 6, block: "f", category: "lanthanoid" },
  { z: 67, symbol: "Ho", name: "Holmium", group: null, period: 6, block: "f", category: "lanthanoid" },
  { z: 68, symbol: "Er", name: "Erbium", group: null, period: 6, block: "f", category: "lanthanoid" },
  { z: 69, symbol: "Tm", name: "Thulium", group: null, period: 6, block: "f", category: "lanthanoid" },
  { z: 70, symbol: "Yb", name: "Ytterbium", group: null, period: 6, block: "f", category: "lanthanoid" },
  { z: 71, symbol: "Lu", name: "Lutetium", group: null, period: 6, block: "f", category: "lanthanoid", note: "Ground state [Xe] 4f¹⁴5d¹6s². It completes the lanthanoid sequence chemically, although its differentiating electron and possible Group 3 placement make the block label nuanced." },
  { z: 90, symbol: "Th", name: "Thorium", group: null, period: 7, block: "f", category: "actinoid", note: "Ground state [Rn] 6d²7s²; chemically associated with the actinoid series even before extensive 5f occupation develops." },
  { z: 91, symbol: "Pa", name: "Protactinium", group: null, period: 7, block: "f", category: "actinoid" },
  { z: 92, symbol: "U", name: "Uranium", group: null, period: 7, block: "f", category: "actinoid" },
  { z: 93, symbol: "Np", name: "Neptunium", group: null, period: 7, block: "f", category: "actinoid" },
  { z: 94, symbol: "Pu", name: "Plutonium", group: null, period: 7, block: "f", category: "actinoid" },
  { z: 95, symbol: "Am", name: "Americium", group: null, period: 7, block: "f", category: "actinoid" },
  { z: 96, symbol: "Cm", name: "Curium", group: null, period: 7, block: "f", category: "actinoid" },
  { z: 97, symbol: "Bk", name: "Berkelium", group: null, period: 7, block: "f", category: "actinoid" },
  { z: 98, symbol: "Cf", name: "Californium", group: null, period: 7, block: "f", category: "actinoid" },
  { z: 99, symbol: "Es", name: "Einsteinium", group: null, period: 7, block: "f", category: "actinoid" },
  { z: 100, symbol: "Fm", name: "Fermium", group: null, period: 7, block: "f", category: "actinoid" },
  { z: 101, symbol: "Md", name: "Mendelevium", group: null, period: 7, block: "f", category: "actinoid" },
  { z: 102, symbol: "No", name: "Nobelium", group: null, period: 7, block: "f", category: "actinoid" },
  { z: 103, symbol: "Lr", name: "Lawrencium", group: null, period: 7, block: "f", category: "actinoid", note: "It completes the actinoid sequence chemically. Modern calculations favor [Rn] 5f¹⁴7s²7p¹, while older compact schemes often wrote a 6d¹ form; its Group 3 placement remains a structural discussion." },
];

const categoryStyles: Record<ElementCategory, string> = {
  alkali: "border-cyan-300/40 bg-cyan-300/10 text-cyan-50",
  alkalineEarth: "border-emerald-300/40 bg-emerald-300/10 text-emerald-50",
  transition: "border-violet-300/40 bg-violet-300/10 text-violet-50",
  postTransition: "border-amber-300/40 bg-amber-300/10 text-amber-50",
  metalloid: "border-fuchsia-300/40 bg-fuchsia-300/10 text-fuchsia-50",
  reactiveNonmetal: "border-sky-300/40 bg-sky-300/10 text-sky-50",
  halogen: "border-rose-300/40 bg-rose-300/10 text-rose-50",
  noble: "border-indigo-300/40 bg-indigo-300/10 text-indigo-50",
  lanthanoid: "border-teal-300/40 bg-teal-300/10 text-teal-50",
  actinoid: "border-orange-300/40 bg-orange-300/10 text-orange-50",
  unknown: "border-slate-400/40 bg-slate-400/10 text-slate-100",
};

const categoryLabels: Record<ElementCategory, string> = {
  alkali: "alkali metal",
  alkalineEarth: "alkaline-earth metal",
  transition: "d-block metal",
  postTransition: "post-transition metal",
  metalloid: "metalloid",
  reactiveNonmetal: "reactive non-metal",
  halogen: "halogen",
  noble: "noble gas",
  lanthanoid: "lanthanoid",
  actinoid: "actinoid",
  unknown: "predicted heavy-element behavior",
};

const mainPosition = (element: ElementInfo): { column: number; row: number } => ({
  column: element.group ?? 3,
  row: element.period,
});

function Section({
  number,
  kicker,
  title,
  accent = "cyan",
  children,
}: {
  number: string;
  kicker: string;
  title: string;
  accent?: Accent;
  children: ReactNode;
}) {
  const theme = accentClasses[accent];
  return (
    <section className={`rounded-[28px] border ${theme.border} ${theme.glow} bg-white/[0.035] p-4 sm:p-6 lg:p-8`}>
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className={`rounded-full border ${theme.border} bg-white/5 px-3 py-1 text-xs font-black tracking-[0.2em] ${theme.text}`}>
          {number}
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{kicker}</span>
      </div>
      <h2 className="max-w-[860px] text-balance text-2xl font-black leading-tight text-white sm:text-3xl">{title}</h2>
      <div className="mt-5 space-y-5 text-[15px] leading-7 text-slate-200 sm:text-base">{children}</div>
    </section>
  );
}

function GlossCard({
  title,
  accent = "cyan",
  children,
}: {
  title: string;
  accent?: Accent;
  children: ReactNode;
}) {
  const theme = accentClasses[accent];
  return (
    <article className={`rounded-2xl border ${theme.border} bg-slate-950/35 p-4 ${theme.glow}`}>
      <h3 className={`text-sm font-black uppercase tracking-[0.14em] ${theme.text}`}>{title}</h3>
      <div className="mt-3 space-y-2 text-sm leading-6 text-slate-200">{children}</div>
    </article>
  );
}

function Formula({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.07] px-2 py-0.5 font-mono text-[0.94em] text-cyan-100">
      {children}
    </span>
  );
}

function MeritDemerit({ merits, demerits }: { merits: string[]; demerits: string[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <div className="rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3">
        <h4 className="font-black text-emerald-200">Merits</h4>
        <ul className="mt-2 space-y-1.5 pl-5 text-sm text-slate-200 marker:text-emerald-300">
          {merits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-3">
        <h4 className="font-black text-amber-200">Demerits / limits</h4>
        <ul className="mt-2 space-y-1.5 pl-5 text-sm text-slate-200 marker:text-amber-300">
          {demerits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MeyerCurve() {
  const width = 980;
  const height = 390;
  const left = 62;
  const right = 28;
  const top = 28;
  const bottom = 50;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const x = (mass: number) => left + (mass / 135) * plotWidth;
  const y = (volume: number) => top + plotHeight - (volume / 75) * plotHeight;
  const path = meyerPoints.map((point, index) => `${index === 0 ? "M" : "L"}${x(point.m).toFixed(1)},${y(point.v).toFixed(1)}`).join(" ");
  const pointColor: Record<MeyerKind, string> = {
    alkali: palette.cyan,
    alkalineEarth: palette.mint,
    transition: palette.violet,
    halogen: palette.gold,
    noble: "#93A4FF",
    other: "#CBD5E1",
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-[#071522] p-3">
      <svg viewBox={`0 0 ${width} ${height}`} className="min-w-[820px]" role="img" aria-labelledby="meyer-title meyer-desc">
        <title id="meyer-title">Lothar Meyer atomic-volume curve from hydrogen to caesium</title>
        <desc id="meyer-desc">A periodic curve with alkali metals at peaks, alkaline-earth metals on descending branches, transition metals near broad minima, and halogens on rising branches.</desc>
        <defs>
          <linearGradient id="meyer-line" x1="0" x2="1">
            <stop offset="0" stopColor={palette.cyan} />
            <stop offset="0.48" stopColor={palette.violet} />
            <stop offset="1" stopColor={palette.gold} />
          </linearGradient>
          <filter id="meyer-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {[0, 15, 30, 45, 60, 75].map((tick) => (
          <g key={tick}>
            <line x1={left} x2={width - right} y1={y(tick)} y2={y(tick)} stroke="#284052" strokeWidth="1" strokeDasharray="5 7" />
            <text x={left - 10} y={y(tick) + 4} textAnchor="end" fill="#94A3B8" fontSize="12">{tick}</text>
          </g>
        ))}
        {[0, 20, 40, 60, 80, 100, 120, 140].map((tick) => (
          <g key={tick}>
            <line x1={x(tick)} x2={x(tick)} y1={top} y2={height - bottom} stroke="#1F3546" strokeWidth="1" />
            <text x={x(tick)} y={height - 24} textAnchor="middle" fill="#94A3B8" fontSize="12">{tick}</text>
          </g>
        ))}
        <line x1={left} x2={left} y1={top} y2={height - bottom} stroke="#A8C2D8" strokeWidth="1.5" />
        <line x1={left} x2={width - right} y1={height - bottom} y2={height - bottom} stroke="#A8C2D8" strokeWidth="1.5" />
        <path d={path} fill="none" stroke="url(#meyer-line)" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" filter="url(#meyer-glow)" />
        {meyerPoints.map((point) => (
          <g key={`${point.s}-${point.m}`}>
            <circle cx={x(point.m)} cy={y(point.v)} r="5" fill={pointColor[point.k]} stroke="#071522" strokeWidth="2">
              <title>{`${point.s}: atomic weight ${point.m}, atomic volume ≈ ${point.v} cm³ mol⁻¹; ${point.a}`}</title>
            </circle>
            <text x={x(point.m) + point.dx} y={y(point.v) + point.dy} textAnchor="middle" fill={pointColor[point.k]} fontSize="11" fontWeight="800">
              {point.s}
            </text>
          </g>
        ))}
        <text x={width / 2} y={height - 5} textAnchor="middle" fill="#DCEAF3" fontSize="14" fontWeight="700">Atomic weight</text>
        <text x="16" y={height / 2} transform={`rotate(-90 16 ${height / 2})`} textAnchor="middle" fill="#DCEAF3" fontSize="14" fontWeight="700">
          Atomic volume, Vₘ / cm³ mol⁻¹
        </text>
      </svg>
    </div>
  );
}

function MoseleyDiagram() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="overflow-x-auto rounded-2xl border border-violet-300/20 bg-[#071522] p-3">
        <svg viewBox="0 0 760 330" className="min-w-[650px]" role="img" aria-labelledby="moseley-apparatus-title moseley-apparatus-desc">
          <title id="moseley-apparatus-title">Moseley characteristic X-ray experiment</title>
          <desc id="moseley-apparatus-desc">High-speed electrons strike a metal target. Characteristic X-rays are diffracted by a crystal and measured by a detector.</desc>
          <defs>
            <linearGradient id="beam" x1="0" x2="1"><stop stopColor={palette.cyan} /><stop offset="1" stopColor="#FFFFFF" /></linearGradient>
            <filter id="xglow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill={palette.cyan} /></marker>
          </defs>
          <rect x="34" y="110" width="150" height="95" rx="22" fill="#102A3D" stroke={palette.cyan} strokeWidth="2" />
          <text x="109" y="142" textAnchor="middle" fill="#EAF9FF" fontSize="17" fontWeight="800">electron gun</text>
          <text x="109" y="170" textAnchor="middle" fill="#9FB5C4" fontSize="13">accelerating voltage</text>
          <line x1="184" y1="158" x2="300" y2="158" stroke="url(#beam)" strokeWidth="8" markerEnd="url(#arrow)" filter="url(#xglow)" />
          <g fill={palette.cyan}>{[205, 230, 255, 280].map((cx) => <circle key={cx} cx={cx} cy="158" r="4" />)}</g>
          <rect x="314" y="95" width="40" height="126" rx="8" fill="#F5C34D22" stroke={palette.gold} strokeWidth="3" />
          <text x="334" y="72" textAnchor="middle" fill={palette.gold} fontSize="15" fontWeight="800">metal target</text>
          {[0, 1, 2, 3, 4].map((i) => <path key={i} d={`M354 158 Q${420 + i * 8} ${96 - i * 10} ${486 + i * 10} ${86 - i * 4}`} fill="none" stroke={palette.violet} strokeWidth="3" opacity={0.95 - i * 0.1} />)}
          <text x="432" y="53" textAnchor="middle" fill={palette.violet} fontSize="15" fontWeight="800">characteristic X-rays</text>
          <polygon points="493,74 558,106 520,168 455,136" fill="#7CE6BE22" stroke={palette.mint} strokeWidth="3" />
          <text x="510" y="197" textAnchor="middle" fill={palette.mint} fontSize="15" fontWeight="800">analyzing crystal</text>
          <path d="M529 124 Q610 145 665 220" fill="none" stroke={palette.gold} strokeWidth="4" markerEnd="url(#arrow)" />
          <rect x="626" y="224" width="100" height="58" rx="15" fill="#251C3D" stroke={palette.violet} strokeWidth="2" />
          <text x="676" y="258" textAnchor="middle" fill="#F3EEFF" fontSize="15" fontWeight="800">detector</text>
          <text x="380" y="305" textAnchor="middle" fill="#AFC1CE" fontSize="14">Each target gives a characteristic frequency pattern determined by nuclear charge Z.</text>
        </svg>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-[#071522] p-3">
        <svg viewBox="0 0 600 330" className="min-w-[520px]" role="img" aria-labelledby="moseley-graph-title moseley-graph-desc">
          <title id="moseley-graph-title">Moseley straight-line plot</title>
          <desc id="moseley-graph-desc">The square root of characteristic X-ray frequency increases linearly with atomic number after a screening correction.</desc>
          <line x1="70" y1="270" x2="560" y2="270" stroke="#A8C2D8" strokeWidth="2" />
          <line x1="70" y1="270" x2="70" y2="35" stroke="#A8C2D8" strokeWidth="2" />
          {[20, 30, 40, 50, 60, 70, 80].map((z) => {
            const px = 70 + ((z - 15) / 70) * 470;
            const py = 270 - ((z - 15) / 70) * 205;
            return <circle key={z} cx={px} cy={py} r="6" fill={palette.cyan} stroke="#081521" strokeWidth="2" />;
          })}
          <line x1="92" y1="250" x2="535" y2="52" stroke={palette.violet} strokeWidth="4" />
          <text x="345" y="42" textAnchor="middle" fill={palette.violet} fontSize="17" fontWeight="900">√ν = a(Z − b)</text>
          <text x="320" y="312" textAnchor="middle" fill="#DCEAF3" fontSize="15" fontWeight="700">Atomic number, Z</text>
          <text x="20" y="160" transform="rotate(-90 20 160)" textAnchor="middle" fill="#DCEAF3" fontSize="15" fontWeight="700">√ν</text>
        </svg>
      </div>
    </div>
  );
}

function ElementTile({ element, onSelect, compact = false }: { element: ElementInfo; onSelect: (element: ElementInfo) => void; compact?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(element)}
      className={`group relative min-h-[56px] rounded-lg border p-1 text-left transition hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${categoryStyles[element.category]} ${compact ? "min-w-[52px]" : "min-w-[58px]"}`}
      aria-label={`${element.name}, atomic number ${element.z}`}
    >
      <span className="block text-[9px] font-bold leading-none opacity-75">{element.z}</span>
      <span className="mt-1 block text-center text-lg font-black leading-none">{element.symbol}</span>
      <span className="mt-1 block truncate text-center text-[8px] font-semibold leading-none opacity-80">{element.name}</span>
    </button>
  );
}

function PeriodicTable() {
  const [selected, setSelected] = useState<ElementInfo | null>(null);

  useEffect(() => {
    if (!selected) return undefined;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selected]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 text-[11px] font-bold">
        {(Object.keys(categoryLabels) as ElementCategory[]).map((category) => (
          <span key={category} className={`rounded-full border px-2.5 py-1 ${categoryStyles[category]}`}>{categoryLabels[category]}</span>
        ))}
      </div>
      <div className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-[#071522] p-3">
        <div className="min-w-[1120px]">
          <div className="grid grid-cols-[repeat(18,minmax(0,1fr))] gap-1">
            {Array.from({ length: 18 }, (_, index) => (
              <div key={index} className="pb-1 text-center text-[10px] font-black text-slate-500">{index + 1}</div>
            ))}
          </div>
          <div className="grid grid-cols-[repeat(18,minmax(0,1fr))] grid-rows-[repeat(7,minmax(0,1fr))] gap-1">
            {mainElements.map((element) => {
              const position = mainPosition(element);
              return (
                <div key={element.z} style={{ gridColumnStart: position.column, gridRowStart: position.row }}>
                  <ElementTile element={element} onSelect={setSelected} />
                </div>
              );
            })}
          </div>
          <div className="mt-4 grid grid-cols-[110px_repeat(14,minmax(52px,1fr))] gap-1">
            <div className="flex items-center text-xs font-black text-teal-200">4f · Ce–Lu</div>
            {fElements.filter((element) => element.period === 6).map((element) => <ElementTile key={element.z} element={element} onSelect={setSelected} compact />)}
            <div className="flex items-center text-xs font-black text-orange-200">5f · Th–Lr</div>
            {fElements.filter((element) => element.period === 7).map((element) => <ElementTile key={element.z} element={element} onSelect={setSelected} compact />)}
          </div>
        </div>
      </div>
      <p className="max-w-[860px] text-sm text-slate-400">Select any element for its atomic number, period, group position, block, family, and a placement note where the classification needs special care.</p>
      {selected ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#02080e]/80 p-4 backdrop-blur-sm" onMouseDown={() => setSelected(null)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} details`}
            className="w-full max-w-md rounded-[28px] border border-cyan-300/30 bg-[#0B1C2C] p-5 shadow-[0_0_80px_rgba(93,214,242,0.18)]"
            onMouseDown={(event: { stopPropagation: () => void }) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Element {selected.z}</div>
                <h3 className="mt-1 text-3xl font-black text-white">{selected.symbol} · {selected.name}</h3>
              </div>
              <button type="button" onClick={() => setSelected(null)} className="rounded-full border border-white/15 px-3 py-1 text-sm font-black text-slate-300 hover:bg-white/10" aria-label="Close element details">×</button>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><dt className="text-slate-400">Period</dt><dd className="mt-1 text-lg font-black text-white">{selected.period}</dd></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><dt className="text-slate-400">Group</dt><dd className="mt-1 text-lg font-black text-white">{selected.group ?? "inner series"}</dd></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><dt className="text-slate-400">Block</dt><dd className="mt-1 text-lg font-black text-white">{selected.block}</dd></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><dt className="text-slate-400">Family</dt><dd className="mt-1 font-black text-white">{categoryLabels[selected.category]}</dd></div>
            </dl>
            <div className="mt-4 rounded-xl border border-violet-300/20 bg-violet-300/[0.06] p-3 text-sm leading-6 text-slate-200">
              {selected.note ?? (selected.block === "s" ? "The differentiating electron enters an s subshell." : selected.block === "p" ? "The differentiating electron enters a p subshell." : selected.block === "d" ? "The differentiating electron enters the (n−1)d subshell." : "The differentiating electron belongs to the inner (n−2)f region of the long-period architecture.")}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function HistoryModernLawAuthority() {
  return (
    <main className="min-h-screen bg-[#0B1C2C] text-slate-100">
      <div className="mx-auto max-w-[1220px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <header className="relative overflow-hidden rounded-[34px] border border-cyan-300/25 bg-[radial-gradient(circle_at_top_left,rgba(93,214,242,0.18),transparent_36%),radial-gradient(circle_at_88%_18%,rgba(185,154,255,0.16),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-5 shadow-[0_0_90px_rgba(93,214,242,0.08)] sm:p-8 lg:p-10">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-violet-300/20 bg-violet-300/5 blur-2xl" />
          <div className="relative">
            <div className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Synergic Bond · Classification Authority</div>
            <h1 className="mt-5 max-w-[900px] text-balance text-3xl font-black leading-[1.06] text-white sm:text-5xl lg:text-6xl">From isolated facts to the modern periodic law</h1>
            <p className="mt-5 max-w-[860px] text-base leading-7 text-slate-200 sm:text-lg">A rigorous historical reconstruction of the ideas, numerical patterns, successful predictions, failed assumptions, X-ray evidence, quantum architecture, and classification logic that produced the long-form periodic table.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["1789 → 1865", "early numerical patterns"],
                ["1869 → 1871", "Meyer and Mendeleev"],
                ["1913", "Moseley establishes Z"],
                ["118 elements", "modern long form"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-white/10 bg-black/15 p-3"><div className="text-lg font-black text-cyan-200">{value}</div><div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{label}</div></div>
              ))}
            </div>
          </div>
        </header>

        <div className="mt-6 space-y-6">
          <Section number="01" kicker="Genesis" title="Why classification became necessary: compression, comparison, prediction" accent="cyan">
            <p className="max-w-[860px]">As the number of known elements increased, chemistry could no longer remain a catalogue of unrelated colors, densities, oxide formulas, and reactivities. A useful classification had to perform three tasks at once: <strong className="text-white">compress</strong> many facts into a few patterns, <strong className="text-white">compare</strong> chemically similar elements, and <strong className="text-white">predict</strong> properties not yet measured.</p>
            <div className="grid gap-4 lg:grid-cols-3">
              <GlossCard title="Lavoisier · 1789" accent="cyan">
                <p>He separated many simple substances into broad families, prominently metals and non-metals, using observable behavior such as metallic conductivity, luster, and the character of oxides.</p>
                <p><strong className="text-emerald-200">Merit:</strong> the first influential systematic division linked physical behavior with chemical behavior.</p>
                <p><strong className="text-amber-200">Limit:</strong> the division was too broad. Borderline elements such as Si and As could not be described adequately by a strict metal/non-metal split.</p>
              </GlossCard>
              <GlossCard title="Prout’s hypothesis · 1815" accent="gold">
                <p>Atomic weights were proposed to be integral multiples of hydrogen:</p>
                <p><Formula>A ≈ n × A(H)</Formula></p>
                <p>The idea was attractive because it suggested a common building unit. It failed as a universal law when carefully measured fractional values appeared; chlorine near <strong className="text-white">35.5</strong> is the standard counterexample. The later discovery of isotopic mixtures explained why many average atomic masses are non-integral.</p>
              </GlossCard>
              <GlossCard title="Pettenkofer’s rule · 1850" accent="violet">
                <p>Chemically similar elements were noticed to differ in atomic weight by approximately integral multiples of eight:</p>
                <p><Formula>ΔA ≈ m × 8</Formula></p>
                <p>For Li–Na–K, <Formula>23 − 7 = 16 = 2 × 8</Formula>. The rule was an empirical clue, not a universal periodic law, but it directed attention toward numerical spacing inside chemical families.</p>
              </GlossCard>
            </div>
          </Section>

          <Section number="02" kicker="Triads, helix, octaves" title="Early periodic patterns became progressively more structural" accent="gold">
            <div className="grid gap-4 lg:grid-cols-2">
              <GlossCard title="Döbereiner’s law of triads · 1829" accent="gold">
                <p>Three elements form a valid triad only when both conditions hold:</p>
                <ol className="list-decimal space-y-1 pl-5 marker:text-amber-300">
                  <li>their chemical properties are closely related;</li>
                  <li>the atomic weight of the middle element is approximately the arithmetic mean of the first and third.</li>
                </ol>
                <div className="overflow-x-auto">
                  <table className="mt-3 min-w-[540px] w-full border-collapse text-xs">
                    <thead><tr className="text-left text-amber-200"><th className="border-b border-white/10 p-2">Triad</th><th className="border-b border-white/10 p-2">Atomic weights</th><th className="border-b border-white/10 p-2">Mean test</th></tr></thead>
                    <tbody className="text-slate-200">
                      <tr><td className="border-b border-white/5 p-2">Li–Na–K</td><td className="border-b border-white/5 p-2">7, 23, 39</td><td className="border-b border-white/5 p-2">(7 + 39)/2 = 23</td></tr>
                      <tr><td className="border-b border-white/5 p-2">Ca–Sr–Ba</td><td className="border-b border-white/5 p-2">40, 88, 137</td><td className="border-b border-white/5 p-2">(40 + 137)/2 = 88.5 ≈ 88</td></tr>
                      <tr><td className="border-b border-white/5 p-2">Cl–Br–I</td><td className="border-b border-white/5 p-2">35.5, 80, 127</td><td className="border-b border-white/5 p-2">(35.5 + 127)/2 = 81.25 ≈ 80</td></tr>
                      <tr><td className="p-2">S–Se–Te</td><td className="p-2">32, 79, 127.6</td><td className="p-2">(32 + 127.6)/2 = 79.8 ≈ 79</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="rounded-xl border border-rose-300/20 bg-rose-300/[0.06] p-3"><strong className="text-rose-200">False-triad warning:</strong> a numerical mean alone is insufficient. Three unrelated elements do not become a triad merely because their masses happen to fit an arithmetic relation.</p>
              </GlossCard>
              <GlossCard title="de Chancourtois · telluric screw · 1862" accent="violet">
                <p>Elements were arranged by increasing atomic weight on a helix drawn around a cylinder whose circumference represented roughly <strong className="text-white">16 mass units</strong>. Elements appearing vertically above one another often showed related chemistry.</p>
                <div className="rounded-xl border border-violet-300/20 bg-[#071522] p-3">
                  <svg viewBox="0 0 560 300" role="img" aria-labelledby="helix-title helix-desc">
                    <title id="helix-title">Telluric screw concept</title>
                    <desc id="helix-desc">A helical path around a cylinder aligns chemically related elements vertically after repeated mass intervals.</desc>
                    <defs><linearGradient id="cyl" x1="0" x2="1"><stop stopColor="#5DD6F222" /><stop offset="0.5" stopColor="#FFFFFF10" /><stop offset="1" stopColor="#B99AFF22" /></linearGradient></defs>
                    <ellipse cx="280" cy="52" rx="118" ry="30" fill="url(#cyl)" stroke={palette.cyan} strokeWidth="2" />
                    <rect x="162" y="52" width="236" height="190" fill="url(#cyl)" stroke={palette.cyan} strokeWidth="2" />
                    <ellipse cx="280" cy="242" rx="118" ry="30" fill="#081722" stroke={palette.cyan} strokeWidth="2" />
                    <path d="M166 76 C220 116 343 116 394 76 C344 36 220 36 166 76 M166 122 C220 162 343 162 394 122 C344 82 220 82 166 122 M166 168 C220 208 343 208 394 168 C344 128 220 128 166 168 M166 214 C220 254 343 254 394 214" fill="none" stroke={palette.gold} strokeWidth="4" />
                    {[190, 235, 280, 325, 370].map((cx, i) => <circle key={cx} cx={cx} cy={80 + i * 34} r="7" fill={i % 2 ? palette.violet : palette.mint} />)}
                    <line x1="280" y1="34" x2="280" y2="260" stroke="#CBD5E1" strokeDasharray="6 7" />
                    <text x="280" y="288" textAnchor="middle" fill="#BFCED8" fontSize="14">vertical alignment reveals recurring chemical families</text>
                  </svg>
                </div>
                <p><strong className="text-emerald-200">Merit:</strong> the first three-dimensional periodic arrangement. <strong className="text-amber-200">Limit:</strong> the cylindrical presentation was difficult to read and did not become a practical predictive table.</p>
              </GlossCard>
            </div>
            <GlossCard title="Newlands’ law of octaves · 1865" accent="cyan">
              <p>When elements were arranged by increasing atomic weight, every eighth element was proposed to resemble the first, like recurrence in a musical scale:</p>
              <div className="rounded-xl border border-cyan-300/25 bg-cyan-300/[0.07] p-4 text-center text-lg font-black tracking-wide text-cyan-100">Sa–Re–Ga–Ma–Pa–Dha–Ni–Sa</div>
              <p><strong className="text-white">Rule:</strong> property similarity reappears at the eighth position. The pattern was especially persuasive among lighter elements.</p>
              <MeritDemerit
                merits={["Established a genuine repeating structural pattern rather than isolated three-element families.", "Encouraged continuous ordering by atomic weight and direct comparison of recurring properties."]}
                demerits={["Worked reliably only up to calcium (Z = 20).", "Forced dissimilar elements into the same position, such as Fe with O/S in early layouts.", "Left no deliberate gaps for undiscovered elements.", "The later insertion of noble gases disrupted the literal eighth-position count, although periodic recurrence itself survived."]}
              />
            </GlossCard>
          </Section>

          <Section number="03" kicker="Lothar Meyer" title="Physical periodicity became visible as a repeating curve" accent="violet">
            <p className="max-w-[860px]">Meyer used <strong className="text-white">atomic volume</strong>, defined as <Formula>Vₘ = molar mass / density</Formula>, and plotted it against atomic weight. The resulting wave-like graph did not merely group similar elements: it displayed the continuous contraction and expansion of matter across successive chemical families.</p>
            <h3 className="text-xl font-black text-violet-200">Lothar Meyer atomic-volume curve from hydrogen to caesium</h3>
            <MeyerCurve />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <GlossCard title="Peaks" accent="cyan"><p>Li, Na, K, Rb, and Cs occupy major maxima. These alkali metals combine large atomic volume with strong electropositive character.</p></GlossCard>
              <GlossCard title="Descending branches" accent="mint"><p>Be, Mg, Ca, Sr, and Ba appear after the peaks as the volume falls with increasing effective nuclear attraction.</p></GlossCard>
              <GlossCard title="Broad minima" accent="violet"><p>Transition metals and compact metalloids cluster in low-volume regions where increasing nuclear charge contracts the structure.</p></GlossCard>
              <GlossCard title="Ascending branches" accent="gold"><p>Halogens F, Cl, Br, and I occur on rising regions before the next alkali-metal maximum and represent strongly electronegative families.</p></GlossCard>
            </div>
            <MeritDemerit
              merits={["Made periodicity of a measurable physical property visually undeniable.", "Connected chemical families with repeating maxima, minima, and branch positions.", "Showed that periodic behavior is continuous rather than a collection of accidental arithmetic matches."]}
              demerits={["The curve alone did not provide a uniquely organized table for routine chemical comparison.", "It offered no equally concrete prediction laboratory for the properties of missing elements.", "Atomic-volume values depend on physical state, density data, and measurement conditions, so the graph is empirical rather than fundamental."]}
            />
          </Section>

          <Section number="04" kicker="Mendeleev · 1869–1871" title="A predictive table: chemical identity took priority over mechanical mass order" accent="gold">
            <div className="rounded-2xl border border-amber-300/25 bg-amber-300/[0.07] p-4 text-lg font-black text-amber-100">Periodic law: the physical and chemical properties of elements are periodic functions of their atomic weights.</div>
            <p className="max-w-[860px]">The decisive advance was not merely placing known elements in rows. Mendeleev treated the table as a scientific model: a chemically unreasonable position could signal an incorrect atomic weight, and a vacant position could represent a real element whose properties were calculable from neighboring trends.</p>
            <h3 className="text-xl font-black text-amber-200">Mendeleev’s periodic table: groups and series</h3>
            <div className="overflow-x-auto rounded-2xl border border-amber-300/20 bg-[#071522] p-3">
              <table className="min-w-[940px] w-full border-collapse text-center text-xs">
                <thead>
                  <tr className="text-amber-200">
                    <th className="border border-white/10 p-2">Series</th><th className="border border-white/10 p-2">Group 0</th><th className="border border-white/10 p-2">I</th><th className="border border-white/10 p-2">II</th><th className="border border-white/10 p-2">III</th><th className="border border-white/10 p-2">IV</th><th className="border border-white/10 p-2">V</th><th className="border border-white/10 p-2">VI</th><th className="border border-white/10 p-2">VII</th><th className="border border-white/10 p-2">VIII</th>
                  </tr>
                </thead>
                <tbody>
                  {historicalRows.map((row) => (
                    <tr key={row.series} className="text-slate-200 odd:bg-white/[0.025]">
                      <th className="border border-white/10 p-2 text-cyan-200">{row.series}</th>
                      {[row.g0, row.g1, row.g2, row.g3, row.g4, row.g5, row.g6, row.g7, row.g8].map((cell, index) => <td key={`${row.series}-${index}`} className={`border border-white/10 p-2 ${index === 8 ? "font-black text-violet-100" : ""}`}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="max-w-[860px] text-sm text-slate-400">Compact teaching reconstruction of the short-form group/series logic. Group 0 was appended after noble gases became known; Group VIII used horizontal triads such as Fe–Co–Ni, Ru–Rh–Pd, and Os–Ir–Pt. Asterisks mark the entry positions of inner series.</p>

            <div className="overflow-x-auto rounded-2xl border border-violet-300/20 bg-[#071522] p-3">
              <table className="min-w-[900px] w-full border-collapse text-center text-xs">
                <thead><tr className="text-violet-200"><th className="border border-white/10 p-2">Group</th><th className="border border-white/10 p-2">I</th><th className="border border-white/10 p-2">II</th><th className="border border-white/10 p-2">III</th><th className="border border-white/10 p-2">IV</th><th className="border border-white/10 p-2">V</th><th className="border border-white/10 p-2">VI</th><th className="border border-white/10 p-2">VII</th><th className="border border-white/10 p-2">VIII</th></tr></thead>
                <tbody>
                  <tr><th className="border border-white/10 p-2 text-amber-200">Highest oxide</th><td className="border border-white/10 p-2">R₂O</td><td className="border border-white/10 p-2">RO</td><td className="border border-white/10 p-2">R₂O₃</td><td className="border border-white/10 p-2">RO₂</td><td className="border border-white/10 p-2">R₂O₅</td><td className="border border-white/10 p-2">RO₃</td><td className="border border-white/10 p-2">R₂O₇</td><td className="border border-white/10 p-2">RO₄ for selected members</td></tr>
                  <tr><th className="border border-white/10 p-2 text-cyan-200">Characteristic hydride band</th><td className="border border-white/10 p-2">—</td><td className="border border-white/10 p-2">—</td><td className="border border-white/10 p-2">—</td><td className="border border-white/10 p-2">RH₄</td><td className="border border-white/10 p-2">RH₃</td><td className="border border-white/10 p-2">RH₂</td><td className="border border-white/10 p-2">RH</td><td className="border border-white/10 p-2">—</td></tr>
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <GlossCard title="Prediction laboratory" accent="gold">
                <div className="overflow-x-auto">
                  <table className="min-w-[610px] w-full border-collapse text-xs">
                    <thead><tr className="text-amber-200"><th className="border-b border-white/10 p-2 text-left">Predicted placeholder</th><th className="border-b border-white/10 p-2 text-left">Discovered element</th><th className="border-b border-white/10 p-2 text-left">Year</th></tr></thead>
                    <tbody><tr><td className="border-b border-white/5 p-2">Eka-aluminium</td><td className="border-b border-white/5 p-2">Gallium</td><td className="border-b border-white/5 p-2">1875</td></tr><tr><td className="border-b border-white/5 p-2">Eka-boron</td><td className="border-b border-white/5 p-2">Scandium</td><td className="border-b border-white/5 p-2">1879</td></tr><tr><td className="border-b border-white/5 p-2">Eka-silicon</td><td className="border-b border-white/5 p-2">Germanium</td><td className="border-b border-white/5 p-2">1886</td></tr><tr><td className="p-2">Eka-manganese</td><td className="p-2">Technetium</td><td className="p-2">1937</td></tr></tbody>
                  </table>
                </div>
              </GlossCard>
              <GlossCard title="Eka-silicon versus germanium" accent="violet">
                <div className="overflow-x-auto">
                  <table className="min-w-[520px] w-full border-collapse text-xs"><thead><tr className="text-violet-200"><th className="border-b border-white/10 p-2 text-left">Property</th><th className="border-b border-white/10 p-2 text-left">Predicted E</th><th className="border-b border-white/10 p-2 text-left">Observed Ge</th></tr></thead><tbody><tr><td className="border-b border-white/5 p-2">Atomic mass</td><td className="border-b border-white/5 p-2">72</td><td className="border-b border-white/5 p-2">72.6</td></tr><tr><td className="border-b border-white/5 p-2">Density / g cm⁻³</td><td className="border-b border-white/5 p-2">5.5</td><td className="border-b border-white/5 p-2">5.36</td></tr><tr><td className="border-b border-white/5 p-2">Oxide</td><td className="border-b border-white/5 p-2">EO₂</td><td className="border-b border-white/5 p-2">GeO₂</td></tr><tr><td className="p-2">Chloride</td><td className="p-2">ECl₄</td><td className="p-2">GeCl₄</td></tr></tbody></table>
                </div>
              </GlossCard>
            </div>

            <GlossCard title="Atomic-weight corrections" accent="mint">
              <p>Valency and chemical analogies could expose a mistaken equivalent-weight interpretation. Beryllium had been treated as if its mass were <Formula>4.5 × 3 = 13.5</Formula>, which placed it badly. Recognizing divalency gave <Formula>4.5 × 2 = 9</Formula>, placing Be naturally between Li and B. Values associated with U, In, Au, and Pt were also reconsidered so that chemical behavior and formula stoichiometry became mutually consistent.</p>
            </GlossCard>

            <MeritDemerit
              merits={["Created a systematic framework for studying entire groups rather than isolated elements.", "Left deliberate gaps and predicted masses, densities, oxides, chlorides, and valencies with striking accuracy.", "Allowed chemical similarity to overrule a rigid mass sequence when evidence demanded it.", "Provided a method for correcting doubtful atomic weights."]}
              demerits={["Hydrogen had no unique position because it resembles both alkali metals and halogens.", "Isotopes require one chemical position despite different masses, contradicting mass as the primary coordinate.", "Mass-order anomalies include Ar/K, Co/Ni, Te/I, and the later Th/Pa ordering problem.", "Some dissimilar elements appeared together, such as alkali and coinage metals in the old Group I.", "Some related heavy metals, including Pt and Au in older layouts, were separated by the group architecture.", "The table supplied no fundamental explanation for why periodicity occurs."]}
            />
          </Section>

          <Section number="05" kicker="Moseley · 1913" title="Characteristic X-rays identify atomic number as the fundamental coordinate" accent="violet">
            <p className="max-w-[860px]">A beam of high-speed electrons struck a metal target and ejected inner-shell electrons. When higher electrons fell into the vacancies, the target emitted characteristic X-rays. Measuring corresponding spectral lines across many elements gave a linear relation:</p>
            <div className="rounded-2xl border border-violet-300/25 bg-violet-300/[0.07] p-4 text-center text-xl font-black text-violet-100">√ν = a(Z − b) &nbsp; or &nbsp; ν = a²(Z − b)²</div>
            <p className="max-w-[860px]">Here <strong className="text-white">ν</strong> is the characteristic X-ray frequency, <strong className="text-white">Z</strong> is atomic number, <strong className="text-white">b</strong> represents screening by inner electrons, and <strong className="text-white">a</strong> is constant for a chosen spectral series. The straight line showed that Z is not merely a serial label; it measures nuclear charge.</p>
            <MoseleyDiagram />
            <div className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-[#071522] p-3">
              <table className="min-w-[760px] w-full border-collapse text-sm"><thead><tr className="text-cyan-200"><th className="border-b border-white/10 p-2 text-left">Mass-order difficulty</th><th className="border-b border-white/10 p-2 text-left">Atomic-number resolution</th><th className="border-b border-white/10 p-2 text-left">Chemical consequence</th></tr></thead><tbody><tr><td className="border-b border-white/5 p-2">Ar appears heavier than K</td><td className="border-b border-white/5 p-2">Z<sub>Ar</sub> = 18 &lt; Z<sub>K</sub> = 19</td><td className="border-b border-white/5 p-2">Ar remains Group 18; K begins Group 1 of the next period.</td></tr><tr><td className="border-b border-white/5 p-2">Co/Ni mass order is irregular</td><td className="border-b border-white/5 p-2">Z<sub>Co</sub> = 27 &lt; Z<sub>Ni</sub> = 28</td><td className="border-b border-white/5 p-2">The chemical sequence is restored without adjustment.</td></tr><tr><td className="p-2">Te is heavier than I</td><td className="p-2">Z<sub>Te</sub> = 52 &lt; Z<sub>I</sub> = 53</td><td className="p-2">Te precedes I exactly as their Group 16 and Group 17 chemistry requires.</td></tr></tbody></table>
            </div>
          </Section>

          <Section number="06" kicker="Bohr / long form" title="Atomic number plus electronic structure explains the architecture" accent="cyan">
            <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.07] p-4 text-lg font-black text-cyan-100">Modern periodic law: the physical and chemical properties of elements are periodic functions of atomic number, Z.</div>
            <p className="max-w-[860px]">Periodicity occurs because similar valence-shell configurations recur as Z increases. The long form contains <strong className="text-white">7 periods</strong> and <strong className="text-white">18 groups</strong>. The 1–18 group system removes ambiguity among older A/B notations: old IA–VIIA largely map onto Groups 1, 2, and 13–17; noble gases form Group 18; transition columns occupy Groups 3–12.</p>

            <GlossCard title="Period capacity from available orbitals" accent="cyan">
              <div className="overflow-x-auto">
                <table className="min-w-[900px] w-full border-collapse text-sm">
                  <thead><tr className="text-cyan-200"><th className="border-b border-white/10 p-2 text-left">Period</th><th className="border-b border-white/10 p-2 text-left">Subshell sequence represented</th><th className="border-b border-white/10 p-2 text-left">Orbitals</th><th className="border-b border-white/10 p-2 text-left">Capacity</th><th className="border-b border-white/10 p-2 text-left">Observed length</th></tr></thead>
                  <tbody>
                    <tr><td className="border-b border-white/5 p-2">P₁</td><td className="border-b border-white/5 p-2">1s</td><td className="border-b border-white/5 p-2">1</td><td className="border-b border-white/5 p-2">1 × 2e⁻</td><td className="border-b border-white/5 p-2">2</td></tr>
                    <tr><td className="border-b border-white/5 p-2">P₂</td><td className="border-b border-white/5 p-2">2s, 2p</td><td className="border-b border-white/5 p-2">1 + 3 = 4</td><td className="border-b border-white/5 p-2">4 × 2e⁻</td><td className="border-b border-white/5 p-2">8</td></tr>
                    <tr><td className="border-b border-white/5 p-2">P₃</td><td className="border-b border-white/5 p-2">3s, 3p</td><td className="border-b border-white/5 p-2">1 + 3 = 4</td><td className="border-b border-white/5 p-2">4 × 2e⁻</td><td className="border-b border-white/5 p-2">8</td></tr>
                    <tr><td className="border-b border-white/5 p-2">P₄</td><td className="border-b border-white/5 p-2">4s, 3d, 4p</td><td className="border-b border-white/5 p-2">1 + 5 + 3 = 9</td><td className="border-b border-white/5 p-2">9 × 2e⁻</td><td className="border-b border-white/5 p-2">18</td></tr>
                    <tr><td className="border-b border-white/5 p-2">P₅</td><td className="border-b border-white/5 p-2">5s, 4d, 5p</td><td className="border-b border-white/5 p-2">1 + 5 + 3 = 9</td><td className="border-b border-white/5 p-2">9 × 2e⁻</td><td className="border-b border-white/5 p-2">18</td></tr>
                    <tr><td className="border-b border-white/5 p-2">P₆</td><td className="border-b border-white/5 p-2">6s, 4f, 5d, 6p</td><td className="border-b border-white/5 p-2">1 + 7 + 5 + 3 = 16</td><td className="border-b border-white/5 p-2">16 × 2e⁻</td><td className="border-b border-white/5 p-2">32</td></tr>
                    <tr><td className="p-2">P₇</td><td className="p-2">7s, 5f, 6d, 7p</td><td className="p-2">1 + 7 + 5 + 3 = 16</td><td className="p-2">16 × 2e⁻</td><td className="p-2">32</td></tr>
                  </tbody>
                </table>
              </div>
            </GlossCard>

            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
              <GlossCard title="s-block" accent="cyan"><p><Formula>ns¹–²</Formula></p><p>Groups 1–2. The differentiating electron enters the outer s subshell. Hydrogen and helium require separate chemical interpretation.</p></GlossCard>
              <GlossCard title="p-block" accent="gold"><p><Formula>ns²np¹–⁶</Formula></p><p>Groups 13–18. It spans metals, metalloids, non-metals, halogens, and noble gases.</p></GlossCard>
              <GlossCard title="d-block" accent="violet"><p><Formula>(n−1)d¹–¹⁰ ns⁰–²</Formula></p><p>Groups 3–12. Zn, Cd, and Hg belong to the d-block but are not transition elements under the incomplete-d definition.</p></GlossCard>
              <GlossCard title="f-block" accent="mint"><p><Formula>(n−2)f¹–¹⁴ (n−1)d⁰–¹ ns²</Formula></p><p>Inner transition series associated with Group 3: 4f lanthanoids and 5f actinoids.</p></GlossCard>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <GlossCard title="Hydrogen and helium" accent="gold">
                <p><strong className="text-white">H:</strong> <Formula>1s¹</Formula> supports placement above Group 1, yet H also gains one electron to form H⁻ and forms covalent bonds like non-metals. Its position remains chemically debatable.</p>
                <p><strong className="text-white">He:</strong> <Formula>1s²</Formula> is formally s-block by differentiating subshell, but its complete shell, monatomic state, and very low reactivity justify Group 18.</p>
              </GlossCard>
              <GlossCard title="Lu, Th, and Lr: series versus block" accent="violet">
                <p><strong className="text-white">Lu</strong> completes the lanthanoid chemical series but has <Formula>4f¹⁴5d¹6s²</Formula>. <strong className="text-white">Th</strong> is chemically actinoid though its ground state is dominated by <Formula>6d²7s²</Formula>. <strong className="text-white">Lr</strong> completes the actinoids; modern calculations favor a 7p¹ outer electron. Thus chemical-series membership, differentiating-electron block, and Group 3 placement are related but not identical questions.</p>
              </GlossCard>
            </div>

            <GlossCard title="Seaborg’s actinide hypothesis · 1944" accent="mint">
              <p>Elements 89–103 were relocated as a 5f inner-transition series below the lanthanoids rather than being forced into ordinary d-block columns. This explained recurring oxidation states, contraction, and the chemistry of transuranium elements.</p>
              <div className="overflow-x-auto rounded-xl border border-emerald-300/20 bg-[#071522] p-3">
                <svg viewBox="0 0 920 220" className="min-w-[780px]" role="img" aria-labelledby="seaborg-title seaborg-desc">
                  <title id="seaborg-title">Seaborg actinide relocation</title><desc id="seaborg-desc">The 4f and 5f series are shown as parallel inner rows connected to periods 6 and 7.</desc>
                  <rect x="40" y="30" width="840" height="54" rx="14" fill="#5DD6F20D" stroke={palette.cyan} />
                  <text x="65" y="63" fill="#DDF8FF" fontWeight="800">Period 6 main body</text><text x="265" y="63" fill={palette.cyan}>Cs · Ba</text><text x="420" y="63" fill="#94A3B8">→ 4f insertion →</text><text x="610" y="63" fill={palette.violet}>Hf … Rn</text>
                  <rect x="40" y="106" width="840" height="54" rx="14" fill="#7CE6BE0D" stroke={palette.mint} />
                  <text x="65" y="139" fill="#E5FFF7" fontWeight="800">Period 7 main body</text><text x="265" y="139" fill={palette.mint}>Fr · Ra</text><text x="420" y="139" fill="#94A3B8">→ 5f insertion →</text><text x="610" y="139" fill={palette.gold}>Rf … Og</text>
                  <path d="M338 84 C338 103 338 103 338 106" stroke={palette.cyan} strokeWidth="3" strokeDasharray="5 5" />
                  <text x="460" y="198" textAnchor="middle" fill="#C8D6DF" fontSize="14">Separate display preserves a compact 18-column body; it does not imply weak chemical membership.</text>
                </svg>
              </div>
            </GlossCard>

            <GlossCard title="Systematic temporary nomenclature for Z > 100" accent="gold">
              <div className="overflow-x-auto">
                <table className="min-w-[880px] w-full border-collapse text-sm"><thead><tr className="text-amber-200"><th className="border-b border-white/10 p-2 text-left">Digit</th>{[0,1,2,3,4,5,6,7,8,9].map((digit) => <th key={digit} className="border-b border-white/10 p-2">{digit}</th>)}</tr></thead><tbody><tr><th className="border-b border-white/5 p-2 text-left text-cyan-200">Root</th>{["nil","un","bi","tri","quad","pent","hex","sept","oct","enn"].map((root) => <td key={root} className="border-b border-white/5 p-2 text-center">{root}</td>)}</tr><tr><th className="p-2 text-left text-violet-200">Symbol letter</th>{["n","u","b","t","q","p","h","s","o","e"].map((letter) => <td key={letter} className="p-2 text-center">{letter}</td>)}</tr></tbody></table>
              </div>
              <p>Concatenate digit roots in order, then add <strong className="text-white">-ium</strong>; the symbol uses the initial letters with normal capitalization. These are systematic placeholders, not replacements for approved permanent names.</p>
              <div className="overflow-x-auto"><table className="min-w-[760px] w-full border-collapse text-sm"><thead><tr className="text-amber-200"><th className="border-b border-white/10 p-2 text-left">Z</th><th className="border-b border-white/10 p-2 text-left">Generated name</th><th className="border-b border-white/10 p-2 text-left">Generated symbol</th><th className="border-b border-white/10 p-2 text-left">Permanent name</th></tr></thead><tbody><tr><td className="border-b border-white/5 p-2">101</td><td className="border-b border-white/5 p-2">Unnilunium</td><td className="border-b border-white/5 p-2">Unu</td><td className="border-b border-white/5 p-2">Mendelevium</td></tr><tr><td className="border-b border-white/5 p-2">114</td><td className="border-b border-white/5 p-2">Ununquadium</td><td className="border-b border-white/5 p-2">Uuq</td><td className="border-b border-white/5 p-2">Flerovium</td></tr><tr><td className="p-2">118</td><td className="p-2">Ununoctium</td><td className="p-2">Uuo</td><td className="p-2">Oganesson</td></tr></tbody></table></div>
            </GlossCard>

            <h3 className="text-2xl font-black text-cyan-200">Live 118-element long form</h3>
            <PeriodicTable />

            <MeritDemerit
              merits={["Uses atomic number, a fundamental nuclear property, so isotopes occupy one chemically correct position.", "Explains periodicity through recurrence of outer-shell valence configurations.", "Separates s, p, d, and f regions and clarifies main-group, transition, and inner-transition chemistry.", "Naturally resolves the Ar/K, Co/Ni, and Te/I anomalies.", "Provides the structural basis for diagonal relationships, transition series, oxidation-state patterns, and periodic trends."]}
              demerits={["Hydrogen still has no completely satisfactory single-group identity.", "The f-block is displayed outside the main body for compactness, obscuring its continuous insertion into periods 6 and 7.", "A simple Aufbau sketch does not reproduce every exact ground-state configuration; Cr, Cu, and Pd are standard examples.", "Group 3 boundaries and the placement of La/Ac versus Lu/Lr require conventions beyond a single visual rule."]}
            />
          </Section>

          <Section number="07" kicker="Solved workshop" title="Ten reasoning problems that connect history, arithmetic, and electronic structure" accent="mint">
            <div className="grid gap-4 lg:grid-cols-2">
              {[
                ["1 · Verify Ca–Sr–Ba", <><p>Mean of terminal masses: <Formula>(40 + 137)/2 = 88.5</Formula>.</p><p>Observed Sr ≈ 88, and all three form alkaline-earth M²⁺ chemistry. Therefore the triad passes both the numerical and chemical tests.</p></>],
                ["2 · Reject a false triad", <><p>Suppose three masses accidentally satisfy an arithmetic mean. That is not enough.</p><p>Check valency, oxide type, hydride type, and reactivity. If the chemical family differs, the set is a numerical coincidence, not a Döbereiner triad.</p></>],
                ["3 · Test Newlands’ octave", <><p>Starting from Li in the early mass sequence, the eighth position reaches Na, which resembles Li in valency +1, oxide type, and high reactivity.</p><p>The recurrence is meaningful for light elements but cannot be forced indefinitely.</p></>],
                ["4 · Calculate atomic volume", <><p>For Ga, using molar mass 69.7 g mol⁻¹ and density 5.91 g cm⁻³:</p><p><Formula>Vₘ = 69.7/5.91 ≈ 11.8 cm³ mol⁻¹</Formula>.</p><p>This places Ga well below alkali-metal peaks.</p></>],
                ["5 · Resolve Ar/K", <><p>Mass order alone suggests K before Ar because K is slightly lighter.</p><p>Atomic numbers give <Formula>18 &lt; 19</Formula>, so Ar closes period 3 and K opens period 4. Chemical placement is restored.</p></>],
                ["6 · Configuration [Ne]3s²3p⁵", <><p>Largest n = 3, so period = 3. A p⁵ valence shell has seven valence electrons.</p><p>Group = 17, block = p, element = Cl, Z = 17.</p></>],
                ["7 · Configuration [Ar]3d⁶4s²", <><p>Largest n = 4, so period = 4. For a d-block atom, group number is commonly <Formula>d + s = 6 + 2 = 8</Formula>.</p><p>The element is Fe, Z = 26.</p></>],
                ["8 · Derive period-4 length", <><p>Period 4 spans 4s, 3d, and 4p: <Formula>1 + 5 + 3 = 9 orbitals</Formula>.</p><p>At two electrons per orbital, capacity = <Formula>9 × 2 = 18</Formula>.</p></>],
                ["9 · Find Z from period 3, group 16", <><p>Period 3 sequence is Na(11), Mg(12), Al(13), Si(14), P(15), S(16), Cl(17), Ar(18).</p><p>Group 16 therefore gives sulfur, <Formula>Z = 16</Formula>.</p></>],
                ["10 · Name hypothetical Z = 120", <><p>Digits 1–2–0 give un + bi + nil + ium.</p><p>Temporary systematic name = <strong className="text-white">unbinilium</strong>; symbol = <strong className="text-white">Ubn</strong>.</p></>],
              ].map(([title, content]) => <GlossCard key={String(title)} title={String(title)} accent={String(title).startsWith("1") || String(title).startsWith("6") ? "cyan" : String(title).startsWith("2") || String(title).startsWith("7") ? "gold" : String(title).startsWith("3") || String(title).startsWith("8") ? "violet" : "mint"}>{content}</GlossCard>)}
            </div>

            <h3 className="text-2xl font-black text-rose-200">Misconception clinic</h3>
            <div className="overflow-x-auto rounded-2xl border border-rose-300/20 bg-[#071522] p-3">
              <table className="min-w-[980px] w-full border-collapse text-sm">
                <thead><tr className="text-rose-200"><th className="border-b border-white/10 p-2 text-left">False claim</th><th className="border-b border-white/10 p-2 text-left">Scientific correction</th></tr></thead>
                <tbody>
                  {[
                    ["Any three masses with a middle mean form a triad.", "Chemical similarity is compulsory; arithmetic alone is insufficient."],
                    ["Newlands proved that every eighth element is always similar.", "The rule worked mainly among lighter elements and failed as the list expanded."],
                    ["Meyer’s peaks are transition metals.", "Major peaks are alkali metals; transition metals lie near broad minima."],
                    ["Mendeleev followed atomic weight without deviation.", "He deliberately privileged chemical similarity and corrected doubtful masses."],
                    ["Isotopes need separate boxes because their masses differ.", "They share one Z and essentially the same electron structure, so they occupy one position."],
                    ["Atomic number is merely the row serial number.", "Moseley linked it to nuclear charge through characteristic X-ray frequencies."],
                    ["All d-block elements are transition elements.", "Zn, Cd, and Hg are d-block but lack an incomplete d subshell in their common atomic/ionic states."],
                    ["Helium belongs chemically in Group 2 because it is 1s².", "Its complete shell and inert chemistry justify Group 18, while its differentiating subshell remains s."],
                    ["The f-block is chemically detached from periods 6 and 7.", "It is drawn below only to preserve width; it is inserted continuously after the s-block."],
                    ["Every electron configuration follows the simplest filling order exactly.", "Subshell-energy differences produce configurations such as Cr 3d⁵4s¹, Cu 3d¹⁰4s¹, and Pd 4d¹⁰5s⁰."],
                    ["Hydrogen has a completely settled position.", "Its 1s¹ count supports Group 1, but H⁻ formation and non-metal chemistry preserve ambiguity."],
                    ["Temporary systematic names are the current names of elements 114 and 118.", "Flerovium and Oganesson are permanent names; ununquadium and ununoctium illustrate the temporary construction rule."],
                  ].map(([claim, correction]) => <tr key={claim}><td className="border-b border-white/5 p-2 text-rose-100">{claim}</td><td className="border-b border-white/5 p-2 text-slate-200">{correction}</td></tr>)}
                </tbody>
              </table>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
