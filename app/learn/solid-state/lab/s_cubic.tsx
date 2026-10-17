"use client";

import { useMemo, useState } from "react";
import { Stage, type CameraPose, type StageAtom, type StageBond, type V3 } from "./_stage";
import { C, CORNERS, FACES, cubeEdges, latticePoints, neighbourShells } from "./_geom";
import { Btn, Chapter, Derivation, Facts, KeyIdea, Narration, P, Rich, Slider, Tabs, Tex, Traps, Worked, useTour, type DerivStep } from "./_ui";

type Kind = "sc" | "bcc" | "fcc";
const NA = 6.022e23;

const DEF: Record<
  Kind,
  {
    name: string;
    rc: number;
    z: number;
    cn: number;
    eta: number;
    aOverR: string;
    contact: string;
    contactTex: string;
    stages: string[];
    deriv: { title: string; steps: DerivStep[]; result: string };
  }
> = {
  sc: {
    name: "Simple cubic (primitive)",
    rc: 1,
    z: 1,
    cn: 6,
    eta: Math.PI / 6,
    aOverR: "2r",
    contact: "cell edge",
    contactTex: "a = 2r",
    stages: ["corners"],
    deriv: {
      title: "Packing efficiency of simple cubic",
      steps: [
        { say: "Neighbouring atoms touch along the **cell edge**, so one edge holds two radii.", tex: "a = 2r" },
        { say: "Atoms sit only at the 8 corners; each is shared by 8 cells.", tex: "Z = 8\\times\\tfrac18 = 1" },
        { say: "Volume of the one atom that belongs to the cell:", tex: "V_{\\text{atom}} = \\tfrac43\\pi r^3" },
        { say: "Volume of the cell, using step 1:", tex: "V_{\\text{cell}} = a^3 = (2r)^3 = 8r^3" },
        { say: "Packing efficiency is the fraction of the cell volume filled by atoms:", tex: "\\eta = \\frac{Z\\cdot\\tfrac43\\pi r^3}{a^3} = \\frac{\\tfrac43\\pi r^3}{8r^3}" },
      ],
      result: "\\eta = \\dfrac{\\pi}{6} = 0.524\\;(52.4\\%)",
    },
  },
  bcc: {
    name: "Body-centred cubic",
    rc: Math.sqrt(3) / 2,
    z: 2,
    cn: 8,
    eta: (Math.PI * Math.sqrt(3)) / 8,
    aOverR: "4r/\\sqrt3",
    contact: "body diagonal",
    contactTex: "\\sqrt3\\,a = 4r",
    stages: ["corners", "body centre"],
    deriv: {
      title: "Packing efficiency of body-centred cubic",
      steps: [
        { say: "Corner atoms do not touch one another. The centre atom touches the 8 corner atoms along the **body diagonal**, so that line carries four radii (corner, whole centre atom, corner).", tex: "d_{\\text{body}} = 4r" },
        { say: "Face diagonal by Pythagoras, then the body diagonal from a second right triangle:", tex: "d_{\\text{face}} = \\sqrt{a^2 + a^2} = \\sqrt2\\,a, \\qquad d_{\\text{body}} = \\sqrt{d_{\\text{face}}^2 + a^2} = \\sqrt3\\,a" },
        { say: "Equate the two expressions for the body diagonal:", tex: "\\sqrt3\\,a = 4r \\;\\Rightarrow\\; a = \\frac{4r}{\\sqrt3}" },
        { say: "Atoms per cell: 8 corners and 1 body centre.", tex: "Z = 8\\times\\tfrac18 + 1 = 2" },
        { say: "Substitute into the packing efficiency:", tex: "\\eta = \\frac{2\\cdot\\tfrac43\\pi r^3}{(4r/\\sqrt3)^3} = \\frac{\\tfrac83\\pi r^3}{64r^3/(3\\sqrt3)}" },
      ],
      result: "\\eta = \\dfrac{\\sqrt3\\,\\pi}{8} = 0.680\\;(68.0\\%)",
    },
  },
  fcc: {
    name: "Face-centred cubic",
    rc: Math.SQRT1_2,
    z: 4,
    cn: 12,
    eta: Math.PI / (3 * Math.SQRT2),
    aOverR: "2\\sqrt2\\,r",
    contact: "face diagonal",
    contactTex: "\\sqrt2\\,a = 4r",
    stages: ["corners", "face centres"],
    deriv: {
      title: "Packing efficiency of face-centred cubic",
      steps: [
        { say: "Corner atoms are too far apart to touch. Each face-centre atom touches the corner atoms along that face's **diagonal**, which carries four radii.", tex: "d_{\\text{face}} = 4r" },
        { say: "Face diagonal of a square of side a:", tex: "d_{\\text{face}} = \\sqrt{a^2 + a^2} = \\sqrt2\\,a" },
        { say: "Equate the two:", tex: "\\sqrt2\\,a = 4r \\;\\Rightarrow\\; a = 2\\sqrt2\\,r" },
        { say: "Atoms per cell: 8 corners (⅛ each) and 6 face centres (½ each).", tex: "Z = 8\\times\\tfrac18 + 6\\times\\tfrac12 = 4" },
        { say: "Substitute into the packing efficiency, using $(2\\sqrt2)^3 = 16\\sqrt2$:", tex: "\\eta = \\frac{4\\cdot\\tfrac43\\pi r^3}{(2\\sqrt2\\,r)^3} = \\frac{\\tfrac{16}{3}\\pi r^3}{16\\sqrt2\\,r^3}" },
      ],
      result: "\\eta = \\dfrac{\\pi}{3\\sqrt2} = 0.740\\;(74.0\\%)",
    },
  },
};

