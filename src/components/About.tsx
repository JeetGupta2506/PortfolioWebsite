import React from 'react';
import { Code, Database, Brain, BarChart3, TrendingUp, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', level: 95, icon: Code, color: 'blue' },
    { name: 'Machine Learning', level: 90, icon: Brain, color: 'blue' },
    { name: 'Data Analysis', level: 88, icon: BarChart3, color: 'blue' },
    { name: 'SQL & Databases', level: 85, icon: Database, color: 'blue' },
    { name: 'Deep Learning', level: 82, icon: Brain, color: 'blue' },
    { name: 'Statistical Modeling', level: 80, icon: TrendingUp, color: 'blue' }
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+', icon: Code, color: 'blue' },
    { label: 'Years Experience', value: '5+', icon: Clock, color: 'blue' },
    { label: 'Happy Clients', value: '25+', icon: Users, color: 'blue' },
    { label: 'Awards Won', value: '8', icon: Award, color: 'blue' }
  ];

  const technologies = [
    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy',
    'SQL', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes',
    'React', 'Node.js', 'Flask', 'FastAPI', 'Git', 'Jupyter'
  ];

  const getSkillColorClasses = (color: string) => {
    return 'text-blue-600';
  };

  const getStatColorClasses = (color: string) => {
    return 'text-blue-600';
  };

  const getTechColorClasses = (color: string) => {
    return 'text-blue-600';
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float-3d transform-3d"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-100 rounded-full opacity-30 animate-float-delayed transform-3d"></div>
      </div>
      
      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-6 will-change-transform">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full animate-expand animation-delay-300"></div>
        </div>

        <div className="grid-responsive-2col items-start">
          {/* Left Column - Content */}
          <div className="space-responsive-y animate-slide-in-left animation-delay-400">
            <div className="space-responsive-y">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 will-change-transform">
                Data Scientist & ML Engineer
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed animate-fade-in-up animation-delay-600">
                I'm a passionate data scientist with over 5 years of experience in transforming complex data into actionable insights. 
                My expertise lies in building scalable machine learning solutions that drive real business value.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed animate-fade-in-up animation-delay-700">
                I specialize in predictive modeling, natural language processing, and computer vision applications. 
                My approach combines deep technical knowledge with strong business acumen to deliver solutions that matter.
              </p>
            </div>

            {/* Skills */}
            <div className="space-responsive-y animate-fade-in-up animation-delay-800">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900">Core Skills</h4>
              <div className="space-y-4 sm:space-y-6">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2 animate-slide-in-left will-change-transform"
                    style={{ animationDelay: `${900 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <skill.icon size={20} className={`${getSkillColorClasses(skill.color)} icon-interactive will-change-transform`} />
                        <span className="font-medium text-gray-700 text-sm sm:text-base">{skill.name}</span>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="progress-bar hover-scale-3d transform-3d">
                      <div 
                        className="progress-fill will-change-transform"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Technologies */}
          <div className="space-responsive-y animate-slide-in-right animation-delay-500">
            {/* Technologies */}
            <div className="space-responsive-y">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 text-center animate-fade-in-up animation-delay-600">
                Technologies I Work With
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <span 
                    key={tech}
                    className="tag-interactive hover-tilt transform-3d animate-scale-in will-change-transform"
                    style={{ animationDelay: `${700 + index * 50}ms` }}
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