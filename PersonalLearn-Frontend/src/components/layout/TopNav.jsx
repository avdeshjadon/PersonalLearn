import { memo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/**
 * Top navigation bar with folder tabs and toggles
 */
const TopNav = memo(({
  currentFolder,
  onFolderSwitch,
  onMenuToggle,
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
  const navigate = useNavigate();

  return (
    <div className="folder-nav-top">
      <div className="nav-container-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
        
        {/* Row 1: Back & Actions */}
        <div className="nav-top-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <button className="back-to-dashboard-btn-new" onClick={() => navigate('/')} style={{
            display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: 'none', color: 'var(--md-text)', fontSize: '15px', fontWeight: '600', cursor: 'pointer', padding: '8px 0'
          }}>
            <i className="fa-solid fa-arrow-left"></i>
            <span className="desktop-only-text">Dashboard</span>
          </button>
          
          <div className="nav-actions-new" style={{ display: 'flex', gap: '8px' }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="menu-toggle"
              title="Toggle menu"
              onClick={onMenuToggle}
              style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--md-code-bg)', border: '1px solid var(--md-border)', color: 'var(--md-text)' }}
            >
              <i className="fa-solid fa-bars"></i>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`dark-toggle ${isBookmarked ? 'active' : ''}`}
              style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'var(--md-code-bg)', border: '1px solid var(--md-border)', color: isBookmarked ? 'var(--accent)' : 'var(--muted)' }}
              title={isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
              onClick={onBookmarkToggle}
            >
              <i className={isBookmarked ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'}></i>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`dark-toggle ${isPresentationMode ? 'active' : ''}`}
              style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'var(--md-code-bg)', border: '1px solid var(--md-border)', color: isPresentationMode ? 'var(--accent)' : 'var(--muted)' }}
              title={isPresentationMode ? 'Exit focus mode (Esc)' : 'Focus mode'}
              onClick={onPresentationToggle}
            >
              <i className={isPresentationMode ? 'fa-solid fa-compress' : 'fa-solid fa-expand'}></i>
            </motion.button>
          </div>
        </div>

        {/* Row 2: Search */}
        <div className="nav-bottom-row" style={{ width: '100%' }}>
          <div className="search-bar" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: 'var(--md-code-bg)', 
            borderRadius: '100px', 
            padding: '10px 20px',
            border: '1px solid var(--md-border)',
            width: '100%',
            transition: 'all 0.2s ease',
            boxSizing: 'border-box'
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

      </div>
    </div>
  );
});

TopNav.displayName = 'TopNav';
export default TopNav;
