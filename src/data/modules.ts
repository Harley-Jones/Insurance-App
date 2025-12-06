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
        title: 'Understanding Whole Life Insurance',
        content: `# WHOLE LIFE INSURANCE — COMPREHENSIVE DEEP DIVE

## 1. Core Structure of Whole Life Insurance

Whole life is a permanent life insurance contract providing:
- **Lifetime death benefit**
- **Guaranteed cash value accumulation**
- **Fixed, level premiums**
- **Eligibility for dividends** (with participating/mutual carriers)

It is the most stable, predictable, and contractually guaranteed life insurance structure.

## 2. Components

### A. Base Premium
The required premium that funds:
- Death benefit guarantees
- Actuarial reserves
- A portion of cash value

### B. Cash Value
A contractual savings component:
- Builds every year
- Grows on a guaranteed schedule
- Cannot decrease due to market losses
- Accessible via withdrawals or loans

### C. Dividends (Non-Guaranteed)
Mutual carriers distribute dividends based on:
- Mortality experience
- Operating efficiency
- Investment portfolio performance

Dividends can be used to:
- Purchase paid-up additions (PUAs)
- Reduce premiums
- Take cash
- Leave on deposit to earn interest

**PUAs are the most powerful choice**, compounding cash value.

## 3. Guarantees

Whole life provides, by contract:
- ✓ Guaranteed death benefit
- ✓ Guaranteed cash value growth
- ✓ Guaranteed level premiums
- ✓ Guaranteed protection for life
- ✓ Guaranteed loan access to cash value

These guarantees stand regardless of:
- Recessions
- Market crashes
- Interest rate fluctuations
- Carrier portfolio volatility

**This stability is unmatched** by term, variable, indexed, or securities-driven structures.

## 4. Advantages

### A. Predictability
Fully stable value path from day one to age 100/121.

### B. Guaranteed Compounding
Cash value grows at a fixed rate plus potential dividends, creating:
- Stable accumulation
- Powerful long-term compounding
- No market exposure

### C. Policy Loans
- No credit check
- No underwriting
- No set repayment schedule
- Loans don't interrupt internal compounding
- Interest flows back into your system if repaid

### D. Lifetime Coverage
Unlike term, which expires before most people die, whole life covers the insured for life.

### E. Tax Advantages
- Tax-deferred internal growth
- Tax-free loans
- Tax-free death benefit

### F. Estate and Wealth Tools
- Creates immediate legacy
- Predictable intergenerational planning
- Frequently protected from creditors (state-specific)
- Avoids probate

### G. Multi-use Capital
One policy can fund:
- Retirement
- Real estate
- Business
- College
- Emergency reserves
- Debt restructuring
- Generational transfers

### H. Forced Discipline
Premiums act like automated wealth-building contributions.

## 5. Disadvantages

### A. High Initial Commitment
Premiums are higher than term.

### B. Cash Value Starts Slowly
First-year cash value is less than premium due to:
- Commissions
- Actuarial reserves
- Policy costs

### C. Requires Long-Term Commitment
Whole life rewards:
- 10+ year horizons
- Consistent premiums
- Patient capital behavior

### D. Not Optimized for Market Upside
Stable growth means no market-linked spikes.

## 6. Design Strategies

### A. High Early Cash Value Design
- Maximize PUAs
- Minimize base premium
- Avoid MEC status via 7-pay rules
- Use a participating mutual carrier

**Best for:**
- IBC users
- Real estate investors
- High cash-flow individuals
- Business owners

### B. Blended Policies
Use term riders to increase MEC limits while keeping costs low.

### C. Paid-Up Additions Rider
Critical for:
- Front-loaded cash value
- Larger dividends
- Higher long-term compounding

## 7. Use Cases

### A. Wealth Storage
Stable alternative to:
- Bonds
- CDs
- High-yield savings
- Volatile markets

### B. Retirement Income
Withdrawals to basis + policy loans for tax-free income.

### C. Intergenerational Wealth
Whole life multiplies legacy via:
- Guaranteed death benefit
- Tax-free transfer

### D. Business Uses
- Key person insurance
- Executive bonus plans
- Buy-sell funding
- Liquidity buffer

### E. Real Estate & IBC
- Down payments
- BRRRR recycling capital
- Cash-flow smoothing

### F. Emergency Fund Alternative
Policies are liquid, tax-favored, and protected.

## 8. Whole Life vs Other Products

| Feature | Whole Life | Term | VUL/VUL | IUL |
|---------|-----------|------|---------|-----|
| Market Exposure | No | No | Yes | Yes (indirect) |
| Cash Value | Yes | No | Yes | Yes |
| Guarantees | Strong | Limited | Limited | Limited |
| Level Premiums | Yes | Yes | No | No |
| Lifetime Coverage | Yes | No | Potentially | Potentially |
| Complexity | Low | Low | High | High |

**Whole life is simplest, most stable, and most predictable.**

## 9. Ideal Candidates for Whole Life

- High-income earners
- People needing stable, long-term wealth storage
- Clients seeking guaranteed legacy
- Individuals concerned about market risk
- People wanting tax-efficient retirement income
- Families planning intergenerational wealth
- Business owners needing flexible capital

## 10. Optimal Funding Strategy

### A. Aim for a premium that's meaningful but safe
A whole life policy must be funded long-term.

### B. Use PUAs to accelerate growth
PUAs transform whole life from "slow" to "efficient."

### C. Keep a liquidity buffer outside the policy
**General guidance:**
- 3–6 months liquid in a bank
- Everything above that: evaluate whole life

## 11. Lifetime Financial Impact

Well-designed whole life provides:
- Permanent safety net
- Predictable wealth base
- Tax-efficiency
- Long-term compounding
- Legacy creation
- Multi-purpose liquidity

Over 20–40 years, the compounding effect becomes enormous due to:
- Guaranteed growth
- Dividends
- Paid-up additions
- Policy loans used strategically

## 12. Summary

Whole life is the most stable, predictable financial instrument in life insurance, offering:
- ✓ Permanent death benefit
- ✓ Guaranteed accumulation
- ✓ Uninterrupted compounding
- ✓ Tax-favored access
- ✓ Multi-use liquidity
- ✓ Strong long-term and generational impact

**It is the foundation product of long-term financial planning and the backbone of systems like Infinite Banking.**`,
        keyPoints: [
          'Lifetime coverage guaranteed',
          'Cash value grows tax-deferred',
          'Fixed premiums never increase',
          'Tax-free death benefit',
          'Borrow against cash value',
          'Dividends from mutual companies',
          'Foundation of wealth building'
        ],
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
