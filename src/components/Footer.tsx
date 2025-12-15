import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float-3d transform-3d"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-teal-500/10 rounded-full animate-float-delayed transform-3d"></div>
      </div>

      <div className="container-responsive relative z-10">
        <div className="text-center">
          {/* Made with Heart */}
          <div className="mb-4 sm:mb-6 animate-fade-in-up">
            <p className="text-base sm:text-lg text-gray-300 hover:text-white transition-all duration-300 hover-lift transform-3d cursor-pointer will-change-transform">
              Made with{' '}
              <Heart size={18} className="inline-block text-red-500 hover:text-red-400 transition-all duration-300 hover-icon-3d animate-heartbeat icon-interactive" />
              {' '}by Jeet Gupta
              {' | '}
              <a href="https://www.linkedin.com/in/jeet-gupta-559099295" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-300 ml-1 sm:ml-2 transition-all duration-300 hover-lift transform-3d">LinkedIn</a>
            </p>
          </div>

          {/* Copyright */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-200">
            <p className="text-sm sm:text-base text-gray-400">
              © {currentYear} Jeet Gupta. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>

          {/* Scroll to Top Button */}
          <div className="animate-bounce-in animation-delay-400">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-500 hover-button-3d transform-3d ripple will-change-transform group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="icon-interactive group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;