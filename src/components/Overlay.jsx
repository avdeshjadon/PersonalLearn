import { memo } from 'react';

/**
 * Sidebar overlay for mobile
 */
const Overlay = memo(({ isActive, onClick }) => (
  <div
    className={`sidebar-overlay ${isActive ? 'active' : ''}`}
    onClick={onClick}
  />
));

Overlay.displayName = 'Overlay';

export default Overlay;
