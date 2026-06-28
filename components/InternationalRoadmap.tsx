"use client";

import { useState } from "react";
import { Globe2, Lock } from "lucide-react";
import { useT } from "@/lib/i18n";

type Region = "na" | "ukeu" | "apac";

const regions: { id: Region; label: string }[] = [
  { id: "na", label: "North America" },
  { id: "ukeu", label: "UK & Europe" },
  { id: "apac", label: "Asia-Pacific & Global" },
];

const data: Record<Region, { country: string; exams: string[]; accent: string }[]> = {
  na: [
    { country: "Canada", exams: ["MCAT (Biochem / Organic)", "Waterloo Avogadro Exam", "Canadian Chemistry Contest (CCC)"], accent: "#00BBF9" },
    { country: "USA", exams: ["AP Chemistry", "USNCO Olympiad", "SAT Subject Chemistry"], accent: "#00BBF9" },
  ],
  ukeu: [
    { country: "France", exams: ["Concours Général (Chemistry)", "Baccalauréat (Physique-Chimie)"], accent: "#9B5DE5" },
    { country: "Germany", exams: ["Abitur Chemistry (Leistungskurs)", "German National Chemistry Olympiad"], accent: "#9B5DE5" },
    { country: "United Kingdom", exams: ["A-Levels Chemistry", "Cambridge Chemistry Challenge"], accent: "#00F5D4" },
  ],
  apac: [
    { country: "Singapore", exams: ["GCE A-Levels (H2/H3 Chemistry)", "Singapore Chemistry Olympiad (SChO)"], accent: "#00BBF9" },
    { country: "Global", exams: ["IB Diploma Chemistry HL/SL", "International Chemistry Olympiad (IChO)"], accent: "#9B5DE5" },
  ],
};

export default function InternationalRoadmap() {
  const { t } = useT();
  const [region, setRegion] = useState<Region>("na");

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-6 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">{t("intl.eyebrow")}</p>
        <h2 className="text-3xl font-black md:text-4xl text-white flex items-center justify-center gap-3">
          <Globe2 className="h-7 w-7 text-cyan-400" /> {t("intl.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70 text-sm">
          {t("intl.desc")}
        </p>
      </div>

      {/* Region tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-full bg-[#111827] border border-white/[0.06] p-1 gap-1 flex-wrap justify-center">
          {regions.map((r) => (
            <button
              key={r.id}
              onClick={() => setRegion(r.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                region === r.id ? "bg-cyan-500 text-black" : "text-gray-300 hover:text-white"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Glassmorphic cards with COMING SOON tag */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data[region].map((c) => (
          <div
            key={c.country}
            className="relative rounded-2xl bg-[#111827] border p-5 overflow-hidden"
            style={{ borderColor: `${c.accent}30`, boxShadow: `0 0 30px ${c.accent}12` }}
          >
            {/* status tag */}
            <span className="absolute top-3 right-3 flex items-center gap-1 text-[8px] font-bold tracking-widest text-white/60 bg-white/[0.06] border border-white/15 px-2 py-0.5 rounded-full">
              <Lock className="h-2.5 w-2.5" /> {t("intl.comingSoon")}
            </span>

            <h3 className="text-lg font-black text-white mb-3 mt-1" style={{ color: c.accent }}>{c.country}</h3>
            <ul className="space-y-2">
              {c.exams.map((e) => (
                <li key={e} className="flex items-center gap-2 text-sm text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: c.accent }} />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
