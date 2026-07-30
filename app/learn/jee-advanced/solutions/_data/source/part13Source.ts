import type { NoteBlock } from "../types";

export const part13Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Why a solution freezes below the pure solvent",
    "paragraphs": [
      "Freezing is equilibrium between liquid solvent in the solution and pure solid solvent. A nonvolatile solute lowers the chemical potential of solvent in the liquid phase but does not enter the pure solid solvent lattice in the idealised treatment. Therefore the liquid and solid chemical potentials become equal only at a lower temperature.",
      "The source draws a pressure–temperature or chemical-potential-style diagram showing that the solution curve intersects the solid-solvent curve below the normal freezing point. The depression is ΔT_f=T_f°−T_f(solution), a positive quantity by convention.",
      "Unlike boiling, where higher temperature compensates for lowered vapour pressure, freezing requires cooling until the liquid solvent becomes sufficiently stable relative to the solid."
    ],
    "equations": [
      "ΔT_f=T_f°−T_f>0",
      "At freezing: μ₁(solid,pure)=μ₁(liquid,solution)"
    ],
    "sourcePages": "Pages 59–61",
    "visual": "freezing-depression"
  },
  {
    "kind": "theory",
    "title": "What solid separates from an ideal dilute solution",
    "paragraphs": [
      "The source explicitly states that, in the ordinary freezing-point-depression model, the first solid to separate is pure solvent. The solute remains in the liquid phase. As freezing proceeds, the remaining liquid becomes more concentrated and its freezing temperature falls further.",
      "This assumption is valid when the solute has negligible solubility in the solid solvent and no compound or solid solution forms. If the solute enters the crystal lattice, forms a hydrate, or participates in a eutectic, the simple cryoscopic treatment has a restricted range.",
      "At equilibrium the vapour pressure of solid solvent equals the partial vapour pressure of solvent above the solution, not the vapour pressure of a hypothetical solid solution."
    ],
    "sourcePages": "Pages 60–61"
  },
  {
    "kind": "derivation",
    "title": "Thermodynamic derivation of ΔT_f=K_fm",
    "introduction": "The source obtains the cryoscopic law by comparing the fusion equilibrium of pure solvent and solution.",
    "steps": [
      "At T_f of the solution, chemical potentials satisfy μ₁(solid)=μ₁*(liquid)+RTlnx₁.",
      "For pure solvent at T_f°, μ₁(solid)=μ₁*(liquid).",
      "The temperature dependence of the pure-phase chemical-potential difference is governed by ΔH_fus.",
      "For a small depression, integration gives −lnx₁≈ΔH_fusΔT_f/(RT_f°²).",
      "For dilute solution, −lnx₁=−ln(1−x₂)≈x₂≈mM₁/1000."
    ],
    "result": "ΔT_f=K_fm, where K_f=RT_f°²M₁/(1000ΔH_fus)",
    "assumptions": [
      "Dilute ideal solution.",
      "Pure solid solvent separates.",
      "Small ΔT_f.",
      "Constant ΔH_fus over the interval."
    ],
    "sourcePages": "Pages 61–64",
    "visual": "freezing-depression"
  },
  {
    "kind": "theory",
    "title": "Cryoscopic constant and its units",
    "paragraphs": [
      "K_f is the depression produced by a one-molal ideal non-electrolyte solution in the limit of infinite dilution. Its units are K kg mol⁻¹. It depends on the solvent molar mass, normal freezing temperature and molar enthalpy of fusion.",
      "The source calculates K_f from thermodynamic data and then uses K_f to determine freezing points and unknown molar masses. As with K_b, unit consistency is essential: ΔH_fus per mole must be paired with the corresponding value of R.",
      "Water has a comparatively large K_f because its molar enthalpy of fusion is modest relative to T_f²M."
    ],
    "equations": [
      "K_f=RT_f°²M₁/(1000ΔH_fus)"
    ],
    "sourcePages": "Pages 63–64"
  },
  {
    "kind": "theory",
    "title": "Source cryoscopy numericals and antifreeze logic",
    "paragraphs": [
      "The source includes a direct freezing-point calculation, a molar-mass determination and a target-temperature antifreeze problem. The common sequence is to calculate molality from solute moles and solvent kilograms, multiply by K_f, and subtract the depression from the pure-solvent freezing point.",
      "For an antifreeze formulation, rearrange m=ΔT_f/K_f, calculate required moles of solute for the chosen solvent mass, and convert to mass using molar mass. Ethylene glycol is effective because it is miscible with water, nonvolatile under ordinary conditions and has a relatively low molar mass, so a given mass supplies many particles.",
      "Solved Questions 13.2–13.4 reproduce each source pattern with changed values."
    ],
    "sourcePages": "Pages 64–65"
  }
];
