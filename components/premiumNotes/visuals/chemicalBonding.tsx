// ─────────────────────────────────────────────────────────────────────────────
// Chemical Bonding — hand-built SVG visual notes (server components, no JS).
// Registered by key in components/premiumNotes/visuals/index.ts and referenced
// from content via VisualBlock.visual. Colors follow the premium design system
// (cyan/purple accents on dark, semantic chemistry colors allowed).
// ─────────────────────────────────────────────────────────────────────────────

const AX = "#67e8f9"; // cyan-300 — atoms/orbitals
const VEC = "#c4b5fd"; // violet-300 — dipole vectors
const MUTE = "rgba(255,255,255,0.45)";
const LINE = "rgba(255,255,255,0.25)";
const T = { fontFamily: "ui-sans-serif, system-ui", fill: "rgba(255,255,255,0.85)" };
const TS = { ...T, fontSize: 11 };
const TXS = { ...T, fontSize: 9.5, fill: MUTE };

function Atom({ x, y, r = 9, label, fill = "#0B1220" }: { x: number; y: number; r?: number; label: string; fill?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={fill} stroke={AX} strokeWidth="1.3" />
      <text x={x} y={y + 3.5} textAnchor="middle" style={{ ...TS, fontWeight: 700 }}>{label}</text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, color = VEC }: { x1: number; y1: number; x2: number; y2: number; color?: string }) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = 5;
  return (
    <g stroke={color} fill={color} strokeWidth="1.6">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <polygon points={`${x2},${y2} ${x2 - h * Math.cos(a - 0.45)},${y2 - h * Math.sin(a - 0.45)} ${x2 - h * Math.cos(a + 0.45)},${y2 - h * Math.sin(a + 0.45)}`} stroke="none" />
    </g>
  );
}

/** Dipole vector cancellation: CO₂, BF₃ cancel; H₂O, NH₃ add. */
export function DipoleVectors() {
  return (
    <svg viewBox="0 0 640 190" className="h-auto w-full" role="img" aria-label="Dipole vector addition across molecular geometries">
      {/* CO₂ — linear, cancels */}
      <g transform="translate(20,30)">
        <text x="55" y="-8" textAnchor="middle" style={TS}>CO₂ · linear</text>
        <line x1="20" y1="35" x2="90" y2="35" stroke={LINE} strokeWidth="2" />
        <Atom x={55} y={35} label="C" />
        <Atom x={15} y={35} label="O" />
        <Atom x={95} y={35} label="O" />
        <Arrow x1={45} y1={52} x2={22} y2={52} />
        <Arrow x1={65} y1={52} x2={88} y2={52} />
        <text x="55" y="78" textAnchor="middle" style={TXS}>vectors oppose → μ = 0</text>
      </g>
      {/* BF₃ — trigonal planar, cancels */}
      <g transform="translate(180,30)">
        <text x="55" y="-8" textAnchor="middle" style={TS}>BF₃ · trigonal planar</text>
        <line x1="55" y1="40" x2="55" y2="8" stroke={LINE} strokeWidth="2" />
        <line x1="55" y1="40" x2="28" y2="60" stroke={LINE} strokeWidth="2" />
        <line x1="55" y1="40" x2="82" y2="60" stroke={LINE} strokeWidth="2" />
        <Atom x={55} y={40} label="B" />
        <Atom x={55} y={6} label="F" r={8} />
        <Atom x={25} y={62} label="F" r={8} />
        <Atom x={85} y={62} label="F" r={8} />
        <text x="55" y="88" textAnchor="middle" style={TXS}>3 × 120° vectors → μ = 0</text>
      </g>
      {/* H₂O — bent, adds */}
      <g transform="translate(350,30)">
        <text x="55" y="-8" textAnchor="middle" style={TS}>H₂O · bent (104.5°)</text>
        <line x1="55" y1="30" x2="28" y2="58" stroke={LINE} strokeWidth="2" />
        <line x1="55" y1="30" x2="82" y2="58" stroke={LINE} strokeWidth="2" />
        <Atom x={55} y={30} label="O" />
        <Atom x={25} y={60} label="H" r={8} />
        <Atom x={85} y={60} label="H" r={8} />
        <Arrow x1={55} y1={48} x2={55} y2={14} />
        <text x="55" y="88" textAnchor="middle" style={TXS}>resultant ↑ → μ = 1.85 D</text>
      </g>
      {/* NH₃ — pyramidal, lone pair adds */}
      <g transform="translate(505,30)">
        <text x="55" y="-8" textAnchor="middle" style={TS}>NH₃ · pyramidal</text>
        <line x1="55" y1="34" x2="30" y2="60" stroke={LINE} strokeWidth="2" />
        <line x1="55" y1="34" x2="80" y2="60" stroke={LINE} strokeWidth="2" />
        <line x1="55" y1="34" x2="55" y2="64" stroke={LINE} strokeWidth="2" />
        <Atom x={55} y={34} label="N" />
        <Atom x={27} y={62} label="H" r={8} />
        <Atom x={83} y={62} label="H" r={8} />
        <Atom x={55} y={67} label="H" r={8} />
        <ellipse cx="55" cy="14" rx="7" ry="10" fill="none" stroke={VEC} strokeDasharray="3 2" />
        <Arrow x1={55} y1={50} x2={55} y2={26} />
        <text x="55" y="88" textAnchor="middle" style={TXS}>lone pair + bonds add → 1.47 D</text>
      </g>
    </svg>
  );
}

