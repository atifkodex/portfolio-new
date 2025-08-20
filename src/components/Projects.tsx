import React from 'react';
import { ExternalLink, Github, Code, Database, Smartphone, Globe, Brain, Zap } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "A full-stack e-commerce solution with AI-driven product recommendations, inventory management, and customer analytics. Built with Laravel backend and React frontend.",
      technologies: ["Laravel", "React", "MySQL", "AI/ML", "REST API"],
      githubUrl: "https://github.com/atifkodex",
      liveUrl: "#",
      icon: Brain,
      featured: true
    },
    {
      title: "Flutter Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management features.",
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "Security"],
      githubUrl: "https://github.com/atifkodex",
      liveUrl: "#",
      icon: Smartphone,
      featured: true
    },
    {
      title: "Laravel CRM System",
      description: "Customer relationship management system with advanced reporting, lead tracking, and automated email campaigns. Features role-based access control.",
      technologies: ["Laravel", "MySQL", "Vue.js", "Chart.js", "Queue Jobs"],
      githubUrl: "https://github.com/atifkodex",
      liveUrl: "#",
      icon: Database,
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat application with file sharing, group chats, and message encryption. Built with Laravel WebSockets and React.",
      technologies: ["Laravel", "WebSockets", "React", "Redis", "Pusher"],
      githubUrl: "https://github.com/atifkodex",
      liveUrl: "#",
      icon: Zap,
      featured: false
    },
    {
      title: "API Gateway & Microservices",
      description: "Scalable microservices architecture with API gateway, service discovery, and distributed logging. Containerized with Docker.",
      technologies: ["Laravel", "Docker", "MySQL", "Redis", "Nginx"],
      githubUrl: "https://github.com/atifkodex",
      liveUrl: "#",
      icon: Globe,
      featured: false
    },
    {
      title: "Machine Learning Dashboard",
      description: "Analytics dashboard for ML model performance monitoring with real-time data visualization and automated reporting capabilities.",
      technologies: ["Laravel", "Python", "Chart.js", "MySQL", "AI/ML"],
      githubUrl: "https://github.com/atifkodex",
      liveUrl: "#",
      icon: Code,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-6 animate-scale-in"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            Here are some of my recent projects that showcase my expertise in full-stack development,
            AI integration, and mobile app development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <AnimatedCard
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              delay={index * 200}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <project.icon className="text-primary-600 dark:text-primary-400 transition-transform duration-300 group-hover:scale-110" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Github size={16} className="transition-transform duration-300 group-hover:rotate-12" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <ExternalLink size={16} className="transition-transform duration-300 group-hover:rotate-12" />
                    Demo
                  </a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-fade-in">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <AnimatedCard
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                delay={(index + 2) * 150}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-3 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <project.icon className="text-primary-600 dark:text-primary-400 transition-transform duration-300 group-hover:scale-110" size={20} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs transition-all duration-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 dark:text-gray-500 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 text-sm hover:scale-105"
                    >
                      <Github size={14} className="transition-transform duration-300 hover:rotate-12" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 text-sm hover:scale-105"
                    >
                      <ExternalLink size={14} className="transition-transform duration-300 hover:rotate-12" />
                      Demo
                    </a>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/atifkodex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg group"
          >
            <Github size={20} className="transition-transform duration-300 group-hover:rotate-12" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;