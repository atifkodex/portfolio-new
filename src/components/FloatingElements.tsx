import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-300/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary-300/20 rotate-45 animate-float-medium"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-300/20 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-40 w-5 h-5 bg-purple-300/20 rotate-12 animate-float-slow"></div>
      <div className="absolute top-60 left-1/2 w-2 h-2 bg-blue-300/20 rounded-full animate-float-medium"></div>
      <div className="absolute top-80 right-10 w-4 h-4 bg-pink-300/20 rotate-45 animate-float-fast"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-32 right-1/4 w-20 h-20 bg-gradient-to-r from-primary-200/10 to-secondary-200/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-r from-green-200/10 to-blue-200/10 rounded-full blur-xl animate-pulse-medium"></div>
    </div>
  );
};

export default FloatingElements;