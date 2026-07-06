"use client";

import { useState } from "react";
import { ExternalLink, Calendar, Wallet, GraduationCap, Sparkles, Globe } from "lucide-react";
import { useT } from "@/lib/i18n";

type Exam = {
  name: string;
  eligibility: string;
  website: string;
  opens: string;
  closes: string;
  fee: string;
  accent: string;
};

const indiaExams: Exam[] = [
  { name: "NEET",         eligibility: "Class 12 / PCB / Pre-Med",       website: "https://neet.nta.nic.in",        opens: "Feb 2026", closes: "Mar 2026", fee: "₹1,700",  accent: "#10B981" },
  { name: "JEE Main",     eligibility: "Class 12 / PCM",                 website: "https://jeemain.nta.nic.in",     opens: "Nov 2025", closes: "Dec 2025", fee: "₹1,000",  accent: "#00BBF9" },
  { name: "JEE Advanced", eligibility: "JEE Main Top 2.5L Qualifiers",   website: "https://jeeadv.ac.in",           opens: "Apr 2026", closes: "May 2026", fee: "₹3,200",  accent: "#3B82F6" },
  { name: "GATE",         eligibility: "B.E / B.Tech / B.Sc Final Year", website: "https://gate.iitk.ac.in",        opens: "Aug 2025", closes: "Oct 2025", fee: "₹1,800",  accent: "#F97316" },
  { name: "INChO",        eligibility: "Class 11-12 via NSEC",           website: "https://olympiads.hbcse.tifr.res.in", opens: "Sep 2025", closes: "Nov 2025", fee: "₹200", accent: "#F59E0B" },
];

const intlExams: Exam[] = [
  { name: "AP Chemistry",         eligibility: "High School (US/Canada)",   website: "https://apstudents.collegeboard.org", opens: "Sep 2025", closes: "Nov 2025", fee: "$99",   accent: "#00F5D4" },
  { name: "MCAT Chemistry",       eligibility: "Pre-Med Undergraduate",     website: "https://students-residents.aamc.org/mcat", opens: "Rolling", closes: "Rolling", fee: "$345",  accent: "#00BBF9" },
  { name: "Waterloo Avogadro",    eligibility: "Grade 11-12 (Canada)",      website: "https://cemc.uwaterloo.ca",      opens: "Mar 2026", closes: "Apr 2026", fee: "Free",  accent: "#9B5DE5" },
  { name: "A-Levels Chemistry",   eligibility: "Year 12-13 (UK)",           website: "https://www.cambridgeinternational.org", opens: "Jan 2026", closes: "Feb 2026", fee: "£120", accent: "#F59E0B" },
  { name: "IB Diploma Chem HL/SL",eligibility: "IB Programme (Global)",      website: "https://www.ibo.org",            opens: "Oct 2025", closes: "Nov 2025", fee: "$119",  accent: "#EC4899" },
  { name: "Singapore GCE A-Level",eligibility: "JC H2/H3 (Singapore)",      website: "https://www.seab.gov.sg",        opens: "Mar 2026", closes: "Apr 2026", fee: "S$130", accent: "#10B981" },
  { name: "Abitur Chemistry",     eligibility: "Gymnasium LK (Germany)",    website: "https://www.kmk.org",            opens: "Varies",   closes: "Varies",   fee: "Free",  accent: "#38BDF8" },
];

export default function ExamCenter() {
  const { t } = useT();
  const [region, setRegion] = useState<"india" | "intl">("india");
  const exams = region === "india" ? indiaExams : intlExams;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md shadow-sm">
          <Globe className="h-3.5 w-3.5 text-cyan-400" />
          {t("exam.eyebrow")}
        </div>
        <h2 className="text-3xl font-black md:text-5xl text-white tracking-tight drop-shadow-sm">
          {t("exam.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70 text-base leading-relaxed">
          {t("exam.desc")}
        </p>
      </div>

      {/* Region toggle with OS glassmorphic depth */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-full bg-[#0B0F19]/90 border border-white/15 p-1.5 backdrop-blur-xl shadow-2xl">
          <button
            onClick={() => setRegion("india")}
            className={`flex items-center gap-2 px-7 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
              region === "india" ? "bg-gradient-to-r from-cyan-400 to-sky-500 text-black shadow-lg scale-105" : "text-gray-400 hover:text-white"
            }`}
          >
            <span>🇮🇳</span> {t("exam.india")}
          </button>
          <button
            onClick={() => setRegion("intl")}
            className={`flex items-center gap-2 px-7 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
              region === "intl" ? "bg-gradient-to-r from-cyan-400 to-sky-500 text-black shadow-lg scale-105" : "text-gray-400 hover:text-white"
            }`}
          >
            <span>🌍</span> {t("exam.intl")}
          </button>
        </div>
      </div>

      {/* Exam cards with deep glassmorphism and distinct professional accents */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {exams.map((exam) => (
          <div
            key={exam.name}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#111827]/95 to-[#0B0F19]/95 border p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
            style={{ borderColor: `${exam.accent}33`, boxShadow: `0 10px 30px -15px ${exam.accent}33` }}
          >
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl opacity-20 pointer-events-none transition-transform duration-500 group-hover:scale-150" style={{ background: exam.accent }} />

            <div>
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-inner border border-white/10 group-hover:scale-110 transition-transform" style={{ background: `${exam.accent}26` }}>
                    <GraduationCap className="h-6 w-6" style={{ color: exam.accent }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-white transition-colors">{exam.name}</h3>
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md mt-0.5" style={{ background: `${exam.accent}1a`, color: exam.accent }}>
                      Professional Track
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-300 mb-5 flex items-center gap-1.5 font-medium">
                <span className="text-white/40">{t("exam.eligibility")}</span> <span className="text-white/90">{exam.eligibility}</span>
              </p>

              <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs">
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] px-3.5 py-2.5">
                  <p className="text-white/40 mb-1 flex items-center gap-1 text-[11px] font-bold uppercase"><Calendar className="h-3 w-3" style={{ color: exam.accent }} /> {t("exam.opens")}</p>
                  <p className="text-white font-bold">{exam.opens}</p>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] px-3.5 py-2.5">
                  <p className="text-white/40 mb-1 flex items-center gap-1 text-[11px] font-bold uppercase"><Calendar className="h-3 w-3" style={{ color: exam.accent }} /> {t("exam.closes")}</p>
                  <p className="text-white font-bold">{exam.closes}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-black" style={{ color: exam.accent }}>
                <Wallet className="h-4 w-4" /> {exam.fee}
              </span>
              <a
                href={exam.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white border border-white/10 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.08] px-3.5 py-2 rounded-xl transition shadow-sm"
              >
                <span>{t("exam.officialSite")}</span>
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

