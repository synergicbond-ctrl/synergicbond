// Auto-generated dark-theme structure figures for the Dipole Moment JEE Advanced page.
// Each entry's geometry is verified chemistry, converted from the master notes' light-theme
// figures. Only the color palette changed to match the site's dark textbook theme.

export const DIPOLE_STRUCTURES: Record<string, { svg: string; caption: string; size?: "sm" | "md" | "lg" }> = {
  "dipole-arrow": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 90" width="100%">
<rect x="1" y="1" width="378.0" height="88.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

  <title>Dipole arrow convention</title>
  <circle cx="60" cy="45" r="9" fill="#1c2b3a" stroke="#d3dbe6" stroke-width="2"/>
  <text x="56" y="49" font-size="13" fill="#d3dbe6">H</text>
  <circle cx="180" cy="45" r="11" fill="#5fd382" stroke="#d3dbe6" stroke-width="2"/>
  <text x="174" y="50" font-size="13" fill="#fff">Cl</text>
  <line x1="71" y1="45" x2="169" y2="45" stroke="#d3dbe6" stroke-width="2"/>
  <line x1="40" y1="70" x2="140" y2="70" stroke="#ff6b6b" stroke-width="2.5" marker-end="url(#arrM)"/>
  <text x="35" y="65" font-size="12" fill="#ff6b6b">+</text>
  <text x="60" y="88" font-size="12" text-anchor="middle" fill="#d3dbe6">δ<tspan baseline-shift="super" font-size="9">+</tspan></text>
  <text x="140" y="88" font-size="12" text-anchor="middle" fill="#d3dbe6">δ<tspan baseline-shift="super" font-size="9">−</tspan></text>
  <defs><marker id="arrM" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0,10 3,0 6" fill="#ff6b6b"/></marker></defs>
</svg>`,
    caption: "Dipole arrow convention — the arrow points toward the more electronegative atom; the crossed tail marks the electropositive end.",
  },
  "vector-triangle": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 150" width="100%">
<rect x="1" y="1" width="318.0" height="148.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

  <title>Vector addition triangle</title>
  <line x1="60" y1="120" x2="230" y2="120" stroke="#d3dbe6" stroke-width="2" marker-end="url(#arrV)"/>
  <text x="140" y="140" font-size="13" text-anchor="middle" fill="#d3dbe6">μ₁</text>
  <line x1="60" y1="120" x2="170" y2="35" stroke="#d3dbe6" stroke-width="2" marker-end="url(#arrV)"/>
  <text x="95" y="65" font-size="13" fill="#d3dbe6">μ₂</text>
  <path d="M 60 105 A 18 18 0 0 1 78 100" fill="none" stroke="#ff6b6b" stroke-width="1.5"/>
  <text x="82" y="103" font-size="12" fill="#ff6b6b">θ</text>
  <defs><marker id="arrV" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0,10 3,0 6" fill="#d3dbe6"/></marker></defs>
</svg>`,
    caption: "Two bond-moment vectors mu1 and mu2 separated by angle theta, added by the parallelogram rule.",
  },
  "hcl-bond": {
    size: "sm",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 110" width="100%">
<rect x="1" y="1" width="258.0" height="108.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<circle cx="70" cy="55" r="10" fill="#1c2b3a" stroke="#d3dbe6" stroke-width="2"/><text x="66" y="60" font-size="13" fill="#d3dbe6">H</text>
<circle cx="150" cy="55" r="12" fill="#5fd382" stroke="#d3dbe6" stroke-width="2"/><text x="143" y="60" font-size="13" fill="#fff">Cl</text>
<line x1="82" y1="55" x2="138" y2="55" stroke="#d3dbe6" stroke-width="2"/>
<line x1="70" y1="85" x2="150" y2="85" stroke="#ff6b6b" stroke-width="2.5" marker-end="url(#arrB)"/>
<text x="95" y="103" font-size="12" fill="#ff6b6b">μ(H–Cl) = 1.03 D</text>
<defs><marker id="arrB" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0,10 3,0 6" fill="#ff6b6b"/></marker></defs>
</svg>`,
    caption: "Bond dipole of H-Cl: mu = 1.03 D, directed toward chlorine.",
  },
  "co2-cancellation": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" width="100%">
<rect x="1" y="1" width="298.0" height="148.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="150" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">CO₂ — polar bonds, nonpolar molecule</text>
<circle cx="80" cy="70" r="10" fill="#ff7a68" stroke="#d3dbe6" stroke-width="2"/><text x="76" y="75" font-size="12" fill="#d3dbe6">O</text>
<circle cx="150" cy="70" r="9" fill="#3a4a5c" stroke="#d3dbe6" stroke-width="2"/><text x="146" y="75" font-size="12" fill="#fff">C</text>
<circle cx="220" cy="70" r="10" fill="#ff7a68" stroke="#d3dbe6" stroke-width="2"/><text x="216" y="75" font-size="12" fill="#d3dbe6">O</text>
<line x1="91" y1="70" x2="140" y2="70" stroke="#d3dbe6" stroke-width="2"/>
<line x1="160" y1="70" x2="209" y2="70" stroke="#d3dbe6" stroke-width="2"/>
<line x1="80" y1="105" x2="50" y2="105" stroke="#ff6b6b" stroke-width="2" marker-end="url(#arrC)"/>
<line x1="220" y1="105" x2="250" y2="105" stroke="#ff6b6b" stroke-width="2" marker-end="url(#arrC)"/>
<text x="150" y="130" font-size="12" text-anchor="middle" fill="#d3dbe6">μ₁ + μ₂ = 0  (equal, opposite, linear)</text>
<defs><marker id="arrC" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0,10 3,0 6" fill="#ff6b6b"/></marker></defs>
</svg>`,
    caption: "CO2: polar C=O bonds, but the linear geometry forces the two bond moments to cancel exactly.",
  },
  "homopolar-origin": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 170" width="100%">
<rect x="1" y="1" width="318.0" height="168.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="160" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">Origin of the Intrinsic Homopolar Dipole</text>
<circle cx="220" cy="95" r="55" fill="none" stroke="#f4a94f" stroke-width="2" stroke-dasharray="4,3"/>
<text x="220" y="32" font-size="11" text-anchor="middle" fill="#d3dbe6">A (larger/diffuse orbital)</text>
<circle cx="110" cy="95" r="32" fill="none" stroke="#76dce8" stroke-width="2" stroke-dasharray="4,3"/>
<text x="110" y="160" font-size="11" text-anchor="middle" fill="#d3dbe6">B (compact orbital)</text>
<ellipse cx="165" cy="95" rx="26" ry="30" fill="#cfe8f7" opacity="0.7"/>
<line x1="185" y1="120" x2="145" y2="120" stroke="#76dce8" stroke-width="2.2" marker-end="url(#arrH)"/>
<text x="165" y="140" font-size="11" text-anchor="middle" fill="#76dce8">μ<tspan baseline-shift="sub" font-size="9">h</tspan> (toward B)</text>
<defs><marker id="arrH" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0,10 3,0 6" fill="#76dce8"/></marker></defs>
</svg>`,
    caption: "Origin of the intrinsic homopolar dipole: the overlap electron cloud shifts toward the atom using the more compact orbital, even at zero electronegativity difference.",
  },
  "hcl-lone-pairs": {
    size: "sm",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 205" width="100%">
<rect x="1" y="1" width="258.0" height="203.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="130" y="18" font-size="12" text-anchor="middle" font-weight="bold" fill="#d3dbe6">Cl in sp³ hybridisation</text>
<line x1="130" y1="30" x2="130" y2="170" stroke="#999" stroke-width="1" stroke-dasharray="2,2"/>
<text x="139" y="35" font-size="10" fill="#d3dbe6">z</text>
<circle cx="130" cy="70" r="7" fill="#1c2b3a" stroke="#d3dbe6" stroke-width="1.5"/><text x="126" y="74" font-size="11" fill="#d3dbe6">H</text>
<circle cx="130" cy="110" r="11" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.5"/><text x="124" y="115" font-size="11" fill="#fff">Cl</text>
<line x1="130" y1="77" x2="130" y2="100" stroke="#d3dbe6" stroke-width="2"/>
<path d="M 130 122 L 90 150" stroke="#76dce8" stroke-width="1.5" marker-end="url(#arrLp)"/>
<path d="M 130 122 L 130 165" stroke="#76dce8" stroke-width="1.5" marker-end="url(#arrLp)"/>
<path d="M 130 122 L 170 150" stroke="#76dce8" stroke-width="1.5" marker-end="url(#arrLp)"/>
<path d="M 130 118 A 15 15 0 0 1 105 140" fill="none" stroke="#ff6b6b" stroke-width="1"/>
<text x="94" y="130" font-size="10" fill="#ff6b6b">71°</text>
<text x="130" y="190" font-size="10" text-anchor="middle" fill="#8fa0b3">three lone pairs (sp³)</text>
<defs><marker id="arrLp" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto"><polygon points="0 0,8 2.5,0 5" fill="#76dce8"/></marker></defs>
</svg>`,
    caption: "HCl: three sp3 lone pairs on Cl, each at about 71 degrees from the H-Cl bond axis, reinforcing the electronegativity-based bond moment.",
  },
  "co-resonance": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 110" width="100%">
<rect x="1" y="1" width="338.0" height="108.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="70" y="20" font-size="11" fill="#d3dbe6">Structure I: <tspan font-family="serif">:C≡O:</tspan></text>
<circle cx="50" cy="60" r="9" fill="#3a4a5c" stroke="#d3dbe6" stroke-width="1.5"/><text x="46" y="64" font-size="11" fill="#fff">C</text>
<circle cx="95" cy="60" r="9" fill="#ff7a68" stroke="#d3dbe6" stroke-width="1.5"/><text x="91" y="64" font-size="11" fill="#d3dbe6">O</text>
<line x1="60" y1="55" x2="85" y2="55" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="60" y1="60" x2="85" y2="60" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="60" y1="65" x2="85" y2="65" stroke="#d3dbe6" stroke-width="1.5"/>
<text x="45" y="85" font-size="9" text-anchor="middle" fill="#d3dbe6">FC −1</text>
<text x="95" y="85" font-size="9" text-anchor="middle" fill="#d3dbe6">FC +1</text>
<line x1="130" y1="60" x2="165" y2="60" stroke="#d3dbe6" stroke-width="1.5" marker-end="url(#arrD)"/>
<text x="200" y="20" font-size="11" fill="#d3dbe6">Structure II (dative): <tspan font-family="serif">C=O</tspan> ⁻C≡O⁺</text>
<circle cx="220" cy="60" r="9" fill="#3a4a5c" stroke="#d3dbe6" stroke-width="1.5"/><text x="216" y="64" font-size="11" fill="#fff">C</text>
<circle cx="270" cy="60" r="9" fill="#ff7a68" stroke="#d3dbe6" stroke-width="1.5"/><text x="266" y="64" font-size="11" fill="#d3dbe6">O</text>
<line x1="230" y1="56" x2="260" y2="56" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="230" y1="64" x2="260" y2="64" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="285" y1="60" x2="320" y2="60" stroke="#bca7f7" stroke-width="2" marker-end="url(#arrDat)"/>
<text x="300" y="80" font-size="9" fill="#bca7f7">μd → toward C</text>
<defs>
<marker id="arrD" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto"><polygon points="0 0,8 2.5,0 5" fill="#d3dbe6"/></marker>
<marker id="arrDat" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto"><polygon points="0 0,8 2.5,0 5" fill="#bca7f7"/></marker>
</defs>
</svg>`,
    caption: "CO resonance: the covalent triple-bond form versus the dative-bond contributor. The dative moment opposes the electronegativity-based moment, nearly cancelling it.",
  },
  "cis-trans-dichloroethene": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 130" width="100%">
<rect x="1" y="1" width="338.0" height="128.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="80" y="18" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">cis (μ≠0)</text>
<line x1="40" y1="70" x2="90" y2="70" stroke="#d3dbe6" stroke-width="2.5"/>
<line x1="20" y1="45" x2="40" y2="70" stroke="#d3dbe6" stroke-width="2"/><circle cx="15" cy="40" r="7" fill="#1c2b3a" stroke="#d3dbe6"/><text x="11" y="44" font-size="9" fill="#d3dbe6">H</text>
<line x1="20" y1="95" x2="40" y2="70" stroke="#d3dbe6" stroke-width="2"/><circle cx="15" cy="100" r="8" fill="#5fd382" stroke="#d3dbe6"/><text x="10" y="104" font-size="9" fill="#fff">Cl</text>
<line x1="110" y1="45" x2="90" y2="70" stroke="#d3dbe6" stroke-width="2"/><circle cx="115" cy="40" r="7" fill="#1c2b3a" stroke="#d3dbe6"/><text x="111" y="44" font-size="9" fill="#d3dbe6">H</text>
<line x1="110" y1="95" x2="90" y2="70" stroke="#d3dbe6" stroke-width="2"/><circle cx="115" cy="100" r="8" fill="#5fd382" stroke="#d3dbe6"/><text x="110" y="104" font-size="9" fill="#fff">Cl</text>
<text x="200" y="18" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">trans (μ=0)</text>
<line x1="200" y1="70" x2="250" y2="70" stroke="#d3dbe6" stroke-width="2.5"/>
<line x1="180" y1="45" x2="200" y2="70" stroke="#d3dbe6" stroke-width="2"/><circle cx="175" cy="40" r="7" fill="#1c2b3a" stroke="#d3dbe6"/><text x="171" y="44" font-size="9" fill="#d3dbe6">H</text>
<line x1="180" y1="95" x2="200" y2="70" stroke="#d3dbe6" stroke-width="2"/><circle cx="175" cy="100" r="8" fill="#5fd382" stroke="#d3dbe6"/><text x="170" y="104" font-size="9" fill="#fff">Cl</text>
<line x1="270" y1="45" x2="250" y2="70" stroke="#d3dbe6" stroke-width="2"/><circle cx="275" cy="40" r="8" fill="#5fd382" stroke="#d3dbe6"/><text x="270" y="44" font-size="9" fill="#fff">Cl</text>
<line x1="270" y1="95" x2="250" y2="70" stroke="#d3dbe6" stroke-width="2"/><circle cx="275" cy="100" r="7" fill="#1c2b3a" stroke="#d3dbe6"/><text x="271" y="104" font-size="9" fill="#d3dbe6">H</text>
</svg>`,
    caption: "1,2-dichloroethene: cis (mu is not 0) versus trans (mu = 0).",
  },
  "nh3-nf3": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 210" width="100%">
