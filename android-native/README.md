# Insurance App - Android Native (Jetpack Compose)

A beautiful, modern Android application built with **Jetpack Compose** and **ExoPlayer** for smooth video playback.

## 🎯 Features

- ✨ **Modern UI** with Jetpack Compose and Material3
- 🎥 **Smooth Video Playback** using ExoPlayer
- 📱 **Fully Responsive** - adapts to all screen sizes
- 🎨 **Beautiful Gradient Themes** - Blue, Indigo, Purple color scheme
- 🏆 **Gamification System** - Points, levels, streaks, and achievements
- 📚 **Educational Modules** - Comprehensive insurance and finance education
- 🎬 **Video Background** on hero screen with mute/unmute control
- 🔍 **Search & Filter** - Easy module discovery
- 💾 **Offline-First** - All data stored locally

## 🏗️ Architecture

```
android-native/
├── app/
│   ├── src/main/
│   │   ├── java/com/insuranceapp/
│   │   │   ├── data/          # Data models and sample data
│   │   │   ├── navigation/    # Navigation setup
│   │   │   ├── ui/
│   │   │   │   ├── components/  # Reusable components (VideoPlayer, etc.)
│   │   │   │   ├── screens/     # Screen composables (Hero, Dashboard, Lesson)
│   │   │   │   └── theme/       # Material3 theme, colors, typography
│   │   │   └── MainActivity.kt
│   │   ├── res/               # Resources (values, drawables, etc.)
│   │   └── AndroidManifest.xml
│   └── build.gradle.kts
├── build.gradle.kts
├── settings.gradle.kts
└── gradle.properties
```

## 🚀 Tech Stack

- **Jetpack Compose** - Modern declarative UI
- **Material3** - Latest Material Design components
- **ExoPlayer (Media3)** - Advanced video playback
- **Navigation Compose** - Type-safe navigation
- **Coil** - Image loading
- **Kotlin Coroutines** - Asynchronous programming
- **DataStore** - Persistent data storage
- **ViewModel** - Lifecycle-aware state management

## 📦 Dependencies

```kotlin
// Compose BOM
implementation(platform("androidx.compose:compose-bom:2024.01.00"))

// ExoPlayer
implementation("androidx.media3:media3-exoplayer:1.2.1")
implementation("androidx.media3:media3-ui:1.2.1")

// Navigation
implementation("androidx.navigation:navigation-compose:2.7.6")

// Coil for images
implementation("io.coil-kt:coil-compose:2.5.0")
```

## 🎬 Video Setup

### Hero Background Video

Place your hero video in one of these locations:

1. **Local Resource** (Recommended for offline):
   - Put video file in: `app/src/main/res/raw/hero_video.mp4`
   - Reference: `android.resource://$packageName/${R.raw.hero_video}`

2. **External URL** (Requires internet):
   - Use direct URL: `"https://example.com/video.mp4"`

### Lesson Videos

Videos can be:
- Local MP4 files
- YouTube URLs (using WebView wrapper)
- Vimeo URLs
- Streaming URLs

## 🎨 Screens

### 1. Hero Screen
- Video background with autoplay (muted by default)
- Mute/unmute button
- User stats: modules completed, points, streak
- Progress ring showing overall completion
- "Start Learning" button

### 2. Dashboard Screen
- Grid layout of module cards
- Search functionality
- Category filters
- Beautiful card design with images and gradients
- Difficulty badges

### 3. Lesson Screen
- Full-featured video player with controls
- Lesson content with formatted text
- Key takeaways section
- "Mark as Complete" button
- Smooth scrolling

## 🏃 Running the App

### Prerequisites
- Android Studio Hedgehog (2023.1.1) or later
- JDK 17
- Android SDK 34
- Gradle 8.2+

### Build Instructions

1. **Open in Android Studio**:
   ```bash
   cd android-native
   # Open this directory in Android Studio
   ```

2. **Sync Gradle**:
   - Android Studio will auto-sync
   - Or: File → Sync Project with Gradle Files

3. **Run**:
   - Click "Run" button
   - Or: `./gradlew installDebug`

### Build APK

```bash
# Debug APK
./gradlew assembleDebug

# Release APK (unsigned)
./gradlew assembleRelease

# Output: app/build/outputs/apk/
```

### Build App Bundle (for Play Store)

```bash
./gradlew bundleRelease
# Output: app/build/outputs/bundle/release/
```

## 📱 Minimum Requirements

- **Minimum SDK**: 24 (Android 7.0)
- **Target SDK**: 34 (Android 14)
- **Compile SDK**: 34

## 🎯 Next Steps

### Data Migration
Convert TypeScript data to Kotlin:

```kotlin
// Example: Converting a module
val wholeLifeModule = Module(
    id = "whole-life",
    title = "Whole Life Insurance Deep Dive",
    description = "Comprehensive understanding...",
    category = "Life Insurance",
    // ... rest of the data
)
```

### Features to Add
- [ ] Quiz system with scoring
- [ ] Offline video caching
- [ ] Certificate generation
- [ ] Social sharing
- [ ] Dark mode toggle
- [ ] Accessibility improvements
- [ ] Analytics integration
- [ ] Push notifications

## 🎨 Customization

### Colors
Edit: `app/src/main/java/com/insuranceapp/ui/theme/Color.kt`

### Typography
Edit: `app/src/main/java/com/insuranceapp/ui/theme/Type.kt`

### Theme
Edit: `app/src/main/java/com/insuranceapp/ui/theme/Theme.kt`

## 🐛 Common Issues

### Video Not Playing
- Check file path is correct
- Verify video codec (H.264 recommended)
- Check internet permissions for streaming

### Out of Memory
- Increase heap size in `gradle.properties`:
  ```properties
  org.gradle.jvmargs=-Xmx4096m
  ```

### Build Errors
- Clean and rebuild: `./gradlew clean build`
- Invalidate caches: Android Studio → File → Invalidate Caches

## 📄 License

This project is part of the Financial Freedom Academy educational platform.

## 🙏 Acknowledgments

- Built with ❤️ using Jetpack Compose
- Video playback powered by ExoPlayer
- Design inspired by modern fintech apps
