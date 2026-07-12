import React from "react";

import ThermodynamicsIntegratedEnrichment from "./ThermodynamicsIntegratedEnrichment";
import ThermodynamicsCompleteDerivations from "./ThermodynamicsCompleteDerivations";

type Tone = "cyan" | "violet" | "amber" | "emerald" | "rose" | "sky";

const toneMap: Record<Tone, string> = {
  cyan: "border-cyan-400/25 bg-cyan-400/[0.07] text-cyan-200",
  violet: "border-violet-400/25 bg-violet-400/[0.07] text-violet-200",
  amber: "border-amber-400/25 bg-amber-400/[0.07] text-amber-200",
  emerald: "border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-200",
  rose: "border-rose-400/25 bg-rose-400/[0.07] text-rose-200",
  sky: "border-sky-400/25 bg-sky-400/[0.07] text-sky-200",
};

function Chip({ children, tone = "cyan" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold tracking-wide ${toneMap[tone]}`}>
      {children}
    </span>
  );
}

function Section({
  index,
  title,
  subtitle,
  children,
}: {
  index: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
      <div className="flex items-start gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200">
          {index}
        </span>
        <div>
          <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-1 text-sm leading-6 text-slate-400">{subtitle}</p> : null}
        </div>
      </div>
      <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-200 md:text-base">{children}</div>
    </section>
  );
}

function ConceptLens({
  title,
  children,
  tone = "cyan",
}: {
  title: string;
  children: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <aside className={`rounded-2xl border p-5 ${toneMap[tone]}`}>
      <p className="text-xs font-black uppercase tracking-[0.2em]">Concept lens</p>
      <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-200">{children}</div>
    </aside>
  );
}

function Formula({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-black/30 p-4 text-center">
      {label ? (
        <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{label}</p>
      ) : null}
      <div className="whitespace-nowrap font-mono text-lg font-black text-white md:text-xl">{children}</div>
    </div>
  );
}

function PhaseTransitionAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 800"
        role="img"
        aria-labelledby="phase-title phase-description"
        className="h-auto w-full"
      >
        <title id="phase-title">Animated entropy changes during fusion, vaporisation, and sublimation</title>
        <desc id="phase-description">
          Particles gain mobility and accessible arrangements as a solid melts, a liquid vaporises,
          or a solid sublimes. At equilibrium transition temperature the system entropy change equals transition enthalpy divided by temperature.
        </desc>

        <defs>
          <marker id="ptAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
          <marker id="ptCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="ptRose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
        </defs>

        <rect width="1200" height="800" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          PHASE TRANSITIONS: ENTROPY JUMPS AT EQUILIBRIUM TEMPERATURE
        </text>

        <g>
          <text x="195" y="120" fill="#a5f3fc" fontSize="27" fontWeight="900" textAnchor="middle">SOLID</text>
          <rect x="55" y="155" width="280" height="305" rx="30" fill="#0f172a" stroke="#22d3ee" strokeWidth="8" />
          {Array.from({ length: 16 }).map((_, i) => (
            <circle
              key={`s-${i}`}
              cx={95 + (i % 4) * 66}
              cy={205 + Math.floor(i / 4) * 68}
              r="12"
              fill="#67e8f9"
            >
              <animate
                attributeName="r"
                values="10;13;10"
                dur={`${1.8 + i * 0.05}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
          <text x="195" y="500" fill="#cbd5e1" fontSize="18" textAnchor="middle">ordered lattice</text>
          <text x="195" y="535" fill="#cbd5e1" fontSize="18" textAnchor="middle">restricted positions</text>
        </g>

        <g>
          <text x="600" y="120" fill="#fde68a" fontSize="27" fontWeight="900" textAnchor="middle">LIQUID</text>
          <rect x="460" y="155" width="280" height="305" rx="30" fill="#0f172a" stroke="#fbbf24" strokeWidth="8" />
          {Array.from({ length: 16 }).map((_, i) => (
            <circle
              key={`l-${i}`}
              cx={500 + (i % 4) * 66}
              cy={205 + Math.floor(i / 4) * 68}
              r="12"
              fill="#fde047"
            >
              <animate
                attributeName={i % 2 ? "cx" : "cy"}
                values={
                  i % 2
                    ? `${488 + (i % 4) * 66};${520 + (i % 4) * 62};${488 + (i % 4) * 66}`
                    : `${192 + Math.floor(i / 4) * 68};${225 + Math.floor(i / 4) * 62};${192 + Math.floor(i / 4) * 68}`
                }
                dur={`${1.5 + i * 0.07}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
          <text x="600" y="500" fill="#cbd5e1" fontSize="18" textAnchor="middle">mobile neighbours</text>
          <text x="600" y="535" fill="#cbd5e1" fontSize="18" textAnchor="middle">greater configurational freedom</text>
        </g>

        <g>
          <text x="1005" y="120" fill="#f9a8d4" fontSize="27" fontWeight="900" textAnchor="middle">GAS</text>
          <rect x="865" y="155" width="280" height="305" rx="30" fill="#0f172a" stroke="#f472b6" strokeWidth="8" />
          {Array.from({ length: 10 }).map((_, i) => (
            <circle
              key={`g-${i}`}
              cx={905 + (i % 3) * 95}
              cy={195 + Math.floor(i / 3) * 80}
              r="12"
              fill="#f472b6"
            >
              <animate
                attributeName={i % 2 ? "cx" : "cy"}
                values={
                  i % 2
                    ? `${885 + (i % 3) * 95};${945 + (i % 3) * 80};${885 + (i % 3) * 95}`
                    : `${180 + Math.floor(i / 3) * 80};${245 + Math.floor(i / 3) * 65};${180 + Math.floor(i / 3) * 80}`
                }
                dur={`${1.2 + i * 0.1}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
          <text x="1005" y="500" fill="#cbd5e1" fontSize="18" textAnchor="middle">large accessible volume</text>
          <text x="1005" y="535" fill="#cbd5e1" fontSize="18" textAnchor="middle">maximum translational freedom</text>
        </g>

        <path d="M345 300 H445" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#ptAmber)" />
        <text x="395" y="260" fill="#fde68a" fontSize="20" fontWeight="900" textAnchor="middle">fusion</text>

        <path d="M750 300 H850" stroke="#fb7185" strokeWidth="5" markerEnd="url(#ptRose)" />
        <text x="800" y="260" fill="#fda4af" fontSize="20" fontWeight="900" textAnchor="middle">vaporisation</text>

        <path d="M290 600 C500 735 735 735 930 600" fill="none" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#ptCyan)" />
        <text x="610" y="735" fill="#a5f3fc" fontSize="21" fontWeight="900" textAnchor="middle">sublimation</text>

        <rect x="260" y="585" width="680" height="58" rx="22" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="622" fill="#ddd6fe" fontSize="21" fontWeight="900" textAnchor="middle">
          ΔS<tspan baselineShift="sub">tr</tspan> = ΔH<tspan baselineShift="sub">tr</tspan>/T<tspan baselineShift="sub">tr</tspan>
        </text>

        <text x="600" y="775" fill="#94a3b8" fontSize="18" textAnchor="middle">
          Forward transitions toward greater molecular freedom have positive system entropy changes.
        </text>
      </svg>
    </div>
  );
}

function EntropyTemperatureGraph() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="st-title st-description"
        className="h-auto w-full"
      >
        <title id="st-title">Entropy versus temperature with phase-transition jumps</title>
        <desc id="st-description">
          Entropy rises continuously while heating within each phase and jumps at a reversible crystalline transition,
          melting point, and boiling point.
        </desc>

        <defs>
          <marker id="stGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
        </defs>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ENTROPY–TEMPERATURE MAP OF HEATING AND PHASE TRANSITIONS
        </text>

        <line x1="120" y1="650" x2="1090" y2="650" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="120" y1="650" x2="120" y2="90" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1115" y="662" fill="#e2e8f0" fontSize="24">T</text>
        <text x="90" y="82" fill="#e2e8f0" fontSize="24">S</text>

        <path
          id="stPath"
          d="M160 580 C235 545 285 505 330 455 L330 410 C390 380 425 345 470 305 L470 230 C575 205 680 180 790 160 L790 85 C885 75 965 68 1040 60"
          fill="none"
          stroke="#34d399"
          strokeWidth="5"
          markerEnd="url(#stGreen)"
        />

        <circle r="13" fill="#fde047">
          <animateMotion dur="7s" repeatCount="indefinite">
            <mpath href="#stPath" />
          </animateMotion>
        </circle>

        <line x1="330" y1="650" x2="330" y2="390" stroke="#a78bfa" strokeWidth="3" strokeDasharray="12 10" />
        <line x1="470" y1="650" x2="470" y2="215" stroke="#fbbf24" strokeWidth="3" strokeDasharray="12 10" />
        <line x1="790" y1="650" x2="790" y2="75" stroke="#f472b6" strokeWidth="3" strokeDasharray="12 10" />

        <text x="330" y="690" fill="#ddd6fe" fontSize="18" textAnchor="middle">Ttrans</text>
        <text x="470" y="690" fill="#fde68a" fontSize="18" textAnchor="middle">Tm</text>
        <text x="790" y="690" fill="#f9a8d4" fontSize="18" textAnchor="middle">Tb</text>

        <text x="245" y="525" fill="#a5f3fc" fontSize="18">solid I</text>
        <text x="380" y="360" fill="#ddd6fe" fontSize="18">solid II</text>
        <text x="590" y="220" fill="#fde68a" fontSize="18">liquid</text>
        <text x="915" y="120" fill="#f9a8d4" fontSize="18">gas</text>

        <rect x="210" y="705" width="780" height="38" rx="18" fill="#0f172a" stroke="#22d3ee" strokeWidth="3" />
        <text x="600" y="731" fill="#a5f3fc" fontSize="18" fontWeight="900" textAnchor="middle">
          Continuous slopes come from ∫Cp/T dT; vertical jumps equal ΔHtransition/Ttransition.
        </text>
      </svg>
    </div>
  );
}

function TroutonRuleGraphic() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 680"
        role="img"
        aria-labelledby="trouton-title trouton-description"
        className="h-auto w-full"
      >
        <title id="trouton-title">Trouton&apos;s rule and associated-liquid exceptions</title>
        <desc id="trouton-description">
          Many non-associated liquids have molar entropy of vaporisation near ten point five times the gas constant at their normal boiling points,
          while strongly hydrogen-bonded or otherwise associated liquids may deviate.
        </desc>

        <rect width="1200" height="680" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          TROUTON’S RULE: A USEFUL ESTIMATE, NOT A UNIVERSAL CONSTANT
        </text>

        <line x1="130" y1="570" x2="1080" y2="570" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="130" y1="570" x2="130" y2="115" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1100" y="582" fill="#e2e8f0" fontSize="22">liquid family</text>
        <text x="88" y="105" fill="#e2e8f0" fontSize="22">ΔSvap/R</text>

        <line x1="150" y1="315" x2="1050" y2="315" stroke="#34d399" strokeWidth="6" strokeDasharray="16 12" />
        <text x="1025" y="290" fill="#a7f3d0" fontSize="22" fontWeight="900" textAnchor="end">≈ 10.5</text>

        {[
          [220,330,"A"], [330,300,"B"], [440,320,"C"], [550,305,"D"], [660,325,"E"], [770,310,"F"]
        ].map(([cx,cy,label]) => (
          <g key={String(label)}>
            <circle cx={Number(cx)} cy={Number(cy)} r="15" fill="#67e8f9" />
            <text x={Number(cx)} y={Number(cy)+6} fill="#020617" fontSize="13" fontWeight="900" textAnchor="middle">{label}</text>
          </g>
        ))}

        <circle cx="900" cy="190" r="18" fill="#f472b6">
          <animate attributeName="r" values="14;22;14" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <text x="900" y="150" fill="#f9a8d4" fontSize="20" fontWeight="900" textAnchor="middle">associated liquid</text>
        <text x="900" y="225" fill="#cbd5e1" fontSize="17" textAnchor="middle">strong liquid-state ordering</text>

        <rect x="220" y="600" width="760" height="48" rx="20" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="632" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">
          ΔSvap ≈ 10.5R ≈ 87 J mol⁻¹ K⁻¹ for many non-associated liquids
        </text>
      </svg>
    </div>
  );
}

