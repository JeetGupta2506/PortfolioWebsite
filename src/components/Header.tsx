import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 will-change-transform">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl bg-emerald-500 hover-tilt transform-3d transition-all duration-300 animate-morphing"></div>
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center text-sm sm:text-base lg:text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-all duration-300 ripple hover-lift transform-3d will-change-transform"
              aria-label="Home"
            >
              <span>Jeet Gupta</span>
              <span className="mx-1 sm:mx-2 text-gray-400">·</span>
              <span className="font-normal hidden sm:inline">Data Scientist</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-item ripple hover-lift transform-3d"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-item ripple hover-lift transform-3d"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="nav-item ripple hover-lift transform-3d"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="nav-item ripple hover-lift transform-3d"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-item ripple hover-lift transform-3d"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <a href="https://github.com/JeetGupta2506" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-all duration-300 ripple hover-button-3d transform-3d">
              <Github size={18} className="icon-interactive" />
            </a>
            <a href="https://www.linkedin.com/in/jeet-gupta-559099295" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-all duration-300 ripple hover-button-3d transform-3d">
              <Linkedin size={18} className="icon-interactive" />
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-3 xl:px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all duration-300 ripple hover-button-3d transform-3d text-sm"
            >
              <Mail size={16} className="icon-interactive" />
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 ripple icon-interactive hover-button-3d transform-3d"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} className="icon-rotate" /> : <Menu size={20} className="icon-interactive" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm animate-slide-in-up">
            <nav className="py-3 sm:py-4 space-y-1 sm:space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="w-full text-left px-4 py-2 sm:py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300 ripple icon-interactive link-interactive hover-lift transform-3d text-sm sm:text-base"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="w-full text-left px-4 py-2 sm:py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300 ripple icon-interactive link-interactive hover-lift transform-3d text-sm sm:text-base"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="w-full text-left px-4 py-2 sm:py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300 ripple icon-interactive link-interactive hover-lift transform-3d text-sm sm:text-base"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="w-full text-left px-4 py-2 sm:py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300 ripple icon-interactive link-interactive hover-lift transform-3d text-sm sm:text-base"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full text-left px-4 py-2 sm:py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300 ripple icon-interactive link-interactive hover-lift transform-3d text-sm sm:text-base"
              >
                Contact
              </button>
              
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-4 pt-3 sm:pt-4 border-t border-gray-100 mt-3 sm:mt-4">
                <a href="https://github.com/JeetGupta2506" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-all duration-300 ripple hover-button-3d transform-3d">
                  <Github size={18} className="icon-interactive" />
                </a>
                <a href="https://www.linkedin.com/in/jeet-gupta-559099295" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-all duration-300 ripple hover-button-3d transform-3d">
                  <Linkedin size={18} className="icon-interactive" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;