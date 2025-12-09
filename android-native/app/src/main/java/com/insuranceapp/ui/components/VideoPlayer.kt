package com.insuranceapp.ui.components

import android.view.ViewGroup
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
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
import com.insuranceapp.ui.theme.*

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
 * In-app YouTube player using WebView
 * Click the video to start playback
 */
@Composable
private fun YouTubePlayer(
    videoUrl: String,
    modifier: Modifier = Modifier,
    autoPlay: Boolean = false,
    showControls: Boolean = true
) {
    val videoId = remember(videoUrl) { extractYouTubeId(videoUrl) }
    var hasClicked by remember { mutableStateOf(autoPlay) }

    val controlsParam = if (showControls) "1" else "0"

    // Create HTML that will load on user click
    val html = remember(videoId, controlsParam, hasClicked) {
        """
        <!DOCTYPE html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                * { margin: 0; padding: 0; }
                body {
                    background: #000;
                    width: 100vw;
                    height: 100vh;
                    overflow: hidden;
                }
                #player-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
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
            <div id="player-container">
                ${if (hasClicked) """
                <iframe
                    src="https://www.youtube.com/embed/$videoId?autoplay=1&controls=$controlsParam&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
                """ else ""}
            </div>
        </body>
        </html>
        """.trimIndent()
    }

    Box(modifier = modifier) {
        // WebView
        AndroidView(
            factory = { context ->
                WebView(context).apply {
                    layoutParams = FrameLayout.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT
                    )

                    settings.apply {
                        javaScriptEnabled = true
                        mediaPlaybackRequiresUserGesture = false
                        domStorageEnabled = true
                        allowFileAccess = true
                        allowContentAccess = true
                        loadWithOverviewMode = true
                        useWideViewPort = true
                        setSupportZoom(false)
                        builtInZoomControls = false
                        displayZoomControls = false
                        cacheMode = WebSettings.LOAD_DEFAULT
                        mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
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
            update = { webView ->
                webView.loadDataWithBaseURL(
                    "https://www.youtube.com",
                    html,
                    "text/html",
                    "UTF-8",
                    null
                )
            },
            modifier = Modifier.fillMaxSize()
        )

        // Clickable play overlay if not yet clicked
        if (!hasClicked) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .background(Color.Black.copy(alpha = 0.5f))
                    .clickable { hasClicked = true },
                contentAlignment = Alignment.Center
            ) {
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
                    Text(
                        text = "Tap to play video",
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
        autoPlay = false,
        loop = false,
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
