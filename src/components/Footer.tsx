import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/JeetGupta2506' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/jeet-gupta-559099295' },
    { name: 'Email', icon: Mail, url: 'mailto:jeetgupta2506@gmail.com' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Gradient Divider Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-10 rounded-full"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label={social.name}
            >
              <social.icon size={22} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>

        {/* Made with Heart */}
        <div className="text-center mb-6">
          <p className="text-lg text-gray-300 flex items-center justify-center gap-2">
            Made with
            <Heart size={18} className="text-red-500 animate-pulse" fill="currentColor" />
            by
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Jeet Gupta
            </span>
          </p>
        </div>

        {/* Copyright & Tech Stack */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            © {currentYear} Jeet Gupta. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with React • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;