"use client";

import React from "react";
import { BookOpen, Flame } from "lucide-react";

interface DashboardHeaderProps {
  studentName: string;
}

export function DashboardHeader({
  studentName,
}: DashboardHeaderProps) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-400">{today}</p>

          <h1 className="mt-2 text-3xl font-bold text-white">
            Welcome back, {studentName}
          </h1>

          <p className="mt-2 max-w-2xl text-slate-400">
            Continue your NEET/JEE Chemistry preparation. Review weak
            chapters, solve quizzes, and maintain your learning streak.
          </p>
        </div>

        <div className="flex gap-4">
          <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">
            <BookOpen className="mb-2 h-6 w-6 text-indigo-400" />
            <p className="text-sm text-slate-400">Today's Goal</p>
            <p className="font-semibold text-white">
              Complete 1 Chapter
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">
            <Flame className="mb-2 h-6 w-6 text-orange-400" />
            <p className="text-sm text-slate-400">Focus</p>
            <p className="font-semibold text-white">
              Stay Consistent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}