"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Stage, type CameraPose, type StageAtom, type StageBond, type StagePoly, type V3 } from "./_stage";
import { C, CORNERS, EDGE_CENTRES, FACES, SQ3, TETRA_ALL, TETRA_ALT, bondsBetween, cubeEdges, hcpCell, hexPrismEdges } from "./_geom";
import { Btn, Chapter, Derivation, Facts, KeyIdea, Narration, P, Rich, Tabs, Tex, Traps, Worked, useTour, useTween } from "./_ui";

/* ------------------------------------------------------ 2D packing morph */

function Packing2D() {
  const [hex, setHex] = useState(false);
  const t = useTween(hex ? 1 : 0, 3.2);
  const r = 21;
  const h2 = r * Math.sqrt(4 - t * t);
  const rows = 7;
  const cols = 10;
  const pos = (row: number, col: number): [number, number] => [58 + col * 2 * r + (row % 2 ? t * r : 0), 46 + row * h2];
  const centre: [number, number] = pos(3, 4);
  const nbrs: [number, number][] = [];
  const dots: ReactNode[] = [];
  for (let row = 0; row < rows; row++)
    for (let col = 0; col < cols; col++) {
      const [x, y] = pos(row, col);
      const d = Math.hypot(x - centre[0], y - centre[1]);
      const isNb = d > 1 && d < 2 * r + 0.6;
      if (isNb) nbrs.push([x, y]);
      dots.push(
        <g key={`${row}-${col}`}>
          <circle cx={x} cy={y} r={r - 0.8} fill={d < 1 ? C.gold : isNb ? C.teal : "#3a6f90"} fillOpacity={d < 1 ? 1 : isNb ? 0.95 : 0.8} stroke="#06100f" strokeWidth={1} />
          <circle cx={x} cy={y} r={r - 0.8} fill="url(#pk-gloss)" />
        </g>,
      );
    }
  const o = pos(3, 3);
  const v1: [number, number] = [2 * r, 0];
  const v2: [number, number] = [t * r, h2];
  const poly = [o, [o[0] + v1[0], o[1]], [o[0] + v1[0] + v2[0], o[1] + h2], [o[0] + v2[0], o[1] + h2]];
  const eta = Math.PI / (2 * Math.sqrt(4 - t * t));
  const cn = nbrs.length;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 330" role="img" aria-label="Circles packed in a square arrangement morphing into a hexagonal arrangement" className="w-full rounded-2xl border border-white/10" style={{ background: "radial-gradient(120% 90% at 50% 18%, #17433f 0%, #0c1f1e 52%, #060f0f 100%)" }}>
          <defs>
            <radialGradient id="pk-gloss" cx="35%" cy="30%" r="75%">
              <stop offset="0" stopColor="#fff" stopOpacity="0.8" />
              <stop offset="0.4" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          {dots}
          {nbrs.map(([x, y], i) => (
            <line key={i} x1={centre[0]} y1={centre[1]} x2={x} y2={y} stroke="#fff" strokeOpacity={0.9} strokeWidth={1.6} />
          ))}
          <polygon points={poly.map((p) => p.join(",")).join(" ")} fill="#f2b13f" fillOpacity={0.28} stroke="#f2b13f" strokeWidth={2} strokeDasharray="5 4" />
        </svg>
        <div className="flex gap-2">
          <Btn primary onClick={() => setHex((h) => !h)}>
            {hex ? "◀ Back to square" : "Pack closer ▶"}
          </Btn>
        </div>
      </div>
      <div className="space-y-4">
        <Facts items={[["Coordination", String(cn)], ["Efficiency", `${(eta * 100).toFixed(1)} %`], ["Rows shift by", `${(t * 100).toFixed(0)} %`], ["Row gap", `${((h2 / (2 * r)) * 100).toFixed(1)} % of 2r`]]} />
        <Derivation
          key={hex ? "h" : "s"}
          title={hex ? "Hexagonal close packing in a plane" : "Square packing in a plane"}
          steps={
            hex
              ? [
                  { say: "Each row sits in the dips of the row below. Centres of three mutually touching circles form an equilateral triangle of side $2r$, so the rows are $\\sqrt3\\,r$ apart." },
                  { say: "The smallest repeating cell is a rhombus with sides $2r$ and angle $60^\\circ$:", tex: "A = (2r)(2r)\\sin 60^\\circ = 2\\sqrt3\\,r^2" },
                  { say: "Its four corners hold angles $60^\\circ + 120^\\circ + 60^\\circ + 120^\\circ = 360^\\circ$, so the cell holds exactly one circle." },
                  { say: "Fraction of area covered:", tex: "\\eta = \\frac{\\pi r^2}{2\\sqrt3\\,r^2}" },
                ]
              : [
                  { say: "Circles touch along rows and columns, so the repeating cell is a square of side $2r$:", tex: "A = (2r)^2 = 4r^2" },
                  { say: "Four quarter-circles at the corners make one whole circle:", tex: "4\\times\\tfrac14 = 1" },
                  { say: "Fraction of area covered:", tex: "\\eta = \\frac{\\pi r^2}{4r^2}" },
                ]
          }
          result={hex ? "\\eta = \\dfrac{\\pi}{2\\sqrt3} = 0.907" : "\\eta = \\dfrac{\\pi}{4} = 0.785"}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------- 3D layer stacking */

type Mode = "ccp" | "hcp";
const LA = 0.92; // sphere diameter in scene units
const LH = LA * Math.sqrt(2 / 3);
const OFF: Record<string, [number, number]> = { A: [0, 0], B: [LA / 2, (LA * SQ3) / 6], C: [0, (LA * SQ3) / 3] };
const LCOL: Record<string, string> = { A: C.blue, B: C.gold, C: C.green };

function patch(letter: string): V3[] {
  const out: V3[] = [];
  for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
    if (Math.max(Math.abs(i), Math.abs(j), Math.abs(i + j)) > 2) continue;
    out.push([LA * (i + j / 2) + OFF[letter][0], 0, LA * ((j * SQ3) / 2) + OFF[letter][1]]);
  }
  return out;
}

function Stacking3D() {
  const [mode, setMode] = useState<Mode>("ccp");
  const [view, setView] = useState("iso");
  const [voids, setVoids] = useState(false);
  const seq = mode === "ccp" ? ["A", "B", "C", "A"] : ["A", "B", "A", "B"];
  const tour = useTour(4, 2300);
  const step = tour.step;
  const y0 = -1.25;

  const atoms = useMemo<StageAtom[]>(() => {
    const out: StageAtom[] = [];
    seq.forEach((letter, k) => {
      patch(letter).forEach((p, i) => out.push({ id: `L${k}-${i}`, p: [p[0], y0 + k * LH, p[2]], r: LA * 0.47 * (voids ? 0.82 : 1), color: LCOL[letter], scale: k < step ? 1 : 0, from: [p[0] * 1.1, y0 + k * LH + 3.2, p[2] * 1.1], opacity: voids ? 0.72 : 1 }));
    });
    if (voids && step >= 2) {
      const near = (p: V3) => Math.hypot(p[0], p[2]) < LA * 1.35;
      patch("C").filter(near).forEach((p, i) => out.push({ id: `vo${i}`, p: [p[0], y0 + LH / 2, p[2]], r: 0.2, color: "#ffffff", glow: true }));
      patch("B").filter(near).forEach((p, i) => out.push({ id: `vt${i}`, p: [p[0], y0 + LH / 4, p[2]], r: 0.13, color: C.rose, glow: true }));
      patch("A").filter(near).forEach((p, i) => out.push({ id: `vu${i}`, p: [p[0], y0 + (3 * LH) / 4, p[2]], r: 0.13, color: C.rose, glow: true }));
    }
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, step, voids]);

  const cams: Record<string, CameraPose> = { iso: { key: "iso", az: 0.65, el: 0.5, dist: 11.5 }, top: { key: "top", az: 0, el: 1.5, dist: 11 }, side: { key: "side", az: 0, el: 0.03, dist: 11.5 } };
  const names = ["", "Layer A", "Layer B", mode === "ccp" ? "Layer C" : "Layer A again", mode === "ccp" ? "Layer A repeats" : "Layer B again"];
  const says = [
    "Nothing yet. Press **Build** and watch the layers settle one at a time.",
    "**Layer A.** Each sphere touches six neighbours in the plane: the densest possible arrangement in two dimensions.",
    "**Layer B.** Spheres rest in every *other* hollow of A. Only half of the hollows can be used, because neighbouring hollows are closer together than a sphere's diameter.",
    mode === "ccp" ? "**Layer C.** The third layer covers the hollows that B left empty, so it sits directly above neither A nor B. The sequence ABC is the start of cubic close packing." : "**Layer 3 returns directly above A.** The sequence ABAB… is hexagonal close packing.",
    mode === "ccp" ? "**Layer 4 sits above A.** ABCABC… repeats every three layers." : "**Layer 4 above B.** The pattern ABAB… repeats every two layers.",
  ];

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <Stage atoms={atoms} camera={cams[view]} autoRotate={view === "iso"} floorY={-1.9} height={460} label={`Close-packed layers stacked ${seq.join("")}`} />
        <Narration k={`${mode}-${step}`}>
          <Rich text={says[step]} />
        </Narration>
      </div>
      <div className="space-y-4">
        <Tabs label="Stacking sequence" value={mode} onChange={(m) => { setMode(m); tour.set(4); }} items={[["ccp", "ABC ABC… (cubic)"], ["hcp", "AB AB… (hexagonal)"]] as const} />
        <div className="flex flex-wrap gap-2">
          <Btn primary onClick={tour.play}>
            ▶ Build
          </Btn>
          <Btn onClick={() => setVoids((v) => !v)}>{voids ? "Hide voids" : "Show voids"}</Btn>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[1, 2, 3, 4].map((n) => (
            <Btn key={n} onClick={() => tour.set(n)}>
              {names[n]}
            </Btn>
          ))}
        </div>
        <div>
          <div className="mb-1.5 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">View</div>
          <Tabs label="Camera" value={view} onChange={setView} items={[["iso", "3D"], ["top", "From above"], ["side", "Side"]] as const} />
        </div>
        <Facts items={[["Coordination", "12 (6+3+3)"], ["Efficiency", "74.05 %"], ["Octahedral voids", "1 per sphere"], ["Tetrahedral voids", "2 per sphere"]]} />
        <p className="text-xs leading-5 text-[var(--text-muted)]">
          White glowing spheres are octahedral voids (the uncovered hollows between layers A and B, midway in height). Pink ones are tetrahedral voids: one sits under each B sphere and one above each A sphere.
        </p>
      </div>
    </div>
  );
}

