import type { NoteBlock } from "../types";

export const part12Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Elevation of boiling point as a colligative effect",
    "paragraphs": [
      "A nonvolatile solute lowers the solvent chemical potential and vapour pressure. At the normal boiling point of the pure solvent, the solution vapour pressure is still below atmospheric pressure. Additional heating is required until the solution vapour pressure reaches the external pressure.",
      "The elevation is ΔT_b=T_b(solution)−T_b°(solvent). For dilute ideal solutions it is directly proportional to solute molality. The proportionality constant K_b depends only on the solvent."
    ],
    "equations": [
      "ΔT_b=K_bm"
    ],
    "sourcePages": "Pages 53–54",
    "visual": "boiling-elevation"
  },
  {
    "kind": "derivation",
    "title": "Thermodynamic derivation of ΔT_b=K_bm",
    "introduction": "The source derives the ebullioscopic law by combining Raoult’s law with Clausius–Clapeyron for a small temperature elevation.",
    "steps": [
      "At the boiling point of the solution, its solvent vapour pressure p equals the fixed external pressure, which is also the pure-solvent vapour pressure at T_b°.",
      "Raoult’s law gives p=x₁p₁°(T_b), so p/p₁°(T_b)=x₁=1−x₂.",
      "For dilute solution, ln(1−x₂)≈−x₂.",
      "Clausius–Clapeyron between T_b° and T_b gives ln[p/p₁°(T_b)]≈−ΔH_vapΔT_b/(RT_b°²).",
      "Equating magnitudes yields ΔT_b=(RT_b°²/ΔH_vap)x₂.",
      "For dilute solution, x₂≈n₂/n₁=mM₁/1000."
    ],
    "result": "ΔT_b=K_bm, where K_b=RT_b°²M₁/(1000ΔH_vap)",
    "assumptions": [
      "Dilute ideal solution.",
      "Nonvolatile solute.",
      "Small ΔT_b, so T_b≈T_b° in slowly varying factors.",
      "Constant ΔH_vap over the interval."
    ],
    "sourcePages": "Pages 54–56",
    "visual": "boiling-elevation"
  },
  {
    "kind": "theory",
    "title": "Units and physical meaning of the ebullioscopic constant",
    "paragraphs": [
      "K_b has units K kg mol⁻¹ when molality is in mol kg⁻¹. Its magnitude increases with the square of the solvent boiling temperature and solvent molar mass, and decreases with molar enthalpy of vaporisation.",
      "The source calculates K_b for water using T_b°, molar mass and latent heat. Care is needed because latent heat may be quoted per gram or per mole. If ΔH_vap is in cal mol⁻¹, use R in cal mol⁻¹ K⁻¹; if in joules, use R=8.314 J mol⁻¹ K⁻¹.",
      "A numerical value of K_b is a solvent property only within the dilute-solution range."
    ],
    "sourcePages": "Pages 54–57"
  },
  {
    "kind": "theory",
    "title": "Boiling-point numericals retained from the source",
    "paragraphs": [
      "The source includes a direct boiling-point calculation for a urea solution, a reverse calculation of glucose mass needed for a target boiling point, and molar-mass determination from the observed elevation. Each begins by converting solute mass to moles and solvent mass to kilograms.",
      "It also presents a continued-boiling problem. As solvent evaporates while nonvolatile solute remains, molality rises and the boiling point increases. Comparing the initial and final elevations gives the ratio of initial and final solvent masses.",
      "Solved Questions 12.2–12.5 reproduce all of these structures with altered solutes and data."
    ],
    "equations": [
      "m=(w₂/M₂)/(w₁/1000)",
      "M₂=K_bw₂×1000/(ΔT_bw₁)",
      "For fixed solute moles: ΔT_b∝1/(mass of solvent remaining)"
    ],
    "sourcePages": "Pages 57–59"
  },
  {
    "kind": "theory",
    "title": "Evaporation fraction from a changed boiling point",
    "paragraphs": [
      "Suppose a solution initially boils at T₁ and, after some solvent evaporates, at T₂. With a nonvolatile solute of fixed amount, ΔT_b,1=K_bn₂/(kg solvent₁) and ΔT_b,2=K_bn₂/(kg solvent₂). Therefore solvent₂/solvent₁=ΔT_b,1/ΔT_b,2.",
      "The evaporated fraction is 1−ΔT_b,1/ΔT_b,2. Temperatures must first be converted to elevations above the pure-solvent boiling point, not used directly as absolute temperatures.",
      "This is the logical step highlighted by the source problem near the end of the section."
    ],
    "equations": [
      "fraction evaporated=1−(ΔT_b,initial/ΔT_b,final)"
    ],
    "sourcePages": "Pages 58–59"
  }
];
