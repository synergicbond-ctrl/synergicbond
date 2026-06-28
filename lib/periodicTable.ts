// Periodic table data: [Z, symbol, name, atomic mass, category, group(x), period-row(y)]
// Lanthanides row y=9, Actinides row y=10 (rendered below the main grid).

export type Cat =
  | "nm" | "ng" | "am" | "ae" | "tm" | "ptm" | "ml" | "hl" | "ln" | "ac";

export const CATS: Record<Cat, { label: string; color: string }> = {
  nm:  { label: "Nonmetal",            color: "#00F5D4" },
  ng:  { label: "Noble gas",           color: "#9B5DE5" },
  am:  { label: "Alkali metal",        color: "#F472B6" },
  ae:  { label: "Alkaline earth",      color: "#FB923C" },
  tm:  { label: "Transition metal",    color: "#34D399" },
  ptm: { label: "Post-transition",     color: "#818CF8" },
  ml:  { label: "Metalloid",           color: "#FFD700" },
  hl:  { label: "Halogen",             color: "#00BBF9" },
  ln:  { label: "Lanthanide",          color: "#C084FC" },
  ac:  { label: "Actinide",            color: "#F9A8D4" },
};

export type Element = { z: number; sym: string; name: string; mass: number; cat: Cat; x: number; y: number };

