
import React from 'react';
import { cn } from '@/lib/utils';

interface FoundWordsProps {
  words: string[];
  pangrams: string[];
  className?: string;
}

const FoundWords: React.FC<FoundWordsProps> = ({ 
  words, 
  pangrams,
  className 
}) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="mb-2 text-sm font-medium text-slate-600">
        You have found {words.length} word{words.length !== 1 ? 's' : ''}
      </div>
      <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm h-60 overflow-y-auto">
        {words.length === 0 ? (
          <div className="text-slate-400 text-center italic py-4">
            Your found words will appear here
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-left">
            {words.sort().map((word, index) => (
              <div 
                key={index} 
                className={cn(
                  "text-sm font-medium py-1 px-2 rounded capitalize word-appear",
                  pangrams.includes(word.toLowerCase()) && "font-bold text-white bg-indigo-600"
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {word}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoundWords;