<rect x="1" y="1" width="418.0" height="208.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="105" y="20" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">NH₃ (μ = 1.46–1.50 D)</text>
<circle cx="105" cy="80" r="11" fill="#7aa2ff" stroke="#d3dbe6" stroke-width="1.5"/><text x="100" y="85" font-size="11" fill="#fff">N</text>
<circle cx="105" cy="35" r="3" fill="#d3dbe6"/><circle cx="112" cy="35" r="3" fill="#d3dbe6"/>
<circle cx="65" cy="120" r="7" fill="#1c2b3a" stroke="#d3dbe6"/><text x="61" y="124" font-size="10" fill="#d3dbe6">H</text>
<circle cx="105" cy="135" r="7" fill="#1c2b3a" stroke="#d3dbe6"/><text x="101" y="139" font-size="10" fill="#d3dbe6">H</text>
<circle cx="145" cy="120" r="7" fill="#1c2b3a" stroke="#d3dbe6"/><text x="141" y="124" font-size="10" fill="#d3dbe6">H</text>
<line x1="98" y1="88" x2="70" y2="113" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="105" y1="91" x2="105" y2="128" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="112" y1="88" x2="140" y2="113" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="105" y1="55" x2="105" y2="42" stroke="#76dce8" stroke-width="2" marker-end="url(#aN1b)"/>
<text x="115" y="50" font-size="9" fill="#76dce8">μ<tspan baseline-shift="sub" font-size="7">L</tspan></text>
<line x1="105" y1="95" x2="105" y2="175" stroke="#ff6b6b" stroke-width="2.5" marker-end="url(#aN1r)"/>
<text x="115" y="150" font-size="10" fill="#ff6b6b">μ<tspan baseline-shift="sub" font-size="8">R</tspan></text>
<text x="105" y="195" font-size="10" text-anchor="middle" fill="#d3dbe6">μ<tspan baseline-shift="sub" font-size="8">L</tspan> and μ<tspan baseline-shift="sub" font-size="8">R</tspan> REINFORCE</text>

<text x="315" y="20" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">NF₃ (μ = 0.20 D)</text>
<circle cx="315" cy="80" r="11" fill="#7aa2ff" stroke="#d3dbe6" stroke-width="1.5"/><text x="310" y="85" font-size="11" fill="#fff">N</text>
<circle cx="315" cy="35" r="3" fill="#d3dbe6"/><circle cx="322" cy="35" r="3" fill="#d3dbe6"/>
<circle cx="275" cy="120" r="8" fill="#a8e6a1" stroke="#d3dbe6"/><text x="270" y="124" font-size="10" fill="#d3dbe6">F</text>
<circle cx="315" cy="135" r="8" fill="#a8e6a1" stroke="#d3dbe6"/><text x="310" y="139" font-size="10" fill="#d3dbe6">F</text>
<circle cx="355" cy="120" r="8" fill="#a8e6a1" stroke="#d3dbe6"/><text x="350" y="124" font-size="10" fill="#d3dbe6">F</text>
<line x1="308" y1="88" x2="280" y2="113" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="315" y1="91" x2="315" y2="128" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="322" y1="88" x2="350" y2="113" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="315" y1="55" x2="315" y2="42" stroke="#76dce8" stroke-width="2" marker-end="url(#aN1b)"/>
<text x="325" y="50" font-size="9" fill="#76dce8">μ<tspan baseline-shift="sub" font-size="7">L</tspan></text>
<line x1="315" y1="95" x2="315" y2="130" stroke="#ff6b6b" stroke-width="2.5" marker-end="url(#aN1r)"/>
<text x="325" y="118" font-size="10" fill="#ff6b6b">μ<tspan baseline-shift="sub" font-size="8">R</tspan></text>
<text x="315" y="195" font-size="10" text-anchor="middle" fill="#d3dbe6">μ<tspan baseline-shift="sub" font-size="8">L</tspan> and μ<tspan baseline-shift="sub" font-size="8">R</tspan> nearly CANCEL</text>
<defs>
<marker id="aN1b" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto"><polygon points="0 0,8 2.5,0 5" fill="#76dce8"/></marker>
<marker id="aN1r" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto"><polygon points="0 0,8 2.5,0 5" fill="#ff6b6b"/></marker>
</defs>
</svg>`,
    caption: "NH3 (mu = 1.46-1.50 D): lone-pair and bond-resultant moments reinforce. NF3 (mu = 0.20 D): they nearly cancel.",
  },
  "h2o-of2": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 190" width="100%">
<rect x="1" y="1" width="418.0" height="188.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="105" y="20" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">H₂O (μ = 1.84–1.85 D)</text>
<circle cx="105" cy="70" r="10" fill="#ff7a68" stroke="#d3dbe6" stroke-width="1.5"/><text x="101" y="75" font-size="10" fill="#d3dbe6">O</text>
<circle cx="105" cy="35" r="3" fill="#d3dbe6"/><circle cx="112" cy="35" r="3" fill="#d3dbe6"/>
<circle cx="70" cy="115" r="7" fill="#1c2b3a" stroke="#d3dbe6"/><text x="66" y="119" font-size="10" fill="#d3dbe6">H</text>
<circle cx="140" cy="115" r="7" fill="#1c2b3a" stroke="#d3dbe6"/><text x="136" y="119" font-size="10" fill="#d3dbe6">H</text>
<line x1="99" y1="78" x2="75" y2="108" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="111" y1="78" x2="135" y2="108" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="105" y1="55" x2="105" y2="42" stroke="#76dce8" stroke-width="2" marker-end="url(#aO1b)"/>
<line x1="105" y1="85" x2="105" y2="150" stroke="#ff6b6b" stroke-width="2.5" marker-end="url(#aO1r)"/>
<text x="105" y="170" font-size="10" text-anchor="middle" fill="#d3dbe6">reinforce</text>

<text x="315" y="20" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">F₂O (μ = 0.3 D)</text>
<circle cx="315" cy="70" r="10" fill="#ff7a68" stroke="#d3dbe6" stroke-width="1.5"/><text x="311" y="75" font-size="10" fill="#d3dbe6">O</text>
<circle cx="315" cy="35" r="3" fill="#d3dbe6"/><circle cx="322" cy="35" r="3" fill="#d3dbe6"/>
<circle cx="280" cy="115" r="8" fill="#a8e6a1" stroke="#d3dbe6"/><text x="275" y="119" font-size="10" fill="#d3dbe6">F</text>
<circle cx="350" cy="115" r="8" fill="#a8e6a1" stroke="#d3dbe6"/><text x="345" y="119" font-size="10" fill="#d3dbe6">F</text>
<line x1="309" y1="78" x2="285" y2="108" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="321" y1="78" x2="345" y2="108" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="315" y1="55" x2="315" y2="42" stroke="#76dce8" stroke-width="2" marker-end="url(#aO1b)"/>
<line x1="315" y1="85" x2="315" y2="112" stroke="#ff6b6b" stroke-width="2.5" marker-end="url(#aO1r)"/>
<text x="315" y="170" font-size="10" text-anchor="middle" fill="#d3dbe6">nearly cancel</text>
<defs>
<marker id="aO1b" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto"><polygon points="0 0,8 2.5,0 5" fill="#76dce8"/></marker>
<marker id="aO1r" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto"><polygon points="0 0,8 2.5,0 5" fill="#ff6b6b"/></marker>
</defs>
</svg>`,
    caption: "H2O (mu = 1.84-1.85 D): lone-pair resultant reinforces the bond resultant. F2O (mu = 0.3 D): they nearly cancel.",
  },
  "chloromethane-series": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590 190" width="100%">
<rect x="1" y="1" width="588.0" height="188.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="90" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">CH₃Cl</text>
<g transform="translate(0,0)">
<line x1="83.5" y1="83.0" x2="63.4" y2="61.1" stroke="#d3dbe6" stroke-width="2"/>
<line x1="96.5" y1="83.0" x2="116.6" y2="61.1" stroke="#d3dbe6" stroke-width="2"/>
<polygon points="97.2,96.1 128.9,115.5 121.5,124.3" fill="#c3ccd8"/>
<line x1="85.2" y1="97.0" x2="82.3" y2="93.6" stroke="#c3ccd8" stroke-width="2"/><line x1="79.5" y1="103.1" x2="75.3" y2="98.2" stroke="#c3ccd8" stroke-width="2"/><line x1="73.9" y1="109.2" x2="68.4" y2="102.8" stroke="#c3ccd8" stroke-width="2"/><line x1="68.2" y1="115.3" x2="61.5" y2="107.4" stroke="#c3ccd8" stroke-width="2"/><line x1="62.5" y1="121.4" x2="54.6" y2="112.0" stroke="#c3ccd8" stroke-width="2"/>
<circle cx="90" cy="90" r="9" fill="#3a4a5c" stroke="#0d1620" stroke-width="1.3"/><text x="85" y="94" font-size="11" fill="#fff" font-weight="bold">C</text>
<circle cx="58.3" cy="55.7" r="7" fill="#1c2b3a" stroke="#d3dbe6" stroke-width="1.3"/><text x="55.3" y="58.7" font-size="10" fill="#d3dbe6">H</text>
<circle cx="121.7" cy="55.7" r="7" fill="#1c2b3a" stroke="#d3dbe6" stroke-width="1.3"/><text x="118.7" y="58.7" font-size="10" fill="#d3dbe6">H</text>
<circle cx="125.2" cy="119.9" r="9" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/><text x="118.2" y="122.9" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<circle cx="54.8" cy="119.9" r="7" fill="#1c2b3a" stroke="#d3dbe6" stroke-width="1.3"/><text x="51.8" y="122.9" font-size="10" fill="#d3dbe6">H</text>
</g>
<text x="90" y="165" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">μ = 1.87 D</text>

