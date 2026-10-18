"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Stage, type CameraPose, type StageAtom, type StageBond, type StagePoly, type V3 } from "./_stage";
import { C, CORNERS, EDGE_CENTRES, FACES, SQ3, TETRA_ALL, TETRA_ALT, bondsBetween, cubeEdges, hcpCell, hexPrismEdges } from "./_geom";
import { HcpDrawingFig, HcpFig, HcpLayerFig, VoidFig } from "./_figs";
import { HcpTower } from "./s_hcptower";
import { Btn, Chapter, Derivation, Facts, KeyIdea, Narration, P, Rich, Slider, Tabs, Tex, Traps, Worked, useTour, useTween } from "./_ui";

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
          no={hex ? "3.2" : "3.1"}
          given={hex ? "Circles of radius $r$, each touching six neighbours." : "Circles of radius $r$ touching along rows and columns."}
          find="The fraction of the plane covered, $\eta$."
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
      <div className="space-y-8">
        <Derivation
          no="3.3"
          title="The ideal axial ratio c/a"
          given="An ideal HCP cell in which every atom (radius $r$) touches its 12 neighbours, so the hexagon edge is $a = 2r$."
          find="The cell height $c$, expressed as the ratio $c/a$."
          figure={<HcpFig />}
          steps={[
            { say: "Take the edge of the hexagon as $a = 2r$ (touching atoms). The base of the pink tetrahedron is an equilateral triangle of side $a$; its centroid is $a/\\sqrt3$ from each vertex." },
            { say: "The apex atom lies directly above the centroid at height $h$, and it touches each base atom, so its distance to a base vertex is also $a$:", tex: "h^2 + \\left(\\frac{a}{\\sqrt3}\\right)^2 = a^2" },
            { say: "Solve for the tetrahedron height:", tex: "h^2 = a^2 - \\frac{a^2}{3} = \\frac{2a^2}{3} \\;\\Rightarrow\\; h = a\\sqrt{\\tfrac23}" },
            { say: "The cell contains two such layer gaps (bottom to middle, middle to top):", tex: "c = 2h = 2a\\sqrt{\\tfrac23}" },
          ]}
          result="\dfrac{c}{a} = \sqrt{\dfrac83} = 1.633"
        />
        <Derivation
          no="3.4"
          title="Packing efficiency of HCP"
          given="The ideal HCP cell with $a = 2r$ and $c = 4r\sqrt{2/3}$ from derivation 3.3."
          find="The fraction of the hexagonal prism filled by atoms."
          steps={[
            { say: "Atoms per cell: $Z = 12\\times\\tfrac16 + 2\\times\\tfrac12 + 3 = 6$." },
            { say: "Volume of the hexagonal prism = area of hexagon × height. A regular hexagon of side $a$ has area $\\tfrac{3\\sqrt3}{2}a^2$:", tex: "V_{\\text{cell}} = \\frac{3\\sqrt3}{2}a^2\\,c" },
            { say: "Put $a = 2r$ and $c = 2a\\sqrt{2/3} = 4r\\sqrt{2/3}$:", tex: "V_{\\text{cell}} = \\frac{3\\sqrt3}{2}(4r^2)\\left(4r\\sqrt{\\tfrac23}\\right) = 24\\sqrt2\\,r^3" },
            { say: "Volume of the six atoms:", tex: "V_{\\text{atoms}} = 6\\cdot\\tfrac43\\pi r^3 = 8\\pi r^3" },
            { say: "Divide:", tex: "\\eta = \\frac{8\\pi r^3}{24\\sqrt2\\,r^3} = \\frac{\\pi}{3\\sqrt2}" },
          ]}
          result="\eta = 0.7405\;(74.05\%)"
        />
      </div>
    </div>
  );
}



/* ------------------------------------- 3D lattices built from square layers */

