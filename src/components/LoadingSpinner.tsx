import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="relative">
        {/* Main spinner */}
        <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin"></div>
        
        {/* Pulsing dots */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
          <div className="w-3 h-3 bg-secondary-500 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
        </div>
        
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
          <div className="w-2 h-2 bg-green-500 rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
      
      <div className="absolute mt-24 text-gray-600 dark:text-gray-400 font-medium animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default LoadingSpinner;