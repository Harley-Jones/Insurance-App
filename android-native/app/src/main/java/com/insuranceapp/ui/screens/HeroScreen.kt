package com.insuranceapp.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.insuranceapp.data.GamificationData
import com.insuranceapp.data.Level
import com.insuranceapp.data.levels
import com.insuranceapp.ui.components.BackgroundVideoPlayer
import com.insuranceapp.ui.theme.*

@Composable
fun HeroScreen(
    gamificationData: GamificationData,
    totalModules: Int,
    completedModules: Int,
    overallProgress: Float,
    videoUrl: String? = null,
    onNavigateToDashboard: () -> Unit = {}
) {
    var isMuted by remember { mutableStateOf(true) }
    val currentLevel = remember(gamificationData.points) {
        levels.findLast { it.minPoints <= gamificationData.points } ?: levels.first()
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(
                Brush.verticalGradient(
                    colors = listOf(Blue900, Indigo900, Purple900)
                )
            )
    ) {
        // Background Video (if available)
        if (videoUrl != null) {
            BackgroundVideoPlayer(
                videoUrl = videoUrl,
                modifier = Modifier
                    .fillMaxSize()
                    .alpha(0.3f),
                onMuteToggle = { isMuted = !isMuted }
            )
        }

        // Content overlay
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(24.dp)
                .statusBarsPadding()
                .navigationBarsPadding(),
            verticalArrangement = Arrangement.SpaceBetween
        ) {
            Spacer(modifier = Modifier.height(40.dp))

            // Main content
            Column(
                modifier = Modifier.weight(1f),
                verticalArrangement = Arrangement.Center
            ) {
                // Title
                Text(
                    text = "Become Your Own Bank",
                    style = MaterialTheme.typography.displayMedium,
                    color = Color.White,
                    fontWeight = FontWeight.Bold
                )

                Spacer(modifier = Modifier.height(16.dp))

                // Description
                Text(
                    text = "Learn everything about life insurance, annuities, and wealth-building strategies without the pressure of a sales environment. Master the Infinite Banking Concept and discover how to recapture the interest you pay to banks. 100% private learning—all data stays on your device.",
                    style = MaterialTheme.typography.bodyLarge,
                    color = Blue200
                )

                Spacer(modifier = Modifier.height(32.dp))

                // Stats cards
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                    StatsCard(
                        title = "Learning Modules",
                        value = totalModules.toString(),
                        modifier = Modifier.weight(1f)
                    )
                    StatsCard(
                        title = "Completed",
                        value = completedModules.toString(),
                        modifier = Modifier.weight(1f)
                    )
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Achievement badges
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    AchievementBadge(
                        icon = Icons.Default.EmojiEvents,
                        label = currentLevel.name,
                        backgroundColor = Blue600
                    )
                    AchievementBadge(
                        icon = Icons.Default.LocalFireDepartment,
                        label = "${gamificationData.streak} Day Streak",
                        backgroundColor = Orange500
                    )
                    AchievementBadge(
                        icon = Icons.Default.Star,
                        label = "${gamificationData.points} Points",
                        backgroundColor = Purple600
                    )
                }

                Spacer(modifier = Modifier.height(32.dp))

                // Progress ring section
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(16.dp))
                        .background(Color.White.copy(alpha = 0.1f))
                        .padding(24.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Column(
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        Text(
                            text = "Your Progress",
                            style = MaterialTheme.typography.headlineSmall,
                            color = Color.White,
                            fontWeight = FontWeight.Bold
                        )

                        Spacer(modifier = Modifier.height(16.dp))

                        ProgressRing(
                            progress = overallProgress,
                            size = 200.dp
                        )
                    }
                }
            }

            // Start learning button
            Button(
                onClick = onNavigateToDashboard,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(56.dp),
                colors = ButtonDefaults.buttonColors(
                    containerColor = Amber500
                )
            ) {
                Text(
                    text = "Start Learning",
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold,
                    color = Gray900
                )
            }
        }
    }
}

@Composable
private fun StatsCard(
    title: String,
    value: String,
    modifier: Modifier = Modifier
) {
    Box(
        modifier = modifier
            .clip(RoundedCornerShape(12.dp))
            .background(Color.White.copy(alpha = 0.1f))
            .padding(16.dp)
    ) {
        Column {
            Text(
                text = value,
                style = MaterialTheme.typography.headlineMedium,
                color = Color.White,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = title,
                style = MaterialTheme.typography.bodyMedium,
                color = Blue200
            )
        }
    }
}

@Composable
private fun AchievementBadge(
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    label: String,
    backgroundColor: Color,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .clip(RoundedCornerShape(8.dp))
            .background(backgroundColor.copy(alpha = 0.8f))
            .padding(horizontal = 12.dp, vertical = 8.dp),
        horizontalArrangement = Arrangement.spacedBy(6.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = Color.White,
            modifier = Modifier.size(20.dp)
        )
        Text(
            text = label,
            style = MaterialTheme.typography.labelLarge,
            color = Color.White,
            fontWeight = FontWeight.SemiBold
        )
    }
}

@Composable
private fun ProgressRing(
    progress: Float,
    size: androidx.compose.ui.unit.Dp,
    modifier: Modifier = Modifier
) {
    Box(
        modifier = modifier.size(size),
        contentAlignment = Alignment.Center
    ) {
        CircularProgressIndicator(
            progress = { progress / 100f },
            modifier = Modifier.size(size),
            color = Amber500,
            strokeWidth = 12.dp,
            trackColor = Color.White.copy(alpha = 0.2f)
        )

        Text(
            text = "${progress.toInt()}%",
            style = MaterialTheme.typography.displaySmall,
            color = Color.White,
            fontWeight = FontWeight.Bold
        )
    }
}
