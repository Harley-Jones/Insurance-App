import { Module } from '../types/education';

export const mortgageProtectionModule: Module = {
  id: 'mortgage-protection',
  title: 'Mortgage Protection Insurance',
  category: 'income-protection',
  description: 'Ensure your family can keep their home if something happens to you.',
  image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050202267_aa02b4e9.webp',
  color: 'bg-cyan-600',
  lessons: [
    {
      id: 'mp-1',
      title: 'What is Mortgage Protection?',
      content: 'Mortgage Protection Insurance ensures your family can pay off or maintain mortgage payments if you pass away or become disabled. Unlike PMI (Private Mortgage Insurance), which protects the lender, mortgage protection insurance protects your family. It\'s typically structured as decreasing term life insurance that matches your mortgage balance.',
      keyPoints: ['Protects your family', 'Covers mortgage payments', 'Decreasing or level term', 'Different from PMI']
    },
    {
      id: 'mp-2',
      title: 'Types of Mortgage Protection',
      content: 'Decreasing term policies reduce in coverage as your mortgage balance decreases, keeping premiums lower. Level term policies maintain the same death benefit throughout, providing extra protection. Some policies include disability riders that make mortgage payments if you become unable to work. The right choice depends on your family\'s needs and budget.',
      keyPoints: ['Decreasing term option', 'Level term option', 'Disability riders available', 'Flexible coverage amounts']
    },
    {
      id: 'mp-3',
      title: 'Mortgage Protection vs Term Life',
      content: 'While mortgage protection is specialized for home loans, regular term life insurance often provides better value and flexibility. Term life beneficiaries can use the death benefit for any purpose, not just the mortgage. Consider your total financial protection needs when deciding. Many financial advisors recommend term life over mortgage-specific products for this reason.',
      keyPoints: ['Term life offers more flexibility', 'Beneficiaries control funds', 'Consider total protection needs', 'Compare costs carefully']
    }
  ],
  quiz: {
    questions: [
      {
        id: 'mp-q1',
        question: 'How does Mortgage Protection Insurance differ from PMI?',
        options: ['They are the same', 'MPI protects your family, PMI protects the lender', 'PMI is cheaper', 'MPI is required by law'],
        correctAnswer: 1,
        explanation: 'Mortgage Protection Insurance protects your family by paying off the mortgage if you die, while PMI protects the lender if you default on payments.'
      }
    ]
  }
};
