import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

        <h1 className="text-3xl font-bold">
          Student Portal
        </h1>

        <p className="mt-2 text-white/60">
          Sign in to continue your chemistry journey.
        </p>

        <div className="mt-8 space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
          />

          <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 font-semibold text-black">
            Sign In
          </button>

          <div className="pt-4 text-center">
            <p className="text-white/50">
              New to SYNERGIC BOND?
            </p>

            <Link
              href="/auth/signup"
              className="mt-3 inline-block text-cyan-300 hover:text-cyan-200"
            >
              Create Account →
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}
