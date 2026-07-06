// ─────────────────────────────────────────────────────────────────────────────
// Mole Concept — hand-built SVG visual notes (server components, no JS).
// Registered by key in components/premiumNotes/visuals/index.tsx and referenced
// from content via VisualBlock.visual. Colors follow the premium design system
// (cyan/purple accents on dark; semantic chemistry colors allowed).
// ─────────────────────────────────────────────────────────────────────────────

const AX = "#67e8f9"; // cyan-300 — primary accent
const VEC = "#c4b5fd"; // violet-300 — secondary accent
const OK = "#4ade80"; // green — allowed as semantic "product/result"
const WARN = "#fbbf24"; // amber — semantic caution (limiting reagent)
const MUTE = "rgba(255,255,255,0.45)";
const LINE = "rgba(255,255,255,0.25)";
const CARD = "rgba(255,255,255,0.04)";
const T = { fontFamily: "ui-sans-serif, system-ui", fill: "rgba(255,255,255,0.85)" };
const TS = { ...T, fontSize: 11 };
const TB = { ...T, fontSize: 12, fontWeight: 700 as const };
const TXS = { ...T, fontSize: 9.5, fill: MUTE };

function Arrow({ x1, y1, x2, y2, color = AX, w = 1.6 }: { x1: number; y1: number; x2: number; y2: number; color?: string; w?: number }) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = 5.5;
  return (
    <g stroke={color} fill={color} strokeWidth={w}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <polygon points={`${x2},${y2} ${x2 - h * Math.cos(a - 0.45)},${y2 - h * Math.sin(a - 0.45)} ${x2 - h * Math.cos(a + 0.45)},${y2 - h * Math.sin(a + 0.45)}`} stroke="none" />
    </g>
  );
}

function Node({ x, y, w, h, title, sub, accent = AX }: { x: number; y: number; w: number; h: number; title: string; sub?: string; accent?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="10" fill={CARD} stroke={accent} strokeWidth="1.2" />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 4 : h / 2 + 4)} textAnchor="middle" style={TB}>{title}</text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 12} textAnchor="middle" style={TXS}>{sub}</text>}
    </g>
  );
}

/** THE conversion wheel: particles ↔ mole ↔ mass ↔ gas volume, formulas on every arrow. */
export function MoleConversionMap() {
  return (
    <svg viewBox="0 0 680 300" className="h-auto w-full" role="img" aria-label="Mole conversion map linking particles, mass and gas volume through the mole">
      {/* central mole hub */}
      <circle cx={340} cy={150} r={44} fill={CARD} stroke={AX} strokeWidth="2" />
      <text x={340} y={146} textAnchor="middle" style={{ ...TB, fontSize: 15 }}>n (mol)</text>
      <text x={340} y={163} textAnchor="middle" style={TXS}>amount of substance</text>

      {/* particles (left) */}
      <Node x={30} y={110} w={150} h={80} title="Particles  N" sub="atoms · molecules · ions" accent={VEC} />
      <Arrow x1={185} y1={135} x2={292} y2={140} />
      <text x={238} y={126} textAnchor="middle" style={TS}>÷ N_A</text>
      <Arrow x1={292} y1={165} x2={185} y2={170} color={VEC} />
      <text x={238} y={188} textAnchor="middle" style={TS}>× N_A</text>

      {/* mass (right) */}
      <Node x={500} y={110} w={150} h={80} title="Mass  w (g)" sub="laboratory balance" accent={VEC} />
      <Arrow x1={495} y1={140} x2={388} y2={140} />
      <text x={442} y={126} textAnchor="middle" style={TS}>÷ M (g/mol)</text>
      <Arrow x1={388} y1={165} x2={495} y2={165} color={VEC} />
      <text x={442} y={188} textAnchor="middle" style={TS}>× M</text>

      {/* gas volume (bottom) */}
      <Node x={255} y={230} w={170} h={56} title="Gas volume V" sub="22.4 L at STP (1 atm, 0 °C)" accent={VEC} />
      <Arrow x1={320} y1={225} x2={330} y2={198} />
      <text x={270} y={214} textAnchor="middle" style={TS}>÷ 22.4 L</text>
      <Arrow x1={355} y1={198} x2={365} y2={225} color={VEC} />
      <text x={412} y={214} textAnchor="middle" style={TS}>× 22.4 L</text>

      {/* ideal gas (top) */}
      <rect x={255} y={22} width={170} height={48} rx="10" fill={CARD} stroke={OK} strokeWidth="1.2" />
      <text x={340} y={42} textAnchor="middle" style={TB}>Any P, T:  PV = nRT</text>
      <text x={340} y={58} textAnchor="middle" style={TXS}>R = 0.0821 L·atm·K⁻¹·mol⁻¹</text>
      <Arrow x1={340} y1={74} x2={340} y2={102} color={OK} />

      <text x={340} y={296} textAnchor="middle" style={TXS}>Every mole-concept problem is a walk on this map — convert INTO moles, reason, convert OUT.</text>
    </svg>
  );
}

