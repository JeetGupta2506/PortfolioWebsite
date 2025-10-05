import React from 'react';
import { Code, Database, Brain, BarChart3, TrendingUp, Layers, Globe, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 90 },
        { name: 'Deep Learning', level: 82 },
        { name: 'NLP', level: 85 },
        { name: 'Computer Vision', level: 80 }
      ]
    },
    {
      category: 'Programming & Frameworks',
      icon: Code,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 82 },
        { name: 'Scikit-learn', level: 90 }
      ]
    },
    {
      category: 'Data & Analytics',
      icon: BarChart3,
      skills: [
        { name: 'Data Analysis', level: 88 },
        { name: 'Statistical Modeling', level: 80 },
        { name: 'Pandas & NumPy', level: 92 },
        { name: 'Data Visualization', level: 85 }
      ]
    },
    {
      category: 'Databases & Cloud',
      icon: Database,
      skills: [
        { name: 'SQL & Databases', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 78 },
        { name: 'AWS', level: 75 }
      ]
    },
    {
      category: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'React', level: 88 },
        { name: 'Node.js', level: 80 },
        { name: 'FastAPI', level: 85 },
        { name: 'Flask', level: 82 }
      ]
    },
    {
      category: 'Tools & DevOps',
      icon: GitBranch,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 70 },
        { name: 'Jupyter', level: 92 }
      ]
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

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-700 text-sm">{skill.name}</span>
                      <span className="text-xs font-semibold text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="progress-bar hover-scale-3d transform-3d">
                      <div
                        className="progress-fill will-change-transform"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${500 + catIndex * 100 + skillIndex * 50}ms`
                        }}
                      ></div>
                    </div>
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
