import Link from "next/link";

type Point = Readonly<{ x: number; y: number }>;

const STROKE = "currentColor";
const CYAN = "#67e8f9";
const VIOLET = "#c4b5fd";
const GREEN = "#86efac";
const AMBER = "#fbbf24";
const PINK = "#f472b6";

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

function TetrahedralCenter({
  cx,
  top,
  left,
  right,
  frontLabel,
  posCount,
}: {
  cx: number;
  top: string;
  left: string;
  right: string;
  frontLabel: string;
  posCount: string;
}) {
  const cy = 90;
  return (
    <g transform={`translate(${cx} 0)`}>
      <line x1="0" y1={cy} x2="0" y2={cy - 65} stroke={STROKE} strokeWidth="3" />
      <line x1="0" y1={cy} x2="-58" y2={cy + 40} stroke={STROKE} strokeWidth="3" />
      <line x1="0" y1={cy} x2="58" y2={cy + 40} stroke={STROKE} strokeWidth="3" />
      <line x1="0" y1={cy} x2="0" y2={cy + 55} stroke={STROKE} strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="0" cy={cy} r="4" fill={STROKE} />
      <text x="0" y={cy - 78} textAnchor="middle" fontSize="16">{top}</text>
      <text x="-70" y={cy + 58} textAnchor="middle" fontSize="16">{left}</text>
      <text x="70" y={cy + 58} textAnchor="middle" fontSize="16">{right}</text>
      <text x="0" y={cy + 90} textAnchor="middle" fontSize="15">{frontLabel}</text>
      <text
        x="0"
        y={cy + 118}
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fill={posCount === "0" ? "#fca5a5" : CYAN}
      >
        POS = {posCount}
      </text>
    </g>
  );
}

