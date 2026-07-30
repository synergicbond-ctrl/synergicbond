import type { SolutionPart } from "./types";

export const part08: SolutionPart = {
  "number": 8,
  "slug": "08-txy-diagrams-and-boiling",
  "shortTitle": "T–x–y & Boiling",
  "title": "Temperature–Composition Diagrams, Boiling and Clausius–Clapeyron",
  "subtitle": "Normal boiling points, bubble and dew temperatures, phase fields and the thermodynamic temperature dependence of vapour pressure.",
  "sourcePages": "32–36",
  "objectives": [
    "Interpret a T–x–y diagram at fixed pressure.",
    "Distinguish bubble and dew temperatures.",
    "Use Clausius–Clapeyron for vapour-pressure changes.",
    "Calculate a normal boiling point from one vapour-pressure datum.",
    "Explain why the more volatile component has the lower boiling point."
  ],
  "blocks": [
    {
      "kind": "theory",
      "title": "Boiling as a pressure condition",
      "paragraphs": [
        "A liquid boils when its equilibrium vapour pressure equals the external pressure. The normal boiling point is defined at 1 atm; changing external pressure changes the boiling temperature.",
        "In a mixture, the first bubble appears at the bubble temperature for the liquid composition. The vapour of that first bubble has a different composition and is enriched in the more volatile component."
      ],
      "equations": [
        "P_vapour(T_b)=P_external"
      ],
      "sourcePages": "32–34"
    },
    {
      "kind": "theory",
      "title": "Reading a T–x–y diagram",
      "paragraphs": [
        "At fixed pressure, the lower boundary is the bubble curve and the upper boundary is the dew curve. Below the bubble curve the system is liquid; above the dew curve it is vapour; between them both phases coexist.",
        "Horizontal tie lines connect equilibrium liquid and vapour compositions at the chosen temperature. Vertical motion at fixed overall composition represents heating or cooling a closed mixture."
      ],
      "sourcePages": "34–36",
      "visual": "txy"
    },
    {
      "kind": "derivation",
      "title": "Integrated Clausius–Clapeyron equation",
      "steps": [
        "For liquid–vapour equilibrium, dP/dT=ΔH_vap/(TΔV).",
        "When vapour volume greatly exceeds liquid volume and the vapour is ideal, ΔV≈RT/P.",
        "Substitute and rearrange: d ln P/dT=ΔH_vap/(RT²).",
        "Assume ΔH_vap is approximately constant over the temperature interval and integrate."
      ],
      "result": "ln(P₂/P₁)=−(ΔH_vap/R)(1/T₂−1/T₁)",
      "assumptions": [
        "Vapour is ideal.",
        "Liquid molar volume is negligible compared with vapour.",
        "ΔH_vap is constant over the interval."
      ],
      "sourcePages": "32–34"
    },
    {
      "kind": "example",
      "number": "8.1",
      "title": "Normal boiling point from one pressure datum",
      "question": "A pure liquid has vapour pressure 420 torr at 300 K and ΔH_vap=31.0 kJ mol⁻¹. Estimate its normal boiling point.",
      "steps": [
        "Use P₂=760 torr, P₁=420 torr and T₁=300 K.",
        "ln(760/420)=−31000/8.314(1/T₂−1/300).",
        "1/T₂=1/300−(8.314/31000)ln(760/420).",
        "T₂=315.0 K."
      ],
      "answer": "Normal boiling point ≈315 K.",
      "sourcePages": "33–34",
      "transformation": "Pressure, temperature and enthalpy changed from the source."
    },
    {
      "kind": "example",
      "number": "8.2",
      "title": "Bubble temperature of an ideal mixture",
      "question": "At 1 atm, assume p_A°=500 torr and p_B°=1000 torr at 350 K. For x_A=0.30, determine whether the mixture boils at 350 K.",
      "steps": [
        "P_bubble=0.30×500+0.70×1000=850 torr.",
        "Because 850 torr exceeds the external pressure 760 torr, the liquid’s vapour pressure is too high at 350 K.",
        "The mixture would reach its 760-torr boiling condition at a lower temperature."
      ],
      "answer": "It is above its bubble point at 350 K; its actual boiling temperature at 1 atm is lower than 350 K.",
      "sourcePages": "34–36",
      "transformation": "Converted the source boiling-curve discussion into a state test."
    },
    {
      "kind": "example",
      "number": "8.3",
      "title": "Composition of the first vapour bubble",
      "question": "At a bubble point, a liquid has x_A=0.45. Pure vapour pressures are p_A°=60 kPa and p_B°=120 kPa. Find P and the first-bubble composition.",
      "steps": [
        "P=0.45×60+0.55×120=93 kPa.",
        "y_A=x_Ap_A°/P=0.45×60/93=0.2903.",
        "y_B=0.7097, showing enrichment of volatile B."
      ],
      "answer": "P=93 kPa; y_A=0.290 and y_B=0.710.",
      "sourcePages": "34–36",
      "transformation": "New composition and pressures."
    },
    {
      "kind": "reference",
      "title": "Trouton’s rule and quick boiling estimates",
      "paragraphs": [
        "For many nonassociated liquids near their normal boiling points, ΔS_vap≈85–88 J mol⁻¹ K⁻¹. Since ΔH_vap=T_bΔS_vap, a rough boiling-point estimate can be made when ΔH_vap is known.",
        "Hydrogen-bonded liquids, highly symmetric molecules and quantum liquids can deviate significantly, so this is an estimate rather than a universal law."
      ],
      "equations": [
        "ΔS_vap ≈ ΔH_vap/T_b"
      ],
      "sourceLabel": "Supplemental reference-depth estimate."
    },
    {
      "kind": "reference",
      "title": "Chemical-potential view of boiling",
      "paragraphs": [
        "At phase equilibrium, μ_liquid(T,P)=μ_vapour(T,P). Raising temperature lowers the chemical potential of the phase with higher entropy more rapidly; vapour has higher entropy, so heating favours vapour.",
        "The bubble and dew curves are therefore loci of equality of chemical potentials for each component under different phase compositions."
      ],
      "sourceLabel": "Supplemental thermodynamic interpretation."
    },
    {
      "kind": "reference",
      "title": "Bubble and dew temperature calculations",
      "paragraphs": [
        "At fixed pressure, bubble temperature solves P=Σxᵢpᵢ°(T), while dew temperature solves ΣyᵢP/pᵢ°(T)=1. Because pure vapour pressures depend exponentially on temperature, numerical iteration is generally required.",
        "Antoine equations provide convenient vapour-pressure correlations over specified temperature ranges. Values must not be extrapolated far beyond their fitted range.",
        "For exam problems, pure vapour pressures may be supplied directly at candidate temperatures so that iteration is avoided."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Clausius–Clapeyron limitations",
      "paragraphs": [
        "The integrated equation treats ΔH_vap as constant and the vapour as ideal. Over wide temperature ranges, enthalpy changes and nonideality introduce error.",
        "Near the critical point, liquid and vapour properties converge, latent heat approaches zero and the approximations fail strongly.",
        "Use the equation for moderate intervals and check that temperatures are in kelvin and energy units match R."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Boiling under reduced or elevated pressure",
      "paragraphs": [
        "At high altitude, lower atmospheric pressure lowers the boiling point of water, which slows cooking because the liquid temperature is lower. Pressure cookers raise external pressure and therefore the boiling temperature.",
        "Vacuum evaporators exploit the same relation to concentrate heat-sensitive foods and pharmaceuticals at lower temperatures.",
        "These are direct applications of the equality between vapour pressure and external pressure."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Normal boiling point is not a substance-independent constant pressure condition",
      "paragraphs": [
        "Normal boiling point always means the temperature at which vapour pressure is exactly 1 atm. A problem using 1 bar asks for the standard boiling point, which differs slightly."
      ],
      "sourcePages": "32–34"
    }
  ]
};
