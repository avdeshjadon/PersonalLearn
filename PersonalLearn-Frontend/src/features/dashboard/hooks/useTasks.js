import { useState, useEffect } from 'react';

const API_URL = `${import.meta.env.VITE_API_URL || ''}/api/tasks`;

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load and auto-update tasks on mount
  useEffect(() => {
    let ignore = false;
    
    const loadTasks = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (ignore) return;
        
        if (!res.ok) throw new Error(`Failed to load tasks: ${res.statusText}`);
        
        let fetchedTasks = await res.json();
        if (ignore) return;
        
        // Auto-uncomplete tasks created before today
        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);

        fetchedTasks = await Promise.all(fetchedTasks.map(async (task) => {
          if (task.status === 'pending') {
            const taskDate = new Date(task.createdAt);
            if (taskDate < startOfToday) {
              const updated = { ...task, status: 'uncompleted' };
              // update on backend too
              const putRes = await fetch(`${API_URL}/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updated)
              });
              if (!putRes.ok) console.error(`Failed to auto-update task ${task.id}`);
              return updated;
            }
          }
          return task;
        }));

        if (ignore) return;
        setTasks(fetchedTasks);
      } catch (error) {
        if (ignore) return;
        console.error('Error fetching tasks:', error);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    loadTasks();
    return () => { ignore = true; };
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`Failed to fetch tasks: ${res.statusText}`);
      let fetchedTasks = await res.json();
      setTasks(fetchedTasks);
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
      if (!res.ok) throw new Error(`Failed to add task: ${res.statusText}`);
      const newTask = await res.json();
      setTasks(prev => [newTask, ...prev]);
      return newTask;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  };

  const updateTask = async (id, newTitle) => {
    try {
      setTasks(prev => prev.map(task => 
        task.id === id ? { ...task, title: newTitle } : task
      ));
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle })
      });
      if (!res.ok) throw new Error(`Failed to update task: ${res.statusText}`);
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
        const res = await fetch(`${API_URL}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedTask)
        });
        if (!res.ok) throw new Error(`Failed to toggle task: ${res.statusText}`);
      }
    } catch (error) {
      console.error('Error toggling task:', error);
      fetchTasks(); // rollback on error
    }
  };

  const deleteTask = async (id) => {
    try {
      setTasks(prev => prev.filter(task => task.id !== id));
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error(`Failed to delete task: ${res.statusText}`);
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