/** VSEPR parent geometries + key lone-pair shapes. */
export function VseprGallery() {
  const cell = (x: number, y: number, title: string, sub: string, body: React.ReactNode) => (
    <g transform={`translate(${x},${y})`}>
      {body}
      <text x="52" y="86" textAnchor="middle" style={TS}>{title}</text>
      <text x="52" y="99" textAnchor="middle" style={TXS}>{sub}</text>
    </g>
  );
  const bond = (x2: number, y2: number, dash = false) => (
    <line x1="52" y1="40" x2={x2} y2={y2} stroke={LINE} strokeWidth="2" strokeDasharray={dash ? "3 2" : undefined} />
  );
  const lp = (x: number, y: number, rot = 0) => (
    <ellipse cx={x} cy={y} rx="6" ry="9" transform={`rotate(${rot} ${x} ${y})`} fill="none" stroke={VEC} strokeDasharray="3 2" />
  );
  return (
    <svg viewBox="0 0 640 330" className="h-auto w-full" role="img" aria-label="VSEPR geometry gallery">
      {cell(10, 10, "Linear · AX₂", "BeCl₂ · 180°", <>
        {bond(12, 40)}{bond(92, 40)}<Atom x={52} y={40} label="A" /><Atom x={12} y={40} label="X" r={7} /><Atom x={92} y={40} label="X" r={7} />
      </>)}
      {cell(170, 10, "Trigonal planar · AX₃", "BF₃ · 120°", <>
        {bond(52, 8)}{bond(24, 58)}{bond(80, 58)}<Atom x={52} y={40} label="A" /><Atom x={52} y={8} label="X" r={7} /><Atom x={24} y={58} label="X" r={7} /><Atom x={80} y={58} label="X" r={7} />
      </>)}
      {cell(330, 10, "Tetrahedral · AX₄", "CH₄ · 109.5°", <>
        {bond(52, 8)}{bond(22, 56)}{bond(82, 56)}{bond(52, 62, true)}<Atom x={52} y={40} label="A" /><Atom x={52} y={8} label="X" r={7} /><Atom x={22} y={56} label="X" r={7} /><Atom x={82} y={56} label="X" r={7} /><Atom x={52} y={64} label="X" r={7} />
      </>)}
      {cell(490, 10, "Bent · AX₂E₂", "H₂O · 104.5°", <>
        {bond(24, 60)}{bond(80, 60)}{lp(38, 14, -30)}{lp(66, 14, 30)}<Atom x={52} y={40} label="A" /><Atom x={24} y={60} label="X" r={7} /><Atom x={80} y={60} label="X" r={7} />
      </>)}
      {cell(10, 120, "Trigonal bipyramidal · AX₅", "PCl₅ · 90°/120°", <>
        {bond(52, 6)}{bond(52, 72)}{bond(16, 48)}{bond(88, 48)}{bond(70, 24, true)}<Atom x={52} y={40} label="A" /><Atom x={52} y={6} label="X" r={7} /><Atom x={52} y={72} label="X" r={7} /><Atom x={16} y={48} label="X" r={7} /><Atom x={88} y={48} label="X" r={7} /><Atom x={72} y={22} label="X" r={7} />
      </>)}
      {cell(170, 120, "See-saw · AX₄E", "SF₄ · lp equatorial", <>
        {bond(52, 6)}{bond(52, 72)}{bond(16, 48)}{bond(88, 48)}{lp(76, 22, 40)}<Atom x={52} y={40} label="A" /><Atom x={52} y={6} label="X" r={7} /><Atom x={52} y={72} label="X" r={7} /><Atom x={16} y={48} label="X" r={7} /><Atom x={88} y={48} label="X" r={7} />
      </>)}
      {cell(330, 120, "T-shape · AX₃E₂", "ClF₃ · ~87.5°", <>
        {bond(52, 6)}{bond(52, 72)}{bond(16, 48)}{lp(80, 26, 40)}{lp(84, 52, -40)}<Atom x={52} y={40} label="A" /><Atom x={52} y={6} label="X" r={7} /><Atom x={52} y={72} label="X" r={7} /><Atom x={16} y={48} label="X" r={7} />
      </>)}
      {cell(490, 120, "Linear · AX₂E₃", "XeF₂, I₃⁻", <>
        {bond(52, 6)}{bond(52, 72)}{lp(24, 32, -20)}{lp(80, 32, 20)}{lp(52, 20, 90)}<Atom x={52} y={40} label="A" /><Atom x={52} y={6} label="X" r={7} /><Atom x={52} y={72} label="X" r={7} />
      </>)}
      {cell(90, 225, "Octahedral · AX₆", "SF₆ · 90°", <>
        {bond(52, 6)}{bond(52, 72)}{bond(16, 40)}{bond(88, 40)}{bond(28, 20, true)}{bond(76, 58, true)}<Atom x={52} y={40} label="A" /><Atom x={52} y={6} label="X" r={7} /><Atom x={52} y={72} label="X" r={7} /><Atom x={16} y={40} label="X" r={7} /><Atom x={88} y={40} label="X" r={7} /><Atom x={28} y={18} label="X" r={7} /><Atom x={78} y={60} label="X" r={7} />
      </>)}
      {cell(250, 225, "Square pyramidal · AX₅E", "BrF₅", <>
        {bond(52, 6)}{bond(16, 40)}{bond(88, 40)}{bond(28, 20, true)}{bond(76, 58, true)}{lp(52, 66, 0)}<Atom x={52} y={40} label="A" /><Atom x={52} y={6} label="X" r={7} /><Atom x={16} y={40} label="X" r={7} /><Atom x={88} y={40} label="X" r={7} /><Atom x={28} y={18} label="X" r={7} /><Atom x={78} y={60} label="X" r={7} />
      </>)}
      {cell(410, 225, "Square planar · AX₄E₂", "XeF₄ · lps trans", <>
        {bond(16, 40)}{bond(88, 40)}{bond(28, 20, true)}{bond(76, 58, true)}{lp(52, 12, 0)}{lp(52, 68, 0)}<Atom x={52} y={40} label="A" /><Atom x={16} y={40} label="X" r={7} /><Atom x={88} y={40} label="X" r={7} /><Atom x={28} y={18} label="X" r={7} /><Atom x={78} y={60} label="X" r={7} />
      </>)}
    </svg>
  );
}

