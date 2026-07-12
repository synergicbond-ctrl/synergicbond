import type { ReactNode, SVGProps } from "react";

type VisualProps = SVGProps<SVGSVGElement> & { title: string; description: string; children: ReactNode };

export function ScientificVisual({ title, description, children, style, ...props }: VisualProps) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const designWidth = Number(String(props.viewBox ?? "0 0 760 400").split(/\s+/)[2]) || 760;
  const sizing = { maxWidth: `${Math.min(Math.max(Math.round(designWidth * 1.02), 320), 780)}px`, flex: "1 1 300px", margin: "0 auto", filter: "saturate(1.3) brightness(1.06) drop-shadow(0 0 7px rgba(103,232,249,.16))", ...style };
  return <svg role="img" aria-labelledby={`${id}-title ${id}-desc`} style={sizing} {...props}>
    <title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{description}</desc>{children}
  </svg>;
}

const LOBE_DEFS = <defs>
  <radialGradient id="lgCyan" cx="35%" cy="30%" r="85%"><stop offset="0%" stopColor="#f0fdff" stopOpacity=".95" /><stop offset="45%" stopColor="#5eead4" stopOpacity=".8" /><stop offset="100%" stopColor="#0e7490" stopOpacity=".78" /></radialGradient>
  <radialGradient id="lgPink" cx="35%" cy="30%" r="85%"><stop offset="0%" stopColor="#fdf2f8" stopOpacity=".95" /><stop offset="45%" stopColor="#f472b6" stopOpacity=".8" /><stop offset="100%" stopColor="#9d174d" stopOpacity=".8" /></radialGradient>
  <radialGradient id="lgGreen" cx="35%" cy="30%" r="85%"><stop offset="0%" stopColor="#f0fdf4" stopOpacity=".95" /><stop offset="45%" stopColor="#4ade80" stopOpacity=".8" /><stop offset="100%" stopColor="#166534" stopOpacity=".8" /></radialGradient>
  <radialGradient id="lgWhite" cx="35%" cy="30%" r="85%"><stop offset="0%" stopColor="#ffffff" stopOpacity=".92" /><stop offset="55%" stopColor="#e2e8f0" stopOpacity=".6" /><stop offset="100%" stopColor="#64748b" stopOpacity=".5" /></radialGradient>
  <filter id="lobeGlow" x="-45%" y="-45%" width="190%" height="190%"><feGaussianBlur stdDeviation="2.6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
</defs>;

function OrbitalLabel({ x, y, shell, sub }: { x: number; y: number; shell: string; sub: string }) {
  return <text x={x} y={y} textAnchor="middle" fill="#f1f5f9" fontSize="16" fontWeight="700">{shell}<tspan dy="5" fontSize="12" fill="#cbd5e1">{sub}</tspan></text>;
}

export function HighAngularOrbitalVisual({ n, l, family, labels, radialNodes }: { n: number; l: number; family: string; labels: string[]; radialNodes: number }) {
  const cols = Math.min(labels.length, 4);
  const width = 168 * cols;
  const rows = Math.ceil(labels.length / cols);
  return <ScientificVisual title={`${n}${family} orbital family map`} description={`A labelled family map of ${labels.length} ${n}${family} orbitals. Each tile represents one real angular form rather than an electron path. The central axis marks the angular structure; ${radialNodes} radial node ${radialNodes === 1 ? "shell is" : "shells are"} shown schematically.`} viewBox={`0 0 ${width} ${rows * 135 + 34}`} className="h-auto w-full">
    <text x="12" y="20" fill="#bae6fd" fontSize="13">l = {l}; number of orbitals = 2l + 1 = {2 * l + 1}; radial nodes = n − l − 1 = {radialNodes}</text>
    {labels.map((label, index) => {
      const x = (index % cols) * 168 + 84; const y = Math.floor(index / cols) * 135 + 82;
      const petals = Math.min(10, 2 + (index % 5) * 2);
      return <g key={label}>
        {Array.from({ length: petals }, (_, p) => { const a = (p / petals) * Math.PI * 2; return <ellipse key={p} cx={x + Math.cos(a) * 22} cy={y + Math.sin(a) * 22} rx="18" ry="9" transform={`rotate(${a * 180 / Math.PI} ${x + Math.cos(a) * 22} ${y + Math.sin(a) * 22})`} fill={p % 2 ? "#f8fafc" : "#a78bfa"} fillOpacity=".82" />; })}
        {Array.from({ length: radialNodes }, (_, r) => <circle key={r} cx={x} cy={y} r={12 + r * 8} fill="none" stroke="#67e8f9" strokeWidth="1" strokeDasharray="3 3" />)}
        <path d={`M${x - 39} ${y}H${x + 39}M${x} ${y - 39}V${y + 39}`} stroke="#64748b" strokeWidth="1" />
        <text x={x} y={y + 56} textAnchor="middle" fill="#e2e8f0" fontSize="12">angular form {index + 1}</text>
      </g>;
    })}
  </ScientificVisual>;
}

