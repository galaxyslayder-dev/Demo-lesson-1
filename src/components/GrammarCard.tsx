import React, { useState } from 'react';
import { GrammarItem } from '../types';
import { AudioButton } from './AudioButton';
import { CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GrammarCardProps {
  item: GrammarItem;
}

export const GrammarCard: React.FC<GrammarCardProps> = ({ item }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowFeedback(true);
  };

  const isCorrect = selectedOption === item.quiz.correctAnswer;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            
            <div className="space-y-3 mb-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Examples</p>
              {item.examples.map((ex, idx) => (
                <div key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-800 font-medium">{ex}</p>
                  <AudioButton text={ex} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden mb-4 h-40">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="bg-purple-50 p-4 rounded-xl">
              <p className="text-sm font-bold text-purple-800 mb-3">Practice: {item.quiz.question}</p>
              <div className="flex flex-wrap gap-2">
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
                        : 'bg-white border-gray-200 hover:border-purple-300 text-gray-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <AnimatePresence>
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
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
    </div>
  );
};
