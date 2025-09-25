import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'aishwaryashankar79@gmail.com',
      link: 'mailto:aishwaryashankar79@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 9884749437',
      link: 'tel:+919884749437',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Chengalpattu, Tamil Nadu',
      link: '#',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              I’m always open to discussing new opportunities, collaborations, or
              even just having a chat about technology.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white mr-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {info.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
