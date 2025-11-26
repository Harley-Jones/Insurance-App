import { Card } from './ui/card';
import { Trophy, Medal, Award } from 'lucide-react';
import { useGamification } from '../contexts/GamificationContext';

export default function Leaderboard() {
  const { gamification } = useGamification();
  
  // Mock leaderboard data with current user
  const leaderboardData = [
    { id: '1', username: 'FinanceGuru2024', points: 8500, level: 'Platinum', completedModules: 45, rank: 1 },
    { id: '2', username: 'MoneyMaster', points: 7200, level: 'Platinum', completedModules: 42, rank: 2 },
    { id: '3', username: 'WealthBuilder', points: 6800, level: 'Platinum', completedModules: 40, rank: 3 },
    { id: 'user', username: 'You', points: gamification.points, level: gamification.level, completedModules: gamification.totalCertificatesEarned, rank: 4 },
    { id: '4', username: 'InvestmentPro', points: 4500, level: 'Gold', completedModules: 32, rank: 5 },
    { id: '5', username: 'SmartSaver', points: 3200, level: 'Gold', completedModules: 28, rank: 6 },
    { id: '6', username: 'BudgetBoss', points: 2100, level: 'Silver', completedModules: 22, rank: 7 },
    { id: '7', username: 'DebtFreeJourney', points: 1500, level: 'Silver', completedModules: 18, rank: 8 },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-amber-700" />;
    return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
  };

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Trophy className="w-6 h-6 text-yellow-500" />
        Leaderboard
      </h3>
      
      <div className="space-y-3">
        {leaderboardData.map((entry) => (
          <div
            key={entry.id}
            className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
              entry.id === 'user' 
                ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 shadow-md' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <div className="w-12 flex justify-center">
              {getRankIcon(entry.rank)}
            </div>
            
            <div className="flex-1">
              <div className="font-semibold text-gray-900">{entry.username}</div>
              <div className="text-sm text-gray-600">{entry.level} • {entry.completedModules} modules</div>
            </div>
            
            <div className="text-right">
              <div className="font-bold text-lg text-orange-600">{entry.points.toLocaleString()}</div>
              <div className="text-xs text-gray-500">points</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
