import React, { useEffect, useRef, useState } from 'react';
import { Brain, Database, BarChart3, Code, Award, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: Brain, name: 'Machine Learning', level: 95 },
    { icon: Database, name: 'Data Engineering', level: 90 },
    { icon: BarChart3, name: 'Data Visualization', level: 88 },
    { icon: Code, name: 'Python & R', level: 92 },
  ];

  const stats = [
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '15+', label: 'Clients Served' },
    { icon: Database, value: '1M+', label: 'Records Processed' },
    { icon: BarChart3, value: '25%', label: 'Avg. Performance Boost' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 animate-expand"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Passionate About Data-Driven Solutions
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 5 years of experience in data science and machine learning, I specialize in 
              extracting meaningful insights from complex datasets and building predictive models 
              that solve real-world business problems.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              My expertise spans across statistical analysis, deep learning, natural language processing, 
              and computer vision. I'm passionate about translating data into actionable strategies 
              that drive growth and innovation.
            </p>

            {/* Skills */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-900">Core Competencies</h4>
              {skills.map((skill, index) => (
                <div key={index} className={`space-y-2 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`} style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex items-center space-x-2">
                    <skill.icon size={20} className="text-blue-600 animate-pulse" />
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-gray-600 ml-auto">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-2000 ${isVisible ? '' : 'w-0'}`}
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className={`bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-bounce-in' : 'opacity-0 scale-95'}`} style={{ animationDelay: `${index * 150}ms` }}>
                  <stat.icon size={32} className="text-blue-600 mx-auto mb-4 hover:animate-spin transition-transform" />
                  <div className="text-3xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 
                  'Matplotlib', 'Seaborn', 'Jupyter', 'Docker', 'AWS', 'GCP', 'Tableau', 'Power BI'].map((tech, index) => (
                  <span 
                    key={index} 
                    className={`bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:scale-110 hover:bg-blue-50 transition-all duration-300 cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;