import { useState } from 'react';
import { Quiz as QuizType } from '../types/education';
import { useGamification } from '../contexts/GamificationContext';
import { POINT_VALUES } from '../data/gamificationData';


interface QuizProps {
  quiz: QuizType;
  onComplete: (score: number) => void;
}

export default function Quiz({ quiz, onComplete }: QuizProps) {
  const { addPoints, gamification } = useGamification();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);


  const question = quiz.questions[currentQuestion];
  const isLastQuestion = currentQuestion === quiz.questions.length - 1;

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const finalScore = Math.round((score / quiz.questions.length) * 100);
      const isPerfect = score === quiz.questions.length;
      const points = isPerfect ? POINT_VALUES.QUIZ_PERFECT : POINT_VALUES.QUIZ_PASS;
      
      if (finalScore >= 70) {
        addPoints(points, isPerfect ? 'Perfect quiz score!' : 'Quiz passed!');
      }
      
      onComplete(finalScore);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };


  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-gray-600">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </span>
          <span className="text-sm font-semibold text-blue-600">
            Score: {score}/{quiz.questions.length}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-6">{question.question}</h3>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showExplanation && handleAnswer(index)}
            disabled={showExplanation}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
              showExplanation
                ? index === question.correctAnswer
                  ? 'border-green-500 bg-green-50'
                  : index === selectedAnswer
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 bg-gray-50'
                : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-900">{question.explanation}</p>
        </div>
      )}

      {showExplanation && (
        <button
          onClick={handleNext}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          {isLastQuestion ? 'Complete Module' : 'Next Question'}
        </button>
      )}
    </div>
  );
}
