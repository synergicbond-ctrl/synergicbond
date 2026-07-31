"use client";

import { Part06Content } from "../../surface-chemistry-content";
import { PartShell } from "../../surface-chemistry-shared";
import { SURFACE_CHEMISTRY_PARTS } from "../../part-metadata";

export default function SurfaceChemistryPart06() {
  const item = SURFACE_CHEMISTRY_PARTS[5];
  return (
    <PartShell part={item.part} title={item.title} description={item.description}>
      <Part06Content />
    </PartShell>
  );
}
