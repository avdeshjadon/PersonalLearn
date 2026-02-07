import { useState, useCallback, useRef } from 'react';
import { useNotes, useTheme, useSidebar } from './hooks';
import { 
  Sidebar, 
  TopNav, 
  Article, 
  FooterNav, 
  SiteFooter, 
  Overlay 
} from './components';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
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
  const handleFolderSwitch = useCallback((folder) => {
    switchFolder(folder);
    sidebar.resetExpanded();
  }, [switchFolder, sidebar]);

  // Brand text based on current folder
  const brandText = currentFolder === 'java' ? 'Java Notes' : 'OOPs Notes';

  return (
    <div className="app">
      {/* Overlay for mobile sidebar */}
      <Overlay isActive={sidebar.isOpen} onClick={sidebar.close} />

      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="content" ref={contentRef}>
        {/* Top Navigation */}
        <TopNav
          currentFolder={currentFolder}
          onFolderSwitch={handleFolderSwitch}
          onMenuToggle={sidebar.toggle}
          onDarkToggle={toggleDark}
          isDark={isDark}
        />

        {/* Article Content */}
        <Article content={articleContent} isLoading={isLoading} />

        {/* Footer Navigation */}
        <FooterNav
          prevItem={prevItem}
          nextItem={nextItem}
          onNavigate={handleNavigate}
        />

        {/* Site Footer */}
        <SiteFooter />
      </main>
    </div>
  );
}

export default App;
