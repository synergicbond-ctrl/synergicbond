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

import { fetchStudentDashboardData } from "@/lib/dashboardData";

export default function DashboardPage() {
  const dashboard = fetchStudentDashboardData("demo-user");

  const summaryData = dashboard.summary;

  const weakTopics: WeakTopic[] = dashboard.weakTopics.map(
    (topic, index) => ({
      id: `weak-${index}`,
      name: topic.topic,
      accuracy: topic.accuracy,
    })
  );

  const recentTests: RecentTest[] = dashboard.recentTests.map(
    (test) => ({
      id: test.id,
      title: test.name,
      date: test.date,
      score: test.score,
      passed: test.score >= 60,
    })
  );

  return (
    <main className="relative min-h-screen bg-black text-white">

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">

        <DashboardHeader studentName="Student" />

        <div className="mt-8">
          <SummaryCards data={summaryData} />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

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
