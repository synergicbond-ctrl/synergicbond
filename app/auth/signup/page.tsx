export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

        <h1 className="text-3xl font-bold">
          Create Account
        </h1>

        <p className="mt-2 text-white/60">
          Join SYNERGIC BOND Chemistry OS.
        </p>

        <div className="mt-8 space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
          />

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

          <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 font-semibold text-black">
            Create Account
          </button>

        </div>

      </div>
    </main>
  );
}
