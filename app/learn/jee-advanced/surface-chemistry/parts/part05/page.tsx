"use client";

import { Part05Content } from "../../surface-chemistry-content";
import { PartShell } from "../../surface-chemistry-shared";
import { SURFACE_CHEMISTRY_PARTS } from "../../part-metadata";

export default function SurfaceChemistryPart05() {
 const item = SURFACE_CHEMISTRY_PARTS[4];
 return <PartShell part={item.part} title={item.title} description={item.description}><Part05Content /></PartShell>;
}
