import Link from "next/link";

type Point = Readonly<{ x: number; y: number }>;

const STROKE = "currentColor";
const CYAN = "#67e8f9";
const VIOLET = "#c4b5fd";
const GREEN = "#86efac";

function SolidWedge({
  from,
  to,
  width = 15,
}: {
  from: Point;
  to: Point;
  width?: number;
}) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) || 1;
  const px = (-dy / length) * width;
  const py = (dx / length) * width;

  return (
    <polygon
      points={`${from.x},${from.y} ${to.x + px},${to.y + py} ${
        to.x - px
      },${to.y - py}`}
      fill={STROKE}
    />
  );
}

function HashedWedge({
  from,
  to,
}: {
  from: Point;
  to: Point;
}) {
  const segments = Array.from({ length: 7 }, (_, index) => {
    const t = (index + 1) / 8;
    const x = from.x + (to.x - from.x) * t;
    const y = from.y + (to.y - from.y) * t;

    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.hypot(dx, dy) || 1;
    const half = 1.5 + t * 7;
    const px = (-dy / length) * half;
    const py = (dx / length) * half;

    return (
      <line
        key={index}
        x1={x - px}
        y1={y - py}
        x2={x + px}
        y2={y + py}
        stroke={STROKE}
        strokeWidth={2}
      />
    );
  });

  return <g>{segments}</g>;
}

function PlaneOfSymmetryExamples() {
  return (
    <svg fill="currentColor"
      viewBox="0 0 760 340"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Explicit molecular planes of symmetry"
    >
      <g stroke={STROKE} strokeWidth="3" fill="none">
        {/* cis-1,2-disubstituted cyclopropane */}
        <path d="M90 170 L155 75 L220 170 Z" />
        <line x1="90" y1="170" x2="90" y2="225" />
        <line x1="220" y1="170" x2="220" y2="225" />

        {/* meso Fischer skeleton */}
        <line x1="350" y1="65" x2="350" y2="255" />
        <line x1="285" y1="125" x2="415" y2="125" />
        <line x1="285" y1="195" x2="415" y2="195" />

        {/* benzene molecular plane */}
        <path d="M545 110 L600 75 L655 110 L655 175 L600 210 L545 175 Z" />
        <circle cx="600" cy="143" r="38" />
      </g>

      <g stroke={CYAN} strokeWidth="3" strokeDasharray="8 6">
        <line x1="155" y1="35" x2="155" y2="270" />
        <line x1="250" y1="160" x2="450" y2="160" />
        <line x1="500" y1="143" x2="700" y2="143" />
      </g>

      <g fontSize="17" fontWeight="600">
        <text x="56" y="245">Cl</text>
        <text x="212" y="245">Cl</text>
        <text x="155" y="305" textAnchor="middle" fill={CYAN}>
          σv
        </text>

        <text x="328" y="45">CO₂H</text>
        <text x="329" y="285">CO₂H</text>
        <text x="267" y="120">H</text>
        <text x="392" y="120">OH</text>
        <text x="267" y="200">OH</text>
        <text x="395" y="200">H</text>
        <text x="350" y="315" textAnchor="middle" fill={CYAN}>
          internal σ plane → meso
        </text>

        <text x="600" y="285" textAnchor="middle" fill={CYAN}>
          molecular plane = σh
        </text>
      </g>
    </svg>
  );
}

