# Video Status and Implementation Guide

## ✅ Existing YouTube Videos (Currently Working)

The following YouTube videos are already embedded in the app and should work properly:

### Term Life Insurance Module
1. **What is Term Life Insurance?**
   - URL: https://www.youtube.com/watch?v=lfR3jfc8v1g
   - Location: `src/data/modules.ts` line 19
   - Status: ✅ Working (YouTube embed)

2. **When to Use Term Insurance**
   - URL: https://www.youtube.com/watch?v=3kfenJ3dJmY
   - Location: `src/data/modules.ts` line 34
   - Status: ✅ Working (YouTube embed)

### Whole Life Insurance Module
1. **Understanding Whole Life**
   - URL: https://www.youtube.com/watch?v=Dv5FqJOqEqA
   - Location: `src/data/modules.ts` line 69
   - Status: ✅ Working (YouTube embed)

**Note:** These YouTube videos will work when there's an internet connection. They will NOT work offline. To enable offline viewing, you'll need to download these videos and replace the URLs with local MP4 files.

## 🆕 New Hero Video (Autoplay on Homepage)

**three-hours-thirty-years.mp4** - "Three Hours for the Next 30 Years of Your Life"
- Location: `/public/videos/three-hours-thirty-years.mp4`
- Component: `src/components/Hero.tsx`
- Features:
  - ✅ Autoplays on homepage (muted by default)
  - ✅ Loops continuously as background
  - ✅ Unmute button in top-right corner
  - ✅ Fallback play button if autoplay is blocked by browser
  - ✅ Uses existing hero image as poster frame
  - ✅ Opacity set to 40% so text remains readable
- Status: 🔴 Needs video file (placeholder created)

## 📦 Native MP4 Videos (For Offline Playback)

### Consumer Protection Module
All lessons now reference native MP4 files:
1. `/videos/consumer-protection/red-flags.mp4` - 🔴 Placeholder only
2. `/videos/consumer-protection/green-flags.mp4` - 🔴 Placeholder only
3. `/videos/consumer-protection/verification.mp4` - 🔴 Placeholder only
4. `/videos/consumer-protection/commission-ethics.mp4` - 🔴 Placeholder only
5. `/videos/consumer-protection/your-rights.mp4` - 🔴 Placeholder only

### Infinite Banking Module
First lesson references native MP4:
1. `/videos/infinite-banking/banking-crisis.mp4` - 🔴 Placeholder only
2. `/videos/infinite-banking/wealthy-use-insurance.mp4` - 🔴 Placeholder only
3. `/videos/infinite-banking/infinite-banking-concept.mp4` - 🔴 Placeholder only
4. `/videos/infinite-banking/policy-design.mp4` - 🔴 Placeholder only

## 🎬 Next Steps to Complete Video Integration

### 1. Replace Placeholder Files with Actual Videos

For each `.mp4.placeholder` file:
```bash
# Remove placeholder
rm public/videos/three-hours-thirty-years.mp4.placeholder

# Add your actual video
cp /path/to/your/video.mp4 public/videos/three-hours-thirty-years.mp4
```

### 2. Convert YouTube Videos to MP4 (Optional - for offline capability)

To make the existing YouTube videos work offline:

```bash
# Install yt-dlp (YouTube downloader)
npm install -g yt-dlp

# Download videos
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]" \
  --merge-output-format mp4 \
  --output "public/videos/term-life-intro.mp4" \
  "https://www.youtube.com/watch?v=lfR3jfc8v1g"
```

Then update `src/data/modules.ts` to reference local files instead of YouTube.

### 3. Video Production Specifications

For all videos, follow these specs (detailed in `/public/videos/README.md`):
- **Format:** MP4 (H.264 video, AAC audio)
- **Resolution:** 1280x720 (720p) or 1920x1080 (1080p)
- **Bitrate:** 2-5 Mbps for 720p, 5-8 Mbps for 1080p
- **Frame Rate:** 30fps or 60fps
- **File Size:** Keep under 100MB per video
- **Hero Video:** Should be 2-5 minutes, visually interesting but not too busy

### 4. Test Video Playback

After adding videos:
```bash
# Start dev server
npm run dev

# Test in browser:
# 1. Homepage - check hero video autoplays (muted)
# 2. Click unmute button - verify audio works
# 3. Open Ethical Advisors module - check lesson videos
# 4. Open Infinite Banking module - check lesson videos
```

### 5. Mobile Testing

For Capacitor/mobile deployment:
```bash
# Build for mobile
npm run build

# Test on iOS
npx cap sync ios
npx cap open ios

# Test on Android
npx cap sync android
npx cap open android
```

## 🎨 Hero Video Design Recommendations

The "Three Hours for the Next 30 Years" video should:
- Open with compelling hook about financial freedom
- Show value proposition of insurance education
- Feature clean, professional visuals
- Work well as semi-transparent background (40% opacity)
- Have good audio that explains the concept (for those who unmute)
- Loop seamlessly

## 🔧 Technical Implementation Details

### Hero Video Component Features:
- **Autoplay:** Attempts to autoplay on page load (muted)
- **Fallback:** If autoplay is blocked, shows play button overlay
- **Controls:** Unmute button appears in top-right after playing
- **Loop:** Video loops continuously
- **Poster:** Uses existing hero image as fallback
- **Mobile:** Uses `playsInline` attribute for iOS compatibility
- **Performance:** Uses `preload="metadata"` for faster initial load

### Module Videos:
- **Full Controls:** Progress bar, speed controls, fullscreen
- **Progress Tracking:** Saves viewing progress in localStorage
- **Transcripts:** Full transcripts available for all lessons
- **Resources:** Downloadable PDFs, Excel tools, worksheets

## 📊 Current Implementation Status

| Component | Status | Notes |
|-----------|--------|-------|
| Hero Video Component | ✅ Complete | Needs video file |
| YouTube Embeds | ✅ Working | Online only |
| Consumer Protection Videos | 🔴 Needs files | Structure ready |
| Infinite Banking Videos | 🔴 Needs files | Structure ready |
| Video Documentation | ✅ Complete | `/public/videos/README.md` |
| Video Player Component | ✅ Working | Supports all formats |

## 💡 Quick Start

To get videos working immediately:

1. **Add hero video:**
   ```bash
   cp your-hero-video.mp4 public/videos/three-hours-thirty-years.mp4
   ```

2. **Start app:**
   ```bash
   npm run dev
   ```

3. **Visit homepage** - Hero video should autoplay (muted)

4. **Click unmute** button (top-right) to hear audio

That's it! The component is fully functional and ready to use as soon as you add the video file.
