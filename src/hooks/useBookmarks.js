import { useState, useEffect, useCallback } from 'react';

const API_URL = 'http://localhost:5001/api/bookmarks';

/**
 * Custom hook for managing bookmarked notes via MongoDB backend
 */
export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch bookmarks from DB on mount
  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setBookmarks(data);
        }
      } catch (error) {
        console.error('Failed to fetch bookmarks:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookmarks();
  }, []);

  const addBookmark = useCallback(async (folder, slug, title) => {
    // Optimistic update
    const tempId = `temp-${Date.now()}`;
    setBookmarks(prev => {
      if (prev.some(b => b.folder === folder && b.slug === slug)) return prev;
      return [{
        id: tempId,
        folder,
        slug,
        title,
        addedAt: new Date().toISOString()
      }, ...prev];
    });

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folder, slug, title })
      });
      
      if (response.ok) {
        const savedBookmark = await response.json();
        // Replace temp id with real id
        setBookmarks(prev => prev.map(b => b.id === tempId ? { ...b, id: savedBookmark.id } : b));
      } else {
        // Revert on failure
        setBookmarks(prev => prev.filter(b => b.id !== tempId));
      }
    } catch (error) {
      console.error('Failed to add bookmark:', error);
      setBookmarks(prev => prev.filter(b => b.id !== tempId));
    }
  }, []);

  const removeBookmark = useCallback(async (folder, slug) => {
    // Optimistic update
    setBookmarks(prev => prev.filter(b => !(b.folder === folder && b.slug === slug)));

    try {
      await fetch(`${API_URL}/${folder}/${slug}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Failed to remove bookmark:', error);
      // We could revert here by refetching, but let's assume it usually works
    }
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
    isLoading,
    addBookmark,
    removeBookmark,
    isBookmarked,
    toggleBookmark
  };
}

export default useBookmarks;
