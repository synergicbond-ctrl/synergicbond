import { FamilyAssignments } from "@/components/assignments/FamilyAssignments";
import { nitrogenFamilyTabs } from "../_chapter";

export const metadata = { title: "Assignments | SYNERGIC BOND" };
export const dynamic = "force-dynamic";

export default function Page() {
  return <FamilyAssignments chapter="nitrogen-family" tabs={nitrogenFamilyTabs().map((t) => ({ ...t, active: t.href.endsWith("/assignments") }))} />;
}
