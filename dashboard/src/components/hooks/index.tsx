import { useEffect, useState } from "react";

const THEME_KEY = "theme";

type Theme = 'light' | 'dark' | 'system';

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored as Theme;
  }
  return 'system';
}

export default function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    function apply(theme: Theme) {
      if (theme === 'dark') {
        root.classList.add('dark');
      } else if (theme === 'light') {
        root.classList.remove('dark');
      } else { // system
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    }

    apply(theme);

    // If 'system' theme, listen for OS / browser setting changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === 'system') {
        apply('system');
      }
    };
    mediaQuery.addEventListener('change', handler);
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [theme]);

  function setTheme(theme: Theme) {
    setThemeState(theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  return [theme, setTheme];
}