type SqMode = "sc" | "bcc" | "fcc";
const SQ: Record<SqMode, { tab: string; r: number; dy: number; off: number; say: string; cn: string; pf: string; title: string }> = {
  sc: { tab: "AAA…", r: 0.5, dy: 1, off: 0, cn: "4 + 1 + 1 = 6", pf: "52.4 %", title: "Simple cubic", say: "Square layers placed **directly above one another** (AAA…). Each atom touches 4 neighbours in its own layer, 1 above and 1 below: coordination number **6**. The layers are not close packed, so the packing is the poorest of the three." },
  bcc: { tab: "ABAB… (open)", r: 0.433, dy: 0.5, off: 0.5, cn: "0 + 4 + 4 = 8", pf: "68.0 %", title: "Body-centred cubic", say: "Square layers that are **not** touching in-plane, with each layer sitting in the hollows of the one below (ABAB…). An atom touches 4 in the layer above and 4 in the layer below: coordination number **8**. The sphere of the second layer lies in the voids of the first." },
  fcc: { tab: "ABAB… (closed)", r: 0.5, dy: Math.SQRT1_2, off: 0.5, cn: "4 + 4 + 4 = 12", pf: "74.05 %", title: "Face-centred cubic (ccp)", say: "**Square close packing**: atoms touch along rows and columns, and each layer sits in the hollows of the one below. An atom has 4 neighbours in its layer, 4 above and 4 below: coordination number **12**. Three layers are enough to show all twelve. This is the same ccp lattice that hexagonal layers give, seen along a cube axis." },
};

function SquareStack() {
  const [mode, setMode] = useState<SqMode>("sc");
  const q = SQ[mode];
  const g = 1.15;
  const pos: { id: string; p: V3; mid: boolean; layer: number }[] = [];
  for (let L = 0; L < 3; L++) for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) {
    const o = (L % 2) * q.off;
    pos.push({ id: `${L}_${i}_${j}`, p: [(i + o) * g, (L - 1) * q.dy * g, (j + o) * g], mid: L === 1 && i === 0 && j === 0, layer: L });
  }
  const centre = pos.find((a) => a.mid)!.p;
  const R = q.r * g;
  const atoms: StageAtom[] = pos.map((a) => {
    const d = Math.hypot(a.p[0] - centre[0], a.p[1] - centre[1], a.p[2] - centre[2]);
    const near = !a.mid && d <= 2 * R * 1.02;
    return { id: a.id, p: a.p, r: R, color: a.mid ? C.white : near ? C.gold : a.layer === 1 ? C.teal : C.blue, opacity: a.mid || near ? 1 : 0.38, glow: a.mid };
  });
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <Stage atoms={atoms} camera={{ key: `sq-${mode}`, az: 0.7, el: 0.5, dist: 9.5 }} autoRotate floorY={-1.9} height={430} label={`Three square layers stacked to make a ${q.title} lattice`} />
        <Narration k={mode}>
          <Rich text={q.say} />
        </Narration>
      </div>
      <div className="space-y-4">
        <Tabs label="Stacking of square layers" value={mode} onChange={setMode} items={(Object.keys(SQ) as SqMode[]).map((k) => [k, SQ[k].tab] as const)} />
        <Facts items={[["Lattice", q.title], ["Coordination", q.cn], ["Packing", q.pf], ["Layers needed", "3"]]} cols={2} />
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          The white atom is the one being examined and its touching neighbours are gold. Using <strong className="text-[var(--foreground)]">hexagonal</strong> layers instead, an atom has 6 neighbours in its layer plus 3 above and 3 below: 3 + 6 + 3 = 12, and four layers are needed to show them. Placing the third layer over the tetrahedral voids of the first gives ABAB (hcp); over the octahedral voids gives ABCABC (ccp).
        </p>
      </div>
    </div>
  );
}


/* ---------------------------------------- floor-by-floor guide to the HCP holes */

type Floor = { name: string; small: number; big: number; kind: "A" | "B" | "small-low" | "big" | "small-mid"; say: string };
const FLOORS: Floor[] = [
  { name: "Floor 1 (height 0)", small: 0, big: 0, kind: "A", say: "The bottom layer of balls, called **layer A**: one ball in the middle and six around it. No holes are counted here; the holes live between the layers." },
  { name: "Floor 2 (height h/8)", small: 3, big: 0, kind: "small-low", say: "Just above layer A we find **3 small holes**. Each one is tucked under a ball of the middle layer, with 3 balls of layer A below it and 1 ball above: 4 balls in all." },
  { name: "Floor 3 (height 2h/8)", small: 0, big: 3, kind: "big", say: "A little higher are **3 big holes**. Each has 3 balls of layer A under it and 3 balls of the middle layer over it: 6 balls in all." },
  { name: "Floor 4 (height 3h/8)", small: 3, big: 0, kind: "small-mid", say: "Another floor of small holes. One sits right above the middle ball of layer A. The 6 around the edge are each shared by 3 neighbouring boxes, so they count 6 × ⅓ = 2. Total: 1 + 2 = **3 small holes**." },
  { name: "Floor 5 (height 4h/8)", small: 0, big: 0, kind: "B", say: "The middle layer, **layer B**: 3 balls sitting in the dips of layer A. These are balls, not holes." },
  { name: "Floor 6 (height 5h/8)", small: 3, big: 0, kind: "small-mid", say: "The mirror image of floor 4, just under the top layer: 1 + 6 × ⅓ = **3 small holes**." },
  { name: "Floor 7 (height 6h/8)", small: 0, big: 3, kind: "big", say: "**3 big holes** again, between the middle layer and the top layer." },
  { name: "Floor 8 (height 7h/8)", small: 3, big: 0, kind: "small-low", say: "The last floor of small holes: **3 small holes** hugging the top layer, mirror image of floor 2." },
  { name: "Floor 9 (height h)", small: 0, big: 0, kind: "A", say: "The top layer is another **layer A**, an exact copy of the bottom one. The next box starts here." },
];

