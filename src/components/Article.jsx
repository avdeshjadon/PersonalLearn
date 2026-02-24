import { memo } from 'react';

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
 * Article content component
 */
const Article = memo(({ content, isLoading }) => {
  return (
    <article className="article">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </article>
  );
});

Article.displayName = 'Article';

export default Article;
