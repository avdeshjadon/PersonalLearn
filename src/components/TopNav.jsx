import { memo } from 'react';
import HighlighterTool from './HighlighterTool';

/**
 * Top navigation bar with folder tabs and toggles
 */
const TopNav = memo(({
  currentFolder,
  onFolderSwitch,
  onMenuToggle,
  onDarkToggle,
  isDark,
  // Highlighter props
  highlighter,
}) => {
  return (
    <div className="folder-nav-top">
      <div className="nav-container">
        <div className="nav-buttons">
          <button
            className={`folder-btn ${currentFolder === 'java' ? 'active' : ''}`}
            onClick={() => onFolderSwitch('java')}
          >
            <span>Java</span>
          </button>
          <button
            className={`folder-btn ${currentFolder === 'advanced-java' ? 'active' : ''}`}
            onClick={() => onFolderSwitch('advanced-java')}
          >
            <span>Advanced Java</span>
          </button>
          <button
            className={`folder-btn ${currentFolder === 'oops' ? 'active' : ''}`}
            onClick={() => onFolderSwitch('oops')}
          >
            <span>OOPs</span>
          </button>
          <button
            className={`folder-btn ${currentFolder === 'interview' ? 'active' : ''}`}
            onClick={() => onFolderSwitch('interview')}
          >
            <span>Interview</span>
          </button>
        </div>
        <div className="nav-actions">
          {/* Highlighter Tool */}
          {highlighter && (
            <HighlighterTool
              isOpen={highlighter.isToolOpen}
              isActive={highlighter.isActive}
              activeColor={highlighter.activeColor}
              isEraser={highlighter.isEraser}
              colors={highlighter.colors}
              onToggle={highlighter.toggleTool}
              onClose={highlighter.closeTool}
              onSelectColor={highlighter.selectColor}
              onToggleEraser={highlighter.toggleEraser}
              onDeactivate={highlighter.deactivate}
            />
          )}
          <button
            className="menu-toggle"
            title="Toggle menu"
            aria-label="Toggle menu"
            onClick={onMenuToggle}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <button
            className="dark-toggle"
            title="Toggle dark mode"
            aria-label="Toggle dark mode"
            onClick={onDarkToggle}
          >
            <i className={isDark ? 'fa-solid fa-sun' : 'fa-regular fa-moon'}></i>
          </button>
        </div>
      </div>
    </div>
  );
});

TopNav.displayName = 'TopNav';

export default TopNav;
