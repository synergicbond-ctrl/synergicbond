import type { SolutionPart } from "./types";
import { part13Source } from "./source/part13Source";
import { part13Reference } from "./reference/part13Reference";
import { part13ReferenceExtra } from "./referenceExtra/part13ReferenceExtra";

export const part13: SolutionPart = {
  "number": 13,
  "slug": "13-freezing-point-depression",
  "shortTitle": "Freezing-Point Depression",
  "title": "Depression of Freezing Point and the Cryoscopic Constant",
  "subtitle": "Phase-equilibrium explanation, chemical-potential diagram, thermodynamic derivation, molar-mass problems and antifreeze applications.",
  "sourcePages": "59–65",
  "objectives": [
    "Explain freezing-point depression at molecular and chemical-potential levels.",
    "Derive ΔT𝒇=K𝒇m.",
    "Calculate K𝒇 from fusion data.",
    "Determine molar mass from freezing-point data.",
    "Apply the law to antifreeze and ice–salt systems."
  ],
  "blocks": [
    ...part13Source,
    {
      "kind": "theory",
      "title": "Freezing equilibrium in a solution",
      "paragraphs": [
        "At the freezing point of a solution, pure solid solvent is in equilibrium with solvent in the liquid solution. The solute is assumed not to enter the solid solvent lattice.",
        "Adding a nonvolatile solute lowers the chemical potential of liquid solvent but leaves the chemical potential of pure solid solvent nearly unchanged. The equality of chemical potentials is therefore restored only at a lower temperature."
      ],
      "sourcePages": "59–62",
      "visual": "freezing-depression"
    },
    {
      "kind": "theory",
      "title": "Why the solid phase is normally pure solvent",
      "paragraphs": [
        "Many introductory derivations assume the solute is excluded from the crystal. This is valid when the solid solvent lattice cannot accommodate solute particles appreciably.",
        "If a solid solution or compound forms, the simple cryoscopic law may fail and a full solid–liquid phase diagram is required."
      ],
      "sourcePages": "60–62"
    },
    {
      "kind": "derivation",
      "title": "Thermodynamic derivation of freezing-point depression",
      "steps": [
        "At the solution freezing point T_f, μ₁(solid,pure)=μ₁(liquid,solution).",
        "For an ideal solution, μ₁(liquid,solution)=μ₁*(liquid)+RT ln x₁.",
        "The chemical-potential difference between pure liquid and pure solid is related to ΔH_fus and temperature.",
        "Integrate over the small interval ΔT_f=T_f°−T_f and use −ln x₁≈x₂.",
        "For a dilute solution, x₂≈mM₁/1000."
      ],
      "result": "ΔT_f = K_fm;  K_f = R(T_f°)²M₁/(1000ΔH_fus)",
      "assumptions": [
        "Solute is nonvolatile and excluded from solid solvent.",
        "Dilute ideal liquid solution.",
        "Small temperature depression.",
        "ΔH_fus constant over the interval.",
        "No association or dissociation unless corrected by i."
      ],
      "sourcePages": "61–64"
    },
    {
      "kind": "example",
      "number": "13.1",
      "title": "Calculate K𝒇 of water from fusion data",
      "question": "Use T_f°=273.15 K, M_water=18.015 g mol⁻¹ and ΔH_fus=6.01 kJ mol⁻¹ to calculate K𝒇.",
      "steps": [
        "K_f=R(T_f°)²M₁/(1000ΔH_fus).",
        "Substitute R=8.314, T=273.15 K, M=18.015 g mol⁻¹ and ΔH=6010 J mol⁻¹.",
        "K_f=1.859 K kg mol⁻¹."
      ],
      "answer": "K𝒇≈1.86 K kg mol⁻¹.",
      "sourcePages": "62–64",
      "transformation": "Clean numerical derivation using standard water data."
    },
    {
      "kind": "example",
      "number": "13.2",
      "title": "Freezing point of an ethylene-glycol solution",
      "question": "20.0 g ethylene glycol (M=62.0 g mol⁻¹) is dissolved in 400 g water. Calculate the freezing point using K𝒇=1.86 K kg mol⁻¹.",
      "steps": [
        "n=20.0/62.0=0.32258 mol.",
        "m=0.32258/0.400=0.80645 mol kg⁻¹.",
        "ΔT_f=1.86×0.80645=1.500 K.",
        "T_f=−1.500°C."
      ],
      "answer": "Freezing point=−1.50°C.",
      "sourcePages": "63–65",
      "transformation": "Solute and masses changed while preserving the antifreeze calculation."
    },
    {
      "kind": "example",
      "number": "13.3",
      "title": "Molar mass from freezing-point depression",
      "question": "1.50 g of a nonvolatile solute dissolved in 60.0 g benzene lowers its freezing point by 0.640 K. K𝒇(benzene)=5.12 K kg mol⁻¹. Find the molar mass.",
      "steps": [
        "m=0.640/5.12=0.125 mol kg⁻¹.",
        "Moles solute=0.125×0.0600=0.00750 mol.",
        "Molar mass=1.50/0.00750=200 g mol⁻¹."
      ],
      "answer": "M=200 g mol⁻¹.",
      "sourcePages": "63–65",
      "transformation": "Masses and depression changed from the source molar-mass problem."
    },
    {
      "kind": "example",
      "number": "13.4",
      "title": "Mass of antifreeze for a target temperature",
      "question": "What mass of glycerol (M=92.0 g mol⁻¹) should be added to 2.00 kg water to lower the freezing point to −8.00°C? Assume ideal behaviour.",
      "steps": [
        "Required molality m=8.00/1.86=4.301 mol kg⁻¹.",
        "Moles glycerol=4.301×2.00=8.602 mol.",
        "Mass=8.602×92.0=791.4 g."
      ],
      "answer": "Approximately 791 g glycerol.",
      "sourcePages": "59–65",
      "transformation": "Added a reference-depth application using the same cryoscopic framework."
    },
    {
      "kind": "reference",
      "title": "Freezing mixtures, eutectics and road salt",
      "paragraphs": [
        "Salt lowers the liquid-water chemical potential, so ice can melt below 0°C until the brine reaches equilibrium. The simple dilute law applies only at low concentration; concentrated salt–water systems follow a curved liquidus and ultimately reach a eutectic.",
        "Different salts produce different practical melting ranges because solubility, ion count and hydration all matter."
      ],
      "sourceLabel": "Supplemental phase-diagram depth."
    },
    {
      "kind": "reference",
      "title": "Supercooling and experimental correction",
      "paragraphs": [
        "A solution may cool below its equilibrium freezing point without crystallising. Once nucleation begins, latent heat raises the temperature toward the true freezing plateau.",
        "Accurate cryoscopy therefore uses a cooling curve and identifies the corrected equilibrium temperature rather than taking the lowest transient temperature."
      ],
      "sourceLabel": "Supplemental experimental depth."
    },
    {
      "kind": "reference",
      "title": "Cryoscopic phase diagrams",
      "paragraphs": [
        "The dilute law describes the initial slope of the solvent-rich liquidus line. At higher concentration, the freezing temperature follows the full solid–liquid equilibrium relation and may approach a eutectic.",
        "At the eutectic composition, two solid phases and one liquid coexist at the lowest temperature possible for the system at that pressure.",
        "A cooling curve can show thermal arrests corresponding to primary crystallisation and eutectic solidification."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Antifreeze performance beyond K𝒇m",
      "paragraphs": [
        "Automotive coolants are concentrated mixtures, so ideal dilute equations give only rough estimates. Real formulations also raise boiling point, inhibit corrosion, lubricate pumps and alter heat capacity and viscosity.",
        "Ethylene glycol is effective but toxic; propylene glycol is safer for some applications. The best composition is not simply the one with maximum molality because viscosity and heat-transfer performance matter.",
        "This illustrates the distinction between a colligative principle and engineering formulation."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Ice formation and solvent purity",
      "paragraphs": [
        "During freezing, pure solvent crystals reject most solute, so the remaining liquid becomes progressively more concentrated and its freezing point falls.",
        "The first ice that forms can be relatively pure, which is the basis of freeze concentration and zone refining concepts.",
        "If solute becomes trapped mechanically or forms a solid solution, purity is reduced and equilibrium assumptions must be modified."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Do not subtract from 273 when the answer is required in Celsius",
      "paragraphs": [
        "ΔT_f has the same numerical magnitude in kelvin and Celsius. For water, T_f(°C)=0−ΔT_f. Converting the depression itself between scales is unnecessary."
      ],
      "sourcePages": "63–65"
    },
    ...part13Reference,
    ...part13ReferenceExtra
  ]
};