function HcpFloors() {
  const [fl, setFl] = useState(1);
  const F = FLOORS[fl];
  const tot = FLOORS.slice(0, fl + 1).reduce((t, x) => ({ small: t.small + x.small, big: t.big + x.big }), { small: 0, big: 0 });
  const a = 78, cx = 130, cy = 120;
  const pol = (r: number, d: number): [number, number] => [cx + r * Math.cos((d * Math.PI) / 180), cy - r * Math.sin((d * Math.PI) / 180)];
  const corners = [0, 60, 120, 180, 240, 300].map((d) => pol(a, d));
  const bPos = [30, 150, 270].map((d) => pol(a / Math.sqrt(3), d));
  const oPos = [90, 210, 330].map((d) => pol(a / Math.sqrt(3), d));
  const smallLow = bPos; // under or over a B ball
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
      <svg viewBox="0 0 260 240" role="img" aria-label={`Top view of ${F.name}`} className="mx-auto w-full max-w-[300px] rounded-2xl border border-white/10" style={{ background: "radial-gradient(120% 90% at 50% 18%, #17433f 0%, #0c1f1e 52%, #060f0f 100%)" }}>
        <polygon points={corners.map((p) => p.join(",")).join(" ")} fill="none" stroke="#cfe5e1" strokeOpacity={0.6} strokeWidth={1.6} />
        {(F.kind === "A") && [...corners, [cx, cy] as [number, number]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={20} fill="#e8a9e6" stroke="#0a0a0a" strokeWidth={1.2} fillOpacity={0.9} />)}
        {(F.kind === "B") && bPos.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={22} fill="#f2b13f" stroke="#0a0a0a" strokeWidth={1.2} />)}
        {(F.kind === "small-low") && <>
          {bPos.map(([x, y], i) => <circle key={`g${i}`} cx={x} cy={y} r={22} fill="#f2b13f" fillOpacity={0.18} stroke="#f2b13f" strokeOpacity={0.4} strokeDasharray="3 3" />)}
          {smallLow.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={8} fill="#e8607a" stroke="#fff" strokeWidth={1.5} />)}
        </>}
        {(F.kind === "small-mid") && <>
          {[...corners, [cx, cy] as [number, number]].map(([x, y], i) => <circle key={`g${i}`} cx={x} cy={y} r={20} fill="#e8a9e6" fillOpacity={0.16} stroke="#e8a9e6" strokeOpacity={0.4} strokeDasharray="3 3" />)}
          {[...corners, [cx, cy] as [number, number]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={8} fill="#e8607a" stroke="#fff" strokeWidth={1.5} />)}
          {corners.map(([x, y], i) => <text key={`t${i}`} x={x + 11} y={y - 11} fontSize={11} fontWeight={800} fill="#ffd1da">⅓</text>)}
        </>}
        {(F.kind === "big") && <>
          {[...bPos].map(([x, y], i) => <circle key={`g${i}`} cx={x} cy={y} r={22} fill="#f2b13f" fillOpacity={0.14} stroke="#f2b13f" strokeOpacity={0.35} strokeDasharray="3 3" />)}
          {oPos.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={13} fill="#f4f1e8" stroke="#06100f" strokeWidth={1.5} />)}
        </>}
        <text x={130} y={232} textAnchor="middle" fontSize={12} fill="#b8cbc7">view from above</text>
      </svg>
      <div className="space-y-4">
        <Slider label="Walk up the box, floor by floor" value={fl + 1} onChange={(v) => setFl(v - 1)} min={1} max={9} show={F.name} />
        <Narration k={fl}>
          <Rich text={F.say} />
        </Narration>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
            <div className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Small holes so far</div>
            <div className="mt-1 font-mono text-3xl font-black text-rose-300">{tot.small}</div>
            <div className="text-xs text-[var(--text-muted)]">final answer: 12</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
            <div className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Big holes so far</div>
            <div className="mt-1 font-mono text-3xl font-black text-[var(--foreground)]">{tot.big}</div>
            <div className="text-xs text-[var(--text-muted)]">final answer: 6</div>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ---------------------------------------- animated 3D tour of the HCP holes */

