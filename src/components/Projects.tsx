import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  // categories removed to simplify project listing

  const projects = [
    {
      id: 1,
      title: 'MLXplore — Interactive ML Experimentation Platform',
      description: 'Full-stack platform to explore, train, and visualize machine learning models (classification, regression, clustering). Features dataset preview, interactive algorithm playgrounds, model training, visualization of results, and hyperparameter tuning.',
      image: '/MLXplore.png',
      technologies: ['React', 'Material-UI', 'TypeScript', 'FastAPI', 'Python', 'scikit-learn', 'pandas'],
      github: 'https://github.com/JeetGupta2506/MLXplore',
      live: 'https://ml-xplore-omega.vercel.app/',
      accentColor: 'blue'
    },
    {
      id: 2,
      title: 'Movie Recommendation System (Bollywood)',
      description: 'A movie recommendation system built with Streamlit. I web-scraped a custom Bollywood movies dataset and implemented collaborative & content-based recommendation techniques with interactive filtering in the UI.',
  image: '/MovieRecommendation.png',
      technologies: ['Python', 'Streamlit', 'BeautifulSoup', 'scikit-learn', 'pandas'],
  github: 'https://github.com/JeetGupta2506/Movie-Recommendation-System',
  live: 'https://movierecommendationbollywood.streamlit.app/',
      accentColor: 'blue'
    },
    {
      id: 3,
      title: 'Customer Segmentation Model',
      description: 'Implemented clustering algorithms to segment customers for targeted marketing campaigns.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Plotly', 'Jupyter'],
      github: '#',
      live: '#',
      accentColor: 'blue'
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      description: 'Built a scalable chat application with real-time messaging, file sharing, and user authentication.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Node.js', 'Socket.io', 'Firebase', 'Redux'],
      github: '#',
      live: '#',
      accentColor: 'blue'
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null as any);
  const filteredProjects = projects;

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

        {/* Category filter removed - showing all projects */}

        {/* Projects Grid */}
        <div className="grid-responsive-cards mb-8 sm:mb-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="card-interactive group ripple hover-card-3d transform-3d animate-scale-in will-change-transform cursor-pointer"
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
                  <a href={project.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 rounded-lg hover:bg-white transition-all duration-300 ripple hover-lift transform-3d">
                    <Github size={16} className="text-gray-700 icon-interactive" />
                  </a>
                  <a href={project.live} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 rounded-lg hover:bg-white transition-all duration-300 ripple hover-lift transform-3d">
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
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tag-interactive hover-tilt transform-3d text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-2 sm:space-x-3">
                  <a 
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-1 sm:space-x-2 py-2 px-3 sm:px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 link-interactive hover-button-3d transform-3d text-sm"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank" rel="noopener noreferrer"
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

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}

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