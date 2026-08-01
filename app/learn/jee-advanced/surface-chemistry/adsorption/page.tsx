import type { Metadata } from "next";
import Link from "next/link";
import "katex/dist/katex.min.css";
import AdsorptionContent from "./AdsorptionContent";

export const metadata: Metadata = {
  title: "Adsorption — Complete JEE Advanced Notes | Synergic Bond",
  description:
    "Complete JEE Advanced notes on adsorption, isotherms, kinetics, applications, surface tension, Gibbs adsorption and CMC.",
};

const adsorptionHtml = `<p><strong>CHEMISTRY OS  ·  SURFACE CHEMISTRY</strong></p><p><strong>Adsorption — Complete Notes</strong></p><p>Theory · Derivations · MOT · Isotherms · Kinetics · Applications · Practice</p><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Diffusion, adsorption, intermediate formation, desorption and diffusion away"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<line x1="60" y1="230" x2="740" y2="230" stroke="#64748b" stroke-width="5"/>
<circle cx="80" cy="230" r="10" fill="#22d3ee"/><circle cx="135" cy="230" r="10" fill="#22d3ee"/><circle cx="190" cy="230" r="10" fill="#22d3ee"/><circle cx="245" cy="230" r="10" fill="#22d3ee"/><circle cx="300" cy="230" r="10" fill="#22d3ee"/><circle cx="355" cy="230" r="10" fill="#22d3ee"/><circle cx="410" cy="230" r="10" fill="#22d3ee"/><circle cx="465" cy="230" r="10" fill="#22d3ee"/><circle cx="520" cy="230" r="10" fill="#22d3ee"/><circle cx="575" cy="230" r="10" fill="#22d3ee"/><circle cx="630" cy="230" r="10" fill="#22d3ee"/><circle cx="685" cy="230" r="10" fill="#22d3ee"/><circle cx="740" cy="230" r="10" fill="#22d3ee"/>
<circle cx="120" cy="110" r="15" fill="#f59e0b"/>
<circle cx="220" cy="150" r="15" fill="#f59e0b"/>
<circle cx="320" cy="185" r="15" fill="#a78bfa"/><circle cx="350" cy="200" r="15" fill="#f59e0b"/>
<circle cx="480" cy="150" r="15" fill="#34d399"/>
<circle cx="640" cy="110" r="15" fill="#fbbf24"/><circle cx="670" cy="95" r="12" fill="#a78bfa"/>
<text x="120" y="80" text-anchor="middle" fill="#94a3b8" font-size="15">diffusion</text>
<text x="270" y="270" text-anchor="middle" fill="#67e8f9" font-size="15">adsorption</text>
<text x="335" y="255" text-anchor="middle" fill="#c4b5fd" font-size="15">intermediate</text>
<text x="480" y="120" text-anchor="middle" fill="#6ee7b7" font-size="15">desorption</text>
<text x="655" y="70" text-anchor="middle" fill="#fbbf24" font-size="15">diffusion away</text>
<text x="400" y="30" text-anchor="middle" fill="#f8fafc" font-size="18" font-weight="700">Five-stage surface event</text>
</svg><figcaption>The five-stage sequence at a catalytic surface: diffusion to the surface, adsorption, intermediate formation, desorption of product, diffusion away.</figcaption></figure>
  </p><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Balanced bulk forces versus residual unbalanced surface forces"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<rect x="35" y="150" width="730" height="120" rx="16" fill="#0f2139"/>
<line x1="35" y1="150" x2="765" y2="150" stroke="#22d3ee" stroke-width="4"/>
<circle cx="75" cy="175" r="11" fill="#f59e0b"/><circle cx="125" cy="175" r="11" fill="#f59e0b"/><circle cx="175" cy="175" r="11" fill="#f59e0b"/><circle cx="225" cy="175" r="11" fill="#f59e0b"/><circle cx="275" cy="175" r="11" fill="#f59e0b"/><circle cx="325" cy="175" r="11" fill="#f59e0b"/><circle cx="375" cy="175" r="11" fill="#f59e0b"/><circle cx="425" cy="175" r="11" fill="#f59e0b"/><circle cx="475" cy="175" r="11" fill="#f59e0b"/><circle cx="525" cy="175" r="11" fill="#f59e0b"/><circle cx="575" cy="175" r="11" fill="#f59e0b"/><circle cx="625" cy="175" r="11" fill="#f59e0b"/><circle cx="675" cy="175" r="11" fill="#f59e0b"/><circle cx="725" cy="175" r="11" fill="#f59e0b"/><circle cx="75" cy="213" r="11" fill="#31527d"/><circle cx="125" cy="213" r="11" fill="#31527d"/><circle cx="175" cy="213" r="11" fill="#31527d"/><circle cx="225" cy="213" r="11" fill="#31527d"/><circle cx="275" cy="213" r="11" fill="#31527d"/><circle cx="325" cy="213" r="11" fill="#31527d"/><circle cx="375" cy="213" r="11" fill="#31527d"/><circle cx="425" cy="213" r="11" fill="#31527d"/><circle cx="475" cy="213" r="11" fill="#31527d"/><circle cx="525" cy="213" r="11" fill="#31527d"/><circle cx="575" cy="213" r="11" fill="#31527d"/><circle cx="625" cy="213" r="11" fill="#31527d"/><circle cx="675" cy="213" r="11" fill="#31527d"/><circle cx="725" cy="213" r="11" fill="#31527d"/>
<line x1="400" y1="175" x2="400" y2="130" stroke="#fbbf24" stroke-width="3"/>
<line x1="400" y1="175" x2="360" y2="205" stroke="#fbbf24" stroke-width="3"/>
<line x1="400" y1="175" x2="440" y2="205" stroke="#fbbf24" stroke-width="3"/>
<line x1="200" y1="213" x2="200" y2="180" stroke="#64748b" stroke-width="2"/>
<line x1="200" y1="213" x2="230" y2="235" stroke="#64748b" stroke-width="2"/>
<line x1="200" y1="213" x2="170" y2="235" stroke="#64748b" stroke-width="2"/>
<line x1="200" y1="213" x2="200" y2="246" stroke="#64748b" stroke-width="2"/>
<text x="400" y="55" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="700">Bulk forces balanced &#183; surface forces residual</text>
<text x="405" y="120" fill="#fbbf24" font-size="15">surface atom: unbalanced pull</text>
<text x="120" y="290" fill="#94a3b8" font-size="14">bulk atom: attractions cancel</text>
</svg><figcaption>Inside the bulk, attractive forces cancel in every direction. At the surface, the missing outer neighbours leave a net residual force pulling inward.</figcaption></figure>
  </p><h2><strong>01  The Active Interface</strong></h2><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Adsorption, absorption and sorption compared"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<rect x="60" y="70" width="180" height="150" rx="16" fill="#0f2139" stroke="#22d3ee" stroke-width="3"/>
<circle cx="80" cy="105" r="5" fill="#22d3ee"/><circle cx="100" cy="105" r="5" fill="#22d3ee"/><circle cx="120" cy="105" r="5" fill="#22d3ee"/><circle cx="140" cy="105" r="5" fill="#22d3ee"/><circle cx="160" cy="105" r="5" fill="#22d3ee"/><circle cx="180" cy="105" r="5" fill="#22d3ee"/><circle cx="200" cy="105" r="5" fill="#22d3ee"/><circle cx="220" cy="105" r="5" fill="#22d3ee"/>
<text x="150" y="245" text-anchor="middle" fill="#f8fafc" font-size="18" font-weight="700">Adsorption</text>
<text x="150" y="268" text-anchor="middle" fill="#94a3b8" font-size="13">surface only</text>

<rect x="310" y="70" width="180" height="150" rx="16" fill="#0f2139" stroke="#a78bfa" stroke-width="3"/>
<circle cx="340" cy="100" r="5" fill="#a78bfa"/><circle cx="360" cy="100" r="5" fill="#a78bfa"/><circle cx="380" cy="100" r="5" fill="#a78bfa"/><circle cx="400" cy="100" r="5" fill="#a78bfa"/><circle cx="420" cy="100" r="5" fill="#a78bfa"/><circle cx="440" cy="100" r="5" fill="#a78bfa"/><circle cx="340" cy="122" r="5" fill="#a78bfa"/><circle cx="360" cy="122" r="5" fill="#a78bfa"/><circle cx="380" cy="122" r="5" fill="#a78bfa"/><circle cx="400" cy="122" r="5" fill="#a78bfa"/><circle cx="420" cy="122" r="5" fill="#a78bfa"/><circle cx="440" cy="122" r="5" fill="#a78bfa"/><circle cx="340" cy="144" r="5" fill="#a78bfa"/><circle cx="360" cy="144" r="5" fill="#a78bfa"/><circle cx="380" cy="144" r="5" fill="#a78bfa"/><circle cx="400" cy="144" r="5" fill="#a78bfa"/><circle cx="420" cy="144" r="5" fill="#a78bfa"/><circle cx="440" cy="144" r="5" fill="#a78bfa"/><circle cx="340" cy="166" r="5" fill="#a78bfa"/><circle cx="360" cy="166" r="5" fill="#a78bfa"/><circle cx="380" cy="166" r="5" fill="#a78bfa"/><circle cx="400" cy="166" r="5" fill="#a78bfa"/><circle cx="420" cy="166" r="5" fill="#a78bfa"/><circle cx="440" cy="166" r="5" fill="#a78bfa"/>
<text x="400" y="245" text-anchor="middle" fill="#f8fafc" font-size="18" font-weight="700">Absorption</text>
<text x="400" y="268" text-anchor="middle" fill="#94a3b8" font-size="13">bulk throughout</text>

<rect x="560" y="70" width="180" height="150" rx="16" fill="#0f2139" stroke="#34d399" stroke-width="3"/>
<circle cx="580" cy="105" r="5" fill="#34d399"/><circle cx="600" cy="105" r="5" fill="#34d399"/><circle cx="620" cy="105" r="5" fill="#34d399"/><circle cx="640" cy="105" r="5" fill="#34d399"/><circle cx="660" cy="105" r="5" fill="#34d399"/><circle cx="680" cy="105" r="5" fill="#34d399"/><circle cx="700" cy="105" r="5" fill="#34d399"/><circle cx="720" cy="105" r="5" fill="#34d399"/><circle cx="600" cy="135" r="4" fill="#34d399" opacity="0.55"/><circle cx="620" cy="135" r="4" fill="#34d399" opacity="0.55"/><circle cx="640" cy="135" r="4" fill="#34d399" opacity="0.55"/><circle cx="660" cy="135" r="4" fill="#34d399" opacity="0.55"/><circle cx="680" cy="135" r="4" fill="#34d399" opacity="0.55"/><circle cx="600" cy="155" r="4" fill="#34d399" opacity="0.55"/><circle cx="620" cy="155" r="4" fill="#34d399" opacity="0.55"/><circle cx="640" cy="155" r="4" fill="#34d399" opacity="0.55"/><circle cx="660" cy="155" r="4" fill="#34d399" opacity="0.55"/><circle cx="680" cy="155" r="4" fill="#34d399" opacity="0.55"/>
<text x="650" y="245" text-anchor="middle" fill="#f8fafc" font-size="18" font-weight="700">Sorption</text>
<text x="650" y="268" text-anchor="middle" fill="#94a3b8" font-size="13">surface + bulk</text>
</svg><figcaption>Adsorption concentrates a substance at the surface only; absorption spreads it uniformly through the bulk; sorption is the general term covering both.</figcaption></figure>
  </p><h3><strong>1.1 Residual Forces and Surface Energy</strong></h3><p>Inside the bulk of a solid or liquid every particle is surrounded on all sides. Attractive forces from opposite directions cancel, so the net force on a bulk particle is essentially zero. At the surface, however, particles have neighbours on only one side. The unbalanced attractive force that remains is called residual force. Because of these residual forces the surface is a region of higher potential energy and greater chemical reactivity than the bulk.</p><p>Creating additional surface requires work against residual forces. For a reversible increase of area dA at constant temperature and composition the free-energy change is</p><p><strong>dG = γ dA</strong></p><p>where γ is the surface free energy per unit area. For a pure liquid γ is numerically equal to the surface tension. Any spontaneous process that reduces high-energy surface area or that satisfies residual bonding (for example by adsorbing foreign molecules) is thermodynamically favoured.</p><p><strong>KEY IDEA  </strong>Adsorption, wetting and many catalytic events are driven by the system’s tendency to lower its surface free energy.</p><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Physisorption versus chemisorption bonding"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<line x1="400" y1="45" x2="400" y2="255" stroke="#334155" stroke-width="2" stroke-dasharray="5 5"/>
<text x="200" y="55" text-anchor="middle" fill="#22d3ee" font-size="20" font-weight="700">Physisorption</text>
<text x="600" y="55" text-anchor="middle" fill="#f59e0b" font-size="20" font-weight="700">Chemisorption</text>
<line x1="90" y1="180" x2="310" y2="180" stroke="#475569" stroke-width="6"/>
<circle cx="200" cy="140" r="16" fill="#22d3ee"/>
<line x1="200" y1="156" x2="200" y2="176" stroke="#67e8f9" stroke-width="3" stroke-dasharray="3 3"/>
<text x="200" y="215" text-anchor="middle" fill="#94a3b8" font-size="13">weak van der Waals gap</text>
<line x1="490" y1="180" x2="710" y2="180" stroke="#475569" stroke-width="6"/>
<circle cx="600" cy="150" r="16" fill="#f59e0b"/>
<line x1="600" y1="166" x2="600" y2="180" stroke="#fbbf24" stroke-width="5"/>
<text x="600" y="215" text-anchor="middle" fill="#94a3b8" font-size="13">shared chemical bond</text>
<text x="200" y="248" text-anchor="middle" fill="#67e8f9" font-size="13">20&#8211;40 kJ mol&#8315;&#185; &#183; reversible &#183; multilayer</text>
<text x="600" y="248" text-anchor="middle" fill="#fbbf24" font-size="13">80&#8211;240 kJ mol&#8315;&#185; &#183; often irreversible &#183; monolayer</text>
</svg><figcaption>Physisorption holds the adsorbate by weak van der Waals attraction across a gap; chemisorption forms a genuine chemical bond to the surface.</figcaption></figure>
  </p><p><em>Bulk forces balanced · Surface residual forces</em></p><h3><strong>1.2 Specific Surface Area</strong></h3><p>For a given mass the fraction of atoms that lie at the surface rises rapidly as particle size falls. Internal porosity multiplies the accessible area still further. Two elementary geometric results are used constantly:</p><p>Cube of edge L and density ρ:</p><p><strong>aₛ = 6 / (ρ L)</strong></p><p>Sphere of diameter d:</p><p><strong>aₛ = 6 / (ρ d)</strong></p><p>Activated charcoal and commercial catalysts routinely possess specific surface areas of several hundred m² g⁻¹ precisely because they are both finely divided and highly porous.</p><h3><strong>1.3 Adsorption, Absorption and Sorption</strong></h3><p>Adsorption is the accumulation of a substance at the interface between two phases. The concentration of the adsorbate is higher at the surface than in the adjoining bulk phases. Absorption is the penetration of a substance into the bulk of a solid or liquid so that the concentration is essentially uniform throughout the volume. Sorption is a general term used when both processes may occur or when the experimental distinction is unclear.</p><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Potential energy curve with physisorption well, activation barrier and chemisorption well"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<line x1="90" y1="250" x2="730" y2="250" stroke="#94a3b8"/>
<line x1="90" y1="250" x2="90" y2="35" stroke="#94a3b8"/>
<path d="M100 90 C185 95 205 170 275 190 C360 210 415 155 500 100 C565 62 640 75 715 85" fill="none" stroke="#22d3ee" stroke-width="5"/>
<path d="M100 80 C210 80 250 100 300 105 C350 110 365 60 405 58 C450 56 470 235 535 237 C610 239 635 120 715 95" fill="none" stroke="#f59e0b" stroke-width="5"/>
<line x1="405" y1="58" x2="405" y2="107" stroke="#fda4af" stroke-dasharray="6 6"/>
<text x="185" y="180" fill="#22d3ee" font-size="15">physisorption well</text>
<text x="520" y="222" fill="#f59e0b" font-size="15">chemisorption well</text>
<text x="415" y="72" fill="#fda4af" font-size="13">activation barrier</text>
<text x="650" y="278" fill="#e2e8f0" font-size="15">distance from surface</text>
<text x="30" y="70" fill="#e2e8f0" font-size="15" transform="rotate(-90 30 70)">potential energy</text>
</svg><figcaption>Potential energy versus distance from the surface: a shallow physisorption well at larger separation, an activation barrier, then a deeper chemisorption well.</figcaption></figure>
  </p><p>Classic illustrations:</p><ul><li>Chalk retains ink colour on its surface → adsorption.</li><li>Anhydrous calcium chloride takes up water vapour into its lattice → absorption.</li><li>Silica gel removes moisture from air by adsorption in its pores.</li></ul><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Adsorbate-surface molecular orbital donation and back-donation"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<text x="125" y="45" fill="#67e8f9" font-size="17" font-weight="700">adsorbate orbitals</text>
<text x="580" y="45" fill="#a78bfa" font-size="17" font-weight="700">metal d band</text>
<line x1="90" y1="110" x2="230" y2="110" stroke="#67e8f9" stroke-width="5"/>
<line x1="90" y1="200" x2="230" y2="200" stroke="#67e8f9" stroke-width="5"/>
<text x="45" y="116" fill="#e2e8f0" font-size="14">LUMO</text>
<text x="45" y="206" fill="#e2e8f0" font-size="14">HOMO</text>
<line x1="560" y1="105" x2="710" y2="105" stroke="#8b5cf6" stroke-width="5"/><line x1="560" y1="130" x2="710" y2="130" stroke="#c4b5fd" stroke-width="5"/><line x1="560" y1="155" x2="710" y2="155" stroke="#8b5cf6" stroke-width="5"/><line x1="560" y1="180" x2="710" y2="180" stroke="#c4b5fd" stroke-width="5"/><line x1="560" y1="200" x2="710" y2="200" stroke="#8b5cf6" stroke-width="5"/>
<path d="M230 200 C325 200 385 155 560 135" fill="none" stroke="#fbbf24" stroke-width="4"/>
<path d="M560 180 C430 180 350 135 230 110" fill="none" stroke="#34d399" stroke-width="4"/>
<text x="270" y="235" fill="#fbbf24" font-size="15">donation: adsorbate &#8594; metal</text>
<text x="270" y="80" fill="#34d399" font-size="15">back-donation: metal &#8594; adsorbate</text>
<text x="400" y="278" text-anchor="middle" fill="#94a3b8" font-size="14">donation and back-donation together activate the adsorbed molecule</text>
</svg><figcaption>Donation from an occupied adsorbate orbital into empty metal states, and back-donation from filled metal d-states into a vacant adsorbate orbital, together form and activate the surface bond.</figcaption></figure>
  </p><h3><strong>1.4 Thermodynamics of Spontaneous Adsorption</strong></h3><p>The Gibbs equation for a process at constant temperature is</p><p><strong>ΔG = ΔH − T ΔS</strong></p><p>When a molecule is adsorbed it loses translational freedom, so the entropy change ΔS is negative. For the free-energy change ΔG to be negative the enthalpy change ΔH must therefore be negative and large enough in magnitude to overcome the unfavourable −TΔS term. In other words, adsorption is always exothermic. Raising the temperature makes the −TΔS contribution more positive and eventually reverses the process (desorption). This is why physisorption is favoured by low temperature.</p><p><strong>JEE TRAP  </strong>Adsorption is never endothermic under ordinary conditions. Claims that chemisorption can be endothermic are incorrect for the standard definition of the process.</p><h3><strong>1.5 Everyday and Industrial Illustrations</strong></h3><ul><li>Activated charcoal in gas masks adsorbs toxic gases.</li><li>Animal charcoal decolourises sugar syrup and dye solutions.</li><li>Collectors adsorbed on ore particles make them hydrophobic in froth flotation.</li><li>Differential adsorption on a stationary phase is the basis of chromatography.</li><li>Silica gel and molecular sieves adsorb water vapour for drying.</li><li>Reactants must adsorb on a solid catalyst before a heterogeneous catalytic reaction can occur.</li></ul><h2><strong>02  Physisorption and Chemisorption</strong></h2><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Langmuir isotherm derivation summary"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<text x="400" y="45" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="700">Langmuir derivation</text>
<text x="60" y="95" fill="#94a3b8" font-size="15">rate of adsorption</text>
<text x="60" y="122" fill="#67e8f9" font-size="17" font-weight="700">r&#8320; = k&#8320; P (1 &#8722; &#952;)</text>
<text x="60" y="165" fill="#94a3b8" font-size="15">rate of desorption</text>
<text x="60" y="192" fill="#fbbf24" font-size="17" font-weight="700">r_d = k_d &#952;</text>
<line x1="400" y1="70" x2="400" y2="220" stroke="#334155" stroke-dasharray="5 5"/>
<text x="440" y="95" fill="#94a3b8" font-size="15">at equilibrium r&#8320; = r_d</text>
<text x="440" y="140" fill="#a78bfa" font-size="19" font-weight="700">&#952; = KP / (1+KP)</text>
<text x="440" y="180" fill="#34d399" font-size="17" font-weight="700">q = q&#8344; &#952;</text>
<text x="400" y="260" text-anchor="middle" fill="#94a3b8" font-size="14">fixed identical sites &#183; monolayer &#183; no lateral interaction &#183; dynamic equilibrium</text>
</svg><figcaption>Equating the rate of adsorption to the rate of desorption on a uniform, monolayer surface yields the Langmuir fractional coverage θ = KP/(1+KP).</figcaption></figure>
  </p><h3><strong>2.1 Fundamental Distinction</strong></h3><p>If the residual surface forces hold the adsorbate by weak van der Waals interactions the process is physisorption (physical adsorption). If a genuine chemical bond (covalent or ionic) is formed between adsorbate and surface atoms the process is chemisorption (chemical adsorption). The two limiting cases differ in enthalpy, specificity, number of layers, reversibility and activation energy.</p><div class="table-wrap"><div class="converted-card-list"><section class="converted-card"><h4>Bonding force</h4><div class="converted-card-row"><strong>Physisorption</strong><div><p>van der Waals</p></div></div><div class="converted-card-row"><strong>Chemisorption</strong><div><p>Chemical (covalent/ionic)</p></div></div></section><section class="converted-card"><h4>Enthalpy change</h4><div class="converted-card-row"><strong>Physisorption</strong><div><p>20–40 kJ mol⁻¹</p></div></div><div class="converted-card-row"><strong>Chemisorption</strong><div><p>80–240 kJ mol⁻¹ or higher</p></div></div></section><section class="converted-card"><h4>Specificity</h4><div class="converted-card-row"><strong>Physisorption</strong><div><p>Non-specific</p></div></div><div class="converted-card-row"><strong>Chemisorption</strong><div><p>Highly specific</p></div></div></section><section class="converted-card"><h4>Layers</h4><div class="converted-card-row"><strong>Physisorption</strong><div><p>Multilayer possible</p></div></div><div class="converted-card-row"><strong>Chemisorption</strong><div><p>Monolayer only</p></div></div></section><section class="converted-card"><h4>Reversibility</h4><div class="converted-card-row"><strong>Physisorption</strong><div><p>Easily reversible</p></div></div><div class="converted-card-row"><strong>Chemisorption</strong><div><p>Often irreversible</p></div></div></section><section class="converted-card"><h4>Activation energy</h4><div class="converted-card-row"><strong>Physisorption</strong><div><p>≈ 0</p></div></div><div class="converted-card-row"><strong>Chemisorption</strong><div><p>Often appreciable</p></div></div></section><section class="converted-card"><h4>T dependence</h4><div class="converted-card-row"><strong>Physisorption</strong><div><p>Decreases with ↑T</p></div></div><div class="converted-card-row"><strong>Chemisorption</strong><div><p>May rise then fall</p></div></div></section></div></div><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Langmuir isotherm linear form with slope and intercept"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<line x1="110" y1="240" x2="700" y2="240" stroke="#94a3b8"/>
<line x1="110" y1="240" x2="110" y2="50" stroke="#94a3b8"/>
<line x1="110" y1="200" x2="650" y2="70" stroke="#22d3ee" stroke-width="5"/>
<line x1="110" y1="200" x2="110" y2="240" stroke="#fbbf24" stroke-dasharray="4 4"/>
<circle cx="110" cy="200" r="5" fill="#fbbf24"/>
<text x="130" y="195" fill="#fbbf24" font-size="14">intercept = 1/(q&#8344;K)</text>
<text x="430" y="120" fill="#67e8f9" font-size="14">slope = 1/q&#8344;</text>
<text x="400" y="278" text-anchor="middle" fill="#e2e8f0" font-size="15">P</text>
<text x="35" y="150" fill="#e2e8f0" font-size="15" transform="rotate(-90 35 150)">P/q</text>
<text x="400" y="35" text-anchor="middle" fill="#f8fafc" font-size="18" font-weight="700">P/q = 1/(q&#8344;K) + (1/q&#8344;) P</text>
</svg><figcaption>Plotting P/q against P linearises the Langmuir isotherm: the slope gives 1/qₘ and the intercept gives 1/(qₘK).</figcaption></figure>
  </p><h3><strong>2.2 Potential-Energy Curves</strong></h3><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Freundlich isotherm and its logarithmic linear plot"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<text x="200" y="35" text-anchor="middle" fill="#f8fafc" font-size="18" font-weight="700">x/m = k P^(1/n)</text>
<line x1="90" y1="245" x2="340" y2="245" stroke="#94a3b8"/>
<line x1="90" y1="245" x2="90" y2="60" stroke="#94a3b8"/>
<path d="M90 245 C140 140 220 95 335 80" fill="none" stroke="#22d3ee" stroke-width="5"/>
<text x="210" y="270" text-anchor="middle" fill="#e2e8f0" font-size="14">P (curved, no saturation)</text>
<text x="600" y="35" text-anchor="middle" fill="#f8fafc" font-size="18" font-weight="700">log(x/m) = log k + (1/n) log P</text>
<line x1="460" y1="245" x2="710" y2="245" stroke="#94a3b8"/>
<line x1="460" y1="245" x2="460" y2="60" stroke="#94a3b8"/>
<line x1="460" y1="210" x2="700" y2="90" stroke="#a78bfa" stroke-width="5"/>
<text x="490" y="200" fill="#fbbf24" font-size="13">intercept = log k</text>
<text x="600" y="140" fill="#c4b5fd" font-size="13">slope = 1/n</text>
<text x="580" y="270" text-anchor="middle" fill="#e2e8f0" font-size="14">log P (straight line)</text>
</svg><figcaption>The empirical Freundlich isotherm curves on a direct plot but becomes linear once logarithms are taken, giving slope 1/n and intercept log k.</figcaption></figure>
  </p><p>A plot of potential energy of the adsorbate–surface system against the distance of the adsorbate from the surface reveals two characteristic features. At larger separation a shallow minimum appears; this is the physisorption well produced by van der Waals forces. At shorter separation a deeper minimum appears; this is the chemisorption well produced by chemical-bond formation. Between the two wells an activation barrier may exist. A molecule that first lands in the physisorption well must acquire enough energy to cross the barrier before it can enter the chemisorption well.</p><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Temkin adsorption isotherm"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<text x="400" y="40" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="700">q = (RT/b) ln(AP)</text>
<line x1="110" y1="245" x2="700" y2="245" stroke="#94a3b8"/>
<line x1="110" y1="245" x2="110" y2="60" stroke="#94a3b8"/>
<line x1="150" y1="220" x2="660" y2="90" stroke="#34d399" stroke-width="5"/>
<text x="400" y="278" text-anchor="middle" fill="#e2e8f0" font-size="15">ln P</text>
<text x="35" y="150" fill="#e2e8f0" font-size="15" transform="rotate(-90 35 150)">q</text>
<text x="500" y="120" fill="#6ee7b7" font-size="14">slope = RT/b</text>
<text x="400" y="300" text-anchor="middle" fill="#94a3b8" font-size="13">heat of adsorption falls linearly with coverage</text>
</svg><figcaption>The Temkin isotherm assumes the heat of adsorption falls linearly with coverage, giving a linear plot of q against ln P.</figcaption></figure>
  </p><p><strong>KEY IDEA  </strong>The depth of a well measures thermodynamic stability. The height of the barrier that must be crossed to reach that well measures kinetic accessibility. The two quantities are independent.</p><h3><strong>2.3 Activated Chemisorption and Dissociative Adsorption</strong></h3><p>Many molecules do not form a chemical bond with the surface immediately on collision. They first occupy a weakly bound precursor state and must then surmount an activation barrier. Because the barrier can be crossed more easily at higher temperature, the observed amount of chemisorption may increase with rising temperature even though the final chemisorbed state is lower in energy. At still higher temperature desorption begins to dominate and coverage falls again. The resulting isobar therefore shows a characteristic rise-and-fall shape.</p><p>When a diatomic molecule such as H₂ adsorbs dissociatively each atom occupies a separate surface site:</p><p><strong>H₂(g) + 2*  ⇌  2 H*</strong></p><p>The equilibrium expression then involves the square root of pressure rather than pressure itself. The Langmuir isotherm for dissociative adsorption becomes</p><p><strong>θ = √(K P) / (1 + √(K P))</strong></p><p><strong>JEE TRAP  </strong>The statement “chemisorption increases with temperature” is incomplete. Temperature may accelerate the activated step, but equilibrium coverage ultimately declines once desorption becomes rapid.</p><h3><strong>2.4 Molecular-Orbital Description of Chemisorption</strong></h3><p>A chemical bond between an adsorbate and a metal surface arises from the mixing of adsorbate molecular orbitals with the electronic states of the solid (the metal d-band in particular). Two complementary interactions are decisive:</p><p>Donation. An occupied adsorbate orbital (for example the 5σ orbital of CO) donates electron density into empty or partially empty metal states. The resulting bonding combination lies lower in energy and stabilises adsorption.</p><p>Back-donation. Occupied metal d-states transfer electron density into a vacant antibonding orbital of the adsorbate (for example the 2π* orbital of CO). This strengthens the metal–adsorbate bond while simultaneously weakening an internal bond of the adsorbate.</p><p>The two processes reinforce each other: donation makes the adsorbate a better π-acceptor and back-donation makes it a better σ-donor. The net result is a strong surface bond and an activated (lengthened or even cleaved) intramolecular bond. This is the orbital origin of catalytic activation.</p><p><strong>KEY IDEA  </strong>Electron count is as important as orbital overlap. Filling an adsorbate–metal antibonding combination can weaken or reverse the surface bond even when geometric overlap is large.</p><p>Illustrative cases:</p><ul><li>H₂ on nickel — donation from the H–H σ orbital into metal states plus back-donation into the σ* orbital lengthens and ultimately breaks the H–H bond.</li><li>CO on transition metals — synergic 5σ donation and 2π* back-donation; greater back-donation lowers the C–O stretching frequency observed by infrared spectroscopy.</li><li>N₂ on iron (Haber–Bosch) — the very strong N≡N triple bond is activated by a combination of donation and back-donation; promoters (K, Al₂O₃) modify the surface electron density and improve the rate.</li><li>O₂ on metals — already possesses electrons in antibonding π* orbitals; additional back-donation from the metal further weakens the O–O bond and facilitates dissociation.</li></ul><h3><strong>2.5 Factors that Control the Extent of Adsorption</strong></h3><ul><li>Nature of the adsorbate — for physisorption the most important factors are polarisability and critical temperature. Gases with high critical temperature are more easily liquefied and are adsorbed more strongly.</li><li>Nature of the adsorbent — specific surface area, porosity and the chemical identity of the surface sites.</li><li>Temperature — physisorption always decreases with rising temperature; chemisorption may pass through a maximum.</li><li>Pressure (or concentration) — adsorption increases with pressure until a limiting monolayer or multilayer value is approached.</li><li>Activation of the adsorbent — heating under vacuum or in steam removes pre-adsorbed species and opens pores, increasing capacity.</li></ul><h2><strong>03  Adsorption Equilibria and Isotherms</strong></h2><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="BET multilayer isotherm and its linear plot"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<text x="400" y="35" text-anchor="middle" fill="#f8fafc" font-size="17" font-weight="700">P / [n(P&#8320;&#8722;P)] = 1/(n&#8344;C) + [(C&#8722;1)/(n&#8344;C)](P/P&#8320;)</text>
<line x1="110" y1="245" x2="440" y2="245" stroke="#94a3b8"/>
<line x1="110" y1="245" x2="110" y2="70" stroke="#94a3b8"/>
<line x1="130" y1="220" x2="420" y2="100" stroke="#22d3ee" stroke-width="5"/>
<text x="270" y="270" text-anchor="middle" fill="#e2e8f0" font-size="13">P/P&#8320; (linear, 0.05&#8211;0.35)</text>
<rect x="500" y="80" width="220" height="150" rx="14" fill="#0f2139" stroke="#a78bfa"/>
<circle cx="560" cy="150" r="30" fill="none" stroke="#67e8f9" stroke-width="3"/>
<circle cx="560" cy="150" r="18" fill="none" stroke="#a78bfa" stroke-width="3"/>
<circle cx="560" cy="150" r="8" fill="#f59e0b"/>
<text x="660" y="130" fill="#c4b5fd" font-size="13">multilayer</text>
<text x="660" y="150" fill="#67e8f9" font-size="13">stacking</text>
<text x="610" y="220" text-anchor="middle" fill="#94a3b8" font-size="12">hysteresis in mesopores</text>
</svg><figcaption>The BET model extends Langmuir to multiple stacked layers; its linearised form over P/P₀ = 0.05–0.35 gives the monolayer capacity and specific surface area.</figcaption></figure>
  </p><h3><strong>3.1 Isotherm, Isobar and Isostere</strong></h3><p>An adsorption isotherm is a plot of the amount adsorbed versus equilibrium pressure (or concentration) at constant temperature. It reveals capacity and the approach to saturation.</p><p>An adsorption isobar is a plot of amount adsorbed versus temperature at constant pressure. It distinguishes ordinary physisorption (monotonic decrease) from activated chemisorption (rise-and-fall).</p><p>An adsorption isostere is a plot of equilibrium pressure versus temperature at constant surface coverage. Its slope yields the isosteric heat of adsorption.</p><p><strong>KEY IDEA  </strong>Every isotherm equation is written in terms of the equilibrium pressure or concentration after adsorption has occurred — never the initial value.</p><h3><strong>3.2 Freundlich Isotherm</strong></h3><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Effect of temperature on physisorption and chemisorption"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<line x1="100" y1="245" x2="720" y2="245" stroke="#94a3b8"/>
<line x1="100" y1="245" x2="100" y2="55" stroke="#94a3b8"/>
<path d="M100 90 C220 130 350 190 480 225 C560 240 640 244 710 245" fill="none" stroke="#22d3ee" stroke-width="5"/>
<path d="M100 220 C200 140 300 90 380 85 C460 82 540 150 630 220 C670 250 695 245 710 240" fill="none" stroke="#f59e0b" stroke-width="5"/>
<text x="180" y="80" fill="#67e8f9" font-size="15">physisorption</text>
<text x="480" y="70" fill="#fbbf24" font-size="15">chemisorption</text>
<text x="400" y="278" text-anchor="middle" fill="#e2e8f0" font-size="15">temperature</text>
<text x="45" y="150" fill="#e2e8f0" font-size="15" transform="rotate(-90 45 150)">amount adsorbed</text>
</svg><figcaption>Physisorption falls steadily as temperature rises; activated chemisorption often rises first as the barrier is crossed more easily, then falls once desorption dominates.</figcaption></figure>
  </p><p>On energetically heterogeneous surfaces the empirical relation</p><p><strong>x/m = k P^{1/n}          (0 &lt; 1/n ≤ 1)</strong></p><p>often describes the data over a limited pressure range. Taking logarithms produces the linear working equation</p><p><strong>log(x/m) = log k + (1/n) log P</strong></p><p>A plot of log(x/m) against log P is a straight line of slope 1/n and intercept log k. The equation has no true finite saturation limit; when 1/n approaches zero the amount adsorbed becomes almost independent of pressure.</p><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Factors affecting the extent of adsorption"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/><circle cx="110" cy="120" r="34" fill="none" stroke="#22d3ee" stroke-width="4"/><text x="110" y="200" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="700">Adsorbate</text><text x="110" y="222" text-anchor="middle" fill="#94a3b8" font-size="11">polarisability, critical T</text><circle cx="255" cy="120" r="34" fill="none" stroke="#a78bfa" stroke-width="4"/><text x="255" y="200" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="700">Adsorbent</text><text x="255" y="222" text-anchor="middle" fill="#94a3b8" font-size="11">surface area, porosity</text><circle cx="400" cy="120" r="34" fill="none" stroke="#f59e0b" stroke-width="4"/><text x="400" y="200" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="700">Temperature</text><text x="400" y="222" text-anchor="middle" fill="#94a3b8" font-size="11">physisorption falls with T</text><circle cx="545" cy="120" r="34" fill="none" stroke="#34d399" stroke-width="4"/><text x="545" y="200" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="700">Pressure</text><text x="545" y="222" text-anchor="middle" fill="#94a3b8" font-size="11">rises toward saturation</text><circle cx="690" cy="120" r="34" fill="none" stroke="#f87171" stroke-width="4"/><text x="690" y="200" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="700">Activation</text><text x="690" y="222" text-anchor="middle" fill="#94a3b8" font-size="11">heating opens pores</text><text x="400" y="45" text-anchor="middle" fill="#f8fafc" font-size="18" font-weight="700">Five factors controlling extent of adsorption</text></svg><figcaption>The extent of adsorption depends on the nature of the adsorbate and adsorbent, temperature, pressure or concentration, and how the adsorbent was activated.</figcaption></figure>
  </p><p><strong>JEE TRAP  </strong>The linear plot appears only after the logarithms are taken. A direct plot of x/m versus P is curved.</p><p>Worked example. Slope of log q versus log P is 0.40 and intercept is 0.60 (common logs).</p><p><strong>1/n = 0.40  ⇒  n = 2.50</strong></p><p><strong>log k = 0.60  ⇒  k = 10^{0.60} = 3.98</strong></p><h3><strong>3.3 Langmuir Isotherm — Complete Derivation</strong></h3><p>Assumptions of the ideal Langmuir model:</p><ul><li>The surface consists of a fixed number of identical, independent sites.</li><li>Each site can hold at most one adsorbate molecule (monolayer maximum).</li><li>Adsorbed molecules do not interact with one another.</li><li>The adsorption energy is independent of coverage.</li><li>Adsorption and desorption are in dynamic equilibrium.</li></ul><p>Let θ be the fraction of sites occupied. The rate of adsorption is proportional to the gas pressure and to the fraction of vacant sites:</p><p><strong>rₐ = kₐ P (1 − θ)</strong></p><p>The rate of desorption is proportional to the fraction of occupied sites:</p><p><strong>r_d = k_d θ</strong></p><p>At equilibrium the two rates are equal:</p><p><strong>kₐ P (1 − θ) = k_d θ</strong></p><p>Rearrangement immediately gives</p><p><strong>θ = (K P) / (1 + K P)      where  K = kₐ / k_d</strong></p><p>If q is the amount adsorbed and qₘ is the monolayer capacity,</p><p><strong>q = qₘ θ = qₘ K P / (1 + K P)</strong></p><p>The most useful linear form is obtained by taking the reciprocal and rearranging:</p><p><strong>P / q = 1/(qₘ K) + (1/qₘ) P</strong></p><p>A graph of P/q versus P is therefore a straight line whose slope equals 1/qₘ and whose intercept equals 1/(qₘ K). From the slope and intercept both the capacity qₘ and the affinity constant K are obtained.</p><p>Limiting behaviour:</p><ul><li>Low pressure (KP ≪ 1): θ ≈ KP, q ≈ qₘ KP — first-order in pressure (Henry region).</li><li>High pressure (KP ≫ 1): θ → 1, q → qₘ — zero-order; the surface is saturated.</li></ul><p><strong>JEE TRAP  </strong>Zero-order at high pressure is a macroscopic statement about the net rate of uptake. Individual adsorption and desorption events continue; the rates simply become equal.</p><p>Worked example. Plot of P/q versus P has slope 0.050 g mmol⁻¹ and intercept 0.020 bar g mmol⁻¹.</p><p><strong>1/qₘ = 0.050  ⇒  qₘ = 20 mmol g⁻¹</strong></p><p><strong>1/(qₘ K) = 0.020  ⇒  K = 2.5 bar⁻¹</strong></p><h3><strong>3.4 Dissociative Langmuir Isotherm</strong></h3><p>When a molecule adsorbs with dissociation into two fragments that each occupy one site, the rate of adsorption becomes proportional to the square of the vacant-site fraction and the equilibrium expression changes. Starting from</p><p><strong>rₐ = kₐ P (1 − θ)²      r_d = k_d θ²</strong></p><p>and setting rₐ = r_d yields</p><p><strong>θ = √(K P) / (1 + √(K P))</strong></p><p>The linear form used for graphing is correspondingly different; the appropriate plot is usually √P / q versus √P.</p><h3><strong>3.5 BET Multilayer Theory</strong></h3><p>Physical adsorption rarely stops at a single layer. Molecules continue to adsorb on top of already adsorbed molecules. The BET model treats the first layer with a characteristic adsorption enthalpy and all higher layers with the enthalpy of liquefaction of the adsorbate. The resulting linear equation is</p><p><strong>P / [n (P₀ − P)] = 1/(nₘ C) + [(C − 1)/(nₘ C)] (P / P₀)</strong></p><p>where n is the amount adsorbed, nₘ is the monolayer capacity, P₀ is the saturation vapour pressure and C is a constant related to the difference between the first-layer and liquefaction enthalpies. A plot of the left-hand side against P/P₀ is linear in the relative-pressure window 0.05–0.35. From the slope and intercept one obtains nₘ and hence the specific surface area:</p><p><strong>aₛ = nₘ × N_A × σ</strong></p><p>where σ is the area occupied by one adsorbate molecule.</p><p>In mesoporous solids the adsorption and desorption paths often differ, producing a hysteresis loop. The loop is caused by capillary condensation inside pores and carries information about pore-size distribution.</p><h3><strong>3.6 Isosteric Heat of Adsorption</strong></h3><p>At fixed coverage the equilibrium pressure is a function of temperature. The Clausius–Clapeyron-type relation</p><p><strong>(∂ ln P / ∂T)_θ = qₛₜ / (R T²)</strong></p><p>defines the isosteric heat qₛₜ = −ΔH_ads. Integration between two temperatures at the same coverage gives the practical working equation</p><p><strong>ln (P₂ / P₁) = − (qₛₜ / R) (1/T₂ − 1/T₁)</strong></p><p>If qₛₜ falls markedly with increasing coverage the surface is energetically heterogeneous or lateral interactions are becoming important.</p><p>Worked example. At the same coverage, P = 1.00 bar at 300 K and P = 2.50 bar at 330 K.</p><p><strong>ln(2.5) = −(ΔH / 8.314)(1/330 − 1/300)</strong></p><p>ΔH_ads ≈ −27.4 kJ mol⁻¹.</p><h2><strong>04  Kinetics and Residence Time</strong></h2><h3><strong>4.1 Elementary Langmuir Kinetics</strong></h3><p>The elementary rates already used to derive the isotherm also govern the approach to equilibrium. The net rate of adsorption is</p><p><strong>dθ/dt = kₐ P (1 − θ) − k_d θ</strong></p><p>Near equilibrium the relaxation time of the surface is controlled by the desorption rate constant.</p><h3><strong>4.2 Mean Residence Time</strong></h3><p>The desorption rate constant is written in Arrhenius form</p><p><strong>k_d = A exp(−E_d / R T)</strong></p><p>The mean time a molecule spends on the surface before desorbing is the reciprocal of k_d:</p><p><strong>τ = 1/k_d = A⁻¹ exp(E_d / R T)</strong></p><p>The pre-exponential factor A is typically of order 10¹³ s⁻¹ (a molecular vibrational frequency). Because τ depends exponentially on E_d / T, modest changes in barrier height or temperature produce large changes in residence time. In catalysis the molecule must remain long enough to react yet not so long that the site is permanently blocked.</p><p>Worked example. A = 1.0 × 10¹³ s⁻¹, E_d = 100 kJ mol⁻¹, T = 500 K.</p><p><strong>τ = 10⁻¹³ exp(100000 / (8.314 × 500)) ≈ 2.8 × 10⁻³ s</strong></p><h3><strong>4.3 Adsorption from Solution</strong></h3><p>When an adsorbent is shaken with a solution of volume V and initial concentration C₀, and the equilibrium concentration is Cₑ, the amount adsorbed per unit mass of adsorbent is given by mass balance:</p><p><strong>x/m = (C₀ − Cₑ) V / m</strong></p><p>This quantity is plotted against Cₑ to construct a solution isotherm.</p><p>Worked example. 1.00 g carbon + 250 mL of 0.080 M dye; Cₑ = 0.020 M.</p><p><strong>x/m = (0.080 − 0.020) × 0.250 / 1.00 = 0.015 mol g⁻¹</strong></p><h3><strong>4.4 Activation of Adsorbents</strong></h3><p>Commercial adsorbents are heated under vacuum or in a stream of steam or air. The treatment desorbs previously adsorbed molecules, opens blocked pores and can create additional surface area. Excessive activation, however, may collapse the pore structure and reduce capacity.</p><h2><strong>05  Applications</strong></h2><h3><strong>5.1 Gas Masks and Air Purification</strong></h3><p>Activated charcoal has an extremely large specific surface area (often 500–1500 m² g⁻¹) created by a network of micropores. Toxic gases and organic vapours are preferentially adsorbed into these pores by physisorption (and sometimes weak chemisorption). Air, N₂ and O₂ are held far more weakly and pass through. The mask therefore removes poison while allowing the wearer to breathe. Once the pores are saturated the charcoal must be replaced or regenerated by heating.</p><p><strong>KEY IDEA  </strong>High surface area + preferential adsorption of polarisable organic molecules over N₂/O₂ is the working principle of the gas mask.</p><h3><strong>5.2 Decolourisation of Sugar and Dyes</strong></h3><p>Raw sugar solutions and many industrial dye effluents contain coloured organic impurities. When the solution is shaken or percolated through animal charcoal (or activated carbon), the large coloured molecules adsorb strongly onto the carbon surface. The decolourised solution is then filtered. The same principle is used to remove unwanted colours from oils and pharmaceutical preparations.</p><ul><li>Animal charcoal or activated carbon is the adsorbent.</li><li>Coloured organic molecules are the adsorbates.</li><li>Filtration removes the carbon after adsorption is complete.</li></ul><h3><strong>5.3 Froth Flotation of Ores</strong></h3><p>Many sulphide and oxide ores are concentrated by froth flotation. The powdered ore is mixed with water and a small amount of a collector (usually a xanthate or similar surfactant). The collector adsorbs selectively on the surface of the desired mineral particles, rendering them hydrophobic. Air is then blown through the suspension; the hydrophobic particles attach to the air bubbles and rise to form a froth that is skimmed off. Gangue particles remain hydrophilic and stay in the aqueous phase.</p><ul><li>Collector molecules adsorb on the ore surface → hydrophobic.</li><li>Air bubbles carry the hydrophobic particles upward.</li><li>Gangue remains wettable and sinks.</li></ul><h3><strong>5.4 Chromatography</strong></h3><p>Chromatography separates components of a mixture by differential adsorption on a stationary phase. In column or thin-layer chromatography the stationary phase is typically silica gel or alumina. Components that adsorb more strongly travel more slowly; components that adsorb weakly travel faster with the mobile phase. The same principle, with different stationary phases, underlies HPLC and gas chromatography.</p><ul><li>Stationary phase = adsorbent (silica, alumina, etc.).</li><li>Separation rests on differences in adsorption strength.</li><li>Strongly adsorbed solutes have higher retention times.</li></ul><h3><strong>5.5 Heterogeneous Catalysis</strong></h3><p>Virtually every heterogeneous catalytic reaction begins with adsorption of at least one reactant on the solid catalyst surface. The surface provides a lower-energy pathway by stabilising intermediates and by bringing reactant molecules into close proximity with favourable orientation. After reaction the products desorb, freeing the active sites for the next cycle.</p><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Heterogeneous catalytic cycle"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<line x1="55" y1="215" x2="745" y2="215" stroke="#64748b" stroke-width="6"/>
<circle cx="70" cy="215" r="10" fill="#22d3ee"/><circle cx="120" cy="215" r="10" fill="#22d3ee"/><circle cx="170" cy="215" r="10" fill="#22d3ee"/><circle cx="220" cy="215" r="10" fill="#22d3ee"/><circle cx="270" cy="215" r="10" fill="#22d3ee"/><circle cx="320" cy="215" r="10" fill="#22d3ee"/><circle cx="370" cy="215" r="10" fill="#22d3ee"/><circle cx="420" cy="215" r="10" fill="#22d3ee"/><circle cx="470" cy="215" r="10" fill="#22d3ee"/><circle cx="520" cy="215" r="10" fill="#22d3ee"/><circle cx="570" cy="215" r="10" fill="#22d3ee"/><circle cx="620" cy="215" r="10" fill="#22d3ee"/><circle cx="670" cy="215" r="10" fill="#22d3ee"/><circle cx="720" cy="215" r="10" fill="#22d3ee"/>
<circle cx="145" cy="100" r="14" fill="#f59e0b"/><circle cx="200" cy="100" r="14" fill="#a78bfa"/>
<path d="M275 165 Q320 105 365 165" fill="none" stroke="#f8fafc" stroke-width="4"/>
<circle cx="300" cy="175" r="13" fill="#f59e0b"/><circle cx="340" cy="175" r="13" fill="#a78bfa"/>
<path d="M425 175 Q475 115 525 175" fill="none" stroke="#34d399" stroke-width="4"/>
<circle cx="475" cy="173" r="18" fill="#34d399"/>
<path d="M585 168 L645 105" stroke="#34d399" stroke-width="4"/>
<text x="120" y="270" fill="#94a3b8" font-size="14">diffusion</text>
<text x="230" y="270" fill="#94a3b8" font-size="14">adsorption</text>
<text x="345" y="270" fill="#94a3b8" font-size="14">activation</text>
<text x="470" y="270" fill="#94a3b8" font-size="14">reaction</text>
<text x="600" y="270" fill="#94a3b8" font-size="14">desorption</text>
</svg><figcaption>Every heterogeneous catalytic cycle begins with adsorption of reactants, proceeds through an activated surface complex, and ends with desorption of products, regenerating the active site.</figcaption></figure>
  </p><p><em>Surface catalytic cycle: diffusion → adsorption → reaction → desorption → diffusion</em></p><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Langmuir-Hinshelwood surface reaction mechanism"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<line x1="60" y1="220" x2="740" y2="220" stroke="#64748b" stroke-width="6"/>
<circle cx="75" cy="220" r="9" fill="#334155"/><circle cx="120" cy="220" r="9" fill="#334155"/><circle cx="165" cy="220" r="9" fill="#334155"/><circle cx="210" cy="220" r="9" fill="#334155"/><circle cx="255" cy="220" r="9" fill="#334155"/><circle cx="300" cy="220" r="9" fill="#334155"/><circle cx="345" cy="220" r="9" fill="#334155"/><circle cx="390" cy="220" r="9" fill="#334155"/><circle cx="435" cy="220" r="9" fill="#334155"/><circle cx="480" cy="220" r="9" fill="#334155"/><circle cx="525" cy="220" r="9" fill="#334155"/><circle cx="570" cy="220" r="9" fill="#334155"/><circle cx="615" cy="220" r="9" fill="#334155"/><circle cx="660" cy="220" r="9" fill="#334155"/><circle cx="705" cy="220" r="9" fill="#334155"/><circle cx="750" cy="220" r="9" fill="#334155"/>
<circle cx="180" cy="150" r="14" fill="#22d3ee"/><circle cx="260" cy="150" r="14" fill="#f59e0b"/>
<text x="220" y="110" text-anchor="middle" fill="#94a3b8" font-size="13">1. both reactants adsorb</text>
<path d="M330 150 L400 150" stroke="#94a3b8" stroke-width="2"/>
<circle cx="450" cy="150" r="14" fill="#22d3ee"/><circle cx="500" cy="150" r="14" fill="#f59e0b"/>
<path d="M462 150 L488 150" stroke="#fbbf24" stroke-width="3"/>
<text x="475" y="110" text-anchor="middle" fill="#94a3b8" font-size="13">2. surface reaction</text>
<path d="M550 150 L610 150" stroke="#94a3b8" stroke-width="2"/>
<circle cx="670" cy="145" r="16" fill="#34d399"/>
<text x="670" y="110" text-anchor="middle" fill="#94a3b8" font-size="13">3. desorption</text>
<text x="400" y="270" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700">Langmuir&#8211;Hinshelwood: both reactants pre-adsorbed</text>
</svg><figcaption>In the Langmuir–Hinshelwood mechanism, both reactants first adsorb on neighbouring sites, then react on the surface before the product desorbs.</figcaption></figure>
  </p><p><em>Five-stage heterogeneous catalysis sequence</em></p><p>Typical industrial examples:</p><ul><li>Haber–Bosch synthesis of ammonia (Fe catalyst, N₂ and H₂ adsorb and dissociate).</li><li>Contact process for SO₃ (V₂O₅ catalyst).</li><li>Catalytic converters in automobiles (Pt/Pd/Rh on ceramic support).</li><li>Hydrogenation of oils (Ni catalyst).</li></ul><p><strong>KEY IDEA  </strong>The catalyst is not consumed. Adsorption, surface reaction and desorption form a closed cycle.</p><h3><strong>5.6 Shape-Selective Catalysis (Zeolites)</strong></h3><p>Zeolites are crystalline aluminosilicates with uniform channels and cavities of molecular dimensions. Only molecules small enough to enter the pores can reach the active sites inside; larger molecules are excluded. This physical size-filtering is called shape-selective catalysis and is used in petroleum refining (cracking, isomerisation, alkylation) to obtain desired product distributions.</p><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Eley-Rideal surface reaction mechanism"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<line x1="60" y1="220" x2="740" y2="220" stroke="#64748b" stroke-width="6"/>
<circle cx="75" cy="220" r="9" fill="#334155"/><circle cx="120" cy="220" r="9" fill="#334155"/><circle cx="165" cy="220" r="9" fill="#334155"/><circle cx="210" cy="220" r="9" fill="#334155"/><circle cx="255" cy="220" r="9" fill="#334155"/><circle cx="300" cy="220" r="9" fill="#334155"/><circle cx="345" cy="220" r="9" fill="#334155"/><circle cx="390" cy="220" r="9" fill="#334155"/><circle cx="435" cy="220" r="9" fill="#334155"/><circle cx="480" cy="220" r="9" fill="#334155"/><circle cx="525" cy="220" r="9" fill="#334155"/><circle cx="570" cy="220" r="9" fill="#334155"/><circle cx="615" cy="220" r="9" fill="#334155"/><circle cx="660" cy="220" r="9" fill="#334155"/><circle cx="705" cy="220" r="9" fill="#334155"/><circle cx="750" cy="220" r="9" fill="#334155"/>
<circle cx="220" cy="150" r="14" fill="#22d3ee"/>
<text x="220" y="110" text-anchor="middle" fill="#94a3b8" font-size="13">1. one reactant adsorbs</text>
<circle cx="420" cy="80" r="13" fill="#f59e0b"/>
<path d="M420 95 L340 145" stroke="#f59e0b" stroke-width="3" marker-end="url(#none)"/>
<text x="420" y="55" text-anchor="middle" fill="#94a3b8" font-size="13">2. gas-phase collision</text>
<path d="M480 150 L560 150" stroke="#94a3b8" stroke-width="2"/>
<circle cx="640" cy="145" r="16" fill="#34d399"/>
<text x="640" y="110" text-anchor="middle" fill="#94a3b8" font-size="13">3. product desorbs directly</text>
<text x="400" y="270" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700">Eley&#8211;Rideal: gas-phase molecule strikes an adsorbed one</text>
</svg><figcaption>In the Eley–Rideal mechanism, only one reactant adsorbs; the product forms when a gas-phase molecule collides directly with the adsorbed species.</figcaption></figure>
  </p><p><em>Shape-selective catalysis in zeolites · Enzyme active-site specificity</em></p><h3><strong>5.7 Medicinal Charcoal</strong></h3><p>Activated charcoal is administered orally in cases of poisoning or drug overdose. In the gastrointestinal tract it adsorbs a wide range of organic toxins and drugs, preventing their absorption into the blood. Effectiveness depends on how soon it is given and on the adsorbability of the particular toxin. It does not adsorb alcohols, strong acids/bases or metals efficiently.</p><h3><strong>5.8 Humidity Control and Drying Agents</strong></h3><p>Silica gel and certain zeolites (molecular sieves) have a strong affinity for water vapour. They adsorb moisture from air or from organic solvents, keeping instruments, electronics and packaged goods dry. Once saturated they can be regenerated by heating, which drives off the adsorbed water.</p><ul><li>Silica gel packets in instrument boxes and medicine bottles.</li><li>Molecular sieves for deep drying of solvents and gases.</li></ul><h3><strong>5.9 Adsorption Indicators</strong></h3><p>In some precipitation titrations (e.g. Mohr or Fajans methods) a dye is used as an adsorption indicator. Near the equivalence point the surface charge of the precipitate changes; the dye ions then adsorb and produce a sharp colour change that signals the end point.</p><h3><strong>5.10 Summary Table of Applications</strong></h3><div class="table-wrap"><div class="converted-card-list"><section class="converted-card"><h4>Gas mask</h4><div class="converted-card-row"><strong>Adsorbent</strong><div><p>Activated charcoal</p></div></div><div class="converted-card-row"><strong>What is adsorbed</strong><div><p>Toxic gases / organic vapours</p></div></div></section><section class="converted-card"><h4>Sugar decolourisation</h4><div class="converted-card-row"><strong>Adsorbent</strong><div><p>Animal charcoal</p></div></div><div class="converted-card-row"><strong>What is adsorbed</strong><div><p>Coloured impurities</p></div></div></section><section class="converted-card"><h4>Froth flotation</h4><div class="converted-card-row"><strong>Adsorbent</strong><div><p>Ore particles + collector</p></div></div><div class="converted-card-row"><strong>What is adsorbed</strong><div><p>Collector on mineral surface</p></div></div></section><section class="converted-card"><h4>Chromatography</h4><div class="converted-card-row"><strong>Adsorbent</strong><div><p>Silica / alumina</p></div></div><div class="converted-card-row"><strong>What is adsorbed</strong><div><p>Mixture components (differential)</p></div></div></section><section class="converted-card"><h4>Heterogeneous catalysis</h4><div class="converted-card-row"><strong>Adsorbent</strong><div><p>Metal / oxide / zeolite</p></div></div><div class="converted-card-row"><strong>What is adsorbed</strong><div><p>Reactants (then products desorb)</p></div></div></section><section class="converted-card"><h4>Medicinal charcoal</h4><div class="converted-card-row"><strong>Adsorbent</strong><div><p>Activated charcoal</p></div></div><div class="converted-card-row"><strong>What is adsorbed</strong><div><p>Toxins / drugs in GI tract</p></div></div></section><section class="converted-card"><h4>Drying agent</h4><div class="converted-card-row"><strong>Adsorbent</strong><div><p>Silica gel / zeolite</p></div></div><div class="converted-card-row"><strong>What is adsorbed</strong><div><p>Water vapour</p></div></div></section><section class="converted-card"><h4>Adsorption indicator</h4><div class="converted-card-row"><strong>Adsorbent</strong><div><p>Precipitate surface</p></div></div><div class="converted-card-row"><strong>What is adsorbed</strong><div><p>Dye ions at end point</p></div></div></section></div></div><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Micropore, mesopore and macropore structure"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<rect x="90" y="70" width="140" height="150" rx="40" fill="#0f2139" stroke="#a78bfa" stroke-width="3"/>
<circle cx="135" cy="110" r="6" fill="#67e8f9"/><circle cx="160" cy="110" r="6" fill="#67e8f9"/>
<text x="160" y="245" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700">Micropore</text>
<text x="160" y="267" text-anchor="middle" fill="#94a3b8" font-size="12">&lt; 2 nm</text>

<rect x="330" y="70" width="140" height="150" rx="40" fill="#0f2139" stroke="#a78bfa" stroke-width="3"/>
<circle cx="375" cy="110" r="6" fill="#67e8f9"/><circle cx="400" cy="110" r="6" fill="#67e8f9"/><circle cx="425" cy="110" r="6" fill="#67e8f9"/><circle cx="375" cy="140" r="6" fill="#67e8f9"/><circle cx="400" cy="140" r="6" fill="#67e8f9"/><circle cx="425" cy="140" r="6" fill="#67e8f9"/>
<text x="400" y="245" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700">Mesopore</text>
<text x="400" y="267" text-anchor="middle" fill="#94a3b8" font-size="12">2&#8211;50 nm</text>

<rect x="570" y="70" width="140" height="150" rx="40" fill="#0f2139" stroke="#a78bfa" stroke-width="3"/>
<circle cx="615" cy="110" r="6" fill="#67e8f9"/><circle cx="640" cy="110" r="6" fill="#67e8f9"/><circle cx="665" cy="110" r="6" fill="#67e8f9"/><circle cx="615" cy="140" r="6" fill="#67e8f9"/><circle cx="640" cy="140" r="6" fill="#67e8f9"/><circle cx="665" cy="140" r="6" fill="#67e8f9"/><circle cx="615" cy="170" r="6" fill="#67e8f9"/><circle cx="640" cy="170" r="6" fill="#67e8f9"/><circle cx="665" cy="170" r="6" fill="#67e8f9"/><circle cx="615" cy="200" r="6" fill="#67e8f9"/><circle cx="640" cy="200" r="6" fill="#67e8f9"/><circle cx="665" cy="200" r="6" fill="#67e8f9"/>
<text x="640" y="245" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700">Macropore</text>
<text x="640" y="267" text-anchor="middle" fill="#94a3b8" font-size="12">&gt; 50 nm</text>
</svg><figcaption>Pores are classified by IUPAC width: micropores below 2 nm, mesopores 2–50 nm, and macropores above 50 nm — each accessible to different adsorbate sizes.</figcaption></figure>
  </p><p><em>Heterogeneous catalysis — stage overview</em></p><h2><strong>06  Surface Tension of Solutions &amp; Adsorption at Liquid Interfaces</strong></h2><h3><strong>8.1 Surface Tension — Brief Recall</strong></h3><p>Surface tension (γ) is the force per unit length acting perpendicular to a line drawn on the liquid surface; equivalently it is the surface free energy per unit area. Pure water has a high surface tension (~72 mN m⁻¹ at 25 °C) because of strong hydrogen bonding. Any solute that alters the residual forces at the air–water interface changes γ.</p><h3><strong>8.2 Effect of Different Solutes on Surface Tension</strong></h3><p>Three broad classes of aqueous solutes produce three characteristic γ-versus-concentration curves:</p><ul><li>Inorganic electrolytes (KCl, NaCl, K₂SO₄, etc.) — slightly increase surface tension. Ions are strongly hydrated and prefer the bulk; the surface becomes relatively depleted of solute. The rise in γ is small and nearly linear.</li><li>Organic solutes of moderate polarity (CH₃OH, C₂H₅OH, acetone, sugar, etc.) — steadily decrease surface tension. These molecules accumulate at the surface (positive adsorption), lowering the surface free energy. The fall is gradual and continuous.</li><li>Surfactants / soaps / detergents (e.g. CH₃(CH₂)₁₁OSO₃⁻Na⁺, sodium dodecyl sulphate) — decrease surface tension sharply at very low concentration. Once a monolayer of surfactant is complete, further addition forms micelles in the bulk and γ becomes almost constant. The break point is the critical micelle concentration (CMC).</li></ul><p><strong>KEY IDEA  </strong>Electrolytes → γ rises slightly. Ordinary organics → γ falls gradually. Surfactants → γ falls steeply then levels off at CMC.</p><h3><strong>8.3 Qualitative Graphs (JEE Favourite)</strong></h3><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Shape-selective catalysis in zeolite pores"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<rect x="90" y="60" width="260" height="180" rx="18" fill="#0f2139" stroke="#22d3ee" stroke-width="3"/>
<rect x="130" y="60" width="35" height="180" fill="#050914"/>
<rect x="235" y="60" width="35" height="180" fill="#050914"/>
<circle cx="147" cy="150" r="14" fill="#34d399"/>
<circle cx="252" cy="150" r="14" fill="#34d399"/>
<text x="220" y="255" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="700">small reactant enters channel</text>
<rect x="450" y="60" width="260" height="180" rx="18" fill="#0f2139" stroke="#f87171" stroke-width="3"/>
<rect x="490" y="60" width="35" height="180" fill="#050914"/>
<rect x="595" y="60" width="35" height="180" fill="#050914"/>
<circle cx="580" cy="150" r="30" fill="#f87171"/>
<text x="580" y="255" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="700">large molecule excluded</text>
</svg><figcaption>Zeolite channels admit only molecules small enough to fit; larger molecules are physically excluded from the active sites inside.</figcaption></figure>
  </p><p><em>Sketch I — gradual fall · Sketch II — slight rise · Sketch III — sharp fall then plateau (CMC)</em></p><p>Sketch I — γ falls gradually then levels → typical of a moderately surface-active organic solute (e.g. CH₃OH).</p><p>Sketch II — γ rises slowly and almost linearly → typical of a strong electrolyte (e.g. KCl).</p><p>Sketch III — γ drops almost vertically at low concentration then becomes horizontal → typical of a surfactant (e.g. sodium dodecyl sulphate). The horizontal portion begins at the CMC.</p><p>Assignment for the three substances KCl, CH₃OH and CH₃(CH₂)₁₁OSO₃⁻Na⁺:</p><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Catalyst poisoning by strongly adsorbed impurities"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<line x1="70" y1="215" x2="360" y2="215" stroke="#64748b" stroke-width="6"/>
<circle cx="85" cy="215" r="9" fill="#334155"/><circle cx="130" cy="215" r="9" fill="#334155"/><circle cx="175" cy="215" r="9" fill="#334155"/><circle cx="220" cy="215" r="9" fill="#334155"/><circle cx="265" cy="215" r="9" fill="#334155"/><circle cx="310" cy="215" r="9" fill="#334155"/><circle cx="355" cy="215" r="9" fill="#334155"/>
<circle cx="130" cy="150" r="12" fill="#22d3ee"/><circle cx="220" cy="150" r="12" fill="#22d3ee"/><circle cx="310" cy="150" r="12" fill="#22d3ee"/>
<text x="215" y="255" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="700">clean surface: all sites active</text>
<line x1="440" y1="215" x2="730" y2="215" stroke="#64748b" stroke-width="6"/>
<circle cx="455" cy="215" r="9" fill="#334155"/><circle cx="500" cy="215" r="9" fill="#334155"/><circle cx="545" cy="215" r="9" fill="#334155"/><circle cx="590" cy="215" r="9" fill="#334155"/><circle cx="635" cy="215" r="9" fill="#334155"/><circle cx="680" cy="215" r="9" fill="#334155"/><circle cx="725" cy="215" r="9" fill="#334155"/>
<circle cx="480" cy="150" r="12" fill="#f87171"/><circle cx="570" cy="150" r="12" fill="#22d3ee"/><circle cx="660" cy="150" r="12" fill="#f87171"/>
<text x="585" y="255" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="700">poisoned: blocked active sites</text>
</svg><figcaption>Strongly and often irreversibly adsorbed poisons (such as S, Pb or As) occupy active sites permanently, cutting catalytic activity.</figcaption></figure>
  </p><p><em>Correct assignment: CH₃OH → gradual fall · KCl → slight rise · Surfactant → CMC plateau</em></p><ul><li>KCl → sketch II (γ increases).</li><li>CH₃OH → sketch I (γ decreases gradually).</li><li>Surfactant → sketch III (γ drops sharply then constant).</li></ul><p><strong>JEE TRAP  </strong>Do not confuse the gradual fall of ordinary alcohols with the abrupt fall-and-plateau of true surfactants. The plateau is the signature of micelle formation.</p><h3><strong>8.4 Gibbs Adsorption Isotherm</strong></h3><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Catalysed and uncatalysed activation energy profiles"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<line x1="90" y1="245" x2="720" y2="245" stroke="#94a3b8"/>
<line x1="90" y1="245" x2="90" y2="45" stroke="#94a3b8"/>
<path d="M90 200 C250 200 320 60 400 60 C480 60 550 200 710 200" fill="none" stroke="#a78bfa" stroke-width="5"/>
<path d="M90 200 C250 200 320 145 400 145 C480 145 550 200 710 200" fill="none" stroke="#34d399" stroke-width="5"/>
<text x="330" y="55" fill="#c4b5fd" font-size="14">without catalyst (higher E&#8320;)</text>
<text x="330" y="140" fill="#6ee7b7" font-size="14">with catalyst (lower E&#8320;)</text>
<text x="400" y="278" text-anchor="middle" fill="#e2e8f0" font-size="15">reaction coordinate</text>
<text x="30" y="140" fill="#e2e8f0" font-size="15" transform="rotate(-90 30 140)">potential energy</text>
</svg><figcaption>A catalyst opens a lower-activation-energy pathway between the same reactants and products, speeding the reaction without changing the overall energetics.</figcaption></figure>
  </p><p><em>Positive adsorption (γ falls) vs Negative adsorption (γ rises)</em></p><p>The quantitative link between surface tension and surface excess concentration is the Gibbs adsorption equation. For a binary solution at constant temperature:</p><p><strong>Γ₂ = − (1/RT) (∂γ / ∂ ln a₂)_T</strong></p><p>or, for dilute ideal solutions (a₂ ≈ c₂),</p><p><strong>Γ₂ = − (c₂ / RT) (∂γ / ∂c₂)_T</strong></p><p>Γ₂ is the surface excess of the solute (moles per unit area).</p><ul><li>If γ decreases with increasing concentration (∂γ/∂c &lt; 0) → Γ₂ &gt; 0 → positive adsorption (solute concentrates at the surface).</li><li>If γ increases with concentration (∂γ/∂c &gt; 0) → Γ₂ &lt; 0 → negative adsorption (solute is depleted at the surface).</li></ul><p><strong>KEY IDEA  </strong>The sign of the slope of the γ-versus-c curve tells you whether adsorption is positive or negative.</p><h3><strong>8.5 Critical Micelle Concentration (CMC)</strong></h3><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Gibbs adsorption equation and surface excess sign"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<text x="400" y="50" text-anchor="middle" fill="#f8fafc" font-size="20" font-weight="700">&#915;&#8322; = &#8722;(1/RT)(&#8706;&#947;/&#8706;ln a&#8322;)_T</text>
<rect x="90" y="90" width="280" height="140" rx="16" fill="#0f2139" stroke="#34d399" stroke-width="3"/>
<line x1="110" y1="105" x2="110" y2="125" stroke="#34d399" stroke-width="3"/><circle cx="110" cy="100" r="5" fill="#6ee7b7"/><line x1="140" y1="105" x2="140" y2="125" stroke="#34d399" stroke-width="3"/><circle cx="140" cy="100" r="5" fill="#6ee7b7"/><line x1="170" y1="105" x2="170" y2="125" stroke="#34d399" stroke-width="3"/><circle cx="170" cy="100" r="5" fill="#6ee7b7"/><line x1="200" y1="105" x2="200" y2="125" stroke="#34d399" stroke-width="3"/><circle cx="200" cy="100" r="5" fill="#6ee7b7"/><line x1="230" y1="105" x2="230" y2="125" stroke="#34d399" stroke-width="3"/><circle cx="230" cy="100" r="5" fill="#6ee7b7"/><line x1="260" y1="105" x2="260" y2="125" stroke="#34d399" stroke-width="3"/><circle cx="260" cy="100" r="5" fill="#6ee7b7"/><line x1="290" y1="105" x2="290" y2="125" stroke="#34d399" stroke-width="3"/><circle cx="290" cy="100" r="5" fill="#6ee7b7"/><line x1="320" y1="105" x2="320" y2="125" stroke="#34d399" stroke-width="3"/><circle cx="320" cy="100" r="5" fill="#6ee7b7"/><line x1="350" y1="105" x2="350" y2="125" stroke="#34d399" stroke-width="3"/><circle cx="350" cy="100" r="5" fill="#6ee7b7"/>
<text x="230" y="260" text-anchor="middle" fill="#6ee7b7" font-size="14">positive adsorption: &#947; falls, &#915; &gt; 0</text>
<rect x="430" y="90" width="280" height="140" rx="16" fill="#0f2139" stroke="#f87171" stroke-width="3"/>
<line x1="450" y1="215" x2="450" y2="195" stroke="#f87171" stroke-width="3"/><circle cx="450" cy="220" r="5" fill="#fca5a5"/><line x1="480" y1="215" x2="480" y2="195" stroke="#f87171" stroke-width="3"/><circle cx="480" cy="220" r="5" fill="#fca5a5"/><line x1="510" y1="215" x2="510" y2="195" stroke="#f87171" stroke-width="3"/><circle cx="510" cy="220" r="5" fill="#fca5a5"/><line x1="540" y1="215" x2="540" y2="195" stroke="#f87171" stroke-width="3"/><circle cx="540" cy="220" r="5" fill="#fca5a5"/><line x1="570" y1="215" x2="570" y2="195" stroke="#f87171" stroke-width="3"/><circle cx="570" cy="220" r="5" fill="#fca5a5"/><line x1="600" y1="215" x2="600" y2="195" stroke="#f87171" stroke-width="3"/><circle cx="600" cy="220" r="5" fill="#fca5a5"/><line x1="630" y1="215" x2="630" y2="195" stroke="#f87171" stroke-width="3"/><circle cx="630" cy="220" r="5" fill="#fca5a5"/><line x1="660" y1="215" x2="660" y2="195" stroke="#f87171" stroke-width="3"/><circle cx="660" cy="220" r="5" fill="#fca5a5"/><line x1="690" y1="215" x2="690" y2="195" stroke="#f87171" stroke-width="3"/><circle cx="690" cy="220" r="5" fill="#fca5a5"/>
<text x="570" y="260" text-anchor="middle" fill="#fca5a5" font-size="14">negative adsorption: &#947; rises, &#915; &lt; 0</text>
</svg><figcaption>The Gibbs adsorption equation links surface excess Γ to the slope of surface tension with concentration: γ falling means positive adsorption, γ rising means negative adsorption.</figcaption></figure>
  </p><p><em>CMC is read directly from the break point where γ becomes constant</em></p><p>Above a characteristic concentration the surfactant molecules aggregate into micelles (hydrophobic tails inward, hydrophilic heads outward). Once micelles appear, the concentration of free monomer in solution stays roughly constant, so the surface remains saturated and γ no longer falls. That concentration is the CMC. Addition of salt usually lowers the CMC of ionic surfactants; raising temperature can raise or lower it depending on the surfactant.</p><h3><strong>8.6 Graph-Based Problems</strong></h3><p>Problem 1 (JEE 2016 type). The qualitative sketches I, II and III show the variation of surface tension with molar concentration for aqueous KCl, CH₃OH and CH₃(CH₂)₁₁OSO₃⁻Na⁺. The correct assignment is:</p><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Surface excess and the effect of solutes on surface tension"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<line x1="90" y1="245" x2="720" y2="245" stroke="#94a3b8"/>
<line x1="90" y1="245" x2="90" y2="45" stroke="#94a3b8"/>
<path d="M90 130 C220 145 320 175 480 200 C570 213 650 218 710 220" fill="none" stroke="#22d3ee" stroke-width="5"/>
<text x="180" y="115" fill="#67e8f9" font-size="14">organic solute: &#947; falls gradually</text>
<path d="M90 210 C250 195 420 175 710 150" fill="none" stroke="#f59e0b" stroke-width="5"/>
<text x="450" y="140" fill="#fbbf24" font-size="14">electrolyte: &#947; rises slightly</text>
<text x="400" y="278" text-anchor="middle" fill="#e2e8f0" font-size="15">concentration</text>
<text x="30" y="140" fill="#e2e8f0" font-size="15" transform="rotate(-90 30 140)">surface tension &#947;</text>
</svg><figcaption>Ordinary organic solutes lower surface tension gradually as they accumulate at the surface (positive surface excess); simple electrolytes raise it slightly (negative surface excess).</figcaption></figure>
  </p><p><em>Use these sketches to match KCl / CH₃OH / surfactant</em></p><p>(A) I-KCl, II-CH₃OH, III-surfactant</p><p>(B) I-surfactant, II-CH₃OH, III-KCl</p><p>(C) I-KCl, II-surfactant, III-CH₃OH</p><p>(D) I-CH₃OH, II-KCl, III-surfactant</p><p>Solution: Electrolyte raises γ → II. Alcohol lowers γ gradually → I. Surfactant lowers γ sharply then plateau → III. Correct option: (D).</p><p>Problem 2. A plot of surface tension versus concentration for a surfactant is linear with a steep negative slope up to 8 × 10⁻³ mol L⁻¹ and then becomes horizontal. What is the CMC? What is the sign of the surface excess below the CMC?</p><p>Solution: CMC = 8 × 10⁻³ mol L⁻¹. Below CMC, ∂γ/∂c &lt; 0 ⇒ Γ &gt; 0 (positive adsorption).</p><p>Problem 3. For a dilute aqueous solution of a non-electrolyte the slope (∂γ/∂c) = −0.025 N m⁻¹ (mol L⁻¹)⁻¹ at c = 0.10 mol L⁻¹ and 298 K. Estimate the surface excess Γ.</p><p><strong>Γ = − (c/RT) (∂γ/∂c) = − (0.10 / (8.314×298)) × (−0.025)</strong></p><p>Γ ≈ 1.0 × 10⁻⁶ mol m⁻².</p><p>Problem 4. Which of the following statements is correct?</p><p>(a) Addition of KCl to water increases surface tension.</p><p>(b) Addition of soap to water decreases surface tension continuously without limit.</p><p>(c) Surface excess of KCl at the air–water interface is positive.</p><p>(d) CMC is the concentration at which surface tension of a surfactant solution is maximum.</p><p>Solution: (a) is correct. (b) is false — γ levels off after CMC. (c) is false — electrolyte shows negative adsorption. (d) is false — γ is minimum (and constant) after CMC.</p><h3><strong>8.7 Connection to Adsorption</strong></h3><p>The accumulation of surfactant or alcohol molecules at the air–water interface is a classic example of adsorption at a liquid–gas interface. The same thermodynamic principles (surface excess, Gibbs equation) that govern solid–gas adsorption appear here, only the measurable experimental quantity is surface tension rather than the amount of gas adsorbed.</p><p><strong>KEY IDEA  </strong>Positive adsorption lowers surface tension; negative adsorption raises it. Surfactants are extreme cases of positive adsorption.</p><h2><strong>07  Practice Problems with Solutions</strong></h2><h3><strong>6.1 Numerical Problems</strong></h3><p>Q1. 200 mL of 0.2 M acetic acid is shaken with 0.6 g charcoal. Final concentration = 0.1 M. Mass of acetic acid adsorbed per gram of carbon?</p><p>Moles adsorbed = 0.020 → mass = 1.20 g → per gram = 2.0 g. Answer: 2.0 g</p><p>Q2. CO₂ on charcoal follows Freundlich. Mass adsorbed becomes 64 times when pressure is doubled. Find n (report n × 100, nearest integer).</p><p>2^{1/n} = 64 = 2⁶ ⇒ 1/n = 6 ⇒ n = 1/6 ≈ 0.1667 → 17. Answer: 17</p><p>Q3. 100 mL of 0.5 M acetic acid on 1 g charcoal forms a monolayer. Unadsorbed acid requires 40 mL of 1 M NaOH. Surface area = 150 m² g⁻¹, N_A = 6.0 × 10²³. Area per molecule = P × 10⁻²³ m². Find P.</p><p>Moles adsorbed = 0.010 → molecules = 6.0 × 10²¹ → area/molecule = 2.5 × 10⁻²⁰ m² = 25 × 10⁻²³ m². Answer: 25</p><p>Q4. Langmuir plot of P/q vs P has slope 0.050 g mmol⁻¹ and intercept 0.020 bar g mmol⁻¹. Find qₘ and K.</p><p>qₘ = 20 mmol g⁻¹, K = 2.5 bar⁻¹.</p><p>Q5. Same coverage: 1.00 bar at 300 K, 2.50 bar at 330 K. Estimate ΔH_ads.</p><p>ΔH_ads ≈ −27.4 kJ mol⁻¹.</p><p>Q6. A = 10¹³ s⁻¹, E_d = 100 kJ mol⁻¹, T = 500 K. Find residence time.</p><p>τ ≈ 2.8 ms.</p><p>Q7. 1 g carbon + 250 mL of 0.080 M dye; Cₑ = 0.020 M. Find x/m.</p><h3>0.015 mol g⁻¹.</h3><p>Q8. Non-porous solid, density 2.0 g cm⁻³, uniform spheres of diameter 1.0 μm. External specific surface area?</p><p>aₛ = 6/(ρ d) = 3.0 m² g⁻¹.</p><h3><strong>6.2 Conceptual Questions</strong></h3><p>Q9. Which statement is incorrect for physisorption? (a) reversible (b) increases with temperature (c) spontaneous (d) ΔH and ΔS both negative. → (b)</p><p>Q10. Value of 1/n in Freundlich isotherm is usually between 0 and 1. → True</p><p>Q11. Gas with lowest critical temperature shows least physisorption on charcoal. → True (He)</p><p>Q12. Correct statements: (a) adsorption always exothermic (b) physisorption may become chemisorption at high T (c) physisorption increases with T (d) chemisorption more exothermic but slow (high Eₐ). → (a)(b)(d)</p><h2><strong>08  Formula Sheet and Memory Map</strong></h2><p><strong>θ = KP/(1+KP)          q = qₘ KP/(1+KP)</strong></p><p><strong>P/q = 1/(qₘ K) + (1/qₘ) P</strong></p><p><strong>θ_diss = √(KP)/(1+√(KP))</strong></p><p><strong>x/m = k P^{1/n}          log(x/m) = log k + (1/n) log P</strong></p><p><strong>P/[n(P₀−P)] = 1/(nₘ C) + [(C−1)/(nₘ C)](P/P₀)</strong></p><p><strong>ln(P₂/P₁)_θ = −(qₛₜ/R)(1/T₂ − 1/T₁)</strong></p><p><strong>τ = A⁻¹ exp(E_d/RT)          aₛ = 6/(ρ d)</strong></p><p><strong>x/m = (C₀ − Cₑ)V/m          dG = γ dA</strong></p><p><strong>ΔG = ΔH − T ΔS</strong></p><p><strong>KEY IDEA  </strong>Always use equilibrium pressure or concentration in isotherm equations.</p><p><strong>JEE TRAP  </strong>Chemisorption does not simply increase with temperature. Activated adsorption may rise; equilibrium coverage falls at high T.</p><p><strong>JEE TRAP  </strong>Freundlich has no true saturation limit; Langmuir does.</p><p><strong>JEE TRAP  </strong>High-pressure zero-order is macroscopic, not a microscopic stoppage of events.</p><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Critical micelle concentration break point"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<line x1="90" y1="245" x2="720" y2="245" stroke="#94a3b8"/>
<line x1="90" y1="245" x2="90" y2="45" stroke="#94a3b8"/>
<path d="M90 70 C230 130 330 195 400 200 L710 200" fill="none" stroke="#a78bfa" stroke-width="5"/>
<line x1="400" y1="60" x2="400" y2="245" stroke="#fbbf24" stroke-dasharray="6 6"/>
<text x="405" y="80" fill="#fbbf24" font-size="14">CMC</text>
<text x="180" y="110" fill="#c4b5fd" font-size="14">sharp fall: monomers adsorb at interface</text>
<text x="560" y="185" fill="#c4b5fd" font-size="14">plateau: micelles form in bulk</text>
<circle cx="620" cy="120" r="4" fill="#67e8f9"/><circle cx="640" cy="130" r="4" fill="#67e8f9"/><circle cx="600" cy="135" r="4" fill="#67e8f9"/>
<circle cx="670" cy="150" r="20" fill="none" stroke="#67e8f9" stroke-width="2"/>
<text x="400" y="278" text-anchor="middle" fill="#e2e8f0" font-size="15">surfactant concentration</text>
</svg><figcaption>Below the CMC, added surfactant lowers γ sharply as it packs the interface; above the CMC excess surfactant forms micelles in the bulk and γ stays roughly constant.</figcaption></figure>
  </p><p>
    <figure class="adsorption-svg-figure"><svg viewBox="0 0 800 300" class="adsorption-svg" role="img" aria-label="Surfactant monolayer at the air-water interface"><rect x="5" y="5" width="790" height="290" rx="24" fill="#071326" stroke="#334155"/>
<rect x="60" y="170" width="680" height="80" fill="#0c4a6e"/>
<line x1="60" y1="170" x2="740" y2="170" stroke="#38bdf8" stroke-width="3"/>
<text x="400" y="60" text-anchor="middle" fill="#e2e8f0" font-size="15">air</text>
<text x="400" y="230" text-anchor="middle" fill="#bae6fd" font-size="15">water</text>
<circle cx="100" cy="150" r="10" fill="#67e8f9"/><line x1="100" y1="160" x2="100" y2="205" stroke="#fbbf24" stroke-width="4"/><circle cx="170" cy="150" r="10" fill="#67e8f9"/><line x1="170" y1="160" x2="170" y2="205" stroke="#fbbf24" stroke-width="4"/><circle cx="240" cy="150" r="10" fill="#67e8f9"/><line x1="240" y1="160" x2="240" y2="205" stroke="#fbbf24" stroke-width="4"/><circle cx="310" cy="150" r="10" fill="#67e8f9"/><line x1="310" y1="160" x2="310" y2="205" stroke="#fbbf24" stroke-width="4"/><circle cx="380" cy="150" r="10" fill="#67e8f9"/><line x1="380" y1="160" x2="380" y2="205" stroke="#fbbf24" stroke-width="4"/><circle cx="450" cy="150" r="10" fill="#67e8f9"/><line x1="450" y1="160" x2="450" y2="205" stroke="#fbbf24" stroke-width="4"/><circle cx="520" cy="150" r="10" fill="#67e8f9"/><line x1="520" y1="160" x2="520" y2="205" stroke="#fbbf24" stroke-width="4"/><circle cx="590" cy="150" r="10" fill="#67e8f9"/><line x1="590" y1="160" x2="590" y2="205" stroke="#fbbf24" stroke-width="4"/><circle cx="660" cy="150" r="10" fill="#67e8f9"/><line x1="660" y1="160" x2="660" y2="205" stroke="#fbbf24" stroke-width="4"/>
<text x="400" y="278" text-anchor="middle" fill="#94a3b8" font-size="14">polar heads at the surface &#183; hydrocarbon tails point into the air</text>
</svg><figcaption>Surfactant molecules orient at the air–water interface with polar heads anchored in water and hydrocarbon tails projecting into the air, forming a monolayer.</figcaption></figure>
  </p>`;

