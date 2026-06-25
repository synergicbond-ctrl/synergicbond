import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 max-w-4xl mx-auto space-y-12 animate-fadeIn">
      <nav className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <Link href="/" className="text-xs font-black tracking-widest text-indigo-400 uppercase">Synergic Bond</Link>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1">🙏 Support Free Education</h1>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">Your contribution helps thousands of students access premium, world-class chemistry education for free.</p>
        </div>
        <ThemeToggle />
      </nav>

      <section className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl space-y-8">
        <div className="space-y-2 text-center max-w-md mx-auto">
          <h2 className="font-black text-2xl tracking-tight">Help Build the Largest Chemistry Platform</h2>
          <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Global Education Mission Fund</p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-xs font-bold text-slate-400">
            <span>Fundraising Goal: $50,000</span>
            <span className="text-indigo-400 font-extrabold">42% funded</span>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
            <div className="w-[42%] h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-indigo-500/50 font-extrabold text-sm transition text-center space-y-1.5 cursor-pointer">
            <span className="block text-xl">💳</span>
            <span className="block text-slate-100">Credit / Debit Card</span>
          </button>
          <button className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-indigo-500/50 font-extrabold text-sm transition text-center space-y-1.5 cursor-pointer">
            <span className="block text-xl">🅿️</span>
            <span className="block text-slate-100">PayPal</span>
          </button>
          <button className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-indigo-500/50 font-extrabold text-sm transition text-center space-y-1.5 cursor-pointer">
            <span className="block text-xl">📱</span>
            <span className="block text-slate-100">UPI / QR Transfer</span>
          </button>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center">
          <span className="text-[9px] font-black tracking-widest uppercase text-slate-500 block mb-2">Secure Global Contributions</span>
          <p className="text-[10px] text-slate-400">Recurring or one-time support options available at checkout.</p>
        </div>
      </section>
    </main>
  );
}