const VIEWS: Record<string, CameraPose> = {
  iso: { key: "iso", az: 0.75, el: 0.5, dist: 9.6 },
  front: { key: "front", az: 0, el: 0.02, dist: 9.6 },
  top: { key: "top", az: 0, el: 1.5, dist: 9.6 },
  diag: { key: "diag", az: Math.PI / 4, el: Math.asin(1 / Math.sqrt(3)), dist: 9.6 },
};

const out = (p: V3, k: number): V3 => [p[0] * k, p[1] * k, p[2] * k];

function contactBonds(kind: Kind, show: boolean): StageBond[] {
  const mk = (id: string, a: V3, b: V3): StageBond => ({ id, a, b, r: 0.06, color: "#fff1b8", scale: show ? 1 : 0, opacity: show ? 1 : 0 });
  if (kind === "sc") return [mk("k0", [-1, -1, 1], [1, -1, 1])];
  if (kind === "bcc") return [mk("k0", [-1, -1, -1], [0, 0, 0]), mk("k1", [0, 0, 0], [1, 1, 1])];
  return [mk("k0", [-1, -1, 1], [0, 0, 1]), mk("k1", [0, 0, 1], [1, 1, 1])];
}

/* -------------------------------------------------------- cell explorer */

function CellExplorer() {
  const [kind, setKind] = useState<Kind>("fcc");
  const [view, setView] = useState("iso");
  const [slice, setSlice] = useState(false);
  const [contact, setContact] = useState(false);
  const [size, setSize] = useState(0.62);
  const def = DEF[kind];
  const tour = useTour(def.stages.length, 2600);
  const step = Math.min(tour.step, def.stages.length);

  const atoms = useMemo<StageAtom[]>(() => {
    const r = def.rc * size;
    const list: StageAtom[] = CORNERS.map((p, i) => ({ id: `c${i}`, p, r, color: C.teal, scale: step >= 1 ? 1 : 0, from: out(p, 2.3) }));
    if (kind === "bcc") list.push({ id: "body", p: [0, 0, 0], r, color: C.rose, scale: step >= 2 ? 1 : 0, from: [0, 3.4, 0] });
    if (kind === "fcc") FACES.forEach((p, i) => list.push({ id: `f${i}`, p, r, color: C.gold, scale: step >= 2 ? 1 : 0, from: out(p, 2.3) }));
    return list;
  }, [kind, size, step, def.rc]);

  const total = step === 0 ? "0" : kind === "sc" ? "8 × ⅛ = 1" : kind === "bcc" ? (step === 1 ? "8 × ⅛ = 1" : "8 × ⅛ + 1 = 2") : step === 1 ? "8 × ⅛ = 1" : "8 × ⅛ + 6 × ½ = 4";

  let say: string;
  if (step === 0) say = "An empty cell: a cube of edge **a**. Lattice sites are the corners" + (kind === "bcc" ? " and the body centre" : kind === "fcc" ? " and the six face centres" : "") + ". Press **Build** to place the atoms.";
  else if (step === 1) say = "**Corner atoms.** Eight cells meet at every corner, so each cell owns ⅛ of that atom: 8 × ⅛ = 1 atom.";
  else if (kind === "bcc") say = "**Body-centre atom.** It lies wholly inside this cell and is shared with none: +1. Z = 2.";
  else say = "**Face-centre atoms.** A face is shared by two cells, so each cell owns ½ of each of the six: 6 × ½ = 3, giving Z = 4.";
  if (slice && step > 0) say += " With the cell sliced, only the pieces that belong to it remain: octants at corners" + (kind === "fcc" ? ", hemispheres on the faces" : "") + (kind === "bcc" ? ", the whole centre atom" : "") + ".";

  const edgeLines = useMemo(() => cubeEdges("e"), []);

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-3">
          <Stage atoms={atoms} bonds={contactBonds(kind, contact)} lines={edgeLines} clip={slice && step > 0 ? 1.0005 : null} camera={VIEWS[view]} autoRotate={view === "iso" && !contact} height={440} label={`${def.name} unit cell`} />
          <Narration k={`${kind}-${step}-${slice}`}>
            <Rich text={say} />
          </Narration>
        </div>
        <div className="space-y-4">
          <Tabs
            label="Lattice type"
            value={kind}
            onChange={(k) => {
              setKind(k);
              tour.set(DEF[k].stages.length);
            }}
            items={[["sc", "Simple"], ["bcc", "Body-centred"], ["fcc", "Face-centred"]] as const}
          />
          <div className="flex flex-wrap gap-2">
            <Btn primary onClick={tour.play}>
              ▶ Build
            </Btn>
            <Btn onClick={() => setSlice((s) => !s)}>{slice ? "Show whole atoms" : "✂ Slice to the cell"}</Btn>
            <Btn onClick={() => setContact((c) => !c)}>{contact ? "Hide contact line" : "Show contact line"}</Btn>
          </div>
          <Slider label="Atom size (100% = touching)" value={size} onChange={setSize} min={0.3} max={1} step={0.01} show={`${Math.round(size * 100)} %`} />
          <div>
            <div className="mb-1.5 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">View</div>
            <Tabs label="Camera view" value={view} onChange={setView} items={[["iso", "3D"], ["front", "Front"], ["top", "Top"], ["diag", "Along [111]"]] as const} />
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
            <div className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Atoms owned by this cell</div>
            <div className="mt-1 font-mono text-lg font-bold text-[var(--foreground)]">{total}</div>
            <div className="mt-3 flex items-baseline justify-between border-t border-[var(--border)] pt-3">
              <span className="text-sm text-[var(--text-muted)]">Effective atoms per cell, Z</span>
              <span className="font-mono text-3xl font-black text-[var(--accent)]">{step === def.stages.length ? def.z : step === 0 ? 0 : 1}</span>
            </div>
          </div>
        </div>
      </div>
      <Facts
        items={[
          ["Atoms touch along", def.contact],
          ["Coordination number", String(def.cn)],
          ["Packing efficiency", `${(def.eta * 100).toFixed(1)} %`],
          ["Empty space", `${(100 - def.eta * 100).toFixed(1)} %`],
        ]}
      />
      <Derivation key={kind} title={def.deriv.title} steps={def.deriv.steps} result={def.deriv.result} />
    </div>
  );
}