function ReactionEntropyLedger() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 740"
        role="img"
        aria-labelledby="rxn-ledger-title rxn-ledger-description"
        className="h-auto w-full"
      >
        <title id="rxn-ledger-title">Stoichiometric entropy ledger for a chemical reaction</title>
        <desc id="rxn-ledger-description">
          Reactant molar entropies multiplied by stoichiometric coefficients are subtracted from the corresponding product sum.
        </desc>

        <rect width="1200" height="740" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          REACTION ENTROPY IS A STOICHIOMETRIC STATE-FUNCTION BALANCE
        </text>

        <rect x="70" y="135" width="430" height="360" rx="32" fill="#0f172a" stroke="#fb7185" strokeWidth="8" />
        <text x="285" y="190" fill="#fda4af" fontSize="26" fontWeight="900" textAnchor="middle">REACTANTS</text>

        <rect x="115" y="245" width="150" height="110" rx="22" fill="#4c1d95" stroke="#a78bfa" strokeWidth="4" />
        <text x="190" y="290" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">aA</text>
        <text x="190" y="325" fill="#ddd6fe" fontSize="17" textAnchor="middle">aS<tspan baselineShift="sub">A</tspan></text>

        <rect x="305" y="245" width="150" height="110" rx="22" fill="#4c1d95" stroke="#a78bfa" strokeWidth="4" />
        <text x="380" y="290" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">bB</text>
        <text x="380" y="325" fill="#ddd6fe" fontSize="17" textAnchor="middle">bS<tspan baselineShift="sub">B</tspan></text>

        <text x="285" y="430" fill="#f9a8d4" fontSize="23" fontWeight="900" textAnchor="middle">
          ΣνS = aSA + bSB
        </text>

        <path d="M520 315 H680" stroke="#fbbf24" strokeWidth="5" />
        <polygon points="680,315 650,297 650,333" fill="#fbbf24" />
        <text x="600" y="275" fill="#fde68a" fontSize="20" fontWeight="900" textAnchor="middle">balanced reaction</text>

        <rect x="700" y="135" width="430" height="360" rx="32" fill="#0f172a" stroke="#34d399" strokeWidth="8" />
        <text x="915" y="190" fill="#a7f3d0" fontSize="26" fontWeight="900" textAnchor="middle">PRODUCTS</text>

        <rect x="745" y="245" width="150" height="110" rx="22" fill="#164e63" stroke="#22d3ee" strokeWidth="4" />
        <text x="820" y="290" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">cC</text>
        <text x="820" y="325" fill="#a5f3fc" fontSize="17" textAnchor="middle">cS<tspan baselineShift="sub">C</tspan></text>

        <rect x="935" y="245" width="150" height="110" rx="22" fill="#164e63" stroke="#22d3ee" strokeWidth="4" />
        <text x="1010" y="290" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">dD</text>
        <text x="1010" y="325" fill="#a5f3fc" fontSize="17" textAnchor="middle">dS<tspan baselineShift="sub">D</tspan></text>

        <text x="915" y="430" fill="#a7f3d0" fontSize="23" fontWeight="900" textAnchor="middle">
          ΣνS = cSC + dSD
        </text>

        <rect x="205" y="560" width="790" height="90" rx="28" fill="#0f172a" stroke="#a78bfa" strokeWidth="5" />
        <text x="600" y="600" fill="#ddd6fe" fontSize="24" fontWeight="900" textAnchor="middle">
          ΔrS = ΣνSproducts − ΣνSreactants
        </text>
        <text x="600" y="635" fill="#cbd5e1" fontSize="17" textAnchor="middle">
          Stoichiometric coefficients and physical states are essential.
        </text>

        <text x="600" y="700" fill="#94a3b8" fontSize="18" textAnchor="middle">
          Entropy of reaction is path independent; it is calculated from equilibrium-state molar entropies.
        </text>
      </svg>
    </div>
  );
}

function VanDerWaalsEntropyAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="vdw-title vdw-description"
        className="h-auto w-full"
      >
        <title id="vdw-title">Entropy change of a van der Waals gas</title>
        <desc id="vdw-description">
          The attraction contribution to internal energy cancels the attraction correction in pressure,
          leaving an entropy volume term involving available volume V minus nb.
        </desc>

        <defs>
          <marker id="vdwArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
        </defs>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          VAN DER WAALS ENTROPY: ATTRACTION CANCELS, EXCLUDED VOLUME REMAINS
        </text>

        <rect x="80" y="135" width="1040" height="105" rx="26" fill="#0f172a" stroke="#a78bfa" strokeWidth="5" />
        <text x="600" y="178" fill="#ddd6fe" fontSize="23" fontWeight="900" textAnchor="middle">
          (P + an²/V²)(V − nb) = nRT
        </text>
        <text x="600" y="215" fill="#cbd5e1" fontSize="17" textAnchor="middle">
          a represents attractions; b represents excluded volume.
        </text>

        <rect x="95" y="320" width="250" height="150" rx="26" fill="#0f172a" stroke="#fb7185" strokeWidth="5" />
        <text x="220" y="365" fill="#fda4af" fontSize="20" fontWeight="900" textAnchor="middle">
          Internal-energy term
        </text>
        <text x="220" y="420" fill="#f8fafc" fontSize="22" fontWeight="900" textAnchor="middle">
          (∂U/∂V)<tspan baselineShift="sub">T</tspan> = an²/V²
        </text>

        <rect x="475" y="320" width="250" height="150" rx="26" fill="#0f172a" stroke="#22d3ee" strokeWidth="5" />
        <text x="600" y="365" fill="#a5f3fc" fontSize="20" fontWeight="900" textAnchor="middle">
          Pressure term
        </text>
        <text x="600" y="410" fill="#f8fafc" fontSize="19" fontWeight="900" textAnchor="middle">
          P = nRT/(V−nb) − an²/V²
        </text>

        <rect x="855" y="320" width="250" height="150" rx="26" fill="#0f172a" stroke="#34d399" strokeWidth="5" />
        <text x="980" y="365" fill="#a7f3d0" fontSize="20" fontWeight="900" textAnchor="middle">
          Sum
        </text>
        <text x="980" y="420" fill="#f8fafc" fontSize="22" fontWeight="900" textAnchor="middle">
          nRT/(V−nb)
        </text>

        <path d="M350 395 H455" stroke="#34d399" strokeWidth="5" markerEnd="url(#vdwArrow)" />
        <path d="M730 395 H835" stroke="#34d399" strokeWidth="5" markerEnd="url(#vdwArrow)" />

        <rect x="170" y="555" width="860" height="105" rx="28" fill="#0f172a" stroke="#fbbf24" strokeWidth="5" />
        <text x="600" y="595" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">
          ΔS = nCv,m ln(T₂/T₁) + nR ln[(V₂−nb)/(V₁−nb)]
        </text>
        <text x="600" y="635" fill="#cbd5e1" fontSize="17" textAnchor="middle">
          for constant Cv,m and fixed composition
        </text>

        <text x="600" y="715" fill="#94a3b8" fontSize="18" textAnchor="middle">
          Parameter a influences energetic behaviour, but the entropy volume term depends on the available volume V−nb.
        </text>
      </svg>
    </div>
  );
}

