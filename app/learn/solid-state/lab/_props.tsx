"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

const KB_EV = 8.617e-5;

function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

/** Deterministic hash → [0,1) so animated "randomness" is repeatable and render-pure. */
function hash01(a: number, b: number) {
  let h = (a * 374761393 + b * 668265263) | 0;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = h ^ (h >>> 16);
  return ((h >>> 0) % 100000) / 100000;
}

/* ------------------------------------------------------------------ defects */

type DefectMode = "perfect" | "schottky" | "frenkel" | "fcentre" | "impurity";

const COLS = 8;
const ROWS = 5;
const SP = 58;
const OX = 56;
const OY = 62;
const isCation = (c: number, r: number) => (c + r) % 2 === 0;
const at = (c: number, r: number): [number, number] => [OX + c * SP, OY + r * SP];

// Schottky pairs: [cation site, adjacent anion site]
const SCHOTTKY: [[number, number], [number, number]][] = [
  [[2, 2], [3, 2]],
  [[6, 1], [5, 1]],
  [[1, 4], [0, 4]],
  [[4, 0], [5, 0]],
  [[7, 3], [6, 3]],
];

const DEFECT_INFO: Record<DefectMode, { title: string; points: string[] }> = {
  perfect: {
    title: "Ideal ionic crystal",
    points: ["Every lattice site is occupied.", "Cation : anion ratio equals the formula ratio.", "No real crystal above 0 K is perfect: some defects are always present."],
  },
  schottky: {
    title: "Schottky defect: a vacant cation–anion pair",
    points: [
      "Equal numbers of cations and anions are missing, so the crystal stays neutral and stoichiometric.",
      "Ions leave for the surface, so the volume grows while the mass is unchanged: density decreases.",
      "Favoured by high coordination and similar ion sizes: NaCl, KCl, CsCl, AgBr.",
      "More pairs form as temperature rises (n ≈ N·exp[−E/2kT]).",
    ],
  },
  frenkel: {
    title: "Frenkel defect: an ion moves to an interstitial site",
    points: [
      "The smaller ion (usually the cation) leaves its site and sits in a void, leaving a vacancy behind.",
      "No ion leaves the crystal, so density and stoichiometry are unchanged.",
      "Favoured by low coordination and a large size difference: ZnS, AgCl, AgBr, AgI.",
      "AgBr shows both Schottky and Frenkel defects.",
    ],
  },
  fcentre: {
    title: "F-centre: an anion vacancy holding an electron",
    points: [
      "Heating NaCl in sodium vapour adds Na atoms; Cl⁻ ions leave their sites to bond with the extra Na.",
      "Each vacancy traps the electron that Na released, a metal-excess defect.",
      "The trapped electron absorbs visible light, so NaCl turns yellow (KCl violet, LiCl pink).",
      "The crystal becomes paramagnetic.",
    ],
  },
  impurity: {
    title: "Impurity defect: Sr²⁺ in NaCl",
    points: [
      "A Sr²⁺ ion replaces two Na⁺ sites: one is taken by Sr²⁺, the other becomes a cation vacancy.",
      "Total positive charge stays balanced: 2+ replaces 1+ and 1+.",
      "Vacancy concentration equals the dopant concentration, independent of temperature.",
      "Same idea: CdCl₂ doped into AgCl.",
    ],
  },
};

