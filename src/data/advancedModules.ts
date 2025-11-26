import { Module } from '../types/education';

export const advancedModules: Module[] = [
  {
    id: 'variable-life',
    title: 'Variable Life Insurance',
    category: 'life-insurance',
    description: 'Investment-linked policies with market exposure and risk.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050199576_83ddda65.webp',
    color: 'bg-pink-600',
    lessons: [
      {
        id: 'var-1',
        title: 'Variable Life Explained',
        content: 'Variable life lets you invest cash value in sub-accounts similar to mutual funds. Returns fluctuate with market performance, offering higher potential but more risk.',
        keyPoints: ['Market-based returns', 'Investment options', 'Higher risk/reward', 'Requires active management']
      }
    ],
    quiz: {
      questions: [
        {
          id: 'var-q1',
          question: 'What is the main risk of variable life insurance?',
          options: ['High premiums', 'Cash value can decrease', 'No death benefit', 'Cannot borrow'],
          correctAnswer: 1,
          explanation: 'Variable life cash value fluctuates with market performance and can decrease in value.'
        }
      ]
    }
  },
  {
    id: 'tax-strategies',
    title: 'Tax Advantages of Life Insurance',
    category: 'infinite-banking',
    description: 'Master the tax benefits that make life insurance a wealth-building tool.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050200456_e62d7b22.webp',
    color: 'bg-yellow-600',
    lessons: [
      {
        id: 'tax-1',
        title: 'Tax-Free Growth',
        content: 'Life insurance cash value grows tax-deferred. You pay no taxes on growth as long as it stays in the policy. Death benefits pass tax-free to heirs.',
        keyPoints: ['Tax-deferred growth', 'Tax-free death benefit', 'Tax-free loans', 'No 1099 reporting']
      },
      {
        id: 'tax-2',
        title: 'Policy Loans vs Withdrawals',
        content: 'Loans against cash value are tax-free and don\'t require repayment during your lifetime. Withdrawals up to basis are tax-free, but beyond that are taxable.',
        keyPoints: ['Loans are tax-free', 'No mandatory repayment', 'Access without penalties', 'Maintain compound growth']
      }
    ],
    quiz: {
      questions: [
        {
          id: 'tax-q1',
          question: 'Why are policy loans tax-free?',
          options: ['Government subsidy', 'Loans are not income', 'Insurance company benefit', 'Only for wealthy'],
          correctAnswer: 1,
          explanation: 'Policy loans are borrowing your own money, not income, so they\'re not taxable events.'
        }
      ]
    }
  }
];