/* --------------------------------- why ABC stacking is the FCC lattice */

function FccAlong111() {
  const [view, setView] = useState<"cube" | "diag">("cube");
  const pts = useMemo(() => {
    const out: { p: V3; n: number }[] = [];
    for (let x = -2; x <= 2; x++) for (let y = -2; y <= 2; y++) for (let z = -2; z <= 2; z++) {
      if ((x + y + z) % 2 !== 0) continue;
      const n = ((((x + y + z) / 2) % 3) + 3) % 3;
      out.push({ p: [x, y, z], n });
    }
    return out;
  }, []);
  const letters = ["A", "B", "C"];
  const atoms: StageAtom[] = pts.map(({ p, n }, i) => ({ id: `q${i}`, p, r: 0.6, color: [C.blue, C.gold, C.green][n], opacity: Math.abs(p[0]) <= 1 && Math.abs(p[1]) <= 1 && Math.abs(p[2]) <= 1 ? 1 : view === "cube" ? 0.3 : 1 }));
  const cam: CameraPose = view === "cube" ? { key: "cube", az: 0.7, el: 0.5, dist: 19 } : { key: "diag", az: Math.PI / 4, el: Math.asin(1 / SQ3), dist: 19 };
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <Stage atoms={atoms} lines={cubeEdges("fc", 1)} camera={cam} floorY={-3.4} height={460} label="Face-centred cubic lattice coloured by layer along the body diagonal" />
        <Narration k={view}>
          {view === "cube" ? (
            <Rich text="An ordinary FCC lattice. Atoms are coloured by their position along the body diagonal [111]: **blue**, **amber**, **green**, then blue again. The bright cube is one unit cell." />
          ) : (
            <Rich text="Looking straight down the body diagonal, the same atoms fall into **close-packed hexagonal layers** stacked A, B, C. A face-centred cubic lattice **is** cubic close packing, tilted." />
          )}
        </Narration>
      </div>
      <div className="space-y-4">
        <Tabs label="Viewpoint" value={view} onChange={setView} items={[["cube", "As a cube"], ["diag", "Along the body diagonal [111]"]] as const} />
        <KeyIdea title="What you are seeing">
          {"The (111) planes of an FCC cell are perpendicular to the body diagonal. Their stacking repeats every three planes, " + letters.join("") + letters.join("") + ", which is exactly the cubic close-packed sequence. Hence **CCP = FCC**, with the layer planes along the cube's body diagonal."}
        </KeyIdea>
        <Facts items={[["Layer spacing", "a/√3"], ["Repeat", "3 layers"], ["Atoms/cell", "4"], ["Packing", "74.05 %"]]} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------ HCP unit cell */

function HcpCell() {
  const r = 0.62;
  const cell = useMemo(() => hcpCell(r), []);
  const tour = useTour(3, 2500);
  const step = tour.step;
  const [tet, setTet] = useState(false);
  const atoms: StageAtom[] = [
    ...cell.corner.map((p, i) => ({ id: `hc${i}`, p, r, color: C.blue, scale: step >= 1 ? 1 : 0, from: [p[0] * 1.8, p[1] * 1.6, p[2] * 1.8] as V3 })),
    ...cell.face.map((p, i) => ({ id: `hf${i}`, p, r, color: C.blue, scale: step >= 2 ? 1 : 0, from: [p[0], p[1] * 2, p[2]] as V3 })),
    ...cell.inner.map((p, i) => ({ id: `hi${i}`, p, r, color: C.gold, scale: step >= 3 ? 1 : 0, from: [p[0] * 2.4, p[1], p[2] * 2.4] as V3 })),
  ];
  const lines = useMemo(() => hexPrismEdges("hp", cell.a, cell.c), [cell]);
  const base: V3[] = [[0, -cell.c / 2, 0], [cell.a, -cell.c / 2, 0], [cell.a * Math.cos(Math.PI / 3), -cell.c / 2, cell.a * Math.sin(Math.PI / 3)]];
  const apex: V3 = cell.inner[0];
  const polys: StagePoly[] = tet ? [{ id: "tet", verts: [...base, apex], faces: [[0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]], color: C.rose, opacity: 0.4 }] : [];
  const says = [
    "A hexagonal prism: two hexagonal faces a distance **c** apart. Press **Build**.",
    "**Corner atoms.** Twelve corners, each shared by six cells: 12 × ⅙ = 2 atoms.",
    "**Face-centre atoms.** The top and bottom faces each hold a centre atom shared by two cells: 2 × ½ = 1 atom.",
    "**Interior atoms.** The middle layer contributes three atoms lying wholly inside the cell: 3. Total Z = 2 + 1 + 3 = 6.",
  ];

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-3">
          <Stage atoms={atoms} lines={lines} polys={polys} camera={{ key: "hcp", az: 0.5, el: 0.45, dist: 12.5 }} autoRotate floorY={-2.4} height={460} label="Hexagonal close-packed unit cell" />
          <Narration k={step}>
            <Rich text={says[step]} />
          </Narration>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Btn primary onClick={tour.play}>
              ▶ Build
            </Btn>
            <Btn onClick={() => setTet((t) => !t)}>{tet ? "Hide the tetrahedron" : "Show the tetrahedron"}</Btn>
          </div>
          <Facts items={[["Atoms per cell", "6"], ["Coordination", "12"], ["Ideal c/a", "1.633"], ["Packing", "74.05 %"]]} />
          <p className="text-sm leading-6 text-[var(--text-muted)]">
            Switch on the pink tetrahedron. Three touching atoms of the bottom layer and one atom of the middle layer form a regular tetrahedron of edge <Tex ex="2r" />. Half the height of the cell is exactly its height, which is how the next derivation finds c.
          </p>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <Derivation
          title="The ideal axial ratio c/a"
          steps={[
            { say: "Take the edge of the hexagon as $a = 2r$ (touching atoms). The base of the pink tetrahedron is an equilateral triangle of side $a$; its centroid is $a/\\sqrt3$ from each vertex." },
            { say: "The apex atom lies directly above the centroid at height $h$, and it touches each base atom, so its distance to a base vertex is also $a$:", tex: "h^2 + \\left(\\frac{a}{\\sqrt3}\\right)^2 = a^2" },
            { say: "Solve for the tetrahedron height:", tex: "h^2 = a^2 - \\frac{a^2}{3} = \\frac{2a^2}{3} \\;\\Rightarrow\\; h = a\\sqrt{\\tfrac23}" },
            { say: "The cell contains two such layer gaps (bottom to middle, middle to top):", tex: "c = 2h = 2a\\sqrt{\\tfrac23}" },
          ]}
          result="\\dfrac{c}{a} = \\sqrt{\\dfrac83} = 1.633"
        />
        <Derivation
          title="Packing efficiency of HCP"
          steps={[
            { say: "Atoms per cell: $Z = 12\\times\\tfrac16 + 2\\times\\tfrac12 + 3 = 6$." },
            { say: "Volume of the hexagonal prism = area of hexagon × height. A regular hexagon of side $a$ has area $\\tfrac{3\\sqrt3}{2}a^2$:", tex: "V_{\\text{cell}} = \\frac{3\\sqrt3}{2}a^2\\,c" },
            { say: "Put $a = 2r$ and $c = 2a\\sqrt{2/3} = 4r\\sqrt{2/3}$:", tex: "V_{\\text{cell}} = \\frac{3\\sqrt3}{2}(4r^2)\\left(4r\\sqrt{\\tfrac23}\\right) = 24\\sqrt2\\,r^3" },
            { say: "Volume of the six atoms:", tex: "V_{\\text{atoms}} = 6\\cdot\\tfrac43\\pi r^3 = 8\\pi r^3" },
            { say: "Divide:", tex: "\\eta = \\frac{8\\pi r^3}{24\\sqrt2\\,r^3} = \\frac{\\pi}{3\\sqrt2}" },
          ]}
          result="\\eta = 0.7405\\;(74.05\\%)"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------ voids in FCC */

function VoidsExplorer() {
  const [show, setShow] = useState<"tet" | "oct">("tet");
  const [slice, setSlice] = useState(false);
  const R = Math.SQRT1_2;
  const voidAtoms: StageAtom[] =
    show === "tet"
      ? TETRA_ALL.map((p, i) => ({ id: `t${i}`, p, r: 0.2247 * R * 1.0, color: C.rose, glow: true }))
      : [...EDGE_CENTRES.map((p, i) => ({ id: `eo${i}`, p, r: (Math.SQRT2 - 1) * R, color: "#ffffff", glow: true })), { id: "bo", p: [0, 0, 0] as V3, r: (Math.SQRT2 - 1) * R, color: "#ffffff", glow: true }];
  const host: StageAtom[] = [...CORNERS, ...FACES].map((p, i) => ({ id: `h${i}`, p, r: R * 0.9, color: C.blue, opacity: 0.22 }));
  const polys: StagePoly[] =
    show === "tet"
      ? [{ id: "tp", verts: [[1, 1, 1], [1, 0, 0], [0, 1, 0], [0, 0, 1]] as V3[], faces: [[0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]], color: C.rose, opacity: 0.35 }]
      : [{ id: "op", verts: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]] as V3[], faces: [[0, 2, 4], [0, 2, 5], [0, 3, 4], [0, 3, 5], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5]], color: C.steel, opacity: 0.25 }];
  const edgeLines = useMemo(() => cubeEdges("v"), []);
  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-3">
          <Stage atoms={[...host, ...voidAtoms]} lines={edgeLines} polys={polys} clip={slice ? 1.0005 : null} camera={{ key: "vo", az: 0.7, el: 0.45, dist: 9.6 }} autoRotate height={440} label="Tetrahedral and octahedral voids in an FCC cell" />
          <Narration k={`${show}-${slice}`}>
            {show === "tet" ? (
              <Rich text="**Tetrahedral voids.** Eight sit inside the cell at $(\tfrac14,\tfrac14,\tfrac14)$ of the edge, each surrounded by four host atoms (one corner and three face centres) at the vertices of a regular tetrahedron." />
            ) : (
              <Rich text={`**Octahedral voids.** One at the body centre and one on each of 12 edges. ${slice ? "Sliced to the cell, each edge void is just a quarter inside, and 12 × ¼ + 1 = 4." : "An edge void is shared by 4 cells, so 12 × ¼ + 1 = 4 per cell."}`} />
            )}
          </Narration>
        </div>
        <div className="space-y-4">
          <Tabs label="Void type" value={show} onChange={setShow} items={[["tet", "Tetrahedral"], ["oct", "Octahedral"]] as const} />
          <Btn onClick={() => setSlice((s) => !s)}>{slice ? "Show whole voids" : "✂ Slice to the cell"}</Btn>
          <Facts items={[["Per cell", show === "tet" ? "8" : "4"], ["Per atom", show === "tet" ? "2" : "1"], ["Fits radius", show === "tet" ? "0.225 R" : "0.414 R"], ["Coordination", show === "tet" ? "4" : "6"]]} />
          <p className="text-sm leading-6 text-[var(--text-muted)]">
            R is the radius of the host atoms. Atoms are drawn faint so the glowing voids show; their sizes are the real maximum spheres that fit.
          </p>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <Derivation
          title="How many voids? Counting in the FCC cell"
          steps={[
            { say: "Atoms per cell: $Z = 4$ (from Part 2)." },
            { say: "Tetrahedral voids: the cell is made of 8 small cubes (octants), each with one void at its centre. All 8 lie wholly inside the cell:", tex: "N_{\\text{tet}} = 8 = 2Z" },
            { say: "Octahedral voids: one at the body centre and one at the middle of each of the 12 edges (each edge shared by 4 cells):", tex: "N_{\\text{oct}} = 1 + 12\\times\\tfrac14 = 4 = Z" },
          ]}
          result="N \\text{ atoms}\\;\\Rightarrow\\; N \\text{ octahedral},\\; 2N \\text{ tetrahedral voids}"
        />
        <Derivation
          title="How big are the voids?"
          steps={[
            { say: "Host atoms touch along the face diagonal, so $a = 2\\sqrt2\\,R$." },
            { say: "**Octahedral:** along the cell edge the line runs corner, void, corner. The void just touches both corner atoms, so", tex: "a = 2R + 2r_o \\;\\Rightarrow\\; r_o = \\frac{2\\sqrt2 R - 2R}{2} = (\\sqrt2 - 1)R" },
            { say: "**Tetrahedral:** the void at $(\\tfrac14,\\tfrac14,\\tfrac14)$ is a quarter of the way along the body diagonal from a corner atom, so the centre-to-centre distance is $\\tfrac{\\sqrt3}{4}a$:", tex: "R + r_t = \\frac{\\sqrt3}{4}a = \\frac{\\sqrt3}{4}(2\\sqrt2 R) = \\sqrt{\\tfrac32}\\,R" },
            { say: "So", tex: "r_t = \\left(\\sqrt{\\tfrac32} - 1\\right)R" },
          ]}
          result="r_o = 0.414\\,R,\\qquad r_t = 0.225\\,R"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- diamond */

