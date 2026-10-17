"use client";

import { useEffect, useState } from "react";
import { C } from "./_geom";
import { Btn, Chapter, Derivation, Facts, KeyIdea, Narration, P, Rich, Slider, Tabs, Tex, Traps, Worked, useClock, useTween } from "./_ui";

const PANEL = { background: "radial-gradient(120% 90% at 50% 18%, #17433f 0%, #0c1f1e 52%, #060f0f 100%)" };

/* ----------------------------------------------------- point defects */

type DMode = "perfect" | "schottky" | "frenkel" | "fcentre" | "interstitial" | "deficiency" | "impurity";

const COLS = 8;
const ROWS = 5;
const SP = 58;
const OX = 56;
const OY = 66;
const isCat = (c: number, r: number) => (c + r) % 2 === 0;
const at = (c: number, r: number): [number, number] => [OX + c * SP, OY + r * SP];

const SCHOTTKY: [[number, number], [number, number]][] = [
  [[2, 2], [3, 2]],
  [[6, 1], [5, 1]],
  [[1, 4], [0, 4]],
  [[4, 0], [5, 0]],
  [[7, 3], [6, 3]],
];

const INFO: Record<DMode, { title: string; tag: string; density: string; bullets: string[]; eg: string }> = {
  perfect: { title: "A perfect ionic crystal", tag: "—", density: "reference", bullets: ["Every lattice site is occupied.", "Cation : anion ratio equals the formula ratio.", "No real crystal above 0 K is perfect: defects always form because they raise entropy."], eg: "—" },
  schottky: { title: "Schottky defect: a missing cation–anion pair", tag: "Stoichiometric", density: "decreases", bullets: ["Equal numbers of cations and anions are missing, so the crystal stays neutral and keeps its formula.", "The ions end up on the surface, so the volume grows while the mass does not: density falls.", "Favoured when cations and anions are similar in size and coordination is high.", "More pairs form as temperature rises."], eg: "NaCl, KCl, CsCl, AgBr" },
  frenkel: { title: "Frenkel defect: an ion moves to an interstitial site", tag: "Stoichiometric", density: "unchanged", bullets: ["The smaller ion (usually the cation) leaves its site and squeezes into a void, leaving a vacancy behind.", "No ion leaves the crystal, so density and stoichiometry are unchanged.", "Favoured when the cation is much smaller than the anion and coordination is low.", "AgBr shows both Schottky and Frenkel defects."], eg: "ZnS, AgCl, AgBr, AgI" },
  fcentre: { title: "Metal excess: anion vacancies and F-centres", tag: "Non-stoichiometric (metal excess)", density: "slightly lower", bullets: ["Heat NaCl in sodium vapour: Na atoms deposit and Cl⁻ ions leave their sites to bond with them.", "Each Na atom ionises; the electron it releases is trapped in the vacant anion site: an F-centre.", "The trapped electron absorbs visible light, so the crystal is coloured: NaCl yellow, KCl violet, LiCl pink.", "The crystal is paramagnetic because of the unpaired trapped electron."], eg: "NaCl, KCl, LiCl" },
  interstitial: { title: "Metal excess: extra cations in interstitial sites", tag: "Non-stoichiometric (metal excess)", density: "increases", bullets: ["Zinc oxide loses oxygen on heating: ZnO → Zn²⁺ + ½O₂ + 2e⁻.", "The extra Zn²⁺ ions occupy interstitial sites and the electrons sit nearby, so the formula becomes Zn₁₊ₓO.", "ZnO turns yellow when hot and white again on cooling.", "The free electrons make it an n-type semiconductor."], eg: "ZnO, CdO" },
  deficiency: { title: "Metal deficiency: missing cations", tag: "Non-stoichiometric (metal deficiency)", density: "lower", bullets: ["A cation site is empty, but charge must still balance.", "Neighbouring cations rise to a higher oxidation state: in FeO, three Fe²⁺ ions are replaced by two Fe³⁺ ions plus one vacancy.", "The formula is therefore Fe₀.₉₅O, not FeO.", "Hopping of electrons between Fe²⁺ and Fe³⁺ makes it a p-type semiconductor."], eg: "FeO (Fe₀.₉₃O to Fe₀.₉₆O), NiO, FeS" },
  impurity: { title: "Impurity defect: a higher-valent ion replaces a host ion", tag: "Doping", density: "≈ unchanged", bullets: ["Add a little SrCl₂ to NaCl: one Sr²⁺ takes a Na⁺ site, and a second Na⁺ site is left vacant to keep neutrality.", "Every Sr²⁺ added creates one cation vacancy, independent of temperature.", "The vacancies let ions move, so conductivity rises.", "Same idea: CdCl₂ in AgCl; and in semiconductors, B or P in Si."], eg: "NaCl + SrCl₂, AgCl + CdCl₂" },
};

