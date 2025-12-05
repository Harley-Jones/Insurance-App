# Native Video Files for Insurance App

This directory contains native MP4 video files for offline playback in the Insurance App. Videos are organized by module category for easy management.

## Directory Structure

```
videos/
├── consumer-protection/
│   ├── red-flags.mp4
│   ├── green-flags.mp4
│   ├── verification.mp4
│   ├── commission-ethics.mp4
│   └── your-rights.mp4
├── term-life/
│   └── intro.mp4
├── whole-life/
│   └── intro.mp4
└── [other-modules]/
    └── [video-files].mp4
```

## Video Specifications

For optimal performance and compatibility:

- **Format**: MP4 (H.264 video codec, AAC audio codec)
- **Resolution**: 1280x720 (720p) or 1920x1080 (1080p)
- **Bitrate**: 2-5 Mbps for 720p, 5-8 Mbps for 1080p
- **Frame Rate**: 30fps or 60fps
- **Audio**: AAC, 128-192 kbps, 48kHz

## Adding New Videos

1. Place your MP4 video file in the appropriate module directory
2. Use a descriptive filename (lowercase, hyphens for spaces)
3. Update the corresponding module data file in `src/data/` to reference the video:
   ```typescript
   videoUrl: '/videos/consumer-protection/your-video.mp4',
   videoType: 'mp4'
   ```

## Consumer Protection Module Videos

The following videos are required for the Consumer Protection & Ethical Advisors module:

1. **red-flags.mp4** - Recognizing Manipulative Sales Tactics (12-15 min)
2. **green-flags.mp4** - Signs of an Ethical Advisor (10-12 min)
3. **verification.mp4** - Verifying Credentials & Checking Backgrounds (8-10 min)
4. **commission-ethics.mp4** - Understanding Commission Structures (10-12 min)
5. **your-rights.mp4** - Your Rights & How to File Complaints (8-10 min)

## Offline Playback

Videos are stored locally in the `public` directory and bundled with the app for offline access. The VideoPlayer component handles playback of local MP4 files.

## File Size Considerations

- Keep individual videos under 100MB for faster loading
- Consider using lower resolution (720p) for mobile optimization
- Total app size should remain reasonable for app stores
