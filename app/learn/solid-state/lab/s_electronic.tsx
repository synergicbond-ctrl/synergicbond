"use client";

import { useMemo, useState } from "react";
import { C } from "./_geom";
import { Btn, Chapter, Derivation, Facts, KeyIdea, Narration, P, Rich, Slider, Tabs, Tex, Traps, Worked, useClock, useTween } from "./_ui";

const PANEL = { background: "radial-gradient(120% 90% at 50% 18%, #17433f 0%, #0c1f1e 52%, #060f0f 100%)" };
const KB = 8.617e-5;

const hash = (a: number, b: number) => {
  let h = (a * 374761393 + b * 668265263) | 0;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = h ^ (h >>> 16);
  return ((h >>> 0) % 100000) / 100000;
};

/* ------------------------------------------------------ band formation */

const NA_ = 10;

function bandData(d: number) {
  const f = Math.exp(-(d - 1) * 1.1);
  const bs = 0.42 * f;
  const bp = 0.75 * f;
  const s: number[] = [];
  const p: number[] = [];
  for (let k = 1; k <= NA_; k++) {
    s.push(-1 - 2 * bs * Math.cos((k * Math.PI) / (NA_ + 1)));
    p.push(1 - 2 * bp * Math.cos((k * Math.PI) / (NA_ + 1)));
  }
  return { s, p, sLo: -1 - 2 * bs, sHi: -1 + 2 * bs, pLo: 1 - 2 * bp, pHi: 1 + 2 * bp };
}

