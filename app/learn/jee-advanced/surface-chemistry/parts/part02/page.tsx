"use client";

import { Part02Content } from "../../surface-chemistry-content";
import { PartShell } from "../../surface-chemistry-shared";
import { SURFACE_CHEMISTRY_PARTS } from "../../part-metadata";

export default function SurfaceChemistryPart02() {
  const item = SURFACE_CHEMISTRY_PARTS[1];
  return (
    <PartShell part={item.part} title={item.title} description={item.description}>
      <Part02Content />
    </PartShell>
  );
}
