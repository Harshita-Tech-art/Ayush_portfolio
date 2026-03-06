'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') || 'dark';
    setTheme(stored);
    applyTheme(stored);
  }, []);

  const applyTheme = (newTheme: string) => {
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.style.setProperty('--background', '#FFFFFF');
      document.documentElement.style.setProperty('--text', '#1F2937');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.style.setProperty('--background', '#0B0F19');
      document.documentElement.style.setProperty('--text', '#E5E7EB');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) return <>{children}</>;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
