
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
          ? "text-white bg-indigo-600" // Changed from yellow to indigo
          : "bg-slate-800", // Changed from black to slate-800
        "text-white", // Keeping white text for contrast
        className
      )}
      onClick={() => onClick(letter)}
      aria-label={`Letter ${letter}`}
      style={{ 
        textShadow: "0px 0px 8px rgba(255,255,255,0.8), 0px 2px 4px rgba(0,0,0,0.8)",
        fontWeight: "900",
        letterSpacing: "1px",
        fontSize: "1.75rem"
      }}
    >
      {letter}
    </button>
  );
};

export default HexButton;
