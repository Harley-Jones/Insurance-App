package com.insuranceapp.data

/**
 * Sample data for demonstrating the app
 * In production, this would be loaded from the converted TypeScript data files
 */

val sampleModules = listOf(
    Module(
        id = "infinite-banking",
        title = "Become Your Own Bank",
        description = "Master the Infinite Banking Concept and take control of your financial future.",
        category = "Infinite Banking",
        image = "https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050200456_e62d7b22.webp",
        color = "bg-amber-500",
        icon = "🏦",
        estimatedTime = "45 min",
        difficulty = "Beginner",
        lessons = listOf(
            Lesson(
                id = "ibc-1",
                title = "The Banking Crisis You Don't See",
                content = """
                    Every time you finance a car, home, or business, you pay interest to banks.
                    Over a lifetime, the average person pays $600,000+ in interest.

                    What if you could recapture that wealth?

                    Traditional banking systems are designed to extract wealth from consumers through
                    interest payments, fees, and restrictive lending practices. By understanding how
                    money flows, you can redirect this wealth back into your own financial system.
                """.trimIndent(),
                videoUrl = "https://example.com/video1.mp4",
                videoType = VideoType.MP4,
                duration = 12,
                keyPoints = listOf(
                    "Banks profit from your borrowing",
                    "Interest compounds against you",
                    "Traditional advice keeps you dependent",
                    "Recapture lost opportunity cost"
                )
            ),
            Lesson(
                id = "ibc-2",
                title = "How the Wealthy Use Life Insurance",
                content = """
                    The ultra-wealthy have used dividend-paying whole life insurance for over 100 years
                    to build tax-free wealth, create liquidity, and finance their own purchases.

                    This strategy isn't taught in schools because it threatens traditional banking models.

                    Families like the Rockefellers and Rothschilds have used these principles for
                    generations to preserve and grow wealth across multiple lifetimes.
                """.trimIndent(),
                duration = 10,
                keyPoints = listOf(
                    "Tax-free growth",
                    "Borrow against cash value",
                    "Uninterrupted compounding",
                    "Legacy wealth transfer"
                )
            )
        )
    ),
    Module(
        id = "consumer-protection",
        title = "Consumer Protection & Ethical Advisors",
        description = "Learn how to identify trustworthy advisors and protect yourself from manipulative sales tactics",
        category = "Consumer Protection",
        image = "https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764051423978_4ba519a7.webp",
        color = "bg-emerald-600",
        icon = "🛡️",
        estimatedTime = "30 min",
        difficulty = "Beginner",
        lessons = listOf(
            Lesson(
                id = "red-flags",
                title = "Red Flags: Manipulative Sales Tactics",
                content = """
                    Learn to recognize and avoid manipulative sales tactics in the financial industry.

                    High-pressure tactics like "This offer expires today!" create artificial urgency.
                    Legitimate advisors give you time to make informed decisions.

                    Watch for dark psychology principles: reciprocity manipulation, social proof abuse,
                    scarcity tactics, and authority exploitation.
                """.trimIndent(),
                videoUrl = "https://www.youtube.com/watch?v=sVi-2-0RaEc",
                videoType = VideoType.YOUTUBE,
                duration = 12,
                keyPoints = listOf(
                    "Artificial urgency is a red flag",
                    "Free seminars create obligation",
                    "Verify all credentials independently",
                    "Take time to make decisions"
                )
            )
        )
    ),
    Module(
        id = "whole-life",
        title = "Whole Life Insurance Deep Dive",
        description = "Comprehensive understanding of whole life insurance policies and their benefits",
        category = "Life Insurance",
        image = "https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050198697_45624597.webp",
        color = "bg-blue-600",
        icon = "📊",
        estimatedTime = "60 min",
        difficulty = "Intermediate",
        lessons = listOf(
            Lesson(
                id = "whole-life-intro",
                title = "Introduction to Whole Life Insurance",
                content = """
                    Whole life insurance provides permanent coverage with level premiums and
                    guaranteed cash value growth.

                    Unlike term insurance, whole life builds cash value that you can access
                    during your lifetime through policy loans or withdrawals.

                    The policy includes both a death benefit and a living benefit component,
                    making it a versatile financial tool.
                """.trimIndent(),
                duration = 15,
                keyPoints = listOf(
                    "Permanent coverage with level premiums",
                    "Guaranteed cash value accumulation",
                    "Tax-advantaged growth",
                    "Living benefits through policy loans"
                )
            )
        )
    ),
    Module(
        id = "term-life",
        title = "Term Life Insurance",
        description = "Understanding term life insurance and when it makes sense",
        category = "Life Insurance",
        image = "https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050199890_956bba9e.webp",
        color = "bg-purple-600",
        icon = "⏱️",
        estimatedTime = "25 min",
        difficulty = "Beginner"
    ),
    Module(
        id = "annuities",
        title = "Annuities Explained",
        description = "Complete guide to annuities and retirement income strategies",
        category = "Annuities",
        image = "https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050201678_72ba0062.webp",
        color = "bg-green-600",
        icon = "💰",
        estimatedTime = "40 min",
        difficulty = "Intermediate"
    ),
    Module(
        id = "grip",
        title = "Guaranteed Retirement Income Program (GRIP)",
        description = "Learn about GRIP strategies for guaranteed lifetime income",
        category = "Retirement",
        image = "https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050202456_a1c4d8f3.webp",
        color = "bg-indigo-600",
        icon = "🎯",
        estimatedTime = "35 min",
        difficulty = "Advanced"
    )
)
