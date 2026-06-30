'use client';

import React, { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light';

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | undefined>(undefined);

function subscribeToClientReady(callback: () => void) {
  callback();
  return () => {};
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mounted = useSyncExternalStore(
    subscribeToClientReady,
    () => true,
    () => false
  );
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

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
