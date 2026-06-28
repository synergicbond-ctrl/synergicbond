"use client";

import { useState } from "react";
import { MessageSquare, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { useT } from "@/lib/i18n";

// Client-side XSS / injection sanitizer — strips tags, scripts, and dangerous chars
function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")              // strip HTML tags
    .replace(/javascript:/gi, "")          // strip js: protocol
    .replace(/on\w+\s*=/gi, "")            // strip inline event handlers
    .replace(/[<>{}]/g, "")                // strip remaining brackets
    .trim()
    .slice(0, 1000);                       // hard length cap
}

const feedbackTypes = ["UI Suggestion", "Syllabus Gap", "Feature Request", "Bug Report", "Other"];

export default function ContactFeedback() {
  const { t } = useT();
  const [type, setType] = useState(feedbackTypes[0]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean = sanitize(message);
    if (!clean) return;
    // TODO: POST { type, message: clean } to /api/feedback once backend is ready
    setSubmitted(true);
    setMessage("");
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">
          {t("contact.eyebrow")}
        </p>
        <h2 className="text-4xl font-black text-white">{t("contact.title")}</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Contact options */}
        <div className="space-y-4">
          {/* AI Live Chat */}
          <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10">
              <MessageSquare className="h-5 w-5 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-white">AI Live Chat</h3>
              <p className="text-xs text-gray-400 mt-0.5">Instant answers, 24/7 — powered by our chemistry AI.</p>
            </div>
            <button className="text-xs font-semibold bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-400 transition">
              Launch
            </button>
          </div>

          {/* Email support */}
          <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10">
              <Mail className="h-5 w-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-white">Email Support</h3>
              {/* TODO: Replace placeholder with active domain route later */}
              <p className="text-xs text-gray-400 mt-0.5">test@abc.com</p>
            </div>
            <span className="text-[10px] font-bold text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full">ACTIVE</span>
          </div>

          {/* Phone — coming soon */}
          <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5 flex items-center gap-4 opacity-70">
            <div className="p-3 rounded-xl bg-white/[0.06]">
              <Phone className="h-5 w-5 text-white/50" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-white">Phone Support</h3>
              <p className="text-xs text-gray-400 mt-0.5">Direct line to our academic team.</p>
            </div>
            <span className="text-[10px] font-bold text-white/50 bg-white/[0.06] px-2.5 py-1 rounded-full">SOON</span>
          </div>
        </div>

        {/* Feedback form */}
        <form onSubmit={handleSubmit} className="rounded-2xl bg-[#111827] border border-white/[0.06] p-6">
          <h3 className="text-sm font-bold text-white mb-1">Send Anonymous Feedback</h3>
          <p className="text-xs text-gray-500 mb-5">Help us improve. No login required — fully anonymous.</p>

          <label className="block text-xs font-semibold text-gray-400 mb-2">Feedback Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-xl border border-white/[0.08] bg-black/40 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400/50 mb-4"
          >
            {feedbackTypes.map((t) => (
              <option key={t} value={t} className="bg-[#111827]">{t}</option>
            ))}
          </select>

          <label className="block text-xs font-semibold text-gray-400 mb-2">Your Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Tell us what's on your mind..."
            className="w-full rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50 mb-4 resize-none"
          />

          <button
            type="submit"
            disabled={submitted}
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 disabled:opacity-60"
          >
            {submitted ? (
              <><CheckCircle2 className="h-4 w-4" /> Thank you for your feedback!</>
            ) : (
              <><Send className="h-4 w-4" /> Submit Feedback</>
            )}
          </button>
          <p className="text-[10px] text-gray-600 mt-3 text-center">
            🔒 Inputs are sanitized client-side against XSS before processing.
          </p>
        </form>

      </div>
    </section>
  );
}
