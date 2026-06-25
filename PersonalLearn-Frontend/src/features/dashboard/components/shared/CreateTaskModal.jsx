import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { useTasks } from '../../../../hooks';
import { springSnappy } from '../../../../utils/springs';

export function CreateTaskModal({ isOpen, onClose }) {
  const { addTask } = useTasks();
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;
    addTask(taskTitle);
    setTaskTitle('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={springSnappy}
            className="bg-[var(--bg-card)] backdrop-blur-xl p-6 rounded-2xl shadow-2xl relative z-10 w-full max-w-lg overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-secondary)] transition-colors focus:outline-none"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Create New Task</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                autoFocus
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="What needs to be done?"
                className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] focus:border-orange-300 focus:bg-[var(--bg-primary)] focus:ring-2 focus:ring-orange-100 text-[var(--text-primary)] text-base transition-all duration-200 outline-none placeholder:text-[var(--text-secondary)] font-medium"
              />
              <div className="flex justify-end gap-3 mt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] rounded-xl font-medium transition-colors focus:outline-none"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={!taskTitle.trim()}
                  className="px-6 py-2.5 bg-[#D97757] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold shadow-sm transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none"
                >
                  <Plus size={18} strokeWidth={3} /> Add Task
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
