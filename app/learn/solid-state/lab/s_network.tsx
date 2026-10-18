"use client";

import { useMemo, useState } from "react";
import { Stage, type CameraPose, type StageAtom, type StageBond, type StageLine, type StagePoly, type V3 } from "./_stage";
import { C, CORNERS, FACES, SQ3, TETRA_ALL, bondsBetween, cubeEdges } from "./_geom";
import { Btn, Chapter, Derivation, Facts, KeyIdea, Narration, P, Rich, Slider, Tabs, Traps, Worked, useTour } from "./_ui";

const PANEL = "radial-gradient(120% 90% at 50% 18%, #17433f 0%, #0c1f1e 52%, #060f0f 100%)";
void PANEL;

/* ------------------------------------- icosahedron (B12) and C60 in 3D */

const PHI = (1 + Math.sqrt(5)) / 2;

function uniquePts(pts: V3[]): V3[] {
  const out: V3[] = [];
  for (const p of pts) if (!out.some((q) => Math.hypot(q[0] - p[0], q[1] - p[1], q[2] - p[2]) < 1e-6)) out.push(p);
  return out;
}

/** all sign combinations and the three cyclic permutations of (a, b, c) */
function cyc(a: number, b: number, c: number): V3[] {
  const out: V3[] = [];
  for (const sa of [1, -1]) for (const sb of [1, -1]) for (const sc of [1, -1]) {
    const v: V3 = [a * sa, b * sb, c * sc];
    out.push(v, [v[1], v[2], v[0]], [v[2], v[0], v[1]]);
  }
  return uniquePts(out);
}

const dist3 = (p: V3, q: V3) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);
const dot3 = (p: V3, q: V3) => p[0] * q[0] + p[1] * q[1] + p[2] * q[2];

/** Vertices (indices) of the face nearest to a direction, ordered round the axis. */
function faceAround(pts: V3[], axis: V3, n: number): number[] {
  const idx = pts.map((_, i) => i).sort((i, j) => dot3(pts[j], axis) - dot3(pts[i], axis)).slice(0, n);
  const len = Math.hypot(axis[0], axis[1], axis[2]);
  const k: V3 = [axis[0] / len, axis[1] / len, axis[2] / len];
  const ref: V3 = Math.abs(k[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
  const u0: V3 = [k[1] * ref[2] - k[2] * ref[1], k[2] * ref[0] - k[0] * ref[2], k[0] * ref[1] - k[1] * ref[0]];
  const ul = Math.hypot(u0[0], u0[1], u0[2]);
  const u: V3 = [u0[0] / ul, u0[1] / ul, u0[2] / ul];
  const v: V3 = [k[1] * u[2] - k[2] * u[1], k[2] * u[0] - k[0] * u[2], k[0] * u[1] - k[1] * u[0]];
  return idx.sort((i, j) => Math.atan2(dot3(pts[i], v), dot3(pts[i], u)) - Math.atan2(dot3(pts[j], v), dot3(pts[j], u)));
}

function edgesOf(pts: V3[], d: number): [number, number][] {
  const out: [number, number][] = [];
  for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) if (Math.abs(dist3(pts[i], pts[j]) - d) < 1e-3) out.push([i, j]);
  return out;
}

type IMode = "bonds" | "faces" | "carbon";

function IcosahedronLab() {
  const [mode, setMode] = useState<IMode>("bonds");
  const [faces, setFaces] = useState(20);
  const k = 0.95;
  const pts = useMemo(() => cyc(0, 1, PHI).map((p) => [p[0] * k, p[1] * k, p[2] * k] as V3), []);
  const edges = useMemo(() => edgesOf(pts, 2 * k), [pts]);
  const tri = useMemo(() => {
    const out: number[][] = [];
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) for (let l = j + 1; l < pts.length; l++) {
      if (Math.abs(dist3(pts[i], pts[j]) - 2 * k) < 1e-3 && Math.abs(dist3(pts[j], pts[l]) - 2 * k) < 1e-3 && Math.abs(dist3(pts[i], pts[l]) - 2 * k) < 1e-3) out.push([i, j, l]);
    }
    return out;
  }, [pts]);
  const nb = useMemo(() => edges.filter(([i, j]) => i === 0 || j === 0).map(([i, j]) => (i === 0 ? j : i)), [edges]);
  const atoms: StageAtom[] = pts.map((p, i) => ({
    id: `ic${i}`, p, r: mode === "carbon" && i === 0 ? 0.36 : 0.3,
    color: mode === "carbon" && i === 0 ? C.rose : mode === "bonds" && i === 0 ? C.white : mode === "bonds" && nb.includes(i) ? "#ffd98a" : "#7fa4d6",
    glow: mode === "bonds" && (i === 0 || nb.includes(i)),
  }));
  const bonds: StageBond[] = edges.map(([i, j], n) => ({ id: `ie${n}`, a: pts[i], b: pts[j], r: 0.04, color: mode === "bonds" && (i === 0 || j === 0) ? "#fff1b8" : "#cfe0e8", opacity: mode === "faces" ? 0.5 : 1 }));
  const polys: StagePoly[] = mode === "faces" ? tri.slice(0, faces).map((t, n) => ({ id: `if${n}`, verts: t.map((i) => pts[i]), faces: [[0, 1, 2]], color: n % 2 ? C.teal : C.violet, opacity: 0.38 })) : [];
  const says: Record<IMode, string> = {
    bonds: "**B₁₂ icosahedron.** 12 boron atoms at the corners of a regular solid. The white atom is bonded to **5** neighbours (gold): every vertex has 5 neighbours, so edges = 12 × 5 ÷ 2 = **30**. These are three-centre two-electron bonds because boron is electron deficient.",
    faces: `**Faces.** All faces are equilateral triangles. ${faces} of 20 are shown. Euler's rule checks the count: V − E + F = 12 − 30 + ${faces === 20 ? 20 : faces} ${faces === 20 ? "= **2** ✓" : "(slide to 20 for the full solid)"}.`,
    carbon: "**B₁₁C icosahedron.** In boron carbide one corner is carbon (rose) instead of boron. Joined by a C–B–C chain (1 B + 2 C), the cell contains B₁₁C + CBC = **B₁₂C₃ = B₄C**.",
  };
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <Stage atoms={atoms} bonds={bonds} polys={polys} camera={{ key: `ico-${mode}`, az: 0.6, el: 0.35, dist: 7.6 }} autoRotate floorY={-3.2} height={440} label={`3D model of the B12 icosahedron: ${mode}`} hint="drag to look around" />
        <Narration k={`${mode}-${faces}`}>
          <Rich text={says[mode]} />
        </Narration>
      </div>
      <div className="space-y-4">
        <Tabs label="View" value={mode} onChange={setMode} items={[["bonds", "Atoms & bonds"], ["faces", "20 faces"], ["carbon", "B₁₁C"]] as const} />
        {mode === "faces" && <Slider label="Triangular faces shown" value={faces} onChange={setFaces} min={0} max={20} step={1} show={`${faces} / 20`} />}
        <Facts cols={2} items={[["Vertices (B)", "12"], ["Edges (B–B)", "30"], ["Faces", "20 triangles"], ["Neighbours per B", "5"]]} />
      </div>
    </div>
  );
}

