import { mechanismGeometrySamples } from "./data";
import { validateMechanismGeometry } from "./renderer";

export { mechanismGeometrySamples } from "./data";
export {
  decideMechanism,
  getMechanismExamAudit,
  getMechanismExamComparison,
  mechanismExamComparisons,
} from "./exam";
export {
  getMechanismPracticeAudit,
  getMechanismPracticeQuestions,
  mechanismPracticeQuestions,
  MechanismPracticeQuestionSchema,
  MechanismQuestionTypeSchema,
  MechanismPracticeSkillSchema,
} from "./practice";
export {
  MECHANISM_GEOMETRY_SCHEMA_VERSION,
  MechanismGeometrySchema,
  MechanismGeometryStepSchema,
  MoleculeFrameSchema,
  AtomSchema,
  BondSchema,
  LonePairSchema,
  CurvedArrowSchema,
  TransitionStateSchema,
  StereoMarkerSchema,
  OrbitalOverlapSchema,
} from "./schema";
export {
  getRendererPrimitive,
  validateMechanismGeometry,
  type GeometryValidationResult,
  type RendererPrimitive,
} from "./renderer";
export type {
  AtomGeometry,
  BondGeometry,
  CurvedArrowGeometry,
  LonePairGeometry,
  MechanismGeometry,
  MechanismGeometryStep,
  MoleculeFrameGeometry,
  Point2D,
} from "./schema";
export type { MechanismPracticeQuestion, MechanismPracticeSkill } from "./practice";
export type {
  MechanismDecisionInput,
  MechanismDecisionResult,
  MechanismExamComparison,
  MechanismExamName,
  MechanismExamTrap,
} from "./exam";

export function getMechanismGeometryByClass(reactionClass: "SN1" | "SN2" | "E2") {
  return mechanismGeometrySamples.find((sample) => sample.reactionClass === reactionClass) ?? null;
}

export function getMechanismGeometryAudit() {
  return mechanismGeometrySamples.map((sample) => ({
    id: sample.id,
    name: sample.name,
    reactionClass: sample.reactionClass,
    stepCount: sample.steps.length,
    validation: validateMechanismGeometry(sample),
    blockedVisualClaims: sample.blockedVisualClaims,
  }));
}