export const ELEMENTS: Element[] = [
  { z: 1, sym: "H", name: "Hydrogen", mass: 1.008, cat: "nm", x: 1, y: 1 },
  { z: 2, sym: "He", name: "Helium", mass: 4.003, cat: "ng", x: 18, y: 1 },
  { z: 3, sym: "Li", name: "Lithium", mass: 6.94, cat: "am", x: 1, y: 2 },
  { z: 4, sym: "Be", name: "Beryllium", mass: 9.012, cat: "ae", x: 2, y: 2 },
  { z: 5, sym: "B", name: "Boron", mass: 10.81, cat: "ml", x: 13, y: 2 },
  { z: 6, sym: "C", name: "Carbon", mass: 12.011, cat: "nm", x: 14, y: 2 },
  { z: 7, sym: "N", name: "Nitrogen", mass: 14.007, cat: "nm", x: 15, y: 2 },
  { z: 8, sym: "O", name: "Oxygen", mass: 15.999, cat: "nm", x: 16, y: 2 },
  { z: 9, sym: "F", name: "Fluorine", mass: 18.998, cat: "hl", x: 17, y: 2 },
  { z: 10, sym: "Ne", name: "Neon", mass: 20.18, cat: "ng", x: 18, y: 2 },
  { z: 11, sym: "Na", name: "Sodium", mass: 22.99, cat: "am", x: 1, y: 3 },
  { z: 12, sym: "Mg", name: "Magnesium", mass: 24.305, cat: "ae", x: 2, y: 3 },
  { z: 13, sym: "Al", name: "Aluminium", mass: 26.982, cat: "ptm", x: 13, y: 3 },
  { z: 14, sym: "Si", name: "Silicon", mass: 28.085, cat: "ml", x: 14, y: 3 },
  { z: 15, sym: "P", name: "Phosphorus", mass: 30.974, cat: "nm", x: 15, y: 3 },
  { z: 16, sym: "S", name: "Sulfur", mass: 32.06, cat: "nm", x: 16, y: 3 },
  { z: 17, sym: "Cl", name: "Chlorine", mass: 35.45, cat: "hl", x: 17, y: 3 },
  { z: 18, sym: "Ar", name: "Argon", mass: 39.948, cat: "ng", x: 18, y: 3 },
  { z: 19, sym: "K", name: "Potassium", mass: 39.098, cat: "am", x: 1, y: 4 },
  { z: 20, sym: "Ca", name: "Calcium", mass: 40.078, cat: "ae", x: 2, y: 4 },
  { z: 21, sym: "Sc", name: "Scandium", mass: 44.956, cat: "tm", x: 3, y: 4 },
  { z: 22, sym: "Ti", name: "Titanium", mass: 47.867, cat: "tm", x: 4, y: 4 },
  { z: 23, sym: "V", name: "Vanadium", mass: 50.942, cat: "tm", x: 5, y: 4 },
  { z: 24, sym: "Cr", name: "Chromium", mass: 51.996, cat: "tm", x: 6, y: 4 },
  { z: 25, sym: "Mn", name: "Manganese", mass: 54.938, cat: "tm", x: 7, y: 4 },
  { z: 26, sym: "Fe", name: "Iron", mass: 55.845, cat: "tm", x: 8, y: 4 },
  { z: 27, sym: "Co", name: "Cobalt", mass: 58.933, cat: "tm", x: 9, y: 4 },
  { z: 28, sym: "Ni", name: "Nickel", mass: 58.693, cat: "tm", x: 10, y: 4 },
  { z: 29, sym: "Cu", name: "Copper", mass: 63.546, cat: "tm", x: 11, y: 4 },
  { z: 30, sym: "Zn", name: "Zinc", mass: 65.38, cat: "tm", x: 12, y: 4 },
  { z: 31, sym: "Ga", name: "Gallium", mass: 69.723, cat: "ptm", x: 13, y: 4 },
  { z: 32, sym: "Ge", name: "Germanium", mass: 72.63, cat: "ml", x: 14, y: 4 },
  { z: 33, sym: "As", name: "Arsenic", mass: 74.922, cat: "ml", x: 15, y: 4 },
  { z: 34, sym: "Se", name: "Selenium", mass: 78.971, cat: "nm", x: 16, y: 4 },
  { z: 35, sym: "Br", name: "Bromine", mass: 79.904, cat: "hl", x: 17, y: 4 },
  { z: 36, sym: "Kr", name: "Krypton", mass: 83.798, cat: "ng", x: 18, y: 4 },
  { z: 37, sym: "Rb", name: "Rubidium", mass: 85.468, cat: "am", x: 1, y: 5 },
  { z: 38, sym: "Sr", name: "Strontium", mass: 87.62, cat: "ae", x: 2, y: 5 },
  { z: 39, sym: "Y", name: "Yttrium", mass: 88.906, cat: "tm", x: 3, y: 5 },
  { z: 40, sym: "Zr", name: "Zirconium", mass: 91.224, cat: "tm", x: 4, y: 5 },
  { z: 41, sym: "Nb", name: "Niobium", mass: 92.906, cat: "tm", x: 5, y: 5 },
  { z: 42, sym: "Mo", name: "Molybdenum", mass: 95.95, cat: "tm", x: 6, y: 5 },
  { z: 43, sym: "Tc", name: "Technetium", mass: 98, cat: "tm", x: 7, y: 5 },
  { z: 44, sym: "Ru", name: "Ruthenium", mass: 101.07, cat: "tm", x: 8, y: 5 },
  { z: 45, sym: "Rh", name: "Rhodium", mass: 102.906, cat: "tm", x: 9, y: 5 },
  { z: 46, sym: "Pd", name: "Palladium", mass: 106.42, cat: "tm", x: 10, y: 5 },
  { z: 47, sym: "Ag", name: "Silver", mass: 107.868, cat: "tm", x: 11, y: 5 },
  { z: 48, sym: "Cd", name: "Cadmium", mass: 112.414, cat: "tm", x: 12, y: 5 },
  { z: 49, sym: "In", name: "Indium", mass: 114.818, cat: "ptm", x: 13, y: 5 },
  { z: 50, sym: "Sn", name: "Tin", mass: 118.71, cat: "ptm", x: 14, y: 5 },
  { z: 51, sym: "Sb", name: "Antimony", mass: 121.76, cat: "ml", x: 15, y: 5 },
  { z: 52, sym: "Te", name: "Tellurium", mass: 127.6, cat: "ml", x: 16, y: 5 },
  { z: 53, sym: "I", name: "Iodine", mass: 126.904, cat: "hl", x: 17, y: 5 },
  { z: 54, sym: "Xe", name: "Xenon", mass: 131.293, cat: "ng", x: 18, y: 5 },
  { z: 55, sym: "Cs", name: "Caesium", mass: 132.905, cat: "am", x: 1, y: 6 },
  { z: 56, sym: "Ba", name: "Barium", mass: 137.327, cat: "ae", x: 2, y: 6 },
  { z: 57, sym: "La", name: "Lanthanum", mass: 138.905, cat: "ln", x: 3, y: 9 },
  { z: 58, sym: "Ce", name: "Cerium", mass: 140.116, cat: "ln", x: 4, y: 9 },
  { z: 59, sym: "Pr", name: "Praseodymium", mass: 140.908, cat: "ln", x: 5, y: 9 },
  { z: 60, sym: "Nd", name: "Neodymium", mass: 144.242, cat: "ln", x: 6, y: 9 },
  { z: 61, sym: "Pm", name: "Promethium", mass: 145, cat: "ln", x: 7, y: 9 },
  { z: 62, sym: "Sm", name: "Samarium", mass: 150.36, cat: "ln", x: 8, y: 9 },
  { z: 63, sym: "Eu", name: "Europium", mass: 151.964, cat: "ln", x: 9, y: 9 },
  { z: 64, sym: "Gd", name: "Gadolinium", mass: 157.25, cat: "ln", x: 10, y: 9 },
  { z: 65, sym: "Tb", name: "Terbium", mass: 158.925, cat: "ln", x: 11, y: 9 },
  { z: 66, sym: "Dy", name: "Dysprosium", mass: 162.5, cat: "ln", x: 12, y: 9 },
  { z: 67, sym: "Ho", name: "Holmium", mass: 164.93, cat: "ln", x: 13, y: 9 },
  { z: 68, sym: "Er", name: "Erbium", mass: 167.259, cat: "ln", x: 14, y: 9 },
  { z: 69, sym: "Tm", name: "Thulium", mass: 168.934, cat: "ln", x: 15, y: 9 },
  { z: 70, sym: "Yb", name: "Ytterbium", mass: 173.045, cat: "ln", x: 16, y: 9 },
  { z: 71, sym: "Lu", name: "Lutetium", mass: 174.967, cat: "ln", x: 17, y: 9 },
  { z: 72, sym: "Hf", name: "Hafnium", mass: 178.49, cat: "tm", x: 4, y: 6 },
  { z: 73, sym: "Ta", name: "Tantalum", mass: 180.948, cat: "tm", x: 5, y: 6 },
  { z: 74, sym: "W", name: "Tungsten", mass: 183.84, cat: "tm", x: 6, y: 6 },
  { z: 75, sym: "Re", name: "Rhenium", mass: 186.207, cat: "tm", x: 7, y: 6 },
  { z: 76, sym: "Os", name: "Osmium", mass: 190.23, cat: "tm", x: 8, y: 6 },
  { z: 77, sym: "Ir", name: "Iridium", mass: 192.217, cat: "tm", x: 9, y: 6 },
  { z: 78, sym: "Pt", name: "Platinum", mass: 195.084, cat: "tm", x: 10, y: 6 },
  { z: 79, sym: "Au", name: "Gold", mass: 196.967, cat: "tm", x: 11, y: 6 },
  { z: 80, sym: "Hg", name: "Mercury", mass: 200.592, cat: "tm", x: 12, y: 6 },
  { z: 81, sym: "Tl", name: "Thallium", mass: 204.38, cat: "ptm", x: 13, y: 6 },
  { z: 82, sym: "Pb", name: "Lead", mass: 207.2, cat: "ptm", x: 14, y: 6 },
  { z: 83, sym: "Bi", name: "Bismuth", mass: 208.98, cat: "ptm", x: 15, y: 6 },
  { z: 84, sym: "Po", name: "Polonium", mass: 209, cat: "ptm", x: 16, y: 6 },
  { z: 85, sym: "At", name: "Astatine", mass: 210, cat: "hl", x: 17, y: 6 },
  { z: 86, sym: "Rn", name: "Radon", mass: 222, cat: "ng", x: 18, y: 6 },
  { z: 87, sym: "Fr", name: "Francium", mass: 223, cat: "am", x: 1, y: 7 },
  { z: 88, sym: "Ra", name: "Radium", mass: 226, cat: "ae", x: 2, y: 7 },
  { z: 89, sym: "Ac", name: "Actinium", mass: 227, cat: "ac", x: 3, y: 10 },
  { z: 90, sym: "Th", name: "Thorium", mass: 232.038, cat: "ac", x: 4, y: 10 },
  { z: 91, sym: "Pa", name: "Protactinium", mass: 231.036, cat: "ac", x: 5, y: 10 },
  { z: 92, sym: "U", name: "Uranium", mass: 238.029, cat: "ac", x: 6, y: 10 },
  { z: 93, sym: "Np", name: "Neptunium", mass: 237, cat: "ac", x: 7, y: 10 },
  { z: 94, sym: "Pu", name: "Plutonium", mass: 244, cat: "ac", x: 8, y: 10 },
  { z: 95, sym: "Am", name: "Americium", mass: 243, cat: "ac", x: 9, y: 10 },
  { z: 96, sym: "Cm", name: "Curium", mass: 247, cat: "ac", x: 10, y: 10 },
  { z: 97, sym: "Bk", name: "Berkelium", mass: 247, cat: "ac", x: 11, y: 10 },
  { z: 98, sym: "Cf", name: "Californium", mass: 251, cat: "ac", x: 12, y: 10 },
  { z: 99, sym: "Es", name: "Einsteinium", mass: 252, cat: "ac", x: 13, y: 10 },
  { z: 100, sym: "Fm", name: "Fermium", mass: 257, cat: "ac", x: 14, y: 10 },
  { z: 101, sym: "Md", name: "Mendelevium", mass: 258, cat: "ac", x: 15, y: 10 },
  { z: 102, sym: "No", name: "Nobelium", mass: 259, cat: "ac", x: 16, y: 10 },
  { z: 103, sym: "Lr", name: "Lawrencium", mass: 262, cat: "ac", x: 17, y: 10 },
  { z: 104, sym: "Rf", name: "Rutherfordium", mass: 267, cat: "tm", x: 4, y: 7 },
  { z: 105, sym: "Db", name: "Dubnium", mass: 268, cat: "tm", x: 5, y: 7 },
  { z: 106, sym: "Sg", name: "Seaborgium", mass: 269, cat: "tm", x: 6, y: 7 },
  { z: 107, sym: "Bh", name: "Bohrium", mass: 270, cat: "tm", x: 7, y: 7 },
  { z: 108, sym: "Hs", name: "Hassium", mass: 269, cat: "tm", x: 8, y: 7 },
  { z: 109, sym: "Mt", name: "Meitnerium", mass: 278, cat: "tm", x: 9, y: 7 },
  { z: 110, sym: "Ds", name: "Darmstadtium", mass: 281, cat: "tm", x: 10, y: 7 },
  { z: 111, sym: "Rg", name: "Roentgenium", mass: 282, cat: "tm", x: 11, y: 7 },
  { z: 112, sym: "Cn", name: "Copernicium", mass: 285, cat: "tm", x: 12, y: 7 },
  { z: 113, sym: "Nh", name: "Nihonium", mass: 286, cat: "ptm", x: 13, y: 7 },
  { z: 114, sym: "Fl", name: "Flerovium", mass: 289, cat: "ptm", x: 14, y: 7 },
  { z: 115, sym: "Mc", name: "Moscovium", mass: 290, cat: "ptm", x: 15, y: 7 },
  { z: 116, sym: "Lv", name: "Livermorium", mass: 293, cat: "ptm", x: 16, y: 7 },
  { z: 117, sym: "Ts", name: "Tennessine", mass: 294, cat: "hl", x: 17, y: 7 },
  { z: 118, sym: "Og", name: "Oganesson", mass: 294, cat: "ng", x: 18, y: 7 },
];

