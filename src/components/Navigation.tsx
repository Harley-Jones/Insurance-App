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
          {/* Logo - Responsive sizing */}
          <div className="flex items-center">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-900">
              <span className="hidden md:inline">Financial Freedom Academy</span>
              <span className="md:hidden">FF Academy</span>
            </h1>
          </div>

          {/* Navigation buttons - Responsive sizing and spacing */}
          <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => onViewChange('dashboard')}
              className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors ${
                currentView === 'dashboard'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              >
              Modules
            </button>
            <button
              onClick={() => onViewChange('gamification')}
              className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors flex items-center gap-1 sm:gap-2 ${
                currentView === 'gamification'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Progress</span>
            </button>

            <button
              onClick={() => onViewChange('certificates')}
              className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors ${
                currentView === 'certificates'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="hidden md:inline">Certificates</span>
              <span className="md:hidden">Certs</span>
            </button>
            <button
              onClick={() => onViewChange('state-directory')}
              className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors ${
                currentView === 'state-directory'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="hidden lg:inline">State Directory</span>
              <span className="lg:hidden">States</span>
            </button>
            <button
              onClick={() => onViewChange('glossary')}
              className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors ${
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

