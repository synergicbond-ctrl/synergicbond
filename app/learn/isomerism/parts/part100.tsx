import Link from "next/link";

const BOND = "currentColor";
const CYAN = "#67e8f9";
const VIOLET = "#c4b5fd";

type Example = Readonly<{
  number: number;
  sites: number;
  result: string;
  note: string;
}>;

const EXAMPLES: readonly Example[] = [
  {
    number: 5,
    sites: 3,
    result: "2³ = 8",
    note: "Three independent alkene geometrical elements.",
  },
  {
    number: 6,
    sites: 2,
    result: "2² = 4",
    note: "The C≡C unit does not itself generate E/Z isomerism.",
  },
  {
    number: 7,
    sites: 2,
    result: "2² = 4",
    note: "One C=C and one C=N geometrical element.",
  },
  {
    number: 8,
    sites: 5,
    result: "2⁵ = 32",
    note: "Three π stereoelements plus two constrained cyclobutane relationships.",
  },
  {
    number: 9,
    sites: 3,
    result: "2³ = 8",
    note: "Cumulene/ring/alkene system gives three independent geometrical elements.",
  },
  {
    number: 10,
    sites: 5,
    result: "2⁵ = 32",
    note: "Extended unsaturated chain plus rigid spiro/cyclobutane framework.",
  },
  {
    number: 11,
    sites: 3,
    result: "2^(3−1) + 2^((3−1)/2) = 6",
    note: "Symmetric odd-member stereoelement set: normal and self-related forms must be counted separately.",
  },
];

