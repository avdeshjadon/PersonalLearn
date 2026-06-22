import { Flashcard } from './flashcard.model.js';

export const getAllFlashcards = async () => {
  return await Flashcard.find().sort({ createdAt: -1 });
};

export const createFlashcard = async ({ question, answer, category }) => {
  const newFlashcard = new Flashcard({ question, answer, category });
  await newFlashcard.save();
  return newFlashcard;
};

export const deleteFlashcard = async (id) => {
  const result = await Flashcard.findByIdAndDelete(id);
  // Also try falling back to matching an older string ID format if needed, 
  // but Mongoose findByIdAndDelete handles valid ObjectIds.
  return !!result;
};