export function HybridAngleVisual({ kind, angle, bonds }: { kind: string; angle: string; bonds: number }) {
  const center = 150; const radius = 92;
  return <ScientificVisual title={`${kind} hybrid-bond geometry`} description={`${bonds} equivalent ${kind} hybrid directions originating at one atom. Adjacent directions have an angle of ${angle}. This is a directional geometry diagram, not an orbital boundary-surface drawing.`} viewBox="0 0 500 290" className="h-auto w-full">
    <defs><marker id={`hybrid-${kind}`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3z" fill="#67e8f9" /></marker></defs>
    <circle cx={center} cy={center} r="15" fill="#fbbf24" /><text x={center} y={center + 5} textAnchor="middle" fill="#0f172a" fontSize="12">C</text>
    {Array.from({ length: bonds }, (_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / bonds; const x = center + radius * Math.cos(a); const y = center + radius * Math.sin(a); return <g key={i}><path d={`M${center} ${center}L${x} ${y}`} stroke="#67e8f9" strokeWidth="4" markerEnd={`url(#hybrid-${kind})`} /><text x={center + (radius + 30) * Math.cos(a)} y={center + (radius + 30) * Math.sin(a) + 5} textAnchor="middle" fill="#e2e8f0" fontSize="14">bond {i + 1}</text></g>; })}
    <text x="295" y="112" fill="#fde68a" fontSize="17">adjacent angle = {angle}</text><text x="295" y="143" fill="#94a3b8" fontSize="13">equivalent hybrids are mutually orthogonal</text>
  </ScientificVisual>;
}

export function MoseleySeriesVisual() {
  const levels: Array<[number, number]> = [[1, 240], [2, 155], [3, 95], [4, 50]];
  const kSeries: Array<[number, number, number, string]> = [[190, 155, 240, "Kα"], [250, 95, 240, "Kβ"], [310, 50, 240, "Kγ"]];
  const otherSeries: Array<[number, number, number, string]> = [[365, 95, 155, "Lα"], [405, 50, 155, "Lβ"], [445, 50, 95, "Mα"]];
  return <ScientificVisual title="Characteristic X-ray series" description="Energy-level diagram with transitions ending at n equals one labelled K alpha, K beta and K gamma; transitions ending at n equals two labelled L alpha and L beta; and a transition ending at n equals three labelled M alpha. The K alpha transition runs from n equals two to n equals one." viewBox="0 0 520 300" className="h-auto w-full">
    {levels.map(([n,y]) => <g key={n}><path d={`M105 ${y}H440`} stroke="#94a3b8" strokeWidth="2"/><text x="62" y={y + 5} fill="#e2e8f0" fontSize="15">n = {n}</text></g>)}
    <defs><marker id="moseley-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3z" fill="#facc15"/></marker></defs>
    {kSeries.map(([x,y1,y2,label]) => <g key={label}><path d={`M${x} ${y1}V${y2 + 6}`} stroke="#facc15" strokeWidth="2.5" markerEnd="url(#moseley-arrow)"/><text x={x+8} y={(y1+y2)/2} fill="#fde68a" fontSize="13">{label}</text></g>)}
    {otherSeries.map(([x,y1,y2,label]) => <g key={label}><path d={`M${x} ${y1}V${y2 + 6}`} stroke="#67e8f9" strokeWidth="2" markerEnd="url(#moseley-arrow)"/><text x={x-25} y={(y1+y2)/2} fill="#a5f3fc" fontSize="13">{label}</text></g>)}
    <text x="20" y="286" fill="#94a3b8" fontSize="13">arrows show emission transitions; the K series terminates at n = 1</text>
  </ScientificVisual>;
}

export function WavePacketVisual() {
  const packet = Array.from({ length: 181 }, (_, i) => { const x = 45 + i * 2.3; const u = (x - 252) / 82; const y = 142 - 60 * Math.exp(-u * u) * Math.cos((x - 252) / 9); return `${x.toFixed(1)},${y.toFixed(1)}`; }).join(" ");
  const envelope = (sign: 1 | -1) => Array.from({ length: 181 }, (_, i) => { const x = 45 + i * 2.3; const u = (x - 252) / 82; return `${x.toFixed(1)},${(142 + sign * 60 * Math.exp(-u * u)).toFixed(1)}`; }).join(" ");
  return <ScientificVisual title="Localised matter-wave packet" description="A localised oscillatory wave packet against position x. A carrier oscillation lies inside a Gaussian envelope, illustrating why a single sinusoid is not localised." viewBox="0 0 520 260" className="h-auto w-full"><path d="M45 142H475M45 35V225" stroke="#94a3b8" strokeWidth="2"/><text x="465" y="163" fill="#e2e8f0" fontSize="14">x</text><text x="15" y="43" fill="#e2e8f0" fontSize="14">ψ</text><polyline points={envelope(1)} fill="none" stroke="#f472b6" strokeWidth="1.6" strokeDasharray="5 5"/><polyline points={envelope(-1)} fill="none" stroke="#f472b6" strokeWidth="1.6" strokeDasharray="5 5"/><polyline points={packet} fill="none" stroke="#67e8f9" strokeWidth="2.4"/><text x="270" y="45" fill="#f9a8d4" fontSize="13">envelope</text><text x="58" y="246" fill="#94a3b8" fontSize="13">a superposition can be localised; a single sinusoid extends indefinitely</text></ScientificVisual>;
}

export function GoldFoilVisual() {
  return <ScientificVisual title="Rutherford gold-foil scattering" description="Alpha particles from a source strike thin gold foil. Most continue forward, some deflect, and a very small number scatter backward." viewBox="0 0 760 260" className="h-auto w-full">
    <defs><marker id="alpha-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#67e8f9" /></marker></defs>
    <path d="M55 130H350" stroke="#67e8f9" strokeWidth="3" markerEnd="url(#alpha-arrow)" /><circle cx="65" cy="130" r="24" fill="#fb7185" /><text x="53" y="137" fill="white" fontSize="22">α</text>
    <path d="M390 45V215" stroke="#fbbf24" strokeWidth="11" /><text x="365" y="32" fill="#fde68a" fontSize="18">gold foil</text>
    <path d="M405 130H680M405 130Q560 76 680 65M405 130Q565 190 680 202M405 130Q515 240 580 238" fill="none" stroke="#a5f3fc" strokeWidth="3" markerEnd="url(#alpha-arrow)" />
    <circle cx="690" cy="130" r="46" fill="none" stroke="#cbd5e1" strokeWidth="4" /><text x="646" y="195" fill="#cbd5e1" fontSize="16">detector</text>
  </ScientificVisual>;
}

export function CathodeRayTubeVisual() {
  return <ScientificVisual title="Cathode-ray discharge tube" description="A low-pressure gas discharge tube with a negative cathode on the left, a positive anode on the right, and an electron beam travelling to a zinc-sulphide fluorescent screen." viewBox="0 0 700 250" className="h-auto w-full"><defs><marker id="crt-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#67e8f9" /></marker></defs><rect x="95" y="65" width="500" height="105" rx="52" fill="none" stroke="#94a3b8" strokeWidth="3"/><path d="M330 65V38M348 65V38M339 36V16M334 22l5 -7l5 7" fill="none" stroke="#cbd5e1" strokeWidth="2.4"/><text x="356" y="26" fill="#cbd5e1" fontSize="13">to vacuum pump</text><path d="M65 118H120M580 118H640M65 118V205H320M640 118V205H392M320 196v18M332 201v8M344 196v18M356 201v8M368 196v18M380 201v8M392 196v18" fill="none" stroke="#cbd5e1" strokeWidth="2.2"/><text x="300" y="238" fill="#cbd5e1" fontSize="13">high voltage</text><path d="M165 86V150M510 86V150" stroke="#facc15" strokeWidth="7"/><text x="144" y="78" fill="#fde68a" fontSize="15">cathode (−)</text><text x="480" y="78" fill="#fde68a" fontSize="15">anode (+)</text><path d="M185 118H475" stroke="#67e8f9" strokeWidth="3" strokeDasharray="8 6" markerEnd="url(#crt-arrow)"/><text x="285" y="106" fill="#a5f3fc" fontSize="15">cathode rays (e⁻)</text><rect x="530" y="84" width="12" height="68" fill="#a78bfa"/><text x="504" y="198" fill="#c4b5fd" fontSize="14">ZnS screen</text><text x="230" y="230" fill="#94a3b8" fontSize="13">low pressure gas · high potential difference</text></ScientificVisual>;
}

export function MillikanOilDropVisual() {
  return <ScientificVisual title="Millikan oil-drop apparatus" description="A fine oil spray enters a chamber between horizontal charged plates. The electric field is adjusted so an individual charged droplet can be balanced and observed through a microscope." viewBox="0 0 600 300" className="h-auto w-full"><defs><marker id="oil-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#67e8f9" /></marker></defs><path d="M130 80H470M130 220H470" stroke="#facc15" strokeWidth="10"/><text x="110" y="62" fill="#fde68a" fontSize="14">upper plate (+)</text><text x="110" y="252" fill="#fde68a" fontSize="14">lower plate (−)</text><path d="M300 95V195" stroke="#67e8f9" strokeWidth="2.5" markerEnd="url(#oil-arrow)"/><text x="315" y="150" fill="#a5f3fc" fontSize="14">E</text><circle cx="300" cy="160" r="10" fill="#f472b6"/><text x="316" y="170" fill="#f9a8d4" fontSize="14">charged oil drop</text><path d="M300 148V110" stroke="#e2e8f0" strokeWidth="2" markerEnd="url(#oil-arrow)"/><text x="335" y="120" fill="#e2e8f0" fontSize="14">electric force</text><path d="M300 172V205" stroke="#e2e8f0" strokeWidth="2" markerEnd="url(#oil-arrow)"/><text x="335" y="204" fill="#e2e8f0" fontSize="14">weight</text><path d="M40 35L180 110" stroke="#c4b5fd" strokeWidth="6"/><text x="18" y="24" fill="#c4b5fd" fontSize="14">oil atomiser</text><path d="M470 130H550" stroke="#94a3b8" strokeWidth="4"/><text x="474" y="118" fill="#cbd5e1" fontSize="14">microscope</text></ScientificVisual>;
}

export function ThomsonModelVisual() {
  return <ScientificVisual title="Thomson atomic model" description="Conceptual Thomson model: electrons are embedded in a uniformly distributed positive sphere. It is a historical model, not a modern atomic description." viewBox="0 0 340 270" className="mx-auto h-auto w-full max-w-sm"><circle cx="170" cy="130" r="95" fill="#fb7185" opacity=".28" stroke="#fb7185" strokeWidth="3"/><text x="122" y="28" fill="#f9a8d4" fontSize="14">diffuse positive charge</text>{[[120,85],[175,75],[225,105],[105,145],[165,130],[220,165],[145,185]].map(([x,y])=><g key={`${x}-${y}`}><circle cx={x} cy={y} r="15" fill="#67e8f9"/><text x={x-5} y={y+6} fill="#082f49" fontSize="19" fontWeight="700">−</text></g>)}<text x="46" y="250" fill="#94a3b8" fontSize="13">historical model: electrons embedded in a positive sphere</text></ScientificVisual>;
}

export function ClosestApproachVisual() {
  return <ScientificVisual title="Head-on closest approach" description="A positively charged alpha particle approaches a positive nucleus head-on. As separation decreases, its kinetic energy is converted to electrostatic potential energy; at the closest approach its instantaneous speed is zero." viewBox="0 0 640 250" className="h-auto w-full"><defs><marker id="ca-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#67e8f9" /></marker></defs><circle cx="500" cy="125" r="35" fill="#fb7185"/><text x="488" y="132" fill="#fff" fontSize="18">+Ze</text><circle cx="120" cy="125" r="20" fill="#facc15"/><text x="109" y="131" fill="#111827" fontSize="15">+2e</text><path d="M155 125H400" stroke="#67e8f9" strokeWidth="3" markerEnd="url(#ca-arrow)"/><text x="205" y="107" fill="#a5f3fc" fontSize="14">incoming α particle (KE)</text><path d="M420 86V164" stroke="#c4b5fd" strokeWidth="2" strokeDasharray="5 5"/><text x="370" y="185" fill="#c4b5fd" fontSize="14">r at closest approach</text><text x="65" y="230" fill="#94a3b8" fontSize="13">at closest approach: KE = 0 and initial KE = electrostatic PE</text></ScientificVisual>;
}

export function ElectromagneticSpectrumVisual() {
  const bands = [["Radio", "#6366f1"], ["Microwave", "#0ea5e9"], ["Infrared", "#ef4444"], ["Visible", "#facc15"], ["UV", "#a855f7"], ["X-ray", "#38bdf8"], ["γ", "#f8fafc"]];
  return <ScientificVisual title="Electromagnetic spectrum" description="The electromagnetic spectrum arranged from long wavelength and low frequency radio waves to short wavelength and high frequency gamma rays." viewBox="0 0 760 150" className="h-auto w-full">
    <text x="24" y="24" fill="#cbd5e1" fontSize="16">long wavelength · low frequency</text><text x="490" y="24" fill="#cbd5e1" fontSize="16">short wavelength · high frequency</text>
    {bands.map(([label, colour], index) => <g key={label}><rect x={20 + index * 103} y="48" width="98" height="48" rx="7" fill={colour} opacity=".88" /><text x={25 + index * 103} y="77" fill="#08111f" fontSize="13" fontWeight="700">{label}</text></g>)}
    <path d="M28 122H730" stroke="#67e8f9" strokeWidth="2" /><path d="M730 122l-10-5v10z" fill="#67e8f9" /><text x="270" y="143" fill="#a5f3fc" fontSize="14">frequency and photon energy increase →</text>
  </ScientificVisual>;
}

export function BlackBodyCurvesVisual() {
  const curves = [["3000 K", "#a78bfa", 330, 130], ["4000 K", "#67e8f9", 265, 105], ["5000 K", "#facc15", 210, 85], ["6000 K", "#fb7185", 175, 68]] as const;
  return <ScientificVisual title="Black-body spectral curves" description="Spectral irradiance against wavelength for four temperatures. As temperature rises, the peak becomes higher and moves to shorter wavelength, illustrating Wien's displacement law." viewBox="0 0 500 290" className="h-auto w-full"><path d="M55 25V235H470" fill="none" stroke="#94a3b8" strokeWidth="2"/><text x="8" y="35" fill="#e2e8f0" fontSize="13">spectral irradiance</text><text x="380" y="260" fill="#e2e8f0" fontSize="13">wavelength / nm</text>{curves.map(([label, colour, peak, height]) => <g key={label}><path d={`M56 235 C${peak-130} 235 ${peak-80} ${height} ${peak} ${height} C${peak+60} ${height} ${peak+120} 225 465 235`} fill="none" stroke={colour} strokeWidth="2.5"/><text x={peak+8} y={height-6} fill={colour} fontSize="13">{label}</text></g>)}<text x="64" y="278" fill="#94a3b8" fontSize="12">higher T → higher peak and shorter λmax</text></ScientificVisual>;
}

export function BulbHeatingSequenceVisual() {
  const stages = [
    { label: "warm", temperature: "900 K", glow: "#ef4444", opacity: 0.18 },
    { label: "red hot", temperature: "1400 K", glow: "#fb7185", opacity: 0.32 },
    { label: "orange hot", temperature: "2100 K", glow: "#f59e0b", opacity: 0.5 },
    { label: "white hot", temperature: "2800 K", glow: "#fef3c7", opacity: 0.75 },
  ] as const;
  return <ScientificVisual title="Incandescent filament heating sequence" description="Four schematic incandescent bulbs at progressively higher filament temperatures. As temperature rises, brightness grows and the filament colour shifts from dull red through orange to yellow-white; this is a conceptual black-body illustration, not a calibrated colour-temperature scale." viewBox="0 0 760 270" className="h-auto w-full">
    <defs>{stages.map((stage, index) => <filter id={`bulb-glow-${index}`} key={stage.label} x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation={5 + index * 2} result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>)}</defs>
    {stages.map((stage, index) => { const x = 100 + index * 190; return <g key={stage.label}><circle cx={x} cy="118" r="64" fill={stage.glow} opacity={stage.opacity} filter={`url(#bulb-glow-${index})`} /><path d={`M${x - 35} 72 Q${x} 33 ${x + 35} 72 V139 Q${x + 35} 166 ${x + 16} 180 H${x - 16} Q${x - 35} 166 ${x - 35} 139Z`} fill="#0f1d32" stroke="#cbd5e1" strokeWidth="3" /><path d={`M${x - 25} 94 Q${x} 67 ${x + 25} 94`} fill="none" stroke="#64748b" strokeWidth="2" /><path d={`M${x - 18} 122 C${x - 8} 108 ${x + 8} 136 ${x + 18} 122`} fill="none" stroke={stage.glow} strokeWidth={3 + index} filter={`url(#bulb-glow-${index})`} /><path d={`M${x - 16} 180V202H${x + 16}V180M${x - 25} 210H${x + 25}`} fill="none" stroke="#94a3b8" strokeWidth="3" /><text x={x} y="235" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontWeight="700">{stage.label}</text><text x={x} y="254" textAnchor="middle" fill={stage.glow} fontSize="13">≈ {stage.temperature}</text></g>; })}
    <text x="18" y="24" fill="#bae6fd" fontSize="14">Increasing filament temperature → greater radiance and a shorter peak wavelength</text>
  </ScientificVisual>;
}

export function EMDeflectionVisual() {
  return <ScientificVisual title="Thomson crossed-field electron-beam apparatus" description="A cathode ray passes through parallel electric plates and a perpendicular magnetic field. The three output paths show electric-field-only, balanced crossed-field, and magnetic-field-only conditions. In the balanced condition the beam is undeflected and v equals E divided by B." viewBox="0 0 760 330" className="h-auto w-full">
    <defs><marker id="em-beam-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L0 6L8 3Z" fill="#67e8f9" /></marker><pattern id="magnetic-dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r="4" fill="#a78bfa" /><circle cx="12" cy="12" r="1.6" fill="#08111f" /></pattern></defs>
    <rect x="145" y="65" width="320" height="176" rx="20" fill="url(#magnetic-dots)" opacity=".3" stroke="#a78bfa" strokeWidth="2" /><text x="295" y="90" textAnchor="middle" fill="#c4b5fd" fontSize="14">B out of the page</text>
    <rect x="205" y="111" width="200" height="14" rx="7" fill="#f472b6" /><rect x="205" y="181" width="200" height="14" rx="7" fill="#67e8f9" /><text x="415" y="123" fill="#fda4af" fontSize="14">− plate</text><text x="415" y="194" fill="#a5f3fc" fontSize="14">+ plate</text>
    <path d="M42 153H182" stroke="#67e8f9" strokeWidth="4" markerEnd="url(#em-beam-arrow)" /><circle cx="62" cy="153" r="20" fill="#fb7185" /><text x="50" y="159" fill="#fff" fontSize="18">e⁻</text><text x="28" y="205" fill="#94a3b8" fontSize="13">electron gun</text>
    <path d="M182 153H610" stroke="#67e8f9" strokeWidth="3" markerEnd="url(#em-beam-arrow)" /><path d="M465 153Q540 102 650 78" fill="none" stroke="#facc15" strokeWidth="3" /><path d="M465 153Q540 204 650 228" fill="none" stroke="#f472b6" strokeWidth="3" />
    <text x="540" y="68" fill="#fde68a" fontSize="14">electric field only</text><text x="540" y="161" fill="#a5f3fc" fontSize="14">E and B balanced: eE = evB</text><text x="540" y="252" fill="#f9a8d4" fontSize="14">magnetic field only</text>
    <path d="M205 153V122" stroke="#facc15" strokeWidth="2" markerEnd="url(#em-beam-arrow)" /><text x="180" y="105" fill="#fde68a" fontSize="14">E</text><text x="195" y="293" fill="#cbd5e1" fontSize="15">undeflected beam gives: v = E / B</text>
  </ScientificVisual>;
}

export function ElectronClassicalRadiusVisual() {
  return <ScientificVisual title="Classical electron radius model" description="A conceptual radial-energy diagram for the classical electron radius. The dashed sphere represents an assumed charge distribution, not a physical surface of an electron. A radius vector extends from the centre to the model boundary." viewBox="0 0 560 280" className="h-auto w-full">
    <defs><radialGradient id="electron-radius-glow"><stop stopColor="#f9a8d4" stopOpacity=".9" /><stop offset="1" stopColor="#f472b6" stopOpacity=".12" /></radialGradient><marker id="radius-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L0 6L8 3Z" fill="#facc15" /></marker></defs>
    <circle cx="205" cy="140" r="94" fill="url(#electron-radius-glow)" stroke="#f472b6" strokeWidth="2.5" strokeDasharray="7 6" /><circle cx="205" cy="140" r="13" fill="#67e8f9" /><text x="191" y="146" fill="#082f49" fontSize="15" fontWeight="700">−e</text><path d="M205 140H298" stroke="#facc15" strokeWidth="3" markerEnd="url(#radius-arrow)" /><text x="248" y="127" fill="#fde68a" fontSize="18">rₑ</text><path d="M318 74V204" stroke="#64748b" strokeWidth="1.4" strokeDasharray="5 5" /><text x="335" y="100" fill="#e2e8f0" fontSize="16">classical model boundary</text><text x="335" y="132" fill="#a5f3fc" fontSize="15">rₑ = e²/(4πε₀mₑc²)</text><text x="335" y="160" fill="#a5f3fc" fontSize="15">= 2.818 × 10⁻¹⁵ m</text><text x="22" y="258" fill="#94a3b8" fontSize="13">This is a derived classical scale, not a measured hard-sphere radius.</text>
  </ScientificVisual>;
}

export function AnodeRayTubeVisual() {
  return <ScientificVisual title="Canal-ray discharge tube" description="A perforated cathode discharge tube. Positive ions produced in the gas travel toward the cathode and pass through holes in it, producing a glow on a zinc-sulphide screen behind the cathode. The anode is on the right and the cathode is on the left." viewBox="0 0 760 300" className="h-auto w-full">
    <defs><marker id="canal-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L0 6L8 3Z" fill="#a3e635" /></marker><filter id="zns-glow"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    <rect x="100" y="70" width="560" height="130" rx="65" fill="#0f1d32" stroke="#cbd5e1" strokeWidth="3" /><path d="M65 135H112M650 135H710" stroke="#cbd5e1" strokeWidth="3" /><rect x="188" y="84" width="12" height="102" fill="#f472b6" /><rect x="562" y="84" width="12" height="102" fill="#facc15" /><text x="153" y="57" fill="#fda4af" fontSize="16">perforated cathode (−)</text><text x="520" y="57" fill="#fde68a" fontSize="16">anode (+)</text>
    {[104, 135, 166].map(y => <rect key={y} x="188" y={y - 7} width="12" height="14" fill="#08111f" stroke="#cbd5e1" strokeWidth="1" />)}<path d="M545 105H215M545 135H215M545 165H215" stroke="#a3e635" strokeWidth="3" strokeDasharray="7 6" markerEnd="url(#canal-arrow)" /><text x="325" y="115" fill="#bef264" fontSize="15">positive ions (canal rays)</text><rect x="132" y="86" width="10" height="98" fill="#a78bfa" filter="url(#zns-glow)" /><text x="92" y="228" fill="#c4b5fd" fontSize="15">ZnS screen</text><path d="M200 245V268H574V200" fill="none" stroke="#cbd5e1" strokeWidth="2" /><text x="372" y="289" fill="#e2e8f0" fontSize="16">high-voltage supply</text>
  </ScientificVisual>;
}

export function RutherfordAtomVisual() {
  return <ScientificVisual title="Rutherford nuclear atom model" description="Conceptual comparison of particle paths near a compact positive nucleus. Most alpha particles pass through an atom's mostly empty volume, while a close encounter with the small dense nucleus causes a large deflection." viewBox="0 0 700 280" className="h-auto w-full">
    <defs><marker id="rutherford-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L0 6L8 3Z" fill="#67e8f9" /></marker><radialGradient id="nucleus-glow"><stop stopColor="#fde68a"/><stop offset="1" stopColor="#f43f5e"/></radialGradient></defs>
    <circle cx="390" cy="138" r="98" fill="#67e8f9" fillOpacity=".05" stroke="#64748b" strokeWidth="1.6" strokeDasharray="6 6" /><circle cx="390" cy="138" r="25" fill="url(#nucleus-glow)" /><text x="378" y="144" fill="#111827" fontSize="16" fontWeight="700">+Ze</text><text x="333" y="33" fill="#fde68a" fontSize="15">small, dense nucleus</text>
    <path d="M42 84H355" stroke="#67e8f9" strokeWidth="3" markerEnd="url(#rutherford-arrow)" /><path d="M42 132H348" stroke="#67e8f9" strokeWidth="3" markerEnd="url(#rutherford-arrow)" /><path d="M42 182H300Q345 182 358 216Q370 248 306 248H180" fill="none" stroke="#f472b6" strokeWidth="3" markerEnd="url(#rutherford-arrow)" /><path d="M415 132H650" stroke="#67e8f9" strokeWidth="3" markerEnd="url(#rutherford-arrow)" /><path d="M412 84Q520 48 652 58" fill="none" stroke="#facc15" strokeWidth="3" markerEnd="url(#rutherford-arrow)" /><text x="50" y="65" fill="#a5f3fc" fontSize="15">α-particle beam</text><text x="480" y="115" fill="#a5f3fc" fontSize="14">most: straight through</text><text x="480" y="76" fill="#fde68a" fontSize="14">some: small deflection</text><text x="166" y="235" fill="#f9a8d4" fontSize="14">rare: large-angle return</text><text x="20" y="274" fill="#94a3b8" fontSize="13">not to scale — the atom is mostly empty space; scattering is from Coulomb repulsion near the nucleus</text>
  </ScientificVisual>;
}

export function PlanckComparisonVisual() {
  return <ScientificVisual title="Rayleigh-Jeans and Planck comparison" description="Radiated intensity against frequency. Planck's curve rises then falls at high frequency, whereas the Rayleigh-Jeans prediction diverges upward in the ultraviolet region; they agree at low frequency." viewBox="0 0 500 280" className="h-auto w-full"><path d="M55 25V230H470" fill="none" stroke="#94a3b8" strokeWidth="2"/><text x="10" y="37" fill="#e2e8f0" fontSize="13">radiated intensity</text><text x="414" y="252" fill="#e2e8f0" fontSize="13">frequency ν</text><path d="M55 230C150 230 180 70 275 85S385 185 465 220" fill="none" stroke="#67e8f9" strokeWidth="3"/><path d="M55 230C170 230 260 185 465 28" fill="none" stroke="#f472b6" strokeWidth="3"/><text x="300" y="105" fill="#a5f3fc" fontSize="13">Planck law</text><text x="322" y="50" fill="#f9a8d4" fontSize="13">Rayleigh–Jeans</text><text x="66" y="270" fill="#94a3b8" fontSize="12">agreement at low frequency; classical result diverges at high frequency</text></ScientificVisual>;
}

export function PhotoelectricApparatusVisual() {
  return <ScientificVisual title="Photoelectric-effect apparatus" description="Monochromatic light enters an evacuated tube and strikes the emitter plate. Ejected photoelectrons travel to the collector plate, and the resulting photocurrent is measured by a microammeter in a circuit with a variable potential source." viewBox="0 0 460 290" className="h-auto w-full">
    <defs><marker id="pe-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#facc15" /></marker><marker id="pe-earrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#67e8f9" /></marker></defs>
    <rect x="70" y="55" width="330" height="130" rx="18" fill="none" stroke="#94a3b8" strokeWidth="2.5" /><text x="180" y="47" fill="#94a3b8" fontSize="13">evacuated tube</text>
    <path d="M20 30 L88 88 M42 18 L104 78" stroke="#facc15" strokeWidth="2.5" markerEnd="url(#pe-arrow)" /><text x="8" y="14" fill="#fde68a" fontSize="14">incident light (ν)</text>
    <rect x="96" y="80" width="10" height="86" fill="#fb7185" /><text x="82" y="205" fill="#fda4af" fontSize="14">emitter</text>
    <rect x="356" y="80" width="10" height="86" fill="#67e8f9" /><text x="336" y="205" fill="#a5f3fc" fontSize="14">collector</text>
    <path d="M112 108H340M112 128H340M112 148H340" stroke="#67e8f9" strokeWidth="1.6" strokeDasharray="5 5" markerEnd="url(#pe-earrow)" /><text x="212" y="100" fill="#a5f3fc" fontSize="14">e⁻</text>
    <path d="M101 166V250H196M361 166V250H304" fill="none" stroke="#cbd5e1" strokeWidth="2" />
    <circle cx="222" cy="250" r="17" fill="none" stroke="#cbd5e1" strokeWidth="2" /><text x="214" y="256" fill="#e2e8f0" fontSize="14">μA</text><path d="M239 250h30" stroke="#cbd5e1" strokeWidth="2" />
    <path d="M281 236v28M292 243v14" stroke="#cbd5e1" strokeWidth="3" /><text x="262" y="282" fill="#94a3b8" fontSize="13">variable potential</text>
  </ScientificVisual>;
}

export function KmaxFrequencyGraph() {
  return <ScientificVisual title="Maximum kinetic energy versus frequency" description="Graph of the maximum kinetic energy of photoelectrons against the frequency of incident light. The line is straight with slope equal to Planck's constant, meets the frequency axis at the threshold frequency, and its dashed extrapolation to zero frequency gives minus the work function." viewBox="0 0 420 300" className="h-auto w-full">
    <path d="M50 20V260H400" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <text x="18" y="34" fill="#e2e8f0" fontSize="15">K</text><text x="28" y="39" fill="#e2e8f0" fontSize="11">max</text><text x="386" y="278" fill="#e2e8f0" fontSize="15">ν</text>
    <path d="M150 200L380 40" stroke="#67e8f9" strokeWidth="3" />
    <path d="M150 200L64 259.8" stroke="#67e8f9" strokeWidth="2" strokeDasharray="6 6" opacity=".7" />
    <path d="M50 200h340" stroke="#94a3b8" strokeWidth="1.4" opacity=".5" />
    <circle cx="150" cy="200" r="4" fill="#fbbf24" /><text x="140" y="222" fill="#fde68a" fontSize="15">ν₀</text>
    <text x="255" y="105" fill="#a5f3fc" fontSize="14">slope = h</text>
    <text x="58" y="284" fill="#a5f3fc" fontSize="14">extrapolates to −φ</text>
    <text x="200" y="245" fill="#94a3b8" fontSize="13">no emission for ν &lt; ν₀</text>
  </ScientificVisual>;
}

export function PhotocurrentPotentialGraph() {
  return <ScientificVisual title="Photoelectric current versus collector potential" description="Representative curves of photoelectric current against collector plate potential for three frequencies at the same intensity. Each curve rises from its stopping potential on the retarding side to the same saturation current; a higher frequency gives a more negative stopping potential." viewBox="0 0 460 280" className="h-auto w-full">
    <path d="M230 20V230M40 230H440" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <text x="238" y="34" fill="#e2e8f0" fontSize="15">photocurrent I</text><text x="392" y="252" fill="#e2e8f0" fontSize="14">V (collector)</text><text x="46" y="252" fill="#e2e8f0" fontSize="14">retarding ←</text>
    <path d="M40 90h400" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 6" opacity=".6" /><text x="292" y="82" fill="#cbd5e1" fontSize="13">saturation current</text>
    <path d="M185 230C215 130 260 95 430 90" fill="none" stroke="#f472b6" strokeWidth="2.6" />
    <path d="M155 230C195 125 250 94 430 90" fill="none" stroke="#facc15" strokeWidth="2.6" />
    <path d="M125 230C180 120 245 93 430 90" fill="none" stroke="#67e8f9" strokeWidth="2.6" />
    <text x="168" y="250" fill="#f9a8d4" fontSize="13">−V₀₁</text><text x="138" y="266" fill="#fde68a" fontSize="13">−V₀₂</text><text x="104" y="250" fill="#a5f3fc" fontSize="13">−V₀₃</text>
    <text x="330" y="130" fill="#cbd5e1" fontSize="13">ν₃ &gt; ν₂ &gt; ν₁, same intensity</text>
  </ScientificVisual>;
}

export function StoppingPotentialFrequencyGraph() {
  return <ScientificVisual title="Stopping potential versus frequency for two metals" description="Graph of stopping potential against frequency of incident radiation for two photosensitive metals A and B. Both lines are straight and parallel with slope h over e; metal A starts from its threshold frequency and metal B from a higher threshold frequency." viewBox="0 0 420 260" className="h-auto w-full">
    <path d="M50 20V210H400" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <text x="20" y="34" fill="#e2e8f0" fontSize="15">V₀</text><text x="388" y="230" fill="#e2e8f0" fontSize="15">ν</text>
    <path d="M140 210L390 60" stroke="#67e8f9" strokeWidth="3" /><text x="352" y="52" fill="#a5f3fc" fontSize="14">metal A</text>
    <path d="M200 210L390 96" stroke="#f472b6" strokeWidth="3" /><text x="348" y="120" fill="#f9a8d4" fontSize="14">metal B</text>
    <circle cx="140" cy="210" r="4" fill="#67e8f9" /><text x="130" y="232" fill="#a5f3fc" fontSize="14">ν₀</text>
    <circle cx="200" cy="210" r="4" fill="#f472b6" /><text x="192" y="232" fill="#f9a8d4" fontSize="14">ν₀′</text>
    <text x="216" y="118" fill="#cbd5e1" fontSize="14">slope = h/e</text>
  </ScientificVisual>;
}

export function HydrogenLevelGapsVisual() {
  const levels = [[1, -13.6, 270], [2, -3.4, 97.5], [3, -1.51, 65.5], [4, -0.85, 54.4]] as const;
  return <ScientificVisual title="Hydrogen energy levels" description="Horizontal energy levels of hydrogen drawn to scale from minus 13.6 electron volts at n equals one up to zero at infinity. The gap from n equals one to two is 10.2 electron volts, from two to three 1.89 electron volts, and from three to four 0.66 electron volts, showing that successive gaps shrink rapidly." viewBox="0 0 440 300" className="h-auto w-full">
    {levels.map(([n, E, y]) => <g key={n}><path d={`M90 ${y}H350`} stroke="#67e8f9" strokeWidth="2.4" /><text x="56" y={y + 5} fill="#e2e8f0" fontSize="14">{`n=${n}`}</text><text x="358" y={y + 5} fill="#a5f3fc" fontSize="13">{`${E} eV`}</text></g>)}
    <path d="M90 40H350" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 5" /><text x="58" y="45" fill="#e2e8f0" fontSize="14">∞</text><text x="358" y="45" fill="#94a3b8" fontSize="13">0 eV</text>
    <path d="M220 270V97.5" stroke="#facc15" strokeWidth="2" /><path d="M220 97.5l-5 10h10z" fill="#facc15" /><text x="228" y="190" fill="#fde68a" fontSize="13">10.2 eV</text>
    <text x="120" y="88" fill="#94a3b8" fontSize="12">2→3: 1.89 eV · 3→4: 0.66 eV</text>
    <text x="90" y="292" fill="#94a3b8" fontSize="13">level spacing drawn to scale (E ∝ −1/n²)</text>
  </ScientificVisual>;
}

export function HydrogenSeriesVisual() {
  const levels = [[1, 280], [2, 92.5], [3, 57.8], [4, 45.6], [5, 40], [6, 36.9]] as const;
  const series = [["Lyman (UV)", 1, 110, "#a855f7"], ["Balmer (visible)", 2, 205, "#facc15"], ["Paschen (IR)", 3, 300, "#fb7185"], ["Brackett (IR)", 4, 360, "#f97316"], ["Pfund (IR)", 5, 410, "#ef4444"]] as const;
  const levelY = (n: number) => levels.find(([m]) => m === n)?.[1] ?? 30;
  return <ScientificVisual title="Hydrogen spectral series" description="Energy-level diagram of hydrogen with levels n equals one to six drawn to scale. Downward arrows mark the Lyman series ending on n equals one in the ultraviolet, the Balmer series ending on n equals two in the visible, and the Paschen, Brackett and Pfund series ending on n equals three, four and five in the infrared." viewBox="0 0 460 330" className="h-auto w-full">
    {levels.map(([n, y]) => <g key={n}><path d={`M70 ${y}H440`} stroke="#94a3b8" strokeWidth="1.6" opacity=".8" /><text x="46" y={y + 4} fill="#e2e8f0" fontSize="12">{`n=${n}`}</text></g>)}
    {series.map(([label, nLow, x, colour]) => <g key={label}><path d={`M${x} 33V${levelY(nLow) - 3}`} stroke={colour} strokeWidth="2.4" /><path d={`M${x} ${levelY(nLow) - 3}l-5 -10h10z`} fill={colour} /></g>)}
    <text x="82" y="305" fill="#c4b5fd" fontSize="12">Lyman → n=1 (UV)</text><text x="82" y="322" fill="#fde68a" fontSize="12">Balmer → n=2 (visible)</text>
    <text x="255" y="305" fill="#fda4af" fontSize="12">Paschen → n=3 · Brackett → n=4</text><text x="255" y="322" fill="#fca5a5" fontSize="12">Pfund → n=5 (all IR)</text>
    <text x="70" y="24" fill="#94a3b8" fontSize="12">levels drawn to scale (E ∝ −1/n²); arrows show emission</text>
  </ScientificVisual>;
}

export function EmissionAbsorptionSpectraVisual() {
  const balmer = [410, 434, 486, 656];
  const x = (lambda: number) => 130 + (lambda - 400);
  const stops = [["400", "#7c3aed"], ["440", "#3b82f6"], ["490", "#22d3ee"], ["530", "#22c55e"], ["580", "#facc15"], ["620", "#f97316"], ["700", "#ef4444"]] as const;
  return <ScientificVisual title="Continuous, emission and absorption spectra" description="Three horizontal spectrum strips. The continuous spectrum is an unbroken band of colour. The hydrogen emission spectrum shows bright lines on a dark background at the Balmer wavelengths 410, 434, 486 and 656 nanometres. The absorption spectrum shows dark lines at the same wavelengths on the continuous band." viewBox="0 0 460 250" className="h-auto w-full">
    <defs><linearGradient id="vis-band" x1="0" y1="0" x2="1" y2="0">{stops.map(([nm, colour]) => <stop key={nm} offset={`${((Number(nm) - 400) / 300) * 100}%`} stopColor={colour} />)}</linearGradient></defs>
    <text x="10" y="46" fill="#e2e8f0" fontSize="13">continuous</text><rect x="130" y="30" width="300" height="26" rx="4" fill="url(#vis-band)" />
    <text x="10" y="116" fill="#e2e8f0" fontSize="13">emission</text><rect x="130" y="100" width="300" height="26" rx="4" fill="#0b1220" stroke="#334155" />
    {balmer.map((nm) => <rect key={`e${nm}`} x={x(nm) - 1.5} y="100" width="3" height="26" fill={nm > 600 ? "#ef4444" : nm > 470 ? "#22d3ee" : "#818cf8"} />)}
    <text x="10" y="186" fill="#e2e8f0" fontSize="13">absorption</text><rect x="130" y="170" width="300" height="26" rx="4" fill="url(#vis-band)" />
    {balmer.map((nm) => <rect key={`a${nm}`} x={x(nm) - 1.5} y="170" width="3" height="26" fill="#08111f" />)}
    {balmer.map((nm) => <text key={`l${nm}`} x={x(nm) - 14} y="216" fill="#94a3b8" fontSize="11">{nm}</text>)}
    <text x="130" y="240" fill="#94a3b8" fontSize="12">wavelength / nm → (Balmer lines at their true positions)</text>
  </ScientificVisual>;
}

export function StandingWaveOrbitVisual() {
  const n = 5;
  const points = Array.from({ length: 181 }, (_, i) => {
    const theta = (i / 180) * 2 * Math.PI;
    const radius = 95 + 14 * Math.sin(n * theta);
    return `${(210 + radius * Math.cos(theta)).toFixed(1)},${(140 + radius * Math.sin(theta)).toFixed(1)}`;
  }).join(" ");
  return <ScientificVisual title="de Broglie standing wave on a Bohr orbit" description="A circular Bohr orbit around the nucleus with a standing electron wave of five whole wavelengths fitted around its circumference, so that two pi r equals n lambda." viewBox="0 0 420 280" className="h-auto w-full">
    <circle cx="210" cy="140" r="95" fill="none" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="5 6" />
    <polyline points={points} fill="none" stroke="#67e8f9" strokeWidth="2.4" />
    <circle cx="210" cy="140" r="9" fill="#fb7185" /><text x="204" y="146" fill="#08111f" fontSize="13" fontWeight="700">+</text>
    <text x="300" y="34" fill="#a5f3fc" fontSize="14">n = 5 wavelengths</text>
    <text x="12" y="268" fill="#94a3b8" fontSize="13">standing wave closes on itself only when 2πr = nλ (conceptual)</text>
  </ScientificVisual>;
}

export function OrbitalShapesBasicVisual() {
  const pOrbital = (x: number, key: string, label: string, angle: number, positive: string, negative: string, node: string) => <g key={label} transform={`translate(${x} 126)`}>
    <path d="M-70 0H70M0-70V70" stroke="#475569" strokeWidth="1.2" />
    <path d="M-72 0H72" stroke="#f8fafc" strokeOpacity=".6" strokeWidth="1.3" strokeDasharray="5 5" transform={`rotate(${angle + 90})`} />
    <ellipse cx="-38" cy="0" rx="39" ry="25" fill={`url(#orbital-${key}-neg)`} stroke={negative} strokeWidth="1.7" transform={`rotate(${angle})`} />
    <ellipse cx="38" cy="0" rx="39" ry="25" fill={`url(#orbital-${key}-pos)`} stroke={positive} strokeWidth="1.7" transform={`rotate(${angle})`} />
    <circle cx="0" cy="0" r="4" fill="#fbbf24" /><text x="0" y="88" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="700">{label}</text><text x="0" y="108" textAnchor="middle" fill="#94a3b8" fontSize="12">node: {node}</text>
  </g>;
  return <ScientificVisual title="Orbital-shape gallery: s and real p orbitals" description="A labelled gallery of conceptual isosurface-style s and real p orbitals. The 1s orbital is spherical. The p x, p y and p z orbitals are orthogonal dumbbells, each divided by one angular nodal plane. Opposite colours denote the sign of the wave function, not positive and negative charge." viewBox="0 0 920 285" className="h-auto w-full">
    <defs>
      <radialGradient id="orbital-s"><stop stopColor="#e0f2fe" stopOpacity=".8"/><stop offset=".72" stopColor="#38bdf8" stopOpacity=".34"/><stop offset="1" stopColor="#0ea5e9" stopOpacity=".08"/></radialGradient>
      {[['px', '#67e8f9', '#f472b6'], ['py', '#a78bfa', '#fbbf24'], ['pz', '#34d399', '#fb7185']].map(([name, positive, negative]) => <g key={name}><radialGradient id={`orbital-${name}-pos`}><stop stopColor="#fff" stopOpacity=".82"/><stop offset="1" stopColor={positive} stopOpacity=".26"/></radialGradient><radialGradient id={`orbital-${name}-neg`}><stop stopColor="#fff" stopOpacity=".8"/><stop offset="1" stopColor={negative} stopOpacity=".25"/></radialGradient></g>)}
    </defs>
    <text x="20" y="27" fill="#bae6fd" fontSize="14">Boundary-surface view · colours show phase (+/−), not electric charge</text>
    <g transform="translate(105 126)"><circle r="68" fill="url(#orbital-s)" stroke="#67e8f9" strokeWidth="2"/><ellipse rx="68" ry="22" fill="none" stroke="#bae6fd" strokeOpacity=".45"/><path d="M-78 0H78M0-78V78" stroke="#475569" strokeWidth="1.2"/><circle r="4" fill="#fbbf24"/><text y="97" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="700">1s</text><text y="117" textAnchor="middle" fill="#94a3b8" fontSize="12">no angular node</text></g>
    {pOrbital(330, 'px', 'pₓ', 0, '#67e8f9', '#f472b6', 'yz plane')}{pOrbital(555, 'py', 'pᵧ', -45, '#a78bfa', '#fbbf24', 'xz plane')}{pOrbital(780, 'pz', 'p_z', 90, '#34d399', '#fb7185', 'xy plane')}
    <text x="20" y="265" fill="#94a3b8" fontSize="13">The central gap is a nodal plane: the probability density is zero there. These are 3D-inspired diagrams, not electron trajectories.</text>
  </ScientificVisual>;
}

export function AufbauFillingVisual() {
  const cells: Array<[number, number]> = [[1, 0], [2, 0], [2, 1], [3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [4, 3], [5, 0], [5, 1], [5, 2], [5, 3], [6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [8, 0]];
  const names = ["s", "p", "d", "f"];
  const cx = (l: number) => 118 + l * 104;
  const cy = (n: number) => 58 + (n - 1) * 44;
  const groups = Array.from({ length: 8 }, (_, i) => cells.filter(([nn, ll]) => nn + ll === i + 1));
  return <ScientificVisual title="Aufbau diagonal filling order" description="Chart of subshells one s through eight s arranged by shell and subshell, with red diagonal arrows sweeping through equal n plus l groups from the top right to the bottom left to show the filling order one s, two s, two p, three s, three p, four s, three d and so on." viewBox="0 0 560 460" className="mx-auto h-auto w-full max-w-lg">
    <defs><marker id="aufbau-head" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0 0L0 7L8 3.5Z" fill="#fb7185" /></marker></defs>
    {groups.map((group, gi) => {
      if (group.length === 0) return null;
      const top = group[0];
      const bottom = group[group.length - 1];
      const x1 = cx(top[1]) + 30, y1 = cy(top[0]) - 22;
      const x2 = cx(bottom[1]) - 32, y2 = cy(bottom[0]) + 18;
      return <path key={gi} d={`M${x1} ${y1}L${x2} ${y2}`} stroke="#fb7185" strokeWidth="2.2" opacity=".9" markerEnd="url(#aufbau-head)" />;
    })}
    {cells.map(([nn, ll]) => <text key={`${nn}${ll}`} x={cx(ll)} y={cy(nn) + 6} textAnchor="middle" fill="#e2e8f0" fontSize="19" fontWeight="700" paintOrder="stroke" stroke="#0b1728" strokeWidth="6">{`${nn}${names[ll]}`}</text>)}
    <text x="30" y="446" fill="#94a3b8" fontSize="13">follow the arrows top to bottom: lower n+l fills first; equal n+l fills lower n first</text>
  </ScientificVisual>;
}

export function PzAngularPolarVisual() {
  return <ScientificVisual title="Polar plot of the pz angular function" description="Exact polar plot of the pz angular function Y proportional to cosine theta: two circles tangent at the nucleus along the z axis, a positive lobe above and a negative lobe below, with the x y plane as the angular nodal plane." viewBox="0 0 420 300" className="h-auto w-full">
    <path d="M210 20V280" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 5" /><text x="216" y="32" fill="#e2e8f0" fontSize="14">z</text>
    <path d="M80 150H340" stroke="#94a3b8" strokeWidth="1.8" /><text x="346" y="155" fill="#e2e8f0" fontSize="14">xy-plane (node)</text>
    <circle cx="210" cy="95" r="55" fill="#facc15" opacity=".3" stroke="#facc15" strokeWidth="2" /><text x="202" y="100" fill="#fde68a" fontSize="17">+</text>
    <circle cx="210" cy="205" r="55" fill="#67e8f9" opacity=".22" stroke="#67e8f9" strokeWidth="2" /><text x="203" y="212" fill="#a5f3fc" fontSize="17">−</text>
    <circle cx="210" cy="150" r="4" fill="#fb7185" />
    <text x="12" y="292" fill="#94a3b8" fontSize="13">exact curve r = K·|cos θ| — the polar plot of Y(pz); signs are those of the angular function</text>
  </ScientificVisual>;
}

export function RadialDistributionVisual() {
  const curves = [
    { label: "1s", colour: "#67e8f9", f: (r: number) => r * r * Math.exp(-2 * r) },
    { label: "2s", colour: "#facc15", f: (r: number) => r * r * (2 - r) ** 2 * Math.exp(-r) },
    { label: "3s", colour: "#f472b6", f: (r: number) => r * r * (27 - 18 * r + 2 * r * r) ** 2 * Math.exp((-2 * r) / 3) },
  ].map(({ label, colour, f }) => {
    const values = Array.from({ length: 201 }, (_, i) => f(i * 0.125));
    const max = Math.max(...values);
    const points = values.map((value, i) => `${(60 + (i * 0.125 * 380) / 25).toFixed(1)},${(250 - (value / max) * 190).toFixed(1)}`).join(" ");
    return { label, colour, points };
  });
  return <ScientificVisual title="Radial probability distribution for 1s, 2s and 3s" description="Curves of the radial distribution function four pi r squared R squared against radius in Bohr units, computed from the exact hydrogen radial functions. The 1s curve has one hump peaking at one Bohr radius; the 2s curve has two humps separated by a node at two Bohr radii; the 3s curve has three humps with two nodes. Each curve is scaled to the same display height." viewBox="0 0 470 300" className="h-auto w-full">
    <path d="M60 40V250H450" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <text x="12" y="56" fill="#e2e8f0" fontSize="13">4πr²R²</text><text x="416" y="272" fill="#e2e8f0" fontSize="13">r / a₀</text>
    {[5, 10, 15, 20].map((r) => <g key={r}><path d={`M${60 + (r * 380) / 25} 250v5`} stroke="#94a3b8" strokeWidth="1.6" /><text x={54 + (r * 380) / 25} y="268" fill="#94a3b8" fontSize="12">{r}</text></g>)}
    {curves.map(({ label, colour, points }) => <polyline key={label} points={points} fill="none" stroke={colour} strokeWidth="2.2" />)}
    <text x="86" y="52" fill="#a5f3fc" fontSize="13">1s</text><text x="160" y="52" fill="#fde68a" fontSize="13">2s</text><text x="300" y="52" fill="#f9a8d4" fontSize="13">3s</text>
    <text x="60" y="292" fill="#94a3b8" fontSize="12">computed from exact hydrogen R(r); curves scaled to equal peak height; humps = n − l, nodes = n − l − 1</text>
  </ScientificVisual>;
}

export function Dz2OrbitalVisual() {
  return <ScientificVisual title="d z squared orbital and its nodal cones" description="Cross-section of the real d z squared angular function. Positive lobes lie on the z axis, a negative toroidal region surrounds the origin in the x y plane, and two conical nodal surfaces make an angle 54.7 degrees with the positive and negative z axes." viewBox="0 0 500 310" className="mx-auto h-auto w-full max-w-lg">
    {LOBE_DEFS}
    <path d="M250 22V274M56 155H446" stroke="#94a3b8" strokeWidth="1.6" /><text x="258" y="33" fill="#e2e8f0" fontSize="14">z</text><text x="425" y="147" fill="#e2e8f0" fontSize="14">r⊥</text>
    <path d="M250 150 C190 124 193 55 250 40 C307 55 310 124 250 150Z" fill="url(#lgCyan)" stroke="#a5f3fc" strokeWidth="1.8" filter="url(#lobeGlow)" />
    <path d="M250 160 C190 186 193 255 250 270 C307 255 310 186 250 160Z" fill="url(#lgCyan)" stroke="#a5f3fc" strokeWidth="1.8" filter="url(#lobeGlow)" />
    <ellipse cx="250" cy="155" rx="112" ry="31" fill="url(#lgPink)" stroke="#f9a8d4" strokeWidth="1.8" filter="url(#lobeGlow)" /><ellipse cx="250" cy="155" rx="45" ry="12" fill="#08111f" stroke="#f472b6" strokeWidth="1.5" />
    <path d="M250 155L109 252M250 155L391 252M250 155L109 58M250 155L391 58" stroke="#facc15" strokeWidth="1.5" strokeDasharray="6 5" /><text x="82" y="48" fill="#fde68a" fontSize="13">nodal cones: θ = 54.7°</text>
    <text x="258" y="88" fill="#a5f3fc" fontSize="18">+</text><text x="258" y="238" fill="#a5f3fc" fontSize="18">+</text><text x="342" y="160" fill="#f9a8d4" fontSize="18">−</text><circle cx="250" cy="155" r="4" fill="#fbbf24" /><path d="M118 108L244 150" stroke="#fde68a" strokeWidth="1" strokeDasharray="3 3" opacity=".8" /><text x="60" y="104" fill="#fde68a" fontSize="12">nucleus</text>
    <text x="18" y="296" fill="#94a3b8" fontSize="12">signs refer to Y₂,₀; rotating this section gives the torus and cones</text>
  </ScientificVisual>;
}

export function OrbitalBoxVisual() {
  const groups = [["s", ["s"]], ["p", ["pₓ", "pᵧ", "p_z"]], ["d", ["dₓᵧ", "dᵧz", "d_zx", "d₍ₓ²−ᵧ²₎", "d_z²"]]] as const;
  return <ScientificVisual title="Orbital boxes in s p and d subshells" description="One orbital box represents an s subshell, three boxes represent the p orbitals p x, p y and p z, and five boxes represent the real d orbitals d xy, d yz, d zx, d x squared minus y squared and d z squared." viewBox="0 0 740 180" className="h-auto w-full">
    {groups.map(([group, labels], groupIndex) => { const x = [35, 150, 350][groupIndex]; return <g key={group}><text x={x} y="34" fill="#a5f3fc" fontSize="16" fontWeight="700">{group} subshell</text>{labels.map((label, i) => <g key={label}><rect x={x + i * 70} y="58" width="58" height="52" rx="5" fill="#0f1d32" stroke="#67e8f9" strokeWidth="1.5" /><text x={x + i * 70 + 29} y="140" textAnchor="middle" fill="#e2e8f0" fontSize="12">{label}</text></g>)}<text x={x} y="166" fill="#94a3b8" fontSize="12">{labels.length} orbital{labels.length > 1 ? "s" : ""}</text></g>; })}
  </ScientificVisual>;
}

export function WaveFunctionCriteriaVisual() {
  return <ScientificVisual title="Acceptability tests for a wave function" description="Three coordinate plots compare rejected multi-valued curves with a smooth acceptable single-valued continuous wave function. A dashed vertical test line intersects the rejected curves more than once and the accepted curve once." viewBox="0 0 720 220" className="h-auto w-full">
    {[0, 1, 2].map((panel) => <g key={panel} transform={`translate(${20 + panel * 235} 0)`}><path d="M10 170H210M30 25V185" stroke="#94a3b8" strokeWidth="1.5" /><text x="195" y="190" fill="#cbd5e1" fontSize="13">x</text><text x="16" y="38" fill="#cbd5e1" fontSize="13">ψ</text>{panel === 0 ? <><path d="M45 145C70 30 135 30 155 142C170 205 75 205 80 58" fill="none" stroke="#fb7185" strokeWidth="2.5" /><path d="M115 35V170" stroke="#facc15" strokeDasharray="5 5" /><circle cx="115" cy="49" r="4" fill="#facc15" /><circle cx="115" cy="142" r="4" fill="#facc15" /></> : panel === 1 ? <><path d="M45 130C85 35 145 35 170 125C192 198 85 182 75 100" fill="none" stroke="#fb7185" strokeWidth="2.5" /><path d="M116 35V170" stroke="#facc15" strokeDasharray="5 5" /><circle cx="116" cy="61" r="4" fill="#facc15" /><circle cx="116" cy="152" r="4" fill="#facc15" /></> : <><path d="M42 155C72 152 82 62 116 92S155 163 192 42" fill="none" stroke="#67e8f9" strokeWidth="2.8" /><path d="M120 35V170" stroke="#facc15" strokeDasharray="5 5" /><circle cx="120" cy="102" r="4" fill="#facc15" /></>}<text x="110" y="212" textAnchor="middle" fill={panel === 2 ? "#a5f3fc" : "#fda4af"} fontSize="13">{panel === 2 ? "accepted: one ψ for each x" : "rejected: multiple ψ values"}</text></g>)}
  </ScientificVisual>;
}

export function PsiProbabilityVisual() {
  const psi = Array.from({ length: 121 }, (_, i) => { const x = 45 + i * 3.1; const y = 70 - 42 * Math.sin((i / 120) * Math.PI * 4) * Math.exp(-((i - 60) ** 2) / 2400); return `${x.toFixed(1)},${y.toFixed(1)}`; }).join(" ");
  const probability = Array.from({ length: 121 }, (_, i) => { const x = 45 + i * 3.1; const v = Math.sin((i / 120) * Math.PI * 4) * Math.exp(-((i - 60) ** 2) / 2400); return `${x.toFixed(1)},${(190 - 68 * v * v).toFixed(1)}`; }).join(" ");
  return <ScientificVisual title="Wave function and probability density" description="The upper plot shows an oscillating wave function psi with positive and negative amplitude. The lower plot shows its squared magnitude, which is non-negative, with zero probability at nodes and maximum probability at the tallest central lobe." viewBox="0 0 470 270" className="h-auto w-full"><path d="M45 70H425M45 190H425M45 20V225" stroke="#94a3b8" strokeWidth="1.5" /><polyline points={psi} fill="none" stroke="#fb7185" strokeWidth="2.5" /><polyline points={probability} fill="none" stroke="#67e8f9" strokeWidth="2.5" /><circle cx="231" cy="122" r="21" fill="none" stroke="#facc15" strokeWidth="1.7" /><text x="250" y="120" fill="#fde68a" fontSize="13">maximum probability</text><text x="55" y="35" fill="#fda4af" fontSize="14">ψ(x)</text><text x="55" y="155" fill="#a5f3fc" fontSize="14">|ψ(x)|²</text><text x="405" y="210" fill="#cbd5e1" fontSize="13">x</text><text x="45" y="248" fill="#94a3b8" fontSize="12">nodes of ψ coincide with zero probability</text></ScientificVisual>;
}

export function SphericalCoordinatesVisual() {
  return <ScientificVisual title="Spherical polar coordinates" description="A position vector r extends from the origin. Theta is measured down from the z axis and phi is measured in the x y plane from the x axis. The vertical component is r cos theta and the planar projection is r sin theta." viewBox="0 0 460 310" className="h-auto w-full"><defs><marker id="sph-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0 0L0 6L7 3z" fill="#67e8f9" /></marker></defs><path d="M80 242H390M230 285V30" stroke="#94a3b8" strokeWidth="1.7" markerEnd="url(#sph-arrow)" /><path d="M230 242L355 205" stroke="#94a3b8" strokeWidth="1.7" /><path d="M230 242L305 82" stroke="#67e8f9" strokeWidth="2.8" markerEnd="url(#sph-arrow)" /><path d="M305 82V242M230 242L305 242" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="5 4" /><path d="M230 180A62 62 0 0 1 259 188" fill="none" stroke="#facc15" strokeWidth="2" /><path d="M275 242A45 24 0 0 0 267 229" fill="none" stroke="#f472b6" strokeWidth="2" /><text x="312" y="85" fill="#a5f3fc" fontSize="15">r</text><text x="241" y="174" fill="#fde68a" fontSize="14">θ</text><text x="277" y="230" fill="#f9a8d4" fontSize="14">φ</text><text x="312" y="165" fill="#c4b5fd" fontSize="13">r cos θ</text><text x="260" y="260" fill="#c4b5fd" fontSize="13">r sin θ</text><text x="397" y="246" fill="#e2e8f0" fontSize="14">x</text><text x="215" y="27" fill="#e2e8f0" fontSize="14">z</text><text x="358" y="203" fill="#e2e8f0" fontSize="14">y</text></ScientificVisual>;
}

export function RadialShellVisual() {
  return <ScientificVisual title="Spherical shell of thickness dr" description="Two concentric spherical boundaries at radii r and r plus dr enclose a thin shell. Its volume is approximately four pi r squared dr for infinitesimal dr." viewBox="0 0 420 280" className="h-auto w-full"><circle cx="205" cy="135" r="94" fill="#67e8f9" opacity=".07" stroke="#67e8f9" strokeWidth="2" /><circle cx="205" cy="135" r="76" fill="#08111f" stroke="#facc15" strokeWidth="2" /><path d="M205 135H281M205 135H299" stroke="#e2e8f0" strokeWidth="1.6" /><path d="M283 125V145M299 125V145" stroke="#f472b6" strokeWidth="1.5" /><text x="242" y="126" fill="#fde68a" fontSize="14">r</text><text x="283" y="112" fill="#f9a8d4" fontSize="14">dr</text><circle cx="205" cy="135" r="4" fill="#fb7185" /><text x="178" y="163" fill="#fda4af" fontSize="13">nucleus</text><text x="76" y="252" fill="#94a3b8" fontSize="13">thin shell: dτ = 4πr²dr (to first order in dr)</text></ScientificVisual>;
}

export function AtomicConceptMapVisual() {
  const nodes: Array<[string, number, number, string]> = [
    ["Subatomic particles & nuclear model", 20, 30, "#67e8f9"],
    ["EM radiation & Planck quanta", 20, 90, "#facc15"],
    ["Photoelectric effect", 20, 150, "#fb7185"],
    ["Bohr model & hydrogen spectrum", 20, 210, "#a78bfa"],
    ["Dual nature & uncertainty", 400, 30, "#67e8f9"],
    ["Quantum numbers", 400, 90, "#facc15"],
    ["Schrödinger equation & wave functions", 400, 150, "#fb7185"],
    ["Orbitals, nodes & configurations", 400, 210, "#a78bfa"],
  ];
  return <ScientificVisual title="Atomic Structure concept map" description="The chapter progresses from the discovery of subatomic particles and the nuclear model, through electromagnetic radiation and Planck quanta, the photoelectric effect, and the Bohr model with the hydrogen spectrum, then on to dual nature and uncertainty, quantum numbers, the Schrödinger equation and wave functions, and finally orbitals, nodes and electronic configurations." viewBox="0 0 760 260" className="h-auto w-full">
    <defs><marker id="cmap-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#94a3b8" /></marker></defs>
    {nodes.map(([label, x, y, colour]) => <g key={label}><rect x={x} y={y} width="330" height="42" rx="10" fill="none" stroke={colour} strokeWidth="1.8" opacity=".9" /><text x={x + 14} y={y + 26} fill="#e2e8f0" fontSize="14">{label}</text></g>)}
    <path d="M185 72V88" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#cmap-arrow)" opacity=".9" />
    <path d="M185 132V148" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#cmap-arrow)" opacity=".9" />
    <path d="M185 192V208" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#cmap-arrow)" opacity=".9" />
    <path d="M565 72V88" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#cmap-arrow)" opacity=".9" />
    <path d="M565 132V148" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#cmap-arrow)" opacity=".9" />
    <path d="M565 192V208" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#cmap-arrow)" opacity=".9" />
    <path d="M352 231h18q15 0 15-15V66q0-15 15-15" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 5" opacity=".75" markerEnd="url(#cmap-arrow)" />
  </ScientificVisual>;
}

export function SommerfeldOrbitsVisual() {
  return <ScientificVisual title="Sommerfeld orbits for n equals three" description="Three nested electron paths about the nucleus for n equals three: a circle for K equals three, a wider ellipse for K equals two, and a narrower ellipse for K equals one. The ratio of major to minor axis equals n over K." viewBox="0 0 440 260" className="h-auto w-full">
    <circle cx="220" cy="130" r="100" fill="none" stroke="#67e8f9" strokeWidth="2" />
    <ellipse cx="220" cy="130" rx="100" ry="66.7" fill="none" stroke="#facc15" strokeWidth="2" />
    <ellipse cx="220" cy="130" rx="100" ry="33.3" fill="none" stroke="#f472b6" strokeWidth="2" />
    <circle cx="220" cy="130" r="7" fill="#fb7185" />
    <text x="228" y="40" fill="#a5f3fc" fontSize="13">K = 3 (circle, n/K = 1)</text>
    <text x="248" y="74" fill="#fde68a" fontSize="13">K = 2 (n/K = 3/2)</text>
    <text x="258" y="112" fill="#f9a8d4" fontSize="13">K = 1 (n/K = 3)</text>
    <text x="12" y="248" fill="#94a3b8" fontSize="13">conceptual diagram — axis ratios drawn to the n/K rule, not to orbital scale</text>
  </ScientificVisual>;
}

export function PhotonFluxGeometryVisual() {
  return <ScientificVisual title="Photon flux through a pupil" description="An isotropic point source produces a spherical intensity surface at distance r. A small circular pupil intercepts its area A, so its received power is intensity times area." viewBox="0 0 620 300" className="h-auto w-full">
    <defs><marker id="flux-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#67e8f9" /></marker></defs>
    <circle cx="130" cy="150" r="25" fill="#facc15" opacity=".9" /><text x="104" y="195" fill="#fde68a" fontSize="15">source, P</text>
    <path d="M155 150H460" stroke="#67e8f9" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#flux-arrow)" /><text x="284" y="137" fill="#a5f3fc" fontSize="15">distance r</text>
    <path d="M130 50A150 100 0 0 1 130 250" fill="none" stroke="#a78bfa" strokeWidth="2" /><path d="M130 50A150 100 0 0 0 130 250" fill="none" stroke="#a78bfa" strokeWidth="2" strokeDasharray="5 5" />
    <ellipse cx="490" cy="150" rx="24" ry="38" fill="#fb7185" opacity=".38" stroke="#fda4af" strokeWidth="2" /><text x="462" y="208" fill="#fecdd3" fontSize="15">pupil area A</text>
    <text x="200" y="276" fill="#94a3b8" fontSize="14">isotropic spreading: I = P/(4πr²), received power R = IA</text>
  </ScientificVisual>;
}

export function UncertaintyTradeoffVisual() {
  const gaussian = (spread: number) => Array.from({ length: 81 }, (_, i) => {
    const x = i * 4;
    const y = 116 - 70 * Math.exp(-((x - 160) ** 2) / (2 * spread * spread));
    return `${x + 50},${y}`;
  }).join(" ");
  return <ScientificVisual title="Localisation and momentum spread trade-off" description="A narrow wave packet in position space has a broad spread in wave number and therefore momentum. A broad wave packet has a narrow momentum spread. The sketch illustrates the reciprocal relation rather than a numerical scale." viewBox="0 0 760 290" className="h-auto w-full">
    <path d="M50 130H350M50 30V130M430 130H730M430 30V130" stroke="#94a3b8" strokeWidth="2" />
    <polyline points={gaussian(22)} fill="none" stroke="#67e8f9" strokeWidth="3" /><polyline points={gaussian(72)} fill="none" stroke="#facc15" strokeWidth="3" />
    <text x="50" y="160" fill="#e2e8f0" fontSize="15">position x</text><text x="4" y="42" fill="#e2e8f0" fontSize="15">amplitude</text>
    <path d="M430 130H730M430 30V130" stroke="#94a3b8" strokeWidth="2" /><polyline points={gaussian(72).replace(/(\d+),(\d+(?:\.\d+)?)/g, (_, x, y) => `${Number(x) + 380},${y}`)} fill="none" stroke="#67e8f9" strokeWidth="3" /><polyline points={gaussian(22).replace(/(\d+),(\d+(?:\.\d+)?)/g, (_, x, y) => `${Number(x) + 380},${y}`)} fill="none" stroke="#facc15" strokeWidth="3" />
    <text x="430" y="160" fill="#e2e8f0" fontSize="15">wave number k (and momentum p = ħk)</text>
    <text x="52" y="205" fill="#a5f3fc" fontSize="14">narrow Δx</text><text x="176" y="205" fill="#fde68a" fontSize="14">broad Δx</text><text x="435" y="205" fill="#a5f3fc" fontSize="14">broad Δk</text><text x="590" y="205" fill="#fde68a" fontSize="14">narrow Δk</text>
    <text x="50" y="260" fill="#94a3b8" fontSize="14">qualitative Fourier-pair picture: localisation requires a range of k values; it is not an experimental error bar.</text>
  </ScientificVisual>;
}

export function DeBroglieVoltageVisual() {
  const points = Array.from({ length: 121 }, (_, i) => {
    const voltageKv = 0.1 + i * 0.5;
    const wavelengthAngstrom = 12.24 / Math.sqrt(voltageKv * 1000);
    return `${65 + (voltageKv / 60.1) * 470},${235 - wavelengthAngstrom * 500}`;
  }).join(" ");
  return <ScientificVisual title="Electron de Broglie wavelength versus accelerating voltage" description="A graph of the non-relativistic electron de Broglie wavelength in angstroms as a function of accelerating voltage in kilovolts. The curve decreases as one over the square root of voltage." viewBox="0 0 600 310" className="h-auto w-full">
    <path d="M65 25V235H545" fill="none" stroke="#94a3b8" strokeWidth="2" /><polyline points={points} fill="none" stroke="#67e8f9" strokeWidth="3" />
    {[10, 20, 30, 40, 50, 60].map((v) => <g key={v}><path d={`M${65 + (v / 61) * 470} 235v6`} stroke="#94a3b8" /><text x={58 + (v / 61) * 470} y="256" fill="#94a3b8" fontSize="12">{v}</text></g>)}
    {[0.1, 0.2, 0.3].map((l) => <g key={l}><path d={`M59 ${235 - l * 500}h6`} stroke="#94a3b8" /><text x="28" y={239 - l * 500} fill="#94a3b8" fontSize="12">{l}</text></g>)}
    <text x="350" y="283" fill="#e2e8f0" fontSize="14">accelerating voltage V / kV</text><text x="8" y="18" fill="#e2e8f0" fontSize="14">λ / Å</text><text x="300" y="55" fill="#a5f3fc" fontSize="14">λ = 12.24/√V (V in volts)</text>
    <text x="65" y="304" fill="#94a3b8" fontSize="12">non-relativistic plot; a relativistic correction becomes important at high voltage</text>
  </ScientificVisual>;
}

export function StringStandingWaveVisual() {
  const modes = [
    { n: 1, colour: "#67e8f9", lambda: "2L" },
    { n: 2, colour: "#facc15", lambda: "L" },
    { n: 3, colour: "#f472b6", lambda: "2L/3" },
    { n: 4, colour: "#a78bfa", lambda: "L/2" },
  ];
  const pW = 130;
  const sL = 105;
  const baseline = 108;
  const amp = 28;
  return (
    <ScientificVisual
      title="Standing wave modes on a vibrating string"
      description="Four panels showing the first four harmonics of a standing wave on a string of length L. Mode n has n half-wavelengths fitting in the length L, with fixed-end nodes and n minus one interior nodes. The pattern follows lambda equals 2L over n."
      viewBox="0 0 555 182"
      className="h-auto w-full"
    >
      {modes.map(({ n, colour, lambda }, i) => {
        const px = 12 + i * pW;
        const points = Array.from({ length: 101 }, (_, j) => {
          const t = j / 100;
          const x = px + t * sL;
          const y = baseline - amp * Math.sin(n * Math.PI * t);
          return `${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(" ");
        const nodes = Array.from({ length: n + 1 }, (_, j) => px + (j / n) * sL);
        return (
          <g key={n}>
            <path d={`M${px} ${baseline - 35}V${baseline + 35}`} stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            <path d={`M${px + sL} ${baseline - 35}V${baseline + 35}`} stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            <path d={`M${px} ${baseline}H${px + sL}`} stroke="#334155" strokeWidth="1" strokeDasharray="2 4" />
            <polyline points={points} fill="none" stroke={colour} strokeWidth="2.4" />
            {nodes.map((nx, ni) => (
              <circle key={ni} cx={nx} cy={baseline} r="3.5" fill="#94a3b8" />
            ))}
            <text x={px + sL / 2} y={17} textAnchor="middle" fill={colour} fontSize="13" fontWeight="700">n = {n}</text>
            <text x={px + sL / 2} y={162} textAnchor="middle" fill="#e2e8f0" fontSize="12">λ = {lambda}</text>
          </g>
        );
      })}
      <text x="10" y="178" fill="#94a3b8" fontSize="11">grey dots = nodes · coloured arcs = antinodes · L = nλ/2 in each panel</text>
    </ScientificVisual>
  );
}

export function MagneticQuantumNumberVisual() {
  const cx = 200;
  const cy = 148;
  const vecLen = 80;
  const sqrt6 = Math.sqrt(6);
  const mValues = [2, 1, 0, -1, -2] as const;
  const colours = ["#67e8f9", "#86efac", "#fde68a", "#f9a8d4", "#c4b5fd"] as const;
  const entries = mValues.map((m, i) => {
    const zFrac = m / sqrt6;
    const tFrac = Math.sqrt(Math.max(0, 1 - zFrac * zFrac));
    const tipX = cx - tFrac * vecLen;
    const tipY = cy - zFrac * vecLen;
    return { m, tipX, tipY, colour: colours[i] };
  });
  return (
    <ScientificVisual
      title="Space quantisation for d orbitals (l = 2)"
      description="Fan diagram for l equals two. Five arrows from the origin show the orbital angular momentum vector L at each of the five allowed precession angles, one for each value of the magnetic quantum number m from plus two to minus two. The dashed horizontal lines show the projection onto the z-axis, which equals m in units of h over 2 pi."
      viewBox="0 0 420 296"
      className="h-auto w-full"
    >
      <defs>
        <marker id="mq-z-head" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3z" fill="#94a3b8" />
        </marker>
      </defs>
      <path d={`M${cx} 18V272`} stroke="#94a3b8" strokeWidth="2" markerEnd="url(#mq-z-head)" />
      <text x={cx + 8} y="24" fill="#e2e8f0" fontSize="13">z (field H)</text>
      {entries.map(({ m, tipX, tipY, colour }) => (
        <g key={m}>
          <path d={`M${cx} ${cy}L${tipX} ${tipY}`} stroke={colour} strokeWidth="2.4" />
          <circle cx={tipX} cy={tipY} r="3.5" fill={colour} />
          <path d={`M${tipX} ${tipY}H${cx}`} stroke={colour} strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
          <path d={`M${cx - 7} ${tipY}H${cx + 7}`} stroke={colour} strokeWidth="2.5" />
          <path d={`M${cx} ${tipY}H${cx + 110}`} stroke={colour} strokeWidth="1" strokeDasharray="2 5" opacity="0.35" />
          <text x={cx + 116} y={tipY + 5} fill={colour} fontSize="13">m = {m > 0 ? `+${m}` : m}</text>
        </g>
      ))}
      <circle cx={cx} cy={cy} r="5" fill="#fb7185" />
      <text x="10" y="290" fill="#94a3b8" fontSize="12">l = 2 · |L| = √6 ħ · z-projection = m ħ · fan shows all 2l+1 = 5 allowed orientations</text>
    </ScientificVisual>
  );
}

export function BohrOrbitsVisual() {
  const orbits = [[45, "n = 1 (K)"], [78, "n = 2 (L)"], [111, "n = 3 (M)"], [144, "n = 4 (N)"]] as const;
  return <ScientificVisual title="Bohr stationary orbits" description="Concentric circular orbits around a central positive nucleus, numbered n equals one to four outward and lettered K, L, M and N. Electron energy increases with distance from the nucleus while successive energy gaps decrease." viewBox="0 0 440 310" className="h-auto w-full">
    {orbits.map(([r]) => <circle key={r} cx="220" cy="155" r={r} fill="none" stroke="#67e8f9" strokeWidth="1.8" opacity=".75" />)}
    <circle cx="220" cy="155" r="15" fill="#fb7185" /><text x="213" y="161" fill="#08111f" fontSize="16" fontWeight="700">+</text>
    {orbits.map(([r, label], index) => <text key={label} x={244 + index * 1} y={155 - r - 5} fill="#e2e8f0" fontSize="13">{label}</text>)}
    <circle cx="265" cy="155" r="6" fill="#facc15" /><text x="276" y="150" fill="#fde68a" fontSize="13">e⁻</text>
    <text x="12" y="298" fill="#94a3b8" fontSize="13">conceptual diagram — orbit spacing not to scale; E₁ &lt; E₂ &lt; E₃ &lt; E₄</text>
  </ScientificVisual>;
}

export function OrbitalNodeSeriesVisual({ kind = "p" }: { kind?: "s" | "p" }) {
  const labels = kind === "s" ? ["1s", "2s", "3s"] : ["2p", "3p", "4p", "5p"];
  return <ScientificVisual title={`${kind}-orbital radial-node sequence`} description={`Conceptual ${kind}-orbital boundary surfaces arranged by increasing principal quantum number. Nested outlines mark radial nodes; colour indicates the sign of a real wavefunction across a node. The outer angular shape is preserved.`} viewBox="0 0 760 230" className="h-auto w-full">
    {LOBE_DEFS}
    {labels.map((label, i) => {
      const x = 95 + i * (kind === "s" ? 240 : 175);
      const radial = i;
      return <g key={label}>
        {kind === "s" ? Array.from({ length: radial + 1 }, (_, shell) => <circle key={shell} cx={x} cy="108" r={26 + shell * 22} fill={shell % 2 ? "url(#lgPink)" : "url(#lgCyan)"} fillOpacity={shell === radial ? "1" : ".45"} stroke={shell % 2 ? "#f9a8d4" : "#a5f3fc"} strokeWidth="1.8" filter="url(#lobeGlow)" />) : Array.from({ length: radial + 1 }, (_, shell) => { const grad = shell % 2 ? "url(#lgPink)" : "url(#lgCyan)"; const edge = shell % 2 ? "#f9a8d4" : "#a5f3fc"; const rx = 13 + shell * 8; const ry = 24 + shell * 12; return <g key={shell}><ellipse cx={x - rx} cy="108" rx={rx} ry={ry} fill={grad} fillOpacity={shell === radial ? "1" : ".45"} stroke={edge} strokeWidth="1.6" filter="url(#lobeGlow)" /><ellipse cx={x + rx} cy="108" rx={rx} ry={ry} fill={grad} fillOpacity={shell === radial ? "1" : ".45"} stroke={edge} strokeWidth="1.6" filter="url(#lobeGlow)" /></g>; })}
        <circle cx={x} cy="108" r="3" fill="#fbbf24" /><text x={x} y="190" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="700">{label}</text><text x={x} y="211" textAnchor="middle" fill="#94a3b8" fontSize="13">{radial} radial node{radial === 1 ? "" : "s"}</text>
      </g>;
    })}
    <text x="18" y="24" fill="#94a3b8" fontSize="13">conceptual boundary surfaces; nested regions are separated by radial nodes (not electron trajectories)</text>
  </ScientificVisual>;
}

export function DOrbitalNodalMapVisual() {
  const orbitals = [["dxy", "between x, y", "zx and yz", 45], ["dyz", "between y, z", "xy and zx", 45], ["dzx", "between z, x", "xy and yz", 45], ["dx²−y²", "along x, y", "x = y; x = −y", 0]] as const;
  return <ScientificVisual title="Four real d orbitals and their nodal planes with labelled axes" description="A four-panel schematic of real d orbitals. The first three have lobes between the coordinate axes, so the axes themselves lie in the two nodal planes. The d x squared minus y squared orbital has lobes on the x and y axes with nodal planes along the diagonals. Dashed yellow lines mark the nodal planes in each panel and colours mark opposite signs of the angular function." viewBox="0 0 760 245" className="h-auto w-full">
    {LOBE_DEFS}
    {orbitals.map(([name, placement, nodes, offset], i) => {
      const x = 98 + i * 190; const y = 104;
      const nodalOnAxes = offset === 45;
      return <g key={name}>
        <path d={`M${x - 70} ${y}H${x + 70}M${x} ${y - 70}V${y + 70}`} stroke={nodalOnAxes ? "#facc15" : "#64748b"} strokeWidth={nodalOnAxes ? 1.4 : 1.1} strokeDasharray={nodalOnAxes ? "5 4" : undefined} opacity={nodalOnAxes ? .85 : 1} />
        <path d={`M${x - 55} ${y - 55}L${x + 55} ${y + 55}M${x - 55} ${y + 55}L${x + 55} ${y - 55}`} stroke={nodalOnAxes ? "#64748b" : "#facc15"} strokeWidth={nodalOnAxes ? 1 : 1.4} strokeDasharray={nodalOnAxes ? undefined : "5 4"} opacity={nodalOnAxes ? .6 : .9} />
        {[0, 1, 2, 3].map((j) => { const deg = offset + j * 90; const a = deg * Math.PI / 180; const lx = x + Math.cos(a) * 41; const ly = y + Math.sin(a) * 41; return <ellipse key={j} cx={lx} cy={ly} rx="26" ry="12" transform={`rotate(${deg} ${lx} ${ly})`} fill={j % 2 ? "url(#lgPink)" : "url(#lgCyan)"} stroke={j % 2 ? "#f9a8d4" : "#a5f3fc"} strokeWidth="1.6" filter="url(#lobeGlow)" />; })}
        <circle cx={x} cy={y} r="3" fill="#fbbf24" />
        <text x={x + 74} y={y + 4} fill="#94a3b8" fontSize="12">{["x", "y", "z", "x"][i]}</text>
        <text x={x + 6} y={y - 62} fill="#94a3b8" fontSize="12">{["y", "z", "x", "y"][i]}</text>
        <OrbitalLabel x={x} y={199} shell="d" sub={name.slice(1)} />
        <text x={x} y="219" textAnchor="middle" fill="#94a3b8" fontSize="12">{placement}; nodes: {nodes}</text>
      </g>;
    })}
    <text x="16" y="240" fill="#94a3b8" fontSize="13">each real d orbital has l = 2 angular nodes (dashed); colours indicate opposite signs of the angular function</text>
  </ScientificVisual>;
}

export function PenetrationComparisonVisual() {
  const curve = (peaks: number[], colour: string) => { const pts = Array.from({ length: 181 }, (_, i) => { const r = i / 18; const value = peaks.reduce((sum, p, j) => sum + Math.exp(-((r - p) ** 2) / (j === 0 ? .18 : .52)), 0); return `${55 + r * 48},${220 - value * 70}`; }).join(" "); return <polyline points={pts} fill="none" stroke={colour} strokeWidth="2.5" />; };
  return <ScientificVisual title="Qualitative radial penetration of 3s, 3p and 3d" description="Qualitative radial-distribution curves versus radius. The 3s curve has three maxima and reaches closest to the nucleus, the 3p curve has two maxima, and the 3d curve has one outer maximum. The figure explains the ordering of penetration, not an absolute probability scale." viewBox="0 0 570 285" className="h-auto w-full"><path d="M55 25V220H535" fill="none" stroke="#94a3b8" strokeWidth="2" /><text x="8" y="35" fill="#e2e8f0" fontSize="13">P(r)</text><text x="480" y="247" fill="#e2e8f0" fontSize="13">r</text>{curve([.7, 2.8, 6.3], "#67e8f9")}{curve([2.1, 6.1], "#facc15")}{curve([6.8], "#f472b6")}<path d="M55 25V220" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="4 4" /><text x="63" y="48" fill="#fde68a" fontSize="13">nucleus</text><text x="165" y="80" fill="#a5f3fc" fontSize="14">3s: 3 humps</text><text x="270" y="115" fill="#fde68a" fontSize="14">3p: 2 humps</text><text x="390" y="145" fill="#f9a8d4" fontSize="14">3d: 1 hump</text><text x="55" y="274" fill="#94a3b8" fontSize="12">qualitative radial distributions: inner 3s density gives greatest penetration; maxima are not on a shared numerical scale</text></ScientificVisual>;
}

export function AtomRegionsVisual() {
  return <ScientificVisual title="Two regions of the atom" description="An atom drawn as a large sphere with a tiny central nucleus. Labels divide it into the nucleus, which holds protons and neutrons, and the extra-nuclear part, where the electrons reside." viewBox="0 0 580 270" className="h-auto w-full">
    <circle cx="190" cy="135" r="105" fill="#67e8f9" fillOpacity=".07" stroke="#67e8f9" strokeWidth="2" strokeDasharray="7 6" />
    <circle cx="190" cy="135" r="14" fill="#fb7185" /><text x="183" y="141" fill="#08111f" fontSize="14" fontWeight="700">+</text>
    {[[-62, -40], [55, -58], [72, 48], [-48, 66]].map(([dx, dy]) => <circle key={`${dx}${dy}`} cx={190 + dx} cy={135 + dy} r="6" fill="#facc15" />)}
    <path d="M212 128L330 92" stroke="#fb7185" strokeWidth="1.6" /><text x="336" y="90" fill="#fda4af" fontSize="15">nucleus (protons + neutrons)</text>
    <path d="M262 190L330 176" stroke="#facc15" strokeWidth="1.6" /><text x="336" y="180" fill="#fde68a" fontSize="15">extra-nuclear part (electrons)</text>
    <text x="20" y="256" fill="#94a3b8" fontSize="13">not to scale — the nucleus is about 10⁻⁵ of the atomic radius</text>
  </ScientificVisual>;
}

export function ImpactParameterVisual() {
  return <ScientificVisual title="Impact parameter and scattering geometry" description="An alpha particle approaches a target nucleus along a line offset by the impact parameter b, follows a hyperbolic path, and leaves deflected through the scattering angle theta. The change of momentum bisects the path at the symmetry plane, and r min marks the distance of closest approach." viewBox="0 0 640 320" className="h-auto w-full">
    <defs><marker id="impact-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L0 6L8 3Z" fill="#67e8f9" /></marker></defs>
    <circle cx="330" cy="248" r="20" fill="#fb7185" /><text x="318" y="255" fill="#fff" fontSize="14">+Ze</text><text x="286" y="288" fill="#fda4af" fontSize="13">target nucleus</text>
    <path d="M40 118H620" stroke="#64748b" strokeWidth="1.2" strokeDasharray="5 5" />
    <path d="M40 118 C200 118 280 114 330 96 C382 76 480 42 600 12" fill="none" stroke="#67e8f9" strokeWidth="2.8" markerEnd="url(#impact-arrow)" />
    <text x="66" y="104" fill="#a5f3fc" fontSize="14">path of projectile (α)</text>
    <path d="M330 96V240" stroke="#facc15" strokeWidth="1.8" strokeDasharray="4 4" /><text x="338" y="180" fill="#fde68a" fontSize="15">r min</text>
    <path d="M52 118V245M52 245 L322 245" stroke="#f472b6" strokeWidth="1.4" strokeDasharray="4 4" />
    <path d="M46 180h12" stroke="#f472b6" strokeWidth="1.6" /><text x="26" y="187" fill="#f9a8d4" fontSize="16">b</text>
    <path d="M490 118 A160 160 0 0 0 466 62" fill="none" stroke="#a78bfa" strokeWidth="2" /><text x="498" y="92" fill="#c4b5fd" fontSize="16">θ</text>
    <path d="M330 96V34" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="6 5" /><text x="300" y="24" fill="#cbd5e1" fontSize="13">symmetry plane · Δp along this line</text>
    <text x="20" y="312" fill="#94a3b8" fontSize="13">smaller impact parameter b → closer approach → larger scattering angle θ</text>
  </ScientificVisual>;
}

export function ScatteringCrossSectionVisual() {
  return <ScientificVisual title="Scattering cross-section geometry" description="Alpha particles that pass through a thin annular ring of radius b and width db around the beam axis are scattered into angles between theta and theta plus d theta. On a far sphere of radius r they land in a ring of radius r sine theta and width r d theta." viewBox="0 0 700 320" className="h-auto w-full">
    <defs><marker id="xsec-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L0 6L8 3Z" fill="#67e8f9" /></marker></defs>
    <path d="M30 160H660" stroke="#64748b" strokeWidth="1.2" strokeDasharray="5 5" /><text x="640" y="150" fill="#94a3b8" fontSize="12">axis</text>
    <ellipse cx="120" cy="160" rx="16" ry="66" fill="none" stroke="#facc15" strokeWidth="2.4" /><ellipse cx="120" cy="160" rx="13" ry="54" fill="none" stroke="#facc15" strokeWidth="1.6" strokeDasharray="4 4" />
    <path d="M120 94V106" stroke="#f472b6" strokeWidth="2" /><text x="128" y="103" fill="#f9a8d4" fontSize="14">db</text>
    <path d="M120 160V110" stroke="#f472b6" strokeWidth="1.4" strokeDasharray="3 4" /><text x="98" y="136" fill="#f9a8d4" fontSize="15">b</text>
    <circle cx="335" cy="160" r="13" fill="#fb7185" /><text x="322" y="196" fill="#fda4af" fontSize="13">nucleus</text>
    <path d="M60 120H104M60 200H104" stroke="#67e8f9" strokeWidth="2.4" markerEnd="url(#xsec-arrow)" /><text x="36" y="110" fill="#a5f3fc" fontSize="13">beam</text>
    <path d="M136 120 C240 122 300 140 335 152 M136 200 C240 198 300 180 335 168" fill="none" stroke="#67e8f9" strokeWidth="1.6" strokeDasharray="6 5" />
    <path d="M348 150 C430 106 520 62 600 38 M348 144 C426 96 508 50 580 22" fill="none" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#xsec-arrow)" />
    <path d="M335 160L610 160" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 5" />
    <path d="M480 160 A145 145 0 0 0 462 100" fill="none" stroke="#a78bfa" strokeWidth="2" /><text x="490" y="122" fill="#c4b5fd" fontSize="16">θ</text>
    <path d="M462 100 A145 145 0 0 0 448 76" fill="none" stroke="#f472b6" strokeWidth="2.4" /><text x="470" y="86" fill="#f9a8d4" fontSize="14">dθ</text>
    <path d="M335 160L588 34" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="6 5" /><text x="446" y="140" fill="#cbd5e1" fontSize="14">r</text>
    <path d="M600 34V160" stroke="#fde68a" strokeWidth="1.3" strokeDasharray="4 4" /><text x="606" y="104" fill="#fde68a" fontSize="13">r sin θ</text>
    <text x="596" y="24" fill="#f9a8d4" fontSize="13">r dθ</text>
    <text x="24" y="308" fill="#94a3b8" fontSize="13">particles through the ring b → b + db scatter into the cone θ → θ + dθ (after Thornton &amp; Rex)</text>
  </ScientificVisual>;
}

export function FoilSlabVisual() {
  return <ScientificVisual title="Gold foil as a thin slab" description="The gold foil drawn as a thin rectangular slab. Its face has surface area A and its small depth is the thickness t." viewBox="0 0 480 240" className="h-auto w-full">
    <path d="M120 92 H340 V192 H120 Z" fill="#facc15" fillOpacity=".16" stroke="#facc15" strokeWidth="2.2" />
    <path d="M120 92 L164 58 H384 L340 92 Z" fill="#facc15" fillOpacity=".10" stroke="#facc15" strokeWidth="1.8" />
    <path d="M340 92 L384 58 V158 L340 192 Z" fill="#facc15" fillOpacity=".07" stroke="#facc15" strokeWidth="1.8" />
    <text x="200" y="148" fill="#fde68a" fontSize="18">area A</text>
    <path d="M352 200 L396 166" stroke="#67e8f9" strokeWidth="1.6" /><text x="402" y="178" fill="#a5f3fc" fontSize="16">t</text>
    <text x="120" y="228" fill="#94a3b8" fontSize="13">thin slab: volume = A·t; nuclei inside = n·A·t</text>
  </ScientificVisual>;
}

export function AlphaNucleusChargesVisual() {
  return <ScientificVisual title="Alpha particle approaching a magnesium nucleus" description="An alpha particle, a helium ion of charge two e, approaches a magnesium nucleus of twelve protons and twelve neutrons, giving interacting charges q one equals two e and q two equals twelve e." viewBox="0 0 560 250" className="h-auto w-full">
    <defs><marker id="alphamg-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L0 6L8 3Z" fill="#67e8f9" /></marker></defs>
    <circle cx="120" cy="120" r="26" fill="#67e8f9" /><text x="108" y="127" fill="#08111f" fontSize="17" fontWeight="700">α</text>
    <text x="66" y="170" fill="#a5f3fc" fontSize="14">α = He²⁺ · q₁ = +2e</text>
    <path d="M152 120H300" stroke="#67e8f9" strokeWidth="2.6" markerEnd="url(#alphamg-arrow)" />
    <circle cx="400" cy="120" r="52" fill="#fb7185" fillOpacity=".85" />
    {[[-18, -16], [12, -22], [-24, 12], [4, 4], [24, 18], [-4, 28]].map(([dx, dy]) => <circle key={`${dx}${dy}`} cx={400 + dx} cy={120 + dy} r="9" fill="#fde68a" />)}
    <text x="372" y="196" fill="#fda4af" fontSize="14">Mg nucleus: 12p + 12n</text>
    <text x="360" y="46" fill="#fde68a" fontSize="14">q₂ = +12e</text>
    <text x="90" y="234" fill="#94a3b8" fontSize="13">Coulomb repulsion acts between q₁ = 2e and q₂ = 12e</text>
  </ScientificVisual>;
}

export function EMWaveVisual() {
  const wave = (axis: "y" | "z") => Array.from({ length: 161 }, (_, i) => {
    const t = i / 160; const x = 70 + t * 480; const amp = 58 * Math.sin(t * Math.PI * 4);
    return axis === "y" ? `${x.toFixed(1)},${(150 - amp).toFixed(1)}` : `${(x - amp * 0.42).toFixed(1)},${(150 + amp * 0.30).toFixed(1)}`;
  }).join(" ");
  return <ScientificVisual title="Electromagnetic wave" description="A travelling electromagnetic wave. The electric field oscillates in the vertical plane, the magnetic field oscillates in the perpendicular horizontal plane, and the wave moves along the x direction. One wavelength lambda spans two successive crests." viewBox="0 0 640 300" className="h-auto w-full">
    <defs><marker id="emw-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L0 6L8 3Z" fill="#e2e8f0" /></marker></defs>
    <path d="M70 150H600" stroke="#94a3b8" strokeWidth="1.6" markerEnd="url(#emw-arrow)" /><text x="606" y="156" fill="#e2e8f0" fontSize="15">x</text>
    <path d="M70 150V44" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#emw-arrow)" /><text x="56" y="38" fill="#e2e8f0" fontSize="15">y</text>
    <path d="M70 150L26 186" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#emw-arrow)" /><text x="12" y="200" fill="#e2e8f0" fontSize="15">z</text>
    <polyline points={wave("y")} fill="none" stroke="#67e8f9" strokeWidth="2.6" /><text x="112" y="72" fill="#a5f3fc" fontSize="15">electric field E (vertical)</text>
    <polyline points={wave("z")} fill="none" stroke="#f472b6" strokeWidth="2.2" opacity=".9" /><text x="360" y="238" fill="#f9a8d4" fontSize="15">magnetic field B (horizontal)</text>
    <path d="M130 90 H370" stroke="#facc15" strokeWidth="1.5" strokeDasharray="5 4" /><path d="M130 84v12M370 84v12" stroke="#facc15" strokeWidth="1.6" /><text x="238" y="82" fill="#fde68a" fontSize="16">λ</text>
    <text x="440" y="120" fill="#e2e8f0" fontSize="14">direction of travel →</text>
    <text x="70" y="290" fill="#94a3b8" fontSize="13">E ⊥ B ⊥ direction of propagation; both fields oscillate in phase</text>
  </ScientificVisual>;
}

export function VisibleSpectrumStripVisual() {
  const bands = [["V", "#7c3aed", 400], ["I", "#4f46e5", 430], ["B", "#3b82f6", 460], ["G", "#22c55e", 500], ["Y", "#facc15", 565], ["O", "#f97316", 595], ["R", "#ef4444", 630]] as const;
  const x = (nm: number) => 70 + ((nm - 400) / 320) * 500;
  return <ScientificVisual title="Visible range of the electromagnetic spectrum" description="The visible band from 400 to about 720 nanometres divided into violet, indigo, blue, green, yellow, orange and red, in order of increasing wavelength." viewBox="0 0 640 170" className="h-auto w-full">
    {bands.map(([letter, colour, nm], i) => { const next = i < bands.length - 1 ? bands[i + 1][2] : 720; return <g key={letter}><rect x={x(nm)} y="46" width={x(next) - x(nm)} height="52" fill={colour} opacity=".9" /><text x={(x(nm) + x(next)) / 2 - 6} y="79" fill="#08111f" fontSize="17" fontWeight="700">{letter}</text></g>; })}
    <text x="70" y="34" fill="#e2e8f0" fontSize="14">400 nm — higher energy</text><text x="426" y="34" fill="#e2e8f0" fontSize="14">≈ 720 nm — lower energy</text>
    <path d="M70 118H570" stroke="#67e8f9" strokeWidth="2" /><path d="M570 118l-10-5v10z" fill="#67e8f9" />
    <text x="200" y="140" fill="#a5f3fc" fontSize="14">wavelength increases →</text>
    <text x="70" y="162" fill="#94a3b8" fontSize="13">VIBGYOR: violet · indigo · blue · green · yellow · orange · red</text>
  </ScientificVisual>;
}

export function BlackBodyCavityVisual() {
  return <ScientificVisual title="A cavity as a black body: absorption and emission" description="Two cavity sketches at constant temperature. In the first, a ray entering the small hole reflects repeatedly inside and is fully absorbed. In the second, the heated cavity emits radiation outward through the hole. The small hole behaves as an ideal black body." viewBox="0 0 700 290" className="h-auto w-full">
    <defs><marker id="cavity-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L0 6L8 3Z" fill="#facc15" /></marker></defs>
    <circle cx="180" cy="140" r="90" fill="#0f1d32" stroke="#94a3b8" strokeWidth="3" />
    <circle cx="98" cy="106" r="11" fill="#08111f" stroke="#94a3b8" strokeWidth="2" />
    <path d="M20 72L92 102" stroke="#facc15" strokeWidth="2.4" markerEnd="url(#cavity-arrow)" />
    <path d="M104 112L236 176L150 210L228 92L128 170" fill="none" stroke="#facc15" strokeWidth="1.8" strokeDasharray="5 4" />
    <text x="112" y="258" fill="#fde68a" fontSize="15">absorbs: ray trapped inside</text>
    <circle cx="520" cy="140" r="90" fill="#1b2438" stroke="#94a3b8" strokeWidth="3" />
    <circle cx="438" cy="106" r="11" fill="#fb7185" />
    {[[-58, -30], [-64, 0], [-56, 26]].map(([dx, dy], i) => <path key={i} d={`M${438} ${106}l${dx} ${dy}`} stroke="#fb7185" strokeWidth="2.4" markerEnd="url(#cavity-arrow)" />)}
    <text x="452" y="258" fill="#fda4af" fontSize="15">emits: cavity radiation escapes</text>
    <text x="316" y="30" fill="#e2e8f0" fontSize="15">T = constant</text>
    <text x="110" y="284" fill="#94a3b8" fontSize="13">the small hole absorbs everything that enters and emits an ideal spectrum</text>
  </ScientificVisual>;
}

export function WienGraphVisual() {
  const curves = [["100 V", "#fb7185", 220, 66], ["60 V", "#facc15", 262, 108], ["40 V", "#67e8f9", 300, 146], ["20 V", "#a78bfa", 342, 182]] as const;
  return <ScientificVisual title="Energy distribution at different filament powers" description="Curves of the energy density per wavelength interval against wavelength for a filament run at 20, 40, 60 and 100 volts. Higher power gives a hotter filament: the curve is taller and its peak wavelength lambda m shifts toward the visible band between 400 and 700 nanometres." viewBox="0 0 540 320" className="h-auto w-full">
    <path d="M60 25V260H510" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <text x="10" y="40" fill="#e2e8f0" fontSize="14">U_λ</text><text x="452" y="284" fill="#e2e8f0" fontSize="14">λ</text>
    <rect x="112" y="25" width="70" height="235" fill="#a78bfa" opacity=".08" />
    <path d="M112 25V260M182 25V260" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="4 5" />
    <text x="96" y="278" fill="#c4b5fd" fontSize="12">400 nm</text><text x="166" y="278" fill="#c4b5fd" fontSize="12">700 nm</text>
    {curves.map(([label, colour, peak, top]) => <g key={label}><path d={`M62 259 C${peak - 110} 258 ${peak - 66} ${top} ${peak} ${top} C${peak + 74} ${top} ${peak + 130} 244 505 258`} fill="none" stroke={colour} strokeWidth="2.5" /><text x={peak + 10} y={top - 8} fill={colour} fontSize="13">{label}</text></g>)}
    <path d="M220 66V260" stroke="#fb7185" strokeWidth="1.2" strokeDasharray="4 5" opacity=".7" /><text x="206" y="296" fill="#fda4af" fontSize="13">λ_m</text>
    <text x="60" y="316" fill="#94a3b8" fontSize="12">U_λ dλ = energy in the band λ → λ + dλ; hotter → taller, smaller λ_m</text>
  </ScientificVisual>;
}

export function EnergyBandStripVisual() {
  const curve = Array.from({ length: 161 }, (_, i) => { const t = i / 160; const x = 60 + t * 420; const r = t * 10; const y = 240 - 120 * r ** 3 / (Math.exp(r) - 1 + 1e-9); return `${x.toFixed(1)},${Math.min(240, y).toFixed(1)}`; }).slice(1).join(" ");
  return <ScientificVisual title="Energy carried in a narrow wavelength band" description="A black-body distribution curve of energy density against wavelength. A narrow vertical strip of width d lambda is shaded under the curve; its area gives the energy per unit volume in that band." viewBox="0 0 540 300" className="h-auto w-full">
    <path d="M60 25V240H510" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <text x="8" y="40" fill="#e2e8f0" fontSize="14">u(λ)</text><text x="466" y="264" fill="#e2e8f0" fontSize="14">λ</text>
    <polyline points={curve} fill="none" stroke="#67e8f9" strokeWidth="2.6" />
    <rect x="196" y="70" width="16" height="170" fill="#facc15" opacity=".38" />
    <path d="M196 240v8M212 240v8" stroke="#facc15" strokeWidth="1.6" /><text x="188" y="266" fill="#fde68a" fontSize="14">dλ</text>
    <path d="M204 60V36" stroke="#fde68a" strokeWidth="1.4" /><text x="212" y="36" fill="#fde68a" fontSize="13">shaded area = u(λ) dλ</text>
    <text x="60" y="292" fill="#94a3b8" fontSize="12">total energy density = area under the whole curve; the strip isolates the band λ → λ + dλ</text>
  </ScientificVisual>;
}

export function RadiationComparisonPanelsVisual() {
  return <ScientificVisual title="Black-body curves and classical-quantum comparison" description="Two panels. Left: black-body intensity against wavelength for 3000 to 6000 kelvin with the ultraviolet, visible and infrared regions marked; hotter curves peak higher and at shorter wavelength. Right: at 5800 kelvin, the Rayleigh-Jeans law diverges at high frequency, Wien's form fits only the high-frequency side, and the Planck law fits the whole spectrum." viewBox="0 0 760 330" className="h-auto w-full">
    <path d="M50 25V265H360" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <rect x="66" y="25" width="52" height="240" fill="#a78bfa" opacity=".10" /><rect x="118" y="25" width="42" height="240" fill="#facc15" opacity=".10" />
    <text x="60" y="292" fill="#c4b5fd" fontSize="11">ultraviolet</text><text x="118" y="292" fill="#fde68a" fontSize="11">visible</text><text x="196" y="292" fill="#fda4af" fontSize="11">infrared</text>
    {([["6000 K", "#fb7185", 138, 55], ["5000 K", "#facc15", 168, 105], ["4000 K", "#67e8f9", 210, 158], ["3000 K", "#a78bfa", 262, 202]] as const).map(([label, colour, peak, top]) => <g key={label}><path d={`M52 264 C${peak - 60} 263 ${peak - 42} ${top} ${peak} ${top} C${peak + 52} ${top} ${peak + 96} 250 355 262`} fill="none" stroke={colour} strokeWidth="2.4" /><text x={peak + 12} y={top - 6} fill={colour} fontSize="12">{label}</text></g>)}
    <text x="120" y="314" fill="#e2e8f0" fontSize="13">wavelength (Å) →</text><text x="16" y="40" fill="#e2e8f0" fontSize="13">I</text>
    <path d="M420 25V265H730" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <path d="M422 264 C520 262 600 210 726 40" fill="none" stroke="#f472b6" strokeWidth="2.6" /><text x="600" y="92" fill="#f9a8d4" fontSize="13">Rayleigh–Jeans</text>
    <path d="M422 264 C500 262 520 92 578 92 C640 92 668 224 726 252" fill="none" stroke="#67e8f9" strokeWidth="2.8" /><text x="452" y="88" fill="#a5f3fc" fontSize="13">Planck</text>
    <path d="M436 264 C520 254 528 106 582 98 C640 94 670 226 726 254" fill="none" stroke="#facc15" strokeWidth="2" strokeDasharray="6 5" /><text x="612" y="176" fill="#fde68a" fontSize="13">Wien</text>
    <text x="520" y="314" fill="#e2e8f0" fontSize="13">ν [THz] →</text><text x="420" y="40" fill="#e2e8f0" fontSize="13">T = 5800 K</text>
    <text x="386" y="18" fill="#94a3b8" fontSize="12">only the Planck law matches experiment over the entire range</text>
  </ScientificVisual>;
}

export function PhotoelectronEnergyDistributionVisual() {
  return <ScientificVisual title="Energy distribution of photoelectrons" description="The number of emitted photoelectrons against their kinetic energy. Electrons emerge with a spread of energies from zero up to a sharp maximum K max, set by the photon energy minus the work function; deeper-lying electrons lose extra energy escaping the metal." viewBox="0 0 520 300" className="h-auto w-full">
    <path d="M60 25V240H480" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <text x="8" y="40" fill="#e2e8f0" fontSize="13">number of e⁻</text><text x="386" y="264" fill="#e2e8f0" fontSize="13">kinetic energy</text>
    <path d="M62 238 C130 210 220 96 300 82 C338 76 356 108 366 238" fill="none" stroke="#67e8f9" strokeWidth="2.8" />
    <path d="M366 240V60" stroke="#facc15" strokeWidth="1.6" strokeDasharray="5 4" />
    <text x="352" y="46" fill="#fde68a" fontSize="15">K_max = hν − φ</text>
    <text x="96" y="130" fill="#a5f3fc" fontSize="13">electrons from deeper levels</text><text x="96" y="150" fill="#a5f3fc" fontSize="13">emerge with less energy</text>
    <text x="60" y="290" fill="#94a3b8" fontSize="12">no electron exceeds K_max, however intense the light; only ν changes K_max</text>
  </ScientificVisual>;
}

export function SaturationCurrentIntensityGraph() {
  return <ScientificVisual title="Saturation current against light intensity" description="Saturation photocurrent plotted against the intensity of the incident light at fixed frequency. The graph is a straight line through the origin: saturation current is directly proportional to intensity." viewBox="0 0 460 280" className="h-auto w-full">
    <path d="M60 25V225H420" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <text x="10" y="40" fill="#e2e8f0" fontSize="13">saturation</text><text x="10" y="56" fill="#e2e8f0" fontSize="13">current</text><text x="300" y="250" fill="#e2e8f0" fontSize="13">intensity of light</text>
    <path d="M60 225L390 55" stroke="#67e8f9" strokeWidth="3" />
    {[[142, 183], [224, 141], [306, 99]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="4" fill="#facc15" />)}
    <text x="220" y="90" fill="#a5f3fc" fontSize="14">I_sat ∝ intensity</text>
    <text x="60" y="272" fill="#94a3b8" fontSize="12">double intensity → double electrons per second (ν fixed, ν &gt; ν₀)</text>
  </ScientificVisual>;
}

export function PhotocurrentSingleCurveGraph() {
  return <ScientificVisual title="Photocurrent against applied potential" description="Photoelectric current against the applied collector potential. The current is zero at the stopping potential, rises steeply as the potential increases, and levels off at the saturation current once every emitted electron is collected." viewBox="0 0 480 280" className="h-auto w-full">
    <path d="M170 20V225M50 225H440" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <text x="178" y="34" fill="#e2e8f0" fontSize="14">photocurrent I</text><text x="392" y="248" fill="#e2e8f0" fontSize="13">V</text>
    <path d="M50 92h390" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 6" opacity=".6" /><text x="300" y="84" fill="#cbd5e1" fontSize="13">saturation current</text>
    <path d="M104 225 C150 132 220 96 430 92" fill="none" stroke="#67e8f9" strokeWidth="2.8" />
    <circle cx="104" cy="225" r="4" fill="#facc15" /><text x="80" y="248" fill="#fde68a" fontSize="13">−V₀</text>
    <text x="50" y="270" fill="#94a3b8" fontSize="12">at −V₀ the fastest electrons turn back; large V collects all</text>
  </ScientificVisual>;
}

export function V0FrequencyGraph() {
  return <ScientificVisual title="Stopping potential against frequency" description="Stopping potential against the frequency of the incident light. A straight line of slope h over e crosses the frequency axis at the threshold frequency; its dashed extension below the axis meets the potential axis at minus the work function divided by e." viewBox="0 0 480 300" className="h-auto w-full">
    <path d="M70 20V220H440" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <text x="30" y="34" fill="#e2e8f0" fontSize="15">V₀</text><text x="424" y="244" fill="#e2e8f0" fontSize="15">ν</text>
    <path d="M180 220L420 60" stroke="#67e8f9" strokeWidth="3" />
    <path d="M180 220L74 290.7" stroke="#67e8f9" strokeWidth="2" strokeDasharray="6 6" opacity=".7" />
    <circle cx="180" cy="220" r="4.5" fill="#facc15" /><text x="170" y="244" fill="#fde68a" fontSize="15">ν₀</text>
    <path d="M222 220 A42 42 0 0 0 210 200" fill="none" stroke="#f472b6" strokeWidth="2" /><text x="230" y="210" fill="#f9a8d4" fontSize="14">θ, tan θ = h/e</text>
    <text x="82" y="282" fill="#a5f3fc" fontSize="13">intercept → −φ/e</text>
    <text x="196" y="120" fill="#a5f3fc" fontSize="14">slope = h/e (same for every metal)</text>
  </ScientificVisual>;
}

export function V0InverseLambdaGraph() {
  const lines = [["K", "#f472b6", 130], ["Na", "#facc15", 185], ["Li", "#67e8f9", 240]] as const;
  return <ScientificVisual title="Stopping potential against inverse wavelength for three metals" description="Stopping potential against one over wavelength for potassium, sodium and lithium. The three lines are parallel with slope h c over e; potassium cuts the axis first, then sodium, then lithium, in order of increasing work function. Dotted extrapolations continue below the axis." viewBox="0 0 500 300" className="h-auto w-full">
    <path d="M60 20V220H460" fill="none" stroke="#94a3b8" strokeWidth="2" />
    <text x="22" y="34" fill="#e2e8f0" fontSize="15">V₀</text><text x="430" y="244" fill="#e2e8f0" fontSize="15">1/λ</text>
    {lines.map(([metal, colour, x0]) => <g key={metal}><path d={`M${x0} 220L${x0 + 210} 62`} stroke={colour} strokeWidth="2.6" /><path d={`M${x0} 220L${x0 - 52} 259`} stroke={colour} strokeWidth="1.8" strokeDasharray="5 5" opacity=".7" /><circle cx={x0} cy="220" r="4" fill={colour} /><text x={x0 + 196} y="56" fill={colour} fontSize="14">{metal}</text></g>)}
    <text x="70" y="290" fill="#94a3b8" fontSize="12">parallel lines of slope hc/e; φ(K) &lt; φ(Na) &lt; φ(Li)</text>
  </ScientificVisual>;
}

export function CircularOrbitVisual({ showEscape = false }: { showEscape?: boolean }) {
  return <ScientificVisual title={showEscape ? "Electron removed from its orbit to infinity" : "Electron in a circular Bohr orbit"} description={showEscape ? "An electron in a circular orbit around the nucleus is carried away along an outward arrow toward infinity, where its total energy is taken as zero. The energy supplied for this removal is the ionisation energy." : "A single electron moves on a circular orbit of radius r around the central nucleus of charge plus Z e. The radius vector and the instantaneous velocity, tangent to the circle, are marked."} viewBox="0 0 480 280" className="h-auto w-full">
    <defs><marker id={`orbit-arrow-${showEscape ? "esc" : "std"}`} markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L0 6L8 3Z" fill="#67e8f9" /></marker></defs>
    <circle cx="210" cy="145" r="92" fill="none" stroke="#67e8f9" strokeWidth="2" strokeDasharray={showEscape ? "6 5" : undefined} />
    <circle cx="210" cy="145" r="13" fill="#fb7185" /><text x="202" y="151" fill="#08111f" fontSize="14" fontWeight="700">+Ze</text>
    <path d="M210 145L292 103" stroke="#facc15" strokeWidth="2" markerEnd={`url(#orbit-arrow-${showEscape ? "esc" : "std"})`} /><text x="244" y="116" fill="#fde68a" fontSize="16">r</text>
    <circle cx="296" cy="101" r="8" fill="#67e8f9" /><text x="308" y="94" fill="#a5f3fc" fontSize="15">e⁻</text>
    {showEscape ? <>
      <path d="M304 96 C356 68 400 48 444 34" fill="none" stroke="#f472b6" strokeWidth="2.6" markerEnd={`url(#orbit-arrow-esc)`} strokeDasharray="7 5" />
      <text x="386" y="64" fill="#f9a8d4" fontSize="15">to r = ∞ (E = 0)</text>
      <text x="40" y="264" fill="#94a3b8" fontSize="12">work to carry e⁻ from its orbit to rest at ∞ = ionisation energy</text>
    </> : <>
      <path d="M302 92 C318 82 330 76 346 70" fill="none" stroke="#a78bfa" strokeWidth="2.4" markerEnd={`url(#orbit-arrow-std)`} /><text x="352" y="66" fill="#c4b5fd" fontSize="14">v (tangent)</text>
      <text x="60" y="264" fill="#94a3b8" fontSize="12">Coulomb attraction supplies the centripetal force: kZe²/r² = mv²/r</text>
    </>}
  </ScientificVisual>;
}

export function LevelDiagramVisual({ nMax, arrows = [], footer, scaled = false }: { nMax: number; arrows?: Array<{ from: number; to: number; colour?: string; column?: number }>; footer?: string; scaled?: boolean }) {
  const top = 45; const bottom = 245;
  const y = (n: number) => scaled ? bottom - (1 - 1 / (n * n)) / (1 - 1 / ((nMax + 1) * (nMax + 1))) * (bottom - top) : bottom - ((n - 1) / (nMax - 1)) * (bottom - top);
  const columns = arrows.length;
  return <ScientificVisual title={`Energy levels 1 to ${nMax}${arrows.length ? " with transitions" : ""}`} description={`Horizontal energy levels numbered one to ${nMax}${scaled ? ", spaced according to E proportional to minus one over n squared, so higher levels crowd together" : ""}. ${arrows.length ? `${arrows.length} downward transition arrow${arrows.length > 1 ? "s are" : " is"} drawn between levels; each arrow is one emitted photon.` : "No transitions are marked."}`} viewBox="0 0 460 290" className="h-auto w-full">
    {Array.from({ length: nMax }, (_, i) => { const n = i + 1; return <g key={n}><path d={`M85 ${y(n)}H420`} stroke="#94a3b8" strokeWidth="1.8" opacity=".85" /><text x="52" y={y(n) + 5} fill="#e2e8f0" fontSize="14">{`n=${n}`}</text></g>; })}
    {arrows.map(({ from, to, colour = "#facc15", column }, i) => { const x = 120 + ((column ?? i) % Math.max(columns, 1)) * (290 / Math.max(columns, 1)); return <g key={i}><path d={`M${x} ${y(from) + 3}V${y(to) - 8}`} stroke={colour} strokeWidth="2.2" /><path d={`M${x} ${y(to) - 3}l-5 -9h10z`} fill={colour} /></g>; })}
    {footer ? <text x="24" y="282" fill="#94a3b8" fontSize="12">{footer}</text> : null}
  </ScientificVisual>;
}

export function ReducedMassVisual() {
  return <ScientificVisual title="Nucleus and electron about the centre of mass" description="The nucleus and the electron both circle their common centre of mass, which lies very close to the heavy nucleus. On a line through both particles, r one is the nucleus-to-centre distance and r two the centre-to-electron distance, with r one plus r two equal to the separation r." viewBox="0 0 520 300" className="h-auto w-full">
    <circle cx="260" cy="120" r="96" fill="none" stroke="#67e8f9" strokeWidth="1.8" strokeDasharray="5 5" />
    <circle cx="260" cy="120" r="17" fill="none" stroke="#fb7185" strokeWidth="1.6" strokeDasharray="4 4" />
    <circle cx="244" cy="114" r="12" fill="#fb7185" /><text x="238" y="119" fill="#08111f" fontSize="12" fontWeight="700">Nu</text>
    <circle cx="356" cy="120" r="8" fill="#67e8f9" /><text x="368" y="114" fill="#a5f3fc" fontSize="14">e⁻</text>
    <circle cx="260" cy="120" r="3.5" fill="#facc15" /><text x="250" y="102" fill="#fde68a" fontSize="13">com</text>
    <path d="M120 230H460" stroke="#94a3b8" strokeWidth="1.6" />
    <circle cx="180" cy="230" r="10" fill="#fb7185" /><text x="168" y="258" fill="#fda4af" fontSize="13">Nu</text>
    <circle cx="236" cy="230" r="4" fill="#facc15" /><text x="224" y="258" fill="#fde68a" fontSize="13">com</text>
    <circle cx="420" cy="230" r="7" fill="#67e8f9" /><text x="412" y="258" fill="#a5f3fc" fontSize="13">e⁻</text>
    <path d="M180 208H236M236 208H420" stroke="#e2e8f0" strokeWidth="1.2" /><path d="M180 202v12M236 202v12M420 202v12" stroke="#e2e8f0" strokeWidth="1.2" />
    <text x="196" y="198" fill="#e2e8f0" fontSize="13">r₁</text><text x="318" y="198" fill="#e2e8f0" fontSize="13">r₂</text>
    <text x="80" y="290" fill="#94a3b8" fontSize="12">m₁r₁ = m₂r₂, r₁ + r₂ = r — treated exactly by μ = m₁m₂/(m₁+m₂)</text>
  </ScientificVisual>;
}

export function PrismSpectrumVisual() {
  const colours = ["#7c3aed", "#4f46e5", "#3b82f6", "#22c55e", "#facc15", "#f97316", "#ef4444"];
  return <ScientificVisual title="Dispersion of white light by a prism" description="White light or sunlight strikes a triangular prism, deviates, and spreads into a fan of colours from violet to red that lands on a screen as a continuous spectrum." viewBox="0 0 640 300" className="h-auto w-full">
    <path d="M40 150H262" stroke="#f8fafc" strokeWidth="3.4" /><text x="42" y="134" fill="#e2e8f0" fontSize="14">white light / sunlight</text>
    <path d="M300 60 L380 240 L220 240 Z" fill="#67e8f9" fillOpacity=".10" stroke="#67e8f9" strokeWidth="2.4" /><text x="272" y="270" fill="#a5f3fc" fontSize="14">prism</text>
    {colours.map((colour, i) => <path key={colour} d={`M312 158 L560 ${86 + i * 22}`} stroke={colour} strokeWidth="3" />)}
    <path d="M560 70V254" stroke="#cbd5e1" strokeWidth="5" /><text x="548" y="272" fill="#cbd5e1" fontSize="14">screen</text>
    <text x="576" y="92" fill="#c4b5fd" fontSize="12">violet</text><text x="576" y="226" fill="#fca5a5" fontSize="12">red</text>
    <text x="382" y="120" fill="#94a3b8" fontSize="13">deviation δ — violet bends most</text>
    <text x="40" y="292" fill="#94a3b8" fontSize="13">a continuous spectrum: the colours run into one another with no gaps</text>
  </ScientificVisual>;
}

export function SpectrumApparatusVisual({ kind }: { kind: "emission" | "absorption" | "both" }) {
  const panel = (yOff: number, mode: "emission" | "absorption") => {
    const balmer = [30, 58, 118, 208];
    return <g key={mode} transform={`translate(0 ${yOff})`}>
      {mode === "emission" ? <>
        <circle cx="60" cy="70" r="26" fill="#fb7185" opacity=".85" /><text x="26" y="118" fill="#fda4af" fontSize="13">excited sample</text>
      </> : <>
        <circle cx="38" cy="70" r="20" fill="#f8fafc" opacity=".9" /><text x="8" y="106" fill="#e2e8f0" fontSize="12">white light</text>
        <rect x="76" y="52" width="26" height="36" rx="5" fill="#67e8f9" fillOpacity=".25" stroke="#67e8f9" strokeWidth="1.6" /><text x="74" y="122" fill="#a5f3fc" fontSize="12">cool gas</text>
      </>}
      <path d={`M${mode === "emission" ? 88 : 104} 70H172`} stroke="#f8fafc" strokeWidth="2.6" />
      <path d="M178 46V94" stroke="#cbd5e1" strokeWidth="4" /><rect x="175" y="64" width="6" height="12" fill="#08111f" /><text x="160" y="112" fill="#cbd5e1" fontSize="12">slit</text>
      <path d="M228 40 L266 100 L190 100 Z" fill="#67e8f9" fillOpacity=".12" stroke="#67e8f9" strokeWidth="1.8" />
      {[0, 1, 2].map((i) => <path key={i} d={`M232 76 L330 ${52 + i * 22}`} stroke={["#818cf8", "#22d3ee", "#ef4444"][i]} strokeWidth="2.2" />)}
      <rect x="336" y="34" width="264" height="70" rx="6" fill={mode === "emission" ? "#0b1220" : "url(#spectrum-app-band)"} stroke="#334155" strokeWidth="1.4" />
      {balmer.map((dx) => <rect key={dx} x={344 + dx} y="34" width="4" height="70" fill={mode === "emission" ? (dx > 150 ? "#ef4444" : dx > 80 ? "#22d3ee" : "#818cf8") : "#08111f"} />)}
      <text x="336" y="124" fill="#e2e8f0" fontSize="13">{mode === "emission" ? "emission spectrum: bright lines on dark film" : "absorption: dark lines on the continuous band"}</text>
      <text x="560" y="26" fill="#94a3b8" fontSize="11">λ →</text>
    </g>;
  };
  return <ScientificVisual title={kind === "both" ? "Emission and absorption spectrum apparatus" : `${kind === "emission" ? "Emission" : "Absorption"} spectrum apparatus`} description={kind === "both" ? "Two apparatus sketches. Above, light from an excited sample passes through a slit and a prism onto a film, recording bright emission lines. Below, white light passes through a cool absorbing sample, slit and prism, recording dark absorption lines on a continuous band. The line positions coincide." : kind === "emission" ? "Light from an excited sample passes through a slit and a prism and is recorded on a film or detector as bright emission lines at increasing wavelength." : "White light passes through a cool absorbing sample, a slit and a prism and is recorded as dark lines on a continuous band."} viewBox={`0 0 620 ${kind === "both" ? 290 : 150}`} className="h-auto w-full">
    <defs><linearGradient id="spectrum-app-band" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7c3aed" /><stop offset="20%" stopColor="#3b82f6" /><stop offset="42%" stopColor="#22d3ee" /><stop offset="60%" stopColor="#22c55e" /><stop offset="78%" stopColor="#facc15" /><stop offset="100%" stopColor="#ef4444" /></linearGradient></defs>
    {kind === "both" ? <>{panel(0, "emission")}{panel(146, "absorption")}</> : panel(0, kind)}
  </ScientificVisual>;
}

export function EllipseAxesVisual() {
  return <ScientificVisual title="Ellipse with major and minor axes" description="An ellipse with its long horizontal major axis of half-length a and its short vertical minor axis of half-length b, crossing at the centre. One focus is marked on the major axis." viewBox="0 0 480 260" className="h-auto w-full">
    <ellipse cx="240" cy="130" rx="170" ry="95" fill="#67e8f9" fillOpacity=".06" stroke="#67e8f9" strokeWidth="2.4" />
    <path d="M70 130H410" stroke="#facc15" strokeWidth="1.8" /><text x="316" y="122" fill="#fde68a" fontSize="14">major axis (2a)</text>
    <path d="M240 35V225" stroke="#f472b6" strokeWidth="1.8" /><text x="248" y="58" fill="#f9a8d4" fontSize="14">minor axis (2b)</text>
    <circle cx="240" cy="130" r="3.5" fill="#e2e8f0" /><circle cx="381" cy="130" r="5" fill="#fb7185" /><text x="368" y="152" fill="#fda4af" fontSize="13">focus</text>
    <text x="60" y="248" fill="#94a3b8" fontSize="12">in a Sommerfeld orbit the nucleus sits at one focus; a/b = n/K</text>
  </ScientificVisual>;
}

export function FineStructureLevelsVisual() {
  return <ScientificVisual title="Fine-structure splitting of levels" description="Energy levels drawn as horizontal bands. Level one is a single line. Levels two and three are split into closely spaced sub-levels, shown as shaded bands between split lines; under high resolution each Bohr level except the first resolves into fine-structure components." viewBox="0 0 480 280" className="h-auto w-full">
    <path d="M90 235H400" stroke="#94a3b8" strokeWidth="2.4" /><text x="50" y="240" fill="#e2e8f0" fontSize="14">n=1</text>
    <rect x="90" y="138" width="310" height="14" fill="#67e8f9" opacity=".14" /><path d="M90 138H400M90 152H400" stroke="#67e8f9" strokeWidth="1.8" /><text x="50" y="150" fill="#e2e8f0" fontSize="14">n=2</text>
    <rect x="90" y="52" width="310" height="22" fill="#f472b6" opacity=".12" /><path d="M90 52H400M90 74H400" stroke="#f472b6" strokeWidth="1.8" /><path d="M110 71L380 55" stroke="#f472b6" strokeWidth="1.3" strokeDasharray="5 4" /><text x="50" y="68" fill="#e2e8f0" fontSize="14">n=3</text>
    <text x="410" y="240" fill="#94a3b8" fontSize="12">single</text><text x="410" y="150" fill="#a5f3fc" fontSize="12">2 sub-levels</text><text x="410" y="66" fill="#f9a8d4" fontSize="12">3 sub-levels</text>
    <text x="66" y="270" fill="#94a3b8" fontSize="12">level n splits into n fine-structure sub-levels</text>
  </ScientificVisual>;
}

export function MeasurementDisturbanceVisual() {
  const gentleWave = Array.from({ length: 121 }, (_, i) => { const x = 30 + i * 2.4; return `${x.toFixed(1)},${(90 - 34 * Math.sin((x - 30) / 30)).toFixed(1)}`; }).join(" ");
  const gammaWave = Array.from({ length: 121 }, (_, i) => { const x = 410 + i * 1.5; return `${x.toFixed(1)},${(90 - 20 * Math.sin((x - 410) / 5.2)).toFixed(1)}`; }).join(" ");
  return <ScientificVisual title="Why a measurement disturbs the electron" description="Two panels. Left: a long-wavelength, low-energy wave washes past an electron with hardly any kick, but such a coarse wave cannot fix the electron's position. Right: a short-wavelength gamma photon can locate the electron sharply, but the collision knocks the electron away, making its momentum uncertain." viewBox="0 0 760 280" className="h-auto w-full">
    <defs><marker id="dist-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L0 6L8 3Z" fill="#fb7185" /></marker></defs>
    <polyline points={gentleWave} fill="none" stroke="#67e8f9" strokeWidth="2.6" />
    <circle cx="180" cy="152" r="10" fill="#facc15" /><text x="160" y="182" fill="#fde68a" fontSize="13">e⁻ barely disturbed</text>
    <text x="46" y="34" fill="#a5f3fc" fontSize="14">long λ · low energy photon</text>
    <text x="52" y="222" fill="#fda4af" fontSize="15">✗ cannot resolve position (Δx ≳ λ is large)</text>
    <polyline points={gammaWave} fill="none" stroke="#a78bfa" strokeWidth="2.4" />
    <circle cx="592" cy="152" r="10" fill="#facc15" />
    <path d="M600 144 C636 120 664 106 700 92" stroke="#fb7185" strokeWidth="2.6" markerEnd="url(#dist-arrow)" fill="none" />
    <text x="612" y="182" fill="#fde68a" fontSize="13">e⁻ kicked violently</text>
    <text x="446" y="34" fill="#c4b5fd" fontSize="14">short λ γ-ray · high energy photon</text>
    <text x="432" y="222" fill="#fda4af" fontSize="15">✗ position sharp, momentum now unknown</text>
    <text x="120" y="262" fill="#94a3b8" fontSize="13">sharpening Δx demands shorter λ and a harder kick — Δx and Δp cannot both be made small</text>
  </ScientificVisual>;
}

type BoxFill = "up" | "down" | "pair" | "empty";
const boxGlyph: Record<BoxFill, string> = { up: "↑", down: "↓", pair: "↑↓", empty: "" };

export function OrbitalFillRowsVisual({ title, description, rows }: { title: string; description: string; rows: Array<{ label: string; boxes: BoxFill[]; note?: string; verdict?: "ok" | "bad"; boxLabels?: string[]; highlight?: number }> }) {
  const rowHeight = 86;
  const maxBoxes = Math.max(...rows.map((row) => row.boxes.length));
  const width = Math.max(700, 170 + maxBoxes * 54 + 310);
  return <ScientificVisual title={title} description={description} viewBox={`0 0 ${width} ${rows.length * rowHeight + 18}`} className="h-auto w-full">
    {rows.map((row, rowIndex) => {
      const y = 16 + rowIndex * rowHeight;
      return <g key={rowIndex}>
        <text x="16" y={y + 32} fill="#e2e8f0" fontSize="15" fontWeight="700">{row.label}</text>
        {row.verdict ? <text x="16" y={y + 54} fill={row.verdict === "ok" ? "#86efac" : "#fda4af"} fontSize="14">{row.verdict === "ok" ? "✓ correct" : "✗ wrong"}</text> : null}
        {row.boxes.map((fill, boxIndex) => { const x = 170 + boxIndex * 54; const highlighted = row.highlight === boxIndex; return <g key={boxIndex}>
          <rect x={x} y={y} width="46" height="44" rx="5" fill={highlighted ? "#facc15" : "#0f1d32"} fillOpacity={highlighted ? ".22" : "1"} stroke={highlighted ? "#facc15" : "#67e8f9"} strokeWidth="1.6" />
          <text x={x + 23} y={y + 29} textAnchor="middle" fill={fill === "pair" ? "#fde68a" : "#a5f3fc"} fontSize="19" fontWeight="700">{boxGlyph[fill]}</text>
          {row.boxLabels?.[boxIndex] ? <text x={x + 23} y={y + 62} textAnchor="middle" fill="#94a3b8" fontSize="12">{row.boxLabels[boxIndex]}</text> : null}
        </g>; })}
        {row.note ? <text x={170 + row.boxes.length * 54 + 14} y={y + 28} fill="#94a3b8" fontSize="13">{row.note}</text> : null}
      </g>;
    })}
  </ScientificVisual>;
}

export function SubshellBoxesVisual({ filled = false }: { filled?: boolean }) {
  const groups = [["s", 1], ["p", 3], ["d", 5], ["f", 7]] as const;
  return <ScientificVisual title={filled ? "Fully occupied orbital boxes for s, p, d and f" : "Orbital boxes for s, p, d and f subshells"} description={`Rows of orbital boxes: one for an s subshell, three for p, five for d and seven for f.${filled ? " Every box holds a paired up-and-down arrow couple, the maximum of two electrons allowed by the Pauli principle, giving capacities 2, 6, 10 and 14." : " Each box can hold at most two electrons of opposite spin."}`} viewBox="0 0 620 330" className="h-auto w-full">
    {groups.map(([name, count], g) => { const y = 20 + g * 74; return <g key={name}>
      <text x="20" y={y + 30} fill="#a5f3fc" fontSize="16" fontWeight="700">{name}</text>
      {Array.from({ length: count }, (_, i) => <g key={i}><rect x={70 + i * 56} y={y} width="48" height="44" rx="5" fill="#0f1d32" stroke="#67e8f9" strokeWidth="1.6" />{filled ? <text x={94 + i * 56} y={y + 29} textAnchor="middle" fill="#fde68a" fontSize="18" fontWeight="700">↑↓</text> : null}</g>)}
      <text x={70 + count * 56 + 14} y={y + 28} fill="#94a3b8" fontSize="13">{count} orbital{count > 1 ? "s" : ""} · max {count * 2} e⁻</text>
    </g>; })}
    <text x="20" y="322" fill="#94a3b8" fontSize="13">{filled ? "paired arrows = two electrons of opposite spin per orbital (Pauli exclusion)" : "number of orbitals = 2l + 1; each holds at most 2 electrons (Pauli)"}</text>
  </ScientificVisual>;
}

export function SubshellOrderVisual({ degenerate = false }: { degenerate?: boolean }) {
  const multi: Array<[string, number, number]> = [["1s", 0, 268], ["2s", 0, 228], ["2p", 1, 212], ["3s", 0, 186], ["3p", 1, 170], ["4s", 0, 148], ["3d", 2, 138], ["4p", 1, 122], ["5s", 0, 102], ["4d", 2, 90], ["5p", 1, 74], ["6s", 0, 56], ["4f", 3, 46], ["5d", 2, 36]];
  const hydro: Array<[number, string[], number]> = [[1, ["1s"], 268], [2, ["2s", "2p"], 196], [3, ["3s", "3p", "3d"], 126], [4, ["4s", "4p", "4d", "4f"], 62]];
  return <ScientificVisual title={degenerate ? "Degenerate subshells in hydrogen-like species" : "Subshell energy order in multielectron atoms"} description={degenerate ? "Energy levels for a one-electron species. All subshells with the same principal quantum number lie at exactly the same energy: two s equals two p; three s, three p and three d coincide; four s, four p, four d and four f coincide. Energy depends on n only." : "Energy levels of a multielectron atom stacked in filling order with s, p, d and f columns separated. Subshells of the same shell no longer coincide: electron-electron repulsion and penetration make the energy depend on both n and l, so four s lies below three d."} viewBox="0 0 540 300" className="h-auto w-full">
    <path d="M50 16V282" stroke="#94a3b8" strokeWidth="1.8" /><path d="M50 16l-4 10h8z" fill="#94a3b8" /><text x="14" y="30" fill="#e2e8f0" fontSize="13">E</text>
    {degenerate
      ? hydro.map(([n, labels, y]) => <g key={n}>{labels.map((label, i) => <g key={label}><path d={`M${95 + i * 108} ${y}H${175 + i * 108}`} stroke="#67e8f9" strokeWidth="2.4" /><text x={120 + i * 108} y={y - 8} fill="#a5f3fc" fontSize="14">{label}</text></g>)}<text x={505} y={y + 4} fill="#94a3b8" fontSize="13">{`n=${n}`}</text></g>)
      : <>
        {["s", "p", "d", "f"].map((name, column) => <text key={name} x={122 + column * 110} y="30" fill="#c4b5fd" fontSize="14" fontWeight="700">{name}</text>)}
        {multi.map(([label, column, y]) => <g key={label}><path d={`M${95 + column * 110} ${y}H${165 + column * 110}`} stroke={["#67e8f9", "#facc15", "#f472b6", "#a78bfa"][column]} strokeWidth="2.4" /><text x={168 + column * 110} y={y + 4} fill="#e2e8f0" fontSize="12">{label}</text></g>)}
      </>}
    <text x="50" y="296" fill="#94a3b8" fontSize="12">{degenerate ? "one-electron species: E depends only on n — subshells of a shell are degenerate" : "same shell, different l → different energy; note 4s below 3d and 6s below 4f"}</text>
  </ScientificVisual>;
}

export function SubshellZCrossingVisual() {
  const PLOT_L = 84, PLOT_R = 566, PLOT_T = 48, PLOT_B = 712, V_MAX = 7.3;
  const X = (z: number) => PLOT_L + (z / 100) * (PLOT_R - PLOT_L);
  const Y = (v: number) => PLOT_B - (v / V_MAX) * (PLOT_B - PLOT_T);
  const style: Record<string, { c: string; dash?: string; w: number }> = {
    s: { c: "#67e8f9", w: 2 },
    p: { c: "#fbbf24", dash: "7 5", w: 1.7 },
    d: { c: "#f472b6", w: 1.4 },
    f: { c: "#a78bfa", dash: "3 5", w: 1.6 },
  };
  const curves: Array<{ l: string; t: "s" | "p" | "d" | "f"; p: number[][] }> = [
    { l: "1s", t: "s", p: [[0, 1.0], [25, 0.66], [50, 0.5], [75, 0.42], [100, 0.36]] },
    { l: "2s", t: "s", p: [[0, 2.0], [20, 1.35], [40, 1.0], [60, 0.82], [80, 0.71], [100, 0.64]] },
    { l: "2p", t: "p", p: [[0, 1.94], [20, 1.42], [40, 1.06], [60, 0.88], [80, 0.77], [100, 0.7]] },
    { l: "3s", t: "s", p: [[0, 3.0], [18, 2.15], [35, 1.6], [55, 1.25], [75, 1.05], [100, 0.9]] },
    { l: "3p", t: "p", p: [[0, 2.9], [18, 2.22], [35, 1.68], [55, 1.32], [75, 1.1], [100, 0.95]] },
    { l: "3d", t: "d", p: [[0, 2.8], [12, 2.6], [20, 2.3], [24, 2.22], [32, 2.02], [48, 1.66], [68, 1.32], [100, 1.02]] },
    { l: "4s", t: "s", p: [[0, 4.0], [12, 3.05], [19, 2.5], [23, 2.3], [30, 2.15], [48, 1.9], [68, 1.65], [100, 1.44]] },
    { l: "4p", t: "p", p: [[0, 3.9], [18, 3.1], [35, 2.35], [55, 1.9], [75, 1.65], [100, 1.5]] },
    { l: "4d", t: "d", p: [[0, 3.8], [18, 3.2], [38, 2.5], [58, 2.0], [78, 1.72], [100, 1.6]] },
    { l: "4f", t: "f", p: [[0, 3.92], [30, 3.85], [50, 3.72], [57, 3.5], [62, 3.0], [68, 2.4], [76, 2.0], [88, 1.82], [100, 1.72]] },
    { l: "5s", t: "s", p: [[0, 5.0], [20, 3.95], [40, 3.15], [60, 2.78], [80, 2.58], [100, 2.5]] },
    { l: "5p", t: "p", p: [[0, 4.9], [20, 4.05], [40, 3.3], [60, 2.92], [80, 2.72], [100, 2.62]] },
    { l: "5d", t: "d", p: [[0, 4.8], [22, 4.15], [45, 3.5], [65, 3.05], [85, 2.85], [100, 2.75]] },
    { l: "5f", t: "f", p: [[0, 4.85], [30, 4.62], [55, 4.2], [78, 3.9], [92, 3.72], [100, 3.6]] },
    { l: "6s", t: "s", p: [[0, 6.0], [20, 5.0], [42, 4.15], [62, 3.65], [82, 3.32], [100, 3.15]] },
    { l: "6p", t: "p", p: [[0, 5.9], [22, 5.05], [45, 4.35], [65, 3.82], [85, 3.48], [100, 3.32]] },
    { l: "6d", t: "d", p: [[0, 5.8], [25, 5.0], [50, 4.4], [72, 3.9], [90, 3.68], [100, 3.52]] },
    { l: "7s", t: "s", p: [[0, 7.0], [25, 5.9], [50, 4.7], [72, 4.0], [90, 3.75], [100, 3.65]] },
    { l: "7p", t: "p", p: [[0, 6.94], [25, 5.96], [50, 4.82], [72, 4.1], [90, 3.85], [100, 3.78]] },
  ];
  const smooth = (pts: number[][]) => {
    const P = pts.map(([z, v]) => [X(z), Y(v)]);
    let d = `M${P[0][0].toFixed(1)} ${P[0][1].toFixed(1)}`;
    for (let i = 0; i < P.length - 1; i++) {
      const p0 = P[i - 1] || P[i], p1 = P[i], p2 = P[i + 1], p3 = P[i + 2] || P[i + 1];
      const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
      const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += `C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    }
    return d;
  };
  const labels = curves.map((cu) => ({ l: cu.l, c: style[cu.t].c, ey: Y(cu.p[cu.p.length - 1][1]), y: Y(cu.p[cu.p.length - 1][1]) }));
  labels.sort((a, b) => a.y - b.y);
  const GAP = 14.5;
  for (let i = 1; i < labels.length; i++) if (labels[i].y - labels[i - 1].y < GAP) labels[i].y = labels[i - 1].y + GAP;
  return <ScientificVisual title="Subshell energy against atomic number" description="A screened-energy diagram after Latter. The vertical axis is an effective principal quantum number from one to seven and the horizontal axis is atomic number from zero to one hundred. Nineteen curves, one for each subshell from one s up to seven p, all start near their principal quantum number at low Z and fall as the nuclear charge grows. Because they fall at different rates the curves cross: four s dips toward three d near Z twenty, and the four f curve stays near four until about Z sixty then plunges steeply, reproducing the lanthanide contraction. The vertical order of the curves at any atomic number gives the orbital filling order there." viewBox="0 0 660 772" className="mx-auto h-auto w-full max-w-2xl">
    <rect x={PLOT_L} y={PLOT_T} width={PLOT_R - PLOT_L} height={PLOT_B - PLOT_T} fill="none" stroke="#334155" strokeWidth="1.4" />
    {[1, 2, 3, 4, 5, 6, 7].map((v) => <g key={v}><path d={`M${PLOT_L - 6} ${Y(v)}H${PLOT_L}`} stroke="#94a3b8" strokeWidth="1.4" /><text x={PLOT_L - 14} y={Y(v) + 5} textAnchor="end" fill="#cbd5e1" fontSize="15">{v}</text></g>)}
    {[0, 25, 50, 75, 100].map((z) => <g key={z}><path d={`M${X(z)} ${PLOT_B}V${PLOT_B + 6}`} stroke="#94a3b8" strokeWidth="1.4" /><text x={X(z)} y={PLOT_B + 24} textAnchor="middle" fill="#cbd5e1" fontSize="14">{z}</text></g>)}
    <text x="26" y={(PLOT_T + PLOT_B) / 2} transform={`rotate(-90 26 ${(PLOT_T + PLOT_B) / 2})`} textAnchor="middle" fill="#e2e8f0" fontSize="16">Principal Quantum number</text>
    <text x={(PLOT_L + PLOT_R) / 2} y={PLOT_B + 52} textAnchor="middle" fill="#e2e8f0" fontSize="16">Atomic number</text>
    {curves.map((cu) => { const st = style[cu.t]; return <path key={cu.l} d={smooth(cu.p)} fill="none" stroke={st.c} strokeWidth={st.w} strokeDasharray={st.dash} strokeLinecap="round" />; })}
    {labels.map((lab) => <g key={lab.l}><path d={`M${PLOT_R} ${lab.ey}L${PLOT_R + 24} ${lab.y}`} stroke={lab.c} strokeWidth="0.8" opacity=".7" /><text x={PLOT_R + 28} y={lab.y + 4} fill={lab.c} fontSize="13" fontStyle="italic">{lab.l}</text></g>)}
    <g transform="translate(96 60)">
      {([["s", "s"], ["p", "p"], ["d", "d"], ["f", "f"]] as const).map(([lbl, t], i) => <g key={lbl} transform={`translate(${i * 60} 0)`}><path d="M0 0H26" stroke={style[t].c} strokeWidth={style[t].w} strokeDasharray={style[t].dash} /><text x="32" y="4" fill={style[t].c} fontSize="13" fontStyle="italic">{lbl}</text></g>)}
    </g>
  </ScientificVisual>;
}

export function PenultimateShellVisual() {
  const shells = [["valence (outermost)", 128, "#67e8f9"], ["penultimate shell", 96, "#facc15"], ["pre/anti-penultimate", 64, "#f472b6"]] as const;
  return <ScientificVisual title="Penultimate and pre-penultimate shells" description="Concentric electron shells around the nucleus. The outermost ring is the valence shell, the second-outermost is the penultimate shell, and the ring inside that is the pre-penultimate or anti-penultimate shell." viewBox="0 0 560 300" className="h-auto w-full">
    <circle cx="200" cy="150" r="128" fill="none" stroke="#67e8f9" strokeWidth="2" />
    <circle cx="200" cy="150" r="96" fill="none" stroke="#facc15" strokeWidth="2" />
    <circle cx="200" cy="150" r="64" fill="none" stroke="#f472b6" strokeWidth="2" />
    <circle cx="200" cy="150" r="32" fill="none" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 4" />
    <circle cx="200" cy="150" r="11" fill="#fb7185" /><text x="194" y="156" fill="#08111f" fontSize="13" fontWeight="700">+</text>
    {shells.map(([label, r, colour], i) => <g key={label}><path d={`M${200 + r * Math.cos(-0.5 + i * 0.42)} ${150 + r * Math.sin(-0.5 + i * 0.42)} L${372} ${64 + i * 78}`} stroke={colour} strokeWidth="1.3" strokeDasharray="4 4" /><text x="378" y={68 + i * 78} fill={colour} fontSize="13">{label}</text></g>)}
    <text x="60" y="292" fill="#94a3b8" fontSize="12">penultimate = (n−1) shell; pre/anti-penultimate = (n−2) shell</text>
  </ScientificVisual>;
}

export function SpinOrbitalMomentVisual() {
  return <ScientificVisual title="Spin and orbital magnetic moments" description="An electron sphere spins about its own axis, giving the spin magnetic moment mu s, while its orbital circulation around the nucleus gives the orbital magnetic moment mu l. Both moments are drawn as arrows along their respective axes." viewBox="0 0 520 290" className="h-auto w-full">
    <defs><marker id="moment-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L0 6L8 3Z" fill="#facc15" /></marker></defs>
    <ellipse cx="260" cy="170" rx="150" ry="62" fill="none" stroke="#67e8f9" strokeWidth="1.8" strokeDasharray="6 5" />
    <circle cx="260" cy="170" r="11" fill="#fb7185" /><text x="253" y="176" fill="#08111f" fontSize="12" fontWeight="700">+</text>
    <circle cx="404" cy="146" r="22" fill="#67e8f9" fillOpacity=".25" stroke="#67e8f9" strokeWidth="2" />
    <path d="M394 132 A22 14 0 1 1 392 158" fill="none" stroke="#a5f3fc" strokeWidth="1.4" /><text x="428" y="182" fill="#a5f3fc" fontSize="13">spinning e⁻</text>
    <path d="M404 120V70" stroke="#facc15" strokeWidth="2.6" markerEnd="url(#moment-arrow)" /><text x="414" y="82" fill="#fde68a" fontSize="15">μ_s</text>
    <path d="M260 100V38" stroke="#f472b6" strokeWidth="2.6" markerEnd="url(#moment-arrow)" /><text x="270" y="52" fill="#f9a8d4" fontSize="15">μ_l</text>
    <path d="M260 104V166" stroke="#f472b6" strokeWidth="1.2" strokeDasharray="4 4" opacity=".6" />
    <text x="86" y="120" fill="#94a3b8" fontSize="13">orbital circulation → μ_l</text>
    <text x="60" y="272" fill="#94a3b8" fontSize="12">spin and orbital moments combine; the spin-only value dominates in practice</text>
  </ScientificVisual>;
}

export function CandidateFunctionsVisual() {
  const panels: Array<[string, string, string]> = [
    ["rising, unbounded", "#fb7185", "M14 96 C46 92 74 74 96 16"],
    ["bell-shaped", "#67e8f9", "M12 92 C40 90 44 24 58 24 C72 24 78 90 104 92"],
    ["S-shaped loop", "#fb7185", "M22 88 C86 76 92 26 52 30 C24 34 40 66 96 52"],
    ["V-shaped cusp", "#fb7185", "M16 30 L58 88 L100 26"],
    ["sigmoid", "#67e8f9", "M12 90 C48 88 66 26 102 22"],
    ["upward parabola", "#fb7185", "M16 24 C36 96 80 96 100 20"],
  ];
  return <ScientificVisual title="Candidate wave-function sketches" description="Six sketched functions of position: a rising unbounded curve, a bell-shaped curve, an S-shaped loop that is multi-valued, a V-shaped cusp, a sigmoid, and an upward parabola. Dotted vertical reference lines mark test positions used to judge whether each curve is single-valued, finite and continuous." viewBox="0 0 760 260" className="h-auto w-full">
    {panels.map(([label, colour, d], i) => { const px = 20 + (i % 3) * 250; const py = 12 + Math.floor(i / 3) * 122; return <g key={label} transform={`translate(${px} ${py})`}>
      <path d="M6 96H112M10 8V100" stroke="#64748b" strokeWidth="1.2" />
      <path d="M58 8V100" stroke="#facc15" strokeWidth="1" strokeDasharray="3 4" opacity=".7" />
      <path d={d} fill="none" stroke={colour} strokeWidth="2.2" />
      <text x="120" y="58" fill={colour} fontSize="12">{label}</text>
    </g>; })}
    <text x="20" y="252" fill="#94a3b8" fontSize="12">test each sketch against the conditions: single-valued at every x, everywhere finite, continuous with a continuous slope</text>
  </ScientificVisual>;
}

export function SineWaveVisual() {
  const points = Array.from({ length: 141 }, (_, i) => { const x = 20 + i * 3; return `${x},${(70 - 42 * Math.sin((i / 140) * Math.PI * 4)).toFixed(1)}`; }).join(" ");
  return <ScientificVisual title="Sine wave" description="Two full cycles of a smooth sine wave about a horizontal axis." viewBox="0 0 460 140" className="h-auto w-full">
    <path d="M20 70H440" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 5" />
    <polyline points={points} fill="none" stroke="#67e8f9" strokeWidth="2.6" />
  </ScientificVisual>;
}

export function MonochromaticWaveVisual() {
  const trace = (x0: number, amp: number, cycles: number, width: number) => Array.from({ length: 141 }, (_, i) => { const t = i / 140; return `${(x0 + t * width).toFixed(1)},${(120 - amp * Math.sin(t * Math.PI * 2 * cycles)).toFixed(1)}`; }).join(" ");
  return <ScientificVisual title="A monochromatic wave in time and in space" description="Left panel: the electric field at a fixed point plotted against time — a perfect sinusoid extending indefinitely in both directions with equal period brackets marked. Right panel: the same wave in space, with the wavelength between crests, the amplitude from axis to crest, the displacement as a vertical double arrow, and the direction of travel along the axis." viewBox="0 0 780 250" className="h-auto w-full">
    <defs><marker id="mono-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0 0L0 6L7 3Z" fill="#e2e8f0" /></marker></defs>
    <path d="M20 120H360" stroke="#64748b" strokeWidth="1.2" /><text x="336" y="142" fill="#cbd5e1" fontSize="12">t</text>
    <polyline points={trace(24, 44, 3.5, 330)} fill="none" stroke="#fb7185" strokeWidth="2.4" />
    <text x="20" y="30" fill="#fda4af" fontSize="13">E at one point: −∞ ← t → +∞</text>
    {[52, 146, 240].map((x) => <g key={x}><path d={`M${x} 182H${x + 94}`} stroke="#facc15" strokeWidth="1.4" /><path d={`M${x} 176v12M${x + 94} 176v12`} stroke="#facc15" strokeWidth="1.4" /><text x={x + 38} y="200" fill="#fde68a" fontSize="11">T</text></g>)}
    <path d="M420 120H760" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#mono-arrow)" /><text x="648" y="142" fill="#cbd5e1" fontSize="12">direction of travel</text>
    <polyline points={trace(424, 44, 3, 320)} fill="none" stroke="#67e8f9" strokeWidth="2.4" />
    <path d="M452 60H558" stroke="#facc15" strokeWidth="1.4" /><path d="M452 54v12M558 54v12" stroke="#facc15" strokeWidth="1.4" /><text x="480" y="50" fill="#fde68a" fontSize="12">wavelength λ (crest to crest)</text>
    <path d="M600 120V76" stroke="#a78bfa" strokeWidth="1.8" markerEnd="url(#mono-arrow)" /><text x="608" y="92" fill="#c4b5fd" fontSize="12">amplitude</text>
    <path d="M672 96V144" stroke="#f472b6" strokeWidth="1.8" /><path d="M672 96l-4 8h8zM672 144l-4 -8h8z" fill="#f472b6" /><text x="680" y="102" fill="#f9a8d4" fontSize="12">displacement</text>
    <text x="20" y="240" fill="#94a3b8" fontSize="12">a truly monochromatic wave has one λ and one T — and therefore no beginning or end</text>
  </ScientificVisual>;
}

export function RadialFunctionCurvesVisual({ nodes }: { nodes: 0 | 1 }) {
  const zeroY = nodes === 0 ? 240 : 150;
  const amp = nodes === 0 ? 185 : 105;
  const plot = (f: (r: number) => number, colour: string, rMax: number) => {
    const values = Array.from({ length: 201 }, (_, i) => f((i / 200) * rMax));
    const peak = Math.max(...values.map(Math.abs));
    return { points: values.map((v, i) => `${(60 + (i / 200) * 420).toFixed(1)},${(zeroY - (v / peak) * amp).toFixed(1)}`).join(" "), colour };
  };
  const curves = nodes === 0
    ? [{ label: "1s", ...plot((r) => 2 * Math.exp(-r), "#67e8f9", 8) }, { label: "2p", ...plot((r) => r * Math.exp(-r / 2), "#facc15", 12) }, { label: "3d", ...plot((r) => r * r * Math.exp(-r / 3), "#f472b6", 18) }]
    : [{ label: "2s", ...plot((r) => (2 - r) * Math.exp(-r / 2), "#67e8f9", 12) }, { label: "3p", ...plot((r) => r * (6 - r) * Math.exp(-r / 3), "#facc15", 16) }];
  return <ScientificVisual title={nodes === 0 ? "Radial functions with no radial node" : "Radial functions with one radial node"} description={nodes === 0 ? "Exact hydrogen radial functions R of r for the nodeless family where n minus l minus one is zero. The one s curve starts at a finite value on the vertical axis and decays smoothly to zero, while the two p and three d curves start at zero, rise to a single maximum and decay; none crosses the axis." : "Exact hydrogen radial functions for the one-node family where n minus l minus one is one. The two s curve starts at a finite positive value, falls through zero at the radial node and becomes negative before returning toward zero; the three p curve starts at zero, rises, then crosses the axis once."} viewBox="0 0 540 320" className="h-auto w-full">
    <path d={`M60 25V${zeroY + 35}M60 ${zeroY}H500`} fill="none" stroke="#94a3b8" strokeWidth="1.8" />
    <text x="14" y="40" fill="#e2e8f0" fontSize="14">R(r)</text><text x="478" y={zeroY + 22} fill="#e2e8f0" fontSize="14">r</text>
    {curves.map(({ label, points, colour }) => <polyline key={label} points={points} fill="none" stroke={colour} strokeWidth="2.4" />)}
    {nodes === 0 ? <>
      <text x="68" y="44" fill="#a5f3fc" fontSize="14">1s</text><text x="138" y="42" fill="#fde68a" fontSize="14">2p</text><text x="208" y="42" fill="#f9a8d4" fontSize="14">3d</text>
      <text x="60" y="304" fill="#94a3b8" fontSize="12">1s starts at K; 2p and 3d start at the origin — no axis crossing (n − l − 1 = 0)</text>
    </> : <>
      <text x="452" y="138" fill="#a5f3fc" fontSize="14">2s</text><text x="452" y="196" fill="#fde68a" fontSize="14">3p</text>
      <circle cx="130" cy="150" r="9" fill="none" stroke="#f472b6" strokeWidth="1.8" /><text x="112" y="132" fill="#f9a8d4" fontSize="12">node</text>
      <circle cx="218" cy="150" r="9" fill="none" stroke="#f472b6" strokeWidth="1.8" />
      <text x="60" y="304" fill="#94a3b8" fontSize="12">2s starts at aK, 3p at the origin; each crosses the axis once (n − l − 1 = 1)</text>
    </>}
  </ScientificVisual>;
}

export function Dz2SumVisual() {
  const clover = (cx: number, plane: string, positiveAxis: string) => <g transform={`translate(${cx} 120)`}>
    <path d="M-66 0H66M0 -66V66" stroke="#64748b" strokeWidth="1.1" />
    <ellipse cx="0" cy="-36" rx="17" ry="32" fill="#86efac" fillOpacity=".35" stroke="#4ade80" strokeWidth="1.7" />
    <ellipse cx="0" cy="36" rx="17" ry="32" fill="#86efac" fillOpacity=".35" stroke="#4ade80" strokeWidth="1.7" />
    <ellipse cx="-36" cy="0" rx="32" ry="17" fill="#f8fafc" fillOpacity=".2" stroke="#e2e8f0" strokeWidth="1.7" />
    <ellipse cx="36" cy="0" rx="32" ry="17" fill="#f8fafc" fillOpacity=".2" stroke="#e2e8f0" strokeWidth="1.7" />
    <text x="0" y="-74" textAnchor="middle" fill="#e2e8f0" fontSize="13">z</text><text x="76" y="4" fill="#e2e8f0" fontSize="13">{positiveAxis}</text>
    <text x="0" y="98" textAnchor="middle" fill="#a5f3fc" fontSize="14">{plane}</text>
  </g>;
  return <ScientificVisual title="d z squared as a sum of two cloverleaves" description="Left: a four-lobe cloverleaf in the y z plane labelled d z squared minus y squared. Middle: a matching cloverleaf in the x z plane labelled d z squared minus x squared. Adding the two gives the real d z squared orbital on the right: two lobes along the z axis plus an equatorial ring around the origin." viewBox="0 0 760 260" className="h-auto w-full">
    {clover(110, "d(z²−y²)", "y")}{clover(340, "d(z²−x²)", "x")}
    <text x="216" y="126" fill="#e2e8f0" fontSize="26">+</text><text x="446" y="126" fill="#e2e8f0" fontSize="26">=</text>
    <g transform="translate(600 120)">
      <path d="M-70 0H70M0 -70V70" stroke="#64748b" strokeWidth="1.1" />
      <path d="M0 -6 C-26 -18 -25 -62 0 -70 C25 -62 26 -18 0 -6Z" fill="#86efac" fillOpacity=".4" stroke="#4ade80" strokeWidth="1.8" />
      <path d="M0 6 C-26 18 -25 62 0 70 C25 62 26 18 0 6Z" fill="#86efac" fillOpacity=".4" stroke="#4ade80" strokeWidth="1.8" />
      <ellipse cx="0" cy="0" rx="56" ry="15" fill="#fb923c" fillOpacity=".35" stroke="#fb923c" strokeWidth="1.8" />
      <text x="0" y="-78" textAnchor="middle" fill="#e2e8f0" fontSize="13">z</text>
      <text x="0" y="98" textAnchor="middle" fill="#fdba74" fontSize="14">d z² (lobes + ring)</text>
    </g>
    <text x="150" y="250" fill="#94a3b8" fontSize="12">the two cloverleaf combinations are not independent — their normalised sum is the fifth real d orbital, d z²</text>
  </ScientificVisual>;
}

export function POrbitalTrioVisual() {
  const lobes = (x: number, angle: number, positive: string, negative: string, label: string, node: string) => <g key={label} transform={`translate(${x} 110)`}>
    <path d="M-70 0H70M0 -70V70" stroke="#475569" strokeWidth="1.1" />
    <text x="74" y="4" fill="#94a3b8" fontSize="12">{label === "2pᵧ" ? "y" : "x"}</text>
    <text x="5" y="-60" fill="#94a3b8" fontSize="12">{label === "2p_z" ? "z" : "y"}</text>
    <path d="M-74 0H74" stroke="#f8fafc" strokeOpacity=".55" strokeWidth="1.3" strokeDasharray="5 5" transform={`rotate(${angle + 90})`} />
    <ellipse cx="-37" cy="0" rx="36" ry="22" fill="url(#lgPink)" stroke={negative} strokeWidth="1.6" transform={`rotate(${angle})`} filter="url(#lobeGlow)" />
    <ellipse cx="37" cy="0" rx="36" ry="22" fill="url(#lgCyan)" stroke={positive} strokeWidth="1.6" transform={`rotate(${angle})`} filter="url(#lobeGlow)" />
    <circle r="3.5" fill="#fbbf24" />
    <text x="0" y="92" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontWeight="700">{label}</text>
    <text x="0" y="112" textAnchor="middle" fill="#94a3b8" fontSize="12">nodal plane: {node}</text>
  </g>;
  return <ScientificVisual title="The three 2p orbitals" description="Three panels show the mutually perpendicular 2p dumbbells. 2p x lies along the x axis with the y z nodal plane, 2p y along y with the z x nodal plane, and 2p z along z with the x y nodal plane. Colours mark the opposite signs of the wave function on either side of each nodal plane." viewBox="0 0 760 250" className="h-auto w-full">
    {LOBE_DEFS}
    {lobes(130, 0, "#67e8f9", "#f472b6", "2pₓ", "yz")}
    {lobes(380, -45, "#a78bfa", "#fbbf24", "2pᵧ", "zx")}
    {lobes(630, 90, "#34d399", "#fb7185", "2p_z", "xy")}
    <text x="20" y="244" fill="#94a3b8" fontSize="13">each 2p orbital has one angular nodal plane through the nucleus; the dashed line marks it in cross-section</text>
  </ScientificVisual>;
}

export function DOrbitalGalleryVisual({ n }: { n: number }) {
  const rings = Math.max(0, n - 3);
  const tiles = [
    { sub: "z²", kind: "axial" as const, ax: ["x", "z"] },
    { sub: "xy", kind: "clover" as const, offset: 45, ax: ["x", "y"] },
    { sub: "yz", kind: "clover" as const, offset: 45, ax: ["y", "z"] },
    { sub: "zx", kind: "clover" as const, offset: 45, ax: ["x", "z"] },
    { sub: "x²−y²", kind: "clover" as const, offset: 0, ax: ["x", "y"] },
  ];
  return <ScientificVisual title={`The five ${n}d orbitals`} description={`A glossy gallery of the five real ${n}d orbitals with labelled axes: d z squared with two axial lobes and an equatorial ring, then the four cloverleaf orbitals d xy, d yz, d zx and d x squared minus y squared. Cyan and pink mark opposite signs of the wave function. ${rings ? `Dashed inner circles indicate the ${rings} radial node${rings > 1 ? "s" : ""} of the ${n}d set.` : "The 3d set has no radial node."}`} viewBox="0 0 940 250" className="h-auto w-full">
    {LOBE_DEFS}
    {tiles.map((tile, i) => {
      const x = 98 + i * 187; const y = 108;
      return <g key={tile.sub}>
        <path d={`M${x - 72} ${y}H${x + 72}M${x} ${y - 72}V${y + 72}`} stroke="#475569" strokeWidth="1.1" />
        <text x={x + 76} y={y + 4} fill="#94a3b8" fontSize="12">{tile.ax[0]}</text>
        <text x={x + 6} y={y - 62} fill="#94a3b8" fontSize="12">{tile.ax[1]}</text>
        {tile.kind === "axial" ? <>
          {[-90, 90].map((a) => { const rad = a * Math.PI / 180; const cx = x + Math.cos(rad) * 42; const cy = y + Math.sin(rad) * 42; return <ellipse key={a} cx={cx} cy={cy} rx="15" ry="28" fill="url(#lgCyan)" stroke="#a5f3fc" strokeWidth="1.6" filter="url(#lobeGlow)" />; })}
          <ellipse cx={x} cy={y} rx="42" ry="12" fill="url(#lgPink)" stroke="#f9a8d4" strokeWidth="1.6" filter="url(#lobeGlow)" />
        </> : [0, 1, 2, 3].map((j) => { const deg = (tile.offset ?? 0) + j * 90; const a = deg * Math.PI / 180; const cx = x + Math.cos(a) * 43; const cy = y + Math.sin(a) * 43; return <ellipse key={j} cx={cx} cy={cy} rx="27" ry="13" transform={`rotate(${deg} ${cx} ${cy})`} fill={j % 2 ? "url(#lgPink)" : "url(#lgCyan)"} stroke={j % 2 ? "#f9a8d4" : "#a5f3fc"} strokeWidth="1.6" filter="url(#lobeGlow)" />; })}
        {Array.from({ length: rings }, (_, r) => <circle key={r} cx={x} cy={y} r={11 + r * 8} fill="none" stroke="#fde68a" strokeWidth="1" strokeDasharray="3 3" opacity=".85" />)}
        <circle cx={x} cy={y} r="3" fill="#fbbf24" />
        <OrbitalLabel x={x} y={212} shell={`${n}d`} sub={tile.sub} />
      </g>;
    })}
    <text x="20" y="243" fill="#94a3b8" fontSize="12">cyan/pink mark opposite signs; {rings ? `dashed circles = ${rings} radial node${rings > 1 ? "s" : ""} (n − l − 1 = ${rings})` : "no radial node (n − l − 1 = 0)"}</text>
  </ScientificVisual>;
}

export function FOrbitalGalleryVisual({ n, set }: { n: number; set: "general" | "cubic" }) {
  const rings = Math.max(0, n - 4);
  type Shape = { sub: string; kind: "axial" | "rosette"; angle?: number; petals?: number; offset?: number; ax: [string, string] };
  const shapes: Shape[] = set === "general" ? [
    { sub: "z³", kind: "axial", angle: -90, ax: ["x", "z"] },
    { sub: "xz²", kind: "axial", angle: 0, ax: ["x", "z"] },
    { sub: "yz²", kind: "axial", angle: 42, ax: ["y", "z"] },
    { sub: "xyz", kind: "rosette", petals: 8, offset: 22.5, ax: ["x", "y"] },
    { sub: "z(x²−y²)", kind: "rosette", petals: 8, offset: 0, ax: ["x", "z"] },
    { sub: "x(x²−3y²)", kind: "rosette", petals: 6, offset: 0, ax: ["x", "y"] },
    { sub: "y(3x²−y²)", kind: "rosette", petals: 6, offset: 30, ax: ["x", "y"] },
  ] : [
    { sub: "z³", kind: "axial", angle: -90, ax: ["x", "z"] },
    { sub: "x³", kind: "axial", angle: 0, ax: ["x", "y"] },
    { sub: "y³", kind: "axial", angle: 42, ax: ["y", "z"] },
    { sub: "xyz", kind: "rosette", petals: 8, offset: 22.5, ax: ["x", "y"] },
    { sub: "z(x²−y²)", kind: "rosette", petals: 8, offset: 0, ax: ["x", "z"] },
    { sub: "x(z²−y²)", kind: "rosette", petals: 8, offset: 11, ax: ["y", "z"] },
    { sub: "y(z²−x²)", kind: "rosette", petals: 8, offset: 34, ax: ["x", "z"] },
  ];
  return <ScientificVisual title={`The seven ${n}f orbitals (${set} set)`} description={`A glossy gallery of the seven real ${n}f orbitals in the ${set} set with labelled axes. The axial members show two large opposite-phase lobes with a double collar of rings around the waist, and the remaining members are multi-lobed rosettes with alternating phase. Green marks the positive phase and white the negative phase.${rings ? ` Dashed inner circles indicate the ${rings} spherical radial node${rings > 1 ? "s" : ""}.` : ""}`} viewBox="0 0 780 470" className="h-auto w-full">
    {LOBE_DEFS}
    {shapes.map((sh, i) => {
      const x = 100 + (i % 4) * 195; const y = 100 + Math.floor(i / 4) * 210;
      return <g key={sh.sub}>
        <path d={`M${x - 76} ${y}H${x + 76}M${x} ${y - 76}V${y + 76}`} stroke="#475569" strokeWidth="1" />
        <text x={x + 80} y={y + 4} fill="#94a3b8" fontSize="11">{sh.ax[0]}</text>
        <text x={x + 5} y={y - 66} fill="#94a3b8" fontSize="11">{sh.ax[1]}</text>
        {sh.kind === "axial" ? (() => { const a = (sh.angle ?? -90) * Math.PI / 180; const deg = sh.angle ?? -90; return <>
          {[1, -1].map((s) => { const cx = x + Math.cos(a) * 45 * s; const cy = y + Math.sin(a) * 45 * s; return <ellipse key={s} cx={cx} cy={cy} rx="30" ry="15" transform={`rotate(${deg} ${cx} ${cy})`} fill={s > 0 ? "url(#lgGreen)" : "url(#lgWhite)"} stroke={s > 0 ? "#86efac" : "#f1f5f9"} strokeWidth="1.6" filter="url(#lobeGlow)" />; })}
          {[1, -1].map((s) => { const cx = x + Math.cos(a) * 13 * s; const cy = y + Math.sin(a) * 13 * s; return <ellipse key={`c${s}`} cx={cx} cy={cy} rx="10" ry="32" transform={`rotate(${deg} ${cx} ${cy})`} fill={s > 0 ? "url(#lgWhite)" : "url(#lgGreen)"} stroke={s > 0 ? "#f1f5f9" : "#86efac"} strokeWidth="1.4" filter="url(#lobeGlow)" />; })}
        </>; })() : Array.from({ length: sh.petals ?? 8 }, (_, j) => { const k = sh.petals ?? 8; const deg = (sh.offset ?? 0) + j * (360 / k); const a = deg * Math.PI / 180; const cx = x + Math.cos(a) * 42; const cy = y + Math.sin(a) * 42; return <ellipse key={j} cx={cx} cy={cy} rx={k === 6 ? 26 : 23} ry={k === 6 ? 12 : 10} transform={`rotate(${deg} ${cx} ${cy})`} fill={j % 2 ? "url(#lgWhite)" : "url(#lgGreen)"} stroke={j % 2 ? "#f1f5f9" : "#86efac"} strokeWidth="1.5" filter="url(#lobeGlow)" />; })}
        {Array.from({ length: rings }, (_, r) => <circle key={r} cx={x} cy={y} r={10 + r * 7} fill="none" stroke="#67e8f9" strokeWidth="1" strokeDasharray="3 3" opacity=".85" />)}
        <circle cx={x} cy={y} r="2.5" fill="#fbbf24" />
        <OrbitalLabel x={x} y={y + 96} shell={`${n}f`} sub={sh.sub} />
      </g>;
    })}
    <text x="540" y="380" fill="#86efac" fontSize="13">green = + phase</text>
    <text x="540" y="400" fill="#e2e8f0" fontSize="13">white = − phase</text>
    <text x="20" y="458" fill="#94a3b8" fontSize="12">glossy boundary-surface cross-sections{rings ? `; dashed circles = ${rings} spherical node${rings > 1 ? "s" : ""} (n − l − 1 = ${rings})` : " (n − l − 1 = 0: no radial node)"}</text>
  </ScientificVisual>;
}

export function ElectronDensityGridVisual() {
  const rnd = (i: number) => { const v = Math.sin(i * 12.9898) * 43758.5453; return v - Math.floor(v); };
  const cols = [
    { label: "1s", sub: "n=1, l=0", psi: (r: number) => 2 * Math.exp(-r), rMax: 5.5, nodes: [] as number[] },
    { label: "2s", sub: "n=2, l=0", psi: (r: number) => (2 - r) * Math.exp(-r / 2), rMax: 11, nodes: [2] },
    { label: "3s", sub: "n=3, l=0", psi: (r: number) => (27 - 18 * r + 2 * r * r) * Math.exp(-r / 3), rMax: 17, nodes: [1.902, 7.098] },
  ];
  const X0 = [55, 300, 545]; const W = 180;
  const CLOUD_Y = 128; const CLOUD_R = 86;
  const rows = [
    { y0: 265, h: 72, label: "ψ(r)", signed: true },
    { y0: 392, h: 78, label: "ψ²(r)", signed: false },
    { y0: 512, h: 82, label: "4πr²ψ²(r)", signed: false },
  ];
  return <ScientificVisual title="Electron density in the 1s, 2s and 3s orbitals" description="A three-column comparison of the 1s, 2s and 3s orbitals computed from the exact hydrogen radial functions. Top row: dot-density clouds — 1s is a single ball, 2s shows a core plus one outer shell, 3s a core plus two shells, with dashed circles at the radial nodes. Second row: the radial wave function, which decays monotonically for 1s, crosses zero once for 2s and twice for 3s. Third row: its square, which is never negative and touches zero at each node. Bottom row: the radial distribution function with one, two and three humps; the tallest peak marks the most probable radius." viewBox="0 0 770 640" className="h-auto w-full">
    {cols.map((c, ci) => {
      const cx = X0[ci] + W / 2; const scale = CLOUD_R / c.rMax;
      const grid = 420;
      const weights = Array.from({ length: grid }, (_, g) => { const r = ((g + 0.5) / grid) * c.rMax; const p = c.psi(r); return r * r * p * p; });
      const total = weights.reduce((a, b) => a + b, 0);
      const cum: number[] = []; let acc = 0;
      for (const w of weights) { acc += w; cum.push(acc / total); }
      const dots = Array.from({ length: 300 }, (_, i) => {
        const t = (i + 0.55 * rnd(i * 3 + ci * 7919)) / 300;
        let lo = 0, hi = grid - 1;
        while (lo < hi) { const mid = (lo + hi) >> 1; if (cum[mid] < t) lo = mid + 1; else hi = mid; }
        const r = ((lo + rnd(i * 5 + ci * 131)) / grid) * c.rMax * scale;
        const ang = i * 2.399963 + rnd(i * 7 + ci * 17) * 0.5;
        return [cx + r * Math.cos(ang), CLOUD_Y + r * Math.sin(ang)];
      });
      const maxAbs = (f: (r: number) => number) => { let m = 0; for (let g = 1; g <= grid; g++) { const v = Math.abs(f((g / grid) * c.rMax)); if (v > m) m = v; } return m; };
      const curve = (f: (r: number) => number, y0: number, h: number, signed: boolean) => {
        const m = maxAbs(f); const base = signed ? y0 + h * 0.55 : y0 + h;
        const amp = signed ? h * 0.55 : h;
        return Array.from({ length: 161 }, (_, g) => { const r = (g / 160) * c.rMax; const v = f(Math.max(r, 0.02)) / m; return `${(X0[ci] + (r / c.rMax) * W).toFixed(1)},${(base - v * amp).toFixed(1)}`; }).join(" ");
      };
      const rdf = (r: number) => { const p = c.psi(r); return r * r * p * p; };
      let rPeak = 0, best = 0;
      for (let g = 1; g <= 600; g++) { const r = (g / 600) * c.rMax; const v = rdf(r); if (v > best) { best = v; rPeak = r; } }
      return <g key={c.label}>
        <text x={cx} y="24" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="700">{c.label}</text>
        <text x={cx} y="42" textAnchor="middle" fill="#94a3b8" fontSize="12">{c.sub}</text>
        <path d={`M${cx - CLOUD_R - 6} ${CLOUD_Y}H${cx + CLOUD_R + 6}M${cx} ${CLOUD_Y - CLOUD_R - 6}V${CLOUD_Y + CLOUD_R + 6}`} stroke="#475569" strokeWidth="1" />
        {dots.map(([dx, dy], i) => <circle key={i} cx={dx.toFixed(1)} cy={dy.toFixed(1)} r="1.15" fill="#bae6fd" opacity=".8" />)}
        {c.nodes.map((nr) => <circle key={nr} cx={cx} cy={CLOUD_Y} r={nr * scale} fill="none" stroke="#f472b6" strokeWidth="1.1" strokeDasharray="4 4" opacity=".9" />)}
        {rows.map((row, ri) => {
          const f = ri === 0 ? c.psi : ri === 1 ? (r: number) => c.psi(r) ** 2 : rdf;
          const base = row.signed ? row.y0 + row.h * 0.55 : row.y0 + row.h;
          return <g key={ri}>
            <path d={`M${X0[ci]} ${row.y0 - 8}V${row.y0 + row.h + 4}M${X0[ci]} ${base}H${X0[ci] + W + 4}`} stroke="#94a3b8" strokeWidth="1.2" />
            <polyline points={curve(f, row.y0, row.h, row.signed)} fill="none" stroke="#67e8f9" strokeWidth="1.9" />
            <text x={X0[ci] + W + 2} y={base + 14} fill="#94a3b8" fontSize="11">r</text>
            {ri < 2 ? c.nodes.map((nr) => { const nx = X0[ci] + (nr / c.rMax) * W; return <circle key={nr} cx={nx} cy={base} r="3" fill="none" stroke="#f472b6" strokeWidth="1.4" />; }) : <>
              <path d={`M${X0[ci] + (rPeak / c.rMax) * W} ${base}V${row.y0 + 8}`} stroke="#fde68a" strokeWidth="1" strokeDasharray="3 3" />
              <text x={X0[ci] + (rPeak / c.rMax) * W + 4} y={row.y0 + 16} fill="#fde68a" fontSize="11">r max</text>
            </>}
          </g>;
        })}
      </g>;
    })}
    <text x="8" y="300" fill="#e2e8f0" fontSize="13" transform="rotate(-90 8 300)" />
    <text x="55" y="248" fill="#a5f3fc" fontSize="13" fontWeight="700">ψ(r) — radial wave function</text>
    <text x="55" y="375" fill="#a5f3fc" fontSize="13" fontWeight="700">ψ²(r) — probability density</text>
    <text x="55" y="495" fill="#a5f3fc" fontSize="13" fontWeight="700">4πr²ψ²(r) — radial distribution</text>
    <text x="330" y="248" fill="#f9a8d4" fontSize="12">pink circles/rings = radial nodes (ψ = 0)</text>
    <text x="20" y="630" fill="#94a3b8" fontSize="12">computed from the exact hydrogen radial functions; humps = n − l, radial nodes = n − l − 1; tallest RDF peak = most probable radius</text>
  </ScientificVisual>;
}

export function DotDensityOrbitalVisual({ orbitals }: { orbitals: string[] }) {
  const rnd = (i: number) => { const v = Math.sin(i * 12.9898) * 43758.5453; return v - Math.floor(v); };
  const laguerre = (k: number, a: number, x: number): number => { if (k === 0) return 1; if (k === 1) return 1 + a - x; let p0 = 1, p1 = 1 + a - x; for (let j = 2; j <= k; j++) { const p2 = ((2 * j - 1 + a - x) * p1 - (j - 1 + a) * p0) / j; p0 = p1; p1 = p2; } return p1; };
  const R = (n: number, l: number, r: number) => Math.pow(r, l) * Math.exp(-r / n) * laguerre(n - l - 1, 2 * l + 1, (2 * r) / n);
  const cols = Math.min(orbitals.length, 3);
  const rows = Math.ceil(orbitals.length / cols);
  const T = 208; const W = cols * T + 20; const H = rows * (T + 26) + 16;
  return <ScientificVisual title={`Dot-density pictures: ${orbitals.join(", ")}`} description={`Monte-Carlo style dot-density cross-sections of the ${orbitals.join(", ")} hydrogen orbitals computed from the exact radial functions. Bright inner rings appear where the probability density peaks; dark gaps between rings are the radial nodes. For p orbitals the density vanishes on the horizontal nodal plane, giving two lobes.`} viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" style={{ filter: "none" }}>
    {orbitals.map((name, oi) => {
      const n = Number(name[0]); const l = name[1] === "s" ? 0 : 1;
      const x0 = 10 + (oi % cols) * T; const y0 = 10 + Math.floor(oi / cols) * (T + 26);
      const cx = x0 + T / 2 - 4; const cy = y0 + T / 2 - 4; const rad = T / 2 - 14;
      const rMax = 4 * n + 3;
      const grid = 300;
      const w: number[] = []; let acc = 0;
      for (let g = 0; g < grid; g++) { const r = ((g + 0.5) / grid) * rMax; const v = R(n, l, r); acc += r * r * v * v; w.push(acc); }
      const dots: string[] = [];
      for (let i = 0; i < 850; i++) {
        const t = ((i + 0.5) / 850) * acc;
        let lo = 0, hi = grid - 1;
        while (lo < hi) { const mid = (lo + hi) >> 1; if (w[mid] < t) lo = mid + 1; else hi = mid; }
        const r = (((lo + rnd(i * 3 + oi * 7717)) / grid) * rMax / rMax) * rad;
        const u = rnd(i * 5 + oi * 131);
        let px: number, py: number;
        if (l === 0) { const a = i * 2.399963 + rnd(i * 7 + oi * 17); px = cx + r * Math.cos(a); py = cy + r * Math.sin(a); }
        else { const c = Math.cbrt(2 * u - 1); const s = Math.sqrt(Math.max(0, 1 - c * c)); const phi = rnd(i * 11 + oi * 41) * Math.PI * 2; px = cx + r * s * Math.cos(phi); py = cy - r * c; }
        dots.push(`M${px.toFixed(1)} ${py.toFixed(1)}h.01`);
      }
      return <g key={name}>
        <rect x={x0} y={y0} width={T - 8} height={T - 8} fill="#000" stroke="#1e293b" strokeWidth="1" />
        <path d={dots.join("")} stroke="#f8fafc" strokeWidth="1.7" strokeLinecap="round" opacity=".9" />
        <rect x={x0 + 8} y={y0 + 8} width="34" height="20" rx="2" fill="#cbd5e1" /><text x={x0 + 25} y={y0 + 22} textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="700">{name.toUpperCase()}</text>
      </g>;
    })}
    <text x="12" y={H - 2} fill="#94a3b8" fontSize="12">computed from exact hydrogen R(r); bright rings = density maxima, dark gaps = radial nodes (Born: |ψ|²)</text>
  </ScientificVisual>;
}
