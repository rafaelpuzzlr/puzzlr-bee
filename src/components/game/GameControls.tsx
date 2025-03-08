
import React from 'react';
import { RefreshCw, Delete, CornerDownLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GameControlsProps {
  onShuffle: () => void;
  onDelete: () => void;
  onEnter: () => void;
  onClear: () => void;
  disabled: boolean;
}

const GameControls: React.FC<GameControlsProps> = ({
  onShuffle,
  onDelete,
  onEnter,
  onClear,
  disabled
}) => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={onShuffle}
        className={cn(
          "p-3 rounded-full bg-bee-gray hover:bg-bee-lightYellow transition-all duration-200",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        disabled={disabled}
        aria-label="Shuffle letters"
      >
        <RefreshCw className="w-5 h-5 text-bee-black" />
      </button>
      <button
        onClick={onDelete}
        className={cn(
          "p-3 rounded-full bg-bee-gray hover:bg-bee-lightYellow transition-all duration-200",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        disabled={disabled}
        aria-label="Delete letter"
      >
        <Delete className="w-5 h-5 text-bee-black" />
      </button>
      <button
        onClick={onEnter}
        className={cn(
          "px-6 py-3 rounded-full bg-bee-yellow hover:bg-bee-yellow/90 text-bee-black font-medium transition-all duration-200",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        disabled={disabled}
        aria-label="Enter word"
      >
        Enter
      </button>
      <button
        onClick={onClear}
        className={cn(
          "p-3 rounded-full bg-bee-gray hover:bg-bee-lightYellow transition-all duration-200",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        disabled={disabled}
        aria-label="Clear input"
      >
        <CornerDownLeft className="w-5 h-5 text-bee-black" />
      </button>
    </div>
  );
};

export default GameControls;
