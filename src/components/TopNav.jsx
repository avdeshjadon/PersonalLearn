import { memo } from 'react';
import { motion } from 'framer-motion';

/**
 * Top navigation bar with folder tabs and toggles
 */
const TopNav = memo(({
  currentFolder,
  onFolderSwitch,
  onMenuToggle,
  onDarkToggle,
  isDark,
  isPresentationMode,
  onPresentationToggle,
}) => {
  return (
    <div className="folder-nav-top">
      <div className="nav-container">
        <div className="nav-buttons">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`folder-btn ${currentFolder === 'java' ? 'active' : ''}`}
            onClick={() => onFolderSwitch('java')}
          >
            <span>Java</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`folder-btn ${currentFolder === 'oops' ? 'active' : ''}`}
            onClick={() => onFolderSwitch('oops')}
          >
            <span>OOPs</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`folder-btn ${currentFolder === 'interview' ? 'active' : ''}`}
            onClick={() => onFolderSwitch('interview')}
          >
            <span>Interview</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`folder-btn ${currentFolder === 'postman' ? 'active' : ''}`}
            onClick={() => onFolderSwitch('postman')}
          >
            <span>Postman</span>
          </motion.button>
        </div>
        <div className="nav-actions">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="menu-toggle"
            title="Toggle menu"
            aria-label="Toggle menu"
            onClick={onMenuToggle}
          >
            <i className="fa-solid fa-bars"></i>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="dark-toggle"
            title="Toggle dark mode"
            aria-label="Toggle dark mode"
            onClick={onDarkToggle}
          >
            <i className={isDark ? 'fa-solid fa-sun' : 'fa-regular fa-moon'}></i>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`presentation-nav-btn${isPresentationMode ? ' active' : ''}`}
            title={isPresentationMode ? 'Exit focus mode (Esc)' : 'Focus mode — hide everything'}
            aria-label={isPresentationMode ? 'Exit focus mode' : 'Enter focus mode'}
            onClick={onPresentationToggle}
          >
            <i className={isPresentationMode ? 'fa-solid fa-compress' : 'fa-solid fa-expand'}></i>
          </motion.button>
        </div>
      </div>
    </div>
  );
});

TopNav.displayName = 'TopNav';

export default TopNav;
