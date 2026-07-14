import React, { type ReactNode } from "react";

type TimelineItem = { year: string; scientist: string; idea: string };
type TableColumn<T> = { key: keyof T; label: string; align?: "left" | "center" | "right" };
type ElementCell = { z: number; symbol: string; period: number; group: number; block: "s" | "p" | "d" | "f" };

const timeline: TimelineItem[] = [
  { year: "1789", scientist: "A. Lavoisier", idea: "First broad division into metals and non-metals" },
  { year: "c. 1815", scientist: "W. Prout", idea: "Atomic weights proposed as integral multiples of hydrogen" },
  { year: "1817–1829", scientist: "J. W. Döbereiner", idea: "Triads of chemically related elements" },
  { year: "1850", scientist: "M. Pettenkofer", idea: "Integral-multiple differences in atomic weights" },
  { year: "1862", scientist: "A. B. de Chancourtois", idea: "Telluric screw: the first explicit geometric periodic arrangement" },
  { year: "1864–1866", scientist: "J. Newlands", idea: "Law of Octaves: every eighth element showed resemblance" },
  { year: "1869", scientist: "L. Meyer", idea: "Atomic-volume curve demonstrated physical periodicity" },
  { year: "1869–1871", scientist: "D. Mendeleev", idea: "Predictive atomic-weight table with deliberate gaps" },
  { year: "1913", scientist: "H. Moseley", idea: "Atomic number established as the true ordering principle" },
  { year: "20th century", scientist: "Long-form development", idea: "Modern 7-period, 18-group table organised into s, p, d and f blocks" },
];

const triads = [
  { title: "Alkali-metal triad", a: "Li 7", b: "Na 23", c: "K 39", calc: "(7 + 39) / 2 = 23" },
  { title: "Alkaline-earth triad", a: "Ca 40", b: "Sr 88", c: "Ba 137", calc: "(40 + 137) / 2 = 88.5 ≈ 88" },
  { title: "Halogen triad", a: "Cl 35.5", b: "Br 80", c: "I 127", calc: "(35.5 + 127) / 2 = 81.25 ≈ 80" },
  { title: "Chalcogen triad", a: "S 32", b: "Se 79", c: "Te 128", calc: "(32 + 128) / 2 = 80 ≈ 79" },
];

const mendeleevCharacteristics = [
  { feature: "Ordering basis", detail: "Increasing atomic weight" },
  { feature: "Elements known", detail: "About 63; noble gases had not yet been discovered" },
  { feature: "Horizontal rows", detail: "Seven series" },
  { feature: "Vertical columns", detail: "Eight groups, I to VIII" },
  { feature: "Sub-groups", detail: "Groups I–VII divided into A (normal) and B (transition) sub-groups" },
  { feature: "Group VIII", detail: "Nine elements arranged as Fe–Co–Ni, Ru–Rh–Pd and Os–Ir–Pt triads" },
  { feature: "Same-group principle", detail: "Similar properties and comparable highest valency toward oxygen" },
];

const predictions = [
  { predicted: "Eka-boron", discovered: "Scandium", symbol: "Sc", year: "1879" },
  { predicted: "Eka-aluminium", discovered: "Gallium", symbol: "Ga", year: "1875" },
  { predicted: "Eka-silicon", discovered: "Germanium", symbol: "Ge", year: "1886" },
  { predicted: "Eka-manganese", discovered: "Technetium", symbol: "Tc", year: "1937" },
];

const ekaSilicon = [
  { property: "Atomic weight", forecast: "~72", measured: "72.6" },
  { property: "Density", forecast: "~5.5 g cm⁻³", measured: "5.36 g cm⁻³" },
  { property: "Oxide", forecast: "EsO₂", measured: "GeO₂" },
  { property: "Tetrachloride", forecast: "EsCl₄, volatile liquid", measured: "GeCl₄, boiling point ~84 °C" },
];

const periodRows = [
  { period: "1", n: "1", subshells: "1s", count: "2", range: "H (1) – He (2)", name: "Shortest" },
  { period: "2", n: "2", subshells: "2s, 2p", count: "8", range: "Li (3) – Ne (10)", name: "Short" },
  { period: "3", n: "3", subshells: "3s, 3p", count: "8", range: "Na (11) – Ar (18)", name: "Short" },
  { period: "4", n: "4", subshells: "4s, 3d, 4p", count: "18", range: "K (19) – Kr (36)", name: "Long" },
  { period: "5", n: "5", subshells: "5s, 4d, 5p", count: "18", range: "Rb (37) – Xe (54)", name: "Long" },
  { period: "6", n: "6", subshells: "6s, 4f, 5d, 6p", count: "32", range: "Cs (55) – Rn (86)", name: "Longest" },
  { period: "7", n: "7", subshells: "7s, 5f, 6d, 7p", count: "32", range: "Fr (87) – Og (118)", name: "Longest" },
];

const groupFamilies = [
  { group: "1 (IA)", family: "Alkali metals", note: "Li, Na, K, Rb, Cs, Fr; hydrogen is placed above them but is not an alkali metal" },
  { group: "2 (IIA)", family: "Alkaline-earth metals", note: "Be, Mg, Ca, Sr, Ba, Ra" },
  { group: "3–12", family: "Transition region", note: "The d-block, including coinage metals and most noble metals" },
  { group: "13 (IIIA)", family: "Boron family", note: "B, Al, Ga, In, Tl, Nh" },
  { group: "14 (IVA)", family: "Carbon family", note: "C, Si, Ge, Sn, Pb, Fl" },
  { group: "15 (VA)", family: "Pnictogens", note: "N, P, As, Sb, Bi, Mc" },
  { group: "16 (VIA)", family: "Chalcogens", note: "O, S, Se, Te, Po, Lv" },
  { group: "17 (VIIA)", family: "Halogens", note: "F, Cl, Br, I, At, Ts" },
  { group: "18 (0)", family: "Noble gases", note: "He, Ne, Ar, Kr, Xe, Rn, Og" },
];

const blockCards = [
  { block: "s-block", accent: "border-rose-400", config: "ns¹–²", groups: "Groups 1 and 2", detail: "The differentiating electron enters an s-orbital. Mostly soft, electropositive and reactive metals." },
  { block: "p-block", accent: "border-emerald-400", config: "ns² np¹–⁶", groups: "Groups 13–18", detail: "Contains metals, metalloids, non-metals and noble gases; the clearest main-group periodic trends appear here." },
  { block: "d-block", accent: "border-sky-400", config: "(n−1)d¹–¹⁰ ns⁰–²", groups: "Groups 3–12", detail: "Transition region with partly filled d-subshells, variable oxidation states, coloured ions and catalytic behaviour." },
  { block: "f-block", accent: "border-violet-400", config: "(n−2)f⁰–¹⁴ (n−1)d⁰–² ns²", groups: "4f and 5f series", detail: "Inner-transition elements displayed below the main table to avoid a 32-column layout." },
];

