import { useState, useEffect, useCallback } from 'react';

const API_BASE = `${import.meta.env.VITE_API_URL || ''}/api`;

/**
 * Custom hook for fetching and calculating analytics data
 */
export function useAnalytics() {
  const [stats, setStats] = useState({
    tasks: { total: 0, completed: 0, pending: 0, completionRate: 0 },
    bookmarks: { total: 0 },
    flashcards: { total: 0, categories: [] }
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchAnalytics = useCallback(async () => {
    setIsLoading(true);
    try {
      const [tasksRes, bookmarksRes, flashcardsRes] = await Promise.all([
        fetch(`${API_BASE}/tasks`).catch(() => ({ ok: false })),
        fetch(`${API_BASE}/bookmarks`).catch(() => ({ ok: false })),
        fetch(`${API_BASE}/flashcards`).catch(() => ({ ok: false }))
      ]);

      let tasksData = [];
      let bookmarksData = [];
      let flashcardsData = [];

      if (tasksRes.ok) tasksData = await tasksRes.json();
      if (bookmarksRes.ok) bookmarksData = await bookmarksRes.json();
      if (flashcardsRes.ok) flashcardsData = await flashcardsRes.json();

      // Process Tasks
      const totalTasks = tasksData.length;
      const completedTasks = tasksData.filter(t => t.status === 'completed').length;
      const pendingTasks = totalTasks - completedTasks;
      const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

      // Process Flashcards Categories
      const categoryMap = {};
      flashcardsData.forEach(card => {
        const cat = card.category || 'General';
        categoryMap[cat] = (categoryMap[cat] || 0) + 1;
      });
      const categories = Object.keys(categoryMap).map(key => ({
        name: key,
        value: categoryMap[key]
      }));

      // Process Bookmarks Categories
      const bookmarkMap = {};
      bookmarksData.forEach(b => {
        const f = b.folder || 'General';
        bookmarkMap[f] = (bookmarkMap[f] || 0) + 1;
      });
      const bookmarkCategories = Object.keys(bookmarkMap).map(key => ({
        name: key,
        value: bookmarkMap[key]
      }));

      // Process Activity (Last 7 Days)
      const last7Days = Array.from({length: 7}).map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (6 - i));
        return {
          dateObj: d,
          name: d.toLocaleDateString('en-US', { weekday: 'short' }),
          items: 0
        };
      });

      const countActivity = (dataArray, dateField) => {
        dataArray.forEach(item => {
          if (!item[dateField]) return;
          const itemDate = new Date(item[dateField]);
          last7Days.forEach(day => {
            if (itemDate.getDate() === day.dateObj.getDate() && itemDate.getMonth() === day.dateObj.getMonth() && itemDate.getFullYear() === day.dateObj.getFullYear()) {
              day.items += 1;
            }
          });
        });
      };

      countActivity(tasksData, 'createdAt');
      countActivity(bookmarksData, 'addedAt');
      countActivity(flashcardsData, 'createdAt');

      const activityData = last7Days.map(day => ({ name: day.name, value: day.items }));

      setStats({
        tasks: { total: totalTasks, completed: completedTasks, pending: pendingTasks, completionRate },
        bookmarks: { total: bookmarksData.length, categories: bookmarkCategories },
        flashcards: { total: flashcardsData.length, categories },
        activity: activityData
      });
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  return {
    stats,
    isLoading,
    refreshAnalytics: fetchAnalytics
  };
}

export default useAnalytics;
