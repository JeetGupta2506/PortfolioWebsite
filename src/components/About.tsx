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
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Data Scientist & ML Engineer
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate data scientist with over 5 years of experience in transforming complex data into actionable insights. 
                My expertise lies in building scalable machine learning solutions that drive real business value.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in predictive modeling, natural language processing, and computer vision applications. 
                My approach combines deep technical knowledge with strong business acumen to deliver solutions that matter.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Core Skills</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <skill.icon size={20} className={`${getSkillColorClasses(skill.color)}`} />
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Technologies */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 text-center">Technologies I Work With</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <span 
                    key={tech}
                    className="tag-interactive"
                    style={{ animationDelay: `${index * 50}ms` }}
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