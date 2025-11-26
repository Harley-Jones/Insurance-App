import { Module } from '../types/education';

export const universalLifeModule: Module = {
  id: 'universal-life',
  title: 'Universal Life Insurance',
  category: 'life-insurance',
  description: 'Flexible permanent coverage with adjustable premiums and death benefits.',
  image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050199576_83ddda65.webp',
  color: 'bg-purple-600',
  lessons: [
    {
      id: 'ul-1',
      title: 'Understanding Universal Life',
      content: 'Universal Life (UL) insurance offers permanent coverage with flexibility in premium payments and death benefits. Unlike whole life, UL separates the insurance cost from the cash value accumulation, giving you more control over how your policy performs. The cash value earns interest based on current market rates, typically with a guaranteed minimum.',
      keyPoints: ['Flexible premiums', 'Adjustable death benefit', 'Interest-based cash value', 'Permanent coverage']
    },
    {
      id: 'ul-2',
      title: 'How Universal Life Works',
      content: 'With UL insurance, your premium payments go into the policy\'s cash value account. The insurance company deducts the cost of insurance and administrative fees, and the remaining amount earns interest. You can adjust your premium payments and death benefit within certain limits, making it adaptable to changing financial circumstances.',
      keyPoints: ['Premium flexibility', 'Cost of insurance deductions', 'Cash value growth', 'Policy adjustments allowed']
    },
    {
      id: 'ul-3',
      title: 'Benefits and Considerations',
      content: 'Universal Life offers significant flexibility but requires active management. If cash value is insufficient to cover insurance costs, the policy can lapse. Interest rates fluctuate with market conditions, affecting cash value growth. However, the ability to adjust coverage and payments makes UL attractive for those with variable income or changing insurance needs.',
      keyPoints: ['Requires active management', 'Interest rate risk', 'Policy lapse risk', 'Adaptable to life changes']
    }
  ],
  quiz: {
    questions: [
      {
        id: 'ul-q1',
        question: 'What makes Universal Life different from Whole Life?',
        options: ['Lower premiums', 'Flexible premiums and death benefit', 'No cash value', 'Term coverage only'],
        correctAnswer: 1,
        explanation: 'Universal Life offers flexibility in premium payments and death benefit adjustments, unlike the fixed structure of Whole Life.'
      }
    ]
  }
};
