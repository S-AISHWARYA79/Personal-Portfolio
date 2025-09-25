import React, { useState, useEffect, useRef } from 'react';
import { Users, Clock, Lightbulb, Crown, Monitor } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: 'HTML / CSS', level: 100, icon: '🌐', color: 'from-blue-500 to-purple-500' },
    { name: 'JavaScript / Typescript', level: 80, icon: '⚡', color: 'from-yellow-500 to-orange-500' },
    { name: 'React JS', level: 80, icon: '🗄️', color: 'from-green-500 to-blue-500' },
    { name: 'Python', level: 70, icon: '🐍', color: 'from-orange-500 to-red-500' },
    { name: 'Core Java', level: 70, icon: '☕', color: 'from-blue-600 to-indigo-600' },
  ];

  const softSkills = [
    { name: 'Creativity', icon: <Lightbulb size={24} />, description: 'Innovative problem-solving approach' },
    { name: 'Team Work', icon: <Users size={24} />, description: 'Collaborative and supportive team player' },
    { name: 'Time Management', icon: <Clock size={24} />, description: 'Efficient task prioritization and execution' },
    { name: 'Leadership', icon: <Crown size={24} />, description: 'Natural ability to guide and motivate others' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My technical proficiency and soft skills that drive success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technical Skills */}
            <div>
              <div className="flex items-center mb-8">
                <Monitor className="text-blue-600 dark:text-blue-400 mr-3" size={32} />
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                  Technical Skills
                </h3>
              </div>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-gray-800 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <div className="flex items-center mb-8">
                <Users className="text-purple-600 dark:text-purple-400 mr-3" size={32} />
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                  Soft Skills
                </h3>
              </div>

              <div className="grid gap-6">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                          {skill.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                My goal is to enhance my skills further and contribute meaningfully to innovative projects 
                that make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;