import { Module } from '../types/education';

export const variableLifeModule: Module = {
  id: 'variable-life',
  title: 'Variable Life Insurance',
  category: 'life-insurance',
  description: 'Permanent coverage with investment sub-accounts for potential higher returns.',
  image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050199576_83ddda65.webp',
  color: 'bg-red-600',
  lessons: [
    {
      id: 'vl-1',
      title: 'Understanding Variable Life',
      content: 'Variable Life Insurance allows you to invest your cash value in various sub-accounts similar to mutual funds. You can choose from stocks, bonds, money market funds, and other investment options. This provides the potential for higher returns than traditional whole life, but also exposes you to market risk and potential losses.',
      keyPoints: ['Investment sub-accounts', 'Higher growth potential', 'Market risk exposure', 'Permanent coverage']
    },
    {
      id: 'vl-2',
      title: 'Variable vs Variable Universal',
      content: 'Variable Life has fixed premiums like whole life, while Variable Universal Life (VUL) combines the investment features of variable life with the premium flexibility of universal life. VUL offers more control but requires more active management. Both types require a securities license to sell and are regulated as securities products.',
      keyPoints: ['Fixed vs flexible premiums', 'VUL offers more flexibility', 'Securities regulation applies', 'Active management needed']
    },
    {
      id: 'vl-3',
      title: 'Risks and Rewards',
      content: 'Variable life offers the highest growth potential among permanent life insurance products, but comes with significant risks. Poor investment performance can reduce cash value and even cause policy lapse if insufficient to cover insurance costs. It\'s best suited for financially sophisticated individuals comfortable with market volatility who want both insurance protection and investment growth.',
      keyPoints: ['Highest growth potential', 'Market loss risk', 'Policy lapse possible', 'Requires investment knowledge']
    }
  ],
  quiz: {
    questions: [
      {
        id: 'vl-q1',
        question: 'What makes Variable Life Insurance different from other permanent policies?',
        options: ['Lower cost', 'Investment in sub-accounts with market risk', 'Guaranteed returns', 'No cash value'],
        correctAnswer: 1,
        explanation: 'Variable Life allows investment in sub-accounts that are subject to market risk, offering higher potential returns but also the possibility of losses.'
      }
    ]
  }
};
