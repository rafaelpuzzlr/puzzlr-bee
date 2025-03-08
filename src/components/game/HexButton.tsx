
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
        isCenter ? "text-bee-black bg-bee-yellow" : "text-bee-black bg-bee-gray",
        className
      )}
      onClick={() => onClick(letter)}
      aria-label={`Letter ${letter}`}
    >
      {letter}
    </button>
  );
};

export default HexButton;
