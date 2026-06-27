"use client";

import { useState } from "react";
import { ExternalLink, Calendar, Wallet, GraduationCap } from "lucide-react";

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
  { name: "NEET",         eligibility: "Class 12 / PCB / Pre-Med",       website: "https://neet.nta.nic.in",        opens: "Feb 2026", closes: "Mar 2026", fee: "₹1,700",  accent: "#00F5D4" },
  { name: "JEE Main",     eligibility: "Class 12 / PCM",                 website: "https://jeemain.nta.nic.in",     opens: "Nov 2025", closes: "Dec 2025", fee: "₹1,000",  accent: "#00BBF9" },
  { name: "JEE Advanced", eligibility: "JEE Main Top 2.5L Qualifiers",   website: "https://jeeadv.ac.in",           opens: "Apr 2026", closes: "May 2026", fee: "₹3,200",  accent: "#9B5DE5" },
  { name: "GATE",         eligibility: "B.E / B.Tech / B.Sc Final Year", website: "https://gate.iitk.ac.in",        opens: "Aug 2025", closes: "Oct 2025", fee: "₹1,800",  accent: "#00BBF9" },
  { name: "INChO",        eligibility: "Class 11-12 via NSEC",           website: "https://olympiads.hbcse.tifr.res.in", opens: "Sep 2025", closes: "Nov 2025", fee: "₹200", accent: "#9B5DE5" },
];

const intlExams: Exam[] = [
  { name: "AP Chemistry",         eligibility: "High School (US/Canada)",   website: "https://apstudents.collegeboard.org", opens: "Sep 2025", closes: "Nov 2025", fee: "$99",   accent: "#00F5D4" },
  { name: "MCAT Chemistry",       eligibility: "Pre-Med Undergraduate",     website: "https://students-residents.aamc.org/mcat", opens: "Rolling", closes: "Rolling", fee: "$345",  accent: "#00BBF9" },
  { name: "Waterloo Avogadro",    eligibility: "Grade 11-12 (Canada)",      website: "https://cemc.uwaterloo.ca",      opens: "Mar 2026", closes: "Apr 2026", fee: "Free",  accent: "#9B5DE5" },
  { name: "A-Levels Chemistry",   eligibility: "Year 12-13 (UK)",           website: "https://www.cambridgeinternational.org", opens: "Jan 2026", closes: "Feb 2026", fee: "£120", accent: "#00BBF9" },
  { name: "IB Diploma Chem HL/SL",eligibility: "IB Programme (Global)",      website: "https://www.ibo.org",            opens: "Oct 2025", closes: "Nov 2025", fee: "$119",  accent: "#9B5DE5" },
  { name: "Singapore GCE A-Level",eligibility: "JC H2/H3 (Singapore)",      website: "https://www.seab.gov.sg",        opens: "Mar 2026", closes: "Apr 2026", fee: "S$130", accent: "#00BBF9" },
  { name: "Abitur Chemistry",     eligibility: "Gymnasium LK (Germany)",    website: "https://www.kmk.org",            opens: "Varies",   closes: "Varies",   fee: "Free",  accent: "#9B5DE5" },
];

export default function ExamCenter() {
  const [region, setRegion] = useState<"india" | "intl">("india");
  const exams = region === "india" ? indiaExams : intlExams;

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">
          Exam Center
        </p>
        <h2 className="text-3xl font-black md:text-4xl text-white">
          Every Chemistry Exam. One Directory.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70 text-sm">
          Eligibility, key dates, fees and official portals for chemistry exams worldwide.
        </p>
      </div>

      {/* Region toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-full bg-[#111827] border border-white/[0.06] p-1">
          <button
            onClick={() => setRegion("india")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              region === "india" ? "bg-cyan-500 text-black" : "text-gray-300 hover:text-white"
            }`}
          >
            🇮🇳 India Exams
          </button>
          <button
            onClick={() => setRegion("intl")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              region === "intl" ? "bg-cyan-500 text-black" : "text-gray-300 hover:text-white"
            }`}
          >
            🌍 International Exams
          </button>
        </div>
      </div>

      {/* Exam cards — uniform bg-[#111827] */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {exams.map((exam) => (
          <div
            key={exam.name}
            className="rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border p-5 transition-all duration-300 hover:-translate-y-1"
            style={{ borderColor: `${exam.accent}30`, backgroundColor: "#111827", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg" style={{ background: `${exam.accent}1a` }}>
                  <GraduationCap className="h-4 w-4" style={{ color: exam.accent }} />
                </div>
                <h3 className="text-lg font-bold text-white">{exam.name}</h3>
              </div>
            </div>

            <p className="text-xs text-gray-300 mb-4 flex items-center gap-1.5">
              <span className="text-gray-600">Eligibility:</span> {exam.eligibility}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
              <div className="rounded-lg bg-white/[0.03] px-3 py-2">
                <p className="text-gray-600 mb-0.5 flex items-center gap-1"><Calendar className="h-3 w-3" /> Opens</p>
                <p className="text-white/80 font-semibold">{exam.opens}</p>
              </div>
              <div className="rounded-lg bg-white/[0.03] px-3 py-2">
                <p className="text-gray-600 mb-0.5 flex items-center gap-1"><Calendar className="h-3 w-3" /> Closes</p>
                <p className="text-white/80 font-semibold">{exam.closes}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-sm font-bold" style={{ color: exam.accent }}>
                <Wallet className="h-3.5 w-3.5" /> {exam.fee}
              </span>
              <a
                href={exam.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-lg transition"
              >
                Official Site <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