const configExamples = [
  { element: "K = [Ar] 4s¹", period: "4", block: "s", group: "1" },
  { element: "Rb = [Kr] 5s¹", period: "5", block: "s", group: "1" },
  { element: "N = 1s² 2s² 2p³", period: "2", block: "p", group: "15 = (2 + 3) + 10" },
  { element: "Ga = [Ar] 3d¹⁰ 4s² 4p¹", period: "4", block: "p", group: "13 = (2 + 1) + 10" },
  { element: "Ne = 1s² 2s² 2p⁶", period: "2", block: "p", group: "18 = (2 + 6) + 10" },
  { element: "Cr = [Ar] 3d⁵ 4s¹", period: "4", block: "d", group: "6 = 5 + 1" },
  { element: "Zn = [Ar] 3d¹⁰ 4s²", period: "4", block: "d", group: "12 = 10 + 2" },
  { element: "Tm = [Xe] 4f¹³ 6s²", period: "6", block: "f", group: "3 by the f-block convention" },
];

const pFamilies = [
  { family: "Boron family", group: "13", members: "B, Al, Ga, In, Tl, Nh", config: "ns² np¹" },
  { family: "Carbon family", group: "14", members: "C, Si, Ge, Sn, Pb, Fl", config: "ns² np²" },
  { family: "Pnictogens", group: "15", members: "N, P, As, Sb, Bi, Mc", config: "ns² np³" },
  { family: "Chalcogens", group: "16", members: "O, S, Se, Te, Po, Lv", config: "ns² np⁴" },
  { family: "Halogens", group: "17", members: "F, Cl, Br, I, At, Ts", config: "ns² np⁵" },
  { family: "Noble gases", group: "18", members: "He, Ne, Ar, Kr, Xe, Rn, Og", config: "ns² np⁶ (He: 1s²)" },
];

const dSeries = [
  { series: "3d", period: "4", span: "Sc (21) → Zn (30)" },
  { series: "4d", period: "5", span: "Y (39) → Cd (48)" },
  { series: "5d", period: "6", span: "La (57), Hf (72) → Hg (80)" },
  { series: "6d", period: "7", span: "Ac (89), Rf (104) → Cn (112)" },
];

const systematicNames = [
  [101, "Unnilunium", "Unu", "Mendelevium", "Md"], [102, "Unnilbium", "Unb", "Nobelium", "No"],
  [103, "Unniltrium", "Unt", "Lawrencium", "Lr"], [104, "Unnilquadium", "Unq", "Rutherfordium", "Rf"],
  [105, "Unnilpentium", "Unp", "Dubnium", "Db"], [106, "Unnilhexium", "Unh", "Seaborgium", "Sg"],
  [107, "Unnilseptium", "Uns", "Bohrium", "Bh"], [108, "Unniloctium", "Uno", "Hassium", "Hs"],
  [109, "Unnilennium", "Une", "Meitnerium", "Mt"], [110, "Ununnillium", "Uun", "Darmstadtium", "Ds"],
  [111, "Unununnium", "Uuu", "Roentgenium", "Rg"], [112, "Ununbium", "Uub", "Copernicium", "Cn"],
  [113, "Ununtrium", "Uut", "Nihonium", "Nh"], [114, "Ununquadium", "Uuq", "Flerovium", "Fl"],
  [115, "Ununpentium", "Uup", "Moscovium", "Mc"], [116, "Ununhexium", "Uuh", "Livermorium", "Lv"],
  [117, "Ununseptium", "Uus", "Tennessine", "Ts"], [118, "Ununoctium", "Uuo", "Oganesson", "Og"],
].map(([z, systematic, temp, official, symbol]) => ({ z: String(z), systematic: String(systematic), temp: String(temp), official: String(official), symbol: String(symbol) }));

const elements: ElementCell[] = [
  {z:1,symbol:"H",period:1,group:1,block:"s"},{z:2,symbol:"He",period:1,group:18,block:"s"},
  {z:3,symbol:"Li",period:2,group:1,block:"s"},{z:4,symbol:"Be",period:2,group:2,block:"s"},{z:5,symbol:"B",period:2,group:13,block:"p"},{z:6,symbol:"C",period:2,group:14,block:"p"},{z:7,symbol:"N",period:2,group:15,block:"p"},{z:8,symbol:"O",period:2,group:16,block:"p"},{z:9,symbol:"F",period:2,group:17,block:"p"},{z:10,symbol:"Ne",period:2,group:18,block:"p"},
  {z:11,symbol:"Na",period:3,group:1,block:"s"},{z:12,symbol:"Mg",period:3,group:2,block:"s"},{z:13,symbol:"Al",period:3,group:13,block:"p"},{z:14,symbol:"Si",period:3,group:14,block:"p"},{z:15,symbol:"P",period:3,group:15,block:"p"},{z:16,symbol:"S",period:3,group:16,block:"p"},{z:17,symbol:"Cl",period:3,group:17,block:"p"},{z:18,symbol:"Ar",period:3,group:18,block:"p"},
  {z:19,symbol:"K",period:4,group:1,block:"s"},{z:20,symbol:"Ca",period:4,group:2,block:"s"},{z:21,symbol:"Sc",period:4,group:3,block:"d"},{z:22,symbol:"Ti",period:4,group:4,block:"d"},{z:23,symbol:"V",period:4,group:5,block:"d"},{z:24,symbol:"Cr",period:4,group:6,block:"d"},{z:25,symbol:"Mn",period:4,group:7,block:"d"},{z:26,symbol:"Fe",period:4,group:8,block:"d"},{z:27,symbol:"Co",period:4,group:9,block:"d"},{z:28,symbol:"Ni",period:4,group:10,block:"d"},{z:29,symbol:"Cu",period:4,group:11,block:"d"},{z:30,symbol:"Zn",period:4,group:12,block:"d"},{z:31,symbol:"Ga",period:4,group:13,block:"p"},{z:32,symbol:"Ge",period:4,group:14,block:"p"},{z:33,symbol:"As",period:4,group:15,block:"p"},{z:34,symbol:"Se",period:4,group:16,block:"p"},{z:35,symbol:"Br",period:4,group:17,block:"p"},{z:36,symbol:"Kr",period:4,group:18,block:"p"},
  {z:37,symbol:"Rb",period:5,group:1,block:"s"},{z:38,symbol:"Sr",period:5,group:2,block:"s"},{z:39,symbol:"Y",period:5,group:3,block:"d"},{z:40,symbol:"Zr",period:5,group:4,block:"d"},{z:41,symbol:"Nb",period:5,group:5,block:"d"},{z:42,symbol:"Mo",period:5,group:6,block:"d"},{z:43,symbol:"Tc",period:5,group:7,block:"d"},{z:44,symbol:"Ru",period:5,group:8,block:"d"},{z:45,symbol:"Rh",period:5,group:9,block:"d"},{z:46,symbol:"Pd",period:5,group:10,block:"d"},{z:47,symbol:"Ag",period:5,group:11,block:"d"},{z:48,symbol:"Cd",period:5,group:12,block:"d"},{z:49,symbol:"In",period:5,group:13,block:"p"},{z:50,symbol:"Sn",period:5,group:14,block:"p"},{z:51,symbol:"Sb",period:5,group:15,block:"p"},{z:52,symbol:"Te",period:5,group:16,block:"p"},{z:53,symbol:"I",period:5,group:17,block:"p"},{z:54,symbol:"Xe",period:5,group:18,block:"p"},
  {z:55,symbol:"Cs",period:6,group:1,block:"s"},{z:56,symbol:"Ba",period:6,group:2,block:"s"},{z:57,symbol:"La*",period:6,group:3,block:"f"},{z:72,symbol:"Hf",period:6,group:4,block:"d"},{z:73,symbol:"Ta",period:6,group:5,block:"d"},{z:74,symbol:"W",period:6,group:6,block:"d"},{z:75,symbol:"Re",period:6,group:7,block:"d"},{z:76,symbol:"Os",period:6,group:8,block:"d"},{z:77,symbol:"Ir",period:6,group:9,block:"d"},{z:78,symbol:"Pt",period:6,group:10,block:"d"},{z:79,symbol:"Au",period:6,group:11,block:"d"},{z:80,symbol:"Hg",period:6,group:12,block:"d"},{z:81,symbol:"Tl",period:6,group:13,block:"p"},{z:82,symbol:"Pb",period:6,group:14,block:"p"},{z:83,symbol:"Bi",period:6,group:15,block:"p"},{z:84,symbol:"Po",period:6,group:16,block:"p"},{z:85,symbol:"At",period:6,group:17,block:"p"},{z:86,symbol:"Rn",period:6,group:18,block:"p"},
  {z:87,symbol:"Fr",period:7,group:1,block:"s"},{z:88,symbol:"Ra",period:7,group:2,block:"s"},{z:89,symbol:"Ac†",period:7,group:3,block:"f"},{z:104,symbol:"Rf",period:7,group:4,block:"d"},{z:105,symbol:"Db",period:7,group:5,block:"d"},{z:106,symbol:"Sg",period:7,group:6,block:"d"},{z:107,symbol:"Bh",period:7,group:7,block:"d"},{z:108,symbol:"Hs",period:7,group:8,block:"d"},{z:109,symbol:"Mt",period:7,group:9,block:"d"},{z:110,symbol:"Ds",period:7,group:10,block:"d"},{z:111,symbol:"Rg",period:7,group:11,block:"d"},{z:112,symbol:"Cn",period:7,group:12,block:"d"},{z:113,symbol:"Nh",period:7,group:13,block:"p"},{z:114,symbol:"Fl",period:7,group:14,block:"p"},{z:115,symbol:"Mc",period:7,group:15,block:"p"},{z:116,symbol:"Lv",period:7,group:16,block:"p"},{z:117,symbol:"Ts",period:7,group:17,block:"p"},{z:118,symbol:"Og",period:7,group:18,block:"p"},
];

