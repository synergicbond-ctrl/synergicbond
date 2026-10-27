import type { StageAtom, StageBond, StageLine, StagePoly, V3 } from "./_stage";

/** Shared palette. Cations warm, anions cool, so roles read the same in every scene. */
export const C = {
  teal: "#2fbfae",
  gold: "#f2b13f",
  rose: "#e8607a",
  blue: "#4c9be8",
  violet: "#9a84e6",
  green: "#52c98a",
  steel: "#b7c6cc",
  white: "#f4f1e8",
  ink: "#0b1716",
};

export const SQ2 = Math.SQRT2;
export const SQ3 = Math.sqrt(3);

/* ------------------------------------------------------------- cube bits */

/** Edges of a cube with half-edge `h`, centred on `c`. */
export function cubeEdges(prefix: string, h = 1, c: V3 = [0, 0, 0], dashed = false, opacity = 1): StageLine[] {
  const out: StageLine[] = [];
  const s = [-1, 1];
  let n = 0;
  const P = (x: number, y: number, z: number): V3 => [c[0] + x * h, c[1] + y * h, c[2] + z * h];
  for (const y of s) for (const z of s) out.push({ id: `${prefix}${n++}`, a: P(-1, y, z), b: P(1, y, z), dashed, opacity });
  for (const x of s) for (const z of s) out.push({ id: `${prefix}${n++}`, a: P(x, -1, z), b: P(x, 1, z), dashed, opacity });
  for (const x of s) for (const y of s) out.push({ id: `${prefix}${n++}`, a: P(x, y, -1), b: P(x, y, 1), dashed, opacity });
  return out;
}

export const CORNERS: V3[] = (() => {
  const o: V3[] = [];
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) o.push([x, y, z]);
  return o;
})();

export const FACES: V3[] = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

/** 12 edge centres of the cube (octahedral holes of FCC). */
export const EDGE_CENTRES: V3[] = (() => {
  const o: V3[] = [];
  for (const a of [-1, 1]) for (const b of [-1, 1]) {
    o.push([0, a, b], [a, 0, b], [a, b, 0]);
  }
  return o;
})();

/** 8 tetrahedral holes of FCC; `alt` is the alternate half (4 sites) used by zinc blende and diamond. */
export const TETRA_ALL: V3[] = (() => {
  const o: V3[] = [];
  for (const x of [-0.5, 0.5]) for (const y of [-0.5, 0.5]) for (const z of [-0.5, 0.5]) o.push([x, y, z]);
  return o;
})();
export const TETRA_ALT: V3[] = TETRA_ALL.filter(([x, y, z]) => x * y * z > 0);
export const TETRA_OTHER: V3[] = TETRA_ALL.filter(([x, y, z]) => x * y * z < 0);

export function atomsAt(prefix: string, pts: V3[], r: number, color: string, extra: Partial<StageAtom> = {}): StageAtom[] {
  return pts.map((p, i) => ({ id: `${prefix}${i}`, p, r, color, ...extra }));
}

/** Bonds between points of two sets that are within `d ± tol`. */
export function bondsBetween(prefix: string, a: V3[], b: V3[], d: number, tol = 0.01, r = 0.05, color?: string): StageBond[] {
  const out: StageBond[] = [];
  let n = 0;
  for (const p of a) for (const q of b) {
    const dist = Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);
    if (Math.abs(dist - d) < tol) out.push({ id: `${prefix}${n++}`, a: p, b: q, r, color });
  }
  return out;
}

/* ------------------------------------------------------- neighbour shells */

export type Shell = { n: number; d: number };

