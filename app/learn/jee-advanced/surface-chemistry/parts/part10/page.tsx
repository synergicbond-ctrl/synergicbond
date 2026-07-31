"use client";

import { Part10Content } from "../../surface-chemistry-content";
import { PartShell } from "../../surface-chemistry-shared";
import { SURFACE_CHEMISTRY_PARTS } from "../../part-metadata";

export default function SurfaceChemistryPart10() {
  const item = SURFACE_CHEMISTRY_PARTS[9];
  return (
    <PartShell part={item.part} title={item.title} description={item.description}>
      <Part10Content />
    </PartShell>
  );
}
