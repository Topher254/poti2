import React from 'react';
import { Mail, Download, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import myphoto from '../assets/mydp.png';

const Hero = () => {
  return (
    <div
      className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-12 lg:py-24"
      style={{ backgroundColor: '#170f24' }}
    >
      <div className="lg:w-1/2 space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold">
            <span className="text-purple-500">Sarota</span>{' '}
            <span className="text-white">Raphael</span>
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-400">
            Graduate Telecommunication Engineer | Full-Stack Developer
          </h2>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
          Graduate Telecommunication and Information Engineer with hands-on experience in telecom infrastructure,
          RF testing, fiber optics, and IP networking. Also a skilled full-stack developer building modern web applications.
          Passionate about bridging software and network engineering to solve real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
          >
            <Mail size={20} />
            Get In Touch
          </Link>

          <a
            href="/SAROTA_RAPHAEL_RESUME.pdf"
            download
            className="bg-transparent border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Nairobi - Kenya</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+254796871876</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:raphaelsarota@gmail.com" className="hover:text-white transition-colors">
              raphaelsarota@gmail.com
            </a>
          </div>
        </div>

        <div className="flex gap-4 pt-2">
          <a href="https://github.com/Topher254" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="http://www.linkedin.com/in/sarota-raphael" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:raphaelsarota@gmail.com" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-xl opacity-30 scale-110"></div>
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-400/30 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
              <img src={myphoto} alt="Profile" className="object-cover h-full w-full" />
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 -left-6 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;