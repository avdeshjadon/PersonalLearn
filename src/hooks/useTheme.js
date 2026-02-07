import { useState, useCallback, useEffect } from 'react';
import logger from '../utils/logger';

/**
 * Custom hook for managing theme (dark mode)
 */
export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('retro-dark') === '1';
  });

  // Initialize on mount
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      logger.info('Theme', 'Dark mode enabled');
    } else {
      logger.info('Theme', 'Light mode enabled');
    }
    // Fade in body
    requestAnimationFrame(() => {
      document.body.classList.add('js-fadein');
    });
  }, []);

  const toggleDark = useCallback(() => {
    setIsDark((prev) => {
      const newValue = !prev;
      document.body.classList.toggle('dark', newValue);
      localStorage.setItem('retro-dark', newValue ? '1' : '0');
      logger.success('Theme Changed', newValue ? 'Dark' : 'Light');
      return newValue;
    });
  }, []);

  return { isDark, toggleDark };
};

export default useTheme;
