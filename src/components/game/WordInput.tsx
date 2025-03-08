
import React from 'react';
import { cn } from '@/lib/utils';

interface WordInputProps {
  word: string;
  className?: string;
}

const WordInput: React.FC<WordInputProps> = ({ word, className }) => {
  return (
    <div 
      className={cn(
        "min-h-12 px-6 py-3 rounded-md bg-white border border-gray-200 text-center text-2xl font-medium tracking-wide uppercase transition-all duration-300 shadow-sm",
        className
      )}
      aria-live="polite"
    >
      {word || <span className="opacity-30">Type a word</span>}
    </div>
  );
};

export default WordInput;
