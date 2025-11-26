import { Module } from '../types/education';
import { infiniteBankingModule } from './infiniteBanking';
import { additionalModules } from './additionalModules';
import { estatePlanningModules } from './estatePlanningModules';
import { advancedModules } from './advancedModules';
import { consumerProtectionModules } from './consumerProtectionModules';
import { gripModule } from './gripModule';
import { universalLifeModule } from './universalLifeModule';
import { indexedUniversalLifeModule } from './indexedUniversalLifeModule';
import { variableLifeModule } from './variableLifeModule';
import { mortgageProtectionModule } from './mortgageProtectionModule';
import { expandedAnnuitiesModule } from './expandedAnnuitiesModule';


export const allModules: Module[] = [
  gripModule,
  ...consumerProtectionModules,
  infiniteBankingModule,
  universalLifeModule,
  indexedUniversalLifeModule,
  variableLifeModule,
  mortgageProtectionModule,
  expandedAnnuitiesModule,


  {


    id: 'whole-life',
    title: 'Whole Life Insurance',
    category: 'life-insurance',
    description: 'Permanent protection with guaranteed cash value growth.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050199576_83ddda65.webp',
    color: 'bg-indigo-600',
    lessons: [
      {
        id: 'whole-1',
        title: 'Understanding Whole Life',
        content: 'Whole life insurance provides lifetime coverage with guaranteed death benefit and cash value that grows tax-deferred. Premiums remain level for life.',
        keyPoints: ['Lifetime coverage', 'Guaranteed cash value', 'Fixed premiums', 'Tax-deferred growth']
      }
    ],
    quiz: {
      questions: [
        {
          id: 'whole-q1',
          question: 'What makes whole life insurance "permanent"?',
          options: ['Lasts 100 years', 'Coverage for entire life', 'Cannot be cancelled', 'Premiums never increase'],
          correctAnswer: 1,
          explanation: 'Whole life provides coverage for your entire lifetime as long as premiums are paid.'
        }
      ]
    }
  },
  {
    id: 'term-life',
    title: 'Term Life Insurance',
    category: 'life-insurance',
    description: 'Pure protection for a specific period at affordable rates.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050199576_83ddda65.webp',
    color: 'bg-blue-500',
    lessons: [
      {
        id: 'term-1',
        title: 'What is Term Life?',
        content: 'Term life provides coverage for 10, 20, or 30 years. If you pass during the term, beneficiaries receive the death benefit. Most affordable life insurance type.',
        keyPoints: ['Temporary coverage', 'Lower premiums', 'No cash value', 'Ideal for temporary needs']
      }
    ],
    quiz: {
      questions: [
        {
          id: 'term-q1',
          question: 'What happens if you outlive your term policy?',
          options: ['Get premiums back', 'Coverage expires', 'Converts to whole life', 'Partial benefits'],
          correctAnswer: 1,
          explanation: 'Term insurance expires at term end with no payout if you\'re still living.'
        }
      ]
    }
  },
  ...additionalModules,
  ...estatePlanningModules,
  ...advancedModules
];


