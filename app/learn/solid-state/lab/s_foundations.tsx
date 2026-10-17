"use client";

import { useMemo, useState } from "react";
import { Stage, type StageAtom, type StageBond, type StageLine, type StagePoly, type V3 } from "./_stage";
import { C } from "./_geom";
import { Btn, Chapter, Derivation, Facts, KeyIdea, Narration, P, Rich, Slider, Tabs, Tex, Traps, Worked, useClock, useTween, useTweenArr } from "./_ui";

const hash = (a: number, b: number) => {
  let h = (a * 374761393 + b * 668265263) | 0;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = h ^ (h >>> 16);
  return ((h >>> 0) % 100000) / 100000;
};

const PANEL = { background: "radial-gradient(120% 90% at 50% 18%, #17433f 0%, #0c1f1e 52%, #060f0f 100%)" };

/* ---------------------------------------------------- freezing simulation */

type SolidMode = "crystal" | "glass" | "poly";
const FS = 44;
const FCOLS = 10;
const FROWS = 6;
const GRAIN_SEEDS: [number, number][] = [[130, 95], [350, 80], [250, 215]];
const GRAIN_ANG = [0, (24 * Math.PI) / 180, (-17 * Math.PI) / 180];
const GRAIN_COL = ["#4c9be8", "#f2b13f", "#52c98a"];

function FreezeLab() {
  const [mode, setMode] = useState<SolidMode>("crystal");
  const [temp, setTemp] = useState(1);
  const T = useTween(temp, 1.6);
  const time = useClock();

  const sites = useMemo(() => {
    const out: { x: number; y: number }[] = [];
    for (let i = 0; i < FROWS; i++) for (let j = 0; j < FCOLS; j++) out.push({ x: 48 + j * FS + (i % 2 ? FS / 2 : 0), y: 46 + i * FS * 0.866 });
    return out;
  }, []);

  const placed = useMemo(() => {
    return sites.map((s, n) => {
      if (mode === "crystal") return { x: s.x, y: s.y, c: "#4c9be8", bad: false };
      if (mode === "glass") return { x: s.x + (hash(n, 1) - 0.5) * FS * 0.8, y: s.y + (hash(n, 2) - 0.5) * FS * 0.8, c: "#9a84e6", bad: false };
      let g = 0;
      let best = Infinity;
      GRAIN_SEEDS.forEach((sd, k) => {
        const d = Math.hypot(s.x - sd[0], s.y - sd[1]);
        if (d < best) {
          best = d;
          g = k;
        }
      });
      const [sx, sy] = GRAIN_SEEDS[g];
      const a = GRAIN_ANG[g];
      const dx = s.x - sx;
      const dy = s.y - sy;
      return { x: sx + dx * Math.cos(a) - dy * Math.sin(a), y: sy + dx * Math.sin(a) + dy * Math.cos(a), c: GRAIN_COL[g], bad: false };
    });
  }, [mode, sites]);

  const withBad = useMemo(() => placed.map((p, i) => ({ ...p, bad: mode === "poly" && placed.some((q, k) => k !== i && Math.hypot(p.x - q.x, p.y - q.y) < FS * 0.82) })), [placed, mode]);

  const liquid = Math.min(1, Math.max(0, (T - 0.12) / 0.7));
  const amp = FS * (0.06 + 0.5 * liquid ** 1.2);
  const order = T > 0.55 ? "None: a liquid" : mode === "crystal" ? "Long-range, through the whole sample" : mode === "glass" ? "Short-range only" : "Long-range inside each grain only";

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 300" role="img" aria-label="Particles freezing into a crystal, a glass, or a polycrystal" className="w-full rounded-2xl border border-white/10" style={PANEL}>
          <defs>
            <radialGradient id="ballg" cx="35%" cy="30%" r="75%">
              <stop offset="0" stopColor="#fff" stopOpacity="0.85" />
              <stop offset="0.35" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          {withBad.map((p, i) => {
            const x = p.x + amp * Math.sin(time * (1.3 + hash(i, 3) * 1.4) + hash(i, 4) * 6.28);
            const y = p.y + amp * Math.cos(time * (1.1 + hash(i, 5) * 1.5) + hash(i, 6) * 6.28);
            return (
              <g key={i}>
                <circle cx={x} cy={y} r={FS / 2 - 3} fill={p.bad && T < 0.4 ? C.rose : p.c} stroke="#06100f" strokeWidth={1} />
                <circle cx={x} cy={y} r={FS / 2 - 3} fill="url(#ballg)" />
              </g>
            );
          })}
        </svg>
        <Slider label="Temperature (drag left to cool)" value={temp} onChange={setTemp} min={0} max={1} step={0.01} show={temp > 0.55 ? "liquid" : temp > 0.2 ? "freezing" : "solid"} />
        <div className="flex flex-wrap gap-2">
          <Btn primary onClick={() => setTemp(0)}>
            ❄ Cool it
          </Btn>
          <Btn onClick={() => setTemp(1)}>🔥 Melt it</Btn>
        </div>
      </div>
      <div className="space-y-4">
        <Tabs
          label="How it solidifies"
          value={mode}
          onChange={setMode}
          items={[["crystal", "Slow cooling → crystal"], ["glass", "Quench → amorphous"], ["poly", "Many nuclei → polycrystal"]] as const}
        />
        <Narration k={mode}>
          {mode === "crystal" && <Rich text="**Crystalline.** Cooled slowly, the particles have time to find the lowest-energy arrangement: a regular pattern that repeats through the whole sample (**long-range order**)." />}
          {mode === "glass" && <Rich text="**Amorphous.** Cooled too fast to find a pattern, the particles are frozen where they were. Each still has similar neighbours (**short-range order**) but nothing repeats over a distance." />}
          {mode === "poly" && <Rich text="**Polycrystalline.** Crystals start growing from many points at once. Each grain is a perfect crystal, but grains meet at random angles; atoms at the **grain boundaries** (pink) fit neither lattice." />}
        </Narration>
        <Facts items={[["Order", order], ["Melting", mode === "glass" ? "Softens over a range" : "Sharp, definite point"], ["Heat of fusion", mode === "glass" ? "None definite" : "Definite"], ["Cleavage", mode === "glass" ? "Irregular surface" : mode === "crystal" ? "Clean flat faces" : "Across grains"]]} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------- anisotropy */

function AnisotropyLab() {
  const [deg, setDeg] = useState(30);
  const theta = (deg * Math.PI) / 180;
  const crystal = (th: number) => 1 + 0.62 * Math.cos(2 * th);
  const cx = 150;
  const cy = 150;
  const R = 78;
  const path = (f: (t: number) => number) => {
    const pts: string[] = [];
    for (let k = 0; k <= 180; k++) {
      const th = (k / 180) * Math.PI * 2;
      const r = R * f(th);
      pts.push(`${k ? "L" : "M"}${(cx + r * Math.cos(th)).toFixed(1)},${(cy - r * Math.sin(th)).toFixed(1)}`);
    }
    return pts.join(" ") + "Z";
  };
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
      <svg viewBox="0 0 300 300" role="img" aria-label="Polar plot of a property measured at different angles in a crystal and in an amorphous solid" className="mx-auto w-full max-w-[420px] rounded-2xl border border-white/10" style={PANEL}>
        {[0.5, 1, 1.5].map((k) => (
          <circle key={k} cx={cx} cy={cy} r={R * k} fill="none" stroke="#ffffff" strokeOpacity={0.08} />
        ))}
        <line x1={cx - 140} x2={cx + 140} y1={cy} y2={cy} stroke="#fff" strokeOpacity={0.1} />
        <line x1={cx} x2={cx} y1={cy - 140} y2={cy + 140} stroke="#fff" strokeOpacity={0.1} />
        <path d={path(() => 1)} fill="#9a84e6" fillOpacity={0.16} stroke="#9a84e6" strokeWidth={2} />
        <path d={path(crystal)} fill="#4c9be8" fillOpacity={0.2} stroke="#4c9be8" strokeWidth={2.4} />
        <line x1={cx} y1={cy} x2={cx + R * 1.75 * Math.cos(theta)} y2={cy - R * 1.75 * Math.sin(theta)} stroke="#f2b13f" strokeWidth={2} strokeDasharray="4 3" />
        <circle cx={cx + R * crystal(theta) * Math.cos(theta)} cy={cy - R * crystal(theta) * Math.sin(theta)} r={6} fill="#4c9be8" stroke="#fff" strokeWidth={1.5} />
        <circle cx={cx + R * Math.cos(theta)} cy={cy - R * Math.sin(theta)} r={6} fill="#9a84e6" stroke="#fff" strokeWidth={1.5} />
      </svg>
      <div className="space-y-4">
        <Slider label="Direction of measurement" value={deg} onChange={setDeg} min={0} max={180} show={`${deg}°`} />
        <Facts items={[["Crystal reads", crystal(theta).toFixed(2)], ["Amorphous reads", "1.00"], ["Crystal", "anisotropic"], ["Amorphous", "isotropic"]]} />
        <KeyIdea title="Anisotropy">
          {"Measure a physical property (electrical or thermal conductivity, refractive index, mechanical strength) along different directions. In a **crystal** the value changes with direction because the particles are arranged differently along different lines: the blue curve. In an **amorphous** solid the arrangement looks statistically the same from every direction, so the value does not change: the violet circle. A **polycrystal** is isotropic on a large scale because its grains point every way."}
        </KeyIdea>
      </div>
    </div>
  );
}

