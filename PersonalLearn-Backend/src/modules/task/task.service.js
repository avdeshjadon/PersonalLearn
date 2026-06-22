import { Task } from './task.model.js';

export const getAllTasks = async () => {
  return await Task.find().sort({ createdAt: -1 });
};

export const createTask = async ({ title }) => {
  const newTask = new Task({ title });
  await newTask.save();
  return newTask;
};

export const updateTask = async (id, updates) => {
  const result = await Task.findByIdAndUpdate(id, updates, { new: true });
  return result;
};

export const deleteTask = async (id) => {
  const result = await Task.findByIdAndDelete(id);
  return !!result;
};
