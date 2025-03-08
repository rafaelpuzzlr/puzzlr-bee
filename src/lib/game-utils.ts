
// Utility functions for the Spelling Bee game

/**
 * Shuffles an array using Fisher-Yates algorithm
 */
export function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Checks if a string contains all letters from a set
 */
export function containsAllLetters(word: string, letters: string[]): boolean {
  const letterSet = new Set(letters.map(l => l.toLowerCase()));
  return Array.from(new Set(word.toLowerCase().split('')))
    .every(char => letterSet.has(char));
}

/**
 * Checks if a string contains a specific letter
 */
export function containsLetter(word: string, letter: string): boolean {
  return word.toLowerCase().includes(letter.toLowerCase());
}

/**
 * Calculate score for a word based on Spelling Bee rules
 */
export function calculateScore(word: string, isPangram: boolean): number {
  if (word.length === 4) return 1;
  if (isPangram) return word.length + 7;
  return word.length;
}

/**
 * Sample game data generator (for testing)
 */
export function getSampleGameData() {
  return {
    centerLetter: "t",
    letters: ["t", "a", "c", "i", "l", "p", "r"],
    validWords: [
      "tactical", "tactic", "tail", "tailor", "taint", "tali", "tall", "tally", 
      "talon", "tapa", "tape", "taper", "tappet", "tar", "tare", "tarn", "taro", 
      "tarot", "tarp", "tarpon", "tart", "tartan", "tat", "fatal", "trail", "trait", 
      "trap", "trapeze", "trapper", "trappist", "trapple", "traps", "trapt", "trat", 
      "trawl", "tray", "treat", "treble", "tree", "trek", "trellis", "trench", 
      "trend", "triage", "trial", "triangle", "tribal", "tribe", "trice", "trick", 
      "trier", "trifle", "trill", "trillion", "trim", "trinity", "trinket", "trio", 
      "trip", "tripe", "triple", "triplet", "triplex", "tripod", "trite", "triumph", 
      "trivet", "trivial", "troll", "trolley", "tron", "troop", "trophy"
    ],
    pangrams: ["tactical", "practical"]
  };
}