/** Distances (in units of the cubic edge a) and counts of neighbour shells around one lattice point. */
export function neighbourShells(kind: "sc" | "bcc" | "fcc", count = 10): Shell[] {
  const pts: V3[] = [];
  const R = 4;
  for (let i = -R; i <= R; i++) for (let j = -R; j <= R; j++) for (let k = -R; k <= R; k++) {
    if (kind === "sc") pts.push([i, j, k]);
    if (kind === "bcc") pts.push([i, j, k], [i + 0.5, j + 0.5, k + 0.5]);
    if (kind === "fcc") pts.push([i, j, k], [i + 0.5, j + 0.5, k], [i + 0.5, j, k + 0.5], [i, j + 0.5, k + 0.5]);
  }
  const map = new Map<number, number>();
  for (const p of pts) {
    const d2 = Math.round((p[0] ** 2 + p[1] ** 2 + p[2] ** 2) * 4);
    if (d2 === 0) continue;
    map.set(d2, (map.get(d2) ?? 0) + 1);
  }
  return [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .slice(0, count)
    .map(([d2, n]) => ({ d: Math.sqrt(d2 / 4), n }));
}

/** Lattice points of a kind within a given neighbour distance, as scene coordinates (a = 2). */
export function latticePoints(kind: "sc" | "bcc" | "fcc", reach: number): { p: V3; d: number }[] {
  const out: { p: V3; d: number }[] = [];
  const R = Math.ceil(reach) + 1;
  const push = (x: number, y: number, z: number) => {
    const d = Math.hypot(x, y, z);
    if (d <= reach + 1e-6) out.push({ p: [x * 2, y * 2, z * 2], d });
  };
  for (let i = -R; i <= R; i++) for (let j = -R; j <= R; j++) for (let k = -R; k <= R; k++) {
    push(i, j, k);
    if (kind === "bcc") push(i + 0.5, j + 0.5, k + 0.5);
    if (kind === "fcc") {
      push(i + 0.5, j + 0.5, k);
      push(i + 0.5, j, k + 0.5);
      push(i, j + 0.5, k + 0.5);
    }
  }
  return out;
}

/* ------------------------------------------------------------ hexagonal */

/** Atom positions of the HCP conventional cell, sphere radius r (so a = 2r, c = 2a√(2/3)). */
export function hcpCell(r: number) {
  const a = 2 * r;
  const c = 2 * a * Math.sqrt(2 / 3);
  const corner: V3[] = [];
  const face: V3[] = [];
  const inner: V3[] = [];
  for (const sy of [-1, 1]) {
    for (let k = 0; k < 6; k++) corner.push([a * Math.cos((k * Math.PI) / 3), (sy * c) / 2, a * Math.sin((k * Math.PI) / 3)]);
    face.push([0, (sy * c) / 2, 0]);
  }
  for (const phi of [Math.PI / 6, (5 * Math.PI) / 6, (3 * Math.PI) / 2]) inner.push([(a / SQ3) * Math.cos(phi), 0, (a / SQ3) * Math.sin(phi)]);
  return { a, c, corner, face, inner };
}

export function hexPrismEdges(prefix: string, a: number, c: number, dashed = false): StageLine[] {
  const o: StageLine[] = [];
  let n = 0;
  for (const sy of [-1, 1]) for (let k = 0; k < 6; k++) {
    const t0 = (k * Math.PI) / 3;
    const t1 = ((k + 1) * Math.PI) / 3;
    o.push({ id: `${prefix}${n++}`, dashed, a: [a * Math.cos(t0), (sy * c) / 2, a * Math.sin(t0)], b: [a * Math.cos(t1), (sy * c) / 2, a * Math.sin(t1)] });
  }
  for (let k = 0; k < 6; k++) {
    const t = (k * Math.PI) / 3;
    o.push({ id: `${prefix}${n++}`, dashed, a: [a * Math.cos(t), -c / 2, a * Math.sin(t)], b: [a * Math.cos(t), c / 2, a * Math.sin(t)] });
  }
  return o;
}

/** Wurtzite: S in HCP positions, Zn in half the tetrahedral holes; hexagonal prism with 6 ZnS. Ideal c/a, u = 3/8. */
export function wurtziteCell(a: number) {
  const c = a * Math.sqrt(8 / 3);
  const u = 3 / 8;
  const ex: V3 = [a, 0, 0];
  const ey: V3 = [-a / 2, 0, (a * SQ3) / 2];
  const ez: V3 = [0, c, 0];
  const to = (f: V3): V3 => [f[0] * ex[0] + f[1] * ey[0] + f[2] * ez[0], f[0] * ex[1] + f[1] * ey[1] + f[2] * ez[1] - c / 2, f[0] * ex[2] + f[1] * ey[2] + f[2] * ez[2]];
  const zn: V3[] = [];
  const s: V3[] = [];
  const basisZn: V3[] = [
    [1 / 3, 2 / 3, 0],
    [2 / 3, 1 / 3, 0.5],
  ];
  const basisS: V3[] = [
    [1 / 3, 2 / 3, u],
    [2 / 3, 1 / 3, 0.5 + u],
  ];
  const inside = (p: V3) => {
    const r = Math.hypot(p[0], p[2]);
    if (p[1] < -c / 2 - 1e-6 || p[1] > c / 2 + 1e-6) return false;
    // regular hexagon with circumradius a (vertices on angles 0, 60, …)
    for (let k = 0; k < 6; k++) {
      const ang = (k * Math.PI) / 3 + Math.PI / 6;
      if (p[0] * Math.cos(ang) + p[2] * Math.sin(ang) > (a * SQ3) / 2 + 1e-6) return false;
    }
    return r <= a + 1e-6;
  };
  for (let i = -3; i <= 3; i++) for (let j = -3; j <= 3; j++) for (let k = -1; k <= 1; k++) {
    for (const b of basisZn) {
      const p = to([b[0] + i, b[1] + j, b[2] + k]);
      if (inside(p)) zn.push(p);
    }
    for (const b of basisS) {
      const p = to([b[0] + i, b[1] + j, b[2] + k]);
      if (inside(p)) s.push(p);
    }
  }
  const dedupe = (pts: V3[]) => pts.filter((p, i) => pts.findIndex((q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]) < 1e-4) === i);
  return { a, c, zn: dedupe(zn), s: dedupe(s) };
}

