import React, { useState } from 'react';
import { Exercise } from '../types';
import { CheckCircle, XCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExerciseItemProps {
  exercise: Exercise;
}

export const ExerciseItem: React.FC<ExerciseItemProps> = ({ exercise }) => {
  const [userInput, setUserInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      setIsSubmitted(true);
    }
  };

  const isCorrect = userInput.trim().toLowerCase() === exercise.correctAnswer.toLowerCase();

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-4">
      <div className="flex items-center gap-2 mb-3">
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
          exercise.type === 'vocabulary' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
        }`}>
          {exercise.type}
        </span>
      </div>
      
      <p className="text-lg text-gray-800 mb-4">{exercise.question}</p>
      
      {exercise.image && (
        <div className="mb-4 rounded-xl overflow-hidden h-48">
          <img
            src={exercise.image}
            alt="Exercise context"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={isSubmitted}
          placeholder="Type your answer..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
        />
        <button
          type="submit"
          disabled={isSubmitted || !userInput.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          Check
        </button>
      </form>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className={`mt-4 p-4 rounded-xl flex items-start gap-3 ${
              isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}
          >
            {isCorrect ? (
              <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 mt-0.5 shrink-0" />
            )}
            <div>
              <p className="font-bold">{isCorrect ? 'Excellent!' : 'Not quite right'}</p>
              <p className="text-sm mt-1">
                {isCorrect 
                  ? exercise.explanation 
                  : `The correct answer is: "${exercise.correctAnswer}". ${exercise.explanation}`}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