function C60Lab() {
  const [pent, setPent] = useState(12);
  const [hex, setHex] = useState(20);
  const sc = 0.5;
  const pts = useMemo(() => uniquePts([...cyc(0, 1, 3 * PHI), ...cyc(1, 2 + PHI, 2 * PHI), ...cyc(PHI, 2, 2 * PHI + 1)]).map((p) => [p[0] * sc, p[1] * sc, p[2] * sc] as V3), []);
  const edges = useMemo(() => edgesOf(pts, 2 * sc), [pts]);
  const pentFaces = useMemo(() => cyc(0, 1, PHI).map((a) => faceAround(pts, a, 5)), [pts]);
  const hexFaces = useMemo(() => uniquePts([...cyc(1, 1, 1).filter((v) => v[0] !== 0), ...cyc(0, 1 / PHI, PHI)]).map((a) => faceAround(pts, a, 6)), [pts]);
  const inPent = new Set(pentFaces.slice(0, pent).flat());
  const atoms: StageAtom[] = pts.map((p, i) => ({ id: `cc${i}`, p, r: 0.13, color: inPent.has(i) ? C.rose : "#b9c7cc", glow: inPent.has(i) }));
  const bonds: StageBond[] = edges.map(([i, j], n) => ({ id: `ce${n}`, a: pts[i], b: pts[j], r: 0.035, color: "#e3ecef" }));
  const polys: StagePoly[] = [
    ...pentFaces.slice(0, pent).map((f, n) => ({ id: `cp${n}`, verts: f.map((i) => pts[i]), faces: [[0, 1, 2, 3, 4]], color: C.rose, opacity: 0.55 })),
    ...hexFaces.slice(0, hex).map((f, n) => ({ id: `ch${n}`, verts: f.map((i) => pts[i]), faces: [[0, 1, 2, 3, 4, 5]], color: C.teal, opacity: 0.28 })),
  ];
  const F = pent + hex;
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <Stage atoms={atoms} bonds={bonds} polys={polys} camera={{ key: "c60", az: 0.5, el: 0.3, dist: 9.6 }} autoRotate floorY={-3.4} height={460} label="3D model of the C60 molecule, a truncated icosahedron" hint="drag to look around" />
        <Narration k={`${pent}-${hex}`}>
          <Rich text={`**C₆₀ is a truncated icosahedron:** ${pts.length} carbon atoms, ${edges.length} bonds. Pentagons (rose) **${pent} / 12**, hexagons (teal) **${hex} / 20**. Faces shown: ${F}. With all faces, V − E + F = ${pts.length} − ${edges.length} + 32 = **${pts.length - edges.length + 32}**. Each atom belongs to **1 pentagon and 2 hexagons**, so no two pentagons ever touch.`} />
        </Narration>
      </div>
      <div className="space-y-4">
        <Slider label="Pentagons shown" value={pent} onChange={setPent} min={0} max={12} step={1} show={`${pent} / 12`} />
        <Slider label="Hexagons shown" value={hex} onChange={setHex} min={0} max={20} step={1} show={`${hex} / 20`} />
        <div className="flex gap-2">
          <Btn onClick={() => { setPent(12); setHex(0); }}>Pentagons only</Btn>
          <Btn onClick={() => { setPent(0); setHex(20); }}>Hexagons only</Btn>
          <Btn onClick={() => { setPent(12); setHex(20); }}>Both</Btn>
        </div>
        <Facts cols={2} items={[["Carbon atoms V", `${pts.length}`], ["C–C bonds E", `${edges.length}`], ["Faces F", "12 + 20 = 32"], ["Atoms per cell (fcc)", "4 molecules"]]} />
      </div>
    </div>
  );
}

/* ------------------------------------------- diamond = two fcc lattices */

const DT_STEPS = [
  "**Lattice 1.** Start with an **fcc lattice**: atoms at the 8 corners and 6 face centres of the cube (grey). That is **4 atoms** per cell (8 × ⅛ + 6 × ½). Nothing sits inside yet.",
  "**Lattice 2.** Take an **exact copy** of this fcc cell (gold). It is identical: same size, same orientation. For now it floats off to one side.",
  "**Slide it along the body diagonal.** Move the copy by **¼ of the long diagonal**, that is (a/4, a/4, a/4), towards the first lattice. The gold arrow is this shift; the copy now interpenetrates the first lattice.",
  "**Two fcc lattices, interpenetrating.** Four atoms of the gold lattice now lie **inside** the grey cube, exactly in four of the eight tetrahedral holes (the other gold atoms belong to neighbouring cells, shown faint).",
  "**Bonds.** Every gold atom sits at the centre of a tetrahedron of **4 grey atoms** (one corner and three face centres), 154 pm apart in diamond. The distance is a quarter of the body diagonal: **√3a/4**. Every grey atom has 4 gold neighbours too, so the coordination number is 4 for all atoms.",
  "**The result.** 4 grey + 4 gold = **8 atoms per cell**. If both lattices are carbon this is **diamond** (also Si, Ge, grey tin); if one lattice is Zn and the other S it is **zinc blende**. The lattice (Bravais) is still **fcc**, but each lattice point carries **two atoms**: one at (0, 0, 0) and one at (¼, ¼, ¼).",
];

