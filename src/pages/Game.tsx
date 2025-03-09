
import React from 'react';
import SpellingBeeGame from '@/components/game/SpellingBeeGame';
import { getSampleGameData } from '@/lib/game-utils';

const Game = () => {
  // Get sample game data
  const gameData = getSampleGameData();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-indigo-100">
      <header className="py-6 border-b border-indigo-200 bg-white shadow-sm">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold tracking-tight text-indigo-800">
              Spelling Bee
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 container max-w-4xl mx-auto px-4">
        <SpellingBeeGame dictionary={gameData} />
      </main>

      <footer className="py-6 border-t border-indigo-200 text-center text-sm text-slate-500">
        <div className="container max-w-4xl mx-auto px-4">
          <p>
            2025 Puzzlr
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Game;
