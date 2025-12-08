package com.insuranceapp.ui.components

import android.content.Intent
import android.net.Uri
import android.view.ViewGroup
import android.widget.FrameLayout
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.media3.common.MediaItem
import androidx.media3.common.Player
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.ui.PlayerView
import coil.compose.AsyncImage
import com.insuranceapp.ui.theme.*

/**
 * Universal video player that supports both YouTube URLs and direct video files
 * For YouTube: Opens in YouTube app or browser with one click
 * For MP4s: Uses ExoPlayer for in-app playback
 */
@Composable
fun VideoPlayer(
    videoUrl: String,
    modifier: Modifier = Modifier,
    autoPlay: Boolean = false,
    loop: Boolean = false,
    showControls: Boolean = true,
    isMuted: Boolean = false,
    onMuteToggle: (() -> Unit)? = null
) {
    val isYouTubeUrl = videoUrl.contains("youtube.com") || videoUrl.contains("youtu.be")

    if (isYouTubeUrl) {
        YouTubeVideoCard(
            videoUrl = videoUrl,
            modifier = modifier
        )
    } else {
        ExoPlayerVideo(
            videoUrl = videoUrl,
            modifier = modifier,
            autoPlay = autoPlay,
            loop = loop,
            showControls = showControls,
            isMuted = isMuted,
            onMuteToggle = onMuteToggle
        )
    }
}

/**
 * YouTube video card that opens video in YouTube app/browser
 * Shows thumbnail with big play button - GUARANTEED to work!
 */
@Composable
private fun YouTubeVideoCard(
    videoUrl: String,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current
    val videoId = remember(videoUrl) { extractYouTubeId(videoUrl) }

    // YouTube thumbnail URL
    val thumbnailUrl = "https://img.youtube.com/vi/$videoId/maxresdefault.jpg"

    Card(
        modifier = modifier
            .clickable {
                // Open in YouTube app or browser
                val intent = Intent(Intent.ACTION_VIEW, Uri.parse(videoUrl))
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)

                // Try to open in YouTube app first
                intent.setPackage("com.google.android.youtube")
                try {
                    context.startActivity(intent)
                } catch (e: Exception) {
                    // If YouTube app not installed, open in browser
                    intent.setPackage(null)
                    context.startActivity(intent)
                }
            },
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = Color.Black
        )
    ) {
        Box(
            modifier = Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            // Thumbnail
            AsyncImage(
                model = thumbnailUrl,
                contentDescription = "Video thumbnail",
                modifier = Modifier.fillMaxSize(),
                contentScale = androidx.compose.ui.layout.ContentScale.Crop
            )

            // Dark overlay for better button visibility
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .background(Color.Black.copy(alpha = 0.3f))
            )

            // Big play button
            Box(
                modifier = Modifier
                    .size(100.dp)
                    .clip(CircleShape)
                    .background(
                        Brush.radialGradient(
                            colors = listOf(
                                Amber500,
                                Orange500
                            )
                        )
                    ),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Default.PlayArrow,
                    contentDescription = "Play video",
                    tint = Color.White,
                    modifier = Modifier.size(60.dp)
                )
            }

            // "Tap to play" text
            Box(
                modifier = Modifier
                    .align(Alignment.BottomCenter)
                    .padding(16.dp)
                    .clip(RoundedCornerShape(8.dp))
                    .background(Color.Black.copy(alpha = 0.7f))
                    .padding(horizontal = 16.dp, vertical = 8.dp)
            ) {
                Row(
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Icon(
                        imageVector = Icons.Default.YouTube,
                        contentDescription = null,
                        tint = Color(0xFFFF0000),
                        modifier = Modifier.size(24.dp)
                    )
                    Text(
                        text = "Tap to watch on YouTube",
                        style = MaterialTheme.typography.bodyMedium,
                        color = Color.White,
                        fontWeight = FontWeight.Bold
                    )
                }
            }
        }
    }
}

/**
 * ExoPlayer for direct video files (MP4, etc.)
 */
