"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

type Status = "checking" | "ready" | "invalid" | "saving" | "done";

export default function ResetPasswordPage() {
  const [status, setStatus] = useState<Status>("checking");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Detect the Supabase recovery session that the email link carries in the URL
  // (PKCE ?code= or #access_token hash). createBrowserClient processes it on
  // load; we listen for PASSWORD_RECOVERY / SIGNED_IN and confirm via getSession.
  useEffect(() => {
    let settled = false;
    const markReady = () => {
      settled = true;
      setStatus((s) => (s === "checking" || s === "invalid" ? "ready" : s));
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        if (event === "PASSWORD_RECOVERY" || (event === "SIGNED_IN" && session)) {
          markReady();
        }
      }
    );

    supabase.auth.getSession().then(({ data }: { data: { session: Session | null } }) => {
      if (data.session) markReady();
    });

    // If no recovery session materialises, the link is expired/invalid.
    const timer = setTimeout(() => {
      if (!settled) setStatus((s) => (s === "checking" ? "invalid" : s));
    }, 3500);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timer);
    };
  }, []);

  async function handleReset() {
    setError("");
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setStatus("saving");
    const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });
    if (updateError) {
      setError(updateError.message || "Could not update password. Please try again.");
      setStatus("ready");
      return;
    }
    setStatus("done");
    // Recovery session is now a full session — land on the subscription dashboard.
    window.location.href = "/dashboard/subscription";
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-cyan-500/50 focus:outline-none transition";

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 py-10 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8 shadow-2xl">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">Account Recovery</p>
          <h1 className="mt-1 text-2xl font-black">Set a New Password</h1>
        </div>

        {status === "checking" && (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-cyan-400" />
            <p className="mt-4 text-xs text-white/50">Verifying your reset link…</p>
          </div>
        )}

        {status === "invalid" && (
          <div className="py-4 text-center">
            <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm font-semibold text-red-300">
              Reset link expired or invalid. Request a new password reset.
            </div>
            <Link
              href="/auth/signin"
              className="inline-block w-full rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5"
            >
              Back to Sign In
            </Link>
          </div>
        )}

        {(status === "ready" || status === "saving" || status === "done") && (
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-white/60">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-white/60">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                autoComplete="new-password"
                onKeyDown={(e) => { if (e.key === "Enter") handleReset(); }}
                className={inputClass}
              />
            </div>

            {error && <p className="text-xs text-red-400">{error}</p>}

            <button
              onClick={handleReset}
              disabled={status === "saving" || status === "done"}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-50"
            >
              {status === "saving" ? "Updating…" : status === "done" ? "Redirecting…" : "Update Password"}
            </button>

            <p className="text-center text-[11px] text-white/40">
              Remembered it?{" "}
              <Link href="/auth/signin" className="text-cyan-300 hover:underline">
                Back to Sign In
              </Link>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
