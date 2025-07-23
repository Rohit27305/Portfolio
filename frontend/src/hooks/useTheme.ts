import { useEffect } from 'react';

export const useThemeessage
Rohit.exe

DevOps Engineer passionate about cloud infrastructure, automation, and building scalable systems that drive innovation in the digital age.
Quick Navigation

 = () => {
  const theme = 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return { theme };
};