function DefectLab() {
  const [mode, setMode] = useState<DMode>("schottky");
  const [pairs, setPairs] = useState(2);
  const info = INFO[mode];
  const time = useClock();

  const removed = new Set<string>();
  const ghosts: { key: string; from: [number, number]; cat: boolean }[] = [];
  let moved: [number, number] | null = null;
  let extra: [number, number] | null = null;
  let electron: [number, number] | null = null;
  const recolor = new Map<string, { fill: string; label: string; r: number }>();

  if (mode === "schottky")
    SCHOTTKY.slice(0, pairs).forEach(([cat, an]) => {
      removed.add(cat.join(","));
      removed.add(an.join(","));
      ghosts.push({ key: cat.join(","), from: at(...cat), cat: true }, { key: an.join(","), from: at(...an), cat: false });
    });
  if (mode === "frenkel") {
    removed.add("4,2");
    moved = [4.5, 2.5];
  }
  if (mode === "fcentre") {
    removed.add("3,2");
    electron = at(3, 2);
  }
  if (mode === "interstitial") {
    extra = at(3.5, 1.5);
    electron = at(3.5, 2.5);
  }
  if (mode === "deficiency") {
    removed.add("3,1");
    recolor.set("2,2", { fill: C.violet, label: "3+", r: 15 });
    recolor.set("4,2", { fill: C.violet, label: "3+", r: 15 });
  }
  if (mode === "impurity") {
    recolor.set("4,2", { fill: C.violet, label: "2+", r: 17 });
    removed.add("5,3");
  }

  const ions = [];
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++) {
      const key = `${c},${r}`;
      const cat = isCat(c, r);
      let [x, y] = at(c, r);
      let op = 1;
      if (removed.has(key)) op = 0;
      if (moved && key === "4,2") {
        [x, y] = at(...moved);
        op = 1;
      }
      const rc = recolor.get(key);
      const fill = rc ? rc.fill : cat ? C.gold : C.teal;
      const rad = rc ? rc.r : cat ? 14 : 20;
      ions.push(
        <g key={key} style={{ transform: `translate(${x}px, ${y}px)`, transition: "transform .9s cubic-bezier(.3,.7,.2,1), opacity .7s" }} opacity={op}>
          <circle r={rad} fill={`url(#g-${fill.slice(1)})`} stroke="#06100f" strokeWidth={1.2} />
          <text textAnchor="middle" dy="0.35em" fontSize={cat ? 13 : 16} fontWeight={800} fill="#06100f">
            {rc ? rc.label : cat ? "+" : "−"}
          </text>
        </g>,
      );
    }

  const gradFills = [C.gold, C.teal, C.violet];
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 380" role="img" aria-label={`Two-dimensional ionic lattice: ${info.title}`} className="w-full rounded-2xl border border-white/10" style={PANEL}>
          <defs>
            {gradFills.map((f) => (
              <radialGradient key={f} id={`g-${f.slice(1)}`} cx="35%" cy="30%" r="80%">
                <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
                <stop offset="0.35" stopColor={f} />
                <stop offset="1" stopColor={f} stopOpacity="0.8" />
              </radialGradient>
            ))}
            <radialGradient id="g-e" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#fff7c0" />
              <stop offset="1" stopColor="#ffd23f" />
            </radialGradient>
          </defs>
          {[...removed].map((k) => {
            const [c, r] = k.split(",").map(Number);
            const [x, y] = at(c, r);
            return <circle key={`v-${k}`} cx={x} cy={y} r={isCat(c, r) ? 14 : 20} fill="none" stroke="#fff" strokeOpacity={0.75} strokeWidth={1.6} strokeDasharray="4 4" />;
          })}
          {mode === "frenkel" && <circle cx={at(4.5, 2.5)[0]} cy={at(4.5, 2.5)[1]} r={15} fill="none" stroke="#fff" strokeOpacity={0.3} strokeDasharray="2 4" />}
          {ions}
          {extra && (
            <g className="ss-rise">
              <circle cx={extra[0]} cy={extra[1]} r={12} fill={`url(#g-${C.gold.slice(1)})`} stroke="#06100f" />
              <text x={extra[0]} y={extra[1]} textAnchor="middle" dy="0.35em" fontSize={11} fontWeight={800} fill="#06100f">+</text>
            </g>
          )}
          {electron && (
            <circle cx={electron[0] + Math.sin(time * 3) * 3} cy={electron[1] + Math.cos(time * 3.4) * 3} r={7} fill="url(#g-e)">
              <animate attributeName="opacity" values="1;0.5;1" dur="1.6s" repeatCount="indefinite" />
            </circle>
          )}
          {ghosts.map((g) => (
            <circle key={`gh-${g.key}`} cx={g.from[0]} cy={34} r={g.cat ? 9 : 12} fill={g.cat ? C.gold : C.teal} opacity={0.8}>
              <animate attributeName="cy" from={g.from[1]} to={30} dur="1.1s" fill="freeze" />
            </circle>
          ))}
          {mode === "schottky" && <text x={20} y={20} fontSize={11} fill="#b8cbc7">Missing ions end up on the crystal surface</text>}
        </svg>
        <Tabs
          label="Defect type"
          value={mode}
          onChange={setMode}
          items={[["perfect", "Perfect"], ["schottky", "Schottky"], ["frenkel", "Frenkel"], ["fcentre", "F-centre"], ["interstitial", "Extra cations"], ["deficiency", "Metal deficiency"], ["impurity", "Impurity"]] as const}
        />
        {mode === "schottky" && <Slider label="Temperature (more pairs as T rises)" value={pairs} onChange={setPairs} min={1} max={5} show={`${pairs} pair${pairs > 1 ? "s" : ""}`} />}
      </div>
      <div className="space-y-4">
        <Narration k={mode}>
          <div className="font-bold">{info.title}</div>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[var(--text-muted)]">
            {info.bullets.map((b) => (
              <li key={b}>
                <Rich text={b} />
              </li>
            ))}
          </ul>
        </Narration>
        <Facts cols={2} items={[["Class", info.tag], ["Density", info.density], ["Found in", info.eg], ["Charge", "balanced"]]} />
      </div>
    </div>
  );
}