export default function AdsorptionPage() {
  return (
    <main className="adsorption-page">
      <div className="adsorption-shell">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/programs/jee-advanced">JEE Advanced</Link>
          <span>›</span>
          <Link href="/learn/jee-advanced/surface-chemistry">
            Surface Chemistry
          </Link>
          <span>›</span>
          <span>Adsorption</span>
        </nav>

        <header className="hero">
          <div className="eyebrow">
            JEE ADVANCED · SURFACE CHEMISTRY
          </div>

          <h1>Adsorption</h1>

          <p>
            Complete theory, derivations, molecular-orbital treatment,
            adsorption isotherms, kinetics, applications, surface tension,
            Gibbs adsorption, CMC and examination practice.
          </p>
        </header>

        <AdsorptionContent html={adsorptionHtml} />

        <footer className="back-link">
          <Link href="/learn/jee-advanced/surface-chemistry">
            ← Surface Chemistry
          </Link>
        </footer>
      </div>

      <style>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background:
            radial-gradient(
              circle at 8% 2%,
              rgba(0, 212, 255, 0.12),
              transparent 31rem
            ),
            radial-gradient(
              circle at 92% 22%,
              rgba(124, 58, 237, 0.14),
              transparent 36rem
            ),
            #050816;
          color: #e5e7eb;
          font-family:
            "SF Pro Text",
            "SF Pro Display",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif;
        }

        .adsorption-page {
          min-height: 100vh;
        }

        .adsorption-shell {
          width: min(1120px, calc(100% - 28px));
          margin: 0 auto;
          padding: 24px 0 88px;
        }

        .breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 22px;
          color: #94a3b8;
          font-size: 0.82rem;
        }

        .breadcrumb a {
          color: #bae6fd;
          text-decoration: none;
        }

        .hero {
          margin-bottom: 26px;
          padding: clamp(30px, 6vw, 62px);
          border: 1px solid rgba(0, 212, 255, 0.18);
          border-radius: 26px;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(0, 212, 255, 0.12),
              transparent 24rem
            ),
            linear-gradient(
              145deg,
              rgba(8, 26, 46, 0.98),
              rgba(5, 8, 22, 0.98)
            );
        }

        .eyebrow {
          margin-bottom: 14px;
          color: #67e8f9;
          font-size: 0.78rem;
          font-weight: 850;
          letter-spacing: 0.15em;
        }

        .hero h1 {
          margin: 0;
          color: #00d4ff;
          font-family:
            "SF Pro Display",
            "SF Pro Text",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif;
          font-size: clamp(3rem, 8vw, 5.6rem);
          font-weight: 850;
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .hero p {
          max-width: 850px;
          margin: 22px 0 0;
          color: #cbd5e1;
          font-size: clamp(1rem, 2vw, 1.13rem);
          line-height: 1.75;
        }

        :global(.adsorption-content) {
          padding: clamp(22px, 5vw, 54px);
          border: 1px solid rgba(148, 163, 184, 0.17);
          border-radius: 26px;
          background: rgba(5, 8, 22, 0.96);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.32);
        }

        :global(.adsorption-content h2) {
          margin: 4.4rem 0 1.55rem;
          padding: 18px 20px;
          border-left: 5px solid #7c3aed;
          border-radius: 14px;
          background: rgba(124, 58, 237, 0.14);
          color: #a78bfa;
          font-family:
            "SF Pro Display",
            "SF Pro Text",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif;
          font-size: clamp(1.65rem, 4vw, 2.35rem);
          font-weight: 820;
          line-height: 1.18;
        }

        :global(.adsorption-content h2:first-child) {
          margin-top: 0;
        }

        :global(.adsorption-content h3) {
          margin: 2.7rem 0 1rem;
          color: #22d3ee;
          font-family:
            "SF Pro Display",
            "SF Pro Text",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif;
          font-size: clamp(1.2rem, 3vw, 1.55rem);
          font-weight: 780;
          line-height: 1.3;
        }

        :global(.adsorption-content h4) {
          margin: 1.8rem 0 0.7rem;
          color: #93c5fd;
          font-size: 1.06rem;
          font-weight: 760;
        }

        :global(.adsorption-content p),
        :global(.adsorption-content li),
        :global(.adsorption-content dd) {
          color: #e5e7eb;
          font-size: clamp(0.98rem, 1.55vw, 1.06rem);
          line-height: 1.8;
        }

        :global(.adsorption-content strong) {
          color: #f8fafc;
        }

        :global(.adsorption-content .katex) {
          color: #fbbf24;
        }

        :global(.adsorption-content .katex-display) {
          margin: 1.25rem 0;
          padding: 16px 18px;
          overflow-x: auto;
          border: 1px solid rgba(251, 191, 36, 0.28);
          border-left: 5px solid #fbbf24;
          border-radius: 14px;
          background: rgba(120, 78, 10, 0.13);
          text-align: left;
        }

        :global(.converted-card-list) {
          display: grid;
          gap: 15px;
          margin: 1.4rem 0 2rem;
        }

        :global(.converted-card) {
          padding: 17px 19px;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 15px;
          background: rgba(15, 23, 42, 0.76);
        }

        :global(.converted-card h4) {
          margin-top: 0;
          color: #c4b5fd;
        }

        :global(.converted-card-row) {
          display: grid;
          grid-template-columns: minmax(145px, 0.32fr) 1fr;
          gap: 13px;
          padding: 10px 0;
          border-top: 1px solid rgba(148, 163, 184, 0.13);
        }

        :global(.converted-card-row:first-of-type) {
          border-top: 0;
        }

        :global(.converted-card-row > strong) {
          color: #22d3ee;
        }

        :global(.adsorption-svg-figure) {
          margin: 1.8rem 0 2.1rem;
          padding: 11px;
          border: 1px solid rgba(34, 211, 238, 0.2);
          border-radius: 17px;
          background: rgba(9, 17, 32, 0.92);
        }

        :global(.adsorption-svg) {
          display: block;
          width: 100%;
          height: auto;
          margin: 0 auto;
          border-radius: 11px;
        }

        :global(.adsorption-svg-figure figcaption) {
          margin-top: 10px;
          color: #94a3b8;
          font-size: 0.84rem;
          line-height: 1.5;
          text-align: center;
        }

        :global(.adsorption-content blockquote) {
          margin: 1.45rem 0;
          padding: 17px 19px;
          border-left: 5px solid #34d399;
          border-radius: 13px;
          background: rgba(16, 96, 72, 0.14);
        }

        .back-link {
          display: flex;
          justify-content: center;
          margin-top: 28px;
        }

        .back-link a {
          padding: 11px 17px;
          border: 1px solid rgba(34, 211, 238, 0.22);
          border-radius: 999px;
          color: #cffafe;
          text-decoration: none;
        }

        @media (max-width: 700px) {
          .adsorption-shell {
            width: min(100% - 18px, 1120px);
          }

          :global(.adsorption-content) {
            padding: 21px 15px;
            border-radius: 20px;
          }

          :global(.converted-card-row) {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