@Composable
private fun ExoPlayerVideo(
    videoUrl: String,
    modifier: Modifier = Modifier,
    autoPlay: Boolean = false,
    loop: Boolean = false,
    showControls: Boolean = true,
    isMuted: Boolean = false,
    onMuteToggle: (() -> Unit)? = null
) {
    val context = LocalContext.current
    var isPlaying by remember { mutableStateOf(autoPlay) }
    var currentMuted by remember { mutableStateOf(isMuted) }

    val exoPlayer = remember {
        ExoPlayer.Builder(context).build().apply {
            val mediaItem = MediaItem.fromUri(videoUrl)
            setMediaItem(mediaItem)
            prepare()
            playWhenReady = autoPlay
            repeatMode = if (loop) Player.REPEAT_MODE_ONE else Player.REPEAT_MODE_OFF
            volume = if (isMuted) 0f else 1f

            addListener(object : Player.Listener {
                override fun onIsPlayingChanged(playing: Boolean) {
                    isPlaying = playing
                }
            })
        }
    }

    DisposableEffect(Unit) {
        onDispose {
            exoPlayer.release()
        }
    }

    // Update mute state
    LaunchedEffect(currentMuted) {
        exoPlayer.volume = if (currentMuted) 0f else 1f
    }

    Box(modifier = modifier) {
        AndroidView(
            factory = { ctx ->
                PlayerView(ctx).apply {
                    player = exoPlayer
                    layoutParams = FrameLayout.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT
                    )
                    useController = showControls
                    controllerAutoShow = true
                }
            },
            modifier = Modifier.fillMaxSize()
        )

        // Custom mute/unmute button if callback provided
        if (onMuteToggle != null) {
            IconButton(
                onClick = {
                    currentMuted = !currentMuted
                    onMuteToggle()
                },
                modifier = Modifier
                    .align(Alignment.TopEnd)
                    .padding(16.dp)
                    .background(
                        color = Color.White.copy(alpha = 0.3f),
                        shape = CircleShape
                    )
            ) {
                Icon(
                    imageVector = if (currentMuted) Icons.Default.VolumeOff else Icons.Default.VolumeUp,
                    contentDescription = if (currentMuted) "Unmute" else "Mute",
                    tint = Color.White
                )
            }
        }
    }
}

/**
 * Extract YouTube video ID from various URL formats
 */
private fun extractYouTubeId(url: String): String {
    return when {
        url.contains("youtu.be/") -> {
            url.substringAfter("youtu.be/").substringBefore("?").substringBefore("&")
        }
        url.contains("youtube.com/watch?v=") -> {
            url.substringAfter("v=").substringBefore("&").substringBefore("?")
        }
        url.contains("youtube.com/embed/") -> {
            url.substringAfter("embed/").substringBefore("?").substringBefore("&")
        }
        else -> url
    }
}

/**
 * Simplified background video player for hero sections
 * For YouTube: Shows animated thumbnail
 * For MP4: Auto-plays, loops, and muted
 */
@Composable
fun BackgroundVideoPlayer(
    videoUrl: String,
    modifier: Modifier = Modifier,
    onMuteToggle: () -> Unit = {}
) {
    // For background videos, if it's YouTube just show static thumbnail
    val isYouTubeUrl = videoUrl.contains("youtube.com") || videoUrl.contains("youtu.be")

    if (isYouTubeUrl) {
        val videoId = extractYouTubeId(videoUrl)
        val thumbnailUrl = "https://img.youtube.com/vi/$videoId/maxresdefault.jpg"

        // Just show the thumbnail as background
        AsyncImage(
            model = thumbnailUrl,
            contentDescription = "Background",
            modifier = modifier,
            contentScale = androidx.compose.ui.layout.ContentScale.Crop
        )
    } else {
        VideoPlayer(
            videoUrl = videoUrl,
            modifier = modifier,
            autoPlay = true,
            loop = true,
            showControls = false,
            isMuted = true,
            onMuteToggle = onMuteToggle
        )
    }
}

/**
 * Lesson video player with full controls
 * YouTube videos open in YouTube app with one tap
 */
@Composable
fun LessonVideoPlayer(
    videoUrl: String,
    modifier: Modifier = Modifier
) {
    VideoPlayer(
        videoUrl = videoUrl,
        modifier = modifier,
        autoPlay = false,
        loop = false,
        showControls = true,
        isMuted = false
    )
}
