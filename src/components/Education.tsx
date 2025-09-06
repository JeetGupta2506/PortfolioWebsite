import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Trophy } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Artificial Intelligence',
      institution: 'National Institute of Technology (NIT) Surat',
      location: 'Surat, Gujarat, India',
      period: '2022 - 2026',
      currentYear: 'Third Year',
      gpa: '8.5/10.0',
      status: 'Currently Pursuing',
      description: 'Specializing in machine learning, deep learning, computer vision, and natural language processing with strong foundations in mathematics and programming.',
      coursework: [
        'Machine Learning & Deep Learning',
        'Computer Vision & Image Processing',
        'Natural Language Processing',
        'Data Structures & Algorithms',
        'Statistics & Probability',
        'Linear Algebra & Calculus',
        'Database Management Systems',
        'Software Engineering'
      ],
      projects: [
        'Developed a CNN-based image classification system with 94% accuracy',
        'Built an NLP chatbot using transformer architecture',
        'Created a recommendation system for e-commerce platform',
        'Implemented various ML algorithms from scratch in Python'
      ],
      achievements: [
        'Dean\'s List for Academic Excellence (2023-24)',
        'Winner of Inter-NIT AI/ML Hackathon 2024',
        'Published research paper on Computer Vision applications',
        'Active member of AI/ML Club and Coding Society'
      ],
      skills: [
        'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV',
        'Pandas', 'NumPy', 'Matplotlib', 'SQL', 'Git', 'Docker'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Machine Learning Specialization',
      provider: 'Stanford University (Coursera)',
      year: '2024',
      icon: Award
    },
    {
      name: 'Deep Learning Specialization',
      provider: 'DeepLearning.AI',
      year: '2023',
      icon: BookOpen
    },
    {
      name: 'Python for Data Science',
      provider: 'IBM',
      year: '2023',
      icon: Trophy
    }
  ];

  const activities = [
    {
      title: 'AI/ML Club',
      role: 'Core Member',
      description: 'Organizing workshops and seminars on latest AI trends',
      icon: Users
    },
    {
      title: 'Coding Society',
      role: 'Active Member',
      description: 'Participating in competitive programming contests',
      icon: BookOpen
    },
    {
      title: 'Research Assistant',
      role: 'Undergraduate Researcher',
      description: 'Working on computer vision projects under faculty guidance',
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Education Card */}
          {education.map((edu, index) => (
            <div key={index} className="card-interactive p-8 mb-12 hover-card-3d transform-3d">
              <div className="space-y-6">
                {/* Left Column - Main Info */}
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-3 bg-blue-100 rounded-full hover-icon-3d transform-3d">
                          <GraduationCap size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                          <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                        <div className="flex items-center space-x-1 hover-lift transform-3d">
                          <Calendar size={16} />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover-lift transform-3d">
                          <MapPin size={16} />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium hover-tilt transform-3d">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>

                  {/* Academic Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                        <BookOpen size={18} className="text-blue-600" />
                        <span>Current Status</span>
                      </h4>
                      <div className="space-y-2">
                        <p className="text-gray-600">Year: <span className="font-medium text-gray-900">{edu.currentYear}</span></p>
                        <p className="text-gray-600">CGPA: <span className="font-medium text-blue-600">{edu.gpa}</span></p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                        <Trophy size={18} className="text-blue-600" />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.slice(0, 2).map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 hover-lift transform-3d">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column - Skills & Quick Stats */}
              </div>

              {/* Expandable Sections */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                {/* Coursework */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 text-lg">Relevant Coursework</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <div 
                        key={courseIndex}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors hover-lift transform-3d"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 text-lg">Academic Projects</h4>
                  <div className="space-y-3">
                    {edu.projects.map((project, projectIndex) => (
                      <div 
                        key={projectIndex}
                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors hover-lift transform-3d"
                      >
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Additional Sections */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="card-interactive p-6 hover-card-3d transform-3d"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-full hover-icon-3d transform-3d">
                        <cert.icon size={20} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{cert.name}</h4>
                        <p className="text-gray-600 text-sm mb-2">{cert.provider}</p>
                        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs hover-lift transform-3d">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Activities & Leadership</h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div 
                    key={index}
                    className="card-interactive p-6 hover-card-3d transform-3d"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-teal-100 rounded-full hover-icon-3d transform-3d">
                        <activity.icon size={20} className="text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{activity.title}</h4>
                        <p className="text-teal-600 text-sm font-medium mb-2">{activity.role}</p>
                        <p className="text-gray-600 text-sm">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;