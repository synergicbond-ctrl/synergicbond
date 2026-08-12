import React from "react";

type Tone = "cyan" | "violet" | "amber" | "emerald" | "rose" | "sky";
const toneStyles: Record<Tone, string> = {
  cyan:    "border-cyan-400/25   bg-cyan-400/[0.07]   text-cyan-200",
  violet:  "border-violet-400/25 bg-violet-400/[0.07] text-violet-200",
  amber:   "border-amber-400/25  bg-amber-400/[0.07]  text-amber-200",
  emerald: "border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-200",
  rose:    "border-rose-400/25   bg-rose-400/[0.07]   text-rose-200",
  sky:     "border-sky-400/25    bg-sky-400/[0.07]    text-sky-200",
};

function Section({
  index, title, subtitle, children,
}: {
  index: string; title: string; subtitle?: string; children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200">
          {index}
        </span>
        <div>
          <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">{title}</h2>
          {subtitle && <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-400">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-200 md:text-base">{children}</div>
    </section>
  );
}

function Formula({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-black/30 p-4 text-center">
      <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{label}</p>
      <div className="whitespace-nowrap font-mono text-lg font-black text-white md:text-xl">{children}</div>
    </div>
  );
}

function Lens({
  title, children, tone = "cyan", label = "Concept",
}: {
  title: string; children: React.ReactNode; tone?: Tone; label?: string;
}) {
  return (
    <aside className={`rounded-2xl border p-5 ${toneStyles[tone]}`}>
      <p className="text-xs font-black uppercase tracking-[0.2em]">{label}</p>
      <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-200">{children}</div>
    </aside>
  );
}

function DerivRow({ step, result }: { step: string; result: string }) {
  return (
    <div className="grid gap-2 border-b border-white/5 pb-3 pt-1 md:grid-cols-[1fr_2fr]">
      <span className="text-xs font-black uppercase tracking-wider text-slate-400">{step}</span>
      <span className="font-mono text-sm text-slate-100">{result}</span>
    </div>
  );
}

// ─── SVG 1: Four Fundamental Relations ───────────────────────────────────────
function FundamentalRelationsSVG() {
  return (
    <figure className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 680"
        role="img"
        aria-labelledby="p25-fund-title p25-fund-desc"
        className="h-auto w-full"
      >
        <title id="p25-fund-title">The four fundamental thermodynamic differential relations</title>
        <desc id="p25-fund-desc">
          A visual showing dU, dH, dA and dG with their natural variables and physical meaning.
        </desc>
        <defs>
          <linearGradient id="p25FundBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" />
            <stop offset="1" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="p25CardU" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#0e7490" />
            <stop offset="1" stopColor="#164e63" />
          </linearGradient>
          <linearGradient id="p25CardH" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#6d28d9" />
            <stop offset="1" stopColor="#4c1d95" />
          </linearGradient>
          <linearGradient id="p25CardA" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#b45309" />
            <stop offset="1" stopColor="#78350f" />
          </linearGradient>
          <linearGradient id="p25CardG" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#047857" />
            <stop offset="1" stopColor="#064e3b" />
          </linearGradient>
          <filter id="p25Shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.6" />
          </filter>
        </defs>

        <rect width="1200" height="680" rx="34" fill="url(#p25FundBg)" />
        <text x="600" y="52" fill="#f8fafc" fontSize="28" fontWeight="900" textAnchor="middle">
          THE FOUR FUNDAMENTAL DIFFERENTIAL RELATIONS
        </text>
        <text x="600" y="82" fill="#94a3b8" fontSize="19" textAnchor="middle">
          Natural variables in parentheses • conjugate pair structure
        </text>

        {/* U card */}
        <rect x="40" y="110" width="260" height="510" rx="28" fill="url(#p25CardU)" filter="url(#p25Shadow)" />
        <text x="170" y="158" fill="#a5f3fc" fontSize="22" fontWeight="900" textAnchor="middle">INTERNAL ENERGY</text>
        <text x="170" y="192" fill="#cffafe" fontSize="36" fontWeight="900" textAnchor="middle">U(S, V)</text>
        <line x1="60" y1="210" x2="280" y2="210" stroke="#22d3ee" strokeWidth="3" strokeOpacity="0.5" />
        <text x="170" y="250" fill="#e0f2fe" fontSize="20" fontWeight="700" textAnchor="middle">dU = T dS − P dV</text>
        <line x1="60" y1="270" x2="280" y2="270" stroke="#22d3ee" strokeWidth="2" strokeOpacity="0.3" />
        <text x="170" y="310" fill="#7dd3fc" fontSize="18" textAnchor="middle">(∂U/∂S)_V = T</text>
        <text x="170" y="340" fill="#7dd3fc" fontSize="18" textAnchor="middle">(∂U/∂V)_S = −P</text>
        <line x1="60" y1="360" x2="280" y2="360" stroke="#22d3ee" strokeWidth="2" strokeOpacity="0.3" />
        <text x="170" y="400" fill="#bae6fd" fontSize="18" textAnchor="middle">Natural variable: S</text>
        <text x="170" y="425" fill="#bae6fd" fontSize="18" textAnchor="middle">Natural variable: V</text>
        <line x1="60" y1="448" x2="280" y2="448" stroke="#22d3ee" strokeWidth="2" strokeOpacity="0.3" />
        <text x="170" y="488" fill="#e0f2fe" fontSize="17" textAnchor="middle">Max work for</text>
        <text x="170" y="510" fill="#e0f2fe" fontSize="17" textAnchor="middle">adiabatic reversible</text>
        <text x="170" y="532" fill="#e0f2fe" fontSize="17" textAnchor="middle">process = −dU</text>
        <rect x="60" y="560" width="220" height="36" rx="14" fill="#0c4a6e" />
        <text x="170" y="584" fill="#38bdf8" fontSize="18" fontWeight="900" textAnchor="middle">Isolated: ΔU = 0</text>

        {/* H card */}
        <rect x="320" y="110" width="260" height="510" rx="28" fill="url(#p25CardH)" filter="url(#p25Shadow)" />
        <text x="450" y="158" fill="#e9d5ff" fontSize="22" fontWeight="900" textAnchor="middle">ENTHALPY</text>
        <text x="450" y="192" fill="#f5f3ff" fontSize="36" fontWeight="900" textAnchor="middle">H(S, P)</text>
        <line x1="340" y1="210" x2="560" y2="210" stroke="#a78bfa" strokeWidth="3" strokeOpacity="0.5" />
        <text x="450" y="250" fill="#ede9fe" fontSize="20" fontWeight="700" textAnchor="middle">dH = T dS + V dP</text>
        <line x1="340" y1="270" x2="560" y2="270" stroke="#a78bfa" strokeWidth="2" strokeOpacity="0.3" />
        <text x="450" y="310" fill="#c4b5fd" fontSize="18" textAnchor="middle">(∂H/∂S)_P = T</text>
        <text x="450" y="340" fill="#c4b5fd" fontSize="18" textAnchor="middle">(∂H/∂P)_S = V</text>
        <line x1="340" y1="360" x2="560" y2="360" stroke="#a78bfa" strokeWidth="2" strokeOpacity="0.3" />
        <text x="450" y="400" fill="#ddd6fe" fontSize="18" textAnchor="middle">Natural variable: S</text>
        <text x="450" y="425" fill="#ddd6fe" fontSize="18" textAnchor="middle">Natural variable: P</text>
        <line x1="340" y1="448" x2="560" y2="448" stroke="#a78bfa" strokeWidth="2" strokeOpacity="0.3" />
        <text x="450" y="488" fill="#ede9fe" fontSize="17" textAnchor="middle">Heat at constant P</text>
        <text x="450" y="510" fill="#ede9fe" fontSize="17" textAnchor="middle">for closed system</text>
        <text x="450" y="532" fill="#ede9fe" fontSize="17" textAnchor="middle">q_P = ΔH</text>
        <rect x="340" y="560" width="220" height="36" rx="14" fill="#3b0764" />
        <text x="450" y="584" fill="#c4b5fd" fontSize="18" fontWeight="900" textAnchor="middle">Const. P: q = ΔH</text>

        {/* A card */}
        <rect x="600" y="110" width="260" height="510" rx="28" fill="url(#p25CardA)" filter="url(#p25Shadow)" />
        <text x="730" y="158" fill="#fde68a" fontSize="22" fontWeight="900" textAnchor="middle">HELMHOLTZ</text>
        <text x="730" y="192" fill="#fef3c7" fontSize="36" fontWeight="900" textAnchor="middle">A(T, V)</text>
        <line x1="620" y1="210" x2="840" y2="210" stroke="#fbbf24" strokeWidth="3" strokeOpacity="0.5" />
        <text x="730" y="250" fill="#fef9c3" fontSize="20" fontWeight="700" textAnchor="middle">dA = −S dT − P dV</text>
        <line x1="620" y1="270" x2="840" y2="270" stroke="#fbbf24" strokeWidth="2" strokeOpacity="0.3" />
        <text x="730" y="310" fill="#fde68a" fontSize="18" textAnchor="middle">(∂A/∂T)_V = −S</text>
        <text x="730" y="340" fill="#fde68a" fontSize="18" textAnchor="middle">(∂A/∂V)_T = −P</text>
        <line x1="620" y1="360" x2="840" y2="360" stroke="#fbbf24" strokeWidth="2" strokeOpacity="0.3" />
        <text x="730" y="400" fill="#fef3c7" fontSize="18" textAnchor="middle">Natural variable: T</text>
        <text x="730" y="425" fill="#fef3c7" fontSize="18" textAnchor="middle">Natural variable: V</text>
        <line x1="620" y1="448" x2="840" y2="448" stroke="#fbbf24" strokeWidth="2" strokeOpacity="0.3" />
        <text x="730" y="488" fill="#fef9c3" fontSize="17" textAnchor="middle">Max work at const T</text>
        <text x="730" y="510" fill="#fef9c3" fontSize="17" textAnchor="middle">w_max = ΔA</text>
        <text x="730" y="532" fill="#fef9c3" fontSize="17" textAnchor="middle">(all modes of work)</text>
        <rect x="620" y="560" width="220" height="36" rx="14" fill="#451a03" />
        <text x="730" y="584" fill="#fde68a" fontSize="18" fontWeight="900" textAnchor="middle">Const. T,V: ΔA ≤ 0</text>

        {/* G card */}
        <rect x="880" y="110" width="280" height="510" rx="28" fill="url(#p25CardG)" filter="url(#p25Shadow)" />
        <text x="1020" y="158" fill="#a7f3d0" fontSize="22" fontWeight="900" textAnchor="middle">GIBBS</text>
        <text x="1020" y="192" fill="#ecfdf5" fontSize="36" fontWeight="900" textAnchor="middle">G(T, P)</text>
        <line x1="900" y1="210" x2="1140" y2="210" stroke="#34d399" strokeWidth="3" strokeOpacity="0.5" />
        <text x="1020" y="250" fill="#d1fae5" fontSize="20" fontWeight="700" textAnchor="middle">dG = −S dT + V dP</text>
        <line x1="900" y1="270" x2="1140" y2="270" stroke="#34d399" strokeWidth="2" strokeOpacity="0.3" />
        <text x="1020" y="310" fill="#6ee7b7" fontSize="18" textAnchor="middle">(∂G/∂T)_P = −S</text>
        <text x="1020" y="340" fill="#6ee7b7" fontSize="18" textAnchor="middle">(∂G/∂P)_T = V</text>
        <line x1="900" y1="360" x2="1140" y2="360" stroke="#34d399" strokeWidth="2" strokeOpacity="0.3" />
        <text x="1020" y="400" fill="#d1fae5" fontSize="18" textAnchor="middle">Natural variable: T</text>
        <text x="1020" y="425" fill="#d1fae5" fontSize="18" textAnchor="middle">Natural variable: P</text>
        <line x1="900" y1="448" x2="1140" y2="448" stroke="#34d399" strokeWidth="2" strokeOpacity="0.3" />
        <text x="1020" y="488" fill="#ecfdf5" fontSize="17" textAnchor="middle">Non-PV max work</text>
        <text x="1020" y="510" fill="#ecfdf5" fontSize="17" textAnchor="middle">at const T, P:</text>
        <text x="1020" y="532" fill="#ecfdf5" fontSize="17" textAnchor="middle">w_max = ΔG</text>
        <rect x="900" y="560" width="220" height="36" rx="14" fill="#022c22" />
        <text x="1020" y="584" fill="#6ee7b7" fontSize="18" fontWeight="900" textAnchor="middle">Const. T,P: ΔG ≤ 0</text>
      </svg>
      <figcaption className="px-3 pt-3 text-center text-sm leading-6 text-slate-300">
        The four thermodynamic potentials, their natural variables, fundamental differential forms and response relationships.
      </figcaption>
    </figure>
  );
}

// ─── SVG 2: Maxwell Relations ────────────────────────────────────────────────
function MaxwellRelationsSVG() {
  return (
    <figure className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 640"
        role="img"
        aria-labelledby="p25-maxw-title p25-maxw-desc"
        className="h-auto w-full"
      >
        <title id="p25-maxw-title">The four principal Maxwell thermodynamic relations</title>
        <desc id="p25-maxw-desc">
          Each Maxwell relation is derived from the equality of mixed second partial derivatives of
          a thermodynamic potential. The relation, its source potential, and physical meaning are shown.
        </desc>
        <defs>
          <linearGradient id="p25MxBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" />
            <stop offset="1" stopColor="#020617" />
          </linearGradient>
        </defs>
        <rect width="1200" height="640" rx="34" fill="url(#p25MxBg)" />
        <text x="600" y="52" fill="#f8fafc" fontSize="28" fontWeight="900" textAnchor="middle">
          THE FOUR PRINCIPAL MAXWELL RELATIONS
        </text>
        <text x="600" y="80" fill="#94a3b8" fontSize="19" textAnchor="middle">
          Derived from equality of mixed second partial derivatives of each thermodynamic potential
        </text>

        {[
          {
            y: 115,
            source: "From U(S,V): dU = T dS − P dV",
            relation: "(∂T/∂V)_S = −(∂P/∂S)_V",
            meaning: "Adiabatic pressure sensitivity equals negative adiabatic temperature–volume sensitivity",
            color: "#22d3ee",
            bg: "#0c4a6e",
          },
          {
            y: 255,
            source: "From H(S,P): dH = T dS + V dP",
            relation: "(∂T/∂P)_S = (∂V/∂S)_P",
            meaning: "Adiabatic temperature–pressure response equals adiabatic volume–entropy response",
            color: "#a78bfa",
            bg: "#3b0764",
          },
          {
            y: 395,
            source: "From A(T,V): dA = −S dT − P dV",
            relation: "(∂S/∂V)_T = (∂P/∂T)_V",
            meaning: "Isothermal entropy–volume coupling equals isochoric pressure–temperature coefficient; connects entropy to measurable PVT data",
            color: "#fbbf24",
            bg: "#451a03",
          },
          {
            y: 520,
            source: "From G(T,P): dG = −S dT + V dP",
            relation: "−(∂S/∂P)_T = (∂V/∂T)_P",
            meaning: "Isothermal entropy–pressure response equals isobaric thermal expansion; entropy decreases with pressure if volume increases with temperature",
            color: "#34d399",
            bg: "#022c22",
          },
        ].map((row) => (
          <g key={row.relation}>
            <rect x="40" y={row.y} width="1120" height="105" rx="22" fill={row.bg} stroke={row.color} strokeWidth="3" />
            <text x="70" y={row.y + 28} fill={row.color} fontSize="18" fontWeight="900">{row.source}</text>
            <text x="70" y={row.y + 60} fill="#f8fafc" fontSize="22" fontWeight="900" fontFamily="monospace">{row.relation}</text>
            <text x="70" y={row.y + 90} fill="#cbd5e1" fontSize="17">{row.meaning}</text>
          </g>
        ))}
      </svg>
      <figcaption className="px-3 pt-3 text-center text-sm leading-6 text-slate-300">
        The four principal Maxwell relations derived from equality of mixed second derivatives of U, H, A and G.
      </figcaption>
    </figure>
  );
}

// ─── SVG: Joule Free Expansion vs Joule–Thomson Throttling ──────────────────
function JouleVsThrottlingSVG() {
  return (
    <figure className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="p25-joule-compare-title p25-joule-compare-desc"
        className="h-auto w-full"
      >
        <title id="p25-joule-compare-title">Joule free expansion compared with Joule–Thomson throttling</title>
        <desc id="p25-joule-compare-desc">
          A side-by-side comparison of a closed, insulated rigid vessel undergoing free expansion at constant
          internal energy and a steady-flow throttling tube undergoing an isenthalpic pressure drop.
        </desc>
        <defs>
          <linearGradient id="p25JCompareBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" />
            <stop offset="1" stopColor="#020617" />
          </linearGradient>
          <marker id="p25JCompareArrowCyan" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#22d3ee" />
          </marker>
          <marker id="p25JCompareArrowAmber" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#fbbf24" />
          </marker>
        </defs>
        <rect width="1200" height="720" rx="34" fill="url(#p25JCompareBg)" />
        <text x="600" y="48" fill="#f8fafc" fontSize="27" fontWeight="900" textAnchor="middle">
          TWO DISTINCT EXPERIMENTS: CONSTANT U VS CONSTANT H
        </text>
        <text x="600" y="77" fill="#94a3b8" fontSize="19" textAnchor="middle">
          Free expansion is a closed-system process; throttling is a steady-flow open-system process.
        </text>

        <rect x="34" y="106" width="548" height="570" rx="28" fill="#082f49" stroke="#22d3ee" strokeOpacity="0.55" strokeWidth="2" />
        <text x="308" y="148" fill="#a5f3fc" fontSize="23" fontWeight="900" textAnchor="middle">JOULE FREE EXPANSION</text>
        <text x="308" y="176" fill="#cffafe" fontSize="18" fontWeight="700" textAnchor="middle">CLOSED SYSTEM • INSULATED, RIGID VESSEL • CONSTANT U</text>

        <rect x="82" y="221" width="420" height="174" rx="14" fill="#0f172a" stroke="#e0f2fe" strokeWidth="4" />
        <rect x="91" y="230" width="193" height="156" rx="7" fill="#155e75" />
        <line x1="292" y1="226" x2="292" y2="390" stroke="#f8fafc" strokeWidth="4" strokeDasharray="10 7" />
        <circle cx="133" cy="278" r="8" fill="#67e8f9" /><circle cx="171" cy="315" r="8" fill="#67e8f9" />
        <circle cx="220" cy="270" r="8" fill="#67e8f9" /><circle cx="245" cy="339" r="8" fill="#67e8f9" />
        <circle cx="154" cy="350" r="8" fill="#67e8f9" /><circle cx="240" cy="308" r="8" fill="#67e8f9" />
        <text x="187" y="420" fill="#67e8f9" fontSize="18" fontWeight="700" textAnchor="middle">gas initially confined</text>
        <text x="397" y="300" fill="#cbd5e1" fontSize="23" fontWeight="900" textAnchor="middle">VACUUM</text>
        <text x="292" y="205" fill="#f8fafc" fontSize="18" fontWeight="700" textAnchor="middle">partition removed</text>
        <line x1="250" y1="440" x2="424" y2="440" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#p25JCompareArrowCyan)" />
        <text x="337" y="470" fill="#a5f3fc" fontSize="18" fontWeight="700" textAnchor="middle">spontaneous expansion into vacuum</text>
        <rect x="76" y="501" width="440" height="50" rx="15" fill="#083344" stroke="#22d3ee" strokeOpacity="0.55" />
        <text x="296" y="533" fill="#ecfeff" fontSize="22" fontWeight="900" textAnchor="middle">q = 0   •   w = 0   →   ΔU = 0</text>
        <text x="296" y="586" fill="#bae6fd" fontSize="20" fontWeight="700" textAnchor="middle">μ_J = (∂T/∂V)_U</text>
        <rect x="113" y="610" width="366" height="40" rx="14" fill="#164e63" />
        <text x="296" y="636" fill="#67e8f9" fontSize="19" fontWeight="900" textAnchor="middle">Ideal gas: ΔT = 0</text>

        <rect x="618" y="106" width="548" height="570" rx="28" fill="#451a03" stroke="#fbbf24" strokeOpacity="0.6" strokeWidth="2" />
        <text x="892" y="148" fill="#fde68a" fontSize="23" fontWeight="900" textAnchor="middle">JOULE–THOMSON THROTTLING</text>
        <text x="892" y="176" fill="#fef3c7" fontSize="18" fontWeight="700" textAnchor="middle">STEADY-FLOW OPEN SYSTEM • CONSTANT H</text>
        <path d="M670 260 H838 L864 230 L890 290 L916 230 L942 290 L968 230 L994 260 H1114" fill="none" stroke="#f8fafc" strokeWidth="5" />
        <path d="M670 344 H838 L864 374 L890 314 L916 374 L942 314 L968 374 L994 344 H1114" fill="none" stroke="#f8fafc" strokeWidth="5" />
        <rect x="854" y="247" width="126" height="110" rx="10" fill="#78350f" stroke="#fbbf24" strokeWidth="3" />
        <text x="917" y="293" fill="#fef3c7" fontSize="19" fontWeight="900" textAnchor="middle">POROUS</text>
        <text x="917" y="316" fill="#fef3c7" fontSize="19" fontWeight="900" textAnchor="middle">PLUG</text>
        <line x1="704" y1="302" x2="834" y2="302" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#p25JCompareArrowAmber)" />
        <line x1="1000" y1="302" x2="1080" y2="302" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#p25JCompareArrowAmber)" />
        <text x="750" y="231" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">P₁</text>
        <text x="750" y="255" fill="#fef3c7" fontSize="18" textAnchor="middle">high pressure</text>
        <text x="1055" y="231" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">P₂</text>
        <text x="1055" y="255" fill="#fef3c7" fontSize="18" textAnchor="middle">low pressure</text>
        <text x="917" y="412" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">P₁ &gt; P₂   •   flow: high P → low P</text>
        <rect x="670" y="439" width="444" height="48" rx="15" fill="#78350f" stroke="#fbbf24" strokeOpacity="0.6" />
        <text x="892" y="470" fill="#fef3c7" fontSize="22" fontWeight="900" textAnchor="middle">H₁ = H₂   •   ΔH = 0</text>
        <text x="892" y="522" fill="#fde68a" fontSize="20" fontWeight="700" textAnchor="middle">μ_JT = (∂T/∂P)_H</text>
        <text x="892" y="558" fill="#bbf7d0" fontSize="19" fontWeight="700" textAnchor="middle">μ_JT &gt; 0: cooling   •   μ_JT &lt; 0: heating   •   μ_JT = 0: no ΔT</text>
        <rect x="720" y="590" width="344" height="50" rx="14" fill="#713f12" />
        <text x="892" y="621" fill="#fde68a" fontSize="19" fontWeight="900" textAnchor="middle">Ideal gas: μ_JT = 0</text>
      </svg>
      <figcaption className="px-3 pt-3 text-center text-sm leading-6 text-slate-300">
        Joule free expansion conserves internal energy in an insulated rigid closed vessel, whereas a
        Joule–Thomson throttle conserves enthalpy for steady flow through a pressure restriction.
      </figcaption>
    </figure>
  );
}

// ─── SVG 3: Joule–Thomson Inversion Curve ────────────────────────────────────
function JouleThomsonSVG() {
  return (
    <figure className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="p25-jt-title p25-jt-desc"
        className="h-auto w-full"
      >
        <title id="p25-jt-title">Joule–Thomson inversion curve on a pressure–temperature diagram</title>
        <desc id="p25-jt-desc">
          The inversion curve separates the cooling region (inside curve) from the heating region (outside).
          Throttling from high pressure through the valve cools the gas only if the initial state is inside
          the inversion curve. The maximum inversion temperature and the inversion pressure at low T are shown.
        </desc>
        <defs>
          <linearGradient id="p25JTBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" />
            <stop offset="1" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="p25Cool" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#0891b2" stopOpacity="0.3" />
            <stop offset="1" stopColor="#0891b2" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="p25Heat" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#ef4444" stopOpacity="0.0" />
            <stop offset="1" stopColor="#ef4444" stopOpacity="0.2" />
          </linearGradient>
          <marker id="p25AxArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 Z" fill="#e2e8f0" />
          </marker>
          <marker id="p25CoolArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="p25HeatArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
        </defs>

        <rect width="1200" height="720" rx="34" fill="url(#p25JTBg)" />
        <text x="600" y="48" fill="#f8fafc" fontSize="28" fontWeight="900" textAnchor="middle">
          JOULE–THOMSON INVERSION CURVE
        </text>

        {/* Axes */}
        <line x1="110" y1="600" x2="1110" y2="600" stroke="#e2e8f0" strokeWidth="5" markerEnd="url(#p25AxArrow)" />
        <line x1="110" y1="600" x2="110" y2="80" stroke="#e2e8f0" strokeWidth="5" markerEnd="url(#p25AxArrow)" />
        <text x="1125" y="615" fill="#e2e8f0" fontSize="22" fontWeight="900">T</text>
        <text x="78" y="68" fill="#e2e8f0" fontSize="22" fontWeight="900">P</text>
        <text x="600" y="655" fill="#94a3b8" fontSize="19" textAnchor="middle">Temperature →</text>
        <text x="42" y="350" fill="#94a3b8" fontSize="19" textAnchor="middle" transform="rotate(-90 42 350)">Pressure →</text>

        {/* Inversion curve: a closed dome-shaped curve */}
        <path
          d="M190 580 C200 350 250 150 450 110 C650 80 850 180 950 350 C1010 450 980 560 940 580 Z"
          fill="url(#p25Cool)"
          stroke="#22d3ee"
          strokeWidth="5"
        />

        {/* Heating region label (outside) */}
        <text x="1020" y="220" fill="#fb7185" fontSize="20" fontWeight="900">HEATING</text>
        <text x="1020" y="246" fill="#fda4af" fontSize="18">μ_JT &lt; 0</text>
        <text x="1020" y="268" fill="#fda4af" fontSize="18">gas warms</text>
        <text x="1020" y="290" fill="#fda4af" fontSize="18">on throttle</text>

        {/* Cooling region label (inside) */}
        <text x="490" y="340" fill="#22d3ee" fontSize="22" fontWeight="900" textAnchor="middle">COOLING</text>
        <text x="490" y="372" fill="#a5f3fc" fontSize="19" textAnchor="middle">μ_JT &gt; 0</text>
        <text x="490" y="398" fill="#a5f3fc" fontSize="19" textAnchor="middle">gas cools on throttle</text>

        {/* Annotations */}
        <circle cx="450" cy="110" r="14" fill="#fbbf24" />
        <text x="458" y="88" fill="#fde68a" fontSize="18" fontWeight="900">T_inv,max</text>
        <text x="458" y="108" fill="#fde68a" fontSize="17">(maximum inversion temperature)</text>

        {/* μ_JT = 0 label on the curve */}
        <text x="700" y="96" fill="#22d3ee" fontSize="18" fontWeight="900">μ_JT = 0 on curve</text>
        <line x1="668" y1="98" x2="620" y2="105" stroke="#22d3ee" strokeWidth="3" />

        {/* Process arrow: throttling process from right to left */}
        <path d="M820 380 L620 380" stroke="#22d3ee" strokeWidth="4" markerEnd="url(#p25CoolArrow)" strokeDasharray="18 10" />
        <text x="720" y="365" fill="#a5f3fc" fontSize="18" textAnchor="middle">throttling (H = const)</text>

        <path d="M1050 250 L900 300" stroke="#fb7185" strokeWidth="4" markerEnd="url(#p25HeatArrow)" strokeDasharray="18 10" />
        <text x="1000" y="360" fill="#fda4af" fontSize="18" textAnchor="middle">throttling heats gas</text>

        {/* Low-T axis annotation */}
        <text x="190" y="625" fill="#22d3ee" fontSize="18" textAnchor="middle">P → 0 crossing</text>

        {/* Caption */}
        <rect x="200" y="660" width="800" height="40" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="2" />
        <text x="600" y="685" fill="#cbd5e1" fontSize="18" textAnchor="middle">
          For most real gases at room temperature, T &lt; T_inv,max so cooling occurs on throttling.
        </text>
      </svg>
      <figcaption className="px-3 pt-3 text-center text-sm leading-6 text-slate-300">
        The Joule–Thomson inversion boundary separating cooling and heating regions for real-gas throttling.
      </figcaption>
    </figure>
  );
}

// ─── Problem/Example Data ────────────────────────────────────────────────────
const workedExamples = [
  {
    level: "Foundation",
    tone: "cyan" as Tone,
    title: "Identifying natural variables",
    given: "Which thermodynamic potential has T and P as its natural variables?",
    method: "Natural variables are the variables held constant when the potential reaches a minimum (or is stationary) at equilibrium.",
    solution:
      "Gibbs energy G(T, P). From dG = −S dT + V dP, G is stationary with respect to internal changes at constant T and P. It is the correct potential for laboratory chemistry conducted at constant temperature and pressure.",
    trap: "Helmholtz energy A has T and V as natural variables, not T and P.",
  },
  {
    level: "JEE Main",
    tone: "violet" as Tone,
    title: "Maxwell relation application",
    given: "Show that (∂S/∂V)_T = (∂P/∂T)_V using the Maxwell relation from Helmholtz energy, and evaluate it for an ideal gas.",
    method: "Derive from dA = −S dT − P dV by equality of mixed partials.",
    solution:
      "From A(T,V): (∂²A/∂V∂T) = (∂²A/∂T∂V). " +
      "Left side: ∂/∂V[−S] = −(∂S/∂V)_T. " +
      "Right side: ∂/∂T[−P] = −(∂P/∂T)_V. " +
      "Therefore (∂S/∂V)_T = (∂P/∂T)_V. " +
      "For ideal gas PV = nRT: (∂P/∂T)_V = nR/V. " +
      "So (∂S/∂V)_T = nR/V > 0: isothermal expansion always increases entropy.",
    trap: "The sign matters — failing to track the minus signs in dA gives the wrong Maxwell relation.",
  },
  {
    level: "JEE Advanced",
    tone: "amber" as Tone,
    title: "Deriving the Joule–Thomson coefficient",
    given: "Derive μ_JT = (∂T/∂P)_H = (1/C_P)[T(∂V/∂T)_P − V] and evaluate for an ideal gas.",
    method: "Write T as a function of P and H, then use a cyclic relation plus the Maxwell relation from G.",
    solution:
      "Step 1 — Cyclic relation: (∂T/∂P)_H · (∂P/∂H)_T · (∂H/∂T)_P = −1. " +
      "Step 2 — (∂H/∂T)_P = C_P by definition. " +
      "Step 3 — (∂H/∂P)_T: use dH = T dS + V dP. At constant T: (∂H/∂P)_T = T(∂S/∂P)_T + V. " +
      "Step 4 — Maxwell from G: (∂S/∂P)_T = −(∂V/∂T)_P. " +
      "Step 5 — Substitute: (∂H/∂P)_T = −T(∂V/∂T)_P + V. " +
      "Step 6 — From cyclic relation: μ_JT = −(∂H/∂P)_T / C_P = [T(∂V/∂T)_P − V] / C_P. " +
      "Ideal gas: V = nRT/P → (∂V/∂T)_P = nR/P = V/T → T(∂V/∂T)_P = V → μ_JT = (V − V)/C_P = 0. " +
      "An ideal gas has zero Joule–Thomson coefficient; it neither cools nor heats on throttling.",
    trap: "μ_JT = 0 for ideal gas because there are no intermolecular forces. The sign of μ_JT for real gases depends on whether attractive or repulsive interactions dominate at the given state.",
  },
  {
    level: "Physical Chemistry",
    tone: "emerald" as Tone,
    title: "C_P − C_V general derivation",
    given:
      "Prove C_P − C_V = −T(∂P/∂V)_T[(∂V/∂T)_P]² and hence C_P − C_V = nR for an ideal gas.",
    method: "Start from the identity for H, write U as a function of T and V, use internal pressure.",
    solution:
      "Start: H = U + PV → (∂H/∂T)_P = (∂U/∂T)_P + P(∂V/∂T)_P. " +
      "Write U = U(T, V): (∂U/∂T)_P = (∂U/∂T)_V + (∂U/∂V)_T(∂V/∂T)_P = C_V + π_T(∂V/∂T)_P. " +
      "Internal pressure: π_T = (∂U/∂V)_T = T(∂P/∂T)_V − P (from Maxwell and first law). " +
      "Substituting: C_P = C_V + π_T(∂V/∂T)_P + P(∂V/∂T)_P = C_V + [T(∂P/∂T)_V − P + P](∂V/∂T)_P = C_V + T(∂P/∂T)_V(∂V/∂T)_P. " +
      "Cyclic rule: (∂P/∂T)_V = −(∂V/∂T)_P/(∂V/∂P)_T = (∂V/∂T)_P · [−1/(∂V/∂P)_T]. " +
      "So C_P − C_V = T(∂V/∂T)_P² · [−1/(∂V/∂P)_T] = −T(∂P/∂V)_T[(∂V/∂T)_P]² ≥ 0 (stable matter). " +
      "Ideal gas: (∂V/∂T)_P = nR/P and (∂P/∂V)_T = −P/V = −P²/(nRT). " +
      "C_P − C_V = −T · (−P²/nRT) · (nR/P)² = −T · (−P²/nRT) · n²R²/P² = nR. " +
      "Molar form: C_{P,m} − C_{V,m} = R.",
    trap: "The general result C_P − C_V = −T(∂P/∂V)_T[(∂V/∂T)_P]² is always ≥ 0 for stable matter because (∂P/∂V)_T ≤ 0 (mechanical stability). At the spinodal limit (∂P/∂V)_T → 0, C_P → ∞.",
  },
  {
    level: "Olympiad",
    tone: "rose" as Tone,
    title: "Inversion temperature of van der Waals gas",
    given:
      "For a van der Waals gas (P + a/V²)(V − b) = RT per mole, find the maximum inversion temperature T_inv at P → 0.",
    method: "Set μ_JT = 0, i.e., T(∂V/∂T)_P = V, and solve in the low-pressure limit.",
    solution:
      "From the van der Waals equation at low P: V ≈ RT/P + b − a/(RT). " +
      "(∂V/∂T)_P ≈ R/P + a/(RT²). " +
      "T(∂V/∂T)_P ≈ RT/P + a/(RT). " +
      "Set equal to V ≈ RT/P + b − a/(RT): " +
      "RT/P + a/(RT) = RT/P + b − a/(RT). " +
      "2a/(RT) = b → T_inv = 2a/(Rb). " +
      "For N₂: a = 1.370 L² atm mol⁻², b = 0.0387 L mol⁻¹ → T_inv = 2(1.370)/[(0.08206)(0.0387)] = 862 K. " +
      "The experimental maximum inversion temperature of N₂ is ~621 K; the van der Waals model overestimates it but gives the correct functional form.",
    trap: "At room temperature (298 K) N₂ is well below its inversion temperature, so it cools on throttling. H₂ has T_inv ≈ 202 K — at room temperature H₂ heats on throttling, which is why liquid-air precooling is needed before liquefying hydrogen by Joule–Thomson expansion.",
  },
];

const practiceProblems = [
  {
    q: "Write the natural variables for each of U, H, A, G.",
    a: "U(S,V); H(S,P); A(T,V); G(T,P).",
  },
  {
    q: "State the Maxwell relation derived from G(T,P).",
    a: "−(∂S/∂P)_T = (∂V/∂T)_P. Because entropy decreases with pressure and volume increases with temperature (for most systems), these responses are equal.",
  },
  {
    q: "Explain why C_P > C_V for any stable system.",
    a: "From C_P − C_V = −T(∂P/∂V)_T[(∂V/∂T)_P]². Mechanical stability requires (∂P/∂V)_T < 0, so the product is non-negative. Equality holds only for incompressible systems or at absolute zero.",
  },
  {
    q: "For an ideal gas, what is the Joule coefficient (∂T/∂V)_U? Derive it.",
    a: "μ_J = (∂T/∂V)_U = −(∂U/∂V)_T / C_V = −π_T/C_V. For ideal gas π_T = T(∂P/∂T)_V − P = T(nR/V) − P = P − P = 0. Therefore μ_J = 0: ideal gas temperature is unchanged by free expansion.",
  },
  {
    q: "A gas has (∂V/∂T)_P = αV and (∂V/∂P)_T = −κ_T V. Express C_P − C_V in terms of α and κ_T.",
    a: "C_P − C_V = TVα²/κ_T. This is the standard form using the isobaric expansion coefficient α and isothermal compressibility κ_T.",
  },
  {
    q: "At T = 400 K and P = 10 MPa, a gas has V_m = 2.80 × 10⁻³ m³ mol⁻¹ and (∂V/∂T)_P = 1.12 × 10⁻⁵ m³ mol⁻¹ K⁻¹. C_P,m = 35.0 J mol⁻¹ K⁻¹. Calculate μ_JT.",
    a: "T(∂V/∂T)_P = 400 × 1.12 × 10⁻⁵ = 4.48 × 10⁻³ m³ mol⁻¹. T(∂V/∂T)_P − V_m = 4.48 × 10⁻³ − 2.80 × 10⁻³ = 1.68 × 10⁻³ m³ mol⁻¹. μ_JT = 1.68 × 10⁻³ / 35.0 = 4.80 × 10⁻⁵ K Pa⁻¹ = 0.048 K bar⁻¹. Gas cools (μ_JT > 0).",
  },
  {
    q: "Why does liquefaction of hydrogen by Joule–Thomson expansion require pre-cooling but liquefaction of nitrogen does not (at room temperature)?",
    a: "The maximum Joule–Thomson inversion temperature of N₂ is about 621 K, well above room temperature, so N₂ at room temperature lies inside the inversion curve (μ_JT > 0) and cools on throttling. The maximum inversion temperature of H₂ is about 202 K, below room temperature. At 300 K, H₂ lies outside the inversion curve (μ_JT < 0) and heats on throttling. It must be pre-cooled below 202 K before Joule–Thomson expansion can produce further cooling.",
  },
];

export default function ThermodynamicsPart25LocalhostReview() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-10 md:px-8">

        {/* Header */}
        <header className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-fuchsia-300">Part 25</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
            Fundamental Equations, Maxwell Relations &amp; Response Coefficients
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Complete derivations of the four fundamental differential forms, all four principal Maxwell
            relations, the general heat-capacity relation, and the Joule–Thomson coefficient with inversion
            analysis.
          </p>
        </header>

        {/* Section 1: Four fundamental forms */}
        <Section index="1" title="The Four Fundamental Differential Relations"
          subtitle="Exact derived results — each follows from the combined First and Second Laws and the definition of each potential">
          <p>
            Every thermodynamic potential satisfies an exact differential. Each potential is defined to have
            particular <em>natural variables</em>: when those variables are held constant, the potential is
            minimised (or stationary) at equilibrium and no further information about entropy or energy is
            lost.
          </p>

          <FundamentalRelationsSVG />

          <h3 className="mt-4 font-black text-white">Derivation of dU = T dS − P dV</h3>
          <p className="text-slate-300">
            <strong>Classification:</strong> Exact derived result from the combined First and Second Laws.
          </p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="First Law" result="dU = δq + δw" />
            <DerivRow step="Reversible heat" result="δq_rev = T dS  (Second Law, Clausius)" />
            <DerivRow step="Reversible PV work" result="δw_rev = −P dV  (mechanical equilibrium)" />
            <DerivRow step="Combine" result="dU = T dS − P dV" />
            <DerivRow step="Natural variables" result="U is a function of S and V; both are extensive" />
            <DerivRow step="Partial derivatives" result="(∂U/∂S)_V = T  and  (∂U/∂V)_S = −P" />
          </div>
          <Lens title="Why the minus sign on P?" tone="amber">
            The work term is −P dV because positive volume change (expansion) means the system does work on
            the surroundings, reducing U. When S and V both increase, U may increase (T{">"} 0) or decrease
            (−P {"<"} 0 for P {">"} 0) depending on the relative magnitudes.
          </Lens>

          <h3 className="mt-6 font-black text-white">Derivation of dH = T dS + V dP</h3>
          <p className="text-slate-300">
            <strong>Classification:</strong> Exact derived result via Legendre transform of U.
          </p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="Definition" result="H = U + PV" />
            <DerivRow step="Differentiate" result="dH = dU + P dV + V dP" />
            <DerivRow step="Substitute dU" result="dH = (T dS − P dV) + P dV + V dP" />
            <DerivRow step="Simplify" result="dH = T dS + V dP" />
            <DerivRow step="Natural variables" result="H is a function of S and P" />
            <DerivRow step="Partials" result="(∂H/∂S)_P = T  and  (∂H/∂P)_S = V" />
          </div>

          <h3 className="mt-6 font-black text-white">Derivation of dA = −S dT − P dV</h3>
          <p className="text-slate-300">
            <strong>Classification:</strong> Exact derived result; A = U − TS (Legendre transform removing S).
          </p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="Definition" result="A = U − TS" />
            <DerivRow step="Differentiate" result="dA = dU − T dS − S dT" />
            <DerivRow step="Substitute dU" result="dA = (T dS − P dV) − T dS − S dT" />
            <DerivRow step="Simplify" result="dA = −S dT − P dV" />
            <DerivRow step="Natural variables" result="A is a function of T and V" />
            <DerivRow step="Partials" result="(∂A/∂T)_V = −S  and  (∂A/∂V)_T = −P" />
          </div>

          <h3 className="mt-6 font-black text-white">Derivation of dG = −S dT + V dP</h3>
          <p className="text-slate-300">
            <strong>Classification:</strong> Exact derived result; G = H − TS (Legendre transform removing S from H).
          </p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="Definition" result="G = H − TS = U + PV − TS" />
            <DerivRow step="Differentiate" result="dG = dH − T dS − S dT" />
            <DerivRow step="Substitute dH" result="dG = (T dS + V dP) − T dS − S dT" />
            <DerivRow step="Simplify" result="dG = −S dT + V dP" />
            <DerivRow step="Natural variables" result="G is a function of T and P — the laboratory variables" />
            <DerivRow step="Partials" result="(∂G/∂T)_P = −S  and  (∂G/∂P)_T = V" />
          </div>
        </Section>

        {/* Section 2: Maxwell Relations */}
        <Section index="2" title="The Four Principal Maxwell Relations"
          subtitle="Derived from equality of mixed second partial derivatives — each converts an unobservable entropy derivative into a measurable PVT quantity">

          <p>
            For any continuously differentiable function f(x,y), the mixed partial derivatives are equal:
            ∂²f/∂y∂x = ∂²f/∂x∂y. Applying this to each thermodynamic potential yields a Maxwell relation.
          </p>

          <MaxwellRelationsSVG />

          <h3 className="mt-4 font-black text-white">Derivation from U(S,V)</h3>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="From dU = T dS − P dV" result="M = T, N = −P for variables x = S, y = V" />
            <DerivRow step="Maxwell condition" result="(∂M/∂y)_x = (∂N/∂x)_y" />
            <DerivRow step="Left side" result="(∂T/∂V)_S" />
            <DerivRow step="Right side" result="(∂(−P)/∂S)_V = −(∂P/∂S)_V" />
            <DerivRow step="Result" result="(∂T/∂V)_S = −(∂P/∂S)_V" />
          </div>

          <h3 className="mt-4 font-black text-white">Derivation from H(S,P)</h3>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="From dH = T dS + V dP" result="M = T, N = V for variables x = S, y = P" />
            <DerivRow step="Left side" result="(∂T/∂P)_S" />
            <DerivRow step="Right side" result="(∂V/∂S)_P" />
            <DerivRow step="Result" result="(∂T/∂P)_S = (∂V/∂S)_P" />
          </div>

          <h3 className="mt-4 font-black text-white">Derivation from A(T,V) — Most useful for PVT work</h3>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="From dA = −S dT − P dV" result="M = −S, N = −P for variables x = T, y = V" />
            <DerivRow step="Left side" result="(∂(−S)/∂V)_T = −(∂S/∂V)_T" />
            <DerivRow step="Right side" result="(∂(−P)/∂T)_V = −(∂P/∂T)_V" />
            <DerivRow step="Result" result="(∂S/∂V)_T = (∂P/∂T)_V" />
            <DerivRow step="Physical use" result="Entropy change with volume = isochoric pressure–temperature coefficient (measurable)" />
          </div>

          <h3 className="mt-4 font-black text-white">Derivation from G(T,P) — Most useful for chemistry</h3>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="From dG = −S dT + V dP" result="M = −S, N = V for variables x = T, y = P" />
            <DerivRow step="Left side" result="(∂(−S)/∂P)_T = −(∂S/∂P)_T" />
            <DerivRow step="Right side" result="(∂V/∂T)_P" />
            <DerivRow step="Result" result="−(∂S/∂P)_T = (∂V/∂T)_P  or  (∂S/∂P)_T = −(∂V/∂T)_P" />
            <DerivRow step="Physical use" result="Compression decreases entropy when volume increases with temperature (the common case)" />
          </div>
        </Section>

        {/* Section 3: Heat capacity relation */}
        <Section index="3" title="General Heat-Capacity Relation C_P − C_V"
          subtitle="Exact derived result relating the two heat capacities to measurable PVT response functions">

          <p>
            This derivation proceeds without assumptions about the equation of state. It applies to any
            homogeneous closed system in a stable equilibrium state.
          </p>

          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="Write U(T,V)" result="dU = (∂U/∂T)_V dT + (∂U/∂V)_T dV = C_V dT + π_T dV" />
            <DerivRow step="Internal pressure" result="π_T = (∂U/∂V)_T = T(∂P/∂T)_V − P  [from Maxwell + 1st law]" />
            <DerivRow step="H = U + PV → C_P" result="C_P = (∂H/∂T)_P = (∂U/∂T)_P + P(∂V/∂T)_P" />
            <DerivRow step="(∂U/∂T)_P along isobar" result="= C_V + π_T(∂V/∂T)_P" />
            <DerivRow step="Combine" result="C_P = C_V + (π_T + P)(∂V/∂T)_P = C_V + T(∂P/∂T)_V(∂V/∂T)_P" />
            <DerivRow step="Cyclic rule" result="(∂P/∂T)_V = −(∂V/∂T)_P / (∂V/∂P)_T = (∂V/∂T)_P · [−(∂P/∂V)_T]" />
            <DerivRow step="Final general form" result="C_P − C_V = −T(∂P/∂V)_T [(∂V/∂T)_P]²" />
            <DerivRow step="Always ≥ 0" result="Mechanical stability requires (∂P/∂V)_T ≤ 0, so −(∂P/∂V)_T ≥ 0 ✓" />
          </div>

          <h3 className="mt-4 font-black text-white">Convenient compact form using α and κ_T</h3>
          <Formula label="Isobaric expansion coefficient">α = (1/V)(∂V/∂T)_P</Formula>
          <Formula label="Isothermal compressibility">κ_T = −(1/V)(∂V/∂P)_T</Formula>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="Rewrite (∂V/∂T)_P" result="= αV" />
            <DerivRow step="Rewrite −(∂P/∂V)_T" result="= 1/(κ_T V)" />
            <DerivRow step="Substitute" result="C_P − C_V = T · (1/κ_T V) · (αV)² = TVα²/κ_T" />
          </div>
          <Formula label="General result">C_P − C_V = TVα²/κ_T</Formula>

          <h3 className="mt-4 font-black text-white">Ideal-gas special case: C_P − C_V = nR</h3>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="Ideal gas V = nRT/P" result="(∂V/∂T)_P = nR/P" />
            <DerivRow step="α" result="= (1/V)(nR/P) = nR/(PV) = 1/T" />
            <DerivRow step="(∂V/∂P)_T = −nRT/P²" result="κ_T = (1/V)(nRT/P²) = 1/P" />
            <DerivRow step="Substitute into TVα²/κ_T" result="= T·V·(1/T²)/(1/P) = T·V·P/(T²) = PV/T = nR" />
            <DerivRow step="Result" result="C_P − C_V = nR  →  C_{P,m} − C_{V,m} = R" />
          </div>
          <Lens title="Physical meaning" tone="emerald">
            At constant pressure, some heat goes into PV expansion work (nR per mole per kelvin) rather than
            raising temperature, so C_P is always larger than C_V. For liquids and solids α is small and
            κ_T is small, so C_P ≈ C_V; for gases the difference is significant.
          </Lens>
        </Section>

        {/* Section 4: Joule Coefficient */}
        <Section index="4" title="Joule Coefficient"
          subtitle="Measures temperature change during free expansion at constant internal energy">

          <p>
            In the Joule experiment, a gas expands into a vacuum. No work is done (P_ext = 0) and if the
            container is insulated, no heat crosses the boundary. Therefore dU = 0: the process is at
            constant internal energy.
          </p>
          <Formula label="Definition — exact derived result">μ_J = (∂T/∂V)_U</Formula>

          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="Cyclic relation in U" result="(∂T/∂V)_U · (∂V/∂U)_T · (∂U/∂T)_V = −1" />
            <DerivRow step="(∂U/∂T)_V = C_V" result="μ_J = −(∂U/∂V)_T / C_V = −π_T / C_V" />
            <DerivRow step="Internal pressure" result="π_T = T(∂P/∂T)_V − P" />
            <DerivRow step="Ideal gas: (∂P/∂T)_V = nR/V = P/T" result="π_T = T(P/T) − P = P − P = 0" />
            <DerivRow step="Ideal gas result" result="μ_J = 0: temperature unchanged by free expansion ✓" />
          </div>

          <Lens title="Real gas behaviour" tone="violet">
            For a real gas at moderate temperatures, intermolecular attractions are dominant. As the gas
            expands against these attractive forces, it gains potential energy, which must come from kinetic
            energy — so the gas cools (π_T {">"} 0, μ_J {"<"} 0). At very high temperatures or low densities,
            repulsive interactions dominate and the gas may warm.
          </Lens>

          <JouleVsThrottlingSVG />
        </Section>

        {/* Section 5: Joule–Thomson Coefficient */}
        <Section index="5" title="Joule–Thomson Coefficient"
          subtitle="Temperature change during throttling (isenthalpic process) — the basis of gas liquefaction">

          <p>
            In a throttling process (Joule–Thomson expansion), gas flows steadily from high pressure to low
            pressure through a porous plug or valve. The process is isenthalpic: H is constant.
          </p>
          <Formula label="Definition — exact derived result">μ_JT = (∂T/∂P)_H</Formula>

          <h3 className="mt-4 font-black text-white">Complete Derivation</h3>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="Cyclic relation at constant H" result="(∂T/∂P)_H · (∂P/∂H)_T · (∂H/∂T)_P = −1" />
            <DerivRow step="(∂H/∂T)_P = C_P" result="μ_JT = −(1/C_P)(∂H/∂P)_T" />
            <DerivRow step="Need (∂H/∂P)_T" result="From dH = T dS + V dP: (∂H/∂P)_T = T(∂S/∂P)_T + V" />
            <DerivRow step="Maxwell from G" result="(∂S/∂P)_T = −(∂V/∂T)_P" />
            <DerivRow step="Substitute" result="(∂H/∂P)_T = −T(∂V/∂T)_P + V" />
            <DerivRow step="Final result" result="μ_JT = (1/C_P)[T(∂V/∂T)_P − V]" />
          </div>

          <Formula label="Joule–Thomson coefficient">μ_JT = (∂T/∂P)_H = (1/C_P)[T(∂V/∂T)_P − V]</Formula>

          <h3 className="mt-4 font-black text-white">Inversion Condition and Ideal-Gas Result</h3>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="Inversion condition" result="μ_JT = 0 when T(∂V/∂T)_P = V" />
            <DerivRow step="Cooling region" result="μ_JT > 0: gas cools when P drops (inside inversion curve)" />
            <DerivRow step="Heating region" result="μ_JT < 0: gas warms when P drops (outside inversion curve)" />
            <DerivRow step="Ideal gas: V = nRT/P" result="T(∂V/∂T)_P = T(nR/P) = nRT/P = V → μ_JT = 0" />
          </div>

          <Lens title="Why ideal gas has zero JT coefficient" tone="cyan">
            T(∂V/∂T)_P = V is identically true for an ideal gas, making the numerator zero. An ideal gas
            has no intermolecular potential energy, so work done against such forces during expansion is
            zero. There is no mechanism to convert kinetic energy into potential energy, so temperature
            cannot change.
          </Lens>

          <h3 className="mt-4 font-black text-white">Molecular Interpretation</h3>
          <p>
            A real gas below its inversion temperature has net attractive intermolecular forces. Throttling
            decreases pressure and increases average intermolecular separation. Overcoming these attractive
            forces requires energy; this comes from kinetic energy, so the gas cools.
          </p>
          <p>
            Above the inversion temperature, repulsive short-range forces dominate. Throttling releases
            stored repulsive potential energy as kinetic energy — the gas heats.
          </p>

          <JouleThomsonSVG />

          <h3 className="mt-4 font-black text-white">Van der Waals Inversion Temperature (Low-Pressure Limit)</h3>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <DerivRow step="vdW at low P" result="V ≈ RT/P + b − a/(RT) per mole" />
            <DerivRow step="(∂V/∂T)_P low P" result="≈ R/P + a/(RT²)" />
            <DerivRow step="T(∂V/∂T)_P" result="≈ RT/P + a/(RT)" />
            <DerivRow step="V" result="≈ RT/P + b − a/(RT)" />
            <DerivRow step="T(∂V/∂T)_P − V" result="= a/(RT) − b + a/(RT) = 2a/(RT) − b" />
            <DerivRow step="μ_JT = 0 → T_inv" result="2a/(RT_inv) − b = 0  →  T_inv = 2a/(Rb)" />
            <DerivRow step="Cooling when T &lt; T_inv" result="and inside the inversion curve at finite P" />
          </div>
          <Formula label="Maximum Joule–Thomson inversion temperature (van der Waals, P→0)">
            T_inv = 2a/(Rb)
          </Formula>
        </Section>

        {/* Section 6: Worked Examples */}
        <Section index="6" title="Worked Examples" subtitle="Foundation through Olympiad level">
          <div className="space-y-4">
            {workedExamples.map((ex) => (
              <article
                key={ex.title}
                className={`rounded-2xl border p-5 ${toneStyles[ex.tone]}`}
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full border px-2 py-0.5 text-xs font-black tracking-wider">{ex.level}</span>
                  <h3 className="font-black text-white">{ex.title}</h3>
                </div>
                <p className="mt-3 font-semibold text-slate-100">{ex.given}</p>
                <p className="mt-2 text-sm text-slate-300"><span className="font-black text-slate-200">Method: </span>{ex.method}</p>
                <div className="mt-3 rounded-xl bg-black/20 p-3 text-sm leading-6 text-slate-100">{ex.solution}</div>
                <p className="mt-2 text-xs text-amber-300"><span className="font-black">Concept trap: </span>{ex.trap}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Section 7: Concept Traps */}
        <Section index="7" title="Concept Traps">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              ["G has T,P as natural variables", "G is minimised at equilibrium under constant-T, constant-P constraints — the normal laboratory situation. Helmholtz A is the potential for constant-T, constant-V constraints."],
              ["Maxwell relations equate partials of different functions", "Each Maxwell relation equates two second derivatives of the SAME potential. You cannot mix (∂T/∂V)_S from U with (∂S/∂P)_T from G."],
              ["μ_JT = 0 for ideal gas does NOT mean μ_JT is zero at all states", "For real gases at moderate T and P, μ_JT > 0 (cooling on throttle). Only above T_inv or outside the inversion curve does μ_JT < 0."],
              ["C_P − C_V = nR is exact only for ideal gases", "For liquids and solids, C_P ≈ C_V because α² is very small. For water near 4 °C, α ≈ 0 so C_P − C_V ≈ 0 at that temperature."],
              ["(∂T/∂V)_U is the Joule coefficient; (∂T/∂P)_H is the Joule–Thomson coefficient", "These measure different experimental conditions: free expansion vs. steady throttling."],
              ["The inversion curve is NOT the boiling curve", "The inversion curve exists in the gas phase above the critical point and has no direct connection to the liquid–vapour boundary."],
            ].map(([title, body]) => (
              <aside key={String(title)} className="rounded-2xl border border-amber-400/25 bg-amber-400/[0.06] p-4">
                <h3 className="font-black text-amber-200">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{String(body)}</p>
              </aside>
            ))}
          </div>
        </Section>

        {/* Section 8: Practice Problems */}
        <section className="rounded-[2rem] border border-amber-400/20 bg-amber-400/[0.04] p-5 md:p-8">
          <h2 className="text-2xl font-black text-amber-200">Practice Problems</h2>
          <div className="mt-5 space-y-4">
            {practiceProblems.map((p, i) => (
              <article key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="font-semibold text-white">
                  <span className="mr-2 text-amber-300">{i + 1}.</span>{p.q}
                </p>
                <div className="mt-3 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3">
                  <p className="text-xs font-black uppercase tracking-wider text-emerald-300">Answer</p>
                  <p className="mt-1 text-sm leading-6 text-slate-200">{p.a}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="rounded-[2rem] border border-white/10 bg-slate-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-300">Part 25 Complete</p>
          <h2 className="mt-2 text-2xl font-black text-white">Key results</h2>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>• dU = T dS − P dV  (natural variables S, V)</li>
            <li>• dH = T dS + V dP  (natural variables S, P)</li>
            <li>• dA = −S dT − P dV  (natural variables T, V)</li>
            <li>• dG = −S dT + V dP  (natural variables T, P)</li>
            <li>• Four Maxwell relations from second mixed partials of U, H, A, G</li>
            <li>• C_P − C_V = TVα²/κ_T = nR for ideal gas</li>
            <li>• μ_J = −π_T/C_V = 0 for ideal gas</li>
            <li>• μ_JT = [T(∂V/∂T)_P − V]/C_P = 0 for ideal gas</li>
            <li>• T_inv = 2a/(Rb) for van der Waals gas at P → 0</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
