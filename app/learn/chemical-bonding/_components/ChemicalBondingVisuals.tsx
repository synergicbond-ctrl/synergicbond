// ─────────────────────────────────────────────────────────────────────────────
// Chemical Bonding — additional hand-built SVG diagrams for the 13-part deep
// chapter (parts/*.tsx). Complements the four diagrams already registered in
// components/premiumNotes/visuals/chemicalBonding.tsx (dipole vectors, VSEPR
// gallery, hybrid shapes, MO diagram), which are re-used directly there.
// Same restrained dark-navy design system: cyan/violet/amber accents, no glow.
// ─────────────────────────────────────────────────────────────────────────────

const AX = "#67e8f9"; // cyan-300
const VEC = "#c4b5fd"; // violet-300
const POS = "#fca5a5"; // rose-300 — cations / positive centres
const MUTE = "rgba(255,255,255,0.45)";
const LINE = "rgba(255,255,255,0.25)";
const T = { fontFamily: "ui-sans-serif, system-ui", fill: "rgba(255,255,255,0.85)" };
const TS = { ...T, fontSize: 11 };
const TXS = { ...T, fontSize: 9.5, fill: MUTE };

function Atom({ x, y, r = 9, label, fill = "#0B1220", stroke = AX }: { x: number; y: number; r?: number; label: string; fill?: string; stroke?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={fill} stroke={stroke} strokeWidth="1.3" />
      <text x={x} y={y + 3.5} textAnchor="middle" style={{ ...TS, fontWeight: 700 }}>{label}</text>
    </g>
  );
}

function StepArrow({ x1, y1, x2, y2, color = AX, label }: { x1: number; y1: number; x2: number; y2: number; color?: string; label?: string }) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = 5;
  return (
    <g>
      <g stroke={color} fill={color} strokeWidth="1.6">
        <line x1={x1} y1={y1} x2={x2} y2={y2} />
        <polygon points={`${x2},${y2} ${x2 - h * Math.cos(a - 0.45)},${y2 - h * Math.sin(a - 0.45)} ${x2 - h * Math.cos(a + 0.45)},${y2 - h * Math.sin(a + 0.45)}`} stroke="none" />
      </g>
      {label ? <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 5} textAnchor="middle" style={TXS}>{label}</text> : null}
    </g>
  );
}

