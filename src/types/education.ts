export interface Module {
  id: string;
  title: string;
  category: 'life-insurance' | 'income-protection' | 'estate-planning' | 'infinite-banking';
  description: string;
  image: string;
  lessons: Lesson[];
  quiz: Quiz;
  color: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  videoUrl?: string; // YouTube, Vimeo, or MP4 URL
  videoType?: 'youtube' | 'vimeo' | 'mp4';
  transcript?: string;
  resources?: Resource[];
}

export interface Resource {
  title: string;
  type: 'pdf' | 'doc' | 'xlsx' | 'link';
  url: string;
  size?: string;
}



export interface Quiz {
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Certificate {
  moduleId: string;
  moduleTitle: string;
  completionDate: string;
  score: number;
  userName: string;
}

export interface UserProgress {
  completedLessons: string[];
  completedModules: string[];
  quizScores: { [moduleId: string]: number };
  badges: string[];
  totalTimeSpent: number;
  lastAccessed: string;
  certificates: Certificate[];
  userName?: string;
}

