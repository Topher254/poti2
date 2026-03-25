import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Sarota Raphael</h3>
            <p className="text-sm leading-relaxed">
              Graduate Telecommunication Engineer & Full-Stack Developer bridging software and networking to build smarter solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-purple-500 transition-colors">Home</Link></li>
              <li><Link to="/software" className="hover:text-purple-500 transition-colors">Software</Link></li>
              <li><Link to="/networking" className="hover:text-purple-500 transition-colors">Networking</Link></li>
              <li><Link to="/blog" className="hover:text-purple-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-purple-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Nairobi, Kenya</li>
              <li>+254 796 871876</li>
              <li>
                <a href="mailto:raphaelsarota@gmail.com" className="hover:text-purple-500 transition-colors">
                  raphaelsarota@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Topher254"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="http://www.linkedin.com/in/sarota-raphael"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:raphaelsarota@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="flex items-center justify-center gap-1">
            &copy; {currentYear} - Sarota Raphael. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;