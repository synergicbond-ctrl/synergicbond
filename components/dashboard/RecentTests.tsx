"use client";

import React from "react";

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
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Recent Tests
      </h2>

      {tests.length === 0 ? (
        <p className="text-slate-400">
          No tests completed yet.
        </p>
      ) : (
        <div className="space-y-4">
          {tests.map((test) => (
            <div
              key={test.id}
              className="rounded-lg border border-slate-800 bg-slate-950 p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">
                    {test.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {test.date}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold text-white">
                    {test.score}%
                  </p>

                  <span
                    className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                      test.passed
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {test.passed ? "Passed" : "Needs Revision"}
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