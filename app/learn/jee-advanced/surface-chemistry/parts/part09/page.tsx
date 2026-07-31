"use client";

import { Part09Content } from "../../surface-chemistry-content";
import { PartShell } from "../../surface-chemistry-shared";
import { SURFACE_CHEMISTRY_PARTS } from "../../part-metadata";

export default function SurfaceChemistryPart09() {
  const item = SURFACE_CHEMISTRY_PARTS[8];
  return (
    <PartShell part={item.part} title={item.title} description={item.description}>
      <Part09Content />
    </PartShell>
  );
}
