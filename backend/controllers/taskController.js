import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const taskDir = path.join(__dirname, '..', '..', 'public', 'notes', 'task');

// Ensure task directory exists
if (!fs.existsSync(taskDir)) {
  fs.mkdirSync(taskDir, { recursive: true });
}

// Get all tasks
export const getTasks = (req, res) => {
  try {
    const tasks = [];
    if (fs.existsSync(taskDir)) {
      const files = fs.readdirSync(taskDir);
      files.forEach(file => {
        if (file.endsWith('.md')) {
          const content = fs.readFileSync(path.join(taskDir, file), 'utf-8');
          try {
            const taskData = JSON.parse(content);
            tasks.push(taskData);
          } catch (e) {
            console.error(`Error parsing task file ${file}:`, e.message);
          }
        }
      });
    }
    
    // Sort tasks by createdAt descending
    tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create task
export const createTask = (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const newTask = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      title: title.trim(),
      createdAt: new Date().toISOString(),
      completedAt: null,
      status: 'pending'
    };

    const filePath = path.join(taskDir, `${newTask.id}.md`);
    fs.writeFileSync(filePath, JSON.stringify(newTask, null, 2));

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update task
export const updateTask = (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const filePath = path.join(taskDir, `${id}.md`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const taskData = JSON.parse(content);
    
    const updatedTask = { ...taskData, ...updates };
    fs.writeFileSync(filePath, JSON.stringify(updatedTask, null, 2));

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete task
export const deleteTask = (req, res) => {
  try {
    const { id } = req.params;
    const filePath = path.join(taskDir, `${id}.md`);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      res.json({ success: true, message: 'Task deleted' });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
