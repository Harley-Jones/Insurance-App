import { Lesson } from '../types/education';

export const gripLessons3: Lesson[] = [
  {
    id: 'grip-5',
    title: 'Constrained Access to Financial Literacy',
    content: 'Financial literacy is not widely taught in public schools, leaving many without critical money management skills. Without understanding investment vehicles, tax strategies, or wealth-building tools, people remain dependent on government-sanctioned solutions. This educational gap perpetuates reliance on traditional financial systems that benefit government structures.',
    keyPoints: [
      'Lack of financial education in schools',
      'Limited access to wealth-building knowledge',
      'Dependency on traditional systems',
      'Perpetuates government reliance'
    ],
    transcript: 'One of the most insidious aspects of G.R.I.P. is the lack of financial literacy education. Public schools rarely teach critical money management skills, investment strategies, or wealth-building techniques. This educational void leaves people dependent on government-sanctioned financial solutions and traditional banking systems. Without this knowledge, individuals cannot leverage powerful tools like whole life insurance or self-directed investment strategies.',

    resources: [
      { title: 'Financial Literacy Gap Study', type: 'pdf', url: '#', size: '2.6 MB' },
      { title: 'Education System Analysis', type: 'pdf', url: '#', size: '1.8 MB' }
    ]
  },
  {
    id: 'grip-6',
    title: 'Behavioral Economics and G.R.I.P.\'s Influence on Financial Choices',
    content: 'Behavioral economics shows how government policies exploit cognitive biases to steer people toward preferred choices. Tax incentives for 401(k)s and IRAs create a false sense of optimal choice while limiting flexibility. These nudges channel people into government-approved financial paths, restricting access to alternative wealth-building strategies.',
    keyPoints: [
      'Government exploits cognitive biases',
      'Tax incentives create false optimality',
      'Nudges toward approved paths',
      'Limits alternative strategies'
    ],
    transcript: 'Behavioral economics reveals how government policies exploit our natural cognitive biases. Tax incentives for retirement accounts create an illusion of optimal choice while actually limiting our flexibility and options. These carefully designed nudges channel citizens into government-approved financial paths, restricting access to alternative wealth-building strategies that might offer greater control and returns.',

    resources: [
      { title: 'Behavioral Economics in Policy', type: 'pdf', url: '#', size: '3.3 MB' },
      { title: 'Choice Architecture Study', type: 'pdf', url: '#', size: '2.7 MB' }
    ]
  }
];