const lanthanoids = ["Ce 58","Pr 59","Nd 60","Pm 61","Sm 62","Eu 63","Gd 64","Tb 65","Dy 66","Ho 67","Er 68","Tm 69","Yb 70","Lu 71"];
const actinoids = ["Th 90","Pa 91","U 92","Np 93","Pu 94","Am 95","Cm 96","Bk 97","Cf 98","Es 99","Fm 100","Md 101","No 102","Lr 103"];

function SectionTitle({ code, children }: { code: string; children: ReactNode }) {
  return (
    <div className="mt-10 flex items-center gap-3 rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-4 py-3 shadow-[0_16px_45px_rgba(8,47,73,0.28)]">
      <span className="inline-flex min-w-10 items-center justify-center rounded-lg bg-amber-300 px-2 py-1 text-xs font-black text-slate-950">{code}</span>
      <h2 className="text-xl font-black tracking-tight text-white md:text-2xl">{children}</h2>
    </div>
  );
}

function Note({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "amber" | "red" | "green" }) {
  const styles = {
    blue: "border-cyan-400/40 bg-cyan-500/8 text-cyan-50",
    amber: "border-amber-300/40 bg-amber-400/8 text-amber-50",
    red: "border-rose-400/40 bg-rose-500/8 text-rose-50",
    green: "border-emerald-400/40 bg-emerald-500/8 text-emerald-50",
  }[tone];
  return <div className={`my-4 rounded-xl border px-4 py-3 text-sm leading-6 ${styles}`}>{children}</div>;
}

