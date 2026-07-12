import React from "react";

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
      <p className="text-xs font-black uppercase tracking-[0.2em]">Synergic Bond Concept Lens</p>
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

function StateFunctionCycleAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="state-cycle-title state-cycle-description"
        className="h-auto w-full"
      >
        <title id="state-cycle-title">Clausius theorem and entropy as a state function</title>
        <desc id="state-cycle-description">
          A reversible cycle is divided into several reversible legs. The cyclic integral of reversible heat divided by temperature is zero,
          so the quantity defines an exact differential called entropy.
        </desc>

        <defs>
          <marker id="scGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <linearGradient id="scRing" x1="0" x2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          CLAUSIUS THEOREM CREATES A NEW STATE FUNCTION
        </text>

        <circle cx="400" cy="365" r="210" fill="none" stroke="url(#scRing)" strokeWidth="6" markerEnd="url(#scGreen)" />
        <path id="scPath" d="M400 155 A210 210 0 1 1 399.9 155" fill="none" />

        {[
          [400,155,"1"],
          [570,245,"2"],
          [550,505,"3"],
          [260,530,"4"],
          [215,270,"5"],
        ].map(([cx,cy,label]) => (
          <g key={String(label)}>
            <circle cx={Number(cx)} cy={Number(cy)} r="34" fill="#0f172a" stroke="#e2e8f0" strokeWidth="4" />
            <text x={Number(cx)} y={Number(cy)+8} fill="#f8fafc" fontSize="25" fontWeight="900" textAnchor="middle">
              {label}
            </text>
          </g>
        ))}

        <circle r="13" fill="#fde047">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#scPath" />
          </animateMotion>
        </circle>

        <rect x="705" y="135" width="385" height="145" rx="28" fill="#0f172a" stroke="#22d3ee" strokeWidth="4" />
        <text x="898" y="185" fill="#a5f3fc" fontSize="23" fontWeight="900" textAnchor="middle">
          REVERSIBLE CYCLE
        </text>
        <text x="898" y="235" fill="#f8fafc" fontSize="26" fontWeight="900" textAnchor="middle">
          ∮ δq<tspan baselineShift="sub">rev</tspan>/T = 0
        </text>

        <path d="M700 335 H1090" stroke="#a78bfa" strokeWidth="5" />
        <polygon points="1090,335 1060,317 1060,353" fill="#a78bfa" />

        <rect x="705" y="390" width="385" height="175" rx="28" fill="#0f172a" stroke="#34d399" strokeWidth="4" />
        <text x="898" y="440" fill="#a7f3d0" fontSize="23" fontWeight="900" textAnchor="middle">
          EXACT DIFFERENTIAL
        </text>
        <text x="898" y="495" fill="#f8fafc" fontSize="30" fontWeight="900" textAnchor="middle">
          dS = δq<tspan baselineShift="sub">rev</tspan>/T
        </text>
        <text x="898" y="535" fill="#cbd5e1" fontSize="20" textAnchor="middle">
          therefore ∮dS = 0
        </text>

        <rect x="210" y="655" width="780" height="54" rx="22" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
        <text x="600" y="691" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">
          Entropy change depends only on endpoints, even when the actual path is irreversible.
        </text>
      </svg>
    </div>
  );
}

function ReversiblePathAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="rev-path-title rev-path-description"
        className="h-auto w-full"
      >
        <title id="rev-path-title">Entropy evaluation through a reversible path</title>
        <desc id="rev-path-description">
          Two different actual paths connect the same initial and final states. The entropy change is evaluated using any convenient reversible path.
        </desc>

        <defs>
          <marker id="rpCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="rpRose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
          <marker id="rpGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
        </defs>

        <rect width="1200" height="720" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ACTUAL PATH MAY BE IRREVERSIBLE • ENTROPY REMAINS AN ENDPOINT PROPERTY
        </text>

        <circle cx="180" cy="350" r="70" fill="#0f172a" stroke="#22d3ee" strokeWidth="5" />
        <text x="180" y="340" fill="#a5f3fc" fontSize="27" fontWeight="900" textAnchor="middle">STATE A</text>
        <text x="180" y="382" fill="#cbd5e1" fontSize="19" textAnchor="middle">initial</text>

        <circle cx="1020" cy="350" r="70" fill="#0f172a" stroke="#34d399" strokeWidth="5" />
        <text x="1020" y="340" fill="#a7f3d0" fontSize="27" fontWeight="900" textAnchor="middle">STATE B</text>
        <text x="1020" y="382" fill="#cbd5e1" fontSize="19" textAnchor="middle">final</text>

        <path id="actualOne" d="M255 315 C420 110 760 120 945 315" fill="none" stroke="#fb7185" strokeWidth="5" markerEnd="url(#rpRose)" />
        <path id="actualTwo" d="M255 385 C420 585 760 590 945 385" fill="none" stroke="#a78bfa" strokeWidth="5" strokeDasharray="16 12" />
        <path id="revEval" d="M255 350 C475 300 735 300 945 350" fill="none" stroke="#34d399" strokeWidth="5" markerEnd="url(#rpGreen)" />

        <circle r="12" fill="#fda4af">
          <animateMotion dur="4.2s" repeatCount="indefinite">
            <mpath href="#actualOne" />
          </animateMotion>
        </circle>
        <circle r="12" fill="#86efac">
          <animateMotion dur="4.8s" repeatCount="indefinite">
            <mpath href="#revEval" />
          </animateMotion>
        </circle>

        <text x="600" y="155" fill="#fda4af" fontSize="21" fontWeight="900" textAnchor="middle">
          actual irreversible path
        </text>
        <text x="600" y="540" fill="#ddd6fe" fontSize="21" fontWeight="900" textAnchor="middle">
          another possible actual path
        </text>
        <text x="600" y="290" fill="#a7f3d0" fontSize="21" fontWeight="900" textAnchor="middle">
          convenient reversible evaluation path
        </text>

        <rect x="245" y="620" width="710" height="52" rx="22" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
        <text x="600" y="654" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">
          ΔSAB = ∫A→B δqrev/T for any reversible path joining A and B
        </text>
      </svg>
    </div>
  );
}

function EnergyDispersalAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="dispersal-title dispersal-description"
        className="h-auto w-full"
      >
        <title id="dispersal-title">Energy dispersal during thermal equilibration</title>
        <desc id="dispersal-description">
          Initially, energetic particles are concentrated on one side and lower-energy particles on the other.
          After contact, energy becomes more broadly distributed and the total entropy increases.
        </desc>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ENTROPY TRACKS ENERGY DISPERSAL AND ACCESSIBLE MICROSCOPIC ARRANGEMENTS
        </text>

        <text x="300" y="115" fill="#fda4af" fontSize="26" fontWeight="900" textAnchor="middle">INITIAL CONSTRAINT</text>
        <text x="900" y="115" fill="#a7f3d0" fontSize="26" fontWeight="900" textAnchor="middle">THERMAL EQUILIBRIUM</text>

        <rect x="70" y="155" width="460" height="390" rx="30" fill="#0f172a" stroke="#f472b6" strokeWidth="5" />
        <line x1="300" y1="155" x2="300" y2="545" stroke="#e2e8f0" strokeWidth="5" />

        {[0,1,2,3,4,5,6,7].map((i) => (
          <circle
            key={`hot-${i}`}
            cx={120 + (i % 2) * 105}
            cy={220 + Math.floor(i / 2) * 75}
            r="13"
            fill="#f97316"
          >
            <animate
              attributeName={i % 2 ? "cx" : "cy"}
              values={
                i % 2
                  ? `${105 + (i % 2) * 105};${185 + (i % 2) * 105};${105 + (i % 2) * 105}`
                  : `${205 + Math.floor(i / 2) * 75};${250 + Math.floor(i / 2) * 75};${205 + Math.floor(i / 2) * 75}`
              }
              dur={`${1.2 + i * 0.1}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {[0,1,2,3,4,5,6,7].map((i) => (
          <circle
            key={`cold-${i}`}
            cx={350 + (i % 2) * 105}
            cy={220 + Math.floor(i / 2) * 75}
            r="13"
            fill="#22d3ee"
          >
            <animate
              attributeName={i % 2 ? "cx" : "cy"}
              values={
                i % 2
                  ? `${340 + (i % 2) * 105};${385 + (i % 2) * 105};${340 + (i % 2) * 105}`
                  : `${215 + Math.floor(i / 2) * 75};${235 + Math.floor(i / 2) * 75};${215 + Math.floor(i / 2) * 75}`
              }
              dur={`${2.2 + i * 0.1}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        <rect x="670" y="155" width="460" height="390" rx="30" fill="#0f172a" stroke="#34d399" strokeWidth="5" />
        {Array.from({ length: 16 }).map((_, i) => (
          <circle
            key={`mix-${i}`}
            cx={730 + (i % 4) * 110}
            cy={220 + Math.floor(i / 4) * 80}
            r="13"
            fill={i % 2 ? "#f59e0b" : "#67e8f9"}
          >
            <animate
              attributeName={i % 3 === 0 ? "cx" : "cy"}
              values={
                i % 3 === 0
                  ? `${710 + (i % 4) * 110};${765 + (i % 4) * 100};${710 + (i % 4) * 110}`
                  : `${205 + Math.floor(i / 4) * 80};${260 + Math.floor(i / 4) * 70};${205 + Math.floor(i / 4) * 80}`
              }
              dur={`${1.5 + i * 0.08}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        <path d="M545 350 H655" stroke="#34d399" strokeWidth="5" />
        <polygon points="655,350 625,332 625,368" fill="#34d399" />

        <text x="300" y="600" fill="#f9a8d4" fontSize="20" fontWeight="900" textAnchor="middle">
          energy concentrated in fewer arrangements
        </text>
        <text x="900" y="600" fill="#a7f3d0" fontSize="20" fontWeight="900" textAnchor="middle">
          energy distributed among more arrangements
        </text>

        <rect x="250" y="650" width="700" height="55" rx="22" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="686" fill="#ddd6fe" fontSize="21" fontWeight="900" textAnchor="middle">
          Natural equilibration increases the entropy of the isolated combined system.
        </text>
      </svg>
    </div>
  );
}

function UnavailableEnergyAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="unavailable-title unavailable-description"
        className="h-auto w-full"
      >
        <title id="unavailable-title">Entropy generation and destroyed work potential</title>
        <desc id="unavailable-description">
          An ideal reversible process preserves maximum work potential. Irreversibility generates entropy,
          destroying an amount of available work equal to ambient temperature times entropy generated.
        </desc>

        <defs>
          <marker id="ueGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <marker id="ueRose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
        </defs>

        <rect width="1200" height="720" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ENTROPY GENERATION DESTROYS AVAILABLE WORK
        </text>

        <rect x="80" y="145" width="460" height="385" rx="32" fill="#0f172a" stroke="#34d399" strokeWidth="5" />
        <text x="310" y="200" fill="#a7f3d0" fontSize="26" fontWeight="900" textAnchor="middle">REVERSIBLE LIMIT</text>
        <rect x="150" y="255" width="320" height="80" rx="22" fill="#164e63" />
        <text x="310" y="305" fill="#f8fafc" fontSize="22" fontWeight="900" textAnchor="middle">maximum useful work</text>
        <path d="M310 350 V430" stroke="#34d399" strokeWidth="5" markerEnd="url(#ueGreen)" />
        <text x="310" y="475" fill="#a7f3d0" fontSize="21" fontWeight="900" textAnchor="middle">Sgen = 0</text>

        <rect x="660" y="145" width="460" height="385" rx="32" fill="#0f172a" stroke="#fb7185" strokeWidth="5" />
        <text x="890" y="200" fill="#fda4af" fontSize="26" fontWeight="900" textAnchor="middle">IRREVERSIBLE PROCESS</text>
        <rect x="730" y="255" width="210" height="80" rx="22" fill="#164e63" />
        <text x="835" y="305" fill="#f8fafc" fontSize="20" fontWeight="900" textAnchor="middle">useful work</text>
        <rect x="955" y="255" width="105" height="80" rx="22" fill="#7c2d12" />
        <text x="1007" y="292" fill="#fed7aa" fontSize="18" fontWeight="900" textAnchor="middle">lost</text>
        <text x="1007" y="316" fill="#fed7aa" fontSize="18" fontWeight="900" textAnchor="middle">potential</text>

        <path d="M890 350 V430" stroke="#fb7185" strokeWidth="5" markerEnd="url(#ueRose)" />
        <text x="890" y="475" fill="#fda4af" fontSize="21" fontWeight="900" textAnchor="middle">Sgen &gt; 0</text>

        <rect x="285" y="580" width="630" height="70" rx="25" fill="#0f172a" stroke="#fbbf24" strokeWidth="5" />
        <text x="600" y="610" fill="#fde68a" fontSize="22" fontWeight="900" textAnchor="middle">
          Gouy–Stodola relation
        </text>
        <text x="600" y="640" fill="#f8fafc" fontSize="25" fontWeight="900" textAnchor="middle">
          W<tspan baselineShift="sub">lost</tspan> = T<tspan baselineShift="sub">0</tspan>S<tspan baselineShift="sub">gen</tspan>
        </text>

        <text x="600" y="690" fill="#94a3b8" fontSize="20" textAnchor="middle">
          T0 is the environment temperature used to define available work.
        </text>
      </svg>
    </div>
  );
}

function RubberAlignmentGraphic() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 650"
        role="img"
        aria-labelledby="rubber-title rubber-description"
        className="h-auto w-full"
      >
        <title id="rubber-title">Entropy decrease when rubber chains align during stretching</title>
        <desc id="rubber-description">
          An unstretched rubber network has many coiled chain conformations. Stretching aligns the chains and reduces configurational entropy.
        </desc>

        <rect width="1200" height="650" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          STRETCHING RUBBER REDUCES CHAIN-CONFORMATION ENTROPY
        </text>

        <rect x="80" y="130" width="430" height="360" rx="30" fill="#0f172a" stroke="#22d3ee" strokeWidth="5" />
        <text x="295" y="180" fill="#a5f3fc" fontSize="24" fontWeight="900" textAnchor="middle">UNSTRETCHED</text>
        {[
          "M120 250 C170 175 220 335 270 250 C320 165 365 340 440 240",
          "M120 330 C180 400 210 230 290 335 C355 420 390 255 450 335",
          "M135 410 C205 330 250 490 320 395 C380 315 410 445 455 390",
        ].map((d, i) => (
          <path key={i} d={d} fill="none" stroke={i === 0 ? "#f472b6" : i === 1 ? "#fde047" : "#34d399"} strokeWidth="5" strokeLinecap="round" />
        ))}
        <text x="295" y="535" fill="#cbd5e1" fontSize="21" textAnchor="middle">many accessible coil conformations</text>

        <path d="M540 315 H650" stroke="#fbbf24" strokeWidth="5" />
        <polygon points="650,315 620,297 620,333" fill="#fbbf24" />
        <text x="595" y="280" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">stretch</text>

        <rect x="690" y="130" width="430" height="360" rx="30" fill="#0f172a" stroke="#f472b6" strokeWidth="5" />
        <text x="905" y="180" fill="#f9a8d4" fontSize="24" fontWeight="900" textAnchor="middle">STRETCHED</text>
        {[245, 325, 405].map((y, i) => (
          <path
            key={i}
            d={`M735 ${y} C825 ${y-20} 985 ${y+20} 1075 ${y}`}
            fill="none"
            stroke={i === 0 ? "#f472b6" : i === 1 ? "#fde047" : "#34d399"}
            strokeWidth="5"
            strokeLinecap="round"
          />
        ))}
        <text x="905" y="535" fill="#cbd5e1" fontSize="21" textAnchor="middle">fewer aligned conformations</text>

        <rect x="340" y="580" width="520" height="44" rx="20" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="609" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">
          ΔS<tspan baselineShift="sub">rubber</tspan> &lt; 0 for isothermal stretching
        </text>
      </svg>
    </div>
  );
}

function SecondLawStatements() {
  const statements = [
    {
      title: "Clausius statement",
      text: "Heat cannot, as the sole effect of a cyclic process, pass from a colder body to a hotter body without external work or an equivalent compensating change.",
      tone: "cyan" as Tone,
    },
    {
      title: "Kelvin–Planck statement",
      text: "No cyclic engine can absorb heat from a single reservoir and convert all of it into work.",
      tone: "amber" as Tone,
    },
    {
      title: "Entropy statement",
      text: "For an isolated system, spontaneous change proceeds with increasing total entropy; reversible change has no entropy generation.",
      tone: "emerald" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {statements.map((statement) => (
        <article key={statement.title} className={`rounded-3xl border p-5 ${toneMap[statement.tone]}`}>
          <h3 className="text-xl font-black text-white">{statement.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-200">{statement.text}</p>
        </article>
      ))}
    </div>
  );
}

function EntropyPropertiesGrid() {
  const rows = [
    ["Symbol", "S", "state variable"],
    ["Differential definition", "dS = δqrev/T", "reversible evaluation"],
    ["SI unit", "J K⁻¹", "total entropy"],
    ["Molar entropy", "J mol⁻¹ K⁻¹", "intensive after division by amount"],
    ["Specific entropy", "J kg⁻¹ K⁻¹", "intensive after division by mass"],
    ["Type", "extensive", "S doubles when an identical subsystem is duplicated"],
    ["Additivity", "Stotal = ΣSi", "for independent subsystems"],
    ["Cyclic integral", "∮dS = 0", "state-function test"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Property</th>
            <th className="px-4 py-3 font-black text-white">Expression</th>
            <th className="px-4 py-3 font-black text-white">Meaning</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([property, expression, meaning]) => (
            <tr key={property}>
              <td className="px-4 py-3 font-semibold text-slate-100">{property}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{expression}</td>
              <td className="px-4 py-3 text-slate-300">{meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type TrendCard = {
  index: string;
  title: string;
  relation: string;
  explanation: string;
  caution?: string;
  tone: Tone;
};

const trendCards: TrendCard[] = [
  {
    index: "01",
    title: "Temperature",
    relation: "T ↑ ⇒ S generally ↑",
    explanation: "Higher temperature opens access to more translational, rotational and vibrational energy distributions.",
    caution: "Compare the same substance and phase unless a phase transition is handled explicitly.",
    tone: "amber",
  },
  {
    index: "02",
    title: "Pressure of a gas",
    relation: "P ↑ at fixed T ⇒ S ↓",
    explanation: "Compression reduces available volume and the number of accessible positional arrangements.",
    caution: "This is a gas trend under specified T and composition, not a universal rule for every condensed phase.",
    tone: "cyan",
  },
  {
    index: "03",
    title: "Molecular complexity",
    relation: "more atoms / modes ⇒ usually larger molar S",
    explanation: "More complex molecules possess more rotational and vibrational modes and therefore more ways to distribute energy.",
    caution: "Comparisons require similar temperature, phase and standard-state conditions.",
    tone: "violet",
  },
  {
    index: "04",
    title: "Intermixing gases",
    relation: "mixing distinct gases ⇒ ΔS > 0",
    explanation: "Each gas gains access to the combined volume and more positional arrangements become available.",
    tone: "emerald",
  },
  {
    index: "05",
    title: "Number of gas particles",
    relation: "more gas moles ⇒ greater total S",
    explanation: "Entropy is extensive. Additional particles add accessible microscopic states.",
    tone: "sky",
  },
  {
    index: "06",
    title: "Physical state",
    relation: "Ssolid < Sliquid < Sgas",
    explanation: "Molecular positional and orientational freedom generally increases from solid to liquid to gas.",
    caution: "This is a broad trend for the same substance at compatible conditions.",
    tone: "rose",
  },
  {
    index: "07",
    title: "Structural flexibility",
    relation: "more flexible / softer modes ⇒ larger S",
    explanation: "Low-frequency motions and multiple conformations increase accessible arrangements.",
    caution: "The example graphite > diamond is valid, but “2D always exceeds 3D” is not a universal law.",
    tone: "violet",
  },
  {
    index: "08",
    title: "Noble-gas molar mass",
    relation: "He < Ne < Ar < Kr < Xe in standard molar S",
    explanation: "At comparable T and P, heavier monatomic gases have denser translational energy levels.",
    tone: "cyan",
  },
];

function TrendGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {trendCards.map((item) => (
        <article key={item.index} className={`rounded-3xl border p-5 ${toneMap[item.tone]}`}>
          <p className="text-xs font-black uppercase tracking-[0.2em]">{item.index}</p>
          <h3 className="mt-2 text-lg font-black text-white">{item.title}</h3>
          <div className="mt-3 rounded-xl bg-black/25 p-3 text-center font-mono text-sm font-black text-white">
            {item.relation}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-200">{item.explanation}</p>
          {item.caution ? <p className="mt-3 text-xs leading-5 text-slate-400">{item.caution}</p> : null}
        </article>
      ))}
    </div>
  );
}

function ComplexityExamples() {
  const rows = [
    ["C₂H₄ versus CH₄", "S(C₂H₄) > S(CH₄)", "more atoms and internal modes"],
    ["SO₃, SO₂, O₂", "S(SO₃) > S(SO₂) > S(O₂)", "qualitative complexity/mass trend"],
    ["CO₂ versus CO", "S(CO₂) > S(CO)", "extra atom and vibrational modes"],
    ["Nitrogen oxides", "N₂O₅ > N₂O₄ > N₂O₃ > N₂O > NO", "qualitative same-condition trend from chapter sequence"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Comparison</th>
            <th className="px-4 py-3 font-black text-white">Observed trend</th>
            <th className="px-4 py-3 font-black text-white">Physical basis</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([comparison, trend, basis]) => (
            <tr key={comparison}>
              <td className="px-4 py-3 font-semibold text-slate-100">{comparison}</td>
              <td className="px-4 py-3 font-mono text-violet-200">{trend}</td>
              <td className="px-4 py-3 text-slate-300">{basis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RetainedExamplesAtlas() {
  const items = [
    {
      title: "Heating an egg",
      sign: "overall ΔSuniverse > 0",
      text: "Heat transfer and irreversible protein denaturation increase the total entropy of system plus surroundings. Molecular unfolding may increase configurational possibilities, but the exact system-only entropy depends on conditions.",
      tone: "amber" as Tone,
    },
    {
      title: "Stretching rubber",
      sign: "ΔSrubber < 0 at constant T",
      text: "Polymer chains become more aligned and lose configurational freedom. The effect is chain ordering—not every bond being stretched to a maximum length.",
      tone: "cyan" as Tone,
    },
    {
      title: "Chelate formation",
      sign: "ΔS often > 0",
      text: "[Co(NH₃)₆]³⁺ + 3 en → [Co(en)₃]³⁺ + 6 NH₃. More independently moving solute species are released, favouring a positive entropy contribution.",
      tone: "emerald" as Tone,
    },
    {
      title: "Polymerisation",
      sign: "ΔS < 0",
      text: "n CH₂=CH₂ → (CH₂CH₂)n combines many freely translating molecules into a constrained macromolecule.",
      tone: "rose" as Tone,
    },
    {
      title: "White phosphorus to red phosphorus",
      sign: "ΔS < 0",
      text: "Discrete P₄ units transform into a more extended polymeric/network structure with reduced molecular freedom.",
      tone: "violet" as Tone,
    },
    {
      title: "Cyclopropane to propene",
      sign: "ΔS > 0",
      text: "Ring opening increases conformational and rotational freedom; the example identifies the gas-phase isomerisation as entropy-favoured.",
      tone: "sky" as Tone,
    },
    {
      title: "Ice to liquid water",
      sign: "ΔS > 0",
      text: "Melting increases molecular mobility and orientational freedom. Detailed latent-heat calculation belongs to Thermochemistry.",
      tone: "cyan" as Tone,
    },
    {
      title: "Water to water vapour",
      sign: "ΔS > 0",
      text: "Vaporisation greatly increases translational freedom and accessible volume. Detailed enthalpy treatment remains in Thermochemistry.",
      tone: "amber" as Tone,
    },
    {
      title: "Micelle formation",
      sign: "overall ΔS may be > 0",
      text: "Aggregation orders surfactant molecules, but releases structured water from hydrophobic surfaces. The solvent entropy gain can dominate above the critical micelle concentration.",
      tone: "emerald" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className={`rounded-3xl border p-5 ${toneMap[item.tone]}`}>
          <h3 className="text-lg font-black text-white">{item.title}</h3>
          <div className="mt-3 rounded-xl bg-black/25 p-3 text-center font-mono text-sm font-black text-white">
            {item.sign}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-200">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function WorkedExamples() {
  const examples = [
    {
      title: "Same heat at two temperatures",
      question:
        "A system reversibly absorbs 600 J at 300 K and another system absorbs the same heat at 600 K. Compare their entropy increases.",
      solution:
        "ΔS300 = 600/300 = 2.00 J K⁻¹. ΔS600 = 600/600 = 1.00 J K⁻¹. The same heat causes the larger entropy change at the lower temperature.",
    },
    {
      title: "Extensivity check",
      question:
        "One mole of a substance has entropy 180 J K⁻¹ at a stated condition. What is the entropy of 2.5 mol at the same condition?",
      solution:
        "Entropy is extensive, so S = 2.5×180 = 450 J K⁻¹. The molar entropy remains 180 J mol⁻¹ K⁻¹.",
    },
    {
      title: "Reversible path evaluation",
      question:
        "An irreversible process carries a system from A to B. A convenient reversible route between A and B gives ∫δqrev/T = 24 J K⁻¹. Find ΔSsystem.",
      solution:
        "Because entropy is a state function, ΔSsystem = 24 J K⁻¹ regardless of the actual irreversible path.",
    },
    {
      title: "Destroyed work potential",
      question:
        "A real process generates 15 J K⁻¹ of entropy in an environment at 300 K. Find the lost work potential.",
      solution:
        "Wlost = T0Sgen = 300×15 = 4500 J = 4.50 kJ.",
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {examples.map((item) => (
        <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
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

const problems = [
  {
    title: "Concept Application 1 — state-function test",
    question:
      "For a reversible cycle, ∮δqrev/T = 0. What mathematical conclusion follows?",
    solution:
      "The integrand defines an exact differential. A state function S exists such that dS = δqrev/T and ∮dS = 0.",
  },
  {
    title: "Concept Application 2 — actual irreversible heat",
    question:
      "During an irreversible process, may one generally write dS = δqirr/Tsystem?",
    solution:
      "No. The equality uses reversible heat. For an irreversible process, the entropy change is evaluated through a reversible path, or by the entropy-balance inequality developed next.",
  },
  {
    title: "Concept Application 3 — entropy and size",
    question:
      "A sample is divided into two equal equilibrium halves. How do total entropy and molar entropy change?",
    solution:
      "Each half has half the total entropy, because S is extensive. The molar entropy remains unchanged because it is intensive.",
  },
  {
    title: "Concept Application 4 — pressure trend",
    question:
      "At constant temperature, one mole of ideal gas is reversibly compressed. What is the sign of ΔS?",
    solution:
      "Negative. Compression reduces accessible volume. Quantitatively, ΔS = nR ln(V₂/V₁) = −nR ln(P₂/P₁).",
  },
  {
    title: "Concept Application 5 — gas mixing",
    question:
      "Two different ideal gases initially occupy separate equal volumes at the same T and P. The partition is removed. What happens to entropy?",
    solution:
      "Entropy increases because each gas expands into the full volume and the number of accessible positional arrangements rises.",
  },
  {
    title: "Concept Application 6 — identical-gas caution",
    question:
      "Does removing a partition between two samples of the same ideal gas at identical T and P create a macroscopic mixing entropy?",
    solution:
      "No. The initial and final macroscopic state are indistinguishable, so the thermodynamic mixing entropy is zero.",
  },
  {
    title: "Concept Application 7 — phase trend",
    question:
      "Rank the molar entropy of a pure substance in solid, liquid and gas states near compatible conditions.",
    solution:
      "Generally Ssolid < Sliquid < Sgas because translational and orientational freedom increases.",
  },
  {
    title: "Concept Application 8 — graphite versus diamond",
    question:
      "Why can graphite possess a larger molar entropy than diamond although both are pure carbon solids?",
    solution:
      "Graphite has softer lattice modes and layered structural freedom. Diamond’s rigid three-dimensional network restricts low-energy vibrations more strongly.",
  },
  {
    title: "Concept Application 9 — stretched rubber",
    question:
      "An ideal rubber band is stretched reversibly at constant temperature. What is the sign of the rubber’s configurational entropy change?",
    solution:
      "Negative. Stretching aligns polymer chains and reduces the number of accessible coil conformations.",
  },
  {
    title: "Concept Application 10 — rubber heating effect",
    question:
      "Why can an elastomer warm when stretched rapidly?",
    solution:
      "Rapid stretching is approximately adiabatic. Chain ordering lowers configurational entropy, so temperature rises to satisfy the entropy/energy balance.",
  },
  {
    title: "Concept Application 11 — chelate entropy",
    question:
      "Why can replacing six monodentate ligands by three bidentate ligands produce a favourable entropy change?",
    solution:
      "The reaction can release more independent small molecules into solution than it consumes, increasing translational entropy. This is one component of the chelate effect.",
  },
  {
    title: "Concept Application 12 — polymerisation sign",
    question:
      "Predict the entropy sign for addition polymerisation of gaseous ethene under comparable conditions.",
    solution:
      "Usually negative because many independently translating monomer molecules become one constrained macromolecular chain.",
  },
  {
    title: "Concept Application 13 — entropy and complexity",
    question:
      "Can molecular complexity alone guarantee the entropy ordering of two substances?",
    solution:
      "No. Temperature, phase, pressure, symmetry and intermolecular interactions also matter. Complexity is a trend, not an absolute law.",
  },
  {
    title: "Concept Application 14 — low-temperature heat",
    question:
      "The same reversible heat q is absorbed at T₁ and T₂ with T₂ > T₁. Which entropy increase is larger?",
    solution:
      "q/T₁ is larger. Heat transfer at lower temperature produces a larger entropy change for the same q.",
  },
  {
    title: "Concept Application 15 — micelle formation",
    question:
      "Surfactant molecules become more ordered in a micelle. How can the overall entropy still increase?",
    solution:
      "Hydrophobic hydration shells around separate tails are released. The resulting increase in solvent freedom can exceed the loss in surfactant configurational entropy.",
  },
  {
    title: "Concept Application 16 — unavailable energy",
    question:
      "Why is it safer to write Wlost = T0Sgen than to say simply “entropy equals unavailable energy”?",
    solution:
      "Entropy has units J K⁻¹, whereas energy has units J. Multiplication by the specified environment temperature converts entropy generation into destroyed work potential.",
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

const traps = [
  [
    "Entropy is simply disorder.",
    "Refine",
    "Disorder is a heuristic. Entropy is a state function linked to energy dispersal and the number of accessible microscopic states.",
  ],
  [
    "Entropy and unavailable energy have the same units.",
    "Incorrect",
    "Entropy has units J K⁻¹. Work potential destroyed is T0Sgen, which has units J.",
  ],
  [
    "dS = δq/T for every actual process.",
    "Incorrect",
    "The equality uses reversible heat: dS = δqrev/T.",
  ],
  [
    "An adiabatic process must have ΔS = 0.",
    "Incorrect",
    "Only a reversible adiabatic process has zero entropy change. Irreversible adiabatic processes generate entropy.",
  ],
  [
    "Higher pressure always means lower entropy for every substance.",
    "Incorrect",
    "The simple trend is reliable for gas compression at specified T and composition, not universally for all phases.",
  ],
  [
    "A three-dimensional structure always has less entropy than a two-dimensional structure.",
    "Incorrect",
    "The graphite–diamond example depends on actual lattice dynamics; dimensionality alone is not a universal criterion.",
  ],
  [
    "Stretching rubber lowers entropy because all bonds reach maximum length.",
    "Incorrect",
    "Ordinary elastic stretching primarily aligns chains and reduces conformational freedom; covalent bonds are not all extended to a maximum.",
  ],
  [
    "Micelle formation must decrease total entropy because aggregation creates order.",
    "Incorrect",
    "Solvent entropy can increase enough to make the total entropy change positive.",
  ],
];

function TrapTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Tempting statement</th>
            <th className="px-4 py-3 font-black text-white">Verdict</th>
            <th className="px-4 py-3 font-black text-white">Correction</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {traps.map(([statement, verdict, correction]) => (
            <tr key={statement}>
              <td className="px-4 py-3 font-semibold text-slate-100">{statement}</td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-rose-400/15 px-3 py-1 text-xs font-black text-rose-300">{verdict}</span>
              </td>
              <td className="px-4 py-3 leading-6 text-slate-300">{correction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DailyLifeGrid() {
  const items = [
    {
      title: "A hot bath becomes uniform",
      text: "Energy spreads from hotter regions to colder regions until thermal equilibrium. The combined isolated water system moves toward greater total entropy.",
      tone: "amber" as Tone,
    },
    {
      title: "Perfume fills a room",
      text: "Molecules gain access to a much larger spatial region, producing many more positional arrangements.",
      tone: "cyan" as Tone,
    },
    {
      title: "Rubber band warms on rapid stretching",
      text: "Chain alignment reduces configurational entropy; an approximately adiabatic stretch raises temperature.",
      tone: "rose" as Tone,
    },
    {
      title: "Detergent micelles form in water",
      text: "Hydrophobic tails aggregate, but structured water is released, often giving a favourable total entropy contribution.",
      tone: "emerald" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className={`rounded-3xl border p-5 ${toneMap[item.tone]}`}>
          <h3 className="text-xl font-black text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-200">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function ThermodynamicsPart16() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_86%_15%,rgba(217,70,239,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(52,211,153,0.10),transparent_34%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap gap-2">
            <Chip tone="cyan">SYNERGIC BOND MASTER NOTES</Chip>
            <Chip tone="violet">COMPLETE THEORY</Chip>
            <Chip tone="emerald">ENTROPY FOUNDATIONS</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Second-Law State Function
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Entropy converts the arrow of natural change into a calculable state function
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Carnot’s reversible cycle reveals a quantity whose cyclic integral vanishes.
                That quantity is entropy—a state function connecting heat, temperature, energy dispersal, and lost work potential.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Entropy core
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-cyan-400/10 p-4 font-mono text-lg font-black text-white">
                  ∮ δq<sub>rev</sub>/T = 0
                </div>
                <div className="rounded-xl bg-violet-400/10 p-4 font-mono text-lg font-black text-white">
                  dS = δq<sub>rev</sub>/T
                </div>
                <div className="rounded-xl bg-emerald-400/10 p-4 font-mono text-lg font-black text-white">
                  S is extensive and additive
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="From the Carnot cycle to entropy"
          subtitle="The reversible cyclic integral identifies an exact differential."
        >
          <p>
            For a reversible Carnot cycle, the heat exchanges satisfy the temperature-weighted cancellation:
          </p>

          <Formula label="Carnot heat relation">
            Q<sub>H</sub>/T<sub>H</sub> − Q<sub>C</sub>/T<sub>C</sub> = 0
          </Formula>

          <p>
            Generalising a reversible cycle into many small reversible heat exchanges gives:
          </p>

          <Formula label="Clausius theorem for a reversible cycle">
            ∮ δq<sub>rev</sub>/T = 0
          </Formula>

          <StateFunctionCycleAnimation />

          <Formula label="Definition of entropy">
            dS = δq<sub>rev</sub>/T
          </Formula>

          <Formula label="Cyclic state-function test">
            ∮dS = 0
          </Formula>

          <ConceptLens title="Why this proves state-function behaviour" tone="emerald">
            A differential whose integral around every reversible closed path is zero is exact.
            Therefore its finite change depends only on the initial and final equilibrium states.
          </ConceptLens>
        </Section>

        <Section
          index="02"
          title="Entropy change for any process"
          subtitle="Use a reversible path for evaluation, even when the real process is irreversible."
        >
          <Formula label="Finite entropy change">
            ΔS = S₂−S₁ = ∫₁² δq<sub>rev</sub>/T
          </Formula>

          <ReversiblePathAnimation />

          <ConceptLens title="The reversible path is a calculation path" tone="violet">
            The system need not actually travel reversibly. A hypothetical reversible path connecting the same equilibrium states is sufficient to calculate {String.raw`\(\Delta S\)`}.
          </ConceptLens>

          <ConceptLens title="Do not replace δqrev by the actual irreversible heat" tone="rose">
            In general, {String.raw`\(dS\ne\delta q_{\mathrm{irr}}/T\)`}. The missing contribution is entropy generation, developed in Part 17.
          </ConceptLens>
        </Section>

        <Section index="03" title="Second-Law statements">
          <SecondLawStatements />

          <Formula label="Entropy form for an isolated system">
            spontaneous process ⇒ ΔS<sub>isolated</sub> &gt; 0
          </Formula>

          <Formula label="Reversible limit">
            reversible process in the isolated universe ⇒ ΔS<sub>universe</sub> = 0
          </Formula>

          <ConceptLens title="“Entropy of the universe always increases” needs one refinement" tone="amber">
            It increases for irreversible spontaneous change and remains constant in the reversible limit.
            It never decreases for an isolated universe.
          </ConceptLens>
        </Section>

        <Section index="04" title="Entropy properties and units">
          <EntropyPropertiesGrid />

          <ConceptLens title="Extensive versus molar entropy" tone="cyan">
            Total entropy scales with system size. Dividing by amount or mass creates molar or specific entropy, which is intensive.
          </ConceptLens>
        </Section>

        <Section
          index="05"
          title="What entropy means physically"
          subtitle="Randomness is useful intuition, but energy dispersal and accessible states are more precise."
        >
          <EnergyDispersalAnimation />

          <div className="grid gap-4 md:grid-cols-3">
            <ConceptLens title="Energy dispersal" tone="amber">
              Entropy grows when energy can be distributed among more particles, modes, and locations.
            </ConceptLens>
            <ConceptLens title="Spatial dispersal" tone="cyan">
              Gas expansion and mixing increase the volume and arrangements accessible to particles.
            </ConceptLens>
            <ConceptLens title="Microscopic multiplicity" tone="violet">
              A macrostate compatible with more microscopic arrangements has greater entropy.
            </ConceptLens>
          </div>

          <ConceptLens title="Ordered and disordered are not moral labels" tone="rose">
            “Disorder” describes multiplicity and uncertainty in microscopic arrangement. It does not mean visual messiness alone.
          </ConceptLens>
        </Section>

        <Section
          index="06"
          title="Unavailable energy and lost work potential"
          subtitle="The chapter intuition is retained with dimensional and exergy corrections."
        >
          <p>
            A common description treats entropy as a measure of unavailable energy. The rigorous statement requires a reference environment at temperature {String.raw`\(T_0\)`}.
          </p>

          <UnavailableEnergyAnimation />

          <Formula label="Destroyed work potential">
            W<sub>lost</sub> = T<sub>0</sub>S<sub>gen</sub>
          </Formula>

          <Formula label="Entropy transfer with rejected heat at T0">
            Q<sub>rejected</sub> = T<sub>0</sub>ΔS for reversible rejection
          </Formula>

          <ConceptLens title="Why T0 is essential" tone="amber">
            Entropy is measured in joules per kelvin, not joules. Multiplication by a specified environmental temperature converts entropy generation into lost work potential.
          </ConceptLens>

          <ConceptLens title="Greater entropy does not mean all energy is unusable" tone="violet">
            Available work depends on the complete state relative to an environment. The precise lost-work statement concerns entropy generation, not entropy in isolation.
          </ConceptLens>
        </Section>

        <Section index="07" title="Primary entropy trends">
          <TrendGrid />
        </Section>

        <Section index="08" title="Molecular-complexity comparisons">
          <ComplexityExamples />

          <ConceptLens title="Comparison conditions matter" tone="rose">
            The listed orderings are qualitative trends from the chapter sequence. Reliable numerical comparison requires the same temperature, pressure, phase, and standard-state definition.
          </ConceptLens>
        </Section>

        <Section index="09" title="Structural and chemical examples">
          <RubberAlignmentGraphic />
          <RetainedExamplesAtlas />
        </Section>

        <Section index="10" title="Original solved foundation examples">
          <WorkedExamples />
        </Section>

        <Section index="11" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="12" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={16} />

<Section index="13" title="Complete worked examples and applications">
          <ProblemLadder />
        </Section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Synergic Bond rapid recall
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                Entropy is an endpoint property evaluated through reversible heat transfer
              </h2>
            </div>
            <Chip tone="emerald">PART 16 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Clausius theorem", "∮δqrev/T = 0"],
              ["Definition", "dS = δqrev/T"],
              ["Nature", "extensive, additive state function"],
              ["Lost work", "Wlost = T0Sgen"],
            ].map(([term, meaning]) => (
              <div key={term} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="font-black text-white">{term}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{meaning}</p>
              </div>
            ))}
          </div>
        </section>
      </div>


</main>
  );
}
