import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { UserProgress } from '../types/education';
import { allModules } from '../data/allModules';
import Hero from './Hero';
import Dashboard from './Dashboard';
import ModuleDetail from './ModuleDetail';
import ContactReveal from './ContactReveal';
import Navigation from './Navigation';
import Glossary from './Glossary';
import { StateInsuranceDirectory } from './StateInsuranceDirectory';
import Certificates from '../pages/Certificates';
import Gamification from '../pages/Gamification';
import UserNameDialog from './UserNameDialog';
import { toast } from 'sonner';
import { GamificationProvider } from '../contexts/GamificationContext';




const AppLayout = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'glossary' | 'state-directory' | 'certificates' | 'gamification'>('dashboard');
  const [showNameDialog, setShowNameDialog] = useState(false);


  const [progress, setProgress] = useLocalStorage<UserProgress>('edu-progress', {
    completedLessons: [],
    completedModules: [],
    quizScores: {},
    badges: [],
    totalTimeSpent: 0,
    lastAccessed: new Date().toISOString(),
    certificates: [],
    userName: ''
  });

  useEffect(() => {
    if (!progress.userName) {
      setShowNameDialog(true);
    }
  }, [progress.userName]);

  const handleNameSubmit = (name: string) => {
    setProgress({ ...progress, userName: name });
    setShowNameDialog(false);
  };

  const [selectedModule, setSelectedModule] = useState<string | null>(null);


  const handleLessonComplete = (lessonId: string) => {
    if (!progress.completedLessons.includes(lessonId)) {
      setProgress({
        ...progress,
        completedLessons: [...progress.completedLessons, lessonId]
      });
    }
  };

  const handleModuleComplete = (moduleId: string, score: number) => {
    const module = allModules.find(m => m.id === moduleId);
    
    const newProgress = {
      ...progress,
      quizScores: { ...progress.quizScores, [moduleId]: score }
    };
    
    if (!progress.completedModules.includes(moduleId)) {
      newProgress.completedModules = [...progress.completedModules, moduleId];
    }
    
    // Generate certificate
    const existingCert = progress.certificates?.find(c => c.moduleId === moduleId);
    if (!existingCert && module) {
      const certificate = {
        moduleId,
        moduleTitle: module.title,
        completionDate: new Date().toISOString(),
        score,
        userName: progress.userName || 'Student'
      };
      newProgress.certificates = [...(progress.certificates || []), certificate];
      
      // Show success notification
      toast.success('Certificate Earned!', {
        description: `You've earned a certificate for ${module.title} with a score of ${score}%. View it in the Certificates page.`,
        duration: 5000,
      });
    }

    setProgress(newProgress);
    setSelectedModule(null);
  };


  const overallProgress = Math.round((progress.completedModules.length / allModules.length) * 100);
  const allComplete = progress.completedModules.length === allModules.length;

  if (allComplete) {
    const avgScore = Object.values(progress.quizScores).reduce((a, b) => a + b, 0) / Object.values(progress.quizScores).length;
    return <ContactReveal totalScore={Math.round(avgScore)} />;
  }

  const currentModule = allModules.find(m => m.id === selectedModule);

  return (
    <GamificationProvider>
      <div className="min-h-screen bg-gray-50">
        <UserNameDialog open={showNameDialog} onSubmit={handleNameSubmit} />
        
        {!selectedModule && <Navigation currentView={currentView} onViewChange={setCurrentView} />}
        
        {!selectedModule && currentView === 'gamification' ? (
          <Gamification />
        ) : !selectedModule && currentView === 'certificates' ? (
          <Certificates certificates={progress.certificates || []} />
        ) : !selectedModule && currentView === 'state-directory' ? (
          <StateInsuranceDirectory />
        ) : !selectedModule && currentView === 'glossary' ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Glossary />
          </div>
        ) : !selectedModule ? (
          <>
            <Hero 
              overallProgress={overallProgress}
              completedModules={progress.completedModules.length}
              totalModules={allModules.length}
            />
            <Dashboard
              modules={allModules}
              progress={progress}
              onModuleClick={setSelectedModule}
            />
          </>
        ) : currentModule ? (
          <ModuleDetail
            module={currentModule}
            onBack={() => setSelectedModule(null)}
            onComplete={(score) => handleModuleComplete(currentModule.id, score)}
            completedLessons={progress.completedLessons}
            onLessonComplete={handleLessonComplete}
          />
        ) : null}
      </div>
    </GamificationProvider>
  );

};

export default AppLayout;
