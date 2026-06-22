import express from 'express';

import bookmarkRoutes from '../modules/bookmark/bookmark.routes.js';
import flashcardRoutes from '../modules/flashcard/flashcard.routes.js';
import noteRoutes from '../modules/note/note.routes.js';
import profileRoutes from '../modules/profile/profile.routes.js';
import taskRoutes from '../modules/task/task.routes.js';

const router = express.Router();

router.use('/bookmarks', bookmarkRoutes);
router.use('/flashcards', flashcardRoutes);
router.use('/notes', noteRoutes);
router.use('/profile', profileRoutes);
router.use('/tasks', taskRoutes);

export default router;
