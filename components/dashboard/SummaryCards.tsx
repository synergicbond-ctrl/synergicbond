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

  const chapterProgress =
    totalChapters === 0
      ? 0
      : Math.round(
          (chaptersCompleted / totalChapters) * 100
        );

  const cards = [
    {
      title: "Chapters Completed",
      value: `${chaptersCompleted}/${totalChapters}`,
      subtitle: `${chapterProgress}% Complete`,
      icon: BookOpen,
    },
    {
      title: "Average Accuracy",
      value: `${averageAccuracy}%`,
      subtitle: "Overall Performance",
      icon: Target,
    },
    {
      title: "Study Hours",
      value: `${totalStudyHours} hrs`,
      subtitle: "Total Learning Time",
      icon: Clock3,
    },
    {
      title: "Daily Streak",
      value: `${dailyStreak} Days`,
      subtitle: "Keep Going!",
      icon: Flame,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm text-slate-400">
                {card.title}
              </h3>

              <Icon className="h-5 w-5 text-indigo-400" />
            </div>

            <p className="text-2xl font-bold text-white">
              {card.value}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {card.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}