import { Bookmark } from './bookmark.model.js';

export const getAllBookmarks = async () => {
  return await Bookmark.find().sort({ addedAt: -1 });
};

export const createBookmark = async ({ folder, slug, title }) => {
  // Check if exists
  const existing = await Bookmark.findOne({ folder, slug });
  if (existing) {
    return { isExisting: true, bookmark: existing };
  }

  const newBookmark = new Bookmark({ folder, slug, title });
  await newBookmark.save();
  return { isExisting: false, bookmark: newBookmark };
};

export const deleteBookmark = async (folder, slug) => {
  const result = await Bookmark.deleteOne({ folder, slug });
  return result.deletedCount === 1;
};
