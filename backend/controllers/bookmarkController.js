import mongoose from 'mongoose';

// Get all bookmarks
export const getBookmarks = async (req, res) => {
  try {
    const db = mongoose.connection.db;
    if (!db) return res.status(500).json({ error: 'Database not initialized' });

    const bookmarks = await db.collection('bookmarks').find().sort({ addedAt: -1 }).toArray();
    
    const formattedBookmarks = bookmarks.map(bookmark => {
      const { _id, ...rest } = bookmark;
      return { id: _id.toString(), ...rest };
    });

    res.json(formattedBookmarks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add bookmark
export const addBookmark = async (req, res) => {
  try {
    const { folder, slug, title } = req.body;
    if (!folder || !slug || !title) return res.status(400).json({ error: 'Folder, slug, and title are required' });

    const db = mongoose.connection.db;
    if (!db) return res.status(500).json({ error: 'Database not initialized' });

    // Check if already exists
    const existing = await db.collection('bookmarks').findOne({ folder, slug });
    if (existing) {
      return res.status(200).json({ message: 'Bookmark already exists', id: existing._id.toString(), ...existing });
    }

    const newBookmark = {
      folder,
      slug,
      title,
      addedAt: new Date().toISOString()
    };

    const result = await db.collection('bookmarks').insertOne(newBookmark);
    
    res.status(201).json({
      id: result.insertedId.toString(),
      ...newBookmark
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove bookmark
export const removeBookmark = async (req, res) => {
  try {
    const { folder, slug } = req.params;
    
    const db = mongoose.connection.db;
    if (!db) return res.status(500).json({ error: 'Database not initialized' });

    const result = await db.collection('bookmarks').deleteOne({ folder, slug });

    if (result.deletedCount === 1) {
      res.json({ success: true, message: 'Bookmark removed' });
    } else {
      res.status(404).json({ error: 'Bookmark not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
