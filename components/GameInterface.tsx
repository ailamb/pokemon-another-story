import React, { useState, useEffect, useCallback } from 'react';
import { History, Eye, EyeOff, PlayCircle, PauseCircle, Shield, Home } from 'lucide-react';
import { StorySegment, Choice } from '../types';
import { TEST_CG_URL } from '../constants';
import TypewriterText from './TypewriterText';

interface GameInterfaceProps {
  segment: StorySegment;
  onChoice: (choice: Choice) => void;
  onExit: () => void;
  isLoading: boolean;
  historyLog: { speaker: string; text: string }[];
}

const GameInterface: React.FC<GameInterfaceProps> = ({ segment, onChoice, onExit, isLoading, historyLog }) => {
  const [textCompleted, setTextCompleted] = useState(false);
  const [skipTyping, setSkipTyping] = useState(false);
  const [showLog, setShowLog] = useState(false);
  const [uiVisible, setUiVisible] = useState(true);
  
  // Background Image State for Crossfade
  const initialBg = segment.backgroundImage || TEST_CG_URL;
  const [bgImageA, setBgImageA] = useState(initialBg);
  const [bgImageB, setBgImageB] = useState(initialBg);
  const [activeBgSlot, setActiveBgSlot] = useState<'A' | 'B'>('A');

  // New States
  const [isAuto, setIsAuto] = useState(false);
  const [isSafeMode, setIsSafeMode] = useState(false); 
  
  // Flash Effect State
  const [flashOpacity, setFlashOpacity] = useState(0);
  const [flashDuration, setFlashDuration] = useState(0);

  // Constants for timing
  const AUTO_CHAR_SPEED = 20; 
  const AUTO_READ_DELAY = 1500; 

  // Helper to detect video
  const isVideo = (url?: string) => {
    if (!url) return false;
    // Check for common video extensions or if it explicitly says mp4 in url
    return url.toLowerCase().includes('.mp4') || url.toLowerCase().includes('.webm');
  };

  // Handle Special Effects (Flash)
  useEffect(() => {
    if (segment.effect === 'flash-white') {
        // Phase 1: Fade to White (Screen goes white) - 0.2s
        setFlashDuration(200);
        
        // Use requestAnimationFrame to ensure the duration is applied before opacity change triggers transition
        requestAnimationFrame(() => {
            setFlashOpacity(1);
        });
        
        // Phase 2: Fade from White (Screen reveals image) - 0.5s
        // Wait for 200ms (fade out) + small buffer
        const timer = setTimeout(() => {
            setFlashDuration(500);
            setFlashOpacity(0);
        }, 250);

        return () => clearTimeout(timer);
    } else {
        // Ensure flash is off if moving to a normal node without effect
        setFlashOpacity(0);
        setFlashDuration(0);
    }
  }, [segment.id, segment.effect]);

  // Handle Background Transitions with Preloading (Supports Image and Video)
  useEffect(() => {
    const targetBg = segment.backgroundImage;
    const currentActiveImage = activeBgSlot === 'A' ? bgImageA : bgImageB;
    const currentInactiveImage = activeBgSlot === 'A' ? bgImageB : bgImageA;

    // If no new background defined, or it's the same as current active, do nothing
    if (!targetBg || targetBg === currentActiveImage) return;

    // If the inactive slot ALREADY has the target image (e.g. from a previous preloading step),
    // just switch the active slot. 
    if (targetBg === currentInactiveImage) {
        setActiveBgSlot(prev => prev === 'A' ? 'B' : 'A');
        return;
    }

    let isMounted = true;

    const handleLoaded = () => {
      if (!isMounted) return;
      if (activeBgSlot === 'A') {
        setBgImageB(targetBg);
      } else {
        setBgImageA(targetBg);
      }
    };

    if (isVideo(targetBg)) {
        // Preload Video
        const video = document.createElement('video');
        video.src = targetBg;
        video.preload = 'auto';
        // Trigger switch when we have enough data to play or metadata is loaded
        video.onloadeddata = handleLoaded;
        video.onerror = handleLoaded; // Fallback to avoid getting stuck
        // video.load() is implicitly called by setting src, but ensuring it starts loading
    } else {
        // Preload Image
        const img = new Image();
        img.src = targetBg;
        img.onload = handleLoaded;
        img.onerror = handleLoaded;
    }

    return () => {
      isMounted = false;
    };
  }, [segment.backgroundImage, activeBgSlot, bgImageA, bgImageB]);

  // Reset state when segment changes (text logic)
  useEffect(() => {
    setTextCompleted(false);
    setSkipTyping(false);
    setUiVisible(true);
    
    if (segment.choices && segment.choices.length > 0) {
      setIsAuto(false);
    }
  }, [segment.id]); 

  // Handle Auto progression
  useEffect(() => {
    let timer: number;
    
    if (textCompleted && segment.nextId && !isLoading && (!segment.choices || segment.choices.length === 0)) {
      if (isAuto) {
        timer = window.setTimeout(() => {
          onChoice({ id: 'continue', text: '', action: segment.nextId! });
        }, AUTO_READ_DELAY);
      }
    }

    return () => clearTimeout(timer);
  }, [textCompleted, isAuto, segment, isLoading, onChoice]);

  const handleScreenClick = useCallback(() => {
    if (showLog) {
      setShowLog(false);
      return;
    }
    if (!uiVisible) {
      setUiVisible(true);
      return;
    }
    
    if (isAuto) {
      setIsAuto(false);
      return;
    }

    if (!textCompleted) {
      setSkipTyping(true);
    } else {
      if (segment.nextId && !isLoading && (!segment.choices || segment.choices.length === 0)) {
        onChoice({ id: 'continue', text: '', action: segment.nextId });
      }
    }
  }, [textCompleted, segment, isLoading, onChoice, showLog, uiVisible, isAuto]);

  const toggleLog = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowLog(!showLog);
  };

  const toggleUi = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUiVisible(!uiVisible);
  };

  const toggleAuto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isAuto) {
      setIsAuto(true);
    } else {
      setIsAuto(false);
    }
  };
  
  const toggleSafeMode = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsSafeMode(!isSafeMode);
  };

  const typewriterSpeed = isAuto ? AUTO_CHAR_SPEED : 30;
  const forceSkipText = skipTyping; 

  // Render logic for background layers (Supports Video and Image)
  const renderBackgroundLayer = (src: string, isActive: boolean) => {
    const isSrcVideo = isVideo(src);
    return (
        <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            {isSrcVideo ? (
                <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${isActive ? 'scale-100' : 'scale-105'} ${isSafeMode ? 'blur-3xl' : ''}`}
                />
            ) : (
                <img 
                src={src} 
                alt="Scene CG" 
                className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${isActive ? 'scale-100' : 'scale-105'} ${isSafeMode ? 'blur-3xl' : ''}`}
                />
            )}
            <div className={`absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 transition-opacity duration-500 ${uiVisible ? 'opacity-100' : 'opacity-0'}`} />
        </div>
    );
  };

  // Determine active background source for ambience
  const activeSrc = activeBgSlot === 'A' ? bgImageA : bgImageB;

  return (
    <div 
      className="relative w-full h-full flex justify-center items-center bg-black overflow-hidden select-none"
      onClick={handleScreenClick}
    >
      {/* Visual Effect Layer: Flash White */}
      <div 
        className="pointer-events-none absolute inset-0 z-[60] bg-white ease-in-out" 
        style={{ 
            opacity: flashOpacity, 
            transitionProperty: 'opacity',
            transitionDuration: `${flashDuration}ms` 
        }}
      />

      {/* Blurred Ambience Background (uses current active BG) */}
      <div className="absolute inset-0 overflow-hidden">
        {isVideo(activeSrc) ? (
            <video 
                key={activeSrc} // Force re-render on source change for clean switch
                src={activeSrc}
                autoPlay loop muted playsInline
                className="w-full h-full object-cover blur-xl opacity-50 scale-110"
            />
        ) : (
            <div 
                className="w-full h-full bg-cover bg-center blur-xl opacity-50 scale-110 transition-all duration-1000"
                style={{ backgroundImage: `url(${activeSrc})` }}
            />
        )}
      </div>

      {/* Main Game Frame */}
      <div className="relative h-full max-h-[95vh] aspect-[2/3] bg-gray-900 shadow-2xl overflow-hidden flex flex-col border border-gray-800 rounded-sm">
        
        {/* Double Buffered Backgrounds */}
        {renderBackgroundLayer(bgImageA, activeBgSlot === 'A')}
        {renderBackgroundLayer(bgImageB, activeBgSlot === 'B')}

        {/* Hidden Safe Mode Button */}
        <div 
            onClick={toggleSafeMode}
            className="absolute top-0 right-0 w-16 h-16 z-50 cursor-pointer opacity-0 hover:opacity-10 transition-opacity bg-white"
            title="Safe Mode (Blur)"
        />
        {isSafeMode && (
             <div className="absolute top-2 right-2 z-40 text-yellow-500 pointer-events-none opacity-50">
                 <Shield size={24} />
             </div>
        )}

        {/* Restore UI Button */}
        {!uiVisible && (
          <div className="absolute top-4 right-4 z-50 animate-pulse pointer-events-auto">
             <button 
              onClick={toggleUi}
              className="p-2 bg-black/10 backdrop-blur-sm rounded-full text-white/50 hover:text-white transition-colors"
            >
              <Eye size={24} />
            </button>
          </div>
        )}

        {/* Log Overlay */}
        {showLog && (
           <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md p-6 overflow-y-auto animate-fadeIn" onClick={(e) => e.stopPropagation()}>
             <div className="flex justify-between items-center mb-4 border-b border-gray-700/50 pb-2">
               <h2 className="text-xl text-white font-serif">對話紀錄</h2>
               <button onClick={() => setShowLog(false)} className="text-gray-400 hover:text-white">關閉</button>
             </div>
             <div className="space-y-4">
               {historyLog.map((log, idx) => (
                 <div key={idx} className="text-gray-300 text-sm border-l-2 border-yellow-900/50 pl-2">
                   <span className="text-yellow-500 font-bold block mb-1">{log.speaker}</span>
                   <p className="leading-relaxed">{log.text}</p>
                 </div>
               ))}
             </div>
           </div>
        )}

        {/* Dialogue Area */}
        <div className={`absolute bottom-0 left-0 w-full z-10 pb-6 pt-12 transition-all duration-500 ${uiVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
          
          {/* Speaker Name Tag */}
          {segment.speaker !== '旁白' && (
            <div className="mb-1 transform translate-y-1 px-2 md:px-4">
              <span className="inline-block bg-yellow-600/95 text-white font-bold px-4 py-1 text-base rounded-t-lg shadow-lg backdrop-blur-md border-t border-x border-yellow-500/30">
                {segment.speaker}
              </span>
            </div>
          )}

          {/* Text Box */}
          <div className="bg-black/40 backdrop-blur-sm border-t border-gray-600/30 p-4 md:px-6 min-h-[140px] shadow-[0_-5px_15px_rgba(0,0,0,0.5)] relative pointer-events-auto w-full">
            <div className="text-base md:text-lg text-gray-100 font-medium font-serif leading-7 tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] pr-2 md:pr-24">
              <TypewriterText 
                key={segment.id + segment.text} 
                text={segment.text} 
                speed={typewriterSpeed}
                isSkipped={forceSkipText} 
                onComplete={() => setTextCompleted(true)}
              />
              {textCompleted && !isLoading && segment.nextId && (
                 <span className="inline-block w-2 h-4 bg-yellow-500/80 ml-1 animate-pulse align-middle" />
              )}
            </div>

            {/* Controls */}
            <div className="absolute bottom-3 right-3 flex gap-2 z-20" onMouseDown={(e) => e.stopPropagation()}>
                <button 
                  onClick={toggleUi}
                  className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white/70 hover:bg-black/40 hover:text-white transition-colors border border-white/10"
                  title="Hide UI"
                >
                  <EyeOff size={18} />
                </button>
                <button 
                  onClick={toggleLog}
                  className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white/70 hover:bg-black/40 hover:text-white transition-colors border border-white/10"
                  title="History"
                >
                  <History size={18} />
                </button>
                <button 
                  onClick={toggleAuto}
                  className={`p-2 backdrop-blur-md rounded-full transition-all border border-white/10 ${isAuto ? 'bg-yellow-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.5)]' : 'bg-black/20 text-white/70 hover:bg-black/40 hover:text-white'}`}
                  title="Auto"
                >
                  {isAuto ? <PauseCircle size={18} /> : <PlayCircle size={18} />}
                </button>
                <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onExit();
                    }}
                    className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white/70 hover:bg-red-900/40 hover:text-red-200 transition-colors border border-white/10"
                    title="Return to Title"
                >
                    <Home size={18} />
                </button>
            </div>
          </div>

          {/* Choices */}
          {textCompleted && !isLoading && segment.choices && segment.choices.length > 0 && (
            <div className="absolute bottom-[100%] left-0 w-full mb-6 px-4 md:px-8 flex flex-col gap-3 items-center z-30 pointer-events-auto">
              {segment.choices.map((choice) => (
                <button
                  key={choice.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    onChoice(choice);
                  }}
                  className="w-full max-w-sm py-3 px-6 bg-black/60 hover:bg-yellow-900/80 text-white border border-gray-500/50 hover:border-yellow-400/80 backdrop-blur-md shadow-lg transition-all duration-200 transform hover:scale-105 rounded-sm text-center font-medium group text-base"
                >
                  <span className="group-hover:text-yellow-100">{choice.text}</span>
                </button>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default GameInterface;