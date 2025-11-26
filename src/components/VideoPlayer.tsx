import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';

interface VideoPlayerProps {
  videoUrl: string;
  videoType: 'youtube' | 'vimeo' | 'mp4';
  lessonId: string;
  onProgressUpdate?: (progress: number) => void;
}

export default function VideoPlayer({ videoUrl, videoType, lessonId, onProgressUpdate }: VideoPlayerProps) {
  const [progress, setProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`video-progress-${lessonId}`);
    if (saved) setProgress(parseFloat(saved));
  }, [lessonId]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const prog = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(prog);
      localStorage.setItem(`video-progress-${lessonId}`, prog.toString());
      onProgressUpdate?.(prog);
    }
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) videoRef.current.playbackRate = speed;
  };

  const getEmbedUrl = () => {
    if (videoType === 'youtube') {
      const videoId = videoUrl.includes('watch?v=') 
        ? videoUrl.split('watch?v=')[1]?.split('&')[0]
        : videoUrl.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
    }
    if (videoType === 'vimeo') {
      const videoId = videoUrl.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return videoUrl;
  };

  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

  return (
    <div className="space-y-4">
      <div className="relative bg-black rounded-lg overflow-hidden">
        {videoType === 'mp4' ? (
          <video
            ref={videoRef}
            className="w-full"
            controls
            controlsList="nodownload"
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={videoUrl} type="video/mp4" />
            <source src={videoUrl} type="audio/mpeg" />
            Your browser does not support the video tag.
          </video>

        ) : (
          <iframe
            className="w-full aspect-video"
            src={getEmbedUrl()}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Speed:</span>
          {speeds.map(speed => (
            <Button
              key={speed}
              size="sm"
              variant={playbackSpeed === speed ? "default" : "outline"}
              onClick={() => handleSpeedChange(speed)}
              className="h-8 px-3"
            >
              {speed}x
            </Button>
          ))}
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-gray-700">Progress:</span>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-gray-900">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
