import express from 'express';
import { getBookmarks, addBookmark, removeBookmark } from './bookmark.controller.js';

const router = express.Router();

router.get('/', getBookmarks);
router.post('/', addBookmark);
router.delete('/:folder/:slug', removeBookmark);

export default router;
