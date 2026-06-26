"use client";

import Link from "next/link";
import {
  Brain,
  BookOpen,
  ClipboardList,
  RotateCcw,
} from "lucide-react";

const actions = [
  {
    title: "AI Tutor",
    description: "Ask the AI Chemistry Tutor",
    href: "/tutor",
    icon: Brain,
  },
  {
    title: "Take Exam",
    description: "Start a chapter test",
    href: "/exam",
    icon: ClipboardList,
  },
  {
    title: "Revision",
    description: "Review weak topics",
    href: "/revision",
    icon: RotateCcw,
  },
  {
    title: "Vault",
    description: "Browse all chapters",
    href: "/vault",
    icon: BookOpen,
  },
];

export function QuickActions() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Quick Actions
      </h2>

      <div className="space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-950 p-4 transition hover:border-indigo-500 hover:bg-slate-800"
            >
              <Icon className="h-6 w-6 text-indigo-400" />

              <div>
                <h3 className="font-medium text-white">
                  {action.title}
                </h3>

                <p className="text-sm text-slate-400">
                  {action.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}