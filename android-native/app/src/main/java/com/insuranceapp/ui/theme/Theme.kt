package com.insuranceapp.ui.theme

import android.app.Activity
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat

private val DarkColorScheme = darkColorScheme(
    primary = Blue600,
    onPrimary = Color.White,
    primaryContainer = Blue900,
    onPrimaryContainer = Blue200,
    secondary = Purple600,
    onSecondary = Color.White,
    secondaryContainer = Purple900,
    onSecondaryContainer = Purple500,
    tertiary = Amber500,
    onTertiary = Gray900,
    background = Gray900,
    onBackground = Color.White,
    surface = Gray800,
    onSurface = Color.White,
    surfaceVariant = Gray700,
    onSurfaceVariant = Gray200,
    error = Error
)

private val LightColorScheme = lightColorScheme(
    primary = Blue600,
    onPrimary = Color.White,
    primaryContainer = Blue200,
    onPrimaryContainer = Blue900,
    secondary = Purple600,
    onSecondary = Color.White,
    secondaryContainer = Purple200,
    onSecondaryContainer = Purple900,
    tertiary = Amber500,
    onTertiary = Color.White,
    background = Gray50,
    onBackground = Gray900,
    surface = Color.White,
    onSurface = Gray900,
    surfaceVariant = Gray100,
    onSurfaceVariant = Gray700,
    error = Error
)

@Composable
fun InsuranceAppTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = when {
        darkTheme -> DarkColorScheme
        else -> LightColorScheme
    }

    val view = LocalView.current
    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = colorScheme.primary.toArgb()
            WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = darkTheme
        }
    }

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
