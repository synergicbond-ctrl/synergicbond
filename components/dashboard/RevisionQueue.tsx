interface RevisionQueueProps {
  chapters: string[];
}

export function RevisionQueue({
  chapters,
}: RevisionQueueProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="text-2xl font-bold text-white">
        Revision Queue
      </h2>

      <div className="mt-4 space-y-3">
        {chapters.length ? (
          chapters.map((chapter, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 p-3"
            >
              {chapter}
            </div>
          ))
        ) : (
          <p className="text-white/50">
            No revisions pending
          </p>
        )}
      </div>
    </div>
  );
}
