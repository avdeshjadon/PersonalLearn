import React, { useState } from 'react';
import { useTasks } from '../../../hooks';
import { Plus, Edit2, Trash2, CheckCircle, Circle, X, Calendar as CalendarIcon, CheckSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function TasksContent() {
  const { tasks, addTask, updateTask, deleteTask, toggleTaskCompletion } = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    addTask(newTaskTitle);
    setNewTaskTitle('');
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
  };

  const saveEdit = () => {
    if (editTitle.trim()) {
      updateTask(editingId, editTitle);
    }
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
  };

  const groupTasksByDate = (tasksList) => {
    const groups = {};
    tasksList.forEach(task => {
      const date = task.createdAt ? new Date(task.createdAt) : new Date();
      date.setHours(0, 0, 0, 0);
      const dateStr = date.toISOString();
      
      if (!groups[dateStr]) {
        groups[dateStr] = [];
      }
      groups[dateStr].push(task);
    });

    const sortedDates = Object.keys(groups).sort((a, b) => new Date(b) - new Date(a));
    
    return sortedDates.map(dateStr => {
      const dateObj = new Date(dateStr);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      const label = dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

      return {
        label,
        date: dateStr,
        tasks: groups[dateStr]
      };
    });
  };

  const taskGroups = groupTasksByDate(tasks);

  return (
    <div className="max-w-5xl w-full mx-auto px-6 py-6 min-h-full">
      <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-left">
        <div className="w-full">
          <h1 className="text-[40px] font-semibold text-[var(--text-primary)] tracking-[-1.5px] leading-[1.2] mb-1">My Tasks</h1>
        </div>
      </header>

      {/* Input Section */}
      <motion.div 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[var(--bg-card)] backdrop-blur-md p-6 rounded-2xl border border-[var(--border-color)] shadow-sm mb-8 relative overflow-hidden w-full"
      >
        <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-4 relative z-10">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="What's on your mind today?"
            className="flex-1 px-4 py-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] focus:border-orange-300 focus:bg-[var(--bg-primary)] focus:ring-2 focus:ring-orange-100 text-[var(--text-primary)] text-base transition-all duration-200 outline-none placeholder:text-[var(--text-secondary)] font-medium"
          />
          <button 
            type="submit"
            disabled={!newTaskTitle.trim()}
            className="px-6 py-3.5 bg-[#D97757] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold text-base shadow-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Plus size={20} strokeWidth={3} /> Add Task
          </button>
        </form>
      </motion.div>

      {/* Tasks List grouped by date */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-start w-full">
        <AnimatePresence mode="popLayout">
          {taskGroups.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full flex flex-col items-center justify-center py-10 text-[var(--text-secondary)]"
            >
              <div className="w-12 h-12 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center mb-3">
                <CheckSquare size={24} className="text-gray-300" strokeWidth={1.5} />
              </div>
              <p className="text-base font-semibold text-[var(--text-secondary)]">No tasks yet.</p>
            </motion.div>
          ) : (
            taskGroups.map((group) => (
              <motion.section 
                key={group.date}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--bg-card)] backdrop-blur-md p-3.5 rounded-xl border border-[var(--border-color)] shadow-sm w-full"
              >
                <div className="flex items-center mb-2 pb-1.5 border-b border-[var(--border-color)]">
                  <h2 className="text-[15px] font-bold text-[var(--text-primary)] tracking-tight">
                    {group.label}
                  </h2>
                </div>

                <div className="flex flex-col gap-0.5">
                  <AnimatePresence>
                    {group.tasks.map(task => (
                      <TaskItem 
                        key={task.id} 
                        task={task} 
                        toggle={toggleTaskCompletion} 
                        del={deleteTask} 
                        startEditing={startEditing} 
                        editingId={editingId} 
                        editTitle={editTitle} 
                        setEditTitle={setEditTitle} 
                        saveEdit={saveEdit} 
                        cancelEdit={cancelEdit} 
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </motion.section>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function TaskItem({ task, toggle, del, startEditing, editingId, editTitle, setEditTitle, saveEdit, cancelEdit }) {
  const isEditing = editingId === task.id;
  const isCompleted = task.status === 'completed';
  const isMissed = task.status === 'uncompleted';

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 2 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -5 }}
      className="group flex items-center justify-between py-1 transition-all duration-200"
    >
      <div className="flex items-center gap-2 flex-1 overflow-hidden">
        <button 
          onClick={() => toggle(task.id)}
          className={`flex-shrink-0 transition-colors duration-200 focus:outline-none ${
            isCompleted ? 'text-emerald-500' : 
            isMissed ? 'text-red-400' : 
            'text-gray-300 hover:text-orange-500'
          }`}
        >
          {isCompleted ? <CheckCircle size={16} strokeWidth={2.5} /> : <Circle size={16} strokeWidth={2.5} />}
        </button>
        
        {isEditing ? (
          <div className="flex flex-1 items-center gap-1.5">
            <input 
              autoFocus
              type="text" 
              value={editTitle} 
              onChange={e => setEditTitle(e.target.value)}
              onKeyDown={e => { if(e.key === 'Enter') saveEdit(); if(e.key === 'Escape') cancelEdit(); }}
              className="flex-1 px-1.5 py-0.5 rounded border border-orange-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-100 outline-none text-[var(--text-primary)] bg-white text-[13px] transition-all"
            />
            <button onClick={saveEdit} className="px-2 py-0.5 bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-bold rounded shadow-sm">Save</button>
            <button onClick={cancelEdit} className="p-0.5 text-[var(--text-secondary)] hover:text-[var(--text-secondary)] rounded"><X size={12}/></button>
          </div>
        ) : (
          <span className={`text-[13px] font-medium truncate transition-all duration-200 ${
            isCompleted ? 'text-[#10B981]' : 
            isMissed ? 'text-red-400 line-through' : 
            'text-[var(--text-primary)]'
          }`}>
            {task.title}
          </span>
        )}
      </div>

      {!isEditing && (
        <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pl-1">
          <button 
            onClick={() => startEditing(task)}
            className="p-1 text-[var(--text-secondary)] hover:text-orange-500 rounded"
            title="Edit Task"
          >
            <Edit2 size={13} strokeWidth={2.5} />
          </button>
          <button 
            onClick={() => del(task.id)}
            className="p-1 text-[var(--text-secondary)] hover:text-red-500 rounded"
            title="Delete Task"
          >
            <Trash2 size={13} strokeWidth={2.5} />
          </button>
        </div>
      )}
    </motion.div>
  );
}

