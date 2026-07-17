import { notFound } from "next/navigation";
import RevisionWorkspace from "@/components/revision/RevisionWorkspace";
import { requireProgramEntitlement } from "@/lib/auth/guards";
import { getProgram } from "@/lib/programs";

export const dynamic = "force-dynamic";

export default async function ProgramRevisionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  await requireProgramEntitlement(slug, `/programs/${slug}/revision`);
  return <RevisionWorkspace baseHref={`/programs/${slug}/revision`} scopeLabel={program.name} />;
}
