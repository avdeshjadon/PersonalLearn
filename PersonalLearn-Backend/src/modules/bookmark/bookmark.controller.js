import { asyncHandler } from '../../utils/asyncHandler.js';
import * as bookmarkService from './bookmark.service.js';

export const getBookmarks = asyncHandler(async (req, res) => {
  const bookmarks = await bookmarkService.getAllBookmarks();
  res.json(bookmarks);
});

export const addBookmark = asyncHandler(async (req, res) => {
  const { folder, slug, title } = req.body;
  if (!folder || !slug || !title) {
    res.status(400);
    throw new Error('Folder, slug, and title are required');
  }

  const { isExisting, bookmark } = await bookmarkService.createBookmark({ folder, slug, title });
  
  if (isExisting) {
    return res.status(200).json({ message: 'Bookmark already exists', ...bookmark.toJSON() });
  }

  res.status(201).json(bookmark);
});

export const removeBookmark = asyncHandler(async (req, res) => {
  const { folder, slug } = req.params;
  const isDeleted = await bookmarkService.deleteBookmark(folder, slug);

  if (isDeleted) {
    res.json({ success: true, message: 'Bookmark removed' });
  } else {
    res.status(404);
    throw new Error('Bookmark not found');
  }
});
