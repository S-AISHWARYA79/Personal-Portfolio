import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      name: 'Email', 
      icon: <Mail size={20} />, 
      href: 'mailto:aishwaryashankar79@gmail.com',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      href: 'https://www.linkedin.com/in/aishwarya-s-9ba543386',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'GitHub', 
      icon: <Github size={20} />, 
      href: 'https://github.com/S-AISHWARYA79',
      color: 'hover:text-gray-400'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-xl font-bold mr-3">
                AS
              </div>
              <h3 className="text-2xl font-bold">Aishwarya S</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              BCA student passionate about technology and innovation. 
              Always eager to learn and contribute to meaningful projects 
              that make a positive impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`p-3 bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Summary */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Typescript / Javascript', 'Tailwind CSS', 'HTML/CSS', 'Python', 'Java'].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-red-500 animate-pulse" />
              <span>by Aishwarya S</span>
              <Code size={16} className="ml-2 text-blue-400" />
            </div>
            
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Aishwarya S. All rights reserved.
              </p>
              
              <button
                onClick={scrollToTop}
                className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;