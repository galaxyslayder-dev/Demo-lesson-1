import React, { useState } from 'react';
import { Volume2, Loader2 } from 'lucide-react';

interface AudioButtonProps {
  text: string;
  className?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({ text, className = "" }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = () => {
    if (isLoading) return;
    setIsLoading(true);
    
    try {
      if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9; // Slightly slower for clearer pronunciation
        
        utterance.onend = () => {
          setIsLoading(false);
        };
        
        utterance.onerror = (e) => {
          console.error("Speech synthesis error:", e);
          setIsLoading(false);
        };
        
        window.speechSynthesis.speak(utterance);
      } else {
        console.warn("Speech synthesis not supported in this browser.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Audio Playback Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePlay}
      disabled={isLoading}
      className={`p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 ${className}`}
      title="Listen"
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
      ) : (
        <Volume2 className="w-5 h-5 text-blue-600" />
      )}
    </button>
  );
};
