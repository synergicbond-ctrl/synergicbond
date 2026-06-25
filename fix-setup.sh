# 1. Recreate fixed ThemeContext with safe SSR fallback
mkdir -p components
cat > components/ThemeContext.tsx << 'INLINE_EOF'
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  if (!mounted) {
    return <div style={{ background: '#020617', minHeight: '100vh' }} />;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
INLINE_EOF

# 2. Recreate perfectly styled ThemeToggle component
cat > components/ThemeToggle.tsx << 'INLINE_EOF'
'use client';

import React from 'react';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-2xl text-[10px] font-extrabold uppercase tracking-widest text-slate-200 transition flex items-center gap-2 cursor-pointer"
    >
      {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}
INLINE_EOF

# 3. Recreate clean dark-mode Root Layout
cat > app/layout.tsx << 'INLINE_EOF'
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Synergic Bond",
  description: "Operating System Search • Learn • Practice • Master",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased min-h-screen`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
INLINE_EOF

# 4. Recreate pristine dark-mode Homepage
cat > app/page.tsx << 'INLINE_EOF'
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <nav className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-indigo-400">SYNERGIC BOND</h1>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Syllabus-Grounded Chemistry Engine</p>
        </div>
        <ThemeToggle />
      </nav>

      <header className="space-y-4 text-center max-w-2xl mx-auto py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          The Chemistry Operating System
        </h1>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Search • Learn • Practice • Master
        </p>
        <p className="text-slate-500 text-xs font-semibold">One platform for NEET, JEE, GATE & InChO.</p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="/chapter/atomic-structure" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm rounded-2xl shadow-sm transition cursor-pointer">
            🚀 Start Learning
          </Link>
          <Link href="/vault" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 font-extrabold text-sm rounded-2xl transition border border-slate-700 cursor-pointer">
            🧪 Explore Vault
          </Link>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8">
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
          <span className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-black text-base">🟢</span>
          <h3 className="font-extrabold text-sm text-white">NEET</h3>
          <p className="text-[10px] text-slate-400 leading-relaxed">NCERT-focused preparation</p>
        </div>
        
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
          <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-black text-base">🟡</span>
          <h3 className="font-extrabold text-sm text-white">JEE</h3>
          <p className="text-[10px] text-slate-400 leading-relaxed">Advanced problem solving</p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
          <span className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-black text-base">🟠</span>
          <h3 className="font-extrabold text-sm text-white">GATE</h3>
          <p className="text-[10px] text-slate-400 leading-relaxed">Deep theoretical chemistry</p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
          <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-black text-base">🔴</span>
          <h3 className="font-extrabold text-sm text-white">InChO</h3>
          <p className="text-[10px] text-slate-400 leading-relaxed">Olympiad-level mastery</p>
        </div>
      </section>
    </main>
  );
}
INLINE_EOF

echo "Running TypeScript compiler & production build..."
npx tsc --noEmit && npm run build

