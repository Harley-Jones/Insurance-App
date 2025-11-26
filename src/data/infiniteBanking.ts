import { Module } from '../types/education';

export const infiniteBankingModule: Module = {
  id: 'infinite-banking',
  title: 'Become Your Own Bank',
  category: 'infinite-banking',
  description: 'Master the Infinite Banking Concept and take control of your financial future.',
  image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050200456_e62d7b22.webp',
  color: 'bg-amber-500',
  lessons: [
    {
      id: 'ibc-1',
      title: 'The Banking Crisis You Don\'t See',
      content: 'Every time you finance a car, home, or business, you pay interest to banks. Over a lifetime, the average person pays $600,000+ in interest. What if you could recapture that wealth? Traditional banking systems are designed to extract wealth from consumers through interest payments, fees, and restrictive lending practices. By understanding how money flows, you can redirect this wealth back into your own financial system.',
      keyPoints: ['Banks profit from your borrowing', 'Interest compounds against you', 'Traditional advice keeps you dependent', 'Recapture lost opportunity cost']
    },
    {
      id: 'ibc-2',
      title: 'How the Wealthy Use Life Insurance',
      content: 'The ultra-wealthy have used dividend-paying whole life insurance for over 100 years to build tax-free wealth, create liquidity, and finance their own purchases. This strategy isn\'t taught in schools because it threatens traditional banking models. Families like the Rockefellers and Rothschilds have used these principles for generations to preserve and grow wealth across multiple lifetimes.',
      keyPoints: ['Tax-free growth', 'Borrow against cash value', 'Uninterrupted compounding', 'Legacy wealth transfer']
    },
    {
      id: 'ibc-3',
      title: 'The Infinite Banking Concept',
      content: 'Created by Nelson Nash, IBC uses specially designed whole life policies as your own private banking system. You become both the borrower AND the banker, keeping interest within your family. This creates a perpetual wealth machine that grows stronger with each generation. The key is understanding that you finance everything you buy - either by paying interest to others or losing the opportunity to earn interest yourself.',
      keyPoints: ['You control the capital', 'Recapture interest payments', 'Generational wealth', 'Financial independence']
    },
    {
      id: 'ibc-4',
      title: 'Policy Design Matters',
      content: 'Not all whole life policies work for IBC. You need high early cash value through paid-up additions riders, minimal death benefit, and a mutual company that pays dividends. The policy must be structured to maximize cash accumulation while minimizing insurance costs. Working with an IBC-trained advisor is essential to proper policy design.',
      keyPoints: ['Paid-up additions rider', 'Overfund the policy', 'Mutual insurance companies', 'Dividend history matters']
    }
  ],
  quiz: {
    questions: [
      {
        id: 'ibc-q1',
        question: 'What is the primary benefit of the Infinite Banking Concept?',
        options: ['Higher returns than stocks', 'Recapturing interest you pay to banks', 'Avoiding all taxes', 'Quick profits'],
        correctAnswer: 1,
        explanation: 'IBC allows you to recapture the interest you would normally pay to banks, keeping that wealth in your family system.'
      }
    ]
  }
};
