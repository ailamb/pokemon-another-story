import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  isSkipped: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 30, 
  onComplete,
  isSkipped 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  
  // Use a ref for onComplete to avoid resetting the effect when the parent component re-renders (creating a new function identity)
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('');
    indexRef.current = 0;
    if (timerRef.current) clearInterval(timerRef.current);

    if (isSkipped) {
      setDisplayedText(text);
      if (onCompleteRef.current) onCompleteRef.current();
      return;
    }

    timerRef.current = window.setInterval(() => {
      setDisplayedText((prev) => {
        if (indexRef.current >= text.length) {
          if (timerRef.current) clearInterval(timerRef.current);
          if (onCompleteRef.current) onCompleteRef.current();
          return prev;
        }
        const nextChar = text.charAt(indexRef.current);
        indexRef.current++;
        return prev + nextChar;
      });
    }, speed);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [text, speed, isSkipped]); // Removed onComplete from dependency array

  return <span className="leading-relaxed whitespace-pre-wrap">{displayedText}</span>;
};

export default TypewriterText;