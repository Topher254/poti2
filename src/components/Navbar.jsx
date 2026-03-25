import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const linkClass = ({ isActive }) =>
    isActive ? 'text-purple-500 font-semibold' : 'text-gray-400 hover:text-white transition-colors duration-300';

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-4 lg:px-12" style={{ backgroundColor: '#170f24' }}>
      <Link to="/" className="text-2xl font-bold">
        <span className="text-purple-500">SR</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/software" className={linkClass}>Software</NavLink>
        <NavLink to="/networking" className={linkClass}>Networking</NavLink>
        <NavLink to="/blog" className={linkClass}>Blog</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>

      <div className="hidden md:block">
        <Link to="/contact" className="bg-purple-500 text-white hover:bg-purple-600 px-6 py-2 rounded-lg transition-colors duration-300">
          Hire Me
        </Link>
      </div>

      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} className='text-white' /> : <Menu size={24} className='text-white' />}
      </button>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-md z-40 px-6 py-4 border-b-2 border-purple-600 rounded-b-xl" style={{ backgroundColor: 'rgba(23, 15, 36, 0.95)' }}>
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={handleLinkClick} className="text-gray-400 hover:text-white">Home</Link>
            <Link to="/software" onClick={handleLinkClick} className="text-gray-400 hover:text-white">Software</Link>
            <Link to="/networking" onClick={handleLinkClick} className="text-gray-400 hover:text-white">Networking</Link>
            <Link to="/blog" onClick={handleLinkClick} className="text-gray-400 hover:text-white">Blog</Link>
            <Link to="/contact" onClick={handleLinkClick} className="text-gray-400 hover:text-white">Contact</Link>
            <Link to="/contact" onClick={handleLinkClick} className="bg-purple-500 text-white hover:bg-purple-600 px-6 py-2 rounded-lg transition-colors duration-300 self-start">
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;