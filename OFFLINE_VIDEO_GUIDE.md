# Offline Video Guide - Native Video Bundling

## Overview
This guide explains how to bundle videos directly into your app so they work **completely offline** - even in airplane mode with no internet connection.

## How It Works

### Web Version
- Videos placed in `public/videos/` folder
- Accessed via `/videos/filename.mp4`
- Works offline if app is cached as PWA

### iOS & Android (Capacitor)
- Videos are bundled into the native app during build
- Stored in app's asset bundle (iOS) or assets folder (Android)
- **Zero internet required** - videos play from device storage
- Total offline functionality

## Step-by-Step Setup

### 1. Organize Your Video Files

Create a videos folder in the `public` directory:
```
public/
  videos/
    module1-lesson1.mp4
    module1-lesson2.mp4
    module2-lesson1.mp4
    ...
```

### 2. Update Module Data Files

Edit your module files (e.g., `src/data/modules.ts`) to reference local videos:

```typescript
{
  id: 'lesson-1',
  title: 'Introduction to Life Insurance',
  videoUrl: '/videos/module1-lesson1.mp4',
  videoType: 'mp4',
  duration: '15 min',
  // ... rest of lesson data
}
```

### 3. Video File Recommendations

**Optimal Settings:**
- Format: MP4 (H.264 codec)
- Resolution: 720p or 1080p
- Bitrate: 2-5 Mbps (balance quality vs file size)
- Audio: AAC codec, 128-192 kbps

**File Size Considerations:**
- 720p @ 3 Mbps ≈ 22 MB per 10 minutes
- 1080p @ 5 Mbps ≈ 37 MB per 10 minutes
- Total app size = base app + all video files
- iOS App Store limit: 4 GB over cellular, unlimited via WiFi
- Android Play Store limit: 150 MB APK + 2 GB expansion files

### 4. Build for Native Platforms

**For iOS:**
```bash
npm run build
npx cap sync ios
npx cap open ios
```
Videos in `public/videos/` are automatically copied to iOS app bundle.

**For Android:**
```bash
npm run build
npx cap sync android
npx cap open android
```
Videos in `public/videos/` are automatically copied to Android assets.

### 5. Testing Offline Mode

**On Device:**
1. Build and install the app
2. Enable Airplane Mode
3. Launch app and play videos
4. Videos should play perfectly without internet

**Simulator/Emulator:**
1. Disable network in simulator settings
2. Launch app
3. Verify video playback

## Audio Files

The same approach works for audio files:

```typescript
{
  id: 'audio-lesson-1',
  title: 'Audio Training',
  videoUrl: '/audio/lesson1.mp3',
  videoType: 'mp4', // Use mp4 type for audio too
  // ... rest of lesson data
}
```

Place audio files in `public/audio/` folder.

## App Size Management

### If Your App Gets Too Large:

**Option 1: Video Compression**
- Use HandBrake or FFmpeg to compress videos
- Target 720p @ 2 Mbps for good quality/size balance

**Option 2: Selective Bundling**
- Bundle only essential videos
- Download additional content on first launch
- Use Capacitor Filesystem API to store downloaded videos

**Option 3: Expansion Files (Android)**
- Use Android expansion files for large video libraries
- Main APK < 150 MB, expansion files up to 2 GB each

## Advantages of Native Video Bundling

✅ **Complete Offline Access** - No internet required ever
✅ **Instant Playback** - No buffering or loading delays
✅ **No Streaming Costs** - No data usage for users
✅ **Reliable Performance** - Works in poor connectivity areas
✅ **Privacy** - No external video tracking
✅ **Professional** - True native app experience

## Migration from YouTube

To convert from YouTube to native videos:

1. Download your YouTube videos (if you own them)
2. Convert to MP4 format (H.264/AAC)
3. Optimize file size with compression
4. Place in `public/videos/` folder
5. Update module data files with new paths
6. Change `videoType` from `'youtube'` to `'mp4'`
7. Rebuild and test

## Current Video Player Features

The VideoPlayer component supports:
- ✅ Full playback controls (play, pause, seek)
- ✅ Playback speed (0.5x to 2x)
- ✅ Progress tracking and resume
- ✅ Fullscreen mode
- ✅ Works offline with local videos
- ✅ Automatic progress saving to localStorage

## Example: Complete Offline Module

```typescript
export const offlineModule = {
  id: 'offline-training',
  title: 'Offline Training Module',
  lessons: [
    {
      id: 'lesson-1',
      title: 'Introduction',
      videoUrl: '/videos/intro.mp4',
      videoType: 'mp4',
      duration: '10 min',
      transcript: 'Full transcript here...',
      notes: ['Key point 1', 'Key point 2']
    },
    {
      id: 'lesson-2',
      title: 'Advanced Concepts',
      videoUrl: '/videos/advanced.mp4',
      videoType: 'mp4',
      duration: '20 min',
      transcript: 'Full transcript here...',
      notes: ['Key point 1', 'Key point 2']
    }
  ]
};
```

## Need Help?

If you encounter issues:
1. Verify video files are in `public/videos/` folder
2. Check file paths start with `/videos/` (not `./videos/`)
3. Ensure videoType is set to `'mp4'`
4. Run `npm run build` before `npx cap sync`
5. Check browser console for 404 errors
6. Verify video codec is H.264 (not H.265/HEVC)

Your app will now work completely offline with native video playback! 🎥
