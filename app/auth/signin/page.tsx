"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignIn() {
    try {
      setLoading(true);
      setError("");

      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        setError(error.message);
        return;
      }

      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      setError("Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-8">

        <h1 className="text-3xl font-bold">Student Portal</h1>
        <p className="mt-2 text-white/60">Sign in to continue your chemistry journey.</p>

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            onClick={handleSignIn}
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 font-semibold text-black disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-white/10" />
            <span className="mx-3 text-white/30 text-xs">or</span>
            <div className="flex-grow border-t border-white/10" />
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 font-semibold text-white flex items-center justify-center gap-3 hover:bg-white/10 transition"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
              <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <button
            onClick={() => { localStorage.setItem("sb_guest", "1"); window.location.href = "/notes"; }}
            className="w-full rounded-xl border border-cyan-500/30 bg-cyan-950/30 py-3 font-semibold text-cyan-300 flex items-center justify-center gap-2 hover:bg-cyan-950/50 transition"
          >
            ⚡ Try as Guest — No Login Needed
          </button>
          <p className="text-center text-xs text-white/30">
            Guest access: Notes, Assignments, Quiz — no account required
          </p>

          <div className="text-center pt-4">
            <p className="text-white/50">New to SYNERGIC BOND?</p>
            <Link href="/auth/signup" className="mt-3 inline-block text-cyan-300">
              Create Account →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
