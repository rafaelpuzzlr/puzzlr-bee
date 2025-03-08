
import React from 'react';
import { Link } from 'react-router-dom';

const IntroScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bee-yellow">
      <div className="mb-6 animate-float">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 10C32.8 10 27 15.8 27 23V40.5C27 47.7 32.8 53.5 40 53.5C47.2 53.5 53 47.7 53 40.5V23C53 15.8 47.2 10 40 10Z" 
            fill="#403E43" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26 30H54" stroke="#FEF7CD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 54V70" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M33 64L40 70L47 64" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 25C20 25 16 32 16 40.5C16 49 20 56 20 56" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M60 25C60 25 64 32 64 40.5C64 49 60 56 60 56" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <h1 className="text-6xl font-bold mb-6 text-bee-black">Spelling Bee</h1>
      
      <p className="text-2xl mb-10 text-center max-w-md text-bee-black">
        How many words can you make with 7 letters?
      </p>
      
      <Link 
        to="/play" 
        className="py-4 px-16 bg-bee-black text-white rounded-full text-xl font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
      >
        Play
      </Link>
      
      <div className="mt-20 text-center text-bee-black/80 text-sm">
        <p className="mb-1">2025 Puzzlr</p>
      </div>
    </div>
  );
};

export default IntroScreen;