<text x="235" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">CH₂Cl₂</text>
<g transform="translate(145,0)">
<line x1="83.5" y1="83.0" x2="63.4" y2="61.1" stroke="#d3dbe6" stroke-width="2"/>
<line x1="96.5" y1="83.0" x2="116.6" y2="61.1" stroke="#d3dbe6" stroke-width="2"/>
<polygon points="97.2,96.1 128.9,115.5 121.5,124.3" fill="#c3ccd8"/>
<line x1="85.2" y1="97.0" x2="82.3" y2="93.6" stroke="#c3ccd8" stroke-width="2"/><line x1="79.5" y1="103.1" x2="75.3" y2="98.2" stroke="#c3ccd8" stroke-width="2"/><line x1="73.9" y1="109.2" x2="68.4" y2="102.8" stroke="#c3ccd8" stroke-width="2"/><line x1="68.2" y1="115.3" x2="61.5" y2="107.4" stroke="#c3ccd8" stroke-width="2"/><line x1="62.5" y1="121.4" x2="54.6" y2="112.0" stroke="#c3ccd8" stroke-width="2"/>
<circle cx="90" cy="90" r="9" fill="#3a4a5c" stroke="#0d1620" stroke-width="1.3"/><text x="85" y="94" font-size="11" fill="#fff" font-weight="bold">C</text>
<circle cx="58.3" cy="55.7" r="9" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/><text x="51.3" y="58.7" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<circle cx="121.7" cy="55.7" r="7" fill="#1c2b3a" stroke="#d3dbe6" stroke-width="1.3"/><text x="118.7" y="58.7" font-size="10" fill="#d3dbe6">H</text>
<circle cx="125.2" cy="119.9" r="9" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/><text x="118.2" y="122.9" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<circle cx="54.8" cy="119.9" r="7" fill="#1c2b3a" stroke="#d3dbe6" stroke-width="1.3"/><text x="51.8" y="122.9" font-size="10" fill="#d3dbe6">H</text>
</g>
<text x="235" y="165" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">μ = 1.55 D</text>

<text x="380" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">CHCl₃</text>
<g transform="translate(290,0)">
<line x1="83.5" y1="83.0" x2="63.4" y2="61.1" stroke="#d3dbe6" stroke-width="2"/>
<line x1="96.5" y1="83.0" x2="116.6" y2="61.1" stroke="#d3dbe6" stroke-width="2"/>
<polygon points="97.2,96.1 128.9,115.5 121.5,124.3" fill="#c3ccd8"/>
<line x1="85.2" y1="97.0" x2="82.3" y2="93.6" stroke="#c3ccd8" stroke-width="2"/><line x1="79.5" y1="103.1" x2="75.3" y2="98.2" stroke="#c3ccd8" stroke-width="2"/><line x1="73.9" y1="109.2" x2="68.4" y2="102.8" stroke="#c3ccd8" stroke-width="2"/><line x1="68.2" y1="115.3" x2="61.5" y2="107.4" stroke="#c3ccd8" stroke-width="2"/><line x1="62.5" y1="121.4" x2="54.6" y2="112.0" stroke="#c3ccd8" stroke-width="2"/>
<circle cx="90" cy="90" r="9" fill="#3a4a5c" stroke="#0d1620" stroke-width="1.3"/><text x="85" y="94" font-size="11" fill="#fff" font-weight="bold">C</text>
<circle cx="58.3" cy="55.7" r="9" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/><text x="51.3" y="58.7" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<circle cx="121.7" cy="55.7" r="7" fill="#1c2b3a" stroke="#d3dbe6" stroke-width="1.3"/><text x="118.7" y="58.7" font-size="10" fill="#d3dbe6">H</text>
<circle cx="125.2" cy="119.9" r="9" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/><text x="118.2" y="122.9" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<circle cx="54.8" cy="119.9" r="9" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/><text x="47.8" y="122.9" font-size="10" fill="#fff" font-weight="bold">Cl</text>
</g>
<text x="380" y="165" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">μ = 1.02 D</text>

<text x="525" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">CCl₄</text>
<g transform="translate(435,0)">
<line x1="83.5" y1="83.0" x2="63.4" y2="61.1" stroke="#d3dbe6" stroke-width="2"/>
<line x1="96.5" y1="83.0" x2="116.6" y2="61.1" stroke="#d3dbe6" stroke-width="2"/>
<polygon points="97.2,96.1 128.9,115.5 121.5,124.3" fill="#c3ccd8"/>
<line x1="85.2" y1="97.0" x2="82.3" y2="93.6" stroke="#c3ccd8" stroke-width="2"/><line x1="79.5" y1="103.1" x2="75.3" y2="98.2" stroke="#c3ccd8" stroke-width="2"/><line x1="73.9" y1="109.2" x2="68.4" y2="102.8" stroke="#c3ccd8" stroke-width="2"/><line x1="68.2" y1="115.3" x2="61.5" y2="107.4" stroke="#c3ccd8" stroke-width="2"/><line x1="62.5" y1="121.4" x2="54.6" y2="112.0" stroke="#c3ccd8" stroke-width="2"/>
<circle cx="90" cy="90" r="9" fill="#3a4a5c" stroke="#0d1620" stroke-width="1.3"/><text x="85" y="94" font-size="11" fill="#fff" font-weight="bold">C</text>
<circle cx="58.3" cy="55.7" r="9" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/><text x="51.3" y="58.7" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<circle cx="121.7" cy="55.7" r="9" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/><text x="114.7" y="58.7" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<circle cx="125.2" cy="119.9" r="9" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/><text x="118.2" y="122.9" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<circle cx="54.8" cy="119.9" r="9" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/><text x="47.8" y="122.9" font-size="10" fill="#fff" font-weight="bold">Cl</text>
</g>
<text x="525" y="165" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">μ = 0 D</text>
</svg>`,
    caption: "The chloromethane series, each carbon drawn in genuine tetrahedral wedge/hash perspective: CH3Cl > CH2Cl2 > CHCl3 > CCl4 (0 D).",
  },
  "benzene-mono": {
    size: "lg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 730 165" width="100%">
<rect x="1" y="1" width="728.0" height="163.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="65" y="14" font-size="10" text-anchor="middle" fill="#d3dbe6">benzene</text>
<line x1="65.0" y1="69.0" x2="87.5" y2="82.0" stroke="#d3dbe6" stroke-width="2"/><line x1="87.5" y1="82.0" x2="87.5" y2="108.0" stroke="#d3dbe6" stroke-width="2"/><line x1="87.5" y1="108.0" x2="65.0" y2="121.0" stroke="#d3dbe6" stroke-width="2"/><line x1="65.0" y1="121.0" x2="42.5" y2="108.0" stroke="#d3dbe6" stroke-width="2"/><line x1="42.5" y1="108.0" x2="42.5" y2="82.0" stroke="#d3dbe6" stroke-width="2"/><line x1="42.5" y1="82.0" x2="65.0" y2="69.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="67.1" y1="75.9" x2="80.5" y2="83.6" stroke="#d3dbe6" stroke-width="1.6"/><line x1="80.5" y1="106.4" x2="67.1" y2="114.1" stroke="#d3dbe6" stroke-width="1.6"/><line x1="47.4" y1="102.7" x2="47.4" y2="87.3" stroke="#d3dbe6" stroke-width="1.6"/>
<text x="65" y="150" font-size="10" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ=0</text>

<text x="185" y="14" font-size="10" text-anchor="middle" fill="#d3dbe6">chlorobenzene</text>
<line x1="185.0" y1="69.0" x2="207.5" y2="82.0" stroke="#d3dbe6" stroke-width="2"/><line x1="207.5" y1="82.0" x2="207.5" y2="108.0" stroke="#d3dbe6" stroke-width="2"/><line x1="207.5" y1="108.0" x2="185.0" y2="121.0" stroke="#d3dbe6" stroke-width="2"/><line x1="185.0" y1="121.0" x2="162.5" y2="108.0" stroke="#d3dbe6" stroke-width="2"/><line x1="162.5" y1="108.0" x2="162.5" y2="82.0" stroke="#d3dbe6" stroke-width="2"/><line x1="162.5" y1="82.0" x2="185.0" y2="69.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="187.1" y1="75.9" x2="200.5" y2="83.6" stroke="#d3dbe6" stroke-width="1.6"/><line x1="200.5" y1="106.4" x2="187.1" y2="114.1" stroke="#d3dbe6" stroke-width="1.6"/><line x1="167.4" y1="102.7" x2="167.4" y2="87.3" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="185.0" y1="69.0" x2="185.0" y2="51.0" stroke="#d3dbe6" stroke-width="1.8"/><circle cx="185.0" cy="43.0" r="8" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/><text x="178.0" y="46.0" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<text x="185" y="150" font-size="10" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ=1.70D</text>

<text x="305" y="14" font-size="10" text-anchor="middle" fill="#d3dbe6">phenol</text>
<line x1="305.0" y1="69.0" x2="327.5" y2="82.0" stroke="#d3dbe6" stroke-width="2"/><line x1="327.5" y1="82.0" x2="327.5" y2="108.0" stroke="#d3dbe6" stroke-width="2"/><line x1="327.5" y1="108.0" x2="305.0" y2="121.0" stroke="#d3dbe6" stroke-width="2"/><line x1="305.0" y1="121.0" x2="282.5" y2="108.0" stroke="#d3dbe6" stroke-width="2"/><line x1="282.5" y1="108.0" x2="282.5" y2="82.0" stroke="#d3dbe6" stroke-width="2"/><line x1="282.5" y1="82.0" x2="305.0" y2="69.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="307.1" y1="75.9" x2="320.5" y2="83.6" stroke="#d3dbe6" stroke-width="1.6"/><line x1="320.5" y1="106.4" x2="307.1" y2="114.1" stroke="#d3dbe6" stroke-width="1.6"/><line x1="287.4" y1="102.7" x2="287.4" y2="87.3" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="305.0" y1="69.0" x2="305.0" y2="51.0" stroke="#d3dbe6" stroke-width="1.8"/><text x="305.0" y="39.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#ff8a8a">OH</text>
<text x="305" y="150" font-size="10" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ=1.40D</text>

<text x="425" y="14" font-size="10" text-anchor="middle" fill="#d3dbe6">nitrobenzene</text>
<line x1="425.0" y1="69.0" x2="447.5" y2="82.0" stroke="#d3dbe6" stroke-width="2"/><line x1="447.5" y1="82.0" x2="447.5" y2="108.0" stroke="#d3dbe6" stroke-width="2"/><line x1="447.5" y1="108.0" x2="425.0" y2="121.0" stroke="#d3dbe6" stroke-width="2"/><line x1="425.0" y1="121.0" x2="402.5" y2="108.0" stroke="#d3dbe6" stroke-width="2"/><line x1="402.5" y1="108.0" x2="402.5" y2="82.0" stroke="#d3dbe6" stroke-width="2"/><line x1="402.5" y1="82.0" x2="425.0" y2="69.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="427.1" y1="75.9" x2="440.5" y2="83.6" stroke="#d3dbe6" stroke-width="1.6"/><line x1="440.5" y1="106.4" x2="427.1" y2="114.1" stroke="#d3dbe6" stroke-width="1.6"/><line x1="407.4" y1="102.7" x2="407.4" y2="87.3" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="425.0" y1="69.0" x2="425.0" y2="51.0" stroke="#d3dbe6" stroke-width="1.8"/><text x="425.0" y="39.0" font-size="10" text-anchor="middle" fill="#d3dbe6">NO₂</text>
<text x="425" y="150" font-size="10" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ=3.90D</text>

<text x="545" y="14" font-size="10" text-anchor="middle" fill="#d3dbe6">aniline</text>
<line x1="545.0" y1="69.0" x2="567.5" y2="82.0" stroke="#d3dbe6" stroke-width="2"/><line x1="567.5" y1="82.0" x2="567.5" y2="108.0" stroke="#d3dbe6" stroke-width="2"/><line x1="567.5" y1="108.0" x2="545.0" y2="121.0" stroke="#d3dbe6" stroke-width="2"/><line x1="545.0" y1="121.0" x2="522.5" y2="108.0" stroke="#d3dbe6" stroke-width="2"/><line x1="522.5" y1="108.0" x2="522.5" y2="82.0" stroke="#d3dbe6" stroke-width="2"/><line x1="522.5" y1="82.0" x2="545.0" y2="69.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="547.1" y1="75.9" x2="560.5" y2="83.6" stroke="#d3dbe6" stroke-width="1.6"/><line x1="560.5" y1="106.4" x2="547.1" y2="114.1" stroke="#d3dbe6" stroke-width="1.6"/><line x1="527.4" y1="102.7" x2="527.4" y2="87.3" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="545.0" y1="69.0" x2="545.0" y2="51.0" stroke="#d3dbe6" stroke-width="1.8"/><text x="545.0" y="39.0" font-size="10" text-anchor="middle" fill="#d3dbe6">NH₂</text>
<text x="545" y="150" font-size="10" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ=1.50D</text>

<text x="665" y="14" font-size="10" text-anchor="middle" fill="#d3dbe6">toluene</text>
<line x1="665.0" y1="69.0" x2="687.5" y2="82.0" stroke="#d3dbe6" stroke-width="2"/><line x1="687.5" y1="82.0" x2="687.5" y2="108.0" stroke="#d3dbe6" stroke-width="2"/><line x1="687.5" y1="108.0" x2="665.0" y2="121.0" stroke="#d3dbe6" stroke-width="2"/><line x1="665.0" y1="121.0" x2="642.5" y2="108.0" stroke="#d3dbe6" stroke-width="2"/><line x1="642.5" y1="108.0" x2="642.5" y2="82.0" stroke="#d3dbe6" stroke-width="2"/><line x1="642.5" y1="82.0" x2="665.0" y2="69.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="667.1" y1="75.9" x2="680.5" y2="83.6" stroke="#d3dbe6" stroke-width="1.6"/><line x1="680.5" y1="106.4" x2="667.1" y2="114.1" stroke="#d3dbe6" stroke-width="1.6"/><line x1="647.4" y1="102.7" x2="647.4" y2="87.3" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="665.0" y1="69.0" x2="665.0" y2="51.0" stroke="#d3dbe6" stroke-width="1.8"/><text x="665.0" y="39.0" font-size="10" text-anchor="middle" fill="#d3dbe6">CH₃</text>
<text x="665" y="150" font-size="10" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ=0.40D</text>
</svg>`,
    caption: "Monosubstituted benzenes as true Kekule rings with alternating double bonds.",
  },
  "dichlorobenzene": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 165" width="100%">
