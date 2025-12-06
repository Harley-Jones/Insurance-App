package com.insuranceapp.data

/**
 * All comprehensive educational modules combined
 * Includes professional-grade content across multiple categories
 */

val sampleModules = listOf(
    // Consumer Protection module
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
    )
) + comprehensiveModules + protectionModules + lifeInsuranceModules
