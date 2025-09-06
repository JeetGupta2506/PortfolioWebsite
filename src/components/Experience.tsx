import { useState } from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
    const experiences = [
      {
        title: 'Technical Lead',
        company: 'Nexus Cell SVNIT',
        location: 'Surat, Gujarat, India',
        period: 'July 2025 – Present',
        description: 'Leading technical initiatives for Nexus Cell SVNIT, collaborating across campus cells for events and hackathons while mentoring juniors in full‑stack and AI/ML.',
        achievements: [
          'Collaborated with campus cells to plan and run events and hackathons',
          'Mentored junior members in full‑stack development and AI/ML',
          'Worked with senior developers to deliver new features and fix bugs on Nexus’s official website'
        ],
      },
      {
        title: 'AI ML Intern',
        company: 'Accenture',
        location: 'Remote',
        period: 'May 2025 – July 2025',
        description: 'Contributed to building AI chatbots and agents for a Bank of Baroda web application and integrated GenAI workflows into banking solutions.',
        achievements: [
          'Coordinated with the team to develop chatbots and agents for Bank of Baroda\'s web application',
          'Learned and applied GenAI frameworks: LangChain, LangGraph, MCP, CrewAI, and n8n',
          'Integrated generative AI workflows to streamline development of conversational agents'
        ],
        technologies: ['Python', 'LangChain', 'LangGraph', 'MCP', 'CrewAI', 'n8n', 'OpenAI']
      }
    ];

  const certifications = [
    {
      name: 'Fundamentals of AI Agents Using RAG and LangChain',
      issuer: 'IBM',
      year: '2024',
      url: 'https://coursera.org/share/523440f624ef9a5be5b217c877232ad0',
      image: '/certificates/rag-langchain.jpg'
    },
    {
      name: 'Machine Learning with Python',
      issuer: 'IBM',
      year: '2024',
      url: 'https://coursera.org/share/af8c43fc51a2d006d9ae7d0f65550e27',
      image: '/certificates/ml-python.jpg'
    }
  ];

  // LinkedIn link for use in social/profile links
  const linkedInUrl = 'https://www.linkedin.com/in/jeet-gupta-559099295';

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline with 3D effects */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-teal-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                <div className={`flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Timeline dot with 3D effects */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10 hover-lift transform-3d"></div>
                  
                  {/* Content with 3D card effects */}
                  <div className={`bg-white rounded-2xl shadow-lg p-8 ml-12 md:ml-0 ${
                    index % 2 === 0 
                      ? 'md:mr-8 md:ml-0 md:w-5/12' 
                      : 'md:ml-8 md:mr-0 md:w-5/12'
                  } hover:shadow-xl transition-all duration-300 hover-card-3d transform-3d`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                      </div>
                      <div className="p-2 bg-blue-50 rounded-lg hover-icon-3d transform-3d">
                        <Briefcase size={20} className="text-blue-600" />
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4 text-gray-600">
                      <div className="flex items-center space-x-1 hover-lift transform-3d">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover-lift transform-3d">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 hover-lift transform-3d">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium hover-tilt transform-3d cursor-pointer"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications with 3D effects */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover-card-3d transform-3d">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={`${cert.name} certificate`} 
                      className="w-full h-40 object-cover rounded-lg mb-4 border border-gray-200 cursor-zoom-in" 
                      onClick={() => setPreview({ src: cert.image as string, alt: `${cert.name} certificate` })}
                      role="button"
                      tabIndex={0}
                    />
                  ) : (
                    <Award size={32} className="text-blue-600 mx-auto mb-4 hover-icon-3d" />
                  )}
                  <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    {preview && (
      <div 
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
        onClick={() => setPreview(null)}
      >
        <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
          <img src={preview.src} alt={preview.alt} className="w-full h-auto rounded-lg shadow-2xl" />
          <div className="mt-3 text-center">
            <button 
              onClick={() => setPreview(null)}
              className="inline-flex items-center px-4 py-2 rounded-md bg-white text-gray-800 font-medium hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
    </section>
  );
};

export default Experience;