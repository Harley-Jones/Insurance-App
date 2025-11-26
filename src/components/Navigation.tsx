import { Trophy } from 'lucide-react';

interface NavigationProps {
  currentView: 'dashboard' | 'glossary' | 'state-directory' | 'certificates' | 'gamification';
  onViewChange: (view: 'dashboard' | 'glossary' | 'state-directory' | 'certificates' | 'gamification') => void;
}




export default function Navigation({ currentView, onViewChange }: NavigationProps) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-900">Financial Freedom Academy</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onViewChange('dashboard')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                currentView === 'dashboard'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              >
              Modules
            </button>
            <button
              onClick={() => onViewChange('gamification')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                currentView === 'gamification'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Trophy className="w-4 h-4" />
              Progress
            </button>

            <button
              onClick={() => onViewChange('certificates')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                currentView === 'certificates'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Certificates
            </button>
            <button
              onClick={() => onViewChange('state-directory')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                currentView === 'state-directory'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              State Directory
            </button>
            <button
              onClick={() => onViewChange('glossary')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                currentView === 'glossary'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Glossary
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

