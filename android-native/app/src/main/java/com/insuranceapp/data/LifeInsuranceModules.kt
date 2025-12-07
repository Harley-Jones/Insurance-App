package com.insuranceapp.data

/**
 * Life Insurance Modules - Core Products
 * Term Life, Whole Life, IBC, and IUL with comprehensive breakdowns
 */

val lifeInsuranceModules = listOf(

    // TERM LIFE INSURANCE MODULE
    Module(
        id = "term-life",
        title = "Term Life Insurance — Complete Guide",
        description = "Pure death benefit protection: temporary coverage, conversion strategies, and cost-effective planning",
        category = "Life Insurance",
        image = "https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050199890_956bba9e.webp",
        color = "bg-blue-600",
        icon = "⏱️",
        estimatedTime = "40 min",
        difficulty = "Beginner",
        lessons = listOf(
            Lesson(
                id = "term-life-1",
                title = "Core Structure & Key Features",
                videoUrl = "https://youtu.be/XwBpW7XsiHo",
                videoType = VideoType.YOUTUBE,
                content = """
# Term Life Insurance — Foundation

Term life provides:
- ✅ **Pure life insurance coverage**
- ✅ **For a specific length of time** (the "term")
- ✅ **No cash value**
- ✅ **Low premiums**
- ✅ **Death benefit paid only if death occurs within the term**

**Common terms:** 10, 15, 20, 25, 30, 35, 40 years

The contract simply buys **protection for a window of time**.

---

# Key Features

## A. Level Premiums
Most modern term policies **lock the premium** for the full duration of the term.

## B. Level Death Benefit
Death benefit **remains constant** throughout the term.

## C. No Cash Value
There is **no savings, investment, or compounding component**.

## D. Convertible
Most term policies allow **conversion to permanent coverage** (whole life, IUL, VUL) **without medical evidence** if done before the conversion deadline.

⚠️ This is a critical feature—locks in insurability.

## E. Renewable
After the term ends, many contracts allow annual renewal—usually at **sharply higher premiums**.

---

# The Critical Statistic

## Only 1-2% of Term Policies Ever Pay a Benefit

**Industry statistics (NAIC & LIMRA):**

### Reasons:
- Term expires before the insured dies
- Policy lapses from non-payment
- Client replaces the policy with another one
- Coverage needs change and term is allowed to end

⚠️ **This is NOT a knock on term**—it simply reflects:
- Mortality patterns
- People overwhelmingly survive their chosen term period

But it is the **single most important fact** for understanding term's role.
                """.trimIndent(),
                duration = 12,
                keyPoints = listOf(
                    "Pure death benefit—no cash value component",
                    "Level premiums locked for entire term (10-40 years)",
                    "Only 1-2% of term policies ever pay a benefit",
                    "Convertible to permanent coverage without medical exam",
                    "Lowest cost per dollar of death benefit"
                )
            ),

            Lesson(
                id = "term-life-2",
                title = "Advantages & Strategic Uses",
                content = """
# Advantages of Term Life

## A. Lowest Cost Per Dollar of Death Benefit
Term gives the **highest death benefit for the lowest premium**.

### Example:
- $500k whole life: $6,000/year
- $500k term (30 year): $600/year

**10x difference** in premium cost.

---

## B. Excellent for Temporary Needs

### Perfect for:
- ✅ Mortgage payoff
- ✅ College funding years
- ✅ Short-term income protection
- ✅ Covering period of maximum financial responsibility

---

## C. Simple
- Easy to understand
- Easy to compare
- Easy to qualify for when healthy

---

## D. Convertible = "Hold Your Insurability"
Acts as a **"hold your insurability" tool**—valuable if health declines later.

### Example:
John, 30, buys 30-year term. At age 45, he's diagnosed with diabetes.

**With conversion:**
- Converts $300k to whole life **without medical exam**
- Locked in at original health class

**Without conversion:**
- Must reapply with diabetes
- Higher premiums or denial

---

## E. Versatile
Can pair with:
- Whole life
- IUL
- VUL

As part of a **blended strategy**.

---

# Ideal Use Cases

## A. Income Replacement
Protect spouse or dependents from **loss of income during working years**.

## B. Mortgage and Debt Coverage
Only for the period debts are likely to be present.

## C. Business Needs
- Buy-sell agreements
- Key person coverage
- Debt or loan coverage

## D. Young Families
Maximizes death benefit per dollar.

## E. Conversion Strategy
Purchase term now, convert to permanent insurance later when:
- Income increases
- Wealth planning goals appear
- Health declines
                """.trimIndent(),
                duration = 15,
                keyPoints = listOf(
                    "Lowest cost—best for high death benefit on tight budget",
                    "Perfect for temporary needs (mortgage, college, working years)",
                    "Conversion locks insurability—critical if health declines",
                    "Young families maximize protection per dollar",
                    "Blends with whole life for efficient MEC strategies"
                )
            ),

            Lesson(
                id = "term-life-3",
                title = "Disadvantages & Comparisons",
                content = """
# Disadvantages of Term Life

## A. Coverage Expires
If you outlive the term, there is **no payout**.

## B. No Cash Value
- No asset accumulation
- No equity
- No living benefits (unless riders purchased)

## C. Renewals Are Extremely Expensive
Renewal rates after the level term period can be:
- 10×
- 15×
- 20×
or more than original premiums.

⚠️ **Almost no one renews**—they convert or let it lapse.

## D. No Tax Advantages
- No retirement planning
- No wealth-building tool
- No generational wealth suitable

## E. Expires Before Most People Die
Reduces long-term value compared to permanent insurance.

---

# Term vs Permanent Life Insurance

| Feature | Term | Whole Life | IUL/VUL |
|---------|------|------------|---------|
| **Duration** | Temporary | Lifetime | Lifetime |
| **Cash Value** | No | Yes | Yes |
| **Premiums** | Low | High | Variable |
| **Guarantees** | Limited | Strong | Limited |
| **Payout Probability** | 1-2% | Near 100% | Near 100% |
| **Market Exposure** | None | None | Present |
| **Best For** | Temporary needs | Asset building | Growth alternatives |

---

# Strengths of Term in Broader Planning

Term is **extremely powerful** when:

✅ Budget is tight
✅ High death benefit is needed
✅ Short-term responsibilities are large
✅ Young families need maximum coverage
✅ Long-term strategy includes **conversion**

### Blending Strategy:
- **Term riders on whole life** make IBC setups more efficient
- Boosts early MEC limits
- Maximizes death benefit during high-risk years

---

# Key Limitations

❌ No living benefits unless riders purchased
❌ No cash accumulation
❌ Not suitable for retirement planning
❌ Not a wealth-building tool
❌ Not generational wealth suitable
❌ Expires before most people die

---

# Summary

Term life insurance is:
- ✅ Pure death benefit
- ✅ Temporary
- ✅ Inexpensive
- ✅ Simple
- ✅ Essential for high early-need years
- ✅ Useful when paired with permanent insurance
- ❌ Extremely unlikely to pay out (1-2%)

**Best viewed as:** Short-term protection tool, not long-term asset.
                """.trimIndent(),
                duration = 18,
                keyPoints = listOf(
                    "Coverage expires—no payout if you outlive the term",
                    "Renewal premiums 10-20x higher after term ends",
                    "Only 1-2% probability of claim payout",
                    "No cash value, no wealth building, no tax advantages",
                    "Best for temporary needs paired with conversion strategy"
                )
            )
        )
    ),

    // WHOLE LIFE INSURANCE MODULE
    Module(
        id = "whole-life-deep",
        title = "Whole Life Insurance — Deep Dive",
        description = "Permanent coverage with guaranteed growth: cash value, dividends, loans, and Infinite Banking foundation",
        category = "Life Insurance",
        image = "https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050198697_45624597.webp",
        color = "bg-green-700",
        icon = "💚",
        estimatedTime = "55 min",
        difficulty = "Intermediate",
        lessons = listOf(
            Lesson(
                id = "whole-life-1",
                title = "Core Structure & Components",
                videoUrl = "https://youtu.be/TSzDJcO58NA",
                videoType = VideoType.YOUTUBE,
                content = """
# Whole Life Insurance — Foundation

Whole life is a **permanent life insurance contract** providing:

✅ **Lifetime death benefit**
✅ **Guaranteed cash value accumulation**
✅ **Fixed, level premiums**
✅ **Eligibility for dividends** (with participating/mutual carriers)

It is the **most stable, predictable, and contractually guaranteed** life insurance structure.

---

# Core Components

## A. Base Premium
The required premium that funds:
- Death benefit guarantees
- Actuarial reserves
- A portion of cash value

## B. Cash Value
A contractual savings component:

✅ Builds every year
✅ Grows on a **guaranteed schedule**
✅ **Cannot decrease** due to market losses
✅ Accessible via **withdrawals or loans**

## C. Dividends (Non-Guaranteed)
Mutual carriers distribute dividends based on:
- Mortality experience
- Operating efficiency
- Investment portfolio performance

### Dividend Options:
1. **Purchase Paid-Up Additions (PUAs)** ← Most powerful
2. Reduce premiums
3. Take cash
4. Leave on deposit to earn interest

**PUAs are the most powerful choice**—they compound cash value dramatically.

---

# The Guarantees

Whole life provides, **by contract:**

1. ✅ Guaranteed death benefit
2. ✅ Guaranteed cash value growth
3. ✅ Guaranteed level premiums
4. ✅ Guaranteed protection for life
5. ✅ Guaranteed loan access to cash value

These guarantees stand **regardless of:**
- Recessions
- Market crashes
- Interest rate fluctuations
- Carrier portfolio volatility

**This stability is unmatched** by term, variable, indexed, or securities-driven structures.
                """.trimIndent(),
                duration = 15,
                keyPoints = listOf(
                    "Permanent coverage with guaranteed cash value growth",
                    "Fixed level premiums—never increase with age",
                    "Dividends from mutual carriers compound via PUAs",
                    "Guarantees stand regardless of market conditions",
                    "Most stable, predictable life insurance structure"
                )
            ),

            Lesson(
                id = "whole-life-2",
                title = "Advantages & Tax Benefits",
                content = """
# Advantages of Whole Life

## A. Predictability
Fully stable value path from day one to age 100/121.

## B. Guaranteed Compounding
Cash value grows at a fixed rate plus potential dividends, creating:
- Stable accumulation
- Powerful long-term compounding
- **No market exposure**

## C. Policy Loans
The game-changer for Infinite Banking:

✅ **No credit check**
✅ **No underwriting**
✅ **No set repayment schedule**
✅ Loans don't interrupt internal compounding
✅ Interest flows back into your system if repaid

### Example:
$100k cash value earning 4% + 2% dividend = 6% annual growth

Borrow $50k at 5% loan rate.

**Your $100k still compounds at 6%** while you use the borrowed $50k.

**Net spread:** 1% positive arbitrage.

---

## D. Lifetime Coverage
Unlike term, which expires before most people die, **whole life covers the insured for life**.

---

## E. Tax Advantages

### The Triple Tax Advantage:
1. **Tax-deferred internal growth**
2. **Tax-free loans**
3. **Tax-free death benefit**

### Example:
$10k annual premium for 30 years = $300k contributed

Cash value at 30 years: $500k+

**Borrow $200k tax-free** for retirement income

Death benefit: $750k **tax-free** to heirs

**Zero income tax on $450k+ gain.**

---

## F. Estate and Wealth Tools
- Creates immediate legacy
- Predictable intergenerational planning
- Frequently **protected from creditors** (state-specific)
- **Avoids probate**

## G. Multi-Use Capital
One policy can fund:
- Retirement
- Real estate
- Business
- College
- Emergency reserves
- Debt restructuring
- Generational transfers

## H. Forced Discipline
Premiums act like **automated wealth-building contributions**.
                """.trimIndent(),
                duration = 20,
                keyPoints = listOf(
                    "Policy loans don't interrupt compounding—unique advantage",
                    "Triple tax advantage: deferred growth, tax-free loans, tax-free death",
                    "Protected from creditors in many states, avoids probate",
                    "Multi-use capital—one policy, multiple financial roles",
                    "Forced discipline—automated wealth building"
                )
            ),

            Lesson(
                id = "whole-life-3",
                title = "Design Strategies & Use Cases",
                content = """
# Design Strategies

## A. High Early Cash Value Design
**Best for IBC and real estate investors:**

✅ Maximize PUAs (Paid-Up Additions)
✅ Minimize base premium
✅ Avoid MEC status via 7-pay rules
✅ Use a participating mutual carrier

### Benefits:
- Higher early cash value (year 1-5)
- Larger dividends compound faster
- Maximum liquidity for loans

---

## B. Blended Policies
Use **term riders** to increase MEC limits while keeping costs low.

### How it works:
- Base whole life: $300k
- Term rider: +$700k
- Total death benefit: $1M
- Allows **higher PUA premiums** without MEC

---

## C. Paid-Up Additions Rider
**Critical for:**
- Front-loaded cash value
- Larger dividends
- Higher long-term compounding

### Example Without PUAs:
Year 10 cash value: $80k

### Example With Max PUAs:
Year 10 cash value: $140k

**75% more cash value** with same death benefit.

---

# Use Cases

## A. Wealth Storage
Stable alternative to:
- Bonds
- CDs
- High-yield savings
- Volatile markets

## B. Retirement Income
Withdrawals to basis + policy loans for **tax-free income**.

### Example:
Age 65-85: Withdraw $40k/year tax-free

**No 1099, no RMDs, no tax.**

---

## C. Intergenerational Wealth
Whole life multiplies legacy via:
- Guaranteed death benefit
- Tax-free transfer
- Avoids probate

---

## D. Business Uses
- Key person insurance
- Executive bonus plans
- Buy-sell funding
- Liquidity buffer

---

## E. Real Estate & IBC
- Down payments
- BRRRR recycling capital
- Cash-flow smoothing

---

## F. Emergency Fund Alternative
Policies are:
- Liquid (via loans)
- Tax-favored
- Protected from creditors

---

# Optimal Funding Strategy

## General Guidance:
- Keep **3-6 months liquid** in a bank
- Everything above that: **evaluate whole life**

## Premium Targeting:
Start with a premium that's:
- Meaningful but safe
- Sustainable long-term
- Allows PUA maximization

**Use PUAs to accelerate growth.**

---

# Lifetime Financial Impact

Well-designed whole life provides:
✅ Permanent safety net
✅ Predictable wealth base
✅ Tax-efficiency
✅ Long-term compounding
✅ Legacy creation
✅ Multi-purpose liquidity

Over 20-40 years, the compounding effect becomes **enormous** due to:
- Guaranteed growth
- Dividends
- Paid-up additions
- Policy loans used strategically
                """.trimIndent(),
                duration = 22,
                keyPoints = listOf(
                    "High early cash value design: max PUAs, min base premium",
                    "Blended with term riders increases MEC limits efficiently",
                    "PUAs compound cash value 50-100% faster",
                    "Perfect for retirement income via tax-free loans",
                    "Foundation product for IBC and generational wealth"
                )
            )
        )
    ),

    // INFINITE BANKING (IBC) MODULE
    Module(
        id = "infinite-banking-deep",
        title = "Infinite Banking Concept (IBC)",
        description = "Become your own banker: policy loans, uninterrupted compounding, and lifetime capital control",
        category = "Infinite Banking",
        image = "https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050200456_e62d7b22.webp",
        color = "bg-amber-600",
        icon = "🏦",
        estimatedTime = "60 min",
        difficulty = "Advanced",
        lessons = listOf(
            Lesson(
                id = "ibc-deep-1",
                title = "Core Concept & Advantages",
                videoUrl = "https://youtu.be/HXGAHrFzpd0",
                videoType = VideoType.YOUTUBE,
                content = """
# Infinite Banking Concept (IBC)

Infinite Banking uses a **specially designed, high-cash-value, dividend-paying whole life insurance policy** as a **personal capital reservoir** that you borrow against instead of using traditional lenders.

**The policy becomes your private credit engine.**

---

# Advantages of Infinite Banking

## A. Liquidity, Use, and Control

✅ Cash value grows **tax-deferred**
✅ Accessed **tax-free via policy loans**
✅ Loans don't require:
   - Applications
   - Credit checks
   - Income verification
   - Approval processes
✅ Access is typically **24-72 hours**

---

## B. Guaranteed Growth

✅ Whole life offers contractual guaranteed interest rate (3-4%)
✅ Dividends from mutual carriers add additional growth
✅ Growth occurs **every year regardless of market conditions**
✅ Works during recessions, crashes, and bear markets

---

## C. Uninterrupted Compounding
**This is the magic of IBC:**

Borrowing against cash value means:
- Your **full cash value continues earning interest and dividends** even while collateralized
- Creates **positive spread effect** between growth and loan interest

### Example:
Cash value: $200k growing at 5%
Borrow: $100k at 4.5% loan rate

**Your $200k still earns 5%** ($10k/year)
**You pay 4.5%** on $100k ($4.5k/year)

**Net spread: +0.5%** ($500/year arbitrage)

---

## D. Tax Efficiency

Properly designed (7-pay test avoidance):

✅ **No tax on gains** (unlike IRAs with RMDs)
✅ **Loans are tax-free**
✅ **Death benefit passes income tax-free**

### Comparison:
- 401k/IRA: Taxed on withdrawal + RMDs required
- IBC: No tax on loans, no RMDs, complete control

---

## E. Protection Benefits

✅ Death benefit multiplies value from day one
✅ Acts as emergency capital
✅ Often **protected from creditors and lawsuits** (state-dependent)
✅ Prevents forced liquidation during retirement downturns ("**sequence-of-returns protection**")

---

## F. Multi-Use Functionality

IBC funds can be used for:
- Down payments
- Debt restructuring
- Business/startup funding
- Real estate investments
- College financing
- Retirement income supplementation
- Buying cars, equipment, etc.

**One capital reservoir, multiple financial roles.**
                """.trimIndent(),
                duration = 18,
                keyPoints = listOf(
                    "Policy becomes your private credit engine—no banks",
                    "Uninterrupted compounding: cash value grows even while borrowed",
                    "Triple tax advantage: deferred, tax-free loans, tax-free death",
                    "Sequence-of-returns protection during market crashes",
                    "Multi-use capital: one reservoir, unlimited applications"
                )
            ),

            Lesson(
                id = "ibc-deep-2",
                title = "Direct vs Non-Direct Recognition",
                content = """
# Direct Recognition vs Non-Direct Recognition
**Critical decision for IBC design**

---

## A. Non-Direct Recognition

The carrier does **NOT reduce the dividend** on cash value being used as collateral for a policy loan.

✅ Your cash value **grows as if no loan exists**
✅ The only cost is the **loan interest** you pay to the insurer

### Best for:
Aggressive IBC users who will **borrow regularly**.

### Pros:
✅ Stronger uninterrupted compounding
✅ Ideal for high leverage strategies (real estate, business)

### Cons:
❌ Loan interest rates may be slightly higher
❌ Fewer carriers offering non-direct recognition

---

## B. Direct Recognition

When you borrow, the carrier **adjusts dividends** on the portion of cash value serving as loan collateral.

This adjustment can be **up or down** depending on interest environment.

### Pros:
✅ Sometimes lower loan rates
✅ More carriers available
✅ Not always negative—good carriers may credit more during certain cycles

### Cons:
❌ Less advantageous for heavy loan users
❌ Dividend impact compounds long term

---

# IBC Loans vs Traditional Loans

| Feature | Traditional Loans | IBC Policy Loans |
|---------|------------------|------------------|
| **Qualification** | Credit checks, applications | None |
| **Terms** | Dictated by lender | You control |
| **Interest** | Paid to lender, lost forever | Recycled into your system |
| **Missed Payments** | Collections, repossession, credit damage | Policy continues |
| **Collateral** | Personal assets required | Secured by cash value |
| **Death During Loan** | Heirs responsible | Deducted from death benefit |

---

# IBC Loan Flexibility

## Traditional Bank Loan:
- Must repay on schedule
- Penalties for early payoff
- Credit impact if late

## IBC Policy Loan:
- ✅ Repay on **your schedule**
- ✅ **No penalties** for early/late payment
- ✅ **No credit impact**
- ✅ Can skip payments if needed
- ✅ Can increase payments to accelerate

**You are the bank—you make the rules.**
                """.trimIndent(),
                duration = 15,
                keyPoints = listOf(
                    "Non-direct recognition: cash grows as if no loan exists",
                    "Direct recognition: dividends adjusted on borrowed portion",
                    "IBC loans: no qualification, no credit checks, your schedule",
                    "Traditional loans: interest lost forever to banks",
                    "You control repayment—no penalties, no forced schedule"
                )
            ),

            Lesson(
                id = "ibc-deep-3",
                title = "Funding Strategy & Lifetime Wealth",
                content = """
# How Much Money Should Go Into a Policy vs Bank?

**The most misunderstood part of IBC.**

---

## A. Rule of Thumb Framework

You need:
✅ **Emergency liquidity: 3-6 months in cash** in a regular bank
✅ **Everything above that:** evaluate for policy funding

---

## Suggested Allocation

### Bank Account:
Short-term liquidity (3-6 months expenses)

### IBC Policy:
- Long-term capital
- Mid-term capital
- Savings
- Large purchases
- Investment reserves

---

## B. Practical Funding Guidelines

### 1. Minimum Premium Threshold
Use a level that:
- You can comfortably maintain **long-term**
- You can fund for **at least 7 years**
- You can increase later via PUAs if needed

**Common starting ranges:**
- $5k/year+
- $10k/year+
- $20k/year+ for high earners
- $50k-$100k+ for business owners

### 2. Upper Limit
Without triggering **7-pay MEC rules:**
- You can only place so much premium based on death benefit corridor
- A good designer can maximize cash value by minimizing base premium and maximizing PUAs

### 3. Balancing Practical Cash Needs

Ask yourself:
- How often will you borrow?
- For what purpose?
- What's your annual savings capacity?
- What is your long-term tax strategy?

**Generally:**
People place **20-50% of annual savings** into IBC-style policies.

Real estate investors often commit **much more** because they rely on leverage.

---

# Lifetime Wealth Potential of IBC

## A. Compounding Over Decades

Because:
- Premium contributions build cash value every year
- Growth continues even when leveraged
- Dividends compound
- Loan repayments recycle capital

**The long-term effect is exponential.**

---

## B. Lifetime Cycle Potential

### Early Years (1-7):
Capital accumulation, front-loading paid-up additions

### Middle Years (7-30):
Loan leverage for life purchases or investments

### Later Years (30-retirement):
Convert to tax-free retirement income stream

### End of Life:
Family receives **enhanced tax-free death benefit**

---

# Where IBC Helps Most

## Best-Fit Profiles:
- Business owners
- Real estate investors
- High earners who need tax shelters
- People who hate debt but want liquidity
- Families seeking long-term multi-use capital
- Individuals who want predictable growth
- Those who want to reduce dependency on banks

## Common Practical Uses:
✅ Self-financing cars (significant savings)
✅ Consolidating high-interest debt
✅ Investing in real estate (down payments)
✅ Emergency fund alternative
✅ Funding education without FAFSA impact
✅ Premium-financed strategies
✅ Retirement income replacement
✅ Family banking across generations

---

# Key Comparison

| Category | Traditional Bank | IBC Cash Value |
|----------|-----------------|----------------|
| **Liquidity** | High | High (with loan) |
| **Growth** | <1% APY | 3-5% + dividends |
| **Access Requirements** | Full underwriting | No underwriting |
| **Taxation** | Taxable annually | Tax-deferred + tax-free loans |
| **Interest Paid** | Lost forever | Recycled back to you |
| **Risk** | Bank risk + inflation | Policy guarantees + protected |
| **Credit Protection** | State-dependent | Often strong protection |
| **Flexibility** | Fixed terms | You control amortization |
| **Leverage** | Must qualify | Automatically approved |

---

# Summary

Infinite Banking offers:
- ✅ Long-term control
- ✅ Uninterrupted compounding
- ✅ Tax efficiency
- ✅ Multi-use capital advantages

**Traditional banking cannot provide these benefits.**

Most powerful when:
- Premiums are optimized
- PUAs are maximized
- Policy avoids MEC status
- Loans are used strategically
- Sufficient liquid cash remains outside policy

**Optimally executed, IBC becomes a lifetime financial engine and generational wealth system.**
                """.trimIndent(),
                duration = 25,
                keyPoints = listOf(
                    "Keep 3-6 months in bank, rest evaluates for IBC policy",
                    "Typical allocation: 20-50% of annual savings into IBC",
                    "Lifetime cycle: accumulation → leverage → retirement income → legacy",
                    "Perfect for business owners, real estate investors, high earners",
                    "One reservoir replaces banks for cars, real estate, business, retirement"
                )
            )
        )
    ),

    // INDEXED UNIVERSAL LIFE (IUL) MODULE
    Module(
        id = "iul-deep",
        title = "Indexed Universal Life (IUL)",
        description = "Market-linked growth with downside protection: caps, floors, participation rates, and tax-free retirement",
        category = "Life Insurance",
        image = "https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050202456_a1c4d8f3.webp",
        color = "bg-indigo-700",
        icon = "📊",
        estimatedTime = "45 min",
        difficulty = "Advanced",
        lessons = listOf(
            Lesson(
                id = "iul-1",
                title = "Core Structure & How It Works",
                videoUrl = "https://youtu.be/8x229HAKaG0",
                videoType = VideoType.YOUTUBE,
                content = """
# Indexed Universal Life (IUL)

## Core Structure
**IUL = permanent life insurance + flexible premiums + cash value credited based on index performance**

Common indexes:
- S&P 500
- Nasdaq 100
- Euro Stoxx
- Global indexes

⚠️ **It does NOT invest directly in the index.**

Instead, the carrier uses **options pricing** to credit interest.

---

# How It Works

## Premium Flow:
Premiums go toward:
1. **COI (cost of insurance)** — pays for death benefit
2. **Fees** — policy charges and riders
3. **Indexed credit bucket** — cash value growth

## Cash Value Credits:
Cash value earns interest **tied to external index** with:

### Floor (commonly 0% or 1%):
Protects against negative years

### Cap (e.g., 8%-12%):
Limits upside

**OR**

### Participation Rate (e.g., 120%):
You get 120% of index return up to cap

---

## Overfunding Strategy:
Excess premiums above minimum create **overfunding** → maximizing cash value.

## Loan Options:
- **Fixed loans** — standard rate
- **Participating/"zero wash" loans** — cash value continues crediting

## Death Benefit Options:
- **Option A (level)** — fixed death benefit
- **Option B (increasing)** — death benefit = face + cash value

---

# Principal Protection

**Cash value never loses money due to market downturns.**

### Example:
- Year 1: S&P +15%, you get 12% (capped at 12%)
- Year 2: S&P +5%, you get 5%
- Year 3: S&P -8%, you get 0% (floor protection)
- Year 4: S&P +20%, you get 12% (capped)

**Result:**
- 4-year average: 7.25% credited
- S&P 4-year average: 8%
- But **zero losses** in down year

---

# Index Crediting Methods

## 1. Annual Point-to-Point
Index value compared year-over-year

## 2. Monthly Average
Average of 12 monthly index values

## 3. Monthly Point-to-Point with Cap
Best month-to-month performance up to cap

**Each method has different cap/participation structures.**
                """.trimIndent(),
                duration = 15,
                keyPoints = listOf(
                    "Market-linked via options, not direct investment",
                    "0-1% floor protects against losses in down markets",
                    "Caps (8-12%) limit upside in strong years",
                    "Flexible premiums—overfund for maximum cash value",
                    "Principal protection—never loses money to market"
                )
            ),

            Lesson(
                id = "iul-2",
                title = "Advantages, Disadvantages & Strategy",
                content = """
# Advantages of IUL

## 1. Principal Protection
Cash value **never loses money** due to market downturns.

## 2. Moderate Growth Potential
Captures part of index upside without downside risk.

## 3. Flexible Premiums
Can:
- Increase premiums
- Decrease premiums
- Skip premiums (if enough cash value exists)

## 4. Loan Leverage Potential
**"Spread" loans** let you borrow at fixed rate while cash value credits continue.

### Example:
- Borrow at 4%
- Cash value earning 8%
- **Net positive spread: 4%**

## 5. Tax-Advantaged Asset Class
- Tax-deferred growth
- Tax-free loans
- Tax-free death benefit

## 6. Great for Overfunding
MEC limits matter, but structured properly, IUL behaves like **tax-advantaged savings vehicle** with life insurance.

---

# Disadvantages of IUL

## 1. Caps and Participation Rates Change
Carriers can **adjust these down**, affecting returns.

⚠️ What's 12% cap today might be 9% in 5 years.

## 2. COI Increases With Age
A **poorly funded IUL can implode** later in life.

## 3. Complexity
Index crediting rules, cap spreads, multipliers, bonuses, and costs make it **easy to misunderstand**.

## 4. Requires Long-Term Discipline
Front-loading payments is **almost always necessary**.

## 5. Loan Management
Mismanaged loans can cause **policy lapses**.

---

# Loan Structure

## Two Main Loan Types:

### 1. Fixed Loan:
- You borrow cash
- Carrier charges fixed rate
- Cash value moved to fixed bucket

### 2. Indexed/Participating Loan:
- Cash value **stays in indexed account**
- Gaining interest while you borrow
- Interest rate designed for **positive spread**

**Key risk:** If caps drop or COI increases, loan spreads may not perform as expected.

---

# Suitable For

✅ High earners who want **tax-free retirement income**
✅ People who value **principal protection** more than raw upside
✅ Anyone who wants **flexibility in premium timing**
✅ Individuals seeking blend of insurance and equity-linked savings **without true market volatility**

---

# Poor Fit For

❌ People who cannot commit to **consistent overfunding** in early years
❌ Anyone expecting **stock market-level returns**
❌ Individuals who cannot manage long-term
❌ Very elderly clients (COI too high)

---

# How It Compares

## IUL vs Whole Life
- **WL:** Guaranteed growth + dividends + stability, but lower upside
- **IUL:** No guarantees beyond floor + higher upside + more flexibility
- **WL loans:** More predictable
- **IUL loans:** Depend on credited rates

## IUL vs Variable Life
- **VLI:** Full market risk, no floor, high volatility
- **IUL:** Market-linked with downside protection but capped upside
- **IUL** generally better for retirement distribution planning

## IUL vs Term
- **Term:** Pure coverage, no cash value, cheapest
- **IUL:** Permanent + doubles as tax-advantaged savings system

---

# Tax Advantages

✅ **Tax-deferred accumulation**
✅ **Tax-free withdrawals to basis**
✅ **Tax-free loans for life** (if policy remains in force)
✅ **Step-up through death benefit** for heirs

**Excellent for retirement income planning as a tax-free bucket.**

---

# Lifetime Potential Benefits

✅ Tax-free retirement distributions through loans
✅ Long-term asset accumulation with built-in downside risk control
✅ Estate advantages: death benefit bypasses probate
✅ Supplemental tax-free income for major expenses
✅ **Liquidity source when markets crash**—borrow without selling assets at a loss

---

# Summary

IUL provides:
- Principal protection (0-1% floor)
- Market-linked growth (capped at 8-12%)
- Flexible premiums
- Tax-free retirement income via loans
- Best for high earners seeking tax shelters with moderate growth

**Requires:**
- Consistent overfunding early
- Long-term discipline
- Understanding of cap/participation changes
- Active monitoring
                """.trimIndent(),
                duration = 22,
                keyPoints = listOf(
                    "Principal protection with moderate market-linked growth",
                    "Caps and rates can change—not guaranteed like whole life",
                    "Requires overfunding early—underfunded IUL collapses",
                    "Tax-free retirement via loans—excellent for high earners",
                    "Liquidity during crashes—borrow without selling assets"
                )
            )
        )
    )
)
