import { notFound } from "next/navigation";
import { getBoard, getClass } from "@/lib/boardDashboard";
import { requireProgramEntitlement } from "@/lib/auth/guards";

// Entitlement gate for every board class surface (dashboard hub, full-syllabus,
// practice, custom-test, analytics, projects, practical, mentorship). Auth alone
// (the /dashboard proxy prefix) does NOT grant paid access — the purchased
// "<board>:<class>" entitlement (or Pro / owner-admin) is required here, and one
// program's purchase never unlocks another (per-key isolation in
// hasProgramAccess). Runs before any child renders.
export const dynamic = "force-dynamic";

export default async function BoardClassLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ board: string; class: string }>;
}) {
  const { board, class: cls } = await params;
  const b = getBoard(board);
  const c = getClass(cls);
  if (!b || !c) notFound();

  await requireProgramEntitlement(`${b.slug}:${c.slug}`, `/dashboard/${b.slug}/${c.slug}`);

  return <>{children}</>;
}
