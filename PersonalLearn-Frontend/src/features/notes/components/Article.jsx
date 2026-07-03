import { memo, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { springSmooth } from "../../../utils/springs";

/**
 * Loading skeleton for smooth perceived performance
 */
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p className="loading-text">Loading content...</p>
  </div>
);

/**
 * Helper to highlight HTML string without breaking DOM
 */
const highlightHTML = (html, query, activeIndex) => {
  if (!html) return { html: "", totalMatches: 0 };
  if (!query || !query.trim()) return { html, totalMatches: 0 };

  const div = document.createElement("div");
  div.innerHTML = html;

  const searchStr = query.trim().toLowerCase();
  const escapedQuery = searchStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const regex = new RegExp(`(${escapedQuery})`, "gi");

  const treeWalker = document.createTreeWalker(
    div,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function (node) {
        if (
          node.parentNode.nodeName === "SCRIPT" ||
          node.parentNode.nodeName === "STYLE"
        ) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    },
    false,
  );

  const nodesToReplace = [];
  let currentNode;
  while ((currentNode = treeWalker.nextNode())) {
    if (currentNode.nodeValue.toLowerCase().includes(searchStr)) {
      nodesToReplace.push(currentNode);
    }
  }

  let totalMatches = 0;

  nodesToReplace.forEach((node) => {
    const text = node.nodeValue;
    const parent = node.parentNode;
    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    let match;

    // Reset regex index for each node
    regex.lastIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        fragment.appendChild(
          document.createTextNode(text.slice(lastIndex, match.index)),
        );
      }
      const mark = document.createElement("mark");
      mark.className = "search-highlight";

      if (totalMatches === activeIndex) {
        mark.className += " search-highlight-active";
      }

      mark.textContent = match[0];
      fragment.appendChild(mark);
      lastIndex = regex.lastIndex;
      totalMatches++;
    }

    if (lastIndex < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
    }

    parent.replaceChild(fragment, node);
  });

  return { html: div.innerHTML, totalMatches };
};

/**
 * Article content component
 */
const Article = memo(
  ({
    content,
    isLoading,
    onNavigate,
    searchQuery,
    currentMatchIndex,
    onMatchesFound,
  }) => {
    const contentRef = useRef(null);

    // Stable key for animations (safe for DOM attributes)
    const contentKey = useMemo(() => {
      if (!content) return "empty";
      let hash = 0;
      for (let i = 0; i < Math.min(content.length, 100); i++) {
        hash = (hash << 5) - hash + content.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
      }
      return `key-${Math.abs(hash)}-${content.length}`;
    }, [content]);

    // Parse and inject highlights into raw HTML
    const { html: highlightedContent, totalMatches } = useMemo(() => {
      return highlightHTML(content, searchQuery, currentMatchIndex);
    }, [content, searchQuery, currentMatchIndex]);

    // Report match count to parent
    useEffect(() => {
      if (onMatchesFound) {
        onMatchesFound(totalMatches);
      }
    }, [totalMatches, onMatchesFound]);

    // Handle internal link navigation
    useEffect(() => {
      const container = contentRef.current;
      if (!container || !onNavigate) return;

      const handleClick = (event) => {
        const link = event.target.closest('a[href^="#"]');
        if (!link) return;

        const slug = link.getAttribute("href")?.slice(1);
        if (!slug) return;

        event.preventDefault();
        onNavigate(slug);
      };

      container.addEventListener("click", handleClick);
      return () => container.removeEventListener("click", handleClick);
    }, [contentKey, onNavigate]);

    // Scroll to active match when it changes
    useEffect(() => {
      if (isLoading) return;

      let attempts = 0;
      let intervalId;

      const applyScroll = () => {
        const container = contentRef.current;
        if (
          !container ||
          container.getAttribute("data-content-key") !== contentKey ||
          totalMatches === 0
        ) {
          attempts++;
          if (attempts > 50) clearInterval(intervalId);
          return;
        }

        const activeMark = container.querySelector(".search-highlight-active");
        if (activeMark) {
          clearInterval(intervalId);
          activeMark.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          attempts++;
          if (attempts > 50) clearInterval(intervalId);
        }
      };

      intervalId = setInterval(applyScroll, 100);
      applyScroll();

      return () => clearInterval(intervalId);
    }, [
      currentMatchIndex,
      highlightedContent,
      totalMatches,
      isLoading,
      contentKey,
    ]);
    
    return (
      <article className="article">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <LoadingSpinner />
            </motion.div>
          ) : (
            <motion.div
              ref={contentRef}
              key={contentKey}
              data-content-key={contentKey}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={springSmooth}
              className="article-content"
              dangerouslySetInnerHTML={{ __html: highlightedContent }}
            />
          )}
        </AnimatePresence>
      </article>
    );
  },
);

Article.displayName = "Article";

export default Article;
