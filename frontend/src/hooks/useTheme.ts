import { useEffect } from 'react';

export const useTheme = () => {
  const theme = 'dark';

  useEffect(() => {
    // Always set dark theme
    const root = window.document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return { theme };
};