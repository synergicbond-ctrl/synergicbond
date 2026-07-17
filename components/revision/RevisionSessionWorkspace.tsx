import Link from "next/link";
import { generateRevisionSession, type RevisionType } from "@/lib/revisionEngine";

type RevisionSessionWorkspaceProps = {
  type: string;
  topic?: string;
  baseHref?: string;
  scopeLabel?: string;
  practiceHref?: string;
  dashboardHref?: string;
};

export default function RevisionSessionWorkspace({
  type,
  topic,
  baseHref = "/revision",
  scopeLabel,
  practiceHref = "/exam",
  dashboardHref = "/dashboard",
}: RevisionSessionWorkspaceProps) {
  const sessionType = type as RevisionType;
  const sessionPayload = topic || (sessionType === "weakTopic" ? "Targeted Concept" : undefined);
  const session = generateRevisionSession(sessionType, sessionPayload);

  return (
    <div className="min-h-screen max-w-4xl space-y-10 bg-slate-50 p-6 text-slate-900 md:p-12">
      <div>
        <Link href={baseHref} className="flex items-center gap-1 text-sm font-bold text-indigo-600 hover:underline">
          ← Back to Revision Engine{scopeLabel ? ` · ${scopeLabel}` : ""}
        </Link>
      </div>

      {scopeLabel && (
        <aside className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-950">
          <span className="font-bold">Programme context:</span> {scopeLabel}. This session was launched from its scoped revision workspace.
        </aside>
      )}

      <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">{session.title}</h1>
        <p className="mx-auto max-w-xl text-slate-600">{session.description}</p>
        <div className="inline-block rounded-full bg-indigo-50 px-4 py-2 text-sm font-extrabold text-indigo-700">
          Estimated Time: {session.estimatedTimeMinutes} minutes
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">High-Yield Focus Items</h2>
        <div className="grid grid-cols-1 gap-4">
          {session.targetItems.length > 0 ? (
            session.targetItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between rounded-xl border border-slate-200/60 bg-white p-5 shadow-sm">
                <span className="font-bold text-slate-700">{item}</span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-slate-600">Reviewing</span>
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
              No specific items loaded for this session.
            </div>
          )}
        </div>
      </section>

      <div className="flex gap-4 pt-4">
        <Link href={practiceHref} className="flex-1 rounded-xl bg-indigo-600 py-4 text-center font-black text-white shadow transition hover:bg-indigo-700">
          Test Knowledge with Practice Questions
        </Link>
        <Link href={dashboardHref} className="rounded-xl border border-slate-200 bg-white px-8 py-4 text-center font-bold text-slate-700 transition hover:bg-slate-50">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