/* ------------------------------------------------------ neighbour shells */

const SHELL_COLORS = ["#f2b13f", "#2fbfae", "#e8607a", "#4c9be8", "#9a84e6", "#52c98a", "#f08b4d", "#d86cc2"];

function ShellExplorer() {
  const [kind, setKind] = useState<Kind>("fcc");
  const [shown, setShown] = useState(2);
  const cap = kind === "sc" ? 2.3 : 2.05;
  const shells = useMemo(() => neighbourShells(kind, 10).filter((s) => s.d <= cap), [kind, cap]);
  const pts = useMemo(() => latticePoints(kind, cap), [kind, cap]);
  const shellOf = (d: number) => shells.findIndex((s) => Math.abs(s.d - d) < 1e-3);
  const cum = shells.slice(0, shown).reduce((s, x) => s + x.n, 0);
  const atoms: StageAtom[] = pts.map(({ p, d }, i) => {
    if (d < 1e-6) return { id: `p${i}`, p: [p[0] * 0.55, p[1] * 0.55, p[2] * 0.55], r: 0.34, color: C.white, glow: true };
    const s = shellOf(d);
    const visible = s >= 0 && s < shown;
    return { id: `p${i}`, p: [p[0] * 0.55, p[1] * 0.55, p[2] * 0.55], r: 0.26, color: s >= 0 ? SHELL_COLORS[s % SHELL_COLORS.length] : "#555", scale: visible ? 1 : 0, from: [p[0] * 0.2, p[1] * 0.2, p[2] * 0.2] };
  });
  const sh = shells[Math.min(shown, shells.length) - 1];

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <Stage atoms={atoms} camera={{ key: `s-${kind}-${Math.min(shown, shells.length)}`, az: 0.7, el: 0.4, dist: Math.max(5.2, Math.min(11, 4.3 * (shells[Math.min(shown, shells.length) - 1].d * 1.1 + 0.35))) }} autoRotate floorY={-3.2} height={440} label={`Neighbour shells around one atom in a ${kind.toUpperCase()} lattice`} />
        <Narration k={`${kind}-${shown}`}>
          <Rich text={`**Shell ${shown}:** ${sh.n} atoms at a distance of $${sh.d.toFixed(3)}\\,a$. ${shown === 1 ? `This is the **coordination number**: the number of nearest neighbours. Together with the central atom's own contribution it fixes how tightly the lattice is packed.` : `Counting everything out to this shell gives ${cum} neighbours in total.`}`} />
        </Narration>
      </div>
      <div className="space-y-4">
        <Tabs label="Lattice" value={kind} onChange={(k) => { setKind(k); setShown(2); }} items={[["sc", "Simple"], ["bcc", "Body-centred"], ["fcc", "Face-centred"]] as const} />
        <Slider label="Shells shown" value={Math.min(shown, shells.length)} onChange={setShown} min={1} max={shells.length} />
        <div className="overflow-hidden rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--surface)] text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
              <tr>
                <th className="px-3 py-2">Shell</th>
                <th className="px-3 py-2">Atoms</th>
                <th className="px-3 py-2">Distance</th>
              </tr>
            </thead>
            <tbody>
              {shells.map((s, i) => (
                <tr key={i} className={`border-t border-[var(--border)] ${i === shown - 1 ? "bg-[var(--accent)]/10" : ""} ${i >= shown ? "opacity-40" : ""}`}>
                  <td className="px-3 py-1.5 font-mono">
                    <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full align-middle" style={{ background: SHELL_COLORS[i % SHELL_COLORS.length] }} />
                    {i + 1}
                  </td>
                  <td className="px-3 py-1.5 font-mono font-bold text-[var(--foreground)]">{s.n}</td>
                  <td className="px-3 py-1.5 font-mono text-[var(--text-muted)]">{s.d.toFixed(3)} a</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs leading-5 text-[var(--text-muted)]">
          Computed by listing every lattice point around one atom and grouping them by distance. Nearest shells: SC 6, BCC 8, FCC 12. In BCC the 6 next-nearest atoms are only 15% farther than the 8 nearest, which is why it is sometimes called 8 + 6 coordinated.
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- density */

const PRESETS: { name: string; kind: Kind; m: number; a: number }[] = [
  { name: "Cu (FCC)", kind: "fcc", m: 63.5, a: 361 },
  { name: "Fe (BCC)", kind: "bcc", m: 55.85, a: 286.6 },
  { name: "Na (BCC)", kind: "bcc", m: 23, a: 429 },
  { name: "Po (SC)", kind: "sc", m: 209, a: 337 },
];

function DensityLab() {
  const [kind, setKind] = useState<Kind>("fcc");
  const [m, setM] = useState(63.5);
  const [a, setA] = useState(361);
  const z = DEF[kind].z;
  const volume = (a * 1e-10) ** 3;
  const rho = (z * m) / (NA * volume);
  const r = (a * Math.sqrt(1)) / (kind === "sc" ? 2 : kind === "bcc" ? 4 / Math.sqrt(3) : 2 * Math.SQRT2);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <Btn key={p.name} onClick={() => { setKind(p.kind); setM(p.m); setA(p.a); }}>
              {p.name}
            </Btn>
          ))}
        </div>
        <Tabs label="Lattice" value={kind} onChange={setKind} items={[["sc", "Simple (Z = 1)"], ["bcc", "BCC (Z = 2)"], ["fcc", "FCC (Z = 4)"]] as const} />
        <Slider label="Molar mass M (g mol⁻¹)" value={m} onChange={setM} min={1} max={250} step={0.5} />
        <Slider label="Edge length a (pm)" value={a} onChange={setA} min={150} max={700} step={1} />
      </div>
      <div className="space-y-3">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <div className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Density</div>
          <div className="font-mono text-4xl font-black text-[var(--accent)]">
            {rho.toFixed(rho < 10 ? 3 : 2)} <span className="text-lg font-bold text-[var(--foreground)]">g cm⁻³</span>
          </div>
          <Tex block ex={`\\rho=\\frac{Z\\,M}{a^3N_A}=\\frac{${z}\\times${m}}{(${a}\\times10^{-10}\\,\\mathrm{cm})^3\\times6.022\\times10^{23}}`} />
          <div className="mt-2 text-sm text-[var(--text-muted)]">
            Atomic radius from the contact condition: <span className="font-mono font-bold text-[var(--foreground)]">{r.toFixed(1)} pm</span>
          </div>
        </div>
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          Slide <em>a</em> and watch ρ fall with the cube of the edge. Doubling the edge divides the density by eight.
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- chapter */

export function CubicChapter() {
  return (
    <Chapter
      id="cubic"
      n="PART 2"
      title="Cubic unit cells: counting, contact and packing"
      lead="Three arrangements of identical spheres in a cube cover most metals. Build each one, slice it to see what belongs to the cell, then derive its packing efficiency from the geometry."
    >
      <P t="A **unit cell** is the smallest block that builds the whole crystal when repeated by translation in three directions. Atoms on the boundary of the cell are shared with neighbouring cells, so the cell owns only a fraction of each. The fraction depends on how many cells meet there:" />
      <div className="grid max-w-3xl grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          ["Corner", "\\tfrac18", "8 cells meet"],
          ["Edge centre", "\\tfrac14", "4 cells meet"],
          ["Face centre", "\\tfrac12", "2 cells meet"],
          ["Body centre", "1", "inside the cell"],
        ].map(([a, b, c]) => (
          <div key={a} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-center">
            <div className="text-2xl font-black text-[var(--accent)]"><Tex ex={b} /></div>
            <div className="text-sm font-semibold text-[var(--foreground)]">{a}</div>
            <div className="text-xs text-[var(--text-muted)]">{c}</div>
          </div>
        ))}
      </div>
      <P t="The number of atoms owned by a cell is **Z** (also called the effective number of atoms). Z = (corners × ⅛) + (edge centres × ¼) + (faces × ½) + (body atoms × 1)." />

      <CellExplorer />

      <KeyIdea title="Why the contact line differs">
        {"In a **simple** cube the corner atoms are close enough to touch along the edge. In **BCC** the body-centre atom pushes the corner atoms apart, so contact moves to the body diagonal. In **FCC** the face-centre atoms do the same along the face diagonal. The contact line sets how the edge a depends on the radius r, and from that every other number follows."}
      </KeyIdea>

      <Traps
        items={[
          "FCC shows 14 atoms but **Z = 4**; BCC shows 9 but **Z = 2**. Z counts what the cell owns, not what you can see.",
          "Packing efficiency order: SC (52.4%) < BCC (68.0%) < FCC (74.0%). HCP equals FCC.",
          "In BCC the corner atoms do **not** touch each other; in FCC the corner atoms do not touch each other either. Contact is always between a corner and the centring atom.",
        ]}
      />

      <div className="space-y-2 pt-4">
        <h3 className="text-2xl font-bold text-[var(--foreground)]">Neighbour shells and coordination number</h3>
        <P t="The **coordination number** is the number of nearest neighbours. Beyond them sit more shells at larger distances. Step through the shells: the counts and distances below come straight from the lattice, not from a table." />
      </div>
      <ShellExplorer />

      <div className="space-y-2 pt-4">
        <h3 className="text-2xl font-bold text-[var(--foreground)]">Density of a crystal</h3>
        <P t="The mass in one cell is **Z·M / N_A** and its volume is **a³**. So the density of the crystal is fixed by the lattice and the edge length, and a measured density lets you find Z, M or N_A." />
      </div>
      <DensityLab />
      <div className="grid gap-4 md:grid-cols-2">
        <Worked
          q="Copper is FCC with edge length 361 pm and molar mass 63.5 g/mol. Find its density and the radius of a Cu atom."
          steps={["FCC has Z = 4.", "Edge in cm: $361\\times10^{-10}$ cm, so $a^3 = 4.705\\times10^{-23}$ cm³.", "$\\rho = \\dfrac{4\\times63.5}{4.705\\times10^{-23}\\times6.022\\times10^{23}} = 8.97$ g/cm³.", "Contact along the face diagonal: $r = \\dfrac{\\sqrt2\\,a}{4} = \\dfrac{1.414\\times361}{4} = 127.6$ pm."]}
          answer="ρ = 8.97 g/cm³, r = 127.6 pm"
        />
        <Worked
          q="An element crystallises in a BCC lattice with a = 288 pm. Calculate the atomic radius. If its density is 7.2 g/cm³, find its molar mass."
          steps={["BCC: $\\sqrt3\\,a = 4r$, so $r = \\dfrac{1.732\\times288}{4} = 124.7$ pm.", "Z = 2. From $\\rho = \\dfrac{ZM}{a^3N_A}$: $M = \\dfrac{\\rho a^3 N_A}{Z}$.", "$a^3 = (288\\times10^{-10})^3 = 2.389\\times10^{-23}$ cm³.", "$M = \\dfrac{7.2\\times2.389\\times10^{-23}\\times6.022\\times10^{23}}{2} = 51.8$ g/mol."]}
          answer="r = 124.7 pm, M ≈ 51.8 g/mol (close to vanadium)"
        />
      </div>
    </Chapter>
  );
}