const TOUR_STEPS = [
  "Start with **layer A**: 7 balls packed like a flower. One ball in the middle, six around it.",
  "Add **layer B**: 3 balls. Each one sits in a dip between three balls of layer A, like oranges stacked in a shop.",
  "Put **layer A** on top again. A, B, A: this is the hexagonal box (unit cell). It holds 6 balls.",
  "Now look for gaps. These pink dots are **small holes**, first floor, just above the bottom layer. The glowing balls are the **4 balls** that touch one hole: a tiny pyramid. This floor has **3 small holes**.",
  "Second floor of small holes. One sits above the middle ball, and 6 sit at the corners. Corner holes are shared by 3 boxes, so they count ⅓ each: 1 + 6 × ⅓ = **3 small holes**.",
  "Third floor: the same pattern, a mirror image of the second. **3 more small holes**.",
  "Top floor: **3 small holes**, a mirror image of the first floor. Running total: 3 + 3 + 3 + 3 = **12 small holes**, which is 2 for each of the 6 balls.",
  "All **12 small holes** at once (drawn a little larger so you can see them). Each fits a ball up to 0.225 times as big as the big balls.",
  "Now the **big holes** (white). Each one is surrounded by **6 balls**: 3 below and 3 above, turned against each other, like two pyramids glued base to base. This floor has **3 big holes**.",
  "Another **3 big holes** just under the top layer. Total: **6 big holes**, which is 1 for each ball. A ball up to 0.414 times as big fits in one.",
  "Both together: in a box of 6 balls there are **12 small holes** and **6 big holes**. Rule for any close-packed crystal: for N balls, **2N small holes** and **N big holes**.",
];

