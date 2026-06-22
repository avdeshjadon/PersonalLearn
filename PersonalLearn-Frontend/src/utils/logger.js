/**
 * Simple Logger (Colors removed as requested)
 */

const isDev = import.meta.env.DEV;

const logger = {
  brand: () => {},
  success: () => {},
  info: () => {},
  warn: (label, ...args) => {
    if (isDev) console.warn(label, ...args);
  },
  error: (label, ...args) => {
    if (isDev) console.error(label, ...args);
  },
  debug: () => {},
  group: (label, fn) => {
    if (isDev) {
      console.groupCollapsed(label);
      fn();
      console.groupEnd();
    }
  },
  time: () => {},
  timeEnd: () => {},
  table: () => {},
  clear: () => {},
};

export default logger;
