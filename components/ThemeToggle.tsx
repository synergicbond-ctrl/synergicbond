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