/** Born–Haber cycle for NaCl: five steps to −411 kJ/mol, arrow direction = sign. */
export function BornHaberCycleVisual() {
  const row = (y: number, label: string) => (
    <g>
      <line x1="30" y1={y} x2="560" y2={y} stroke={LINE} strokeDasharray="2 3" />
      <text x="565" y={y + 4} style={TXS}>{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 660 300" className="h-auto w-full" role="img" aria-label="Born-Haber cycle for sodium chloride">
      <text x="330" y="16" textAnchor="middle" style={{ ...TS, fontWeight: 700 }}>Born–Haber Cycle · NaCl(s)</text>
      {row(255, "Na(s) + ½Cl₂(g)")}
      {row(215, "Na(g) + ½Cl₂(g)")}
      {row(160, "Na(g) + Cl(g)")}
      {row(90, "Na⁺(g) + e⁻ + Cl(g)")}
      {row(120, "Na⁺(g) + Cl⁻(g)")}
      {row(285, "NaCl(s)")}
      <StepArrow x1={70} y1={253} x2={70} y2={217} color={AX} label="+108 (sublimation)" />
      <StepArrow x1={130} y1={213} x2={130} y2={162} color={AX} label="+122 (½ dissociation)" />
      <StepArrow x1={190} y1={158} x2={190} y2={92} color={AX} label="+496 (IE₁)" />
      <StepArrow x1={310} y1={90} x2={310} y2={118} color="#34d399" label="−349 (ΔegH)" />
      <StepArrow x1={430} y1={122} x2={430} y2={283} color="#34d399" label="−788 (lattice)" />
      <text x="330" y="298" textAnchor="middle" style={{ ...TS, fill: "#34d399", fontWeight: 700 }}>ΔfH(NaCl) ≈ −411 kJ mol⁻¹ — lattice enthalpy is the term that pays for it all</text>
    </svg>
  );
}

/** Diborane B2H6: four terminal 2c-2e B-H bonds + two 3c-2e bridge bonds. */
export function DiboraneBridgeVisual() {
  return (
    <svg viewBox="0 0 420 220" className="h-auto w-full" role="img" aria-label="Diborane three-centre two-electron bridge bonding">
      <text x="210" y="16" textAnchor="middle" style={{ ...TS, fontWeight: 700 }}>B₂H₆ · Diborane</text>
      {/* terminal H's, normal 2c-2e bonds */}
      <line x1="110" y1="60" x2="70" y2="30" stroke={LINE} strokeWidth="2" />
      <line x1="110" y1="60" x2="70" y2="90" stroke={LINE} strokeWidth="2" />
      <line x1="310" y1="60" x2="350" y2="30" stroke={LINE} strokeWidth="2" />
      <line x1="310" y1="60" x2="350" y2="90" stroke={LINE} strokeWidth="2" />
      <Atom x={70} y={30} label="H" r={8} />
      <Atom x={70} y={90} label="H" r={8} />
      <Atom x={350} y={30} label="H" r={8} />
      <Atom x={350} y={90} label="H" r={8} />
      {/* boron centres */}
      <Atom x={110} y={60} label="B" r={11} />
      <Atom x={310} y={60} label="B" r={11} />
      {/* bridge hydrogens: 3c-2e banana bonds */}
      <path d="M 110 60 Q 155 130 200 130 Q 245 130 310 60" fill="none" stroke={VEC} strokeWidth="1.6" strokeDasharray="4 3" />
      <path d="M 110 60 Q 155 150 200 150 Q 245 150 310 60" fill="none" stroke={VEC} strokeWidth="1.6" strokeDasharray="4 3" />
      <Atom x={175} y={128} label="H" r={8} fill="#0B1220" stroke={VEC} />
      <Atom x={245} y={128} label="H" r={8} fill="#0B1220" stroke={VEC} />
      <text x="210" y="185" textAnchor="middle" style={TXS}>2 bridging H (3c–2e, dashed) + 4 terminal H (ordinary 2c–2e)</text>
      <text x="210" y="200" textAnchor="middle" style={TXS}>12 valence e⁻ total · each bridge bond uses 2 electrons shared over 3 nuclei</text>
    </svg>
  );
}

/** BF3 back-bonding: filled F p-orbital donates into empty B p-orbital, partial pi character. */
export function BackBondingVisual() {
  return (
    <svg viewBox="0 0 420 190" className="h-auto w-full" role="img" aria-label="BF3 back bonding from fluorine lone pair into boron empty orbital">
      <text x="210" y="16" textAnchor="middle" style={{ ...TS, fontWeight: 700 }}>BF₃ · pπ–pπ Back Bonding</text>
      <line x1="210" y1="90" x2="120" y2="140" stroke={LINE} strokeWidth="2" />
      <Atom x={210} y={90} label="B" r={11} />
      <Atom x={120} y={140} label="F" r={9} />
      {/* empty p-orbital on B (dashed lobes) */}
      <ellipse cx="210" cy="60" rx="10" ry="22" fill="none" stroke={AX} strokeDasharray="3 2" />
      <ellipse cx="210" cy="120" rx="10" ry="22" fill="none" stroke={AX} strokeDasharray="3 2" />
      <text x="255" y="60" style={TXS}>empty 2pz on B</text>
      {/* filled p-orbital on F donating */}
      <ellipse cx="100" cy="110" rx="18" ry="9" fill="rgba(196,181,253,0.15)" stroke={VEC} transform="rotate(-40 100 110)" />
      <StepArrow x1={130} y1={125} x2={195} y2={95} color={VEC} label="donation" />
      <text x="90" y="165" style={TXS}>filled 2p lone pair on F</text>
      <text x="210" y="175" textAnchor="middle" style={TXS}>Partial B=F character — 3 resonance forms, not a full double bond</text>
    </svg>
  );
}

/** sigma vs pi overlap: head-on p-p sigma vs sideways p-p pi. */
export function OrbitalOverlapVisual() {
  const lobe = (cx: number, cy: number, rot: number, fill: string, stroke: string) => (
    <ellipse cx={cx} cy={cy} rx="24" ry="9" transform={`rotate(${rot} ${cx} ${cy})`} fill={fill} stroke={stroke} strokeWidth="1.2" />
  );
  return (
    <svg viewBox="0 0 480 190" className="h-auto w-full" role="img" aria-label="Sigma head-on and pi sideways orbital overlap">
      <g transform="translate(20,20)">
        <text x="90" y="0" textAnchor="middle" style={{ ...TS, fontWeight: 700 }}>σ bond · head-on (axial)</text>
        {lobe(65, 55, 0, "rgba(103,232,249,0.14)", AX)}
        {lobe(115, 55, 0, "rgba(103,232,249,0.14)", AX)}
        <line x1="35" y1="55" x2="145" y2="55" stroke={LINE} strokeDasharray="2 3" />
        <text x="90" y="90" textAnchor="middle" style={TXS}>overlap along the internuclear axis · free rotation</text>
      </g>
      <g transform="translate(260,20)">
        <text x="90" y="0" textAnchor="middle" style={{ ...TS, fontWeight: 700 }}>π bond · sideways</text>
        {lobe(90, 35, 0, "rgba(196,181,253,0.16)", VEC)}
        {lobe(90, 75, 0, "rgba(196,181,253,0.16)", VEC)}
        <line x1="35" y1="55" x2="145" y2="55" stroke={LINE} strokeDasharray="2 3" />
        <text x="90" y="105" textAnchor="middle" style={TXS}>density above + below axis · node ON the axis · rotation locked</text>
      </g>
    </svg>
  );
}

/** Hydrogen bond network in water: donor H...acceptor lone pair, intermolecular vs intramolecular contrast. */
export function HydrogenBondingVisual() {
  const water = (x: number, y: number) => (
    <g transform={`translate(${x},${y})`}>
      <line x1="0" y1="0" x2="-16" y2="14" stroke={LINE} strokeWidth="1.6" />
      <line x1="0" y1="0" x2="16" y2="14" stroke={LINE} strokeWidth="1.6" />
      <Atom x={0} y={0} label="O" r={8} />
      <Atom x={-16} y={14} label="H" r={6} />
      <Atom x={16} y={14} label="H" r={6} />
    </g>
  );
  return (
    <svg viewBox="0 0 460 200" className="h-auto w-full" role="img" aria-label="Hydrogen bond network between water molecules">
      <text x="230" y="16" textAnchor="middle" style={{ ...TS, fontWeight: 700 }}>Intermolecular H-bonding · water network</text>
      {water(90, 60)}
      {water(230, 100)}
      {water(360, 55)}
      <line x1="106" y1="74" x2="214" y2="96" stroke={VEC} strokeWidth="1.4" strokeDasharray="4 3" />
      <line x1="246" y1="96" x2="344" y2="60" stroke={VEC} strokeWidth="1.4" strokeDasharray="4 3" />
      <text x="160" y="180" textAnchor="middle" style={TXS}>dashed = H-bond (10–40 kJ mol⁻¹, H → lone pair of next O)</text>
      <text x="230" y="196" textAnchor="middle" style={TXS}>each H₂O donates 2 H, accepts 2 lone pairs → open 3-D network, not just chains</text>
    </svg>
  );
}

/** Metallic bonding: electron-sea model with delocalised electrons and mobile cores. */
export function MetallicBondingVisual() {
  const ion = (x: number, y: number) => <circle cx={x} cy={y} r="9" fill="#0B1220" stroke={POS} strokeWidth="1.3" />;
  const dot = (x: number, y: number) => <circle cx={x} cy={y} r="2" fill={AX} opacity="0.85" />;
  const ions: [number, number][] = [];
  for (let row = 0; row < 3; row++) for (let col = 0; col < 5; col++) ions.push([40 + col * 45 + (row % 2 ? 22 : 0), 40 + row * 45]);
  const electrons: [number, number][] = [[55, 55], [95, 70], [135, 40], [175, 65], [220, 50], [65, 100], [110, 115], [155, 95], [200, 110], [240, 90], [75, 30], [280, 60], [290, 100]];
  return (
    <svg viewBox="0 0 340 180" className="h-auto w-full" role="img" aria-label="Electron sea model of metallic bonding">
      <text x="170" y="16" textAnchor="middle" style={{ ...TS, fontWeight: 700 }}>Electron-sea model</text>
      {ions.map(([x, y], i) => <g key={i}>{ion(x, y)}</g>)}
      {electrons.map(([x, y], i) => <g key={i}>{dot(x, y)}</g>)}
      <text x="170" y="165" textAnchor="middle" style={TXS}>fixed positive ion cores (rose) in a delocalised sea of mobile valence e⁻ (cyan)</text>
      <text x="170" y="178" textAnchor="middle" style={TXS}>mobility → conductivity + malleability; cores stay positive (not neutralised)</text>
    </svg>
  );
}
