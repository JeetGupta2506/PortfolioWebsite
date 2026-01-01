import { useState } from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
  const experiences = [
    {
      title: 'AI ML Intern',
      company: 'Accenture',
      logo: '/logos/accenture.png',
      location: 'Remote',
      period: 'May 2025 – July 2025',
      type: 'Internship',
      description: 'Contributed to building AI chatbots and agents for a Bank of Baroda web application and integrated GenAI workflows into banking solutions.',
      achievements: [
        'Coordinated with the team to develop chatbots and agents for Bank of Baroda\'s web application',
        'Learned and applied GenAI frameworks: LangChain, LangGraph, MCP, CrewAI, and n8n',
        'Integrated generative AI workflows to streamline development of conversational agents'
      ],
      technologies: ['Python', 'LangChain', 'LangGraph', 'MCP', 'CrewAI', 'n8n', 'OpenAI']
    },
    {
      title: 'Technical Lead',
      company: 'Nexus Cell SVNIT',
      logo: '/logos/nexus.png',
      location: 'Surat, Gujarat, India',
      period: 'July 2025 – Present',
      type: 'Campus Leadership',
      description: 'Leading technical initiatives for Nexus Cell SVNIT, collaborating across campus cells for events and hackathons while mentoring juniors in full‑stack and AI/ML.',
      achievements: [
        'Collaborated with campus cells to plan and run events and hackathons',
        'Mentored junior members in full-stack development and AI/ML',
        'Worked with senior developers to deliver new features and fix bugs on Nexus official website'
      ],
    },
    {
      title: 'AI/ML Lead',
      company: 'GDGC NIT Surat',
      logo: '/logos/gdgc.png',
      location: 'Surat, Gujarat, India',
      period: 'September 2025 – Present',
      type: 'Campus Leadership',
      description: 'Leading AI/ML initiatives at Google Developer Groups on Campus NIT Surat, organizing workshops, conducting sessions, and guiding students in machine learning and artificial intelligence.',
      achievements: [
        'Organized and conducted AI/ML workshops and technical sessions for students',
        'Mentored team members in machine learning, deep learning, and AI technologies',
        'Collaborated with Google Developer Student Clubs to promote AI/ML education on campus'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Fundamentals of AI Agents Using RAG and LangChain',
      issuer: 'IBM',
      url: 'https://coursera.org/share/523440f624ef9a5be5b217c877232ad0',
      image: '/certificates/rag-langchain.jpg'
    },
    {
      name: 'Machine Learning with Python',
      issuer: 'IBM',
      url: 'https://coursera.org/share/af8c43fc51a2d006d9ae7d0f65550e27',
      image: '/certificates/ml-python.jpg'
    }
  ];

  // LinkedIn link for use in social/profile links
  const linkedInUrl = 'https://www.linkedin.com/in/jeet-gupta-559099295';

  return (
    <section id="experience" className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-36 h-36 bg-blue-50 rounded-full opacity-30 animate-float-3d transform-3d"></div>
        <div className="absolute bottom-1/4 right-10 w-28 h-28 bg-teal-50 rounded-full opacity-40 animate-float-delayed transform-3d"></div>
      </div>

      <div className="container-responsive relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-6 will-change-transform">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 animate-expand animation-delay-300"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline with 3D effects */}
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-teal-600 timeline-line"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-8 sm:mb-12 lg:mb-16">
                <div className={`flex flex-col lg:flex-row lg:items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}>
                  {/* Timeline dot with 3D effects */}
                  <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10 timeline-dot"></div>

                  {/* Content with 3D card effects */}
                  <div className={`bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 ml-12 lg:ml-0 animate-slide-in-${index % 2 === 0 ? 'right' : 'left'} will-change-transform ${index % 2 === 0
                    ? 'lg:mr-8 lg:ml-0 lg:w-5/12'
                    : 'lg:ml-8 lg:mr-0 lg:w-5/12'
                    } hover:shadow-2xl transition-all duration-500 hover-card-3d transform-3d`}
                    style={{ animationDelay: `${400 + index * 200}ms` }}>

                    {/* Header with Logo and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        {exp.logo ? (
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-lg shadow-md border border-gray-200 bg-white p-1"
                          />
                        ) : (
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md">
                            <Briefcase size={24} className="text-white" />
                          </div>
                        )}
                      </div>

                      {/* Title and Company */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900">{exp.title}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${exp.type === 'Internship'
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-emerald-100 text-emerald-700'
                            }`}>
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-base sm:text-lg text-blue-600 font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 text-gray-600 space-y-1 sm:space-y-0">
                      <div className="flex items-center space-x-1 hover-lift transform-3d">
                        <Calendar size={14} />
                        <span className="text-xs sm:text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover-lift transform-3d">
                        <MapPin size={14} />
                        <span className="text-xs sm:text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 hover-lift transform-3d transition-all duration-300">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium hover-tilt transform-3d cursor-pointer transition-all duration-300"
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
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="text-center mb-8 sm:mb-12 animate-fade-in-up animation-delay-800">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 will-change-transform">Certifications</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto animate-expand animation-delay-900"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 p-4 sm:p-6 rounded-xl text-center hover:shadow-xl transition-all duration-500 hover-card-3d transform-3d animate-scale-in will-change-transform"
                  style={{ animationDelay: `${1000 + index * 150}ms` }}
                >
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={`${cert.name} certificate`}
                      className="w-full h-32 sm:h-40 object-cover rounded-lg mb-4 border border-gray-200 cursor-zoom-in hover:scale-105 transition-transform duration-300 will-change-transform"
                      onClick={() => setPreview({ src: cert.image as string, alt: `${cert.name} certificate` })}
                      role="button"
                      tabIndex={0}
                    />
                  ) : (
                    <Award size={28} className="text-blue-600 mx-auto mb-4 hover-icon-3d icon-interactive" />
                  )}
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{cert.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in backdrop-blur-sm"
          onClick={() => setPreview(null)}
        >
          <div className="max-w-4xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img src={preview.src} alt={preview.alt} className="w-full h-auto rounded-lg shadow-2xl hover-lift transform-3d" />
            <div className="mt-4 text-center">
              <button
                onClick={() => setPreview(null)}
                className="inline-flex items-center px-4 py-2 rounded-md bg-white text-gray-800 font-medium hover:bg-gray-100 transition-all duration-300 hover-button-3d transform-3d ripple"
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