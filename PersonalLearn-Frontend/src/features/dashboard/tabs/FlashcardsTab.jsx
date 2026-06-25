import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFlashcards } from '../../../hooks';
import { springSmooth, springBouncy } from '../../../utils/springs';
import { Plus, Trash2, RefreshCw } from 'lucide-react';

export function FlashcardsContent() {
  const { flashcards, isLoading, addFlashcard, removeFlashcard } = useFlashcards();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const [flippedCards, setFlippedCards] = useState({});

  const handleToggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAddFlashcard = (e) => {
    e.preventDefault();
    if (!newQuestion.trim() || !newAnswer.trim()) return;
    
    addFlashcard(newQuestion, newAnswer, newCategory || 'General');
    
    setNewQuestion('');
    setNewAnswer('');
    setShowAddForm(false);
  };

  return (
    <div className="max-w-5xl w-full mx-auto px-6 py-6 min-h-full">
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between text-left gap-4">
        <div className="w-full">
          <h1 className="text-[40px] font-semibold text-[var(--text-primary)] tracking-[-1.5px] leading-[1.2] mb-1">
            Flashcards
          </h1>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium shadow-sm transition-all duration-200 shrink-0"
          style={{ backgroundColor: 'var(--accent-color)' }}
        >
          {showAddForm ? 'Cancel' : <><Plus size={18} /> Add Card</>}
        </button>
      </header>

      <AnimatePresence>
        {showAddForm && (
          <motion.form
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: 'auto', marginBottom: 32 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            transition={springSmooth}
            className="bg-[var(--bg-card)] backdrop-blur-md p-6 rounded-2xl border border-[var(--border-color)] shadow-sm overflow-hidden"
            onSubmit={handleAddFlashcard}
          >
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4">Create New Flashcard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Question (Front)</label>
                <textarea
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="e.g. What is Polymorphism?"
                  className="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] focus:bg-[var(--bg-primary)] outline-none transition-all resize-none h-24 text-[var(--text-primary)]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Answer (Back)</label>
                <textarea
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  placeholder="e.g. Ability of different objects to respond to the same method call in their own way."
                  className="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] focus:bg-[var(--bg-primary)] outline-none transition-all resize-none h-24 text-[var(--text-primary)]"
                  required
                />
              </div>
            </div>
            <div className="mb-4 w-full md:w-1/2 md:pr-2">
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Category (Optional)</label>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="e.g. Java, System Design..."
                className="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] focus:bg-[var(--bg-primary)] outline-none transition-all text-[var(--text-primary)]"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-white font-medium shadow-sm transition-all"
                style={{ backgroundColor: 'var(--accent-color)' }}
              >
                Save Flashcard
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Flashcards Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <RefreshCw className="animate-spin text-gray-300" size={32} />
        </div>
      ) : flashcards.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-[var(--text-secondary)]">
          <div className="w-16 h-16 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center mb-4">
            <RefreshCw size={32} className="text-gray-300" />
          </div>
          <p className="text-lg font-semibold text-[var(--text-secondary)]">No flashcards yet.</p>
          <p className="text-sm text-[var(--text-secondary)] mt-2 text-center">Click "Add Card" to create your first flashcard!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          <AnimatePresence>
            {flashcards.map((card) => {
              const isFlipped = flippedCards[card.id] || false;

              return (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={springSmooth}
                  className="relative w-full aspect-[4/3] cursor-pointer group"
                  onClick={() => handleToggleFlip(card.id)}
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    className="w-full h-full relative preserve-3d"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={springBouncy}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* FRONT SIDE */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-[var(--bg-card)] backdrop-blur-md rounded-2xl border border-[var(--border-color)] shadow-sm p-6 flex flex-col items-center justify-center text-center shadow-hover transition-all">
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-xs font-bold uppercase tracking-wide">
                          {card.category || 'General'}
                        </span>
                      </div>
                      <button
                        className="absolute top-4 right-4 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFlashcard(card.id);
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                      <div className="w-full max-h-[75%] overflow-y-auto custom-scrollbar flex flex-col justify-center mt-8 mb-6 px-1">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] leading-snug break-words whitespace-pre-wrap w-full">{card.question}</h3>
                      </div>
                      <p className="absolute bottom-4 text-xs font-medium text-[var(--text-secondary)] flex items-center gap-1 bg-[var(--bg-card)] px-2 py-1 rounded-md">
                        <RefreshCw size={12} /> Click to flip
                      </p>
                    </div>

                    {/* BACK SIDE */}
                    <div 
                      className="absolute inset-0 w-full h-full backface-hidden rounded-2xl border shadow-sm p-6 flex flex-col items-center justify-center text-center shadow-hover transition-all"
                      style={{ 
                        transform: 'rotateY(180deg)', 
                        backgroundColor: 'var(--accent-color)',
                        borderColor: 'var(--accent-color)'
                      }}
                    >
                      <button
                        className="absolute top-4 right-4 p-2 text-white/50 hover:text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFlashcard(card.id);
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                      <div className="w-full max-h-full overflow-y-auto custom-scrollbar flex items-center justify-center py-4">
                        <p className="text-lg font-medium text-white leading-relaxed break-words whitespace-pre-wrap w-full">
                          {card.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
