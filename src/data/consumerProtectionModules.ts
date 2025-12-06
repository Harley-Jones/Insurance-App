import { Module } from '../types/education';

export const consumerProtectionModules: Module[] = [
  {
    id: 'consumer-protection',
    title: 'Consumer Protection & Ethical Advisors',
    description: 'Learn how to identify trustworthy advisors and protect yourself from manipulative sales tactics',
    icon: '🛡️',
    image: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764051423978_4ba519a7.webp',
    category: 'Consumer Protection',
    color: 'bg-emerald-600',
    estimatedTime: '45 min',
    difficulty: 'Beginner',

    lessons: [
      {
        id: 'red-flags',
        title: 'Red Flags: Manipulative Sales Tactics',
        videoUrl: 'https://www.youtube.com/watch?v=sVi-2-0RaEc',
        videoType: 'youtube',
        content: `## Recognizing Manipulative Sales Tactics

### High-Pressure Tactics
**"This offer expires today!"** - Creating artificial urgency is a classic manipulation technique. Legitimate advisors give you time to make informed decisions.

**"Sign now or lose out"** - Ethical advisors never pressure you to sign immediately. They encourage you to review documents, consult family, and ask questions.

### Dark Psychology Principles to Watch For

**1. Reciprocity Manipulation**
- Free dinner seminars designed to make you feel obligated
- Excessive gifts or favors before you've committed
- Creating artificial debt so you feel you "owe" them

**2. Social Proof Abuse**
- Name-dropping wealthy clients (often fabricated)
- Showing fake testimonials or reviews
- "Everyone in your neighborhood is buying this"

**3. Scarcity Tactics**
- "Only 3 spots left in this program"
- "Rates are going up tomorrow" (when they're not)
- Limited-time offers that mysteriously extend

**4. Authority Exploitation**
- Fake credentials or exaggerated titles
- Using jargon to confuse and intimidate
- Claiming insider knowledge or special access

### Warning Signs of Commission-Chasing
- Recommending the most expensive products first
- Pushing products you don't understand
- Dismissing your questions or concerns
- Focusing on features, not your actual needs
- Switching recommendations frequently`,
        duration: 12,
        quiz: {
          questions: [
            {
              id: 'q1',
              question: 'What is a major red flag in insurance sales?',
              options: [
                'Giving you time to review documents',
                'Creating artificial urgency to sign immediately',
                'Encouraging you to consult family members',
                'Explaining all policy details clearly'
              ],
              correctAnswer: 1,
              explanation: 'Artificial urgency ("sign now or lose out") is a classic manipulation tactic. Ethical advisors always give you time to make informed decisions.'
            },
            {
              id: 'q2',
              question: 'Which is an example of dark psychology in sales?',
              options: [
                'Providing educational materials',
                'Free dinner seminars to create obligation',
                'Answering all your questions patiently',
                'Comparing multiple product options'
              ],
              correctAnswer: 1,
              explanation: 'Free dinner seminars are often designed to create a sense of obligation (reciprocity manipulation), making you feel you "owe" the salesperson.'
            }
          ]
        }
      },
      {
        id: 'green-flags',
        title: 'Green Flags: Signs of an Ethical Advisor',
        videoUrl: 'https://www.youtube.com/watch?v=gvZSpET11ZY',
        videoType: 'youtube',
        content: `## Identifying Trustworthy Financial Advisors

### Key Characteristics of Ethical Advisors

**1. Transparency First**
- Clearly explains all fees and commissions upfront
- Discloses how they get paid
- Provides written documentation of everything
- No hidden costs or surprise charges

**2. Education Over Sales**
- Spends time teaching you concepts
- Encourages questions and provides clear answers
- Gives you resources to learn independently
- Never makes you feel stupid for asking

**3. Needs-Based Recommendations**
- Asks detailed questions about YOUR situation
- Recommends products that fit your budget
- Sometimes recommends AGAINST buying
- Considers your entire financial picture

**4. Patience and Respect**
- Never pressures you to decide quickly
- Respects your timeline for decisions
- Encourages you to get second opinions
- Welcomes family members to meetings

**5. Professional Credentials**
- Holds proper licenses (verifiable)
- Has professional designations (CFP, CLU, ChFC)
- Carries errors & omissions insurance
- Member of professional organizations

### Questions Ethical Advisors Welcome
- "How do you get compensated?"
- "Can I see this in writing?"
- "What are the alternatives to this product?"
- "Can I think about this for a week?"
- "What are the downsides of this policy?"

### Long-Term Relationship Focus
Ethical advisors are building careers, not making quick sales. They:
- Provide ongoing service after the sale
- Conduct regular policy reviews
- Update you on industry changes
- Are available when you have questions`,
        duration: 10,
        quiz: {
          questions: [
            {
              id: 'q1',
              question: 'What should an ethical advisor do regarding fees?',
              options: [
                'Hide commission information',
                'Clearly explain all fees and commissions upfront',
                'Only discuss fees if asked directly',
                'Minimize discussion of costs'
              ],
              correctAnswer: 1,
              explanation: 'Ethical advisors are completely transparent about all fees and commissions from the start, with no hidden costs.'
            },
            {
              id: 'q2',
              question: 'How should an advisor respond to your questions?',
              options: [
                'Use complex jargon to sound smart',
                'Get frustrated with too many questions',
                'Provide clear answers and encourage more questions',
                'Tell you to trust their expertise'
              ],
              correctAnswer: 2,
              explanation: 'Ethical advisors welcome questions, provide clear explanations, and never make you feel bad for asking. Education is their priority.'
            }
          ]
        }
      },
      {
        id: 'verification',
        title: 'Verifying Credentials & Checking Backgrounds',
        videoUrl: 'https://www.youtube.com/watch?v=c_SflXzCGYE',
        videoType: 'youtube',
        content: `## How to Verify Your Advisor's Credentials

### Essential Verification Steps

**1. License Verification**
Every insurance agent must be licensed. Verify through:
- Your state's Department of Insurance website
- NAIC (National Association of Insurance Commissioners)
- Check for active status and any disciplinary actions

**2. Professional Designations**
Common legitimate designations:
- **CFP** (Certified Financial Planner)
- **CLU** (Chartered Life Underwriter)
- **ChFC** (Chartered Financial Consultant)
- **RICP** (Retirement Income Certified Professional)

Verify these through the issuing organizations' websites.

**3. Background Checks**
- **FINRA BrokerCheck**: For securities-licensed advisors
- **SEC Investment Adviser Search**: For registered advisors
- **Better Business Bureau**: Check complaint history
- **State Insurance Department**: Disciplinary actions

### Red Flags in Background Checks
- Multiple complaints from clients
- Disciplinary actions or suspensions
- Frequent job changes (firm hopping)
- Vague or unverifiable credentials
- No online presence or reviews

### Questions to Ask About Credentials
1. "What licenses do you hold?"
2. "What professional designations have you earned?"
3. "Can you provide your license number?"
4. "Are you a fiduciary?" (legally obligated to act in your best interest)
5. "Do you carry errors & omissions insurance?"

### Warning: Fake Credentials
Some dishonest salespeople:
- Use fake titles like "Senior Advisor" or "Wealth Specialist"
- Claim designations from non-existent organizations
- Exaggerate their experience or expertise
- Use official-sounding but meaningless certifications

### Your Rights as a Consumer
- Right to verify all credentials
- Right to see licenses and certifications
- Right to check disciplinary history
- Right to file complaints if misled`,
        duration: 8,
        quiz: {
          questions: [
            {
              id: 'q1',
              question: 'Where can you verify an insurance agent\'s license?',
              options: [
                'Only by asking the agent directly',
                'Your state\'s Department of Insurance website',
                'Social media profiles',
                'Cannot be verified'
              ],
              correctAnswer: 1,
              explanation: 'Every state has a Department of Insurance website where you can verify licenses, check for disciplinary actions, and confirm active status.'
            },
            {
              id: 'q2',
              question: 'What is a red flag when checking backgrounds?',
              options: [
                'Having professional designations',
                'Being licensed for many years',
                'Multiple complaints from clients',
                'Membership in professional organizations'
              ],
              correctAnswer: 2,
              explanation: 'Multiple client complaints are a serious red flag indicating potential unethical behavior or poor service.'
            }
          ]
        }
      },
      {
        id: 'commission-ethics',
        title: 'Understanding Commission Structures & Conflicts',
        videoUrl: 'https://www.youtube.com/watch?v=hWQiXv0sn9Y',
        videoType: 'youtube',
        content: `## How Commissions Can Create Conflicts of Interest

### Commission Basics
Most insurance agents work on commission, which isn't inherently bad. However, understanding how they're paid helps you identify potential conflicts.

### Commission Structures

**1. First-Year Commissions**
- Whole life: 55-110% of first year premium
- Term life: 40-80% of first year premium
- Annuities: 1-8% of premium
- Universal life: 50-90% of first year premium

**2. Renewal Commissions**
- Much smaller (2-10% of premium)
- Paid in subsequent years
- Creates incentive for long-term relationships

### Conflict of Interest Scenarios

**Scenario 1: Product Pushing**
Agent recommends expensive whole life when term insurance would better serve your needs because whole life pays 3x the commission.

**Scenario 2: Churning**
Agent suggests replacing existing policies frequently to generate new first-year commissions, even when not in your best interest.

**Scenario 3: Overselling**
Recommending more coverage than you need or can afford to maximize commission dollars.

**Scenario 4: Company Bias**
Pushing products from one company because they offer higher commissions or sales bonuses, not because they're best for you.

### Questions to Ask About Commissions

1. "How are you compensated for this recommendation?"
2. "What commission will you earn on this policy?"
3. "Are there lower-commission alternatives that might fit better?"
4. "Do you receive bonuses for selling certain products?"
5. "Would you recommend this to your own family?"

### Ethical Commission Practices

Good advisors:
- Disclose commission structures upfront
- Recommend products based on needs, not commission
- Offer multiple options with different commission levels
- Explain why their recommendation is best for YOU
- Don't pressure you into higher-commission products

### Fee-Only Alternative
Some advisors work fee-only (no commissions):
- Charge flat fee or hourly rate
- No product sales commissions
- Potentially fewer conflicts of interest
- May cost more upfront but saves long-term`,
        duration: 10,
        quiz: {
          questions: [
            {
              id: 'q1',
              question: 'What is "churning" in insurance sales?',
              options: [
                'Providing annual policy reviews',
                'Frequently replacing policies to generate new commissions',
                'Offering multiple product options',
                'Explaining policy details thoroughly'
              ],
              correctAnswer: 1,
              explanation: 'Churning is when an agent frequently recommends replacing policies unnecessarily to generate new first-year commissions, which is unethical and often illegal.'
            },
            {
              id: 'q2',
              question: 'What should an ethical advisor do about commissions?',
              options: [
                'Hide commission information',
                'Only sell highest-commission products',
                'Disclose commission structures upfront',
                'Avoid discussing compensation'
              ],
              correctAnswer: 2,
              explanation: 'Ethical advisors are transparent about how they\'re compensated and disclose commission structures upfront, so you can make informed decisions.'
            }
          ]
        }
      },
      {
        id: 'your-rights',
        title: 'Your Rights & How to File Complaints',
        videoUrl: 'https://www.youtube.com/watch?v=zJBzJQ0XBZY',
        videoType: 'youtube',
        content: `## Protecting Yourself: Know Your Rights

### Your Consumer Rights

**1. Right to Information**
- Clear explanation of all policy terms
- Written documentation of everything discussed
- Disclosure of all fees and commissions
- Time to review before signing

**2. Right to Privacy**
- Control over your personal information
- No sharing data without consent
- Right to know how data is used
- Protection under privacy laws

**3. Free Look Period**
- 10-30 days (varies by state) to review policy
- Can cancel for full refund during this period
- No questions asked cancellation
- Get this in writing

**4. Right to Fair Treatment**
- No discrimination based on protected classes
- Honest representation of products
- No fraudulent or deceptive practices
- Professional conduct at all times

### When to File a Complaint

File a complaint if an agent:
- Made false promises or misrepresentations
- Forged your signature
- Sold you a policy you didn't authorize
- Failed to disclose important information
- Engaged in high-pressure tactics
- Churned your policies unnecessarily
- Misappropriated your funds

### How to File Complaints

**1. State Insurance Department**
- Primary regulatory authority
- Investigates consumer complaints
- Can impose penalties and sanctions
- File online or by mail

**2. NAIC (National Association of Insurance Commissioners)**
- Maintains complaint database
- Coordinates multi-state issues
- Website: naic.org

**3. FINRA (if securities involved)**
- For variable life, variable annuities
- Online complaint system
- Website: finra.org

**4. Better Business Bureau**
- Public complaint record
- Mediates disputes
- Affects business ratings

### Documentation Tips
- Keep all written communications
- Record dates and times of conversations
- Save emails and text messages
- Note names of everyone you speak with
- Keep copies of all signed documents

### Legal Options
If you've suffered financial harm:
- Consult an attorney specializing in insurance law
- Consider arbitration or mediation
- Small claims court for smaller amounts
- Class action if widespread fraud

Remember: You have power as a consumer. Don't be afraid to speak up!`,
        duration: 8,
        keyPoints: [
          'Know your rights: information, privacy, free look period, and fair treatment',
          'File complaints with your state Insurance Department for violations',
          'Document everything: communications, dates, and signed documents',
          'Use FINRA, NAIC, and BBB for additional complaint channels',
          'Legal options available if you\'ve suffered financial harm'
        ],
        quiz: {
          questions: [
            {
              id: 'q1',
              question: 'What is the "free look period"?',
              options: [
                'Time to look at policy illustrations',
                '10-30 days to review and cancel policy for full refund',
                'Period to shop for better rates',
                'Time before first premium is due'
              ],
              correctAnswer: 1,
              explanation: 'The free look period (typically 10-30 days depending on state) allows you to review your policy and cancel for a full refund if you change your mind.'
            },
            {
              id: 'q2',
              question: 'Where should you file a complaint about an insurance agent?',
              options: [
                'Only social media',
                'Your state\'s Insurance Department',
                'The agent\'s office',
                'Nowhere, complaints aren\'t allowed'
              ],
              correctAnswer: 1,
              explanation: 'Your state\'s Insurance Department is the primary regulatory authority that investigates complaints and can impose penalties on unethical agents.'
            }
          ]
        }
      }
    ],
    prerequisites: [],
    quiz: {
      questions: [
        {
          id: 'final-q1',
          question: 'What is the most important sign of an ethical financial advisor?',
          options: [
            'Offering free gifts and dinners',
            'Transparency about fees and commissions',
            'Pushing you to sign quickly',
            'Only showing expensive products'
          ],
          correctAnswer: 1,
          explanation: 'Transparency about all fees and commissions is the hallmark of an ethical advisor who puts your interests first.'
        },
        {
          id: 'final-q2',
          question: 'Where can you verify an insurance agent\'s license and check for complaints?',
          options: [
            'Only by asking the agent',
            'Your state\'s Department of Insurance website',
            'Social media',
            'Cannot be verified'
          ],
          correctAnswer: 1,
          explanation: 'Every state has a Department of Insurance website where you can verify licenses and check disciplinary history.'
        },
        {
          id: 'final-q3',
          question: 'What is "churning" and why is it unethical?',
          options: [
            'Annual policy reviews',
            'Frequently replacing policies to generate new commissions',
            'Comparing multiple products',
            'Explaining policy details'
          ],
          correctAnswer: 1,
          explanation: 'Churning is replacing policies unnecessarily to generate new first-year commissions, which harms clients and is often illegal.'
        },
        {
          id: 'final-q4',
          question: 'What is the "free look period"?',
          options: [
            'Time to review illustrations',
            '10-30 days to cancel policy for full refund',
            'Shopping period',
            'Grace period for payments'
          ],
          correctAnswer: 1,
          explanation: 'The free look period allows you to review your policy and cancel for a full refund within 10-30 days (varies by state).'
        },
        {
          id: 'final-q5',
          question: 'Which is a red flag indicating manipulative sales tactics?',
          options: [
            'Giving you time to decide',
            'Creating artificial urgency to sign immediately',
            'Encouraging second opinions',
            'Providing written documentation'
          ],
          correctAnswer: 1,
          explanation: 'Artificial urgency ("sign now or lose out") is a classic manipulation tactic. Ethical advisors give you time to make informed decisions.'
        }
      ]
    }

  }
];
