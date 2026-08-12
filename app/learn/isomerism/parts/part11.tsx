import Link from "next/link";
import { BlockMath, InlineMath } from "@/components/math/react-katex";

// ─────────────────────────────────────────────────────────────────────────────
// Optical Isomerism source · pages 1–14 · Part 11
// Full source audit: handwritten notes pp1–6, 13–14 + I.L. Finar excerpt
// pp7–9 (Fresnel's explanation, Figs 2.20–2.23) + Hart/Hadad/Craine/Hart
// excerpt pp10–11 (Figs 5.7–5.9). Page 12 is blank in the source.
// ─────────────────────────────────────────────────────────────────────────────

function Polarimeter() {
  return (
    <svg fill="currentColor" viewBox="0 0 860 300" className="min-w-[680px] w-full text-slate-100" role="img" aria-label="Polarimeter with polariser sample tube analyser and rotated plane">
      <defs><marker id="light-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L0 8 L9 4 Z" fill="#67e8f9" /></marker></defs>
      <g fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        <path d="M72 150 H190 M255 150 H330 M530 150 H605 M670 150 H794" markerEnd="url(#light-arrow)" />
        <circle cx="58" cy="150" r="30" stroke="#facc15" />
        <line x1="43" y1="135" x2="73" y2="165" stroke="#facc15" />
        <rect x="190" y="88" width="65" height="124" rx="8" />
        <rect x="330" y="78" width="200" height="144" rx="22" />
        <rect x="605" y="88" width="65" height="124" rx="8" />
        <rect x="794" y="118" width="36" height="64" rx="5" />
      </g>
      <g strokeWidth="4">
        <line x1="207" y1="185" x2="238" y2="115" stroke="#67e8f9" />
        <line x1="622" y1="177" x2="653" y2="123" stroke="#c4b5fd" />
        <line x1="292" y1="123" x2="292" y2="177" stroke="#67e8f9" />
        <line x1="570" y1="114" x2="570" y2="186" stroke="#c4b5fd" />
      </g>
      <path d="M287 72 Q430 24 572 70" fill="none" stroke="#c4b5fd" strokeWidth="3" markerEnd="url(#light-arrow)" />
      <g fontSize="16" fontWeight="600">
        <text x="22" y="105">monochromatic</text><text x="31" y="126">source</text>
        <text x="180" y="242">polariser</text><text x="190" y="264" fill="#67e8f9">PPL axis</text>
        <text x="374" y="148">optically active</text><text x="393" y="170">sample tube</text><text x="374" y="196" fill="#94a3b8">length l (dm)</text>
        <text x="595" y="242">analyser</text><text x="596" y="264" fill="#c4b5fd">rotated axis</text>
        <text x="778" y="105">detector</text>
        <text x="430" y="38" textAnchor="middle" fill="#c4b5fd">observed rotation αobs</text>
      </g>
    </svg>
  );
}

/** Source diagram: light through a movable prism sorts into a dark-field zone
 *  and two bright-field zones — the origin of the α = θ or π−θ ambiguity. */
function ProbePrismZones() {
  return (
    <svg fill="currentColor" viewBox="0 0 640 260" className="min-w-[560px] w-full text-slate-100" role="img" aria-label="Compound tested through a movable prism into dark field and two bright field zones">
      <defs><marker id="pz-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L0 8 L8 4 Z" fill="currentColor" /></marker></defs>
      <rect x="20" y="95" width="120" height="55" rx="8" fill="none" stroke="#86efac" strokeWidth="2.5" />
      <text x="80" y="118" textAnchor="middle" fontSize="15" fontWeight="700">Compound</text>
      <text x="80" y="136" textAnchor="middle" fontSize="15" fontWeight="700">P</text>
      <line x1="140" y1="122" x2="230" y2="122" stroke="currentColor" strokeWidth="3" markerEnd="url(#pz-arrow)" />
      <path d="M255 60 L340 60 L340 185 L255 185 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" />
      <text x="297" y="128" textAnchor="middle" fontSize="14">movable</text>
      <text x="297" y="146" textAnchor="middle" fontSize="14">prism</text>
      {[{ y: 78, label: "Dark Field zone", colour: "#f472b6" }, { y: 122, label: "Bright Field zone (I)", colour: "#67e8f9" }, { y: 166, label: "Bright Field zone (II)", colour: "#67e8f9" }].map((row) => (
        <g key={row.label}>
          <line x1="340" y1="122" x2="450" y2={row.y} stroke={row.colour} strokeWidth="2.5" markerEnd="url(#pz-arrow)" />
          <text x="460" y={row.y + 5} fontSize="14" fill={row.colour}>{row.label}</text>
        </g>
      ))}
    </svg>
  );
}

