import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const education: Array<{
    degree: string;
    institution: string;
    location: string;
    period: string;
    status: string;
    gpa: string;
    currentYear?: string;
    description?: string;
    board?: string;
    skills?: string[];
  }> = [
    {
      degree: 'Bachelor of Technology in Artificial Intelligence',
      institution: 'National Institute of Technology (NIT) Surat',
      location: 'Surat, Gujarat, India',
      period: '2022 - 2026',
      currentYear: 'Third Year',
  gpa: '7.66/10.0',
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
      board: 'CBSE',
      description: 'Science stream with focus on Mathematics, Physics, and Chemistry.',
      gpa: '87%'
    },
    {
      degree: 'Secondary Education (Class X)',
      institution: 'Zydus School for Excellence',
      location: 'Ahmedabad, Gujarat, India',
      period: '2019 - 2020',
      status: 'Completed',
      board: 'ICSE',
      description: 'Completed foundational education with emphasis on core subjects.',
      gpa: '97%'

    }
  ];

  

  

  return (
    <section id="education" className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-20 w-32 h-32 bg-blue-50 rounded-full opacity-40 animate-float-3d transform-3d"></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-teal-50 rounded-full opacity-50 animate-float-delayed transform-3d"></div>
      </div>
      
      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-6 will-change-transform">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full animate-expand animation-delay-300"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Education Card */}
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="card-interactive p-6 sm:p-8 mb-8 sm:mb-12 hover-card-3d transform-3d animate-scale-in will-change-transform"
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <div className="space-responsive-y">
                {/* Left Column - Main Info */}
                <div className="space-responsive-y">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3 sm:mb-2">
                        <div className="p-2 sm:p-3 bg-blue-100 rounded-full hover-icon-3d transform-3d">
                          <GraduationCap size={20} className="text-blue-600 icon-interactive" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 will-change-transform">{edu.degree}</h3>
                          <p className="text-base sm:text-lg text-blue-600 font-semibold">{edu.institution}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 text-gray-600">
                        <div className="flex items-center space-x-1 hover-lift transform-3d">
                          <Calendar size={14} />
                          <span className="text-xs sm:text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover-lift transform-3d">
                          <MapPin size={14} />
                          <span className="text-xs sm:text-sm">{edu.location}</span>
                        </div>
                        {edu.board && (
                          <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover-tilt transform-3d transition-all duration-300">
                            {edu.board}
                          </span>
                        )}
                        <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover-tilt transform-3d transition-all duration-300">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {edu.currentYear && (
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed animate-fade-in-up animation-delay-600">{edu.description}</p>
                  )}

                  {/* Academic Details */}
                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    <div className="space-y-2 sm:space-y-3 animate-fade-in-up animation-delay-700">
                      {edu.currentYear && (
                        <h4 className="font-semibold text-gray-900 flex items-center space-x-2 text-sm sm:text-base">
                          <BookOpen size={16} className="text-blue-600 icon-interactive" />
                          <span>Current Status</span>
                        </h4>
                      )}
                      <div className="space-y-1 sm:space-y-2">
                        {edu.currentYear && (
                          <p className="text-sm sm:text-base text-gray-600">Year: <span className="font-medium text-gray-900">{edu.currentYear}</span></p>
                        )}
                        <p className="text-sm sm:text-base text-gray-600">CGPA: <span className="font-medium text-blue-600 hover-lift transform-3d transition-all duration-300">{edu.gpa}</span></p>
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