function BandFormation() {
  const [dist, setDist] = useState(4);
  const [z, setZ] = useState(1);
  const d = useTween(dist, 3);
  const b = bandData(d);
  const all = [...b.s.map((e) => ({ e, band: "s" })), ...b.p.map((e) => ({ e, band: "p" }))].sort((x, y) => x.e - y.e);
  const electrons = z * NA_;
  const occupied = new Set<number>();
  let left = electrons;
  all.forEach((lv, i) => {
    const put = Math.min(2, left);
    if (put > 0) occupied.add(i);
    left -= put;
  });
  const homo = all.findIndex((_, i) => !occupied.has(i)) - 1;
  const ef = homo >= 0 && homo + 1 < all.length ? (all[homo].e + all[homo + 1].e) / 2 : 0;
  const overlap = b.sHi > b.pLo;
  const gap = b.pLo - b.sHi;
  const isolated = d > 3.2;
  let state: string;
  let detail: string;
  if (isolated) {
    state = "Isolated atoms";
    detail = "Each atom has its own sharp levels. The ten atoms' levels coincide.";
  } else if (z === 1 || z === 3) {
    state = "Conductor";
    detail = z === 1 ? "The lower band is only half full, so electrons just below the Fermi level can move into empty states at once." : "The upper band is only half full: electrons can move freely.";
  } else if (overlap) {
    state = "Conductor (bands overlap)";
    detail = "The filled band and the empty band overlap in energy, so there are empty states immediately above the filled ones. This is how a divalent metal such as Mg conducts.";
  } else if (gap < 0.9) {
    state = "Semiconductor (small gap)";
    detail = "The lower band is full and the upper empty, with a small forbidden gap. Heat or light can lift a few electrons across.";
  } else {
    state = "Insulator (large gap)";
    detail = "The lower band is full and the gap to the empty band is too large for electrons to cross at ordinary temperatures.";
  }
  const Y = (e: number) => 150 - e * 42;
  const XL = 70;
  const XR = 360;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 300" role="img" aria-label="Energy levels of ten atoms broadening into bands as the atoms approach" className="w-full rounded-2xl border border-white/10" style={PANEL}>
          <line x1={46} x2={46} y1={16} y2={284} stroke="#fff" strokeOpacity={0.3} />
          <text x={14} y={150} fontSize={11} fill="#b8cbc7" transform="rotate(-90 14 150)" textAnchor="middle">energy</text>
          {!isolated && (
            <>
              <rect x={XL - 6} y={Y(b.sHi)} width={XR - XL + 12} height={Math.max(2, Y(b.sLo) - Y(b.sHi))} rx={6} fill={C.gold} fillOpacity={0.16} />
              <rect x={XL - 6} y={Y(b.pHi)} width={XR - XL + 12} height={Math.max(2, Y(b.pLo) - Y(b.pHi))} rx={6} fill={C.blue} fillOpacity={0.16} />
            </>
          )}
          {all.map((lv, i) => {
            const idx = lv.band === "s" ? b.s.indexOf(lv.e) : b.p.indexOf(lv.e);
            const x = XL + ((idx + 0.5) / NA_) * (XR - XL);
            const occ = occupied.has(i);
            return (
              <g key={i}>
                <line x1={x - 12} x2={x + 12} y1={Y(lv.e)} y2={Y(lv.e)} stroke={occ ? C.gold : "#ffffff"} strokeOpacity={occ ? 1 : 0.5} strokeWidth={3} strokeLinecap="round" />
                {occ && (
                  <>
                    <circle cx={x - 4} cy={Y(lv.e) - 5} r={2.6} fill="#ffe9a6" />
                    <circle cx={x + 4} cy={Y(lv.e) - 5} r={2.6} fill="#ffe9a6" />
                  </>
                )}
              </g>
            );
          })}
          {!isolated && electrons > 0 && <line x1={XL - 10} x2={XR + 10} y1={Y(ef)} y2={Y(ef)} stroke="#fff" strokeDasharray="4 4" strokeOpacity={0.8} />}
          {!isolated && <text x={XR + 16} y={Y(ef) + 4} fontSize={11} fill="#fff">Fermi level</text>}
          <text x={XR + 16} y={Y(-1) + 4} fontSize={11} fill="#f6d58a">s band</text>
          <text x={XR + 16} y={Y(1) + 4} fontSize={11} fill="#9cc8f5">p band</text>
          {!isolated && !overlap && <text x={(XL + XR) / 2} y={(Y(b.sHi) + Y(b.pLo)) / 2 + 4} fontSize={12} fill="#fff" textAnchor="middle">gap {gap.toFixed(2)}</text>}
        </svg>
        <Slider label="Distance between atoms" value={dist} onChange={setDist} min={1} max={4} step={0.01} show={dist > 3.2 ? "far apart" : dist < 1.4 ? "close (solid)" : "approaching"} />
        <div className="flex flex-wrap items-center gap-2">
          <Btn primary onClick={() => setDist(1)}>
            ▶ Bring the atoms together
          </Btn>
          <Btn onClick={() => setDist(4)}>Pull apart</Btn>
        </div>
      </div>
      <div className="space-y-4">
        <Tabs label="Electrons per atom" value={String(z)} onChange={(v) => setZ(Number(v))} items={[["1", "1 e⁻ per atom (like Na)"], ["2", "2 e⁻ per atom (like Mg)"], ["3", "3 e⁻ per atom"]] as const} />
        <Narration k={state}>
          <div className="font-bold">{state}</div>
          <div className="mt-1 text-[var(--text-muted)]">{detail}</div>
        </Narration>
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          This is a tight-binding model: for a chain of N atoms the N levels of each orbital are <Tex ex="E_k = \varepsilon - 2\beta\cos\!\left(\tfrac{k\pi}{N+1}\right)" />, k = 1 … N. The hopping energy β grows as the atoms approach, so the levels spread into a band of width 4β. Each level holds two electrons.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------- conductor, semi, insulator */

type Mat = { key: string; name: string; eg: number; kind: "metal" | "semi" | "ins"; note: string };
const MATS: Mat[] = [
  { key: "cu", name: "Copper (metal)", eg: 0, kind: "metal", note: "No gap; bands overlap or the band is part-filled." },
  { key: "ge", name: "Germanium", eg: 0.67, kind: "semi", note: "Small gap: absorbs infrared." },
  { key: "si", name: "Silicon", eg: 1.1, kind: "semi", note: "The workhorse of electronics." },
  { key: "dia", name: "Diamond", eg: 5.5, kind: "ins", note: "Gap larger than any visible photon: colourless and insulating." },
];

function sci(x: number) {
  if (x === 0) return "0";
  const e = Math.floor(Math.log10(x));
  return `${(x / 10 ** e).toFixed(1)} × 10${String(e).replace(/-/g, "⁻").replace(/\d/g, (c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(c)])}`;
}

function GapLab() {
  const [key, setKey] = useState("si");
  const [temp, setTemp] = useState(300);
  const time = useClock();
  const m = MATS.find((x) => x.key === key) ?? MATS[2];
  const frac = m.kind === "metal" ? 1 : Math.exp(-m.eg / (2 * KB * temp));
  const n = m.kind === "metal" ? 12 : Math.round(Math.max(0, Math.min(1, (Math.log10(frac) + 15) / 14)) * 14);
  const gapPx = m.kind === "metal" ? -26 : 20 + m.eg * 15;
  const top = 30;
  const bh = 74;
  const valY = top + bh + gapPx;
  const x0 = 40;
  const w = 250;
  const sigma = useMemo(() => {
    const pts: [number, number][] = [];
    for (let t = 100; t <= 1000; t += 20) {
      const rel = m.kind === "metal" ? 300 / t : Math.exp(-(m.eg / (2 * KB)) * (1 / t - 1 / 300));
      pts.push([t, Math.log10(rel)]);
    }
    return pts;
  }, [m]);
  const px = (t: number) => 372 + ((t - 100) / 900) * 168;
  const py = (v: number) => 170 - ((Math.max(-6, Math.min(7, v)) + 6) / 13) * 135;
  const path = sigma.map(([t, v], i) => `${i ? "L" : "M"}${px(t).toFixed(1)},${py(v).toFixed(1)}`).join(" ");
  const now = m.kind === "metal" ? Math.log10(300 / temp) : (-(m.eg / (2 * KB)) * (1 / temp - 1 / 300)) / Math.LN10;
  const jit = 2 + temp / 120;
  const lambda = m.eg > 0 ? 1239.84 / m.eg : 0;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 300" role="img" aria-label={`Band diagram of ${m.name} at ${temp} kelvin with its conductivity trend`} className="w-full rounded-2xl border border-white/10" style={PANEL}>
          <rect x={x0} y={top} width={w} height={bh} rx={7} fill={C.blue} fillOpacity={0.22} stroke={C.blue} />
          <rect x={x0} y={valY} width={w} height={bh} rx={7} fill={m.kind === "metal" ? C.blue : C.gold} fillOpacity={0.24} stroke={m.kind === "metal" ? C.blue : C.gold} />
          <text x={x0 + 10} y={top + 17} fontSize={11} fill="#cfe6f7">Conduction band</text>
          <text x={x0 + 10} y={valY + bh - 9} fontSize={11} fill="#f7e2b5">{m.kind === "metal" ? "Overlapping valence band" : "Valence band"}</text>
          {m.kind !== "metal" && (
            <g>
              <line x1={x0 + w + 14} x2={x0 + w + 14} y1={top + bh} y2={valY} stroke="#fff" strokeOpacity={0.7} />
              <text x={x0 + w + 20} y={(top + bh + valY) / 2 + 4} fontSize={12} fill="#fff" fontWeight={700}>Eg = {m.eg} eV</text>
            </g>
          )}
          {Array.from({ length: n }, (_, i) => {
            const bx = x0 + 18 + hash(i, 1) * (w - 36);
            const by = top + 14 + hash(i, 2) * (bh - 28);
            return <circle key={`e${i}`} cx={bx + Math.sin(time * (1.5 + hash(i, 3)) + i) * jit} cy={by + Math.cos(time * (1.3 + hash(i, 4)) + i * 2) * jit} r={4.6} fill="#7fe0ff" stroke="#06100f" strokeWidth={0.6} />;
          })}
          {m.kind !== "metal" &&
            Array.from({ length: n }, (_, i) => <circle key={`h${i}`} cx={x0 + 18 + hash(i, 7) * (w - 36) + Math.sin(time * 1.2 + i) * jit} cy={valY + 14 + hash(i, 8) * (bh - 28)} r={4.6} fill="none" stroke={C.gold} strokeWidth={2} />)}
          <text x={x0} y={valY + bh + 26} fontSize={11} fill="#b8cbc7">
            {m.kind === "metal" ? "Many free electrons at every temperature." : n === 0 ? "No thermally excited carriers: cannot conduct." : "Blue: electrons in the conduction band; hollow: holes in the valence band"}
          </text>
          <text x={372} y={22} fontSize={11} fontWeight={700} fill="#d8e7e4">σ(T) / σ(300 K)</text>
          <line x1={372} y1={30} x2={372} y2={172} stroke="#9bb8b3" />
          <line x1={372} y1={172} x2={546} y2={172} stroke="#9bb8b3" />
          <line x1={px(300)} y1={30} x2={px(300)} y2={172} stroke="#fff" strokeOpacity={0.15} strokeDasharray="3 4" />
          <path d={path} fill="none" stroke={m.kind === "metal" ? C.rose : C.blue} strokeWidth={2.6} />
          <circle cx={px(temp)} cy={py(now)} r={5.5} fill="#fff" stroke="#06100f" />
          <text x={372} y={188} fontSize={10} fill="#b8cbc7">100 K</text>
          <text x={546} y={188} fontSize={10} fill="#b8cbc7" textAnchor="end">1000 K</text>
          <text x={380} y={46} fontSize={10} fill="#b8cbc7">log scale, clipped to 10⁻⁶ … 10⁷</text>
          <text x={372} y={228} fontSize={11} fill="#d8e7e4">{m.kind === "metal" ? "Metal: σ falls as T rises" : "Semiconductor: σ rises as T rises"}</text>
          <text x={372} y={244} fontSize={10} fill="#b8cbc7">{m.kind === "metal" ? "(lattice vibrations scatter the electrons)" : "(more carriers cross the gap)"}</text>
        </svg>
        <Tabs label="Material" value={key} onChange={setKey} items={MATS.map((x) => [x.key, x.name] as const)} />
        <Slider label="Temperature" value={temp} onChange={setTemp} min={100} max={1000} step={10} show={`${temp} K`} />
      </div>
      <div className="space-y-4">
        <Narration k={`${key}`}>
          <div className="font-bold">{m.name}</div>
          <p className="mt-1 text-[var(--text-muted)]">{m.note}</p>
          {m.kind !== "metal" && (
            <p className="mt-2 text-[var(--text-muted)]">
              Fraction of electrons excited across the gap ∝ exp(−E<sub>g</sub>/2kT) = <span className="font-mono font-bold text-[var(--foreground)]">{sci(frac)}</span> at {temp} K.
            </p>
          )}
        </Narration>
        {m.kind !== "metal" && <Facts cols={2} items={[["Gap", `${m.eg} eV`], ["Shortest absorbed λ", `${lambda.toFixed(0)} nm`], ["Absorbs", lambda > 780 ? "infrared (opaque to eye)" : lambda > 380 ? "visible light" : "only ultraviolet (colourless)"], ["Class", m.kind === "semi" ? "semiconductor" : "insulator"]]} />}
        <KeyIdea title="Conductor against semiconductor">
          {"A **metal's** conductivity **falls** as it heats because lattice vibrations scatter the electrons. A **semiconductor's** conductivity **rises** as it heats because more electrons are promoted across the gap."}
        </KeyIdea>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ doping */

function DopingLab() {
  const [kind, setKind] = useState<"n" | "p" | "i">("n");
  const [temp, setTemp] = useState(300);
  const time = useClock();
  const f = 1 - Math.exp(-((temp / 100) ** 2));
  const intr = Math.max(0, Math.min(1, (temp - 450) / 200)) * 5;
  const nDon = Math.round(f * 7);
  const x0 = 322;
  const w = 210;
  const cb = 60;
  const vb = 210;
  const lattice = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) {
    const x = 40 + c * 58;
    const y = 52 + r * 58;
    const centre = r === 1 && c === 2;
    if (c < 4) lattice.push(<line key={`h${r}${c}`} x1={x} y1={y} x2={x + 58} y2={y} stroke="#fff" strokeOpacity={0.35} strokeWidth={2} />);
    if (r < 3) lattice.push(<line key={`v${r}${c}`} x1={x} y1={y} x2={x} y2={y + 58} stroke="#fff" strokeOpacity={0.35} strokeWidth={2} />);
    lattice.push(
      <g key={`a${r}${c}`}>
        <circle cx={x} cy={y} r={centre && kind !== "i" ? 15 : 12} fill={centre && kind === "n" ? C.violet : centre && kind === "p" ? C.rose : "#8aa0aa"} stroke="#06100f" />
        {centre && kind !== "i" && (
          <text x={x} y={y} textAnchor="middle" dy="0.35em" fontSize={10} fontWeight={800} fill="#06100f">
            {kind === "n" ? "P" : "B"}
          </text>
        )}
      </g>,
    );
  }
  const wander = (i: number, amp: number) => ({ x: Math.sin(time * (0.9 + hash(i, 1)) + i) * amp, y: Math.cos(time * (0.8 + hash(i, 2)) + i * 2) * amp });
  const eFree = kind === "n" ? f : 0;
  const ew = wander(1, 14 + 60 * eFree);
  const holeSite = Math.floor((time * (0.6 + 1.6 * f)) % 5);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 300" role="img" aria-label="Doped silicon lattice and its energy bands" className="w-full rounded-2xl border border-white/10" style={PANEL}>
          {lattice}
          {kind === "n" && <circle cx={156 + ew.x} cy={110 + ew.y} r={5.5} fill="#7fe0ff" stroke="#06100f" />}
          {kind === "p" && (f > 0.2 ? <circle cx={40 + holeSite * 58} cy={110} r={7} fill="none" stroke={C.gold} strokeWidth={2.4} /> : <circle cx={156} cy={110 + 18} r={7} fill="none" stroke={C.gold} strokeWidth={2.4} />)}
          <text x={40} y={22} fontSize={12} fontWeight={700} fill="#d8e7e4">{kind === "n" ? "Silicon doped with phosphorus (group 15)" : kind === "p" ? "Silicon doped with boron (group 13)" : "Pure silicon"}</text>
          <text x={40} y={288} fontSize={11} fill="#b8cbc7">{kind === "n" ? "Fifth electron is loosely held and wanders off" : kind === "p" ? "The missing electron is a hole neighbours fill" : "Every valence electron sits in a bond"}</text>
          <rect x={x0} y={cb - 28} width={w} height={34} rx={5} fill={C.blue} fillOpacity={0.24} stroke={C.blue} />
          <rect x={x0} y={vb} width={w} height={34} rx={5} fill={C.gold} fillOpacity={0.26} stroke={C.gold} />
          <text x={x0 + w - 8} y={cb - 34} fontSize={10} fill="#cfe6f7" textAnchor="end">conduction band</text>
          <text x={x0 + w - 8} y={vb + 48} fontSize={10} fill="#f7e2b5" textAnchor="end">valence band</text>
          {kind === "n" && (
            <>
              <line x1={x0 + 30} x2={x0 + w - 30} y1={cb + 28} y2={cb + 28} stroke={C.violet} strokeWidth={3} strokeDasharray="6 4" />
              <text x={x0 + w - 24} y={cb + 24} fontSize={10} fill="#cdbdf5" textAnchor="end">donor level</text>
              {Array.from({ length: 7 }, (_, i) => {
                const up = i < nDon;
                const bx = x0 + 28 + (i / 6) * (w - 56);
                const by = up ? cb - 14 + Math.sin(time * 2 + i) * 4 : cb + 28 - 7;
                return <circle key={i} cx={bx} cy={by} r={4.4} fill="#7fe0ff" stroke="#06100f" strokeWidth={0.6} style={{ transition: "cy .5s" }} />;
              })}
            </>
          )}
          {kind === "p" && (
            <>
              <line x1={x0 + 30} x2={x0 + w - 30} y1={vb - 28} y2={vb - 28} stroke={C.rose} strokeWidth={3} strokeDasharray="6 4" />
              <text x={x0 + w - 24} y={vb - 34} fontSize={10} fill="#f5b5c1" textAnchor="end">acceptor level</text>
              {Array.from({ length: 7 }, (_, i) => {
                const dn = i < nDon;
                const bx = x0 + 28 + (i / 6) * (w - 56);
                const by = dn ? vb + 17 + Math.sin(time * 2 + i) * 3 : vb - 28 + 7;
                return <circle key={i} cx={bx} cy={by} r={4.4} fill="none" stroke={C.gold} strokeWidth={2} />;
              })}
            </>
          )}
          {Array.from({ length: Math.round(intr) }, (_, i) => (
            <g key={`int${i}`}>
              <circle cx={x0 + 20 + hash(i, 5) * (w - 40) + Math.sin(time + i) * 3} cy={cb - 14 + Math.cos(time * 1.4 + i) * 4} r={4.2} fill="#7fe0ff" stroke="#06100f" strokeWidth={0.5} />
              <circle cx={x0 + 20 + hash(i, 6) * (w - 40)} cy={vb + 17} r={4.2} fill="none" stroke={C.gold} strokeWidth={2} />
            </g>
          ))}
          <text x={x0} y={282} fontSize={10} fill="#b8cbc7">{kind === "n" ? "donor ≈ 0.045 eV below the conduction band" : kind === "p" ? "acceptor ≈ 0.045 eV above the valence band" : "carriers only from thermal excitation"}</text>
        </svg>
        <Tabs label="Silicon type" value={kind} onChange={setKind} items={[["i", "Intrinsic"], ["n", "n-type (donor)"], ["p", "p-type (acceptor)"]] as const} />
        <Slider label="Temperature (schematic)" value={temp} onChange={setTemp} min={20} max={700} step={5} show={`${temp} K`} />
      </div>
      <div className="space-y-4">
        <Narration k={kind}>
          {kind === "i" && <Rich text="**Intrinsic semiconductor.** Pure silicon has as many electrons in the conduction band as holes in the valence band, and very few of either at room temperature." />}
          {kind === "n" && <Rich text="**n-type.** Replace a few silicon atoms (4 valence electrons) by phosphorus or arsenic (5). The extra electron sits just below the conduction band and is freed by a little heat. Majority carriers: **electrons** (negative)." />}
          {kind === "p" && <Rich text="**p-type.** Replace a few silicon atoms by boron, aluminium or gallium (3 valence electrons). Each leaves a missing bond: a **hole**. A neighbouring electron fills it, so the hole appears to hop the other way. Majority carriers: **holes** (positive)." />}
        </Narration>
        <Facts cols={2} items={[["Dopant group", kind === "n" ? "15 (P, As, Sb)" : kind === "p" ? "13 (B, Al, Ga)" : "none"], ["Majority carrier", kind === "n" ? "electrons" : kind === "p" ? "holes" : "electrons = holes"], ["Whole crystal", "electrically neutral"], ["High temperature", "intrinsic carriers take over"]]} />
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          Doping with one atom in about 10⁶ raises the conductivity of silicon by a factor of order 10⁶. Compound semiconductors mix group 13 with 15 (GaAs, InP) or group 12 with 16 (ZnS, CdS, CdSe).
        </p>
      </div>
    </div>
  );
}

