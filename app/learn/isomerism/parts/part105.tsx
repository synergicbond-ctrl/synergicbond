import Link from "next/link";

type Face = "front" | "back";

type Substituent = Readonly<{
  vertex: 0 | 1 | 2 | 3;
  label: "Ph" | "CO₂H";
  face: Face;
}>;

type Isomer = Readonly<{
  name: string;
  family: "truxilic" | "truxinic";
  substituents: readonly Substituent[];
}>;

const STROKE = "currentColor";
const CYAN = "#67e8f9";
const VIOLET = "#c4b5fd";

const ISOMERS: readonly Isomer[] = [
  {
    name: "α-truxillic",
    family: "truxilic",
    substituents: [
      { vertex: 0, label: "Ph", face: "front" },
      { vertex: 1, label: "CO₂H", face: "front" },
      { vertex: 2, label: "Ph", face: "front" },
      { vertex: 3, label: "CO₂H", face: "front" },
    ],
  },
  {
    name: "β-truxillic",
    family: "truxilic",
    substituents: [
      { vertex: 0, label: "Ph", face: "front" },
      { vertex: 1, label: "CO₂H", face: "back" },
      { vertex: 2, label: "Ph", face: "front" },
      { vertex: 3, label: "CO₂H", face: "back" },
    ],
  },
  {
    name: "γ-truxillic",
    family: "truxilic",
    substituents: [
      { vertex: 0, label: "Ph", face: "front" },
      { vertex: 1, label: "CO₂H", face: "front" },
      { vertex: 2, label: "Ph", face: "back" },
      { vertex: 3, label: "CO₂H", face: "back" },
    ],
  },
  {
    name: "δ-truxillic",
    family: "truxilic",
    substituents: [
      { vertex: 0, label: "Ph", face: "front" },
      { vertex: 1, label: "CO₂H", face: "back" },
      { vertex: 2, label: "Ph", face: "back" },
      { vertex: 3, label: "CO₂H", face: "front" },
    ],
  },
  {
    name: "ε-truxillic",
    family: "truxilic",
    substituents: [
      { vertex: 0, label: "Ph", face: "front" },
      { vertex: 1, label: "CO₂H", face: "front" },
      { vertex: 2, label: "Ph", face: "front" },
      { vertex: 3, label: "CO₂H", face: "back" },
    ],
  },
  {
    name: "peri-truxinic",
    family: "truxinic",
    substituents: [
      { vertex: 0, label: "Ph", face: "front" },
      { vertex: 1, label: "Ph", face: "front" },
      { vertex: 2, label: "CO₂H", face: "back" },
      { vertex: 3, label: "CO₂H", face: "back" },
    ],
  },
  {
    name: "epi-truxinic",
    family: "truxinic",
    substituents: [
      { vertex: 0, label: "Ph", face: "front" },
      { vertex: 1, label: "Ph", face: "back" },
      { vertex: 2, label: "CO₂H", face: "front" },
      { vertex: 3, label: "CO₂H", face: "back" },
    ],
  },
];

const VERTICES = [
  { x: 135, y: 55 },  // top-left
  { x: 275, y: 75 },  // top-right
  { x: 255, y: 205 }, // bottom-right
  { x: 115, y: 185 }, // bottom-left
] as const;

