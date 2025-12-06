import { useState, useRef } from 'react';
import ProgressRing from './ProgressRing';
import { useGamification } from '../contexts/GamificationContext';
import { Trophy, Flame, Award, Volume2, VolumeX } from 'lucide-react';

interface HeroProps {
  overallProgress: number;
  completedModules: number;
  totalModules: number;
}

export default function Hero({ overallProgress, completedModules, totalModules }: HeroProps) {
  const { gamification, getCurrentLevel } = useGamification();
  const currentLevel = getCurrentLevel();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-[800px]">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050198697_45624597.webp"
          alt="Financial Freedom"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Become Your Own Bank
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-6 sm:mb-8">
              Learn everything about life insurance, annuities, and wealth-building strategies without the pressure of a sales environment. 
              Master the Infinite Banking Concept and discover how to recapture the interest you pay to banks. 
              100% private learning—all data stays on your device.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 sm:px-6 sm:py-4">
                <div className="text-2xl sm:text-3xl font-bold">{totalModules}</div>
                <div className="text-sm sm:text-base text-blue-200">Learning Modules</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 sm:px-6 sm:py-4">
                <div className="text-2xl sm:text-3xl font-bold">{completedModules}</div>
                <div className="text-sm sm:text-base text-blue-200">Completed</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className={`bg-gradient-to-r ${currentLevel.color} rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2`}>
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-semibold">{currentLevel.name}</span>
              </div>
              <div className="bg-orange-500/80 backdrop-blur-sm rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-semibold">{gamification.streak} Day Streak</span>
              </div>
              <div className="bg-purple-500/80 backdrop-blur-sm rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-semibold">{gamification.points.toLocaleString()} Points</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 md:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">Your Progress</h3>
              <ProgressRing progress={overallProgress} size={200} strokeWidth={12} color="#fbbf24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
