"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { siteUrl } from "@/lib/siteUrl";
import Link from "next/link";
import { trackBetaEvent } from "@/lib/betaAnalyticsClient";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // Email-confirmation ("magic") link must return to the production
          // callback (not localhost) so the code is exchanged and the user
          // lands signed-in on their subscription dashboard.
          emailRedirectTo: siteUrl("/auth/callback?next=/dashboard/subscription"),
        },
      });

      if (error) throw error;

      if (data.user) {
        const { error: profileError } = await supabase
          .from("profiles")
          .upsert({
            id: data.user.id,
            full_name: name,
            email: data.user.email,
            updated_at: new Date().toISOString(),
          });

        if (profileError) throw profileError;
      }

      trackBetaEvent("signup", { method: "email" }, "/auth/signup");
      window.setTimeout(() => {
        router.push("/dashboard");
      }, 50);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred during sign up.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 text-[var(--foreground)]">
      <div className="w-full max-w-md rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-8">
        <div className="text-center">
          <h1 className="text-3xl font-black tracking-tight text-[var(--accent)]">
            Chemistry OS
          </h1>
          <p className="mt-2 text-sm text-[var(--text-muted)]">Register Account</p>
        </div>

        {error && (
          <div className="mt-6 rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-200">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)]">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none focus:border-[var(--accent)]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)]">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none focus:border-[var(--accent)]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)]">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none focus:border-[var(--accent)]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[var(--accent)] py-4 font-semibold text-[var(--background)] transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-[var(--accent)] hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
