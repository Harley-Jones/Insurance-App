import { Module } from '../types/education';
import { Award } from 'lucide-react';

interface ModuleCardProps {
  module: Module;
  progress: number;
  onClick: () => void;
  hasCertificate?: boolean;
}


export default function ModuleCard({ module, progress, onClick, hasCertificate }: ModuleCardProps) {

  const isCompleted = progress === 100;

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={module.image} 
          alt={module.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className={`absolute inset-0 ${module.color} opacity-40`}></div>
        {isCompleted && (
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="bg-green-500 text-white rounded-full p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            {hasCertificate && (
              <div className="bg-amber-500 text-white rounded-full p-2" title="Certificate Earned">
                <Award className="w-6 h-6" />
              </div>
            )}
          </div>
        )}

      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
        <p className="text-gray-600 mb-4">{module.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${module.color} transition-all duration-500`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">{progress}% Complete</p>
          </div>
          <button className={`ml-4 px-4 py-2 rounded-lg text-white font-semibold ${module.color} hover:opacity-90 transition-opacity`}>
            {progress === 0 ? 'Start' : progress === 100 ? 'Review' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
}
