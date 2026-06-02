import { memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getNumberFromSlug, cleanTitle, filterStructure } from '../utils/helpers';

/**
 * Sidebar component with search and topic groups
 */
const Sidebar = memo(({
  isOpen,
  brandText,
  searchQuery,
  onSearchChange,
  structure,
  manifest,
  expandedGroups,
  currentSlug,
  onGroupToggle,
  onTopicClick,
}) => {
  // Filter structure based on search
  const filteredStructure = useMemo(
    () => filterStructure(structure, manifest, searchQuery),
    [structure, manifest, searchQuery]
  );

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="brand">{brandText}</div>
      <input
        type="text"
        className="search-input"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <nav className="sidebar-list">
        {filteredStructure.map((group, gidx) => (
          <div
            key={gidx}
            className="group"
            style={{
              animationDelay: `${gidx * 30}ms`,
            }}
          >
            <h4
              className={expandedGroups[gidx] ? 'expanded' : ''}
              onClick={() => onGroupToggle(gidx)}
            >
              {group.group}
            </h4>
            <AnimatePresence initial={false}>
              {expandedGroups[gidx] && (
                <motion.ul
                  className="group-list"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  {(group.items || []).map((slug) => {
                    const item = manifest.find((m) => m.slug === slug);
                if (!item) return null;
                const noteNum = getNumberFromSlug(item.slug);
                return (
                  <li key={item.slug}>
                    <a
                      className={`topic-link ${currentSlug === item.slug ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onTopicClick(item.slug);
                      }}
                    >
                      {noteNum ? `${noteNum}) ` : ''}
                      {cleanTitle(item.title)}
                    </a>
                  </li>
                );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
