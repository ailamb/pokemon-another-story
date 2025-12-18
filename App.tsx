import React, { useState, useCallback } from 'react';
import { GameState, StorySegment, Choice, HistoryItem } from './types.ts';
import * as chapter1 from './services/chapter1.ts';
import * as chapter2 from './services/chapter2.ts';
import * as chapter3 from './services/chapter3.ts';
import * as chapter4 from './services/chapter4.ts';
import * as chapter5 from './services/chapter5.ts';
import * as chapter6 from './services/chapter6.ts';
import * as chapter7 from './services/chapter7.ts';
import * as chapter8 from './services/chapter8.ts';
import * as chapter9 from './services/chapter9.ts';
import * as chapter10 from './services/chapter10.ts';
import GameInterface from './components/GameInterface.tsx';
import { BookOpen, AlertCircle, Play, Lock, Loader2 } from 'lucide-react';

const CHAPTER_SERVICES: Record<string, any> = {
  'ch1': chapter1,
  'ch2': chapter2,
  'ch3': chapter3,
  'ch4': chapter4,
  'ch5': chapter5,
  'ch6': chapter6,
  'ch7': chapter7,
  'ch8': chapter8,
  'ch9': chapter9,
  'ch10': chapter10,
};

const CHAPTERS = [
  { id: 'ch1', title: 'Chapter 01', subtitle: '地下俱樂部 / 瑟蕾娜', active: true, image: chapter1.CHAPTER_IMAGE },
  { id: 'ch2', title: 'Chapter 02', subtitle: '森林之中 / 瑟蕾娜', active: true, image: chapter2.CHAPTER_IMAGE },
  { id: 'ch3', title: 'Chapter 03', subtitle: '秘密任務 / 玳蘿', active: true, image: chapter3.CHAPTER_IMAGE },
  { id: 'ch4', title: 'Chapter 04', subtitle: 'Coming Soon', active: true, image: chapter4.CHAPTER_IMAGE },
  { id: 'ch5', title: 'Chapter 05', subtitle: 'Coming Soon', active: true, image: chapter5.CHAPTER_IMAGE },
  { id: 'ch6', title: 'Chapter 06', subtitle: 'Coming Soon', active: true, image: chapter6.CHAPTER_IMAGE },
  { id: 'ch7', title: 'Chapter 07', subtitle: 'Coming Soon', active: true, image: chapter7.CHAPTER_IMAGE },
  { id: 'ch8', title: 'Chapter 08', subtitle: 'Coming Soon', active: true, image: chapter8.CHAPTER_IMAGE },
  { id: 'ch9', title: 'Chapter 09', subtitle: 'Coming Soon', active: true, image: chapter9.CHAPTER_IMAGE },
  { id: 'ch10', title: 'Chapter 10', subtitle: 'Coming Soon', active: true, image: chapter10.CHAPTER_IMAGE },
];

