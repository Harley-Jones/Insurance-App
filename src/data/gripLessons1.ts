import { Lesson } from '../types/education';

export const gripLessons1: Lesson[] = [
  {
    id: 'grip-1',
    title: 'Introduction to G.R.I.P.',
    content: 'G.R.I.P. represents a framework highlighting the mechanisms by which government policies can impede individual financial growth. These constraints manifest through tax structures, regulatory barriers, dependency-driven social programs, and restricted access to potent financial tools.',
    keyPoints: [
      'Tax structures that limit wealth',
      'Regulatory barriers to investment',
      'Dependency-driven social programs',
      'Restricted access to financial tools'
    ],
    transcript: 'Welcome to G.R.I.P. - Government Restrictions Inhibiting Prosperity. This framework reveals how government policies create barriers to financial growth through tax structures, regulatory constraints, social programs fostering dependency, and restrictions on financial literacy. Understanding these mechanisms is essential for achieving true financial independence.',

    resources: [
      { title: 'G.R.I.P. Framework Overview', type: 'pdf', url: '#', size: '2.8 MB' },
      { title: 'Thomas Sowell Economic Analysis', type: 'pdf', url: '#', size: '3.4 MB' }
    ]
  },
  {
    id: 'grip-2',
    title: 'Restrictive Tax Policies',
    content: 'Tax policies such as income tax, capital gains tax, and estate tax create significant barriers to financial growth. These taxes reduce disposable income and hinder capital reinvestment, disproportionately affecting middle- and lower-income earners. Thomas Sowell points out that high taxation discourages productivity and long-term investment.',
    keyPoints: [
      'Income tax reduces disposable income',
      'Capital gains tax hinders reinvestment',
      'Estate tax limits generational wealth',
      'High taxation discourages productivity'
    ],
    transcript: 'Tax policies create significant barriers to wealth accumulation. Income taxes reduce the capital available for investment. Capital gains taxes discourage long-term investment strategies. Estate taxes prevent the transfer of generational wealth. Thomas Sowell argued that these structures compel compliance through penalties while restraining economic prosperity and fostering dependency on government programs.',

    resources: [
      { title: 'Tax Impact Analysis', type: 'pdf', url: '#', size: '1.9 MB' },
      { title: 'Sowell on Taxation', type: 'pdf', url: '#', size: '2.1 MB' }
    ]
  }
];
