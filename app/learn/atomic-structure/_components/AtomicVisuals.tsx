import type { ReactNode, SVGProps } from "react";

type VisualProps = SVGProps<SVGSVGElement> & { title: string; description: string; children: ReactNode };

export function ScientificVisual({ title, description, children, ...props }: VisualProps) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return <svg role="img" aria-labelledby={`${id}-title ${id}-desc`} {...props}>
    <title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{description}</desc>{children}
  </svg>;
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
  return <ScientificVisual title="Cathode-ray discharge tube" description="A low-pressure gas discharge tube with a negative cathode on the left, a positive anode on the right, and an electron beam travelling to a zinc-sulphide fluorescent screen." viewBox="0 0 700 250" className="h-auto w-full"><defs><marker id="crt-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#67e8f9" /></marker></defs><rect x="95" y="65" width="500" height="105" rx="52" fill="none" stroke="#94a3b8" strokeWidth="3"/><path d="M65 118H120M580 118H640" stroke="#cbd5e1" strokeWidth="3"/><path d="M165 86V150M510 86V150" stroke="#facc15" strokeWidth="7"/><text x="144" y="78" fill="#fde68a" fontSize="15">cathode (−)</text><text x="480" y="78" fill="#fde68a" fontSize="15">anode (+)</text><path d="M185 118H475" stroke="#67e8f9" strokeWidth="3" strokeDasharray="8 6" markerEnd="url(#crt-arrow)"/><text x="285" y="106" fill="#a5f3fc" fontSize="15">cathode rays (e⁻)</text><rect x="530" y="84" width="12" height="68" fill="#a78bfa"/><text x="504" y="198" fill="#c4b5fd" fontSize="14">ZnS screen</text><text x="230" y="230" fill="#94a3b8" fontSize="13">low pressure gas · high potential difference</text></ScientificVisual>;
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
  return <ScientificVisual title="Shapes of s and p orbitals" description="Conceptual shapes of the s and p orbitals. The s orbital is a sphere centred on the nucleus. The three p orbitals are dumbbells directed along the x, y and z axes, each with a nodal plane through the nucleus." viewBox="0 0 760 240" className="h-auto w-full">
    <circle cx="100" cy="110" r="58" fill="#67e8f9" opacity=".35" stroke="#67e8f9" strokeWidth="2" /><text x="88" y="206" fill="#e2e8f0" fontSize="15">s</text>
    <g><ellipse cx="255" cy="110" rx="45" ry="22" fill="#f472b6" opacity=".35" stroke="#f472b6" strokeWidth="2" transform="rotate(0 300 110)" /><ellipse cx="345" cy="110" rx="45" ry="22" fill="#f472b6" opacity=".35" stroke="#f472b6" strokeWidth="2" /><path d="M300 40V180" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 5" /><text x="278" y="206" fill="#e2e8f0" fontSize="15">pₓ</text></g>
    <g><ellipse cx="480" cy="65" rx="22" ry="45" fill="#facc15" opacity=".35" stroke="#facc15" strokeWidth="2" /><ellipse cx="480" cy="155" rx="22" ry="45" fill="#facc15" opacity=".35" stroke="#facc15" strokeWidth="2" /><path d="M410 110H550" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 5" /><text x="464" y="228" fill="#e2e8f0" fontSize="15">p_z</text></g>
    <g><ellipse cx="628" cy="78" rx="40" ry="20" fill="#a78bfa" opacity=".35" stroke="#a78bfa" strokeWidth="2" transform="rotate(-35 660 110)" /><ellipse cx="692" cy="142" rx="40" ry="20" fill="#a78bfa" opacity=".35" stroke="#a78bfa" strokeWidth="2" transform="rotate(-35 660 110)" /><text x="642" y="206" fill="#e2e8f0" fontSize="15">p_y</text></g>
    <text x="12" y="26" fill="#94a3b8" fontSize="13">conceptual boundary surfaces — not exact isosurfaces; each p orbital has a nodal plane (dashed)</text>
  </ScientificVisual>;
}

