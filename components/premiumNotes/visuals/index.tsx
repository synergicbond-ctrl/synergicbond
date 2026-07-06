import type { ComponentType } from "react";
import { DipoleVectors, VseprGallery, HybridShapes, MoDiagram } from "./chemicalBonding";
import { MoleConversionMap, LimitingReagentBars, EudiometryTube, ConcentrationMap, OleumBar, EmpiricalFormulaFlow, TitrationSetup, YieldFunnel, ConcentrationTermsMap, NormalityNFactor, PoacBridge, SequentialReactions, TemperatureScales, SignificantFigures, StpConventions, CrystalPacking } from "./moleConcept";

// Visual registry — VisualBlock.visual (string key) → SVG server component.
// Add new chapters' visuals here; unknown keys render an honest missing state
// (never a broken image).

export const VISUAL_REGISTRY: Record<string, ComponentType> = {
  "dipole-vectors": DipoleVectors,
  "vsepr-gallery": VseprGallery,
  "hybrid-shapes": HybridShapes,
  "mo-diagram": MoDiagram,
  "mole-conversion-map": MoleConversionMap,
  "limiting-reagent-bars": LimitingReagentBars,
  "eudiometry-tube": EudiometryTube,
  "concentration-map": ConcentrationMap,
  "oleum-bar": OleumBar,
  "empirical-formula-flow": EmpiricalFormulaFlow,
  "titration-setup": TitrationSetup,
  "yield-funnel": YieldFunnel,
  "concentration-terms-map": ConcentrationTermsMap,
  "normality-nfactor": NormalityNFactor,
  "poac-bridge": PoacBridge,
  "sequential-reactions": SequentialReactions,
  "temperature-scales": TemperatureScales,
  "significant-figures": SignificantFigures,
  "stp-conventions": StpConventions,
  "crystal-packing": CrystalPacking,
};
