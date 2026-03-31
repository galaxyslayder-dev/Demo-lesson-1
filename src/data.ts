import { VocabularyItem, GrammarItem, Exercise } from './types';

export const vocabularyData: VocabularyItem[] = [
  {
    id: 'v1',
    word: 'husband',
    pronunciation: "/'hʌzbənd/",
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    examples: [
      "Ivan is Anne's husband.",
      "Anne is Ivan's wife.",
      "They are a happy couple."
    ],
    quiz: {
      question: "Ivan is Anne's ____.",
      options: ['brother', 'husband', 'son'],
      correctAnswer: 'husband',
      explanation: "A husband is a male partner in a marriage."
    }
  },
  {
    id: 'v2',
    word: 'parents',
    pronunciation: "/'peərənts/",
    image: 'https://picsum.photos/seed/parents-pointing-self/400/300',
    examples: [
      "Anne and Ivan are Karen and Jack's parents.",
      "Henry and Diana are Karen and Jack's grandparents.",
      "My parents live in a big house."
    ],
    quiz: {
      question: "A mother and a father are called ____.",
      options: ['cousins', 'parents', 'grandparents'],
      correctAnswer: 'parents',
      explanation: "Parents refers to both the mother and the father."
    }
  },
  {
    id: 'v3',
    word: 'daughter',
    pronunciation: "/'dɔːtə(r)/",
    image: 'https://picsum.photos/seed/daughter-smiling-girl/400/300',
    examples: [
      "Karen is Anne and Ivan's daughter.",
      "Jack is their son.",
      "The daughter is playing in the garden."
    ],
    quiz: {
      question: "A female child is a ____.",
      options: ['son', 'daughter', 'niece'],
      correctAnswer: 'daughter',
      explanation: "Daughter is the term for a female child in relation to her parents."
    }
  },
  {
    id: 'v4',
    word: 'uncle',
    pronunciation: "/'ʌŋkl/",
    image: 'https://picsum.photos/seed/uncle-with-kids/400/300',
    examples: [
      "George is Karen and Jack's uncle.",
      "Amelia and Meena are their aunts.",
      "My uncle is very funny."
    ],
    quiz: {
      question: "Your father's brother is your ____.",
      options: ['uncle', 'aunt', 'nephew'],
      correctAnswer: 'uncle',
      explanation: "An uncle is the brother of one's parent."
    }
  },
  {
    id: 'v5',
    word: 'niece',
    pronunciation: "/niːs/",
    image: 'https://picsum.photos/seed/niece-young-girl/400/300',
    examples: [
      "Karen is Amelia, George and Meena's niece.",
      "Jack is their nephew.",
      "I have one niece and two nephews."
    ],
    quiz: {
      question: "The daughter of your brother or sister is your ____.",
      options: ['niece', 'nephew', 'cousin'],
      correctAnswer: 'niece',
      explanation: "A niece is the daughter of your sibling."
    }
  },
  {
    id: 'v6',
    word: 'cousins',
    pronunciation: "/'kʌznz/",
    image: 'https://picsum.photos/seed/cousins-playing-kids/400/300',
    examples: [
      "Kavita and Ravi are Karen and Jack's cousins.",
      "They play together every weekend.",
      "I have many cousins on my mother's side."
    ],
    quiz: {
      question: "The children of your aunt or uncle are your ____.",
      options: ['brothers', 'sisters', 'cousins'],
      correctAnswer: 'cousins',
      explanation: "Cousins are the children of your parent's siblings."
    }
  }
];

export const grammarData: GrammarItem[] = [
  {
    id: 'g1',
    title: 'am / is / are (Positive)',
    description: "Use 'am' with I, 'is' with he/she/it, and 'are' with we/you/they.",
    image: 'https://picsum.photos/seed/positive-grammar-people/400/300',
    examples: [
      "I am American.",
      "My father is a doctor.",
      "Your keys are on the table."
    ],
    quiz: {
      question: "I ____ 32 years old. My sister ____ 29.",
      options: ['am / is', 'is / am', 'are / is'],
      correctAnswer: 'am / is',
      explanation: "We use 'am' for 'I' and 'is' for 'my sister' (she)."
    }
  },
  {
    id: 'g2',
    title: 'am / is / are (Negative)',
    description: "Add 'not' after am/is/are to make a negative sentence. You can use short forms like isn't or aren't.",
    image: 'https://picsum.photos/seed/negative-grammar-not/400/300',
    examples: [
      "I am not hungry.",
      "James isn't a teacher.",
      "Those people aren't English."
    ],
    quiz: {
      question: "It ____ sunny today, but it ____ warm.",
      options: ['is / isn\'t', 'isn\'t / is', 'is / is'],
      correctAnswer: 'is / isn\'t',
      explanation: "It is sunny (positive), but it is not (isn't) warm (negative)."
    }
  },
  {
    id: 'g3',
    title: 'Short Forms (Contractions)',
    description: "In spoken English, we often use short forms: that's = that is, there's = there is, here's = here is.",
    image: 'https://picsum.photos/seed/shortforms-keys/400/300',
    examples: [
      "That's very kind of you.",
      "Look! There's Chris.",
      "Here's your key."
    ],
    quiz: {
      question: "What is the short form of 'there is'?",
      options: ['theres', 'there\'s', 'thereis'],
      correctAnswer: 'there\'s',
      explanation: "The apostrophe replaces the 'i' in 'is'."
    }
  }
];

