"use client";

import { Part04Content } from "../../surface-chemistry-content";
import { PartShell } from "../../surface-chemistry-shared";
import { SURFACE_CHEMISTRY_PARTS } from "../../part-metadata";

export default function SurfaceChemistryPart04() {
 const item = SURFACE_CHEMISTRY_PARTS[3];
 return <PartShell part={item.part} title={item.title} description={item.description}><Part04Content /></PartShell>;
}
