import React from 'react';
import { Code, Database, Monitor, Smartphone, Brain, Globe } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const About: React.FC = () => {
  const skills = [
    { icon: Code, name: 'PHP & Laravel', level: 95 },
    { icon: Database, name: 'MySQL', level: 90 },
    { icon: Globe, name: 'REST APIs', level: 92 },
    { icon: Brain, name: 'AI Integration', level: 85 },
    { icon: Smartphone, name: 'Flutter', level: 88 },
    { icon: Monitor, name: 'Web Development', level: 93 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full animate-scale-in"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                I'm a passionate full-stack developer with expertise in creating robust web applications 
                and mobile solutions. With a strong foundation in PHP and Laravel, I specialize in building 
                scalable backend systems and RESTful APIs.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                My journey in technology extends beyond traditional web development. I'm fascinated by 
                artificial intelligence and its potential to revolutionize how we interact with applications. 
                I integrate AI capabilities into projects to create intelligent, user-centric solutions.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and sharing knowledge with the developer community. I believe in writing clean, maintainable 
                code and following best practices.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-primary-200 dark:hover:bg-primary-900/50">
                Problem Solver
              </div>
              <div className="px-4 py-2 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-secondary-200 dark:hover:bg-secondary-900/50">
                Team Player
              </div>
              <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-green-200 dark:hover:bg-green-900/50">
                Fast Learner
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <skill.icon className="text-primary-600 dark:text-primary-400 transition-transform duration-300 group-hover:scale-110" size={20} />
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full transition-all duration-1000 ease-out animate-skill-bar group-hover:shadow-lg"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${(index + 1) * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;