"use client";

export interface RecentTest {
  id: string;
  title: string;
  date: string;
  score: number;
  passed: boolean;
}

interface RecentTestsProps {
  tests: RecentTest[];
}

export function RecentTests({ tests }: RecentTestsProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
          Assessment History
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          Recent Tests
        </h2>
      </div>

      {tests.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-lg font-semibold text-white">
            No tests completed yet
          </p>

          <p className="mt-2 text-white/50">
            Take your first chemistry assessment to begin tracking progress.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {tests.map((test) => (
            <div
              key={test.id}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <div className="flex items-center justify-between">

                <div>
                  <h3 className="font-semibold text-white">
                    {test.title}
                  </h3>

                  <p className="mt-1 text-sm text-white/40">
                    {test.date}
                  </p>
                </div>

                <div className="text-right">

                  <p className="text-2xl font-black text-white">
                    {test.score}%
                  </p>

                  <span
                    className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      test.passed
                        ? "bg-emerald-500/10 text-emerald-300"
                        : "bg-red-500/10 text-red-300"
                    }`}
                  >
                    {test.passed
                      ? "Passed"
                      : "Needs Revision"}
                  </span>

                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
