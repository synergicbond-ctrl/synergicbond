import { notFound } from "next/navigation";
import RevisionWorkspace from "@/components/revision/RevisionWorkspace";
import { getBoard, getClass } from "@/lib/boardDashboard";

export default async function BoardRevisionPage({
  params,
}: {
  params: Promise<{ board: string; class: string }>;
}) {
  const { board, class: cls } = await params;
  const b = getBoard(board);
  const c = getClass(cls);
  if (!b || !c) notFound();

  // The parent board-class layout applies the exact entitlement guard before
  // this scoped workspace renders.
  const baseHref = `/dashboard/${b.slug}/${c.slug}/revision`;
  return <RevisionWorkspace baseHref={baseHref} scopeLabel={`${b.name} ${c.name}`} />;
}