/* --------------------------------------------------------- p–n junction */

function PNJunction() {
  const [v, setV] = useState(0);
  const V = useTween(v, 3);
  const time = useClock();
  const vbi = 0.7;
  const w = 78 * Math.sqrt(Math.max(0.02, (vbi - Math.min(V, vbi - 0.02)) / vbi));
  const jx = 280;
  const left = jx - w / 2;
  const right = jx + w / 2;
  const cur = V > 0 ? Math.min(1, (Math.exp(V / 0.12) - 1) / 120) : 0;
  const speed = 18 + cur * 190;
  const holes = [];
  const elecs = [];
  for (let i = 0; i < 14; i++) {
    const L = Math.max(40, left - 20);
    const x = 20 + ((hash(i, 1) * L + (V > 0 ? time * speed : 0)) % L);
    holes.push(<circle key={`h${i}`} cx={x} cy={70 + hash(i, 2) * 120 + Math.sin(time * 2 + i) * 3} r={5.5} fill="none" stroke={C.gold} strokeWidth={2.2} />);
    const L2 = Math.max(40, 540 - right - 0);
    const xe = 540 - ((hash(i, 3) * L2 + (V > 0 ? time * speed : 0)) % L2);
    elecs.push(<circle key={`e${i}`} cx={Math.max(xe, right + 8)} cy={70 + hash(i, 4) * 120 + Math.cos(time * 2 + i) * 3} r={5} fill="#7fe0ff" stroke="#06100f" strokeWidth={0.6} />);
  }
  const ions = [];
  for (let k = 0; k < 5; k++) {
    const y = 78 + k * 28;
    ions.push(
      <text key={`a${k}`} x={left + w * 0.28} y={y} textAnchor="middle" fontSize={14} fontWeight={800} fill="#f08fa0">−</text>,
      <text key={`d${k}`} x={right - w * 0.28} y={y} textAnchor="middle" fontSize={14} fontWeight={800} fill="#ffd48a">+</text>,
    );
  }
  const ivCur = (vv: number) => (vv > 0 ? Math.min(1.2, (Math.exp(vv / 0.12) - 1) / 120) : -0.03 * (1 - Math.exp(vv * 4)));
  const ivX = (vv: number) => 380 + ((vv + 2) / 2.8) * 160;
  const ivY = (ii: number) => 338 - ((ii + 0.1) / 1.3) * 74;
  const iv: string[] = [];
  for (let k = 0; k <= 60; k++) {
    const vv = -2 + (k / 60) * 2.8;
    iv.push(`${k ? "L" : "M"}${ivX(vv).toFixed(1)},${ivY(ivCur(vv)).toFixed(1)}`);
  }
  const ivx = ivX(V);
  const ivy = ivY(ivCur(V));
  const mode = V > 0.05 ? "forward" : V < -0.05 ? "reverse" : "zero";

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 370" role="img" aria-label="p-n junction with a depletion region that widens or narrows with applied voltage" className="w-full rounded-2xl border border-white/10" style={PANEL}>
          <rect x={20} y={46} width={left - 20} height={160} fill={C.rose} fillOpacity={0.08} />
          <rect x={right} y={46} width={540 - right} height={160} fill={C.blue} fillOpacity={0.09} />
          <rect x={left} y={46} width={w} height={160} fill="#ffffff" fillOpacity={0.07} stroke="#fff" strokeOpacity={0.3} strokeDasharray="4 4" />
          <text x={40} y={38} fontSize={13} fontWeight={800} fill="#f6a0b0">p-type</text>
          <text x={500} y={38} fontSize={13} fontWeight={800} fill="#8fd0ff" textAnchor="end">n-type</text>
          {holes}
          {elecs}
          {ions}
          <text x={jx} y={222} fontSize={11} fill="#d8e7e4" textAnchor="middle">depletion layer, width {(w * 2.2).toFixed(0)} nm</text>
          {V < 0.65 && <path d={`M${right - 8} 196 H${left + 8} M${left + 16} 191 L${left + 8} 196 L${left + 16} 201`} stroke="#ffd37a" strokeWidth={2} fill="none" />}
          {V < 0.65 && <text x={jx} y={186} fontSize={10} fill="#ffd37a" textAnchor="middle">built-in field</text>}
          <line x1={380} y1={254} x2={380} y2={346} stroke="#9bb8b3" />
          <line x1={380} y1={338} x2={540} y2={338} stroke="#9bb8b3" />
          <line x1={ivX(0)} y1={254} x2={ivX(0)} y2={338} stroke="#fff" strokeOpacity={0.15} strokeDasharray="3 4" />
          <path d={iv.join(" ")} fill="none" stroke={C.green} strokeWidth={2.4} />
          <circle cx={ivx} cy={ivy} r={5.5} fill="#fff" stroke="#06100f" />
          <text x={386} y={262} fontSize={10} fill="#b8cbc7">current</text>
          <text x={540} y={358} fontSize={10} fill="#b8cbc7" textAnchor="end">voltage</text>
          <text x={40} y={300} fontSize={12} fontWeight={700} fill="#d8e7e4">Diode I–V curve</text>
          <text x={40} y={320} fontSize={11} fill="#b8cbc7">{mode === "forward" ? "forward: current rises steeply" : mode === "reverse" ? "reverse: only a leakage current" : "no bias: the barrier blocks net flow"}</text>
        </svg>
        <Slider label="Applied voltage (+ = p side positive)" value={v} onChange={setV} min={-2} max={0.8} step={0.01} show={`${v.toFixed(2)} V`} />
        <div className="flex flex-wrap gap-2">
          <Btn onClick={() => setV(-1.5)}>Reverse bias</Btn>
          <Btn onClick={() => setV(0)}>No bias</Btn>
          <Btn primary onClick={() => setV(0.75)}>
            Forward bias
          </Btn>
        </div>
      </div>
      <div className="space-y-4">
        <Narration k={mode}>
          {mode === "zero" && <Rich text="**No bias.** Holes from the p side and electrons from the n side diffuse across and annihilate near the junction. They leave behind fixed ions: negative acceptors on the p side, positive donors on the n side. These build an electric field that stops further diffusion. The carrier-free zone is the **depletion layer**." />}
          {mode === "forward" && <Rich text="**Forward bias.** The battery pushes holes and electrons toward the junction. The depletion layer **narrows**, the barrier drops, and carriers cross and recombine: a large current flows." />}
          {mode === "reverse" && <Rich text="**Reverse bias.** The battery pulls carriers away from the junction. The depletion layer **widens**, the barrier grows, and only a tiny leakage current flows." />}
        </Narration>
        <Facts cols={2} items={[["Depletion layer", mode === "forward" ? "narrower" : mode === "reverse" ? "wider" : "equilibrium width"], ["Current", mode === "forward" ? "large" : "≈ 0 (leakage)"], ["Acts as", "one-way valve"], ["Uses", "rectifier, LED, solar cell"]]} />
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          The curve shows why a p-n junction is a <strong className="text-[var(--foreground)]">rectifier</strong>: it conducts in one direction only. In an LED, electrons and holes recombine under forward bias and release the gap energy as light; a solar cell runs the process backwards.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------- superconductors */

const SC = [
  { key: "hg", name: "Mercury", tc: 4.2 },
  { key: "pb", name: "Lead", tc: 7.2 },
  { key: "nb3sn", name: "Nb₃Sn", tc: 18 },
  { key: "ybco", name: "YBa₂Cu₃O₇", tc: 92 },
] as const;

function Meissner() {
  const [key, setKey] = useState<string>("pb");
  const [frac, setFrac] = useState(1.6);
  const mat = SC.find((m) => m.key === key) ?? SC[1];
  const tc = mat.tc;
  const T = frac * tc;
  const lam = useTween(T < tc ? 1 : 0, 3.2);
  const rN = (t: number) => 0.2 + 0.8 * (t / (2 * tc));
  const rel = T < tc ? 0 : rN(T);
  const Rr = 1;
  const cx = 160;
  const cy = 150;
  const sc = 46;
  const lines = [];
  for (let k = -6; k <= 6; k++) {
    const y0 = k * 0.42;
    if (y0 === 0) continue;
    const pts: string[] = [];
    for (let i = 0; i <= 90; i++) {
      const x = -2.9 + (i / 90) * 5.8;
      const rmin = Math.sqrt(Math.max(0, Rr * Rr - x * x));
      let lo = lam > 0 ? rmin : 0;
      let hi = 8;
      const f = (rho: number) => rho * rho * (1 - (lam * Rr ** 3) / Math.pow(x * x + rho * rho, 1.5)) - y0 * y0;
      for (let it = 0; it < 30; it++) {
        const mid = (lo + hi) / 2;
        if (f(mid) > 0) hi = mid;
        else lo = mid;
      }
      const rho = (lo + hi) / 2;
      const yy = Math.sign(y0) * rho;
      pts.push(`${i ? "L" : "M"}${(cx + x * sc).toFixed(1)},${(cy - yy * sc).toFixed(1)}`);
    }
    lines.push(<path key={k} d={pts.join(" ")} fill="none" stroke="#6fd0ff" strokeWidth={1.8} strokeOpacity={0.85} />);
  }
  const px = (t: number) => 372 + (t / (2 * tc)) * 168;
  const py = (r: number) => 190 - r * 130;
  const curve: string[] = [];
  for (let k = 0; k <= 80; k++) {
    const t = (k / 80) * 2 * tc;
    curve.push(`${k ? "L" : "M"}${px(t).toFixed(1)},${py(t < tc ? 0 : rN(t)).toFixed(1)}`);
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 300" role="img" aria-label="Magnetic field lines passing through a metal above its critical temperature and being expelled below it, with the resistance curve" className="w-full rounded-2xl border border-white/10" style={PANEL}>
          {lines}
          <circle cx={cx} cy={cy} r={Rr * sc} fill={T < tc ? C.blue : "#8aa0aa"} fillOpacity={T < tc ? 0.55 : 0.4} stroke={T < tc ? "#9cd0ff" : "#b7c6cc"} strokeWidth={2} style={{ transition: "fill .5s" }} />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize={12} fontWeight={800} fill="#fff">{T < tc ? "superconducting" : "normal metal"}</text>
          <text x={20} y={24} fontSize={11} fill="#b8cbc7">Applied magnetic field (left to right)</text>
          <line x1={372} y1={50} x2={372} y2={192} stroke="#9bb8b3" />
          <line x1={372} y1={190} x2={546} y2={190} stroke="#9bb8b3" />
          <path d={curve.join(" ")} fill="none" stroke={C.rose} strokeWidth={2.6} />
          <line x1={px(tc)} y1={50} x2={px(tc)} y2={190} stroke="#fff" strokeOpacity={0.3} strokeDasharray="3 4" />
          <text x={px(tc)} y={44} fontSize={11} fill="#fff" textAnchor="middle">T<tspan baselineShift="sub" fontSize={8}>c</tspan> = {tc} K</text>
          <circle cx={px(T)} cy={py(rel)} r={6} fill="#fff" stroke="#06100f" />
          <text x={372} y={206} fontSize={10} fill="#b8cbc7">0 K</text>
          <text x={546} y={206} fontSize={10} fill="#b8cbc7" textAnchor="end">{(2 * tc).toFixed(0)} K</text>
          <text x={380} y={66} fontSize={10} fill="#b8cbc7">resistance R(T)</text>
          <text x={372} y={236} fontSize={12} fontWeight={700} fill="#d8e7e4">{T < tc ? "R = 0 exactly; field expelled" : "R > 0; field passes through"}</text>
        </svg>
        <Tabs label="Superconductor" value={key} onChange={(k) => { setKey(k); }} items={SC.map((m) => [m.key, `${m.name} (${m.tc} K)`] as const)} />
        <Slider label="Temperature" value={frac} onChange={setFrac} min={0.05} max={2} step={0.01} show={`${T.toFixed(1)} K`} />
      </div>
      <div className="space-y-4">
        <Narration k={T < tc ? "sc" : "n"}>
          {T < tc ? (
            <Rich text="**Below the critical temperature the metal is a superconductor.** Resistance drops to exactly zero, and the material expels the magnetic field from its interior (the **Meissner effect**): it is a perfect diamagnet, χ = −1. Field lines are forced around it." />
          ) : (
            <Rich text="**Above the critical temperature** the material is an ordinary metal. Its resistance decreases as it cools but never vanishes, and the magnetic field passes straight through." />
          )}
        </Narration>
        <Facts cols={2} items={[["Zero resistance", "below Tc"], ["Meissner effect", "field expelled"], ["Susceptibility", "χ = −1"], ["Liquid nitrogen (77 K)", tc > 77 ? "cools it enough" : "too warm"]]} />
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          Below T<sub>c</sub> electrons pair up (Cooper pairs) and move through the lattice without scattering. Superconductors work in MRI magnets, maglev trains and particle accelerators. Ceramic oxides such as YBa₂Cu₃O₇ (92 K) work above the boiling point of liquid nitrogen.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- chapter */

export function ElectronicChapter() {
  return (
    <Chapter id="electronic" n="PART 6" title="Electrical properties of solids" lead="Why does copper conduct, diamond insulate and silicon do both under the right conditions? The answer is bands: what happens to atomic energy levels when N atoms come together.">
      <h3 className="text-2xl font-bold text-[var(--foreground)]">From atoms to bands</h3>
      <P t="In molecular orbital theory two atomic orbitals combine to make two molecular orbitals. **N** atoms make **N** molecular orbitals, spaced so closely that they form a nearly continuous **band**. Each band is separated from the next by a forbidden **gap**. Which bands are filled decides whether the solid conducts." />
      <BandFormation />
      <div className="grid gap-3 md:grid-cols-3">
        {[
          ["Conductor", "A partly filled band, or filled and empty bands that overlap. Electrons just below the Fermi level can move into empty states with almost no energy.", "Cu, Ag, Na, Mg"],
          ["Semiconductor", "A filled valence band, an empty conduction band, and a small gap (about 0.5–3 eV). Heat, light or doping supplies carriers.", "Si 1.1 eV, Ge 0.67 eV"],
          ["Insulator", "A filled valence band and a large gap (greater than about 3 eV). No carriers at ordinary temperatures.", "Diamond 5.5 eV, SiO₂"],
        ].map(([t, d, e]) => (
          <div key={t} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
            <div className="text-lg font-black text-[var(--accent)]">{t}</div>
            <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">{d}</p>
            <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{e}</p>
          </div>
        ))}
      </div>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Temperature and the gap</h3>
      <GapLab />
      <Derivation
        no="6.1"
        title="Why conductivity of a semiconductor grows as exp(−Eg / 2kT)"
        given="An intrinsic semiconductor with band gap $E_g$ at temperature $T$."
        find="How the carrier density, and hence the conductivity, depends on $T$."
        steps={[
          { say: "In a pure semiconductor the Fermi level sits in the middle of the gap, so the conduction band edge is $E_g/2$ above it." },
          { say: "The probability that a state at energy $E$ above the Fermi level is occupied falls as a Boltzmann factor $e^{-E/kT}$. For states at the bottom of the conduction band:", tex: "n \\propto \\exp\\!\\left(-\\frac{E_g/2}{kT}\\right)" },
          { say: "Each electron promoted leaves a hole, so electrons and holes are equal in number:", tex: "n = p = n_i \\propto \\exp\\!\\left(-\\frac{E_g}{2kT}\\right)" },
          { say: "Conductivity is proportional to the number of carriers, so it grows by the same exponential factor as the temperature rises:", tex: "\\sigma \\propto n_i" },
        ]}
        result="\sigma \propto e^{-E_g/2kT}"
      />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Doping: extrinsic semiconductors</h3>
      <P t="Pure silicon conducts poorly. Adding a trace of another element, **doping**, changes that dramatically. A group 15 atom brings one electron more than silicon needs (**n-type**); a group 13 atom brings one less, creating a hole (**p-type**). Both are **extrinsic** semiconductors." />
      <DopingLab />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">The p–n junction</h3>
      <P t="Join a p-type and an n-type crystal and you have a **diode**. Electrons from the n side and holes from the p side cross the boundary and annihilate, leaving a charged, carrier-free **depletion layer** that acts as a barrier. A voltage applied across it opens or closes the gate." />
      <PNJunction />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Superconductors</h3>
      <P t="Some materials lose all electrical resistance below a **critical temperature**, written $T_c$. Dutch physicist Kamerlingh Onnes found it in mercury at 4.2 K in 1911. A superconductor also expels magnetic fields from its interior, the **Meissner effect**." />
      <Meissner />

      <div className="grid gap-4 md:grid-cols-2">
        <Traps
          items={[
            "**Metal:** σ **decreases** on heating. **Semiconductor:** σ **increases** on heating.",
            "An n-type or p-type crystal is **electrically neutral**: the donor atom's extra electron is balanced by an extra proton in the dopant's nucleus.",
            "A **hole** is the absence of an electron in the valence band, not a particle. It behaves as a positive carrier.",
            "n-type: group **15** dopant (P, As); p-type: group **13** dopant (B, Al, Ga). Compound semiconductors: 13–15 (GaAs) and 12–16 (ZnS, CdS).",
            "In a **forward-biased** diode the depletion layer **narrows**; in **reverse** it **widens**.",
          ]}
        />
        <Worked
          q="Germanium has a band gap of 0.67 eV. What is the longest wavelength of light that can lift an electron across it? Is diamond (5.5 eV) coloured?"
          steps={["$\\lambda = \\dfrac{hc}{E} = \\dfrac{1240\\ \\text{eV nm}}{0.67\\ \\text{eV}} = 1851$ nm: infrared.", "Diamond: $\\lambda = \\dfrac{1240}{5.5} = 225$ nm: ultraviolet.", "Visible photons (about 1.8–3.1 eV) have too little energy to cross the 5.5 eV gap, so diamond absorbs none of them and is colourless."]}
          answer="Ge: 1851 nm (infrared); diamond: absorbs only below 225 nm, so it is transparent and colourless"
        />
        <Worked
          q="By what factor does the number of carriers in pure silicon (Eg = 1.1 eV) rise when it warms from 300 K to 330 K? (Ignore the weak T³ᐟ² prefactor.)"
          steps={["$\\dfrac{n_2}{n_1} = \\exp\\!\\left[\\dfrac{E_g}{2k}\\left(\\dfrac1{T_1}-\\dfrac1{T_2}\\right)\\right]$.", "$\\dfrac{E_g}{2k} = \\dfrac{1.1}{2\\times8.617\\times10^{-5}} = 6383$ K.", "$\\dfrac1{300}-\\dfrac1{330} = 3.03\\times10^{-4}$, so the exponent is $6383\\times3.03\\times10^{-4} = 1.93$.", "$e^{1.93} = 6.9$."]}
          answer="About 7 times more carriers for a 30 K rise"
        />
        <Worked
          q="Silicon is doped with arsenic. Which type of semiconductor results and what carries the current? Which dopant would give the opposite type?"
          steps={["Arsenic is in group 15: five valence electrons against silicon's four.", "Four bond with neighbours; the fifth is nearly free: electrons are the majority carriers.", "Boron or gallium (group 13) leave a hole, giving p-type."]}
          answer="n-type, conducting by electrons; boron, aluminium or gallium give p-type"
        />
      </div>
    </Chapter>
  );
}
