
import React from 'react';
import HexButton from './HexButton';
import { cn } from '@/lib/utils';

interface HoneycombGridProps {
  letters: string[];
  centerLetter: string;
  onLetterClick: (letter: string) => void;
  className?: string;
}

const HoneycombGrid: React.FC<HoneycombGridProps> = ({
  letters,
  centerLetter,
  onLetterClick,
  className
}) => {
  // Create a perfect hexagonal pattern
  const outerLetters = letters.filter(l => l !== centerLetter);
  
  return (
    <div className={cn("relative w-64 h-64 mx-auto", className)}>
      {/* Center hex */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <HexButton 
          letter={centerLetter} 
          isCenter={true} 
          onClick={onLetterClick} 
          className="animate-pulse-gentle"
        />
      </div>
      
      {/* Outer hexes in a circle */}
      {outerLetters.map((letter, index) => {
        // Position in a circle around the center
        const angle = (index * (360 / outerLetters.length)) * (Math.PI / 180);
        const radius = 70; // Distance from center
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <div 
            key={index}
            className="absolute"
            style={{
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <HexButton 
              letter={letter} 
              onClick={onLetterClick}
              className="shadow-lg" // Added shadow for better separation from background
            />
          </div>
        );
      })}
    </div>
  );
};

export default HoneycombGrid;
