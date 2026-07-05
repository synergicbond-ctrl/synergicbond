import { z } from "zod";

export const MECHANISM_GEOMETRY_SCHEMA_VERSION = 1 as const;

export const Point2DSchema = z.object({
  x: z.number(),
  y: z.number(),
});

export const AtomSchema = z.object({
  id: z.string().min(1),
  element: z.string().min(1),
  label: z.string().optional(),
  position: Point2DSchema,
  charge: z.number().int().min(-3).max(3).default(0),
  hydrogens: z.number().int().min(0).max(4).optional(),
});

export const BondSchema = z.object({
  id: z.string().min(1),
  fromAtomId: z.string().min(1),
  toAtomId: z.string().min(1),
  order: z.enum(["single", "double", "triple", "partial"]),
  stereo: z.enum(["none", "wedge", "dash", "wavy"]).default("none"),
  state: z.enum(["normal", "forming", "breaking", "partial"]).default("normal"),
});

export const LonePairSchema = z.object({
  id: z.string().min(1),
  atomId: z.string().min(1),
  electronCount: z.literal(2),
  positionHint: z.enum(["left", "right", "top", "bottom", "backside", "frontside"]).optional(),
});

export const ElectronSourceSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("lone-pair"), lonePairId: z.string().min(1) }),
  z.object({ kind: z.literal("bond"), bondId: z.string().min(1) }),
  z.object({ kind: z.literal("atom"), atomId: z.string().min(1) }),
]);

export const ElectronTargetSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("atom"), atomId: z.string().min(1) }),
  z.object({ kind: z.literal("bond"), bondId: z.string().min(1) }),
  z.object({ kind: z.literal("new-bond"), fromAtomId: z.string().min(1), toAtomId: z.string().min(1) }),
  z.object({ kind: z.literal("leaving-group"), atomId: z.string().min(1) }),
]);

export const CurvedArrowSchema = z.object({
  id: z.string().min(1),
  electronCount: z.union([z.literal(1), z.literal(2)]),
  from: ElectronSourceSchema,
  to: ElectronTargetSchema,
  description: z.string().min(1),
  evidence: z.string().min(1),
  verified: z.literal(true),
});

export const StereoMarkerSchema = z.object({
  id: z.string().min(1),
  atomId: z.string().min(1),
  type: z.enum(["planar", "inversion", "racemization", "anti-periplanar", "wedge", "dash"]),
  description: z.string().min(1),
});

export const OrbitalOverlapSchema = z.object({
  id: z.string().min(1),
  kind: z.enum(["backside-sigma-star", "empty-p-orbital", "anti-periplanar-sigma", "p-orbital-overlap"]),
  participantAtomIds: z.array(z.string().min(1)).min(1),
  description: z.string().min(1),
  verified: z.literal(true),
});

export const MoleculeFrameSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  role: z.enum(["reactant", "intermediate", "transition-state", "product"]),
  atoms: z.array(AtomSchema).min(1),
  bonds: z.array(BondSchema),
  lonePairs: z.array(LonePairSchema).default([]),
  stereochemistry: z.array(StereoMarkerSchema).default([]),
  orbitalOverlaps: z.array(OrbitalOverlapSchema).default([]),
});

export const TransitionStateSchema = z.object({
  id: z.string().min(1),
  frameId: z.string().min(1),
  formingBondIds: z.array(z.string().min(1)),
  breakingBondIds: z.array(z.string().min(1)),
  geometryNote: z.string().min(1),
  verified: z.literal(true),
});

export const MechanismGeometryStepSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  frames: z.array(MoleculeFrameSchema).min(1),
  curvedArrows: z.array(CurvedArrowSchema).default([]),
  transitionState: TransitionStateSchema.optional(),
  electronFlowSummary: z.string().min(1),
  verificationNotes: z.array(z.string().min(1)).min(1),
});

export const MechanismGeometrySchema = z.object({
  schemaVersion: z.literal(MECHANISM_GEOMETRY_SCHEMA_VERSION),
  id: z.string().min(1),
  name: z.string().min(1),
  reactionClass: z.enum(["SN1", "SN2", "E2"]),
  scope: z.string().min(1),
  coordinateSystem: z.literal("schematic-2d"),
  sourceNotes: z.array(z.string().min(1)).min(1),
  steps: z.array(MechanismGeometryStepSchema).min(1),
  blockedVisualClaims: z.array(z.string().min(1)).default([]),
});

export type Point2D = z.infer<typeof Point2DSchema>;
export type AtomGeometry = z.infer<typeof AtomSchema>;
export type BondGeometry = z.infer<typeof BondSchema>;
export type LonePairGeometry = z.infer<typeof LonePairSchema>;
export type CurvedArrowGeometry = z.infer<typeof CurvedArrowSchema>;
export type MoleculeFrameGeometry = z.infer<typeof MoleculeFrameSchema>;
export type MechanismGeometryStep = z.infer<typeof MechanismGeometryStepSchema>;
export type MechanismGeometry = z.infer<typeof MechanismGeometrySchema>;
