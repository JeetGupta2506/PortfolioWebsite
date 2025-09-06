import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors link-underline ripple"
            >
              DS
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
              onClick={() => scrollToSection('education')}
              className="nav-item ripple"
            >
              Education
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
                onClick={() => scrollToSection('education')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors ripple icon-interactive link-interactive"
              >
                Education
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