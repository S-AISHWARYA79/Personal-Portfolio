import React from 'react';
import { User, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { icon: <User size={20} />, label: 'Name', value: 'Aishwarya S' },
    { icon: <Calendar size={20} />, label: 'Age', value: '20 Years' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Chengalpattu, Tamil Nadu' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+91 9884749437' },
    { icon: <Mail size={20} />, label: 'Email', value: 'aishwaryashankar79@gmail.com' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image and Stats */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center text-6xl font-bold text-blue-600 dark:text-blue-400 shadow-2xl">
                  AS
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  👋
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years of Study</div>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2+</div>
                  <div className="text-gray-600 dark:text-gray-400">Certifications</div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Profile
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  I am looking to work in a growth-oriented organization that offers challenging 
                  opportunities to enhance my professional and technical knowledge. I aim to gain 
                  my skills in programming and problem-solving to contribute to the success of 
                  the team and organization.
                </p>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Personal Information
                </h3>
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300">
                      <div className="text-blue-600 dark:text-blue-400">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{info.label}:</span>
                        <span className="ml-2 font-semibold text-gray-800 dark:text-white">{info.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Languages
                </h3>
                <div className="flex space-x-4">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium">
                    English
                  </span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full font-medium">
                    Tamil
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;