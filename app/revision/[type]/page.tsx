import RevisionSessionWorkspace from "@/components/revision/RevisionSessionWorkspace";

interface PageProps {
  params: Promise<{ type: string }>;
  searchParams?: Promise<{ topic?: string }>;
}

export default async function RevisionSessionPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearch = await searchParams;
  return <RevisionSessionWorkspace type={resolvedParams.type} topic={resolvedSearch?.topic} />;
}
