import { memo, useEffect, useRef } from 'react';

/**
 * Loading spinner component
 */
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p className="loading-text">Loading content...</p>
  </div>
);

/**
 * Article content component with highlighter support
 */
const Article = memo(({ 
  content, 
  isLoading, 
  highlighterActive, 
  highlighterColor, 
  isEraser, 
  onMouseUp, 
  onEraserClick,
  containerRef,
}) => {
  const articleRef = useRef(null);

  // Sync the containerRef from the highlighter hook to our article-content div
  useEffect(() => {
    if (containerRef && articleRef.current) {
      containerRef.current = articleRef.current;
    }
  });

  // Determine cursor class
  const cursorClass = isEraser 
    ? 'hl-cursor-eraser' 
    : highlighterActive 
      ? 'hl-cursor-highlight' 
      : '';

  return (
    <article className="article">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div 
          ref={articleRef}
          className={`article-content ${cursorClass}`}
          dangerouslySetInnerHTML={{ __html: content }}
          onMouseUp={onMouseUp}
          onClick={onEraserClick}
        />
      )}
    </article>
  );
});

Article.displayName = 'Article';

export default Article;