<rect x="1" y="1" width="558.0" height="163.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="85" y="18" font-size="12" text-anchor="middle" font-weight="bold" fill="#d3dbe6">ortho</text>
<line x1="85.0" y1="48.0" x2="112.7" y2="64.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="112.7" y1="64.0" x2="112.7" y2="96.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="112.7" y1="96.0" x2="85.0" y2="112.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="85.0" y1="112.0" x2="57.3" y2="96.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="57.3" y1="96.0" x2="57.3" y2="64.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="57.3" y1="64.0" x2="85.0" y2="48.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="87.6" y1="56.5" x2="104.0" y2="66.0" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="104.0" y1="94.0" x2="87.6" y2="103.5" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="63.4" y1="89.5" x2="63.4" y2="70.5" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="85.0" y1="48.0" x2="85.0" y2="32.0" stroke="#d3dbe6" stroke-width="1.8"/>
<circle cx="85.0" cy="24.0" r="8" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/>
<text x="78.0" y="27.0" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<line x1="112.7" y1="64.0" x2="126.6" y2="56.0" stroke="#d3dbe6" stroke-width="1.8"/>
<circle cx="133.5" cy="52.0" r="8" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/>
<text x="126.5" y="55.0" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<text x="85" y="150" font-size="12" text-anchor="middle" fill="#d3dbe6">μ = 2.25 D</text>
<text x="280" y="18" font-size="12" text-anchor="middle" font-weight="bold" fill="#d3dbe6">meta</text>
<line x1="280.0" y1="48.0" x2="307.7" y2="64.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="307.7" y1="64.0" x2="307.7" y2="96.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="307.7" y1="96.0" x2="280.0" y2="112.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="280.0" y1="112.0" x2="252.3" y2="96.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="252.3" y1="96.0" x2="252.3" y2="64.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="252.3" y1="64.0" x2="280.0" y2="48.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="282.6" y1="56.5" x2="299.0" y2="66.0" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="299.0" y1="94.0" x2="282.6" y2="103.5" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="258.4" y1="89.5" x2="258.4" y2="70.5" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="280.0" y1="48.0" x2="280.0" y2="32.0" stroke="#d3dbe6" stroke-width="1.8"/>
<circle cx="280.0" cy="24.0" r="8" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/>
<text x="273.0" y="27.0" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<line x1="307.7" y1="96.0" x2="321.6" y2="104.0" stroke="#d3dbe6" stroke-width="1.8"/>
<circle cx="328.5" cy="108.0" r="8" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/>
<text x="321.5" y="111.0" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<text x="280" y="150" font-size="12" text-anchor="middle" fill="#d3dbe6">μ = 1.72 D</text>
<text x="475" y="18" font-size="12" text-anchor="middle" font-weight="bold" fill="#d3dbe6">para</text>
<line x1="475.0" y1="48.0" x2="502.7" y2="64.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="502.7" y1="64.0" x2="502.7" y2="96.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="502.7" y1="96.0" x2="475.0" y2="112.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="475.0" y1="112.0" x2="447.3" y2="96.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="447.3" y1="96.0" x2="447.3" y2="64.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="447.3" y1="64.0" x2="475.0" y2="48.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="477.6" y1="56.5" x2="494.0" y2="66.0" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="494.0" y1="94.0" x2="477.6" y2="103.5" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="453.4" y1="89.5" x2="453.4" y2="70.5" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="475.0" y1="48.0" x2="475.0" y2="32.0" stroke="#d3dbe6" stroke-width="1.8"/>
<circle cx="475.0" cy="24.0" r="8" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/>
<text x="468.0" y="27.0" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<line x1="475.0" y1="112.0" x2="475.0" y2="128.0" stroke="#d3dbe6" stroke-width="1.8"/>
<circle cx="475.0" cy="136.0" r="8" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.3"/>
<text x="468.0" y="139.0" font-size="10" fill="#fff" font-weight="bold">Cl</text>
<text x="475" y="150" font-size="12" text-anchor="middle" fill="#d3dbe6">μ = 0 D</text>
</svg>`,
    caption: "Dichlorobenzene: ortho, meta and para isomers, illustrating the ortho > meta > para trend to zero.",
  },
  "hydroquinone": {
    size: "sm",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 175" width="100%">
<rect x="1" y="1" width="198.0" height="173.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<line x1="100.0" y1="58.0" x2="127.7" y2="74.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="127.7" y1="74.0" x2="127.7" y2="106.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="127.7" y1="106.0" x2="100.0" y2="122.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="100.0" y1="122.0" x2="72.3" y2="106.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="72.3" y1="106.0" x2="72.3" y2="74.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="72.3" y1="74.0" x2="100.0" y2="58.0" stroke="#d3dbe6" stroke-width="2"/>
<line x1="102.6" y1="66.5" x2="119.0" y2="76.0" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="119.0" y1="104.0" x2="102.6" y2="113.5" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="78.4" y1="99.5" x2="78.4" y2="80.5" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="100.0" y1="58.0" x2="100.0" y2="42.0" stroke="#d3dbe6" stroke-width="1.8"/>
<text x="100.0" y="30.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#ff8a8a">OH</text>
<line x1="100.0" y1="122.0" x2="100.0" y2="138.0" stroke="#d3dbe6" stroke-width="1.8"/>
<text x="100.0" y="150.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#ff8a8a">OH</text>
</svg>`,
    caption: "Hydroquinone (para-dihydroxybenzene): both -OH groups drawn on the ring.",
  },
  "pt-complexes": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 130" width="100%">
<rect x="1" y="1" width="338.0" height="128.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="80" y="18" font-size="11" font-weight="bold" text-anchor="middle" fill="#d3dbe6">trans-PtCl₂(PEt₃)₂</text>
<circle cx="80" cy="65" r="12" fill="#9fb0c0" stroke="#d3dbe6" stroke-width="1.5"/><text x="73" y="70" font-size="9" fill="#fff">Pt</text>
<circle cx="80" cy="30" r="8" fill="#5fd382" stroke="#d3dbe6"/><text x="76" y="34" font-size="9" fill="#fff">Cl</text>
<circle cx="80" cy="100" r="8" fill="#5fd382" stroke="#d3dbe6"/><text x="76" y="104" font-size="9" fill="#fff">Cl</text>
<circle cx="35" cy="65" r="8" fill="#f4a94f" stroke="#d3dbe6"/><text x="30" y="69" font-size="8" fill="#fff">PEt₃</text>
<circle cx="125" cy="65" r="8" fill="#f4a94f" stroke="#d3dbe6"/><text x="112" y="69" font-size="8" fill="#fff">PEt₃</text>
<text x="80" y="120" font-size="10" text-anchor="middle" fill="#d3dbe6">μ = 0</text>

