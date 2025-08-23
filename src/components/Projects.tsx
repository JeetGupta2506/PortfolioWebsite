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
      title: 'Predictive Analytics Platform',
      description: 'Built a comprehensive ML platform for business forecasting using Python, TensorFlow, and AWS.',
      image: '/api/placeholder/400/250',
      category: 'ml',
      technologies: ['Python', 'TensorFlow', 'AWS', 'React', 'PostgreSQL'],
      github: '#',
      live: '#',
      metrics: {
        accuracy: '94.2%',
        users: '2.5K+',
        stars: '156'
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
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${getCategoryColorClasses(category.color)} ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-transparent'
              } ripple`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="card-interactive group ripple"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a href={project.github} className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors ripple">
                    <Github size={18} className="text-gray-700" />
                  </a>
                  <a href={project.live} className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors ripple">
                    <ExternalLink size={18} className="text-gray-700" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="tag-interactive"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        {key === 'accuracy' && <TrendingUp size={16} className={`${getMetricColorClasses(key)}`} />}
                        {key === 'users' && <Users size={16} className={`${getMetricColorClasses(key)}`} />}
                        {key === 'stars' && <Star size={16} className={`${getMetricColorClasses(key)}`} />}
                        {key === 'performance' && <TrendingUp size={16} className={`${getMetricColorClasses(key)}`} />}
                        {key === 'conversion' && <TrendingUp size={16} className={`${getMetricColorClasses(key)}`} />}
                        {key === 'clusters' && <Code size={16} className={`${getMetricColorClasses(key)}`} />}
                        {key === 'roi' && <TrendingUp size={16} className={`${getMetricColorClasses(key)}`} />}
                        {key === 'messages' && <Code size={16} className={`${getMetricColorClasses(key)}`} />}
                        {key === 'uptime' && <TrendingUp size={16} className={`${getMetricColorClasses(key)}`} />}
                      </div>
                      <div className={`text-sm font-semibold ${getMetricColorClasses(key)}`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a 
                    href={project.github}
                    className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors link-interactive"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors link-interactive"
                  >
                    <Eye size={16} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button className="btn-primary ripple">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;