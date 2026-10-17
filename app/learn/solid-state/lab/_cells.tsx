"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Scene3D, type Atom3, type Line3 } from "./_scene3d";

const NA = 6.022e23;

const cubeLines: Line3[] = (() => {
  const out: Line3[] = [];
  const s = [-1, 1];
  for (const y of s) for (const z of s) out.push({ a: [-1, y, z], b: [1, y, z] });
  for (const x of s) for (const z of s) out.push({ a: [x, -1, z], b: [x, 1, z] });
  for (const x of s) for (const y of s) out.push({ a: [x, y, -1], b: [x, y, 1] });
  return out;
})();

type Lattice = "sc" | "bcc" | "fcc";

const LATTICES: Record<
  Lattice,
  {
    name: string;
    z: number;
    cn: number;
    contact: string;
    relation: string;
    /** contact radius as a fraction of the half-edge (cube spans -1..1) */
    rContact: number;
    efficiency: number;
    aOverR: number;
    steps: { key: "corner" | "face" | "body"; text: string; value: number }[];
  }
> = {
  sc: {
    name: "Simple cubic",
    z: 1,
    cn: 6,
    contact: "along the cube edge",
    relation: "a = 2r",
    rContact: 1,
    efficiency: Math.PI / 6,
    aOverR: 2,
    steps: [{ key: "corner", text: "8 corners × 1/8", value: 1 }],
  },
  bcc: {
    name: "Body-centred cubic",
    z: 2,
    cn: 8,
    contact: "along the body diagonal",
    relation: "√3·a = 4r",
    rContact: Math.sqrt(3) / 2,
    efficiency: (Math.PI * Math.sqrt(3)) / 8,
    aOverR: 4 / Math.sqrt(3),
    steps: [
      { key: "corner", text: "8 corners × 1/8", value: 1 },
      { key: "body", text: "1 body centre × 1", value: 1 },
    ],
  },
  fcc: {
    name: "Face-centred cubic",
    z: 4,
    cn: 12,
    contact: "along the face diagonal",
    relation: "√2·a = 4r",
    rContact: Math.SQRT1_2,
    efficiency: Math.PI / (3 * Math.SQRT2),
    aOverR: 2 * Math.SQRT2,
    steps: [
      { key: "corner", text: "8 corners × 1/8", value: 1 },
      { key: "face", text: "6 faces × 1/2", value: 3 },
    ],
  },
};

const CORNER_COLOR = "#59c6bd";
const FACE_COLOR = "#f2b84b";
const BODY_COLOR = "#ef7f8e";

function cellAtoms(kind: Lattice, size: number, active: "corner" | "face" | "body" | "all"): Atom3[] {
  const dim = (k: "corner" | "face" | "body") => active !== "all" && active !== k;
  const out: Atom3[] = [];
  const r = LATTICES[kind].rContact * size;
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) out.push({ x, y, z, r, color: CORNER_COLOR, dim: dim("corner") });
  if (kind === "bcc") out.push({ x: 0, y: 0, z: 0, r, color: BODY_COLOR, dim: dim("body") });
  if (kind === "fcc") {
    for (const s of [-1, 1]) {
      out.push({ x: s, y: 0, z: 0, r, color: FACE_COLOR, dim: dim("face") });
      out.push({ x: 0, y: s, z: 0, r, color: FACE_COLOR, dim: dim("face") });
      out.push({ x: 0, y: 0, z: s, r, color: FACE_COLOR, dim: dim("face") });
    }
  }
  return out;
}