/** Limiting reagent bars: available vs required for 2H₂ + O₂ → 2H₂O. */
export function LimitingReagentBars() {
  return (
    <svg viewBox="0 0 640 240" className="h-auto w-full" role="img" aria-label="Limiting reagent comparison of available versus required moles">
      <text x={320} y={22} textAnchor="middle" style={TB}>2H₂ + O₂ → 2H₂O   ·   given 6 mol H₂ and 2 mol O₂</text>

      {/* divide-by-coefficient rule */}
      <g transform="translate(60,50)">
        <text x={0} y={0} style={TS}>H₂ :  n/ν = 6/2 = 3</text>
        <rect x={140} y={-14} width={180} height={20} rx="5" fill="rgba(103,232,249,0.25)" stroke={AX} />
        <text x={330} y={0} style={TXS}>← larger → EXCESS</text>
      </g>
      <g transform="translate(60,90)">
        <text x={0} y={0} style={TS}>O₂ :  n/ν = 2/1 = 2</text>
        <rect x={140} y={-14} width={120} height={20} rx="5" fill="rgba(251,191,36,0.3)" stroke={WARN} />
        <text x={270} y={0} style={{ ...TS, fill: WARN, fontWeight: 700 }}>← smaller → LIMITING</text>
      </g>

      {/* consequence bars */}
      <g transform="translate(60,140)">
        <text x={0} y={0} style={TS}>O₂ used</text>
        <rect x={140} y={-14} width={120} height={20} rx="5" fill="rgba(251,191,36,0.3)" stroke={WARN} />
        <text x={268} y={0} style={TXS}>all 2 mol consumed</text>
      </g>
      <g transform="translate(60,172)">
        <text x={0} y={0} style={TS}>H₂ used</text>
        <rect x={140} y={-14} width={120} height={20} rx="5" fill="rgba(103,232,249,0.25)" stroke={AX} />
        <text x={268} y={0} style={TXS}>2×2 = 4 mol used · 2 mol H₂ left over</text>
      </g>
      <g transform="translate(60,204)">
        <text x={0} y={0} style={TS}>H₂O made</text>
        <rect x={140} y={-14} width={120} height={20} rx="5" fill="rgba(74,222,128,0.25)" stroke={OK} />
        <text x={268} y={0} style={{ ...TXS, fill: OK }}>2×2 = 4 mol product — always from the LR</text>
      </g>
    </svg>
  );
}