function DoubleBond({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ox = (-dy / len) * 5;
  const oy = (dx / len) * 5;

  return (
    <g stroke={BOND} strokeWidth="3">
      <line x1={x1 + ox} y1={y1 + oy} x2={x2 + ox} y2={y2 + oy} />
      <line x1={x1 - ox} y1={y1 - oy} x2={x2 - ox} y2={y2 - oy} />
    </g>
  );
}

function TripleBond({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return (
    <g stroke={BOND}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="3" />
      <line x1={x1} y1={y1 - 7} x2={x2} y2={y2 - 7} strokeWidth="2" />
      <line x1={x1} y1={y1 + 7} x2={x2} y2={y2 + 7} strokeWidth="2" />
    </g>
  );
}

function Cyclobutane({
  cx,
  cy,
  size = 48,
}: {
  cx: number;
  cy: number;
  size?: number;
}) {
  return (
    <path
      d={`M${cx - size},${cy - size} L${cx + size},${cy - size}
          L${cx + size},${cy + size} L${cx - size},${cy + size} Z`}
      fill="none"
      stroke={BOND}
      strokeWidth="3"
    />
  );
}

function Structure5() {
  return (
    <svg viewBox="0 0 760 180" className="h-auto w-full text-slate-100">
      <text x="20" y="95" fontSize="20">CH₃</text>
      <line x1="75" y1="90" x2="135" y2="55" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={135} y1={55} x2={205} y2={90} />
      <line x1="205" y1="90" x2="275" y2="50" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={275} y1={50} x2={345} y2={90} />
      <line x1="345" y1="90" x2="415" y2="52" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={415} y1={52} x2={485} y2={90} />
      <line x1="485" y1="90" x2="555" y2="125" stroke={BOND} strokeWidth="3" />
      <line x1="555" y1="125" x2="610" y2="125" stroke={BOND} strokeWidth="3" />
      <text x="620" y="131" fontSize="20">Ph</text>
      <g fill={CYAN} fontSize="15">
        <text x="160" y="35">E/Z₁</text>
        <text x="300" y="30">E/Z₂</text>
        <text x="440" y="33">E/Z₃</text>
      </g>
    </svg>
  );
}

function Structure6() {
  return (
    <svg viewBox="0 0 760 180" className="h-auto w-full text-slate-100">
      <text x="20" y="100" fontSize="20">CH₃</text>
      <line x1="75" y1="95" x2="145" y2="60" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={145} y1={60} x2={215} y2={95} />
      <line x1="215" y1="95" x2="275" y2="95" stroke={BOND} strokeWidth="3" />
      <TripleBond x1={275} y1={95} x2={365} y2={95} />
      <line x1="365" y1="95" x2="425" y2="60" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={425} y1={60} x2={495} y2={95} />
      <line x1="495" y1="95" x2="565" y2="125" stroke={BOND} strokeWidth="3" />
      <text x="585" y="132" fontSize="20">CH₂Ph</text>
      <text x="165" y="35" fill={CYAN} fontSize="15">E/Z₁</text>
      <text x="445" y="35" fill={CYAN} fontSize="15">E/Z₂</text>
    </svg>
  );
}

function Structure7() {
  return (
    <svg viewBox="0 0 650 180" className="h-auto w-full text-slate-100">
      <text x="20" y="100" fontSize="20">CH₃</text>
      <line x1="75" y1="95" x2="150" y2="55" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={150} y1={55} x2={230} y2={95} />
      <line x1="230" y1="95" x2="315" y2="55" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={315} y1={55} x2={400} y2={95} />
      <text x="410" y="102" fontSize="20">NH</text>
      <text x="172" y="32" fill={CYAN} fontSize="15">C=C</text>
      <text x="330" y="32" fill={VIOLET} fontSize="15">C=N</text>
    </svg>
  );
}

function Structure8() {
  return (
    <svg viewBox="0 0 840 240" className="h-auto w-full text-slate-100">
      <Cyclobutane cx={95} cy={120} size={48} />
      <line x1="143" y1="72" x2="205" y2="45" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={205} y1={45} x2={275} y2={80} />
      <line x1="275" y1="80" x2="340" y2="45" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={340} y1={45} x2={410} y2={80} />
      <line x1="410" y1="80" x2="475" y2="45" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={475} y1={45} x2={545} y2={80} />
      <line x1="545" y1="80" x2="610" y2="110" stroke={BOND} strokeWidth="3" />
      <Cyclobutane cx={670} cy={120} size={48} />

      <g fill={CYAN} fontSize="14">
        <text x="70" y="205">ring GI₁</text>
        <text x="218" y="25">π₂</text>
        <text x="350" y="25">π₃</text>
        <text x="490" y="25">π₄</text>
        <text x="645" y="205">ring GI₅</text>
      </g>
    </svg>
  );
}

function Structure9() {
  return (
    <svg viewBox="0 0 820 235" className="h-auto w-full text-slate-100">
      <text x="20" y="123" fontSize="20">CH₃</text>
      <line x1="75" y1="118" x2="135" y2="80" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={135} y1={80} x2={205} y2={118} />
      <DoubleBond x1={205} y1={118} x2={275} y2={80} />
      <DoubleBond x1={275} y1={80} x2={345} y2={118} />
      <line x1="345" y1="118" x2="405" y2="118" stroke={BOND} strokeWidth="3" />

      <Cyclobutane cx={465} cy={118} size={42} />

      <line x1="507" y1="118" x2="565" y2="82" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={565} y1={82} x2={635} y2={118} />
      <line x1="635" y1="118" x2="700" y2="150" stroke={BOND} strokeWidth="3" />
      <text x="710" y="157" fontSize="20">CH₃</text>

      <text x="205" y="40" fill={CYAN} fontSize="15">cumulene stereoelement</text>
      <text x="435" y="205" fill={VIOLET} fontSize="15">ring relationship</text>
      <text x="580" y="58" fill={CYAN} fontSize="15">E/Z</text>
    </svg>
  );
}

function Structure10() {
  return (
    <svg viewBox="0 0 980 260" className="h-auto w-full text-slate-100">
      <text x="15" y="130" fontSize="20">CH₃</text>
      <line x1="70" y1="125" x2="125" y2="90" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={125} y1={90} x2={190} y2={125} />
      <DoubleBond x1={190} y1={125} x2={255} y2={90} />

      {/* three linked/spiro cyclobutanes */}
      <path
        d="M255 90 L320 35 L385 90 L320 145 Z
           M385 90 L450 35 L515 90 L450 145 Z
           M515 90 L580 35 L645 90 L580 145 Z"
        fill="none"
        stroke={BOND}
        strokeWidth="3"
      />

      <line x1="645" y1="90" x2="700" y2="125" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={700} y1={125} x2={765} y2={90} />
      <line x1="765" y1="90" x2="820" y2="125" stroke={BOND} strokeWidth="3" />
      <DoubleBond x1={820} y1={125} x2={885} y2={90} />
      <text x="905" y="97" fontSize="20">CH₃</text>

      <g fill={CYAN} fontSize="14">
        <text x="145" y="65">π₁</text>
        <text x="205" y="165">π₂</text>
        <text x="400" y="205">rigid ring stereoelement</text>
        <text x="715" y="165">π₄</text>
        <text x="835" y="165">π₅</text>
      </g>
    </svg>
  );
}

function Structure11() {
  return (
    <svg viewBox="0 0 840 245" className="h-auto w-full text-slate-100">
      <path
        d="M125 120 L200 55 L275 120 L200 185 Z
           M275 120 L350 55 L425 120 L350 185 Z
           M425 120 L500 55 L575 120 L500 185 Z"
        fill="none"
        stroke={BOND}
        strokeWidth="3"
      />

      <line x1="70" y1="120" x2="125" y2="120" stroke={BOND} strokeWidth="3" />
      <line x1="575" y1="120" x2="630" y2="120" stroke={BOND} strokeWidth="3" />

      <text x="35" y="126" fontSize="19">A</text>
      <text x="642" y="126" fontSize="19">A</text>

      <line
        x1="350"
        y1="20"
        x2="350"
        y2="220"
        stroke={VIOLET}
        strokeWidth="2"
        strokeDasharray="7 5"
      />

      <text x="350" y="235" textAnchor="middle" fill={VIOLET} fontSize="15">
        molecular symmetry couples terminally equivalent configurations
      </text>
    </svg>
  );
}

function Structure({ number }: { number: number }) {
  switch (number) {
    case 5:
      return <Structure5 />;
    case 6:
      return <Structure6 />;
    case 7:
      return <Structure7 />;
    case 8:
      return <Structure8 />;
    case 9:
      return <Structure9 />;
    case 10:
      return <Structure10 />;
    case 11:
      return <Structure11 />;
    default:
      return null;
  }
}

export default function IsomerismPart80() {
  return (
    <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12">
      <article className="mx-auto max-w-6xl">
        <Link
          href="/learn/isomerism"
          className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100"
        >
          Isomerism
        </Link>

        <header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(34,211,238,.09),rgba(2,6,23,.8),rgba(139,92,246,.1))] p-6 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">
            Geometrical Isomerism · source reconstruction
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            Exact GI counting: source structures 5–11
          </h1>
        </header>

        <section className="mt-7 space-y-5">
          {EXAMPLES.map((example) => (
            <article
              key={example.number}
              className="rounded-2xl border border-white/10 bg-white/[.035] p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.2em] text-violet-200">
                    Example {example.number}
                  </p>
                  <h2 className="mt-1 text-xl font-black text-cyan-200">
                    Number of geometrical stereoelements = {example.sites}
                  </h2>
                </div>

                <div className="rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 font-mono text-lg font-black text-cyan-100">
                  {example.result}
                </div>
              </div>

              <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/15 bg-[#050b16] p-3">
                <Structure number={example.number} />
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {example.note}
              </p>
            </article>
          ))}

          <section className="rounded-2xl border border-violet-300/20 bg-violet-300/[.05] p-5">
            <h2 className="text-xl font-black text-violet-200">
              Symmetric counting rule
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              A simple 2ⁿ count is valid only when all geometrical
              stereoelements are independent and no whole-molecule symmetry
              identifies configurations. In the symmetric three-element source
              case:
            </p>
            <div className="mt-3 rounded-xl border border-white/10 bg-[#050b16] p-4 text-center font-mono text-xl font-black text-cyan-100">
              2^(3−1) + 2^((3−1)/2) = 4 + 2 = 6
            </div>
          </section>
        </section>

        <nav className="mt-8 flex justify-between border-t border-white/10 pt-6">
          <Link
            href="/learn/isomerism/79"
            className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200"
          >
            ← 79
          </Link>
          <Link
            href="/learn/isomerism/81"
            className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100"
          >
            81 →
          </Link>
        </nav>
      </article>
    </main>
  );
}