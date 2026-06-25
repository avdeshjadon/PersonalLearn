import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBookmarks } from '../../../hooks';
import { springSmooth } from '../../../utils/springs';
import { Bookmark, BookmarkMinus, Folder, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BookmarksContent() {
  const { bookmarks, removeBookmark } = useBookmarks();
  const navigate = useNavigate();

  const handleNavigateToNote = (folder, slug) => {
    navigate(`/learning/${folder}#${slug}`);
  };

  // Helper to format folder name cleanly
  const formatFolderName = (folder) => {
    switch(folder) {
      case 'java': return 'Java';
      case 'oops': return 'OOPs';
      case 'postman': return 'Postman API';
      case 'interview': return 'Interview Prep';
      default: return folder;
    }
  };

  return (
    <div className="max-w-5xl w-full mx-auto px-6 py-6 min-h-full">
      <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-left">
        <div className="w-full">
          <h1 className="text-[40px] font-semibold text-[var(--text-primary)] tracking-[-1.5px] leading-[1.2] mb-1">
            Bookmarks
          </h1>
        </div>
      </header>

      {/* Bookmarks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-start w-full">
        <AnimatePresence mode="popLayout">
          {bookmarks.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full flex flex-col items-center justify-center py-16 text-[var(--text-secondary)]"
            >
              <div className="w-16 h-16 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center mb-4">
                <Bookmark size={32} className="text-gray-300" strokeWidth={1.5} />
              </div>
              <p className="text-lg font-semibold text-[var(--text-secondary)]">No bookmarks yet.</p>
              <p className="text-sm text-[var(--text-secondary)] mt-2 text-center max-w-sm">
                Go to any note in the Learning Hub and click the bookmark icon to save it here for quick access.
              </p>
            </motion.div>
          ) : (
            bookmarks.map((bookmark) => (
              <motion.section 
                key={bookmark.id}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={springSmooth}
                className="bg-[var(--bg-card)] backdrop-blur-md p-4 rounded-xl border border-[var(--border-color)] shadow-sm w-full group hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col h-full"
                onClick={() => handleNavigateToNote(bookmark.folder, bookmark.slug)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[11px] font-bold uppercase tracking-wide">
                    <Folder size={12} strokeWidth={2.5} />
                    {formatFolderName(bookmark.folder)}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      removeBookmark(bookmark.folder, bookmark.slug);
                    }}
                    className="p-1.5 text-gray-300 hover:text-red-500 rounded-md hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                    title="Remove Bookmark"
                  >
                    <BookmarkMinus size={16} strokeWidth={2.5} />
                  </button>
                </div>

                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-[var(--text-primary)] leading-snug line-clamp-2 mb-1 group-hover:text-[#D97757] transition-colors">
                    {bookmark.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-2">
                    Added {new Date(bookmark.addedAt).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-[#D97757] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Read Note</span>
                  <ArrowRight size={16} strokeWidth={2.5} />
                </div>
              </motion.section>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