export default function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.MENU);
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);
  const [currentSegment, setCurrentSegment] = useState<StorySegment | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addToHistory = (role: 'user' | 'model', text: string) => {
    setHistory(prev => [...prev, { role, parts: [{ text }] }]);
  };

  const handleStartGame = async (chapterId: string) => {
    setIsLoading(true);
    setError(null);
    setGameState(GameState.PLAYING);
    setActiveChapterId(chapterId);
    setHistory([]);

    const service = CHAPTER_SERVICES[chapterId];
    if (!service) {
        setError("找不到該章節的資源。");
        setGameState(GameState.ERROR);
        setIsLoading(false);
        return;
    }

    try {
      const segment = await service.startNewStory();
      setCurrentSegment(segment);
      addToHistory('model', JSON.stringify(segment));
    } catch (err) {
      setError("無法啟動遊戲引擎。");
      setGameState(GameState.ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChoice = useCallback(async (choice: Choice) => {
    if (choice.id === 'restart') {
      setGameState(GameState.MENU);
      setCurrentSegment(null);
      setActiveChapterId(null);
      setHistory([]);
      return;
    }

    if (!currentSegment || !activeChapterId) return;
    const service = CHAPTER_SERVICES[activeChapterId];
    setIsLoading(true);
    addToHistory('user', `Choice: ${choice.text}`);
    
    try {
      const nextSegment = await service.continueStory(history, choice.action);
      setCurrentSegment(nextSegment);
      addToHistory('model', JSON.stringify(nextSegment));
    } catch (err) {
      setError("讀取下一章節失敗。");
    } finally {
      setIsLoading(false);
    }
  }, [currentSegment, history, activeChapterId]);

  const handleExitGame = useCallback(() => {
    setGameState(GameState.MENU);
    setCurrentSegment(null);
    setActiveChapterId(null);
    setHistory([]);
  }, []);

  const getReadableHistory = () => {
    return history
      .filter(h => h.role === 'model')
      .map(h => {
        try {
            const parsed = JSON.parse(h.parts[0].text) as StorySegment;
            return { speaker: parsed.speaker, text: parsed.text };
        } catch (e) {
            return { speaker: 'System', text: '...' };
        }
      });
  };

  const isVideo = (url?: string) => {
    if (!url) return false;
    return url.toLowerCase().includes('.mp4') || url.toLowerCase().includes('.webm');
  };

  if (gameState === GameState.MENU) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90" />
        <div className="max-w-4xl w-full bg-gray-900/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700 relative z-10 flex flex-col md:flex-row gap-8 max-h-[90vh]">
          <div className="flex-1 flex flex-col justify-center items-start space-y-6">
            <div className="text-yellow-500 animate-pulse">
              <BookOpen size={48} />
            </div>
            <div>
              <h2 className="text-gray-400 uppercase tracking-[0.2em] text-sm mb-2">Visual Novel Collection</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-serif leading-tight">
                Another story <br />
                <span className="text-yellow-500">/ pokemon</span>
              </h1>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              探索隱藏在光鮮亮麗表面下的另一面故事...
            </p>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3">
             <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4 sticky top-0 bg-gray-900/90 py-2 backdrop-blur-sm z-10">Select Chapter</h3>
             {CHAPTERS.map((chapter) => (
               <button
                 key={chapter.id}
                 onClick={chapter.active ? () => handleStartGame(chapter.id) : undefined}
                 disabled={!chapter.active}
                 className={`w-full group relative overflow-hidden rounded-lg border transition-all duration-300 text-left p-4 flex items-center gap-4
                    ${chapter.active 
                      ? 'bg-gray-800 border-gray-600 hover:border-yellow-500 hover:bg-gray-700 cursor-pointer hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]' 
                      : 'bg-black/40 border-gray-800 opacity-60 cursor-not-allowed grayscale'
                    }
                 `}
               >
                 <div className="w-16 h-16 rounded-md bg-gray-900 overflow-hidden flex-shrink-0 border border-white/10 relative">
                    {chapter.active && chapter.image ? (
                        isVideo(chapter.image) ? (
                             <video src={chapter.image} autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                            <img src={chapter.image} alt={chapter.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        )
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-600"><Lock size={20} /></div>
                    )}
                 </div>
                 <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                        <span className={`text-xs font-bold tracking-wider ${chapter.active ? 'text-yellow-600' : 'text-gray-600'}`}>{chapter.title}</span>
                        {chapter.active && <Play size={14} className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" />}
                    </div>
                    <h4 className={`font-medium font-serif text-lg ${chapter.active ? 'text-white group-hover:text-yellow-100' : 'text-gray-500'}`}>{chapter.subtitle}</h4>
                 </div>
               </button>
             ))}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === GameState.ERROR) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center text-white">
        <div className="text-center p-8 bg-gray-800 rounded-lg border border-red-900/50">
          <AlertCircle className="mx-auto text-red-500 mb-4" size={48} />
          <h2 className="text-xl font-bold mb-2">發生錯誤</h2>
          <p className="text-gray-300 mb-4">{error}</p>
          <button onClick={() => setGameState(GameState.MENU)} className="bg-gray-700 px-6 py-2 rounded hover:bg-gray-600 transition-colors">返回主選單</button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-black relative">
      {isLoading && (
        <div className="absolute inset-0 z-[100] bg-black/50 flex items-center justify-center backdrop-blur-sm">
           <Loader2 className="text-yellow-500 animate-spin" size={48} />
        </div>
      )}
      {currentSegment && (
        <GameInterface 
          segment={currentSegment} 
          onChoice={handleChoice} 
          onExit={handleExitGame}
          isLoading={isLoading}
          historyLog={getReadableHistory()}
        />
      )}
    </div>
  );
}