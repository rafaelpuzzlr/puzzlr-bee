
import React from 'react';
import { cn } from '@/lib/utils';

interface RankingType {
  name: string;
  minPercentage: number;
}

interface ScoreIndicatorProps {
  score: number;
  maxScore: number;
  className?: string;
}

const rankings: RankingType[] = [
  { name: "Beginner", minPercentage: 0 },
  { name: "Good Start", minPercentage: 2 },
  { name: "Moving Up", minPercentage: 5 },
  { name: "Good", minPercentage: 8 },
  { name: "Solid", minPercentage: 15 },
  { name: "Nice", minPercentage: 25 },
  { name: "Great", minPercentage: 40 },
  { name: "Amazing", minPercentage: 50 },
  { name: "Genius", minPercentage: 70 },
  { name: "Word Master", minPercentage: 100 }
];

const ScoreIndicator: React.FC<ScoreIndicatorProps> = ({ 
  score, 
  maxScore,
  className 
}) => {
  const percentage = Math.floor((score / maxScore) * 100);
  
  // Find current ranking
  const currentRanking = [...rankings]
    .reverse()
    .find(rank => percentage >= rank.minPercentage) || rankings[0];

  return (
    <div className={cn("text-center", className)}>
      <div className="mb-2">
        <span className="text-3xl font-bold">{score}</span>
        <span className="text-sm text-slate-500 ml-1">points</span>
      </div>
      
      <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden w-full max-w-xs mx-auto">
        <div 
          className="absolute top-0 left-0 h-full bg-indigo-600 transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="mt-2 text-sm font-medium">
        Rank: <span className="font-bold">{currentRanking.name}</span>
      </div>
    </div>
  );
};

export default ScoreIndicator;
