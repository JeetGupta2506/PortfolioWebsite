import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Made with Heart */}
          <div className="mb-6">
            <p className="text-lg text-gray-300 hover:text-white transition-colors hover-lift transform-3d cursor-pointer">
              Made with{' '}
              <Heart size={20} className="inline-block text-red-500 hover:text-red-400 transition-colors hover-icon-3d animate-pulse" />
              {' '}by Data Scientist
            </p>
          </div>

          {/* Copyright */}
          <div className="mb-8">
            <p className="text-gray-400">
              © 2024 Data Scientist Portfolio. All rights reserved.
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover-button-3d transform-3d ripple"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;