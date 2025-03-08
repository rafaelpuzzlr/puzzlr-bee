import React, { useState, useEffect, useCallback } from 'react';
import HoneycombGrid from './HoneycombGrid';
import WordInput from './WordInput';
import GameControls from './GameControls';
import FoundWords from './FoundWords';
import ScoreIndicator from './ScoreIndicator';
import MessageToast from './MessageToast';
import { shuffle } from '@/lib/game-utils';

// Dictionary with scoring and initial setup
interface GameDictionary {
  validWords: string[];
  pangrams: string[];
  centerLetter: string;
  letters: string[];
}

interface SpellingBeeGameProps {
  dictionary: GameDictionary;
  className?: string;
}

const SpellingBeeGame: React.FC<SpellingBeeGameProps> = ({ 
  dictionary,
  className 
}) => {
  // Game state
  const [letters, setLetters] = useState<string[]>(dictionary.letters);
  const [centerLetter] = useState<string>(dictionary.centerLetter);
  const [currentWord, setCurrentWord] = useState('');
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [message, setMessage] = useState({ text: '', type: 'info' as const, show: false });

  // Calculate the maximum possible score when component mounts
  useEffect(() => {
    const calcMaxScore = dictionary.validWords.reduce((total, word) => {
      if (word.length === 4) return total + 1;
      if (dictionary.pangrams.includes(word)) {
        return total + word.length + 7; // Pangrams get length + 7 bonus
      }
      return total + word.length;
    }, 0);
    
    setMaxScore(calcMaxScore);
  }, [dictionary]);

  // Handle showing messages
  const showMessage = useCallback((text: string, type: 'success' | 'error' | 'info' | 'pangram') => {
    setMessage({ text, type, show: true });
  }, []);

  const hideMessage = useCallback(() => {
    setMessage(prev => ({ ...prev, show: false }));
  }, []);

  // Game actions
  const handleLetterClick = useCallback((letter: string) => {
    setCurrentWord(prev => prev + letter);
  }, []);

  const handleDelete = useCallback(() => {
    setCurrentWord(prev => prev.slice(0, -1));
  }, []);

  const handleClear = useCallback(() => {
    setCurrentWord('');
  }, []);

  const handleShuffle = useCallback(() => {
    // Keep center letter in place, shuffle others
    const outerLetters = letters.filter(l => l !== centerLetter);
    const shuffledOuter = shuffle([...outerLetters]);
    setLetters([...shuffledOuter, centerLetter]);
    
    showMessage('Letters shuffled!', 'info');
  }, [letters, centerLetter, showMessage]);

  const calculateWordScore = useCallback((word: string): number => {
    if (word.length === 4) return 1;
    if (dictionary.pangrams.includes(word.toLowerCase())) {
      return word.length + 7; // Pangram bonus
    }
    return word.length;
  }, [dictionary.pangrams]);

  const handleEnter = useCallback(() => {
    if (currentWord.length < 4) {
      showMessage('Word must be at least 4 letters', 'error');
      return;
    }
    
    if (!currentWord.toLowerCase().includes(centerLetter.toLowerCase())) {
      showMessage(`Must include center letter: ${centerLetter}`, 'error');
      return;
    }
    
    const normalizedWord = currentWord.toLowerCase();
    
    if (foundWords.some(w => w.toLowerCase() === normalizedWord)) {
      showMessage('Word already found', 'error');
      return;
    }
    
    if (dictionary.validWords.includes(normalizedWord)) {
      const wordScore = calculateWordScore(normalizedWord);
      const isPangram = dictionary.pangrams.includes(normalizedWord);
      
      setFoundWords(prev => [...prev, currentWord]);
      setScore(prev => prev + wordScore);
      
      if (isPangram) {
        showMessage('Pangram! +' + wordScore + ' points', 'pangram');
      } else {
        showMessage('Word found! +' + wordScore + ' points', 'success');
      }
      
      setCurrentWord('');
    } else {
      showMessage('Not in word list', 'error');
    }
  }, [currentWord, centerLetter, foundWords, dictionary.validWords, dictionary.pangrams, calculateWordScore, showMessage]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/^[a-zA-Z]$/.test(e.key)) {
        // Only allow letters that are in the game
        if (letters.includes(e.key.toLowerCase()) || letters.includes(e.key.toUpperCase())) {
          handleLetterClick(e.key.toLowerCase());
        }
      } else if (e.key === 'Backspace') {
        handleDelete();
      } else if (e.key === 'Enter') {
        handleEnter();
      } else if (e.key === 'Escape') {
        handleClear();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [letters, handleLetterClick, handleDelete, handleEnter, handleClear]);

  return (
    <div className={className}>
      <MessageToast
        message={message.text}
        type={message.type}
        show={message.show}
        onHide={hideMessage}
      />
      
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <ScoreIndicator score={score} maxScore={maxScore} />
        </div>
        
        <div className="mb-6">
          <WordInput word={currentWord} />
        </div>
        
        <div className="mb-6">
          <HoneycombGrid
            letters={letters}
            centerLetter={centerLetter}
            onLetterClick={handleLetterClick}
          />
        </div>
        
        <GameControls
          onShuffle={handleShuffle}
          onDelete={handleDelete}
          onEnter={handleEnter}
          onClear={handleClear}
          disabled={false}
        />
        
        <div className="mt-10">
          <FoundWords words={foundWords} pangrams={dictionary.pangrams} />
        </div>
      </div>
    </div>
  );
};

export default SpellingBeeGame;
