import { useState, useEffect, useCallback } from 'react';

const API_URL = `${import.meta.env.VITE_API_URL || ''}/api/flashcards`;

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
      if (!response.ok) throw new Error(`Failed to fetch flashcards: ${response.statusText}`);
      const data = await response.json();
      setFlashcards(data);
    } catch (error) {
      console.error('Failed to fetch flashcards:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let ignore = false;
    const loadFlashcards = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(API_URL);
        if (ignore) return;
        if (!response.ok) throw new Error(`Failed to load flashcards: ${response.statusText}`);
        
        const data = await response.json();
        if (ignore) return;
        setFlashcards(data);
      } catch (error) {
        if (ignore) return;
        console.error('Failed to fetch flashcards:', error);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    };
    loadFlashcards();
    return () => { ignore = true; };
  }, []);

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
      
      if (!response.ok) throw new Error(`Failed to add flashcard: ${response.statusText}`);
      
      const savedCard = await response.json();
      setFlashcards(prev => prev.map(c => c.id === tempId ? savedCard : c));
    } catch (error) {
      console.error('Failed to add flashcard:', error);
      setFlashcards(prev => prev.filter(c => c.id !== tempId));
    }
  }, []);

  const removeFlashcard = useCallback(async (id) => {
    const cardToRemove = flashcards.find(c => c.id === id);
    if (!cardToRemove) return;

    setFlashcards(prev => prev.filter(c => c.id !== id));

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error(`Failed to remove flashcard: ${response.statusText}`);
    } catch (error) {
      console.error('Failed to remove flashcard:', error);
      setFlashcards(prev => [cardToRemove, ...prev]);
    }
  }, [flashcards]);

  return {
    flashcards,
    isLoading,
    addFlashcard,
    removeFlashcard,
    refreshFlashcards: fetchFlashcards
  };
}

export default useFlashcards;
