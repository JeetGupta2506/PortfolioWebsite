import React from 'react';

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
                Data Scientist & ML Engineer
              </h3>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed animate-fade-in-up animation-delay-600">
                  I'm a passionate data scientist with over 5 years of experience in transforming complex data into actionable insights.
                  My expertise lies in building scalable machine learning solutions that drive real business value.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed animate-fade-in-up animation-delay-700">
                  I specialize in predictive modeling, natural language processing, and computer vision applications.
                  My approach combines deep technical knowledge with strong business acumen to deliver solutions that matter.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed animate-fade-in-up animation-delay-800">
                  As the AI/ML Lead at GDGC NIT Surat, I actively contribute to the developer community by organizing workshops,
                  conducting technical sessions, and mentoring students in artificial intelligence and machine learning technologies.
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