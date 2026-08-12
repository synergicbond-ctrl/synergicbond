'use client';

import React from 'react';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="px-4 py-2 bg-[var(--surface)] hover:bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-2xl text-[10px] font-extrabold uppercase tracking-widest text-[var(--foreground)] transition flex items-center gap-2 cursor-pointer"
    >
      {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}