/* ------------------------------------------------- coordination polyhedra */

export type Poly = { key: string; name: string; cn: number; k: number; verts: V3[]; faces: number[][]; range: string; example: string };

export function polyhedra(): Poly[] {
  const t = 1 / SQ3;
  const tri: V3[] = [0, 1, 2].map((i) => [Math.cos((2 * Math.PI * i) / 3), 0, Math.sin((2 * Math.PI * i) / 3)] as V3);
  const octV: V3[] = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];
  const octF: number[][] = [];
  for (const x of [0, 1]) for (const y of [2, 3]) for (const z of [4, 5]) octF.push([x, y, z]);
  const cubV: V3[] = [];
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) cubV.push([x * t, y * t, z * t]);
  const idx = (cond: (v: V3) => boolean) => cubV.map((v, i) => (cond(v) ? i : -1)).filter((i) => i >= 0);
  const quad = (ids: number[], axis: 0 | 1 | 2): number[] => {
    // order the four corners around the face
    const others = [0, 1, 2].filter((i) => i !== axis) as [number, number];
    const c = ids.map((i) => cubV[i]);
    const cx = c.reduce((s, v) => s + v[others[0]], 0) / 4;
    const cy = c.reduce((s, v) => s + v[others[1]], 0) / 4;
    return [...ids].sort((p, q) => Math.atan2(cubV[p][others[1]] - cy, cubV[p][others[0]] - cx) - Math.atan2(cubV[q][others[1]] - cy, cubV[q][others[0]] - cx));
  };
  const cubF: number[][] = [];
  for (const axis of [0, 1, 2] as const) for (const sgn of [-1, 1]) cubF.push(quad(idx((v) => Math.sign(v[axis]) === sgn), axis));
  return [
    { key: "lin", name: "Linear", cn: 2, k: 2, verts: [[1, 0, 0], [-1, 0, 0]], faces: [], range: "below 0.155", example: "CO₂ (molecular), Cu₂O around Cu⁺" },
    { key: "tri", name: "Trigonal planar", cn: 3, k: SQ3, verts: tri, faces: [[0, 1, 2]], range: "0.155 – 0.225", example: "B₂O₃" },
    { key: "tet", name: "Tetrahedral", cn: 4, k: Math.sqrt(8 / 3), verts: [[t, t, t], [t, -t, -t], [-t, t, -t], [-t, -t, t]], faces: [[0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]], range: "0.225 – 0.414", example: "ZnS" },
    { key: "oct", name: "Octahedral", cn: 6, k: SQ2, verts: octV, faces: octF, range: "0.414 – 0.732", example: "NaCl" },
    { key: "cub", name: "Cubic", cn: 8, k: 2 / SQ3, verts: cubV, faces: cubF, range: "0.732 – 1.000", example: "CsCl" },
  ];
}

/* --------------------------------------------------------- ionic crystals */

export type IonicKey = "nacl" | "cscl" | "zns" | "wurtzite" | "caf2" | "li2o";

export type IonicStage = { say: string; atoms: StageAtom[]; bonds?: StageBond[]; polys?: StagePoly[] };

export type IonicDef = {
  key: IonicKey;
  name: string;
  formula: string;
  cell: "cube" | "hex";
  stages: IonicStage[];
  count: { cation: string; anion: string; z: string };
  cn: string;
  ratio: string;
  note: string;
  examples: string;
  edge: string;
};

