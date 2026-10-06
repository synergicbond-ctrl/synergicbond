import { FamilyAssignments } from "@/components/assignments/FamilyAssignments";
import { carbonFamilyTabs } from "../_chapter";

export const metadata = { title: "Assignments | SYNERGIC BOND" };
export const dynamic = "force-dynamic";

export default function Page() {
  return <FamilyAssignments chapter="carbon-family" tabs={carbonFamilyTabs().map((t) => ({ ...t, active: t.href.endsWith("/assignments") }))} />;
}
