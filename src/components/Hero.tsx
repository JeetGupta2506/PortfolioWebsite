import { ChevronDown, Download, Eye, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import ResumeModal from './ResumeModal';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const roles = ['Data Scientist', 'ML Engineer', 'GenAI Engineer'];

  useEffect(() => {
    const currentRoleText = roles[currentRole];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayText !== currentRoleText) {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 500); // Reduced from 1000ms to 500ms
        }
      } else {
        // Deleting backward
        if (displayText !== '') {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 80); // Reduced from 100ms to 50ms for deleting, 150ms to 80ms for typing

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden dark:bg-gray-900">
      {/* Simple background with original gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient-x transform-gpu"></div>

      {/* Floating particles with original colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 dark:bg-blue-500 rounded-full animate-float-3d transform-3d opacity-70"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-teal-400 dark:bg-teal-500 rounded-full animate-float-delayed transform-3d opacity-60"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse-slow transform-3d opacity-80"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full animate-float transform-3d opacity-50 animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-300 dark:bg-blue-600 rounded-full animate-float-delayed transform-3d opacity-40 animation-delay-500"></div>
      </div>

      <div className="container-responsive relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left: Introduction */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-slide-in-left will-change-transform">
                <span className="block mb-2">I'm a</span>
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent block min-h-[1.2em] relative">
                  {displayText}
                  <span className="animate-blink-cursor border-r-2 border-blue-600 dark:border-blue-400 ml-1"></span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-400 mx-auto lg:mx-0">
                Transforming complex data into actionable insights and building intelligent systems
                that drive business value through advanced analytics and machine learning.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 animate-fade-in-up animation-delay-600">
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="btn-primary flex items-center space-x-3 group ripple hover-button-3d transform-3d">
                  <Eye size={20} className="group-hover:animate-pulse transition-transform duration-500 will-change-transform" />
                  <span className="group-hover:animate-pulse will-change-opacity">View Resume</span>
                </button>
                <a href="/resume.pdf" download className="btn-secondary flex items-center space-x-3 group ripple hover-button-3d transform-3d">
                  <Download size={20} className="group-hover:animate-bounce transition-transform duration-500 will-change-transform" />
                  <span>Download</span>
                </a>
                <button
                  onClick={scrollToProjects}
                  className="btn-secondary ripple hover-button-3d transform-3d"
                >
                  View My Work
                </button>
              </div>

              <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 animate-fade-in-up animation-delay-800">
                <a href="https://github.com/JeetGupta2506" className="social-link group ripple hover-lift transform-3d stagger-1" target="_blank" rel="noopener noreferrer">
                  <Github size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors icon-interactive will-change-transform" />
                </a>
                <a href="https://www.linkedin.com/in/jeet-gupta-559099295" className="social-link group ripple hover-lift transform-3d stagger-2" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors icon-interactive will-change-transform" />
                </a>
                <a href="mailto:guptajeet2506@gmail.com" className="social-link group ripple hover-lift transform-3d stagger-3">
                  <Mail size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors icon-interactive will-change-transform" />
                </a>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative flex justify-center items-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-teal-600 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-110 animate-bounce-in transform-3d hover-card-3d ripple will-change-transform">
                  <img src="/profile.jpg" alt="Profile photo" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 will-change-transform" />
                </div>
                {/* Decorative elements around photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 dark:bg-blue-500 rounded-full animate-float-3d transform-3d opacity-60 animation-delay-300"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-teal-400 dark:bg-teal-500 rounded-full animate-float-delayed transform-3d opacity-50 animation-delay-600"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-300 dark:bg-blue-600 rounded-full animate-pulse-slow transform-3d opacity-40 animation-delay-900"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll button with original colors */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-pulse transition-all duration-500 hover-lift transform-3d ripple will-change-transform"
        aria-label="Scroll to about section"
      >
        <div className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-white dark:hover:bg-gray-700">
          <ChevronDown size={28} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors icon-bounce will-change-transform" />
        </div>
      </button>

      {/* Resume Preview Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default Hero;