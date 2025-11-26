import { Module } from '../types/education';

export const modules: Module[] = [
  {
    id: 'term-life',
    title: 'Term Life Insurance',
    category: 'life-insurance',
    description: 'Pure protection for a specific period. Learn when term insurance makes sense.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050199576_83ddda65.webp',
    color: 'bg-blue-500',
    lessons: [
      {
        id: 'term-1',
        title: 'What is Term Life Insurance?',
        content: 'Term life insurance provides coverage for a specific period (10, 20, or 30 years). If you pass away during the term, your beneficiaries receive the death benefit. It\'s the most affordable type of life insurance.',
        keyPoints: ['Temporary coverage', 'Lower premiums', 'No cash value', 'Ideal for temporary needs'],
        // EXAMPLE: Replace YouTube URL with local video for offline access
        // videoUrl: '/videos/term-life-intro.mp4',
        videoUrl: 'https://www.youtube.com/watch?v=lfR3jfc8v1g',
        videoType: 'youtube',
        transcript: 'Welcome to this comprehensive guide on term life insurance. Term life insurance is one of the most straightforward and affordable types of life insurance available. It provides coverage for a specific period, typically ranging from 10 to 30 years.\n\nThe key benefit of term life insurance is its affordability. Because it only covers you for a set period and doesn\'t build cash value, the premiums are significantly lower than permanent life insurance policies.\n\nTerm life insurance is ideal for covering temporary financial obligations such as a mortgage, raising children until they become financially independent, or protecting business loans. Once these obligations are met, the need for coverage may decrease.\n\nIt\'s important to understand that if you outlive your term policy, there is no payout or return of premiums. This is why term insurance is considered pure protection - you\'re paying for the death benefit only, not any investment component.',
        resources: [
          { title: 'Term Life Insurance Guide', type: 'pdf', url: '#', size: '2.4 MB' },
          { title: 'Coverage Calculator', type: 'xlsx', url: '#', size: '156 KB' },
          { title: 'Policy Comparison Template', type: 'doc', url: '#', size: '890 KB' }
        ]
      },

      {
        id: 'term-2',
        title: 'When to Use Term Insurance',
        content: 'Term insurance is perfect for covering temporary obligations like mortgages, raising children, or business loans. It provides maximum coverage at minimum cost.',
        keyPoints: ['Mortgage protection', 'Income replacement', 'Business obligations', 'Budget-friendly'],
        videoUrl: 'https://www.youtube.com/watch?v=3kfenJ3dJmY',
        videoType: 'youtube',
        transcript: 'Let\'s explore the best scenarios for using term life insurance. Term insurance excels in situations where you have temporary financial obligations that will eventually be paid off or expire.\n\nMortgage Protection: If you have a 30-year mortgage, a 30-year term policy ensures your family can pay off the home if something happens to you.\n\nIncome Replacement: During your working years, your income supports your family. Term insurance can replace that income until your children are grown and financially independent.\n\nBusiness Obligations: If you have business loans or partners who depend on your contributions, term insurance can protect those interests.\n\nThe beauty of term insurance is its flexibility and affordability. You can purchase substantial coverage for a relatively low premium, making it accessible to most families.',
        resources: [
          { title: 'Needs Analysis Worksheet', type: 'pdf', url: '#', size: '1.8 MB' },
          { title: 'Budget Planning Tool', type: 'xlsx', url: '#', size: '245 KB' }
        ]
      }
    ],

    quiz: {
      questions: [
        {
          id: 'term-q1',
          question: 'What happens if you outlive your term life insurance policy?',
          options: ['You get your premiums back', 'Coverage expires with no payout', 'It converts to whole life', 'You get partial benefits'],
          correctAnswer: 1,
          explanation: 'Term insurance expires at the end of the term with no payout if you\'re still living. This is why it\'s more affordable than permanent insurance.'
        }
      ]
    }
  },
  {
    id: 'whole-life',
    title: 'Whole Life Insurance',
    category: 'life-insurance',
    description: 'Permanent protection with guaranteed cash value growth. The foundation of wealth building.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050199576_83ddda65.webp',
    color: 'bg-indigo-600',
    lessons: [
      {
        id: 'whole-1',
        title: 'Understanding Whole Life',
        content: 'Whole life insurance provides lifetime coverage with a guaranteed death benefit and cash value that grows tax-deferred. Premiums remain level for life.',
        keyPoints: ['Lifetime coverage', 'Guaranteed cash value', 'Fixed premiums', 'Tax-deferred growth'],
        videoUrl: 'https://www.youtube.com/watch?v=Dv5FqJOqEqA',
        videoType: 'youtube',
        transcript: 'Whole life insurance is a powerful financial tool that provides both protection and wealth accumulation. Unlike term insurance, whole life is permanent - it covers you for your entire lifetime as long as premiums are paid.\n\nOne of the key features of whole life insurance is the cash value component. A portion of your premium goes into a cash value account that grows tax-deferred at a guaranteed rate. This cash value becomes a living benefit you can access through loans or withdrawals.\n\nWhole life premiums are fixed and never increase, providing predictability in your financial planning. The death benefit is also guaranteed, giving your beneficiaries certainty.\n\nMany people use whole life insurance as the foundation of their financial plan because it combines protection with guaranteed growth, creating a stable asset that can be used for retirement income, emergency funds, or legacy planning.',
        resources: [
          { title: 'Whole Life Benefits Guide', type: 'pdf', url: '#', size: '3.2 MB' },
          { title: 'Cash Value Projection Tool', type: 'xlsx', url: '#', size: '312 KB' },
          { title: 'Policy Illustration Examples', type: 'pdf', url: '#', size: '4.1 MB' }
        ]
      }
    ],

    quiz: {
      questions: [
        {
          id: 'whole-q1',
          question: 'What makes whole life insurance "permanent"?',
          options: ['It lasts 100 years', 'Coverage for your entire life', 'Cannot be cancelled', 'Premiums never increase'],
          correctAnswer: 1,
          explanation: 'Whole life provides coverage for your entire lifetime, as long as premiums are paid.'
        }
      ]
    }
  }
];
