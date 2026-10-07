import { FamilyAssignments } from "@/components/assignments/FamilyAssignments";
import { oxygenFamilyTabs } from "../_chapter";

export const metadata = { title: "Assignments | SYNERGIC BOND" };
export const dynamic = "force-dynamic";

export default function Page() {
  return <FamilyAssignments chapter="oxygen-family" tabs={oxygenFamilyTabs().map((t) => ({ ...t, active: t.href.endsWith("/assignments") }))} />;
}
