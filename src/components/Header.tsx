import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white shadow-md'
        : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="group"
            aria-label="Home"
          >
            <div className="flex items-center gap-3">
              <img
                src="/favicon.png"
                alt="Jeet Gupta Logo"
                className="w-10 h-10 rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Jeet Gupta
                </div>
                <div className="text-xs text-gray-600">AI/ML Engineer</div>
              </div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {['about', 'skills', 'education', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all capitalize"
              >
                {section}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/JeetGupta2506"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jeet-gupta-559099295"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
            >
              <Linkedin size={20} />
            </a>
            <div className="w-px h-6 bg-gray-300 mx-1"></div>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
            >
              <Mail size={18} />
              Let's Talk
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-2">
              {['about', 'skills', 'education', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all capitalize font-medium"
                >
                  {section}
                </button>
              ))}

              <div className="flex items-center gap-3 pt-6 mt-4 border-t border-gray-200">
                <a
                  href="https://github.com/JeetGupta2506"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 text-gray-700 hover:text-gray-900 border border-gray-300 hover:bg-gray-50 rounded-lg transition-all"
                >
                  <Github size={20} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jeet-gupta-559099295"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 text-gray-700 hover:text-gray-900 border border-gray-300 hover:bg-gray-50 rounded-lg transition-all"
                >
                  <Linkedin size={20} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow-md transition-all mt-2"
              >
                <Mail size={18} />
                Let's Talk
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;