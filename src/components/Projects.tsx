import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ChevronRight, Brain, BarChart3, Eye, MessageSquare } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
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

  const projects = [
    {
      id: 1,
      title: 'Customer Churn Prediction Model',
      category: 'machine-learning',
      description: 'Built an ensemble model using Random Forest and XGBoost to predict customer churn with 94% accuracy, helping reduce customer attrition by 23%.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Flask'],
      icon: Brain,
      metrics: ['94% Accuracy', '23% Churn Reduction', '150K+ Customers'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Sales Forecasting Dashboard',
      category: 'visualization',
      description: 'Interactive dashboard for real-time sales forecasting using time series analysis and seasonal decomposition with Prophet model.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Prophet', 'Streamlit', 'Plotly', 'SQL'],
      icon: BarChart3,
      metrics: ['15% Better Accuracy', 'Real-time Updates', '12 Month Forecast'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Computer Vision Quality Control',
      category: 'computer-vision',
      description: 'Developed CNN-based system for automated quality control in manufacturing, reducing inspection time by 80% while improving accuracy.',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['TensorFlow', 'OpenCV', 'Python', 'Docker', 'AWS'],
      icon: Eye,
      metrics: ['99.2% Accuracy', '80% Time Reduction', '24/7 Monitoring'],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'NLP Sentiment Analysis API',
      category: 'nlp',
      description: 'REST API for multi-language sentiment analysis using transformer models, processing 10K+ reviews daily with real-time insights.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['BERT', 'FastAPI', 'Docker', 'MongoDB', 'Redis'],
      icon: MessageSquare,
      metrics: ['10K+ Daily Requests', '98% Accuracy', '15 Languages'],
      github: '#',
      demo: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'visualization', label: 'Data Visualization' },
    { id: 'computer-vision', label: 'Computer Vision' },
    { id: 'nlp', label: 'NLP' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 animate-expand"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing real-world data science projects that delivered measurable business impact
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg animate-pulse'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md shadow-sm'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 overflow-hidden group animate-slide-in-up" style={{ animationDelay: `${project.id * 200}ms` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <project.icon size={24} className="text-blue-600 group-hover:animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((metric, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-200 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:scale-105 transition-all duration-200 group"
                  >
                    <Github size={20} className="group-hover:animate-spin" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 hover:scale-105 transition-all duration-200 font-medium group"
                  >
                    <ExternalLink size={20} className="group-hover:animate-bounce" />
                    <span>Live Demo</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto group">
            <Github size={20} className="group-hover:animate-spin" />
            <span>View All Projects on GitHub</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;