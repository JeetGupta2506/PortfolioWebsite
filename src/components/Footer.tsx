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
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              DataSci Portfolio
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transforming complex data into actionable insights through advanced analytics, 
              machine learning, and data-driven storytelling.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0 flex items-center">
              Made with <Heart size={16} className="mx-2 text-red-500" /> by DataSci Portfolio
            </p>
            
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;