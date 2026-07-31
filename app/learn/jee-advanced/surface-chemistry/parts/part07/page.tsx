"use client";

import { Part07Content } from "../../surface-chemistry-content";
import { PartShell } from "../../surface-chemistry-shared";
import { SURFACE_CHEMISTRY_PARTS } from "../../part-metadata";

export default function SurfaceChemistryPart07() {
 const item = SURFACE_CHEMISTRY_PARTS[6];
 return <PartShell part={item.part} title={item.title} description={item.description}><Part07Content /></PartShell>;
}
