import Link from "next/link";
import { generateRevisionSession, type RevisionType } from "@/lib/revisionEngine";

interface PageProps {
  params: Promise<{ type: string }>;
  searchParams?: Promise<{ topic?: string }>;
}

export default async function RevisionSessionPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearch = await searchParams;
  
  // Fetch specific drill info depending on the session type
  const sessionType = resolvedParams.type as RevisionType;
  const sessionPayload = resolvedSearch?.topic || (sessionType === "weakTopic" ? "Targeted Concept" : undefined);
  
  const session = generateRevisionSession(sessionType, sessionPayload);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6 md:p-12 max-w-4xl mx-auto space-y-10">
      
      {/* Back to Engine Link */}
      <div>
        <Link href="/revision" className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1">
          ← Back to Revision Engine
        </Link>
      </div>

      {/* Session Header */}
      <div className="bg-[var(--surface)] p-8 rounded-lg shadow-sm border border-[var(--border)] text-center space-y-4">
        <h1 className="text-3xl font-black tracking-tight text-[var(--foreground)]">{session.title}</h1>
        <p className="text-[var(--text-muted)] max-w-xl mx-auto">{session.description}</p>
        
        <div className="inline-block bg-indigo-50 text-indigo-700 font-extrabold text-sm px-4 py-2 rounded-full">
          Estimated Time: {session.estimatedTimeMinutes} minutes
        </div>
      </div>

      {/* Target Items to Review */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--foreground)]">High-Yield Focus Items</h2>
        <div className="grid grid-cols-1 gap-4">
          {session.targetItems.length > 0 ? (
            session.targetItems.map((item, idx) => (
              <div key={idx} className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)] shadow-sm flex items-center justify-between">
                <span className="font-bold text-[var(--foreground)]">{item}</span>
                <span className="text-xs font-medium px-2.5 py-1 bg-[var(--surface-2)] text-[var(--text-muted)] rounded-full uppercase tracking-wide">
                  Reviewing
                </span>
              </div>
            ))
          ) : (
            <div className="p-8 bg-[var(--surface)] rounded-lg border border-dashed border-[var(--border)] text-center text-[var(--text-muted)]">
              No specific items loaded for this session.
            </div>
          )}
        </div>
      </section>

      {/* Action Controls */}
      <div className="flex gap-4 pt-4">
        <Link 
          href="/exam" 
          className="flex-1 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-center rounded-xl shadow transition"
        >
          Test Knowledge with Practice Questions
        </Link>
        <Link 
          href="/dashboard" 
          className="py-4 px-8 bg-[var(--surface)] border border-[var(--border)] hover:bg-[var(--surface-2)] text-[var(--foreground)] font-bold text-center rounded-lg transition"
        >
          Go to Dashboard
        </Link>
      </div>

    </div>
  );
}
