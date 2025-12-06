package com.insuranceapp.data

/**
 * Comprehensive Educational Modules
 * Professional-grade insurance and finance education content
 */

val comprehensiveModules = listOf(

    // FIXED ANNUITIES MODULE
    Module(
        id = "fixed-annuities",
        title = "Fixed Annuities — Complete Guide",
        description = "Master fixed annuities: guaranteed growth, tax-deferred accumulation, and lifetime income strategies",
        category = "Annuities",
        image = "https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050201678_72ba0062.webp",
        color = "bg-green-600",
        icon = "💰",
        estimatedTime = "60 min",
        difficulty = "Intermediate",
        lessons = listOf(
            Lesson(
                id = "fixed-annuities-1",
                title = "Core Definition & Structure",
                content = """
# Fixed Annuities — Core Definition

A fixed annuity is a **contract between an individual (the annuitant) and an insurance company**. The individual deposits money—either as a lump sum or over time. In return, the insurer guarantees:

## What You Get
✅ **Fixed interest rate** on deposited funds
✅ **Protection of principal** — cannot lose value
✅ **Predictable accumulation** of value
✅ **Optional conversion** into guaranteed lifetime income

## Primary Function
Fixed annuities function as **low-risk, tax-deferred wealth accumulation** or **income-generation tools** primarily used for retirement.

## Types of Fixed Annuities

### Multi-Year Guaranteed Annuities (MYGAs)
- Guarantee a fixed interest rate for 3, 5, 7, or 10 years
- Operate similarly to CDs but with **higher yields**
- Tax deferral and no market risk

### Single Premium Immediate Annuities (SPIAs)
- One lump payment
- Income begins **immediately** (within 30 days to 12 months)
- Creates lifetime or term-certain monthly income

### Deferred Income Annuities (DIAs)
- Lump payment now, income starts in the future (10-20 years)
- Used for **pension-like planning** and longevity protection

### Traditional Fixed Deferred Annuities
- Money accumulates at fixed interest rate
- Income can begin later or used for withdrawals

## The Three Guarantees

**1. Principal Protection**
The insurer absorbs ALL market risk. Your account value cannot decline due to market events.

**2. Guaranteed Interest Rate**
This rate is contractually locked for the "guarantee period" or may shift to a minimum guaranteed rate.

**3. Tax-Deferred Growth**
Earnings accumulate without taxation until withdrawal or annuitization. This allows compound interest to work more efficiently than taxable products.
                """.trimIndent(),
                duration = 15,
                keyPoints = listOf(
                    "Fixed annuities guarantee principal, interest rate, and tax-deferred growth",
                    "MYGAs work like CDs but with higher yields and tax deferral",
                    "SPIAs create immediate lifetime income streams",
                    "No market risk—insurance company absorbs all volatility",
                    "Superior to bank products for long-term accumulation"
                )
            ),

            Lesson(
                id = "fixed-annuities-2",
                title = "Accumulation & Income Phases",
                content = """
# Accumulation Phase — Detailed Mechanics

During the **deferral phase**, your money works for you:

## Growth Features
- You earn a **guaranteed fixed interest rate** on your premium
- Interest **compounds tax-deferred** (unless in qualified account)
- Withdrawals before age 59½ may incur **IRS 10% penalty + taxes**
- Surrender charges apply for withdrawals above free amount (often 10% annually)

## Standard Features
✅ **Minimum guaranteed interest rate**
✅ **Guaranteed death benefit** equal to accumulated value
✅ **No loss of principal** unless you surrender early
✅ Optional riders for long-term care or enhanced income

---

# Income Phase — Payout Options

At time of **annuitization**, the owner chooses payout structure:

## 1. Life Only
- **Maximum monthly income**
- Payments stop at death
- Use when maximizing cash flow is priority

## 2. Life with Period Certain
- Guaranteed income for life
- Ensures at least 10, 15, or 20 years of payments to beneficiaries if early death

## 3. Joint Life
- Covers two individuals
- Payments continue until second person dies
- Perfect for married couples

## 4. Fixed Period (No Life Guarantee)
- Pays for a set number of years (10, 20, 30)
- Not tied to lifespan

## 5. Systematic Withdrawals (Non-Annuitized)
- Flexible withdrawals instead of annuitization
- Maintains control of remaining balance
                """.trimIndent(),
                duration = 12,
                keyPoints = listOf(
                    "Accumulation phase features tax-deferred compound growth",
                    "Surrender charges protect against early withdrawal",
                    "Life Only option provides maximum monthly income",
                    "Life with Period Certain protects beneficiaries",
                    "Systematic withdrawals maintain flexibility"
                )
            ),

            Lesson(
                id = "fixed-annuities-3",
                title = "Advantages vs Disadvantages",
                content = """
# Advantages — Deep, Practical Breakdown

## 1. Principal Protection
Fixed annuities are backed by the insurance company's general account. Unlike securities, **they cannot lose value** due to market declines.

## 2. Predictable, Stable Growth
Appeals to:
- Conservative savers
- Retirees
- Anyone with low risk tolerance
- Individuals worried about volatility in retirement

## 3. Superior Yields vs CDs
Because insurers can invest longer-term with diverse portfolios, fixed annuity rates often **exceed**:
- Bank CDs
- Money market accounts
- Treasury equivalents

## 4. Tax-Deferred Growth
**A major differentiator.**
- CDs and savings accounts are taxed annually
- Fixed annuities grow untouched
- Dramatically increases compounding efficiency

## 5. Guaranteed Lifetime Income
**No other financial product** (besides pensions or Social Security) can legally guarantee a lifetime income stream.

## 6. Not Correlated to Market Risk
- No sequence-of-returns risk
- Ideal for retirement income floors
- Stabilizes overall portfolio volatility

## 7. Creditor Protection (State-Specific)
Many states offer strong protection for annuities against lawsuits and creditors.

---

# Disadvantages — Full Transparency

## 1. Limited Liquidity
Surrender periods (5-10 years typical) restrict access to full funds.

## 2. Not Designed for Aggressive Growth
Returns are modest compared to stocks, variable annuities, real estate.

## 3. Inflation Risk
Fixed interest may lag inflation in high-inflation environments unless riders added.

## 4. Early Withdrawal Penalties
- **IRS**: 10% penalty before 59½
- **Insurer**: Surrender charges if exceeding free withdrawal limits

## 5. Irrevocable Annuitization
Once you annuitize (turn into lifetime income), the decision **cannot typically be reversed**.
                """.trimIndent(),
                duration = 18,
                keyPoints = listOf(
                    "Principal protection eliminates market risk completely",
                    "Tax-deferred growth dramatically increases compound efficiency",
                    "Guaranteed lifetime income—unique to annuities and pensions",
                    "Limited liquidity during surrender period (5-10 years)",
                    "Inflation risk unless riders purchased"
                )
            ),

            Lesson(
                id = "fixed-annuities-4",
                title = "Strategic Uses & Suitability",
                content = """
# Suitability — Who Should Use Fixed Annuities?

## ✅ Ideal For:
- Individuals needing **guaranteed lifetime income**
- **Conservative investors**
- Pre-retirees wanting to lock stable growth
- People seeking **bond alternatives**
- Individuals building a "retirement paycheck" floor
- Savers tired of bank yields and market volatility

## ❌ Not Ideal For:
- High-risk/high-growth investors
- Those needing high liquidity
- Individuals with short time horizons
- Anyone expecting equity-like returns

---

# Strategic Uses

## 1. Retirement Income Flooring
Layer fixed annuities with Social Security to **guarantee minimum lifetime income**.

## 2. Bond Replacement
Fixed annuities often **outperform traditional bond yields** without the volatility.

## 3. Sequence-of-Returns Risk Reduction
Avoid withdrawing from a declining market by using annuity income instead.

## 4. Longevity Insurance
DIAs/SPIAs protect against **outliving assets**.

## 5. Tax-Favored Growth After Age 50+
Especially for individuals catching up on retirement planning.

---

# Contribution Strategy

## Do NOT Put Emergency Reserves Into an Annuity

**Typical liquidity strategy:**
- 3-12 months of expenses in bank accounts
- Long-term or "safe bucket" money into fixed annuities

## Allocation Examples (Varies by Risk Tolerance)

**Conservative Portfolio:**
- 40-60% annuity
- 20-40% bonds
- Rest equities

**Income-Focused Retiree:**
- 50-80% annuity-based income

**Laddering Strategy:**
- MYGAs with staggered maturities
- Allows consistent rate optimization

---

# Key Takeaways

✅ Fixed annuities are **stability engines**, not growth engines
✅ Eliminate market risk, guarantee income, provide dependable tax-deferred accumulation
✅ Foundational tools for retirement income planning
✅ Ideal for conservative portfolios and long-term risk mitigation
                """.trimIndent(),
                duration = 15,
                keyPoints = listOf(
                    "Perfect for conservative investors and pre-retirees",
                    "Use for retirement income flooring with Social Security",
                    "Bond replacement strategy with higher yields",
                    "Keep 3-12 months expenses liquid, rest in annuities",
                    "Ladder MYGAs for consistent rate optimization"
                )
            )
        )
    ),

    // INDEXED ANNUITIES (FIA) MODULE
    Module(
        id = "indexed-annuities",
        title = "Indexed Annuities (FIA) — Deep Dive",
        description = "Market-linked growth with principal protection: caps, participation rates, and lifetime income riders",
        category = "Annuities",
        image = "https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050202456_a1c4d8f3.webp",
        color = "bg-indigo-600",
        icon = "📈",
        estimatedTime = "45 min",
        difficulty = "Advanced",
        lessons = listOf(
            Lesson(
                id = "fia-1",
                title = "What Are Fixed Indexed Annuities?",
                content = """
# Fixed Indexed Annuities (FIAs)

A fixed indexed annuity is a **hybrid** between a fixed annuity and a market-linked product.

## Core Concept
Your **principal is protected** like a fixed annuity, but your **growth is tied to an index** (S&P 500, Nasdaq 100, Dow, etc.) through a formula involving:
- Caps
- Spreads
- Participation rates

## Design Purpose
They are designed to give **better potential growth** than fixed annuities **without taking on the full market risk** of variable annuities.

⚠️ **This is one of the most misunderstood—and abused—products in the industry.**

---

# Structural Features

## 1. Principal Protection
✅ Your contract value **cannot go down** due to market performance
✅ Worst-case credited interest: **0%** (you just don't gain for that period)

## 2. Index Tracking (Not Investing)
You are **not directly in the market**.

Instead, the annuity company **credits you a return** based on an index formula.

### Common Crediting Components:

**Participation Rate:**
- Example: You get 60% of the index growth
- If S&P grows 10%, you get 6%

**Cap Rate:**
- Example: Max credited return is 7%
- Even if index grows 20%, you get 7%

**Spread/Asset Fee:**
- Example: Index return minus 1.25%
- If S&P grows 8%, you get 6.75%

## 3. Tax Deferral
Growth compounds without tax until withdrawn.

## 4. Surrender Schedule
- Typically **7-12 years**
- Withdrawals beyond free amount (usually 10%) incur surrender charges
                """.trimIndent(),
                duration = 12,
                keyPoints = listOf(
                    "Hybrid product: principal protection + market-linked growth",
                    "Not direct market investing—uses crediting formulas",
                    "0% floor protects against losses in down markets",
                    "Growth limited by caps, participation rates, or spreads",
                    "7-12 year surrender schedules typical"
                )
            ),

            Lesson(
                id = "fia-2",
                title = "Advantages & Income Riders",
                content = """
# Advantages of FIAs

## A. Market Upside Without Market Losses
**This is the big pitch:**
- You can **gain when markets rise**
- You **never lose when markets drop**

## B. Hedged Growth Strategy
Insurance companies use **options strategies** (like call option buys) to generate index-linked growth while maintaining principal guarantees.

## C. Guaranteed Income Riders (Optional)
Many FIAs offer:

### Guaranteed Lifetime Withdrawal Benefits (GLWB)
- Withdraw a percentage annually for life
- Payments continue even if account value hits zero

### Guaranteed Minimum Income Benefits (GMIB)
- Converts to lifetime income stream
- Often based on higher "income value" than cash value

These provide **lifetime income streams** that can exceed what fixed or variable annuities provide when optimized.

## D. Death Benefits
- Passes to beneficiaries, often avoiding probate
- Some include enhanced death benefit riders

## E. No Direct Market Exposure
No stock market crashes can touch the principal.

## F. Contractual Guarantees
Even in long flat markets, you still earn something via fixed accounts or minimum guarantees.

---

# Lifetime Income Potential

## A. Guaranteed Lifetime Income
FIAs with income riders often **outperform pensions** and many variable annuities due to:
- Income roll-up rates (5-8% annually on income base)
- Benefit multipliers
- Guaranteed payout factors

## B. Sequence-of-Returns Protection
If someone retires during a market crash, FIAs protect:
- Income stream
- Principal value
- Distribution schedule

## C. Portfolio Risk Buffer
Financial planners often use FIAs to:
- Reduce investment volatility
- Extend portfolio survival length
- Cover essential expenses with guaranteed income

## D. Longevity Hedge
You **cannot outlive income** from a lifetime income rider.
                """.trimIndent(),
                duration = 15,
                keyPoints = listOf(
                    "Gain in up markets, 0% floor in down markets",
                    "Optional lifetime income riders provide guaranteed paycheck",
                    "Income base grows 5-8% annually even if market flat",
                    "Sequence-of-returns protection during retirement",
                    "Cannot outlive income from GLWB riders"
                )
            )
        )
    )
)
