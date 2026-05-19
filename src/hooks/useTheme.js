import { useState, useCallback, useEffect } from 'react';
import logger from '../utils/logger';

/**
 * Custom hook for managing theme (dark mode)
 */
export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const dark = localStorage.getItem('retro-dark') === '1';
    // Apply synchronously before first paint to prevent flash
    if (dark) document.body.classList.add('dark');
    return dark;
  });

  // Fade in after mount
  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.add('js-fadein');
      });
    });
    logger.info('Theme', isDark ? 'Dark mode enabled' : 'Light mode enabled');
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
