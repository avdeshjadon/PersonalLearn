import { useState, useEffect, useCallback } from 'react';

const API_URL = 'http://localhost:5001/api/flashcards';

/**
 * Custom hook for managing flashcards via MongoDB backend
 */
export function useFlashcards() {
  const [flashcards, setFlashcards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFlashcards = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setFlashcards(data);
      }
    } catch (error) {
      console.error('Failed to fetch flashcards:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFlashcards();
  }, [fetchFlashcards]);

  const addFlashcard = useCallback(async (question, answer, category) => {
    const tempId = `temp-${Date.now()}`;
    const newCard = {
      id: tempId,
      question,
      answer,
      category,
      createdAt: new Date().toISOString()
    };

    setFlashcards(prev => [newCard, ...prev]);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, answer, category })
      });
      
      if (response.ok) {
        const savedCard = await response.json();
        setFlashcards(prev => prev.map(c => c.id === tempId ? savedCard : c));
      } else {
        setFlashcards(prev => prev.filter(c => c.id !== tempId));
      }
    } catch (error) {
      console.error('Failed to add flashcard:', error);
      setFlashcards(prev => prev.filter(c => c.id !== tempId));
    }
  }, []);

  const removeFlashcard = useCallback(async (id) => {
    setFlashcards(prev => prev.filter(c => c.id !== id));

    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Failed to remove flashcard:', error);
    }
  }, []);

  return {
    flashcards,
    isLoading,
    addFlashcard,
    removeFlashcard,
    refreshFlashcards: fetchFlashcards
  };
}

export default useFlashcards;
