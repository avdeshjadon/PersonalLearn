import { useState, useCallback } from 'react';

/**
 * Custom hook for managing sidebar state
 */
export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState({});

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const newValue = !prev;
      document.body.classList.toggle('sidebar-open', newValue);
      return newValue;
    });
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove('sidebar-open');
  }, []);

  const toggleGroup = useCallback((groupIdx) => {
    setExpandedGroups((prev) => {
      // Close all other groups, toggle clicked one
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
      });
      newState[groupIdx] = !prev[groupIdx];
      return newState;
    });
  }, []);

  const expandGroup = useCallback((groupIdx) => {
    setExpandedGroups((prev) => ({ ...prev, [groupIdx]: true }));
  }, []);

  const resetExpanded = useCallback(() => {
    setExpandedGroups({});
  }, []);

  return {
    isOpen,
    expandedGroups,
    toggle,
    close,
    toggleGroup,
    expandGroup,
    resetExpanded,
  };
};

export default useSidebar;
