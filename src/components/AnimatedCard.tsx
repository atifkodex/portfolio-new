import React, { useState } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = '', delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        group relative overflow-hidden rounded-xl transition-all duration-500 ease-out
        transform hover:scale-105 hover:-translate-y-2
        hover:shadow-2xl hover:shadow-primary-500/20 dark:hover:shadow-primary-400/20
        animate-fade-in-up
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blooper effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient-x"></div>
      <div className="absolute inset-[1px] rounded-xl bg-white dark:bg-gray-800"></div>
      
      {/* Sparkle effects */}
      {isHovered && (
        <>
          <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-sparkle" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-pink-400 rounded-full animate-sparkle" style={{ animationDelay: '0.4s' }}></div>
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Juggling effect on hover */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`
          absolute top-2 left-2 w-3 h-3 bg-primary-400 rounded-full transition-all duration-300
          ${isHovered ? 'transform translate-x-2 -translate-y-1 scale-110' : ''}
        `}></div>
        <div className={`
          absolute bottom-2 right-2 w-2 h-2 bg-secondary-400 rounded-full transition-all duration-300
          ${isHovered ? 'transform -translate-x-1 translate-y-1 scale-110' : ''}
        `}></div>
      </div>
    </div>
  );
};

export default AnimatedCard;