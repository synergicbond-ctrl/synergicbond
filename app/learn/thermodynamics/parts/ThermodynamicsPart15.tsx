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

function ReversedEngineAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 780"
        role="img"
        aria-labelledby="reverse-engine-title reverse-engine-description"
        className="h-auto w-full"
      >
        <title id="reverse-engine-title">Animated refrigerator and heat-pump energy flow</title>
        <desc id="reverse-engine-description">
          Work enters a reversed heat engine. Heat is extracted from a cold space and rejected to a warmer environment.
          The refrigerator values heat removed from the cold side, while the heat pump values heat delivered to the hot side.
        </desc>

        <defs>
          <marker id="reCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="reAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
          <marker id="reRose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
          <radialGradient id="reverseCore">
            <stop offset="0%" stopColor="#164e63" />
            <stop offset="100%" stopColor="#312e81" />
          </radialGradient>
        </defs>

        <rect width="1200" height="780" rx="34" fill="#020617" />

        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          REVERSED HEAT ENGINE: WORK DRIVES HEAT FROM COLD TO HOT
        </text>

        <rect x="350" y="115" width="500" height="110" rx="28" fill="#7c2d12" stroke="#f97316" strokeWidth="8" />
        <text x="600" y="162" fill="#fed7aa" fontSize="28" fontWeight="900" textAnchor="middle">WARM SURROUNDINGS / HEATED SPACE</text>
        <text x="600" y="197" fill="#f8fafc" fontSize="22" fontWeight="900" textAnchor="middle">T<tspan baselineShift="sub">H</tspan></text>

        <circle cx="600" cy="405" r="128" fill="url(#reverseCore)" stroke="#a78bfa" strokeWidth="9" />
        <text x="600" y="390" fill="#f8fafc" fontSize="29" fontWeight="900" textAnchor="middle">REFRIGERATOR</text>
        <text x="600" y="430" fill="#ddd6fe" fontSize="21" fontWeight="900" textAnchor="middle">or heat pump</text>

        <g transform="translate(600 405)">
          <animateTransform attributeName="transform" type="rotate" from="360 600 405" to="0 600 405" dur="5s" repeatCount="indefinite" />
          <line x1="-72" y1="0" x2="72" y2="0" stroke="#67e8f9" strokeWidth="12" />
          <line x1="0" y1="-72" x2="0" y2="72" stroke="#67e8f9" strokeWidth="12" />
        </g>

        <rect x="350" y="595" width="500" height="110" rx="28" fill="#164e63" stroke="#22d3ee" strokeWidth="8" />
        <text x="600" y="642" fill="#a5f3fc" fontSize="28" fontWeight="900" textAnchor="middle">COLD SPACE / COLD RESERVOIR</text>
        <text x="600" y="677" fill="#f8fafc" fontSize="22" fontWeight="900" textAnchor="middle">T<tspan baselineShift="sub">C</tspan></text>

        <path d="M600 580 V535" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#reCyan)">
          <animate attributeName="stroke-dasharray" values="0 140;70 70;140 0" dur="2s" repeatCount="indefinite" />
        </path>
        <text x="655" y="565" fill="#a5f3fc" fontSize="24" fontWeight="900">Q<tspan baselineShift="sub">C</tspan></text>

        <path d="M600 270 V235" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#reAmber)">
          <animate attributeName="stroke-dasharray" values="140 0;70 70;0 140" dur="2s" repeatCount="indefinite" />
        </path>
        <text x="655" y="260" fill="#fde68a" fontSize="24" fontWeight="900">Q<tspan baselineShift="sub">H</tspan></text>

        <path d="M1000 405 H745" stroke="#fb7185" strokeWidth="5" markerEnd="url(#reRose)">
          <animate attributeName="stroke-dasharray" values="0 270;135 135;270 0" dur="2.3s" repeatCount="indefinite" />
        </path>
        <text x="880" y="370" fill="#fda4af" fontSize="25" fontWeight="900" textAnchor="middle">W<tspan baselineShift="sub">in</tspan></text>

        <rect x="55" y="300" width="300" height="215" rx="28" fill="#0f172a" stroke="#34d399" strokeWidth="5" />
        <text x="205" y="345" fill="#a7f3d0" fontSize="21" fontWeight="900" textAnchor="middle">ENERGY BALANCE</text>
        <text x="205" y="400" fill="#f8fafc" fontSize="25" fontWeight="900" textAnchor="middle">QH = QC + Win</text>
        <text x="205" y="452" fill="#cbd5e1" fontSize="18" textAnchor="middle">more heat leaves at the hot side</text>
        <text x="205" y="485" fill="#cbd5e1" fontSize="18" textAnchor="middle">than was extracted from cold side</text>

        <text x="600" y="755" fill="#94a3b8" fontSize="18" textAnchor="middle">
          Same machine, different desired effect: cooling defines a refrigerator; heating defines a heat pump.
        </text>
      </svg>
    </div>
  );
}

function ReversedCarnotStagesAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 820"
        role="img"
        aria-labelledby="reversed-stage-title reversed-stage-description"
        className="h-auto w-full"
      >
        <title id="reversed-stage-title">Four stages of the reversed Carnot cycle</title>
        <desc id="reversed-stage-description">
          The cycle proceeds through isothermal expansion at the cold temperature, adiabatic compression,
          isothermal compression at the hot temperature, and adiabatic expansion back to the cold temperature.
        </desc>

        <rect width="1200" height="820" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          REVERSED CARNOT CYCLE: FOUR REVERSIBLE LEGS
        </text>

        {[
          {
            x: 50,
            title: "1 → 2",
            subtitle: "isothermal expansion",
            stroke: "#22d3ee",
            temp: "TC",
            heat: "QC absorbed",
            piston: "365;225;365",
          },
          {
            x: 340,
            title: "2 → 3",
            subtitle: "adiabatic compression",
            stroke: "#f472b6",
            temp: "TC → TH",
            heat: "q = 0",
            piston: "225;365;225",
          },
          {
            x: 630,
            title: "3 → 4",
            subtitle: "isothermal compression",
            stroke: "#fbbf24",
            temp: "TH",
            heat: "QH rejected",
            piston: "225;365;225",
          },
          {
            x: 920,
            title: "4 → 1",
            subtitle: "adiabatic expansion",
            stroke: "#34d399",
            temp: "TH → TC",
            heat: "q = 0",
            piston: "365;225;365",
          },
        ].map((item, index) => (
          <g key={item.title}>
            <text x={item.x + 110} y="120" fill={item.stroke} fontSize="28" fontWeight="900" textAnchor="middle">
              {item.title}
            </text>
            <text x={item.x + 110} y="154" fill="#cbd5e1" fontSize="17" textAnchor="middle">
              {item.subtitle}
            </text>

            <path
              d={`M${item.x + 10} 510 V200 H${item.x + 210} V510`}
              fill="none"
              stroke={item.stroke}
              strokeWidth="5"
            />
            <rect x={item.x + 32} y="345" width="156" height="24" rx="8" fill={item.stroke}>
              <animate attributeName="y" values={item.piston} dur={`${4.4 + index * 0.3}s`} repeatCount="indefinite" />
            </rect>
            <line
              x1={item.x + 110}
              y1="200"
              x2={item.x + 110}
              y2="345"
              stroke={item.stroke}
              strokeWidth="14"
              strokeLinecap="round"
            >
              <animate attributeName="y2" values={item.piston} dur={`${4.4 + index * 0.3}s`} repeatCount="indefinite" />
            </line>

            {[0, 1, 2, 3].map((i) => (
              <circle
                key={i}
                cx={item.x + 50 + (i % 2) * 100}
                cy={410 + Math.floor(i / 2) * 55}
                r="10"
                fill={index === 0 || index === 3 ? "#67e8f9" : "#fde047"}
              >
                <animate
                  attributeName={i % 2 ? "cx" : "cy"}
                  values={
                    i % 2
                      ? `${item.x + 35};${item.x + 180};${item.x + 35}`
                      : `${395 + Math.floor(i / 2) * 55};${430 + Math.floor(i / 2) * 55};${395 + Math.floor(i / 2) * 55}`
                  }
                  dur={`${1.8 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            <rect x={item.x + 10} y="545" width="200" height="105" rx="22" fill="#0f172a" stroke={item.stroke} strokeWidth="4" />
            <text x={item.x + 110} y="582" fill={item.stroke} fontSize="20" fontWeight="900" textAnchor="middle">
              {item.temp}
            </text>
            <text x={item.x + 110} y="620" fill="#e2e8f0" fontSize="18" textAnchor="middle">
              {item.heat}
            </text>
          </g>
        ))}

        <path d="M1040 705 H160" stroke="#a78bfa" strokeWidth="5" />
        <polygon points="160,705 190,687 190,723" fill="#a78bfa" />
        <text x="600" y="750" fill="#ddd6fe" fontSize="21" fontWeight="900" textAnchor="middle">
          The reversed loop is anticlockwise on a P–V diagram: net work is supplied to the device.
        </text>

        <text x="600" y="795" fill="#94a3b8" fontSize="18" textAnchor="middle">
          Every leg is reversible only in the ideal Carnot limit.
        </text>
      </svg>
    </div>
  );
}

function COPGraph() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="cop-graph-title cop-graph-description"
        className="h-auto w-full"
      >
        <title id="cop-graph-title">Coefficient of performance versus temperature lift</title>
        <desc id="cop-graph-description">
          Refrigerator and heat-pump coefficients of performance decrease as the temperature lift between hot and cold reservoirs increases.
        </desc>

        <defs>
          <marker id="copCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="copAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
        </defs>

        <rect width="1200" height="720" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          COP FALLS AS THE REQUIRED TEMPERATURE LIFT GROWS
        </text>

        <line x1="130" y1="620" x2="1090" y2="620" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="130" y1="620" x2="130" y2="100" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1115" y="632" fill="#e2e8f0" fontSize="24">ΔT = TH − TC</text>
        <text x="95" y="90" fill="#e2e8f0" fontSize="24">COP</text>

        <path id="copRPath" d="M190 145 C280 235 430 365 1025 565" fill="none" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#copCyan)" />
        <path id="copHPPath" d="M190 105 C320 195 500 320 1025 515" fill="none" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#copAmber)" />

        <circle r="12" fill="#67e8f9">
          <animateMotion dur="5.5s" repeatCount="indefinite">
            <mpath href="#copRPath" />
          </animateMotion>
        </circle>
        <circle r="12" fill="#fde047">
          <animateMotion dur="5.5s" repeatCount="indefinite">
            <mpath href="#copHPPath" />
          </animateMotion>
        </circle>

        <text x="755" y="330" fill="#fde68a" fontSize="22" fontWeight="900">COPHP</text>
        <text x="730" y="405" fill="#a5f3fc" fontSize="22" fontWeight="900">COPR</text>

        <rect x="235" y="650" width="730" height="45" rx="20" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="680" fill="#ddd6fe" fontSize="19" fontWeight="900" textAnchor="middle">
          Small temperature gap → high ideal COP; large temperature gap → high work demand
        </text>
      </svg>
    </div>
  );
}

function EntropyBridgeAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="entropy-bridge-title entropy-bridge-description"
        className="h-auto w-full"
      >
        <title id="entropy-bridge-title">Entropy balance for reversible and irreversible refrigerators</title>
        <desc id="entropy-bridge-description">
          In a reversible refrigerator the entropy removed from the cold reservoir equals the entropy delivered to the hot reservoir.
          In a real refrigerator total entropy increases.
        </desc>

        <rect width="1200" height="720" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          THE ENTROPY BRIDGE: WHY REVERSIBLE COP IS THE MAXIMUM
        </text>

        <g>
          <text x="310" y="115" fill="#a7f3d0" fontSize="27" fontWeight="900" textAnchor="middle">
            REVERSIBLE LIMIT
          </text>
          <rect x="90" y="155" width="440" height="390" rx="32" fill="#0f172a" stroke="#34d399" strokeWidth="8" />
          <rect x="150" y="195" width="320" height="70" rx="20" fill="#7c2d12" />
          <text x="310" y="238" fill="#fed7aa" fontSize="21" fontWeight="900" textAnchor="middle">HOT RESERVOIR</text>
          <rect x="150" y="435" width="320" height="70" rx="20" fill="#164e63" />
          <text x="310" y="478" fill="#a5f3fc" fontSize="21" fontWeight="900" textAnchor="middle">COLD RESERVOIR</text>
          <circle cx="310" cy="350" r="65" fill="#312e81" stroke="#a78bfa" strokeWidth="5" />
          <text x="310" y="358" fill="#f8fafc" fontSize="20" fontWeight="900" textAnchor="middle">DEVICE</text>
          <text x="310" y="295" fill="#fde68a" fontSize="18" textAnchor="middle">+QH/TH</text>
          <text x="310" y="420" fill="#a5f3fc" fontSize="18" textAnchor="middle">−QC/TC</text>
          <text x="310" y="535" fill="#a7f3d0" fontSize="19" fontWeight="900" textAnchor="middle">ΔSuniverse = 0</text>
        </g>

        <line x1="600" y1="100" x2="600" y2="580" stroke="#334155" strokeWidth="4" />

        <g>
          <text x="890" y="115" fill="#fda4af" fontSize="27" fontWeight="900" textAnchor="middle">
            REAL DEVICE
          </text>
          <rect x="670" y="155" width="440" height="390" rx="32" fill="#0f172a" stroke="#fb7185" strokeWidth="8" />
          <rect x="730" y="195" width="320" height="70" rx="20" fill="#7c2d12" />
          <text x="890" y="238" fill="#fed7aa" fontSize="21" fontWeight="900" textAnchor="middle">HOT RESERVOIR</text>
          <rect x="730" y="435" width="320" height="70" rx="20" fill="#164e63" />
          <text x="890" y="478" fill="#a5f3fc" fontSize="21" fontWeight="900" textAnchor="middle">COLD RESERVOIR</text>
          <circle cx="890" cy="350" r="65" fill="#4c1d95" stroke="#f472b6" strokeWidth="5" />
          <text x="890" y="358" fill="#f8fafc" fontSize="20" fontWeight="900" textAnchor="middle">DEVICE</text>

          {[0,1,2,3,4].map((i) => (
            <circle key={i} cx={790 + i * 50} cy={330 + (i % 2) * 55} r="9" fill="#fde047">
              <animate attributeName="opacity" values="0.2;1;0.2" dur={`${1.2 + i * 0.2}s`} repeatCount="indefinite" />
            </circle>
          ))}

          <text x="890" y="535" fill="#fda4af" fontSize="19" fontWeight="900" textAnchor="middle">ΔSuniverse &gt; 0</text>
        </g>

        <rect x="230" y="620" width="740" height="58" rx="22" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="658" fill="#ddd6fe" fontSize="21" fontWeight="900" textAnchor="middle">
          Irreversibility demands extra work and lowers COP below the Carnot value.
        </text>
      </svg>
    </div>
  );
}

function COPDerivationCards() {
  const cards = [
    {
      title: "Energy balance",
      equation: "QH = QC + Win",
      text: "The heat delivered to the hot side equals extracted heat plus supplied work.",
      tone: "violet" as Tone,
    },
    {
      title: "Refrigerator objective",
      equation: "COPR = QC/Win",
      text: "Desired effect: remove as much heat as possible from the cold space per unit work.",
      tone: "cyan" as Tone,
    },
    {
      title: "Heat-pump objective",
      equation: "COPHP = QH/Win",
      text: "Desired effect: deliver as much heat as possible to the warm space per unit work.",
      tone: "amber" as Tone,
    },
    {
      title: "Relationship",
      equation: "COPHP = COPR + 1",
      text: "Because QH = QC + Win.",
      tone: "emerald" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <article key={card.title} className={`rounded-3xl border p-5 ${toneMap[card.tone]}`}>
          <h3 className="text-lg font-black text-white">{card.title}</h3>
          <div className="mt-3 rounded-xl bg-black/25 p-3 text-center font-mono text-sm font-black text-white">
            {card.equation}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-200">{card.text}</p>
        </article>
      ))}
    </div>
  );
}

function CarnotCOPDerivation() {
  const steps = [
    {
      title: "Reversible heat ratio",
      equation: "QH/QC = TH/TC",
      text: "The same entropy magnitude crosses the two isothermal legs.",
    },
    {
      title: "Work input",
      equation: "Win = QH − QC",
      text: "The reversed device requires net supplied work.",
    },
    {
      title: "Refrigerator COP",
      equation: "COPR = QC/(QH−QC)",
      text: "Substitute the reversible temperature ratio.",
    },
    {
      title: "Carnot refrigerator",
      equation: "COPR,Carnot = TC/(TH−TC)",
      text: "Maximum possible refrigerator COP between the two reservoirs.",
    },
    {
      title: "Heat-pump COP",
      equation: "COPHP = QH/(QH−QC)",
      text: "The useful effect is heat delivered at the hot side.",
    },
    {
      title: "Carnot heat pump",
      equation: "COPHP,Carnot = TH/(TH−TC)",
      text: "Equivalent to COPR,Carnot + 1.",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <article key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Step {index + 1}</p>
          <h3 className="mt-2 text-lg font-black text-white">{step.title}</h3>
          <div className="mt-3 rounded-xl bg-black/25 p-3 text-center font-mono text-sm font-black text-cyan-200">
            {step.equation}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
        </article>
      ))}
    </div>
  );
}

function EngineRefrigeratorRelations() {
  const rows = [
    ["Carnot heat engine", "work output", "η = Wout/QH", "1 − TC/TH"],
    ["Carnot refrigerator", "heat removed from cold side", "COPR = QC/Win", "TC/(TH−TC)"],
    ["Carnot heat pump", "heat delivered to hot side", "COPHP = QH/Win", "TH/(TH−TC)"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Device</th>
            <th className="px-4 py-3 font-black text-white">Desired effect</th>
            <th className="px-4 py-3 font-black text-white">Performance definition</th>
            <th className="px-4 py-3 font-black text-white">Reversible value</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([device, desired, definition, value]) => (
            <tr key={device}>
              <td className="px-4 py-3 font-semibold text-slate-100">{device}</td>
              <td className="px-4 py-3 text-slate-300">{desired}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{definition}</td>
              <td className="px-4 py-3 font-mono text-emerald-300">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RealRefrigeratorAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="real-fridge-title real-fridge-description"
        className="h-auto w-full"
      >
        <title id="real-fridge-title">Simplified practical vapour-compression refrigerator loop</title>
        <desc id="real-fridge-description">
          The refrigerant absorbs heat inside the cold space, is compressed, rejects heat at the rear condenser,
          and undergoes pressure reduction before returning to the cold side.
        </desc>

        <defs>
          <marker id="rfArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#a78bfa" />
          </marker>
        </defs>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          PRACTICAL REFRIGERATOR: A REAL, IRREVERSIBLE CYCLE
        </text>

        <rect x="80" y="210" width="250" height="250" rx="30" fill="#164e63" stroke="#22d3ee" strokeWidth="8" />
        <text x="205" y="270" fill="#a5f3fc" fontSize="24" fontWeight="900" textAnchor="middle">EVAPORATOR</text>
        <text x="205" y="315" fill="#cbd5e1" fontSize="18" textAnchor="middle">inside cold space</text>
        <text x="205" y="365" fill="#a5f3fc" fontSize="21" fontWeight="900" textAnchor="middle">absorbs QC</text>

        <rect x="475" y="100" width="250" height="180" rx="30" fill="#4c1d95" stroke="#f472b6" strokeWidth="8" />
        <text x="600" y="160" fill="#f9a8d4" fontSize="24" fontWeight="900" textAnchor="middle">COMPRESSOR</text>
        <text x="600" y="205" fill="#cbd5e1" fontSize="18" textAnchor="middle">requires electrical work</text>
        <text x="600" y="240" fill="#fda4af" fontSize="20" fontWeight="900" textAnchor="middle">pressure and temperature rise</text>

        <rect x="870" y="210" width="250" height="250" rx="30" fill="#7c2d12" stroke="#f97316" strokeWidth="8" />
        <text x="995" y="270" fill="#fed7aa" fontSize="24" fontWeight="900" textAnchor="middle">CONDENSER</text>
        <text x="995" y="315" fill="#cbd5e1" fontSize="18" textAnchor="middle">rear heat exchanger</text>
        <text x="995" y="365" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">rejects QH</text>

        <rect x="475" y="505" width="250" height="160" rx="30" fill="#0f172a" stroke="#34d399" strokeWidth="8" />
        <text x="600" y="565" fill="#a7f3d0" fontSize="23" fontWeight="900" textAnchor="middle">EXPANSION DEVICE</text>
        <text x="600" y="610" fill="#cbd5e1" fontSize="18" textAnchor="middle">pressure drops irreversibly</text>

        <path d="M330 290 C420 160 430 160 475 180" fill="none" stroke="#a78bfa" strokeWidth="5" markerEnd="url(#rfArrow)" />
        <path d="M725 180 C810 155 835 245 870 290" fill="none" stroke="#a78bfa" strokeWidth="5" markerEnd="url(#rfArrow)" />
        <path d="M995 460 C920 580 820 600 725 585" fill="none" stroke="#a78bfa" strokeWidth="5" markerEnd="url(#rfArrow)" />
        <path d="M475 585 C375 600 275 540 205 460" fill="none" stroke="#a78bfa" strokeWidth="5" markerEnd="url(#rfArrow)" />

        <circle r="11" fill="#fde047">
          <animateMotion dur="7s" repeatCount="indefinite" path="M330 290 C420 160 430 160 475 180 C620 80 780 130 870 290 C950 470 790 620 725 585 C520 650 320 580 205 460 C120 360 190 250 330 290" />
        </circle>

        <rect x="310" y="690" width="580" height="44" rx="20" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="719" fill="#ddd6fe" fontSize="19" fontWeight="900" textAnchor="middle">
          Real COP is lower because of friction, finite temperature gaps and throttling.
        </text>
      </svg>
    </div>
  );
}

function WorkedExample() {
  return (
    <article className="rounded-[2rem] border border-amber-300/25 bg-amber-300/[0.06] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
            Original Synergic Bond worked example
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            Carnot refrigerator and heat-pump performance
          </h3>
        </div>
        <Chip tone="amber">FULL ENERGY AUDIT</Chip>
      </div>

      <p className="mt-5 leading-7 text-slate-200">
        A reversible refrigerator operates between a cold compartment at 260 K and a room at 300 K.
        It removes 5.20 kJ of heat from the compartment per cycle. Find the work input, heat rejected,
        refrigerator COP, and heat-pump COP.
      </p>

      <div className="mt-5 space-y-4">
        <Formula label="Carnot refrigerator COP">
          COP<sub>R</sub> = T<sub>C</sub>/(T<sub>H</sub>−T<sub>C</sub>) = 260/40 = 6.50
        </Formula>

        <Formula label="Work input">
          W<sub>in</sub> = Q<sub>C</sub>/COP<sub>R</sub> = 5.20/6.50 = 0.800 kJ
        </Formula>

        <Formula label="Heat rejected">
          Q<sub>H</sub> = Q<sub>C</sub> + W<sub>in</sub> = 6.00 kJ
        </Formula>

        <Formula label="Heat-pump COP">
          COP<sub>HP</sub> = Q<sub>H</sub>/W<sub>in</sub> = 6.00/0.800 = 7.50
        </Formula>

        <Formula label="Relationship check">
          COP<sub>HP</sub> = COP<sub>R</sub> + 1 = 7.50
        </Formula>
      </div>

      <ConceptLens title="Interpretation" tone="violet">
        A COP greater than one does not violate energy conservation. The device does not create heat; it transfers
        {String.raw`\(Q_C\)`} from the cold space and adds the supplied work before rejecting {String.raw`\(Q_H\)`}.
      </ConceptLens>
    </article>
  );
}

function EntropyTransitionCards() {
  const cards = [
    {
      title: "Cyclic device",
      equation: "ΔSdevice = 0",
      text: "The working substance returns to its initial state.",
      tone: "violet" as Tone,
    },
    {
      title: "Cold reservoir",
      equation: "ΔSC = −QC/TC",
      text: "The cold reservoir loses heat.",
      tone: "cyan" as Tone,
    },
    {
      title: "Hot reservoir",
      equation: "ΔSH = +QH/TH",
      text: "The hot reservoir gains heat.",
      tone: "amber" as Tone,
    },
    {
      title: "Universe",
      equation: "ΔSuniv = QH/TH − QC/TC ≥ 0",
      text: "Equality holds only for a reversible refrigerator.",
      tone: "emerald" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <article key={card.title} className={`rounded-3xl border p-5 ${toneMap[card.tone]}`}>
          <h3 className="text-lg font-black text-white">{card.title}</h3>
          <div className="mt-3 rounded-xl bg-black/25 p-3 text-center font-mono text-sm font-black text-white">
            {card.equation}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-200">{card.text}</p>
        </article>
      ))}
    </div>
  );
}

const problems = [
  {
    title: "Concept Application 1 — direct refrigerator COP",
    question:
      "A Carnot refrigerator operates between 250 K and 300 K. Find COPR.",
    solution:
      "COPR = TC/(TH−TC) = 250/50 = 5.",
  },
  {
    title: "Concept Application 2 — heat-pump COP",
    question:
      "For the same temperatures, find COPHP.",
    solution:
      "COPHP = TH/(TH−TC) = 300/50 = 6, also equal to COPR + 1.",
  },
  {
    title: "Concept Application 3 — energy balance",
    question:
      "A refrigerator removes 900 J from its cold compartment while consuming 300 J work. Find heat rejected and COPR.",
    solution:
      "QH = QC + Win = 1200 J. COPR = QC/Win = 900/300 = 3.",
  },
  {
    title: "Concept Application 4 — work requirement",
    question:
      "A reversible refrigerator removes 12 kJ from a 270 K space and rejects heat to a 300 K room. Find minimum work.",
    solution:
      "COPR = 270/(300−270) = 9. Therefore Win,min = 12/9 = 1.333 kJ.",
  },
  {
    title: "Concept Application 5 — unknown cold temperature",
    question:
      "A Carnot refrigerator has COPR = 4 and rejects heat to 300 K. Find TC.",
    solution:
      "4 = TC/(300−TC). Hence 1200−4TC = TC, so TC = 240 K.",
  },
  {
    title: "Concept Application 6 — unknown hot temperature",
    question:
      "A reversible heat pump has COPHP = 5 and extracts heat from 280 K surroundings. Find TH.",
    solution:
      "5 = TH/(TH−280). Thus 5TH−1400 = TH, so TH = 350 K.",
  },
  {
    title: "Concept Application 7 — temperature-lift penalty",
    question:
      "For a refrigerator with TC = 260 K, compare ideal COP when TH is 280 K and 320 K.",
    solution:
      "At 280 K, COPR = 260/20 = 13. At 320 K, COPR = 260/60 ≈ 4.33. A larger temperature lift sharply reduces performance.",
  },
  {
    title: "Concept Application 8 — impossible COP",
    question:
      "A refrigerator between 250 K and 300 K claims COPR = 7. Assess it.",
    solution:
      "Carnot maximum is 250/50 = 5. A COP of 7 exceeds the reversible limit and is impossible.",
  },
  {
    title: "Concept Application 9 — entropy test",
    question:
      "A refrigerator removes 500 J from 250 K and rejects 650 J to 300 K. Is the cycle thermodynamically possible?",
    solution:
      "ΔSuniv = 650/300 − 500/250 = 2.1667−2.0000 = +0.1667 J K⁻¹. It is possible and irreversible. Work input is 150 J.",
  },
  {
    title: "Concept Application 10 — forbidden refrigerator",
    question:
      "A device transfers 400 J from 250 K to 300 K with no work and no other effect. Test it.",
    solution:
      "ΔSuniv = 400/300−400/250 = −0.2667 J K⁻¹, which is impossible. It violates the Clausius statement.",
  },
  {
    title: "Concept Application 11 — COP greater than one",
    question:
      "Explain why COPHP = 4 does not imply 400% energy efficiency.",
    solution:
      "COP compares useful heat delivered with work input, not output energy with total energy input. The delivered heat includes both extracted environmental heat and supplied work.",
  },
  {
    title: "Concept Application 12 — engine relationship",
    question:
      "For the same TH and TC, express the Carnot refrigerator COP in terms of Carnot-engine efficiency η.",
    solution:
      "η = (TH−TC)/TH. Therefore COPR = TC/(TH−TC) = (1−η)/η.",
  },
  {
    title: "Concept Application 13 — heat-pump relationship",
    question:
      "Express Carnot heat-pump COP in terms of engine efficiency η.",
    solution:
      "COPHP = TH/(TH−TC) = 1/η.",
  },
  {
    title: "Concept Application 14 — real device losses",
    question:
      "Why does throttling lower the COP of a practical refrigerator relative to a reversed Carnot device?",
    solution:
      "Throttling is irreversible and produces entropy. Additional compressor work is required for the same cooling effect, so actual COP falls below the reversible maximum.",
  },
  {
    title: "Concept Application 15 — open door paradox",
    question:
      "Can an open refrigerator cool a closed room?",
    solution:
      "No. The refrigerator rejects QH = QC + Win into the room while removing only QC from it. The net room energy gain equals the electrical work input, so the room warms.",
  },
  {
    title: "Concept Application 16 — reversible condition",
    question:
      "For a reversible refrigerator, prove QH/TH = QC/TC.",
    solution:
      "The cyclic working substance has zero entropy change. Reversibility also requires zero total entropy change, so QH/TH−QC/TC = 0.",
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
    "A refrigerator creates cold.",
    "Incorrect",
    "It extracts heat from a cold region and rejects a larger heat quantity to a warmer region.",
  ],
  [
    "COP must be less than one.",
    "Incorrect",
    "COP is not an efficiency. It may exceed one because the useful heat includes transferred environmental energy.",
  ],
  [
    "A refrigerator and a heat pump are different thermodynamic cycles.",
    "Incorrect",
    "The same reversed cycle can serve both purposes; the desired heat transfer differs.",
  ],
  [
    "COPHP equals COPR.",
    "Incorrect",
    "COPHP = COPR + 1 because QH = QC + Win.",
  ],
  [
    "The larger the temperature gap, the larger the COP.",
    "Incorrect",
    "A larger temperature lift requires more work and lowers COP.",
  ],
  [
    "A reversible refrigerator transfers heat from cold to hot without work.",
    "Incorrect",
    "Even the reversible device requires work input; reversibility only minimises it.",
  ],
  [
    "Opening a refrigerator cools the room.",
    "Incorrect",
    "The room gains the electrical work input as net energy and warms.",
  ],
  [
    "Throttling is a reversible adiabatic expansion.",
    "Incorrect",
    "A practical expansion valve is adiabatic but strongly irreversible.",
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
      title: "Why the back of a refrigerator is warm",
      text: "The condenser rejects both the heat extracted from the cabinet and the electrical work supplied to the compressor.",
      tone: "amber" as Tone,
    },
    {
      title: "Air conditioner on a hot day",
      text: "As outdoor temperature rises, the temperature lift grows and the ideal and actual COP both fall.",
      tone: "cyan" as Tone,
    },
    {
      title: "Heat pump in winter",
      text: "A heat pump can deliver several joules of indoor heating per joule of electrical work by extracting environmental heat.",
      tone: "emerald" as Tone,
    },
    {
      title: "Freezer frost and dirty coils",
      text: "Poor heat transfer increases required temperature differences, raising compressor work and lowering practical COP.",
      tone: "violet" as Tone,
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

export default function ThermodynamicsPart15() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_86%_15%,rgba(217,70,239,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(251,191,36,0.10),transparent_34%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap gap-2">
            <Chip tone="cyan">SYNERGIC BOND MASTER NOTES</Chip>
            <Chip tone="violet">COMPLETE THEORY</Chip>
            <Chip tone="amber">REFRIGERATOR & HEAT-PUMP EDITION</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Reversed-Cycle Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Work does not create cold—it pumps heat uphill
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A refrigerator removes heat from a cold region. A heat pump delivers heat to a warm region.
                Both use the same reversed cycle and must receive work to oppose the natural direction of heat flow.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Reversed-cycle core
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-violet-400/10 p-4 font-mono text-lg font-black text-white">
                  Q<sub>H</sub> = Q<sub>C</sub> + W<sub>in</sub>
                </div>
                <div className="rounded-xl bg-cyan-400/10 p-4 font-mono text-lg font-black text-white">
                  COP<sub>R</sub> = Q<sub>C</sub>/W<sub>in</sub>
                </div>
                <div className="rounded-xl bg-amber-400/10 p-4 font-mono text-lg font-black text-white">
                  COP<sub>HP</sub> = Q<sub>H</sub>/W<sub>in</sub>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Ideal refrigerator: the Carnot cycle run backward"
          subtitle="Heat is absorbed at low temperature and rejected at high temperature by supplying work."
        >
          <p>
            The primary chapter sequence introduces the ideal refrigerator as the reverse of a heat engine:
            heat {String.raw`\(Q_C\)`} is removed from a cold reservoir, work is supplied, and a larger heat {String.raw`\(Q_H\)`} is rejected
            to a hotter reservoir.
          </p>

          <ReversedEngineAnimation />

          <Formula label="Energy balance">
            Q<sub>H</sub> = Q<sub>C</sub> + W<sub>in</sub>
          </Formula>

          <ConceptLens title="Second-Law meaning" tone="rose">
            Heat does not pass from colder to hotter surroundings as the sole effect of a cyclic device.
            External work is required.
          </ConceptLens>
        </Section>

        <Section
          index="02"
          title="Refrigerator versus heat pump"
          subtitle="The cycle is the same; the desired effect is different."
        >
          <COPDerivationCards />

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Refrigerator" tone="cyan">
              The useful output is {String.raw`\(Q_C\)`}: heat removed from the refrigerated space.
            </ConceptLens>
            <ConceptLens title="Heat pump" tone="amber">
              The useful output is {String.raw`\(Q_H\)`}: heat delivered to the warm building or process.
            </ConceptLens>
          </div>

          <ConceptLens title="COP is not thermal efficiency" tone="violet">
            A coefficient of performance compares useful heat transfer with work input. It may be greater than one
            without violating conservation because environmental heat is also transferred.
          </ConceptLens>
        </Section>

        <Section index="03" title="Reversed Carnot cycle">
          <ReversedCarnotStagesAnimation />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <ConceptLens title="1 → 2" tone="cyan">
              Reversible isothermal expansion at {String.raw`\(T_C\)`}; the working substance absorbs {String.raw`\(Q_C\)`}.
            </ConceptLens>
            <ConceptLens title="2 → 3" tone="rose">
              Reversible adiabatic compression; temperature rises from {String.raw`\(T_C\)`} to {String.raw`\(T_H\)`}.
            </ConceptLens>
            <ConceptLens title="3 → 4" tone="amber">
              Reversible isothermal compression at {String.raw`\(T_H\)`}; heat {String.raw`\(Q_H\)`} is rejected.
            </ConceptLens>
            <ConceptLens title="4 → 1" tone="emerald">
              Reversible adiabatic expansion; temperature falls from {String.raw`\(T_H\)`} to {String.raw`\(T_C\)`}.
            </ConceptLens>
          </div>
        </Section>

        <Section
          index="04"
          title="Derivation of the maximum coefficients of performance"
          subtitle="The reversible device requires the minimum work for a specified heat transfer."
        >
          <CarnotCOPDerivation />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Carnot refrigerator">
              COP<sub>R,max</sub> = T<sub>C</sub>/(T<sub>H</sub>−T<sub>C</sub>)
            </Formula>
            <Formula label="Carnot heat pump">
              COP<sub>HP,max</sub> = T<sub>H</sub>/(T<sub>H</sub>−T<sub>C</sub>)
            </Formula>
          </div>

          <Formula label="Universal relationship">
            COP<sub>HP</sub> = COP<sub>R</sub> + 1
          </Formula>

          <ConceptLens title="Absolute temperature requirement" tone="rose">
            All Carnot temperature formulas require kelvin.
          </ConceptLens>
        </Section>

        <Section index="05" title="Engine, refrigerator, and heat-pump relationships">
          <EngineRefrigeratorRelations />

          <div className="grid gap-4 md:grid-cols-3">
            <Formula label="In terms of engine efficiency">
              COP<sub>HP</sub> = 1/η
            </Formula>
            <Formula label="Refrigerator relationship">
              COP<sub>R</sub> = (1−η)/η
            </Formula>
            <Formula label="Heat-pump relationship">
              COP<sub>HP</sub> = COP<sub>R</sub> + 1
            </Formula>
          </div>

          <ConceptLens title="Same reservoir temperatures" tone="sky">
            These compact relations use the Carnot engine, refrigerator, and heat pump operating between the same {String.raw`\(T_H\)`} and {String.raw`\(T_C\)`}.
          </ConceptLens>
        </Section>

        <Section index="06" title="Temperature lift controls work demand">
          <COPGraph />

          <ConceptLens title="Small temperature gap" tone="emerald">
            When {String.raw`\(T_H-T_C\)`} is small, the reversible COP can be very large because little work is required per unit heat transferred.
          </ConceptLens>

          <ConceptLens title="Large temperature gap" tone="rose">
            Deep freezing on a hot day demands a large temperature lift. Work input rises and COP falls.
          </ConceptLens>
        </Section>

        <Section index="07" title="Original complete worked example">
          <WorkedExample />
        </Section>

        <Section
          index="08"
          title="Practical refrigerator"
          subtitle="Real devices approximate the objective but not the reversible Carnot path."
        >
          <RealRefrigeratorAnimation />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <ConceptLens title="Evaporator" tone="cyan">
              The circulating refrigerant absorbs heat from the cold interior.
            </ConceptLens>
            <ConceptLens title="Compressor" tone="rose">
              Electrical work raises refrigerant pressure and temperature.
            </ConceptLens>
            <ConceptLens title="Condenser" tone="amber">
              Heat is rejected to the surrounding room at the rear coil.
            </ConceptLens>
            <ConceptLens title="Expansion device" tone="emerald">
              Pressure drops irreversibly before the refrigerant returns to the cold side.
            </ConceptLens>
          </div>

          <ConceptLens title="Chapter boundary" tone="violet">
            The operating-cycle direction is treated here. Detailed latent heat, phase-change enthalpy and refrigerant
            calorimetry belong to the separate Thermochemistry notes.
          </ConceptLens>
        </Section>

        <Section index="09" title="Why real COP is below Carnot COP">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Finite temperature gaps", "Heat exchangers require non-zero driving differences."],
              ["Compressor friction", "Mechanical and electrical dissipation raise work demand."],
              ["Pressure losses", "Flow through pipes and valves destroys useful pressure potential."],
              ["Throttling", "The expansion device is strongly irreversible and produces entropy."],
            ].map(([title, text], index) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Loss {index + 1}</p>
                <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          index="10"
          title="Entropy bridge"
          subtitle="The refrigerator reveals the formal state function needed to quantify direction and irreversibility."
        >
          <EntropyBridgeAnimation />
          <EntropyTransitionCards />

          <Formula label="Reversible condition">
            Q<sub>H</sub>/T<sub>H</sub> = Q<sub>C</sub>/T<sub>C</sub>
          </Formula>

          <Formula label="Second-Law inequality">
            ΔS<sub>universe</sub> = Q<sub>H</sub>/T<sub>H</sub> − Q<sub>C</sub>/T<sub>C</sub> ≥ 0
          </Formula>

          <ConceptLens title="Why entropy becomes unavoidable" tone="violet">
            The First Law gives only {String.raw`\(Q_H=Q_C+W_{\mathrm{in}}\)`}. It cannot distinguish a possible refrigerator from an
            impossible work-free cold-to-hot heat transfer. The entropy balance supplies that direction test.
          </ConceptLens>
        </Section>

        <Section index="11" title="Clausius and Kelvin–Planck statements are equivalent">
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
              <Chip tone="cyan">CLAUSIUS STATEMENT</Chip>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                No cyclic device can have the sole effect of transferring heat from a colder body to a hotter body.
              </p>
            </article>
            <article className="rounded-3xl border border-amber-300/20 bg-amber-300/[0.05] p-5">
              <Chip tone="amber">KELVIN–PLANCK STATEMENT</Chip>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                No cyclic device can have the sole effect of absorbing heat from one reservoir and converting it completely into work.
              </p>
            </article>
          </div>

          <ConceptLens title="Why one violation would create the other" tone="rose">
            A hypothetical perfect heat engine could power an ordinary refrigerator without external work, violating Clausius.
            Conversely, a work-free refrigerator could be coupled to an ordinary engine to convert heat from one reservoir completely into work.
          </ConceptLens>
        </Section>

        <Section index="12" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="13" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={15} />

<Section index="14" title="Complete worked examples and applications">
          <ProblemLadder />
        </Section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Synergic Bond rapid recall
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                A reversed cycle moves heat uphill; entropy sets the minimum work
              </h2>
            </div>
            <Chip tone="emerald">PART 15 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Energy balance", "QH = QC + Win"],
              ["Refrigerator", "COPR = QC/Win"],
              ["Heat pump", "COPHP = QH/Win = COPR + 1"],
              ["Carnot limit", "COPR,max = TC/(TH−TC)"],
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