function HcpTour() {
  const R = 0.62;
  const cell = useMemo(() => hcpCell(R), []);
  const { a, c } = cell;
  const q = a / SQ3;
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const stepRef = useRef(0);
  useEffect(() => {
    stepRef.current = step;
  });
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      if (stepRef.current >= TOUR_STEPS.length - 1) {
        setPlaying(false);
        return;
      }
      setStep(stepRef.current + 1);
    }, 4600);
    return () => window.clearInterval(id);
  }, [playing]);

  const pol = (rad: number, deg: number): [number, number] => [rad * Math.cos((deg * Math.PI) / 180), rad * Math.sin((deg * Math.PI) / 180)];
  const bPos: [number, number][] = [30, 150, 270].map((d) => pol(q, d));
  const oPos: [number, number][] = [90, 210, 330].map((d) => pol(q, d));
  const cornersXZ: [number, number][] = [0, 60, 120, 180, 240, 300].map((d) => pol(a, d));

  const floors = {
    f1: bPos.map(([x, z]) => [x, -(3 * c) / 8, z] as V3),
    f3: [[0, -c / 8, 0] as V3, ...cornersXZ.map(([x, z]) => [x, -c / 8, z] as V3)],
    f5: [[0, c / 8, 0] as V3, ...cornersXZ.map(([x, z]) => [x, c / 8, z] as V3)],
    f7: bPos.map(([x, z]) => [x, (3 * c) / 8, z] as V3),
    o2: oPos.map(([x, z]) => [x, -c / 4, z] as V3),
    o6: oPos.map(([x, z]) => [x, c / 4, z] as V3),
  };
  const smallShown: V3[] = step >= 7 && step <= 7 ? [...floors.f1, ...floors.f3, ...floors.f5, ...floors.f7] : step >= 10 ? [...floors.f1, ...floors.f3, ...floors.f5, ...floors.f7] : [
    ...(step >= 3 && step <= 6 ? floors.f1 : []),
    ...(step >= 4 && step <= 6 ? floors.f3 : []),
    ...(step >= 5 && step <= 6 ? floors.f5 : []),
    ...(step >= 6 && step <= 6 ? floors.f7 : []),
  ];
  const bigShown: V3[] = step >= 10 ? [...floors.o2, ...floors.o6] : [...(step >= 8 ? floors.o2 : []), ...(step >= 9 ? floors.o6 : [])];

  // the one hole whose neighbours we highlight on each step
  const focus: V3 | null = step === 3 ? floors.f1[0] : step === 4 ? floors.f3[0] : step === 5 ? floors.f5[0] : step === 6 ? floors.f7[0] : step === 8 ? floors.o2[0] : step === 9 ? floors.o6[0] : null;

  const balls: { id: string; p: V3; layer: "A" | "B" | "T" }[] = [
    ...cell.corner.map((p, i) => ({ id: `c${i}`, p, layer: (i < 6 ? "A" : "T") as "A" | "T" })),
    { id: "fa", p: cell.face[0], layer: "A" as const },
    { id: "ft", p: cell.face[1], layer: "T" as const },
    ...cell.inner.map((p, i) => ({ id: `b${i}`, p, layer: "B" as const })),
  ];
  // balls outside the box that also touch a big hole near the edge
  const extra: { id: string; p: V3 }[] = [90, 210, 330].map((d, i) => { const [x, z] = pol(2 * q, d); return { id: `x${i}`, p: [x, 0, z] as V3 }; });
  const pool = [...balls.map((b) => ({ id: b.id, p: b.p })), ...extra];
  const want = focus ? (step >= 8 ? 6 : 4) : 0;
  const near = focus ? [...pool].sort((m, n) => dist(m.p, focus) - dist(n.p, focus)).slice(0, want) : [];
  const nearIds = new Set(near.map((n) => n.id));

  const atoms: StageAtom[] = [
    ...balls.map((b) => {
      const shownLayer = b.layer === "A" ? true : b.layer === "B" ? step >= 1 : step >= 2;
      const holeMode = step >= 3;
      const lit = nearIds.has(b.id);
      const op = !holeMode ? 0.95 : lit ? 0.5 : 0.1;
      const col = b.layer === "B" ? C.gold : C.blue;
      return { id: b.id, p: b.p, r: R, color: lit ? (b.layer === "B" ? "#ffd37a" : "#8fc7ff") : col, scale: shownLayer ? 1 : 0, opacity: op, glow: lit, from: [b.p[0], b.p[1] + (b.layer === "T" ? 3 : b.layer === "B" ? 2.4 : 0), b.p[2]] as V3 };
    }),
    ...extra.map((x) => ({ id: x.id, p: x.p, r: R, color: "#ffd37a", scale: nearIds.has(x.id) ? 1 : 0, opacity: 0.55, glow: true })),
    ...smallShown.map((p) => ({ id: `s${p.map((v) => v.toFixed(2)).join("_")}`, p, r: 0.2247 * R * 1.8, color: C.rose, glow: true, scale: 1, from: [p[0], p[1] - 0.6, p[2]] as V3, opacity: 1 }) as StageAtom),
    ...bigShown.map((p) => ({ id: `o${p.map((v) => v.toFixed(2)).join("_")}`, p, r: 0.414 * R * 1.3, color: "#ffffff", glow: true, scale: 1, from: [p[0], p[1] - 0.6, p[2]] as V3, opacity: 1 }) as StageAtom),
  ];
  const lines = useMemo(() => hexPrismEdges("tp", a, c), [a, c]);
  const polys: StagePoly[] = [];
  if (focus && near.length) {
    const vs = near.map((n) => n.p);
    const faces: number[][] = [];
    const edge = 2 * R * 1.02;
    for (let i = 0; i < vs.length; i++) for (let j = i + 1; j < vs.length; j++) for (let k = j + 1; k < vs.length; k++) {
      if (dist(vs[i], vs[j]) < edge && dist(vs[j], vs[k]) < edge && dist(vs[i], vs[k]) < edge) faces.push([i, j, k]);
    }
    polys.push({ id: "hl", verts: vs, faces, color: step >= 8 ? "#ffffff" : C.rose, opacity: 0.32 });
  }
  const cams: CameraPose[] = [
    { key: "t0", az: 0.6, el: 0.55, dist: 10.5 },
    { key: "t1", az: 0.9, el: 0.5, dist: 10.5 },
    { key: "t2", az: 0.5, el: 0.35, dist: 11 },
    { key: "t3", az: 0.2, el: 0.3, dist: 11.5, target: [0, -c / 3, 0] },
    { key: "t4", az: 1.0, el: 0.3, dist: 11.5, target: [0, -c / 8, 0] },
    { key: "t5", az: 1.8, el: 0.3, dist: 11.5, target: [0, c / 8, 0] },
    { key: "t6", az: 2.6, el: 0.3, dist: 11.5, target: [0, c / 3, 0] },
    { key: "t7", az: 0.5, el: 0.4, dist: 11 },
    { key: "t8", az: 0.3, el: 0.3, dist: 12, target: [0, -c / 4, 0] },
    { key: "t9", az: 1.6, el: 0.3, dist: 12, target: [0, c / 4, 0] },
    { key: "t10", az: 0.55, el: 0.4, dist: 11.5 },
  ];
  const smallCount = step < 3 ? 0 : step === 3 ? 3 : step === 4 ? 6 : step === 5 ? 9 : 12;
  const bigCount = step < 8 ? 0 : step === 8 ? 3 : 6;
  return (
    <div className="space-y-4">
      <Stage atoms={atoms} lines={lines} polys={polys} camera={cams[step]} autoRotate={step === 0 || step === 2 || step === 7 || step === 10} floorY={-2.5} height={520} label="Animated 3D tour of the small and big holes in an HCP cell" hint="drag to look around" />
      <Narration k={step}>
        <Rich text={TOUR_STEPS[step]} />
      </Narration>
      <div className="flex flex-wrap items-center gap-3">
        <Btn primary onClick={() => { setStep(0); setPlaying(true); }}>
          ▶ Play the tour
        </Btn>
        <Btn onClick={() => { setPlaying(false); setStep((v) => Math.max(0, v - 1)); }}>◀ Back</Btn>
        <Btn onClick={() => { setPlaying(false); setStep((v) => Math.min(TOUR_STEPS.length - 1, v + 1)); }}>Next ▶</Btn>
        <span className="text-sm text-[var(--text-muted)]">Step {step + 1} of {TOUR_STEPS.length}</span>
        <div className="ml-auto flex gap-3 text-sm">
          <span className="rounded-lg border border-[var(--border)] px-3 py-1.5">Small holes <b className="ml-1 font-mono text-rose-300">{smallCount}</b> <span className="text-[var(--text-muted)]">/ 12</span></span>
          <span className="rounded-lg border border-[var(--border)] px-3 py-1.5">Big holes <b className="ml-1 font-mono">{bigCount}</b> <span className="text-[var(--text-muted)]">/ 6</span></span>
        </div>
      </div>
    </div>
  );
}