export const exercisesData: Exercise[] = [
  // Vocabulary Exercises (from 1.1 and 1.2)
  {
    id: 'ex1',
    type: 'vocabulary',
    question: "Look at the family tree. Kavita is Ravi's ____.",
    image: 'https://picsum.photos/seed/family-tree-diagram/400/300',
    correctAnswer: 'sister',
    explanation: "Kavita and Ravi are siblings in the family tree."
  },
  {
    id: 'ex2',
    type: 'vocabulary',
    question: "Ravi is Kavita's ____.",
    image: 'https://picsum.photos/seed/brother-sister-kids/400/300',
    correctAnswer: 'brother',
    explanation: "Ravi is the male sibling of Kavita."
  },
  {
    id: 'ex3',
    type: 'vocabulary',
    question: "Anne is Kavita's ____.",
    image: 'https://picsum.photos/seed/aunt-woman-smiling/400/300',
    correctAnswer: 'aunt',
    explanation: "Anne is the wife of Ivan, who is the brother of Kavita's father, George."
  },
  {
    id: 'ex4',
    type: 'vocabulary',
    question: "Ivan is Ravi's ____.",
    image: 'https://picsum.photos/seed/father-son-portrait/400/300',
    correctAnswer: 'father',
    explanation: "Ivan is the parent of Ravi."
  },
  {
    id: 'ex5',
    type: 'vocabulary',
    question: "Diana is Ravi's ____.",
    image: 'https://picsum.photos/seed/grandmother-smiling/400/300',
    correctAnswer: 'grandmother',
    explanation: "Diana is the mother of Ravi's father, Ivan."
  },
  {
    id: 'ex6',
    type: 'vocabulary',
    question: "Henry is Kavita's ____.",
    image: 'https://picsum.photos/seed/grandfather-smiling/400/300',
    correctAnswer: 'grandfather',
    explanation: "Henry is the father of Kavita's father, George."
  },
  {
    id: 'ex7',
    type: 'vocabulary',
    question: "Ravi is Ivan's ____.",
    image: 'https://picsum.photos/seed/son-boy-smiling/400/300',
    correctAnswer: 'son',
    explanation: "Ravi is the male child of Ivan."
  },
  {
    id: 'ex8',
    type: 'vocabulary',
    question: "Meena is George's ____.",
    image: 'https://picsum.photos/seed/wife-woman-smiling/400/300',
    correctAnswer: 'wife',
    explanation: "Meena is married to George."
  },
  {
    id: 'ex9',
    type: 'vocabulary',
    question: "Sanjay is Kavita and Ravi's ____.",
    image: 'https://picsum.photos/seed/uncle-man-portrait/400/300',
    correctAnswer: 'uncle',
    explanation: "Sanjay is the brother of Meena (Kavita and Ravi's mother)."
  },
  {
    id: 'ex10',
    type: 'vocabulary',
    question: "Alexander is Henry's ____.",
    image: 'https://picsum.photos/seed/old-man-portrait/400/300',
    correctAnswer: 'father',
    explanation: "Alexander is the parent of Henry."
  },

  // Grammar Exercises (from 1.1, 1.2, 1.3, 1.5)
  {
    id: 'ex11',
    type: 'grammar',
    question: "Write the short form: she is -> ____",
    correctAnswer: "she's",
    explanation: "The short form of 'she is' is 'she's'."
  },
  {
    id: 'ex12',
    type: 'grammar',
    question: "Write the short form: they are -> ____",
    correctAnswer: "they're",
    explanation: "The short form of 'they are' is 'they're'."
  },
  {
    id: 'ex13',
    type: 'grammar',
    question: "The weather ____ nice today. (am/is/are)",
    image: 'https://picsum.photos/seed/sunny-weather/400/300',
    correctAnswer: 'is',
    explanation: "'The weather' is singular, so we use 'is'."
  },
  {
    id: 'ex14',
    type: 'grammar',
    question: "I ____ not rich. (am/is/are)",
    image: 'https://picsum.photos/seed/empty-wallet/400/300',
    correctAnswer: 'am',
    explanation: "We use 'am' with 'I'."
  },
  {
    id: 'ex15',
    type: 'grammar',
    question: "These bags ____ heavy. (am/is/are)",
    image: 'https://picsum.photos/seed/heavy-luggage/400/300',
    correctAnswer: 'are',
    explanation: "'These bags' is plural, so we use 'are'."
  },
  {
    id: 'ex16',
    type: 'grammar',
    question: "Look at the picture. She ____ thirsty.",
    image: 'https://picsum.photos/seed/drinking-water/400/300',
    correctAnswer: "is",
    explanation: "We use 'is' for 'she'."
  },
  {
    id: 'ex17',
    type: 'grammar',
    question: "Look at the picture. They ____ cold.",
    image: 'https://picsum.photos/seed/shivering-cold/400/300',
    correctAnswer: "are",
    explanation: "We use 'are' for 'they'."
  },
  {
    id: 'ex18',
    type: 'grammar',
    question: "Look at the picture. He ____ hungry.",
    image: 'https://picsum.photos/seed/eating-food/400/300',
    correctAnswer: "is",
    explanation: "We use 'is' for 'he'."
  },
  {
    id: 'ex19',
    type: 'grammar',
    question: "Look at the picture. They ____ scared.",
    image: 'https://picsum.photos/seed/scared-face/400/300',
    correctAnswer: "are",
    explanation: "We use 'are' for 'they'."
  },
  {
    id: 'ex20',
    type: 'grammar',
    question: "Look at the picture. She ____ angry.",
    image: 'https://picsum.photos/seed/angry-face/400/300',
    correctAnswer: "is",
    explanation: "We use 'is' for 'she'."
  }
];
