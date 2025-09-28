import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const roles = [
    'Data Scientist',
    'AI Engineer',
    'ML Engineer', 
    'GenAI Engineer'
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypeSpeed(75);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypeSpeed(150);
      }
    };

    const timer = setTimeout(() => {
      handleTyping();
    }, typeSpeed);

    // Check if word is complete
    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typeSpeed, roles]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Simple background with original gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 animate-gradient-x transform-gpu"></div>
      
      {/* Floating particles with original colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float-3d transform-3d opacity-70"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-teal-400 rounded-full animate-float-delayed transform-3d opacity-60"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-blue-600 rounded-full animate-pulse-slow transform-3d opacity-80"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-teal-500 rounded-full animate-float transform-3d opacity-50 animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-300 rounded-full animate-float-delayed transform-3d opacity-40 animation-delay-500"></div>
      </div>
      
      <div className="container-responsive relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid-responsive-2col items-center">
            {/* Left: Introduction */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-responsive-y">
              <h1 className="text-responsive-xl font-bold text-gray-900 leading-tight animate-slide-in-left will-change-transform">
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block animate-slide-in-right animation-delay-200 min-h-[1.2em]">
                  {displayText}
                  <span className="animate-pulse text-blue-600">|</span>
                </span>
              </h1>
              <p className="text-responsive-md text-gray-600 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-400 mx-auto lg:mx-0">
                Transforming complex data into actionable insights and building intelligent systems 
                that drive business value through advanced analytics and machine learning.
              </p>

              <div className="flex-responsive-center animate-fade-in-up animation-delay-600">
                <a href="/resume.pdf" download className="btn-primary flex items-center space-x-3 group ripple hover-button-3d transform-3d">
                  <Download size={20} className="group-hover:animate-bounce transition-transform duration-500 will-change-transform" />
                  <span className="group-hover:animate-pulse will-change-opacity">Download Resume</span>
                </a>
                <button 
                  onClick={scrollToAbout}
                  className="btn-secondary ripple hover-button-3d transform-3d"
                >
                  View My Work
                </button>
              </div>

              <div className="flex justify-center lg:justify-start space-responsive-x animate-fade-in-up animation-delay-800">
                <a href="https://github.com/JeetGupta2506" className="social-link group ripple hover-lift transform-3d stagger-1" target="_blank" rel="noopener noreferrer">
                  <Github size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors icon-interactive will-change-transform" />
                </a>
                <a href="https://www.linkedin.com/in/jeet-gupta-559099295" className="social-link group ripple hover-lift transform-3d stagger-2" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors icon-interactive will-change-transform" />
                </a>
                <a href="mailto:guptajeet2506@gmail.com" className="social-link group ripple hover-lift transform-3d stagger-3">
                  <Mail size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors icon-interactive will-change-transform" />
                </a>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-teal-600 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-110 animate-bounce-in transform-3d hover-card-3d ripple will-change-transform">
                  <img src="/profile.jpg" alt="Profile photo" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 will-change-transform" />
                </div>
                {/* Decorative elements around photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-float-3d transform-3d opacity-60 animation-delay-300"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-teal-400 rounded-full animate-float-delayed transform-3d opacity-50 animation-delay-600"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-300 rounded-full animate-pulse-slow transform-3d opacity-40 animation-delay-900"></div>
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
        <div className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-white">
          <ChevronDown size={28} className="text-gray-500 hover:text-blue-600 transition-colors icon-bounce will-change-transform" />
        </div>
      </button>
    </section>
  );
};

export default Hero;