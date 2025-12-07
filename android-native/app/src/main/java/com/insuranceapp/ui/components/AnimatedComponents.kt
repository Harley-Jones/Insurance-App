package com.insuranceapp.ui.components

import androidx.compose.animation.*
import androidx.compose.animation.core.*
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.blur
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.delay

/**
 * Beautiful animated components for the app
 * Inspired by modern fintech designs
 */

/**
 * Glassmorphism card with frosted glass effect
 */
@Composable
fun GlassCard(
    modifier: Modifier = Modifier,
    backgroundColor: Color = Color.White.copy(alpha = 0.1f),
    blurRadius: Dp = 20.dp,
    content: @Composable () -> Unit
) {
    Card(
        modifier = modifier,
        shape = RoundedCornerShape(20.dp),
        colors = CardDefaults.cardColors(
            containerColor = backgroundColor
        ),
        elevation = CardDefaults.cardElevation(
            defaultElevation = 0.dp
        )
    ) {
        Box(
            modifier = Modifier
                .blur(blurRadius)
                .background(
                    Brush.linearGradient(
                        colors = listOf(
                            Color.White.copy(alpha = 0.2f),
                            Color.White.copy(alpha = 0.05f)
                        )
                    )
                )
        ) {
            content()
        }
    }
}

/**
 * Animated gradient background like Stripe's mesh gradients
 */
@Composable
fun AnimatedMeshGradient(
    modifier: Modifier = Modifier,
    colors: List<Color> = listOf(
        Color(0xFF1E3A8A),
        Color(0xFF312E81),
        Color(0xFF581C87),
        Color(0xFF6B21A8)
    )
) {
    val infiniteTransition = rememberInfiniteTransition(label = "gradient")
    val offset by infiniteTransition.animateFloat(
        initialValue = 0f,
        targetValue = 1f,
        animationSpec = infiniteRepeatable(
            animation = tween(10000, easing = LinearEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "gradient_offset"
    )

    Box(
        modifier = modifier
            .background(
                Brush.linearGradient(
                    colors = colors,
                    start = androidx.compose.ui.geometry.Offset(0f, offset * 1000f),
                    end = androidx.compose.ui.geometry.Offset(1000f, (1f - offset) * 1000f)
                )
            )
    )
}

/**
 * Card with shimmer loading effect
 */
@Composable
fun ShimmerCard(
    modifier: Modifier = Modifier,
    isLoading: Boolean = true,
    content: @Composable () -> Unit
) {
    val shimmerColors = listOf(
        Color.LightGray.copy(alpha = 0.6f),
        Color.LightGray.copy(alpha = 0.2f),
        Color.LightGray.copy(alpha = 0.6f)
    )

    val transition = rememberInfiniteTransition(label = "shimmer")
    val translateAnim by transition.animateFloat(
        initialValue = 0f,
        targetValue = 1000f,
        animationSpec = infiniteRepeatable(
            animation = tween(1000, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Restart
        ),
        label = "shimmer_translation"
    )

    Box(modifier = modifier) {
        if (isLoading) {
            Box(
                modifier = Modifier
                    .matchParentSize()
                    .background(
                        Brush.linearGradient(
                            colors = shimmerColors,
                            start = androidx.compose.ui.geometry.Offset(translateAnim - 1000f, 0f),
                            end = androidx.compose.ui.geometry.Offset(translateAnim, 100f)
                        )
                    )
            )
        } else {
            content()
        }
    }
}

/**
 * Animated card that scales in with spring animation
 */
@Composable
fun SpringCard(
    modifier: Modifier = Modifier,
    delay: Int = 0,
    content: @Composable () -> Unit
) {
    var visible by remember { mutableStateOf(false) }

    LaunchedEffect(Unit) {
        delay(delay.toLong())
        visible = true
    }

    val scale by animateFloatAsState(
        targetValue = if (visible) 1f else 0.8f,
        animationSpec = spring(
            dampingRatio = Spring.DampingRatioMediumBouncy,
            stiffness = Spring.StiffnessLow
        ),
        label = "scale"
    )

    val alpha by animateFloatAsState(
        targetValue = if (visible) 1f else 0f,
        animationSpec = tween(300),
        label = "alpha"
    )

    Box(
        modifier = modifier
            .scale(scale)
            .alpha(alpha)
    ) {
        content()
    }
}

/**
 * Floating animated orbs for background decoration
 */
@Composable
fun FloatingOrb(
    modifier: Modifier = Modifier,
    color: Color,
    size: Dp = 200.dp,
    duration: Int = 8000
) {
    val infiniteTransition = rememberInfiniteTransition(label = "orb")

    val offsetY by infiniteTransition.animateFloat(
        initialValue = 0f,
        targetValue = 100f,
        animationSpec = infiniteRepeatable(
            animation = tween(duration, easing = LinearEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "orb_y"
    )

    val offsetX by infiniteTransition.animateFloat(
        initialValue = 0f,
        targetValue = 50f,
        animationSpec = infiniteRepeatable(
            animation = tween(duration + 2000, easing = LinearEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "orb_x"
    )

    Box(
        modifier = modifier
            .offset(x = offsetX.dp, y = offsetY.dp)
            .size(size)
            .blur(40.dp)
            .clip(CircleShape)
            .background(color.copy(alpha = 0.3f))
    )
}

/**
 * Pulsating glow effect for important elements
 */
@Composable
fun PulsatingGlow(
    modifier: Modifier = Modifier,
    color: Color,
    content: @Composable () -> Unit
) {
    val infiniteTransition = rememberInfiniteTransition(label = "pulse")
    val scale by infiniteTransition.animateFloat(
        initialValue = 1f,
        targetValue = 1.1f,
        animationSpec = infiniteRepeatable(
            animation = tween(1500, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "pulse_scale"
    )

    val alpha by infiniteTransition.animateFloat(
        initialValue = 0.5f,
        targetValue = 1f,
        animationSpec = infiniteRepeatable(
            animation = tween(1500, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "pulse_alpha"
    )

    Box(
        modifier = modifier,
        contentAlignment = Alignment.Center
    ) {
        // Glow background
        Box(
            modifier = Modifier
                .matchParentSize()
                .scale(scale)
                .alpha(alpha * 0.3f)
                .blur(20.dp)
                .background(color, shape = CircleShape)
        )

        // Content
        content()
    }
}

/**
 * Slide-in animation from bottom
 */
@Composable
fun SlideInFromBottom(
    modifier: Modifier = Modifier,
    delay: Int = 0,
    content: @Composable () -> Unit
) {
    var visible by remember { mutableStateOf(false) }

    LaunchedEffect(Unit) {
        delay(delay.toLong())
        visible = true
    }

    AnimatedVisibility(
        visible = visible,
        enter = slideInVertically(
            initialOffsetY = { it },
            animationSpec = spring(
                dampingRatio = Spring.DampingRatioMediumBouncy,
                stiffness = Spring.StiffnessLow
            )
        ) + fadeIn(),
        modifier = modifier
    ) {
        content()
    }
}
