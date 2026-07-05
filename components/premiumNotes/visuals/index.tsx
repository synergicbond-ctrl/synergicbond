import type { ComponentType } from "react";
import { DipoleVectors, VseprGallery, HybridShapes, MoDiagram } from "./chemicalBonding";

// Visual registry — VisualBlock.visual (string key) → SVG server component.
// Add new chapters' visuals here; unknown keys render an honest missing state
// (never a broken image).

export const VISUAL_REGISTRY: Record<string, ComponentType> = {
  "dipole-vectors": DipoleVectors,
  "vsepr-gallery": VseprGallery,
  "hybrid-shapes": HybridShapes,
  "mo-diagram": MoDiagram,
};
