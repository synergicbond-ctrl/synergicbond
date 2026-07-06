"use client";
import { useState } from "react";
import { Heart, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";

export default function Donation() {
  const { t } = useT();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const numericAmount = Number(amount);
  const isValidAmount = !isNaN(numericAmount) && numericAmount >= 499;
  const isFormValid = name.trim().length > 0 && isValidAmount;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isFormValid) return;
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          {t("donate.eyebrow")}
        </div>
        <h2 className="text-3xl font-black md:text-5xl text-white tracking-tight drop-shadow-sm">
          {t("donate.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/75 text-base sm:text-lg leading-relaxed">
          Help support free chemistry education, AI learning tools, content development, and educational outreach initiatives.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] border border-cyan-500/30 bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#1E1B4B] p-8 sm:p-12 backdrop-blur-2xl shadow-[0_0_80px_-15px_rgba(34,211,238,0.2)]">
          {/* Subtle background glow blobs */}
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-purple-500/15 blur-[120px] pointer-events-none" />
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none" />

          {submitted ? (
            <div className="relative z-10 py-8 text-center flex flex-col items-center justify-center animate-fade-in">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/40 mb-6 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                <CheckCircle2 className="h-8 w-8 text-cyan-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Thank You for Your Contribution!</h3>
              <p className="text-white/80 text-sm sm:text-base max-w-md leading-relaxed mb-8">
                Your support of <span className="font-bold text-cyan-400">₹{amount}</span> empowers affordable chemistry education. We have recorded your contribution pledge and will connect with you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setEmail("");
                  setAmount("");
                  setMessage("");
                }}
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-white/20"
              >
                Make Another Contribution
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Name / Organization Field */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-300 mb-2">
                  Name / Organization <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name or organization"
                  className="w-full rounded-2xl bg-black/50 border border-white/15 px-5 py-3.5 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition shadow-inner"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-300 mb-2">
                  Email <span className="text-gray-500 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-2xl bg-black/50 border border-white/15 px-5 py-3.5 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition shadow-inner"
                />
              </div>

              {/* Custom Amount Field */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-300 mb-2">
                  Contribution Amount <span className="text-cyan-400">*</span>
                  <span className="ml-2 text-[10px] font-semibold text-gray-400 lowercase">(minimum ₹499)</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-5 text-lg font-black text-cyan-400">₹</span>
                  <input
                    type="number"
                    min="499"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="499"
                    className={`w-full rounded-2xl bg-black/50 border pl-11 pr-5 py-3.5 text-lg font-black text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition shadow-inner ${
                      amount !== "" && !isValidAmount
                        ? "border-red-500/80 focus:border-red-500 focus:ring-red-500"
                        : "border-white/15 focus:border-cyan-400 focus:ring-cyan-400"
                    }`}
                  />
                </div>
                {amount !== "" && !isValidAmount && (
                  <p className="text-xs text-red-400 mt-2 font-semibold flex items-center gap-1.5 animate-pulse">
                    ⚠️ Minimum contribution amount is ₹499
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-300 mb-2">
                  Message <span className="text-gray-500 font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a note or dedication with our team..."
                  className="w-full rounded-2xl bg-black/50 border border-white/15 px-5 py-3.5 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition shadow-inner resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid}
                className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 py-4 text-base font-black text-black shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] disabled:opacity-40 disabled:pointer-events-none disabled:hover:scale-100 flex items-center justify-center gap-2.5 cursor-pointer mt-4"
              >
                <Heart className="h-5 w-5 fill-black text-black" />
                Support the Mission
                <ArrowRight className="h-4 w-4 text-black font-black" />
              </button>

              <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-gray-400 font-medium">
                <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Direct contribution to student server infrastructure and free tools.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
