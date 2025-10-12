import React from 'react';
import { Code, Database, Brain, BarChart3, TrendingUp, Layers, Globe, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
    },
    {
      category: 'Programming & Frameworks',
      icon: Code,
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn']
    },
    {
      category: 'Data & Analytics',
      icon: BarChart3,
      skills: ['Data Analysis', 'Statistical Modeling', 'Pandas & NumPy', 'Data Visualization']
    },
    {
      category: 'Databases & Cloud',
      icon: Database,
      skills: ['SQL & Databases', 'PostgreSQL', 'MongoDB', 'AWS']
    },
    {
      category: 'Web Development',
      icon: Globe,
      skills: ['React', 'Node.js', 'FastAPI', 'Flask']
    },
    {
      category: 'Tools & DevOps',
      icon: GitBranch,
      skills: ['Git', 'Docker', 'Kubernetes', 'Jupyter']
    }
  ];

  const technologies = [
    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy',
    'LangChain', 'LangGraph', 'OpenAI', 'Hugging Face',
    'SQL', 'PostgreSQL', 'MongoDB', 'Redis',
    'AWS', 'Google Cloud', 'Docker', 'Kubernetes',
    'React', 'Node.js', 'Flask', 'FastAPI',
    'Git', 'Jupyter', 'MLflow', 'DVC'
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-white via-blue-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 animate-float-3d transform-3d"></div>
        <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-teal-100 rounded-full opacity-30 animate-float-delayed transform-3d"></div>
      </div>

      <div className="container-responsive relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-6 will-change-transform">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 animate-expand animation-delay-300"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 hover-card-3d transform-3d animate-scale-in"
              style={{ animationDelay: `${400 + catIndex * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl hover-icon-3d transform-3d">
                  <category.icon size={24} className="text-blue-600 icon-interactive" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full"></div>
                    <span className="font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-fade-in-up animation-delay-800">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="tag-interactive hover-tilt transform-3d animate-scale-in"
                style={{ animationDelay: `${900 + index * 30}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
