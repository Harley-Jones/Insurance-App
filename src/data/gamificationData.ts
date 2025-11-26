import { Level, Achievement } from '../types/gamification';

export const LEVELS: Level[] = [
  {
    name: 'Bronze',
    minPoints: 0,
    maxPoints: 999,
    icon: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764057430287_86bb5081.webp',
    color: 'from-amber-700 to-amber-900',
    benefits: ['Access to basic modules', 'Earn achievements']
  },
  {
    name: 'Silver',
    minPoints: 1000,
    maxPoints: 2499,
    icon: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764057432860_42c8ee7e.webp',
    color: 'from-gray-400 to-gray-600',
    benefits: ['All Bronze benefits', 'Exclusive badges', 'Priority support']
  },
  {
    name: 'Gold',
    minPoints: 2500,
    maxPoints: 4999,
    icon: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764057434269_ae01f94e.webp',
    color: 'from-yellow-400 to-yellow-600',
    benefits: ['All Silver benefits', 'Advanced calculators', 'Bonus content']
  },
  {
    name: 'Platinum',
    minPoints: 5000,
    maxPoints: Infinity,
    icon: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764057437546_5bb224d9.webp',
    color: 'from-purple-400 to-blue-600',
    benefits: ['All Gold benefits', 'VIP status', 'Exclusive community access']
  }
];

export const POINT_VALUES = {
  LESSON_COMPLETE: 50,
  QUIZ_PASS: 100,
  QUIZ_PERFECT: 150,
  CERTIFICATE_EARN: 200,
  DAILY_STREAK: 25,
  SHARE_ACHIEVEMENT: 10
};
