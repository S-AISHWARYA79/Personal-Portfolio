import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Masters of Computer Application (MCA)',
      institution: 'SRM Institute of Technology',
      duration: '2025 - 2027',
      location: 'Tamil Nadu, India',
      status: 'Currently Pursuing',
      description: 'Pursuing comprehensive computer science education with focus on programming, web development, and software engineering principles.',
      highlights: ['Programming Languages', 'Web Development', 'Database Management', 'Software Engineering']
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Vidhya Sagar Women\'s College',
      university: 'Madras University',
      duration: '2022 - 2025',
      location: 'Tamil Nadu, India',
      status: 'Completed',
      description: 'Pursuing comprehensive computer science education with focus on programming, web development, and software engineering principles.',
      highlights: ['Programming Languages', 'Web Development', 'Database Management', 'Software Engineering']
    },
    {
      degree: 'Higher Secondary Education (HSE - SSLC)',
      institution: 'St. Joseph\'s Matriculation Higher Secondary School',
      university: 'State Board',
      duration: '2020 - 2022',
      location: 'Tamil Nadu, India',
      status: 'Completed',
      description: 'Completed higher secondary education with strong foundation in mathematics and computer science.',
      highlights: ['Mathematics', 'Computer Science', 'Physics', 'Chemistry']
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic journey and educational background
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 transform -translate-x-1/2"></div>

            {educationData.map((edu, index) => (
              <div key={index} className="mb-16 flex justify-between items-center w-full">
                {/** Left Side (Even Index) */}
                {index % 2 === 0 ? (
                  <>
                    {/* Card */}
                    <div className="w-full md:w-5/12">
                      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl 
              transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">

                        {/* Status Badge */}
                        <div className="mb-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${edu.status === 'Currently Pursuing'
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                                : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                              }`}
                          >
                            {edu.status}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                          {edu.degree}
                        </h3>

                        {/* Institution Info */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Award size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          {edu.university && (
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                              <GraduationCap size={16} className="mr-2 text-purple-600 dark:text-purple-400" />
                              <span>{edu.university}</span>
                            </div>
                          )}
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar size={16} className="mr-2 text-green-600 dark:text-green-400" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <MapPin size={16} className="mr-2 text-red-600 dark:text-red-400" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {edu.description}
                        </p>

                        {/* Highlights */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                            Key Subjects
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 
                        dark:text-gray-300 rounded-lg text-sm font-medium 
                        hover:bg-blue-100 dark:hover:bg-blue-900/30 
                        hover:text-blue-700 dark:hover:text-blue-300 
                        transition-colors duration-300"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="z-10 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg">
                      <GraduationCap size={16} className="text-white" />
                    </div>

                    {/* Empty Right Side */}
                    <div className="hidden md:block w-5/12"></div>
                  </>
                ) : (
                  <>
                    {/* Empty Left Side */}
                    <div className="hidden md:block w-5/12"></div>

                    {/* Timeline Dot */}
                    <div className="z-10 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg">
                      <GraduationCap size={16} className="text-white" />
                    </div>

                    {/* Card (Right Side) */}
                    <div className="w-full md:w-5/12">
                      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl 
              transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                        {/* Same card content as above */}
                        <div className="mb-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${edu.status === 'Currently Pursuing'
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                                : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                              }`}
                          >
                            {edu.status}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                          {edu.degree}
                        </h3>

                        {/* Institution Info */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Award size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          {edu.university && (
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                              <GraduationCap size={16} className="mr-2 text-purple-600 dark:text-purple-400" />
                              <span>{edu.university}</span>
                            </div>
                          )}
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar size={16} className="mr-2 text-green-600 dark:text-green-400" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <MapPin size={16} className="mr-2 text-red-600 dark:text-red-400" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {edu.description}
                        </p>

                        {/* Highlights */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                            Key Subjects
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 
                        dark:text-gray-300 rounded-lg text-sm font-medium 
                        hover:bg-blue-100 dark:hover:bg-blue-900/30 
                        hover:text-blue-700 dark:hover:text-blue-300 
                        transition-colors duration-300"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
              <div className="text-gray-600 dark:text-gray-400">Years of Education</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">2</div>
              <div className="text-gray-600 dark:text-gray-400">Institutions</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">80%</div>
              <div className="text-gray-600 dark:text-gray-400">Academic Performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;