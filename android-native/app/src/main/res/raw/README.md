# Video Files Directory

Place your video files here for local playback in the app.

## Supported Formats
- MP4 (recommended)
- 3GP
- WebM
- MKV

## File Naming
- Use lowercase letters only
- Use underscores instead of spaces
- Example: `hero_video.mp4`

## Adding Videos

1. Copy your video file to this directory:
   ```
   android-native/app/src/main/res/raw/hero_video.mp4
   ```

2. Reference it in your code:
   ```kotlin
   "android.resource://$packageName/${R.raw.hero_video}"
   ```

## Alternative: Use Remote URLs

Instead of local files, you can use remote video URLs:
```kotlin
videoUrl = "https://your-cdn.com/videos/hero.mp4"
```

## Size Considerations

- Keep video files under 100MB for best performance
- For larger videos (like your 3-hour video), consider:
  - Hosting on a CDN (Cloudflare, AWS S3, etc.)
  - Compressing with H.264/H.265 codec
  - Using adaptive streaming (HLS/DASH)
