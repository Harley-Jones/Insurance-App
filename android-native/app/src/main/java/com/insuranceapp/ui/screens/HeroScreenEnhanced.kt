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
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.insuranceapp.data.GamificationData
import com.insuranceapp.data.levels
import com.insuranceapp.ui.components.*
import com.insuranceapp.ui.theme.*

/**
 * Enhanced Hero Screen with beautiful animations and modern design
 * Inspired by Stripe, CashApp, and Material Design 3
 */
@Composable
fun HeroScreenEnhanced(
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
        modifier = Modifier.fillMaxSize()
    ) {
        // Animated mesh gradient background (like Stripe)
        AnimatedMeshGradient(
            modifier = Modifier.fillMaxSize(),
            colors = listOf(
                Blue900,
                Indigo900,
                Purple900,
                Blue800
            )
        )

        // Floating orbs for depth (like modern fintech apps)
        FloatingOrb(
            modifier = Modifier
                .align(Alignment.TopEnd)
                .offset(x = 100.dp, y = (-50).dp),
            color = Purple500,
            size = 300.dp,
            duration = 10000
        )

        FloatingOrb(
            modifier = Modifier
                .align(Alignment.BottomStart)
                .offset(x = (-80).dp, y = 100.dp),
            color = Blue600,
            size = 250.dp,
            duration = 12000
        )

        FloatingOrb(
            modifier = Modifier
                .align(Alignment.Center)
                .offset(x = 150.dp, y = (-100).dp),
            color = Indigo600,
            size = 200.dp,
            duration = 8000
        )

        // Background Video (if available) with glassmorphism overlay
        if (videoUrl != null) {
            BackgroundVideoPlayer(
                videoUrl = videoUrl,
                modifier = Modifier
                    .fillMaxSize()
                    .alpha(0.25f),
                onMuteToggle = { isMuted = !isMuted }
            )
        }

        // Main content with animations
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(24.dp)
                .statusBarsPadding()
                .navigationBarsPadding(),
            verticalArrangement = Arrangement.SpaceBetween
        ) {
            Spacer(modifier = Modifier.height(20.dp))

            // Animated content
            SlideInFromBottom(delay = 100) {
                Column(
                    modifier = Modifier.weight(1f),
                    verticalArrangement = Arrangement.Center
                ) {
                    // Title with gradient text effect
                    Text(
                        text = "Become Your Own Bank",
                        style = MaterialTheme.typography.displayMedium.copy(
                            brush = Brush.linearGradient(
                                colors = listOf(
                                    Color.White,
                                    Color.White.copy(alpha = 0.8f)
                                )
                            )
                        ),
                        fontWeight = FontWeight.ExtraBold
                    )

                    Spacer(modifier = Modifier.height(16.dp))

                    // Description
                    Text(
                        text = "Learn everything about life insurance, annuities, and wealth-building strategies. Master the Infinite Banking Concept and discover how to recapture the interest you pay to banks.",
                        style = MaterialTheme.typography.bodyLarge,
                        color = Blue200.copy(alpha = 0.9f),
                        lineHeight = MaterialTheme.typography.bodyLarge.lineHeight * 1.4f
                    )

                    Spacer(modifier = Modifier.height(32.dp))

                    // Animated stats cards with spring effect
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(16.dp)
                    ) {
                        SpringCard(
                            modifier = Modifier.weight(1f),
                            delay = 200
                        ) {
                            GlassStatsCard(
                                title = "Learning Modules",
                                value = totalModules.toString()
                            )
                        }

                        SpringCard(
                            modifier = Modifier.weight(1f),
                            delay = 300
                        ) {
                            GlassStatsCard(
                                title = "Completed",
                                value = completedModules.toString()
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(20.dp))

                    // Achievement badges with stagger animation
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(12.dp)
                    ) {
                        SpringCard(delay = 400) {
                            ModernBadge(
                                icon = Icons.Default.EmojiEvents,
                                label = currentLevel.name,
                                backgroundColor = Blue600
                            )
                        }

                        SpringCard(delay = 500) {
                            ModernBadge(
                                icon = Icons.Default.LocalFireDepartment,
                                label = "${gamificationData.streak} Day",
                                backgroundColor = Orange500
                            )
                        }

                        SpringCard(delay = 600) {
                            ModernBadge(
                                icon = Icons.Default.Star,
                                label = "${gamificationData.points}",
                                backgroundColor = Purple600
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(32.dp))

                    // Progress section with glassmorphism
                    SpringCard(delay = 700) {
                        GlassCard(
                            modifier = Modifier.fillMaxWidth(),
                            backgroundColor = Color.White.copy(alpha = 0.08f)
                        ) {
                            Column(
                                modifier = Modifier.padding(28.dp),
                                horizontalAlignment = Alignment.CenterHorizontally
                            ) {
                                Text(
                                    text = "Your Progress",
                                    style = MaterialTheme.typography.headlineSmall,
                                    color = Color.White,
                                    fontWeight = FontWeight.Bold
                                )

                                Spacer(modifier = Modifier.height(24.dp))

                                // Animated progress ring with glow
                                PulsatingGlow(color = Amber500) {
                                    AnimatedProgressRing(
                                        progress = overallProgress,
                                        size = 180.dp
                                    )
                                }
                            }
                        }
                    }
                }
            }

            // Animated button with modern design
            SlideInFromBottom(delay = 800) {
                PulsatingGlow(color = Amber500) {
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
                            Text(
                                text = "Start Your Journey",
                                style = MaterialTheme.typography.titleLarge,
                                fontWeight = FontWeight.Bold,
                                color = Gray900
                            )
                            Icon(
                                imageVector = Icons.Default.ArrowForward,
                                contentDescription = null,
                                tint = Gray900
                            )
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))
        }
    }
}