function POSCountingGallery() {
  return (
    <svg fill="currentColor"
      viewBox="0 0 720 240"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Counting planes of symmetry on a tetrahedral centre as substituents change"
    >
      <TetrahedralCenter cx={90} top="H" left="H" right="H" frontLabel="H (4th, front)" posCount="6" />
      <TetrahedralCenter cx={270} top="F" left="D" right="T" frontLabel="H (4th, front)" posCount="0" />
      <TetrahedralCenter cx={450} top="F" left="Cl" right="F" frontLabel="F (4th, front)" posCount="3" />
      <TetrahedralCenter cx={630} top="F" left="Cl" right="Cl" frontLabel="F (4th, front)" posCount="2" />
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

function RealMoleculeCnGallery() {
  return (
    <svg fill="currentColor"
      viewBox="0 0 760 260"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Cn axes in BF3, benzene and the cyclopentadienyl anion"
    >
      {/* BF3 trigonal planar, C3 */}
      <g transform="translate(90 130)">
        <circle cx="0" cy="0" r="6" fill={VIOLET} />
        {[ -90, 30, 150 ].map((angle) => {
          const r = (angle * Math.PI) / 180;
          const ex = Math.cos(r) * 78;
          const ey = Math.sin(r) * 78;
          return (
            <g key={angle}>
              <line x1="0" y1="0" x2={ex} y2={ey} stroke={STROKE} strokeWidth="3" />
              <text
                x={ex * 1.28}
                y={ey * 1.28}
                textAnchor="middle"
                fontSize="16"
                fontWeight="700"
              >
                F
              </text>
            </g>
          );
        })}
        <line x1="0" y1="-118" x2="0" y2="118" stroke={CYAN} strokeWidth="3" strokeDasharray="6 5" />
        <text x="0" y="150" textAnchor="middle" fill={CYAN} fontSize="16">BF₃ · C₃</text>
      </g>

      {/* Benzene hexagon, C6 */}
      <g transform="translate(360 30)">
        <path
          d="M60 0 L120 33 L120 100 L60 133 L0 100 L0 33 Z"
          fill="none"
          stroke={STROKE}
          strokeWidth="3"
        />
        <circle cx="60" cy="66" r="30" fill="none" stroke={STROKE} strokeWidth="3" />
        <line x1="60" y1="-30" x2="60" y2="163" stroke={CYAN} strokeWidth="3" strokeDasharray="6 5" />
        <text x="60" y="188" textAnchor="middle" fill={CYAN} fontSize="16">
          benzene · C₆
        </text>
      </g>

      {/* Cyclopentadienyl anion pentagon, C5 */}
      <g transform="translate(600 25)">
        <path
          d="M65 0 L124 40 L101 108 L29 108 L6 40 Z"
          fill="none"
          stroke={STROKE}
          strokeWidth="3"
        />
        <circle cx="65" cy="10" r="14" fill="none" stroke={STROKE} strokeWidth="2" />
        <text x="65" y="15" textAnchor="middle" fontSize="13" fontWeight="700">−</text>
        <line x1="65" y1="-38" x2="65" y2="165" stroke={CYAN} strokeWidth="3" strokeDasharray="6 5" />
        <text x="65" y="195" textAnchor="middle" fill={CYAN} fontSize="15">
          Cp⁻ · C₅
        </text>
      </g>
    </svg>
  );
}

function CubeFrame({ children }: { children?: React.ReactNode }) {
  const FBL = { x: 0, y: 100 };
  const FBR = { x: 100, y: 100 };
  const FTL = { x: 0, y: 0 };
  const FTR = { x: 100, y: 0 };
  const BBL = { x: 40, y: 70 };
  const BBR = { x: 140, y: 70 };
  const BTL = { x: 40, y: -30 };
  const BTR = { x: 140, y: -30 };

  const edge = (a: Point, b: Point, dashed = false) => (
    <line
      x1={a.x}
      y1={a.y}
      x2={b.x}
      y2={b.y}
      stroke={PINK}
      strokeWidth="2.5"
      strokeDasharray={dashed ? "4 4" : undefined}
    />
  );

  return (
    <g>
      {edge(FTL, FTR)}
      {edge(FTR, FBR)}
      {edge(FBR, FBL)}
      {edge(FBL, FTL, true)}
      {edge(FTL, BTL)}
      {edge(FTR, BTR)}
      {edge(FBR, BBR)}
      {edge(FBL, BBL, true)}
      {edge(BTL, BTR)}
      {edge(BTR, BBR)}
      {edge(BBR, BBL, true)}
      {edge(BBL, BTL, true)}
      {children}
    </g>
  );
}

function CubePOSDiagram() {
  return (
    <svg fill="currentColor"
      viewBox="-20 -60 380 200"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Rectangular and diagonal planes of symmetry in a cube"
    >
      <g transform="translate(0 30)">
        <CubeFrame>
          <polygon points="50,-30 50,100 90,70 90,-60" fill={GREEN} fillOpacity="0.25" stroke={GREEN} strokeWidth="2" />
        </CubeFrame>
        <text x="70" y="130" textAnchor="middle" fontSize="15" fill={GREEN}>3 rectangular POS</text>
      </g>
      <g transform="translate(220 30)">
        <CubeFrame>
          <polygon points="0,100 140,-30 140,70 0,100" fill={VIOLET} fillOpacity="0.22" stroke={VIOLET} strokeWidth="2" />
        </CubeFrame>
        <text x="70" y="130" textAnchor="middle" fontSize="15" fill={VIOLET}>6 diagonal POS</text>
      </g>
      <text x="170" y="-40" textAnchor="middle" fontSize="17" fontWeight="700" fill={CYAN}>
        total POS in a cube = 3 + 6 = 9
      </text>
    </svg>
  );
}

function CubeAOSDiagram() {
  return (
    <svg fill="currentColor"
      viewBox="-20 -60 380 210"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="C4 C3 and C2 axes counted on a cube"
    >
      <g transform="translate(0 30)">
        <CubeFrame>
          <line x1="70" y1="-70" x2="70" y2="120" stroke={AMBER} strokeWidth="3" strokeDasharray="6 4" />
        </CubeFrame>
        <text x="70" y="140" textAnchor="middle" fontSize="14" fill={AMBER}>C₄ × 3 (face–face)</text>
      </g>
      <g transform="translate(140 30)">
        <CubeFrame>
          <line x1="0" y1="100" x2="140" y2="-30" stroke={VIOLET} strokeWidth="3" strokeDasharray="6 4" />
        </CubeFrame>
        <text x="70" y="140" textAnchor="middle" fontSize="14" fill={VIOLET}>C₃ × 4 (corner–corner)</text>
      </g>
      <g transform="translate(280 30)">
        <CubeFrame>
          <line x1="20" y1="118" x2="120" y2="-58" stroke={CYAN} strokeWidth="3" strokeDasharray="6 4" />
        </CubeFrame>
        <text x="70" y="140" textAnchor="middle" fontSize="14" fill={CYAN}>C₂ × 6 (edge–edge)</text>
      </g>
      <text x="170" y="-40" textAnchor="middle" fontSize="17" fontWeight="700" fill={GREEN}>
        total AOS in a cube = 3 + 4 + 6 = 13
      </text>
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

function SnCyclobutaneDemo() {
  const diamond = (cx: number, labels: [string, string, string, string]) => (
    <g transform={`translate(${cx} 0)`}>
      <line x1="-85" y1="0" x2="0" y2="55" stroke={STROKE} strokeWidth="3" />
      <line x1="0" y1="55" x2="85" y2="0" stroke={STROKE} strokeWidth="3" />
      <line x1="85" y1="0" x2="0" y2="-55" stroke={STROKE} strokeWidth="3" />
      <line x1="0" y1="-55" x2="-85" y2="0" stroke={STROKE} strokeWidth="3" />
      <line x1="-85" y1="0" x2="-85" y2="-58" stroke={STROKE} strokeWidth="2.5" />
      <line x1="85" y1="0" x2="85" y2="58" stroke={STROKE} strokeWidth="2.5" />
      <line x1="0" y1="-55" x2="0" y2="-113" stroke={STROKE} strokeWidth="2.5" />
      <line x1="0" y1="55" x2="0" y2="113" stroke={STROKE} strokeWidth="2.5" />
      <text x="-85" y="-72" textAnchor="middle" fontSize="15">{labels[0]}</text>
      <text x="85" y="80" textAnchor="middle" fontSize="15">{labels[1]}</text>
      <text x="0" y="-128" textAnchor="middle" fontSize="15">{labels[2]}</text>
      <text x="0" y="132" textAnchor="middle" fontSize="15">{labels[3]}</text>
    </g>
  );

  return (
    <svg fill="currentColor"
      viewBox="0 0 620 300"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="S2 and S4 alternating axes on substituted cyclobutanes"
    >
      <g transform="translate(150 150)">
        {diamond(0, ["H", "H", "CH₃", "CH₃"])}
        <line x1="0" y1="-135" x2="0" y2="140" stroke={AMBER} strokeWidth="2.5" strokeDasharray="5 4" />
        <text x="0" y="175" textAnchor="middle" fill={AMBER} fontSize="17">S₂</text>
      </g>
      <g transform="translate(460 150)">
        {diamond(0, ["H", "H", "CH₃", "CH₃"])}
        <text x="0" y="-95" textAnchor="middle" fontSize="13">(CH₃, H interchanged front/back)</text>
        <line x1="0" y1="-135" x2="0" y2="140" stroke={VIOLET} strokeWidth="2.5" strokeDasharray="5 4" />
        <text x="0" y="175" textAnchor="middle" fill={VIOLET} fontSize="17">S₄</text>
      </g>
    </svg>
  );
}

function SpiroAAOSExample() {
  return (
    <svg fill="currentColor"
      viewBox="0 0 560 260"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Spiro dipyrrolidinium ion showing AAOS without POS or COS"
    >
      <g transform="translate(280 130)">
        <circle cx="0" cy="0" r="7" fill={AMBER} />
        <text x="0" y="5" textAnchor="middle" fontSize="12" fontWeight="700">N⁺</text>

        <path d="M0 0 L-95 -35 L-115 -95 L-55 -120 L20 -75 Z" fill="none" stroke={STROKE} strokeWidth="2.5" />
        <path d="M0 0 L95 35 L115 95 L55 120 L-20 75 Z" fill="none" stroke={STROKE} strokeWidth="2.5" />

        <text x="-100" y="-100" fontSize="14">CH₃</text>
        <text x="-30" y="-88" fontSize="14">H</text>
        <text x="-135" y="-40" fontSize="14">H</text>
        <text x="-60" y="-30" fontSize="14">CH₃</text>

        <text x="100" y="100" fontSize="14">CH₃</text>
        <text x="30" y="90" fontSize="14">H</text>
        <text x="135" y="45" fontSize="14">H</text>
        <text x="60" y="35" fontSize="14">CH₃</text>

        <line x1="-130" y1="-10" x2="130" y2="10" stroke={VIOLET} strokeWidth="2.5" strokeDasharray="5 4" />
      </g>
      <text x="280" y="245" textAnchor="middle" fontSize="16">
        3,4,3′,4′-tetramethyl-[4.4]spirodipyrrolidinium: <tspan fill="#fca5a5">POS ✗</tspan> · <tspan fill="#fca5a5">COS ✗</tspan> · <tspan fill={GREEN}>S₄ (AAOS) ✓</tspan>
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

function CubeCOSDiagram() {
  return (
    <svg fill="currentColor"
      viewBox="-20 -60 260 210"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Single centre of symmetry at the centroid of a cube"
    >
      <g transform="translate(0 30)">
        <CubeFrame>
          <line x1="0" y1="100" x2="140" y2="-30" stroke={PINK} strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6" />
          <line x1="140" y1="100" x2="0" y2="-30" stroke={PINK} strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6" />
          <line x1="0" y1="0" x2="140" y2="70" stroke={PINK} strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6" />
          <line x1="100" y1="0" x2="40" y2="70" stroke={PINK} strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6" />
          <circle cx="70" cy="35" r="6" fill={AMBER} />
        </CubeFrame>
        <text x="70" y="140" textAnchor="middle" fontSize="15" fill={AMBER}>
          1 centre of symmetry
        </text>
      </g>
      <text x="110" y="-40" textAnchor="middle" fontSize="16" fontWeight="700" fill={CYAN}>
        POS(9) + COS(1) + AOS(13) = 23 total symmetry elements
      </text>
    </svg>
  );
}

function AllenePOSDemo() {
  return (
    <svg fill="currentColor"
      viewBox="0 0 700 190"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Centre of symmetry test on allene-type molecules"
    >
      {[
        { cx: 110, l: ["H", "H"], r: ["H", "H"], ok: true },
        { cx: 380, l: ["H", "CH₃"], r: ["CH₃", "H"], ok: true },
        { cx: 610, l: ["H", "CH₃"], r: ["CH₃", "Cl"], ok: false },
      ].map(({ cx, l, r, ok }) => (
        <g key={cx} transform={`translate(${cx} 95)`}>
          <line x1="-70" y1="-45" x2="0" y2="0" stroke={STROKE} strokeWidth="3" />
          <line x1="-70" y1="45" x2="0" y2="0" stroke={STROKE} strokeWidth="3" />
          <line x1="70" y1="-45" x2="0" y2="0" stroke={STROKE} strokeWidth="3" />
          <line x1="70" y1="45" x2="0" y2="0" stroke={STROKE} strokeWidth="3" />
          <circle cx="0" cy="0" r="5" fill={VIOLET} />
          <text x="-88" y="-50" fontSize="15">{l[0]}</text>
          <text x="-88" y="58" fontSize="15">{l[1]}</text>
          <text x="88" y="-50" fontSize="15">{r[0]}</text>
          <text x="88" y="58" fontSize="15">{r[1]}</text>
          <text x="0" y="88" textAnchor="middle" fontSize="16" fontWeight="700" fill={ok ? GREEN : "#fca5a5"}>
            COS {ok ? "✓" : "✗"}
          </text>
        </g>
      ))}
    </svg>
  );
}

function COSRealMoleculeGallery() {
  return (
    <svg fill="currentColor"
      viewBox="0 0 760 230"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Centre of symmetry present or absent in real molecules"
    >
      {/* 1,4-disubstituted cyclohexane, COS present */}
      <g transform="translate(100 35)">
        <path d="M60 0 L120 33 L120 100 L60 133 L0 100 L0 33 Z" fill="none" stroke={STROKE} strokeWidth="3" />
        <line x1="60" y1="0" x2="60" y2="-35" stroke={STROKE} strokeWidth="4" />
        <line x1="60" y1="133" x2="60" y2="168" stroke={STROKE} strokeWidth="2" strokeDasharray="4 3" />
        <circle cx="60" cy="66" r="6" fill={VIOLET} />
        <text x="60" y="-45" textAnchor="middle" fontSize="15">Cl</text>
        <text x="60" y="188" textAnchor="middle" fontSize="15">Cl</text>
        <text x="60" y="215" textAnchor="middle" fill={GREEN} fontSize="16" fontWeight="700">COS ✓</text>
      </g>

      {/* equilateral triangle, COS absent */}
      <g transform="translate(340 55)">
        <path d="M60 0 L120 105 L0 105 Z" fill="none" stroke={STROKE} strokeWidth="3" />
        <text x="60" y="-12" textAnchor="middle" fontSize="15">H</text>
        <text x="-14" y="122" textAnchor="middle" fontSize="15">H</text>
        <text x="134" y="122" textAnchor="middle" fontSize="15">H</text>
        <text x="60" y="185" textAnchor="middle" fill="#fca5a5" fontSize="16" fontWeight="700">COS ✗</text>
      </g>

      {/* alternating hexasubstituted benzene, COS present */}
      <g transform="translate(560 25)">
        <path d="M65 0 L124 33 L124 99 L65 132 L6 99 L6 33 Z" fill="none" stroke={STROKE} strokeWidth="3" />
        <circle cx="65" cy="66" r="26" fill="none" stroke={STROKE} strokeWidth="2" />
        {[
          [65, -20, "Cl"], [140, 20, "Br"], [140, 112, "F"],
          [65, 152, "Cl"], [-10, 112, "Br"], [-10, 20, "F"],
        ].map(([x, y, label]) => (
          <text key={`${x}-${y}`} x={x as number} y={y as number} textAnchor="middle" fontSize="14">{label}</text>
        ))}
        <circle cx="65" cy="66" r="5" fill={VIOLET} />
        <text x="65" y="200" textAnchor="middle" fill={GREEN} fontSize="16" fontWeight="700">COS ✓</text>
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

function GlyceraldehydeMirrorTest() {
  return (
    <svg fill="currentColor"
      viewBox="0 0 620 300"
      className="h-auto w-full text-slate-100"
      role="img"
      aria-label="Glyceraldehyde and cyclopropane mirror pair relationship tests"
    >
      <line x1="310" y1="20" x2="310" y2="280" stroke={VIOLET} strokeWidth="3" strokeDasharray="8 6" />
      {[130, 490].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="60" x2={x} y2="200" stroke={STROKE} strokeWidth="3" />
          <line x1={x - 60} y1="130" x2={x + 60} y2="130" stroke={STROKE} strokeWidth="3" />
          <text x={x - 22} y="42" fontSize="17">CHO</text>
          <text x={x - 35} y="222" fontSize="17">CH₂OH</text>
          {i === 0 ? (
            <>
              <text x={x - 100} y="136" fontSize="17">H</text>
              <text x={x + 75} y="136" fontSize="17">OH</text>
            </>
          ) : (
            <>
              <text x={x - 108} y="136" fontSize="17">HO</text>
              <text x={x + 78} y="136" fontSize="17">H</text>
            </>
          )}
        </g>
      ))}
      <text x="310" y="270" textAnchor="middle" fontSize="17" fill={GREEN} fontWeight="700">
        non-superimposable mirror images → enantiomers
      </text>
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
            <p className="mt-4 text-sm font-bold text-cyan-200">
              Counting POS on a substituted tetrahedral centre CXYZW
            </p>
            <div className="mt-3 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <POSCountingGallery />
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
              <li>CH₄ (4 identical groups): 6 planes of symmetry.</li>
              <li>CHDTF (4 completely different groups): 0 planes — this is the chiral test case.</li>
              <li>CX₃Y (3 identical + 1 different): 3 planes.</li>
              <li>CX₂Y₂ (2 identical pairs): 2 planes.</li>
              <li>A rectangle contributes exactly 1 diagonal POS; a cube contributes 9 (3 rectangular + 6 diagonal).</li>
            </ul>
            <div className="mt-4 overflow-x-auto rounded-xl border border-violet-300/20 bg-[#050b16] p-3">
              <CubePOSDiagram />
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
              achiral — it merely relabels equivalent atoms.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-violet-300/20 bg-[#050b16] p-3">
              <RealMoleculeCnGallery />
            </div>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <CubeAOSDiagram />
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              <span className="font-bold text-cyan-200">Rule:</span> if a
              molecule possesses a Cₙ axis, it either has exactly n perpendicular
              C₂ axes, or none at all — never a number in between. XeF₄ (C₄) has
              4×C₂, benzene (C₆) has 6×C₂, and the cyclopentadienyl anion (C₅)
              has 5×C₂.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">
              Alternating / improper axis Sₙ (AAOS)
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-violet-300/20 bg-[#050b16] p-3">
              <ImproperAxisS4 />
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              A molecule possesses an n-fold AAOS if rotation by 360°/n about
              the axis, followed by reflection in the plane perpendicular to
              that axis, reproduces a molecule indistinguishable from the
              original. Generally, compounds that possess POS or COS also
              possess an AAOS — but the converse is not guaranteed to be
              needed, since AAOS is the most general symmetry test.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <SnCyclobutaneDemo />
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              The decisive example is the 3,4,3′,4′-tetramethyl-[4.4]spirodipyrrolidinium
              ion: it has no plane of symmetry and no centre of symmetry, yet it
              is achiral because it possesses an S₄ axis through the spiro
              nitrogen.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-amber-300/20 bg-[#050b16] p-3">
              <SpiroAAOSExample />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">
              Centre of symmetry (i) — inversion centre
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              A centre of symmetry is a point from which lines drawn to one
              side and produced an equal distance on the other side meet an
              identical point of the molecule. A compound can have{" "}
              <span className="font-bold text-cyan-200">at most one</span>{" "}
              centre of symmetry.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <CentreOfInversion />
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Testing symmetric versus unsymmetric allene-type centres:
            </p>
            <div className="mt-3 overflow-x-auto rounded-xl border border-violet-300/20 bg-[#050b16] p-3">
              <AllenePOSDemo />
            </div>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <CubeCOSDiagram />
            </div>
            <div className="mt-4 overflow-x-auto rounded-xl border border-violet-300/20 bg-[#050b16] p-3">
              <COSRealMoleculeGallery />
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
              Enantiomers
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Optically active compounds that are non-superimposable mirror
              images of each other are called enantiomers.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-violet-300/20 bg-[#050b16] p-3">
              <GlyceraldehydeMirrorTest />
            </div>
            <p className="mt-4 text-sm font-bold text-cyan-200">Properties of enantiomers</p>
            <ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-300">
              <li>
                Identical physical and chemical properties (m.p., b.p., density,
                refractive index) except optical rotation, which is equal in
                magnitude but opposite in sign.{" "}
                <span className="text-slate-400">
                  e.g. (+)-limonene smells of orange, (−)-limonene smells of lemon.
                </span>
              </li>
              <li>
                Identical chemical behaviour except in the presence of a chiral
                reagent or chiral solvent, where their rates of reaction differ.
              </li>
              <li>
                May differ physiologically — (−)-nicotine is more poisonous than
                (+)-nicotine; (+)-histidine tastes sweet while (−)-histidine is
                tasteless.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              There are three equivalent ways to draw an enantiomeric pair,
              because the mirror can conceptually be placed at any of three
              positions around the stereocentre — the molecule and its
              reflection are always related the same way regardless of where
              the mirror is imagined to sit.
            </p>
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
                internal symmetry — the same molecule can display a POS in its
                eclipsed Fischer form and a COS in an anti-periplanar
                conformer.
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