/** Fresnel's Fig. 2.20: plane-polarised light as the resultant of two
 *  opposite circular components — equal speed (a) vs one retarded (b, c). */
function FresnelCircularComponents() {
  const disc = (cx: number, retarded: "none" | "laevo" | "dextro", label: string, note: string) => (
    <g key={label} transform={`translate(${cx} 0)`}>
      <circle cx="0" cy="0" r="55" fill="none" stroke="currentColor" strokeWidth="2" />
      {[0, 120, 240].map((a) => {
        const r = (a * Math.PI) / 180;
        return <line key={a} x1="0" y1="0" x2={Math.cos(r) * 48} y2={Math.sin(r) * 48} stroke="currentColor" strokeWidth="2" markerEnd="url(#fc-arrow)" />;
      })}
      <path d={retarded === "dextro" ? "M -55 -14 A 55 55 0 0 1 -38 -40" : "M 55 -14 A 55 55 0 0 0 38 -40"} fill="none" stroke={retarded === "none" ? "transparent" : "#facc15"} strokeWidth="2.5" markerEnd="url(#fc-arrow-y)" />
      <path d="M -55 14 A 55 55 0 0 0 -38 40" fill="none" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#fc-arrow-c)" />
      <path d="M 55 14 A 55 55 0 0 1 38 40" fill="none" stroke="#c4b5fd" strokeWidth="2" markerEnd="url(#fc-arrow-v)" />
      <text x="0" y="88" textAnchor="middle" fontSize="16" fontWeight="700">{label}</text>
      <text x="0" y="106" textAnchor="middle" fontSize="12.5" fill="#94a3b8">{note}</text>
    </g>
  );
  return (
    <svg fill="currentColor" viewBox="-90 -80 720 220" className="min-w-[600px] w-full text-slate-100" role="img" aria-label="Fresnel circular component diagram equal speed versus retarded component">
      <defs>
        <marker id="fc-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L0 7 L7 3.5 Z" fill="currentColor" /></marker>
        <marker id="fc-arrow-y" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L0 7 L7 3.5 Z" fill="#facc15" /></marker>
        <marker id="fc-arrow-c" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L0 7 L7 3.5 Z" fill="#67e8f9" /></marker>
        <marker id="fc-arrow-v" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L0 7 L7 3.5 Z" fill="#c4b5fd" /></marker>
      </defs>
      {disc(0, "none", "(a)", "equal velocities → no net rotation")}
      {disc(270, "dextro", "(b)", "lævo component retarded → rotates right")}
      {disc(540, "laevo", "(c)", "dextro component retarded → rotates left")}
    </svg>
  );
}

/** Fresnel's Fig. 2.21: alternating dextro/lævo quartz prisms split a beam
 *  into two oppositely circularly polarised beams L and D. */
function QuartzPrismSplit() {
  return (
    <svg fill="currentColor" viewBox="0 0 420 200" className="min-w-[360px] w-full text-slate-100" role="img" aria-label="Beam of plane polarised light through alternating dextro and laevo quartz prisms splitting into L and D beams">
      <rect x="70" y="40" width="230" height="120" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M70 40 L185 100 L70 160" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M300 40 L185 100 L300 160" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="10" y1="100" x2="70" y2="100" stroke="currentColor" strokeWidth="3" markerEnd="url(#qp-arrow)" />
      <defs><marker id="qp-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L0 8 L8 4 Z" fill="currentColor" /></marker></defs>
      <line x1="185" y1="100" x2="360" y2="45" stroke="#67e8f9" strokeWidth="2.2" markerEnd="url(#qp-arrow)" />
      <line x1="185" y1="100" x2="360" y2="155" stroke="#c4b5fd" strokeWidth="2.2" markerEnd="url(#qp-arrow)" />
      <text x="140" y="70" fontSize="20" fontWeight="700">L</text>
      <text x="250" y="70" fontSize="20" fontWeight="700">L</text>
      <text x="185" y="140" textAnchor="middle" fontSize="20" fontWeight="700">D</text>
      <text x="368" y="42" fontSize="14" fill="#67e8f9">lævorotatory beam</text>
      <text x="368" y="168" fontSize="14" fill="#c4b5fd">dextrorotatory beam</text>
    </svg>
  );
}