function DiamondTwoFcc() {
  const tour = useTour(5, 4200);
  const step = tour.step;
  const [kind, setKind] = useState<"diamond" | "zns">("diamond");
  const fcc: V3[] = [...CORNERS, ...FACES];
  const off = 0.5; // quarter of the body diagonal in cell units (cell edge = 2)
  const far = 1.9; // where lattice 2 waits before it slides in
  const sh = (p: V3, t: number): V3 => [p[0] - t, p[1] - t, p[2] - t];
  const t = step <= 1 ? -far + off : off; // negative shift = move to the +x+y+z side
  const inCell = (p: V3) => p.every((c) => Math.abs(c) < 1.001);
  const bAll = fcc.map((p) => sh(p, t));
  const bFinal = fcc.map((p) => sh(p, off));
  const bInside = bFinal.filter(inCell);
  const lastGrey = step === 5 && kind === "diamond" ? C.gold : "#8da4ad";
  const greyCol = step === 5 && kind === "zns" ? C.blue : lastGrey;
  const goldCol = C.gold;
  const atoms: StageAtom[] = [
    ...fcc.map((p, i) => ({ id: `A${i}`, p, r: 0.3, color: greyCol, opacity: step === 4 ? 0.55 : 1 })),
    ...bAll.map((p, i) => {
      const inside = inCell(bFinal[i]);
      return { id: `B${i}`, p, r: 0.3, color: goldCol, scale: step >= 1 ? 1 : 0, opacity: step <= 2 ? 1 : inside ? 1 : step >= 4 ? 0 : 0.28, glow: step === 4 && inside };
    }),
  ];
  const bonds: StageBond[] = [
    ...(step === 2 ? [{ id: "shift", a: [1, 1, 1] as V3, b: [off, off, off] as V3, r: 0.07, color: "#fff1b8" }] : []),
    ...(step >= 4 ? bondsBetween("bd", bInside, fcc, SQ3 / 2, 0.02, 0.06, C.white) : []),
  ];
  const polys: StagePoly[] = [];
  if (step === 4) polys.push({ id: "tet", verts: [[0.5, 0.5, 0.5], [1, 1, 1], [1, 0, 0], [0, 1, 0], [0, 0, 1]] as V3[], faces: [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]], color: C.gold, opacity: 0.22 });
  const edges = useMemo(() => cubeEdges("dt", 1, [0, 0, 0], true, 0.5), []);
  const cams: CameraPose[] = [
    { key: "dt0", az: 0.7, el: 0.4, dist: 9.2 },
    { key: "dt1", az: 0.7, el: 0.35, dist: 12.5, target: [0.9, 0.9, 0.9] },
    { key: "dt2", az: 0.9, el: 0.3, dist: 11.5, target: [0.5, 0.5, 0.5] },
    { key: "dt3", az: 0.6, el: 0.4, dist: 11 },
    { key: "dt4", az: 1.05, el: 0.28, dist: 8.2, target: [0.5, 0.5, 0.5] },
    { key: "dt5", az: 0.7, el: 0.45, dist: 9.6 },
  ];
  return (
    <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
      <div>
        <div className="text-sm font-bold tracking-[0.14em] text-[var(--accent)]">TWO FCC LATTICES MAKE DIAMOND</div>
        <p className="mt-1 max-w-3xl text-[15px] leading-7 text-[var(--text-muted)]">
          From your notes: the diamond structure is <b>two interpenetrating fcc lattices displaced by ¼ of the long (body) diagonal</b>, the second starting at (¼, ¼, ¼). Watch it happen.
        </p>
      </div>
      <Stage atoms={atoms} bonds={bonds} lines={edges} polys={polys} camera={cams[step]} autoRotate={step === 0 || step === 5} floorY={-2.2} height={500} label="Animation: two fcc lattices combine to give the diamond structure" hint="drag to look around" />
      <Narration k={`${step}-${kind}`}>
        <Rich text={DT_STEPS[step]} />
      </Narration>
      <div className="flex flex-wrap items-center gap-3">
        <Btn primary onClick={tour.play}>▶ Play the animation</Btn>
        <Btn onClick={() => tour.set(Math.max(0, step - 1))}>◀ Back</Btn>
        <Btn onClick={() => tour.set(Math.min(5, step + 1))}>Next ▶</Btn>
        <span className="text-sm text-[var(--text-muted)]">Step {step + 1} of 6</span>
        <div className="ml-auto">
          <Tabs label="Final colours" value={kind} onChange={setKind} items={[["diamond", "Same atom: diamond"], ["zns", "Two atoms: zinc blende"]] as const} />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ graphite lab */

type Atom2 = { p: [number, number]; sub: "A" | "B" };

/** One graphene sheet as honeycomb atoms around a ring centre; d is the C–C length in scene units. */
function sheet(R: number, d: number): Atom2[] {
  const out: Atom2[] = [];
  const a1: [number, number] = [SQ3 * d, 0];
  const a2: [number, number] = [(SQ3 * d) / 2, 1.5 * d];
  const c0: [number, number] = [(SQ3 * d) / 2, d / 2];
  for (let i = -7; i <= 7; i++) {
    for (let j = -7; j <= 7; j++) {
      const x = i * a1[0] + j * a2[0];
      const z = i * a1[1] + j * a2[1];
      for (const [dx, dz, sub] of [[0, 0, "A"], [0, d, "B"]] as const) {
        const px = x + dx - c0[0];
        const pz = z + dz - c0[1];
        if (Math.hypot(px, pz) <= R) out.push({ p: [px, pz], sub });
      }
    }
  }
  return out;
}

type GMode = "layer" | "stack" | "slide";

function GraphiteLab() {
  const [mode, setMode] = useState<GMode>("layer");
  const [pull, setPull] = useState(0);
  const [slide, setSlide] = useState(0);
  const d = 0.78;
  const base = useMemo(() => sheet(2.55, d), []);
  const gap = 2.36 * d * (1 + pull);
  const nLayers = mode === "layer" ? 1 : mode === "stack" ? 3 : 2;
  const layers = Array.from({ length: nLayers }, (_, k) => k);
  const shiftOf = (k: number): [number, number] => [k % 2 === 1 ? 0 : 0, k % 2 === 1 ? d : 0];
  const slideX = (k: number) => (mode === "slide" && k === 1 ? slide * SQ3 * d * 1.5 : 0);
  const ptsOf = (k: number): V3[] => {
    const [sx, sz] = shiftOf(k);
    const y = (k - (nLayers - 1) / 2) * gap;
    return base.map(({ p }) => [p[0] + sx + slideX(k), y, p[1] + sz] as V3);
  };
  const col = (k: number) => (k % 2 === 0 ? "#9db4bc" : C.gold);
  const atoms: StageAtom[] = layers.flatMap((k) => ptsOf(k).map((p, i) => ({ id: `g${k}-${i}`, p, r: 0.17, color: col(k) })));
  const bonds: StageBond[] = layers.flatMap((k) => {
    const pts = ptsOf(k);
    return bondsBetween(`gb${k}-`, pts, pts, d, 0.02, 0.04, "#e8f1ef").filter((_, i) => i % 2 === 0);
  });
  const lines: StageLine[] = [];
  if (mode !== "layer") {
    for (let k = 0; k < nLayers - 1; k++) {
      const lo = ptsOf(k), hi = ptsOf(k + 1);
      lo.forEach((p, i) => hi.forEach((q, j) => {
        if (Math.hypot(p[0] - q[0], p[2] - q[2]) < 0.02) lines.push({ id: `iv${k}-${i}-${j}`, a: p, b: q, dashed: true, opacity: 0.55, color: "#9ad7ff" });
      }));
    }
  }
  const polys: StagePoly[] = [];
  if (mode === "layer") {
    const ring = [0, 1, 2, 3, 4, 5].map((q) => [2.3 * Math.cos((q * Math.PI) / 3), 0, 2.3 * Math.sin((q * Math.PI) / 3)] as V3);
    for (const [id, y] of [["pi-up", 0.55], ["pi-dn", -0.55]] as const) {
      const vs: V3[] = [[0, y, 0], ...ring.map((v) => [v[0], y, v[2]] as V3)];
      polys.push({ id, verts: vs, faces: [[0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 5], [0, 5, 6], [0, 6, 1]], color: C.violet, opacity: 0.2 });
    }
  }
  const camera: CameraPose = { key: `g-${mode}`, az: 0.55, el: mode === "layer" ? 0.95 : 0.32, dist: mode === "layer" ? 8.4 : 11.5 };
  const says: Record<GMode, string> = {
    layer: "**One layer (graphene).** Every carbon is **sp² hybridised** and bonded to **3** others in a flat network of hexagons, C–C = **142 pm**, bond angle **120°**. The 4th electron of each atom sits in a p orbital above and below the sheet. These electrons spread over the whole layer (violet sheets): they are **delocalised**, so graphite conducts electricity **along the layers**.",
    stack: "**Layers stacked A B A B…** Neighbouring layers are only **335 pm** apart, far more than the 142 pm of a bond. The dashed blue lines mark atoms of neighbouring layers lying directly above each other; they are held by **weak van der Waals forces** only. Drag the slider to pull the layers apart: nothing breaks inside a layer.",
    slide: "**Layers glide over each other.** Because the forces between layers are weak, one layer slides across the next with little effort. That is why graphite is **soft and slippery** (pencil lead, dry lubricant), unlike diamond.",
  };
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <Stage atoms={atoms} bonds={bonds} lines={lines} polys={polys} camera={camera} autoRotate={mode === "layer"} floorY={-3.1} height={470} label={`3D model of graphite: ${mode}`} hint="drag to look around" />
        <Narration k={mode}>
          <Rich text={says[mode]} />
        </Narration>
      </div>
      <div className="space-y-4">
        <Tabs label="View" value={mode} onChange={(v) => { setMode(v); setPull(0); setSlide(0); }} items={[["layer", "One layer"], ["stack", "ABAB stacking"], ["slide", "Layers sliding"]] as const} />
        {mode === "stack" && <Slider label="Pull the layers apart" value={pull} onChange={setPull} min={0} max={1} step={0.05} show={pull === 0 ? "as in graphite" : `${Math.round(pull * 100)} %`} />}
        {mode === "slide" && <Slider label="Slide the top layer" value={slide} onChange={setSlide} min={0} max={1} step={0.02} show={`${Math.round(slide * 100)} %`} />}
        <Facts cols={2} items={[["Hybridisation", "sp²"], ["C–C in a layer", "142 pm"], ["Layer spacing", "335 pm"], ["Density", "2.26 g/cm³"]]} />
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          Graphite is the thermodynamically stable form of carbon at ordinary conditions. Each layer has a (hexagonal) honeycomb of six-membered rings; the layers repeat as ABAB, so graphite itself is a hexagonal crystal.
        </p>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- fluorite lab */

type FView = "cell" | "cn8" | "cn4" | "cubes";

function FluoriteLab() {
  const [anti, setAnti] = useState(false);
  const [view, setView] = useState<FView>("cell");
  const fcc: V3[] = [...CORNERS, ...FACES];
  const tetra: V3[] = TETRA_ALL;
  const rF = anti ? 0.5 : 0.37; // species on the fcc lattice
  const rT = anti ? 0.36 : 0.46; // species in the tetrahedral holes
  const colF = anti ? C.blue : C.gold;
  const colT = anti ? C.gold : C.blue;
  const nameF = anti ? "O²⁻" : "Ca²⁺";
  const nameT = anti ? "Na⁺" : "F⁻";
  const focusCa: V3 = [0, -1, 0];
  const focusF: V3 = [0.5, 0.5, 0.5];
  const cubeVerts: V3[] = [[-0.5, -0.5, -0.5], [0.5, -0.5, -0.5], [0.5, -0.5, 0.5], [-0.5, -0.5, 0.5], [-0.5, -1.5, -0.5], [0.5, -1.5, -0.5], [0.5, -1.5, 0.5], [-0.5, -1.5, 0.5]];
  const lowerHalf: V3[] = cubeVerts.slice(4);
  const tetraCa: V3[] = [[1, 1, 1], [1, 0, 0], [0, 1, 0], [0, 0, 1]];
  const isNear = (p: V3, set: V3[]) => set.some((q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]) < 1e-6);
  const dim = view === "cn8" || view === "cn4";
  const shrink = view === "cell" ? 1 : 0.6; // smaller atoms in the focus views so the polyhedron is visible
  const atoms: StageAtom[] = [
    ...fcc.map((p, i) => {
      const lit = view === "cn8" ? isNear(p, [focusCa]) : view === "cn4" ? isNear(p, tetraCa) : true;
      return { id: `f${i}`, p, r: rF * shrink, color: colF, opacity: dim && !lit ? 0.18 : 1, glow: dim && lit };
    }),
    ...tetra.map((p, i) => {
      const lit = view === "cn8" ? p[1] < 0 : view === "cn4" ? isNear(p, [focusF]) : true;
      return { id: `t${i}`, p, r: rT * shrink, color: colT, opacity: dim && !lit ? 0.18 : 1, glow: dim && lit };
    }),
    ...lowerHalf.map((p, i) => ({ id: `x${i}`, p, r: rT * shrink, color: colT, scale: view === "cn8" ? 1 : 0, opacity: 0.55, glow: true, from: [p[0], p[1] + 0.8, p[2]] as V3 })),
    { id: "void", p: [0, 0, 0], r: 0.2, color: C.white, scale: view === "cubes" ? 1 : 0, opacity: 0.6, glow: true },
  ];
  const bonds: StageBond[] = [
    ...(view === "cn8" ? cubeVerts.map((v, i) => ({ id: `c8-${i}`, a: focusCa, b: v, r: 0.045, color: C.white })) : []),
    ...(view === "cn4" ? tetraCa.map((v, i) => ({ id: `c4-${i}`, a: focusF, b: v, r: 0.045, color: C.white })) : []),
  ];
  const polys: StagePoly[] = [];
  if (view === "cn8") polys.push({ id: "cube", verts: cubeVerts, faces: [[0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7]], color: colF, opacity: 0.22 });
  if (view === "cn4") polys.push({ id: "tet", verts: [focusF, ...tetraCa], faces: [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]], color: colT, opacity: 0.25 });
  const edges = useMemo(() => cubeEdges("fe", 1, [0, 0, 0], true, 0.55), []);
  const small = useMemo(() => (view === "cubes" ? [...cubeEdges("s1", 0.5, [0, 0, 0], true, 0.9), ...cubeEdges("s2", 0.5, [1, 0, 0], false, 0.9), ...cubeEdges("s3", 0.5, [0, 1, 0], false, 0.9), ...cubeEdges("s4", 0.5, [0, 0, 1], false, 0.9)] : []), [view]);
  const camera: CameraPose = { key: `fl-${view}`, az: view === "cn8" ? 0.4 : 0.7, el: view === "cn8" ? 0.55 : 0.42, dist: view === "cn8" ? 10.5 : 9.4, target: view === "cn8" ? [0, -0.7, 0] : undefined };
  const says: Record<FView, string> = {
    cell: anti
      ? "**Antifluorite (Na₂O).** The roles are swapped: the large **O²⁻** ions form the fcc lattice (4 per cell) and **all 8 tetrahedral holes** hold small **Na⁺** ions. Formula: 4 O²⁻ : 8 Na⁺ = Na₂O. Coordination: Na⁺ 4, O²⁻ **8** (written 4 : 8)."
      : "**Fluorite (CaF₂).** **Ca²⁺ ions form an fcc lattice** (corners and face centres, 4 per cell) and **F⁻ ions fill all 8 tetrahedral holes**. Formula: 4 Ca²⁺ : 8 F⁻ = CaF₂. Coordination number of Ca²⁺ is **8**, of F⁻ is **4** (written 8 : 4).",
    cn8: anti
      ? "**Eight Na⁺ around each O²⁻.** The 8 neighbours sit at the corners of a **cube** (4 in this cell, 4 in the cell below the face)."
      : "**Eight F⁻ around each Ca²⁺.** Take the Ca²⁺ at the centre of the bottom face: 4 F⁻ in this cell and 4 in the cell below, together the **corners of a cube**. Coordination number of Ca²⁺ = **8**.",
    cn4: anti
      ? "**Four O²⁻ around each Na⁺**, at the corners of a **tetrahedron**: coordination number of Na⁺ = 4."
      : "**Four Ca²⁺ around each F⁻.** The F⁻ at (¼, ¼, ¼) touches one corner Ca²⁺ and three face-centre Ca²⁺: the corners of a **tetrahedron**. Coordination number of F⁻ = **4**.",
    cubes: anti
      ? "**The same picture as cubes.** The small cations form a simple cubic array; the big anions occupy the centres of alternate cubes of that array, the other cubes stay empty (white dot = an empty cube centre, an octahedral hole)."
      : "**Alternate-cube view.** The 8 F⁻ ions of the cell form a **simple cubic** array. Ca²⁺ sit in the centres of **alternate cubes** (cubic holes, 8 neighbours each); the other cubes are empty. The empty cube at the centre (white dot) is the **octahedral hole** of the Ca²⁺ fcc lattice. This is why only half the cubic holes are filled: Ca : F = 1 : 2.",
  };
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <Stage atoms={atoms} bonds={bonds} lines={[...edges, ...small]} polys={polys} camera={camera} autoRotate={view === "cell"} floorY={-2.5} height={470} label={`3D model of ${anti ? "antifluorite" : "fluorite"}: ${view}`} hint="drag to look around" />
        <Narration k={`${anti}-${view}`}>
          <Rich text={says[view]} />
        </Narration>
      </div>
      <div className="space-y-4">
        <Tabs label="Structure" value={anti ? "anti" : "fl"} onChange={(v) => setAnti(v === "anti")} items={[["fl", "Fluorite CaF₂"], ["anti", "Antifluorite Na₂O"]] as const} />
        <Tabs label="View" value={view} onChange={setView} items={[["cell", "Unit cell"], ["cn8", "CN = 8"], ["cn4", "CN = 4"], ["cubes", "Cubes"]] as const} />
        <div className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 text-sm">
          <span className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full" style={{ background: colF }} />{nameF} (fcc lattice, 4 per cell)</span>
          <span className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-full" style={{ background: colT }} />{nameT} (tetrahedral holes, 8)</span>
        </div>
        <Facts cols={2} items={anti ? [["Z (formula units)", "4"], ["Coordination", "Na⁺ 4 : O²⁻ 8"], ["Na–O length", "√3 a / 4"], ["Examples", "Li₂O, Na₂O, K₂O"]] : [["Z (formula units)", "4"], ["Coordination", "Ca²⁺ 8 : F⁻ 4"], ["Ca–F length", "√3 a / 4"], ["Examples", "SrF₂, BaF₂, UO₂, ThO₂"]]} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- the tables */

type Metal = { s: string; name: string; st: "bcc" | "fcc" | "hcp" | "sc" | "other"; a?: string; c?: string; note?: string };

const METALS: Metal[] = [
  { s: "Li", name: "Lithium", st: "bcc", a: "351", note: "hcp/fcc below ~78 K" },
  { s: "Na", name: "Sodium", st: "bcc", a: "429" },
  { s: "K", name: "Potassium", st: "bcc", a: "533" },
  { s: "Rb", name: "Rubidium", st: "bcc", a: "559" },
  { s: "Cs", name: "Caesium", st: "bcc", a: "605" },
  { s: "Be", name: "Beryllium", st: "hcp", a: "229", c: "358" },
  { s: "Mg", name: "Magnesium", st: "hcp", a: "321", c: "521" },
  { s: "Ca", name: "Calcium", st: "fcc", a: "559", note: "bcc above ~716 K" },
  { s: "Sr", name: "Strontium", st: "fcc", a: "608" },
  { s: "Ba", name: "Barium", st: "bcc", a: "502" },
  { s: "Ra", name: "Radium", st: "bcc", a: "515" },
  { s: "Sc", name: "Scandium", st: "hcp", a: "331", c: "527" },
  { s: "Ti", name: "Titanium", st: "hcp", a: "295", c: "468", note: "bcc above 1155 K" },
  { s: "V", name: "Vanadium", st: "bcc", a: "303" },
  { s: "Cr", name: "Chromium", st: "bcc", a: "288" },
  { s: "Mn", name: "Manganese", st: "other", note: "α-Mn: complex cubic, 58 atoms per cell" },
  { s: "Fe", name: "Iron", st: "bcc", a: "287", note: "α-Fe; γ-Fe (910–1400 °C) is fcc, a = 365 pm" },
  { s: "Co", name: "Cobalt", st: "hcp", a: "251", c: "407", note: "fcc above ~700 K" },
  { s: "Ni", name: "Nickel", st: "fcc", a: "352" },
  { s: "Cu", name: "Copper", st: "fcc", a: "361" },
  { s: "Zn", name: "Zinc", st: "hcp", a: "266", c: "495", note: "c/a = 1.86, stretched hcp" },
  { s: "Y", name: "Yttrium", st: "hcp", a: "365", c: "573" },
  { s: "Zr", name: "Zirconium", st: "hcp", a: "323", c: "515", note: "bcc above ~1135 K" },
  { s: "Nb", name: "Niobium", st: "bcc", a: "330" },
  { s: "Mo", name: "Molybdenum", st: "bcc", a: "315" },
  { s: "Tc", name: "Technetium", st: "hcp", a: "274", c: "440" },
  { s: "Ru", name: "Ruthenium", st: "hcp", a: "271", c: "428" },
  { s: "Rh", name: "Rhodium", st: "fcc", a: "380" },
  { s: "Pd", name: "Palladium", st: "fcc", a: "389" },
  { s: "Ag", name: "Silver", st: "fcc", a: "409" },
  { s: "Cd", name: "Cadmium", st: "hcp", a: "298", c: "562", note: "c/a = 1.89" },
  { s: "La", name: "Lanthanum", st: "other", note: "double hcp (ABAC…)" },
  { s: "Ce", name: "Cerium", st: "fcc", a: "516", note: "γ-Ce at room temperature" },
  { s: "Pr", name: "Praseodymium", st: "other", note: "double hcp" },
  { s: "Nd", name: "Neodymium", st: "other", note: "double hcp" },
  { s: "Sm", name: "Samarium", st: "other", note: "rhombohedral (Sm-type)" },
  { s: "Eu", name: "Europium", st: "bcc", a: "458" },
  { s: "Gd", name: "Gadolinium", st: "hcp", a: "363", c: "578" },
  { s: "Tb", name: "Terbium", st: "hcp", a: "360", c: "569" },
  { s: "Dy", name: "Dysprosium", st: "hcp", a: "359", c: "565" },
  { s: "Ho", name: "Holmium", st: "hcp", a: "358", c: "562" },
  { s: "Er", name: "Erbium", st: "hcp", a: "356", c: "559" },
  { s: "Tm", name: "Thulium", st: "hcp", a: "354", c: "555" },
  { s: "Yb", name: "Ytterbium", st: "fcc", a: "548" },
  { s: "Lu", name: "Lutetium", st: "hcp", a: "350", c: "555" },
  { s: "Hf", name: "Hafnium", st: "hcp", a: "320", c: "506" },
  { s: "Ta", name: "Tantalum", st: "bcc", a: "330" },
  { s: "W", name: "Tungsten", st: "bcc", a: "316" },
  { s: "Re", name: "Rhenium", st: "hcp", a: "276", c: "446" },
  { s: "Os", name: "Osmium", st: "hcp", a: "273", c: "432" },
  { s: "Ir", name: "Iridium", st: "fcc", a: "384" },
  { s: "Pt", name: "Platinum", st: "fcc", a: "392" },
  { s: "Au", name: "Gold", st: "fcc", a: "408" },
  { s: "Hg", name: "Mercury", st: "other", note: "rhombohedral when frozen (below 234 K); liquid at room temperature" },
  { s: "Al", name: "Aluminium", st: "fcc", a: "405" },
  { s: "Ga", name: "Gallium", st: "other", note: "orthorhombic; melts at 30 °C" },
  { s: "In", name: "Indium", st: "other", a: "459", c: "495", note: "body-centred tetragonal (a slightly distorted fcc)" },
  { s: "Tl", name: "Thallium", st: "hcp", a: "346", c: "552" },
  { s: "Sn", name: "Tin", st: "other", note: "white tin: body-centred tetragonal; grey tin (below 13 °C): diamond cubic, a = 649 pm" },
  { s: "Pb", name: "Lead", st: "fcc", a: "495" },
  { s: "Bi", name: "Bismuth", st: "other", note: "rhombohedral (layered)" },
  { s: "Po", name: "Polonium", st: "sc", a: "335", note: "α-Po: the only simple cubic element" },
  { s: "Ac", name: "Actinium", st: "fcc", a: "531" },
  { s: "Th", name: "Thorium", st: "fcc", a: "508" },
  { s: "Pa", name: "Protactinium", st: "other", note: "body-centred tetragonal" },
  { s: "U", name: "Uranium", st: "other", note: "orthorhombic (α-U)" },
  { s: "Np", name: "Neptunium", st: "other", note: "orthorhombic" },
  { s: "Pu", name: "Plutonium", st: "other", note: "monoclinic (α-Pu)" },
];

const ST_LABEL: Record<Metal["st"], string> = { bcc: "bcc", fcc: "fcc (ccp)", hcp: "hcp", sc: "simple cubic", other: "other" };
const ST_CN: Record<Metal["st"], string> = { bcc: "8", fcc: "12", hcp: "12", sc: "6", other: "—" };

type MF = "all" | Metal["st"];

function MetalsTable() {
  const [f, setF] = useState<MF>("all");
  const rows = METALS.filter((m) => f === "all" || m.st === f);
  const count = (s: Metal["st"]) => METALS.filter((m) => m.st === s).length;
  return (
    <div className="space-y-4">
      <Tabs label="Show metals with structure" value={f} onChange={setF} items={[["all", `All (${METALS.length})`], ["bcc", `bcc (${count("bcc")})`], ["fcc", `fcc (${count("fcc")})`], ["hcp", `hcp (${count("hcp")})`], ["sc", "sc (1)"], ["other", `Other (${count("other")})`]] as const} />
      <div className="max-h-[560px] overflow-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="sticky top-0 bg-[var(--surface)] text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
            <tr>
              <th className="px-3 py-2">Metal</th>
              <th className="px-3 py-2">Structure</th>
              <th className="px-3 py-2">CN</th>
              <th className="px-3 py-2">a (pm)</th>
              <th className="px-3 py-2">c (pm)</th>
              <th className="px-3 py-2">Remark</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((m) => (
              <tr key={m.s} className="border-t border-[var(--border)]">
                <td className="px-3 py-1.5"><span className="mr-2 inline-block w-7 font-mono font-black text-[var(--accent)]">{m.s}</span>{m.name}</td>
                <td className="px-3 py-1.5 font-semibold text-[var(--foreground)]">{ST_LABEL[m.st]}</td>
                <td className="px-3 py-1.5 font-mono">{ST_CN[m.st]}</td>
                <td className="px-3 py-1.5 font-mono text-[var(--text-muted)]">{m.a ?? "—"}</td>
                <td className="px-3 py-1.5 font-mono text-[var(--text-muted)]">{m.c ?? "—"}</td>
                <td className="px-3 py-1.5 text-xs leading-5 text-[var(--text-muted)]">{m.note ?? ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs leading-5 text-[var(--text-muted)]">Room-temperature, ordinary-pressure forms. Lattice parameters are rounded to the nearest pm; a and c are the conventional cubic edge or the hexagonal base edge and height.</p>
    </div>
  );
}

const NETWORK_ROWS: { name: string; formula: string; bonding: string; structure: string; facts: string }[] = [
  { name: "Diamond", formula: "C", bonding: "sp³, each C bonded to 4 C, C–C 154 pm", structure: "fcc of C plus C in alternate tetrahedral holes; Z = 8; a = 356.7 pm", facts: "Hardest natural substance; insulator (band gap 5.5 eV); best thermal conductor; density 3.51 g/cm³" },
  { name: "Graphite", formula: "C", bonding: "sp², each C bonded to 3 C, C–C 142 pm; π electrons delocalised", structure: "Hexagonal layers stacked ABAB, spacing 335 pm; weak van der Waals between layers", facts: "Soft, slippery, conducts along the layers; stable form of carbon; density 2.26 g/cm³" },
  { name: "Silicon", formula: "Si", bonding: "sp³, Si–Si 235 pm", structure: "Diamond cubic; Z = 8; a = 543.1 pm", facts: "Semiconductor (band gap 1.1 eV); mp 1414 °C; density 2.33 g/cm³" },
  { name: "Germanium", formula: "Ge", bonding: "sp³, Ge–Ge 245 pm", structure: "Diamond cubic; Z = 8; a = 565.8 pm", facts: "Semiconductor (band gap 0.67 eV); mp 938 °C" },
  { name: "Silicon carbide (carborundum)", formula: "SiC", bonding: "covalent, Si–C 189 pm; each atom has 4 neighbours of the other kind", structure: "Zinc blende (β-SiC): C in alternate tetrahedral holes of an fcc Si lattice; Z = 4; a = 436 pm. α-SiC is hexagonal (wurtzite-like)", facts: "Very hard (Mohs ≈ 9.5), abrasive, melts near 2700 °C; density 3.21 g/cm³" },
  { name: "Boron carbide", formula: "B₄C (B₁₂C₃)", bonding: "covalent; three-centre two-electron bonds inside the icosahedra", structure: "Rhombohedral: B₁₁C icosahedra at the corners of the cell joined by C–B–C chains", facts: "Third hardest known material (Mohs ≈ 9.3); mp 2763 °C; density 2.52 g/cm³; armour, neutron-absorbing control rods" },
  { name: "Boron (α-rhombohedral)", formula: "B", bonding: "each B bonded to 5 neighbours in its icosahedron (electron deficient)", structure: "B₁₂ icosahedra at the corners of a rhombohedral cell: 12 atoms per cell", facts: "Very hard, brittle semiconductor; mp 2076 °C" },
  { name: "Quartz", formula: "SiO₂", bonding: "Si–O covalent; each Si bonded to 4 O, each O to 2 Si", structure: "SiO₄ tetrahedra sharing all corners in a 3D network", facts: "Hard, mp 1710 °C, insulator, piezoelectric" },
  { name: "Fullerene C₆₀", formula: "C₆₀", bonding: "molecular: covalent inside a cage, van der Waals between cages", structure: "C₆₀ molecules form an fcc lattice (a = 1417 pm); 4 octahedral and 8 tetrahedral holes per cell", facts: "A molecular, not a network, solid: soft; K₃C₆₀ is superconducting below 18 K" },
];

const COMPOUND_ROWS: { type: string; cn: string; z: string; a: string; eg: string; note: string }[] = [
  { type: "Rock salt NaCl", cn: "6 : 6", z: "4", a: "564", eg: "KCl, LiF, MgO, CaO, AgCl, NaBr", note: "Cl⁻ fcc, Na⁺ in all octahedral holes; r⁺/r⁻ 0.414–0.732" },
  { type: "Caesium chloride CsCl", cn: "8 : 8", z: "1", a: "412", eg: "CsBr, CsI, TlCl, NH₄Cl", note: "Simple cubic Cl⁻, Cs⁺ in the cubic hole; r⁺/r⁻ 0.732–1.0" },
  { type: "Zinc blende ZnS", cn: "4 : 4", z: "4", a: "541", eg: "CuCl, AgI (γ), SiC, GaAs, BeS", note: "S²⁻ fcc, Zn²⁺ in alternate (4 of 8) tetrahedral holes; r⁺/r⁻ 0.225–0.414" },
  { type: "Wurtzite ZnS", cn: "4 : 4", z: "2", a: "382 (c = 626)", eg: "ZnO, BeO, CdS, AgI (β)", note: "S²⁻ hcp, Zn²⁺ in alternate tetrahedral holes" },
  { type: "Fluorite CaF₂", cn: "8 : 4", z: "4", a: "546", eg: "SrF₂, BaF₂, CdF₂, ThO₂, UO₂, CeO₂", note: "Ca²⁺ fcc, F⁻ in all 8 tetrahedral holes" },
  { type: "Antifluorite Na₂O", cn: "4 : 8", z: "4", a: "555", eg: "Li₂O, K₂O, Rb₂O, Li₂S", note: "O²⁻ fcc, Na⁺ in all 8 tetrahedral holes" },
  { type: "Rutile TiO₂", cn: "6 : 3", z: "2", a: "459 (c = 296)", eg: "MnO₂, SnO₂, MgF₂", note: "Tetragonal; Ti⁴⁺ in distorted octahedra of O²⁻" },
  { type: "Perovskite CaTiO₃", cn: "Ca 12, Ti 6, O 6", z: "1", a: "≈ 380", eg: "BaTiO₃, SrTiO₃", note: "Ca at cube centre, Ti at corners, O at edge centres" },
  { type: "Spinel MgAl₂O₄", cn: "Mg 4, Al 6", z: "8", a: "808", eg: "ZnFe₂O₄, Fe₃O₄ (inverse)", note: "O²⁻ ccp; A²⁺ in 1/8 tetrahedral, B³⁺ in 1/2 octahedral holes" },
  { type: "Dry ice CO₂", cn: "12 (molecular)", z: "4", a: "556", eg: "I₂ (orthorhombic), Ar (fcc)", note: "Molecules at fcc sites: molecular solid, van der Waals" },
  { type: "Ice Ih", cn: "4 (H bonds)", z: "4 (H₂O)", a: "452 (c = 736)", eg: "—", note: "Hexagonal, O at wurtzite-like sites with H bonds: open structure, density 0.92 g/cm³" },
];

/* ---------------------------------------------------------------- chapter */

export function NetworkChapter() {
  return (
    <Chapter
      id="network"
      n="PART 9"
      title="Covalent crystals, CaF₂ and the catalogue of structures"
      lead="Diamond, graphite, silicon, silicon carbide, boron carbide, B₁₂, fullerene and fluorite in detail, followed by tables of every metal's structure and of the important crystalline compounds in the syllabus."
    >
      <h3 className="text-2xl font-bold text-[var(--foreground)]">Covalent (network) solids at a glance</h3>
      <P t="In a **covalent or network solid** every atom is bonded to its neighbours by covalent bonds that run through the whole crystal: the crystal is one giant molecule. That is why these solids are **very hard, have very high melting points and are poor conductors** (the exceptions are graphite, which has delocalised electrons, and semiconductors such as silicon). Fullerene C₆₀ is listed for comparison, but it is a molecular solid." />
      <div className="max-h-[620px] overflow-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[820px] text-sm">
          <thead className="sticky top-0 bg-[var(--surface)] text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
            <tr><th className="px-3 py-2">Solid</th><th className="px-3 py-2">Bonding</th><th className="px-3 py-2">Structure</th><th className="px-3 py-2">Key facts</th></tr>
          </thead>
          <tbody>
            {NETWORK_ROWS.map((r) => (
              <tr key={r.name} className="border-t border-[var(--border)] align-top">
                <td className="px-3 py-2 font-bold text-[var(--foreground)]">{r.name}<div className="font-mono text-xs font-normal text-[var(--accent)]">{r.formula}</div></td>
                <td className="px-3 py-2 text-[var(--text-muted)]">{r.bonding}</td>
                <td className="px-3 py-2 text-[var(--text-muted)]">{r.structure}</td>
                <td className="px-3 py-2 text-[var(--text-muted)]">{r.facts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Diamond, silicon and silicon carbide</h3>
      <P t="All three are built on the **diamond / zinc blende frame**: an fcc lattice with atoms in **half (4 of 8) of the tetrahedral holes**. In diamond and silicon both sites carry the same atom (so **Z = 8**); in silicon carbide the fcc sites carry Si and the tetrahedral holes carry C (zinc blende, **Z = 4 formula units = 8 atoms**). Every atom has **four** neighbours at the corners of a tetrahedron (sp³), so the bond length is a quarter of the body diagonal: **d = √3 a / 4**. The 3D diamond cell is in Part 3; the following derivations give the numbers." />
      <DiamondTwoFcc />
      <Derivation
        no="9.1"
        title="Diamond is an fcc lattice with a two-atom basis"
        given="An fcc lattice of edge a. A second, identical fcc lattice is shifted by (a/4, a/4, a/4), one quarter of the body diagonal."
        find="Where the second lattice's atoms fall in the cell, the number of atoms per cell, and the nearest-neighbour distance."
        steps={[
          { say: "Take the atom at the origin (0, 0, 0) of lattice 1 and its partner at $(\\tfrac14,\\tfrac14,\\tfrac14)$ from lattice 2. These two atoms form the **basis** repeated at every fcc lattice point:", tex: "\\text{basis} = \\{(0,0,0),\\ (\\tfrac14,\\tfrac14,\\tfrac14)\\}\\ \\text{in units of }a" },
          { say: "Add the three fcc translations $(0,\\tfrac12,\\tfrac12),\\ (\\tfrac12,0,\\tfrac12),\\ (\\tfrac12,\\tfrac12,0)$ to the partner atom. The four partner positions **inside the cell** are:", tex: "(\\tfrac14,\\tfrac14,\\tfrac14),\\ (\\tfrac14,\\tfrac34,\\tfrac34),\\ (\\tfrac34,\\tfrac14,\\tfrac34),\\ (\\tfrac34,\\tfrac34,\\tfrac14)" },
          { say: "These are four of the eight tetrahedral holes of lattice 1 (the other four stay empty). Atoms per cell: lattice 1 gives $8\\times\\tfrac18+6\\times\\tfrac12=4$ and lattice 2 gives 4:", tex: "Z = 4 + 4 = 8" },
          { say: "The nearest neighbour of the origin atom is the partner at $(\\tfrac14,\\tfrac14,\\tfrac14)$, a quarter of the body diagonal away:", tex: "d = a\\sqrt{3\\left(\\tfrac14\\right)^2} = \\frac{\\sqrt3}{4}\\,a" },
          { say: "Each atom has 4 such neighbours at the corners of a regular tetrahedron: coordination number 4, sp³ bonding. In the tetrahedron the central atom sits at **¼ of the height** measured from its base of three atoms (the fact in your notes)." },
        ]}
        result="\text{Bravais lattice: fcc};\quad \text{basis: } (0,0,0)\text{ and }(\tfrac14,\tfrac14,\tfrac14);\quad Z = 8;\quad d = \dfrac{\sqrt{3}}{4}\,a"
        note="So two fcc lattices do not simply 'add up to another fcc crystal': the lattice is still fcc but every point carries two atoms. With two different atoms (Zn at one, S at the other) the same arrangement is zinc blende."
      />
      <Derivation
        no="9.2"
        title="Bond length and density of diamond-type crystals"
        given="A cell of edge a with an fcc lattice and atoms in four tetrahedral holes. Molar mass M, Avogadro constant N_A."
        find="The nearest-neighbour distance d and the density rho, for diamond, silicon, germanium and silicon carbide."
        steps={[
          { say: "A tetrahedral-hole atom at $(\\tfrac a4,\\tfrac a4,\\tfrac a4)$ is bonded to the corner atom at the origin. Their separation is a quarter of the body diagonal:", tex: "d = \\sqrt{3\\left(\\tfrac a4\\right)^2} = \\frac{\\sqrt3}{4}\\,a" },
          { say: "Number of atoms in the cell: 8 for diamond, silicon and germanium (4 fcc + 4 in holes), and 4 Si + 4 C for SiC (4 formula units). The mass of the cell is $Z\\,M/N_A$, so for an element:", tex: "\\rho = \\frac{8M}{N_A\\,a^3}" },
          { say: "For SiC the cell holds 4 formula units of mass $M(\\text{SiC}) = 40.1$ g/mol:", tex: "\\rho = \\frac{4M}{N_A\\,a^3}" },
          { say: "Numbers: diamond $a=356.7$ pm gives $d=154.4$ pm; silicon $a=543.1$ pm gives $d=235.2$ pm; germanium $a=565.8$ pm gives $d=245.0$ pm; SiC $a=436$ pm gives $d=189$ pm." },
        ]}
        result="d = \dfrac{\sqrt{3}}{4}\,a ;\qquad \rho_{\text{element}} = \dfrac{8M}{N_A a^3},\quad \rho_{\text{SiC}} = \dfrac{4M}{N_A a^3}"
        note="Check: diamond 8 × 12.01 / (6.022×10²³ × (3.567×10⁻⁸)³) = 3.51 g/cm³, silicon 2.33 g/cm³, SiC 3.21 g/cm³."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Worked
          q="Silicon carbide is zinc blende with Si–C = 189 pm. Find its unit-cell edge and its density (Si = 28.09, C = 12.01)."
          steps={["$d = \\sqrt3 a/4 \\Rightarrow a = 4d/\\sqrt3 = 4(189)/1.732 = 436.5$ pm.", "$M(\\text{SiC}) = 40.10$ g/mol and the cell holds 4 formula units.", "$\\rho = 4(40.10)/\\left[6.022\\times10^{23}(4.365\\times10^{-8})^3\\right] = 160.4/50.09 = 3.20$ g/cm³."]}
          answer="a ≈ 436 pm, density ≈ 3.2 g/cm³"
        />
        <Worked
          q="Why are diamond and silicon both 'diamond cubic' but diamond is an insulator and silicon a semiconductor?"
          steps={["Same structure, but the bond is shorter and stronger in diamond (154 pm) than in silicon (235 pm).", "The stronger bond makes a wider gap between the filled valence band and the empty conduction band: 5.5 eV for diamond, 1.1 eV for silicon.", "At room temperature a few electrons cross 1.1 eV, but practically none cross 5.5 eV."]}
          answer="Band gap: 5.5 eV (diamond) against 1.1 eV (silicon)"
        />
      </div>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Graphite</h3>
      <P t="Graphite is the other common form (allotrope) of carbon. Unlike diamond it is **soft, black, slippery and conducts electricity**. The 3D model below shows all three reasons: flat hexagonal layers, delocalised π electrons, and weak forces between layers." />
      <GraphiteLab />
      <Derivation
        no="9.3"
        title="Unit cell and density of graphite"
        given="Graphite has hexagonal layers with C–C = 142 pm, layers 335 pm apart and stacked ABAB, so the repeat unit contains two layers."
        find="The hexagonal cell dimensions, the number of atoms per cell and the density."
        steps={[
          { say: "In a layer of hexagons the distance between the centres of neighbouring rings is $\\sqrt3$ times the bond length:", tex: "a = \\sqrt3\\,d_{\\text{C–C}} = 1.732\\times142 = 246\\ \\text{pm}" },
          { say: "The height of the cell is two layer spacings (ABAB):", tex: "c = 2\\times335 = 670\\ \\text{pm}" },
          { say: "Volume of a hexagonal-base cell with a 60° rhombus base:", tex: "V = \\frac{\\sqrt3}{2}\\,a^2c = 0.866\\,(246)^2(670)\\ \\text{pm}^3 = 3.51\\times10^{-23}\\ \\text{cm}^3" },
          { say: "Atoms per cell: 2 per layer (one hexagon ring has 6 corner atoms, each shared by 3 rings) times 2 layers = **4 atoms**." },
          { say: "Density:", tex: "\\rho = \\frac{4\\times12.01}{6.022\\times10^{23}\\times3.51\\times10^{-23}} = 2.27\\ \\text{g cm}^{-3}" },
        ]}
        result="\rho(\text{graphite}) = 2.27\ \text{g cm}^{-3} \quad (\text{diamond } 3.51)"
        note="Graphite is less dense than diamond because the layers are far apart (335 pm) even though the bonds inside a layer are shorter (142 pm against 154 pm)."
      />
      <KeyIdea title="Diamond versus graphite">
        {"**Diamond:** sp³, 3D network, C–C 154 pm, hardest, insulator, density 3.51. **Graphite:** sp², 2D layers, C–C 142 pm (bond order about 1.33, partial double-bond character), soft, conducts along the layers, density 2.26. Graphite is the more stable form at ordinary pressure, which is why diamonds convert to graphite only very slowly (the energy difference is small, 2 kJ/mol, but the barrier is huge)."}
      </KeyIdea>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Boron and boron carbide: the icosahedron</h3>
      <P t="Elemental boron and boron carbide are built from the **B₁₂ icosahedron**: 12 boron atoms at the corners of a solid with **20 equilateral triangular faces**. Each atom touches **5** others inside the icosahedron (the bonds are three-centre two-electron bonds because boron is electron deficient). In α-rhombohedral boron an icosahedron sits at each corner of a rhombohedral cell, so the cell holds **12 atoms**. In **boron carbide** the icosahedra are B₁₁C (one carbon replaces one boron) and are linked by C–B–C chains." />
      <IcosahedronLab />
      <Derivation
        no="9.4"
        title="The icosahedron: faces, edges and the formula of boron carbide"
        given="A closed polyhedron with 12 vertices (B atoms), every vertex bonded to 5 others, all faces triangles."
        find="The number of edges and faces, and the formula of boron carbide built from B11C icosahedra and C–B–C chains."
        steps={[
          { say: "Each of the 12 vertices has 5 edges and each edge has 2 ends:", tex: "E = \\frac{12\\times5}{2} = 30" },
          { say: "Euler's rule $V - E + F = 2$ gives the faces:", tex: "F = 2 - 12 + 30 = 20" },
          { say: "Check with triangles: each face has 3 edges and each edge borders 2 faces, so $3F = 2E$, i.e. $3\\times20 = 60 = 2\\times30$. ✓" },
          { say: "Boron carbide cell: one B₁₁C icosahedron (11 B + 1 C) plus one C–B–C chain (1 B + 2 C):", tex: "\\text{B}:\\ 11+1=12,\\qquad \\text{C}:\\ 1+2=3 \;\\Rightarrow\; \\text{B}_{12}\\text{C}_{3} = \\text{B}_4\\text{C}" },
          { say: "Rhombohedral cell $a=516$ pm, $\\alpha=65.7^\\circ$ holds one B₁₂C₃ ($M=165.8$ g/mol). Volume $V=a^3\\sqrt{1-3\\cos^2\\alpha+2\\cos^3\\alpha} = 1.092\\times10^{-22}$ cm³:", tex: "\\rho = \\frac{165.8}{6.022\\times10^{23}\\times1.092\\times10^{-22}} = 2.52\\ \\text{g cm}^{-3}" },
        ]}
        result="E = 30,\ F = 20;\quad \text{boron carbide} = \text{B}_{12}\text{C}_{3} \equiv \text{B}_4\text{C},\ \rho = 2.52\ \text{g cm}^{-3}"
        note="Compare derivation 8.4 for the C₆₀ cage: there V − E + F = 2 forces exactly 12 pentagons. Here every face is a triangle and V = 12."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Worked
          q="How many bonds (edges) and triangular faces does a B₁₂ icosahedron have, and how many B–B contacts does one boron atom have inside it?"
          steps={["Each boron has 5 neighbours: 5 contacts.", "Edges $=12\\times5/2 = 30$.", "Faces $=2-V+E = 2-12+30 = 20$ (all triangles)."]}
          answer="5 contacts per atom, 30 edges, 20 faces"
        />
        <Worked
          q="Why is boron carbide used as armour and in nuclear control rods?"
          steps={["Its network of icosahedra linked by short C–B–C chains is covalent and extremely hard (Mohs ≈ 9.3), and it melts near 2760 °C.", "Natural boron contains 20 % of ¹⁰B, which absorbs neutrons strongly, so B₄C controls fission reactions."]}
          answer="Very hard covalent network; ¹⁰B is a neutron absorber"
        />
      </div>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Fullerene C₆₀ as a crystal</h3>
      <P t="C₆₀ molecules (a cage of 12 pentagons and 20 hexagons, Part 8) pack in an **fcc lattice** with edge **1417 pm**. As in any close-packed array there are **4 octahedral and 8 tetrahedral holes** per cell, so a metal can sit inside. When all 12 holes are filled by potassium the compound **K₃C₆₀** results, a superconductor below 18 K." />
      <C60Lab />
      <div className="grid gap-4 md:grid-cols-2">
        <Worked
          q="Calculate the density of solid C₆₀ (fcc, a = 1417 pm, carbon = 12.01)."
          steps={["Z = 4 molecules per cell, $M = 60\\times12.01 = 720.6$ g/mol.", "$a^3 = (1.417\\times10^{-7})^3 = 2.845\\times10^{-21}$ cm³.", "$\\rho = 4(720.6)/(6.022\\times10^{23}\\times2.845\\times10^{-21}) = 1.68$ g/cm³."]}
          answer="≈ 1.68 g/cm³ (low: the cages are hollow)"
        />
        <Worked
          q="Alkali atoms occupy all octahedral and tetrahedral holes of fcc C₆₀. Find the formula."
          steps={["Per cell: 4 C₆₀, 4 octahedral holes, 8 tetrahedral holes.", "Alkali atoms: $4 + 8 = 12$.", "Ratio: M : C₆₀ = 12 : 4 = 3 : 1."]}
          answer="M₃C₆₀ (for example K₃C₆₀)"
        />
      </div>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Calcium fluoride (fluorite): the structure every JEE paper asks about</h3>
      <P t="**CaF₂** is the standard example of a **8 : 4** ionic solid. The notes explain why it is built this way: the radii are Ca²⁺ ≈ 100 pm and F⁻ ≈ 133 pm, so the radius ratio is ≈ 0.75, which belongs to **cubic (8-fold) coordination**. But there are twice as many F⁻ as Ca²⁺, so only **half of the cubic holes** can be filled. The two equivalent descriptions are: **Ca²⁺ fcc with F⁻ in all tetrahedral holes**, or **F⁻ simple cubic with Ca²⁺ in alternate cubes**. The model lets you see both." />
      <FluoriteLab />
      <Derivation
        no="9.5"
        title="Fluorite CaF₂: contents, distances and density"
        given="Ca²⁺ at the corners and face centres of a cube of edge a, F⁻ at the 8 tetrahedral holes (±a/4, ±a/4, ±a/4)."
        find="Z, coordination numbers, the Ca–F, F–F and Ca–Ca distances and the density."
        steps={[
          { say: "Ca²⁺: $8\\times\\tfrac18 + 6\\times\\tfrac12 = 4$. F⁻: all 8 tetrahedral holes are inside the cell: 8. Ratio 4 : 8 = 1 : 2, so $Z=4$ formula units of CaF₂." },
          { say: "Nearest Ca–F: from a tetrahedral hole to the nearest fcc site, a quarter of the body diagonal:", tex: "d(\\text{Ca–F}) = \\frac{\\sqrt3}{4}\\,a = r_+ + r_-" },
          { say: "Nearest F–F: neighbouring tetrahedral holes are half a cell edge apart. Nearest Ca–Ca: along a face diagonal of the fcc lattice:", tex: "d(\\text{F–F}) = \\frac a2,\\qquad d(\\text{Ca–Ca}) = \\frac{a}{\\sqrt2}" },
          { say: "Coordination: a Ca²⁺ has 8 F⁻ at the corners of a cube (distance $\\sqrt3a/4$ each); an F⁻ has 4 Ca²⁺ at the corners of a tetrahedron." },
          { say: "Density with $M(\\text{CaF}_2) = 78.08$ g/mol and $a = 546$ pm:", tex: "\\rho = \\frac{4\\times78.08}{6.022\\times10^{23}\\,(5.46\\times10^{-8})^3} = 3.18\\ \\text{g cm}^{-3}" },
          { say: "Numbers: $d(\\text{Ca–F}) = 1.732(546)/4 = 236$ pm, $d(\\text{F–F}) = 273$ pm, $d(\\text{Ca–Ca}) = 386$ pm. The F⁻ ions do **not** touch each other, which is why this structure is stable even though F⁻ is bigger than Ca²⁺." },
        ]}
        result="Z = 4;\ \text{CN}(\text{Ca}^{2+}) = 8,\ \text{CN}(\text{F}^{-}) = 4;\ d(\text{Ca–F}) = \dfrac{\sqrt{3}}{4}a;\ \rho = 3.18\ \text{g cm}^{-3}"
        note="Antifluorite (Na₂O, Li₂O) swaps the roles: the large anion is on the fcc lattice and the small cation fills the tetrahedral holes, so CN = 4 : 8."
      />
      <Derivation
        no="9.6"
        title="Packing fraction of fluorite from the radii"
        given="Ca²⁺ radius r₊ = 100 pm, F⁻ radius r₋ = 133 pm, ions touching along Ca–F."
        find="The fraction of the cell volume occupied by the ions."
        steps={[
          { say: "Edge from the contact condition:", tex: "\\frac{\\sqrt3}{4}\\,a = r_+ + r_- = 233\\ \\text{pm} \;\\Rightarrow\; a = 538\\ \\text{pm}" },
          { say: "Volume of ions: 4 Ca²⁺ and 8 F⁻:", tex: "V_{\\text{ions}} = \\frac{4\\pi}{3}\\left(4r_+^3 + 8r_-^3\\right) = \\frac{4\\pi}{3}\\left(4(100)^3 + 8(133)^3\\right) = 9.56\\times10^{7}\\ \\text{pm}^3" },
          { say: "Cell volume $a^3 = (538)^3 = 1.557\\times10^{8}$ pm³, so:", tex: "\\eta = \\frac{9.56\\times10^{7}}{1.557\\times10^{8}} = 0.61" },
        ]}
        result="\eta \approx 0.61\ (61\%)"
        note="The value depends on the radii taken, and is lower than 0.74 because two sizes of ion cannot fill space as well as equal spheres."
      />
      <KeyIdea title="Defects in fluorite (very important for JEE)">
        {"The empty cube at the cell centre (the octahedral hole) is where a displaced fluoride ion can go: **anion Frenkel defect** (the F⁻ leaves its tetrahedral site and sits in an empty cubic hole). Fluorite-type solids such as CaF₂, ZrO₂ and CeO₂ show this defect, so they conduct by **anion** hopping, the reverse of AgCl. Crystals of fluorite are often coloured (purple, blue) because of F-centres: electrons trapped at anion vacancies."}
      </KeyIdea>
      <Traps items={[
        "In CaF₂ it is the **cation** that is on the fcc lattice, in Na₂O it is the **anion**. Coordination numbers are 8 : 4 and 4 : 8.",
        "CaF₂ has $Z=4$ formula units, i.e. 12 ions per cell; ZnS has $Z=4$ too but only 8 ions; CsCl has $Z=1$ and 2 ions.",
        "Tetrahedral holes: **all 8** are filled in fluorite and antifluorite; only **4 of 8** in zinc blende and diamond.",
        "d(cation–anion) $=\\sqrt3a/4$ in fluorite, zinc blende and diamond; in NaCl it is $a/2$; in CsCl it is $\\sqrt3a/2$.",
      ]} />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Metals and their crystal structures</h3>
      <P t="Most metals crystallise in one of three close-packed or nearly close-packed forms: **hcp**, **fcc (ccp)** and **bcc**. A handful take a more complex structure. Use the filter to see each group; the table is the complete list of metals with their usual structure at room temperature." />
      <Facts cols={4} items={[["bcc (CN 8, 68 %)", "alkali metals, Ba, V, Cr, Fe, Mo, W…"], ["fcc (CN 12, 74 %)", "Ca, Sr, Al, Ni, Cu, Ag, Au, Pt, Pb…"], ["hcp (CN 12, 74 %)", "Be, Mg, Ti, Zn, Cd, Co, Zr…"], ["Simple cubic (CN 6, 52 %)", "only α-Po"]]} />
      <MetalsTable />
      <KeyIdea title="Memory aids">
        {"**bcc:** group 1 (Li, Na, K, Rb, Cs), Ba, and the early d-block (V, Cr, Nb, Mo, Ta, W), plus α-Fe. **fcc:** the coinage metals (Cu, Ag, Au), Ni, Pd, Pt, Al, Pb, Ca, Sr. **hcp:** Be, Mg, Zn, Cd, Ti, Zr, Co. Iron is the famous exception to remember: **α-Fe bcc, γ-Fe fcc, δ-Fe bcc again**. Polonium is the only simple cubic element, and gallium, mercury and bismuth have low-symmetry structures."}
      </KeyIdea>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Important crystalline compounds</h3>
      <P t="The solids you are expected to know, with their lattice description, coordination numbers, Z and edge. Learn the pattern: the radius ratio decides the coordination number, and the formula decides which holes are filled." />
      <div className="max-h-[620px] overflow-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[860px] text-sm">
          <thead className="sticky top-0 bg-[var(--surface)] text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
            <tr><th className="px-3 py-2">Type</th><th className="px-3 py-2">CN</th><th className="px-3 py-2">Z</th><th className="px-3 py-2">a (pm)</th><th className="px-3 py-2">Other examples</th><th className="px-3 py-2">Description</th></tr>
          </thead>
          <tbody>
            {COMPOUND_ROWS.map((r) => (
              <tr key={r.type} className="border-t border-[var(--border)] align-top">
                <td className="px-3 py-1.5 font-bold text-[var(--foreground)]">{r.type}</td>
                <td className="px-3 py-1.5 font-mono">{r.cn}</td>
                <td className="px-3 py-1.5 font-mono">{r.z}</td>
                <td className="px-3 py-1.5 font-mono text-[var(--text-muted)]">{r.a}</td>
                <td className="px-3 py-1.5 text-[var(--text-muted)]">{r.eg}</td>
                <td className="px-3 py-1.5 text-xs leading-5 text-[var(--text-muted)]">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pt-2">
        <Btn onClick={() => { const el = document.getElementById("practice"); el?.scrollIntoView({ behavior: "smooth" }); }}>Practise this part: go to the questions</Btn>
      </div>
    </Chapter>
  );
}
