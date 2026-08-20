import { exceptionsList } from "@/lib/masterSyllabus/exceptions";

export default function ExceptionsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] p-6 md:p-12 max-w-4xl mx-auto space-y-8">
      <header>
        <h1 className="text-4xl font-black text-[var(--foreground)]">Important Exceptions</h1>
        <p className="text-[var(--text-muted)] mt-2 text-sm">
          Anomalies and exceptions that frequently appear in JEE and NEET.
        </p>
      </header>

      <div className="space-y-4">
        {exceptionsList.map((ex) => (
          <div key={ex.id} className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
            <div className="flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div className="space-y-2">
                <h3 className="font-black text-[var(--foreground)]">{ex.topic}</h3>
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3 text-sm">
                  <span className="font-semibold text-amber-700 dark:text-amber-400">Observation: </span>
                  <span className="text-slate-700 dark:text-slate-300">{ex.observation}</span>
                </div>
                <div className="bg-[var(--surface-2)] rounded-lg p-3 text-sm">
                  <span className="font-semibold text-indigo-400">Reason: </span>
                  <span className="text-[var(--text-muted)]">{ex.reason}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
