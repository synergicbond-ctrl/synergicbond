import React from "react";

import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SummaryCards } from "@/components/dashboard/SummaryCards";
import {
  WeakTopics,
  type WeakTopic,
} from "@/components/dashboard/WeakTopics";
import {
  RecentTests,
  type RecentTest,
} from "@/components/dashboard/RecentTests";
import { QuickActions } from "@/components/dashboard/QuickActions";

export default function DashboardPage() {
  const summaryData = {
    chaptersCompleted: 0,
    totalChapters: 30,
    dailyStreak: 0,
    averageAccuracy: 0,
    totalStudyHours: 0,
  };

  const weakTopics: WeakTopic[] = [];

  const recentTests: RecentTest[] = [];

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white md:p-10">
      <div className="mx-auto max-w-7xl">
        <DashboardHeader studentName="Student" />

        <div className="mt-8">
          <SummaryCards data={summaryData} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <WeakTopics topics={weakTopics} />
            <RecentTests tests={recentTests} />
          </div>

          <div>
            <QuickActions />
          </div>
        </div>
      </div>
    </main>
  );
}