export function ionicStructures(): Record<IonicKey, IonicDef> {
  const rA = 0.44;
  const rC = 0.27;
  const fcc = [...CORNERS, ...FACES];

  const nacl: IonicDef = {
    key: "nacl",
    name: "Rock salt",
    formula: "NaCl",
    cell: "cube",
    stages: [
      { say: "**Step 1.** Cl⁻ ions (the large ones) form a face-centred cubic array: 8 corners and 6 face centres.", atoms: atomsAt("cl", fcc, rA, C.teal) },
      { say: "**Step 2.** Every octahedral hole of that array is filled by Na⁺: the 12 edge centres and the body centre.", atoms: atomsAt("na", [...EDGE_CENTRES, [0, 0, 0]], rC, C.gold) },
      {
        say: "**Step 3.** Each Na⁺ now has 6 Cl⁻ neighbours at the corners of an octahedron, and each Cl⁻ has 6 Na⁺. Coordination is 6 : 6.",
        atoms: [],
        bonds: bondsBetween("nb", [[0, 0, 0]], FACES, 1, 0.02, 0.05, C.white),
        polys: [{ id: "oct", verts: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]], faces: [[0, 2, 4], [0, 2, 5], [0, 3, 4], [0, 3, 5], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5]], color: C.gold, opacity: 0.22 }],
      },
    ],
    count: { cation: "12 × ¼ + 1 = 4 Na⁺", anion: "8 × ⅛ + 6 × ½ = 4 Cl⁻", z: "4 formula units" },
    cn: "6 : 6",
    ratio: "0.52",
    edge: "a = 2(r₊ + r₋)",
    note: "Cl⁻ is cubic close packed; Na⁺ fills all octahedral holes.",
    examples: "LiCl, KBr, MgO, CaO, AgCl, NiO",
  };

  const cscl: IonicDef = {
    key: "cscl",
    name: "Caesium chloride",
    formula: "CsCl",
    cell: "cube",
    stages: [
      { say: "**Step 1.** Cl⁻ ions sit at the 8 corners of a simple cube.", atoms: atomsAt("cl", CORNERS, 0.34, C.teal) },
      { say: "**Step 2.** The large Cs⁺ ion fits into the cube's body centre: it is the only site with 8 equal neighbours.", atoms: atomsAt("cs", [[0, 0, 0]], 0.4, C.gold) },
      {
        say: "**Step 3.** Cs⁺ is surrounded by 8 Cl⁻ at the corners of a cube; each Cl⁻ is likewise surrounded by 8 Cs⁺ in the neighbouring cells. Coordination is 8 : 8.",
        atoms: [],
        bonds: bondsBetween("cb", [[0, 0, 0]], CORNERS, SQ3, 0.02, 0.04, C.white),
        polys: [{ id: "cube", verts: CORNERS.map(([x, y, z]) => [x, y, z] as V3), faces: [[0, 1, 3, 2], [4, 5, 7, 6], [0, 1, 5, 4], [2, 3, 7, 6], [0, 2, 6, 4], [1, 3, 7, 5]], color: C.gold, opacity: 0.18 }],
      },
    ],
    count: { cation: "1 Cs⁺ (body centre)", anion: "8 × ⅛ = 1 Cl⁻", z: "1 formula unit" },
    cn: "8 : 8",
    ratio: "0.93",
    edge: "√3 a = 2(r₊ + r₋)",
    note: "This is a simple cubic arrangement of two kinds of ion, not BCC: the centre atom differs from the corners.",
    examples: "CsBr, CsI, TlCl, NH₄Cl",
  };

  const zns: IonicDef = {
    key: "zns",
    name: "Zinc blende",
    formula: "ZnS",
    cell: "cube",
    stages: [
      { say: "**Step 1.** S²⁻ ions form a face-centred cubic array, as in NaCl.", atoms: atomsAt("s", fcc, 0.42, C.teal) },
      { say: "**Step 2.** The array has 8 tetrahedral holes. Zn²⁺ occupies only 4 of them, alternately, so each Zn²⁺ is bonded to 4 S²⁻.", atoms: atomsAt("zn", TETRA_ALT, 0.24, C.gold) },
      {
        say: "**Step 3.** Bonds show the tetrahedral coordination. The other 4 holes stay empty, so the ratio Zn : S = 4 : 4 = 1 : 1 gives ZnS.",
        atoms: [],
        bonds: bondsBetween("zb", TETRA_ALT, fcc, SQ3 / 2, 0.02, 0.05, C.white),
      },
    ],
    count: { cation: "4 Zn²⁺ (inside the cell)", anion: "8 × ⅛ + 6 × ½ = 4 S²⁻", z: "4 formula units" },
    cn: "4 : 4",
    ratio: "0.40",
    edge: "Zn–S = √3 a / 4",
    note: "Cubic close packed anions with half the tetrahedral holes filled. Diamond has the same geometry with all atoms alike.",
    examples: "ZnS, CuCl, CuBr, CuI, AgI, BeS",
  };

  const caf2: IonicDef = {
    key: "caf2",
    name: "Fluorite",
    formula: "CaF₂",
    cell: "cube",
    stages: [
      { say: "**Step 1.** Ca²⁺ ions form a face-centred cubic array: 4 per cell.", atoms: atomsAt("ca", fcc, 0.44, C.gold) },
      { say: "**Step 2.** F⁻ ions fill all 8 tetrahedral holes: 8 per cell, twice the number of Ca²⁺.", atoms: atomsAt("f", TETRA_ALL, 0.24, C.teal) },
      {
        say: "**Step 3.** Each F⁻ is bonded to 4 Ca²⁺ (a tetrahedron) and each Ca²⁺ to 8 F⁻ (a cube). Coordination is 8 : 4.",
        atoms: [],
        bonds: bondsBetween("fb", TETRA_ALL, fcc, SQ3 / 2, 0.02, 0.045, C.white),
      },
    ],
    count: { cation: "8 × ⅛ + 6 × ½ = 4 Ca²⁺", anion: "8 F⁻ (all inside)", z: "4 formula units" },
    cn: "Ca²⁺ 8 : F⁻ 4",
    ratio: "0.75",
    edge: "Ca–F = √3 a / 4",
    note: "The large ion is the cation here; that makes the cation's coordination number the larger one.",
    examples: "SrF₂, BaCl₂, UO₂, ThO₂, CdF₂",
  };

  const li2o: IonicDef = {
    key: "li2o",
    name: "Anti-fluorite",
    formula: "Li₂O",
    cell: "cube",
    stages: [
      { say: "**Step 1.** O²⁻ ions (the large ones) form the face-centred cubic array: 4 per cell.", atoms: atomsAt("o", fcc, 0.44, C.teal) },
      { say: "**Step 2.** Li⁺ ions fill all 8 tetrahedral holes: 8 per cell.", atoms: atomsAt("li", TETRA_ALL, 0.24, C.gold) },
      {
        say: "**Step 3.** Roles are swapped relative to fluorite: now the anion has coordination 8 and the cation 4. Coordination is 4 : 8.",
        atoms: [],
        bonds: bondsBetween("lb", TETRA_ALL, fcc, SQ3 / 2, 0.02, 0.045, C.white),
      },
    ],
    count: { cation: "8 Li⁺ (all inside)", anion: "8 × ⅛ + 6 × ½ = 4 O²⁻", z: "4 formula units" },
    cn: "Li⁺ 4 : O²⁻ 8",
    ratio: "0.34",
    edge: "Li–O = √3 a / 4",
    note: "Same lattice as CaF₂ with cation and anion exchanged, hence the name.",
    examples: "Na₂O, K₂O, Rb₂O, Na₂S",
  };

  const w = wurtziteCell(1.5);
  const wz: IonicDef = {
    key: "wurtzite",
    name: "Wurtzite",
    formula: "ZnS",
    cell: "hex",
    stages: [
      { say: "**Step 1.** S²⁻ ions are hexagonally close packed: layers repeat A B A B.", atoms: w.s.map((p, i) => ({ id: `ws${i}`, p, r: 0.44, color: C.teal })) },
      { say: "**Step 2.** Zn²⁺ occupies half of the tetrahedral holes, always pointing the same way.", atoms: w.zn.map((p, i) => ({ id: `wz${i}`, p, r: 0.28, color: C.gold })) },
      {
        say: "**Step 3.** Each Zn²⁺ is tetrahedrally bonded to 4 S²⁻ and vice versa: coordination 4 : 4, same as zinc blende but with ABAB instead of ABC stacking.",
        atoms: [],
        bonds: bondsBetween("wb", w.zn, w.s, Math.sqrt(3 / 8) * w.a, 0.02, 0.04, C.white),
      },
    ],
    count: { cation: "6 Zn²⁺ in the hexagonal cell", anion: "6 S²⁻ in the hexagonal cell", z: "6 formula units" },
    cn: "4 : 4",
    ratio: "0.40",
    edge: "c/a = 1.633 (ideal)",
    note: "Polymorph of ZnS: same coordination as zinc blende, hexagonal instead of cubic close packing.",
    examples: "ZnO, ZnS, BeO, CdS, AgI",
  };

  return { nacl, cscl, zns, wurtzite: wz, caf2, li2o };
}
