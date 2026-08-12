import Link from "next/link";
import { Calendar, CreditCard, Users, Award, ArrowRight } from "lucide-react";
import { EXAM_DIRECTORY, type CapIcon } from "./examDirectoryData";

export const metadata = {
  title: "Exam Center · Synergic Bond",
  description: "2026 directory for NEET, JEE Advanced, INChO and GATE — key dates, fees and seats at a glance.",
};

const CAP_ICONS: Record<CapIcon, typeof Users> = {
  users: Users,
  award: Award,
};

export default function ExamCenterPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-2">Exam Center · 2026</p>
        <h1 className="text-3xl md:text-4xl font-black">Exam Directory</h1>
        <p className="mt-2 max-w-2xl text-sm text-white/55">
          Every track at a glance — key dates, application fees and seats. Dates marked tentative
          follow official notifications; figures update as boards announce them.
        </p>

        {/* Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {EXAM_DIRECTORY.map((e) => {
            const CapIconCmp = CAP_ICONS[e.capIcon];
            return (
              <Link
                key={e.id}
                href={e.href}
                className="group rounded-2xl border bg-[#111827] p-6 transition hover:-translate-y-1"
                style={{ borderColor: `${e.accent}30` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="text-lg font-black text-white">{e.name}</h2>
                    <p className="mt-0.5 text-xs text-white/50">{e.subtitle}</p>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: e.accent, background: `${e.accent}1a` }}
                  >
                    {e.tag}
                  </span>
                </div>

                {/* Uniform key-value slots */}
                <div className="mt-5 space-y-2.5">
                  <KeyValue icon={<Calendar className="h-4 w-4" style={{ color: e.accent }} />} label="Key date" value={e.dateStr} />
                  <KeyValue icon={<CreditCard className="h-4 w-4" style={{ color: e.accent }} />} label="App fee" value={e.feeStr} />
                  <KeyValue icon={<CapIconCmp className="h-4 w-4" style={{ color: e.accent }} />} label={e.capIcon === "award" ? "Validity" : "Seats / cap"} value={e.capStr} />
                </div>

                <span
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold transition group-hover:gap-2.5"
                  style={{ color: e.accent }}
                >
                  View track <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function KeyValue({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-slate-900 bg-slate-950/40 px-3 py-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/[0.04]">{icon}</span>
      <span className="text-xs text-white/45">{label}</span>
      <span className="ml-auto truncate text-sm font-semibold text-white">{value}</span>
    </div>
  );
}