<text x="255" y="18" font-size="11" font-weight="bold" text-anchor="middle" fill="#d3dbe6">trans-PtCl₂(SEt₂)₂</text>
<circle cx="255" cy="65" r="12" fill="#9fb0c0" stroke="#d3dbe6" stroke-width="1.5"/><text x="248" y="70" font-size="9" fill="#fff">Pt</text>
<circle cx="255" cy="30" r="8" fill="#5fd382" stroke="#d3dbe6"/><text x="251" y="34" font-size="9" fill="#fff">Cl</text>
<circle cx="255" cy="100" r="8" fill="#5fd382" stroke="#d3dbe6"/><text x="251" y="104" font-size="9" fill="#fff">Cl</text>
<circle cx="210" cy="65" r="8" fill="#f9dc5c" stroke="#d3dbe6"/><text x="198" y="69" font-size="8" fill="#d3dbe6">SEt₂</text>
<circle cx="300" cy="65" r="8" fill="#f9dc5c" stroke="#d3dbe6"/><text x="288" y="69" font-size="8" fill="#d3dbe6">SEt₂</text>
<circle cx="205" cy="45" r="2.5" fill="#d3dbe6"/><circle cx="200" cy="52" r="2.5" fill="#d3dbe6"/>
<text x="255" y="120" font-size="10" text-anchor="middle" fill="#d3dbe6">μ = 2.4 D</text>
</svg>`,
    caption: "trans-PtCl2(PEt3)2 (mu = 0) versus trans-PtCl2(SEt2)2 (mu = 2.4 D, sulfur lone pair not cancelled).",
  },
  "ozone": {
    size: "sm",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 110" width="100%">
<rect x="1" y="1" width="218.0" height="108.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<circle cx="110" cy="35" r="9" fill="#ff7a68" stroke="#d3dbe6" stroke-width="1.5"/><text x="105" y="40" font-size="10" fill="#d3dbe6">O</text>
<text x="122" y="25" font-size="9" fill="#d3dbe6">+</text>
<circle cx="70" cy="75" r="9" fill="#ff7a68" stroke="#d3dbe6" stroke-width="1.5"/><text x="65" y="80" font-size="10" fill="#d3dbe6">O</text>
<circle cx="150" cy="75" r="9" fill="#ff7a68" stroke="#d3dbe6" stroke-width="1.5"/><text x="145" y="80" font-size="10" fill="#d3dbe6">O</text>
<text x="150" y="95" font-size="9" fill="#d3dbe6">−</text>
<line x1="103" y1="42" x2="78" y2="68" stroke="#d3dbe6" stroke-width="2"/>
<line x1="117" y1="42" x2="142" y2="68" stroke="#d3dbe6" stroke-width="2"/>
</svg>`,
    caption: "Ozone resonance: formal positive charge on the central O, formal negative charge on a terminal O.",
  },
  "pclxfy-series": {
    size: "lg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 995 166" width="100%">
<rect x="1" y="1" width="993.0" height="164.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>
<g transform="translate(60,0)">
<text x="0" y="14" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">PCl₅</text>
<line x1="0" y1="59" x2="0" y2="43" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="0" y1="77" x2="0" y2="93" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="-8" y1="68" x2="-31" y2="68" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="8" y1="68" x2="31" y2="68" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="-7" y1="74" x2="-24" y2="87" stroke="#9fb0c0" stroke-width="1.6" stroke-dasharray="2.5,2.5"/>
<circle cx="0" cy="68" r="11" fill="#f4a94f" stroke="#0d1620" stroke-width="1.3"/>
<text x="0" y="72" font-size="10" font-weight="bold" text-anchor="middle" fill="#0d1620">P</text>
<circle cx="0" cy="34" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="0" y="38" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<circle cx="0" cy="102" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="0" y="106" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<circle cx="-39" cy="68" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="-39" y="72" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<circle cx="39" cy="68" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="39" y="72" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<circle cx="-30" cy="93" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="-30" y="97" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<text x="0" y="146" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ=0</text>
</g>
<g transform="translate(235,0)">
<text x="0" y="14" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">PCl₄F</text>
<line x1="0" y1="59" x2="0" y2="43" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="0" y1="77" x2="0" y2="93" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="-8" y1="68" x2="-31" y2="68" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="8" y1="68" x2="31" y2="68" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="-7" y1="74" x2="-24" y2="87" stroke="#9fb0c0" stroke-width="1.6" stroke-dasharray="2.5,2.5"/>
<circle cx="0" cy="68" r="11" fill="#f4a94f" stroke="#0d1620" stroke-width="1.3"/>
<text x="0" y="72" font-size="10" font-weight="bold" text-anchor="middle" fill="#0d1620">P</text>
<circle cx="0" cy="34" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="0" y="38" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="0" cy="102" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="0" y="106" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<circle cx="-39" cy="68" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="-39" y="72" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<circle cx="39" cy="68" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="39" y="72" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<circle cx="-30" cy="93" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="-30" y="97" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<text x="0" y="146" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ≠0 (F axial)</text>
</g>
<g transform="translate(410,0)">
<text x="0" y="14" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">PCl₃F₂</text>
<line x1="0" y1="59" x2="0" y2="43" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="0" y1="77" x2="0" y2="93" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="-8" y1="68" x2="-31" y2="68" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="8" y1="68" x2="31" y2="68" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="-7" y1="74" x2="-24" y2="87" stroke="#9fb0c0" stroke-width="1.6" stroke-dasharray="2.5,2.5"/>
<circle cx="0" cy="68" r="11" fill="#f4a94f" stroke="#0d1620" stroke-width="1.3"/>
<text x="0" y="72" font-size="10" font-weight="bold" text-anchor="middle" fill="#0d1620">P</text>
<circle cx="0" cy="34" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="0" y="38" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="0" cy="102" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="0" y="106" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="-39" cy="68" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="-39" y="72" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<circle cx="39" cy="68" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="39" y="72" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<circle cx="-30" cy="93" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="-30" y="97" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<text x="0" y="146" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ=0 (F,F axial)</text>
</g>
<g transform="translate(585,0)">
<text x="0" y="14" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">PCl₂F₃</text>
<line x1="0" y1="59" x2="0" y2="43" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="0" y1="77" x2="0" y2="93" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="-8" y1="68" x2="-31" y2="68" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="8" y1="68" x2="31" y2="68" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="-7" y1="74" x2="-24" y2="87" stroke="#9fb0c0" stroke-width="1.6" stroke-dasharray="2.5,2.5"/>
<circle cx="0" cy="68" r="11" fill="#f4a94f" stroke="#0d1620" stroke-width="1.3"/>
<text x="0" y="72" font-size="10" font-weight="bold" text-anchor="middle" fill="#0d1620">P</text>
<circle cx="0" cy="34" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="0" y="38" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="0" cy="102" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="0" y="106" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="-39" cy="68" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="-39" y="72" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="39" cy="68" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="39" y="72" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<circle cx="-30" cy="93" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="-30" y="97" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<text x="0" y="146" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ≠0</text>
</g>
<g transform="translate(760,0)">
<text x="0" y="14" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">PClF₄</text>
<line x1="0" y1="59" x2="0" y2="43" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="0" y1="77" x2="0" y2="93" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="-8" y1="68" x2="-31" y2="68" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="8" y1="68" x2="31" y2="68" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="-7" y1="74" x2="-24" y2="87" stroke="#9fb0c0" stroke-width="1.6" stroke-dasharray="2.5,2.5"/>
<circle cx="0" cy="68" r="11" fill="#f4a94f" stroke="#0d1620" stroke-width="1.3"/>
<text x="0" y="72" font-size="10" font-weight="bold" text-anchor="middle" fill="#0d1620">P</text>
<circle cx="0" cy="34" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="0" y="38" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="0" cy="102" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="0" y="106" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="-39" cy="68" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="-39" y="72" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="39" cy="68" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="39" y="72" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="-30" cy="93" r="9" fill="#5fd382" stroke="#0d1620" stroke-width="1.2"/><text x="-30" y="97" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Cl</text>
<text x="0" y="146" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ≠0</text>
</g>
<g transform="translate(935,0)">
<text x="0" y="14" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">PF₅</text>
<line x1="0" y1="59" x2="0" y2="43" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="0" y1="77" x2="0" y2="93" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="-8" y1="68" x2="-31" y2="68" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="8" y1="68" x2="31" y2="68" stroke="#9fb0c0" stroke-width="1.6"/>
<line x1="-7" y1="74" x2="-24" y2="87" stroke="#9fb0c0" stroke-width="1.6" stroke-dasharray="2.5,2.5"/>
<circle cx="0" cy="68" r="11" fill="#f4a94f" stroke="#0d1620" stroke-width="1.3"/>
<text x="0" y="72" font-size="10" font-weight="bold" text-anchor="middle" fill="#0d1620">P</text>
<circle cx="0" cy="34" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="0" y="38" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="0" cy="102" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="0" y="106" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="-39" cy="68" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="-39" y="72" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="39" cy="68" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="39" y="72" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<circle cx="-30" cy="93" r="8" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.2"/><text x="-30" y="97" font-size="9" font-weight="bold" text-anchor="middle" fill="#0d1620">F</text>
<text x="0" y="146" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ=0</text>
</g>
</svg>`,
    caption: "The PClxFy series: axial (top/bottom) and equatorial (left/right/back) fluorine substitution determines whether mu is zero or nonzero -- symmetric axial-only substitution (PCl3F2, PF5) cancels; asymmetric mixed substitution does not.",
  },
  "sf4-clf3-brf5": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 190" width="100%">
<rect x="1" y="1" width="558.0" height="188.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="90" y="20" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">SF₄ (see-saw, AX₄E)</text>
<circle cx="90" cy="95" r="10" fill="#f9dc5c" stroke="#d3dbe6" stroke-width="1.5"/><text x="86" y="99" font-size="10" fill="#d3dbe6">S</text>
<circle cx="90" cy="55" r="2.5" fill="#d3dbe6"/><circle cx="97" cy="55" r="2.5" fill="#d3dbe6"/>
<circle cx="90" cy="45" r="7" fill="#a8e6a1" stroke="#d3dbe6"/><text x="86" y="48" font-size="9" fill="#d3dbe6">F</text>
<circle cx="90" cy="145" r="7" fill="#a8e6a1" stroke="#d3dbe6"/><text x="86" y="148" font-size="9" fill="#d3dbe6">F</text>
<circle cx="50" cy="115" r="7" fill="#a8e6a1" stroke="#d3dbe6"/><text x="46" y="118" font-size="9" fill="#d3dbe6">F</text>
<circle cx="130" cy="115" r="7" fill="#a8e6a1" stroke="#d3dbe6"/><text x="126" y="118" font-size="9" fill="#d3dbe6">F</text>
<line x1="90" y1="85" x2="90" y2="52" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="90" y1="105" x2="90" y2="138" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="82" y1="100" x2="55" y2="112" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="98" y1="100" x2="125" y2="112" stroke="#d3dbe6" stroke-width="1.5"/>
<text x="90" y="175" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ ≈ 0.63 D</text>

<text x="280" y="20" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">ClF₃ (T-shaped, AX₃E₂)</text>
<circle cx="280" cy="95" r="10" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.5"/><text x="274" y="99" font-size="9" fill="#fff">Cl</text>
<circle cx="280" cy="55" r="2.5" fill="#d3dbe6"/><circle cx="287" cy="55" r="2.5" fill="#d3dbe6"/>
<circle cx="280" cy="130" r="2.5" fill="#d3dbe6"/><circle cx="287" cy="130" r="2.5" fill="#d3dbe6"/>
<circle cx="280" cy="45" r="7" fill="#a8e6a1" stroke="#d3dbe6"/><text x="276" y="48" font-size="9" fill="#d3dbe6">F</text>
<circle cx="240" cy="95" r="7" fill="#a8e6a1" stroke="#d3dbe6"/><text x="236" y="98" font-size="9" fill="#d3dbe6">F</text>
<circle cx="320" cy="95" r="7" fill="#a8e6a1" stroke="#d3dbe6"/><text x="316" y="98" font-size="9" fill="#d3dbe6">F</text>
<line x1="280" y1="85" x2="280" y2="52" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="270" y1="95" x2="247" y2="95" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="290" y1="95" x2="313" y2="95" stroke="#d3dbe6" stroke-width="1.5"/>
<text x="280" y="175" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ ≈ 0.56 D</text>

<text x="460" y="20" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">BrF₅ (sq. pyramidal, AX₅E)</text>
<circle cx="460" cy="100" r="10" fill="#5fd382" stroke="#d3dbe6" stroke-width="1.5"/><text x="453" y="104" font-size="9" fill="#fff">Br</text>
<circle cx="460" cy="60" r="2.5" fill="#d3dbe6"/><circle cx="467" cy="60" r="2.5" fill="#d3dbe6"/>
<circle cx="420" cy="80" r="7" fill="#a8e6a1" stroke="#d3dbe6"/><text x="416" y="83" font-size="9" fill="#d3dbe6">F</text>
<circle cx="500" cy="80" r="7" fill="#a8e6a1" stroke="#d3dbe6"/><text x="496" y="83" font-size="9" fill="#d3dbe6">F</text>
<circle cx="420" cy="120" r="7" fill="#a8e6a1" stroke="#d3dbe6"/><text x="416" y="123" font-size="9" fill="#d3dbe6">F</text>
<circle cx="500" cy="120" r="7" fill="#a8e6a1" stroke="#d3dbe6"/><text x="496" y="123" font-size="9" fill="#d3dbe6">F</text>
<circle cx="460" cy="140" r="7" fill="#a8e6a1" stroke="#d3dbe6"/><text x="456" y="143" font-size="9" fill="#d3dbe6">F</text>
<line x1="460" y1="90" x2="460" y2="66" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="452" y1="94" x2="427" y2="82" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="468" y1="94" x2="493" y2="82" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="452" y1="106" x2="427" y2="117" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="468" y1="106" x2="493" y2="117" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="460" y1="110" x2="460" y2="133" stroke="#d3dbe6" stroke-width="1.5"/>
<text x="460" y="175" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">μ ≈ 1.51 D</text>
</svg>`,
    caption: "SF4 (see-saw, AX4E), ClF3 (T-shaped, AX3E2), BrF5 (square pyramidal, AX5E) - lone pairs shown explicitly.",
  },
  "group15-hydrides": {
    size: "lg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 150" width="100%">
<rect x="1" y="1" width="598.0" height="148.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="85" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">NH₃</text>
<circle cx="85" cy="75" r="9" fill="#7aa2ff" stroke="#d3dbe6" stroke-width="1.3"/><text x="81" y="78" font-size="9" fill="#fff" font-weight="bold">N</text>
<circle cx="85" cy="43" r="2.2" fill="#d3dbe6"/><circle cx="91" cy="43" r="2.2" fill="#d3dbe6"/>
<circle cx="85" cy="33" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<circle cx="55" cy="93" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<circle cx="115" cy="93" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<line x1="85" y1="66" x2="85" y2="38" stroke="#d3dbe6" stroke-width="1.4"/>
<line x1="78" y1="81" x2="59" y2="90" stroke="#d3dbe6" stroke-width="1.4"/>
<line x1="92" y1="81" x2="111" y2="90" stroke="#d3dbe6" stroke-width="1.4"/>
<text x="85" y="130" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">1.47 D</text>
<text x="230" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">PH₃</text>
<circle cx="230" cy="75" r="9" fill="#f4a94f" stroke="#d3dbe6" stroke-width="1.3"/><text x="226" y="78" font-size="9" fill="#fff" font-weight="bold">P</text>
<circle cx="230" cy="43" r="2.2" fill="#d3dbe6"/><circle cx="236" cy="43" r="2.2" fill="#d3dbe6"/>
<circle cx="230" cy="33" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<circle cx="200" cy="93" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<circle cx="260" cy="93" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<line x1="230" y1="66" x2="230" y2="38" stroke="#d3dbe6" stroke-width="1.4"/>
<line x1="223" y1="81" x2="204" y2="90" stroke="#d3dbe6" stroke-width="1.4"/>
<line x1="237" y1="81" x2="256" y2="90" stroke="#d3dbe6" stroke-width="1.4"/>
<text x="230" y="130" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">0.58 D</text>
<text x="375" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">AsH₃</text>
<circle cx="375" cy="75" r="9" fill="#9fb0c0" stroke="#d3dbe6" stroke-width="1.3"/><text x="371" y="78" font-size="9" fill="#fff" font-weight="bold">As</text>
<circle cx="375" cy="43" r="2.2" fill="#d3dbe6"/><circle cx="381" cy="43" r="2.2" fill="#d3dbe6"/>
<circle cx="375" cy="33" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<circle cx="345" cy="93" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<circle cx="405" cy="93" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<line x1="375" y1="66" x2="375" y2="38" stroke="#d3dbe6" stroke-width="1.4"/>
<line x1="368" y1="81" x2="349" y2="90" stroke="#d3dbe6" stroke-width="1.4"/>
<line x1="382" y1="81" x2="401" y2="90" stroke="#d3dbe6" stroke-width="1.4"/>
<text x="375" y="130" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">0.20 D</text>
<text x="520" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">SbH₃</text>
<circle cx="520" cy="75" r="9" fill="#bca7f7" stroke="#d3dbe6" stroke-width="1.3"/><text x="516" y="78" font-size="9" fill="#fff" font-weight="bold">Sb</text>
<circle cx="520" cy="43" r="2.2" fill="#d3dbe6"/><circle cx="526" cy="43" r="2.2" fill="#d3dbe6"/>
<circle cx="520" cy="33" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<circle cx="490" cy="93" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<circle cx="550" cy="93" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<line x1="520" y1="66" x2="520" y2="38" stroke="#d3dbe6" stroke-width="1.4"/>
<line x1="513" y1="81" x2="494" y2="90" stroke="#d3dbe6" stroke-width="1.4"/>
<line x1="527" y1="81" x2="546" y2="90" stroke="#d3dbe6" stroke-width="1.4"/>
<text x="520" y="130" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">0.12 D</text>
</svg>`,
    caption: "The complete Group 15 hydride family, decreasing monotonically from 1.47 D to 0.12 D.",
  },
  "group16-hydrides": {
    size: "lg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 165" width="100%">
<rect x="1" y="1" width="598.0" height="163.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="85" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">H₂O</text>
<circle cx="85" cy="75" r="9" fill="#ff7a68" stroke="#d3dbe6" stroke-width="1.3"/><text x="81" y="78" font-size="9" fill="#fff" font-weight="bold">O</text>
<circle cx="82" cy="45" r="2.2" fill="#d3dbe6"/><circle cx="88" cy="45" r="2.2" fill="#d3dbe6"/>
<circle cx="57" cy="91" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<circle cx="113" cy="91" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<line x1="78" y1="81" x2="61" y2="89" stroke="#d3dbe6" stroke-width="1.4"/>
<line x1="92" y1="81" x2="109" y2="89" stroke="#d3dbe6" stroke-width="1.4"/>
<text x="85" y="130" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">1.85 D</text>
<text x="85" y="145" font-size="9" text-anchor="middle" fill="#8fa0b3">104.5°</text>
<text x="230" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">H₂S</text>
<circle cx="230" cy="75" r="9" fill="#f9dc5c" stroke="#d3dbe6" stroke-width="1.3"/><text x="226" y="78" font-size="9" fill="#fff" font-weight="bold">S</text>
<circle cx="227" cy="45" r="2.2" fill="#d3dbe6"/><circle cx="233" cy="45" r="2.2" fill="#d3dbe6"/>
<circle cx="202" cy="91" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<circle cx="258" cy="91" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<line x1="223" y1="81" x2="206" y2="89" stroke="#d3dbe6" stroke-width="1.4"/>
<line x1="237" y1="81" x2="254" y2="89" stroke="#d3dbe6" stroke-width="1.4"/>
<text x="230" y="130" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">1.10 D</text>
<text x="230" y="145" font-size="9" text-anchor="middle" fill="#8fa0b3">92°</text>
<text x="375" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">H₂Se</text>
<circle cx="375" cy="75" r="9" fill="#bca7f7" stroke="#d3dbe6" stroke-width="1.3"/><text x="371" y="78" font-size="9" fill="#fff" font-weight="bold">Se</text>
<circle cx="372" cy="45" r="2.2" fill="#d3dbe6"/><circle cx="378" cy="45" r="2.2" fill="#d3dbe6"/>
<circle cx="347" cy="91" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<circle cx="403" cy="91" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<line x1="368" y1="81" x2="351" y2="89" stroke="#d3dbe6" stroke-width="1.4"/>
<line x1="382" y1="81" x2="399" y2="89" stroke="#d3dbe6" stroke-width="1.4"/>
<text x="375" y="130" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">0.24 D</text>
<text x="375" y="145" font-size="9" text-anchor="middle" fill="#8fa0b3">91°</text>
<text x="520" y="14" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">H₂Te</text>
<circle cx="520" cy="75" r="9" fill="#5fd3b8" stroke="#d3dbe6" stroke-width="1.3"/><text x="516" y="78" font-size="9" fill="#fff" font-weight="bold">Te</text>
<circle cx="517" cy="45" r="2.2" fill="#d3dbe6"/><circle cx="523" cy="45" r="2.2" fill="#d3dbe6"/>
<circle cx="492" cy="91" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<circle cx="548" cy="91" r="6" fill="#1c2b3a" stroke="#d3dbe6"/>
<line x1="513" y1="81" x2="496" y2="89" stroke="#d3dbe6" stroke-width="1.4"/>
<line x1="527" y1="81" x2="544" y2="89" stroke="#d3dbe6" stroke-width="1.4"/>
<text x="520" y="130" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">0.20 D</text>
<text x="520" y="145" font-size="9" text-anchor="middle" fill="#8fa0b3">90°</text>
</svg>`,
    caption: "The complete Group 16 hydride family, with the bond angle closing toward 90 degrees down the group.",
  },
  "so2": {
    size: "sm",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 190" width="100%">
<rect x="1" y="1" width="218.0" height="188.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="110" y="18" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">SO₂ (μ = 1.63 D)</text>

<circle cx="106" cy="34" r="2.2" fill="#d3dbe6"/><circle cx="114" cy="34" r="2.2" fill="#d3dbe6"/>
<path d="M110 42 L100 62 L120 62 Z" fill="#ff6b6b"/>
<text x="132" y="52" font-size="10" fill="#ff6b6b">μ (toward lone pair)</text>

<circle cx="110" cy="85" r="11" fill="#f9dc5c" stroke="#0d1620" stroke-width="1.3"/>
<text x="110" y="89" font-size="10" font-weight="bold" text-anchor="middle" fill="#0d1620">S</text>

<circle cx="72" cy="140" r="9" fill="#ff7a68" stroke="#0d1620" stroke-width="1.3"/>
<text x="72" y="144" font-size="10" font-weight="bold" text-anchor="middle" fill="#0d1620">O</text>
<circle cx="148" cy="140" r="9" fill="#ff7a68" stroke="#0d1620" stroke-width="1.3"/>
<text x="148" y="144" font-size="10" font-weight="bold" text-anchor="middle" fill="#0d1620">O</text>

<line x1="102" y1="93" x2="79" y2="133" stroke="#d3dbe6" stroke-width="2"/>
<line x1="107" y1="96" x2="84" y2="136" stroke="#d3dbe6" stroke-width="1.3"/>
<line x1="118" y1="93" x2="141" y2="133" stroke="#d3dbe6" stroke-width="2"/>
<line x1="113" y1="96" x2="136" y2="136" stroke="#d3dbe6" stroke-width="1.3"/>

<text x="110" y="172" font-size="10" text-anchor="middle" fill="#8fa0b3">bent, AX₂E</text>
</svg>`,
    caption: "SO2: bent AX2E geometry. The S=O bond resultant is opposed by the sulfur lone-pair moment, and the net dipole ends up pointing away from the two S=O bonds, along the lone-pair direction.",
  },
  "maleic-fumaric": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 150" width="100%">
<rect x="1" y="1" width="458.0" height="148.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<text x="110" y="18" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">maleic acid — cis (μ≠0)</text>
<line x1="70" y1="70" x2="150" y2="70" stroke="#d3dbe6" stroke-width="2.5"/>
<line x1="50" y1="45" x2="70" y2="70" stroke="#d3dbe6" stroke-width="2"/><circle cx="45" cy="40" r="7" fill="#1c2b3a" stroke="#d3dbe6"/><text x="41" y="44" font-size="9" fill="#d3dbe6">H</text>
<line x1="50" y1="95" x2="70" y2="70" stroke="#d3dbe6" stroke-width="2"/><text x="15" y="102" font-size="9" fill="#ff8a8a" font-weight="bold">HOOC</text>
<line x1="170" y1="45" x2="150" y2="70" stroke="#d3dbe6" stroke-width="2"/><circle cx="175" cy="40" r="7" fill="#1c2b3a" stroke="#d3dbe6"/><text x="171" y="44" font-size="9" fill="#d3dbe6">H</text>
<line x1="170" y1="95" x2="150" y2="70" stroke="#d3dbe6" stroke-width="2"/><text x="163" y="102" font-size="9" fill="#ff8a8a" font-weight="bold">COOH</text>
<text x="350" y="18" font-size="11" text-anchor="middle" font-weight="bold" fill="#d3dbe6">fumaric acid — trans (μ≈0)</text>
<line x1="310" y1="70" x2="390" y2="70" stroke="#d3dbe6" stroke-width="2.5"/>
<line x1="290" y1="45" x2="310" y2="70" stroke="#d3dbe6" stroke-width="2"/><circle cx="285" cy="40" r="7" fill="#1c2b3a" stroke="#d3dbe6"/><text x="281" y="44" font-size="9" fill="#d3dbe6">H</text>
<line x1="290" y1="95" x2="310" y2="70" stroke="#d3dbe6" stroke-width="2"/><text x="255" y="102" font-size="9" fill="#ff8a8a" font-weight="bold">HOOC</text>
<line x1="410" y1="45" x2="390" y2="70" stroke="#d3dbe6" stroke-width="2"/><text x="403" y="44" font-size="9" fill="#ff8a8a" font-weight="bold">COOH</text>
<line x1="410" y1="95" x2="390" y2="70" stroke="#d3dbe6" stroke-width="2"/><circle cx="415" cy="100" r="7" fill="#1c2b3a" stroke="#d3dbe6"/><text x="411" y="104" font-size="9" fill="#d3dbe6">H</text>
</svg>`,
    caption: "Maleic acid (cis, HOOC-CH=CH-COOH) is polar; fumaric acid (trans) is essentially nonpolar — the same geometric-isomer logic as cis/trans-1,2-dichloroethene, applied to a biologically relevant pair.",
  },
  "clf-bond": {
    size: "sm",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 110" width="100%">
<rect x="1" y="1" width="258.0" height="108.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>

<circle cx="70" cy="55" r="11" fill="#5fd382" stroke="#d3dbe6" stroke-width="2"/><text x="63" y="60" font-size="12" fill="#fff">Cl</text>
<circle cx="150" cy="55" r="9" fill="#a8e6a1" stroke="#d3dbe6" stroke-width="2"/><text x="146" y="60" font-size="12" fill="#0d1620">F</text>
<line x1="82" y1="55" x2="140" y2="55" stroke="#d3dbe6" stroke-width="2"/>
<line x1="70" y1="85" x2="150" y2="85" stroke="#ff6b6b" stroke-width="2.5" marker-end="url(#arrClF)"/>
<text x="80" y="103" font-size="12" fill="#ff6b6b">μ(Cl–F) ≈ 0.88 D</text>
<defs><marker id="arrClF" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0,10 3,0 6" fill="#ff6b6b"/></marker></defs>
</svg>`,
    caption: "Bond dipole of Cl-F: every interhalogen X-Y is necessarily polar, since the two atoms are never identical and always differ in electronegativity.",
  },
  "n2f2-cis-trans": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 170" width="100%">
<rect x="1" y="1" width="418.0" height="168.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>
<text x="105" y="20" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">trans-N₂F₂ (μ = 0)</text>
<circle cx="80" cy="70" r="3" fill="#d3dbe6"/><circle cx="87" cy="65" r="3" fill="#d3dbe6"/>
<circle cx="85" cy="72" r="10" fill="#7aa2ff" stroke="#0d1620" stroke-width="1.3"/><text x="81" y="76" font-size="10" font-weight="bold" fill="#fff">N</text>
<circle cx="135" cy="72" r="10" fill="#7aa2ff" stroke="#0d1620" stroke-width="1.3"/><text x="131" y="76" font-size="10" font-weight="bold" fill="#fff">N</text>
<line x1="95" y1="72" x2="125" y2="72" stroke="#d3dbe6" stroke-width="2"/>
<circle cx="163" cy="66" r="3" fill="#d3dbe6"/><circle cx="163" cy="58" r="3" fill="#d3dbe6"/>
<circle cx="60" cy="105" r="9" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.3"/><text x="56" y="109" font-size="10" font-weight="bold" fill="#0d1620">F</text>
<line x1="79" y1="80" x2="65" y2="98" stroke="#d3dbe6" stroke-width="1.8"/>
<circle cx="160" cy="40" r="9" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.3"/><text x="156" y="44" font-size="10" font-weight="bold" fill="#0d1620">F</text>
<line x1="141" y1="64" x2="155" y2="46" stroke="#d3dbe6" stroke-width="1.8"/>
<text x="105" y="150" font-size="10" text-anchor="middle" fill="#8fa0b3">F atoms opposite</text>

<text x="315" y="20" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">cis-N₂F₂ (μ ≈ 0.16 D)</text>
<circle cx="290" cy="60" r="3" fill="#d3dbe6"/><circle cx="283" cy="53" r="3" fill="#d3dbe6"/>
<circle cx="295" cy="70" r="10" fill="#7aa2ff" stroke="#0d1620" stroke-width="1.3"/><text x="291" y="74" font-size="10" font-weight="bold" fill="#fff">N</text>
<circle cx="345" cy="70" r="10" fill="#7aa2ff" stroke="#0d1620" stroke-width="1.3"/><text x="341" y="74" font-size="10" font-weight="bold" fill="#fff">N</text>
<line x1="305" y1="70" x2="335" y2="70" stroke="#d3dbe6" stroke-width="2"/>
<circle cx="350" cy="60" r="3" fill="#d3dbe6"/><circle cx="357" cy="53" r="3" fill="#d3dbe6"/>
<circle cx="270" cy="105" r="9" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.3"/><text x="266" y="109" font-size="10" font-weight="bold" fill="#0d1620">F</text>
<line x1="289" y1="78" x2="275" y2="98" stroke="#d3dbe6" stroke-width="1.8"/>
<circle cx="370" cy="105" r="9" fill="#a8e6a1" stroke="#0d1620" stroke-width="1.3"/><text x="366" y="109" font-size="10" font-weight="bold" fill="#0d1620">F</text>
<line x1="351" y1="78" x2="365" y2="98" stroke="#d3dbe6" stroke-width="1.8"/>
<text x="320" y="150" font-size="10" text-anchor="middle" fill="#8fa0b3">F atoms same side</text>
</svg>`,
    caption: "trans-N2F2 (F atoms opposite, mu=0) vs cis-N2F2 (F atoms same side, mu=0.16 D) -- nitrogen lone-pair contributions substantially offset the naive bond-vector prediction in both isomers.",
  },
  "ethyl-vinyl-chloroacetylene": {
    size: "lg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 140" width="100%">
<rect x="1" y="1" width="638.0" height="138.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>
<text x="105" y="28" font-size="13" text-anchor="middle" fill="#d3dbe6">CH₃–CH₂–Cl</text>
<line x1="30" y1="60" x2="180" y2="60" stroke="#3a4a5c" stroke-width="2"/>
<line x1="30" y1="80" x2="130" y2="80" stroke="#ff6b6b" stroke-width="2.5" marker-end="url(#arrEV1)"/>
<text x="105" y="105" font-size="11" text-anchor="middle" fill="#d3dbe6">μ = 2.05 D (inductive only)</text>

<text x="320" y="28" font-size="13" text-anchor="middle" fill="#d3dbe6">CH₂=CH–Cl (vinyl chloride)</text>
<line x1="245" y1="60" x2="395" y2="60" stroke="#3a4a5c" stroke-width="2"/>
<line x1="245" y1="80" x2="345" y2="80" stroke="#ff6b6b" stroke-width="2.5" marker-end="url(#arrEV1)"/>
<text x="320" y="105" font-size="11" text-anchor="middle" fill="#d3dbe6">μ = 1.44 D (+R opposes −I)</text>

<text x="535" y="28" font-size="13" text-anchor="middle" fill="#d3dbe6">HC≡C–Cl</text>
<line x1="460" y1="60" x2="610" y2="60" stroke="#3a4a5c" stroke-width="2"/>
<line x1="560" y1="80" x2="460" y2="80" stroke="#bca7f7" stroke-width="2.5" marker-end="url(#arrEV2)"/>
<text x="535" y="105" font-size="11" text-anchor="middle" fill="#bca7f7">direction REVERSED</text>
<defs>
<marker id="arrEV1" markerWidth="9" markerHeight="9" refX="8" refY="2.5" orient="auto"><polygon points="0 0,9 2.5,0 5" fill="#ff6b6b"/></marker>
<marker id="arrEV2" markerWidth="9" markerHeight="9" refX="8" refY="2.5" orient="auto"><polygon points="0 0,9 2.5,0 5" fill="#bca7f7"/></marker>
</defs>
</svg>`,
    caption: "Ethyl chloride (mu=2.05 D, inductive only) vs vinyl chloride (mu=1.44 D, +R opposes -I) vs chloroacetylene (direction reversed -- -I is too weak at an sp carbon to compete with the mesomeric contribution).",
  },
  "pyrrole-furan": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 210" width="100%">
<rect x="1" y="1" width="378.0" height="208.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>
<text x="95" y="24" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">Pyrrole (μ = 1.8 D)</text>
<text x="95" y="42" font-size="10" text-anchor="middle" fill="#ff6b6b">toward ring</text>
<line x1="95" y1="50" x2="95" y2="78" stroke="#ff6b6b" stroke-width="2.5" marker-end="url(#arrPF)"/>
<polygon points="95.0,150.0 64.6,127.9 76.2,92.1 113.8,92.1 125.4,127.9" fill="none" stroke="#d3dbe6" stroke-width="2"/>
<text x="95" y="182" font-size="11" text-anchor="middle" fill="#d3dbe6">N</text>
<text x="95" y="198" font-size="11" text-anchor="middle" fill="#8fa0b3">H</text>

<text x="285" y="24" font-size="13" font-weight="bold" text-anchor="middle" fill="#d3dbe6">Furan (μ = 0.7 D)</text>
<text x="285" y="42" font-size="10" text-anchor="middle" fill="#ff6b6b">away, toward O</text>
<line x1="285" y1="50" x2="285" y2="78" stroke="#ff6b6b" stroke-width="2.5" marker-end="url(#arrPF)"/>
<polygon points="285.0,150.0 254.6,127.9 266.2,92.1 303.8,92.1 315.4,127.9" fill="none" stroke="#d3dbe6" stroke-width="2"/>
<text x="285" y="182" font-size="11" text-anchor="middle" fill="#ff7a68">O</text>
<defs><marker id="arrPF" markerWidth="9" markerHeight="9" refX="8" refY="2.5" orient="auto"><polygon points="0 0,9 2.5,0 5" fill="#ff6b6b"/></marker></defs>
</svg>`,
    caption: "Pyrrole (mu=1.8 D, net toward the ring) vs furan (mu=0.7 D, net toward O) -- the -I effect is stronger for O than N, so furan's inductive pull wins while pyrrole's ring delocalisation wins.",
  },
  "p-nitroaniline-resonance": {
    size: "sm",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="100%">
<rect x="1" y="1" width="238.0" height="238.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>
<text x="120" y="24" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">p-Nitroaniline (μ = 6.2 D)</text>
<line x1="120" y1="65" x2="141.6" y2="77.5" stroke="#d3dbe6" stroke-width="2"/>
<line x1="141.6" y1="77.5" x2="141.6" y2="102.5" stroke="#d3dbe6" stroke-width="2"/>
<line x1="141.6" y1="102.5" x2="120" y2="115" stroke="#d3dbe6" stroke-width="2"/>
<line x1="120" y1="115" x2="98.4" y2="102.5" stroke="#d3dbe6" stroke-width="2"/>
<line x1="98.4" y1="102.5" x2="98.4" y2="77.5" stroke="#d3dbe6" stroke-width="2"/>
<line x1="98.4" y1="77.5" x2="120" y2="65" stroke="#d3dbe6" stroke-width="2"/>
<line x1="122.6" y1="72.6" x2="136.5" y2="80.6" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="136.5" y1="99.4" x2="122.6" y2="107.4" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="103.9" y1="95.4" x2="103.9" y2="84.6" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="120" y1="65" x2="120" y2="45" stroke="#d3dbe6" stroke-width="1.8"/>
<text x="120" y="35" font-size="11" text-anchor="middle" font-weight="bold" fill="#8be2a8">H₂N</text>
<line x1="120" y1="115" x2="120" y2="135" stroke="#d3dbe6" stroke-width="1.8"/>
<text x="120" y="150" font-size="11" text-anchor="middle" font-weight="bold" fill="#f4c96b">NO₂</text>
<path d="M 100 55 A 40 40 0 0 0 88 95" fill="none" stroke="#bca7f7" stroke-width="2" marker-end="url(#arrPNA)"/>
<defs><marker id="arrPNA" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto"><polygon points="0 0,8 2.5,0 5" fill="#bca7f7"/></marker></defs>
<text x="120" y="200" font-size="10" text-anchor="middle" fill="#8fa0b3">+R(NH₂) / −R(NO₂) coupled</text>
<text x="120" y="216" font-size="10" text-anchor="middle" fill="#8fa0b3">through the ring</text>
</svg>`,
    caption: "p-Nitroaniline: the +R donation of -NH2 and -R withdrawal of -NO2 are electronically coupled through the ring, pushing the observed moment (6.2 D) above the simple group-vector sum (5.48 D).",
  },
  "butanedione-trans-cis": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 150" width="100%">
<rect x="1" y="1" width="418.0" height="148.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>
<text x="105" y="24" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">trans (μ = 0, more stable)</text>
<circle cx="70" cy="65" r="8" fill="#3a4a5c" stroke="#0d1620" stroke-width="1.2"/><text x="66" y="69" font-size="9" fill="#fff">C</text>
<circle cx="140" cy="65" r="8" fill="#3a4a5c" stroke="#0d1620" stroke-width="1.2"/><text x="136" y="69" font-size="9" fill="#fff">C</text>
<line x1="78" y1="65" x2="132" y2="65" stroke="#d3dbe6" stroke-width="2"/>
<circle cx="45" cy="42" r="7" fill="#ff7a68" stroke="#0d1620" stroke-width="1.1"/><text x="41" y="46" font-size="8" fill="#0d1620">O</text>
<line x1="60" y1="55" x2="52" y2="47" stroke="#d3dbe6" stroke-width="1.6"/>
<circle cx="165" cy="88" r="7" fill="#ff7a68" stroke="#0d1620" stroke-width="1.1"/><text x="161" y="92" font-size="8" fill="#0d1620">O</text>
<line x1="150" y1="75" x2="158" y2="83" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="40" y1="52" x2="25" y2="65" stroke="#ff6b6b" stroke-width="2" marker-end="url(#arrBD)"/>
<line x1="170" y1="78" x2="185" y2="65" stroke="#ff6b6b" stroke-width="2" marker-end="url(#arrBD)"/>
<text x="105" y="130" font-size="10" text-anchor="middle" fill="#8fa0b3">C=O dipoles opposed</text>

<text x="315" y="24" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">cis (μ ≠ 0, less stable)</text>
<circle cx="280" cy="65" r="8" fill="#3a4a5c" stroke="#0d1620" stroke-width="1.2"/><text x="276" y="69" font-size="9" fill="#fff">C</text>
<circle cx="350" cy="65" r="8" fill="#3a4a5c" stroke="#0d1620" stroke-width="1.2"/><text x="346" y="69" font-size="9" fill="#fff">C</text>
<line x1="288" y1="65" x2="342" y2="65" stroke="#d3dbe6" stroke-width="2"/>
<circle cx="270" cy="38" r="7" fill="#ff7a68" stroke="#0d1620" stroke-width="1.1"/><text x="266" y="42" font-size="8" fill="#0d1620">O</text>
<line x1="277" y1="58" x2="273" y2="45" stroke="#d3dbe6" stroke-width="1.6"/>
<circle cx="360" cy="38" r="7" fill="#ff7a68" stroke="#0d1620" stroke-width="1.1"/><text x="356" y="42" font-size="8" fill="#0d1620">O</text>
<line x1="353" y1="58" x2="357" y2="45" stroke="#d3dbe6" stroke-width="1.6"/>
<line x1="268" y1="45" x2="255" y2="30" stroke="#ff6b6b" stroke-width="2" marker-end="url(#arrBD)"/>
<line x1="362" y1="45" x2="375" y2="30" stroke="#ff6b6b" stroke-width="2" marker-end="url(#arrBD)"/>
<text x="315" y="130" font-size="10" text-anchor="middle" fill="#8fa0b3">C=O dipoles reinforcing</text>
<defs><marker id="arrBD" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto"><polygon points="0 0,8 2.5,0 5" fill="#ff6b6b"/></marker></defs>
</svg>`,
    caption: "Butane-2,3-dione: trans-form (mu=0, more stable) has the two C=O dipoles opposed, minimising repulsion; cis-form (mu != 0, less stable) has them reinforcing.",
  },
  "dichloroethane-anti-gauche": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 190" width="100%">
