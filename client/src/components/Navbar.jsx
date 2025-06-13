import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-300 hover:to-green-300 transition-all"
            >
              Ashraful.in
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <ScrollLink 
                to="projects" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
              >
                Projects
              </ScrollLink>

              <ScrollLink 
                to="skills" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
              >
                Skills
              </ScrollLink>

              <ScrollLink 
                to="reviews" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
              >
                Reviews
              </ScrollLink>

              <ScrollLink 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </ScrollLink>

              <ScrollLink 
                to="about" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
              >
                About
              </ScrollLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
          <ScrollLink 
            to="projects" 
            smooth={true} 
            duration={500} 
            offset={-70}
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </ScrollLink>

          <ScrollLink 
            to="skills" 
            smooth={true} 
            duration={500} 
            offset={-70}
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
          >
            Skills
          </ScrollLink>

          <ScrollLink 
            to="reviews" 
            smooth={true} 
            duration={500} 
            offset={-70}
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
          >
            Reviews
          </ScrollLink>

          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-70}
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </ScrollLink>

          <ScrollLink 
            to="about" 
            smooth={true} 
            duration={500} 
            offset={-70}
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
          >
            About
          </ScrollLink>
        </div>
      </div>
      
    </nav>
  );
}