/** Fresnel's Fig. 2.22: molecule Ca₂bd with a plane of symmetry — molecule I
 *  and mirror image II give equal and opposite rotation → statistical zero. */
function Ca2bdMirrorPair() {
  const tetra = (cx: number, mirrored: boolean) => (
    <g key={cx} transform={`translate(${cx} 0)`}>
      <path d={mirrored ? "M 0 -55 L -55 20 L 0 45 L 55 20 Z" : "M 0 -55 L -55 20 L 0 45 L 55 20 Z"} fill="none" stroke="currentColor" strokeWidth="2.2" />
      <line x1="0" y1="-55" x2="0" y2="45" stroke="currentColor" strokeWidth="1.6" strokeDasharray="4 4" />
      <text x="0" y="-64" textAnchor="middle" fontSize="16">b</text>
      <text x={mirrored ? 66 : -66} y="24" textAnchor="middle" fontSize="16">{mirrored ? "d" : "a"}</text>
      <text x={mirrored ? -66 : 66} y="24" textAnchor="middle" fontSize="16">{mirrored ? "a" : "d"}</text>
      <text x="0" y="66" textAnchor="middle" fontSize="16">a</text>
    </g>
  );
  return (
    <svg fill="currentColor" viewBox="-90 -90 440 200" className="min-w-[380px] w-full text-slate-100" role="img" aria-label="Molecule Ca2bd and its mirror image with a shared plane of symmetry">
      {tetra(0, false)}
      <line x1="130" y1="-80" x2="130" y2="90" stroke="#c4b5fd" strokeWidth="2" strokeDasharray="6 5" />
      {tetra(260, true)}
      <text x="0" y="95" textAnchor="middle" fontSize="14" fill="#94a3b8">I</text>
      <text x="260" y="95" textAnchor="middle" fontSize="14" fill="#94a3b8">II</text>
    </svg>
  );
}

const H = "H";
/** Fresnel's Fig. 2.23: mesotartaric acid — staggered (centre of symmetry,
 *  individually inactive), eclipsed plane-diagram (σ plane, external
 *  compensation) and an asymmetric conformer (no symmetry element). */
function MesotartaricConformers() {
  const col = (cx: number, top: [string, string], bottom: [string, string], label: string, note: string) => (
    <g key={cx} transform={`translate(${cx} 0)`}>
      <line x1="0" y1="15" x2="0" y2="205" stroke="currentColor" strokeWidth="3" />
      <line x1="-55" y1="85" x2="55" y2="85" stroke="currentColor" strokeWidth="3" />
      <line x1="-55" y1="140" x2="55" y2="140" stroke="currentColor" strokeWidth="3" />
      <text x="0" y="5" textAnchor="middle" fontSize="14">CO₂H</text>
      <text x="0" y="228" textAnchor="middle" fontSize="14">CO₂H</text>
      <text x="-70" y="90" textAnchor="end" fontSize="14">{top[0]}</text>
      <text x="70" y="90" fontSize="14">{top[1]}</text>
      <text x="-70" y="145" textAnchor="end" fontSize="14">{bottom[0]}</text>
      <text x="70" y="145" fontSize="14">{bottom[1]}</text>
      <text x="0" y="252" textAnchor="middle" fontSize="14" fontWeight="700" fill="#67e8f9">{label}</text>
      <text x="0" y="270" textAnchor="middle" fontSize="11.5" fill="#94a3b8">{note}</text>
    </g>
  );
  return (
    <svg fill="currentColor" viewBox="-80 -20 620 300" className="min-w-[560px] w-full text-slate-100" role="img" aria-label="Mesotartaric acid staggered eclipsed and asymmetric conformers">
      {col(0, [H, "OH"], ["OH", H], "(a) staggered", "centre i · individually inactive")}
      {col(220, [H, "OH"], [H, "OH"], "(b) eclipsed", "σ plane · external compensation")}
      {col(440, [H, "OH"], ["OH", H], "(c) skewed", "no symmetry · would rotate if isolated")}
    </svg>
  );
}