function ProperAxes() {
  return (
    <svg fill="currentColor"
      viewBox="0 0 760 350"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="C2 C3 and C4 proper rotation axes"
    >
      {/* C2: substituted cyclobutane */}
      <g transform="translate(20 20)">
        <g stroke={STROKE} strokeWidth="3" fill="none">
          <rect x="70" y="80" width="120" height="120" />
        </g>
        <SolidWedge from={{ x: 70, y: 80 }} to={{ x: 35, y: 40 }} />
        <HashedWedge from={{ x: 190, y: 80 }} to={{ x: 225, y: 40 }} />
        <SolidWedge from={{ x: 190, y: 200 }} to={{ x: 225, y: 240 }} />
        <HashedWedge from={{ x: 70, y: 200 }} to={{ x: 35, y: 240 }} />
        <line
          x1="130"
          y1="35"
          x2="130"
          y2="250"
          stroke={CYAN}
          strokeWidth="3"
          strokeDasharray="7 5"
        />
        <path
          d="M105 55 A35 35 0 0 1 155 55"
          fill="none"
          stroke={VIOLET}
          strokeWidth="3"
        />
        <text x="130" y="290" textAnchor="middle" fill={CYAN} fontSize="18">
          C₂ : 180°
        </text>
      </g>

      {/* C3: trigonal arrangement */}
      <g transform="translate(270 35)">
        <circle cx="110" cy="135" r="7" fill={VIOLET} />
        {[ -90, 30, 150 ].map((angle) => {
          const r = (angle * Math.PI) / 180;
          return (
            <line
              key={angle}
              x1={110}
              y1={135}
              x2={110 + Math.cos(r) * 85}
              y2={135 + Math.sin(r) * 85}
              stroke={STROKE}
              strokeWidth="4"
            />
          );
        })}
        <line
          x1="110"
          y1="30"
          x2="110"
          y2="245"
          stroke={CYAN}
          strokeWidth="3"
          strokeDasharray="7 5"
        />
        <text x="110" y="280" textAnchor="middle" fill={CYAN} fontSize="18">
          C₃ : 120°
        </text>
      </g>

      {/* C4: square-planar */}
      <g transform="translate(510 30)">
        <rect
          x="40"
          y="75"
          width="140"
          height="140"
          fill="none"
          stroke={STROKE}
          strokeWidth="3"
        />
        <circle cx="110" cy="145" r="7" fill={VIOLET} />
        <line
          x1="110"
          y1="35"
          x2="110"
          y2="255"
          stroke={CYAN}
          strokeWidth="3"
          strokeDasharray="7 5"
        />
        <text x="110" y="285" textAnchor="middle" fill={CYAN} fontSize="18">
          C₄ : 90°
        </text>
      </g>
    </svg>
  );
}

function ImproperAxisS4() {
  return (
    <svg fill="currentColor"
      viewBox="0 0 640 340"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="S4 improper rotation operation"
    >
      <g stroke={STROKE} strokeWidth="3" fill="none">
        <path d="M95 110 L185 70 L245 145 L155 190 Z" />
        <path d="M395 110 L485 70 L545 145 L455 190 Z" />
      </g>

      <line
        x1="170"
        y1="30"
        x2="170"
        y2="240"
        stroke={CYAN}
        strokeWidth="3"
        strokeDasharray="7 5"
      />
      <line
        x1="370"
        y1="150"
        x2="575"
        y2="150"
        stroke={GREEN}
        strokeWidth="3"
        strokeDasharray="7 5"
      />

      <SolidWedge from={{ x: 95, y: 110 }} to={{ x: 55, y: 55 }} />
      <HashedWedge from={{ x: 245, y: 145 }} to={{ x: 290, y: 205 }} />

      <SolidWedge from={{ x: 455, y: 190 }} to={{ x: 405, y: 245 }} />
      <HashedWedge from={{ x: 485, y: 70 }} to={{ x: 530, y: 25 }} />

      <path
        d="M265 100 C315 55 350 55 390 100"
        fill="none"
        stroke={VIOLET}
        strokeWidth="3"
      />
      <text x="325" y="62" textAnchor="middle" fill={VIOLET} fontSize="17">
        rotate 90°
      </text>
      <text x="470" y="285" textAnchor="middle" fill={GREEN} fontSize="17">
        then reflect through perpendicular plane
      </text>
      <text x="320" y="320" textAnchor="middle" fill={CYAN} fontSize="18">
        S₄ operation
      </text>
    </svg>
  );
}

