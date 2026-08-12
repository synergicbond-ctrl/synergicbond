"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Users, Timer, Swords, Zap, Trophy, ArrowRight } from "lucide-react";

function useCounter(base: number, jitter: number) {
  const [n, setN] = useState(base);
  useEffect(() => {
    const id = setInterval(() => setN(base + Math.floor(Math.random() * jitter) - jitter / 2), 2500);
    return () => clearInterval(id);
  }, [base, jitter]);
  return n;
}

function Countdown({ minutes }: { minutes: number }) {
  const [s, setS] = useState(minutes * 60);
  useEffect(() => {
    const id = setInterval(() => setS((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return <span className="font-mono font-black text-cyan-300 tabular-nums">{h}:{m}:{sec}</span>;
}

const events = [
  { name: "All-India Chemistry Mock — Full Syllabus", mins: 135, players: "12,480", icon: Timer },
  { name: "Organic Speed Round (30 Q · 20 min)", mins: 47, players: "5,210", icon: Zap },
  { name: "Inorganic Rapid Fire", mins: 92, players: "3,870", icon: Swords },
];

export default function LivePage() {
  const online = useCounter(4310, 80);
  const solving = useCounter(1290, 40);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">

        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-green-400">Live Now</p>
        </div>
        <h1 className="text-4xl font-black md:text-5xl">Live Arena</h1>
        <p className="mt-2 text-white/55 text-sm mb-8">Real-time mocks, challenge arenas and rank-rush events. Compete with scholars across the country right now.</p>

        {/* Live counters */}
        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10"><Users className="h-6 w-6 text-green-400" /></div>
            <div>
              <p className="text-3xl font-black text-white tabular-nums">{online.toLocaleString()}</p>
              <p className="text-sm text-white/50">Scholars online now</p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10"><Zap className="h-6 w-6 text-cyan-400" /></div>
            <div>
              <p className="text-3xl font-black text-white tabular-nums">{solving.toLocaleString()}</p>
              <p className="text-sm text-white/50">Solving questions right now</p>
            </div>
          </div>
        </div>

        {/* Mock timer events */}
        <h2 className="text-lg font-black text-cyan-300 mb-3">⏱️ Upcoming Mock Events</h2>
        <div className="space-y-3 mb-10">
          {events.map((e) => {
            const Icon = e.icon;
            return (
              <div key={e.name} className="rounded-2xl bg-[#111827] border border-white/[0.06] p-4 flex items-center gap-4 flex-wrap">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 flex-shrink-0"><Icon className="h-5 w-5 text-cyan-400" /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white">{e.name}</p>
                  <p className="text-xs text-white/40">{e.players} registered · starts in <Countdown minutes={e.mins} /></p>
                </div>
                <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-2 text-xs font-bold text-black transition hover:-translate-y-0.5 flex-shrink-0">Register</button>
              </div>
            );
          })}
        </div>

        {/* Arenas */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-cyan-500/50 to-purple-500/50">
            <div className="rounded-2xl bg-[#111827] p-6 h-full">
              <Swords className="h-6 w-6 text-cyan-400 mb-3" />
              <h3 className="text-base font-black text-white">Weekly Challenge Arena</h3>
              <p className="text-sm text-white/55 mt-1 mb-4">A fresh 25-question gauntlet every week. Climb the weekly board.</p>
              <Link href="/quiz" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:gap-2.5 transition">Enter Arena <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/50 to-amber-500/50">
            <div className="rounded-2xl bg-[#111827] p-6 h-full">
              <Trophy className="h-6 w-6 text-amber-400 mb-3" />
              <h3 className="text-base font-black text-white">Rank Rush Event</h3>
              <p className="text-sm text-white/55 mt-1 mb-4">Timed sprint — fastest accurate solvers top the national leaderboard.</p>
              <Link href="/leaderboard" className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 hover:gap-2.5 transition">View Leaderboard <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-white/30 mt-6">{/* TODO: wire live counters & events to realtime backend (Supabase realtime / websockets) */}Live figures are simulated until the realtime backend is connected.</p>
      </div>
    </main>
  );
}
