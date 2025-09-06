import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

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
      skills: [
        'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV',
        'Pandas', 'NumPy', 'Matplotlib', 'SQL', 'Git', 'Docker'
      ]
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'Satyameva Jayate International School',
      location: 'Ahmedabad, Gujarat, India',
      period: '2022 - 2023',
      status: 'Completed',
      description: 'Science stream with focus on Mathematics, Physics, and Chemistry.',
      gpa: '87%'
    },
    {
      degree: 'Secondary Education (Class X)',
      institution: 'Zydus School for Excellence',
      location: 'Ahmedabad, Gujarat, India',
      period: '2019 - 2020',
      status: 'Completed',
      description: 'Completed foundational education with emphasis on core subjects.',
      gpa: '97%'
      
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

                  {edu.currentYear && (
                    <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                  )}

                  {/* Academic Details */}
                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="space-y-3">
                      {edu.currentYear && (
                        <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                          <BookOpen size={18} className="text-blue-600" />
                          <span>Current Status</span>
                        </h4>
                      )}
                      <div className="space-y-2">
                        {edu.currentYear && (
                          <p className="text-gray-600">Year: <span className="font-medium text-gray-900">{edu.currentYear}</span></p>
                        )}
                        <p className="text-gray-600">CGPA: <span className="font-medium text-blue-600">{edu.gpa}</span></p>
                      </div>
                    </div>

                    
                  </div>
                </div>

                {/* Right Column - Skills & Quick Stats */}
              </div>

              
            </div>
          ))}

          
        </div>
      </div>
    </section>
  );
};

export default Education;