<rect x="1" y="1" width="418.0" height="188.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>
<text x="105" y="24" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">anti (μ = 0, more stable)</text>
<circle cx="105" cy="105" r="52" fill="none" stroke="#9fb0c0" stroke-width="1.6"/>
<circle cx="105" cy="105" r="4" fill="#3a4a5c" stroke="#0d1620"/>
<line x1="105" y1="105" x2="105" y2="55" stroke="#d3dbe6" stroke-width="1.6"/><circle cx="105" cy="55" r="7" fill="#1c2b3a" stroke="#0d1620"/><text x="101" y="59" font-size="8" fill="#d3dbe6">H</text>
<line x1="105" y1="105" x2="60" y2="130" stroke="#d3dbe6" stroke-width="1.6"/><circle cx="60" cy="130" r="7" fill="#1c2b3a" stroke="#0d1620"/><text x="56" y="134" font-size="8" fill="#d3dbe6">H</text>
<line x1="105" y1="105" x2="150" y2="130" stroke="#d3dbe6" stroke-width="1.6" stroke-dasharray="3,2"/><circle cx="150" cy="130" r="9" fill="#5fd382" stroke="#0d1620"/><text x="145" y="134" font-size="8" fill="#fff">Cl</text>
<line x1="98" y1="112" x2="66" y2="151" stroke="#9fb0c0" stroke-width="1.4"/><circle cx="60" cy="157" r="9" fill="#5fd382" stroke="#0d1620"/><text x="55" y="161" font-size="8" fill="#fff">Cl</text>
<line x1="112" y1="112" x2="144" y2="151" stroke="#9fb0c0" stroke-width="1.4"/><circle cx="150" cy="157" r="7" fill="#1c2b3a" stroke="#0d1620"/><text x="146" y="161" font-size="8" fill="#d3dbe6">H</text>
<text x="105" y="175" font-size="10" text-anchor="middle" fill="#8fa0b3">Cl–C–C–Cl = 180°</text>