/* ------------------------------------------------------ four solid types */

type SolidType = "molecular" | "ionic" | "metallic" | "covalent";

const TYPES: Record<SolidType, { name: string; rows: [string, string][]; ex: string }> = {
  molecular: {
    name: "Molecular solids",
    rows: [["Constituents", "Molecules"], ["Held by", "Weak dispersion, dipole–dipole or hydrogen bonds"], ["Hardness / m.p.", "Soft; low melting point"], ["Conductivity", "Insulators"]],
    ex: "Non-polar: Ar, H₂, I₂, CO₂ (dry ice). Polar: HCl, solid SO₂. Hydrogen-bonded: ice, glucose.",
  },
  ionic: {
    name: "Ionic solids",
    rows: [["Constituents", "Cations and anions"], ["Held by", "Coulombic attraction (strong, non-directional)"], ["Hardness / m.p.", "Hard but brittle; high melting point"], ["Conductivity", "Insulator solid; conducts when molten or dissolved"]],
    ex: "NaCl, KNO₃, MgO, ZnS, CaF₂.",
  },
  metallic: {
    name: "Metallic solids",
    rows: [["Constituents", "Metal cations in a sea of free electrons"], ["Held by", "Metallic bonding"], ["Hardness / m.p.", "Hard or soft; malleable, ductile; m.p. varies widely"], ["Conductivity", "Excellent conductors of heat and electricity"]],
    ex: "Fe, Cu, Ag, Na, Hg (liquid).",
  },
  covalent: {
    name: "Covalent (network) solids",
    rows: [["Constituents", "Atoms"], ["Held by", "Covalent bonds through the whole crystal"], ["Hardness / m.p.", "Very hard; very high melting point"], ["Conductivity", "Insulators (graphite and doped Si conduct)"]],
    ex: "Diamond, SiC, quartz (SiO₂), AlN. Graphite is layered: soft, conducting.",
  },
};

