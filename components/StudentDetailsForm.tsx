"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { User, Phone, GraduationCap, BookOpen, Mail, Calendar, Megaphone, ShieldQuestion, KeyRound, ArrowRight, X, LogIn, UserPlus } from "lucide-react";

import { CLASS_OPTIONS, BOARD_OPTIONS } from "@/lib/studentOptions";

const DISCOVERY_OPTIONS = [
  "Google Search",
  "YouTube",
  "Instagram",
  "Friend / Classmate",
  "Teacher / Coaching",
  "Advertisement",
  "Other",
];

const SECURITY_QUESTIONS = [
  "What is your mother's maiden name?",
  "What was the name of your first school?",
  "What is your favourite teacher's name?",
  "What is the name of your home town?",
  "What was your childhood nickname?",
];

// Indian phone: 10 digits, optionally prefixed with +91 or 0
const PHONE_REGEX = /^(?:\+91|0)?[6-9]\d{9}$/;

/**
 * Hash the security answer before storing so the raw answer never touches the
 * database. Normalised (trimmed + lowercased) so recovery comparisons are
 * case/whitespace insensitive, then SHA-256'd via the Web Crypto API.
 * NOTE: this is an unsalted hash — see report for the residual limitation.
 */
async function hashSecurityAnswer(answer: string): Promise<string> {
  const normalized = answer.trim().toLowerCase();
  const bytes = new TextEncoder().encode(normalized);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

type StudentDetails = {
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  class_standard: string;
  board_program: string;
  discovery_source: string;
  security_question: string;
  security_answer: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onComplete: (details: StudentDetails) => void;
  /** Pre-fill with auth user email if available */
  userEmail?: string;
  /** Selected program (base key) — used to return the user here after login */
  programKey?: string;
};

type AuthState = "checking" | "authed" | "anon";

export default function StudentDetailsForm({ open, onClose, onComplete, userEmail, programKey }: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState(userEmail || "");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [classStd, setClassStd] = useState("");
  const [boardProg, setBoardProg] = useState("");
  const [discovery, setDiscovery] = useState("");
  const [securityQ, setSecurityQ] = useState("");
  const [securityA, setSecurityA] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [authState, setAuthState] = useState<AuthState>("checking");

  // Check auth on open; only load existing profile data for signed-in users.
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    (async () => {
      setAuthState("checking");
      const { data: { user } } = await supabase.auth.getUser();
      if (cancelled) return;
      if (!user) {
        setAuthState("anon");
        return;
      }
      setAuthState("authed");
      const { data } = await supabase
        .from("profiles")
        .select("full_name, email, phone, date_of_birth, class_standard, board_program, discovery_source, security_question")
        .eq("id", user.id)
        .maybeSingle();
      if (cancelled || !data) return;
      if (data.full_name) setFullName(data.full_name);
      if (data.email) setEmail(data.email);
      else if (userEmail) setEmail(userEmail);
      if (data.phone) setPhone(data.phone);
      if (data.date_of_birth) setDob(data.date_of_birth);
      if (data.class_standard) setClassStd(data.class_standard);
      if (data.board_program) setBoardProg(data.board_program);
      if (data.discovery_source) setDiscovery(data.discovery_source);
      if (data.security_question) setSecurityQ(data.security_question);
      // security_answer is intentionally NOT prefilled — it is stored hashed.
    })();
    return () => { cancelled = true; };
  }, [open, userEmail]);

  // ESC key closes the modal
  const handleClose = useCallback(() => {
    if (!saving) onClose();
  }, [saving, onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    // Lock background scroll while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, handleClose]);

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!fullName.trim()) e.full_name = "Full name is required.";
    if (!phone.trim()) {
      e.phone = "Phone number is required.";
    } else if (!PHONE_REGEX.test(phone.trim().replace(/\s/g, ""))) {
      e.phone = "Enter a valid 10-digit Indian phone number.";
    }
    if (!email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      e.email = "Enter a valid email address.";
    }
    if (!dob) e.date_of_birth = "Date of birth is required.";
    if (!classStd) e.class_standard = "Please select your class.";
    if (!boardProg) e.board_program = "Please select your board or exam.";
    if (!discovery) e.discovery_source = "Please tell us how you found us.";
    if (!securityQ) e.security_question = "Please choose a security question.";
    if (!securityA.trim()) e.security_answer = "Security answer is required.";
    if (!confirmed) e.confirmed = "Please confirm your details are correct.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;
    setSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // Session expired between opening the form and submitting — surface the
        // sign-in prompt instead of a dead-end "reload" error.
        setAuthState("anon");
        setSaving(false);
        return;
      }
      const details: StudentDetails = {
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim().replace(/\s/g, ""),
        date_of_birth: dob,
        class_standard: classStd,
        board_program: boardProg,
        discovery_source: discovery,
        security_question: securityQ,
        // Never persist the raw answer — store a hash.
        security_answer: await hashSecurityAnswer(securityA),
      };
      const { error } = await supabase
        .from("profiles")
        .upsert({
          id: user.id,
          ...details,
          updated_at: new Date().toISOString(),
        });
      if (error) {
        setErrors({ form: "Could not save details. Please try again." });
        setSaving(false);
        return;
      }
      onComplete(details);
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setSaving(false);
    }
  }

  if (!open) return null;

  // Return the user to their selected program on the pricing page after auth.
  const nextUrl = programKey ? `/pricing?program=${encodeURIComponent(programKey)}` : "/pricing";
  const signInHref = `/auth/signin?next=${encodeURIComponent(nextUrl)}`;
  const signUpHref = `/auth/signup?next=${encodeURIComponent(nextUrl)}`;

  const inputBase =
    "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-cyan-500/50 focus:outline-none transition";
  const labelBase =
    "flex items-center gap-1.5 text-[10px] text-white/60 font-bold uppercase tracking-wider mb-1.5";

  return (
    <div
      className="sb-modal-overlay fixed inset-0 z-[100] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="student-details-title"
    >
      <div
        className="sb-modal-panel relative flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-t-3xl border border-white/[0.08] bg-[#111827] shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close registration"
          className="absolute top-4 right-4 z-10 text-white/40 transition hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {authState === "checking" && (
          <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
            <div className="h-6 w-6 rounded-full border-2 border-white/20 border-t-cyan-400 animate-spin" />
            <p className="mt-4 text-xs text-white/50">Checking your account…</p>
          </div>
        )}

        {authState === "anon" && (
          <div className="px-6 pt-8 pb-8 sm:px-7">
            <div className="mb-5 pr-8">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Sign in required</p>
              <h3 id="student-details-title" className="text-xl font-black mt-1">Almost there</h3>
            </div>
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 p-4">
              <LogIn className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
              <p className="text-[12px] text-white/70 leading-relaxed">
                Please sign in or create an account before continuing to payment.
                Your program will be waiting for you when you return.
              </p>
            </div>
            <div className="space-y-2.5">
              <a
                href={signInHref}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5"
              >
                <LogIn className="h-4 w-4" /> Sign In
              </a>
              <a
                href={signUpHref}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <UserPlus className="h-4 w-4" /> Create Account
              </a>
            </div>
          </div>
        )}

        {authState === "authed" && (
        <>
        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-6 pt-7 pb-5 sm:px-7">
          <div className="mb-6 pr-8">
            <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Step 1 of 2</p>
            <h3 id="student-details-title" className="text-xl font-black mt-1">Student Registration</h3>
            <p className="text-[11px] text-white/50 mt-1">
              Required before payment. Used for account recovery and subscription management.
            </p>
          </div>

          {errors.form && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-[11px] text-red-400 font-semibold">
              {errors.form}
            </div>
          )}

          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className={labelBase}>
                <User className="h-3 w-3" /> Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter student's full name"
                className={inputBase}
              />
              {errors.full_name && <p className="text-[10px] text-red-400 mt-1">{errors.full_name}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className={labelBase}>
                <Phone className="h-3 w-3" /> Phone Number
              </label>
              <div className="flex items-center rounded-xl border border-white/10 bg-black/40 overflow-hidden focus-within:border-cyan-500/50 transition">
                <span className="px-3 text-xs text-white/30 font-bold border-r border-white/10">+91</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  maxLength={15}
                  className="flex-1 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none"
                />
              </div>
              {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <label className={labelBase}>
                <Mail className="h-3 w-3" /> Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@example.com"
                className={inputBase}
              />
              {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
            </div>

            {/* Date of Birth */}
            <div>
              <label className={labelBase}>
                <Calendar className="h-3 w-3" /> Date of Birth
              </label>
              <input
                type="date"
                value={dob}
                max={new Date().toISOString().split("T")[0]}
                onChange={(e) => setDob(e.target.value)}
                className={`${inputBase} [color-scheme:dark]`}
              />
              {errors.date_of_birth && <p className="text-[10px] text-red-400 mt-1">{errors.date_of_birth}</p>}
            </div>

            {/* Class / Standard */}
            <div>
              <label className={labelBase}>
                <GraduationCap className="h-3 w-3" /> Class / Standard
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {CLASS_OPTIONS.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setClassStd(c.value)}
                    className={`py-2 rounded-xl text-[11px] font-bold transition ${
                      classStd === c.value
                        ? "bg-cyan-500 text-black"
                        : "bg-white/5 border border-white/5 text-white/50 hover:bg-white/10"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              {errors.class_standard && <p className="text-[10px] text-red-400 mt-1">{errors.class_standard}</p>}
            </div>

            {/* Board / Exam Program */}
            <div>
              <label className={labelBase}>
                <BookOpen className="h-3 w-3" /> Board / Exam
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {BOARD_OPTIONS.map((b) => (
                  <button
                    key={b.value}
                    type="button"
                    onClick={() => setBoardProg(b.value)}
                    className={`py-2 rounded-xl text-[11px] font-bold transition ${
                      boardProg === b.value
                        ? "bg-cyan-500 text-black"
                        : "bg-white/5 border border-white/5 text-white/50 hover:bg-white/10"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
              {errors.board_program && <p className="text-[10px] text-red-400 mt-1">{errors.board_program}</p>}
            </div>

            {/* Discovery Source */}
            <div>
              <label className={labelBase}>
                <Megaphone className="h-3 w-3" /> How did you hear about Synergic Bond?
              </label>
              <select
                value={discovery}
                onChange={(e) => setDiscovery(e.target.value)}
                className={`${inputBase} appearance-none cursor-pointer`}
              >
                <option value="" disabled>Select an option</option>
                {DISCOVERY_OPTIONS.map((d) => (
                  <option key={d} value={d} className="bg-[#111827]">{d}</option>
                ))}
              </select>
              {errors.discovery_source && <p className="text-[10px] text-red-400 mt-1">{errors.discovery_source}</p>}
            </div>

            {/* Security Question */}
            <div>
              <label className={labelBase}>
                <ShieldQuestion className="h-3 w-3" /> Security Question
              </label>
              <select
                value={securityQ}
                onChange={(e) => setSecurityQ(e.target.value)}
                className={`${inputBase} appearance-none cursor-pointer`}
              >
                <option value="" disabled>Choose a question</option>
                {SECURITY_QUESTIONS.map((q) => (
                  <option key={q} value={q} className="bg-[#111827]">{q}</option>
                ))}
              </select>
              {errors.security_question && <p className="text-[10px] text-red-400 mt-1">{errors.security_question}</p>}
            </div>

            {/* Security Answer */}
            <div>
              <label className={labelBase}>
                <KeyRound className="h-3 w-3" /> Security Answer
              </label>
              <input
                type="text"
                value={securityA}
                onChange={(e) => setSecurityA(e.target.value)}
                placeholder="Your answer (remember this for recovery)"
                autoComplete="off"
                className={inputBase}
              />
              {errors.security_answer && <p className="text-[10px] text-red-400 mt-1">{errors.security_answer}</p>}
            </div>
          </div>
        </div>

        {/* Sticky footer — confirmation + continue stay visible */}
        <div className="shrink-0 border-t border-white/[0.08] bg-[#111827] px-6 pt-4 pb-6 sm:px-7">
          <label className="flex items-start gap-2.5 mb-4 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-0.5 rounded border-white/10 bg-black/50 text-cyan-500 focus:ring-0 focus:ring-offset-0 h-3.5 w-3.5"
            />
            <span className="text-[10px] text-white/70 leading-normal">
              I confirm that the above information is correct.
            </span>
          </label>
          {errors.confirmed && <p className="text-[10px] text-red-400 -mt-2 mb-3">{errors.confirmed}</p>}

          <button
            onClick={handleSubmit}
            disabled={saving}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {saving ? "Saving..." : "Continue to Payment"}
            {!saving && <ArrowRight className="h-4 w-4" />}
          </button>

          <p className="text-[9px] text-white/30 text-center mt-3 leading-relaxed">
            Your details are stored securely and used for account recovery, subscription management, and support.
          </p>
        </div>
        </>
        )}
      </div>
    </div>
  );
}
