import { useState, useRef, useEffect } from 'react';
import ProgressRing from './ProgressRing';
import { useGamification } from '../contexts/GamificationContext';
import { Trophy, Flame, Award, Volume2, VolumeX, Play } from 'lucide-react';

interface HeroProps {
  overallProgress: number;
  completedModules: number;
  totalModules: number;
}

export default function Hero({ overallProgress, completedModules, totalModules }: HeroProps) {
  const { gamification, getCurrentLevel } = useGamification();
  const currentLevel = getCurrentLevel();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  useEffect(() => {
    // Attempt autoplay when component mounts
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      }).catch((error) => {
        // Autoplay was prevented - show play button
        console.log('Autoplay prevented:', error);
        setShowPlayButton(true);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowPlayButton(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Video Background Header */}
      <div className="absolute inset-0 opacity-40">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          poster="https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050198697_45624597.webp"
        >
          <source src="/videos/three-hours-thirty-years.mp4" type="video/mp4" />
          {/* Fallback image */}
        </video>

        {/* Play button overlay (shown if autoplay is blocked) */}
        {showPlayButton && !isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-10"
            onClick={handlePlayClick}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all transform hover:scale-110">
              <Play className="w-16 h-16 text-white" fill="white" />
            </div>
          </div>
        )}

        {/* Mute/Unmute button */}
        {isPlaying && (
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full p-3 transition-all"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </button>
        )}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Become Your Own Bank
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Learn everything about life insurance, annuities, and wealth-building strategies without the pressure of a sales environment. 
              Master the Infinite Banking Concept and discover how to recapture the interest you pay to banks. 
              100% private learning—all data stays on your device.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-3xl font-bold">{totalModules}</div>
                <div className="text-blue-200">Learning Modules</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-3xl font-bold">{completedModules}</div>
                <div className="text-blue-200">Completed</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className={`bg-gradient-to-r ${currentLevel.color} rounded-lg px-4 py-2 flex items-center gap-2`}>
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">{currentLevel.name}</span>
              </div>
              <div className="bg-orange-500/80 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <Flame className="w-5 h-5" />
                <span className="font-semibold">{gamification.streak} Day Streak</span>
              </div>
              <div className="bg-purple-500/80 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="font-semibold">{gamification.points.toLocaleString()} Points</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Your Progress</h3>
              <ProgressRing progress={overallProgress} size={200} strokeWidth={12} color="#fbbf24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
