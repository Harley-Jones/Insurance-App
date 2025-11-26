import { useGamification } from '../contexts/GamificationContext';
import { Progress } from './ui/progress';

export default function LevelBadge() {
  const { gamification, getCurrentLevel } = useGamification();
  const currentLevel = getCurrentLevel();
  const nextLevel = currentLevel.maxPoints !== Infinity 
    ? currentLevel.maxPoints + 1 
    : currentLevel.maxPoints;
  
  const progressPercent = currentLevel.maxPoints !== Infinity
    ? ((gamification.points - currentLevel.minPoints) / (currentLevel.maxPoints - currentLevel.minPoints)) * 100
    : 100;

  return (
    <div className={`bg-gradient-to-br ${currentLevel.color} rounded-xl p-6 text-white shadow-lg`}>
      <div className="flex items-center gap-4 mb-4">
        <img src={currentLevel.icon} alt={currentLevel.name} className="w-16 h-16 rounded-full" />
        <div>
          <h3 className="text-2xl font-bold">{currentLevel.name} Level</h3>
          <p className="text-sm opacity-90">{gamification.points.toLocaleString()} points</p>
        </div>
      </div>
      
      {currentLevel.maxPoints !== Infinity && (
        <div className="space-y-2">
          <Progress value={progressPercent} className="h-2 bg-white/30" />
          <p className="text-xs opacity-80">
            {currentLevel.maxPoints - gamification.points} points to next level
          </p>
        </div>
      )}
    </div>
  );
}
