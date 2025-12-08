package com.insuranceapp.ui.screens

import androidx.compose.animation.core.*
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
import androidx.compose.ui.draw.blur
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.insuranceapp.data.GamificationData
import com.insuranceapp.data.Level
import com.insuranceapp.data.levels
import com.insuranceapp.ui.components.*
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
    ) {
        // Animated mesh gradient background
        AnimatedMeshGradient(
            modifier = Modifier.fillMaxSize(),
            colors = listOf(Blue900, Indigo900, Purple900, Blue800)
        )

        // Floating decorative orbs
        FloatingOrb(
            modifier = Modifier
                .offset(x = (-50).dp, y = 100.dp),
            color = Purple600,
            size = 300.dp,
            duration = 8000
        )

        FloatingOrb(
            modifier = Modifier
                .offset(x = 250.dp, y = 400.dp),
            color = Blue600,
            size = 250.dp,
            duration = 10000
        )

        FloatingOrb(
            modifier = Modifier
                .offset(x = 100.dp, y = 600.dp),
            color = Indigo600,
            size = 200.dp,
            duration = 12000
        )

        // Background Video (if available) - with reduced opacity for better text contrast
        if (videoUrl != null) {
            BackgroundVideoPlayer(
                videoUrl = videoUrl,
                modifier = Modifier
                    .fillMaxSize()
                    .alpha(0.15f), // Reduced from 0.3f for better text visibility
                onMuteToggle = { isMuted = !isMuted }
            )
        }

        // Content overlay with glassmorphism
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(24.dp)
                .statusBarsPadding()
                .navigationBarsPadding(),
            verticalArrangement = Arrangement.SpaceBetween
        ) {
            Spacer(modifier = Modifier.height(40.dp))

            // Main content with slide-in animations
            Column(
                modifier = Modifier.weight(1f),
                verticalArrangement = Arrangement.Center
            ) {
                // Title with bounce animation
                SlideInFromBottom(delay = 100) {
                    PulsatingGlow(
                        color = Amber500,
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Text(
                            text = "Become Your Own Bank",
                            style = MaterialTheme.typography.displayMedium,
                            color = Color.White,
                            fontWeight = FontWeight.Bold
                        )
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Description with fade-in
                SlideInFromBottom(delay = 300) {
                    Text(
                        text = "Learn everything about life insurance, annuities, and wealth-building strategies without the pressure of a sales environment. Master the Infinite Banking Concept and discover how to recapture the interest you pay to banks. 100% private learning—all data stays on your device.",
                        style = MaterialTheme.typography.bodyLarge,
                        color = Color.White.copy(alpha = 0.95f), // Improved contrast
                        lineHeight = MaterialTheme.typography.bodyLarge.lineHeight * 1.5f
                    )
                }

                Spacer(modifier = Modifier.height(32.dp))

                // Stats cards with spring animations
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                    SpringCard(delay = 400, modifier = Modifier.weight(1f)) {
                        GlassStatsCard(
                            title = "Learning Modules",
                            value = totalModules.toString(),
                            icon = Icons.Default.School,
                            gradient = listOf(Blue600, Indigo600)
                        )
                    }
                    SpringCard(delay = 500, modifier = Modifier.weight(1f)) {
                        GlassStatsCard(
                            title = "Completed",
                            value = completedModules.toString(),
                            icon = Icons.Default.CheckCircle,
                            gradient = listOf(Emerald600, Success)
                        )
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Achievement badges with staggered animations
                SlideInFromBottom(delay = 600) {
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
                }

                Spacer(modifier = Modifier.height(32.dp))

                // Progress ring section with glass effect
                SpringCard(delay = 700) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .clip(RoundedCornerShape(24.dp))
                            .background(
                                Brush.linearGradient(
                                    colors = listOf(
                                        Color.White.copy(alpha = 0.15f),
                                        Color.White.copy(alpha = 0.05f)
                                    )
                                )
                            )
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

                            AnimatedProgressRing(
                                progress = overallProgress,
                                size = 200.dp
                            )
                        }
                    }
                }
            }

            // Start learning button with pulsating animation
            SlideInFromBottom(delay = 800) {
                PulsatingGlow(
                    color = Amber500,
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Button(
                        onClick = onNavigateToDashboard,
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(64.dp),
                        colors = ButtonDefaults.buttonColors(
                            containerColor = Amber500
                        ),
                        shape = RoundedCornerShape(16.dp),
                        elevation = ButtonDefaults.buttonElevation(
                            defaultElevation = 8.dp,
                            pressedElevation = 12.dp
                        )
                    ) {
                        Row(
                            horizontalArrangement = Arrangement.spacedBy(12.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Icon(
                                imageVector = Icons.Default.PlayArrow,
                                contentDescription = null,
                                tint = Gray900,
                                modifier = Modifier.size(28.dp)
                            )
                            Text(
                                text = "Start Learning",
                                style = MaterialTheme.typography.titleLarge,
                                fontWeight = FontWeight.Bold,
                                color = Gray900
                            )
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun GlassStatsCard(
    title: String,
    value: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    gradient: List<Color>,
    modifier: Modifier = Modifier
) {
    Box(
        modifier = modifier
            .clip(RoundedCornerShape(20.dp))
            .background(
                Brush.linearGradient(
                    colors = listOf(
                        Color.White.copy(alpha = 0.15f),
                        Color.White.copy(alpha = 0.05f)
                    )
                )
            )
            .padding(20.dp)
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Box(
                modifier = Modifier
                    .size(48.dp)
                    .clip(RoundedCornerShape(12.dp))
                    .background(
                        Brush.linearGradient(gradient)
                    ),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = icon,
                    contentDescription = null,
                    tint = Color.White,
                    modifier = Modifier.size(28.dp)
                )
            }

            Text(
                text = value,
                style = MaterialTheme.typography.headlineLarge,
                color = Color.White,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = title,
                style = MaterialTheme.typography.bodyMedium,
                color = Color.White.copy(alpha = 0.9f), // Improved contrast
                fontWeight = FontWeight.Medium
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
            .clip(RoundedCornerShape(12.dp))
            .background(
                Brush.horizontalGradient(
                    colors = listOf(
                        backgroundColor.copy(alpha = 0.9f),
                        backgroundColor.copy(alpha = 0.7f)
                    )
                )
            )
            .padding(horizontal = 16.dp, vertical = 12.dp),
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = Color.White,
            modifier = Modifier.size(22.dp)
        )
        Text(
            text = label,
            style = MaterialTheme.typography.labelLarge,
            color = Color.White,
            fontWeight = FontWeight.Bold
        )
    }
}

@Composable
private fun AnimatedProgressRing(
    progress: Float,
    size: androidx.compose.ui.unit.Dp,
    modifier: Modifier = Modifier
) {
    var animatedProgress by remember { mutableStateOf(0f) }

    LaunchedEffect(progress) {
        animateFloatAsState(
            targetValue = progress,
            animationSpec = tween(
                durationMillis = 2000,
                easing = FastOutSlowInEasing
            )
        ).also { animatedProgress = it.value }
    }

    Box(
        modifier = modifier.size(size),
        contentAlignment = Alignment.Center
    ) {
        // Outer glow ring
        CircularProgressIndicator(
            progress = { animatedProgress / 100f },
            modifier = Modifier
                .size(size + 20.dp)
                .blur(20.dp),
            color = Amber500.copy(alpha = 0.5f),
            strokeWidth = 16.dp,
            trackColor = Color.Transparent
        )

        // Main progress ring
        CircularProgressIndicator(
            progress = { animatedProgress / 100f },
            modifier = Modifier.size(size),
            color = Amber500,
            strokeWidth = 14.dp,
            trackColor = Color.White.copy(alpha = 0.2f)
        )

        // Inner content
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            Text(
                text = "${animatedProgress.toInt()}%",
                style = MaterialTheme.typography.displayMedium,
                color = Color.White,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = "Complete",
                style = MaterialTheme.typography.bodyMedium,
                color = Color.White.copy(alpha = 0.8f),
                fontWeight = FontWeight.Medium
            )
        }
    }
}
