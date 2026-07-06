"use client";

import { useState, useEffect, useRef } from "react";
import { Atom, BrainCircuit, Trophy, Clock3, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Atom, value: "10,000+", num: 10000, suffix: "+", title: "Chemistry Resources",
    subtitle: "Concepts, reactions, mechanisms & PYQs",
    icon_color: "text-cyan-300", tile: "from-cyan-400/20 to-cyan-500/5 border-cyan-400/30", glow: "rgba(34,211,238,0.25)", ring: "#00F5D4", pct: 85,
  },
  {
    icon: BrainCircuit, value: "500+", num: 500, suffix: "+", title: "JEE / NEET Topics",
    subtitle: "Mapped chapter-wise syllabus",
    icon_color: "text-violet-300", tile: "from-violet-400/20 to-violet-500/5 border-violet-400/30", glow: "rgba(155,93,229,0.25)", ring: "#9B5DE5", pct: 75,
  },
  {
    icon: Trophy, value: "200+", num: 200, suffix: "+", title: "Olympiad Problems",
    subtitle: "National & International level",
    icon_color: "text-cyan-300", tile: "from-cyan-400/20 to-cyan-500/5 border-cyan-400/30", glow: "rgba(34,211,238,0.25)", ring: "#00BBF9", pct: 65,
  },
  {
    icon: Clock3, value: "24×7", num: 24, suffix: "×7", title: "AI Learning",
    subtitle: "Instant chemistry assistance",
    icon_color: "text-violet-300", tile: "from-violet-400/20 to-violet-500/5 border-violet-400/30", glow: "rgba(155,93,229,0.25)", ring: "#9B5DE5", pct: 100,
  },
];

function CountUp({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const stepTime = Math.max(1, Math.floor(duration / (target > 500 ? 60 : target)));
    const increment = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  const formatted = count >= 10000 ? count.toLocaleString() : count.toString();
  return <span>{formatted}{suffix}</span>;
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto mt-20 max-w-7xl px-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              style={{ boxShadow: `0 10px 30px -10px ${item.glow}` }}
            >
              {/* Glossy top reflection highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl opacity-20 transition-transform duration-500 group-hover:scale-150" style={{ background: item.ring }} />

              {/* Glossy icon tile with animated progress ring */}
              <div className="relative flex h-16 w-16 items-center justify-center mb-6">
                <svg className="absolute inset-0 h-full w-full -rotate-90 transform" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.1)" strokeWidth="3" fill="none" />
                  <circle
                    cx="32" cy="32" r="28"
                    stroke={item.ring} strokeWidth="3" strokeDasharray="175.93"
                    strokeDashoffset={isVisible ? 175.93 * (1 - item.pct / 100) : 175.93}
                    strokeLinecap="round" fill="none"
                    className="transition-all duration-1500 ease-out"
                    style={{ filter: `drop-shadow(0 0 6px ${item.ring})` }}
                  />
                </svg>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-gradient-to-br ${item.tile}`}
                  style={{ boxShadow: `0 6px 20px ${item.glow}, inset 0 1px 0 rgba(255,255,255,0.2)` }}
                >
                  <Icon className={`h-6 w-6 ${item.icon_color} transition-transform duration-300 group-hover:scale-110`} />
                </div>
              </div>

              {/* Number ticker with count-up */}
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-sm">
                <CountUp target={item.num} suffix={item.suffix} isVisible={isVisible} />
              </div>
              <h3 className="mt-3 text-lg font-bold text-white/90 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

