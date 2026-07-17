import { notFound } from "next/navigation";
import RevisionSessionWorkspace from "@/components/revision/RevisionSessionWorkspace";
import { getBoard, getClass } from "@/lib/boardDashboard";

export default async function BoardRevisionSessionPage({
  params,
  searchParams,
}: {
  params: Promise<{ board: string; class: string; type: string }>;
  searchParams: Promise<{ topic?: string }>;
}) {
  const [{ board, class: cls, type }, { topic }] = await Promise.all([params, searchParams]);
  const b = getBoard(board);
  const c = getClass(cls);
  if (!b || !c) notFound();

  // The parent board-class layout applies the exact entitlement guard before
  // this scoped session renders.
  const baseHref = `/dashboard/${b.slug}/${c.slug}/revision`;
  return (
    <RevisionSessionWorkspace
      type={type}
      topic={topic}
      baseHref={baseHref}
      scopeLabel={`${b.name} ${c.name}`}
      practiceHref={`/dashboard/${b.slug}/${c.slug}/practice`}
      dashboardHref={`/dashboard/${b.slug}/${c.slug}`}
    />
  );
}