// Block from position
export function blockOf(e: Element): string {
  if (e.cat === "ln" || e.cat === "ac") return "f-block";
  if (e.x === 1 || e.x === 2) return "s-block";
  if (e.x >= 13) return "p-block";
  return "d-block";
}

// ── Electron configuration (computed from Z, aufbau + known exceptions) ──
const FILL: [string, number][] = [
  ["1s", 2], ["2s", 2], ["2p", 6], ["3s", 2], ["3p", 6], ["4s", 2], ["3d", 10],
  ["4p", 6], ["5s", 2], ["4d", 10], ["5p", 6], ["6s", 2], ["4f", 14], ["5d", 10],
  ["6p", 6], ["7s", 2], ["5f", 14], ["6d", 10], ["7p", 6],
];
const NOBLE: [number, string][] = [[86, "Rn"], [54, "Xe"], [36, "Kr"], [18, "Ar"], [10, "Ne"], [2, "He"]];
// Ground-state anomalies (exam-relevant)
const EXC: Record<number, string> = {
  24: "[Ar] 3d⁵ 4s¹", 29: "[Ar] 3d¹⁰ 4s¹",
  41: "[Kr] 4d⁴ 5s¹", 42: "[Kr] 4d⁵ 5s¹", 44: "[Kr] 4d⁷ 5s¹", 45: "[Kr] 4d⁸ 5s¹",
  46: "[Kr] 4d¹⁰", 47: "[Kr] 4d¹⁰ 5s¹",
  57: "[Xe] 5d¹ 6s²", 58: "[Xe] 4f¹ 5d¹ 6s²", 64: "[Xe] 4f⁷ 5d¹ 6s²",
  78: "[Xe] 4f¹⁴ 5d⁹ 6s¹", 79: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
  89: "[Rn] 6d¹ 7s²", 90: "[Rn] 6d² 7s²", 91: "[Rn] 5f² 6d¹ 7s²",
  92: "[Rn] 5f³ 6d¹ 7s²", 93: "[Rn] 5f⁴ 6d¹ 7s²", 96: "[Rn] 5f⁷ 6d¹ 7s²",
};
function sup(n: number) {
  return String(n).replace(/[0-9]/g, (d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[+d]);
}
export function electronConfig(z: number): string {
  if (EXC[z]) return EXC[z];
  let rem = z;
  const parts: { sub: string; n: number; l: number; e: number }[] = [];
  for (const [sub, cap] of FILL) {
    if (rem <= 0) break;
    const e = Math.min(cap, rem);
    parts.push({ sub, n: +sub[0], l: "spdf".indexOf(sub[1]), e });
    rem -= e;
  }
  // noble-gas shorthand: strip the core that sums exactly to a noble gas Z
  const noble = NOBLE.find(([nz]) => nz < z);
  let core = "";
  let valence = parts;
  if (noble) {
    let acc = 0, idx = 0;
    for (; idx < parts.length; idx++) { acc += parts[idx].e; if (acc === noble[0]) { idx++; break; } }
    if (acc >= noble[0]) { core = `[${noble[1]}] `; valence = parts.slice(idx); }
  }
  valence = [...valence].sort((a, b) => a.n - b.n || a.l - b.l);
  return core + valence.map((p) => p.sub + sup(p.e)).join(" ");
}

// ── Oxidation states + MP/BP (°C) for exam-relevant elements (by symbol) ──
export const DETAIL: Record<string, { ox: string; mp: string; bp: string }> = {
  H: { ox: "+1, −1", mp: "−259", bp: "−253" }, He: { ox: "0", mp: "—", bp: "−269" },
  Li: { ox: "+1", mp: "181", bp: "1347" }, Be: { ox: "+2", mp: "1287", bp: "2470" },
  B: { ox: "+3", mp: "2076", bp: "3927" }, C: { ox: "+4, +2, −4", mp: "3550 (subl.)", bp: "4027" },
  N: { ox: "−3 … +5", mp: "−210", bp: "−196" }, O: { ox: "−2", mp: "−218", bp: "−183" },
  F: { ox: "−1", mp: "−220", bp: "−188" }, Ne: { ox: "0", mp: "−249", bp: "−246" },
  Na: { ox: "+1", mp: "98", bp: "883" }, Mg: { ox: "+2", mp: "650", bp: "1090" },
  Al: { ox: "+3", mp: "660", bp: "2467" }, Si: { ox: "+4, −4", mp: "1414", bp: "3265" },
  P: { ox: "+3, +5, −3", mp: "44", bp: "280" }, S: { ox: "−2, +4, +6", mp: "115", bp: "445" },
  Cl: { ox: "−1 … +7", mp: "−101", bp: "−34" }, Ar: { ox: "0", mp: "−189", bp: "−186" },
  K: { ox: "+1", mp: "64", bp: "759" }, Ca: { ox: "+2", mp: "842", bp: "1484" },
  Sc: { ox: "+3", mp: "1541", bp: "2836" }, Ti: { ox: "+4, +3", mp: "1668", bp: "3287" },
  V: { ox: "+5, +4, +3, +2", mp: "1910", bp: "3407" }, Cr: { ox: "+6, +3, +2", mp: "1907", bp: "2671" },
  Mn: { ox: "+7, +4, +2", mp: "1246", bp: "2061" }, Fe: { ox: "+3, +2", mp: "1538", bp: "2861" },
  Co: { ox: "+3, +2", mp: "1495", bp: "2927" }, Ni: { ox: "+2", mp: "1455", bp: "2913" },
  Cu: { ox: "+2, +1", mp: "1085", bp: "2562" }, Zn: { ox: "+2", mp: "420", bp: "907" },
  Ga: { ox: "+3", mp: "30", bp: "2204" }, Ge: { ox: "+4", mp: "938", bp: "2833" },
  As: { ox: "+3, +5, −3", mp: "817 (subl.)", bp: "614" }, Se: { ox: "−2, +4, +6", mp: "221", bp: "685" },
  Br: { ox: "−1, +1, +5", mp: "−7", bp: "59" }, Kr: { ox: "0", mp: "−157", bp: "−153" },
  Rb: { ox: "+1", mp: "39", bp: "688" }, Sr: { ox: "+2", mp: "777", bp: "1377" },
  Ag: { ox: "+1", mp: "962", bp: "2162" }, Cd: { ox: "+2", mp: "321", bp: "767" },
  Sn: { ox: "+4, +2", mp: "232", bp: "2602" }, I: { ox: "−1, +1, +5, +7", mp: "114", bp: "184" },
  Xe: { ox: "0, +2 … +8", mp: "−112", bp: "−108" }, Cs: { ox: "+1", mp: "28.5", bp: "671" },
  Ba: { ox: "+2", mp: "727", bp: "1845" }, Pt: { ox: "+4, +2", mp: "1768", bp: "3825" },
  Au: { ox: "+3, +1", mp: "1064", bp: "2856" }, Hg: { ox: "+2, +1", mp: "−39", bp: "357" },
  Pb: { ox: "+4, +2", mp: "327", bp: "1749" }, W: { ox: "+6", mp: "3422", bp: "5555" },
  U: { ox: "+6, +4, +3", mp: "1132", bp: "4131" },
};
