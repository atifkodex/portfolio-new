import React, { useState } from 'react';
import { Mail, MessageSquare, Github, Linkedin, Phone, Send, MapPin } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'atifraza13579@gmail.com',
      href: 'mailto:atifraza13579@gmail.com',
      color: 'text-red-600 dark:text-red-400'
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: '+92 306 5378431',
      href: 'https://wa.me/923065378431',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'atifkodex',
      href: 'https://github.com/atifkodex',
      color: 'text-gray-800 dark:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'atif-raza',
      href: 'https://www.linkedin.com/in/atif-raza-7a6855217',
      color: 'text-blue-600 dark:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-6 animate-scale-in"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out through 
                any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <AnimatedCard
                  key={index}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  delay={index * 150}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 h-full transition-all duration-300"
                  >
                    <div className={`p-3 rounded-lg ${item.color.replace('text-', 'bg-').replace('dark:text-', 'dark:bg-').replace('-600', '-100').replace('-400', '-900/30')} mr-4 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6`}>
                      <item.icon className={`${item.color} transition-transform duration-300 group-hover:scale-110`} size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </AnimatedCard>
              ))}
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-400 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <MapPin size={20} className="mr-2" />
              <span>Available for remote work worldwide</span>
            </div>
          </div>

          {/* Contact Form */}
          <AnimatedCard className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700" delay={300}>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none hover:border-primary-400 dark:hover:border-primary-500"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg group animate-fade-in-up"
                  style={{ animationDelay: '700ms' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Usually respond within 24 hours
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;