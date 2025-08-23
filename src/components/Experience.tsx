import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Data Scientist',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading a team of 5 data scientists in developing ML solutions for e-commerce optimization. Built recommendation systems serving 2M+ users daily.',
      achievements: [
        'Increased conversion rates by 28% through personalization algorithms',
        'Led migration to cloud-based ML pipeline, reducing costs by 40%',
        'Mentored junior team members and established best practices'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'Kubernetes', 'MLOps']
    },
    {
      title: 'Data Scientist',
      company: 'StartupX',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Developed end-to-end ML solutions for fintech applications, focusing on fraud detection and risk assessment models.',
      achievements: [
        'Built fraud detection system with 99.5% accuracy, saving $2M annually',
        'Implemented real-time model serving infrastructure',
        'Created automated model monitoring and retraining pipelines'
      ],
      technologies: ['Python', 'Scikit-learn', 'Docker', 'PostgreSQL', 'FastAPI']
    },
    {
      title: 'Junior Data Analyst',
      company: 'Analytics Pro',
      location: 'New York, NY',
      period: '2019 - 2020',
      description: 'Performed statistical analysis and created visualizations for clients across various industries including healthcare and retail.',
      achievements: [
        'Delivered 20+ analytical reports leading to strategic decisions',
        'Automated reporting processes, reducing manual work by 60%',
        'Collaborated with cross-functional teams on data-driven initiatives'
      ],
      technologies: ['R', 'SQL', 'Tableau', 'Excel', 'SPSS']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Machine Learning - Specialty',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      name: 'Professional Data Scientist',
      issuer: 'DataCamp',
      year: '2022'
    },
    {
      name: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      year: '2021'
    }
  ];

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
                  <Award size={32} className="text-blue-600 mx-auto mb-4 hover-icon-3d" />
                  <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover-lift transform-3d">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;