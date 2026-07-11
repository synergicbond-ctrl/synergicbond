import type { ReactNode, SVGProps } from "react";

type VisualProps = SVGProps<SVGSVGElement> & { title: string; description: string; children: ReactNode };

export function ScientificVisual({ title, description, children, ...props }: VisualProps) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return <svg role="img" aria-labelledby={`${id}-title ${id}-desc`} {...props}>
    <title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{description}</desc>{children}
  </svg>;
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

export function ElectromagneticSpectrumVisual() {
  const bands = [["Radio", "#6366f1"], ["Microwave", "#0ea5e9"], ["Infrared", "#ef4444"], ["Visible", "#facc15"], ["UV", "#a855f7"], ["X-ray", "#38bdf8"], ["γ", "#f8fafc"]];
  return <ScientificVisual title="Electromagnetic spectrum" description="The electromagnetic spectrum arranged from long wavelength and low frequency radio waves to short wavelength and high frequency gamma rays." viewBox="0 0 760 150" className="h-auto w-full">
    <text x="24" y="24" fill="#cbd5e1" fontSize="16">long wavelength · low frequency</text><text x="490" y="24" fill="#cbd5e1" fontSize="16">short wavelength · high frequency</text>
    {bands.map(([label, colour], index) => <g key={label}><rect x={20 + index * 103} y="48" width="98" height="48" rx="7" fill={colour} opacity=".88" /><text x={25 + index * 103} y="77" fill="#08111f" fontSize="13" fontWeight="700">{label}</text></g>)}
    <path d="M28 122H730" stroke="#67e8f9" strokeWidth="2" /><path d="M730 122l-10-5v10z" fill="#67e8f9" /><text x="270" y="143" fill="#a5f3fc" fontSize="14">frequency and photon energy increase →</text>
  </ScientificVisual>;
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
