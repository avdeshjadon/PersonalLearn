import { useState, useCallback, useRef } from 'react';
import { useNotes, useTheme, useSidebar, useHighlighter } from './hooks';
import { 
  Sidebar,
  InterviewSidebar,
  TopNav, 
  Article, 
  FooterNav, 
  SiteFooter, 
  Overlay,
  TableOfContents 
} from './components';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [interviewContent, setInterviewContent] = useState('');
  const [interviewLoading, setInterviewLoading] = useState(false);
  const contentRef = useRef(null);

  // Custom hooks
  const { isDark, toggleDark } = useTheme();
  const sidebar = useSidebar();
  
  const {
    currentFolder,
    manifest,
    structure,
    currentSlug,
    articleContent,
    isLoading,
    prevItem,
    nextItem,
    navigateTo,
    switchFolder,
  } = useNotes(sidebar.expandGroup);

  // Highlighter hook
  const highlighter = useHighlighter(currentSlug);

  // Handle navigation with scroll to top
  const handleNavigate = useCallback((slug) => {
    navigateTo(slug);
    
    // Smooth scroll to top
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Close sidebar on mobile
    if (window.innerWidth <= 800) {
      sidebar.close();
    }
  }, [navigateTo, sidebar]);

  // Handle folder switch
  const handleFolderSwitch = useCallback(async (folder) => {
    if (folder === 'interview') {
      setInterviewLoading(true);
      try {
        const response = await fetch('/notes/interview/00-interview-questions.md');
        const text = await response.text();
        const { marked } = await import('marked');
        setInterviewContent(marked(text));
      } catch (error) {
        setInterviewContent('<p>Error loading interview content</p>');
      }
      setInterviewLoading(false);
      sidebar.close();
    }
    switchFolder(folder);
    sidebar.resetExpanded();
  }, [switchFolder, sidebar]);

  // Brand text based on current folder
  const brandText = currentFolder === 'java' ? 'Java Notes' 
                  : currentFolder === 'oops' ? 'OOPs Notes' 
                  : currentFolder === 'advanced-java' ? 'Advanced Java Notes'
                  : 'Interview Prep';

  // Check if interview mode
  const isInterviewMode = currentFolder === 'interview';

  return (
    <div className="app">
      {/* Overlay for mobile sidebar */}
      <Overlay isActive={sidebar.isOpen} onClick={sidebar.close} />

      {/* Sidebar - hidden for interview */}
      {!isInterviewMode && (
        <Sidebar
          isOpen={sidebar.isOpen}
          brandText={brandText}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          structure={structure}
          manifest={manifest}
          expandedGroups={sidebar.expandedGroups}
          currentSlug={currentSlug}
          onGroupToggle={sidebar.toggleGroup}
          onTopicClick={handleNavigate}
        />
      )}

      {/* Interview Sidebar */}
      {isInterviewMode && (
        <InterviewSidebar
          isOpen={sidebar.isOpen}
          onClose={sidebar.close}
        />
      )}

      {/* Main Content */}
      <main className="content" ref={contentRef}>
        {/* Top Navigation */}
        <TopNav
          currentFolder={currentFolder}
          onFolderSwitch={handleFolderSwitch}
          onMenuToggle={sidebar.toggle}
          onDarkToggle={toggleDark}
          isDark={isDark}
          highlighter={highlighter}
        />

        {/* Article Content */}
        {isInterviewMode ? (
          <Article 
            content={interviewContent} 
            isLoading={interviewLoading}
            highlighterActive={highlighter.isActive}
            highlighterColor={highlighter.activeColor}
            isEraser={highlighter.isEraser}
            onMouseUp={highlighter.handleMouseUp}
            onEraserClick={highlighter.handleEraserClick}
            containerRef={highlighter.containerRef}
          />
        ) : (
          <Article 
            content={articleContent} 
            isLoading={isLoading}
            highlighterActive={highlighter.isActive}
            highlighterColor={highlighter.activeColor}
            isEraser={highlighter.isEraser}
            onMouseUp={highlighter.handleMouseUp}
            onEraserClick={highlighter.handleEraserClick}
            containerRef={highlighter.containerRef}
          />
        )}

        {/* Footer Navigation - hidden for interview */}
        {!isInterviewMode && (
          <FooterNav
            prevItem={prevItem}
            nextItem={nextItem}
            onNavigate={handleNavigate}
          />
        )}

        {/* Site Footer */}
        <SiteFooter />
      </main>

      {/* Table of Contents - floating button (outside content for proper fixed positioning) */}
      <TableOfContents 
        content={isInterviewMode ? interviewContent : articleContent} 
      />
    </div>
  );
}

export default App;
