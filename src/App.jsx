import { useState, useCallback, useRef, useEffect } from "react";
import { useNotes, useTheme, useSidebar } from "./hooks";
import {
  Sidebar,
  InterviewSidebar,
  TopNav,
  Article,
  FooterNav,
  SiteFooter,
  Overlay,
  TableOfContents,
} from "./components";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [interviewContent, setInterviewContent] = useState("");
  const [interviewLoading, setInterviewLoading] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const contentRef = useRef(null);

  // Global click sound effect using Web Audio API for zero latency
  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return; // Browser doesn't support Web Audio API
    
    const audioCtx = new AudioContext();
    let audioBuffer = null;

    // Fetch and decode the audio file once on mount
    fetch('/sound/click.wav')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
      .then(decodedAudio => {
        audioBuffer = decodedAudio;
      })
      .catch(e => console.debug('Error loading click sound:', e));

    const playClickSound = () => {
      if (!audioBuffer) return;
      
      // Browsers often suspend audio context until first user interaction
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      
      // Create a new source node for each click (extremely lightweight and zero-latency)
      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioCtx.destination);
      source.start(0);
    };
    
    document.addEventListener('mousedown', playClickSound);
    return () => document.removeEventListener('mousedown', playClickSound);
  }, []);

  // Sync state when user exits fullscreen via Esc / browser UI
  useEffect(() => {
    const handleFsChange = () => {
      if (!document.fullscreenElement) {
        setIsPresentationMode(false);
      }
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const handlePresentationToggle = useCallback(() => {
    if (!isPresentationMode) {
      // Enter fullscreen
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsPresentationMode(true);
    } else {
      // Exit fullscreen
      if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {});
      }
      setIsPresentationMode(false);
    }
  }, [isPresentationMode]);

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

  // Load interview content on mount if currentFolder is already 'interview' (e.g., after hard refresh)
  useEffect(() => {
    if (
      currentFolder === "interview" &&
      !interviewContent &&
      !interviewLoading
    ) {
      (async () => {
        setInterviewLoading(true);
        try {
          const response = await fetch(
            "/notes/interview/00-interview-questions.md",
          );
          const text = await response.text();
          const { marked } = await import("marked");
          setInterviewContent(marked(text));
        } catch (error) {
          setInterviewContent("<p>Error loading interview content</p>");
        }
        setInterviewLoading(false);
      })();
    }
  }, [currentFolder]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle navigation with scroll to top
  const handleNavigate = useCallback(
    (slug) => {
      navigateTo(slug);

      // Smooth scroll to top
      if (contentRef.current) {
        contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }

      // Close sidebar on mobile
      if (window.innerWidth <= 800) {
        sidebar.close();
      }
    },
    [navigateTo, sidebar],
  );

  // Handle folder switch
  const handleFolderSwitch = useCallback(
    async (folder) => {
      if (folder === "interview") {
        setInterviewLoading(true);
        try {
          const response = await fetch(
            "/notes/interview/00-interview-questions.md",
          );
          const text = await response.text();
          const { marked } = await import("marked");
          setInterviewContent(marked(text));
        } catch (error) {
          setInterviewContent("<p>Error loading interview content</p>");
        }
        setInterviewLoading(false);
        sidebar.close();
      }
      switchFolder(folder);
      sidebar.resetExpanded();
    },
    [switchFolder, sidebar],
  );

  // Brand text based on current folder
  const brandText =
    currentFolder === "java"
      ? "Java Notes"
      : currentFolder === "oops"
        ? "OOPs Notes"
        : currentFolder === "advanced-java"
          ? "Advanced Java Notes"
          : currentFolder === "postman"
            ? "Postman API"
            : "Interview Prep";

  // Check if interview mode
  const isInterviewMode = currentFolder === "interview";

  return (
    <div className={`app${isPresentationMode ? ' presentation-mode' : ''}`}>
      {/* Overlay for mobile sidebar */}
      <Overlay isActive={sidebar.isOpen} onClick={sidebar.close} />

      {/* Sidebar - hidden for interview or presentation mode */}
      {!isInterviewMode && !isPresentationMode && (
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
      {isInterviewMode && !isPresentationMode && (
        <InterviewSidebar isOpen={sidebar.isOpen} onClose={sidebar.close} />
      )}

      {/* Main Content */}
      <main className="content" ref={contentRef}>
        {/* Top Navigation */}
        {!isPresentationMode && (
          <TopNav
            currentFolder={currentFolder}
            onFolderSwitch={handleFolderSwitch}
            onMenuToggle={sidebar.toggle}
            onDarkToggle={toggleDark}
            isDark={isDark}
            isPresentationMode={isPresentationMode}
            onPresentationToggle={handlePresentationToggle}
          />
        )}

        {/* Article Content */}
        {isInterviewMode ? (
          <Article content={interviewContent} isLoading={interviewLoading} />
        ) : (
          <Article
            content={articleContent}
            isLoading={isLoading}
            onNavigate={handleNavigate}
          />
        )}

        {/* Footer Navigation - hidden for interview or presentation mode */}
        {!isInterviewMode && !isPresentationMode && (
          <FooterNav
            prevItem={prevItem}
            nextItem={nextItem}
            onNavigate={handleNavigate}
          />
        )}

        {/* Site Footer */}
        {!isPresentationMode && <SiteFooter />}
      </main>

      {/* Table of Contents - floating button (outside content for proper fixed positioning) */}
      {!isPresentationMode && (
        <TableOfContents
          content={isInterviewMode ? interviewContent : articleContent}
        />
      )}

      {/* Presentation Mode exit button (shown only in presentation mode, since TopNav is hidden) */}
      <button
        className={`presentation-exit-btn${isPresentationMode ? ' visible' : ''}`}
        title="Exit focus mode (Esc)"
        aria-label="Exit focus mode"
        onClick={handlePresentationToggle}
      >
        <i className="fa-solid fa-compress"></i>
      </button>
    </div>
  );
}

export default App;
