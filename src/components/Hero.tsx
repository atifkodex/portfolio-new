import React from 'react';
import { ChevronDown, Download, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // First try to open the PDF in a new tab
    const pdfUrl = '/Atif-Raza-Resume.pdf';
    
    // Check if file exists by trying to fetch it
    fetch(pdfUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // File exists, open in new tab
          window.open(pdfUrl, '_blank');
        } else {
          console.error('Resume file not found');
          alert('Resume file not found. Please contact me directly for my resume.');
        }
      })
      .catch(error => {
        console.error('Error accessing resume:', error);
        // Fallback: try to open anyway
        window.open(pdfUrl, '_blank');
      });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-200/10 rounded-full blur-3xl animate-float-fast"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-down">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent animate-gradient-text">
              Atif Raza
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <p className="mb-2 animate-typewriter">Full-Stack Developer</p>
            <p className="text-lg opacity-80 animate-fade-in" style={{ animationDelay: '400ms' }}>Laravel • Flutter • AI Integration</p>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '600ms' }}>
            I craft modern web and mobile applications with clean code and innovative solutions. 
            Passionate about creating seamless user experiences and leveraging AI to solve complex problems.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '800ms' }}>
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary-500/25 group"
            >
              <span className="group-hover:animate-pulse">View My Work</span>
            </button>
            
            <button
              onClick={scrollToContact}
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 group"
            >
              <MessageCircle size={20} className="transition-transform duration-300 group-hover:rotate-12" />
              Let's Talk
            </button>
            
            <button
              onClick={handleResumeDownload}
              className="px-8 py-4 bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-600 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg group"
            >
              <Download size={20} className="transition-transform duration-300 group-hover:translate-y-1" />
              Resume
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <ChevronDown className="text-gray-400 dark:text-gray-500 animate-pulse" size={32} />
      </div>
    </section>
  );
};

export default Hero;