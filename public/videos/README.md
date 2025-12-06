# Videos Folder

Place your MP4 video files here for offline access.

## Required Video for Hero Header

**IMPORTANT**: The home page video header requires a specific video file:

- **File name**: `three-hours-30-years.mp4`
- **Location**: Place directly in this folder (`public/videos/`)
- **Requirements**:
  - Format: MP4 (H.264 codec)
  - The video will autoplay muted on the home page
  - Users can unmute via the button in the top-right corner
  - Video loops continuously

**How to add the video:**
1. Rename your video file to exactly: `three-hours-30-years.mp4`
2. Copy it to: `public/videos/three-hours-30-years.mp4`
3. Rebuild the app: `npm run build`
4. For Android/iOS: Sync and rebuild native projects

**Note**: If the video file is not found, the app will gracefully fall back to a background image.

## File Naming Convention for Module Videos

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