export function DefectLab() {
  const [mode, setMode] = useState<DefectMode>("schottky");
  const [pairs, setPairs] = useState(2);

  const removed = new Set<string>();
  const ghosts: { key: string; from: [number, number]; cation: boolean }[] = [];
  let moved: { from: [number, number]; to: [number, number] } | null = null;
  let electron: [number, number] | null = null;
  let sr: [number, number] | null = null;

  if (mode === "schottky") {
    SCHOTTKY.slice(0, pairs).forEach(([cat, an]) => {
      removed.add(cat.join(","));
      removed.add(an.join(","));
      ghosts.push({ key: cat.join(","), from: at(...cat), cation: true }, { key: an.join(","), from: at(...an), cation: false });
    });
  }
  if (mode === "frenkel") {
    moved = { from: [4, 2], to: [4.5, 2.5] };
    removed.add("4,2");
  }
  if (mode === "fcentre") {
    removed.add("3,2");
    electron = at(3, 2);
  }
  if (mode === "impurity") {
    sr = at(4, 2);
    removed.add("5,3");
  }

  const info = DEFECT_INFO[mode];
  const ions = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const key = `${c},${r}`;
      let [x, y] = at(c, r);
      const cat = isCation(c, r);
      let opacity = 1;
      let fill = cat ? "#f2b84b" : "#4fc3b8";
      let rad = cat ? 14 : 20;
      if (removed.has(key)) opacity = 0;
      if (moved && moved.from[0] === c && moved.from[1] === r) {
        [x, y] = at(moved.to[0], moved.to[1]);
        opacity = 1;
      }
      if (sr && c === 4 && r === 2) {
        fill = "#a98be8";
        rad = 17;
      }
      ions.push(
        <g key={key} style={{ transform: `translate(${x}px, ${y}px)`, transition: "transform .9s cubic-bezier(.3,.7,.2,1), opacity .7s" }} opacity={opacity}>
          <circle r={rad} fill={fill} stroke="#071311" strokeWidth={1.3} />
          <text textAnchor="middle" dy="0.35em" fontSize={cat ? 13 : 15} fontWeight={800} fill="#071311">
            {sr && c === 4 && r === 2 ? "2+" : cat ? "+" : "−"}
          </text>
        </g>,
      );
    }
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <div>
        <svg
          viewBox="0 0 560 360"
          role="img"
          aria-label={`Two-dimensional ionic lattice showing ${info.title}`}
          className="w-full rounded-xl border border-[var(--border)]"
          style={{ background: "radial-gradient(ellipse at 50% 40%, #1b3a36 0%, #0c1a19 75%)" }}
        >
          {/* vacancy markers */}
          {[...removed].map((k) => {
            const [c, r] = k.split(",").map(Number);
            const [x, y] = at(c, r);
            return <circle key={`v-${k}`} cx={x} cy={y} r={isCation(c, r) ? 14 : 20} fill="none" stroke="#fff" strokeOpacity={0.7} strokeWidth={1.6} strokeDasharray="4 4" />;
          })}
          {/* interstitial target hint */}
          {mode === "frenkel" && <circle cx={at(4.5, 2.5)[0]} cy={at(4.5, 2.5)[1]} r={16} fill="none" stroke="#fff" strokeOpacity={0.35} strokeDasharray="2 4" />}
          {ions}
          {electron && (
            <circle cx={electron[0]} cy={electron[1]} r={7} fill="#ffe27a">
              <animate attributeName="opacity" values="1;0.45;1" dur="1.6s" repeatCount="indefinite" />
              <animate attributeName="r" values="7;10;7" dur="1.6s" repeatCount="indefinite" />
            </circle>
          )}
          {ghosts.map((g) => (
            <circle key={`g-${g.key}`} cx={g.from[0]} cy={36} r={g.cation ? 9 : 12} fill={g.cation ? "#f2b84b" : "#4fc3b8"} opacity={0.75}>
              <animate attributeName="cy" from={g.from[1]} to={30} dur="1.1s" fill="freeze" />
            </circle>
          ))}
          {mode === "schottky" && <text x={20} y={20} fontSize={11} fill="#b8cbc7">Missing ions end up on the crystal surface</text>}
        </svg>

        <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="Defect type">
          {(
            [
              ["perfect", "Perfect"],
              ["schottky", "Schottky"],
              ["frenkel", "Frenkel"],
              ["fcentre", "F-centre"],
              ["impurity", "Impurity"],
            ] as const
          ).map(([k, t]) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={mode === k}
              onClick={() => setMode(k)}
              className={`rounded-md border px-3 py-1.5 text-sm font-semibold ${mode === k ? "border-[var(--accent)] bg-[var(--accent)] text-black" : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"}`}
            >
              {t}
            </button>
          ))}
        </div>
        {mode === "schottky" && (
          <label className="mt-3 block text-sm text-[var(--text-muted)]">
            <span className="flex justify-between">
              <span>Temperature (more Schottky pairs as T rises)</span>
              <span className="font-mono font-bold text-[var(--foreground)]">{pairs} pair{pairs > 1 ? "s" : ""}</span>
            </span>
            <input type="range" min={1} max={5} value={pairs} onChange={(e) => setPairs(Number(e.target.value))} className="mt-1 w-full accent-[var(--accent)]" />
          </label>
        )}
      </div>

      <div className="space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="font-black text-[var(--foreground)]">{info.title}</div>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--foreground)]">
            {info.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <dl className="grid grid-cols-3 gap-2 text-sm">
          {[
            ["Stoichiometry", mode === "fcentre" ? "Metal excess" : "Unchanged"],
            ["Density", mode === "schottky" ? "Decreases" : mode === "perfect" ? "Reference" : mode === "fcentre" ? "Slightly lower" : "≈ Unchanged"],
            ["Type", mode === "schottky" || mode === "frenkel" ? "Stoichiometric" : mode === "perfect" ? "—" : "Non-stoichiometric"],
          ].map(([t, v]) => (
            <div key={t} className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2">
              <dt className="text-[11px] uppercase tracking-wide text-[var(--text-muted)]">{t}</dt>
              <dd className="font-bold text-[var(--foreground)]">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- bands */

type Material = { key: string; name: string; eg: number; kind: "metal" | "semi" | "insulator" };
const MATERIALS: Material[] = [
  { key: "metal", name: "Metal (Cu)", eg: 0, kind: "metal" },
  { key: "ge", name: "Germanium", eg: 0.67, kind: "semi" },
  { key: "si", name: "Silicon", eg: 1.1, kind: "semi" },
  { key: "dia", name: "Diamond", eg: 5.5, kind: "insulator" },
];

function sci(x: number) {
  if (x === 0) return "0";
  const e = Math.floor(Math.log10(x));
  return `${(x / 10 ** e).toFixed(1)} × 10${String(e).replace(/-/g, "⁻").replace(/\d/g, (d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(d)])}`;
}

export function BandLab() {
  const [matKey, setMatKey] = useState("si");
  const [temp, setTemp] = useState(300);
  const reduced = useReducedMotion();
  const mat = MATERIALS.find((m) => m.key === matKey) ?? MATERIALS[2];

  const gapPx = mat.kind === "metal" ? -24 : 14 + mat.eg * 16;
  const bandH = 74;
  const top = 26;
  const condY = top;
  const valY = top + bandH + gapPx;
  const x0 = 24;
  const bw = 250;

  const f = mat.kind === "metal" ? 1 : Math.exp(-mat.eg / (2 * KB_EV * temp));
  const nCarriers = mat.kind === "metal" ? 10 : Math.round(Math.max(0, Math.min(1, (Math.log10(f) + 15) / 14)) * 12);
  const jitter = 2 + temp / 140;

  const sigma = useMemo(() => {
    const pts: [number, number][] = [];
    for (let t = 100; t <= 1000; t += 20) {
      const rel = mat.kind === "metal" ? 300 / t : Math.exp(-(mat.eg / (2 * KB_EV)) * (1 / t - 1 / 300));
      pts.push([t, Math.log10(rel)]);
    }
    return pts;
  }, [mat]);
  const px = (t: number) => 372 + ((t - 100) / 900) * 168;
  const py = (v: number) => 160 - ((Math.max(-6, Math.min(7, v)) + 6) / 13) * 130;
  const path = sigma.map(([t, v], i) => `${i ? "L" : "M"}${px(t).toFixed(1)},${py(v).toFixed(1)}`).join(" ");
  const nowRel = mat.kind === "metal" ? Math.log10(300 / temp) : -(mat.eg / (2 * KB_EV)) * (1 / temp - 1 / 300) / Math.LN10;

  const electrons = Array.from({ length: nCarriers }, (_, i) => ({
    x: x0 + 18 + hash01(i, 1) * (bw - 36),
    y: condY + 14 + hash01(i, 2) * (bandH - 28),
    d: 0.8 + hash01(i, 3) * 1.4,
    dx: (hash01(i, 4) - 0.5) * 2 * jitter,
    dy: (hash01(i, 5) - 0.5) * 2 * jitter,
  }));

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
      <div>
        <svg
          viewBox="0 0 560 300"
          role="img"
          aria-label={`Energy band diagram for ${mat.name} at ${temp} kelvin with its conductivity trend`}
          className="w-full rounded-xl border border-[var(--border)]"
          style={{ background: "radial-gradient(ellipse at 50% 40%, #1b3a36 0%, #0c1a19 75%)" }}
        >
          <style>{`
            @keyframes ssJit { 0%,100% { transform: translate(0,0); } 50% { transform: translate(var(--dx), var(--dy)); } }
            .ss-e { animation: ssJit var(--d) ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) { .ss-e { animation: none; } }
          `}</style>
          <rect x={x0} y={condY} width={bw} height={bandH} rx={6} fill="#4aa8e8" fillOpacity={0.28} stroke="#4aa8e8" />
          <rect x={x0} y={valY} width={bw} height={bandH} rx={6} fill={mat.kind === "metal" ? "#4aa8e8" : "#f2b84b"} fillOpacity={0.3} stroke={mat.kind === "metal" ? "#4aa8e8" : "#f2b84b"} />
          <text x={x0 + 8} y={condY + 16} fontSize={11} fill="#cfe6f7">Conduction band</text>
          <text x={x0 + 8} y={valY + bandH - 8} fontSize={11} fill="#f7e2b5">{mat.kind === "metal" ? "Overlapping valence band" : "Valence band"}</text>
          {mat.kind !== "metal" && (
            <g>
              <line x1={x0 + bw + 14} x2={x0 + bw + 14} y1={condY + bandH} y2={valY} stroke="#fff" strokeOpacity={0.7} />
              <text x={x0 + bw + 20} y={(condY + bandH + valY) / 2 + 4} fontSize={12} fill="#fff" fontWeight={700}>E<tspan baselineShift="sub" fontSize={9}>g</tspan> = {mat.eg} eV</text>
            </g>
          )}
          {mat.kind === "metal" && <text x={x0 + bw / 2} y={condY + bandH + 5} textAnchor="middle" fontSize={11} fill="#fff" opacity={0.8}>no gap</text>}
          {electrons.map((e, i) => (
            <circle
              key={i}
              className="ss-e"
              cx={e.x}
              cy={e.y}
              r={4.5}
              fill="#7fe0ff"
              style={{ ["--dx" as string]: `${reduced ? 0 : e.dx}px`, ["--dy" as string]: `${reduced ? 0 : e.dy}px`, ["--d" as string]: `${e.d}s` }}
            />
          ))}
          {mat.kind !== "metal" &&
            electrons.slice(0, nCarriers).map((e, i) => (
              <circle key={`h${i}`} cx={x0 + 18 + hash01(i, 7) * (bw - 36)} cy={valY + 14 + hash01(i, 8) * (bandH - 28)} r={4.5} fill="none" stroke="#f2b84b" strokeWidth={2} />
            ))}
          <text x={x0} y={valY + bandH + 22} fontSize={11} fill="#b8cbc7">
            {mat.kind === "metal"
              ? "Many free electrons at every temperature."
              : nCarriers === 0
                ? "No thermally excited carriers: cannot conduct."
                : "Blue = electrons in conduction band · hollow = holes left behind"}
          </text>

          {/* sigma vs T */}
          <text x={372} y={20} fontSize={11} fill="#d8e7e4" fontWeight={700}>σ(T) / σ(300 K)</text>
          <line x1={372} y1={26} x2={372} y2={160} stroke="#9bb8b3" />
          <line x1={372} y1={160} x2={546} y2={160} stroke="#9bb8b3" />
          <line x1={px(300)} y1={26} x2={px(300)} y2={160} stroke="#fff" strokeOpacity={0.15} strokeDasharray="3 4" />
          <path d={path} fill="none" stroke={mat.kind === "metal" ? "#ef7f8e" : "#4aa8e8"} strokeWidth={2.4} />
          <circle cx={px(temp)} cy={py(nowRel)} r={5} fill="#fff" stroke="#071311" />
          <text x={372} y={176} fontSize={10} fill="#b8cbc7">100 K</text>
          <text x={546} y={176} fontSize={10} fill="#b8cbc7" textAnchor="end">1000 K</text>
          <text x={459} y={190} fontSize={10} fill="#b8cbc7" textAnchor="middle">temperature</text>
          <text x={380} y={42} fontSize={10} fill="#b8cbc7">log scale, clipped to 10⁻⁶ – 10⁷</text>
          <text x={372} y={226} fontSize={11} fill="#d8e7e4">{mat.kind === "metal" ? "Metal: σ falls as T rises" : "Semiconductor: σ rises as T rises"}</text>
          <text x={372} y={243} fontSize={10} fill="#b8cbc7">{mat.kind === "metal" ? "(lattice vibrations scatter electrons)" : "(more carriers cross the gap)"}</text>
        </svg>

        <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="Material">
          {MATERIALS.map((m) => (
            <button
              key={m.key}
              type="button"
              role="tab"
              aria-selected={matKey === m.key}
              onClick={() => setMatKey(m.key)}
              className={`rounded-md border px-3 py-1.5 text-sm font-semibold ${matKey === m.key ? "border-[var(--accent)] bg-[var(--accent)] text-black" : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"}`}
            >
              {m.name}
            </button>
          ))}
        </div>
        <label className="mt-3 block text-sm text-[var(--text-muted)]">
          <span className="flex justify-between">
            <span>Temperature</span>
            <span className="font-mono font-bold text-[var(--foreground)]">{temp} K</span>
          </span>
          <input type="range" min={100} max={1000} step={10} value={temp} onChange={(e) => setTemp(Number(e.target.value))} className="mt-1 w-full accent-[var(--accent)]" />
        </label>
      </div>

      <div className="space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-6 text-[var(--foreground)]">
          <div className="font-black">{mat.name}</div>
          {mat.kind === "metal" ? (
            <p className="mt-1">The valence band overlaps the conduction band (or is only half filled), so electrons move under any field. Resistance rises with temperature.</p>
          ) : (
            <>
              <p className="mt-1">
                Fraction of carriers excited across the gap ∝ exp(−E<sub>g</sub> / 2kT) = <span className="font-mono font-bold">{sci(f)}</span> at {temp} K.
              </p>
              <p className="mt-2 text-[var(--text-muted)]">
                {mat.kind === "insulator"
                  ? "A gap of about 5 eV or more leaves essentially no carriers, even at 1000 K."
                  : "A gap of about 1 eV is small enough for heating and doping to supply carriers."}
              </p>
            </>
          )}
        </div>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--text-muted)]">
          <li>Doping Si with group 15 (P, As) adds donor electrons: n-type. Doping with group 13 (B, Al) adds holes: p-type.</li>
          <li>Particle count in the picture is schematic (log-scaled); the quoted fraction is the exp(−E<sub>g</sub>/2kT) value.</li>
          <li>JEE trap: a metal&apos;s conductivity decreases on heating, a semiconductor&apos;s increases.</li>
        </ul>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- magnetism */

type Order = "para" | "dia" | "ferro" | "antiferro" | "ferri";
const ORDER_INFO: Record<Order, { title: string; examples: string; text: string; tc?: string }> = {
  para: { title: "Paramagnetic", examples: "O₂, NO, Cu²⁺, Fe³⁺, Ti³⁺", text: "Unpaired electrons give permanent dipoles, but they point randomly. A field aligns them weakly and temporarily: the substance is attracted, and the effect vanishes when the field is removed." },
  dia: { title: "Diamagnetic", examples: "NaCl, H₂O, N₂, C₆H₆, Zn²⁺", text: "All electrons are paired, so there is no permanent dipole. An applied field induces a small opposing moment: the substance is weakly repelled." },
  ferro: { title: "Ferromagnetic", examples: "Fe, Co, Ni, CrO₂", text: "Domains of aligned dipoles, strongly attracted and able to keep the magnetism after the field is removed (permanent magnets).", tc: "Curie temperature: Fe 1043 K, Ni 627 K" },
  antiferro: { title: "Antiferromagnetic", examples: "MnO, MnO₂, FeO, NiO", text: "Equal dipoles alternate in opposite directions, so the net moment is zero and the solid is only weakly attracted.", tc: "Néel temperature: MnO ≈ 120 K" },
  ferri: { title: "Ferrimagnetic", examples: "Fe₃O₄ (magnetite), ferrites such as MgFe₂O₄", text: "Dipoles alternate, but the two sets are unequal, so a net moment remains. The solid is attracted strongly, though less than a ferromagnet.", tc: "Curie temperature: Fe₃O₄ ≈ 858 K" },
};

const MC = 9;
const MR = 5;

export function MagnetLab() {
  const [order, setOrder] = useState<Order>("ferro");
  const [t, setT] = useState(0.4);
  const [tick, setTick] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setTick((x) => x + 1), 900);
    return () => window.clearInterval(id);
  }, [reduced]);

  const ordered = order === "ferro" || order === "antiferro" || order === "ferri";
  const hot = ordered && t >= 1;
  const spins: { x: number; y: number; angle: number; scale: number }[] = [];
  let mx = 0;
  let my = 0;
  for (let r = 0; r < MR; r++) {
    for (let c = 0; c < MC; c++) {
      const i = r * MC + c;
      const parity = (r + c) % 2;
      let angle = 0;
      let scale = 1;
      const rand = hash01(i, tick + 11) * 360;
      if (order === "para" || hot) angle = rand;
      else if (order === "ferro") angle = 0;
      else if (order === "antiferro") angle = parity ? 180 : 0;
      else if (order === "ferri") {
        angle = parity ? 180 : 0;
        scale = parity ? 0.55 : 1;
      }
      if (ordered && !hot && hash01(i, 99) < 0.5 * t ** 3) angle += (hash01(i, tick + 3) - 0.5) * 110;
      const rad = (angle * Math.PI) / 180;
      if (order !== "dia") {
        mx += Math.sin(rad) * scale;
        my += Math.cos(rad) * scale;
      }
      spins.push({ x: 50 + c * 58, y: 48 + r * 58, angle, scale });
    }
  }
  const net = order === "dia" ? 0 : Math.hypot(mx, my) / (MC * MR);
  const info = ORDER_INFO[order];

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <div>
        <svg
          viewBox="0 0 560 330"
          role="img"
          aria-label={`Arrangement of magnetic dipoles in a ${info.title.toLowerCase()} solid`}
          className="w-full rounded-xl border border-[var(--border)]"
          style={{ background: "radial-gradient(ellipse at 50% 40%, #1b3a36 0%, #0c1a19 75%)" }}
        >
          {spins.map((s, i) =>
            order === "dia" ? (
              <g key={i} transform={`translate(${s.x} ${s.y})`}>
                <circle r={5} cx={-7} fill="none" stroke="#7fe0ff" />
                <circle r={5} cx={7} fill="none" stroke="#f2b84b" />
                <path d="M-7 4 V-4 M-9.5 -1.5 L-7 -4.5 L-4.5 -1.5" stroke="#7fe0ff" fill="none" strokeWidth={1.4} />
                <path d="M7 -4 V4 M4.5 1.5 L7 4.5 L9.5 1.5" stroke="#f2b84b" fill="none" strokeWidth={1.4} />
              </g>
            ) : (
              <g key={i} style={{ transform: `translate(${s.x}px, ${s.y}px) rotate(${s.angle}deg) scale(${s.scale})`, transition: "transform .8s ease" }}>
                <path d="M0 18 V-14 M-8 -6 L0 -18 L8 -6" stroke={s.scale < 1 ? "#f2b84b" : "#7fe0ff"} strokeWidth={3.2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            ),
          )}
          {order === "dia" && <text x={20} y={318} fontSize={11} fill="#b8cbc7">Paired electrons: opposite spins cancel; no permanent dipole</text>}
        </svg>

        <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="Magnetic behaviour">
          {(Object.keys(ORDER_INFO) as Order[]).map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={order === k}
              onClick={() => setOrder(k)}
              className={`rounded-md border px-3 py-1.5 text-sm font-semibold ${order === k ? "border-[var(--accent)] bg-[var(--accent)] text-black" : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"}`}
            >
              {ORDER_INFO[k].title}
            </button>
          ))}
        </div>
        <label className={`mt-3 block text-sm ${ordered ? "text-[var(--text-muted)]" : "text-[var(--text-muted)] opacity-50"}`}>
          <span className="flex justify-between">
            <span>Temperature relative to T<sub>c</sub></span>
            <span className="font-mono font-bold text-[var(--foreground)]">{t.toFixed(2)} T<sub>c</sub></span>
          </span>
          <input type="range" min={0.1} max={2} step={0.05} value={t} disabled={!ordered} onChange={(e) => setT(Number(e.target.value))} className="mt-1 w-full accent-[var(--accent)]" />
        </label>
      </div>

      <div className="space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="font-black text-[var(--foreground)]">{info.title}</div>
          <p className="mt-1 text-sm leading-6 text-[var(--foreground)]">{info.text}</p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">Examples: {info.examples}</p>
          {info.tc && <p className="mt-1 text-sm text-[var(--text-muted)]">{info.tc}</p>}
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="flex justify-between text-sm text-[var(--text-muted)]">
            <span>Net moment per site</span>
            <span className="font-mono font-bold text-[var(--foreground)]">{net.toFixed(2)}</span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-[var(--accent)] transition-all duration-700" style={{ width: `${Math.min(100, net * 100)}%` }} />
          </div>
          {hot && <p className="mt-3 text-sm font-semibold text-[var(--accent)]">Above T<sub>c</sub> thermal motion destroys the order: the solid behaves as a paramagnet.</p>}
        </div>
      </div>
    </div>
  );
}
