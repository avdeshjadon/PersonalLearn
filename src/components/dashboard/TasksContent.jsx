import React, { useState } from 'react';
import { useTasks } from '../../hooks';
import { Plus, Edit2, Trash2, CheckCircle, Circle, X } from 'lucide-react';

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

  const pendingTasks = tasks.filter(t => t.status === 'pending');
  const completedTasks = tasks.filter(t => t.status === 'completed');
  const uncompletedTasks = tasks.filter(t => t.status === 'uncompleted');

  return (
    <div className="tasks-container" style={{ padding: '20px 40px', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>Your Tasks</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Manage your daily goals and track your progress.</p>
      </header>

      <div style={{ backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', marginBottom: '32px' }}>
        <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '12px' }}>
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="What needs to be done today?"
            style={{ 
              flex: 1, 
              padding: '16px', 
              borderRadius: '12px', 
              border: '1px solid var(--border-color)', 
              backgroundColor: 'var(--bg-primary)', 
              color: 'var(--text-primary)',
              fontSize: '16px',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
          />
          <button 
            type="submit"
            style={{ 
              padding: '0 24px', 
              backgroundColor: 'var(--accent-color)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'opacity 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            <Plus size={20} /> Add Task
          </button>
        </form>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Pending Tasks */}
        <section>
          <h2 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', display: 'inline-block' }}></span>
            To Do ({pendingTasks.length})
          </h2>
          {pendingTasks.length === 0 ? (
             <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>No pending tasks. You're all caught up!</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {pendingTasks.map(task => (
                <TaskItem key={task.id} task={task} toggle={toggleTaskCompletion} del={deleteTask} startEditing={startEditing} editingId={editingId} editTitle={editTitle} setEditTitle={setEditTitle} saveEdit={saveEdit} cancelEdit={cancelEdit} />
              ))}
            </div>
          )}
        </section>

        {/* Completed Tasks */}
        {completedTasks.length > 0 && (
          <section>
            <h2 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }}></span>
              Completed ({completedTasks.length})
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', opacity: 0.7 }}>
              {completedTasks.map(task => (
                <TaskItem key={task.id} task={task} toggle={toggleTaskCompletion} del={deleteTask} startEditing={startEditing} editingId={editingId} editTitle={editTitle} setEditTitle={setEditTitle} saveEdit={saveEdit} cancelEdit={cancelEdit} />
              ))}
            </div>
          </section>
        )}

        {/* Uncompleted/Failed Tasks */}
        {uncompletedTasks.length > 0 && (
          <section>
            <h2 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }}></span>
              Missed ({uncompletedTasks.length})
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', opacity: 0.7 }}>
              {uncompletedTasks.map(task => (
                <TaskItem key={task.id} task={task} toggle={toggleTaskCompletion} del={deleteTask} startEditing={startEditing} editingId={editingId} editTitle={editTitle} setEditTitle={setEditTitle} saveEdit={saveEdit} cancelEdit={cancelEdit} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function TaskItem({ task, toggle, del, startEditing, editingId, editTitle, setEditTitle, saveEdit, cancelEdit }) {
  const isEditing = editingId === task.id;

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '16px 20px', 
      backgroundColor: 'var(--bg-primary)', 
      borderRadius: '12px', 
      border: '1px solid var(--border-color)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
      transition: 'all 0.2s ease',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
        <button 
          onClick={() => toggle(task.id)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: task.status === 'completed' ? '#10B981' : task.status === 'uncompleted' ? '#EF4444' : 'var(--text-secondary)' }}
        >
          {task.status === 'completed' ? <CheckCircle size={24} /> : <Circle size={24} />}
        </button>
        
        {isEditing ? (
          <div style={{ display: 'flex', flex: 1, gap: '8px' }}>
            <input 
              autoFocus
              type="text" 
              value={editTitle} 
              onChange={e => setEditTitle(e.target.value)}
              onKeyDown={e => { if(e.key === 'Enter') saveEdit(); if(e.key === 'Escape') cancelEdit(); }}
              style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--accent-color)', backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)', outline: 'none' }}
            />
            <button onClick={saveEdit} style={{ background: 'var(--accent-color)', color: 'white', border: 'none', borderRadius: '6px', padding: '0 12px', cursor: 'pointer' }}>Save</button>
            <button onClick={cancelEdit} style={{ background: 'transparent', color: 'var(--text-secondary)', border: 'none', cursor: 'pointer' }}><X size={20}/></button>
          </div>
        ) : (
          <span style={{ 
            fontSize: '16px', 
            color: 'var(--text-primary)', 
            textDecoration: task.status === 'completed' || task.status === 'uncompleted' ? 'line-through' : 'none',
            flex: 1
          }}>
            {task.title}
          </span>
        )}
      </div>

      {!isEditing && (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            onClick={() => startEditing(task)}
            style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '8px', borderRadius: '6px', transition: 'background 0.2s' }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Edit2 size={18} />
          </button>
          <button 
            onClick={() => del(task.id)}
            style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '8px', borderRadius: '6px', transition: 'background 0.2s' }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Trash2 size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
