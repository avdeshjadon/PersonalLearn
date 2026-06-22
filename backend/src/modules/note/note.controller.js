import { asyncHandler } from '../../utils/asyncHandler.js';
import * as noteService from './note.service.js';

export const getNote = asyncHandler(async (req, res) => {
  const { folder, filename } = req.params;
  const note = await noteService.getNoteByFolderAndFilename(folder, filename);

  if (!note) {
    res.status(404);
    throw new Error('Note not found in database');
  }

  console.log(`[API] Serving ${folder}/${filename} from MongoDB directly to Frontend.`);
  res.setHeader('Cache-Control', 'no-cache'); // Require ETag revalidation
  res.type('text/plain').send(note.content);
});
