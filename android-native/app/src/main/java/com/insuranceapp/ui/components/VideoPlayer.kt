package com.insuranceapp.ui.components

import android.view.ViewGroup
import android.widget.FrameLayout
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.media3.common.MediaItem
import androidx.media3.common.Player
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.ui.PlayerView

/**
 * ExoPlayer video component with controls
 * Supports local MP4 files and streaming URLs
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
 * Simplified background video player for hero sections
 * Auto-plays, loops, and muted by default
 */
@Composable
fun BackgroundVideoPlayer(
    videoUrl: String,
    modifier: Modifier = Modifier,
    onMuteToggle: () -> Unit = {}
) {
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

/**
 * Lesson video player with full controls
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