/* ---------------------------------------------- how many defects form */

function BoltzmannLab() {
  const [dh, setDh] = useState(2);
  const [temp, setTemp] = useState(600);
  const kB = 8.617e-5;
  const frac = Math.exp(-dh / (2 * kB * temp));
  const exp10 = Math.floor(Math.log10(frac));
  const mant = frac / 10 ** exp10;
  const per = frac * 6.022e23;
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="space-y-4">
        <Slider label="Energy to form a Schottky pair, ΔH (eV)" value={dh} onChange={setDh} min={0.8} max={3} step={0.05} show={`${dh.toFixed(2)} eV`} />
        <Slider label="Temperature (K)" value={temp} onChange={setTemp} min={300} max={1200} step={10} show={`${temp} K`} />
      </div>
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <Tex block ex="\dfrac{n_s}{N} \approx \exp\!\left(-\dfrac{\Delta H_s}{2kT}\right)" />
        <div className="mt-2 text-center font-mono text-3xl font-black text-[var(--accent)]">
          {mant.toFixed(1)} × 10<sup>{exp10}</sup>
        </div>
        <div className="mt-1 text-center text-sm text-[var(--text-muted)]">fraction of sites vacant (pairs per ion pair)</div>
        <div className="mt-3 border-t border-[var(--border)] pt-3 text-center text-sm text-[var(--foreground)]">
          About <span className="font-mono font-bold">{per.toExponential(1)}</span> pairs per mole of crystal
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------- dislocation */

function Dislocation() {
  const [x0, setX0] = useState(-4.5);
  const shown = useTween(x0, 2.2);
  const nu = 0.3;
  const s = 31;
  const cx = 280;
  const cy = 170;
  const atoms = [];
  const colorFor = (v: number) => {
    const k = Math.max(-1, Math.min(1, v * 2.4));
    const mix = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);
    const from = k < 0 ? [76, 155, 232] : [138, 160, 170];
    const to = k < 0 ? [138, 160, 170] : [232, 96, 122];
    const t = k < 0 ? k + 1 : k;
    return `rgb(${mix(from[0], to[0], t)},${mix(from[1], to[1], t)},${mix(from[2], to[2], t)})`;
  };
  const pos = new Map<string, { x: number; y: number; v: number }>();
  for (let j = -4; j <= 4; j++)
    for (let i = -8; i <= 8; i++) {
      const dx = i - shown;
      const dy = j + 0.5;
      const r2 = Math.max(0.3, dx * dx + dy * dy);
      const th = Math.atan2(dy, dx);
      const ux = (1 / (2 * Math.PI)) * (th + (dx * dy) / (2 * (1 - nu) * r2));
      const uy = -(1 / (2 * Math.PI)) * (((1 - 2 * nu) / (4 * (1 - nu))) * Math.log(r2) + (dx * dx - dy * dy) / (4 * (1 - nu) * r2));
      pos.set(`${i},${j}`, { x: cx + (i + ux) * s, y: cy - (dy + uy) * s, v: dy / r2 });
    }
  const bonds = [];
  for (let j = -4; j <= 4; j++)
    for (let i = -8; i <= 8; i++) {
      const p = pos.get(`${i},${j}`)!;
      const right = pos.get(`${i + 1},${j}`);
      if (right) bonds.push(<line key={`h${i},${j}`} x1={p.x} y1={p.y} x2={right.x} y2={right.y} stroke="#fff" strokeOpacity={0.28} strokeWidth={1.4} />);
      if (j > -4) {
        // across the slip plane (between rows -1 and 0) atoms left of the core are bonded one column over
        const crossing = j === 0 && i - shown < 0;
        const below = pos.get(`${crossing ? i + 1 : i},${j - 1}`);
        if (below) bonds.push(<line key={`v${i},${j}`} x1={p.x} y1={p.y} x2={below.x} y2={below.y} stroke="#fff" strokeOpacity={0.28} strokeWidth={1.4} />);
      }
      atoms.push(<circle key={`${i},${j}`} cx={p.x} cy={p.y} r={s * 0.3} fill={colorFor(p.v)} stroke="#06100f" strokeWidth={0.8} />);
    }
  const coreX = cx + shown * s;
  const coreY = cy;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 340" role="img" aria-label="Edge dislocation gliding through a crystal under shear stress" className="w-full rounded-2xl border border-white/10" style={PANEL}>
          <line x1={20} x2={540} y1={cy} y2={cy} stroke="#fff" strokeOpacity={0.14} strokeDasharray="5 5" />
          {bonds}
          {atoms}
          <text x={28} y={cy - 8} fontSize={11} fill="#b8cbc7">slip plane</text>
          <g transform={`translate(${coreX} ${coreY})`}>
            <path d="M0 6 V-20 M-9 -10 H9" stroke="#fff" strokeWidth={2.4} fill="none" />
          </g>
          <g stroke="#ffd37a" strokeWidth={2.4} fill="none">
            <path d="M200 38 H360 M348 31 L360 38 L348 45" />
            <path d="M360 304 H200 M212 297 L200 304 L212 311" />
          </g>
          <text x={372} y={43} fontSize={13} fontWeight={700} fill="#ffd37a">τ</text>
        </svg>
        <div className="flex flex-wrap items-center gap-2">
          <Btn primary onClick={() => setX0(9.5)}>
            ▶ Apply shear stress
          </Btn>
          <Btn onClick={() => setX0(-4.5)}>Reset</Btn>
          <div className="min-w-[10rem] flex-1">
            <Slider label="Position of the dislocation" value={x0} onChange={setX0} min={-9.5} max={9.5} step={0.1} show={x0.toFixed(1)} />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <Narration k={x0 > 8 ? "done" : "go"}>
          {x0 > 8 ? (
            <Rich text="**The step.** The dislocation has left the crystal. Everything above the slip plane has moved by exactly one atomic spacing relative to everything below: a permanent shape change." />
          ) : (
            <Rich text="**Edge dislocation.** An extra half-plane of atoms (white mark) is squeezed in from above. Atoms above the line are **compressed** (rose), below it **stretched** (blue). Under shear the defect glides one row at a time, so only a few bonds break at once." />
          )}
        </Narration>
        <Facts cols={2} items={[["Line defect", "dislocation"], ["Burgers vector b", "one lattice spacing"], ["Edge type", "line ⟂ b"], ["Screw type", "line ∥ b"]]} />
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          Slipping a whole plane at once would need a stress close to G/10 (G is the shear modulus). Moving a dislocation needs about a thousandth of that. This is why real metals are far softer than their bond strengths suggest, and why bending a paper clip makes it harder: dislocations tangle and block each other.
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------- vacancy conduction */

function HopLab() {
  const [step, setStep] = useState(0);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (!play) return;
    const id = window.setInterval(() => {
      setStep((s) => {
        if (s >= 4) {
          setPlay(false);
          return s;
        }
        return s + 1;
      });
    }, 1100);
    return () => window.clearInterval(id);
  }, [play]);

  const sites = 6;
  const vac0 = 4;
  const slotOf = (j: number) => (j >= vac0 - step && j < vac0 ? j + 1 : j);
  const X = (slot: number) => 60 + slot * 82;
  const cations = [];
  for (let j = 0; j < sites; j++) {
    if (j === vac0) continue;
    cations.push(
      <g key={j} style={{ transform: `translate(${X(slotOf(j))}px, 90px)`, transition: "transform .9s cubic-bezier(.3,.7,.2,1)" }}>
        <circle r={16} fill={`url(#hg)`} stroke="#06100f" />
        <text textAnchor="middle" dy="0.35em" fontSize={14} fontWeight={800} fill="#06100f">+</text>
      </g>,
    );
  }
  const vacSlot = vac0 - step;
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 180" role="img" aria-label="A cation vacancy moving through a crystal as neighbouring cations hop into it under an electric field" className="w-full rounded-2xl border border-white/10" style={PANEL}>
          <defs>
            <radialGradient id="hg" cx="35%" cy="30%" r="80%">
              <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
              <stop offset="0.35" stopColor={C.gold} />
              <stop offset="1" stopColor={C.gold} stopOpacity="0.8" />
            </radialGradient>
            <radialGradient id="ag" cx="35%" cy="30%" r="80%">
              <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
              <stop offset="0.35" stopColor={C.teal} />
              <stop offset="1" stopColor={C.teal} stopOpacity="0.8" />
            </radialGradient>
          </defs>
          {Array.from({ length: sites + 1 }, (_, k) => (
            <g key={k} transform={`translate(${X(k) - 41} 90)`}>
              <circle r={22} fill="url(#ag)" stroke="#06100f" />
              <text textAnchor="middle" dy="0.35em" fontSize={16} fontWeight={800} fill="#06100f">−</text>
            </g>
          ))}
          <circle cx={X(vacSlot)} cy={90} r={16} fill="none" stroke="#fff" strokeWidth={1.8} strokeDasharray="4 4" style={{ transition: "cx .9s cubic-bezier(.3,.7,.2,1)" }} />
          {cations}
          <g stroke="#ffd37a" strokeWidth={2.4} fill="none">
            <path d="M200 30 H360 M348 23 L360 30 L348 37" />
          </g>
          <text x={372} y={35} fontSize={13} fontWeight={700} fill="#ffd37a">electric field E</text>
        </svg>
        <div className="flex gap-2">
          <Btn primary onClick={() => { setStep(0); setPlay(true); }}>
            ▶ Apply the field
          </Btn>
          <Btn onClick={() => { setPlay(false); setStep(0); }}>Reset</Btn>
        </div>
      </div>
      <Narration k={step}>
        <Rich text={step === 0 ? "A cation vacancy (dashed) sits in the crystal. With no field, ions hop in random directions." : `**Hop ${step}.** The neighbouring cation on the left jumps into the vacancy, moving **with** the field. The vacancy moves **against** it. Charge is carried by ions hopping vacancy to vacancy: **ionic conduction**.`} />
        <p className="mt-2 text-sm text-[var(--text-muted)]">More vacancies (higher temperature, or doping with SrCl₂) means more hops available, so conductivity rises.</p>
      </Narration>
    </div>
  );
}

