import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiExternalLink, FiGithub, FiArrowRight, FiStar, FiEye, FiGitBranch,
  FiCalendar, FiCode, FiZap, FiTrendingUp,
  FiHeart
} from 'react-icons/fi';
import { 
  HiSparkles, HiBookmark, HiPlay, HiLightningBolt, HiHeart
} from 'react-icons/hi';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiTypescript, 
  SiMongodb, SiPython, SiJavascript, SiPostgresql
} from 'react-icons/si';

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [likeCount, setLikeCount] = useState(project.likes || Math.floor(Math.random() * 50) + 10);

  const getTechIcon = (tech) => {
    const iconMap = {
      react: <SiReact className="text-cyan-400" />,
      'next.js': <SiNextdotjs className="text-white" />,
      nextjs: <SiNextdotjs className="text-white" />,
      'node.js': <SiNodedotjs className="text-green-500" />,
      nodejs: <SiNodedotjs className="text-green-500" />,
      typescript: <SiTypescript className="text-blue-500" />,
      javascript: <SiJavascript className="text-yellow-500" />,
      tailwind: <SiTailwindcss className="text-cyan-400" />,
      tailwindcss: <SiTailwindcss className="text-cyan-400" />,
      mongodb: <SiMongodb className="text-green-500" />,
      python: <SiPython className="text-blue-400" />,
      postgresql: <SiPostgresql className="text-blue-400" />,
    };
    return iconMap[tech.toLowerCase()] || <FiCode className="text-slate-400" />;
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed': 
        return { bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400', dot: 'bg-emerald-400' };
      case 'in progress': 
        return { bg: 'bg-amber-500/20', border: 'border-amber-500/30', text: 'text-amber-400', dot: 'bg-amber-400' };
      case 'planning': 
        return { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400', dot: 'bg-blue-400' };
      default: 
        return { bg: 'bg-slate-500/20', border: 'border-slate-500/30', text: 'text-slate-400', dot: 'bg-slate-400' };
    }
  };

  const statusColors = getStatusColor(project.status);

  const handleLike = (e) => {
    e.preventDefault();
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        delay: index * 0.15, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: { 
      y: -15, 
      scale: 1.03, 
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  };

  const imageVariants = { 
    hover: { 
      scale: 1.15, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    } 
  };

  const overlayVariants = { 
    hidden: { opacity: 0, scale: 0.8 }, 
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      } 
    } 
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative max-w-sm mx-auto"
    >
      {/* Animated Background Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse"></div>
      
      {/* Secondary Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-emerald-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl group-hover:border-slate-600/50 group-hover:shadow-3xl transition-all duration-500">

        {/* Top Action Bar */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm"
            >
              <HiSparkles className="text-xs animate-pulse" />
              <span>FEATURED</span>
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 ml-auto">
            {/* Like Button */}
            <motion.button
              onClick={handleLike}
              className={`p-2 backdrop-blur-sm rounded-full border transition-all duration-300 ${
                isLiked 
                  ? 'bg-red-500/20 border-red-500/30 text-red-400' 
                  : 'bg-slate-800/50 border-slate-600/50 text-slate-400 hover:text-red-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiHeart className={`text-lg ${isLiked ? 'fill-current animate-pulse' : ''}`} />
            </motion.button>

            {/* Bookmark Button */}
            <motion.button
              onClick={(e) => { e.preventDefault(); setIsBookmarked(!isBookmarked); }}
              className={`p-2 backdrop-blur-sm rounded-full border transition-all duration-300 ${
                isBookmarked 
                  ? 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400' 
                  : 'bg-slate-800/50 border-slate-600/50 text-slate-400 hover:text-cyan-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiBookmark className={`text-lg ${isBookmarked ? 'fill-current' : ''}`} />
            </motion.button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/50 to-transparent animate-shimmer"></div>
            </div>
          )}
          
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            variants={imageVariants}
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
          
          {/* Image Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-slate-900/30"></div>

          {/* Hover Overlay with Actions */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="flex space-x-4">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <HiPlay className="text-xl group-hover/btn:scale-110 transition-transform duration-200" />
                    </motion.a>
                  )}

                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn p-4 bg-slate-800 text-white rounded-2xl hover:bg-slate-700 hover:shadow-2xl transition-all duration-300"
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub className="text-xl group-hover/btn:scale-110 transition-transform duration-200" />
                    </motion.a>
                  )}

                  <motion.button
                    className="group/btn p-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiExternalLink className="text-xl group-hover/btn:scale-110 transition-transform duration-200" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Status Badge */}
          {project.status && (
            <div className="absolute bottom-4 left-4">
              <div className={`flex items-center space-x-2 px-3 py-1.5 ${statusColors.bg} ${statusColors.border} border backdrop-blur-sm rounded-full`}>
                <div className={`w-2 h-2 ${statusColors.dot} rounded-full animate-pulse`}></div>
                <span className={`text-xs font-medium ${statusColors.text}`}>
                  {project.status}
                </span>
              </div>
            </div>
          )}

          {/* Trending Badge */}
          {project.trending && (
            <div className="absolute bottom-4 right-4">
              <div className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 backdrop-blur-sm rounded-full">
                <FiTrendingUp className="text-orange-400 text-xs" />
                <span className="text-orange-400 text-xs font-medium">Trending</span>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500 line-clamp-2">
                {project.title}
              </h3>
              {project.category && (
                <span className="px-3 py-1 bg-slate-800/50 border border-slate-600/50 text-slate-300 text-xs font-medium rounded-lg whitespace-nowrap ml-2 group-hover:border-slate-500/50 transition-colors duration-300">
                  {project.category}
                </span>
              )}
            </div>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors duration-300">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
                  {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack && project.techStack.map((tech, idx) => (
              <div key={idx} className="flex items-center justify-center w-8 h-8 bg-slate-800/50 border border-slate-600/50 rounded-full">
                {getTechIcon(tech)}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <div className="flex items-center gap-2">
              <FiHeart className="text-pink-400" />
              <span>{likeCount}</span>
            </div>

            <div className="flex items-center gap-2">
              <FiCalendar />
              <span>{project.date || "2025"}</span>
            </div>

            <div className="flex items-center gap-2">
              <FiGitBranch />
              <span>{project.version || "v1.0"}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