/** sp / sp² / sp³ hybrid orbital sets. */
export function HybridShapes() {
  const lobe = (cx: number, cy: number, rot: number, len = 26) => (
    <ellipse cx={cx} cy={cy} rx={len / 2} ry="8" transform={`rotate(${rot} ${cx} ${cy})`} fill="rgba(103,232,249,0.12)" stroke={AX} strokeWidth="1.2" />
  );
  return (
    <svg viewBox="0 0 640 170" className="h-auto w-full" role="img" aria-label="sp, sp2 and sp3 hybrid orbital geometries">
      <g transform="translate(40,20)">
        <text x="60" y="0" textAnchor="middle" style={TS}>sp · linear · 180°</text>
        {lobe(38, 55, 0)}{lobe(82, 55, 0)}
        <circle cx="60" cy="55" r="4" fill={AX} />
        <text x="60" y="95" textAnchor="middle" style={TXS}>50 % s · BeCl₂, C₂H₂</text>
      </g>
      <g transform="translate(240,20)">
        <text x="60" y="0" textAnchor="middle" style={TS}>sp² · trigonal planar · 120°</text>
        {lobe(60, 32, 90)}{lobe(38, 68, -30)}{lobe(82, 68, 30)}
        <circle cx="60" cy="55" r="4" fill={AX} />
        <text x="60" y="102" textAnchor="middle" style={TXS}>33⅓ % s · BF₃, C₂H₄</text>
      </g>
      <g transform="translate(450,20)">
        <text x="60" y="0" textAnchor="middle" style={TS}>sp³ · tetrahedral · 109.5°</text>
        {lobe(60, 32, 90)}{lobe(34, 70, -40)}{lobe(86, 70, 40)}
        <ellipse cx="60" cy="72" rx="6" ry="12" fill="rgba(103,232,249,0.06)" stroke={AX} strokeDasharray="3 2" strokeWidth="1" />
        <circle cx="60" cy="55" r="4" fill={AX} />
        <text x="60" y="102" textAnchor="middle" style={TXS}>25 % s · CH₄, NH₃, H₂O</text>
      </g>
    </svg>
  );
}

