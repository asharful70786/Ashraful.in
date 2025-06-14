import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaStar, FaEnvelope, FaCog } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', to: 'hero', icon: <FaHome size={18} /> },
    { name: 'About', to: 'about', icon: <FaUser size={18} /> },
    { name: 'Projects', to: 'projects', icon: <FaCode size={18} /> },
    { name: 'Skills', to: 'skills', icon: <FaCog size={18} /> },
    { name: 'Reviews', to: 'reviews', icon: <FaStar size={18} /> },
    { name: 'Contact', to: 'contact', icon: <FaEnvelope size={18} /> },
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl shadow-purple-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="cursor-pointer flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-slate-900 p-2 rounded-xl border border-slate-700 group-hover:border-slate-600">
                    <HiSparkles className="text-cyan-400 text-2xl" />
                  </div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">
                    Ashraful.in
                  </h1>
                  <p className="text-xs text-slate-400 font-medium -mt-1">Full-Stack Developer</p>
                </div>
              </ScrollLink>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-2 bg-slate-900/50 backdrop-blur-xl rounded-2xl p-2 border border-slate-700/50">
                {navItems.map((item, index) => (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    onSetActive={() => setActiveSection(item.to)}
                    className="cursor-pointer group relative"
                  >
                    <motion.div
                      className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeSection === item.to
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/30'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className={`transition-colors duration-300 ${
                        activeSection === item.to ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-300'
                      }`}>
                        {item.icon}
                      </span>
                      <span className="text-sm font-semibold">{item.name}</span>
                    </motion.div>
                    
                    {/* Active indicator */}
                    {activeSection === item.to && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </ScrollLink>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <motion.button
                onClick={toggleMenu}
                className="relative p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Open main menu</span>
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaTimes className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaBars className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-slate-950/98 backdrop-blur-xl border-t border-slate-800/50">
                <div className="px-4 py-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <ScrollLink
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={handleLinkClick}
                        className="cursor-pointer group block"
                      >
                        <motion.div
                          className={`flex items-center space-x-4 p-4 rounded-xl font-medium transition-all duration-300 ${
                            activeSection === item.to
                              ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/30'
                              : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                          }`}
                          whileHover={{ x: 10 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className={`transition-colors duration-300 ${
                            activeSection === item.to ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-300'
                          }`}>
                            {item.icon}
                          </span>
                          <span className="text-base font-semibold">{item.name}</span>
                          
                          {/* Mobile active indicator */}
                          {activeSection === item.to && (
                            <motion.div
                              className="ml-auto w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                        </motion.div>
                      </ScrollLink>
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="pt-6 border-t border-slate-800/50"
                  >
                    <motion.a
                      href="/md_Ashraful_momin.pdf"
                      download
                      className="flex items-center justify-center space-x-2 w-full p-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Download Resume</span>
                      <HiSparkles className="text-lg" />
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Floating Action Button (Mobile) */}
      <motion.div
        className="fixed bottom-6 right-6 lg:hidden z-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
      >
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
        >
          <motion.button
            className="group relative p-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <FaEnvelope className="relative text-xl" />
          </motion.button>
        </ScrollLink>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 z-50 origin-left"
        style={{
          scaleX: scrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
