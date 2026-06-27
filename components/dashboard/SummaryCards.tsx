"use client";

import React from "react";
import {
  BookOpen,
  Target,
  Clock3,
  Flame,
} from "lucide-react";

export interface SummaryCardsProps {
  data: {
    chaptersCompleted: number;
    totalChapters: number;
    dailyStreak: number;
    averageAccuracy: number;
    totalStudyHours: number;
  };
}

export function SummaryCards({
  data,
}: SummaryCardsProps) {
  const {
    chaptersCompleted,
    totalChapters,
    dailyStreak,
    averageAccuracy,
    totalStudyHours,
  } = data;

  const cards = [
    {
      title: "Chapters",
      value: `${chaptersCompleted}/${totalChapters}`,
      subtitle: "Syllabus Progress",
      icon: BookOpen,
    },
    {
      title: "Accuracy",
      value: `${averageAccuracy}%`,
      subtitle: "Test Performance",
      icon: Target,
    },
    {
      title: "Study Hours",
      value: `${totalStudyHours}`,
      subtitle: "Learning Time",
      icon: Clock3,
    },
    {
      title: "Streak",
      value: `${dailyStreak}`,
      subtitle: "Consistency Days",
      icon: Flame,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
          >
            <div className="mb-5 flex items-center justify-between">

              <div className="rounded-2xl bg-cyan-500/10 p-3">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>

              <span className="text-xs uppercase tracking-wider text-white/40">
                Live
              </span>

            </div>

            <p className="text-4xl font-black text-white">
              {card.value}
            </p>

            <h3 className="mt-3 text-lg font-semibold text-white">
              {card.title}
            </h3>

            <p className="mt-2 text-sm text-white/50">
              {card.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}
