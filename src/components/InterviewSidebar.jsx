import { memo, useState } from 'react';
import { getInterviewStructure } from '../data/interviewStructure';

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
      <div className="brand">Interview Prep</div>
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
            <ul className={`group-list ${expandedGroups[gidx] ? '' : 'collapsed'}`}>
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
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
});

InterviewSidebar.displayName = 'InterviewSidebar';

export default InterviewSidebar;
