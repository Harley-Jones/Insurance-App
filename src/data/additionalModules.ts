import { Module } from '../types/education';

export const additionalModules: Module[] = [
  {
    id: 'annuities',
    title: 'Annuities Explained',
    category: 'income-protection',
    description: 'Guaranteed income streams for retirement and beyond.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050201373_e7575821.webp',
    color: 'bg-green-600',
    lessons: [
      {
        id: 'ann-1',
        title: 'What Are Annuities?',
        content: 'Annuities are contracts with insurance companies that provide guaranteed income. You pay premiums, and the company promises to pay you back over time—often for life.',
        keyPoints: ['Guaranteed income', 'Tax-deferred growth', 'Multiple types available', 'Protection from outliving savings']
      },
      {
        id: 'ann-2',
        title: 'Types of Annuities',
        content: 'Fixed annuities offer guaranteed rates. Variable annuities tie returns to market performance. Indexed annuities combine both approaches with downside protection.',
        keyPoints: ['Fixed annuities', 'Variable annuities', 'Indexed annuities', 'Immediate vs deferred']
      }
    ],
    quiz: {
      questions: [
        {
          id: 'ann-q1',
          question: 'What is the primary purpose of an annuity?',
          options: ['Quick profits', 'Guaranteed lifetime income', 'Tax avoidance', 'Estate planning'],
          correctAnswer: 1,
          explanation: 'Annuities are designed to provide guaranteed income, often for life, protecting against outliving your savings.'
        }
      ]
    }
  },
  {
    id: 'disability',
    title: 'Disability & Income Protection',
    category: 'income-protection',
    description: 'Protect your most valuable asset—your ability to earn income.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050202267_aa02b4e9.webp',
    color: 'bg-orange-600',
    lessons: [
      {
        id: 'dis-1',
        title: 'Why Income Protection Matters',
        content: 'Your ability to earn income is your greatest asset. Disability insurance replaces income if injury or illness prevents you from working. Most people are underinsured.',
        keyPoints: ['Income replacement', 'Short-term vs long-term', 'Own occupation coverage', 'Critical for professionals']
      }
    ],
    quiz: {
      questions: [
        {
          id: 'dis-q1',
          question: 'What does "own occupation" disability coverage mean?',
          options: ['Covers any job', 'Covers your specific profession', 'Only for business owners', 'Temporary coverage'],
          correctAnswer: 1,
          explanation: 'Own occupation coverage pays benefits if you cannot perform your specific job, even if you could work in another capacity.'
        }
      ]
    }
  }
];
