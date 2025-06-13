import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with overlay effect */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.4 }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags?.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links and button */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub repository"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Live demo"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>

          <Link 
           to="https://www.google.com" 
            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg transition-all duration-300 group"
          >
            View Details
            <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}