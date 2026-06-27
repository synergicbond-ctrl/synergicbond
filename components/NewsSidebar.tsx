import { Megaphone, Newspaper, PenSquare, ArrowUpRight } from "lucide-react";

const updates = [
  { tag: "Platform Update", icon: Megaphone, accent: "#00F5D4", lines: [
    "Virtual Lab Simulator now live with EN/Hinglish audio",
    "Multimodal Doubt Solver supports image + voice input",
    "7-language interface dropdown rolled out",
  ]},
  { tag: "Exam News", icon: Newspaper, accent: "#FFD700", lines: [
    "JEE Main 2026 Session 1 registration window opens Nov",
    "NEET 2026 syllabus revision confirmed by NTA",
    "INChO selection via NSEC — register before Nov",
  ]},
  { tag: "Academic Blog", icon: PenSquare, accent: "#9B5DE5", lines: [
    "How to master Inorganic Qualitative Analysis in 7 days",
    "Why multicolor notes boost retention by 40%",
    "Dropper strategy: the 3-day recovery method",
  ]},
];

export default function NewsSidebar() {
  return (
    <aside className="rounded-3xl bg-[#111827] border border-white/[0.06] p-6">
      <h3 className="text-sm font-bold text-white mb-1">Latest Operations Hub</h3>
      <p className="text-xs text-white/40 mb-5">Updates · Exam News · Blogs</p>

      <div className="space-y-6">
        {updates.map((u) => {
          const Icon = u.icon;
          return (
            <div key={u.tag}>
              <div className="flex items-center gap-2 mb-2.5">
                <Icon className="h-3.5 w-3.5" style={{ color: u.accent }} />
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: u.accent }}>{u.tag}</span>
              </div>
              <ul className="space-y-2">
                {u.lines.map((line) => (
                  <li key={line}>
                    <a href="#" className="group flex items-start gap-1.5 text-xs text-white/60 hover:text-white transition">
                      <span className="flex-1 leading-snug">{line}</span>
                      <ArrowUpRight className="h-3 w-3 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
