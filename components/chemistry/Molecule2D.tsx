"use client";

import dynamic from "next/dynamic";
import type { Molecule2DClientProps } from "./Molecule2D.client";

const DynamicMolecule2D = dynamic(
  () =>
    import("./Molecule2D.client").then((module) => module.Molecule2DClient),
  {
    ssr: false,
    loading: () => (
      <div aria-hidden="true" style={{ width: "100%", minHeight: 170 }} />
    ),
  },
);

export type Molecule2DProps = Molecule2DClientProps;

export function Molecule2D(props: Molecule2DProps) {
  return <DynamicMolecule2D {...props} />;
}