function DiamondCell() {
  const tour = useTour(3, 2600);
  const step = tour.step;
  const fcc: V3[] = [...CORNERS, ...FACES];
  const atoms: StageAtom[] = [
    ...fcc.map((p, i) => ({ id: `d${i}`, p, r: 0.34, color: "#6f8791", scale: step >= 1 ? 1 : 0, from: [p[0] * 2, p[1] * 2, p[2] * 2] as V3 })),
    ...TETRA_ALT.map((p, i) => ({ id: `t${i}`, p, r: 0.34, color: C.gold, scale: step >= 2 ? 1 : 0, from: [p[0] * 4, p[1] * 4, p[2] * 4] as V3 })),
  ];
  const bonds: StageBond[] = bondsBetween("b", TETRA_ALT, fcc, SQ3 / 2, 0.02, 0.07, C.white).map((b) => ({ ...b, scale: step >= 3 ? 1 : 0 }));
  const edges = useMemo(() => cubeEdges("de", 1, [0, 0, 0], true, 0.5), []);
  const says = [
    "Press **Build**. Diamond is made of one kind of atom, carbon.",
    "**An FCC framework** of carbon atoms: 4 per cell.",
    "**Four more atoms** go into alternate tetrahedral holes: the gold ones. Z = 4 + 4 = 8.",
    "**Covalent bonds.** Each gold atom bonds to four neighbours at the corners of a tetrahedron, and so does every other atom in the crystal. Each carbon is sp³ hybridised with coordination number 4.",
  ];
  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-3">
          <Stage atoms={atoms} bonds={bonds} lines={edges} camera={{ key: "dia", az: 0.7, el: 0.45, dist: 9.6 }} autoRotate height={440} label="Diamond cubic unit cell" />
          <Narration k={step}>
            <Rich text={says[step]} />
          </Narration>
        </div>
        <div className="space-y-4">
          <Btn primary onClick={tour.play}>
            ▶ Build
          </Btn>
          <Facts items={[["Atoms per cell", "8"], ["Coordination", "4"], ["C–C length", "√3 a / 4"], ["Packing", "34.0 %"]]} />
          <p className="text-sm leading-6 text-[var(--text-muted)]">
            Diamond is the zinc-blende structure with every site occupied by the same element. Silicon, germanium and grey tin share it.
          </p>
        </div>
      </div>
      <Derivation
        title="Packing efficiency of diamond"
        steps={[
          { say: "Each interior atom touches the four atoms around it. The distance from a tetrahedral hole at $(\\tfrac14,\\tfrac14,\\tfrac14)$ to the corner is a quarter of the body diagonal:", tex: "2r = \\frac{\\sqrt3}{4}\\,a \\;\\Rightarrow\\; r = \\frac{\\sqrt3\\,a}{8}" },
          { say: "Atoms per cell: $Z = 8\\times\\tfrac18 + 6\\times\\tfrac12 + 4 = 8$." },
          { say: "Fraction of volume:", tex: "\\eta = \\frac{8\\cdot\\tfrac43\\pi r^3}{a^3} = \\frac{32\\pi}{3}\\cdot\\frac{3\\sqrt3}{512} = \\frac{\\pi\\sqrt3}{16}" },
        ]}
        result="\\eta = 0.340\\;(34.0\\%)"
      />
    </div>
  );
}

