# Capacitor Build Guide for Ionic Dashboard

## Overview
This is a **React web application** (NOT React Native) that uses Capacitor to create native iOS and Android apps from the web codebase.

## Architecture
- **Framework**: React 18 + Vite + TypeScript
- **UI**: Tailwind CSS + shadcn/ui components
- **Native Wrapper**: Capacitor 6
- **Build Platform**: Ionic Dashboard (Appflow)

## Build Configuration

### Package.json Scripts
- `npm run build` - Production web build (outputs to `dist/`)
- `npm run ionic:build` - Ionic Dashboard build command
- `npm run ionic:serve` - Ionic Dashboard dev server

### Build Output
- **Web Directory**: `dist/` (configured in capacitor.config.ts)
- Vite builds all assets to this directory
- Capacitor wraps this directory for native apps

## Ionic Dashboard Setup

### 1. Connect Repository
Link your Git repository to Ionic Dashboard

### 2. Build Configuration
In Ionic Dashboard, set:
- **Build Command**: `npm run ionic:build`
- **Build Directory**: `dist`
- **Node Version**: 18 or higher

### 3. Environment Variables
No special environment variables needed for basic build

## Local Development

### Web Development
```bash
npm install
npm run dev
```

### Native Development (Optional)
```bash
# Install dependencies
npm install

# Build web assets
npm run build

# Add platforms (only needed locally)
npx cap add ios
npx cap add android

# Sync web assets to native projects
npx cap sync

# Open in native IDEs
npx cap open ios
npx cap open android
```

## Troubleshooting

### "No package.json found" Error
✅ **FIXED** - package.json now includes:
- Capacitor dependencies
- ionic:build and ionic:serve scripts
- Proper app name and version

### Build Fails on Ionic Dashboard
1. Check Node version (should be 18+)
2. Verify `dist/` directory is created after build
3. Ensure all dependencies are in package.json (not devDependencies for runtime needs)

### Native Plugin Issues
All Capacitor plugins are included:
- @capacitor/app - App lifecycle
- @capacitor/splash-screen - Launch screen
- @capacitor/status-bar - Status bar styling
- @capacitor/keyboard - Keyboard behavior

## App IDs and Names
- **App ID**: com.lifeinsurance.education
- **App Name**: Life Insurance Education
- **Package Name**: life-insurance-education-platform

## Next Steps
1. Push changes to your Git repository
2. Ionic Dashboard will detect the configuration
3. Trigger a build in Ionic Dashboard
4. Download iOS/Android builds or deploy to stores

## Questions?
- This is a React web app wrapped with Capacitor (not React Native)
- The web app runs inside a native WebView
- All React code remains unchanged
- Capacitor provides native APIs when needed
