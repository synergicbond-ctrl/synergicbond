import { FamilyAssignments } from "@/components/assignments/FamilyAssignments";
import { boronFamilyTabs } from "../_chapter";

export const metadata = { title: "Assignments | SYNERGIC BOND" };
export const dynamic = "force-dynamic";

export default function Page() {
  return <FamilyAssignments chapter="boron-family" tabs={boronFamilyTabs().map((t) => ({ ...t, active: t.href.endsWith("/assignments") }))} />;
}
