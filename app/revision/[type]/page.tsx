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
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12 max-w-4xl mx-auto space-y-10">
      
      {/* Back to Engine Link */}
      <div>
        <Link href="/revision" className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1">
          ← Back to Revision Engine
        </Link>
      </div>

      {/* Session Header */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center space-y-4">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">{session.title}</h1>
        <p className="text-slate-600 max-w-xl mx-auto">{session.description}</p>
        
        <div className="inline-block bg-indigo-50 text-indigo-700 font-extrabold text-sm px-4 py-2 rounded-full">
          Estimated Time: {session.estimatedTimeMinutes} minutes
        </div>
      </div>

      {/* Target Items to Review */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">High-Yield Focus Items</h2>
        <div className="grid grid-cols-1 gap-4">
          {session.targetItems.length > 0 ? (
            session.targetItems.map((item, idx) => (
              <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200/60 shadow-sm flex items-center justify-between">
                <span className="font-bold text-slate-700">{item}</span>
                <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full uppercase tracking-wide">
                  Reviewing
                </span>
              </div>
            ))
          ) : (
            <div className="p-8 bg-white rounded-xl border border-dashed border-slate-300 text-center text-slate-500">
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
          className="py-4 px-8 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-center rounded-xl transition"
        >
          Go to Dashboard
        </Link>
      </div>

    </div>
  );
}
