import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for managing bookmarked notes
 */
export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('bookmarks');
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (e) {
        console.error('Failed to parse bookmarks from localStorage', e);
      }
    }
    return [];
  });

  // Save to localStorage whenever bookmarks change
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = useCallback((folder, slug, title) => {
    setBookmarks(prev => {
      // Avoid duplicates
      if (prev.some(b => b.folder === folder && b.slug === slug)) {
        return prev;
      }
      return [{
        id: `${folder}-${slug}`,
        folder,
        slug,
        title,
        addedAt: new Date().toISOString()
      }, ...prev];
    });
  }, []);

  const removeBookmark = useCallback((folder, slug) => {
    setBookmarks(prev => prev.filter(b => !(b.folder === folder && b.slug === slug)));
  }, []);

  const isBookmarked = useCallback((folder, slug) => {
    return bookmarks.some(b => b.folder === folder && b.slug === slug);
  }, [bookmarks]);

  const toggleBookmark = useCallback((folder, slug, title) => {
    if (isBookmarked(folder, slug)) {
      removeBookmark(folder, slug);
    } else {
      addBookmark(folder, slug, title);
    }
  }, [isBookmarked, addBookmark, removeBookmark]);

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
    toggleBookmark
  };
}

export default useBookmarks;
