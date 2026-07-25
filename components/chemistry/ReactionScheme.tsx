import type { ReactNode } from "react";
import type { MoleculeSpec } from "@/lib/chemistry/molecule-types";
import { Molecule2D } from "./Molecule2D";

export interface ReactionSchemeProps {
  readonly reactants: readonly MoleculeSpec[];
  readonly products: readonly MoleculeSpec[];
  readonly reagentAbove?: ReactNode;
  readonly conditionBelow?: ReactNode;
  readonly arrow?: "forward" | "equilibrium";
  readonly className?: string;
}

function MoleculeSequence({ molecules }: { molecules: readonly MoleculeSpec[] }) {
  return (
    <div className="flex min-w-0 flex-wrap items-center justify-center gap-3">
      {molecules.map((molecule, index) => (
        <div key={molecule.id} className="flex min-w-0 items-center gap-3">
          {index > 0 && (
            <span aria-hidden="true" className="shrink-0 text-xl font-light text-white/65">
              +
            </span>
          )}
          <div className="w-full min-w-[150px] max-w-[220px]">
            <Molecule2D molecule={molecule} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ReactionArrow({
  reagentAbove,
  conditionBelow,
  arrow,
}: Pick<ReactionSchemeProps, "reagentAbove" | "conditionBelow" | "arrow">) {
  return (
    <div className="flex min-w-[150px] max-w-[240px] flex-1 flex-col items-center justify-center gap-1">
      <div className="min-h-5 text-center text-xs leading-snug text-white/75">
        {reagentAbove}
      </div>

      {arrow === "equilibrium" ? (
        <div aria-hidden="true" className="text-center text-3xl leading-none text-cyan-200">
          ⇌
        </div>
      ) : (
        <div aria-hidden="true" className="relative h-[18px] w-full">
          <div className="absolute left-0 right-3 top-1/2 -translate-y-1/2 border-t border-white/80" />
          <div className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[5px] border-y-transparent border-l-[9px] border-l-white/80" />
        </div>
      )}

      <div className="min-h-5 text-center text-xs leading-snug text-white/55">
        {conditionBelow}
      </div>
    </div>
  );
}

export function ReactionScheme({
  reactants,
  products,
  reagentAbove,
  conditionBelow,
  arrow = "forward",
  className = "",
}: ReactionSchemeProps) {
  if (reactants.length === 0 || products.length === 0) {
    throw new Error("ReactionScheme requires at least one reactant and one product.");
  }

  return (
    <div
      className={[
        "flex w-full flex-col items-center justify-center gap-4 py-4 lg:flex-row lg:flex-wrap",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="group"
      aria-label={arrow === "equilibrium" ? "Chemical equilibrium scheme" : "Chemical reaction scheme"}
    >
      <MoleculeSequence molecules={reactants} />
      <ReactionArrow
        reagentAbove={reagentAbove}
        conditionBelow={conditionBelow}
        arrow={arrow}
      />
      <MoleculeSequence molecules={products} />
    </div>
  );
}
