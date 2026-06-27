"use client";

import Link from "next/link";
import {
  Brain,
  BookOpen,
  ClipboardList,
  RotateCcw,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "AI Tutor",
    description: "Personal chemistry mentor",
    href: "/tutor",
    icon: Brain,
  },
  {
    title: "Take Exam",
    description: "Challenge your knowledge",
    href: "/exam",
    icon: ClipboardList,
  },
  {
    title: "Revision Hub",
    description: "Strengthen weak topics",
    href: "/revision",
    icon: RotateCcw,
  },
  {
    title: "Knowledge Vault",
    description: "Browse chemistry universe",
    href: "/vault",
    icon: BookOpen,
  },
];

export function QuickActions() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
      <h2 className="mb-2 text-2xl font-bold text-white">
        Mission Actions
      </h2>

      <p className="mb-6 text-sm text-white/50">
        Launch your next chemistry mission.
      </p>

      <div className="space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/10 p-3">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {action.title}
                  </h3>

                  <p className="text-sm text-white/50">
                    {action.description}
                  </p>
                </div>
              </div>

              <ArrowRight className="h-4 w-4 text-cyan-300 transition group-hover:translate-x-1" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
