import { useState, useCallback, useEffect } from 'react';
import logger from '../utils/logger';

export const THEMES = ['light', 'dark', 'ocean', 'dracula', 'solarized', 'forest', 'monokai', 'synthwave', 'nord'];

const applyThemeToDOM = (themeName) => {
  // Remove all existing theme classes
  THEMES.forEach(t => document.body.classList.remove(`theme-${t}`));
  document.body.classList.remove('dark');

  // Add the new theme class
  document.body.classList.add(`theme-${themeName}`);

  // If it's a dark theme variant, also add the generic .dark class
  const isDarkVariant = themeName !== 'light' && themeName !== 'solarized';
  if (isDarkVariant) {
    document.body.classList.add('dark');
  }
};

/**
 * Custom hook for managing themes across the app
 */
export const useTheme = () => {
  const [theme, setThemeState] = useState(() => {
    let saved = localStorage.getItem('app-theme');
    
    // Fallback for old retro-dark users
    if (!saved) {
      const oldDark = localStorage.getItem('retro-dark');
      saved = oldDark === '1' ? 'dark' : 'light';
    }

    applyThemeToDOM(saved);
    return saved;
  });

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.add('js-fadein');
      });
    });
    logger.info('Theme initialized', theme);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
    applyThemeToDOM(newTheme);
    localStorage.setItem('app-theme', newTheme);
    logger.success('Theme Changed', newTheme);
  }, []);

  const isDark = theme !== 'light' && theme !== 'solarized';

  // For compatibility with the TopNav toggle, just switch between light and dark
  const toggleDark = useCallback(() => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
  }, [isDark, setTheme]);

  return { theme, setTheme, isDark, toggleDark, THEMES };
};

export default useTheme;
