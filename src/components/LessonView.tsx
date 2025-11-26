import { Lesson } from '../types/education';
import VideoPlayer from './VideoPlayer';
import VideoNotes from './VideoNotes';
import VideoTranscript from './VideoTranscript';
import DownloadableResources from './DownloadableResources';
import { useGamification } from '../contexts/GamificationContext';
import { POINT_VALUES } from '../data/gamificationData';

interface LessonViewProps {
  lesson: Lesson;
  onComplete: () => void;
}

export default function LessonView({ lesson, onComplete }: LessonViewProps) {
  const { addPoints, checkAndUpdateStreak } = useGamification();
  
  const handleComplete = () => {
    addPoints(POINT_VALUES.LESSON_COMPLETE, 'Lesson completed!');
    checkAndUpdateStreak();
    onComplete();
  };

  return (
    <div className="space-y-6">
      {lesson.videoUrl && lesson.videoType && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{lesson.title}</h2>
          <VideoPlayer
            videoUrl={lesson.videoUrl}
            videoType={lesson.videoType}
            lessonId={lesson.id}
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {!lesson.videoUrl && (
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{lesson.title}</h2>
            )}
            
            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">{lesson.content}</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Key Takeaways</h3>
              <ul className="space-y-2">
                {lesson.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleComplete}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Mark as Complete & Continue
            </button>
          </div>

          {lesson.transcript && (
            <VideoTranscript transcript={lesson.transcript} />
          )}

          {lesson.resources && lesson.resources.length > 0 && (
            <DownloadableResources resources={lesson.resources} />
          )}
        </div>

        {lesson.videoUrl && (
          <div className="lg:col-span-1">
            <VideoNotes lessonId={lesson.id} />
          </div>
        )}
      </div>
    </div>
  );
}