const POS_LETTERS: [string, boolean][] = [
  ["A", true], ["B", true], ["C", true], ["D", true], ["E", true],
  ["F", false], ["G", false], ["H", true], ["I", true], ["J", false],
  ["K", true], ["L", false], ["M", true], ["N", false], ["O", true],
  ["P", false], ["Q", false], ["R", false], ["S", false], ["T", true],
  ["U", true], ["V", true], ["W", true], ["X", true], ["Y", true], ["Z", false],
];

export default function IsomerismPart11() {
  return (
    <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12">
      <article className="mx-auto max-w-6xl">
        <Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link>
        <header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Optical Isomerism source · pages 1–14 · Part 11</p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">Optical activity and polarimetry</h1>
        </header>

        <section className="mt-7 space-y-6">
          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Plane-polarised light and rotation</h2>
            <p className="mt-3 text-sm leading-7 text-slate-200">Compounds which can rotate plane-polarised light (PPL), either clockwise or anticlockwise, are optically active compounds; this property is called optical activity. Optical isomers have:</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6 text-slate-300">
              <li>the same structural formula,</li>
              <li>a different arrangement of atoms/groups in 3D,</li>
              <li>non-interconvertible structures, and</li>
              <li>different interaction with PPL.</li>
            </ol>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><Polarimeter /></div>
            <p className="mt-3 text-sm text-slate-300">The compound which rotates PPL in the clockwise direction is called dextrorotatory, the d-isomer or (+)-isomer. The compound which rotates PPL anticlockwise is called lævorotatory, the l-isomer or (−)-isomer.</p>
            <aside className="mt-3 rounded-xl border border-amber-300/25 bg-amber-300/[.07] p-4 text-sm text-amber-50"><b>Critical distinction:</b> (+)/(−) is measured rotation; it is not predicted by R/S or D/L configuration.</aside>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Requirements of the experiment</h2>
            <ol className="list-decimal space-y-3 pl-5 text-sm leading-6 text-slate-300">
              <li><b className="text-white">Monochromatic light</b> — usually the sodium D line (589 nm) so that wavelength is held constant.</li>
              <li>
                <b className="text-white">Polariser</b> — works as a permeable membrane, allowing through only the wave of light that lies in the plane of the polariser; the result is a single light wave in a direction and plane parallel to the polariser. The polariser is kept fixed in a particular plane. Materials used as a polariser:
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Nicol prism</li>
                  <li>Calcite (CaCO₃)</li>
                  <li>Tourmaline</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Testing the sample: dark-field and bright-field zones</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">The light coming from the sample compound P is tested through a movable prism, splitting it into a dark-field zone and two bright-field zones.</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><ProbePrismZones /></div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-pink-300/25 bg-pink-300/[.06] p-3 text-sm"><b className="text-pink-200">Dark field zone</b><p className="mt-1 text-slate-300">Implies the plane of light has rotated: α<sub>obs</sub> ≠ 0, so P is optically active. From here P splits into d and l readings.</p></div>
              <div className="rounded-xl border border-cyan-300/25 bg-cyan-300/[.06] p-3 text-sm"><b className="text-cyan-200">Bright field zone (I)</b><p className="mt-1 text-slate-300">α<sub>obs</sub> = 0 ⟹ P is optically inactive.</p></div>
              <div className="rounded-xl border border-cyan-300/25 bg-cyan-300/[.06] p-3 text-sm"><b className="text-cyan-200">Bright field zone (II)</b><p className="mt-1 text-slate-300">α<sub>obs</sub> = nπ ⟹ P is optically active, but indistinguishable from zero by this reading alone.</p></div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">The value of α is obtained by rotating the movable prism until a bright-field zone is achieved, but α = θ or π − θ are two possible angles — a single measurement cannot fix the exact angle of rotation. It is impossible to differentiate this reading from the case α<sub>obs</sub> = 0 using a single measurement.</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Observed and specific rotation</h2>
            <p className="text-sm leading-7 text-slate-200">α = optical rotation is the angle between the plane of PPL just before and after interaction with the compound. Observed optical rotation α depends on wavelength, temperature, tube length l, concentration c and solvent.</p>
            <h3 className="mt-4 text-sm font-black uppercase tracking-wide text-slate-300">Factors affecting α</h3>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
              <li><b className="text-white">Wavelength of light</b> — usually λ↓ ⟹ α↑. Most experiments use the sodium D line (589 nm, λ constant). For a compound with low α, a magnesium lamp is used instead.</li>
              <li><b className="text-white">Effect of temperature.</b></li>
              <li><b className="text-white">Length of sample tube</b> — angle of optical rotation ∝ length of tube; length is always taken in decimetres.</li>
              <li><b className="text-white">Concentration</b> — conc↑ ⟹ α↑; concentration must be expressed in g mL⁻¹.</li>
              <li><b className="text-white">Solvent</b> — must be optically as well as chemically inert.</li>
            </ol>
            <div className="mt-4 rounded-xl border border-fuchsia-300/25 bg-fuchsia-300/[.06] p-4">
              <p className="text-sm font-bold text-fuchsia-200">Specific rotation</p>
              <BlockMath math="\\alpha=[\\alpha]_{\\lambda}^{t,c}\\cdot l\\cdot c\\qquad [\\alpha]_{\\lambda}^{t,c}=\\frac{\\alpha}{l\\,c}" />
              <p className="text-sm text-slate-300">Specific rotation depends on temperature T and wavelength λ; an inert, optically inactive solvent is required.</p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Worked example: 0.5 M (+)-2-butanol</h2>
            <p className="text-sm leading-6 text-slate-300">Calculate the specific rotation when a 0.5 M solution of (+)-2-butanol is taken in a 10 cm sample tube, with α<sub>obs</sub> = +20°.</p>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
              <li>Length: l = 10 cm = 1 dm.</li>
              <li>C₄H₁₀O, molecular mass 74. Convert 0.5 mol L⁻¹: c = 0.5 × 74 ⁄ 1000 = 37 g ⁄ 1000 mL.</li>
              <li>
                <InlineMath math="[\\alpha]_{\\lambda}^{t,c}=\\dfrac{\\alpha}{l\\,c}=\\dfrac{20}{1\\times \\frac{37}{1000}}=540.5^{\\circ}" />
              </li>
              <li>If tube length is halved with c and T unchanged, α<sub>obs</sub> is halved because α ∝ l: 540.5 = α ⁄ (½ × 37⁄1000) gives α = 10°.</li>
            </ol>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-[#050b16] p-3 text-sm"><b className="text-cyan-200">How to differentiate zero from nπ as α<sub>obs</sub>?</b><p className="mt-1 text-slate-300">By altering the tube length and checking whether the observed angle changes proportionally, or stays unchanged.</p></div>
              <div className="rounded-xl border border-white/10 bg-[#050b16] p-3 text-sm"><b className="text-cyan-200">How to differentiate α<sub>obs</sub> = π from α<sub>obs</sub> = −π?</b><p className="mt-1 text-slate-300">Same method as above — alter the length (or concentration) and track the direction and proportionality of the change.</p></div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Fresnel&apos;s explanation of optical activity (crystals)</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">Fresnel (1822) explained optical activity in crystalline substances such as quartz using the principle that simple harmonic motion along a straight line is the resultant of two opposite circular motions. Plane-polarised light entering along the optic axis resolves into a right-handed (dextro-) and a left-handed (lævo-) circularly polarised beam of the same frequency.</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><FresnelCircularComponents /></div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-300">
              <li>If the two components travel with the same velocity, the resultant beam suffers no rotation (a).</li>
              <li>If the lævocircular component is retarded, the resultant is rotated to the right — toward the faster component (b).</li>
              <li>If the dextrocircular component is retarded, the resultant is rotated to the left (c).</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-300">Fresnel tested this by passing plane-polarised light through alternating dextro- and lævorotatory quartz prisms: two separate beams emerged, each circularly polarised in opposite senses.</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><QuartzPrismSplit /></div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Fresnel&apos;s theory requires that refractive indices for dextro- and lævocircularly polarised light differ for optically active substances; only a small difference gives fairly large rotations. Its weakness is that it does not explain <i>why</i> the two circular components travel at different velocities — though Fresnel (1824) further suggested quartz&apos;s activity arises from a structure built up in right- and left-handed spirals.</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Optical activity in solution: statistical (external) compensation</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">In solution, optical activity is due to the molecules themselves, not crystalline structure. Any crystal — or, by extension, any molecule behaving as an individual crystal — with a plane but not a centre of symmetry rotates PPL, the rotation varying with the direction light travels through it; no rotation occurs when light travels perpendicular or parallel to the plane.</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">Consider molecule Ca₂bd, which has a plane of symmetry: molecule I and its mirror image II are superimposable.</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><Ca2bdMirrorPair /></div>
            <p className="mt-3 text-sm leading-7 text-slate-300">If light through molecule I at angle θ to the plane of symmetry gives rotation +α°, then light through molecule II at the same angle θ gives rotation −α°: the total rotation from I and II is zero. In a solution there are infinitely many randomly-oriented molecules, and statistically every θ for a molecule I is matched by a molecule II at the same θ — so although each individual molecule rotates PPL by an amount depending on θ, the statistical sum of all contributions is zero.</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">When a molecule is <b>not</b> superimposable on its mirror image and only one enantiomorph is present, there is no compensating mirror-image population — hence a net rotation that is <i>not</i> zero, the sum of individual (same-direction) contributions. <b className="text-white">Thus, as a whole, if the molecular structure is asymmetric, the compound will be optically active.</b> A compound composed of molecules with a plane but not a centre of symmetry is, considered as a whole, optically inactive — the net zero rotation being the result of &quot;external compensation&quot;.</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Internal compensation: mesotartaric acid</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">Mesotartaric acid is optically inactive by internal compensation. X-ray studies show the staggered conformation (a) is favoured and has a centre of symmetry, so molecules in this conformation are individually optically inactive. The plane-diagram formula (b) corresponds to the eclipsed form and has a plane of symmetry: individual molecules in this conformation are optically active except when light travels perpendicular or parallel to the plane — net rotation is zero by external compensation. A skewed conformer (c) has no symmetry element at all; if the entire population adopted it there would be a net rotation, but for every such molecule there is (by probability) a mirror-image molecule present too, giving zero by external compensation. Mesotartaric acid&apos;s inactivity is conventionally described as due to <b className="text-white">internal compensation</b>.</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><MesotartaricConformers /></div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Polarised light and the polarimeter (historical note)</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">An ordinary light beam vibrates in all planes perpendicular to its path; passed through certain substances, the transmitted beam vibrates in one plane only — plane-polarised light. Iceland spar (crystalline calcium carbonate) cut as a Nicol prism (William Nicol, 1828) is one way to polarise light; Polaroid, invented by E. H. Land, is a crystalline organic compound embedded in plastic and used in, e.g., sunglasses. Light passes through two polarising samples only if their polarising axes are aligned; if perpendicular, no light passes — the basis of the polarimeter.</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">With the sample tube empty, the analyser is rotated until the field of view is dark (polariser and analyser axes perpendicular). An optically inactive sample changes nothing. An optically active sample rotates the plane of polarisation, letting light through; rotating the analyser clockwise or counter-clockwise restores the dark field, and that angle is α, the observed rotation. Rotating right (clockwise) is dextrorotatory (+); left (counter-clockwise) is lævorotatory (−).</p>
            <aside className="mt-3 rounded-xl border border-amber-300/25 bg-amber-300/[.07] p-4 text-sm text-amber-50">It is not possible to tell from a single measurement whether a rotation is + or −: is a reading +10° really +10° or −350°? One resolution is to increase the sample concentration by 10% — a true +10° reading becomes +11°, while a true −350° reading becomes −385° (i.e. −25° once reduced mod 360°).</aside>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Conditions for optical activity</h2>
            <p className="text-sm leading-7 text-slate-300">To be optically active, a compound must be <b className="text-white">asymmetric</b> or <b className="text-white">dissymmetric</b>.</p>
            <h3 className="mt-3 text-sm font-black uppercase tracking-wide text-slate-300">Types of symmetry</h3>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-300">
              <li>Plane of symmetry — POS</li>
              <li>Axis of symmetry — COS</li>
              <li>Centre of symmetry — AOS</li>
              <li>Alternating axis of symmetry — AAOS</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-300">Several terms connect molecular symmetry, optical activity and chirality; E. L. Eliel summarised these relationships:</p>
            <div className="mt-3 overflow-x-auto rounded-xl border border-white/10">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead className="bg-cyan-500/10 text-cyan-100"><tr><th className="border-b border-white/10 px-3 py-2 font-black">Term</th><th className="border-b border-white/10 px-3 py-2 font-black">Alternating axis of symmetry</th><th className="border-b border-white/10 px-3 py-2 font-black">Simple axis of symmetry</th><th className="border-b border-white/10 px-3 py-2 font-black">Optical activity</th></tr></thead>
                <tbody className="text-slate-300">
                  <tr><td className="border-b border-white/[.06] px-3 py-2">Symmetric</td><td className="border-b border-white/[.06] px-3 py-2">Present</td><td className="border-b border-white/[.06] px-3 py-2">May or may not be present</td><td className="border-b border-white/[.06] px-3 py-2">Inactive</td></tr>
                  <tr><td className="border-b border-white/[.06] px-3 py-2">Dissymmetric</td><td className="border-b border-white/[.06] px-3 py-2">Absent</td><td className="border-b border-white/[.06] px-3 py-2">May or may not be present</td><td className="border-b border-white/[.06] px-3 py-2">Usually active</td></tr>
                  <tr><td className="px-3 py-2">Asymmetric</td><td className="px-3 py-2">Absent</td><td className="px-3 py-2">Absent</td><td className="px-3 py-2">Usually active</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300"><b className="text-white">Chirality</b> — the phenomenon of right-handedness, or non-superimposability of a molecule on its mirror image.</p>
            <p className="mt-2 text-sm leading-7 text-slate-300"><b className="text-white">Chiral (asymmetric) carbon</b> — a carbon atom attached to four different atoms or groups.</p>
            <div className="mt-3 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <svg fill="currentColor" viewBox="0 0 260 130" className="mx-auto h-auto w-64 text-slate-100" role="img" aria-label="Chiral carbon with four different groups a b d e">
                <defs><marker id="cc-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L0 8 L8 4 Z" fill="#c4b5fd" /></marker></defs>
                <g stroke="currentColor" strokeWidth="2.4" fill="none"><line x1="130" y1="65" x2="130" y2="20" /><line x1="130" y1="65" x2="75" y2="105" /><line x1="130" y1="65" x2="150" y2="112" /></g>
                <line x1="130" y1="65" x2="185" y2="88" stroke="#c4b5fd" strokeWidth="2.4" markerEnd="url(#cc-arrow)" />
                <text x="126" y="14" fontSize="15">a</text><text x="60" y="115" fontSize="15">b</text><text x="146" y="128" fontSize="15">e</text><text x="152" y="98" fontSize="15">d</text>
                <text x="192" y="92" fontSize="14" fill="#c4b5fd">Chiral carbon</text>
              </svg>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Compounds having a chiral carbon may or may not be optically active — <b className="text-white">chirality is the essential criterion for optical activity</b>, not merely the presence of a chiral (stereogenic) carbon. Optical activity can also arise from the presence of a <b className="text-white">chiral axis</b> even without any chiral carbon (developed further in Part 13/34).</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Plane of symmetry — the alphabet test</h2>
            <p className="text-sm leading-7 text-slate-300">A plane of symmetry (POS) is an imaginary plane which bisects the molecule into equal halves such that each half is the mirror image of the other. A quick way to build intuition for POS is to check which capital letters possess one:</p>
            <div className="mt-4 grid grid-cols-6 gap-2 sm:grid-cols-9 md:grid-cols-13">
              {POS_LETTERS.map(([letter, hasPOS]) => (
                <div key={letter} className={`flex flex-col items-center rounded-lg border p-2 text-center ${hasPOS ? "border-cyan-300/30 bg-cyan-300/[.06]" : "border-white/10 bg-white/[.02]"}`}>
                  <span className="text-lg font-black">{letter}</span>
                  <span className={`mt-1 text-[10px] font-bold ${hasPOS ? "text-cyan-300" : "text-slate-500"}`}>{hasPOS ? "POS" : "—"}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">A, B, C, D, E, H, I, K, M, O, T, U, V, W, X, Y possess a plane of symmetry; F, G, J, L, N, P, Q, R, S, Z do not. The full formal treatment of plane of symmetry, rotational axes Cₙ, improper axes Sₙ and the centre of inversion continues in Part 12.</p>
          </section>
        </section>

        <nav className="mt-8 flex justify-between border-t border-white/10 pt-6">
          <Link href="/learn/isomerism/10" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← 10</Link>
          <Link href="/learn/isomerism/12" className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">12 →</Link>
        </nav>
      </article>
    </main>
  );
}
