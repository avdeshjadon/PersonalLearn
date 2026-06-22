import { asyncHandler } from '../../utils/asyncHandler.js';
import * as taskService from './task.service.js';

export const getTasks = asyncHandler(async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
});

export const createTask = asyncHandler(async (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400);
    throw new Error('Title is required');
  }

  const task = await taskService.createTask({ title });
  res.status(201).json(task);
});

export const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  
  const updatedTask = await taskService.updateTask(id, updates);

  if (!updatedTask) {
    res.status(404);
    throw new Error('Task not found');
  }

  res.json(updatedTask);
});

export const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  
  const isDeleted = await taskService.deleteTask(id);

  if (isDeleted) {
    res.json({ success: true, message: 'Task deleted' });
  } else {
    res.status(404);
    throw new Error('Task not found');
  }
});
