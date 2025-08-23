import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@example.com',
      link: 'mailto:hello@example.com',
      accentColor: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      accentColor: 'blue'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#',
      accentColor: 'blue'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: '#',
      accentColor: 'blue'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: '#',
      accentColor: 'blue'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: '#',
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-interactive p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="input-field"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell me more about your project..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2 ripple">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="card-interactive p-6 ripple"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <info.icon size={24} className={`${getIconColorClasses(info.accentColor)}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <a 
                          href={info.link}
                          className={`${getAccentColorClasses(info.accentColor)} hover:underline transition-colors ripple`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    className="social-link ripple"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <social.icon size={24} className={`${getSocialColorClasses(social.accentColor)}`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="card-interactive p-6 text-center ripple">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Ready to Start a Project?</h4>
              <p className="text-gray-600 mb-4">
                Let's discuss how I can help bring your ideas to life with data-driven solutions.
              </p>
              <button className="btn-secondary ripple">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;