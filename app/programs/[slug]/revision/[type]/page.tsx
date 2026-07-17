import { notFound } from "next/navigation";
import RevisionSessionWorkspace from "@/components/revision/RevisionSessionWorkspace";
import { requireProgramEntitlement } from "@/lib/auth/guards";
import { getProgram } from "@/lib/programs";

export const dynamic = "force-dynamic";

export default async function ProgramRevisionSessionPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string; type: string }>;
  searchParams: Promise<{ topic?: string }>;
}) {
  const [{ slug, type }, { topic }] = await Promise.all([params, searchParams]);
  const program = getProgram(slug);
  if (!program) notFound();

  const baseHref = `/programs/${slug}/revision`;
  await requireProgramEntitlement(slug, `${baseHref}/${type}`);
  return (
    <RevisionSessionWorkspace
      type={type}
      topic={topic}
      baseHref={baseHref}
      scopeLabel={program.name}
      practiceHref={`/programs/${slug}/practice`}
      dashboardHref={`/programs/${slug}`}
    />
  );
}
