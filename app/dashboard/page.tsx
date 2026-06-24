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

  const recommended =
    userProgress.weakChapters[0] ||
    userProgress.inProgress[0];

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-4">

          📊 Smart Dashboard

        </h1>

        <p className="text-white/60 mb-12">

          Your Chemistry Command Center

        </p>

        <div className="grid md:grid-cols-5 gap-6 mb-12">

          <div className="border border-white/10 rounded-2xl p-6">

            <h2 className="text-3xl font-bold">

              {totalChapters}

            </h2>

            <p>Total Chapters</p>

          </div>

          <div className="border border-white/10 rounded-2xl p-6">

            <h2 className="text-3xl font-bold">

              {progress}%

            </h2>

            <p>📈 Progress</p>

          </div>

          <div className="border border-white/10 rounded-2xl p-6">

            <h2 className="text-3xl font-bold">

              {userStats.streak}

            </h2>

            <p>🔥 Streak</p>

          </div>

          <div className="border border-white/10 rounded-2xl p-6">

            <h2 className="text-3xl font-bold">

              {userStats.level}

            </h2>

            <p>🏆 Level</p>

          </div>

          <div className="border border-white/10 rounded-2xl p-6">

            <h2 className="text-3xl font-bold">

              {userStats.xp}

            </h2>

            <p>⭐ XP</p>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              ⚠️ Weak Chapters

            </h2>

            {userProgress.weakChapters.map((item) => (

              <p key={item}>

                • {item}

              </p>

            ))}

          </div>

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              💪 Strong Chapters

            </h2>

            {userProgress.strongChapters.map((item) => (

              <p key={item}>

                • {item}

              </p>

            ))}

          </div>

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              🎯 Recommended Next

            </h2>

            <p>

              {recommended}

            </p>

          </div>

        </div>

      </div>

    </main>
  );
}