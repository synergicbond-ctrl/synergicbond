"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

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

      router.push("/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred during sign up.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-black tracking-tight">
            Chemistry <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">OS</span>
          </h1>
          <p className="mt-2 text-sm text-white/50">Register Account</p>
        </div>

        {error && (
          <div className="mt-6 rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-200">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/60">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-white/60">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-white/60">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 py-4 font-semibold text-black transition hover:brightness-110 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/60">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-cyan-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
