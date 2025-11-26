import { Module } from '../types/education';
import { UserProgress } from '../types/education';
import ModuleCard from './ModuleCard';
import Badge from './Badge';

interface DashboardProps {
  modules: Module[];
  progress: UserProgress;
  onModuleClick: (moduleId: string) => void;
}

export default function Dashboard({ modules, progress, onModuleClick }: DashboardProps) {
  const getModuleProgress = (module: Module) => {
    const completedLessons = module.lessons.filter(l => 
      progress.completedLessons.includes(l.id)
    ).length;
    const hasQuiz = progress.quizScores[module.id] !== undefined;
    const total = module.lessons.length + 1;
    const completed = completedLessons + (hasQuiz ? 1 : 0);
    return Math.round((completed / total) * 100);
  };

  const badges = [
    { id: 'first-module', title: 'First Steps', description: 'Complete your first module', earned: progress.completedModules.length >= 1 },
    { id: 'half-way', title: 'Half Way There', description: 'Complete 50% of modules', earned: progress.completedModules.length >= Math.ceil(modules.length / 2) },
    { id: 'master', title: 'Financial Master', description: 'Complete all modules', earned: progress.completedModules.length === modules.length },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Learning Path</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map(module => {
            const hasCertificate = progress.certificates?.some(c => c.moduleId === module.id);
            return (
              <ModuleCard
                key={module.id}
                module={module}
                progress={getModuleProgress(module)}
                onClick={() => onModuleClick(module.id)}
                hasCertificate={hasCertificate}
              />
            );
          })}

        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {badges.map(badge => (
            <Badge
              key={badge.id}
              title={badge.title}
              description={badge.description}
              earned={badge.earned}
              icon="https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050203141_1f76a14f.webp"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