function DataTable<T extends Record<string, ReactNode>>({ rows, columns }: { rows: T[]; columns: TableColumn<T>[] }) {
  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-white/10 bg-slate-950/40">
      <table className="min-w-full border-collapse text-sm">
        <thead className="bg-blue-950/90 text-cyan-100">
          <tr>{columns.map((column) => <th key={String(column.key)} className={`border-b border-white/10 px-3 py-2.5 font-bold ${column.align === "center" ? "text-center" : column.align === "right" ? "text-right" : "text-left"}`}>{column.label}</th>)}</tr>
        </thead>
        <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex} className="odd:bg-white/[0.025] even:bg-blue-500/[0.03]">{columns.map((column) => <td key={String(column.key)} className={`border-b border-white/5 px-3 py-2.5 align-top text-slate-200 ${column.align === "center" ? "text-center" : column.align === "right" ? "text-right" : "text-left"}`}>{row[column.key]}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function MeyerCurve() {
  return (
    <figure className="my-6 rounded-2xl border border-cyan-300/20 bg-slate-950/55 p-3 md:p-5">
      <svg viewBox="0 0 920 390" className="h-auto w-full" role="img" aria-labelledby="meyer-title meyer-desc">
        <title id="meyer-title">Lothar Meyer atomic-volume curve</title>
        <desc id="meyer-desc">A repeating wave of atomic volume versus atomic mass, with alkali metals near peaks and transition elements near valleys.</desc>
        <defs>
          <linearGradient id="meyerFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#22d3ee" stopOpacity="0.26"/><stop offset="1" stopColor="#22d3ee" stopOpacity="0"/></linearGradient>
        </defs>
        <g stroke="#475569" strokeWidth="1" opacity="0.45">
          {[70,130,190,250,310].map((y) => <line key={y} x1="78" y1={y} x2="875" y2={y}/>) }
          {[150,270,390,510,630,750,870].map((x) => <line key={x} x1={x} y1="40" x2={x} y2="320"/>) }
        </g>
        <path d="M85 300 L115 245 L145 300 L180 230 L215 265 L245 315 L275 205 L300 315 L335 292 L365 220 L395 310 L425 320 L455 300 L485 265 L515 250 L545 90 L580 180 L620 280 L655 315 L690 302 L720 310 L745 265 L770 50 L795 265 L820 315 L855 320" fill="url(#meyerFill)"/>
        <path d="M85 300 L115 245 L145 300 L180 230 L215 265 L245 315 L275 205 L300 315 L335 292 L365 220 L395 310 L425 320 L455 300 L485 265 L515 250 L545 90 L580 180 L620 280 L655 315 L690 302 L720 310 L745 265 L770 50 L795 265 L820 315 L855 320" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinejoin="round"/>
        {[{x:115,y:245,t:"Li"},{x:180,y:230,t:"Na"},{x:275,y:205,t:"K"},{x:545,y:90,t:"Rb"},{x:770,y:50,t:"Cs"},{x:795,y:265,t:"Ba"}].map((p) => <g key={p.t}><circle cx={p.x} cy={p.y} r="6" fill="#facc15"/><text x={p.x+8} y={p.y-8} fill="#f8fafc" fontSize="16" fontWeight="700">{p.t}</text></g>)}
        <line x1="78" y1="320" x2="875" y2="320" stroke="#cbd5e1" strokeWidth="2"/><line x1="78" y1="320" x2="78" y2="40" stroke="#cbd5e1" strokeWidth="2"/>
        <text x="470" y="372" fill="#cbd5e1" textAnchor="middle" fontSize="16">Atomic mass →</text>
        <text x="25" y="180" fill="#cbd5e1" textAnchor="middle" fontSize="16" transform="rotate(-90 25 180)">Atomic volume →</text>
        <text x="535" y="60" fill="#fde68a" fontSize="16" fontWeight="700">alkali-metal peaks</text>
        <text x="360" y="345" fill="#a7f3d0" fontSize="15">transition-region valleys</text>
      </svg>
      <figcaption className="mt-2 text-center text-xs text-slate-400">Chemically related families occupy corresponding positions in successive waves.</figcaption>
    </figure>
  );
}

function TelluricScrew() {
  return (
    <figure className="mx-auto my-5 max-w-xl rounded-2xl border border-violet-300/20 bg-slate-950/55 p-4">
      <svg viewBox="0 0 620 360" className="h-auto w-full" role="img" aria-labelledby="screw-title screw-desc">
        <title id="screw-title">Chancourtois telluric screw</title>
        <desc id="screw-desc">Elements are arranged as a helix around a cylinder so that chemically similar elements become vertically aligned.</desc>
        <defs><linearGradient id="cyl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#172554"/><stop offset="0.5" stopColor="#334155"/><stop offset="1" stopColor="#172554"/></linearGradient></defs>
        <ellipse cx="310" cy="55" rx="135" ry="34" fill="#312e81" stroke="#a78bfa" strokeWidth="2"/>
        <rect x="175" y="55" width="270" height="245" fill="url(#cyl)" stroke="#a78bfa" strokeWidth="2"/>
        <ellipse cx="310" cy="300" rx="135" ry="34" fill="#1e293b" stroke="#a78bfa" strokeWidth="2"/>
        <path d="M180 80 C245 125 375 35 440 80 C500 120 405 165 310 165 C210 165 120 220 190 250 C260 280 375 220 440 255" fill="none" stroke="#38bdf8" strokeWidth="4"/>
        <line x1="250" y1="78" x2="250" y2="275" stroke="#fb7185" strokeWidth="2" strokeDasharray="8 8"/>
        {[{x:250,y:96,t:"Li"},{x:250,y:165,t:"Na"},{x:250,y:246,t:"K"},{x:350,y:125,t:"Be"},{x:385,y:218,t:"Mg"}].map((p) => <g key={p.t}><circle cx={p.x} cy={p.y} r="7" fill="#facc15"/><text x={p.x+10} y={p.y+5} fill="#f8fafc" fontSize="16" fontWeight="700">{p.t}</text></g>)}
        <text x="310" y="345" textAnchor="middle" fill="#cbd5e1" fontSize="15">A 16-unit turn places related elements in vertical families.</text>
      </svg>
    </figure>
  );
}

function MoseleyPlot() {
  return (
    <figure className="my-5 rounded-2xl border border-rose-300/20 bg-slate-950/55 p-4">
      <svg viewBox="0 0 620 350" className="h-auto w-full" role="img" aria-labelledby="moseley-title moseley-desc">
        <title id="moseley-title">Moseley square-root frequency plot</title>
        <desc id="moseley-desc">The square root of characteristic X-ray frequency varies linearly with atomic number.</desc>
        <g stroke="#475569" strokeWidth="1" opacity="0.45">{[70,120,170,220,270].map((y)=><line key={y} x1="80" y1={y} x2="560" y2={y}/>)}{[150,250,350,450,550].map((x)=><line key={x} x1={x} y1="40" x2={x} y2="285"/>)}</g>
        <line x1="80" y1="285" x2="560" y2="285" stroke="#e2e8f0" strokeWidth="2"/><line x1="80" y1="285" x2="80" y2="40" stroke="#e2e8f0" strokeWidth="2"/>
        <line x1="115" y1="255" x2="530" y2="65" stroke="#fb7185" strokeWidth="4"/>
        {[{x:125,y:250},{x:205,y:210},{x:285,y:175},{x:365,y:135},{x:445,y:100},{x:520,y:68}].map((p,i)=><circle key={i} cx={p.x} cy={p.y} r="6" fill="#38bdf8" stroke="#e0f2fe" strokeWidth="2"/>)}
        <text x="320" y="330" textAnchor="middle" fill="#cbd5e1" fontSize="16">Atomic number, Z →</text>
        <text x="28" y="170" textAnchor="middle" fill="#cbd5e1" fontSize="16" transform="rotate(-90 28 170)">√ν →</text>
      </svg>
    </figure>
  );
}

function PeriodicTableGraphic() {
  const blockClass: Record<ElementCell["block"], string> = { s: "border-rose-300/40 bg-rose-400/12", p: "border-emerald-300/40 bg-emerald-400/12", d: "border-sky-300/40 bg-sky-400/12", f: "border-violet-300/40 bg-violet-400/12" };
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/55 p-4">
      <div className="min-w-[1000px]">
        <div className="grid grid-cols-[42px_repeat(18,minmax(42px,1fr))] gap-1 text-center text-[10px] text-slate-400">
          <div />{Array.from({length:18},(_,i)=><div key={i} className="py-1 font-bold">{i+1}</div>)}
          {Array.from({length:7},(_,p)=>{
            const period=p+1;
            return <React.Fragment key={period}><div className="flex items-center justify-center font-bold text-cyan-200">{period}</div>{Array.from({length:18},(_,g)=>{const element=elements.find((item)=>item.period===period&&item.group===g+1);return <div key={g} className={`min-h-14 rounded-md border p-1 ${element ? blockClass[element.block] : "border-transparent"}`}>{element && <><div className="text-[9px] text-slate-400">{element.z}</div><div className="text-sm font-black text-white">{element.symbol}</div></>}</div>})}</React.Fragment>;
          })}
        </div>
        <div className="mt-5 space-y-2 pl-10">
          {[{label:"4f",items:lanthanoids},{label:"5f",items:actinoids}].map((row)=><div key={row.label} className="grid grid-cols-[42px_repeat(14,minmax(52px,1fr))] gap-1"><div className="flex items-center justify-center text-xs font-bold text-violet-200">{row.label}</div>{row.items.map((item)=><div key={item} className="rounded-md border border-violet-300/40 bg-violet-400/12 p-1 text-center text-xs text-white">{item}</div>)}</div>)}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-300"><span>🌹 s-block</span><span>💠 d-block</span><span>🌿 p-block</span><span>🔮 f-block</span></div>
    </div>
  );
}

export default function HistoryModernLawAuthority() {
  return (
    <article className="mx-auto max-w-7xl px-4 pb-20 pt-6 text-slate-200 md:px-6">
      <header className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.3),transparent_38%),linear-gradient(135deg,#020617,#0f172a_48%,#082f49)] px-5 py-10 shadow-[0_30px_90px_rgba(2,132,199,0.16)] md:px-9 md:py-14">
        <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.65) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.65) 1px,transparent 1px)",backgroundSize:"30px 30px"}} />
        <div className="relative">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-amber-300">Classification of Elements and Periodicity</p>
          <h1 className="mt-4 max-w-5xl text-3xl font-black tracking-tight text-white md:text-5xl">History and the Modern Periodic Table</h1>
          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300 md:text-lg">A rigorous journey from the earliest attempts at classification to atomic number, electronic configuration, the long-form table, block structure, group logic and modern nomenclature.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-white/10 bg-white/5 p-3"><div className="text-2xl font-black text-cyan-300">7</div><div className="text-xs text-slate-400">periods</div></div><div className="rounded-xl border border-white/10 bg-white/5 p-3"><div className="text-2xl font-black text-amber-300">18</div><div className="text-xs text-slate-400">groups</div></div><div className="rounded-xl border border-white/10 bg-white/5 p-3"><div className="text-2xl font-black text-emerald-300">118</div><div className="text-xs text-slate-400">recognised elements</div></div></div>
        </div>
      </header>

      <SectionTitle code="1">Why classification became necessary</SectionTitle>
      <p className="mt-4 leading-7 text-slate-300">A periodic table is a tabular arrangement in which elements are ordered by a fundamental property while chemically similar elements are brought into the same vertical family. As the number of known elements increased, memorising each one independently became impractical. Chemists therefore searched for an ordering principle that would make physical and chemical behaviour recur in a recognisable pattern.</p>
      <DataTable rows={timeline} columns={[{key:"year",label:"Year"},{key:"scientist",label:"Scientist"},{key:"idea",label:"Central contribution"}]} />

      <SectionTitle code="A">Lavoisier and Prout</SectionTitle>
      <div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-sky-300/20 bg-sky-400/5 p-5"><h3 className="text-lg font-black text-sky-200">Lavoisier’s classification, 1789</h3><p className="mt-2 leading-7 text-slate-300">Known substances were separated into metals—lustrous, conducting and commonly forming basic oxides—and non-metals—generally dull, poorly conducting and commonly forming acidic oxides.</p><Note tone="red"><b>Limitation:</b> the division was too coarse and offered no proper position for intermediate metalloids such as silicon and arsenic.</Note></div><div className="rounded-2xl border border-amber-300/20 bg-amber-400/5 p-5"><h3 className="text-lg font-black text-amber-200">Prout’s hypothesis</h3><p className="mt-2 leading-7 text-slate-300">Prout proposed that hydrogen was the fundamental building unit and that every atomic weight should be an exact whole-number multiple of hydrogen’s atomic weight.</p><Note tone="red">More accurate measurements, including chlorine near 35.5, showed that the proposal could not be retained in its original form.</Note></div></div>

      <SectionTitle code="B">Döbereiner’s law of triads</SectionTitle>
      <p className="mt-4 leading-7 text-slate-300">When three similar elements were placed in increasing atomic-weight order, the atomic weight of the middle element was approximately the arithmetic mean of the first and third.</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{triads.map((triad)=><div key={triad.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><h3 className="font-black text-cyan-200">{triad.title}</h3><div className="mt-3 grid grid-cols-3 gap-2 text-center"><span className="rounded-lg bg-slate-800 p-2">{triad.a}</span><span className="rounded-lg bg-amber-300/15 p-2 font-bold text-amber-100">{triad.b}</span><span className="rounded-lg bg-slate-800 p-2">{triad.c}</span></div><div className="mt-3 text-center text-xs text-emerald-300">{triad.calc}</div></div>)}</div>
      <Note tone="amber"><b>Pettenkofer’s related observation:</b> differences between atomic weights of related elements often appeared as whole-number multiples of approximately 8; for Li–Na–K, each step is 16 = 2 × 8.</Note>
      <Note tone="red"><b>Limitation:</b> only a small number of useful triads could be assembled, so the rule could not organise the full set of known elements.</Note>

      <SectionTitle code="C">Chancourtois’ telluric screw</SectionTitle>
      <p className="mt-4 leading-7 text-slate-300">Elements were wound in increasing atomic-weight order around a cylinder divided into sixteen vertical units. Elements separated by one full turn appeared one above another and often showed related chemistry. This was the first explicit use of periodicity in a geometric classification.</p>
      <TelluricScrew />
      <Note tone="red">The 16-unit alignment worked best for lighter elements; the correspondence deteriorated for heavier elements.</Note>

      <SectionTitle code="D">Newlands’ law of octaves</SectionTitle>
      <p className="mt-4 leading-7 text-slate-300">Newlands arranged the 56 known elements in increasing atomic weight and observed that the eighth element often resembled the first, analogous to the recurrence of the first note at the eighth position in a musical scale.</p>
      <div className="mt-4 grid gap-5 lg:grid-cols-2"><div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><h3 className="font-black text-amber-200">Musical analogy</h3><div className="mt-3 grid grid-cols-8 overflow-hidden rounded-lg border border-white/10 text-center text-sm">{["sa","re","ga","ma","pa","dha","ni","sa"].map((x,i)=><div key={i} className={`p-2 ${i===7?"bg-amber-300/15 text-amber-100":"bg-white/[0.03]"}`}>{x}<div className="text-xs text-slate-500">{i+1}</div></div>)}</div></div><div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><h3 className="font-black text-cyan-200">Representative arrangement</h3><div className="mt-3 grid grid-cols-7 text-center text-sm">{["Li","Be","B","C","N","O","F","Na","Mg","Al","Si","P","S","Cl","K","Ca","—","—","—","—","—"].map((x,i)=><div key={i} className="border border-white/10 p-2">{x}</div>)}</div></div></div>
      <div className="mt-5 grid gap-3 md:grid-cols-2"><Note tone="red"><b>Range:</b> the pattern worked reasonably only up to calcium; the d-block later requires an 18-element span.</Note><Note tone="red"><b>No gaps:</b> Newlands assumed the list was complete, leaving no deliberate positions for undiscovered elements.</Note><Note tone="red"><b>Forced misfits:</b> unlike elements were sometimes grouped simply to preserve the eighth-position rhythm.</Note><Note tone="red"><b>Noble gases:</b> their later discovery disrupted the original counting pattern.</Note></div>

      <SectionTitle code="E">Lothar Meyer’s atomic-volume curve</SectionTitle>
      <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-400/5 p-5 text-center text-lg font-black text-cyan-100">Atomic volume = gram atomic mass / density &nbsp; (cm³ mol⁻¹)</div>
      <p className="mt-4 leading-7 text-slate-300">Meyer plotted atomic volume against atomic weight and obtained a recurring wave. Alkali metals appeared near sharp peaks, alkaline-earth metals on descending sections, transition elements and several metalloids near broad valleys, and halogens on rising sections toward the next alkali-metal maximum.</p>
      <MeyerCurve />
      <DataTable rows={[{position:"Sharp peaks",family:"Alkali metals",reason:"Large atomic volume and strongly electropositive character"},{position:"Descending slopes",family:"Alkaline-earth metals",reason:"Lower volume than the neighbouring alkali metal"},{position:"Broad valleys",family:"Transition elements and metalloids",reason:"More compact structures and smaller atomic volumes"},{position:"Rising slopes",family:"Halogens",reason:"Approach the next major maximum while remaining strongly electronegative"}]} columns={[{key:"position",label:"Position on wave"},{key:"family",label:"Family"},{key:"reason",label:"Interpretation"}]} />
      <Note tone="green"><b>Conclusion:</b> physical properties of elements are periodic functions of atomic weight. Meyer also recognised recurrence in properties such as melting point, boiling point, thermal expansion, malleability and compressibility.</Note>

      <SectionTitle code="F">Mendeleev’s periodic table, 1869–1871</SectionTitle>
      <Note tone="blue"><b>Mendeleev’s periodic law:</b> the physical and chemical properties of elements are periodic functions of their atomic weights.</Note>
      <p className="leading-7 text-slate-300">Mendeleev’s decisive advance was predictive flexibility. He retained chemically similar elements in the same column, deliberately left gaps for unknown elements and occasionally reversed strict atomic-weight order when chemical evidence demanded it.</p>
      <DataTable rows={mendeleevCharacteristics} columns={[{key:"feature",label:"Feature"},{key:"detail",label:"Description"}]} />
      <Note tone="amber"><b>Valency clue:</b> for the principal groups, the group number tracked the highest valency toward oxygen: group I → R₂O, group II → RO, group III → R₂O₃, continuing to group VII → R₂O₇.</Note>

      <SectionTitle code="F1">Merits of Mendeleev’s table</SectionTitle>
      <div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><h3 className="font-black text-cyan-200">Systematic study</h3><p className="mt-2 leading-7 text-slate-300">Elements were organised into families, making it possible to learn one representative element and infer related behaviour down its group.</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><h3 className="font-black text-cyan-200">Accommodation of later families</h3><p className="mt-2 leading-7 text-slate-300">The noble gases could be inserted as a zero group without destroying the main architecture.</p></div></div>
      <h3 className="mt-6 text-lg font-black text-amber-200">Prediction of undiscovered elements</h3>
      <DataTable rows={predictions} columns={[{key:"predicted",label:"Predicted name"},{key:"discovered",label:"Element discovered"},{key:"symbol",label:"Symbol",align:"center"},{key:"year",label:"Year",align:"center"}]} />
      <h3 className="mt-6 text-lg font-black text-emerald-200">Case study: eka-silicon and germanium</h3>
      <DataTable rows={ekaSilicon} columns={[{key:"property",label:"Property"},{key:"forecast",label:"Mendeleev’s forecast"},{key:"measured",label:"Measured for Ge"}]} />
      <h3 className="mt-6 text-lg font-black text-violet-200">Correction of doubtful atomic weights</h3>
      <Note tone="blue"><b>Relation:</b> atomic weight = valency × equivalent weight.</Note>
      <p className="leading-7 text-slate-300">For beryllium, equivalent weight ≈ 4.5. Assuming valency 3 gives 13.5, which did not fit a chemically sensible position. Valency 2 gives 9, correctly placing Be between Li and B. Similar table-guided corrections were applied to accepted values for Be, In, Au, Pt and U.</p>

      <SectionTitle code="F2">Demerits of Mendeleev’s table</SectionTitle>
      <div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-rose-300/20 bg-rose-500/5 p-4"><h3 className="font-black text-rose-200">Hydrogen</h3><p className="mt-2 text-sm leading-6 text-slate-300">Hydrogen resembles group 1 through its 1s¹ configuration and H⁺ formation, but also resembles group 17 through its need for one electron and H⁻ formation.</p></div><div className="rounded-2xl border border-rose-300/20 bg-rose-500/5 p-4"><h3 className="font-black text-rose-200">Isotopes</h3><p className="mt-2 text-sm leading-6 text-slate-300">Different atomic weights would imply separate positions, even though isotopes are chemically the same element.</p></div><div className="rounded-2xl border border-rose-300/20 bg-rose-500/5 p-4"><h3 className="font-black text-rose-200">Similar elements separated</h3><p className="mt-2 text-sm leading-6 text-slate-300">Elements such as Pt and Au could be split into different groups despite substantial chemical resemblance.</p></div><div className="rounded-2xl border border-rose-300/20 bg-rose-500/5 p-4"><h3 className="font-black text-rose-200">Dissimilar elements combined</h3><p className="mt-2 text-sm leading-6 text-slate-300">Alkali metals and coinage metals were both placed in group I, although their chemistry differs greatly.</p></div></div>
      <h3 className="mt-6 text-lg font-black text-amber-200">Anomalous atomic-weight pairs</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{["Ar (39.9) before K (39.1)","Co (58.9) before Ni (58.7)","Te (127.6) before I (126.9)","Th (232) before Pa (231)"].map((pair)=><div key={pair} className="rounded-xl border border-amber-300/20 bg-amber-400/5 p-3 text-center font-bold text-amber-100">{pair}</div>)}</div>
      <Note tone="red"><b>Fundamental defect:</b> the table described recurrence but could not explain its electronic origin.</Note>

      <SectionTitle code="G">Moseley and the modern periodic law</SectionTitle>
      <p className="mt-4 leading-7 text-slate-300">Moseley measured characteristic X-rays from different targets and found that the square root of X-ray frequency varied linearly with a whole number increasing by one from element to element. This number is atomic number, Z, equal to nuclear charge and, for a neutral atom, electron count.</p>
      <div className="mt-4 rounded-2xl border border-rose-300/20 bg-rose-400/5 p-5 text-center text-xl font-black text-rose-100">√ν = a (Z − b)</div>
      <MoseleyPlot />
      <Note tone="green"><b>Modern periodic law:</b> the physical and chemical properties of elements are periodic functions of their atomic numbers.</Note>
      <p className="leading-7 text-slate-300">Atomic number resolves the anomalous pairs automatically: Ar has Z = 18 and therefore precedes K with Z = 19 even though Ar has slightly greater atomic mass. The ordering also aligns directly with electron configuration, which controls chemistry.</p>

      <SectionTitle code="H">Cause of periodicity</SectionTitle>
      <p className="mt-4 leading-7 text-slate-300">As Z increases one unit at a time, electrons enter orbitals in a regular sequence. A new period begins when filling starts in a new principal shell. Elements recur in the same group when they acquire analogous valence-shell configurations. Thus Li 2s¹, Na 3s¹, K 4s¹, Rb 5s¹ and Cs 6s¹ display related chemistry because each ends in ns¹.</p>
      <Note tone="amber"><b>Seaborg’s contribution:</b> placing the actinoids beneath the lanthanoids established the familiar two-row f-block and clarified the electronic structure of transuranium elements.</Note>

      <SectionTitle code="I">The modern long-form periodic table</SectionTitle>
      <p className="mt-4 leading-7 text-slate-300">The long form arranges elements by increasing Z into seven periods and eighteen IUPAC groups. The f-block is displayed separately only to keep the main table compact; electronically it belongs within periods 6 and 7.</p>
      <PeriodicTableGraphic />
      <DataTable rows={[{improvement:"Atomic-number order",fix:"Removes all atomic-weight reversals"},{improvement:"Separate s, p, d and f regions",fix:"Connects position with the differentiating electron"},{improvement:"One position for isotopes",fix:"Same Z means the same element and the same box"},{improvement:"Natural group 18",fix:"Noble gases occupy a distinct family"},{improvement:"Electronic explanation",fix:"The table explains why properties recur"}]} columns={[{key:"improvement",label:"Improvement"},{key:"fix",label:"What it resolves"}]} />
      <Note tone="amber"><b>Period-length sequence:</b> 2, 8, 8, 18, 18, 32, 32. The values reflect the orbitals that become available during each period.</Note>

      <SectionTitle code="J">Seven periods and eighteen groups</SectionTitle>
      <DataTable rows={periodRows} columns={[{key:"period",label:"Period",align:"center"},{key:"n",label:"n",align:"center"},{key:"subshells",label:"Subshells filled"},{key:"count",label:"Elements",align:"center"},{key:"range",label:"Range"},{key:"name",label:"Type"}]} />
      <DataTable rows={groupFamilies} columns={[{key:"group",label:"Group"},{key:"family",label:"Family"},{key:"note",label:"Members and note"}]} />
      <Note tone="blue"><b>Old to new numbering:</b> IA→1, IIA→2, IIIB→3, IVB→4, VB→5, VIB→6, VIIB→7, old VIII→8–10, IB→11, IIB→12, IIIA→13, IVA→14, VA→15, VIA→16, VIIA→17 and zero group→18.</Note>

      <SectionTitle code="K">Electronic classification into blocks</SectionTitle>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{blockCards.map((card)=><div key={card.block} className={`rounded-2xl border-l-4 ${card.accent} border-y border-r border-white/10 bg-white/[0.035] p-5`}><div className="flex items-start justify-between gap-3"><h3 className="text-lg font-black text-white">{card.block}</h3><span className="rounded-lg bg-slate-950/70 px-2 py-1 text-xs font-bold text-cyan-200">{card.config}</span></div><div className="mt-2 text-sm font-bold text-amber-200">{card.groups}</div><p className="mt-2 text-sm leading-6 text-slate-300">{card.detail}</p></div>)}</div>
      <Note tone="red"><b>Sharp distinction:</b> Zn, Cd and Hg lie in the d-block but are not transition elements in the strict sense because their atoms and common +2 ions have complete d¹⁰ subshells.</Note>

      <SectionTitle code="L">Predicting period, block and group from configuration</SectionTitle>
      <div className="mt-4 grid gap-4 md:grid-cols-3"><div className="rounded-xl border border-white/10 bg-white/[0.035] p-4"><h3 className="font-black text-cyan-200">Period</h3><p className="mt-2 text-sm leading-6 text-slate-300">Highest principal quantum number present.</p></div><div className="rounded-xl border border-white/10 bg-white/[0.035] p-4"><h3 className="font-black text-amber-200">Block</h3><p className="mt-2 text-sm leading-6 text-slate-300">Subshell receiving the differentiating electron.</p></div><div className="rounded-xl border border-white/10 bg-white/[0.035] p-4"><h3 className="font-black text-emerald-200">Group</h3><p className="mt-2 text-sm leading-6 text-slate-300">s: ns count; p: valence count + 10; d: ns + (n−1)d; f: group 3 convention.</p></div></div>
      <DataTable rows={configExamples} columns={[{key:"element",label:"Element and configuration"},{key:"period",label:"Period",align:"center"},{key:"block",label:"Block",align:"center"},{key:"group",label:"Group and working"}]} />
      <Note tone="amber">For p-block group calculation, count only outer-shell ns and np electrons. For d-block elements, add ns electrons to the (n−1)d count.</Note>

      <SectionTitle code="M">Behavioural and geochemical classifications</SectionTitle>
      <h3 className="mt-5 text-lg font-black text-cyan-200">Bohr-type behavioural classes</h3>
      <DataTable rows={[{class:"Inert gases",definition:"Completely filled outer shell: ns²np⁶; helium is the 1s² special case"},{class:"Representative elements",definition:"All s- and p-block elements; noble gases are included in the p-block representatives"},{class:"Transition elements",definition:"Partly filled d-subshell in the atom or a stable ion"},{class:"Inner-transition elements",definition:"Partly filled f-subshell; last three shells participate"}]} columns={[{key:"class",label:"Class"},{key:"definition",label:"Electronic basis"}]} />
      <h3 className="mt-6 text-lg font-black text-amber-200">Goldschmidt’s geochemical classification</h3>
      <DataTable rows={[{class:"Siderophiles",affinity:"Iron-loving",location:"Concentrate in metallic iron and the core; Fe, Ni, Au, Pt"},{class:"Chalcophiles",affinity:"Sulphide-loving",location:"Prefer sulphide ores; Cu, Zn, Pb, Hg"},{class:"Lithophiles",affinity:"Rock/oxygen-loving",location:"Concentrate in silicate crust and mantle; Na, K, Al, Si"},{class:"Atmophiles",affinity:"Gas-loving",location:"Remain in gaseous phases; N, O, noble gases, H"}]} columns={[{key:"class",label:"Class"},{key:"affinity",label:"Affinity"},{key:"location",label:"Where they concentrate"}]} />

      <SectionTitle code="N">The six p-block families</SectionTitle>
      <DataTable rows={pFamilies} columns={[{key:"family",label:"Family"},{key:"group",label:"Group",align:"center"},{key:"members",label:"Members"},{key:"config",label:"Valence configuration"}]} />
      <div className="mt-4 grid gap-4 md:grid-cols-2"><Note tone="blue"><b>Pnictogens:</b> the name is linked with “to choke,” reflecting nitrogen’s inability to support respiration.</Note><Note tone="green"><b>Chalcogens:</b> “ore-formers,” because sulphur and related elements commonly occur in ores.</Note><Note tone="amber"><b>Halogens:</b> “salt-formers,” as in NaCl and related metal halides.</Note><Note tone="blue"><b>Noble gases:</b> full valence shells make them markedly unreactive; heavier members can form compounds under suitable conditions.</Note></div>

      <SectionTitle code="O">d-block and f-block architecture</SectionTitle>
      <DataTable rows={dSeries} columns={[{key:"series",label:"Series"},{key:"period",label:"Period",align:"center"},{key:"span",label:"Span"}]} />
      <div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-sky-300/20 bg-sky-400/5 p-5"><h3 className="font-black text-sky-200">Named d-block families</h3><p className="mt-3 text-sm leading-7 text-slate-300">Coinage metals: Cu, Ag, Au. Platinum metals: Ru, Rh, Pd, Os, Ir, Pt. Mercury is the only metal liquid at ordinary room temperature. Technetium was the first element produced artificially.</p></div><div className="rounded-2xl border border-violet-300/20 bg-violet-400/5 p-5"><h3 className="font-black text-violet-200">Inner-transition series</h3><p className="mt-3 text-sm leading-7 text-slate-300">Lanthanoids: Ce–Lu, filling 4f. Actinoids: Th–Lr, filling 5f; all are radioactive. Lanthanoid contraction is the steady size decrease across the 4f series.</p></div></div>
      <Note tone="amber"><b>Boundary configurations:</b> Lu = [Xe] 4f¹⁴5d¹6s², Th = [Rn] 6d²7s² and Lr is commonly treated at the boundary of f- and d-block behaviour. Their placement is discussed through both electron configuration and overall chemistry.</Note>

      <SectionTitle code="P">Metals, non-metals and metalloids</SectionTitle>
      <div className="mt-5 grid gap-4 lg:grid-cols-3"><div className="rounded-2xl border border-sky-300/20 bg-sky-400/5 p-5"><h3 className="text-lg font-black text-sky-200">Metals</h3><ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300"><li>Mostly solid; mercury is liquid.</li><li>Good thermal and electrical conductors.</li><li>Usually malleable and ductile.</li><li>Tend to lose electrons and form basic oxides.</li><li>Ga and Cs melt near ordinary body-temperature range.</li></ul></div><div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/5 p-5"><h3 className="text-lg font-black text-emerald-200">Non-metals</h3><ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300"><li>Solids or gases; bromine is liquid.</li><li>Solid non-metals are generally brittle.</li><li>Often lower melting and boiling points.</li><li>Tend to gain electrons and form acidic oxides.</li><li>Boron and carbon are high-melting special cases.</li></ul></div><div className="rounded-2xl border border-amber-300/20 bg-amber-400/5 p-5"><h3 className="text-lg font-black text-amber-200">Metalloids</h3><p className="mt-3 text-sm leading-6 text-slate-300">Borderline elements with mixed metallic and non-metallic behaviour, often semiconducting:</p><div className="mt-4 flex flex-wrap gap-2">{["B","Si","Ge","As","Sb","Te"].map((x)=><span key={x} className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-sm font-bold text-amber-100">{x}</span>)}</div></div></div>

      <SectionTitle code="Q">Temporary nomenclature for elements above Z = 100</SectionTitle>
      <p className="mt-4 leading-7 text-slate-300">Before an official name is approved, a systematic name is assembled digit by digit from roots: 0 nil, 1 un, 2 bi, 3 tri, 4 quad, 5 pent, 6 hex, 7 sept, 8 oct and 9 enn, followed by “ium.” For Z = 105: un + nil + pent + ium → unnilpentium, symbol Unp.</p>
      <DataTable rows={systematicNames} columns={[{key:"z",label:"Z",align:"center"},{key:"systematic",label:"Systematic name"},{key:"temp",label:"Temporary symbol",align:"center"},{key:"official",label:"Official name"},{key:"symbol",label:"Symbol",align:"center"}]} />

      <SectionTitle code="R">One-glance comparison and revision</SectionTitle>
      <DataTable rows={[{scheme:"Lavoisier",basis:"Appearance",idea:"Metals versus non-metals",flaw:"No position for metalloids"},{scheme:"Prout",basis:"Atomic weight",idea:"Whole-number multiples of H",flaw:"Many values are non-integral"},{scheme:"Döbereiner",basis:"Atomic weight",idea:"Triads and arithmetic mean",flaw:"Only a few triads"},{scheme:"Chancourtois",basis:"Atomic weight",idea:"16-unit helix",flaw:"Breaks down for heavier elements"},{scheme:"Newlands",basis:"Atomic weight",idea:"Every eighth element repeats",flaw:"Fails after Ca; no gaps"},{scheme:"Lothar Meyer",basis:"Atomic weight",idea:"Atomic-volume periodic wave",flaw:"Primarily descriptive and physical"},{scheme:"Mendeleev",basis:"Atomic weight",idea:"Predictive table with gaps",flaw:"Hydrogen, isotopes and reversed pairs"},{scheme:"Modern",basis:"Atomic number",idea:"Properties periodic in Z",flaw:"Current foundational basis"}]} columns={[{key:"scheme",label:"Scheme"},{key:"basis",label:"Ordering basis"},{key:"idea",label:"Central idea"},{key:"flaw",label:"Principal limitation / status"}]} />
      <DataTable rows={[{aspect:"Ordering property",mendeleev:"Atomic weight",modern:"Atomic number"},{aspect:"Groups",mendeleev:"8 principal groups",modern:"18 IUPAC groups"},{aspect:"Rows",mendeleev:"7 series",modern:"7 periods"},{aspect:"Isotopes",mendeleev:"Problematic",modern:"Same box because Z is identical"},{aspect:"Noble gases",mendeleev:"Added later as zero group",modern:"Built into group 18"},{aspect:"d/f elements",mendeleev:"Mixed into older groups",modern:"Distinct d- and f-block architecture"}]} columns={[{key:"aspect",label:"Aspect"},{key:"mendeleev",label:"Mendeleev’s table"},{key:"modern",label:"Modern table"}]} />
      <div className="mt-6 grid gap-4 md:grid-cols-2"><Note tone="blue"><b>Numbers:</b> 7 periods, 18 groups, 118 elements; period lengths 2, 8, 8, 18, 18, 32, 32.</Note><Note tone="green"><b>Blocks:</b> s = groups 1–2, p = groups 13–18, d = groups 3–12, f = 4f and 5f series.</Note><Note tone="amber"><b>Special physical states:</b> Hg is the liquid metal and Br is the liquid non-metal at ordinary room temperature.</Note><Note tone="red"><b>Anomalous Mendeleev pairs:</b> Ar–K, Co–Ni, Te–I and Th–Pa.</Note></div>
      <div className="mt-7 rounded-2xl border border-emerald-300/20 bg-emerald-400/5 p-5 text-center font-bold leading-7 text-emerald-50">Lavoisier → Prout → Döbereiner → Chancourtois → Newlands → Lothar Meyer → Mendeleev → Moseley → modern atomic-number and electronic-configuration table.</div>
    </article>
  );
}
