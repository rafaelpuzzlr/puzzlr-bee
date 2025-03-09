
import React from 'react';
import { cn } from '@/lib/utils';

interface HexButtonProps {
  letter: string;
  isCenter?: boolean;
  onClick: (letter: string) => void;
  className?: string;
}

const HexButton: React.FC<HexButtonProps> = ({
  letter,
  isCenter = false,
  onClick,
  className
}) => {
  return (
    <button
      className={cn(
        "hex-button text-2xl font-bold uppercase transition-letter letter-press",
        isCenter 
          ? "text-bee-black bg-bee-yellow" 
          : "bg-bee-black/80", // Removed the text color class
        "text-white", // Added explicit white text color for all buttons
        className
      )}
      onClick={() => onClick(letter)}
      aria-label={`Letter ${letter}`}
      style={{ textShadow: "0px 0px 4px rgba(255,255,255,0.5)" }} // Added text shadow for better visibility
    >
      {letter}
    </button>
  );
};

export default HexButton;
