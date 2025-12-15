import { useState, useEffect } from 'react';
import { Code, Database, Brain, BarChart3, Globe, GitBranch } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 90 },
        { name: 'Deep Learning', level: 85 },
        { name: 'NLP', level: 80 },
        { name: 'Computer Vision', level: 75 }
      ]
    },
    {
      category: 'Programming & Frameworks',
      icon: Code,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 90 }
      ]
    },
    {
      category: 'Data & Analytics',
      icon: BarChart3,
      skills: [
        { name: 'Data Analysis', level: 90 },
        { name: 'Statistical Modeling', level: 85 },
        { name: 'Pandas & NumPy', level: 95 },
        { name: 'Data Visualization', level: 85 }
      ]
    },
    {
      category: 'Databases & Cloud',
      icon: Database,
      skills: [
        { name: 'SQL & Databases', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'AWS', level: 70 }
      ]
    },
    {
      category: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'FastAPI', level: 80 },
        { name: 'Flask', level: 85 }
      ]
    },
    {
      category: 'Tools & DevOps',
      icon: GitBranch,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 65 },
        { name: 'Jupyter', level: 95 }
      ]
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm text-gray-700">{skill.name}</span>
                      <span className="text-xs font-semibold text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-teal-600 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${catIndex * 100 + skillIndex * 50}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
