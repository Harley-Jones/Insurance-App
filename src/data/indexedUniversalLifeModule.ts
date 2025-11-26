import { Module } from '../types/education';

export const indexedUniversalLifeModule: Module = {
  id: 'indexed-universal-life',
  title: 'Indexed Universal Life (IUL)',
  category: 'life-insurance',
  description: 'Permanent coverage with market-linked growth potential and downside protection.',
  image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050199576_83ddda65.webp',
  color: 'bg-teal-600',
  lessons: [
    {
      id: 'iul-1',
      title: 'What is Indexed Universal Life?',
      content: 'IUL combines the flexibility of Universal Life with the growth potential of market indexes like the S&P 500. Your cash value is credited based on index performance, but you\'re protected from market losses with a guaranteed floor (typically 0-1%). This creates an opportunity for higher returns than traditional UL while limiting downside risk.',
      keyPoints: ['Index-linked growth', 'Downside protection', 'Flexible premiums', 'Market participation without direct investment']
    },
    {
      id: 'iul-2',
      title: 'How IUL Crediting Works',
      content: 'IUL policies credit interest based on the performance of a chosen index over a specific period (usually annually). If the index gains 10%, you might be credited 8-9% (after caps and participation rates). If the index loses money, you receive 0% instead of negative returns. This asymmetric risk profile is what makes IUL attractive for conservative growth.',
      keyPoints: ['Annual point-to-point crediting', 'Caps limit maximum gains', 'Floor prevents losses', 'Participation rates apply']
    },
    {
      id: 'iul-3',
      title: 'IUL Strategies and Considerations',
      content: 'IUL works best when properly funded and managed. Understand the cap rates, participation rates, and fees that affect your returns. Many advisors recommend IUL for retirement income planning because of tax-free policy loans and market-linked growth. However, poor funding or high fees can cause policy lapse, so work with experienced professionals.',
      keyPoints: ['Proper funding essential', 'Understand caps and fees', 'Tax-free retirement income', 'Professional guidance recommended']
    }
  ],
  quiz: {
    questions: [
      {
        id: 'iul-q1',
        question: 'What protects IUL policyholders from market losses?',
        options: ['Government insurance', 'A guaranteed floor (typically 0%)', 'Diversification', 'Stop-loss orders'],
        correctAnswer: 1,
        explanation: 'IUL policies have a guaranteed floor that prevents negative returns, typically ensuring at least 0% credited interest even when markets decline.'
      }
    ]
  }
};
