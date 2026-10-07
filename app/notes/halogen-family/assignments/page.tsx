import { FamilyAssignments } from "@/components/assignments/FamilyAssignments";
import { halogenFamilyTabs } from "../_chapter";

export const metadata = { title: "Assignments | SYNERGIC BOND" };
export const dynamic = "force-dynamic";

export default function Page() {
  return <FamilyAssignments chapter="halogen-family" tabs={halogenFamilyTabs().map((t) => ({ ...t, active: t.href.endsWith("/assignments") }))} />;
}
