import mongoose from 'mongoose';

// Get all flashcards
export const getFlashcards = async (req, res) => {
  try {
    const db = mongoose.connection.db;
    if (!db) return res.status(500).json({ error: 'Database not initialized' });

    const flashcards = await db.collection('flashcards').find().sort({ createdAt: -1 }).toArray();
    
    const formattedFlashcards = flashcards.map(card => {
      const { _id, ...rest } = card;
      return { id: _id.toString(), ...rest };
    });

    res.json(formattedFlashcards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a flashcard
export const addFlashcard = async (req, res) => {
  try {
    const { question, answer, category } = req.body;
    if (!question || !answer) return res.status(400).json({ error: 'Question and answer are required' });

    const db = mongoose.connection.db;
    if (!db) return res.status(500).json({ error: 'Database not initialized' });

    const newFlashcard = {
      question: question.trim(),
      answer: answer.trim(),
      category: category ? category.trim() : 'General',
      createdAt: new Date().toISOString()
    };

    const result = await db.collection('flashcards').insertOne(newFlashcard);
    
    res.status(201).json({
      id: result.insertedId.toString(),
      ...newFlashcard
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove a flashcard
export const removeFlashcard = async (req, res) => {
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

    const result = await db.collection('flashcards').deleteOne({
      $or: [{ _id: queryId }, { id: id }]
    });

    if (result.deletedCount === 1) {
      res.json({ success: true, message: 'Flashcard deleted' });
    } else {
      res.status(404).json({ error: 'Flashcard not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
