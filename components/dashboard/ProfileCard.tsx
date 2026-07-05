import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { classLabel, boardLabel } from "@/lib/studentOptions";

// Compact profile summary on the student dashboard → links to /dashboard/profile.
// Pure presentational server component; real profile data only.
export function ProfileCard({
  name,
  email,
  phone,
  classStandard,
  boardProgram,
  subscriptionLabel,
}: {
  name: string;
  email: string | null;
  phone: string | null;
  classStandard: string | null;
  boardProgram: string | null;
  subscriptionLabel: string;
}) {
  const chips = [classLabel(classStandard), boardLabel(boardProgram)].filter(Boolean) as string[];

  return (
    <Link
      href="/dashboard/profile"
      className="block rounded-2xl border border-white/[0.08] bg-[#111827] p-5 hover:border-cyan-500/30 transition group"
    >
      <div className="flex items-center gap-3.5">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/25 to-purple-500/25 border border-cyan-400/20 flex items-center justify-center text-lg font-black text-cyan-300 flex-shrink-0">
          {name.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-black text-white text-sm truncate">{name}</h3>
          <p className="text-[11px] text-cyan-300/80 font-bold mt-0.5">{subscriptionLabel}</p>
        </div>
        <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-cyan-300 transition flex-shrink-0" />
      </div>

      <div className="mt-4 space-y-1.5 text-xs text-white/60">
        {email && (
          <div className="flex items-center gap-2 truncate">
            <Mail className="h-3.5 w-3.5 text-white/30 flex-shrink-0" /> <span className="truncate">{email}</span>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-white/30 flex-shrink-0" /> {phone}
          </div>
        )}
      </div>

      {chips.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {chips.map((c) => (
            <span key={c} className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-white/[0.06] text-white/60">
              {c}
            </span>
          ))}
        </div>
      )}

      <p className="mt-4 text-[11px] font-bold text-white/40 group-hover:text-white/60 transition">
        View &amp; edit full profile →
      </p>
    </Link>
  );
}
