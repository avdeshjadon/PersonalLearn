import mongoose from 'mongoose';

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const db = mongoose.connection.db;
    if (!db) return res.status(500).json({ error: 'Database not initialized' });

    // Fetch from tasks collection
    const tasks = await db.collection('tasks').find().sort({ createdAt: -1 }).toArray();
    
    // Map _id to id to match frontend expectation (optional but good practice)
    const formattedTasks = tasks.map(task => {
      const { _id, ...rest } = task;
      return { id: _id.toString(), ...rest };
    });

    res.json(formattedTasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create task
export const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const db = mongoose.connection.db;
    if (!db) return res.status(500).json({ error: 'Database not initialized' });

    const newTask = {
      title: title.trim(),
      createdAt: new Date().toISOString(),
      completedAt: null,
      status: 'pending'
    };

    const result = await db.collection('tasks').insertOne(newTask);
    
    // Return created task matching frontend expectation
    res.status(201).json({
      id: result.insertedId.toString(),
      ...newTask
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const db = mongoose.connection.db;
    if (!db) return res.status(500).json({ error: 'Database not initialized' });

    let queryId;
    try {
      queryId = new mongoose.Types.ObjectId(id);
    } catch (e) {
      // If it's not a valid ObjectId, try falling back to string match in case old frontend sent custom ID
      queryId = id;
    }

    const result = await db.collection('tasks').findOneAndUpdate(
      { $or: [{ _id: queryId }, { id: id }] },
      { $set: updates },
      { returnDocument: 'after' }
    );

    if (!result) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const { _id, ...rest } = result;
    res.json({ id: _id.toString(), ...rest });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    
    const db = mongoose.connection.db;
    if (!db) return res.status(500).json({ error: 'Database not initialized' });

    let queryId;
    try {
      queryId = new mongoose.Types.ObjectId(id);
    } catch (e) {
      queryId = id;
    }

    const result = await db.collection('tasks').deleteOne({
      $or: [{ _id: queryId }, { id: id }]
    });

    if (result.deletedCount === 1) {
      res.json({ success: true, message: 'Task deleted' });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
