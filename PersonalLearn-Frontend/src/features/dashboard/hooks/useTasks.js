import { useState, useEffect } from 'react';

const API_URL = `${import.meta.env.VITE_API_URL || ''}/api/tasks`;

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load and auto-update tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (res.ok) {
        let fetchedTasks = await res.json();
        
        // Auto-uncomplete tasks created before today
        let hasChanges = false;
        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);

        fetchedTasks = await Promise.all(fetchedTasks.map(async (task) => {
          if (task.status === 'pending') {
            const taskDate = new Date(task.createdAt);
            if (taskDate < startOfToday) {
              hasChanges = true;
              const updated = { ...task, status: 'uncompleted' };
              // update on backend too
              await fetch(`${API_URL}/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updated)
              });
              return updated;
            }
          }
          return task;
        }));

        setTasks(fetchedTasks);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim() })
      });
      if (res.ok) {
        const newTask = await res.json();
        setTasks(prev => [newTask, ...prev]);
        return newTask;
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTask = async (id, newTitle) => {
    try {
      setTasks(prev => prev.map(task => 
        task.id === id ? { ...task, title: newTitle } : task
      ));
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle })
      });
    } catch (error) {
      console.error('Error updating task:', error);
      fetchTasks(); // rollback on error
    }
  };

  const toggleTaskCompletion = async (id) => {
    try {
      let updatedTask = null;
      setTasks(prev => prev.map(task => {
        if (task.id === id) {
          if (task.status === 'completed') {
            updatedTask = { ...task, status: 'pending', completedAt: null };
          } else {
            updatedTask = { ...task, status: 'completed', completedAt: new Date().toISOString() };
          }
          return updatedTask;
        }
        return task;
      }));

      if (updatedTask) {
        await fetch(`${API_URL}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedTask)
        });
      }
    } catch (error) {
      console.error('Error toggling task:', error);
      fetchTasks(); // rollback on error
    }
  };

  const deleteTask = async (id) => {
    try {
      setTasks(prev => prev.filter(task => task.id !== id));
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Error deleting task:', error);
      fetchTasks(); // rollback on error
    }
  };

  return {
    tasks,
    loading,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion
  };
}
