
import React from 'react';
import SpellingBeeGame from '@/components/game/SpellingBeeGame';
import { getSampleGameData } from '@/lib/game-utils';

const Game = () => {
  // Get sample game data
  const gameData = getSampleGameData();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-bee-gray/30">
      <header className="py-6 border-b border-gray-200 bg-white shadow-sm">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold tracking-tight text-bee-black">
              Spelling Bee
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 container max-w-4xl mx-auto px-4">
        <SpellingBeeGame dictionary={gameData} />
      </main>

      <footer className="py-6 border-t border-gray-200 text-center text-sm text-bee-darkGray">
        <div className="container max-w-4xl mx-auto px-4">
          <p>
            A Spelling Bee clone inspired by The New York Times puzzle.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Game;