export function CellCounter() {
  const [kind, setKind] = useState<Lattice>("fcc");
  const [step, setStep] = useState(0); // 0 = all, otherwise index+1
  const [size, setSize] = useState(0.45);
  const [growing, setGrowing] = useState(false);
  const raf = useRef(0);
  const L = LATTICES[kind];

  useEffect(() => {
    if (!growing) return;
    let s = 0.3;
    let last = performance.now();
    const tick = (t: number) => {
      s = Math.min(1, s + ((t - last) / 1000) * 0.28);
      last = t;
      setSize(s);
      if (s < 1) raf.current = requestAnimationFrame(tick);
      else setGrowing(false);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [growing]);

  const active = step === 0 ? "all" : L.steps[step - 1].key;
  const atoms = useMemo(() => cellAtoms(kind, size, active), [kind, size, active]);
  const running = L.steps.slice(0, Math.max(step, 0)).reduce((s, x) => s + x.value, 0);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <div>
        <Scene3D
          atoms={atoms}
          lines={cubeLines}
          height={380}
          label={`${L.name} unit cell with atoms at the corners${kind === "bcc" ? " and body centre" : ""}${kind === "fcc" ? " and face centres" : ""}`}
        />
        <label className="mt-3 flex items-center gap-3 text-sm text-[var(--text-muted)]">
          <span className="w-28 shrink-0">Atom size {Math.round(size * 100)}%</span>
          <input
            type="range"
            min={20}
            max={100}
            value={Math.round(size * 100)}
            onChange={(e) => {
              setGrowing(false);
              setSize(Number(e.target.value) / 100);
            }}
            className="w-full accent-[var(--accent)]"
          />
          <button
            type="button"
            onClick={() => {
              setSize(0.3);
              setGrowing(true);
            }}
            className="shrink-0 rounded-md border border-[var(--border)] px-3 py-1 font-semibold text-[var(--foreground)] hover:border-[var(--accent)]"
          >
            Grow to contact
          </button>
        </label>
        <p className="mt-2 text-xs text-[var(--text-muted)]">At 100% the spheres touch {L.contact}. Real atoms are always drawn at 100%; the smaller sizes just let you see the sites.</p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Lattice type">
          {(Object.keys(LATTICES) as Lattice[]).map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={kind === k}
              onClick={() => {
                setKind(k);
                setStep(0);
              }}
              className={`rounded-md border px-3 py-1.5 text-sm font-semibold ${kind === k ? "border-[var(--accent)] bg-[var(--accent)] text-black" : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"}`}
            >
              {k.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="text-sm font-bold text-[var(--foreground)]">Count the atoms that belong to one cell</div>
          <ol className="mt-3 space-y-2 text-sm">
            <li>
              <button
                type="button"
                onClick={() => setStep(0)}
                className={`w-full rounded-md border px-3 py-2 text-left ${step === 0 ? "border-[var(--accent)]" : "border-[var(--border)]"} text-[var(--foreground)]`}
              >
                Show every site
              </button>
            </li>
            {L.steps.map((s, i) => (
              <li key={s.key}>
                <button
                  type="button"
                  onClick={() => setStep(i + 1)}
                  className={`flex w-full items-center justify-between rounded-md border px-3 py-2 text-left ${step === i + 1 ? "border-[var(--accent)]" : "border-[var(--border)]"} text-[var(--foreground)]`}
                >
                  <span>
                    <span
                      className="mr-2 inline-block h-3 w-3 rounded-full align-middle"
                      style={{ background: s.key === "corner" ? CORNER_COLOR : s.key === "face" ? FACE_COLOR : BODY_COLOR }}
                    />
                    {s.text}
                  </span>
                  <span className="font-mono font-bold">= {s.value}</span>
                </button>
              </li>
            ))}
          </ol>
          <div className="mt-3 flex items-baseline justify-between border-t border-[var(--border)] pt-3">
            <span className="text-sm text-[var(--text-muted)]">Effective atoms per cell, Z</span>
            <span className="font-mono text-2xl font-black text-[var(--accent)]">{step === 0 ? L.z : running}</span>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-2 text-sm">
          {[
            ["Contact", L.relation],
            ["Coordination no.", String(L.cn)],
            ["a in terms of r", `${L.aOverR.toFixed(3)} r`],
            ["Packing efficiency", `${(L.efficiency * 100).toFixed(1)} %`],
          ].map(([t, v]) => (
            <div key={t} className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2">
              <dt className="text-[11px] uppercase tracking-wide text-[var(--text-muted)]">{t}</dt>
              <dd className="font-mono font-bold text-[var(--foreground)]">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          Packing efficiency = Z · (4/3)πr³ / a³. For FCC: 4 · (4/3)πr³ / (2√2 r)³ = π/(3√2) = 0.7405.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

const PRESETS: { name: string; lattice: Lattice; z: number; m: number; a: number }[] = [
  { name: "Cu", lattice: "fcc", z: 4, m: 63.5, a: 361 },
  { name: "Fe", lattice: "bcc", z: 2, m: 55.85, a: 286.6 },
  { name: "Na", lattice: "bcc", z: 2, m: 23, a: 429 },
  { name: "NaCl", lattice: "fcc", z: 4, m: 58.5, a: 564 },
];

export function DensityLab() {
  const [lattice, setLattice] = useState<Lattice>("fcc");
  const [z, setZ] = useState(4);
  const [m, setM] = useState(63.5);
  const [a, setA] = useState(361);

  const volume = (a * 1e-10) ** 3; // cm^3 (1 pm = 1e-10 cm)
  const mass = (z * m) / NA;
  const density = mass / volume;
  const r = a / LATTICES[lattice].aOverR;

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.name}
              type="button"
              onClick={() => {
                setLattice(p.lattice);
                setZ(p.z);
                setM(p.m);
                setA(p.a);
              }}
              className="rounded-md border border-[var(--border)] px-3 py-1.5 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent)]"
            >
              {p.name}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted)]">
          <span className="w-32">Lattice</span>
          {(Object.keys(LATTICES) as Lattice[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => {
                setLattice(k);
                setZ(LATTICES[k].z);
              }}
              className={`rounded-md border px-3 py-1 font-semibold ${lattice === k ? "border-[var(--accent)] bg-[var(--accent)] text-black" : "border-[var(--border)] text-[var(--foreground)]"}`}
            >
              {k.toUpperCase()}
            </button>
          ))}
        </div>
        {(
          [
            ["Formula units / atoms per cell, Z", z, setZ, 1, 8, 1],
            ["Molar mass M (g/mol)", m, setM, 1, 250, 0.5],
            ["Edge length a (pm)", a, setA, 150, 800, 1],
          ] as const
        ).map(([label, val, set, min, max, stepSize]) => (
          <label key={label} className="block text-sm text-[var(--text-muted)]">
            <span className="flex justify-between">
              <span>{label}</span>
              <span className="font-mono font-bold text-[var(--foreground)]">{val}</span>
            </span>
            <input
              type="range"
              min={min}
              max={max}
              step={stepSize}
              value={val}
              onChange={(e) => set(Number(e.target.value))}
              className="mt-1 w-full accent-[var(--accent)]"
            />
          </label>
        ))}
      </div>

      <div className="space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="text-xs uppercase tracking-wide text-[var(--text-muted)]">Density</div>
          <div className="font-mono text-4xl font-black text-[var(--accent)]">
            {density.toFixed(density < 10 ? 3 : 2)} <span className="text-lg font-bold text-[var(--foreground)]">g cm⁻³</span>
          </div>
          <div className="mt-3 space-y-1 font-mono text-sm leading-7 text-[var(--foreground)]">
            <div>ρ = Z·M / (a³·N<sub>A</sub>)</div>
            <div>= {z} × {m} / [({a}×10⁻¹⁰)³ × 6.022×10²³]</div>
            <div>
              = {(z * m).toFixed(1)} / {(volume * NA).toExponential(3)}
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-7 text-[var(--foreground)]">
          For a one-atom basis with {LATTICES[lattice].name.toLowerCase()} packing, the contact condition {LATTICES[lattice].relation} gives
          r = <span className="font-mono font-bold">{r.toFixed(1)} pm</span>.
          <br />
          <span className="text-[var(--text-muted)]">
            Unit trap: a is in pm. Convert with 1 pm = 10⁻¹⁰ cm before cubing, or the answer is off by 10³⁰.
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

type Poly = {
  key: string;
  name: string;
  cn: number;
  /** nearest-anion distance divided by the centre-to-anion distance */
  k: number;
  verts: [number, number, number][];
  range: string;
};

function polyhedra(): Poly[] {
  const t = 1 / Math.sqrt(3);
  return [
    { key: "lin", name: "Linear", cn: 2, k: 2, verts: [[1, 0, 0], [-1, 0, 0]], range: "< 0.155" },
    {
      key: "tri",
      name: "Trigonal planar",
      cn: 3,
      k: Math.sqrt(3),
      verts: [0, 1, 2].map((i) => [Math.cos((2 * Math.PI * i) / 3), Math.sin((2 * Math.PI * i) / 3), 0] as [number, number, number]),
      range: "0.155 – 0.225",
    },
    { key: "tet", name: "Tetrahedral", cn: 4, k: Math.sqrt(8 / 3), verts: [[t, t, t], [t, -t, -t], [-t, t, -t], [-t, -t, t]], range: "0.225 – 0.414" },
    { key: "oct", name: "Octahedral", cn: 6, k: Math.SQRT2, verts: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]], range: "0.414 – 0.732" },
    {
      key: "cub",
      name: "Cubic",
      cn: 8,
      k: 2 / Math.sqrt(3),
      verts: [-1, 1].flatMap((x) => [-1, 1].flatMap((y) => [-1, 1].map((z) => [x * t, y * t, z * t] as [number, number, number]))),
      range: "0.732 – 1.000",
    },
  ];
}

function polyEdges(verts: [number, number, number][]): [number, number][] {
  const d = (i: number, j: number) => Math.hypot(...(verts[i].map((c, n) => c - verts[j][n]) as [number, number, number]));
  let min = Infinity;
  for (let i = 0; i < verts.length; i++) for (let j = i + 1; j < verts.length; j++) min = Math.min(min, d(i, j));
  const out: [number, number][] = [];
  for (let i = 0; i < verts.length; i++) for (let j = i + 1; j < verts.length; j++) if (d(i, j) < min + 1e-6) out.push([i, j]);
  return out;
}

export function RadiusRatioLab() {
  const polys = useMemo(() => polyhedra(), []);
  const [ratio, setRatio] = useState(0.35);
  const [forced, setForced] = useState<string | null>(null);

  const limits = polys.map((p) => 2 / p.k - 1);
  let auto = 0;
  for (let i = 0; i < polys.length; i++) if (ratio >= limits[i]) auto = i;
  const idx = forced ? polys.findIndex((p) => p.key === forced) : auto;
  const P = polys[idx];

  const R = 0.42; // anion radius in scene units
  const dist = (1 + ratio) * R;
  const gap = P.k * (1 + ratio) - 2; // anion–anion gap in units of R (negative = overlap)
  const atoms: Atom3[] = [
    { x: 0, y: 0, z: 0, r: ratio * R, color: FACE_COLOR, label: "+" },
    ...P.verts.map(([x, y, z]) => ({ x: x * dist, y: y * dist, z: z * dist, r: R, alpha: 0.5, color: gap < -1e-9 ? "#e2606e" : "#59c6bd" })),
  ];
  const edges = useMemo(() => polyEdges(polys[idx].verts), [polys, idx]);
  const lines: Line3[] = edges.map(([i, j]) => ({
    a: P.verts[i].map((c) => c * dist) as [number, number, number],
    b: P.verts[j].map((c) => c * dist) as [number, number, number],
    color: "#c9d8d5",
    dash: true,
  }));

  const stable = gap >= -1e-9;
  const verdict = stable
    ? forced === null || idx === auto
      ? "Stable: the cation touches every anion and the anions do not overlap."
      : "Geometrically possible, but a larger coordination number would hold this cation more tightly."
    : "Impossible: the anions would overlap. The cation is too small, so the structure drops to a lower coordination number.";

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      <div>
        <Scene3D
          atoms={atoms}
          lines={lines}
          height={360}
          label={`${P.name} arrangement of ${P.cn} anions around a cation at radius ratio ${ratio.toFixed(3)}`}
        />
        <label className="mt-3 block text-sm text-[var(--text-muted)]">
          <span className="flex justify-between">
            <span>
              Radius ratio r<sub>+</sub>/r<sub>−</sub>
            </span>
            <span className="font-mono font-bold text-[var(--foreground)]">{ratio.toFixed(3)}</span>
          </span>
          <input
            type="range"
            min={0.05}
            max={1}
            step={0.005}
            value={ratio}
            onChange={(e) => {
              setForced(null);
              setRatio(Number(e.target.value));
            }}
            className="mt-1 w-full accent-[var(--accent)]"
          />
        </label>
        <div className="relative mt-2 h-3 overflow-hidden rounded-full bg-white/10" aria-hidden>
          {limits.slice(1).map((l, i) => (
            <span key={i} className="absolute top-0 h-full w-px bg-white/45" style={{ left: `${((l - 0.05) / 0.95) * 100}%` }} />
          ))}
          <span className="absolute top-0 h-full w-1 -translate-x-1/2 rounded bg-[var(--accent)]" style={{ left: `${((ratio - 0.05) / 0.95) * 100}%` }} />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Coordination geometry">
          {polys.map((p) => (
            <button
              key={p.key}
              type="button"
              role="tab"
              aria-selected={idx === polys.indexOf(p)}
              onClick={() => setForced(p.key)}
              className={`rounded-md border px-3 py-1.5 text-sm font-semibold ${idx === polys.indexOf(p) ? "border-[var(--accent)] bg-[var(--accent)] text-black" : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"}`}
            >
              CN {p.cn}
            </button>
          ))}
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="text-lg font-black text-[var(--foreground)]">
            {P.name} · CN {P.cn}
          </div>
          <div className="mt-1 text-sm text-[var(--text-muted)]">Textbook range: r₊/r₋ = {P.range}</div>
          <div className="mt-3 text-sm leading-6 text-[var(--foreground)]">{verdict}</div>
          <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-sm text-[var(--foreground)]">
            <div className="rounded-md border border-[var(--border)] px-3 py-2">
              <div className="text-[11px] uppercase text-[var(--text-muted)]">Lower limit</div>
              {(2 / P.k - 1).toFixed(3)}
            </div>
            <div className="rounded-md border border-[var(--border)] px-3 py-2">
              <div className="text-[11px] uppercase text-[var(--text-muted)]">Anion–anion gap</div>
              {(gap * R).toFixed(3)} <span className="text-[var(--text-muted)]">r₋</span>
            </div>
          </div>
        </div>
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          Derivation: at the limit the anions just touch, so the edge of the polyhedron is 2r₋. With circumradius r₊ + r₋ this gives r₊/r₋ = 2/k − 1, where k is edge ÷ circumradius.
          Octahedron: k = √2, so r₊/r₋ = √2 − 1 = 0.414. Tetrahedron: k = √(8/3), giving 0.225. Cube: k = 2/√3, giving 0.732.
        </p>
      </div>
    </div>
  );
}
