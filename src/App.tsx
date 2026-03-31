import { useState } from 'react';
import { BookOpen, GraduationCap, PencilLine, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { vocabularyData, grammarData, exercisesData } from './data';
import { VocabularyCard } from './components/VocabularyCard';
import { GrammarCard } from './components/GrammarCard';
import { ExerciseItem } from './components/ExerciseItem';

type Tab = 'vocabulary' | 'grammar' | 'exercises';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('vocabulary');

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl">
              <Languages className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-gray-900">English Handout</h1>
              <p className="text-sm text-gray-500 font-medium">Unit 1: Family & Basics</p>
            </div>
          </div>
          
          <nav className="flex bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('vocabulary')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'vocabulary' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Vocabulary
            </button>
            <button
              onClick={() => setActiveTab('grammar')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'grammar' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Grammar
            </button>
            <button
              onClick={() => setActiveTab('exercises')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'exercises' ? 'bg-white text-orange-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <PencilLine className="w-4 h-4" />
              Exercises
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'vocabulary' && (
            <motion.div
              key="vocabulary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 italic serif">Family Words</h2>
                <p className="text-gray-600">Learn about relationships and family members.</p>
              </div>
              {vocabularyData.map((item) => (
                <VocabularyCard key={item.id} item={item} />
              ))}
            </motion.div>
          )}

          {activeTab === 'grammar' && (
            <motion.div
              key="grammar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 italic serif">Grammar: am/is/are</h2>
                <p className="text-gray-600">Master the most basic verb forms in English.</p>
              </div>
              {grammarData.map((item) => (
                <GrammarCard key={item.id} item={item} />
              ))}
            </motion.div>
          )}

          {activeTab === 'exercises' && (
            <motion.div
              key="exercises"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 italic serif">Mixed Practice</h2>
                <p className="text-gray-600">Test your knowledge of vocabulary and grammar.</p>
              </div>
              
              <div className="space-y-8">
                <section>
                  <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    Vocabulary Category
                  </h3>
                  {exercisesData.filter(ex => ex.type === 'vocabulary').map((ex) => (
                    <ExerciseItem key={ex.id} exercise={ex} />
                  ))}
                </section>

                <section>
                  <h3 className="text-sm font-black text-purple-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    Grammar Category
                  </h3>
                  {exercisesData.filter(ex => ex.type === 'grammar').map((ex) => (
                    <ExerciseItem key={ex.id} exercise={ex} />
                  ))}
                </section>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© 2026 English Learning Handout • Powered by Gemini AI</p>
        </div>
      </footer>
    </div>
  );
}