<text x="315" y="24" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">gauche (μ = 3.2 D)</text>
<circle cx="315" cy="105" r="52" fill="none" stroke="#9fb0c0" stroke-width="1.6"/>
<circle cx="315" cy="105" r="4" fill="#3a4a5c" stroke="#0d1620"/>
<line x1="315" y1="105" x2="315" y2="55" stroke="#d3dbe6" stroke-width="1.6"/><circle cx="315" cy="55" r="7" fill="#1c2b3a" stroke="#0d1620"/><text x="311" y="59" font-size="8" fill="#d3dbe6">H</text>
<line x1="315" y1="105" x2="270" y2="130" stroke="#d3dbe6" stroke-width="1.6"/><circle cx="270" cy="130" r="7" fill="#1c2b3a" stroke="#0d1620"/><text x="266" y="134" font-size="8" fill="#d3dbe6">H</text>
<line x1="315" y1="105" x2="360" y2="130" stroke="#d3dbe6" stroke-width="1.6" stroke-dasharray="3,2"/><circle cx="360" cy="130" r="9" fill="#5fd382" stroke="#0d1620"/><text x="355" y="134" font-size="8" fill="#fff">Cl</text>
<line x1="308" y1="112" x2="276" y2="151" stroke="#9fb0c0" stroke-width="1.4"/><circle cx="270" cy="157" r="7" fill="#1c2b3a" stroke="#0d1620"/><text x="266" y="161" font-size="8" fill="#d3dbe6">H</text>
<line x1="322" y1="112" x2="336" y2="128" stroke="#9fb0c0" stroke-width="1.4"/><circle cx="345" cy="145" r="9" fill="#5fd382" stroke="#0d1620"/><text x="340" y="149" font-size="8" fill="#fff">Cl</text>
<text x="315" y="175" font-size="10" text-anchor="middle" fill="#8fa0b3">Cl–C–C–Cl ≈ 60°</text>
</svg>`,
    caption: "Newman projections of 1,2-dichloroethane: anti (mu=0, intrinsically more stable) vs gauche (mu=3.2 D) -- the nonzero observed gas-phase moment (1.2 D) proves a real gauche population is thermally accessible.",
  },
  "n2h4-h2o2-conformations": {
    size: "md",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 210" width="100%">
<rect x="1" y="1" width="418.0" height="208.0" rx="14" fill="#07131f" stroke="#213449" stroke-width="1.5"/>
<text x="105" y="20" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">N₂H₄ — gauche/skew, ≈95°</text>
<circle cx="105" cy="75" r="10" fill="#7aa2ff" stroke="#0d1620" stroke-width="1.3"/><text x="101" y="79" font-size="10" font-weight="bold" fill="#fff">N</text>
<circle cx="105" cy="115" r="10" fill="#7aa2ff" stroke="#0d1620" stroke-width="1.3"/><text x="101" y="119" font-size="10" font-weight="bold" fill="#fff">N</text>
<line x1="105" y1="85" x2="105" y2="105" stroke="#d3dbe6" stroke-width="2"/>
<circle cx="70" cy="50" r="3" fill="#d3dbe6"/><circle cx="78" cy="55" r="3" fill="#d3dbe6"/>
<circle cx="70" cy="45" r="7" fill="#1c2b3a" stroke="#0d1620"/><text x="66" y="49" font-size="9" fill="#d3dbe6">H</text>
<line x1="97" y1="68" x2="76" y2="52" stroke="#d3dbe6" stroke-width="1.6"/>
<circle cx="140" cy="45" r="7" fill="#1c2b3a" stroke="#0d1620"/><text x="136" y="49" font-size="9" fill="#d3dbe6">H</text>
<line x1="113" y1="68" x2="134" y2="50" stroke="#d3dbe6" stroke-width="1.6"/>
<path d="M 92 55 A 24 24 0 0 1 118 55" fill="none" stroke="#ff6b6b" stroke-width="1.3"/>
<text x="105" y="42" font-size="9" text-anchor="middle" fill="#ff6b6b">95°</text>
<circle cx="70" cy="145" r="7" fill="#1c2b3a" stroke="#0d1620"/><text x="66" y="149" font-size="9" fill="#d3dbe6">H</text>
<line x1="97" y1="122" x2="76" y2="140" stroke="#d3dbe6" stroke-width="1.6"/>
<circle cx="140" cy="145" r="7" fill="#1c2b3a" stroke="#0d1620"/><text x="136" y="149" font-size="9" fill="#d3dbe6">H</text>
<line x1="113" y1="122" x2="134" y2="140" stroke="#d3dbe6" stroke-width="1.6"/>
<text x="105" y="185" font-size="10" text-anchor="middle" fill="#8fa0b3">μ ≈ 1.85 D</text>

<text x="315" y="20" font-size="12" font-weight="bold" text-anchor="middle" fill="#d3dbe6">H₂O₂ — open-book, O–O spine</text>
<circle cx="315" cy="75" r="9" fill="#ff7a68" stroke="#0d1620" stroke-width="1.3"/><text x="311" y="79" font-size="10" font-weight="bold" fill="#0d1620">O</text>
<circle cx="315" cy="115" r="9" fill="#ff7a68" stroke="#0d1620" stroke-width="1.3"/><text x="311" y="119" font-size="10" font-weight="bold" fill="#0d1620">O</text>
<line x1="315" y1="84" x2="315" y2="106" stroke="#d3dbe6" stroke-width="2"/>
<circle cx="280" cy="50" r="7" fill="#1c2b3a" stroke="#0d1620"/><text x="276" y="54" font-size="9" fill="#d3dbe6">H</text>
<line x1="307" y1="68" x2="286" y2="53" stroke="#d3dbe6" stroke-width="1.6" stroke-dasharray="2.5,2"/>
<circle cx="350" cy="140" r="7" fill="#1c2b3a" stroke="#0d1620"/><text x="346" y="144" font-size="9" fill="#d3dbe6">H</text>
<line x1="323" y1="122" x2="344" y2="137" stroke="#d3dbe6" stroke-width="1.6"/>
<path d="M 300 60 L 260 70" stroke="#9fb0c0" stroke-width="1" stroke-dasharray="2,2"/>
<path d="M 330 130 L 370 120" stroke="#9fb0c0" stroke-width="1" stroke-dasharray="2,2"/>
<text x="315" y="182" font-size="10" text-anchor="middle" fill="#8fa0b3">dihedral ≈ 111.5° (gas)</text>
<text x="315" y="196" font-size="10" text-anchor="middle" fill="#8fa0b3">μ ≈ 2.0 D</text>
</svg>`,
    caption: "N2H4 adopts a gauche/skew conformation (H-N-N-H dihedral about 95 degrees); H2O2 adopts an open-book conformation about the O-O spine (dihedral about 111.5 degrees, gas phase) -- both driven by lone-pair repulsion.",
  },
};
