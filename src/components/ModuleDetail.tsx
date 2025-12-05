import { useState } from 'react';
import { Module } from '../types/education';
import LessonView from './LessonView';
import Quiz from './Quiz';
import CashValueCalculator from './calculators/CashValueCalculator';
import PolicyLoanCalculator from './calculators/PolicyLoanCalculator';
import WealthRecaptureCalculator from './calculators/WealthRecaptureCalculator';
import { toast } from 'sonner';


interface ModuleDetailProps {
  module: Module;
  onBack: () => void;
  onComplete: (score: number) => void;
  completedLessons: string[];
  onLessonComplete: (lessonId: string) => void;
}

export default function ModuleDetail({ 
  module, 
  onBack, 
  onComplete, 
  completedLessons,
  onLessonComplete 
}: ModuleDetailProps) {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCalculators, setShowCalculators] = useState(false);

  const isInfiniteBanking = module.id === 'infinite-banking';

  const allLessonsComplete = module.lessons.every(l => completedLessons.includes(l.id));

  const handleLessonComplete = () => {
    onLessonComplete(module.lessons[currentLesson].id);
    if (currentLesson < module.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else {
      setShowQuiz(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <button
          onClick={onBack}
          className="mb-4 sm:mb-6 flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Modules
        </button>

        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{module.title}</h1>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4">
            {module.lessons.map((lesson, index) => (
              <button
                key={lesson.id}
                onClick={() => {
                  setCurrentLesson(index);
                  setShowQuiz(false);
                  setShowCalculators(false);
                }}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  currentLesson === index && !showQuiz && !showCalculators
                    ? `${module.color} text-white`
                    : completedLessons.includes(lesson.id)
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Lesson {index + 1}
              </button>
            ))}
            {isInfiniteBanking && (
              <button
                onClick={() => {
                  setShowCalculators(true);
                  setShowQuiz(false);
                }}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  showCalculators ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-700'
                }`}
              >
                Calculators
              </button>
            )}
            {allLessonsComplete && (
              <button
                onClick={() => {
                  setShowQuiz(true);
                  setShowCalculators(false);
                }}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  showQuiz ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-700'
                }`}
              >
                Quiz
              </button>
            )}
          </div>

        </div>


        {showCalculators ? (
          <div className="space-y-6">
            <CashValueCalculator />
            <PolicyLoanCalculator />
            <WealthRecaptureCalculator />
          </div>
        ) : !showQuiz ? (
          <LessonView 
            lesson={module.lessons[currentLesson]} 
            onComplete={handleLessonComplete}
          />
        ) : (
          <Quiz quiz={module.quiz} onComplete={onComplete} />
        )}

      </div>
    </div>
  );
}
