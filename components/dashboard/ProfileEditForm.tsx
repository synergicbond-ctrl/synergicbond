"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Pencil, X, Check, Loader2 } from "lucide-react";
import { CLASS_OPTIONS, BOARD_OPTIONS } from "@/lib/studentOptions";

// ─────────────────────────────────────────────────────────────────────────────
// Inline profile editor — updates ONLY the student-editable columns that exist
// on public.profiles (006/014/015): full_name, phone, date_of_birth,
// class_standard, board_program. Email is the auth identity (read-only here);
// role is service-role-only (migration 016 trigger). Writes go through the
// browser client under the "profiles_update_own" RLS policy.
// ─────────────────────────────────────────────────────────────────────────────

export interface EditableProfile {
  full_name: string;
  phone: string;
  date_of_birth: string; // YYYY-MM-DD or ""
  class_standard: string;
  board_program: string;
}

export default function ProfileEditForm({ userId, initial }: { userId: string; initial: EditableProfile }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<EditableProfile>(initial);

  const set = (k: keyof EditableProfile) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function save() {
    setSaving(true);
    setError(null);
    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        full_name: form.full_name.trim() || null,
        phone: form.phone.trim() || null,
        date_of_birth: form.date_of_birth || null,
        class_standard: form.class_standard || null,
        board_program: form.board_program || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId);
    setSaving(false);
    if (updateError) {
      setError("Could not save changes. Please try again.");
      return;
    }
    setOpen(false);
    router.refresh(); // re-render the server page with fresh profile data
  }

  if (!open) {
    return (
      <button
        onClick={() => { setForm(initial); setOpen(true); }}
        className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 font-bold text-xs hover:bg-cyan-500/20 transition"
      >
        <Pencil className="h-3.5 w-3.5" /> Edit Profile
      </button>
    );
  }

  const inputCls =
    "w-full rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400/50 outline-none px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 transition";
  const labelCls = "block text-[10px] font-black uppercase tracking-wider text-white/50 mb-1.5";

  return (
    <div className="w-full rounded-2xl border border-white/[0.08] bg-[#111827] p-5 mt-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-black text-sm">Edit Profile</h3>
        <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition" aria-label="Cancel editing">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls}>Full name</label>
          <input className={inputCls} value={form.full_name} onChange={(e) => set("full_name")(e.target.value)} placeholder="Your name" />
        </div>
        <div>
          <label className={labelCls}>Phone</label>
          <input className={inputCls} value={form.phone} onChange={(e) => set("phone")(e.target.value)} placeholder="10-digit mobile" inputMode="tel" />
        </div>
        <div>
          <label className={labelCls}>Date of birth</label>
          <input className={inputCls} type="date" value={form.date_of_birth} onChange={(e) => set("date_of_birth")(e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Class</label>
          <select className={inputCls} value={form.class_standard} onChange={(e) => set("class_standard")(e.target.value)}>
            <option value="">Select class</option>
            {CLASS_OPTIONS.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Board / Exam target</label>
          <select className={inputCls} value={form.board_program} onChange={(e) => set("board_program")(e.target.value)}>
            <option value="">Select target</option>
            {BOARD_OPTIONS.map((b) => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
        </div>
      </div>

      {error && <p className="text-xs text-rose-400 mt-3">{error}</p>}

      <div className="flex gap-3 mt-5">
        <button
          onClick={() => setOpen(false)}
          className="flex-1 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-white font-bold text-xs transition"
        >
          Cancel
        </button>
        <button
          onClick={save}
          disabled={saving}
          className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs transition disabled:opacity-50 flex items-center justify-center gap-1.5"
        >
          {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Check className="h-3.5 w-3.5" />}
          {saving ? "Saving…" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