function CentreOfInversion() {
  return (
    <svg fill="currentColor"
      viewBox="0 0 650 280"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Centre of inversion examples"
    >
      <g transform="translate(35 30)">
        <line x1="50" y1="105" x2="210" y2="105" stroke={STROKE} strokeWidth="4" />
        <line x1="50" y1="105" x2="20" y2="55" stroke={STROKE} strokeWidth="3" />
        <line x1="50" y1="105" x2="20" y2="155" stroke={STROKE} strokeWidth="3" />
        <line x1="210" y1="105" x2="240" y2="55" stroke={STROKE} strokeWidth="3" />
        <line x1="210" y1="105" x2="240" y2="155" stroke={STROKE} strokeWidth="3" />
        <circle cx="130" cy="105" r="7" fill={VIOLET} />
        <line
          x1="20"
          y1="55"
          x2="240"
          y2="155"
          stroke={CYAN}
          strokeWidth="2"
          strokeDasharray="6 5"
        />
        <line
          x1="20"
          y1="155"
          x2="240"
          y2="55"
          stroke={CYAN}
          strokeWidth="2"
          strokeDasharray="6 5"
        />
        <text x="10" y="48" fontSize="16">H</text>
        <text x="4" y="175" fontSize="16">CH₃</text>
        <text x="244" y="48" fontSize="16">CH₃</text>
        <text x="245" y="175" fontSize="16">H</text>
        <text x="130" y="205" textAnchor="middle" fill={CYAN} fontSize="17">
          every point has an identical opposite partner
        </text>
      </g>

      <g transform="translate(390 30)">
        <rect
          x="20"
          y="30"
          width="145"
          height="145"
          fill="none"
          stroke={STROKE}
          strokeWidth="3"
        />
        <path
          d="M20 30 L70 0 H215 V145 L165 175"
          fill="none"
          stroke={STROKE}
          strokeWidth="3"
        />
        <line x1="165" y1="30" x2="215" y2="0" stroke={STROKE} strokeWidth="3" />
        <line x1="165" y1="175" x2="215" y2="145" stroke={STROKE} strokeWidth="3" />
        <circle cx="117" cy="87" r="7" fill={VIOLET} />
        <line
          x1="20"
          y1="30"
          x2="215"
          y2="145"
          stroke={CYAN}
          strokeDasharray="6 5"
        />
        <line
          x1="70"
          y1="0"
          x2="165"
          y2="175"
          stroke={CYAN}
          strokeDasharray="6 5"
        />
        <text x="117" y="215" textAnchor="middle" fill={CYAN} fontSize="17">
          inversion centre i
        </text>
      </g>
    </svg>
  );
}

function FischerMirrorPair() {
  return (
    <svg fill="currentColor"
      viewBox="0 0 700 315"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Fischer projection mirror pair"
    >
      <line
        x1="350"
        y1="25"
        x2="350"
        y2="275"
        stroke={VIOLET}
        strokeWidth="3"
        strokeDasharray="8 6"
      />

      {[170, 530].map((cx, index) => (
        <g key={cx}>
          <line x1={cx} y1="65" x2={cx} y2="245" stroke={STROKE} strokeWidth="3" />
          <line x1={cx - 75} y1="140" x2={cx + 75} y2="140" stroke={STROKE} strokeWidth="3" />
          <text x={cx - 20} y="45" fontSize="18">CHO</text>
          <text x={cx - 30} y="275" fontSize="18">CH₂OH</text>

          {index === 0 ? (
            <>
              <text x={cx - 115} y="146" fontSize="18">H</text>
              <text x={cx + 83} y="146" fontSize="18">OH</text>
            </>
          ) : (
            <>
              <text x={cx - 125} y="146" fontSize="18">HO</text>
              <text x={cx + 88} y="146" fontSize="18">H</text>
            </>
          )}
        </g>
      ))}

      <text x="350" y="300" textAnchor="middle" fill={CYAN} fontSize="18">
        horizontal bonds project toward viewer; vertical bonds project away
      </text>
    </svg>
  );
}

