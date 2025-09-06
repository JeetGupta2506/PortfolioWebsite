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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500"></div>
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center text-base md:text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors ripple"
              aria-label="Home"
            >
              <span>Jeet Gupta</span>
              <span className="mx-2 text-gray-400">·</span>
              <span className="font-normal">Data Scientist</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-item ripple"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-item ripple"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="nav-item ripple"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="nav-item ripple"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-item ripple"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/JeetGupta2506" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors ripple">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jeet-gupta-559099295" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors ripple">
              <Linkedin size={20} />
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors ripple"
            >
              <Mail size={18} />
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors ripple icon-interactive"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors ripple icon-interactive link-interactive"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors ripple icon-interactive link-interactive"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors ripple icon-interactive link-interactive"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors ripple icon-interactive link-interactive"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors ripple icon-interactive link-interactive"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;