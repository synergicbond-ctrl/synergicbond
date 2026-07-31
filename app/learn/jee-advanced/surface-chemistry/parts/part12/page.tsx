"use client";

import { Part12Content } from "../../surface-chemistry-content";
import { PartShell } from "../../surface-chemistry-shared";
import { SURFACE_CHEMISTRY_PARTS } from "../../part-metadata";

export default function SurfaceChemistryPart12() {
  const item = SURFACE_CHEMISTRY_PARTS[11];
  return (
    <PartShell part={item.part} title={item.title} description={item.description}>
      <Part12Content />
    </PartShell>
  );
}