@Composable
private fun GlassStatsCard(
    title: String,
    value: String
) {
    Box(
        modifier = Modifier
            .clip(RoundedCornerShape(16.dp))
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
        Column {
            Text(
                text = value,
                style = MaterialTheme.typography.displaySmall,
                color = Color.White,
                fontWeight = FontWeight.ExtraBold
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = title,
                style = MaterialTheme.typography.bodyMedium,
                color = Blue200.copy(alpha = 0.9f)
            )
        }
    }
}

@Composable
private fun ModernBadge(
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    label: String,
    backgroundColor: Color
) {
    Surface(
        color = backgroundColor.copy(alpha = 0.9f),
        shape = RoundedCornerShape(12.dp),
        shadowElevation = 8.dp
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 16.dp, vertical = 12.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp),
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
                fontWeight = FontWeight.Bold
            )
        }
    }
}

@Composable
private fun AnimatedProgressRing(
    progress: Float,
    size: androidx.compose.ui.unit.Dp
) {
    var animatedProgress by remember { mutableStateOf(0f) }

    LaunchedEffect(progress) {
        animateFloatAsState(
            targetValue = progress,
            animationSpec = spring(
                dampingRatio = Spring.DampingRatioMediumBouncy,
                stiffness = Spring.StiffnessLow
            )
        ).also { animatedProgress = it.value }
    }

    Box(
        modifier = Modifier.size(size),
        contentAlignment = Alignment.Center
    ) {
        // Background ring glow
        CircularProgressIndicator(
            progress = { 1f },
            modifier = Modifier
                .size(size + 20.dp)
                .alpha(0.3f)
                .blur(10.dp),
            color = Amber500,
            strokeWidth = 16.dp,
            trackColor = Color.Transparent
        )

        // Main progress ring
        CircularProgressIndicator(
            progress = { progress / 100f },
            modifier = Modifier.size(size),
            color = Amber500,
            strokeWidth = 14.dp,
            trackColor = Color.White.copy(alpha = 0.15f)
        )

        // Percentage text
        Column(
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "${progress.toInt()}%",
                style = MaterialTheme.typography.displayMedium,
                color = Color.White,
                fontWeight = FontWeight.ExtraBold
            )
            Text(
                text = "Complete",
                style = MaterialTheme.typography.bodySmall,
                color = Blue200
            )
        }
    }
}
