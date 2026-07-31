"use client";

import { Part08Content } from "../../surface-chemistry-content";
import { PartShell } from "../../surface-chemistry-shared";
import { SURFACE_CHEMISTRY_PARTS } from "../../part-metadata";

export default function SurfaceChemistryPart08() {
  const item = SURFACE_CHEMISTRY_PARTS[7];
  return (
    <PartShell part={item.part} title={item.title} description={item.description}>
      <Part08Content />
    </PartShell>
  );
}
