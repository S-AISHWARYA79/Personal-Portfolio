import React from 'react';
import { Calendar, ExternalLink, Download, Users } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Advanced Python',
      issuer: 'Online Certification Platform',
      date: '2024',
      type: 'Certification',
      category: 'Programming',
      description: 'Advanced concepts in Python programming including data structures, algorithms, and object-oriented programming.',
      skills: ['Python', 'OOP', 'Data Structures', 'Algorithms'],
      icon: '🐍',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Java Programming',
      issuer: 'Technical Institute',
      date: '2024',
      type: 'Certification',
      category: 'Programming',
      description: 'Comprehensive Java programming course covering core concepts and application development.',
      skills: ['Core Java', 'OOP', 'Springboot Framework', 'JSP'],
      icon: '☕',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Python Workshop',
      issuer: 'Educational Institution',
      date: '2023',
      type: 'Workshop',
      category: 'Programming',
      description: 'Hands-on workshop focusing on Python basics and practical application development with python.',
      skills: ['Python Basics', 'Web Scraping', 'Data Analysis'],
      icon: '🔧',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Certification':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      case 'Workshop':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications & Workshops
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Continuous learning journey through certifications and professional development
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-200 dark:border-gray-700"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(cert.type)}`}>
                      {cert.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    Skills Acquired
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded text-xs font-medium border border-gray-200 dark:border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <ExternalLink size={16} />
                    <span>View</span>
                  </button>
                  <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
                <div className="text-gray-600 dark:text-gray-400">Total Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2</div>
                <div className="text-gray-600 dark:text-gray-400">Workshop Certificates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5</div>
                <div className="text-gray-600 dark:text-gray-400">Technology Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">2025</div>
                <div className="text-gray-600 dark:text-gray-400">Most Recent</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I believe in staying updated with the latest technologies and best practices. 
              These certifications represent my commitment to continuous professional development.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              View All Certificates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;