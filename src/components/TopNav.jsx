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
  searchQuery,
  onSearchChange,
  matchCount,
  currentMatchIndex,
  onNextMatch,
  onPrevMatch,
  isBookmarked,
  onBookmarkToggle,
}) => {
  return (
    <div className="folder-nav-top">
      <div className="nav-container">
        <div className="nav-buttons" style={{ flex: 1, paddingRight: '20px' }}>
          <div className="search-bar" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: 'var(--bg-app)', 
            borderRadius: '100px', 
            padding: '10px 20px',
            border: '1px solid var(--md-border)',
            width: '100%',
            maxWidth: '600px',
            transition: 'all 0.2s ease'
          }}>
            <i className="fa-solid fa-search" style={{ color: 'var(--md-text-muted)', marginRight: '12px', fontSize: '15px' }}></i>
            <input 
              type="text" 
              placeholder="Find in page..." 
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{ 
                border: 'none', 
                background: 'transparent', 
                outline: 'none', 
                width: '100%', 
                color: 'var(--md-text)',
                fontSize: '15px',
                fontWeight: '500'
              }}
            />
            {searchQuery && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--md-text-muted)', fontSize: '13px', marginLeft: '8px' }}>
                <span style={{ whiteSpace: 'nowrap' }}>
                  {matchCount > 0 ? `${currentMatchIndex + 1} / ${matchCount}` : '0 / 0'}
                </span>
                <button onClick={onPrevMatch} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'inherit', padding: '0 4px' }}>
                  <i className="fa-solid fa-chevron-up"></i>
                </button>
                <button onClick={onNextMatch} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'inherit', padding: '0 4px' }}>
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
            )}
          </div>
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
            className={`dark-toggle ${isBookmarked ? 'active' : ''}`}
            style={{ color: isBookmarked ? '#D97757' : '' }}
            title={isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
            aria-label="Toggle bookmark"
            onClick={onBookmarkToggle}
          >
            <i className={isBookmarked ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'}></i>
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
