import { Module } from '../types/education';

export const estatePlanningModules: Module[] = [
  {
    id: 'estate-planning',
    title: 'Living Trusts & Wills',
    category: 'estate-planning',
    description: 'Protect your legacy and ensure your wishes are honored.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050201373_e7575821.webp',
    color: 'bg-teal-600',
    lessons: [
      {
        id: 'estate-1',
        title: 'Wills vs Living Trusts',
        content: 'A will directs asset distribution after death but goes through probate. A living trust avoids probate, maintains privacy, and provides more control over asset distribution.',
        keyPoints: ['Probate avoidance', 'Privacy protection', 'Incapacity planning', 'Asset control']
      },
      {
        id: 'estate-2',
        title: 'Life Insurance in Estate Planning',
        content: 'Life insurance provides immediate liquidity for estate taxes, debts, and expenses. It ensures your heirs receive full value without forced asset sales.',
        keyPoints: ['Estate tax liquidity', 'Immediate cash', 'Equal inheritance', 'Business succession']
      }
    ],
    quiz: {
      questions: [
        {
          id: 'estate-q1',
          question: 'What is the main advantage of a living trust over a will?',
          options: ['Lower cost', 'Avoids probate', 'No attorney needed', 'Tax benefits'],
          correctAnswer: 1,
          explanation: 'Living trusts avoid the lengthy and expensive probate process, providing faster asset distribution and privacy.'
        }
      ]
    }
  },
  {
    id: 'mortgage-protection',
    title: 'Mortgage Protection Insurance',
    category: 'life-insurance',
    description: 'Keep your family in their home no matter what happens.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050199576_83ddda65.webp',
    color: 'bg-red-600',
    lessons: [
      {
        id: 'mort-1',
        title: 'Protecting Your Biggest Investment',
        content: 'Mortgage protection insurance pays off your home loan if you die, ensuring your family keeps the house. It\'s decreasing term insurance that matches your mortgage balance.',
        keyPoints: ['Pays off mortgage', 'Decreasing coverage', 'Affordable protection', 'Peace of mind']
      }
    ],
    quiz: {
      questions: [
        {
          id: 'mort-q1',
          question: 'Why does mortgage protection coverage decrease over time?',
          options: ['To save money', 'Matches declining mortgage balance', 'Required by law', 'Premium stays level'],
          correctAnswer: 1,
          explanation: 'Coverage decreases as your mortgage balance decreases, since the goal is to pay off the remaining loan.'
        }
      ]
    }
  }
];