/* --------------------------------------------------------------- chapter */

export function PackingChapter() {
  return (
    <Chapter id="packing" n="PART 3" title="Close packing, voids and diamond" lead="Metals and many ionic lattices are built by stacking layers of spheres as tightly as possible. The gaps left between layers, the voids, are where smaller ions sit.">
      <h3 className="text-2xl font-bold text-[var(--foreground)]">Packing in one plane</h3>
      <P t="Before stacking in three dimensions, see how circles pack in a plane. Squares waste more area; shifting alternate rows into the dips of the previous row packs them as tightly as possible." />
      <Packing2D />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Stacking layers in three dimensions</h3>
      <P t="Take the hexagonal layer **A** from above. Spheres of a second layer rest in hollows, but only half of the hollows can be used. Call that layer **B**. The third layer has a choice: sit above A, or above the hollows B left uncovered, which we call **C**. That single choice gives two different crystals with the same density." />
      <Stacking3D />
      <KeyIdea title="Same efficiency, different crystal">
        {"ABAB… gives **hexagonal close packing (HCP)**. ABCABC… gives **cubic close packing (CCP)**. In both, each sphere touches 12 others (6 in its own layer, 3 above, 3 below) and fills 74.05% of space. Examples of HCP: Mg, Zn, Cd, Ti. Examples of CCP: Cu, Ag, Au, Al, Ni."}
      </KeyIdea>
      <FccAlong111 />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">The hexagonal close-packed cell</h3>
      <HcpCell />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Tetrahedral and octahedral voids</h3>
      <P t="No matter how spheres are stacked, gaps remain. Two kinds matter. A **tetrahedral void** is surrounded by four spheres; an **octahedral void** by six. Small ions in ionic crystals occupy these voids." />
      <VoidsExplorer />

      <div className="grid gap-4 md:grid-cols-2">
        <Traps
          items={[
            "For N close-packed atoms there are **N octahedral** and **2N tetrahedral** voids, in both HCP and CCP.",
            "The octahedral void is the larger one (0.414 R against 0.225 R).",
            "HCP and CCP both have **12** neighbours and **74%** packing; they differ only in stacking and in the unit cell (hexagonal against cubic).",
            "HCP: 6 atoms, **6 octahedral and 12 tetrahedral** voids per hexagonal cell.",
          ]}
        />
        <Worked
          q="Atoms of A form a ccp lattice. Atoms of B occupy all the octahedral voids and half of the tetrahedral voids. What is the formula of the compound?"
          steps={["Take N atoms of A.", "Octahedral voids = N, all filled: N atoms of B.", "Tetrahedral voids = 2N; half filled: N atoms of B.", "B total = N + N = 2N, so A : B = N : 2N = 1 : 2."]}
          answer="AB₂"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Worked
          q="Anions of radius 200 pm form a ccp lattice. What is the radius of the largest cation that fits in an octahedral void, and in a tetrahedral void?"
          steps={["Octahedral: $r_o = 0.414\\times200 = 82.8$ pm.", "Tetrahedral: $r_t = 0.225\\times200 = 45$ pm."]}
          answer="82.8 pm (octahedral), 45 pm (tetrahedral)"
        />
        <Worked
          q="A compound is made of elements X and Y. X atoms form HCP and Y fills two-thirds of the octahedral voids. Find the formula and the number of Y atoms per hexagonal cell."
          steps={["HCP cell: 6 X atoms and 6 octahedral voids.", "Y atoms: $\\tfrac23\\times6 = 4$.", "X : Y = 6 : 4 = 3 : 2."]}
          answer="X₃Y₂, with 4 Y atoms per cell"
        />
      </div>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Diamond cubic</h3>
      <P t="Diamond is not close packed, but it is built on the same FCC lattice with four extra atoms in alternate tetrahedral holes. Every carbon is tetrahedrally bonded, which makes the crystal very hard." />
      <DiamondCell />
    </Chapter>
  );
}
