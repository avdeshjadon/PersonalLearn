/**
 * Premium Console Logger
 * Beautiful, styled console logs for debugging
 */

const isDev = import.meta.env.DEV;

// Color palette
const colors = {
  primary: '#2b6f6f',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  debug: '#8b5cf6',
  muted: '#6b7280',
};

// Style generators
const getStyle = (bgColor, textColor = '#fff') => `
  background: ${bgColor};
  color: ${textColor};
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 11px;
`;

const getMessageStyle = (color) => `
  color: ${color};
  font-weight: 500;
`;

/**
 * Logger object with styled console methods
 */
const logger = {
  /**
   * Log app info/branding
   */
  brand: () => {
    if (!isDev) return;
    console.log(
      '%c📚 Avdesh Notes %cv1.0.0',
      'background: linear-gradient(135deg, #2b6f6f, #1a4f4f); color: #fff; padding: 8px 16px; border-radius: 6px; font-weight: bold; font-size: 14px;',
      'color: #2b6f6f; font-weight: 500; margin-left: 8px;'
    );
  },

  /**
   * Success log
   */
  success: (label, ...args) => {
    if (!isDev) return;
    console.log(
      `%c✓ ${label}`,
      getStyle(colors.success),
      ...args
    );
  },

  /**
   * Info log
   */
  info: (label, ...args) => {
    if (!isDev) return;
    console.log(
      `%cℹ ${label}`,
      getStyle(colors.info),
      ...args
    );
  },

  /**
   * Warning log
   */
  warn: (label, ...args) => {
    if (!isDev) return;
    console.warn(
      `%c⚠ ${label}`,
      getStyle(colors.warning, '#000'),
      ...args
    );
  },

  /**
   * Error log
   */
  error: (label, ...args) => {
    if (!isDev) return;
    console.error(
      `%c✕ ${label}`,
      getStyle(colors.error),
      ...args
    );
  },

  /**
   * Debug log
   */
  debug: (label, ...args) => {
    if (!isDev) return;
    console.log(
      `%c⬢ ${label}`,
      getStyle(colors.debug),
      ...args
    );
  },

  /**
   * Group logs
   */
  group: (label, fn) => {
    if (!isDev) return;
    console.groupCollapsed(
      `%c▸ ${label}`,
      getStyle(colors.primary)
    );
    fn();
    console.groupEnd();
  },

  /**
   * Performance timing
   */
  time: (label) => {
    if (!isDev) return;
    console.time(`⏱ ${label}`);
  },

  timeEnd: (label) => {
    if (!isDev) return;
    console.timeEnd(`⏱ ${label}`);
  },

  /**
   * Table log
   */
  table: (data, label) => {
    if (!isDev) return;
    if (label) {
      console.log(`%c${label}`, getMessageStyle(colors.muted));
    }
    console.table(data);
  },

  /**
   * Clear console
   */
  clear: () => {
    if (!isDev) return;
    console.clear();
  },
};

export default logger;
