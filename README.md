# Life Insurance Education Platform

A comprehensive educational platform for learning about life insurance products, featuring gamification, interactive calculators, and offline video support.

## Features

- 📚 **Comprehensive Training Modules** - Term, Whole, Universal, Variable, and Indexed Universal Life
- 🎮 **Gamification System** - Points, badges, achievements, and leaderboards
- 📱 **Mobile-Ready** - Built with Capacitor for iOS and Android
- 🎥 **Offline Video Support** - Bundle videos natively for airplane mode access
- 🧮 **Interactive Calculators** - Cash value, policy loans, and wealth recapture
- 📊 **Progress Tracking** - Track completion and resume where you left off
- 🏆 **Certificates** - Downloadable completion certificates
- 🌐 **State Insurance Directory** - Contact information for all 50 states

## Offline Video Setup

This app supports **complete offline video playback**. Videos can be bundled directly into the native iOS and Android apps, allowing users to watch content even in airplane mode with no internet connection.

### Quick Start for Offline Videos

1. Place your MP4 video files in `public/videos/` folder
2. Update module files to reference local videos:
   ```typescript
   videoUrl: '/videos/your-video.mp4',
   videoType: 'mp4'
   ```
3. Build and sync: `npm run build && npx cap sync`

See **[OFFLINE_VIDEO_GUIDE.md](OFFLINE_VIDEO_GUIDE.md)** for complete instructions.


- **State Management**: React Context API
- **Mobile**: Capacitor 6 (iOS & Android)

## 📱 Platform Support

This is a **React web application** that uses Capacitor to create native mobile apps:
- ✅ Web (Progressive Web App)
- ✅ iOS (via Capacitor)
- ✅ Android (via Capacitor)

**Note**: This is NOT React Native. It's a web app wrapped in a native container.

## 🛠️ Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Opens at http://localhost:8080

### Build for Production
```bash
npm run build
```
Output: `dist/` directory

## 📦 Building Native Apps

### Using Ionic Dashboard (Recommended)
1. Push code to your Git repository
2. Connect repository to Ionic Dashboard
3. Configure build settings:
   - Build Command: `npm run ionic:build`
   - Build Directory: `dist`
4. Trigger builds for iOS and Android

See [CAPACITOR_BUILD_GUIDE.md](./CAPACITOR_BUILD_GUIDE.md) for detailed instructions.

### Local Native Development
```bash
# Build web assets
npm run build

# Add platforms (first time only)
npx cap add ios
npx cap add android

# Sync changes
npx cap sync

# Open in native IDE
npx cap open ios
npx cap open android
```

## 📚 Features

- **Interactive Learning Modules**: 20+ comprehensive lessons
- **Video Integration**: Support for embedded educational videos
- **Gamification**: Points, badges, achievements, leaderboards
- **Calculators**: Cash value, policy loans, wealth recapture
- **Progress Tracking**: Save progress locally
- **Certificates**: Generate completion certificates
- **State Insurance Directory**: 50-state insurance department contacts
- **Glossary**: 100+ insurance terms
- **Downloadable Resources**: PDF guides and worksheets

## 🎯 Project Structure

```
src/
├── components/        # React components
├── contexts/         # Context providers
├── data/            # Module content and data
├── pages/           # Route pages
├── types/           # TypeScript types
├── utils/           # Helper functions
└── hooks/           # Custom React hooks
```

## 🔧 Configuration Files

- `capacitor.config.ts` - Capacitor configuration
- `ionic.config.json` - Ionic Dashboard integration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration

## 📄 License

Private - All rights reserved

## 🤝 Support

For build issues or questions, see [CAPACITOR_BUILD_GUIDE.md](./CAPACITOR_BUILD_GUIDE.md)
