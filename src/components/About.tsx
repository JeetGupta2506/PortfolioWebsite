import {} from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float-3d transform-3d"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-100 rounded-full opacity-30 animate-float-delayed transform-3d"></div>
      </div>

      <div className="container-responsive relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-6 will-change-transform">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full animate-expand animation-delay-300"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-responsive-y animate-slide-in-left animation-delay-400">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover-card-3d transform-3d">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 will-change-transform">
                  AI / ML Enthusiast · Fresher
                </h3>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed animate-fade-in-up animation-delay-600">
                    My journey in AI is built on a comprehensive foundation. I started with the core principles of Machine Learning, mastering the algorithms that extract patterns from data. This led me to the world of Deep Learning, where I built and trained complex neural networks for vision and language tasks. My passion for language and understanding naturally steered me toward Natural Language Processing (NLP), where I worked on everything from text classification to machine translation.

Today, my focus is on the most dynamic field to emerge from this convergence: Generative AI. I see it as the culmination of ML, DL, and NLP, and I am dedicated to building the next generation of intelligent systems. My work involves leveraging Large Language Models to create solutions that can reason, generate, and collaborate—whether it's through building accurate RAG systems, customizing models for specific domains, or creating frameworks for AI agents to work in concert.

I am not just an algorithm developer; I am an engineer who builds end-to-end systems that are reliable, scalable, and truly intelligent.f
                  </p>

                

                 
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;