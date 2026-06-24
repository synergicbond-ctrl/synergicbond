"use client";

import Navbar from "@/components/Navbar";

import { masterSyllabus } from "@/lib/masterSyllabus";
import { userProgress } from "@/lib/userProgress";
import { userStats } from "@/lib/gamification";

export default function DashboardPage() {
  const totalChapters = masterSyllabus.length;

  const completed = userProgress.completed.length;

  const progress = Math.round(
    (completed / totalChapters) * 100
  );

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-4">

          📊 Dashboard

        </h1>

        <p className="text-white/60 mb-12">

          Your Chemistry Command Center

        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-12">

          <div className="border border-white/10 rounded-2xl p-6">

            <h2 className="text-3xl font-bold">

              {totalChapters}

            </h2>

            <p className="text-white/60">

              Total Chapters

            </p>

          </div>

          <div className="border border-white/10 rounded-2xl p-6">

            <h2 className="text-3xl font-bold">

              {progress}%

            </h2>

            <p className="text-white/60">

              Progress

            </p>

          </div>

          <div className="border border-white/10 rounded-2xl p-6">

            <h2 className="text-3xl font-bold">

              {userStats.streak}

            </h2>

            <p className="text-white/60">

              🔥 Study Streak

            </p>

          </div>

          <div className="border border-white/10 rounded-2xl p-6">

            <h2 className="text-3xl font-bold">

              {userStats.level}

            </h2>

            <p className="text-white/60">

              🏆 Level

            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              ⭐ Completed Chapters

            </h2>

            <ul className="space-y-3 text-white/70">

              {userProgress.completed.map((chapter) => (

                <li key={chapter}>

                  {chapter}

                </li>

              ))}

            </ul>

          </div>

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              🎯 In Progress

            </h2>

            <ul className="space-y-3 text-white/70">

              {userProgress.inProgress.map((chapter) => (

                <li key={chapter}>

                  {chapter}

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

    </main>
  );
}