function WedgeDashMirrorPair() {
  const left = { x: 175, y: 145 };
  const right = { x: 525, y: 145 };

  return (
    <svg fill="currentColor"
      viewBox="0 0 700 300"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Wedge dash enantiomeric mirror pair"
    >
      <line
        x1="350"
        y1="20"
        x2="350"
        y2="265"
        stroke={VIOLET}
        strokeWidth="3"
        strokeDasharray="8 6"
      />

      <line x1={left.x} y1={left.y} x2="85" y2="80" stroke={STROKE} strokeWidth="4" />
      <line x1={left.x} y1={left.y} x2="85" y2="215" stroke={STROKE} strokeWidth="4" />
      <SolidWedge from={left} to={{ x: 265, y: 80 }} />
      <HashedWedge from={left} to={{ x: 265, y: 215 }} />

      <line x1={right.x} y1={right.y} x2="615" y2="80" stroke={STROKE} strokeWidth="4" />
      <line x1={right.x} y1={right.y} x2="615" y2="215" stroke={STROKE} strokeWidth="4" />
      <SolidWedge from={right} to={{ x: 435, y: 80 }} />
      <HashedWedge from={right} to={{ x: 435, y: 215 }} />

      <g fontSize="18" fontWeight="600">
        <text x="42" y="78">CO₂H</text>
        <text x="42" y="230">CH₃</text>
        <text x="272" y="80">OH</text>
        <text x="275" y="230">H</text>

        <text x="620" y="78">CO₂H</text>
        <text x="620" y="230">CH₃</text>
        <text x="395" y="80">OH</text>
        <text x="405" y="230">H</text>
      </g>
    </svg>
  );
}

function NewmanStaggered() {
  const cx = 190;
  const cy = 150;
  const r = 44;

  const point = (angle: number, radius: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: cx + Math.cos(rad) * radius,
      y: cy + Math.sin(rad) * radius,
    };
  };

  const frontAngles = [-90, 30, 150];
  const rearAngles = [-30, 90, 210];

  return (
    <svg fill="currentColor"
      viewBox="0 0 620 310"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Exact staggered Newman projection with 60 degree dihedral"
    >
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={STROKE} strokeWidth="3" />
      <circle cx={cx} cy={cy} r="6" fill={STROKE} />

      {frontAngles.map((angle) => {
        const end = point(angle, 105);
        return (
          <line
            key={`f-${angle}`}
            x1={cx}
            y1={cy}
            x2={end.x}
            y2={end.y}
            stroke={CYAN}
            strokeWidth="4"
          />
        );
      })}

      {rearAngles.map((angle) => {
        const start = point(angle, r);
        const end = point(angle, 112);
        return (
          <line
            key={`r-${angle}`}
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            stroke={VIOLET}
            strokeWidth="4"
          />
        );
      })}

      <path
        d="M250 105 A70 70 0 0 1 275 163"
        fill="none"
        stroke={GREEN}
        strokeWidth="3"
      />
      <text x="290" y="125" fill={GREEN} fontSize="18">
        60°
      </text>

      <text x="365" y="88" fontSize="18">Front carbon substituents: 120° apart</text>
      <text x="365" y="128" fontSize="18">Rear set rotated exactly 60°</text>
      <text x="365" y="168" fontSize="18">staggered conformation</text>
      <text x="365" y="218" fill={CYAN} fontSize="17">
        whole-projection 120° rotation preserves identity
      </text>
    </svg>
  );
}

