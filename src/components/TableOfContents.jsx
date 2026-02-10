import { useState, useEffect, useCallback, memo } from 'react';

/**
 * Table of Contents component
 * Shows a floating button that reveals all topics/headings from current page
 */
const TableOfContents = memo(({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [headings, setHeadings] = useState([]);

  // Extract headings from HTML content
  useEffect(() => {
    if (!content) {
      setHeadings([]);
      return;
    }

    // Parse HTML and extract headings
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headingElements = doc.querySelectorAll('h1, h2, h3, h4');
    
    const extractedHeadings = Array.from(headingElements).map((heading, index) => {
      const text = heading.textContent.trim();
      const level = parseInt(heading.tagName.charAt(1));
      const id = heading.id || `heading-${index}`;
      
      return { text, level, id, index };
    });

    setHeadings(extractedHeadings);
  }, [content]);

  // Toggle panel
  const togglePanel = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // Close panel
  const closePanel = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle heading click - scroll to that heading
  const handleHeadingClick = useCallback((heading) => {
    // Find the heading in the actual DOM
    const articleContent = document.querySelector('.article-content');
    if (!articleContent) return;

    const allHeadings = articleContent.querySelectorAll('h1, h2, h3, h4');
    const targetHeading = allHeadings[heading.index];
    
    if (targetHeading) {
      // Add id if not present
      if (!targetHeading.id) {
        targetHeading.id = heading.id;
      }
      
      // Get the content container (scrollable element)
      const contentContainer = document.querySelector('.content');
      
      // Calculate offset for navbar (adjust this value based on your navbar height)
      const navbarOffset = 120; // pixels - increased for better visibility
      
      // Get heading position relative to content container
      const headingRect = targetHeading.getBoundingClientRect();
      const containerRect = contentContainer.getBoundingClientRect();
      
      // Calculate scroll position with offset
      const scrollTop = contentContainer.scrollTop + headingRect.top - containerRect.top - navbarOffset;
      
      // Smooth scroll with offset
      contentContainer.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
      
      // Highlight effect
      targetHeading.classList.add('toc-highlight');
      setTimeout(() => {
        targetHeading.classList.remove('toc-highlight');
      }, 2000);
    }
    
    // Close panel on mobile
    if (window.innerWidth <= 800) {
      closePanel();
    }
  }, [closePanel]);

  // Don't render if no headings
  if (headings.length === 0) {
    return null;
  }

  return (
    <>
      {/* Floating Button */}
      <button 
        className={`toc-fab ${isOpen ? 'toc-fab-active' : ''}`}
        onClick={togglePanel}
        aria-label="Table of Contents"
        title="Topics in this page"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="toc-overlay" onClick={closePanel}></div>
      )}

      {/* Panel */}
      <div className={`toc-panel ${isOpen ? 'toc-panel-open' : ''}`}>
        <div className="toc-header">
          <h3>📑 Topics</h3>
          <button className="toc-close" onClick={closePanel}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="toc-list">
          {headings.map((heading, idx) => (
            <button
              key={idx}
              className={`toc-item toc-level-${heading.level}`}
              onClick={() => handleHeadingClick(heading)}
            >
              {heading.level === 1 && '📌 '}
              {heading.level === 2 && '▸ '}
              {heading.level === 3 && '• '}
              {heading.level === 4 && '◦ '}
              {heading.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
});

TableOfContents.displayName = 'TableOfContents';

export default TableOfContents;
