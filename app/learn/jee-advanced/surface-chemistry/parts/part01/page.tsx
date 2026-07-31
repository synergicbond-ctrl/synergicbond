"use client";

import { Part01Content } from "../../surface-chemistry-content";
import { PartShell } from "../../surface-chemistry-shared";
import { SURFACE_CHEMISTRY_PARTS } from "../../part-metadata";

export default function SurfaceChemistryPart01() {
  const item = SURFACE_CHEMISTRY_PARTS[0];
  return (
    <PartShell part={item.part} title={item.title} description={item.description}>
      <Part01Content />
    </PartShell>
  );
}
