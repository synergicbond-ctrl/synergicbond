"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { User, Phone, GraduationCap, BookOpen, Mail, ArrowRight, X } from "lucide-react";

const CLASS_OPTIONS = [
  { value: "class-11", label: "Class 11" },
  { value: "class-12", label: "Class 12" },
  { value: "dropper", label: "Dropper / Repeater" },
];

const BOARD_OPTIONS = [
  { value: "cbse", label: "CBSE" },
  { value: "isc", label: "ISC / ICSE" },
  { value: "state-boards", label: "State Board" },
  { value: "neet", label: "NEET" },
  { value: "jee-main", label: "JEE Main" },
  { value: "jee-advanced", label: "JEE Advanced" },
];

// Indian phone: 10 digits, optionally prefixed with +91 or 0
const PHONE_REGEX = /^(?:\+91|0)?[6-9]\d{9}$/;

type StudentDetails = {
  full_name: string;
  email: string;
  phone: string;
  class_standard: string;
  board_program: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onComplete: (details: StudentDetails) => void;
  /** Pre-fill with auth user email if available */
  userEmail?: string;
};

export default function StudentDetailsForm({ open, onClose, onComplete, userEmail }: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState(userEmail || "");
  const [phone, setPhone] = useState("");
  const [classStd, setClassStd] = useState("");
  const [boardProg, setBoardProg] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Load existing profile data on mount
  useEffect(() => {
    if (!open || loaded) return;
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from("profiles")
        .select("full_name, email, phone, class_standard, board_program")
        .eq("id", user.id)
        .maybeSingle();
      if (data) {
        if (data.full_name) setFullName(data.full_name);
        if (data.email) setEmail(data.email);
        else if (userEmail) setEmail(userEmail);
        if (data.phone) setPhone(data.phone);
        if (data.class_standard) setClassStd(data.class_standard);
        if (data.board_program) setBoardProg(data.board_program);
      }
      setLoaded(true);
    })();
  }, [open, loaded, userEmail]);


  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!fullName.trim()) e.full_name = "Full name is required.";
    if (!classStd) e.class_standard = "Please select your class.";
    if (!boardProg) e.board_program = "Please select your board or exam.";
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
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;
    setSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setErrors({ form: "You must be signed in. Please reload and try again." });
        setSaving(false);
        return;
      }
      const details: StudentDetails = {
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim().replace(/\s/g, ""),
        class_standard: classStd,
        board_program: boardProg,
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative max-w-md w-full rounded-3xl bg-[#111827] border border-white/[0.08] p-7 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white">
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6">
          <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Step 1 of 2</p>
          <h3 className="text-xl font-black mt-1">Student Details</h3>
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
            <label className="flex items-center gap-1.5 text-[10px] text-white/60 font-bold uppercase tracking-wider mb-1.5">
              <User className="h-3 w-3" /> Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter student's full name"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-cyan-500/50 focus:outline-none transition"
            />
            {errors.full_name && <p className="text-[10px] text-red-400 mt-1">{errors.full_name}</p>}
          </div>

          {/* Class / Standard */}
          <div>
            <label className="flex items-center gap-1.5 text-[10px] text-white/60 font-bold uppercase tracking-wider mb-1.5">
              <GraduationCap className="h-3 w-3" /> Class / Standard
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {CLASS_OPTIONS.map((c) => (
                <button
                  key={c.value}
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
            <label className="flex items-center gap-1.5 text-[10px] text-white/60 font-bold uppercase tracking-wider mb-1.5">
              <BookOpen className="h-3 w-3" /> Board / Exam Program
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {BOARD_OPTIONS.map((b) => (
                <button
                  key={b.value}
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

          {/* Phone Number */}
          <div>
            <label className="flex items-center gap-1.5 text-[10px] text-white/60 font-bold uppercase tracking-wider mb-1.5">
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
            <label className="flex items-center gap-1.5 text-[10px] text-white/60 font-bold uppercase tracking-wider mb-1.5">
              <Mail className="h-3 w-3" /> Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@example.com"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-cyan-500/50 focus:outline-none transition"
            />
            {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={saving}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {saving ? "Saving..." : "Continue to Payment"}
          {!saving && <ArrowRight className="h-4 w-4" />}
        </button>

        <p className="text-[9px] text-white/30 text-center mt-3 leading-relaxed">
          Your details are stored securely and used for account recovery, subscription management, and support.
        </p>
      </div>
    </div>
  );
}
