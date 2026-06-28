"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  LayoutList, BarChart3, Inbox, GraduationCap,
  Plus, GripVertical, ArrowRight, Clock, CheckCircle2,
} from "lucide-react";

type Tab = "curriculum" | "analytics" | "router";

const tabs = [
  { id: "curriculum" as const, label: "Curriculum Builder", icon: LayoutList },
  { id: "analytics" as const,  label: "Student Analytics",  icon: BarChart3 },
  { id: "router" as const,     label: "Doubt Router",       icon: Inbox },
];

// ── DEMO DATA — wire to Supabase tables when backend is ready ──
const lessons = [
  { unit: "Unit 1", title: "Some Basic Concepts of Chemistry", lessons: 6, status: "Published" },
  { unit: "Unit 2", title: "Atomic Structure", lessons: 8, status: "Published" },
  { unit: "Unit 3", title: "Chemical Bonding", lessons: 10, status: "Draft" },
  { unit: "Unit 4", title: "Thermodynamics", lessons: 7, status: "Draft" },
];
const classStats = [
  { label: "Class Average", value: "72%", color: "#00F5D4" },
  { label: "Active Students", value: "148", color: "#9B5DE5" },
  { label: "Assignments Due", value: "23", color: "#FFD700" },
  { label: "Avg. Study Time", value: "4.2h", color: "#10B981" },
];
const topicMastery = [
  { topic: "Organic Mechanisms", mastery: 84 },
  { topic: "Inorganic Qualitative", mastery: 61 },
  { topic: "Thermodynamics", mastery: 73 },
  { topic: "Electrochemistry", mastery: 49 },
  { topic: "Coordination Compounds", mastery: 67 },
];
const doubts = [
  { student: "Ananya S.", topic: "SN1 vs SN2 selectivity", time: "5m ago", status: "new" },
  { student: "Rohan K.", topic: "Why is BeCl₂ covalent?", time: "18m ago", status: "new" },
  { student: "Priya M.", topic: "Nernst equation sign convention", time: "1h ago", status: "assigned" },
  { student: "Vikram T.", topic: "Lanthanide contraction effect", time: "2h ago", status: "resolved" },
];

export default function TeachersPage() {
  const [tab, setTab] = useState<Tab>("curriculum");

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-xl bg-cyan-500/10">
            <GraduationCap className="h-5 w-5 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-black">Teacher &amp; Educator Hub</h1>
        </div>
        <p className="text-white/50 text-sm mb-8 ml-1">
          Build curricula, monitor class performance, and route student doubts — all in one console.
        </p>

        {/* Sub-tabs */}
        <div className="flex gap-1 mb-6 rounded-full bg-[#111827] border border-white/[0.06] p-1 w-fit">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105 ${
                  active ? "bg-cyan-500 text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Panel — uniform bg-[#111827] */}
        <div className="rounded-3xl bg-[#111827] border border-white/[0.06] p-6 md:p-8 min-h-[400px]">

          {tab === "curriculum" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Lesson Flow Builder</h2>
                <button className="flex items-center gap-1.5 text-xs font-semibold bg-cyan-500 text-black px-3 py-2 rounded-lg hover:bg-cyan-400 transition">
                  <Plus className="h-3.5 w-3.5" /> Add Unit
                </button>
              </div>
              <div className="space-y-3">
                {lessons.map((l) => (
                  <div key={l.unit} className="flex items-center gap-4 rounded-xl bg-black/30 border border-white/[0.06] px-4 py-3 hover:border-white/[0.12] transition">
                    <GripVertical className="h-4 w-4 text-white/20 cursor-grab" />
                    <span className="text-[10px] font-bold text-cyan-400 w-12">{l.unit}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{l.title}</p>
                      <p className="text-xs text-white/40">{l.lessons} lessons</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${l.status === "Published" ? "text-cyan-400 bg-cyan-500/10" : "text-violet-400 bg-violet-500/10"}`}>
                      {l.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "analytics" && (
            <div>
              <h2 className="text-lg font-bold mb-6">Class Performance Overview</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                {classStats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-black/30 border border-white/[0.06] p-4">
                    <p className="text-2xl font-black" style={{ color: s.color }}>{s.value}</p>
                    <p className="text-xs text-white/40 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-sm font-bold mb-4 text-white/70">Topic Mastery (Class-wide)</h3>
              <div className="space-y-3">
                {topicMastery.map((t) => (
                  <div key={t.topic}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/60">{t.topic}</span>
                      <span className="text-white/40">{t.mastery}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${t.mastery}%`, background: t.mastery > 70 ? "#10B981" : t.mastery > 55 ? "#FFD700" : "#EF4444" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "router" && (
            <div>
              <h2 className="text-lg font-bold mb-6">Doubt Assignment Queue</h2>
              <div className="space-y-3">
                {doubts.map((d, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl bg-black/30 border border-white/[0.06] px-4 py-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">{d.student}</span>
                        <span className="flex items-center gap-1 text-[10px] text-white/30"><Clock className="h-3 w-3" />{d.time}</span>
                      </div>
                      <p className="text-xs text-white/50 mt-0.5 truncate">{d.topic}</p>
                    </div>
                    {d.status === "resolved" ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="h-3 w-3" /> Resolved
                      </span>
                    ) : d.status === "assigned" ? (
                      <span className="text-[10px] font-bold text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full">Assigned</span>
                    ) : (
                      <button className="flex items-center gap-1 text-[10px] font-bold bg-cyan-500 text-black px-3 py-1.5 rounded-lg hover:bg-cyan-400 transition">
                        Respond <ArrowRight className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
