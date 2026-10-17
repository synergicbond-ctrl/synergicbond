"use client";

import { useEffect, useRef, useState } from "react";
import { C } from "./_geom";
import { Btn, Chapter, Derivation, Facts, KeyIdea, Narration, P, Rich, Slider, Tabs, Tex, Traps, Worked, useClock, useTour } from "./_ui";

const PANEL = { background: "radial-gradient(120% 90% at 50% 18%, #17433f 0%, #0c1f1e 52%, #060f0f 100%)" };

const hash = (a: number, b: number) => {
  let h = (a * 374761393 + b * 668265263) | 0;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = h ^ (h >>> 16);
  return ((h >>> 0) % 100000) / 100000;
};

/* -------------------------------------------------- spin-only moment */

const IONS: { name: string; d: number }[] = [
  { name: "Sc³⁺", d: 0 },
  { name: "Ti³⁺", d: 1 },
  { name: "V³⁺", d: 2 },
  { name: "Cr³⁺", d: 3 },
  { name: "Mn²⁺", d: 5 },
  { name: "Fe²⁺", d: 6 },
  { name: "Fe³⁺", d: 5 },
  { name: "Co²⁺", d: 7 },
  { name: "Ni²⁺", d: 8 },
  { name: "Cu²⁺", d: 9 },
  { name: "Zn²⁺", d: 10 },
];