function BondScene({ type }: { type: SolidType }) {
  const t = useClock();
  const [on, setOn] = useState(false);
  const [heat, setHeat] = useState(0.2);
  const shift = useTween(on ? 1 : 0, 4);

  const body = (() => {
    if (type === "metallic") {
      const ions = [];
      for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) ions.push(<circle key={`${r}${c}`} cx={64 + c * 58} cy={50 + r * 52} r={13} fill={C.gold} stroke="#06100f" />);
      const el = [];
      for (let k = 0; k < 26; k++) {
        const drift = on ? t * 55 : 0;
        const x = ((((20 + hash(k, 1) * 520 + drift + Math.sin(t * 1.7 + k) * 7) % 540) + 540) % 540) + 10;
        const y = 24 + hash(k, 2) * 190 + Math.cos(t * 2.1 + k * 1.3) * 7;
        el.push(<circle key={k} cx={x} cy={y} r={4.2} fill="#6fe3f0" stroke="#06100f" strokeWidth={0.6} />);
      }
      return (
        <>
          {ions}
          {el}
          {on && <path d="M30 258 H520 M508 251 L520 258 L508 265" stroke="#fff" strokeWidth={2} fill="none" />}
          <text x={30} y={282} fontSize={12} fill="#b8cbc7">{on ? "Voltage applied: free electrons drift, current flows" : "Free electrons move randomly through the lattice of cations"}</text>
        </>
      );
    }
    if (type === "ionic") {
      const out = [];
      for (let r = 0; r < 4; r++) for (let c = 0; c < 9; c++) {
        const pos = (r + c) % 2 === 0;
        const dx = r < 2 ? shift * 29 : 0;
        out.push(
          <g key={`${r}${c}`} transform={`translate(${40 + c * 58 + dx} ${52 + r * 52})`}>
            <circle r={pos ? 13 : 19} fill={pos ? C.gold : C.teal} stroke="#06100f" />
            <text textAnchor="middle" dy="0.35em" fontSize={14} fontWeight={800} fill="#06100f">{pos ? "+" : "−"}</text>
          </g>,
        );
      }
      return (
        <>
          {out}
          {shift > 0.6 && (
            <g>
              <line x1={20} x2={540} y1={104} y2={104} stroke={C.rose} strokeWidth={3} strokeDasharray="6 5" />
              <text x={30} y={96} fontSize={12} fill="#ffb7c3" fontWeight={700}>Like charges now face each other: repulsion cracks the crystal</text>
            </g>
          )}
          <text x={30} y={282} fontSize={12} fill="#b8cbc7">{on ? "A layer displaced by half a spacing: brittle fracture" : "Alternating charges: strong attraction in every direction"}</text>
        </>
      );
    }
    if (type === "covalent") {
      const lines = [];
      const dots = [];
      for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) {
        const x = 64 + c * 58;
        const y = 50 + r * 52;
        if (c < 7) lines.push(<line key={`h${r}${c}`} x1={x} y1={y} x2={x + 58} y2={y} stroke="#ffffff" strokeWidth={3} strokeOpacity={0.8} />);
        if (r < 3) lines.push(<line key={`v${r}${c}`} x1={x} y1={y} x2={x} y2={y + 52} stroke="#ffffff" strokeWidth={3} strokeOpacity={0.8} />);
        dots.push(<circle key={`${r}${c}`} cx={x} cy={y} r={12} fill="#8aa0aa" stroke="#06100f" />);
      }
      return (
        <>
          {lines}
          {dots}
          <text x={30} y={282} fontSize={12} fill="#b8cbc7">Every atom bonded to its neighbours through the whole crystal: rigid and very hard</text>
        </>
      );
    }
    const mols = [];
    const sp = 1 + heat * 0.45;
    for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) {
      const cx = 66 + c * 100 * sp - (sp - 1) * 120 + Math.sin(t * 3 + r * 2 + c) * heat * 9;
      const cy = 56 + r * 78 * sp - (sp - 1) * 60 + Math.cos(t * 2.6 + r + c * 2) * heat * 9;
      mols.push(
        <g key={`${r}${c}`}>
          <line x1={cx - 14} x2={cx + 14} y1={cy} y2={cy} stroke="#fff" strokeWidth={4} />
          <circle cx={cx - 14} cy={cy} r={12} fill={C.violet} stroke="#06100f" />
          <circle cx={cx + 14} cy={cy} r={12} fill={C.violet} stroke="#06100f" />
          {c < 4 && <line x1={cx + 28} x2={cx + 100 * sp - 28} y1={cy} y2={cy} stroke="#fff" strokeOpacity={0.4} strokeDasharray="3 5" />}
        </g>,
      );
    }
    return (
      <>
        {mols}
        <text x={30} y={282} fontSize={12} fill="#b8cbc7">Molecules intact; only weak forces (dashed) between them, so little heat frees them</text>
      </>
    );
  })();

  return (
    <div className="space-y-3">
      <svg viewBox="0 0 560 300" role="img" aria-label={`Model of a ${type} solid`} className="w-full rounded-2xl border border-white/10" style={PANEL}>
        {body}
      </svg>
      {type === "molecular" ? (
        <Slider label="Heat" value={heat} onChange={setHeat} min={0.05} max={1} step={0.01} show={heat > 0.7 ? "melting" : "solid"} />
      ) : type === "covalent" ? null : (
        <Btn onClick={() => setOn((o) => !o)}>{type === "metallic" ? (on ? "Remove voltage" : "Apply a voltage") : on ? "Reset the layer" : "Strike the crystal (shift a layer)"}</Btn>
      )}
    </div>
  );
}