export function AufbauFillingVisual() {
  const cells: Array<[number, number]> = [[1, 0], [2, 0], [2, 1], [3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [4, 3], [5, 0], [5, 1], [5, 2], [5, 3], [6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [8, 0]];
  const names = ["s", "p", "d", "f"];
  const cx = (l: number) => 100 + l * 90;
  const cy = (n: number) => 48 + (n - 1) * 34;
  const diagonals = Array.from({ length: 8 }, (_, i) => i + 1).map((sum) => cells.filter(([n, l]) => n + l === sum));
  return <ScientificVisual title="Aufbau diagonal filling order" description="Chart of subshells one s through eight s arranged by shell and subshell, with diagonal arrows sweeping through equal n plus l groups to show the filling order one s, two s, two p, three s, three p, four s, three d and so on." viewBox="0 0 480 320" className="h-auto w-full">
    {cells.map(([n, l]) => <text key={`${n}${l}`} x={cx(l) - 14} y={cy(n) + 5} fill="#e2e8f0" fontSize="15">{`${n}${names[l]}`}</text>)}
    {diagonals.map((group, index) => {
      if (group.length === 0) return null;
      const start = group[0];
      const end = group[group.length - 1];
      const x1 = cx(start[1]) + 16;
      const y1 = cy(start[0]) - 12;
      const x2 = cx(end[1]) - 22;
      const y2 = cy(end[0]) + 12;
      return <g key={index}><path d={`M${x1} ${y1}L${x2} ${y2}`} stroke="#fb7185" strokeWidth="1.8" opacity=".85" /><path d={`M${x2} ${y2}l10 -3l-4 9z`} fill="#fb7185" /></g>;
    })}
    <text x="12" y="310" fill="#94a3b8" fontSize="13">follow the arrows top to bottom: lower n+l fills first; equal n+l fills lower n first</text>
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
  return <ScientificVisual title="d z squared orbital and its nodal cones" description="Cross-section of the real d z squared angular function. Positive lobes lie on the z axis, a negative toroidal region surrounds the origin in the x y plane, and two conical nodal surfaces make an angle 54.7 degrees with the positive and negative z axes." viewBox="0 0 500 310" className="h-auto w-full">
    <path d="M250 22V274M56 155H446" stroke="#94a3b8" strokeWidth="1.6" /><text x="258" y="33" fill="#e2e8f0" fontSize="14">z</text><text x="425" y="147" fill="#e2e8f0" fontSize="14">r⊥</text>
    <path d="M250 150 C190 124 193 55 250 40 C307 55 310 124 250 150Z" fill="#67e8f9" fillOpacity=".32" stroke="#67e8f9" strokeWidth="2" />
    <path d="M250 160 C190 186 193 255 250 270 C307 255 310 186 250 160Z" fill="#67e8f9" fillOpacity=".32" stroke="#67e8f9" strokeWidth="2" />
    <ellipse cx="250" cy="155" rx="112" ry="31" fill="#f472b6" fillOpacity=".25" stroke="#f472b6" strokeWidth="2" /><ellipse cx="250" cy="155" rx="45" ry="12" fill="#08111f" stroke="#f472b6" strokeWidth="1.5" />
    <path d="M250 155L109 252M250 155L391 252M250 155L109 58M250 155L391 58" stroke="#facc15" strokeWidth="1.5" strokeDasharray="6 5" /><text x="82" y="48" fill="#fde68a" fontSize="13">nodal cones: θ = 54.7°</text>
    <text x="258" y="88" fill="#a5f3fc" fontSize="18">+</text><text x="258" y="238" fill="#a5f3fc" fontSize="18">+</text><text x="342" y="160" fill="#f9a8d4" fontSize="18">−</text><circle cx="250" cy="155" r="4" fill="#fbbf24" /><text x="258" y="176" fill="#fde68a" fontSize="12">nucleus</text>
    <text x="18" y="296" fill="#94a3b8" fontSize="12">signs refer to Y₂,₀; rotation of this cross-section gives the toroidal region and conical nodes</text>
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
