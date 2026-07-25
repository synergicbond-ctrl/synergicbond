export type MoleculeInput =
  | Readonly<{
      kind: "smiles";
      value: string;
    }>
  | Readonly<{
      kind: "molblock";
      value: string;
    }>;

export type MoleculeTheme = "dark" | "paper";

/**
 * Immutable, data-only molecular depiction request.
 *
 * Ordinary lesson components must pass chemistry through this model instead of
 * storing bond coordinates, label coordinates or wedge polygons in JSX.
 */
export interface MoleculeSpec {
  readonly id: string;
  readonly structure: MoleculeInput;
  readonly alt: string;
  readonly label?: string;
  readonly explicitMethyl?: boolean;
  readonly showStereoAnnotation?: boolean;
  readonly rotate?: number;
  readonly theme?: MoleculeTheme;
}

export type MoleculeRegistry = Readonly<Record<string, MoleculeSpec>>;
