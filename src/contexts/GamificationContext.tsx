import React, { createContext, useContext, useState, useEffect } from 'react';
import { GamificationState, Achievement, LeaderboardEntry } from '../types/gamification';
import { LEVELS, POINT_VALUES } from '../data/gamificationData';
import { toast } from '@/components/ui/use-toast';

interface GamificationContextType {
  gamification: GamificationState;
  addPoints: (points: number, reason: string) => void;
  unlockAchievement: (achievementId: string) => void;
  getCurrentLevel: () => any;
  getLeaderboard: () => LeaderboardEntry[];
  checkAndUpdateStreak: () => void;
}

const defaultState: GamificationState = {
  points: 0,
  level: 'Bronze',
  achievements: [],
  streak: 0,
  totalLessonsCompleted: 0,
  totalQuizzesPassed: 0,
  totalCertificatesEarned: 0
};

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (!context) throw new Error('useGamification must be used within GamificationProvider');
  return context;
};

export const GamificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gamification, setGamification] = useState<GamificationState>(() => {
    const saved = localStorage.getItem('gamification');
    return saved ? JSON.parse(saved) : defaultState;
  });

  useEffect(() => {
    localStorage.setItem('gamification', JSON.stringify(gamification));
  }, [gamification]);

  const getCurrentLevel = () => {
    return LEVELS.find(l => 
      gamification.points >= l.minPoints && gamification.points <= l.maxPoints
    ) || LEVELS[0];
  };

  const addPoints = (points: number, reason: string) => {
    setGamification(prev => {
      const newPoints = prev.points + points;
      const newLevel = LEVELS.find(l => newPoints >= l.minPoints && newPoints <= l.maxPoints);
      
      // Update counters based on reason
      let updates: Partial<GamificationState> = {
        points: newPoints,
        level: newLevel?.name || prev.level
      };
      
      if (reason.includes('Lesson')) {
        updates.totalLessonsCompleted = prev.totalLessonsCompleted + 1;
      }
      if (reason.includes('Quiz') || reason.includes('quiz')) {
        updates.totalQuizzesPassed = prev.totalQuizzesPassed + 1;
      }
      if (reason.includes('Certificate') || reason.includes('certificate')) {
        updates.totalCertificatesEarned = prev.totalCertificatesEarned + 1;
      }
      
      if (newLevel && newLevel.name !== prev.level) {
        toast({
          title: `Level Up!`,
          description: `You've reached ${newLevel.name} level!`,
        });
      }

      toast({
        title: `+${points} Points!`,
        description: reason,
      });

      return { ...prev, ...updates };
    });
  };


  const unlockAchievement = (achievementId: string) => {
    setGamification(prev => ({
      ...prev,
      achievements: prev.achievements.map(a =>
        a.id === achievementId ? { ...a, unlocked: true, unlockedAt: new Date() } : a
      )
    }));
  };

  const checkAndUpdateStreak = () => {
    const today = new Date().toDateString();
    const lastActivity = gamification.lastActivityDate;
    
    if (lastActivity !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      const newStreak = lastActivity === yesterday ? gamification.streak + 1 : 1;
      
      setGamification(prev => ({
        ...prev,
        streak: newStreak,
        lastActivityDate: today
      }));

      if (newStreak > 1) {
        addPoints(POINT_VALUES.DAILY_STREAK, `${newStreak} day streak!`);
      }
    }
  };

  const getLeaderboard = (): LeaderboardEntry[] => {
    return [];
  };

  return (
    <GamificationContext.Provider value={{
      gamification,
      addPoints,
      unlockAchievement,
      getCurrentLevel,
      getLeaderboard,
      checkAndUpdateStreak
    }}>
      {children}
    </GamificationContext.Provider>
  );
};
