export interface VocabularyItem {
  id: string;
  word: string;
  pronunciation: string;
  image: string;
  examples: string[];
  quiz: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  };
}

export interface GrammarItem {
  id: string;
  title: string;
  description: string;
  image: string;
  examples: string[];
  quiz: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  };
}

export interface Exercise {
  id: string;
  type: 'vocabulary' | 'grammar';
  question: string;
  image?: string;
  correctAnswer: string;
  explanation: string;
}
