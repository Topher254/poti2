import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-4 lg:px-12" style={{ backgroundColor: '#170f24' }}>
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-purple-500">SR</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
        <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">Experience</a>
        <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
        <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
      </div>

      {/* Desktop Hire Me Button */}
      <div className="hidden md:block">
        <a href="#contact"  className='bg-purple-500 text-white hover:bg-purple-600 px-6 py-2 rounded-lg transition-colors duration-300'> Hire Me</a>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} className='text-white' /> : <Menu size={24} className='text-white' />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-md z-40 px-6 py-4 border-b-2 border-purple-600 rounded-b-xl" style={{ backgroundColor: 'rgba(23, 15, 36, 0.95)' }}>
          <div className="flex flex-col space-y-4">
            <a href="#home" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
            <a href="#experience" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300">Experience</a>
            <a href="#projects" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
            <a href="#contact" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
            <button className="bg-purple-500 text-white hover:bg-purple-600 px-6 py-2 rounded-lg transition-colors duration-300 self-start">
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
