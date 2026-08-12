import React from "react";

import ThermodynamicsIntegratedEnrichment from "./ThermodynamicsIntegratedEnrichment";
import ThermodynamicsCompleteDerivations from "./ThermodynamicsCompleteDerivations";

type Tone = "cyan" | "violet" | "amber" | "emerald" | "rose" | "sky";

const toneMap: Record<Tone, string> = {
  cyan: "border-cyan-400/25 bg-cyan-400/[0.07] text-cyan-200",
  violet: "border-violet-400/25 bg-violet-400/[0.07] text-violet-200",
  amber: "border-amber-400/25 bg-amber-400/[0.07] text-amber-200",
  emerald: "border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-200",
  rose: "border-rose-400/25 bg-rose-400/[0.07] text-rose-200",
  sky: "border-sky-400/25 bg-sky-400/[0.07] text-sky-200",
};

function Chip({ children, tone = "cyan" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold tracking-wide ${toneMap[tone]}`}>
      {children}
    </span>
  );
}

function Section({
  index,
  title,
  subtitle,
  children,
}: {
  index: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
      <div className="flex items-start gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200">
          {index}
        </span>
        <div>
          <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-1 text-sm leading-6 text-slate-400">{subtitle}</p> : null}
        </div>
      </div>
      <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-200 md:text-base">{children}</div>
    </section>
  );
}

function ConceptLens({
  title,
  children,
  tone = "cyan",
}: {
  title: string;
  children: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <aside className={`rounded-2xl border p-5 ${toneMap[tone]}`}>
      <p className="text-xs font-black uppercase tracking-[0.2em]">Concept lens</p>
      <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-200">{children}</div>
    </aside>
  );
}

function Formula({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-black/30 p-4 text-center">
      {label ? (
        <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{label}</p>
      ) : null}
      <div className="whitespace-nowrap font-mono text-lg font-black text-white md:text-xl">{children}</div>
    </div>
  );
}

function RouteAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 650"
        role="img"
        aria-labelledby="route-title route-description"
        className="h-auto w-full"
      >
        <title id="route-title">Animated comparison of state and path functions</title>
        <desc id="route-description">
          Several routes connect the same initial and final thermodynamic states.
          A state-function change is identical for all routes, while heat and work may differ.
        </desc>

        <defs>
          <linearGradient id="routeBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#082f49" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <marker id="routeArrowCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="routeArrowAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
          <marker id="routeArrowPink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#f472b6" />
          </marker>
        </defs>

        <rect x="0" y="0" width="1200" height="650" rx="34" fill="url(#routeBg)" />

        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          SAME STATES • DIFFERENT ROUTES
        </text>

        <circle cx="165" cy="325" r="62" fill="#0f172a" stroke="#34d399" strokeWidth="4.5" />
        <text x="165" y="314" fill="#a7f3d0" fontSize="30" fontWeight="900" textAnchor="middle">A</text>
        <text x="165" y="346" fill="#cbd5e1" fontSize="17" textAnchor="middle">initial state</text>

        <circle cx="1035" cy="325" r="62" fill="#0f172a" stroke="#a78bfa" strokeWidth="4.5" />
        <text x="1035" y="314" fill="#ddd6fe" fontSize="30" fontWeight="900" textAnchor="middle">B</text>
        <text x="1035" y="346" fill="#cbd5e1" fontSize="17" textAnchor="middle">final state</text>

        <path
          id="upperRoute"
          d="M230 290 C430 75 770 75 970 290"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="5"
          markerEnd="url(#routeArrowCyan)"
        />
        <path
          id="middleRoute"
          d="M230 325 H970"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="5"
          markerEnd="url(#routeArrowAmber)"
        />
        <path
          id="lowerRoute"
          d="M230 360 C430 575 770 575 970 360"
          fill="none"
          stroke="#f472b6"
          strokeWidth="5"
          markerEnd="url(#routeArrowPink)"
        />

        <circle r="13" fill="#67e8f9">
          <animateMotion dur="4.2s" repeatCount="indefinite">
            <mpath href="#upperRoute" />
          </animateMotion>
        </circle>
        <circle r="13" fill="#fde047">
          <animateMotion dur="3.2s" repeatCount="indefinite">
            <mpath href="#middleRoute" />
          </animateMotion>
        </circle>
        <circle r="13" fill="#f9a8d4">
          <animateMotion dur="4.8s" repeatCount="indefinite">
            <mpath href="#lowerRoute" />
          </animateMotion>
        </circle>

        <text x="600" y="112" fill="#a5f3fc" fontSize="21" textAnchor="middle">
          Route I: q₁, w₁
        </text>
        <text x="600" y="300" fill="#fde68a" fontSize="21" textAnchor="middle">
          Route II: q₂, w₂
        </text>
        <text x="600" y="558" fill="#fbcfe8" fontSize="21" textAnchor="middle">
          Route III: q₃, w₃
        </text>

        <rect x="300" y="585" width="600" height="44" rx="20" fill="#0f172a" stroke="#34d399" />
        <text x="600" y="614" fill="#a7f3d0" fontSize="20" fontWeight="800" textAnchor="middle">
          ΔΦ = ΦB − ΦA is identical for every route; q and w need not be.
        </text>
      </svg>
    </div>
  );
}

function DifferentialVisual() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 620"
        role="img"
        aria-labelledby="diff-title diff-description"
        className="h-auto w-full"
      >
        <title id="diff-title">Exact and inexact differential visual comparison</title>
        <desc id="diff-description">
          An exact differential behaves like elevation on a landscape: the net change depends only on endpoints.
          An inexact differential accumulates according to the route.
        </desc>

        <defs>
          <radialGradient id="hill" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="55%" stopColor="#164e63" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0" />
          </radialGradient>
          <marker id="diffArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
        </defs>

        <rect x="0" y="0" width="1200" height="620" rx="34" fill="#020617" />

        <text x="300" y="55" fill="#a5f3fc" fontSize="30" fontWeight="900" textAnchor="middle">
          EXACT DIFFERENTIAL dΦ
        </text>
        <ellipse cx="300" cy="305" rx="250" ry="225" fill="url(#hill)" />
        <ellipse cx="300" cy="320" rx="205" ry="150" fill="none" stroke="#22d3ee" strokeWidth="5" opacity="0.8" />
        <ellipse cx="300" cy="320" rx="150" ry="100" fill="none" stroke="#67e8f9" strokeWidth="5" opacity="0.8" />
        <ellipse cx="300" cy="320" rx="90" ry="55" fill="none" stroke="#a5f3fc" strokeWidth="5" opacity="0.9" />
        <circle cx="125" cy="405" r="13" fill="#34d399" />
        <circle cx="385" cy="225" r="13" fill="#a78bfa" />
        <path d="M140 395 Q260 190 370 230" fill="none" stroke="#fbbf24" strokeWidth="4" markerEnd="url(#diffArrow)" />
        <path d="M140 410 Q350 500 380 240" fill="none" stroke="#f472b6" strokeWidth="4" strokeDasharray="14 10" />
        <text x="300" y="530" fill="#a7f3d0" fontSize="20" textAnchor="middle">
          net change = final level − initial level
        </text>
        <text x="300" y="562" fill="#cbd5e1" fontSize="18" textAnchor="middle">
          route shape does not matter
        </text>

        <line x1="600" y1="80" x2="600" y2="570" stroke="#334155" strokeWidth="4" />

        <text x="900" y="55" fill="#fbcfe8" fontSize="30" fontWeight="900" textAnchor="middle">
          INEXACT DIFFERENTIAL δX
        </text>
        <rect x="690" y="130" width="420" height="340" rx="30" fill="#0f172a" stroke="#f472b6" strokeWidth="6" />
        <path d="M735 390 C790 140 1020 140 1070 390" fill="none" stroke="#fbbf24" strokeWidth="5" />
        <path d="M735 390 C805 520 1010 520 1070 390" fill="none" stroke="#f472b6" strokeWidth="5" />
        <path d="M735 390 H1070" fill="none" stroke="#22d3ee" strokeWidth="5" />
        <circle cx="735" cy="390" r="14" fill="#34d399" />
        <circle cx="1070" cy="390" r="14" fill="#a78bfa" />
        <text x="900" y="530" fill="#f9a8d4" fontSize="20" textAnchor="middle">
          accumulated transfer depends on the route
        </text>
        <text x="900" y="562" fill="#cbd5e1" fontSize="18" textAnchor="middle">
          examples: δq and δw
        </text>
      </svg>
    </div>
  );
}

type TestCardProps = {
  title: string;
  expression: React.ReactNode;
  result: string;
  tone: Tone;
  children: React.ReactNode;
};

function TestCard({ title, expression, result, tone, children }: TestCardProps) {
  return (
    <article className={`rounded-3xl border p-5 ${toneMap[tone]}`}>
      <p className="text-xs font-black uppercase tracking-[0.2em]">{result}</p>
      <h3 className="mt-2 text-xl font-black text-white">{title}</h3>
      <div className="mt-4 rounded-xl bg-black/25 p-4 text-center font-mono text-base font-black text-white">
        {expression}
      </div>
      <div className="mt-3 text-sm leading-6 text-slate-200">{children}</div>
    </article>
  );
}

function PVPathVisual() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 650"
        role="img"
        aria-labelledby="pv-title pv-description"
        className="h-auto w-full"
      >
        <title id="pv-title">Pressure volume paths showing path-dependent work</title>
        <desc id="pv-description">
          Two stepwise paths join the same initial and final states but enclose different areas,
          so pressure-volume work differs.
        </desc>

        <defs>
          <marker id="pvArrowCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="pvArrowPink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#f472b6" />
          </marker>
          <pattern id="hatchCyan" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#22d3ee" strokeWidth="4" opacity="0.35" />
          </pattern>
          <pattern id="hatchPink" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#f472b6" strokeWidth="4" opacity="0.35" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="1200" height="650" rx="34" fill="#020617" />

        <line x1="160" y1="530" x2="1080" y2="530" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="160" y1="530" x2="160" y2="85" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1110" y="540" fill="#e2e8f0" fontSize="24">V</text>
        <text x="135" y="75" fill="#e2e8f0" fontSize="24">P</text>

        <circle cx="330" cy="170" r="13" fill="#34d399" />
        <circle cx="900" cy="420" r="13" fill="#a78bfa" />
        <text x="300" y="145" fill="#a7f3d0" fontSize="21" fontWeight="800">A(P₁,V₁)</text>
        <text x="915" y="455" fill="#ddd6fe" fontSize="21" fontWeight="800">B(P₂,V₂)</text>

        <rect x="330" y="170" width="570" height="360" fill="url(#hatchCyan)" />
        <path d="M330 170 H900 V420" fill="none" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#pvArrowCyan)" />
        <text x="610" y="145" fill="#a5f3fc" fontSize="21" textAnchor="middle">
          Path I: expand at P₁, then lower pressure
        </text>

        <rect x="330" y="420" width="570" height="110" fill="url(#hatchPink)" />
        <path d="M330 170 V420 H900" fill="none" stroke="#f472b6" strokeWidth="5" markerEnd="url(#pvArrowPink)" />
        <text x="610" y="595" fill="#f9a8d4" fontSize="21" textAnchor="middle">
          Path II: lower pressure, then expand at P₂
        </text>

        <text x="600" y="55" fill="#f8fafc" fontSize="29" fontWeight="900" textAnchor="middle">
          DIFFERENT AREA UNDER THE PATH → DIFFERENT WORK
        </text>
      </svg>
    </div>
  );
}

const problems = [
  {
    title: "Concept Application 1 — exactness test",
    question:
      "For the differential form dΦ = (2xy + 3)dx + (x² + 4y)dy, determine whether Φ is a state function.",
    solution:
      "M = 2xy + 3 and N = x² + 4y. Since (∂M/∂y)x = 2x and (∂N/∂x)y = 2x, the form is exact on an ordinary simply connected domain. Hence Φ is a state function. Integration gives Φ = x²y + 3x + 2y² + constant.",
  },
  {
    title: "Concept Application 2 — inexact differential",
    question:
      "Test whether ω = y dx − x dy is exact.",
    solution:
      "M = y and N = −x. Here ∂M/∂y = 1, while ∂N/∂x = −1. They are unequal, so ω is not exact and its line integral generally depends on the path.",
  },
  {
    title: "Concept Application 3 — ideal-gas pressure",
    question:
      "Show mathematically that pressure P = nRT/V is a state function of V and T.",
    solution:
      "dP = [−nRT/V²]dV + [nR/V]dT. The cross derivatives are ∂/∂T(−nRT/V²) = −nR/V² and ∂/∂V(nR/V) = −nR/V². They are equal, so dP is exact.",
  },
  {
    title: "Concept Application 4 — real-gas pressure",
    question:
      "For a van der Waals gas, P = nRT/(V−nb) − an²/V². Verify that P is a state function of V and T.",
    solution:
      "The dV coefficient is −nRT/(V−nb)² + 2an²/V³, and the dT coefficient is nR/(V−nb). Differentiating the first with respect to T and the second with respect to V gives the same result, −nR/(V−nb)². Hence dP is exact.",
  },
  {
    title: "Concept Application 5 — path work",
    question:
      "A gas goes from A(P₁,V₁) to B(P₂,V₂). Compare work for path I: isobaric expansion at P₁ followed by isochoric pressure change, and path II: isochoric pressure change followed by isobaric expansion at P₂.",
    solution:
      "Using the chemistry convention, wI = −P₁(V₂−V₁) and wII = −P₂(V₂−V₁). If P₁ ≠ P₂, the works differ although the endpoints are identical. Work is therefore a path function.",
  },
  {
    title: "Concept Application 6 — cyclic reasoning",
    question:
      "A system completes a cycle. Which statements are necessarily true: ΔU = 0, q = 0, w = 0, and q + w = 0?",
    solution:
      "Because U is a state function and the final state equals the initial state, ΔU = 0. From the First Law, q + w = 0 over the full cycle. However, q and w need not individually be zero.",
  },
];

function ProblemLadder() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {problems.map((item) => (
        <article key={item.title} className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h3 className=" font-black text-white">
            <span className="mr-2 text-amber-300">◆</span>
            {item.title}
          </h3>
          <p className="mt-4 leading-7 text-slate-200">{item.question}</p>
          <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Solution</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{item.solution}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

const functionTable = [
  ["Pressure P or p", "State function", "Definite at an equilibrium state"],
  ["Volume V", "State function", "Definite at an equilibrium state"],
  ["Temperature T", "State function", "Definite at an equilibrium state"],
  ["Internal energy U", "State function", "Endpoint change only"],
  ["Enthalpy H", "State function", "Detailed treatment in Thermochemistry"],
  ["Entropy S", "State function", "Developed later in Thermodynamics"],
  ["Gibbs energy G", "State function", "Developed later in Thermodynamics"],
  ["Heat q", "Path function", "Energy crossing due to temperature difference"],
  ["Work w", "Path function", "Organised energy transfer across boundary"],
];

function FunctionTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Quantity</th>
            <th className="px-4 py-3 font-black text-white">Classification</th>
            <th className="px-4 py-3 font-black text-white">Reason</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {functionTable.map(([quantity, classification, reason]) => (
            <tr key={quantity}>
              <td className="px-4 py-3 font-semibold text-slate-100">{quantity}</td>
              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-black ${
                    classification === "State function"
                      ? "bg-emerald-400/15 text-emerald-300"
                      : "bg-rose-400/15 text-rose-300"
                  }`}
                >
                  {classification}
                </span>
              </td>
              <td className="px-4 py-3 leading-6 text-slate-300">{reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ThermodynamicsPart03() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_85%_14%,rgba(217,70,239,0.18),transparent_30%),radial-gradient(circle_at_52%_100%,rgba(251,191,36,0.10),transparent_32%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap gap-2">
            <Chip tone="cyan">SYNERGIC BOND MASTER NOTES</Chip>
            <Chip tone="violet">COMPLETE THEORY</Chip>
            <Chip tone="amber">MATHEMATICAL THERMODYNAMICS</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Function Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                The destination remembers; the path records the journey
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                State functions are determined by equilibrium endpoints. Heat and work describe transfers
                along the chosen route. Exact differentials provide the mathematical test.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Master distinction
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-emerald-400/10 p-4">
                  <p className="font-black text-emerald-200">State function</p>
                  <p className="mt-1 text-sm text-slate-300">Defined at a state; change depends only on endpoints.</p>
                </div>
                <div className="rounded-xl bg-rose-400/10 p-4">
                  <p className="font-black text-rose-200">Path function</p>
                  <p className="mt-1 text-sm text-slate-300">Defined during a process; accumulated value depends on route.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Thermodynamic process and path"
          subtitle="A process takes a system from one equilibrium state to another through a chosen sequence of intermediate conditions."
        >
          <p>
            Consider an initial state A and a final state B. Many different processes may connect them:
            rapid or slow, one-step or multistep, expansion first or heating first. The ordered sequence of
            intermediate states and interactions is the <strong className="text-white">path</strong>.
          </p>

          <RouteAnimation />

          <ConceptLens title="Endpoints determine state change; route determines transfer" tone="cyan">
            Every path from A to B gives the same change in a state function such as U, but generally different
            heat q and work w. The First Law links them so that q + w always produces the same ΔU.
          </ConceptLens>
        </Section>

        <Section index="02" title="State function or state variable">
          <p>
            A state function has a definite value at each equilibrium state. Its change depends only on the
            initial and final states—not on the process used to connect them.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Finite change">
              ΔΦ = Φ<sub>B</sub> − Φ<sub>A</sub>
            </Formula>
            <Formula label="Endpoint integral">
              ∫<sub>A</sub><sup>B</sup> dΦ = Φ<sub>B</sub> − Φ<sub>A</sub>
            </Formula>
          </div>

          <FunctionTable />

          <ConceptLens title="Notation is a clue, not a proof" tone="amber">
            Many textbooks use capital symbols for state functions and lower-case symbols for heat and work,
            but notation alone cannot decide classification. Pressure is often written p, yet it is a state function.
            The endpoint or exactness test is decisive.
          </ConceptLens>

          <ConceptLens title="Absolute value versus measurable change" tone="sky">
            State-function status does not require an experimentally accessible absolute zero. Internal energy U is a
            state function even though thermodynamics normally measures ΔU rather than an absolute U.
          </ConceptLens>
        </Section>

        <Section index="03" title="Path functions: heat and work">
          <p>
            Heat and work are not properties stored inside a system. They describe energy crossing the boundary
            during a process. A system has internal energy; it does not “contain heat” or “contain work.”
          </p>

          <DifferentialVisual />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Inexact heat differential">
              δq
            </Formula>
            <Formula label="Inexact work differential">
              δw
            </Formula>
          </div>

          <ConceptLens title="Why δ instead of d?" tone="rose">
            The symbol d is reserved for an exact differential of a state function. The symbol δ reminds us that
            heat and work do not possess endpoint-only antiderivatives in general.
          </ConceptLens>

          <ConceptLens title="Important constrained-process nuance" tone="amber">
            At constant volume with only pressure–volume work, q<sub>V</sub> = ΔU. At constant pressure with only
            pressure–volume work, q<sub>P</sub> = ΔH. Under those specified constraints, the heat between fixed
            endpoints equals a state-function change. Heat itself does not become a universal state function.
          </ConceptLens>
        </Section>

        <Section index="04" title="Exact and inexact differentials">
          <p>
            Let a quantity be expressed using two independent variables x and y:
          </p>

          <Formula label="General differential form">
            dΦ = M(x,y) dx + N(x,y) dy
          </Formula>

          <p>
            On a simply connected region where the derivatives are continuous, the differential is exact if:
          </p>

          <Formula label="Euler reciprocity / exactness criterion">
            (∂M/∂y)<sub>x</sub> = (∂N/∂x)<sub>y</sub>
          </Formula>

          <div className="grid gap-4 lg:grid-cols-2">
            <TestCard
              title="An exact example"
              expression={<>dΦ = 2xy dx + (x² + 6y)dy</>}
              result="STATE FUNCTION"
              tone="emerald"
            >
              Here M = 2xy and N = x² + 6y. Both cross derivatives equal 2x. Integrating gives
              Φ = x²y + 3y² + constant.
            </TestCard>

            <TestCard
              title="An inexact example"
              expression={<>ω = y dx − x dy</>}
              result="PATH DEPENDENT"
              tone="rose"
            >
              Here ∂M/∂y = 1 but ∂N/∂x = −1. The inequality proves that no ordinary single-valued Φ has dΦ = ω.
            </TestCard>
          </div>

          <ConceptLens title="Domain warning for advanced mathematics" tone="violet">
            Equality of cross derivatives is sufficient on a simply connected domain. Singularities or holes can
            create exceptional cases, but standard JEE thermodynamic domains normally satisfy the needed conditions.
          </ConceptLens>
        </Section>

        <Section index="05" title="Cyclic integral test">
          <p>
            In a cyclic process the final state is identical to the initial state. Therefore every state function
            returns to its starting value:
          </p>

          <Formula label="State function around a cycle">
            ∮ dΦ = 0
          </Formula>

          <p>
            For heat and work, the individual cyclic integrals need not vanish:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Heat around a cycle">
              ∮ δq may be non-zero
            </Formula>
            <Formula label="Work around a cycle">
              ∮ δw may be non-zero
            </Formula>
          </div>

          <ConceptLens title="First-Law closure" tone="cyan">
            For a complete cycle, ΔU = 0. Hence ∮δq + ∮δw = 0 using the chemistry sign convention.
            Net heat absorbed and net work done on the system are equal in magnitude and opposite in sign.
          </ConceptLens>
        </Section>

        <Section
          index="06"
          title="Proof: ideal-gas pressure is a state function"
          subtitle="The chapter derivation is expanded into a complete exact-differential proof."
        >
          <Formula label="Equation of state">
            P(V,T) = nRT/V
          </Formula>

          <Formula label="Total differential">
            dP = (−nRT/V²)dV + (nR/V)dT
          </Formula>

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Differentiate the dV coefficient with respect to T">
              ∂/∂T(−nRT/V²) = −nR/V²
            </Formula>
            <Formula label="Differentiate the dT coefficient with respect to V">
              ∂/∂V(nR/V) = −nR/V²
            </Formula>
          </div>

          <ConceptLens title="Conclusion" tone="emerald">
            The cross derivatives are equal. Therefore dP is exact and pressure is a state function.
            Its value is fixed by the current V, T, n—not by the route used to reach that state.
          </ConceptLens>
        </Section>

        <Section index="07" title="Proof: real-gas pressure is also a state function">
          <Formula label="van der Waals equation in explicit pressure form">
            P(V,T) = nRT/(V−nb) − an²/V²
          </Formula>

          <Formula label="Total differential">
            dP = [−nRT/(V−nb)² + 2an²/V³]dV + [nR/(V−nb)]dT
          </Formula>

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="First cross derivative">
              ∂/∂T[−nRT/(V−nb)² + 2an²/V³] = −nR/(V−nb)²
            </Formula>
            <Formula label="Second cross derivative">
              ∂/∂V[nR/(V−nb)] = −nR/(V−nb)²
            </Formula>
          </div>

          <ConceptLens title="Equation complexity does not alter state-function character" tone="violet">
            Ideal and real gases have different equations of state, but pressure remains a state function because
            it is uniquely determined by the equilibrium state variables.
          </ConceptLens>
        </Section>

        <Section index="08" title="Proof: ideal-gas volume is a state function">
          <Formula label="Explicit volume form">
            V(T,P) = nRT/P
          </Formula>

          <Formula label="Total differential">
            dV = (nR/P)dT − (nRT/P²)dP
          </Formula>

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Cross derivative I">
              ∂/∂P(nR/P) = −nR/P²
            </Formula>
            <Formula label="Cross derivative II">
              ∂/∂T(−nRT/P²) = −nR/P²
            </Formula>
          </div>

          <p className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4 text-sm leading-6 text-slate-200">
            The equality confirms that dV is exact. Volume is a state function.
          </p>
        </Section>

        <Section
          index="09"
          title="Why pressure–volume work is path dependent"
          subtitle="Two paths between the same states give different areas on a P–V diagram."
        >
          <PVPathVisual />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Path I">
              w<sub>I</sub> = −P₁(V₂−V₁)
            </Formula>
            <Formula label="Path II">
              w<sub>II</sub> = −P₂(V₂−V₁)
            </Formula>
          </div>

          <p>
            Unless P₁ = P₂, the works differ. Since both paths connect the same A and B but produce different
            w, work cannot be expressed as w<sub>B</sub> − w<sub>A</sub>. A system has no “work value” at a state.
          </p>

          <ConceptLens title="Heat differs in compensation" tone="amber">
            The internal-energy change ΔU is the same for both paths. Therefore q = ΔU − w differs whenever w differs.
            Heat and work redistribute the same endpoint energy change.
          </ConceptLens>
        </Section>

        <Section index="10" title="Conservative and non-conservative mechanical work">
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
              <Chip tone="emerald">CONSERVATIVE FORCE</Chip>
              <h3 className="mt-4 text-xl font-black text-white">Endpoint-dependent mechanical work</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Gravity, ideal spring force and electrostatic force admit potential-energy functions.
                Their work between fixed endpoints equals minus the change in potential energy.
              </p>
              <div className="mt-4 rounded-xl bg-black/25 p-3 text-center font-mono font-black text-white">
                W<sub>conservative</sub> = −ΔE<sub>potential</sub>
              </div>
            </article>

            <article className="rounded-3xl border border-rose-300/20 bg-rose-300/[0.05] p-5">
              <Chip tone="rose">NON-CONSERVATIVE FORCE</Chip>
              <h3 className="mt-4 text-xl font-black text-white">Route-dependent mechanical work</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Friction dissipates mechanical energy, and the work depends on travelled distance and path.
              </p>
              <div className="mt-4 rounded-xl bg-black/25 p-3 text-center font-mono font-black text-white">
                ∮ δW<sub>friction</sub> ≠ 0
              </div>
            </article>
          </div>

          <ConceptLens title="Do not confuse conservative-force work with stored work" tone="sky">
            Even when mechanical work by a conservative force is endpoint dependent, the stored state property is
            potential energy—not “work contained in the system.”
          </ConceptLens>
        </Section>

        <Section index="11" title="Heat capacity nuance">
          <p>
            The general process ratio C<sub>path</sub> = δq/dT can depend on the path. However, the standard
            equilibrium heat capacities are defined through state functions:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="At constant volume">
              C<sub>V</sub> = (∂U/∂T)<sub>V</sub>
            </Formula>
            <Formula label="At constant pressure">
              C<sub>P</sub> = (∂H/∂T)<sub>P</sub>
            </Formula>
          </div>

          <ConceptLens title="Why CP and CV can be properties" tone="amber">
            U and H are state functions, so their specified partial derivatives are equilibrium properties.
            Detailed heat-capacity theory remains in the separate Thermochemistry notes.
          </ConceptLens>
        </Section>


        <ThermodynamicsCompleteDerivations part={3} />

<Section index="12" title="Complete worked examples and applications">
          <ProblemLadder />
        </Section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Synergic Bond rapid recall
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                Exact differentials remember endpoints; inexact differentials remember routes
              </h2>
            </div>
            <Chip tone="emerald">PART 03 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["State function", "defined at equilibrium states"],
              ["Path function", "defined during a process"],
              ["Exact test", "cross partial derivatives agree"],
              ["Cycle", "∮dΦ = 0 for a state function"],
            ].map(([term, meaning]) => (
              <div key={term} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="font-black text-white">{term}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{meaning}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ThermodynamicsIntegratedEnrichment part={3} />


</main>
  );
}