/* ----------------------------------------------------------- chapter */

export function DefectsChapter() {
  return (
    <Chapter id="defects" n="PART 5" title="Imperfections in solids" lead="Real crystals are never perfect. Missing, displaced and foreign atoms explain density changes, colour, conductivity and the strength of metals.">
      <P t="An ideal crystal has every particle on its lattice site. Real crystals above absolute zero contain **defects**: faults in the regular arrangement. They are classified by their size. **Point defects** involve single sites; **line defects** (dislocations) run through the crystal along a line; **plane and volume defects** include grain boundaries, stacking faults, voids and cracks." />
      <P t="Point defects divide further. **Stoichiometric** defects leave the ratio of cations to anions exactly as in the formula (Schottky, Frenkel). **Non-stoichiometric** defects change the ratio (metal excess, metal deficiency). **Impurity** defects bring in foreign ions." />
      <DefectLab />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] max-w-4xl text-sm">
          <thead className="text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
            <tr>
              <th className="py-2 pr-4">Property</th>
              <th className="py-2 pr-4">Schottky</th>
              <th className="py-2">Frenkel</th>
            </tr>
          </thead>
          <tbody className="text-[var(--foreground)]">
            {[
              ["What happens", "A cation and an anion leave the lattice", "An ion moves into an interstitial site"],
              ["Vacancies", "Two (one of each ion)", "One, plus one interstitial"],
              ["Density", "Decreases", "Unchanged"],
              ["Favoured by", "Similar ion sizes, high coordination", "Large size difference, low coordination"],
              ["Examples", "NaCl, KCl, CsCl, AgBr", "ZnS, AgCl, AgBr, AgI"],
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

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">How many defects form?</h3>
      <P t="Defects cost energy to make but increase disorder (entropy), so a crystal at equilibrium always contains some. The number of Schottky pairs follows a Boltzmann factor, rising steeply with temperature:" />
      <BoltzmannLab />
      <Derivation
        title="Why the factor is exp(−ΔH / 2kT)"
        steps={[
          { say: "Creating $n$ Schottky pairs in a crystal of $N$ ion pairs costs energy $n\\,\\Delta H$ but raises the number of arrangements $W$ in which the vacancies could sit." },
          { say: "Choose which $n$ of $N$ cation sites and which $n$ of $N$ anion sites are empty:", tex: "W = \\binom{N}{n}^2 \\quad\\Rightarrow\\quad S = k\\ln W \\approx 2k\\,[\\,N\\ln N - n\\ln n - (N-n)\\ln(N-n)\\,]" },
          { say: "Minimise the free energy $G = n\\,\\Delta H - TS$ with respect to $n$ (set $dG/dn = 0$) and use $n \\ll N$:", tex: "\\Delta H = 2kT\\ln\\frac{N-n}{n} \\;\\approx\\; 2kT\\ln\\frac{N}{n}" },
        ]}
        result="n \\approx N\\exp\\!\\left(-\\dfrac{\\Delta H}{2kT}\\right)"
      />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Line defects: dislocations</h3>
      <P t="A **dislocation** is a line along which the crystal is out of step with itself. In the **edge** form an extra half-plane of atoms is inserted; in the **screw** form the planes spiral around the line like a ramp. The **Burgers vector b** measures the size and direction of the lattice slip. Move the defect with shear stress and watch the crystal deform." />
      <Dislocation />
      <KeyIdea title="Plane and volume defects">
        {"**Grain boundaries** separate crystals of different orientation (every ordinary metal is a patchwork of grains). **Stacking faults** are a missing or extra layer in an ABC… sequence. **Voids, cracks and inclusions** are three-dimensional gaps or foreign particles. All of them act as barriers to dislocations, which is why small-grained metals are stronger."}
      </KeyIdea>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Defects and electrical conduction</h3>
      <P t="Defects are what allow an ionic solid to conduct. A perfect NaCl crystal has no free charge carrier, but each vacancy gives a neighbouring ion somewhere to go. Under an electric field, ions hop into vacancies one after another." />
      <HopLab />

      <div className="grid gap-4 md:grid-cols-2">
        <Traps
          items={[
            "**Schottky lowers the density; Frenkel does not.** Both are stoichiometric.",
            "**AgBr** shows both Schottky and Frenkel defects; **NaCl** shows Schottky only; **ZnS** Frenkel only.",
            "F-centre = anion vacancy + trapped electron; the colour comes from the electron. KCl is **violet**, NaCl **yellow**, LiCl **pink**.",
            "In metal deficiency the **oxidation state rises** (Fe²⁺ → Fe³⁺) to compensate for the missing cation.",
            "Doping with a higher-valent ion (Sr²⁺ in NaCl) creates **one vacancy per dopant ion**, independent of temperature.",
          ]}
        />
        <Worked
          q="A sample of ferrous oxide has the formula Fe₀.₉₅O. What percentage of the iron is present as Fe³⁺?"
          steps={["Take 100 O²⁻ ions: charge −200. Then 95 Fe ions must supply +200.", "Let x be Fe³⁺ and (95 − x) Fe²⁺: $3x + 2(95 - x) = 200$.", "$x + 190 = 200 \\Rightarrow x = 10$.", "Percentage of Fe as Fe³⁺ = $\\dfrac{10}{95}\\times100 = 10.5\\%$."]}
          answer="10.5 % Fe³⁺ (89.5 % Fe²⁺)"
        />
        <Worked
          q="NaCl is doped with 10⁻³ mol % of SrCl₂. Calculate the number of cation vacancies per mole of NaCl."
          steps={["10⁻³ mol % means $10^{-3}$ mol of SrCl₂ per 100 mol, i.e. $10^{-5}$ mol per mole of NaCl.", "Each Sr²⁺ replaces two Na⁺ ions: it takes one cation site and the other becomes a vacancy.", "Vacancies = $10^{-5}\\times6.022\\times10^{23}$."]}
          answer="6.022 × 10¹⁸ vacancies per mole"
        />
        <Worked
          q="Why does the density of KCl fall when Schottky defects form, but stay the same when Frenkel defects form in AgCl?"
          steps={["Schottky: ions leave the crystal interior for the surface. The mass stays the same, but the lattice sites are not all filled and the volume rises.", "Frenkel: the ion only moves within the crystal; the number of ions and the volume are unchanged."]}
          answer="Schottky lowers density (volume ↑, mass constant); Frenkel does not."
        />
      </div>
    </Chapter>
  );
}
