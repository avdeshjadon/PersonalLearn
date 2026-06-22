import { asyncHandler } from '../../utils/asyncHandler.js';
import * as flashcardService from './flashcard.service.js';

export const getFlashcards = asyncHandler(async (req, res) => {
  const flashcards = await flashcardService.getAllFlashcards();
  res.json(flashcards);
});

export const addFlashcard = asyncHandler(async (req, res) => {
  const { question, answer, category } = req.body;
  if (!question || !answer) {
    res.status(400);
    throw new Error('Question and answer are required');
  }

  const flashcard = await flashcardService.createFlashcard({ question, answer, category });
  res.status(201).json(flashcard);
});

export const removeFlashcard = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const isDeleted = await flashcardService.deleteFlashcard(id);

  if (isDeleted) {
    res.json({ success: true, message: 'Flashcard deleted' });
  } else {
    res.status(404);
    throw new Error('Flashcard not found');
  }
});