function SolidWedge({
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
  const px = (-dy / len) * 11;
  const py = (dx / len) * 11;

  return (
    <polygon
      points={`${x1},${y1} ${x2 + px},${y2 + py} ${x2 - px},${y2 - py}`}
      fill={STROKE}
    />
  );
}

function HashedBond({
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

  return (
    <g>
      {Array.from({ length: 7 }, (_, index) => {
        const t = (index + 1) / 8;
        const x = x1 + dx * t;
        const y = y1 + dy * t;
        const half = 1.5 + t * 6;
        const px = (-dy / len) * half;
        const py = (dx / len) * half;

        return (
          <line
            key={index}
            x1={x - px}
            y1={y - py}
            x2={x + px}
            y2={y + py}
            stroke={STROKE}
            strokeWidth="2"
          />
        );
      })}
    </g>
  );
}

function outwardPoint(vertex: number) {
  const centre = { x: 195, y: 130 };
  const v = VERTICES[vertex];

  const dx = v.x - centre.x;
  const dy = v.y - centre.y;
  const len = Math.hypot(dx, dy) || 1;

  return {
    x: v.x + (dx / len) * 65,
    y: v.y + (dy / len) * 65,
  };
}

function CyclobutanePerspective() {
  return (
    <g fill="none" stroke={STROKE}>
      {/* perspective parallelogram rather than flat square */}
      <path
        d="M135 55 L275 75 L255 205 L115 185 Z"
        strokeWidth="4"
      />
      {/* front edge deliberately heavier */}
      <line
        x1="115"
        y1="185"
        x2="255"
        y2="205"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* rear edge slightly lighter */}
      <line x1="135" y1="55" x2="275" y2="75" strokeWidth="2.5" />
    </g>
  );
}

function TruxilicDiagram({ isomer }: { isomer: Isomer }) {
  return (
    <svg fill="currentColor"
      viewBox="0 0 390 320"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label={`${isomer.name} stereochemical cyclobutane configuration`}
    >
      <CyclobutanePerspective />

      {isomer.substituents.map((sub, index) => {
        const start = VERTICES[sub.vertex];
        const end = outwardPoint(sub.vertex);

        return (
          <g key={`${sub.vertex}-${sub.label}-${index}`}>
            {sub.face === "front" ? (
              <SolidWedge
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
              />
            ) : (
              <HashedBond
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
              />
            )}

            <text
              x={end.x + (end.x < 195 ? -8 : 8)}
              y={end.y + (end.y < 130 ? -8 : 18)}
              textAnchor={end.x < 195 ? "end" : "start"}
              fontSize="17"
              fontWeight="700"
            >
              {sub.label}
            </text>
          </g>
        );
      })}

      <text
        x="195"
        y="285"
        textAnchor="middle"
        fill={isomer.family === "truxilic" ? CYAN : VIOLET}
        fontSize="18"
        fontWeight="800"
      >
        {isomer.name}
      </text>

      <text
        x="195"
        y="307"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="13"
      >
        solid wedge = β / near face · hashed = α / rear face
      </text>
    </svg>
  );
}

function ParentPhotodimerSkeleton() {
  return (
    <svg fill="currentColor"
      viewBox="0 0 760 260"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Cinnamic acid photodimerization to substituted cyclobutane"
    >
      <g stroke={STROKE} strokeWidth="3" fill="none">
        {/* first cinnamic acid */}
        <path d="M40 105 L85 80 L130 105 L130 155 L85 180 L40 155 Z" />
        <circle cx="85" cy="130" r="30" />
        <line x1="130" y1="130" x2="185" y2="95" />
        <line x1="185" y1="89" x2="245" y2="125" />
        <line x1="185" y1="101" x2="245" y2="137" />
        <line x1="245" y1="131" x2="295" y2="100" />

        {/* second cinnamic acid */}
        <path d="M40 20 L85 -5 L130 20" opacity="0" />

        {/* product cyclobutane */}
        <path d="M500 70 L625 85 L610 195 L485 180 Z" />
        <line x1="485" y1="180" x2="610" y2="195" strokeWidth="7" />
      </g>

      <text x="300" y="105" fontSize="18">CO₂H</text>
      <text x="345" y="130" fill={VIOLET} fontSize="20">hν → [2+2]</text>

      <text x="470" y="50" fontSize="16">Ph</text>
      <text x="630" y="70" fontSize="16">CO₂H</text>
      <text x="625" y="220" fontSize="16">Ph</text>
      <text x="420" y="210" fontSize="16">CO₂H</text>
    </svg>
  );
}

export default function IsomerismPart95() {
  return (
    <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12">
      <article className="mx-auto max-w-6xl">
        <Link
          href="/learn/isomerism"
          className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100"
        >
          Isomerism
        </Link>

        <header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.16),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.72),rgba(139,92,246,.1))] p-6 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">
            Cyclobutane photodimers · stereochemical matrix
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            Truxilic and truxinic acid configurations
          </h1>
        </header>

        <section className="mt-7 space-y-6">
          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">
              Photochemical cyclobutane framework
            </h2>

            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <ParentPhotodimerSkeleton />
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              The stereochemical information belongs to the four substituted
              cyclobutane carbons. Flattening the ring into a decorative diamond
              loses which phenyl and carboxyl groups occupy the same or opposite
              molecular faces.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">
              Face-defined stereochemical matrix
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {ISOMERS.map((isomer) => (
                <article
                  key={isomer.name}
                  className="rounded-xl border border-white/10 bg-[#050b16] p-3"
                >
                  <TruxilicDiagram isomer={isomer} />
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-violet-300/20 bg-violet-300/[.05] p-5">
            <h2 className="text-xl font-black text-violet-200">
              Rendering rule used here
            </h2>

            <div className="mt-3 grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-[#050b16] p-4">
                <b className="text-cyan-100">Solid triangular wedge</b>
                <p>
                  Substituent projects toward the observer from the cyclobutane
                  face.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#050b16] p-4">
                <b className="text-violet-100">Hashed stereobond</b>
                <p>
                  Substituent projects behind the mean cyclobutane drawing
                  plane.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              The cyclobutane ring is intentionally rendered as a perspective
              parallelogram with a heavy near edge. Face information is encoded
              independently at every substituted carbon, so cis/trans and
              enantiomeric/diastereomeric relationships remain visible without
              relying on labels alone.
            </p>
          </section>
        </section>

        <nav className="mt-8 flex justify-between border-t border-white/10 pt-6">
          <Link
            href="/learn/isomerism/94"
            className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200"
          >
            ← 94
          </Link>
          <Link
            href="/learn/isomerism/96"
            className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100"
          >
            96 →
          </Link>
        </nav>
      </article>
    </main>
  );
}