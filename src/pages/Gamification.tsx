import { useGamification } from '../contexts/GamificationContext';
import LevelBadge from '../components/LevelBadge';
import AchievementCard from '../components/AchievementCard';
import Leaderboard from '../components/Leaderboard';
import { Card } from '../components/ui/card';
import { Trophy, Target, Flame, Award } from 'lucide-react';
import { POINT_VALUES } from '../data/gamificationData';

export default function Gamification() {
  const { gamification } = useGamification();

  const achievements = [
    {
      id: 'first-lesson',
      title: 'First Steps',
      description: 'Complete your first lesson',
      icon: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764057446573_13dc4c3b.webp',
      points: POINT_VALUES.LESSON_COMPLETE,
      unlocked: gamification.totalLessonsCompleted >= 1,
      category: 'lesson' as const
    },
    {
      id: 'quiz-master',
      title: 'Quiz Master',
      description: 'Pass 5 quizzes',
      icon: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764057449023_22ba9afc.webp',
      points: 250,
      unlocked: gamification.totalQuizzesPassed >= 5,
      category: 'quiz' as const
    },
    {
      id: 'streak-keeper',
      title: 'Streak Keeper',
      description: 'Maintain a 7-day learning streak',
      icon: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764057450065_ef8685d9.webp',
      points: 300,
      unlocked: gamification.streak >= 7,
      category: 'streak' as const
    },
    {
      id: 'certificate-collector',
      title: 'Certificate Collector',
      description: 'Earn 3 certificates',
      icon: 'https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764057450970_807da94f.webp',
      points: 500,
      unlocked: gamification.totalCertificatesEarned >= 3,
      category: 'certificate' as const
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Progress</h1>
        <p className="text-gray-600">Track your learning journey and compete with others</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <LevelBadge />
        </div>
        
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
            <Target className="w-8 h-8 text-blue-600 mb-2" />
            <div className="text-3xl font-bold text-blue-900">{gamification.totalLessonsCompleted}</div>
            <div className="text-sm text-blue-700">Lessons Completed</div>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100">
            <Trophy className="w-8 h-8 text-green-600 mb-2" />
            <div className="text-3xl font-bold text-green-900">{gamification.totalQuizzesPassed}</div>
            <div className="text-sm text-green-700">Quizzes Passed</div>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100">
            <Flame className="w-8 h-8 text-orange-600 mb-2" />
            <div className="text-3xl font-bold text-orange-900">{gamification.streak}</div>
            <div className="text-sm text-orange-700">Day Streak</div>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100">
            <Award className="w-8 h-8 text-purple-600 mb-2" />
            <div className="text-3xl font-bold text-purple-900">{gamification.totalCertificatesEarned}</div>
            <div className="text-sm text-purple-700">Certificates</div>
          </Card>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="space-y-3">
            {achievements.map(achievement => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>

        <div>
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}