function MesoVsEnantiomer() {
  return (
    <svg fill="currentColor"
      viewBox="0 0 760 350"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Tartaric acid enantiomer and meso Fischer projections"
    >
      {[120, 380, 640].map((x) => (
        <g key={x} stroke={STROKE} strokeWidth="3">
          <line x1={x} y1="55" x2={x} y2="260" />
          <line x1={x - 65} y1="120" x2={x + 65} y2="120" />
          <line x1={x - 65} y1="195" x2={x + 65} y2="195" />
        </g>
      ))}

      <g fontSize="16">
        {[120, 380, 640].map((x) => (
          <g key={`ends-${x}`}>
            <text x={x - 24} y="40">CO₂H</text>
            <text x={x - 24} y="290">CO₂H</text>
          </g>
        ))}

        <text x="40" y="125">OH</text><text x="165" y="125">H</text>
        <text x="40" y="200">OH</text><text x="165" y="200">H</text>

        <text x="300" y="125">H</text><text x="425" y="125">OH</text>
        <text x="300" y="200">H</text><text x="425" y="200">OH</text>

        <text x="560" y="125">OH</text><text x="685" y="125">H</text>
        <text x="560" y="200">H</text><text x="685" y="200">OH</text>

        <text x="120" y="325" textAnchor="middle" fill={CYAN}>one enantiomer</text>
        <text x="380" y="325" textAnchor="middle" fill={CYAN}>mirror enantiomer</text>
        <text x="640" y="325" textAnchor="middle" fill={VIOLET}>meso</text>
      </g>

      <line
        x1="505"
        y1="157"
        x2="745"
        y2="157"
        stroke={GREEN}
        strokeWidth="2"
        strokeDasharray="6 5"
      />
    </svg>
  );
}

export default function IsomerismPart12() {
  return (
    <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12">
      <article className="mx-auto max-w-6xl">
        <Link
          href="/learn/isomerism"
          className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100"
        >
          Isomerism
        </Link>

        <header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">
            Optical Isomerism source · pages 15–35 · Part 12
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            Molecular symmetry, chirality and enantiomer mapping
          </h1>
        </header>

        <section className="mt-7 space-y-6">
          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">
              Plane of symmetry (σ)
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              A plane of symmetry divides the complete three-dimensional
              molecular graph into two mirror-related halves. The symmetry test
              must include stereobond direction, not connectivity alone.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <PlaneOfSymmetryExamples />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">
              Proper rotational axes Cₙ
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <ProperAxes />
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Rotation through 360°/n must return an indistinguishable
              orientation. A Cₙ axis by itself does not make a molecule
              achiral.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">
              Alternating / improper axis Sₙ
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-violet-300/20 bg-[#050b16] p-3">
              <ImproperAxisS4 />
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              An Sₙ operation is a rotation by 360°/n followed by reflection in
              a plane perpendicular to that axis. Presence of an improper
              rotation axis is incompatible with molecular chirality.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">
              Centre of inversion (i)
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <CentreOfInversion />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">
              Fischer projection and mirror construction
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <FischerMirrorPair />
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              In a Fischer projection, horizontal bonds point toward the
              observer and vertical bonds point away. A 180° rotation of the
              complete Fischer projection preserves configuration; a 90°
              rotation does not.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">
              Wedge–dash mirror pair
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <WedgeDashMirrorPair />
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              A solid wedge projects toward the observer; a hashed wedge
              projects behind the drawing plane. Mirror reflection reverses the
              handedness of the complete tetrahedral arrangement.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">
              Newman geometry: exact staggered 60° relationship
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <NewmanStaggered />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">
              Enantiomer versus meso relationship
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <MesoVsEnantiomer />
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
              <li>Enantiomers: non-superimposable mirror images.</li>
              <li>
                Diastereomers: stereoisomers that are not mirror images.
              </li>
              <li>
                Meso compounds contain stereogenic centres but are achiral by
                internal symmetry.
              </li>
              <li>
                A stereogenic carbon alone does not guarantee net optical
                activity.
              </li>
            </ul>
          </section>
        </section>

        <nav className="mt-8 flex justify-between border-t border-white/10 pt-6">
          <Link
            href="/learn/isomerism/11"
            className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200"
          >
            ← 11
          </Link>
          <Link
            href="/learn/isomerism/13"
            className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100"
          >
            13 →
          </Link>
        </nav>
      </article>
    </main>
  );
}