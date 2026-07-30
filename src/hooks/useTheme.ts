import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'jg-theme';

/** Read whatever the pre-paint bootstrap in index.html already resolved. */
const readInitial = (): Theme => {
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'dark' || attr === 'light') return attr;
  return 'light';
};

/**
 * Theme lives as [data-theme] on <html> so the custom properties cascade to
 * fixed chrome and portals too, exactly as in the design source. The choice is
 * persisted, and the system preference seeds the first visit.
 */
export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitial);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* Storage can be unavailable (private mode); the attribute still applies. */
    }
  }, [theme]);

  /* Follow the OS only while the visitor has not made an explicit choice. */
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (stored) return;

    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light');
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
