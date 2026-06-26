"use client";

export interface WeakTopic {
  id: string;
  name: string;
  accuracy: number;
}

interface WeakTopicsProps {
  topics: WeakTopic[];
}

export function WeakTopics({ topics }: WeakTopicsProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
          Performance Analysis
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          Weak Topics
        </h2>
      </div>

      {topics.length === 0 ? (
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
          <p className="text-lg font-semibold text-emerald-300">
            🎉 No weak topics detected
          </p>

          <p className="mt-2 text-white/50">
            Keep practicing to maintain your performance.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {topics.map((topic) => (
            <div key={topic.id}>
              <div className="mb-2 flex items-center justify-between">

                <span className="font-medium text-white">
                  {topic.name}
                </span>

                <span className="text-sm text-cyan-300">
                  {topic.accuracy}%
                </span>

              </div>

              <div className="h-3 w-full rounded-full bg-white/10">

                <div
                  className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                  style={{
                    width: `${topic.accuracy}%`,
                  }}
                />

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
