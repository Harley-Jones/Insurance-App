import { Achievement } from '../types/gamification';
import { Card } from './ui/card';
import { Lock } from 'lucide-react';

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <Card className={`p-4 ${achievement.unlocked ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300' : 'bg-gray-50 opacity-60'}`}>
      <div className="flex items-start gap-3">
        <div className="relative">
          <img 
            src={achievement.icon} 
            alt={achievement.title}
            className={`w-12 h-12 rounded-full ${!achievement.unlocked && 'grayscale'}`}
          />
          {!achievement.unlocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
              <Lock className="w-5 h-5 text-white" />
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
          <p className="text-sm text-gray-600">{achievement.description}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-medium text-orange-600">+{achievement.points} pts</span>
            {achievement.unlocked && achievement.unlockedAt && (
              <span className="text-xs text-gray-500">
                Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
