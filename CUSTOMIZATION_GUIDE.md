# Life Insurance Education Platform - Customization Guide

## Overview
This is a comprehensive, gamified education platform for teaching life insurance, annuities, and the Infinite Banking Concept. All user data is stored locally—no telemetry or data collection.

## Adding Your Contact Information

### Update Contact Details (After Module Completion)
Edit `src/components/ContactReveal.tsx`:

```typescript
// Line 41-42: Update email
<a href="mailto:YOUR_EMAIL@example.com" ...>
  YOUR_EMAIL@example.com
</a>

// Line 49-50: Update phone
<a href="tel:+1YOURNUMBER" ...>
  (XXX) XXX-XXXX
</a>

// Line 58-59: Update website
<a href="https://www.YOURWEBSITE.com" ...>
  www.YOURWEBSITE.com
</a>
```

## Adding Video Content

### Option 1: YouTube Videos
In any module file (e.g., `src/data/infiniteBanking.ts`):

```typescript
{
  id: 'lesson-1',
  title: 'Your Lesson Title',
  content: 'Your lesson content...',
  keyPoints: ['Point 1', 'Point 2'],
  videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  videoType: 'youtube'
}
```

### Option 2: Vimeo Videos
```typescript
videoUrl: 'https://vimeo.com/YOUR_VIDEO_ID',
videoType: 'vimeo'
```

### Option 3: Self-Hosted MP4 Videos
```typescript
videoUrl: '/path/to/your/video.mp4',
videoType: 'mp4'
```

## Module Structure

Each module in `src/data/` follows this structure:

```typescript
export const yourModule: Module = {
  id: 'unique-id',
  title: 'Module Title',
  category: 'life-insurance' | 'income-protection' | 'infinite-banking',
  description: 'Brief description',
  image: 'image-url',
  color: 'bg-color-class',
  lessons: [
    {
      id: 'lesson-id',
      title: 'Lesson Title',
      content: 'Educational content...',
      keyPoints: ['Key point 1', 'Key point 2'],
      videoUrl: 'optional-video-url',
      videoType: 'youtube' | 'vimeo' | 'mp4',
      transcript: 'Optional transcript text'
    }
  ],
  quiz: {
    questions: [
      {
        id: 'question-id',
        question: 'Question text?',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        correctAnswer: 0, // Index of correct option (0-3)
        explanation: 'Why this is correct'
      }
    ]
  }
};
```

## Available Modules

The platform includes comprehensive modules on:
- G.R.I.P. Framework (Government Restrictions Inhibiting Prosperity)
- Infinite Banking Concept
- Term Life Insurance
- Whole Life Insurance
- Universal Life Insurance
- Indexed Universal Life (IUL)
- Variable Life Insurance
- Mortgage Protection Insurance
- Annuities (Fixed, Variable, Indexed)
- Disability & Income Protection
- Estate Planning & Living Trusts
- Consumer Protection

## Privacy & Data Storage

All user progress, quiz scores, and certificates are stored in browser localStorage. No data is sent to external servers. Users can:
- Complete modules at their own pace
- Earn badges and certificates
- Track progress with gamification
- Access calculators (Cash Value, Policy Loan, Wealth Recapture)

## Deployment

1. Build: `npm run build`
2. Deploy the `dist` folder to any static hosting service
3. No backend required—everything runs client-side

## Support

For questions or customization help, refer to the React + TypeScript + Vite documentation.
