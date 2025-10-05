import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'guptajeet2506@gmail.com',
      link: 'mailto:guptajeet2506@gmail.com',
      accentColor: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7984060375',
      link: 'tel:+917984060375',
      accentColor: 'blue'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Ahmedabad, India',
      link: '#',
      accentColor: 'blue'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/JeetGupta2506',
      accentColor: 'blue'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jeet-gupta-559099295',
      accentColor: 'blue'
    }
  ];

  const getAccentColorClasses = (accentColor: string) => {
    return 'text-blue-600';
  };

  const getIconColorClasses = (accentColor: string) => {
    return 'text-blue-600';
  };

  const getSocialColorClasses = (accentColor: string) => {
    return 'text-blue-600';
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float-3d transform-3d"></div>
        <div className="absolute bottom-1/3 left-20 w-24 h-24 bg-teal-100 rounded-full opacity-30 animate-float-delayed transform-3d"></div>
      </div>
      
      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-6 will-change-transform">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full animate-expand animation-delay-300"></div>
        </div>

        <div className="grid-responsive-2col">
          {/* Contact Form */}
          <div className="card-interactive p-6 sm:p-8 animate-slide-in-left animation-delay-400 hover-card-3d transform-3d">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 will-change-transform">Send a Message</h3>
            <form className="space-y-4 sm:space-y-6">
              {/* ...existing code... */}
              <div className="form-group">
                <label htmlFor="name" className="form-label texīt-sm sm:text-base">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field text-sm sm:text-base"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field text-sm sm:text-base"
                  placeholder="guptajeet2506@gmail.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label text-sm sm:text-base">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="input-field text-sm sm:text-base"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label text-sm sm:text-base">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="input-field resize-none text-sm sm:text-base"
                  placeholder="Tell me more about your project..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2 ripple hover-button-3d transform-3d">
                <Send size={18} className="icon-interactive" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information & Social Links stacked vertically */}
          <div className="flex flex-col space-y-6 sm:space-y-8 justify-center animate-slide-in-right animation-delay-500">
            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 will-change-transform">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="card-interactive p-4 sm:p-6 ripple hover-card-3d transform-3d animate-scale-in will-change-transform"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 sm:p-3 bg-blue-100 rounded-full hover-icon-3d transform-3d">
                        <info.icon size={20} className={`${getIconColorClasses(info.accentColor)} icon-interactive`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{info.title}</h4>
                        <a 
                          href={info.link}
                          className={`${getAccentColorClasses(info.accentColor)} hover:underline transition-all duration-300 ripple text-sm sm:text-base hover-lift transform-3d`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links centered below contact info */}
            <div className="space-y-4 flex flex-col items-center animate-fade-in-up animation-delay-900">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 will-change-transform">Follow Me</h4>
              <div className="flex space-x-3 sm:space-x-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    className="social-link ripple hover-lift transform-3d animate-bounce-in will-change-transform"
                    style={{ animationDelay: `${1000 + index * 100}ms` }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={20} className={`${getSocialColorClasses(social.accentColor)} icon-interactive`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;