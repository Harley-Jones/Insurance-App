# Videos Folder

Place your MP4 video files here for offline access.

## File Naming Convention

Use descriptive names that match your module structure:
- `module1-lesson1.mp4`
- `module1-lesson2.mp4`
- `module2-lesson1.mp4`
- etc.

## Supported Formats

- **Video**: MP4 (H.264 codec recommended)
- **Audio**: MP3, M4A, or MP4 audio

## File Size Tips

- 720p @ 2-3 Mbps: ~20-30 MB per 10 minutes
- 1080p @ 4-5 Mbps: ~35-45 MB per 10 minutes

## Usage

Reference videos in your module files:
```typescript
videoUrl: '/videos/module1-lesson1.mp4',
videoType: 'mp4'
```

Videos placed here will be bundled into iOS and Android apps for complete offline functionality.

See OFFLINE_VIDEO_GUIDE.md in the root directory for complete instructions.
