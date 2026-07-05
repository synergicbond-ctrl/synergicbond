import type {
  AtomGeometry,
  CurvedArrowGeometry,
  MechanismGeometry,
  MechanismGeometryStep,
  MoleculeFrameGeometry,
  Point2D,
} from "./schema";

export type GeometryValidationResult = {
  valid: boolean;
  errors: string[];
};

export type RendererPrimitive = {
  atoms: AtomGeometry[];
  bonds: MoleculeFrameGeometry["bonds"];
  lonePairs: MoleculeFrameGeometry["lonePairs"];
  stereochemistry: MoleculeFrameGeometry["stereochemistry"];
  orbitalOverlaps: MoleculeFrameGeometry["orbitalOverlaps"];
  arrowDescriptions: string[];
  viewBox: { minX: number; minY: number; width: number; height: number };
};

function atomIds(frame: MoleculeFrameGeometry): Set<string> {
  return new Set(frame.atoms.map((atom) => atom.id));
}

function bondIds(frame: MoleculeFrameGeometry): Set<string> {
  return new Set(frame.bonds.map((bond) => bond.id));
}

function lonePairIds(frame: MoleculeFrameGeometry): Set<string> {
  return new Set(frame.lonePairs.map((lonePair) => lonePair.id));
}

function validateArrow(frame: MoleculeFrameGeometry, arrow: CurvedArrowGeometry): string[] {
  const atoms = atomIds(frame);
  const bonds = bondIds(frame);
  const lonePairs = lonePairIds(frame);
  const errors: string[] = [];

  if (arrow.from.kind === "atom" && !atoms.has(arrow.from.atomId)) errors.push(`${arrow.id}: missing source atom ${arrow.from.atomId}`);
  if (arrow.from.kind === "bond" && !bonds.has(arrow.from.bondId)) errors.push(`${arrow.id}: missing source bond ${arrow.from.bondId}`);
  if (arrow.from.kind === "lone-pair" && !lonePairs.has(arrow.from.lonePairId)) errors.push(`${arrow.id}: missing source lone pair ${arrow.from.lonePairId}`);

  if (arrow.to.kind === "atom" && !atoms.has(arrow.to.atomId)) errors.push(`${arrow.id}: missing target atom ${arrow.to.atomId}`);
  if (arrow.to.kind === "bond" && !bonds.has(arrow.to.bondId)) errors.push(`${arrow.id}: missing target bond ${arrow.to.bondId}`);
  if (arrow.to.kind === "leaving-group" && !atoms.has(arrow.to.atomId)) errors.push(`${arrow.id}: missing leaving group atom ${arrow.to.atomId}`);
  if (arrow.to.kind === "new-bond") {
    if (!atoms.has(arrow.to.fromAtomId)) errors.push(`${arrow.id}: missing new-bond atom ${arrow.to.fromAtomId}`);
    if (!atoms.has(arrow.to.toAtomId)) errors.push(`${arrow.id}: missing new-bond atom ${arrow.to.toAtomId}`);
  }

  return errors;
}

export function validateMechanismGeometry(mechanism: MechanismGeometry): GeometryValidationResult {
  const errors: string[] = [];

  for (const step of mechanism.steps) {
    for (const frame of step.frames) {
      const atoms = atomIds(frame);
      for (const bond of frame.bonds) {
        if (!atoms.has(bond.fromAtomId)) errors.push(`${frame.id}:${bond.id}: missing from atom ${bond.fromAtomId}`);
        if (!atoms.has(bond.toAtomId)) errors.push(`${frame.id}:${bond.id}: missing to atom ${bond.toAtomId}`);
      }
      for (const lonePair of frame.lonePairs) {
        if (!atoms.has(lonePair.atomId)) errors.push(`${frame.id}:${lonePair.id}: missing lone-pair atom ${lonePair.atomId}`);
      }
      for (const stereo of frame.stereochemistry) {
        if (!atoms.has(stereo.atomId)) errors.push(`${frame.id}:${stereo.id}: missing stereo atom ${stereo.atomId}`);
      }
      for (const overlap of frame.orbitalOverlaps) {
        for (const atomId of overlap.participantAtomIds) {
          if (!atoms.has(atomId)) errors.push(`${frame.id}:${overlap.id}: missing orbital atom ${atomId}`);
        }
      }
    }

    const firstFrame = step.frames[0];
    for (const arrow of step.curvedArrows) errors.push(...validateArrow(firstFrame, arrow));

    if (step.transitionState) {
      const frame = step.frames.find((item) => item.id === step.transitionState?.frameId);
      if (!frame) {
        errors.push(`${step.id}:${step.transitionState.id}: missing transition frame ${step.transitionState.frameId}`);
      } else {
        const bonds = bondIds(frame);
        for (const bondId of [...step.transitionState.formingBondIds, ...step.transitionState.breakingBondIds]) {
          if (!bonds.has(bondId)) errors.push(`${step.id}:${step.transitionState.id}: missing transition bond ${bondId}`);
        }
      }
    }
  }

  return { valid: errors.length === 0, errors };
}

function getBounds(points: Point2D[]) {
  const xs = points.map((point) => point.x);
  const ys = points.map((point) => point.y);
  const minX = Math.min(...xs) - 32;
  const maxX = Math.max(...xs) + 32;
  const minY = Math.min(...ys) - 32;
  const maxY = Math.max(...ys) + 32;

  return { minX, minY, width: maxX - minX, height: maxY - minY };
}

export function getRendererPrimitive(step: MechanismGeometryStep, frameId = step.frames[0]?.id): RendererPrimitive | null {
  const frame = step.frames.find((item) => item.id === frameId);
  if (!frame) return null;

  return {
    atoms: frame.atoms,
    bonds: frame.bonds,
    lonePairs: frame.lonePairs,
    stereochemistry: frame.stereochemistry,
    orbitalOverlaps: frame.orbitalOverlaps,
    arrowDescriptions: step.curvedArrows.map((arrow) => arrow.description),
    viewBox: getBounds(frame.atoms.map((atom) => atom.position)),
  };
}