function PhaseFormulaCards() {
  const cards = [
    {
      title: "Fusion",
      equation: "ΔSfus = ΔHfus/Tm",
      reverse: "ΔSfreezing = −ΔHfus/Tm",
      tone: "cyan" as Tone,
    },
    {
      title: "Vaporisation",
      equation: "ΔSvap = ΔHvap/Tb",
      reverse: "ΔScond = −ΔHvap/Tb",
      tone: "amber" as Tone,
    },
    {
      title: "Sublimation",
      equation: "ΔSsub = ΔHsub/Tsub",
      reverse: "ΔSdeposition = −ΔHsub/Tsub",
      tone: "rose" as Tone,
    },
    {
      title: "Crystalline transition",
      equation: "ΔStr = ΔHtr/Ttr",
      reverse: "reverse transition changes sign",
      tone: "violet" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <article key={card.title} className={`rounded-3xl border p-5 ${toneMap[card.tone]}`}>
          <h3 className="text-lg font-black text-white">{card.title}</h3>
          <div className="mt-3 rounded-xl bg-black/25 p-3 text-center font-mono text-sm font-black text-white">
            {card.equation}
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-300">{card.reverse}</p>
        </article>
      ))}
    </div>
  );
}

function GeneralDifferentialCards() {
  const steps = [
    {
      title: "Fundamental entropy route",
      equation: "dS = δqrev/T = (dU + P dV)/T",
      text: "Chemistry sign convention: reversible PV work on the system is δwrev = −P dV.",
      tone: "cyan" as Tone,
    },
    {
      title: "Expand dU(T,V)",
      equation: "dU = nCv,m dT + (∂U/∂V)T dV",
      text: "This separates temperature and volume effects.",
      tone: "violet" as Tone,
    },
    {
      title: "General T–V entropy differential",
      equation: "dS = nCv,m dT/T + [(∂U/∂V)T + P]dV/T",
      text: "Valid for a simple compressible closed system of fixed composition.",
      tone: "amber" as Tone,
    },
    {
      title: "Thermodynamic identity",
      equation: "(∂U/∂V)T = T(∂P/∂T)V − P",
      text: "Substitution gives dS = nCv,m dT/T + (∂P/∂T)V dV.",
      tone: "emerald" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <article key={step.title} className={`rounded-3xl border p-5 ${toneMap[step.tone]}`}>
          <h3 className="text-lg font-black text-white">{step.title}</h3>
          <div className="mt-3 rounded-xl bg-black/25 p-3 text-center font-mono text-xs font-black text-white">
            {step.equation}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-200">{step.text}</p>
        </article>
      ))}
    </div>
  );
}

function CondensedPhaseCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
        <h3 className="text-xl font-black text-white">Constant-volume heating</h3>
        <Formula label="General">
          ΔS = n∫<sub>T₁</sub><sup>T₂</sup> C<sub>V,m</sub>(T)dT/T
        </Formula>
        <Formula label="Constant Cv,m">
          ΔS = nC<sub>V,m</sub>ln(T₂/T₁)
        </Formula>
      </article>

      <article className="rounded-3xl border border-amber-300/20 bg-amber-300/[0.05] p-5">
        <h3 className="text-xl font-black text-white">Constant-pressure heating</h3>
        <Formula label="General">
          ΔS = n∫<sub>T₁</sub><sup>T₂</sup> C<sub>P,m</sub>(T)dT/T
        </Formula>
        <Formula label="Constant Cp,m">
          ΔS = nC<sub>P,m</sub>ln(T₂/T₁)
        </Formula>
      </article>
    </div>
  );
}

function WorkedExamples() {
  const items = [
    {
      title: "Fusion at equilibrium",
      problem:
        "A substance melts reversibly at 320 K with molar enthalpy of fusion 8.00 kJ mol⁻¹. Find the entropy changes of system, surroundings, and universe.",
      solution:
        "ΔSsys = 8000/320 = +25.0 J mol⁻¹ K⁻¹. The surroundings supply the same heat at 320 K, so ΔSsurr = −25.0 J mol⁻¹ K⁻¹. ΔSuniv = 0.",
    },
    {
      title: "Trouton-rule estimate",
      problem:
        "A non-associated liquid has normal boiling point 360 K. Estimate its molar enthalpy of vaporisation using Trouton’s rule.",
      solution:
        "ΔSvap ≈ 10.5R ≈ 87.3 J mol⁻¹ K⁻¹. Thus ΔHvap ≈ TbΔSvap = 360×87.3 ≈ 31.4 kJ mol⁻¹.",
    },
    {
      title: "Crystalline transition",
      problem:
        "A reversible solid-I → solid-II transition occurs at 410 K with ΔHtr = 1.64 kJ mol⁻¹. Find ΔStr.",
      solution:
        "ΔStr = 1640/410 = +4.00 J mol⁻¹ K⁻¹. The reverse transition has −4.00 J mol⁻¹ K⁻¹.",
    },
    {
      title: "Reaction entropy",
      problem:
        "For A(g) + 2B(g) → C(g), the molar entropies are SA = 210, SB = 190, and SC = 300 J mol⁻¹ K⁻¹. Find ΔrS.",
      solution:
        "ΔrS = SC − SA − 2SB = 300−210−380 = −290 J mol⁻¹ K⁻¹.",
    },
    {
      title: "Van der Waals gas",
      problem:
        "For one mole with constant Cv,m = 3R/2, temperature rises from 300 K to 400 K while available volume V−b doubles. Find ΔS.",
      solution:
        "ΔS = (3R/2)ln(400/300) + Rln2 ≈ 3.59 + 5.76 = 9.35 J K⁻¹.",
    },
    {
      title: "Heating a solid",
      problem:
        "Two moles of a solid with constant Cp,m = 25.0 J mol⁻¹ K⁻¹ are heated reversibly at constant pressure from 300 K to 500 K. Find ΔS.",
      solution:
        "ΔS = nCp,m ln(T₂/T₁) = 2×25.0×ln(500/300) ≈ 25.5 J K⁻¹.",
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h3 className=" font-black text-white">
            <span className="mr-2 text-amber-300">◆</span>
            {item.title}
          </h3>
          <p className="mt-4 leading-7 text-slate-200">{item.problem}</p>
          <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Solution</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{item.solution}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

const problems = [
  {
    title: "Concept Application 1 — freezing sign",
    question:
      "One mole of a liquid freezes reversibly at its normal freezing point. What are the signs of ΔSsys and ΔSsurr?",
    solution:
      "ΔSsys < 0 because molecular freedom decreases. The surroundings receive heat, so ΔSsurr > 0 with equal magnitude; ΔSuniv = 0.",
  },
  {
    title: "Concept Application 2 — supercooling",
    question:
      "Can ΔSsys = −ΔHfus/T be used directly for irreversible freezing of a supercooled liquid at a temperature below Tm?",
    solution:
      "Not as a complete universe balance. The system entropy is a state-function difference and must include any temperature path; the surroundings entropy uses the actual heat-transfer temperature. Irreversible freezing gives ΔSuniv > 0.",
  },
  {
    title: "Concept Application 3 — vaporisation entropy",
    question:
      "Why is ΔSvap positive at the normal boiling point?",
    solution:
      "Vaporisation increases accessible translational volume and microscopic arrangements. Since ΔHvap > 0 and Tb > 0, ΔSvap = ΔHvap/Tb > 0.",
  },
  {
    title: "Concept Application 4 — condensation",
    question:
      "At the same equilibrium temperature, compare the magnitudes of vaporisation and condensation entropy changes.",
    solution:
      "They are equal in magnitude and opposite in sign because entropy is a state function and the processes are reverses.",
  },
  {
    title: "Concept Application 5 — Trouton exception",
    question:
      "Why may a strongly hydrogen-bonded liquid have ΔSvap significantly different from 10.5R?",
    solution:
      "Its liquid state is unusually ordered by association. Vaporisation destroys this organisation, producing a larger entropy increase than the simple non-associated-liquid estimate.",
  },
  {
    title: "Concept Application 6 — sublimation relation",
    question:
      "Express ΔSsub in terms of fusion and vaporisation entropies along a reversible path.",
    solution:
      "For compatible reference temperatures with necessary heat-capacity corrections included, entropy is additive: ΔSsub = ΔSfus + ΔSvap along a solid→liquid→gas path.",
  },
  {
    title: "Concept Application 7 — crystalline transition sign",
    question:
      "Must every higher-temperature crystal form have larger entropy?",
    solution:
      "For an equilibrium transition with ΔHtr > 0, the higher-temperature form has larger entropy because ΔStr = ΔHtr/Ttr. The sign follows the measured transition enthalpy.",
  },
  {
    title: "Concept Application 8 — reaction coefficients",
    question:
      "Why must stoichiometric coefficients multiply molar entropies in ΔrS?",
    solution:
      "Reaction entropy refers to the balanced reaction event. Each coefficient specifies the number of moles created or consumed.",
  },
  {
    title: "Concept Application 9 — physical states",
    question:
      "Why is N₂(g) + 3H₂(g) → 2NH₃(g) not thermodynamically equivalent to a hypothetical equation with liquid ammonia?",
    solution:
      "Molar entropy depends strongly on physical state. Reaction entropy must use the specified equilibrium state of every species.",
  },
  {
    title: "Concept Application 10 — gas-mole heuristic",
    question:
      "If gaseous moles decrease in a reaction, is ΔrS always negative?",
    solution:
      "No. It is a useful first estimate, but molecular complexity, condensed species, temperature, and actual tabulated molar entropies can overturn the heuristic.",
  },
  {
    title: "Concept Application 11 — standard reaction entropy",
    question:
      "Write the standard entropy change for aA + bB → cC + dD.",
    solution:
      "ΔrS° = cS°m(C) + dS°m(D) − aS°m(A) − bS°m(B).",
  },
  {
    title: "Concept Application 12 — general differential",
    question:
      "Starting from dS = (dU + P dV)/T, derive the T–V entropy differential.",
    solution:
      "Use dU = nCv,m dT + (∂U/∂V)T dV. Then dS = nCv,m dT/T + [(∂U/∂V)T + P]dV/T.",
  },
  {
    title: "Concept Application 13 — ideal-gas limit",
    question:
      "Recover the ideal-gas T–V entropy differential from the general expression.",
    solution:
      "For an ideal gas, (∂U/∂V)T = 0 and P/T = nR/V. Hence dS = nCv,m dT/T + nR dV/V.",
  },
  {
    title: "Concept Application 14 — van der Waals attraction",
    question:
      "Why does parameter a disappear from the final entropy expression of a van der Waals gas?",
    solution:
      "The attraction contribution +(an²/V²) in (∂U/∂V)T cancels the −an²/V² term in pressure. The remaining volume factor is nR/(V−nb).",
  },
  {
    title: "Concept Application 15 — condensed phases",
    question:
      "Why are Cp and Cv often numerically close for solids and liquids?",
    solution:
      "Their thermal expansion and compressibility are small, so heating at constant pressure performs little expansion work compared with gases.",
  },
  {
    title: "Concept Application 16 — complete heating path",
    question:
      "Describe the entropy calculation for heating a solid through melting and then heating the liquid.",
    solution:
      "Add three state-function contributions: ∫solid Cp/T dT + ΔHfus/Tm + ∫liquid Cp/T dT. Use each heat capacity in the appropriate phase.",
  },
];

function ProblemLadder() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {problems.map((item) => (
        <article key={item.title} className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h3 className=" font-black text-white">
            <span className="mr-2 text-amber-300">◆</span>
            {item.title}
          </h3>
          <p className="mt-4 leading-7 text-slate-200">{item.question}</p>
          <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Solution</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{item.solution}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

const traps = [
  [
    "Every phase transition is irreversible.",
    "Incorrect",
    "At phase equilibrium with infinitesimal driving force, the transition can be treated reversibly.",
  ],
  [
    "ΔStransition = ΔHtransition/T at any arbitrary temperature.",
    "Incorrect",
    "The simple ratio applies to a reversible equilibrium transition at its transition temperature.",
  ],
  [
    "Trouton’s rule is exact for all liquids.",
    "Incorrect",
    "It is an empirical estimate for many non-associated liquids at their normal boiling points.",
  ],
  [
    "Water must obey ΔSvap = 10.5R exactly.",
    "Incorrect",
    "Strong hydrogen bonding makes water a well-known deviation.",
  ],
  [
    "Reaction entropy equals product entropy minus reactant entropy without coefficients.",
    "Incorrect",
    "Every molar entropy must be multiplied by its stoichiometric coefficient.",
  ],
  [
    "Only gaseous mole count determines ΔrS.",
    "Incorrect",
    "It is a heuristic; actual molar entropies and physical states determine the result.",
  ],
  [
    "The chapter general differential should contain −P dV with chemistry work convention.",
    "Incorrect",
    "Because δwrev = −P dV and δqrev = dU−δwrev, the heat term is dU + P dV.",
  ],
  [
    "For all solids and liquids, Cp = Cv exactly.",
    "Incorrect",
    "They are often close, not identical; the appropriate path heat capacity must be used.",
  ],
];

function TrapTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Tempting statement</th>
            <th className="px-4 py-3 font-black text-white">Verdict</th>
            <th className="px-4 py-3 font-black text-white">Correction</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {traps.map(([statement, verdict, correction]) => (
            <tr key={statement}>
              <td className="px-4 py-3 font-semibold text-slate-100">{statement}</td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-rose-400/15 px-3 py-1 text-xs font-black text-rose-300">{verdict}</span>
              </td>
              <td className="px-4 py-3 leading-6 text-slate-300">{correction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DailyLifeGrid() {
  const items = [
    {
      title: "Steam burns severely",
      text: "Condensing steam releases energy and loses a large vaporisation entropy while transferring heat to skin. Detailed energy calculations belong to Thermochemistry.",
      tone: "amber" as Tone,
    },
    {
      title: "Dry ice disappears",
      text: "Solid carbon dioxide sublimes directly to gas, producing a large increase in molecular translational freedom.",
      tone: "cyan" as Tone,
    },
    {
      title: "Chocolate crystal forms",
      text: "Different crystalline modifications have different entropies and stabilities; controlled temperature histories select the desired form.",
      tone: "violet" as Tone,
    },
    {
      title: "Chemical reaction tables",
      text: "Tabulated standard molar entropies let reaction entropy be calculated without reproducing the actual reaction path.",
      tone: "emerald" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className={`rounded-3xl border p-5 ${toneMap[item.tone]}`}>
          <h3 className="text-xl font-black text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-200">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function ThermodynamicsPart18() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_86%_15%,rgba(217,70,239,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(251,191,36,0.10),transparent_34%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap gap-2">
            <Chip tone="cyan">SYNERGIC BOND MASTER NOTES</Chip>
            <Chip tone="violet">COMPLETE THEORY</Chip>
            <Chip tone="amber">PHASE & REACTION ENTROPY</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Entropy Calculation Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Phase changes create entropy jumps; reactions create stoichiometric entropy balances
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                At an equilibrium transition, heat and entropy are linked by temperature.
                For reactions, the entropy change is obtained by subtracting the stoichiometric reactant total from the product total.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Master relations
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-cyan-400/10 p-4 font-mono text-lg font-black text-white">
                  ΔS<sub>tr</sub> = ΔH<sub>tr</sub>/T<sub>tr</sub>
                </div>
                <div className="rounded-xl bg-violet-400/10 p-4 font-mono text-lg font-black text-white">
                  Δ<sub>r</sub>S = ΣνS<sub>products</sub> − ΣνS<sub>reactants</sub>
                </div>
                <div className="rounded-xl bg-amber-400/10 p-4 font-mono text-lg font-black text-white">
                  dS = (dU + P dV)/T
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Entropy change during a reversible phase transition"
          subtitle="The two phases coexist in equilibrium at the transition temperature."
        >
          <Formula label="Reversible transition">
            ΔS<sub>sys</sub> = q<sub>rev</sub>/T<sub>tr</sub> = ΔH<sub>tr</sub>/T<sub>tr</sub>
          </Formula>

          <Formula label="Surroundings and universe">
            ΔS<sub>surr</sub> = −ΔH<sub>tr</sub>/T<sub>tr</sub>, ΔS<sub>univ</sub> = 0
          </Formula>

          <PhaseTransitionAnimation />
          <PhaseFormulaCards />

          <ConceptLens title="Why equilibrium matters" tone="rose">
            The ratio {String.raw`\(\Delta H_{\mathrm{tr}}/T_{\mathrm{tr}}\)`} is the system entropy change only when the transition is carried out reversibly at the equilibrium transition temperature.
          </ConceptLens>
        </Section>

        <Section index="02" title="Fusion and freezing">
          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Fusion" tone="cyan">
              Solid becomes liquid. Molecular mobility increases, so {String.raw`\(\Delta S_{\mathrm{fus}}>0\)`}.
            </ConceptLens>
            <ConceptLens title="Freezing" tone="violet">
              Liquid becomes solid. The same state-function difference reverses sign:
              {String.raw`\(\Delta S_{\mathrm{freeze}}=-\Delta S_{\mathrm{fus}}\)`}.
            </ConceptLens>
          </div>

          <Formula label="At melting point Tm">
            ΔS<sub>fus</sub> = ΔH<sub>fus</sub>/T<sub>m</sub>
          </Formula>

          <ConceptLens title="Thermochemistry boundary" tone="amber">
            This section uses transition enthalpy only as an input to entropy. Measurement, calorimetry, Hess cycles, and detailed fusion enthalpy theory remain in Thermochemistry.
          </ConceptLens>
        </Section>

        <Section index="03" title="Vaporisation, condensation, and Trouton’s rule">
          <Formula label="At normal boiling point Tb">
            ΔS<sub>vap</sub> = ΔH<sub>vap</sub>/T<sub>b</sub>
          </Formula>

          <Formula label="Condensation">
            ΔS<sub>cond</sub> = −ΔH<sub>vap</sub>/T<sub>b</sub>
          </Formula>

          <TroutonRuleGraphic />

          <Formula label="Empirical estimate">
            ΔS<sub>vap</sub> ≈ 10.5R ≈ 87 J mol⁻¹ K⁻¹
          </Formula>

          <ConceptLens title="Why associated liquids deviate" tone="rose">
            Strong hydrogen bonding or other liquid-state association creates extra order before vaporisation.
            Destroying that organisation can produce an entropy change larger than the basic Trouton estimate.
          </ConceptLens>
        </Section>

        <Section index="04" title="Sublimation and deposition">
          <Formula label="Sublimation at equilibrium">
            ΔS<sub>sub</sub> = ΔH<sub>sub</sub>/T<sub>sub</sub>
          </Formula>

          <Formula label="Reverse deposition">
            ΔS<sub>dep</sub> = −ΔH<sub>sub</sub>/T<sub>sub</sub>
          </Formula>

          <ConceptLens title="State-function additivity" tone="sky">
            A reversible alternative path may pass through liquid:
            solid → liquid → gas. Entropy changes add, with heat-capacity corrections when the steps occur at different temperatures.
          </ConceptLens>
        </Section>

        <Section index="05" title="Crystalline modification transitions">
          <Formula label="Solid I → Solid II">
            ΔS<sub>tr</sub> = ΔH<sub>tr</sub>/T<sub>tr</sub>
          </Formula>

          <EntropyTemperatureGraph />

          <ConceptLens title="A solid can have multiple entropy levels" tone="violet">
            Different crystal structures possess different vibrational spectra, orientational order, and defects.
            A solid–solid transition can therefore produce a finite entropy jump.
          </ConceptLens>
        </Section>

        <Section
          index="06"
          title="Entropy change of a chemical reaction"
          subtitle="Balanced stoichiometry and physical states are mandatory."
        >
          <ReactionEntropyLedger />

          <Formula label="General reaction">
            aA + bB → cC + dD
          </Formula>

          <Formula label="Reaction entropy">
            Δ<sub>r</sub>S = cS<sub>C</sub> + dS<sub>D</sub> − aS<sub>A</sub> − bS<sub>B</sub>
          </Formula>

          <Formula label="Standard-state form">
            Δ<sub>r</sub>S° = Σν<sub>i</sub>S°<sub>m,i</sub>(products) − Σν<sub>j</sub>S°<sub>m,j</sub>(reactants)
          </Formula>

          <ConceptLens title="Physical state is part of the chemical equation" tone="rose">
            {String.raw`\(S_m^\circ\)`} for a gas, liquid, solid, or dissolved species can differ greatly. State symbols cannot be omitted from a rigorous reaction-entropy calculation.
          </ConceptLens>

          <ConceptLens title="Gas-mole count is only a first estimate" tone="amber">
            More gaseous product moles often suggest positive {String.raw`\(\Delta_rS\)`}, but actual tabulated molar entropies decide the sign.
          </ConceptLens>
        </Section>

        <Section
          index="07"
          title="General entropy differential"
          subtitle="The chapter derivation is retained with chemistry-sign correction."
        >
          <GeneralDifferentialCards />

          <ConceptLens title="Sign correction" tone="rose">
            With {String.raw`\(\delta w_{\mathrm{rev}}=-P\,dV\)`}, the First Law gives
            {String.raw`\(\delta q_{\mathrm{rev}}=dU-\delta w_{\mathrm{rev}}=dU+P\,dV\)`}.
            The pressure term is therefore positive in the entropy differential.
          </ConceptLens>
        </Section>

        <Section index="08" title="Van der Waals gas entropy">
          <VanDerWaalsEntropyAnimation />

          <Formula label="Equation of state">
            (P + an²/V²)(V−nb) = nRT
          </Formula>

          <Formula label="Internal-energy volume derivative">
            (∂U/∂V)<sub>T</sub> = an²/V²
          </Formula>

          <Formula label="Differential">
            dS = nC<sub>V,m</sub>dT/T + nR dV/(V−nb)
          </Formula>

          <Formula label="Integrated result for constant Cv,m">
            ΔS = nC<sub>V,m</sub>ln(T₂/T₁) + nRln[(V₂−nb)/(V₁−nb)]
          </Formula>

          <ConceptLens title="Physical reading" tone="emerald">
            The attraction parameter affects internal energy and pressure in cancelling ways.
            The entropy volume term reflects the translational space actually available after excluded volume is removed.
          </ConceptLens>
        </Section>

        <Section index="09" title="Heating solids and liquids">
          <CondensedPhaseCards />

          <ConceptLens title="Why the chapter Cv expression is useful" tone="cyan">
            At constant volume the exact relation uses {String.raw`\(C_V\)`}. For ordinary constant-pressure heating of condensed phases, use {String.raw`\(C_P\)`}.
            Because thermal expansion is small, {String.raw`\(C_P\)`} and {String.raw`\(C_V\)`} are often close, but not identical.
          </ConceptLens>
        </Section>

        <Section index="10" title="Original complete worked examples">
          <WorkedExamples />
        </Section>

        <Section index="11" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="12" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={18} />

<Section index="13" title="Complete worked examples and applications">
          <ProblemLadder />
        </Section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Synergic Bond rapid recall
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                Transition entropy is heat divided by equilibrium temperature; reaction entropy is a stoichiometric difference
              </h2>
            </div>
            <Chip tone="emerald">PART 18 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Phase transition", "ΔStr = ΔHtr/Ttr"],
              ["Trouton estimate", "ΔSvap ≈ 10.5R"],
              ["Reaction entropy", "ΣνSproducts − ΣνSreactants"],
              ["van der Waals", "V is replaced by available volume V−nb"],
            ].map(([term, meaning]) => (
              <div key={term} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="font-black text-white">{term}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{meaning}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ThermodynamicsIntegratedEnrichment part={18} />


</main>
  );
}
