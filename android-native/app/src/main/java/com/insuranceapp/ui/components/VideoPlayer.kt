package com.insuranceapp.ui.components

import android.view.ViewGroup
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
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
 * Universal video player that supports both YouTube URLs and direct video files
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
        YouTubePlayer(
            videoUrl = videoUrl,
            modifier = modifier,
            autoPlay = autoPlay,
            loop = loop,
            isMuted = isMuted,
            showControls = showControls
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
 * YouTube video player using WebView
 */
@Composable
private fun YouTubePlayer(
    videoUrl: String,
    modifier: Modifier = Modifier,
    autoPlay: Boolean = false,
    loop: Boolean = false,
    isMuted: Boolean = false,
    showControls: Boolean = true
) {
    val videoId = remember(videoUrl) {
        extractYouTubeId(videoUrl)
    }

    val autoPlayParam = if (autoPlay) "1" else "0"
    val loopParam = if (loop) "1" else "0"
    val mutedParam = if (isMuted) "1" else "0"
    val controlsParam = if (showControls) "1" else "0"

    val html = remember(videoId, autoPlayParam, loopParam, mutedParam, controlsParam) {
        """
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                * { margin: 0; padding: 0; }
                body { background: #000; }
                .video-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: none;
                }
            </style>
        </head>
        <body>
            <div class="video-container">
                <iframe
                    src="https://www.youtube.com/embed/$videoId?autoplay=$autoPlayParam&loop=$loopParam&mute=$mutedParam&controls=$controlsParam&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </body>
        </html>
        """.trimIndent()
    }

    AndroidView(
        factory = { context ->
            WebView(context).apply {
                layoutParams = FrameLayout.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT
                )

                settings.apply {
                    javaScriptEnabled = true
                    mediaPlaybackRequiresUserGesture = !autoPlay
                    domStorageEnabled = true
                    loadWithOverviewMode = true
                    useWideViewPort = true
                    builtInZoomControls = false
                    displayZoomControls = false
                    setSupportZoom(false)
                    cacheMode = WebSettings.LOAD_DEFAULT
                }

                webViewClient = WebViewClient()
                webChromeClient = WebChromeClient()

                loadDataWithBaseURL(
                    "https://www.youtube.com",
                    html,
                    "text/html",
                    "UTF-8",
                    null
                )
            }
        },
        modifier = modifier.background(Color.Black)
    )
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
            url.substringAfter("youtu.be/").substringBefore("?")
        }
        url.contains("youtube.com/watch?v=") -> {
            url.substringAfter("v=").substringBefore("&")
        }
        url.contains("youtube.com/embed/") -> {
            url.substringAfter("embed/").substringBefore("?")
        }
        else -> url
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
