import { Module } from '../types/education';
import { gripLessons1 } from './gripLessons1';
import { gripLessons2 } from './gripLessons2';
import { gripLessons3 } from './gripLessons3';

export const gripModule: Module = {
  id: 'grip',
  title: 'G.R.I.P.: Government Restrictions Inhibiting Prosperity',
  category: 'financial-freedom',
  description: 'Understanding how government policies impact wealth accumulation and strategies to overcome these barriers.',
  image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050199576_83ddda65.webp',
  color: 'bg-red-600',
  lessons: [...gripLessons1, ...gripLessons2, ...gripLessons3],
  quiz: {
    questions: [
      {
        id: 'grip-q1',
        question: 'What does G.R.I.P. stand for?',
        options: [
          'Government Revenue and Investment Planning',
          'Government Restrictions Inhibiting Prosperity',
          'Growth Restrictions in Public Policy',
          'General Regulatory Investment Principles'
        ],
        correctAnswer: 1,
        explanation: 'G.R.I.P. stands for Government Restrictions Inhibiting Prosperity, a framework for understanding how government policies can limit individual wealth accumulation.'
      },
      {
        id: 'grip-q2',
        question: 'According to Thomas Sowell, what is a major effect of high taxation?',
        options: [
          'Increased government efficiency',
          'Discourages productivity and investment',
          'Promotes economic equality',
          'Reduces government dependency'
        ],
        correctAnswer: 1,
        explanation: 'Sowell argued that high taxation discourages productivity and long-term investment, ultimately restraining economic prosperity.'
      },
      {
        id: 'grip-q3',
        question: 'What is a "benefit cliff" in social programs?',
        options: [
          'Maximum benefit amount',
          'Losing benefits when income increases',
          'Automatic benefit increases',
          'Program expiration date'
        ],
        correctAnswer: 1,
        explanation: 'A benefit cliff occurs when earning more income results in losing benefits, creating a disincentive to improve one\'s financial situation.'
      }
    ]
  }
};