/** MO energy diagrams: N₂ (s–p mixed order) vs O₂ (normal order, paramagnetic). */
export function MoDiagram() {
  const lv = (x: number, y: number, w = 34) => <line x1={x} y1={y} x2={x + w} y2={y} stroke={AX} strokeWidth="1.6" />;
  const e = (x: number, y: number, pair = true) => (
    <text x={x} y={y - 3} textAnchor="middle" style={{ ...TS, fill: "#fbbf24", fontSize: 10 }}>{pair ? "↑↓" : "↑"}</text>
  );
  const lbl = (x: number, y: number, s: string) => <text x={x} y={y + 3.5} textAnchor="end" style={TXS}>{s}</text>;
  return (
    <svg viewBox="0 0 640 300" className="h-auto w-full" role="img" aria-label="Molecular orbital diagrams for nitrogen and oxygen">
      {/* N2 — mixed order: π2p BELOW σ2p */}
      <g transform="translate(60,20)">
        <text x="90" y="0" textAnchor="middle" style={{ ...TS, fontWeight: 700 }}>N₂ (s–p mixing)</text>
        {lbl(58, 250, "σ2s")}{lv(64, 250)}{e(81, 250)}
        {lbl(58, 222, "σ*2s")}{lv(64, 222)}{e(81, 222)}
        {lbl(58, 170, "π2pₓ π2pᵧ")}{lv(64, 170)}{lv(112, 170)}{e(81, 170)}{e(129, 170)}
        {lbl(58, 130, "σ2p𝓏")}{lv(64, 130)}{e(81, 130)}
        {lbl(58, 84, "π*2p")}{lv(64, 84)}{lv(112, 84)}
        {lbl(58, 48, "σ*2p𝓏")}{lv(64, 48)}
        <text x="90" y="285" textAnchor="middle" style={TXS}>order = ½(8−2) = 3 · diamagnetic</text>
      </g>
      {/* O2 — normal order: σ2p BELOW π2p; unpaired π* */}
      <g transform="translate(370,20)">
        <text x="90" y="0" textAnchor="middle" style={{ ...TS, fontWeight: 700 }}>O₂ (no mixing)</text>
        {lbl(58, 250, "σ2s")}{lv(64, 250)}{e(81, 250)}
        {lbl(58, 222, "σ*2s")}{lv(64, 222)}{e(81, 222)}
        {lbl(58, 178, "σ2p𝓏")}{lv(64, 178)}{e(81, 178)}
        {lbl(58, 142, "π2pₓ π2pᵧ")}{lv(64, 142)}{lv(112, 142)}{e(81, 142)}{e(129, 142)}
        {lbl(58, 96, "π*2p")}{lv(64, 96)}{lv(112, 96)}{e(81, 96, false)}{e(129, 96, false)}
        {lbl(58, 52, "σ*2p𝓏")}{lv(64, 52)}
        <text x="90" y="285" textAnchor="middle" style={TXS}>order = ½(8−4) = 2 · 2 unpaired → paramagnetic</text>
      </g>
      <line x1="320" y1="30" x2="320" y2="280" stroke={LINE} strokeDasharray="4 4" />
    </svg>
  );
}
