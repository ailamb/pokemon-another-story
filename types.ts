export enum GameState {
  MENU = 'MENU',
  PLAYING = 'PLAYING',
  ENDED = 'ENDED',
  ERROR = 'ERROR'
}

export interface Choice {
  id: string;
  text: string;
  action: string; // Description of the action for the AI to process next
}

export interface StorySegment {
  id: string; // Unique ID for save/load
  speaker: string;
  text: string;
  choices?: Choice[]; // Only for branching
  nextId?: string;    // For linear progression without buttons
  mood?: 'neutral' | 'happy' | 'sad' | 'angry' | 'surprised' | 'mysterious';
  backgroundImage?: string; // URL for background CG
  effect?: 'flash-white'; // Special visual effects
}

export interface HistoryItem {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export interface GameContext {
  history: HistoryItem[];
  currentScene: StorySegment;
  theme: string;
}