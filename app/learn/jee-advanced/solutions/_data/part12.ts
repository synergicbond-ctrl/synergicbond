import type { SolutionPart } from "./types";
import { part12Source } from "./source/part12Source";
import { part12Reference } from "./reference/part12Reference";
import { part12ReferenceExtra } from "./referenceExtra/part12ReferenceExtra";

export const part12: SolutionPart = {
  "number": 12,
  "slug": "12-boiling-point-elevation",
  "shortTitle": "Boiling-Point Elevation",
  "title": "Elevation of Boiling Point and the Ebullioscopic Constant",
  "subtitle": "Thermodynamic derivation of ΔTᵦ=Kᵦm, calculation of Kᵦ and complete transformed source problems including solvent evaporation.",
  "sourcePages": "53–59",
  "objectives": [
    "Explain boiling-point elevation from vapour-pressure lowering.",
    "Derive the molal elevation law.",
    "Calculate Kᵦ from solvent thermodynamic data.",
    "Determine molar mass and solute mass from ΔTᵦ.",
    "Handle concentration change caused by solvent evaporation."
  ],
  "blocks": [
    ...part12Source,
    {
      "kind": "theory",
      "title": "Why the boiling point rises",
      "paragraphs": [
        "At any given temperature, a nonvolatile solute lowers solvent vapour pressure. To make the solution vapour pressure equal the external pressure, the temperature must therefore be raised above the pure-solvent boiling point.",
        "The effect depends on the number of effective solute particles, not their chemical identity, in the dilute ideal limit."
      ],
      "sourcePages": "53–55",
      "visual": "boiling-elevation"
    },
    {
      "kind": "derivation",
      "title": "Thermodynamic derivation of the boiling-point elevation",
      "steps": [
        "At the solution boiling point T_b, the solvent vapour pressure p equals the external pressure. The pure solvent reaches that pressure at T_b°.",
        "Raoult’s law gives p=x₁p°(T_b), so ln[p°(T_b)/p]=−ln x₁≈x₂ for a dilute solution.",
        "Use integrated Clausius–Clapeyron over the small interval ΔT_b=T_b−T_b°.",
        "Approximate T_bT_b°≈(T_b°)² and x₂≈n₂/n₁.",
        "Replace n₂/n₁=(w₂/M₂)/(w₁/M₁)=mM₁/1000."
      ],
      "result": "ΔT_b = K_bm;  K_b = R(T_b°)²M₁/(1000ΔH_vap)",
      "assumptions": [
        "Nonvolatile solute.",
        "Dilute ideal solution.",
        "Small temperature elevation.",
        "ΔH_vap constant over the interval.",
        "No solute association or dissociation unless corrected by i."
      ],
      "sourcePages": "53–57"
    },
    {
      "kind": "example",
      "number": "12.1",
      "title": "Calculate Kᵦ of water",
      "question": "Using T_b°=373.15 K, M_water=18.015 g mol⁻¹ and ΔH_vap=40.7 kJ mol⁻¹, calculate Kᵦ.",
      "steps": [
        "K_b=R(T_b°)²M₁/(1000ΔH_vap).",
        "Substitute R=8.314 J mol⁻¹ K⁻¹, T=373.15 K, M=18.015 g mol⁻¹ and ΔH=40700 J mol⁻¹.",
        "K_b=0.512 K kg mol⁻¹."
      ],
      "answer": "Kᵦ≈0.512 K kg mol⁻¹.",
      "sourcePages": "55–57",
      "transformation": "Uses standard water data with a clean derivation-oriented framing."
    },
    {
      "kind": "example",
      "number": "12.2",
      "title": "Boiling point of a urea solution",
      "question": "12.0 g urea (M=60 g mol⁻¹) is dissolved in 150 g water. Calculate the boiling point at 1 atm using Kᵦ=0.512 K kg mol⁻¹.",
      "steps": [
        "n_urea=12.0/60=0.200 mol.",
        "m=0.200/0.150=1.333 mol kg⁻¹.",
        "ΔT_b=0.512×1.333=0.6827 K.",
        "T_b=100.683°C."
      ],
      "answer": "100.68°C.",
      "sourcePages": "56–58",
      "transformation": "Urea and water masses changed."
    },
    {
      "kind": "example",
      "number": "12.3",
      "title": "Glucose needed for a target boiling point",
      "question": "What mass of glucose is required in 250 g water to raise the boiling point to 101.20°C? Use Kᵦ=0.512 K kg mol⁻¹.",
      "steps": [
        "ΔT_b=1.20 K, so m=1.20/0.512=2.34375 mol kg⁻¹.",
        "Required moles=2.34375×0.250=0.58594 mol.",
        "Mass=0.58594×180=105.47 g."
      ],
      "answer": "105.5 g glucose.",
      "sourcePages": "57–58",
      "transformation": "Target temperature and water mass changed."
    },
    {
      "kind": "example",
      "number": "12.4",
      "title": "Molar mass from boiling-point elevation",
      "question": "1.80 g of a nonvolatile solute in 40.0 g benzene raises the boiling point by 0.640 K. For benzene Kᵦ=2.53 K kg mol⁻¹. Find molar mass.",
      "steps": [
        "m=ΔT_b/K_b=0.640/2.53=0.25296 mol kg⁻¹.",
        "Moles solute=0.25296×0.0400=0.010118 mol.",
        "Molar mass=1.80/0.010118=177.9 g mol⁻¹."
      ],
      "answer": "M=178 g mol⁻¹.",
      "sourcePages": "55–58",
      "transformation": "New solute mass, solvent mass and temperature elevation."
    },
    {
      "kind": "example",
      "number": "12.5",
      "title": "Fraction of solvent evaporated during continued boiling",
      "question": "A solution initially contains 0.120 mol nonvolatile solute in 300 g water and boils at 100.205°C. It is boiled until the boiling point reaches 100.410°C. Assuming solute is retained and Kᵦ is constant, find the fraction of water evaporated.",
      "steps": [
        "Because ΔT_b=K_bn_s/mass_solvent(kg), with n_s constant, ΔT_b is inversely proportional to solvent mass.",
        "m_final/m_initial=ΔT_initial/ΔT_final=0.205/0.410=0.500.",
        "Final water mass=150 g, so evaporated water=150 g.",
        "Fraction evaporated=150/300=0.500."
      ],
      "answer": "50.0% of the water evaporates.",
      "sourcePages": "58–59",
      "transformation": "Temperature elevations and initial quantities changed from the source evaporation problem."
    },
    {
      "kind": "reference",
      "title": "Ebullioscopy and practical molar-mass accuracy",
      "paragraphs": [
        "Ebullioscopy is less suitable for very high molar masses because ΔTᵦ becomes extremely small. Volatility of solute, heat loss, superheating and concentration gradients also reduce accuracy.",
        "Osmometry is generally superior for polymers because measurable osmotic pressures can be obtained even when molality is tiny."
      ],
      "sourceLabel": "Supplemental experimental-method depth."
    },
    {
      "kind": "reference",
      "title": "Pressure dependence of Kᵦ",
      "paragraphs": [
        "Kᵦ contains the pure-solvent boiling temperature and enthalpy of vaporisation. Changing external pressure changes T_b° and slightly changes ΔH_vap, so Kᵦ is not a universal solvent constant independent of pressure.",
        "Tabulated Kᵦ values normally refer to the normal boiling region."
      ],
      "sourceLabel": "Supplemental thermodynamic depth."
    },
    {
      "kind": "reference",
      "title": "Ebullioscopic apparatus and superheating",
      "paragraphs": [
        "Accurate boiling-point elevation measurements require the thermometer bulb to sample equilibrium liquid temperature while avoiding direct contact with overheated vessel walls.",
        "A Cottrell pump can circulate boiling liquid and vapour over the thermometer, reducing temperature gradients and superheating.",
        "Because ΔTᵦ may be only a few hundredths of a kelvin, calibration and pressure stability are critical."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Solute volatility and decomposition",
      "paragraphs": [
        "A volatile solute contributes to vapour pressure and changes vapour composition, so the simple nonvolatile-solute elevation law no longer applies. A decomposing solute can also change particle count during heating.",
        "Electrolytes may undergo ion pairing that varies with temperature, making i temperature-dependent.",
        "Before using ebullioscopy, verify chemical stability, negligible solute volatility and an appropriate concentration range."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Relationship between Kᵦ and solvent properties",
      "paragraphs": [
        "Kᵦ grows with the square of boiling temperature and with solvent molar mass, but decreases as enthalpy of vaporisation increases.",
        "A large Kᵦ gives a larger measurable temperature change for a given molality and improves sensitivity.",
        "However, a high-boiling solvent may be inconvenient or chemically incompatible, so experimental solvent choice balances sensitivity and practicality."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Use solvent mass after evaporation, not initial solution mass",
      "paragraphs": [
        "In boiling-concentration questions, nonvolatile solute moles remain fixed while solvent mass decreases. Recalculate molality from the remaining solvent."
      ],
      "sourcePages": "58–59"
    },
    ...part12Reference,
    ...part12ReferenceExtra
  ]
};
