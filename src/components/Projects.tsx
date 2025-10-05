import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, TrendingUp, Users, Star } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', color: 'blue' },
    { id: 'ml', name: 'Machine Learning', color: 'blue' },
    { id: 'web', name: 'Web Development', color: 'blue' },
    { id: 'data', name: 'Data Analysis', color: 'blue' },
    { id: 'mobile', name: 'Mobile Apps', color: 'blue' }
  ];

  const projects = [
    {
      id: 1,
      title: 'MLXplore — Interactive ML Experimentation Platform',
      description: 'Full-stack platform to explore, train, and visualize machine learning models (classification, regression, clustering). Features dataset preview, interactive algorithm playgrounds, model training, visualization of results, and hyperparameter tuning.',
  image: '/MLXplore.png',
      category: 'ml',
      technologies: ['React', 'Material-UI', 'TypeScript', 'FastAPI', 'Python', 'scikit-learn', 'pandas'],
      github: 'https://github.com/JeetGupta2506/MLXplore',
      live: 'https://ml-xplore-omega.vercel.app/',
      metrics: {
        demos: '20+',
        users: '4K+',
        stars: '180'
      },
      accentColor: 'blue'
    },
    {
      id: 2,
      title: 'E-commerce Analytics Dashboard',
      description: 'Developed a real-time analytics dashboard for e-commerce businesses with interactive visualizations.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React', 'Node.js', 'D3.js', 'MongoDB', 'Socket.io'],
      github: '#',
      live: '#',
      metrics: {
        performance: '98.5%',
        users: '15K+',
        conversion: '+23%'
      },
      accentColor: 'blue'
    },
    {
      id: 3,
      title: 'Customer Segmentation Model',
      description: 'Implemented clustering algorithms to segment customers for targeted marketing campaigns.',
      image: '/api/placeholder/400/250',
      category: 'data',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Plotly', 'Jupyter'],
      github: '#',
      live: '#',
      metrics: {
        clusters: '8',
        accuracy: '89.7%',
        roi: '+45%'
      },
      accentColor: 'blue'
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      description: 'Built a scalable chat application with real-time messaging, file sharing, and user authentication.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React Native', 'Node.js', 'Socket.io', 'Firebase', 'Redux'],
      github: '#',
      live: '#',
      metrics: {
        users: '8.2K+',
        messages: '2.1M+',
        uptime: '99.9%'
      },
      accentColor: 'blue'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryColorClasses = (color: string) => {
    return 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white';
  };

  const getAccentColorClasses = (accentColor: string) => {
    return 'text-blue-600';
  };

  const getMetricColorClasses = (metricType: string) => {
    return 'text-blue-600';
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-20 w-40 h-40 bg-teal-100 rounded-full opacity-20 animate-float-3d transform-3d"></div>
        <div className="absolute bottom-1/3 left-20 w-28 h-28 bg-blue-100 rounded-full opacity-25 animate-float-delayed transform-3d"></div>
      </div>
      
      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-6 will-change-transform">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full animate-expand animation-delay-300"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up animation-delay-400">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-500 border-2 transform-3d hover-button-3d will-change-transform ${getCategoryColorClasses(category.color)} ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white shadow-xl scale-105' 
                  : 'bg-transparent'
              } ripple`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-responsive-cards mb-8 sm:mb-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="card-interactive group ripple hover-card-3d transform-3d animate-scale-in will-change-transform"
              style={{ animationDelay: `${500 + index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-125 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Action Buttons */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <a href={project.github} className="p-2 bg-white/90 rounded-lg hover:bg-white transition-all duration-300 ripple hover-lift transform-3d">
                    <Github size={16} className="text-gray-700 icon-interactive" />
                  </a>
                  <a href={project.live} className="p-2 bg-white/90 rounded-lg hover:bg-white transition-all duration-300 ripple hover-lift transform-3d">
                    <ExternalLink size={16} className="text-gray-700 icon-interactive" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 will-change-transform">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="tag-interactive hover-tilt transform-3d text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center hover-lift transform-3d transition-all duration-300">
                      <div className="flex items-center justify-center mb-1">
                        {key === 'accuracy' && <TrendingUp size={14} className={`${getMetricColorClasses(key)} icon-interactive`} />}
                        {key === 'users' && <Users size={14} className={`${getMetricColorClasses(key)} icon-interactive`} />}
                        {key === 'stars' && <Star size={14} className={`${getMetricColorClasses(key)} icon-interactive`} />}
                        {key === 'performance' && <TrendingUp size={14} className={`${getMetricColorClasses(key)} icon-interactive`} />}
                        {key === 'conversion' && <TrendingUp size={14} className={`${getMetricColorClasses(key)} icon-interactive`} />}
                        {key === 'clusters' && <Code size={14} className={`${getMetricColorClasses(key)} icon-interactive`} />}
                        {key === 'roi' && <TrendingUp size={14} className={`${getMetricColorClasses(key)} icon-interactive`} />}
                        {key === 'messages' && <Code size={14} className={`${getMetricColorClasses(key)} icon-interactive`} />}
                        {key === 'uptime' && <TrendingUp size={14} className={`${getMetricColorClasses(key)} icon-interactive`} />}
                      </div>
                      <div className={`text-xs sm:text-sm font-semibold ${getMetricColorClasses(key)}`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-2 sm:space-x-3">
                  <a 
                    href={project.github}
                    className="flex-1 flex items-center justify-center space-x-1 sm:space-x-2 py-2 px-3 sm:px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 link-interactive hover-button-3d transform-3d text-sm"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    className="flex-1 flex items-center justify-center space-x-1 sm:space-x-2 py-2 px-3 sm:px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 link-interactive hover-button-3d transform-3d text-sm"
                  >
                    <Eye size={14} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center animate-fade-in-up animation-delay-1000">
          <button className="btn-primary ripple hover-button-3d transform-3d">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;