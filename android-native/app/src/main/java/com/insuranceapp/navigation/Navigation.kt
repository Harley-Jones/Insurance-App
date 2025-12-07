package com.insuranceapp.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.insuranceapp.data.GamificationData
import com.insuranceapp.data.Lesson
import com.insuranceapp.data.Module
import com.insuranceapp.ui.screens.DashboardScreen
import com.insuranceapp.ui.screens.HeroScreen
import com.insuranceapp.ui.screens.LessonScreen

sealed class Screen(val route: String) {
    object Hero : Screen("hero")
    object Dashboard : Screen("dashboard")
    object Lesson : Screen("lesson")
}

@Composable
fun AppNavigation(
    navController: NavHostController = rememberNavController(),
    gamificationData: GamificationData = GamificationData(),
    modules: List<Module> = emptyList(),
    videoUrl: String? = null
) {
    NavHost(
        navController = navController,
        startDestination = Screen.Hero.route
    ) {
        composable(Screen.Hero.route) {
            HeroScreen(
                gamificationData = gamificationData,
                totalModules = modules.size,
                completedModules = 0,
                overallProgress = 0f,
                videoUrl = videoUrl,
                onNavigateToDashboard = {
                    navController.navigate(Screen.Dashboard.route)
                }
            )
        }

        composable(Screen.Dashboard.route) {
            DashboardScreen(
                modules = modules,
                onModuleClick = { module ->
                    // TODO: Navigate to module detail screen
                    // For now, navigate to first lesson if available
                    if (module.lessons.isNotEmpty()) {
                        navController.navigate(Screen.Lesson.route)
                    }
                },
                onBackClick = {
                    navController.popBackStack()
                }
            )
        }

        composable(Screen.Lesson.route) {
            // Sample lesson - in production, this would be passed as a navigation argument
            val sampleLesson = modules.firstOrNull()?.lessons?.firstOrNull() ?: Lesson(
                id = "sample",
                title = "Sample Lesson",
                content = "This is a sample lesson content.",
                keyPoints = listOf("Point 1", "Point 2", "Point 3")
            )

            LessonScreen(
                lesson = sampleLesson,
                onComplete = {
                    // Handle lesson completion
                    navController.popBackStack()
                },
                onBackClick = {
                    navController.popBackStack()
                }
            )
        }
    }
}
