import React, { useState } from 'react';
import { VocabularyItem } from '../types';
import { AudioButton } from './AudioButton';
import { CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VocabularyCardProps {
  item: VocabularyItem;
}

export const VocabularyCard: React.FC<VocabularyCardProps> = ({ item }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowFeedback(true);
  };

  const isCorrect = selectedOption === item.quiz.correctAnswer;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
      <div className="md:flex">
        <div className="md:w-1/3 h-48 md:h-auto relative p-4">
          <img
            src={item.image}
            alt={item.word}
            className="w-full h-full object-cover rounded-xl shadow-md border-4 border-white"
            referrerPolicy="no-referrer"
          />
          {item.word === 'husband' && (
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-red-500 rounded-full animate-pulse pointer-events-none shadow-[0_0_15px_rgba(239,68,68,0.5)]">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase whitespace-nowrap">
                Husband
              </div>
            </div>
          )}
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-gray-900 capitalize">{item.word}</h3>
            <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
              <span className="text-gray-500 font-mono text-sm">{item.pronunciation}</span>
              <AudioButton text={item.word} className="p-1" />
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Example Sentences</p>
            {item.examples.map((ex, idx) => (
              <div key={idx} className="flex items-start gap-2 text-gray-700 italic">
                <span className="text-blue-400 mt-1">•</span>
                <p>{ex}</p>
                <AudioButton text={ex} className="p-1" />
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-4 rounded-xl">
            <p className="text-sm font-bold text-blue-800 mb-3">Quick Quiz: {item.quiz.question}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {item.quiz.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  disabled={showFeedback}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                    selectedOption === option
                      ? isCorrect
                        ? 'bg-green-100 border-green-500 text-green-700'
                        : 'bg-red-100 border-red-500 text-red-700'
                      : 'bg-white border-gray-200 hover:border-blue-300 text-gray-600'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`mt-4 p-3 rounded-lg flex items-start gap-3 ${
                    isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  )}
                  <div>
                    <p className="font-bold text-sm">{isCorrect ? 'Correct!' : 'Incorrect'}</p>
                    <p className="text-xs mt-1">{item.quiz.explanation}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
