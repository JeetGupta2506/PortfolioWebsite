import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - Replace with your actual values
      // Get these from: https://www.emailjs.com/
      const serviceId = 'service_ra0065b';
      const templateId = 'template_x9mgyyn';
      const publicKey = 'qUEVy2Vzy0TwDlO3U';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Jeet Gupta'
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in-up">
                <CheckCircle className="text-green-600" size={20} />
                <p className="text-green-800 text-sm">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 animate-fade-in-up">
                <AlertCircle className="text-red-600" size={20} />
                <p className="text-red-800 text-sm">Failed to send message. Please try again or email me directly.</p>
              </div>
            )}

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field text-sm sm:text-base"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field text-sm sm:text-base"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label text-sm sm:text-base">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field text-sm sm:text-base"
                  placeholder="What's this about?"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label text-sm sm:text-base">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field resize-none text-sm sm:text-base"
                  placeholder="Tell me more about your project..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center space-x-2 ripple hover-button-3d transform-3d disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} className="icon-interactive" />
                    <span>Send Message</span>
                  </>
                )}
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
                        <info.icon size={20} className="text-blue-600 icon-interactive" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{info.title}</h4>
                        <a
                          href={info.link}
                          className="text-blue-600 hover:underline transition-all duration-300 ripple text-sm sm:text-base hover-lift transform-3d"
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
                    <social.icon size={20} className="text-blue-600 icon-interactive" />
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