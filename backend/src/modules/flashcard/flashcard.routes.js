import express from 'express';
import { getFlashcards, addFlashcard, removeFlashcard } from './flashcard.controller.js';

const router = express.Router();

router.get('/', getFlashcards);
router.post('/', addFlashcard);
router.delete('/:id', removeFlashcard);

export default router;
