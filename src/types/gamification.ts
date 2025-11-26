export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
  unlocked: boolean;
  unlockedAt?: Date;
  category: 'lesson' | 'quiz' | 'certificate' | 'streak' | 'special';
}

export interface Level {
  name: string;
  minPoints: number;
  maxPoints: number;
  icon: string;
  color: string;
  benefits: string[];
}

export interface LeaderboardEntry {
  id: string;
  username: string;
  points: number;
  level: string;
  completedModules: number;
  rank: number;
}

export interface GamificationState {
  points: number;
  level: string;
  achievements: Achievement[];
  streak: number;
  lastActivityDate?: string;
  totalLessonsCompleted: number;
  totalQuizzesPassed: number;
  totalCertificatesEarned: number;
}
