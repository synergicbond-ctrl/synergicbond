"use client";

import { Part03Content } from "../../surface-chemistry-content";
import { PartShell } from "../../surface-chemistry-shared";
import { SURFACE_CHEMISTRY_PARTS } from "../../part-metadata";

export default function SurfaceChemistryPart03() {
  const item = SURFACE_CHEMISTRY_PARTS[2];
  return (
    <PartShell part={item.part} title={item.title} description={item.description}>
      <Part03Content />
    </PartShell>
  );
}