/** Eudiometer + the absorber table every gas-analysis problem uses. */
export function EudiometryTube() {
  const rows: [string, string][] = [
    ["KOH (aq)", "absorbs CO₂"],
    ["Alkaline pyrogallol", "absorbs O₂"],
    ["Turpentine oil", "absorbs O₃"],
    ["Ammoniacal Cu₂Cl₂", "absorbs CO"],
    ["Conc. H₂SO₄ / CaCl₂", "absorbs H₂O (g)"],
  ];
  return (
    <svg viewBox="0 0 660 260" className="h-auto w-full" role="img" aria-label="Eudiometry tube with gas volumes and the standard absorber table">
      {/* tube */}
      <g transform="translate(50,26)">
        <rect x={0} y={0} width={70} height={190} rx="14" fill={CARD} stroke={AX} strokeWidth="1.5" />
        <rect x={6} y={120} width={58} height={64} rx="9" fill="rgba(103,232,249,0.12)" />
        <text x={35} y={30} textAnchor="middle" style={TXS}>graduated</text>
        <text x={35} y={42} textAnchor="middle" style={TXS}>tube (mL)</text>
        <text x={35} y={100} textAnchor="middle" style={TS}>gas mixture</text>
        <text x={35} y={155} textAnchor="middle" style={TXS}>Hg / water</text>
        <line x1={0} y1={118} x2={70} y2={118} stroke={LINE} strokeDasharray="3 3" />
        {/* spark wires */}
        <line x1={22} y1={0} x2={22} y2={-12} stroke={VEC} strokeWidth="2" />
        <line x1={48} y1={0} x2={48} y2={-12} stroke={VEC} strokeWidth="2" />
        <text x={35} y={-16} textAnchor="middle" style={{ ...TXS, fill: VEC }}>spark → explode</text>
      </g>

      {/* protocol */}
      <g transform="translate(160,44)">
        <text x={0} y={0} style={TB}>Volumes ∝ moles (Avogadro, same P·T)</text>
        <text x={0} y={22} style={TS}>1 · measure mixture → 2 · explode with O₂ → 3 · cool (H₂O condenses)</text>
        <text x={0} y={42} style={TS}>4 · pass through absorbers, read the drop at each step</text>
        <text x={0} y={66} style={{ ...TS, fill: WARN }}>Contraction on cooling = V(initial) + V(O₂) − V(after cooling)</text>
      </g>

      {/* absorber table */}
      <g transform="translate(160,124)">
        <rect x={0} y={-18} width={440} height={124} rx="10" fill={CARD} stroke={LINE} />
        <text x={12} y={0} style={{ ...TS, fontWeight: 700 }}>Absorber</text>
        <text x={220} y={0} style={{ ...TS, fontWeight: 700 }}>Removes</text>
        {rows.map((r, i) => (
          <g key={r[0]}>
            <text x={12} y={20 + i * 17} style={TS}>{r[0]}</text>
            <text x={220} y={20 + i * 17} style={{ ...TS, fill: OK }}>{r[1]}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Concentration interconversion map with the density bridge. */
export function ConcentrationMap() {
  return (
    <svg viewBox="0 0 680 300" className="h-auto w-full" role="img" aria-label="Concentration term interconversion map through the density bridge">
      <Node x={40} y={30} w={180} h={62} title="Molarity M" sub="mol solute / L solution · needs V" accent={AX} />
      <Node x={460} y={30} w={180} h={62} title="Molality m" sub="mol solute / kg solvent · mass only" accent={AX} />
      <Node x={40} y={208} w={180} h={62} title="% w/w · % w/v · ppm" sub="mass-ratio labels" accent={VEC} />
      <Node x={460} y={208} w={180} h={62} title="Mole fraction X" sub="nᵢ / Σn · symmetric" accent={VEC} />

      {/* density bridge in the middle */}
      <rect x={255} y={120} width={170} height={60} rx="12" fill={CARD} stroke={WARN} strokeWidth="1.5" />
      <text x={340} y={144} textAnchor="middle" style={TB}>DENSITY  d (g/mL)</text>
      <text x={340} y={162} textAnchor="middle" style={TXS}>the only bridge volume ↔ mass</text>

      <Arrow x1={222} y1={61} x2={456} y2={61} />
      <text x={339} y={50} textAnchor="middle" style={TS}>m = 1000·M / (1000·d − M·M₂)</text>
      <Arrow x1={150} y1={96} x2={290} y2={120} color={WARN} />
      <Arrow x1={530} y1={96} x2={390} y2={120} color={WARN} />
      <Arrow x1={290} y1={182} x2={150} y2={206} color={WARN} />
      <Arrow x1={390} y1={182} x2={530} y2={206} color={WARN} />

      <text x={340} y={250} textAnchor="middle" style={TS}>Temperature-independent: m, X, % w/w  ·  Temperature-dependent: M, % w/v (volume expands)</text>
      <text x={340} y={272} textAnchor="middle" style={TXS}>Golden method: take 1 L of solution (for M) or 1 kg of solvent (for m), convert everything to masses, re-divide.</text>
    </svg>
  );
}

/** Oleum bar: label = (100 + x)% where x g water converts free SO₃. */
export function OleumBar() {
  return (
    <svg viewBox="0 0 660 240" className="h-auto w-full" role="img" aria-label="Oleum composition bar and labelling logic">
      <text x={330} y={24} textAnchor="middle" style={TB}>Oleum = H₂SO₄ + dissolved free SO₃   ·   label “(100 + x)%”</text>

      {/* 100 g bar */}
      <g transform="translate(80,52)">
        <rect x={0} y={0} width={320} height={40} rx="8" fill="rgba(103,232,249,0.18)" stroke={AX} />
        <rect x={320} y={0} width={180} height={40} rx="8" fill="rgba(196,181,253,0.22)" stroke={VEC} />
        <text x={160} y={25} textAnchor="middle" style={TS}>pure H₂SO₄</text>
        <text x={410} y={25} textAnchor="middle" style={TS}>free SO₃</text>
        <text x={250} y={-8} textAnchor="middle" style={TXS}>take 100 g oleum</text>
      </g>

      {/* + water step */}
      <g transform="translate(80,120)">
        <text x={0} y={0} style={TS}>+ x g H₂O :  SO₃ + H₂O → H₂SO₄  (all free SO₃ consumed)</text>
        <Arrow x1={330} y1={-6} x2={400} y2={-6} color={OK} />
        <text x={470} y={0} style={{ ...TS, fill: OK }}>(100 + x) g H₂SO₄</text>
      </g>

      {/* the two formulas */}
      <g transform="translate(80,158)">
        <rect x={0} y={0} width={500} height={62} rx="10" fill={CARD} stroke={LINE} />
        <text x={16} y={24} style={TS}>% free SO₃ = (80/18) · x     — because 18 g H₂O frees one 80 g SO₃</text>
        <text x={16} y={46} style={TS}>e.g. 109% → x = 9 → 40% SO₃  ·  118% → x = 18 → 80% SO₃ (maximum label)</text>
      </g>
    </svg>
  );
}

/** Empirical → molecular formula as a 5-step flowchart. */
export function EmpiricalFormulaFlow() {
  const steps: [string, string][] = [
    ["Take 100 g", "% becomes grams"],
    ["÷ atomic mass", "grams → moles"],
    ["÷ smallest", "mole ratio"],
    ["× to clear", "whole numbers → EF"],
    ["× (M / EF-mass)", "EF → molecular formula"],
  ];
  return (
    <svg viewBox="0 0 680 150" className="h-auto w-full" role="img" aria-label="Five-step empirical to molecular formula flowchart">
      {steps.map((s, i) => {
        const x = 12 + i * 133;
        const last = i === steps.length - 1;
        return (
          <g key={s[0]}>
            <rect x={x} y={40} width={118} height={64} rx="10" fill={CARD} stroke={last ? OK : AX} strokeWidth="1.3" />
            <text x={x + 59} y={56} textAnchor="middle" style={{ ...TXS, fill: last ? OK : AX }}>{`STEP ${i + 1}`}</text>
            <text x={x + 59} y={74} textAnchor="middle" style={TB}>{s[0]}</text>
            <text x={x + 59} y={92} textAnchor="middle" style={TXS}>{s[1]}</text>
            {!last && <Arrow x1={x + 118} y1={72} x2={x + 133} y2={72} />}
          </g>
        );
      })}
      <text x={340} y={128} textAnchor="middle" style={TXS}>Never round a 1 : 1.33 ratio — multiply by 3 to reach 3 : 4. Rounding fabricates a different compound.</text>
    </svg>
  );
}

/** Acid–base titration: burette + flask + the equivalence relation. */
export function TitrationSetup() {
  return (
    <svg viewBox="0 0 660 240" className="h-auto w-full" role="img" aria-label="Acid base titration apparatus and the equivalence relation">
      {/* burette */}
      <g transform="translate(70,10)">
        <rect x={0} y={0} width={26} height={150} rx="5" fill={CARD} stroke={AX} strokeWidth="1.4" />
        <rect x={3} y={70} width={20} height={78} rx="3" fill="rgba(196,181,253,0.25)" />
        {[0, 1, 2, 3, 4, 5].map((t) => <line key={t} x1={0} y1={12 + t * 22} x2={8} y2={12 + t * 22} stroke={LINE} />)}
        <text x={13} y={-4} textAnchor="middle" style={TXS}>titrant</text>
        <text x={40} y={40} style={TXS}>known M, V</text>
        <polygon points="13,152 8,160 18,160" fill={VEC} />
      </g>
      {/* flask */}
      <g transform="translate(45,168)">
        <path d="M40 0 L40 14 L18 52 L74 52 L52 14 L52 0 Z" fill="rgba(103,232,249,0.12)" stroke={AX} strokeWidth="1.4" />
        <text x={46} y={40} textAnchor="middle" style={TXS}>analyte</text>
        <text x={46} y={68} textAnchor="middle" style={{ ...TXS, fill: OK }}>+ indicator</text>
      </g>

      {/* relation card */}
      <g transform="translate(230,44)">
        <rect x={0} y={0} width={390} height={150} rx="12" fill={CARD} stroke={LINE} />
        <text x={20} y={30} style={TB}>At the end point — equivalents match:</text>
        <text x={20} y={62} style={{ ...TS, fill: AX }}>Molarity:  n₁ M₁ V₁ = n₂ M₂ V₂   (n = valence factor)</text>
        <text x={20} y={90} style={{ ...TS, fill: VEC }}>Normality:  N₁ V₁ = N₂ V₂   (N = n × M)</text>
        <line x1={20} y1={104} x2={370} y2={104} stroke={LINE} />
        <text x={20} y={126} style={TXS}>e.g. H₂SO₄ (n=2) vs NaOH (n=1): 2·M(acid)·V = 1·M(base)·V</text>
        <text x={20} y={142} style={{ ...TXS, fill: WARN }}>Milli-mole trick: use mL and M directly → millimoles, no ÷1000.</text>
      </g>
    </svg>
  );
}

/** Percent-yield funnel: theoretical → losses → actual. */
export function YieldFunnel() {
  return (
    <svg viewBox="0 0 640 200" className="h-auto w-full" role="img" aria-label="Percent yield funnel from theoretical to actual yield">
      <text x={320} y={22} textAnchor="middle" style={TB}>% yield = (actual / theoretical) × 100 — always from the limiting reagent</text>
      <polygon points="90,50 420,50 330,120 180,120" fill="rgba(103,232,249,0.14)" stroke={AX} strokeWidth="1.3" />
      <polygon points="180,120 330,120 300,168 210,168" fill="rgba(74,222,128,0.2)" stroke={OK} strokeWidth="1.3" />
      <text x={255} y={82} textAnchor="middle" style={TB}>Theoretical yield</text>
      <text x={255} y={100} textAnchor="middle" style={TXS}>100% — from LR stoichiometry</text>
      <text x={255} y={150} textAnchor="middle" style={{ ...TS, fill: OK, fontWeight: 700 }}>Actual yield</text>
      {/* loss arrows */}
      <Arrow x1={430} y1={72} x2={480} y2={72} color={WARN} />
      <text x={490} y={62} style={{ ...TXS, fill: WARN }}>side reactions</text>
      <text x={490} y={78} style={{ ...TXS, fill: WARN }}>equilibrium limits</text>
      <text x={490} y={94} style={{ ...TXS, fill: WARN }}>handling losses</text>
      <text x={320} y={192} textAnchor="middle" style={TXS}>Sequential steps multiply: 80% then 60% ⇒ overall 0.8 × 0.6 = 48%.</text>
    </svg>
  );
}

/** Master map of all concentration terms, split mass-based vs volume-based. */
export function ConcentrationTermsMap() {
  const massBased: [string, string][] = [
    ["% w/w", "g solute / 100 g soln"],
    ["ppm · ppb", "g / 10⁶ · 10⁹ g soln"],
    ["molality m", "mol / kg solvent"],
    ["mole fraction X", "nᵢ / Σn"],
  ];
  const volBased: [string, string][] = [
    ["molarity M", "mol / L soln"],
    ["normality N", "g-equiv / L soln"],
    ["formality F", "formula-units / L"],
    ["% w/v · g/L", "g / 100 mL · g / L"],
  ];
  return (
    <svg viewBox="0 0 700 320" className="h-auto w-full" role="img" aria-label="Master map of concentration terms, mass-based versus volume-based, joined by density">
      <text x={350} y={22} textAnchor="middle" style={TB}>Concentration = amount of solute in a given amount of solution</text>

      {/* mass-based column */}
      <rect x={20} y={44} width={300} height={230} rx="12" fill={CARD} stroke={AX} strokeWidth="1.3" />
      <text x={170} y={68} textAnchor="middle" style={{ ...TB, fill: AX }}>MASS / MOLE based</text>
      <text x={170} y={84} textAnchor="middle" style={TXS}>temperature-INDEPENDENT</text>
      {massBased.map((r, i) => (
        <g key={r[0]}>
          <text x={40} y={112 + i * 38} style={TB}>{r[0]}</text>
          <text x={40} y={128 + i * 38} style={TXS}>{r[1]}</text>
        </g>
      ))}

      {/* volume-based column */}
      <rect x={380} y={44} width={300} height={230} rx="12" fill={CARD} stroke={VEC} strokeWidth="1.3" />
      <text x={530} y={68} textAnchor="middle" style={{ ...TB, fill: VEC }}>VOLUME based</text>
      <text x={530} y={84} textAnchor="middle" style={TXS}>temperature-DEPENDENT (soln expands)</text>
      {volBased.map((r, i) => (
        <g key={r[0]}>
          <text x={400} y={112 + i * 38} style={TB}>{r[0]}</text>
          <text x={400} y={128 + i * 38} style={TXS}>{r[1]}</text>
        </g>
      ))}

      {/* density bridge */}
      <rect x={300} y={150} width={100} height={40} rx="10" fill="rgba(251,191,36,0.15)" stroke={WARN} strokeWidth="1.4" />
      <text x={350} y={166} textAnchor="middle" style={{ ...TS, fill: WARN, fontWeight: 700 }}>DENSITY</text>
      <text x={350} y={181} textAnchor="middle" style={TXS}>d (g/mL)</text>
      <Arrow x1={322} y1={158} x2={300} y2={168} color={WARN} />
      <Arrow x1={400} y1={170} x2={378} y2={180} color={WARN} />

      <text x={350} y={298} textAnchor="middle" style={TXS}>Golden method: fix a basis (1 L soln for M/N; 1 kg solvent for m; 1 mol for X), convert all to masses, re-divide.</text>
      <text x={350} y={314} textAnchor="middle" style={{ ...TXS, fill: OK }}>Key bridges: strength (g/L) = M·M′  ·  N = M × n-factor  ·  1/m = d/M − M′/1000</text>
    </svg>
  );
}

/** n-factor / equivalent-weight / Normality reference. */
export function NormalityNFactor() {
  const rows: [string, string][] = [
    ["Element", "valency"],
    ["Ion", "|charge|"],
    ["Acid", "basicity (replaceable H⁺)"],
    ["Base", "acidity (replaceable OH⁻)"],
    ["Salt", "(metal atoms) × (its valency)"],
    ["Redox agent", "change in oxidation number"],
  ];
  return (
    <svg viewBox="0 0 680 320" className="h-auto w-full" role="img" aria-label="n-factor table, equivalent weight and normality relations">
      <text x={340} y={22} textAnchor="middle" style={TB}>Equivalents: n-factor, equivalent weight & Normality</text>

      {/* formula rail */}
      <g transform="translate(30,40)">
        <rect x={0} y={0} width={620} height={54} rx="10" fill={CARD} stroke={AX} />
        <text x={16} y={22} style={{ ...TS, fill: AX }}>Equivalent weight E = (molar mass M) / (n-factor)</text>
        <text x={16} y={42} style={{ ...TS, fill: OK }}>g-equivalents n_eq = w/E = moles × n-factor   ⇒   Normality N = Molarity M × n-factor</text>
      </g>

      {/* n-factor table */}
      <g transform="translate(30,112)">
        <rect x={0} y={0} width={620} height={168} rx="10" fill={CARD} stroke={LINE} />
        <text x={20} y={24} style={{ ...TS, fontWeight: 700 }}>Substance</text>
        <text x={280} y={24} style={{ ...TS, fontWeight: 700 }}>n-factor</text>
        <line x1={16} y1={32} x2={604} y2={32} stroke={LINE} />
        {rows.map((r, i) => (
          <g key={r[0]}>
            <text x={20} y={54 + i * 22} style={TS}>{r[0]}</text>
            <text x={280} y={54 + i * 22} style={{ ...TS, fill: VEC }}>{r[1]}</text>
          </g>
        ))}
      </g>
      <text x={340} y={300} textAnchor="middle" style={TXS}>e.g. H₂SO₄ n = 2 → E = 49 · KMnO₄(acidic) n = 5 → E = 31.6 · Na₂CO₃ n = 2 → E = 53</text>
    </svg>
  );
}

/** POAC — atoms of a chosen element are conserved end-to-end. */
export function PoacBridge() {
  return (
    <svg viewBox="0 0 680 240" className="h-auto w-full" role="img" aria-label="Principle of atomic conservation bridging reactant to product through a chosen element">
      <text x={340} y={22} textAnchor="middle" style={TB}>POAC: atoms of a chosen element are conserved — skip the equation</text>

      <Node x={40} y={60} w={200} h={70} title="Reactant A" sub="a atoms of X per formula" accent={AX} />
      <Node x={440} y={60} w={200} h={70} title="Product P" sub="p atoms of X per formula" accent={OK} />

      {/* conservation arrow */}
      <Arrow x1={244} y1={95} x2={436} y2={95} color={VEC} w={2} />
      <text x={340} y={84} textAnchor="middle" style={{ ...TS, fill: VEC, fontWeight: 700 }}>X atoms conserved</text>
      <text x={340} y={112} textAnchor="middle" style={TXS}>(through any number of unknown steps)</text>

      {/* the equation */}
      <rect x={120} y={150} width={440} height={44} rx="10" fill={CARD} stroke={LINE} />
      <text x={340} y={177} textAnchor="middle" style={{ ...TS, fill: AX }}>a × (moles of A) = p × (moles of P)</text>

      <text x={340} y={220} textAnchor="middle" style={TXS}>Choose X appearing in exactly one known reactant and one known product (e.g. O in KClO₃ → O₂; P in sample → Mg₂P₂O₇).</text>
    </svg>
  );
}

/** Linking sequential reactions via a common substance (the ×m / ×n method). */
export function SequentialReactions() {
  return (
    <svg viewBox="0 0 680 220" className="h-auto w-full" role="img" aria-label="Linking sequential reactions through a common substance">
      <text x={340} y={22} textAnchor="middle" style={TB}>Sequential reactions — the mole-bridge (≡) method</text>

      <g transform="translate(40,44)">
        <text x={0} y={16} style={TS}>2KClO₃ → 2KCl + 3O₂</text>
        <text x={0} y={40} style={TS}>C₂H₆ + 7/2 O₂ → 2CO₂ + 3H₂O</text>
        <text x={330} y={16} style={{ ...TXS, fill: WARN }}>common link: O₂</text>
        <text x={330} y={40} style={TXS}>cancel it to relate the ends</text>
      </g>

      <rect x={40} y={100} width={600} height={44} rx="10" fill={CARD} stroke={OK} />
      <text x={60} y={128} style={{ ...TS, fill: OK }}>1 mol C₂H₆ ≡ 7/2 mol O₂ ≡ 7/3 mol KClO₃   — read moles straight across the chain</text>

      <text x={340} y={178} textAnchor="middle" style={TXS}>Method: write each step, make the shared species′ coefficient match, add/subtract → one relation linking start to end.</text>
      <text x={340} y={198} textAnchor="middle" style={{ ...TXS, fill: VEC }}>POAC is the special case where the shared link is an ATOM.</text>
    </svg>
  );
}

/** The three temperature scales aligned, with the conversion relations. */
export function TemperatureScales() {
  const rows: [string, string, string, string][] = [
    ["Boiling water", "100 °C", "212 °F", "373 K"],
    ["Body", "37 °C", "98.6 °F", "310 K"],
    ["Freezing water", "0 °C", "32 °F", "273 K"],
    ["Absolute zero", "−273 °C", "−460 °F", "0 K"],
  ];
  return (
    <svg viewBox="0 0 660 240" className="h-auto w-full" role="img" aria-label="Celsius Fahrenheit Kelvin temperature scales and conversions">
      <text x={330} y={22} textAnchor="middle" style={TB}>Temperature scales & conversions</text>
      <g transform="translate(30,44)">
        <rect x={0} y={0} width={360} height={130} rx="10" fill={CARD} stroke={LINE} />
        <text x={12} y={22} style={{ ...TS, fontWeight: 700 }}>Reference</text>
        <text x={170} y={22} style={{ ...TS, fontWeight: 700, fill: AX }}>°C</text>
        <text x={240} y={22} style={{ ...TS, fontWeight: 700, fill: VEC }}>°F</text>
        <text x={310} y={22} style={{ ...TS, fontWeight: 700, fill: OK }}>K</text>
        {rows.map((r, i) => (
          <g key={r[0]}>
            <text x={12} y={46 + i * 22} style={TS}>{r[0]}</text>
            <text x={170} y={46 + i * 22} style={{ ...TS, fill: AX }}>{r[1]}</text>
            <text x={240} y={46 + i * 22} style={{ ...TS, fill: VEC }}>{r[2]}</text>
            <text x={310} y={46 + i * 22} style={{ ...TS, fill: OK }}>{r[3]}</text>
          </g>
        ))}
      </g>
      <g transform="translate(410,44)">
        <rect x={0} y={0} width={220} height={130} rx="10" fill={CARD} stroke={AX} />
        <text x={16} y={30} style={{ ...TS, fill: AX }}>K = °C + 273.15</text>
        <text x={16} y={62} style={{ ...TS, fill: VEC }}>°F = (9/5)°C + 32</text>
        <text x={16} y={94} style={TXS}>ΔT: 1 K = 1 °C = 1.8 °F</text>
        <text x={16} y={116} style={{ ...TXS, fill: WARN }}>−40 °C = −40 °F (they meet)</text>
      </g>
      <text x={330} y={230} textAnchor="middle" style={TXS}>Kelvin is absolute — always convert to K before using PV = nRT.</text>
    </svg>
  );
}

/** Significant-figure rules for arithmetic. */
export function SignificantFigures() {
  return (
    <svg viewBox="0 0 660 210" className="h-auto w-full" role="img" aria-label="Significant figure rules for addition and multiplication">
      <text x={330} y={22} textAnchor="middle" style={TB}>Significant figures in calculations</text>
      <g transform="translate(30,40)">
        <rect x={0} y={0} width={290} height={150} rx="10" fill={CARD} stroke={AX} />
        <text x={16} y={26} style={{ ...TS, fill: AX, fontWeight: 700 }}>Add / Subtract</text>
        <text x={16} y={50} style={TXS}>→ keep the FEWEST DECIMAL PLACES</text>
        <text x={16} y={82} style={TS}>12.11 + 18.0 + 1.012</text>
        <text x={16} y={104} style={TS}>= 31.122 → 31.1</text>
        <text x={16} y={130} style={{ ...TXS, fill: WARN }}>18.0 has 1 decimal → answer 1 decimal</text>
      </g>
      <g transform="translate(340,40)">
        <rect x={0} y={0} width={290} height={150} rx="10" fill={CARD} stroke={VEC} />
        <text x={16} y={26} style={{ ...TS, fill: VEC, fontWeight: 700 }}>Multiply / Divide</text>
        <text x={16} y={50} style={TXS}>→ keep the FEWEST SIG FIGS</text>
        <text x={16} y={82} style={TS}>2.5 × 1.20</text>
        <text x={16} y={104} style={TS}>= 3.00 → 3.0</text>
        <text x={16} y={130} style={{ ...TXS, fill: WARN }}>2.5 has 2 sig figs → answer 2 sig figs</text>
      </g>
    </svg>
  );
}

/** STP / NTP / RTP / SATP conventions and molar volumes. */
export function StpConventions() {
  const rows: [string, string, string, string][] = [
    ["Old STP", "0 °C (273.15 K)", "1 atm", "22.4 L"],
    ["Modern STP", "273.15 K", "1 bar", "22.7 L"],
    ["NTP", "0 °C", "1 atm", "22.4 L"],
    ["SATP", "25 °C (298 K)", "1 bar", "24.8 L"],
  ];
  return (
    <svg viewBox="0 0 660 210" className="h-auto w-full" role="img" aria-label="STP NTP SATP conventions with molar volumes">
      <text x={330} y={22} textAnchor="middle" style={TB}>Standard conditions & molar volume</text>
      <g transform="translate(30,40)">
        <rect x={0} y={0} width={600} height={140} rx="10" fill={CARD} stroke={LINE} />
        <text x={16} y={26} style={{ ...TS, fontWeight: 700 }}>Convention</text>
        <text x={200} y={26} style={{ ...TS, fontWeight: 700 }}>Temperature</text>
        <text x={400} y={26} style={{ ...TS, fontWeight: 700 }}>Pressure</text>
        <text x={520} y={26} style={{ ...TS, fontWeight: 700, fill: OK }}>Vₘ</text>
        <line x1={16} y1={34} x2={584} y2={34} stroke={LINE} />
        {rows.map((r, i) => (
          <g key={r[0]}>
            <text x={16} y={58 + i * 26} style={TS}>{r[0]}</text>
            <text x={200} y={58 + i * 26} style={{ ...TS, fill: AX }}>{r[1]}</text>
            <text x={400} y={58 + i * 26} style={{ ...TS, fill: VEC }}>{r[2]}</text>
            <text x={520} y={58 + i * 26} style={{ ...TS, fill: OK, fontWeight: 700 }}>{r[3]}</text>
          </g>
        ))}
      </g>
      <text x={330} y={200} textAnchor="middle" style={TXS}>JEE default = 22.4 L at 1 atm, 0 °C. Away from these, always PV = nRT.</text>
    </svg>
  );
}

/** Crystal packing efficiencies SC / BCC / FCC. */
export function CrystalPacking() {
  const cells: [string, string, string][] = [
    ["Simple cubic", "52%", "atoms at 8 corners"],
    ["Body-centred", "68%", "corners + 1 centre"],
    ["Face-centred", "74%", "corners + 6 faces"],
  ];
  return (
    <svg viewBox="0 0 660 220" className="h-auto w-full" role="img" aria-label="Crystal packing efficiencies for simple, body-centred and face-centred cubic">
      <text x={330} y={22} textAnchor="middle" style={TB}>Crystal packing efficiency (needed for density-from-radius problems)</text>
      {cells.map((c, i) => {
        const x = 30 + i * 205;
        return (
          <g key={c[0]}>
            <rect x={x} y={44} width={185} height={120} rx="10" fill={CARD} stroke={AX} strokeWidth="1.2" />
            {/* mini cube */}
            <g transform={`translate(${x + 24},68)`} stroke={LINE} fill="none" strokeWidth="1">
              <rect x={0} y={14} width={40} height={40} />
              <rect x={14} y={0} width={40} height={40} />
              <line x1={0} y1={14} x2={14} y2={0} /><line x1={40} y1={14} x2={54} y2={0} />
              <line x1={0} y1={54} x2={14} y2={40} /><line x1={40} y1={54} x2={54} y2={40} />
              {i >= 1 && <circle cx={27} cy={27} r={4} fill={VEC} stroke="none" />}
              {i === 2 && <><circle cx={7} cy={34} r={3} fill={OK} stroke="none" /><circle cx={47} cy={34} r={3} fill={OK} stroke="none" /><circle cx={27} cy={7} r={3} fill={OK} stroke="none" /></>}
            </g>
            <text x={x + 100} y={92} textAnchor="middle" style={TB}>{c[0]}</text>
            <text x={x + 100} y={116} textAnchor="middle" style={{ ...T, fontSize: 20, fontWeight: 700, fill: OK }}>{c[1]}</text>
            <text x={x + 100} y={138} textAnchor="middle" style={TXS}>{c[2]}</text>
          </g>
        );
      })}
      <text x={330} y={188} textAnchor="middle" style={TXS}>Effective density d(atoms) = packing-fraction × (bulk density). If no crystal type is given, assume 100% occupancy.</text>
    </svg>
  );
}