const dist = (m: V3, n: V3) => Math.hypot(m[0] - n[0], m[1] - n[1], m[2] - n[2]);

/* --------------------------------------------------- voids in the HCP cell */

function HcpVoids() {
  const r = 0.62;
  const cell = useMemo(() => hcpCell(r), []);
  const [show, setShow] = useState<"tet" | "oct">("tet");
  const [one, setOne] = useState(false);
  const { a, c } = cell;
  const q = a / SQ3;
  const pol = (rad: number, deg: number): [number, number] => [rad * Math.cos((deg * Math.PI) / 180), rad * Math.sin((deg * Math.PI) / 180)];
  const host: StageAtom[] = [
    ...cell.corner.map((p, i) => ({ id: `vc${i}`, p, r: r * 0.9, color: C.blue, opacity: 0.24 })),
    ...cell.face.map((p, i) => ({ id: `vf${i}`, p, r: r * 0.9, color: C.blue, opacity: 0.24 })),
    ...cell.inner.map((p, i) => ({ id: `vi${i}`, p, r: r * 0.9, color: C.gold, opacity: 0.3 })),
  ];
  const tv: V3[] = [];
  for (const s of [-1, 1]) {
    tv.push([0, s * (c / 2 - (3 * c) / 8) * 1, 0]); // above and below the hexagon-centre atoms
    for (const p of cell.inner) tv.push([p[0], s * ((3 * c) / 8), p[2]]); // above and below each B atom
    for (let k = 0; k < 6; k++) { const [x, z] = pol(a, k * 60); tv.push([x, s * (c / 8), z]); } // corners (shared by three cells)
  }
  const ov: V3[] = [];
  for (const s of [-1, 1]) for (const d of [90, 210, 330]) { const [x, z] = pol(q, d); ov.push([x, s * (c / 4), z]); }
  const voidAtoms: StageAtom[] =
    show === "tet"
      ? tv.map((p, i) => ({ id: `tv${i}`, p, r: 0.2247 * r, color: C.rose, glow: true }))
      : ov.map((p, i) => ({ id: `ov${i}`, p, r: 0.414 * r, color: "#ffffff", glow: true }));
  const lines = useMemo(() => hexPrismEdges("vp", a, c), [a, c]);
  const apex: V3 = [0, -c / 2, 0];
  const tri: V3[] = cell.inner;
  const polys: StagePoly[] = one && show === "tet" ? [{ id: "one", verts: [apex, ...tri], faces: [[0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]], color: C.rose, opacity: 0.4 }] : [];
  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-3">
          <Stage atoms={[...host, ...voidAtoms]} lines={lines} polys={polys} camera={{ key: "hv", az: 0.5, el: 0.4, dist: 10.5 }} autoRotate floorY={-2.4} height={500} label="Tetrahedral and octahedral voids in an HCP cell" />
          <Narration k={`${show}-${one}`}>
            {show === "tet" ? (
              <Rich text="**Tetrahedral voids.** One lies directly above and one directly below **every** atom: 6 atoms × 2 = **12** per cell. Counting by position: 2 over the hexagon-centre atoms, 6 over the three middle-layer atoms, and 12 at the corners that are each shared by three cells, 12 × ⅓ = 4. Total 2 + 6 + 4 = 12. They sit at heights h/8, 3h/8, 5h/8, 7h/8." />
            ) : (
              <Rich text="**Octahedral voids.** They sit midway between an A layer and the B layer, three at height h/4 and three at 3h/4, all wholly inside the cell: **6 per cell**, one per atom, exactly as in FCC." />
            )}
          </Narration>
        </div>
        <div className="space-y-4">
          <Tabs label="Void type" value={show} onChange={setShow} items={[["tet", "Tetrahedral"], ["oct", "Octahedral"]] as const} />
          {show === "tet" && <Btn onClick={() => setOne((o) => !o)}>{one ? "Hide one tetrahedron" : "Show one tetrahedron"}</Btn>}
          <Facts items={[["Atoms per cell", "6"], ["Tetrahedral voids", "12 (2 per atom)"], ["Octahedral voids", "6 (1 per atom)"], ["Void radii", "0.225 R and 0.414 R"]]} cols={2} />
          <HcpLayerFig />
        </div>
      </div>
      <div className="mx-auto max-w-xl">
        <HcpDrawingFig />
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
      <div className="space-y-8">
        <Derivation
          no="3.5"
          title="How many voids? Counting in the FCC cell"
          given="An FCC cell with $Z = 4$ host atoms."
          find="The number of tetrahedral and octahedral voids per cell."
          steps={[
            { say: "Atoms per cell: $Z = 4$ (from Part 2)." },
            { say: "Tetrahedral voids: the cell is made of 8 small cubes (octants), each with one void at its centre. All 8 lie wholly inside the cell:", tex: "N_{\\text{tet}} = 8 = 2Z" },
            { say: "Octahedral voids: one at the body centre and one at the middle of each of the 12 edges (each edge shared by 4 cells):", tex: "N_{\\text{oct}} = 1 + 12\\times\\tfrac14 = 4 = Z" },
          ]}
          result="N \text{ atoms}\;\Rightarrow\; N \text{ octahedral},\; 2N \text{ tetrahedral voids}"
        />
        <Derivation
          no="3.6"
          title="How big are the voids?"
          given="Host atoms of radius $R$ in FCC, touching along the face diagonal."
          find="The radius of the largest sphere that fits in each kind of void."
          figure={<VoidFig kind="oct" />}
          steps={[
            { say: "Host atoms touch along the face diagonal, so $a = 2\\sqrt2\\,R$." },
            { say: "**Octahedral:** along the cell edge the line runs corner, void, corner. The void just touches both corner atoms, so", tex: "a = 2R + 2r_o \\;\\Rightarrow\\; r_o = \\frac{2\\sqrt2 R - 2R}{2} = (\\sqrt2 - 1)R" },
            { say: "**Tetrahedral:** the void at $(\\tfrac14,\\tfrac14,\\tfrac14)$ is a quarter of the way along the body diagonal from a corner atom, so the centre-to-centre distance is $\\tfrac{\\sqrt3}{4}a$:", tex: "R + r_t = \\frac{\\sqrt3}{4}a = \\frac{\\sqrt3}{4}(2\\sqrt2 R) = \\sqrt{\\tfrac32}\\,R" },
            { say: "So", tex: "r_t = \\left(\\sqrt{\\tfrac32} - 1\\right)R" },
          ]}
          result="r_o = 0.414\,R,\qquad r_t = 0.225\,R"
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
        no="3.7"
        title="Packing efficiency of diamond"
        given="The diamond cubic cell: an FCC lattice plus four atoms at the tetrahedral sites, each bonded to its four nearest neighbours."
        find="The packing efficiency of the diamond structure."
        steps={[
          { say: "Each interior atom touches the four atoms around it. The distance from a tetrahedral hole at $(\\tfrac14,\\tfrac14,\\tfrac14)$ to the corner is a quarter of the body diagonal:", tex: "2r = \\frac{\\sqrt3}{4}\\,a \\;\\Rightarrow\\; r = \\frac{\\sqrt3\\,a}{8}" },
          { say: "Atoms per cell: $Z = 8\\times\\tfrac18 + 6\\times\\tfrac12 + 4 = 8$." },
          { say: "Fraction of volume:", tex: "\\eta = \\frac{8\\cdot\\tfrac43\\pi r^3}{a^3} = \\frac{32\\pi}{3}\\cdot\\frac{3\\sqrt3}{512} = \\frac{\\pi\\sqrt3}{16}" },
        ]}
        result="\eta = 0.340\;(34.0\%)"
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

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Building the cubic lattices from square layers</h3>
      <P t="Square layers can be stacked in three ways, and each way produces one of the cubic lattices you met in Part 2. Compare how many neighbours an atom gets in each case." />
      <SquareStack />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">The hexagonal close-packed cell</h3>
      <HcpCell />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Tetrahedral and octahedral voids</h3>
      <P t="No matter how spheres are stacked, gaps remain. Two kinds matter. A **tetrahedral void** is surrounded by four spheres; an **octahedral void** by six. Small ions in ionic crystals occupy these voids." />
      <VoidsExplorer />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Voids in the HCP cell</h3>
      <P t="Think of oranges stacked in a shop. Between the oranges there are gaps. A **hole** is one of those gaps. There are only two shapes of gap." />
      <div className="grid gap-4 md:grid-cols-2">
        <KeyIdea title="Small hole = tetrahedral void (T.V.)">
          {"A small gap with **4 balls** around it: 3 touching on one side and 1 on the other, like the corners of a tiny pyramid. A ball that fits in it can be at most **0.225** times the size of the big balls."}
        </KeyIdea>
        <KeyIdea title="Big hole = octahedral void (O.V.)">
          {"A bigger gap with **6 balls** around it: 3 below and 3 above, twisted against each other, like two pyramids stuck base to base. A ball that fits in it can be up to **0.414** times the size of the big balls."}
        </KeyIdea>
      </div>
      <P t="**Rule to remember:** for every **1** ball there are **2 small holes** and **1 big hole**. The hexagonal box (unit cell) has 6 balls, so it has **12 small holes** and **6 big holes**. Walk up the box floor by floor and count them yourself." />
      <HcpTower />
      <P t="Prefer a guided slide show with numbered steps? Here it is." />
      <HcpTour />
      <P t="Prefer to count on paper? Slide through the floors from above." />
      <HcpFloors />
      <P t="Now the same box in 3D, and a side view that shows the exact height of each kind of hole." />
      <HcpVoids />

      <div className="grid gap-4 md:grid-cols-2">
        <Traps
          items={[
            "For N close-packed atoms there are **N octahedral** and **2N tetrahedral** voids, in both HCP and CCP.",
            "The octahedral void is the larger one (0.414 R against 0.225 R).",
            "HCP and CCP both have **12** neighbours and **74%** packing; they differ only in stacking and in the unit cell (hexagonal against cubic).",
            "HCP: 6 atoms, **6 octahedral and 12 tetrahedral** voids per hexagonal cell.",
            "Packing fraction by **volume** of layers stacked directly on top of each other (AAA): square layers give $\\pi/6 = 0.52$ (simple cubic); hexagonal layers give $\\pi/(3\\sqrt3) = 0.60$. Only the offset stacking ABAB or ABCABC reaches 0.74.",
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
