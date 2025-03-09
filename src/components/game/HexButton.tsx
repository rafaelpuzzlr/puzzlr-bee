
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
          : "bg-black", // Changed from bg-bee-black/80 to a solid black
        "text-white", // Explicit white text for all buttons
        className
      )}
      onClick={() => onClick(letter)}
      aria-label={`Letter ${letter}`}
      style={{ 
        textShadow: "0px 0px 8px rgba(255,255,255,0.8), 0px 2px 4px rgba(0,0,0,0.8)",
        fontWeight: "900",
        letterSpacing: "1px",
        fontSize: "1.75rem"
      }} // Enhanced text shadow and styling for better visibility
    >
      {letter}
    </button>
  );
};

export default HexButton;
