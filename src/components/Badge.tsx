interface BadgeProps {
  title: string;
  description: string;
  earned: boolean;
  icon?: string;
}

export default function Badge({ title, description, earned, icon }: BadgeProps) {
  return (
    <div className={`p-4 rounded-lg border-2 transition-all ${
      earned 
        ? 'border-amber-400 bg-amber-50 shadow-lg' 
        : 'border-gray-300 bg-gray-50 opacity-50'
    }`}>
      <div className="flex items-center gap-3">
        {icon && (
          <img 
            src={icon} 
            alt={title}
            className={`w-12 h-12 rounded-full ${earned ? '' : 'grayscale'}`}
          />
        )}
        <div className="flex-1">
          <h4 className={`font-bold ${earned ? 'text-amber-900' : 'text-gray-600'}`}>
            {title}
          </h4>
          <p className={`text-sm ${earned ? 'text-amber-700' : 'text-gray-500'}`}>
            {description}
          </p>
        </div>
        {earned && (
          <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    </div>
  );
}
