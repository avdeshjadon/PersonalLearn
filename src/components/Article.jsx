import { memo, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
 * Article content component
 * Uses a content-derived key so the CSS fade-in animation fires
 * exactly once per navigation, not on every React re-render.
 */
const Article = memo(({ content, isLoading, onNavigate }) => {
  // Cheap stable key: first 64 chars of content. Changes only when
  // the actual article changes, which re-mounts the div and replays
  // the articleFadeIn / contentFadeIn animations.
  const contentRef = useRef(null);
  const contentKey = useMemo(
    () => (content ? content.slice(0, 64) : 'empty'),
    [content]
  );

  useEffect(() => {
    const container = contentRef.current;
    if (!container || !onNavigate) return;

    const handleClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const slug = link.getAttribute('href')?.slice(1);
      if (!slug) return;

      event.preventDefault();
      onNavigate(slug);
    };

    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
  }, [contentKey, onNavigate]);

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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ 
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="article-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </AnimatePresence>
    </article>
  );
});

Article.displayName = 'Article';

export default Article;
