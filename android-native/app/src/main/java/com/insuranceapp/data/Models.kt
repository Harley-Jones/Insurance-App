package com.insuranceapp.data

/**
 * Data models for the Insurance Education App
 * Converted from TypeScript interfaces
 */

data class Lesson(
    val id: String,
    val title: String,
    val content: String,
    val videoUrl: String? = null,
    val videoType: VideoType? = null,
    val duration: Int = 0,
    val keyPoints: List<String> = emptyList(),
    val quiz: Quiz? = null,
    val transcript: String? = null,
    val resources: List<Resource> = emptyList()
)

enum class VideoType {
    YOUTUBE,
    VIMEO,
    MP4
}

data class Quiz(
    val questions: List<Question>
)

data class Question(
    val id: String,
    val question: String,
    val options: List<String>,
    val correctAnswer: Int,
    val explanation: String
)

data class Resource(
    val title: String,
    val url: String,
    val type: String
)

data class Module(
    val id: String,
    val title: String,
    val description: String,
    val category: String,
    val image: String,
    val color: String,
    val icon: String? = null,
    val estimatedTime: String = "",
    val difficulty: String = "Beginner",
    val lessons: List<Lesson> = emptyList(),
    val prerequisites: List<String> = emptyList(),
    val quiz: Quiz? = null
)

data class GamificationData(
    val points: Int = 0,
    val level: Int = 1,
    val streak: Int = 0,
    val achievements: List<Achievement> = emptyList(),
    val lastVisit: Long = System.currentTimeMillis()
)

data class Achievement(
    val id: String,
    val title: String,
    val description: String,
    val icon: String,
    val unlockedAt: Long? = null
)

data class UserProgress(
    val moduleId: String,
    val lessonId: String,
    val completed: Boolean = false,
    val progress: Float = 0f,
    val lastAccessed: Long = System.currentTimeMillis()
)

// Point values for gamification
object PointValues {
    const val LESSON_COMPLETE = 100
    const val QUIZ_CORRECT = 25
    const val QUIZ_PERFECT = 150
    const val MODULE_COMPLETE = 500
    const val DAILY_LOGIN = 50
    const val STREAK_BONUS = 25
}

// Level thresholds
data class Level(
    val level: Int,
    val name: String,
    val minPoints: Int,
    val color: String
)

val levels = listOf(
    Level(1, "Beginner", 0, "bg-gray-500"),
    Level(2, "Learner", 500, "bg-blue-500"),
    Level(3, "Student", 1500, "bg-green-500"),
    Level(4, "Scholar", 3000, "bg-purple-500"),
    Level(5, "Expert", 5000, "bg-orange-500"),
    Level(6, "Master", 8000, "bg-red-500"),
    Level(7, "Guru", 12000, "bg-pink-500"),
    Level(8, "Legend", 20000, "bg-gradient-to-r from-yellow-400 to-orange-500")
)
