import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getInterviewStructure } from '../../data/interviewStructure';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/**
 * Interview Sidebar with question navigation
 */
const InterviewSidebar = memo(({ isOpen, onClose }) => {
  const [expandedGroups, setExpandedGroups] = useState({ 0: true });
  const structure = getInterviewStructure();

  const toggleGroup = (index) => {
    setExpandedGroups(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const scrollToQuestion = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      const navbarHeight = 70; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const contentElement = document.querySelector('.content');
      if (contentElement) {
        const offsetPosition = element.offsetTop - navbarHeight;
        contentElement.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    // Close sidebar on mobile
    if (window.innerWidth <= 800) {
      onClose();
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Link to="/learning-hub" className="brand" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'color 0.2s ease' }} title="Back to Learning Hub">
        <ArrowLeft size={18} />
        Interview Prep
      </Link>
      <nav className="sidebar-list">
        {structure.map((group, gidx) => (
          <div
            key={gidx}
            className="group"
            style={{
              animationDelay: `${gidx * 30}ms`,
            }}
          >
            <h4
              className={expandedGroups[gidx] ? 'expanded' : ''}
              onClick={() => toggleGroup(gidx)}
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
                  {group.items.map((item) => (
                <li key={item.id}>
                  <a
                    className="topic-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToQuestion(item.anchor);
                    }}
                  >
                    {item.title}
                  </a>
                </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
    </aside>
  );
});

InterviewSidebar.displayName = 'InterviewSidebar';

export default InterviewSidebar;
