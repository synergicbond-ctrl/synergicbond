"use client";

import React from "react";

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
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Weak Topics
      </h2>

      {topics.length === 0 ? (
        <p className="text-slate-400">
          🎉 No weak topics detected.
        </p>
      ) : (
        <div className="space-y-5">
          {topics.map((topic) => (
            <div key={topic.id}>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-white">
                  {topic.name}
                </span>

                <span className="text-sm text-slate-400">
                  {topic.accuracy}%
                </span>
              </div>

              <div className="h-2 w-full rounded-full bg-slate-800">
                <div
                  className="h-2 rounded-full bg-red-500 transition-all"
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