function Moment() {
  const [idx, setIdx] = useState(5);
  const ion = IONS[idx];
  const tour = useTour(ion.d, 520);
  const placed = Math.min(tour.step, ion.d);
  const unpaired = placed <= 5 ? placed : 10 - placed;
  const finalUnpaired = ion.d <= 5 ? ion.d : 10 - ion.d;
  const mu = Math.sqrt(finalUnpaired * (finalUnpaired + 2));
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 220" role="img" aria-label={`Hund's rule filling of the five 3d orbitals of ${ion.name}`} className="w-full rounded-2xl border border-white/10" style={PANEL}>
          <text x={28} y={34} fontSize={14} fontWeight={800} fill="#fff">
            {ion.name}: 3d{ion.d > 0 ? <tspan baselineShift="super" fontSize={10}>{ion.d}</tspan> : null}
            {ion.d === 0 ? " (empty)" : ""}
          </text>
          {[0, 1, 2, 3, 4].map((o) => {
            const up = placed > o;
            const down = placed > 5 + o;
            return (
              <g key={o} transform={`translate(${60 + o * 90} 80)`}>
                <rect width={70} height={70} rx={8} fill="#ffffff" fillOpacity={0.06} stroke="#ffffff" strokeOpacity={0.45} strokeWidth={2} />
                <g stroke={C.gold} strokeWidth={4} strokeLinecap="round" fill="none" style={{ transition: "opacity .3s" }}>
                  <path d="M24 56 V16 M14 26 L24 14 L34 26" opacity={up ? 1 : 0} />
                  <path d="M46 14 V54 M36 44 L46 56 L56 44" opacity={down ? 1 : 0} stroke="#7fe0ff" />
                </g>
              </g>
            );
          })}
          <text x={60} y={176} fontSize={11} fill="#b8cbc7">Hund&apos;s rule: one electron in each orbital first (parallel spins), then pair up</text>
          <text x={60} y={198} fontSize={12} fontWeight={700} fill="#fff">Unpaired electrons: {unpaired}</text>
        </svg>
        <div className="flex flex-wrap gap-1.5">
          {IONS.map((x, i) => (
            <button
              key={x.name}
              type="button"
              onClick={() => {
                setIdx(i);
                tour.play();
              }}
              className={`rounded-full border px-3 py-1 text-sm font-semibold ${i === idx ? "border-[var(--accent)] bg-[var(--accent)] text-black" : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"}`}
            >
              {x.name}
            </button>
          ))}
        </div>
        <Btn primary onClick={tour.play}>
          ▶ Fill the orbitals
        </Btn>
      </div>
      <div className="space-y-4">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <div className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Spin-only magnetic moment</div>
          <div className="font-mono text-4xl font-black text-[var(--accent)]">
            {mu.toFixed(2)} <span className="text-lg font-bold text-[var(--foreground)]">BM</span>
          </div>
          <Tex block ex={`\\mu = \\sqrt{n(n+2)} = \\sqrt{${finalUnpaired}\\,(${finalUnpaired}+2)}`} />
          <div className="mt-2 text-sm text-[var(--text-muted)]">{finalUnpaired === 0 ? "No unpaired electrons: diamagnetic." : `${finalUnpaired} unpaired electron${finalUnpaired > 1 ? "s" : ""}: paramagnetic.`}</div>
        </div>
        <table className="w-full text-sm">
          <thead className="text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
            <tr>
              <th className="py-1">Unpaired n</th>
              <th className="py-1">0</th>
              <th className="py-1">1</th>
              <th className="py-1">2</th>
              <th className="py-1">3</th>
              <th className="py-1">4</th>
              <th className="py-1">5</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[var(--foreground)]">
            <tr className="border-t border-[var(--border)]">
              <td className="py-1.5 text-[var(--text-muted)]">μ (BM)</td>
              {[0, 1, 2, 3, 4, 5].map((n) => (
                <td key={n} className={n === finalUnpaired ? "font-bold text-[var(--accent)]" : ""}>
                  {Math.sqrt(n * (n + 2)).toFixed(2)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ------------------------------------------------------ ordering sim */

type Order = "dia" | "para" | "ferro" | "antiferro" | "ferri";
const OINFO: Record<Order, { title: string; text: string; ex: string; tc?: string }> = {
  dia: { title: "Diamagnetic", text: "All electrons are paired, so every atom has zero net moment. An applied field induces a tiny opposing moment: the substance is weakly repelled. Every substance has this effect; it is hidden when a stronger one is present.", ex: "NaCl, H₂O, N₂, C₆H₆, Zn²⁺" },
  para: { title: "Paramagnetic", text: "Unpaired electrons give each atom a permanent moment, but the moments point in random directions and cancel. A field lines them up a little: weak attraction that disappears when the field is removed.", ex: "O₂, NO, Cu²⁺, Fe³⁺, Ti³⁺" },
  ferro: { title: "Ferromagnetic", text: "Neighbouring moments lock parallel in domains. The solid is strongly attracted and can stay magnetised after the field is removed.", ex: "Fe, Co, Ni, CrO₂", tc: "Curie temperature: Fe 1043 K, Ni 627 K" },
  antiferro: { title: "Antiferromagnetic", text: "Neighbouring moments point in opposite directions and are equal, so the total is zero. The solid is only weakly attracted.", ex: "MnO, MnO₂, FeO, NiO", tc: "Néel temperature: MnO about 120 K" },
  ferri: { title: "Ferrimagnetic", text: "Neighbouring moments are opposite but unequal, so a net moment remains. Strongly attracted, though less than a ferromagnet.", ex: "Fe₃O₄ (magnetite), ferrites such as MgFe₂O₄", tc: "Curie temperature: Fe₃O₄ about 858 K" },
};
const MC = 9;
const MR = 5;

function OrderingLab() {
  const [order, setOrder] = useState<Order>("ferro");
  const [t, setT] = useState(0.4);
  const time = useClock();
  const tick = Math.floor(time * 1.1);
  const ordered = order === "ferro" || order === "antiferro" || order === "ferri";
  const hot = ordered && t >= 1;
  const spins: { x: number; y: number; angle: number; scale: number; small: boolean }[] = [];
  let mx = 0;
  let my = 0;
  for (let r = 0; r < MR; r++)
    for (let c = 0; c < MC; c++) {
      const i = r * MC + c;
      const parity = (r + c) % 2;
      let angle = 0;
      let scale = 1;
      const rand = hash(i, tick + 11) * 360;
      if (order === "para" || hot) angle = rand;
      else if (order === "ferro") angle = 0;
      else if (order === "antiferro") angle = parity ? 180 : 0;
      else if (order === "ferri") {
        angle = parity ? 180 : 0;
        scale = parity ? 0.55 : 1;
      }
      if (ordered && !hot && hash(i, 99) < 0.5 * t ** 3) angle += (hash(i, tick + 3) - 0.5) * 110;
      if (order !== "dia") {
        mx += Math.sin((angle * Math.PI) / 180) * scale;
        my += Math.cos((angle * Math.PI) / 180) * scale;
      }
      spins.push({ x: 50 + c * 58, y: 44 + r * 58, angle, scale, small: scale < 1 });
    }
  const net = order === "dia" ? 0 : Math.hypot(mx, my) / (MC * MR);
  const info = OINFO[order];

  // susceptibility curve, schematic and normalised
  const x = (tt: number) => 372 + (tt / 3) * 168;
  const curve = (ty: Order): string => {
    const pts: string[] = [];
    for (let k = 1; k <= 120; k++) {
      const tt = (k / 120) * 3;
      let chi: number;
      if (ty === "dia") chi = -0.08;
      else if (ty === "para") chi = 0.12 / Math.max(tt, 0.08);
      else if (ty === "ferro" || ty === "ferri") chi = tt > 1.02 ? 0.12 / (tt - 0.95) : 1.4;
      else chi = tt < 1 ? 0.12 + 0.16 * tt : 0.28 / (tt + 0.4);
      const yy = 118 - Math.max(-1, Math.min(1.5, chi)) * 52;
      pts.push(`${pts.length ? "L" : "M"}${x(tt).toFixed(1)},${yy.toFixed(1)}`);
    }
    return pts.join(" ");
  };
  const chiNow = (() => {
    const tt = order === "para" || order === "dia" ? Math.max(0.1, t) : t;
    if (order === "dia") return -0.08;
    if (order === "para") return 0.12 / Math.max(tt, 0.08);
    if (order === "ferro" || order === "ferri") return tt > 1.02 ? 0.12 / (tt - 0.95) : 1.4;
    return tt < 1 ? 0.12 + 0.16 * tt : 0.28 / (tt + 0.4);
  })();

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 300" role="img" aria-label={`Arrangement of atomic magnetic moments in a ${info.title.toLowerCase()} solid`} className="w-full rounded-2xl border border-white/10" style={PANEL}>
          {spins.map((s, i) =>
            order === "dia" ? (
              <g key={i} transform={`translate(${s.x} ${s.y})`}>
                <circle r={5} cx={-7} fill="none" stroke="#7fe0ff" />
                <circle r={5} cx={7} fill="none" stroke={C.gold} />
                <path d="M-7 4 V-4 M-9.5 -1.5 L-7 -4.5 L-4.5 -1.5" stroke="#7fe0ff" fill="none" strokeWidth={1.4} />
                <path d="M7 -4 V4 M4.5 1.5 L7 4.5 L9.5 1.5" stroke={C.gold} fill="none" strokeWidth={1.4} />
              </g>
            ) : (
              <g key={i} style={{ transform: `translate(${s.x}px, ${s.y}px) rotate(${s.angle}deg) scale(${s.scale})`, transition: "transform .8s ease" }}>
                <path d="M0 18 V-14 M-8 -6 L0 -18 L8 -6" stroke={s.small ? C.gold : "#7fe0ff"} strokeWidth={3.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            ),
          )}
          {order === "dia" && <text x={20} y={290} fontSize={11} fill="#b8cbc7">Paired electrons: opposite spins cancel, so there is no permanent dipole</text>}
        </svg>
        <Tabs label="Magnetic behaviour" value={order} onChange={setOrder} items={(Object.keys(OINFO) as Order[]).map((k) => [k, OINFO[k].title] as const)} />
        <Slider label={<span>Temperature relative to the transition temperature</span>} value={t} onChange={setT} min={0.1} max={2} step={0.05} show={`${t.toFixed(2)} T/Tc`} />
      </div>
      <div className="space-y-4">
        <Narration k={order}>
          <div className="font-bold">{info.title}</div>
          <p className="mt-1 text-[var(--text-muted)]">{info.text}</p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">Examples: {info.ex}</p>
          {info.tc && <p className="mt-1 text-sm text-[var(--text-muted)]">{info.tc}</p>}
        </Narration>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="flex justify-between text-sm text-[var(--text-muted)]">
            <span>Net moment per site</span>
            <span className="font-mono font-bold text-[var(--foreground)]">{net.toFixed(2)}</span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-[var(--accent)] transition-all duration-700" style={{ width: `${Math.min(100, net * 100)}%` }} />
          </div>
          {hot && <p className="mt-3 text-sm font-semibold text-[var(--accent)]">Above the transition temperature thermal motion destroys the order: the solid behaves as a paramagnet.</p>}
        </div>
      </div>
      <svg viewBox="0 0 560 170" role="img" aria-label="Magnetic susceptibility against temperature" className="w-full rounded-2xl border border-white/10 lg:col-span-2" style={PANEL}>
        <line x1={372} y1={20} x2={372} y2={150} stroke="#9bb8b3" />
        <line x1={372} y1={118} x2={546} y2={118} stroke="#9bb8b3" />
        <path d={curve(order)} fill="none" stroke={C.green} strokeWidth={2.6} />
        {ordered && <line x1={x(1)} y1={20} x2={x(1)} y2={150} stroke="#fff" strokeOpacity={0.3} strokeDasharray="3 4" />}
        <circle cx={x(t)} cy={118 - Math.max(-1, Math.min(1.5, chiNow)) * 52} r={5.5} fill="#fff" stroke="#06100f" />
        <text x={30} y={34} fontSize={13} fontWeight={800} fill="#fff">Susceptibility χ = M / H against temperature</text>
        <text x={30} y={58} fontSize={12} fill="#b8cbc7">
          {order === "dia" && "Diamagnetic: χ is small, negative and independent of temperature."}
          {order === "para" && "Paramagnetic: Curie's law, χ = C / T. Heating randomises the moments, so χ falls."}
          {(order === "ferro" || order === "ferri") && "Ordered below Tc (very large χ). Above Tc: Curie–Weiss law, χ = C / (T − Tc)."}
          {order === "antiferro" && "Antiferromagnet: χ is small, peaks at the Néel temperature, then follows a Curie–Weiss fall."}
        </text>
        <text x={372} y={166} fontSize={10} fill="#b8cbc7">0</text>
        <text x={546} y={166} fontSize={10} fill="#b8cbc7" textAnchor="end">3 Tc</text>
        <text x={376} y={32} fontSize={10} fill="#b8cbc7">χ</text>
      </svg>
    </div>
  );
}

/* --------------------------------------------------------- hysteresis */

const ND = 36;
type HState = { s: number[]; H: number; trace: [number, number][] };

function thresholds(hard: boolean) {
  return Array.from({ length: ND }, (_, i) => (hard ? 0.35 + 0.55 * hash(i, 21) : 0.04 + 0.2 * hash(i, 21)));
}
function applyField(H: number, prev: HState, th: number[]): HState {
  const s = prev.s.map((v, i) => (H > th[i] ? 1 : H < -th[i] ? -1 : v));
  const M = s.reduce((a, b) => a + b, 0) / ND;
  return { s, H, trace: [...prev.trace.slice(-420), [H, M]] };
}
const initial = (): HState => ({ s: Array.from({ length: ND }, (_, i) => (hash(i, 5) < 0.5 ? 1 : -1)), H: 0, trace: [[0, 0]] });

function Hysteresis() {
  const [hard, setHard] = useState(false);
  const [st, setSt] = useState<HState>(initial);
  const [sweep, setSweep] = useState(false);
  const th = useRef(thresholds(false));
  const phase = useRef(0);

  useEffect(() => {
    th.current = thresholds(hard);
  }, [hard]);

  useEffect(() => {
    if (!sweep) return;
    const id = window.setInterval(() => {
      phase.current += 0.045;
      const H = Math.sin(phase.current) * 1.05;
      setSt((p) => applyField(H, p, th.current));
    }, 40);
    return () => window.clearInterval(id);
  }, [sweep]);

  const M = st.s.reduce((a, b) => a + b, 0) / ND;
  const px = (h: number) => 462 + (h / 1.1) * 88;
  const py = (m: number) => 150 - m * 110;
  const path = st.trace.map(([h, m], i) => `${i ? "L" : "M"}${px(h).toFixed(1)},${py(m).toFixed(1)}`).join(" ");
  const cols = 6;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-3">
        <svg viewBox="0 0 560 300" role="img" aria-label="Magnetic domains flipping as the applied field is swept, tracing a hysteresis loop" className="w-full rounded-2xl border border-white/10" style={PANEL}>
          {st.s.map((v, i) => {
            const r = Math.floor(i / cols);
            const c = i % cols;
            return (
              <g key={i} transform={`translate(${28 + c * 54} ${40 + r * 40})`}>
                <rect width={48} height={34} rx={6} fill={v > 0 ? C.blue : C.rose} fillOpacity={0.35} stroke={v > 0 ? "#8fc8ff" : "#ff9db0"} strokeOpacity={0.8} style={{ transition: "fill .25s" }} />
                <g style={{ transform: `translate(24px, 17px) rotate(${v > 0 ? 0 : 180}deg)`, transition: "transform .3s" }}>
                  <path d="M0 11 V-11 M-6 -4 L0 -12 L6 -4" stroke="#fff" strokeWidth={2.6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
            );
          })}
          <text x={28} y={24} fontSize={12} fontWeight={700} fill="#d8e7e4">Domains (arrow = direction of magnetisation)</text>
          <line x1={px(-1.1)} y1={py(0)} x2={px(1.1)} y2={py(0)} stroke="#9bb8b3" />
          <line x1={px(0)} y1={py(1.1)} x2={px(0)} y2={py(-1.1)} stroke="#9bb8b3" />
          <path d={path} fill="none" stroke={C.green} strokeWidth={2.4} />
          <circle cx={px(st.H)} cy={py(M)} r={6} fill="#fff" stroke="#06100f" />
          <text x={px(1.1)} y={py(0) + 16} fontSize={10} fill="#b8cbc7" textAnchor="end">H</text>
          <text x={px(0) + 6} y={py(1.1) + 8} fontSize={10} fill="#b8cbc7">M</text>
          <text x={462} y={290} fontSize={11} fill="#d8e7e4" textAnchor="middle">M–H hysteresis loop</text>
        </svg>
        <Slider
          label="Applied field H"
          value={st.H}
          onChange={(h) => {
            setSweep(false);
            setSt((p) => applyField(h, p, th.current));
          }}
          min={-1.1}
          max={1.1}
          step={0.01}
          show={st.H.toFixed(2)}
        />
        <div className="flex flex-wrap gap-2">
          <Btn primary onClick={() => setSweep((s) => !s)}>
            {sweep ? "⏸ Pause sweep" : "▶ Sweep the field"}
          </Btn>
          <Btn
            onClick={() => {
              setSweep(false);
              phase.current = 0;
              setSt(initial());
            }}
          >
            Demagnetise
          </Btn>
        </div>
      </div>
      <div className="space-y-4">
        <Tabs
          label="Magnet type"
          value={hard ? "hard" : "soft"}
          onChange={(v) => {
            setHard(v === "hard");
            th.current = thresholds(v === "hard");
            setSweep(false);
            phase.current = 0;
            setSt(initial());
          }}
          items={[["soft", "Soft iron"], ["hard", "Hard steel / alnico"]] as const}
        />
        <Narration k={`${hard}-${Math.abs(M) > 0.95}`}>
          {hard ? (
            <Rich text="**Hard magnet.** Its domains resist flipping: a large reverse field (the **coercive field**) is needed to demagnetise it. The loop is **wide**, and a lot of magnetisation remains at H = 0 (**remanence**). This is why steel and alnico make **permanent magnets**." />
          ) : (
            <Rich text="**Soft magnet.** Its domains flip at small fields: the loop is **narrow**, so it magnetises and demagnetises easily with little energy lost per cycle. This is why soft iron is used in **transformer cores and electromagnets**." />
          )}
        </Narration>
        <Facts cols={2} items={[["Magnetisation M", M.toFixed(2)], ["Domains up", `${st.s.filter((v) => v > 0).length} / ${ND}`], ["Remanence", "M left at H = 0"], ["Coercivity", "reverse H that makes M = 0"]]} />
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          Each domain here has its own switching field, so the loop emerges from simple rules: a domain flips up when H exceeds its threshold and down when H drops below minus its threshold. In between it keeps its direction, which is the memory (hysteresis).
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- chapter */

export function MagneticChapter() {
  return (
    <Chapter id="magnetic" n="PART 7" title="Magnetic properties" lead="Every electron is a tiny magnet. Whether a solid is attracted, repelled, or can itself become a magnet depends on whether those tiny magnets cancel, point randomly, or line up.">
      <P t="An electron has a magnetic moment from two motions: its **spin** and its **orbital** motion around the nucleus. Electrons in the same orbital have opposite spins, so their moments cancel. A substance's magnetic behaviour is therefore set by how many **unpaired electrons** it has and how the resulting atomic moments interact with each other. The unit of magnetic moment is the **Bohr magneton (BM)**." />
      <h3 className="text-2xl font-bold text-[var(--foreground)]">How many unpaired electrons?</h3>
      <P t="For transition-metal ions the orbital contribution is largely quenched, so the moment is close to the **spin-only** value. Fill the five 3d orbitals following Hund's rule and count the unpaired electrons." />
      <Moment />
      <Derivation
        title="Spin-only magnetic moment"
        steps={[
          { say: "Each unpaired electron has spin $\\tfrac12$. For $n$ unpaired electrons with parallel spins the total spin quantum number is $S = n/2$." },
          { say: "The magnitude of the moment is $\\mu = g\\sqrt{S(S+1)}\\,\\mu_B$ with $g \\approx 2$ for a free spin:", tex: "\\mu = 2\\sqrt{\\frac n2\\left(\\frac n2 + 1\\right)}\\;\\mu_B" },
          { say: "Bring the factor 2 under the root as $\\sqrt4$ and multiply out:", tex: "\\mu = \\sqrt{4\\cdot\\frac{n}{2}\\cdot\\frac{n+2}{2}}\\;\\mu_B = \\sqrt{n(n+2)}\\;\\mu_B" },
        ]}
        result="\\mu = \\sqrt{n(n+2)}\\ \\text{BM}"
      />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Five kinds of magnetic behaviour</h3>
      <OrderingLab />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Domains and hysteresis</h3>
      <P t="In a ferromagnet, moments align in small regions called **domains**. In an unmagnetised piece the domains point every way and cancel. An applied field makes domains aligned with it grow and flip the others. Take the field away and some stay flipped: the piece has become a magnet." />
      <Hysteresis />

      <div className="grid gap-4 md:grid-cols-2">
        <KeyIdea title="Susceptibility">
          {"The **magnetic susceptibility** χ = M / H says how strongly a substance responds to a field H by acquiring magnetisation M. Diamagnetic χ is **negative and tiny**; paramagnetic χ is **positive and small** and falls as 1/T (Curie's law); ferromagnetic χ is **large**, and above the Curie temperature it follows χ = C / (T − $T_c$)."}
        </KeyIdea>
        <Traps
          items={[
            "**Paramagnetic** means unpaired electrons and weak attraction that vanishes with the field. **Ferromagnetic** means domains and permanent magnetisation.",
            "Ferro-, antiferro- and ferrimagnetic solids all become **paramagnetic** above their Curie or Néel temperature.",
            "**Ferrimagnetic**: opposite, unequal moments (net moment, Fe₃O₄). **Antiferromagnetic**: opposite, equal moments (net zero, MnO).",
            "A species with **all electrons paired** is diamagnetic. Count unpaired electrons from the electronic configuration, then use √(n(n+2)).",
          ]}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Worked
          q="Calculate the spin-only magnetic moment of Mn²⁺ and of Cu²⁺."
          steps={["Mn²⁺ is 3d⁵: five orbitals each with one electron, so n = 5.", "$\\mu = \\sqrt{5\\times7} = \\sqrt{35} = 5.92$ BM.", "Cu²⁺ is 3d⁹: four pairs and one unpaired electron, so n = 1.", "$\\mu = \\sqrt{1\\times3} = 1.73$ BM."]}
          answer="Mn²⁺: 5.92 BM; Cu²⁺: 1.73 BM"
        />
        <Worked
          q="Classify each as ferro-, antiferro- or ferrimagnetic: Fe₃O₄, MnO, CrO₂. What happens to Fe₃O₄ on heating above 858 K?"
          steps={["Fe₃O₄: opposing, unequal moments, so ferrimagnetic.", "MnO: opposing, equal moments, so antiferromagnetic.", "CrO₂: all moments parallel in domains, so ferromagnetic.", "Above its Curie temperature of about 858 K thermal motion destroys the order."]}
          answer="Fe₃O₄ ferri, MnO antiferro, CrO₂ ferro; Fe₃O₄ becomes paramagnetic above 858 K"
        />
        <Worked
          q="A solid is weakly attracted by a magnet, and loses all magnetism when the magnet is removed. Which class is it, and what does it contain?"
          steps={["Weak attraction that vanishes without the field is typical of paramagnetism.", "That needs permanent atomic moments, so unpaired electrons are present (random without the field)."]}
          answer="Paramagnetic; it contains unpaired electrons"
        />
        <Worked
          q="Which of V³⁺, Fe²⁺, Zn²⁺ and Ni²⁺ are paramagnetic? Rank by magnetic moment."
          steps={["V³⁺ is 3d², n = 2; Fe²⁺ is 3d⁶, n = 4; Zn²⁺ is 3d¹⁰, n = 0; Ni²⁺ is 3d⁸, n = 2.", "μ = √(n(n+2)): V³⁺ 2.83, Fe²⁺ 4.90, Zn²⁺ 0, Ni²⁺ 2.83 BM."]}
          answer="Paramagnetic: V³⁺, Fe²⁺, Ni²⁺ (Zn²⁺ is diamagnetic). Fe²⁺ > V³⁺ = Ni²⁺ > Zn²⁺"
        />
      </div>
    </Chapter>
  );
}
