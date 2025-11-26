import { Module } from '../types/education';

export const expandedAnnuitiesModule: Module = {
  id: 'annuities-comprehensive',
  title: 'Annuities: Complete Guide',
  category: 'income-protection',
  description: 'Master all types of annuities for guaranteed retirement income.',
  image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050201373_e7575821.webp',
  color: 'bg-emerald-600',
  lessons: [
    {
      id: 'ann-comp-1',
      title: 'Annuities Fundamentals',
      content: 'Annuities are contracts with insurance companies designed to provide guaranteed income, typically in retirement. You pay premiums (either lump sum or over time), and the company promises to pay you back according to the contract terms. Annuities solve the problem of outliving your savings by providing income you cannot outlive.',
      keyPoints: ['Guaranteed lifetime income', 'Tax-deferred growth', 'Protection from longevity risk', 'Multiple payout options']
    },
    {
      id: 'ann-comp-2',
      title: 'Fixed Annuities',
      content: 'Fixed annuities provide guaranteed interest rates and predictable income. The insurance company bears the investment risk and guarantees your principal and a minimum return. Fixed annuities are ideal for conservative investors who prioritize safety and predictability over growth potential. They offer peace of mind but typically lower returns than market-based options.',
      keyPoints: ['Guaranteed returns', 'Principal protection', 'Predictable income', 'Low risk']
    },
    {
      id: 'ann-comp-3',
      title: 'Variable Annuities',
      content: 'Variable annuities allow you to invest in sub-accounts similar to mutual funds. Your returns vary based on investment performance, offering higher growth potential but also market risk. Many include optional riders for guaranteed minimum income or death benefits, providing some downside protection for an additional cost.',
      keyPoints: ['Market-linked returns', 'Investment flexibility', 'Optional guarantees available', 'Higher fees']
    },
    {
      id: 'ann-comp-4',
      title: 'Indexed Annuities',
      content: 'Indexed annuities credit interest based on market index performance (like the S&P 500) while protecting your principal from losses. They offer a middle ground between fixed and variable annuities—participation in market gains with downside protection. Understanding caps, participation rates, and spreads is crucial to evaluating indexed annuities.',
      keyPoints: ['Index-linked growth', 'Principal protection', 'Caps limit gains', 'Complex crediting methods']
    }
  ],
  quiz: {
    questions: [
      {
        id: 'ann-comp-q1',
        question: 'What is the primary purpose of an annuity?',
        options: ['Maximize returns', 'Provide guaranteed lifetime income', 'Avoid taxes', 'Quick liquidity'],
        correctAnswer: 1,
        explanation: 'Annuities are designed to provide guaranteed income you cannot outlive, protecting against longevity risk.'
      }
    ]
  }
};