function SolidTypes() {
  const [ty, setTy] = useState<SolidType>("metallic");
  const d = TYPES[ty];
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <BondScene key={ty} type={ty} />
      <div className="space-y-4">
        <Tabs label="Type of solid" value={ty} onChange={setTy} items={[["molecular", "Molecular"], ["ionic", "Ionic"], ["metallic", "Metallic"], ["covalent", "Covalent"]] as const} />
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="text-lg font-black text-[var(--foreground)]">{d.name}</div>
          <dl className="mt-3 space-y-2 text-sm">
            {d.rows.map(([a, b]) => (
              <div key={a} className="grid grid-cols-[7.5rem_1fr] gap-3">
                <dt className="text-[var(--text-muted)]">{a}</dt>
                <dd className="text-[var(--foreground)]">{b}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 border-t border-[var(--border)] pt-3 text-sm leading-6 text-[var(--text-muted)]">
            <strong className="text-[var(--foreground)]">Examples:</strong> {d.ex}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------- lattice and basis */

type L2 = "oblique" | "rect" | "crect" | "square" | "hex";
const L2DEF: Record<L2, { name: string; a: number; b: number; g: number; cons: string; pts: number }> = {
  oblique: { name: "Oblique", a: 70, b: 92, g: 76, cons: "a ≠ b, γ ≠ 90°", pts: 1 },
  rect: { name: "Rectangular", a: 70, b: 98, g: 90, cons: "a ≠ b, γ = 90°", pts: 1 },
  crect: { name: "Centred rectangular", a: 70, b: 98, g: 90, cons: "a ≠ b, γ = 90°, extra point at the centre", pts: 2 },
  square: { name: "Square", a: 80, b: 80, g: 90, cons: "a = b, γ = 90°", pts: 1 },
  hex: { name: "Hexagonal", a: 80, b: 80, g: 120, cons: "a = b, γ = 120°", pts: 1 },
};

function LatticeBasis() {
  const [kind, setKind] = useState<L2>("hex");
  const [basis, setBasis] = useState(false);
  const d = L2DEF[kind];
  const [a, b, g] = useTweenArr([d.a, d.b, d.g], 5);
  const gr = (g * Math.PI) / 180;
  const v1: [number, number] = [a, 0];
  const v2: [number, number] = [b * Math.cos(gr), -b * Math.sin(gr)];
  const o: [number, number] = [190, 210];
  const pts: { p: [number, number]; centred?: boolean }[] = [];
  for (let i = -4; i <= 6; i++) for (let j = -3; j <= 4; j++) {
    const p: [number, number] = [o[0] + i * v1[0] + j * v2[0], o[1] + i * v1[1] + j * v2[1]];
    if (p[0] > 10 && p[0] < 550 && p[1] > 10 && p[1] < 290) pts.push({ p });
    if (kind === "crect") {
      const q: [number, number] = [p[0] + (v1[0] + v2[0]) / 2, p[1] + (v1[1] + v2[1]) / 2];
      if (q[0] > 10 && q[0] < 550 && q[1] > 10 && q[1] < 290) pts.push({ p: q, centred: true });
    }
  }
  const cell = [o, [o[0] + v1[0], o[1] + v1[1]], [o[0] + v1[0] + v2[0], o[1] + v1[1] + v2[1]], [o[0] + v2[0], o[1] + v2[1]]];

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 300" role="img" aria-label="Two-dimensional lattice with a unit cell, optionally decorated with a two-atom basis" className="w-full rounded-2xl border border-white/10" style={PANEL}>
          <polygon points={cell.map((p) => p.join(",")).join(" ")} fill="#f2b13f" fillOpacity={0.16} stroke="#f2b13f" strokeWidth={2} />
          {pts.map(({ p, centred }, i) => (
            <g key={i}>
              {basis ? (
                <g className="ss-rise">
                  <circle cx={p[0]} cy={p[1]} r={11} fill={C.teal} stroke="#06100f" />
                  <circle cx={p[0] + 17} cy={p[1] - 10} r={7} fill={C.rose} stroke="#06100f" />
                  <line x1={p[0]} y1={p[1]} x2={p[0] + 17} y2={p[1] - 10} stroke="#fff" strokeWidth={2} />
                </g>
              ) : (
                <circle cx={p[0]} cy={p[1]} r={5} fill={centred ? C.teal : "#fff"} fillOpacity={0.92} />
              )}
            </g>
          ))}
          <line x1={o[0]} y1={o[1]} x2={o[0] + v1[0]} y2={o[1] + v1[1]} stroke="#fff" strokeWidth={2.4} />
          <line x1={o[0]} y1={o[1]} x2={o[0] + v2[0]} y2={o[1] + v2[1]} stroke="#fff" strokeWidth={2.4} />
          <text x={o[0] + v1[0] / 2} y={o[1] + 18} fontSize={14} fontWeight={700} fill="#fff" textAnchor="middle">a</text>
          <text x={o[0] + v2[0] / 2 - 14} y={o[1] + v2[1] / 2} fontSize={14} fontWeight={700} fill="#fff" textAnchor="middle">b</text>
        </svg>
        <Btn primary onClick={() => setBasis((x) => !x)}>
          {basis ? "Show only the lattice" : "Attach a basis to every point"}
        </Btn>
      </div>
      <div className="space-y-4">
        <Tabs label="Plane lattice" value={kind} onChange={setKind} items={(Object.keys(L2DEF) as L2[]).map((k) => [k, L2DEF[k].name] as const)} />
        <Narration k={`${kind}-${basis}`}>
          {basis ? <Rich text="**Crystal = lattice + basis.** The same two-atom motif is placed on every lattice point. The pattern of points (the lattice) says *where*; the basis says *what*." /> : <Rich text={`**${d.name} lattice.** ${d.cons}. The shaded parallelogram is a unit cell with sides **a** and **b** and angle γ: copies of it, translated, fill the whole plane.`} />}
        </Narration>
        <Facts items={[["Edge a", `${(a / 10).toFixed(1)} units`], ["Edge b", `${(b / 10).toFixed(1)} units`], ["Angle γ", `${g.toFixed(0)}°`], ["Points per cell", kind === "crect" ? "2 (non-primitive)" : "1 (primitive)"]]} />
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          There are five distinct plane lattices. A cell with exactly one lattice point is <strong className="text-[var(--foreground)]">primitive</strong>; a cell with more (the centred rectangle) is non-primitive but is chosen because it shows the rectangular symmetry.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------ 3D Bravais */

type SysKey = "cubic" | "tetragonal" | "orthorhombic" | "hexagonal" | "rhombohedral" | "monoclinic" | "triclinic";
const SYS: Record<SysKey, { name: string; p: [number, number, number, number, number, number]; lat: string[]; cons: string }> = {
  cubic: { name: "Cubic", p: [1.7, 1.7, 1.7, 90, 90, 90], lat: ["P", "I", "F"], cons: "a = b = c;  α = β = γ = 90°" },
  tetragonal: { name: "Tetragonal", p: [1.5, 1.5, 2.4, 90, 90, 90], lat: ["P", "I"], cons: "a = b ≠ c;  α = β = γ = 90°" },
  orthorhombic: { name: "Orthorhombic", p: [1.35, 1.85, 2.5, 90, 90, 90], lat: ["P", "C", "I", "F"], cons: "a ≠ b ≠ c;  α = β = γ = 90°" },
  hexagonal: { name: "Hexagonal", p: [1.7, 1.7, 2.6, 90, 90, 120], lat: ["P"], cons: "a = b ≠ c;  α = β = 90°, γ = 120°" },
  rhombohedral: { name: "Rhombohedral", p: [1.9, 1.9, 1.9, 75, 75, 75], lat: ["P"], cons: "a = b = c;  α = β = γ ≠ 90°" },
  monoclinic: { name: "Monoclinic", p: [1.5, 1.9, 2.4, 90, 108, 90], lat: ["P", "C"], cons: "a ≠ b ≠ c;  α = γ = 90° ≠ β" },
  triclinic: { name: "Triclinic", p: [1.5, 1.95, 2.45, 80, 95, 110], lat: ["P"], cons: "a ≠ b ≠ c;  α ≠ β ≠ γ ≠ 90°" },
};
const LATNAME: Record<string, string> = { P: "Primitive", I: "Body-centred", F: "Face-centred", C: "End (base)-centred" };
const CENTRING: Record<string, V3[]> = {
  P: [],
  I: [[0.5, 0.5, 0.5]],
  C: [[0.5, 0.5, 0], [0.5, 0.5, 1]],
  F: [[0.5, 0.5, 0], [0.5, 0.5, 1], [0.5, 0, 0.5], [0.5, 1, 0.5], [0, 0.5, 0.5], [1, 0.5, 0.5]],
};
const ZPTS: Record<string, number> = { P: 1, I: 2, C: 2, F: 4 };

function cellVectors([a, b, c, al, be, ga]: number[]): [V3, V3, V3] {
  const r = Math.PI / 180;
  const ca = Math.cos(al * r);
  const cb = Math.cos(be * r);
  const cg = Math.cos(ga * r);
  const sg = Math.sin(ga * r);
  const cz = Math.sqrt(Math.max(0, 1 - cb * cb - ((ca - cb * cg) / sg) ** 2));
  const va: V3 = [a, 0, 0];
  const vb: V3 = [b * cg, b * sg, 0];
  const vc: V3 = [c * cb, (c * (ca - cb * cg)) / sg, c * cz];
  return [va, vb, vc];
}

function Bravais3D() {
  const [sys, setSys] = useState<SysKey>("cubic");
  const [lat, setLat] = useState("P");
  const def = SYS[sys];
  const params = useTweenArr(def.p, 4);
  const [va, vb, vc] = cellVectors(params);
  const frac = (f: V3): V3 => {
    const x = f[0] * va[0] + f[1] * vb[0] + f[2] * vc[0];
    const y = f[0] * va[1] + f[1] * vb[1] + f[2] * vc[1];
    const z = f[0] * va[2] + f[1] * vb[2] + f[2] * vc[2];
    const mid = [(va[0] + vb[0] + vc[0]) / 2, (va[1] + vb[1] + vc[1]) / 2, (va[2] + vc[2] + vb[2]) / 2];
    return [x - mid[0], z - mid[2], -(y - mid[1])];
  };
  const atoms: StageAtom[] = [];
  const lines: StageLine[] = [];
  const bonds: StageBond[] = [];
  const polys: StagePoly[] = [];
  let n = 0;
  for (const i of [0, 1]) for (const j of [0, 1]) for (const k of [0, 1]) {
    atoms.push({ id: `c${i}${j}${k}`, p: frac([i, j, k]), r: 0.17, color: C.gold });
    for (const [di, dj, dk] of [[1, 0, 0], [0, 1, 0], [0, 0, 1]] as const) {
      if (i + di <= 1 && j + dj <= 1 && k + dk <= 1 && (i === 0 || di === 0) && (j === 0 || dj === 0) && (k === 0 || dk === 0)) lines.push({ id: `e${n++}`, a: frac([i, j, k]), b: frac([i + di, j + dj, k + dk]) });
    }
  }
  (CENTRING[lat] ?? []).forEach((f, idx) => atoms.push({ id: `x${lat}${idx}`, p: frac(f), r: 0.17, color: C.teal }));
  const o = frac([0, 0, 0]);
  bonds.push({ id: "ax-a", a: o, b: frac([1, 0, 0]), r: 0.035, color: "#ff6b6b" }, { id: "ax-b", a: o, b: frac([0, 1, 0]), r: 0.035, color: "#6bdc8e" }, { id: "ax-c", a: o, b: frac([0, 0, 1]), r: 0.035, color: "#6bb0ff" });
  const total = Object.values(SYS).reduce((s, x) => s + x.lat.length, 0);

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-3">
          <Stage atoms={atoms} lines={lines} bonds={bonds} polys={polys} camera={{ key: "br", az: 0.7, el: 0.38, dist: 11.5 }} autoRotate height={440} label={`${def.name} ${LATNAME[lat]} lattice cell`} />
          <Narration k={`${sys}-${lat}`}>
            <Rich text={`**${def.name}, ${LATNAME[lat].toLowerCase()} lattice.** ${def.cons}. Red, green and blue bars are the axes **a**, **b**, **c**. Lattice points: gold at the 8 corners${lat !== "P" ? ", teal at the centring positions" : ""}. Lattice points owned by this cell: **${ZPTS[lat]}**${sys === "rhombohedral" ? ". (Shown as the primitive rhombohedral cell.)" : "."}`} />
          </Narration>
        </div>
        <div className="space-y-4">
          <div>
            <div className="mb-1.5 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Crystal system</div>
            <Tabs
              label="Crystal system"
              value={sys}
              onChange={(s) => {
                setSys(s);
                setLat(SYS[s].lat[0]);
              }}
              items={(Object.keys(SYS) as SysKey[]).map((k) => [k, SYS[k].name] as const)}
            />
          </div>
          <div>
            <div className="mb-1.5 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Lattice type</div>
            <Tabs label="Lattice type" value={lat} onChange={setLat} items={def.lat.map((l) => [l, `${l}: ${LATNAME[l]}`] as const)} />
          </div>
          <Facts cols={2} items={[["Edges", def.cons.split(";")[0]], ["Angles", def.cons.split(";")[1].trim()], ["Lattices in this system", String(def.lat.length)], ["All systems", `${Object.keys(SYS).length} systems, ${total} lattices`]]} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
            <tr>
              <th className="py-2 pr-4">System</th>
              <th className="py-2 pr-4">Axes and angles</th>
              <th className="py-2 pr-4">Bravais lattices</th>
              <th className="py-2">Count</th>
            </tr>
          </thead>
          <tbody className="text-[var(--foreground)]">
            {(Object.keys(SYS) as SysKey[]).map((k) => (
              <tr key={k} onClick={() => { setSys(k); setLat(SYS[k].lat[0]); }} className={`cursor-pointer border-t border-[var(--border)] ${k === sys ? "bg-[var(--accent)]/10" : ""}`}>
                <td className="py-2 pr-4 font-semibold">{SYS[k].name}</td>
                <td className="py-2 pr-4 font-mono text-[13px]">{SYS[k].cons}</td>
                <td className="py-2 pr-4 font-mono">{SYS[k].lat.join(", ")}</td>
                <td className="py-2 font-mono font-bold">{SYS[k].lat.length}</td>
              </tr>
            ))}
            <tr className="border-t border-[var(--border)] font-bold">
              <td className="py-2 pr-4">Total</td>
              <td />
              <td />
              <td className="py-2 font-mono text-[var(--accent)]">{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- symmetry */

type SymKey = "c4" | "c3" | "c2" | "sh" | "sd" | "i";
const SYM: Record<SymKey, { label: string; kind: "rot" | "mir" | "inv"; v: V3; ang: number; count: string; say: string }> = {
  c4: { label: "4-fold axis (C₄)", kind: "rot", v: [0, 1, 0], ang: 90, count: "3 axes: through the centres of opposite faces", say: "Rotating by 90° brings the cube back onto itself, so the axis is 4-fold. Press the button four times to return every corner to its start." },
  c3: { label: "3-fold axis (C₃)", kind: "rot", v: [1, 1, 1], ang: 120, count: "4 axes: along the body diagonals", say: "Rotating by 120° about a body diagonal moves the three corners around it into each other's places." },
  c2: { label: "2-fold axis (C₂)", kind: "rot", v: [1, 1, 0], ang: 180, count: "6 axes: through mid-points of opposite edges", say: "A half-turn about an axis through the mid-points of two opposite edges is a symmetry of the cube." },
  sh: { label: "Plane parallel to faces", kind: "mir", v: [0, 1, 0], ang: 0, count: "3 planes: each halves the cube between two faces", say: "The plane cuts the cube into two mirror-image halves. Reflection swaps each corner with its partner on the other side." },
  sd: { label: "Diagonal plane", kind: "mir", v: [1, -1, 0], ang: 0, count: "6 planes: each contains two opposite edges", say: "A diagonal plane passes through two opposite edges and the centre; it is also a mirror plane of the cube." },
  i: { label: "Centre of symmetry", kind: "inv", v: [0, 0, 0], ang: 0, count: "1 centre: the middle of the cube", say: "Every point x goes to −x through the centre. Each corner swaps with the corner diagonally opposite." },
};
const CCOL = ["#e8607a", "#f2b13f", "#52c98a", "#4c9be8", "#9a84e6", "#2fbfae", "#f08b4d", "#d86cc2"];

function norm(v: V3): V3 {
  const l = Math.hypot(...v);
  return [v[0] / l, v[1] / l, v[2] / l];
}

function SymmetryLab() {
  const [key, setKey] = useState<SymKey>("c4");
  const [k, setK] = useState(0);
  const s = SYM[key];
  const t = useTween(k, 3.2);
  const u = norm(s.v);
  const corners: V3[] = [];
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) corners.push([x, y, z]);

  const apply = (p: V3): V3 => {
    if (s.kind === "rot") {
      const th = (t * s.ang * Math.PI) / 180;
      const d = u[0] * p[0] + u[1] * p[1] + u[2] * p[2];
      const cr: V3 = [u[1] * p[2] - u[2] * p[1], u[2] * p[0] - u[0] * p[2], u[0] * p[1] - u[1] * p[0]];
      return [p[0] * Math.cos(th) + cr[0] * Math.sin(th) + u[0] * d * (1 - Math.cos(th)), p[1] * Math.cos(th) + cr[1] * Math.sin(th) + u[1] * d * (1 - Math.cos(th)), p[2] * Math.cos(th) + cr[2] * Math.sin(th) + u[2] * d * (1 - Math.cos(th))];
    }
    const w = 1 - Math.abs((t % 2) - 1);
    if (s.kind === "mir") {
      const d = u[0] * p[0] + u[1] * p[1] + u[2] * p[2];
      return [p[0] - 2 * w * d * u[0], p[1] - 2 * w * d * u[1], p[2] - 2 * w * d * u[2]];
    }
    return [p[0] * (1 - 2 * w), p[1] * (1 - 2 * w), p[2] * (1 - 2 * w)];
  };

  const moved = corners.map(apply);
  const atoms: StageAtom[] = moved.map((p, i) => ({ id: `s${i}`, p, r: 0.22, color: CCOL[i] }));
  const lines: StageLine[] = [];
  let n = 0;
  for (let i = 0; i < 8; i++) for (let j = i + 1; j < 8; j++) {
    const diff = corners[i].filter((c, a) => c !== corners[j][a]).length;
    if (diff === 1) lines.push({ id: `l${n++}`, a: moved[i], b: moved[j] });
  }
  const bonds: StageBond[] = [];
  const polys: StagePoly[] = [];
  if (s.kind === "rot") bonds.push({ id: "axis", a: [-u[0] * 2.2, -u[1] * 2.2, -u[2] * 2.2], b: [u[0] * 2.2, u[1] * 2.2, u[2] * 2.2], r: 0.03, color: "#ffffff" });
  if (s.kind === "mir") {
    const a: V3 = Math.abs(u[1]) > 0.9 ? [1, 0, 0] : [0, 1, 0];
    const e1 = norm([u[1] * a[2] - u[2] * a[1], u[2] * a[0] - u[0] * a[2], u[0] * a[1] - u[1] * a[0]]);
    const e2: V3 = [u[1] * e1[2] - u[2] * e1[1], u[2] * e1[0] - u[0] * e1[2], u[0] * e1[1] - u[1] * e1[0]];
    const L = 2.1;
    const vv: V3[] = [[1, 1], [-1, 1], [-1, -1], [1, -1]].map(([p, q]) => [(e1[0] * p + e2[0] * q) * L, (e1[1] * p + e2[1] * q) * L, (e1[2] * p + e2[2] * q) * L] as V3);
    polys.push({ id: "plane", verts: vv, faces: [[0, 1, 2, 3]], color: C.steel, opacity: 0.16 });
  }
  if (s.kind === "inv") atoms.push({ id: "centre", p: [0, 0, 0], r: 0.14, color: "#ffffff", glow: true });

  const pressed = Math.round(k);

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-3">
          <Stage atoms={atoms} lines={lines} bonds={bonds} polys={polys} camera={{ key: "sym", az: 0.7, el: 0.4, dist: 10 }} floorY={-2.5} height={430} label={`Cube with its ${s.label} highlighted`} />
          <Narration k={`${key}-${pressed}`}>
            <Rich text={`**${s.label}.** ${s.say}`} />
          </Narration>
        </div>
        <div className="space-y-4">
          <Tabs label="Symmetry element" value={key} onChange={(v) => { setKey(v); setK(0); }} items={(Object.keys(SYM) as SymKey[]).map((x) => [x, SYM[x].label] as const)} />
          <div className="flex gap-2">
            <Btn primary onClick={() => setK((x) => x + 1)}>
              {s.kind === "rot" ? `Rotate ${s.ang}°` : s.kind === "mir" ? "Reflect" : "Invert"}
            </Btn>
            <Btn onClick={() => setK(0)}>Reset</Btn>
          </div>
          <Facts cols={2} items={[["Operations applied", String(pressed)], ["Order of operation", s.kind === "rot" ? String(360 / s.ang) : "2"], ["How many in a cube", s.count.split(":")[0]], ["Where", s.count.split(":")[1]?.trim() ?? "centre of the cube"]]} />
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-7 text-[var(--text-muted)]">
            <div className="font-bold text-[var(--foreground)]">All symmetry elements of a cube</div>
            <div className="mt-1 font-mono">
              Axes: 3 + 4 + 6 = <span className="font-bold text-[var(--accent)]">13</span>
              <br />
              Planes: 3 + 6 = <span className="font-bold text-[var(--accent)]">9</span>
              <br />
              Centre: <span className="font-bold text-[var(--accent)]">1</span>
              <br />
              Total: <span className="font-bold text-[var(--accent)]">23</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- chapter */

export function FoundationsChapter() {
  return (
    <Chapter id="foundations" n="PART 1" title="What a crystal is" lead="Solids differ from liquids and gases in one respect above all: how their particles are arranged. This part builds the vocabulary of the whole chapter: order, lattice, basis, unit cell, the 14 Bravais lattices and symmetry.">
      <h3 className="text-2xl font-bold text-[var(--foreground)]">Crystalline, amorphous and polycrystalline solids</h3>
      <P t="In a **crystalline** solid the constituent particles (atoms, ions or molecules) sit in a regular pattern that repeats over long distances: **long-range order**. An **amorphous** solid has order only over a few particle diameters (**short-range order**), like a liquid that has been frozen in place. A **polycrystalline** solid is a mass of tiny crystals (grains) fused at random orientations. Watch the three outcomes below." />
      <FreezeLab />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] max-w-4xl text-sm">
          <thead className="text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
            <tr>
              <th className="py-2 pr-4">Property</th>
              <th className="py-2 pr-4">Crystalline</th>
              <th className="py-2">Amorphous</th>
            </tr>
          </thead>
          <tbody className="text-[var(--foreground)]">
            {[
              ["Arrangement", "Long-range, regular and repeating", "Short-range order only"],
              ["Melting point", "Sharp and definite", "Softens gradually over a range"],
              ["Heat of fusion", "Definite value", "No definite value"],
              ["Cleavage", "Splits along flat planes", "Irregular surface"],
              ["Anisotropy", "Anisotropic: properties depend on direction", "Isotropic"],
              ["Examples", "NaCl, quartz, diamond, metals (as grains)", "Glass, rubber, many plastics"],
            ].map(([a, b, c]) => (
              <tr key={a} className="border-t border-[var(--border)]">
                <td className="py-2 pr-4 font-semibold">{a}</td>
                <td className="py-2 pr-4 text-[var(--text-muted)]">{b}</td>
                <td className="py-2 text-[var(--text-muted)]">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <P t="Amorphous solids are sometimes called **pseudo-solids** or **super-cooled liquids** because they lack a sharp melting point and a true long-range pattern. Quartz is crystalline SiO₂; quartz glass, with the same composition, is amorphous." />
      <AnisotropyLab />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Classifying crystalline solids by their binding</h3>
      <P t="What the particles are, and what holds them, decides hardness, melting point and electrical behaviour. Try the two interactive demonstrations: electrons carry current in a metal, while a struck ionic crystal shatters." />
      <SolidTypes />

      <Traps
        items={[
          "A crystal is **anisotropic**; an amorphous solid and a polycrystalline sample are **isotropic** on a large scale.",
          "Glass has **no sharp melting point and no definite heat of fusion**. Quartz glass and quartz are different solids with the same formula.",
          "Ionic solids conduct only when **molten or dissolved**. Metals conduct as solids. Graphite conducts because of its delocalised layers, not because it is metallic.",
          "Hydrogen-bonded molecular solids (ice) are **molecular**, not ionic or covalent.",
        ]}
      />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Lattice, basis and unit cell</h3>
      <P t="To describe a crystal, separate **where** the repeating units are from **what** they are. A **lattice** is an array of points in which every point has exactly the same surroundings. The **basis** is the atom, or group of atoms, attached to each lattice point. **Crystal structure = lattice + basis.** A **unit cell** is the parallelogram (in 3D, parallelepiped) spanned by the lattice vectors a, b (and c); translating it fills all space." />
      <LatticeBasis />
      <KeyIdea title="Lattice point is not the same as atom">
        {"A lattice point is a mathematical point. A real crystal can have many atoms per lattice point (a basis of 2 in diamond, a whole molecule in a protein crystal), and two different structures can share one lattice."}
      </KeyIdea>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Seven crystal systems and fourteen Bravais lattices</h3>
      <P t="In three dimensions a unit cell is described by three edges **a, b, c** and three angles **α** (between b and c), **β** (between a and c) and **γ** (between a and b). Only seven shapes of cell fill space with different symmetry, the **crystal systems**. Placing extra lattice points at the centre of the cell (**I**), at the centres of all faces (**F**), or at the centres of one pair of faces (**C**) gives further distinct lattices. Auguste Bravais showed that exactly **14** exist." />
      <Bravais3D />
      <Traps
        items={[
          "There are **14** Bravais lattices in **7** systems. Counts: cubic 3, tetragonal 2, orthorhombic 4, hexagonal 1, rhombohedral 1, monoclinic 2, triclinic 1.",
          "Cubic has **P, I, F** only; a C-centred cubic lattice would simply be a primitive tetragonal one. Tetragonal has **P and I** only for the same reason (F reduces to I).",
          "Only **orthorhombic** has all four types P, C, I, F.",
          "Hexagonal: a = b ≠ c with γ = **120°**. Rhombohedral: a = b = c with α = β = γ ≠ 90°.",
          "Remember the angles: α is opposite to a (between b and c).",
        ]}
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Worked q="Which crystal system has a = b ≠ c and α = β = γ = 90°? How many Bravais lattices belong to it?" steps={["Two equal edges, one different, all right angles: tetragonal.", "A body-centred tetragonal lattice exists; a face-centred one reduces to it.", "Allowed lattices: primitive and body-centred."]} answer="Tetragonal; 2 lattices (P and I)" />
        <Worked q="A lattice has points at the 8 corners and at the centres of the two opposite faces. How many lattice points belong to one cell?" steps={["Corners: $8\\times\\tfrac18 = 1$.", "Face centres: $2\\times\\tfrac12 = 1$."]} answer="2 (an end-centred, C-type, lattice)" />
      </div>


      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Volume of the unit cell</h3>
      <P t="Density, packing efficiency and every X-ray calculation need the volume of the cell. For a cube it is $a^3$; for the other six systems the edges and angles enter. All seven results come from one general expression, derived below." />
      <Derivation
        no="1.1"
        title="Volume of a general unit cell"
        given="A cell with edges $a$, $b$, $c$ and angles $\alpha$ (between $b$ and $c$), $\beta$ (between $a$ and $c$), $\gamma$ (between $a$ and $b$)."
        find="The volume $V$ of the parallelepiped in terms of $a, b, c, \alpha, \beta, \gamma$."
        steps={[
          { say: "Place the edge vectors in a convenient frame: **a** along $x$, **b** in the $xy$ plane, and **c** pointing up:", tex: "\\mathbf a = (a,0,0),\\quad \\mathbf b = (b\\cos\\gamma,\; b\\sin\\gamma,\; 0),\\quad \\mathbf c = (c_x, c_y, c_z)" },
          { say: "The dot products with **a** and **b** fix the first two components of **c**:", tex: "c_x = c\\cos\\beta,\\qquad c_y = \\frac{c\\,(\\cos\\alpha - \\cos\\beta\\cos\\gamma)}{\\sin\\gamma}" },
          { say: "The length of **c** is $c$, so the height follows from $c_z^2 = c^2 - c_x^2 - c_y^2$. The volume is the area of the base times the height, $V = (ab\\sin\\gamma)\\,c_z$:", tex: "V = abc\\,\\sqrt{\\sin^2\\gamma\\,(1-\\cos^2\\beta) - (\\cos\\alpha - \\cos\\beta\\cos\\gamma)^2}" },
          { say: "Expand the bracket and use $\\sin^2\\gamma = 1 - \\cos^2\\gamma$; the terms $\\cos^2\\beta\\cos^2\\gamma$ cancel:", tex: "V = abc\\,\\sqrt{1 - \\cos^2\\alpha - \\cos^2\\beta - \\cos^2\\gamma + 2\\cos\\alpha\\cos\\beta\\cos\\gamma}" },
        ]}
        result="V = abc\sqrt{1 - \cos^2\alpha - \cos^2\beta - \cos^2\gamma + 2\cos\alpha\cos\beta\cos\gamma}"
        note="Putting in the angles of each crystal system collapses the square root, as the table shows."
      />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] max-w-3xl text-sm">
          <thead className="text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
            <tr>
              <th className="py-2 pr-4">System</th>
              <th className="py-2 pr-4">Conditions</th>
              <th className="py-2">Volume of the cell</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Cubic", "a = b = c, all 90°", "a^3"],
              ["Tetragonal", "a = b ≠ c, all 90°", "a^2 c"],
              ["Orthorhombic", "a ≠ b ≠ c, all 90°", "abc"],
              ["Hexagonal (primitive)", "a = b ≠ c, γ = 120°", "\\tfrac{\\sqrt3}{2}\\,a^2 c"],
              ["Rhombohedral (trigonal)", "a = b = c, α = β = γ", "a^3\\sqrt{1 - 3\\cos^2\\alpha + 2\\cos^3\\alpha}"],
              ["Monoclinic", "a ≠ b ≠ c, α = γ = 90° ≠ β", "abc\\,\\sin\\beta"],
              ["Triclinic", "a ≠ b ≠ c, no right angles", "abc\\sqrt{1 - \\cos^2\\alpha - \\cos^2\\beta - \\cos^2\\gamma + 2\\cos\\alpha\\cos\\beta\\cos\\gamma}"],
            ].map(([a, b, v]) => (
              <tr key={a} className="border-t border-[var(--border)]">
                <td className="py-2 pr-4 font-semibold text-[var(--foreground)]">{a}</td>
                <td className="py-2 pr-4 text-[var(--text-muted)]">{b}</td>
                <td className="py-2"><Tex ex={v} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <KeyIdea title="The hexagonal cell you draw is three primitive cells">
        {"The hexagonal prism used for HCP has volume $\\tfrac{3\\sqrt3}{2}a^2c$ and holds 6 atoms. The primitive hexagonal cell (a rhombic prism with γ = 120°) is one third of it, $\\tfrac{\\sqrt3}{2}a^2c$, and holds 2 atoms. Use the one that matches the number of atoms you are counting."}
      </KeyIdea>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Symmetry of the cube</h3>
      <P t="A **symmetry element** is a point, line or plane about which an operation leaves the crystal looking unchanged. Three kinds matter for a cubic cell: **axes of rotation** (turn through 360°/n), **planes of symmetry** (mirror), and a **centre of symmetry** (inversion through a point). Apply each operation below and watch the coloured corners exchange places." />
      <SymmetryLab />
      <div className="grid gap-4 md:grid-cols-2">
        <Worked q="How many planes of symmetry does a cube have?" steps={["Planes parallel to a pair of faces: 3.", "Diagonal planes through a pair of opposite edges: 6."]} answer="9 planes" />
        <Worked q="How many axes of rotation does a cube have? Give their fold." steps={["Face-centre axes: 3 (4-fold).", "Body-diagonal axes: 4 (3-fold).", "Edge mid-point axes: 6 (2-fold)."]} answer="13 axes (3 four-fold, 4 three-fold, 6 two-fold); with 9 planes and 1 centre, 23 elements in all" />
      </div>
    </Chapter>
  );
}
