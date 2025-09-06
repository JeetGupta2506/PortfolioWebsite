import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Simple background with original gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 animate-gradient-x"></div>
      
      {/* Floating particles with original colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float-3d transform-3d"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-float-delayed transform-3d"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-blue-600 rounded-full animate-pulse transform-3d"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Introduction */}
            <div className="order-2 md:order-1 text-left mt-8 md:mt-0">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight animate-slide-in-left">
                Data Scientist &
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block animate-slide-in-right">
                  ML Engineer
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-300">
                Transforming complex data into actionable insights and building intelligent systems 
                that drive business value through advanced analytics and machine learning.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-start items-center mb-12 animate-fade-in-up animation-delay-500">
                <button className="btn-primary flex items-center space-x-2 group ripple">
                  <Download size={20} className="group-hover:animate-bounce transition-transform duration-300" />
                  <span className="group-hover:animate-pulse">Download Resume</span>
                </button>
                <button 
                  onClick={scrollToAbout}
                  className="btn-secondary ripple"
                >
                  View My Work
                </button>
              </div>

              <div className="flex justify-start space-x-8 animate-fade-in-up animation-delay-700">
                <a href="#" className="social-link group ripple">
                  <Github size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors icon-interactive" />
                </a>
                <a href="#" className="social-link group ripple animation-delay-100">
                  <Linkedin size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors icon-interactive" />
                </a>
                <a href="#" className="social-link group ripple animation-delay-200">
                  <Mail size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors icon-interactive" />
                </a>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-teal-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-bounce-in transform-3d hover-lift ripple">
                <img src="/profile.jpg" alt="Profile photo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll button with original colors */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-pulse transition-all duration-300 hover-lift transform-3d ripple"
      >
        <ChevronDown size={32} className="text-gray-400 hover:text-blue-600 transition-colors icon-bounce" />
      </button>
    </section>
  );
};

export default Hero;