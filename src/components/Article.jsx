import { memo, useMemo } from 'react';

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
const Article = memo(({ content, isLoading }) => {
  // Cheap stable key: first 64 chars of content. Changes only when
  // the actual article changes, which re-mounts the div and replays
  // the articleFadeIn / contentFadeIn animations.
  const contentKey = useMemo(
    () => (content ? content.slice(0, 64) : 'empty'),
    [content]
  );

  return (
    <article className="article">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div
          key={contentKey}
          className="article-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </article>
  );
});

Article.displayName = 'Article';

export default Article;
